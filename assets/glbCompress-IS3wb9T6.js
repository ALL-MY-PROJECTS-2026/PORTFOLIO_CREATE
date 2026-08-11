const l="https://cdn.jsdelivr.net/npm/@gltf-transform/core@4/+esm",d="https://cdn.jsdelivr.net/npm/@gltf-transform/extensions@4/+esm",m="https://cdn.jsdelivr.net/npm/three@0.180.0/examples/jsm/libs/draco/draco_encoder.js";function u(t){try{const e=new DataView(t);if(e.getUint32(0,!0)!==1179937895)return!1;const n=e.getUint32(12,!0);return new TextDecoder().decode(new Uint8Array(t,20,n)).includes("KHR_draco_mesh_compression")}catch{return!1}}const f=`
self.onmessage = async (e) => {
  const { buf, coreUrl, extUrl, encUrl } = e.data;
  try {
    const [core, ext] = await Promise.all([import(coreUrl), import(extUrl)]);

    /* module worker에는 importScripts가 없습니다 — fetch+eval로 전역에 올립니다. */
    (0, eval)(await (await fetch(encUrl)).text());
    /* 이 인코더 빌드는 동기적으로 준비됩니다(calledRun). 콜백은 부르지 않습니다. */
    const encoder = self.DracoEncoderModule({});
    if (!encoder || !(encoder.calledRun || encoder.Encoder)) {
      throw new Error('Draco 인코더가 준비되지 않았습니다');
    }

    const io = new core.WebIO()
      .registerExtensions(ext.ALL_EXTENSIONS)
      .registerDependencies({ 'draco3d.encoder': encoder });

    const doc = await io.readBinary(new Uint8Array(buf));
    doc.createExtension(ext.KHRDracoMeshCompression)
      .setRequired(true)
      .setEncoderOptions({ method: ext.KHRDracoMeshCompression.EncoderMethod.EDGEBREAKER });

    const bin = await io.writeBinary(doc);
    self.postMessage({ ok: true, bin }, [bin.buffer]);
  } catch (err) {
    self.postMessage({ ok: false, reason: String(err && err.message || err) });
  }
};
`;async function p(t){let e=null;try{const n=await t.arrayBuffer();if(u(n))return null;const o=URL.createObjectURL(new Blob([f],{type:"text/javascript"}));e=new Worker(o,{type:"module"}),URL.revokeObjectURL(o);const r=await new Promise(s=>{const a=setTimeout(()=>s(null),9e4);e.onmessage=c=>{clearTimeout(a),s(c.data)},e.onerror=c=>{clearTimeout(a),s({ok:!1,reason:c.message})},e.postMessage({buf:n,coreUrl:l,extUrl:d,encUrl:m},[n])});if(!(r!=null&&r.ok))return r!=null&&r.reason&&console.warn("[glbCompress] 압축 실패 — 원본 흐름으로 폴백합니다:",r.reason),null;if(r.bin.byteLength>=t.size)return null;const i=t.name.replace(/\.glb$/i,"")+".glb";return new File([r.bin],i,{type:"model/gltf-binary"})}catch(n){return console.warn("[glbCompress] 압축 실패 — 원본 흐름으로 폴백합니다.",n),null}finally{e==null||e.terminate()}}export{p as compressGlb};
