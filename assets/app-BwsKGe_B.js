(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();function kh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Hd={exports:{}},$s={},Ud={exports:{}},_e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ao=Symbol.for("react.element"),Sh=Symbol.for("react.portal"),jh=Symbol.for("react.fragment"),Eh=Symbol.for("react.strict_mode"),Ch=Symbol.for("react.profiler"),Nh=Symbol.for("react.provider"),$h=Symbol.for("react.context"),Lh=Symbol.for("react.forward_ref"),Rh=Symbol.for("react.suspense"),Mh=Symbol.for("react.memo"),Th=Symbol.for("react.lazy"),Qc=Symbol.iterator;function zh(e){return e===null||typeof e!="object"?null:(e=Qc&&e[Qc]||e["@@iterator"],typeof e=="function"?e:null)}var Gd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vd=Object.assign,Yd={};function aa(e,n,r){this.props=e,this.context=n,this.refs=Yd,this.updater=r||Gd}aa.prototype.isReactComponent={};aa.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};aa.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qd(){}qd.prototype=aa.prototype;function $l(e,n,r){this.props=e,this.context=n,this.refs=Yd,this.updater=r||Gd}var Ll=$l.prototype=new qd;Ll.constructor=$l;Vd(Ll,aa.prototype);Ll.isPureReactComponent=!0;var Zc=Array.isArray,Kd=Object.prototype.hasOwnProperty,Rl={current:null},Xd={key:!0,ref:!0,__self:!0,__source:!0};function Qd(e,n,r){var t,a={},o=null,i=null;if(n!=null)for(t in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(o=""+n.key),n)Kd.call(n,t)&&!Xd.hasOwnProperty(t)&&(a[t]=n[t]);var l=arguments.length-2;if(l===1)a.children=r;else if(1<l){for(var f=Array(l),u=0;u<l;u++)f[u]=arguments[u+2];a.children=f}if(e&&e.defaultProps)for(t in l=e.defaultProps,l)a[t]===void 0&&(a[t]=l[t]);return{$$typeof:ao,type:e,key:o,ref:i,props:a,_owner:Rl.current}}function Ph(e,n){return{$$typeof:ao,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Ml(e){return typeof e=="object"&&e!==null&&e.$$typeof===ao}function Ah(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return n[r]})}var Jc=/\/+/g;function Qs(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Ah(""+e.key):n.toString(36)}function Po(e,n,r,t,a){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case ao:case Sh:i=!0}}if(i)return i=e,a=a(i),e=t===""?"."+Qs(i,0):t,Zc(a)?(r="",e!=null&&(r=e.replace(Jc,"$&/")+"/"),Po(a,n,r,"",function(u){return u})):a!=null&&(Ml(a)&&(a=Ph(a,r+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(Jc,"$&/")+"/")+e)),n.push(a)),1;if(i=0,t=t===""?".":t+":",Zc(e))for(var l=0;l<e.length;l++){o=e[l];var f=t+Qs(o,l);i+=Po(o,n,r,f,a)}else if(f=zh(e),typeof f=="function")for(e=f.call(e),l=0;!(o=e.next()).done;)o=o.value,f=t+Qs(o,l++),i+=Po(o,n,r,f,a);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function fo(e,n,r){if(e==null)return e;var t=[],a=0;return Po(e,t,"","",function(o){return n.call(r,o,a++)}),t}function Dh(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var un={current:null},Ao={transition:null},Oh={ReactCurrentDispatcher:un,ReactCurrentBatchConfig:Ao,ReactCurrentOwner:Rl};function Zd(){throw Error("act(...) is not supported in production builds of React.")}_e.Children={map:fo,forEach:function(e,n,r){fo(e,function(){n.apply(this,arguments)},r)},count:function(e){var n=0;return fo(e,function(){n++}),n},toArray:function(e){return fo(e,function(n){return n})||[]},only:function(e){if(!Ml(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};_e.Component=aa;_e.Fragment=jh;_e.Profiler=Ch;_e.PureComponent=$l;_e.StrictMode=Eh;_e.Suspense=Rh;_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Oh;_e.act=Zd;_e.cloneElement=function(e,n,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var t=Vd({},e.props),a=e.key,o=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,i=Rl.current),n.key!==void 0&&(a=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(f in n)Kd.call(n,f)&&!Xd.hasOwnProperty(f)&&(t[f]=n[f]===void 0&&l!==void 0?l[f]:n[f])}var f=arguments.length-2;if(f===1)t.children=r;else if(1<f){l=Array(f);for(var u=0;u<f;u++)l[u]=arguments[u+2];t.children=l}return{$$typeof:ao,type:e.type,key:a,ref:o,props:t,_owner:i}};_e.createContext=function(e){return e={$$typeof:$h,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Nh,_context:e},e.Consumer=e};_e.createElement=Qd;_e.createFactory=function(e){var n=Qd.bind(null,e);return n.type=e,n};_e.createRef=function(){return{current:null}};_e.forwardRef=function(e){return{$$typeof:Lh,render:e}};_e.isValidElement=Ml;_e.lazy=function(e){return{$$typeof:Th,_payload:{_status:-1,_result:e},_init:Dh}};_e.memo=function(e,n){return{$$typeof:Mh,type:e,compare:n===void 0?null:n}};_e.startTransition=function(e){var n=Ao.transition;Ao.transition={};try{e()}finally{Ao.transition=n}};_e.unstable_act=Zd;_e.useCallback=function(e,n){return un.current.useCallback(e,n)};_e.useContext=function(e){return un.current.useContext(e)};_e.useDebugValue=function(){};_e.useDeferredValue=function(e){return un.current.useDeferredValue(e)};_e.useEffect=function(e,n){return un.current.useEffect(e,n)};_e.useId=function(){return un.current.useId()};_e.useImperativeHandle=function(e,n,r){return un.current.useImperativeHandle(e,n,r)};_e.useInsertionEffect=function(e,n){return un.current.useInsertionEffect(e,n)};_e.useLayoutEffect=function(e,n){return un.current.useLayoutEffect(e,n)};_e.useMemo=function(e,n){return un.current.useMemo(e,n)};_e.useReducer=function(e,n,r){return un.current.useReducer(e,n,r)};_e.useRef=function(e){return un.current.useRef(e)};_e.useState=function(e){return un.current.useState(e)};_e.useSyncExternalStore=function(e,n,r){return un.current.useSyncExternalStore(e,n,r)};_e.useTransition=function(){return un.current.useTransition()};_e.version="18.3.1";Ud.exports=_e;var N=Ud.exports;const qo=kh(N);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fh=N,Ih=Symbol.for("react.element"),Bh=Symbol.for("react.fragment"),Wh=Object.prototype.hasOwnProperty,Hh=Fh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Uh={key:!0,ref:!0,__self:!0,__source:!0};function Jd(e,n,r){var t,a={},o=null,i=null;r!==void 0&&(o=""+r),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(i=n.ref);for(t in n)Wh.call(n,t)&&!Uh.hasOwnProperty(t)&&(a[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps,n)a[t]===void 0&&(a[t]=n[t]);return{$$typeof:Ih,type:e,key:o,ref:i,props:a,_owner:Hh.current}}$s.Fragment=Bh;$s.jsx=Jd;$s.jsxs=Jd;Hd.exports=$s;var s=Hd.exports,eu={exports:{}},$n={},nu={exports:{}},ru={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(P,W){var Y=P.length;P.push(W);e:for(;0<Y;){var ue=Y-1>>>1,K=P[ue];if(0<a(K,W))P[ue]=W,P[Y]=K,Y=ue;else break e}}function r(P){return P.length===0?null:P[0]}function t(P){if(P.length===0)return null;var W=P[0],Y=P.pop();if(Y!==W){P[0]=Y;e:for(var ue=0,K=P.length,Ae=K>>>1;ue<Ae;){var $e=2*(ue+1)-1,J=P[$e],re=$e+1,Le=P[re];if(0>a(J,Y))re<K&&0>a(Le,J)?(P[ue]=Le,P[re]=Y,ue=re):(P[ue]=J,P[$e]=Y,ue=$e);else if(re<K&&0>a(Le,Y))P[ue]=Le,P[re]=Y,ue=re;else break e}}return W}function a(P,W){var Y=P.sortIndex-W.sortIndex;return Y!==0?Y:P.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,l=i.now();e.unstable_now=function(){return i.now()-l}}var f=[],u=[],x=1,d=null,m=3,w=!1,v=!1,b=!1,S=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(P){for(var W=r(u);W!==null;){if(W.callback===null)t(u);else if(W.startTime<=P)t(u),W.sortIndex=W.expirationTime,n(f,W);else break;W=r(u)}}function g(P){if(b=!1,p(P),!v)if(r(f)!==null)v=!0,ye(y);else{var W=r(u);W!==null&&we(g,W.startTime-P)}}function y(P,W){v=!1,b&&(b=!1,h(j),j=-1),w=!0;var Y=m;try{for(p(W),d=r(f);d!==null&&(!(d.expirationTime>W)||P&&!M());){var ue=d.callback;if(typeof ue=="function"){d.callback=null,m=d.priorityLevel;var K=ue(d.expirationTime<=W);W=e.unstable_now(),typeof K=="function"?d.callback=K:d===r(f)&&t(f),p(W)}else t(f);d=r(f)}if(d!==null)var Ae=!0;else{var $e=r(u);$e!==null&&we(g,$e.startTime-W),Ae=!1}return Ae}finally{d=null,m=Y,w=!1}}var k=!1,_=null,j=-1,C=5,R=-1;function M(){return!(e.unstable_now()-R<C)}function A(){if(_!==null){var P=e.unstable_now();R=P;var W=!0;try{W=_(!0,P)}finally{W?Q():(k=!1,_=null)}}else k=!1}var Q;if(typeof c=="function")Q=function(){c(A)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,V=B.port2;B.port1.onmessage=A,Q=function(){V.postMessage(null)}}else Q=function(){S(A,0)};function ye(P){_=P,k||(k=!0,Q())}function we(P,W){j=S(function(){P(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){v||w||(v=!0,ye(y))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return r(f)},e.unstable_next=function(P){switch(m){case 1:case 2:case 3:var W=3;break;default:W=m}var Y=m;m=W;try{return P()}finally{m=Y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,W){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Y=m;m=P;try{return W()}finally{m=Y}},e.unstable_scheduleCallback=function(P,W,Y){var ue=e.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ue+Y:ue):Y=ue,P){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=Y+K,P={id:x++,callback:W,priorityLevel:P,startTime:Y,expirationTime:K,sortIndex:-1},Y>ue?(P.sortIndex=Y,n(u,P),r(f)===null&&P===r(u)&&(b?(h(j),j=-1):b=!0,we(g,Y-ue))):(P.sortIndex=K,n(f,P),v||w||(v=!0,ye(y))),P},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(P){var W=m;return function(){var Y=m;m=W;try{return P.apply(this,arguments)}finally{m=Y}}}})(ru);nu.exports=ru;var Gh=nu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vh=N,Nn=Gh;function O(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tu=new Set,Aa={};function gt(e,n){qt(e,n),qt(e+"Capture",n)}function qt(e,n){for(Aa[e]=n,e=0;e<n.length;e++)tu.add(n[e])}var _r=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ni=Object.prototype.hasOwnProperty,Yh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ef={},nf={};function qh(e){return Ni.call(nf,e)?!0:Ni.call(ef,e)?!1:Yh.test(e)?nf[e]=!0:(ef[e]=!0,!1)}function Kh(e,n,r,t){if(r!==null&&r.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return t?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Xh(e,n,r,t){if(n===null||typeof n>"u"||Kh(e,n,r,t))return!0;if(t)return!1;if(r!==null)switch(r.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function pn(e,n,r,t,a,o,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=t,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=i}var an={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){an[e]=new pn(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];an[n]=new pn(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){an[e]=new pn(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){an[e]=new pn(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){an[e]=new pn(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){an[e]=new pn(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){an[e]=new pn(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){an[e]=new pn(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){an[e]=new pn(e,5,!1,e.toLowerCase(),null,!1,!1)});var Tl=/[\-:]([a-z])/g;function zl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Tl,zl);an[n]=new pn(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Tl,zl);an[n]=new pn(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Tl,zl);an[n]=new pn(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){an[e]=new pn(e,1,!1,e.toLowerCase(),null,!1,!1)});an.xlinkHref=new pn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){an[e]=new pn(e,1,!1,e.toLowerCase(),null,!0,!0)});function Pl(e,n,r,t){var a=an.hasOwnProperty(n)?an[n]:null;(a!==null?a.type!==0:t||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Xh(n,r,a,t)&&(r=null),t||a===null?qh(n)&&(r===null?e.removeAttribute(n):e.setAttribute(n,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(n=a.attributeName,t=a.attributeNamespace,r===null?e.removeAttribute(n):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,t?e.setAttributeNS(t,n,r):e.setAttribute(n,r))))}var Er=Vh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,uo=Symbol.for("react.element"),Ct=Symbol.for("react.portal"),Nt=Symbol.for("react.fragment"),Al=Symbol.for("react.strict_mode"),$i=Symbol.for("react.profiler"),au=Symbol.for("react.provider"),ou=Symbol.for("react.context"),Dl=Symbol.for("react.forward_ref"),Li=Symbol.for("react.suspense"),Ri=Symbol.for("react.suspense_list"),Ol=Symbol.for("react.memo"),$r=Symbol.for("react.lazy"),su=Symbol.for("react.offscreen"),rf=Symbol.iterator;function la(e){return e===null||typeof e!="object"?null:(e=rf&&e[rf]||e["@@iterator"],typeof e=="function"?e:null)}var Ge=Object.assign,Zs;function ya(e){if(Zs===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);Zs=n&&n[1]||""}return`
`+Zs+e}var Js=!1;function ei(e,n){if(!e||Js)return"";Js=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var t=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){t=u}e.call(n.prototype)}else{try{throw Error()}catch(u){t=u}e()}}catch(u){if(u&&t&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),o=t.stack.split(`
`),i=a.length-1,l=o.length-1;1<=i&&0<=l&&a[i]!==o[l];)l--;for(;1<=i&&0<=l;i--,l--)if(a[i]!==o[l]){if(i!==1||l!==1)do if(i--,l--,0>l||a[i]!==o[l]){var f=`
`+a[i].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=i&&0<=l);break}}}finally{Js=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?ya(e):""}function Qh(e){switch(e.tag){case 5:return ya(e.type);case 16:return ya("Lazy");case 13:return ya("Suspense");case 19:return ya("SuspenseList");case 0:case 2:case 15:return e=ei(e.type,!1),e;case 11:return e=ei(e.type.render,!1),e;case 1:return e=ei(e.type,!0),e;default:return""}}function Mi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Nt:return"Fragment";case Ct:return"Portal";case $i:return"Profiler";case Al:return"StrictMode";case Li:return"Suspense";case Ri:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ou:return(e.displayName||"Context")+".Consumer";case au:return(e._context.displayName||"Context")+".Provider";case Dl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ol:return n=e.displayName||null,n!==null?n:Mi(e.type)||"Memo";case $r:n=e._payload,e=e._init;try{return Mi(e(n))}catch{}}return null}function Zh(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mi(n);case 8:return n===Al?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Ur(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function iu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Jh(e){var n=iu(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),t=""+e[n];if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,o=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(i){t=""+i,o.call(this,i)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return t},setValue:function(i){t=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function po(e){e._valueTracker||(e._valueTracker=Jh(e))}function lu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),t="";return e&&(t=iu(e)?e.checked?"true":"false":e.value),e=t,e!==r?(n.setValue(e),!0):!1}function Ko(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ti(e,n){var r=n.checked;return Ge({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function tf(e,n){var r=n.defaultValue==null?"":n.defaultValue,t=n.checked!=null?n.checked:n.defaultChecked;r=Ur(n.value!=null?n.value:r),e._wrapperState={initialChecked:t,initialValue:r,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function cu(e,n){n=n.checked,n!=null&&Pl(e,"checked",n,!1)}function zi(e,n){cu(e,n);var r=Ur(n.value),t=n.type;if(r!=null)t==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(t==="submit"||t==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Pi(e,n.type,r):n.hasOwnProperty("defaultValue")&&Pi(e,n.type,Ur(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function af(e,n,r){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var t=n.type;if(!(t!=="submit"&&t!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,r||n===e.value||(e.value=n),e.defaultValue=n}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Pi(e,n,r){(n!=="number"||Ko(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var wa=Array.isArray;function It(e,n,r,t){if(e=e.options,n){n={};for(var a=0;a<r.length;a++)n["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=n.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&t&&(e[r].defaultSelected=!0)}else{for(r=""+Ur(r),n=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,t&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function Ai(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(O(91));return Ge({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function of(e,n){var r=n.value;if(r==null){if(r=n.children,n=n.defaultValue,r!=null){if(n!=null)throw Error(O(92));if(wa(r)){if(1<r.length)throw Error(O(93));r=r[0]}n=r}n==null&&(n=""),r=n}e._wrapperState={initialValue:Ur(r)}}function fu(e,n){var r=Ur(n.value),t=Ur(n.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),n.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),t!=null&&(e.defaultValue=""+t)}function sf(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function du(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Di(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?du(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var mo,uu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,r,t,a){MSApp.execUnsafeLocalFunction(function(){return e(n,r,t,a)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(mo=mo||document.createElement("div"),mo.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=mo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Da(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var ja={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ex=["Webkit","ms","Moz","O"];Object.keys(ja).forEach(function(e){ex.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),ja[n]=ja[e]})});function pu(e,n,r){return n==null||typeof n=="boolean"||n===""?"":r||typeof n!="number"||n===0||ja.hasOwnProperty(e)&&ja[e]?(""+n).trim():n+"px"}function mu(e,n){e=e.style;for(var r in n)if(n.hasOwnProperty(r)){var t=r.indexOf("--")===0,a=pu(r,n[r],t);r==="float"&&(r="cssFloat"),t?e.setProperty(r,a):e[r]=a}}var nx=Ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Oi(e,n){if(n){if(nx[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(O(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(O(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(O(61))}if(n.style!=null&&typeof n.style!="object")throw Error(O(62))}}function Fi(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ii=null;function Fl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bi=null,Bt=null,Wt=null;function lf(e){if(e=io(e)){if(typeof Bi!="function")throw Error(O(280));var n=e.stateNode;n&&(n=zs(n),Bi(e.stateNode,e.type,n))}}function hu(e){Bt?Wt?Wt.push(e):Wt=[e]:Bt=e}function xu(){if(Bt){var e=Bt,n=Wt;if(Wt=Bt=null,lf(e),n)for(e=0;e<n.length;e++)lf(n[e])}}function gu(e,n){return e(n)}function vu(){}var ni=!1;function yu(e,n,r){if(ni)return e(n,r);ni=!0;try{return gu(e,n,r)}finally{ni=!1,(Bt!==null||Wt!==null)&&(vu(),xu())}}function Oa(e,n){var r=e.stateNode;if(r===null)return null;var t=zs(r);if(t===null)return null;r=t[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(e=e.type,t=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!t;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(O(231,n,typeof r));return r}var Wi=!1;if(_r)try{var ca={};Object.defineProperty(ca,"passive",{get:function(){Wi=!0}}),window.addEventListener("test",ca,ca),window.removeEventListener("test",ca,ca)}catch{Wi=!1}function rx(e,n,r,t,a,o,i,l,f){var u=Array.prototype.slice.call(arguments,3);try{n.apply(r,u)}catch(x){this.onError(x)}}var Ea=!1,Xo=null,Qo=!1,Hi=null,tx={onError:function(e){Ea=!0,Xo=e}};function ax(e,n,r,t,a,o,i,l,f){Ea=!1,Xo=null,rx.apply(tx,arguments)}function ox(e,n,r,t,a,o,i,l,f){if(ax.apply(this,arguments),Ea){if(Ea){var u=Xo;Ea=!1,Xo=null}else throw Error(O(198));Qo||(Qo=!0,Hi=u)}}function vt(e){var n=e,r=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(r=n.return),e=n.return;while(e)}return n.tag===3?r:null}function wu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function cf(e){if(vt(e)!==e)throw Error(O(188))}function sx(e){var n=e.alternate;if(!n){if(n=vt(e),n===null)throw Error(O(188));return n!==e?null:e}for(var r=e,t=n;;){var a=r.return;if(a===null)break;var o=a.alternate;if(o===null){if(t=a.return,t!==null){r=t;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===r)return cf(a),e;if(o===t)return cf(a),n;o=o.sibling}throw Error(O(188))}if(r.return!==t.return)r=a,t=o;else{for(var i=!1,l=a.child;l;){if(l===r){i=!0,r=a,t=o;break}if(l===t){i=!0,t=a,r=o;break}l=l.sibling}if(!i){for(l=o.child;l;){if(l===r){i=!0,r=o,t=a;break}if(l===t){i=!0,t=o,r=a;break}l=l.sibling}if(!i)throw Error(O(189))}}if(r.alternate!==t)throw Error(O(190))}if(r.tag!==3)throw Error(O(188));return r.stateNode.current===r?e:n}function bu(e){return e=sx(e),e!==null?_u(e):null}function _u(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=_u(e);if(n!==null)return n;e=e.sibling}return null}var ku=Nn.unstable_scheduleCallback,ff=Nn.unstable_cancelCallback,ix=Nn.unstable_shouldYield,lx=Nn.unstable_requestPaint,Ye=Nn.unstable_now,cx=Nn.unstable_getCurrentPriorityLevel,Il=Nn.unstable_ImmediatePriority,Su=Nn.unstable_UserBlockingPriority,Zo=Nn.unstable_NormalPriority,fx=Nn.unstable_LowPriority,ju=Nn.unstable_IdlePriority,Ls=null,cr=null;function dx(e){if(cr&&typeof cr.onCommitFiberRoot=="function")try{cr.onCommitFiberRoot(Ls,e,void 0,(e.current.flags&128)===128)}catch{}}var Yn=Math.clz32?Math.clz32:mx,ux=Math.log,px=Math.LN2;function mx(e){return e>>>=0,e===0?32:31-(ux(e)/px|0)|0}var ho=64,xo=4194304;function ba(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Jo(e,n){var r=e.pendingLanes;if(r===0)return 0;var t=0,a=e.suspendedLanes,o=e.pingedLanes,i=r&268435455;if(i!==0){var l=i&~a;l!==0?t=ba(l):(o&=i,o!==0&&(t=ba(o)))}else i=r&~a,i!==0?t=ba(i):o!==0&&(t=ba(o));if(t===0)return 0;if(n!==0&&n!==t&&!(n&a)&&(a=t&-t,o=n&-n,a>=o||a===16&&(o&4194240)!==0))return n;if(t&4&&(t|=r&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=t;0<n;)r=31-Yn(n),a=1<<r,t|=e[r],n&=~a;return t}function hx(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xx(e,n){for(var r=e.suspendedLanes,t=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Yn(o),l=1<<i,f=a[i];f===-1?(!(l&r)||l&t)&&(a[i]=hx(l,n)):f<=n&&(e.expiredLanes|=l),o&=~l}}function Ui(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Eu(){var e=ho;return ho<<=1,!(ho&4194240)&&(ho=64),e}function ri(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function oo(e,n,r){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Yn(n),e[n]=r}function gx(e,n){var r=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var t=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-Yn(r),o=1<<a;n[a]=0,t[a]=-1,e[a]=-1,r&=~o}}function Bl(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var t=31-Yn(r),a=1<<t;a&n|e[t]&n&&(e[t]|=n),r&=~a}}var Ne=0;function Cu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Nu,Wl,$u,Lu,Ru,Gi=!1,go=[],Ar=null,Dr=null,Or=null,Fa=new Map,Ia=new Map,Rr=[],vx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function df(e,n){switch(e){case"focusin":case"focusout":Ar=null;break;case"dragenter":case"dragleave":Dr=null;break;case"mouseover":case"mouseout":Or=null;break;case"pointerover":case"pointerout":Fa.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ia.delete(n.pointerId)}}function fa(e,n,r,t,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:r,eventSystemFlags:t,nativeEvent:o,targetContainers:[a]},n!==null&&(n=io(n),n!==null&&Wl(n)),e):(e.eventSystemFlags|=t,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function yx(e,n,r,t,a){switch(n){case"focusin":return Ar=fa(Ar,e,n,r,t,a),!0;case"dragenter":return Dr=fa(Dr,e,n,r,t,a),!0;case"mouseover":return Or=fa(Or,e,n,r,t,a),!0;case"pointerover":var o=a.pointerId;return Fa.set(o,fa(Fa.get(o)||null,e,n,r,t,a)),!0;case"gotpointercapture":return o=a.pointerId,Ia.set(o,fa(Ia.get(o)||null,e,n,r,t,a)),!0}return!1}function Mu(e){var n=nt(e.target);if(n!==null){var r=vt(n);if(r!==null){if(n=r.tag,n===13){if(n=wu(r),n!==null){e.blockedOn=n,Ru(e.priority,function(){$u(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Do(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=Vi(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var t=new r.constructor(r.type,r);Ii=t,r.target.dispatchEvent(t),Ii=null}else return n=io(r),n!==null&&Wl(n),e.blockedOn=r,!1;n.shift()}return!0}function uf(e,n,r){Do(e)&&r.delete(n)}function wx(){Gi=!1,Ar!==null&&Do(Ar)&&(Ar=null),Dr!==null&&Do(Dr)&&(Dr=null),Or!==null&&Do(Or)&&(Or=null),Fa.forEach(uf),Ia.forEach(uf)}function da(e,n){e.blockedOn===n&&(e.blockedOn=null,Gi||(Gi=!0,Nn.unstable_scheduleCallback(Nn.unstable_NormalPriority,wx)))}function Ba(e){function n(a){return da(a,e)}if(0<go.length){da(go[0],e);for(var r=1;r<go.length;r++){var t=go[r];t.blockedOn===e&&(t.blockedOn=null)}}for(Ar!==null&&da(Ar,e),Dr!==null&&da(Dr,e),Or!==null&&da(Or,e),Fa.forEach(n),Ia.forEach(n),r=0;r<Rr.length;r++)t=Rr[r],t.blockedOn===e&&(t.blockedOn=null);for(;0<Rr.length&&(r=Rr[0],r.blockedOn===null);)Mu(r),r.blockedOn===null&&Rr.shift()}var Ht=Er.ReactCurrentBatchConfig,es=!0;function bx(e,n,r,t){var a=Ne,o=Ht.transition;Ht.transition=null;try{Ne=1,Hl(e,n,r,t)}finally{Ne=a,Ht.transition=o}}function _x(e,n,r,t){var a=Ne,o=Ht.transition;Ht.transition=null;try{Ne=4,Hl(e,n,r,t)}finally{Ne=a,Ht.transition=o}}function Hl(e,n,r,t){if(es){var a=Vi(e,n,r,t);if(a===null)ui(e,n,t,ns,r),df(e,t);else if(yx(a,e,n,r,t))t.stopPropagation();else if(df(e,t),n&4&&-1<vx.indexOf(e)){for(;a!==null;){var o=io(a);if(o!==null&&Nu(o),o=Vi(e,n,r,t),o===null&&ui(e,n,t,ns,r),o===a)break;a=o}a!==null&&t.stopPropagation()}else ui(e,n,t,null,r)}}var ns=null;function Vi(e,n,r,t){if(ns=null,e=Fl(t),e=nt(e),e!==null)if(n=vt(e),n===null)e=null;else if(r=n.tag,r===13){if(e=wu(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ns=e,null}function Tu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cx()){case Il:return 1;case Su:return 4;case Zo:case fx:return 16;case ju:return 536870912;default:return 16}default:return 16}}var Tr=null,Ul=null,Oo=null;function zu(){if(Oo)return Oo;var e,n=Ul,r=n.length,t,a="value"in Tr?Tr.value:Tr.textContent,o=a.length;for(e=0;e<r&&n[e]===a[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===a[o-t];t++);return Oo=a.slice(e,1<t?1-t:void 0)}function Fo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function vo(){return!0}function pf(){return!1}function Ln(e){function n(r,t,a,o,i){this._reactName=r,this._targetInst=a,this.type=t,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?vo:pf,this.isPropagationStopped=pf,this}return Ge(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=vo)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=vo)},persist:function(){},isPersistent:vo}),n}var oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gl=Ln(oa),so=Ge({},oa,{view:0,detail:0}),kx=Ln(so),ti,ai,ua,Rs=Ge({},so,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ua&&(ua&&e.type==="mousemove"?(ti=e.screenX-ua.screenX,ai=e.screenY-ua.screenY):ai=ti=0,ua=e),ti)},movementY:function(e){return"movementY"in e?e.movementY:ai}}),mf=Ln(Rs),Sx=Ge({},Rs,{dataTransfer:0}),jx=Ln(Sx),Ex=Ge({},so,{relatedTarget:0}),oi=Ln(Ex),Cx=Ge({},oa,{animationName:0,elapsedTime:0,pseudoElement:0}),Nx=Ln(Cx),$x=Ge({},oa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lx=Ln($x),Rx=Ge({},oa,{data:0}),hf=Ln(Rx),Mx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Px(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=zx[e])?!!n[e]:!1}function Vl(){return Px}var Ax=Ge({},so,{key:function(e){if(e.key){var n=Mx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Fo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vl,charCode:function(e){return e.type==="keypress"?Fo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dx=Ln(Ax),Ox=Ge({},Rs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xf=Ln(Ox),Fx=Ge({},so,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vl}),Ix=Ln(Fx),Bx=Ge({},oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wx=Ln(Bx),Hx=Ge({},Rs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ux=Ln(Hx),Gx=[9,13,27,32],Yl=_r&&"CompositionEvent"in window,Ca=null;_r&&"documentMode"in document&&(Ca=document.documentMode);var Vx=_r&&"TextEvent"in window&&!Ca,Pu=_r&&(!Yl||Ca&&8<Ca&&11>=Ca),gf=" ",vf=!1;function Au(e,n){switch(e){case"keyup":return Gx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Du(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $t=!1;function Yx(e,n){switch(e){case"compositionend":return Du(n);case"keypress":return n.which!==32?null:(vf=!0,gf);case"textInput":return e=n.data,e===gf&&vf?null:e;default:return null}}function qx(e,n){if($t)return e==="compositionend"||!Yl&&Au(e,n)?(e=zu(),Oo=Ul=Tr=null,$t=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Pu&&n.locale!=="ko"?null:n.data;default:return null}}var Kx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Kx[e.type]:n==="textarea"}function Ou(e,n,r,t){hu(t),n=rs(n,"onChange"),0<n.length&&(r=new Gl("onChange","change",null,r,t),e.push({event:r,listeners:n}))}var Na=null,Wa=null;function Xx(e){Ku(e,0)}function Ms(e){var n=Mt(e);if(lu(n))return e}function Qx(e,n){if(e==="change")return n}var Fu=!1;if(_r){var si;if(_r){var ii="oninput"in document;if(!ii){var wf=document.createElement("div");wf.setAttribute("oninput","return;"),ii=typeof wf.oninput=="function"}si=ii}else si=!1;Fu=si&&(!document.documentMode||9<document.documentMode)}function bf(){Na&&(Na.detachEvent("onpropertychange",Iu),Wa=Na=null)}function Iu(e){if(e.propertyName==="value"&&Ms(Wa)){var n=[];Ou(n,Wa,e,Fl(e)),yu(Xx,n)}}function Zx(e,n,r){e==="focusin"?(bf(),Na=n,Wa=r,Na.attachEvent("onpropertychange",Iu)):e==="focusout"&&bf()}function Jx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ms(Wa)}function eg(e,n){if(e==="click")return Ms(n)}function ng(e,n){if(e==="input"||e==="change")return Ms(n)}function rg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Xn=typeof Object.is=="function"?Object.is:rg;function Ha(e,n){if(Xn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),t=Object.keys(n);if(r.length!==t.length)return!1;for(t=0;t<r.length;t++){var a=r[t];if(!Ni.call(n,a)||!Xn(e[a],n[a]))return!1}return!0}function _f(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kf(e,n){var r=_f(e);e=0;for(var t;r;){if(r.nodeType===3){if(t=e+r.textContent.length,e<=n&&t>=n)return{node:r,offset:n-e};e=t}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=_f(r)}}function Bu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Bu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Wu(){for(var e=window,n=Ko();n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=Ko(e.document)}return n}function ql(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function tg(e){var n=Wu(),r=e.focusedElem,t=e.selectionRange;if(n!==r&&r&&r.ownerDocument&&Bu(r.ownerDocument.documentElement,r)){if(t!==null&&ql(r)){if(n=t.start,e=t.end,e===void 0&&(e=n),"selectionStart"in r)r.selectionStart=n,r.selectionEnd=Math.min(e,r.value.length);else if(e=(n=r.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,o=Math.min(t.start,a);t=t.end===void 0?o:Math.min(t.end,a),!e.extend&&o>t&&(a=t,t=o,o=a),a=kf(r,o);var i=kf(r,t);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(a.node,a.offset),e.removeAllRanges(),o>t?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=r;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<n.length;r++)e=n[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ag=_r&&"documentMode"in document&&11>=document.documentMode,Lt=null,Yi=null,$a=null,qi=!1;function Sf(e,n,r){var t=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;qi||Lt==null||Lt!==Ko(t)||(t=Lt,"selectionStart"in t&&ql(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),$a&&Ha($a,t)||($a=t,t=rs(Yi,"onSelect"),0<t.length&&(n=new Gl("onSelect","select",null,n,r),e.push({event:n,listeners:t}),n.target=Lt)))}function yo(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var Rt={animationend:yo("Animation","AnimationEnd"),animationiteration:yo("Animation","AnimationIteration"),animationstart:yo("Animation","AnimationStart"),transitionend:yo("Transition","TransitionEnd")},li={},Hu={};_r&&(Hu=document.createElement("div").style,"AnimationEvent"in window||(delete Rt.animationend.animation,delete Rt.animationiteration.animation,delete Rt.animationstart.animation),"TransitionEvent"in window||delete Rt.transitionend.transition);function Ts(e){if(li[e])return li[e];if(!Rt[e])return e;var n=Rt[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in Hu)return li[e]=n[r];return e}var Uu=Ts("animationend"),Gu=Ts("animationiteration"),Vu=Ts("animationstart"),Yu=Ts("transitionend"),qu=new Map,jf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yr(e,n){qu.set(e,n),gt(n,[e])}for(var ci=0;ci<jf.length;ci++){var fi=jf[ci],og=fi.toLowerCase(),sg=fi[0].toUpperCase()+fi.slice(1);Yr(og,"on"+sg)}Yr(Uu,"onAnimationEnd");Yr(Gu,"onAnimationIteration");Yr(Vu,"onAnimationStart");Yr("dblclick","onDoubleClick");Yr("focusin","onFocus");Yr("focusout","onBlur");Yr(Yu,"onTransitionEnd");qt("onMouseEnter",["mouseout","mouseover"]);qt("onMouseLeave",["mouseout","mouseover"]);qt("onPointerEnter",["pointerout","pointerover"]);qt("onPointerLeave",["pointerout","pointerover"]);gt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gt("onBeforeInput",["compositionend","keypress","textInput","paste"]);gt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ig=new Set("cancel close invalid load scroll toggle".split(" ").concat(_a));function Ef(e,n,r){var t=e.type||"unknown-event";e.currentTarget=r,ox(t,n,void 0,e),e.currentTarget=null}function Ku(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var t=e[r],a=t.event;t=t.listeners;e:{var o=void 0;if(n)for(var i=t.length-1;0<=i;i--){var l=t[i],f=l.instance,u=l.currentTarget;if(l=l.listener,f!==o&&a.isPropagationStopped())break e;Ef(a,l,u),o=f}else for(i=0;i<t.length;i++){if(l=t[i],f=l.instance,u=l.currentTarget,l=l.listener,f!==o&&a.isPropagationStopped())break e;Ef(a,l,u),o=f}}}if(Qo)throw e=Hi,Qo=!1,Hi=null,e}function Oe(e,n){var r=n[Ji];r===void 0&&(r=n[Ji]=new Set);var t=e+"__bubble";r.has(t)||(Xu(n,e,2,!1),r.add(t))}function di(e,n,r){var t=0;n&&(t|=4),Xu(r,e,t,n)}var wo="_reactListening"+Math.random().toString(36).slice(2);function Ua(e){if(!e[wo]){e[wo]=!0,tu.forEach(function(r){r!=="selectionchange"&&(ig.has(r)||di(r,!1,e),di(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[wo]||(n[wo]=!0,di("selectionchange",!1,n))}}function Xu(e,n,r,t){switch(Tu(n)){case 1:var a=bx;break;case 4:a=_x;break;default:a=Hl}r=a.bind(null,n,r,e),a=void 0,!Wi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),t?a!==void 0?e.addEventListener(n,r,{capture:!0,passive:a}):e.addEventListener(n,r,!0):a!==void 0?e.addEventListener(n,r,{passive:a}):e.addEventListener(n,r,!1)}function ui(e,n,r,t,a){var o=t;if(!(n&1)&&!(n&2)&&t!==null)e:for(;;){if(t===null)return;var i=t.tag;if(i===3||i===4){var l=t.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(i===4)for(i=t.return;i!==null;){var f=i.tag;if((f===3||f===4)&&(f=i.stateNode.containerInfo,f===a||f.nodeType===8&&f.parentNode===a))return;i=i.return}for(;l!==null;){if(i=nt(l),i===null)return;if(f=i.tag,f===5||f===6){t=o=i;continue e}l=l.parentNode}}t=t.return}yu(function(){var u=o,x=Fl(r),d=[];e:{var m=qu.get(e);if(m!==void 0){var w=Gl,v=e;switch(e){case"keypress":if(Fo(r)===0)break e;case"keydown":case"keyup":w=Dx;break;case"focusin":v="focus",w=oi;break;case"focusout":v="blur",w=oi;break;case"beforeblur":case"afterblur":w=oi;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=mf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=jx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Ix;break;case Uu:case Gu:case Vu:w=Nx;break;case Yu:w=Wx;break;case"scroll":w=kx;break;case"wheel":w=Ux;break;case"copy":case"cut":case"paste":w=Lx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=xf}var b=(n&4)!==0,S=!b&&e==="scroll",h=b?m!==null?m+"Capture":null:m;b=[];for(var c=u,p;c!==null;){p=c;var g=p.stateNode;if(p.tag===5&&g!==null&&(p=g,h!==null&&(g=Oa(c,h),g!=null&&b.push(Ga(c,g,p)))),S)break;c=c.return}0<b.length&&(m=new w(m,v,null,r,x),d.push({event:m,listeners:b}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&r!==Ii&&(v=r.relatedTarget||r.fromElement)&&(nt(v)||v[kr]))break e;if((w||m)&&(m=x.window===x?x:(m=x.ownerDocument)?m.defaultView||m.parentWindow:window,w?(v=r.relatedTarget||r.toElement,w=u,v=v?nt(v):null,v!==null&&(S=vt(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(w=null,v=u),w!==v)){if(b=mf,g="onMouseLeave",h="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(b=xf,g="onPointerLeave",h="onPointerEnter",c="pointer"),S=w==null?m:Mt(w),p=v==null?m:Mt(v),m=new b(g,c+"leave",w,r,x),m.target=S,m.relatedTarget=p,g=null,nt(x)===u&&(b=new b(h,c+"enter",v,r,x),b.target=p,b.relatedTarget=S,g=b),S=g,w&&v)n:{for(b=w,h=v,c=0,p=b;p;p=kt(p))c++;for(p=0,g=h;g;g=kt(g))p++;for(;0<c-p;)b=kt(b),c--;for(;0<p-c;)h=kt(h),p--;for(;c--;){if(b===h||h!==null&&b===h.alternate)break n;b=kt(b),h=kt(h)}b=null}else b=null;w!==null&&Cf(d,m,w,b,!1),v!==null&&S!==null&&Cf(d,S,v,b,!0)}}e:{if(m=u?Mt(u):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var y=Qx;else if(yf(m))if(Fu)y=ng;else{y=Jx;var k=Zx}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(y=eg);if(y&&(y=y(e,u))){Ou(d,y,r,x);break e}k&&k(e,m,u),e==="focusout"&&(k=m._wrapperState)&&k.controlled&&m.type==="number"&&Pi(m,"number",m.value)}switch(k=u?Mt(u):window,e){case"focusin":(yf(k)||k.contentEditable==="true")&&(Lt=k,Yi=u,$a=null);break;case"focusout":$a=Yi=Lt=null;break;case"mousedown":qi=!0;break;case"contextmenu":case"mouseup":case"dragend":qi=!1,Sf(d,r,x);break;case"selectionchange":if(ag)break;case"keydown":case"keyup":Sf(d,r,x)}var _;if(Yl)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else $t?Au(e,r)&&(j="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(j="onCompositionStart");j&&(Pu&&r.locale!=="ko"&&($t||j!=="onCompositionStart"?j==="onCompositionEnd"&&$t&&(_=zu()):(Tr=x,Ul="value"in Tr?Tr.value:Tr.textContent,$t=!0)),k=rs(u,j),0<k.length&&(j=new hf(j,e,null,r,x),d.push({event:j,listeners:k}),_?j.data=_:(_=Du(r),_!==null&&(j.data=_)))),(_=Vx?Yx(e,r):qx(e,r))&&(u=rs(u,"onBeforeInput"),0<u.length&&(x=new hf("onBeforeInput","beforeinput",null,r,x),d.push({event:x,listeners:u}),x.data=_))}Ku(d,n)})}function Ga(e,n,r){return{instance:e,listener:n,currentTarget:r}}function rs(e,n){for(var r=n+"Capture",t=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=Oa(e,r),o!=null&&t.unshift(Ga(e,o,a)),o=Oa(e,n),o!=null&&t.push(Ga(e,o,a))),e=e.return}return t}function kt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Cf(e,n,r,t,a){for(var o=n._reactName,i=[];r!==null&&r!==t;){var l=r,f=l.alternate,u=l.stateNode;if(f!==null&&f===t)break;l.tag===5&&u!==null&&(l=u,a?(f=Oa(r,o),f!=null&&i.unshift(Ga(r,f,l))):a||(f=Oa(r,o),f!=null&&i.push(Ga(r,f,l)))),r=r.return}i.length!==0&&e.push({event:n,listeners:i})}var lg=/\r\n?/g,cg=/\u0000|\uFFFD/g;function Nf(e){return(typeof e=="string"?e:""+e).replace(lg,`
`).replace(cg,"")}function bo(e,n,r){if(n=Nf(n),Nf(e)!==n&&r)throw Error(O(425))}function ts(){}var Ki=null,Xi=null;function Qi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Zi=typeof setTimeout=="function"?setTimeout:void 0,fg=typeof clearTimeout=="function"?clearTimeout:void 0,$f=typeof Promise=="function"?Promise:void 0,dg=typeof queueMicrotask=="function"?queueMicrotask:typeof $f<"u"?function(e){return $f.resolve(null).then(e).catch(ug)}:Zi;function ug(e){setTimeout(function(){throw e})}function pi(e,n){var r=n,t=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(t===0){e.removeChild(a),Ba(n);return}t--}else r!=="$"&&r!=="$?"&&r!=="$!"||t++;r=a}while(r);Ba(n)}function Fr(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Lf(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return e;n--}else r==="/$"&&n++}e=e.previousSibling}return null}var sa=Math.random().toString(36).slice(2),lr="__reactFiber$"+sa,Va="__reactProps$"+sa,kr="__reactContainer$"+sa,Ji="__reactEvents$"+sa,pg="__reactListeners$"+sa,mg="__reactHandles$"+sa;function nt(e){var n=e[lr];if(n)return n;for(var r=e.parentNode;r;){if(n=r[kr]||r[lr]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=Lf(e);e!==null;){if(r=e[lr])return r;e=Lf(e)}return n}e=r,r=e.parentNode}return null}function io(e){return e=e[lr]||e[kr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(O(33))}function zs(e){return e[Va]||null}var el=[],Tt=-1;function qr(e){return{current:e}}function Fe(e){0>Tt||(e.current=el[Tt],el[Tt]=null,Tt--)}function Pe(e,n){Tt++,el[Tt]=e.current,e.current=n}var Gr={},cn=qr(Gr),wn=qr(!1),ft=Gr;function Kt(e,n){var r=e.type.contextTypes;if(!r)return Gr;var t=e.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===n)return t.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in r)a[o]=n[o];return t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),a}function bn(e){return e=e.childContextTypes,e!=null}function as(){Fe(wn),Fe(cn)}function Rf(e,n,r){if(cn.current!==Gr)throw Error(O(168));Pe(cn,n),Pe(wn,r)}function Qu(e,n,r){var t=e.stateNode;if(n=n.childContextTypes,typeof t.getChildContext!="function")return r;t=t.getChildContext();for(var a in t)if(!(a in n))throw Error(O(108,Zh(e)||"Unknown",a));return Ge({},r,t)}function os(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gr,ft=cn.current,Pe(cn,e),Pe(wn,wn.current),!0}function Mf(e,n,r){var t=e.stateNode;if(!t)throw Error(O(169));r?(e=Qu(e,n,ft),t.__reactInternalMemoizedMergedChildContext=e,Fe(wn),Fe(cn),Pe(cn,e)):Fe(wn),Pe(wn,r)}var xr=null,Ps=!1,mi=!1;function Zu(e){xr===null?xr=[e]:xr.push(e)}function hg(e){Ps=!0,Zu(e)}function Kr(){if(!mi&&xr!==null){mi=!0;var e=0,n=Ne;try{var r=xr;for(Ne=1;e<r.length;e++){var t=r[e];do t=t(!0);while(t!==null)}xr=null,Ps=!1}catch(a){throw xr!==null&&(xr=xr.slice(e+1)),ku(Il,Kr),a}finally{Ne=n,mi=!1}}return null}var zt=[],Pt=0,ss=null,is=0,Tn=[],zn=0,dt=null,gr=1,vr="";function Jr(e,n){zt[Pt++]=is,zt[Pt++]=ss,ss=e,is=n}function Ju(e,n,r){Tn[zn++]=gr,Tn[zn++]=vr,Tn[zn++]=dt,dt=e;var t=gr;e=vr;var a=32-Yn(t)-1;t&=~(1<<a),r+=1;var o=32-Yn(n)+a;if(30<o){var i=a-a%5;o=(t&(1<<i)-1).toString(32),t>>=i,a-=i,gr=1<<32-Yn(n)+a|r<<a|t,vr=o+e}else gr=1<<o|r<<a|t,vr=e}function Kl(e){e.return!==null&&(Jr(e,1),Ju(e,1,0))}function Xl(e){for(;e===ss;)ss=zt[--Pt],zt[Pt]=null,is=zt[--Pt],zt[Pt]=null;for(;e===dt;)dt=Tn[--zn],Tn[zn]=null,vr=Tn[--zn],Tn[zn]=null,gr=Tn[--zn],Tn[zn]=null}var Cn=null,En=null,Be=!1,Vn=null;function ep(e,n){var r=An(5,null,null,0);r.elementType="DELETED",r.stateNode=n,r.return=e,n=e.deletions,n===null?(e.deletions=[r],e.flags|=16):n.push(r)}function Tf(e,n){switch(e.tag){case 5:var r=e.type;return n=n.nodeType!==1||r.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Cn=e,En=Fr(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Cn=e,En=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(r=dt!==null?{id:gr,overflow:vr}:null,e.memoizedState={dehydrated:n,treeContext:r,retryLane:1073741824},r=An(18,null,null,0),r.stateNode=n,r.return=e,e.child=r,Cn=e,En=null,!0):!1;default:return!1}}function nl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function rl(e){if(Be){var n=En;if(n){var r=n;if(!Tf(e,n)){if(nl(e))throw Error(O(418));n=Fr(r.nextSibling);var t=Cn;n&&Tf(e,n)?ep(t,r):(e.flags=e.flags&-4097|2,Be=!1,Cn=e)}}else{if(nl(e))throw Error(O(418));e.flags=e.flags&-4097|2,Be=!1,Cn=e}}}function zf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Cn=e}function _o(e){if(e!==Cn)return!1;if(!Be)return zf(e),Be=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Qi(e.type,e.memoizedProps)),n&&(n=En)){if(nl(e))throw np(),Error(O(418));for(;n;)ep(e,n),n=Fr(n.nextSibling)}if(zf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(O(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(n===0){En=Fr(e.nextSibling);break e}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++}e=e.nextSibling}En=null}}else En=Cn?Fr(e.stateNode.nextSibling):null;return!0}function np(){for(var e=En;e;)e=Fr(e.nextSibling)}function Xt(){En=Cn=null,Be=!1}function Ql(e){Vn===null?Vn=[e]:Vn.push(e)}var xg=Er.ReactCurrentBatchConfig;function pa(e,n,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(O(309));var t=r.stateNode}if(!t)throw Error(O(147,e));var a=t,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(i){var l=a.refs;i===null?delete l[o]:l[o]=i},n._stringRef=o,n)}if(typeof e!="string")throw Error(O(284));if(!r._owner)throw Error(O(290,e))}return e}function ko(e,n){throw e=Object.prototype.toString.call(n),Error(O(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Pf(e){var n=e._init;return n(e._payload)}function rp(e){function n(h,c){if(e){var p=h.deletions;p===null?(h.deletions=[c],h.flags|=16):p.push(c)}}function r(h,c){if(!e)return null;for(;c!==null;)n(h,c),c=c.sibling;return null}function t(h,c){for(h=new Map;c!==null;)c.key!==null?h.set(c.key,c):h.set(c.index,c),c=c.sibling;return h}function a(h,c){return h=Hr(h,c),h.index=0,h.sibling=null,h}function o(h,c,p){return h.index=p,e?(p=h.alternate,p!==null?(p=p.index,p<c?(h.flags|=2,c):p):(h.flags|=2,c)):(h.flags|=1048576,c)}function i(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,c,p,g){return c===null||c.tag!==6?(c=bi(p,h.mode,g),c.return=h,c):(c=a(c,p),c.return=h,c)}function f(h,c,p,g){var y=p.type;return y===Nt?x(h,c,p.props.children,g,p.key):c!==null&&(c.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===$r&&Pf(y)===c.type)?(g=a(c,p.props),g.ref=pa(h,c,p),g.return=h,g):(g=Vo(p.type,p.key,p.props,null,h.mode,g),g.ref=pa(h,c,p),g.return=h,g)}function u(h,c,p,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=_i(p,h.mode,g),c.return=h,c):(c=a(c,p.children||[]),c.return=h,c)}function x(h,c,p,g,y){return c===null||c.tag!==7?(c=st(p,h.mode,g,y),c.return=h,c):(c=a(c,p),c.return=h,c)}function d(h,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=bi(""+c,h.mode,p),c.return=h,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case uo:return p=Vo(c.type,c.key,c.props,null,h.mode,p),p.ref=pa(h,null,c),p.return=h,p;case Ct:return c=_i(c,h.mode,p),c.return=h,c;case $r:var g=c._init;return d(h,g(c._payload),p)}if(wa(c)||la(c))return c=st(c,h.mode,p,null),c.return=h,c;ko(h,c)}return null}function m(h,c,p,g){var y=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return y!==null?null:l(h,c,""+p,g);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case uo:return p.key===y?f(h,c,p,g):null;case Ct:return p.key===y?u(h,c,p,g):null;case $r:return y=p._init,m(h,c,y(p._payload),g)}if(wa(p)||la(p))return y!==null?null:x(h,c,p,g,null);ko(h,p)}return null}function w(h,c,p,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return h=h.get(p)||null,l(c,h,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case uo:return h=h.get(g.key===null?p:g.key)||null,f(c,h,g,y);case Ct:return h=h.get(g.key===null?p:g.key)||null,u(c,h,g,y);case $r:var k=g._init;return w(h,c,p,k(g._payload),y)}if(wa(g)||la(g))return h=h.get(p)||null,x(c,h,g,y,null);ko(c,g)}return null}function v(h,c,p,g){for(var y=null,k=null,_=c,j=c=0,C=null;_!==null&&j<p.length;j++){_.index>j?(C=_,_=null):C=_.sibling;var R=m(h,_,p[j],g);if(R===null){_===null&&(_=C);break}e&&_&&R.alternate===null&&n(h,_),c=o(R,c,j),k===null?y=R:k.sibling=R,k=R,_=C}if(j===p.length)return r(h,_),Be&&Jr(h,j),y;if(_===null){for(;j<p.length;j++)_=d(h,p[j],g),_!==null&&(c=o(_,c,j),k===null?y=_:k.sibling=_,k=_);return Be&&Jr(h,j),y}for(_=t(h,_);j<p.length;j++)C=w(_,h,j,p[j],g),C!==null&&(e&&C.alternate!==null&&_.delete(C.key===null?j:C.key),c=o(C,c,j),k===null?y=C:k.sibling=C,k=C);return e&&_.forEach(function(M){return n(h,M)}),Be&&Jr(h,j),y}function b(h,c,p,g){var y=la(p);if(typeof y!="function")throw Error(O(150));if(p=y.call(p),p==null)throw Error(O(151));for(var k=y=null,_=c,j=c=0,C=null,R=p.next();_!==null&&!R.done;j++,R=p.next()){_.index>j?(C=_,_=null):C=_.sibling;var M=m(h,_,R.value,g);if(M===null){_===null&&(_=C);break}e&&_&&M.alternate===null&&n(h,_),c=o(M,c,j),k===null?y=M:k.sibling=M,k=M,_=C}if(R.done)return r(h,_),Be&&Jr(h,j),y;if(_===null){for(;!R.done;j++,R=p.next())R=d(h,R.value,g),R!==null&&(c=o(R,c,j),k===null?y=R:k.sibling=R,k=R);return Be&&Jr(h,j),y}for(_=t(h,_);!R.done;j++,R=p.next())R=w(_,h,j,R.value,g),R!==null&&(e&&R.alternate!==null&&_.delete(R.key===null?j:R.key),c=o(R,c,j),k===null?y=R:k.sibling=R,k=R);return e&&_.forEach(function(A){return n(h,A)}),Be&&Jr(h,j),y}function S(h,c,p,g){if(typeof p=="object"&&p!==null&&p.type===Nt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case uo:e:{for(var y=p.key,k=c;k!==null;){if(k.key===y){if(y=p.type,y===Nt){if(k.tag===7){r(h,k.sibling),c=a(k,p.props.children),c.return=h,h=c;break e}}else if(k.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===$r&&Pf(y)===k.type){r(h,k.sibling),c=a(k,p.props),c.ref=pa(h,k,p),c.return=h,h=c;break e}r(h,k);break}else n(h,k);k=k.sibling}p.type===Nt?(c=st(p.props.children,h.mode,g,p.key),c.return=h,h=c):(g=Vo(p.type,p.key,p.props,null,h.mode,g),g.ref=pa(h,c,p),g.return=h,h=g)}return i(h);case Ct:e:{for(k=p.key;c!==null;){if(c.key===k)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){r(h,c.sibling),c=a(c,p.children||[]),c.return=h,h=c;break e}else{r(h,c);break}else n(h,c);c=c.sibling}c=_i(p,h.mode,g),c.return=h,h=c}return i(h);case $r:return k=p._init,S(h,c,k(p._payload),g)}if(wa(p))return v(h,c,p,g);if(la(p))return b(h,c,p,g);ko(h,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(r(h,c.sibling),c=a(c,p),c.return=h,h=c):(r(h,c),c=bi(p,h.mode,g),c.return=h,h=c),i(h)):r(h,c)}return S}var Qt=rp(!0),tp=rp(!1),ls=qr(null),cs=null,At=null,Zl=null;function Jl(){Zl=At=cs=null}function ec(e){var n=ls.current;Fe(ls),e._currentValue=n}function tl(e,n,r){for(;e!==null;){var t=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,t!==null&&(t.childLanes|=n)):t!==null&&(t.childLanes&n)!==n&&(t.childLanes|=n),e===r)break;e=e.return}}function Ut(e,n){cs=e,Zl=At=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(yn=!0),e.firstContext=null)}function On(e){var n=e._currentValue;if(Zl!==e)if(e={context:e,memoizedValue:n,next:null},At===null){if(cs===null)throw Error(O(308));At=e,cs.dependencies={lanes:0,firstContext:e}}else At=At.next=e;return n}var rt=null;function nc(e){rt===null?rt=[e]:rt.push(e)}function ap(e,n,r,t){var a=n.interleaved;return a===null?(r.next=r,nc(n)):(r.next=a.next,a.next=r),n.interleaved=r,Sr(e,t)}function Sr(e,n){e.lanes|=n;var r=e.alternate;for(r!==null&&(r.lanes|=n),r=e,e=e.return;e!==null;)e.childLanes|=n,r=e.alternate,r!==null&&(r.childLanes|=n),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Lr=!1;function rc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function op(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function wr(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Ir(e,n,r){var t=e.updateQueue;if(t===null)return null;if(t=t.shared,je&2){var a=t.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n,Sr(e,r)}return a=t.interleaved,a===null?(n.next=n,nc(t)):(n.next=a.next,a.next=n),t.interleaved=n,Sr(e,r)}function Io(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194240)!==0)){var t=n.lanes;t&=e.pendingLanes,r|=t,n.lanes=r,Bl(e,r)}}function Af(e,n){var r=e.updateQueue,t=e.alternate;if(t!==null&&(t=t.updateQueue,r===t)){var a=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var i={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?a=o=i:o=o.next=i,r=r.next}while(r!==null);o===null?a=o=n:o=o.next=n}else a=o=n;r={baseState:t.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:t.shared,effects:t.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}function fs(e,n,r,t){var a=e.updateQueue;Lr=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var f=l,u=f.next;f.next=null,i===null?o=u:i.next=u,i=f;var x=e.alternate;x!==null&&(x=x.updateQueue,l=x.lastBaseUpdate,l!==i&&(l===null?x.firstBaseUpdate=u:l.next=u,x.lastBaseUpdate=f))}if(o!==null){var d=a.baseState;i=0,x=u=f=null,l=o;do{var m=l.lane,w=l.eventTime;if((t&m)===m){x!==null&&(x=x.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,b=l;switch(m=n,w=r,b.tag){case 1:if(v=b.payload,typeof v=="function"){d=v.call(w,d,m);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=b.payload,m=typeof v=="function"?v.call(w,d,m):v,m==null)break e;d=Ge({},d,m);break e;case 2:Lr=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=a.effects,m===null?a.effects=[l]:m.push(l))}else w={eventTime:w,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},x===null?(u=x=w,f=d):x=x.next=w,i|=m;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;m=l,l=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(!0);if(x===null&&(f=d),a.baseState=f,a.firstBaseUpdate=u,a.lastBaseUpdate=x,n=a.shared.interleaved,n!==null){a=n;do i|=a.lane,a=a.next;while(a!==n)}else o===null&&(a.shared.lanes=0);pt|=i,e.lanes=i,e.memoizedState=d}}function Df(e,n,r){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var t=e[n],a=t.callback;if(a!==null){if(t.callback=null,t=r,typeof a!="function")throw Error(O(191,a));a.call(t)}}}var lo={},fr=qr(lo),Ya=qr(lo),qa=qr(lo);function tt(e){if(e===lo)throw Error(O(174));return e}function tc(e,n){switch(Pe(qa,n),Pe(Ya,e),Pe(fr,lo),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Di(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Di(n,e)}Fe(fr),Pe(fr,n)}function Zt(){Fe(fr),Fe(Ya),Fe(qa)}function sp(e){tt(qa.current);var n=tt(fr.current),r=Di(n,e.type);n!==r&&(Pe(Ya,e),Pe(fr,r))}function ac(e){Ya.current===e&&(Fe(fr),Fe(Ya))}var He=qr(0);function ds(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var hi=[];function oc(){for(var e=0;e<hi.length;e++)hi[e]._workInProgressVersionPrimary=null;hi.length=0}var Bo=Er.ReactCurrentDispatcher,xi=Er.ReactCurrentBatchConfig,ut=0,Ue=null,Qe=null,Je=null,us=!1,La=!1,Ka=0,gg=0;function on(){throw Error(O(321))}function sc(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!Xn(e[r],n[r]))return!1;return!0}function ic(e,n,r,t,a,o){if(ut=o,Ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Bo.current=e===null||e.memoizedState===null?bg:_g,e=r(t,a),La){o=0;do{if(La=!1,Ka=0,25<=o)throw Error(O(301));o+=1,Je=Qe=null,n.updateQueue=null,Bo.current=kg,e=r(t,a)}while(La)}if(Bo.current=ps,n=Qe!==null&&Qe.next!==null,ut=0,Je=Qe=Ue=null,us=!1,n)throw Error(O(300));return e}function lc(){var e=Ka!==0;return Ka=0,e}function ir(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?Ue.memoizedState=Je=e:Je=Je.next=e,Je}function Fn(){if(Qe===null){var e=Ue.alternate;e=e!==null?e.memoizedState:null}else e=Qe.next;var n=Je===null?Ue.memoizedState:Je.next;if(n!==null)Je=n,Qe=e;else{if(e===null)throw Error(O(310));Qe=e,e={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},Je===null?Ue.memoizedState=Je=e:Je=Je.next=e}return Je}function Xa(e,n){return typeof n=="function"?n(e):n}function gi(e){var n=Fn(),r=n.queue;if(r===null)throw Error(O(311));r.lastRenderedReducer=e;var t=Qe,a=t.baseQueue,o=r.pending;if(o!==null){if(a!==null){var i=a.next;a.next=o.next,o.next=i}t.baseQueue=a=o,r.pending=null}if(a!==null){o=a.next,t=t.baseState;var l=i=null,f=null,u=o;do{var x=u.lane;if((ut&x)===x)f!==null&&(f=f.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),t=u.hasEagerState?u.eagerState:e(t,u.action);else{var d={lane:x,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};f===null?(l=f=d,i=t):f=f.next=d,Ue.lanes|=x,pt|=x}u=u.next}while(u!==null&&u!==o);f===null?i=t:f.next=l,Xn(t,n.memoizedState)||(yn=!0),n.memoizedState=t,n.baseState=i,n.baseQueue=f,r.lastRenderedState=t}if(e=r.interleaved,e!==null){a=e;do o=a.lane,Ue.lanes|=o,pt|=o,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[n.memoizedState,r.dispatch]}function vi(e){var n=Fn(),r=n.queue;if(r===null)throw Error(O(311));r.lastRenderedReducer=e;var t=r.dispatch,a=r.pending,o=n.memoizedState;if(a!==null){r.pending=null;var i=a=a.next;do o=e(o,i.action),i=i.next;while(i!==a);Xn(o,n.memoizedState)||(yn=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),r.lastRenderedState=o}return[o,t]}function ip(){}function lp(e,n){var r=Ue,t=Fn(),a=n(),o=!Xn(t.memoizedState,a);if(o&&(t.memoizedState=a,yn=!0),t=t.queue,cc(dp.bind(null,r,t,e),[e]),t.getSnapshot!==n||o||Je!==null&&Je.memoizedState.tag&1){if(r.flags|=2048,Qa(9,fp.bind(null,r,t,a,n),void 0,null),nn===null)throw Error(O(349));ut&30||cp(r,n,a)}return a}function cp(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=Ue.updateQueue,n===null?(n={lastEffect:null,stores:null},Ue.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function fp(e,n,r,t){n.value=r,n.getSnapshot=t,up(n)&&pp(e)}function dp(e,n,r){return r(function(){up(n)&&pp(e)})}function up(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!Xn(e,r)}catch{return!0}}function pp(e){var n=Sr(e,1);n!==null&&qn(n,e,1,-1)}function Of(e){var n=ir();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xa,lastRenderedState:e},n.queue=e,e=e.dispatch=wg.bind(null,Ue,e),[n.memoizedState,e]}function Qa(e,n,r,t){return e={tag:e,create:n,destroy:r,deps:t,next:null},n=Ue.updateQueue,n===null?(n={lastEffect:null,stores:null},Ue.updateQueue=n,n.lastEffect=e.next=e):(r=n.lastEffect,r===null?n.lastEffect=e.next=e:(t=r.next,r.next=e,e.next=t,n.lastEffect=e)),e}function mp(){return Fn().memoizedState}function Wo(e,n,r,t){var a=ir();Ue.flags|=e,a.memoizedState=Qa(1|n,r,void 0,t===void 0?null:t)}function As(e,n,r,t){var a=Fn();t=t===void 0?null:t;var o=void 0;if(Qe!==null){var i=Qe.memoizedState;if(o=i.destroy,t!==null&&sc(t,i.deps)){a.memoizedState=Qa(n,r,o,t);return}}Ue.flags|=e,a.memoizedState=Qa(1|n,r,o,t)}function Ff(e,n){return Wo(8390656,8,e,n)}function cc(e,n){return As(2048,8,e,n)}function hp(e,n){return As(4,2,e,n)}function xp(e,n){return As(4,4,e,n)}function gp(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function vp(e,n,r){return r=r!=null?r.concat([e]):null,As(4,4,gp.bind(null,n,e),r)}function fc(){}function yp(e,n){var r=Fn();n=n===void 0?null:n;var t=r.memoizedState;return t!==null&&n!==null&&sc(n,t[1])?t[0]:(r.memoizedState=[e,n],e)}function wp(e,n){var r=Fn();n=n===void 0?null:n;var t=r.memoizedState;return t!==null&&n!==null&&sc(n,t[1])?t[0]:(e=e(),r.memoizedState=[e,n],e)}function bp(e,n,r){return ut&21?(Xn(r,n)||(r=Eu(),Ue.lanes|=r,pt|=r,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,yn=!0),e.memoizedState=r)}function vg(e,n){var r=Ne;Ne=r!==0&&4>r?r:4,e(!0);var t=xi.transition;xi.transition={};try{e(!1),n()}finally{Ne=r,xi.transition=t}}function _p(){return Fn().memoizedState}function yg(e,n,r){var t=Wr(e);if(r={lane:t,action:r,hasEagerState:!1,eagerState:null,next:null},kp(e))Sp(n,r);else if(r=ap(e,n,r,t),r!==null){var a=dn();qn(r,e,t,a),jp(r,n,t)}}function wg(e,n,r){var t=Wr(e),a={lane:t,action:r,hasEagerState:!1,eagerState:null,next:null};if(kp(e))Sp(n,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var i=n.lastRenderedState,l=o(i,r);if(a.hasEagerState=!0,a.eagerState=l,Xn(l,i)){var f=n.interleaved;f===null?(a.next=a,nc(n)):(a.next=f.next,f.next=a),n.interleaved=a;return}}catch{}finally{}r=ap(e,n,a,t),r!==null&&(a=dn(),qn(r,e,t,a),jp(r,n,t))}}function kp(e){var n=e.alternate;return e===Ue||n!==null&&n===Ue}function Sp(e,n){La=us=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function jp(e,n,r){if(r&4194240){var t=n.lanes;t&=e.pendingLanes,r|=t,n.lanes=r,Bl(e,r)}}var ps={readContext:On,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useInsertionEffect:on,useLayoutEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useMutableSource:on,useSyncExternalStore:on,useId:on,unstable_isNewReconciler:!1},bg={readContext:On,useCallback:function(e,n){return ir().memoizedState=[e,n===void 0?null:n],e},useContext:On,useEffect:Ff,useImperativeHandle:function(e,n,r){return r=r!=null?r.concat([e]):null,Wo(4194308,4,gp.bind(null,n,e),r)},useLayoutEffect:function(e,n){return Wo(4194308,4,e,n)},useInsertionEffect:function(e,n){return Wo(4,2,e,n)},useMemo:function(e,n){var r=ir();return n=n===void 0?null:n,e=e(),r.memoizedState=[e,n],e},useReducer:function(e,n,r){var t=ir();return n=r!==void 0?r(n):n,t.memoizedState=t.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},t.queue=e,e=e.dispatch=yg.bind(null,Ue,e),[t.memoizedState,e]},useRef:function(e){var n=ir();return e={current:e},n.memoizedState=e},useState:Of,useDebugValue:fc,useDeferredValue:function(e){return ir().memoizedState=e},useTransition:function(){var e=Of(!1),n=e[0];return e=vg.bind(null,e[1]),ir().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,r){var t=Ue,a=ir();if(Be){if(r===void 0)throw Error(O(407));r=r()}else{if(r=n(),nn===null)throw Error(O(349));ut&30||cp(t,n,r)}a.memoizedState=r;var o={value:r,getSnapshot:n};return a.queue=o,Ff(dp.bind(null,t,o,e),[e]),t.flags|=2048,Qa(9,fp.bind(null,t,o,r,n),void 0,null),r},useId:function(){var e=ir(),n=nn.identifierPrefix;if(Be){var r=vr,t=gr;r=(t&~(1<<32-Yn(t)-1)).toString(32)+r,n=":"+n+"R"+r,r=Ka++,0<r&&(n+="H"+r.toString(32)),n+=":"}else r=gg++,n=":"+n+"r"+r.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},_g={readContext:On,useCallback:yp,useContext:On,useEffect:cc,useImperativeHandle:vp,useInsertionEffect:hp,useLayoutEffect:xp,useMemo:wp,useReducer:gi,useRef:mp,useState:function(){return gi(Xa)},useDebugValue:fc,useDeferredValue:function(e){var n=Fn();return bp(n,Qe.memoizedState,e)},useTransition:function(){var e=gi(Xa)[0],n=Fn().memoizedState;return[e,n]},useMutableSource:ip,useSyncExternalStore:lp,useId:_p,unstable_isNewReconciler:!1},kg={readContext:On,useCallback:yp,useContext:On,useEffect:cc,useImperativeHandle:vp,useInsertionEffect:hp,useLayoutEffect:xp,useMemo:wp,useReducer:vi,useRef:mp,useState:function(){return vi(Xa)},useDebugValue:fc,useDeferredValue:function(e){var n=Fn();return Qe===null?n.memoizedState=e:bp(n,Qe.memoizedState,e)},useTransition:function(){var e=vi(Xa)[0],n=Fn().memoizedState;return[e,n]},useMutableSource:ip,useSyncExternalStore:lp,useId:_p,unstable_isNewReconciler:!1};function Un(e,n){if(e&&e.defaultProps){n=Ge({},n),e=e.defaultProps;for(var r in e)n[r]===void 0&&(n[r]=e[r]);return n}return n}function al(e,n,r,t){n=e.memoizedState,r=r(t,n),r=r==null?n:Ge({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ds={isMounted:function(e){return(e=e._reactInternals)?vt(e)===e:!1},enqueueSetState:function(e,n,r){e=e._reactInternals;var t=dn(),a=Wr(e),o=wr(t,a);o.payload=n,r!=null&&(o.callback=r),n=Ir(e,o,a),n!==null&&(qn(n,e,a,t),Io(n,e,a))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var t=dn(),a=Wr(e),o=wr(t,a);o.tag=1,o.payload=n,r!=null&&(o.callback=r),n=Ir(e,o,a),n!==null&&(qn(n,e,a,t),Io(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=dn(),t=Wr(e),a=wr(r,t);a.tag=2,n!=null&&(a.callback=n),n=Ir(e,a,t),n!==null&&(qn(n,e,t,r),Io(n,e,t))}};function If(e,n,r,t,a,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(t,o,i):n.prototype&&n.prototype.isPureReactComponent?!Ha(r,t)||!Ha(a,o):!0}function Ep(e,n,r){var t=!1,a=Gr,o=n.contextType;return typeof o=="object"&&o!==null?o=On(o):(a=bn(n)?ft:cn.current,t=n.contextTypes,o=(t=t!=null)?Kt(e,a):Gr),n=new n(r,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ds,e.stateNode=n,n._reactInternals=e,t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),n}function Bf(e,n,r,t){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,t),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,t),n.state!==e&&Ds.enqueueReplaceState(n,n.state,null)}function ol(e,n,r,t){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},rc(e);var o=n.contextType;typeof o=="object"&&o!==null?a.context=On(o):(o=bn(n)?ft:cn.current,a.context=Kt(e,o)),a.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(al(e,n,o,r),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(n=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),n!==a.state&&Ds.enqueueReplaceState(a,a.state,null),fs(e,r,a,t),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Jt(e,n){try{var r="",t=n;do r+=Qh(t),t=t.return;while(t);var a=r}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:a,digest:null}}function yi(e,n,r){return{value:e,source:null,stack:r??null,digest:n??null}}function sl(e,n){try{console.error(n.value)}catch(r){setTimeout(function(){throw r})}}var Sg=typeof WeakMap=="function"?WeakMap:Map;function Cp(e,n,r){r=wr(-1,r),r.tag=3,r.payload={element:null};var t=n.value;return r.callback=function(){hs||(hs=!0,xl=t),sl(e,n)},r}function Np(e,n,r){r=wr(-1,r),r.tag=3;var t=e.type.getDerivedStateFromError;if(typeof t=="function"){var a=n.value;r.payload=function(){return t(a)},r.callback=function(){sl(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){sl(e,n),typeof t!="function"&&(Br===null?Br=new Set([this]):Br.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),r}function Wf(e,n,r){var t=e.pingCache;if(t===null){t=e.pingCache=new Sg;var a=new Set;t.set(n,a)}else a=t.get(n),a===void 0&&(a=new Set,t.set(n,a));a.has(r)||(a.add(r),e=Og.bind(null,e,n,r),n.then(e,e))}function Hf(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Uf(e,n,r,t,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===n?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(n=wr(-1,1),n.tag=2,Ir(r,n,1))),r.lanes|=1),e)}var jg=Er.ReactCurrentOwner,yn=!1;function fn(e,n,r,t){n.child=e===null?tp(n,null,r,t):Qt(n,e.child,r,t)}function Gf(e,n,r,t,a){r=r.render;var o=n.ref;return Ut(n,a),t=ic(e,n,r,t,o,a),r=lc(),e!==null&&!yn?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,jr(e,n,a)):(Be&&r&&Kl(n),n.flags|=1,fn(e,n,t,a),n.child)}function Vf(e,n,r,t,a){if(e===null){var o=r.type;return typeof o=="function"&&!vc(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(n.tag=15,n.type=o,$p(e,n,o,t,a)):(e=Vo(r.type,null,t,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&a)){var i=o.memoizedProps;if(r=r.compare,r=r!==null?r:Ha,r(i,t)&&e.ref===n.ref)return jr(e,n,a)}return n.flags|=1,e=Hr(o,t),e.ref=n.ref,e.return=n,n.child=e}function $p(e,n,r,t,a){if(e!==null){var o=e.memoizedProps;if(Ha(o,t)&&e.ref===n.ref)if(yn=!1,n.pendingProps=t=o,(e.lanes&a)!==0)e.flags&131072&&(yn=!0);else return n.lanes=e.lanes,jr(e,n,a)}return il(e,n,r,t,a)}function Lp(e,n,r){var t=n.pendingProps,a=t.children,o=e!==null?e.memoizedState:null;if(t.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pe(Ot,Sn),Sn|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Pe(Ot,Sn),Sn|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=o!==null?o.baseLanes:r,Pe(Ot,Sn),Sn|=t}else o!==null?(t=o.baseLanes|r,n.memoizedState=null):t=r,Pe(Ot,Sn),Sn|=t;return fn(e,n,a,r),n.child}function Rp(e,n){var r=n.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(n.flags|=512,n.flags|=2097152)}function il(e,n,r,t,a){var o=bn(r)?ft:cn.current;return o=Kt(n,o),Ut(n,a),r=ic(e,n,r,t,o,a),t=lc(),e!==null&&!yn?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,jr(e,n,a)):(Be&&t&&Kl(n),n.flags|=1,fn(e,n,r,a),n.child)}function Yf(e,n,r,t,a){if(bn(r)){var o=!0;os(n)}else o=!1;if(Ut(n,a),n.stateNode===null)Ho(e,n),Ep(n,r,t),ol(n,r,t,a),t=!0;else if(e===null){var i=n.stateNode,l=n.memoizedProps;i.props=l;var f=i.context,u=r.contextType;typeof u=="object"&&u!==null?u=On(u):(u=bn(r)?ft:cn.current,u=Kt(n,u));var x=r.getDerivedStateFromProps,d=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function";d||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==t||f!==u)&&Bf(n,i,t,u),Lr=!1;var m=n.memoizedState;i.state=m,fs(n,t,i,a),f=n.memoizedState,l!==t||m!==f||wn.current||Lr?(typeof x=="function"&&(al(n,r,x,t),f=n.memoizedState),(l=Lr||If(n,r,l,t,m,f,u))?(d||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=t,n.memoizedState=f),i.props=t,i.state=f,i.context=u,t=l):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),t=!1)}else{i=n.stateNode,op(e,n),l=n.memoizedProps,u=n.type===n.elementType?l:Un(n.type,l),i.props=u,d=n.pendingProps,m=i.context,f=r.contextType,typeof f=="object"&&f!==null?f=On(f):(f=bn(r)?ft:cn.current,f=Kt(n,f));var w=r.getDerivedStateFromProps;(x=typeof w=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==d||m!==f)&&Bf(n,i,t,f),Lr=!1,m=n.memoizedState,i.state=m,fs(n,t,i,a);var v=n.memoizedState;l!==d||m!==v||wn.current||Lr?(typeof w=="function"&&(al(n,r,w,t),v=n.memoizedState),(u=Lr||If(n,r,u,t,m,v,f)||!1)?(x||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(t,v,f),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(t,v,f)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=t,n.memoizedState=v),i.props=t,i.state=v,i.context=f,t=u):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),t=!1)}return ll(e,n,r,t,o,a)}function ll(e,n,r,t,a,o){Rp(e,n);var i=(n.flags&128)!==0;if(!t&&!i)return a&&Mf(n,r,!1),jr(e,n,o);t=n.stateNode,jg.current=n;var l=i&&typeof r.getDerivedStateFromError!="function"?null:t.render();return n.flags|=1,e!==null&&i?(n.child=Qt(n,e.child,null,o),n.child=Qt(n,null,l,o)):fn(e,n,l,o),n.memoizedState=t.state,a&&Mf(n,r,!0),n.child}function Mp(e){var n=e.stateNode;n.pendingContext?Rf(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Rf(e,n.context,!1),tc(e,n.containerInfo)}function qf(e,n,r,t,a){return Xt(),Ql(a),n.flags|=256,fn(e,n,r,t),n.child}var cl={dehydrated:null,treeContext:null,retryLane:0};function fl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Tp(e,n,r){var t=n.pendingProps,a=He.current,o=!1,i=(n.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Pe(He,a&1),e===null)return rl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=t.children,e=t.fallback,o?(t=n.mode,o=n.child,i={mode:"hidden",children:i},!(t&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Is(i,t,0,null),e=st(e,t,r,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=fl(r),n.memoizedState=cl,e):dc(n,i));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return Eg(e,n,i,t,l,a,r);if(o){o=t.fallback,i=n.mode,a=e.child,l=a.sibling;var f={mode:"hidden",children:t.children};return!(i&1)&&n.child!==a?(t=n.child,t.childLanes=0,t.pendingProps=f,n.deletions=null):(t=Hr(a,f),t.subtreeFlags=a.subtreeFlags&14680064),l!==null?o=Hr(l,o):(o=st(o,i,r,null),o.flags|=2),o.return=n,t.return=n,t.sibling=o,n.child=t,t=o,o=n.child,i=e.child.memoizedState,i=i===null?fl(r):{baseLanes:i.baseLanes|r,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~r,n.memoizedState=cl,t}return o=e.child,e=o.sibling,t=Hr(o,{mode:"visible",children:t.children}),!(n.mode&1)&&(t.lanes=r),t.return=n,t.sibling=null,e!==null&&(r=n.deletions,r===null?(n.deletions=[e],n.flags|=16):r.push(e)),n.child=t,n.memoizedState=null,t}function dc(e,n){return n=Is({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function So(e,n,r,t){return t!==null&&Ql(t),Qt(n,e.child,null,r),e=dc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Eg(e,n,r,t,a,o,i){if(r)return n.flags&256?(n.flags&=-257,t=yi(Error(O(422))),So(e,n,i,t)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=t.fallback,a=n.mode,t=Is({mode:"visible",children:t.children},a,0,null),o=st(o,a,i,null),o.flags|=2,t.return=n,o.return=n,t.sibling=o,n.child=t,n.mode&1&&Qt(n,e.child,null,i),n.child.memoizedState=fl(i),n.memoizedState=cl,o);if(!(n.mode&1))return So(e,n,i,null);if(a.data==="$!"){if(t=a.nextSibling&&a.nextSibling.dataset,t)var l=t.dgst;return t=l,o=Error(O(419)),t=yi(o,t,void 0),So(e,n,i,t)}if(l=(i&e.childLanes)!==0,yn||l){if(t=nn,t!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(t.suspendedLanes|i)?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,Sr(e,a),qn(t,e,a,-1))}return gc(),t=yi(Error(O(421))),So(e,n,i,t)}return a.data==="$?"?(n.flags|=128,n.child=e.child,n=Fg.bind(null,e),a._reactRetry=n,null):(e=o.treeContext,En=Fr(a.nextSibling),Cn=n,Be=!0,Vn=null,e!==null&&(Tn[zn++]=gr,Tn[zn++]=vr,Tn[zn++]=dt,gr=e.id,vr=e.overflow,dt=n),n=dc(n,t.children),n.flags|=4096,n)}function Kf(e,n,r){e.lanes|=n;var t=e.alternate;t!==null&&(t.lanes|=n),tl(e.return,n,r)}function wi(e,n,r,t,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:t,tail:r,tailMode:a}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=t,o.tail=r,o.tailMode=a)}function zp(e,n,r){var t=n.pendingProps,a=t.revealOrder,o=t.tail;if(fn(e,n,t.children,r),t=He.current,t&2)t=t&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Kf(e,r,n);else if(e.tag===19)Kf(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}t&=1}if(Pe(He,t),!(n.mode&1))n.memoizedState=null;else switch(a){case"forwards":for(r=n.child,a=null;r!==null;)e=r.alternate,e!==null&&ds(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=n.child,n.child=null):(a=r.sibling,r.sibling=null),wi(n,!1,a,r,o);break;case"backwards":for(r=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&ds(e)===null){n.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}wi(n,!0,r,null,o);break;case"together":wi(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ho(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function jr(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),pt|=n.lanes,!(r&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(O(153));if(n.child!==null){for(e=n.child,r=Hr(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=Hr(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function Cg(e,n,r){switch(n.tag){case 3:Mp(n),Xt();break;case 5:sp(n);break;case 1:bn(n.type)&&os(n);break;case 4:tc(n,n.stateNode.containerInfo);break;case 10:var t=n.type._context,a=n.memoizedProps.value;Pe(ls,t._currentValue),t._currentValue=a;break;case 13:if(t=n.memoizedState,t!==null)return t.dehydrated!==null?(Pe(He,He.current&1),n.flags|=128,null):r&n.child.childLanes?Tp(e,n,r):(Pe(He,He.current&1),e=jr(e,n,r),e!==null?e.sibling:null);Pe(He,He.current&1);break;case 19:if(t=(r&n.childLanes)!==0,e.flags&128){if(t)return zp(e,n,r);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Pe(He,He.current),t)break;return null;case 22:case 23:return n.lanes=0,Lp(e,n,r)}return jr(e,n,r)}var Pp,dl,Ap,Dp;Pp=function(e,n){for(var r=n.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};dl=function(){};Ap=function(e,n,r,t){var a=e.memoizedProps;if(a!==t){e=n.stateNode,tt(fr.current);var o=null;switch(r){case"input":a=Ti(e,a),t=Ti(e,t),o=[];break;case"select":a=Ge({},a,{value:void 0}),t=Ge({},t,{value:void 0}),o=[];break;case"textarea":a=Ai(e,a),t=Ai(e,t),o=[];break;default:typeof a.onClick!="function"&&typeof t.onClick=="function"&&(e.onclick=ts)}Oi(r,t);var i;r=null;for(u in a)if(!t.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var l=a[u];for(i in l)l.hasOwnProperty(i)&&(r||(r={}),r[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Aa.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in t){var f=t[u];if(l=a!=null?a[u]:void 0,t.hasOwnProperty(u)&&f!==l&&(f!=null||l!=null))if(u==="style")if(l){for(i in l)!l.hasOwnProperty(i)||f&&f.hasOwnProperty(i)||(r||(r={}),r[i]="");for(i in f)f.hasOwnProperty(i)&&l[i]!==f[i]&&(r||(r={}),r[i]=f[i])}else r||(o||(o=[]),o.push(u,r)),r=f;else u==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,l=l?l.__html:void 0,f!=null&&l!==f&&(o=o||[]).push(u,f)):u==="children"?typeof f!="string"&&typeof f!="number"||(o=o||[]).push(u,""+f):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Aa.hasOwnProperty(u)?(f!=null&&u==="onScroll"&&Oe("scroll",e),o||l===f||(o=[])):(o=o||[]).push(u,f))}r&&(o=o||[]).push("style",r);var u=o;(n.updateQueue=u)&&(n.flags|=4)}};Dp=function(e,n,r,t){r!==t&&(n.flags|=4)};function ma(e,n){if(!Be)switch(e.tailMode){case"hidden":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var t=null;r!==null;)r.alternate!==null&&(t=r),r=r.sibling;t===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:t.sibling=null}}function sn(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,t=0;if(n)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,t|=a.subtreeFlags&14680064,t|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,t|=a.subtreeFlags,t|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=t,e.childLanes=r,n}function Ng(e,n,r){var t=n.pendingProps;switch(Xl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sn(n),null;case 1:return bn(n.type)&&as(),sn(n),null;case 3:return t=n.stateNode,Zt(),Fe(wn),Fe(cn),oc(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(_o(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Vn!==null&&(yl(Vn),Vn=null))),dl(e,n),sn(n),null;case 5:ac(n);var a=tt(qa.current);if(r=n.type,e!==null&&n.stateNode!=null)Ap(e,n,r,t,a),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!t){if(n.stateNode===null)throw Error(O(166));return sn(n),null}if(e=tt(fr.current),_o(n)){t=n.stateNode,r=n.type;var o=n.memoizedProps;switch(t[lr]=n,t[Va]=o,e=(n.mode&1)!==0,r){case"dialog":Oe("cancel",t),Oe("close",t);break;case"iframe":case"object":case"embed":Oe("load",t);break;case"video":case"audio":for(a=0;a<_a.length;a++)Oe(_a[a],t);break;case"source":Oe("error",t);break;case"img":case"image":case"link":Oe("error",t),Oe("load",t);break;case"details":Oe("toggle",t);break;case"input":tf(t,o),Oe("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!o.multiple},Oe("invalid",t);break;case"textarea":of(t,o),Oe("invalid",t)}Oi(r,o),a=null;for(var i in o)if(o.hasOwnProperty(i)){var l=o[i];i==="children"?typeof l=="string"?t.textContent!==l&&(o.suppressHydrationWarning!==!0&&bo(t.textContent,l,e),a=["children",l]):typeof l=="number"&&t.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&bo(t.textContent,l,e),a=["children",""+l]):Aa.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&Oe("scroll",t)}switch(r){case"input":po(t),af(t,o,!0);break;case"textarea":po(t),sf(t);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(t.onclick=ts)}t=a,n.updateQueue=t,t!==null&&(n.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=du(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof t.is=="string"?e=i.createElement(r,{is:t.is}):(e=i.createElement(r),r==="select"&&(i=e,t.multiple?i.multiple=!0:t.size&&(i.size=t.size))):e=i.createElementNS(e,r),e[lr]=n,e[Va]=t,Pp(e,n,!1,!1),n.stateNode=e;e:{switch(i=Fi(r,t),r){case"dialog":Oe("cancel",e),Oe("close",e),a=t;break;case"iframe":case"object":case"embed":Oe("load",e),a=t;break;case"video":case"audio":for(a=0;a<_a.length;a++)Oe(_a[a],e);a=t;break;case"source":Oe("error",e),a=t;break;case"img":case"image":case"link":Oe("error",e),Oe("load",e),a=t;break;case"details":Oe("toggle",e),a=t;break;case"input":tf(e,t),a=Ti(e,t),Oe("invalid",e);break;case"option":a=t;break;case"select":e._wrapperState={wasMultiple:!!t.multiple},a=Ge({},t,{value:void 0}),Oe("invalid",e);break;case"textarea":of(e,t),a=Ai(e,t),Oe("invalid",e);break;default:a=t}Oi(r,a),l=a;for(o in l)if(l.hasOwnProperty(o)){var f=l[o];o==="style"?mu(e,f):o==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&uu(e,f)):o==="children"?typeof f=="string"?(r!=="textarea"||f!=="")&&Da(e,f):typeof f=="number"&&Da(e,""+f):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Aa.hasOwnProperty(o)?f!=null&&o==="onScroll"&&Oe("scroll",e):f!=null&&Pl(e,o,f,i))}switch(r){case"input":po(e),af(e,t,!1);break;case"textarea":po(e),sf(e);break;case"option":t.value!=null&&e.setAttribute("value",""+Ur(t.value));break;case"select":e.multiple=!!t.multiple,o=t.value,o!=null?It(e,!!t.multiple,o,!1):t.defaultValue!=null&&It(e,!!t.multiple,t.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=ts)}switch(r){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break e;case"img":t=!0;break e;default:t=!1}}t&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return sn(n),null;case 6:if(e&&n.stateNode!=null)Dp(e,n,e.memoizedProps,t);else{if(typeof t!="string"&&n.stateNode===null)throw Error(O(166));if(r=tt(qa.current),tt(fr.current),_o(n)){if(t=n.stateNode,r=n.memoizedProps,t[lr]=n,(o=t.nodeValue!==r)&&(e=Cn,e!==null))switch(e.tag){case 3:bo(t.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&bo(t.nodeValue,r,(e.mode&1)!==0)}o&&(n.flags|=4)}else t=(r.nodeType===9?r:r.ownerDocument).createTextNode(t),t[lr]=n,n.stateNode=t}return sn(n),null;case 13:if(Fe(He),t=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Be&&En!==null&&n.mode&1&&!(n.flags&128))np(),Xt(),n.flags|=98560,o=!1;else if(o=_o(n),t!==null&&t.dehydrated!==null){if(e===null){if(!o)throw Error(O(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(O(317));o[lr]=n}else Xt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;sn(n),o=!1}else Vn!==null&&(yl(Vn),Vn=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=r,n):(t=t!==null,t!==(e!==null&&e.memoizedState!==null)&&t&&(n.child.flags|=8192,n.mode&1&&(e===null||He.current&1?Ze===0&&(Ze=3):gc())),n.updateQueue!==null&&(n.flags|=4),sn(n),null);case 4:return Zt(),dl(e,n),e===null&&Ua(n.stateNode.containerInfo),sn(n),null;case 10:return ec(n.type._context),sn(n),null;case 17:return bn(n.type)&&as(),sn(n),null;case 19:if(Fe(He),o=n.memoizedState,o===null)return sn(n),null;if(t=(n.flags&128)!==0,i=o.rendering,i===null)if(t)ma(o,!1);else{if(Ze!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=ds(e),i!==null){for(n.flags|=128,ma(o,!1),t=i.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),n.subtreeFlags=0,t=r,r=n.child;r!==null;)o=r,e=t,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Pe(He,He.current&1|2),n.child}e=e.sibling}o.tail!==null&&Ye()>ea&&(n.flags|=128,t=!0,ma(o,!1),n.lanes=4194304)}else{if(!t)if(e=ds(i),e!==null){if(n.flags|=128,t=!0,r=e.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),ma(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!Be)return sn(n),null}else 2*Ye()-o.renderingStartTime>ea&&r!==1073741824&&(n.flags|=128,t=!0,ma(o,!1),n.lanes=4194304);o.isBackwards?(i.sibling=n.child,n.child=i):(r=o.last,r!==null?r.sibling=i:n.child=i,o.last=i)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=Ye(),n.sibling=null,r=He.current,Pe(He,t?r&1|2:r&1),n):(sn(n),null);case 22:case 23:return xc(),t=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==t&&(n.flags|=8192),t&&n.mode&1?Sn&1073741824&&(sn(n),n.subtreeFlags&6&&(n.flags|=8192)):sn(n),null;case 24:return null;case 25:return null}throw Error(O(156,n.tag))}function $g(e,n){switch(Xl(n),n.tag){case 1:return bn(n.type)&&as(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Zt(),Fe(wn),Fe(cn),oc(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return ac(n),null;case 13:if(Fe(He),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(O(340));Xt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Fe(He),null;case 4:return Zt(),null;case 10:return ec(n.type._context),null;case 22:case 23:return xc(),null;case 24:return null;default:return null}}var jo=!1,ln=!1,Lg=typeof WeakSet=="function"?WeakSet:Set,X=null;function Dt(e,n){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(t){Ve(e,n,t)}else r.current=null}function ul(e,n,r){try{r()}catch(t){Ve(e,n,t)}}var Xf=!1;function Rg(e,n){if(Ki=es,e=Wu(),ql(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var t=r.getSelection&&r.getSelection();if(t&&t.rangeCount!==0){r=t.anchorNode;var a=t.anchorOffset,o=t.focusNode;t=t.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var i=0,l=-1,f=-1,u=0,x=0,d=e,m=null;n:for(;;){for(var w;d!==r||a!==0&&d.nodeType!==3||(l=i+a),d!==o||t!==0&&d.nodeType!==3||(f=i+t),d.nodeType===3&&(i+=d.nodeValue.length),(w=d.firstChild)!==null;)m=d,d=w;for(;;){if(d===e)break n;if(m===r&&++u===a&&(l=i),m===o&&++x===t&&(f=i),(w=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=w}r=l===-1||f===-1?null:{start:l,end:f}}else r=null}r=r||{start:0,end:0}}else r=null;for(Xi={focusedElem:e,selectionRange:r},es=!1,X=n;X!==null;)if(n=X,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,X=e;else for(;X!==null;){n=X;try{var v=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var b=v.memoizedProps,S=v.memoizedState,h=n.stateNode,c=h.getSnapshotBeforeUpdate(n.elementType===n.type?b:Un(n.type,b),S);h.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=n.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(g){Ve(n,n.return,g)}if(e=n.sibling,e!==null){e.return=n.return,X=e;break}X=n.return}return v=Xf,Xf=!1,v}function Ra(e,n,r){var t=n.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var a=t=t.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&ul(n,r,o)}a=a.next}while(a!==t)}}function Os(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do{if((r.tag&e)===e){var t=r.create;r.destroy=t()}r=r.next}while(r!==n)}}function pl(e){var n=e.ref;if(n!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof n=="function"?n(e):n.current=e}}function Op(e){var n=e.alternate;n!==null&&(e.alternate=null,Op(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[lr],delete n[Va],delete n[Ji],delete n[pg],delete n[mg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fp(e){return e.tag===5||e.tag===3||e.tag===4}function Qf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ml(e,n,r){var t=e.tag;if(t===5||t===6)e=e.stateNode,n?r.nodeType===8?r.parentNode.insertBefore(e,n):r.insertBefore(e,n):(r.nodeType===8?(n=r.parentNode,n.insertBefore(e,r)):(n=r,n.appendChild(e)),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=ts));else if(t!==4&&(e=e.child,e!==null))for(ml(e,n,r),e=e.sibling;e!==null;)ml(e,n,r),e=e.sibling}function hl(e,n,r){var t=e.tag;if(t===5||t===6)e=e.stateNode,n?r.insertBefore(e,n):r.appendChild(e);else if(t!==4&&(e=e.child,e!==null))for(hl(e,n,r),e=e.sibling;e!==null;)hl(e,n,r),e=e.sibling}var rn=null,Gn=!1;function Cr(e,n,r){for(r=r.child;r!==null;)Ip(e,n,r),r=r.sibling}function Ip(e,n,r){if(cr&&typeof cr.onCommitFiberUnmount=="function")try{cr.onCommitFiberUnmount(Ls,r)}catch{}switch(r.tag){case 5:ln||Dt(r,n);case 6:var t=rn,a=Gn;rn=null,Cr(e,n,r),rn=t,Gn=a,rn!==null&&(Gn?(e=rn,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):rn.removeChild(r.stateNode));break;case 18:rn!==null&&(Gn?(e=rn,r=r.stateNode,e.nodeType===8?pi(e.parentNode,r):e.nodeType===1&&pi(e,r),Ba(e)):pi(rn,r.stateNode));break;case 4:t=rn,a=Gn,rn=r.stateNode.containerInfo,Gn=!0,Cr(e,n,r),rn=t,Gn=a;break;case 0:case 11:case 14:case 15:if(!ln&&(t=r.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){a=t=t.next;do{var o=a,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&ul(r,n,i),a=a.next}while(a!==t)}Cr(e,n,r);break;case 1:if(!ln&&(Dt(r,n),t=r.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=r.memoizedProps,t.state=r.memoizedState,t.componentWillUnmount()}catch(l){Ve(r,n,l)}Cr(e,n,r);break;case 21:Cr(e,n,r);break;case 22:r.mode&1?(ln=(t=ln)||r.memoizedState!==null,Cr(e,n,r),ln=t):Cr(e,n,r);break;default:Cr(e,n,r)}}function Zf(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Lg),n.forEach(function(t){var a=Ig.bind(null,e,t);r.has(t)||(r.add(t),t.then(a,a))})}}function Hn(e,n){var r=n.deletions;if(r!==null)for(var t=0;t<r.length;t++){var a=r[t];try{var o=e,i=n,l=i;e:for(;l!==null;){switch(l.tag){case 5:rn=l.stateNode,Gn=!1;break e;case 3:rn=l.stateNode.containerInfo,Gn=!0;break e;case 4:rn=l.stateNode.containerInfo,Gn=!0;break e}l=l.return}if(rn===null)throw Error(O(160));Ip(o,i,a),rn=null,Gn=!1;var f=a.alternate;f!==null&&(f.return=null),a.return=null}catch(u){Ve(a,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Bp(n,e),n=n.sibling}function Bp(e,n){var r=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Hn(n,e),tr(e),t&4){try{Ra(3,e,e.return),Os(3,e)}catch(b){Ve(e,e.return,b)}try{Ra(5,e,e.return)}catch(b){Ve(e,e.return,b)}}break;case 1:Hn(n,e),tr(e),t&512&&r!==null&&Dt(r,r.return);break;case 5:if(Hn(n,e),tr(e),t&512&&r!==null&&Dt(r,r.return),e.flags&32){var a=e.stateNode;try{Da(a,"")}catch(b){Ve(e,e.return,b)}}if(t&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,i=r!==null?r.memoizedProps:o,l=e.type,f=e.updateQueue;if(e.updateQueue=null,f!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&cu(a,o),Fi(l,i);var u=Fi(l,o);for(i=0;i<f.length;i+=2){var x=f[i],d=f[i+1];x==="style"?mu(a,d):x==="dangerouslySetInnerHTML"?uu(a,d):x==="children"?Da(a,d):Pl(a,x,d,u)}switch(l){case"input":zi(a,o);break;case"textarea":fu(a,o);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?It(a,!!o.multiple,w,!1):m!==!!o.multiple&&(o.defaultValue!=null?It(a,!!o.multiple,o.defaultValue,!0):It(a,!!o.multiple,o.multiple?[]:"",!1))}a[Va]=o}catch(b){Ve(e,e.return,b)}}break;case 6:if(Hn(n,e),tr(e),t&4){if(e.stateNode===null)throw Error(O(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(b){Ve(e,e.return,b)}}break;case 3:if(Hn(n,e),tr(e),t&4&&r!==null&&r.memoizedState.isDehydrated)try{Ba(n.containerInfo)}catch(b){Ve(e,e.return,b)}break;case 4:Hn(n,e),tr(e);break;case 13:Hn(n,e),tr(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(mc=Ye())),t&4&&Zf(e);break;case 22:if(x=r!==null&&r.memoizedState!==null,e.mode&1?(ln=(u=ln)||x,Hn(n,e),ln=u):Hn(n,e),tr(e),t&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!x&&e.mode&1)for(X=e,x=e.child;x!==null;){for(d=X=x;X!==null;){switch(m=X,w=m.child,m.tag){case 0:case 11:case 14:case 15:Ra(4,m,m.return);break;case 1:Dt(m,m.return);var v=m.stateNode;if(typeof v.componentWillUnmount=="function"){t=m,r=m.return;try{n=t,v.props=n.memoizedProps,v.state=n.memoizedState,v.componentWillUnmount()}catch(b){Ve(t,r,b)}}break;case 5:Dt(m,m.return);break;case 22:if(m.memoizedState!==null){ed(d);continue}}w!==null?(w.return=m,X=w):ed(d)}x=x.sibling}e:for(x=null,d=e;;){if(d.tag===5){if(x===null){x=d;try{a=d.stateNode,u?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=d.stateNode,f=d.memoizedProps.style,i=f!=null&&f.hasOwnProperty("display")?f.display:null,l.style.display=pu("display",i))}catch(b){Ve(e,e.return,b)}}}else if(d.tag===6){if(x===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(b){Ve(e,e.return,b)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;x===d&&(x=null),d=d.return}x===d&&(x=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Hn(n,e),tr(e),t&4&&Zf(e);break;case 21:break;default:Hn(n,e),tr(e)}}function tr(e){var n=e.flags;if(n&2){try{e:{for(var r=e.return;r!==null;){if(Fp(r)){var t=r;break e}r=r.return}throw Error(O(160))}switch(t.tag){case 5:var a=t.stateNode;t.flags&32&&(Da(a,""),t.flags&=-33);var o=Qf(e);hl(e,o,a);break;case 3:case 4:var i=t.stateNode.containerInfo,l=Qf(e);ml(e,l,i);break;default:throw Error(O(161))}}catch(f){Ve(e,e.return,f)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Mg(e,n,r){X=e,Wp(e)}function Wp(e,n,r){for(var t=(e.mode&1)!==0;X!==null;){var a=X,o=a.child;if(a.tag===22&&t){var i=a.memoizedState!==null||jo;if(!i){var l=a.alternate,f=l!==null&&l.memoizedState!==null||ln;l=jo;var u=ln;if(jo=i,(ln=f)&&!u)for(X=a;X!==null;)i=X,f=i.child,i.tag===22&&i.memoizedState!==null?nd(a):f!==null?(f.return=i,X=f):nd(a);for(;o!==null;)X=o,Wp(o),o=o.sibling;X=a,jo=l,ln=u}Jf(e)}else a.subtreeFlags&8772&&o!==null?(o.return=a,X=o):Jf(e)}}function Jf(e){for(;X!==null;){var n=X;if(n.flags&8772){var r=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ln||Os(5,n);break;case 1:var t=n.stateNode;if(n.flags&4&&!ln)if(r===null)t.componentDidMount();else{var a=n.elementType===n.type?r.memoizedProps:Un(n.type,r.memoizedProps);t.componentDidUpdate(a,r.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Df(n,o,t);break;case 3:var i=n.updateQueue;if(i!==null){if(r=null,n.child!==null)switch(n.child.tag){case 5:r=n.child.stateNode;break;case 1:r=n.child.stateNode}Df(n,i,r)}break;case 5:var l=n.stateNode;if(r===null&&n.flags&4){r=l;var f=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&r.focus();break;case"img":f.src&&(r.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var x=u.memoizedState;if(x!==null){var d=x.dehydrated;d!==null&&Ba(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}ln||n.flags&512&&pl(n)}catch(m){Ve(n,n.return,m)}}if(n===e){X=null;break}if(r=n.sibling,r!==null){r.return=n.return,X=r;break}X=n.return}}function ed(e){for(;X!==null;){var n=X;if(n===e){X=null;break}var r=n.sibling;if(r!==null){r.return=n.return,X=r;break}X=n.return}}function nd(e){for(;X!==null;){var n=X;try{switch(n.tag){case 0:case 11:case 15:var r=n.return;try{Os(4,n)}catch(f){Ve(n,r,f)}break;case 1:var t=n.stateNode;if(typeof t.componentDidMount=="function"){var a=n.return;try{t.componentDidMount()}catch(f){Ve(n,a,f)}}var o=n.return;try{pl(n)}catch(f){Ve(n,o,f)}break;case 5:var i=n.return;try{pl(n)}catch(f){Ve(n,i,f)}}}catch(f){Ve(n,n.return,f)}if(n===e){X=null;break}var l=n.sibling;if(l!==null){l.return=n.return,X=l;break}X=n.return}}var Tg=Math.ceil,ms=Er.ReactCurrentDispatcher,uc=Er.ReactCurrentOwner,Dn=Er.ReactCurrentBatchConfig,je=0,nn=null,Xe=null,tn=0,Sn=0,Ot=qr(0),Ze=0,Za=null,pt=0,Fs=0,pc=0,Ma=null,vn=null,mc=0,ea=1/0,hr=null,hs=!1,xl=null,Br=null,Eo=!1,zr=null,xs=0,Ta=0,gl=null,Uo=-1,Go=0;function dn(){return je&6?Ye():Uo!==-1?Uo:Uo=Ye()}function Wr(e){return e.mode&1?je&2&&tn!==0?tn&-tn:xg.transition!==null?(Go===0&&(Go=Eu()),Go):(e=Ne,e!==0||(e=window.event,e=e===void 0?16:Tu(e.type)),e):1}function qn(e,n,r,t){if(50<Ta)throw Ta=0,gl=null,Error(O(185));oo(e,r,t),(!(je&2)||e!==nn)&&(e===nn&&(!(je&2)&&(Fs|=r),Ze===4&&Mr(e,tn)),_n(e,t),r===1&&je===0&&!(n.mode&1)&&(ea=Ye()+500,Ps&&Kr()))}function _n(e,n){var r=e.callbackNode;xx(e,n);var t=Jo(e,e===nn?tn:0);if(t===0)r!==null&&ff(r),e.callbackNode=null,e.callbackPriority=0;else if(n=t&-t,e.callbackPriority!==n){if(r!=null&&ff(r),n===1)e.tag===0?hg(rd.bind(null,e)):Zu(rd.bind(null,e)),dg(function(){!(je&6)&&Kr()}),r=null;else{switch(Cu(t)){case 1:r=Il;break;case 4:r=Su;break;case 16:r=Zo;break;case 536870912:r=ju;break;default:r=Zo}r=Xp(r,Hp.bind(null,e))}e.callbackPriority=n,e.callbackNode=r}}function Hp(e,n){if(Uo=-1,Go=0,je&6)throw Error(O(327));var r=e.callbackNode;if(Gt()&&e.callbackNode!==r)return null;var t=Jo(e,e===nn?tn:0);if(t===0)return null;if(t&30||t&e.expiredLanes||n)n=gs(e,t);else{n=t;var a=je;je|=2;var o=Gp();(nn!==e||tn!==n)&&(hr=null,ea=Ye()+500,ot(e,n));do try{Ag();break}catch(l){Up(e,l)}while(!0);Jl(),ms.current=o,je=a,Xe!==null?n=0:(nn=null,tn=0,n=Ze)}if(n!==0){if(n===2&&(a=Ui(e),a!==0&&(t=a,n=vl(e,a))),n===1)throw r=Za,ot(e,0),Mr(e,t),_n(e,Ye()),r;if(n===6)Mr(e,t);else{if(a=e.current.alternate,!(t&30)&&!zg(a)&&(n=gs(e,t),n===2&&(o=Ui(e),o!==0&&(t=o,n=vl(e,o))),n===1))throw r=Za,ot(e,0),Mr(e,t),_n(e,Ye()),r;switch(e.finishedWork=a,e.finishedLanes=t,n){case 0:case 1:throw Error(O(345));case 2:et(e,vn,hr);break;case 3:if(Mr(e,t),(t&130023424)===t&&(n=mc+500-Ye(),10<n)){if(Jo(e,0)!==0)break;if(a=e.suspendedLanes,(a&t)!==t){dn(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Zi(et.bind(null,e,vn,hr),n);break}et(e,vn,hr);break;case 4:if(Mr(e,t),(t&4194240)===t)break;for(n=e.eventTimes,a=-1;0<t;){var i=31-Yn(t);o=1<<i,i=n[i],i>a&&(a=i),t&=~o}if(t=a,t=Ye()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*Tg(t/1960))-t,10<t){e.timeoutHandle=Zi(et.bind(null,e,vn,hr),t);break}et(e,vn,hr);break;case 5:et(e,vn,hr);break;default:throw Error(O(329))}}}return _n(e,Ye()),e.callbackNode===r?Hp.bind(null,e):null}function vl(e,n){var r=Ma;return e.current.memoizedState.isDehydrated&&(ot(e,n).flags|=256),e=gs(e,n),e!==2&&(n=vn,vn=r,n!==null&&yl(n)),e}function yl(e){vn===null?vn=e:vn.push.apply(vn,e)}function zg(e){for(var n=e;;){if(n.flags&16384){var r=n.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var t=0;t<r.length;t++){var a=r[t],o=a.getSnapshot;a=a.value;try{if(!Xn(o(),a))return!1}catch{return!1}}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Mr(e,n){for(n&=~pc,n&=~Fs,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var r=31-Yn(n),t=1<<r;e[r]=-1,n&=~t}}function rd(e){if(je&6)throw Error(O(327));Gt();var n=Jo(e,0);if(!(n&1))return _n(e,Ye()),null;var r=gs(e,n);if(e.tag!==0&&r===2){var t=Ui(e);t!==0&&(n=t,r=vl(e,t))}if(r===1)throw r=Za,ot(e,0),Mr(e,n),_n(e,Ye()),r;if(r===6)throw Error(O(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,et(e,vn,hr),_n(e,Ye()),null}function hc(e,n){var r=je;je|=1;try{return e(n)}finally{je=r,je===0&&(ea=Ye()+500,Ps&&Kr())}}function mt(e){zr!==null&&zr.tag===0&&!(je&6)&&Gt();var n=je;je|=1;var r=Dn.transition,t=Ne;try{if(Dn.transition=null,Ne=1,e)return e()}finally{Ne=t,Dn.transition=r,je=n,!(je&6)&&Kr()}}function xc(){Sn=Ot.current,Fe(Ot)}function ot(e,n){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,fg(r)),Xe!==null)for(r=Xe.return;r!==null;){var t=r;switch(Xl(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&as();break;case 3:Zt(),Fe(wn),Fe(cn),oc();break;case 5:ac(t);break;case 4:Zt();break;case 13:Fe(He);break;case 19:Fe(He);break;case 10:ec(t.type._context);break;case 22:case 23:xc()}r=r.return}if(nn=e,Xe=e=Hr(e.current,null),tn=Sn=n,Ze=0,Za=null,pc=Fs=pt=0,vn=Ma=null,rt!==null){for(n=0;n<rt.length;n++)if(r=rt[n],t=r.interleaved,t!==null){r.interleaved=null;var a=t.next,o=r.pending;if(o!==null){var i=o.next;o.next=a,t.next=i}r.pending=t}rt=null}return e}function Up(e,n){do{var r=Xe;try{if(Jl(),Bo.current=ps,us){for(var t=Ue.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}us=!1}if(ut=0,Je=Qe=Ue=null,La=!1,Ka=0,uc.current=null,r===null||r.return===null){Ze=1,Za=n,Xe=null;break}e:{var o=e,i=r.return,l=r,f=n;if(n=tn,l.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var u=f,x=l,d=x.tag;if(!(x.mode&1)&&(d===0||d===11||d===15)){var m=x.alternate;m?(x.updateQueue=m.updateQueue,x.memoizedState=m.memoizedState,x.lanes=m.lanes):(x.updateQueue=null,x.memoizedState=null)}var w=Hf(i);if(w!==null){w.flags&=-257,Uf(w,i,l,o,n),w.mode&1&&Wf(o,u,n),n=w,f=u;var v=n.updateQueue;if(v===null){var b=new Set;b.add(f),n.updateQueue=b}else v.add(f);break e}else{if(!(n&1)){Wf(o,u,n),gc();break e}f=Error(O(426))}}else if(Be&&l.mode&1){var S=Hf(i);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Uf(S,i,l,o,n),Ql(Jt(f,l));break e}}o=f=Jt(f,l),Ze!==4&&(Ze=2),Ma===null?Ma=[o]:Ma.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var h=Cp(o,f,n);Af(o,h);break e;case 1:l=f;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Br===null||!Br.has(p)))){o.flags|=65536,n&=-n,o.lanes|=n;var g=Np(o,l,n);Af(o,g);break e}}o=o.return}while(o!==null)}Yp(r)}catch(y){n=y,Xe===r&&r!==null&&(Xe=r=r.return);continue}break}while(!0)}function Gp(){var e=ms.current;return ms.current=ps,e===null?ps:e}function gc(){(Ze===0||Ze===3||Ze===2)&&(Ze=4),nn===null||!(pt&268435455)&&!(Fs&268435455)||Mr(nn,tn)}function gs(e,n){var r=je;je|=2;var t=Gp();(nn!==e||tn!==n)&&(hr=null,ot(e,n));do try{Pg();break}catch(a){Up(e,a)}while(!0);if(Jl(),je=r,ms.current=t,Xe!==null)throw Error(O(261));return nn=null,tn=0,Ze}function Pg(){for(;Xe!==null;)Vp(Xe)}function Ag(){for(;Xe!==null&&!ix();)Vp(Xe)}function Vp(e){var n=Kp(e.alternate,e,Sn);e.memoizedProps=e.pendingProps,n===null?Yp(e):Xe=n,uc.current=null}function Yp(e){var n=e;do{var r=n.alternate;if(e=n.return,n.flags&32768){if(r=$g(r,n),r!==null){r.flags&=32767,Xe=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ze=6,Xe=null;return}}else if(r=Ng(r,n,Sn),r!==null){Xe=r;return}if(n=n.sibling,n!==null){Xe=n;return}Xe=n=e}while(n!==null);Ze===0&&(Ze=5)}function et(e,n,r){var t=Ne,a=Dn.transition;try{Dn.transition=null,Ne=1,Dg(e,n,r,t)}finally{Dn.transition=a,Ne=t}return null}function Dg(e,n,r,t){do Gt();while(zr!==null);if(je&6)throw Error(O(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(O(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(gx(e,o),e===nn&&(Xe=nn=null,tn=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Eo||(Eo=!0,Xp(Zo,function(){return Gt(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Dn.transition,Dn.transition=null;var i=Ne;Ne=1;var l=je;je|=4,uc.current=null,Rg(e,r),Bp(r,e),tg(Xi),es=!!Ki,Xi=Ki=null,e.current=r,Mg(r),lx(),je=l,Ne=i,Dn.transition=o}else e.current=r;if(Eo&&(Eo=!1,zr=e,xs=a),o=e.pendingLanes,o===0&&(Br=null),dx(r.stateNode),_n(e,Ye()),n!==null)for(t=e.onRecoverableError,r=0;r<n.length;r++)a=n[r],t(a.value,{componentStack:a.stack,digest:a.digest});if(hs)throw hs=!1,e=xl,xl=null,e;return xs&1&&e.tag!==0&&Gt(),o=e.pendingLanes,o&1?e===gl?Ta++:(Ta=0,gl=e):Ta=0,Kr(),null}function Gt(){if(zr!==null){var e=Cu(xs),n=Dn.transition,r=Ne;try{if(Dn.transition=null,Ne=16>e?16:e,zr===null)var t=!1;else{if(e=zr,zr=null,xs=0,je&6)throw Error(O(331));var a=je;for(je|=4,X=e.current;X!==null;){var o=X,i=o.child;if(X.flags&16){var l=o.deletions;if(l!==null){for(var f=0;f<l.length;f++){var u=l[f];for(X=u;X!==null;){var x=X;switch(x.tag){case 0:case 11:case 15:Ra(8,x,o)}var d=x.child;if(d!==null)d.return=x,X=d;else for(;X!==null;){x=X;var m=x.sibling,w=x.return;if(Op(x),x===u){X=null;break}if(m!==null){m.return=w,X=m;break}X=w}}}var v=o.alternate;if(v!==null){var b=v.child;if(b!==null){v.child=null;do{var S=b.sibling;b.sibling=null,b=S}while(b!==null)}}X=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,X=i;else e:for(;X!==null;){if(o=X,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ra(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,X=h;break e}X=o.return}}var c=e.current;for(X=c;X!==null;){i=X;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,X=p;else e:for(i=c;X!==null;){if(l=X,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Os(9,l)}}catch(y){Ve(l,l.return,y)}if(l===i){X=null;break e}var g=l.sibling;if(g!==null){g.return=l.return,X=g;break e}X=l.return}}if(je=a,Kr(),cr&&typeof cr.onPostCommitFiberRoot=="function")try{cr.onPostCommitFiberRoot(Ls,e)}catch{}t=!0}return t}finally{Ne=r,Dn.transition=n}}return!1}function td(e,n,r){n=Jt(r,n),n=Cp(e,n,1),e=Ir(e,n,1),n=dn(),e!==null&&(oo(e,1,n),_n(e,n))}function Ve(e,n,r){if(e.tag===3)td(e,e,r);else for(;n!==null;){if(n.tag===3){td(n,e,r);break}else if(n.tag===1){var t=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(Br===null||!Br.has(t))){e=Jt(r,e),e=Np(n,e,1),n=Ir(n,e,1),e=dn(),n!==null&&(oo(n,1,e),_n(n,e));break}}n=n.return}}function Og(e,n,r){var t=e.pingCache;t!==null&&t.delete(n),n=dn(),e.pingedLanes|=e.suspendedLanes&r,nn===e&&(tn&r)===r&&(Ze===4||Ze===3&&(tn&130023424)===tn&&500>Ye()-mc?ot(e,0):pc|=r),_n(e,n)}function qp(e,n){n===0&&(e.mode&1?(n=xo,xo<<=1,!(xo&130023424)&&(xo=4194304)):n=1);var r=dn();e=Sr(e,n),e!==null&&(oo(e,n,r),_n(e,r))}function Fg(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),qp(e,r)}function Ig(e,n){var r=0;switch(e.tag){case 13:var t=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:t=e.stateNode;break;default:throw Error(O(314))}t!==null&&t.delete(n),qp(e,r)}var Kp;Kp=function(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps||wn.current)yn=!0;else{if(!(e.lanes&r)&&!(n.flags&128))return yn=!1,Cg(e,n,r);yn=!!(e.flags&131072)}else yn=!1,Be&&n.flags&1048576&&Ju(n,is,n.index);switch(n.lanes=0,n.tag){case 2:var t=n.type;Ho(e,n),e=n.pendingProps;var a=Kt(n,cn.current);Ut(n,r),a=ic(null,n,t,e,a,r);var o=lc();return n.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,bn(t)?(o=!0,os(n)):o=!1,n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,rc(n),a.updater=Ds,n.stateNode=a,a._reactInternals=n,ol(n,t,e,r),n=ll(null,n,t,!0,o,r)):(n.tag=0,Be&&o&&Kl(n),fn(null,n,a,r),n=n.child),n;case 16:t=n.elementType;e:{switch(Ho(e,n),e=n.pendingProps,a=t._init,t=a(t._payload),n.type=t,a=n.tag=Wg(t),e=Un(t,e),a){case 0:n=il(null,n,t,e,r);break e;case 1:n=Yf(null,n,t,e,r);break e;case 11:n=Gf(null,n,t,e,r);break e;case 14:n=Vf(null,n,t,Un(t.type,e),r);break e}throw Error(O(306,t,""))}return n;case 0:return t=n.type,a=n.pendingProps,a=n.elementType===t?a:Un(t,a),il(e,n,t,a,r);case 1:return t=n.type,a=n.pendingProps,a=n.elementType===t?a:Un(t,a),Yf(e,n,t,a,r);case 3:e:{if(Mp(n),e===null)throw Error(O(387));t=n.pendingProps,o=n.memoizedState,a=o.element,op(e,n),fs(n,t,null,r);var i=n.memoizedState;if(t=i.element,o.isDehydrated)if(o={element:t,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){a=Jt(Error(O(423)),n),n=qf(e,n,t,r,a);break e}else if(t!==a){a=Jt(Error(O(424)),n),n=qf(e,n,t,r,a);break e}else for(En=Fr(n.stateNode.containerInfo.firstChild),Cn=n,Be=!0,Vn=null,r=tp(n,null,t,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Xt(),t===a){n=jr(e,n,r);break e}fn(e,n,t,r)}n=n.child}return n;case 5:return sp(n),e===null&&rl(n),t=n.type,a=n.pendingProps,o=e!==null?e.memoizedProps:null,i=a.children,Qi(t,a)?i=null:o!==null&&Qi(t,o)&&(n.flags|=32),Rp(e,n),fn(e,n,i,r),n.child;case 6:return e===null&&rl(n),null;case 13:return Tp(e,n,r);case 4:return tc(n,n.stateNode.containerInfo),t=n.pendingProps,e===null?n.child=Qt(n,null,t,r):fn(e,n,t,r),n.child;case 11:return t=n.type,a=n.pendingProps,a=n.elementType===t?a:Un(t,a),Gf(e,n,t,a,r);case 7:return fn(e,n,n.pendingProps,r),n.child;case 8:return fn(e,n,n.pendingProps.children,r),n.child;case 12:return fn(e,n,n.pendingProps.children,r),n.child;case 10:e:{if(t=n.type._context,a=n.pendingProps,o=n.memoizedProps,i=a.value,Pe(ls,t._currentValue),t._currentValue=i,o!==null)if(Xn(o.value,i)){if(o.children===a.children&&!wn.current){n=jr(e,n,r);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var l=o.dependencies;if(l!==null){i=o.child;for(var f=l.firstContext;f!==null;){if(f.context===t){if(o.tag===1){f=wr(-1,r&-r),f.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var x=u.pending;x===null?f.next=f:(f.next=x.next,x.next=f),u.pending=f}}o.lanes|=r,f=o.alternate,f!==null&&(f.lanes|=r),tl(o.return,r,n),l.lanes|=r;break}f=f.next}}else if(o.tag===10)i=o.type===n.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(O(341));i.lanes|=r,l=i.alternate,l!==null&&(l.lanes|=r),tl(i,r,n),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===n){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}fn(e,n,a.children,r),n=n.child}return n;case 9:return a=n.type,t=n.pendingProps.children,Ut(n,r),a=On(a),t=t(a),n.flags|=1,fn(e,n,t,r),n.child;case 14:return t=n.type,a=Un(t,n.pendingProps),a=Un(t.type,a),Vf(e,n,t,a,r);case 15:return $p(e,n,n.type,n.pendingProps,r);case 17:return t=n.type,a=n.pendingProps,a=n.elementType===t?a:Un(t,a),Ho(e,n),n.tag=1,bn(t)?(e=!0,os(n)):e=!1,Ut(n,r),Ep(n,t,a),ol(n,t,a,r),ll(null,n,t,!0,e,r);case 19:return zp(e,n,r);case 22:return Lp(e,n,r)}throw Error(O(156,n.tag))};function Xp(e,n){return ku(e,n)}function Bg(e,n,r,t){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(e,n,r,t){return new Bg(e,n,r,t)}function vc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wg(e){if(typeof e=="function")return vc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Dl)return 11;if(e===Ol)return 14}return 2}function Hr(e,n){var r=e.alternate;return r===null?(r=An(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Vo(e,n,r,t,a,o){var i=2;if(t=e,typeof e=="function")vc(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Nt:return st(r.children,a,o,n);case Al:i=8,a|=8;break;case $i:return e=An(12,r,n,a|2),e.elementType=$i,e.lanes=o,e;case Li:return e=An(13,r,n,a),e.elementType=Li,e.lanes=o,e;case Ri:return e=An(19,r,n,a),e.elementType=Ri,e.lanes=o,e;case su:return Is(r,a,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case au:i=10;break e;case ou:i=9;break e;case Dl:i=11;break e;case Ol:i=14;break e;case $r:i=16,t=null;break e}throw Error(O(130,e==null?e:typeof e,""))}return n=An(i,r,n,a),n.elementType=e,n.type=t,n.lanes=o,n}function st(e,n,r,t){return e=An(7,e,t,n),e.lanes=r,e}function Is(e,n,r,t){return e=An(22,e,t,n),e.elementType=su,e.lanes=r,e.stateNode={isHidden:!1},e}function bi(e,n,r){return e=An(6,e,null,n),e.lanes=r,e}function _i(e,n,r){return n=An(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Hg(e,n,r,t,a){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ri(0),this.expirationTimes=ri(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ri(0),this.identifierPrefix=t,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function yc(e,n,r,t,a,o,i,l,f){return e=new Hg(e,n,r,l,f),n===1?(n=1,o===!0&&(n|=8)):n=0,o=An(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:t,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},rc(o),e}function Ug(e,n,r){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ct,key:t==null?null:""+t,children:e,containerInfo:n,implementation:r}}function Qp(e){if(!e)return Gr;e=e._reactInternals;e:{if(vt(e)!==e||e.tag!==1)throw Error(O(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(bn(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(O(171))}if(e.tag===1){var r=e.type;if(bn(r))return Qu(e,r,n)}return n}function Zp(e,n,r,t,a,o,i,l,f){return e=yc(r,t,!0,e,a,o,i,l,f),e.context=Qp(null),r=e.current,t=dn(),a=Wr(r),o=wr(t,a),o.callback=n??null,Ir(r,o,a),e.current.lanes=a,oo(e,a,t),_n(e,t),e}function Bs(e,n,r,t){var a=n.current,o=dn(),i=Wr(a);return r=Qp(r),n.context===null?n.context=r:n.pendingContext=r,n=wr(o,i),n.payload={element:e},t=t===void 0?null:t,t!==null&&(n.callback=t),e=Ir(a,n,i),e!==null&&(qn(e,a,i,o),Io(e,a,i)),i}function vs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ad(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function wc(e,n){ad(e,n),(e=e.alternate)&&ad(e,n)}function Gg(){return null}var Jp=typeof reportError=="function"?reportError:function(e){console.error(e)};function bc(e){this._internalRoot=e}Ws.prototype.render=bc.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(O(409));Bs(e,n,null,null)};Ws.prototype.unmount=bc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;mt(function(){Bs(null,e,null,null)}),n[kr]=null}};function Ws(e){this._internalRoot=e}Ws.prototype.unstable_scheduleHydration=function(e){if(e){var n=Lu();e={blockedOn:null,target:e,priority:n};for(var r=0;r<Rr.length&&n!==0&&n<Rr[r].priority;r++);Rr.splice(r,0,e),r===0&&Mu(e)}};function _c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Hs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function od(){}function Vg(e,n,r,t,a){if(a){if(typeof t=="function"){var o=t;t=function(){var u=vs(i);o.call(u)}}var i=Zp(n,t,e,0,null,!1,!1,"",od);return e._reactRootContainer=i,e[kr]=i.current,Ua(e.nodeType===8?e.parentNode:e),mt(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof t=="function"){var l=t;t=function(){var u=vs(f);l.call(u)}}var f=yc(e,0,!1,null,null,!1,!1,"",od);return e._reactRootContainer=f,e[kr]=f.current,Ua(e.nodeType===8?e.parentNode:e),mt(function(){Bs(n,f,r,t)}),f}function Us(e,n,r,t,a){var o=r._reactRootContainer;if(o){var i=o;if(typeof a=="function"){var l=a;a=function(){var f=vs(i);l.call(f)}}Bs(n,i,e,a)}else i=Vg(r,n,e,a,t);return vs(i)}Nu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var r=ba(n.pendingLanes);r!==0&&(Bl(n,r|1),_n(n,Ye()),!(je&6)&&(ea=Ye()+500,Kr()))}break;case 13:mt(function(){var t=Sr(e,1);if(t!==null){var a=dn();qn(t,e,1,a)}}),wc(e,1)}};Wl=function(e){if(e.tag===13){var n=Sr(e,134217728);if(n!==null){var r=dn();qn(n,e,134217728,r)}wc(e,134217728)}};$u=function(e){if(e.tag===13){var n=Wr(e),r=Sr(e,n);if(r!==null){var t=dn();qn(r,e,n,t)}wc(e,n)}};Lu=function(){return Ne};Ru=function(e,n){var r=Ne;try{return Ne=e,n()}finally{Ne=r}};Bi=function(e,n,r){switch(n){case"input":if(zi(e,r),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<r.length;n++){var t=r[n];if(t!==e&&t.form===e.form){var a=zs(t);if(!a)throw Error(O(90));lu(t),zi(t,a)}}}break;case"textarea":fu(e,r);break;case"select":n=r.value,n!=null&&It(e,!!r.multiple,n,!1)}};gu=hc;vu=mt;var Yg={usingClientEntryPoint:!1,Events:[io,Mt,zs,hu,xu,hc]},ha={findFiberByHostInstance:nt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qg={bundleType:ha.bundleType,version:ha.version,rendererPackageName:ha.rendererPackageName,rendererConfig:ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Er.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=bu(e),e===null?null:e.stateNode},findFiberByHostInstance:ha.findFiberByHostInstance||Gg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Co=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Co.isDisabled&&Co.supportsFiber)try{Ls=Co.inject(qg),cr=Co}catch{}}$n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yg;$n.createPortal=function(e,n){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_c(n))throw Error(O(200));return Ug(e,n,null,r)};$n.createRoot=function(e,n){if(!_c(e))throw Error(O(299));var r=!1,t="",a=Jp;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(t=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),n=yc(e,1,!1,null,null,r,!1,t,a),e[kr]=n.current,Ua(e.nodeType===8?e.parentNode:e),new bc(n)};$n.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(O(188)):(e=Object.keys(e).join(","),Error(O(268,e)));return e=bu(n),e=e===null?null:e.stateNode,e};$n.flushSync=function(e){return mt(e)};$n.hydrate=function(e,n,r){if(!Hs(n))throw Error(O(200));return Us(null,e,n,!0,r)};$n.hydrateRoot=function(e,n,r){if(!_c(e))throw Error(O(405));var t=r!=null&&r.hydratedSources||null,a=!1,o="",i=Jp;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),n=Zp(n,null,e,1,r??null,a,!1,o,i),e[kr]=n.current,Ua(e),t)for(e=0;e<t.length;e++)r=t[e],a=r._getVersion,a=a(r._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[r,a]:n.mutableSourceEagerHydrationData.push(r,a);return new Ws(n)};$n.render=function(e,n,r){if(!Hs(n))throw Error(O(200));return Us(null,e,n,!1,r)};$n.unmountComponentAtNode=function(e){if(!Hs(e))throw Error(O(40));return e._reactRootContainer?(mt(function(){Us(null,null,e,!1,function(){e._reactRootContainer=null,e[kr]=null})}),!0):!1};$n.unstable_batchedUpdates=hc;$n.unstable_renderSubtreeIntoContainer=function(e,n,r,t){if(!Hs(r))throw Error(O(200));if(e==null||e._reactInternals===void 0)throw Error(O(38));return Us(e,n,r,!1,t)};$n.version="18.3.1-next-f1338f8080-20240426";function em(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(em)}catch(e){console.error(e)}}em(),eu.exports=$n;var nm=eu.exports,rm,sd=nm;rm=sd.createRoot,sd.hydrateRoot;const kc=`*{box-sizing:border-box}html,body{margin:0;padding:0;min-height:100%;-webkit-font-smoothing:antialiased}button{font:inherit;color:inherit}.wf-page,.wf-page *{word-break:keep-all;overflow-wrap:anywhere}.wf-page{min-height:100vh;display:flex;flex-direction:column;padding:10px;position:relative}.wf-guide{position:absolute;top:10px;bottom:10px;max-width:var(--wf-max);margin:0 auto;pointer-events:none;z-index:30;background:repeating-linear-gradient(90deg,rgba(79,107,255,.09) 0,rgba(79,107,255,.09) var(--gcw),transparent var(--gcw),transparent calc(var(--gcw) + var(--ggap)));outline:1px dashed rgba(79,107,255,.35);outline-offset:-1px}body:not(.pb-editing) .wf-guide{display:none}.wf{display:grid;align-content:start}.wf-page>.wf:not(.wf--row){flex:1}.wf--row{position:relative}.wf__region{position:relative;display:flex;flex-direction:column;gap:10px;min-width:0;min-height:0;overflow:hidden;border-style:solid;border-color:transparent;transition:border-color .14s,background .14s}.wf__region.is-empty{align-items:center;justify-content:center;gap:3px;text-align:center;border-style:dashed;border-color:currentColor;opacity:.4;cursor:pointer}.wf__region.is-empty:hover{opacity:.72}.wf__region.is-filled{border-color:var(--wf-line, currentColor);cursor:pointer}.wf__region.is-sel{outline:2px solid var(--part-color);outline-offset:2px;opacity:1}.wf__region.is-hot{outline:1px dashed color-mix(in srgb,var(--part-color) 70%,transparent);outline-offset:2px}.wf__region.is-drop{outline:2px solid var(--part-color);outline-offset:2px;background-image:linear-gradient(color-mix(in srgb,var(--part-color) 12%,transparent),color-mix(in srgb,var(--part-color) 12%,transparent))}.wf__region.is-sticky{position:sticky;top:10px;align-self:start;z-index:4;background-color:var(--wf-bg, transparent)}.wf__region.has-divider{border-bottom-color:var(--wf-line)}.wf__tag{position:absolute;top:0;left:0;z-index:3;padding:1px 6px;border-bottom-right-radius:5px;background:var(--part-color);color:#fff;font-family:Cascadia Code,Consolas,monospace;font-size:10px;line-height:1.6;opacity:0;transition:opacity .12s;pointer-events:none}.wf__region:hover>.wf__tag,.wf__region.is-sel>.wf__tag{opacity:.92}.wf__region.is-empty .wf__tag{position:static;opacity:.9;background:none;color:var(--part-color);padding:0}.wf__fxtag{position:absolute;top:4px;right:8px;font-size:11px;letter-spacing:2px;color:var(--part-color);opacity:.85;pointer-events:none}body.pb-preview .wf__fxtag{display:none}[data-hide-scroll],.wf-headbar:has([data-hide-scroll]){transition:transform .28s ease}.wf-nav-hidden{transform:translateY(-130%)!important}.wf__entertag{position:absolute;left:8px;bottom:6px;z-index:3;padding:1px 8px;border-radius:999px;background:#4f46e51a;color:#6366f1;font-size:10px;line-height:1.7;font-weight:600;opacity:.85;pointer-events:none}.wf__entertag.is-off{background:#7878781f;color:inherit;opacity:.5}body.pb-preview .wf__entertag{display:none}.wf__label{font-size:15px;font-weight:700}.wf__hint{font-size:11.5px;opacity:.62}.wf-nav{display:flex;align-items:center;flex-wrap:wrap;gap:26px}.wf-nav--v{flex-direction:column;align-items:flex-start;gap:10px}.wf-nav__item{background:none;border:0;padding:3px 0;font-size:.9333em;cursor:pointer;opacity:.62;border-bottom:1.5px solid transparent}.wf-nav__item:hover{opacity:1}.wf-nav__item.is-current{opacity:1;font-weight:600;border-bottom-color:var(--wf-accent)}.wf-mode{flex:none;width:32px;height:32px;display:inline-flex;align-items:center;justify-content:center;border:1px solid var(--wf-line, currentColor);border-radius:8px;background:var(--wf-surface, transparent);color:inherit;line-height:1;cursor:pointer;opacity:.85;transition:border-color .18s,background .18s,opacity .18s}.wf-mode:hover{border-color:var(--wf-accent);opacity:1}.wf-mode__sun{display:none}.wf-page.is-dark .wf-mode__sun{display:inline}.wf-page.is-dark .wf-mode__moon{display:none}.wf-page{transition:background .25s ease,color .25s ease}.wf-bar{display:flex;align-items:center;gap:16px;width:100%;min-width:0;flex-wrap:wrap}.wf-bar>*{min-width:0}.wf-bar__logo{font-size:1.1333em;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:0 1 auto}.wf-bar--foot{font-size:.8667em;opacity:.85}.wf-foot__mail{opacity:.7}.wf-foot__time{font-variant-numeric:tabular-nums;opacity:.7}.wf-btn{display:inline-block;padding:11px 24px;background:var(--wf-accent);color:#fff;font-size:.9333em;font-weight:600;border-radius:inherit;text-decoration:none}.wf-btn--sm{padding:7px 15px;font-size:.8667em}.wf-hero{min-width:0;display:flex;flex-direction:column;gap:16px;justify-content:center;flex:1;width:100%;max-width:var(--wf-max);margin:0 auto}.wf-hero__title{margin:0;line-height:1.15;white-space:pre-line;letter-spacing:-.02em}.wf-hero__sub{margin:0;font-size:1.1333em;color:var(--wf-muted);white-space:pre-line}.wf-aside{min-width:0;display:flex;flex-direction:column;gap:10px;width:100%}.wf-aside__name{margin:0;font-size:2.2667em;line-height:1.15;letter-spacing:-.02em}.wf-aside__role{margin:0;font-size:1.0667em}.wf-aside__bio{margin:0 0 8px;font-size:.9333em;color:var(--wf-muted);white-space:pre-line}.wf-sec{min-width:0;display:flex;flex-direction:column;gap:14px;width:100%;max-width:var(--wf-max);margin:0 auto}.wf-sec__title{margin:0;font-size:1.7333em;letter-spacing:-.01em}.wf-sec__cols{display:grid;gap:22px;width:100%}.wf-sec__cols>*{min-width:0}.wf-sec__body{margin:0;font-size:.9667em;line-height:1.75;color:var(--wf-muted);white-space:pre-line}.wf-gal{min-width:0;display:flex;flex-direction:column;gap:16px;width:100%;max-width:var(--wf-max);margin:0 auto}.wf-gal__grid{display:grid;gap:16px;width:100%}.wf-gal__grid>*{min-width:0}.wf-card{display:flex;flex-direction:column;min-width:0;background:var(--wf-surface);border:1px solid var(--wf-line);border-radius:inherit;overflow:hidden}.wf-card__thumb{position:relative;display:block;width:100%;background:linear-gradient(135deg,color-mix(in srgb,var(--wf-accent) 14%,transparent),color-mix(in srgb,var(--wf-accent) 4%,transparent));border-bottom:1px solid var(--wf-line)}.wf-card__thumb em{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;font-style:normal;font-size:.8667em;color:var(--wf-muted)}.wf-card__body{display:flex;flex-direction:column;gap:5px;padding:14px 16px 16px;min-width:0}.wf-card__title{font-size:1em;font-weight:700;line-height:1.35}.wf-card__stack{font-size:.8em;color:var(--wf-accent)}.wf-card__desc{font-size:.8333em;line-height:1.65;color:var(--wf-muted)}.wf-card__link{margin-top:2px;font-size:.7667em;color:var(--wf-accent)}.wf-tags{display:flex;flex-wrap:wrap;gap:7px}.wf-tag{display:inline-flex;align-items:baseline;gap:5px;padding:4px 11px;border:1px solid var(--wf-line);border-radius:999px;font-size:.8333em}.wf-tag em{font-style:normal;font-size:.7em;color:var(--wf-muted)}.wf-marquee{width:100%;overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}.wf-marquee__track{display:flex;width:max-content;animation:wf-marquee var(--marq-t, 20s) linear infinite}.wf-marquee__set{display:flex;gap:7px;padding-right:7px}@keyframes wf-marquee{to{transform:translate(-50%)}}@media (prefers-reduced-motion: reduce){.wf-marquee__track{animation:none;flex-wrap:wrap}.wf-marquee__set[aria-hidden]{display:none}.wf-marquee{-webkit-mask-image:none;mask-image:none}}.wf-cover{position:relative;display:flex;flex-direction:column;width:100%;overflow:hidden;border-radius:inherit}.wf-cover__img,.wf-cover__empty{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;object-fit:cover;display:block}.wf-cover__empty{background:repeating-linear-gradient(45deg,var(--wf-surface, #8882) 0 10px,transparent 10px 20px),var(--wf-surface, #8881);opacity:.5}.wf-cover__veil{position:absolute;top:0;right:0;bottom:0;left:0;background:#000;pointer-events:none}.wf-cover__body{position:relative;z-index:1;display:flex;flex-direction:column;gap:8px;padding:min(40px,5vw);max-width:var(--wf-max)}.wf-cover__title{font-size:clamp(1.4em,4.4vw,2.8em);font-weight:800;line-height:1.15;letter-spacing:-.02em;color:#fff;white-space:pre-line;text-shadow:0 2px 24px rgba(0,0,0,.35)}.wf-cover__sub{font-size:1.0667em;color:#ffffffdb}.wf-cover.is-kb .wf-cover__img{animation:wf-kenburns 26s ease-in-out infinite alternate}@keyframes wf-kenburns{0%{transform:scale(1) translate(0)}to{transform:scale(1.12) translate(-1.5%,-1%)}}.wf-cover.is-zoom .wf-cover__img{animation:wf-cover-zoom linear both;animation-timeline:view();animation-range:cover 0% cover 100%;animation-duration:1ms}@keyframes wf-cover-zoom{0%{transform:scale(1)}to{transform:scale(1.18)}}@media (prefers-reduced-motion: reduce){.wf-cover.is-kb .wf-cover__img,.wf-cover.is-zoom .wf-cover__img{animation:none}}.wf-mq{width:100%;overflow:hidden;display:flex;align-items:center;border-radius:inherit}.wf-mq__track{display:flex;width:max-content;animation:wf-marquee var(--mq-t, 26s) linear infinite;animation-direction:var(--mq-dir, normal)}.wf-mq__set{display:flex;align-items:center}.wf-mq__txt{font-size:var(--mq-size, 2.6em);font-weight:800;letter-spacing:-.02em;line-height:1.1;white-space:nowrap}.wf-mq__sep{font-size:calc(var(--mq-size, 2.6em) * .62);font-style:normal;color:var(--wf-accent);padding:0 .35em}.wf-mq.is-outline .wf-mq__txt{color:transparent;-webkit-text-stroke:1.5px currentColor}.wf-mq.is-pausable:hover .wf-mq__track{animation-play-state:paused}@media (prefers-reduced-motion: reduce){.wf-mq__track{animation:none}.wf-mq__set[aria-hidden]{display:none}}.wf-cta{position:relative;display:flex;flex-direction:column;gap:12px;width:100%;max-width:var(--wf-max);margin:0 auto;justify-content:center;border-radius:inherit}.wf-cta__title{font-size:clamp(1.2em,3vw,1.9em);font-weight:700;line-height:1.25;letter-spacing:-.01em}.wf-cta__sub{font-size:1.0667em;color:var(--wf-muted)}.wf-cta__btn{margin-top:6px}.wf-cta.is-grad:before{content:"";position:absolute;inset:calc(-1*min(44px,6vw));z-index:0;border-radius:inherit;background:linear-gradient(100deg,color-mix(in srgb,var(--wf-accent) 22%,transparent),color-mix(in srgb,var(--wf-accent) 6%,transparent),color-mix(in srgb,var(--wf-accent) 22%,transparent));background-size:220% 100%;animation:wf-cta-grad 14s ease-in-out infinite alternate}.wf-cta.is-grad>*{position:relative;z-index:1}@keyframes wf-cta-grad{0%{background-position:0% 50%}to{background-position:100% 50%}}@media (prefers-reduced-motion: reduce){.wf-cta.is-grad:before{animation:none}}.wf__region.is-freeitems>:not(span,button){position:relative;height:100%;display:block}.wf__region.is-freeitems>:not(span,button)>*:not(:where(.wf-sld__r,.wf-sld__track,.wf-sld__dots,.wf-detail,.wf-cover__img,.wf-cover__empty,.wf-cover__veil,.wf-mq__track)){position:absolute;margin:0;max-width:92%}.wf__region.is-freeitems>:not(span,button)>*:not(:where(.wf-sld__r,.wf-sld__track,.wf-sld__dots,.wf-detail,.wf-cover__img,.wf-cover__empty,.wf-cover__veil,.wf-mq__track)):nth-child(1){left:var(--fi1x, auto);top:var(--fi1y, auto)}.wf__region.is-freeitems>:not(span,button)>*:not(:where(.wf-sld__r,.wf-sld__track,.wf-sld__dots,.wf-detail,.wf-cover__img,.wf-cover__empty,.wf-cover__veil,.wf-mq__track)):nth-child(2){left:var(--fi2x, auto);top:var(--fi2y, auto)}.wf__region.is-freeitems>:not(span,button)>*:not(:where(.wf-sld__r,.wf-sld__track,.wf-sld__dots,.wf-detail,.wf-cover__img,.wf-cover__empty,.wf-cover__veil,.wf-mq__track)):nth-child(3){left:var(--fi3x, auto);top:var(--fi3y, auto)}.wf__region.is-freeitems>:not(span,button)>*:not(:where(.wf-sld__r,.wf-sld__track,.wf-sld__dots,.wf-detail,.wf-cover__img,.wf-cover__empty,.wf-cover__veil,.wf-mq__track)):nth-child(4){left:var(--fi4x, auto);top:var(--fi4y, auto)}.wf__region.is-freeitems>:not(span,button)>*:not(:where(.wf-sld__r,.wf-sld__track,.wf-sld__dots,.wf-detail,.wf-cover__img,.wf-cover__empty,.wf-cover__veil,.wf-mq__track)):nth-child(5){left:var(--fi5x, auto);top:var(--fi5y, auto)}.wf__region.is-freeitems>:not(span,button)>*:not(:where(.wf-sld__r,.wf-sld__track,.wf-sld__dots,.wf-detail,.wf-cover__img,.wf-cover__empty,.wf-cover__veil,.wf-mq__track)):nth-child(6){left:var(--fi6x, auto);top:var(--fi6y, auto)}.wf__region.is-freeitems>:not(span,button)>*:not(:where(.wf-sld__r,.wf-sld__track,.wf-sld__dots,.wf-detail,.wf-cover__img,.wf-cover__empty,.wf-cover__veil,.wf-mq__track)):nth-child(7){left:var(--fi7x, auto);top:var(--fi7y, auto)}.wf__region.is-freeitems>:not(span,button)>*:not(:where(.wf-sld__r,.wf-sld__track,.wf-sld__dots,.wf-detail,.wf-cover__img,.wf-cover__empty,.wf-cover__veil,.wf-mq__track)):nth-child(8){left:var(--fi8x, auto);top:var(--fi8y, auto)}.wf__region.is-freeitems>:not(span,button)>*:not(:where(.wf-sld__r,.wf-sld__track,.wf-sld__dots,.wf-detail,.wf-cover__img,.wf-cover__empty,.wf-cover__veil,.wf-mq__track)):nth-child(9){left:var(--fi9x, auto);top:var(--fi9y, auto)}.wf__region.is-freeitems>:not(span,button)>*:not(:where(.wf-sld__r,.wf-sld__track,.wf-sld__dots,.wf-detail,.wf-cover__img,.wf-cover__empty,.wf-cover__veil,.wf-mq__track)):nth-child(10){left:var(--fi10x, auto);top:var(--fi10y, auto)}body.pb-editing .wf__region.is-freeitems>:not(span,button)>*:not(:where(.wf-sld__r,.wf-sld__track,.wf-sld__dots,.wf-detail,.wf-cover__img,.wf-cover__empty,.wf-cover__veil,.wf-mq__track)){cursor:move}body.pb-editing .wf__region.is-freeitems .wf-edit{cursor:text}.wf__resize{position:absolute;right:0;bottom:0;z-index:6;width:18px;height:18px;cursor:nwse-resize;touch-action:none;background:linear-gradient(135deg,transparent 44%,var(--part-color, currentColor) 44%);opacity:.45;transition:opacity .14s}.wf__region:hover>.wf__resize,.wf__region.is-sel>.wf__resize{opacity:1}.wf__movex{position:absolute;left:0;bottom:0;z-index:6;width:26px;height:14px;cursor:ew-resize;touch-action:none;opacity:.45;transition:opacity .14s;background:linear-gradient(to right,var(--part-color, currentColor) 3px,transparent 3px) 0 50% / 100% 2px no-repeat,linear-gradient(var(--part-color, currentColor) 0 0) 0 50% / 3px 8px no-repeat,linear-gradient(var(--part-color, currentColor) 0 0) 100% 50% / 3px 8px no-repeat}.wf__region:hover>.wf__movex,.wf__region.is-sel>.wf__movex{opacity:1}.wf-sld{position:relative;width:100%;height:var(--sld-h, 340px);overflow:hidden;border-radius:inherit}.wf-sld__r{position:absolute;width:1px;height:1px;opacity:0;pointer-events:none;margin:0}.wf-sld__track{position:absolute;top:0;right:0;bottom:0;left:0}.wf-sld__slide{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden}.wf-sld__img,.wf-sld__empty{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;object-fit:cover;display:block}.wf-sld__empty{background:repeating-linear-gradient(45deg,var(--wf-surface, #8882) 0 10px,transparent 10px 20px),var(--wf-surface, #8881);opacity:.5}.wf-sld__veil{position:absolute;top:0;right:0;bottom:0;left:0;background:#000;pointer-events:none}.wf-sld__body{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;flex-direction:column;gap:8px;padding:min(40px,5vw);z-index:2}.wf-sld__title{font-size:clamp(1.3em,3.8vw,2.4em);font-weight:800;line-height:1.15;letter-spacing:-.02em;color:#fff;text-shadow:0 2px 24px rgba(0,0,0,.35)}.wf-sld__sub{font-size:1.0667em;color:#ffffffdb}.wf-sld__btn{margin-top:8px}.wf-sld--slide .wf-sld__track{display:flex;width:100%;height:100%;transform:translate(calc(var(--i, 0) * -100%));transition:transform var(--sld-t, .6s) cubic-bezier(.4,0,.2,1)}.wf-sld--slide .wf-sld__slide{position:relative;inset:auto;flex:0 0 100%;height:100%}.wf-sld--fade .wf-sld__slide,.wf-sld--cover .wf-sld__slide,.wf-sld--zoom .wf-sld__slide{z-index:calc(var(--on, 0))}.wf-sld--fade .wf-sld__slide{opacity:var(--on, 0);transition:opacity var(--sld-t, .6s) ease}.wf-sld--cover .wf-sld__slide{transform:translate(calc((1 - var(--on, 0)) * 100%));transition:transform var(--sld-t, .6s) cubic-bezier(.4,0,.2,1)}.wf-sld--zoom .wf-sld__slide{opacity:var(--on, 0);transform:scale(calc(.94 + .06 * var(--on, 0)));transition:opacity var(--sld-t, .6s) ease,transform var(--sld-t, .6s) ease}.wf-sld--scroll .wf-sld__track{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none}.wf-sld--scroll .wf-sld__track::-webkit-scrollbar{display:none}.wf-sld--scroll .wf-sld__slide{position:relative;inset:auto;flex:0 0 100%;height:100%;scroll-snap-align:start}.wf-sld__dots{position:absolute;left:0;right:0;bottom:12px;z-index:3;display:flex;justify-content:center;gap:8px}.wf-sld__dots>label{width:9px;height:9px;border-radius:999px;background:#ffffff73;cursor:pointer;transition:background .2s,width .2s}.wf-sld__dots>label:hover{background:#ffffffbf}.wf-sld__dots>label{background:rgba(255,255,255,calc(.4 + .6 * var(--on, 0)));width:calc(9px + 13px * var(--on, 0))}.wf-sld__nav{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:flex;align-items:center;justify-content:space-between;padding:0 10px;pointer-events:none}.wf-sld__arrow{pointer-events:auto;width:34px;height:34px;display:flex;align-items:center;justify-content:center;border-radius:999px;background:#00000052;color:#fff;font-size:20px;line-height:1;cursor:pointer;opacity:0;transition:opacity .2s,background .2s}.wf-sld:hover .wf-sld__arrow{opacity:1}.wf-sld__arrow:hover{background:#0000008c}.wf-sld__r:focus-visible~.wf-sld__track .wf-sld__arrow{opacity:1}.wf-sld.no-arrows .wf-sld__nav{display:none}.wf-sld.is-kb .wf-sld__img{transform:scale(calc(1 + .08 * var(--on, 0)));transition:transform 8s ease-out}@media (prefers-reduced-motion: reduce){.wf-sld__slide,.wf-sld--slide .wf-sld__track,.wf-sld.is-kb .wf-sld__img{transition:none!important}}.wf-sld__r:nth-of-type(1):checked~.wf-sld__track{--i: 0}.wf-sld__r:nth-of-type(1):checked~.wf-sld__track>.wf-sld__slide:nth-child(1){--on: 1}.wf-sld__r:nth-of-type(1):checked~.wf-sld__dots>label:nth-child(1){--on: 1}.wf-sld__r:nth-of-type(2):checked~.wf-sld__track{--i: 1}.wf-sld__r:nth-of-type(2):checked~.wf-sld__track>.wf-sld__slide:nth-child(2){--on: 1}.wf-sld__r:nth-of-type(2):checked~.wf-sld__dots>label:nth-child(2){--on: 1}.wf-sld__r:nth-of-type(3):checked~.wf-sld__track{--i: 2}.wf-sld__r:nth-of-type(3):checked~.wf-sld__track>.wf-sld__slide:nth-child(3){--on: 1}.wf-sld__r:nth-of-type(3):checked~.wf-sld__dots>label:nth-child(3){--on: 1}.wf-sld__r:nth-of-type(4):checked~.wf-sld__track{--i: 3}.wf-sld__r:nth-of-type(4):checked~.wf-sld__track>.wf-sld__slide:nth-child(4){--on: 1}.wf-sld__r:nth-of-type(4):checked~.wf-sld__dots>label:nth-child(4){--on: 1}.wf-sld__r:nth-of-type(5):checked~.wf-sld__track{--i: 4}.wf-sld__r:nth-of-type(5):checked~.wf-sld__track>.wf-sld__slide:nth-child(5){--on: 1}.wf-sld__r:nth-of-type(5):checked~.wf-sld__dots>label:nth-child(5){--on: 1}.wf-sld__r:nth-of-type(6):checked~.wf-sld__track{--i: 5}.wf-sld__r:nth-of-type(6):checked~.wf-sld__track>.wf-sld__slide:nth-child(6){--on: 1}.wf-sld__r:nth-of-type(6):checked~.wf-sld__dots>label:nth-child(6){--on: 1}.wf-sld__r:nth-of-type(7):checked~.wf-sld__track{--i: 6}.wf-sld__r:nth-of-type(7):checked~.wf-sld__track>.wf-sld__slide:nth-child(7){--on: 1}.wf-sld__r:nth-of-type(7):checked~.wf-sld__dots>label:nth-child(7){--on: 1}.wf-sld__r:nth-of-type(8):checked~.wf-sld__track{--i: 7}.wf-sld__r:nth-of-type(8):checked~.wf-sld__track>.wf-sld__slide:nth-child(8){--on: 1}.wf-sld__r:nth-of-type(8):checked~.wf-sld__dots>label:nth-child(8){--on: 1}.wf-sld__r:nth-of-type(9):checked~.wf-sld__track{--i: 8}.wf-sld__r:nth-of-type(9):checked~.wf-sld__track>.wf-sld__slide:nth-child(9){--on: 1}.wf-sld__r:nth-of-type(9):checked~.wf-sld__dots>label:nth-child(9){--on: 1}.wf-sld__r:nth-of-type(10):checked~.wf-sld__track{--i: 9}.wf-sld__r:nth-of-type(10):checked~.wf-sld__track>.wf-sld__slide:nth-child(10){--on: 1}.wf-sld__r:nth-of-type(10):checked~.wf-sld__dots>label:nth-child(10){--on: 1}.wf-sld__r:nth-of-type(11):checked~.wf-sld__track{--i: 10}.wf-sld__r:nth-of-type(11):checked~.wf-sld__track>.wf-sld__slide:nth-child(11){--on: 1}.wf-sld__r:nth-of-type(11):checked~.wf-sld__dots>label:nth-child(11){--on: 1}.wf-sld__r:nth-of-type(12):checked~.wf-sld__track{--i: 11}.wf-sld__r:nth-of-type(12):checked~.wf-sld__track>.wf-sld__slide:nth-child(12){--on: 1}.wf-sld__r:nth-of-type(12):checked~.wf-sld__dots>label:nth-child(12){--on: 1}@property --wf-n{syntax: "<integer>"; inherits: false; initial-value: 0;}.wf-stats{display:flex;flex-wrap:wrap;gap:24px 44px;width:100%}.wf-stat{display:flex;flex-direction:column;gap:4px}.wf-stat__num{display:flex;align-items:baseline;gap:2px;font-size:2.4em;font-weight:700;line-height:1.1;color:var(--wf-accent)}.wf-stat__label{font-size:.8333em;color:var(--wf-muted)}.wf-stat__count{font-style:normal;--wf-n: var(--wf-n-to, 0);counter-reset:wfnum calc(var(--wf-n));animation:wf-count linear both;animation-duration:1ms;animation-timeline:view();animation-range:entry 0% entry 90%}.wf-stat__count:after{content:counter(wfnum)}@keyframes wf-count{0%{--wf-n: 0}}.wf-stat__plain{display:none}@supports not (counter-reset: n calc(var(--x, 0))){.wf-stat__count{display:none}.wf-stat__plain{display:inline}}@media (prefers-reduced-motion: reduce){.wf-stat__count{animation:none}}.wf-sr{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap}.wf-time{list-style:none;margin:0;padding:0 0 0 14px;width:100%}.wf-time__row{position:relative;display:flex;flex-wrap:wrap;align-items:baseline;gap:10px;padding:8px 0;border-bottom:1px solid var(--wf-line)}.wf-time__row:before{content:"";position:absolute;left:-14px;top:15px;width:6px;height:6px;border-radius:50%;background:var(--wf-accent)}.wf-time__row b{font-size:.9333em}.wf-time__row span{font-size:.8em;color:var(--wf-muted)}.wf-tl{width:100%;min-width:0}.wf-tl__eyebrow{display:block;font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:.78em;letter-spacing:.08em;color:var(--wf-accent);margin-bottom:8px}.wf-tl__title{margin:0 0 28px;font-size:1.7em;letter-spacing:-.01em}.wf-tl__list{list-style:none;margin:0;padding:0}.wf-tl__item{position:relative;padding:0 0 30px 32px}.wf-tl__item:last-child{padding-bottom:0}.wf-tl__item:before{content:"";position:absolute;left:6px;top:22px;bottom:4px;width:1px;background:var(--wf-line)}.wf-tl__item:last-child:before{display:none}.wf-tl__item:after{content:"";position:absolute;left:0;top:3px;width:9px;height:9px;border-radius:50%;border:2px solid var(--wf-accent)}.wf-tl__label{display:block;font-size:.78em;letter-spacing:.14em;color:var(--wf-muted)}.wf-tl__head{display:block;margin:7px 0 5px;font-size:.9333em}.wf-tl__desc{margin:0;font-size:.8667em;color:var(--wf-muted);line-height:1.65}.wf-main{display:grid;width:100%;min-width:0;flex:1}.wf-main>*{min-width:0}.wf-main__slot{display:grid;place-items:center;border:1px dashed var(--wf-line);border-radius:inherit;font-size:.8em;color:var(--wf-muted);min-height:140px}.wf-3d{position:relative;width:100%;display:grid;place-items:center;min-height:160px}.wf__region:has(>.wf-3d.is-fill){position:relative}.wf-3d.is-fill{position:absolute;top:0;right:0;bottom:0;left:0;height:auto!important;aspect-ratio:auto;border-radius:inherit;overflow:hidden}.wf-3d__empty{display:flex;flex-direction:column;gap:10px;max-width:460px;margin:auto;padding:18px 20px;font-size:.8em;line-height:1.6;color:var(--wf-muted);border:1px dashed var(--wf-line);border-radius:10px;text-align:left}.wf-3d__empty>b{font-size:1.15em;color:inherit;opacity:.95}.wf-3d__empty code{padding:1px 5px;background:color-mix(in srgb,currentColor 12%,transparent);border-radius:4px;font-family:Cascadia Code,Consolas,monospace;font-size:.92em}.wf-3d__tab-radio{display:none}.wf-3d__tabs{display:flex;gap:6px}.wf-3d__tabs label{padding:5px 12px;border:1px solid var(--wf-line);border-radius:999px;font-weight:600;cursor:pointer;-webkit-user-select:none;user-select:none}.wf-3d__tabs label:hover{border-color:var(--wf-accent)}.wf-3d__pane{display:none;flex-direction:column;gap:10px}.wf-3d__tab-radio--glb:checked~.wf-3d__pane--glb,.wf-3d__tab-radio--env:checked~.wf-3d__pane--env{display:flex}.wf-3d__tab-radio--glb:checked~.wf-3d__tabs label[for$=-glb],.wf-3d__tab-radio--env:checked~.wf-3d__tabs label[for$=-env]{color:var(--wf-bg, #fff);background:var(--wf-accent);border-color:var(--wf-accent)}.wf-3d__links{display:flex;flex-direction:column;gap:5px}.wf-3d__links a{display:flex;align-items:baseline;gap:7px;padding:7px 11px;color:var(--wf-accent);border:1px solid var(--wf-line);border-radius:7px;font-weight:600}.wf-3d__links a:hover{border-color:var(--wf-accent)}.wf-3d__links em{font-style:normal;font-weight:400;font-size:.88em;color:var(--wf-muted)}.wf-3d__warn{opacity:.78}.wf-card.is-flip{background:none;border:0;overflow:visible}.wf-card.is-flip .fx-flip-card__face{display:flex;flex-direction:column;gap:6px;justify-content:center;padding:18px;background:var(--wf-surface);border:1px solid var(--wf-line)}.wf-badge{align-self:flex-start;padding:2px 8px;border:1px solid var(--part-color);border-radius:999px;font-size:.6667em;color:var(--part-color)}.wf__regiondel{position:absolute;top:5px;right:5px;z-index:6;width:20px;height:20px;padding:0;display:grid;place-items:center;border:1px solid var(--wf-line, currentColor);border-radius:2px;background:var(--wf-bg, #fff);color:var(--wf-muted, currentColor);font-size:.7333em;line-height:1;opacity:0;cursor:pointer;transition:opacity .12s}.wf__region.is-empty:hover>.wf__regiondel{opacity:.75}.wf__regiondel:hover{opacity:1!important;border-color:currentColor}body.pb-preview .wf__regiondel{display:none}.wf__edge{position:absolute;z-index:7;width:20px;height:20px;padding:0;display:grid;place-items:center;border:1px solid var(--wf-line, #000);border-radius:999px;background:#fff;color:#000;font-size:.8em;line-height:1;opacity:0;cursor:pointer;transition:opacity .12s}.wf__edge.is-t{top:3px;left:50%;transform:translate(-50%)}.wf__edge.is-b{bottom:3px;left:50%;transform:translate(-50%)}.wf__edge.is-l{left:3px;top:50%;transform:translateY(-50%)}.wf__edge.is-r{right:3px;top:50%;transform:translateY(-50%)}.wf__region:hover>.wf__edge{opacity:.85}.wf__edge:hover{opacity:1!important;border-color:var(--wf-accent, #000)}body.pb-preview .wf__edge{display:none}.wf__rowdel{position:absolute;top:6px;right:6px;width:22px;height:22px;padding:0;display:grid;place-items:center;border:1px solid currentColor;border-radius:6px;background:transparent;font-size:.7333em;line-height:1;opacity:0;cursor:pointer}.wf--row:hover .wf__rowdel{opacity:.55}.wf__rowdel:hover{opacity:1!important}.wf__add{display:flex;align-items:center;gap:7px;margin-top:10px;padding:12px;border:1.5px dashed currentColor;opacity:.4}.wf__add:hover{opacity:.8}.wf__add__label{font-size:12px;margin-right:auto}.wf__add__btn{padding:5px 12px;border:1px solid currentColor;border-radius:999px;background:transparent;font-size:.8em;cursor:pointer}body.pb-preview .wf__add,body.pb-preview .wf__rowdel,body.pb-preview .wf__tag,body.pb-preview .wf__region.is-empty{display:none}body.pb-preview .wf__region.is-filled{border-color:transparent}body.pb-preview .wf__region.has-divider{border-bottom-color:var(--wf-line)}.wf-edit{outline:none;cursor:text;border-radius:3px}.wf-edit:hover{box-shadow:0 0 0 1px color-mix(in srgb,var(--wf-accent) 45%,transparent)}.wf-edit:focus{box-shadow:0 0 0 2px var(--wf-accent);background:color-mix(in srgb,var(--wf-accent) 8%,transparent)}.wf-edit:empty:before{content:attr(data-ph);opacity:.45}body.pb-preview .wf-edit:hover,body.pb-preview .wf-edit:focus{box-shadow:none;background:none}.wf__region{font-size:var(--wf-fs, 15px)}.wf-aside__photo{display:block;flex:none;border:1px solid var(--wf-line);border-radius:8px}.wf-aside__photo.is-round{border-radius:50%}.wf-card__img{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wf-gal.is-gray .wf-card__img{filter:saturate(0%);transition:filter .45s ease,transform .45s ease}.wf-gal.is-gray .wf-card:hover .wf-card__img,.wf-gal.is-gray .wf-card:focus-visible .wf-card__img{filter:saturate(100%);transform:scale(1.03)}.wf-links{min-width:0;display:flex;flex-direction:column;gap:14px;width:100%;max-width:var(--wf-max);margin:0 auto}.wf-links__row{display:flex;flex-wrap:wrap;gap:10px}.wf-link{display:inline-flex;align-items:baseline;gap:7px;color:inherit;text-decoration:none}.wf-link__url{font-style:normal;font-size:.8em;opacity:.6}.wf-links--buttons .wf-link{padding:9px 16px;border:1px solid var(--wf-line);border-radius:999px}.wf-links--buttons .wf-link:hover{border-color:var(--wf-accent);color:var(--wf-accent)}.wf-links--text .wf-link{text-decoration:underline;text-underline-offset:3px}.wf-links--list .wf-links__row{flex-direction:column;gap:8px}.wf-links--list .wf-link{justify-content:space-between;width:100%;padding:10px 2px;border-bottom:1px solid var(--wf-line)}.wf-btn__file{font-style:normal;font-size:.8em;opacity:.72;margin-left:7px}.wf-card--empty{display:grid;place-items:center;min-height:120px;background:none;border-style:dashed;opacity:.5}.wf-card__slot{font-size:22px;opacity:.6}body.pb-preview .wf-card--empty{display:none}html{scroll-behavior:smooth}.wf__region{scroll-margin-top:76px}.wf-detail{display:none}.wf-detail:target{display:grid;place-items:center;position:fixed;top:0;right:0;bottom:0;left:0;z-index:40;padding:24px}.wf-detail.is-open{display:grid;place-items:center;position:fixed;top:0;right:0;bottom:0;left:0;z-index:40;padding:24px}.wf-detail__scrim{position:absolute;top:0;right:0;bottom:0;left:0;background:#0000008c;cursor:pointer}.wf-detail__box{position:relative;width:min(680px,100%);max-height:88vh;display:flex;flex-direction:column;gap:10px;padding:24px;overflow-y:auto;background:var(--wf-surface);border:1px solid var(--wf-line);border-radius:14px;box-shadow:0 24px 64px #0000004d}.wf-detail__close{position:absolute;top:12px;right:14px;width:28px;height:28px;display:grid;place-items:center;font-size:.9em;line-height:1;color:inherit;text-decoration:none;border:1px solid var(--wf-line);border-radius:50%;cursor:pointer}.wf-detail__img{display:block;width:100%;max-height:38vh;object-fit:cover;border-radius:9px}.wf-detail__title{font-size:1.5em;line-height:1.25}.wf-detail__body{margin:0;font-size:.95em;line-height:1.75;color:var(--wf-muted);white-space:pre-line}.wf-card.has-detail{cursor:pointer}.wf-card.has-detail:hover{border-color:var(--wf-accent)}.wf-contact{min-width:0;display:flex;flex-direction:column;gap:12px;width:100%;max-width:var(--wf-max);margin:0 auto}.wf-contact__mail{color:var(--wf-accent);text-decoration:none;border-bottom:1px solid color-mix(in srgb,var(--wf-accent) 45%,transparent);align-self:inherit}.wf-contact__mail.is-big{font-size:2em;line-height:1.2;letter-spacing:-.02em;border-bottom-width:2px}.wf-contact__meta{font-size:.85em;color:var(--wf-muted)}.wf-contact__meta a{color:inherit;text-decoration:none}.wf-contact__meta i{font-style:normal;opacity:.5}@media (max-width: 1024px){.wf-gal__grid,.wf-sec__cols,.wf-main{grid-template-columns:repeat(2,minmax(0,1fr))!important}}@media (max-width: 760px){.wf,.wf--row{display:flex!important;flex-direction:column}.wf-gal__grid,.wf-sec__cols,.wf-main{grid-template-columns:1fr!important}.wf__region{align-self:stretch!important;justify-self:stretch!important;width:auto!important}.wf__region.is-sticky{position:static!important}.wf-bar{flex-wrap:wrap;gap:10px}.wf-nav{flex-wrap:wrap}.wf-aside{align-items:flex-start!important;text-align:left!important}.wf-detail__box{padding:18px}.wf-links--list .wf-link{flex-direction:column;align-items:flex-start;gap:2px}}@media (max-width: 460px){.wf-links--buttons .wf-link{padding:8px 13px}.wf-contact__mail.is-big{font-size:1.35em}}.wf-bg{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;pointer-events:none}.wf-bg--fixed{position:fixed}.wf-page:has(>.wf-bg),.wf-page:has(>.wf-bgshift){position:relative}.wf-page:has(>.wf-bgshift)>.wf,.wf-page:has(>.wf-bgshift)>.wf--row,.wf-page:has(>.wf-bgshift)>.wf__add{position:relative;z-index:1}.wf-bgshift{position:fixed;top:0;right:0;bottom:0;left:0;z-index:0;opacity:0;pointer-events:none;animation:wf-bgshift-fade linear both;animation-duration:1ms;animation-range:cover 0% cover 100%}@keyframes wf-bgshift-fade{0%{opacity:0}28%{opacity:1}72%{opacity:1}to{opacity:0}}.wf-page:has(>.wf-bg)>.wf,.wf-page:has(>.wf-bg)>.wf--row{position:relative;z-index:1}.wf-page:has(>.wf-bg)>.wf__add{position:relative;z-index:1}.wf-bg__media{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;object-fit:cover;display:block}.wf-bg--tile .wf-bg__media{width:auto;height:auto;object-fit:none;display:none}.wf-bg--tile{background-repeat:repeat;background-size:220px auto}.wf-bg__veil{position:absolute;top:0;right:0;bottom:0;left:0;display:block}.wf-bg.has-gradient .wf-bg__veil{background-image:linear-gradient(to bottom,transparent 30%,rgba(0,0,0,.75))}@keyframes wf-bg-zoom{0%{transform:scale(1)}to{transform:scale(1.03)}}.wf-bg--zoom .wf-bg__media{animation:wf-bg-zoom 30s ease-in-out infinite alternate}@media (prefers-reduced-motion: reduce){.wf-bg--zoom .wf-bg__media{animation:none}}.wf-tfx--chars .wf-tfx__ch{display:inline-block;position:relative;opacity:0;animation:wf-tfx-type 1ms steps(1,end) forwards;animation-delay:calc(var(--tfx-delay, 0ms) + var(--i) * var(--tfx-step, 40ms))}@keyframes wf-tfx-type{to{opacity:1}}.wf-tfx--chars .wf-tfx__ch:after{content:"";position:absolute;right:-.14em;top:6%;bottom:4%;width:.07em;min-width:2px;background:currentColor;opacity:0;animation:wf-tfx-caret var(--tfx-step, 40ms) steps(1,end) forwards;animation-delay:inherit}.wf-tfx--chars .wf-tfx__ch:last-child:after{animation:wf-tfx-caret-end .8s steps(1,end) 3 forwards;animation-delay:inherit}@keyframes wf-tfx-caret{0%{opacity:1}to{opacity:0}}@keyframes wf-tfx-caret-end{0%,49%{opacity:1}50%,to{opacity:0}}.wf-tfx--up :is(.wf-hero__title,.wf-sec__title,.wf-aside__name,.wf-card__title,.wf-cover__title,.wf-cta__title),.wf-tfx--up.wf-tfx-on--all :is(.wf-hero__sub,.wf-sec__body,.wf-aside__bio){animation:wf-tfx-up .6s cubic-bezier(.2,.7,.2,1) both;animation-delay:var(--tfx-delay, 0ms)}@keyframes wf-tfx-up{0%{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}.wf-tfx--blur :is(.wf-hero__title,.wf-sec__title,.wf-aside__name,.wf-card__title,.wf-cover__title,.wf-cta__title),.wf-tfx--blur.wf-tfx-on--all :is(.wf-hero__sub,.wf-sec__body,.wf-aside__bio){animation:wf-tfx-blur .8s ease-out both;animation-delay:var(--tfx-delay, 0ms)}@keyframes wf-tfx-blur{0%{opacity:0;filter:blur(12px)}to{opacity:1;filter:none}}.wf-tfx--spread :is(.wf-hero__title,.wf-sec__title,.wf-aside__name,.wf-cover__title,.wf-cta__title){animation:wf-tfx-spread .9s cubic-bezier(.2,.7,.2,1) both;animation-delay:var(--tfx-delay, 0ms)}@keyframes wf-tfx-spread{0%{opacity:0;letter-spacing:-.14em}to{opacity:1;letter-spacing:inherit}}.wf-tfx--underline :is(.wf-hero__title,.wf-sec__title,.wf-aside__name,.wf-cover__title,.wf-cta__title){position:relative;padding-bottom:.24em}.wf-tfx--underline :is(.wf-hero__title,.wf-sec__title,.wf-aside__name,.wf-cover__title,.wf-cta__title):after{content:"";position:absolute;left:0;bottom:0;width:100%;height:2px;background:var(--wf-accent);transform-origin:left;animation:wf-tfx-line .7s cubic-bezier(.2,.7,.2,1) both;animation-delay:var(--tfx-delay, 0ms)}@keyframes wf-tfx-line{0%{transform:scaleX(0)}to{transform:scaleX(1)}}.wf-tfx--glitch :is(.wf-hero__title,.wf-sec__title,.wf-aside__name,.wf-cover__title,.wf-cta__title),.wf-tfx--glitch.wf-tfx-on--all :is(.wf-hero__sub,.wf-sec__body){animation:wf-tfx-glitch 3.2s steps(1) infinite;animation-delay:var(--tfx-delay, 0ms)}@keyframes wf-tfx-glitch{0%,88%,to{text-shadow:none}89%{text-shadow:2px 0 rgba(34,211,238,.85),-2px 0 rgba(244,114,182,.85)}91%{text-shadow:-3px 0 rgba(34,211,238,.85),3px 1px rgba(244,114,182,.85)}93%{text-shadow:2px -1px rgba(34,211,238,.85),-2px 1px rgba(244,114,182,.85)}95%{text-shadow:-1px 0 rgba(34,211,238,.85),1px 0 rgba(244,114,182,.85)}97%{text-shadow:none}}@media (prefers-reduced-motion: reduce){.wf-tfx--glitch :is(.wf-hero__title,.wf-sec__title,.wf-aside__name,.wf-cover__title,.wf-cta__title),.wf-tfx--glitch.wf-tfx-on--all :is(.wf-hero__sub,.wf-sec__body){animation:none}}.wf-tfx--gradient :is(.wf-hero__title,.wf-sec__title,.wf-aside__name,.wf-cover__title,.wf-cta__title){background-image:linear-gradient(100deg,var(--wf-accent),color-mix(in srgb,var(--wf-accent) 35%,var(--wf-text, currentColor)));-webkit-background-clip:text;background-clip:text;color:transparent}.wf-tfx--fill :is(.wf-hero__title,.wf-sec__title,.wf-aside__name,.wf-cover__title,.wf-cta__title),.wf-tfx--fill.wf-tfx-on--all :is(.wf-hero__sub,.wf-sec__body,.wf-aside__bio){background-image:linear-gradient(to right,var(--wf-text, #1c1917) 50%,color-mix(in srgb,var(--wf-text, #1c1917) 24%,transparent) 50%);background-size:200% 100%;background-position:0% 0;-webkit-background-clip:text;background-clip:text;color:transparent;animation:wf-tfx-fill linear both;animation-duration:1ms;animation-timeline:view();animation-range:entry 10% cover 55%}@keyframes wf-tfx-fill{0%{background-position:100% 0}}body.pb-editing .wf-tfx--fill :is(.wf-hero__title,.wf-sec__title,.wf-aside__name,.wf-hero__sub,.wf-sec__body,.wf-aside__bio){caret-color:var(--wf-text, #1c1917)}@media (prefers-reduced-motion: reduce){.wf-tfx .wf-tfx__ch,.wf-tfx :is(.wf-hero__title,.wf-sec__title,.wf-aside__name,.wf-card__title,.wf-cover__title,.wf-cta__title,.wf-hero__sub,.wf-sec__body,.wf-aside__bio){animation:none!important;opacity:1!important;filter:none!important}.wf-tfx--underline :is(.wf-hero__title,.wf-sec__title,.wf-aside__name,.wf-cover__title,.wf-cta__title):after{animation:none!important;transform:none}.wf-tfx--chars .wf-tfx__ch:after{animation:none!important;opacity:0!important}}.wf-progress{position:fixed;top:0;left:0;width:100%;height:3px;z-index:80;pointer-events:none;background:var(--wf-accent);transform-origin:0 50%;transform:scaleX(0);animation:wf-progress linear both;animation-duration:1ms;animation-timeline:scroll()}@keyframes wf-progress{to{transform:scaleX(1)}}.wf-grain{position:fixed;top:0;right:0;bottom:0;left:0;z-index:0;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23g)'/%3E%3C/svg%3E")}.wf-bg--sfx-zoom .wf-bg__media,.wf-bg--sfx-drift .wf-bg__media,.wf-bg--sfx-blur .wf-bg__media,.wf-bg--sfx-dim .wf-bg__veil{animation-timeline:scroll();animation-timing-function:linear;animation-fill-mode:both;animation-duration:1ms}.wf-bg--sfx-zoom .wf-bg__media{animation-name:wf-bgs-zoom}@keyframes wf-bgs-zoom{0%{transform:scale(1.04)}to{transform:scale(1.28)}}.wf-bg--sfx-drift .wf-bg__media{animation-name:wf-bgs-drift}@keyframes wf-bgs-drift{0%{transform:scale(1.16) translateY(-5%)}to{transform:scale(1.16) translateY(5%)}}.wf-bg--sfx-blur .wf-bg__media{animation-name:wf-bgs-blur}@keyframes wf-bgs-blur{0%{filter:blur(0);transform:scale(1.06)}to{filter:blur(11px);transform:scale(1.12)}}.wf-bg--sfx-dim .wf-bg__veil{animation-name:wf-bgs-dim}@keyframes wf-bgs-dim{0%{opacity:.35}to{opacity:1}}@media (prefers-reduced-motion: reduce){.wf-bg--sfx-zoom .wf-bg__media,.wf-bg--sfx-drift .wf-bg__media,.wf-bg--sfx-blur .wf-bg__media,.wf-bg--sfx-dim .wf-bg__veil{animation:none!important}}.wf-page a:not(.wf-btn){color:inherit;text-decoration:none}.wf-page a:visited{color:inherit}.wf-page{scrollbar-width:none}.wf-page::-webkit-scrollbar{display:none}html,body{overflow-x:clip;scrollbar-width:none;-ms-overflow-style:none}html::-webkit-scrollbar,body::-webkit-scrollbar{display:none}.wf-down{position:fixed;right:18px;bottom:18px;z-index:30;width:42px;height:42px;display:grid;place-items:center;color:var(--wf-text, currentColor);background:color-mix(in srgb,var(--wf-surface) 82%,transparent);border:1px solid var(--wf-line);border-radius:50%;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);text-decoration:none;animation:wf-down-bob 1.9s ease-in-out infinite}.wf-down:hover{border-color:var(--wf-accent);color:var(--wf-accent)}.wf-down svg{display:block}@keyframes wf-down-bob{0%,to{transform:translateY(0)}50%{transform:translateY(5px)}}@media (prefers-reduced-motion: reduce){.wf-down{animation:none}}body.pb-editing .wf-down{display:none}@keyframes wf-down-away{0%{opacity:1;visibility:visible}70%{opacity:0;visibility:visible}71%,to{opacity:0;visibility:hidden}}@supports (animation-timeline: scroll()){.wf-down{animation:wf-down-bob 1.9s ease-in-out infinite,wf-down-away linear both;animation-timeline:auto,scroll();animation-range:normal,0 220px}@media (prefers-reduced-motion: reduce){.wf-down{animation:wf-down-away linear both;animation-timeline:scroll();animation-range:0 220px}}}.wf-intro{position:fixed;top:0;right:0;bottom:0;left:0;z-index:120;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;background:var(--wf-bg, #101014);pointer-events:none;animation:wf-intro-out .6s cubic-bezier(.7,0,.3,1) 1.9s both}.wf-intro__name{font-size:clamp(20px,4vw,44px);font-weight:700;letter-spacing:.04em;animation:wf-intro-name .7s ease both}.wf-intro__bar{position:relative;overflow:hidden;width:min(260px,60vw);height:2px;background:color-mix(in srgb,var(--wf-text, currentColor) 16%,transparent)}.wf-intro__bar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;transform-origin:left;background:var(--wf-accent, currentColor);animation:wf-intro-fill 1.55s cubic-bezier(.2,.7,.2,1) .15s both}@keyframes wf-intro-name{0%{opacity:0;transform:translateY(14px)}to{opacity:1}}@keyframes wf-intro-fill{0%{transform:scaleX(0)}to{transform:scaleX(1)}}@keyframes wf-intro-out{to{transform:translateY(-101%);visibility:hidden}}@media (prefers-reduced-motion: reduce){.wf-intro{display:none}}.wf-enter .wf__region[data-enter]{animation-timeline:view();animation-range:entry var(--enter-at, 2%) cover calc(30% + var(--enter-at, 2%));animation-timing-function:cubic-bezier(.2,.7,.2,1);animation-fill-mode:both;animation-duration:1ms}.wf-enter--sides .wf__region[data-enter=left]{animation-name:wf-in-left}.wf-enter--sides .wf__region[data-enter=right]{animation-name:wf-in-right}.wf-enter--sides .wf__region[data-enter=up],.wf-enter--up .wf__region[data-enter]{animation-name:wf-in-up}.wf-enter--zoom .wf__region[data-enter]{animation-name:wf-in-zoom}@keyframes wf-in-left{0%{opacity:0;transform:translate(-14%)}to{opacity:1;transform:none}}@keyframes wf-in-right{0%{opacity:0;transform:translate(14%)}to{opacity:1;transform:none}}@keyframes wf-in-up{0%{opacity:0;transform:translateY(34px)}to{opacity:1;transform:none}}@keyframes wf-in-zoom{0%{opacity:0;transform:scale(.94)}to{opacity:1;transform:none}}body.pb-editing .wf-enter .wf__region[data-enter]{animation-range:entry 0% cover 18%}body.pb-editing .wf-enter .wf__region[data-enter]:focus-within{animation:none!important}@media (prefers-reduced-motion: reduce){.wf-enter .wf__region[data-enter]{animation:none!important}}.wf__region.is-free{position:fixed;z-index:6;border:0!important;background:none!important;padding:0!important;overflow:visible;pointer-events:none;translate:-50% -50%}body.pb-editing .wf__region.is-free{pointer-events:auto;cursor:grab}body.pb-editing .wf__region.is-free:active{cursor:grabbing}@media (max-width: 760px){.wf__region.is-free{width:clamp(88px,30vw,32vw)!important;left:78%!important;top:82%!important}}@media (max-height: 520px){.wf-3d{height:min(56vh,260px)!important}}`,Sc=":root{--fx-ease: cubic-bezier(.22, 1, .36, 1);--fx-ease-out: cubic-bezier(.16, 1, .3, 1);--fx-duration: .42s;--fx-duration-fast: .22s;--fx-radius: 16px;--fx-surface: #ffffff;--fx-surface-2: #f4f5f7;--fx-border: rgba(0, 0, 0, .08);--fx-text: #16181d;--fx-text-dim: #6b7280;--fx-accent: #5b5bd6;--fx-glare: rgba(255, 255, 255, .55);--fx-shadow: 0 10px 30px -12px rgba(16, 18, 29, .28)}@media (prefers-color-scheme: dark){:root{--fx-surface: #16181d;--fx-surface-2: #1e2027;--fx-border: rgba(255, 255, 255, .1);--fx-text: #f2f3f5;--fx-text-dim: #9ca3af;--fx-glare: rgba(255, 255, 255, .22);--fx-shadow: 0 12px 34px -14px rgba(0, 0, 0, .7)}}:root[data-theme=dark]{--fx-surface: #16181d;--fx-surface-2: #1e2027;--fx-border: rgba(255, 255, 255, .1);--fx-text: #f2f3f5;--fx-text-dim: #9ca3af;--fx-glare: rgba(255, 255, 255, .22);--fx-shadow: 0 12px 34px -14px rgba(0, 0, 0, .7)}:root[data-theme=light]{--fx-surface: #ffffff;--fx-surface-2: #f4f5f7;--fx-border: rgba(0, 0, 0, .08);--fx-text: #16181d;--fx-text-dim: #6b7280;--fx-glare: rgba(255, 255, 255, .55);--fx-shadow: 0 10px 30px -12px rgba(16, 18, 29, .28)}.fx{-webkit-font-smoothing:antialiased}.fx-inert{transform:none!important}@media (prefers-reduced-motion: reduce){.fx,.fx *{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}}.fx :focus-visible,.fx:focus-visible{outline:2px solid var(--fx-accent);outline-offset:3px;border-radius:6px}.fx-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}",Kg='.fx-tilt-card{position:relative;transform-style:preserve-3d;transform:perspective(var(--fx-tilt-perspective, 900px)) rotateX(var(--fx-tilt-rx, 0deg)) rotateY(var(--fx-tilt-ry, 0deg)) scale3d(var(--fx-tilt-scale, 1),var(--fx-tilt-scale, 1),1);backface-visibility:hidden}.fx-tilt-card[data-fx-tilting="1"]{will-change:transform}.fx-tilt-card [data-fx-depth]{transform:translate3d(calc(var(--fx-tilt-nx, 0) * var(--fx-depth, 0) * -.22px),calc(var(--fx-tilt-ny, 0) * var(--fx-depth, 0) * -.22px),calc(var(--fx-depth, 0) * 1px));transition:transform 80ms linear}.fx-tilt-card__glare{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;overflow:hidden;background:radial-gradient(circle at var(--fx-tilt-px, 50%) var(--fx-tilt-py, 50%),var(--fx-glare) 0%,transparent 60%);opacity:var(--fx-tilt-glare-o, 0);transform:translateZ(var(--fx-tilt-glare-z, 0px)) scale(var(--fx-tilt-glare-scale, 1))}.fx-inert .fx-tilt-card__glare,.fx-tilt-card.fx-inert .fx-tilt-card__glare{display:none}.fx-tilt-card.fx-inert [data-fx-depth]{transform:none}.fx-card{display:block;border-radius:var(--fx-radius, 16px);background:var(--fx-surface);border:1px solid var(--fx-border);box-shadow:var(--fx-shadow);color:var(--fx-text);padding:20px;text-decoration:none;transition:box-shadow var(--fx-duration-fast) var(--fx-ease)}.fx-card[data-fx-tilting="1"]{box-shadow:0 26px 50px -20px #10121d6b}.fx-card__media{display:block;width:100%;aspect-ratio:16 / 10;object-fit:cover;border-radius:calc(var(--fx-radius, 16px) - 8px);background:var(--fx-surface-2);margin-bottom:16px}.fx-card__title{margin:0 0 6px;font-size:1.0625rem;font-weight:650;letter-spacing:-.01em}.fx-card__desc{margin:0;font-size:.875rem;line-height:1.55;color:var(--fx-text-dim)}.fx-card__tag{display:inline-block;margin-top:14px;padding:4px 10px;border-radius:999px;font-size:.75rem;font-weight:600;color:var(--fx-accent);background:color-mix(in srgb,var(--fx-accent) 12%,transparent)}',Xg=".fx-scroll-reveal{opacity:0;transition:opacity var(--fx-reveal-duration, .7s) var(--fx-ease-out) var(--fx-reveal-delay, 0ms),transform var(--fx-reveal-duration, .7s) var(--fx-ease-out) var(--fx-reveal-delay, 0ms)}.fx-scroll-reveal.is-revealed{opacity:1;transform:none}.fx-scroll-reveal[data-fx-preset=rise]{transform:translate3d(0,var(--fx-reveal-distance, 28px),0)}.fx-scroll-reveal[data-fx-preset=depth]{transform:perspective(var(--fx-reveal-perspective, 1000px)) translate3d(0,calc(var(--fx-reveal-distance, 28px) * .4),var(--fx-reveal-depth, -140px)) scale(var(--fx-reveal-scale, .92))}.fx-scroll-reveal[data-fx-preset=flip]{transform-origin:50% 100%;transform:perspective(var(--fx-reveal-perspective, 1000px)) rotateX(var(--fx-reveal-rotate, 22deg)) translate3d(0,calc(var(--fx-reveal-distance, 28px) * .5),0)}.fx-scroll-reveal[data-fx-preset=swing]{transform-origin:0% 50%;transform:perspective(var(--fx-reveal-perspective, 1000px)) rotateY(calc(var(--fx-reveal-rotate, 22deg) * -1)) translate3d(calc(var(--fx-reveal-distance, 28px) * -.5),0,0)}.fx-scroll-reveal[data-fx-preset=zoom]{transform:scale(var(--fx-reveal-scale, .92))}@supports (animation-timeline: view()){.fx-scroll-reveal[data-fx-mode=scrub]{transition:none;animation-fill-mode:both;animation-timing-function:linear;animation-timeline:view();animation-range:var(--fx-reveal-start, entry 10%) var(--fx-reveal-end, cover 40%)}.fx-scroll-reveal[data-fx-mode=scrub][data-fx-preset=rise]{animation-name:fx-reveal-rise}.fx-scroll-reveal[data-fx-mode=scrub][data-fx-preset=depth]{animation-name:fx-reveal-depth}.fx-scroll-reveal[data-fx-mode=scrub][data-fx-preset=flip]{animation-name:fx-reveal-flip}.fx-scroll-reveal[data-fx-mode=scrub][data-fx-preset=swing]{animation-name:fx-reveal-swing}.fx-scroll-reveal[data-fx-mode=scrub][data-fx-preset=zoom]{animation-name:fx-reveal-zoom}}@keyframes fx-reveal-rise{0%{opacity:0;transform:translate3d(0,var(--fx-reveal-distance, 28px),0)}to{opacity:1;transform:none}}@keyframes fx-reveal-depth{0%{opacity:0;transform:perspective(var(--fx-reveal-perspective, 1000px)) translate3d(0,calc(var(--fx-reveal-distance, 28px) * .4),var(--fx-reveal-depth, -140px)) scale(var(--fx-reveal-scale, .92))}to{opacity:1;transform:none}}@keyframes fx-reveal-flip{0%{opacity:0;transform:perspective(var(--fx-reveal-perspective, 1000px)) rotateX(var(--fx-reveal-rotate, 22deg)) translate3d(0,calc(var(--fx-reveal-distance, 28px) * .5),0)}to{opacity:1;transform:none}}@keyframes fx-reveal-swing{0%{opacity:0;transform:perspective(var(--fx-reveal-perspective, 1000px)) rotateY(calc(var(--fx-reveal-rotate, 22deg) * -1)) translate3d(calc(var(--fx-reveal-distance, 28px) * -.5),0,0)}to{opacity:1;transform:none}}@keyframes fx-reveal-zoom{0%{opacity:0;transform:scale(var(--fx-reveal-scale, .92))}to{opacity:1;transform:none}}.fx-scroll-reveal[data-fx-mode=scrub][data-fx-preset=flip]{transform-origin:50% 100%}.fx-scroll-reveal[data-fx-mode=scrub][data-fx-preset=swing]{transform-origin:0% 50%}",Qg='.fx-silk{position:relative;isolation:isolate;overflow:hidden;--fx-silk-c1: #1b1d3a;--fx-silk-c2: #5b5bd6;--fx-silk-c3: #a78bfa;background-color:var(--fx-silk-c1);background-image:radial-gradient(120% 90% at 18% 12%,var(--fx-silk-c2) 0%,transparent 58%),radial-gradient(100% 80% at 82% 78%,var(--fx-silk-c3) 0%,transparent 55%),radial-gradient(90% 70% at 55% 45%,color-mix(in srgb,var(--fx-silk-c2) 55%,var(--fx-silk-c3)) 0%,transparent 62%)}.fx-silk-bg__canvas{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;display:block;width:100%;height:100%;pointer-events:none;opacity:0;transition:opacity .6s var(--fx-ease-out)}.fx-silk-bg--ready .fx-silk-bg__canvas{opacity:1}.fx-silk-bg--lost .fx-silk-bg__canvas{opacity:0}.fx-silk>*:not(.fx-layer){position:relative;z-index:1}.fx-silk--scrim:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;pointer-events:none;background:linear-gradient(to bottom,#00000026,#00000073)}.fx-silk--scrim-light:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;pointer-events:none;background:linear-gradient(to bottom,#ffffff40,#ffffff8c)}.fx-silk-hero{display:grid;place-items:center;min-height:min(80vh,760px);border-radius:var(--fx-radius, 16px);padding:40px 24px;text-align:center;color:#fff}.fx-silk-hero h1{margin:0 0 14px;font-size:clamp(2rem,6vw,4.2rem);font-weight:700;letter-spacing:-.035em;line-height:1.04;text-shadow:0 2px 24px rgba(0,0,0,.35)}.fx-silk-hero p{margin:0;font-size:clamp(.95rem,2vw,1.15rem);color:#ffffffd1}',Zg=".fx-dots{position:relative;isolation:isolate;overflow:hidden;--fx-dot-color: #6b7280}@media (prefers-color-scheme: dark){.fx-dots{--fx-dot-color: #9ca3af}}:root[data-theme=dark] .fx-dots{--fx-dot-color: #9ca3af}:root[data-theme=light] .fx-dots{--fx-dot-color: #6b7280}.fx-dot-grid-wave__canvas{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;display:block;pointer-events:none;opacity:0;transition:opacity .5s var(--fx-ease-out)}.fx-dot-grid-wave .fx-dot-grid-wave__canvas{opacity:1}.fx-dots>*:not(.fx-layer){position:relative;z-index:1}.fx-dots--fade .fx-dot-grid-wave__canvas{-webkit-mask-image:radial-gradient(ellipse 78% 78% at 50% 50%,#000 45%,transparent 100%);mask-image:radial-gradient(ellipse 78% 78% at 50% 50%,#000 45%,transparent 100%)}.fx-dots--fade-y .fx-dot-grid-wave__canvas{-webkit-mask-image:linear-gradient(to bottom,transparent 0%,#000 22%,#000 78%,transparent 100%);mask-image:linear-gradient(to bottom,transparent 0%,#000 22%,#000 78%,transparent 100%)}.fx-dots-section{display:grid;place-items:center;min-height:min(62vh,560px);padding:56px 24px;border-radius:var(--fx-radius, 16px);background:var(--fx-surface);text-align:center;color:var(--fx-text)}.fx-dots-section h2{margin:0 0 12px;font-size:clamp(1.6rem,4vw,2.6rem);font-weight:700;letter-spacing:-.03em}.fx-dots-section p{margin:0;max-width:46ch;color:var(--fx-text-dim);line-height:1.6}",Jg='.fx-magnetic-button{position:relative;transform-style:preserve-3d;transform:perspective(600px) translate3d(var(--fx-mag-x, 0px),var(--fx-mag-y, 0px),0) rotateX(var(--fx-mag-rx, 0deg)) rotateY(var(--fx-mag-ry, 0deg)) scale(var(--fx-mag-scale, 1));overflow:hidden;isolation:isolate}.fx-magnetic-button[data-fx-magnetic="1"]{will-change:transform}.fx-magnetic-button [data-fx-label]{position:relative;z-index:1;display:inline-block;transform:translate3d(calc(var(--fx-mag-x, 0px) * var(--fx-mag-lf, .5)),calc(var(--fx-mag-y, 0px) * var(--fx-mag-lf, .5)),0);will-change:transform}.fx-magnetic-button__glow{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;pointer-events:none;border-radius:inherit;opacity:var(--fx-mag-glow, 0);background:radial-gradient(circle at var(--fx-mag-px, 50%) var(--fx-mag-py, 50%),var(--fx-glare) 0%,transparent 55%)}.fx-magnetic-button.fx-inert [data-fx-label]{transform:none}.fx-magnetic-button.fx-inert .fx-magnetic-button__glow{display:none}.fx-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:14px 28px;border:0;border-radius:999px;font:inherit;font-size:.9375rem;font-weight:650;letter-spacing:-.005em;line-height:1;text-decoration:none;white-space:nowrap;color:#fff;background:var(--fx-accent);cursor:pointer;box-shadow:0 8px 22px -10px color-mix(in srgb,var(--fx-accent) 80%,#000);transition:box-shadow var(--fx-duration-fast) var(--fx-ease),background-color var(--fx-duration-fast) var(--fx-ease)}.fx-btn[data-fx-magnetic="1"]{box-shadow:0 16px 34px -12px color-mix(in srgb,var(--fx-accent) 85%,#000)}.fx-btn:active{filter:brightness(.94)}.fx-btn--ghost{color:var(--fx-text);background:transparent;box-shadow:inset 0 0 0 1px var(--fx-border)}.fx-btn--ghost[data-fx-magnetic="1"]{box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--fx-accent) 60%,transparent),0 14px 30px -16px #00000080}',e0=".fx-flip-card{position:relative;perspective:var(--fx-flip-perspective, 1400px);cursor:pointer;-webkit-tap-highlight-color:transparent}.fx-flip-card__inner{position:relative;width:100%;height:100%;transform-style:preserve-3d;transition:transform var(--fx-flip-duration, .6s) var(--fx-ease)}.fx-flip-card__face{backface-visibility:hidden;-webkit-backface-visibility:hidden;border-radius:inherit;transform:translateZ(0)}.fx-flip-card__face--back{position:absolute;top:0;right:0;bottom:0;left:0;transform:rotateY(var(--fx-flip-deg, 180deg))}.fx-flip-card.is-flipped .fx-flip-card__inner{transform:rotateY(var(--fx-flip-deg, 180deg))}.fx-flip-card[data-fx-flip-axis=x] .fx-flip-card__face--back,.fx-flip-card[data-fx-flip-axis=x].is-flipped .fx-flip-card__inner{transform:rotateX(var(--fx-flip-deg, 180deg))}.fx-flip-card:hover .fx-flip-card__inner,.fx-flip-card:focus-within .fx-flip-card__inner,.fx-flip-card.is-flipped .fx-flip-card__inner{will-change:transform}.fx-flip-card:focus-visible{outline:2px solid var(--fx-accent);outline-offset:4px;border-radius:var(--fx-radius, 16px)}.fx-flip{border-radius:var(--fx-radius, 16px);min-height:200px}.fx-flip .fx-flip-card__face{display:flex;flex-direction:column;justify-content:center;gap:8px;height:100%;padding:24px;border-radius:var(--fx-radius, 16px);border:1px solid var(--fx-border);box-shadow:var(--fx-shadow);color:var(--fx-text)}.fx-flip .fx-flip-card__face--front{background:var(--fx-surface)}.fx-flip .fx-flip-card__face--back{background:linear-gradient(145deg,var(--fx-accent),color-mix(in srgb,var(--fx-accent) 55%,#000));color:#fff}.fx-flip__title{margin:0;font-size:1.125rem;font-weight:650;letter-spacing:-.01em}.fx-flip__body{margin:0;font-size:.875rem;line-height:1.6;color:var(--fx-text-dim)}.fx-flip .fx-flip-card__face--back .fx-flip__body{color:#ffffffd9}.fx-flip__hint{margin-top:auto;font-size:.75rem;font-weight:600;letter-spacing:.02em;color:var(--fx-text-dim);opacity:.8}.fx-flip .fx-flip-card__face--back .fx-flip__hint{color:#ffffffb3}",n0=".fx-char{position:relative;display:block;width:100%;aspect-ratio:3 / 4;--fx-char-color: #ffffff;background:#16181d;border-radius:var(--fx-radius, 16px);overflow:hidden;isolation:isolate}.fx-char--light{--fx-char-color: #16181d;background:var(--fx-surface-2)}.fx-char--bare{background:transparent;border-radius:0;--fx-char-color: currentColor}@media (prefers-color-scheme: dark){.fx-char--bare{--fx-char-color: currentColor}}.fx-character__canvas{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;display:block;pointer-events:none;opacity:0;transition:opacity .4s var(--fx-ease-out)}.fx-character .fx-character__canvas{opacity:1}.fx-char>*:not(.fx-character__canvas){position:relative;z-index:1}.fx-char--interactive{cursor:pointer;-webkit-tap-highlight-color:transparent}.fx-char--interactive:focus-visible{outline:2px solid var(--fx-accent);outline-offset:3px}.fx-char--fixed{position:fixed;right:20px;bottom:20px;z-index:40;width:clamp(90px,12vw,150px);aspect-ratio:3 / 4;background:transparent;border-radius:0;overflow:visible;pointer-events:none}@media (max-width: 640px){.fx-char--fixed{display:none}}.fx-char-hero{display:grid;grid-template-columns:1fr;gap:24px;align-items:center}@media (min-width: 720px){.fx-char-hero{grid-template-columns:1.2fr .8fr}}.fx-char-hero__text h1{margin:0 0 12px;font-size:clamp(1.8rem,5vw,3.2rem);font-weight:700;letter-spacing:-.03em;line-height:1.08}.fx-char-hero__text p{margin:0;color:var(--fx-text-dim);line-height:1.6}",r0='.fx-model{position:relative;display:block;width:100%;aspect-ratio:4 / 3;overflow:hidden;border-radius:var(--fx-radius, 16px);background:var(--wf-surface, var(--fx-surface-2));isolation:isolate}.fx-model__poster{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:100%;height:100%;object-fit:contain;display:block;transition:opacity .5s var(--fx-ease-out)}.fx-model--loaded .fx-model__poster{opacity:0;pointer-events:none}.fx-model__viewer{position:absolute;top:0;right:0;bottom:0;left:0;z-index:2;width:100%;height:100%;opacity:0;transition:opacity .5s var(--fx-ease-out);background-color:transparent;--poster-color: transparent;cursor:grab}.fx-model__viewer:active{cursor:grabbing}.fx-model--loaded .fx-model__viewer{opacity:1}.fx-model:after{content:"";position:absolute;left:0;bottom:0;z-index:3;height:2px;width:calc(var(--fx-model-progress, 0) * 100%);background:var(--fx-accent);opacity:0;transition:opacity .3s var(--fx-ease);pointer-events:none}.fx-model--loading:after{opacity:1}.fx-model--failed{outline:1px dashed color-mix(in srgb,var(--fx-text-dim) 40%,transparent);outline-offset:-1px}.fx-model__hint{position:absolute;left:50%;bottom:12px;z-index:4;transform:translate(-50%);padding:6px 14px;border-radius:999px;font-size:.75rem;font-weight:600;letter-spacing:.01em;white-space:nowrap;color:var(--fx-text);background:color-mix(in srgb,var(--fx-surface) 82%,transparent);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);border:1px solid var(--fx-border);opacity:0;transition:opacity .4s var(--fx-ease-out) .6s;pointer-events:none}.fx-model--loaded .fx-model__hint{opacity:1}.fx-model--touched .fx-model__hint{opacity:0;transition-delay:0ms}.fx-model--square{aspect-ratio:1}.fx-model--wide{aspect-ratio:16 / 9}.fx-model--tall{aspect-ratio:3 / 4}',t0=".fx-hover-preview__float{position:fixed;top:0;left:0;z-index:55;pointer-events:none;overflow:hidden;border-radius:10px;box-shadow:0 18px 44px #00000047;opacity:0;scale:.86;transition:opacity .2s ease,scale .24s cubic-bezier(.2,.7,.2,1)}.fx-hover-preview__float.is-on{opacity:1;scale:1}.fx-hover-preview__float img{display:block;width:100%;height:auto}@media (prefers-reduced-motion: reduce){.fx-hover-preview__float{transition:opacity .15s ease;scale:1}}",a0=".fx-spotlight{position:relative}.fx-spotlight__glow{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;z-index:0;opacity:0;transition:opacity .35s ease;background:radial-gradient(var(--fx-spot-size, 420px) circle at var(--fx-spot-x, 50%) var(--fx-spot-y, 40%),color-mix(in srgb,var(--fx-spot-color, var(--wf-accent, #8b8bff)) calc(var(--fx-spot-alpha, .22) * 100%),transparent),transparent 70%)}.fx-spotlight.is-spot-on .fx-spotlight__glow{opacity:1}.fx-spotlight>*:not(.fx-layer){position:relative;z-index:1}",o0=".fx-starfield{position:relative}.fx-starfield__cv{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0}.fx-starfield>*:not(.fx-layer){position:relative;z-index:1}",St="'Malgun Gothic', 'Apple SD Gothic Neo', 'Noto Sans KR'",ur=[{id:"sans",label:"모던 산세리프",tagline:"무난하고 안전",sample:"Aa 가",webfont:"Inter",files:[{weight:400,file:"inter-400.woff2"},{weight:700,file:"inter-700.woff2"}],font:`'Inter', -apple-system, 'Segoe UI', ${St}, system-ui, sans-serif`,h1:50,h2:34,h3:19,body:16,small:13,hWeight:700,bWeight:400,tracking:-1.2,lineHeight:1.25,bodyLine:1.65},{id:"display",label:"초대형 타이틀",tagline:"첫 화면을 크게",sample:"Aa 가",webfont:"Space Grotesk",files:[{weight:400,file:"grotesk-400.woff2"},{weight:700,file:"grotesk-700.woff2"}],font:`'Space Grotesk', -apple-system, 'Segoe UI', ${St}, system-ui, sans-serif`,h1:78,h2:42,h3:20,body:17,small:13,hWeight:700,bWeight:400,tracking:-3,lineHeight:1.05,bodyLine:1.6},{id:"serif",label:"세리프",tagline:"차분하고 고전적",sample:"Aa 가",webfont:"Playfair Display",files:[{weight:400,file:"playfair-400.woff2"},{weight:700,file:"playfair-700.woff2"}],font:"'Playfair Display', 'Nanum Myeongjo', Batang, Georgia, serif",h1:52,h2:36,h3:20,body:17,small:14,hWeight:700,bWeight:400,tracking:-.5,lineHeight:1.3,bodyLine:1.8},{id:"mono",label:"모노스페이스",tagline:"개발자다운",sample:"Aa 가",webfont:"JetBrains Mono",files:[{weight:400,file:"jetbrains-400.woff2"},{weight:700,file:"jetbrains-700.woff2"}],font:"'JetBrains Mono', 'Cascadia Code', D2Coding, Consolas, monospace",h1:40,h2:28,h3:17,body:14,small:12,hWeight:700,bWeight:400,tracking:-.5,lineHeight:1.35,bodyLine:1.7},{id:"geist",label:"Geist",tagline:"개발자 포트폴리오 유행",sample:"Aa 가",webfont:"Geist",files:[{weight:400,file:"geist-400.woff2"},{weight:700,file:"geist-700.woff2"}],font:`'Geist', -apple-system, 'Segoe UI', ${St}, system-ui, sans-serif`,h1:52,h2:34,h3:19,body:16,small:13,hWeight:700,bWeight:400,tracking:-1.4,lineHeight:1.2,bodyLine:1.65},{id:"manrope",label:"Manrope",tagline:"부드럽고 친근한 UI",sample:"Aa 가",webfont:"Manrope",files:[{weight:400,file:"manrope-400.woff2"},{weight:700,file:"manrope-700.woff2"}],font:`'Manrope', -apple-system, 'Segoe UI', ${St}, system-ui, sans-serif`,h1:48,h2:32,h3:19,body:16,small:13,hWeight:700,bWeight:400,tracking:-.8,lineHeight:1.25,bodyLine:1.7},{id:"dmsans",label:"DM Sans",tagline:"깔끔한 제품 화면",sample:"Aa 가",webfont:"DM Sans",files:[{weight:400,file:"dmsans-400.woff2"},{weight:700,file:"dmsans-700.woff2"}],font:`'DM Sans', -apple-system, 'Segoe UI', ${St}, system-ui, sans-serif`,h1:50,h2:33,h3:19,body:16,small:13,hWeight:700,bWeight:400,tracking:-1,lineHeight:1.22,bodyLine:1.65},{id:"instrument",label:"Instrument Serif",tagline:"요즘 유행 세리프 타이틀",sample:"Aa 가",webfont:"Instrument Serif",files:[{weight:400,file:"instrument-400.woff2"}],font:"'Instrument Serif', 'Nanum Myeongjo', Batang, Georgia, serif",h1:62,h2:40,h3:21,body:17,small:14,hWeight:400,bWeight:400,tracking:-.5,lineHeight:1.1,bodyLine:1.75},{id:"fraunces",label:"Fraunces",tagline:"개성 있는 세리프",sample:"Aa 가",webfont:"Fraunces",files:[{weight:400,file:"fraunces-400.woff2"},{weight:700,file:"fraunces-700.woff2"}],font:"'Fraunces', 'Nanum Myeongjo', Batang, Georgia, serif",h1:54,h2:36,h3:20,body:17,small:14,hWeight:700,bWeight:400,tracking:-.6,lineHeight:1.25,bodyLine:1.8},{id:"custom",label:"내 글꼴 (업로드)",tagline:"ttf·otf·woff2 파일",sample:"Aa 가",webfont:null,files:[],font:`'PBCustom', -apple-system, 'Segoe UI', ${St}, system-ui, sans-serif`,h1:50,h2:34,h3:19,body:16,small:13,hWeight:700,bWeight:400,tracking:-1,lineHeight:1.25,bodyLine:1.65}];function wl(e,n){var a,o;const r=(o=(a=/\.([a-z0-9]+)$/i.exec(n??""))==null?void 0:a[1])==null?void 0:o.toLowerCase(),t={ttf:"truetype",otf:"opentype",woff:"woff",woff2:"woff2"}[r];return`@font-face{font-family:'PBCustom';font-style:normal;font-display:swap;src:url(${e})${t?` format('${t}')`:""};}`}const tm="sans",am=e=>{var n;return((n=ur.find(r=>r.label===e))==null?void 0:n.font)??null},ys=e=>ur.find(n=>n.id===e)??ur[0],ws="/fonts";function jc(e,n=null){return(n?ur.filter(t=>n.includes(t.id)):ur).flatMap(t=>t.files.map(a=>`@font-face{font-family:'${t.webfont}';font-style:normal;font-weight:${a.weight};font-display:swap;src:url(${e(a.file)}) format('woff2');}`)).join(`
`)}function om(e){var r;const n=new Set([(e==null?void 0:e.typeset)??tm]);for(const t of(e==null?void 0:e.pages)??[])for(const a of Object.values(t.overrides??{})){const o=(r=a==null?void 0:a.typo)==null?void 0:r.font;if(!o||o==="상속")continue;const i=ur.find(l=>l.label===o);i&&n.add(i.id)}return[...n]}const s0=jc(e=>`${ws}/${e}`),i0=[s0,Sc,Kg,Xg,Qg,Zg,Jg,e0,n0,r0,t0,a0,o0,kc],l0='<!doctype html><html lang="ko"><head><meta charset="utf-8"></head><body></body></html>';function c0({width:e=1280,children:n,onReady:r}){const t=N.useRef(null),a=N.useRef(null),[o,i]=N.useState(null),[l,f]=N.useState(0);N.useEffect(()=>{const d=a.current;if(!d)return;const m=new ResizeObserver(([w])=>f(w.contentRect.width));return m.observe(d),f(d.getBoundingClientRect().width),()=>m.disconnect()},[]);const u=N.useCallback(()=>{var w;const d=(w=t.current)==null?void 0:w.contentDocument;if(!(d!=null&&d.body)||d.getElementById("pb-sheets"))return;const m=d.createElement("style");m.id="pb-sheets",m.textContent=i0.join(`
`),d.head.appendChild(m),d.body.classList.add("pb-editing"),i(d.body),r==null||r(d)},[r]),x=l>0?Math.min(1,l/e):1;return s.jsxs("div",{className:"pb-frame__wrap",ref:a,children:[s.jsx("iframe",{ref:t,title:"canvas",className:`pb-frame ${e<1280?"pb-frame--device":""}`,style:{width:`${e}px`,height:`${100/x}%`,transform:x<1?`scale(${x})`:void 0,transformOrigin:"center top"},srcDoc:l0,onLoad:u,children:o?nm.createPortal(n,o):null}),x<1&&s.jsxs("span",{className:"pb-frame__zoom",title:"실제 폭 기준으로 그리고 화면에 맞게 줄여 보여줍니다",children:[e,"px · ",Math.round(x*100),"%"]})]})}const Ec=[{id:"none",label:"없음",hint:""},{id:"chars",label:"한 글자씩 (타이핑)",hint:"글자가 차례로 나타납니다",split:!0},{id:"up",label:"아래에서 올라오며",hint:"살짝 올라오며 나타납니다"},{id:"blur",label:"흐릿함에서 선명하게",hint:"초점이 맞는 느낌"},{id:"spread",label:"자간 벌어지며",hint:"큰 제목에 잘 맞습니다"},{id:"underline",label:"밑줄 그려지기",hint:"제목 아래 선이 좌→우로"},{id:"gradient",label:"글자 그라디언트",hint:"움직임 없이 인상만"},{id:"glitch",label:"글리치",hint:"간헐적으로 지직 — 테크 무드"},{id:"fill",label:"스크롤 따라 채워지기",hint:"회색에서 본문색으로 (스크롤 연동)"}],sm={kind:"없음",target:"제목만",speed:40,delay:0},f0=[{key:"kind",label:"글자 효과",type:"select",options:Ec.map(e=>e.label)},{key:"target",label:"적용 대상",type:"select",options:["제목만","제목 + 본문"]},{key:"speed",label:"타이핑 속도 (글자당)",type:"range",min:10,max:300,step:5,unit:"ms"},{key:"delay",label:"시작 지연",type:"range",min:0,max:1500,step:50,unit:"ms"}],Cc=e=>{var n;return((n=Ec.find(r=>r.label===e))==null?void 0:n.id)??(e||"none")},Nc=e=>!!e&&Cc(e.kind)!=="none",im=e=>{var n;return Nc(e)&&((n=Ec.find(r=>r.id===Cc(e.kind)))==null?void 0:n.split)===!0};function lm(e){if(!Nc(e))return"";const n=e.target==="제목 + 본문"?"all":"title";return`wf-tfx wf-tfx--${Cc(e.kind)} wf-tfx-on--${n}`}function cm(e){return Nc(e)?{"--tfx-step":`${e.speed??sm.speed}ms`,"--tfx-delay":`${e.delay??0}ms`}:{}}function d0(e){const n=[];let r=0;for(const t of String(e??"")){if(t===`
`){n.push({br:!0});continue}n.push({ch:t===" "?" ":t,i:r++})}return n}const u0=" ";function p0({tag:e="span",value:n,onCommit:r,editable:t=!1,multiline:a=!1,placeholder:o="",className:i="",style:l,split:f=!1,fxSeed:u=""}){const x=N.useRef(null),d=N.useRef(null);return d.current={value:n,onCommit:r,multiline:a},N.useEffect(()=>{const m=x.current;if(!m||m.ownerDocument.activeElement===m)return;const w=n??"";m.innerText!==w&&(m.innerText=w)},[n,t]),N.useEffect(()=>{const m=x.current;if(!m||!t)return;let w=0;const v=()=>{clearTimeout(w);const{value:c,onCommit:p}=d.current,g=m.innerText.split(u0).join(" ").replace(/\n+$/,"");g!==(c??"")&&p(g)},b=()=>{clearTimeout(w),w=setTimeout(v,350)},S=c=>{c.stopPropagation();const{value:p,multiline:g}=d.current;c.key==="Escape"?(clearTimeout(w),m.innerText=p??"",m.blur()):c.key==="Enter"&&!g&&(c.preventDefault(),v(),m.blur())},h=c=>{var y;c.preventDefault();const{multiline:p}=d.current,g=((y=c.clipboardData)==null?void 0:y.getData("text/plain"))??"";m.ownerDocument.execCommand("insertText",!1,p?g:g.replace(/\s*\n\s*/g," "))};return m.addEventListener("input",b),m.addEventListener("blur",v),m.addEventListener("focusout",v),m.addEventListener("keydown",S),m.addEventListener("paste",h),()=>{clearTimeout(w),m.removeEventListener("input",b),m.removeEventListener("blur",v),m.removeEventListener("focusout",v),m.removeEventListener("keydown",S),m.removeEventListener("paste",h)}},[t]),t?s.jsx(e,{ref:x,className:`${i} wf-edit`.trim(),style:l,contentEditable:!0,suppressContentEditableWarning:!0,spellCheck:!1,"data-ph":o},"edit"):f?s.jsx(e,{className:i,style:l,children:d0(n).map((m,w)=>m.br?s.jsx("br",{},w):s.jsx("span",{className:"wf-tfx__ch",style:{"--i":m.i},children:m.ch},w))},`fx:${u}`):s.jsx(e,{className:i,style:l,children:n},"txt")}const m0="portfolio-builder",h0=1,Vr="docs",na="assets",fm="current",bl="pb:doc:v6";let No=null;function x0(){return No||(No=new Promise((e,n)=>{const r=indexedDB.open(m0,h0);r.onupgradeneeded=()=>{const t=r.result;t.objectStoreNames.contains(Vr)||t.createObjectStore(Vr),t.objectStoreNames.contains(na)||t.createObjectStore(na)},r.onsuccess=()=>e(r.result),r.onerror=()=>n(r.error)}),No)}function pr(e,n,r){return x0().then(t=>new Promise((a,o)=>{const i=t.transaction(e,n),l=r(i.objectStore(e));i.onerror=()=>o(i.error),i.oncomplete=()=>a(l==null?void 0:l.result)}))}async function g0(){var r;let e=null;try{e=await pr(Vr,"readonly",t=>t.get(fm))}catch{}if(e)return e;const n=localStorage.getItem(bl);if(!n)return null;try{const t=JSON.parse(n);return(r=t==null?void 0:t.pages)!=null&&r.length?(await dm(t),localStorage.removeItem(bl),t):null}catch{return null}}async function dm(e){try{return await pr(Vr,"readwrite",n=>n.put(e,fm)),!0}catch{try{return localStorage.setItem(bl,JSON.stringify(e)),!0}catch{return!1}}}const $c=(e,n)=>pr(na,"readwrite",r=>r.put(n,e)),Lc=e=>pr(na,"readonly",n=>n.get(e)),v0=e=>pr(na,"readwrite",n=>n.delete(e)),y0=()=>pr(na,"readonly",e=>e.getAllKeys()),Ja="slot:",w0=(e,n)=>pr(Vr,"readwrite",r=>r.put(n,e)),um=e=>pr(Vr,"readonly",n=>n.get(e)),b0=e=>pr(Vr,"readwrite",n=>n.delete(e)),_0=()=>pr(Vr,"readonly",e=>e.getAllKeys()),k0=1600,S0=.82,it=new Map;let j0=0;const pm=()=>`img${Date.now().toString(36)}${(j0++).toString(36)}`;async function E0(e){var f;if(!e||!e.type.startsWith("image/"))throw new Error("이미지 파일이 아닙니다.");const n=await createImageBitmap(e),r=Math.min(1,k0/Math.max(n.width,n.height)),t=Math.max(1,Math.round(n.width*r)),a=Math.max(1,Math.round(n.height*r)),o=document.createElement("canvas");o.width=t,o.height=a,o.getContext("2d").drawImage(n,0,0,t,a),(f=n.close)==null||f.call(n);const i=await new Promise(u=>o.toBlob(u,"image/webp",S0));if(!i)throw new Error("이미지를 변환할 수 없습니다.");const l=pm();return await $c(l,i),{id:l,alt:"",fit:"cover",w:t,h:a,bytes:i.size}}async function C0(e,n=8){if(!e)throw new Error("파일이 없습니다.");if(e.size>n*1024*1024)throw new Error(`파일이 너무 큽니다 (${Mc(e.size)}). ${n}MB 이하로 줄여 주세요.`);const r=pm();return await $c(r,e),{id:r,name:e.name||"파일",bytes:e.size,type:e.type||"application/octet-stream"}}async function N0(e){if(!e)return null;if(it.has(e))return it.get(e);const n=await Lc(e);if(!n)return null;const r=URL.createObjectURL(n);return it.set(e,r),r}async function mm(e){const n=await Lc(e);return n?new Promise(r=>{const t=new FileReader;t.onload=()=>r(t.result),t.onerror=()=>r(null),t.readAsDataURL(n)}):null}async function $0(e){return e?Lc(e):null}async function eo(e){if(!e)return;const n=it.get(e);n&&(URL.revokeObjectURL(n),it.delete(e)),await v0(e)}function br(e){const[n,r]=N.useState(()=>e?it.get(e)??null:null);return N.useEffect(()=>{if(!e)return r(null);const t=it.get(e);if(t)return r(t);let a=!0;return N0(e).then(o=>{a&&r(o)}),()=>{a=!1}},[e]),n}function Rc(e){const n=new Set,r=t=>{if(!(!t||typeof t!="object")){if(Array.isArray(t))return t.forEach(r);if(typeof t.id=="string"&&typeof t.bytes=="number")return n.add(t.id);Object.values(t).forEach(r)}};for(const t of(e==null?void 0:e.pages)??[])Object.values(t.content??{}).forEach(r),Object.values(t.overrides??{}).forEach(r);return r(e==null?void 0:e.site),[...n]}async function L0(e){try{const n=new Set(Rc(e)),t=(await y0()??[]).filter(a=>!n.has(a));for(const a of t)await eo(a);return t.length}catch{return 0}}const Mc=e=>e<1024?`${e}B`:e<1048576?`${(e/1024).toFixed(0)}KB`:`${(e/1048576).toFixed(1)}MB`;function xa({image:e,className:n="",style:r}){const t=br(e==null?void 0:e.id);return e!=null&&e.id?s.jsx("img",{className:n,src:t??void 0,alt:e.alt??"",style:{objectFit:e.fit??"cover",...r}}):null}const $o=["start","center","end","space-between"],Kn={topheader:{group:"머리",label:"Top Header",pad:14,tag:"div",hint:"로고 · 메뉴",color:"#6b6bff",h:60,nav:!0,defaults:{logo:"홍길동",align:"space-between",showMenu:!0,linkTo:"페이지",sticky:!0,divider:!0,modeToggle:!1,hideOnScroll:!1},fields:[{key:"logo",label:"로고 / 이름",type:"text"},{key:"align",label:"정렬",type:"select",options:$o},{key:"showMenu",label:"메뉴 표시",type:"boolean"},{key:"modeToggle",label:"다크 모드 토글 버튼 (☾/☀)",type:"boolean"},{key:"linkTo",label:"메뉴가 가리키는 곳",type:"select",options:["페이지","이 페이지 섹션"]},{key:"sticky",label:"스크롤 시 상단 고정",type:"boolean"},{key:"hideOnScroll",label:"내릴 땐 숨기기 (올리면 표시)",type:"boolean"},{key:"divider",label:"아래 구분선",type:"boolean"}]},nav:{group:"머리",label:"Nav",pad:12,tag:"nav",hint:"메뉴만",color:"#818cf8",h:52,nav:!0,defaults:{align:"center",gap:26,uppercase:!1,linkTo:"페이지",sticky:!1,divider:!1,modeToggle:!1,hideOnScroll:!1},fields:[{key:"align",label:"정렬",type:"select",options:$o},{key:"linkTo",label:"메뉴가 가리키는 곳",type:"select",options:["페이지","이 페이지 섹션"]},{key:"modeToggle",label:"다크 모드 토글 버튼 (☾/☀)",type:"boolean"},{key:"gap",label:"항목 간격",type:"range",min:8,max:64,step:2,unit:"px"},{key:"uppercase",label:"대문자",type:"boolean"},{key:"sticky",label:"스크롤 시 상단 고정",type:"boolean"},{key:"hideOnScroll",label:"내릴 땐 숨기기 (올리면 표시)",type:"boolean"},{key:"divider",label:"아래 구분선",type:"boolean"}]},header:{group:"머리",label:"Header",pad:16,tag:"header",hint:"로고 + 메뉴 + CTA",color:"#22d3ee",h:76,nav:!0,defaults:{logo:"홍길동",cta:"Contact",align:"space-between",showMenu:!0,linkTo:"페이지",sticky:!0,divider:!0,modeToggle:!1,hideOnScroll:!1},fields:[{key:"logo",label:"로고 / 이름",type:"text"},{key:"cta",label:"CTA 버튼",type:"text"},{key:"modeToggle",label:"다크 모드 토글 버튼 (☾/☀)",type:"boolean"},{key:"align",label:"정렬",type:"select",options:$o},{key:"showMenu",label:"메뉴 표시",type:"boolean"},{key:"linkTo",label:"메뉴가 가리키는 곳",type:"select",options:["페이지","이 페이지 섹션"]},{key:"sticky",label:"스크롤 시 상단 고정",type:"boolean"},{key:"hideOnScroll",label:"내릴 땐 숨기기 (올리면 표시)",type:"boolean"},{key:"divider",label:"아래 구분선",type:"boolean"}]},hero:{group:"본문",label:"Hero",pad:48,tag:"section",hint:"첫 화면 · 인사말",color:"#a78bfa",h:320,defaults:{title:`안녕하세요,
프론트엔드 개발자 홍길동입니다`,subtitle:"보이는 것에 집착합니다. 성능도 함께 챙깁니다.",cta:"이력서 보기",ctaFile:null,ctaKind:"채움",ctaBg:"",ctaText:"",ctaRadius:8,ctaScale:1,align:"center",titleScale:1},fields:[{key:"title",label:"제목",type:"textarea"},{key:"subtitle",label:"부제",type:"textarea"},{key:"cta",label:"버튼",type:"text"},{key:"ctaFile",label:"버튼에 파일 걸기 (PDF)",type:"file"},{key:"ctaKind",label:"버튼 모양",type:"select",options:["채움","윤곽","글자만"]},{key:"ctaBg",label:"버튼 색 (비우면 테마 강조색)",type:"color"},{key:"ctaText",label:"버튼 글자 색",type:"color"},{key:"ctaRadius",label:"버튼 모서리",type:"range",min:0,max:40,step:1,unit:"px"},{key:"ctaScale",label:"버튼 크기",type:"range",min:.8,max:1.6,step:.05},{key:"titleScale",label:"제목 크기",type:"range",min:.6,max:1.8,step:.05},{key:"align",label:"정렬",type:"select",options:["start","center","end"]}]},aside:{group:"본문",label:"Aside",pad:28,tag:"aside",hint:"프로필 · 목차",color:"#f472b6",h:0,nav:!0,defaults:{name:"홍길동",role:"Front End Engineer",bio:"디자인 시스템과 3D 인터랙션을 주로 다룹니다.",photo:null,photoSize:96,photoRound:!0,showMenu:!0,linkTo:"페이지",sticky:!0,align:"start"},fields:[{key:"photo",label:"프로필 사진",type:"image"},{key:"photoSize",label:"사진 크기",type:"range",min:48,max:260,step:4,unit:"px"},{key:"photoRound",label:"동그랗게",type:"boolean"},{key:"name",label:"이름",type:"text"},{key:"role",label:"직함",type:"text"},{key:"bio",label:"한 줄 소개",type:"textarea"},{key:"showMenu",label:"목차(메뉴) 표시",type:"boolean"},{key:"linkTo",label:"목차가 가리키는 곳",type:"select",options:["페이지","이 페이지 섹션"]},{key:"sticky",label:"스크롤에 고정",type:"boolean"},{key:"align",label:"정렬",type:"select",options:["start","center"]}]},main:{group:"본문",label:"Main",pad:20,tag:"main",hint:"본문 묶음",color:"#4ade80",h:0,defaults:{columns:2,gap:20,items:[{label:"Experience"},{label:"Education"}]},fields:[{key:"items",label:"슬롯",type:"list",itemLabel:"슬롯",itemDefaults:{label:"새 슬롯"},itemFields:[{key:"label",label:"이름",type:"text"}]},{key:"columns",label:"열 수",type:"range",min:1,max:4,step:1},{key:"gap",label:"간격",type:"range",min:0,max:48,step:2,unit:"px"}]},section:{group:"본문",label:"Section",pad:36,tag:"section",hint:"제목 + 본문",color:"#fbbf24",h:240,defaults:{title:"About",body:`3년차 프론트엔드 개발자입니다.
디자인 시스템과 3D 인터랙션을 주로 다룹니다.`,columns:1,align:"start",listStyle:"none",items:[{label:"React",note:"3년"},{label:"TypeScript",note:"2년"},{label:"WebGL",note:"셰이더"}]},fields:[{key:"title",label:"제목",type:"text"},{key:"body",label:"본문",type:"textarea"},{key:"columns",label:"열 수",type:"range",min:1,max:3,step:1},{key:"align",label:"정렬",type:"select",options:["start","center"]},{key:"listStyle",label:"목록 형태",type:"select",options:["none","tags","timeline","marquee","stats"]},{key:"items",label:"목록 항목",type:"list",itemLabel:"항목",itemDefaults:{label:"새 항목",note:""},itemFields:[{key:"label",label:"이름",type:"text"},{key:"note",label:"보조 설명",type:"text"}]}]},gallery:{group:"본문",label:"Gallery",pad:36,tag:"section",hint:"작업물 카드 그리드",color:"#fb923c",h:300,defaults:{title:"Projects",columns:3,rows:0,ratio:.7,showThumb:!0,grayHover:!1,items:[{title:"실시간 협업 에디터",stack:"React · Yjs · WebSocket",desc:"CRDT로 동시 편집을 구현했습니다.",link:"https://github.com/"},{title:"디자인 시스템",stack:"TypeScript · Storybook",desc:"컴포넌트 60여 개를 문서화했습니다.",link:""},{title:"3D 포트폴리오 팩",stack:"WebGL · Canvas",desc:"빌드 도구 없이 도는 효과 9종입니다.",link:""}]},fields:[{key:"title",label:"제목",type:"text"},{key:"items",label:"카드",type:"list",itemLabel:"카드",itemDefaults:{title:"새 프로젝트",stack:"",desc:"",detail:"",link:"",image:null},itemFields:[{key:"image",label:"썸네일",type:"image"},{key:"title",label:"제목",type:"text"},{key:"stack",label:"기술 스택",type:"text"},{key:"desc",label:"카드에 보일 한 줄",type:"textarea"},{key:"detail",label:"자세히 (적으면 카드를 누를 때 열립니다)",type:"textarea"},{key:"link",label:"링크",type:"text"}]},{key:"columns",label:"가로 칸 수",type:"range",min:1,max:5,step:1},{key:"rows",label:"세로 칸 수 (0 = 카드 수만큼)",type:"range",min:0,max:5,step:1},{key:"ratio",label:"카드 높이 비율",type:"range",min:.4,max:1.4,step:.05},{key:"showThumb",label:"썸네일 자리 표시",type:"boolean"},{key:"grayHover",label:"흑백에서 컬러로 (호버)",type:"boolean"}]},timeline:{group:"본문",label:"Timeline",pad:36,tag:"section",hint:"히스토리 · 연혁 라인",color:"#2dd4bf",h:320,defaults:{eyebrow:"tag",title:"연혁",items:[{label:"2019",head:"회사 설립",desc:"작은 사무실에서 세 명이 시작했습니다. 첫 제품의 방향을 잡은 해입니다."},{label:"2021",head:"첫 투자 유치 · 팀 확장",desc:"시드 투자를 받고 개발·디자인 팀을 갖췄습니다. 월 이용자 1만 명을 넘었습니다."},{label:"2024",head:"해외 진출",desc:"일본·동남아 시장에 서비스를 열고 현지 파트너십을 맺었습니다."}]},fields:[{key:"eyebrow",label:"작은 라벨 (비우면 숨김)",type:"text"},{key:"title",label:"제목",type:"text"},{key:"items",label:"항목",type:"list",itemLabel:"항목",itemDefaults:{label:"분류",head:"새 항목",desc:""},itemFields:[{key:"label",label:"분류 (위 작은 글)",type:"text"},{key:"head",label:"항목 제목",type:"text"},{key:"desc",label:"설명",type:"textarea"}]}]},model:{group:"3D",label:"3D Model",tag:"div",pad:0,hint:".glb 모델 뷰어",color:"#0ea5e9",h:380,is3d:!0,defaults:{boxHeight:380,srcFile:null,src:"",alt:"3D 모델",cameraControls:!0,autoRotate:!0,disableZoom:!0,exposure:1,shadowIntensity:.75,cameraOrbit:"",autoRotateDelay:3e3,rotationPerSecond:"18deg",autoplay:!0,animationName:"",interactionPrompt:"auto",disablePan:!0,ar:!1,envFile:null,environmentImage:"",skybox:!1,fill:!1,shadowSoftness:1,free:!1,freeX:72,freeY:58,freeW:26,follow:!1,followDecay:80,followYaw:28,followPitch:10},optionKeys:["src","alt","cameraControls","autoRotate","disableZoom","disablePan","exposure","shadowIntensity","shadowSoftness","cameraOrbit","autoRotateDelay","rotationPerSecond","autoplay","animationName","interactionPrompt","ar","environmentImage","skybox","follow","followDecay","followYaw","followPitch"],fields:[{key:"srcFile",label:".glb 파일 올리기",type:"file",maxMB:40,compress:"glb"},{key:"src",label:"또는 경로 / URL 직접 입력",type:"text"},{key:"alt",label:"대체 설명",type:"text"},{key:"cameraOrbit",label:"처음 보이는 각도",type:"text"},{key:"autoRotateDelay",label:"자동 회전 시작까지",type:"range",min:0,max:1e4,step:500,unit:"ms"},{key:"rotationPerSecond",label:"회전 속도",type:"select",options:["6deg","12deg","18deg","30deg","60deg"]},{key:"autoplay",label:"파일에 담긴 동작 재생",type:"boolean"},{key:"animationName",label:"동작 이름 (비우면 첫 번째)",type:"text"},{key:"interactionPrompt",label:"돌려보라는 힌트",type:"select",options:["auto","when-focused","none"]},{key:"disablePan",label:"끌어서 이동 끄기",type:"boolean"},{key:"ar",label:"휴대폰에서 실물 크기로 보기(AR)",type:"boolean"},{key:"free",label:"레이아웃 무관 모드 (화면에 고정)",type:"boolean"},{key:"freeX",label:"가로 위치",type:"range",min:0,max:100,step:1,unit:"%"},{key:"freeY",label:"세로 위치",type:"range",min:0,max:100,step:1,unit:"%"},{key:"freeW",label:"크기",type:"range",min:8,max:70,step:1,unit:"%"},{key:"follow",label:"마우스 쪽을 바라보기 (쉴 때는 자동 회전)",type:"boolean"},{key:"followDecay",label:"따라오는 느긋함 (클수록 느림)",type:"range",min:20,max:200,step:5},{key:"followYaw",label:"좌우로 돌아보는 각도",type:"range",min:0,max:70,step:2,unit:"°"},{key:"followPitch",label:"위아래로 돌아보는 각도",type:"range",min:0,max:30,step:1,unit:"°"},{key:"envFile",label:"환경광 파일 올리기 (.hdr·.exr·.jpg)",type:"file",accept:".hdr,.exr,.jpg,.jpeg,.png,image/*",maxMB:24},{key:"environmentImage",label:"또는 환경광 URL (비우면 기본)",type:"text"},{key:"skybox",label:"배경까지 환경광으로 (환경광 필요)",type:"boolean"},{key:"fill",label:"영역 전체 채우기 (환경광이 영역 배경처럼)",type:"boolean"},{key:"shadowSoftness",label:"그림자 부드럽게",type:"range",min:0,max:1,step:.05},{key:"boxHeight",label:"영역 높이",type:"range",min:200,max:700,step:10,unit:"px"},{key:"autoRotate",label:"자동 회전",type:"boolean"},{key:"cameraControls",label:"드래그 회전",type:"boolean"},{key:"disableZoom",label:"휠 줌 끄기",type:"boolean"},{key:"exposure",label:"노출",type:"range",min:.2,max:2.5,step:.05},{key:"shadowIntensity",label:"그림자",type:"range",min:0,max:1,step:.05}]},contact:{group:"마무리",label:"Contact",pad:40,tag:"section",hint:"연락처 · 이메일",color:"#f97316",h:220,defaults:{title:"Contact",body:"함께 만들고 싶은 것이 있다면 메일로 연락 주세요.",email:"hong@example.com",phone:"",location:"",align:"center",big:!0},fields:[{key:"title",label:"제목",type:"text"},{key:"body",label:"안내 문구",type:"textarea"},{key:"email",label:"이메일",type:"text"},{key:"phone",label:"전화 (비워도 됩니다)",type:"text"},{key:"location",label:"지역 (비워도 됩니다)",type:"text"},{key:"big",label:"이메일을 크게",type:"boolean"},{key:"align",label:"정렬",type:"select",options:["start","center"]}]},cover:{group:"배너",label:"Cover Banner",pad:0,tag:"section",tagLabel:"배너 · Cover",hint:"큰 이미지 + 문구",color:"#f43f5e",h:260,defaults:{image:null,title:"만드는 사람",sub:"",height:320,align:"center",valign:"center",overlay:.42,kenBurns:!0,zoomOnScroll:!1},fields:[{key:"image",label:"배경 이미지",type:"image"},{key:"title",label:"문구",type:"textarea"},{key:"sub",label:"작은 문구",type:"text"},{key:"height",label:"높이",type:"range",min:140,max:720,step:10,unit:"px"},{key:"align",label:"가로 정렬",type:"select",options:["start","center","end"]},{key:"valign",label:"세로 정렬",type:"select",options:["start","center","end"]},{key:"overlay",label:"어둡게 (글자 가독성)",type:"range",min:0,max:.85,step:.01},{key:"kenBurns",label:"천천히 확대 (켄번즈)",type:"boolean"},{key:"zoomOnScroll",label:"스크롤 따라 확대",type:"boolean"}]},marquee:{group:"배너",label:"Marquee Banner",pad:0,tag:"section",tagLabel:"배너 · Marquee",hint:"큰 글씨가 흐르는 띠",color:"#14b8a6",h:96,defaults:{text:"AVAILABLE FOR WORK",sep:"✦",speed:26,size:2.6,reverse:!1,outline:!1,pauseOnHover:!0},fields:[{key:"text",label:"문구",type:"text"},{key:"sep",label:"사이 기호",type:"text"},{key:"size",label:"글자 크기",type:"range",min:1,max:8,step:.1,unit:"em"},{key:"speed",label:"한 바퀴 시간",type:"range",min:6,max:80,step:2,unit:"s"},{key:"reverse",label:"반대 방향",type:"boolean"},{key:"outline",label:"윤곽 글자",type:"boolean"},{key:"pauseOnHover",label:"올리면 멈춤",type:"boolean"}]},cta:{group:"배너",label:"CTA Banner",pad:44,tag:"section",tagLabel:"배너 · CTA",hint:"행동 유도 + 버튼",color:"#8b5cf6",h:190,defaults:{title:"함께 만들 것이 있으신가요?",sub:"메일 한 통이면 시작입니다.",cta:"연락하기",ctaHref:"",ctaFile:null,ctaKind:"채움",ctaBg:"",ctaText:"",ctaRadius:10,ctaScale:1.15,align:"center",gradient:!1},fields:[{key:"title",label:"제목",type:"text"},{key:"sub",label:"보조 문구",type:"text"},{key:"cta",label:"버튼 글자",type:"text"},{key:"ctaHref",label:"버튼 주소 (비우면 연락처로)",type:"text"},{key:"ctaFile",label:"또는 파일 (PDF 등)",type:"file"},{key:"ctaKind",label:"버튼 모양",type:"select",options:["채움","윤곽","글자만"]},{key:"ctaBg",label:"버튼 색 (비우면 테마 강조색)",type:"color"},{key:"ctaText",label:"버튼 글자 색",type:"color"},{key:"ctaRadius",label:"버튼 모서리",type:"range",min:0,max:40,step:1,unit:"px"},{key:"ctaScale",label:"버튼 크기",type:"range",min:.8,max:1.8,step:.05},{key:"align",label:"정렬",type:"select",options:["start","center"]},{key:"gradient",label:"배경 그라디언트 흐름",type:"boolean"}]},slider:{group:"배너",label:"Slider Banner",pad:0,tag:"section",tagLabel:"배너 · Slider",hint:"여러 장이 넘어가는 배너",color:"#e879f9",h:300,defaults:{items:[{image:null,title:"첫 번째 슬라이드",sub:"문구를 바꿔 보세요",cta:"",href:""},{image:null,title:"두 번째 슬라이드",sub:"",cta:"",href:""},{image:null,title:"세 번째 슬라이드",sub:"",cta:"",href:""}],transition:"밀기",height:340,overlay:.42,align:"center",valign:"center",autoplay:!0,interval:5,speed:600,pauseOnHover:!0,loop:!0,dots:!0,arrows:!0,kenBurns:!1},fields:[{key:"items",label:"슬라이드",type:"list",itemLabel:"슬라이드",itemDefaults:{image:null,title:"새 슬라이드",sub:"",cta:"",href:""},itemFields:[{key:"title",label:"문구",type:"text"},{key:"sub",label:"작은 문구",type:"text"},{key:"image",label:"배경 이미지",type:"image"},{key:"cta",label:"버튼 글자",type:"text"},{key:"href",label:"버튼 주소",type:"text"}]},{key:"transition",label:"전환 방식",type:"select",options:["밀기","페이드","덮기","확대","자유 스크롤"]},{key:"height",label:"높이",type:"range",min:160,max:720,step:10,unit:"px"},{key:"overlay",label:"어둡게 (글자 가독성)",type:"range",min:0,max:.85,step:.01},{key:"align",label:"가로 정렬",type:"select",options:["start","center","end"]},{key:"valign",label:"세로 정렬",type:"select",options:["start","center","end"]},{key:"autoplay",label:"자동 넘김 (결과물에서)",type:"boolean"},{key:"interval",label:"넘김 간격",type:"range",min:2,max:15,step:.5,unit:"s"},{key:"speed",label:"전환 시간",type:"range",min:200,max:1500,step:50,unit:"ms"},{key:"pauseOnHover",label:"올리면 멈춤",type:"boolean"},{key:"loop",label:"무한 반복",type:"boolean"},{key:"dots",label:"점 표시기",type:"boolean"},{key:"arrows",label:"좌우 화살표",type:"boolean"},{key:"kenBurns",label:"천천히 확대 (켄번즈)",type:"boolean"}]},links:{group:"마무리",label:"Links",pad:28,tag:"section",hint:"외부 링크 · SNS",color:"#38bdf8",h:150,defaults:{title:"Links",style:"buttons",align:"start",newTab:!0,items:[{label:"GitHub",url:"github.com/"},{label:"Instagram",url:"instagram.com/"},{label:"Notion",url:""}]},fields:[{key:"title",label:"제목",type:"text"},{key:"items",label:"링크",type:"list",itemLabel:"링크",itemDefaults:{label:"새 링크",url:"",file:null},itemFields:[{key:"label",label:"이름",type:"text"},{key:"url",label:"주소",type:"text"},{key:"file",label:"또는 파일 (PDF 등)",type:"file"}]},{key:"style",label:"모양",type:"select",options:["buttons","text","list"]},{key:"align",label:"정렬",type:"select",options:["start","center"]},{key:"newTab",label:"새 탭에서 열기",type:"boolean"}]},footer:{group:"마무리",label:"Footer",pad:24,tag:"footer",hint:"연락처 · 저작권",color:"#8b93ad",h:110,nav:!0,defaults:{text:"© 2026 홍길동",email:"hong@example.com",showMenu:!0,align:"space-between",showTime:!1,timeCity:"Seoul",timeZone:"Asia/Seoul"},fields:[{key:"text",label:"문구",type:"text"},{key:"email",label:"이메일",type:"text"},{key:"showMenu",label:"메뉴 표시",type:"boolean"},{key:"showTime",label:"로컬 타임 표시 (Seoul, 14:32)",type:"boolean"},{key:"timeCity",label:"도시 이름 (표시용)",type:"text"},{key:"timeZone",label:"시간대 (예: Asia/Seoul)",type:"text"},{key:"align",label:"정렬",type:"select",options:$o}]}};function hm(e,n){let r;try{r=new Intl.DateTimeFormat("ko-KR",{hour:"2-digit",minute:"2-digit",hour12:!1,timeZone:n||void 0}).format(new Date)}catch{r=new Intl.DateTimeFormat("ko-KR",{hour:"2-digit",minute:"2-digit",hour12:!1}).format(new Date)}return`${e||"Seoul"}, ${r}`}for(const[e,n]of Object.entries(Kn))n.freeItems=e!=="model";const R0=["머리","본문","배너","마무리","3D"],M0=Object.entries(Kn).map(([e,n])=>({id:e,...n})),Ft=e=>{var n;return{...((n=Kn[e])==null?void 0:n.defaults)??{}}};function Et(e){const n=String(e??"").trim();return n?/^(https?:|mailto:|tel:|#|\/)/i.test(n)?n:/^[\w.+-]+@[\w-]+\.[\w.]+$/.test(n)?`mailto:${n}`:`https://${n}`:""}function xm(e=[],n=3,r=0){const t=Array.isArray(e)?e:[];if(!r)return t.map((o,i)=>({item:o,index:i}));const a=Math.max(n*r,t.length);return Array.from({length:a},(o,i)=>({item:t[i]??null,index:i}))}const gm=(e,n="section")=>String(e??"").trim().toLowerCase().replace(/[^a-z0-9가-힣]+/g,"-").replace(/^-+|-+$/g,"")||n,vm=["section","gallery","links","main"],T0={밀기:"slide",페이드:"fade",덮기:"cover",확대:"zoom","자유 스크롤":"scroll"},ym=e=>T0[e]??"slide",wm=e=>`sld-${e}`,Pr=(e,n)=>`sld-${e}-${n}`,bm=12,bs=(e,n)=>`detail-${e}-${n+1}`,_m=e=>{const n=String(e??"").replace(/\s+/g," ").trim();return n.length>18?`${n.slice(0,18)}…`:n},z0=e=>{var n;return(n=e==null?void 0:e.file)!=null&&n.id?{file:e.file}:{url:Et(e==null?void 0:e.url)}},km=e=>String(e??"").trim().replace(/^https?:\/\//i,"").replace(/\/+$/,""),Sm=(e,n)=>Number(n)>0?Number(n):e,P0=["왼쪽","가운데","오른쪽","양끝 정렬","고르게","자유"],A0=["늘리기","위","가운데","아래"],_s=e=>({위:"start",가운데:"center",아래:"end"})[e]??"",D0=["배치","상자","배경"],O0=[{key:"radius",group:"상자",label:"모서리",type:"range",min:0,max:40,step:1,unit:"px"},{key:"padding",group:"상자",label:"안쪽 여백",type:"range",min:0,max:96,step:2,unit:"px"},{key:"minHeight",group:"상자",label:"최소 높이",type:"range",min:0,max:800,step:10,unit:"px"},{key:"border",group:"상자",label:"테두리",type:"range",min:0,max:6,step:.5,unit:"px"},{key:"z",group:"상자",pro:!0,label:"레이어 순서",type:"range",min:0,max:20,step:1},{key:"free",group:"배치",label:"영역 안 자유 배치 (항목 끌기)",type:"boolean"},{key:"rowAlign",group:"배치",label:"이 행의 가로 배치",type:"select",options:P0},{key:"alignY",group:"배치",label:"세로 배치",type:"select",options:A0},{key:"bg",group:"배경",label:"배경 색",type:"color"},{key:"bgShift",group:"배경",pro:!0,label:"스크롤 배경 전환색 (페이지가 물듦)",type:"color"},{key:"bgSee",group:"배경",pro:!0,label:"사이트 배경 비침",type:"range",min:0,max:1,step:.05},{key:"bgImage",group:"배경",label:"배경 이미지",type:"image"},{key:"bgDim",group:"배경",label:"배경 어둡게",type:"range",min:0,max:.85,step:.05}],ks={radius:0,padding:24,minHeight:0,border:1,z:0,bg:"",bgShift:"",bgSee:0,bgImage:null,bgDim:0,free:!1,itemPos:null,colSpan:0,rowAlign:"왼쪽",colAt:null,alignY:"늘리기"};function jm(e,n){const r=/^#?([0-9a-f]{6})$/i.exec(e??"");if(!r)return e??"";const t=parseInt(r[1],16),a=Math.max(0,Math.min(1,1-(n||0)));return`rgba(${t>>16&255}, ${t>>8&255}, ${t&255}, ${+a.toFixed(3)})`}function Ss(e){const n={},r=(e==null?void 0:e.ctaKind)??"채움",t=Number(e==null?void 0:e.ctaScale)||1;return e!=null&&e.ctaBg&&(n["--wf-accent"]=e.ctaBg),r==="윤곽"?(n.background="transparent",n.border="2px solid var(--wf-accent)",n.color=(e==null?void 0:e.ctaText)||"var(--wf-accent)"):r==="글자만"?(n.background="transparent",n.color=(e==null?void 0:e.ctaText)||"var(--wf-accent)",n.textDecoration="underline",n.textUnderlineOffset="4px"):e!=null&&e.ctaText&&(n.color=e.ctaText),(e==null?void 0:e.ctaRadius)!==void 0&&(e==null?void 0:e.ctaRadius)!==null&&(n.borderRadius=`${e.ctaRadius}px`),t!==1?(n.fontSize=`${(.9333*t).toFixed(3)}em`,n.padding=r==="글자만"?"0.3em 0.2em":"0.79em 1.71em"):r==="글자만"&&(n.padding="4px 2px"),n}function Em(e,n){var t,a;const r=(a=(t=/\.(hdr|exr)$/i.exec(n??""))==null?void 0:t[1])==null?void 0:a.toLowerCase();return!e||!r||new RegExp(`\\.${r}$`,"i").test(e)?e:`${e}#.${r}`}function Cm(e,n){var a;if(!n)return{};const r=(e==null?void 0:e.bgDim)||0,t=`url('${n}')`;return{backgroundImage:r?`linear-gradient(rgba(0,0,0,${r}),rgba(0,0,0,${r})), ${t}`:t,backgroundSize:((a=e==null?void 0:e.bgImage)==null?void 0:a.fit)==="contain"?"contain":"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}const F0=[{key:"font",label:"글꼴",type:"select",options:["상속","모던 산세리프","초대형 타이틀","세리프","모노스페이스","Geist","Manrope","DM Sans","Instrument Serif","Fraunces","내 글꼴 (업로드)"]},{key:"fs",label:"글자 크기",type:"range",min:10,max:30,step:.5,unit:"px"},{key:"weight",label:"굵기",type:"select",options:["상속",300,400,500,600,700,800]},{key:"tracking",label:"자간",type:"range",min:-4,max:6,step:.2,unit:"px"},{key:"leading",label:"행간",type:"range",min:1,max:2.4,step:.05},{key:"align",label:"글자 정렬",type:"select",options:["상속","left","center","right"]},{key:"color",label:"글자 색",type:"color"}],_l={font:"상속",fs:15,weight:"상속",tracking:0,leading:1.55,align:"상속",color:""};function Nm(e,n){if(!e)return{};const r={};return e.font&&e.font!=="상속"&&(r.fontFamily=n(e.font)),e.fs&&e.fs!==_l.fs&&(r["--wf-fs"]=`${e.fs}px`),e.weight&&e.weight!=="상속"&&(r.fontWeight=e.weight),e.tracking&&(r.letterSpacing=`${e.tracking}px`),e.leading&&e.leading!==_l.leading&&(r.lineHeight=e.leading),e.align&&e.align!=="상속"&&(r.textAlign=e.align),e.color&&(r.color=e.color),r}const I0=[{key:"radius",label:"모서리",type:"range",min:0,max:40,step:1,unit:"px"},{key:"gap",label:"영역 간격 (거터)",type:"range",min:0,max:40,step:2,unit:"px"},{key:"padding",label:"안쪽 여백",type:"range",min:0,max:96,step:2,unit:"px"},{key:"marginX",label:"바깥 여백 (마진)",type:"range",min:0,max:120,step:2,unit:"px"},{key:"maxWidth",label:"콘텐츠 최대 폭",type:"range",min:640,max:1600,step:20,unit:"px"},{key:"border",label:"테두리",type:"range",min:0,max:6,step:.5,unit:"px"},{key:"gridGuide",label:"그리드 가이드 보기 (편집 화면 전용)",type:"boolean"},{key:"gridCols",label:"가이드 컬럼 수",type:"range",min:2,max:16,step:1,unit:"칸"}],$m={radius:0,gap:10,padding:24,marginX:10,maxWidth:1120,border:1,gridGuide:!1,gridCols:12},yt={reveal:{label:"스크롤 등장",icon:"↑",tier:"T0",cost:"0KB",desc:"화면에 들어올 때 나타납니다",module:"./effects/scroll-reveal/react.jsx",component:"Reveal",appliesTo:["topheader","nav","header","hero","aside","main","section","gallery","links","contact","footer","cover","marquee","cta","slider"],defaults:{preset:"rise",duration:700,delay:0,distance:28,rotate:22,scale:.92,threshold:.15,repeat:!1},schema:[{key:"preset",label:"프리셋",type:"select",options:["rise","depth","flip","swing","zoom"]},{key:"duration",label:"시간",type:"range",min:200,max:1600,step:50,unit:"ms"},{key:"delay",label:"지연",type:"range",min:0,max:1e3,step:25,unit:"ms"},{key:"distance",label:"올라오는 거리",type:"range",min:0,max:120,step:4,unit:"px"},{key:"rotate",label:"회전",type:"range",min:0,max:90,step:2,unit:"°"},{key:"scale",label:"시작 배율",type:"range",min:.5,max:1,step:.02},{key:"threshold",label:"등장 지점",type:"range",min:0,max:1,step:.05},{key:"repeat",label:"반복",type:"boolean"}]},silk:{label:"실크 배경",icon:"≋",tier:"T2",cost:"~8KB",desc:"WebGL 셰이더 그라디언트 (OGL 지연 로드)",module:"./effects/silk-bg/react.jsx",component:"SilkBackground",appliesTo:["hero","section","gallery","contact","cover","cta"],needsClass:"fx-silk",themeColors:"silk",defaults:{speed:.12,scale:2.2,swirl:3.2,grain:.035,mouse:!0,alpha:1},schema:[{key:"speed",label:"속도",type:"range",min:.02,max:.5,step:.01},{key:"scale",label:"무늬 크기",type:"range",min:.5,max:6,step:.1},{key:"swirl",label:"휘감김",type:"range",min:0,max:8,step:.1},{key:"grain",label:"그레인",type:"range",min:0,max:.12,step:.005},{key:"alpha",label:"투명도",type:"range",min:.1,max:1,step:.05},{key:"mouse",label:"마우스 반응",type:"boolean"}]},dots:{label:"도트 웨이브",icon:"⋯",tier:"T1",cost:"0KB",desc:"물결치는 점 격자 배경",module:"./effects/dot-grid-wave/react.jsx",component:"DotGridWave",appliesTo:["hero","section","gallery","contact","cover","cta"],needsClass:"fx-dots",defaults:{spacing:28,radius:1.7,opacity:.5,depth:34,speed:1,angle:38,ripple:.35,pointer:!0},schema:[{key:"spacing",label:"점 간격",type:"range",min:14,max:60,step:2,unit:"px"},{key:"radius",label:"점 크기",type:"range",min:.5,max:5,step:.1,unit:"px"},{key:"opacity",label:"불투명도",type:"range",min:0,max:1,step:.05},{key:"depth",label:"파동 깊이",type:"range",min:0,max:120,step:4,unit:"px"},{key:"speed",label:"속도",type:"range",min:.1,max:3,step:.1},{key:"angle",label:"진행 방향",type:"range",min:0,max:360,step:5,unit:"°"},{key:"ripple",label:"원형 파동",type:"range",min:0,max:1,step:.05},{key:"pointer",label:"커서 반응",type:"boolean"}]},spotlight:{label:"스포트라이트",icon:"◎",tier:"T1",cost:"0KB",desc:"커서를 따라오는 은은한 빛 (CSS 변수)",module:"./effects/spotlight/react.jsx",component:"Spotlight",appliesTo:["hero","section","gallery","contact","cover","cta"],needsClass:"fx-spotlight",defaults:{size:420,strength:.22,color:""},schema:[{key:"size",label:"광원 크기",type:"range",min:200,max:800,step:20,unit:"px"},{key:"strength",label:"세기",type:"range",min:.05,max:.6,step:.01},{key:"color",label:"색 (비우면 테마 강조색)",type:"color"}]},starfield:{label:"별하늘 배경",icon:"✦",tier:"T1",cost:"0KB",desc:"잔잔히 반짝이는 캔버스 별 — 어두운 테마에서 최고",module:"./effects/starfield/react.jsx",component:"Starfield",appliesTo:["hero","section","gallery","contact","cover","cta"],needsClass:"fx-starfield",defaults:{density:1,speed:6,twinkle:.6,size:1.2,color:""},schema:[{key:"density",label:"별 밀도",type:"range",min:.3,max:3,step:.1},{key:"speed",label:"표류 속도",type:"range",min:0,max:30,step:1},{key:"twinkle",label:"반짝임",type:"range",min:0,max:1,step:.05},{key:"size",label:"별 크기",type:"range",min:.5,max:3,step:.1},{key:"color",label:"별 색 (비우면 테마 색)",type:"color"}]},tilt:{label:"틸트 카드",icon:"◈",tier:"T1",cost:"0KB",desc:"카드가 커서를 따라 기울어집니다",module:"./effects/tilt-card/react.jsx",component:"TiltCard",appliesTo:["gallery","main"],target:".wf-card, .wf-main__slot",defaults:{maxTilt:12,perspective:900,scale:1.02,speed:12,glare:!0,maxGlare:.35,axis:"both"},schema:[{key:"maxTilt",label:"최대 기울기",type:"range",min:0,max:30,step:1,unit:"°"},{key:"perspective",label:"원근",type:"range",min:300,max:2e3,step:50,unit:"px"},{key:"scale",label:"확대",type:"range",min:1,max:1.15,step:.01},{key:"speed",label:"따라오는 속도",type:"range",min:2,max:24,step:1},{key:"axis",label:"축",type:"select",options:["both","x","y"]},{key:"glare",label:"글레어",type:"boolean"},{key:"maxGlare",label:"글레어 세기",type:"range",min:0,max:1,step:.05}]},magnetic:{label:"자석 버튼",icon:"⌾",tier:"T1",cost:"0KB",desc:"커서를 끌어당기는 CTA",module:"./effects/magnetic-button/react.jsx",component:"MagneticButton",appliesTo:["hero","header","footer","links","contact","cta"],target:".wf-btn, .wf-link, .wf-contact__mail",defaults:{strength:.35,radius:110,labelFactor:.5,scale:1.04,rotate:6,speed:11,glow:!0},schema:[{key:"strength",label:"자력",type:"range",min:0,max:1,step:.05},{key:"radius",label:"자력 반경",type:"range",min:20,max:300,step:10,unit:"px"},{key:"labelFactor",label:"라벨 추가 이동",type:"range",min:0,max:2,step:.1},{key:"scale",label:"확대",type:"range",min:1,max:1.2,step:.01},{key:"rotate",label:"기울기",type:"range",min:0,max:20,step:1,unit:"°"},{key:"speed",label:"따라오는 속도",type:"range",min:2,max:24,step:1},{key:"glow",label:"빛 번짐",type:"boolean"}]},flip:{label:"플립 카드",icon:"⇄",tier:"T0",cost:"0KB",desc:"카드가 뒤집혀 뒷면을 보여줍니다",module:"./effects/flip-card/react.jsx",component:"FlipCard",appliesTo:["gallery"],target:".wf-card",needsFaces:!0,defaults:{trigger:"both",axis:"y",direction:1,duration:600,perspective:1400,flipOnFocus:!0,asButton:!1},schema:[{key:"trigger",label:"작동",type:"select",options:["both","hover","click"]},{key:"axis",label:"축",type:"select",options:["y","x"]},{key:"direction",label:"방향",type:"select",options:[1,-1]},{key:"duration",label:"회전 시간",type:"range",min:200,max:1200,step:50,unit:"ms"},{key:"perspective",label:"원근",type:"range",min:600,max:2400,step:100,unit:"px"},{key:"flipOnFocus",label:"키보드 포커스로 뒤집기",type:"boolean"}]},preview:{label:"호버 프리뷰",icon:"▣",tier:"T1",cost:"0KB",desc:"카드 위에서 그림이 커서를 따라 뜹니다",module:"./effects/hover-preview/react.jsx",component:"HoverPreview",appliesTo:["gallery"],defaults:{width:240,speed:.16,offsetX:24,offsetY:-20,rotate:3},schema:[{key:"width",label:"프리뷰 폭",type:"range",min:120,max:480,step:10,unit:"px"},{key:"speed",label:"따라오는 속도",type:"range",min:.05,max:.5,step:.01},{key:"rotate",label:"기울기",type:"range",min:0,max:12,step:1,unit:"°"},{key:"offsetX",label:"커서에서 가로 거리",type:"range",min:-80,max:120,step:4,unit:"px"},{key:"offsetY",label:"커서에서 세로 거리",type:"range",min:-120,max:80,step:4,unit:"px"}]},scramble:{label:"텍스트 스크램블",icon:"⌗",tier:"T1",cost:"0KB",desc:"랜덤 문자가 제목으로 수렴합니다",module:"./effects/text-scramble/react.jsx",component:"TextScramble",appliesTo:["hero","section","aside","cta"],target:".wf-hero__title, .wf-sec__title, .wf-aside__name",defaults:{duration:1400,churn:.28,delay:0,repeat:!0},schema:[{key:"duration",label:"재생 시간",type:"range",min:300,max:2400,step:100,unit:"ms"},{key:"churn",label:"지글거림",type:"range",min:.05,max:1,step:.05},{key:"delay",label:"지연",type:"range",min:0,max:1500,step:50,unit:"ms"},{key:"repeat",label:"다시 들어오면 반복",type:"boolean"}]},parallax:{label:"패럴랙스",icon:"⧉",tier:"T1",cost:"0KB",desc:"마우스·스크롤에 따라 층이 어긋나 움직입니다",module:"./effects/parallax-layers/react.jsx",component:"ParallaxScene",appliesTo:["hero","section","gallery","cover"],layerTargets:!0,defaults:{mouse:!0,mouseStrength:26,scroll:!0,scrollStrength:70,depth:0,perspective:1200,speed:9},schema:[{key:"mouseStrength",label:"마우스 이동",type:"range",min:0,max:80,step:2,unit:"px"},{key:"scrollStrength",label:"스크롤 이동",type:"range",min:0,max:200,step:5,unit:"px"},{key:"depth",label:"입체 높이",type:"range",min:0,max:200,step:5,unit:"px"},{key:"perspective",label:"원근",type:"range",min:400,max:2400,step:100,unit:"px"},{key:"speed",label:"따라오는 속도",type:"range",min:2,max:24,step:1},{key:"mouse",label:"마우스 반응",type:"boolean"},{key:"scroll",label:"스크롤 반응",type:"boolean"}]}},Lm=Object.entries(yt).map(([e,n])=>({id:e,...n})),Lo=e=>{var n;return JSON.parse(JSON.stringify(((n=yt[e])==null?void 0:n.defaults)??{}))},no=(e,n)=>{var r;return((r=yt[e])==null?void 0:r.appliesTo.includes(n))??!1},id=e=>Lm.filter(n=>n.appliesTo.includes(e)),B0={hero:"실크 배경이나 패럴랙스 하나 + 버튼에 자석. 첫 화면은 하나만 크게 쓰는 편이 낫습니다.",gallery:"카드에 기울기 또는 뒤집기. 둘을 같이 켜면 서로 싸웁니다.",section:"스크롤 등장으로 충분합니다. 배경까지 넣으면 글이 안 읽힙니다.",main:"슬롯마다 기울기.",links:"칩에 자석. 누를 수 있다는 느낌을 줍니다.",contact:"이메일에 자석, 또는 실크 배경으로 마지막 화면을 마무리.",aside:"스크롤 등장만. 좁은 칸에 배경 효과는 답답합니다.",topheader:"스크롤 등장만.",nav:"스크롤 등장만.",header:"버튼에 자석.",footer:"스크롤 등장이나 버튼에 자석."},ld=e=>B0[e]??"",kl={silk:"background",dots:"background",starfield:"background"},W0=e=>kl[e]??null;function Rm(e){const n=W0(e);return n?Object.keys(kl).filter(r=>r!==e&&kl[r]===n):[]}const xe=(e,n,r,t=0)=>({id:e,col:n,row:r,minH:t}),Vt=[{id:"t-fullpage",label:"풀페이지 섹션",source:"port11 · 13 · 15 · 16 · 17",tagline:"가장 흔한 형태",desc:"고정 내비 아래로 섹션이 쭉 쌓입니다. 17개 중 5개가 이 구조였습니다.",cols:"1fr",rows:"auto auto auto auto auto",sticky:"a",regions:[xe("a","1","1",56),xe("b","1","2",460),xe("c","1","3",300),xe("d","1","4",320),xe("e","1","5",110)],fills:{a:"nav",b:"hero",c:"section",d:"gallery",e:"footer"},content:{c:{title:"About",body:`3년차 프론트엔드 개발자입니다.
디자인 시스템과 3D 인터랙션을 주로 다룹니다.`}}},{id:"t-sidemenu",label:"좌측 메뉴 고정",source:"port1",tagline:"메뉴가 늘 보임",desc:"왼쪽에 메뉴를 붙박이로 두고 오른쪽만 스크롤합니다.",cols:"230px 1fr",rows:"auto 1fr auto",sticky:"a",regions:[xe("a","1","1 / -1",420),xe("b","2","1",400),xe("c","2","2",380),xe("d","2","3",100)],fills:{a:"aside",b:"hero",c:"gallery",d:"footer"}},{id:"t-classic12",label:"클래식 3분할",source:"port3",tagline:"상단바 + 히어로 + 3열",desc:"고정 상단바 아래 히어로, 그 아래 3열 본문. 부트스트랩 시절의 정석입니다.",cols:"repeat(3, 1fr)",rows:"auto auto auto auto",sticky:"a",regions:[xe("a","1 / -1","1",64),xe("b","1 / -1","2",360),xe("c","1","3",260),xe("d","2","3",260),xe("e","3","3",260),xe("f","1 / -1","4",100)],fills:{a:"header",b:"hero",c:"section",d:"section",e:"section",f:"footer"},content:{c:{title:"About",body:"3년차 프론트엔드 개발자입니다."},d:{title:"Skills",body:"",listStyle:"tags"},e:{title:"Contact",body:`hong@example.com
github.com/hong`}}},{id:"t-hero4",label:"히어로 + 4분할",source:"port12",tagline:"큰 첫 화면, 4칸 요약",desc:"큰 히어로 아래 4칸이 나란히. 카테고리가 네 개로 딱 떨어질 때 좋습니다.",cols:"repeat(4, 1fr)",rows:"auto auto auto",sticky:"a",regions:[xe("a","1 / -1","1",56),xe("b","1 / -1","2",480),xe("c","1","3",260),xe("d","2","3",260),xe("e","3","3",260),xe("f","4","3",260)],fills:{a:"nav",b:"hero",c:"section",d:"section",e:"section",f:"section"},content:{c:{title:"About",body:"무엇을 만드는 사람인지."},d:{title:"Skills",body:"",listStyle:"tags"},e:{title:"Career",body:"",listStyle:"timeline"},f:{title:"Contact",body:"hong@example.com"}}},{id:"t-railnav",label:"얇은 세로바",source:"port7",tagline:"왼쪽 끝 세로 내비",desc:"왼쪽 끝에 아주 좁은 세로 바를 두고 본문을 넓게 씁니다.",cols:"76px 1fr",rows:"auto 1fr auto",sticky:"a",regions:[xe("a","1","1 / -1",480),xe("b","2","1",420),xe("c","2","2",420),xe("d","2","3",100)],fills:{a:"nav",b:"hero",c:"gallery",d:"footer"}},{id:"t-overlay",label:"오버레이 메뉴",source:"port10 · port15",tagline:"햄버거 + 전체화면",desc:"얇은 상단 바에 햄버거만 두고 첫 화면을 꽉 채웁니다.",cols:"1fr",rows:"auto 1fr auto auto",sticky:"a",regions:[xe("a","1","1",48),xe("b","1","2",560),xe("c","1","3",360),xe("d","1","4",100)],fills:{a:"topheader",b:"hero",c:"gallery",d:"footer"}},{id:"t-desktop",label:"데스크톱 아이콘",source:"port8",tagline:"OS 흉내내기",desc:"맨 위 상태바와 아이콘 격자, 맨 아래 독. 개성이 강한 대신 호불호가 갈립니다.",cols:"1fr",rows:"auto 1fr auto",regions:[xe("a","1","1",40),xe("b","1","2",480),xe("c","1","3",84)],fills:{a:"topheader",b:"main",c:"footer"},content:{b:{columns:4,gap:24,items:[{label:"About"},{label:"Works"},{label:"Resume"},{label:"Contact"}]}}},{id:"t-triple",label:"3단 분할",source:"port6",tagline:"좌 · 중앙 · 우",desc:"양쪽에 보조 영역을 두고 가운데를 본문으로. 정보가 많을 때 씁니다.",cols:"210px 1fr 210px",rows:"auto 1fr auto",sticky:"a",regions:[xe("a","1","1 / 3",420),xe("b","2","1",360),xe("c","2","2",380),xe("d","3","1 / 3",420),xe("e","1 / -1","3",100)],fills:{a:"aside",b:"hero",c:"gallery",d:"section",e:"footer"},content:{d:{title:"Skills",body:"",listStyle:"tags"}}},{id:"t-layerhero",label:"레이어 히어로",source:"port9",tagline:"내비 없이 첫 화면부터",desc:"상단 바 없이 히어로가 화면을 다 차지합니다. 패럴랙스와 잘 맞습니다.",cols:"1fr",rows:"auto auto auto auto",regions:[xe("a","1","1",640),xe("b","1","2",320),xe("c","1","3",360),xe("d","1","4",100)],fills:{a:"hero",b:"section",c:"gallery",d:"footer"},content:{a:{titleScale:1.4}},fx:{a:[{name:"parallax",options:{}}]}},{id:"t-bands",label:"비대칭 밴드",source:"port4",tagline:"2:1 → 1:2 교차",desc:"넓은 칸과 좁은 칸을 위아래로 엇갈리게 둡니다. 단조로움이 덜합니다.",cols:"repeat(6, 1fr)",rows:"auto auto auto auto",sticky:"a",regions:[xe("a","1 / -1","1",56),xe("b","1 / 5","2",340),xe("c","5 / -1","2",340),xe("d","1 / 3","3",340),xe("e","3 / -1","3",340),xe("f","1 / -1","4",100)],fills:{a:"nav",b:"hero",c:"section",d:"section",e:"gallery",f:"footer"},content:{c:{title:"About",body:"3년차 프론트엔드 개발자입니다."},d:{title:"Career",body:"",listStyle:"timeline"}}}],cd=e=>Vt.find(n=>n.id===e)??null,De=(e,n,r,t=0)=>({id:e,col:n,row:r,minH:t}),Sl=[{id:"stack",label:"단순 스택",tagline:"위에서 아래로",desc:"가장 흔한 1단 구성. 영역 4개.",cols:"1fr",rows:"auto auto 1fr auto",regions:[De("a","1","1",48),De("b","1","2",200),De("c","1","3",260),De("d","1","4",80)]},{id:"sidebar-left",label:"좌측 사이드바",tagline:"목차를 옆에",desc:"상단바 아래 사이드바와 본문이 나란히. 영역 4개.",cols:"240px 1fr",rows:"auto 1fr auto",regions:[De("a","1 / -1","1",56),De("b","1","2",320),De("c","2","2",320),De("d","1 / -1","3",80)]},{id:"sidebar-right",label:"우측 사이드바",tagline:"본문이 먼저",desc:"본문을 왼쪽에 두고 보조 정보를 오른쪽에. 영역 4개.",cols:"1fr 260px",rows:"auto 1fr auto",regions:[De("a","1 / -1","1",56),De("b","1","2",320),De("c","2","2",320),De("d","1 / -1","3",80)]},{id:"hero-split",label:"히어로 + 2단",tagline:"첫 화면을 크게",desc:"상단바 · 큰 히어로 · 2단 본문 · 푸터. 영역 5개.",cols:"1fr 1fr",rows:"auto auto 1fr auto",regions:[De("a","1 / -1","1",56),De("b","1 / -1","2",240),De("c","1","3",240),De("d","2","3",240),De("e","1 / -1","4",80)]},{id:"sticky-split",label:"고정 2단",tagline:"왼쪽 고정 · 오른쪽 스크롤",desc:"이름과 목차를 왼쪽에 붙박이로 두는 개발자 포트폴리오 정석. 영역 3개.",cols:"380px 1fr",rows:"1fr auto",sticky:"b",regions:[De("b","1","1 / -1",420),De("c","2","1",640),De("d","2","2",90)]},{id:"magazine",label:"매거진 3단",tagline:"정보가 많을 때",desc:"상단바 아래 3단. 작업물이 많을 때 좋습니다. 영역 5개.",cols:"1fr 1fr 1fr",rows:"auto auto 1fr auto",regions:[De("a","1 / -1","1",56),De("b","1 / -1","2",180),De("c","1","3",260),De("d","2","3",260),De("e","3","3",260)]}],H0="stack",ht=e=>Sl.find(n=>n.id===e)??Vt.find(n=>n.id===e)??Sl[0];function Mm(e,n){const r=x=>{const d=parseInt(String(x??"1"),10);return Number.isFinite(d)?d:1},t=String(e.rows??"").trim().split(/\s+/).filter(Boolean),a=Math.max(t.length,...e.regions.map(x=>r(x.row)),1),o=x=>{var m;const d=(m=String(x??"").split("/")[1])==null?void 0:m.trim();return d?d==="-1"?a+1:parseInt(d,10)||null:null},i=new Set;for(const x of e.regions)n[x.id]&&i.add(r(x.row));const l=[...i].sort((x,d)=>x-d),f=new Map(l.map((x,d)=>[x,d+1])),u={};for(const x of e.regions){if(!n[x.id])continue;const d=f.get(r(x.row)),m=o(x.row),w=m==null?null:l.filter(v=>v<=m-1).pop();u[x.id]={col:String(x.col??"auto"),row:m==null?String(d):`${d} / ${f.get(w)+1}`}}return{rows:l.map(x=>t[x-1]??"auto").join(" ")||null,place:u}}function Tm(e){const n=[],r=/repeat\(\s*(\d+)\s*,\s*([^)]+)\)|(\S+)/g;let t;for(;t=r.exec(String(e??"1fr").trim());){if(t[3]){n.push(t[3]);continue}const a=t[2].trim().split(/\s+/).filter(Boolean);for(let o=0;o<Number(t[1]);o++)n.push(...a)}return n.length?n:["1fr"]}const Tc=e=>Tm(e).length;function U0(e,n){const[r,t]=String(e??"1").split("/").map(i=>i.trim()),a=Math.max(1,parseInt(r,10)||1);let o;return t?t==="-1"?o=n+1:/^span\b/.test(t)?o=a+(parseInt(t.slice(4),10)||1):o=parseInt(t,10)||a+1:o=a+1,{start:a,span:Math.max(1,o-a)}}function Gs(e){const n=Tc(e.cols),r=new Map;for(const t of e.regions){const a=parseInt(String(t.row??"1"),10)||1;r.has(a)||r.set(a,[]),r.get(a).push({id:t.id,...U0(t.col,n)})}for(const t of r.values())t.sort((a,o)=>a.start-o.start);return r}function zm(e){const n=Tm(e);return/^\d*\.?\d+fr$/.test(n[0])&&n.every(r=>r===n[0])?n.length:0}const lt=12,fd=(e,n)=>Array.from({length:Math.max(0,n)},(r,t)=>Math.floor(e/n)+(t<e%n?1:0)),Pm=(e,n,r,t,a=0)=>{var f;const o=n*t,i={},l={};for(const u of e){const x=(u[0].start-1)*t+1,d=u.map(g=>{var y;return Math.max(1,((y=r[g.id])==null?void 0:y.colSpan)||g.span*t)});let m=d.reduce((g,y)=>g+y,0)-(o-x+1);for(let g=d.length-1;g>=0&&m>0;g--){const y=Math.min(m,d[g]-1);d[g]-=y,m-=y}const w=o-x+1,v=Math.max(0,w-d.reduce((g,y)=>g+y,0)),b=d.length,S=(f=r[u[0].id])==null?void 0:f.rowAlign;if(S==="자유"){const g=[];let y=0;for(let j=b-1;j>=0;j--)y+=d[j],g[j]=y;let k=0,_=0;u.forEach((j,C)=>{var A;const R=(A=r[j.id])==null?void 0:A.colAt,M=Math.max(k,Math.min(w-g[C],Number.isFinite(R)?R:_));i[j.id]=`${x+M} / span ${d[C]}`,k=M+d[C],_+=d[C]});continue}if(b===1&&v>0&&(S==="가운데"||S==="오른쪽")){const g=u[0].id,y=S==="가운데"?Math.round(v/2):v;i[g]=`${x+y} / span ${d[0]}`,l[g]={col:`${x} / span ${w}`,width:`calc((100% + ${a}px) * ${d[0]} / ${w} - ${a}px)`,justify:S==="가운데"?"center":"end"};continue}let h=0,c=new Array(Math.max(0,b-1)).fill(0);if(v>0){if(S==="가운데")h=Math.floor(v/2);else if(S==="오른쪽")h=v;else if(S==="양끝 정렬"&&b>1)c=fd(v,b-1);else if(S==="고르게"){const g=fd(v,b+1);h=g[0],c=g.slice(1,b)}}let p=x+h;u.forEach((g,y)=>{y>0&&(p+=c[y-1]);const k=Math.max(1,Math.min(o-p+1,d[y]));i[g.id]=`${p} / span ${k}`,p+=k})}return{cols:Array(o).fill("1fr").join(" "),place:i,fit:l}},Am={cols:null,place:{},fit:{}},Dm=(e,n)=>e.some(r=>{var t,a;return((t=n[r])==null?void 0:t.colSpan)||((a=n[r])==null?void 0:a.rowAlign)});function zc(e,n={},r=0){const t=[...Gs(e).values()];return Dm(e.regions.map(a=>a.id),n)?Pm(t,Tc(e.cols),n,zm(e.cols)?lt:1,r):Am}function Pc(e,n={},r=0){const t=en(e);return Dm(t,n)?Pm([t.map((a,o)=>({id:a,start:o+1,span:1}))],e.cols,n,lt,r):Am}function Om(e,n,r){for(const t of Gs(e).values())if(t.some(a=>a.id===r))return t.map(a=>a.id);for(const t of n??[]){const a=en(t);if(a.includes(r))return a}return[]}function G0(e,n,r){const t=Fm(e.cols);for(const a of Gs(e).values())if(a.some(o=>o.id===r))return(a[0].start-1)*t+1;return 1}function V0(e,n,r,t){const a=Om(e,n,t);if(!a.length)return{};const o=(n??[]).find(f=>en(f).includes(t)),{place:i}=o?Pc(o,r):zc(e,r);if(a.some(f=>!i[f]))return{};const l=o?1:G0(e,n,t);return Object.fromEntries(a.map(f=>[f,(parseInt(i[f],10)||l)-l]))}const Fm=e=>zm(e)?lt:1;function Y0(e,n,r,t){const a=e.map(d=>Math.max(1,Math.round(d)||1)),o=a.length,i=t??a.reduce((d,m)=>d+m,0),l=Math.max(0,i-a.reduce((d,m)=>d+m,0)),f=a.slice(n+1).reduce((d,m)=>d+m-1,0),u=Math.max(1,Math.min(a[n]+l+f,Math.round(r)||1));let x=u-a[n];a[n]=u,x-=Math.min(x,l);for(let d=n+1;d<o&&x>0;d++){const m=Math.min(x,a[d]-1);a[d]-=m,x-=m}return a}function co(e){const n=String(e.rows??"").trim().split(/\s+/).filter(Boolean),r=o=>parseInt(String(o.row??"1"),10)||1,t=Math.max(n.length,...e.regions.map(r),1);return{tokens:n,total:t,from:r,to:o=>{var l;const i=(l=String(o.row??"").split("/")[1])==null?void 0:l.trim();return i?i==="-1"?t+1:parseInt(i,10)||r(o)+1:r(o)+1}}}function dd(e,n){const{total:r,from:t,to:a}=co(e);return n<=0||n>=r?!0:!e.regions.some(o=>t(o)<=n&&a(o)>n+1)}function Im(e,n=[]){const{total:r}=co(e),t=[];let a=0;for(const o of n){const i=Math.max(0,Math.min(r,o.at??r));i>a&&(t.push({kind:"band",from:a+1,to:i}),a=i),t.push({kind:"row",row:o})}return a<r&&t.push({kind:"band",from:a+1,to:r}),t}const en=e=>Array.from({length:e.cols},(n,r)=>`${e.id}-${r+1}`),q0=e=>`x${e.reduce((n,r)=>Math.max(n,Number(r.id.slice(1))||0),0)+1}`;function K0(e,n,r){const t=[...e],a=Math.max(0,Math.min(t.length,r??t.length));return t.splice(a,0,{id:q0(e),cols:n}),t}function ud(e,n,r=[]){const t=new Set(ht(n).regions.map(o=>o.id));r.forEach(o=>en(o).forEach(i=>t.add(i)));const a={};for(const[o,i]of Object.entries(e))t.has(o)&&(a[o]=i);return a}const ia=typeof window<"u";function Vs(e){return!ia||typeof window.matchMedia!="function"?null:window.matchMedia(e)}function ro(){var e;return((e=Vs("(prefers-reduced-motion: reduce)"))==null?void 0:e.matches)??!1}function X0(e){const n=Vs("(prefers-reduced-motion: reduce)");if(!n)return()=>{};const r=()=>e(n.matches);return n.addEventListener?n.addEventListener("change",r):n.addListener(r),()=>{n.removeEventListener?n.removeEventListener("change",r):n.removeListener(r)}}function Q0(){var e;return((e=Vs("(pointer: coarse)"))==null?void 0:e.matches)??!1}function Bm(){var e;return((e=Vs("(hover: hover)"))==null?void 0:e.matches)??!0}function Wm(e){return ia?window.innerWidth<e:!1}let jt=null;function Z0(){var e;if(jt!==null)return jt;if(!ia)return jt=!1;try{const n=document.createElement("canvas"),r=n.getContext("webgl2")||n.getContext("webgl");jt=!!r,(e=r==null?void 0:r.getExtension("WEBGL_lose_context"))==null||e.loseContext()}catch{jt=!1}return jt}const pd={low:0,mid:1,high:2};let Qr=null;function Ac(){if(Qr)return Qr;if(!ia)return Qr="mid";const e=navigator.hardwareConcurrency||4,n=navigator.deviceMemory||4,r=Q0();return e<=4||n<=4||r&&Wm(768)?Qr="low":e>=8&&n>=8?Qr="high":Qr="mid",Qr}function Hm(e=2){if(!ia)return 1;const n=Ac(),r=n==="low"?1.5:n==="mid"?2:e;return Math.min(window.devicePixelRatio||1,r,e)}function Um(e=0){const n=Ac();return n==="low"?Math.min(e||30,30):e||0}function J0(e={},n={}){if(n.guard===!1)return{pass:!0,reason:""};const{motion:r="skip",pointer:t="any",minWidth:a=0,webgl:o=!1,minTier:i="low"}=e;return r==="skip"&&ro()?{pass:!1,reason:"reduced-motion"}:t==="fine"&&!Bm()?{pass:!1,reason:"coarse-pointer"}:a>0&&Wm(a)?{pass:!1,reason:"viewport-too-narrow"}:o&&!Z0()?{pass:!1,reason:"no-webgl"}:pd[Ac()]<pd[i]?{pass:!1,reason:"device-tier"}:{pass:!0,reason:""}}function ev(e,n=200){if(!ia)return()=>{};let r=0;const t=()=>{clearTimeout(r),r=setTimeout(e,n)};return window.addEventListener("resize",t,{passive:!0}),window.addEventListener("orientationchange",t,{passive:!0}),()=>{clearTimeout(r),window.removeEventListener("resize",t),window.removeEventListener("orientationchange",t)}}const md=new WeakMap,hd=e=>!!e&&e.nodeType===1;function nv(e,n=document){return e?typeof e=="string"?Array.from(n.querySelectorAll(e)):hd(e)?[e]:typeof e.length=="number"?Array.from(e).filter(hd):[]:[]}const xd=e=>e.replace(/[A-Z]/g,n=>"-"+n.toLowerCase());function jl(e){const n=e.trim();if(n==="true")return!0;if(n==="false")return!1;if(n==="null")return null;if(n!==""&&!Number.isNaN(Number(n)))return Number(n);if(/^[[{]/.test(n))try{return JSON.parse(n)}catch{}return n.includes(",")?n.split(",").map(r=>jl(r)):n}function rv(e,n,r){const t={};for(const a of Object.keys(n)){const o=r?`data-fx-${r}-${xd(a)}`:null,i=`data-fx-${xd(a)}`;o&&e.hasAttribute(o)?t[a]=jl(e.getAttribute(o)):e.hasAttribute(i)&&(t[a]=jl(e.getAttribute(i)))}return t}function In(e){const{name:n,defaults:r={},guard:t={},setup:a}=e;if(!n||typeof a!="function")throw new Error("[fx] defineEffect: name과 setup은 필수입니다.");function o(l,f){let u=md.get(l);if(u||md.set(l,u=new Map),u.has(n))return u.get(n);const x=Object.assign({},r,rv(l,r,n),f);let d=[],m=null,w=!1;const v=!l.classList.contains(`fx-${n}`),b=!l.classList.contains("fx"),S={el:l,opts:x,name:n,on(_,j,C,R){return _.addEventListener(j,C,R),d.push(()=>_.removeEventListener(j,C,R)),C},addCleanup(_){typeof _=="function"&&d.push(_)},setVar(_,j){l.style.setProperty(_,j)},emit(_,j){l.dispatchEvent(new CustomEvent(`fx:${n}:${_}`,{detail:j,bubbles:!0}))}};function h(){if(!w){w=!0,l.classList.add(`fx-${n}`);try{m=a(S)||{}}catch(_){w=!1,l.classList.remove(`fx-${n}`),console.error(`[fx:${n}] setup 실패`,_)}}}function c(){var _;if(w){w=!1;for(const j of d.reverse())try{j()}catch(C){console.warn(`[fx:${n}] cleanup 오류`,C)}d=[];try{(_=m==null?void 0:m.destroy)==null||_.call(m)}catch(j){console.warn(`[fx:${n}] destroy 오류`,j)}m=null,v&&l.classList.remove(`fx-${n}`)}}function p(){const _=J0(t,x);_.pass?(l.classList.remove("fx-inert"),delete l.dataset.fxSkipped,h()):(c(),l.classList.add("fx-inert"),l.dataset.fxSkipped=_.reason)}l.classList.add("fx"),p();const g=X0(p),y=t.minWidth?ev(p):()=>{},k={name:n,el:l,get active(){return w},get api(){return m},update(_={}){return Object.assign(x,_),w&&(c(),h()),k},destroy(){g(),y(),c(),b&&l.classList.remove("fx"),l.classList.remove("fx-inert"),delete l.dataset.fxSkipped,u.delete(n)}};return u.set(n,k),k}function i(l,f={}){var d;const x=nv(l,f.root||document).map(m=>o(m,f));return!x.length&&typeof l=="string"&&console.warn(`[fx:${n}] "${l}"에 해당하는 요소가 없습니다.`),{name:n,items:x,el:((d=x[0])==null?void 0:d.el)??null,get api(){var m;return((m=x[0])==null?void 0:m.api)??null},get active(){return x.some(m=>m.active)},update(m){return x.forEach(w=>w.update(m)),this},destroy:()=>x.forEach(m=>m.destroy())}}return i.effectName=n,i.defaults=r,i}const tv=typeof IntersectionObserver<"u";function Ys(e,{onEnter:n,onLeave:r,threshold:t=0,rootMargin:a="0px"}={}){var u;const i=(((u=e==null?void 0:e.ownerDocument)==null?void 0:u.defaultView)??window).IntersectionObserver;if(!tv||!i)return n==null||n(),()=>{};let l=null;const f=new i(x=>{for(const d of x){const m=d.isIntersecting;m!==l&&(l=m,m?n==null||n(d):r==null||r(d))}},{threshold:t,rootMargin:a});return f.observe(e),()=>f.disconnect()}function Dc(e,{fps:n=0}={}){const r=n>0?1/n:0;let t=0,a=0,o=0,i=0,l=!1;const f=u=>{if(t=requestAnimationFrame(f),!a){a=u;return}let x=(u-a)/1e3;a=u,x>.1&&(x=.1),o+=x,!(r&&o<r)&&(i+=o,e(o,i),o=0)};return{start(){l||(l=!0,a=0,o=0,t=requestAnimationFrame(f))},stop(){l&&(l=!1,cancelAnimationFrame(t),t=0)},get running(){return l},get elapsed(){return i}}}function Oc(e,n,{fps:r=0,threshold:t=0,rootMargin:a="150px"}={}){const o=Dc(n,{fps:r});let i=!1,l=typeof document>"u"||!document.hidden,f=!0;const u=()=>{f&&i&&l?o.start():o.stop()},x=Ys(e,{threshold:t,rootMargin:a,onEnter:()=>{i=!0,u()},onLeave:()=>{i=!1,u()}}),d=()=>{l=!document.hidden,u()};return document.addEventListener("visibilitychange",d),{pause(){f=!1,u()},resume(){f=!0,u()},get running(){return o.running},get elapsed(){return o.elapsed},destroy(){x(),document.removeEventListener("visibilitychange",d),o.stop()}}}function Gm(e,n){if(typeof ResizeObserver<"u"){const t=new ResizeObserver(a=>{var o;return n((o=a[0])==null?void 0:o.contentRect)});return t.observe(e),()=>t.disconnect()}const r=()=>n(e.getBoundingClientRect());return window.addEventListener("resize",r,{passive:!0}),()=>window.removeEventListener("resize",r)}const Vm={ogl:"https://cdn.jsdelivr.net/npm/ogl@1/+esm",modelViewer:"https://cdn.jsdelivr.net/npm/@google/model-viewer@4/dist/model-viewer.min.js"},Ro=new Map,Mo=new Map;function av(e){if(Ro.has(e))return Ro.get(e);const n=import(e).catch(r=>{throw Ro.delete(e),new Error(`[fx] 모듈 로드 실패: ${e}
${r.message}`)});return Ro.set(e,n),n}function ov(e,{module:n=!0}={}){if(Mo.has(e))return Mo.get(e);const r=new Promise((t,a)=>{const o=document.querySelector(`script[src="${e}"]`);if(o){if(o.dataset.fxLoaded==="1")return t();o.addEventListener("load",()=>t(),{once:!0}),o.addEventListener("error",a,{once:!0});return}const i=document.createElement("script");i.src=e,n&&(i.type="module"),i.async=!0,i.addEventListener("load",()=>{i.dataset.fxLoaded="1",t()},{once:!0}),i.addEventListener("error",()=>{Mo.delete(e),a(new Error(`[fx] 스크립트 로드 실패: ${e}`))},{once:!0}),document.head.appendChild(i)});return Mo.set(e,r),r}const sv=()=>av(Vm.ogl);function iv(){return typeof customElements<"u"&&customElements.get("model-viewer")?Promise.resolve():ov(Vm.modelViewer,{module:!0}).then(()=>{var e;return(e=customElements==null?void 0:customElements.whenDefined)==null?void 0:e.call(customElements,"model-viewer")})}const jn=(e,n,r)=>e<n?n:e>r?r:e,El=(e,n,r)=>e+(n-e)*r,dr=(e,n,r,t)=>El(e,n,1-Math.exp(-r*t)),Ke=(e,n=3)=>{const r=10**n;return Math.round(e*r)/r};function lv(e){let n=String(e).trim().replace(/^#/,"");if(n.length===3&&(n=n.split("").map(t=>t+t).join("")),n.length!==6||/[^0-9a-f]/i.test(n))return[0,0,0];const r=parseInt(n,16);return[(r>>16&255)/255,(r>>8&255)/255,(r&255)/255]}function cv(e){let n=0,r=null;const t=(...a)=>{r=a,!n&&(n=requestAnimationFrame(()=>{n=0,e(...r)}))};return t.cancel=()=>{n&&cancelAnimationFrame(n),n=0},t}const gd=typeof CSS<"u"&&typeof CSS.supports=="function"&&CSS.supports("animation-timeline","view()"),vd=["rise","depth","flip","swing","zoom"],fv=In({name:"scroll-reveal",defaults:{preset:"rise",mode:"once",duration:700,delay:0,stagger:80,index:null,distance:28,rotate:22,depth:140,scale:.92,perspective:1e3,threshold:.15,rootMargin:"0px 0px -10% 0px",repeat:!1,rangeStart:"entry 10%",rangeEnd:"cover 40%"},guard:{motion:"skip",pointer:"any"},setup({el:e,opts:n,addCleanup:r,setVar:t,emit:a}){const o=vd.includes(n.preset)?n.preset:"rise";o!==n.preset&&console.warn(`[fx:scroll-reveal] 알 수 없는 preset "${n.preset}". 사용 가능: ${vd.join(", ")}`),e.dataset.fxPreset=o;let i=n.mode;i==="auto"&&(i=gd?"scrub":"once"),i==="scrub"&&!gd&&(i="once"),e.dataset.fxMode=i;let l=n.index;if(l==null){const f=e.dataset.fxIndex;f!==void 0&&(l=parseInt(f,10))}if(!Number.isFinite(l)){const f=e.parentElement?e.parentElement.children:[];l=Math.max(0,Array.prototype.indexOf.call(f,e))}if(t("--fx-reveal-duration",`${n.duration}ms`),t("--fx-reveal-delay",`${n.delay+l*n.stagger}ms`),t("--fx-reveal-distance",`${n.distance}px`),t("--fx-reveal-rotate",`${n.rotate}deg`),t("--fx-reveal-depth",`${-Math.abs(n.depth)}px`),t("--fx-reveal-scale",n.scale),t("--fx-reveal-perspective",`${n.perspective}px`),i==="scrub"&&(t("--fx-reveal-start",n.rangeStart),t("--fx-reveal-end",n.rangeEnd)),i==="once"){let f=!1;const u=Ys(e,{threshold:n.threshold,rootMargin:n.rootMargin,onEnter:()=>{f&&!n.repeat||(f=!0,e.classList.add("is-revealed"),a("reveal",{index:l}),n.repeat||u())},onLeave:()=>{n.repeat&&e.classList.remove("is-revealed")}});r(()=>u())}return r(()=>{e.classList.remove("is-revealed"),delete e.dataset.fxPreset,delete e.dataset.fxMode;for(const f of["--fx-reveal-duration","--fx-reveal-delay","--fx-reveal-distance","--fx-reveal-rotate","--fx-reveal-depth","--fx-reveal-scale","--fx-reveal-perspective","--fx-reveal-start","--fx-reveal-end"])e.style.removeProperty(f)}),{reveal:()=>e.classList.add("is-revealed"),reset:()=>e.classList.remove("is-revealed"),mode:i,index:l}}}),dv=`
  attribute vec2 uv;
  attribute vec2 position;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,uv=`
  precision highp float;

  uniform float uTime;
  uniform vec2  uResolution;
  uniform vec3  uColor1;
  uniform vec3  uColor2;
  uniform vec3  uColor3;
  uniform float uScale;
  uniform float uSwirl;
  uniform float uGrain;
  uniform vec2  uMouse;
  uniform float uAlpha;

  varying vec2 vUv;

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    // smoothstep 보간 — 격자 경계가 보이지 않게 합니다
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    // 2.02는 일부러 2.0이 아닙니다. 정확히 2배씩 키우면
    // 옥타브들의 격자가 정렬돼서 규칙적인 무늬가 보입니다.
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p *= 2.02;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    // 화면 비율 보정 — 이게 없으면 세로가 긴 화면에서 무늬가 늘어납니다
    float aspect = uResolution.x / max(uResolution.y, 1.0);
    vec2 p = (vUv - 0.5) * vec2(aspect, 1.0) * uScale;
    p += uMouse;

    float t = uTime;

    // 1단계 워핑
    vec2 q = vec2(
      fbm(p + vec2(0.0, t * 0.15)),
      fbm(p + vec2(5.2, 1.3) - t * 0.10)
    );

    // 2단계 워핑 — 여기서 "흐르는 결"이 생깁니다
    vec2 r = vec2(
      fbm(p + 4.0 * q + vec2(1.7, 9.2) + t * 0.12),
      fbm(p + 4.0 * q + vec2(8.3, 2.8) - t * 0.09)
    );

    float f = clamp(fbm(p + uSwirl * r) * 1.15, 0.0, 1.0);

    vec3 col = mix(uColor1, uColor2, smoothstep(0.15, 0.72, f));
    col = mix(col, uColor3, smoothstep(0.50, 1.05, length(r) * 0.75));

    // 미세 그레인 — 8비트 그라디언트에서 생기는 밴딩(줄무늬)을 없앱니다.
    // 이 한 줄이 있고 없고가 "무료 템플릿"과 "제대로 만든 것"의 차이를 만듭니다.
    col += (hash(vUv * uResolution) - 0.5) * uGrain;

    gl_FragColor = vec4(col, uAlpha);
  }
`,pv=["#1b1d3a","#5b5bd6","#a78bfa"];function mv(e,n){if(Array.isArray(n)&&n.length>=2){const t=n.slice(0,3);for(;t.length<3;)t.push(t[t.length-1]);return t}const r=getComputedStyle(e);return pv.map((t,a)=>{const o=r.getPropertyValue(`--fx-silk-c${a+1}`).trim();return/^#?[0-9a-f]{3,6}$/i.test(o)?o:t})}const hv=In({name:"silk-bg",defaults:{colors:null,speed:.12,scale:2.2,swirl:3.2,grain:.035,mouse:!0,mouseStrength:.18,alpha:1,dpr:1.25,fps:0},guard:{motion:"skip",webgl:!0,pointer:"any"},setup({el:e,opts:n,on:r,addCleanup:t,setVar:a,emit:o}){const i=mv(e,n.colors);i.forEach((x,d)=>a(`--fx-silk-c${d+1}`,x)),getComputedStyle(e).position==="static"&&(e.style.position="relative",t(()=>{e.style.position=""}));const l=document.createElement("canvas");l.className="fx-silk-bg__canvas fx-layer",l.setAttribute("aria-hidden","true"),e.prepend(l),t(()=>l.remove());let f=!1,u=null;t(()=>{f=!0,u==null||u(),u=null}),(async()=>{const x=await sv();if(f)return;const{Renderer:d,Program:m,Mesh:w,Triangle:v}=x,b=new d({canvas:l,dpr:Math.min(Hm(2),n.dpr),alpha:n.alpha<1,antialias:!1,depth:!1,stencil:!1,powerPreference:"low-power"}),S=b.gl,[h,c,p]=i.map(lv),g=new m(S,{vertex:dv,fragment:uv,uniforms:{uTime:{value:0},uResolution:{value:[1,1]},uColor1:{value:h},uColor2:{value:c},uColor3:{value:p},uScale:{value:n.scale},uSwirl:{value:n.swirl},uGrain:{value:n.grain},uMouse:{value:[0,0]},uAlpha:{value:n.alpha}},transparent:n.alpha<1,depthTest:!1}),y=new w(S,{geometry:new v(S),program:g}),k=()=>{const B=e.clientWidth||1,V=e.clientHeight||1;b.setSize(B,V),g.uniforms.uResolution.value=[S.canvas.width,S.canvas.height]},_=Gm(e,k);k();const j={x:0,y:0,tx:0,ty:0};let C=()=>{};if(n.mouse){const B=V=>{if(V.pointerType==="touch")return;const ye=e.getBoundingClientRect();ye.width&&(j.tx=jn((V.clientX-ye.left)/ye.width*2-1,-1,1)*n.mouseStrength,j.ty=jn((V.clientY-ye.top)/ye.height*2-1,-1,1)*n.mouseStrength)};window.addEventListener("pointermove",B,{passive:!0}),C=()=>window.removeEventListener("pointermove",B)}let R=0;const M=Oc(e,B=>{R+=B*n.speed,g.uniforms.uTime.value=R,n.mouse&&(j.x=dr(j.x,j.tx,3.5,B),j.y=dr(j.y,j.ty,3.5,B),g.uniforms.uMouse.value=[j.x,j.y]),b.render({scene:y})},{fps:n.fps||Um(),rootMargin:"120px"}),A=B=>{B.preventDefault(),M.pause(),e.classList.add("fx-silk-bg--lost")},Q=()=>{e.classList.remove("fx-silk-bg--lost"),k(),M.resume()};l.addEventListener("webglcontextlost",A),l.addEventListener("webglcontextrestored",Q),u=()=>{var B;M.destroy(),_(),C(),l.removeEventListener("webglcontextlost",A),l.removeEventListener("webglcontextrestored",Q),(B=S.getExtension("WEBGL_lose_context"))==null||B.loseContext()},e.classList.add("fx-silk-bg--ready"),t(()=>e.classList.remove("fx-silk-bg--ready")),o("ready",{colors:i})})().catch(x=>{console.warn("[fx:silk-bg] WebGL 초기화 실패 — CSS 그라디언트로 대체합니다.",x),l.remove(),e.classList.add("fx-silk-bg--failed")}),t(()=>{e.classList.remove("fx-silk-bg--failed","fx-silk-bg--lost")})}}),xv=Math.PI*2,gv=e=>e*e*(3-2*e),vv=In({name:"dot-grid-wave",defaults:{spacing:28,radius:1.7,color:null,opacity:.55,depth:38,focal:420,speed:1,frequency:.022,angle:38,ripple:.35,pointer:!0,pointerRadius:140,pointerPush:18,pointerLift:26,fps:0,dpr:2,maxDots:7e3},guard:{motion:"skip",pointer:"any"},setup({el:e,opts:n,on:r,addCleanup:t,emit:a}){var B;getComputedStyle(e).position==="static"&&(e.style.position="relative",t(()=>{e.style.position=""}));const o=document.createElement("canvas");o.className="fx-dot-grid-wave__canvas fx-layer",o.setAttribute("aria-hidden","true"),e.prepend(o),t(()=>o.remove());const i=o.getContext("2d",{alpha:!0});if(!i){console.warn("[fx:dot-grid-wave] Canvas 2D 컨텍스트를 만들 수 없습니다."),o.remove();return}const l=()=>{if(n.color)return n.color;const V=getComputedStyle(e);return V.getPropertyValue("--fx-dot-color").trim()||V.color||"#888"};let f=l(),u=1,x=0,d=0,m=0,w=0,v=n.spacing,b=0,S=0,h=0,c=0;const p=()=>{x=e.clientWidth||1,d=e.clientHeight||1,u=Math.min(Hm(3),n.dpr),o.width=Math.round(x*u),o.height=Math.round(d*u),o.style.width=`${x}px`,o.style.height=`${d}px`,v=n.spacing;let V=Math.ceil(x/v)*Math.ceil(d/v);V>n.maxDots&&(v=Math.sqrt(x*d/n.maxDots),V=Math.ceil(x/v)*Math.ceil(d/v)),m=Math.ceil(x/v)+2,w=Math.ceil(d/v)+2,b=(x-(m-1)*v)/2,S=(d-(w-1)*v)/2,h=x/2,c=d/2,i.setTransform(u,0,0,u,0,0),f=l()},g=Gm(e,p);t(()=>g()),p();const y={x:-9999,y:-9999,tx:-9999,ty:-9999,active:0,tActive:0};n.pointer&&(r(e,"pointermove",V=>{const ye=e.getBoundingClientRect();y.tx=V.clientX-ye.left,y.ty=V.clientY-ye.top,y.tActive=1,y.x<-9e3&&(y.x=y.tx,y.y=y.ty)},{passive:!0}),r(e,"pointerleave",()=>{y.tActive=0}));const k=n.angle*Math.PI/180,_=Math.cos(k),j=Math.sin(k),C=n.focal*.6;let R=0;const A=Oc(e,V=>{R+=V*n.speed,y.x=dr(y.x,y.tx,14,V),y.y=dr(y.y,y.ty,14,V),y.active=dr(y.active,y.tActive,8,V),i.clearRect(0,0,x,d),i.globalAlpha=n.opacity,i.fillStyle=f;const ye=new Path2D,we=n.pointerRadius,P=n.pointer&&y.active>.01;for(let W=0;W<w;W++){const Y=S+W*v;for(let ue=0;ue<m;ue++){const K=b+ue*v;let $e=(K*_+Y*j)*n.frequency-R*2.2;if(n.ripple>0){const I=K-h,U=Y-c,pe=Math.sqrt(I*I+U*U);$e=$e*(1-n.ripple)+(pe*n.frequency-R*2.2)*n.ripple}let J=Math.sin($e)*n.depth,re=K,Le=Y;if(P){const I=K-y.x,U=Y-y.y,pe=I*I+U*U;if(pe<we*we){const fe=Math.sqrt(pe)||1e-4,de=gv(1-fe/we)*y.active;re+=I/fe*n.pointerPush*de,Le+=U/fe*n.pointerPush*de,J+=n.pointerLift*de}}J>C&&(J=C);const Te=n.focal/(n.focal-J),Z=h+(re-h)*Te,ce=c+(Le-c)*Te,Se=n.radius*Te;Se<=.05||Z<-8||Z>x+8||ce<-8||ce>d+8||(ye.moveTo(Z+Se,ce),ye.arc(Z,ce,Se,0,xv))}}i.fill(ye),i.globalAlpha=1},{fps:n.fps||Um(),rootMargin:"120px"});t(()=>A.destroy());const Q=(B=window.matchMedia)==null?void 0:B.call(window,"(prefers-color-scheme: dark)");if(Q!=null&&Q.addEventListener){const V=()=>{f=l()};Q.addEventListener("change",V),t(()=>Q.removeEventListener("change",V))}return a("ready",{cols:m,rows:w,step:v}),{refresh:()=>p(),get dots(){return m*w}}}}),yv=In({name:"tilt-card",defaults:{maxTilt:12,perspective:900,scale:1.02,speed:12,glare:!0,maxGlare:.35,glareZ:0,reverse:!1,axis:"both",focusScale:!0},guard:{motion:"skip",pointer:"fine"},setup({el:e,opts:n,on:r,addCleanup:t,setVar:a,emit:o}){getComputedStyle(e).position==="static"&&(e.style.position="relative",t(()=>{e.style.position=""}));const i=Array.from(e.querySelectorAll("[data-fx-depth]"));for(const g of i)g.style.setProperty("--fx-depth",parseFloat(g.dataset.fxDepth)||0);t(()=>{for(const g of i)g.style.removeProperty("--fx-depth")});let l=null;n.glare&&(l=document.createElement("div"),l.className="fx-tilt-card__glare",l.setAttribute("aria-hidden","true"),e.appendChild(l),t(()=>l.remove())),a("--fx-tilt-perspective",`${n.perspective}px`),l&&(a("--fx-tilt-glare-z",`${n.glareZ}px`),a("--fx-tilt-glare-scale",Ke((n.perspective-n.glareZ)/n.perspective,4)));const f={rx:0,ry:0,sc:1,g:0,nx:0,ny:0},u={rx:0,ry:0,sc:1,g:0,nx:0,ny:0};let x=null,d=!1,m=!1;const w=()=>{x=null};r(window,"scroll",w,{passive:!0}),r(window,"resize",w,{passive:!0});const v=()=>{a("--fx-tilt-rx",`${Ke(f.rx,2)}deg`),a("--fx-tilt-ry",`${Ke(f.ry,2)}deg`),a("--fx-tilt-scale",Ke(f.sc,4)),a("--fx-tilt-nx",Ke(f.nx,3)),a("--fx-tilt-ny",Ke(f.ny,3)),l&&(a("--fx-tilt-px",`${Ke(50+f.nx*50,1)}%`),a("--fx-tilt-py",`${Ke(50+f.ny*50,1)}%`),a("--fx-tilt-glare-o",Ke(f.g,3)))},b=["rx","ry","sc","g","nx","ny"],S=()=>b.every(g=>Math.abs(f[g]-u[g])<.002),h=Dc(g=>{for(const y of b)f[y]=dr(f[y],u[y],n.speed,g);if(v(),!d&&!m&&S()){for(const y of b)f[y]=u[y];v(),h.stop(),e.dataset.fxTilting="0"}});t(()=>h.stop());const c=()=>{e.dataset.fxTilting="1",h.start()},p=g=>{if(x||(x=e.getBoundingClientRect()),!x.width||!x.height)return;const y=jn((g.clientX-x.left)/x.width*2-1,-1,1),k=jn((g.clientY-x.top)/x.height*2-1,-1,1),_=n.reverse?-1:1;u.nx=y,u.ny=k,u.ry=n.axis==="y"?0:_*y*n.maxTilt,u.rx=n.axis==="x"?0:_*-k*n.maxTilt,u.g=n.maxGlare};r(e,"pointerenter",g=>{g.pointerType!=="touch"&&(d=!0,x=e.getBoundingClientRect(),u.sc=n.scale,p(g),c(),o("enter"))}),r(e,"pointermove",g=>{!d||g.pointerType==="touch"||p(g)}),r(e,"pointerleave",()=>{d&&(d=!1,u.rx=0,u.ry=0,u.nx=0,u.ny=0,u.g=0,u.sc=m?n.scale:1,o("leave"))}),n.focusScale&&(r(e,"focusin",()=>{m=!0,u.sc=n.scale,c()}),r(e,"focusout",()=>{m=!1,d||(u.sc=1)})),t(()=>{for(const g of["--fx-tilt-rx","--fx-tilt-ry","--fx-tilt-scale","--fx-tilt-nx","--fx-tilt-ny","--fx-tilt-px","--fx-tilt-py","--fx-tilt-glare-o","--fx-tilt-perspective","--fx-tilt-glare-z","--fx-tilt-glare-scale"])e.style.removeProperty(g);delete e.dataset.fxTilting}),v()}}),wv=e=>e*e*(3-2*e),bv=In({name:"magnetic-button",defaults:{strength:.35,radius:110,labelFactor:.5,scale:1.04,rotate:6,speed:11,glow:!0,resetOnLeave:!0},guard:{motion:"skip",pointer:"fine"},setup({el:e,opts:n,on:r,addCleanup:t,setVar:a,emit:o}){getComputedStyle(e).position==="static"&&(e.style.position="relative",t(()=>{e.style.position=""})),e.querySelector("[data-fx-label]")||(e.dataset.fxMagLabel="none",t(()=>delete e.dataset.fxMagLabel));let l=null;n.glow&&(l=document.createElement("span"),l.className="fx-magnetic-button__glow",l.setAttribute("aria-hidden","true"),e.appendChild(l),t(()=>l.remove())),a("--fx-mag-lf",n.labelFactor);const f={x:0,y:0,rx:0,ry:0,sc:1,g:0,px:50,py:50},u={x:0,y:0,rx:0,ry:0,sc:1,g:0,px:50,py:50},x=["x","y","rx","ry","sc","g","px","py"];let d=null,m=!1;const w=()=>{d=null};r(window,"scroll",w,{passive:!0}),r(window,"resize",w,{passive:!0});const v=()=>{a("--fx-mag-x",`${Ke(f.x,2)}px`),a("--fx-mag-y",`${Ke(f.y,2)}px`),a("--fx-mag-rx",`${Ke(f.rx,2)}deg`),a("--fx-mag-ry",`${Ke(f.ry,2)}deg`),a("--fx-mag-scale",Ke(f.sc,4)),l&&(a("--fx-mag-px",`${Ke(f.px,1)}%`),a("--fx-mag-py",`${Ke(f.py,1)}%`),a("--fx-mag-glow",Ke(f.g,3)))},b=()=>x.every(p=>Math.abs(f[p]-u[p])<.01),S=Dc(p=>{for(const g of x)f[g]=dr(f[g],u[g],n.speed,p);if(v(),!m&&b()){for(const g of x)f[g]=u[g];v(),S.stop(),e.dataset.fxMagnetic="0"}});t(()=>S.stop());const h=()=>{e.dataset.fxMagnetic="1",S.start()},c=()=>{m&&(m=!1,u.x=0,u.y=0,u.rx=0,u.ry=0,u.sc=1,u.g=0,u.px=50,u.py=50,o("leave"))};r(window,"pointermove",p=>{if(p.pointerType==="touch"||(d||(d=e.getBoundingClientRect()),!d.width))return;const g=d.left+d.width/2,y=d.top+d.height/2,k=p.clientX-g,_=p.clientY-y,j=Math.max(d.width,d.height)/2+n.radius,C=Math.hypot(k,_);if(C>j){c();return}const R=wv(1-C/j);if(m||(m=!0,o("enter")),u.x=k*n.strength*R,u.y=_*n.strength*R,u.sc=1+(n.scale-1)*R,u.g=R,n.rotate){const M=jn(k/(d.width/2+n.radius),-1,1),A=jn(_/(d.height/2+n.radius),-1,1);u.ry=M*n.rotate*R,u.rx=-A*n.rotate*R}u.px=jn((p.clientX-d.left)/d.width*100,-20,120),u.py=jn((p.clientY-d.top)/d.height*100,-20,120),h()},{passive:!0}),r(document,"pointerleave",()=>{c(),h()}),n.resetOnLeave&&r(window,"blur",()=>{c(),h()}),r(e,"focusin",()=>{u.sc=n.scale,u.g=1,h()}),r(e,"focusout",()=>{m||(u.sc=1,u.g=0)}),v(),t(()=>{for(const p of["--fx-mag-x","--fx-mag-y","--fx-mag-rx","--fx-mag-ry","--fx-mag-scale","--fx-mag-px","--fx-mag-py","--fx-mag-glow","--fx-mag-lf"])e.style.removeProperty(p);delete e.dataset.fxMagnetic})}}),_v=In({name:"parallax-layers",defaults:{mouse:!0,mouseStrength:26,scroll:!0,scrollStrength:70,depth:0,perspective:1200,speed:9,pointerTarget:"window",idleSleep:.4},guard:{motion:"skip",pointer:"any"},setup({el:e,opts:n,on:r,addCleanup:t,setVar:a,emit:o}){const i=Array.from(e.querySelectorAll("[data-fx-layer]"));i.length||console.warn("[fx:parallax-layers] data-fx-layer를 가진 자식이 없습니다.");for(const v of i){const b=parseFloat(v.dataset.fxLayer);v.style.setProperty("--fx-layer",Number.isFinite(b)?b:0)}t(()=>{for(const v of i)v.style.removeProperty("--fx-layer")}),a("--fx-plx-perspective",`${n.perspective}px`),a("--fx-plx-mx",`${-n.mouseStrength}px`),a("--fx-plx-my",`${-n.mouseStrength}px`),a("--fx-plx-sy",`${n.scrollStrength}px`),a("--fx-plx-z",`${n.depth}px`);const l={x:0,y:0,p:0},f={x:0,y:0,p:0};let u=0;const x=()=>{a("--fx-plx-x",Ke(l.x,4)),a("--fx-plx-y",Ke(l.y,4)),a("--fx-plx-s",Ke(l.p,4))},d=()=>{if(!n.scroll)return;const v=e.getBoundingClientRect(),b=window.innerHeight||1,S=v.top+v.height/2,h=b/2+v.height/2;f.p=jn((S-b/2)/(h||1),-1,1)},m=Oc(e,v=>{l.x=dr(l.x,f.x,n.speed,v),l.y=dr(l.y,f.y,n.speed,v),l.p=dr(l.p,f.p,n.speed,v),x(),Math.abs(l.x-f.x)>.001||Math.abs(l.y-f.y)>.001||Math.abs(l.p-f.p)>.001?u=0:(u+=v,u>n.idleSleep&&(l.x=f.x,l.y=f.y,l.p=f.p,x(),m.pause()))},{rootMargin:"200px"});t(()=>m.destroy());const w=()=>{u=0,m.resume()};if(n.mouse){const v=S=>{if(S.pointerType!=="touch"){if(n.pointerTarget==="self"){const h=e.getBoundingClientRect();if(!h.width||!h.height)return;f.x=jn((S.clientX-h.left)/h.width*2-1,-1,1),f.y=jn((S.clientY-h.top)/h.height*2-1,-1,1)}else f.x=jn(S.clientX/window.innerWidth*2-1,-1,1),f.y=jn(S.clientY/window.innerHeight*2-1,-1,1);w()}},b=n.pointerTarget==="self"?e:window;r(b,"pointermove",v,{passive:!0}),r(document,"pointerleave",()=>{f.x=0,f.y=0,w()})}if(n.scroll){const v=cv(()=>{d(),w()});r(window,"scroll",v,{passive:!0}),r(window,"resize",v,{passive:!0}),t(()=>v.cancel()),d(),l.p=f.p}x(),o("ready",{layers:i.length}),t(()=>{for(const v of["--fx-plx-x","--fx-plx-y","--fx-plx-s","--fx-plx-mx","--fx-plx-my","--fx-plx-sy","--fx-plx-z","--fx-plx-perspective"])e.style.removeProperty(v)})}}),kv=typeof HTMLElement<"u"&&"inert"in HTMLElement.prototype,Sv='a[href],button,input,select,textarea,[tabindex]:not([tabindex="-1"])';function To(e,n){if(!e)return;if(e.setAttribute("aria-hidden",n?"true":"false"),kv){e.inert=n;return}const r=e.querySelectorAll(Sv);for(const t of r)if(n)t.hasAttribute("data-fx-prev-tabindex")||t.setAttribute("data-fx-prev-tabindex",t.getAttribute("tabindex")??""),t.setAttribute("tabindex","-1");else{const a=t.getAttribute("data-fx-prev-tabindex");if(a===null)continue;a===""?t.removeAttribute("tabindex"):t.setAttribute("tabindex",a),t.removeAttribute("data-fx-prev-tabindex")}}const jv=In({name:"flip-card",defaults:{trigger:"both",axis:"y",direction:1,duration:600,perspective:1400,flipOnFocus:!0,asButton:!0},guard:{motion:"ignore",pointer:"any"},setup({el:e,opts:n,on:r,addCleanup:t,setVar:a,emit:o}){const i=e.querySelector(".fx-flip-card__inner"),l=e.querySelector('[data-fx-face="front"]')||e.querySelector(".fx-flip-card__face--front"),f=e.querySelector('[data-fx-face="back"]')||e.querySelector(".fx-flip-card__face--back");if(!i||!l||!f){console.warn(`[fx:flip-card] 구조가 맞지 않습니다. README의 마크업을 확인하세요.
  .fx-flip-card > .fx-flip-card__inner > (.fx-flip-card__face--front, --back)`);return}a("--fx-flip-duration",`${n.duration}ms`),a("--fx-flip-perspective",`${n.perspective}px`),a("--fx-flip-deg",`${n.direction<0?-180:180}deg`),e.dataset.fxFlipAxis=n.axis==="x"?"x":"y";const u=e.tagName==="BUTTON"||e.tagName==="A"&&e.hasAttribute("href"),x=[],d=(c,p,g)=>{x.push([c,p,c.getAttribute(p)]),c.setAttribute(p,g)};u||(e.hasAttribute("tabindex")||d(e,"tabindex","0"),n.asButton&&(e.hasAttribute("role")||d(e,"role","button"),d(e,"aria-pressed","false"))),t(()=>{for(const[c,p,g]of x.reverse())g===null?c.removeAttribute(p):c.setAttribute(p,g)});let m=!1;const w=()=>{e.classList.toggle("is-flipped",m),e.hasAttribute("aria-pressed")&&e.setAttribute("aria-pressed",String(m)),To(l,m),To(f,!m),o("flip",{flipped:m})},v=c=>{c!==m&&(m=c,w())},b=Bm(),S=n.trigger==="hover"||n.trigger==="both"&&b,h=n.trigger==="click"||n.trigger==="both"&&!b;return S&&(r(e,"pointerenter",c=>{c.pointerType!=="touch"&&v(!0)}),r(e,"pointerleave",c=>{c.pointerType!=="touch"&&(e.contains(document.activeElement)&&n.flipOnFocus||v(!1))})),h&&r(e,"click",c=>{c.target.closest("a[href],button,input,select,textarea")||v(!m)}),r(e,"keydown",c=>{c.key!=="Enter"&&c.key!==" "&&c.key!=="Spacebar"||c.target===e&&(c.preventDefault(),v(!m))}),r(e,"keydown",c=>{c.key==="Escape"&&m&&v(!1)}),n.flipOnFocus&&(r(e,"focusin",()=>v(!0)),r(e,"focusout",c=>{e.contains(c.relatedTarget)||e.matches(":hover")&&S||v(!1)})),w(),t(()=>{e.classList.remove("is-flipped"),To(l,!1),To(f,!1),delete e.dataset.fxFlipAxis;for(const c of["--fx-flip-duration","--fx-flip-perspective","--fx-flip-deg"])e.style.removeProperty(c)}),{flip:()=>v(!m),show:c=>v(c==="back"),get flipped(){return m}}}});function Ev(e,n){for(const[r,t]of Object.entries(n))t==null||t===!1||e.setAttribute(r,t===!0?"":String(t))}const Cv=In({name:"model-showcase",defaults:{src:null,iosSrc:null,alt:"3D 모델",poster:null,cameraControls:!0,autoRotate:!0,autoRotateDelay:1500,rotationPerSecond:"18deg",disableZoom:!0,disablePan:!0,disableTap:!1,ar:!1,arModes:"webxr scene-viewer quick-look",exposure:1,shadowIntensity:.75,shadowSoftness:1,environmentImage:"neutral",skybox:!1,cameraOrbit:null,minCameraOrbit:null,maxCameraOrbit:null,fieldOfView:null,autoplay:!0,animationName:null,follow:!1,followDecay:80,followYaw:28,followPitch:10,interactionPrompt:"auto",preloadMargin:"300px"},guard:{motion:"ignore",webgl:!0,pointer:"any"},setup({el:e,opts:n,addCleanup:r,setVar:t,emit:a}){var b;if(!n.src){console.warn("[fx:model-showcase] src 옵션(.glb 경로)이 필요합니다.");return}const o=((b=e.ownerDocument)==null?void 0:b.defaultView)??window;let i=typeof n.environmentImage=="string"&&n.environmentImage.trim()||"neutral";/\.exr([?#]|$)/i.test(i)&&(console.warn(`[fx:model-showcase] .exr 환경 이미지는 model-viewer가 지원하지 않습니다: ${i}
.hdr(또는 .jpg)로 다시 받아 주세요. 기본 조명으로 대신합니다.`),i="neutral");const l=n.skybox&&/[./]/.test(i)?i:null;n.skybox&&!l&&console.warn("[fx:model-showcase] skybox는 .hdr/.jpg 환경 이미지 URL이 있어야 켜집니다 — environmentImage가 기본 조명('neutral')이라 이번에는 무시합니다.");const f=e.querySelector(".fx-model__poster"),u=n.poster||(f==null?void 0:f.getAttribute("src"))||null;let x=!1,d=null;r(()=>{x=!0,d==null||d.remove(),d=null,e.classList.remove("fx-model--loading","fx-model--loaded","fx-model--failed"),e.style.removeProperty("--fx-model-progress")});const m=Ys(e,{rootMargin:n.preloadMargin,threshold:0,onEnter:()=>{m(),w()}});r(()=>m());async function w(){if(x)return;e.classList.add("fx-model--loading");try{await iv()}catch(g){console.warn("[fx:model-showcase] model-viewer 로드 실패 — 포스터를 유지합니다.",g),e.classList.remove("fx-model--loading"),e.classList.add("fx-model--failed");return}if(x)return;const S=n.autoRotate&&!n.follow&&!ro();d=document.createElement("model-viewer"),d.className="fx-model__viewer",Ev(d,{src:n.src,"ios-src":n.iosSrc,alt:n.alt,poster:u,"camera-controls":n.cameraControls,"auto-rotate":S,"auto-rotate-delay":n.autoRotateDelay,"rotation-per-second":n.rotationPerSecond,"disable-zoom":n.disableZoom,"disable-pan":n.disablePan,"disable-tap":n.disableTap,ar:n.ar,"ar-modes":n.ar?n.arModes:null,exposure:n.exposure,"shadow-intensity":n.shadowIntensity,"shadow-softness":n.shadowSoftness,"environment-image":i,"skybox-image":l,"camera-orbit":n.cameraOrbit,"min-camera-orbit":n.minCameraOrbit,"max-camera-orbit":n.maxCameraOrbit,"field-of-view":n.fieldOfView,autoplay:n.autoplay,"animation-name":n.animationName,"interaction-prompt":n.interactionPrompt,loading:"eager",reveal:"auto"});const h=g=>{var k;const y=((k=g.detail)==null?void 0:k.totalProgress)??0;t("--fx-model-progress",y),a("progress",{progress:y})},c=()=>{e.classList.remove("fx-model--loading"),e.classList.add("fx-model--loaded"),v(d),a("load")},p=g=>{console.warn(`[fx:model-showcase] 모델 로드 실패: ${n.src}
GitHub Pages라면 base 경로 문제일 가능성이 높습니다. README 8번을 보세요.`,g.detail??g),e.classList.remove("fx-model--loading"),e.classList.add("fx-model--failed"),d==null||d.remove(),d=null,a("error",{src:n.src})};d.addEventListener("progress",h),d.addEventListener("load",c,{once:!0}),d.addEventListener("error",p,{once:!0}),e.appendChild(d),a("mounted")}function v(S){if(!S||!n.follow||ro())return;S.setAttribute("interpolation-decay",String(Math.max(20,Number(n.followDecay)||80)));const h=Math.max(0,Number(n.followYaw)||28),c=Math.max(0,Number(n.followPitch)||10);let p=0;const g=(we,P)=>{const W=`${we.toFixed(1)}deg ${P.toFixed(1)}deg 105%`;S.cameraOrbit=W,S.setAttribute("camera-orbit",W)},y=n.autoRotate,k=Math.max(.5,(parseFloat(n.rotationPerSecond)||18)/4),_=Math.max(800,Number(n.autoRotateDelay)||1500);let j=0,C=0;const R=()=>{C&&(o.clearInterval(C),C=0)},M=()=>{!y||C||(C=o.setInterval(()=>{p+=k,g(p,75)},250))};let A=!1;const Q=()=>{var P;A=!1;const we=(P=S.getCameraOrbit)==null?void 0:P.call(S);we&&Number.isFinite(we.theta)&&(p=we.theta*180/Math.PI),M()},B=we=>{var P;((P=we.detail)==null?void 0:P.source)==="user-interaction"&&(A=!0,R(),o.clearTimeout(j),j=o.setTimeout(Q,_))};S.addEventListener("camera-change",B),r(()=>S.removeEventListener("camera-change",B));let V=0;const ye=we=>{if(A)return;const P=we.timeStamp??0;if(P-V<80)return;V=P,R(),o.clearTimeout(j),j=o.setTimeout(M,_);const W=we.clientX/o.innerWidth*2-1,Y=we.clientY/o.innerHeight*2-1;let ue=-W*h;ue+=Math.round((p-ue)/360)*360,p=ue,g(p,75-Y*c)};M(),o.addEventListener("pointermove",ye,{passive:!0}),r(()=>{R(),o.clearTimeout(j),o.removeEventListener("pointermove",ye),S.removeAttribute("interpolation-decay")})}return{get viewer(){return d},reset:()=>{var S;return(S=d==null?void 0:d.resetTurntableRotation)==null?void 0:S.call(d)},toDataURL:(S="image/webp")=>{var h;return((h=d==null?void 0:d.toDataURL)==null?void 0:h.call(d,S))??null}}}}),Nv=In({name:"hover-preview",defaults:{width:240,speed:.16,offsetX:24,offsetY:-20,rotate:3,card:".wf-card"},guard:{pointer:"fine",motion:"ignore"},setup({el:e,opts:n,on:r,addCleanup:t}){var h,c;const a=e.ownerDocument,o=[...e.querySelectorAll(n.card)];if(!o.length)return;const i=a.createElement("div");i.className="fx-hover-preview__float",i.style.width=`${n.width}px`,i.setAttribute("aria-hidden","true");const l=a.createElement("img");l.alt="",i.appendChild(l),a.body.appendChild(i),t(()=>i.remove());let f=0,u=0,x=0,d=0,m=0,w=!1;const v=ro(),b=()=>{const p=v?1:n.speed;if(f=El(f,x,p),u=El(u,d,p),i.style.transform=`translate(${(f+n.offsetX).toFixed(1)}px, ${(u+n.offsetY).toFixed(1)}px) rotate(${n.rotate}deg)`,!w&&Math.abs(f-x)<.5&&Math.abs(u-d)<.5){m=0;return}m=a.defaultView.requestAnimationFrame(b)},S=()=>{m||(m=a.defaultView.requestAnimationFrame(b))};t(()=>{m&&a.defaultView.cancelAnimationFrame(m)});for(const p of o){const g=((h=p.querySelector("img"))==null?void 0:h.currentSrc)||((c=p.querySelector("img"))==null?void 0:c.src);g&&(r(p,"pointerenter",y=>{l.src=g,w=!0,f=x=y.clientX,u=d=y.clientY,i.classList.add("is-on"),S()}),r(p,"pointermove",y=>{x=y.clientX,d=y.clientY,S()}),r(p,"pointerleave",()=>{w=!1,i.classList.remove("is-on")}))}}}),yd="!<>-_\\/[]{}—=+*^?#ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",$v=In({name:"text-scramble",defaults:{duration:1400,churn:.28,delay:0,repeat:!0},guard:{motion:"skip"},setup({el:e,opts:n,addCleanup:r}){var b;const t=e.ownerDocument.defaultView??window,a=e.ownerDocument.createTreeWalker(e,4),o=[];let i=0;for(let S=a.nextNode();S;S=a.nextNode())S.data.trim()&&(o.push({node:S,original:S.data,offset:i}),i+=S.data.length);if(!i)return;let l=0,f=0,u=!1;const x=()=>o.forEach(({node:S,original:h})=>{S.data=h}),d=()=>{if(u&&!n.repeat)return;u=!0;const S=t.performance.now(),h=c=>{const p=Math.min(1,(c-S)/Math.max(200,n.duration)),g=Math.floor(i*p);for(const{node:y,original:k,offset:_}of o)y.data=[...k].map((j,C)=>_+C<g||/\s/.test(j)?j:Math.random()<n.churn?yd[Math.random()*yd.length|0]:y.data[C]??j).join("");p<1?l=t.requestAnimationFrame(h):(x(),l=0)};l=t.requestAnimationFrame(h)},m=(b=e.closest)==null?void 0:b.call(e,".fx-scroll-reveal"),w=S=>{if(!m||m.classList.contains("is-revealed"))return S();let h=!1;const c=()=>{h=!0,g.disconnect(),t.clearTimeout(y)},p=()=>{h||(c(),S())},g=new t.MutationObserver(()=>{m.classList.contains("is-revealed")&&t.setTimeout(p,150)});g.observe(m,{attributes:!0,attributeFilter:["class"]});const y=t.setTimeout(p,2e3);r(c)},v=Ys(e,{threshold:.4,onEnter:()=>{f=t.setTimeout(()=>w(d),n.delay)}});r(()=>{v(),t.clearTimeout(f),l&&t.cancelAnimationFrame(l),x()})}}),Lv=In({name:"spotlight",defaults:{size:420,strength:.22,color:""},guard:{motion:"ignore",pointer:"fine"},setup({el:e,opts:n,on:r,addCleanup:t,setVar:a}){getComputedStyle(e).position==="static"&&(e.style.position="relative",t(()=>{e.style.removeProperty("position")}));const o=e.ownerDocument.createElement("i");o.className="fx-spotlight__glow fx-layer",o.setAttribute("aria-hidden","true"),e.appendChild(o),t(()=>o.remove()),a("--fx-spot-size",`${n.size}px`),a("--fx-spot-alpha",String(n.strength)),n.color&&a("--fx-spot-color",n.color),r(e,"pointermove",i=>{const l=e.getBoundingClientRect();a("--fx-spot-x",`${((i.clientX-l.left)/l.width*100).toFixed(2)}%`),a("--fx-spot-y",`${((i.clientY-l.top)/l.height*100).toFixed(2)}%`)}),r(e,"pointerenter",()=>e.classList.add("is-spot-on")),r(e,"pointerleave",()=>e.classList.remove("is-spot-on")),t(()=>e.classList.remove("is-spot-on"))}}),Rv=In({name:"starfield",defaults:{density:1,speed:6,twinkle:.6,size:1.2,color:""},guard:{motion:"ignore",webgl:!1},setup({el:e,opts:n,addCleanup:r}){const t=e.ownerDocument,a=t.defaultView??window;getComputedStyle(e).position==="static"&&(e.style.position="relative",r(()=>{e.style.removeProperty("position")}));const o=t.createElement("canvas");o.className="fx-starfield__cv fx-layer",o.setAttribute("aria-hidden","true"),e.prepend(o),r(()=>o.remove());const i=o.getContext("2d"),f=(()=>{const c=(n.color||"").trim();return c||getComputedStyle(e).getPropertyValue("--fx-star-color").trim()||"#ffffff"})();let u=[],x=0,d=0;const m=()=>{const c=Math.min(a.devicePixelRatio||1,2);x=e.clientWidth,d=e.clientHeight,o.width=Math.max(1,Math.round(x*c)),o.height=Math.max(1,Math.round(d*c)),i.setTransform(c,0,0,c,0,0);const p=Math.round(x*d/9e3*n.density);u=Array.from({length:p},()=>({x:Math.random()*x,y:Math.random()*d,r:(.4+Math.random()*1.1)*n.size,a:.35+Math.random()*.65,p:Math.random()*Math.PI*2,v:.5+Math.random()}))},w=c=>{i.clearRect(0,0,x,d),i.fillStyle=f;for(const p of u){const g=1-n.twinkle+n.twinkle*(.5+.5*Math.sin(p.p+c*2));i.globalAlpha=p.a*g,i.beginPath(),i.arc(p.x,p.y,p.r,0,Math.PI*2),i.fill()}i.globalAlpha=1},v=new a.ResizeObserver(()=>{m(),w(0)});if(v.observe(e),r(()=>v.disconnect()),m(),w(0),ro())return;let b=0,S=null;const h=c=>{S===null&&(S=c);const p=(c-S)/1e3,g=n.speed/60;for(const y of u)y.x-=g*y.v,y.x<-2&&(y.x=x+2,y.y=Math.random()*d);w(p),b=a.requestAnimationFrame(h)};b=a.requestAnimationFrame(h),r(()=>a.cancelAnimationFrame(b))}}),wd={reveal:fv,silk:hv,dots:vv,tilt:yv,magnetic:bv,parallax:_v,flip:jv,preview:Nv,scramble:$v,spotlight:Lv,starfield:Rv},Mv={model:{mount:Cv,cls:"fx-model"}};function Tv(e,n,r,t=!0){const a=N.useRef(null),o=e+JSON.stringify(n??{})+((r==null?void 0:r.id)??"")+t;return N.useEffect(()=>{const i=a.current,l=Mv[e];if(!i||!l||!t)return;i.classList.contains(l.cls)||i.classList.add(l.cls);const f={...n};if(e==="model"&&!f.src)return;let u=null;try{u=l.mount(i,f)}catch{}return()=>{try{u==null||u.destroy()}catch{}}},[o]),a}const zv=new Set(["silk","dots","starfield","spotlight"]);function Pv(e,n,r=!0,t=""){const a=N.useRef(null),o=N.useRef(new Map),i=JSON.stringify(e??[])+((n==null?void 0:n.id)??"")+r+t;return N.useEffect(()=>{const l=a.current,f=o.current,u=d=>{var w;const m=f.get(d);if(m){try{(w=m.handle)==null||w.destroy()}catch{}m.classes.forEach(v=>l==null?void 0:l.classList.remove(v)),f.delete(d)}};if(!l||!r){[...f.keys()].forEach(u);return}const x=new Map;for(const d of e??[]){const m=yt[d.name];if(!m||!wd[d.name])continue;const w=!zv.has(d.name);x.set(d.name,{fx:d,meta:m,key:JSON.stringify(d.options??{})+((n==null?void 0:n.id)??"")+(w?t:"")})}for(const d of[...f.keys()]){const m=x.get(d);(!m||m.key!==f.get(d).key)&&u(d)}for(const[d,m]of x){if(f.has(d))continue;const{fx:w,meta:v}=m,b=[];v.needsClass&&(l.classList.add(v.needsClass),b.push(v.needsClass));const S={...w.options};if(v.themeColors==="silk"&&(n!=null&&n.silk)&&(S.colors=n.silk),w.name==="dots"&&(n!=null&&n.dot)&&(S.color=n.dot),w.name==="silk"&&(n!=null&&n.scrim)){const p=n.scrim==="light"?"fx-silk--scrim-light":"fx-silk--scrim";l.classList.add(p),b.push(p)}v.layerTargets&&[...l.children].filter(g=>!g.hasAttribute("data-fx-depth")).forEach((g,y)=>g.setAttribute("data-fx-depth",String(.2+y*.25)));let h=l;if(v.target){const p=l.querySelectorAll(v.target);if(!p.length){b.forEach(g=>l.classList.remove(g));continue}h=[...p]}let c=null;try{c=wd[w.name](h,S)}catch{}f.set(d,{handle:c,key:m.key,classes:b})}},[i]),N.useEffect(()=>{const l=a.current;l&&o.current.forEach(f=>f.classes.forEach(u=>l.classList.add(u)))}),N.useEffect(()=>{const l=o.current;return()=>{l.forEach(f=>{var u;try{(u=f.handle)==null||u.destroy()}catch{}}),l.clear()}},[]),a}const Ym={kind:"none",image:null,video:null,poster:null,mode:"fixed",dim:.35,blur:0,gray:0,gradient:!1,scrollFx:"없음",grain:0},qm=[{id:"none",label:"없음"},{id:"zoom",label:"스크롤하면 커짐"},{id:"drift",label:"스크롤보다 느리게 밀림 (시차)"},{id:"dim",label:"내려갈수록 어두워짐"},{id:"blur",label:"내려갈수록 흐려짐"}],Av=e=>{var n;return((n=qm.find(r=>r.label===e))==null?void 0:n.id)??"none"},Km=[{id:"fixed",label:"고정",hint:"스크롤해도 그대로"},{id:"scroll",label:"함께 스크롤",hint:"내용과 같이 올라감"},{id:"zoom",label:"느린 확대",hint:"30초에 걸쳐 조금씩"},{id:"tile",label:"무늬 반복",hint:"작은 그림을 타일처럼"}],Dv=[{key:"kind",label:"배경",type:"select",options:["none","image","video"]},{key:"image",label:"배경 이미지",type:"image"},{key:"video",label:"배경 영상 (mp4 · webm)",type:"file",accept:"video/*",maxMB:24},{key:"poster",label:"영상 첫 화면 그림",type:"image"},{key:"mode",label:"움직임",type:"select",options:Km.map(e=>e.label)},{key:"dim",label:"어둡게",type:"range",min:0,max:.85,step:.05},{key:"blur",label:"흐림",type:"range",min:0,max:24,step:1,unit:"px"},{key:"gray",label:"흑백",type:"range",min:0,max:1,step:.05},{key:"gradient",label:"아래로 어둡게",type:"boolean"},{key:"scrollFx",label:"스크롤 반응",type:"select",options:qm.map(e=>e.label)},{key:"grain",label:"그레인 (필름 질감)",type:"range",min:0,max:.3,step:.02}],Xm=e=>{var n;return((n=Km.find(r=>r.label===e))==null?void 0:n.id)??e??"fixed"};function js(e){var n,r;return!e||e.kind==="none"?!1:e.kind==="video"?!!((n=e.video)!=null&&n.id):!!((r=e.image)!=null&&r.id)}function Cl(e){const n=Xm(e==null?void 0:e.mode),r=Av(e==null?void 0:e.scrollFx);return["wf-bg",`wf-bg--${n}`,e!=null&&e.gradient?"has-gradient":"",r!=="none"?`wf-bg--sfx-${r}`:""].filter(Boolean).join(" ")}function Qm(e){const n=[];e!=null&&e.blur&&n.push(`blur(${e.blur}px)`),e!=null&&e.gray&&n.push(`grayscale(${e.gray})`);const r={};return n.length&&(r.filter=n.join(" ")),e!=null&&e.blur&&(r.transform=`scale(${(1+Math.min(e.blur,24)/120).toFixed(3)})`),r}const Zm=e=>e!=null&&e.dim?{backgroundColor:`rgba(0,0,0,${e.dim})`}:{},xt={navMode:"anchor",navSync:!0,title:"",description:"",favLetter:"",favColor:"#4f6bff",lang:"ko",ogImage:null,siteUrl:"",background:{...Ym},enterFx:"없음",enterDelay:2,scrollBar:!1,smoothScroll:!1,cursor:!1,snapScroll:!1,introLoader:!1},Jm=[{id:"none",label:"없음"},{id:"sides",label:"좌우에서 모이기"},{id:"up",label:"아래에서 올라오기"},{id:"zoom",label:"살짝 커지며"}],eh=e=>{var n;return((n=Jm.find(r=>r.label===e))==null?void 0:n.id)??"none"};function nh(e,n=null){const r=o=>{const i=parseInt(String(o??""),10);return Number.isFinite(i)?`r${i}`:`s${o}`},t={};(e??[]).forEach((o,i)=>{var f;if(n&&!n[o.id])return;const l=parseInt(String(o.col??""),10);(t[f=r(o.row)]??(t[f]=[])).push({id:o.id,c:Number.isFinite(l)?l:null,i})});const a={};for(const o of Object.values(t))o.sort((i,l)=>(i.c??i.i)-(l.c??l.i)||i.i-l.i),o.forEach((i,l)=>{a[i.id]=o.length<2?"up":l===0?"left":l===o.length-1?"right":"up"});return a}const Ov=[{key:"title",label:"사이트 제목 (탭에 보임)",type:"text"},{key:"description",label:"한 줄 설명 (검색·공유에 보임)",type:"textarea"},{key:"ogImage",label:"공유 미리보기 이미지",type:"image"},{key:"siteUrl",label:"배포 주소 (공유 미리보기에 필요)",type:"text"},{key:"favLetter",label:"탭 아이콘 글자",type:"text"},{key:"favColor",label:"탭 아이콘 색",type:"color"},{key:"lang",label:"언어",type:"select",options:["ko","en"]}],Fv=[{key:"enterFx",label:"영역 등장 효과",type:"select",options:Jm.map(e=>e.label)},{key:"enterDelay",label:"등장 시작 지점 (노출 %)",type:"range",min:0,max:40,step:1,unit:"%",needsFx:!0},{key:"scrollBar",label:"스크롤 진행 바 (상단)",type:"boolean"}],rh=e=>Math.max(0,Math.min(60,Number(e??xt.enterDelay)||0)),Iv=[{key:"smoothScroll",label:"부드러운 스크롤 (Lenis · 약 10KB)",type:"boolean"},{key:"cursor",label:"커스텀 커서 (점 + 링)",type:"boolean"},{key:"snapScroll",label:"섹션 단위 스냅 (한 페이지 구성)",type:"boolean"},{key:"introLoader",label:"인트로 로더 (제목 + 커튼)",type:"boolean"}],to=(e,n)=>{var r,t;return((r=e==null?void 0:e.title)==null?void 0:r.trim())||((t=n==null?void 0:n[0])==null?void 0:t.name)||"Portfolio"};function Bv(e,n){if(!n)return null;const r=String((e==null?void 0:e.siteUrl)??"").trim().replace(/\/+$/,"");return!r||!/^https?:\/\//i.test(r)?null:`${r}/${n.replace(/^\.\//,"")}`}function Wv(e,n){var o;const r=(((o=e==null?void 0:e.favLetter)==null?void 0:o.trim())||to(e,n).trim().charAt(0)||"P").slice(0,2),a=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="${(e==null?void 0:e.favColor)||xt.favColor}"/><text x="32" y="34" text-anchor="middle" dominant-baseline="central" font-family="system-ui,sans-serif" font-size="${r.length>1?30:40}" font-weight="700" fill="#fff">${r.replace(/[<>&"]/g,"")}</text></svg>`;return`data:image/svg+xml,${encodeURIComponent(a)}`}const Yt=[{id:"midnight",label:"미드나잇",swatch:["#0b0b12","#4f46e5","#a78bfa"],dark:!0,bg:"#0b0b12",bgAlt:"#0e1020",surface:"#16161f",border:"#262633",text:"#e9e9f2",muted:"#b9bad4",soft:"#8b8ca6",accent:"#6b6bff",accent2:"#22d3ee",accent3:"#f472b6",silk:["#12142c","#4f46e5","#a78bfa"],scrim:"dark",dot:"#7c8cff",line:"#e9e9f2"},{id:"carbon",label:"카본",swatch:["#0a0a0a","#3f3f46","#e4e4e7"],dark:!0,bg:"#0a0a0a",bgAlt:"#121214",surface:"#18181b",border:"#27272a",text:"#fafafa",muted:"#a1a1aa",soft:"#71717a",accent:"#e4e4e7",accent2:"#a1a1aa",accent3:"#d4d4d8",silk:["#0a0a0a","#3f3f46","#71717a"],scrim:"dark",dot:"#a1a1aa",line:"#fafafa"},{id:"mint",label:"민트",swatch:["#04120f","#0d9488","#5eead4"],dark:!0,bg:"#04120f",bgAlt:"#07201b",surface:"#0c2a24",border:"#14453c",text:"#e6fffa",muted:"#99f6e4",soft:"#5eead4",accent:"#14b8a6",accent2:"#5eead4",accent3:"#fbbf24",silk:["#04120f","#0d9488","#5eead4"],scrim:"dark",dot:"#2dd4bf",line:"#e6fffa"},{id:"sunset",label:"선셋",swatch:["#140a06","#c2410c","#fbbf24"],dark:!0,bg:"#140a06",bgAlt:"#1d0f08",surface:"#26150c",border:"#3d2415",text:"#fff7ed",muted:"#fed7aa",soft:"#fdba74",accent:"#f97316",accent2:"#fbbf24",accent3:"#fb7185",silk:["#140a06","#c2410c","#fbbf24"],scrim:"dark",dot:"#fb923c",line:"#fff7ed"},{id:"paper",label:"페이퍼",swatch:["#f7f6f3","#d6d3cd","#1c1917"],dark:!1,bg:"#f7f6f3",bgAlt:"#efedE8",surface:"#ffffff",border:"#e0ddd6",text:"#1c1917",muted:"#57534e",soft:"#78716c",accent:"#1c1917",accent2:"#a16207",accent3:"#9f1239",silk:["#f7f6f3","#d6d3cd","#a8a29e"],scrim:"light",dot:"#a8a29e",line:"#1c1917"},{id:"arctic",label:"아틱",swatch:["#f0f6ff","#bfdbfe","#1e3a8a"],dark:!1,bg:"#f0f6ff",bgAlt:"#e4eeff",surface:"#ffffff",border:"#cbd9f0",text:"#0f1e3d",muted:"#3b5482",soft:"#64748b",accent:"#2563eb",accent2:"#0891b2",accent3:"#7c3aed",silk:["#f0f6ff","#bfdbfe","#93c5fd"],scrim:"light",dot:"#60a5fa",line:"#0f1e3d"},{id:"ocean",label:"오션",swatch:["#051220","#0ea5e9","#7dd3fc"],dark:!0,bg:"#051220",bgAlt:"#081a2e",surface:"#0c2338",border:"#173a56",text:"#e8f6ff",muted:"#a5d8f3",soft:"#7ab8d9",accent:"#38bdf8",accent2:"#34d399",accent3:"#fbbf24",silk:["#051220","#0ea5e9","#7dd3fc"],scrim:"dark",dot:"#38bdf8",line:"#e8f6ff"},{id:"forest",label:"포레스트",swatch:["#071108","#16a34a","#86efac"],dark:!0,bg:"#071108",bgAlt:"#0b1a0d",surface:"#102415",border:"#1d3d26",text:"#ecfdf1",muted:"#b5e8c7",soft:"#86c89d",accent:"#22c55e",accent2:"#a3e635",accent3:"#fbbf24",silk:["#071108","#16a34a","#86efac"],scrim:"dark",dot:"#4ade80",line:"#ecfdf1"},{id:"slate",label:"슬레이트",swatch:["#0f172a","#6366f1","#c7d2fe"],dark:!0,bg:"#0f172a",bgAlt:"#14203a",surface:"#1b2a47",border:"#2b3f61",text:"#eef2ff",muted:"#bcc7e8",soft:"#8b9ac4",accent:"#818cf8",accent2:"#34d399",accent3:"#f472b6",silk:["#0f172a","#6366f1","#c7d2fe"],scrim:"dark",dot:"#818cf8",line:"#eef2ff"},{id:"burgundy",label:"버건디",swatch:["#170609","#be123c","#fda4af"],dark:!0,bg:"#170609",bgAlt:"#22090e",surface:"#2d0d13",border:"#4c1722",text:"#fff1f2",muted:"#fecdd3",soft:"#fb9aa8",accent:"#f43f5e",accent2:"#fb923c",accent3:"#e879f9",silk:["#170609","#be123c","#fda4af"],scrim:"dark",dot:"#fb7185",line:"#fff1f2"},{id:"grape",label:"그레이프",swatch:["#12071f","#9333ea","#d8b4fe"],dark:!0,bg:"#12071f",bgAlt:"#1a0b2e",surface:"#241239",border:"#3c1f5c",text:"#f5f0ff",muted:"#ddc9f5",soft:"#b593dd",accent:"#a855f7",accent2:"#22d3ee",accent3:"#fbbf24",silk:["#12071f","#9333ea","#d8b4fe"],scrim:"dark",dot:"#c084fc",line:"#f5f0ff"},{id:"neon",label:"네온",swatch:["#0a0f0a","#a3e635","#dcfce7"],dark:!0,bg:"#0a0f0a",bgAlt:"#0f160f",surface:"#141d14",border:"#243324",text:"#f2ffe8",muted:"#c8e8b0",soft:"#93b87b",accent:"#a3e635",accent2:"#22d3ee",accent3:"#f472b6",silk:["#0a0f0a","#65a30d","#a3e635"],scrim:"dark",dot:"#a3e635",line:"#f2ffe8"},{id:"rose",label:"로즈",swatch:["#fdf2f4","#fda4af","#9f1239"],dark:!1,bg:"#fdf2f4",bgAlt:"#fce8ec",surface:"#ffffff",border:"#f3d3da",text:"#3f0d1c",muted:"#88304a",soft:"#b0637a",accent:"#e11d48",accent2:"#d97706",accent3:"#7c3aed",silk:["#fdf2f4","#fda4af","#fb7185"],scrim:"light",dot:"#fb7185",line:"#3f0d1c"},{id:"lavender",label:"라벤더",swatch:["#f6f4ff","#c4b5fd","#4c1d95"],dark:!1,bg:"#f6f4ff",bgAlt:"#eeeaff",surface:"#ffffff",border:"#dcd4f5",text:"#241145",muted:"#5b3f8f",soft:"#8b74b8",accent:"#7c3aed",accent2:"#0891b2",accent3:"#e11d48",silk:["#f6f4ff","#c4b5fd","#a78bfa"],scrim:"light",dot:"#a78bfa",line:"#241145"},{id:"mocha",label:"모카",swatch:["#f5efe8","#d3b8a0","#5c3a21"],dark:!1,bg:"#f5efe8",bgAlt:"#eee5da",surface:"#fffdfa",border:"#e0d2c2",text:"#33200f",muted:"#6b4a2e",soft:"#96755a",accent:"#92400e",accent2:"#0f766e",accent3:"#9f1239",silk:["#f5efe8","#d3b8a0","#b08968"],scrim:"light",dot:"#b08968",line:"#33200f"},{id:"cream",label:"크림",swatch:["#fffbeb","#fcd34d","#78350f"],dark:!1,bg:"#fffbeb",bgAlt:"#fdf3d3",surface:"#ffffff",border:"#f1e2b6",text:"#3d2a08",muted:"#7c5b16",soft:"#a8873a",accent:"#d97706",accent2:"#65a30d",accent3:"#be123c",silk:["#fffbeb","#fcd34d","#fbbf24"],scrim:"light",dot:"#fbbf24",line:"#3d2a08"},{id:"sage",label:"세이지",swatch:["#f2f6ec","#a9c49a","#31501f"],dark:!1,bg:"#f2f6ec",bgAlt:"#e9f0df",surface:"#ffffff",border:"#d6e2c8",text:"#1f3311",muted:"#4a6b33",soft:"#7d9a68",accent:"#4d7c0f",accent2:"#0f766e",accent3:"#b45309",silk:["#f2f6ec","#a9c49a","#84cc16"],scrim:"light",dot:"#84cc16",line:"#1f3311"},{id:"ivory",label:"아이보리 블랙",swatch:["#ffffff","#d4d4d4","#111111"],dark:!1,bg:"#ffffff",bgAlt:"#f7f7f7",surface:"#fafafa",border:"#e5e5e5",text:"#111111",muted:"#525252",soft:"#737373",accent:"#111111",accent2:"#2563eb",accent3:"#dc2626",silk:["#ffffff","#d4d4d4","#a3a3a3"],scrim:"light",dot:"#a3a3a3",line:"#111111"}],Hv="paper",ra=e=>Yt.find(n=>n.id===e)??Yt[0],th=e=>(e==null?void 0:e.star)??(e!=null&&e.dark?"#ffffff":(e==null?void 0:e.muted)??"#6b7280");function ah(e){return e!=null&&e.dark?{bg:"#f7f6f2",surface:"#ffffff",border:"#e3e1d9",text:"#1d1d24",muted:"#5d5d68"}:{bg:"#101116",surface:"#181a22",border:"#2a2d38",text:"#eceef4",muted:"#a6aab8"}}const bd=()=>s.jsxs("button",{type:"button",className:"wf-mode","data-mode-toggle":!0,"aria-label":"다크 / 라이트 전환",children:[s.jsx("svg",{className:"wf-mode__moon","aria-hidden":"true",width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:s.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}),s.jsxs("svg",{className:"wf-mode__sun","aria-hidden":"true",width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("circle",{cx:"12",cy:"12",r:"4"}),s.jsx("path",{d:"M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"})]})]});function zo({pages:e,current:n,sections:r=null,vertical:t=!1,gap:a=26,uppercase:o=!1}){const i=o?{textTransform:"uppercase",letterSpacing:"0.08em"}:void 0;return r?s.jsxs("nav",{className:`wf-nav ${t?"wf-nav--v":""}`,style:{gap:`${a}px`},children:[r.map(l=>s.jsx("button",{type:"button","data-anchor":l.anchor,className:"wf-nav__item",style:i,children:l.label},l.anchor)),r.length===0&&s.jsx("span",{className:"wf-nav__item",children:"제목이 있는 섹션이 없습니다"})]}):s.jsx("nav",{className:`wf-nav ${t?"wf-nav--v":""}`,style:{gap:`${a}px`},children:e.map(l=>s.jsx("button",{type:"button","data-goto":l.id,className:`wf-nav__item ${l.id===n?"is-current":""}`,style:i,children:l.name},l.id))})}function Uv({partId:e,c:n,pages:r,current:t,sections:a,hasFlip:o,edit:i,regionId:l,tfx:f}){var m,w,v,b,S;const u=n.linkTo==="이 페이지 섹션"?a??[]:null,x=(h="")=>{if(!im(f))return!1;const c=/title/.test(h);return f.target==="제목 + 본문"?!0:c},d=(h,c,p={})=>s.jsx(p0,{tag:p.tag??"span",className:p.className,style:p.style,value:c,multiline:p.multiline,placeholder:p.ph,editable:!!i,split:x(p.className),fxSeed:f?`${f.speed??""}:${f.delay??""}`:"",onCommit:g=>i(h,g)});switch(e){case"topheader":case"header":return s.jsxs("div",{className:"wf-bar",style:{justifyContent:n.align},children:[d(["logo"],n.logo,{className:"wf-bar__logo",ph:"이름 / 로고"}),n.showMenu&&s.jsx(zo,{pages:r,current:t,sections:u}),e==="header"&&n.cta&&s.jsx("button",{type:"button",className:"wf-btn wf-btn--sm",children:d(["cta"],n.cta,{ph:"버튼"})}),n.modeToggle&&s.jsx(bd,{})]});case"nav":return s.jsxs("div",{className:"wf-bar",style:{justifyContent:n.align},children:[s.jsx(zo,{pages:r,current:t,sections:u,gap:n.gap,uppercase:n.uppercase}),n.modeToggle&&s.jsx(bd,{})]});case"hero":return s.jsxs("div",{className:"wf-hero",style:{alignItems:ar(n.align),textAlign:n.align==="center"?"center":"left"},children:[d(["title"],n.title,{tag:"h1",className:"wf-hero__title",style:{fontSize:`clamp(1.9em, 8.5vw, calc(${n.titleScale} * 3.2em))`},multiline:!0,ph:"첫 화면 제목"}),n.subtitle&&d(["subtitle"],n.subtitle,{tag:"p",className:"wf-hero__sub",multiline:!0,ph:"부제"}),n.cta&&s.jsxs("button",{type:"button",className:"wf-btn",style:Ss(n),children:[d(["cta"],n.cta,{ph:"버튼"}),((m=n.ctaFile)==null?void 0:m.id)&&s.jsxs("em",{className:"wf-btn__file",children:["↓ ",n.ctaFile.name]})]})]});case"aside":return s.jsxs("div",{className:"wf-aside",style:{alignItems:ar(n.align),textAlign:n.align==="center"?"center":"left"},children:[((w=n.photo)==null?void 0:w.id)&&s.jsx(xa,{image:n.photo,className:`wf-aside__photo ${n.photoRound?"is-round":""}`,style:{width:`${n.photoSize??96}px`,height:`${n.photoSize??96}px`}}),d(["name"],n.name,{tag:"h2",className:"wf-aside__name",ph:"이름"}),d(["role"],n.role,{tag:"p",className:"wf-aside__role",ph:"직함"}),n.bio&&d(["bio"],n.bio,{tag:"p",className:"wf-aside__bio",multiline:!0,ph:"한 줄 소개"}),n.showMenu&&s.jsx(zo,{pages:r,current:t,sections:u,vertical:!0,gap:10}),n.sticky&&s.jsx("span",{className:"wf-badge",children:"sticky"})]});case"section":return s.jsxs("div",{className:"wf-sec",style:{alignItems:ar(n.align)},children:[d(["title"],n.title,{tag:"h2",className:"wf-sec__title",ph:"섹션 제목"}),s.jsx("div",{className:"wf-sec__cols",style:{gridTemplateColumns:`repeat(${n.columns}, minmax(0, 1fr))`},children:Array.from({length:n.columns},(h,c)=>c===0?s.jsx(qo.Fragment,{children:d(["body"],n.body,{tag:"p",className:"wf-sec__body",multiline:!0,ph:"본문"})},c):s.jsx("p",{className:"wf-sec__body",children:`${c+1}. ${n.body}`},c))}),n.listStyle==="tags"&&s.jsx("div",{className:"wf-tags",children:(n.items??[]).map((h,c)=>s.jsxs("span",{className:"wf-tag",children:[d(["items",c,"label"],h.label,{ph:"항목"}),h.note&&d(["items",c,"note"],h.note,{tag:"em"})]},c))}),n.listStyle==="timeline"&&s.jsx("ol",{className:"wf-time",children:(n.items??[]).map((h,c)=>s.jsxs("li",{className:"wf-time__row",children:[d(["items",c,"label"],h.label,{tag:"b",ph:"항목"}),h.note&&d(["items",c,"note"],h.note)]},c))}),n.listStyle==="marquee"&&s.jsx("div",{className:"wf-marquee",style:{"--marq-t":`${Math.max(10,(((v=n.items)==null?void 0:v.length)??0)*3)}s`},children:s.jsx("div",{className:"wf-marquee__track",children:[0,1].map(h=>s.jsx("div",{className:"wf-marquee__set","aria-hidden":h===1||void 0,children:(n.items??[]).map((c,p)=>s.jsxs("span",{className:"wf-tag",children:[h===0?d(["items",p,"label"],c.label,{ph:"항목"}):s.jsx("span",{children:c.label}),c.note&&(h===0?d(["items",p,"note"],c.note,{tag:"em"}):s.jsx("em",{children:c.note}))]},p))},h))})}),n.listStyle==="stats"&&s.jsx("div",{className:"wf-stats",children:(n.items??[]).map((h,c)=>{const p=/^(\d+)\s*(.*)$/.exec(String(h.note??"").trim());return s.jsxs("div",{className:"wf-stat",children:[s.jsx("b",{className:"wf-stat__num",children:p?s.jsxs(s.Fragment,{children:[s.jsx("i",{className:"wf-stat__count",style:{"--wf-n-to":+p[1]},"aria-hidden":"true"}),s.jsx("span",{className:"wf-stat__plain","aria-hidden":"true",children:p[1]}),p[2]&&s.jsx("span",{className:"wf-stat__suffix","aria-hidden":"true",children:p[2]}),s.jsx("span",{className:"wf-sr",children:h.note})]}):s.jsx("span",{children:h.note||"0"})}),d(["items",c,"label"],h.label,{className:"wf-stat__label",ph:"항목"})]},c)})})]});case"gallery":{const h=xm(n.items,n.columns,n.rows);return s.jsxs("div",{className:`wf-gal${n.grayHover?" is-gray":""}`,children:[d(["title"],n.title,{tag:"h2",className:"wf-sec__title",ph:"섹션 제목"}),s.jsxs("div",{className:"wf-gal__grid",style:{gridTemplateColumns:`repeat(${n.columns}, minmax(0, 1fr))`},children:[h.map(({item:c,index:p})=>{var g,y,k;return c?o?s.jsx("article",{className:"wf-card fx-flip-card is-flip",children:s.jsxs("div",{className:"fx-flip-card__inner",children:[s.jsxs("div",{className:"fx-flip-card__face fx-flip-card__face--front","data-fx-face":"front",children:[s.jsx("b",{className:"wf-card__title",children:c.title}),c.stack&&s.jsx("span",{className:"wf-card__stack",children:c.stack})]}),s.jsxs("div",{className:"fx-flip-card__face fx-flip-card__face--back","data-fx-face":"back",children:[s.jsx("span",{className:"wf-card__desc",children:c.desc||"뒷면 내용을 적어 주세요."}),c.link&&s.jsx("span",{className:"wf-card__link",children:"↗ 링크"})]})]})},p):s.jsxs("article",{className:`wf-card ${(g=c.detail)!=null&&g.trim()?"has-detail":""}`,"data-detail":(y=c.detail)!=null&&y.trim()?bs(l,p):void 0,children:[n.showThumb&&s.jsx("span",{className:"wf-card__thumb",style:{paddingBottom:`${n.ratio*100}%`},children:(k=c.image)!=null&&k.id?s.jsx(xa,{image:c.image,className:"wf-card__img"}):s.jsx("em",{children:p+1})}),s.jsxs("span",{className:"wf-card__body",children:[d(["items",p,"title"],c.title,{tag:"b",className:"wf-card__title",ph:"작업물 제목"}),c.stack&&d(["items",p,"stack"],c.stack,{className:"wf-card__stack"}),c.desc&&d(["items",p,"desc"],c.desc,{className:"wf-card__desc",multiline:!0}),c.link&&s.jsx("span",{className:"wf-card__link",children:"↗ 링크"})]})]},p):s.jsx("article",{className:"wf-card wf-card--empty",children:s.jsx("span",{className:"wf-card__slot",children:"+"})},`empty-${p}`)}),h.length===0&&s.jsx("p",{className:"wf-sec__body",children:"오른쪽 편집 패널에서 카드를 추가하세요."})]}),(n.items??[]).map((c,p)=>{var g,y;return(g=c==null?void 0:c.detail)!=null&&g.trim()?s.jsxs("div",{className:"wf-detail",id:bs(l,p),children:[s.jsx("span",{className:"wf-detail__scrim","data-detail-close":"1"}),s.jsxs("div",{className:"wf-detail__box",children:[s.jsx("span",{className:"wf-detail__close","data-detail-close":"1",children:"✕"}),((y=c.image)==null?void 0:y.id)&&s.jsx(xa,{image:c.image,className:"wf-detail__img"}),s.jsx("b",{className:"wf-detail__title",children:c.title}),c.stack&&s.jsx("span",{className:"wf-card__stack",children:c.stack}),d(["items",p,"detail"],c.detail,{tag:"p",className:"wf-detail__body",multiline:!0,ph:"자세한 설명"}),c.link&&s.jsx("span",{className:"wf-card__link",children:"↗ 링크 열기"})]})]},`d-${p}`):null})]})}case"timeline":return s.jsxs("div",{className:"wf-tl",children:[n.eyebrow&&d(["eyebrow"],n.eyebrow,{className:"wf-tl__eyebrow",ph:"// 라벨"}),d(["title"],n.title,{tag:"h2",className:"wf-tl__title",ph:"제목"}),s.jsx("ol",{className:"wf-tl__list",children:(n.items??[]).map((h,c)=>s.jsxs("li",{className:"wf-tl__item",children:[d(["items",c,"label"],h.label,{className:"wf-tl__label",ph:"분류"}),d(["items",c,"head"],h.head,{tag:"b",className:"wf-tl__head",ph:"항목 제목"}),h.desc&&d(["items",c,"desc"],h.desc,{tag:"p",className:"wf-tl__desc",multiline:!0,ph:"설명"})]},c))}),(n.items??[]).length===0&&s.jsx("p",{className:"wf-sec__body",children:"오른쪽 편집 패널에서 항목을 추가하세요."})]});case"main":return s.jsx("div",{className:"wf-main",style:{gridTemplateColumns:`repeat(${n.columns}, minmax(0, 1fr))`,gap:`${n.gap}px`},children:(n.items??[]).map((h,c)=>s.jsx("div",{className:"wf-main__slot",children:d(["items",c,"label"],h.label,{ph:`본문 ${c+1}`})},c))});case"contact":return s.jsxs("div",{className:"wf-contact",style:{alignItems:ar(n.align),textAlign:n.align==="center"?"center":"left"},children:[d(["title"],n.title,{tag:"h2",className:"wf-sec__title",ph:"제목"}),n.body&&d(["body"],n.body,{tag:"p",className:"wf-sec__body",multiline:!0,ph:"안내 문구"}),n.email&&s.jsx("span",{className:`wf-contact__mail ${n.big?"is-big":""}`,children:d(["email"],n.email,{ph:"이메일"})}),(n.phone||n.location)&&s.jsxs("span",{className:"wf-contact__meta",children:[n.phone&&d(["phone"],n.phone,{ph:"전화"}),n.phone&&n.location&&s.jsx("i",{children:" · "}),n.location&&d(["location"],n.location,{ph:"지역"})]})]});case"cover":return s.jsxs("div",{className:`wf-cover${n.kenBurns?" is-kb":""}${n.zoomOnScroll?" is-zoom":""}`,style:{height:`${n.height}px`,justifyContent:ar(n.valign),alignItems:ar(n.align)},children:[(b=n.image)!=null&&b.id?s.jsx(xa,{image:n.image,className:"wf-cover__img"}):s.jsx("span",{className:"wf-cover__empty","aria-hidden":"true"}),s.jsx("span",{className:"wf-cover__veil",style:{opacity:n.overlay},"aria-hidden":"true"}),s.jsxs("span",{className:"wf-cover__body",style:{textAlign:n.align==="center"?"center":"left"},children:[d(["title"],n.title,{tag:"b",className:"wf-cover__title",multiline:!0,ph:"문구"}),n.sub&&d(["sub"],n.sub,{tag:"span",className:"wf-cover__sub",ph:"작은 문구"})]})]});case"marquee":{const h=c=>s.jsx("span",{className:"wf-mq__set","aria-hidden":c===1||void 0,children:[0,1,2,3].map(p=>s.jsxs(qo.Fragment,{children:[c===0&&p===0?d(["text"],n.text,{className:"wf-mq__txt",ph:"문구"}):s.jsx("span",{className:"wf-mq__txt",children:n.text}),s.jsx("i",{className:"wf-mq__sep",children:n.sep})]},p))},c);return s.jsx("div",{className:`wf-mq${n.outline?" is-outline":""}${n.pauseOnHover?" is-pausable":""}`,style:{"--mq-t":`${n.speed}s`,"--mq-size":`${n.size}em`,"--mq-dir":n.reverse?"reverse":"normal"},children:s.jsx("div",{className:"wf-mq__track",children:[0,1].map(h)})})}case"cta":return s.jsxs("div",{className:`wf-cta${n.gradient?" is-grad":""}`,style:{alignItems:ar(n.align),textAlign:n.align==="center"?"center":"left"},children:[d(["title"],n.title,{tag:"b",className:"wf-cta__title",ph:"제목"}),n.sub&&d(["sub"],n.sub,{tag:"span",className:"wf-cta__sub",ph:"보조 문구"}),n.cta&&s.jsxs("button",{type:"button",className:"wf-btn wf-cta__btn",style:Ss(n),children:[d(["cta"],n.cta,{ph:"버튼"}),((S=n.ctaFile)==null?void 0:S.id)&&s.jsxs("em",{className:"wf-btn__file",children:["↓ ",n.ctaFile.name]})]})]});case"slider":{const h=ym(n.transition),c=(n.items??[]).slice(0,bm),p=wm(l);return s.jsxs("div",{className:`wf-sld wf-sld--${h}${n.kenBurns?" is-kb":""}${n.arrows?"":" no-arrows"}`,style:{"--sld-h":`${n.height}px`,"--sld-t":`${n.speed}ms`},"data-auto":n.autoplay&&h!=="scroll"?String((n.interval??5)*1e3):void 0,"data-loop":n.loop?"1":"0","data-pause":n.pauseOnHover?"1":"0",children:[h!=="scroll"&&c.map((g,y)=>s.jsx("input",{className:"wf-sld__r",type:"radio",name:p,id:Pr(l,y),defaultChecked:y===0},`r${y}`)),s.jsxs("div",{className:"wf-sld__track",children:[c.map((g,y)=>{var k;return s.jsxs("div",{className:"wf-sld__slide",children:[(k=g.image)!=null&&k.id?s.jsx(xa,{image:g.image,className:"wf-sld__img"}):s.jsx("span",{className:"wf-sld__empty","aria-hidden":"true"}),s.jsx("span",{className:"wf-sld__veil",style:{opacity:n.overlay},"aria-hidden":"true"}),s.jsxs("span",{className:"wf-sld__body",style:{justifyContent:ar(n.valign),alignItems:ar(n.align),textAlign:n.align==="center"?"center":"left"},children:[d(["items",y,"title"],g.title,{tag:"b",className:"wf-sld__title",ph:"문구"}),g.sub&&d(["items",y,"sub"],g.sub,{tag:"span",className:"wf-sld__sub",ph:"작은 문구"}),g.cta&&s.jsx("button",{type:"button",className:"wf-btn wf-sld__btn",children:d(["items",y,"cta"],g.cta,{ph:"버튼"})})]}),h!=="scroll"&&c.length>1&&n.arrows&&s.jsxs("span",{className:"wf-sld__nav","aria-hidden":"true",children:[s.jsx("label",{className:"wf-sld__arrow is-prev",htmlFor:Pr(l,(y-1+c.length)%c.length),children:"‹"}),s.jsx("label",{className:"wf-sld__arrow is-next",htmlFor:Pr(l,(y+1)%c.length),children:"›"})]})]},y)}),c.length===0&&s.jsx("p",{className:"wf-sec__body",children:"오른쪽에서 슬라이드를 추가하세요."})]}),h!=="scroll"&&c.length>1&&n.dots&&s.jsx("span",{className:"wf-sld__dots",children:c.map((g,y)=>s.jsx("label",{htmlFor:Pr(l,y),title:`${y+1}번째`},`d${y}`))})]})}case"links":{const h=n.items??[];return s.jsxs("div",{className:`wf-links wf-links--${n.style}`,style:{alignItems:ar(n.align)},children:[n.title&&d(["title"],n.title,{tag:"h2",className:"wf-sec__title",ph:"섹션 제목"}),s.jsxs("div",{className:"wf-links__row",children:[h.map((c,p)=>{var g;return s.jsxs("span",{className:"wf-link",children:[d(["items",p,"label"],c.label,{ph:"이름"}),(g=c.file)!=null&&g.id?s.jsxs("em",{className:"wf-link__url",children:["↓ ",c.file.name]}):n.style!=="buttons"&&c.url&&s.jsx("em",{className:"wf-link__url",children:km(c.url)})]},p)}),h.length===0&&s.jsx("p",{className:"wf-sec__body",children:"오른쪽에서 링크를 추가하세요."})]})]})}case"footer":return s.jsxs("div",{className:"wf-bar wf-bar--foot",style:{justifyContent:n.align},children:[d(["text"],n.text,{className:"wf-foot__text",ph:"저작권 문구"}),n.showMenu&&s.jsx(zo,{pages:r,current:t,sections:u,gap:18}),n.showTime&&s.jsx("span",{className:"wf-foot__time",children:hm(n.timeCity,n.timeZone)}),n.email&&d(["email"],n.email,{className:"wf-foot__mail",ph:"이메일"})]});default:return null}}const ar=e=>e==="center"?"center":e==="end"?"flex-end":"flex-start",_d=".wf-sld__r, .wf-sld__track, .wf-sld__dots, .wf-detail, .wf-cover__img, .wf-cover__empty, .wf-cover__veil, .wf-mq__track",Gv=e=>String(e).replace(/(^|[\s,(])(\d*\.?\d+)fr/g,"$1minmax(0, $2fr)"),Vv=e=>{const n=String(e).trim().split(/\s+/),r=n.map(l=>l.endsWith("px")?parseFloat(l):0),t=n.map(l=>l.endsWith("fr")?parseFloat(l):0),a=r.reduce((l,f)=>l+f,0),o=t.reduce((l,f)=>l+f,0)||1,i=Math.max(80,(1120-a)/o);return n.map((l,f)=>`minmax(0, ${Math.round(r[f]?r[f]:(t[f]||1)*i)}fr)`).join(" ")};function kd({onFreeMove:e,id:n,partId:r,content:t,detail:a,style:o,mini:i,selected:l,pages:f,current:u,sticky:x,fx:d,theme:m,effectsOn:w,isDrop:v,isHot:b,onEditText:S,sections:h,anchor:c,enterDir:p,enterFxOn:g,onFreeBox:y,onHideRegion:k,colSlot:_,rowSlot:j,rowInfo:C,siteBgOn:R=!1}){var Le,Te,Z,ce,Se;const M=r?Kn[r]:null,A=t??{},Q=(d??[]).some(I=>I.name==="flip"),B=Pv(i?[]:d,m,!i&&w,JSON.stringify(A)),V=br((Le=A.srcFile)==null?void 0:Le.id),ye=br((Te=A.envFile)==null?void 0:Te.id),we={};for(const I of(M==null?void 0:M.optionKeys)??[])A[I]!==void 0&&(we[I]=A[I]);V&&(we.src=V),ye&&(we.environmentImage=Em(ye,(Z=A.envFile)==null?void 0:Z.name)),r==="model"&&(we.fill=!!A.fill);const P=Tv(i?null:r,we,m,!i&&w),W=br((ce=a.bgImage)==null?void 0:ce.id),Y=!i&&r==="model"&&!!A.free,ue=!i&&!!a.free&&!!(M!=null&&M.freeItems),K=a.itemPos??null,Ae=parseInt(String((o==null?void 0:o.gridColumn)??""),10)||1;N.useEffect(()=>{const I=B.current;if(!I||!Y||!e)return;const U=pe=>{var te;if(pe.button!==0)return;pe.preventDefault(),pe.stopPropagation(),(te=I.setPointerCapture)==null||te.call(I,pe.pointerId);const fe=Ce=>{const L=I.ownerDocument.documentElement.clientWidth||1,z=I.ownerDocument.documentElement.clientHeight||1,ee=Math.max(0,Math.min(100,Ce.clientX/L*100)),T=Math.max(0,Math.min(100,Ce.clientY/z*100));e(n,Math.round(ee),Math.round(T))},de=()=>{I.removeEventListener("pointermove",fe),I.removeEventListener("pointerup",de)};I.addEventListener("pointermove",fe),I.addEventListener("pointerup",de)};return I.addEventListener("pointerdown",U),()=>I.removeEventListener("pointerdown",U)},[Y,n,e]);const $e=N.useRef(a);$e.current=a;const J=()=>{var I;return((I=B.current)==null?void 0:I.querySelector(":scope > :not(span, button)"))??null};N.useEffect(()=>{if(!ue||!y||a.itemPos)return;const I=J();if(!I||!I.children.length)return;const U=B.current;U==null||U.classList.remove("is-freeitems");const pe=I.getBoundingClientRect();if(!pe.width||!pe.height){U==null||U.classList.add("is-freeitems");return}const fe={};[...I.children].forEach((de,te)=>{var L;if((L=de.matches)!=null&&L.call(de,_d))return;const Ce=de.getBoundingClientRect();fe[te+1]={x:Math.round((Ce.x-pe.x)/pe.width*200)/2,y:Math.round((Ce.y-pe.y)/pe.height*200)/2}}),U==null||U.classList.add("is-freeitems"),y(n,{itemPos:fe})},[ue,a.itemPos,n,y]),N.useEffect(()=>{const I=B.current;if(!I||!ue||!y)return;const U=pe=>{var be,ne,Re;if(pe.button!==0||(ne=(be=pe.target).closest)!=null&&ne.call(be,".wf__resize"))return;const fe=J();if(!fe)return;const de=[...fe.children].find(G=>G===pe.target||G.contains(pe.target));if(!de||(Re=de.matches)!=null&&Re.call(de,_d))return;const te=[...fe.children].indexOf(de)+1,Ce=fe.getBoundingClientRect(),L=de.getBoundingClientRect(),ee=($e.current.itemPos??{})[te]??{x:(L.x-Ce.x)/(Ce.width||1)*100,y:(L.y-Ce.y)/(Ce.height||1)*100},T=pe.clientX,F=pe.clientY;let ie=!1;const he=G=>Math.round(G*2)/2,me=G=>{var qe;const Ee=G.clientX-T,ze=G.clientY-F;if(!ie){if(Math.hypot(Ee,ze)<4)return;ie=!0;try{(qe=I.setPointerCapture)==null||qe.call(I,pe.pointerId)}catch{}}y(n,{itemPos:{...$e.current.itemPos??{},[te]:{x:Math.max(0,Math.min(96,he(ee.x+Ee/(Ce.width||1)*100))),y:Math.max(0,Math.min(96,he(ee.y+ze/(Ce.height||1)*100)))}}})},ge=G=>{if(I.removeEventListener("pointermove",me),I.removeEventListener("pointerup",ge),I.removeEventListener("pointercancel",ge),ie){G.stopPropagation();const Ee=ze=>{ze.stopPropagation(),ze.preventDefault()};I.addEventListener("click",Ee,{capture:!0,once:!0}),setTimeout(()=>I.removeEventListener("click",Ee,{capture:!0}),0)}};I.addEventListener("pointermove",me),I.addEventListener("pointerup",ge),I.addEventListener("pointercancel",ge)};return I.addEventListener("pointerdown",U),()=>I.removeEventListener("pointerdown",U)},[ue,n,y]);const re=N.useRef(C);return re.current=C,N.useEffect(()=>{const I=B.current,U=I==null?void 0:I.querySelector(":scope > .wf__resize");if(!I||!U||!y)return;const pe=fe=>{var Qn;if(fe.button!==0)return;fe.preventDefault(),fe.stopPropagation();const de=I.closest(".wf");if(!de)return;try{(Qn=U.setPointerCapture)==null||Qn.call(U,fe.pointerId)}catch{}const te=getComputedStyle(de),Ce=parseFloat(te.columnGap)||0,L=I.getBoundingClientRect().width,z=I.getBoundingClientRect().height,ee=J(),T=getComputedStyle(I),F=parseFloat(T.paddingTop)+parseFloat(T.paddingBottom)+parseFloat(T.borderTopWidth)+parseFloat(T.borderBottomWidth),ie=ue||!ee?0:Math.ceil(ee.getBoundingClientRect().height+F),he=re.current;if(!he)return;const me=he.spans,ge=(de.getBoundingClientRect().width+Ce)/Math.max(1,he.units),be=Math.max(1,he.room),ne=fe.clientX,Re=fe.clientY;let G=!1,Ee=me,ze=Math.max(0,Math.round(z/5)*5);const qe=Zn=>{const Jn=Zn.clientX-ne,er=Zn.clientY-Re;if(!G){if(Math.hypot(Jn,er)<4)return;G=!0}const hn={},mr=Math.round((L+Jn+Ce)/ge),nr=Y0(me,he.idx,mr,be);nr.some((kn,Rn)=>kn!==Ee[Rn])&&(nr.forEach((kn,Rn)=>{kn!==Ee[Rn]&&(hn[he.ids[Rn]]={...hn[he.ids[Rn]]??{},colSpan:kn})}),Ee=nr);const Bn=Math.max(ie,Math.round((z+er)/5)*5);Bn!==ze&&(hn[n]={...hn[n]??{},minHeight:Bn},ze=Bn),Object.keys(hn).length&&y(hn)},mn=()=>{U.removeEventListener("pointermove",qe),U.removeEventListener("pointerup",mn),U.removeEventListener("pointercancel",mn)};U.addEventListener("pointermove",qe),U.addEventListener("pointerup",mn),U.addEventListener("pointercancel",mn)};return U.addEventListener("pointerdown",pe),()=>U.removeEventListener("pointerdown",pe)},[n,y,Ae,l]),N.useEffect(()=>{const I=B.current,U=I==null?void 0:I.querySelector(":scope > .wf__movex");if(!I||!U||!y)return;const pe=fe=>{var ge;if(fe.button!==0)return;fe.preventDefault(),fe.stopPropagation();const de=I.closest(".wf");if(!de)return;try{(ge=U.setPointerCapture)==null||ge.call(U,fe.pointerId)}catch{}const te=re.current;if(!te)return;const Ce=getComputedStyle(de),L=parseFloat(Ce.columnGap)||0,z=(de.getBoundingClientRect().width+L)/Math.max(1,te.units),ee=Number.isFinite(te.ats[te.idx])?te.ats[te.idx]:te.spans.slice(0,te.idx).reduce((be,ne)=>be+ne,0),T=fe.clientX;let F=!1,ie=ee;const he=be=>{const ne=be.clientX-T;if(!F){if(Math.abs(ne)<4)return;F=!0}const Re=Math.max(0,Math.min(te.room-te.spans[te.idx],ee+Math.round(ne/z)));Re!==ie&&(ie=Re,y(n,{colAt:Re}))},me=()=>{U.removeEventListener("pointermove",he),U.removeEventListener("pointerup",me),U.removeEventListener("pointercancel",me)};U.addEventListener("pointermove",he),U.addEventListener("pointerup",me),U.addEventListener("pointercancel",me)};return U.addEventListener("pointerdown",pe),()=>U.removeEventListener("pointerdown",pe)},[n,y,l,C==null?void 0:C.align]),s.jsxs("div",{ref:B,className:["wf__region",M?"is-filled":"is-empty",l?"is-sel":"",v?"is-drop":"",b?"is-hot":"",x?"is-sticky":"",Y?"is-free":"",ue?"is-freeitems":"",A.divider?"has-divider":"",i?"":lm(a.tfx)].join(" "),id:c||void 0,"data-enter":p||void 0,"data-hide-scroll":!i&&A.hideOnScroll&&(x||A.sticky)?"":void 0,"data-region":n,"data-part":r??"",style:{...o,...Nm(a.typo,am),...i?{}:cm(a.tfx),"--part-color":(M==null?void 0:M.color)??"currentColor",borderRadius:`${a.radius}px`,borderWidth:`${a.border}px`,...Y?{gridColumn:void 0,gridRow:void 0,left:`${A.freeX??72}%`,top:`${A.freeY??58}%`,width:`clamp(104px, ${A.freeW??26}vw, 46vw)`,height:"auto",aspectRatio:"1 / 1",minHeight:0}:null,...ue&&K?Object.fromEntries(Object.entries(K).flatMap(([I,U])=>[[`--fi${I}x`,`${U.x}%`],[`--fi${I}y`,`${U.y}%`]])):null,...!i&&_s(a.alignY)?{alignSelf:_s(a.alignY)}:null,zIndex:a.z||void 0,...!i&&a.bgShift?{viewTimeline:`--wfbg-${n} block`}:{},padding:i?0:`min(${a.padding}px, 6vw)`,backgroundColor:a.bg?a.bg:R?jm(m==null?void 0:m.bg,a.bgSee):void 0,...Cm(a,W)},children:[!i&&!M&&k&&s.jsx("button",{className:"wf__regiondel","data-hide-region":n,title:"이 빈 영역 지우기 (Ctrl+Z로 되돌리기)",children:"✕"}),!i&&j&&s.jsxs(s.Fragment,{children:[s.jsx("button",{className:"wf__edge is-t","data-add":"1","data-ins":j.top.at,"data-ins-idx":j.top.idx,title:"바로 위에 영역 추가",children:"+"}),s.jsx("button",{className:"wf__edge is-b","data-add":"1","data-ins":j.bottom.at,"data-ins-idx":j.bottom.idx,title:"바로 아래에 영역 추가",children:"+"})]}),!i&&_&&s.jsxs(s.Fragment,{children:[s.jsx("button",{className:"wf__edge is-l","data-add-col":`${_.rowId}:${_.at}`,title:"왼쪽에 영역 추가",children:"+"}),s.jsx("button",{className:"wf__edge is-r","data-add-col":`${_.rowId}:${_.at+1}`,title:"오른쪽에 영역 추가",children:"+"})]}),i?null:M?s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"wf__tag",children:M.tagLabel??`<${M.tag}>`}),y&&l&&s.jsx("span",{className:"wf__resize",title:"끌어서 크기 조절 (가로: 칸 수 · 세로: 높이)"}),y&&l&&(C==null?void 0:C.align)==="자유"&&s.jsx("span",{className:"wf__movex",title:"끌어서 좌우로 옮기기 (행 안에서)"}),g&&s.jsx("span",{className:`wf__entertag${a.enterOff?" is-off":""}`,title:a.enterOff?"등장 효과 꺼짐 — Shift+클릭으로 켜기":`등장: ${p==="left"?"왼쪽에서":p==="right"?"오른쪽에서":"아래에서"} — Shift+클릭으로 끄기`,children:a.enterOff?"등장 ✕":`등장 ${p==="left"?"←":p==="right"?"→":"↑"}`}),(d==null?void 0:d.length)>0&&s.jsx("span",{className:"wf__fxtag",children:d.map(I=>{var U;return((U=yt[I.name])==null?void 0:U.icon)??"•"}).join(" ")}),M.is3d?s.jsx("div",{ref:P,className:`wf-3d${A.fill?" is-fill":""}`,style:A.fill?void 0:{height:Y?"100%":`min(${A.boxHeight??M.h}px, 62vh)`},children:r==="model"&&!A.src&&!((Se=A.srcFile)!=null&&Se.id)&&s.jsxs("div",{className:"wf-3d__empty",children:[s.jsx("input",{className:"wf-3d__tab-radio wf-3d__tab-radio--glb",type:"radio",name:`m3d-${n}`,id:`m3d-${n}-glb`,defaultChecked:!0}),s.jsx("input",{className:"wf-3d__tab-radio wf-3d__tab-radio--env",type:"radio",name:`m3d-${n}`,id:`m3d-${n}-env`}),s.jsx("b",{children:"3D 모델(.glb) 파일이 필요합니다"}),s.jsxs("span",{className:"wf-3d__tabs",children:[s.jsx("label",{htmlFor:`m3d-${n}-glb`,children:"GLB (기본)"}),s.jsx("label",{htmlFor:`m3d-${n}-env`,children:"환경광 이미지"})]}),s.jsxs("span",{className:"wf-3d__pane wf-3d__pane--glb",children:[s.jsxs("span",{children:["오른쪽 ",s.jsx("b",{children:".glb 경로 / URL"})," 칸에 주소를 넣거나, ZIP으로 내보낸 뒤",s.jsx("code",{children:"assets/"})," 폴더에 파일을 두고 ",s.jsx("code",{children:"assets/모델명.glb"}),"라고 적으세요."]}),s.jsxs("span",{className:"wf-3d__links",children:[s.jsxs("a",{href:"https://poly.pizza/",target:"_blank",rel:"noopener noreferrer",children:["Poly Pizza ",s.jsx("em",{children:"CC0 · 가볍고 아기자기함 · 첫 추천"})]}),s.jsxs("a",{href:"https://www.opensource3dassets.com/en/gallery",target:"_blank",rel:"noopener noreferrer",children:["Open Source 3D Assets ",s.jsx("em",{children:"CC0 · GLB 991개 · 계정 불필요"})]}),s.jsxs("a",{href:"https://pixabay.com/3d-models/search/glb/",target:"_blank",rel:"noopener noreferrer",children:["Pixabay 3D ",s.jsx("em",{children:"무료 · 출처 표기 불필요"})]}),s.jsxs("a",{href:"https://womp.com/",target:"_blank",rel:"noopener noreferrer",children:["Womp ",s.jsx("em",{children:"직접 만들기 · 무료 · 브라우저에서"})]})]})]}),s.jsxs("span",{className:"wf-3d__pane wf-3d__pane--env",children:[s.jsxs("span",{children:["환경광(.hdr)은 모델의 ",s.jsx("b",{children:"조명과 반사"}),"를 정합니다. 아래에서 받아 오른쪽 ",s.jsx("b",{children:"환경광 파일 올리기"}),"로 넣거나, URL 칸에 주소를 적으세요.",s.jsx("b",{children:"배경까지 환경광으로"}),"를 켜면 배경으로도 깔립니다. 1k~2k 해상도면 충분합니다."]}),s.jsxs("span",{className:"wf-3d__links",children:[s.jsxs("a",{href:"https://polyhaven.com/hdris",target:"_blank",rel:"noopener noreferrer",children:["Poly Haven ",s.jsx("em",{children:"CC0 · .hdr 바로 받기 · 첫 추천"})]}),s.jsxs("a",{href:"https://ambientcg.com/list?type=hdri",target:"_blank",rel:"noopener noreferrer",children:["ambientCG ",s.jsx("em",{children:"CC0 · 계정 불필요"})]}),s.jsxs("a",{href:"https://hdri-haven.com/",target:"_blank",rel:"noopener noreferrer",children:["HDRI Haven ",s.jsx("em",{children:"CC0 · 야외·실내 다양"})]})]})]}),s.jsxs("span",{className:"wf-3d__warn",children:["3D는 ES 모듈을 씁니다 — ",s.jsx("b",{children:"ZIP으로 내보내 서버로 열어야"})," 보입니다. 파일을 더블클릭(file://)하면 브라우저가 차단합니다."]})]})}):s.jsx(Uv,{partId:r,c:A,pages:f,current:u,sections:h,regionId:n,tfx:a.tfx,hasFlip:Q,edit:S&&!i?(I,U)=>S(n,I,U):null})]}):s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"wf__tag",children:n.toUpperCase()}),s.jsx("span",{className:"wf__label",children:"비어 있음"}),s.jsx("span",{className:"wf__hint",children:"왼쪽에서 파트를 고르세요"})]})]})}function Yv({bg:e}){var i,l,f;const n=br((e==null?void 0:e.kind)==="image"?(i=e.image)==null?void 0:i.id:null),r=br((e==null?void 0:e.kind)==="video"?(l=e.video)==null?void 0:l.id:null),t=br((e==null?void 0:e.kind)==="video"?(f=e.poster)==null?void 0:f.id:null);if(!js(e))return null;const a=Qm(e),o=e.mode&&Cl(e).includes("--tile")&&n?{backgroundImage:`url("${n}")`}:{};return s.jsxs("div",{className:Cl(e),style:o,"aria-hidden":"true",children:[e.kind==="video"?s.jsx("video",{className:"wf-bg__media",style:a,src:r??void 0,poster:t??void 0,autoPlay:!0,muted:!0,loop:!0,playsInline:!0}):s.jsx("img",{className:"wf-bg__media",style:a,src:n??void 0,alt:""}),s.jsx("span",{className:"wf-bg__veil",style:Zm(e)})]})}function Es({page:e,pages:n=[],current:r=null,global:t,theme:a=null,effectsOn:o=!0,mini:i=!1,selected:l=null,dropId:f=null,hotIds:u=null,rootStyle:x=null,onEditText:d=null,background:m=null,flow:w=!1,onFreeMove:v,onFreeBox:b,onHideRegion:S,enterFx:h="없음",enterDelay:c,scrollBar:p=!1,customFont:g=null,siteDark:y=!1}){var de,te,Ce;const k=ht(e.wireframe),_=e.fills??{},j=e.overrides??{},C=e.extra??[],R=new Set((e.hidden??[]).filter(L=>!_[L])),M=br(g==null?void 0:g.id),A=L=>{var z;return{...ks,radius:t.radius,padding:((z=Kn[_[L]])==null?void 0:z.pad)??t.padding,border:t.border,minHeight:0,bg:"",...j[L]??{}}},Q=[...k.regions.map(L=>L.id),...C.flatMap(en)],B={},V=[];for(const L of Q){const z=_[L];if(!vm.includes(z))continue;const ee=(Ce=(te=(de=e.content)==null?void 0:de[L])==null?void 0:te.title)==null?void 0:Ce.trim();if(!ee)continue;const T=gm(ee,L);let F=T,ie=2;for(;V.some(he=>he.anchor===F);)F=`${T}-${ie++}`;B[L]=F,V.push({regionId:L,label:_m(ee),anchor:F})}const ye=w?Mm(k,_):null,we=zc(k,j,t.gap),P=(L,z,ee)=>{const T=w?ye.place[ee]?{gridColumn:ye.place[ee].col,gridRow:ye.place[ee].row}:{}:{gridColumn:L,gridRow:z};if(!we.place[ee]||!T.gridColumn)return T;const F=we.fit[ee];return{...T,gridColumn:(F==null?void 0:F.col)??we.place[ee],...F?{width:F.width,justifySelf:F.justify}:null}},{total:W,from:Y,to:ue}=co(k),K=L=>Math.max(0,Math.min(W,L.at??W)),Ae=L=>C.filter(z=>K(z)<=L).length,$e=L=>C.filter(z=>K(z)<L).length,J=L=>{const z=Y(L),ee=ue(L),T=dd(k,z-1)?z-1:0,F=dd(k,ee-1)?ee-1:W;return{top:{at:T,idx:Ae(T)},bottom:{at:F,idx:$e(F)}}},re=(L,z)=>({top:{at:K(L),idx:z},bottom:{at:K(L),idx:z+1}}),Le={},Te=(L,z,ee)=>{var ge;const T=L.map(be=>be.id),F=L.map(be=>{var ne;return((ne=j[be.id])==null?void 0:ne.colSpan)||be.span*z}),ie=ee-((L[0].start-1)*z+1)+1,he=(ge=j[L[0].id])==null?void 0:ge.rowAlign,me=L.map(be=>{var ne;return(ne=j[be.id])==null?void 0:ne.colAt});L.forEach((be,ne)=>{Le[be.id]={ids:T,spans:F,idx:ne,units:ee,room:ie,align:he,ats:me}})},Z=Fm(k.cols);for(const L of Gs(k).values())Te(L,Z,Tc(k.cols)*Z);for(const L of C)Te(en(L).map((z,ee)=>({id:z,start:ee+1,span:1})),lt,L.cols*lt);const ce=eh(h),Se=ce==="none"||i?{}:nh([...k.regions,...C.flatMap(L=>en(L).map(z=>({id:z,row:L.id})))].filter(L=>{var z;return!((z=j[L.id])!=null&&z.enterOff)}),_),I=i?[]:[...k.regions.map(L=>L.id),...C.flatMap(en)].filter(L=>{var z;return _[L]&&(((z=j[L])==null?void 0:z.bgShift)??"").trim()}).map(L=>({id:L,color:j[L].bgShift})),U=(L,z)=>{const ee=Pc(L,j,t.gap),T=en(L);return s.jsx(qo.Fragment,{children:s.jsxs("div",{className:`wf wf--row ${i?"wf--mini":""}`,style:{gridTemplateColumns:ee.cols?`repeat(${L.cols*lt}, minmax(0, 1fr))`:`repeat(${L.cols}, minmax(0, 1fr))`,gap:`${t.gap}px`},children:[T.filter(F=>!R.has(F)).map(F=>{var ie,he;return s.jsx(kd,{...fe(F,{...ee.place[F]?{gridColumn:((ie=ee.fit[F])==null?void 0:ie.col)??ee.place[F]}:null,...ee.fit[F]?{width:ee.fit[F].width,justifySelf:ee.fit[F].justify}:null,minHeight:i?10:Math.max(180,((he=Kn[_[F]])==null?void 0:he.h)??0)}),colSlot:L.cols<6?{rowId:L.id,at:T.indexOf(F)}:null,rowSlot:re(L,z)},F)}),!i&&s.jsx("button",{className:"wf__rowdel","data-remove-row":L.id,title:"이 행 삭제",children:"✕"})]})},L.id)},pe=(L,z)=>{const T=k.regions.filter(ne=>!R.has(ne.id)&&Y(ne)>=L&&Y(ne)<=z).map(ne=>({r:ne,p:P(ne.col,ne.row,ne.id)})),F=T.map(({p:ne})=>String(ne.gridRow??"")).filter(Boolean).map(ne=>{const[Re,G]=ne.split("/").map(qe=>qe.trim()),Ee=parseInt(Re,10)||1,ze=G?G==="-1"?1/0:parseInt(G,10)||Ee+1:Ee+1;return[Ee,ze]}),ie=F.length?Math.min(...F.map(([ne])=>ne)):L,he=F.length?Math.max(...F.map(([,ne])=>ne===1/0?ie:ne)):z+1,me=ne=>{const[Re,G]=String(ne).split("/").map(ze=>ze.trim()),Ee=(parseInt(Re,10)||1)-ie+1;return G?G==="-1"?`${Ee} / -1`:`${Ee} / ${(parseInt(G,10)||Ee+1)-ie+1}`:String(Ee)},ge=(ne,Re,G)=>{const Ee=String(ne??"").trim().split(/\s+/).filter(Boolean);return Ee.length&&Ee.slice(Re,G).join(" ")||void 0},be=i?ge(String(k.rows??"").trim().split(/\s+/).map(ne=>/fr$/.test(ne)?ne:"minmax(0, auto)").join(" "),L-1,z):w?ge(ye.rows,ie-1,he-1):ge(k.rows,L-1,z);return s.jsx("div",{className:`wf ${i?"wf--mini":""}`,style:{gridTemplateColumns:i?Vv(we.cols??k.cols):Gv(we.cols??k.cols),gridTemplateRows:be,gap:`${t.gap}px`},children:T.map(({r:ne,p:Re})=>{var G;return s.jsx(kd,{...fe(ne.id,{...Re,...Re.gridRow?{gridRow:me(Re.gridRow)}:null,minHeight:i?Math.max(8,ne.minH/26):Math.max(ne.minH,((G=Kn[_[ne.id]])==null?void 0:G.h)??0)}),sticky:!i&&k.sticky===ne.id,rowSlot:J(ne)},ne.id)})},`band-${L}`)},fe=(L,z)=>{var F,ie;const ee=A(L),T=_[L];return{id:L,partId:T,siteBgOn:!i&&js(m),content:(F=e.content)==null?void 0:F[L],fx:((ie=e.fx)==null?void 0:ie[L])??[],theme:a,effectsOn:o,detail:ee,mini:i,selected:l===L,isDrop:f===L,isHot:u==="all"||u instanceof Set&&u.has(L),pages:n,current:r,onEditText:d,onFreeMove:v,onFreeBox:b,onHideRegion:S,rowInfo:Le[L],sections:V,anchor:i?null:B[L],enterDir:Se[L],enterFxOn:ce!=="none"&&!i,style:{...z,minHeight:Sm(z.minHeight??0,ee.minHeight)}}};return s.jsxs("div",{className:`wf-page ${i?"wf-page--mini":""} ${ce!=="none"&&!i?`wf-enter wf-enter--${ce}`:""} ${y&&!i?"is-dark":""}`,style:{...x??{},gap:`${t.gap}px`,...i?{}:{padding:`10px ${t.marginX??10}px`},...ce!=="none"&&!i?{"--enter-at":`${rh(c)}%`}:{},...I.length?{timelineScope:I.map(L=>`--wfbg-${L.id}`).join(", ")}:{},...y&&!i?(()=>{const L=ah(a);return{background:L.bg,color:L.text,"--wf-bg":L.bg,"--wf-text":L.text,"--wf-surface":L.surface,"--wf-line":L.border,"--wf-muted":L.muted}})():{}},children:[!i&&t.gridGuide&&s.jsx("span",{className:"wf-guide","aria-hidden":"true",style:{left:`${t.marginX??10}px`,right:`${t.marginX??10}px`,"--gcw":`calc((100% - ${((t.gridCols??12)-1)*(t.gap??10)}px) / ${t.gridCols??12})`,"--ggap":`${t.gap??10}px`}}),!i&&M&&s.jsx("style",{children:wl(M,g==null?void 0:g.name)}),!i&&s.jsx(Yv,{bg:m}),I.map(L=>s.jsx("i",{className:"wf-bgshift","aria-hidden":"true",style:{background:L.color,animationTimeline:`--wfbg-${L.id}`}},L.id)),!i&&p&&s.jsx("span",{className:"wf-progress","aria-hidden":"true"}),!i&&((m==null?void 0:m.grain)??0)>0&&s.jsx("span",{className:"wf-grain",style:{opacity:m.grain},"aria-hidden":"true"}),Im(k,C).map(L=>L.kind==="row"?U(L.row,C.indexOf(L.row)):pe(L.from,L.to)),!i&&V.length>0&&s.jsx("span",{className:"wf-down","data-anchor":V[0].anchor,"aria-label":"아래로 이동",children:s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:s.jsx("path",{d:"M12 5v14M6 13l6 6 6-6"})})}),!i&&s.jsxs("div",{className:"wf__add",children:[s.jsx("span",{className:"wf__add__label",children:"아래로 영역 추가"}),[1,2,3].map(L=>s.jsxs("button",{"data-add":L,className:"wf__add__btn",children:["+ ",L,"단"]},L))]})]})}let Fc=null;function oh(e){Fc=e,window.dispatchEvent(new CustomEvent("pb:dragstart",{detail:e}))}function sh(){Fc=null,window.dispatchEvent(new CustomEvent("pb:dragend"))}const Sd=()=>Fc,qv={desktop:1280,tablet:768,mobile:390};function Kv({page:e,pages:n,current:r,global:t,theme:a,effectsOn:o,rootStyle:i,selected:l,onSelect:f,onGoto:u,onAddRow:x,onRemoveRow:d,onDropEffect:m,onDropPart:w,onEditText:v,onFreeMove:b,onFreeBox:S,device:h,preview:c,background:p,enterFx:g,enterDelay:y,onToggleEnter:k,onClearRegion:_,onHideRegion:j,onAddCol:C,scrollBar:R,customFont:M}){const A=N.useRef(null),[Q,B]=N.useState(!1),[V,ye]=N.useState(null),[we,P]=N.useState(null),[W,Y]=N.useState(null),ue=N.useRef(null);ue.current=we;const K=N.useRef({});K.current={onSelect:f,onGoto:u,onAddRow:x,onRemoveRow:d,onDropEffect:m,onDropPart:w,onToggleEnter:k,onClearRegion:_,onHideRegion:j,onAddCol:C,preview:c};const Ae=N.useMemo(()=>{if(!V)return null;const J=new Set,re=[...e.fills?Object.keys(e.fills):[]];if(V.kind==="effect")re.forEach(Le=>{no(V.id,e.fills[Le])&&J.add(Le)});else return"all";return J},[V,e.fills]);N.useEffect(()=>{const J=Le=>ye(Le.detail),re=()=>{ye(null),P(null)};return window.addEventListener("pb:dragstart",J),window.addEventListener("pb:dragend",re),()=>{window.removeEventListener("pb:dragstart",J),window.removeEventListener("pb:dragend",re)}},[]);const $e=N.useCallback(J=>{A.current=J;const re={timer:null,fired:!1,x:0,y:0},Le=()=>{clearTimeout(re.timer),re.timer=null};J.addEventListener("pointerdown",Z=>{var Se,I;if(Z.pointerType!=="touch"||K.current.preview)return;const ce=(I=(Se=Z.target).closest)==null?void 0:I.call(Se,"[data-region]");ce!=null&&ce.dataset.part&&(re.x=Z.clientX,re.y=Z.clientY,re.fired=!1,re.timer=setTimeout(()=>{var U,pe,fe,de,te;re.fired=!0,(pe=(U=K.current).onToggleEnter)==null||pe.call(U,ce.dataset.region);try{(te=(de=(fe=J.defaultView)==null?void 0:fe.navigator)==null?void 0:de.vibrate)==null||te.call(de,10)}catch{}},550))}),J.addEventListener("pointermove",Z=>{re.timer&&Math.hypot(Z.clientX-re.x,Z.clientY-re.y)>8&&Le()}),J.addEventListener("pointerup",Le),J.addEventListener("pointercancel",Le);let Te=0;J.addEventListener("scroll",()=>{const Z=J.documentElement.scrollTop,ce=Z-Te;Te=Z,!(Math.abs(ce)<4)&&J.querySelectorAll("[data-hide-scroll]").forEach(Se=>{Se.classList.toggle("wf-nav-hidden",ce>0&&Z>80)})},{passive:!0}),J.addEventListener("click",Z=>{var z,ee,T,F,ie,he,me,ge,be,ne,Re,G,Ee,ze,qe,mn,Qn,Zn,Jn,er,hn,mr,nr,Bn,kn,Rn,wt,Xr;const ce=K.current;if(re.fired){re.fired=!1,Z.stopPropagation(),Z.preventDefault();return}const Se=(ee=(z=Z.target).closest)==null?void 0:ee.call(z,"[data-detail-close]");if(Se){Z.stopPropagation(),(T=Se.closest(".wf-detail"))==null||T.classList.remove("is-open");return}if(ce.preview){const We=(ie=(F=Z.target).closest)==null?void 0:ie.call(F,"[data-detail]");if(We){Z.stopPropagation(),(he=J.getElementById(We.dataset.detail))==null||he.classList.add("is-open");return}}if((ge=(me=Z.target).closest)==null?void 0:ge.call(me,"[data-mode-toggle]"))return Z.stopPropagation(),B(We=>!We);const U=(ne=(be=Z.target).closest)==null?void 0:ne.call(be,"[data-anchor]");if(U){Z.stopPropagation(),(Re=J.getElementById(U.dataset.anchor))==null||Re.scrollIntoView({behavior:"smooth",block:"start"});return}const pe=(Ee=(G=Z.target).closest)==null?void 0:Ee.call(G,"[data-goto]");if(pe)return Z.stopPropagation(),ce.onGoto(pe.dataset.goto);if(ce.preview)return;if(Z.shiftKey){const We=(qe=(ze=Z.target).closest)==null?void 0:qe.call(ze,"[data-region]");if(We!=null&&We.dataset.part)return Z.preventDefault(),(mn=ce.onToggleEnter)==null?void 0:mn.call(ce,We.dataset.region)}const fe=(Zn=(Qn=Z.target).closest)==null?void 0:Zn.call(Qn,"[data-add-col]");if(fe){Z.stopPropagation();const[We,bt]=fe.dataset.addCol.split(":");return(Jn=ce.onAddCol)==null?void 0:Jn.call(ce,We,Number(bt))}const de=(hn=(er=Z.target).closest)==null?void 0:hn.call(er,"[data-add]");if(de){Z.stopPropagation();const We=de.closest("[data-ins]");return ce.onAddRow(Number(de.dataset.add),We?Number(We.dataset.ins):void 0,(We==null?void 0:We.dataset.insIdx)==null?void 0:Number(We.dataset.insIdx))}const te=(nr=(mr=Z.target).closest)==null?void 0:nr.call(mr,"[data-remove-row]");if(te)return ce.onRemoveRow(te.dataset.removeRow);const Ce=(kn=(Bn=Z.target).closest)==null?void 0:kn.call(Bn,"[data-hide-region]");if(Ce)return Z.preventDefault(),Z.stopPropagation(),(Rn=ce.onHideRegion)==null?void 0:Rn.call(ce,Ce.dataset.hideRegion);const L=(Xr=(wt=Z.target).closest)==null?void 0:Xr.call(wt,"[data-region]");ce.onSelect(L?L.dataset.region:null)},!0),J.addEventListener("contextmenu",Z=>{var de,te;const ce=K.current;if(ce.preview)return;const Se=(te=(de=Z.target).closest)==null?void 0:te.call(de,"[data-region]");if(!Se)return;Z.preventDefault();const I=Se.dataset.region;ce.onSelect(I);const U=J.defaultView.frameElement,pe=U.getBoundingClientRect(),fe=pe.width/U.clientWidth;Y({x:pe.left+Z.clientX*fe,y:pe.top+Z.clientY*fe,regionId:I,partId:Se.dataset.part||""})}),J.addEventListener("dragover",Z=>{var fe,de;const ce=Sd();if(!ce||K.current.preview)return;Z.preventDefault();const Se=(de=(fe=Z.target).closest)==null?void 0:de.call(fe,"[data-region]");if(!Se)return P(null);const I=Se.dataset.region,U=Se.dataset.part||"",pe=ce.kind==="part"?!0:no(ce.id,U);P(pe?I:null)}),J.addEventListener("dragleave",Z=>{Z.relatedTarget||P(null)}),J.addEventListener("drop",Z=>{const ce=Sd();if(!ce)return;Z.preventDefault();const Se=ue.current;Se&&(ce.kind==="part"?K.current.onDropPart(Se,ce.id):K.current.onDropEffect(Se,ce.id)),P(null),ye(null)})},[]);return N.useEffect(()=>{const J=A.current;J&&(J.body.classList.toggle("pb-preview",c),J.body.classList.toggle("pb-editing",!c))},[c]),N.useEffect(()=>{var J,re;(re=(J=A.current)==null?void 0:J.defaultView)==null||re.scrollTo(0,0)},[r]),s.jsxs("div",{className:"pb-canvas",children:[s.jsx(c0,{width:qv[h],onReady:$e,children:s.jsx(Es,{page:e,pages:n,current:r,global:t,theme:a,effectsOn:o,rootStyle:i,selected:c?null:l,dropId:we,hotIds:Ae,onEditText:c?null:v,onFreeMove:c?null:b,onFreeBox:c?null:S,onHideRegion:c?null:j,onAddCol:c?null:C,background:p,flow:c,enterFx:g,enterDelay:y,scrollBar:R,siteDark:Q,customFont:M})}),W&&s.jsx("div",{className:"pb-ctx__veil",onClick:()=>Y(null),onContextMenu:J=>{J.preventDefault(),Y(null)},children:s.jsxs("div",{className:"pb-ctx",style:{left:Math.min(W.x,window.innerWidth-190),top:Math.min(W.y,window.innerHeight-120)},onClick:J=>J.stopPropagation(),children:[s.jsxs("b",{className:"pb-ctx__title",children:[W.regionId.toUpperCase()," 영역"]}),s.jsx("button",{disabled:!W.partId,onClick:()=>{var J,re;(re=(J=K.current).onToggleEnter)==null||re.call(J,W.regionId),Y(null)},children:"등장 효과 켜기 / 끄기"}),s.jsx("button",{className:"pb-danger",disabled:!W.partId,onClick:()=>{var J,re;(re=(J=K.current).onClearRegion)==null||re.call(J,W.regionId),Y(null)},children:"파트 비우기"})]})})]})}const Xv="modulepreload",Qv=function(e){return"/"+e},jd={},Zv=function(n,r,t){let a=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),l=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));a=Promise.allSettled(r.map(f=>{if(f=Qv(f),f in jd)return;jd[f]=!0;const u=f.endsWith(".css"),x=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${x}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":Xv,u||(d.as="script"),d.crossOrigin="",d.href=f,l&&d.setAttribute("nonce",l),document.head.appendChild(d),u)return new Promise((m,w)=>{d.addEventListener("load",m),d.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${f}`)))})}))}function o(i){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i}return a.then(i=>{for(const l of i||[])l.status==="rejected"&&o(l.reason);return n().catch(o)})},Jv="https://api.openverse.org/v1/images/",Ed=20,ki=12;async function Cd(e,n={}){var l;const r=String(e??"").trim();if(!r)return{items:[],total:0};const t=new URLSearchParams({q:r,license:"cc0,pdm",page_size:String(Math.min(n.perPage??Ed,Ed)),page:String(n.page??1)}),a=await fetch(`${Jv}?${t}`);if(a.status===429)throw new Error("검색이 잠시 막혔습니다. 몇 분 뒤에 다시 시도하세요.");if(!a.ok){let f="";try{f=((l=await a.json())==null?void 0:l.detail)??""}catch{}throw new Error(f||`사진 검색에 실패했습니다 (${a.status}). 인터넷 연결을 확인하세요.`)}const o=await a.json(),i=(o.results??[]).map(f=>({id:f.id,title:f.title||"제목 없음",creator:f.creator||"",license:f.license||"",provider:f.provider||"",width:f.width,height:f.height,thumb:f.thumbnail,full:f.url}));return{items:i,total:o.result_count??i.length}}async function ey(e){const n=[e.full,`${e.thumb}?full_size=true`,e.thumb].filter(Boolean);for(const r of n)try{const t=await fetch(r);if(!t.ok)continue;const a=await t.blob();if(!a.type.startsWith("image/"))continue;return new File([a],`${e.id}.jpg`,{type:a.type})}catch{}throw new Error("사진을 내려받을 수 없습니다. 다른 사진을 골라 보세요.")}const ny=e=>({title:e.title,creator:e.creator,license:e.license,provider:e.provider,source:"openverse"}),ry=["desk","texture","gradient","city","nature","paper","studio","minimal"];function ty({onPick:e,onClose:n}){const[r,t]=N.useState(""),[a,o]=N.useState([]),[i,l]=N.useState(0),[f,u]=N.useState("idle"),[x,d]=N.useState(""),[m,w]=N.useState(null),[v,b]=N.useState(0),[S,h]=N.useState(!1),[c,p]=N.useState(!1),g=N.useRef(null);N.useEffect(()=>{var C;(C=g.current)==null||C.focus()},[]);const y=async C=>{t(C),u("loading"),d("");try{const{items:R,total:M}=await Cd(C,{page:1});o(R),l(M),b(1),h(R.length===0),u("done")}catch(R){d((R==null?void 0:R.message)??"검색에 실패했습니다."),u("error")}},k=async()=>{if(c)return;p(!0),d("");const C=v+1;try{const{items:R}=await Cd(r,{page:C});o(M=>{const A=new Set(M.map(Q=>Q.id));return[...M,...R.filter(Q=>!A.has(Q.id))]}),b(C),(R.length===0||C>=ki)&&h(!0)}catch(R){d((R==null?void 0:R.message)??"더 불러오지 못했습니다.")}finally{p(!1)}},_=f==="done"&&a.length>0&&!S&&v<ki&&a.length<i,j=async C=>{w(C.id),d("");try{const R=await ey(C);await e(R,{alt:C.title,credit:ny(C)}),n()}catch(R){d((R==null?void 0:R.message)??"사진을 넣을 수 없습니다."),w(null)}};return s.jsx("div",{className:"pb-modal",onClick:C=>C.target===C.currentTarget&&n(),children:s.jsxs("div",{className:"pb-modal__box pb-stock",children:[s.jsxs("div",{className:"pb-modal__head",children:[s.jsx("b",{children:"무료 사진 찾기"}),s.jsx("span",{className:"pb-hint",children:f==="done"?`${i.toLocaleString()}장 중 ${a.length}장`:"Openverse · 저작자 표시가 필요 없는 사진만"}),s.jsx("span",{className:"pb-modal__tools",children:s.jsx("button",{onClick:n,children:"닫기"})})]}),s.jsxs("form",{className:"pb-stock__search",onSubmit:C=>{C.preventDefault(),y(r)},children:[s.jsx("input",{ref:g,type:"text",value:r,placeholder:"영어로 검색하면 결과가 훨씬 많습니다 — desk, texture, city…",onChange:C=>t(C.target.value)}),s.jsx("button",{type:"submit",className:"is-on",disabled:f==="loading",children:f==="loading"?"찾는 중…":"검색"})]}),s.jsx("div",{className:"pb-stock__tags",children:ry.map(C=>s.jsx("button",{type:"button",onClick:()=>y(C),children:C},C))}),x&&s.jsx("p",{className:"pb-note pb-note--warn",children:x}),f==="idle"&&s.jsxs("p",{className:"pb-note pb-note--dashed",children:["찾은 사진은 ",s.jsx("b",{children:"내 프로젝트에 저장"}),"됩니다. 내보낸 사이트는 인터넷 없이도 그대로 열립니다."]}),f==="done"&&a.length===0&&s.jsx("p",{className:"pb-note pb-note--dashed",children:"결과가 없습니다. 다른 낱말로 찾아보세요."}),s.jsxs("div",{className:"pb-stock__grid",children:[a.map(C=>s.jsxs("button",{type:"button",className:`pb-stock__item ${m===C.id?"is-busy":""}`,onClick:()=>j(C),disabled:!!m,title:`${C.title}${C.creator?` · ${C.creator}`:""} · ${C.license.toUpperCase()}`,children:[s.jsx("img",{src:C.thumb,alt:C.title}),s.jsx("span",{children:m===C.id?"넣는 중…":C.title})]},C.id)),_&&s.jsx("button",{type:"button",className:"pb-stock__more",onClick:k,disabled:c||!!m,children:c?"불러오는 중…":"더 보기"}),f==="done"&&a.length>0&&!_&&s.jsx("p",{className:"pb-note pb-note--dashed pb-stock__end",children:v>=ki?"여기까지입니다. 다른 낱말로 찾으면 새 사진이 나옵니다.":"더 보여 줄 사진이 없습니다. 다른 낱말로 찾아보세요."})]})]})})}function at({title:e,body:n="",ok:r="확인",cancel:t="취소",danger:a=!1}){return new Promise(o=>{const i=document.activeElement,l=document.createElement("div");l.className="pb-modal pb-confirm",l.setAttribute("role","dialog"),l.setAttribute("aria-modal","true");const f=document.createElement("div");f.className="pb-confirm__box";const u=document.createElement("b");if(u.className="pb-confirm__title",u.textContent=e,f.appendChild(u),n){const b=document.createElement("p");b.className="pb-confirm__body",n.split(`
`).forEach((S,h)=>{h&&b.appendChild(document.createElement("br")),b.appendChild(document.createTextNode(S))}),f.appendChild(b)}const x=document.createElement("div");x.className="pb-confirm__row";const d=document.createElement("button");d.textContent=t;const m=document.createElement("button");m.textContent=r,m.className=a?"pb-confirm__ok is-danger":"pb-confirm__ok",x.append(d,m),f.appendChild(x),l.appendChild(f);const w=b=>{var S;document.removeEventListener("keydown",v,!0),l.remove(),(S=i==null?void 0:i.focus)==null||S.call(i),o(b)},v=b=>{b.key==="Escape"&&(b.stopPropagation(),w(!1)),b.key==="Enter"&&document.activeElement!==d&&(b.stopPropagation(),w(!0)),b.key==="Tab"&&(b.preventDefault(),(document.activeElement===m?d:m).focus())};m.addEventListener("click",()=>w(!0)),d.addEventListener("click",()=>w(!1)),l.addEventListener("click",b=>{b.target===l&&w(!1)}),document.addEventListener("keydown",v,!0),document.body.appendChild(l),(a?d:m).focus()})}function ay({spec:e,value:n,set:r}){const t=Array.isArray(n)?n:[],[a,o]=N.useState(()=>new Set(t.length===1?[0]:[])),i=e.itemFields.find(v=>!v.type||v.type==="text"||v.type==="textarea")??e.itemFields[0],l=v=>r(v),f=(v,b,S)=>l(t.map((h,c)=>c===v?{...h,[b]:S}:h)),u=v=>o(b=>{const S=new Set(b);return S.has(v)?S.delete(v):S.add(v),S}),x=v=>o(b=>new Set([...b].map(v).filter(S=>S!=null))),d=(v,b)=>{const S=v+b;if(S<0||S>=t.length)return;const h=[...t],[c]=h.splice(v,1);h.splice(S,0,c),l(h),x(p=>p===v?S:p===S?v:p)},m=v=>{l(t.filter((b,S)=>S!==v)),x(b=>b===v?null:b>v?b-1:b)},w=()=>{l([...t,{...e.itemDefaults??{}}]),o(v=>new Set([...v,t.length]))};return s.jsxs("div",{className:"pb-field",children:[s.jsxs("span",{className:"pb-field__label",children:[e.label,s.jsxs("b",{children:[t.length,"개"]})]}),s.jsx("div",{className:"pb-list",children:t.map((v,b)=>s.jsxs("details",{className:"pb-item",open:a.has(b),onToggle:S=>{S.currentTarget.open!==a.has(b)&&u(b)},children:[s.jsxs("summary",{className:"pb-item__head",children:[s.jsx("span",{className:"pb-item__n",children:b+1}),s.jsx("span",{className:"pb-item__title",children:typeof v[i.key]=="string"&&v[i.key]||"(제목 없음)"}),s.jsxs("span",{className:"pb-item__tools",children:[s.jsx("button",{type:"button",title:"위로","aria-label":"위로",disabled:b===0,onClick:S=>{S.preventDefault(),d(b,-1)},children:"↑"}),s.jsx("button",{type:"button",title:"아래로","aria-label":"아래로",disabled:b===t.length-1,onClick:S=>{S.preventDefault(),d(b,1)},children:"↓"}),s.jsx("button",{type:"button",title:"삭제","aria-label":"삭제",className:"pb-danger",onClick:S=>{S.preventDefault(),m(b)},children:"✕"})]})]}),s.jsx("div",{className:"pb-item__body",children:e.itemFields.map(S=>s.jsx(Pn,{spec:S,value:v[S.key],onChange:(h,c)=>f(b,h,c)},S.key))})]},b))}),s.jsxs("button",{type:"button",className:"pb-list__add",onClick:w,children:["+ ",e.itemLabel??"항목"," 추가"]})]})}function oy({spec:e,value:n,onChange:r}){const t=N.useRef(null),[a,o]=N.useState(!1),[i,l]=N.useState("넣는 중…"),[f,u]=N.useState(""),[x,d]=N.useState(""),m=async w=>{if(!w)return;u(""),d("");let v=w;const b=S=>(S/1048576).toFixed(1);if(e.compress==="glb"&&e.maxMB&&w.size>e.maxMB*1024*1024&&await at({title:"파일이 커서 압축이 필요합니다",body:`파일이 ${b(w.size)}MB로 제한(${e.maxMB}MB)을 넘습니다.
브라우저에서 Draco로 자동 압축할까요? (파일 크기에 따라 수십 초 걸릴 수 있습니다)`,ok:"압축하기"})){o(!0),l("압축 중…");try{const{compressGlb:h}=await Zv(async()=>{const{compressGlb:p}=await import("./glbCompress-IS3wb9T6.js");return{compressGlb:p}},[]),c=await h(v);c&&(d(`${b(w.size)}MB → ${b(c.size)}MB로 압축했습니다.`),v=c)}catch{}}o(!0),l("넣는 중…");try{const S=await C0(v,e.maxMB);n!=null&&n.id&&await eo(n.id),r(e.key,S)}catch(S){d(""),u((S==null?void 0:S.message)??"파일을 넣을 수 없습니다.")}finally{o(!1)}};return s.jsxs("div",{className:"pb-field",children:[s.jsxs("span",{className:"pb-field__label",children:[e.label,n!=null&&n.bytes?s.jsx("b",{children:Mc(n.bytes)}):null]}),s.jsxs("div",{className:"pb-file",children:[s.jsx("span",{className:"pb-file__name",children:a?i:(n==null?void 0:n.name)||"없음"}),s.jsx("button",{type:"button",onClick:()=>{var w;return(w=t.current)==null?void 0:w.click()},disabled:a,children:n!=null&&n.id?"바꾸기":"파일 고르기"}),(n==null?void 0:n.id)&&s.jsx("button",{type:"button",className:"pb-danger",onClick:async()=>{await eo(n.id),r(e.key,null)},children:"✕"}),s.jsx("input",{ref:t,type:"file",accept:e.accept??".pdf,.zip,.doc,.docx,image/*",hidden:!0,onChange:w=>{var v;m((v=w.target.files)==null?void 0:v[0]),w.target.value=""}})]}),f&&s.jsx("p",{className:"pb-note pb-note--warn",children:f}),x&&s.jsx("p",{className:"pb-note",children:x})]})}function sy({spec:e,value:n,onChange:r}){const t=N.useRef(null),[a,o]=N.useState(!1),[i,l]=N.useState(""),[f,u]=N.useState(!1),x=br(n==null?void 0:n.id),d=async(w,v={})=>{if(w){o(!0),l("");try{const b=await E0(w);n!=null&&n.id&&await eo(n.id),r(e.key,{...b,alt:v.alt??(n==null?void 0:n.alt)??"",fit:(n==null?void 0:n.fit)??"cover",...v.credit?{credit:v.credit}:{}})}catch(b){throw l((b==null?void 0:b.message)??"이미지를 넣을 수 없습니다."),b}finally{o(!1)}}},m=async()=>{n!=null&&n.id&&await eo(n.id),r(e.key,null)};return s.jsxs("div",{className:"pb-field",children:[s.jsxs("span",{className:"pb-field__label",children:[e.label,n!=null&&n.bytes?s.jsx("b",{children:Mc(n.bytes)}):null]}),s.jsx("div",{className:`pb-img ${n!=null&&n.id?"has-img":""}`,onDragOver:w=>{w.preventDefault()},onDrop:w=>{var v;w.preventDefault(),d((v=w.dataTransfer.files)==null?void 0:v[0]).catch(()=>{})},children:n!=null&&n.id?s.jsx("img",{className:"pb-img__thumb",src:x??void 0,alt:""}):s.jsx("span",{className:"pb-img__empty",children:a?"넣는 중…":"사진을 끌어다 놓거나 아래에서 고르세요"})}),s.jsxs("div",{className:"pb-img__tools",children:[s.jsx("button",{type:"button",onClick:()=>{var w;return(w=t.current)==null?void 0:w.click()},disabled:a,children:n!=null&&n.id?"바꾸기":"사진 올리기"}),s.jsx("button",{type:"button",onClick:()=>u(!0),disabled:a,children:"무료 사진"}),(n==null?void 0:n.id)&&s.jsx("button",{type:"button",className:"pb-danger",onClick:m,children:"비우기"}),s.jsx("input",{ref:t,type:"file",accept:"image/*",hidden:!0,onChange:w=>{var v;d((v=w.target.files)==null?void 0:v[0]).catch(()=>{}),w.target.value=""}})]}),i&&s.jsx("p",{className:"pb-note pb-note--warn",children:i}),f&&s.jsx(ty,{onPick:d,onClose:()=>u(!1)}),(n==null?void 0:n.id)&&s.jsxs(s.Fragment,{children:[s.jsxs("label",{className:"pb-field",children:[s.jsxs("span",{className:"pb-field__label",children:["대체 텍스트",!n.alt&&s.jsx("b",{className:"pb-req",children:"필요"})]}),s.jsx("input",{type:"text",value:n.alt??"",placeholder:"사진에 무엇이 담겨 있는지",onChange:w=>r(e.key,{...n,alt:w.target.value})})]}),s.jsxs("label",{className:"pb-field pb-field--row",children:[s.jsx("span",{className:"pb-field__label",children:"맞춤"}),s.jsxs("select",{value:n.fit??"cover",onChange:w=>r(e.key,{...n,fit:w.target.value}),children:[s.jsx("option",{value:"cover",children:"칸을 꽉 채우기 (잘릴 수 있음)"}),s.jsx("option",{value:"contain",children:"전체 보이기 (여백 생김)"})]})]})]})]})}function Pn({spec:e,value:n,onChange:r}){const t=a=>r(e.key,a);switch(e.type){case"image":return s.jsx(sy,{spec:e,value:n,onChange:r});case"file":return s.jsx(oy,{spec:e,value:n,onChange:r});case"list":return s.jsx(ay,{spec:e,value:n,set:t});case"range":return s.jsxs("label",{className:"pb-field",children:[s.jsxs("span",{className:"pb-field__label",children:[e.label,s.jsxs("b",{children:[typeof n=="number"?+n.toFixed(3):n,e.unit??""]})]}),s.jsx("input",{type:"range",min:e.min,max:e.max,step:e.step??1,value:n??e.min,onChange:a=>t(Number(a.target.value))})]});case"boolean":return s.jsxs("label",{className:"pb-field pb-field--row",children:[s.jsx("span",{className:"pb-field__label",children:e.label}),s.jsx("input",{type:"checkbox",checked:!!n,onChange:a=>t(a.target.checked)})]});case"select":return s.jsxs("label",{className:"pb-field pb-field--row",children:[s.jsx("span",{className:"pb-field__label",children:e.label}),s.jsx("select",{value:String(n),onChange:a=>{const o=a.target.value,i=e.options.find(l=>String(l)===o);t(i)},children:e.options.map(a=>s.jsx("option",{value:String(a),children:a===!1?"없음":String(a)},String(a)))})]});case"color":return s.jsxs("label",{className:"pb-field pb-field--row",children:[s.jsx("span",{className:"pb-field__label",children:e.label}),s.jsxs("span",{className:"pb-color",children:[s.jsx("input",{type:"color",value:n||"#000000",onChange:a=>t(a.target.value)}),s.jsx("input",{type:"text",className:"pb-color__hex",value:n??"",placeholder:"상속",onChange:a=>t(a.target.value)})]})]});case"colors":return s.jsxs("div",{className:"pb-field",children:[s.jsx("span",{className:"pb-field__label",children:e.label}),s.jsx("span",{className:"pb-colors",children:(n??[]).map((a,o)=>s.jsx("input",{type:"color",value:a,onChange:i=>{const l=[...n];l[o]=i.target.value,t(l)}},o))})]});case"textarea":return s.jsxs("label",{className:"pb-field",children:[s.jsx("span",{className:"pb-field__label",children:e.label}),s.jsx("textarea",{rows:3,value:n??"",onChange:a=>t(a.target.value)})]});default:return s.jsxs("label",{className:"pb-field",children:[s.jsx("span",{className:"pb-field__label",children:e.label}),s.jsx("input",{type:"text",value:n??"",onChange:a=>t(a.target.value)})]})}}function yr({text:e}){const n=N.useRef(null),[r,t]=N.useState(!1),a=()=>{const o=n.current;o&&t(window.innerHeight-o.getBoundingClientRect().bottom<120)};return e?s.jsx("button",{ref:n,type:"button",className:`pb-why${r?" is-up":""}`,"data-tip":e,"aria-label":`설명: ${e}`,onMouseEnter:a,onFocus:a,onClick:o=>{o.preventDefault(),o.stopPropagation()},children:"?"}):null}function ih({id:e,label:n}){return s.jsxs("span",{className:`pb-fxdemo pb-fxdemo--${e}`,"aria-hidden":"true",children:[s.jsx("i",{}),s.jsx("i",{}),s.jsx("i",{}),s.jsx("em",{children:n})]})}const iy={머리:"맨 위 · 메뉴",본문:"내용을 담는 칸",배너:"눈에 띄는 띠",마무리:"맨 아래 · 연락처","3D":"부가 기능"};function ly({pages:e,current:n,page:r,global:t,editing:a,setEditing:o,onSwitchPage:i,onAddPage:l,onRenamePage:f,onRemovePage:u,onMovePage:x,onWireframe:d,onTemplate:m,applyAll:w,onApplyAll:v,site:b,onSite:S}){const h=(b==null?void 0:b.navMode)??"anchor";return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"pb-panel__title",children:["사이트 구성",s.jsx(yr,{text:"내보낸 결과물에 적용됩니다. 편집은 지금처럼 페이지 단위로 합니다."}),s.jsx("span",{className:"pb-hint",children:"메뉴가 움직이는 방식"})]}),s.jsxs("div",{className:"pb-navmode",children:[s.jsxs("label",{className:h==="anchor"?"is-on":"",children:[s.jsx("input",{type:"radio",name:"pb-navmode",checked:h==="anchor",onChange:()=>S({navMode:"anchor"})}),s.jsx("b",{children:"한 페이지 (퀵메뉴)"}),s.jsx("span",{children:"전부 세로로 잇고, 메뉴는 해당 위치로 스크롤"})]}),s.jsxs("label",{className:h==="pages"?"is-on":"",children:[s.jsx("input",{type:"radio",name:"pb-navmode",checked:h==="pages",onChange:()=>S({navMode:"pages"})}),s.jsx("b",{children:"여러 페이지"}),s.jsx("span",{children:"페이지별 파일로 나눠 링크 이동"})]})]}),s.jsxs("div",{className:"pb-panel__title",children:["페이지",s.jsx("span",{className:"pb-hint",children:"상단 메뉴가 됩니다"})]}),s.jsxs("div",{className:"pb-pages",children:[e.map((c,p)=>s.jsxs("div",{className:`pb-page ${c.id===n?"is-on":""}`,draggable:a!==c.id,onDragStart:g=>{g.dataTransfer.effectAllowed="move",g.dataTransfer.setData("text/pb-page",String(p))},onDragOver:g=>{g.dataTransfer.types.includes("text/pb-page")&&(g.preventDefault(),g.currentTarget.classList.add("is-dragover"))},onDragLeave:g=>g.currentTarget.classList.remove("is-dragover"),onDrop:g=>{g.preventDefault(),g.currentTarget.classList.remove("is-dragover");const y=Number(g.dataTransfer.getData("text/pb-page"));Number.isInteger(y)&&y!==p&&x(e[y].id,p-y)},children:[a===c.id?s.jsx("input",{autoFocus:!0,className:"pb-page__input",defaultValue:c.name,onBlur:g=>{f(c.id,g.target.value),o(null)},onKeyDown:g=>{g.key==="Enter"&&g.currentTarget.blur(),g.key==="Escape"&&o(null)}}):s.jsxs("button",{className:"pb-page__name",onClick:()=>i(c.id),children:[s.jsx("span",{className:"pb-page__idx",children:p+1}),c.name]}),s.jsxs("span",{className:"pb-page__tools",children:[s.jsx("button",{onClick:()=>x(c.id,-1),disabled:p===0,title:"위로",children:"↑"}),s.jsx("button",{onClick:()=>x(c.id,1),disabled:p===e.length-1,title:"아래로",children:"↓"}),s.jsx("button",{onClick:()=>o(c.id),title:"이름 바꾸기",children:"✎"}),s.jsx("button",{className:"pb-danger",onClick:()=>u(c.id),disabled:e.length<=1,title:"삭제",children:"✕"})]})]},c.id)),s.jsx("button",{className:"pb-page__add",onClick:l,children:"+ 페이지 추가"})]}),s.jsxs("div",{className:"pb-panel__title",children:["템플릿",s.jsx(yr,{text:`고르면 ${r.name} 페이지의 구조와 파트 배치가 바뀝니다. 배경·글꼴은 그대로입니다.`}),s.jsx("span",{className:"pb-hint",children:"구조만 · 스타일 제외"})]}),s.jsxs("label",{className:"pb-field pb-field--row pb-applyall",children:[s.jsxs("span",{className:"pb-field__label",children:["모든 페이지에 적용",s.jsx(yr,{text:`끄면 ${r.name} 페이지에만 적용됩니다. 아래 템플릿과 빈 뼈대 모두에 해당합니다.`})]}),s.jsx("input",{type:"checkbox",checked:w,onChange:c=>v(c.target.checked)})]}),s.jsx("div",{className:"pb-tpls",children:Vt.map(c=>s.jsxs("button",{className:`pb-tpl ${r.wireframe===c.id?"is-on":""}`,onClick:()=>m(c.id),title:c.desc,children:[s.jsx("span",{className:"pb-tpl__preview",children:s.jsx(Es,{page:r.wireframe===c.id?r:{wireframe:c.id,fills:c.fills,extra:[]},global:t,mini:!0})}),s.jsxs("span",{className:"pb-tpl__meta",children:[s.jsx("b",{children:c.label}),s.jsx("span",{className:"pb-tpl__tagline",children:c.tagline}),s.jsx("code",{className:"pb-tpl__src",children:c.source})]})]},c.id))}),s.jsxs("div",{className:"pb-panel__title",children:["빈 뼈대",s.jsx("span",{className:"pb-hint",children:"내용 없이 칸만"})]}),s.jsx("div",{className:"pb-wfs",children:Sl.map(c=>s.jsxs("button",{className:`pb-wf ${r.wireframe===c.id?"is-on":""}`,onClick:()=>d(c.id),title:c.desc,children:[s.jsx("span",{className:"pb-wf__preview",children:s.jsx(Es,{page:{...r,wireframe:c.id,fills:{},content:{},fx:{},extra:[]},global:t,mini:!0})}),s.jsxs("span",{className:"pb-wf__meta",children:[s.jsx("b",{children:c.label}),s.jsx("span",{children:c.tagline})]})]},c.id))})]})}function cy({advanced:e,page:n,selected:r,emptyCount:t,onFill:a}){var i;const o=r?(i=n.fills)==null?void 0:i[r]:null;return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"pb-panel__title",children:["영역 파트",s.jsx("span",{className:"pb-hint",children:r?`${r.toUpperCase()}에 채우기`:`빈 영역 ${t}개`})]}),r?s.jsxs("p",{className:"pb-note",children:["아래에서 고르면 ",s.jsx("b",{children:r.toUpperCase()})," 영역에 들어갑니다. 내용은 오른쪽 패널에서 고칩니다."]}):s.jsxs("p",{className:"pb-note pb-note--dashed",children:["가운데 캔버스에서 ",s.jsx("b",{children:"영역을 먼저 클릭"}),"하세요. 또는 아래 파트를 영역으로 끌어다 놓으세요."]}),R0.map(l=>{const f=M0.filter(u=>u.group===l);return f.length?s.jsxs("div",{children:[s.jsxs("div",{className:"pb-parts__group",children:[l,s.jsx("span",{className:"pb-hint",children:iy[l]})]}),s.jsx("div",{className:"pb-parts",children:f.map(u=>s.jsxs("button",{className:`pb-part ${o===u.id?"is-on":""}`,style:{"--part-color":u.color},draggable:!0,onDragStart:x=>{x.dataTransfer.effectAllowed="copy",x.dataTransfer.setData("text/plain",u.id),oh({kind:"part",id:u.id})},onDragEnd:sh,onClick:()=>r&&a(u.id),title:`${u.hint} — 캔버스 영역으로 끌어다 놓거나, 영역을 고른 뒤 클릭`,children:[s.jsx("i",{className:"pb-part__dot"}),s.jsxs("span",{className:"pb-part__meta",children:[s.jsx("b",{children:u.label}),s.jsx("span",{children:u.hint})]}),e&&s.jsx("code",{className:"pb-part__tag",children:`<${u.tag}>`})]},u.id))})]},l):null})]})}function fy({advanced:e,global:n,theme:r,typeset:t,page:a,selected:o,background:i,onBackground:l,site:f,onSite:u,onGlobal:x,onTheme:d,onTypeset:m,onDropEffect:w}){var h;const v=o?(h=a==null?void 0:a.fills)==null?void 0:h[o]:null,b={...Ym,...i??{}},S=Dv.filter(c=>c.key==="kind"||c.key==="grain"?!0:b.kind==="none"?!1:c.key==="image"?b.kind==="image":c.key==="video"||c.key==="poster"?b.kind==="video":!0);return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"pb-panel__title",children:["등장 효과",s.jsx(yr,{text:"좌우에서 모이기는 한 줄에 칸이 둘 이상일 때 첫 칸은 왼쪽, 마지막 칸은 오른쪽에서 들어옵니다. 켜면 캔버스의 각 영역에 방향 표식이 붙고, Shift+클릭으로 그 영역만 끌 수 있습니다."}),s.jsx("span",{className:"pb-hint",children:"스크롤할 때"})]}),s.jsx("div",{className:"pb-fields",children:Fv.filter(c=>!c.needsFx||(f==null?void 0:f.enterFx)&&f.enterFx!=="없음").map(c=>s.jsx(Pn,{spec:c,value:(f==null?void 0:f[c.key])??(c.type==="boolean"?!1:c.type==="range"?xt[c.key]??c.min:"없음"),onChange:(p,g)=>u({[p]:g})},c.key))}),s.jsxs("div",{className:"pb-panel__title",children:["인터랙션",s.jsx(yr,{text:"스크립트가 필요한 효과라 내보낸 결과물에서만 동작합니다. 편집 화면에는 나타나지 않습니다."}),s.jsx("span",{className:"pb-hint",children:"내보낸 사이트에서"})]}),s.jsx("div",{className:"pb-fields",children:Iv.map(c=>s.jsx(Pn,{spec:c,value:(f==null?void 0:f[c.key])??!1,onChange:(p,g)=>u({[p]:g})},c.key))}),s.jsxs("div",{className:"pb-panel__title",children:["사이트 배경",s.jsx("span",{className:"pb-hint",children:"전체에 깔립니다"})]}),s.jsx("div",{className:"pb-fields",children:S.map(c=>s.jsx(Pn,{spec:c,value:b[c.key],onChange:(p,g)=>l({[p]:g})},c.key))}),s.jsxs("div",{className:"pb-panel__title",children:["배경 색",s.jsx("span",{className:"pb-hint",children:"글자 색까지 함께"})]}),s.jsx("div",{className:"pb-fields",children:s.jsxs("label",{className:"pb-field",children:[s.jsxs("span",{className:"pb-field__label",children:["색 테마 ",s.jsxs("b",{children:[Yt.length,"종"]})]}),s.jsxs("select",{value:r,onChange:c=>d(c.target.value),children:[s.jsx("optgroup",{label:"어두운 배경",children:Yt.filter(c=>c.dark).map(c=>s.jsx("option",{value:c.id,children:c.label},c.id))}),s.jsx("optgroup",{label:"밝은 배경",children:Yt.filter(c=>!c.dark).map(c=>s.jsx("option",{value:c.id,children:c.label},c.id))})]})]})}),s.jsxs("div",{className:"pb-themepreview","aria-hidden":"true",children:[ra(r).swatch.map((c,p)=>s.jsx("i",{style:{background:c}},p)),s.jsx("span",{children:ra(r).label})]}),s.jsxs("div",{className:"pb-panel__title",children:["글꼴",s.jsx(yr,{text:"올린 파일은 '내 글꼴 (업로드)'을 고르거나 영역별 글꼴에서 선택하면 적용됩니다. 한글 글꼴은 파일이 큽니다(1~4MB) — 서브셋 파일을 권장합니다."}),s.jsx("span",{className:"pb-hint",children:"외부 요청 없음"})]}),s.jsx("div",{className:"pb-fields",children:s.jsxs("label",{className:"pb-field",children:[s.jsxs("span",{className:"pb-field__label",children:["글꼴 ",s.jsxs("b",{children:[ur.length,"종"]})]}),s.jsx("select",{value:t,onChange:c=>m(c.target.value),children:ur.map(c=>s.jsxs("option",{value:c.id,children:[c.label," — ",c.tagline]},c.id))})]})}),s.jsx("p",{className:"pb-typepreview",style:{fontFamily:ys(t).font,fontWeight:ys(t).hWeight},"aria-hidden":"true",children:"Aa 가나다 Portfolio 123"}),s.jsx("div",{className:"pb-fields",children:s.jsx(Pn,{spec:{key:"customFont",label:"내 글꼴 파일 (.ttf·.otf·.woff2)",type:"file",accept:".ttf,.otf,.woff,.woff2",maxMB:20},value:f==null?void 0:f.customFont,onChange:(c,p)=>u({[c]:p})})}),s.jsxs("div",{className:"pb-panel__title",children:["여백 · 모서리",s.jsx("span",{className:"pb-hint",children:"모든 영역 기본값"})]}),s.jsx("div",{className:"pb-fields",children:I0.map(c=>s.jsx(Pn,{spec:c,value:n[c.key],onChange:(p,g)=>x({[p]:g})},c.key))}),s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"pb-panel__title",children:["효과",s.jsx(yr,{text:"칩을 집으면 받아줄 수 있는 영역만 점선으로 표시됩니다. 마우스를 올리면 어떤 움직임인지 미리 보여줍니다."}),s.jsx("span",{className:"pb-hint",children:v?`${v.toUpperCase()}에 붙는 것만 진하게`:"영역으로 끌어다 놓기"})]}),s.jsx("div",{className:"pb-fxpal",children:Lm.map(c=>{const p=!v||no(c.id,v);return s.jsxs("button",{className:`pb-fxpal__chip ${p?"":"is-off"}`,"aria-disabled":p?void 0:!0,draggable:!0,onDragStart:g=>{g.dataTransfer.effectAllowed="copy",g.dataTransfer.setData("text/plain",c.id),oh({kind:"effect",id:c.id})},onDragEnd:sh,onClick:()=>p&&o&&w(o,c.id),title:p?`${c.desc} · ${c.cost} — 끌어다 놓거나, 영역을 고른 뒤 클릭`:`${c.label} — ${v.toUpperCase()} 영역(${v})에는 붙지 않습니다`,children:[s.jsx(ih,{id:c.id,label:c.desc}),s.jsx("i",{children:c.icon}),s.jsx("span",{children:c.label}),s.jsx("em",{children:c.tier})]},c.id)})})]})]})}function dy({pages:e,page:n,emptyCount:r,filledCount:t,site:a,onSite:o,onExport:i}){const l=r===0,f={...xt,...a??{}};return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"pb-panel__title",children:["사이트 정보",s.jsx(yr,{text:"링크를 카톡·슬랙에 붙였을 때 보이는 것들입니다. 비워 두면 첫 페이지 이름을 씁니다."}),s.jsx("span",{className:"pb-hint",children:"탭 · 검색 · 링크 공유"})]}),s.jsx("div",{className:"pb-fields",children:Ov.map(u=>s.jsx(Pn,{spec:u,value:f[u.key],onChange:(x,d)=>o({[x]:d})},u.key))}),s.jsxs("div",{className:"pb-panel__title",children:["점검",s.jsxs("span",{className:"pb-hint",children:[n.name," 페이지"]})]}),s.jsxs("div",{className:"pb-checks",children:[s.jsxs("div",{className:"pb-check is-ok",children:[s.jsx("i",{children:"✓"})," 페이지 ",e.length,"장"]}),s.jsxs("div",{className:"pb-check is-ok",children:[s.jsx("i",{children:"✓"})," 채운 영역 ",t,"개"]}),s.jsxs("div",{className:`pb-check ${l?"is-ok":"is-warn"}`,children:[s.jsx("i",{children:l?"✓":"!"}),l?"빈 영역 없음":`빈 영역 ${r}개 — 결과물에 빈 칸으로 남습니다`]})]}),s.jsx("button",{className:"pb-bigbtn",onClick:i,children:"내 사이트 내려받기"}),s.jsx("p",{className:"pb-note",children:"받은 파일을 두 번 클릭하면 바로 열립니다."})]})}const uy=[{id:"frame",n:"1",label:"틀",hint:"페이지 · 템플릿 · 뼈대"},{id:"content",n:"2",label:"내용",hint:"영역에 파트 채우기"},{id:"style",n:"3",label:"꾸미기",hint:"배경 · 글꼴 · 여백"},{id:"export",n:"4",label:"내보내기",hint:"점검 후 다운로드"}];function py({open:e=!0,advanced:n=!1,pages:r,current:t,page:a,global:o,theme:i,typeset:l,selected:f,onSwitchPage:u,onAddPage:x,onRenamePage:d,onRemovePage:m,onMovePage:w,onWireframe:v,onTemplate:b,applyAll:S,onApplyAll:h,onFill:c,onGlobal:p,onTheme:g,onTypeset:y,onDropEffect:k,onExport:_,site:j,onSite:C,onBackground:R}){const[M,A]=N.useState("frame"),[Q,B]=N.useState(null),V=ht(a.wireframe),ye=a.extra??[],we=new Set(a.hidden??[]),P=[...V.regions.map(K=>K.id),...ye.flatMap(en)].filter(K=>{var Ae;return!we.has(K)||((Ae=a.fills)==null?void 0:Ae[K])}),W=P.filter(K=>{var Ae;return!((Ae=a.fills)!=null&&Ae[K])}).length,Y=P.length-W,ue=N.useRef(f);return N.useEffect(()=>{f&&!ue.current&&M==="frame"&&A("content"),ue.current=f},[f,M]),e?s.jsxs("aside",{className:"pb-modes",children:[s.jsx("div",{className:"pb-steps",children:uy.map(K=>s.jsxs("button",{className:`pb-step ${M===K.id?"is-on":""}`,onClick:()=>A(K.id),title:K.hint,children:[s.jsx("i",{children:K.n}),K.label]},K.id))}),s.jsxs("div",{className:"pb-steps__body",children:[M==="frame"&&s.jsx(ly,{pages:r,current:t,page:a,global:o,editing:Q,setEditing:B,onSwitchPage:u,onAddPage:x,onRenamePage:d,onRemovePage:m,onMovePage:w,onWireframe:v,onTemplate:b,applyAll:S,onApplyAll:h,site:j,onSite:C}),M==="content"&&s.jsx(cy,{advanced:n,page:a,selected:f,emptyCount:W,onFill:c}),M==="style"&&s.jsx(fy,{advanced:n,global:o,theme:i,typeset:l,page:a,selected:f,onGlobal:p,onTheme:g,onTypeset:y,background:j==null?void 0:j.background,onBackground:R,site:j,onSite:C,onDropEffect:k}),M==="export"&&s.jsx(dy,{pages:r,page:a,emptyCount:W,filledCount:Y,site:j,onSite:C,onExport:_})]})]}):null}const my="이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.",hy=[{label:"앱코 AN06F TKL 기계식 키보드 (클릭)",url:"https://link.coupang.com/a/fPmD2AJcCO",img:"https://image13.coupangcdn.com/image/affiliate/banner/c9b86094d67d213a82e00f9f31e5bc8e@2x.jpg",alt:"앱코 기계식 게이밍 유선 텐키리스 키보드 클릭, 레트로 베이지, AN06F TKL PBT",width:120,height:240,addedAt:"2026-07-31"},{label:"2026 이기적 빅데이터분석기사 필기 기본서",url:"https://link.coupang.com/a/fUQgrhZPzw",img:"https://image2.coupangcdn.com/image/affiliate/banner/9b60727bd0b28a5ed9aacaeb2cbb406a@2x.jpg",alt:"2026 이기적 빅데이터분석기사 필기 기본서",width:120,height:240,addedAt:"2026-08-03"},{type:"iframe",slot:"appFooter",label:"카테고리 배너 728x90 (id 1012415)",src:"https://ads-partners.coupang.com/widgets.html?id=1012415&template=banner&trackingCode=AF3785129&subId=PORTFOLIOCREATE&width=728&height=90",width:728,height:90,addedAt:"2026-07-31"},{type:"iframe",label:"다이나믹 캐러셀 486x267 (id 1012411)",src:"https://ads-partners.coupang.com/widgets.html?id=1012411&template=carousel&trackingCode=AF3785129&subId=PORTFOLIOCREATE&width=486&height=267&tsource=",width:486,height:267,addedAt:"2026-07-31"},{label:"박문각 2026 정보처리기사 필기 기출원스톱 1800제",url:"https://link.coupang.com/a/fUQijKfima",img:"https://static.coupangcdn.com/image/affiliate/banner/e9b9e2bfed6b6a130e82ca5b564b47f7@2x.jpg",alt:"박문각 2026 정보처리기사 필기 기출원스톱 1800제 + 유튜브 무료특강(프로그래밍언어 + 25년 CBT) + CBT기출복원 + 핵심요약, 상세 설명 참조",width:120,height:240,addedAt:"2026-08-03"},{label:"박문각 2026 ADsP 데이터분석준전문가 기출원스톱 400문제",url:"https://link.coupang.com/a/fUQjwUWdTU",img:"https://img3a.coupangcdn.com/image/affiliate/banner/79959ce16bec7e40d4d090b9fab28518@2x.jpg",alt:"박문각 2026 ADsP 데이터분석준전문가 기출원스톱 400문제 (50 최빈출 문제) + 유튜브 무료특강 + 실전모의고사",width:120,height:240,addedAt:"2026-08-03"},{label:"로지텍 리프트 버티컬 마우스",url:"https://link.coupang.com/a/fPlZT0o9RY",img:"https://image15.coupangcdn.com/image/affiliate/banner/2bcc697ae408b0c3e46c1f853142035e@2x.jpg",alt:"로지텍 코리아 리프트 버티컬 인체공학 무선 블루투스 마우스 LIFT VERTICAL, MR0094, 그래파이트",width:120,height:240,addedAt:"2026-07-31"},{label:"2026 이기적 정보보안기사 필기+실기 올인원",url:"https://link.coupang.com/a/fUQk2HqWmi",img:"https://image15.coupangcdn.com/image/affiliate/banner/4cebd750d25da9cfd8ce4bde44abe07c@2x.jpg",alt:"[지구돋이 책갈피 증정] 2026 이기적 정보보안기사 필기+실기 올인원 영진닷컴, 임호진",width:120,height:240,addedAt:"2026-08-03"},{label:"SQL자격검정 실전문제",url:"https://link.coupang.com/a/fUQnnuyR2G",img:"https://image14.coupangcdn.com/image/affiliate/banner/5b9ea110add5233eba8c220eb46132b0@2x.jpg",alt:"SQL자격검정 실전문제, 한국데이터산업진흥원",width:120,height:240,addedAt:"2026-08-03"}],Nr={disclosure:my,banners:hy},za={},lh=[];var Wd;for(const e of Nr.banners??[])(e.slot?za[Wd=e.slot]??(za[Wd]=[]):lh).push(e);const Zr=e=>{var n;return(n=za[e])!=null&&n.length?za[e].shift():lh.shift()??null},xy={exportModal:{banner:Zr("exportModal"),disclosure:Nr.disclosure,placeholder:!1},exportModalLeft:{banner:Zr("exportModalLeft"),disclosure:Nr.disclosure,placeholder:!0},saveModal:{banner:Zr("saveModal"),disclosure:Nr.disclosure,placeholder:!0},inspectorEmpty:{banner:Zr("inspectorEmpty"),disclosure:Nr.disclosure,placeholder:!0},appFooter:{banner:Zr("appFooter"),disclosure:Nr.disclosure,placeholder:!0},inspectorBottom:{banner:Zr("inspectorBottom"),disclosure:Nr.disclosure,placeholder:!0},sidebarBottom:{banner:Zr("sidebarBottom"),disclosure:Nr.disclosure,placeholder:!1}},Si=e=>!!(e&&(e.url||e.src));function Nd({b:e}){return e.type==="iframe"?s.jsx("iframe",{src:e.src,title:e.label||"쿠팡 파트너스 광고",width:e.width,height:e.height,frameBorder:"0",scrolling:"no",referrerPolicy:"unsafe-url",browsingtopics:"",style:{maxWidth:"100%",border:0}}):s.jsx("a",{href:e.url,target:"_blank",rel:"sponsored nofollow noopener",referrerPolicy:"unsafe-url",children:s.jsx("img",{src:e.img,alt:e.alt,width:e.width,height:e.height})})}function ta({id:e,className:n=""}){const r=xy[e];if(!r)return null;if(Array.isArray(r.banners)){const a=r.banners.some(Si);return!a&&!r.placeholder?null:s.jsxs("div",{className:`pb-adslot pb-adslot--grid ${n}`,children:[a&&s.jsx("p",{className:"pb-note pb-adslot__note",children:r.disclosure}),s.jsx("div",{className:"pb-adslot__cells",children:r.banners.map((o,i)=>Si(o)?s.jsx("div",{className:"pb-adslot__cell",children:s.jsx(Nd,{b:o})},i):s.jsxs("div",{className:"pb-adslot__cell",children:[s.jsxs("span",{children:["광고 자리 ",i+1]}),s.jsx("em",{children:"등록 예정"})]},i))})]})}const t=r.banner;return Si(t)?s.jsxs("div",{className:`pb-ad ${n}`,children:[s.jsx("p",{className:"pb-note",children:r.disclosure}),s.jsx(Nd,{b:t})]}):r.placeholder?s.jsxs("div",{className:`pb-adslot ${n}`,children:[s.jsx("span",{children:"광고 자리"}),s.jsx("em",{children:"등록 예정"})]}):null}const $d="pb:ai-key",gy="claude-haiku-4-5-20251001";async function vy(e,n,r){var f;const t=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"content-type":"application/json","x-api-key":e,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:gy,max_tokens:500,messages:[{role:"user",content:`한국어 개발자 포트폴리오의 첫 화면 문구 3안을 만들어줘.
직군: ${n||"개발자"}
키워드: ${r||"(없음)"}
각 안은 title(인사말, 줄바꿈 \\n 1번 허용, 25자 내외)과 sub(한 문장 소개, 30자 내외)로.
반드시 JSON 배열만 출력: [{"title":"...","sub":"..."},...]`}]})});if(!t.ok){const u=await t.text();throw t.status===401?new Error("API 키가 올바르지 않습니다. 키를 다시 확인해 주세요."):new Error(`요청 실패 (${t.status}): ${u.slice(0,120)}`)}const a=await t.json(),i=(((f=a==null?void 0:a.content)==null?void 0:f.map(u=>u.text??"").join(""))??"").match(/\[[\s\S]*\]/);if(!i)throw new Error("응답을 해석하지 못했습니다. 다시 시도해 주세요.");const l=JSON.parse(i[0]);if(!Array.isArray(l)||!l.length)throw new Error("제안이 비어 있습니다.");return l.slice(0,3)}function yy({content:e,onApply:n}){const[r,t]=N.useState(!1),[a,o]=N.useState(()=>localStorage.getItem($d)??""),[i,l]=N.useState(""),[f,u]=N.useState(""),[x,d]=N.useState(!1),[m,w]=N.useState(""),[v,b]=N.useState([]),S=async()=>{w("");const h=a.trim();if(!h)return w("API 키를 먼저 넣어 주세요.");localStorage.setItem($d,h),d(!0);try{b(await vy(h,i.trim(),f.trim()))}catch(c){w((c==null?void 0:c.message)??"실패했습니다.")}finally{d(!1)}};return s.jsxs(s.Fragment,{children:[s.jsx("button",{className:"pb-ai__open",onClick:()=>t(!0),children:"✦ AI 문구 제안"}),r&&s.jsx("div",{className:"pb-modal pb-ai",onClick:h=>h.target===h.currentTarget&&t(!1),children:s.jsxs("div",{className:"pb-confirm__box",role:"dialog","aria-modal":"true","aria-label":"AI 문구 제안",children:[s.jsx("b",{className:"pb-confirm__title",children:"AI 문구 제안 — 첫 화면 인사말"}),s.jsxs("label",{className:"pb-field",children:[s.jsx("span",{className:"pb-field__label",children:"Anthropic API 키 (이 브라우저에만 저장)"}),s.jsx("input",{type:"password",value:a,placeholder:"sk-ant-…",onChange:h=>o(h.target.value)})]}),s.jsxs("p",{className:"pb-note",children:["키는 ",s.jsx("b",{children:"내 컴퓨터에서 Anthropic으로 직접"})," 전달되며 다른 어디에도 저장되지 않습니다. 키 발급: console.anthropic.com"]}),s.jsxs("label",{className:"pb-field",children:[s.jsx("span",{className:"pb-field__label",children:"직군 · 역할"}),s.jsx("input",{type:"text",value:i,placeholder:"예: 프론트엔드 개발자 3년 차",onChange:h=>l(h.target.value)})]}),s.jsxs("label",{className:"pb-field",children:[s.jsx("span",{className:"pb-field__label",children:"강조하고 싶은 키워드 (선택)"}),s.jsx("input",{type:"text",value:f,placeholder:"예: 3D 인터랙션, 디자인 시스템",onChange:h=>u(h.target.value)})]}),m&&s.jsx("p",{className:"pb-note pb-note--warn",children:m}),v.length>0&&s.jsxs("div",{className:"pb-ai__list",children:[v.map((h,c)=>s.jsxs("button",{className:"pb-ai__item",onClick:()=>{n({title:h.title,sub:h.sub}),t(!1)},children:[s.jsx("b",{children:h.title}),s.jsx("span",{children:h.sub})]},c)),s.jsx("p",{className:"pb-note",children:"마음에 드는 안을 누르면 히어로에 바로 들어갑니다."})]}),s.jsxs("div",{className:"pb-confirm__row",children:[s.jsx("button",{onClick:()=>t(!1),children:"닫기"}),s.jsx("button",{className:"pb-confirm__ok",onClick:S,disabled:x,children:x?"생각 중…":v.length?"다시 제안 받기":"제안 받기"})]})]})})]})}function wy(){const[e,n]=qo.useState(()=>localStorage.getItem("pb:inspad-hidden")==="1"),r=()=>{const t=!e;n(t),localStorage.setItem("pb:inspad-hidden",t?"1":"")};return s.jsxs(s.Fragment,{children:[s.jsx("button",{className:"pb-inspad__toggle",onClick:r,children:e?"∨ 광고 보기":"∧ 광고 숨기기"}),!e&&s.jsx(ta,{id:"inspectorEmpty",className:"pb-adslot--inspector"})]})}function ga({title:e,hint:n,why:r,open:t=!1,children:a}){return s.jsxs("details",{className:"pb-sec",open:t,children:[s.jsxs("summary",{className:"pb-sec__head",children:[e,s.jsx(yr,{text:r}),n&&s.jsx("span",{className:"pb-hint",children:n})]}),a]})}const by={배치:"이 영역을 행 안에서 어디에 둘지 정합니다. 폭은 영역 오른쪽 아래 손잡이를 끌어서 바꿉니다.",상자:"영역이라는 상자 자체의 모양입니다 — 모서리, 안쪽 여백, 최소 높이, 테두리.",배경:"이 영역의 배경. 색이나 이미지를 깔고, 사이트 배경을 비쳐 보이게 할 수도 있습니다."};function _y({open:e=!0,onClose:n,narrow:r=!1,advanced:t=!1,regionId:a,partId:o,content:i,override:l,fx:f=[],global:u,onContent:x,onOverride:d,onResetOverride:m,onClearPart:w,onToggleEffect:v,onEffectOptions:b,onRowAlign:S,site:h,onSite:c}){if(!e)return null;const p=r?s.jsx("button",{className:"pb-panel__close",onClick:n,title:"닫기",children:"✕"}):null;if(!a)return s.jsxs("aside",{className:"pb-inspector pb-inspector--empty",children:[s.jsxs("div",{className:"pb-panel__title",children:["편집",p]}),s.jsxs("p",{className:"pb-note pb-note--dashed",children:["캔버스에서 ",s.jsx("b",{children:"영역"}),"을 클릭하세요."]}),s.jsx(wy,{})]});const g=o?Kn[o]:null,y={...ks,radius:u.radius,padding:u.padding,border:u.border,...l??{}};return s.jsxs("aside",{className:"pb-inspector",children:[s.jsxs("div",{className:"pb-panel__title",children:[a.toUpperCase(),s.jsx("span",{className:"pb-hint",children:g?g.label:"비어 있음"}),p]}),g?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"pb-part__banner",style:{"--part-color":g.color},children:[s.jsx("i",{}),s.jsx("b",{children:g.label}),s.jsx("code",{children:`<${g.tag}>`}),s.jsx("button",{className:"pb-danger",onClick:w,title:"이 영역 비우기",children:"✕"})]}),g.nav&&s.jsxs("label",{className:"pb-field pb-field--row pb-sync",children:[s.jsx("span",{className:"pb-field__label",children:"모든 페이지에 함께 적용"}),s.jsx("input",{type:"checkbox",checked:(h==null?void 0:h.navSync)!==!1,onChange:k=>c==null?void 0:c({navSync:k.target.checked})})]}),o==="hero"&&s.jsx("div",{className:"pb-ai__row",children:s.jsx(yy,{content:i,onApply:k=>x(k)})}),s.jsx(ga,{title:"내용",hint:`${g.fields.length}개`,open:!0,children:s.jsx("div",{className:"pb-fields",children:g.fields.map(k=>s.jsx(Pn,{spec:k,value:i==null?void 0:i[k.key],onChange:(_,j)=>x({[_]:j})},k.key))})})]}):s.jsxs("p",{className:"pb-note pb-note--dashed",children:["왼쪽 ",s.jsx("b",{children:"영역 파트"}),"에서 채울 것을 고르세요."]}),g&&t&&s.jsxs(ga,{title:"효과",hint:f.length?`${f.length}개 적용`:"선택",children:[s.jsxs("div",{className:"pb-fxchips",children:[id(o).map(k=>{const _=f.some(j=>j.name===k.id);return s.jsxs("button",{className:`pb-fxchip ${_?"is-on":""}`,onClick:()=>v(k.id),title:`${k.desc} · ${k.cost}`,children:[s.jsx(ih,{id:k.id,label:k.desc}),s.jsx("i",{children:k.icon}),k.label,s.jsx("em",{children:k.cost})]},k.id)}),id(o).length===0&&s.jsx("p",{className:"pb-note",children:"이 파트에 붙일 수 있는 효과가 아직 없습니다."})]}),ld(o)&&s.jsx("p",{className:"pb-note",children:ld(o)}),f.map(k=>{const _=yt[k.name];return _?s.jsxs("div",{className:"pb-fx",children:[s.jsxs("div",{className:"pb-fx__head",children:[s.jsx("i",{className:"pb-fx__icon",children:_.icon}),s.jsx("b",{children:_.label}),s.jsx("span",{className:"pb-chip__tier",children:_.cost}),s.jsx("button",{className:"pb-danger",onClick:()=>v(k.name),title:"제거",children:"✕"})]}),s.jsx("div",{className:"pb-fx__body",children:_.schema.map(j=>{var C;return s.jsx(Pn,{spec:j,value:(C=k.options)==null?void 0:C[j.key],onChange:(R,M)=>b(k.name,{[R]:M})},j.key)})})]},k.name):null})]}),s.jsx(ga,{title:"글자",hint:l!=null&&l.typo&&Object.keys(l.typo).length?"이 영역만":"전역값 사용",children:s.jsx("div",{className:"pb-fields",children:F0.map(k=>s.jsx(Pn,{spec:k,value:{..._l,...(l==null?void 0:l.typo)??{}}[k.key],onChange:(_,j)=>d({typo:{...(l==null?void 0:l.typo)??{},[_]:j}})},k.key))})}),s.jsx(ga,{title:"글자 효과",hint:l!=null&&l.tfx&&l.tfx.kind&&l.tfx.kind!=="없음"?l.tfx.kind:"없음",children:s.jsx("div",{className:"pb-fields",children:f0.map(k=>s.jsx(Pn,{spec:k,value:{...sm,...(l==null?void 0:l.tfx)??{}}[k.key],onChange:(_,j)=>d({tfx:{...(l==null?void 0:l.tfx)??{},[_]:j}})},k.key))})}),D0.map(k=>{const _=O0.filter(j=>j.group===k).filter(j=>j.key!=="free"||(g==null?void 0:g.freeItems)).filter(j=>!j.pro||t||y[j.key]!==ks[j.key]);return _.length?s.jsx(ga,{title:k,why:by[k],hint:`${_.length}개`,children:s.jsx("div",{className:"pb-fields",children:_.map(j=>s.jsx(Pn,{spec:j,value:y[j.key],onChange:(C,R)=>C==="rowAlign"?S==null?void 0:S(R):d(C==="free"&&!R?{free:R,itemPos:null}:{[C]:R})},j.key))})},k):null}),l&&Object.keys(l).length>0&&s.jsx("div",{className:"pb-parts__tools",children:s.jsx("button",{onClick:m,children:"전역값으로 되돌리기"})}),s.jsx(ta,{id:"inspectorBottom",className:"pb-adslot--inspbtm"})]})}const ky=`# 3D Effects Pack\r
\r
포트폴리오에 **폴더째 복사해서** 붙이는 3D 효과 8종.\r
**바닐라(\`index.html\`)와 React(\`App.jsx\`) 양쪽에서 같은 파일이 그대로 동작합니다.**\r
\r
\`\`\`\r
효과 8개 · 외부 의존성 기본 0KB · GitHub Pages 배포 대응 · 접근성 내장\r
\`\`\`\r
\r
---\r
\r
## 목차\r
\r
1. [30초 만에 붙이기](#1-30초-만에-붙이기)\r
2. [효과 목록](#2-효과-목록)\r
3. [폴더 구조](#3-폴더-구조)\r
4. [핵심 계약](#4-핵심-계약--왜-양쪽에서-되는가)\r
5. [옵션 정하는 3가지 방법](#5-옵션-정하는-3가지-방법)\r
6. [자동으로 꺼지는 조건](#6-자동으로-꺼지는-조건)\r
7. [테마 맞추기](#7-테마-맞추기)\r
8. [🚨 GitHub Pages 배포](#8--github-pages-배포)\r
9. [성능 예산](#9-성능-예산)\r
10. [효과 고르는 법](#10-효과-고르는-법)\r
11. [문제 해결](#11-문제-해결)\r
\r
---\r
\r
## 1. 30초 만에 붙이기\r
\r
### 데모부터 보기\r
\r
\`\`\`bash\r
npx serve effects\r
\`\`\`\r
\r
브라우저에서 \`demo.html\`을 여세요. 8개가 전부 동작합니다.\r
\r
> ⚠️ **\`demo.html\`을 더블클릭해서 열면 아무것도 안 됩니다.**\r
> ES 모듈은 \`file://\`에서 브라우저가 차단합니다. 반드시 서버로 여세요.\r
> (VS Code의 Live Server 확장도 됩니다)\r
\r
### 바닐라 프로젝트\r
\r
\`effects/\` 폴더를 프로젝트에 통째로 복사하고:\r
\r
\`\`\`html\r
<link rel="stylesheet" href="./effects/_core/core.css" />\r
<link rel="stylesheet" href="./effects/tilt-card/style.css" />\r
\r
<article class="project-card fx-card">\r
  <h3 class="fx-card__title" data-fx-depth="34">프로젝트 제목</h3>\r
  <p class="fx-card__desc" data-fx-depth="24">React · TypeScript</p>\r
</article>\r
\r
<script type="module">\r
  import { mount } from './effects/tilt-card/index.js';\r
  mount('.project-card');\r
<\/script>\r
\`\`\`\r
\r
### React 프로젝트\r
\r
\`effects/\` 폴더를 \`src/\` 안에 복사하고:\r
\r
\`\`\`jsx\r
import { TiltCard, Depth } from './effects/tilt-card/react.jsx';\r
\r
<TiltCard className="fx-card" maxTilt={14}>\r
  <Depth as="h3" z={34} className="fx-card__title">프로젝트 제목</Depth>\r
  <Depth as="p"  z={24} className="fx-card__desc">React · TypeScript</Depth>\r
</TiltCard>\r
\`\`\`\r
\r
**CSS import는 \`react.jsx\` 안에 이미 들어 있습니다.** 따로 안 해도 됩니다.\r
\r
---\r
\r
## 2. 효과 목록\r
\r
| # | 효과 | 티어 | 추가 용량 | 쓰는 곳 | 문서 |\r
|---|---|---|---|---|---|\r
| 1 | **tilt-card** | T1 | 0KB | 프로젝트 카드 | [README](./tilt-card/README.md) |\r
| 2 | **parallax-layers** | T1 | 0KB | 히어로 섹션 | [README](./parallax-layers/README.md) |\r
| 3 | **flip-card** | T0 | 0KB | 스킬 카드 | [README](./flip-card/README.md) |\r
| 4 | **magnetic-button** | T1 | 0KB | CTA 버튼 | [README](./magnetic-button/README.md) |\r
| 5 | **scroll-reveal** | T0 | 0KB | 전체 섹션 | [README](./scroll-reveal/README.md) |\r
| 6 | **silk-bg** | T2 | ~8KB (OGL) | 히어로 배경 | [README](./silk-bg/README.md) |\r
| 7 | **dot-grid-wave** | T1 | 0KB | About / Skills 배경 | [README](./dot-grid-wave/README.md) |\r
| 8 | **character** | T1 | 0KB | 마우스를 따라 보는 스틱 캐릭터 | [README](./character/README.md) |\r
| 9 | **model-showcase** | T3 | ~150KB + 모델 | 3D 작업물 | [README](./model-showcase/README.md) |\r
\r
**T2·T3의 라이브러리는 지연 로드입니다.** 해당 효과를 마운트하지 않으면 한 바이트도 안 내려받습니다.\r
\r
---\r
\r
## 3. 폴더 구조\r
\r
\`\`\`\r
effects/\r
├─ _core/               ★ 공통 엔진 — 항상 필요합니다\r
│  ├─ effect.js           mount/destroy 계약\r
│  ├─ guard.js            접근성·성능·기능 지원 판정\r
│  ├─ observer.js         rAF 루프 + 가시성 자동 정지\r
│  ├─ loader.js           OGL / model-viewer 지연 로드\r
│  ├─ math.js             clamp / lerp / damp / hexToRgb\r
│  ├─ core.css            공용 CSS 토큰\r
│  ├─ react.js            React 어댑터\r
│  └─ README.md\r
│\r
├─ tilt-card/           각 효과 폴더는 항상 같은 4개 파일\r
│  ├─ index.js            로직 (바닐라·React 공용)\r
│  ├─ style.css           스타일\r
│  ├─ react.jsx           React 래퍼 (얇은 어댑터)\r
│  └─ README.md           옵션·성능·문제 해결\r
│\r
├─ parallax-layers/  flip-card/  magnetic-button/\r
├─ scroll-reveal/    silk-bg/    dot-grid-wave/\r
├─ character/          (+ rig.js 체형, skeleton.js 3D 수학)\r
├─ model-showcase/     (+ silk-bg만 shader.js 추가)\r
│\r
├─ index.js             전체 배럴 + autoMount()\r
├─ demo.html            8개 전부 얹은 데모\r
└─ README.md            이 파일\r
\`\`\`\r
\r
### 효과 하나만 가져가고 싶다면\r
\r
**\`_core/\`는 반드시 같이 가져가야 합니다.** 그 외에는 원하는 효과 폴더만 복사하면 됩니다.\r
\r
---\r
\r
## 4. 핵심 계약 — 왜 양쪽에서 되는가\r
\r
모든 효과는 **정확히 같은 모양**입니다.\r
\r
\`\`\`js\r
const handle = mount(target, options);\r
handle.destroy();\r
\`\`\`\r
\r
\`mount\`가 \`destroy\`를 돌려주는 것 — 이 한 가지 규칙이 전부입니다.\r
\r
\`\`\`html\r
<!-- 바닐라 -->\r
<script type="module">\r
  import { mount } from './effects/tilt-card/index.js';\r
  mount('.card');\r
<\/script>\r
\`\`\`\r
\r
\`\`\`jsx\r
// React — 어댑터는 5줄\r
useEffect(() => mount(ref.current).destroy, []);\r
\`\`\`\r
\r
> **왜 이 설계인가:** React Bits, Aceternity UI 등 인기 있는 복붙 3D 컴포넌트 라이브러리는\r
> 거의 전부 **React 전용**입니다. 바닐라로 포트폴리오를 만드는 학생은 쓸 수가 없습니다.\r
> 프레임워크 중립 계약을 두면 **하나의 \`index.js\`로 양쪽을 다 커버**합니다.\r
> 효과를 고칠 때도 한 군데만 고치면 됩니다.\r
\r
### \`target\`에 넣을 수 있는 것\r
\r
\`\`\`js\r
mount('.card')                            // 선택자 → 매칭 전부\r
mount(document.querySelector('#hero'))    // 단일 요소\r
mount(document.querySelectorAll('.card')) // NodeList\r
mount([el1, el2])                         // 배열\r
\`\`\`\r
\r
요소가 1개든 20개든 반환 모양이 같습니다.\r
\r
\`\`\`js\r
handle.items      // 요소별 개별 핸들\r
handle.active     // 켜져 있는지\r
handle.api        // 효과별 추가 API (flip-card의 flip() 등)\r
handle.update({}) // 옵션 변경 후 재시작\r
handle.destroy()  // 완전 원복\r
\`\`\`\r
\r
---\r
\r
## 5. 옵션 정하는 3가지 방법\r
\r
**나중 것이 이깁니다.**\r
\r
\`\`\`\r
효과의 defaults  →  HTML의 data-fx-*  →  JS 인자\r
\`\`\`\r
\r
\`\`\`html\r
<!-- ② HTML만 고쳐서 조절 — 디자인 수정할 때 편합니다 -->\r
<article class="card" data-fx-max-tilt="18" data-fx-glare="false">\r
\`\`\`\r
\r
\`\`\`js\r
// ③ 코드로 넘기면 최우선\r
mount('.card', { maxTilt: 8 });\r
\`\`\`\r
\r
\`camelCase\` → \`data-fx-kebab-case\` (\`maxTilt\` → \`data-fx-max-tilt\`)\r
값은 자동 타입 변환됩니다: \`"12"\`→숫자, \`"false"\`→불리언, \`"#a,#b"\`→배열, \`"[1,2]"\`→JSON\r
\r
> \`defaults\`에 없는 키는 무시됩니다. 오타가 조용히 넘어가지 않게 하려는 의도입니다.\r
\r
### HTML만으로 전부 켜기\r
\r
\`\`\`html\r
<article data-fx="tilt">…</article>\r
<section data-fx="silk">…</section>\r
<button data-fx="magnetic">…</button>\r
\`\`\`\r
\r
\`\`\`js\r
import { autoMount } from './effects/index.js';\r
const fx = autoMount();   // data-fx 속성을 훑어서 알아서 켭니다\r
\`\`\`\r
\r
---\r
\r
## 6. 자동으로 꺼지는 조건\r
\r
| 조건 | 꺼지는 효과 | 이유 |\r
|---|---|---|\r
| OS **동작 줄이기** ON | model-showcase·flip-card·character 제외 전부 | 전정기관 장애 사용자에게 실제로 멀미를 유발합니다 |\r
| **터치 전용** 기기 | tilt-card, magnetic-button | hover가 없어 의미가 없습니다 |\r
| **WebGL 미지원** | silk-bg, model-showcase | 폴백(CSS 그라디언트 / 포스터)이 대신 남습니다 |\r
| **저사양 기기** | — (자동으로 30fps·해상도 축소) | 끄지 않고 품질만 낮춥니다 |\r
\r
### 왜 꺼졌는지 확인하기\r
\r
\`\`\`html\r
<div class="fx fx-inert" data-fx-skipped="reduced-motion">\r
\`\`\`\r
\r
devtools에서 요소를 열어 \`data-fx-skipped\`를 보세요. **3D가 안 보이는 원인의 90%가 여기 나옵니다.**\r
\r
값: \`reduced-motion\` · \`coarse-pointer\` · \`viewport-too-narrow\` · \`no-webgl\` · \`device-tier\`\r
\r
### 실행 중 재평가\r
\r
사용자가 페이지를 열어둔 채 OS 접근성 설정을 켜면 **즉시 반영**됩니다. 새로고침이 필요 없습니다.\r
\r
### 강제로 켜기 (데모 촬영용)\r
\r
\`\`\`js\r
mount('.card', { guard: false });\r
\`\`\`\r
\r
---\r
\r
## 7. 테마 맞추기\r
\r
\`:root\`에서 토큰만 덮어쓰면 **8개 효과가 한꺼번에 따라옵니다.**\r
\r
\`\`\`css\r
:root {\r
  --fx-accent: #ff5a3c;     /* 포인트 색 */\r
  --fx-radius: 24px;        /* 모서리 */\r
  --fx-duration: 320ms;     /* 전환 속도 */\r
  --fx-ease: cubic-bezier(.22,1,.36,1);\r
}\r
\`\`\`\r
\r
다크 모드는 \`prefers-color-scheme\`과 \`html[data-theme="dark"]\` **둘 다** 지원합니다.\r
테마 토글 버튼이 있으면 \`data-theme\`가 이깁니다.\r
\r
> \`dot-grid-wave\`만 예외입니다. 캔버스에 색을 직접 그리므로 **직접 만든 테마 토글 후에는**\r
> \`handle.api.refresh()\`를 호출해야 점 색이 갱신됩니다.\r
\r
---\r
\r
## 8. 🚨 GitHub Pages 배포\r
\r
**학생 포트폴리오에서 사고가 가장 많이 나는 지점입니다.**\r
\r
### 바닐라 (\`index.html\`)\r
\r
\`index.html\`을 저장소 루트에 두고 push하면 끝입니다.\r
**상대 경로(\`./effects/...\`)만 쓰면 아무 문제 없습니다.**\r
\r
- ❌ \`/effects/tilt-card/index.js\` → 404 (GitHub Pages는 \`/저장소명/\` 아래에 있음)\r
- ✅ \`./effects/tilt-card/index.js\`\r
\r
### React + Vite\r
\r
\`\`\`js\r
// vite.config.js\r
export default { base: '/내-저장소-이름/' }\r
\`\`\`\r
\r
| 증상 | 원인 | 처방 |\r
|---|---|---|\r
| 배포 후 흰 화면 | \`base\` 미설정 | 위 설정 |\r
| 새로고침하면 404 | SPA 라우팅 | \`dist/index.html\`을 \`404.html\`로 복사 |\r
| 라우터 링크 깨짐 | basename 누락 | \`<BrowserRouter basename="/저장소명">\` |\r
| **3D 모델·이미지만 404** | 절대 경로 에셋 | 아래 참고 |\r
\r
\`\`\`jsx\r
// ❌ 배포하면 404\r
<ModelShowcase src="/models/chair.glb" />\r
\r
// ✅ public/ 폴더에 둔 경우\r
<ModelShowcase src={\`\${import.meta.env.BASE_URL}models/chair.glb\`} />\r
\r
// ✅ src/ 안에 두고 import (가장 안전 — base가 바뀌어도 안 깨집니다)\r
import chairUrl from './assets/chair.glb?url';\r
<ModelShowcase src={chairUrl} />\r
\`\`\`\r
\r
\`404.html\` 자동 생성:\r
\r
\`\`\`json\r
"scripts": {\r
  "build": "vite build && cp dist/index.html dist/404.html"\r
}\r
\`\`\`\r
\r
### 이 팩이 GitHub Pages에서 안전한 이유\r
\r
- **효과 폴더에 외부 에셋이 없습니다.** 셰이더는 코드에 내장, 이미지 없음\r
- 절대 경로를 쓰지 않습니다\r
- \`model-showcase\`만 사용자 GLB가 필요하고, 실패해도 **포스터가 남습니다**\r
- CDN(OGL·model-viewer)이 차단되면 **폴백으로 내려갑니다** — 빈 화면이 안 됩니다\r
\r
### 그 외 체크리스트\r
\r
- [ ] \`.glb\`가 \`.gitignore\`의 \`*.bin\` 등에 걸리지 않았는지\r
- [ ] **Git LFS로 올린 파일은 GitHub Pages가 서빙하지 않습니다** — 일반 파일로 올리세요\r
- [ ] 파일명 대소문자 (Windows는 구분 안 하지만 **GitHub Pages는 구분합니다**)\r
\r
---\r
\r
## 9. 성능 예산\r
\r
전부 켜도 추가 JS는 **약 30KB**(비압축), 라이브러리는 지연 로드입니다.\r
\r
| 처리 | 어디에 |\r
|---|---|\r
| 화면 밖 → rAF **완전 정지** | 캔버스·WebGL 효과 전부 |\r
| 탭 백그라운드 → 정지 | 전부 |\r
| 수렴 후 **자동 수면** | tilt-card, parallax-layers, magnetic-button |\r
| 저사양 기기 **30fps 자동** | silk-bg, dot-grid-wave |\r
| DPR 상한 (저사양 1.5) | silk-bg, dot-grid-wave |\r
| \`will-change\` **상호작용 중에만** | tilt-card, flip-card |\r
| \`getBoundingClientRect\` 캐싱 | tilt-card, magnetic-button |\r
| 수천 개 점을 **fill 1회** | dot-grid-wave |\r
| WebGL 컨텍스트 **명시적 반납** | silk-bg |\r
\r
### 한 페이지 권장 조합\r
\r
\`\`\`\r
히어로   : silk-bg 1개 + magnetic-button 1개 + parallax-layers 1개\r
프로젝트 : tilt-card N개 + scroll-reveal\r
스킬     : flip-card N개\r
About    : dot-grid-wave 1개\r
캐릭터   : character 1개 (많아야 2개)\r
작업물   : model-showcase 최대 1개\r
\`\`\`\r
\r
> **T2 이상(silk-bg, model-showcase)은 페이지당 각 1개.**\r
> 2개 이상 쓰면 WebGL 컨텍스트와 GPU를 나눠 쓰게 되어 둘 다 느려집니다.\r
\r
---\r
\r
## 10. 효과 고르는 법\r
\r
**시간이 없다면 이 3개만 붙이세요. 체감의 70%가 나옵니다.**\r
\r
1. \`tilt-card\` — 프로젝트 카드\r
2. \`scroll-reveal\` — 전체 섹션\r
3. \`magnetic-button\` — CTA 1개\r
\r
여유가 되면 \`silk-bg\`를 히어로에 하나. 여기까지가 **가성비 구간**입니다.\r
\r
\`model-showcase\`는 **보여줄 3D 작업물이 실제로 있을 때만** 쓰세요.\r
없는데 억지로 넣은 3D 모델은 오히려 감점 요소입니다.\r
\r
### 과하지 않게 쓰는 기준\r
\r
- 한 화면에 움직이는 것은 **최대 2종류**\r
- \`scroll-reveal\` 프리셋은 페이지당 **2개까지**\r
- 전체 등장 시간이 **0.8초를 넘기지 않게** (\`stagger × 개수\`를 계산해보세요)\r
- 첫 화면(히어로)에는 \`stagger\` **0~40ms** — 순차 등장하면 로딩이 느린 것처럼 보입니다\r
\r
---\r
\r
## 11. 문제 해결\r
\r
**Q. 아무것도 안 움직입니다.**\r
1. 콘솔에 \`[fx:...]\` 경고가 있는지\r
2. 요소에 \`data-fx-skipped\`가 있는지 (→ [6번](#6-자동으로-꺼지는-조건))\r
3. \`<script type="module">\`인지\r
4. **\`file://\`로 열지 않았는지** — 서버로 여세요\r
\r
**Q. \`Failed to resolve module specifier\` 에러가 납니다.**\r
→ 바닐라에서 \`react.jsx\`를 import했거나 \`_core/react.js\`를 건드렸습니다.\r
바닐라는 \`index.js\`만 씁니다.\r
\r
**Q. React StrictMode에서 효과가 두 번 붙습니다.**\r
→ 이미 처리되어 있습니다. \`defineEffect\`가 중복 마운트를 막습니다.\r
직접 \`mount()\`를 부르고 있다면 cleanup에서 \`destroy()\`를 부르는지 확인하세요.\r
\r
**Q. 페이지를 옮겨 다니면 셰이더 배경이 안 뜹니다.**\r
→ WebGL 컨텍스트 한도(브라우저당 8~16개)입니다. \`destroy()\`가 불리는지 확인하세요.\r
\`useSilk\` / \`<SilkBackground>\`를 쓰면 자동입니다.\r
\r
**Q. CDN이 막힌 환경입니다.**\r
\`\`\`js\r
import { setCDN } from './effects/_core/loader.js';\r
setCDN({ ogl: '/vendor/ogl.js' });\r
\`\`\`\r
\r
**Q. 특정 효과만 끄고 싶습니다.**\r
\`\`\`js\r
const handle = mount('.card');\r
handle.destroy();\r
\`\`\`\r
\r
---\r
\r
## 라이선스 / 출처\r
\r
이 팩의 코드는 자유롭게 쓰고 고쳐도 됩니다.\r
외부 의존성은 각자의 라이선스를 따릅니다.\r
\r
| 라이브러리 | 용도 | 라이선스 |\r
|---|---|---|\r
| [OGL](https://github.com/oframe/ogl) | \`silk-bg\` 셰이더 | MIT |\r
| [@google/model-viewer](https://modelviewer.dev/) | \`model-showcase\` | Apache-2.0 |\r
\r
3D 모델을 외부에서 가져다 쓸 때는 **출처 표기 요구를 반드시 확인**하세요.\r
라이선스를 지키는지 보는 채용담당자가 실제로 있습니다.\r
`,Sy=`# \`_core\` — 공통 엔진\r
\r
> **이 폴더는 필수입니다.** 효과 폴더 하나만 복사해도 \`_core\`는 같이 가져가야 합니다.\r
> 대신 이거 하나만 있으면 효과를 몇 개 붙이든 추가 비용이 거의 0입니다.\r
\r
---\r
\r
## 왜 이런 게 필요한가\r
\r
3D 효과 8개를 각자 따로 만들면, 8개 전부에 아래를 중복해서 짜야 합니다.\r
\r
| 반복되는 문제 | 빠뜨렸을 때 생기는 일 |\r
|---|---|\r
| \`prefers-reduced-motion\` 체크 | 전정기관 장애 사용자에게 멀미 유발 |\r
| 화면 밖에서 루프 정지 | 안 보이는 캔버스가 60fps로 배터리를 먹음 |\r
| 탭 백그라운드 처리 | 다른 탭 보는 중에도 GPU가 돌아감 |\r
| WebGL 지원 확인 | 구형 기기에서 빈 화면 |\r
| 이벤트 리스너 해제 | React 라우팅 시 메모리 누수 |\r
| 옵션 파싱 | HTML만 고쳐서 커스터마이징 불가 |\r
\r
\`_core\`는 이 6가지를 한 번만 구현하고 모든 효과가 공유합니다.\r
\r
---\r
\r
## 파일 구성\r
\r
\`\`\`\r
_core/\r
├─ effect.js    ★ mount/destroy 계약 — 이 라이브러리의 심장\r
├─ guard.js       "지금 켜도 되는가" 판정 (접근성/성능/기능 지원)\r
├─ observer.js    rAF 루프 + 가시성 자동 일시정지\r
├─ loader.js      OGL/three/model-viewer 지연 로드\r
├─ math.js        clamp / lerp / damp / hexToRgb …\r
├─ core.css       공용 CSS 토큰 + 마운트 상태 클래스\r
├─ react.js       React 어댑터 (바닐라는 안 씀)\r
└─ index.js       배럴\r
\`\`\`\r
\r
---\r
\r
## 핵심 계약\r
\r
모든 효과는 **정확히 같은 모양**입니다.\r
\r
\`\`\`js\r
const handle = mount(target, options);\r
\r
handle.destroy();          // 완전 원복\r
handle.update({ ... });    // 옵션 바꾸고 재시작\r
handle.items               // 요소별 개별 핸들 배열\r
handle.active              // 현재 켜져 있는지\r
\`\`\`\r
\r
### \`target\`으로 넣을 수 있는 것\r
\r
\`\`\`js\r
mount('.project-card')                       // 선택자 → 매칭되는 전부\r
mount(document.querySelector('#hero'))       // 단일 요소\r
mount(document.querySelectorAll('.card'))    // NodeList\r
mount([el1, el2])                            // 배열\r
\`\`\`\r
\r
요소가 1개든 20개든 반환 모양이 같아서 분기가 필요 없습니다.\r
\r
---\r
\r
## 옵션이 정해지는 순서\r
\r
**나중 것이 이깁니다.**\r
\r
\`\`\`\r
효과의 defaults  →  HTML의 data-fx-*  →  JS 인자\r
\`\`\`\r
\r
\`\`\`html\r
<!-- 디자이너/학생이 HTML만 고쳐서 조절 가능 -->\r
<div class="card" data-fx-max-tilt="18" data-fx-glare="false">…</div>\r
\`\`\`\r
\r
\`\`\`js\r
// 코드로 넘기면 data 속성보다 우선\r
mount('.card', { maxTilt: 8 });\r
\`\`\`\r
\r
\`camelCase\` 옵션은 \`data-fx-kebab-case\`로 씁니다 (\`maxTilt\` → \`data-fx-max-tilt\`).\r
값은 자동으로 타입 변환됩니다: \`"12"\` → 숫자, \`"false"\` → 불리언, \`"#a,#b"\` → 배열, \`"[1,2]"\` → JSON.\r
\r
> \`defaults\`에 없는 키는 **무시됩니다.** 오타가 조용히 넘어가지 않게 하려는 의도입니다.\r
\r
---\r
\r
## 가드 (\`guard.js\`)\r
\r
효과 정의에 선언만 하면 됩니다.\r
\r
\`\`\`js\r
defineEffect({\r
  name: 'silk-bg',\r
  guard: {\r
    motion: 'skip',    // 'skip' = 동작 줄이기면 끔 | 'ignore' = 효과가 직접 처리\r
    pointer: 'any',    // 'fine' = 마우스 있을 때만 (hover 기반 효과)\r
    minWidth: 0,       // 이 폭 미만이면 끔\r
    webgl: true,       // WebGL 필요\r
    minTier: 'low',    // 'low' | 'mid' | 'high' 최소 기기 등급\r
  },\r
  setup(ctx) { /* … */ },\r
});\r
\`\`\`\r
\r
### 꺼졌을 때 무슨 일이 일어나나\r
\r
\`\`\`html\r
<!-- 효과가 꺼지면 DOM에 이유가 남습니다 -->\r
<div class="fx fx-inert" data-fx-skipped="reduced-motion">\r
\`\`\`\r
\r
\`data-fx-skipped\` 값: \`reduced-motion\` · \`coarse-pointer\` · \`viewport-too-narrow\` · \`no-webgl\` · \`device-tier\`\r
\r
> **디버깅 팁:** 3D가 안 보이면 devtools에서 요소를 열어 \`data-fx-skipped\`를 먼저 보세요.\r
> 90%는 여기서 원인이 나옵니다.\r
\r
### 실행 중 재평가\r
\r
사용자가 페이지를 열어둔 채 OS 접근성 설정을 켜거나 창을 좁히면 **즉시 반영**됩니다.\r
새로고침이 필요 없습니다.\r
\r
### 가드 강제 해제 (탈출구)\r
\r
\`\`\`js\r
mount('.card', { guard: false });   // 모든 검사 무시. 데모/캡처용으로만.\r
\`\`\`\r
\r
---\r
\r
## 성능 규칙 (\`observer.js\`)\r
\r
\`\`\`js\r
import { createVisibleLoop } from '../_core/index.js';\r
\r
const loop = createVisibleLoop(el, (dt, elapsed) => {\r
  // dt = 초 단위 시간차 → 60Hz든 144Hz든 같은 속도\r
  render(elapsed);\r
}, { fps: 0 });   // fps: 0 = 주사율 그대로, 30 = 절반으로 제한\r
\r
ctx.addCleanup(() => loop.destroy());\r
\`\`\`\r
\r
자동으로 처리되는 것:\r
\r
- 요소가 화면 밖 → \`rAF\` 완전 정지 (일시정지가 아니라 취소)\r
- 탭이 백그라운드 → 정지\r
- 탭 복귀 시 튀는 \`dt\`를 0.1초로 클램프\r
- fps 제한 시 건너뛴 시간을 누적해서 넘김 → **느려지지 않고 프레임만 줄어듦**\r
\r
기기 등급별 자동 조절:\r
\r
\`\`\`js\r
import { dprCap, fpsCap } from '../_core/index.js';\r
\r
const dpr = dprCap(2);      // 저사양 1.5 / 중간 2 / 고사양 최대 2\r
const fps = fpsCap();       // 저사양 30 / 그 외 무제한\r
\`\`\`\r
\r
---\r
\r
## 지연 로드 (\`loader.js\`)\r
\r
\`\`\`js\r
import { loadOGL, prefetch } from '../_core/index.js';\r
\r
const { Renderer, Program, Mesh } = await loadOGL();   // 이 순간에만 8KB 요청\r
\`\`\`\r
\r
동시에 여러 효과가 호출해도 **네트워크 요청은 1회**입니다.\r
\r
### 버전 고정 / 오프라인\r
\r
\`\`\`js\r
import { setCDN } from './effects/_core/loader.js';\r
\r
setCDN({\r
  ogl: 'https://cdn.jsdelivr.net/npm/ogl@1.0.11/+esm',  // 정확한 버전\r
  // ogl: '/vendor/ogl.js',                              // 사내망/오프라인\r
});\r
\`\`\`\r
\r
> 실제 배포에서는 메이저 범위(\`@1\`) 대신 **정확한 버전**을 박는 것을 권장합니다.\r
> CDN이 마이너 업데이트를 밀면 어느 날 갑자기 깨질 수 있습니다.\r
\r
### 미리 받아두기\r
\r
\`\`\`js\r
prefetch(loadOGL);   // requestIdleCallback으로 유휴 시간에 미리 다운로드\r
\`\`\`\r
\r
---\r
\r
## 직접 효과 만들기\r
\r
\`setup\`은 정리 함수만 잘 등록하면 나머지는 \`_core\`가 처리합니다.\r
\r
\`\`\`js\r
// effects/my-effect/index.js\r
import { defineEffect, damp, createVisibleLoop } from '../_core/index.js';\r
\r
export const mount = defineEffect({\r
  name: 'my-effect',\r
  defaults: { strength: 1 },\r
  guard: { motion: 'skip', pointer: 'fine' },\r
\r
  setup({ el, opts, on, addCleanup, setVar, emit }) {\r
    let x = 0, target = 0;\r
\r
    // on(): destroy 시 자동으로 removeEventListener 됩니다\r
    on(el, 'pointermove', (e) => { target = e.clientX; });\r
\r
    const loop = createVisibleLoop(el, (dt) => {\r
      x = damp(x, target, 10, dt);\r
      setVar('--my-x', \`\${x}px\`);\r
    });\r
\r
    addCleanup(() => loop.destroy());\r
    emit('ready');\r
  },\r
});\r
\r
export default mount;\r
\`\`\`\r
\r
\`setup\`에서 쓸 수 있는 것:\r
\r
| 이름 | 설명 |\r
|---|---|\r
| \`el\` | 효과가 붙은 요소 |\r
| \`opts\` | 병합 완료된 옵션 |\r
| \`on(target, type, fn, opts)\` | 자동 해제되는 리스너 |\r
| \`addCleanup(fn)\` | 해제 시 실행할 함수 |\r
| \`setVar('--x', v)\` | \`el\`에 CSS 변수 설정 |\r
| \`emit('ready', detail)\` | \`fx:<name>:ready\` 커스텀 이벤트 발행 |\r
\r
---\r
\r
## React 어댑터 (\`react.js\`)\r
\r
\`\`\`jsx\r
import { useFx } from './effects/_core/react.js';\r
import { mount } from './effects/tilt-card/index.js';\r
\r
function Card() {\r
  const ref = useFx(mount, { maxTilt: 14 });\r
  return <div ref={ref} className="card">…</div>;\r
}\r
\`\`\`\r
\r
이미 처리된 함정 2가지:\r
\r
1. **StrictMode 이중 마운트** — \`defineEffect\`가 중복 마운트를 막습니다.\r
2. **매 렌더마다 새로 생기는 options 객체** — \`ref\`에 담아 deps에서 제외했습니다.\r
   값을 실제로 바꾸려면 \`deps\`에 원시값을 명시하세요: \`useFx(mount, { maxTilt }, [maxTilt])\`\r
\r
---\r
\r
## CSS 토큰 (\`core.css\`)\r
\r
\`:root\`에서 덮어쓰면 8개 효과가 한꺼번에 따라옵니다.\r
\r
\`\`\`css\r
:root {\r
  --fx-accent: #ff5a3c;      /* 내 포트폴리오 색으로 */\r
  --fx-radius: 24px;\r
  --fx-duration: 320ms;\r
}\r
\`\`\`\r
\r
다크 모드는 \`prefers-color-scheme\`과 \`html[data-theme]\` 둘 다 지원합니다.\r
(테마 토글 버튼이 있으면 \`data-theme\`가 이깁니다)\r
`,jy=`/**\r
 * _core/core.css\r
 * 모든 효과가 공유하는 최소한의 기반 스타일.\r
 * 이 파일 하나만 먼저 불러오고, 효과별 style.css를 뒤에 붙이면 됩니다.\r
 */\r
\r
/* ------------------------------------------------------------------ *\r
 * 공용 토큰\r
 * 포트폴리오 테마에 맞춰 :root에서 덮어쓰면 8개 효과가 한꺼번에 따라옵니다.\r
 * ------------------------------------------------------------------ */\r
:root {\r
  --fx-ease: cubic-bezier(0.22, 1, 0.36, 1);      /* 감속 위주, 고급스러운 느낌 */\r
  --fx-ease-out: cubic-bezier(0.16, 1, 0.3, 1);\r
  --fx-duration: 420ms;\r
  --fx-duration-fast: 220ms;\r
\r
  --fx-radius: 16px;\r
  --fx-surface: #ffffff;\r
  --fx-surface-2: #f4f5f7;\r
  --fx-border: rgba(0, 0, 0, 0.08);\r
  --fx-text: #16181d;\r
  --fx-text-dim: #6b7280;\r
  --fx-accent: #5b5bd6;\r
  --fx-glare: rgba(255, 255, 255, 0.55);\r
  --fx-shadow: 0 10px 30px -12px rgba(16, 18, 29, 0.28);\r
}\r
\r
@media (prefers-color-scheme: dark) {\r
  :root {\r
    --fx-surface: #16181d;\r
    --fx-surface-2: #1e2027;\r
    --fx-border: rgba(255, 255, 255, 0.1);\r
    --fx-text: #f2f3f5;\r
    --fx-text-dim: #9ca3af;\r
    --fx-glare: rgba(255, 255, 255, 0.22);\r
    --fx-shadow: 0 12px 34px -14px rgba(0, 0, 0, 0.7);\r
  }\r
}\r
\r
/* 사용자가 테마 토글로 강제 지정하는 경우 (html[data-theme]) */\r
:root[data-theme='dark'] {\r
  --fx-surface: #16181d;\r
  --fx-surface-2: #1e2027;\r
  --fx-border: rgba(255, 255, 255, 0.1);\r
  --fx-text: #f2f3f5;\r
  --fx-text-dim: #9ca3af;\r
  --fx-glare: rgba(255, 255, 255, 0.22);\r
  --fx-shadow: 0 12px 34px -14px rgba(0, 0, 0, 0.7);\r
}\r
:root[data-theme='light'] {\r
  --fx-surface: #ffffff;\r
  --fx-surface-2: #f4f5f7;\r
  --fx-border: rgba(0, 0, 0, 0.08);\r
  --fx-text: #16181d;\r
  --fx-text-dim: #6b7280;\r
  --fx-glare: rgba(255, 255, 255, 0.55);\r
  --fx-shadow: 0 10px 30px -12px rgba(16, 18, 29, 0.28);\r
}\r
\r
/* ------------------------------------------------------------------ *\r
 * 마운트 상태 클래스\r
 * ------------------------------------------------------------------ */\r
\r
/* JS가 붙었다는 표시. CSS에서 "JS 없을 때"와 분기할 때 씁니다. */\r
.fx {\r
  /* 3D 변환 시 텍스트가 흐려지는 것을 줄입니다. */\r
  -webkit-font-smoothing: antialiased;\r
}\r
\r
/*\r
 * 가드에 걸려 꺼진 상태.\r
 * 왜 꺼졌는지는 DOM의 data-fx-skipped 속성에 남습니다.\r
 * (devtools에서 요소를 보면 reduced-motion / no-webgl / device-tier 등이 보입니다)\r
 */\r
.fx-inert {\r
  /* 효과가 없어도 레이아웃이 깨지지 않도록 변환만 중립화합니다. */\r
  transform: none !important;\r
}\r
\r
/* ------------------------------------------------------------------ *\r
 * 안전망\r
 * 개별 효과는 각자 가드를 갖지만, CSS 트랜지션까지 남는 경우를 대비합니다.\r
 * .fx 하위로만 좁게 적용해 페이지 전체 애니메이션을 건드리지 않습니다.\r
 * ------------------------------------------------------------------ */\r
@media (prefers-reduced-motion: reduce) {\r
  .fx,\r
  .fx * {\r
    animation-duration: 0.01ms !important;\r
    animation-iteration-count: 1 !important;\r
    transition-duration: 0.01ms !important;\r
    scroll-behavior: auto !important;\r
  }\r
}\r
\r
/* ------------------------------------------------------------------ *\r
 * 접근성: 키보드 포커스는 어떤 3D 효과 위에서도 보여야 합니다.\r
 * ------------------------------------------------------------------ */\r
.fx :focus-visible,\r
.fx:focus-visible {\r
  outline: 2px solid var(--fx-accent);\r
  outline-offset: 3px;\r
  border-radius: 6px;\r
}\r
\r
/* 스크린 리더 전용 텍스트(효과 설명 등에 사용) */\r
.fx-sr-only {\r
  position: absolute;\r
  width: 1px;\r
  height: 1px;\r
  padding: 0;\r
  margin: -1px;\r
  overflow: hidden;\r
  clip: rect(0, 0, 0, 0);\r
  white-space: nowrap;\r
  border: 0;\r
}\r
`,Ey=`/**\r
 * _core/effect.js\r
 * ─────────────────────────────────────────────────────────────────\r
 * 이 파일이 이 라이브러리의 심장입니다.\r
 *\r
 * 모든 효과는 정확히 같은 모양을 가집니다:\r
 *\r
 *     mount(target, options) → { destroy(), update(), items, active }\r
 *\r
 * 이 계약 하나 덕분에\r
 *   · 바닐라 index.html 에서도\r
 *   · React App.jsx 에서도\r
 *   · Vue/Svelte 에서도\r
 * "같은 index.js 파일"을 고쳐 쓰지 않고 그대로 씁니다.\r
 *\r
 * defineEffect()는 효과 작성자가 반복해서 짜야 할 것들을 대신 처리합니다:\r
 *   1. 대상 해석      : 선택자 문자열 / 요소 / NodeList / 배열 모두 허용\r
 *   2. 옵션 병합      : defaults ← data-fx-* 속성 ← 코드 인자\r
 *   3. 가드 판정      : 접근성/성능/기능 지원 확인, 실행 중 변화도 재평가\r
 *   4. 중복 마운트 방지\r
 *   5. 정리(cleanup)  : 리스너·루프·DOM을 빠짐없이 되돌리기\r
 *\r
 * 효과 작성자는 setup(ctx) 안에서 진짜 로직만 쓰면 됩니다.\r
 */\r
\r
import { evaluateGuard, onReducedMotionChange, onViewportChange } from './guard.js';\r
\r
/** el → Map<effectName, handle>. 같은 요소에 같은 효과를 두 번 붙이지 않도록. */\r
const REGISTRY = new WeakMap();\r
\r
/* ------------------------------------------------------------------ *\r
 * 대상 해석\r
 * ------------------------------------------------------------------ */\r
\r
/*\r
 * \`instanceof Element\`를 쓰지 않는 이유:\r
 * iframe 안의 요소는 그 iframe의 Element를 상속합니다. 바깥 창에서 만든\r
 * \`Element\`와는 다른 생성자라 instanceof가 false가 됩니다(cross-realm).\r
 * 그러면 mount()가 조용히 아무것도 안 하고 끝납니다 — 원인 찾기가 아주 어렵습니다.\r
 * nodeType으로 보면 어느 문서의 요소든 똑같이 통과합니다.\r
 */\r
const isElement = (n) => !!n && n.nodeType === 1;\r
\r
function resolveTargets(target, root = document) {\r
  if (!target) return [];\r
  if (typeof target === 'string') return Array.from(root.querySelectorAll(target));\r
  if (isElement(target)) return [target];\r
  if (typeof target.length === 'number') return Array.from(target).filter(isElement);\r
  return [];\r
}\r
\r
/* ------------------------------------------------------------------ *\r
 * data-fx-* 속성 파싱\r
 * ------------------------------------------------------------------ */\r
\r
const kebab = (s) => s.replace(/[A-Z]/g, (c) => '-' + c.toLowerCase());\r
\r
/** 문자열을 적절한 JS 타입으로 되돌립니다. */\r
function parseValue(raw) {\r
  const v = raw.trim();\r
  if (v === 'true') return true;\r
  if (v === 'false') return false;\r
  if (v === 'null') return null;\r
  if (v !== '' && !Number.isNaN(Number(v))) return Number(v);\r
  if (/^[[{]/.test(v)) {\r
    try {\r
      return JSON.parse(v);\r
    } catch {\r
      /* JSON이 아니면 문자열로 */\r
    }\r
  }\r
  if (v.includes(',')) return v.split(',').map((s) => parseValue(s));\r
  return v;\r
}\r
\r
/**\r
 * defaults에 있는 키만 data-fx-*에서 읽습니다.\r
 * (아무 속성이나 옵션으로 받아들이면 오타가 조용히 무시됩니다)\r
 *\r
 * 예: defaults = { maxTilt: 12 }  →  data-fx-max-tilt="20"\r
 *\r
 * **효과 이름이 붙은 속성이 우선입니다**: \`data-fx-scramble-duration\` 처럼요.\r
 * 한 요소에 효과가 둘이면(\`data-fx="scramble reveal"\`) 둘 다 duration을 갖는데,\r
 * 같은 \`data-fx-duration\`에 실으면 HTML 중복 속성 규칙상 **첫 값만 남아**\r
 * 다른 효과의 값을 덮었습니다. 이름 접두사가 그 충돌을 없앱니다.\r
 */\r
function readDataOptions(el, defaults, name) {\r
  const out = {};\r
  for (const key of Object.keys(defaults)) {\r
    const scoped = name ? \`data-fx-\${name}-\${kebab(key)}\` : null;\r
    const attr = \`data-fx-\${kebab(key)}\`;\r
    if (scoped && el.hasAttribute(scoped)) out[key] = parseValue(el.getAttribute(scoped));\r
    else if (el.hasAttribute(attr)) out[key] = parseValue(el.getAttribute(attr));\r
  }\r
  return out;\r
}\r
\r
/* ------------------------------------------------------------------ *\r
 * defineEffect\r
 * ------------------------------------------------------------------ */\r
\r
/**\r
 * @typedef {object} EffectContext\r
 * @property {Element} el          효과가 붙은 요소\r
 * @property {object}  opts        최종 병합된 옵션\r
 * @property {string}  name        효과 이름\r
 * @property {Function} on         자동 해제되는 addEventListener\r
 * @property {Function} addCleanup 해제 시 실행할 함수 등록\r
 * @property {Function} setVar     el에 CSS 변수 설정\r
 * @property {Function} emit       fx:<name>:<type> 커스텀 이벤트 발행\r
 */\r
\r
/**\r
 * @param {object} def\r
 * @param {string} def.name            효과 이름(=CSS 클래스 fx-<name>)\r
 * @param {object} [def.defaults]      기본 옵션\r
 * @param {import('./guard.js').GuardSpec} [def.guard] 가드 규칙\r
 * @param {(ctx: EffectContext) => ({destroy?: Function}|void)} def.setup\r
 * @returns {(target: any, options?: object) => object} mount 함수\r
 */\r
export function defineEffect(def) {\r
  const { name, defaults = {}, guard = {}, setup } = def;\r
  if (!name || typeof setup !== 'function') {\r
    throw new Error('[fx] defineEffect: name과 setup은 필수입니다.');\r
  }\r
\r
  function mountOne(el, options) {\r
    let store = REGISTRY.get(el);\r
    if (!store) REGISTRY.set(el, (store = new Map()));\r
    // 이미 붙어 있으면 그대로 돌려줍니다(React StrictMode 이중 마운트 안전).\r
    if (store.has(name)) return store.get(name);\r
\r
    const opts = Object.assign({}, defaults, readDataOptions(el, defaults, name), options);\r
\r
    let cleanups = [];\r
    let api = null;\r
    let active = false;\r
\r
    /*\r
     * 마커 클래스가 이미 HTML에 적혀 있었는지 기록합니다.\r
     *\r
     * 왜 필요한가: flip-card처럼 구조 자체를 CSS로 잡는 효과는 사용자가\r
     * HTML에 .fx-flip-card를 직접 씁니다. 그런데 defineEffect도 같은 이름의\r
     * 클래스를 붙입니다(fx-<name>). 이때 destroy()에서 무심코 지우면\r
     * 사용자가 쓴 구조 클래스까지 사라져 레이아웃이 무너집니다.\r
     * → 우리가 붙인 것만 우리가 지웁니다.\r
     */\r
    const ownedMarker = !el.classList.contains(\`fx-\${name}\`);\r
    const ownedBase = !el.classList.contains('fx');\r
\r
    const ctx = {\r
      el,\r
      opts,\r
      name,\r
      /** 해제 시 자동으로 removeEventListener 됩니다. */\r
      on(target, type, handler, listenerOpts) {\r
        target.addEventListener(type, handler, listenerOpts);\r
        cleanups.push(() => target.removeEventListener(type, handler, listenerOpts));\r
        return handler;\r
      },\r
      addCleanup(fn) {\r
        if (typeof fn === 'function') cleanups.push(fn);\r
      },\r
      setVar(key, value) {\r
        el.style.setProperty(key, value);\r
      },\r
      emit(type, detail) {\r
        el.dispatchEvent(new CustomEvent(\`fx:\${name}:\${type}\`, { detail, bubbles: true }));\r
      },\r
    };\r
\r
    function activate() {\r
      if (active) return;\r
      active = true;\r
      el.classList.add(\`fx-\${name}\`);\r
      try {\r
        api = setup(ctx) || {};\r
      } catch (err) {\r
        active = false;\r
        el.classList.remove(\`fx-\${name}\`);\r
        console.error(\`[fx:\${name}] setup 실패\`, err);\r
      }\r
    }\r
\r
    function deactivate() {\r
      if (!active) return;\r
      active = false;\r
      // 등록 역순으로 정리하는 편이 안전합니다.\r
      for (const fn of cleanups.reverse()) {\r
        try {\r
          fn();\r
        } catch (err) {\r
          console.warn(\`[fx:\${name}] cleanup 오류\`, err);\r
        }\r
      }\r
      cleanups = [];\r
      try {\r
        api?.destroy?.();\r
      } catch (err) {\r
        console.warn(\`[fx:\${name}] destroy 오류\`, err);\r
      }\r
      api = null;\r
      if (ownedMarker) el.classList.remove(\`fx-\${name}\`);\r
    }\r
\r
    /**\r
     * 가드를 다시 평가합니다.\r
     * 사용자가 도중에 "동작 줄이기"를 켜거나 창을 좁히면 즉시 반영됩니다.\r
     */\r
    function evaluate() {\r
      const verdict = evaluateGuard(guard, opts);\r
      if (verdict.pass) {\r
        el.classList.remove('fx-inert');\r
        delete el.dataset.fxSkipped;\r
        activate();\r
      } else {\r
        deactivate();\r
        el.classList.add('fx-inert');\r
        el.dataset.fxSkipped = verdict.reason; // 디버깅용: 왜 꺼졌는지 DOM에 남습니다\r
      }\r
    }\r
\r
    el.classList.add('fx');\r
    evaluate();\r
\r
    const unwatchMotion = onReducedMotionChange(evaluate);\r
    // minWidth 가드가 있을 때만 resize를 구독합니다(불필요한 리스너 방지).\r
    const unwatchViewport = guard.minWidth ? onViewportChange(evaluate) : () => {};\r
\r
    const handle = {\r
      name,\r
      el,\r
      get active() {\r
        return active;\r
      },\r
      /** setup()이 반환한 효과별 API (없으면 null). 예: flip-card의 flip() */\r
      get api() {\r
        return api;\r
      },\r
      /** 옵션을 바꾸고 효과를 재시작합니다. */\r
      update(next = {}) {\r
        Object.assign(opts, next);\r
        if (active) {\r
          deactivate();\r
          activate();\r
        }\r
        return handle;\r
      },\r
      destroy() {\r
        unwatchMotion();\r
        unwatchViewport();\r
        deactivate();\r
        if (ownedBase) el.classList.remove('fx');\r
        el.classList.remove('fx-inert');\r
        delete el.dataset.fxSkipped;\r
        store.delete(name);\r
      },\r
    };\r
\r
    store.set(name, handle);\r
    return handle;\r
  }\r
\r
  /**\r
   * mount(target, options)\r
   *\r
   * target: '.card' | element | NodeList | Element[]\r
   * 반환값은 항상 같은 모양이라 요소가 1개든 20개든 똑같이 다룹니다.\r
   */\r
  function mount(target, options = {}) {\r
    const els = resolveTargets(target, options.root || document);\r
    const items = els.map((el) => mountOne(el, options));\r
\r
    if (!items.length && typeof target === 'string') {\r
      console.warn(\`[fx:\${name}] "\${target}"에 해당하는 요소가 없습니다.\`);\r
    }\r
\r
    return {\r
      name,\r
      items,\r
      /** 편의: 첫 번째 요소 */\r
      el: items[0]?.el ?? null,\r
      /** 편의: 첫 번째 요소의 효과별 API */\r
      get api() {\r
        return items[0]?.api ?? null;\r
      },\r
      get active() {\r
        return items.some((h) => h.active);\r
      },\r
      update(next) {\r
        items.forEach((h) => h.update(next));\r
        return this;\r
      },\r
      // 화살표 함수로 두어 \`const { destroy } = mount(...)\` 해도 안전합니다.\r
      destroy: () => items.forEach((h) => h.destroy()),\r
    };\r
  }\r
\r
  mount.effectName = name;\r
  mount.defaults = defaults;\r
  return mount;\r
}\r
\r
/** 특정 요소에 붙은 효과 핸들을 찾습니다(디버깅/외부 제어용). */\r
export function getEffect(el, name) {\r
  return REGISTRY.get(el)?.get(name) ?? null;\r
}\r
\r
/** 한 요소에 붙은 모든 효과를 해제합니다. */\r
export function destroyAll(el) {\r
  const store = REGISTRY.get(el);\r
  if (!store) return;\r
  for (const handle of Array.from(store.values())) handle.destroy();\r
}\r
`,Cy=`/**\r
 * _core/guard.js\r
 * "이 효과를 지금 이 기기에서 켜도 되는가?"를 한 곳에서 판단합니다.\r
 *\r
 * 효과마다 따로 구현하면 반드시 하나는 빠뜨립니다.\r
 * 접근성(prefers-reduced-motion), 배터리(모바일/저사양), 기능 지원(WebGL)을\r
 * 여기서 한 번만 처리하고 모든 효과가 공유합니다.\r
 */\r
\r
const hasWindow = typeof window !== 'undefined';\r
\r
/** matchMedia를 SSR-safe하게 감쌉니다. */\r
function mq(query) {\r
  if (!hasWindow || typeof window.matchMedia !== 'function') return null;\r
  return window.matchMedia(query);\r
}\r
\r
/* ------------------------------------------------------------------ *\r
 * 1. 모션 선호도\r
 * ------------------------------------------------------------------ */\r
\r
/** OS에서 "동작 줄이기"를 켠 사용자인지. */\r
export function prefersReducedMotion() {\r
  return mq('(prefers-reduced-motion: reduce)')?.matches ?? false;\r
}\r
\r
/**\r
 * 모션 선호도가 "실행 중에" 바뀌는 것까지 감지합니다.\r
 * (macOS/Windows 접근성 토글은 페이지 새로고침 없이 바뀝니다)\r
 * @returns {() => void} 구독 해제 함수\r
 */\r
export function onReducedMotionChange(handler) {\r
  const m = mq('(prefers-reduced-motion: reduce)');\r
  if (!m) return () => {};\r
  const fn = () => handler(m.matches);\r
  // Safari 13 이하는 addEventListener가 없습니다.\r
  if (m.addEventListener) m.addEventListener('change', fn);\r
  else m.addListener(fn);\r
  return () => {\r
    if (m.removeEventListener) m.removeEventListener('change', fn);\r
    else m.removeListener(fn);\r
  };\r
}\r
\r
/* ------------------------------------------------------------------ *\r
 * 2. 입력 장치 / 화면\r
 * ------------------------------------------------------------------ */\r
\r
/** 손가락/펜처럼 정밀도가 낮은 포인터인지 (= 대부분 모바일). */\r
export function isCoarsePointer() {\r
  return mq('(pointer: coarse)')?.matches ?? false;\r
}\r
\r
/** 마우스처럼 hover가 가능한 환경인지. */\r
export function canHover() {\r
  return mq('(hover: hover)')?.matches ?? true;\r
}\r
\r
/** 뷰포트 너비가 기준 미만인지. */\r
export function isNarrowerThan(px) {\r
  if (!hasWindow) return false;\r
  return window.innerWidth < px;\r
}\r
\r
/* ------------------------------------------------------------------ *\r
 * 3. 기능 지원\r
 * ------------------------------------------------------------------ */\r
\r
let _webgl = null;\r
\r
/**\r
 * WebGL 컨텍스트를 만들 수 있는지. 결과를 캐싱합니다.\r
 * (캔버스를 매번 만들면 그것 자체가 비쌉니다)\r
 */\r
export function supportsWebGL() {\r
  if (_webgl !== null) return _webgl;\r
  if (!hasWindow) return (_webgl = false);\r
  try {\r
    const canvas = document.createElement('canvas');\r
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');\r
    _webgl = !!gl;\r
    // 컨텍스트는 개수 제한이 있으므로 즉시 반납합니다.\r
    gl?.getExtension('WEBGL_lose_context')?.loseContext();\r
  } catch {\r
    _webgl = false;\r
  }\r
  return _webgl;\r
}\r
\r
/* ------------------------------------------------------------------ *\r
 * 4. 기기 등급\r
 * ------------------------------------------------------------------ */\r
\r
const TIER_RANK = { low: 0, mid: 1, high: 2 };\r
let _tier = null;\r
\r
/**\r
 * 대략적인 성능 등급을 'low' | 'mid' | 'high'로 추정합니다.\r
 * 정확한 벤치마크가 아니라 "무거운 셰이더를 켤지 말지" 정도의 힌트입니다.\r
 */\r
export function deviceTier() {\r
  if (_tier) return _tier;\r
  if (!hasWindow) return (_tier = 'mid');\r
\r
  const cores = navigator.hardwareConcurrency || 4;\r
  const memory = navigator.deviceMemory || 4; // Chromium 계열만 제공\r
  const coarse = isCoarsePointer();\r
\r
  if (cores <= 4 || memory <= 4 || (coarse && isNarrowerThan(768))) _tier = 'low';\r
  else if (cores >= 8 && memory >= 8) _tier = 'high';\r
  else _tier = 'mid';\r
\r
  return _tier;\r
}\r
\r
/**\r
 * 기기 등급에 맞춰 devicePixelRatio 상한을 정합니다.\r
 * 레티나에서 dpr=3으로 셰이더를 그리면 픽셀 수가 9배가 됩니다.\r
 */\r
export function dprCap(max = 2) {\r
  if (!hasWindow) return 1;\r
  const tier = deviceTier();\r
  const ceiling = tier === 'low' ? 1.5 : tier === 'mid' ? 2 : max;\r
  return Math.min(window.devicePixelRatio || 1, ceiling, max);\r
}\r
\r
/** 기기 등급에 맞춘 권장 fps 상한. 0이면 제한 없음(=주사율 그대로). */\r
export function fpsCap(preferred = 0) {\r
  const tier = deviceTier();\r
  if (tier === 'low') return Math.min(preferred || 30, 30);\r
  if (tier === 'mid') return preferred || 0;\r
  return preferred || 0;\r
}\r
\r
/* ------------------------------------------------------------------ *\r
 * 5. 종합 판정\r
 * ------------------------------------------------------------------ */\r
\r
/**\r
 * @typedef {object} GuardSpec\r
 * @property {'skip'|'ignore'} [motion='skip']\r
 *   'skip'   → 동작 줄이기 사용자면 효과를 끕니다.\r
 *   'ignore' → 효과 내부(또는 CSS)에서 알아서 처리하므로 가드하지 않습니다.\r
 * @property {'any'|'fine'} [pointer='any']\r
 *   'fine' → 마우스가 있을 때만 켭니다(hover 기반 효과).\r
 * @property {number} [minWidth=0]  이 너비 미만이면 끕니다.\r
 * @property {boolean} [webgl=false] WebGL이 필요합니다.\r
 * @property {'low'|'mid'|'high'} [minTier='low'] 최소 기기 등급.\r
 */\r
\r
/**\r
 * 가드를 평가합니다.\r
 * opts.guard === false 이면 모든 검사를 건너뜁니다(탈출구).\r
 *\r
 * @returns {{ pass: boolean, reason: string }}\r
 */\r
export function evaluateGuard(spec = {}, opts = {}) {\r
  if (opts.guard === false) return { pass: true, reason: '' };\r
\r
  const {\r
    motion = 'skip',\r
    pointer = 'any',\r
    minWidth = 0,\r
    webgl = false,\r
    minTier = 'low',\r
  } = spec;\r
\r
  if (motion === 'skip' && prefersReducedMotion()) {\r
    return { pass: false, reason: 'reduced-motion' };\r
  }\r
  if (pointer === 'fine' && !canHover()) {\r
    return { pass: false, reason: 'coarse-pointer' };\r
  }\r
  if (minWidth > 0 && isNarrowerThan(minWidth)) {\r
    return { pass: false, reason: 'viewport-too-narrow' };\r
  }\r
  if (webgl && !supportsWebGL()) {\r
    return { pass: false, reason: 'no-webgl' };\r
  }\r
  if (TIER_RANK[deviceTier()] < TIER_RANK[minTier]) {\r
    return { pass: false, reason: 'device-tier' };\r
  }\r
  return { pass: true, reason: '' };\r
}\r
\r
/**\r
 * 뷰포트 폭 변화를 구독합니다(가드 재평가용).\r
 * resize는 초당 수십 번 오므로 디바운스합니다.\r
 */\r
export function onViewportChange(handler, delay = 200) {\r
  if (!hasWindow) return () => {};\r
  let timer = 0;\r
  const fn = () => {\r
    clearTimeout(timer);\r
    timer = setTimeout(handler, delay);\r
  };\r
  window.addEventListener('resize', fn, { passive: true });\r
  window.addEventListener('orientationchange', fn, { passive: true });\r
  return () => {\r
    clearTimeout(timer);\r
    window.removeEventListener('resize', fn);\r
    window.removeEventListener('orientationchange', fn);\r
  };\r
}\r
`,Ny=`/**\r
 * _core/index.js\r
 * 배럴 파일. 효과를 직접 만들 때는 여기서 필요한 것만 가져다 쓰면 됩니다.\r
 *\r
 *   import { defineEffect, damp, createVisibleLoop } from '../_core/index.js';\r
 *\r
 * ⚠️ react.js는 여기서 re-export 하지 않습니다.\r
 *    바닐라 프로젝트가 이 배럴을 불러올 때 'react' 모듈을 찾다가 깨지기 때문입니다.\r
 *    React 어댑터는 '../_core/react.js'에서 직접 가져오세요.\r
 */\r
\r
export { defineEffect, getEffect, destroyAll } from './effect.js';\r
\r
export {\r
  prefersReducedMotion,\r
  onReducedMotionChange,\r
  onViewportChange,\r
  isCoarsePointer,\r
  canHover,\r
  isNarrowerThan,\r
  supportsWebGL,\r
  deviceTier,\r
  dprCap,\r
  fpsCap,\r
  evaluateGuard,\r
} from './guard.js';\r
\r
export {\r
  observeVisibility,\r
  observeResize,\r
  createLoop,\r
  createVisibleLoop,\r
} from './observer.js';\r
\r
export {\r
  CDN,\r
  setCDN,\r
  loadModule,\r
  loadScript,\r
  loadOGL,\r
  loadThree,\r
  loadModelViewer,\r
  prefetch,\r
} from './loader.js';\r
\r
export {\r
  clamp,\r
  lerp,\r
  damp,\r
  map,\r
  progress,\r
  round,\r
  pointerToUnit,\r
  hexToRgb,\r
  rafThrottle,\r
} from './math.js';\r
\r
export const VERSION = '1.0.0';\r
`,$y=`/**\r
 * _core/loader.js\r
 * 무거운 3D 라이브러리를 "실제로 필요한 순간에" 딱 한 번만 불러옵니다.\r
 *\r
 * 왜 중요한가:\r
 *   silk-bg 하나 때문에 OGL 8KB를 초기 번들에 넣으면,\r
 *   그 효과를 안 쓰는 페이지도 8KB를 냅니다.\r
 *   여기서 동적 import를 쓰면 효과가 마운트될 때만 네트워크 요청이 나갑니다.\r
 *\r
 * 바닐라(빌드 없음)와 번들러(Vite/webpack) 양쪽에서 동작하도록\r
 * 전체 URL을 동적 import 하고, 번들러에는 건드리지 말라고 표시합니다.\r
 */\r
\r
/**\r
 * CDN 주소. 버전은 메이저만 고정해 두었습니다(자동으로 최신 패치 사용).\r
 * 실무 배포에서는 setCDN()으로 정확한 버전을 못 박는 것을 권장합니다.\r
 */\r
export const CDN = {\r
  ogl: 'https://cdn.jsdelivr.net/npm/ogl@1/+esm',\r
  three: 'https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js',\r
  modelViewer: 'https://cdn.jsdelivr.net/npm/@google/model-viewer@4/dist/model-viewer.min.js',\r
};\r
\r
/**\r
 * CDN 주소를 갈아끼웁니다.\r
 * 예) 사내망/오프라인 데모: setCDN({ ogl: '/vendor/ogl.js' })\r
 * 예) 버전 고정: setCDN({ ogl: 'https://cdn.jsdelivr.net/npm/ogl@1.0.11/+esm' })\r
 */\r
export function setCDN(overrides = {}) {\r
  Object.assign(CDN, overrides);\r
}\r
\r
const moduleCache = new Map();\r
const scriptCache = new Map();\r
\r
/**\r
 * ES 모듈을 URL에서 한 번만 불러옵니다(동시 호출도 요청 1회).\r
 * 실패하면 캐시에서 지워서 다음 시도가 재요청하도록 합니다.\r
 */\r
export function loadModule(url) {\r
  if (moduleCache.has(url)) return moduleCache.get(url);\r
  // @vite-ignore: Vite가 이 URL을 사전 번들링하려다 실패하는 것을 막습니다.\r
  const p = import(/* @vite-ignore */ /* webpackIgnore: true */ url).catch((err) => {\r
    moduleCache.delete(url);\r
    throw new Error(\`[fx] 모듈 로드 실패: \${url}\\n\${err.message}\`);\r
  });\r
  moduleCache.set(url, p);\r
  return p;\r
}\r
\r
/**\r
 * 커스텀 엘리먼트처럼 "전역에 등록되는" 스크립트를 불러옵니다.\r
 * (model-viewer가 여기 해당)\r
 */\r
export function loadScript(url, { module = true } = {}) {\r
  if (scriptCache.has(url)) return scriptCache.get(url);\r
\r
  const p = new Promise((resolve, reject) => {\r
    // 이미 같은 스크립트가 문서에 있으면 재사용합니다.\r
    const existing = document.querySelector(\`script[src="\${url}"]\`);\r
    if (existing) {\r
      if (existing.dataset.fxLoaded === '1') return resolve();\r
      existing.addEventListener('load', () => resolve(), { once: true });\r
      existing.addEventListener('error', reject, { once: true });\r
      return;\r
    }\r
    const s = document.createElement('script');\r
    s.src = url;\r
    if (module) s.type = 'module';\r
    s.async = true;\r
    s.addEventListener('load', () => {\r
      s.dataset.fxLoaded = '1';\r
      resolve();\r
    }, { once: true });\r
    s.addEventListener('error', () => {\r
      scriptCache.delete(url);\r
      reject(new Error(\`[fx] 스크립트 로드 실패: \${url}\`));\r
    }, { once: true });\r
    document.head.appendChild(s);\r
  });\r
\r
  scriptCache.set(url, p);\r
  return p;\r
}\r
\r
/** OGL(경량 WebGL, gzip 약 8KB) */\r
export const loadOGL = () => loadModule(CDN.ogl);\r
\r
/** three.js — GLB 커스텀 씬이 필요할 때만. gzip 약 150KB. */\r
export const loadThree = () => loadModule(CDN.three);\r
\r
/** <model-viewer> 커스텀 엘리먼트 등록. */\r
export function loadModelViewer() {\r
  if (typeof customElements !== 'undefined' && customElements.get('model-viewer')) {\r
    return Promise.resolve();\r
  }\r
  return loadScript(CDN.modelViewer, { module: true }).then(() =>\r
    customElements?.whenDefined?.('model-viewer')\r
  );\r
}\r
\r
/**\r
 * 사용자가 곧 필요로 할 것 같은 모듈을 미리 예열합니다.\r
 * 예) 히어로 아래에 3D 섹션이 있으면 스크롤 시작 시 prefetch(loadOGL)\r
 */\r
export function prefetch(loaderFn) {\r
  const run = () => loaderFn().catch(() => {});\r
  if (typeof requestIdleCallback === 'function') requestIdleCallback(run, { timeout: 2000 });\r
  else setTimeout(run, 1000);\r
}\r
`,Ly=`/**\r
 * _core/math.js\r
 * 효과들이 공통으로 쓰는 아주 작은 수학 유틸.\r
 * 의존성 0. 모든 함수는 순수 함수입니다.\r
 */\r
\r
/** v를 [min, max] 범위로 자릅니다. */\r
export const clamp = (v, min, max) => (v < min ? min : v > max ? max : v);\r
\r
/** a에서 b로 t(0~1)만큼 선형 보간. */\r
export const lerp = (a, b, t) => a + (b - a) * t;\r
\r
/**\r
 * 프레임레이트에 독립적인 감쇠 보간.\r
 *\r
 * lerp(a, b, 0.1)을 매 프레임 쓰면 120Hz 모니터에서는 2배 빨리 따라갑니다.\r
 * damp는 dt(초)를 받아 어떤 주사율에서도 같은 속도로 수렴합니다.\r
 *\r
 * @param {number} a  현재값\r
 * @param {number} b  목표값\r
 * @param {number} lambda 반응 속도(클수록 빠름, 보통 6~14)\r
 * @param {number} dt 이전 프레임과의 시간차(초)\r
 */\r
export const damp = (a, b, lambda, dt) => lerp(a, b, 1 - Math.exp(-lambda * dt));\r
\r
/** [a,b] 구간의 v를 [c,d] 구간으로 옮깁니다. */\r
export const map = (v, a, b, c, d) => c + ((v - a) / (b - a || 1)) * (d - c);\r
\r
/** [a,b] 구간에서 v의 진행도(0~1). 범위 밖은 잘립니다. */\r
export const progress = (v, a, b) => clamp((v - a) / (b - a || 1), 0, 1);\r
\r
/** CSS 변수에 넣기 좋게 소수점을 줄입니다(리페인트 노이즈 감소). */\r
export const round = (v, p = 3) => {\r
  const m = 10 ** p;\r
  return Math.round(v * m) / m;\r
};\r
\r
/** 요소 기준 포인터 위치를 -1~1 좌표계로 변환합니다. (중앙 = 0,0) */\r
export function pointerToUnit(event, rect) {\r
  return {\r
    x: clamp(((event.clientX - rect.left) / rect.width) * 2 - 1, -1, 1),\r
    y: clamp(((event.clientY - rect.top) / rect.height) * 2 - 1, -1, 1),\r
  };\r
}\r
\r
/**\r
 * '#4f46e5' | '4f46e5' | '#f0a' → [r, g, b] (각 0~1)\r
 * WebGL 셰이더 uniform으로 바로 넘길 수 있는 형식입니다.\r
 */\r
export function hexToRgb(hex) {\r
  let h = String(hex).trim().replace(/^#/, '');\r
  if (h.length === 3) h = h.split('').map((c) => c + c).join('');\r
  if (h.length !== 6 || /[^0-9a-f]/i.test(h)) return [0, 0, 0];\r
  const n = parseInt(h, 16);\r
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];\r
}\r
\r
/** 함수 호출을 다음 프레임 1회로 합칩니다(resize 핸들러 등). */\r
export function rafThrottle(fn) {\r
  let queued = 0;\r
  let lastArgs = null;\r
  const wrapped = (...args) => {\r
    lastArgs = args;\r
    if (queued) return;\r
    queued = requestAnimationFrame(() => {\r
      queued = 0;\r
      fn(...lastArgs);\r
    });\r
  };\r
  wrapped.cancel = () => {\r
    if (queued) cancelAnimationFrame(queued);\r
    queued = 0;\r
  };\r
  return wrapped;\r
}\r
`,Ry=`/**\r
 * _core/observer.js\r
 * 애니메이션 루프 + 가시성 자동 일시정지.\r
 *\r
 * 핵심 원칙: 화면 밖이거나 탭이 백그라운드면 rAF 루프를 완전히 끊습니다.\r
 * requestAnimationFrame은 탭이 숨겨지면 알아서 멈추지만,\r
 * "스크롤로 화면 밖으로 나간 캔버스"는 계속 60fps로 그려집니다.\r
 * 그게 노트북 배터리를 먹는 주범입니다.\r
 */\r
\r
const hasIO = typeof IntersectionObserver !== 'undefined';\r
\r
/**\r
 * 요소가 뷰포트에 들어오고 나가는 것을 구독합니다.\r
 * IntersectionObserver가 없는 환경에서는 "항상 보인다"로 간주합니다.\r
 *\r
 * @returns {() => void} 구독 해제 함수\r
 */\r
export function observeVisibility(el, { onEnter, onLeave, threshold = 0, rootMargin = '0px' } = {}) {\r
  // 요소가 속한 창의 생성자를 씁니다. iframe 안의 요소를 바깥 창의\r
  // IntersectionObserver로 감시하면 뷰포트 기준이 어긋납니다.\r
  const view = el?.ownerDocument?.defaultView ?? window;\r
  const IO = view.IntersectionObserver;\r
  if (!hasIO || !IO) {\r
    onEnter?.();\r
    return () => {};\r
  }\r
  let visible = null;\r
  const io = new IO(\r
    (entries) => {\r
      for (const entry of entries) {\r
        const next = entry.isIntersecting;\r
        if (next === visible) continue; // 중복 호출 방지\r
        visible = next;\r
        next ? onEnter?.(entry) : onLeave?.(entry);\r
      }\r
    },\r
    { threshold, rootMargin }\r
  );\r
  io.observe(el);\r
  return () => io.disconnect();\r
}\r
\r
/**\r
 * 프레임 루프.\r
 *\r
 * - dt(초)를 넘겨주므로 주사율에 독립적인 애니메이션을 짤 수 있습니다.\r
 * - fps > 0 이면 그 프레임레이트로 제한합니다(저사양 기기 배터리 절약).\r
 *   건너뛴 프레임의 dt는 버리지 않고 누적해서 넘기므로 속도가 느려지지 않습니다.\r
 * - 탭 전환 후 복귀 시 dt가 몇 초로 튀는 것을 0.1초로 잘라냅니다.\r
 *\r
 * @param {(dt:number, elapsed:number) => void} tick\r
 */\r
export function createLoop(tick, { fps = 0 } = {}) {\r
  const interval = fps > 0 ? 1 / fps : 0;\r
  let raf = 0;\r
  let last = 0;\r
  let pending = 0;\r
  let elapsed = 0;\r
  let running = false;\r
\r
  const frame = (now) => {\r
    raf = requestAnimationFrame(frame);\r
    if (!last) {\r
      last = now;\r
      return;\r
    }\r
    let dt = (now - last) / 1000;\r
    last = now;\r
    if (dt > 0.1) dt = 0.1; // 탭 복귀 시 점프 방지\r
\r
    pending += dt;\r
    if (interval && pending < interval) return;\r
\r
    elapsed += pending;\r
    tick(pending, elapsed);\r
    pending = 0;\r
  };\r
\r
  return {\r
    start() {\r
      if (running) return;\r
      running = true;\r
      last = 0;\r
      pending = 0;\r
      raf = requestAnimationFrame(frame);\r
    },\r
    stop() {\r
      if (!running) return;\r
      running = false;\r
      cancelAnimationFrame(raf);\r
      raf = 0;\r
    },\r
    get running() {\r
      return running;\r
    },\r
    get elapsed() {\r
      return elapsed;\r
    },\r
  };\r
}\r
\r
/**\r
 * createLoop + observeVisibility + 탭 가시성을 하나로 묶은 것.\r
 * 캔버스/WebGL 효과는 전부 이걸 씁니다.\r
 *\r
 * rootMargin 기본값이 넉넉한 이유: 화면에 들어오기 직전에 미리 시작해야\r
 * 스크롤해서 도달했을 때 이미 애니메이션이 자연스럽게 돌고 있습니다.\r
 *\r
 * @param {Element} el 가시성을 감시할 요소\r
 * @param {(dt:number, elapsed:number) => void} tick\r
 */\r
export function createVisibleLoop(el, tick, { fps = 0, threshold = 0, rootMargin = '150px' } = {}) {\r
  const loop = createLoop(tick, { fps });\r
  let inView = false;\r
  let tabVisible = typeof document === 'undefined' || !document.hidden;\r
  let enabled = true;\r
\r
  const sync = () => {\r
    if (enabled && inView && tabVisible) loop.start();\r
    else loop.stop();\r
  };\r
\r
  const unobserve = observeVisibility(el, {\r
    threshold,\r
    rootMargin,\r
    onEnter: () => {\r
      inView = true;\r
      sync();\r
    },\r
    onLeave: () => {\r
      inView = false;\r
      sync();\r
    },\r
  });\r
\r
  const onTab = () => {\r
    tabVisible = !document.hidden;\r
    sync();\r
  };\r
  document.addEventListener('visibilitychange', onTab);\r
\r
  return {\r
    /** 수동 정지(가시성과 무관하게 꺼둡니다). */\r
    pause() {\r
      enabled = false;\r
      sync();\r
    },\r
    resume() {\r
      enabled = true;\r
      sync();\r
    },\r
    get running() {\r
      return loop.running;\r
    },\r
    get elapsed() {\r
      return loop.elapsed;\r
    },\r
    destroy() {\r
      unobserve();\r
      document.removeEventListener('visibilitychange', onTab);\r
      loop.stop();\r
    },\r
  };\r
}\r
\r
/**\r
 * 요소 크기 변화 구독. ResizeObserver가 없으면 window resize로 폴백합니다.\r
 * @returns {() => void} 구독 해제 함수\r
 */\r
export function observeResize(el, handler) {\r
  if (typeof ResizeObserver !== 'undefined') {\r
    const ro = new ResizeObserver((entries) => handler(entries[0]?.contentRect));\r
    ro.observe(el);\r
    return () => ro.disconnect();\r
  }\r
  const fn = () => handler(el.getBoundingClientRect());\r
  window.addEventListener('resize', fn, { passive: true });\r
  return () => window.removeEventListener('resize', fn);\r
}\r
`,My=`/**\r
 * _core/react.js\r
 * React 프로젝트 전용 어댑터. 바닐라 프로젝트는 이 파일을 불러오지 않습니다.\r
 *\r
 * 각 효과 폴더의 react.jsx가 이 훅을 씁니다.\r
 * mount/destroy 계약이 이미 있으므로 어댑터는 이 파일 하나면 끝입니다.\r
 */\r
\r
import { useEffect, useLayoutEffect, useRef } from 'react';\r
\r
// SSR(Next.js 등)에서 useLayoutEffect 경고를 피합니다.\r
const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;\r
\r
/**\r
 * 효과를 ref 요소에 붙입니다.\r
 *\r
 *   const ref = useFx(mountTilt, { maxTilt: 14 });\r
 *   return <div ref={ref} className="card">…</div>;\r
 *\r
 * 주의점 두 가지가 이미 처리되어 있습니다:\r
 *  1. React 18 StrictMode는 개발 모드에서 effect를 두 번 실행합니다.\r
 *     defineEffect가 중복 마운트를 막고, cleanup에서 destroy를 부르므로 안전합니다.\r
 *  2. options 객체는 매 렌더마다 새로 만들어집니다. 그걸 deps에 넣으면\r
 *     매 렌더마다 재마운트됩니다. 그래서 ref에 담아두고 deps에서 뺍니다.\r
 *     값을 실제로 바꾸고 싶을 때는 deps에 원시값을 명시하세요.\r
 *\r
 * @param {Function} mount  효과의 mount 함수\r
 * @param {object}   options\r
 * @param {any[]}    deps   이 값들이 바뀌면 옵션을 반영해 갱신합니다\r
 * @returns {React.RefObject}\r
 */\r
export function useFx(mount, options, deps = []) {\r
  const ref = useRef(null);\r
  const handleRef = useRef(null);\r
  const optionsRef = useRef(options);\r
  optionsRef.current = options;\r
\r
  useIsoLayoutEffect(() => {\r
    const node = ref.current;\r
    if (!node) return undefined;\r
    const handle = mount(node, optionsRef.current);\r
    handleRef.current = handle;\r
    return () => {\r
      handle.destroy();\r
      handleRef.current = null;\r
    };\r
    // eslint-disable-next-line react-hooks/exhaustive-deps\r
  }, []);\r
\r
  // deps가 바뀌면 재마운트 없이 옵션만 갱신합니다.\r
  useEffect(() => {\r
    handleRef.current?.update(optionsRef.current);\r
    // eslint-disable-next-line react-hooks/exhaustive-deps\r
  }, deps);\r
\r
  return ref;\r
}\r
\r
/**\r
 * 외부에서 전달된 ref와 효과를 함께 쓰고 싶을 때.\r
 * (forwardRef 컴포넌트에서 사용)\r
 */\r
export function useFxOn(externalRef, mount, options, deps = []) {\r
  const optionsRef = useRef(options);\r
  optionsRef.current = options;\r
  const handleRef = useRef(null);\r
\r
  useIsoLayoutEffect(() => {\r
    const node = externalRef?.current;\r
    if (!node) return undefined;\r
    const handle = mount(node, optionsRef.current);\r
    handleRef.current = handle;\r
    return () => {\r
      handle.destroy();\r
      handleRef.current = null;\r
    };\r
    // eslint-disable-next-line react-hooks/exhaustive-deps\r
  }, []);\r
\r
  useEffect(() => {\r
    handleRef.current?.update(optionsRef.current);\r
    // eslint-disable-next-line react-hooks/exhaustive-deps\r
  }, deps);\r
\r
  return handleRef;\r
}\r
\r
/** 여러 ref를 하나의 DOM 노드에 연결합니다(forwardRef + 내부 ref 병합). */\r
export function mergeRefs(...refs) {\r
  return (node) => {\r
    for (const ref of refs) {\r
      if (!ref) continue;\r
      if (typeof ref === 'function') ref(node);\r
      else ref.current = node;\r
    }\r
  };\r
}\r
`,Ty=`# \`character\` — 마우스를 따라 보는 3D 스틱 캐릭터\r
\r
> **티어 T1** · 추가 용량 **0KB**(Canvas 2D) · **WebGL 불필요** · 모든 환경에서 동작\r
\r
흰색 졸라맨이 커서를 쳐다보고, 한쪽 팔로 커서를 가리키고, 클릭하면 인사합니다.\r
숨 쉬고, 무게중심을 옮기고, 가끔 눈을 깜빡입니다.\r
\r
**나중에 진짜 캐릭터 모델로 교체할 것을 전제로 만든 자리표시자(placeholder)입니다.**\r
교체 방법은 [10번](#10-나중에-진짜-모델로-바꾸기)에 있습니다.\r
\r
---\r
\r
## 1. 붙이기 — 바닐라\r
\r
\`\`\`html\r
<link rel="stylesheet" href="./effects/_core/core.css" />\r
<link rel="stylesheet" href="./effects/character/style.css" />\r
\r
<!-- .fx-char 는 필수 (색·배경·비율이 여기 들어 있습니다) -->\r
<div class="mascot fx-char fx-char--interactive" tabindex="0"\r
     role="img" aria-label="마우스를 따라 움직이는 캐릭터"></div>\r
\r
<script type="module">\r
  import { mount } from './effects/character/index.js';\r
  mount('.mascot');\r
<\/script>\r
\`\`\`\r
\r
## 2. 붙이기 — React\r
\r
\`\`\`jsx\r
import { Character } from './effects/character/react.jsx';\r
\r
<Character label="마우스를 따라 움직이는 캐릭터" />\r
\`\`\`\r
\r
외부에서 인사시키기:\r
\r
\`\`\`jsx\r
const charRef = useRef();\r
\r
<Character apiRef={charRef} />\r
<button onClick={() => charRef.current.wave()}>인사시키기</button>\r
\`\`\`\r
\r
---\r
\r
## 3. 진짜 3D입니다\r
\r
2D 그림을 좌우로 미는 게 아닙니다.\r
\r
- 관절 **16개**를 3차원 좌표에 두고\r
- 정기구학(FK)으로 부모→자식 변환을 누적해 자세를 만들고\r
- 원근 투영으로 화면에 그립니다\r
\r
그래서 이런 것들이 **자동으로** 따라옵니다.\r
\r
| 현상 | 이유 |\r
|---|---|\r
| 고개를 돌리면 눈이 얼굴 뒤로 넘어가 사라짐 | 눈이 머리 로컬 좌표에 붙어 함께 회전 |\r
| 앞으로 뻗은 팔이 굵어짐 | 선 굵기에 원근 배율을 곱함 |\r
| 팔이 몸통 앞뒤를 정확히 가림 | 매 프레임 Z 기준 깊이 정렬 |\r
| 발이 바닥에 붙어 있음 | 투영 기준점이 발바닥 |\r
\r
### 검증된 것\r
\r
| 항목 | 결과 |\r
|---|---|\r
| 발바닥 y = 0 | 정확히 0 |\r
| 실측 키 vs 리그 | 1.15 = 1.15 |\r
| 정면 정지 시 좌우 대칭 | 손 x = ±0.22, y 동일 |\r
| 좌/우/상/하 시선 방향 | 전부 올바름 |\r
| 가리키는 팔 4방향 | 전부 올바름, 항상 +Z(앞)로 |\r
| 인사 중 가리키는 팔 유지 | x 0.563 → 0.562 |\r
\r
---\r
\r
## 4. 파일 구조 — 어디를 고쳐야 하나\r
\r
\`\`\`\r
character/\r
├─ rig.js        ★ 체형 — 관절 위치, 뼈 굵기, 비율   ← 몸매를 바꾸려면 여기\r
├─ skeleton.js     수학 — 행렬, FK, 투영             ← 건드릴 일 없음\r
├─ index.js        동작 — 시선, 아이들, 포인팅, 인사  ← 움직임을 바꾸려면 여기\r
├─ style.css       컨테이너·색·배치\r
└─ react.jsx       React 래퍼\r
\`\`\`\r
\r
---\r
\r
## 5. 동작 레이어\r
\r
아래에서 위로 덮어씁니다.\r
\r
| 순서 | 레이어 | 내용 |\r
|---|---|---|\r
| 1 | \`REST_POSE\` | 가만히 서 있는 기본 자세 |\r
| 2 | **look-at** | 골반 → 가슴 → 목 → 머리 순으로 조금씩 더 크게 회전 |\r
| 3 | **idle** | 호흡, 무게중심 이동, 팔 흔들림, 무릎 굽힘 |\r
| 4 | **pointArm** | 한쪽 팔로 커서를 가리킴 |\r
| 5 | **wave** | 인사 (반대쪽 팔, 일시적) |\r
\r
### 왜 시선을 4개 관절로 쪼갰나\r
\r
머리만 돌리면 **목이 부러진 것처럼** 보입니다.\r
사람은 시선을 옮길 때 골반·몸통·목·머리가 순서대로 조금씩 따라옵니다.\r
\r
\`\`\`\r
골반 0.13  →  가슴 0.32  →  목 0.22  →  머리 0.50   (라디안, 시선 최대일 때)\r
\`\`\`\r
\r
이 비율이 **"살아 있는 것 같다"는 인상의 대부분**을 만듭니다.\r
\`bodyFollow: 0\`으로 두면 머리만 돌아가는데, 직접 비교해보면 차이가 확 느껴집니다.\r
\r
---\r
\r
## 6. 옵션\r
\r
### 모양\r
\r
| 옵션 | 기본값 | 설명 |\r
|---|---|---|\r
| \`color\` | \`null\` | \`null\`이면 CSS 변수 \`--fx-char-color\` → 요소의 \`color\` 순으로 읽습니다 |\r
| \`eyeColor\` | \`'rgba(24,26,33,.88)'\` | 눈 색 |\r
| \`eyes\` | \`true\` | 눈 표시 |\r
| \`shadow\` | \`true\` | 바닥 그림자. **끄면 캐릭터가 공중에 떠 보입니다** |\r
| \`thickness\` | \`0.045\` | 몸통 굵기(키 대비 비율). 0.03=가늘게, 0.07=두껍게 |\r
| \`height\` | \`0.78\` | 컨테이너 높이 대비 캐릭터 키 |\r
| \`alignX\` | \`0.5\` | 가로 위치(0=왼쪽, 1=오른쪽) |\r
| \`baseline\` | \`0.94\` | 발이 닿는 세로 위치 |\r
| \`eye\` | \`3.0\` | 카메라 거리. **작을수록 원근 왜곡이 큽니다.** 2.2~4 권장 |\r
\r
### 시선\r
\r
| 옵션 | 기본값 | 설명 |\r
|---|---|---|\r
| \`follow\` | \`'window'\` | \`'window'\` 화면 어디든 / \`'self'\` 이 요소 위에서만 / \`'none'\` 고정 |\r
| \`lookStrength\` | \`1\` | 시선 반응 크기 |\r
| \`bodyFollow\` | \`1\` | 몸통이 따라가는 비율. **\`0\`이면 머리만 돌아갑니다** |\r
| \`lean\` | \`0.05\` | 커서 쪽으로 몸이 기우는 거리 |\r
| \`turnSpeed\` | \`7\` | 따라오는 속도. 4=느긋함, 7=기본, 14=즉각적 |\r
| \`range\` | \`0.42\` | 시선이 최대가 되는 거리(화면 크기 대비). **작을수록 예민** |\r
\r
### 아이들 / 포인팅 / 인사\r
\r
| 옵션 | 기본값 | 설명 |\r
|---|---|---|\r
| \`idle\` | \`true\` | 호흡·흔들림 |\r
| \`breathe\` | \`0.028\` | 호흡 크기 |\r
| \`sway\` | \`1\` | 흔들림 배율 |\r
| \`blink\` | \`true\` | 눈 깜빡임 |\r
| \`pointArm\` | \`'R'\` | 커서를 가리킬 팔. \`'R'\` \\| \`'L'\` \\| \`'none'\` |\r
| \`waveArm\` | \`'L'\` | 인사할 팔. **\`pointArm\`과 다르게 두세요** |\r
| \`waveOnLoad\` | \`true\` | 처음 등장하고 0.7초 뒤 인사 |\r
| \`waveOnClick\` | \`true\` | 클릭/Enter로 인사 |\r
| \`waveDuration\` | \`1.9\` | 인사 길이(초) |\r
| \`waveCycles\` | \`3\` | 손 흔드는 횟수 |\r
\r
> **\`R\`/\`L\`은 보는 사람 기준입니다.** 캐릭터가 정면을 보고 있으므로\r
> 캐릭터 본인의 왼손은 화면 오른쪽(\`R\`)에 있습니다. 헷갈리지 않게 화면 기준으로 통일했습니다.\r
\r
---\r
\r
## 7. 배치 레시피\r
\r
### 히어로 옆에\r
\r
\`\`\`html\r
<div class="fx-char-hero">\r
  <div class="fx-char-hero__text">\r
    <h1>프론트엔드 개발자 김하늘</h1>\r
    <p>사용자가 머무는 화면을 만듭니다.</p>\r
  </div>\r
  <div class="mascot fx-char"></div>\r
</div>\r
\`\`\`\r
\r
### 화면 구석 마스코트 (페이지 전체를 따라봄)\r
\r
\`\`\`html\r
<div class="mascot fx-char fx-char--fixed fx-char--bare"></div>\r
\`\`\`\r
\r
\`\`\`js\r
mount('.mascot', { height: 0.9, thickness: 0.055, shadow: false });\r
\`\`\`\r
\r
\`--fixed\`는 포인터 이벤트를 통과시키므로 **뒤의 콘텐츠 클릭을 막지 않습니다.**\r
좁은 화면(640px 이하)에서는 자동으로 숨겨집니다.\r
\r
### 밝은 배경에 얹기\r
\r
\`\`\`html\r
<div class="mascot fx-char fx-char--light"></div>   <!-- 검은 선 -->\r
<div class="mascot fx-char fx-char--bare"></div>    <!-- 배경 없이 currentColor -->\r
\`\`\`\r
\r
### 조합 예시\r
\r
\`\`\`js\r
// 조용한 관찰자 — 가리키지도, 인사하지도 않고 시선만\r
mount('.mascot', { pointArm: 'none', waveOnLoad: false, waveOnClick: false, sway: 0.4 });\r
\r
// 과장된 만화 느낌 — 카메라를 당겨 왜곡을 키움\r
mount('.mascot', { eye: 2.0, thickness: 0.075, lean: 0.1, lookStrength: 1.3 });\r
\r
// 목만 움직이는 정적인 캐릭터\r
mount('.mascot', { bodyFollow: 0, idle: false, lean: 0 });\r
\r
// 예민하게 반응 — 조금만 움직여도 크게 따라봄\r
mount('.mascot', { range: 0.22, turnSpeed: 12 });\r
\`\`\`\r
\r
---\r
\r
## 8. 외부 제어\r
\r
\`\`\`js\r
const h = mount('.mascot');\r
\r
h.api.wave();              // 인사시키기\r
h.api.lookAt(0.5, -0.3);   // 시선 직접 지정 (-1~1). 커서와 무관하게 제어\r
h.api.refresh();           // 테마 토글 후 색 다시 읽기\r
h.api.animated;            // 동작 줄이기 여부\r
h.api.rig;                 // 리그 정의\r
h.api.buffers;             // 관절 월드 좌표 (buffers.world.head.p 등)\r
\`\`\`\r
\r
### 외부 타임라인에서 직접 구동\r
\r
\`\`\`js\r
const h = mount('.mascot', { idle: false });\r
gsap.ticker.add((t, dt) => h.api.step(dt / 1000));\r
\`\`\`\r
\r
\`step(dt)\`는 애니메이션 한 프레임을 직접 돌립니다.\r
스크롤 진행도에 캐릭터를 묶거나, 테스트에서 시간을 감을 때 유용합니다.\r
\r
\`\`\`js\r
document.addEventListener('fx:character:wave', () => console.log('인사!'));\r
document.addEventListener('fx:character:ready', (e) => console.log(e.detail.joints, '관절'));\r
\`\`\`\r
\r
---\r
\r
## 9. 체형 바꾸기 — \`rig.js\`\r
\r
숫자는 전부 **비율**입니다. 픽셀이 아니라서 어떤 크기로 그려도 유지됩니다.\r
\r
\`\`\`js\r
// 다리를 길게 (모델 체형)\r
kneeR: { parent: 'hipR', offset: [0, -0.32, 0] },\r
footR: { parent: 'kneeR', offset: [0, -0.31, 0] },\r
\r
// 머리를 크게 (SD 캐릭터)\r
headRadius: 0.16,\r
head: { parent: 'neck', offset: [0, 0.18, 0] },\r
\r
// 어깨를 넓게\r
shoulderR: { parent: 'chest', offset: [0.21, 0.06, 0] },\r
\`\`\`\r
\r
> **키를 따로 적을 필요가 없습니다.** 관절 오프셋을 실제로 풀어서 발바닥과 머리 꼭대기를\r
> 자동으로 잽니다. 다리를 길게 만들면 화면 배치가 알아서 맞습니다.\r
\r
\`BONES\`의 굵기 배율을 바꾸면 인상이 크게 달라집니다.\r
몸통을 \`1.4\`로 올리면 듬직해지고, \`0.7\`로 낮추면 가늘고 날렵해집니다.\r
\r
### 관절 추가하기\r
\r
1. \`JOINTS\`에 \`{ parent, offset }\` 추가\r
2. \`ORDER\`에 추가 — **부모보다 반드시 뒤에**\r
3. \`BONES\`에 연결선 추가\r
\r
꼬리, 귀, 모자 같은 걸 붙일 수 있습니다. \`ORDER\`에 안 넣으면 조용히 무시됩니다.\r
\r
---\r
\r
## 10. 나중에 진짜 모델로 바꾸기\r
\r
이 캐릭터는 **자리표시자**입니다. 실제 3D 캐릭터가 준비되면:\r
\r
\`\`\`js\r
// 전: 스틱 캐릭터\r
import { mount } from './effects/character/index.js';\r
mount('.mascot');\r
\r
// 후: GLB 모델\r
import { mount } from './effects/model-showcase/index.js';\r
mount('.mascot', { src: './models/my-character.glb', autoRotate: false });\r
\`\`\`\r
\r
컨테이너 마크업은 그대로 두고 **import 한 줄만 바꾸면 됩니다.**\r
자세한 내용은 [\`model-showcase\`](../model-showcase/README.md).\r
\r
> 다만 \`model-showcase\`는 마우스 추적이 아니라 **드래그 회전**입니다.\r
> 모델이 커서를 쳐다보게 하려면 GLB에 본이 있어야 하고 three.js로 직접 제어해야 합니다.\r
> **그 전까지는 이 스틱 캐릭터가 훨씬 나은 선택입니다** — 0KB에 실제로 반응합니다.\r
\r
---\r
\r
## 11. 접근성\r
\r
| 처리 | 내용 |\r
|---|---|\r
| **동작 줄이기** | 캐릭터가 **사라지지 않습니다.** 정지 자세 한 장으로 바뀌고 시선·인사·호흡만 멈춥니다 |\r
| 실행 중 전환 | OS 설정을 켜고 끄면 새로고침 없이 즉시 반영 |\r
| 캔버스 | \`aria-hidden\` — 의미는 컨테이너의 \`role="img"\` + \`aria-label\`이 담당 |\r
| 키보드 | \`fx-char--interactive\` + \`tabIndex\`면 Enter/Space로 인사 |\r
| 클릭 방해 없음 | 캔버스는 \`pointer-events: none\` |\r
\r
**동작 줄이기에서 캐릭터를 지우지 않는 이유:** 이 캐릭터는 장식이 아니라 콘텐츠입니다.\r
없어지면 페이지에 빈 칸이 남습니다. 그래서 **움직임만** 제거합니다.\r
\r
---\r
\r
## 12. 성능\r
\r
| 처리 | 내용 |\r
|---|---|\r
| **프레임당 메모리 할당 0** | 행렬·벡터·그릴 목록을 전부 미리 만들어 재사용 |\r
| 화면 밖 → 완전 정지 | \`rAF\` 취소 |\r
| 저사양 기기 30fps 자동 | |\r
| draw call | 뼈 13 + 머리 + 손 2 + 눈 2 ≈ **18회/프레임** |\r
\r
관절 16개 FK는 프레임당 행렬 곱 15번입니다. 사실상 공짜입니다.\r
\r
> **캐릭터를 여러 개 두지는 마세요.** 성능 때문이 아니라, 화면에 졸라맨이 4마리 있으면\r
> 정신없어서 아무도 포트폴리오를 안 봅니다. 1개, 많아야 2개입니다.\r
\r
---\r
\r
## 13. 자주 겪는 문제\r
\r
**Q. 아무것도 안 보입니다.**\r
→ ① 컨테이너에 \`.fx-char\`를 붙였는지 (색 변수가 여기 있습니다).\r
→ ② 컨테이너 높이가 0은 아닌지 — 캔버스는 \`absolute\`라 높이를 만들지 못합니다.\r
→ ③ **흰색 캐릭터를 흰 배경에 그리고 있지 않은지.** \`.fx-char--light\`를 쓰거나 \`color\`를 지정하세요.\r
\r
**Q. 캐릭터가 잘립니다.**\r
→ \`height\`를 낮추거나(\`0.7\`) 컨테이너 \`aspect-ratio\`를 세로로 길게 잡으세요.\r
인사할 때 팔이 머리 위로 올라가므로 위쪽 여유가 필요합니다.\r
\r
**Q. 커서를 안 쳐다봅니다.**\r
→ \`follow: 'self'\`면 컨테이너 위에 커서가 있을 때만 반응합니다. \`'window'\`로 바꾸세요.\r
→ 터치 기기에는 \`pointermove\`가 hover처럼 오지 않습니다. 아이들 모션만 동작합니다.\r
\r
**Q. 반응이 너무 둔합니다 / 예민합니다.**\r
→ \`range\`를 조절하세요. 작을수록 예민합니다(\`0.42\` → \`0.22\`).\r
→ \`turnSpeed\`는 "따라오는 속도"고, \`range\`는 "얼마나 멀리까지 반응하는가"입니다. 다른 값입니다.\r
\r
**Q. 팔이 이상한 방향으로 꺾입니다.**\r
→ \`rig.js\`에서 팔 오프셋의 부호를 바꿨을 가능성이 큽니다. 팔은 기본이 **아래(-Y)** 방향이어야 하고,\r
조준 계산이 그걸 전제로 합니다.\r
\r
**Q. 다크모드로 바꿨는데 색이 그대로입니다.**\r
→ \`prefers-color-scheme\` 변경은 자동 감지합니다. **직접 만든 테마 토글**(\`data-theme\`)은\r
감지 대상이 아니니 토글 후 \`h.api.refresh()\`를 호출하세요.\r
\r
**Q. 원근 왜곡이 너무 심합니다.**\r
→ \`eye\` 값을 키우세요(\`3.0\` → \`4.5\`). 무한대에 가까울수록 직교 투영이 됩니다.\r
`,zy=`/**\r
 * character — 마우스를 따라 보는 3D 스틱 캐릭터\r
 * ───────────────────────────────────────────────────────────\r
 * 티어 T1 · 추가 용량 0KB(Canvas 2D) · WebGL 불필요 · 모든 환경에서 동작\r
 *\r
 * 진짜 3D입니다. 2D 그림을 좌우로 미는 게 아니라\r
 * 16개 관절을 3차원 좌표로 두고 정기구학(FK)으로 자세를 계산한 뒤\r
 * 원근 투영으로 화면에 그립니다. 고개를 돌리면 눈이 얼굴 뒤로 넘어가고,\r
 * 앞으로 뻗은 팔은 원근 때문에 실제로 굵어집니다.\r
 *\r
 * 세 파일로 나뉘어 있습니다:\r
 *   rig.js       체형 — 관절 위치, 뼈 굵기, 비율   ← 바꾸고 싶으면 여기\r
 *   skeleton.js  수학 — 행렬, FK, 투영             ← 건드릴 일 없음\r
 *   index.js     동작 — 시선, 아이들, 포인팅, 인사  ← 이 파일\r
 *\r
 * 동작 레이어(아래에서 위로 덮어씀):\r
 *   1. REST_POSE          가만히 서 있는 기본 자세\r
 *   2. look-at            골반→가슴→목→머리 순으로 조금씩 더 크게 돌림\r
 *   3. idle               호흡, 무게중심 이동, 팔 흔들림\r
 *   4. pointArm           한쪽 팔로 커서를 가리킴\r
 *   5. wave               인사 (다른 쪽 팔, 일시적으로 우선)\r
 *\r
 * 시선을 한 관절에 몰지 않고 4개로 쪼갠 이유:\r
 *   머리만 돌리면 목이 부러진 것처럼 보입니다. 사람은 시선을 옮길 때\r
 *   골반·몸통·목·머리가 순서대로 조금씩 따라옵니다. 그 비율을 흉내 낸 것이\r
 *   "살아 있는 것 같다"는 인상의 대부분을 만듭니다.\r
 */\r
\r
import {\r
  defineEffect,\r
  createVisibleLoop,\r
  observeResize,\r
  onReducedMotionChange,\r
  prefersReducedMotion,\r
  clamp,\r
  damp,\r
  dprCap,\r
  fpsCap,\r
} from '../_core/index.js';\r
\r
import RIG from './rig.js';\r
import { createPoseBuffers, solve, projectInto } from './skeleton.js';\r
\r
const { proportions: PROPS, bones: BONES } = RIG;\r
\r
/** 팔이 쉬고 있을 때의 방향(리그의 어깨 rz를 그대로 반영) */\r
function restArmDir(side) {\r
  const rz = RIG.rest[\`shoulder\${side}\`]?.[2] ?? 0;\r
  return [Math.sin(rz), -Math.cos(rz), 0];\r
}\r
\r
/** 방향 벡터 두 개를 섞습니다(정규화는 aimInto가 알아서 합니다). */\r
function blendDir(out, a, b, t) {\r
  out[0] = a[0] + (b[0] - a[0]) * t;\r
  out[1] = a[1] + (b[1] - a[1]) * t;\r
  out[2] = a[2] + (b[2] - a[2]) * t;\r
  return out;\r
}\r
\r
export const mount = defineEffect({\r
  name: 'character',\r
\r
  defaults: {\r
    /* ── 모양 ─────────────────────────────────────────────── */\r
    /** 선 색. null이면 CSS 변수 --fx-char-color → 요소의 color 순으로 읽습니다 */\r
    color: null,\r
    /** 눈 색 */\r
    eyeColor: 'rgba(24, 26, 33, 0.88)',\r
    /** 눈 표시 */\r
    eyes: true,\r
    /** 바닥 그림자 */\r
    shadow: true,\r
    /** 몸통 굵기(키 대비 비율). 0.03=가늘게, 0.06=두껍게 */\r
    thickness: 0.045,\r
    /** 컨테이너 높이 대비 캐릭터 키(0~1) */\r
    height: 0.78,\r
    /** 가로 위치(0=왼쪽, 0.5=가운데, 1=오른쪽) */\r
    alignX: 0.5,\r
    /** 발이 닿는 세로 위치(0~1) */\r
    baseline: 0.94,\r
    /** 카메라 거리(리그 단위). 작을수록 원근 왜곡이 큽니다. 2.2~4 권장 */\r
    eye: 3.0,\r
\r
    /* ── 시선 ─────────────────────────────────────────────── */\r
    /** 'window' = 화면 어디든 따라봄 / 'self' = 이 요소 위에서만 / 'none' = 고정 */\r
    follow: 'window',\r
    /** 시선 반응 크기 배율 */\r
    lookStrength: 1,\r
    /** 몸통이 시선을 따라가는 비율. 0이면 머리만 돌아갑니다 */\r
    bodyFollow: 1,\r
    /** 커서 쪽으로 몸 전체가 기우는 거리(리그 단위) */\r
    lean: 0.05,\r
    /** 시선이 따라오는 속도(감쇠 계수). 4=느긋함, 7=기본, 14=즉각적 */\r
    turnSpeed: 7,\r
    /** 시선이 최대가 되는 거리 배율(화면 크기 대비). 작을수록 예민해집니다 */\r
    range: 0.42,\r
\r
    /* ── 아이들 모션 ──────────────────────────────────────── */\r
    idle: true,\r
    /** 호흡 크기 */\r
    breathe: 0.028,\r
    /** 몸 흔들림 크기 배율 */\r
    sway: 1,\r
    /** 눈 깜빡임 */\r
    blink: true,\r
\r
    /* ── 포인팅 ───────────────────────────────────────────── */\r
    /** 커서를 가리킬 팔. 'R'(화면 오른쪽) | 'L' | 'none' */\r
    pointArm: 'R',\r
\r
    /* ── 인사 ─────────────────────────────────────────────── */\r
    /** 인사할 팔. pointArm과 다르게 두는 게 자연스럽습니다 */\r
    waveArm: 'L',\r
    /** 처음 화면에 들어왔을 때 인사 */\r
    waveOnLoad: true,\r
    /** 클릭하면 인사 */\r
    waveOnClick: true,\r
    /** 인사 길이(초) */\r
    waveDuration: 1.9,\r
    /** 인사 중 손을 흔드는 횟수 */\r
    waveCycles: 3,\r
\r
    /* ── 성능 ─────────────────────────────────────────────── */\r
    fps: 0,\r
    dpr: 2,\r
  },\r
\r
  guard: {\r
    // 캐릭터 자체는 콘텐츠입니다. 동작 줄이기라고 사라지면 안 됩니다.\r
    // → 가드로 끄지 않고, 아래에서 "정지 자세 1프레임"으로 전환합니다.\r
    motion: 'ignore',\r
    pointer: 'any',\r
  },\r
\r
  setup({ el, opts, on, addCleanup, emit }) {\r
    /* ================================================================\r
     * 1. 캔버스\r
     * ================================================================ */\r
\r
    if (getComputedStyle(el).position === 'static') {\r
      el.style.position = 'relative';\r
      addCleanup(() => { el.style.position = ''; });\r
    }\r
\r
    const canvas = document.createElement('canvas');\r
    canvas.className = 'fx-character__canvas';\r
    canvas.setAttribute('aria-hidden', 'true'); // 장식 — 의미는 마크업이 담당\r
    el.prepend(canvas);\r
    addCleanup(() => canvas.remove());\r
\r
    const ctx = canvas.getContext('2d');\r
    if (!ctx) {\r
      console.warn('[fx:character] Canvas 2D 컨텍스트를 만들 수 없습니다.');\r
      canvas.remove();\r
      return;\r
    }\r
\r
    /* ================================================================\r
     * 2. 버퍼 (프레임당 할당 0을 위해 전부 미리 만듭니다)\r
     * ================================================================ */\r
\r
    const buf = createPoseBuffers(RIG);\r
    const proj = {};\r
    for (const name of RIG.order) proj[name] = { x: 0, y: 0, z: 0, scale: 1 };\r
\r
    // 뼈 + 머리 + 손 2개 → 그릴 목록도 미리 만들어 재사용합니다.\r
    const items = [];\r
    for (const [a, b, w] of BONES) items.push({ kind: 'bone', a, b, w, z: 0 });\r
    items.push({ kind: 'head', z: 0 });\r
    items.push({ kind: 'hand', j: 'handR', z: 0 });\r
    items.push({ kind: 'hand', j: 'handL', z: 0 });\r
\r
    const camera = { cx: 0, cy: 0, unit: 1, eye: opts.eye, pivotY: PROPS.pivotY };\r
\r
    /**\r
     * 리그를 실제로 한 번 풀어서 발바닥 높이와 키를 잽니다.\r
     *\r
     * rig.js에 키를 숫자로 적어두면, 학생이 다리 길이를 바꾸는 순간\r
     * 그 숫자가 거짓말이 되고 캐릭터가 바닥을 뚫거나 공중에 뜹니다.\r
     * (리그 원점은 골반이라 발은 y가 음수입니다)\r
     */\r
    const metrics = (() => {\r
      for (const name of RIG.order) {\r
        const r = buf.pose[name];\r
        const rest = RIG.rest[name];\r
        if (rest) { r[0] = rest[0]; r[1] = rest[1]; r[2] = rest[2]; }\r
        else { r[0] = 0; r[1] = 0; r[2] = 0; }\r
        buf.aims[name] = null;\r
      }\r
      buf.root[0] = 0; buf.root[1] = 0; buf.root[2] = 0;\r
\r
      const world = solve(RIG, buf);\r
      let minY = Infinity;\r
      for (const name of RIG.order) {\r
        if (world[name].p[1] < minY) minY = world[name].p[1];\r
      }\r
      const topY = world.head.p[1] + PROPS.headRadius;\r
      return { footY: minY, height: topY - minY };\r
    })();\r
\r
    /** 발바닥이 y=0에 오도록 몸 전체를 올리는 값 */\r
    const groundY = -metrics.footY;\r
\r
    // 포인팅과 인사가 서로 다른 팔을 쓸 수 있으므로 방향 버퍼를 따로 둡니다.\r
    // (하나를 공유하면 나중에 쓴 쪽이 앞의 팔 방향까지 덮어씁니다)\r
    const _dirPoint = new Float64Array(3);\r
    const _dirWave = new Float64Array(3);\r
    const _dirTmp = new Float64Array(3);\r
    const _eyeLocal = new Float64Array(3);\r
    const _eyeWorld = new Float64Array(3);\r
    const _eyeProj = { x: 0, y: 0, z: 0, scale: 1 };\r
    const _fwd = new Float64Array(3);\r
\r
    const REST_R = restArmDir('R');\r
    const REST_L = restArmDir('L');\r
\r
    /* ================================================================\r
     * 3. 레이아웃\r
     * ================================================================ */\r
\r
    let W = 0, H = 0, dpr = 1, color = '#ffffff';\r
\r
    const resolveColor = () => {\r
      if (opts.color) return opts.color;\r
      const cs = getComputedStyle(el);\r
      const v = cs.getPropertyValue('--fx-char-color').trim();\r
      return v || cs.color || '#ffffff';\r
    };\r
\r
    const layout = () => {\r
      W = el.clientWidth || 1;\r
      H = el.clientHeight || 1;\r
      dpr = Math.min(dprCap(3), opts.dpr);\r
\r
      canvas.width = Math.round(W * dpr);\r
      canvas.height = Math.round(H * dpr);\r
      canvas.style.width = \`\${W}px\`;\r
      canvas.style.height = \`\${H}px\`;\r
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);\r
\r
      camera.unit = (H * opts.height) / metrics.height;\r
      camera.cx = W * opts.alignX;\r
      // y=pivotY 지점이 화면의 baseline 위치에 오도록 역산합니다.\r
      camera.cy = H * opts.baseline - PROPS.pivotY * camera.unit;\r
      camera.eye = opts.eye;\r
\r
      color = resolveColor();\r
    };\r
\r
    const stopResize = observeResize(el, layout);\r
    addCleanup(() => stopResize());\r
    layout();\r
\r
    /* ================================================================\r
     * 4. 포인터\r
     *\r
     * 화면 중앙이 아니라 "캐릭터 머리 위치"를 기준으로 방향을 잽니다.\r
     * 그래야 캐릭터가 구석에 있어도 커서를 제대로 쳐다봅니다.\r
     * ================================================================ */\r
\r
    const look = { x: 0, y: 0, tx: 0, ty: 0 };\r
    // 머리의 화면 좌표는 직전 프레임 값을 씁니다(1프레임 지연은 보이지 않습니다).\r
    let headScreenX = 0, headScreenY = 0;\r
\r
    const updateLook = (clientX, clientY) => {\r
      const rect = el.getBoundingClientRect();\r
      const hx = rect.left + headScreenX;\r
      const hy = rect.top + headScreenY;\r
\r
      const span =\r
        opts.follow === 'self'\r
          ? Math.max(rect.width, rect.height) * opts.range * 2\r
          : Math.max(window.innerWidth, window.innerHeight) * opts.range;\r
\r
      look.tx = clamp((clientX - hx) / span, -1, 1);\r
      look.ty = clamp((clientY - hy) / span, -1, 1);\r
    };\r
\r
    if (opts.follow !== 'none') {\r
      const target = opts.follow === 'self' ? el : window;\r
      on(target, 'pointermove', (e) => {\r
        if (e.pointerType === 'touch') return;\r
        updateLook(e.clientX, e.clientY);\r
      }, { passive: true });\r
\r
      // 커서가 창을 벗어나면 정면을 봅니다.\r
      on(document, 'pointerleave', () => { look.tx = 0; look.ty = 0; });\r
\r
      if (opts.follow === 'self') {\r
        on(el, 'pointerleave', () => { look.tx = 0; look.ty = 0; });\r
      }\r
    }\r
\r
    /* ================================================================\r
     * 5. 인사 / 깜빡임 상태\r
     * ================================================================ */\r
\r
    let waveT = -1;                       // -1 = 인사 안 하는 중\r
    let blinkTimer = 1.5 + Math.random() * 3;\r
    let blinkLeft = 0;\r
\r
    const startWave = () => {\r
      if (!animated) return;\r
      waveT = 0;\r
      emit('wave');\r
    };\r
\r
    if (opts.waveOnClick) {\r
      on(el, 'click', startWave);\r
      // 키보드로도 가능하게 — 컨테이너가 포커스 가능한 경우\r
      on(el, 'keydown', (e) => {\r
        if (e.key === 'Enter' || e.key === ' ') startWave();\r
      });\r
    }\r
\r
    /** 인사 강도 곡선: 빠르게 올라가고 유지하다 천천히 내려옵니다. */\r
    const waveEnvelope = (p) => {\r
      if (p < 0.18) return p / 0.18;\r
      if (p > 0.72) return 1 - (p - 0.72) / 0.28;\r
      return 1;\r
    };\r
\r
    /* ================================================================\r
     * 6. 자세 계산\r
     * ================================================================ */\r
\r
    const P = buf.pose;\r
    const add = (name, rx, ry, rz) => {\r
      const r = P[name];\r
      r[0] += rx; r[1] += ry; r[2] += rz;\r
    };\r
\r
    const resetPose = () => {\r
      for (const name of RIG.order) {\r
        const r = P[name];\r
        const rest = RIG.rest[name];\r
        if (rest) { r[0] = rest[0]; r[1] = rest[1]; r[2] = rest[2]; }\r
        else { r[0] = 0; r[1] = 0; r[2] = 0; }\r
        buf.aims[name] = null;\r
      }\r
      // 발바닥이 y=0에 서도록 기본 높이를 깔아둡니다.\r
      buf.root[0] = 0; buf.root[1] = groundY; buf.root[2] = 0;\r
    };\r
\r
    let eyeOpen = 1;\r
\r
    const applyPose = (t, dt) => {\r
      resetPose();\r
\r
      const lx = look.x * opts.lookStrength;\r
      const ly = look.y * opts.lookStrength;\r
      const bf = opts.bodyFollow;\r
\r
      /* ── 시선: 골반 → 가슴 → 목 → 머리 순으로 점점 크게 ── */\r
      add('hip',   0,            lx * 0.13 * bf, -lx * 0.04 * bf);\r
      add('chest', ly * 0.12 * bf, lx * 0.32 * bf, -lx * 0.03 * bf);\r
      add('neck',  ly * 0.14 * bf, lx * 0.22 * bf, 0);\r
      add('head',  ly * 0.40,      lx * 0.50,      lx * 0.06);\r
\r
      buf.root[0] = lx * opts.lean;\r
      buf.root[2] = -Math.abs(lx) * opts.lean * 0.3; // 옆을 볼수록 살짝 뒤로\r
\r
      /* ── 아이들 ── */\r
      if (opts.idle && animated) {\r
        const breath = Math.sin(t * 1.55);\r
        add('chest', -breath * opts.breathe, 0, 0);\r
        add('neck', breath * opts.breathe * 0.4, 0, 0);\r
        buf.root[1] += breath * 0.006;\r
\r
        const s = Math.sin(t * 0.62) * opts.sway;\r
        add('hip', 0, s * 0.03, s * 0.022);\r
        add('head', Math.sin(t * 0.43) * 0.018, Math.sin(t * 0.31) * 0.03, 0);\r
\r
        const armSwing = Math.sin(t * 0.9) * 0.045 * opts.sway;\r
        add('shoulderR', 0, 0, armSwing);\r
        add('shoulderL', 0, 0, -Math.sin(t * 0.9 + 0.7) * 0.045 * opts.sway);\r
\r
        // 무게중심 이동에 맞춰 무릎이 번갈아 조금씩 굽습니다.\r
        add('kneeR', -Math.max(0, s) * 0.05, 0, 0);\r
        add('kneeL', -Math.max(0, -s) * 0.05, 0, 0);\r
      }\r
\r
      /* ── 포인팅 팔 ── */\r
      const pointSide = opts.pointArm === 'R' || opts.pointArm === 'L' ? opts.pointArm : null;\r
      if (pointSide && opts.follow !== 'none') {\r
        const rest = pointSide === 'R' ? REST_R : REST_L;\r
        // 커서 방향(월드): 화면 y는 아래가 +이므로 뒤집습니다.\r
        _dirTmp[0] = lx * 1.5 + (pointSide === 'R' ? 0.28 : -0.28);\r
        _dirTmp[1] = -ly * 1.05 - 0.28;\r
        _dirTmp[2] = 0.8;\r
\r
        // 커서가 정중앙이면 가리킬 대상이 애매하므로 살짝만 듭니다.\r
        const amount = clamp(Math.hypot(lx, ly) * 1.6, 0.15, 1);\r
        blendDir(_dirPoint, rest, _dirTmp, amount);\r
        buf.aims[\`shoulder\${pointSide}\`] = _dirPoint;\r
\r
        // 가리킬 때는 팔꿈치를 펴야 "가리킨다"로 읽힙니다.\r
        const e = P[\`elbow\${pointSide}\`];\r
        e[0] = e[0] * (1 - amount) + -0.04 * amount;\r
        e[2] = e[2] * (1 - amount);\r
      }\r
\r
      /* ── 인사 (포인팅보다 우선) ── */\r
      if (waveT >= 0) {\r
        waveT += dt / opts.waveDuration;\r
        if (waveT >= 1) {\r
          waveT = -1;\r
        } else {\r
          const env = waveEnvelope(waveT);\r
          const side = opts.waveArm === 'R' ? 'R' : 'L';\r
          const rest = side === 'R' ? REST_R : REST_L;\r
          const sign = side === 'R' ? 1 : -1;\r
\r
          _dirTmp[0] = sign * 0.66;\r
          _dirTmp[1] = 0.74;\r
          _dirTmp[2] = 0.3;\r
          blendDir(_dirWave, rest, _dirTmp, env);\r
          buf.aims[\`shoulder\${side}\`] = _dirWave;\r
\r
          const wob = Math.sin(waveT * Math.PI * 2 * opts.waveCycles) * 0.42 * env;\r
          const e = P[\`elbow\${side}\`];\r
          e[0] = -0.12;\r
          e[2] = sign * 0.3 * env + wob;\r
\r
          // 인사할 때 고개를 살짝 갸웃 — 이거 하나로 훨씬 친근해집니다.\r
          add('head', 0, 0, sign * 0.1 * env);\r
        }\r
      }\r
\r
      /* ── 깜빡임 ── */\r
      if (opts.blink && opts.eyes && animated) {\r
        blinkTimer -= dt;\r
        if (blinkTimer <= 0 && blinkLeft <= 0) {\r
          blinkLeft = 0.14;\r
          blinkTimer = 2.2 + Math.random() * 4.5;\r
        }\r
        if (blinkLeft > 0) {\r
          blinkLeft -= dt;\r
          const p = 1 - Math.max(blinkLeft, 0) / 0.14;\r
          eyeOpen = Math.abs(Math.cos(p * Math.PI));\r
        } else {\r
          eyeOpen = 1;\r
        }\r
      } else {\r
        eyeOpen = 1;\r
      }\r
    };\r
\r
    /* ================================================================\r
     * 7. 렌더\r
     * ================================================================ */\r
\r
    const drawEye = (world, sideSign) => {\r
      const head = world.head;\r
      const eo = PROPS.eye.offset;\r
      _eyeLocal[0] = eo[0] * sideSign;\r
      _eyeLocal[1] = eo[1];\r
      _eyeLocal[2] = eo[2];\r
\r
      // 머리 회전을 적용해 월드 좌표로\r
      const m = head.m;\r
      _eyeWorld[0] = head.p[0] + m[0] * _eyeLocal[0] + m[1] * _eyeLocal[1] + m[2] * _eyeLocal[2];\r
      _eyeWorld[1] = head.p[1] + m[3] * _eyeLocal[0] + m[4] * _eyeLocal[1] + m[5] * _eyeLocal[2];\r
      _eyeWorld[2] = head.p[2] + m[6] * _eyeLocal[0] + m[7] * _eyeLocal[1] + m[8] * _eyeLocal[2];\r
\r
      // 머리 뒤로 넘어간 눈은 그리지 않습니다.\r
      if (_eyeWorld[2] <= head.p[2] + 0.005) return;\r
\r
      projectInto(_eyeProj, camera, _eyeWorld);\r
\r
      // 옆을 볼수록 부드럽게 사라지게\r
      const facing = clamp((_eyeWorld[2] - head.p[2]) / (PROPS.eye.offset[2] * 0.8), 0, 1);\r
      const r = PROPS.eye.radius * camera.unit * _eyeProj.scale;\r
      const ry = r * eyeOpen;\r
      if (ry < 0.2) return;\r
\r
      ctx.globalAlpha = facing;\r
      ctx.beginPath();\r
      ctx.ellipse(_eyeProj.x, _eyeProj.y, r, ry, 0, 0, Math.PI * 2);\r
      ctx.fill();\r
      ctx.globalAlpha = 1;\r
    };\r
\r
    const render = () => {\r
      const world = solve(RIG, buf);\r
\r
      for (const name of RIG.order) projectInto(proj[name], camera, world[name].p);\r
\r
      headScreenX = proj.head.x;\r
      headScreenY = proj.head.y;\r
\r
      ctx.clearRect(0, 0, W, H);\r
      ctx.lineCap = 'round';\r
      ctx.lineJoin = 'round';\r
\r
      /* 바닥 그림자 — 항상 맨 뒤 */\r
      if (opts.shadow) {\r
        const sh = PROPS.shadow;\r
        const gx = camera.cx + buf.root[0] * camera.unit;\r
        // 그림자는 발이 닿는 바닥선(y=0)에 그립니다.\r
        const gy = camera.cy + PROPS.pivotY * camera.unit;\r
        ctx.globalAlpha = sh.alpha;\r
        ctx.fillStyle = color;\r
        ctx.beginPath();\r
        ctx.ellipse(gx, gy, sh.radiusX * camera.unit, sh.radiusY * camera.unit, 0, 0, Math.PI * 2);\r
        ctx.fill();\r
        ctx.globalAlpha = 1;\r
      }\r
\r
      /* 깊이 정렬 — 뒤쪽부터 그려야 팔이 몸통을 가로지를 때 자연스럽습니다 */\r
      for (const item of items) {\r
        if (item.kind === 'bone') item.z = (proj[item.a].z + proj[item.b].z) * 0.5;\r
        else if (item.kind === 'head') item.z = proj.head.z;\r
        else item.z = proj[item.j].z;\r
      }\r
      items.sort((a, b) => a.z - b.z);\r
\r
      ctx.strokeStyle = color;\r
      ctx.fillStyle = color;\r
\r
      const base = opts.thickness * camera.unit;\r
\r
      for (const item of items) {\r
        if (item.kind === 'bone') {\r
          const a = proj[item.a];\r
          const b = proj[item.b];\r
          ctx.lineWidth = Math.max(0.5, base * item.w * (a.scale + b.scale) * 0.5);\r
          ctx.beginPath();\r
          ctx.moveTo(a.x, a.y);\r
          ctx.lineTo(b.x, b.y);\r
          ctx.stroke();\r
        } else if (item.kind === 'head') {\r
          const h = proj.head;\r
          ctx.beginPath();\r
          ctx.arc(h.x, h.y, PROPS.headRadius * camera.unit * h.scale, 0, Math.PI * 2);\r
          ctx.fill();\r
\r
          if (opts.eyes) {\r
            ctx.fillStyle = opts.eyeColor;\r
            drawEye(world, 1);\r
            drawEye(world, -1);\r
            ctx.fillStyle = color;\r
          }\r
        } else if (PROPS.handRadius > 0) {\r
          const p = proj[item.j];\r
          ctx.beginPath();\r
          ctx.arc(p.x, p.y, PROPS.handRadius * camera.unit * p.scale, 0, Math.PI * 2);\r
          ctx.fill();\r
        }\r
      }\r
    };\r
\r
    /* ================================================================\r
     * 8. 루프 / 동작 줄이기 전환\r
     * ================================================================ */\r
\r
    let animated = !prefersReducedMotion();\r
    let time = 0;\r
\r
    /** 한 프레임. 루프가 부르지만 외부에서 직접 불러도 됩니다(api.step). */\r
    const frame = (dt) => {\r
      time += dt;\r
      look.x = damp(look.x, look.tx, opts.turnSpeed, dt);\r
      look.y = damp(look.y, look.ty, opts.turnSpeed, dt);\r
      applyPose(time, dt);\r
      render();\r
    };\r
\r
    const loop = createVisibleLoop(el, frame, {\r
      fps: opts.fps || fpsCap(),\r
      rootMargin: '120px',\r
    });\r
    addCleanup(() => loop.destroy());\r
\r
    /**\r
     * 동작 줄이기: 캐릭터를 지우지 않고 "정지 자세 한 장"으로 바꿉니다.\r
     * 캐릭터는 장식이 아니라 콘텐츠이기 때문입니다.\r
     */\r
    const applyMotionMode = () => {\r
      animated = !prefersReducedMotion();\r
      if (animated) {\r
        loop.resume();\r
      } else {\r
        loop.pause();\r
        look.x = 0; look.y = 0; look.tx = 0; look.ty = 0;\r
        waveT = -1;\r
        eyeOpen = 1;\r
        applyPose(0, 0);\r
        render();\r
      }\r
    };\r
    const unwatchMotion = onReducedMotionChange(applyMotionMode);\r
    addCleanup(() => unwatchMotion());\r
    applyMotionMode();\r
\r
    // 테마가 바뀌면 색을 다시 읽습니다.\r
    const mqDark = window.matchMedia?.('(prefers-color-scheme: dark)');\r
    if (mqDark?.addEventListener) {\r
      const onScheme = () => { color = resolveColor(); };\r
      mqDark.addEventListener('change', onScheme);\r
      addCleanup(() => mqDark.removeEventListener('change', onScheme));\r
    }\r
\r
    if (opts.waveOnLoad && animated) {\r
      // 화면에 들어온 직후가 아니라 살짝 뒤에 — 등장하자마자 손 흔들면 어색합니다.\r
      const timer = setTimeout(startWave, 700);\r
      addCleanup(() => clearTimeout(timer));\r
    }\r
\r
    emit('ready', { joints: RIG.order.length });\r
\r
    /* ================================================================\r
     * 9. 외부 API\r
     * ================================================================ */\r
\r
    return {\r
      /** 인사시키기 */\r
      wave: () => startWave(),\r
      /** 시선을 직접 지정 (-1~1). 커서와 무관하게 제어할 때 */\r
      lookAt: (x, y) => {\r
        look.tx = clamp(x, -1, 1);\r
        look.ty = clamp(y, -1, 1);\r
      },\r
      /**\r
       * 프레임을 직접 한 번 돌립니다.\r
       * GSAP·Lenis 같은 외부 타임라인에서 캐릭터를 구동하고 싶을 때,\r
       * 또는 테스트에서 시간을 마음대로 감고 싶을 때 씁니다.\r
       *\r
       *   const h = mount('.char', { idle: false });\r
       *   gsap.ticker.add((t, dt) => h.api.step(dt / 1000));\r
       */\r
      step: (dt = 1 / 60) => frame(dt),\r
      /** 색/크기 다시 읽기 (테마 토글 후) */\r
      refresh: () => { layout(); render(); },\r
      /** 리그와 버퍼 — 직접 자세를 만지고 싶을 때 */\r
      rig: RIG,\r
      buffers: buf,\r
      get animated() { return animated; },\r
    };\r
  },\r
});\r
\r
export default mount;\r
`,Py=`/**\r
 * character / react.jsx\r
 */\r
\r
import React, { forwardRef, useRef, useImperativeHandle } from 'react';\r
import { useFx, mergeRefs } from '../_core/react.js';\r
import { getEffect } from '../_core/index.js';\r
import { mount } from './index.js';\r
\r
import '../_core/core.css';\r
import './style.css';\r
\r
/** 훅 버전 — 컨테이너에 .fx-char 클래스를 꼭 주세요. */\r
export function useCharacter(options, deps = []) {\r
  return useFx(mount, options, deps);\r
}\r
\r
/**\r
 * <Character variant="light" pointArm="R" />\r
 *\r
 * 외부에서 인사시키기:\r
 *   const ref = useRef();\r
 *   <Character apiRef={ref} />\r
 *   ref.current.wave();\r
 *\r
 * @param {'default'|'light'|'bare'|'fixed'} [variant]\r
 */\r
export const Character = forwardRef(function Character(\r
  {\r
    as: Tag = 'div',\r
    className = '',\r
    variant = 'default',\r
    /** 클릭/키보드로 인사시킬 수 있게 만들지 */\r
    interactive = true,\r
    /** 스크린 리더용 설명. 장식이면 빈 문자열로 두세요 */\r
    label = '',\r
    apiRef,\r
    children,\r
    deps = [],\r
    color,\r
    eyeColor,\r
    eyes,\r
    shadow,\r
    thickness,\r
    height,\r
    alignX,\r
    baseline,\r
    eye,\r
    follow,\r
    lookStrength,\r
    bodyFollow,\r
    lean,\r
    turnSpeed,\r
    range,\r
    idle,\r
    breathe,\r
    sway,\r
    blink,\r
    pointArm,\r
    waveArm,\r
    waveOnLoad,\r
    waveOnClick,\r
    waveDuration,\r
    waveCycles,\r
    fps,\r
    dpr,\r
    guard,\r
    ...rest\r
  },\r
  forwardedRef\r
) {\r
  const options = {};\r
  const raw = {\r
    color, eyeColor, eyes, shadow, thickness, height, alignX, baseline, eye,\r
    follow, lookStrength, bodyFollow, lean, turnSpeed, range,\r
    idle, breathe, sway, blink, pointArm,\r
    waveArm, waveOnLoad, waveOnClick, waveDuration, waveCycles, fps, dpr, guard,\r
  };\r
  for (const key in raw) if (raw[key] !== undefined) options[key] = raw[key];\r
\r
  const nodeRef = useRef(null);\r
  const ref = useCharacter(options, deps);\r
\r
  // _core 레지스트리에서 현재 핸들의 api를 꺼냅니다.\r
  const getApi = () =>\r
    nodeRef.current ? getEffect(nodeRef.current, 'character')?.api ?? null : null;\r
\r
  // handle.api를 밖으로 노출합니다 (wave / lookAt / refresh)\r
  useImperativeHandle(apiRef, () => ({\r
    wave: () => getApi()?.wave(),\r
    lookAt: (x, y) => getApi()?.lookAt(x, y),\r
    refresh: () => getApi()?.refresh(),\r
  }), []);\r
\r
  const variantClass =\r
    variant === 'light' ? 'fx-char--light'\r
    : variant === 'bare' ? 'fx-char--bare'\r
    : variant === 'fixed' ? 'fx-char--fixed fx-char--bare'\r
    : '';\r
\r
  const a11y = label\r
    ? { role: 'img', 'aria-label': label }\r
    : { 'aria-hidden': 'true' };\r
\r
  return (\r
    <Tag\r
      ref={mergeRefs(ref, nodeRef, forwardedRef)}\r
      className={\`fx-char \${variantClass} \${interactive ? 'fx-char--interactive' : ''} \${className}\`}\r
      tabIndex={interactive ? 0 : undefined}\r
      {...a11y}\r
      {...rest}\r
    >\r
      {children}\r
    </Tag>\r
  );\r
});\r
\r
export default Character;\r
`,Ay=`/**\r
 * character / rig.js\r
 * ─────────────────────────────────────────────────────────────\r
 * ★ 체형을 바꾸고 싶으면 이 파일만 고치면 됩니다.\r
 *\r
 * 숫자는 전부 "리그 단위"입니다. 실제 픽셀이 아니라 비율입니다.\r
 * 발바닥이 y=0, 머리 꼭대기가 대략 y=1.15가 되도록 잡혀 있고,\r
 * 화면에 그릴 때 컨테이너 높이에 맞춰 자동으로 확대/축소됩니다.\r
 *\r
 * 좌표계: X = 오른쪽, Y = 위, Z = 화면 앞쪽\r
 *\r
 * ⚠️ L / R은 **보는 사람 기준**입니다.\r
 *    캐릭터가 정면을 보고 있으므로 캐릭터 본인의 왼손은 화면 오른쪽(R)에 있습니다.\r
 *    헷갈리지 않도록 화면 기준으로 통일했습니다.\r
 */\r
\r
/* ================================================================== *\r
 * 관절 — offset은 "부모로부터의 상대 위치"\r
 * ================================================================== */\r
\r
export const JOINTS = {\r
  //  이름          부모        부모로부터의 오프셋 [x, y, z]\r
  hip:       { parent: null,      offset: [0, 0, 0] },\r
\r
  chest:     { parent: 'hip',     offset: [0, 0.26, 0] },\r
  neck:      { parent: 'chest',   offset: [0, 0.13, 0] },\r
  head:      { parent: 'neck',    offset: [0, 0.135, 0] },\r
\r
  shoulderR: { parent: 'chest',   offset: [ 0.155, 0.06, 0] },\r
  elbowR:    { parent: 'shoulderR', offset: [0, -0.21, 0] },\r
  handR:     { parent: 'elbowR',  offset: [0, -0.20, 0] },\r
\r
  shoulderL: { parent: 'chest',   offset: [-0.155, 0.06, 0] },\r
  elbowL:    { parent: 'shoulderL', offset: [0, -0.21, 0] },\r
  handL:     { parent: 'elbowL',  offset: [0, -0.20, 0] },\r
\r
  hipR:      { parent: 'hip',     offset: [ 0.075, -0.01, 0] },\r
  kneeR:     { parent: 'hipR',    offset: [0, -0.26, 0] },\r
  footR:     { parent: 'kneeR',   offset: [0, -0.25, 0] },\r
\r
  hipL:      { parent: 'hip',     offset: [-0.075, -0.01, 0] },\r
  kneeL:     { parent: 'hipL',    offset: [0, -0.26, 0] },\r
  footL:     { parent: 'kneeL',   offset: [0, -0.25, 0] },\r
};\r
\r
/**\r
 * 계산 순서. **부모가 반드시 자식보다 먼저** 와야 합니다.\r
 * 관절을 추가하면 여기에도 넣어주세요(안 넣으면 그냥 무시됩니다).\r
 */\r
export const ORDER = [\r
  'hip',\r
  'chest', 'neck', 'head',\r
  'shoulderR', 'elbowR', 'handR',\r
  'shoulderL', 'elbowL', 'handL',\r
  'hipR', 'kneeR', 'footR',\r
  'hipL', 'kneeL', 'footL',\r
];\r
\r
/* ================================================================== *\r
 * 뼈대 — [시작 관절, 끝 관절, 굵기 배율]\r
 *\r
 * 굵기 배율을 조절하면 체형 인상이 크게 바뀝니다.\r
 * 몸통을 1.4로 올리면 듬직해지고, 0.7로 낮추면 가늘고 날렵해집니다.\r
 * ================================================================== */\r
\r
export const BONES = [\r
  ['hip', 'chest', 1.15],   // 몸통\r
  ['chest', 'neck', 0.85],  // 목\r
\r
  ['shoulderR', 'shoulderL', 0.8], // 어깨선\r
\r
  ['shoulderR', 'elbowR', 0.78],\r
  ['elbowR', 'handR', 0.68],\r
  ['shoulderL', 'elbowL', 0.78],\r
  ['elbowL', 'handL', 0.68],\r
\r
  ['hip', 'hipR', 0.85],\r
  ['hipR', 'kneeR', 0.9],\r
  ['kneeR', 'footR', 0.78],\r
  ['hip', 'hipL', 0.85],\r
  ['hipL', 'kneeL', 0.9],\r
  ['kneeL', 'footL', 0.78],\r
];\r
\r
/* ================================================================== *\r
 * 비율\r
 * ================================================================== */\r
\r
export const PROPORTIONS = {\r
  /** 머리 반지름 */\r
  headRadius: 0.105,\r
\r
  /**\r
   * 원근 투영의 기준 높이(리그 단위, 발바닥=0).\r
   * 이 높이에 있는 부위는 캐릭터가 앞뒤로 움직여도 화면에서 흔들리지 않습니다.\r
   *\r
   * 0 = 발바닥 고정 (기본값). 서 있는 캐릭터는 발이 붙어 있어야 자연스럽습니다.\r
   * 0.5쯤으로 올리면 몸통 중앙이 고정되고 발이 살짝 뜹니다 — 떠 있는 캐릭터에 어울립니다.\r
   *\r
   * ※ 캐릭터의 전체 키는 여기 적지 않습니다.\r
   *   위의 관절 오프셋을 그대로 계산해서 자동으로 잽니다.\r
   *   그래서 오프셋을 마음대로 바꿔도 화면 배치가 알아서 맞습니다.\r
   */\r
  pivotY: 0,\r
\r
  /** 눈: 머리 로컬 좌표 [x, y, z]. z가 +라서 얼굴 앞쪽에 붙습니다. */\r
  eye: {\r
    offset: [0.036, 0.018, 0.088],\r
    radius: 0.017,\r
  },\r
\r
  /** 손끝을 살짝 둥글게 마감할 때의 반지름(0이면 생략) */\r
  handRadius: 0.022,\r
\r
  /** 바닥 그림자 */\r
  shadow: {\r
    radiusX: 0.17,\r
    radiusY: 0.045,\r
    alpha: 0.18,\r
  },\r
};\r
\r
/* ================================================================== *\r
 * 기본 서 있는 자세\r
 *\r
 * [rx, ry, rz] 라디안. 여기 값이 "가만히 서 있을 때"의 모양입니다.\r
 * 애니메이션은 이 값 위에 더해집니다.\r
 * ================================================================== */\r
\r
export const REST_POSE = {\r
  // 팔을 몸에서 살짝 벌립니다. 0이면 팔이 몸통에 딱 붙어 답답해 보입니다.\r
  shoulderR: [0, 0, 0.13],\r
  shoulderL: [0, 0, -0.13],\r
\r
  // 팔꿈치를 아주 살짝 앞으로 굽힙니다(rx 음수 = 화면 앞쪽).\r
  elbowR: [-0.14, 0, 0.04],\r
  elbowL: [-0.14, 0, -0.04],\r
\r
  // 다리를 살짝 벌려 안정감을 줍니다.\r
  hipR: [0, 0, 0.035],\r
  hipL: [0, 0, -0.035],\r
\r
  // 무릎을 미세하게 굽혀 뻣뻣함을 없앱니다.\r
  kneeR: [-0.03, 0, -0.02],\r
  kneeL: [-0.03, 0, 0.02],\r
};\r
\r
export const RIG = {\r
  joints: JOINTS,\r
  order: ORDER,\r
  bones: BONES,\r
  proportions: PROPORTIONS,\r
  rest: REST_POSE,\r
};\r
\r
export default RIG;\r
`,Dy=`/**\r
 * character / skeleton.js\r
 * ─────────────────────────────────────────────────────────────\r
 * 3D 스켈레톤 수학. **이 파일은 고칠 일이 거의 없습니다.**\r
 * 체형을 바꾸려면 rig.js를, 동작을 바꾸려면 index.js를 보세요.\r
 *\r
 * 하는 일:\r
 *   1. 회전 행렬 만들기 (오일러 YXZ, 그리고 "이 방향을 향해라"식 조준)\r
 *   2. 정기구학(FK) — 부모 관절의 변환을 자식에게 누적\r
 *   3. 원근 투영 — 3D 관절 좌표를 화면 좌표로\r
 *\r
 * 설계 원칙: **프레임당 메모리 할당 0.**\r
 *   60fps × 16관절이면 초당 1,000개 가까운 임시 배열이 생깁니다.\r
 *   모든 함수가 결과를 넘겨받은 배열에 써넣는(_Into) 형태인 이유입니다.\r
 *\r
 * 좌표계: X = 오른쪽, Y = 위, Z = 화면 앞쪽(보는 사람 방향)\r
 */\r
\r
/* ================================================================== *\r
 * 3×3 행렬 (행 우선, 길이 9 배열)\r
 * ================================================================== */\r
\r
export const IDENTITY = [1, 0, 0, 0, 1, 0, 0, 0, 1];\r
\r
export function identityInto(out) {\r
  out[0] = 1; out[1] = 0; out[2] = 0;\r
  out[3] = 0; out[4] = 1; out[5] = 0;\r
  out[6] = 0; out[7] = 0; out[8] = 1;\r
  return out;\r
}\r
\r
/**\r
 * 오일러 회전 R = Ry · Rx · Rz.\r
 *\r
 * 이 순서인 이유: 캐릭터 관절은 "좌우로 돌리고(Y) → 위아래로 끄덕이고(X) →\r
 * 갸웃하는(Z)" 순서로 생각하는 게 자연스럽습니다.\r
 * 순서를 바꾸면 같은 각도라도 결과가 달라집니다.\r
 */\r
export function rotYXZInto(out, rx, ry, rz) {\r
  const cx = Math.cos(rx), sx = Math.sin(rx);\r
  const cy = Math.cos(ry), sy = Math.sin(ry);\r
  const cz = Math.cos(rz), sz = Math.sin(rz);\r
\r
  out[0] = cy * cz + sy * sx * sz;\r
  out[1] = -cy * sz + sy * sx * cz;\r
  out[2] = sy * cx;\r
\r
  out[3] = cx * sz;\r
  out[4] = cx * cz;\r
  out[5] = -sx;\r
\r
  out[6] = -sy * cz + cy * sx * sz;\r
  out[7] = sy * sz + cy * sx * cz;\r
  out[8] = cy * cx;\r
  return out;\r
}\r
\r
/** out = a · b  (out은 a, b와 달라야 합니다) */\r
export function mulInto(out, a, b) {\r
  for (let r = 0; r < 3; r++) {\r
    const i = r * 3;\r
    const a0 = a[i], a1 = a[i + 1], a2 = a[i + 2];\r
    out[i]     = a0 * b[0] + a1 * b[3] + a2 * b[6];\r
    out[i + 1] = a0 * b[1] + a1 * b[4] + a2 * b[7];\r
    out[i + 2] = a0 * b[2] + a1 * b[5] + a2 * b[8];\r
  }\r
  return out;\r
}\r
\r
/** out = m · v */\r
export function applyInto(out, m, v) {\r
  const x = v[0], y = v[1], z = v[2];\r
  out[0] = m[0] * x + m[1] * y + m[2] * z;\r
  out[1] = m[3] * x + m[4] * y + m[5] * z;\r
  out[2] = m[6] * x + m[7] * y + m[8] * z;\r
  return out;\r
}\r
\r
/* ================================================================== *\r
 * 조준(aim) 행렬\r
 * ================================================================== */\r
\r
const REST = [0, -1, 0]; // 관절의 기본 방향: 아래로 늘어뜨린 상태\r
\r
/**\r
 * "기본 방향(아래)을 dir 쪽으로 돌리는" 회전 행렬을 만듭니다.\r
 * 로드리게스 회전 공식.\r
 *\r
 * 왜 오일러 각도로 안 하고 이걸 쓰나:\r
 *   "팔을 커서 쪽으로 뻗어라"를 오일러 각도로 계산하면\r
 *   부호와 순서를 손으로 맞춰야 하고, 사분면마다 뒤집힙니다.\r
 *   조준 행렬은 방향 벡터만 주면 되므로 부호 실수가 원천적으로 없습니다.\r
 */\r
export function aimInto(out, dir) {\r
  const len = Math.hypot(dir[0], dir[1], dir[2]);\r
  if (len < 1e-6) return identityInto(out);\r
\r
  const dx = dir[0] / len, dy = dir[1] / len, dz = dir[2] / len;\r
\r
  // v = REST × d,  c = REST · d\r
  const vx = -dz, vy = 0, vz = dx;\r
  const c = -dy;\r
  const s2 = vx * vx + vz * vz;\r
\r
  if (s2 < 1e-12) {\r
    // 이미 같은 방향이거나 정반대\r
    if (c > 0) return identityInto(out);\r
    // 정반대(= 위쪽) → Z축 180°\r
    out[0] = -1; out[1] = 0; out[2] = 0;\r
    out[3] = 0; out[4] = -1; out[5] = 0;\r
    out[6] = 0; out[7] = 0; out[8] = 1;\r
    return out;\r
  }\r
\r
  const k = (1 - c) / s2;\r
\r
  // R = I + [v]× + k·([v]×)²  ,  ([v]×)² = vvᵀ − |v|²I\r
  out[0] = 1 + k * (vx * vx - s2);\r
  out[1] = -vz + k * (vx * vy);\r
  out[2] = vy + k * (vx * vz);\r
\r
  out[3] = vz + k * (vy * vx);\r
  out[4] = 1 + k * (vy * vy - s2);\r
  out[5] = -vx + k * (vy * vz);\r
\r
  out[6] = -vy + k * (vz * vx);\r
  out[7] = vx + k * (vz * vy);\r
  out[8] = 1 + k * (vz * vz - s2);\r
  return out;\r
}\r
\r
/* ================================================================== *\r
 * 정기구학 (Forward Kinematics)\r
 * ================================================================== */\r
\r
/**\r
 * 관절별 월드 변환을 담을 저장소를 미리 만듭니다.\r
 * 매 프레임 새로 만들지 않고 이걸 재사용합니다.\r
 */\r
export function createPoseBuffers(rig) {\r
  const world = {};\r
  const pose = {};\r
  const aims = {};\r
  for (const name of rig.order) {\r
    world[name] = { m: new Float64Array(9), p: new Float64Array(3) };\r
    pose[name] = new Float64Array(3); // [rx, ry, rz]\r
    aims[name] = null;                // 방향 벡터를 넣으면 pose보다 우선합니다\r
  }\r
  return { world, pose, aims, root: new Float64Array(3) };\r
}\r
\r
const _tmpV = new Float64Array(3);\r
const _tmpR = new Float64Array(9);\r
\r
/**\r
 * pose(오일러) / aims(조준 방향)를 읽어 모든 관절의 월드 변환을 구합니다.\r
 * rig.order는 부모가 항상 자식보다 먼저 오도록 정렬돼 있어야 합니다.\r
 */\r
export function solve(rig, buffers) {\r
  const { world, pose, aims, root } = buffers;\r
\r
  for (const name of rig.order) {\r
    const joint = rig.joints[name];\r
    const out = world[name];\r
    const aim = aims[name];\r
\r
    if (!joint.parent) {\r
      // 루트: 회전은 pose, 위치는 root 벡터\r
      if (aim) aimInto(out.m, aim);\r
      else rotYXZInto(out.m, pose[name][0], pose[name][1], pose[name][2]);\r
      out.p[0] = root[0];\r
      out.p[1] = root[1];\r
      out.p[2] = root[2];\r
      continue;\r
    }\r
\r
    const parent = world[joint.parent];\r
\r
    // 위치: 부모 위치 + 부모 회전이 적용된 오프셋\r
    applyInto(_tmpV, parent.m, joint.offset);\r
    out.p[0] = parent.p[0] + _tmpV[0];\r
    out.p[1] = parent.p[1] + _tmpV[1];\r
    out.p[2] = parent.p[2] + _tmpV[2];\r
\r
    // 회전\r
    if (aim) {\r
      // 조준은 월드 기준이므로 부모 회전을 곱하지 않습니다.\r
      aimInto(out.m, aim);\r
    } else {\r
      const r = pose[name];\r
      rotYXZInto(_tmpR, r[0], r[1], r[2]);\r
      mulInto(out.m, parent.m, _tmpR);\r
    }\r
  }\r
  return world;\r
}\r
\r
/* ================================================================== *\r
 * 원근 투영\r
 * ================================================================== */\r
\r
/**\r
 * @typedef {object} Camera\r
 * @property {number} cx   화면상의 투영 중심 X (px)\r
 * @property {number} cy   화면상의 투영 중심 Y (px)\r
 * @property {number} unit 리그 1단위당 픽셀 수\r
 * @property {number} eye  카메라 거리(리그 단위). 작을수록 왜곡이 큼\r
 * @property {number} pivotY 투영 기준이 되는 리그 높이(보통 몸통 중앙)\r
 */\r
\r
/**\r
 * 3D 관절 좌표 → 화면 좌표.\r
 * scale은 선 굵기·머리 반지름에도 그대로 곱해야 원근이 일관됩니다.\r
 *\r
 * @returns {{x:number, y:number, z:number, scale:number}} out에 써서 반환\r
 */\r
export function projectInto(out, camera, p) {\r
  const depth = camera.eye - p[2];\r
  // 카메라 뒤로 넘어가면 뒤집히므로 최소값을 둡니다.\r
  const scale = camera.eye / (depth > 0.2 ? depth : 0.2);\r
  out.x = camera.cx + p[0] * camera.unit * scale;\r
  out.y = camera.cy - (p[1] - camera.pivotY) * camera.unit * scale;\r
  out.z = p[2];\r
  out.scale = scale;\r
  return out;\r
}\r
`,Oy=`/**\r
 * character / style.css\r
 * _core/core.css 를 먼저 불러오세요.\r
 */\r
\r
/* ================================================================== *\r
 * 1. 컨테이너 (사용자가 직접 붙이는 클래스)\r
 * ================================================================== */\r
\r
.fx-char {\r
  position: relative;\r
  display: block;\r
  width: 100%;\r
  /* 캔버스는 absolute라 높이를 만들지 못합니다. 비율을 고정해 두세요. */\r
  aspect-ratio: 3 / 4;\r
\r
  /* 선 색. JS가 이 변수를 읽습니다. */\r
  --fx-char-color: #ffffff;\r
\r
  /* 기본 캐릭터가 흰색이라 밝은 배경에서는 안 보입니다. */\r
  background: #16181d;\r
  border-radius: var(--fx-radius, 16px);\r
  overflow: hidden;\r
  isolation: isolate;\r
}\r
\r
/* 밝은 배경에 얹고 싶을 때 */\r
.fx-char--light {\r
  --fx-char-color: #16181d;\r
  background: var(--fx-surface-2);\r
}\r
\r
/* 배경 없이 페이지에 그대로 얹고 싶을 때 */\r
.fx-char--bare {\r
  background: transparent;\r
  border-radius: 0;\r
  --fx-char-color: currentColor;\r
}\r
\r
@media (prefers-color-scheme: dark) {\r
  .fx-char--bare { --fx-char-color: currentColor; }\r
}\r
\r
/* ================================================================== *\r
 * 2. 캔버스\r
 * ================================================================== */\r
\r
.fx-character__canvas {\r
  position: absolute;\r
  inset: 0;\r
  z-index: 0;\r
  display: block;\r
  /* 캐릭터 위의 링크·버튼을 막지 않습니다.\r
     포인터 추적은 window에서 받으므로 이래도 문제없습니다. */\r
  pointer-events: none;\r
\r
  opacity: 0;\r
  transition: opacity 400ms var(--fx-ease-out);\r
}\r
\r
.fx-character .fx-character__canvas {\r
  opacity: 1;\r
}\r
\r
/* 컨테이너 위 콘텐츠는 캔버스보다 위로 */\r
.fx-char > *:not(.fx-character__canvas) {\r
  position: relative;\r
  z-index: 1;\r
}\r
\r
/* ================================================================== *\r
 * 3. 클릭으로 인사시킬 때\r
 * ================================================================== */\r
\r
.fx-char--interactive {\r
  cursor: pointer;\r
  -webkit-tap-highlight-color: transparent;\r
}\r
\r
.fx-char--interactive:focus-visible {\r
  outline: 2px solid var(--fx-accent);\r
  outline-offset: 3px;\r
}\r
\r
/* ================================================================== *\r
 * 4. 선택 사항 — 화면 구석 마스코트\r
 *\r
 * 페이지 어디를 보든 따라오는 작은 캐릭터.\r
 * 포인터 이벤트를 통과시키므로 뒤의 콘텐츠 클릭을 막지 않습니다.\r
 * ================================================================== */\r
\r
.fx-char--fixed {\r
  position: fixed;\r
  right: 20px;\r
  bottom: 20px;\r
  z-index: 40;\r
\r
  width: clamp(90px, 12vw, 150px);\r
  aspect-ratio: 3 / 4;\r
\r
  background: transparent;\r
  border-radius: 0;\r
  overflow: visible;\r
  pointer-events: none;\r
}\r
\r
/* 마스코트는 좁은 화면에서 콘텐츠를 가립니다 */\r
@media (max-width: 640px) {\r
  .fx-char--fixed { display: none; }\r
}\r
\r
/* ================================================================== *\r
 * 5. 선택 사항 — 히어로 옆 배치\r
 * ================================================================== */\r
\r
.fx-char-hero {\r
  display: grid;\r
  grid-template-columns: 1fr;\r
  gap: 24px;\r
  align-items: center;\r
}\r
\r
@media (min-width: 720px) {\r
  .fx-char-hero {\r
    grid-template-columns: 1.2fr 0.8fr;\r
  }\r
}\r
\r
.fx-char-hero__text h1 {\r
  margin: 0 0 12px;\r
  font-size: clamp(1.8rem, 5vw, 3.2rem);\r
  font-weight: 700;\r
  letter-spacing: -0.03em;\r
  line-height: 1.08;\r
}\r
\r
.fx-char-hero__text p {\r
  margin: 0;\r
  color: var(--fx-text-dim);\r
  line-height: 1.6;\r
}\r
`,Fy=`/**\r
 * cursor-dot — 커스텀 커서 (점 + 따라오는 링)\r
 * ───────────────────────────────────────────────────────────\r
 * 티어 T1 · 추가 용량 0KB · 포인터(마우스) 필요\r
 *\r
 * 점은 커서에 붙어 다니고, 링은 lerp로 한 박자 늦게 따라옵니다.\r
 * 링크·버튼·카드 위에서는 링이 커집니다. 기본 커서는 숨기지 않습니다 —\r
 * 숨기면 iframe·비디오·셀렉트 위에서 커서가 사라지는 사고가 납니다.\r
 * 터치 기기에서는 가드가 아예 시작하지 않습니다.\r
 */\r
\r
import { defineEffect, lerp, prefersReducedMotion } from '../_core/index.js';\r
\r
export const mount = defineEffect({\r
  name: 'cursor-dot',\r
\r
  defaults: {\r
    /** 링이 따라오는 속도 0..1 */\r
    speed: 0.18,\r
    /** 링 지름(px) */\r
    size: 34,\r
    /** 올리면 링이 커지는 요소 */\r
    grow: 'a, button, .wf-btn, .wf-card, .wf-link, .wf-contact__mail',\r
    /** 커질 때 배율 */\r
    growScale: 1.9,\r
  },\r
\r
  guard: {\r
    pointer: 'fine',\r
    motion: 'ignore',   // 입력을 따르는 표시라 두되, 아래에서 지연만 없앱니다\r
  },\r
\r
  setup({ el, opts, on, addCleanup }) {\r
    const doc = el.ownerDocument;\r
    const win = doc.defaultView ?? window;\r
\r
    const ring = doc.createElement('span');\r
    ring.className = 'fx-cursor__ring';\r
    ring.style.width = ring.style.height = \`\${opts.size}px\`;\r
    const dot = doc.createElement('span');\r
    dot.className = 'fx-cursor__dot';\r
    doc.body.append(ring, dot);\r
    addCleanup(() => { ring.remove(); dot.remove(); });\r
\r
    let x = -100, y = -100, rx = -100, ry = -100;\r
    let raf = 0;\r
    let grown = false;\r
    const instant = prefersReducedMotion();\r
\r
    const step = () => {\r
      const k = instant ? 1 : opts.speed;\r
      rx = lerp(rx, x, k);\r
      ry = lerp(ry, y, k);\r
      ring.style.transform = \`translate(\${rx}px, \${ry}px) translate(-50%, -50%) scale(\${grown ? opts.growScale : 1})\`;\r
      if (Math.abs(rx - x) < 0.3 && Math.abs(ry - y) < 0.3) { raf = 0; return; }\r
      raf = win.requestAnimationFrame(step);\r
    };\r
    const kick = () => { if (!raf) raf = win.requestAnimationFrame(step); };\r
    addCleanup(() => { if (raf) win.cancelAnimationFrame(raf); });\r
\r
    on(win, 'pointermove', (e) => {\r
      x = e.clientX; y = e.clientY;\r
      dot.style.transform = \`translate(\${x}px, \${y}px) translate(-50%, -50%)\`;\r
      /* 링 확대 대상 위인지 — 이벤트 위임이라 요소마다 리스너를 달지 않습니다. */\r
      grown = !!e.target?.closest?.(opts.grow);\r
      ring.classList.toggle('is-grown', grown);\r
      dot.classList.add('is-on');\r
      ring.classList.add('is-on');\r
      kick();\r
    }, { passive: true });\r
\r
    on(doc, 'pointerleave', () => {\r
      dot.classList.remove('is-on');\r
      ring.classList.remove('is-on');\r
    });\r
  },\r
});\r
\r
export default mount;\r
`,Iy=`/**\r
 * cursor-dot / style.css\r
 */\r
\r
.fx-cursor__dot,\r
.fx-cursor__ring {\r
  position: fixed;\r
  top: 0;\r
  left: 0;\r
  z-index: 90;\r
  pointer-events: none;\r
  border-radius: 50%;\r
  opacity: 0;\r
  transition: opacity 200ms ease;\r
}\r
\r
.fx-cursor__dot.is-on,\r
.fx-cursor__ring.is-on { opacity: 1; }\r
\r
.fx-cursor__dot {\r
  width: 6px;\r
  height: 6px;\r
  background: var(--wf-accent, currentColor);\r
}\r
\r
.fx-cursor__ring {\r
  border: 1.5px solid var(--wf-accent, currentColor);\r
  opacity: 0;\r
  transition: opacity 200ms ease, scale 0s;\r
}\r
\r
.fx-cursor__ring.is-grown { background: color-mix(in srgb, var(--wf-accent, #000) 12%, transparent); }\r
\r
/* 터치 화면에서는 혹시 떠 있어도 숨깁니다(가드가 있지만 이중 안전). */\r
@media (pointer: coarse) {\r
  .fx-cursor__dot, .fx-cursor__ring { display: none; }\r
}\r
`,By=`# \`dot-grid-wave\` — 3D 파동 도트 그리드\r
\r
> **티어 T1** · 추가 용량 **0KB**(Canvas 2D) · **WebGL 불필요** · 모든 환경에서 동작\r
\r
점 격자가 파도처럼 앞뒤로 물결치고, 커서 주변은 밀려납니다.\r
\`silk-bg\`가 부담스러운 섹션(About, Skills)의 배경으로 씁니다.\r
\r
---\r
\r
## 1. 붙이기 — 바닐라\r
\r
\`\`\`html\r
<link rel="stylesheet" href="./effects/_core/core.css" />\r
<link rel="stylesheet" href="./effects/dot-grid-wave/style.css" />\r
\r
<!-- .fx-dots 는 필수 -->\r
<section class="about fx-dots fx-dots--fade fx-dots-section">\r
  <div>\r
    <h2>About</h2>\r
    <p>사용자가 머무는 화면을 만듭니다.</p>\r
  </div>\r
</section>\r
\r
<script type="module">\r
  import { mount } from './effects/dot-grid-wave/index.js';\r
  mount('.about');\r
<\/script>\r
\`\`\`\r
\r
## 2. 붙이기 — React\r
\r
\`\`\`jsx\r
import { DotGridWave } from './effects/dot-grid-wave/react.jsx';\r
\r
<DotGridWave fade className="fx-dots-section" spacing={30} ripple={0.5}>\r
  <h2>About</h2>\r
</DotGridWave>\r
\`\`\`\r
\r
---\r
\r
## 3. 왜 Canvas 2D인가 (WebGL이 아니라)\r
\r
점 몇천 개를 그리는 데 WebGL 컨텍스트를 하나 잡는 건 과합니다.\r
\r
| | Canvas 2D | WebGL |\r
|---|---|---|\r
| 컨텍스트 개수 제한 | **없음** | 브라우저당 8~16개 |\r
| 셰이더 컴파일 비용 | 없음 | 초기화 시 수십 ms |\r
| 구형 기기 | **100% 동작** | 미지원 존재 |\r
| 추가 용량 | **0KB** | 라이브러리 필요 |\r
\r
\`silk-bg\`와 이 효과를 **같은 페이지에 함께 써도** 컨텍스트 경쟁이 없습니다.\r
이건 우연이 아니라 그렇게 나눈 겁니다.\r
\r
---\r
\r
## 4. 진짜 3D인 이유\r
\r
점 크기만 키웠다 줄이면 **"깜빡이는 점"**으로 보입니다. 3D가 아닙니다.\r
\r
여기서는 파동을 **Z축 변위**로 쓰고 원근 투영을 직접 계산합니다.\r
\r
\`\`\`\r
k = focal / (focal − z)\r
화면좌표 = 중심 + (격자좌표 − 중심) × k\r
반지름   = 기본반지름 × k\r
\`\`\`\r
\r
앞으로 나온 점은 **커지면서 화면 바깥으로 퍼지고**,\r
뒤로 간 점은 **작아지면서 중심으로 모입니다.** 이게 실제 원근입니다.\r
\r
\`depth: 0\`으로 주면 평평한 격자가 됩니다. 차이를 직접 비교해보세요.\r
\r
---\r
\r
## 5. 옵션\r
\r
### 격자\r
\r
| 옵션 | 기본값 | 설명 |\r
|---|---|---|\r
| \`spacing\` | \`28\` | 점 간격(px). **22~34 권장.** 작을수록 촘촘하고 무겁습니다 |\r
| \`radius\` | \`1.7\` | 점 기본 반지름(px) |\r
| \`color\` | \`null\` | \`null\`이면 CSS 변수 \`--fx-dot-color\` → 요소의 \`color\` 순으로 읽습니다 |\r
| \`opacity\` | \`0.55\` | 전체 불투명도 |\r
| \`maxDots\` | \`7000\` | 점 개수 상한. 넘으면 \`spacing\`을 자동으로 늘립니다 |\r
\r
### 파동\r
\r
| 옵션 | 기본값 | 설명 |\r
|---|---|---|\r
| \`depth\` | \`38\` | 파동의 Z 변위(px). **입체감의 핵심.** \`0\`이면 평면 |\r
| \`focal\` | \`420\` | 원근 초점 거리(px). 작을수록 왜곡이 강함 |\r
| \`speed\` | \`1.0\` | 파동 속도 |\r
| \`frequency\` | \`0.022\` | 공간 주파수. 작을수록 파장이 김 |\r
| \`angle\` | \`38\` | 파동 진행 방향(도). \`0\`=오른쪽, \`90\`=아래 |\r
| \`ripple\` | \`0.35\` | 중심에서 퍼지는 원형파를 섞는 비율(0~1) |\r
\r
### 커서\r
\r
| 옵션 | 기본값 | 설명 |\r
|---|---|---|\r
| \`pointer\` | \`true\` | 커서 반응 |\r
| \`pointerRadius\` | \`140\` | 영향 반경(px) |\r
| \`pointerPush\` | \`18\` | 밀어내는 거리(px). **음수면 끌어당깁니다** |\r
| \`pointerLift\` | \`26\` | 커서 주변이 앞으로 나오는 정도(px) |\r
\r
---\r
\r
## 6. 성능 설계\r
\r
점 2,600개를 개별 \`fill\`하면 draw call이 **2,600번**입니다.\r
여기서는 \`Path2D\` 하나에 \`arc\`를 전부 모아 **\`fill\`을 딱 1번** 호출합니다.\r
\r
그 외:\r
\r
- **화면 밖 점 스킵** — 원근으로 퍼져나간 점은 그리지 않습니다\r
- **\`maxDots\` 자동 방어** — 4K 모니터에서 \`spacing: 28\`이면 3만 개가 넘습니다. 상한을 넘으면 간격을 자동으로 넓힙니다\r
- **화면 밖 → 루프 완전 정지**\r
- **저사양 기기 30fps 자동**\r
- **다크모드 토글 감지** — 테마가 바뀌면 점 색을 다시 읽습니다\r
\r
---\r
\r
## 7. 조합 레시피\r
\r
\`\`\`js\r
// 잔잔한 배경 (본문 섹션)\r
mount('.about', { depth: 20, speed: 0.6, opacity: 0.35, ripple: 0 });\r
\r
// 강한 물결 (구분선/전환 구간)\r
mount('.divider', { depth: 60, focal: 300, frequency: 0.03, ripple: 0.7 });\r
\r
// 커서에 끌려오는 점들\r
mount('.hero', { pointerPush: -24, pointerLift: 40, pointerRadius: 200 });\r
\r
// 평면 격자 (3D 없이 도트 패턴만)\r
mount('.section', { depth: 0, speed: 0.4, ripple: 0 });\r
\r
// 수직 파동 (아래로 흐르는 느낌)\r
mount('.section', { angle: 90, frequency: 0.018 });\r
\`\`\`\r
\r
---\r
\r
## 8. 가장자리 처리\r
\r
격자가 컨테이너 경계에서 뚝 잘리면 **"붙여놓은 배경"**처럼 보입니다.\r
\r
\`\`\`html\r
<section class="fx-dots fx-dots--fade">     <!-- 원형 페이드 -->\r
<section class="fx-dots fx-dots--fade-y">   <!-- 위/아래만 페이드 -->\r
\`\`\`\r
\r
마스크로 가장자리를 흐리면 화면에 녹아든 느낌이 납니다. **거의 항상 켜는 게 낫습니다.**\r
\r
---\r
\r
## 9. 수동 제어\r
\r
\`\`\`js\r
const handle = mount('.about');\r
\r
handle.api.refresh();   // 테마 토글 후 색/레이아웃 다시 읽기\r
handle.api.dots;        // 현재 점 개수 (성능 튜닝 확인용)\r
\`\`\`\r
\r
---\r
\r
## 10. 자주 겪는 문제\r
\r
**Q. 점이 안 보입니다.**\r
→ ① 컨테이너에 \`.fx-dots\`를 붙였는지 (색 변수가 여기 있습니다).\r
→ ② 컨테이너 높이가 0은 아닌지 (캔버스는 \`absolute\`라 높이를 만들지 못합니다).\r
→ ③ 점 색이 배경색과 같지 않은지 — \`--fx-dot-color\`를 직접 지정해보세요.\r
\r
**Q. 커서 반응이 없습니다.**\r
→ 캔버스는 \`pointer-events: none\`이고 컨테이너가 이벤트를 받습니다.\r
컨테이너 위에 다른 요소가 전면을 덮고 있으면 \`pointermove\`가 도달하지 않습니다.\r
\r
**Q. 무겁습니다.**\r
→ \`handle.api.dots\`를 찍어보세요. **3,000개를 넘으면** \`spacing\`을 키우거나 \`maxDots\`를 낮추세요.\r
\`fps: 30\`도 배경으로는 충분합니다.\r
\r
**Q. 다크모드로 바꾸면 점 색이 그대로입니다.**\r
→ \`prefers-color-scheme\` 변경은 자동 감지합니다. 하지만 **직접 만든 테마 토글 버튼**(\`data-theme\`)은\r
감지 대상이 아니므로 토글 후 \`handle.api.refresh()\`를 호출하세요.\r
\r
**Q. 점이 격자처럼 딱딱해 보입니다.**\r
→ \`ripple\`을 올려 원형파를 섞거나, \`angle\`을 \`38\`처럼 격자와 어긋난 각도로 두세요.\r
\`0\`이나 \`90\`은 격자 축과 정렬돼서 규칙적으로 보입니다.\r
`,Wy=`/**\r
 * dot-grid-wave — 3D 파동 도트 그리드\r
 * ───────────────────────────────────────────────────────────\r
 * 티어 T1 · 추가 용량 0KB(Canvas 2D) · WebGL 불필요 · 모든 환경에서 동작\r
 *\r
 * 점 격자가 파도처럼 앞뒤로 물결칩니다. 커서 주변은 밀려납니다.\r
 *\r
 * WebGL을 안 쓴 이유:\r
 *   점 몇천 개를 그리는 데 WebGL 컨텍스트를 하나 잡는 건 과합니다.\r
 *   컨텍스트는 브라우저당 8~16개 한도이고, 셰이더 컴파일 비용도 있습니다.\r
 *   Canvas 2D는 의존성 0, 컨텍스트 제한 없음, 구형 기기 포함 100% 동작.\r
 *\r
 * 진짜 3D인 이유:\r
 *   점 크기만 키웠다 줄이면 "깜빡이는 점"으로 보입니다.\r
 *   여기서는 파동을 Z축 변위로 쓰고 원근 투영을 직접 계산합니다.\r
 *       k = focal / (focal - z)\r
 *       화면좌표 = 중심 + (격자좌표 - 중심) × k\r
 *       반지름   = 기본반지름 × k\r
 *   → 앞으로 나온 점은 커지면서 화면 바깥으로 퍼지고,\r
 *     뒤로 간 점은 작아지면서 중심으로 모입니다. 이게 실제 원근입니다.\r
 *\r
 * 성능 설계:\r
 *   점 2,600개를 개별 fill 하면 draw call이 2,600번입니다.\r
 *   Path2D 하나에 arc를 전부 모아 fill을 딱 1번만 호출합니다.\r
 */\r
\r
import {\r
  defineEffect,\r
  createVisibleLoop,\r
  observeResize,\r
  clamp,\r
  damp,\r
  dprCap,\r
  fpsCap,\r
} from '../_core/index.js';\r
\r
const TAU = Math.PI * 2;\r
\r
/** 0~1 구간 S커브. 커서 반발의 경계를 눈에 안 보이게 합니다. */\r
const smoothstep = (t) => t * t * (3 - 2 * t);\r
\r
export const mount = defineEffect({\r
  name: 'dot-grid-wave',\r
\r
  defaults: {\r
    /** 점 사이 간격(px). 22~34가 적당합니다. 작을수록 촘촘하고 무겁습니다. */\r
    spacing: 28,\r
    /** 점 기본 반지름(px) */\r
    radius: 1.7,\r
    /** 점 색. null이면 CSS 변수 --fx-dot-color → 요소의 color 순으로 읽습니다. */\r
    color: null,\r
    /** 전체 불투명도 */\r
    opacity: 0.55,\r
\r
    /** 파동이 밀어내는 Z 거리(px). 이게 클수록 입체감이 큽니다. */\r
    depth: 38,\r
    /** 원근 초점 거리(px). 작을수록 왜곡이 강합니다. */\r
    focal: 420,\r
    /** 파동 속도 */\r
    speed: 1.0,\r
    /** 파동의 공간 주파수. 작을수록 파장이 깁니다. */\r
    frequency: 0.022,\r
    /** 파동 진행 방향(도). 0=오른쪽, 45=대각선 */\r
    angle: 38,\r
    /** 중심에서 퍼지는 원형 파동을 섞는 비율(0~1) */\r
    ripple: 0.35,\r
\r
    /** 커서 반응 */\r
    pointer: true,\r
    /** 커서 영향 반경(px) */\r
    pointerRadius: 140,\r
    /** 커서가 점을 밀어내는 거리(px). 음수면 끌어당깁니다. */\r
    pointerPush: 18,\r
    /** 커서 주변에서 점이 앞으로 나오는 정도(px) */\r
    pointerLift: 26,\r
\r
    /** 프레임 상한. 0이면 기기 등급에 따라 자동 */\r
    fps: 0,\r
    /** 렌더 해상도 배율 상한. 점은 작아서 2가 필요합니다. */\r
    dpr: 2,\r
    /**\r
     * 점 개수 상한. 넘으면 spacing을 자동으로 늘립니다.\r
     * 4K 모니터에서 spacing 28이면 3만 개가 넘어갑니다.\r
     */\r
    maxDots: 7000,\r
  },\r
\r
  guard: {\r
    motion: 'skip',\r
    pointer: 'any', // 파동 자체는 터치 기기에서도 유효합니다\r
  },\r
\r
  setup({ el, opts, on, addCleanup, emit }) {\r
    /* --- 1. 캔버스 --------------------------------------------------- */\r
\r
    if (getComputedStyle(el).position === 'static') {\r
      el.style.position = 'relative';\r
      addCleanup(() => {\r
        el.style.position = '';\r
      });\r
    }\r
\r
    const canvas = document.createElement('canvas');\r
    /* fx-layer — 배경 레이어 공용 표식(다른 팩이 콘텐츠로 착각하지 않게). */\r
    canvas.className = 'fx-dot-grid-wave__canvas fx-layer';\r
    canvas.setAttribute('aria-hidden', 'true');\r
    el.prepend(canvas);\r
    addCleanup(() => canvas.remove());\r
\r
    const ctx = canvas.getContext('2d', { alpha: true });\r
    if (!ctx) {\r
      console.warn('[fx:dot-grid-wave] Canvas 2D 컨텍스트를 만들 수 없습니다.');\r
      canvas.remove();\r
      return;\r
    }\r
\r
    /* --- 2. 색 결정 --------------------------------------------------- */\r
\r
    const resolveColor = () => {\r
      if (opts.color) return opts.color;\r
      const cs = getComputedStyle(el);\r
      const v = cs.getPropertyValue('--fx-dot-color').trim();\r
      return v || cs.color || '#888';\r
    };\r
    let color = resolveColor();\r
\r
    /* --- 3. 그리드 계산 ----------------------------------------------- */\r
\r
    let dpr = 1;\r
    let W = 0;\r
    let H = 0;        // CSS 픽셀 기준 크기\r
    let cols = 0;\r
    let rows = 0;\r
    let step = opts.spacing;\r
    let offX = 0;\r
    let offY = 0;\r
    let cx = 0;\r
    let cy = 0;\r
\r
    const layout = () => {\r
      W = el.clientWidth || 1;\r
      H = el.clientHeight || 1;\r
      dpr = Math.min(dprCap(3), opts.dpr);\r
\r
      canvas.width = Math.round(W * dpr);\r
      canvas.height = Math.round(H * dpr);\r
      canvas.style.width = \`\${W}px\`;\r
      canvas.style.height = \`\${H}px\`;\r
\r
      // 점 개수가 상한을 넘으면 간격을 넓혀서 방어합니다.\r
      step = opts.spacing;\r
      let count = Math.ceil(W / step) * Math.ceil(H / step);\r
      if (count > opts.maxDots) {\r
        step = Math.sqrt((W * H) / opts.maxDots);\r
        count = Math.ceil(W / step) * Math.ceil(H / step);\r
      }\r
\r
      cols = Math.ceil(W / step) + 2; // 화면 밖으로 한 줄씩 여유 (원근으로 퍼져도 안 비게)\r
      rows = Math.ceil(H / step) + 2;\r
      offX = (W - (cols - 1) * step) / 2;\r
      offY = (H - (rows - 1) * step) / 2;\r
      cx = W / 2;\r
      cy = H / 2;\r
\r
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);\r
      color = resolveColor();\r
    };\r
\r
    const stopResize = observeResize(el, layout);\r
    addCleanup(() => stopResize());\r
    layout();\r
\r
    /* --- 4. 커서 ----------------------------------------------------- */\r
\r
    const pointer = { x: -9999, y: -9999, tx: -9999, ty: -9999, active: 0, tActive: 0 };\r
\r
    if (opts.pointer) {\r
      on(\r
        el,\r
        'pointermove',\r
        (event) => {\r
          const rect = el.getBoundingClientRect();\r
          pointer.tx = event.clientX - rect.left;\r
          pointer.ty = event.clientY - rect.top;\r
          pointer.tActive = 1;\r
          // 커서가 처음 들어온 순간 순간이동하지 않도록 초기 위치를 맞춥니다.\r
          if (pointer.x < -9000) {\r
            pointer.x = pointer.tx;\r
            pointer.y = pointer.ty;\r
          }\r
        },\r
        { passive: true }\r
      );\r
      on(el, 'pointerleave', () => {\r
        pointer.tActive = 0;\r
      });\r
    }\r
\r
    /* --- 5. 렌더 ----------------------------------------------------- */\r
\r
    const rad = (opts.angle * Math.PI) / 180;\r
    const dirX = Math.cos(rad);\r
    const dirY = Math.sin(rad);\r
    const zClamp = opts.focal * 0.6; // k가 폭주하지 않도록\r
\r
    let time = 0;\r
\r
    const render = (dt) => {\r
      time += dt * opts.speed;\r
\r
      pointer.x = damp(pointer.x, pointer.tx, 14, dt);\r
      pointer.y = damp(pointer.y, pointer.ty, 14, dt);\r
      pointer.active = damp(pointer.active, pointer.tActive, 8, dt);\r
\r
      ctx.clearRect(0, 0, W, H);\r
      ctx.globalAlpha = opts.opacity;\r
      ctx.fillStyle = color;\r
\r
      const path = new Path2D();\r
      const pr = opts.pointerRadius;\r
      const usePointer = opts.pointer && pointer.active > 0.01;\r
\r
      for (let j = 0; j < rows; j++) {\r
        const gy = offY + j * step;\r
\r
        for (let i = 0; i < cols; i++) {\r
          const gx = offX + i * step;\r
\r
          // ── 파동: 방향파 + 중심에서 퍼지는 원형파를 섞습니다\r
          const linear = (gx * dirX + gy * dirY) * opts.frequency;\r
          let phase = linear - time * 2.2;\r
\r
          if (opts.ripple > 0) {\r
            const dxc = gx - cx;\r
            const dyc = gy - cy;\r
            const dist = Math.sqrt(dxc * dxc + dyc * dyc);\r
            phase = phase * (1 - opts.ripple) +\r
                    (dist * opts.frequency - time * 2.2) * opts.ripple;\r
          }\r
\r
          let z = Math.sin(phase) * opts.depth;\r
          let px = gx;\r
          let py = gy;\r
\r
          // ── 커서 반발\r
          if (usePointer) {\r
            const dx = gx - pointer.x;\r
            const dy = gy - pointer.y;\r
            const d2 = dx * dx + dy * dy;\r
            if (d2 < pr * pr) {\r
              const d = Math.sqrt(d2) || 0.0001;\r
              const f = smoothstep(1 - d / pr) * pointer.active;\r
              px += (dx / d) * opts.pointerPush * f;\r
              py += (dy / d) * opts.pointerPush * f;\r
              z += opts.pointerLift * f;\r
            }\r
          }\r
\r
          // ── 원근 투영\r
          if (z > zClamp) z = zClamp;\r
          const k = opts.focal / (opts.focal - z);\r
          const sx = cx + (px - cx) * k;\r
          const sy = cy + (py - cy) * k;\r
          const r = opts.radius * k;\r
\r
          if (r <= 0.05) continue;\r
          // 화면 밖 점은 건너뜁니다(원근으로 퍼져나간 점들)\r
          if (sx < -8 || sx > W + 8 || sy < -8 || sy > H + 8) continue;\r
\r
          // arc 앞에 moveTo가 없으면 이전 원과 직선으로 이어집니다.\r
          path.moveTo(sx + r, sy);\r
          path.arc(sx, sy, r, 0, TAU);\r
        }\r
      }\r
\r
      // 수천 개의 점을 fill 한 번으로. 이게 이 효과가 가벼운 이유입니다.\r
      ctx.fill(path);\r
      ctx.globalAlpha = 1;\r
    };\r
\r
    /* --- 6. 루프 ----------------------------------------------------- */\r
\r
    const loop = createVisibleLoop(el, render, {\r
      fps: opts.fps || fpsCap(),\r
      rootMargin: '120px',\r
    });\r
    addCleanup(() => loop.destroy());\r
\r
    // 색 테마가 바뀌면(다크모드 토글 등) 다시 읽습니다.\r
    const mqDark = window.matchMedia?.('(prefers-color-scheme: dark)');\r
    if (mqDark?.addEventListener) {\r
      const onScheme = () => {\r
        color = resolveColor();\r
      };\r
      mqDark.addEventListener('change', onScheme);\r
      addCleanup(() => mqDark.removeEventListener('change', onScheme));\r
    }\r
\r
    emit('ready', { cols, rows, step });\r
\r
    return {\r
      /** 색/레이아웃을 다시 읽습니다(테마 토글 후 호출) */\r
      refresh: () => layout(),\r
      get dots() {\r
        return cols * rows;\r
      },\r
    };\r
  },\r
});\r
\r
export default mount;\r
`,Hy=`/**\r
 * dot-grid-wave / react.jsx\r
 */\r
\r
import React, { forwardRef } from 'react';\r
import { useFx, mergeRefs } from '../_core/react.js';\r
import { mount } from './index.js';\r
\r
import '../_core/core.css';\r
import './style.css';\r
\r
/** 훅 버전 — 컨테이너에 .fx-dots 클래스를 꼭 주세요. */\r
export function useDotGrid(options, deps = []) {\r
  return useFx(mount, options, deps);\r
}\r
\r
/**\r
 * <DotGridWave fade className="fx-dots-section">\r
 *   <h2>About</h2>\r
 * </DotGridWave>\r
 *\r
 * @param {'radial'|'y'|false} fade 가장자리 페이드 방식\r
 */\r
export const DotGridWave = forwardRef(function DotGridWave(\r
  {\r
    as: Tag = 'section',\r
    children,\r
    className = '',\r
    fade = false,\r
    deps = [],\r
    spacing,\r
    radius,\r
    color,\r
    opacity,\r
    depth,\r
    focal,\r
    speed,\r
    frequency,\r
    angle,\r
    ripple,\r
    pointer,\r
    pointerRadius,\r
    pointerPush,\r
    pointerLift,\r
    fps,\r
    dpr,\r
    maxDots,\r
    guard,\r
    ...rest\r
  },\r
  forwardedRef\r
) {\r
  const options = {};\r
  const raw = {\r
    spacing, radius, color, opacity, depth, focal, speed, frequency, angle,\r
    ripple, pointer, pointerRadius, pointerPush, pointerLift, fps, dpr, maxDots, guard,\r
  };\r
  for (const key in raw) if (raw[key] !== undefined) options[key] = raw[key];\r
\r
  const ref = useDotGrid(options, deps);\r
\r
  const fadeClass = fade === 'y' ? 'fx-dots--fade-y' : fade ? 'fx-dots--fade' : '';\r
\r
  return (\r
    <Tag\r
      ref={mergeRefs(ref, forwardedRef)}\r
      className={\`fx-dots \${fadeClass} \${className}\`}\r
      {...rest}\r
    >\r
      {children}\r
    </Tag>\r
  );\r
});\r
\r
export default DotGridWave;\r
`,Uy=`/**\r
 * dot-grid-wave / style.css\r
 * _core/core.css 를 먼저 불러오세요.\r
 */\r
\r
/* ================================================================== *\r
 * 1. 컨테이너 (사용자가 직접 붙이는 클래스)\r
 * ================================================================== */\r
\r
.fx-dots {\r
  position: relative;\r
  isolation: isolate;\r
  overflow: hidden;\r
\r
  /*\r
   * 점 색. JS가 이 변수를 읽습니다.\r
   * 지정하지 않으면 요소의 color를 씁니다.\r
   */\r
  --fx-dot-color: #6b7280;\r
}\r
\r
@media (prefers-color-scheme: dark) {\r
  .fx-dots {\r
    --fx-dot-color: #9ca3af;\r
  }\r
}\r
\r
:root[data-theme='dark'] .fx-dots {\r
  --fx-dot-color: #9ca3af;\r
}\r
:root[data-theme='light'] .fx-dots {\r
  --fx-dot-color: #6b7280;\r
}\r
\r
/* ================================================================== *\r
 * 2. 캔버스\r
 * ================================================================== */\r
\r
.fx-dot-grid-wave__canvas {\r
  position: absolute;\r
  inset: 0;\r
  z-index: 0;\r
  display: block;\r
  /*\r
   * pointer-events를 끄지 않습니다.\r
   * 커서 반발을 위해 컨테이너가 pointermove를 받아야 하는데,\r
   * 캔버스가 이벤트를 먹어도 버블링으로 컨테이너에 도달합니다.\r
   * 다만 캔버스 위 링크 클릭을 막지 않도록 none으로 둡니다.\r
   */\r
  pointer-events: none;\r
\r
  opacity: 0;\r
  transition: opacity 500ms var(--fx-ease-out);\r
}\r
\r
.fx-dot-grid-wave .fx-dot-grid-wave__canvas {\r
  opacity: 1;\r
}\r
\r
/* 콘텐츠는 항상 캔버스 위로.\r
   \`.fx-layer\`(배경 레이어 공용 표식)는 건너뜁니다 — 같은 영역에 함께 걸린\r
   다른 팩의 배경까지 콘텐츠로 끌어올리면 서로를 망칩니다. */\r
.fx-dots > *:not(.fx-layer) {\r
  position: relative;\r
  z-index: 1;\r
}\r
\r
/* ================================================================== *\r
 * 3. 선택 사항 — 가장자리 페이드\r
 *\r
 * 격자가 컨테이너 경계에서 뚝 잘리면 "붙여놓은 배경"처럼 보입니다.\r
 * 마스크로 가장자리를 흐리면 화면에 녹아든 느낌이 납니다.\r
 * ================================================================== */\r
\r
.fx-dots--fade .fx-dot-grid-wave__canvas {\r
  -webkit-mask-image: radial-gradient(\r
    ellipse 78% 78% at 50% 50%,\r
    #000 45%,\r
    transparent 100%\r
  );\r
  mask-image: radial-gradient(\r
    ellipse 78% 78% at 50% 50%,\r
    #000 45%,\r
    transparent 100%\r
  );\r
}\r
\r
/* 위/아래만 페이드 (섹션 구분선처럼 쓸 때) */\r
.fx-dots--fade-y .fx-dot-grid-wave__canvas {\r
  -webkit-mask-image: linear-gradient(\r
    to bottom,\r
    transparent 0%,\r
    #000 22%,\r
    #000 78%,\r
    transparent 100%\r
  );\r
  mask-image: linear-gradient(\r
    to bottom,\r
    transparent 0%,\r
    #000 22%,\r
    #000 78%,\r
    transparent 100%\r
  );\r
}\r
\r
/* ================================================================== *\r
 * 4. 선택 사항 — 섹션 스타터\r
 * ================================================================== */\r
\r
.fx-dots-section {\r
  display: grid;\r
  place-items: center;\r
  min-height: min(62vh, 560px);\r
  padding: 56px 24px;\r
  border-radius: var(--fx-radius, 16px);\r
  background: var(--fx-surface);\r
  text-align: center;\r
  color: var(--fx-text);\r
}\r
\r
.fx-dots-section h2 {\r
  margin: 0 0 12px;\r
  font-size: clamp(1.6rem, 4vw, 2.6rem);\r
  font-weight: 700;\r
  letter-spacing: -0.03em;\r
}\r
\r
.fx-dots-section p {\r
  margin: 0;\r
  max-width: 46ch;\r
  color: var(--fx-text-dim);\r
  line-height: 1.6;\r
}\r
`,Gy=`# \`flip-card\` — 3D 플립 카드\r
\r
> **티어 T0** · 추가 용량 **0KB** · 의존성 없음 · **모든 환경에서 동작**\r
\r
앞면에 기술명, 뒷면에 경험을 넣는 스킬 카드로 가장 많이 씁니다.\r
\r
**회전은 100% CSS입니다.** JS는 애니메이션을 전혀 건드리지 않고 상태와 접근성만 관리합니다.\r
그래서 가드에 걸려 꺼져도, JS가 실패해도 **뒷면은 여전히 읽을 수 있습니다.**\r
\r
---\r
\r
## 1. 붙이기 — 바닐라\r
\r
구조가 정해져 있습니다. 이 3단 구조를 지켜야 합니다.\r
\r
\`\`\`html\r
<link rel="stylesheet" href="./effects/_core/core.css" />\r
<link rel="stylesheet" href="./effects/flip-card/style.css" />\r
\r
<div class="skill fx-flip-card fx-flip">\r
  <div class="fx-flip-card__inner">\r
\r
    <div class="fx-flip-card__face fx-flip-card__face--front">\r
      <h3 class="fx-flip__title">React</h3>\r
      <p class="fx-flip__body">컴포넌트 설계 · 상태관리</p>\r
      <span class="fx-flip__hint">뒤집어 보기 →</span>\r
    </div>\r
\r
    <div class="fx-flip-card__face fx-flip-card__face--back">\r
      <h3 class="fx-flip__title">3년</h3>\r
      <p class="fx-flip__body">Next.js SSR · Zustand · React Query</p>\r
    </div>\r
\r
  </div>\r
</div>\r
\r
<script type="module">\r
  import { mount } from './effects/flip-card/index.js';\r
  mount('.skill');\r
<\/script>\r
\`\`\`\r
\r
> 클래스 대신 \`data-fx-face="front"\` / \`data-fx-face="back"\`을 써도 됩니다.\r
\r
## 2. 붙이기 — React\r
\r
컴포넌트가 구조를 만들어주므로 마크업 실수가 원천 차단됩니다.\r
\r
\`\`\`jsx\r
import { FlipCard } from './effects/flip-card/react.jsx';\r
\r
<FlipCard\r
  className="fx-flip"\r
  front={<>\r
    <h3 className="fx-flip__title">React</h3>\r
    <p className="fx-flip__body">컴포넌트 설계 · 상태관리</p>\r
  </>}\r
  back={<>\r
    <h3 className="fx-flip__title">3년</h3>\r
    <p className="fx-flip__body">Next.js SSR · Zustand</p>\r
  </>}\r
/>\r
\`\`\`\r
\r
---\r
\r
## 3. 옵션\r
\r
| 옵션 | 기본값 | 설명 |\r
|---|---|---|\r
| \`trigger\` | \`'both'\` | \`'both'\` = 마우스는 hover, 터치는 tap **(권장)** / \`'hover'\` / \`'click'\` |\r
| \`axis\` | \`'y'\` | \`'y'\` 좌우 뒤집기 / \`'x'\` 위아래 뒤집기 |\r
| \`direction\` | \`1\` | \`-1\`이면 반대 방향으로 회전 |\r
| \`duration\` | \`600\` | 회전 시간(ms). **500~700이 자연스럽고 300 이하는 싸구려로 보입니다** |\r
| \`perspective\` | \`1400\` | 원근 거리(px). 작을수록 회전 중 왜곡이 큼 |\r
| \`flipOnFocus\` | \`true\` | 키보드 포커스 시 자동으로 뒤집기 |\r
| \`asButton\` | \`true\` | 카드에 \`role="button"\` 부여. **뒷면에 링크가 있으면 \`false\`로** |\r
\r
---\r
\r
## 4. 접근성 — 이 효과의 진짜 가치\r
\r
웹에 있는 플립 카드 대부분이 빠뜨리는 것들입니다.\r
\r
| 처리한 것 | 안 하면 생기는 일 |\r
|---|---|\r
| 안 보이는 면에 \`inert\` + \`aria-hidden\` | 스크린 리더가 **앞뒤 내용을 연달아 읽습니다** |\r
| \`inert\` 미지원 브라우저 \`tabindex\` 폴백 | Tab을 누르면 **안 보이는 버튼으로 포커스가 사라집니다** |\r
| Enter / Space 지원 + Space 스크롤 차단 | 키보드로 뒷면에 도달할 방법이 없습니다 |\r
| Escape로 되돌리기 | 뒤집힌 채 갇힙니다 |\r
| 포커스가 안에 있으면 hover 해제해도 유지 | 마우스를 떼는 순간 읽던 내용이 사라집니다 |\r
| 뒷면 링크 클릭 시 토글 안 함 | 링크를 누를 때마다 카드가 뒤집힙니다 |\r
\r
### \`asButton\`을 언제 끄나\r
\r
뒷면에 **링크나 버튼이 들어 있으면 반드시 \`false\`**로 두세요.\r
버튼 안의 버튼은 접근성 위반이고, 스크린 리더에서 구조가 깨집니다.\r
\r
\`\`\`js\r
mount('.skill', { asButton: false });\r
\`\`\`\r
\r
---\r
\r
## 5. 외부에서 제어하기\r
\r
\`\`\`js\r
const handle = mount('.skill');\r
\r
handle.api.flip();          // 토글\r
handle.api.show('back');    // 뒷면 보이기\r
handle.api.show('front');   // 앞면 보이기\r
handle.api.flipped;         // 현재 상태(boolean)\r
\`\`\`\r
\r
여러 개를 마운트했다면 개별 제어는 \`handle.items[i].api\`를 씁니다.\r
\r
뒤집힐 때마다 이벤트도 발행됩니다.\r
\r
\`\`\`js\r
document.addEventListener('fx:flip-card:flip', (e) => {\r
  console.log(e.target, e.detail.flipped);\r
});\r
\`\`\`\r
\r
---\r
\r
## 6. 자주 겪는 문제\r
\r
**Q. 카드 높이가 0입니다.**\r
→ **앞면**이 카드 높이를 결정합니다. 앞면에 내용이 없거나 절대 배치되어 있으면 높이가 0이 됩니다.\r
\`.fx-flip\`의 \`min-height\`를 조절하거나 앞면에 실제 콘텐츠를 넣으세요.\r
\r
**Q. 뒷면이 앞면을 통해 비쳐 보입니다.**\r
→ 뒷면 배경이 반투명한 경우입니다. **불투명한 배경**을 주세요. \`backface-visibility\`는 자기 자신의 뒷면만 가립니다.\r
\r
**Q. Safari에서 회전 중 깜빡입니다.**\r
→ \`.fx-flip-card__face\`의 \`transform: translateZ(0)\`이 이미 완화 처리입니다.\r
그래도 남으면 face 안의 자식에 \`filter\`나 \`backdrop-filter\`가 있는지 확인하세요. 이 둘이 3D 컨텍스트와 충돌합니다.\r
\r
**Q. 터치에서 뒤집히지 않습니다.**\r
→ \`trigger: 'both'\`는 터치 기기에서 **탭**으로 동작합니다. 사용자에게 알려주는 힌트(\`.fx-flip__hint\`)를 꼭 넣으세요.\r
아무 표시가 없으면 뒷면이 있다는 걸 아무도 모릅니다.\r
\r
**Q. 두 면의 높이가 달라서 뒷면 내용이 잘립니다.**\r
→ 앞면 기준으로 높이가 잡히므로, 뒷면이 더 길면 넘칩니다.\r
\`.fx-flip\`의 \`min-height\`를 늘리거나 뒷면 내용을 줄이세요. 뒷면에 \`overflow: auto\`는 3D 컨텍스트를 평탄화하므로 **피하세요.**\r
`,Vy=`/**\r
 * flip-card — 앞뒤가 뒤집히는 3D 카드\r
 * ───────────────────────────────────────────────────────────\r
 * 티어 T0 · 추가 용량 0KB · 모든 환경에서 동작\r
 *\r
 * 회전 자체는 CSS가 100% 담당합니다. JS는 애니메이션을 전혀 건드리지 않고\r
 * "상태와 접근성"만 관리합니다. 그래서 이 효과는 가드에 걸려 꺼져도\r
 * 여전히 클릭으로 뒤집힙니다(트랜지션만 사라짐).\r
 *\r
 * JS가 하는 일 4가지:\r
 *  1. hover / tap 트리거를 기기에 맞게 자동 선택\r
 *  2. 키보드(Enter/Space) 지원 + 포커스 시 자동 뒤집기\r
 *  3. 보이지 않는 면을 스크린 리더와 Tab 순서에서 제외\r
 *     ← 이걸 빼먹은 플립 카드가 웹의 대부분입니다. 뒷면 내용을\r
 *        스크린 리더가 그냥 읽어버리고, Tab을 누르면 안 보이는\r
 *        버튼으로 포커스가 사라집니다.\r
 *  4. inert 미지원 브라우저 폴백\r
 */\r
\r
import { defineEffect, canHover } from '../_core/index.js';\r
\r
const SUPPORTS_INERT =\r
  typeof HTMLElement !== 'undefined' && 'inert' in HTMLElement.prototype;\r
\r
const FOCUSABLE =\r
  'a[href],button,input,select,textarea,[tabindex]:not([tabindex="-1"])';\r
\r
/**\r
 * 면 하나를 "존재하지만 접근 불가" 상태로 만듭니다.\r
 * inert가 있으면 그걸 쓰고, 없으면 tabindex를 직접 관리합니다.\r
 */\r
function setFaceHidden(face, hidden) {\r
  if (!face) return;\r
\r
  face.setAttribute('aria-hidden', hidden ? 'true' : 'false');\r
\r
  if (SUPPORTS_INERT) {\r
    face.inert = hidden;\r
    return;\r
  }\r
\r
  // 폴백: 포커스 가능한 자손의 tabindex를 임시로 -1로 바꿉니다.\r
  const nodes = face.querySelectorAll(FOCUSABLE);\r
  for (const node of nodes) {\r
    if (hidden) {\r
      if (!node.hasAttribute('data-fx-prev-tabindex')) {\r
        node.setAttribute('data-fx-prev-tabindex', node.getAttribute('tabindex') ?? '');\r
      }\r
      node.setAttribute('tabindex', '-1');\r
    } else {\r
      const prev = node.getAttribute('data-fx-prev-tabindex');\r
      if (prev === null) continue;\r
      if (prev === '') node.removeAttribute('tabindex');\r
      else node.setAttribute('tabindex', prev);\r
      node.removeAttribute('data-fx-prev-tabindex');\r
    }\r
  }\r
}\r
\r
export const mount = defineEffect({\r
  name: 'flip-card',\r
\r
  defaults: {\r
    /**\r
     * 'both'  → 마우스 환경은 hover, 터치 환경은 tap (권장)\r
     * 'hover' → 항상 hover\r
     * 'click' → 항상 클릭/탭 토글\r
     */\r
    trigger: 'both',\r
    /** 'y' = 좌우로 뒤집기(기본) / 'x' = 위아래로 뒤집기 */\r
    axis: 'y',\r
    /** 회전 방향. 1 또는 -1 */\r
    direction: 1,\r
    /** 회전 시간(ms). 500~700이 자연스럽고, 300 이하는 싸구려로 보입니다. */\r
    duration: 600,\r
    /** 원근 거리(px). 작을수록 회전 시 왜곡이 큽니다. */\r
    perspective: 1400,\r
    /** 키보드 포커스 시 자동으로 뒤집기 */\r
    flipOnFocus: true,\r
    /**\r
     * 카드 자체를 버튼으로 만들지 여부.\r
     * 뒷면에 링크/버튼이 들어 있다면 false로 두세요\r
     * (버튼 안의 버튼은 접근성 위반입니다).\r
     */\r
    asButton: true,\r
  },\r
\r
  guard: {\r
    // 트랜지션 시간은 core.css의 reduced-motion 규칙이 0으로 만듭니다.\r
    // 효과 자체는 계속 살아 있어야 뒷면을 볼 수 있습니다.\r
    motion: 'ignore',\r
    pointer: 'any',\r
  },\r
\r
  setup({ el, opts, on, addCleanup, setVar, emit }) {\r
    /* --- 1. 구조 확인 ------------------------------------------------ */\r
\r
    const inner = el.querySelector('.fx-flip-card__inner');\r
    const front =\r
      el.querySelector('[data-fx-face="front"]') ||\r
      el.querySelector('.fx-flip-card__face--front');\r
    const back =\r
      el.querySelector('[data-fx-face="back"]') ||\r
      el.querySelector('.fx-flip-card__face--back');\r
\r
    if (!inner || !front || !back) {\r
      console.warn(\r
        '[fx:flip-card] 구조가 맞지 않습니다. README의 마크업을 확인하세요.\\n' +\r
          '  .fx-flip-card > .fx-flip-card__inner > (.fx-flip-card__face--front, --back)'\r
      );\r
      return;\r
    }\r
\r
    /* --- 2. 정적 설정 ------------------------------------------------ */\r
\r
    setVar('--fx-flip-duration', \`\${opts.duration}ms\`);\r
    setVar('--fx-flip-perspective', \`\${opts.perspective}px\`);\r
    setVar('--fx-flip-deg', \`\${opts.direction < 0 ? -180 : 180}deg\`);\r
    el.dataset.fxFlipAxis = opts.axis === 'x' ? 'x' : 'y';\r
\r
    /* --- 3. 접근성 속성 ---------------------------------------------- */\r
\r
    // 이미 버튼/링크라면 role·tabindex를 덧씌우지 않습니다(중복 시맨틱 방지).\r
    const nativelyInteractive =\r
      el.tagName === 'BUTTON' || (el.tagName === 'A' && el.hasAttribute('href'));\r
    const restore = [];\r
\r
    const setAttr = (node, name, value) => {\r
      restore.push([node, name, node.getAttribute(name)]);\r
      node.setAttribute(name, value);\r
    };\r
\r
    if (!nativelyInteractive) {\r
      if (!el.hasAttribute('tabindex')) setAttr(el, 'tabindex', '0');\r
      if (opts.asButton) {\r
        if (!el.hasAttribute('role')) setAttr(el, 'role', 'button');\r
        setAttr(el, 'aria-pressed', 'false');\r
      }\r
    }\r
\r
    addCleanup(() => {\r
      for (const [node, name, prev] of restore.reverse()) {\r
        if (prev === null) node.removeAttribute(name);\r
        else node.setAttribute(name, prev);\r
      }\r
    });\r
\r
    /* --- 4. 상태 ----------------------------------------------------- */\r
\r
    let flipped = false;\r
\r
    const sync = () => {\r
      el.classList.toggle('is-flipped', flipped);\r
      if (el.hasAttribute('aria-pressed')) {\r
        el.setAttribute('aria-pressed', String(flipped));\r
      }\r
      setFaceHidden(front, flipped);\r
      setFaceHidden(back, !flipped);\r
      emit('flip', { flipped });\r
    };\r
\r
    const set = (next) => {\r
      if (next === flipped) return;\r
      flipped = next;\r
      sync();\r
    };\r
\r
    /* --- 5. 트리거 선택 ---------------------------------------------- */\r
\r
    const fine = canHover();\r
    const useHover = opts.trigger === 'hover' || (opts.trigger === 'both' && fine);\r
    const useClick = opts.trigger === 'click' || (opts.trigger === 'both' && !fine);\r
\r
    if (useHover) {\r
      on(el, 'pointerenter', (e) => {\r
        if (e.pointerType === 'touch') return;\r
        set(true);\r
      });\r
      on(el, 'pointerleave', (e) => {\r
        if (e.pointerType === 'touch') return;\r
        // 포커스가 카드 안에 남아 있으면 유지합니다(키보드 사용자 배려).\r
        if (el.contains(document.activeElement) && opts.flipOnFocus) return;\r
        set(false);\r
      });\r
    }\r
\r
    if (useClick) {\r
      on(el, 'click', (event) => {\r
        // 뒷면의 링크를 눌렀다면 카드를 토글하지 않습니다.\r
        if (event.target.closest('a[href],button,input,select,textarea')) return;\r
        set(!flipped);\r
      });\r
    }\r
\r
    // 키보드는 트리거 종류와 무관하게 항상 지원합니다.\r
    on(el, 'keydown', (event) => {\r
      if (event.key !== 'Enter' && event.key !== ' ' && event.key !== 'Spacebar') return;\r
      if (event.target !== el) return; // 내부 버튼의 Enter를 가로채지 않습니다\r
      event.preventDefault(); // Space로 페이지가 스크롤되는 것 방지\r
      set(!flipped);\r
    });\r
\r
    on(el, 'keydown', (event) => {\r
      if (event.key === 'Escape' && flipped) set(false);\r
    });\r
\r
    if (opts.flipOnFocus) {\r
      on(el, 'focusin', () => set(true));\r
      on(el, 'focusout', (event) => {\r
        // 카드 내부로 포커스가 이동한 경우는 유지합니다.\r
        if (el.contains(event.relatedTarget)) return;\r
        if (el.matches(':hover') && useHover) return;\r
        set(false);\r
      });\r
    }\r
\r
    /* --- 6. 초기화 & 정리 -------------------------------------------- */\r
\r
    sync();\r
\r
    addCleanup(() => {\r
      el.classList.remove('is-flipped');\r
      setFaceHidden(front, false);\r
      setFaceHidden(back, false);\r
      delete el.dataset.fxFlipAxis;\r
      for (const prop of [\r
        '--fx-flip-duration', '--fx-flip-perspective', '--fx-flip-deg',\r
      ]) {\r
        el.style.removeProperty(prop);\r
      }\r
    });\r
\r
    // 외부에서 제어할 수 있게 API를 돌려줍니다: getEffect(el,'flip-card').api\r
    return {\r
      flip: () => set(!flipped),\r
      show: (side) => set(side === 'back'),\r
      get flipped() {\r
        return flipped;\r
      },\r
    };\r
  },\r
});\r
\r
export default mount;\r
`,Yy=`/**\r
 * flip-card / react.jsx\r
 *\r
 * 구조(inner/face)를 컴포넌트가 만들어주므로 마크업 실수가 원천 차단됩니다.\r
 */\r
\r
import React, { forwardRef } from 'react';\r
import { useFx, mergeRefs } from '../_core/react.js';\r
import { mount } from './index.js';\r
\r
import '../_core/core.css';\r
import './style.css';\r
\r
/** 훅 버전 — 직접 만든 마크업에 붙일 때. 구조는 README를 따라야 합니다. */\r
export function useFlip(options, deps = []) {\r
  return useFx(mount, options, deps);\r
}\r
\r
/**\r
 * <FlipCard\r
 *   className="fx-flip"\r
 *   front={<><h3 className="fx-flip__title">React</h3><p className="fx-flip__body">…</p></>}\r
 *   back={<p className="fx-flip__body">3년 · 상태관리 · SSR</p>}\r
 * />\r
 */\r
export const FlipCard = forwardRef(function FlipCard(\r
  {\r
    front,\r
    back,\r
    children,\r
    className = '',\r
    innerClassName = '',\r
    frontClassName = '',\r
    backClassName = '',\r
    deps = [],\r
    trigger,\r
    axis,\r
    direction,\r
    duration,\r
    perspective,\r
    flipOnFocus,\r
    asButton,\r
    guard,\r
    ...rest\r
  },\r
  forwardedRef\r
) {\r
  const options = {};\r
  const raw = { trigger, axis, direction, duration, perspective, flipOnFocus, asButton, guard };\r
  for (const key in raw) if (raw[key] !== undefined) options[key] = raw[key];\r
\r
  const ref = useFlip(options, deps);\r
\r
  return (\r
    <div ref={mergeRefs(ref, forwardedRef)} className={\`fx-flip-card \${className}\`} {...rest}>\r
      <div className={\`fx-flip-card__inner \${innerClassName}\`}>\r
        <div\r
          className={\`fx-flip-card__face fx-flip-card__face--front \${frontClassName}\`}\r
          data-fx-face="front"\r
        >\r
          {front ?? children}\r
        </div>\r
        <div\r
          className={\`fx-flip-card__face fx-flip-card__face--back \${backClassName}\`}\r
          data-fx-face="back"\r
        >\r
          {back}\r
        </div>\r
      </div>\r
    </div>\r
  );\r
});\r
\r
export default FlipCard;\r
`,qy=`/**\r
 * flip-card / style.css\r
 * _core/core.css 를 먼저 불러오세요.\r
 *\r
 * 회전은 100% CSS입니다. JS는 .is-flipped 클래스만 토글합니다.\r
 * 즉 JS가 실패해도, 가드에 걸려 꺼져도 카드는 여전히 읽을 수 있습니다.\r
 */\r
\r
/* ================================================================== *\r
 * 1. 기능부 (필수)\r
 * ================================================================== */\r
\r
.fx-flip-card {\r
  position: relative;\r
  perspective: var(--fx-flip-perspective, 1400px);\r
  cursor: pointer;\r
  /* 터치에서 탭 시 파란 하이라이트 제거 */\r
  -webkit-tap-highlight-color: transparent;\r
}\r
\r
.fx-flip-card__inner {\r
  position: relative;\r
  width: 100%;\r
  height: 100%;\r
  transform-style: preserve-3d;\r
  transition: transform var(--fx-flip-duration, 600ms) var(--fx-ease);\r
}\r
\r
.fx-flip-card__face {\r
  /* 뒤집혔을 때 반대쪽 면이 비쳐 보이지 않게 합니다. */\r
  backface-visibility: hidden;\r
  -webkit-backface-visibility: hidden;\r
  border-radius: inherit;\r
  /*\r
   * Safari에서 preserve-3d 자식이 깜빡이는 문제를 완화합니다.\r
   * (합성 레이어를 미리 만들게 하는 오래된 트릭)\r
   */\r
  transform: translateZ(0);\r
}\r
\r
/*\r
 * 앞면은 문서 흐름에 남겨서 카드 높이를 결정하게 하고,\r
 * 뒷면만 그 위에 절대 배치합니다.\r
 * → 고정 height 없이 콘텐츠 높이에 자동으로 맞습니다.\r
 */\r
.fx-flip-card__face--back {\r
  position: absolute;\r
  inset: 0;\r
  transform: rotateY(var(--fx-flip-deg, 180deg));\r
}\r
\r
.fx-flip-card.is-flipped .fx-flip-card__inner {\r
  transform: rotateY(var(--fx-flip-deg, 180deg));\r
}\r
\r
/* ------------------------------------------------------------------ *\r
 * 축 변경: 위아래로 뒤집기\r
 * ------------------------------------------------------------------ */\r
.fx-flip-card[data-fx-flip-axis='x'] .fx-flip-card__face--back {\r
  transform: rotateX(var(--fx-flip-deg, 180deg));\r
}\r
.fx-flip-card[data-fx-flip-axis='x'].is-flipped .fx-flip-card__inner {\r
  transform: rotateX(var(--fx-flip-deg, 180deg));\r
}\r
\r
/* ------------------------------------------------------------------ *\r
 * will-change는 회전 중에만.\r
 * 카드가 12장이면 12개의 GPU 레이어를 상시 유지하게 되므로 피합니다.\r
 * ------------------------------------------------------------------ */\r
.fx-flip-card:hover .fx-flip-card__inner,\r
.fx-flip-card:focus-within .fx-flip-card__inner,\r
.fx-flip-card.is-flipped .fx-flip-card__inner {\r
  will-change: transform;\r
}\r
\r
/* 포커스 링은 카드 전체에 */\r
.fx-flip-card:focus-visible {\r
  outline: 2px solid var(--fx-accent);\r
  outline-offset: 4px;\r
  border-radius: var(--fx-radius, 16px);\r
}\r
\r
/* ================================================================== *\r
 * 2. 선택 사항 — 기본 스킨\r
 * ================================================================== */\r
\r
.fx-flip {\r
  border-radius: var(--fx-radius, 16px);\r
  min-height: 200px;\r
}\r
\r
.fx-flip .fx-flip-card__face {\r
  display: flex;\r
  flex-direction: column;\r
  justify-content: center;\r
  gap: 8px;\r
  height: 100%;\r
  padding: 24px;\r
  border-radius: var(--fx-radius, 16px);\r
  border: 1px solid var(--fx-border);\r
  box-shadow: var(--fx-shadow);\r
  color: var(--fx-text);\r
}\r
\r
.fx-flip .fx-flip-card__face--front {\r
  background: var(--fx-surface);\r
}\r
\r
.fx-flip .fx-flip-card__face--back {\r
  background: linear-gradient(\r
    145deg,\r
    var(--fx-accent),\r
    color-mix(in srgb, var(--fx-accent) 55%, #000)\r
  );\r
  color: #fff;\r
}\r
\r
.fx-flip__title {\r
  margin: 0;\r
  font-size: 1.125rem;\r
  font-weight: 650;\r
  letter-spacing: -0.01em;\r
}\r
\r
.fx-flip__body {\r
  margin: 0;\r
  font-size: 0.875rem;\r
  line-height: 1.6;\r
  color: var(--fx-text-dim);\r
}\r
\r
.fx-flip .fx-flip-card__face--back .fx-flip__body {\r
  color: rgba(255, 255, 255, 0.85);\r
}\r
\r
/* "뒤집어 보세요" 힌트 — 터치 기기에서 특히 필요합니다 */\r
.fx-flip__hint {\r
  margin-top: auto;\r
  font-size: 0.75rem;\r
  font-weight: 600;\r
  letter-spacing: 0.02em;\r
  color: var(--fx-text-dim);\r
  opacity: 0.8;\r
}\r
\r
.fx-flip .fx-flip-card__face--back .fx-flip__hint {\r
  color: rgba(255, 255, 255, 0.7);\r
}\r
`,Ky=`/**\r
 * hover-preview — 리스트/카드 호버 시 커서를 따라 뜨는 썸네일\r
 * ───────────────────────────────────────────────────────────\r
 * 티어 T1 · 추가 용량 0KB · 포인터(마우스) 필요\r
 *\r
 * 포트폴리오 프로젝트 리스트의 표준 인터랙션입니다. 카드(.wf-card) 위에\r
 * 마우스를 올리면 그 카드의 이미지가 커서를 lerp로 따라다닙니다.\r
 * 이미지가 없는 카드에서는 아무 일도 일어나지 않습니다.\r
 *\r
 * rAF 루프는 **호버 중에만** 돕니다 — 커서가 카드를 떠나고 프리뷰가\r
 * 사라지면 루프도 멈춥니다. 상시 루프는 이 프로젝트가 피하는 것입니다.\r
 */\r
\r
import { defineEffect, lerp, prefersReducedMotion } from '../_core/index.js';\r
\r
export const mount = defineEffect({\r
  name: 'hover-preview',\r
\r
  defaults: {\r
    /** 프리뷰 폭(px) */\r
    width: 240,\r
    /** 따라오는 속도 0..1 — 클수록 즉각적입니다 */\r
    speed: 0.16,\r
    /** 커서에서 얼마나 떨어져 뜨는지(px) */\r
    offsetX: 24,\r
    offsetY: -20,\r
    /** 살짝 기울이기(도). 0이면 수평 */\r
    rotate: 3,\r
    /** 프리뷰를 찾을 카드 선택자 */\r
    card: '.wf-card',\r
  },\r
\r
  guard: {\r
    /* 터치에는 호버가 없습니다 — 마우스가 있을 때만. */\r
    pointer: 'fine',\r
    motion: 'ignore', // 커서를 따르는 것은 입력 반응이라 두되, 아래에서 lerp만 끕니다\r
  },\r
\r
  setup({ el, opts, on, addCleanup }) {\r
    const doc = el.ownerDocument;\r
    const cards = [...el.querySelectorAll(opts.card)];\r
    if (!cards.length) return;\r
\r
    /* 프리뷰 한 장을 영역마다 하나만 만듭니다. */\r
    const float = doc.createElement('div');\r
    float.className = 'fx-hover-preview__float';\r
    float.style.width = \`\${opts.width}px\`;\r
    float.setAttribute('aria-hidden', 'true');\r
    const img = doc.createElement('img');\r
    img.alt = '';\r
    float.appendChild(img);\r
    doc.body.appendChild(float);\r
    addCleanup(() => float.remove());\r
\r
    let x = 0, y = 0;        // 현재 위치(lerp 결과)\r
    let tx = 0, ty = 0;      // 목표 위치(커서)\r
    let raf = 0;\r
    let active = false;\r
    const instant = prefersReducedMotion(); // 동작 줄이기: 따라오되 관성 없이\r
\r
    const step = () => {\r
      const k = instant ? 1 : opts.speed;\r
      x = lerp(x, tx, k);\r
      y = lerp(y, ty, k);\r
      float.style.transform =\r
        \`translate(\${(x + opts.offsetX).toFixed(1)}px, \${(y + opts.offsetY).toFixed(1)}px) rotate(\${opts.rotate}deg)\`;\r
      /* 목표에 붙었고 호버도 끝났으면 루프를 세웁니다. */\r
      if (!active && Math.abs(x - tx) < 0.5 && Math.abs(y - ty) < 0.5) { raf = 0; return; }\r
      raf = doc.defaultView.requestAnimationFrame(step);\r
    };\r
    const kick = () => { if (!raf) raf = doc.defaultView.requestAnimationFrame(step); };\r
    addCleanup(() => { if (raf) doc.defaultView.cancelAnimationFrame(raf); });\r
\r
    for (const card of cards) {\r
      const src = card.querySelector('img')?.currentSrc || card.querySelector('img')?.src;\r
      if (!src) continue; // 이미지 없는 카드는 조용히 통과\r
\r
      on(card, 'pointerenter', (e) => {\r
        img.src = src;\r
        active = true;\r
        /* 첫 프레임이 (0,0)에서 날아오지 않게 커서 위치에서 시작합니다. */\r
        x = tx = e.clientX; y = ty = e.clientY;\r
        float.classList.add('is-on');\r
        kick();\r
      });\r
      on(card, 'pointermove', (e) => { tx = e.clientX; ty = e.clientY; kick(); });\r
      on(card, 'pointerleave', () => {\r
        active = false;\r
        float.classList.remove('is-on');\r
      });\r
    }\r
  },\r
});\r
\r
export default mount;\r
`,Xy=`/**\r
 * hover-preview / style.css\r
 */\r
\r
.fx-hover-preview__float {\r
  position: fixed;\r
  top: 0;\r
  left: 0;\r
  z-index: 55;\r
  pointer-events: none;\r
  overflow: hidden;\r
  border-radius: 10px;\r
  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.28);\r
  opacity: 0;\r
  scale: 0.86;\r
  transition: opacity 200ms ease, scale 240ms cubic-bezier(0.2, 0.7, 0.2, 1);\r
}\r
\r
.fx-hover-preview__float.is-on {\r
  opacity: 1;\r
  scale: 1;\r
}\r
\r
.fx-hover-preview__float img {\r
  display: block;\r
  width: 100%;\r
  height: auto;\r
}\r
\r
@media (prefers-reduced-motion: reduce) {\r
  .fx-hover-preview__float { transition: opacity 150ms ease; scale: 1; }\r
}\r
`,Qy=`/**\r
 * effects/index.js\r
 * 전체 배럴. 여러 효과를 한 번에 쓸 때 편합니다.\r
 *\r
 *   import { tiltCard, scrollReveal } from './effects/index.js';\r
 *   tiltCard('.card');\r
 *   scrollReveal('.reveal', { preset: 'flip' });\r
 *\r
 * ⚠️ 이 파일을 import하면 8개 효과의 JS가 전부 로드됩니다(각 2~6KB).\r
 *    한두 개만 쓴다면 개별 폴더에서 직접 import하는 편이 가볍습니다:\r
 *      import { mount } from './effects/tilt-card/index.js';\r
 *\r
 *    OGL(8KB)과 model-viewer(150KB+)는 여기 포함되지 않습니다.\r
 *    해당 효과를 실제로 마운트할 때만 지연 로드됩니다.\r
 */\r
\r
import { mount as tiltCard } from './tilt-card/index.js';\r
import { mount as parallaxLayers } from './parallax-layers/index.js';\r
import { mount as flipCard } from './flip-card/index.js';\r
import { mount as magneticButton } from './magnetic-button/index.js';\r
import { mount as scrollReveal } from './scroll-reveal/index.js';\r
import { mount as silkBg } from './silk-bg/index.js';\r
import { mount as dotGridWave } from './dot-grid-wave/index.js';\r
import { mount as character } from './character/index.js';\r
import { mount as modelShowcase } from './model-showcase/index.js';\r
import { mount as hoverPreview } from './hover-preview/index.js';\r
import { mount as textScramble } from './text-scramble/index.js';\r
import { mount as smoothScroll } from './smooth-scroll/index.js';\r
import { mount as cursorDot } from './cursor-dot/index.js';\r
\r
export {\r
  tiltCard,\r
  parallaxLayers,\r
  flipCard,\r
  magneticButton,\r
  scrollReveal,\r
  silkBg,\r
  dotGridWave,\r
  character,\r
  modelShowcase,\r
  hoverPreview,\r
  textScramble,\r
  smoothScroll,\r
  cursorDot,\r
};\r
\r
export {\r
  defineEffect,\r
  getEffect,\r
  destroyAll,\r
  prefersReducedMotion,\r
  supportsWebGL,\r
  deviceTier,\r
  setCDN,\r
  prefetch,\r
  VERSION,\r
} from './_core/index.js';\r
\r
/**\r
 * data-fx 속성만으로 효과를 켭니다. HTML만 고쳐서 붙였다 뗐다 할 수 있습니다.\r
 *\r
 *   <article data-fx="tilt">…</article>\r
 *   <section data-fx="silk">…</section>\r
 *\r
 *   import { autoMount } from './effects/index.js';\r
 *   const fx = autoMount();\r
 *   fx.destroy();   // 전부 해제\r
 *\r
 * model-showcase는 src가 필수라 자동 마운트 대상이 아닙니다.\r
 *\r
 * @param {Record<string, {selector?: string, options?: object}|false>} overrides\r
 *   특정 효과의 선택자/옵션을 바꾸거나, false로 두어 제외합니다.\r
 */\r
export function autoMount(overrides = {}) {\r
  const TABLE = {\r
    tilt: { fn: tiltCard, selector: '[data-fx="tilt"]' },\r
    parallax: { fn: parallaxLayers, selector: '[data-fx="parallax"]' },\r
    flip: { fn: flipCard, selector: '[data-fx="flip"]' },\r
    magnetic: { fn: magneticButton, selector: '[data-fx="magnetic"]' },\r
    reveal: { fn: scrollReveal, selector: '[data-fx="reveal"]' },\r
    silk: { fn: silkBg, selector: '[data-fx="silk"]' },\r
    dots: { fn: dotGridWave, selector: '[data-fx="dots"]' },\r
    character: { fn: character, selector: '[data-fx="character"]' },\r
  };\r
\r
  const handles = [];\r
\r
  for (const [key, entry] of Object.entries(TABLE)) {\r
    const override = overrides[key];\r
    if (override === false) continue;\r
\r
    const selector = override?.selector ?? entry.selector;\r
    const options = override?.options ?? {};\r
\r
    // 해당 요소가 없으면 조용히 건너뜁니다(경고를 띄우지 않기 위해 미리 확인).\r
    if (!document.querySelector(selector)) continue;\r
\r
    handles.push(entry.fn(selector, options));\r
  }\r
\r
  return {\r
    handles,\r
    destroy: () => handles.forEach((h) => h.destroy()),\r
  };\r
}\r
`,Zy=`# \`magnetic-button\` — 자석 버튼\r
\r
> **티어 T1** · 추가 용량 **0KB** · 의존성 없음 · 마우스 환경 전용\r
\r
커서가 다가오면 버튼이 **마중 나갑니다.** 안의 라벨은 버튼보다 더 움직여서 두께감을 만들고,\r
아주 약한 \`rotateX/Y\`가 얹혀 3D 감각을 더합니다.\r
\r
포트폴리오의 **CTA(연락하기 / 이력서 보기)** 딱 1~2개에만 쓰세요. 남발하면 정신없습니다.\r
\r
---\r
\r
## 1. 붙이기 — 바닐라\r
\r
\`\`\`html\r
<link rel="stylesheet" href="./effects/_core/core.css" />\r
<link rel="stylesheet" href="./effects/magnetic-button/style.css" />\r
\r
<a class="cta fx-btn" href="mailto:me@example.com">\r
  <span data-fx-label>연락하기</span>\r
</a>\r
\r
<script type="module">\r
  import { mount } from './effects/magnetic-button/index.js';\r
  mount('.cta');\r
<\/script>\r
\`\`\`\r
\r
> **\`data-fx-label\`이 핵심입니다.** 이게 없으면 버튼만 움직이고 라벨 시차가 사라져서\r
> 효과가 절반만 납니다. 텍스트를 반드시 \`<span data-fx-label>\`로 감싸세요.\r
\r
## 2. 붙이기 — React\r
\r
\`children\`이 자동으로 라벨로 감싸집니다.\r
\r
\`\`\`jsx\r
import { MagneticButton } from './effects/magnetic-button/react.jsx';\r
\r
<MagneticButton as="a" href="/resume.pdf" className="fx-btn" strength={0.4}>\r
  이력서 보기\r
</MagneticButton>\r
\`\`\`\r
\r
---\r
\r
## 3. 옵션\r
\r
| 옵션 | 기본값 | 설명 |\r
|---|---|---|\r
| \`strength\` | \`0.35\` | 커서 쪽으로 따라가는 비율(0~1). **0.3~0.45가 자연스럽고 0.6 넘으면 장난감 같습니다** |\r
| \`radius\` | \`110\` | 버튼 경계 **바깥으로** 자력이 미치는 거리(px) |\r
| \`labelFactor\` | \`0.5\` | 라벨이 추가로 움직이는 비율. **음수면 라벨이 반대로 밀려 유리 안에 갇힌 느낌** |\r
| \`scale\` | \`1.04\` | 자력 범위 안일 때 확대 배율 |\r
| \`rotate\` | \`6\` | 최대 기울기(도). \`0\`이면 평면 이동만 |\r
| \`speed\` | \`11\` | 따라오는 속도(감쇠 계수) |\r
| \`glow\` | \`true\` | 커서를 따라다니는 빛 번짐 |\r
\r
---\r
\r
## 4. 왜 hover가 아니라 "거리"인가\r
\r
hover 기반이면 커서가 버튼에 **닿는 순간** 반응이 시작됩니다. 자석 같지 않고 스위치 같습니다.\r
그래서 이 효과는 버튼 경계가 아니라 **중심으로부터의 거리**로 계산합니다.\r
닿기 전부터 서서히 끌려오기 시작해야 자석처럼 느껴집니다.\r
\r
### 감쇠에 smoothstep을 쓴 이유\r
\r
선형 감쇠(\`1 - d/r\`)는 반경 경계에서 기울기가 갑자기 끊깁니다 → 자력이 "툭" 하고 끊기는 게 보입니다.\r
\`smoothstep\`은 **양 끝에서 기울기가 0**이라 경계가 어디인지 눈에 보이지 않습니다.\r
\r
이 한 줄이 "만든 티 나는 자석"과 "그냥 자연스러운 자석"을 가릅니다.\r
\r
---\r
\r
## 5. 조합 레시피\r
\r
**유리 안에 갇힌 라벨** — 라벨이 반대로 밀립니다\r
\r
\`\`\`js\r
mount('.cta', { labelFactor: -0.35, rotate: 10, strength: 0.45 });\r
\`\`\`\r
\r
**평면 자석** — 3D 없이 이동만 (텍스트 링크에 어울립니다)\r
\r
\`\`\`js\r
mount('.text-link', { rotate: 0, scale: 1, glow: false, strength: 0.25, radius: 60 });\r
\`\`\`\r
\r
**강한 인력** — 히어로의 단 하나뿐인 CTA\r
\r
\`\`\`js\r
mount('.hero-cta', { strength: 0.5, radius: 180, scale: 1.07 });\r
\`\`\`\r
\r
---\r
\r
## 6. 접근성\r
\r
- **키보드 포커스 시에도 반응합니다.** 단 **이동 없이 확대와 글로우만** 줍니다.\r
  포커스만으로 버튼이 움직이면 키보드 사용자가 위치를 잃습니다.\r
- 터치 기기에서는 완전히 꺼집니다(\`pointer: fine\` 가드). "가까이 온다"는 개념이 없기 때문입니다.\r
- 동작 줄이기 사용자에게도 꺼집니다.\r
\r
버튼의 실제 클릭 영역은 **움직이지 않습니다.** \`transform\`은 히트 테스트 영역도 같이 옮기므로,\r
사용자가 보고 있는 위치와 클릭되는 위치는 항상 일치합니다.\r
\r
---\r
\r
## 7. 자주 겪는 문제\r
\r
**Q. 라벨이 안 움직입니다.**\r
→ \`data-fx-label\`을 안 달았습니다. devtools에서 요소에 \`data-fx-mag-label="none"\`이 있으면 확실합니다.\r
\r
**Q. 버튼이 잘립니다.**\r
→ \`.fx-magnetic-button\`에 \`overflow: hidden\`이 걸려 있습니다(글로우를 가두기 위해).\r
라벨이 버튼 밖으로 나가야 하는 디자인이면 \`overflow: visible\`로 바꾸고 글로우는 끄세요.\r
\r
**Q. 버튼이 여러 개인데 다 같이 움직입니다.**\r
→ 각자 자기 중심으로부터의 거리를 재므로 정상적으로는 그럴 수 없습니다.\r
\`mount('.btn')\`을 여러 번 호출했는지 확인하세요(중복 마운트는 \`_core\`가 막지만, 서로 다른 선택자로 겹쳐 부르면 옵션만 첫 번째가 남습니다).\r
\r
**Q. 스크롤하면 자력 위치가 어긋납니다.**\r
→ \`scroll\`/\`resize\`에서 캐시를 무효화하고 있습니다. 그래도 어긋나면\r
\`position: sticky\` 컨테이너 안에 있는 경우입니다. 이때는 부모에 스크롤 리스너가 따로 필요합니다.\r
\r
**Q. 버튼이 많은 페이지에서 무겁습니다.**\r
→ 버튼 1개당 \`window\`의 \`pointermove\` 리스너가 1개 붙습니다. 계산 자체는 아주 가볍지만\r
**10개를 넘기지 마세요.** 애초에 자석 버튼이 10개인 화면은 디자인 문제입니다.\r
`,Jy=`/**\r
 * magnetic-button — 커서를 끌어당기는 자석 버튼\r
 * ───────────────────────────────────────────────────────────\r
 * 티어 T1 · 추가 용량 0KB · 마우스 환경 전용\r
 *\r
 * 커서가 일정 거리 안에 들어오면 버튼이 마중 나가고,\r
 * 안의 라벨은 버튼보다 더/덜 움직여서 두께감을 만듭니다.\r
 * 여기에 아주 약한 rotateX/Y를 얹어 3D 감각을 더합니다.\r
 *\r
 * 왜 hover가 아니라 "거리"인가:\r
 *   hover 기반이면 커서가 버튼에 닿는 순간 뚝 하고 반응이 시작됩니다.\r
 *   자석은 닿기 전부터 서서히 끌려와야 자석처럼 느껴집니다.\r
 *   그래서 버튼 경계가 아니라 중심으로부터의 거리로 계산합니다.\r
 *\r
 * 감쇠(falloff)에 smoothstep을 쓰는 이유:\r
 *   선형 감쇠는 반경 경계에서 미분이 끊겨 "툭" 하고 끊기는 느낌이 납니다.\r
 *   smoothstep은 양 끝에서 기울기가 0이라 경계가 보이지 않습니다.\r
 */\r
\r
import { defineEffect, damp, clamp, round, createLoop } from '../_core/index.js';\r
\r
/** 0~1 구간을 부드러운 S자 커브로. 양 끝의 기울기가 0입니다. */\r
const smoothstep = (t) => t * t * (3 - 2 * t);\r
\r
export const mount = defineEffect({\r
  name: 'magnetic-button',\r
\r
  defaults: {\r
    /** 커서 쪽으로 따라가는 비율(0~1). 0.3~0.45가 자연스럽습니다. */\r
    strength: 0.35,\r
    /** 버튼 경계 바깥으로 몇 px까지 자력이 미치는지 */\r
    radius: 110,\r
    /** 라벨이 버튼 대비 추가로 움직이는 비율. 1보다 크면 라벨이 앞서갑니다. */\r
    labelFactor: 0.5,\r
    /** 자력 범위 안일 때 확대 배율 */\r
    scale: 1.04,\r
    /** 최대 기울기(도). 0이면 평면 이동만. 4~8이 은은합니다. */\r
    rotate: 6,\r
    /** 따라오는 속도(감쇠 계수) */\r
    speed: 11,\r
    /** 커서 위치를 따라가는 빛 번짐 */\r
    glow: true,\r
    /** 버튼에서 커서가 완전히 벗어나면 제자리로 */\r
    resetOnLeave: true,\r
  },\r
\r
  guard: {\r
    motion: 'skip',\r
    pointer: 'fine', // 터치에는 "가까이 오는" 개념이 없습니다\r
  },\r
\r
  setup({ el, opts, on, addCleanup, setVar, emit }) {\r
    /* --- 1. DOM 준비 ------------------------------------------------- */\r
\r
    if (getComputedStyle(el).position === 'static') {\r
      el.style.position = 'relative';\r
      addCleanup(() => {\r
        el.style.position = '';\r
      });\r
    }\r
\r
    // 라벨이 지정되지 않았으면 자동으로 감싸지 않습니다(마크업을 건드리지 않기 위해).\r
    // 대신 있으면 쓰고, 없으면 라벨 시차 없이 동작합니다.\r
    const label = el.querySelector('[data-fx-label]');\r
    if (!label) {\r
      // 조용히 넘어가되, 개발 중에 눈치챌 수 있게 표시만 남깁니다.\r
      el.dataset.fxMagLabel = 'none';\r
      addCleanup(() => delete el.dataset.fxMagLabel);\r
    }\r
\r
    let glowEl = null;\r
    if (opts.glow) {\r
      glowEl = document.createElement('span');\r
      glowEl.className = 'fx-magnetic-button__glow';\r
      glowEl.setAttribute('aria-hidden', 'true');\r
      el.appendChild(glowEl);\r
      addCleanup(() => glowEl.remove());\r
    }\r
\r
    setVar('--fx-mag-lf', opts.labelFactor);\r
\r
    /* --- 2. 상태 ----------------------------------------------------- */\r
\r
    const s = { x: 0, y: 0, rx: 0, ry: 0, sc: 1, g: 0, px: 50, py: 50 };\r
    const t = { x: 0, y: 0, rx: 0, ry: 0, sc: 1, g: 0, px: 50, py: 50 };\r
    const KEYS = ['x', 'y', 'rx', 'ry', 'sc', 'g', 'px', 'py'];\r
\r
    let rect = null;\r
    let engaged = false;\r
\r
    const invalidate = () => {\r
      rect = null;\r
    };\r
    on(window, 'scroll', invalidate, { passive: true });\r
    on(window, 'resize', invalidate, { passive: true });\r
\r
    const apply = () => {\r
      setVar('--fx-mag-x', \`\${round(s.x, 2)}px\`);\r
      setVar('--fx-mag-y', \`\${round(s.y, 2)}px\`);\r
      setVar('--fx-mag-rx', \`\${round(s.rx, 2)}deg\`);\r
      setVar('--fx-mag-ry', \`\${round(s.ry, 2)}deg\`);\r
      setVar('--fx-mag-scale', round(s.sc, 4));\r
      if (glowEl) {\r
        setVar('--fx-mag-px', \`\${round(s.px, 1)}%\`);\r
        setVar('--fx-mag-py', \`\${round(s.py, 1)}%\`);\r
        setVar('--fx-mag-glow', round(s.g, 3));\r
      }\r
    };\r
\r
    /* --- 3. 루프 ----------------------------------------------------- */\r
\r
    const settled = () => KEYS.every((k) => Math.abs(s[k] - t[k]) < 0.01);\r
\r
    const loop = createLoop((dt) => {\r
      for (const k of KEYS) s[k] = damp(s[k], t[k], opts.speed, dt);\r
      apply();\r
      if (!engaged && settled()) {\r
        for (const k of KEYS) s[k] = t[k];\r
        apply();\r
        loop.stop();\r
        el.dataset.fxMagnetic = '0';\r
      }\r
    });\r
    addCleanup(() => loop.stop());\r
\r
    const wake = () => {\r
      el.dataset.fxMagnetic = '1';\r
      loop.start();\r
    };\r
\r
    const release = () => {\r
      if (!engaged) return;\r
      engaged = false;\r
      t.x = 0;\r
      t.y = 0;\r
      t.rx = 0;\r
      t.ry = 0;\r
      t.sc = 1;\r
      t.g = 0;\r
      t.px = 50;\r
      t.py = 50;\r
      emit('leave');\r
    };\r
\r
    /* --- 4. 자력 계산 ------------------------------------------------- */\r
\r
    on(\r
      window,\r
      'pointermove',\r
      (event) => {\r
        if (event.pointerType === 'touch') return;\r
        if (!rect) rect = el.getBoundingClientRect();\r
        if (!rect.width) return;\r
\r
        const cx = rect.left + rect.width / 2;\r
        const cy = rect.top + rect.height / 2;\r
        const dx = event.clientX - cx;\r
        const dy = event.clientY - cy;\r
\r
        // 버튼 반경 + 여유 반경까지가 자력 범위\r
        const reach = Math.max(rect.width, rect.height) / 2 + opts.radius;\r
        const dist = Math.hypot(dx, dy);\r
\r
        if (dist > reach) {\r
          release();\r
          return;\r
        }\r
\r
        // 가까울수록 1, 경계에서 0. 경계에서 기울기도 0이라 끊김이 없습니다.\r
        const falloff = smoothstep(1 - dist / reach);\r
\r
        if (!engaged) {\r
          engaged = true;\r
          emit('enter');\r
        }\r
\r
        t.x = dx * opts.strength * falloff;\r
        t.y = dy * opts.strength * falloff;\r
        t.sc = 1 + (opts.scale - 1) * falloff;\r
        t.g = falloff;\r
\r
        if (opts.rotate) {\r
          // 커서가 오른쪽이면 오른쪽이 들리도록(=Y축 양의 회전)\r
          const nx = clamp(dx / (rect.width / 2 + opts.radius), -1, 1);\r
          const ny = clamp(dy / (rect.height / 2 + opts.radius), -1, 1);\r
          t.ry = nx * opts.rotate * falloff;\r
          t.rx = -ny * opts.rotate * falloff;\r
        }\r
\r
        // 글로우는 버튼 안에서의 커서 위치(0~100%)\r
        t.px = clamp(((event.clientX - rect.left) / rect.width) * 100, -20, 120);\r
        t.py = clamp(((event.clientY - rect.top) / rect.height) * 100, -20, 120);\r
\r
        wake();\r
      },\r
      { passive: true }\r
    );\r
\r
    // 커서가 창 밖으로 나가면 확실히 되돌립니다.\r
    on(document, 'pointerleave', () => {\r
      release();\r
      wake();\r
    });\r
\r
    if (opts.resetOnLeave) {\r
      on(window, 'blur', () => {\r
        release();\r
        wake();\r
      });\r
    }\r
\r
    // 키보드 포커스 시에도 살짝 반응 — 이동 없이 확대와 글로우만\r
    on(el, 'focusin', () => {\r
      t.sc = opts.scale;\r
      t.g = 1;\r
      wake();\r
    });\r
    on(el, 'focusout', () => {\r
      if (!engaged) {\r
        t.sc = 1;\r
        t.g = 0;\r
      }\r
    });\r
\r
    /* --- 5. 정리 ----------------------------------------------------- */\r
\r
    apply();\r
\r
    addCleanup(() => {\r
      for (const prop of [\r
        '--fx-mag-x', '--fx-mag-y', '--fx-mag-rx', '--fx-mag-ry',\r
        '--fx-mag-scale', '--fx-mag-px', '--fx-mag-py',\r
        '--fx-mag-glow', '--fx-mag-lf',\r
      ]) {\r
        el.style.removeProperty(prop);\r
      }\r
      delete el.dataset.fxMagnetic;\r
    });\r
  },\r
});\r
\r
export default mount;\r
`,ew=`/**\r
 * magnetic-button / react.jsx\r
 */\r
\r
import React, { forwardRef } from 'react';\r
import { useFx, mergeRefs } from '../_core/react.js';\r
import { mount } from './index.js';\r
\r
import '../_core/core.css';\r
import './style.css';\r
\r
/** 훅 버전 — 기존 버튼에 ref만 붙입니다. 라벨에 data-fx-label을 직접 다세요. */\r
export function useMagnetic(options, deps = []) {\r
  return useFx(mount, options, deps);\r
}\r
\r
/**\r
 * <MagneticButton as="a" href="/contact" className="fx-btn">\r
 *   연락하기\r
 * </MagneticButton>\r
 *\r
 * children은 자동으로 data-fx-label span에 감싸집니다.\r
 * 직접 구조를 짜고 싶으면 wrapLabel={false} 후 원하는 요소에 data-fx-label을 다세요.\r
 */\r
export const MagneticButton = forwardRef(function MagneticButton(\r
  {\r
    as: Tag = 'button',\r
    children,\r
    className = '',\r
    wrapLabel = true,\r
    labelClassName = '',\r
    deps = [],\r
    strength,\r
    radius,\r
    labelFactor,\r
    scale,\r
    rotate,\r
    speed,\r
    glow,\r
    resetOnLeave,\r
    guard,\r
    ...rest\r
  },\r
  forwardedRef\r
) {\r
  const options = {};\r
  const raw = { strength, radius, labelFactor, scale, rotate, speed, glow, resetOnLeave, guard };\r
  for (const key in raw) if (raw[key] !== undefined) options[key] = raw[key];\r
\r
  const ref = useMagnetic(options, deps);\r
\r
  return (\r
    <Tag ref={mergeRefs(ref, forwardedRef)} className={className} {...rest}>\r
      {wrapLabel ? (\r
        <span data-fx-label className={labelClassName}>\r
          {children}\r
        </span>\r
      ) : (\r
        children\r
      )}\r
    </Tag>\r
  );\r
});\r
\r
export default MagneticButton;\r
`,nw=`/**\r
 * magnetic-button / style.css\r
 * _core/core.css 를 먼저 불러오세요.\r
 */\r
\r
/* ================================================================== *\r
 * 1. 기능부 (필수)\r
 * ================================================================== */\r
\r
.fx-magnetic-button {\r
  position: relative;\r
  transform-style: preserve-3d;\r
\r
  transform:\r
    perspective(600px)\r
    translate3d(var(--fx-mag-x, 0px), var(--fx-mag-y, 0px), 0)\r
    rotateX(var(--fx-mag-rx, 0deg))\r
    rotateY(var(--fx-mag-ry, 0deg))\r
    scale(var(--fx-mag-scale, 1));\r
\r
  /* 글로우가 버튼 밖으로 새어나가지 않게 */\r
  overflow: hidden;\r
  isolation: isolate;\r
}\r
\r
.fx-magnetic-button[data-fx-magnetic='1'] {\r
  will-change: transform;\r
}\r
\r
/*\r
 * 라벨은 버튼보다 labelFactor 배만큼 "더" 움직입니다.\r
 * 이 미세한 어긋남이 버튼에 두께가 있다는 착각을 만듭니다.\r
 * labelFactor를 음수로 주면 라벨이 반대로 밀려 유리 안에 갇힌 느낌이 납니다.\r
 */\r
.fx-magnetic-button [data-fx-label] {\r
  position: relative;\r
  z-index: 1;\r
  display: inline-block;\r
  transform: translate3d(\r
    calc(var(--fx-mag-x, 0px) * var(--fx-mag-lf, 0.5)),\r
    calc(var(--fx-mag-y, 0px) * var(--fx-mag-lf, 0.5)),\r
    0\r
  );\r
  will-change: transform;\r
}\r
\r
/* 커서를 따라다니는 빛 번짐 */\r
.fx-magnetic-button__glow {\r
  position: absolute;\r
  inset: 0;\r
  z-index: 0;\r
  pointer-events: none;\r
  border-radius: inherit;\r
  opacity: var(--fx-mag-glow, 0);\r
  background: radial-gradient(\r
    circle at var(--fx-mag-px, 50%) var(--fx-mag-py, 50%),\r
    var(--fx-glare) 0%,\r
    transparent 55%\r
  );\r
}\r
\r
/* 꺼졌을 때 */\r
.fx-magnetic-button.fx-inert [data-fx-label] {\r
  transform: none;\r
}\r
.fx-magnetic-button.fx-inert .fx-magnetic-button__glow {\r
  display: none;\r
}\r
\r
/* ================================================================== *\r
 * 2. 선택 사항 — 기본 버튼 스킨\r
 * ================================================================== */\r
\r
.fx-btn {\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  gap: 8px;\r
\r
  padding: 14px 28px;\r
  border: 0;\r
  border-radius: 999px;\r
\r
  font: inherit;\r
  font-size: 0.9375rem;\r
  font-weight: 650;\r
  letter-spacing: -0.005em;\r
  line-height: 1;\r
  text-decoration: none;\r
  white-space: nowrap;\r
\r
  color: #fff;\r
  background: var(--fx-accent);\r
  cursor: pointer;\r
\r
  box-shadow: 0 8px 22px -10px color-mix(in srgb, var(--fx-accent) 80%, #000);\r
  transition: box-shadow var(--fx-duration-fast) var(--fx-ease),\r
              background-color var(--fx-duration-fast) var(--fx-ease);\r
}\r
\r
.fx-btn[data-fx-magnetic='1'] {\r
  box-shadow: 0 16px 34px -12px color-mix(in srgb, var(--fx-accent) 85%, #000);\r
}\r
\r
.fx-btn:active {\r
  /* 누를 때는 자석 이동 위에 살짝 눌리는 느낌만 얹습니다 */\r
  filter: brightness(0.94);\r
}\r
\r
/* 보조 스타일(외곽선) */\r
.fx-btn--ghost {\r
  color: var(--fx-text);\r
  background: transparent;\r
  box-shadow: inset 0 0 0 1px var(--fx-border);\r
}\r
\r
.fx-btn--ghost[data-fx-magnetic='1'] {\r
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--fx-accent) 60%, transparent),\r
              0 14px 30px -16px rgba(0, 0, 0, 0.5);\r
}\r
`,rw=`# \`model-showcase\` — GLB 3D 모델 쇼케이스\r
\r
> **티어 T3** · 추가 용량 **약 150KB+ 모델 파일**(화면 근처에서만 로드) · WebGL 필요\r
\r
> ⚠️ **이 팩에서 유일하게 무거운 효과입니다. 페이지당 1개만 쓰세요.**\r
\r
---\r
\r
## 1. 붙이기 — 바닐라\r
\r
\`\`\`html\r
<link rel="stylesheet" href="./effects/_core/core.css" />\r
<link rel="stylesheet" href="./effects/model-showcase/style.css" />\r
\r
<div class="showcase fx-model">\r
  <!-- 포스터는 HTML에 미리 둡니다. 이게 모든 실패 경로의 안전망입니다. -->\r
  <img class="fx-model__poster" src="./models/chair.webp" alt="원목 의자 3D 모델" />\r
  <span class="fx-model__hint">드래그해서 돌려보세요</span>\r
</div>\r
\r
<script type="module">\r
  import { mount } from './effects/model-showcase/index.js';\r
  mount('.showcase', {\r
    src: './models/chair.glb',\r
    alt: '원목 의자 3D 모델',\r
  });\r
<\/script>\r
\`\`\`\r
\r
## 2. 붙이기 — React\r
\r
\`\`\`jsx\r
import { ModelShowcase } from './effects/model-showcase/react.jsx';\r
\r
<ModelShowcase\r
  src={\`\${import.meta.env.BASE_URL}models/chair.glb\`}\r
  poster={\`\${import.meta.env.BASE_URL}models/chair.webp\`}\r
  alt="원목 의자 3D 모델"\r
  ratio="square"\r
/>\r
\`\`\`\r
\r
---\r
\r
## 3. 왜 three.js로 직접 짜지 않나\r
\r
포트폴리오에서 필요한 건 **"모델 하나를 예쁘게 돌려 보여주기"**입니다.\r
\r
three.js로 직접 하면 카메라·조명·환경맵·톤매핑·DRACO 디코더·AR·접근성·로딩 상태를\r
전부 직접 짜야 합니다. **300줄은 나옵니다.** 그리고 대부분 조명 세팅에서 막힙니다.\r
\r
\`<model-viewer>\`는 그걸 전부 포함하고 태그 한 줄로 끝납니다.\r
**커스텀 셰이더가 필요해지는 순간에만** three.js로 내려가세요.\r
\r
---\r
\r
## 4. 3단 로딩 전략\r
\r
| 단계 | 내용 | 비용 |\r
|---|---|---|\r
| 1 | **포스터 이미지** (HTML에 미리 존재) | 0KB 추가 — 이미 페이지에 있음 |\r
| 2 | 화면 300px 앞에 오면 **model-viewer 스크립트** 로드 | 약 150KB |\r
| 3 | 모델 로드 완료 → 포스터 페이드아웃 | GLB 크기만큼 |\r
\r
> **방문자가 3D 섹션까지 스크롤하지 않으면 단 한 바이트도 내려받지 않습니다.**\r
\r
그리고 어떤 단계에서 실패해도 **포스터는 항상 남습니다.**\r
\r
---\r
\r
## 5. 옵션\r
\r
### 필수\r
\r
| 옵션 | 설명 |\r
|---|---|\r
| \`src\` | \`.glb\` 또는 \`.gltf\` 경로 **(필수)** |\r
| \`alt\` | 스크린 리더용 설명. **비워두지 마세요** |\r
| \`poster\` | 포스터 이미지. \`null\`이면 \`.fx-model__poster\`의 \`src\`를 읽습니다 |\r
\r
### 조작\r
\r
| 옵션 | 기본값 | 설명 |\r
|---|---|---|\r
| \`cameraControls\` | \`true\` | 드래그로 회전 |\r
| \`autoRotate\` | \`true\` | 자동 회전 (**동작 줄이기 사용자에게는 자동으로 꺼집니다**) |\r
| \`autoRotateDelay\` | \`1500\` | 조작 후 자동 회전 재개까지(ms) |\r
| \`rotationPerSecond\` | \`'18deg'\` | 자동 회전 속도 |\r
| \`disableZoom\` | **\`true\`** | **아래 설명 필독** |\r
| \`disablePan\` | \`true\` | 두 손가락/우클릭 이동 비활성화 |\r
\r
### 🚨 \`disableZoom\`이 기본 \`true\`인 이유\r
\r
\`<model-viewer>\`는 **휠 이벤트를 가로채 줌으로 씁니다.**\r
페이지 중간에 있는 모델 위에서 스크롤하면 **페이지가 안 내려가고 모델만 확대됩니다.**\r
방문자는 "페이지가 멈췄다"고 느끼고 나가버립니다.\r
\r
포트폴리오에서 줌은 거의 필요 없습니다. 켜야 한다면 모델을 전체 화면 섹션에 두세요.\r
\r
### 조명 / 렌더링\r
\r
| 옵션 | 기본값 | 설명 |\r
|---|---|---|\r
| \`exposure\` | \`1\` | 노출. **모델이 어두우면 여기부터 1.2~1.6으로** |\r
| \`shadowIntensity\` | \`0.75\` | 바닥 그림자 세기(0~1). **이게 0이면 모델이 공중에 떠 보입니다** |\r
| \`shadowSoftness\` | \`1\` | 그림자 부드러움(0~1) |\r
| \`environmentImage\` | \`'neutral'\` | \`'neutral'\` / \`'legacy'\` / \`.hdr\` 경로 |\r
| \`skybox\` | \`false\` | 배경까지 환경맵으로 채울지 — \`environmentImage\`가 실제 이미지 URL일 때만 동작(\`'neutral'\`은 skybox-image에 못 씀) |\r
\r
### 카메라\r
\r
| 옵션 | 예시 | 설명 |\r
|---|---|---|\r
| \`cameraOrbit\` | \`'25deg 75deg 105%'\` | 초기 각도 (수평 수직 거리) |\r
| \`minCameraOrbit\` / \`maxCameraOrbit\` | \`'auto 60deg auto'\` | 회전 범위 제한 |\r
| \`fieldOfView\` | \`'30deg'\` | 시야각. 작을수록 망원(왜곡 적음) |\r
\r
### AR\r
\r
| 옵션 | 기본값 |\r
|---|---|\r
| \`ar\` | \`false\` |\r
| \`iosSrc\` | \`null\` — iOS AR에는 \`.usdz\`가 **따로** 필요합니다 |\r
\r
---\r
\r
## 6. 모델 파일 준비 — 여기가 진짜 병목\r
\r
**GLB 파일 크기가 이 효과의 전부입니다.** 코드 최적화는 의미가 없습니다.\r
\r
| 크기 | 판정 |\r
|---|---|\r
| ~1MB | 이상적 |\r
| 1~3MB | 허용 |\r
| 3~8MB | 느림. 진행률 표시가 필수 |\r
| 8MB 초과 | **다시 만드세요** |\r
\r
### 줄이는 순서 (효과 큰 순)\r
\r
1. **텍스처 해상도** — 4096px를 1024px로. 보통 여기서 80% 줄어듭니다\r
2. **텍스처를 WebP/KTX2로**\r
3. **Draco 메시 압축** — [gltf-transform](https://gltf-transform.dev/) 사용\r
4. **폴리곤 감축** — Blender의 Decimate\r
\r
\`\`\`bash\r
npx @gltf-transform/cli optimize input.glb output.glb --texture-size 1024\r
\`\`\`\r
\r
### 포스터 이미지 만들기\r
\r
모델을 한 번 띄운 뒤 콘솔에서:\r
\r
\`\`\`js\r
const handle = mount('.showcase', { src: './models/chair.glb' });\r
// 모델이 다 뜬 뒤에\r
handle.api.toDataURL('image/webp');\r
\`\`\`\r
\r
나온 data URL을 저장하면 **모델과 각도가 정확히 일치하는 포스터**가 됩니다.\r
포스터와 모델의 첫 프레임이 어긋나면 전환할 때 눈에 확 띕니다.\r
\r
---\r
\r
## 7. 무료 모델 구하기\r
\r
| 출처 | 라이선스 |\r
|---|---|\r
| [Poly Haven](https://polyhaven.com/models) | CC0 (완전 자유) |\r
| [Sketchfab](https://sketchfab.com/) — CC 필터 | 대부분 **출처 표기 필요** |\r
| [Khronos glTF 샘플](https://github.com/KhronosGroup/glTF-Sample-Assets) | 테스트용으로 최적 |\r
\r
> 출처 표기가 필요한 모델을 쓸 때는 **포트폴리오 어딘가에 반드시 표기**하세요.\r
> 라이선스를 지키는지 보는 채용담당자가 실제로 있습니다.\r
\r
---\r
\r
## 8. 🚨 GitHub Pages 배포 — 여기서 90%가 막힙니다\r
\r
**증상: 로컬에서는 되는데 배포하면 모델만 안 뜬다.**\r
\r
JS는 정상 로드되고 캔버스도 뜨는데 GLB만 404입니다. 원인은 **base 경로**입니다.\r
\r
### Vite + React\r
\r
\`\`\`js\r
// vite.config.js\r
export default { base: '/내-저장소-이름/' }\r
\`\`\`\r
\r
\`\`\`jsx\r
// ❌ 배포하면 404\r
<ModelShowcase src="/models/chair.glb" />\r
\r
// ✅ 방법 1 — BASE_URL 붙이기 (public/ 폴더에 둔 경우)\r
<ModelShowcase src={\`\${import.meta.env.BASE_URL}models/chair.glb\`} />\r
\r
// ✅ 방법 2 — import로 번들 (src/ 안에 둔 경우, 가장 안전)\r
import chairUrl from './assets/chair.glb?url';\r
<ModelShowcase src={chairUrl} />\r
\`\`\`\r
\r
**방법 2를 권장합니다.** 번들러가 경로를 알아서 처리하므로 base가 바뀌어도 안 깨집니다.\r
\r
### 바닐라\r
\r
상대 경로(\`./models/chair.glb\`)를 쓰면 그대로 동작합니다.\r
**절대 경로(\`/models/chair.glb\`)를 쓰면 404**입니다 —\r
GitHub Pages는 \`사용자명.github.io/저장소명/\` 아래에 있기 때문입니다.\r
\r
### 그 외 체크리스트\r
\r
- [ ] \`.glb\`가 \`.gitignore\`에 걸려 있지 않은지 (\`*.bin\` 패턴에 걸리는 경우 있음)\r
- [ ] Git LFS로 올렸다면 → **GitHub Pages는 LFS 파일을 서빙하지 않습니다.** 일반 파일로 올리세요\r
- [ ] 파일명 대소문자 (Windows는 구분 안 하지만 **GitHub Pages는 구분합니다**)\r
- [ ] 100MB 초과 파일은 GitHub이 거부합니다\r
\r
로드에 실패하면 콘솔에 \`[fx:model-showcase]\` 경고와 함께 이 항목이 안내됩니다.\r
\r
---\r
\r
## 9. 수동 제어\r
\r
\`\`\`js\r
const handle = mount('.showcase', { src: './chair.glb' });\r
\r
handle.api.viewer;                    // <model-viewer> 엘리먼트 (로드 전 null)\r
handle.api.reset();                   // 카메라 초기화\r
handle.api.toDataURL('image/webp');   // 현재 뷰를 이미지로\r
\`\`\`\r
\r
\`\`\`js\r
document.addEventListener('fx:model-showcase:progress', (e) => {\r
  console.log(Math.round(e.detail.progress * 100) + '%');\r
});\r
document.addEventListener('fx:model-showcase:load', () => console.log('완료'));\r
document.addEventListener('fx:model-showcase:error', (e) => console.log('실패', e.detail.src));\r
\`\`\`\r
\r
---\r
\r
## 10. 접근성\r
\r
- \`alt\`는 **반드시** 채우세요. \`<model-viewer>\`가 캔버스에 대한 대체 텍스트로 씁니다\r
- 동작 줄이기 사용자에게는 **자동 회전만 꺼지고 모델은 보입니다** (드래그로는 여전히 조작 가능)\r
- 포스터 이미지가 항상 존재하므로 WebGL이 없어도 **무엇을 만들었는지는 전달됩니다**\r
- \`.fx-model__hint\`로 "드래그해서 돌려보세요"를 꼭 보여주세요.\r
  **아무 표시가 없으면 대부분의 방문자는 그냥 이미지인 줄 압니다**\r
\r
---\r
\r
## 11. 자주 겪는 문제\r
\r
**Q. 모델이 새까맣습니다.**\r
→ \`environmentImage\`가 없거나 모델에 조명 정보가 없습니다. \`exposure\`를 1.4로,\r
\`environmentImage: 'neutral'\`(기본값)이 적용됐는지 확인하세요.\r
\r
**Q. 모델이 공중에 떠 보입니다.**\r
→ \`shadowIntensity\`가 0입니다. \`0.75\` 정도 주면 바닥에 붙습니다.\r
\r
**Q. 모델이 너무 크거나 작습니다.**\r
→ \`cameraOrbit\`의 세 번째 값(거리)을 조절하세요: \`'0deg 75deg 120%'\`.\r
또는 Blender에서 모델을 원점 기준으로 정규화하세요.\r
\r
**Q. 페이지 스크롤이 모델 위에서 멈춥니다.**\r
→ \`disableZoom: true\`(기본값)를 껐기 때문입니다. 다시 켜세요.\r
\r
**Q. iOS에서 AR 버튼이 안 뜹니다.**\r
→ iOS는 \`.usdz\`가 별도로 필요합니다. \`iosSrc\` 옵션에 넣으세요.\r
\r
**Q. 로딩이 너무 깁니다.**\r
→ 코드 문제가 아니라 **GLB 크기 문제**입니다. 6번으로 돌아가세요.\r
`,tw=`/**\r
 * model-showcase — GLB 3D 모델 쇼케이스\r
 * ───────────────────────────────────────────────────────────\r
 * 티어 T3 · 추가 용량 약 150KB+(model-viewer, 화면 근처에서만 로드) · WebGL 필요\r
 *\r
 * ★ 이 팩에서 유일하게 "무거운" 효과입니다. 페이지당 1개만 쓰세요.\r
 *\r
 * three.js로 직접 씬을 짜지 않고 <model-viewer>를 쓰는 이유:\r
 *   포트폴리오에서 필요한 건 "모델 하나를 예쁘게 돌려 보여주기"입니다.\r
 *   three.js로 직접 하면 카메라·조명·환경맵·톤매핑·DRACO 디코더·\r
 *   AR·접근성·로딩 상태를 전부 직접 짜야 합니다. 300줄은 나옵니다.\r
 *   <model-viewer>는 그걸 전부 포함하고 태그 한 줄로 끝납니다.\r
 *   커스텀 셰이더가 필요해지는 순간에만 three.js로 내려가세요.\r
 *\r
 * 3단 로딩 전략:\r
 *   1. 포스터 이미지(HTML에 미리 존재) — 즉시 보임, 0KB 추가\r
 *   2. 화면 근처에 오면 model-viewer 스크립트 로드\r
 *   3. 모델 로드 완료 → 포스터 페이드아웃\r
 *\r
 *   → 방문자가 3D 섹션까지 스크롤하지 않으면 단 한 바이트도 내려받지 않습니다.\r
 */\r
\r
import {\r
  defineEffect,\r
  loadModelViewer,\r
  observeVisibility,\r
  prefersReducedMotion,\r
} from '../_core/index.js';\r
\r
/** null/undefined가 아닌 값만 속성으로 설정합니다. */\r
function setAttrs(node, attrs) {\r
  for (const [key, value] of Object.entries(attrs)) {\r
    if (value === null || value === undefined || value === false) continue;\r
    node.setAttribute(key, value === true ? '' : String(value));\r
  }\r
}\r
\r
export const mount = defineEffect({\r
  name: 'model-showcase',\r
\r
  defaults: {\r
    /** .glb 또는 .gltf 경로 (필수) */\r
    src: null,\r
    /** iOS AR용 .usdz 경로 (ar: true일 때만 의미 있음) */\r
    iosSrc: null,\r
    /** 스크린 리더용 모델 설명 (필수에 가깝습니다) */\r
    alt: '3D 모델',\r
    /** 포스터 이미지. null이면 컨테이너의 .fx-model__poster에서 읽습니다 */\r
    poster: null,\r
\r
    /** 드래그로 회전 */\r
    cameraControls: true,\r
    /** 자동 회전 (동작 줄이기 사용자에게는 자동으로 꺼집니다) */\r
    autoRotate: true,\r
    /** 사용자 조작 후 자동 회전 재개까지의 시간(ms) */\r
    autoRotateDelay: 1500,\r
    /** 자동 회전 속도 */\r
    rotationPerSecond: '18deg',\r
\r
    /**\r
     * 휠 줌 비활성화.\r
     * ★ 기본값 true인 이유: model-viewer는 휠 이벤트를 가로채 줌으로 씁니다.\r
     *   페이지 중간에 있는 모델 위에서 스크롤하면 페이지가 안 내려가고\r
     *   모델만 확대됩니다. 방문자는 "페이지가 멈췄다"고 느낍니다.\r
     *   포트폴리오에서 줌은 거의 필요 없습니다.\r
     */\r
    disableZoom: true,\r
    /** 두 손가락/우클릭 이동 비활성화 */\r
    disablePan: true,\r
    /** 세로 스와이프로 회전 비활성화(모바일 스크롤 방해 방지) */\r
    disableTap: false,\r
\r
    /** AR 버튼 표시 */\r
    ar: false,\r
    /** 'webxr scene-viewer quick-look' 등 */\r
    arModes: 'webxr scene-viewer quick-look',\r
\r
    /** 노출값. 1이 기본, 어두우면 1.2~1.6 */\r
    exposure: 1,\r
    /** 바닥 그림자 세기 0~1. 0.6~0.9가 자연스럽습니다 */\r
    shadowIntensity: 0.75,\r
    /** 그림자 부드러움 0~1 */\r
    shadowSoftness: 1,\r
    /** 'neutral' | 'legacy' | .hdr 경로 */\r
    environmentImage: 'neutral',\r
    /** 배경까지 환경맵으로 채울지(보통 false — 투명 배경 유지) */\r
    skybox: false,\r
\r
    /** 초기 카메라 각도. 예: '25deg 75deg 105%' */\r
    cameraOrbit: null,\r
    /** 회전 범위 제한. 예: 'auto 60deg auto' */\r
    minCameraOrbit: null,\r
    maxCameraOrbit: null,\r
    /** 시야각. 예: '30deg' */\r
    fieldOfView: null,\r
\r
    /**\r
     * 모델 파일에 담긴 애니메이션 재생.\r
     *\r
     * GLB에는 걷기·회전·조립 같은 동작이 함께 들어오는 일이 많습니다. 이 속성을\r
     * 넘기지 않으면 그게 있어도 첫 프레임에서 멈춰 있어, 가진 것을 못 쓰는 셈입니다.\r
     * 이름을 비워 두면 파일의 첫 번째 애니메이션을 씁니다.\r
     */\r
    autoplay: true,\r
    animationName: null,\r
\r
    /**\r
     * 마우스를 향해 고개를 돌립니다(위치는 고정).\r
     *\r
     * followDecay가 클수록 느긋합니다. model-viewer의 interpolation-decay를\r
     * 그대로 씁니다 — 뷰어가 자기 렌더 루프에서 보간하므로 우리 rAF가 필요 없습니다.\r
     */\r
    follow: false,\r
    followDecay: 80,\r
    followYaw: 28,\r
    followPitch: 10,\r
\r
    /** 'auto'면 첫 방문자에게 "돌려보세요" 손가락 힌트를 보여줍니다 */\r
    interactionPrompt: 'auto',\r
\r
    /** 화면에서 이만큼 떨어졌을 때부터 미리 로드 시작 */\r
    preloadMargin: '300px',\r
  },\r
\r
  guard: {\r
    // 동작 줄이기여도 모델은 보여줘야 합니다. 자동 회전만 끕니다(아래에서 처리).\r
    motion: 'ignore',\r
    webgl: true,\r
    pointer: 'any',\r
  },\r
\r
  setup({ el, opts, addCleanup, setVar, emit }) {\r
    if (!opts.src) {\r
      console.warn('[fx:model-showcase] src 옵션(.glb 경로)이 필요합니다.');\r
      return;\r
    }\r
\r
    /*\r
     * 빌더 캔버스는 iframe입니다. 이 모듈은 부모 창에서 로드되므로 전역\r
     * \`window\`는 **부모 창**이고, iframe 위에서 움직이는 포인터 이벤트는\r
     * 부모 창에 오지 않습니다 — 마우스 바라보기가 캔버스에서 무반응이던\r
     * 원인입니다. 요소가 속한 창을 기준으로 잡으면 어느 쪽에서든 맞습니다.\r
     */\r
    const win = el.ownerDocument?.defaultView ?? window;\r
\r
    /*\r
     * 환경 이미지 정리. 빈 값이면 기본 조명('neutral')입니다.\r
     * skybox(배경까지 환경광)는 model-viewer의 \`skybox-image\` 속성인데,\r
     * 이 속성은 실제 이미지 URL만 받습니다 — 'neutral'/'legacy' 키워드는\r
     * environment-image 전용이라 skybox로는 쓸 수 없습니다.\r
     */\r
    let env = (typeof opts.environmentImage === 'string' && opts.environmentImage.trim()) || 'neutral';\r
    /*\r
     * .exr은 못 씁니다. model-viewer는 환경 이미지를 .hdr(HDRLoader) 아니면\r
     * gain-map JPEG로만 읽습니다 — .exr을 주면 JPEG 로더가 받아 "Gain map\r
     * metadata not found"로 실패하고, 그 오류가 뷰어까지 죽입니다(실측).\r
     * Poly Haven 등에서 받을 때 HDR 형식을 고르면 됩니다.\r
     */\r
    if (/\\.exr([?#]|$)/i.test(env)) {\r
      console.warn(\r
        \`[fx:model-showcase] .exr 환경 이미지는 model-viewer가 지원하지 않습니다: \${env}\\n\` +\r
          '.hdr(또는 .jpg)로 다시 받아 주세요. 기본 조명으로 대신합니다.'\r
      );\r
      env = 'neutral';\r
    }\r
    const skyboxSrc = opts.skybox && /[./]/.test(env) ? env : null;\r
    if (opts.skybox && !skyboxSrc) {\r
      console.warn(\r
        '[fx:model-showcase] skybox는 .hdr/.jpg 환경 이미지 URL이 있어야 켜집니다 — ' +\r
          "environmentImage가 기본 조명('neutral')이라 이번에는 무시합니다."\r
      );\r
    }\r
\r
    const posterEl = el.querySelector('.fx-model__poster');\r
    const posterSrc = opts.poster || posterEl?.getAttribute('src') || null;\r
\r
    let cancelled = false;\r
    let viewer = null;\r
\r
    addCleanup(() => {\r
      cancelled = true;\r
      viewer?.remove();\r
      viewer = null;\r
      el.classList.remove('fx-model--loading', 'fx-model--loaded', 'fx-model--failed');\r
      el.style.removeProperty('--fx-model-progress');\r
    });\r
\r
    /* --- 화면 근처에 올 때까지 아무것도 로드하지 않습니다 -------------- */\r
\r
    const stopWatch = observeVisibility(el, {\r
      rootMargin: opts.preloadMargin,\r
      threshold: 0,\r
      onEnter: () => {\r
        stopWatch(); // 한 번만\r
        start();\r
      },\r
    });\r
    addCleanup(() => stopWatch());\r
\r
    /* --- 실제 로드 ---------------------------------------------------- */\r
\r
    async function start() {\r
      if (cancelled) return;\r
      el.classList.add('fx-model--loading');\r
\r
      try {\r
        await loadModelViewer();\r
      } catch (err) {\r
        console.warn('[fx:model-showcase] model-viewer 로드 실패 — 포스터를 유지합니다.', err);\r
        el.classList.remove('fx-model--loading');\r
        el.classList.add('fx-model--failed');\r
        return;\r
      }\r
      if (cancelled) return;\r
\r
      // 동작 줄이기 사용자에게 자동 회전은 그 자체로 문제입니다.\r
      // 모델은 보여주되 회전만 끕니다(드래그로는 여전히 돌릴 수 있습니다).\r
      /*\r
       * \`follow\`와 \`auto-rotate\`는 함께 쓸 수 없습니다.\r
       *\r
       * auto-rotate는 뷰어가 매 프레임 cameraOrbit의 좌우각을 스스로 증가시킵니다.\r
       * 그 위에 우리가 목표 각도를 써도 **다음 프레임에 즉시 덮어써져** 마우스에\r
       * 반응하지 않는 것처럼 보입니다. 마우스를 보게 했다면 자동 회전은 끄는 것이\r
       * 사용자의 의도에 맞습니다.\r
       */\r
      const autoRotate = opts.autoRotate && !opts.follow && !prefersReducedMotion();\r
\r
      viewer = document.createElement('model-viewer');\r
      viewer.className = 'fx-model__viewer';\r
\r
      setAttrs(viewer, {\r
        src: opts.src,\r
        'ios-src': opts.iosSrc,\r
        alt: opts.alt,\r
        poster: posterSrc,\r
\r
        'camera-controls': opts.cameraControls,\r
        'auto-rotate': autoRotate,\r
        'auto-rotate-delay': opts.autoRotateDelay,\r
        'rotation-per-second': opts.rotationPerSecond,\r
\r
        'disable-zoom': opts.disableZoom,\r
        'disable-pan': opts.disablePan,\r
        'disable-tap': opts.disableTap,\r
\r
        ar: opts.ar,\r
        'ar-modes': opts.ar ? opts.arModes : null,\r
\r
        exposure: opts.exposure,\r
        'shadow-intensity': opts.shadowIntensity,\r
        'shadow-softness': opts.shadowSoftness,\r
        'environment-image': env,\r
        /* 예전엔 \`skybox\` 속성에 넣었습니다 — model-viewer에 그런 속성은 없어\r
         * 조용히 무시됐습니다. 올바른 이름은 \`skybox-image\`입니다. */\r
        'skybox-image': skyboxSrc,\r
\r
        'camera-orbit': opts.cameraOrbit,\r
        'min-camera-orbit': opts.minCameraOrbit,\r
        'max-camera-orbit': opts.maxCameraOrbit,\r
        'field-of-view': opts.fieldOfView,\r
\r
        /* 파일에 담긴 애니메이션. autoplay가 없으면 첫 프레임에서 멈춰 있습니다. */\r
        autoplay: opts.autoplay,\r
        'animation-name': opts.animationName,\r
\r
        'interaction-prompt': opts.interactionPrompt,\r
        loading: 'eager', // 이미 화면 근처이므로 즉시\r
        reveal: 'auto',\r
      });\r
\r
      /* --- 진행률 / 완료 / 실패 ------------------------------------- */\r
\r
      const onProgress = (event) => {\r
        const p = event.detail?.totalProgress ?? 0;\r
        setVar('--fx-model-progress', p);\r
        emit('progress', { progress: p });\r
      };\r
\r
      const onLoad = () => {\r
        el.classList.remove('fx-model--loading');\r
        el.classList.add('fx-model--loaded');\r
        /*\r
         * 마우스 추적은 **로드가 끝난 뒤** 답니다. cameraOrbit은 씬과 카메라가\r
         * 준비된 뒤에야 의미가 있고, appendChild 직후에 걸면 첫 설정이 초기 각도\r
         * 계산에 먹혀 사라집니다.\r
         */\r
        startFollow(viewer);\r
        emit('load');\r
      };\r
\r
      const onError = (event) => {\r
        console.warn(\r
          \`[fx:model-showcase] 모델 로드 실패: \${opts.src}\\n\` +\r
            'GitHub Pages라면 base 경로 문제일 가능성이 높습니다. README 8번을 보세요.',\r
          event.detail ?? event\r
        );\r
        el.classList.remove('fx-model--loading');\r
        el.classList.add('fx-model--failed');\r
        viewer?.remove();\r
        viewer = null;\r
        emit('error', { src: opts.src });\r
      };\r
\r
      viewer.addEventListener('progress', onProgress);\r
      viewer.addEventListener('load', onLoad, { once: true });\r
      viewer.addEventListener('error', onError, { once: true });\r
\r
      el.appendChild(viewer);\r
      emit('mounted');\r
    }\r
\r
    /**\r
     * 마우스를 향해 모델이 **고개를 돌립니다.** 위치는 그대로입니다.\r
     * 마우스가 쉬면(autoRotate가 켜져 있을 때) 기본 360° 회전으로 돌아가고,\r
     * 다시 움직이면 그 자리에서 마우스 쪽으로 시선을 맞춥니다.\r
     *\r
     * 왜 이 방식으로 바꿨는가\r
     *   처음에는 요소를 \`translate\`로 옮겼습니다. 그러려면 매 프레임 값을 계산해야\r
     *   해서 \`requestAnimationFrame\` 루프를 **쉬지 않고** 돌렸고, model-viewer가\r
     *   이미 무거운 탓에 페이지 전체가 눈에 띄게 느려졌습니다.\r
     *\r
     *   model-viewer에는 \`interpolation-decay\`가 있습니다. 목표 각도만 한 번\r
     *   지정하면 **뷰어가 자기 렌더 루프 안에서** 그 각도로 부드럽게 다가갑니다.\r
     *   그래서 우리 루프가 아예 필요 없습니다 — 마우스가 움직일 때만 목표를\r
     *   갱신하고, 그마저 간격을 두어 던집니다. 움직임이 멈추면 계산도 멈춥니다.\r
     *\r
     * decay가 클수록 느긋합니다(기본 50, 여기서는 훨씬 크게 씁니다).\r
     */\r
    function startFollow(node) {\r
      if (!node || !opts.follow || prefersReducedMotion()) return;\r
\r
      /*\r
       * 값이 클수록 느립니다. 200으로 뒀더니 **거의 움직이지 않는 것처럼** 보였습니다\r
       * — 마우스가 멈추면 목표 갱신도 멈추므로 감쇠가 크면 남은 거리를 한없이\r
       * 조금씩만 좁힙니다. 80이 "천천히 도는데 눈에는 보이는" 지점입니다.\r
       */\r
      node.setAttribute('interpolation-decay', String(Math.max(20, Number(opts.followDecay) || 80)));\r
\r
      /*\r
       * \`camera-controls\`는 **살려 둡니다** (옵션이 켜져 있다면).\r
       *\r
       * 예전에는 여기서 껐습니다 — 뷰어가 포인터를 자기 조작으로 해석해 밖에서\r
       * 쓰는 cameraOrbit과 싸운다고 봤기 때문입니다. 실제 충돌은 **드래그하는\r
       * 동안**뿐입니다. 그래서 끄는 대신, 사용자가 잡고 도는 동안(camera-change의\r
       * source가 user-interaction) follow와 기본 회전을 멈추고, 손을 뗀 뒤\r
       * idleMs가 지나면 **그 각도에서** 이어 갑니다. 모델을 원하는 방향으로\r
       * 돌려 볼 수 있으면서 마우스 바라보기도 유지됩니다.\r
       */\r
\r
      /* 좌우로 얼마나 돌아볼지(도). 기본 각도에서 이만큼 벗어납니다. */\r
      const yaw = Math.max(0, Number(opts.followYaw) || 28);\r
      const pitch = Math.max(0, Number(opts.followPitch) || 10);\r
\r
      /*\r
       * 거리는 **고정합니다.** \`auto\`로 두면 뷰어가 프레임마다 모델 크기에 맞춰\r
       * 다시 계산해서, 각도만 바꾸려는데 거리까지 흔들립니다.\r
       * 속성과 프로퍼티를 함께 씁니다 — 버전에 따라 한쪽만 먹는 경우가 있습니다.\r
       */\r
      let theta = 0; // 마지막으로 던진 좌우각. 쉬는 회전이 여기서 이어집니다.\r
      const setOrbit = (th, ph) => {\r
        const orbit = \`\${th.toFixed(1)}deg \${ph.toFixed(1)}deg 105%\`;\r
        node.cameraOrbit = orbit;\r
        node.setAttribute('camera-orbit', orbit);\r
      };\r
\r
      /*\r
       * 마우스가 쉬면 기본 회전(360°)으로 돌아갑니다.\r
       *\r
       * \`auto-rotate\` 속성을 켰다 끄는 방식은 안 씁니다 — auto-rotate는 카메라와\r
       * 별도의 turntable 각도를 쌓아서, follow로 돌아올 때 그 오프셋만큼 시선이\r
       * 어긋납니다(이 충돌을 걷어낸 게 바로 이 파일의 이력입니다). 대신 **같은\r
       * 채널**(camera-orbit 목표값)로 목표각을 조금씩 밀어 주면, 뷰어의\r
       * interpolation-decay가 그 사이를 채워 rAF 루프 없이도 매끈하게 돕니다.\r
       * 250ms 간격의 setInterval은 프레임 루프에 비하면 공짜에 가깝습니다.\r
       */\r
      const idleSpin = opts.autoRotate;\r
      const spinStep = Math.max(0.5, (parseFloat(opts.rotationPerSecond) || 18) / 4); // 250ms당 각도\r
      const idleMs = Math.max(800, Number(opts.autoRotateDelay) || 1500);\r
      let idleTimer = 0;\r
      let spinTimer = 0;\r
      const stopSpin = () => { if (spinTimer) { win.clearInterval(spinTimer); spinTimer = 0; } };\r
      const startSpin = () => {\r
        if (!idleSpin || spinTimer) return;\r
        spinTimer = win.setInterval(() => { theta += spinStep; setOrbit(theta, 75); }, 250);\r
      };\r
\r
      /*\r
       * 드래그 회전과의 공존.\r
       *\r
       * 사용자가 모델을 잡고 도는 동안 우리가 목표각을 던지면 서로 밀어냅니다.\r
       * 뷰어가 알려 주는 camera-change(source: user-interaction)를 기준으로\r
       * 조준을 멈추고, 손을 뗀 뒤 idleMs가 지나면 **사용자가 돌려놓은 각도를\r
       * 읽어 와서** 그 자리부터 기본 회전을 이어 갑니다.\r
       */\r
      let holding = false;\r
      const resume = () => {\r
        holding = false;\r
        const o = node.getCameraOrbit?.();\r
        if (o && Number.isFinite(o.theta)) theta = (o.theta * 180) / Math.PI;\r
        startSpin();\r
      };\r
      const onCam = (e) => {\r
        if (e.detail?.source !== 'user-interaction') return;\r
        holding = true;\r
        stopSpin();\r
        win.clearTimeout(idleTimer);\r
        idleTimer = win.setTimeout(resume, idleMs);\r
      };\r
      node.addEventListener('camera-change', onCam);\r
      addCleanup(() => node.removeEventListener('camera-change', onCam));\r
\r
      let last = 0;\r
      const aim = (e) => {\r
        /* 잡고 도는 중에는 조준하지 않습니다 — 드래그가 이깁니다. */\r
        if (holding) return;\r
        /*\r
         * 초당 12번으로 제한합니다. 그 이상 던져도 뷰어가 보간하는 중이라\r
         * 눈에 보이는 차이가 없고, 포인터 이벤트는 초당 수백 번 옵니다.\r
         */\r
        const t = e.timeStamp ?? 0;\r
        if (t - last < 80) return;\r
        last = t;\r
\r
        stopSpin();\r
        win.clearTimeout(idleTimer);\r
        idleTimer = win.setTimeout(startSpin, idleMs);\r
\r
        const dx = (e.clientX / win.innerWidth) * 2 - 1;    // -1..1\r
        const dy = (e.clientY / win.innerHeight) * 2 - 1;\r
        /*\r
         * 부호가 **반대**입니다. camera-orbit은 모델이 아니라 **카메라**를 도는\r
         * 각도라, 카메라를 오른쪽으로 보내면 모델은 왼쪽을 보는 것처럼 보입니다.\r
         * 마우스 쪽을 바라보게 하려면 카메라를 마우스 반대쪽으로 보내야 합니다.\r
         * (75deg가 model-viewer의 기본 세로각입니다. 그 주변에서 움직입니다.)\r
         */\r
        let want = -dx * yaw;\r
        /*\r
         * 쉬는 회전으로 theta가 몇 바퀴(720° 등) 쌓였을 수 있습니다. 목표를\r
         * 현재 값에서 가장 가까운 같은 각도로 옮겨 줍니다 — 안 그러면 보간이\r
         * 쌓인 바퀴 수만큼 되감으며 한참을 돕니다.\r
         */\r
        want += Math.round((theta - want) / 360) * 360;\r
        theta = want;\r
        setOrbit(theta, 75 - dy * pitch);\r
      };\r
\r
      /* 로드 직후, 마우스가 움직이기 전에도 기본 회전은 돌아야 합니다. */\r
      startSpin();\r
\r
      win.addEventListener('pointermove', aim, { passive: true });\r
      addCleanup(() => {\r
        stopSpin();\r
        win.clearTimeout(idleTimer);\r
        win.removeEventListener('pointermove', aim);\r
        node.removeAttribute('interpolation-decay');\r
      });\r
    }\r
\r
    return {\r
      /** model-viewer 엘리먼트 (로드 전에는 null) */\r
      get viewer() {\r
        return viewer;\r
      },\r
      /** 카메라를 초기 위치로 */\r
      reset: () => viewer?.resetTurntableRotation?.(),\r
      /** 현재 뷰를 이미지로 (썸네일 만들 때 유용) */\r
      toDataURL: (type = 'image/webp') => viewer?.toDataURL?.(type) ?? null,\r
    };\r
  },\r
});\r
\r
export default mount;\r
`,aw=`/**\r
 * model-showcase / react.jsx\r
 */\r
\r
import React, { forwardRef } from 'react';\r
import { useFx, mergeRefs } from '../_core/react.js';\r
import { mount } from './index.js';\r
\r
import '../_core/core.css';\r
import './style.css';\r
\r
/** 훅 버전 */\r
export function useModel(options, deps = []) {\r
  return useFx(mount, options, deps);\r
}\r
\r
/**\r
 * <ModelShowcase\r
 *   src={\`\${import.meta.env.BASE_URL}models/chair.glb\`}\r
 *   poster={\`\${import.meta.env.BASE_URL}models/chair.webp\`}\r
 *   alt="원목 의자 3D 모델"\r
 *   hint="드래그해서 돌려보세요"\r
 * />\r
 *\r
 * ★ GitHub Pages에 올릴 때 src/poster는 반드시 import.meta.env.BASE_URL을\r
 *   앞에 붙이거나 import로 번들해야 합니다. README 8번을 보세요.\r
 */\r
export const ModelShowcase = forwardRef(function ModelShowcase(\r
  {\r
    className = '',\r
    /** 비율: 'default' | 'square' | 'wide' | 'tall' */\r
    ratio = 'default',\r
    /** 하단 조작 힌트 문구. false면 표시 안 함 */\r
    hint = '드래그해서 돌려보세요',\r
    children,\r
    deps = [],\r
    src,\r
    iosSrc,\r
    alt,\r
    poster,\r
    cameraControls,\r
    autoRotate,\r
    autoRotateDelay,\r
    rotationPerSecond,\r
    disableZoom,\r
    disablePan,\r
    disableTap,\r
    ar,\r
    arModes,\r
    exposure,\r
    shadowIntensity,\r
    shadowSoftness,\r
    environmentImage,\r
    skybox,\r
    cameraOrbit,\r
    minCameraOrbit,\r
    maxCameraOrbit,\r
    fieldOfView,\r
    interactionPrompt,\r
    preloadMargin,\r
    guard,\r
    ...rest\r
  },\r
  forwardedRef\r
) {\r
  const options = {};\r
  const raw = {\r
    src, iosSrc, alt, poster, cameraControls, autoRotate, autoRotateDelay,\r
    rotationPerSecond, disableZoom, disablePan, disableTap, ar, arModes,\r
    exposure, shadowIntensity, shadowSoftness, environmentImage, skybox,\r
    cameraOrbit, minCameraOrbit, maxCameraOrbit, fieldOfView,\r
    interactionPrompt, preloadMargin, guard,\r
  };\r
  for (const key in raw) if (raw[key] !== undefined) options[key] = raw[key];\r
\r
  // src가 바뀌면 다시 마운트되어야 하므로 deps에 기본으로 넣습니다.\r
  const ref = useModel(options, [src, ...deps]);\r
\r
  const ratioClass = ratio && ratio !== 'default' ? \`fx-model--\${ratio}\` : '';\r
\r
  return (\r
    <div\r
      ref={mergeRefs(ref, forwardedRef)}\r
      className={\`fx-model \${ratioClass} \${className}\`}\r
      {...rest}\r
    >\r
      {poster && (\r
        <img className="fx-model__poster" src={poster} alt={alt || ''} loading="lazy" />\r
      )}\r
      {hint && <span className="fx-model__hint">{hint}</span>}\r
      {children}\r
    </div>\r
  );\r
});\r
\r
export default ModelShowcase;\r
`,ow=`/**\r
 * model-showcase / style.css\r
 * _core/core.css 를 먼저 불러오세요.\r
 */\r
\r
/* ================================================================== *\r
 * 1. 컨테이너 (사용자가 직접 붙이는 클래스)\r
 * ================================================================== */\r
\r
.fx-model {\r
  position: relative;\r
  display: block;\r
  width: 100%;\r
  /* 캔버스는 높이를 만들지 못하므로 비율을 고정합니다. */\r
  aspect-ratio: 4 / 3;\r
  overflow: hidden;\r
  border-radius: var(--fx-radius, 16px);\r
  /*\r
   * 상자 배경은 **페이지 테마**를 따릅니다.\r
   *\r
   * 예전에는 --fx-surface-2만 썼습니다. 이 값은 OS의 다크 모드(prefers-color-scheme)를\r
   * 따라 #1e2027로 뒤집히는데, 페이지는 밝은 테마 그대로라 상자만 새까매졌습니다.\r
   * 모델을 올리기 전 안내 글이 그 검정 위에 깔려 읽히지 않았습니다.\r
   * --wf-surface(페이지 테마 값)를 먼저 보고, 팩을 단독으로 쓸 때만 종전 값으로 물러납니다.\r
   */\r
  background: var(--wf-surface, var(--fx-surface-2));\r
  isolation: isolate;\r
}\r
\r
/* ================================================================== *\r
 * 2. 포스터 — 3단 로딩의 1단계\r
 *\r
 * HTML에 미리 존재합니다. JS가 없어도, WebGL이 없어도, 로드가 실패해도\r
 * 이 이미지는 항상 보입니다.\r
 * ================================================================== */\r
\r
.fx-model__poster {\r
  position: absolute;\r
  inset: 0;\r
  z-index: 1;\r
  width: 100%;\r
  height: 100%;\r
  object-fit: contain;\r
  display: block;\r
  transition: opacity 500ms var(--fx-ease-out);\r
}\r
\r
/* 모델이 완전히 뜨면 포스터를 걷어냅니다 */\r
.fx-model--loaded .fx-model__poster {\r
  opacity: 0;\r
  pointer-events: none;\r
}\r
\r
/* ================================================================== *\r
 * 3. model-viewer\r
 * ================================================================== */\r
\r
.fx-model__viewer {\r
  position: absolute;\r
  inset: 0;\r
  z-index: 2;\r
  width: 100%;\r
  height: 100%;\r
  /* 로드 전에는 투명 — 포스터가 그대로 보입니다 */\r
  opacity: 0;\r
  transition: opacity 500ms var(--fx-ease-out);\r
\r
  /* 기본 배경 제거(포스터/컨테이너 배경을 쓰기 위해) */\r
  background-color: transparent;\r
  --poster-color: transparent;\r
\r
  /* 드래그로 회전할 수 있다는 신호 */\r
  cursor: grab;\r
}\r
\r
.fx-model__viewer:active {\r
  cursor: grabbing;\r
}\r
\r
.fx-model--loaded .fx-model__viewer {\r
  opacity: 1;\r
}\r
\r
/* ================================================================== *\r
 * 4. 로딩 진행 표시\r
 *\r
 * --fx-model-progress (0~1)를 JS가 갱신합니다.\r
 * GLB는 보통 1~10MB라 로딩이 체감됩니다. 진행률이 없으면\r
 * 방문자는 "고장났나?" 하고 스크롤을 내려버립니다.\r
 * ================================================================== */\r
\r
.fx-model::after {\r
  content: '';\r
  position: absolute;\r
  left: 0;\r
  bottom: 0;\r
  z-index: 3;\r
  height: 2px;\r
  width: calc(var(--fx-model-progress, 0) * 100%);\r
  background: var(--fx-accent);\r
  opacity: 0;\r
  transition: opacity 300ms var(--fx-ease);\r
  pointer-events: none;\r
}\r
\r
.fx-model--loading::after {\r
  opacity: 1;\r
}\r
\r
/* ================================================================== *\r
 * 5. 실패 상태\r
 *\r
 * 아무 표시 없이 포스터만 남으면 개발 중에 눈치채기 어렵습니다.\r
 * 아주 은은한 표시만 남깁니다(방문자에게는 거의 안 보이게).\r
 * ================================================================== */\r
\r
.fx-model--failed {\r
  outline: 1px dashed color-mix(in srgb, var(--fx-text-dim) 40%, transparent);\r
  outline-offset: -1px;\r
}\r
\r
/* ================================================================== *\r
 * 6. 선택 사항 — 조작 힌트\r
 * ================================================================== */\r
\r
.fx-model__hint {\r
  position: absolute;\r
  left: 50%;\r
  bottom: 12px;\r
  z-index: 4;\r
  transform: translateX(-50%);\r
\r
  padding: 6px 14px;\r
  border-radius: 999px;\r
  font-size: 0.75rem;\r
  font-weight: 600;\r
  letter-spacing: 0.01em;\r
  white-space: nowrap;\r
\r
  color: var(--fx-text);\r
  background: color-mix(in srgb, var(--fx-surface) 82%, transparent);\r
  backdrop-filter: blur(8px);\r
  border: 1px solid var(--fx-border);\r
\r
  opacity: 0;\r
  transition: opacity 400ms var(--fx-ease-out) 600ms;\r
  pointer-events: none;\r
}\r
\r
.fx-model--loaded .fx-model__hint {\r
  opacity: 1;\r
}\r
\r
/* 사용자가 한 번 조작하면 힌트를 감춥니다(JS로 클래스 추가) */\r
.fx-model--touched .fx-model__hint {\r
  opacity: 0;\r
  transition-delay: 0ms;\r
}\r
\r
/* ================================================================== *\r
 * 7. 선택 사항 — 비율 변형\r
 * ================================================================== */\r
\r
.fx-model--square { aspect-ratio: 1; }\r
.fx-model--wide   { aspect-ratio: 16 / 9; }\r
.fx-model--tall   { aspect-ratio: 3 / 4; }\r
`,sw=`# \`parallax-layers\` — 히어로 깊이감 레이어\r
\r
> **티어 T1** · 추가 용량 **0KB** · 의존성 없음 · 모바일에서도 스크롤 시차 동작\r
\r
배경 → 중간 → 전경 레이어가 **마우스와 스크롤 양쪽에** 서로 다른 속도로 반응합니다.\r
\`tilt-card\`가 카드 하나를 다룬다면, 이건 **히어로 섹션 전체**를 다룹니다.\r
\r
---\r
\r
## 1. 붙이기 — 바닐라\r
\r
\`\`\`html\r
<link rel="stylesheet" href="./effects/_core/core.css" />\r
<link rel="stylesheet" href="./effects/parallax-layers/style.css" />\r
\r
<section class="hero fx-hero">\r
  <img class="fx-hero__bg" src="./bg.jpg" alt="" data-fx-layer="0.15" />\r
\r
  <div class="fx-hero__blob" data-fx-layer="0.9"\r
       style="background:#7c6cff; justify-self:start; align-self:start; margin:8%"></div>\r
\r
  <div class="fx-hero__content" data-fx-layer="0.5">\r
    <h1 class="fx-hero__title">프론트엔드 개발자<br />김하늘</h1>\r
    <p class="fx-hero__sub">React · TypeScript · 인터랙션 디자인</p>\r
  </div>\r
</section>\r
\r
<script type="module">\r
  import { mount } from './effects/parallax-layers/index.js';\r
  mount('.hero');\r
<\/script>\r
\`\`\`\r
\r
## 2. 붙이기 — React\r
\r
\`\`\`jsx\r
import { ParallaxScene, Layer } from './effects/parallax-layers/react.jsx';\r
\r
export default function Hero() {\r
  return (\r
    <ParallaxScene className="fx-hero" mouseStrength={30}>\r
      <Layer as="img" depth={0.15} className="fx-hero__bg" src="/bg.jpg" alt="" />\r
      <Layer depth={0.5} className="fx-hero__content">\r
        <h1 className="fx-hero__title">프론트엔드 개발자<br />김하늘</h1>\r
        <p className="fx-hero__sub">React · TypeScript</p>\r
      </Layer>\r
    </ParallaxScene>\r
  );\r
}\r
\`\`\`\r
\r
---\r
\r
## 3. 레이어 계수 — 이 효과의 전부\r
\r
\`data-fx-layer="0.4"\` 의 숫자가 **움직임 계수**입니다.\r
\r
| 값 | 의미 |\r
|---|---|\r
| \`0\` | 완전 고정 (기준면) |\r
| \`0.1 ~ 0.2\` | 아주 먼 배경 |\r
| \`0.3 ~ 0.5\` | 본문 / 주요 콘텐츠 |\r
| \`0.6 ~ 0.9\` | 전경 장식, 블롭, 아이콘 |\r
| \`1\` 이상 | 과장된 강조 (1.5 넘으면 어지럽습니다) |\r
\r
> **핵심:** 깊이감은 절대값이 아니라 **계수의 차이**에서 나옵니다.\r
> \`0.4 / 0.45 / 0.5\`는 그냥 통째로 움직이는 것처럼 보입니다.\r
> \`0.15 / 0.5 / 0.9\`처럼 **최소 3배 차이**를 두세요.\r
\r
### 음수도 됩니다\r
\r
\`\`\`html\r
<div data-fx-layer="-0.3">   <!-- 다른 레이어와 반대로 움직임 -->\r
\`\`\`\r
\r
배경과 전경을 반대로 흘리면 깊이가 극적으로 과장됩니다. 절제해서 쓰세요.\r
\r
---\r
\r
## 4. 옵션\r
\r
| 옵션 | 기본값 | 설명 |\r
|---|---|---|\r
| \`mouse\` | \`true\` | 마우스 반응 사용 |\r
| \`mouseStrength\` | \`26\` | 계수 1일 때 마우스로 움직이는 최대 거리(px) |\r
| \`scroll\` | \`true\` | 스크롤 반응 사용 |\r
| \`scrollStrength\` | \`70\` | 계수 1일 때 스크롤로 움직이는 최대 거리(px) |\r
| \`depth\` | \`0\` | 계수 1일 때 실제 \`translateZ\`(px). 0이면 평면 시차만 |\r
| \`perspective\` | \`1200\` | 원근 거리(px). \`depth > 0\`일 때만 의미 있음 |\r
| \`speed\` | \`9\` | 따라오는 속도. 6=느긋함, 9=기본, 18=즉각적 |\r
| \`pointerTarget\` | \`'window'\` | \`'self'\`로 바꾸면 이 요소 위에서만 반응 |\r
| \`idleSleep\` | \`0.4\` | 수렴 후 이 시간(초) 뒤 루프 정지 |\r
\r
> **\`pointerTarget\`을 \`'window'\`로 둔 이유:** 히어로 위에 커서를 올려야만 반응하면\r
> 스크롤만 하고 지나가는 대부분의 방문자는 효과를 아예 못 봅니다.\r
\r
---\r
\r
## 5. 진짜 3D로 쓰기\r
\r
기본값(\`depth: 0\`)은 **평면 시차**입니다. 가볍고 안전합니다.\r
진짜 Z축 입체를 원하면:\r
\r
\`\`\`js\r
mount('.hero', { depth: 80, perspective: 1000 });\r
\`\`\`\r
\r
레이어들이 실제로 앞뒤로 배치되어 **원근 왜곡**까지 생깁니다.\r
다만 \`overflow: hidden\`인 부모 안에서는 잘릴 수 있으니 여백을 넉넉히 주세요.\r
\r
---\r
\r
## 6. 성능 노트\r
\r
**컨테이너에 CSS 변수 3개만 씁니다.**\r
레이어가 3개든 10개든 프레임당 JS 쓰기는 **3번**입니다. 곱셈은 CSS \`calc\`가 처리합니다.\r
\r
**가만히 있으면 잠듭니다.**\r
수렴 후 \`idleSleep\`초 동안 입력이 없으면 \`rAF\`를 멈춥니다.\r
히어로는 화면에 오래 머무는 영역이라 이 절전이 실제 배터리에 차이를 만듭니다.\r
마우스가 움직이거나 스크롤하면 즉시 깨어납니다.\r
\r
**화면 밖이면 완전 정지.**\r
\`rootMargin: 200px\` — 화면에 들어오기 직전에 미리 깨어나서 자연스럽게 이어집니다.\r
\r
---\r
\r
## 7. 자주 겪는 문제\r
\r
**Q. 움직이지 않습니다.**\r
→ ① 자식에 \`data-fx-layer\`가 있는지 확인 (콘솔에 경고가 뜹니다).\r
→ ② 요소의 \`data-fx-skipped\`가 \`reduced-motion\`인지 확인.\r
\r
**Q. 배경 이미지 가장자리에 빈 공간이 생깁니다.**\r
→ 배경은 컨테이너보다 **크게** 잡아야 합니다. \`.fx-hero__bg\`가 \`108%\`인 이유입니다.\r
계수를 키웠다면 그만큼 더 키우세요: 여유분 ≈ \`mouseStrength × 계수 × 2\`px.\r
\r
**Q. 스크롤 시차가 너무 셉니다.**\r
→ \`scrollStrength\`를 40 이하로 낮추세요. 스크롤 시차는 마우스 시차보다 **훨씬 눈에 띕니다.**\r
\r
**Q. 모바일에서 마우스 효과가 없습니다.**\r
→ 정상입니다. 터치에는 \`pointermove\`가 hover처럼 오지 않습니다. 스크롤 시차는 그대로 동작합니다.\r
\r
**Q. 첫 스크롤에서 콘텐츠가 갑자기 튑니다.**\r
→ 마운트 시점에 스크롤 위치를 읽어 초기값을 맞춰두었습니다. 그래도 튄다면\r
이미지 로딩으로 레이아웃이 밀린 경우이니 \`<img>\`에 \`width\`/\`height\` 또는 \`aspect-ratio\`를 지정하세요.\r
`,iw=`/**\r
 * parallax-layers — 마우스 + 스크롤 연동 다층 깊이감\r
 * ───────────────────────────────────────────────────────────\r
 * 티어 T1 · 추가 용량 0KB · 모바일에서도 스크롤 시차는 동작\r
 *\r
 * tilt-card가 "카드 하나"를 다룬다면, 이건 "히어로 섹션 전체"를 다룹니다.\r
 * 배경 → 중간 → 전경 레이어가 서로 다른 속도로 움직여서 깊이를 만듭니다.\r
 *\r
 * 설계 결정 3가지:\r
 *  1. 레이어마다 JS로 transform을 쓰지 않습니다.\r
 *     컨테이너에 CSS 변수 3개(-1~1)만 쓰고 계산은 CSS calc에 맡깁니다.\r
 *     레이어가 3개든 10개든 프레임당 JS 쓰기는 3번뿐입니다.\r
 *  2. 마우스는 window 기준입니다.\r
 *     히어로 위에 커서를 올려야만 반응하면 대부분의 방문자는 효과를 못 봅니다.\r
 *  3. 가만히 있으면 잠듭니다.\r
 *     수렴 후 0.4초간 입력이 없으면 rAF를 멈춥니다. 히어로는 화면에\r
 *     오래 머무는 영역이라 이 절전이 실제로 배터리에 차이를 만듭니다.\r
 */\r
\r
import {\r
  defineEffect,\r
  damp,\r
  clamp,\r
  round,\r
  createVisibleLoop,\r
  rafThrottle,\r
} from '../_core/index.js';\r
\r
export const mount = defineEffect({\r
  name: 'parallax-layers',\r
\r
  defaults: {\r
    /** 마우스 반응 사용 */\r
    mouse: true,\r
    /** 레이어 계수 1일 때 마우스로 움직이는 최대 거리(px) */\r
    mouseStrength: 26,\r
    /** 스크롤 반응 사용 */\r
    scroll: true,\r
    /** 레이어 계수 1일 때 스크롤로 움직이는 최대 거리(px) */\r
    scrollStrength: 70,\r
    /** 레이어 계수 1일 때 실제 translateZ 높이(px). 0이면 평면 시차만. */\r
    depth: 0,\r
    /** 원근 거리(px) */\r
    perspective: 1200,\r
    /** 따라오는 속도(감쇠 계수). 6=느긋함, 10=기본, 18=즉각적 */\r
    speed: 9,\r
    /** 'window' = 화면 어디서 움직여도 반응 / 'self' = 이 요소 위에서만 */\r
    pointerTarget: 'window',\r
    /** 수렴 후 이 시간(초) 동안 입력이 없으면 루프 정지 */\r
    idleSleep: 0.4,\r
  },\r
\r
  guard: {\r
    motion: 'skip',\r
    pointer: 'any', // 모바일에서도 스크롤 시차는 유효합니다\r
  },\r
\r
  setup({ el, opts, on, addCleanup, setVar, emit }) {\r
    /* --- 1. 레이어 등록 --------------------------------------------- */\r
\r
    // data-fx-layer="0.6" → 계수 0.6. 0 = 고정, 1 = 최대로 움직임.\r
    const layers = Array.from(el.querySelectorAll('[data-fx-layer]'));\r
    if (!layers.length) {\r
      console.warn('[fx:parallax-layers] data-fx-layer를 가진 자식이 없습니다.');\r
    }\r
    for (const layer of layers) {\r
      const v = parseFloat(layer.dataset.fxLayer);\r
      layer.style.setProperty('--fx-layer', Number.isFinite(v) ? v : 0);\r
    }\r
    addCleanup(() => {\r
      for (const layer of layers) layer.style.removeProperty('--fx-layer');\r
    });\r
\r
    /* --- 2. 정적 변수 ------------------------------------------------ */\r
\r
    setVar('--fx-plx-perspective', \`\${opts.perspective}px\`);\r
    // 마우스와 반대로 움직여야 "안쪽에 있다"는 느낌이 납니다 → 부호를 미리 뒤집습니다.\r
    setVar('--fx-plx-mx', \`\${-opts.mouseStrength}px\`);\r
    setVar('--fx-plx-my', \`\${-opts.mouseStrength}px\`);\r
    setVar('--fx-plx-sy', \`\${opts.scrollStrength}px\`);\r
    setVar('--fx-plx-z', \`\${opts.depth}px\`);\r
\r
    /* --- 3. 상태 ----------------------------------------------------- */\r
\r
    const s = { x: 0, y: 0, p: 0 }; // 화면에 그려진 값\r
    const t = { x: 0, y: 0, p: 0 }; // 목표값\r
    let idle = 0;\r
\r
    const apply = () => {\r
      setVar('--fx-plx-x', round(s.x, 4));\r
      setVar('--fx-plx-y', round(s.y, 4));\r
      setVar('--fx-plx-s', round(s.p, 4));\r
    };\r
\r
    /* --- 4. 스크롤 진행도 -------------------------------------------- */\r
\r
    /**\r
     * 요소 중심이 화면 중앙에 오면 0,\r
     * 아래에서 올라오는 중이면 +1, 위로 빠져나가는 중이면 -1.\r
     */\r
    const readScroll = () => {\r
      if (!opts.scroll) return;\r
      const rect = el.getBoundingClientRect();\r
      const vh = window.innerHeight || 1;\r
      const center = rect.top + rect.height / 2;\r
      const range = vh / 2 + rect.height / 2;\r
      t.p = clamp((center - vh / 2) / (range || 1), -1, 1);\r
    };\r
\r
    /* --- 5. 루프 ----------------------------------------------------- */\r
\r
    const loop = createVisibleLoop(\r
      el,\r
      (dt) => {\r
        s.x = damp(s.x, t.x, opts.speed, dt);\r
        s.y = damp(s.y, t.y, opts.speed, dt);\r
        s.p = damp(s.p, t.p, opts.speed, dt);\r
        apply();\r
\r
        // 수렴했고 입력도 없으면 서서히 잠듭니다.\r
        const moving =\r
          Math.abs(s.x - t.x) > 0.001 ||\r
          Math.abs(s.y - t.y) > 0.001 ||\r
          Math.abs(s.p - t.p) > 0.001;\r
\r
        if (moving) {\r
          idle = 0;\r
        } else {\r
          idle += dt;\r
          if (idle > opts.idleSleep) {\r
            s.x = t.x;\r
            s.y = t.y;\r
            s.p = t.p;\r
            apply();\r
            loop.pause();\r
          }\r
        }\r
      },\r
      { rootMargin: '200px' }\r
    );\r
    addCleanup(() => loop.destroy());\r
\r
    const wake = () => {\r
      idle = 0;\r
      loop.resume();\r
    };\r
\r
    /* --- 6. 입력 ----------------------------------------------------- */\r
\r
    if (opts.mouse) {\r
      const onMove = (event) => {\r
        if (event.pointerType === 'touch') return;\r
        if (opts.pointerTarget === 'self') {\r
          const rect = el.getBoundingClientRect();\r
          if (!rect.width || !rect.height) return;\r
          t.x = clamp(((event.clientX - rect.left) / rect.width) * 2 - 1, -1, 1);\r
          t.y = clamp(((event.clientY - rect.top) / rect.height) * 2 - 1, -1, 1);\r
        } else {\r
          t.x = clamp((event.clientX / window.innerWidth) * 2 - 1, -1, 1);\r
          t.y = clamp((event.clientY / window.innerHeight) * 2 - 1, -1, 1);\r
        }\r
        wake();\r
      };\r
\r
      const target = opts.pointerTarget === 'self' ? el : window;\r
      on(target, 'pointermove', onMove, { passive: true });\r
\r
      // 커서가 브라우저 밖으로 나가면 중앙으로 되돌립니다.\r
      on(document, 'pointerleave', () => {\r
        t.x = 0;\r
        t.y = 0;\r
        wake();\r
      });\r
    }\r
\r
    if (opts.scroll) {\r
      const onScroll = rafThrottle(() => {\r
        readScroll();\r
        wake();\r
      });\r
      on(window, 'scroll', onScroll, { passive: true });\r
      on(window, 'resize', onScroll, { passive: true });\r
      addCleanup(() => onScroll.cancel());\r
      readScroll();\r
      s.p = t.p; // 첫 진입에서 갑자기 미끄러지지 않도록 초기값을 맞춥니다\r
    }\r
\r
    apply();\r
    emit('ready', { layers: layers.length });\r
\r
    /* --- 7. 정리 ----------------------------------------------------- */\r
\r
    addCleanup(() => {\r
      for (const prop of [\r
        '--fx-plx-x', '--fx-plx-y', '--fx-plx-s',\r
        '--fx-plx-mx', '--fx-plx-my', '--fx-plx-sy',\r
        '--fx-plx-z', '--fx-plx-perspective',\r
      ]) {\r
        el.style.removeProperty(prop);\r
      }\r
    });\r
  },\r
});\r
\r
export default mount;\r
`,lw=`/**\r
 * parallax-layers / react.jsx\r
 */\r
\r
import React, { forwardRef } from 'react';\r
import { useFx, mergeRefs } from '../_core/react.js';\r
import { mount } from './index.js';\r
\r
import '../_core/core.css';\r
import './style.css';\r
\r
/** 훅 버전 — 기존 히어로 마크업에 ref만 붙입니다. */\r
export function useParallax(options, deps = []) {\r
  return useFx(mount, options, deps);\r
}\r
\r
/**\r
 * <ParallaxScene>\r
 *   <Layer depth={0.15}><img className="fx-hero__bg" src="/bg.jpg" alt="" /></Layer>\r
 *   <Layer depth={0.6}><h1 className="fx-hero__title">안녕하세요</h1></Layer>\r
 * </ParallaxScene>\r
 */\r
export const ParallaxScene = forwardRef(function ParallaxScene(\r
  {\r
    as: Tag = 'section',\r
    children,\r
    className = '',\r
    deps = [],\r
    mouse,\r
    mouseStrength,\r
    scroll,\r
    scrollStrength,\r
    depth,\r
    perspective,\r
    speed,\r
    pointerTarget,\r
    idleSleep,\r
    guard,\r
    ...rest\r
  },\r
  forwardedRef\r
) {\r
  const options = {};\r
  const raw = { mouse, mouseStrength, scroll, scrollStrength, depth, perspective, speed, pointerTarget, idleSleep, guard };\r
  for (const key in raw) if (raw[key] !== undefined) options[key] = raw[key];\r
\r
  const ref = useParallax(options, deps);\r
\r
  return (\r
    <Tag ref={mergeRefs(ref, forwardedRef)} className={className} {...rest}>\r
      {children}\r
    </Tag>\r
  );\r
});\r
\r
/**\r
 * 레이어 하나.\r
 * depth = 움직임 계수 (0 = 고정, 1 = 최대). 배경일수록 작게, 전경일수록 크게.\r
 */\r
export function Layer({ depth = 0.5, as: Tag = 'div', children, ...rest }) {\r
  return (\r
    <Tag data-fx-layer={depth} {...rest}>\r
      {children}\r
    </Tag>\r
  );\r
}\r
\r
export default ParallaxScene;\r
`,cw=`/**\r
 * parallax-layers / style.css\r
 * _core/core.css 를 먼저 불러오세요.\r
 */\r
\r
/* ================================================================== *\r
 * 1. 기능부 (필수)\r
 * ================================================================== */\r
\r
.fx-parallax-layers {\r
  position: relative;\r
  /* depth 옵션을 쓸 때만 의미가 있지만, 켜두어도 비용은 없습니다. */\r
  perspective: var(--fx-plx-perspective, 1200px);\r
  transform-style: preserve-3d;\r
}\r
\r
/*\r
 * 레이어 하나의 최종 이동량 =\r
 *   가로 : 마우스X × 계수 × mx\r
 *   세로 : 마우스Y × 계수 × my  +  스크롤진행도 × 계수 × sy\r
 *   높이 : 계수 × z\r
 *\r
 * JS는 컨테이너에 --fx-plx-x / -y / -s 세 개만 씁니다.\r
 * 나머지 곱셈은 브라우저(CSS calc)가 처리하므로 레이어가 많아도 비용이 늘지 않습니다.\r
 */\r
.fx-parallax-layers [data-fx-layer] {\r
  transform: translate3d(\r
    calc(var(--fx-plx-x, 0) * var(--fx-layer, 0) * var(--fx-plx-mx, -26px)),\r
    calc(\r
      var(--fx-plx-y, 0) * var(--fx-layer, 0) * var(--fx-plx-my, -26px) +\r
      var(--fx-plx-s, 0) * var(--fx-layer, 0) * var(--fx-plx-sy, 70px)\r
    ),\r
    calc(var(--fx-layer, 0) * var(--fx-plx-z, 0px))\r
  );\r
  will-change: transform;\r
}\r
\r
/* 꺼졌을 때는 모든 레이어를 제자리에 둡니다. */\r
.fx-parallax-layers.fx-inert [data-fx-layer] {\r
  transform: none;\r
  will-change: auto;\r
}\r
\r
/* ================================================================== *\r
 * 2. 선택 사항 — 히어로 레이아웃 스타터\r
 *\r
 * 레이어를 겹쳐 쌓는 가장 흔한 구조입니다.\r
 * 이미 히어로 디자인이 있으면 이 블록은 지우세요.\r
 * ================================================================== */\r
\r
.fx-hero {\r
  position: relative;\r
  display: grid;\r
  place-items: center;\r
  min-height: min(78vh, 720px);\r
  overflow: hidden;               /* 레이어가 밖으로 새어나가지 않게 */\r
  border-radius: var(--fx-radius, 16px);\r
  background: var(--fx-surface-2);\r
  isolation: isolate;\r
}\r
\r
/* 겹쳐 쌓이는 레이어: 전부 같은 그리드 칸에 배치 */\r
.fx-hero > * {\r
  grid-area: 1 / 1;\r
}\r
\r
.fx-hero__bg {\r
  width: 108%;                    /* 움직여도 가장자리가 비지 않도록 여유분 */\r
  height: 108%;\r
  object-fit: cover;\r
  justify-self: center;\r
  align-self: center;\r
}\r
\r
.fx-hero__content {\r
  position: relative;\r
  z-index: 2;\r
  text-align: center;\r
  padding: 32px;\r
  color: var(--fx-text);\r
}\r
\r
.fx-hero__title {\r
  margin: 0 0 12px;\r
  font-size: clamp(2rem, 6vw, 4rem);\r
  font-weight: 700;\r
  letter-spacing: -0.03em;\r
  line-height: 1.05;\r
}\r
\r
.fx-hero__sub {\r
  margin: 0;\r
  font-size: clamp(0.95rem, 2vw, 1.15rem);\r
  color: var(--fx-text-dim);\r
}\r
\r
/* 장식용 원형 블롭 — 레이어 계수를 다르게 주면 깊이가 살아납니다 */\r
.fx-hero__blob {\r
  width: clamp(180px, 30vw, 380px);\r
  aspect-ratio: 1;\r
  border-radius: 50%;\r
  filter: blur(46px);\r
  opacity: 0.55;\r
  pointer-events: none;\r
}\r
`,fw=`# \`scroll-reveal\` — 스크롤 3D 등장\r
\r
> **티어 T0** · 추가 용량 **0KB** · 의존성 없음 · **모든 환경에서 동작**\r
\r
스크롤해서 화면에 들어오면 요소가 3D로 등장합니다. 프리셋 5종.\r
\r
---\r
\r
## 1. 붙이기 — 바닐라\r
\r
\`\`\`html\r
<link rel="stylesheet" href="./effects/_core/core.css" />\r
<link rel="stylesheet" href="./effects/scroll-reveal/style.css" />\r
\r
<section class="projects">\r
  <article class="reveal">…</article>\r
  <article class="reveal">…</article>\r
  <article class="reveal">…</article>\r
</section>\r
\r
<script type="module">\r
  import { mount } from './effects/scroll-reveal/index.js';\r
  mount('.reveal', { preset: 'flip', stagger: 90 });\r
<\/script>\r
\`\`\`\r
\r
## 2. 붙이기 — React\r
\r
\`\`\`jsx\r
import { Reveal, RevealGroup } from './effects/scroll-reveal/react.jsx';\r
\r
<Reveal preset="rise" stagger={0}>\r
  <h2>프로젝트</h2>\r
</Reveal>\r
\r
<RevealGroup preset="flip" stagger={90} className="grid">\r
  <ProjectCard /> <ProjectCard /> <ProjectCard />\r
</RevealGroup>\r
\`\`\`\r
\r
---\r
\r
## 3. 프리셋\r
\r
| 프리셋 | 움직임 | 어울리는 곳 |\r
|---|---|---|\r
| \`rise\` **(기본)** | 아래에서 위로 | 어디에나. 고민되면 이거 |\r
| \`depth\` | 뒤에서 앞으로 (진짜 Z축) | 히어로 다음 첫 섹션 |\r
| \`flip\` | 바닥에서 카드가 일어섬 | 프로젝트 카드 그리드 |\r
| \`swing\` | 옆에서 문이 열리듯 | 타임라인 · 리스트 |\r
| \`zoom\` | 살짝 커지며 등장 | 이미지 · 썸네일 |\r
\r
> **한 페이지에 프리셋 2개까지.** 3개 넘어가면 산만해서 콘텐츠가 안 읽힙니다.\r
> 보통 "본문 = rise, 카드 그리드 = flip" 조합이면 충분합니다.\r
\r
---\r
\r
## 4. 두 가지 모드 — 이 효과의 핵심 설계\r
\r
### \`mode: 'once'\` (기본값)\r
\r
\`IntersectionObserver\`로 **한 번 등장하고 끝.** 모든 브라우저에서 동작합니다.\r
\r
### \`mode: 'scrub'\`\r
\r
CSS \`animation-timeline: view()\` — **스크롤 위치에 직접 묶입니다.**\r
메인 스레드 JS가 **0줄**이라 스크롤이 아무리 무거워도 절대 끊기지 않습니다.\r
\r
\`\`\`js\r
mount('.hero-line', { mode: 'scrub', preset: 'depth' });\r
\`\`\`\r
\r
| | \`once\` | \`scrub\` |\r
|---|---|---|\r
| 브라우저 지원 | 100% | **약 84%** (Baseline 미달) |\r
| 스크롤 되감기 | 그대로 유지 | **같이 되감김** |\r
| 메인 스레드 비용 | IO 콜백 1회 | **0** |\r
| 예측 가능성 | 높음 | 스크롤 속도에 따라 달라짐 |\r
\r
### 왜 기본값이 \`once\`인가\r
\r
스크롤을 올릴 때 콘텐츠가 다시 사라지는 건 대부분의 방문자에게 성가십니다.\r
**채용담당자가 위로 다시 스크롤해서 확인하려는 순간 글자가 사라지면 최악입니다.**\r
\`scrub\`은 히어로 같은 연출 구간에만 쓰세요.\r
\r
미지원 브라우저에서 \`scrub\`을 지정하면 **JS가 자동으로 \`once\`로 강등**합니다.\r
\`mode: 'auto'\`는 지원되면 \`scrub\`, 아니면 \`once\`입니다.\r
\r
---\r
\r
## 5. 옵션\r
\r
| 옵션 | 기본값 | 설명 |\r
|---|---|---|\r
| \`preset\` | \`'rise'\` | 위 표 참고 |\r
| \`mode\` | \`'once'\` | \`'once'\` / \`'scrub'\` / \`'auto'\` |\r
| \`duration\` | \`700\` | 등장 시간(ms). \`once\` 모드만 |\r
| \`delay\` | \`0\` | 기본 지연(ms) |\r
| \`stagger\` | \`80\` | 형제 간 지연 간격(ms). **0이면 동시 등장** |\r
| \`index\` | \`null\` | 스태거 순번 직접 지정 |\r
| \`distance\` | \`28\` | \`rise\` 이동 거리(px) |\r
| \`rotate\` | \`22\` | \`flip\`/\`swing\` 회전 각도(도) |\r
| \`depth\` | \`140\` | \`depth\` 후퇴 거리(px) |\r
| \`scale\` | \`0.92\` | \`zoom\`/\`depth\` 시작 배율 |\r
| \`threshold\` | \`0.15\` | 얼마나 들어와야 등장할지(0~1) |\r
| \`rootMargin\` | \`'0px 0px -10% 0px'\` | 감지 여유 |\r
| \`repeat\` | \`false\` | 화면 밖으로 나가면 다시 숨길지 |\r
\r
---\r
\r
## 6. 스태거 튜닝\r
\r
\`stagger\`는 **개수에 반비례**해서 잡아야 합니다.\r
\r
| 항목 수 | 권장 \`stagger\` | 전체 소요 |\r
|---|---|---|\r
| 2~4개 | \`90 ~ 120ms\` | ~0.5초 |\r
| 5~8개 | \`60 ~ 80ms\` | ~0.6초 |\r
| 9개 이상 | \`30 ~ 45ms\` | ~0.5초 |\r
\r
> **전체 등장이 0.8초를 넘기지 마세요.** 마지막 카드를 기다리는 게 느껴지는 순간\r
> 효과가 아니라 지연이 됩니다.\r
\r
**첫 화면(히어로)에는 \`stagger: 0\` 또는 \`40\` 이하.**\r
페이지에 들어오자마자 콘텐츠가 순차적으로 뜨면 로딩이 느린 것처럼 보입니다.\r
\r
### 순번은 어떻게 정해지나\r
\r
기본은 **부모 안에서의 순서**입니다. 카드 그리드처럼 부모의 자식이 전부 리빌 대상인\r
경우에 딱 맞습니다. 직접 지정하려면:\r
\r
\`\`\`html\r
<article class="reveal" data-fx-index="0">\r
\`\`\`\r
\r
React의 \`<RevealGroup>\`은 자동으로 \`index\`를 넣어줍니다(조건부 렌더링이 섞여도 안전).\r
\r
---\r
\r
## 7. ★ JS가 죽어도 콘텐츠가 사라지지 않습니다\r
\r
**"숨김" 상태는 \`.fx-scroll-reveal\` 클래스에만 걸려 있습니다.**\r
이 클래스는 JS가 마운트에 성공했을 때만 붙습니다.\r
\r
| 상황 | 결과 |\r
|---|---|\r
| JS 로드 실패 / 문법 에러 | 콘텐츠가 **애니메이션 없이 그냥 보입니다** |\r
| 동작 줄이기 ON | 콘텐츠가 **처음부터 보입니다** |\r
| 구형 브라우저 | 콘텐츠가 **그냥 보입니다** |\r
\r
콘텐츠를 CSS로 미리 숨겨두는 리빌 라이브러리는 JS가 죽으면 **페이지 전체가 백지**가 됩니다.\r
GitHub Pages에 경로를 잘못 올려 JS가 404 나는 일은 학생 포트폴리오에서 매우 흔합니다.\r
그 사고를 구조적으로 막았습니다.\r
\r
---\r
\r
## 8. 수동 제어\r
\r
\`\`\`js\r
const handle = mount('.reveal');\r
handle.items[2].api.reveal();  // 3번째를 수동으로 등장\r
handle.items[2].api.reset();   // 되돌리기\r
handle.api.mode;               // 실제로 적용된 모드('once' 또는 'scrub')\r
\`\`\`\r
\r
\`\`\`js\r
document.addEventListener('fx:scroll-reveal:reveal', (e) => {\r
  console.log('등장:', e.target, e.detail.index);\r
});\r
\`\`\`\r
\r
브라우저 지원 확인:\r
\r
\`\`\`js\r
import { supportsScrubMode } from './effects/scroll-reveal/index.js';\r
console.log(supportsScrubMode()); // true / false\r
\`\`\`\r
\r
---\r
\r
## 9. 자주 겪는 문제\r
\r
**Q. 첫 화면 요소가 등장하지 않습니다.**\r
→ \`rootMargin\`의 \`-10%\` 때문에 "조금 더 올라와야" 등장합니다.\r
첫 화면 요소는 \`rootMargin: '0px'\`로 두거나 \`threshold: 0\`으로 낮추세요.\r
\r
**Q. 스크롤을 빠르게 내리면 여러 개가 한꺼번에 뜹니다.**\r
→ 정상입니다. \`IntersectionObserver\`는 실제 진입 시점에 반응합니다.\r
빠른 스크롤에서도 순차 등장을 원하면 \`stagger\`를 키우세요.\r
\r
**Q. \`flip\`이 잘립니다.**\r
→ 회전 시 요소가 부모 밖으로 나갑니다. 부모의 \`overflow: hidden\`을 풀거나 \`rotate\`를 15 이하로 낮추세요.\r
\r
**Q. \`scrub\` 모드가 안 먹습니다.**\r
→ 브라우저 미지원입니다. \`handle.api.mode\`를 찍어보면 \`'once'\`로 강등된 게 보입니다.\r
Firefox 132 미만이 가장 흔한 원인입니다.\r
\r
**Q. 마지막 카드가 너무 늦게 뜹니다.**\r
→ \`stagger × 개수\`를 계산해보세요. 12개 × 80ms = **0.96초**입니다. 위의 스태거 표를 따르세요.\r
`,dw=`/**\r
 * scroll-reveal — 스크롤 진입 시 3D 등장\r
 * ───────────────────────────────────────────────────────────\r
 * 티어 T0 · 추가 용량 0KB · 모든 환경에서 동작\r
 *\r
 * 두 가지 모드가 있고, 이게 이 효과의 핵심 설계입니다.\r
 *\r
 *  once  (기본)  IntersectionObserver로 한 번 등장하고 끝.\r
 *                모든 브라우저에서 동작. 예측 가능. 포트폴리오에 안전.\r
 *\r
 *  scrub (선택)  CSS animation-timeline: view() — 스크롤 위치에 직접 묶입니다.\r
 *                메인 스레드 JS가 0줄이라 스크롤이 절대 끊기지 않습니다.\r
 *                단 2026년 7월 기준 글로벌 지원율 약 84%(Baseline 미달)이며,\r
 *                스크롤을 되감으면 애니메이션도 되감깁니다.\r
 *\r
 * 기본값을 'once'로 둔 이유:\r
 *   스크롤을 올릴 때 콘텐츠가 다시 사라지는 건 대부분의 방문자에게 성가십니다.\r
 *   채용담당자가 위로 다시 스크롤해서 확인하려는 순간 글자가 사라지면 최악입니다.\r
 *   'scrub'은 히어로 같은 연출 구간에만 쓰세요.\r
 *\r
 * ★ 중요한 안전장치\r
 *   "숨김" 상태는 .fx-scroll-reveal 클래스에만 걸려 있습니다.\r
 *   이 클래스는 JS가 마운트에 성공했을 때만 붙습니다.\r
 *   → JS가 실패하거나 가드에 걸리면 콘텐츠는 그냥 정상적으로 보입니다.\r
 *   콘텐츠를 CSS로 미리 숨겨두는 리빌 라이브러리는 JS가 죽으면\r
 *   페이지 전체가 백지가 됩니다. 그 사고를 구조적으로 막았습니다.\r
 */\r
\r
import { defineEffect, observeVisibility } from '../_core/index.js';\r
\r
const SUPPORTS_VIEW_TIMELINE =\r
  typeof CSS !== 'undefined' &&\r
  typeof CSS.supports === 'function' &&\r
  CSS.supports('animation-timeline', 'view()');\r
\r
const PRESETS = ['rise', 'depth', 'flip', 'swing', 'zoom'];\r
\r
export const mount = defineEffect({\r
  name: 'scroll-reveal',\r
\r
  defaults: {\r
    /** 'rise' | 'depth' | 'flip' | 'swing' | 'zoom' */\r
    preset: 'rise',\r
    /** 'once' | 'scrub' | 'auto'(지원되면 scrub, 아니면 once) */\r
    mode: 'once',\r
\r
    /** 등장에 걸리는 시간(ms). once 모드에서만 유효 */\r
    duration: 700,\r
    /** 기본 지연(ms) */\r
    delay: 0,\r
    /** 형제 요소 간 지연 간격(ms). 0이면 동시 등장 */\r
    stagger: 80,\r
    /** 스태거 순번을 직접 지정(null이면 부모 안에서의 순서로 자동 계산) */\r
    index: null,\r
\r
    /** rise 프리셋: 아래에서 올라오는 거리(px) */\r
    distance: 28,\r
    /** flip / swing 프리셋: 회전 각도(도) */\r
    rotate: 22,\r
    /** depth 프리셋: 뒤로 물러난 거리(px) */\r
    depth: 140,\r
    /** zoom / depth 프리셋: 시작 배율 */\r
    scale: 0.92,\r
    /** 원근 거리(px) */\r
    perspective: 1000,\r
\r
    /** once 모드: 화면에 얼마나 들어와야 등장할지(0~1) */\r
    threshold: 0.15,\r
    /** once 모드: 감지 여유. 아래쪽 -10%는 "조금 더 올라와야" 등장하게 합니다 */\r
    rootMargin: '0px 0px -10% 0px',\r
    /** once 모드: 화면 밖으로 나가면 다시 숨길지 */\r
    repeat: false,\r
\r
    /** scrub 모드: 애니메이션 구간 */\r
    rangeStart: 'entry 10%',\r
    rangeEnd: 'cover 40%',\r
  },\r
\r
  guard: {\r
    // 동작 줄이기 사용자는 효과를 끕니다.\r
    // → .fx-scroll-reveal이 사라지므로 콘텐츠가 처음부터 그냥 보입니다.\r
    motion: 'skip',\r
    pointer: 'any',\r
  },\r
\r
  setup({ el, opts, addCleanup, setVar, emit }) {\r
    /* --- 1. 프리셋 검증 ----------------------------------------------- */\r
\r
    const preset = PRESETS.includes(opts.preset) ? opts.preset : 'rise';\r
    if (preset !== opts.preset) {\r
      console.warn(\r
        \`[fx:scroll-reveal] 알 수 없는 preset "\${opts.preset}". \` +\r
          \`사용 가능: \${PRESETS.join(', ')}\`\r
      );\r
    }\r
    el.dataset.fxPreset = preset;\r
\r
    /* --- 2. 모드 결정 ------------------------------------------------- */\r
\r
    let mode = opts.mode;\r
    if (mode === 'auto') mode = SUPPORTS_VIEW_TIMELINE ? 'scrub' : 'once';\r
    if (mode === 'scrub' && !SUPPORTS_VIEW_TIMELINE) {\r
      // 이 브라우저는 scroll-driven animation을 모릅니다. 조용히 once로 내려갑니다.\r
      mode = 'once';\r
    }\r
    el.dataset.fxMode = mode;\r
\r
    /* --- 3. 스태거 순번 ----------------------------------------------- */\r
\r
    // 부모 안에서의 순서를 기본 순번으로 씁니다.\r
    // 카드 그리드처럼 "부모의 자식이 전부 리빌 대상"인 경우가 압도적으로 흔합니다.\r
    let index = opts.index;\r
    if (index === null || index === undefined) {\r
      const attr = el.dataset.fxIndex;\r
      if (attr !== undefined) index = parseInt(attr, 10);\r
    }\r
    if (!Number.isFinite(index)) {\r
      const siblings = el.parentElement ? el.parentElement.children : [];\r
      index = Math.max(0, Array.prototype.indexOf.call(siblings, el));\r
    }\r
\r
    /* --- 4. CSS 변수 -------------------------------------------------- */\r
\r
    setVar('--fx-reveal-duration', \`\${opts.duration}ms\`);\r
    setVar('--fx-reveal-delay', \`\${opts.delay + index * opts.stagger}ms\`);\r
    setVar('--fx-reveal-distance', \`\${opts.distance}px\`);\r
    setVar('--fx-reveal-rotate', \`\${opts.rotate}deg\`);\r
    setVar('--fx-reveal-depth', \`\${-Math.abs(opts.depth)}px\`);\r
    setVar('--fx-reveal-scale', opts.scale);\r
    setVar('--fx-reveal-perspective', \`\${opts.perspective}px\`);\r
\r
    if (mode === 'scrub') {\r
      setVar('--fx-reveal-start', opts.rangeStart);\r
      setVar('--fx-reveal-end', opts.rangeEnd);\r
    }\r
\r
    /* --- 5. 감지 (once 모드만) ---------------------------------------- */\r
\r
    if (mode === 'once') {\r
      let revealed = false;\r
\r
      const stop = observeVisibility(el, {\r
        threshold: opts.threshold,\r
        rootMargin: opts.rootMargin,\r
        onEnter: () => {\r
          if (revealed && !opts.repeat) return;\r
          revealed = true;\r
          el.classList.add('is-revealed');\r
          emit('reveal', { index });\r
          // 다시 숨기지 않을 거라면 감시를 즉시 끊습니다(리스너 누수 방지).\r
          if (!opts.repeat) stop();\r
        },\r
        onLeave: () => {\r
          if (!opts.repeat) return;\r
          el.classList.remove('is-revealed');\r
        },\r
      });\r
\r
      addCleanup(() => stop());\r
\r
      /*\r
       * 페이지 로드 시 이미 화면 안에 있는 요소는\r
       * IntersectionObserver가 즉시 콜백을 주므로 별도 처리가 필요 없습니다.\r
       * 다만 stagger가 크면 첫 화면 콘텐츠가 늦게 뜨므로,\r
       * 히어로에는 stagger를 0~40ms로 낮추는 것을 권장합니다.\r
       */\r
    }\r
\r
    /* --- 6. 정리 ------------------------------------------------------ */\r
\r
    addCleanup(() => {\r
      el.classList.remove('is-revealed');\r
      delete el.dataset.fxPreset;\r
      delete el.dataset.fxMode;\r
      for (const prop of [\r
        '--fx-reveal-duration', '--fx-reveal-delay', '--fx-reveal-distance',\r
        '--fx-reveal-rotate', '--fx-reveal-depth', '--fx-reveal-scale',\r
        '--fx-reveal-perspective', '--fx-reveal-start', '--fx-reveal-end',\r
      ]) {\r
        el.style.removeProperty(prop);\r
      }\r
    });\r
\r
    return {\r
      /** 수동으로 등장시키기 */\r
      reveal: () => el.classList.add('is-revealed'),\r
      /** 수동으로 되돌리기 */\r
      reset: () => el.classList.remove('is-revealed'),\r
      mode,\r
      index,\r
    };\r
  },\r
});\r
\r
/** 이 브라우저가 CSS 스크롤 기반 애니메이션을 지원하는지 */\r
export const supportsScrubMode = () => SUPPORTS_VIEW_TIMELINE;\r
\r
export default mount;\r
`,uw=`/**\r
 * scroll-reveal / react.jsx\r
 */\r
\r
import React, { forwardRef, Children, isValidElement, cloneElement } from 'react';\r
import { useFx, mergeRefs } from '../_core/react.js';\r
import { mount } from './index.js';\r
\r
import '../_core/core.css';\r
import './style.css';\r
\r
/** 훅 버전 */\r
export function useReveal(options, deps = []) {\r
  return useFx(mount, options, deps);\r
}\r
\r
/**\r
 * 단일 요소 리빌.\r
 *\r
 *   <Reveal preset="flip" stagger={0}>\r
 *     <h2>프로젝트</h2>\r
 *   </Reveal>\r
 */\r
export const Reveal = forwardRef(function Reveal(\r
  {\r
    as: Tag = 'div',\r
    children,\r
    className = '',\r
    deps = [],\r
    preset,\r
    mode,\r
    duration,\r
    delay,\r
    stagger,\r
    index,\r
    distance,\r
    rotate,\r
    depth,\r
    scale,\r
    perspective,\r
    threshold,\r
    rootMargin,\r
    repeat,\r
    rangeStart,\r
    rangeEnd,\r
    guard,\r
    ...rest\r
  },\r
  forwardedRef\r
) {\r
  const options = {};\r
  const raw = {\r
    preset, mode, duration, delay, stagger, index, distance, rotate, depth,\r
    scale, perspective, threshold, rootMargin, repeat, rangeStart, rangeEnd, guard,\r
  };\r
  for (const key in raw) if (raw[key] !== undefined) options[key] = raw[key];\r
\r
  const ref = useReveal(options, deps);\r
\r
  return (\r
    <Tag ref={mergeRefs(ref, forwardedRef)} className={className} {...rest}>\r
      {children}\r
    </Tag>\r
  );\r
});\r
\r
/**\r
 * 자식들을 순서대로 등장시킵니다.\r
 *\r
 *   <RevealGroup preset="rise" stagger={90} className="grid">\r
 *     <Card /> <Card /> <Card />\r
 *   </RevealGroup>\r
 *\r
 * 각 자식이 개별 Reveal로 감싸지고 index가 자동 부여됩니다.\r
 * (부모 안에서의 순서로 자동 계산되지만, 조건부 렌더링이 섞이면\r
 *  순번이 흔들리므로 여기서 명시적으로 넣어줍니다)\r
 */\r
export function RevealGroup({\r
  as: Tag = 'div',\r
  itemAs = 'div',\r
  children,\r
  className = '',\r
  itemClassName = '',\r
  ...options\r
}) {\r
  return (\r
    <Tag className={className}>\r
      {Children.map(children, (child, i) =>\r
        isValidElement(child) ? (\r
          <Reveal as={itemAs} className={itemClassName} index={i} {...options}>\r
            {cloneElement(child)}\r
          </Reveal>\r
        ) : (\r
          child\r
        )\r
      )}\r
    </Tag>\r
  );\r
}\r
\r
export default Reveal;\r
`,pw=`/**\r
 * scroll-reveal / style.css\r
 * _core/core.css 를 먼저 불러오세요.\r
 *\r
 * ★ 이 파일에서 가장 중요한 사실\r
 *   "숨김" 상태는 .fx-scroll-reveal 클래스에만 걸려 있습니다.\r
 *   이 클래스는 JS가 마운트에 성공했을 때만 붙습니다.\r
 *   → JS가 죽으면 콘텐츠가 사라지는 게 아니라, 그냥 애니메이션 없이 보입니다.\r
 *   콘텐츠를 CSS로 미리 숨겨두는 리빌 라이브러리는 JS 로드 실패 시\r
 *   페이지 전체가 백지가 됩니다. 그 사고를 구조적으로 막았습니다.\r
 */\r
\r
/* ================================================================== *\r
 * 1. 공통\r
 * ================================================================== */\r
\r
.fx-scroll-reveal {\r
  opacity: 0;\r
  transition:\r
    opacity var(--fx-reveal-duration, 700ms) var(--fx-ease-out) var(--fx-reveal-delay, 0ms),\r
    transform var(--fx-reveal-duration, 700ms) var(--fx-ease-out) var(--fx-reveal-delay, 0ms);\r
  /*\r
   * will-change를 일부러 쓰지 않습니다.\r
   * opacity와 transform은 이미 컴포지터에서 처리되고,\r
   * 리빌 대상은 보통 수십 개라 상시 레이어를 만들면 메모리만 먹습니다.\r
   */\r
}\r
\r
.fx-scroll-reveal.is-revealed {\r
  opacity: 1;\r
  transform: none;\r
}\r
\r
/* ================================================================== *\r
 * 2. 프리셋 — 숨김 상태의 transform\r
 * ================================================================== */\r
\r
/* rise — 아래에서 위로. 가장 무난하고 어디에나 어울립니다. */\r
.fx-scroll-reveal[data-fx-preset='rise'] {\r
  transform: translate3d(0, var(--fx-reveal-distance, 28px), 0);\r
}\r
\r
/* depth — 뒤에서 앞으로 다가옵니다. 진짜 Z축 이동입니다. */\r
.fx-scroll-reveal[data-fx-preset='depth'] {\r
  transform:\r
    perspective(var(--fx-reveal-perspective, 1000px))\r
    translate3d(0, calc(var(--fx-reveal-distance, 28px) * 0.4), var(--fx-reveal-depth, -140px))\r
    scale(var(--fx-reveal-scale, 0.92));\r
}\r
\r
/* flip — 바닥에서 카드가 일어섭니다. 그리드 카드에 잘 어울립니다. */\r
.fx-scroll-reveal[data-fx-preset='flip'] {\r
  transform-origin: 50% 100%;\r
  transform:\r
    perspective(var(--fx-reveal-perspective, 1000px))\r
    rotateX(var(--fx-reveal-rotate, 22deg))\r
    translate3d(0, calc(var(--fx-reveal-distance, 28px) * 0.5), 0);\r
}\r
\r
/* swing — 옆에서 문이 열리듯. 타임라인/리스트 항목에 어울립니다. */\r
.fx-scroll-reveal[data-fx-preset='swing'] {\r
  transform-origin: 0% 50%;\r
  transform:\r
    perspective(var(--fx-reveal-perspective, 1000px))\r
    rotateY(calc(var(--fx-reveal-rotate, 22deg) * -1))\r
    translate3d(calc(var(--fx-reveal-distance, 28px) * -0.5), 0, 0);\r
}\r
\r
/* zoom — 살짝 커지며 등장. 이미지에 어울립니다. */\r
.fx-scroll-reveal[data-fx-preset='zoom'] {\r
  transform: scale(var(--fx-reveal-scale, 0.92));\r
}\r
\r
/* ================================================================== *\r
 * 3. scrub 모드 — CSS 스크롤 기반 애니메이션\r
 *\r
 * 메인 스레드 JS가 0줄입니다. 스크롤이 아무리 무거워도 이 애니메이션은\r
 * 절대 끊기지 않습니다(컴포지터 스레드에서 처리).\r
 *\r
 * 2026년 7월 기준: Chrome/Edge 115+, Firefox 132+, Safari 18+\r
 * 글로벌 지원율 약 84%. Baseline에는 아직 미달입니다.\r
 * → @supports로 감싸고, 미지원 브라우저는 JS가 once 모드로 자동 강등합니다.\r
 * ================================================================== */\r
\r
@supports (animation-timeline: view()) {\r
  .fx-scroll-reveal[data-fx-mode='scrub'] {\r
    /* 트랜지션 대신 애니메이션이 상태를 관장합니다. */\r
    transition: none;\r
    animation-fill-mode: both;\r
    animation-timing-function: linear;\r
    animation-timeline: view();\r
    animation-range: var(--fx-reveal-start, entry 10%) var(--fx-reveal-end, cover 40%);\r
  }\r
\r
  .fx-scroll-reveal[data-fx-mode='scrub'][data-fx-preset='rise']  { animation-name: fx-reveal-rise; }\r
  .fx-scroll-reveal[data-fx-mode='scrub'][data-fx-preset='depth'] { animation-name: fx-reveal-depth; }\r
  .fx-scroll-reveal[data-fx-mode='scrub'][data-fx-preset='flip']  { animation-name: fx-reveal-flip; }\r
  .fx-scroll-reveal[data-fx-mode='scrub'][data-fx-preset='swing'] { animation-name: fx-reveal-swing; }\r
  .fx-scroll-reveal[data-fx-mode='scrub'][data-fx-preset='zoom']  { animation-name: fx-reveal-zoom; }\r
}\r
\r
@keyframes fx-reveal-rise {\r
  from { opacity: 0; transform: translate3d(0, var(--fx-reveal-distance, 28px), 0); }\r
  to   { opacity: 1; transform: none; }\r
}\r
\r
@keyframes fx-reveal-depth {\r
  from {\r
    opacity: 0;\r
    transform:\r
      perspective(var(--fx-reveal-perspective, 1000px))\r
      translate3d(0, calc(var(--fx-reveal-distance, 28px) * 0.4), var(--fx-reveal-depth, -140px))\r
      scale(var(--fx-reveal-scale, 0.92));\r
  }\r
  to { opacity: 1; transform: none; }\r
}\r
\r
@keyframes fx-reveal-flip {\r
  from {\r
    opacity: 0;\r
    transform:\r
      perspective(var(--fx-reveal-perspective, 1000px))\r
      rotateX(var(--fx-reveal-rotate, 22deg))\r
      translate3d(0, calc(var(--fx-reveal-distance, 28px) * 0.5), 0);\r
  }\r
  to { opacity: 1; transform: none; }\r
}\r
\r
@keyframes fx-reveal-swing {\r
  from {\r
    opacity: 0;\r
    transform:\r
      perspective(var(--fx-reveal-perspective, 1000px))\r
      rotateY(calc(var(--fx-reveal-rotate, 22deg) * -1))\r
      translate3d(calc(var(--fx-reveal-distance, 28px) * -0.5), 0, 0);\r
  }\r
  to { opacity: 1; transform: none; }\r
}\r
\r
@keyframes fx-reveal-zoom {\r
  from { opacity: 0; transform: scale(var(--fx-reveal-scale, 0.92)); }\r
  to   { opacity: 1; transform: none; }\r
}\r
\r
/* flip/swing은 회전 기준점이 필요하므로 keyframes 밖에서 유지합니다. */\r
.fx-scroll-reveal[data-fx-mode='scrub'][data-fx-preset='flip']  { transform-origin: 50% 100%; }\r
.fx-scroll-reveal[data-fx-mode='scrub'][data-fx-preset='swing'] { transform-origin: 0% 50%; }\r
`,mw=`# \`silk-bg\` — 흐르는 셰이더 그라디언트 배경\r
\r
> **티어 T2** · 추가 용량 **약 8KB**(OGL, 지연 로드) · WebGL 필요 · **폴백 항상 보장**\r
\r
히어로 섹션 배경이 비단처럼 천천히 흐릅니다.\r
포트폴리오에서 "이 사람 좀 하네" 소리를 가장 싸게 얻는 효과입니다.\r
\r
---\r
\r
## 1. 붙이기 — 바닐라\r
\r
\`\`\`html\r
<link rel="stylesheet" href="./effects/_core/core.css" />\r
<link rel="stylesheet" href="./effects/silk-bg/style.css" />\r
\r
<!-- .fx-silk 는 필수 (폴백 그라디언트가 여기 들어 있습니다) -->\r
<section class="hero fx-silk fx-silk--scrim fx-silk-hero">\r
  <div>\r
    <h1>프론트엔드 개발자<br />김하늘</h1>\r
    <p>React · TypeScript · 인터랙션 디자인</p>\r
  </div>\r
</section>\r
\r
<script type="module">\r
  import { mount } from './effects/silk-bg/index.js';\r
  mount('.hero', { colors: ['#0f172a', '#3b82f6', '#22d3ee'] });\r
<\/script>\r
\`\`\`\r
\r
## 2. 붙이기 — React\r
\r
\`\`\`jsx\r
import { SilkBackground } from './effects/silk-bg/react.jsx';\r
\r
<SilkBackground\r
  className="fx-silk-hero"\r
  scrim\r
  colors={['#0f172a', '#3b82f6', '#22d3ee']}\r
>\r
  <h1>프론트엔드 개발자 김하늘</h1>\r
</SilkBackground>\r
\`\`\`\r
\r
---\r
\r
## 3. 왜 three.js가 아니라 OGL인가\r
\r
이 효과에 필요한 건 **전체 화면 삼각형 하나 + 프래그먼트 셰이더**뿐입니다.\r
\r
| | gzip 용량 | 이 효과에 필요한 것 |\r
|---|---|---|\r
| three.js | 약 **150KB** | 씬 그래프·조명·머티리얼·로더 전부 딸려옴 |\r
| **OGL** | 약 **8KB** | 딱 필요한 만큼 |\r
\r
**같은 결과에 1/18 용량입니다.**\r
진짜 3D 모델이 필요해질 때만 three로 올라가세요 → [\`model-showcase\`](../model-showcase/README.md)\r
\r
그리고 **지연 로드**입니다. 이 효과를 마운트하는 순간에만 8KB 요청이 나갑니다.\r
다른 페이지는 한 바이트도 내지 않습니다.\r
\r
---\r
\r
## 4. 옵션\r
\r
| 옵션 | 기본값 | 설명 |\r
|---|---|---|\r
| \`colors\` | \`null\` | \`['#색1','#색2','#색3']\`. **\`null\`이면 CSS 변수 \`--fx-silk-c1~c3\`에서 읽습니다** |\r
| \`speed\` | \`0.12\` | 흐르는 속도. **0.08~0.18이 "배경"답고 0.3 넘으면 시선을 뺏습니다** |\r
| \`scale\` | \`2.2\` | 무늬 크기. 작을수록 크고 완만한 덩어리 |\r
| \`swirl\` | \`3.2\` | 도메인 워핑 강도. **이게 "비단결"을 만듭니다. 0이면 그냥 구름** |\r
| \`grain\` | \`0.035\` | 그레인 세기. 밴딩 제거용 |\r
| \`mouse\` | \`true\` | 마우스로 무늬 밀기 |\r
| \`mouseStrength\` | \`0.18\` | 마우스 영향 강도 |\r
| \`alpha\` | \`1\` | 1 미만이면 뒤 배경과 섞입니다 |\r
| \`dpr\` | \`1.25\` | 렌더 해상도 배율 상한 |\r
| \`fps\` | \`0\` | 프레임 상한. 0이면 저사양 기기에서 자동 30fps |\r
\r
### 색은 한 곳에서만 관리하세요\r
\r
\`colors\` 옵션을 주면 JS가 **CSS 변수에도 같은 색을 써 넣습니다.**\r
그래서 셰이더와 폴백 그라디언트가 항상 같은 색입니다.\r
\r
CSS만으로 색을 정하고 싶으면 옵션을 비우고:\r
\r
\`\`\`css\r
.hero { --fx-silk-c1: #0b1020; --fx-silk-c2: #2563eb; --fx-silk-c3: #7dd3fc; }\r
\`\`\`\r
\r
---\r
\r
## 5. 3중 안전망 — 절대 빈 화면이 안 됩니다\r
\r
| 상황 | 결과 |\r
|---|---|\r
| WebGL 미지원 / 동작 줄이기 | 마운트되지 않음 → **CSS 그라디언트가 그대로** |\r
| OGL 로드 실패 (CDN 차단·사내망·오프라인) | 캔버스 제거 → **CSS 그라디언트가 그대로** |\r
| WebGL 컨텍스트 손실 (GPU 드라이버 재시작 등) | 캔버스 페이드아웃 → **CSS 그라디언트가 드러남**, 복구되면 자동 재개 |\r
\r
**폴백 그라디언트는 \`.fx-silk\` 클래스에 항상 깔려 있습니다.** 캔버스는 그 위에 얹힐 뿐입니다.\r
그래서 어떤 실패 경로에서도 히어로가 까맣게 비지 않습니다.\r
\r
> 컨텍스트 손실은 이론적인 얘기가 아닙니다. 탭을 오래 켜두거나 다른 프로그램이\r
> GPU를 많이 쓰면 실제로 일어납니다. 처리하지 않은 셰이더 배경은 **영구히 까맣게 남습니다.**\r
\r
---\r
\r
## 6. 성능 노트\r
\r
| 처리 | 효과 |\r
|---|---|\r
| \`dpr\` 상한 1.25 | 배경 그라디언트는 디테일이 없어 눈으로 차이가 안 납니다. 2로 올리면 픽셀 수가 **2.5배** |\r
| \`antialias: false\` | 전체 화면 그라디언트에 안티에일리어싱은 무의미 |\r
| \`powerPreference: 'low-power'\` | 배경 때문에 노트북 외장 GPU를 깨우지 않습니다 |\r
| 화면 밖 → 루프 완전 정지 | 스크롤해서 지나가면 GPU 사용률 0 |\r
| 저사양 기기 30fps 자동 | 배경은 30fps로도 충분히 부드럽습니다 |\r
| 값 노이즈 (심플렉스 아님) | 5옥타브 × 도메인 워핑이면 모바일에서 차이가 큽니다 |\r
| 컨텍스트 명시적 반납 | 브라우저당 WebGL 컨텍스트는 8~16개 한도. SPA 라우팅에서 금방 걸립니다 |\r
\r
---\r
\r
## 7. 가독성 — 반드시 읽어야 할 부분\r
\r
**그라디언트 배경 위의 흰 글씨는 밝은 프레임에서 안 읽힙니다.**\r
무늬가 계속 움직이므로 "지금은 괜찮아 보여도" 3초 뒤에 안 읽힐 수 있습니다.\r
\r
\`\`\`html\r
<section class="hero fx-silk fx-silk--scrim">  <!-- 어두운 오버레이 -->\r
<section class="hero fx-silk fx-silk--scrim-light">  <!-- 밝은 오버레이 -->\r
\`\`\`\r
\r
한 겹 깔면 어느 프레임에서도 대비가 유지됩니다.\r
**이거 안 하면 채용담당자가 이름을 못 읽습니다.**\r
\r
---\r
\r
## 8. 색 조합 레시피\r
\r
\`\`\`js\r
// 딥 블루 (가장 안전, 어떤 포폴에도 어울림)\r
{ colors: ['#0f172a', '#3b82f6', '#22d3ee'] }\r
\r
// 바이올렛 (기본값)\r
{ colors: ['#1b1d3a', '#5b5bd6', '#a78bfa'] }\r
\r
// 선셋\r
{ colors: ['#2a1120', '#e0533d', '#f7b955'] }\r
\r
// 모노톤 (텍스트 가독성 최고)\r
{ colors: ['#0a0a0a', '#3f3f46', '#a1a1aa'], swirl: 4.5 }\r
\r
// 민트\r
{ colors: ['#08201c', '#10b981', '#a7f3d0'] }\r
\`\`\`\r
\r
> **채도가 높은 색 3개는 피하세요.** 어두운 색 1개 + 중간 1개 + 밝은 액센트 1개 조합이\r
> 텍스트 가독성과 고급스러움을 동시에 잡습니다.\r
\r
---\r
\r
## 9. 셰이더 직접 고치기\r
\r
\`shader.js\`의 \`FRAG\`만 바꾸면 완전히 다른 배경이 됩니다.\r
로직(\`index.js\`)은 건드릴 필요가 없습니다.\r
\r
- \`uSwirl\`을 \`0\`으로 → 도메인 워핑 없는 구름\r
- \`fbm\`의 옥타브(\`i < 5\`)를 \`3\`으로 → 더 부드럽고 더 빠름\r
- \`p *= 2.02\`의 \`2.02\`를 \`1.7\`로 → 더 유기적인 결\r
\r
> \`2.02\`가 \`2.0\`이 아닌 건 실수가 아닙니다. 정확히 2배씩 키우면 옥타브 격자가\r
> 정렬돼서 규칙적인 무늬가 눈에 보입니다.\r
\r
---\r
\r
## 10. 자주 겪는 문제\r
\r
**Q. 배경이 안 보입니다(단색만).**\r
→ 폴백 그라디언트가 보이는 상태입니다. 콘솔에 \`[fx:silk-bg]\` 경고가 있는지,\r
요소에 \`data-fx-skipped="no-webgl"\`이 있는지 확인하세요.\r
\r
**Q. 콘텐츠가 캔버스 뒤에 숨습니다.**\r
→ \`.fx-silk > *\`에 \`z-index: 1\`이 걸려 있습니다. 콘텐츠가 \`.fx-silk\`의 **직계 자식**인지 확인하세요.\r
\r
**Q. 높이가 0입니다.**\r
→ 캔버스는 \`absolute\`라 높이를 만들지 못합니다. 컨테이너에 \`min-height\`가 필요합니다\r
(\`.fx-silk-hero\`에 이미 들어 있습니다).\r
\r
**Q. 노트북 팬이 돕니다.**\r
→ \`fps: 30\`, \`dpr: 1\`로 낮추세요. 배경으로는 차이를 못 느낍니다.\r
\r
**Q. 페이지를 옮겨 다니면 배경이 안 뜹니다(React SPA).**\r
→ WebGL 컨텍스트 한도(8~16개)에 걸린 것입니다. \`destroy\`가 제대로 불리는지 확인하세요.\r
\`useSilk\`/\`<SilkBackground>\`를 쓰면 언마운트 시 컨텍스트를 명시적으로 반납합니다.\r
\r
**Q. 그라디언트에 줄무늬(밴딩)가 보입니다.**\r
→ \`grain\`을 \`0.05\`까지 올리세요. 8비트 컬러의 한계를 노이즈로 가리는 표준 기법입니다.\r
`,hw=`/**\r
 * silk-bg — 흐르는 셰이더 그라디언트 배경\r
 * ───────────────────────────────────────────────────────────\r
 * 티어 T2 · 추가 용량 약 8KB(OGL, 지연 로드) · WebGL 필요\r
 *\r
 * three.js가 아니라 OGL을 쓰는 이유:\r
 *   이 효과에 필요한 건 "전체 화면 삼각형 하나에 프래그먼트 셰이더"뿐입니다.\r
 *   three.js(gzip 약 150KB)는 씬 그래프·조명·머티리얼·로더를 전부 들고 옵니다.\r
 *   OGL은 gzip 약 8KB. 같은 결과에 1/18 용량입니다.\r
 *   진짜 3D 모델이 필요할 때만 three로 올라가세요.\r
 *\r
 * 3중 안전망:\r
 *   1. WebGL 미지원 / 동작 줄이기 → 애초에 마운트되지 않고 CSS 그라디언트가 남습니다\r
 *   2. OGL 로드 실패(CDN 차단 등)  → 캔버스를 만들지 않고 CSS 그라디언트가 남습니다\r
 *   3. WebGL 컨텍스트 손실         → 루프를 멈추고, 복구되면 자동 재개\r
 *\r
 *   어느 경우에도 "빈 화면"이 나오지 않습니다.\r
 */\r
\r
import {\r
  defineEffect,\r
  loadOGL,\r
  createVisibleLoop,\r
  observeResize,\r
  hexToRgb,\r
  damp,\r
  clamp,\r
  dprCap,\r
  fpsCap,\r
} from '../_core/index.js';\r
\r
import { VERT, FRAG } from './shader.js';\r
\r
const DEFAULT_COLORS = ['#1b1d3a', '#5b5bd6', '#a78bfa'];\r
\r
/**\r
 * 색을 어디서 읽을지 결정합니다.\r
 * 옵션이 우선이고, 없으면 CSS 변수(--fx-silk-c1..c3)를 봅니다.\r
 * → CSS 폴백 그라디언트와 셰이더가 항상 같은 색을 쓰게 됩니다.\r
 */\r
function resolveColors(el, optColors) {\r
  if (Array.isArray(optColors) && optColors.length >= 2) {\r
    const c = optColors.slice(0, 3);\r
    while (c.length < 3) c.push(c[c.length - 1]);\r
    return c;\r
  }\r
  const cs = getComputedStyle(el);\r
  return DEFAULT_COLORS.map((fallback, i) => {\r
    const v = cs.getPropertyValue(\`--fx-silk-c\${i + 1}\`).trim();\r
    return /^#?[0-9a-f]{3,6}$/i.test(v) ? v : fallback;\r
  });\r
}\r
\r
export const mount = defineEffect({\r
  name: 'silk-bg',\r
\r
  defaults: {\r
    /** ['#1b1d3a','#5b5bd6','#a78bfa'] — null이면 CSS 변수에서 읽습니다 */\r
    colors: null,\r
    /** 흐르는 속도. 0.08~0.18이 "배경"답고, 0.3 넘으면 시선을 뺏습니다 */\r
    speed: 0.12,\r
    /** 무늬 크기. 작을수록 크고 완만한 덩어리 */\r
    scale: 2.2,\r
    /** 도메인 워핑 강도. 이게 "비단결"을 만듭니다. 0이면 그냥 구름 */\r
    swirl: 3.2,\r
    /** 그레인 세기. 그라디언트 밴딩(줄무늬) 제거용. 0.02~0.05 */\r
    grain: 0.035,\r
    /** 마우스로 무늬를 밀기 */\r
    mouse: true,\r
    /** 마우스 영향 강도 */\r
    mouseStrength: 0.18,\r
    /** 투명도. 1 미만이면 뒤 배경과 섞입니다 */\r
    alpha: 1,\r
    /**\r
     * 렌더 해상도 배율 상한.\r
     * 배경 그라디언트는 디테일이 없어서 1.25면 충분합니다.\r
     * 2로 올리면 픽셀 수가 2.5배가 되는데 눈으로는 차이가 안 납니다.\r
     */\r
    dpr: 1.25,\r
    /** 프레임 상한. 0이면 기기 등급에 따라 자동(저사양 30fps) */\r
    fps: 0,\r
  },\r
\r
  guard: {\r
    motion: 'skip',\r
    webgl: true,\r
    pointer: 'any',\r
  },\r
\r
  setup({ el, opts, on, addCleanup, setVar, emit }) {\r
    /* --- 1. 색을 CSS에도 반영 (폴백 그라디언트와 동기화) --------------- */\r
\r
    const colors = resolveColors(el, opts.colors);\r
    colors.forEach((c, i) => setVar(\`--fx-silk-c\${i + 1}\`, c));\r
\r
    if (getComputedStyle(el).position === 'static') {\r
      el.style.position = 'relative';\r
      addCleanup(() => {\r
        el.style.position = '';\r
      });\r
    }\r
\r
    /* --- 2. 캔버스 --------------------------------------------------- */\r
\r
    const canvas = document.createElement('canvas');\r
    /* fx-layer — 배경 레이어 공용 표식(다른 팩이 콘텐츠로 착각하지 않게). */\r
    canvas.className = 'fx-silk-bg__canvas fx-layer';\r
    canvas.setAttribute('aria-hidden', 'true'); // 순수 장식\r
    el.prepend(canvas);\r
    addCleanup(() => canvas.remove());\r
\r
    /* --- 3. 비동기 초기화 -------------------------------------------- */\r
\r
    let cancelled = false;\r
    let dispose = null;\r
\r
    // setup은 동기 함수이므로, 정리 훅을 먼저 걸어두고 비동기로 진행합니다.\r
    addCleanup(() => {\r
      cancelled = true;\r
      dispose?.();\r
      dispose = null;\r
    });\r
\r
    (async () => {\r
      const OGL = await loadOGL();\r
      if (cancelled) return;\r
\r
      const { Renderer, Program, Mesh, Triangle } = OGL;\r
\r
      const renderer = new Renderer({\r
        canvas,\r
        dpr: Math.min(dprCap(2), opts.dpr),\r
        alpha: opts.alpha < 1,\r
        antialias: false, // 전체 화면 그라디언트에 안티에일리어싱은 무의미합니다\r
        depth: false,\r
        stencil: false,\r
        powerPreference: 'low-power', // 배경에 외장 GPU를 깨울 이유가 없습니다\r
      });\r
      const gl = renderer.gl;\r
\r
      const [c1, c2, c3] = colors.map(hexToRgb);\r
\r
      const program = new Program(gl, {\r
        vertex: VERT,\r
        fragment: FRAG,\r
        uniforms: {\r
          uTime: { value: 0 },\r
          uResolution: { value: [1, 1] },\r
          uColor1: { value: c1 },\r
          uColor2: { value: c2 },\r
          uColor3: { value: c3 },\r
          uScale: { value: opts.scale },\r
          uSwirl: { value: opts.swirl },\r
          uGrain: { value: opts.grain },\r
          uMouse: { value: [0, 0] },\r
          uAlpha: { value: opts.alpha },\r
        },\r
        transparent: opts.alpha < 1,\r
        depthTest: false,\r
      });\r
\r
      const mesh = new Mesh(gl, { geometry: new Triangle(gl), program });\r
\r
      /* --- 4. 리사이즈 ---------------------------------------------- */\r
\r
      const resize = () => {\r
        const w = el.clientWidth || 1;\r
        const h = el.clientHeight || 1;\r
        renderer.setSize(w, h);\r
        program.uniforms.uResolution.value = [gl.canvas.width, gl.canvas.height];\r
      };\r
      const stopResize = observeResize(el, resize);\r
      resize();\r
\r
      /* --- 5. 마우스 ------------------------------------------------- */\r
\r
      const mouse = { x: 0, y: 0, tx: 0, ty: 0 };\r
      let stopMouse = () => {};\r
\r
      if (opts.mouse) {\r
        const onMove = (event) => {\r
          if (event.pointerType === 'touch') return;\r
          const rect = el.getBoundingClientRect();\r
          if (!rect.width) return;\r
          mouse.tx = clamp(((event.clientX - rect.left) / rect.width) * 2 - 1, -1, 1) * opts.mouseStrength;\r
          mouse.ty = clamp(((event.clientY - rect.top) / rect.height) * 2 - 1, -1, 1) * opts.mouseStrength;\r
        };\r
        window.addEventListener('pointermove', onMove, { passive: true });\r
        stopMouse = () => window.removeEventListener('pointermove', onMove);\r
      }\r
\r
      /* --- 6. 렌더 루프 ---------------------------------------------- */\r
\r
      let time = 0;\r
      const loop = createVisibleLoop(\r
        el,\r
        (dt) => {\r
          time += dt * opts.speed;\r
          program.uniforms.uTime.value = time;\r
\r
          if (opts.mouse) {\r
            // 마우스를 그대로 따라가면 무늬가 튑니다. 부드럽게 끌고 옵니다.\r
            mouse.x = damp(mouse.x, mouse.tx, 3.5, dt);\r
            mouse.y = damp(mouse.y, mouse.ty, 3.5, dt);\r
            program.uniforms.uMouse.value = [mouse.x, mouse.y];\r
          }\r
\r
          renderer.render({ scene: mesh });\r
        },\r
        { fps: opts.fps || fpsCap(), rootMargin: '120px' }\r
      );\r
\r
      /* --- 7. 컨텍스트 손실 대응 -------------------------------------- */\r
\r
      // 탭을 오래 켜두거나 GPU 드라이버가 재시작되면 실제로 발생합니다.\r
      // 처리하지 않으면 배경이 영구히 까맣게 남습니다.\r
      const onLost = (event) => {\r
        event.preventDefault();\r
        loop.pause();\r
        el.classList.add('fx-silk-bg--lost');\r
      };\r
      const onRestored = () => {\r
        el.classList.remove('fx-silk-bg--lost');\r
        resize();\r
        loop.resume();\r
      };\r
      canvas.addEventListener('webglcontextlost', onLost);\r
      canvas.addEventListener('webglcontextrestored', onRestored);\r
\r
      /* --- 8. 정리 --------------------------------------------------- */\r
\r
      dispose = () => {\r
        loop.destroy();\r
        stopResize();\r
        stopMouse();\r
        canvas.removeEventListener('webglcontextlost', onLost);\r
        canvas.removeEventListener('webglcontextrestored', onRestored);\r
        // WebGL 컨텍스트는 브라우저당 개수 제한이 있습니다(보통 8~16개).\r
        // 명시적으로 반납하지 않으면 SPA 라우팅 중에 금방 한도에 걸립니다.\r
        gl.getExtension('WEBGL_lose_context')?.loseContext();\r
      };\r
\r
      el.classList.add('fx-silk-bg--ready');\r
      addCleanup(() => el.classList.remove('fx-silk-bg--ready'));\r
      emit('ready', { colors });\r
    })().catch((err) => {\r
      // CDN 차단, 사내망, 오프라인 등. 조용히 CSS 그라디언트로 남습니다.\r
      console.warn('[fx:silk-bg] WebGL 초기화 실패 — CSS 그라디언트로 대체합니다.', err);\r
      canvas.remove();\r
      el.classList.add('fx-silk-bg--failed');\r
    });\r
\r
    /* --- 9. 색 변수 정리 ---------------------------------------------- */\r
\r
    addCleanup(() => {\r
      el.classList.remove('fx-silk-bg--failed', 'fx-silk-bg--lost');\r
      // --fx-silk-c* 는 폴백 그라디언트가 계속 써야 하므로 지우지 않습니다.\r
    });\r
  },\r
});\r
\r
export default mount;\r
`,xw=`/**\r
 * silk-bg / react.jsx\r
 */\r
\r
import React, { forwardRef } from 'react';\r
import { useFx, mergeRefs } from '../_core/react.js';\r
import { mount } from './index.js';\r
\r
import '../_core/core.css';\r
import './style.css';\r
\r
/** 훅 버전 — 기존 히어로 섹션에 붙일 때. 컨테이너에 .fx-silk 클래스를 꼭 주세요. */\r
export function useSilk(options, deps = []) {\r
  return useFx(mount, options, deps);\r
}\r
\r
/**\r
 * <SilkBackground colors={['#0f172a', '#3b82f6', '#22d3ee']} scrim className="fx-silk-hero">\r
 *   <h1>안녕하세요</h1>\r
 * </SilkBackground>\r
 *\r
 * 색을 바꾸려면 colors 배열과 함께 deps에 넣어주세요:\r
 *   <SilkBackground colors={c} deps={[c.join()]} />\r
 */\r
export const SilkBackground = forwardRef(function SilkBackground(\r
  {\r
    as: Tag = 'section',\r
    children,\r
    className = '',\r
    /** 'dark' | 'light' | false — 배경 위 글자 가독성 보정 */\r
    scrim = false,\r
    deps = [],\r
    colors,\r
    speed,\r
    scale,\r
    swirl,\r
    grain,\r
    mouse,\r
    mouseStrength,\r
    alpha,\r
    dpr,\r
    fps,\r
    guard,\r
    ...rest\r
  },\r
  forwardedRef\r
) {\r
  const options = {};\r
  const raw = { colors, speed, scale, swirl, grain, mouse, mouseStrength, alpha, dpr, fps, guard };\r
  for (const key in raw) if (raw[key] !== undefined) options[key] = raw[key];\r
\r
  const ref = useSilk(options, deps);\r
\r
  const scrimClass =\r
    scrim === 'light' ? 'fx-silk--scrim-light' : scrim ? 'fx-silk--scrim' : '';\r
\r
  return (\r
    <Tag\r
      ref={mergeRefs(ref, forwardedRef)}\r
      className={\`fx-silk \${scrimClass} \${className}\`}\r
      {...rest}\r
    >\r
      {children}\r
    </Tag>\r
  );\r
});\r
\r
export default SilkBackground;\r
`,gw=`/**\r
 * silk-bg / shader.js\r
 * GLSL을 별도 파일로 뺀 이유: index.js를 읽을 때 로직과 셰이더가 섞이지 않게 하려고.\r
 * 셰이더만 갈아끼우면 완전히 다른 배경이 됩니다.\r
 */\r
\r
/**\r
 * 전체 화면 삼각형. OGL의 Triangle 지오메트리는\r
 * position(vec2, 클립 공간)과 uv(vec2)를 제공합니다.\r
 */\r
export const VERT = /* glsl */ \`\r
  attribute vec2 uv;\r
  attribute vec2 position;\r
  varying vec2 vUv;\r
\r
  void main() {\r
    vUv = uv;\r
    gl_Position = vec4(position, 0.0, 1.0);\r
  }\r
\`;\r
\r
/**\r
 * 도메인 워핑(domain warping) fbm 그라디언트.\r
 *\r
 * 원리:\r
 *   1. 값 노이즈(value noise)를 여러 옥타브 쌓아 fbm을 만듭니다.\r
 *   2. 그 fbm 결과로 좌표 자체를 왜곡시킵니다(= 도메인 워핑).\r
 *   3. 왜곡된 좌표로 다시 fbm을 뽑습니다.\r
 *   → 단순한 구름 무늬가 비단이 흐르는 듯한 결로 바뀝니다.\r
 *\r
 * 왜 값 노이즈인가:\r
 *   심플렉스 노이즈가 더 예쁘지만 코드가 3배 길고, 5옥타브 × 도메인 워핑이면\r
 *   모바일 GPU에서 프레임이 떨어집니다. 배경으로 흐릿하게 깔리는 용도라\r
 *   값 노이즈로 충분하고, 성능 차이는 큽니다.\r
 */\r
export const FRAG = /* glsl */ \`\r
  precision highp float;\r
\r
  uniform float uTime;\r
  uniform vec2  uResolution;\r
  uniform vec3  uColor1;\r
  uniform vec3  uColor2;\r
  uniform vec3  uColor3;\r
  uniform float uScale;\r
  uniform float uSwirl;\r
  uniform float uGrain;\r
  uniform vec2  uMouse;\r
  uniform float uAlpha;\r
\r
  varying vec2 vUv;\r
\r
  float hash(vec2 p) {\r
    p = fract(p * vec2(123.34, 456.21));\r
    p += dot(p, p + 45.32);\r
    return fract(p.x * p.y);\r
  }\r
\r
  float noise(vec2 p) {\r
    vec2 i = floor(p);\r
    vec2 f = fract(p);\r
    // smoothstep 보간 — 격자 경계가 보이지 않게 합니다\r
    vec2 u = f * f * (3.0 - 2.0 * f);\r
    return mix(\r
      mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),\r
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),\r
      u.y\r
    );\r
  }\r
\r
  float fbm(vec2 p) {\r
    float v = 0.0;\r
    float a = 0.5;\r
    // 2.02는 일부러 2.0이 아닙니다. 정확히 2배씩 키우면\r
    // 옥타브들의 격자가 정렬돼서 규칙적인 무늬가 보입니다.\r
    for (int i = 0; i < 5; i++) {\r
      v += a * noise(p);\r
      p *= 2.02;\r
      a *= 0.5;\r
    }\r
    return v;\r
  }\r
\r
  void main() {\r
    // 화면 비율 보정 — 이게 없으면 세로가 긴 화면에서 무늬가 늘어납니다\r
    float aspect = uResolution.x / max(uResolution.y, 1.0);\r
    vec2 p = (vUv - 0.5) * vec2(aspect, 1.0) * uScale;\r
    p += uMouse;\r
\r
    float t = uTime;\r
\r
    // 1단계 워핑\r
    vec2 q = vec2(\r
      fbm(p + vec2(0.0, t * 0.15)),\r
      fbm(p + vec2(5.2, 1.3) - t * 0.10)\r
    );\r
\r
    // 2단계 워핑 — 여기서 "흐르는 결"이 생깁니다\r
    vec2 r = vec2(\r
      fbm(p + 4.0 * q + vec2(1.7, 9.2) + t * 0.12),\r
      fbm(p + 4.0 * q + vec2(8.3, 2.8) - t * 0.09)\r
    );\r
\r
    float f = clamp(fbm(p + uSwirl * r) * 1.15, 0.0, 1.0);\r
\r
    vec3 col = mix(uColor1, uColor2, smoothstep(0.15, 0.72, f));\r
    col = mix(col, uColor3, smoothstep(0.50, 1.05, length(r) * 0.75));\r
\r
    // 미세 그레인 — 8비트 그라디언트에서 생기는 밴딩(줄무늬)을 없앱니다.\r
    // 이 한 줄이 있고 없고가 "무료 템플릿"과 "제대로 만든 것"의 차이를 만듭니다.\r
    col += (hash(vUv * uResolution) - 0.5) * uGrain;\r
\r
    gl_FragColor = vec4(col, uAlpha);\r
  }\r
\`;\r
`,vw=`/**\r
 * silk-bg / style.css\r
 * _core/core.css 를 먼저 불러오세요.\r
 *\r
 * ★ 핵심: CSS 그라디언트 폴백이 "항상" 깔려 있습니다.\r
 *   캔버스는 그 위에 얹힐 뿐입니다.\r
 *   WebGL이 없든, OGL 로드가 실패하든, 동작 줄이기든 —\r
 *   어떤 경우에도 빈 화면이 나오지 않습니다.\r
 */\r
\r
/* ================================================================== *\r
 * 1. 컨테이너 — 이 클래스는 사용자가 직접 붙입니다(JS와 무관)\r
 * ================================================================== */\r
\r
.fx-silk {\r
  position: relative;\r
  isolation: isolate;\r
  overflow: hidden;\r
\r
  /* 셰이더와 동일한 색. JS가 옵션으로 색을 받으면 이 변수를 덮어씁니다. */\r
  --fx-silk-c1: #1b1d3a;\r
  --fx-silk-c2: #5b5bd6;\r
  --fx-silk-c3: #a78bfa;\r
\r
  /* 폴백 그라디언트 — 셰이더 무늬를 대략 흉내 냅니다 */\r
  background-color: var(--fx-silk-c1);\r
  background-image:\r
    radial-gradient(120% 90% at 18% 12%, var(--fx-silk-c2) 0%, transparent 58%),\r
    radial-gradient(100% 80% at 82% 78%, var(--fx-silk-c3) 0%, transparent 55%),\r
    radial-gradient(90% 70% at 55% 45%, color-mix(in srgb, var(--fx-silk-c2) 55%, var(--fx-silk-c3)) 0%, transparent 62%);\r
}\r
\r
/* ================================================================== *\r
 * 2. 캔버스\r
 * ================================================================== */\r
\r
.fx-silk-bg__canvas {\r
  position: absolute;\r
  inset: 0;\r
  z-index: 0;\r
  display: block;\r
  width: 100%;\r
  height: 100%;\r
  /* 배경 위의 콘텐츠가 클릭 가능해야 합니다 */\r
  pointer-events: none;\r
\r
  /* 셰이더 첫 프레임이 그려지기 전 깜빡임을 막습니다 */\r
  opacity: 0;\r
  transition: opacity 600ms var(--fx-ease-out);\r
}\r
\r
.fx-silk-bg--ready .fx-silk-bg__canvas {\r
  opacity: 1;\r
}\r
\r
/* 컨텍스트 손실 시: 캔버스를 감추면 아래의 CSS 그라디언트가 드러납니다 */\r
.fx-silk-bg--lost .fx-silk-bg__canvas {\r
  opacity: 0;\r
}\r
\r
/* 배경 위 콘텐츠는 반드시 캔버스보다 위로.\r
   \`.fx-layer\`(배경 레이어 공용 표식)는 건너뜁니다 — 같은 영역에 함께 걸린\r
   다른 팩의 배경까지 콘텐츠로 끌어올리면 서로를 망칩니다. */\r
.fx-silk > *:not(.fx-layer) {\r
  position: relative;\r
  z-index: 1;\r
}\r
\r
/* ================================================================== *\r
 * 3. 선택 사항 — 배경 위 가독성 보정\r
 *\r
 * 그라디언트 배경 위의 흰 글씨는 밝은 영역에서 읽히지 않습니다.\r
 * 어두운 오버레이를 한 겹 깔면 어느 프레임에서도 대비가 유지됩니다.\r
 * ================================================================== */\r
\r
.fx-silk--scrim::after {\r
  content: '';\r
  position: absolute;\r
  inset: 0;\r
  z-index: 0;\r
  pointer-events: none;\r
  background: linear-gradient(\r
    to bottom,\r
    rgba(0, 0, 0, 0.15),\r
    rgba(0, 0, 0, 0.45)\r
  );\r
}\r
\r
/* 밝은 배경 위 어두운 글씨용 */\r
.fx-silk--scrim-light::after {\r
  content: '';\r
  position: absolute;\r
  inset: 0;\r
  z-index: 0;\r
  pointer-events: none;\r
  background: linear-gradient(\r
    to bottom,\r
    rgba(255, 255, 255, 0.25),\r
    rgba(255, 255, 255, 0.55)\r
  );\r
}\r
\r
/* ================================================================== *\r
 * 4. 선택 사항 — 히어로 레이아웃\r
 * ================================================================== */\r
\r
.fx-silk-hero {\r
  display: grid;\r
  place-items: center;\r
  min-height: min(80vh, 760px);\r
  border-radius: var(--fx-radius, 16px);\r
  padding: 40px 24px;\r
  text-align: center;\r
  color: #fff;\r
}\r
\r
.fx-silk-hero h1 {\r
  margin: 0 0 14px;\r
  font-size: clamp(2rem, 6vw, 4.2rem);\r
  font-weight: 700;\r
  letter-spacing: -0.035em;\r
  line-height: 1.04;\r
  /* 밝은 무늬 위에서도 글자가 뜨도록 아주 약한 그림자 */\r
  text-shadow: 0 2px 24px rgba(0, 0, 0, 0.35);\r
}\r
\r
.fx-silk-hero p {\r
  margin: 0;\r
  font-size: clamp(0.95rem, 2vw, 1.15rem);\r
  color: rgba(255, 255, 255, 0.82);\r
}\r
`,yw=`/**\r
 * smooth-scroll — Lenis 부드러운 스크롤\r
 * ───────────────────────────────────────────────────────────\r
 * 티어 T2 · 추가 용량 약 10KB(Lenis, CDN 지연 로드) · 상시 rAF 1개\r
 *\r
 * "요즘 포트폴리오 감성"의 큰 몫. 스크롤 입력을 관성 있는 움직임으로\r
 * 바꿉니다. Lenis는 자기 rAF 루프가 필요합니다 — 이 프로젝트에서 유일하게\r
 * 상시 루프를 허용하는 자리이므로, 사이트 전체에 **하나만** 켜세요.\r
 *\r
 * 동작 줄이기 사용자에게는 시작하지 않습니다(브라우저 기본 스크롤 유지).\r
 * CDN 로드에 실패해도 기본 스크롤 그대로라 잃는 것이 없습니다.\r
 */\r
\r
import { defineEffect, loadModule } from '../_core/index.js';\r
\r
const LENIS_CDN = 'https://cdn.jsdelivr.net/npm/lenis@1/+esm';\r
\r
export const mount = defineEffect({\r
  name: 'smooth-scroll',\r
\r
  defaults: {\r
    /** 감속 정도 0..1 — 클수록 오래 미끄러집니다 */\r
    lerp: 0.1,\r
    /** 휠 한 칸의 이동 배율 */\r
    wheelMultiplier: 1,\r
  },\r
\r
  guard: {\r
    motion: 'skip',   // 관성 스크롤이야말로 '움직임'입니다\r
    pointer: 'any',\r
  },\r
\r
  setup({ el, opts, addCleanup }) {\r
    const win = el.ownerDocument.defaultView ?? window;\r
    let lenis = null;\r
    let raf = 0;\r
    let cancelled = false;\r
\r
    loadModule(LENIS_CDN)\r
      .then((mod) => {\r
        if (cancelled) return;\r
        const Lenis = mod.default ?? mod.Lenis;\r
        lenis = new Lenis({ lerp: opts.lerp, wheelMultiplier: opts.wheelMultiplier });\r
        const loop = (time) => { lenis.raf(time); raf = win.requestAnimationFrame(loop); };\r
        raf = win.requestAnimationFrame(loop);\r
      })\r
      .catch(() => { /* CDN 실패 → 기본 스크롤. 조용한 퇴화가 맞습니다. */ });\r
\r
    addCleanup(() => {\r
      cancelled = true;\r
      if (raf) win.cancelAnimationFrame(raf);\r
      lenis?.destroy?.();\r
    });\r
  },\r
});\r
\r
export default mount;\r
`,ww=`# spotlight — 커서를 따라오는 은은한 빛\r
\r
영역 위에서 커서가 움직이면 그 자리에 radial-gradient 광원이 따라붙습니다.\r
그리기는 전부 CSS(변수 + 그라디언트), JS는 좌표만 흘려 넣습니다 — 프레임 비용 ≈ 0.\r
\r
## 바닐라\r
\r
\`\`\`html\r
<section class="fx-spotlight" data-fx="spotlight" data-fx-size="480" data-fx-strength="0.25">\r
  <h1>Hello</h1>\r
</section>\r
<script type="module">\r
  import { mount } from './effects/spotlight/index.js';\r
  mount('.fx-spotlight');\r
<\/script>\r
\`\`\`\r
\r
## 옵션\r
\r
| 키 | 기본 | 설명 |\r
|---|---|---|\r
| \`size\` | 420 | 광원 지름(px) |\r
| \`strength\` | 0.22 | 광원 세기(0~1) |\r
| \`color\` | \`''\` | 비우면 테마 강조색(\`--wf-accent\`) |\r
\r
터치 환경·포인터 없음에서는 마운트하지 않습니다(guard: pointer fine).\r
`,bw=`/**\r
 * spotlight — 커서를 따라오는 은은한 빛\r
 * ───────────────────────────────────────────────────────────\r
 * 티어 T1 · 추가 용량 0KB · 마우스 환경 전용\r
 *\r
 * 영역 위에서 커서가 움직이면 그 자리에 radial-gradient 광원이 따라붙습니다.\r
 * 실제 그리기는 전부 CSS(변수 + 그라디언트)가 하고, JS는 좌표만 흘려 넣습니다.\r
 * 그래서 프레임 비용이 사실상 0이고, 커서가 떠나면 부드럽게 꺼집니다.\r
 *\r
 * 색을 비우면 테마 강조색(--wf-accent)을 그대로 씁니다 — 테마를 바꿔도\r
 * 광원이 함께 물듭니다.\r
 */\r
\r
import { defineEffect } from '../_core/index.js';\r
\r
export const mount = defineEffect({\r
  name: 'spotlight',\r
\r
  defaults: {\r
    /** 광원 지름(px) */\r
    size: 420,\r
    /** 광원 세기(0~1) — 그라디언트 중심의 불투명도 */\r
    strength: 0.22,\r
    /** 광원 색. 비우면 테마 강조색(--wf-accent) */\r
    color: '',\r
  },\r
\r
  guard: {\r
    motion: 'ignore',  // 움직임이 아니라 조명 — 동작 줄이기에서도 해가 없습니다\r
    pointer: 'fine',   // 터치에는 "따라올 커서"가 없습니다\r
  },\r
\r
  setup({ el, opts, on, addCleanup, setVar }) {\r
    if (getComputedStyle(el).position === 'static') {\r
      el.style.position = 'relative';\r
      addCleanup(() => { el.style.removeProperty('position'); });\r
    }\r
\r
    const glow = el.ownerDocument.createElement('i');\r
    /* fx-layer — 배경 레이어 공용 표식. 다른 팩의 "콘텐츠를 앞으로" 규칙이\r
       이 광원을 콘텐츠로 착각해 흐름에 끼워 넣지 않게 합니다. */\r
    glow.className = 'fx-spotlight__glow fx-layer';\r
    glow.setAttribute('aria-hidden', 'true');\r
    el.appendChild(glow);\r
    addCleanup(() => glow.remove());\r
\r
    setVar('--fx-spot-size', \`\${opts.size}px\`);\r
    setVar('--fx-spot-alpha', String(opts.strength));\r
    if (opts.color) setVar('--fx-spot-color', opts.color);\r
\r
    on(el, 'pointermove', (e) => {\r
      const r = el.getBoundingClientRect();\r
      setVar('--fx-spot-x', \`\${(((e.clientX - r.left) / r.width) * 100).toFixed(2)}%\`);\r
      setVar('--fx-spot-y', \`\${(((e.clientY - r.top) / r.height) * 100).toFixed(2)}%\`);\r
    });\r
    on(el, 'pointerenter', () => el.classList.add('is-spot-on'));\r
    on(el, 'pointerleave', () => el.classList.remove('is-spot-on'));\r
    addCleanup(() => el.classList.remove('is-spot-on'));\r
  },\r
});\r
`,_w=`/**\r
 * spotlight / react.jsx\r
 */\r
\r
import React, { forwardRef } from 'react';\r
import { useFx, mergeRefs } from '../_core/react.js';\r
import { mount } from './index.js';\r
\r
import '../_core/core.css';\r
import './style.css';\r
\r
/** 훅 버전 — 컨테이너에 .fx-spotlight 클래스를 꼭 주세요. */\r
export function useSpotlight(options, deps = []) {\r
  return useFx(mount, options, deps);\r
}\r
\r
/**\r
 * <Spotlight as="section" size={480} strength={0.25}>\r
 *   <h1>Hello</h1>\r
 * </Spotlight>\r
 */\r
export const Spotlight = forwardRef(function Spotlight(\r
  { as: Tag = 'section', children, className = '', deps = [], size, strength, color, ...rest },\r
  outerRef\r
) {\r
  const ref = useSpotlight({ size, strength, color }, deps);\r
  return (\r
    <Tag ref={mergeRefs(ref, outerRef)} className={\`fx-spotlight \${className}\`} {...rest}>\r
      {children}\r
    </Tag>\r
  );\r
});\r
`,kw=`/* spotlight — 커서를 따라오는 은은한 빛 */\r
\r
.fx-spotlight { position: relative; }\r
\r
.fx-spotlight__glow {\r
  position: absolute; inset: 0;\r
  pointer-events: none;\r
  z-index: 0;\r
  opacity: 0;\r
  transition: opacity 0.35s ease;\r
  background: radial-gradient(\r
    var(--fx-spot-size, 420px) circle at var(--fx-spot-x, 50%) var(--fx-spot-y, 40%),\r
    color-mix(in srgb, var(--fx-spot-color, var(--wf-accent, #8b8bff)) calc(var(--fx-spot-alpha, 0.22) * 100%), transparent),\r
    transparent 70%\r
  );\r
}\r
\r
.fx-spotlight.is-spot-on .fx-spotlight__glow { opacity: 1; }\r
\r
/* 광원은 뒤, 내용은 앞 — 배경류 팩의 공통 계약입니다.\r
   \`.fx-layer\`는 건너뜁니다(같은 영역의 다른 배경 팩까지 끌어올리지 않게). */\r
.fx-spotlight > *:not(.fx-layer) { position: relative; z-index: 1; }\r
`,Sw=`# starfield — 잔잔히 반짝이는 별하늘 배경\r
\r
Canvas 2D 별 파티클. 별은 원 하나, 반짝임은 sin 하나 — 셰이더 없이 가볍습니다.\r
동작 줄이기 사용자에게는 멈춘 별하늘 한 장을 그립니다.\r
\r
## 바닐라\r
\r
\`\`\`html\r
<section class="fx-starfield" data-fx="starfield" data-fx-density="1.4">\r
  <h1>Night</h1>\r
</section>\r
<script type="module">\r
  import { mount } from './effects/starfield/index.js';\r
  mount('.fx-starfield');\r
<\/script>\r
\`\`\`\r
\r
## 옵션\r
\r
| 키 | 기본 | 설명 |\r
|---|---|---|\r
| \`density\` | 1 | 별 밀도(9000px²당 1개 기준 배율) |\r
| \`speed\` | 6 | 표류 속도 |\r
| \`twinkle\` | 0.6 | 반짝임 세기(0~1) |\r
| \`size\` | 1.2 | 별 크기 배율 |\r
| \`color\` | \`''\` | 비우면 흰색 |\r
\r
어두운 배경 위에서 가장 좋습니다(밝은 테마에서는 색을 지정하세요).\r
`,jw=`/**\r
 * starfield — 잔잔히 반짝이는 별하늘 배경\r
 * ───────────────────────────────────────────────────────────\r
 * 티어 T1 · 추가 용량 0KB · Canvas 2D\r
 *\r
 * 옛 포트폴리오들의 단골(port9의 3D 스타필드)을 배경 팩 규격으로 옮겼습니다.\r
 * 셰이더 없이 Canvas 2D로 충분합니다 — 별은 원 하나, 반짝임은 sin 하나.\r
 *\r
 * 동작 줄이기 사용자에게는 반짝임·표류를 멈추고 정지 화면 한 장만 그립니다.\r
 * 별이 "없어지는" 것보다 "멈추는" 쪽이 의도(하늘 배경)에 맞습니다.\r
 */\r
\r
import { defineEffect, prefersReducedMotion } from '../_core/index.js';\r
\r
export const mount = defineEffect({\r
  name: 'starfield',\r
\r
  defaults: {\r
    /** 별 밀도(1 = 9000px²당 1개) */\r
    density: 1,\r
    /** 표류 속도(px/s 수준) */\r
    speed: 6,\r
    /** 반짝임 세기(0~1) */\r
    twinkle: 0.6,\r
    /** 별 크기 배율 */\r
    size: 1.2,\r
    /** 별 색. 비우면 흰색 */\r
    color: '',\r
  },\r
\r
  guard: {\r
    motion: 'ignore', // 아래에서 직접 처리 — 멈춘 별하늘을 그립니다\r
    webgl: false,\r
  },\r
\r
  setup({ el, opts, addCleanup }) {\r
    const doc = el.ownerDocument;\r
    const win = doc.defaultView ?? window;\r
\r
    if (getComputedStyle(el).position === 'static') {\r
      el.style.position = 'relative';\r
      addCleanup(() => { el.style.removeProperty('position'); });\r
    }\r
\r
    const cv = doc.createElement('canvas');\r
    /*\r
     * fx-layer — "이건 배경 레이어지 콘텐츠가 아니다"는 팩 공용 표식입니다.\r
     * 배경 팩들은 저마다 \`> *:not(자기 캔버스)\`로 콘텐츠를 앞에 세우는데,\r
     * 표식이 없으면 그 규칙이 **다른 팩의 캔버스까지 콘텐츠로 착각해** 붙잡아\r
     * 흐름에 끼워 넣습니다(영역이 부풀고 배경이 내용을 밀어냅니다).\r
     */\r
    cv.className = 'fx-starfield__cv fx-layer';\r
    cv.setAttribute('aria-hidden', 'true');\r
    el.prepend(cv);\r
    addCleanup(() => cv.remove());\r
\r
    const ctx = cv.getContext('2d');\r
    /*\r
     * 색 결정 — 도트 웨이브와 같은 규칙입니다.\r
     *   ① 사용자가 고른 색  ② 테마가 내려준 --fx-star-color  ③ 흰색\r
     *\r
     * 예전에는 ②가 없어 **밝은 테마에서 흰 별이 흰 배경에 묻혔습니다.**\r
     * 효과를 켜도 아무 일이 없어 보였고, 색을 직접 고르기 전에는 그대로였습니다.\r
     */\r
    const resolveColor = () => {\r
      const own = (opts.color || '').trim();\r
      if (own) return own;\r
      const v = getComputedStyle(el).getPropertyValue('--fx-star-color').trim();\r
      return v || '#ffffff';\r
    };\r
    const color = resolveColor();\r
    let stars = [];\r
    let w = 0;\r
    let h = 0;\r
\r
    const seed = () => {\r
      const dpr = Math.min(win.devicePixelRatio || 1, 2);\r
      w = el.clientWidth;\r
      h = el.clientHeight;\r
      cv.width = Math.max(1, Math.round(w * dpr));\r
      cv.height = Math.max(1, Math.round(h * dpr));\r
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);\r
      const n = Math.round(((w * h) / 9000) * opts.density);\r
      stars = Array.from({ length: n }, () => ({\r
        x: Math.random() * w,\r
        y: Math.random() * h,\r
        r: (0.4 + Math.random() * 1.1) * opts.size,\r
        a: 0.35 + Math.random() * 0.65,   // 기본 밝기\r
        p: Math.random() * Math.PI * 2,   // 반짝임 위상\r
        v: 0.5 + Math.random(),           // 표류 배율(깊이감)\r
      }));\r
    };\r
\r
    const draw = (t) => {\r
      ctx.clearRect(0, 0, w, h);\r
      ctx.fillStyle = color;\r
      for (const s of stars) {\r
        const tw = 1 - opts.twinkle + opts.twinkle * (0.5 + 0.5 * Math.sin(s.p + t * 2));\r
        ctx.globalAlpha = s.a * tw;\r
        ctx.beginPath();\r
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);\r
        ctx.fill();\r
      }\r
      ctx.globalAlpha = 1;\r
    };\r
\r
    const ro = new win.ResizeObserver(() => { seed(); draw(0); });\r
    ro.observe(el);\r
    addCleanup(() => ro.disconnect());\r
    seed();\r
    draw(0); // 첫 프레임을 rAF에 맡기지 않습니다 — 루프가 늦어도 빈 하늘은 없게\r
\r
    if (prefersReducedMotion()) {\r
      return; // 정지 화면 한 장으로 끝 — 별이 사라지는 것보다 멈추는 쪽이 맞습니다\r
    }\r
\r
    let raf = 0;\r
    let start = null;\r
    const loop = (now) => {\r
      if (start === null) start = now;\r
      const t = (now - start) / 1000;\r
      const dt = opts.speed / 60;\r
      for (const s of stars) {\r
        s.x -= dt * s.v;                 // 왼쪽으로 아주 천천히\r
        if (s.x < -2) { s.x = w + 2; s.y = Math.random() * h; }\r
      }\r
      draw(t);\r
      raf = win.requestAnimationFrame(loop);\r
    };\r
    raf = win.requestAnimationFrame(loop);\r
    addCleanup(() => win.cancelAnimationFrame(raf));\r
  },\r
});\r
`,Ew=`/**\r
 * starfield / react.jsx\r
 */\r
\r
import React, { forwardRef } from 'react';\r
import { useFx, mergeRefs } from '../_core/react.js';\r
import { mount } from './index.js';\r
\r
import '../_core/core.css';\r
import './style.css';\r
\r
/** 훅 버전 — 컨테이너에 .fx-starfield 클래스를 꼭 주세요. */\r
export function useStarfield(options, deps = []) {\r
  return useFx(mount, options, deps);\r
}\r
\r
/**\r
 * <Starfield as="section" density={1.4} twinkle={0.7}>\r
 *   <h1>Night</h1>\r
 * </Starfield>\r
 */\r
export const Starfield = forwardRef(function Starfield(\r
  { as: Tag = 'section', children, className = '', deps = [], density, speed, twinkle, size, color, ...rest },\r
  outerRef\r
) {\r
  const ref = useStarfield({ density, speed, twinkle, size, color }, deps);\r
  return (\r
    <Tag ref={mergeRefs(ref, outerRef)} className={\`fx-starfield \${className}\`} {...rest}>\r
      {children}\r
    </Tag>\r
  );\r
});\r
`,Cw=`/* starfield — 잔잔히 반짝이는 별하늘 배경 */\r
\r
.fx-starfield { position: relative; }\r
\r
.fx-starfield__cv {\r
  position: absolute; inset: 0;\r
  width: 100%; height: 100%;\r
  pointer-events: none;\r
  z-index: 0;\r
}\r
\r
/* 별은 뒤, 내용은 앞 — 배경류 팩의 공통 계약입니다.\r
   \`.fx-layer\`(배경 레이어 공용 표식)는 건너뜁니다. 자기 캔버스만 빼면\r
   같은 영역에 함께 걸린 **다른 팩의 배경까지 콘텐츠로 끌어올려** 흐름에\r
   끼워 넣습니다 — 영역이 부풀고 두 배경이 서로를 망칩니다. */\r
.fx-starfield > *:not(.fx-layer) { position: relative; z-index: 1; }\r
`,Nw=`/**\r
 * text-scramble — 랜덤 문자가 정답으로 수렴하는 텍스트\r
 * ───────────────────────────────────────────────────────────\r
 * 티어 T1 · 추가 용량 0KB\r
 *\r
 * 개발자 포트폴리오의 단골. 화면에 들어올 때 한 번, 글자들이 랜덤 문자를\r
 * 거쳐 원래 글로 자리잡습니다. 왼쪽 글자부터 차례로 확정되므로 끝날수록\r
 * 읽을 수 있는 부분이 늘어납니다.\r
 *\r
 * 동작 줄이기 사용자에게는 아예 시작하지 않습니다 — 깜빡이는 랜덤 문자가\r
 * 정확히 그들이 피하려는 종류의 움직임입니다(가드가 대신 걸러 줍니다).\r
 * rAF 루프는 수렴이 끝나면 멈춥니다.\r
 */\r
\r
import { defineEffect, observeVisibility } from '../_core/index.js';\r
\r
const CHARSET = '!<>-_\\\\/[]{}—=+*^?#ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';\r
\r
export const mount = defineEffect({\r
  name: 'text-scramble',\r
\r
  defaults: {\r
    /**\r
     * 전체 재생 시간(ms) — 글자 수와 무관하게 이 안에 끝납니다.\r
     * 900으로 뒀더니 페이지가 열리자마자 한 번 재생되고 끝나 **아무도 못 봤습니다.**\r
     * 1400이 "확실히 보이는데 지루하지 않은" 지점입니다.\r
     */\r
    duration: 1400,\r
    /** 프레임마다 랜덤 문자를 갈아치울 확률 0..1 (낮을수록 지글거림이 적습니다) */\r
    churn: 0.28,\r
    /** 화면에 들어오고 나서의 지연(ms) */\r
    delay: 0,\r
    /**\r
     * 다시 들어올 때마다 반복. 기본 true — 앵커(#contact)로 열고 나중에\r
     * 위로 스크롤하는 방문자도, 다시 돌아온 방문자도 봐야 하는 효과입니다.\r
     */\r
    repeat: true,\r
  },\r
\r
  guard: {\r
    motion: 'skip',   // 동작 줄이기에서는 원문 그대로 둡니다\r
  },\r
\r
  setup({ el, opts, addCleanup }) {\r
    const win = el.ownerDocument.defaultView ?? window;\r
\r
    /*\r
     * **텍스트 노드 단위**로 다룹니다. el.textContent로 통째로 쓰면\r
     * 제목 속 \`<br>\`이 사라집니다 — 여러 줄 히어로 제목이 한 줄로 붙어 버린\r
     * 사고의 원인입니다. 노드별로 원문을 쥐고 노드별로 되씁니다.\r
     */\r
    const walker = el.ownerDocument.createTreeWalker(el, 4 /* NodeFilter.SHOW_TEXT */);\r
    const nodes = [];\r
    let total = 0;\r
    for (let n = walker.nextNode(); n; n = walker.nextNode()) {\r
      if (!n.data.trim()) continue;\r
      nodes.push({ node: n, original: n.data, offset: total });\r
      total += n.data.length;\r
    }\r
    if (!total) return; // 빈 제목·자리표시자는 건드릴 것이 없습니다\r
\r
    let raf = 0;\r
    let timer = 0;\r
    let played = false;\r
\r
    const restore = () => nodes.forEach(({ node, original }) => { node.data = original; });\r
\r
    const play = () => {\r
      if (played && !opts.repeat) return;\r
      played = true;\r
      const t0 = win.performance.now();\r
\r
      const frame = (now) => {\r
        const p = Math.min(1, (now - t0) / Math.max(200, opts.duration));\r
        /* 왼쪽부터 확정 — 전체 글자 수 기준 p 비율까지는 원문입니다. */\r
        const settled = Math.floor(total * p);\r
        for (const { node, original, offset } of nodes) {\r
          node.data = [...original]\r
            .map((ch, i) => {\r
              if (offset + i < settled || /\\s/.test(ch)) return ch;\r
              /* 매 프레임 전부 갈지 않습니다 — churn 확률로만 바꿔 지글거림을 줄입니다. */\r
              return Math.random() < opts.churn\r
                ? CHARSET[(Math.random() * CHARSET.length) | 0]\r
                : node.data[i] ?? ch;\r
            })\r
            .join('');\r
        }\r
        if (p < 1) raf = win.requestAnimationFrame(frame);\r
        else { restore(); raf = 0; }\r
      };\r
      raf = win.requestAnimationFrame(frame);\r
    };\r
\r
    /*\r
     * 같은 영역에 '스크롤 등장(scroll-reveal)'이 걸려 있으면 **영역이 다 나타난\r
     * 뒤에** 시작합니다. 등장 페이드인과 겹치면 스크램블이 투명한 채로 재생돼\r
     * 끝나 버립니다 — "효과가 안 나온다"의 실제 원인이었습니다.\r
     */\r
    const revealHost = el.closest?.('.fx-scroll-reveal');\r
    const afterReveal = (fn) => {\r
      if (!revealHost || revealHost.classList.contains('is-revealed')) return fn();\r
      let done = false;\r
      const cancel = () => { done = true; mo.disconnect(); win.clearTimeout(fallback); };\r
      const go = () => { if (done) return; cancel(); fn(); };\r
      const mo = new win.MutationObserver(() => {\r
        if (revealHost.classList.contains('is-revealed')) win.setTimeout(go, 150);\r
      });\r
      mo.observe(revealHost, { attributes: true, attributeFilter: ['class'] });\r
      /* 등장 신호를 놓쳐도 2초 뒤엔 재생 — 영영 안 나오는 것보다 낫습니다. */\r
      const fallback = win.setTimeout(go, 2000);\r
      addCleanup(cancel);\r
    };\r
\r
    const stopWatch = observeVisibility(el, {\r
      threshold: 0.4,\r
      onEnter: () => { timer = win.setTimeout(() => afterReveal(play), opts.delay); },\r
    });\r
\r
    addCleanup(() => {\r
      stopWatch();\r
      win.clearTimeout(timer);\r
      if (raf) win.cancelAnimationFrame(raf);\r
      restore();   // 어떤 순간에 떼어내도 원문으로 되돌립니다\r
    });\r
  },\r
});\r
\r
export default mount;\r
`,$w=`# \`tilt-card\` — 3D 틸트 카드\r
\r
> **티어 T1** · 추가 용량 **0KB** · 의존성 없음 · 마우스 환경 전용\r
\r
포인터를 따라 카드가 기울고, 빛 반사가 따라오고, 내부 요소가 서로 다른 높이로 떠오릅니다.\r
프로젝트 카드 하나당 체감 임팩트가 가장 큰 효과라 **여기부터 붙이는 걸 권장**합니다.\r
\r
---\r
\r
## 1. 붙이기 — 바닐라\r
\r
\`\`\`html\r
<link rel="stylesheet" href="./effects/_core/core.css" />\r
<link rel="stylesheet" href="./effects/tilt-card/style.css" />\r
\r
<article class="project-card fx-card">\r
  <img class="fx-card__media" src="./thumb.jpg" alt="" data-fx-depth="16" />\r
  <h3 class="fx-card__title" data-fx-depth="34">쇼핑몰 리뉴얼</h3>\r
  <p  class="fx-card__desc"  data-fx-depth="26">React · TypeScript</p>\r
  <span class="fx-card__tag" data-fx-depth="52">2026</span>\r
</article>\r
\r
<script type="module">\r
  import { mount } from './effects/tilt-card/index.js';\r
  mount('.project-card');\r
<\/script>\r
\`\`\`\r
\r
> \`type="module"\`은 필수입니다. 그리고 **로컬 파일을 더블클릭해서 열면 동작하지 않습니다** —\r
> ES 모듈은 \`file://\`에서 차단됩니다. VS Code의 Live Server나 \`npx serve\`로 여세요.\r
\r
## 2. 붙이기 — React\r
\r
\`\`\`jsx\r
import { TiltCard, Depth } from './effects/tilt-card/react.jsx';\r
\r
export default function Projects() {\r
  return (\r
    <TiltCard as="a" href="/work/1" className="fx-card" maxTilt={14}>\r
      <Depth as="img" z={16} className="fx-card__media" src="/thumb.jpg" alt="" />\r
      <Depth as="h3" z={34} className="fx-card__title">쇼핑몰 리뉴얼</Depth>\r
      <Depth as="p"  z={26} className="fx-card__desc">React · TypeScript</Depth>\r
    </TiltCard>\r
  );\r
}\r
\`\`\`\r
\r
기존 마크업을 유지하고 싶으면 훅만 씁니다.\r
\r
\`\`\`jsx\r
import { useTilt } from './effects/tilt-card/react.jsx';\r
\r
const ref = useTilt({ maxTilt: 16 });\r
return <article ref={ref} className="my-own-card">…</article>;\r
\`\`\`\r
\r
---\r
\r
## 3. 옵션\r
\r
| 옵션 | 기본값 | 설명 |\r
|---|---|---|\r
| \`maxTilt\` | \`12\` | 최대 기울기(도). **12~16이 자연스럽고 20을 넘으면 촌스러워집니다.** |\r
| \`perspective\` | \`900\` | 원근 거리(px). 작을수록 왜곡이 큽니다. **카드 폭의 1.5~2배**가 기준. |\r
| \`scale\` | \`1.02\` | hover 시 확대 배율 |\r
| \`speed\` | \`12\` | 따라오는 속도(감쇠 계수). 8=나른함, 12=기본, 20=즉각적 |\r
| \`glare\` | \`true\` | 빛 반사 표시 |\r
| \`maxGlare\` | \`0.35\` | 글레어 최대 불투명도 |\r
| \`glareZ\` | \`0\` | 글레어 높이(px). 깊이 레이어보다 위에 얹으려면 최대 depth보다 크게 |\r
| \`reverse\` | \`false\` | 기울기 방향 반전 |\r
| \`axis\` | \`'both'\` | \`'x'\` = 좌우 움직임만(rotateY) / \`'y'\` = 상하 움직임만(rotateX) |\r
| \`focusScale\` | \`true\` | 키보드 포커스 시 확대 |\r
\r
HTML에서 직접 조절할 수도 있습니다.\r
\r
\`\`\`html\r
<article class="project-card" data-fx-max-tilt="18" data-fx-glare="false">\r
\`\`\`\r
\r
---\r
\r
## 4. 깊이 레이어 — 이 효과의 핵심\r
\r
\`data-fx-depth="숫자"\`를 자식에 붙이면 그 숫자만큼 카드 위로 떠오릅니다.\r
**단순히 위로 띄우는 게 아니라, 포인터 반대 방향으로 살짝 밀어서 시차를 만듭니다.**\r
이 두 가지가 겹쳐야 "떠 있다"는 느낌이 납니다.\r
\r
### 값 가이드\r
\r
| 요소 | 권장 depth |\r
|---|---|\r
| 배경 이미지 / 썸네일 | \`10 ~ 20\` |\r
| 본문 텍스트 | \`25 ~ 40\` |\r
| 제목 | \`30 ~ 45\` |\r
| 배지 · 아이콘 · CTA | \`50 ~ 70\` |\r
\r
> **흔한 실수:** 전부 같은 depth를 주면 그냥 통째로 떠오를 뿐 입체감이 안 납니다.\r
> **값의 차이가 곧 깊이감**입니다. 최소 3단계로 나누세요.\r
\r
> **또 흔한 실수:** depth를 100 이상 주면 원근 왜곡으로 요소가 카드 밖으로 튀어나옵니다.\r
> \`perspective\`의 1/10 이하로 유지하세요 (perspective 900 → depth 최대 90).\r
\r
---\r
\r
## 5. 자동으로 꺼지는 조건\r
\r
| 상황 | 이유 |\r
|---|---|\r
| OS "동작 줄이기" ON | 접근성 — 전정기관 장애 사용자 |\r
| 터치 전용 기기 | hover가 없어서 의미가 없음 |\r
\r
꺼져도 레이아웃은 그대로입니다. 요소에 \`class="fx-inert"\`와\r
\`data-fx-skipped="reduced-motion"\` 같은 표시가 남으니 devtools에서 원인을 바로 볼 수 있습니다.\r
\r
강제로 켜려면 (데모/영상 촬영용):\r
\r
\`\`\`js\r
mount('.project-card', { guard: false });\r
\`\`\`\r
\r
---\r
\r
## 6. 성능 노트\r
\r
이 효과가 카드 20장에 붙어도 느려지지 않는 이유:\r
\r
1. **\`will-change\`를 상호작용 중에만 겁니다.** 상시로 걸면 카드마다 GPU 레이어가 생겨 메모리를 먹습니다.\r
2. **\`getBoundingClientRect\`를 캐싱합니다.** \`pointermove\`마다 호출하면 매 프레임 강제 리플로우가 발생합니다. enter 시 1회 읽고 scroll/resize에서만 무효화합니다.\r
3. **정지하면 rAF를 끕니다.** 목표값에 수렴하면 루프를 \`stop()\` 합니다. 마우스가 없으면 CPU 사용량이 0입니다.\r
4. **동시에 도는 루프는 hover 중인 카드 1개뿐**입니다.\r
\r
---\r
\r
## 7. 자주 겪는 문제\r
\r
**Q. 기울지 않습니다.**\r
→ devtools에서 요소의 \`data-fx-skipped\`를 보세요. \`coarse-pointer\`면 터치 기기로 인식된 것이고, \`reduced-motion\`이면 OS 설정입니다.\r
\r
**Q. 자식이 안 떠오릅니다.**\r
→ 부모의 \`transform-style: preserve-3d\`가 다른 CSS에 덮였는지 확인하세요. 특히 부모에 \`overflow: hidden\`이 있으면 3D 컨텍스트가 평탄화됩니다.\r
\r
**Q. 글레어가 콘텐츠 뒤에 있습니다.**\r
→ 의도된 기본값입니다(카드 표면의 빛). 위로 올리려면 \`glareZ\`를 가장 큰 depth보다 크게 주세요. 원근 보정은 자동입니다.\r
\r
**Q. 텍스트가 흐릿합니다.**\r
→ 3D 변환의 알려진 특성입니다. \`maxTilt\`를 줄이거나 \`perspective\`를 키우면 완화됩니다.\r
\r
**Q. 카드가 잘립니다.**\r
→ 부모 컨테이너의 \`overflow: hidden\` 때문입니다. \`overflow: visible\`로 바꾸거나 카드 주변에 여백을 주세요.\r
`,Lw=`/**\r
 * tilt-card — 포인터 3D 틸트 + 글레어 + 깊이 레이어\r
 * ───────────────────────────────────────────────────────────\r
 * 티어 T1 · 추가 용량 0KB(외부 의존성 없음) · 마우스 전용\r
 *\r
 * 프로젝트 카드 하나당 체감 임팩트가 가장 큰 효과입니다.\r
 * WebGL 없이 CSS 3D transform만으로 만들어서 저사양에서도 60fps가 나옵니다.\r
 *\r
 * 구현 포인트 3가지:\r
 *  1. 감쇠(damp) 보간 — 포인터를 그대로 따라가면 딱딱합니다.\r
 *     프레임레이트 독립 감쇠를 써서 144Hz에서도 같은 속도로 따라옵니다.\r
 *  2. getBoundingClientRect 캐싱 — pointermove마다 호출하면 매 프레임 리플로우입니다.\r
 *     enter 시 1회 읽고 scroll/resize에서만 무효화합니다.\r
 *  3. will-change는 상호작용 중에만 — 카드 20장에 항상 걸어두면 GPU 메모리를 먹습니다.\r
 */\r
\r
import { defineEffect, damp, clamp, round, createLoop } from '../_core/index.js';\r
\r
export const mount = defineEffect({\r
  name: 'tilt-card',\r
\r
  defaults: {\r
    /** 최대 기울기(도). 12~16이 자연스럽고, 20을 넘으면 촌스러워집니다. */\r
    maxTilt: 12,\r
    /** 원근 거리(px). 작을수록 왜곡이 심해집니다. 카드 폭의 1.5~2배 권장. */\r
    perspective: 900,\r
    /** hover 시 확대 배율. 1.02~1.04가 적당합니다. */\r
    scale: 1.02,\r
    /** 따라오는 속도(감쇠 계수). 클수록 즉각적, 작을수록 부드럽습니다. */\r
    speed: 12,\r
    /** 빛 반사(글레어) 표시 여부 */\r
    glare: true,\r
    /** 글레어 최대 불투명도 */\r
    maxGlare: 0.35,\r
    /**\r
     * 글레어를 띄울 Z 높이(px).\r
     * 0 = 카드 표면. data-fx-depth 레이어보다 위에 얹고 싶으면\r
     * 가장 큰 depth보다 큰 값을 주세요(원근 보정은 자동입니다).\r
     */\r
    glareZ: 0,\r
    /** 기울기 방향 반전 */\r
    reverse: false,\r
    /** 'both' | 'x'(좌우 움직임만 = rotateY) | 'y'(상하 움직임만 = rotateX) */\r
    axis: 'both',\r
    /** 키보드 포커스 시에도 확대(기울기는 주지 않습니다 — 방향 감각 혼란 방지) */\r
    focusScale: true,\r
  },\r
\r
  guard: {\r
    motion: 'skip',    // 동작 줄이기 사용자는 완전히 끕니다\r
    pointer: 'fine',   // hover 기반이므로 터치 기기에서는 켜지 않습니다\r
  },\r
\r
  setup({ el, opts, on, addCleanup, setVar, emit }) {\r
    /* --- 1. DOM 준비 ------------------------------------------------ */\r
\r
    // 글레어를 absolute로 얹으려면 부모가 static이면 안 됩니다.\r
    if (getComputedStyle(el).position === 'static') {\r
      el.style.position = 'relative';\r
      addCleanup(() => {\r
        el.style.position = '';\r
      });\r
    }\r
\r
    // data-fx-depth="40" 을 가진 자식들을 깊이 레이어로 등록합니다.\r
    const layers = Array.from(el.querySelectorAll('[data-fx-depth]'));\r
    for (const layer of layers) {\r
      layer.style.setProperty('--fx-depth', parseFloat(layer.dataset.fxDepth) || 0);\r
    }\r
    addCleanup(() => {\r
      for (const layer of layers) layer.style.removeProperty('--fx-depth');\r
    });\r
\r
    let glareEl = null;\r
    if (opts.glare) {\r
      glareEl = document.createElement('div');\r
      glareEl.className = 'fx-tilt-card__glare';\r
      glareEl.setAttribute('aria-hidden', 'true'); // 장식용 — 스크린 리더는 무시\r
      el.appendChild(glareEl);\r
      addCleanup(() => glareEl.remove());\r
    }\r
\r
    /* --- 2. 정적 CSS 변수 ------------------------------------------- */\r
\r
    setVar('--fx-tilt-perspective', \`\${opts.perspective}px\`);\r
    if (glareEl) {\r
      setVar('--fx-tilt-glare-z', \`\${opts.glareZ}px\`);\r
      // Z로 띄운 만큼 원근 때문에 커집니다. 역보정해서 카드를 정확히 덮게 합니다.\r
      setVar(\r
        '--fx-tilt-glare-scale',\r
        round((opts.perspective - opts.glareZ) / opts.perspective, 4)\r
      );\r
    }\r
\r
    /* --- 3. 상태 ---------------------------------------------------- */\r
\r
    // s = 현재 화면에 그려진 값, t = 포인터가 가리키는 목표값\r
    const s = { rx: 0, ry: 0, sc: 1, g: 0, nx: 0, ny: 0 };\r
    const t = { rx: 0, ry: 0, sc: 1, g: 0, nx: 0, ny: 0 };\r
\r
    let rect = null;\r
    let hovering = false;\r
    let focused = false;\r
\r
    // 스크롤/리사이즈가 나면 캐시한 사각형이 틀어집니다.\r
    const invalidate = () => {\r
      rect = null;\r
    };\r
    on(window, 'scroll', invalidate, { passive: true });\r
    on(window, 'resize', invalidate, { passive: true });\r
\r
    /* --- 4. 렌더 ---------------------------------------------------- */\r
\r
    const apply = () => {\r
      setVar('--fx-tilt-rx', \`\${round(s.rx, 2)}deg\`);\r
      setVar('--fx-tilt-ry', \`\${round(s.ry, 2)}deg\`);\r
      setVar('--fx-tilt-scale', round(s.sc, 4));\r
      // 깊이 레이어가 쓰는 -1~1 단위값\r
      setVar('--fx-tilt-nx', round(s.nx, 3));\r
      setVar('--fx-tilt-ny', round(s.ny, 3));\r
      if (glareEl) {\r
        setVar('--fx-tilt-px', \`\${round(50 + s.nx * 50, 1)}%\`);\r
        setVar('--fx-tilt-py', \`\${round(50 + s.ny * 50, 1)}%\`);\r
        setVar('--fx-tilt-glare-o', round(s.g, 3));\r
      }\r
    };\r
\r
    const KEYS = ['rx', 'ry', 'sc', 'g', 'nx', 'ny'];\r
    const settled = () => KEYS.every((k) => Math.abs(s[k] - t[k]) < 0.002);\r
\r
    const loop = createLoop((dt) => {\r
      for (const k of KEYS) s[k] = damp(s[k], t[k], opts.speed, dt);\r
      apply();\r
\r
      // 목표에 충분히 가까워지고 상호작용도 끝났으면 루프를 완전히 끕니다.\r
      if (!hovering && !focused && settled()) {\r
        for (const k of KEYS) s[k] = t[k];\r
        apply();\r
        loop.stop();\r
        el.dataset.fxTilting = '0'; // will-change 해제 신호\r
      }\r
    });\r
    addCleanup(() => loop.stop());\r
\r
    const wake = () => {\r
      el.dataset.fxTilting = '1';\r
      loop.start();\r
    };\r
\r
    /* --- 5. 입력 ---------------------------------------------------- */\r
\r
    const setFromPointer = (event) => {\r
      if (!rect) rect = el.getBoundingClientRect();\r
      if (!rect.width || !rect.height) return;\r
\r
      // 카드 중심을 (0,0), 모서리를 ±1로 정규화\r
      const nx = clamp(((event.clientX - rect.left) / rect.width) * 2 - 1, -1, 1);\r
      const ny = clamp(((event.clientY - rect.top) / rect.height) * 2 - 1, -1, 1);\r
      const dir = opts.reverse ? -1 : 1;\r
\r
      t.nx = nx;\r
      t.ny = ny;\r
      // 좌우 움직임 → Y축 회전, 상하 움직임 → X축 회전(부호 반대여야 자연스럽습니다)\r
      t.ry = opts.axis === 'y' ? 0 : dir * nx * opts.maxTilt;\r
      t.rx = opts.axis === 'x' ? 0 : dir * -ny * opts.maxTilt;\r
      t.g = opts.maxGlare;\r
    };\r
\r
    on(el, 'pointerenter', (event) => {\r
      // 하이브리드 노트북에서 손가락 터치로 들어온 경우는 무시합니다.\r
      if (event.pointerType === 'touch') return;\r
      hovering = true;\r
      rect = el.getBoundingClientRect();\r
      t.sc = opts.scale;\r
      setFromPointer(event);\r
      wake();\r
      emit('enter');\r
    });\r
\r
    on(el, 'pointermove', (event) => {\r
      if (!hovering || event.pointerType === 'touch') return;\r
      setFromPointer(event);\r
    });\r
\r
    on(el, 'pointerleave', () => {\r
      if (!hovering) return;\r
      hovering = false;\r
      t.rx = 0;\r
      t.ry = 0;\r
      t.nx = 0;\r
      t.ny = 0;\r
      t.g = 0;\r
      t.sc = focused ? opts.scale : 1;\r
      emit('leave');\r
    });\r
\r
    // 키보드 사용자에게도 "선택됨"이 보이도록 — 확대만, 기울기는 없음\r
    if (opts.focusScale) {\r
      on(el, 'focusin', () => {\r
        focused = true;\r
        t.sc = opts.scale;\r
        wake();\r
      });\r
      on(el, 'focusout', () => {\r
        focused = false;\r
        if (!hovering) t.sc = 1;\r
      });\r
    }\r
\r
    /* --- 6. 정리 ---------------------------------------------------- */\r
\r
    addCleanup(() => {\r
      for (const prop of [\r
        '--fx-tilt-rx', '--fx-tilt-ry', '--fx-tilt-scale',\r
        '--fx-tilt-nx', '--fx-tilt-ny',\r
        '--fx-tilt-px', '--fx-tilt-py', '--fx-tilt-glare-o',\r
        '--fx-tilt-perspective', '--fx-tilt-glare-z', '--fx-tilt-glare-scale',\r
      ]) {\r
        el.style.removeProperty(prop);\r
      }\r
      delete el.dataset.fxTilting;\r
    });\r
\r
    apply();\r
  },\r
});\r
\r
export default mount;\r
`,Rw=`/**\r
 * tilt-card / react.jsx\r
 * React 프로젝트용 래퍼. 바닐라 프로젝트는 이 파일을 무시하면 됩니다.\r
 *\r
 * 로직은 전부 index.js에 있고 여기는 얇은 어댑터일 뿐입니다.\r
 * (효과를 고칠 때 두 군데를 고칠 일이 없도록)\r
 */\r
\r
import React, { forwardRef } from 'react';\r
import { useFx, mergeRefs } from '../_core/react.js';\r
import { mount } from './index.js';\r
\r
import '../_core/core.css';\r
import './style.css';\r
\r
/**\r
 * 훅으로 쓰고 싶을 때 — 기존 마크업을 그대로 두고 ref만 붙입니다.\r
 *\r
 *   const ref = useTilt({ maxTilt: 16 });\r
 *   return <article ref={ref} className="my-card">…</article>;\r
 */\r
export function useTilt(options, deps = []) {\r
  return useFx(mount, options, deps);\r
}\r
\r
/**\r
 * 컴포넌트로 쓰고 싶을 때.\r
 *\r
 *   <TiltCard maxTilt={16} glare className="fx-card">\r
 *     <img className="fx-card__media" src="…" alt="" depth={30} />\r
 *   </TiltCard>\r
 *\r
 * @param {object} props\r
 * @param {React.ElementType} [props.as='div'] 렌더할 태그 (a, article, li …)\r
 * @param {any[]} [props.deps=[]] 이 값이 바뀌면 옵션을 갱신합니다\r
 */\r
export const TiltCard = forwardRef(function TiltCard(\r
  {\r
    as: Tag = 'div',\r
    children,\r
    className = '',\r
    deps = [],\r
    // ── 효과 옵션 (index.js의 defaults와 1:1) ──\r
    maxTilt,\r
    perspective,\r
    scale,\r
    speed,\r
    glare,\r
    maxGlare,\r
    glareZ,\r
    reverse,\r
    axis,\r
    focusScale,\r
    guard,\r
    ...rest\r
  },\r
  forwardedRef\r
) {\r
  // undefined인 값은 넘기지 않아야 index.js의 defaults가 살아납니다.\r
  const options = {};\r
  const raw = { maxTilt, perspective, scale, speed, glare, maxGlare, glareZ, reverse, axis, focusScale, guard };\r
  for (const key in raw) if (raw[key] !== undefined) options[key] = raw[key];\r
\r
  const ref = useTilt(options, deps);\r
\r
  return (\r
    <Tag ref={mergeRefs(ref, forwardedRef)} className={className} {...rest}>\r
      {children}\r
    </Tag>\r
  );\r
});\r
\r
/**\r
 * 깊이 레이어 헬퍼.\r
 * data-fx-depth를 직접 쓰는 것과 동일하지만 JSX에서 더 읽기 좋습니다.\r
 *\r
 *   <Depth z={40}><h3>프로젝트 제목</h3></Depth>\r
 *\r
 * z 값 가이드: 배경 이미지 10~20 / 본문 25~40 / 강조 배지 50~70\r
 */\r
export function Depth({ z = 30, as: Tag = 'div', children, ...rest }) {\r
  return (\r
    <Tag data-fx-depth={z} {...rest}>\r
      {children}\r
    </Tag>\r
  );\r
}\r
\r
export default TiltCard;\r
`,Mw=`/**\r
 * tilt-card / style.css\r
 * _core/core.css 를 먼저 불러온 뒤 이 파일을 불러오세요.\r
 */\r
\r
/* ================================================================== *\r
 * 1. 기능부 (필수)\r
 * ================================================================== */\r
\r
.fx-tilt-card {\r
  position: relative;\r
  /* 자식의 translateZ가 살아나려면 반드시 필요합니다. */\r
  transform-style: preserve-3d;\r
\r
  transform:\r
    perspective(var(--fx-tilt-perspective, 900px))\r
    rotateX(var(--fx-tilt-rx, 0deg))\r
    rotateY(var(--fx-tilt-ry, 0deg))\r
    scale3d(var(--fx-tilt-scale, 1), var(--fx-tilt-scale, 1), 1);\r
\r
  /* 3D 회전 시 뒷면 렌더링 비용을 없앱니다. */\r
  backface-visibility: hidden;\r
}\r
\r
/*\r
 * will-change는 "상호작용 중에만" 겁니다.\r
 * 카드 20장에 상시로 걸면 각각 별도 GPU 레이어가 생겨 메모리를 크게 먹습니다.\r
 * JS가 pointerenter에서 data-fx-tilting="1"을 세팅합니다.\r
 */\r
.fx-tilt-card[data-fx-tilting='1'] {\r
  will-change: transform;\r
}\r
\r
/* ------------------------------------------------------------------ *\r
 * 깊이 레이어 — data-fx-depth="숫자" 를 가진 자식\r
 *\r
 * translateZ로 실제 3D 높이를 주고,\r
 * 포인터 방향(-1~1)에 비례해 살짝 반대로 밀어서 시차(parallax)를 만듭니다.\r
 * 이 두 개가 겹쳐야 "떠 있다"는 느낌이 납니다.\r
 * ------------------------------------------------------------------ */\r
.fx-tilt-card [data-fx-depth] {\r
  transform: translate3d(\r
    calc(var(--fx-tilt-nx, 0) * var(--fx-depth, 0) * -0.22px),\r
    calc(var(--fx-tilt-ny, 0) * var(--fx-depth, 0) * -0.22px),\r
    calc(var(--fx-depth, 0) * 1px)\r
  );\r
  /* 레이어는 부모보다 아주 살짝 늦게 따라오면 더 입체적으로 보입니다. */\r
  transition: transform 80ms linear;\r
}\r
\r
/* ------------------------------------------------------------------ *\r
 * 글레어 — 포인터 위치를 따라다니는 빛 반사\r
 * ------------------------------------------------------------------ */\r
.fx-tilt-card__glare {\r
  position: absolute;\r
  inset: 0;\r
  border-radius: inherit;\r
  pointer-events: none;\r
  overflow: hidden;\r
\r
  background: radial-gradient(\r
    circle at var(--fx-tilt-px, 50%) var(--fx-tilt-py, 50%),\r
    var(--fx-glare) 0%,\r
    transparent 60%\r
  );\r
\r
  opacity: var(--fx-tilt-glare-o, 0);\r
\r
  /* glareZ만큼 띄우고, 원근으로 커진 만큼 역보정해 카드를 정확히 덮습니다. */\r
  transform:\r
    translateZ(var(--fx-tilt-glare-z, 0px))\r
    scale(var(--fx-tilt-glare-scale, 1));\r
\r
  /* 취향에 따라 켜세요. 밝은 배경에서 더 자연스럽습니다.\r
     mix-blend-mode: soft-light; */\r
}\r
\r
/* ------------------------------------------------------------------ *\r
 * 가드에 걸려 꺼진 상태 (모바일 / 동작 줄이기)\r
 * 3D는 사라지지만 레이아웃은 그대로 유지되어야 합니다.\r
 * ------------------------------------------------------------------ */\r
.fx-inert .fx-tilt-card__glare,\r
.fx-tilt-card.fx-inert .fx-tilt-card__glare {\r
  display: none;\r
}\r
\r
.fx-tilt-card.fx-inert [data-fx-depth] {\r
  transform: none;\r
}\r
\r
/* ================================================================== *\r
 * 2. 선택 사항 — 기본 카드 스킨\r
 *\r
 * 이미 카드 디자인이 있으면 이 블록은 지우세요.\r
 * 바로 써보고 싶을 때만 class="fx-card"를 같이 붙이면 됩니다.\r
 * ================================================================== */\r
\r
.fx-card {\r
  display: block;\r
  border-radius: var(--fx-radius, 16px);\r
  background: var(--fx-surface);\r
  border: 1px solid var(--fx-border);\r
  box-shadow: var(--fx-shadow);\r
  color: var(--fx-text);\r
  padding: 20px;\r
  text-decoration: none;\r
  transition: box-shadow var(--fx-duration-fast) var(--fx-ease);\r
}\r
\r
.fx-card[data-fx-tilting='1'] {\r
  box-shadow: 0 26px 50px -20px rgba(16, 18, 29, 0.42);\r
}\r
\r
.fx-card__media {\r
  display: block;\r
  width: 100%;\r
  aspect-ratio: 16 / 10;\r
  object-fit: cover;\r
  border-radius: calc(var(--fx-radius, 16px) - 8px);\r
  background: var(--fx-surface-2);\r
  margin-bottom: 16px;\r
}\r
\r
.fx-card__title {\r
  margin: 0 0 6px;\r
  font-size: 1.0625rem;\r
  font-weight: 650;\r
  letter-spacing: -0.01em;\r
}\r
\r
.fx-card__desc {\r
  margin: 0;\r
  font-size: 0.875rem;\r
  line-height: 1.55;\r
  color: var(--fx-text-dim);\r
}\r
\r
.fx-card__tag {\r
  display: inline-block;\r
  margin-top: 14px;\r
  padding: 4px 10px;\r
  border-radius: 999px;\r
  font-size: 0.75rem;\r
  font-weight: 600;\r
  color: var(--fx-accent);\r
  background: color-mix(in srgb, var(--fx-accent) 12%, transparent);\r
}\r
`,Ld=Object.assign({"../../../effects/README.md":ky,"../../../effects/_core/README.md":Sy,"../../../effects/_core/core.css":jy,"../../../effects/_core/effect.js":Ey,"../../../effects/_core/guard.js":Cy,"../../../effects/_core/index.js":Ny,"../../../effects/_core/loader.js":$y,"../../../effects/_core/math.js":Ly,"../../../effects/_core/observer.js":Ry,"../../../effects/_core/react.js":My,"../../../effects/character/README.md":Ty,"../../../effects/character/index.js":zy,"../../../effects/character/react.jsx":Py,"../../../effects/character/rig.js":Ay,"../../../effects/character/skeleton.js":Dy,"../../../effects/character/style.css":Oy,"../../../effects/cursor-dot/index.js":Fy,"../../../effects/cursor-dot/style.css":Iy,"../../../effects/dot-grid-wave/README.md":By,"../../../effects/dot-grid-wave/index.js":Wy,"../../../effects/dot-grid-wave/react.jsx":Hy,"../../../effects/dot-grid-wave/style.css":Uy,"../../../effects/flip-card/README.md":Gy,"../../../effects/flip-card/index.js":Vy,"../../../effects/flip-card/react.jsx":Yy,"../../../effects/flip-card/style.css":qy,"../../../effects/hover-preview/index.js":Ky,"../../../effects/hover-preview/style.css":Xy,"../../../effects/index.js":Qy,"../../../effects/magnetic-button/README.md":Zy,"../../../effects/magnetic-button/index.js":Jy,"../../../effects/magnetic-button/react.jsx":ew,"../../../effects/magnetic-button/style.css":nw,"../../../effects/model-showcase/README.md":rw,"../../../effects/model-showcase/index.js":tw,"../../../effects/model-showcase/react.jsx":aw,"../../../effects/model-showcase/style.css":ow,"../../../effects/parallax-layers/README.md":sw,"../../../effects/parallax-layers/index.js":iw,"../../../effects/parallax-layers/react.jsx":lw,"../../../effects/parallax-layers/style.css":cw,"../../../effects/scroll-reveal/README.md":fw,"../../../effects/scroll-reveal/index.js":dw,"../../../effects/scroll-reveal/react.jsx":uw,"../../../effects/scroll-reveal/style.css":pw,"../../../effects/silk-bg/README.md":mw,"../../../effects/silk-bg/index.js":hw,"../../../effects/silk-bg/react.jsx":xw,"../../../effects/silk-bg/shader.js":gw,"../../../effects/silk-bg/style.css":vw,"../../../effects/smooth-scroll/index.js":yw,"../../../effects/spotlight/README.md":ww,"../../../effects/spotlight/index.js":bw,"../../../effects/spotlight/react.jsx":_w,"../../../effects/spotlight/style.css":kw,"../../../effects/starfield/README.md":Sw,"../../../effects/starfield/index.js":jw,"../../../effects/starfield/react.jsx":Ew,"../../../effects/starfield/style.css":Cw,"../../../effects/text-scramble/index.js":Nw,"../../../effects/tilt-card/README.md":$w,"../../../effects/tilt-card/index.js":Lw,"../../../effects/tilt-card/react.jsx":Rw,"../../../effects/tilt-card/style.css":Mw}),Pa={reveal:"scroll-reveal",silk:"silk-bg",dots:"dot-grid-wave",tilt:"tilt-card",magnetic:"magnetic-button",parallax:"parallax-layers",flip:"flip-card",preview:"hover-preview",scramble:"text-scramble",spotlight:"spotlight",starfield:"starfield"},Cs={model:"model-showcase"},Rd={model:{fn:"model",sel:".fx-model"}},H=(e="")=>String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),or=(e="")=>H(e).replace(/\n/g,"<br />"),qs=(e,n)=>{const r=String(e).trim().toLowerCase().replace(/[^a-z0-9가-힣]+/g,"-").replace(/^-|-$/g,"");return n===0?"index":r||`page-${n+1}`},ct=e=>e.replace(/[A-Z]/g,n=>"-"+n.toLowerCase());function Md(e){if(!(e!=null&&e.length))return"";const n=e.map(a=>a.name).join(" "),r=e.length>1;let t=` data-fx="${n}"`;for(const a of e){const o=r?`${Pa[a.name]??a.name}-`:"";for(const[i,l]of Object.entries(a.options??{})){if(l==null)continue;const f=Array.isArray(l)?l.join(","):String(l);t+=` data-fx-${o}${ct(i)}="${H(f)}"`}}return t}const Tw=/wf__tag|wf__fxtag|wf__entertag|wf__resize|wf__movex|wf__add|wf__rowdel|wf__regiondel|wf__edge|is-empty|is-hot|is-drop|is-sel|pb-editing|pb-preview|wf__label|wf__hint|wf-3d__|wf-edit|wf-card--empty|wf-card__slot|wf-detail\.is-open/;function Ns(e){const n=[];let r=0,t="";for(const a of e)if(t+=a,a==="{")r++;else if(a==="}"&&(r--,r===0)){const o=t.split("{")[0].replace(/\/\*[\s\S]*?\*\//g,"");Tw.test(o)||n.push(t.trim()),t=""}return n.join(`
`)}function zw(e,n,r={}){const t=r.sections?r.sections.map(o=>`<a href="#${encodeURIComponent(o.anchor)}" class="wf-nav__item">${H(o.label)}</a>`).join(`
        `):e.map((o,i)=>`<a href="${r.onePage?`#pg-${i}`:`${qs(o.name,i)}.html`}"${i===n?' class="wf-nav__item is-current"':' class="wf-nav__item"'}>${H(o.name)}</a>`).join(`
        `),a=r.gap?` style="gap:${r.gap}px"`:"";return`<nav class="wf-nav${r.vertical?" wf-nav--v":""}"${a}>
        ${t}
      </nav>`}function Pw(e,n,r,t,a,o,i,l,f,u,x){var w,v,b,S,h,c,p,g;const d=n.linkTo==="이 페이지 섹션"?l??[]:null,m=(y={})=>zw(r,t,{sections:d,onePage:x,...y});switch(e){case"topheader":case"header":return`<div class="wf-bar" style="justify-content:${n.align}">
        <span class="wf-bar__logo">${H(n.logo)}</span>
        ${n.showMenu?m():""}
        ${e==="header"&&n.cta?`<a class="wf-btn wf-btn--sm" href="#contact">${H(n.cta)}</a>`:""}
        ${n.modeToggle?Td:""}
      </div>`;case"nav":return`<div class="wf-bar" style="justify-content:${n.align}">
        ${m({gap:n.gap})}
        ${n.modeToggle?Td:""}
      </div>`;case"hero":{const y=Object.entries(Ss(n)).map(([_,j])=>`${_.startsWith("--")?_:ct(_)}:${j}`).join(";"),k=` class="wf-btn"${y?` style="${y}"`:""}`;return`<div class="wf-hero" style="align-items:${sr(n.align)};text-align:${n.align==="center"?"center":"left"}">
        <h1 class="wf-hero__title" style="font-size:clamp(1.9em, 8.5vw, calc(${n.titleScale} * 3.2em))">${or(n.title)}</h1>
        ${n.subtitle?`<p class="wf-hero__sub">${or(n.subtitle)}</p>`:""}
        ${n.cta?(w=n.ctaFile)!=null&&w.id?`<a${k}${i(n.ctaFile)}>${H(n.cta)}</a>`:`<a${k} href="#contact">${H(n.cta)}</a>`:""}
      </div>`}case"aside":return`<div class="wf-aside" style="align-items:${sr(n.align)}">
        ${o(n.photo,`wf-aside__photo${n.photoRound?" is-round":""}`,`width:${n.photoSize??96}px;height:${n.photoSize??96}px`)}
        <h2 class="wf-aside__name">${H(n.name)}</h2>
        <p class="wf-aside__role">${H(n.role)}</p>
        ${n.bio?`<p class="wf-aside__bio">${or(n.bio)}</p>`:""}
        ${n.showMenu?m({vertical:!0,gap:10}):""}
      </div>`;case"section":{const y=Array.from({length:n.columns},(M,A)=>`<p class="wf-sec__body">${or(n.columns>1?`${A+1}. ${n.body}`:n.body)}</p>`).join(`
          `),k=n.listStyle==="tags"?`<div class="wf-tags">${(n.items??[]).map(M=>`<span class="wf-tag">${H(M.label)}${M.note?`<em>${H(M.note)}</em>`:""}</span>`).join("")}</div>`:"",_=n.listStyle==="timeline"?`<ol class="wf-time">${(n.items??[]).map(M=>`<li class="wf-time__row"><b>${H(M.label)}</b>${M.note?`<span>${H(M.note)}</span>`:""}</li>`).join("")}</ol>`:"",j=()=>(n.items??[]).map(M=>`<span class="wf-tag">${H(M.label)}${M.note?`<em>${H(M.note)}</em>`:""}</span>`).join(""),C=n.listStyle==="marquee"?`<div class="wf-marquee" style="--marq-t:${Math.max(10,(((v=n.items)==null?void 0:v.length)??0)*3)}s"><div class="wf-marquee__track"><div class="wf-marquee__set">${j()}</div><div class="wf-marquee__set" aria-hidden="true">${j()}</div></div></div>`:"",R=n.listStyle==="stats"?`<div class="wf-stats">${(n.items??[]).map(M=>{const A=/^(\d+)\s*(.*)$/.exec(String(M.note??"").trim());return`<div class="wf-stat"><b class="wf-stat__num">${A?`<i class="wf-stat__count" style="--wf-n-to:${+A[1]}" aria-hidden="true"></i><span class="wf-stat__plain" aria-hidden="true">${H(A[1])}</span>`+(A[2]?`<span class="wf-stat__suffix" aria-hidden="true">${H(A[2])}</span>`:"")+`<span class="wf-sr">${H(M.note)}</span>`:`<span>${H(M.note||"0")}</span>`}</b><span class="wf-stat__label">${H(M.label)}</span></div>`}).join("")}</div>`:"";return`<div class="wf-sec" style="align-items:${sr(n.align)}">
        <h2 class="wf-sec__title">${H(n.title)}</h2>
        <div class="wf-sec__cols" style="grid-template-columns:repeat(${n.columns}, minmax(0, 1fr))">
          ${y}
        </div>
        ${k}${_}${C}${R}
      </div>`}case"timeline":return`<div class="wf-tl">
        ${n.eyebrow?`<span class="wf-tl__eyebrow">${H(n.eyebrow)}</span>`:""}
        <h2 class="wf-tl__title">${H(n.title)}</h2>
        <ol class="wf-tl__list">${(n.items??[]).map(y=>`<li class="wf-tl__item"><span class="wf-tl__label">${H(y.label)}</span><b class="wf-tl__head">${H(y.head)}</b>${y.desc?`<p class="wf-tl__desc">${or(y.desc)}</p>`:""}</li>`).join(`
        `)}</ol>
      </div>`;case"gallery":{const y=xm(n.items,n.columns,n.rows).filter(_=>_.item).map(({item:_,index:j})=>{var A,Q;if(a)return`<article class="wf-card fx-flip-card is-flip">
            <div class="fx-flip-card__inner">
              <div class="fx-flip-card__face fx-flip-card__face--front" data-fx-face="front">
                <b class="wf-card__title">${H(_.title)}</b>
                ${_.stack?`<span class="wf-card__stack">${H(_.stack)}</span>`:""}
              </div>
              <div class="fx-flip-card__face fx-flip-card__face--back" data-fx-face="back">
                <span class="wf-card__desc">${or(_.desc)}</span>
              </div>
            </div>
          </article>`;const C=`<span class="wf-card__body">
              <b class="wf-card__title">${H(_.title)}</b>
              ${_.stack?`<span class="wf-card__stack">${H(_.stack)}</span>`:""}
              ${_.desc?`<span class="wf-card__desc">${or(_.desc)}</span>`:""}
              ${_.link?'<span class="wf-card__link">↗ 링크</span>':""}
            </span>`,M=`${n.showThumb?`<span class="wf-card__thumb" style="padding-bottom:${n.ratio*100}%">${(A=_.image)!=null&&A.id?o(_.image,"wf-card__img"):`<em>${j+1}</em>`}</span>`:""}${C}`;return(Q=_.detail)!=null&&Q.trim()?`<a class="wf-card has-detail" href="#${bs(f,j)}">${M}</a>`:_.link?`<a class="wf-card" href="${H(Et(_.link))}" target="_blank" rel="noreferrer noopener">${M}</a>`:`<article class="wf-card">${M}</article>`}).join(`
          `),k=(n.items??[]).map((_,j)=>{var R,M;if(!((R=_==null?void 0:_.detail)!=null&&R.trim()))return"";const C=_.link?`<a class="wf-card__link" href="${H(Et(_.link))}" target="_blank" rel="noreferrer noopener">↗ 링크 열기</a>`:"";return`<div class="wf-detail" id="${bs(f,j)}">
            <a class="wf-detail__scrim" href="#" aria-label="닫기"></a>
            <div class="wf-detail__box">
              <a class="wf-detail__close" href="#" aria-label="닫기">✕</a>
              ${(M=_.image)!=null&&M.id?o(_.image,"wf-detail__img"):""}
              <b class="wf-detail__title">${H(_.title)}</b>
              ${_.stack?`<span class="wf-card__stack">${H(_.stack)}</span>`:""}
              <p class="wf-detail__body">${or(_.detail)}</p>
              ${C}
            </div>
          </div>`}).filter(Boolean).join(`
        `);return`<div class="wf-gal${n.grayHover?" is-gray":""}">
        <h2 class="wf-sec__title">${H(n.title)}</h2>
        <div class="wf-gal__grid" style="grid-template-columns:repeat(${n.columns}, minmax(0, 1fr))">
          ${y}
        </div>
        ${k}
      </div>`}case"main":return`<div class="wf-main" style="grid-template-columns:repeat(${n.columns}, minmax(0, 1fr));gap:${n.gap}px">
        ${(n.items??[]).map(y=>`<div class="wf-main__slot">${H(y.label)}</div>`).join(`
        `)}
      </div>`;case"model":{const y=(b=n.srcFile)!=null&&b.id?u==null?void 0:u(n.srcFile):n.src,k=(S=n.envFile)!=null&&S.id?Em(u==null?void 0:u(n.envFile),(h=n.envFile)==null?void 0:h.name):n.environmentImage,_=(((c=Kn[e])==null?void 0:c.optionKeys)??[]).filter(C=>C!=="src"&&C!=="environmentImage").filter(C=>n[C]!==void 0&&n[C]!==null&&n[C]!=="").map(C=>` data-fx-${ct(C)}="${H(String(n[C]))}"`).join(""),j=n.fill?null:n.free?"100%":`min(${n.boxHeight}px, 62vh)`;return`<div class="wf-3d fx-model${n.fill?" is-fill":""}"${j?` style="height:${j}"`:""}${y?` data-fx-src="${H(y)}"`:""}${k?` data-fx-environment-image="${H(k)}"`:""}${_}></div>`}case"contact":{const y=[n.phone?`<a href="tel:${H(n.phone.replace(/[^\d+]/g,""))}">${H(n.phone)}</a>`:"",n.location?`<span>${H(n.location)}</span>`:""].filter(Boolean).join("<i> · </i>");return`<div class="wf-contact" style="align-items:${sr(n.align)};text-align:${n.align==="center"?"center":"left"}">
        <h2 class="wf-sec__title">${H(n.title)}</h2>
        ${n.body?`<p class="wf-sec__body">${or(n.body)}</p>`:""}
        ${n.email?`<a class="wf-contact__mail${n.big?" is-big":""}" href="mailto:${H(n.email)}">${H(n.email)}</a>`:""}
        ${y?`<span class="wf-contact__meta">${y}</span>`:""}
      </div>`}case"cover":{const y=`wf-cover${n.kenBurns?" is-kb":""}${n.zoomOnScroll?" is-zoom":""}`,k=(p=n.image)!=null&&p.id?o(n.image,"wf-cover__img"):'<span class="wf-cover__empty" aria-hidden="true"></span>';return`<div class="${y}" style="height:${n.height}px;justify-content:${sr(n.valign)};align-items:${sr(n.align)}">
        ${k}
        <span class="wf-cover__veil" style="opacity:${n.overlay}" aria-hidden="true"></span>
        <span class="wf-cover__body" style="text-align:${n.align==="center"?"center":"left"}">
          <b class="wf-cover__title">${or(n.title)}</b>
          ${n.sub?`<span class="wf-cover__sub">${H(n.sub)}</span>`:""}
        </span>
      </div>`}case"marquee":{const y=()=>[0,1,2,3].map(()=>`<span class="wf-mq__txt">${H(n.text)}</span><i class="wf-mq__sep">${H(n.sep)}</i>`).join(""),k=`--mq-t:${n.speed}s;--mq-size:${n.size}em;--mq-dir:${n.reverse?"reverse":"normal"}`;return`<div class="wf-mq${n.outline?" is-outline":""}${n.pauseOnHover?" is-pausable":""}" style="${k}">
        <div class="wf-mq__track">
          <span class="wf-mq__set">${y()}</span>
          <span class="wf-mq__set" aria-hidden="true">${y()}</span>
        </div>
      </div>`}case"cta":{const y=Object.entries(Ss(n)).map(([j,C])=>`${j.startsWith("--")?j:ct(j)}:${C}`).join(";"),k=` class="wf-btn wf-cta__btn"${y?` style="${y}"`:""}`,_=n.cta?(g=n.ctaFile)!=null&&g.id?`<a${k}${i(n.ctaFile)}>${H(n.cta)}</a>`:`<a${k} href="${H(n.ctaHref?Et(n.ctaHref):"#contact")}"${n.ctaHref&&/^https?:/i.test(Et(n.ctaHref))?' target="_blank" rel="noreferrer noopener"':""}>${H(n.cta)}</a>`:"";return`<div class="wf-cta${n.gradient?" is-grad":""}" style="align-items:${sr(n.align)};text-align:${n.align==="center"?"center":"left"}">
        <b class="wf-cta__title">${H(n.title)}</b>
        ${n.sub?`<span class="wf-cta__sub">${H(n.sub)}</span>`:""}
        ${_}
      </div>`}case"slider":{const y=ym(n.transition),k=(n.items??[]).slice(0,bm),_=wm(f),j=y!=="scroll"?k.map((A,Q)=>`<input class="wf-sld__r" type="radio" name="${_}" id="${Pr(f,Q)}"${Q===0?" checked":""} />`).join(`
        `):"",C=k.map((A,Q)=>{var P;const B=(P=A.image)!=null&&P.id?o(A.image,"wf-sld__img"):'<span class="wf-sld__empty" aria-hidden="true"></span>',V=A.href?Et(A.href):"",ye=A.cta?`<a class="wf-btn wf-sld__btn" href="${H(V||"#contact")}"${V&&/^https?:/i.test(V)?' target="_blank" rel="noreferrer noopener"':""}>${H(A.cta)}</a>`:"",we=y!=="scroll"&&k.length>1&&n.arrows?`<span class="wf-sld__nav" aria-hidden="true">
            <label class="wf-sld__arrow is-prev" for="${Pr(f,(Q-1+k.length)%k.length)}">‹</label>
            <label class="wf-sld__arrow is-next" for="${Pr(f,(Q+1)%k.length)}">›</label>
          </span>`:"";return`<div class="wf-sld__slide">
          ${B}
          <span class="wf-sld__veil" style="opacity:${n.overlay}" aria-hidden="true"></span>
          <span class="wf-sld__body" style="justify-content:${sr(n.valign)};align-items:${sr(n.align)};text-align:${n.align==="center"?"center":"left"}">
            <b class="wf-sld__title">${H(A.title)}</b>
            ${A.sub?`<span class="wf-sld__sub">${H(A.sub)}</span>`:""}
            ${ye}
          </span>
          ${we}
        </div>`}).join(`
        `),R=y!=="scroll"&&k.length>1&&n.dots?`<span class="wf-sld__dots">${k.map((A,Q)=>`<label for="${Pr(f,Q)}" title="${Q+1}번째"></label>`).join("")}</span>`:"",M=n.autoplay&&y!=="scroll"?` data-auto="${(n.interval??5)*1e3}"`:"";return`<div class="wf-sld wf-sld--${y}${n.kenBurns?" is-kb":""}${n.arrows?"":" no-arrows"}" style="--sld-h:${n.height}px;--sld-t:${n.speed}ms"${M} data-loop="${n.loop?1:0}" data-pause="${n.pauseOnHover?1:0}">
        ${j}
        <div class="wf-sld__track">
        ${C}
        </div>
        ${R}
      </div>`}case"links":{const y=(n.items??[]).filter(k=>k.label||k.url).map(k=>{const _=z0(k);if(_.file){const A=i(_.file),Q=`<em class="wf-link__url">↓ ${H(_.file.name??"파일")}</em>`;return A?`<a class="wf-link"${A}>${H(k.label)}${Q}</a>`:`<span class="wf-link">${H(k.label)}</span>`}const j=_.url,C=/^https?:/i.test(j),R=j?` href="${H(j)}"${n.newTab&&C?' target="_blank" rel="noreferrer noopener"':""}`:"",M=n.style!=="buttons"&&k.url?`<em class="wf-link__url">${H(km(k.url))}</em>`:"";return j?`<a class="wf-link"${R}>${H(k.label)}${M}</a>`:`<span class="wf-link">${H(k.label)}${M}</span>`}).join(`
          `);return`<div class="wf-links wf-links--${n.style}" style="align-items:${sr(n.align)}">
        ${n.title?`<h2 class="wf-sec__title">${H(n.title)}</h2>`:""}
        <div class="wf-links__row">
          ${y}
        </div>
      </div>`}case"footer":return`<footer class="wf-bar wf-bar--foot" style="justify-content:${n.align}">
        <span class="wf-foot__text">${H(n.text)}</span>
        ${n.showMenu?m({gap:18}):""}
        ${n.showTime?`<span class="wf-foot__time" data-wf-clock="${H(n.timeZone??"")}" data-wf-city="${H(n.timeCity??"Seoul")}">${H(hm(n.timeCity,n.timeZone))}</span>`:""}
        ${n.email?`<a class="wf-foot__mail" href="mailto:${H(n.email)}">${H(n.email)}</a>`:""}
      </footer>`;default:return""}}const sr=e=>e==="center"?"center":e==="end"?"flex-end":"flex-start",Td='<button type="button" class="wf-mode" data-mode-toggle aria-label="다크 / 라이트 전환"><svg class="wf-mode__moon" aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg><svg class="wf-mode__sun" aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg></button>',Aw=e=>String(e).replace(/(^|[\s,(])(\d*\.?\d+)fr/g,"$1minmax(0, $2fr)");function zd(e,n,r,t){var Se,I,U,pe,fe,de,te,Ce,L,z,ee;const{pages:a,theme:o,typeset:i,global:l}=r,f=ht(e.wireframe),u=e.fills??{},x=e.overrides??{},d=e.fx??{},m=[...f.regions.map(T=>T.id),...(e.extra??[]).flatMap(en)],w={},v=[];for(const T of m){const F=u[T];if(!vm.includes(F))continue;const ie=(U=(I=(Se=e.content)==null?void 0:Se[T])==null?void 0:I.title)==null?void 0:U.trim();if(!ie)continue;const he=gm(ie,T);let me=he,ge=2;for(;v.some(be=>be.anchor===me);)me=`${he}-${ge++}`;w[T]=me,v.push({regionId:T,label:_m(ie),anchor:me})}const b=eh((pe=r.site)==null?void 0:pe.enterFx),S=b==="none"?{}:nh([...f.regions,...(e.extra??[]).flatMap(T=>en(T).map(F=>({id:F,row:T.id})))].filter(T=>{var F;return!((F=x[T.id])!=null&&F.enterOff)}),u),h=(T,F,ie,he)=>{var Xr,We,bt;const me=u[T];if(!me)return"";const ge=Kn[me],be=((Xr=e.content)==null?void 0:Xr[T])??{},ne=d[T]??[],Re=ne.some(xn=>xn.name==="flip"),G={...ks,radius:((ge==null?void 0:ge.pad)!==void 0,l.radius),padding:(ge==null?void 0:ge.pad)??l.padding,border:l.border,minHeight:0,bg:"",...x[T]??{}},Ee=Object.entries(Nm(G.typo,am)).map(([xn,rr])=>`${xn.startsWith("--")?xn:ct(xn)}:${rr}`).join(";"),ze=me==="model"&&!!be.free,qe=!!G.free&&!!(ge!=null&&ge.freeItems),mn=qe&&G.itemPos?Object.entries(G.itemPos).map(([xn,rr])=>`--fi${xn}x:${rr.x}%;--fi${xn}y:${rr.y}%`).join(";"):"",Qn=[ze?`left:${be.freeX??72}%;top:${be.freeY??58}%;width:clamp(104px, ${be.freeW??26}vw, 46vw);height:auto;aspect-ratio:1/1`:"",ze?"":F,ze?"":_s(G.alignY)?`align-self:${_s(G.alignY)}`:"",ze?"":`min-height:${Sm(Math.max(ie,(ge==null?void 0:ge.h)??0),G.minHeight)}px`,mn,`border-radius:${G.radius}px`,`border-width:${t.borders===!1?0:G.border}px`,t.borders===!1?"":"border-color:var(--wf-line, currentColor)",G.z?`z-index:${G.z}`:"",(G.bgShift??"").trim()?`view-timeline:--wfbg-${T} block`:"",`padding:min(${G.padding}px, 6vw)`,G.bg?`background-color:${G.bg}`:js((We=r.site)==null?void 0:We.background)?`background-color:${jm(ra(o).bg,G.bgSee)}`:"",Object.entries(Cm(G,(bt=t.imgSrc)==null?void 0:bt.call(t,G.bgImage))).map(([xn,rr])=>`${ct(xn)}:${rr}`).join(";"),Object.entries(cm(G.tfx)).map(([xn,rr])=>`${xn}:${rr}`).join(";"),Ee].filter(Boolean).join(";"),Zn=["wf__region",he?"is-sticky":"",ze?"is-free":"",qe?"is-freeitems":"",be.divider?"has-divider":"",lm(G.tfx)].filter(Boolean).join(" "),Jn=ge!=null&&ge.tag&&/^(header|nav|main|aside|section|footer)$/.test(ge.tag)?ge.tag:"div",er=Ww(Pw(me,be,a,n,Re,t.img,t.file,v,T,t.fileSrc,t.onePage),G.tfx),hn=w[T]?` id="${w[T]}"`:me==="footer"?' id="contact"':"",mr=S[T]?` data-enter="${S[T]}"`:"",nr=be.hideOnScroll&&(he||be.sticky)?' data-hide-scroll=""':"";if(me==="footer")return`<div class="${Zn}"${hn}${mr} style="${Qn}"${Md(ne)}>${er}</div>`;const Bn=`<${Jn} class="${Zn}"${hn}${mr}${nr} style="${Qn}"${Md(ne)}>
      ${er}
    </${Jn}>`,kn=/grid-row:[^;]*\//.test(F||"")&&/grid-column:1(?![0-9])/.test(F||""),Rn=["topheader","nav","header"].includes(me),wt=me&&(he||Rn||me==="aside"&&kn);return t.onePage&&wt?n>0?"":`<!--WFHEAD:${kn?"side":"top"}-->${Bn}<!--/WFHEAD-->`:Bn},c=Mm(f,u),p=zc(f,x,l.gap),g=(T,F)=>{var ie;return((ie=T.fit[F])==null?void 0:ie.col)??T.place[F]},y=(T,F)=>T.fit[F]?`;width:${T.fit[F].width};justify-self:${T.fit[F].justify}`:"",k=T=>{const F=Pc(T,x,l.gap),ie=en(T).map(me=>h(me,F.place[me]?`grid-column:${g(F,me)}${y(F,me)}`:"",180,!1)).filter(Boolean).join(`
      `);return ie?`<div class="wf wf--row" style="grid-template-columns:repeat(${F.cols?T.cols*lt:T.cols}, minmax(0, 1fr));gap:${l.gap}px">
      ${ie}
    </div>`:""},{from:_}=co(f),j=(T,F,ie)=>{const he=String(T??"").trim().split(/\s+/).filter(Boolean);return he.length?he.slice(F,ie).join(" "):""},C=T=>{const[F,ie]=String(T).split("/").map(me=>me.trim()),he=parseInt(F,10)||1;return[he,!ie||ie==="-1"?he+1:parseInt(ie,10)||he+1]},R=(T,F)=>{const ie=f.regions.filter(G=>c.place[G.id]&&_(G)>=T&&_(G)<=F);if(!ie.length)return"";const he=ie.map(G=>C(c.place[G.id].row)),me=Math.min(...he.map(([G])=>G)),ge=Math.max(...he.map(([,G])=>G)),be=G=>{const[Ee,ze]=String(G).split("/").map(mn=>mn.trim()),qe=(parseInt(Ee,10)||1)-me+1;return ze?ze==="-1"?qe+" / -1":qe+" / "+((parseInt(ze,10)||qe+1)-me+1):String(qe)},ne=ie.map(G=>h(G.id,`grid-column:${g(p,G.id)??c.place[G.id].col};grid-row:${be(c.place[G.id].row)}${y(p,G.id)}`,G.minH,f.sticky===G.id)).filter(Boolean).join(`
    `);if(!ne)return"";const Re=j(c.rows,me-1,ge-1);return`<div class="wf" style="grid-template-columns:${Aw(p.cols??f.cols)};${Re?`grid-template-rows:${Re};`:""}gap:${l.gap}px">
    ${ne}
    </div>`},M=Im(f,e.extra??[]).map(T=>T.kind==="row"?k(T.row):R(T.from,T.to)).filter(Boolean).join(`
    `),A=new Set;Object.values(d).forEach(T=>T.forEach(F=>A.add(F.name))),Object.values(u).forEach(T=>{Cs[T]&&A.add(T)});const Q=ra(o),B=ys(i),V=[...f.regions.map(T=>T.id),...(e.extra??[]).flatMap(en)].filter(T=>{var F;return u[T]&&(((F=x[T])==null?void 0:F.bgShift)??"").trim()}).map(T=>({id:T,color:x[T].bgShift})),ye=[`font-family:${B.font}`,`background:${Q.bg}`,`--wf-bg:${Q.bg}`,`--wf-text:${Q.text}`,`color:${Q.text}`,`--wf-surface:${Q.surface}`,`--wf-line:${Q.border}`,`--wf-muted:${Q.muted}`,`--wf-accent:${Q.accent}`,`--wf-max:${l.maxWidth}px`,`padding:10px ${l.marginX??10}px`,`--fx-dot-color:${Q.dot}`,`--fx-star-color:${th(Q)}`,`--fx-char-color:${Q.line}`,...b!=="none"?[`--enter-at:${rh((fe=r.site)==null?void 0:fe.enterDelay)}%`]:[],...V.length?[`timeline-scope:${V.map(T=>`--wfbg-${T.id}`).join(", ")}`]:[],...t.modeToggle?(()=>{const T=ah(Q);return[`--wfm-bg:${T.bg}`,`--wfm-text:${T.text}`,`--wfm-surface:${T.surface}`,`--wfm-line:${T.border}`,`--wfm-muted:${T.muted}`]})():[]].join(";"),we=t.withEffects&&(A.size||t.globalsOn)?`
  <script type="module" src="./assets/init.js"><\/script>`:"",P=t.single?`
  <style>
${t.fontCss??""}
${Ns(Sc)}
${Ns(kc)}
  </style>`:`
  <link rel="stylesheet" href="./assets/site.css" />`,W=r.site??{},Y=to(W,a),ue=n===0?Y:`${e.name} — ${Y}`,K=(de=W.description)==null?void 0:de.trim(),Ae=(te=t.imgSrc)==null?void 0:te.call(t,W.ogImage),$e=t.single?Ae:Bv(W,Ae),J=[K?`
  <meta name="description" content="${H(K)}" />`:"",`
  <meta property="og:type" content="website" />`,`
  <meta property="og:title" content="${H(ue)}" />`,K?`
  <meta property="og:description" content="${H(K)}" />`:"",$e?`
  <meta property="og:image" content="${$e}" />`:"",`
  <meta name="twitter:card" content="${$e?"summary_large_image":"summary"}" />`,`
  <link rel="icon" href="${Wv(W,a)}" />`].join(""),re=W.background,Le=T=>Object.entries(T).map(([F,ie])=>`${ct(F)}:${ie}`).join(";");let Te="";if(js(re)){const T=Le(Qm(re)),F=Le(Zm(re)),ie=re.kind==="video"?(Ce=t.fileSrc)==null?void 0:Ce.call(t,re.video):(L=t.imgSrc)==null?void 0:L.call(t,re.image),he=re.kind==="video"?(z=t.imgSrc)==null?void 0:z.call(t,re.poster):null,me=Xm(re.mode)==="tile"&&ie?` background-image:url('${ie}');`:"";if(ie){const ge=re.kind==="video"?`<video class="wf-bg__media"${T?` style="${T}"`:""} src="${ie}"${he?` poster="${he}"`:""} autoplay muted loop playsinline></video>`:`<img class="wf-bg__media"${T?` style="${T}"`:""} src="${ie}" alt="" />`;Te=`
    <div class="${Cl(re)}"${me?` style="${me.trim()}"`:""} aria-hidden="true">
      ${ge}
      <span class="wf-bg__veil"${F?` style="${F}"`:""}></span>
    </div>`}}(ee=r.site)!=null&&ee.introLoader&&n===0&&(Te+=`
    <div class="wf-intro" aria-hidden="true"><b class="wf-intro__name">${H(to(W,a))}</b><i class="wf-intro__bar"></i></div>`);for(const T of V)Te+=`
    <i class="wf-bgshift" aria-hidden="true" style="background:${H(T.color)};animation-timeline:--wfbg-${T.id}"></i>`;W.scrollBar&&(Te+=`
    <span class="wf-progress" aria-hidden="true"></span>`),((re==null?void 0:re.grain)??0)>0&&(Te+=`
    <span class="wf-grain" style="opacity:${re.grain}" aria-hidden="true"></span>`);const Z=v.length?`
    <a class="wf-down" href="#${encodeURIComponent(v[0].anchor)}" aria-label="아래로 이동"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M6 13l6 6 6-6"/></svg></a>`:"",ce=`<div class="wf-page${b!=="none"?` wf-enter wf-enter--${b}`:""}" style="${ye};gap:${l.gap}px">${Te}
    ${M}${Z}
  </div>`;return{file:`${qs(e.name,n)}.html`,usesFx:A,bodyHTML:ce,html:`<!doctype html>
<html lang="${H(W.lang||"ko")}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${H(ue)}</title>${J}${P}
</head>
<body>
  ${ce}${we}
</body>
</html>
`}}function Dw(e,n={}){const r=[],t=[];n.smooth&&(r.push("import { mount as smoothScroll } from '../effects/smooth-scroll/index.js';"),t.push("  smoothScroll(document.body);")),n.cursor&&(r.push("import { mount as cursorDot } from '../effects/cursor-dot/index.js';"),t.push("  cursorDot(document.body);")),n.clock&&t.push(`  document.querySelectorAll('[data-wf-clock]').forEach((el) => {
    const tick = () => {
      try {
        const hm = new Intl.DateTimeFormat('ko-KR', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: el.dataset.wfClock || undefined }).format(new Date());
        el.textContent = (el.dataset.wfCity || 'Seoul') + ', ' + hm;
      } catch { /* 시간대 이름이 틀리면 마지막 값을 그대로 둡니다 */ }
    };
    tick();
    setInterval(tick, 30000);
  });`),n.mode&&t.push(`  const MODE_KEY = 'pm:dark';
  const applyMode = (dark) => {
    document.querySelectorAll('.wf-page').forEach((p) => {
      if (dark) {
        if (!p.dataset.lightStyle) p.dataset.lightStyle = p.getAttribute('style') || '';
        const v = (n) => getComputedStyle(p).getPropertyValue(n).trim();
        p.style.background = v('--wfm-bg');
        p.style.color = v('--wfm-text');
        p.style.setProperty('--wf-bg', v('--wfm-bg'));
        p.style.setProperty('--wf-text', v('--wfm-text'));
        p.style.setProperty('--wf-surface', v('--wfm-surface'));
        p.style.setProperty('--wf-line', v('--wfm-line'));
        p.style.setProperty('--wf-muted', v('--wfm-muted'));
      } else if (p.dataset.lightStyle !== undefined) {
        p.setAttribute('style', p.dataset.lightStyle);
      }
      p.classList.toggle('is-dark', dark);
    });
    try { localStorage.setItem(MODE_KEY, dark ? '1' : '0'); } catch { /* 시크릿 모드 등 */ }
  };
  document.addEventListener('click', (e) => {
    if (!e.target.closest('[data-mode-toggle]')) return;
    applyMode(!document.querySelector('.wf-page')?.classList.contains('is-dark'));
  });
  try { if (localStorage.getItem(MODE_KEY) === '1') applyMode(true); } catch { /* 저장 불가 환경 */ }`),n.slider&&t.push(`  document.querySelectorAll('.wf-sld').forEach((sl) => {
    const rs = [...sl.querySelectorAll('.wf-sld__r')];
    if (rs.length < 2) return;
    const loop = sl.dataset.loop !== '0';
    const go = (n) => {
      const i = rs.findIndex((r) => r.checked);
      let k = i + n;
      if (k >= rs.length) k = loop ? 0 : i;
      if (k < 0) k = loop ? rs.length - 1 : i;
      rs[Math.max(0, k)].checked = true;
    };
    /* 스와이프 — 손가락으로 40px 넘게 밀면 한 장 넘깁니다. */
    let x0 = null;
    sl.addEventListener('pointerdown', (e) => { if (e.pointerType === 'touch') x0 = e.clientX; });
    sl.addEventListener('pointerup', (e) => {
      if (x0 === null) return;
      const dx = e.clientX - x0;
      x0 = null;
      if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    });
    const ms = Number(sl.dataset.auto || 0);
    if (!ms || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let t = setInterval(() => go(1), ms);
    if (sl.dataset.pause === '1') {
      sl.addEventListener('pointerenter', () => { clearInterval(t); t = null; });
      sl.addEventListener('pointerleave', () => { if (!t) t = setInterval(() => go(1), ms); });
    }
  });`),n.hideNav&&t.push(`  {
    const hideEls = [...document.querySelectorAll('[data-hide-scroll]')].map((el) => el.closest('.wf-headbar') || el);
    if (hideEls.length) {
      let lastY = window.scrollY;
      window.addEventListener('scroll', () => {
        const y = window.scrollY;
        const dy = y - lastY;
        lastY = y;
        if (Math.abs(dy) < 4) return;
        hideEls.forEach((el) => el.classList.toggle('wf-nav-hidden', dy > 0 && y > 80));
      }, { passive: true });
    }
  }`);for(const a of e)if(Pa[a]){r.push(`import { mount as ${a} } from '../effects/${Pa[a]}/index.js';`);const o=yt[a];o!=null&&o.target?t.push(`  document.querySelectorAll('[data-fx~="${a}"]').forEach((el) => {
    const targets = el.querySelectorAll('${o.target}');
    if (targets.length) ${a}([...targets], readOpts(el, '${Pa[a]}'));
  });`):t.push(`  ${a}('[data-fx~="${a}"]');`)}else if(Cs[a]&&Rd[a]){const{fn:o,sel:i}=Rd[a];r.push(`import { mount as ${o} } from '../effects/${Cs[a]}/index.js';`),t.push(`  ${o}('${i}');`)}return`/**
 * 3D 효과 마운트.
 *
 * 옵션은 HTML의 data-fx-* 속성에 들어 있고, 효과 팩의 defineEffect가
 * 그걸 알아서 읽습니다(effects/_core/effect.js). 그래서 여기서는
 * "선택자마다 mount 한 번"만 부르면 끝입니다.
 *
 * 효과를 빼고 싶으면 아래 한 줄을 지우고 HTML의 data-fx도 지우면 됩니다.
 */

${r.join(`
`)}

/**
 * 영역 안쪽 요소에 붙는 효과(tilt/flip/magnetic/scramble)는 옵션을 부모에서 읽습니다.
 * 효과가 둘 이상인 영역은 팩 이름 접두사(data-fx-<팩>-<키>)로 실려 옵니다 —
 * 접두사 속성이 하나라도 있으면 그것만, 없으면 옛 방식(접두사 없음)을 읽습니다.
 */
function readOpts(el, prefix) {
  const out = {};
  const scoped = prefix ? 'data-fx-' + prefix + '-' : null;
  const hasScoped = scoped && [...el.attributes].some((a) => a.name.startsWith(scoped));
  for (const { name, value } of el.attributes) {
    if (!name.startsWith('data-fx-')) continue;
    if (hasScoped && !name.startsWith(scoped)) continue;
    const raw = hasScoped ? name.slice(scoped.length) : name.slice(8);
    const key = raw.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    out[key] = value === 'true' ? true : value === 'false' ? false
      : value !== '' && !Number.isNaN(Number(value)) ? Number(value)
      : value.includes(',') ? value.split(',') : value;
  }
  return out;
}

function boot() {
${t.join(`
`)}
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
else boot();
`}const Ow={"image/webp":"webp","image/png":"png","image/jpeg":"jpg","image/gif":"gif","image/svg+xml":"svg","application/pdf":"pdf","application/zip":"zip","model/gltf-binary":"glb","model/gltf+json":"gltf"};function Fw(e,n,r){var o;const t=Ow[n]??(((o=r==null?void 0:r.match(/\.([a-z0-9]{1,5})$/i))==null?void 0:o[1])??"bin").toLowerCase();return n!=null&&n.startsWith("image/")?`images/${e}.${t}`:`files/${(r??e).replace(/\.[^.]*$/,"").replace(/[^\w가-힣.-]+/g,"-").slice(0,40)||e}.${t}`}function Iw(e){const n={},r=t=>{if(!(!t||typeof t!="object")){if(Array.isArray(t))return t.forEach(r);if(typeof t.id=="string"&&typeof t.bytes=="number"){t.name&&(n[t.id]=t.name);return}Object.values(t).forEach(r)}};for(const t of(e==null?void 0:e.pages)??[])Object.values(t.content??{}).forEach(r),Object.values(t.overrides??{}).forEach(r);return r(e==null?void 0:e.site),n}async function Bw(e,n){const r={},t={},a=Iw(e);for(const o of Rc(e)){if(n){const f=await mm(o);f&&(r[o]=f);continue}const i=await $0(o);if(!i)continue;const l=`assets/${Fw(o,i.type,a[o])}`;t[l]=new Uint8Array(await i.arrayBuffer()),r[o]=`./${l}`}return{srcMap:r,binaries:t}}function Ww(e,n){if(!im(n))return e;const t=n.target==="제목 + 본문"?"(?:title|__body|__sub)":"title",a=new RegExp(String.raw`(<(h1|h2|b|p|span)\b[^>]*class="[^"]*${t}[^"]*"[^>]*>)([\s\S]*?)(</\2>)`,"g");return e.replace(a,(o,i,l,f,u)=>{if(/<(?!br\b)/.test(f)||f.includes("&"))return o;let x=0;const d=f.split(/<br \/>/).map(m=>[...m].map(w=>`<span class="wf-tfx__ch" style="--i:${x++}">${w===" "?"&nbsp;":w}</span>`).join("")).join("<br />");return`${i}${d}${u}`})}const Hw=e=>{const n=new Uint8Array(e);let r="";for(let t=0;t<n.length;t+=8192)r+=String.fromCharCode(...n.subarray(t,t+8192));return btoa(r)};async function Uw(e,n){const r=om(e),t=[...new Set(ur.filter(l=>r.includes(l.id)).flatMap(l=>l.files.map(f=>f.file)))],a={},o={};for(const l of t)try{const f=await fetch(`${ws}/${l}`);if(!f.ok)continue;const u=await f.arrayBuffer();n?o[l]=`data:font/woff2;base64,${Hw(u)}`:a[`assets/fonts/${l}`]=new Uint8Array(u)}catch{}if(!n&&Object.keys(a).length)try{const l=await fetch(`${ws}/OFL.txt`);l.ok&&(a["assets/fonts/OFL.txt"]=await l.text())}catch{}const i=jc(l=>n?o[l]??"":`./fonts/${l}`,r);return{css:Object.keys(n?o:a).length?i:"",binaries:a}}function Gw(e,n){const r=e!=null&&e.id?n[e.id]:null;return r?` href="${r}" download="${H(e.name??"파일")}"`:""}function Vw(e,n,r,t){const a=e!=null&&e.id?t[e.id]:null;if(!a)return"";const o=`object-fit:${e.fit??"cover"}`;return`<img class="${n}" src="${a}" alt="${H(e.alt??"")}" loading="lazy" style="${o}${r?";"+r:""}" />`}async function Yw(e,n={}){var d,m,w,v,b,S,h;const r={single:!1,withEffects:!0,borders:!0,...n},t={},a=new Set,o={smooth:!!((d=e.site)!=null&&d.smoothScroll),cursor:!!((m=e.site)!=null&&m.cursor),clock:(e.pages??[]).some(c=>Object.entries(c.fills??{}).some(([p,g])=>{var y,k;return g==="footer"&&((k=(y=c.content)==null?void 0:y[p])==null?void 0:k.showTime)})),mode:(e.pages??[]).some(c=>Object.entries(c.fills??{}).some(([p,g])=>{var y,k;return["topheader","header","nav"].includes(g)&&((k=(y=c.content)==null?void 0:y[p])==null?void 0:k.modeToggle)})),hideNav:(e.pages??[]).some(c=>Object.entries(c.fills??{}).some(([p,g])=>{var y,k;return["topheader","header","nav"].includes(g)&&((k=(y=c.content)==null?void 0:y[p])==null?void 0:k.hideOnScroll)})),slider:(e.pages??[]).some(c=>Object.entries(c.fills??{}).some(([p,g])=>{var y,k;return g==="slider"&&(((k=(y=c.content)==null?void 0:y[p])==null?void 0:k.items)??[]).length>1}))};r.globalsOn=o.smooth||o.cursor||o.clock||o.mode||o.hideNav||o.slider,r.modeToggle=o.mode;const{srcMap:i,binaries:l}=await Bw(e,r.single),f=await Uw(e,r.single);r.fontCss=f.css;const u=(w=e.site)==null?void 0:w.customFont;if(u!=null&&u.id&&om(e).includes("custom")){const c=i[u.id];if(c){const p=c.startsWith("data:")?c:c.replace(/^\.\/assets\//,"./");f.css=`${wl(p,u.name)}
${f.css}`,r.fontCss=`${wl(c,u.name)}
${r.fontCss}`}}if(r.img=(c,p,g)=>Vw(c,p,g,i),r.imgSrc=c=>c!=null&&c.id?i[c.id]??null:null,r.file=c=>Gw(c,i),r.fileSrc=c=>c!=null&&c.id?i[c.id]??null:null,r.onePage=(((v=e.site)==null?void 0:v.navMode)??"anchor")==="anchor"&&e.pages.length>1,r.onePage){const c=e.pages.map((M,A)=>zd(M,A,e,r));c.forEach(M=>M.usesFx.forEach(A=>a.add(A)));let p="",g="top";const y=c[0].bodyHTML.match(/<!--WFHEAD:(top|side)-->([\s\S]*?)<!--\/WFHEAD-->/);if(y){g=y[1];const M=((b=c[0].bodyHTML.match(/^<div class="wf-page[^"]*" style="([^"]*)"/))==null?void 0:b[1])??"";p=`<div class="wf-page wf-headbar${g==="side"?" wf-headbar--side":""}" style="${M}">${y[2]}</div>
  `}const k=p+c.map((M,A)=>{const Q=A===0?M.bodyHTML.replace(/<!--WFHEAD:(?:top|side)-->[\s\S]*?<!--\/WFHEAD-->/,"").replace(/<!--\/?WFHEAD(?::top|:side)?-->/g,""):M.bodyHTML;return`<section class="wf-pg" id="pg-${A}">
  ${Q}
  </section>`}).join(`
  `);let _=c[0].html.replace(c[0].bodyHTML,k);const j=ra(e.theme).bg,C=(()=>{var A,Q;const M=/^(\d+(?:\.\d+)?)px/.exec(String(((Q=ht((A=e.pages[0])==null?void 0:A.wireframe))==null?void 0:Q.cols)??""));return M?Number(M[1]):240})(),R=((S=e.global)==null?void 0:S.marginX)??10;_=_.replace("</head>",`  <style>html{scroll-behavior:smooth}.wf-pg{display:block}html,body{background:${j}}.wf-headbar{position:sticky;top:0;z-index:60;min-height:0!important;padding-top:0!important;padding-bottom:0!important}.wf-headbar .wf__region{position:static!important;align-self:stretch!important;width:100%}.wf-headbar--side{position:fixed;top:10px;bottom:10px;left:${R}px;width:${C}px;padding:0!important;overflow:auto}.wf-headbar--side .wf__region{height:100%}.wf-pg{scroll-margin-top:70px}`+((h=e.site)!=null&&h.snapScroll?"html{scroll-snap-type:y proximity}.wf-pg{scroll-snap-align:start}":"")+`</style>
</head>`),_=_.replace("</body>",`  <script>(function(){var L=[].slice.call(document.querySelectorAll('.wf-headbar a[href^="#pg-"]'));if(!L.length)return;
  var S=[].slice.call(document.querySelectorAll('.wf-pg'));
  var set=function(i){L.forEach(function(a,k){a.classList.toggle('is-current',k===i);});};
  L.forEach(function(a,i){a.addEventListener('click',function(){set(i);});});
  if('IntersectionObserver'in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var i=S.indexOf(e.target);if(i>-1)set(i);}});},{rootMargin:'-45% 0px -50% 0px'});
  S.forEach(function(s){io.observe(s);});}
  })();<\/script>
</body>`),r.withEffects&&(a.size||r.globalsOn)&&!_.includes("assets/init.js")&&(_=_.replace("</body>",`  <script type="module" src="./assets/init.js"><\/script>
</body>`)),t["index.html"]=_}else e.pages.forEach((c,p)=>{const{file:g,html:y,usesFx:k}=zd(c,p,e,r);t[g]=y,k.forEach(_=>a.add(_))});r.single||(t["assets/site.css"]=`/* 레이아웃 + 파트 스타일. 편집기 전용 규칙은 걷어냈습니다. */
`+(f.css?`${f.css}

`:"")+Ns(Sc)+`

`+Ns(kc));const x=new Set;if(r.withEffects&&(a.size||r.globalsOn)){t["assets/init.js"]=Dw(a,o),x.add("_core"),a.forEach(c=>{const p=Pa[c]??Cs[c];p&&x.add(p)}),o.smooth&&x.add("smooth-scroll"),o.cursor&&x.add("cursor-dot");for(const[c,p]of Object.entries(Ld)){const g=c.match(/effects\/([^/]+)\/(.+)$/);!g||!x.has(g[1])||g[2].endsWith(".jsx")||(t[`effects/${g[1]}/${g[2]}`]=p)}if(!r.single&&t["assets/site.css"]){const c=[...x].filter(p=>p!=="_core").map(p=>Ld[`../../../effects/${p}/style.css`]).filter(Boolean).join(`

`);c&&(t["assets/site.css"]+=`

/* ── 효과 팩 스타일 ── */
${c}`)}}return Object.assign(t,l,f.binaries),t["README.md"]=qw(e,[...x],r),{files:t,usedFolders:[...x]}}function qw(e,n,r){const t=e.pages.map((a,o)=>`- \`${qs(a.name,o)}.html\` — ${a.name}`).join(`
`);return`# ${to(e.site,e.pages)}

Portfolio Maker로 만든 정적 사이트입니다. **빌드 도구가 필요 없습니다.**

## 열기

ES 모듈은 \`file://\`에서 브라우저가 차단합니다. 반드시 서버로 열어야 합니다.

\`\`\`bash
python -m http.server 5500
\`\`\`

→ <http://localhost:5500/index.html>

${r.withEffects?"":"3D 효과 없이 내보냈으므로 `index.html`을 더블클릭해도 열립니다.\n"}
## 페이지

${t}

## 구조

\`\`\`
${r.single?"index.html            스타일이 안에 들어 있습니다":`index.html 등        페이지마다 한 장
assets/site.css      레이아웃 · 테마 · 파트 스타일
${r.withEffects?`assets/init.js       3D 효과 마운트
effects/             효과 팩 (`+n.join(" · ")+")":""}`}
\`\`\`

## 고치는 법

- **글·구조** — HTML을 직접 고치세요. 의미 태그(\`header\`/\`nav\`/\`main\`/\`section\`/\`footer\`)로 나가 있습니다.
- **색·폰트** — 각 페이지 \`.wf-page\`의 인라인 CSS 변수(\`--wf-accent\` 등)를 바꾸면 전체에 적용됩니다.
- **3D 효과** — HTML의 \`data-fx\` / \`data-fx-*\` 속성이 곧 옵션입니다. 지우면 효과가 사라집니다.

## GitHub Pages 배포

리포지터리에 그대로 올리고 Settings → Pages에서 브랜치를 지정하면 됩니다.
경로 설정이 따로 필요 없습니다(상대 경로만 씁니다).
`}const Pd=new TextEncoder,Kw=(()=>{const e=new Uint32Array(256);for(let n=0;n<256;n++){let r=n;for(let t=0;t<8;t++)r=r&1?3988292384^r>>>1:r>>>1;e[n]=r>>>0}return e})();function Xw(e){let n=4294967295;for(let r=0;r<e.length;r++)n=Kw[(n^e[r])&255]^n>>>8;return(n^4294967295)>>>0}class Qw{constructor(){this.parts=[],this.length=0}push(n){this.parts.push(n),this.length+=n.length}u16(n){this.push(new Uint8Array([n&255,n>>>8&255]))}u32(n){this.push(new Uint8Array([n&255,n>>>8&255,n>>>16&255,n>>>24&255]))}}function Zw(e){const n=new Qw,r=[];for(const[a,o]of Object.entries(e)){const i=Pd.encode(a),l=typeof o=="string"?Pd.encode(o):o,f=Xw(l),u=n.length;n.u32(67324752),n.u16(20),n.u16(2048),n.u16(0),n.u16(0),n.u16(0),n.u32(f),n.u32(l.length),n.u32(l.length),n.u16(i.length),n.u16(0),n.push(i),n.push(l),r.push({name:i,crc:f,size:l.length,offset:u})}const t=n.length;for(const a of r)n.u32(33639248),n.u16(20),n.u16(20),n.u16(2048),n.u16(0),n.u16(0),n.u16(0),n.u32(a.crc),n.u32(a.size),n.u32(a.size),n.u16(a.name.length),n.u16(0),n.u16(0),n.u16(0),n.u16(0),n.u32(0),n.u32(a.offset),n.push(a.name);return n.u32(101010256),n.u16(0),n.u16(0),n.u16(r.length),n.u16(r.length),n.u32(n.length-t),n.u32(t),n.u16(0),new Blob(n.parts,{type:"application/zip"})}function Ad(e,n){const r=document.createElement("a");r.href=URL.createObjectURL(e),r.download=n,r.click(),setTimeout(()=>URL.revokeObjectURL(r.href),1e3)}const Dd=e=>e<1024?`${e}B`:e<1024*1024?`${(e/1024).toFixed(1)}KB`:`${(e/1048576).toFixed(2)}MB`,Jw=e=>((e==null?void 0:e.pages)??[]).some(n=>Object.values(n.fx??{}).some(r=>r==null?void 0:r.length)||Object.values(n.fills??{}).some(r=>r==="model"));function eb({doc:e,advanced:n=!1,onClose:r}){var y,k;const t=Jw(e),[a,o]=N.useState(t?"zip":"single"),[i,l]=N.useState(t),[f,u]=N.useState(!0),x=Math.max(0,e.pages.findIndex(_=>_.id===e.current)),d=`${qs((y=e.pages[x])==null?void 0:y.name,x)}.html`,[m,w]=N.useState(d),v=a==="single",[b,S]=N.useState(null);N.useEffect(()=>{let _=!0;return S(null),Yw(e,{single:v,withEffects:v?!1:i,borders:f}).then(j=>{_&&S(j)}),()=>{_=!1}},[e,v,i,f]);const h=b?Object.entries(b.files):[],c=h.reduce((_,[,j])=>_+(typeof j=="string"?new Blob([j]).size:j.length),0),p=(((k=e.pages[0])==null?void 0:k.name)||"portfolio").toLowerCase().replace(/\s+/g,"-"),g=()=>{if(b){if(v){const _=Object.entries(b.files).filter(([j])=>j.endsWith(".html"));_.forEach(([j,C],R)=>{setTimeout(()=>{const M=_.length===1?`${p}.html`:j;Ad(new Blob([C],{type:"text/html"}),M)},R*250)});return}Ad(Zw(b.files),`${p}.zip`)}};return N.useEffect(()=>{b&&!b.files[m]&&w("index.html")},[b,m]),s.jsx("div",{className:"pb-modal",onClick:_=>_.target===_.currentTarget&&r(),children:s.jsxs("div",{className:"pb-modal__box",children:[s.jsxs("div",{className:"pb-modal__head",children:[s.jsx("b",{children:"내보내기"}),s.jsxs("span",{className:"pb-hint",children:[h.length,"개 파일 · ",Dd(c)]}),s.jsxs("span",{className:"pb-modal__tools",children:[s.jsx("button",{className:"is-on",onClick:g,children:b?v?"HTML 내려받기":"ZIP 내려받기":"만드는 중…"}),s.jsx("button",{onClick:r,children:"닫기"})]})]}),s.jsxs("div",{className:"pb-exp",children:[s.jsxs("div",{className:"pb-exp__side",children:[s.jsxs("div",{className:"pb-exp__modes",children:[s.jsxs("button",{className:`pb-exp__mode ${v?"is-on":""}`,onClick:()=>o("single"),children:[s.jsx("b",{children:"단일 HTML"}),s.jsxs("span",{children:["파일 하나 · 더블클릭으로 열림",n?" · 3D 제외":""]})]}),s.jsxs("button",{className:`pb-exp__mode ${a==="zip"?"is-on":""}`,onClick:()=>o("zip"),children:[s.jsx("b",{children:"폴더 ZIP"}),s.jsx("span",{children:n?"3D 효과 포함 · 서버로 열기":"배포용 · 파일이 나뉘어 나옴"})]})]}),s.jsxs("label",{className:"pb-field pb-field--row",children:[s.jsx("span",{className:"pb-field__label",children:"영역 테두리 그리기"}),s.jsx("input",{type:"checkbox",checked:f,onChange:_=>u(_.target.checked)})]}),s.jsx("p",{className:"pb-note",children:"칸을 나누는 선입니다. 끄면 내용만 남아 더 깔끔하고, 켜면 편집 화면과 똑같이 나갑니다."}),!v&&n&&s.jsxs("label",{className:"pb-field pb-field--row",children:[s.jsx("span",{className:"pb-field__label",children:"3D 효과 포함"}),s.jsx("input",{type:"checkbox",checked:i,onChange:_=>l(_.target.checked)})]}),!v&&n&&i&&(b==null?void 0:b.usedFolders.length)>0&&s.jsxs("p",{className:"pb-note",children:["담기는 효과 폴더: ",s.jsx("b",{children:b.usedFolders.join(" · ")})]}),v&&s.jsxs("p",{className:"pb-note pb-note--dashed",children:["파일 하나에 스타일까지 전부 들어갑니다. 받아서 ",s.jsx("b",{children:"더블클릭하면 바로 열립니다."}),n&&" 단 3D 효과는 file://에서 차단되므로 빠집니다."]}),x!==0&&s.jsxs("p",{className:"pb-note",children:["방문자가 처음 보는 화면은 ",s.jsx("b",{children:e.pages[0].name}),"(",s.jsx("code",{children:"index.html"}),")입니다. 지금 편집 중인 ",s.jsx("b",{children:e.pages[x].name}),"은 메뉴에서 들어가는 페이지입니다."]}),s.jsx("div",{className:"pb-exp__files",children:h.map(([_,j])=>s.jsxs("button",{className:`pb-exp__file ${m===_?"is-on":""}`,onClick:()=>w(_),children:[s.jsxs("span",{children:[_,_===d&&s.jsx("b",{className:"pb-exp__here",children:" 편집 중"})]}),s.jsx("em",{children:Dd(typeof j=="string"?new Blob([j]).size:j.length)})]},_))}),s.jsx(ta,{id:"exportModalLeft",className:"pb-adslot--expside"})]}),s.jsxs("pre",{className:"pb-code pb-exp__preview",children:[!b&&s.jsx("span",{className:"pb-loadbar","aria-hidden":"true"}),b?typeof b.files[m??"index.html"]=="string"?b.files[m??"index.html"]:"(이미지 파일 — 미리보기 없음)":"만드는 중…"]}),s.jsx(ta,{id:"exportModal",className:"pb-exp__ad"})]})]})})}function nb(){const[e,n]=N.useState(null);return N.useEffect(()=>{let r=!0;return fetch("/stats.json",{cache:"no-store"}).then(t=>t.ok?t.json():null).then(t=>{r&&t&&(typeof t.daily=="number"||typeof t.total=="number")&&n(t)}).catch(()=>{}),()=>{r=!1}},[]),e?s.jsxs("span",{className:"pb-visits",title:"Google Analytics 기준 · 3시간마다 갱신",children:["오늘 접속자 ",s.jsx("b",{children:(e.daily??0).toLocaleString("ko-KR")}),s.jsx("i",{children:" · "}),"총 누적 ",s.jsx("b",{children:(e.total??0).toLocaleString("ko-KR")})]}):null}function rb({global:e,onStart:n,onSkip:r}){const[t,a]=N.useState(""),[o,i]=N.useState(""),l=f=>n({templateId:f,name:t.trim(),role:o.trim()});return s.jsx("div",{className:"pb-welcome",children:s.jsxs("div",{className:"pb-welcome__box",children:[s.jsxs("div",{className:"pb-welcome__head",children:[s.jsxs("h1",{children:[s.jsx("span",{className:"pb-welcome__mark","aria-hidden":"true"}),"포트폴리오 사이트 만들기"]}),s.jsx("p",{children:"이름을 넣고 마음에 드는 틀을 고르세요. 구조와 색은 나중에 언제든 바꿉니다."})]}),s.jsxs("div",{className:"pb-welcome__who",children:[s.jsxs("label",{className:"pb-field",children:[s.jsx("span",{className:"pb-field__label",children:"이름"}),s.jsx("input",{autoFocus:!0,type:"text",value:t,placeholder:"홍길동",onChange:f=>a(f.target.value)})]}),s.jsxs("label",{className:"pb-field",children:[s.jsx("span",{className:"pb-field__label",children:"한 줄 소개 · 직함"}),s.jsx("input",{type:"text",value:o,placeholder:"프론트엔드 개발자",onChange:f=>i(f.target.value)})]})]}),s.jsxs("div",{className:"pb-welcome__label",children:["틀 고르기 ",s.jsxs("span",{children:[Vt.length,"가지"]})]}),s.jsx("div",{className:"pb-welcome__grid",children:Vt.map(f=>s.jsxs("button",{className:"pb-welcome__tpl",onClick:()=>l(f.id),title:f.desc,children:[s.jsx("span",{className:"pb-welcome__preview",children:s.jsx(Es,{page:{wireframe:f.id,fills:f.fills,extra:[]},global:e,mini:!0})}),s.jsx("b",{children:f.label}),s.jsx("span",{className:"pb-welcome__tagline",children:f.tagline})]},f.id))}),s.jsxs("div",{className:"pb-welcome__foot",children:[s.jsx("button",{className:"pb-welcome__skip",onClick:r,children:"빈 페이지로 시작하기"}),s.jsxs("span",{className:"pb-hint",children:["틀은 왼쪽 ",s.jsx("b",{children:"① 틀"})," 단계에서 언제든 다시 고를 수 있습니다."]}),s.jsx("a",{className:"pb-welcome__guide",href:"./guide/how-to.html",target:"_blank",rel:"noopener noreferrer",children:"처음이신가요? 단계별 사용 가이드 ↗"}),s.jsx("button",{className:"pb-welcome__go",onClick:()=>l(Vt[0].id),children:"기본으로 시작하기"}),s.jsxs("span",{className:"pb-welcome__legal",children:[s.jsx("a",{href:"./about.html",target:"_blank",rel:"noopener noreferrer",children:"소개"})," · ",s.jsx("a",{href:"./privacy.html",target:"_blank",rel:"noopener noreferrer",children:"개인정보처리방침"})," · ",s.jsx("a",{href:"./terms.html",target:"_blank",rel:"noopener noreferrer",children:"이용약관"})," · ",s.jsx("a",{href:"./contact.html",target:"_blank",rel:"noopener noreferrer",children:"문의"})]})]})]})})}const Od=[{id:"01-studio-nocturne",name:"스튜디오 녹턴",kind:"사진 · 디자인 스튜디오",tags:"미드나잇 · 비대칭 밴드 · 3D 카메라",color:"#0b0b12",proj:"studio-nocturne.pbproj",size:4.3},{id:"02-atelier-mono",name:"아틀리에 모노",kind:"그래픽 · 편집 디자인",tags:"크림 · 여러 페이지 · 3D 의자",color:"#fffbeb",proj:"atelier-mono.pbproj",size:3.7},{id:"03-halcyon-lab",name:"핼시온 랩",kind:"인터랙티브 · 제너러티브",tags:"모카 · 히어로+4분할 · 3D 현미경",color:"#f5efe8",proj:"halcyon-lab.pbproj",size:4.4},{id:"04-hwalja-bam",name:"활자밤",kind:"독립출판 · 활판인쇄",tags:"한 페이지 · 섹션 메뉴 · 3D 영사기",color:"#170609",proj:"hwalja-bam.pbproj",size:4.9},{id:"05-tide-and-timber",name:"타이드 앤 팀버",kind:"필드 레코딩 · 사운드 디자인",tags:"슬레이트 · 빈 뼈대에서 벤토 · 3D 공중전화",color:"#0f172a",proj:"tide-and-timber.pbproj",size:5.3},{id:"06-fern-and-form",name:"펀 앤 폼",kind:"도예 · 식물 스튜디오",tags:"세이지 · 매거진 3단 · 3D 고사리",color:"#f2f6ec",proj:"fern-and-form.pbproj",size:3.9},{id:"07-plum-and-pitch",name:"플럼 앤 피치",kind:"조향 스튜디오",tags:"아틱 · 여러 페이지 · 3D 황동 화병",color:"#f0f6ff",proj:"plum-and-pitch.pbproj",size:4.3},{id:"08-millisecond-works",name:"밀리세컨드 웍스",kind:"웹 · 앱 개발 스튜디오",tags:"카본 · Geist · 지표 중심 사례 · 3D 노트북",color:"#0a0a0a",proj:"millisecond-works.pbproj",size:3.6},{id:"09-first-commit",name:"퍼스트 커밋",kind:"신입 프론트엔드 개발자",tags:"오션 · 3단 분할 · 막혔던 지점까지 기록",color:"#051220",proj:"first-commit.pbproj",size:4.3},{id:"10-quiet-server",name:"콰이엇 서버",kind:"신입 백엔드 · 안드로이드",tags:"포레스트 · 레이어 히어로 · 장애를 일부러 낸 기록",color:"#071108",proj:"quiet-server.pbproj",size:3.2}],ch="https://portfoliomaker-samples.github.io",tb=[{id:"01-studio-nocturne",name:"스튜디오 녹턴",kind:"사진 · 디자인 스튜디오",tags:"미드나잇 · 비대칭 밴드 · 3D 카메라",color:"#0f1216",proj:"studio-nocturne.pbproj",size:6.8},{id:"02-atelier-mono",name:"아틀리에 모노",kind:"그래픽 · 편집 디자인",tags:"크림 · 여러 페이지 · 3D 의자",color:"#f4efe4",proj:"atelier-mono.pbproj",size:5.6},{id:"03-halcyon-lab",name:"핼시온 랩",kind:"인터랙티브 · 제너러티브",tags:"모카 · 히어로+4분할 · 3D 현미경",color:"#2b211b",proj:"halcyon-lab.pbproj",size:6.8},{id:"04-hwalja-bam",name:"활자밤",kind:"독립출판 · 활판인쇄",tags:"한 페이지 · 섹션 메뉴 · 3D 영사기",color:"#1a1714",proj:"hwalja-bam.pbproj",size:7.8}],fh=Od.length?Od:tb,Yo=4,ab=()=>Math.max(1,Math.ceil(fh.length/Yo)),ob=e=>fh.slice(e*Yo,e*Yo+Yo),sb="https://github.com/PORTFOLIOMAKER-SAMPLES",Fd=e=>`${ch}/${e.id}/`,ib=e=>`${ch}/${e.id}/${e.proj}`,lb=e=>{const n=parseInt(String(e).replace("#",""),16);if(Number.isNaN(n))return!1;const[r,t,a]=[n>>16&255,n>>8&255,n&255];return(.2126*r+.7152*t+.0722*a)/255>.6};function cb({onStart:e,onOpenSample:n,busy:r}){const[t,a]=N.useState(null),[o,i]=N.useState(!1),l=N.useRef(0),f=()=>{clearTimeout(l.current),l.current=setTimeout(()=>i(!0),500)},u=c=>{clearTimeout(l.current),a(c),i(!1)},x=c=>{clearTimeout(l.current),a(p=>p===c?null:p),i(!1)},[d,m]=N.useState(!1),[w,v]=N.useState(0),b=ab(),S=ob(w),h=c=>{clearTimeout(l.current),a(null),i(!1),v(p=>(c+b)%b)};return s.jsx("div",{className:"pb-welcome pb-samples",role:"dialog","aria-modal":"true","aria-label":"예시 사이트",children:s.jsxs("div",{className:"pb-welcome__box pb-samples__box",children:[s.jsxs("div",{className:"pb-samples__head",children:[s.jsxs("h1",{children:[s.jsx("span",{className:"pb-samples__mark","aria-hidden":"true"}),"Portfolio ",s.jsx("i",{children:"Maker"})]}),s.jsxs("p",{children:["코딩 없이 만드는 포트폴리오. ",s.jsx("b",{children:"파일로 받아서 내 마음대로."})]}),s.jsxs("ul",{className:"pb-samples__pts",children:[s.jsx("li",{children:"가입 없음"}),s.jsx("li",{children:"결과물에 광고 없음"}),s.jsx("li",{children:"작업물은 내 브라우저에"})]})]}),s.jsxs("div",{className:"pb-samples__label",children:["이런 사이트가 나옵니다",s.jsx("a",{className:"pb-samples__more",href:sb,target:"_blank",rel:"noopener noreferrer",children:"예시 더 보기 ↗"})]}),s.jsxs("div",{className:"pb-samples__grid",children:[S.map(c=>s.jsxs("div",{className:"pb-samples__card",onMouseEnter:()=>u(c.id),onMouseLeave:()=>x(c.id),children:[s.jsxs("div",{className:`pb-samples__shot ${lb(c.color)?"is-light":""}`,style:{background:c.color},children:[s.jsx("span",{className:`pb-samples__ph ${t===c.id&&o?"is-gone":""}`,children:c.name}),t===c.id&&s.jsx("iframe",{className:"pb-samples__frame",src:Fd(c),title:`${c.name} 미리보기`,loading:"lazy",tabIndex:-1,sandbox:"allow-scripts allow-same-origin",onLoad:f})]}),s.jsxs("b",{className:"pb-samples__name",children:[c.name,s.jsx("span",{className:"pb-samples__kind",children:c.kind})]}),s.jsx("span",{className:"pb-samples__tags",children:c.tags}),s.jsxs("div",{className:"pb-samples__acts",children:[s.jsx("a",{className:"pb-samples__open",href:Fd(c),target:"_blank",rel:"noopener noreferrer",children:"사이트 보기 ↗"}),s.jsx("button",{className:"pb-samples__use",disabled:!!r,onClick:()=>n(c),children:r===c.id?"여는 중…":c.size?`이걸로 시작 (${c.size}MB)`:"이걸로 시작"})]})]},`${w}-${c.id}`)),Array.from({length:Math.max(0,4-S.length)},(c,p)=>s.jsx("div",{className:"pb-samples__gap","aria-hidden":"true"},`gap-${p}`))]}),s.jsxs("div",{className:"pb-samples__foot",children:[b>1&&s.jsxs("div",{className:"pb-samples__pager",children:[s.jsx("button",{type:"button",onClick:()=>h(w-1),"aria-label":"이전 예시",children:"‹"}),s.jsxs("span",{children:[w+1," / ",b]}),s.jsx("button",{type:"button",onClick:()=>h(w+1),"aria-label":"다음 예시",children:"›"})]}),s.jsxs("label",{className:"pb-samples__skip",children:[s.jsx("input",{type:"checkbox",checked:d,onChange:c=>m(c.target.checked)}),"다시 보지 않기"]}),s.jsx("button",{className:"pb-samples__go",disabled:!!r,onClick:()=>e(d),children:"빈 화면에서 바로 시작하기 →"})]})]})})}const dh="portfolio-builder/project",fb=1;async function db(e,n=""){const r={};for(const t of Rc(e)){const a=await mm(t);a&&(r[t]=a)}return JSON.stringify({format:dh,version:fb,name:n,savedAt:new Date().toISOString(),doc:e,assets:r})}async function uh(e){var r,t;let n;try{n=JSON.parse(e)}catch{throw new Error("이 파일은 프로젝트 파일이 아닙니다.")}if((n==null?void 0:n.format)!==dh||!((t=(r=n==null?void 0:n.doc)==null?void 0:r.pages)!=null&&t.length))throw new Error("이 파일은 이 빌더가 만든 프로젝트 파일이 아닙니다.");for(const[a,o]of Object.entries(n.assets??{}))if(/^(data:|blob:)/i.test(String(o)))try{const i=await(await fetch(o)).blob();await $c(a,i)}catch{}return n.doc}function ub(e,n){const r=(n||"portfolio").trim().replace(/[\\/:*?"<>|]+/g,"-").slice(0,40)||"portfolio",t=document.createElement("a");t.href=URL.createObjectURL(new Blob([e],{type:"application/json"})),t.download=`${r}.pbproj`,t.click(),setTimeout(()=>URL.revokeObjectURL(t.href),1e3)}const ph=(e,n)=>w0(`${Ja}${e}`,{name:e,savedAt:new Date().toISOString(),doc:n}),pb=async e=>{var n;return((n=await um(`${Ja}${e}`))==null?void 0:n.doc)??null},mh=e=>b0(`${Ja}${e}`);async function hh(){var r,t;const e=await _0()??[],n=[];for(const a of e){if(typeof a!="string"||!a.startsWith(Ja))continue;const o=await um(a);n.push({name:a.slice(Ja.length),savedAt:(o==null?void 0:o.savedAt)??"",pages:((t=(r=o==null?void 0:o.doc)==null?void 0:r.pages)==null?void 0:t.length)??0})}return n.sort((a,o)=>String(o.savedAt).localeCompare(String(a.savedAt)))}const Ic="snap:";async function mb(){return(await hh()).filter(e=>!e.name.startsWith(Ic))}async function hb(e,n=8){await ph(`${Ic}${Date.now()}`,e);const r=await xh();for(const t of r.slice(n))await mh(t.name)}async function xh(){return(await hh()).filter(e=>e.name.startsWith(Ic))}function xb({doc:e,onLoad:n,onClose:r}){const t=to(e.site,e.pages),[a,o]=N.useState(t),[i,l]=N.useState([]),[f,u]=N.useState([]),[x,d]=N.useState(""),[m,w]=N.useState(""),[v,b]=N.useState(""),S=5,[h,c]=N.useState(0),p=Math.max(1,Math.ceil(f.length/S)),g=Math.min(h,p-1),y=f.slice(g*S,(g+1)*S),k=()=>{mb().then(l),xh().then(u)};N.useEffect(()=>{k()},[]);const _=B=>{w(B),b("")},j=B=>{b((B==null?void 0:B.message)??"실패했습니다."),w("")},C=async()=>{const B=a.trim();if(!B)return j(new Error("이름을 적어 주세요."));d("slot");try{await ph(B,e),await k(),_(`'${B}'으로 저장했습니다.`)}catch(V){j(V)}finally{d("")}},R=async()=>{d("file");try{ub(await db(e,a.trim()),a.trim()||t),_("파일로 내려받았습니다. 사진까지 함께 담겨 있습니다.")}catch(B){j(B)}finally{d("")}},M=()=>at({title:"지금 작업을 덮어씁니다",body:"불러온 내용으로 바뀝니다. 되돌리기로 다시 살릴 수 있습니다.",ok:"불러오기"}),A=async B=>{if(await M()){d("load");try{const V=await pb(B);if(!V)throw new Error("저장본을 찾을 수 없습니다.");n(V),r()}catch(V){j(V)}finally{d("")}}},Q=async B=>{if(B&&await M()){d("load");try{n(await uh(await B.text())),r()}catch(V){j(V)}finally{d("")}}};return s.jsx("div",{className:"pb-modal",onClick:B=>B.target===B.currentTarget&&r(),children:s.jsxs("div",{className:"pb-modal__box pb-proj",children:[s.jsxs("div",{className:"pb-modal__head",children:[s.jsx("b",{children:"저장 · 불러오기"}),s.jsx("span",{className:"pb-hint",children:"이 컴퓨터에 여러 개 · 파일로 한 덩어리"}),s.jsx("span",{className:"pb-modal__tools",children:s.jsx("button",{onClick:r,children:"닫기"})})]}),s.jsxs("div",{className:"pb-proj__body",children:[s.jsxs("label",{className:"pb-field",children:[s.jsx("span",{className:"pb-field__label",children:"저장 이름"}),s.jsx("input",{type:"text",value:a,onChange:B=>o(B.target.value),placeholder:t})]}),s.jsxs("div",{className:"pb-proj__row",children:[s.jsx("button",{onClick:C,disabled:!!x,children:x==="slot"?"저장 중…":"이 컴퓨터에 저장"}),s.jsx("button",{onClick:R,disabled:!!x,children:x==="file"?"만드는 중…":"파일로 저장 (.pbproj)"}),s.jsxs("label",{className:"pb-proj__open",children:[x==="load"?"불러오는 중…":"파일에서 불러오기",s.jsx("input",{type:"file",accept:".pbproj,application/json",hidden:!0,onChange:B=>{var V;Q((V=B.target.files)==null?void 0:V[0]),B.target.value=""}})]})]}),m&&s.jsx("p",{className:"pb-note",children:m}),v&&s.jsx("p",{className:"pb-note pb-note--warn",children:v}),s.jsxs("div",{className:"pb-panel__title",children:["이 컴퓨터에 저장된 것",s.jsxs("span",{className:"pb-hint",children:[i.length,"개"]})]}),i.length===0?s.jsx("p",{className:"pb-note pb-note--dashed",children:"아직 없습니다. 위에서 이름을 적고 저장해 보세요."}):s.jsx("div",{className:"pb-slots",children:i.map(B=>s.jsxs("div",{className:"pb-slot",children:[s.jsxs("span",{className:"pb-slot__meta",children:[s.jsx("b",{children:B.name}),s.jsxs("span",{children:[B.pages,"장 · ",B.savedAt?B.savedAt.slice(0,16).replace("T"," "):""]})]}),s.jsx("button",{onClick:()=>A(B.name),disabled:!!x,children:"불러오기"}),s.jsx("button",{className:"pb-danger",disabled:!!x,onClick:async()=>{await at({title:`'${B.name}' 저장본을 지울까요?`,ok:"지우기",danger:!0})&&(await mh(B.name),k())},children:"✕"})]},B.name))}),s.jsxs("p",{className:"pb-note",children:[s.jsx("b",{children:"이 컴퓨터에 저장"}),"은 빠르지만 이 브라우저에만 남습니다. 다른 PC에서 이어서 하려면 ",s.jsx("b",{children:"파일로 저장"}),"을 쓰세요 — 사진까지 함께 담깁니다."]}),s.jsxs("div",{className:"pb-panel__title",children:["자동 스냅샷",s.jsxs("span",{className:"pb-hint",children:["20번 고칠 때마다 · 최근 ",f.length,"개"]})]}),f.length===0?s.jsx("p",{className:"pb-note pb-note--dashed",children:"아직 없습니다. 작업을 이어가면 자동으로 쌓입니다 — 실수해도 여기서 돌아올 수 있습니다."}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"pb-slots",children:y.map(B=>s.jsxs("div",{className:"pb-slot",children:[s.jsxs("span",{className:"pb-slot__meta",children:[s.jsx("b",{children:B.savedAt?B.savedAt.slice(5,16).replace("T"," "):"스냅샷"}),s.jsxs("span",{children:[B.pages,"장 · 자동 저장본"]})]}),s.jsx("button",{onClick:()=>A(B.name),disabled:!!x,children:"이 시점으로"})]},B.name))}),p>1&&s.jsxs("div",{className:"pb-pager",children:[s.jsx("button",{disabled:g===0,onClick:()=>c(g-1),"aria-label":"이전 스냅샷",children:"←"}),s.jsxs("span",{className:"pb-pager__num",children:[g+1," / ",p]}),s.jsx("button",{disabled:g===p-1,onClick:()=>c(g+1),"aria-label":"다음 스냅샷",children:"→"})]})]}),s.jsx(ta,{id:"saveModal",className:"pb-adslot--save"})]})]})})}const gb={desktop:"M3 5h18v11H3zM8 20h8M12 16v4",tablet:"M6 3h12v18H6zM11 18h2",mobile:"M8 2h8v20H8zM11 19h2",sun:"M12 5V3M12 21v-2M5 12H3M21 12h-2M6.3 6.3 4.9 4.9M19.1 19.1l-1.4-1.4M17.7 6.3l1.4-1.4M4.9 19.1l1.4-1.4",moon:"M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z",sparkle:"M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM18.5 15.5l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z",wand:"M15 4l5 5L9 20H4v-5zM13 6l5 5",undo:"M9 7 4 12l5 5M4 12h10a6 6 0 0 1 0 12h-3",redo:"M15 7l5 5-5 5M20 12H10a6 6 0 0 0 0 12h3",eye:"M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",pencil:"M4 20h4L20 8l-4-4L4 16zM14 6l4 4",save:"M5 3h11l3 3v15H5zM8 3v6h8V3M8 14h8v7H8z",download:"M12 3v12M7 11l5 5 5-5M4 20h16",trash:"M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 11v6M14 11v6",panelLeft:"M3 4h18v16H3zM9 4v16",panelRight:"M3 4h18v16H3zM15 4v16"};function Mn({name:e,size:n=15}){const r=gb[e];return r?s.jsx("svg",{className:"pb-icon",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:s.jsx("path",{d:r})}):null}function vb(e,n){if(n===0)return"home";const r=String(e??"").trim().toLowerCase();return/work|project|작업|프로젝트|포트폴리오/.test(r)?"work":/about|소개|프로필|이력/.test(r)?"about":/contact|연락|문의/.test(r)?"contact":null}const yb={work:{parts:{b:"gallery",c:"section",d:"footer"},content:e=>({b:{title:"Work",columns:3,ratio:.72},c:{title:"쓰는 도구",body:"",listStyle:"tags",items:[{label:"HTML · CSS",note:""},{label:"JavaScript",note:""},{label:"Figma",note:""}]},d:ji(e)})},about:{parts:{b:"section",c:"section",d:"footer"},content:e=>({b:{title:"About",body:e.name?`${e.name}입니다.
${e.role||"무엇을 어떻게 만드는 사람인지"} 두어 문장으로 적어 주세요.`:"어떤 사람인지 두어 문장으로 적어 주세요."},c:{title:"Career",body:"",listStyle:"timeline",items:[{label:"○○ 인턴 · 프론트엔드",note:"2026"},{label:"○○ 대학교 · 시각디자인",note:"2022 — 2026"}]},d:ji(e)})},contact:{parts:{b:"contact",c:"links",d:"footer"},content:e=>({b:{title:"Contact",body:`함께 만들고 싶은 것이 있다면 메일로 연락 주세요.
보통 하루 안에 답장합니다.`,align:"center"},c:{title:"Links",style:"buttons",align:"center",items:[{label:"GitHub",url:"github.com/"},{label:"Instagram",url:"instagram.com/"},{label:"Email",url:e.email||""}]},d:ji(e)})}},ji=e=>({text:e.name?`© ${new Date().getFullYear()} ${e.name}`:`© ${new Date().getFullYear()}`});function wb(e,n,r={}){const t=yb[e];if(!t)return null;const a=n!=null&&n.partId&&n.partId!=="aside"?n.partId:"topheader",o=(n==null?void 0:n.partId)===a?{...n.content??{}}:{...Ft(a),...r.name?{logo:r.name}:{}},i={a,...t.parts},l=t.content(r),f={};for(const[u,x]of Object.entries(i))f[u]=u==="a"?o:{...Ft(x),...l[u]??{}};return{wireframe:"stack",fills:i,content:f,fx:{},extra:[],overrides:{}}}function bb(e,n){for(const[r,t]of Object.entries(e??{}))if(["topheader","header","nav","aside"].includes(t))return{partId:t,content:n==null?void 0:n[r]};return null}function _b({open:e,actions:n,onClose:r}){const[t,a]=N.useState(""),[o,i]=N.useState(0),l=N.useRef(null),f=N.useRef(null),u=N.useMemo(()=>{const m=t.trim().toLowerCase();return(m?n.filter(v=>`${v.group} ${v.label}`.toLowerCase().includes(m)):n).slice(0,40)},[t,n]);if(N.useEffect(()=>{e&&(a(""),i(0),setTimeout(()=>{var m;return(m=l.current)==null?void 0:m.focus()},0))},[e]),N.useEffect(()=>{i(0)},[t]),N.useEffect(()=>{var m,w;(w=(m=f.current)==null?void 0:m.querySelector(".is-cursor"))==null||w.scrollIntoView({block:"nearest"})},[o,u]),!e)return null;const x=m=>{r(),m.run()},d=m=>{m.key==="Escape"&&(m.stopPropagation(),r()),m.key==="ArrowDown"&&(m.preventDefault(),i(w=>Math.min(w+1,u.length-1))),m.key==="ArrowUp"&&(m.preventDefault(),i(w=>Math.max(w-1,0))),m.key==="Enter"&&u[o]&&(m.preventDefault(),x(u[o]))};return s.jsx("div",{className:"pb-modal pb-palette",onClick:m=>m.target===m.currentTarget&&r(),children:s.jsxs("div",{className:"pb-palette__box",role:"dialog","aria-modal":"true","aria-label":"명령 팔레트",children:[s.jsx("input",{ref:l,className:"pb-palette__input",placeholder:"무엇을 할까요? — 페이지 · 테마 · 글꼴 · 도구 검색",value:t,onChange:m=>a(m.target.value),onKeyDown:d}),s.jsxs("div",{className:"pb-palette__list",ref:f,role:"listbox",children:[u.length===0&&s.jsx("p",{className:"pb-note pb-note--dashed",children:"결과가 없습니다."}),u.map((m,w)=>s.jsxs("button",{className:`pb-palette__item ${w===o?"is-cursor":""}`,onMouseEnter:()=>i(w),onClick:()=>x(m),children:[s.jsx("span",{className:"pb-palette__group",children:m.group}),s.jsx("span",{className:"pb-palette__label",children:m.label}),m.hint&&s.jsx("em",{children:m.hint})]},`${m.group}-${m.label}`))]}),s.jsx("div",{className:"pb-palette__foot",children:s.jsx("span",{children:"↑↓ 이동 · Enter 실행 · Esc 닫기"})})]})})}function kb({open:e,onClose:n}){if(!e)return null;const r=[["Ctrl + K","명령 팔레트 — 페이지·테마·글꼴·도구 검색 실행"],["Ctrl + Z","되돌리기"],["Ctrl + Shift + Z","다시 실행"],["Shift + 영역 클릭","그 영역의 등장 효과 켜기 / 끄기"],["영역 우클릭","빠른 메뉴 (파트 비우기 · 등장 효과)"],["?","이 도움말"],["Esc","창 닫기"]];return s.jsx("div",{className:"pb-modal pb-help",onClick:t=>t.target===t.currentTarget&&n(),children:s.jsxs("div",{className:"pb-confirm__box",role:"dialog","aria-modal":"true","aria-label":"단축키 도움말",children:[s.jsx("b",{className:"pb-confirm__title",children:"단축키"}),s.jsx("table",{className:"pb-help__table",children:s.jsx("tbody",{children:r.map(([t,a])=>s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("span",{className:"kbd",children:t})}),s.jsx("td",{children:a})]},t))})}),s.jsx("div",{className:"pb-confirm__row",children:s.jsx("button",{className:"pb-confirm__ok",onClick:n,children:"닫기"})})]})})}let Sb=0;const jb=()=>`p${(++Sb).toString(36)}${Math.floor(performance.now()%1296).toString(36)}`;function ka(e,n=H0){return{id:jb(),name:e,wireframe:n,fills:{},extra:[],overrides:{}}}function Eb(){return[ka("Home","stack"),ka("Work","magazine"),ka("About","sidebar-left"),ka("Contact","stack")]}const Cb=(e,n)=>e.find(r=>r.id===n)??e[0];function Sa(e,n,r){return e.map(t=>t.id===n?{...t,...r}:t)}function Nb(e,n,r){return Sa(e,n,{name:r.trim()||"이름 없음"})}function $b(e,n){return e.length<=1?e:e.filter(r=>r.id!==n)}function Lb(e,n,r){const t=e.findIndex(l=>l.id===n),a=t+r;if(t<0||a<0||a>=e.length)return e;const o=[...e],[i]=o.splice(t,1);return o.splice(a,0,i),o}const va="pb:welcome",Ei="pb:samples-seen",Id="pb:footad-hidden",Bd=(e,n)=>{const r=new Set(Rm(n));return r.size?e.filter(t=>!r.has(t.name)):e},Nl=()=>{const e=Eb();return{pages:e,current:e[0].id,theme:Hv,typeset:tm,global:{...$m},site:{...xt}}};function Rb(){const[e,n]=N.useState(null);return N.useEffect(()=>{let r=!0;return g0().then(t=>{var o,i;if(!r)return;const a=(o=t==null?void 0:t.pages)!=null&&o.length?{...Nl(),...t,global:{...$m,...t.global??{}}}:Nl();a.site={...xt,...a.site??{},background:{...xt.background,...((i=a.site)==null?void 0:i.background)??{}}};for(const l of a.pages)for(const[f,u]of Object.entries(l.fx??{})){if(!Array.isArray(u)||u.length<2)continue;const x=[];for(const d of u){const m=new Set(Rm(d.name));x.some(w=>m.has(w.name))||x.push(d)}x.length!==u.length&&(l.fx[f]=x)}n(a),L0(a)}),()=>{r=!1}},[]),e?s.jsx(Mb,{initial:e}):s.jsx("div",{className:"pb-boot",children:"불러오는 중…"})}const Ci=720;function Mb({initial:e}){var Wc,Hc,Uc,Gc,Vc,Yc,qc,Kc,Xc;const[n,r]=N.useState(e),[t,a]=N.useState("saved"),[o,i]=N.useState(null),[l,f]=N.useState(()=>window.innerWidth<Ci?"mobile":"desktop"),[u,x]=N.useState(!1),[d,m]=N.useState(!0),[w,v]=N.useState(!1),[b,S]=N.useState(!1),[h,c]=N.useState(()=>localStorage.getItem(va)==="1"),[p,g]=N.useState(()=>localStorage.getItem(Ei)==="1"),[y,k]=N.useState(""),[_,j]=N.useState(!1),[C,R]=N.useState(()=>localStorage.getItem("pb:advanced")!=="0"),[M,A]=N.useState(()=>localStorage.getItem(Id)==="1");N.useEffect(()=>{document.querySelectorAll(".pb-iconbtn[data-tip]").forEach(E=>{E.setAttribute("aria-label",E.dataset.tip.split(" — ")[0])})}),N.useEffect(()=>{localStorage.setItem("pb:advanced",C?"1":"0")},[C]);const Q=async()=>{const E=((n==null?void 0:n.pages)??[]).reduce((D,q)=>D+Object.values(q.fx??{}).reduce((ae,se)=>ae+((se==null?void 0:se.length)??0),0),0);await at({title:"부가 기능을 끌까요?",body:["3D 효과 · Character · 3D Model이 편집 화면에서 숨겨집니다.",E?`이미 걸어 둔 효과 ${E}개는 그대로 돌지만, 설정을 바꾸거나 지우려면 다시 켜야 합니다.`:"효과를 건 뒤 설정을 바꾸거나 지우려면 다시 켜야 합니다."].join(`
`),ok:"끄기",cancel:"그대로 두기",danger:!0})&&R(!1)},B=d,V=1240,[ye,we]=N.useState(()=>window.innerWidth<V),[P,W]=N.useState(()=>window.innerWidth<Ci),[Y,ue]=N.useState(!1),[K,Ae]=N.useState(()=>window.innerWidth>=V),[$e,J]=N.useState(()=>window.innerWidth>=V),re=E=>{Ae(E),E&&P&&J(!1)},Le=E=>{J(E),E&&P&&Ae(!1)};N.useEffect(()=>{let E=window.innerWidth<V;const $=()=>{const D=window.innerWidth<V;we(D),W(window.innerWidth<Ci),D!==E&&(Ae(!D),J(!D),E=D)};return window.addEventListener("resize",$),()=>window.removeEventListener("resize",$)},[]);const[Te,Z]=N.useState(()=>localStorage.getItem("pb:ui")??"light");N.useEffect(()=>{document.documentElement.dataset.ui=Te,localStorage.setItem("pb:ui",Te)},[Te]);const ce=N.useRef(0);N.useEffect(()=>{n&&(ce.current+=1,ce.current>=20&&(ce.current=0,hb(n).catch(()=>{})))},[n]);const[Se,I]=N.useState(!1),[U,pe]=N.useState(!1);N.useEffect(()=>{const E=$=>{var ae;if(($.ctrlKey||$.metaKey)&&$.key.toLowerCase()==="k"){$.preventDefault(),I(se=>!se);return}const D=$.target,q=(ae=D==null?void 0:D.closest)==null?void 0:ae.call(D,'input, textarea, select, [contenteditable="true"]');$.key==="?"&&!q&&($.preventDefault(),pe(se=>!se))};return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[]);const fe=N.useRef([]),de=N.useRef([]),te=N.useCallback(E=>{r($=>{const D=E($);return D===$?$:(fe.current.push($),fe.current.length>60&&fe.current.shift(),de.current=[],D)})},[]),Ce=N.useCallback(()=>{r(E=>{const $=fe.current.pop();return $?(de.current.push(E),$):E})},[]),L=N.useCallback(()=>{r(E=>{const $=de.current.pop();return $?(fe.current.push(E),$):E})},[]);N.useEffect(()=>{if(!n)return;a("saving");const E=setTimeout(()=>{dm(n).then($=>a($?"saved":"failed"))},400);return()=>clearTimeout(E)},[n]),N.useEffect(()=>{const E=$=>{const D=/INPUT|TEXTAREA|SELECT/.test($.target.tagName),q=$.ctrlKey||$.metaKey,ae=$.key.toLowerCase();q&&ae==="z"&&!D&&($.preventDefault(),$.shiftKey?L():Ce()),q&&ae==="y"&&!D&&($.preventDefault(),L()),$.key==="Escape"&&i(null)};return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[Ce,L]),N.useEffect(()=>{ye&&o&&Le(!0)},[ye,o]);const z=Cb(n.pages,n.current),ee=E=>te($=>({...$,pages:Sa($.pages,$.current,E)})),T=(E,$,D,q)=>{var ae,se;return!((ae=Kn[$])!=null&&ae.nav)||((se=E.site)==null?void 0:se.navSync)===!1?E:{...E,pages:E.pages.map(le=>{if(le.id===E.current)return le;const oe=Object.keys(le.fills??{}).filter(ke=>le.fills[ke]===$);if(!oe.length)return le;const ve={...le[D]??{}};for(const ke of oe)ve[ke]=q(ve[ke]??{});return{...le,[D]:ve}})}},F=N.useCallback(E=>{r($=>$.current===E?$:{...$,current:E}),i(null)},[]),ie=()=>te(E=>{const $=ka(`Page ${E.pages.length+1}`);return{...E,pages:[...E.pages,$],current:$.id}}),he=E=>{te($=>{const D=$b($.pages,E);return{...$,pages:D,current:$.current===E?D[0].id:$.current}}),i(null)},[me,ge]=N.useState(!0),be=E=>{me?te($=>({...$,pages:$.pages.map(D=>({...D,wireframe:E,fills:ud(D.fills??{},E,D.extra??[])}))})):ee({wireframe:E,fills:ud(z.fills??{},E,z.extra??[])}),i(null)},ne=({templateId:E,name:$,role:D})=>{var se;const q=E?cd(E):null,ae=le=>{const oe=$||"",ve=D||"";if(!oe&&!ve)return{};switch(le){case"topheader":case"header":return oe?{logo:oe}:{};case"aside":return{...oe?{name:oe}:{},...ve?{role:ve}:{}};case"hero":return oe?{title:ve?`안녕하세요,
${ve} ${oe}입니다`:`안녕하세요,
${oe}입니다`}:{};case"footer":return oe?{text:`© ${new Date().getFullYear()} ${oe}`}:{};default:return{}}};if(q){const le={};for(const[Ie,Me]of Object.entries(q.fills))le[Ie]={...Ft(Me),...((se=q.content)==null?void 0:se[Ie])??{},...ae(Me)};const oe={};if(C)for(const[Ie,Me]of Object.entries(q.fx??{}))oe[Ie]=Me.map(Wn=>({name:Wn.name,options:{...Lo(Wn.name),...Wn.options??{}}}));const ve=bb(q.fills,le),ke={name:$||"",role:D||""};te(Ie=>({...Ie,pages:Ie.pages.map((Me,Wn)=>{if(Object.keys(Me.fills??{}).length)return Me;const _t=wb(vb(Me.name,Wn),ve,ke);return _t?{...Me,..._t}:{...Me,wireframe:q.id,fills:{...q.fills},content:le,fx:oe,extra:[],overrides:{}}})}))}te(le=>{var oe,ve,ke;return{...le,site:{...le.site,navMode:((oe=le.site)==null?void 0:oe.navMode)??"anchor",...$?{title:(ve=le.site)!=null&&ve.title?le.site.title:`${$} 포트폴리오`,description:(ke=le.site)!=null&&ke.description?le.site.description:`${D?`${D} `:""}${$}의 포트폴리오입니다.`}:{}}}}),localStorage.setItem(va,"1"),c(!0)},Re=E=>{E&&localStorage.setItem(Ei,"1"),g(!0)},G=async E=>{if(!(n.pages.some(D=>Object.keys(D.fills??{}).length)&&!await at({title:"지금 작업을 덮어쓸까요?",body:`예시 「${E.name}」을 열면 지금 편집 중인 내용이 사라집니다. 되돌리기(Ctrl+Z)로 되살릴 수 있습니다.`,ok:"예시 열기"}))){k(E.id);try{const D=await fetch(ib(E));if(!D.ok)throw new Error(`예시를 받지 못했습니다 (${D.status})`);const q=await uh(await D.text());te(()=>q),i(null),localStorage.setItem(va,"1"),c(!0),j(!0)}catch(D){await at({title:"예시를 열지 못했습니다",body:`${D.message}

인터넷 연결을 확인한 뒤 다시 시도해 주세요. 「사이트 보기」로 결과물만 먼저 보실 수도 있습니다.`,ok:"확인",cancel:null})}finally{k("")}}},Ee=!_&&(new URLSearchParams(location.search).has("welcome")||!h&&n.pages.every(E=>!Object.keys(E.fills??{}).length)),ze=E=>{var le,oe;const $=cd(E);if(!$)return;const D={};for(const[ve,ke]of Object.entries($.fills))D[ve]={...Ft(ke),...((le=$.content)==null?void 0:le[ve])??{}};const q={};if(C)for(const[ve,ke]of Object.entries($.fx??{}))q[ve]=ke.map(Ie=>({name:Ie.name,options:{...Lo(Ie.name),...Ie.options??{}}}));const ae=(ve,ke,Ie)=>{const Me={...ve},Wn=Object.keys(ke).find(Xs=>ke[Xs]==="hero");if(Wn)return Me[Wn]={...Me[Wn],title:`${Ie} 페이지입니다`,sub:`상단 메뉴의 ${Ie}에서 들어오는 화면입니다. 내용을 채워 주세요.`},Me;const _t=Object.keys(ke).find(Xs=>ke[Xs]==="section");return _t&&(Me[_t]={...Me[_t],title:`${Ie} 페이지입니다`}),Me},se=()=>({wireframe:E,fills:{...$.fills},content:Object.fromEntries(Object.entries(D).map(([ve,ke])=>[ve,{...ke}])),fx:Object.fromEntries(Object.entries(q).map(([ve,ke])=>[ve,ke.map(Ie=>({...Ie,options:{...Ie.options}}))])),extra:[],overrides:{}});if(me)te(ve=>({...ve,pages:ve.pages.map((ke,Ie)=>{const Me=se();return Ie>0&&(Me.content=ae(Me.content,Me.fills,ke.name)),{...ke,...Me}})}));else{const ve=se();((oe=n.pages[0])==null?void 0:oe.id)===n.current||(ve.content=ae(ve.content,ve.fills,z.name)),ee(ve)}i(null)},qe=E=>{o&&ee({fills:{...z.fills??{},[o]:E},content:{...z.content??{},[o]:Ft(E)}})},mn=E=>{if(!E)return;const $={...z.fills??{}},D={...z.content??{}},q={...z.fx??{}};delete $[E],delete D[E],delete q[E],ee({fills:$,content:D,fx:q})},Qn=()=>{o&&mn(o)},Zn=E=>{var D;const $=(D=z.fills)==null?void 0:D[o];te(q=>{var ae;return T({...q,pages:Sa(q.pages,q.current,{content:{...z.content??{},[o]:{...((ae=z.content)==null?void 0:ae[o])??{},...E}}})},$,"content",se=>({...se,...E}))})},Jn=(E,$,D)=>{var se;const q=le=>{if($.length===1)return{...le,[$[0]]:D};const[oe,ve,ke]=$,Ie=Array.isArray(le[oe])?le[oe]:[];return{...le,[oe]:Ie.map((Me,Wn)=>Wn===ve?{...Me,[ke]:D}:Me)}},ae=(se=z.fills)==null?void 0:se[E];te(le=>{var oe;return T({...le,pages:Sa(le.pages,le.current,{content:{...z.content??{},[E]:q(((oe=z.content)==null?void 0:oe[E])??{})}})},ae,"content",q)})},er=E=>{var ae,se;if(!o)return;const $=(ae=z.fills)==null?void 0:ae[o];if(!no(E,$))return;const D=((se=z.fx)==null?void 0:se[o])??[],q=D.some(le=>le.name===E)?D.filter(le=>le.name!==E):[...Bd(D,E),{name:E,options:Lo(E)}];ee({fx:{...z.fx??{},[o]:q}})},hn=(E,$)=>{const D=typeof E=="string"?{[E]:$}:E;r(q=>{const ae=q.pages.map(se=>{if(se.id!==q.current)return se;const le={...se.overrides??{}};for(const[oe,ve]of Object.entries(D))le[oe]={...le[oe]??{},...ve};return{...se,overrides:le}});return{...q,pages:ae}})},mr=E=>{if(!o)return;const $=ht(z.wireframe),D=Om($,z.extra,o);if(!D.length)return;const q=E==="자유"?V0($,z.extra,z.overrides??{},o):null;te(ae=>({...ae,pages:ae.pages.map(se=>{if(se.id!==ae.current)return se;const le={...se.overrides??{}};for(const oe of D)le[oe]={...le[oe]??{},rowAlign:E},q&&q[oe]!==void 0&&(le[oe].colAt=q[oe]);return{...se,overrides:le}})}))},nr=(E,$,D)=>{r(q=>{const ae=q.pages.map(se=>{var oe;if(se.id!==q.current)return se;const le=(oe=se.content)==null?void 0:oe[E];return le?{...se,content:{...se.content,[E]:{...le,freeX:$,freeY:D}}}:se});return{...q,pages:ae}})},Bn=async()=>{await at({title:"처음부터 다시 시작할까요?",body:`지금 작업을 모두 지웁니다. 되돌릴 수 없습니다.
남겨 두려면 먼저 "파일로 저장"을 하세요.`,ok:"모두 지우기",danger:!0})&&(fe.current=[],de.current=[],i(null),localStorage.removeItem(va),c(!1),localStorage.removeItem(Ei),g(!1),r(Nl()))},kn=(E,$)=>{var ae,se;const D=(ae=z.fills)==null?void 0:ae[E];if(!no($,D))return;const q=((se=z.fx)==null?void 0:se[E])??[];q.some(le=>le.name===$)||(ee({fx:{...z.fx??{},[E]:[...Bd(q,$),{name:$,options:Lo($)}]}}),i(E))},Rn=(E,$)=>{ee({fills:{...z.fills??{},[E]:$},content:{...z.content??{},[E]:Ft($)}}),i(E)},wt=(E,$)=>{var q;if(!o)return;const D=(((q=z.fx)==null?void 0:q[o])??[]).map(ae=>ae.name===E?{...ae,options:{...ae.options,...$}}:ae);ee({fx:{...z.fx??{},[o]:D}})},Xr=E=>{var D;const $=(D=z.fills)==null?void 0:D[o];te(q=>{var ae;return T({...q,pages:Sa(q.pages,q.current,{overrides:{...z.overrides??{},[o]:{...((ae=z.overrides)==null?void 0:ae[o])??{},...E}}})},$,"overrides",se=>({...se,...E}))})},We=()=>{const E={...z.overrides??{}};delete E[o],ee({overrides:E})},bt=E=>{var $,D,q;return ee({overrides:{...z.overrides??{},[E]:{...(($=z.overrides)==null?void 0:$[E])??{},enterOff:!((q=(D=z.overrides)==null?void 0:D[E])!=null&&q.enterOff)}}})},xn=(E,$,D)=>{const q=z.extra??[],ae=co(ht(z.wireframe)).total,se=$==null?ae:Math.max(0,Math.min(ae,$)),le=D??q.filter(ve=>(ve.at??ae)<=se).length,oe=K0(q,E,le);oe[le]={...oe[le],at:se},ee({extra:oe})},rr=E=>{var q;if(!E||(q=z.fills)!=null&&q[E])return;const $=[...new Set([...z.hidden??[],E])],D=(z.extra??[]).find(ae=>en(ae).includes(E));if(D&&en(D).every(ae=>{var se;return $.includes(ae)||!((se=z.fills)!=null&&se[ae])})){const ae=$.filter(se=>!en(D).includes(se));ee({hidden:ae,...Bc(D.id)})}else ee({hidden:$});o===E&&i(null)},vh=(E,$)=>{const D=z.extra??[],q=D.find(oe=>oe.id===E);if(!q||q.cols>=6)return;const ae=oe=>oe>=$+1?oe+1:oe,se=oe=>{const ve={};for(const[ke,Ie]of Object.entries(oe??{})){const Me=new RegExp(`^${E}-(\\d+)$`).exec(ke);ve[Me?`${E}-${ae(Number(Me[1]))}`:ke]=Ie}return ve},le=oe=>(oe??[]).map(ve=>{const ke=new RegExp(`^${E}-(\\d+)$`).exec(ve);return ke?`${E}-${ae(Number(ke[1]))}`:ve});ee({extra:D.map(oe=>oe.id===E?{...oe,cols:oe.cols+1}:oe),fills:se(z.fills),content:se(z.content),overrides:se(z.overrides),fx:se(z.fx),hidden:le(z.hidden)})},Bc=E=>({extra:(z.extra??[]).filter($=>$.id!==E)}),yh=E=>{const $=(z.extra??[]).find(ae=>ae.id===E),D={...z.fills??{}},q={...z.content??{}};$&&en($).forEach(ae=>{delete D[ae],delete q[ae]}),ee({...Bc(E),fills:D,content:q}),i(null)},gn=ra(n.theme),Ks=ys(n.typeset),wh=N.useMemo(()=>({fontFamily:Ks.font,background:gn.bg,color:gn.text,"--wf-bg":gn.bg,"--wf-text":gn.text,"--wf-surface":gn.surface,"--wf-line":gn.border,"--wf-muted":gn.muted,"--wf-accent":gn.accent,"--wf-max":`${n.global.maxWidth}px`,"--fx-dot-color":gn.dot,"--fx-star-color":th(gn),"--fx-char-color":gn.line}),[gn,Ks,n.global.maxWidth]),bh=Object.keys(z.fills??{}).length,_h=`${z.name} · ${gn.label} · ${Ks.label} — ${bh}개 채움`;return s.jsxs("div",{className:`pb-app${P?" is-phone":""}`,children:[s.jsxs("header",{className:"pb-topbar",children:[s.jsxs("div",{className:"pb-brand",children:["Portfolio ",s.jsx("b",{children:"Maker"}),s.jsx("span",{className:"pb-badge",children:"draft"})]}),s.jsx("span",{className:"pb-summary",children:_h}),s.jsx("span",{className:`pb-save is-${t}`,children:t==="saving"?"저장 중…":t==="failed"?"저장 실패":"저장됨"}),s.jsxs("div",{className:"pb-panelbtns",children:[s.jsx("button",{className:`pb-iconbtn ${K?"is-on":""}`,onClick:()=>re(!K),"data-tip":"왼쪽 패널 접기 / 펼치기",children:s.jsx(Mn,{name:"panelLeft"})}),s.jsx("button",{className:`pb-iconbtn ${$e?"is-on":""}`,onClick:()=>Le(!$e),"data-tip":"오른쪽 편집 패널 접기 / 펼치기",children:s.jsx(Mn,{name:"panelRight"})})]}),s.jsx("div",{className:`pb-devices${Y?" is-open":""}`,children:[["desktop","데스크톱 1280px로 보기"],["tablet","태블릿 768px로 보기"],["mobile","모바일 390px로 보기"]].map(([E,$])=>s.jsx("button",{className:`pb-iconbtn ${l===E?"is-on":""}`,onClick:()=>f(E),"data-tip":$,children:s.jsx(Mn,{name:E})},E))}),s.jsxs("div",{className:"pb-actions",children:[s.jsxs("div",{className:`pb-actions__sec${Y?" is-open":""}`,children:[s.jsx("button",{className:"pb-iconbtn",onClick:()=>Z(E=>E==="light"?"dark":"light"),"data-tip":Te==="light"?"에디터를 어둡게":"에디터를 밝게",children:s.jsx(Mn,{name:Te==="light"?"moon":"sun"})}),s.jsx("button",{className:`pb-iconbtn ${C?"is-on":""}`,onClick:C?Q:()=>R(!0),"data-tip":`부가 기능 ${C?"끄기":"켜기"} — 3D 효과 · Character · 3D Model`,children:s.jsx(Mn,{name:"sparkle"})}),s.jsx("button",{className:`pb-iconbtn ${d?"is-on":""}`,onClick:()=>m(E=>!E),"data-tip":`효과 ${d?"잠시 끄기":"켜기"} — 끄면 레이아웃 잡기가 편합니다`,children:s.jsx(Mn,{name:"wand"})}),s.jsx("button",{className:"pb-iconbtn pb-iconbtn--danger",onClick:Bn,"data-tip":"처음부터 다시 — 지금 작업을 모두 지웁니다",children:s.jsx(Mn,{name:"trash"})})]}),s.jsx("button",{className:"pb-iconbtn",onClick:Ce,"data-tip":"되돌리기 (Ctrl+Z)",children:s.jsx(Mn,{name:"undo"})}),s.jsx("button",{className:"pb-iconbtn",onClick:L,"data-tip":"다시 실행 (Ctrl+Shift+Z)",children:s.jsx(Mn,{name:"redo"})}),s.jsx("button",{className:`pb-iconbtn ${u?"is-on":""}`,onClick:()=>x(E=>!E),"data-tip":u?"편집으로 돌아가기":"미리보기 — 편집 표식 없이 보기",children:s.jsx(Mn,{name:u?"pencil":"eye"})}),s.jsx("button",{className:"pb-iconbtn",onClick:()=>S(!0),"data-tip":"저장 · 불러오기 — 이 컴퓨터에 여러 개 또는 파일로",children:s.jsx(Mn,{name:"save"})}),s.jsx("button",{className:"pb-iconbtn",onClick:()=>v(!0),"data-tip":"내보내기 — HTML / ZIP으로 내려받기",children:s.jsx(Mn,{name:"download"})}),P&&s.jsx("button",{className:`pb-iconbtn ${Y?"is-on":""}`,onClick:()=>ue(E=>!E),"data-tip":"더보기 — 테마 · 부가 기능 · 효과 · 기기 보기",children:"⋯"})]})]}),s.jsxs("div",{className:`pb-body ${ye?"is-narrow":""}`,children:[ye&&(K||$e)&&s.jsx("button",{className:"pb-scrim","aria-label":"패널 닫기",onClick:()=>{Ae(!1),J(!1)}}),s.jsx(py,{open:K,advanced:C,pages:n.pages,current:n.current,page:z,global:n.global,theme:n.theme,typeset:n.typeset,selected:o,onSwitchPage:F,onAddPage:ie,onRenamePage:(E,$)=>te(D=>({...D,pages:Nb(D.pages,E,$)})),onRemovePage:he,onMovePage:(E,$)=>te(D=>({...D,pages:Lb(D.pages,E,$)})),onWireframe:be,onTemplate:ze,applyAll:me,onApplyAll:ge,onFill:qe,onDropEffect:kn,onGlobal:E=>te($=>({...$,global:{...$.global,...E}})),site:n.site,onSite:E=>te($=>({...$,site:{...$.site,...E}})),onBackground:E=>te($=>{var D;return{...$,site:{...$.site,background:{...(D=$.site)==null?void 0:D.background,...E}}}}),onTheme:E=>te($=>({...$,theme:E})),onTypeset:E=>te($=>({...$,typeset:E})),onExport:()=>v(!0)}),s.jsx(Kv,{page:z,pages:n.pages,current:n.current,global:n.global,theme:gn,effectsOn:B,rootStyle:wh,selected:o,onSelect:i,onGoto:F,onAddRow:xn,onRemoveRow:yh,onDropEffect:kn,onDropPart:Rn,onEditText:Jn,onFreeMove:nr,onFreeBox:hn,background:(Wc=n.site)==null?void 0:Wc.background,enterFx:(Hc=n.site)==null?void 0:Hc.enterFx,enterDelay:(Uc=n.site)==null?void 0:Uc.enterDelay,onToggleEnter:bt,onClearRegion:mn,onHideRegion:rr,onAddCol:vh,scrollBar:!!((Gc=n.site)!=null&&Gc.scrollBar),customFont:(Vc=n.site)==null?void 0:Vc.customFont,device:l,preview:u}),s.jsx(_y,{open:$e,onClose:()=>J(!1),narrow:ye,advanced:C,regionId:o,partId:o?(Yc=z.fills)==null?void 0:Yc[o]:null,content:o?(qc=z.content)==null?void 0:qc[o]:null,override:o?(Kc=z.overrides)==null?void 0:Kc[o]:null,fx:o?((Xc=z.fx)==null?void 0:Xc[o])??[]:[],global:n.global,onContent:Zn,onOverride:Xr,onResetOverride:We,onClearPart:Qn,onToggleEffect:er,onEffectOptions:wt,onRowAlign:mr,site:n.site,onSite:E=>te($=>({...$,site:{...$.site,...E}}))})]}),s.jsx(_b,{open:Se,onClose:()=>I(!1),actions:[...n.pages.map(E=>({group:"페이지",label:`${E.name} 열기`,run:()=>F(E.id)})),{group:"도구",label:"내보내기 — HTML / ZIP",hint:"⬇",run:()=>v(!0)},{group:"도구",label:"저장 · 불러오기",run:()=>S(!0)},{group:"도구",label:u?"미리보기 끄기":"미리보기 — 편집 표식 없이",run:()=>x(E=>!E)},{group:"도구",label:Te==="dark"?"에디터 밝게":"에디터 어둡게",run:()=>Z(Te==="dark"?"light":"dark")},{group:"도구",label:n.global.gridGuide?"그리드 가이드 끄기":"그리드 가이드 켜기",run:()=>te(E=>({...E,global:{...E.global,gridGuide:!E.global.gridGuide}}))},{group:"도구",label:"단계별 사용 가이드 열기",hint:"새 탭",run:()=>window.open("./guide/how-to.html","_blank","noopener")},...Yt.map(E=>({group:"테마",label:E.label??E.name??E.id,run:()=>te($=>({...$,theme:E.id}))})),...ur.map(E=>({group:"글꼴",label:E.label??E.name??E.id,run:()=>te($=>({...$,typeset:E.id}))}))]}),s.jsx(kb,{open:U,onClose:()=>pe(!1)}),s.jsxs("div",{className:`pb-footerad ${M?"is-hidden":""}`,children:[s.jsx(nb,{}),s.jsxs("span",{className:"pb-copy",children:["© ",new Date().getFullYear()," Portfolio Maker",s.jsx("span",{className:"pb-copy__sep",children:" · "}),s.jsx("a",{href:"./about.html",target:"_blank",rel:"noopener noreferrer",children:"소개"}),s.jsx("span",{className:"pb-copy__sep",children:" · "}),s.jsx("a",{href:"./privacy.html",target:"_blank",rel:"noopener noreferrer",children:"개인정보처리방침"}),s.jsx("span",{className:"pb-copy__sep",children:" · "}),s.jsx("a",{href:"./terms.html",target:"_blank",rel:"noopener noreferrer",children:"이용약관"}),s.jsx("span",{className:"pb-copy__sep",children:" · "}),s.jsx("a",{href:"./contact.html",target:"_blank",rel:"noopener noreferrer",children:"문의"})]}),s.jsx("button",{className:"pb-footerad__toggle",onClick:()=>{const E=!M;A(E),localStorage.setItem(Id,E?"1":"")},children:M?"∧ 광고 보기":"∨ 숨기기"}),!M&&s.jsx(ta,{id:"appFooter",className:"pb-adslot--footer"})]}),w&&s.jsx(eb,{doc:n,advanced:C,onClose:()=>v(!1)}),b&&s.jsx(xb,{doc:n,onLoad:E=>{te(()=>E),i(null)},onClose:()=>S(!1)}),Ee&&!p&&s.jsx(cb,{onStart:Re,onOpenSample:G,busy:y}),Ee&&p&&s.jsx(rb,{global:n.global,onStart:ne,onSkip:()=>{localStorage.setItem(va,"1"),c(!0)}})]})}const gh=document.createElement("style");gh.textContent=jc(e=>`${ws}/${e}`);document.head.appendChild(gh);rm(document.getElementById("root")).render(s.jsx(Rb,{}));
