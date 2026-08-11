(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();function p2(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var vd={exports:{}},qs={},yd={exports:{}},Ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var go=Symbol.for("react.element"),m2=Symbol.for("react.portal"),h2=Symbol.for("react.fragment"),g2=Symbol.for("react.strict_mode"),x2=Symbol.for("react.profiler"),w2=Symbol.for("react.provider"),b2=Symbol.for("react.context"),v2=Symbol.for("react.forward_ref"),y2=Symbol.for("react.suspense"),_2=Symbol.for("react.memo"),k2=Symbol.for("react.lazy"),f0=Symbol.iterator;function j2(e){return e===null||typeof e!="object"?null:(e=f0&&e[f0]||e["@@iterator"],typeof e=="function"?e:null)}var _d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},kd=Object.assign,jd={};function pa(e,r,n){this.props=e,this.context=r,this.refs=jd,this.updater=n||_d}pa.prototype.isReactComponent={};pa.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")};pa.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Sd(){}Sd.prototype=pa.prototype;function Hl(e,r,n){this.props=e,this.context=r,this.refs=jd,this.updater=n||_d}var Vl=Hl.prototype=new Sd;Vl.constructor=Hl;kd(Vl,pa.prototype);Vl.isPureReactComponent=!0;var u0=Array.isArray,Cd=Object.prototype.hasOwnProperty,Wl={current:null},Ed={key:!0,ref:!0,__self:!0,__source:!0};function Nd(e,r,n){var t,a={},o=null,s=null;if(r!=null)for(t in r.ref!==void 0&&(s=r.ref),r.key!==void 0&&(o=""+r.key),r)Cd.call(r,t)&&!Ed.hasOwnProperty(t)&&(a[t]=r[t]);var l=arguments.length-2;if(l===1)a.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(t in l=e.defaultProps,l)a[t]===void 0&&(a[t]=l[t]);return{$$typeof:go,type:e,key:o,ref:s,props:a,_owner:Wl.current}}function S2(e,r){return{$$typeof:go,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function Ul(e){return typeof e=="object"&&e!==null&&e.$$typeof===go}function C2(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return r[n]})}var p0=/\/+/g;function ci(e,r){return typeof e=="object"&&e!==null&&e.key!=null?C2(""+e.key):r.toString(36)}function Uo(e,r,n,t,a){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case go:case m2:s=!0}}if(s)return s=e,a=a(s),e=t===""?"."+ci(s,0):t,u0(a)?(n="",e!=null&&(n=e.replace(p0,"$&/")+"/"),Uo(a,r,n,"",function(u){return u})):a!=null&&(Ul(a)&&(a=S2(a,n+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(p0,"$&/")+"/")+e)),r.push(a)),1;if(s=0,t=t===""?".":t+":",u0(e))for(var l=0;l<e.length;l++){o=e[l];var c=t+ci(o,l);s+=Uo(o,r,n,c,a)}else if(c=j2(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=t+ci(o,l++),s+=Uo(o,r,n,c,a);else if(o==="object")throw r=String(e),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return s}function _o(e,r,n){if(e==null)return e;var t=[],a=0;return Uo(e,t,"","",function(o){return r.call(n,o,a++)}),t}function E2(e){if(e._status===-1){var r=e._result;r=r(),r.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=r)}if(e._status===1)return e._result.default;throw e._result}var hr={current:null},Go={transition:null},N2={ReactCurrentDispatcher:hr,ReactCurrentBatchConfig:Go,ReactCurrentOwner:Wl};function zd(){throw Error("act(...) is not supported in production builds of React.")}Ee.Children={map:_o,forEach:function(e,r,n){_o(e,function(){r.apply(this,arguments)},n)},count:function(e){var r=0;return _o(e,function(){r++}),r},toArray:function(e){return _o(e,function(r){return r})||[]},only:function(e){if(!Ul(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ee.Component=pa;Ee.Fragment=h2;Ee.Profiler=x2;Ee.PureComponent=Hl;Ee.StrictMode=g2;Ee.Suspense=y2;Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N2;Ee.act=zd;Ee.cloneElement=function(e,r,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var t=kd({},e.props),a=e.key,o=e.ref,s=e._owner;if(r!=null){if(r.ref!==void 0&&(o=r.ref,s=Wl.current),r.key!==void 0&&(a=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in r)Cd.call(r,c)&&!Ed.hasOwnProperty(c)&&(t[c]=r[c]===void 0&&l!==void 0?l[c]:r[c])}var c=arguments.length-2;if(c===1)t.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];t.children=l}return{$$typeof:go,type:e.type,key:a,ref:o,props:t,_owner:s}};Ee.createContext=function(e){return e={$$typeof:b2,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:w2,_context:e},e.Consumer=e};Ee.createElement=Nd;Ee.createFactory=function(e){var r=Nd.bind(null,e);return r.type=e,r};Ee.createRef=function(){return{current:null}};Ee.forwardRef=function(e){return{$$typeof:v2,render:e}};Ee.isValidElement=Ul;Ee.lazy=function(e){return{$$typeof:k2,_payload:{_status:-1,_result:e},_init:E2}};Ee.memo=function(e,r){return{$$typeof:_2,type:e,compare:r===void 0?null:r}};Ee.startTransition=function(e){var r=Go.transition;Go.transition={};try{e()}finally{Go.transition=r}};Ee.unstable_act=zd;Ee.useCallback=function(e,r){return hr.current.useCallback(e,r)};Ee.useContext=function(e){return hr.current.useContext(e)};Ee.useDebugValue=function(){};Ee.useDeferredValue=function(e){return hr.current.useDeferredValue(e)};Ee.useEffect=function(e,r){return hr.current.useEffect(e,r)};Ee.useId=function(){return hr.current.useId()};Ee.useImperativeHandle=function(e,r,n){return hr.current.useImperativeHandle(e,r,n)};Ee.useInsertionEffect=function(e,r){return hr.current.useInsertionEffect(e,r)};Ee.useLayoutEffect=function(e,r){return hr.current.useLayoutEffect(e,r)};Ee.useMemo=function(e,r){return hr.current.useMemo(e,r)};Ee.useReducer=function(e,r,n){return hr.current.useReducer(e,r,n)};Ee.useRef=function(e){return hr.current.useRef(e)};Ee.useState=function(e){return hr.current.useState(e)};Ee.useSyncExternalStore=function(e,r,n){return hr.current.useSyncExternalStore(e,r,n)};Ee.useTransition=function(){return hr.current.useTransition()};Ee.version="18.3.1";yd.exports=Ee;var L=yd.exports;const os=p2(L);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z2=L,M2=Symbol.for("react.element"),L2=Symbol.for("react.fragment"),$2=Object.prototype.hasOwnProperty,R2=z2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,T2={key:!0,ref:!0,__self:!0,__source:!0};function Md(e,r,n){var t,a={},o=null,s=null;n!==void 0&&(o=""+n),r.key!==void 0&&(o=""+r.key),r.ref!==void 0&&(s=r.ref);for(t in r)$2.call(r,t)&&!T2.hasOwnProperty(t)&&(a[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps,r)a[t]===void 0&&(a[t]=r[t]);return{$$typeof:M2,type:e,key:o,ref:s,props:a,_owner:R2.current}}qs.Fragment=L2;qs.jsx=Md;qs.jsxs=Md;vd.exports=qs;var i=vd.exports,Ld={exports:{}},$r={},$d={exports:{}},Rd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function r(A,B){var Q=A.length;A.push(B);e:for(;0<Q;){var pe=Q-1>>>1,Z=A[pe];if(0<a(Z,B))A[pe]=B,A[Q]=Z,Q=pe;else break e}}function n(A){return A.length===0?null:A[0]}function t(A){if(A.length===0)return null;var B=A[0],Q=A.pop();if(Q!==B){A[0]=Q;e:for(var pe=0,Z=A.length,je=Z>>>1;pe<je;){var Se=2*(pe+1)-1,X=A[Se],ne=Se+1,Ne=A[ne];if(0>a(X,Q))ne<Z&&0>a(Ne,X)?(A[pe]=Ne,A[ne]=Q,pe=ne):(A[pe]=X,A[Se]=Q,pe=Se);else if(ne<Z&&0>a(Ne,Q))A[pe]=Ne,A[ne]=Q,pe=ne;else break e}}return B}function a(A,B){var Q=A.sortIndex-B.sortIndex;return Q!==0?Q:A.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var c=[],u=[],h=1,f=null,p=3,k=!1,_=!1,j=!1,C=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(A){for(var B=n(u);B!==null;){if(B.callback===null)t(u);else if(B.startTime<=A)t(u),B.sortIndex=B.expirationTime,r(c,B);else break;B=n(u)}}function x(A){if(j=!1,m(A),!_)if(n(c)!==null)_=!0,J(y);else{var B=n(u);B!==null&&H(x,B.startTime-A)}}function y(A,B){_=!1,j&&(j=!1,b(v),v=-1),k=!0;var Q=p;try{for(m(B),f=n(c);f!==null&&(!(f.expirationTime>B)||A&&!N());){var pe=f.callback;if(typeof pe=="function"){f.callback=null,p=f.priorityLevel;var Z=pe(f.expirationTime<=B);B=e.unstable_now(),typeof Z=="function"?f.callback=Z:f===n(c)&&t(c),m(B)}else t(c);f=n(c)}if(f!==null)var je=!0;else{var Se=n(u);Se!==null&&H(x,Se.startTime-B),je=!1}return je}finally{f=null,p=Q,k=!1}}var S=!1,w=null,v=-1,g=5,E=-1;function N(){return!(e.unstable_now()-E<g)}function M(){if(w!==null){var A=e.unstable_now();E=A;var B=!0;try{B=w(!0,A)}finally{B?T():(S=!1,w=null)}}else S=!1}var T;if(typeof d=="function")T=function(){d(M)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,P=$.port2;$.port1.onmessage=M,T=function(){P.postMessage(null)}}else T=function(){C(M,0)};function J(A){w=A,S||(S=!0,T())}function H(A,B){v=C(function(){A(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){_||k||(_=!0,J(y))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):g=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(A){switch(p){case 1:case 2:case 3:var B=3;break;default:B=p}var Q=p;p=B;try{return A()}finally{p=Q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,B){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var Q=p;p=A;try{return B()}finally{p=Q}},e.unstable_scheduleCallback=function(A,B,Q){var pe=e.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?pe+Q:pe):Q=pe,A){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=Q+Z,A={id:h++,callback:B,priorityLevel:A,startTime:Q,expirationTime:Z,sortIndex:-1},Q>pe?(A.sortIndex=Q,r(u,A),n(c)===null&&A===n(u)&&(j?(b(v),v=-1):j=!0,H(x,Q-pe))):(A.sortIndex=Z,r(c,A),_||k||(_=!0,J(y))),A},e.unstable_shouldYield=N,e.unstable_wrapCallback=function(A){var B=p;return function(){var Q=p;p=B;try{return A.apply(this,arguments)}finally{p=Q}}}})(Rd);$d.exports=Rd;var A2=$d.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D2=L,Lr=A2;function V(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Td=new Set,Ua={};function St(e,r){ta(e,r),ta(e+"Capture",r)}function ta(e,r){for(Ua[e]=r,e=0;e<r.length;e++)Td.add(r[e])}var Cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bi=Object.prototype.hasOwnProperty,P2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m0={},h0={};function F2(e){return Bi.call(h0,e)?!0:Bi.call(m0,e)?!1:P2.test(e)?h0[e]=!0:(m0[e]=!0,!1)}function O2(e,r,n,t){if(n!==null&&n.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return t?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function B2(e,r,n,t){if(r===null||typeof r>"u"||O2(e,r,n,t))return!0;if(t)return!1;if(n!==null)switch(n.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function gr(e,r,n,t,a,o,s){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=t,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=r,this.sanitizeURL=o,this.removeEmptyString=s}var ir={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ir[e]=new gr(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];ir[r]=new gr(r,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ir[e]=new gr(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ir[e]=new gr(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ir[e]=new gr(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ir[e]=new gr(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ir[e]=new gr(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ir[e]=new gr(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ir[e]=new gr(e,5,!1,e.toLowerCase(),null,!1,!1)});var Gl=/[\-:]([a-z])/g;function Yl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(Gl,Yl);ir[r]=new gr(r,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(Gl,Yl);ir[r]=new gr(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(Gl,Yl);ir[r]=new gr(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ir[e]=new gr(e,1,!1,e.toLowerCase(),null,!1,!1)});ir.xlinkHref=new gr("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ir[e]=new gr(e,1,!1,e.toLowerCase(),null,!0,!0)});function Kl(e,r,n,t){var a=ir.hasOwnProperty(r)?ir[r]:null;(a!==null?a.type!==0:t||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(B2(r,n,a,t)&&(n=null),t||a===null?F2(r)&&(n===null?e.removeAttribute(r):e.setAttribute(r,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(r=a.attributeName,t=a.attributeNamespace,n===null?e.removeAttribute(r):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,t?e.setAttributeNS(t,r,n):e.setAttribute(r,n))))}var Mn=D2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ko=Symbol.for("react.element"),Dt=Symbol.for("react.portal"),Pt=Symbol.for("react.fragment"),Ql=Symbol.for("react.strict_mode"),qi=Symbol.for("react.profiler"),Ad=Symbol.for("react.provider"),Dd=Symbol.for("react.context"),Xl=Symbol.for("react.forward_ref"),Ii=Symbol.for("react.suspense"),Hi=Symbol.for("react.suspense_list"),Zl=Symbol.for("react.memo"),Pn=Symbol.for("react.lazy"),Pd=Symbol.for("react.offscreen"),g0=Symbol.iterator;function wa(e){return e===null||typeof e!="object"?null:(e=g0&&e[g0]||e["@@iterator"],typeof e=="function"?e:null)}var Ye=Object.assign,di;function Na(e){if(di===void 0)try{throw Error()}catch(n){var r=n.stack.trim().match(/\n( *(at )?)/);di=r&&r[1]||""}return`
`+di+e}var fi=!1;function ui(e,r){if(!e||fi)return"";fi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(u){var t=u}Reflect.construct(e,[],r)}else{try{r.call()}catch(u){t=u}e.call(r.prototype)}else{try{throw Error()}catch(u){t=u}e()}}catch(u){if(u&&t&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),o=t.stack.split(`
`),s=a.length-1,l=o.length-1;1<=s&&0<=l&&a[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(a[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||a[s]!==o[l]){var c=`
`+a[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=l);break}}}finally{fi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Na(e):""}function q2(e){switch(e.tag){case 5:return Na(e.type);case 16:return Na("Lazy");case 13:return Na("Suspense");case 19:return Na("SuspenseList");case 0:case 2:case 15:return e=ui(e.type,!1),e;case 11:return e=ui(e.type.render,!1),e;case 1:return e=ui(e.type,!0),e;default:return""}}function Vi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Pt:return"Fragment";case Dt:return"Portal";case qi:return"Profiler";case Ql:return"StrictMode";case Ii:return"Suspense";case Hi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Dd:return(e.displayName||"Context")+".Consumer";case Ad:return(e._context.displayName||"Context")+".Provider";case Xl:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zl:return r=e.displayName||null,r!==null?r:Vi(e.type)||"Memo";case Pn:r=e._payload,e=e._init;try{return Vi(e(r))}catch{}}return null}function I2(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vi(r);case 8:return r===Ql?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Zn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fd(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function H2(e){var r=Fd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),t=""+e[r];if(!e.hasOwnProperty(r)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,o=n.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return a.call(this)},set:function(s){t=""+s,o.call(this,s)}}),Object.defineProperty(e,r,{enumerable:n.enumerable}),{getValue:function(){return t},setValue:function(s){t=""+s},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function jo(e){e._valueTracker||(e._valueTracker=H2(e))}function Od(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var n=r.getValue(),t="";return e&&(t=Fd(e)?e.checked?"true":"false":e.value),e=t,e!==n?(r.setValue(e),!0):!1}function ss(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wi(e,r){var n=r.checked;return Ye({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function x0(e,r){var n=r.defaultValue==null?"":r.defaultValue,t=r.checked!=null?r.checked:r.defaultChecked;n=Zn(r.value!=null?r.value:n),e._wrapperState={initialChecked:t,initialValue:n,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Bd(e,r){r=r.checked,r!=null&&Kl(e,"checked",r,!1)}function Ui(e,r){Bd(e,r);var n=Zn(r.value),t=r.type;if(n!=null)t==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(t==="submit"||t==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?Gi(e,r.type,n):r.hasOwnProperty("defaultValue")&&Gi(e,r.type,Zn(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function w0(e,r,n){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var t=r.type;if(!(t!=="submit"&&t!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,n||r===e.value||(e.value=r),e.defaultValue=r}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Gi(e,r,n){(r!=="number"||ss(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var za=Array.isArray;function Kt(e,r,n,t){if(e=e.options,r){r={};for(var a=0;a<n.length;a++)r["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=r.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&t&&(e[n].defaultSelected=!0)}else{for(n=""+Zn(n),r=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,t&&(e[a].defaultSelected=!0);return}r!==null||e[a].disabled||(r=e[a])}r!==null&&(r.selected=!0)}}function Yi(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(V(91));return Ye({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function b0(e,r){var n=r.value;if(n==null){if(n=r.children,r=r.defaultValue,n!=null){if(r!=null)throw Error(V(92));if(za(n)){if(1<n.length)throw Error(V(93));n=n[0]}r=n}r==null&&(r=""),n=r}e._wrapperState={initialValue:Zn(n)}}function qd(e,r){var n=Zn(r.value),t=Zn(r.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),r.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),t!=null&&(e.defaultValue=""+t)}function v0(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function Id(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ki(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?Id(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var So,Hd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,n,t,a){MSApp.execUnsafeLocalFunction(function(){return e(r,n,t,a)})}:e}(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(So=So||document.createElement("div"),So.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=So.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function Ga(e,r){if(r){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=r;return}}e.textContent=r}var Aa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},V2=["Webkit","ms","Moz","O"];Object.keys(Aa).forEach(function(e){V2.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),Aa[r]=Aa[e]})});function Vd(e,r,n){return r==null||typeof r=="boolean"||r===""?"":n||typeof r!="number"||r===0||Aa.hasOwnProperty(e)&&Aa[e]?(""+r).trim():r+"px"}function Wd(e,r){e=e.style;for(var n in r)if(r.hasOwnProperty(n)){var t=n.indexOf("--")===0,a=Vd(n,r[n],t);n==="float"&&(n="cssFloat"),t?e.setProperty(n,a):e[n]=a}}var W2=Ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qi(e,r){if(r){if(W2[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(V(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(V(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(V(61))}if(r.style!=null&&typeof r.style!="object")throw Error(V(62))}}function Xi(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zi=null;function Jl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ji=null,Qt=null,Xt=null;function y0(e){if(e=bo(e)){if(typeof Ji!="function")throw Error(V(280));var r=e.stateNode;r&&(r=Us(r),Ji(e.stateNode,e.type,r))}}function Ud(e){Qt?Xt?Xt.push(e):Xt=[e]:Qt=e}function Gd(){if(Qt){var e=Qt,r=Xt;if(Xt=Qt=null,y0(e),r)for(e=0;e<r.length;e++)y0(r[e])}}function Yd(e,r){return e(r)}function Kd(){}var pi=!1;function Qd(e,r,n){if(pi)return e(r,n);pi=!0;try{return Yd(e,r,n)}finally{pi=!1,(Qt!==null||Xt!==null)&&(Kd(),Gd())}}function Ya(e,r){var n=e.stateNode;if(n===null)return null;var t=Us(n);if(t===null)return null;n=t[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(e=e.type,t=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!t;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(V(231,r,typeof n));return n}var el=!1;if(Cn)try{var ba={};Object.defineProperty(ba,"passive",{get:function(){el=!0}}),window.addEventListener("test",ba,ba),window.removeEventListener("test",ba,ba)}catch{el=!1}function U2(e,r,n,t,a,o,s,l,c){var u=Array.prototype.slice.call(arguments,3);try{r.apply(n,u)}catch(h){this.onError(h)}}var Da=!1,is=null,ls=!1,rl=null,G2={onError:function(e){Da=!0,is=e}};function Y2(e,r,n,t,a,o,s,l,c){Da=!1,is=null,U2.apply(G2,arguments)}function K2(e,r,n,t,a,o,s,l,c){if(Y2.apply(this,arguments),Da){if(Da){var u=is;Da=!1,is=null}else throw Error(V(198));ls||(ls=!0,rl=u)}}function Ct(e){var r=e,n=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,r.flags&4098&&(n=r.return),e=r.return;while(e)}return r.tag===3?n:null}function Xd(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function _0(e){if(Ct(e)!==e)throw Error(V(188))}function Q2(e){var r=e.alternate;if(!r){if(r=Ct(e),r===null)throw Error(V(188));return r!==e?null:e}for(var n=e,t=r;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(t=a.return,t!==null){n=t;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return _0(a),e;if(o===t)return _0(a),r;o=o.sibling}throw Error(V(188))}if(n.return!==t.return)n=a,t=o;else{for(var s=!1,l=a.child;l;){if(l===n){s=!0,n=a,t=o;break}if(l===t){s=!0,t=a,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,t=a;break}if(l===t){s=!0,t=o,n=a;break}l=l.sibling}if(!s)throw Error(V(189))}}if(n.alternate!==t)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?e:r}function Zd(e){return e=Q2(e),e!==null?Jd(e):null}function Jd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=Jd(e);if(r!==null)return r;e=e.sibling}return null}var ef=Lr.unstable_scheduleCallback,k0=Lr.unstable_cancelCallback,X2=Lr.unstable_shouldYield,Z2=Lr.unstable_requestPaint,Qe=Lr.unstable_now,J2=Lr.unstable_getCurrentPriorityLevel,ec=Lr.unstable_ImmediatePriority,rf=Lr.unstable_UserBlockingPriority,cs=Lr.unstable_NormalPriority,e3=Lr.unstable_LowPriority,nf=Lr.unstable_IdlePriority,Is=null,un=null;function r3(e){if(un&&typeof un.onCommitFiberRoot=="function")try{un.onCommitFiberRoot(Is,e,void 0,(e.current.flags&128)===128)}catch{}}var Xr=Math.clz32?Math.clz32:a3,n3=Math.log,t3=Math.LN2;function a3(e){return e>>>=0,e===0?32:31-(n3(e)/t3|0)|0}var Co=64,Eo=4194304;function Ma(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ds(e,r){var n=e.pendingLanes;if(n===0)return 0;var t=0,a=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~a;l!==0?t=Ma(l):(o&=s,o!==0&&(t=Ma(o)))}else s=n&~a,s!==0?t=Ma(s):o!==0&&(t=Ma(o));if(t===0)return 0;if(r!==0&&r!==t&&!(r&a)&&(a=t&-t,o=r&-r,a>=o||a===16&&(o&4194240)!==0))return r;if(t&4&&(t|=n&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=t;0<r;)n=31-Xr(r),a=1<<n,t|=e[n],r&=~a;return t}function o3(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function s3(e,r){for(var n=e.suspendedLanes,t=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Xr(o),l=1<<s,c=a[s];c===-1?(!(l&n)||l&t)&&(a[s]=o3(l,r)):c<=r&&(e.expiredLanes|=l),o&=~l}}function nl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function tf(){var e=Co;return Co<<=1,!(Co&4194240)&&(Co=64),e}function mi(e){for(var r=[],n=0;31>n;n++)r.push(e);return r}function xo(e,r,n){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Xr(r),e[r]=n}function i3(e,r){var n=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var t=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-Xr(n),o=1<<a;r[a]=0,t[a]=-1,e[a]=-1,n&=~o}}function rc(e,r){var n=e.entangledLanes|=r;for(e=e.entanglements;n;){var t=31-Xr(n),a=1<<t;a&r|e[t]&r&&(e[t]|=r),n&=~a}}var Ae=0;function af(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var of,nc,sf,lf,cf,tl=!1,No=[],Vn=null,Wn=null,Un=null,Ka=new Map,Qa=new Map,On=[],l3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function j0(e,r){switch(e){case"focusin":case"focusout":Vn=null;break;case"dragenter":case"dragleave":Wn=null;break;case"mouseover":case"mouseout":Un=null;break;case"pointerover":case"pointerout":Ka.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qa.delete(r.pointerId)}}function va(e,r,n,t,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:r,domEventName:n,eventSystemFlags:t,nativeEvent:o,targetContainers:[a]},r!==null&&(r=bo(r),r!==null&&nc(r)),e):(e.eventSystemFlags|=t,r=e.targetContainers,a!==null&&r.indexOf(a)===-1&&r.push(a),e)}function c3(e,r,n,t,a){switch(r){case"focusin":return Vn=va(Vn,e,r,n,t,a),!0;case"dragenter":return Wn=va(Wn,e,r,n,t,a),!0;case"mouseover":return Un=va(Un,e,r,n,t,a),!0;case"pointerover":var o=a.pointerId;return Ka.set(o,va(Ka.get(o)||null,e,r,n,t,a)),!0;case"gotpointercapture":return o=a.pointerId,Qa.set(o,va(Qa.get(o)||null,e,r,n,t,a)),!0}return!1}function df(e){var r=ct(e.target);if(r!==null){var n=Ct(r);if(n!==null){if(r=n.tag,r===13){if(r=Xd(n),r!==null){e.blockedOn=r,cf(e.priority,function(){sf(n)});return}}else if(r===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yo(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var n=al(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var t=new n.constructor(n.type,n);Zi=t,n.target.dispatchEvent(t),Zi=null}else return r=bo(n),r!==null&&nc(r),e.blockedOn=n,!1;r.shift()}return!0}function S0(e,r,n){Yo(e)&&n.delete(r)}function d3(){tl=!1,Vn!==null&&Yo(Vn)&&(Vn=null),Wn!==null&&Yo(Wn)&&(Wn=null),Un!==null&&Yo(Un)&&(Un=null),Ka.forEach(S0),Qa.forEach(S0)}function ya(e,r){e.blockedOn===r&&(e.blockedOn=null,tl||(tl=!0,Lr.unstable_scheduleCallback(Lr.unstable_NormalPriority,d3)))}function Xa(e){function r(a){return ya(a,e)}if(0<No.length){ya(No[0],e);for(var n=1;n<No.length;n++){var t=No[n];t.blockedOn===e&&(t.blockedOn=null)}}for(Vn!==null&&ya(Vn,e),Wn!==null&&ya(Wn,e),Un!==null&&ya(Un,e),Ka.forEach(r),Qa.forEach(r),n=0;n<On.length;n++)t=On[n],t.blockedOn===e&&(t.blockedOn=null);for(;0<On.length&&(n=On[0],n.blockedOn===null);)df(n),n.blockedOn===null&&On.shift()}var Zt=Mn.ReactCurrentBatchConfig,fs=!0;function f3(e,r,n,t){var a=Ae,o=Zt.transition;Zt.transition=null;try{Ae=1,tc(e,r,n,t)}finally{Ae=a,Zt.transition=o}}function u3(e,r,n,t){var a=Ae,o=Zt.transition;Zt.transition=null;try{Ae=4,tc(e,r,n,t)}finally{Ae=a,Zt.transition=o}}function tc(e,r,n,t){if(fs){var a=al(e,r,n,t);if(a===null)ji(e,r,t,us,n),j0(e,t);else if(c3(a,e,r,n,t))t.stopPropagation();else if(j0(e,t),r&4&&-1<l3.indexOf(e)){for(;a!==null;){var o=bo(a);if(o!==null&&of(o),o=al(e,r,n,t),o===null&&ji(e,r,t,us,n),o===a)break;a=o}a!==null&&t.stopPropagation()}else ji(e,r,t,null,n)}}var us=null;function al(e,r,n,t){if(us=null,e=Jl(t),e=ct(e),e!==null)if(r=Ct(e),r===null)e=null;else if(n=r.tag,n===13){if(e=Xd(r),e!==null)return e;e=null}else if(n===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return us=e,null}function ff(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(J2()){case ec:return 1;case rf:return 4;case cs:case e3:return 16;case nf:return 536870912;default:return 16}default:return 16}}var qn=null,ac=null,Ko=null;function uf(){if(Ko)return Ko;var e,r=ac,n=r.length,t,a="value"in qn?qn.value:qn.textContent,o=a.length;for(e=0;e<n&&r[e]===a[e];e++);var s=n-e;for(t=1;t<=s&&r[n-t]===a[o-t];t++);return Ko=a.slice(e,1<t?1-t:void 0)}function Qo(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function zo(){return!0}function C0(){return!1}function Rr(e){function r(n,t,a,o,s){this._reactName=n,this._targetInst=a,this.type=t,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?zo:C0,this.isPropagationStopped=C0,this}return Ye(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zo)},persist:function(){},isPersistent:zo}),r}var ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oc=Rr(ma),wo=Ye({},ma,{view:0,detail:0}),p3=Rr(wo),hi,gi,_a,Hs=Ye({},wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_a&&(_a&&e.type==="mousemove"?(hi=e.screenX-_a.screenX,gi=e.screenY-_a.screenY):gi=hi=0,_a=e),hi)},movementY:function(e){return"movementY"in e?e.movementY:gi}}),E0=Rr(Hs),m3=Ye({},Hs,{dataTransfer:0}),h3=Rr(m3),g3=Ye({},wo,{relatedTarget:0}),xi=Rr(g3),x3=Ye({},ma,{animationName:0,elapsedTime:0,pseudoElement:0}),w3=Rr(x3),b3=Ye({},ma,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),v3=Rr(b3),y3=Ye({},ma,{data:0}),N0=Rr(y3),_3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},k3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j3={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function S3(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=j3[e])?!!r[e]:!1}function sc(){return S3}var C3=Ye({},wo,{key:function(e){if(e.key){var r=_3[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=Qo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?k3[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sc,charCode:function(e){return e.type==="keypress"?Qo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),E3=Rr(C3),N3=Ye({},Hs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),z0=Rr(N3),z3=Ye({},wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sc}),M3=Rr(z3),L3=Ye({},ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),$3=Rr(L3),R3=Ye({},Hs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),T3=Rr(R3),A3=[9,13,27,32],ic=Cn&&"CompositionEvent"in window,Pa=null;Cn&&"documentMode"in document&&(Pa=document.documentMode);var D3=Cn&&"TextEvent"in window&&!Pa,pf=Cn&&(!ic||Pa&&8<Pa&&11>=Pa),M0=" ",L0=!1;function mf(e,r){switch(e){case"keyup":return A3.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ft=!1;function P3(e,r){switch(e){case"compositionend":return hf(r);case"keypress":return r.which!==32?null:(L0=!0,M0);case"textInput":return e=r.data,e===M0&&L0?null:e;default:return null}}function F3(e,r){if(Ft)return e==="compositionend"||!ic&&mf(e,r)?(e=uf(),Ko=ac=qn=null,Ft=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return pf&&r.locale!=="ko"?null:r.data;default:return null}}var O3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $0(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!O3[e.type]:r==="textarea"}function gf(e,r,n,t){Ud(t),r=ps(r,"onChange"),0<r.length&&(n=new oc("onChange","change",null,n,t),e.push({event:n,listeners:r}))}var Fa=null,Za=null;function B3(e){Ef(e,0)}function Vs(e){var r=qt(e);if(Od(r))return e}function q3(e,r){if(e==="change")return r}var xf=!1;if(Cn){var wi;if(Cn){var bi="oninput"in document;if(!bi){var R0=document.createElement("div");R0.setAttribute("oninput","return;"),bi=typeof R0.oninput=="function"}wi=bi}else wi=!1;xf=wi&&(!document.documentMode||9<document.documentMode)}function T0(){Fa&&(Fa.detachEvent("onpropertychange",wf),Za=Fa=null)}function wf(e){if(e.propertyName==="value"&&Vs(Za)){var r=[];gf(r,Za,e,Jl(e)),Qd(B3,r)}}function I3(e,r,n){e==="focusin"?(T0(),Fa=r,Za=n,Fa.attachEvent("onpropertychange",wf)):e==="focusout"&&T0()}function H3(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vs(Za)}function V3(e,r){if(e==="click")return Vs(r)}function W3(e,r){if(e==="input"||e==="change")return Vs(r)}function U3(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Jr=typeof Object.is=="function"?Object.is:U3;function Ja(e,r){if(Jr(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var n=Object.keys(e),t=Object.keys(r);if(n.length!==t.length)return!1;for(t=0;t<n.length;t++){var a=n[t];if(!Bi.call(r,a)||!Jr(e[a],r[a]))return!1}return!0}function A0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function D0(e,r){var n=A0(e);e=0;for(var t;n;){if(n.nodeType===3){if(t=e+n.textContent.length,e<=r&&t>=r)return{node:n,offset:r-e};e=t}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=A0(n)}}function bf(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?bf(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function vf(){for(var e=window,r=ss();r instanceof e.HTMLIFrameElement;){try{var n=typeof r.contentWindow.location.href=="string"}catch{n=!1}if(n)e=r.contentWindow;else break;r=ss(e.document)}return r}function lc(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function G3(e){var r=vf(),n=e.focusedElem,t=e.selectionRange;if(r!==n&&n&&n.ownerDocument&&bf(n.ownerDocument.documentElement,n)){if(t!==null&&lc(n)){if(r=t.start,e=t.end,e===void 0&&(e=r),"selectionStart"in n)n.selectionStart=r,n.selectionEnd=Math.min(e,n.value.length);else if(e=(r=n.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,o=Math.min(t.start,a);t=t.end===void 0?o:Math.min(t.end,a),!e.extend&&o>t&&(a=t,t=o,o=a),a=D0(n,o);var s=D0(n,t);a&&s&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(r=r.createRange(),r.setStart(a.node,a.offset),e.removeAllRanges(),o>t?(e.addRange(r),e.extend(s.node,s.offset)):(r.setEnd(s.node,s.offset),e.addRange(r)))}}for(r=[],e=n;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<r.length;n++)e=r[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Y3=Cn&&"documentMode"in document&&11>=document.documentMode,Ot=null,ol=null,Oa=null,sl=!1;function P0(e,r,n){var t=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sl||Ot==null||Ot!==ss(t)||(t=Ot,"selectionStart"in t&&lc(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),Oa&&Ja(Oa,t)||(Oa=t,t=ps(ol,"onSelect"),0<t.length&&(r=new oc("onSelect","select",null,r,n),e.push({event:r,listeners:t}),r.target=Ot)))}function Mo(e,r){var n={};return n[e.toLowerCase()]=r.toLowerCase(),n["Webkit"+e]="webkit"+r,n["Moz"+e]="moz"+r,n}var Bt={animationend:Mo("Animation","AnimationEnd"),animationiteration:Mo("Animation","AnimationIteration"),animationstart:Mo("Animation","AnimationStart"),transitionend:Mo("Transition","TransitionEnd")},vi={},yf={};Cn&&(yf=document.createElement("div").style,"AnimationEvent"in window||(delete Bt.animationend.animation,delete Bt.animationiteration.animation,delete Bt.animationstart.animation),"TransitionEvent"in window||delete Bt.transitionend.transition);function Ws(e){if(vi[e])return vi[e];if(!Bt[e])return e;var r=Bt[e],n;for(n in r)if(r.hasOwnProperty(n)&&n in yf)return vi[e]=r[n];return e}var _f=Ws("animationend"),kf=Ws("animationiteration"),jf=Ws("animationstart"),Sf=Ws("transitionend"),Cf=new Map,F0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rt(e,r){Cf.set(e,r),St(r,[e])}for(var yi=0;yi<F0.length;yi++){var _i=F0[yi],K3=_i.toLowerCase(),Q3=_i[0].toUpperCase()+_i.slice(1);rt(K3,"on"+Q3)}rt(_f,"onAnimationEnd");rt(kf,"onAnimationIteration");rt(jf,"onAnimationStart");rt("dblclick","onDoubleClick");rt("focusin","onFocus");rt("focusout","onBlur");rt(Sf,"onTransitionEnd");ta("onMouseEnter",["mouseout","mouseover"]);ta("onMouseLeave",["mouseout","mouseover"]);ta("onPointerEnter",["pointerout","pointerover"]);ta("onPointerLeave",["pointerout","pointerover"]);St("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));St("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));St("onBeforeInput",["compositionend","keypress","textInput","paste"]);St("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));St("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));St("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var La="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),X3=new Set("cancel close invalid load scroll toggle".split(" ").concat(La));function O0(e,r,n){var t=e.type||"unknown-event";e.currentTarget=n,K2(t,r,void 0,e),e.currentTarget=null}function Ef(e,r){r=(r&4)!==0;for(var n=0;n<e.length;n++){var t=e[n],a=t.event;t=t.listeners;e:{var o=void 0;if(r)for(var s=t.length-1;0<=s;s--){var l=t[s],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&a.isPropagationStopped())break e;O0(a,l,u),o=c}else for(s=0;s<t.length;s++){if(l=t[s],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&a.isPropagationStopped())break e;O0(a,l,u),o=c}}}if(ls)throw e=rl,ls=!1,rl=null,e}function qe(e,r){var n=r[fl];n===void 0&&(n=r[fl]=new Set);var t=e+"__bubble";n.has(t)||(Nf(r,e,2,!1),n.add(t))}function ki(e,r,n){var t=0;r&&(t|=4),Nf(n,e,t,r)}var Lo="_reactListening"+Math.random().toString(36).slice(2);function eo(e){if(!e[Lo]){e[Lo]=!0,Td.forEach(function(n){n!=="selectionchange"&&(X3.has(n)||ki(n,!1,e),ki(n,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Lo]||(r[Lo]=!0,ki("selectionchange",!1,r))}}function Nf(e,r,n,t){switch(ff(r)){case 1:var a=f3;break;case 4:a=u3;break;default:a=tc}n=a.bind(null,r,n,e),a=void 0,!el||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(a=!0),t?a!==void 0?e.addEventListener(r,n,{capture:!0,passive:a}):e.addEventListener(r,n,!0):a!==void 0?e.addEventListener(r,n,{passive:a}):e.addEventListener(r,n,!1)}function ji(e,r,n,t,a){var o=t;if(!(r&1)&&!(r&2)&&t!==null)e:for(;;){if(t===null)return;var s=t.tag;if(s===3||s===4){var l=t.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(s===4)for(s=t.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;s=s.return}for(;l!==null;){if(s=ct(l),s===null)return;if(c=s.tag,c===5||c===6){t=o=s;continue e}l=l.parentNode}}t=t.return}Qd(function(){var u=o,h=Jl(n),f=[];e:{var p=Cf.get(e);if(p!==void 0){var k=oc,_=e;switch(e){case"keypress":if(Qo(n)===0)break e;case"keydown":case"keyup":k=E3;break;case"focusin":_="focus",k=xi;break;case"focusout":_="blur",k=xi;break;case"beforeblur":case"afterblur":k=xi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=E0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=h3;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=M3;break;case _f:case kf:case jf:k=w3;break;case Sf:k=$3;break;case"scroll":k=p3;break;case"wheel":k=T3;break;case"copy":case"cut":case"paste":k=v3;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=z0}var j=(r&4)!==0,C=!j&&e==="scroll",b=j?p!==null?p+"Capture":null:p;j=[];for(var d=u,m;d!==null;){m=d;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,b!==null&&(x=Ya(d,b),x!=null&&j.push(ro(d,x,m)))),C)break;d=d.return}0<j.length&&(p=new k(p,_,null,n,h),f.push({event:p,listeners:j}))}}if(!(r&7)){e:{if(p=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",p&&n!==Zi&&(_=n.relatedTarget||n.fromElement)&&(ct(_)||_[En]))break e;if((k||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,k?(_=n.relatedTarget||n.toElement,k=u,_=_?ct(_):null,_!==null&&(C=Ct(_),_!==C||_.tag!==5&&_.tag!==6)&&(_=null)):(k=null,_=u),k!==_)){if(j=E0,x="onMouseLeave",b="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(j=z0,x="onPointerLeave",b="onPointerEnter",d="pointer"),C=k==null?p:qt(k),m=_==null?p:qt(_),p=new j(x,d+"leave",k,n,h),p.target=C,p.relatedTarget=m,x=null,ct(h)===u&&(j=new j(b,d+"enter",_,n,h),j.target=m,j.relatedTarget=C,x=j),C=x,k&&_)r:{for(j=k,b=_,d=0,m=j;m;m=Lt(m))d++;for(m=0,x=b;x;x=Lt(x))m++;for(;0<d-m;)j=Lt(j),d--;for(;0<m-d;)b=Lt(b),m--;for(;d--;){if(j===b||b!==null&&j===b.alternate)break r;j=Lt(j),b=Lt(b)}j=null}else j=null;k!==null&&B0(f,p,k,j,!1),_!==null&&C!==null&&B0(f,C,_,j,!0)}}e:{if(p=u?qt(u):window,k=p.nodeName&&p.nodeName.toLowerCase(),k==="select"||k==="input"&&p.type==="file")var y=q3;else if($0(p))if(xf)y=W3;else{y=H3;var S=I3}else(k=p.nodeName)&&k.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(y=V3);if(y&&(y=y(e,u))){gf(f,y,n,h);break e}S&&S(e,p,u),e==="focusout"&&(S=p._wrapperState)&&S.controlled&&p.type==="number"&&Gi(p,"number",p.value)}switch(S=u?qt(u):window,e){case"focusin":($0(S)||S.contentEditable==="true")&&(Ot=S,ol=u,Oa=null);break;case"focusout":Oa=ol=Ot=null;break;case"mousedown":sl=!0;break;case"contextmenu":case"mouseup":case"dragend":sl=!1,P0(f,n,h);break;case"selectionchange":if(Y3)break;case"keydown":case"keyup":P0(f,n,h)}var w;if(ic)e:{switch(e){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Ft?mf(e,n)&&(v="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(pf&&n.locale!=="ko"&&(Ft||v!=="onCompositionStart"?v==="onCompositionEnd"&&Ft&&(w=uf()):(qn=h,ac="value"in qn?qn.value:qn.textContent,Ft=!0)),S=ps(u,v),0<S.length&&(v=new N0(v,e,null,n,h),f.push({event:v,listeners:S}),w?v.data=w:(w=hf(n),w!==null&&(v.data=w)))),(w=D3?P3(e,n):F3(e,n))&&(u=ps(u,"onBeforeInput"),0<u.length&&(h=new N0("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:u}),h.data=w))}Ef(f,r)})}function ro(e,r,n){return{instance:e,listener:r,currentTarget:n}}function ps(e,r){for(var n=r+"Capture",t=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=Ya(e,n),o!=null&&t.unshift(ro(e,o,a)),o=Ya(e,r),o!=null&&t.push(ro(e,o,a))),e=e.return}return t}function Lt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function B0(e,r,n,t,a){for(var o=r._reactName,s=[];n!==null&&n!==t;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===t)break;l.tag===5&&u!==null&&(l=u,a?(c=Ya(n,o),c!=null&&s.unshift(ro(n,c,l))):a||(c=Ya(n,o),c!=null&&s.push(ro(n,c,l)))),n=n.return}s.length!==0&&e.push({event:r,listeners:s})}var Z3=/\r\n?/g,J3=/\u0000|\uFFFD/g;function q0(e){return(typeof e=="string"?e:""+e).replace(Z3,`
`).replace(J3,"")}function $o(e,r,n){if(r=q0(r),q0(e)!==r&&n)throw Error(V(425))}function ms(){}var il=null,ll=null;function cl(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var dl=typeof setTimeout=="function"?setTimeout:void 0,em=typeof clearTimeout=="function"?clearTimeout:void 0,I0=typeof Promise=="function"?Promise:void 0,rm=typeof queueMicrotask=="function"?queueMicrotask:typeof I0<"u"?function(e){return I0.resolve(null).then(e).catch(nm)}:dl;function nm(e){setTimeout(function(){throw e})}function Si(e,r){var n=r,t=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(t===0){e.removeChild(a),Xa(r);return}t--}else n!=="$"&&n!=="$?"&&n!=="$!"||t++;n=a}while(n);Xa(r)}function Gn(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function H0(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(r===0)return e;r--}else n==="/$"&&r++}e=e.previousSibling}return null}var ha=Math.random().toString(36).slice(2),fn="__reactFiber$"+ha,no="__reactProps$"+ha,En="__reactContainer$"+ha,fl="__reactEvents$"+ha,tm="__reactListeners$"+ha,am="__reactHandles$"+ha;function ct(e){var r=e[fn];if(r)return r;for(var n=e.parentNode;n;){if(r=n[En]||n[fn]){if(n=r.alternate,r.child!==null||n!==null&&n.child!==null)for(e=H0(e);e!==null;){if(n=e[fn])return n;e=H0(e)}return r}e=n,n=e.parentNode}return null}function bo(e){return e=e[fn]||e[En],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(V(33))}function Us(e){return e[no]||null}var ul=[],It=-1;function nt(e){return{current:e}}function Ie(e){0>It||(e.current=ul[It],ul[It]=null,It--)}function Oe(e,r){It++,ul[It]=e.current,e.current=r}var Jn={},ur=nt(Jn),kr=nt(!1),wt=Jn;function aa(e,r){var n=e.type.contextTypes;if(!n)return Jn;var t=e.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===r)return t.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in n)a[o]=r[o];return t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=a),a}function jr(e){return e=e.childContextTypes,e!=null}function hs(){Ie(kr),Ie(ur)}function V0(e,r,n){if(ur.current!==Jn)throw Error(V(168));Oe(ur,r),Oe(kr,n)}function zf(e,r,n){var t=e.stateNode;if(r=r.childContextTypes,typeof t.getChildContext!="function")return n;t=t.getChildContext();for(var a in t)if(!(a in r))throw Error(V(108,I2(e)||"Unknown",a));return Ye({},n,t)}function gs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Jn,wt=ur.current,Oe(ur,e),Oe(kr,kr.current),!0}function W0(e,r,n){var t=e.stateNode;if(!t)throw Error(V(169));n?(e=zf(e,r,wt),t.__reactInternalMemoizedMergedChildContext=e,Ie(kr),Ie(ur),Oe(ur,e)):Ie(kr),Oe(kr,n)}var vn=null,Gs=!1,Ci=!1;function Mf(e){vn===null?vn=[e]:vn.push(e)}function om(e){Gs=!0,Mf(e)}function tt(){if(!Ci&&vn!==null){Ci=!0;var e=0,r=Ae;try{var n=vn;for(Ae=1;e<n.length;e++){var t=n[e];do t=t(!0);while(t!==null)}vn=null,Gs=!1}catch(a){throw vn!==null&&(vn=vn.slice(e+1)),ef(ec,tt),a}finally{Ae=r,Ci=!1}}return null}var Ht=[],Vt=0,xs=null,ws=0,Pr=[],Fr=0,bt=null,yn=1,_n="";function it(e,r){Ht[Vt++]=ws,Ht[Vt++]=xs,xs=e,ws=r}function Lf(e,r,n){Pr[Fr++]=yn,Pr[Fr++]=_n,Pr[Fr++]=bt,bt=e;var t=yn;e=_n;var a=32-Xr(t)-1;t&=~(1<<a),n+=1;var o=32-Xr(r)+a;if(30<o){var s=a-a%5;o=(t&(1<<s)-1).toString(32),t>>=s,a-=s,yn=1<<32-Xr(r)+a|n<<a|t,_n=o+e}else yn=1<<o|n<<a|t,_n=e}function cc(e){e.return!==null&&(it(e,1),Lf(e,1,0))}function dc(e){for(;e===xs;)xs=Ht[--Vt],Ht[Vt]=null,ws=Ht[--Vt],Ht[Vt]=null;for(;e===bt;)bt=Pr[--Fr],Pr[Fr]=null,_n=Pr[--Fr],Pr[Fr]=null,yn=Pr[--Fr],Pr[Fr]=null}var Mr=null,zr=null,Ve=!1,Qr=null;function $f(e,r){var n=Br(5,null,null,0);n.elementType="DELETED",n.stateNode=r,n.return=e,r=e.deletions,r===null?(e.deletions=[n],e.flags|=16):r.push(n)}function U0(e,r){switch(e.tag){case 5:var n=e.type;return r=r.nodeType!==1||n.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,Mr=e,zr=Gn(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,Mr=e,zr=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(n=bt!==null?{id:yn,overflow:_n}:null,e.memoizedState={dehydrated:r,treeContext:n,retryLane:1073741824},n=Br(18,null,null,0),n.stateNode=r,n.return=e,e.child=n,Mr=e,zr=null,!0):!1;default:return!1}}function pl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ml(e){if(Ve){var r=zr;if(r){var n=r;if(!U0(e,r)){if(pl(e))throw Error(V(418));r=Gn(n.nextSibling);var t=Mr;r&&U0(e,r)?$f(t,n):(e.flags=e.flags&-4097|2,Ve=!1,Mr=e)}}else{if(pl(e))throw Error(V(418));e.flags=e.flags&-4097|2,Ve=!1,Mr=e}}}function G0(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Mr=e}function Ro(e){if(e!==Mr)return!1;if(!Ve)return G0(e),Ve=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!cl(e.type,e.memoizedProps)),r&&(r=zr)){if(pl(e))throw Rf(),Error(V(418));for(;r;)$f(e,r),r=Gn(r.nextSibling)}if(G0(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(r===0){zr=Gn(e.nextSibling);break e}r--}else n!=="$"&&n!=="$!"&&n!=="$?"||r++}e=e.nextSibling}zr=null}}else zr=Mr?Gn(e.stateNode.nextSibling):null;return!0}function Rf(){for(var e=zr;e;)e=Gn(e.nextSibling)}function oa(){zr=Mr=null,Ve=!1}function fc(e){Qr===null?Qr=[e]:Qr.push(e)}var sm=Mn.ReactCurrentBatchConfig;function ka(e,r,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(V(309));var t=n.stateNode}if(!t)throw Error(V(147,e));var a=t,o=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===o?r.ref:(r=function(s){var l=a.refs;s===null?delete l[o]:l[o]=s},r._stringRef=o,r)}if(typeof e!="string")throw Error(V(284));if(!n._owner)throw Error(V(290,e))}return e}function To(e,r){throw e=Object.prototype.toString.call(r),Error(V(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function Y0(e){var r=e._init;return r(e._payload)}function Tf(e){function r(b,d){if(e){var m=b.deletions;m===null?(b.deletions=[d],b.flags|=16):m.push(d)}}function n(b,d){if(!e)return null;for(;d!==null;)r(b,d),d=d.sibling;return null}function t(b,d){for(b=new Map;d!==null;)d.key!==null?b.set(d.key,d):b.set(d.index,d),d=d.sibling;return b}function a(b,d){return b=Xn(b,d),b.index=0,b.sibling=null,b}function o(b,d,m){return b.index=m,e?(m=b.alternate,m!==null?(m=m.index,m<d?(b.flags|=2,d):m):(b.flags|=2,d)):(b.flags|=1048576,d)}function s(b){return e&&b.alternate===null&&(b.flags|=2),b}function l(b,d,m,x){return d===null||d.tag!==6?(d=Ri(m,b.mode,x),d.return=b,d):(d=a(d,m),d.return=b,d)}function c(b,d,m,x){var y=m.type;return y===Pt?h(b,d,m.props.children,x,m.key):d!==null&&(d.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===Pn&&Y0(y)===d.type)?(x=a(d,m.props),x.ref=ka(b,d,m),x.return=b,x):(x=ts(m.type,m.key,m.props,null,b.mode,x),x.ref=ka(b,d,m),x.return=b,x)}function u(b,d,m,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=Ti(m,b.mode,x),d.return=b,d):(d=a(d,m.children||[]),d.return=b,d)}function h(b,d,m,x,y){return d===null||d.tag!==7?(d=mt(m,b.mode,x,y),d.return=b,d):(d=a(d,m),d.return=b,d)}function f(b,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Ri(""+d,b.mode,m),d.return=b,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ko:return m=ts(d.type,d.key,d.props,null,b.mode,m),m.ref=ka(b,null,d),m.return=b,m;case Dt:return d=Ti(d,b.mode,m),d.return=b,d;case Pn:var x=d._init;return f(b,x(d._payload),m)}if(za(d)||wa(d))return d=mt(d,b.mode,m,null),d.return=b,d;To(b,d)}return null}function p(b,d,m,x){var y=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return y!==null?null:l(b,d,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ko:return m.key===y?c(b,d,m,x):null;case Dt:return m.key===y?u(b,d,m,x):null;case Pn:return y=m._init,p(b,d,y(m._payload),x)}if(za(m)||wa(m))return y!==null?null:h(b,d,m,x,null);To(b,m)}return null}function k(b,d,m,x,y){if(typeof x=="string"&&x!==""||typeof x=="number")return b=b.get(m)||null,l(d,b,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ko:return b=b.get(x.key===null?m:x.key)||null,c(d,b,x,y);case Dt:return b=b.get(x.key===null?m:x.key)||null,u(d,b,x,y);case Pn:var S=x._init;return k(b,d,m,S(x._payload),y)}if(za(x)||wa(x))return b=b.get(m)||null,h(d,b,x,y,null);To(d,x)}return null}function _(b,d,m,x){for(var y=null,S=null,w=d,v=d=0,g=null;w!==null&&v<m.length;v++){w.index>v?(g=w,w=null):g=w.sibling;var E=p(b,w,m[v],x);if(E===null){w===null&&(w=g);break}e&&w&&E.alternate===null&&r(b,w),d=o(E,d,v),S===null?y=E:S.sibling=E,S=E,w=g}if(v===m.length)return n(b,w),Ve&&it(b,v),y;if(w===null){for(;v<m.length;v++)w=f(b,m[v],x),w!==null&&(d=o(w,d,v),S===null?y=w:S.sibling=w,S=w);return Ve&&it(b,v),y}for(w=t(b,w);v<m.length;v++)g=k(w,b,v,m[v],x),g!==null&&(e&&g.alternate!==null&&w.delete(g.key===null?v:g.key),d=o(g,d,v),S===null?y=g:S.sibling=g,S=g);return e&&w.forEach(function(N){return r(b,N)}),Ve&&it(b,v),y}function j(b,d,m,x){var y=wa(m);if(typeof y!="function")throw Error(V(150));if(m=y.call(m),m==null)throw Error(V(151));for(var S=y=null,w=d,v=d=0,g=null,E=m.next();w!==null&&!E.done;v++,E=m.next()){w.index>v?(g=w,w=null):g=w.sibling;var N=p(b,w,E.value,x);if(N===null){w===null&&(w=g);break}e&&w&&N.alternate===null&&r(b,w),d=o(N,d,v),S===null?y=N:S.sibling=N,S=N,w=g}if(E.done)return n(b,w),Ve&&it(b,v),y;if(w===null){for(;!E.done;v++,E=m.next())E=f(b,E.value,x),E!==null&&(d=o(E,d,v),S===null?y=E:S.sibling=E,S=E);return Ve&&it(b,v),y}for(w=t(b,w);!E.done;v++,E=m.next())E=k(w,b,v,E.value,x),E!==null&&(e&&E.alternate!==null&&w.delete(E.key===null?v:E.key),d=o(E,d,v),S===null?y=E:S.sibling=E,S=E);return e&&w.forEach(function(M){return r(b,M)}),Ve&&it(b,v),y}function C(b,d,m,x){if(typeof m=="object"&&m!==null&&m.type===Pt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ko:e:{for(var y=m.key,S=d;S!==null;){if(S.key===y){if(y=m.type,y===Pt){if(S.tag===7){n(b,S.sibling),d=a(S,m.props.children),d.return=b,b=d;break e}}else if(S.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===Pn&&Y0(y)===S.type){n(b,S.sibling),d=a(S,m.props),d.ref=ka(b,S,m),d.return=b,b=d;break e}n(b,S);break}else r(b,S);S=S.sibling}m.type===Pt?(d=mt(m.props.children,b.mode,x,m.key),d.return=b,b=d):(x=ts(m.type,m.key,m.props,null,b.mode,x),x.ref=ka(b,d,m),x.return=b,b=x)}return s(b);case Dt:e:{for(S=m.key;d!==null;){if(d.key===S)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(b,d.sibling),d=a(d,m.children||[]),d.return=b,b=d;break e}else{n(b,d);break}else r(b,d);d=d.sibling}d=Ti(m,b.mode,x),d.return=b,b=d}return s(b);case Pn:return S=m._init,C(b,d,S(m._payload),x)}if(za(m))return _(b,d,m,x);if(wa(m))return j(b,d,m,x);To(b,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(b,d.sibling),d=a(d,m),d.return=b,b=d):(n(b,d),d=Ri(m,b.mode,x),d.return=b,b=d),s(b)):n(b,d)}return C}var sa=Tf(!0),Af=Tf(!1),bs=nt(null),vs=null,Wt=null,uc=null;function pc(){uc=Wt=vs=null}function mc(e){var r=bs.current;Ie(bs),e._currentValue=r}function hl(e,r,n){for(;e!==null;){var t=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,t!==null&&(t.childLanes|=r)):t!==null&&(t.childLanes&r)!==r&&(t.childLanes|=r),e===n)break;e=e.return}}function Jt(e,r){vs=e,uc=Wt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&r&&(_r=!0),e.firstContext=null)}function Ir(e){var r=e._currentValue;if(uc!==e)if(e={context:e,memoizedValue:r,next:null},Wt===null){if(vs===null)throw Error(V(308));Wt=e,vs.dependencies={lanes:0,firstContext:e}}else Wt=Wt.next=e;return r}var dt=null;function hc(e){dt===null?dt=[e]:dt.push(e)}function Df(e,r,n,t){var a=r.interleaved;return a===null?(n.next=n,hc(r)):(n.next=a.next,a.next=n),r.interleaved=n,Nn(e,t)}function Nn(e,r){e.lanes|=r;var n=e.alternate;for(n!==null&&(n.lanes|=r),n=e,e=e.return;e!==null;)e.childLanes|=r,n=e.alternate,n!==null&&(n.childLanes|=r),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Fn=!1;function gc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pf(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function jn(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function Yn(e,r,n){var t=e.updateQueue;if(t===null)return null;if(t=t.shared,Le&2){var a=t.pending;return a===null?r.next=r:(r.next=a.next,a.next=r),t.pending=r,Nn(e,n)}return a=t.interleaved,a===null?(r.next=r,hc(t)):(r.next=a.next,a.next=r),t.interleaved=r,Nn(e,n)}function Xo(e,r,n){if(r=r.updateQueue,r!==null&&(r=r.shared,(n&4194240)!==0)){var t=r.lanes;t&=e.pendingLanes,n|=t,r.lanes=n,rc(e,n)}}function K0(e,r){var n=e.updateQueue,t=e.alternate;if(t!==null&&(t=t.updateQueue,n===t)){var a=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?a=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?a=o=r:o=o.next=r}else a=o=r;n={baseState:t.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:t.shared,effects:t.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=r:e.next=r,n.lastBaseUpdate=r}function ys(e,r,n,t){var a=e.updateQueue;Fn=!1;var o=a.firstBaseUpdate,s=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var c=l,u=c.next;c.next=null,s===null?o=u:s.next=u,s=c;var h=e.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==s&&(l===null?h.firstBaseUpdate=u:l.next=u,h.lastBaseUpdate=c))}if(o!==null){var f=a.baseState;s=0,h=u=c=null,l=o;do{var p=l.lane,k=l.eventTime;if((t&p)===p){h!==null&&(h=h.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=e,j=l;switch(p=r,k=n,j.tag){case 1:if(_=j.payload,typeof _=="function"){f=_.call(k,f,p);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=j.payload,p=typeof _=="function"?_.call(k,f,p):_,p==null)break e;f=Ye({},f,p);break e;case 2:Fn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=a.effects,p===null?a.effects=[l]:p.push(l))}else k={eventTime:k,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(u=h=k,c=f):h=h.next=k,s|=p;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;p=l,l=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);if(h===null&&(c=f),a.baseState=c,a.firstBaseUpdate=u,a.lastBaseUpdate=h,r=a.shared.interleaved,r!==null){a=r;do s|=a.lane,a=a.next;while(a!==r)}else o===null&&(a.shared.lanes=0);yt|=s,e.lanes=s,e.memoizedState=f}}function Q0(e,r,n){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var t=e[r],a=t.callback;if(a!==null){if(t.callback=null,t=n,typeof a!="function")throw Error(V(191,a));a.call(t)}}}var vo={},pn=nt(vo),to=nt(vo),ao=nt(vo);function ft(e){if(e===vo)throw Error(V(174));return e}function xc(e,r){switch(Oe(ao,r),Oe(to,e),Oe(pn,vo),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Ki(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=Ki(r,e)}Ie(pn),Oe(pn,r)}function ia(){Ie(pn),Ie(to),Ie(ao)}function Ff(e){ft(ao.current);var r=ft(pn.current),n=Ki(r,e.type);r!==n&&(Oe(to,e),Oe(pn,n))}function wc(e){to.current===e&&(Ie(pn),Ie(to))}var Ue=nt(0);function _s(e){for(var r=e;r!==null;){if(r.tag===13){var n=r.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ei=[];function bc(){for(var e=0;e<Ei.length;e++)Ei[e]._workInProgressVersionPrimary=null;Ei.length=0}var Zo=Mn.ReactCurrentDispatcher,Ni=Mn.ReactCurrentBatchConfig,vt=0,Ge=null,er=null,nr=null,ks=!1,Ba=!1,oo=0,im=0;function lr(){throw Error(V(321))}function vc(e,r){if(r===null)return!1;for(var n=0;n<r.length&&n<e.length;n++)if(!Jr(e[n],r[n]))return!1;return!0}function yc(e,r,n,t,a,o){if(vt=o,Ge=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Zo.current=e===null||e.memoizedState===null?fm:um,e=n(t,a),Ba){o=0;do{if(Ba=!1,oo=0,25<=o)throw Error(V(301));o+=1,nr=er=null,r.updateQueue=null,Zo.current=pm,e=n(t,a)}while(Ba)}if(Zo.current=js,r=er!==null&&er.next!==null,vt=0,nr=er=Ge=null,ks=!1,r)throw Error(V(300));return e}function _c(){var e=oo!==0;return oo=0,e}function dn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nr===null?Ge.memoizedState=nr=e:nr=nr.next=e,nr}function Hr(){if(er===null){var e=Ge.alternate;e=e!==null?e.memoizedState:null}else e=er.next;var r=nr===null?Ge.memoizedState:nr.next;if(r!==null)nr=r,er=e;else{if(e===null)throw Error(V(310));er=e,e={memoizedState:er.memoizedState,baseState:er.baseState,baseQueue:er.baseQueue,queue:er.queue,next:null},nr===null?Ge.memoizedState=nr=e:nr=nr.next=e}return nr}function so(e,r){return typeof r=="function"?r(e):r}function zi(e){var r=Hr(),n=r.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var t=er,a=t.baseQueue,o=n.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,t=t.baseState;var l=s=null,c=null,u=o;do{var h=u.lane;if((vt&h)===h)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),t=u.hasEagerState?u.eagerState:e(t,u.action);else{var f={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=f,s=t):c=c.next=f,Ge.lanes|=h,yt|=h}u=u.next}while(u!==null&&u!==o);c===null?s=t:c.next=l,Jr(t,r.memoizedState)||(_r=!0),r.memoizedState=t,r.baseState=s,r.baseQueue=c,n.lastRenderedState=t}if(e=n.interleaved,e!==null){a=e;do o=a.lane,Ge.lanes|=o,yt|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[r.memoizedState,n.dispatch]}function Mi(e){var r=Hr(),n=r.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var t=n.dispatch,a=n.pending,o=r.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Jr(o,r.memoizedState)||(_r=!0),r.memoizedState=o,r.baseQueue===null&&(r.baseState=o),n.lastRenderedState=o}return[o,t]}function Of(){}function Bf(e,r){var n=Ge,t=Hr(),a=r(),o=!Jr(t.memoizedState,a);if(o&&(t.memoizedState=a,_r=!0),t=t.queue,kc(Hf.bind(null,n,t,e),[e]),t.getSnapshot!==r||o||nr!==null&&nr.memoizedState.tag&1){if(n.flags|=2048,io(9,If.bind(null,n,t,a,r),void 0,null),ar===null)throw Error(V(349));vt&30||qf(n,r,a)}return a}function qf(e,r,n){e.flags|=16384,e={getSnapshot:r,value:n},r=Ge.updateQueue,r===null?(r={lastEffect:null,stores:null},Ge.updateQueue=r,r.stores=[e]):(n=r.stores,n===null?r.stores=[e]:n.push(e))}function If(e,r,n,t){r.value=n,r.getSnapshot=t,Vf(r)&&Wf(e)}function Hf(e,r,n){return n(function(){Vf(r)&&Wf(e)})}function Vf(e){var r=e.getSnapshot;e=e.value;try{var n=r();return!Jr(e,n)}catch{return!0}}function Wf(e){var r=Nn(e,1);r!==null&&Zr(r,e,1,-1)}function X0(e){var r=dn();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:so,lastRenderedState:e},r.queue=e,e=e.dispatch=dm.bind(null,Ge,e),[r.memoizedState,e]}function io(e,r,n,t){return e={tag:e,create:r,destroy:n,deps:t,next:null},r=Ge.updateQueue,r===null?(r={lastEffect:null,stores:null},Ge.updateQueue=r,r.lastEffect=e.next=e):(n=r.lastEffect,n===null?r.lastEffect=e.next=e:(t=n.next,n.next=e,e.next=t,r.lastEffect=e)),e}function Uf(){return Hr().memoizedState}function Jo(e,r,n,t){var a=dn();Ge.flags|=e,a.memoizedState=io(1|r,n,void 0,t===void 0?null:t)}function Ys(e,r,n,t){var a=Hr();t=t===void 0?null:t;var o=void 0;if(er!==null){var s=er.memoizedState;if(o=s.destroy,t!==null&&vc(t,s.deps)){a.memoizedState=io(r,n,o,t);return}}Ge.flags|=e,a.memoizedState=io(1|r,n,o,t)}function Z0(e,r){return Jo(8390656,8,e,r)}function kc(e,r){return Ys(2048,8,e,r)}function Gf(e,r){return Ys(4,2,e,r)}function Yf(e,r){return Ys(4,4,e,r)}function Kf(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function Qf(e,r,n){return n=n!=null?n.concat([e]):null,Ys(4,4,Kf.bind(null,r,e),n)}function jc(){}function Xf(e,r){var n=Hr();r=r===void 0?null:r;var t=n.memoizedState;return t!==null&&r!==null&&vc(r,t[1])?t[0]:(n.memoizedState=[e,r],e)}function Zf(e,r){var n=Hr();r=r===void 0?null:r;var t=n.memoizedState;return t!==null&&r!==null&&vc(r,t[1])?t[0]:(e=e(),n.memoizedState=[e,r],e)}function Jf(e,r,n){return vt&21?(Jr(n,r)||(n=tf(),Ge.lanes|=n,yt|=n,e.baseState=!0),r):(e.baseState&&(e.baseState=!1,_r=!0),e.memoizedState=n)}function lm(e,r){var n=Ae;Ae=n!==0&&4>n?n:4,e(!0);var t=Ni.transition;Ni.transition={};try{e(!1),r()}finally{Ae=n,Ni.transition=t}}function eu(){return Hr().memoizedState}function cm(e,r,n){var t=Qn(e);if(n={lane:t,action:n,hasEagerState:!1,eagerState:null,next:null},ru(e))nu(r,n);else if(n=Df(e,r,n,t),n!==null){var a=mr();Zr(n,e,t,a),tu(n,r,t)}}function dm(e,r,n){var t=Qn(e),a={lane:t,action:n,hasEagerState:!1,eagerState:null,next:null};if(ru(e))nu(r,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=r.lastRenderedReducer,o!==null))try{var s=r.lastRenderedState,l=o(s,n);if(a.hasEagerState=!0,a.eagerState=l,Jr(l,s)){var c=r.interleaved;c===null?(a.next=a,hc(r)):(a.next=c.next,c.next=a),r.interleaved=a;return}}catch{}finally{}n=Df(e,r,a,t),n!==null&&(a=mr(),Zr(n,e,t,a),tu(n,r,t))}}function ru(e){var r=e.alternate;return e===Ge||r!==null&&r===Ge}function nu(e,r){Ba=ks=!0;var n=e.pending;n===null?r.next=r:(r.next=n.next,n.next=r),e.pending=r}function tu(e,r,n){if(n&4194240){var t=r.lanes;t&=e.pendingLanes,n|=t,r.lanes=n,rc(e,n)}}var js={readContext:Ir,useCallback:lr,useContext:lr,useEffect:lr,useImperativeHandle:lr,useInsertionEffect:lr,useLayoutEffect:lr,useMemo:lr,useReducer:lr,useRef:lr,useState:lr,useDebugValue:lr,useDeferredValue:lr,useTransition:lr,useMutableSource:lr,useSyncExternalStore:lr,useId:lr,unstable_isNewReconciler:!1},fm={readContext:Ir,useCallback:function(e,r){return dn().memoizedState=[e,r===void 0?null:r],e},useContext:Ir,useEffect:Z0,useImperativeHandle:function(e,r,n){return n=n!=null?n.concat([e]):null,Jo(4194308,4,Kf.bind(null,r,e),n)},useLayoutEffect:function(e,r){return Jo(4194308,4,e,r)},useInsertionEffect:function(e,r){return Jo(4,2,e,r)},useMemo:function(e,r){var n=dn();return r=r===void 0?null:r,e=e(),n.memoizedState=[e,r],e},useReducer:function(e,r,n){var t=dn();return r=n!==void 0?n(r):r,t.memoizedState=t.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},t.queue=e,e=e.dispatch=cm.bind(null,Ge,e),[t.memoizedState,e]},useRef:function(e){var r=dn();return e={current:e},r.memoizedState=e},useState:X0,useDebugValue:jc,useDeferredValue:function(e){return dn().memoizedState=e},useTransition:function(){var e=X0(!1),r=e[0];return e=lm.bind(null,e[1]),dn().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,n){var t=Ge,a=dn();if(Ve){if(n===void 0)throw Error(V(407));n=n()}else{if(n=r(),ar===null)throw Error(V(349));vt&30||qf(t,r,n)}a.memoizedState=n;var o={value:n,getSnapshot:r};return a.queue=o,Z0(Hf.bind(null,t,o,e),[e]),t.flags|=2048,io(9,If.bind(null,t,o,n,r),void 0,null),n},useId:function(){var e=dn(),r=ar.identifierPrefix;if(Ve){var n=_n,t=yn;n=(t&~(1<<32-Xr(t)-1)).toString(32)+n,r=":"+r+"R"+n,n=oo++,0<n&&(r+="H"+n.toString(32)),r+=":"}else n=im++,r=":"+r+"r"+n.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},um={readContext:Ir,useCallback:Xf,useContext:Ir,useEffect:kc,useImperativeHandle:Qf,useInsertionEffect:Gf,useLayoutEffect:Yf,useMemo:Zf,useReducer:zi,useRef:Uf,useState:function(){return zi(so)},useDebugValue:jc,useDeferredValue:function(e){var r=Hr();return Jf(r,er.memoizedState,e)},useTransition:function(){var e=zi(so)[0],r=Hr().memoizedState;return[e,r]},useMutableSource:Of,useSyncExternalStore:Bf,useId:eu,unstable_isNewReconciler:!1},pm={readContext:Ir,useCallback:Xf,useContext:Ir,useEffect:kc,useImperativeHandle:Qf,useInsertionEffect:Gf,useLayoutEffect:Yf,useMemo:Zf,useReducer:Mi,useRef:Uf,useState:function(){return Mi(so)},useDebugValue:jc,useDeferredValue:function(e){var r=Hr();return er===null?r.memoizedState=e:Jf(r,er.memoizedState,e)},useTransition:function(){var e=Mi(so)[0],r=Hr().memoizedState;return[e,r]},useMutableSource:Of,useSyncExternalStore:Bf,useId:eu,unstable_isNewReconciler:!1};function Yr(e,r){if(e&&e.defaultProps){r=Ye({},r),e=e.defaultProps;for(var n in e)r[n]===void 0&&(r[n]=e[n]);return r}return r}function gl(e,r,n,t){r=e.memoizedState,n=n(t,r),n=n==null?r:Ye({},r,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ks={isMounted:function(e){return(e=e._reactInternals)?Ct(e)===e:!1},enqueueSetState:function(e,r,n){e=e._reactInternals;var t=mr(),a=Qn(e),o=jn(t,a);o.payload=r,n!=null&&(o.callback=n),r=Yn(e,o,a),r!==null&&(Zr(r,e,a,t),Xo(r,e,a))},enqueueReplaceState:function(e,r,n){e=e._reactInternals;var t=mr(),a=Qn(e),o=jn(t,a);o.tag=1,o.payload=r,n!=null&&(o.callback=n),r=Yn(e,o,a),r!==null&&(Zr(r,e,a,t),Xo(r,e,a))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var n=mr(),t=Qn(e),a=jn(n,t);a.tag=2,r!=null&&(a.callback=r),r=Yn(e,a,t),r!==null&&(Zr(r,e,t,n),Xo(r,e,t))}};function J0(e,r,n,t,a,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(t,o,s):r.prototype&&r.prototype.isPureReactComponent?!Ja(n,t)||!Ja(a,o):!0}function au(e,r,n){var t=!1,a=Jn,o=r.contextType;return typeof o=="object"&&o!==null?o=Ir(o):(a=jr(r)?wt:ur.current,t=r.contextTypes,o=(t=t!=null)?aa(e,a):Jn),r=new r(n,o),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ks,e.stateNode=r,r._reactInternals=e,t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),r}function e1(e,r,n,t){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(n,t),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(n,t),r.state!==e&&Ks.enqueueReplaceState(r,r.state,null)}function xl(e,r,n,t){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},gc(e);var o=r.contextType;typeof o=="object"&&o!==null?a.context=Ir(o):(o=jr(r)?wt:ur.current,a.context=aa(e,o)),a.state=e.memoizedState,o=r.getDerivedStateFromProps,typeof o=="function"&&(gl(e,r,o,n),a.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&Ks.enqueueReplaceState(a,a.state,null),ys(e,n,a,t),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function la(e,r){try{var n="",t=r;do n+=q2(t),t=t.return;while(t);var a=n}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:r,stack:a,digest:null}}function Li(e,r,n){return{value:e,source:null,stack:n??null,digest:r??null}}function wl(e,r){try{console.error(r.value)}catch(n){setTimeout(function(){throw n})}}var mm=typeof WeakMap=="function"?WeakMap:Map;function ou(e,r,n){n=jn(-1,n),n.tag=3,n.payload={element:null};var t=r.value;return n.callback=function(){Cs||(Cs=!0,Nl=t),wl(e,r)},n}function su(e,r,n){n=jn(-1,n),n.tag=3;var t=e.type.getDerivedStateFromError;if(typeof t=="function"){var a=r.value;n.payload=function(){return t(a)},n.callback=function(){wl(e,r)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){wl(e,r),typeof t!="function"&&(Kn===null?Kn=new Set([this]):Kn.add(this));var s=r.stack;this.componentDidCatch(r.value,{componentStack:s!==null?s:""})}),n}function r1(e,r,n){var t=e.pingCache;if(t===null){t=e.pingCache=new mm;var a=new Set;t.set(r,a)}else a=t.get(r),a===void 0&&(a=new Set,t.set(r,a));a.has(n)||(a.add(n),e=Nm.bind(null,e,r,n),r.then(e,e))}function n1(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function t1(e,r,n,t,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===r?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(r=jn(-1,1),r.tag=2,Yn(n,r,1))),n.lanes|=1),e)}var hm=Mn.ReactCurrentOwner,_r=!1;function pr(e,r,n,t){r.child=e===null?Af(r,null,n,t):sa(r,e.child,n,t)}function a1(e,r,n,t,a){n=n.render;var o=r.ref;return Jt(r,a),t=yc(e,r,n,t,o,a),n=_c(),e!==null&&!_r?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~a,zn(e,r,a)):(Ve&&n&&cc(r),r.flags|=1,pr(e,r,t,a),r.child)}function o1(e,r,n,t,a){if(e===null){var o=n.type;return typeof o=="function"&&!$c(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(r.tag=15,r.type=o,iu(e,r,o,t,a)):(e=ts(n.type,null,t,r,r.mode,a),e.ref=r.ref,e.return=r,r.child=e)}if(o=e.child,!(e.lanes&a)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ja,n(s,t)&&e.ref===r.ref)return zn(e,r,a)}return r.flags|=1,e=Xn(o,t),e.ref=r.ref,e.return=r,r.child=e}function iu(e,r,n,t,a){if(e!==null){var o=e.memoizedProps;if(Ja(o,t)&&e.ref===r.ref)if(_r=!1,r.pendingProps=t=o,(e.lanes&a)!==0)e.flags&131072&&(_r=!0);else return r.lanes=e.lanes,zn(e,r,a)}return bl(e,r,n,t,a)}function lu(e,r,n){var t=r.pendingProps,a=t.children,o=e!==null?e.memoizedState:null;if(t.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Oe(Gt,Er),Er|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,Oe(Gt,Er),Er|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=o!==null?o.baseLanes:n,Oe(Gt,Er),Er|=t}else o!==null?(t=o.baseLanes|n,r.memoizedState=null):t=n,Oe(Gt,Er),Er|=t;return pr(e,r,a,n),r.child}function cu(e,r){var n=r.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(r.flags|=512,r.flags|=2097152)}function bl(e,r,n,t,a){var o=jr(n)?wt:ur.current;return o=aa(r,o),Jt(r,a),n=yc(e,r,n,t,o,a),t=_c(),e!==null&&!_r?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~a,zn(e,r,a)):(Ve&&t&&cc(r),r.flags|=1,pr(e,r,n,a),r.child)}function s1(e,r,n,t,a){if(jr(n)){var o=!0;gs(r)}else o=!1;if(Jt(r,a),r.stateNode===null)es(e,r),au(r,n,t),xl(r,n,t,a),t=!0;else if(e===null){var s=r.stateNode,l=r.memoizedProps;s.props=l;var c=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ir(u):(u=jr(n)?wt:ur.current,u=aa(r,u));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==t||c!==u)&&e1(r,s,t,u),Fn=!1;var p=r.memoizedState;s.state=p,ys(r,t,s,a),c=r.memoizedState,l!==t||p!==c||kr.current||Fn?(typeof h=="function"&&(gl(r,n,h,t),c=r.memoizedState),(l=Fn||J0(r,n,l,t,p,c,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(r.flags|=4194308)):(typeof s.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=t,r.memoizedState=c),s.props=t,s.state=c,s.context=u,t=l):(typeof s.componentDidMount=="function"&&(r.flags|=4194308),t=!1)}else{s=r.stateNode,Pf(e,r),l=r.memoizedProps,u=r.type===r.elementType?l:Yr(r.type,l),s.props=u,f=r.pendingProps,p=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ir(c):(c=jr(n)?wt:ur.current,c=aa(r,c));var k=n.getDerivedStateFromProps;(h=typeof k=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==f||p!==c)&&e1(r,s,t,c),Fn=!1,p=r.memoizedState,s.state=p,ys(r,t,s,a);var _=r.memoizedState;l!==f||p!==_||kr.current||Fn?(typeof k=="function"&&(gl(r,n,k,t),_=r.memoizedState),(u=Fn||J0(r,n,u,t,p,_,c)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(t,_,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(t,_,c)),typeof s.componentDidUpdate=="function"&&(r.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(r.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(r.flags|=1024),r.memoizedProps=t,r.memoizedState=_),s.props=t,s.state=_,s.context=c,t=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(r.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(r.flags|=1024),t=!1)}return vl(e,r,n,t,o,a)}function vl(e,r,n,t,a,o){cu(e,r);var s=(r.flags&128)!==0;if(!t&&!s)return a&&W0(r,n,!1),zn(e,r,o);t=r.stateNode,hm.current=r;var l=s&&typeof n.getDerivedStateFromError!="function"?null:t.render();return r.flags|=1,e!==null&&s?(r.child=sa(r,e.child,null,o),r.child=sa(r,null,l,o)):pr(e,r,l,o),r.memoizedState=t.state,a&&W0(r,n,!0),r.child}function du(e){var r=e.stateNode;r.pendingContext?V0(e,r.pendingContext,r.pendingContext!==r.context):r.context&&V0(e,r.context,!1),xc(e,r.containerInfo)}function i1(e,r,n,t,a){return oa(),fc(a),r.flags|=256,pr(e,r,n,t),r.child}var yl={dehydrated:null,treeContext:null,retryLane:0};function _l(e){return{baseLanes:e,cachePool:null,transitions:null}}function fu(e,r,n){var t=r.pendingProps,a=Ue.current,o=!1,s=(r.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(o=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Oe(Ue,a&1),e===null)return ml(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(r.mode&1?e.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(s=t.children,e=t.fallback,o?(t=r.mode,o=r.child,s={mode:"hidden",children:s},!(t&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Zs(s,t,0,null),e=mt(e,t,n,null),o.return=r,e.return=r,o.sibling=e,r.child=o,r.child.memoizedState=_l(n),r.memoizedState=yl,e):Sc(r,s));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return gm(e,r,s,t,l,a,n);if(o){o=t.fallback,s=r.mode,a=e.child,l=a.sibling;var c={mode:"hidden",children:t.children};return!(s&1)&&r.child!==a?(t=r.child,t.childLanes=0,t.pendingProps=c,r.deletions=null):(t=Xn(a,c),t.subtreeFlags=a.subtreeFlags&14680064),l!==null?o=Xn(l,o):(o=mt(o,s,n,null),o.flags|=2),o.return=r,t.return=r,t.sibling=o,r.child=t,t=o,o=r.child,s=e.child.memoizedState,s=s===null?_l(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,r.memoizedState=yl,t}return o=e.child,e=o.sibling,t=Xn(o,{mode:"visible",children:t.children}),!(r.mode&1)&&(t.lanes=n),t.return=r,t.sibling=null,e!==null&&(n=r.deletions,n===null?(r.deletions=[e],r.flags|=16):n.push(e)),r.child=t,r.memoizedState=null,t}function Sc(e,r){return r=Zs({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function Ao(e,r,n,t){return t!==null&&fc(t),sa(r,e.child,null,n),e=Sc(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function gm(e,r,n,t,a,o,s){if(n)return r.flags&256?(r.flags&=-257,t=Li(Error(V(422))),Ao(e,r,s,t)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(o=t.fallback,a=r.mode,t=Zs({mode:"visible",children:t.children},a,0,null),o=mt(o,a,s,null),o.flags|=2,t.return=r,o.return=r,t.sibling=o,r.child=t,r.mode&1&&sa(r,e.child,null,s),r.child.memoizedState=_l(s),r.memoizedState=yl,o);if(!(r.mode&1))return Ao(e,r,s,null);if(a.data==="$!"){if(t=a.nextSibling&&a.nextSibling.dataset,t)var l=t.dgst;return t=l,o=Error(V(419)),t=Li(o,t,void 0),Ao(e,r,s,t)}if(l=(s&e.childLanes)!==0,_r||l){if(t=ar,t!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(t.suspendedLanes|s)?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,Nn(e,a),Zr(t,e,a,-1))}return Lc(),t=Li(Error(V(421))),Ao(e,r,s,t)}return a.data==="$?"?(r.flags|=128,r.child=e.child,r=zm.bind(null,e),a._reactRetry=r,null):(e=o.treeContext,zr=Gn(a.nextSibling),Mr=r,Ve=!0,Qr=null,e!==null&&(Pr[Fr++]=yn,Pr[Fr++]=_n,Pr[Fr++]=bt,yn=e.id,_n=e.overflow,bt=r),r=Sc(r,t.children),r.flags|=4096,r)}function l1(e,r,n){e.lanes|=r;var t=e.alternate;t!==null&&(t.lanes|=r),hl(e.return,r,n)}function $i(e,r,n,t,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:t,tail:n,tailMode:a}:(o.isBackwards=r,o.rendering=null,o.renderingStartTime=0,o.last=t,o.tail=n,o.tailMode=a)}function uu(e,r,n){var t=r.pendingProps,a=t.revealOrder,o=t.tail;if(pr(e,r,t.children,n),t=Ue.current,t&2)t=t&1|2,r.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&l1(e,n,r);else if(e.tag===19)l1(e,n,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}t&=1}if(Oe(Ue,t),!(r.mode&1))r.memoizedState=null;else switch(a){case"forwards":for(n=r.child,a=null;n!==null;)e=n.alternate,e!==null&&_s(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=r.child,r.child=null):(a=n.sibling,n.sibling=null),$i(r,!1,a,n,o);break;case"backwards":for(n=null,a=r.child,r.child=null;a!==null;){if(e=a.alternate,e!==null&&_s(e)===null){r.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}$i(r,!0,n,null,o);break;case"together":$i(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function es(e,r){!(r.mode&1)&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function zn(e,r,n){if(e!==null&&(r.dependencies=e.dependencies),yt|=r.lanes,!(n&r.childLanes))return null;if(e!==null&&r.child!==e.child)throw Error(V(153));if(r.child!==null){for(e=r.child,n=Xn(e,e.pendingProps),r.child=n,n.return=r;e.sibling!==null;)e=e.sibling,n=n.sibling=Xn(e,e.pendingProps),n.return=r;n.sibling=null}return r.child}function xm(e,r,n){switch(r.tag){case 3:du(r),oa();break;case 5:Ff(r);break;case 1:jr(r.type)&&gs(r);break;case 4:xc(r,r.stateNode.containerInfo);break;case 10:var t=r.type._context,a=r.memoizedProps.value;Oe(bs,t._currentValue),t._currentValue=a;break;case 13:if(t=r.memoizedState,t!==null)return t.dehydrated!==null?(Oe(Ue,Ue.current&1),r.flags|=128,null):n&r.child.childLanes?fu(e,r,n):(Oe(Ue,Ue.current&1),e=zn(e,r,n),e!==null?e.sibling:null);Oe(Ue,Ue.current&1);break;case 19:if(t=(n&r.childLanes)!==0,e.flags&128){if(t)return uu(e,r,n);r.flags|=128}if(a=r.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Oe(Ue,Ue.current),t)break;return null;case 22:case 23:return r.lanes=0,lu(e,r,n)}return zn(e,r,n)}var pu,kl,mu,hu;pu=function(e,r){for(var n=r.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};kl=function(){};mu=function(e,r,n,t){var a=e.memoizedProps;if(a!==t){e=r.stateNode,ft(pn.current);var o=null;switch(n){case"input":a=Wi(e,a),t=Wi(e,t),o=[];break;case"select":a=Ye({},a,{value:void 0}),t=Ye({},t,{value:void 0}),o=[];break;case"textarea":a=Yi(e,a),t=Yi(e,t),o=[];break;default:typeof a.onClick!="function"&&typeof t.onClick=="function"&&(e.onclick=ms)}Qi(n,t);var s;n=null;for(u in a)if(!t.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var l=a[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ua.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in t){var c=t[u];if(l=a!=null?a[u]:void 0,t.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ua.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&qe("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(r.updateQueue=u)&&(r.flags|=4)}};hu=function(e,r,n,t){n!==t&&(r.flags|=4)};function ja(e,r){if(!Ve)switch(e.tailMode){case"hidden":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:t.sibling=null}}function cr(e){var r=e.alternate!==null&&e.alternate.child===e.child,n=0,t=0;if(r)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,t|=a.subtreeFlags&14680064,t|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,t|=a.subtreeFlags,t|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=t,e.childLanes=n,r}function wm(e,r,n){var t=r.pendingProps;switch(dc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cr(r),null;case 1:return jr(r.type)&&hs(),cr(r),null;case 3:return t=r.stateNode,ia(),Ie(kr),Ie(ur),bc(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Ro(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,Qr!==null&&(Ll(Qr),Qr=null))),kl(e,r),cr(r),null;case 5:wc(r);var a=ft(ao.current);if(n=r.type,e!==null&&r.stateNode!=null)mu(e,r,n,t,a),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!t){if(r.stateNode===null)throw Error(V(166));return cr(r),null}if(e=ft(pn.current),Ro(r)){t=r.stateNode,n=r.type;var o=r.memoizedProps;switch(t[fn]=r,t[no]=o,e=(r.mode&1)!==0,n){case"dialog":qe("cancel",t),qe("close",t);break;case"iframe":case"object":case"embed":qe("load",t);break;case"video":case"audio":for(a=0;a<La.length;a++)qe(La[a],t);break;case"source":qe("error",t);break;case"img":case"image":case"link":qe("error",t),qe("load",t);break;case"details":qe("toggle",t);break;case"input":x0(t,o),qe("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!o.multiple},qe("invalid",t);break;case"textarea":b0(t,o),qe("invalid",t)}Qi(n,o),a=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?t.textContent!==l&&(o.suppressHydrationWarning!==!0&&$o(t.textContent,l,e),a=["children",l]):typeof l=="number"&&t.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&$o(t.textContent,l,e),a=["children",""+l]):Ua.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&qe("scroll",t)}switch(n){case"input":jo(t),w0(t,o,!0);break;case"textarea":jo(t),v0(t);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(t.onclick=ms)}t=a,r.updateQueue=t,t!==null&&(r.flags|=4)}else{s=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Id(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof t.is=="string"?e=s.createElement(n,{is:t.is}):(e=s.createElement(n),n==="select"&&(s=e,t.multiple?s.multiple=!0:t.size&&(s.size=t.size))):e=s.createElementNS(e,n),e[fn]=r,e[no]=t,pu(e,r,!1,!1),r.stateNode=e;e:{switch(s=Xi(n,t),n){case"dialog":qe("cancel",e),qe("close",e),a=t;break;case"iframe":case"object":case"embed":qe("load",e),a=t;break;case"video":case"audio":for(a=0;a<La.length;a++)qe(La[a],e);a=t;break;case"source":qe("error",e),a=t;break;case"img":case"image":case"link":qe("error",e),qe("load",e),a=t;break;case"details":qe("toggle",e),a=t;break;case"input":x0(e,t),a=Wi(e,t),qe("invalid",e);break;case"option":a=t;break;case"select":e._wrapperState={wasMultiple:!!t.multiple},a=Ye({},t,{value:void 0}),qe("invalid",e);break;case"textarea":b0(e,t),a=Yi(e,t),qe("invalid",e);break;default:a=t}Qi(n,a),l=a;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?Wd(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Hd(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ga(e,c):typeof c=="number"&&Ga(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ua.hasOwnProperty(o)?c!=null&&o==="onScroll"&&qe("scroll",e):c!=null&&Kl(e,o,c,s))}switch(n){case"input":jo(e),w0(e,t,!1);break;case"textarea":jo(e),v0(e);break;case"option":t.value!=null&&e.setAttribute("value",""+Zn(t.value));break;case"select":e.multiple=!!t.multiple,o=t.value,o!=null?Kt(e,!!t.multiple,o,!1):t.defaultValue!=null&&Kt(e,!!t.multiple,t.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=ms)}switch(n){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break e;case"img":t=!0;break e;default:t=!1}}t&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return cr(r),null;case 6:if(e&&r.stateNode!=null)hu(e,r,e.memoizedProps,t);else{if(typeof t!="string"&&r.stateNode===null)throw Error(V(166));if(n=ft(ao.current),ft(pn.current),Ro(r)){if(t=r.stateNode,n=r.memoizedProps,t[fn]=r,(o=t.nodeValue!==n)&&(e=Mr,e!==null))switch(e.tag){case 3:$o(t.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&$o(t.nodeValue,n,(e.mode&1)!==0)}o&&(r.flags|=4)}else t=(n.nodeType===9?n:n.ownerDocument).createTextNode(t),t[fn]=r,r.stateNode=t}return cr(r),null;case 13:if(Ie(Ue),t=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ve&&zr!==null&&r.mode&1&&!(r.flags&128))Rf(),oa(),r.flags|=98560,o=!1;else if(o=Ro(r),t!==null&&t.dehydrated!==null){if(e===null){if(!o)throw Error(V(318));if(o=r.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(V(317));o[fn]=r}else oa(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;cr(r),o=!1}else Qr!==null&&(Ll(Qr),Qr=null),o=!0;if(!o)return r.flags&65536?r:null}return r.flags&128?(r.lanes=n,r):(t=t!==null,t!==(e!==null&&e.memoizedState!==null)&&t&&(r.child.flags|=8192,r.mode&1&&(e===null||Ue.current&1?rr===0&&(rr=3):Lc())),r.updateQueue!==null&&(r.flags|=4),cr(r),null);case 4:return ia(),kl(e,r),e===null&&eo(r.stateNode.containerInfo),cr(r),null;case 10:return mc(r.type._context),cr(r),null;case 17:return jr(r.type)&&hs(),cr(r),null;case 19:if(Ie(Ue),o=r.memoizedState,o===null)return cr(r),null;if(t=(r.flags&128)!==0,s=o.rendering,s===null)if(t)ja(o,!1);else{if(rr!==0||e!==null&&e.flags&128)for(e=r.child;e!==null;){if(s=_s(e),s!==null){for(r.flags|=128,ja(o,!1),t=s.updateQueue,t!==null&&(r.updateQueue=t,r.flags|=4),r.subtreeFlags=0,t=n,n=r.child;n!==null;)o=n,e=t,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Oe(Ue,Ue.current&1|2),r.child}e=e.sibling}o.tail!==null&&Qe()>ca&&(r.flags|=128,t=!0,ja(o,!1),r.lanes=4194304)}else{if(!t)if(e=_s(s),e!==null){if(r.flags|=128,t=!0,n=e.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),ja(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Ve)return cr(r),null}else 2*Qe()-o.renderingStartTime>ca&&n!==1073741824&&(r.flags|=128,t=!0,ja(o,!1),r.lanes=4194304);o.isBackwards?(s.sibling=r.child,r.child=s):(n=o.last,n!==null?n.sibling=s:r.child=s,o.last=s)}return o.tail!==null?(r=o.tail,o.rendering=r,o.tail=r.sibling,o.renderingStartTime=Qe(),r.sibling=null,n=Ue.current,Oe(Ue,t?n&1|2:n&1),r):(cr(r),null);case 22:case 23:return Mc(),t=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==t&&(r.flags|=8192),t&&r.mode&1?Er&1073741824&&(cr(r),r.subtreeFlags&6&&(r.flags|=8192)):cr(r),null;case 24:return null;case 25:return null}throw Error(V(156,r.tag))}function bm(e,r){switch(dc(r),r.tag){case 1:return jr(r.type)&&hs(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return ia(),Ie(kr),Ie(ur),bc(),e=r.flags,e&65536&&!(e&128)?(r.flags=e&-65537|128,r):null;case 5:return wc(r),null;case 13:if(Ie(Ue),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(V(340));oa()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return Ie(Ue),null;case 4:return ia(),null;case 10:return mc(r.type._context),null;case 22:case 23:return Mc(),null;case 24:return null;default:return null}}var Do=!1,fr=!1,vm=typeof WeakSet=="function"?WeakSet:Set,oe=null;function Ut(e,r){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(t){Ke(e,r,t)}else n.current=null}function jl(e,r,n){try{n()}catch(t){Ke(e,r,t)}}var c1=!1;function ym(e,r){if(il=fs,e=vf(),lc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var t=n.getSelection&&n.getSelection();if(t&&t.rangeCount!==0){n=t.anchorNode;var a=t.anchorOffset,o=t.focusNode;t=t.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,c=-1,u=0,h=0,f=e,p=null;r:for(;;){for(var k;f!==n||a!==0&&f.nodeType!==3||(l=s+a),f!==o||t!==0&&f.nodeType!==3||(c=s+t),f.nodeType===3&&(s+=f.nodeValue.length),(k=f.firstChild)!==null;)p=f,f=k;for(;;){if(f===e)break r;if(p===n&&++u===a&&(l=s),p===o&&++h===t&&(c=s),(k=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=k}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ll={focusedElem:e,selectionRange:n},fs=!1,oe=r;oe!==null;)if(r=oe,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,oe=e;else for(;oe!==null;){r=oe;try{var _=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var j=_.memoizedProps,C=_.memoizedState,b=r.stateNode,d=b.getSnapshotBeforeUpdate(r.elementType===r.type?j:Yr(r.type,j),C);b.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=r.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(x){Ke(r,r.return,x)}if(e=r.sibling,e!==null){e.return=r.return,oe=e;break}oe=r.return}return _=c1,c1=!1,_}function qa(e,r,n){var t=r.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var a=t=t.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&jl(r,n,o)}a=a.next}while(a!==t)}}function Qs(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do{if((n.tag&e)===e){var t=n.create;n.destroy=t()}n=n.next}while(n!==r)}}function Sl(e){var r=e.ref;if(r!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof r=="function"?r(e):r.current=e}}function gu(e){var r=e.alternate;r!==null&&(e.alternate=null,gu(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[fn],delete r[no],delete r[fl],delete r[tm],delete r[am])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function xu(e){return e.tag===5||e.tag===3||e.tag===4}function d1(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cl(e,r,n){var t=e.tag;if(t===5||t===6)e=e.stateNode,r?n.nodeType===8?n.parentNode.insertBefore(e,r):n.insertBefore(e,r):(n.nodeType===8?(r=n.parentNode,r.insertBefore(e,n)):(r=n,r.appendChild(e)),n=n._reactRootContainer,n!=null||r.onclick!==null||(r.onclick=ms));else if(t!==4&&(e=e.child,e!==null))for(Cl(e,r,n),e=e.sibling;e!==null;)Cl(e,r,n),e=e.sibling}function El(e,r,n){var t=e.tag;if(t===5||t===6)e=e.stateNode,r?n.insertBefore(e,r):n.appendChild(e);else if(t!==4&&(e=e.child,e!==null))for(El(e,r,n),e=e.sibling;e!==null;)El(e,r,n),e=e.sibling}var or=null,Kr=!1;function $n(e,r,n){for(n=n.child;n!==null;)wu(e,r,n),n=n.sibling}function wu(e,r,n){if(un&&typeof un.onCommitFiberUnmount=="function")try{un.onCommitFiberUnmount(Is,n)}catch{}switch(n.tag){case 5:fr||Ut(n,r);case 6:var t=or,a=Kr;or=null,$n(e,r,n),or=t,Kr=a,or!==null&&(Kr?(e=or,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):or.removeChild(n.stateNode));break;case 18:or!==null&&(Kr?(e=or,n=n.stateNode,e.nodeType===8?Si(e.parentNode,n):e.nodeType===1&&Si(e,n),Xa(e)):Si(or,n.stateNode));break;case 4:t=or,a=Kr,or=n.stateNode.containerInfo,Kr=!0,$n(e,r,n),or=t,Kr=a;break;case 0:case 11:case 14:case 15:if(!fr&&(t=n.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){a=t=t.next;do{var o=a,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&jl(n,r,s),a=a.next}while(a!==t)}$n(e,r,n);break;case 1:if(!fr&&(Ut(n,r),t=n.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=n.memoizedProps,t.state=n.memoizedState,t.componentWillUnmount()}catch(l){Ke(n,r,l)}$n(e,r,n);break;case 21:$n(e,r,n);break;case 22:n.mode&1?(fr=(t=fr)||n.memoizedState!==null,$n(e,r,n),fr=t):$n(e,r,n);break;default:$n(e,r,n)}}function f1(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new vm),r.forEach(function(t){var a=Mm.bind(null,e,t);n.has(t)||(n.add(t),t.then(a,a))})}}function Gr(e,r){var n=r.deletions;if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];try{var o=e,s=r,l=s;e:for(;l!==null;){switch(l.tag){case 5:or=l.stateNode,Kr=!1;break e;case 3:or=l.stateNode.containerInfo,Kr=!0;break e;case 4:or=l.stateNode.containerInfo,Kr=!0;break e}l=l.return}if(or===null)throw Error(V(160));wu(o,s,a),or=null,Kr=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(u){Ke(a,r,u)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)bu(r,e),r=r.sibling}function bu(e,r){var n=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Gr(r,e),sn(e),t&4){try{qa(3,e,e.return),Qs(3,e)}catch(j){Ke(e,e.return,j)}try{qa(5,e,e.return)}catch(j){Ke(e,e.return,j)}}break;case 1:Gr(r,e),sn(e),t&512&&n!==null&&Ut(n,n.return);break;case 5:if(Gr(r,e),sn(e),t&512&&n!==null&&Ut(n,n.return),e.flags&32){var a=e.stateNode;try{Ga(a,"")}catch(j){Ke(e,e.return,j)}}if(t&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Bd(a,o),Xi(l,s);var u=Xi(l,o);for(s=0;s<c.length;s+=2){var h=c[s],f=c[s+1];h==="style"?Wd(a,f):h==="dangerouslySetInnerHTML"?Hd(a,f):h==="children"?Ga(a,f):Kl(a,h,f,u)}switch(l){case"input":Ui(a,o);break;case"textarea":qd(a,o);break;case"select":var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var k=o.value;k!=null?Kt(a,!!o.multiple,k,!1):p!==!!o.multiple&&(o.defaultValue!=null?Kt(a,!!o.multiple,o.defaultValue,!0):Kt(a,!!o.multiple,o.multiple?[]:"",!1))}a[no]=o}catch(j){Ke(e,e.return,j)}}break;case 6:if(Gr(r,e),sn(e),t&4){if(e.stateNode===null)throw Error(V(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(j){Ke(e,e.return,j)}}break;case 3:if(Gr(r,e),sn(e),t&4&&n!==null&&n.memoizedState.isDehydrated)try{Xa(r.containerInfo)}catch(j){Ke(e,e.return,j)}break;case 4:Gr(r,e),sn(e);break;case 13:Gr(r,e),sn(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(Nc=Qe())),t&4&&f1(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(fr=(u=fr)||h,Gr(r,e),fr=u):Gr(r,e),sn(e),t&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(oe=e,h=e.child;h!==null;){for(f=oe=h;oe!==null;){switch(p=oe,k=p.child,p.tag){case 0:case 11:case 14:case 15:qa(4,p,p.return);break;case 1:Ut(p,p.return);var _=p.stateNode;if(typeof _.componentWillUnmount=="function"){t=p,n=p.return;try{r=t,_.props=r.memoizedProps,_.state=r.memoizedState,_.componentWillUnmount()}catch(j){Ke(t,n,j)}}break;case 5:Ut(p,p.return);break;case 22:if(p.memoizedState!==null){p1(f);continue}}k!==null?(k.return=p,oe=k):p1(f)}h=h.sibling}e:for(h=null,f=e;;){if(f.tag===5){if(h===null){h=f;try{a=f.stateNode,u?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=f.stateNode,c=f.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Vd("display",s))}catch(j){Ke(e,e.return,j)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(j){Ke(e,e.return,j)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Gr(r,e),sn(e),t&4&&f1(e);break;case 21:break;default:Gr(r,e),sn(e)}}function sn(e){var r=e.flags;if(r&2){try{e:{for(var n=e.return;n!==null;){if(xu(n)){var t=n;break e}n=n.return}throw Error(V(160))}switch(t.tag){case 5:var a=t.stateNode;t.flags&32&&(Ga(a,""),t.flags&=-33);var o=d1(e);El(e,o,a);break;case 3:case 4:var s=t.stateNode.containerInfo,l=d1(e);Cl(e,l,s);break;default:throw Error(V(161))}}catch(c){Ke(e,e.return,c)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function _m(e,r,n){oe=e,vu(e)}function vu(e,r,n){for(var t=(e.mode&1)!==0;oe!==null;){var a=oe,o=a.child;if(a.tag===22&&t){var s=a.memoizedState!==null||Do;if(!s){var l=a.alternate,c=l!==null&&l.memoizedState!==null||fr;l=Do;var u=fr;if(Do=s,(fr=c)&&!u)for(oe=a;oe!==null;)s=oe,c=s.child,s.tag===22&&s.memoizedState!==null?m1(a):c!==null?(c.return=s,oe=c):m1(a);for(;o!==null;)oe=o,vu(o),o=o.sibling;oe=a,Do=l,fr=u}u1(e)}else a.subtreeFlags&8772&&o!==null?(o.return=a,oe=o):u1(e)}}function u1(e){for(;oe!==null;){var r=oe;if(r.flags&8772){var n=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:fr||Qs(5,r);break;case 1:var t=r.stateNode;if(r.flags&4&&!fr)if(n===null)t.componentDidMount();else{var a=r.elementType===r.type?n.memoizedProps:Yr(r.type,n.memoizedProps);t.componentDidUpdate(a,n.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var o=r.updateQueue;o!==null&&Q0(r,o,t);break;case 3:var s=r.updateQueue;if(s!==null){if(n=null,r.child!==null)switch(r.child.tag){case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}Q0(r,s,n)}break;case 5:var l=r.stateNode;if(n===null&&r.flags&4){n=l;var c=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var u=r.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Xa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}fr||r.flags&512&&Sl(r)}catch(p){Ke(r,r.return,p)}}if(r===e){oe=null;break}if(n=r.sibling,n!==null){n.return=r.return,oe=n;break}oe=r.return}}function p1(e){for(;oe!==null;){var r=oe;if(r===e){oe=null;break}var n=r.sibling;if(n!==null){n.return=r.return,oe=n;break}oe=r.return}}function m1(e){for(;oe!==null;){var r=oe;try{switch(r.tag){case 0:case 11:case 15:var n=r.return;try{Qs(4,r)}catch(c){Ke(r,n,c)}break;case 1:var t=r.stateNode;if(typeof t.componentDidMount=="function"){var a=r.return;try{t.componentDidMount()}catch(c){Ke(r,a,c)}}var o=r.return;try{Sl(r)}catch(c){Ke(r,o,c)}break;case 5:var s=r.return;try{Sl(r)}catch(c){Ke(r,s,c)}}}catch(c){Ke(r,r.return,c)}if(r===e){oe=null;break}var l=r.sibling;if(l!==null){l.return=r.return,oe=l;break}oe=r.return}}var km=Math.ceil,Ss=Mn.ReactCurrentDispatcher,Cc=Mn.ReactCurrentOwner,qr=Mn.ReactCurrentBatchConfig,Le=0,ar=null,Je=null,sr=0,Er=0,Gt=nt(0),rr=0,lo=null,yt=0,Xs=0,Ec=0,Ia=null,yr=null,Nc=0,ca=1/0,bn=null,Cs=!1,Nl=null,Kn=null,Po=!1,In=null,Es=0,Ha=0,zl=null,rs=-1,ns=0;function mr(){return Le&6?Qe():rs!==-1?rs:rs=Qe()}function Qn(e){return e.mode&1?Le&2&&sr!==0?sr&-sr:sm.transition!==null?(ns===0&&(ns=tf()),ns):(e=Ae,e!==0||(e=window.event,e=e===void 0?16:ff(e.type)),e):1}function Zr(e,r,n,t){if(50<Ha)throw Ha=0,zl=null,Error(V(185));xo(e,n,t),(!(Le&2)||e!==ar)&&(e===ar&&(!(Le&2)&&(Xs|=n),rr===4&&Bn(e,sr)),Sr(e,t),n===1&&Le===0&&!(r.mode&1)&&(ca=Qe()+500,Gs&&tt()))}function Sr(e,r){var n=e.callbackNode;s3(e,r);var t=ds(e,e===ar?sr:0);if(t===0)n!==null&&k0(n),e.callbackNode=null,e.callbackPriority=0;else if(r=t&-t,e.callbackPriority!==r){if(n!=null&&k0(n),r===1)e.tag===0?om(h1.bind(null,e)):Mf(h1.bind(null,e)),rm(function(){!(Le&6)&&tt()}),n=null;else{switch(af(t)){case 1:n=ec;break;case 4:n=rf;break;case 16:n=cs;break;case 536870912:n=nf;break;default:n=cs}n=Nu(n,yu.bind(null,e))}e.callbackPriority=r,e.callbackNode=n}}function yu(e,r){if(rs=-1,ns=0,Le&6)throw Error(V(327));var n=e.callbackNode;if(ea()&&e.callbackNode!==n)return null;var t=ds(e,e===ar?sr:0);if(t===0)return null;if(t&30||t&e.expiredLanes||r)r=Ns(e,t);else{r=t;var a=Le;Le|=2;var o=ku();(ar!==e||sr!==r)&&(bn=null,ca=Qe()+500,pt(e,r));do try{Cm();break}catch(l){_u(e,l)}while(!0);pc(),Ss.current=o,Le=a,Je!==null?r=0:(ar=null,sr=0,r=rr)}if(r!==0){if(r===2&&(a=nl(e),a!==0&&(t=a,r=Ml(e,a))),r===1)throw n=lo,pt(e,0),Bn(e,t),Sr(e,Qe()),n;if(r===6)Bn(e,t);else{if(a=e.current.alternate,!(t&30)&&!jm(a)&&(r=Ns(e,t),r===2&&(o=nl(e),o!==0&&(t=o,r=Ml(e,o))),r===1))throw n=lo,pt(e,0),Bn(e,t),Sr(e,Qe()),n;switch(e.finishedWork=a,e.finishedLanes=t,r){case 0:case 1:throw Error(V(345));case 2:lt(e,yr,bn);break;case 3:if(Bn(e,t),(t&130023424)===t&&(r=Nc+500-Qe(),10<r)){if(ds(e,0)!==0)break;if(a=e.suspendedLanes,(a&t)!==t){mr(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=dl(lt.bind(null,e,yr,bn),r);break}lt(e,yr,bn);break;case 4:if(Bn(e,t),(t&4194240)===t)break;for(r=e.eventTimes,a=-1;0<t;){var s=31-Xr(t);o=1<<s,s=r[s],s>a&&(a=s),t&=~o}if(t=a,t=Qe()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*km(t/1960))-t,10<t){e.timeoutHandle=dl(lt.bind(null,e,yr,bn),t);break}lt(e,yr,bn);break;case 5:lt(e,yr,bn);break;default:throw Error(V(329))}}}return Sr(e,Qe()),e.callbackNode===n?yu.bind(null,e):null}function Ml(e,r){var n=Ia;return e.current.memoizedState.isDehydrated&&(pt(e,r).flags|=256),e=Ns(e,r),e!==2&&(r=yr,yr=n,r!==null&&Ll(r)),e}function Ll(e){yr===null?yr=e:yr.push.apply(yr,e)}function jm(e){for(var r=e;;){if(r.flags&16384){var n=r.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var t=0;t<n.length;t++){var a=n[t],o=a.getSnapshot;a=a.value;try{if(!Jr(o(),a))return!1}catch{return!1}}}if(n=r.child,r.subtreeFlags&16384&&n!==null)n.return=r,r=n;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Bn(e,r){for(r&=~Ec,r&=~Xs,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var n=31-Xr(r),t=1<<n;e[n]=-1,r&=~t}}function h1(e){if(Le&6)throw Error(V(327));ea();var r=ds(e,0);if(!(r&1))return Sr(e,Qe()),null;var n=Ns(e,r);if(e.tag!==0&&n===2){var t=nl(e);t!==0&&(r=t,n=Ml(e,t))}if(n===1)throw n=lo,pt(e,0),Bn(e,r),Sr(e,Qe()),n;if(n===6)throw Error(V(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,lt(e,yr,bn),Sr(e,Qe()),null}function zc(e,r){var n=Le;Le|=1;try{return e(r)}finally{Le=n,Le===0&&(ca=Qe()+500,Gs&&tt())}}function _t(e){In!==null&&In.tag===0&&!(Le&6)&&ea();var r=Le;Le|=1;var n=qr.transition,t=Ae;try{if(qr.transition=null,Ae=1,e)return e()}finally{Ae=t,qr.transition=n,Le=r,!(Le&6)&&tt()}}function Mc(){Er=Gt.current,Ie(Gt)}function pt(e,r){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,em(n)),Je!==null)for(n=Je.return;n!==null;){var t=n;switch(dc(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&hs();break;case 3:ia(),Ie(kr),Ie(ur),bc();break;case 5:wc(t);break;case 4:ia();break;case 13:Ie(Ue);break;case 19:Ie(Ue);break;case 10:mc(t.type._context);break;case 22:case 23:Mc()}n=n.return}if(ar=e,Je=e=Xn(e.current,null),sr=Er=r,rr=0,lo=null,Ec=Xs=yt=0,yr=Ia=null,dt!==null){for(r=0;r<dt.length;r++)if(n=dt[r],t=n.interleaved,t!==null){n.interleaved=null;var a=t.next,o=n.pending;if(o!==null){var s=o.next;o.next=a,t.next=s}n.pending=t}dt=null}return e}function _u(e,r){do{var n=Je;try{if(pc(),Zo.current=js,ks){for(var t=Ge.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}ks=!1}if(vt=0,nr=er=Ge=null,Ba=!1,oo=0,Cc.current=null,n===null||n.return===null){rr=1,lo=r,Je=null;break}e:{var o=e,s=n.return,l=n,c=r;if(r=sr,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,h=l,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var k=n1(s);if(k!==null){k.flags&=-257,t1(k,s,l,o,r),k.mode&1&&r1(o,u,r),r=k,c=u;var _=r.updateQueue;if(_===null){var j=new Set;j.add(c),r.updateQueue=j}else _.add(c);break e}else{if(!(r&1)){r1(o,u,r),Lc();break e}c=Error(V(426))}}else if(Ve&&l.mode&1){var C=n1(s);if(C!==null){!(C.flags&65536)&&(C.flags|=256),t1(C,s,l,o,r),fc(la(c,l));break e}}o=c=la(c,l),rr!==4&&(rr=2),Ia===null?Ia=[o]:Ia.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,r&=-r,o.lanes|=r;var b=ou(o,c,r);K0(o,b);break e;case 1:l=c;var d=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Kn===null||!Kn.has(m)))){o.flags|=65536,r&=-r,o.lanes|=r;var x=su(o,l,r);K0(o,x);break e}}o=o.return}while(o!==null)}Su(n)}catch(y){r=y,Je===n&&n!==null&&(Je=n=n.return);continue}break}while(!0)}function ku(){var e=Ss.current;return Ss.current=js,e===null?js:e}function Lc(){(rr===0||rr===3||rr===2)&&(rr=4),ar===null||!(yt&268435455)&&!(Xs&268435455)||Bn(ar,sr)}function Ns(e,r){var n=Le;Le|=2;var t=ku();(ar!==e||sr!==r)&&(bn=null,pt(e,r));do try{Sm();break}catch(a){_u(e,a)}while(!0);if(pc(),Le=n,Ss.current=t,Je!==null)throw Error(V(261));return ar=null,sr=0,rr}function Sm(){for(;Je!==null;)ju(Je)}function Cm(){for(;Je!==null&&!X2();)ju(Je)}function ju(e){var r=Eu(e.alternate,e,Er);e.memoizedProps=e.pendingProps,r===null?Su(e):Je=r,Cc.current=null}function Su(e){var r=e;do{var n=r.alternate;if(e=r.return,r.flags&32768){if(n=bm(n,r),n!==null){n.flags&=32767,Je=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{rr=6,Je=null;return}}else if(n=wm(n,r,Er),n!==null){Je=n;return}if(r=r.sibling,r!==null){Je=r;return}Je=r=e}while(r!==null);rr===0&&(rr=5)}function lt(e,r,n){var t=Ae,a=qr.transition;try{qr.transition=null,Ae=1,Em(e,r,n,t)}finally{qr.transition=a,Ae=t}return null}function Em(e,r,n,t){do ea();while(In!==null);if(Le&6)throw Error(V(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(V(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(i3(e,o),e===ar&&(Je=ar=null,sr=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Po||(Po=!0,Nu(cs,function(){return ea(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=qr.transition,qr.transition=null;var s=Ae;Ae=1;var l=Le;Le|=4,Cc.current=null,ym(e,n),bu(n,e),G3(ll),fs=!!il,ll=il=null,e.current=n,_m(n),Z2(),Le=l,Ae=s,qr.transition=o}else e.current=n;if(Po&&(Po=!1,In=e,Es=a),o=e.pendingLanes,o===0&&(Kn=null),r3(n.stateNode),Sr(e,Qe()),r!==null)for(t=e.onRecoverableError,n=0;n<r.length;n++)a=r[n],t(a.value,{componentStack:a.stack,digest:a.digest});if(Cs)throw Cs=!1,e=Nl,Nl=null,e;return Es&1&&e.tag!==0&&ea(),o=e.pendingLanes,o&1?e===zl?Ha++:(Ha=0,zl=e):Ha=0,tt(),null}function ea(){if(In!==null){var e=af(Es),r=qr.transition,n=Ae;try{if(qr.transition=null,Ae=16>e?16:e,In===null)var t=!1;else{if(e=In,In=null,Es=0,Le&6)throw Error(V(331));var a=Le;for(Le|=4,oe=e.current;oe!==null;){var o=oe,s=o.child;if(oe.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(oe=u;oe!==null;){var h=oe;switch(h.tag){case 0:case 11:case 15:qa(8,h,o)}var f=h.child;if(f!==null)f.return=h,oe=f;else for(;oe!==null;){h=oe;var p=h.sibling,k=h.return;if(gu(h),h===u){oe=null;break}if(p!==null){p.return=k,oe=p;break}oe=k}}}var _=o.alternate;if(_!==null){var j=_.child;if(j!==null){_.child=null;do{var C=j.sibling;j.sibling=null,j=C}while(j!==null)}}oe=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,oe=s;else e:for(;oe!==null;){if(o=oe,o.flags&2048)switch(o.tag){case 0:case 11:case 15:qa(9,o,o.return)}var b=o.sibling;if(b!==null){b.return=o.return,oe=b;break e}oe=o.return}}var d=e.current;for(oe=d;oe!==null;){s=oe;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,oe=m;else e:for(s=d;oe!==null;){if(l=oe,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Qs(9,l)}}catch(y){Ke(l,l.return,y)}if(l===s){oe=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,oe=x;break e}oe=l.return}}if(Le=a,tt(),un&&typeof un.onPostCommitFiberRoot=="function")try{un.onPostCommitFiberRoot(Is,e)}catch{}t=!0}return t}finally{Ae=n,qr.transition=r}}return!1}function g1(e,r,n){r=la(n,r),r=ou(e,r,1),e=Yn(e,r,1),r=mr(),e!==null&&(xo(e,1,r),Sr(e,r))}function Ke(e,r,n){if(e.tag===3)g1(e,e,n);else for(;r!==null;){if(r.tag===3){g1(r,e,n);break}else if(r.tag===1){var t=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(Kn===null||!Kn.has(t))){e=la(n,e),e=su(r,e,1),r=Yn(r,e,1),e=mr(),r!==null&&(xo(r,1,e),Sr(r,e));break}}r=r.return}}function Nm(e,r,n){var t=e.pingCache;t!==null&&t.delete(r),r=mr(),e.pingedLanes|=e.suspendedLanes&n,ar===e&&(sr&n)===n&&(rr===4||rr===3&&(sr&130023424)===sr&&500>Qe()-Nc?pt(e,0):Ec|=n),Sr(e,r)}function Cu(e,r){r===0&&(e.mode&1?(r=Eo,Eo<<=1,!(Eo&130023424)&&(Eo=4194304)):r=1);var n=mr();e=Nn(e,r),e!==null&&(xo(e,r,n),Sr(e,n))}function zm(e){var r=e.memoizedState,n=0;r!==null&&(n=r.retryLane),Cu(e,n)}function Mm(e,r){var n=0;switch(e.tag){case 13:var t=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:t=e.stateNode;break;default:throw Error(V(314))}t!==null&&t.delete(r),Cu(e,n)}var Eu;Eu=function(e,r,n){if(e!==null)if(e.memoizedProps!==r.pendingProps||kr.current)_r=!0;else{if(!(e.lanes&n)&&!(r.flags&128))return _r=!1,xm(e,r,n);_r=!!(e.flags&131072)}else _r=!1,Ve&&r.flags&1048576&&Lf(r,ws,r.index);switch(r.lanes=0,r.tag){case 2:var t=r.type;es(e,r),e=r.pendingProps;var a=aa(r,ur.current);Jt(r,n),a=yc(null,r,t,e,a,n);var o=_c();return r.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,jr(t)?(o=!0,gs(r)):o=!1,r.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,gc(r),a.updater=Ks,r.stateNode=a,a._reactInternals=r,xl(r,t,e,n),r=vl(null,r,t,!0,o,n)):(r.tag=0,Ve&&o&&cc(r),pr(null,r,a,n),r=r.child),r;case 16:t=r.elementType;e:{switch(es(e,r),e=r.pendingProps,a=t._init,t=a(t._payload),r.type=t,a=r.tag=$m(t),e=Yr(t,e),a){case 0:r=bl(null,r,t,e,n);break e;case 1:r=s1(null,r,t,e,n);break e;case 11:r=a1(null,r,t,e,n);break e;case 14:r=o1(null,r,t,Yr(t.type,e),n);break e}throw Error(V(306,t,""))}return r;case 0:return t=r.type,a=r.pendingProps,a=r.elementType===t?a:Yr(t,a),bl(e,r,t,a,n);case 1:return t=r.type,a=r.pendingProps,a=r.elementType===t?a:Yr(t,a),s1(e,r,t,a,n);case 3:e:{if(du(r),e===null)throw Error(V(387));t=r.pendingProps,o=r.memoizedState,a=o.element,Pf(e,r),ys(r,t,null,n);var s=r.memoizedState;if(t=s.element,o.isDehydrated)if(o={element:t,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},r.updateQueue.baseState=o,r.memoizedState=o,r.flags&256){a=la(Error(V(423)),r),r=i1(e,r,t,n,a);break e}else if(t!==a){a=la(Error(V(424)),r),r=i1(e,r,t,n,a);break e}else for(zr=Gn(r.stateNode.containerInfo.firstChild),Mr=r,Ve=!0,Qr=null,n=Af(r,null,t,n),r.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(oa(),t===a){r=zn(e,r,n);break e}pr(e,r,t,n)}r=r.child}return r;case 5:return Ff(r),e===null&&ml(r),t=r.type,a=r.pendingProps,o=e!==null?e.memoizedProps:null,s=a.children,cl(t,a)?s=null:o!==null&&cl(t,o)&&(r.flags|=32),cu(e,r),pr(e,r,s,n),r.child;case 6:return e===null&&ml(r),null;case 13:return fu(e,r,n);case 4:return xc(r,r.stateNode.containerInfo),t=r.pendingProps,e===null?r.child=sa(r,null,t,n):pr(e,r,t,n),r.child;case 11:return t=r.type,a=r.pendingProps,a=r.elementType===t?a:Yr(t,a),a1(e,r,t,a,n);case 7:return pr(e,r,r.pendingProps,n),r.child;case 8:return pr(e,r,r.pendingProps.children,n),r.child;case 12:return pr(e,r,r.pendingProps.children,n),r.child;case 10:e:{if(t=r.type._context,a=r.pendingProps,o=r.memoizedProps,s=a.value,Oe(bs,t._currentValue),t._currentValue=s,o!==null)if(Jr(o.value,s)){if(o.children===a.children&&!kr.current){r=zn(e,r,n);break e}}else for(o=r.child,o!==null&&(o.return=r);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var c=l.firstContext;c!==null;){if(c.context===t){if(o.tag===1){c=jn(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?c.next=c:(c.next=h.next,h.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),hl(o.return,n,r),l.lanes|=n;break}c=c.next}}else if(o.tag===10)s=o.type===r.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(V(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),hl(s,n,r),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===r){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}pr(e,r,a.children,n),r=r.child}return r;case 9:return a=r.type,t=r.pendingProps.children,Jt(r,n),a=Ir(a),t=t(a),r.flags|=1,pr(e,r,t,n),r.child;case 14:return t=r.type,a=Yr(t,r.pendingProps),a=Yr(t.type,a),o1(e,r,t,a,n);case 15:return iu(e,r,r.type,r.pendingProps,n);case 17:return t=r.type,a=r.pendingProps,a=r.elementType===t?a:Yr(t,a),es(e,r),r.tag=1,jr(t)?(e=!0,gs(r)):e=!1,Jt(r,n),au(r,t,a),xl(r,t,a,n),vl(null,r,t,!0,e,n);case 19:return uu(e,r,n);case 22:return lu(e,r,n)}throw Error(V(156,r.tag))};function Nu(e,r){return ef(e,r)}function Lm(e,r,n,t){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Br(e,r,n,t){return new Lm(e,r,n,t)}function $c(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $m(e){if(typeof e=="function")return $c(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xl)return 11;if(e===Zl)return 14}return 2}function Xn(e,r){var n=e.alternate;return n===null?(n=Br(e.tag,r,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=r,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,r=e.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ts(e,r,n,t,a,o){var s=2;if(t=e,typeof e=="function")$c(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Pt:return mt(n.children,a,o,r);case Ql:s=8,a|=8;break;case qi:return e=Br(12,n,r,a|2),e.elementType=qi,e.lanes=o,e;case Ii:return e=Br(13,n,r,a),e.elementType=Ii,e.lanes=o,e;case Hi:return e=Br(19,n,r,a),e.elementType=Hi,e.lanes=o,e;case Pd:return Zs(n,a,o,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ad:s=10;break e;case Dd:s=9;break e;case Xl:s=11;break e;case Zl:s=14;break e;case Pn:s=16,t=null;break e}throw Error(V(130,e==null?e:typeof e,""))}return r=Br(s,n,r,a),r.elementType=e,r.type=t,r.lanes=o,r}function mt(e,r,n,t){return e=Br(7,e,t,r),e.lanes=n,e}function Zs(e,r,n,t){return e=Br(22,e,t,r),e.elementType=Pd,e.lanes=n,e.stateNode={isHidden:!1},e}function Ri(e,r,n){return e=Br(6,e,null,r),e.lanes=n,e}function Ti(e,r,n){return r=Br(4,e.children!==null?e.children:[],e.key,r),r.lanes=n,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function Rm(e,r,n,t,a){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mi(0),this.expirationTimes=mi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mi(0),this.identifierPrefix=t,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Rc(e,r,n,t,a,o,s,l,c){return e=new Rm(e,r,n,l,c),r===1?(r=1,o===!0&&(r|=8)):r=0,o=Br(3,null,null,r),e.current=o,o.stateNode=e,o.memoizedState={element:t,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gc(o),e}function Tm(e,r,n){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dt,key:t==null?null:""+t,children:e,containerInfo:r,implementation:n}}function zu(e){if(!e)return Jn;e=e._reactInternals;e:{if(Ct(e)!==e||e.tag!==1)throw Error(V(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(jr(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(V(171))}if(e.tag===1){var n=e.type;if(jr(n))return zf(e,n,r)}return r}function Mu(e,r,n,t,a,o,s,l,c){return e=Rc(n,t,!0,e,a,o,s,l,c),e.context=zu(null),n=e.current,t=mr(),a=Qn(n),o=jn(t,a),o.callback=r??null,Yn(n,o,a),e.current.lanes=a,xo(e,a,t),Sr(e,t),e}function Js(e,r,n,t){var a=r.current,o=mr(),s=Qn(a);return n=zu(n),r.context===null?r.context=n:r.pendingContext=n,r=jn(o,s),r.payload={element:e},t=t===void 0?null:t,t!==null&&(r.callback=t),e=Yn(a,r,s),e!==null&&(Zr(e,a,s,o),Xo(e,a,s)),s}function zs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function x1(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<r?n:r}}function Tc(e,r){x1(e,r),(e=e.alternate)&&x1(e,r)}function Am(){return null}var Lu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ac(e){this._internalRoot=e}ei.prototype.render=Ac.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(V(409));Js(e,r,null,null)};ei.prototype.unmount=Ac.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;_t(function(){Js(null,e,null,null)}),r[En]=null}};function ei(e){this._internalRoot=e}ei.prototype.unstable_scheduleHydration=function(e){if(e){var r=lf();e={blockedOn:null,target:e,priority:r};for(var n=0;n<On.length&&r!==0&&r<On[n].priority;n++);On.splice(n,0,e),n===0&&df(e)}};function Dc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ri(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function w1(){}function Dm(e,r,n,t,a){if(a){if(typeof t=="function"){var o=t;t=function(){var u=zs(s);o.call(u)}}var s=Mu(r,t,e,0,null,!1,!1,"",w1);return e._reactRootContainer=s,e[En]=s.current,eo(e.nodeType===8?e.parentNode:e),_t(),s}for(;a=e.lastChild;)e.removeChild(a);if(typeof t=="function"){var l=t;t=function(){var u=zs(c);l.call(u)}}var c=Rc(e,0,!1,null,null,!1,!1,"",w1);return e._reactRootContainer=c,e[En]=c.current,eo(e.nodeType===8?e.parentNode:e),_t(function(){Js(r,c,n,t)}),c}function ni(e,r,n,t,a){var o=n._reactRootContainer;if(o){var s=o;if(typeof a=="function"){var l=a;a=function(){var c=zs(s);l.call(c)}}Js(r,s,e,a)}else s=Dm(n,r,e,a,t);return zs(s)}of=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var n=Ma(r.pendingLanes);n!==0&&(rc(r,n|1),Sr(r,Qe()),!(Le&6)&&(ca=Qe()+500,tt()))}break;case 13:_t(function(){var t=Nn(e,1);if(t!==null){var a=mr();Zr(t,e,1,a)}}),Tc(e,1)}};nc=function(e){if(e.tag===13){var r=Nn(e,134217728);if(r!==null){var n=mr();Zr(r,e,134217728,n)}Tc(e,134217728)}};sf=function(e){if(e.tag===13){var r=Qn(e),n=Nn(e,r);if(n!==null){var t=mr();Zr(n,e,r,t)}Tc(e,r)}};lf=function(){return Ae};cf=function(e,r){var n=Ae;try{return Ae=e,r()}finally{Ae=n}};Ji=function(e,r,n){switch(r){case"input":if(Ui(e,n),r=n.name,n.type==="radio"&&r!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<n.length;r++){var t=n[r];if(t!==e&&t.form===e.form){var a=Us(t);if(!a)throw Error(V(90));Od(t),Ui(t,a)}}}break;case"textarea":qd(e,n);break;case"select":r=n.value,r!=null&&Kt(e,!!n.multiple,r,!1)}};Yd=zc;Kd=_t;var Pm={usingClientEntryPoint:!1,Events:[bo,qt,Us,Ud,Gd,zc]},Sa={findFiberByHostInstance:ct,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Fm={bundleType:Sa.bundleType,version:Sa.version,rendererPackageName:Sa.rendererPackageName,rendererConfig:Sa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Zd(e),e===null?null:e.stateNode},findFiberByHostInstance:Sa.findFiberByHostInstance||Am,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fo.isDisabled&&Fo.supportsFiber)try{Is=Fo.inject(Fm),un=Fo}catch{}}$r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pm;$r.createPortal=function(e,r){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dc(r))throw Error(V(200));return Tm(e,r,null,n)};$r.createRoot=function(e,r){if(!Dc(e))throw Error(V(299));var n=!1,t="",a=Lu;return r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(t=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),r=Rc(e,1,!1,null,null,n,!1,t,a),e[En]=r.current,eo(e.nodeType===8?e.parentNode:e),new Ac(r)};$r.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(V(188)):(e=Object.keys(e).join(","),Error(V(268,e)));return e=Zd(r),e=e===null?null:e.stateNode,e};$r.flushSync=function(e){return _t(e)};$r.hydrate=function(e,r,n){if(!ri(r))throw Error(V(200));return ni(null,e,r,!0,n)};$r.hydrateRoot=function(e,r,n){if(!Dc(e))throw Error(V(405));var t=n!=null&&n.hydratedSources||null,a=!1,o="",s=Lu;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),r=Mu(r,null,e,1,n??null,a,!1,o,s),e[En]=r.current,eo(e),t)for(e=0;e<t.length;e++)n=t[e],a=n._getVersion,a=a(n._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[n,a]:r.mutableSourceEagerHydrationData.push(n,a);return new ei(r)};$r.render=function(e,r,n){if(!ri(r))throw Error(V(200));return ni(null,e,r,!1,n)};$r.unmountComponentAtNode=function(e){if(!ri(e))throw Error(V(40));return e._reactRootContainer?(_t(function(){ni(null,null,e,!1,function(){e._reactRootContainer=null,e[En]=null})}),!0):!1};$r.unstable_batchedUpdates=zc;$r.unstable_renderSubtreeIntoContainer=function(e,r,n,t){if(!ri(n))throw Error(V(200));if(e==null||e._reactInternals===void 0)throw Error(V(38));return ni(e,r,n,!1,t)};$r.version="18.3.1-next-f1338f8080-20240426";function $u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($u)}catch(e){console.error(e)}}$u(),Ld.exports=$r;var Ru=Ld.exports,Tu,b1=Ru;Tu=b1.createRoot,b1.hydrateRoot;const Pc=`*{box-sizing:border-box}html,body{margin:0;padding:0;min-height:100%;-webkit-font-smoothing:antialiased}button{font:inherit;color:inherit}.wf-page,.wf-page *{word-break:keep-all;overflow-wrap:anywhere}.wf-page{min-height:100vh;display:flex;flex-direction:column;padding:10px;position:relative}.wf-guide{position:absolute;top:10px;bottom:10px;max-width:var(--wf-max);margin:0 auto;pointer-events:none;z-index:30;background:repeating-linear-gradient(90deg,rgba(79,107,255,.09) 0,rgba(79,107,255,.09) var(--gcw),transparent var(--gcw),transparent calc(var(--gcw) + var(--ggap)));outline:1px dashed rgba(79,107,255,.35);outline-offset:-1px}body:not(.pb-editing) .wf-guide{display:none}.wf{display:grid;align-content:start}.wf-page>.wf:not(.wf--row){flex:1}.wf--row{position:relative}.wf-page.is-rowmax>.wf{width:100%;max-width:var(--wf-max);margin-left:auto;margin-right:auto}.wf__region{position:relative;display:flex;flex-direction:column;gap:10px;min-width:0;min-height:0;overflow:hidden;border-style:solid;border-color:transparent;transition:border-color .14s,background .14s}.wf__region.is-empty{align-items:center;justify-content:center;gap:3px;text-align:center;border-style:dashed;border-color:currentColor;opacity:.4;cursor:pointer;min-height:120px}.wf__region.is-empty:hover{opacity:.72}.wf__region.is-filled{border-color:var(--wf-line, currentColor);cursor:pointer}.wf__region.is-sel{outline:2px solid var(--part-color);outline-offset:2px;opacity:1}.wf__region.is-hot{outline:1px dashed color-mix(in srgb,var(--part-color) 70%,transparent);outline-offset:2px}.wf__region.is-drop{outline:2px solid var(--part-color);outline-offset:2px;background-image:linear-gradient(color-mix(in srgb,var(--part-color) 12%,transparent),color-mix(in srgb,var(--part-color) 12%,transparent))}.wf__region.is-sticky{position:sticky;top:10px;align-self:start;z-index:4;background-color:var(--wf-bg, transparent)}.wf__region.has-divider{border-bottom-color:var(--wf-line)}.wf__tag{position:absolute;top:0;left:0;z-index:3;padding:1px 6px;border-bottom-right-radius:5px;background:var(--part-color);color:#fff;font-family:Cascadia Code,Consolas,monospace;font-size:10px;line-height:1.6;opacity:0;transition:opacity .12s;pointer-events:none}.wf__region:hover>.wf__tag,.wf__region.is-sel>.wf__tag{opacity:.92}.wf__region.is-empty .wf__tag{position:static;opacity:.9;background:none;color:var(--part-color);padding:0}.wf__fxtag{position:absolute;top:4px;right:8px;font-size:11px;letter-spacing:2px;color:var(--part-color);opacity:.85;pointer-events:none}body.pb-preview .wf__fxtag{display:none}[data-hide-scroll],.wf-headbar:has([data-hide-scroll]){transition:transform .28s ease}.wf-nav-hidden{transform:translateY(-130%)!important}.wf__entertag{position:absolute;left:8px;bottom:6px;z-index:3;padding:1px 8px;border-radius:999px;background:#4f46e51a;color:#6366f1;font-size:10px;line-height:1.7;font-weight:600;opacity:.85;pointer-events:none}.wf__entertag.is-off{background:#7878781f;color:inherit;opacity:.5}body.pb-preview .wf__entertag{display:none}.wf__label{font-size:15px;font-weight:700}.wf__hint{font-size:11.5px;opacity:.62}.wf-nav{display:flex;align-items:center;flex-wrap:wrap;gap:26px}.wf-nav--v{flex-direction:column;align-items:flex-start;gap:10px}.wf-nav__item{background:none;border:0;padding:3px 0;font-size:.9333em;cursor:pointer;opacity:.62;border-bottom:1.5px solid transparent}.wf-nav__item:hover{opacity:1}.wf-nav__item.is-current{opacity:1;font-weight:600;border-bottom-color:var(--wf-accent)}.wf-mode{flex:none;width:32px;height:32px;display:inline-flex;align-items:center;justify-content:center;border:1px solid var(--wf-line, currentColor);border-radius:8px;background:var(--wf-surface, transparent);color:inherit;line-height:1;cursor:pointer;opacity:.85;transition:border-color .18s,background .18s,opacity .18s}.wf-mode:hover{border-color:var(--wf-accent);opacity:1}.wf-mode__sun{display:none}.wf-page.is-dark .wf-mode__sun{display:inline}.wf-page.is-dark .wf-mode__moon{display:none}.wf-page{transition:background .25s ease,color .25s ease}.wf-bar{display:flex;align-items:center;gap:16px;width:100%;min-width:0;flex-wrap:wrap}.wf-bar>*{min-width:0}.wf-bar__logo{font-size:1.1333em;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:0 1 auto}.wf-bar--foot{font-size:.8667em;opacity:.85}.wf-foot__mail{opacity:.7}.wf-foot__time{font-variant-numeric:tabular-nums;opacity:.7}.wf-btn{display:inline-block;padding:11px 24px;background:var(--wf-accent);color:#fff;font-size:.9333em;font-weight:600;border-radius:inherit;text-decoration:none}.wf-btn--sm{padding:7px 15px;font-size:.8667em}.wf-hero{min-width:0;display:flex;flex-direction:column;gap:16px;justify-content:center;flex:1;width:100%;max-width:var(--wf-max);margin:0 auto}.wf-hero__title{margin:0;line-height:1.15;white-space:pre-line;letter-spacing:-.02em}.wf-hero__sub{margin:0;font-size:1.1333em;color:var(--wf-muted);white-space:pre-line}.wf-aside{min-width:0;display:flex;flex-direction:column;gap:10px;width:100%}.wf-aside__name{margin:0;font-size:2.2667em;line-height:1.15;letter-spacing:-.02em}.wf-aside__role{margin:0;font-size:1.0667em}.wf-aside__bio{margin:0 0 8px;font-size:.9333em;color:var(--wf-muted);white-space:pre-line}.wf-sec{min-width:0;display:flex;flex-direction:column;gap:14px;width:100%;max-width:var(--wf-max);margin:0 auto}.wf-sec__title{margin:0;font-size:1.7333em;letter-spacing:-.01em}.wf-sec__cols{display:grid;gap:22px;width:100%}.wf-sec__cols>*{min-width:0}.wf-sec__body{margin:0;font-size:.9667em;line-height:1.75;color:var(--wf-muted);white-space:pre-line}.wf-gal{min-width:0;display:flex;flex-direction:column;gap:16px;width:100%;max-width:var(--wf-max);margin:0 auto}.wf-gal__grid{display:grid;gap:16px;width:100%}.wf-gal__grid>*{min-width:0}.wf-card{display:flex;flex-direction:column;min-width:0;background:var(--wf-surface);border:1px solid var(--wf-line);border-radius:inherit;overflow:hidden}.wf-card__thumb{position:relative;display:block;width:100%;background:linear-gradient(135deg,color-mix(in srgb,var(--wf-accent) 14%,transparent),color-mix(in srgb,var(--wf-accent) 4%,transparent));border-bottom:1px solid var(--wf-line)}.wf-card__thumb em{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;font-style:normal;font-size:.8667em;color:var(--wf-muted)}.wf-card__body{display:flex;flex-direction:column;gap:5px;padding:14px 16px 16px;min-width:0}.wf-card__title{font-size:1em;font-weight:700;line-height:1.35}.wf-card__stack{font-size:.8em;color:var(--wf-accent)}.wf-card__stack--badges{display:flex;flex-wrap:wrap;gap:5px;margin:1px 0 2px}.wf-card__stack--badges .wf-tag--badge{font-size:.7em;padding:4px 9px}.wf-card__status{position:absolute;left:10px;bottom:10px;z-index:2;padding:4px 10px;border-radius:5px;background:var(--st-bg, #6b7280);color:var(--st-fg, #fff);font-size:.7em;font-weight:700;letter-spacing:.01em;box-shadow:0 2px 8px #0000002e}.wf-card__body>.wf-card__status{position:static;align-self:flex-start;box-shadow:none}.wf-card__desc{font-size:.8333em;line-height:1.65;color:var(--wf-muted)}.wf-card__link{margin-top:2px;font-size:.7667em;color:var(--wf-accent)}.wf-tags{display:flex;flex-wrap:wrap;gap:7px}.wf-tag{display:inline-flex;align-items:baseline;gap:5px;padding:4px 11px;border:1px solid var(--wf-line);border-radius:999px;font-size:.8333em}.wf-tag em{font-style:normal;font-size:.7em;color:var(--wf-muted)}.wf-tag--badge{border:0;border-radius:4px;padding:5px 11px;background:var(--bdg-bg, #555);color:var(--bdg-fg, #fff);font-size:.7667em;font-weight:600;letter-spacing:.01em;align-items:center}.wf-tag__logo{width:1.05em;height:1.05em;flex:none}.wf-tag--badge em{color:inherit;opacity:.8;margin-left:7px;padding-left:7px;border-left:1px solid color-mix(in srgb,currentColor 35%,transparent)}.wf-marquee{width:100%;overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}.wf-marquee__track{display:flex;width:max-content;animation:wf-marquee var(--marq-t, 20s) linear infinite}.wf-marquee__set{display:flex;gap:7px;padding-right:7px}@keyframes wf-marquee{to{transform:translate(-50%)}}@media (prefers-reduced-motion: reduce){.wf-marquee__track{animation:none;flex-wrap:wrap}.wf-marquee__set[aria-hidden]{display:none}.wf-marquee{-webkit-mask-image:none;mask-image:none}}.wf-cover{position:relative;display:flex;flex-direction:column;width:100%;overflow:hidden;border-radius:inherit}.wf-cover__img,.wf-cover__empty{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;object-fit:cover;display:block}.wf-cover__empty{background:repeating-linear-gradient(45deg,var(--wf-surface, #8882) 0 10px,transparent 10px 20px),var(--wf-surface, #8881);opacity:.5}.wf-cover__veil{position:absolute;top:0;right:0;bottom:0;left:0;background:#000;pointer-events:none}.wf-cover__body{position:relative;z-index:1;display:flex;flex-direction:column;gap:8px;padding:min(40px,5vw);max-width:var(--wf-max)}.wf-cover__title{font-size:clamp(1.4em,4.4vw,2.8em);font-weight:800;line-height:1.15;letter-spacing:-.02em;color:#fff;white-space:pre-line;text-shadow:0 2px 24px rgba(0,0,0,.35)}.wf-cover__sub{font-size:1.0667em;color:#ffffffdb}.wf-cover.is-kb .wf-cover__img{animation:wf-kenburns 26s ease-in-out infinite alternate}@keyframes wf-kenburns{0%{transform:scale(1) translate(0)}to{transform:scale(1.12) translate(-1.5%,-1%)}}.wf-cover.is-zoom .wf-cover__img{animation:wf-cover-zoom linear both;animation-timeline:view();animation-range:cover 0% cover 100%;animation-duration:1ms}@keyframes wf-cover-zoom{0%{transform:scale(1)}to{transform:scale(1.18)}}@media (prefers-reduced-motion: reduce){.wf-cover.is-kb .wf-cover__img,.wf-cover.is-zoom .wf-cover__img{animation:none}}.wf-mq{width:100%;overflow:hidden;display:flex;align-items:center;border-radius:inherit}.wf-mq__track{display:flex;width:max-content;animation:wf-marquee var(--mq-t, 26s) linear infinite;animation-direction:var(--mq-dir, normal)}.wf-mq__set{display:flex;align-items:center}.wf-mq__txt{font-size:var(--mq-size, 2.6em);font-weight:800;letter-spacing:-.02em;line-height:1.1;white-space:nowrap}.wf-mq__sep{font-size:calc(var(--mq-size, 2.6em) * .62);font-style:normal;color:var(--wf-accent);padding:0 .35em}.wf-mq.is-outline .wf-mq__txt{color:transparent;-webkit-text-stroke:1.5px currentColor}.wf-mq.is-pausable:hover .wf-mq__track{animation-play-state:paused}@media (prefers-reduced-motion: reduce){.wf-mq__track{animation:none}.wf-mq__set[aria-hidden]{display:none}}.wf-cta{position:relative;display:flex;flex-direction:column;gap:12px;width:100%;max-width:var(--wf-max);margin:0 auto;justify-content:center;border-radius:inherit}.wf-cta__title{font-size:clamp(1.2em,3vw,1.9em);font-weight:700;line-height:1.25;letter-spacing:-.01em}.wf-cta__sub{font-size:1.0667em;color:var(--wf-muted)}.wf-cta__btn{margin-top:6px}.wf-cta.is-grad:before{content:"";position:absolute;inset:calc(-1*min(44px,6vw));z-index:0;border-radius:inherit;background:linear-gradient(100deg,color-mix(in srgb,var(--wf-accent) 22%,transparent),color-mix(in srgb,var(--wf-accent) 6%,transparent),color-mix(in srgb,var(--wf-accent) 22%,transparent));background-size:220% 100%;animation:wf-cta-grad 14s ease-in-out infinite alternate}.wf-cta.is-grad>*{position:relative;z-index:1}@keyframes wf-cta-grad{0%{background-position:0% 50%}to{background-position:100% 50%}}@media (prefers-reduced-motion: reduce){.wf-cta.is-grad:before{animation:none}}.wf__region.is-freeitems>:not(span,button){position:relative;height:100%;display:block}.wf__region.is-freeitems>:not(span,button)>*:not(:where(.wf-sld__r,.wf-sld__track,.wf-sld__dots,.wf-detail,.wf-cover__img,.wf-cover__empty,.wf-cover__veil,.wf-mq__track)){position:absolute;margin:0;max-width:92%}.wf__region.is-freeitems>:not(span,button)>*:not(:where(.wf-sld__r,.wf-sld__track,.wf-sld__dots,.wf-detail,.wf-cover__img,.wf-cover__empty,.wf-cover__veil,.wf-mq__track)):nth-child(1){left:var(--fi1x, auto);top:var(--fi1y, auto)}.wf__region.is-freeitems>:not(span,button)>*:not(:where(.wf-sld__r,.wf-sld__track,.wf-sld__dots,.wf-detail,.wf-cover__img,.wf-cover__empty,.wf-cover__veil,.wf-mq__track)):nth-child(2){left:var(--fi2x, auto);top:var(--fi2y, auto)}.wf__region.is-freeitems>:not(span,button)>*:not(:where(.wf-sld__r,.wf-sld__track,.wf-sld__dots,.wf-detail,.wf-cover__img,.wf-cover__empty,.wf-cover__veil,.wf-mq__track)):nth-child(3){left:var(--fi3x, auto);top:var(--fi3y, auto)}.wf__region.is-freeitems>:not(span,button)>*:not(:where(.wf-sld__r,.wf-sld__track,.wf-sld__dots,.wf-detail,.wf-cover__img,.wf-cover__empty,.wf-cover__veil,.wf-mq__track)):nth-child(4){left:var(--fi4x, auto);top:var(--fi4y, auto)}.wf__region.is-freeitems>:not(span,button)>*:not(:where(.wf-sld__r,.wf-sld__track,.wf-sld__dots,.wf-detail,.wf-cover__img,.wf-cover__empty,.wf-cover__veil,.wf-mq__track)):nth-child(5){left:var(--fi5x, auto);top:var(--fi5y, auto)}.wf__region.is-freeitems>:not(span,button)>*:not(:where(.wf-sld__r,.wf-sld__track,.wf-sld__dots,.wf-detail,.wf-cover__img,.wf-cover__empty,.wf-cover__veil,.wf-mq__track)):nth-child(6){left:var(--fi6x, auto);top:var(--fi6y, auto)}.wf__region.is-freeitems>:not(span,button)>*:not(:where(.wf-sld__r,.wf-sld__track,.wf-sld__dots,.wf-detail,.wf-cover__img,.wf-cover__empty,.wf-cover__veil,.wf-mq__track)):nth-child(7){left:var(--fi7x, auto);top:var(--fi7y, auto)}.wf__region.is-freeitems>:not(span,button)>*:not(:where(.wf-sld__r,.wf-sld__track,.wf-sld__dots,.wf-detail,.wf-cover__img,.wf-cover__empty,.wf-cover__veil,.wf-mq__track)):nth-child(8){left:var(--fi8x, auto);top:var(--fi8y, auto)}.wf__region.is-freeitems>:not(span,button)>*:not(:where(.wf-sld__r,.wf-sld__track,.wf-sld__dots,.wf-detail,.wf-cover__img,.wf-cover__empty,.wf-cover__veil,.wf-mq__track)):nth-child(9){left:var(--fi9x, auto);top:var(--fi9y, auto)}.wf__region.is-freeitems>:not(span,button)>*:not(:where(.wf-sld__r,.wf-sld__track,.wf-sld__dots,.wf-detail,.wf-cover__img,.wf-cover__empty,.wf-cover__veil,.wf-mq__track)):nth-child(10){left:var(--fi10x, auto);top:var(--fi10y, auto)}body.pb-editing .wf__region.is-freeitems>:not(span,button)>*:not(:where(.wf-sld__r,.wf-sld__track,.wf-sld__dots,.wf-detail,.wf-cover__img,.wf-cover__empty,.wf-cover__veil,.wf-mq__track)){cursor:move}body.pb-editing .wf__region.is-freeitems .wf-edit{cursor:text}.wf__resize{position:absolute;right:0;bottom:0;z-index:6;width:18px;height:18px;cursor:nwse-resize;touch-action:none;background:linear-gradient(135deg,transparent 44%,var(--part-color, currentColor) 44%);opacity:.45;transition:opacity .14s}.wf__region:hover>.wf__resize,.wf__region.is-sel>.wf__resize{opacity:1}.wf__movex{position:absolute;left:0;bottom:0;z-index:6;width:26px;height:14px;cursor:ew-resize;touch-action:none;opacity:.45;transition:opacity .14s;background:linear-gradient(to right,var(--part-color, currentColor) 3px,transparent 3px) 0 50% / 100% 2px no-repeat,linear-gradient(var(--part-color, currentColor) 0 0) 0 50% / 3px 8px no-repeat,linear-gradient(var(--part-color, currentColor) 0 0) 100% 50% / 3px 8px no-repeat}.wf__region:hover>.wf__movex,.wf__region.is-sel>.wf__movex{opacity:1}.wf-sld{position:relative;width:100%;height:var(--sld-h, 340px);overflow:hidden;border-radius:inherit}.wf-sld__r{position:absolute;width:1px;height:1px;opacity:0;pointer-events:none;margin:0}.wf-sld__track{position:absolute;top:0;right:0;bottom:0;left:0}.wf-sld__slide{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden}.wf-sld__img,.wf-sld__empty{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;object-fit:cover;display:block}.wf-sld__empty{background:repeating-linear-gradient(45deg,var(--wf-surface, #8882) 0 10px,transparent 10px 20px),var(--wf-surface, #8881);opacity:.5}.wf-sld__veil{position:absolute;top:0;right:0;bottom:0;left:0;background:#000;pointer-events:none}.wf-sld__body{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;flex-direction:column;gap:8px;padding:min(40px,5vw);z-index:2}.wf-sld__title{font-size:clamp(1.3em,3.8vw,2.4em);font-weight:800;line-height:1.15;letter-spacing:-.02em;color:#fff;text-shadow:0 2px 24px rgba(0,0,0,.35)}.wf-sld__sub{font-size:1.0667em;color:#ffffffdb}.wf-sld__btn{margin-top:8px}.wf-sld--slide .wf-sld__track{display:flex;width:100%;height:100%;transform:translate(calc(var(--i, 0) * -100%));transition:transform var(--sld-t, .6s) cubic-bezier(.4,0,.2,1)}.wf-sld--slide .wf-sld__slide{position:relative;inset:auto;flex:0 0 100%;height:100%}.wf-sld--fade .wf-sld__slide,.wf-sld--cover .wf-sld__slide,.wf-sld--zoom .wf-sld__slide{z-index:calc(var(--on, 0))}.wf-sld--fade .wf-sld__slide{opacity:var(--on, 0);transition:opacity var(--sld-t, .6s) ease}.wf-sld--cover .wf-sld__slide{transform:translate(calc((1 - var(--on, 0)) * 100%));transition:transform var(--sld-t, .6s) cubic-bezier(.4,0,.2,1)}.wf-sld--zoom .wf-sld__slide{opacity:var(--on, 0);transform:scale(calc(.94 + .06 * var(--on, 0)));transition:opacity var(--sld-t, .6s) ease,transform var(--sld-t, .6s) ease}.wf-sld--scroll .wf-sld__track{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none}.wf-sld--scroll .wf-sld__track::-webkit-scrollbar{display:none}.wf-sld--scroll .wf-sld__slide{position:relative;inset:auto;flex:0 0 100%;height:100%;scroll-snap-align:start}.wf-sld__dots{position:absolute;left:0;right:0;bottom:12px;z-index:3;display:flex;justify-content:center;gap:8px}.wf-sld__dots>label{width:9px;height:9px;border-radius:999px;background:#ffffff73;cursor:pointer;transition:background .2s,width .2s}.wf-sld__dots>label:hover{background:#ffffffbf}.wf-sld__dots>label{background:rgba(255,255,255,calc(.4 + .6 * var(--on, 0)));width:calc(9px + 13px * var(--on, 0))}.wf-sld__nav{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:flex;align-items:center;justify-content:space-between;padding:0 10px;pointer-events:none}.wf-sld__arrow{pointer-events:auto;width:34px;height:34px;display:flex;align-items:center;justify-content:center;border-radius:999px;background:#00000052;color:#fff;font-size:20px;line-height:1;cursor:pointer;opacity:0;transition:opacity .2s,background .2s}.wf-sld:hover .wf-sld__arrow{opacity:1}.wf-sld__arrow:hover{background:#0000008c}.wf-sld__r:focus-visible~.wf-sld__track .wf-sld__arrow{opacity:1}.wf-sld.no-arrows .wf-sld__nav{display:none}.wf-sld.is-kb .wf-sld__img{transform:scale(calc(1 + .08 * var(--on, 0)));transition:transform 8s ease-out}@media (prefers-reduced-motion: reduce){.wf-sld__slide,.wf-sld--slide .wf-sld__track,.wf-sld.is-kb .wf-sld__img{transition:none!important}}.wf-sld__r:nth-of-type(1):checked~.wf-sld__track{--i: 0}.wf-sld__r:nth-of-type(1):checked~.wf-sld__track>.wf-sld__slide:nth-child(1){--on: 1}.wf-sld__r:nth-of-type(1):checked~.wf-sld__dots>label:nth-child(1){--on: 1}.wf-sld__r:nth-of-type(2):checked~.wf-sld__track{--i: 1}.wf-sld__r:nth-of-type(2):checked~.wf-sld__track>.wf-sld__slide:nth-child(2){--on: 1}.wf-sld__r:nth-of-type(2):checked~.wf-sld__dots>label:nth-child(2){--on: 1}.wf-sld__r:nth-of-type(3):checked~.wf-sld__track{--i: 2}.wf-sld__r:nth-of-type(3):checked~.wf-sld__track>.wf-sld__slide:nth-child(3){--on: 1}.wf-sld__r:nth-of-type(3):checked~.wf-sld__dots>label:nth-child(3){--on: 1}.wf-sld__r:nth-of-type(4):checked~.wf-sld__track{--i: 3}.wf-sld__r:nth-of-type(4):checked~.wf-sld__track>.wf-sld__slide:nth-child(4){--on: 1}.wf-sld__r:nth-of-type(4):checked~.wf-sld__dots>label:nth-child(4){--on: 1}.wf-sld__r:nth-of-type(5):checked~.wf-sld__track{--i: 4}.wf-sld__r:nth-of-type(5):checked~.wf-sld__track>.wf-sld__slide:nth-child(5){--on: 1}.wf-sld__r:nth-of-type(5):checked~.wf-sld__dots>label:nth-child(5){--on: 1}.wf-sld__r:nth-of-type(6):checked~.wf-sld__track{--i: 5}.wf-sld__r:nth-of-type(6):checked~.wf-sld__track>.wf-sld__slide:nth-child(6){--on: 1}.wf-sld__r:nth-of-type(6):checked~.wf-sld__dots>label:nth-child(6){--on: 1}.wf-sld__r:nth-of-type(7):checked~.wf-sld__track{--i: 6}.wf-sld__r:nth-of-type(7):checked~.wf-sld__track>.wf-sld__slide:nth-child(7){--on: 1}.wf-sld__r:nth-of-type(7):checked~.wf-sld__dots>label:nth-child(7){--on: 1}.wf-sld__r:nth-of-type(8):checked~.wf-sld__track{--i: 7}.wf-sld__r:nth-of-type(8):checked~.wf-sld__track>.wf-sld__slide:nth-child(8){--on: 1}.wf-sld__r:nth-of-type(8):checked~.wf-sld__dots>label:nth-child(8){--on: 1}.wf-sld__r:nth-of-type(9):checked~.wf-sld__track{--i: 8}.wf-sld__r:nth-of-type(9):checked~.wf-sld__track>.wf-sld__slide:nth-child(9){--on: 1}.wf-sld__r:nth-of-type(9):checked~.wf-sld__dots>label:nth-child(9){--on: 1}.wf-sld__r:nth-of-type(10):checked~.wf-sld__track{--i: 9}.wf-sld__r:nth-of-type(10):checked~.wf-sld__track>.wf-sld__slide:nth-child(10){--on: 1}.wf-sld__r:nth-of-type(10):checked~.wf-sld__dots>label:nth-child(10){--on: 1}.wf-sld__r:nth-of-type(11):checked~.wf-sld__track{--i: 10}.wf-sld__r:nth-of-type(11):checked~.wf-sld__track>.wf-sld__slide:nth-child(11){--on: 1}.wf-sld__r:nth-of-type(11):checked~.wf-sld__dots>label:nth-child(11){--on: 1}.wf-sld__r:nth-of-type(12):checked~.wf-sld__track{--i: 11}.wf-sld__r:nth-of-type(12):checked~.wf-sld__track>.wf-sld__slide:nth-child(12){--on: 1}.wf-sld__r:nth-of-type(12):checked~.wf-sld__dots>label:nth-child(12){--on: 1}@property --wf-n{syntax: "<integer>"; inherits: false; initial-value: 0;}.wf-stats{display:flex;flex-wrap:wrap;gap:24px 44px;width:100%}.wf-stat{display:flex;flex-direction:column;gap:4px}.wf-stat__num{display:flex;align-items:baseline;gap:2px;font-size:2.4em;font-weight:700;line-height:1.1;color:var(--wf-accent)}.wf-stat__label{font-size:.8333em;color:var(--wf-muted)}.wf-stat__count{font-style:normal;--wf-n: var(--wf-n-to, 0);counter-reset:wfnum calc(var(--wf-n));animation:wf-count linear both;animation-duration:1ms;animation-timeline:view();animation-range:entry 0% entry 90%}.wf-stat__count:after{content:counter(wfnum)}@keyframes wf-count{0%{--wf-n: 0}}.wf-stat__plain{display:none}@supports not (counter-reset: n calc(var(--x, 0))){.wf-stat__count{display:none}.wf-stat__plain{display:inline}}@media (prefers-reduced-motion: reduce){.wf-stat__count{animation:none}}.wf-sr{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap}.wf-time{list-style:none;margin:0;padding:0 0 0 14px;width:100%}.wf-time__row{position:relative;display:flex;flex-wrap:wrap;align-items:baseline;gap:10px;padding:8px 0;border-bottom:1px solid var(--wf-line)}.wf-time__row:before{content:"";position:absolute;left:-14px;top:15px;width:6px;height:6px;border-radius:50%;background:var(--wf-accent)}.wf-time__row b{font-size:.9333em}.wf-time__row span{font-size:.8em;color:var(--wf-muted)}.wf-tl{width:100%;min-width:0}.wf-tl__eyebrow{display:block;font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:.78em;letter-spacing:.08em;color:var(--wf-accent);margin-bottom:8px}.wf-tl__title{margin:0 0 28px;font-size:1.7em;letter-spacing:-.01em}.wf-tl__list{list-style:none;margin:0;padding:0}.wf-tl__item{position:relative;padding:0 0 30px 32px}.wf-tl__item:last-child{padding-bottom:0}.wf-tl__item:before{content:"";position:absolute;left:6px;top:22px;bottom:4px;width:1px;background:var(--wf-line)}.wf-tl__item:last-child:before{display:none}.wf-tl__item:after{content:"";position:absolute;left:0;top:3px;width:9px;height:9px;border-radius:50%;border:2px solid var(--wf-accent)}.wf-tl__label{display:block;font-size:.78em;letter-spacing:.14em;color:var(--wf-muted)}.wf-tl__head{display:block;margin:7px 0 5px;font-size:.9333em}.wf-tl__desc{margin:0;font-size:.8667em;color:var(--wf-muted);line-height:1.65}.wf-main{display:grid;width:100%;min-width:0;flex:1}.wf-main>*{min-width:0}.wf-main__slot{display:grid;place-items:center;border:1px dashed var(--wf-line);border-radius:inherit;font-size:.8em;color:var(--wf-muted);min-height:140px}.wf-3d{position:relative;width:100%;display:grid;place-items:center;min-height:160px}.wf__region:has(>.wf-3d.is-fill){position:relative}.wf-3d.is-fill{position:absolute;top:0;right:0;bottom:0;left:0;height:auto!important;aspect-ratio:auto;border-radius:inherit;overflow:hidden}.wf-3d__empty{display:flex;flex-direction:column;gap:10px;max-width:460px;margin:auto;padding:18px 20px;font-size:.8em;line-height:1.6;color:var(--wf-muted);border:1px dashed var(--wf-line);border-radius:10px;text-align:left}.wf-3d__empty>b{font-size:1.15em;color:inherit;opacity:.95}.wf-3d__empty code{padding:1px 5px;background:color-mix(in srgb,currentColor 12%,transparent);border-radius:4px;font-family:Cascadia Code,Consolas,monospace;font-size:.92em}.wf-3d__tab-radio{display:none}.wf-3d__tabs{display:flex;gap:6px}.wf-3d__tabs label{padding:5px 12px;border:1px solid var(--wf-line);border-radius:999px;font-weight:600;cursor:pointer;-webkit-user-select:none;user-select:none}.wf-3d__tabs label:hover{border-color:var(--wf-accent)}.wf-3d__pane{display:none;flex-direction:column;gap:10px}.wf-3d__tab-radio--glb:checked~.wf-3d__pane--glb,.wf-3d__tab-radio--env:checked~.wf-3d__pane--env{display:flex}.wf-3d__tab-radio--glb:checked~.wf-3d__tabs label[for$=-glb],.wf-3d__tab-radio--env:checked~.wf-3d__tabs label[for$=-env]{color:var(--wf-bg, #fff);background:var(--wf-accent);border-color:var(--wf-accent)}.wf-3d__links{display:flex;flex-direction:column;gap:5px}.wf-3d__links a{display:flex;align-items:baseline;gap:7px;padding:7px 11px;color:var(--wf-accent);border:1px solid var(--wf-line);border-radius:7px;font-weight:600}.wf-3d__links a:hover{border-color:var(--wf-accent)}.wf-3d__links em{font-style:normal;font-weight:400;font-size:.88em;color:var(--wf-muted)}.wf-3d__warn{opacity:.78}.wf-card.is-flip{background:none;border:0;overflow:visible}.wf-card.is-flip .fx-flip-card__face{display:flex;flex-direction:column;gap:6px;justify-content:center;padding:18px;background:var(--wf-surface);border:1px solid var(--wf-line)}.wf-badge{align-self:flex-start;padding:2px 8px;border:1px solid var(--part-color);border-radius:999px;font-size:.6667em;color:var(--part-color)}.wf__regiondel{position:absolute;top:5px;right:5px;z-index:6;width:20px;height:20px;padding:0;display:grid;place-items:center;border:1px solid var(--wf-line, currentColor);border-radius:2px;background:var(--wf-bg, #fff);color:var(--wf-muted, currentColor);font-size:.7333em;line-height:1;opacity:0;cursor:pointer;transition:opacity .12s}.wf__region.is-empty:hover>.wf__regiondel{opacity:.75}.wf__regiondel:hover{opacity:1!important;border-color:currentColor}body.pb-preview .wf__regiondel{display:none}.wf__edge{position:absolute;z-index:7;width:20px;height:20px;padding:0;display:grid;place-items:center;border:1px solid var(--wf-line, #000);border-radius:999px;background:#fff;color:#000;font-size:.8em;line-height:1;opacity:0;cursor:pointer;transition:opacity .12s}.wf__edge.is-t{top:3px;left:50%;transform:translate(-50%)}.wf__edge.is-b{bottom:3px;left:50%;transform:translate(-50%)}.wf__edge.is-l{left:3px;top:50%;transform:translateY(-50%)}.wf__edge.is-r{right:3px;top:50%;transform:translateY(-50%)}.wf__region:hover>.wf__edge{opacity:.85}.wf__edge:hover{opacity:1!important;border-color:var(--wf-accent, #000)}body.pb-preview .wf__edge{display:none}.wf__rowdel{position:absolute;top:6px;right:6px;width:22px;height:22px;padding:0;display:grid;place-items:center;border:1px solid currentColor;border-radius:6px;background:transparent;font-size:.7333em;line-height:1;opacity:0;cursor:pointer}.wf--row:hover .wf__rowdel{opacity:.55}.wf__rowdel:hover{opacity:1!important}.wf__add{display:flex;align-items:center;gap:7px;margin-top:10px;padding:12px;border:1.5px dashed currentColor;opacity:.4}.wf__add:hover{opacity:.8}.wf__add__label{font-size:12px;margin-right:auto}.wf__add__btn{padding:5px 12px;border:1px solid currentColor;border-radius:999px;background:transparent;font-size:.8em;cursor:pointer}body.pb-preview .wf__add,body.pb-preview .wf__rowdel,body.pb-preview .wf__tag,body.pb-preview .wf__region.is-empty{display:none}body.pb-preview .wf__region.is-filled{border-color:transparent}body.pb-preview .wf__region.has-divider{border-bottom-color:var(--wf-line)}.wf-edit{outline:none;cursor:text;border-radius:3px}.wf-edit:hover{box-shadow:0 0 0 1px color-mix(in srgb,var(--wf-accent) 45%,transparent)}.wf-edit:focus{box-shadow:0 0 0 2px var(--wf-accent);background:color-mix(in srgb,var(--wf-accent) 8%,transparent)}.wf-edit:empty:before{content:attr(data-ph);opacity:.45}body.pb-preview .wf-edit:hover,body.pb-preview .wf-edit:focus{box-shadow:none;background:none}.wf__region{font-size:var(--wf-fs, 15px)}.wf-aside__photo{display:block;flex:none;border:1px solid var(--wf-line);border-radius:8px}.wf-aside__photo.is-round{border-radius:50%}.wf-hero__photo{display:block;flex:none;object-fit:cover;border:1px solid var(--wf-line);border-radius:12px;margin-bottom:6px}.wf-hero__photo.is-round{border-radius:50%}.wf-card__img{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wf-gal.is-gray .wf-card__img{filter:saturate(0%);transition:filter .45s ease,transform .45s ease}.wf-gal.is-gray .wf-card:hover .wf-card__img,.wf-gal.is-gray .wf-card:focus-visible .wf-card__img{filter:saturate(100%);transform:scale(1.03)}.wf-links{min-width:0;display:flex;flex-direction:column;gap:14px;width:100%;max-width:var(--wf-max);margin:0 auto}.wf-links__row{display:flex;flex-wrap:wrap;gap:10px}.wf-link{display:inline-flex;align-items:baseline;gap:7px;color:inherit;text-decoration:none}.wf-link__url{font-style:normal;font-size:.8em;opacity:.6}.wf-links--buttons .wf-link{padding:9px 16px;border:1px solid var(--wf-line);border-radius:999px}.wf-links--buttons .wf-link:hover{border-color:var(--wf-accent);color:var(--wf-accent)}.wf-links--text .wf-link{text-decoration:underline;text-underline-offset:3px}.wf-links--list .wf-links__row{flex-direction:column;gap:8px}.wf-links--list .wf-link{justify-content:space-between;width:100%;padding:10px 2px;border-bottom:1px solid var(--wf-line)}.wf-links--cards .wf-links__row{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;width:100%}.wf-links--cards .wf-link{flex-direction:column;align-items:flex-start;gap:8px;padding:22px;border:1px solid var(--wf-line);border-radius:14px;font-weight:600}.wf-links--cards .wf-link:hover{border-color:var(--wf-accent);color:var(--wf-accent)}.wf-link__desc{margin:0;font-size:.8333em;font-weight:400;line-height:1.65;color:var(--wf-muted);white-space:pre-line}.wf-bcard{container-type:inline-size;position:relative;width:100%;aspect-ratio:9 / 5;margin:0 auto;overflow:hidden;border:1px solid var(--wf-line);border-radius:inherit;background:var(--wf-surface);--bc-accent: var(--wf-accent);--bc-ink-900: #0B0C0E;--bc-ink-700: #1C1F24;--bc-ink-500: #4A5058;--bc-ink-300: #8A9099;--bc-ink-200: #B9BCC1;--bc-ink-100: #D8D6D0;--bc-paper-0: #FFFFFF;--bc-paper-1: #F4F2ED;--bc-paper-2: #EAE7DF;--bc-signal: #1F5AE8;--bc-neon: #00E5A0;--bc-warm: #E8462B;--bc-gold: #D9A400;--bc-syn-key: #1F5AE8;--bc-syn-str: #0F9D58;--bc-syn-num: #D9A400;--bc-syn-com: #8A9099;--bc-syn-punct: #4A5058;--bc-syn-fn: #E8462B;--bc-syn-key-d: #7AA2FF;--bc-syn-str-d: #00E5A0;--bc-syn-num-d: #F0C455;--bc-syn-com-d: #5A626C;--bc-syn-punct-d: #9AA1AA;--bc-syn-fn-d: #FF8A6B;--bc-mono: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace}.wf-bcard__label,.wf-bcard__mono,.wf-bcard__tagline,.wf-bcard__stack{display:none}.wf-bcard__label{font-family:var(--bc-mono);font-size:2.3cqw;font-weight:600;letter-spacing:.18em;text-transform:uppercase}.wf-bcard__mono{font-size:5.6cqw;font-weight:800;letter-spacing:-.03em;line-height:1}.wf-bcard__tagline{margin:0;font-size:2.9cqw;line-height:1.45;font-weight:500;text-wrap:pretty}.wf-bcard__stack{font-family:var(--bc-mono);font-size:2.2cqw;color:var(--bc-ink-300)}.wf-bcard__in{position:relative;display:grid;height:100%;padding:7cqw;gap:3cqw}.wf-bcard__lead{display:flex;flex-direction:column;min-width:0}.wf-bcard__role{font-size:7cqw;font-weight:800;line-height:1;letter-spacing:-.02em;color:var(--bc-accent);overflow-wrap:normal}.wf-bcard__rolesub{font-size:4.4cqw;font-weight:700;line-height:1.2}.wf-bcard__info{display:flex;flex-direction:column;justify-content:center;gap:2.2cqw;min-width:0}.wf-bcard__row{display:flex;align-items:center;gap:2.6cqw;min-width:0}.wf-bcard__text{display:flex;flex-direction:column;min-width:0}.wf-bcard__name{font-size:4.8cqw;font-weight:800;line-height:1.15}.wf-bcard__nameen,.wf-bcard__title{font-size:2.5cqw;color:var(--wf-muted);line-height:1.3}.wf-bcard__line{font-size:2.5cqw;line-height:1.35;white-space:pre-line}.wf-bcard__ico{flex:none;display:grid;place-items:center;width:5.4cqw;height:5.4cqw;border-radius:50%;background:var(--bc-accent);color:#fff}.wf-bcard__ico svg{width:60%;height:60%;display:block}.wf-bcard__side{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1.6cqw}.wf-bcard__qr{display:block;width:100%}.wf-bcard__qr .wf-qr{display:block;width:100%;height:auto;color:inherit}.wf-bcard__save{font-size:2.3cqw;font-weight:700;color:var(--bc-accent);text-decoration:none;white-space:nowrap}:is(.wf-bcard--quiet,.wf-bcard--shell,.wf-bcard--grid,.wf-bcard--night,.wf-bcard--signal,.wf-bcard--letter,.wf-bcard--swiss,.wf-bcard--syntax,.wf-bcard--manifest,.wf-bcard--schema,.wf-bcard--formal,.wf-bcard--executive,.wf-bcard--field,.wf-bcard--hangeul,.wf-bcard--directory){border-radius:3px;--bc-accent: var(--bc-signal)}:is(.wf-bcard--quiet,.wf-bcard--shell,.wf-bcard--grid,.wf-bcard--night,.wf-bcard--signal,.wf-bcard--letter,.wf-bcard--swiss,.wf-bcard--syntax,.wf-bcard--manifest,.wf-bcard--schema,.wf-bcard--formal,.wf-bcard--executive,.wf-bcard--field,.wf-bcard--hangeul,.wf-bcard--directory) .wf-bcard__in{padding:4.4cqw;gap:0;grid-template-columns:1fr auto;grid-template-rows:auto 1fr auto}:is(.wf-bcard--quiet,.wf-bcard--shell,.wf-bcard--grid,.wf-bcard--night,.wf-bcard--signal,.wf-bcard--letter,.wf-bcard--swiss,.wf-bcard--syntax,.wf-bcard--manifest,.wf-bcard--schema,.wf-bcard--formal,.wf-bcard--executive,.wf-bcard--field,.wf-bcard--hangeul,.wf-bcard--directory) .wf-bcard__label{display:block;grid-column:1;grid-row:1;color:var(--bc-ink-300)}:is(.wf-bcard--quiet,.wf-bcard--shell,.wf-bcard--grid,.wf-bcard--night,.wf-bcard--signal,.wf-bcard--letter,.wf-bcard--swiss,.wf-bcard--syntax,.wf-bcard--manifest,.wf-bcard--schema,.wf-bcard--formal,.wf-bcard--executive,.wf-bcard--field,.wf-bcard--hangeul,.wf-bcard--directory) .wf-bcard__mono{display:block;grid-column:2;grid-row:1;justify-self:end;color:var(--bc-accent)}:is(.wf-bcard--quiet,.wf-bcard--shell,.wf-bcard--grid,.wf-bcard--night,.wf-bcard--signal,.wf-bcard--letter,.wf-bcard--swiss,.wf-bcard--syntax,.wf-bcard--manifest,.wf-bcard--schema,.wf-bcard--formal,.wf-bcard--executive,.wf-bcard--field,.wf-bcard--hangeul,.wf-bcard--directory) .wf-bcard__lead{display:none}:is(.wf-bcard--quiet,.wf-bcard--shell,.wf-bcard--grid,.wf-bcard--night,.wf-bcard--signal,.wf-bcard--letter,.wf-bcard--swiss,.wf-bcard--syntax,.wf-bcard--manifest,.wf-bcard--schema,.wf-bcard--formal,.wf-bcard--executive,.wf-bcard--field,.wf-bcard--hangeul,.wf-bcard--directory) .wf-bcard__info{grid-column:1;grid-row:2;justify-content:center;gap:1.2cqw}:is(.wf-bcard--quiet,.wf-bcard--shell,.wf-bcard--grid,.wf-bcard--night,.wf-bcard--signal,.wf-bcard--letter,.wf-bcard--swiss,.wf-bcard--syntax,.wf-bcard--manifest,.wf-bcard--schema,.wf-bcard--formal,.wf-bcard--executive,.wf-bcard--field,.wf-bcard--hangeul,.wf-bcard--directory) .wf-bcard__name{font-size:6.2cqw;letter-spacing:-.03em}:is(.wf-bcard--quiet,.wf-bcard--shell,.wf-bcard--grid,.wf-bcard--night,.wf-bcard--signal,.wf-bcard--letter,.wf-bcard--swiss,.wf-bcard--syntax,.wf-bcard--manifest,.wf-bcard--schema,.wf-bcard--formal,.wf-bcard--executive,.wf-bcard--field,.wf-bcard--hangeul,.wf-bcard--directory) .wf-bcard__line{font-family:var(--bc-mono);font-size:2.4cqw}:is(.wf-bcard--quiet,.wf-bcard--shell,.wf-bcard--grid,.wf-bcard--night,.wf-bcard--signal,.wf-bcard--letter,.wf-bcard--swiss,.wf-bcard--syntax) .wf-bcard__ico{width:3.4cqw;height:3.4cqw}:is(.wf-bcard--quiet,.wf-bcard--shell,.wf-bcard--grid,.wf-bcard--night,.wf-bcard--signal,.wf-bcard--letter,.wf-bcard--swiss,.wf-bcard--syntax) :is(.wf-bcard__nameen,.wf-bcard__title){font-size:2.4cqw}:is(.wf-bcard--quiet,.wf-bcard--shell,.wf-bcard--grid,.wf-bcard--night,.wf-bcard--signal,.wf-bcard--letter,.wf-bcard--swiss,.wf-bcard--syntax) .wf-bcard__stack{display:block;grid-column:1;grid-row:3;align-self:end}:is(.wf-bcard--quiet,.wf-bcard--shell,.wf-bcard--grid,.wf-bcard--night,.wf-bcard--signal,.wf-bcard--letter,.wf-bcard--swiss,.wf-bcard--syntax) .wf-bcard__side{grid-column:2;grid-row:2;align-self:center;width:13cqw}.wf-bcard--quiet{background:var(--bc-paper-0);color:var(--bc-ink-900)}.wf-bcard--quiet .wf-bcard__info{border-top:1px solid var(--bc-ink-100);padding-top:2.4cqw}.wf-bcard--quiet .wf-bcard__nameen,.wf-bcard--quiet .wf-bcard__title{color:var(--bc-ink-500)}.wf-bcard--shell{background:var(--bc-ink-900);color:var(--bc-paper-1);--bc-accent: var(--bc-neon)}.wf-bcard--shell .wf-bcard__in{font-family:var(--bc-mono)}.wf-bcard--shell .wf-bcard__name{font-family:var(--bc-mono);font-size:7.2cqw;color:#fff}.wf-bcard--shell .wf-bcard__name:after{content:"";display:inline-block;width:1.7cqw;height:3.3cqw;margin-left:.8cqw;vertical-align:-.55cqw;background:var(--bc-neon);animation:wf-bcard-caret 1s steps(1) infinite}@keyframes wf-bcard-caret{50%{opacity:0}}.wf-bcard--shell .wf-bcard__name:before{content:"➜ ";color:var(--bc-neon);font-weight:400}.wf-bcard--shell .wf-bcard__nameen,.wf-bcard--shell .wf-bcard__title{color:var(--bc-syn-com-d);font-family:var(--bc-mono)}.wf-bcard--shell .wf-bcard__label{color:var(--bc-syn-com-d)}.wf-bcard--shell .wf-bcard__ico{background:transparent;color:var(--bc-neon)}.wf-bcard--shell .wf-bcard__line{color:var(--bc-paper-1)}.wf-bcard--manifest{background:var(--bc-paper-1);color:var(--bc-ink-900);--bc-accent: var(--bc-warm)}.wf-bcard--manifest .wf-bcard__in{padding:3.9cqw 4.4cqw 3.9cqw 12.2cqw;gap:0;grid-template-columns:minmax(0,1fr) auto;grid-template-rows:8.3cqw minmax(0,1fr) auto;background-image:repeating-linear-gradient(to bottom,transparent 0 5.83cqw,#DED9CE 5.83cqw 6.11cqw);background-position:0 12.2cqw}.wf-bcard--manifest .wf-bcard__in:before{content:"";position:absolute;left:9.4cqw;top:0;bottom:0;width:1px;background:var(--bc-warm);opacity:.7}.wf-bcard--manifest .wf-bcard__label{grid-column:1;grid-row:1;color:var(--bc-ink-300)}.wf-bcard--manifest .wf-bcard__mono{grid-column:2;grid-row:1;justify-self:end;font-family:var(--bc-mono);font-size:2.3cqw;font-weight:600;letter-spacing:.18em;color:var(--bc-ink-300)}.wf-bcard--manifest .wf-bcard__info{grid-column:1;grid-row:2;justify-content:flex-start;gap:0}.wf-bcard--manifest .wf-bcard__name{font-size:7.2cqw;line-height:6.11cqw;letter-spacing:-.03em}.wf-bcard--manifest .wf-bcard__row{gap:3.3cqw}.wf-bcard--manifest .wf-bcard__row:has(.wf-bcard__name) .wf-bcard__ico{display:none}.wf-bcard--manifest .wf-bcard__nameen,.wf-bcard--manifest .wf-bcard__title{line-height:6.11cqw}.wf-bcard--manifest .wf-bcard__ico{order:-1;width:3.4cqw;height:3.4cqw;background:transparent;color:var(--bc-warm)}.wf-bcard--manifest .wf-bcard__line{font-family:var(--bc-mono);font-size:2.8cqw;line-height:6.11cqw}.wf-bcard--manifest .wf-bcard__nameen,.wf-bcard--manifest .wf-bcard__title{font-size:2.8cqw;color:var(--bc-ink-500)}.wf-bcard--manifest .wf-bcard__stack{grid-column:1;grid-row:3}.wf-bcard--manifest .wf-bcard__side{grid-column:2;grid-row:2;justify-self:end;align-self:center;width:11cqw}.wf-bcard--schema{background-color:#0c1526;color:#afc0de;--bc-accent: #7AA2FF}.wf-bcard--schema .wf-bcard__in{background-image:linear-gradient(#16233C 1px,transparent 1px),linear-gradient(90deg,#16233C 1px,transparent 1px),linear-gradient(#3c5484,#3c5484),linear-gradient(#3c5484,#3c5484),linear-gradient(#3c5484,#3c5484),linear-gradient(#3c5484,#3c5484),linear-gradient(#3c5484,#3c5484),linear-gradient(#3c5484,#3c5484),linear-gradient(#3c5484,#3c5484),linear-gradient(#3c5484,#3c5484);background-size:5.6cqw 5.6cqw,5.6cqw 5.6cqw,1px 3.05cqw,3.05cqw 1px,1px 3.05cqw,3.05cqw 1px,1px 3.05cqw,3.05cqw 1px,1px 3.05cqw,3.05cqw 1px;background-position:0 0,0 0,left 3.63cqw top 2.2cqw,left 2.2cqw top 3.63cqw,right 3.63cqw top 2.2cqw,right 2.2cqw top 3.63cqw,left 3.63cqw bottom 2.2cqw,left 2.2cqw bottom 3.63cqw,right 3.63cqw bottom 2.2cqw,right 2.2cqw bottom 3.63cqw;background-repeat:repeat,repeat,no-repeat,no-repeat,no-repeat,no-repeat,no-repeat,no-repeat,no-repeat,no-repeat}.wf-bcard--schema .wf-bcard__in{padding:4.4cqw;gap:0;grid-template-columns:minmax(0,1fr) auto;grid-template-rows:auto minmax(0,1fr) auto}.wf-bcard--schema .wf-bcard__in:before{content:"";position:absolute;top:4.4cqw;right:4.4cqw;bottom:4.4cqw;left:4.4cqw;border:1px dashed #2A3C60;pointer-events:none}.wf-bcard--schema .wf-bcard__label{grid-column:1;grid-row:1;color:#5c7099}.wf-bcard--schema .wf-bcard__mono{grid-column:2;grid-row:1;justify-self:end;font-family:var(--bc-mono);font-size:2.3cqw;font-weight:600;letter-spacing:.1em;color:#5c7099}.wf-bcard--schema .wf-bcard__info{grid-column:1;grid-row:2;justify-content:center;align-items:center;text-align:center;overflow:hidden}.wf-bcard--schema .wf-bcard__row{justify-content:center}.wf-bcard--schema .wf-bcard__text{align-items:center;text-align:center}.wf-bcard--schema .wf-bcard__name{font-size:7.2cqw;letter-spacing:-.03em;color:#eaf1ff}.wf-bcard--schema .wf-bcard__nameen,.wf-bcard--schema .wf-bcard__title{font-size:2.5cqw;text-transform:uppercase;letter-spacing:.08em;color:#7e93bc}.wf-bcard--schema .wf-bcard__line{font-family:var(--bc-mono);font-size:2.8cqw;color:#afc0de}.wf-bcard--schema .wf-bcard__ico{width:3.4cqw;height:3.4cqw;background:transparent;color:#7aa2ff}.wf-bcard--schema .wf-bcard__stack{grid-column:1;grid-row:3;color:#5c7099}.wf-bcard--schema .wf-bcard__side{grid-column:2;grid-row:2;justify-self:end;align-self:center;width:11cqw}.wf-bcard--formal{background:var(--bc-paper-0);color:var(--bc-ink-900)}.wf-bcard--formal .wf-bcard__label{grid-column:1 / -1;font-family:inherit;text-transform:none;font-size:3.6cqw;font-weight:700;letter-spacing:.08em;color:var(--bc-accent);padding-bottom:3.05cqw;border-bottom:1px solid var(--bc-ink-900)}.wf-bcard--formal .wf-bcard__mono{display:none}.wf-bcard--formal .wf-bcard__info{justify-content:flex-end;gap:1.7cqw}.wf-bcard--formal .wf-bcard__name{font-size:7.2cqw;font-weight:700;line-height:1.05;letter-spacing:-.015em}.wf-bcard--formal .wf-bcard__title{order:-1}.wf-bcard--formal .wf-bcard__nameen{font-weight:500;letter-spacing:.08em}.wf-bcard--formal .wf-bcard__nameen,.wf-bcard--formal .wf-bcard__title{font-size:3.05cqw;color:var(--bc-ink-500)}.wf-bcard--formal .wf-bcard__side{grid-column:2;grid-row:2;align-self:end;width:13cqw}.wf-bcard--formal .wf-bcard__ico{width:3.4cqw;height:3.4cqw}.wf-bcard--executive{background:var(--bc-ink-900);color:var(--bc-paper-1);--bc-accent: var(--bc-gold)}.wf-bcard--executive .wf-bcard__label{font-family:inherit;text-transform:none;font-size:3.05cqw;font-weight:600;letter-spacing:.2em;color:var(--bc-gold)}.wf-bcard--executive .wf-bcard__mono{font-family:var(--bc-mono);font-size:3.6cqw;font-weight:600;letter-spacing:.24em;color:var(--bc-ink-500)}.wf-bcard--executive .wf-bcard__info{justify-content:flex-end;gap:1.9cqw}.wf-bcard--executive .wf-bcard__info:before{content:"";width:7.2cqw;height:1px;flex:none;background:var(--bc-gold);margin-bottom:1.15cqw}.wf-bcard--executive .wf-bcard__name{font-size:7.2cqw;font-weight:600;line-height:1.05;letter-spacing:-.015em;color:#fff}.wf-bcard--executive .wf-bcard__nameen,.wf-bcard--executive .wf-bcard__title{font-size:3.05cqw;color:var(--bc-ink-300)}.wf-bcard--executive .wf-bcard__line{font-family:inherit;font-size:2.8cqw;color:#9aa1aa}.wf-bcard--executive .wf-bcard__side{grid-column:2;grid-row:2;align-self:end;width:13cqw}.wf-bcard--executive .wf-bcard__ico{width:3.4cqw;height:3.4cqw}.wf-bcard--field{background:var(--bc-paper-0);color:var(--bc-ink-900);--bc-face-bg: var(--bc-paper-0)}.wf-bcard--field .wf-bcard__in{padding:0;gap:0;grid-template-columns:35cqw minmax(0,1fr) auto;grid-template-rows:auto minmax(0,1fr) auto}.wf-bcard--field .wf-bcard__mono{grid-column:1;grid-row:1 / -1;justify-self:stretch;align-self:stretch;display:flex;align-items:flex-start;padding:5cqw;background:var(--bc-accent);color:#fff;font-size:4.4cqw;font-weight:700;letter-spacing:-.015em}.wf-bcard--field .wf-bcard__label{grid-column:1;grid-row:3;align-self:end;padding:0 5cqw 5cqw;color:#ffffffb3}.wf-bcard--field .wf-bcard__info{grid-column:2;grid-row:1 / -1;justify-content:center;gap:2.5cqw;padding:0 4.4cqw}.wf-bcard--field .wf-bcard__name{font-size:7.2cqw;letter-spacing:-.015em}.wf-bcard--field .wf-bcard__nameen,.wf-bcard--field .wf-bcard__title{font-size:3.05cqw;color:var(--bc-ink-500)}.wf-bcard--field .wf-bcard__line{font-size:2.8cqw;line-height:1.6}.wf-bcard--field .wf-bcard__ico{width:3.4cqw;height:3.4cqw}.wf-bcard--field .wf-bcard__side{grid-column:3;grid-row:1 / -1;align-self:center;width:13cqw;margin-right:4.4cqw}.wf-bcard--field .wf-bcard__stack{grid-column:2;grid-row:3;padding:0 4.4cqw 4.4cqw}.wf-bcard--hangeul{background:var(--bc-paper-1);color:var(--bc-ink-900);--bc-accent: var(--bc-warm);--bc-face-bg: var(--bc-paper-1)}.wf-bcard--hangeul .wf-bcard__in{padding:6.1cqw 5.6cqw;gap:0;grid-template-columns:minmax(0,1fr) auto;grid-template-rows:auto minmax(0,1fr) auto auto}.wf-bcard--hangeul .wf-bcard__label{grid-column:1;grid-row:1;color:var(--bc-ink-300)}.wf-bcard--hangeul .wf-bcard__mono{display:none}.wf-bcard--hangeul .wf-bcard__info{grid-column:1;grid-row:2;justify-content:center;gap:1.4cqw}.wf-bcard--hangeul .wf-bcard__text{flex-direction:row;flex-wrap:wrap;align-items:baseline;gap:2.5cqw}.wf-bcard--hangeul .wf-bcard__name{font-size:9.4cqw;letter-spacing:-.02em}.wf-bcard--hangeul .wf-bcard__nameen,.wf-bcard--hangeul .wf-bcard__title{font-size:3.05cqw;color:var(--bc-ink-500)}.wf-bcard--hangeul .wf-bcard__in:after{content:"";grid-column:1;grid-row:3;width:6.1cqw;height:2px;margin-bottom:2.8cqw;background:var(--bc-warm)}.wf-bcard--hangeul .wf-bcard__stack{grid-column:1;grid-row:4;color:var(--bc-ink-300)}.wf-bcard--hangeul .wf-bcard__line{font-size:2.8cqw;line-height:1.8;color:var(--bc-ink-500)}.wf-bcard--hangeul .wf-bcard__ico{width:3.4cqw;height:3.4cqw}.wf-bcard--hangeul .wf-bcard__side{grid-column:2;grid-row:3 / -1;justify-self:end;align-self:end;width:13cqw}.wf-bcard--directory{background:var(--bc-paper-0);color:var(--bc-ink-900);--bc-face-bg: var(--bc-paper-0)}.wf-bcard--directory .wf-bcard__in{padding:0;gap:0;grid-template-columns:minmax(0,1fr) auto;grid-template-rows:auto minmax(0,1fr) auto}.wf-bcard--directory .wf-bcard__label{grid-column:1;grid-row:1;display:flex;align-items:center;padding:3.05cqw 4.4cqw;font-family:inherit;text-transform:none;font-size:3.05cqw;font-weight:700;letter-spacing:.16em;color:var(--bc-ink-900);border-bottom:2px solid var(--bc-ink-900)}.wf-bcard--directory .wf-bcard__mono{grid-column:2;grid-row:1;display:flex;align-items:center;padding:3.05cqw 4.4cqw;font-family:inherit;font-size:2.5cqw;font-weight:400;letter-spacing:0;color:var(--bc-ink-500);border-bottom:2px solid var(--bc-ink-900)}.wf-bcard--directory .wf-bcard__info{grid-column:1 / -1;grid-row:2;justify-content:center;gap:1.7cqw;padding:3.3cqw 4.4cqw}.wf-bcard--directory .wf-bcard__name{font-size:7.2cqw;letter-spacing:-.015em}.wf-bcard--directory .wf-bcard__nameen,.wf-bcard--directory .wf-bcard__title{font-size:3.05cqw;color:var(--bc-ink-500)}.wf-bcard--directory .wf-bcard__in--back .wf-bcard__info,.wf-bcard--directory:not(.is-2face) .wf-bcard__info{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:2.8cqw;align-content:center}.wf-bcard--directory:not(.is-2face) .wf-bcard__row:has(.wf-bcard__name){grid-column:1 / -1}.wf-bcard--directory .wf-bcard__row:not(:has(.wf-bcard__name)){flex-direction:column;align-items:flex-start;gap:.8cqw;border-top:1px solid var(--bc-ink-100);padding-top:1.7cqw}.wf-bcard--directory .wf-bcard__line{font-size:2.5cqw;line-height:1.5}.wf-bcard--directory .wf-bcard__ico{order:-1;width:3.05cqw;height:3.05cqw}.wf-bcard--directory .wf-bcard__stack{grid-column:1;grid-row:3;padding:0 4.4cqw 3.3cqw}.wf-bcard--directory .wf-bcard__side{grid-column:2;grid-row:3;justify-self:end;align-self:end;width:11cqw;margin:0 4.4cqw 3.3cqw 0}.wf-bcard--grid{background:var(--bc-paper-1);color:var(--bc-ink-900);--bc-accent: var(--bc-warm);border:3px solid var(--bc-ink-900)}.wf-bcard--grid .wf-bcard__in{padding:0;grid-template-columns:minmax(0,1fr) auto 9.4cqw;grid-template-rows:7.8cqw minmax(0,1fr) 9.4cqw}.wf-bcard--grid .wf-bcard__label{grid-column:1 / 3;grid-row:1;display:flex;align-items:center;padding:0 1.9cqw;color:var(--bc-ink-500);border-right:1px solid var(--bc-ink-900);border-bottom:1px solid var(--bc-ink-900)}.wf-bcard--grid .wf-bcard__mono{grid-column:3;grid-row:1;justify-self:stretch;align-self:stretch;display:grid;place-items:center;background:var(--bc-ink-900);color:#fff;font-size:5.6cqw;letter-spacing:0;border-bottom:1px solid var(--bc-ink-900)}.wf-bcard--grid .wf-bcard__info{grid-column:1 / 3;grid-row:2;justify-content:center;overflow:hidden;padding:0 1.9cqw;border-bottom:1px solid var(--bc-ink-900)}.wf-bcard--grid .wf-bcard__name{font-size:9.4cqw;text-transform:uppercase}.wf-bcard--grid .wf-bcard__in:after{content:"";grid-column:3;grid-row:3;background:var(--bc-warm);border-left:1px solid var(--bc-ink-900)}.wf-bcard--grid .wf-bcard__stack{grid-column:1;grid-row:3;align-self:center;padding:0 1.9cqw}.wf-bcard--grid .wf-bcard__side{grid-column:3;grid-row:2;justify-self:center;align-self:center;width:7cqw}.wf-bcard--grid .wf-bcard__save{white-space:normal;text-align:center;font-size:1.9cqw;line-height:1.25}.wf-bcard--grid:not(.is-2face) .wf-bcard__name{font-size:6.2cqw}.wf-bcard--grid:not(.is-2face) .wf-bcard__info{gap:.8cqw}.wf-bcard--grid:not(.is-2face) .wf-bcard__line{font-size:2.2cqw}.wf-bcard--grid .wf-bcard__nameen,.wf-bcard--grid .wf-bcard__title{color:var(--bc-ink-500)}.wf-bcard--night{background:var(--bc-ink-900);color:var(--bc-paper-1)}.wf-bcard--night .wf-bcard__in{background:#14161a;padding:0;grid-template-columns:9.4cqw minmax(0,1fr) auto;grid-template-rows:auto minmax(0,1fr) auto}.wf-bcard--night .wf-bcard__in:before{content:"";grid-column:1;grid-row:1 / -1;background:var(--bc-ink-900)}.wf-bcard--night .wf-bcard__mono{grid-column:1;grid-row:1;justify-self:center;align-self:start;margin-top:3.3cqw;display:grid;place-items:center;width:5cqw;height:5cqw;border-radius:.6cqw;background:var(--bc-accent);color:#fff;font-size:2.5cqw;font-weight:700;letter-spacing:0}.wf-bcard--night .wf-bcard__label{grid-column:2 / -1;grid-row:1;display:flex;align-items:center;justify-content:space-between;margin:3.9cqw 4.4cqw 0;padding-bottom:2.5cqw;border-bottom:1px solid #262A31;color:var(--bc-ink-300)}.wf-bcard--night .wf-bcard__label:after{content:"";width:1.9cqw;height:1.9cqw;border-radius:50%;background:var(--bc-neon)}.wf-bcard--night .wf-bcard__info{grid-column:2;grid-row:2;justify-content:flex-end;overflow:hidden;padding:0 4.4cqw 3.9cqw}.wf-bcard--night .wf-bcard__name{font-size:7.2cqw;color:#fff;letter-spacing:-.03em}.wf-bcard--night .wf-bcard__nameen,.wf-bcard--night .wf-bcard__title{color:var(--bc-ink-300)}.wf-bcard--night .wf-bcard__row{border-bottom:1px solid #262A31;padding:1.4cqw 0}.wf-bcard--night:not(.is-2face) .wf-bcard__name{font-size:6.4cqw}.wf-bcard--night:not(.is-2face) .wf-bcard__row{padding:.7cqw 0}.wf-bcard--night:not(.is-2face) .wf-bcard__info{gap:.4cqw}.wf-bcard--night .wf-bcard__line{color:#c6cad1}.wf-bcard--night .wf-bcard__stack{grid-column:2;grid-row:3;padding:0 4.4cqw 3.9cqw}.wf-bcard--night .wf-bcard__side{grid-column:3;grid-row:2;align-self:center;width:11cqw;margin-right:4.4cqw}.wf-bcard--signal{background:#07080a;color:#fff;--bc-accent: var(--bc-neon)}.wf-bcard--signal .wf-bcard__label{color:var(--bc-neon);text-shadow:0 0 14px rgb(0 229 160 / .45)}.wf-bcard--signal .wf-bcard__mono{font-size:0;align-self:center;width:11cqw;height:.55cqw;background:var(--bc-neon);box-shadow:0 0 10px #00e5a099}.wf-bcard--signal .wf-bcard__name{font-size:9.4cqw;color:var(--bc-neon);text-shadow:0 0 14px rgb(0 229 160 / .45)}.wf-bcard--signal .wf-bcard__nameen,.wf-bcard--signal .wf-bcard__title{color:#8a9099;text-transform:uppercase;letter-spacing:.08em}.wf-bcard--signal .wf-bcard__line{color:#9aa1aa}.wf-bcard--letter{background:var(--bc-paper-1);color:#6e6a60;--bc-accent: var(--bc-gold);box-shadow:inset 0 0 0 1px #0b0c0e17,inset 0 0 22px #0b0c0e0d}.wf-bcard--letter .wf-bcard__in{grid-template-columns:1fr;grid-template-rows:auto 1fr auto;justify-items:center;text-align:center}.wf-bcard--letter .wf-bcard__mono{display:none}.wf-bcard--letter .wf-bcard__label{grid-column:1;color:var(--bc-accent)}.wf-bcard--letter .wf-bcard__info{grid-column:1;align-items:center}.wf-bcard--letter .wf-bcard__text{align-items:center;text-align:center}.wf-bcard--letter .wf-bcard__row{justify-content:center}.wf-bcard--letter .wf-bcard__info{grid-row:2;align-self:center}.wf-bcard--letter .wf-bcard__stack{grid-column:1;grid-row:3;justify-self:center;align-self:end}.wf-bcard--letter .wf-bcard__side{grid-column:1;grid-row:2;justify-self:end;align-self:center}.wf-bcard--letter .wf-bcard__name{color:#6e6a60;text-shadow:0 1px 0 rgb(255 255 255 / .85),0 -1px 0 rgb(11 12 14 / .18)}.wf-bcard--letter .wf-bcard__name:after{content:"";display:block;width:7.8cqw;height:1px;margin:2.5cqw auto;background:var(--bc-gold)}.wf-bcard--letter .wf-bcard__line{color:#6e6a60;letter-spacing:.02em}.wf-bcard--letter .wf-bcard__nameen,.wf-bcard--letter .wf-bcard__title{color:var(--bc-ink-500)}.wf-bcard--swiss{background:var(--bc-paper-0);color:var(--bc-ink-900)}.wf-bcard--swiss .wf-bcard__in{padding:0;grid-template-columns:31% minmax(0,1fr) auto;grid-template-rows:auto 1fr auto}.wf-bcard--swiss .wf-bcard__mono{grid-column:1;grid-row:1 / -1;justify-self:stretch;align-self:stretch;background:var(--bc-accent);color:#fff;display:flex;align-items:flex-start;padding:4.4cqw;font-size:8.6cqw}.wf-bcard--swiss .wf-bcard__label{grid-column:2 / -1;grid-row:1;align-self:start;padding:4.4cqw 4.4cqw 0;color:var(--bc-accent)}.wf-bcard--swiss .wf-bcard__info{grid-column:2;grid-row:2;align-self:center;padding:0 4.4cqw}.wf-bcard--swiss .wf-bcard__stack{grid-column:2;grid-row:3;align-self:end;padding:0 4.4cqw 3.4cqw}.wf-bcard--swiss .wf-bcard__side{grid-column:3;grid-row:2;align-self:center;margin-right:4.4cqw}.wf-bcard--swiss .wf-bcard__name:after{content:"";display:block;width:34px;height:2px;background:var(--bc-ink-900);margin:1.6cqw 0 .8cqw}.wf-bcard--swiss .wf-bcard__nameen,.wf-bcard--swiss .wf-bcard__title{color:var(--bc-ink-500)}.wf-bcard--syntax{background:var(--bc-paper-0);color:var(--bc-syn-punct)}.wf-bcard--syntax .wf-bcard__in{padding:0;font-family:var(--bc-mono);grid-template-columns:7.2cqw minmax(0,1fr) auto;grid-template-rows:auto minmax(0,1fr) auto}.wf-bcard--syntax .wf-bcard__in:before{content:"1\\a 2\\a 3\\a 4\\a 5\\a 6\\a 7\\a 8\\a 9";grid-column:1;grid-row:1 / -1;white-space:pre;text-align:right;background:var(--bc-paper-1);border-right:1px solid var(--bc-ink-100);color:var(--bc-ink-200);font-size:2.5cqw;line-height:1.75;padding:3.3cqw 1.7cqw 0 0}.wf-bcard--syntax .wf-bcard__label{grid-column:2;grid-row:1;padding:3.3cqw 3.9cqw 0;color:var(--bc-syn-com)}.wf-bcard--syntax .wf-bcard__mono{grid-column:3;grid-row:1;justify-self:end;align-self:start;padding:3.3cqw 3.9cqw 0 0;font-size:3.05cqw;color:var(--bc-syn-fn)}.wf-bcard--syntax .wf-bcard__info{grid-column:2;grid-row:2;justify-content:center;overflow:hidden;padding:0 3.9cqw}.wf-bcard--syntax .wf-bcard__name{font-family:var(--bc-mono);font-weight:400;font-size:3.05cqw;letter-spacing:0;color:var(--bc-syn-str)}.wf-bcard--syntax .wf-bcard__name:before{content:"const ";color:var(--bc-syn-key)}.wf-bcard--syntax .wf-bcard__nameen,.wf-bcard--syntax .wf-bcard__title{color:var(--bc-syn-com);font-family:var(--bc-mono)}.wf-bcard--syntax .wf-bcard__line{color:var(--bc-syn-str)}.wf-bcard--syntax .wf-bcard__ico{width:3.4cqw;height:3.4cqw;background:transparent;color:var(--bc-syn-key)}.wf-bcard--syntax .wf-bcard__stack{grid-column:2;grid-row:3;padding:0 3.9cqw 3.3cqw;color:var(--bc-syn-com)}.wf-bcard--syntax .wf-bcard__side{grid-column:3;grid-row:2;align-self:center;width:11cqw;margin-right:3.9cqw}.wf-bcard--quiet .wf-bcard__tagline,.wf-bcard--shell .wf-bcard__tagline,.wf-bcard--grid .wf-bcard__tagline,.wf-bcard--night .wf-bcard__tagline,.wf-bcard--signal .wf-bcard__tagline,.wf-bcard--letter .wf-bcard__tagline,.wf-bcard--swiss .wf-bcard__tagline,.wf-bcard--syntax .wf-bcard__tagline{display:none}.wf-bcard--ico-line .wf-bcard__ico{background:transparent;color:var(--bc-accent);border:.35cqw solid var(--bc-accent)}.wf-bcard--ico-bare .wf-bcard__ico{background:transparent;color:var(--bc-accent);width:4.6cqw;height:4.6cqw}.wf-bcard--ico-bare .wf-bcard__ico svg{width:100%;height:100%}.wf-bcard--ico-none .wf-bcard__ico{display:none}.wf-bcard--ico-none .wf-bcard__info:before{display:none}.wf-bcard.is-qr-right .wf-bcard__side,.wf-bcard.is-qr-bl .wf-bcard__side,.wf-bcard.is-qr-br .wf-bcard__side{position:absolute;width:17cqw;margin:0;grid-column:auto;grid-row:auto;inset:auto;translate:none}.wf-bcard.is-qr-right .wf-bcard__side{right:5cqw;top:50%;translate:0 -50%}.wf-bcard.is-qr-bl .wf-bcard__side{left:5cqw;bottom:5cqw}.wf-bcard.is-qr-br .wf-bcard__side{right:5cqw;bottom:5cqw}.wf-bcard.is-qr-right .wf-bcard__in{padding-right:22cqw}.wf-bcard.is-qr-br .wf-bcard__in{padding-right:24cqw}.wf-bcard.is-qr-bl .wf-bcard__in{padding-left:24cqw}.wf-bcard__deco{display:none}.wf-bcard--sideline .wf-bcard__in{grid-template-columns:auto minmax(0,1fr);grid-template-rows:1fr auto;align-items:center}.wf-bcard--sideline .wf-bcard__lead{grid-column:1;grid-row:1;align-self:end}.wf-bcard--sideline .wf-bcard__info{grid-column:2;grid-row:1 / -1}.wf-bcard--sideline .wf-bcard__side{grid-column:1;grid-row:2;align-self:start;align-items:flex-start}.wf-bcard--sideline .wf-bcard__info:before{content:"";position:absolute;top:8%;bottom:8%;right:calc(2.7cqw - .5px);width:1px;background:repeating-linear-gradient(to bottom,var(--bc-accent) 0 3px,transparent 3px 7px);opacity:.55}.wf-bcard--sideline .wf-bcard__info{position:relative}.wf-bcard--sideline .wf-bcard__row{justify-content:flex-end;text-align:right}.wf-bcard--sideline .wf-bcard__text{align-items:flex-end;text-align:right}.wf-bcard--sideline .wf-bcard__ico{position:relative;z-index:1}.wf-bcard--sideline .wf-bcard__side{width:20cqw}.wf-bcard--sideline .wf-bcard__deco{display:block;position:absolute;left:-8cqw;top:-18%;bottom:-18%;width:34cqw;border-radius:50%;border:1.2cqw solid color-mix(in srgb,var(--bc-accent) 26%,transparent);border-right-color:transparent;transform:rotate(-12deg);pointer-events:none}.wf-bcard--center .wf-bcard__in{grid-template-rows:auto auto;justify-items:center;align-content:center;text-align:center;gap:1.6cqw}.wf-bcard--center .wf-bcard__info{gap:1.4cqw}.wf-bcard--center .wf-bcard__name{font-size:4.4cqw}.wf-bcard--center .wf-bcard__line{font-size:2.4cqw}.wf-bcard--center .wf-bcard__ico{width:4.6cqw;height:4.6cqw}.wf-bcard--center .wf-bcard__side{position:absolute;right:5cqw;top:50%;translate:0 -50%;width:16cqw}.wf-bcard--center .wf-bcard__in:has(.wf-bcard__side){padding-right:26cqw}.wf-bcard--center .wf-bcard__lead{align-items:center}.wf-bcard--center .wf-bcard__role{font-size:7cqw}.wf-bcard--center .wf-bcard__rolesub{font-size:3.4cqw;color:var(--wf-muted)}.wf-bcard--center .wf-bcard__info{align-items:center}.wf-bcard--center .wf-bcard__text{align-items:center;text-align:center}.wf-bcard--split .wf-bcard__in{grid-template-columns:34% 1fr auto;align-items:center;padding:0 6cqw 0 0;gap:4cqw}.wf-bcard--split .wf-bcard__lead{align-self:stretch;justify-content:center;padding:0 4cqw;background:var(--bc-accent);color:#fff}.wf-bcard--split .wf-bcard__role{color:#fff;font-size:6.6cqw}.wf-bcard--split .wf-bcard__rolesub{color:#ffffffd9;font-size:3.6cqw}.wf-bcard--split .wf-bcard__side{width:15cqw}.wf-bcard--dark{background:#111114;border-color:#ffffff24;color:#f4f4f5}.wf-bcard--dark .wf-bcard__in{grid-template-columns:auto minmax(0,1fr);grid-template-rows:1fr auto;align-items:center}.wf-bcard--dark .wf-bcard__lead{grid-column:1;grid-row:1;align-self:end}.wf-bcard--dark .wf-bcard__info{grid-column:2;grid-row:1 / -1}.wf-bcard--dark .wf-bcard__side{grid-column:1;grid-row:2;align-self:start;align-items:flex-start}.wf-bcard--dark .wf-bcard__nameen,.wf-bcard--dark .wf-bcard__title{color:#fff9}.wf-bcard--dark .wf-bcard__row{justify-content:flex-end;text-align:right}.wf-bcard--dark .wf-bcard__text{align-items:flex-end;text-align:right}.wf-bcard--dark .wf-bcard__side{width:20cqw}.wf-bcard--dark .wf-bcard__qr .wf-qr{color:#f4f4f5}@container (max-width: 300px){.wf-bcard__side{display:none}.wf-bcard--split .wf-bcard__in{grid-template-columns:32% 1fr}}.wf-bcard.is-2face{perspective:1400px;overflow:visible;background:none;border-color:transparent}.wf-bcard__toggle{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:0;opacity:0;z-index:2;cursor:pointer;-moz-appearance:none;appearance:none;-webkit-appearance:none}.wf-bcard__flip{position:absolute;top:0;right:0;bottom:0;left:0;transform-style:preserve-3d;transition:transform .6s cubic-bezier(.2,.7,.2,1)}.wf-bcard__toggle:checked~.wf-bcard__flip{transform:rotateY(180deg)}.wf-bcard__toggle:focus-visible~.wf-bcard__flip{outline:2px solid var(--bc-accent);outline-offset:3px}.wf-bcard__face{position:absolute;top:0;right:0;bottom:0;left:0;backface-visibility:hidden;-webkit-backface-visibility:hidden;border-radius:inherit;overflow:hidden;background:inherit}.wf-bcard.is-2face .wf-bcard__face{background:var(--bc-face-bg, var(--wf-surface))}.wf-bcard__face--back{transform:rotateY(180deg)}.wf-bcard__face--back .wf-bcard__tagline{display:block;grid-column:1 / -1;grid-row:1;align-self:start}.wf-bcard__in--back .wf-bcard__info{grid-row:2}.wf-bcard__flipbtn{position:absolute;right:3cqw;bottom:2.6cqw;z-index:3;padding:1.2cqw 2.4cqw;border-radius:999px;background:color-mix(in srgb,var(--bc-accent) 92%,transparent);color:#fff;font-size:2.2cqw;font-weight:700;cursor:pointer;-webkit-user-select:none;user-select:none}.wf-bcard__flipbtn:hover{background:var(--bc-accent)}.wf-bcard__png{position:absolute;right:3cqw;bottom:2.6cqw;z-index:4;display:inline-flex;align-items:center;justify-content:center;width:5.4cqw;height:5.4cqw;min-width:22px;min-height:22px;padding:0;border:0;border-radius:999px;background:color-mix(in srgb,var(--bc-accent) 92%,transparent);color:#fff;font-size:3cqw;cursor:pointer;opacity:.45;transition:opacity .15s ease}.wf-bcard:hover .wf-bcard__png,.wf-bcard__png:focus-visible{opacity:1}.wf-bcard.is-2face .wf-bcard__png{right:calc(3cqw + 74px)}:is(.wf-bcard--hangeul,.wf-bcard--directory):not(.is-2face) .wf-bcard__png{right:auto;left:3cqw}:is(.wf-bcard--formal,.wf-bcard--executive):not(.is-2face) .wf-bcard__png{right:3cqw;left:auto;bottom:auto;top:50%;translate:0 -50%}@media (hover: none){.wf-bcard__png{opacity:1}}.wf-bcard__paper{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;z-index:0;border-radius:inherit;opacity:var(--bc-paper, .4);background-image:repeating-linear-gradient(58deg,rgb(11 12 14 / .055) 0 1px,transparent 1px 5px),repeating-linear-gradient(148deg,rgb(11 12 14 / .04) 0 1px,transparent 1px 9px),radial-gradient(circle at 30% 20%,rgb(11 12 14 / .06) 0 .6px,transparent .6px),radial-gradient(circle at 70% 65%,rgb(11 12 14 / .05) 0 .5px,transparent .5px),radial-gradient(circle at 15% 80%,rgb(11 12 14 / .045) 0 .7px,transparent .7px);background-size:auto,auto,5px 5px,8px 8px,13px 13px}:is(.wf-bcard--shell,.wf-bcard--night,.wf-bcard--signal,.wf-bcard--schema,.wf-bcard--executive,.wf-bcard--dark) .wf-bcard__paper{background-image:repeating-linear-gradient(58deg,rgb(255 255 255 / .05) 0 1px,transparent 1px 5px),repeating-linear-gradient(148deg,rgb(255 255 255 / .035) 0 1px,transparent 1px 9px),radial-gradient(circle at 30% 20%,rgb(255 255 255 / .055) 0 .6px,transparent .6px),radial-gradient(circle at 70% 65%,rgb(255 255 255 / .045) 0 .5px,transparent .5px),radial-gradient(circle at 15% 80%,rgb(255 255 255 / .04) 0 .7px,transparent .7px);background-size:auto,auto,5px 5px,8px 8px,13px 13px}.wf-bcard__in{z-index:1}@media print{.wf-bcard__paper{display:none}}:is(.wf-bcard--sideline,.wf-bcard--dark,.wf-bcard--split,.wf-bcard--swiss,.wf-bcard--night,.wf-bcard--syntax) .wf-bcard__in--back{grid-template-columns:minmax(0,1fr) auto;grid-template-rows:minmax(0,1fr) auto;align-items:center;padding:4.4cqw;gap:3cqw}:is(.wf-bcard--sideline,.wf-bcard--dark,.wf-bcard--split,.wf-bcard--swiss,.wf-bcard--night,.wf-bcard--syntax) .wf-bcard__in--back .wf-bcard__info{grid-column:1;grid-row:1;justify-content:center;padding:0}:is(.wf-bcard--sideline,.wf-bcard--dark,.wf-bcard--split,.wf-bcard--swiss,.wf-bcard--night,.wf-bcard--syntax) .wf-bcard__in--back .wf-bcard__side{grid-column:2;grid-row:1;justify-self:end;align-self:center;width:15cqw;margin:0}:is(.wf-bcard--sideline,.wf-bcard--dark,.wf-bcard--split,.wf-bcard--swiss,.wf-bcard--night,.wf-bcard--syntax) .wf-bcard__in--back .wf-bcard__stack{grid-column:1 / -1;grid-row:2;justify-self:start;align-self:end;padding:0}:is(.wf-bcard--sideline,.wf-bcard--dark) .wf-bcard__in--back .wf-bcard__row{justify-content:flex-start;text-align:left}:is(.wf-bcard--sideline,.wf-bcard--dark) .wf-bcard__in--back .wf-bcard__text{align-items:flex-start;text-align:left}.wf-bcard--sideline .wf-bcard__in--back .wf-bcard__info:before{content:none}.wf-bcard--quiet{--bc-face-bg: var(--bc-paper-0)}.wf-bcard--shell,.wf-bcard--night,.wf-bcard--signal,.wf-bcard--executive{--bc-face-bg: var(--bc-ink-900)}.wf-bcard--grid,.wf-bcard--manifest{--bc-face-bg: var(--bc-paper-1)}.wf-bcard--schema{--bc-face-bg: #0C1526}.wf-bcard--letter{--bc-face-bg: var(--bc-paper-1)}.wf-bcard--swiss,.wf-bcard--formal,.wf-bcard--syntax{--bc-face-bg: var(--bc-paper-0)}.wf-bcard--dark{--bc-face-bg: #111114}@media (prefers-reduced-motion: reduce){.wf-bcard__flip{transition:none}.wf-bcard--shell .wf-bcard__name:after{animation:none}}.wf-btn__file{font-style:normal;font-size:.8em;opacity:.72;margin-left:7px}.wf-card--empty{display:grid;place-items:center;min-height:120px;background:none;border-style:dashed;opacity:.5}.wf-card__slot{font-size:22px;opacity:.6}body.pb-preview .wf-card--empty{display:none}html{scroll-behavior:smooth}.wf__region{scroll-margin-top:76px}.wf-detail{display:none}.wf-detail:target{display:grid;place-items:center;position:fixed;top:0;right:0;bottom:0;left:0;z-index:40;padding:24px}.wf-detail.is-open{display:grid;place-items:center;position:fixed;top:0;right:0;bottom:0;left:0;z-index:40;padding:24px}.wf-detail__scrim{position:absolute;top:0;right:0;bottom:0;left:0;background:#0000008c;cursor:pointer}.wf-detail__box{position:relative;width:min(680px,100%);max-height:88vh;display:flex;flex-direction:column;gap:10px;padding:24px;overflow-y:auto;background:var(--wf-surface);border:1px solid var(--wf-line);border-radius:14px;box-shadow:0 24px 64px #0000004d}.wf-detail__close{position:absolute;top:12px;right:14px;width:28px;height:28px;display:grid;place-items:center;font-size:.9em;line-height:1;color:inherit;text-decoration:none;border:1px solid var(--wf-line);border-radius:50%;cursor:pointer}.wf-detail__img{display:block;width:100%;max-height:38vh;object-fit:cover;border-radius:9px}.wf-detail__title{font-size:1.5em;line-height:1.25}.wf-detail__body{margin:0;font-size:.95em;line-height:1.75;color:var(--wf-muted);white-space:pre-line}.wf-card.has-detail{cursor:pointer}.wf-card.has-detail:hover{border-color:var(--wf-accent)}.wf-contact{min-width:0;display:flex;flex-direction:column;gap:12px;width:100%;max-width:var(--wf-max);margin:0 auto}.wf-contact__mail{color:var(--wf-accent);text-decoration:none;border-bottom:1px solid color-mix(in srgb,var(--wf-accent) 45%,transparent);align-self:inherit}.wf-contact__mail.is-big{font-size:2em;line-height:1.2;letter-spacing:-.02em;border-bottom-width:2px}.wf-contact__meta{font-size:.85em;color:var(--wf-muted)}.wf-contact__meta a{color:inherit;text-decoration:none}.wf-contact__meta i{font-style:normal;opacity:.5}@media (max-width: 1024px){.wf-gal__grid,.wf-sec__cols,.wf-main{grid-template-columns:repeat(2,minmax(0,1fr))!important}}@media (max-width: 760px){.wf,.wf--row{display:flex!important;flex-direction:column}.wf-gal__grid,.wf-sec__cols,.wf-main{grid-template-columns:1fr!important}.wf__region{align-self:stretch!important;justify-self:stretch!important;width:auto!important}.wf__region.is-sticky{position:static!important}.wf-bar{flex-wrap:wrap;gap:10px}.wf-nav{flex-wrap:wrap}.wf-aside{align-items:flex-start!important;text-align:left!important}.wf-detail__box{padding:18px}.wf-links--list .wf-link{flex-direction:column;align-items:flex-start;gap:2px}}@media (max-width: 460px){.wf-links--buttons .wf-link{padding:8px 13px}.wf-contact__mail.is-big{font-size:1.35em}}.wf-bg{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;pointer-events:none}.wf-bg--fixed{position:fixed}.wf-page:has(>.wf-bg),.wf-page:has(>.wf-bgshift){position:relative}.wf-page:has(>.wf-bgshift)>.wf,.wf-page:has(>.wf-bgshift)>.wf--row,.wf-page:has(>.wf-bgshift)>.wf__add{position:relative;z-index:1}.wf-bgshift{position:fixed;top:0;right:0;bottom:0;left:0;z-index:0;opacity:0;pointer-events:none;animation:wf-bgshift-fade linear both;animation-duration:1ms;animation-range:cover 0% cover 100%}@keyframes wf-bgshift-fade{0%{opacity:0}28%{opacity:1}72%{opacity:1}to{opacity:0}}.wf-page:has(>.wf-bg)>.wf,.wf-page:has(>.wf-bg)>.wf--row{position:relative;z-index:1}.wf-page:has(>.wf-bg)>.wf__add{position:relative;z-index:1}.wf-bg__media{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;object-fit:cover;display:block}.wf-bg--tile .wf-bg__media{width:auto;height:auto;object-fit:none;display:none}.wf-bg--tile{background-repeat:repeat;background-size:220px auto}.wf-bg__veil{position:absolute;top:0;right:0;bottom:0;left:0;display:block}.wf-bg.has-gradient .wf-bg__veil{background-image:linear-gradient(to bottom,transparent 30%,rgba(0,0,0,.75))}@keyframes wf-bg-zoom{0%{transform:scale(1)}to{transform:scale(1.03)}}.wf-bg--zoom .wf-bg__media{animation:wf-bg-zoom 30s ease-in-out infinite alternate}@media (prefers-reduced-motion: reduce){.wf-bg--zoom .wf-bg__media{animation:none}}.wf-tfx--chars .wf-tfx__w{display:inline-block}.wf-tfx--chars .wf-tfx__ch{display:inline-block;position:relative;animation:wf-tfx-hide calc(var(--tfx-delay, 0ms) + var(--i, 0) * var(--tfx-step, 40ms)) steps(1,end)}@keyframes wf-tfx-hide{0%,to{opacity:0}}.wf-tfx--chars .wf-tfx__ch:after{content:"";position:absolute;right:-.14em;top:6%;bottom:4%;width:.07em;min-width:2px;background:currentColor;opacity:0;animation:wf-tfx-caret var(--tfx-step, 40ms) steps(1,end);animation-delay:calc(var(--tfx-delay, 0ms) + var(--i, 0) * var(--tfx-step, 40ms))}.wf-tfx--chars .wf-tfx__w:last-child>.wf-tfx__ch:last-child:after{animation:wf-tfx-caret-end .8s steps(1,end) 3;animation-delay:calc(var(--tfx-delay, 0ms) + var(--i, 0) * var(--tfx-step, 40ms))}@keyframes wf-tfx-caret{0%,to{opacity:1}}@keyframes wf-tfx-caret-end{0%,49%{opacity:1}50%,to{opacity:0}}.wf-tfx--up :is(.wf-hero__title,.wf-sec__title,.wf-aside__name,.wf-card__title,.wf-cover__title,.wf-cta__title),.wf-tfx--up.wf-tfx-on--all :is(.wf-hero__sub,.wf-sec__body,.wf-aside__bio){animation:wf-tfx-up .6s cubic-bezier(.2,.7,.2,1) both;animation-delay:var(--tfx-delay, 0ms)}@keyframes wf-tfx-up{0%{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}.wf-tfx--blur :is(.wf-hero__title,.wf-sec__title,.wf-aside__name,.wf-card__title,.wf-cover__title,.wf-cta__title),.wf-tfx--blur.wf-tfx-on--all :is(.wf-hero__sub,.wf-sec__body,.wf-aside__bio){animation:wf-tfx-blur .8s ease-out both;animation-delay:var(--tfx-delay, 0ms)}@keyframes wf-tfx-blur{0%{opacity:0;filter:blur(12px)}to{opacity:1;filter:none}}.wf-tfx--spread :is(.wf-hero__title,.wf-sec__title,.wf-aside__name,.wf-cover__title,.wf-cta__title){animation:wf-tfx-spread .9s cubic-bezier(.2,.7,.2,1) both;animation-delay:var(--tfx-delay, 0ms)}@keyframes wf-tfx-spread{0%{opacity:0;letter-spacing:-.14em}to{opacity:1;letter-spacing:inherit}}.wf-tfx--underline :is(.wf-hero__title,.wf-sec__title,.wf-aside__name,.wf-cover__title,.wf-cta__title){position:relative;padding-bottom:.24em}.wf-tfx--underline :is(.wf-hero__title,.wf-sec__title,.wf-aside__name,.wf-cover__title,.wf-cta__title):after{content:"";position:absolute;left:0;bottom:0;width:100%;height:2px;background:var(--wf-accent);transform-origin:left;animation:wf-tfx-line .7s cubic-bezier(.2,.7,.2,1) both;animation-delay:var(--tfx-delay, 0ms)}@keyframes wf-tfx-line{0%{transform:scaleX(0)}to{transform:scaleX(1)}}.wf-tfx--glitch :is(.wf-hero__title,.wf-sec__title,.wf-aside__name,.wf-cover__title,.wf-cta__title),.wf-tfx--glitch.wf-tfx-on--all :is(.wf-hero__sub,.wf-sec__body){animation:wf-tfx-glitch 3.2s steps(1) infinite;animation-delay:var(--tfx-delay, 0ms)}@keyframes wf-tfx-glitch{0%,88%,to{text-shadow:none}89%{text-shadow:2px 0 rgba(34,211,238,.85),-2px 0 rgba(244,114,182,.85)}91%{text-shadow:-3px 0 rgba(34,211,238,.85),3px 1px rgba(244,114,182,.85)}93%{text-shadow:2px -1px rgba(34,211,238,.85),-2px 1px rgba(244,114,182,.85)}95%{text-shadow:-1px 0 rgba(34,211,238,.85),1px 0 rgba(244,114,182,.85)}97%{text-shadow:none}}@media (prefers-reduced-motion: reduce){.wf-tfx--glitch :is(.wf-hero__title,.wf-sec__title,.wf-aside__name,.wf-cover__title,.wf-cta__title),.wf-tfx--glitch.wf-tfx-on--all :is(.wf-hero__sub,.wf-sec__body){animation:none}}.wf-tfx--gradient :is(.wf-hero__title,.wf-sec__title,.wf-aside__name,.wf-cover__title,.wf-cta__title){background-image:linear-gradient(100deg,var(--wf-accent),color-mix(in srgb,var(--wf-accent) 35%,var(--wf-text, currentColor)));-webkit-background-clip:text;background-clip:text;color:transparent}.wf-tfx--fill :is(.wf-hero__title,.wf-sec__title,.wf-aside__name,.wf-cover__title,.wf-cta__title),.wf-tfx--fill.wf-tfx-on--all :is(.wf-hero__sub,.wf-sec__body,.wf-aside__bio){background-image:linear-gradient(to right,var(--wf-text, #1c1917) 50%,color-mix(in srgb,var(--wf-text, #1c1917) 24%,transparent) 50%);background-size:200% 100%;background-position:0% 0;-webkit-background-clip:text;background-clip:text;color:transparent;animation:wf-tfx-fill linear both;animation-duration:1ms;animation-timeline:view();animation-range:entry 10% cover 55%}@keyframes wf-tfx-fill{0%{background-position:100% 0}}body.pb-editing .wf-tfx--fill :is(.wf-hero__title,.wf-sec__title,.wf-aside__name,.wf-hero__sub,.wf-sec__body,.wf-aside__bio){caret-color:var(--wf-text, #1c1917)}@media (prefers-reduced-motion: reduce){.wf-tfx .wf-tfx__ch,.wf-tfx :is(.wf-hero__title,.wf-sec__title,.wf-aside__name,.wf-card__title,.wf-cover__title,.wf-cta__title,.wf-hero__sub,.wf-sec__body,.wf-aside__bio){animation:none!important;opacity:1!important;filter:none!important}.wf-tfx--underline :is(.wf-hero__title,.wf-sec__title,.wf-aside__name,.wf-cover__title,.wf-cta__title):after{animation:none!important;transform:none}.wf-tfx--chars .wf-tfx__ch:after{animation:none!important;opacity:0!important}}.wf-progress{position:fixed;top:0;left:0;width:100%;height:3px;z-index:80;pointer-events:none;background:var(--wf-accent);transform-origin:0 50%;transform:scaleX(0);animation:wf-progress linear both;animation-duration:1ms;animation-timeline:scroll()}@keyframes wf-progress{to{transform:scaleX(1)}}.wf-grain{position:fixed;top:0;right:0;bottom:0;left:0;z-index:0;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23g)'/%3E%3C/svg%3E")}.wf-bg--sfx-zoom .wf-bg__media,.wf-bg--sfx-drift .wf-bg__media,.wf-bg--sfx-blur .wf-bg__media,.wf-bg--sfx-dim .wf-bg__veil{animation-timeline:scroll();animation-timing-function:linear;animation-fill-mode:both;animation-duration:1ms}.wf-bg--sfx-zoom .wf-bg__media{animation-name:wf-bgs-zoom}@keyframes wf-bgs-zoom{0%{transform:scale(1.04)}to{transform:scale(1.28)}}.wf-bg--sfx-drift .wf-bg__media{animation-name:wf-bgs-drift}@keyframes wf-bgs-drift{0%{transform:scale(1.16) translateY(-5%)}to{transform:scale(1.16) translateY(5%)}}.wf-bg--sfx-blur .wf-bg__media{animation-name:wf-bgs-blur}@keyframes wf-bgs-blur{0%{filter:blur(0);transform:scale(1.06)}to{filter:blur(11px);transform:scale(1.12)}}.wf-bg--sfx-dim .wf-bg__veil{animation-name:wf-bgs-dim}@keyframes wf-bgs-dim{0%{opacity:.35}to{opacity:1}}@media (prefers-reduced-motion: reduce){.wf-bg--sfx-zoom .wf-bg__media,.wf-bg--sfx-drift .wf-bg__media,.wf-bg--sfx-blur .wf-bg__media,.wf-bg--sfx-dim .wf-bg__veil{animation:none!important}}.wf-page a:not(.wf-btn){color:inherit;text-decoration:none}.wf-page a:visited{color:inherit}.wf-page{scrollbar-width:none}.wf-page::-webkit-scrollbar{display:none}html,body{overflow-x:clip;scrollbar-width:none;-ms-overflow-style:none}html::-webkit-scrollbar,body::-webkit-scrollbar{display:none}.wf-down{position:fixed;right:18px;bottom:18px;z-index:30;width:42px;height:42px;display:grid;place-items:center;color:var(--wf-text, currentColor);background:color-mix(in srgb,var(--wf-surface) 82%,transparent);border:1px solid var(--wf-line);border-radius:50%;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);text-decoration:none;animation:wf-down-bob 1.9s ease-in-out infinite}.wf-down:hover{border-color:var(--wf-accent);color:var(--wf-accent)}.wf-down svg{display:block}@keyframes wf-down-bob{0%,to{transform:translateY(0)}50%{transform:translateY(5px)}}@media (prefers-reduced-motion: reduce){.wf-down{animation:none}}body.pb-editing .wf-down{display:none}@keyframes wf-down-away{0%{opacity:1;visibility:visible}70%{opacity:0;visibility:visible}71%,to{opacity:0;visibility:hidden}}@supports (animation-timeline: scroll()){.wf-down{animation:wf-down-bob 1.9s ease-in-out infinite,wf-down-away linear both;animation-timeline:auto,scroll();animation-range:normal,0 220px}@media (prefers-reduced-motion: reduce){.wf-down{animation:wf-down-away linear both;animation-timeline:scroll();animation-range:0 220px}}}.wf-intro{position:fixed;top:0;right:0;bottom:0;left:0;z-index:120;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;background:var(--wf-bg, #101014);pointer-events:none;animation:wf-intro-out .6s cubic-bezier(.7,0,.3,1) 1.9s both}.wf-intro__name{font-size:clamp(20px,4vw,44px);font-weight:700;letter-spacing:.04em;animation:wf-intro-name .7s ease both}.wf-intro__bar{position:relative;overflow:hidden;width:min(260px,60vw);height:2px;background:color-mix(in srgb,var(--wf-text, currentColor) 16%,transparent)}.wf-intro__bar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;transform-origin:left;background:var(--wf-accent, currentColor);animation:wf-intro-fill 1.55s cubic-bezier(.2,.7,.2,1) .15s both}@keyframes wf-intro-name{0%{opacity:0;transform:translateY(14px)}to{opacity:1}}@keyframes wf-intro-fill{0%{transform:scaleX(0)}to{transform:scaleX(1)}}@keyframes wf-intro-out{to{transform:translateY(-101%);visibility:hidden}}@media (prefers-reduced-motion: reduce){.wf-intro{display:none}}.wf-enter .wf__region[data-enter]{animation-timeline:view();animation-range:entry var(--enter-at, 2%) cover calc(30% + var(--enter-at, 2%));animation-timing-function:cubic-bezier(.2,.7,.2,1);animation-fill-mode:both;animation-duration:1ms}.wf-enter--sides .wf__region[data-enter=left]{animation-name:wf-in-left}.wf-enter--sides .wf__region[data-enter=right]{animation-name:wf-in-right}.wf-enter--sides .wf__region[data-enter=up],.wf-enter--up .wf__region[data-enter]{animation-name:wf-in-up}.wf-enter--zoom .wf__region[data-enter]{animation-name:wf-in-zoom}@keyframes wf-in-left{0%{opacity:0;transform:translate(-14%)}to{opacity:1;transform:none}}@keyframes wf-in-right{0%{opacity:0;transform:translate(14%)}to{opacity:1;transform:none}}@keyframes wf-in-up{0%{opacity:0;transform:translateY(34px)}to{opacity:1;transform:none}}@keyframes wf-in-zoom{0%{opacity:0;transform:scale(.94)}to{opacity:1;transform:none}}body.pb-editing .wf-enter .wf__region[data-enter]{animation-range:entry 0% cover 18%}body.pb-editing .wf-enter .wf__region[data-enter]:focus-within{animation:none!important}@media (prefers-reduced-motion: reduce){.wf-enter .wf__region[data-enter]{animation:none!important}}.wf__region.is-free{position:fixed;z-index:6;border:0!important;background:none!important;padding:0!important;overflow:visible;pointer-events:none;translate:-50% -50%}body.pb-editing .wf__region.is-free{pointer-events:auto;cursor:grab}body.pb-editing .wf__region.is-free:active{cursor:grabbing}@media (max-width: 760px){.wf__region.is-free{width:clamp(88px,30vw,32vw)!important;left:78%!important;top:82%!important}}@media (max-height: 520px){.wf-3d{height:min(56vh,260px)!important}}`,Fc=":root{--fx-ease: cubic-bezier(.22, 1, .36, 1);--fx-ease-out: cubic-bezier(.16, 1, .3, 1);--fx-duration: .42s;--fx-duration-fast: .22s;--fx-radius: 16px;--fx-surface: #ffffff;--fx-surface-2: #f4f5f7;--fx-border: rgba(0, 0, 0, .08);--fx-text: #16181d;--fx-text-dim: #6b7280;--fx-accent: #5b5bd6;--fx-glare: rgba(255, 255, 255, .55);--fx-shadow: 0 10px 30px -12px rgba(16, 18, 29, .28)}@media (prefers-color-scheme: dark){:root{--fx-surface: #16181d;--fx-surface-2: #1e2027;--fx-border: rgba(255, 255, 255, .1);--fx-text: #f2f3f5;--fx-text-dim: #9ca3af;--fx-glare: rgba(255, 255, 255, .22);--fx-shadow: 0 12px 34px -14px rgba(0, 0, 0, .7)}}:root[data-theme=dark]{--fx-surface: #16181d;--fx-surface-2: #1e2027;--fx-border: rgba(255, 255, 255, .1);--fx-text: #f2f3f5;--fx-text-dim: #9ca3af;--fx-glare: rgba(255, 255, 255, .22);--fx-shadow: 0 12px 34px -14px rgba(0, 0, 0, .7)}:root[data-theme=light]{--fx-surface: #ffffff;--fx-surface-2: #f4f5f7;--fx-border: rgba(0, 0, 0, .08);--fx-text: #16181d;--fx-text-dim: #6b7280;--fx-glare: rgba(255, 255, 255, .55);--fx-shadow: 0 10px 30px -12px rgba(16, 18, 29, .28)}.fx{-webkit-font-smoothing:antialiased}.fx-inert{transform:none!important}@media (prefers-reduced-motion: reduce){.fx,.fx *{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}}.fx :focus-visible,.fx:focus-visible{outline:2px solid var(--fx-accent);outline-offset:3px;border-radius:6px}.fx-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}",Om='.fx-tilt-card{position:relative;transform-style:preserve-3d;transform:perspective(var(--fx-tilt-perspective, 900px)) rotateX(var(--fx-tilt-rx, 0deg)) rotateY(var(--fx-tilt-ry, 0deg)) scale3d(var(--fx-tilt-scale, 1),var(--fx-tilt-scale, 1),1);backface-visibility:hidden}.fx-tilt-card[data-fx-tilting="1"]{will-change:transform}.fx-tilt-card [data-fx-depth]{transform:translate3d(calc(var(--fx-tilt-nx, 0) * var(--fx-depth, 0) * -.22px),calc(var(--fx-tilt-ny, 0) * var(--fx-depth, 0) * -.22px),calc(var(--fx-depth, 0) * 1px));transition:transform 80ms linear}.fx-tilt-card__glare{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;overflow:hidden;background:radial-gradient(circle at var(--fx-tilt-px, 50%) var(--fx-tilt-py, 50%),var(--fx-glare) 0%,transparent 60%);opacity:var(--fx-tilt-glare-o, 0);transform:translateZ(var(--fx-tilt-glare-z, 0px)) scale(var(--fx-tilt-glare-scale, 1))}.fx-inert .fx-tilt-card__glare,.fx-tilt-card.fx-inert .fx-tilt-card__glare{display:none}.fx-tilt-card.fx-inert [data-fx-depth]{transform:none}.fx-card{display:block;border-radius:var(--fx-radius, 16px);background:var(--fx-surface);border:1px solid var(--fx-border);box-shadow:var(--fx-shadow);color:var(--fx-text);padding:20px;text-decoration:none;transition:box-shadow var(--fx-duration-fast) var(--fx-ease)}.fx-card[data-fx-tilting="1"]{box-shadow:0 26px 50px -20px #10121d6b}.fx-card__media{display:block;width:100%;aspect-ratio:16 / 10;object-fit:cover;border-radius:calc(var(--fx-radius, 16px) - 8px);background:var(--fx-surface-2);margin-bottom:16px}.fx-card__title{margin:0 0 6px;font-size:1.0625rem;font-weight:650;letter-spacing:-.01em}.fx-card__desc{margin:0;font-size:.875rem;line-height:1.55;color:var(--fx-text-dim)}.fx-card__tag{display:inline-block;margin-top:14px;padding:4px 10px;border-radius:999px;font-size:.75rem;font-weight:600;color:var(--fx-accent);background:color-mix(in srgb,var(--fx-accent) 12%,transparent)}',Bm=".fx-scroll-reveal{opacity:0;transition:opacity var(--fx-reveal-duration, .7s) var(--fx-ease-out) var(--fx-reveal-delay, 0ms),transform var(--fx-reveal-duration, .7s) var(--fx-ease-out) var(--fx-reveal-delay, 0ms)}.fx-scroll-reveal.is-revealed{opacity:1;transform:none}.fx-scroll-reveal[data-fx-preset=rise]{transform:translate3d(0,var(--fx-reveal-distance, 28px),0)}.fx-scroll-reveal[data-fx-preset=depth]{transform:perspective(var(--fx-reveal-perspective, 1000px)) translate3d(0,calc(var(--fx-reveal-distance, 28px) * .4),var(--fx-reveal-depth, -140px)) scale(var(--fx-reveal-scale, .92))}.fx-scroll-reveal[data-fx-preset=flip]{transform-origin:50% 100%;transform:perspective(var(--fx-reveal-perspective, 1000px)) rotateX(var(--fx-reveal-rotate, 22deg)) translate3d(0,calc(var(--fx-reveal-distance, 28px) * .5),0)}.fx-scroll-reveal[data-fx-preset=swing]{transform-origin:0% 50%;transform:perspective(var(--fx-reveal-perspective, 1000px)) rotateY(calc(var(--fx-reveal-rotate, 22deg) * -1)) translate3d(calc(var(--fx-reveal-distance, 28px) * -.5),0,0)}.fx-scroll-reveal[data-fx-preset=zoom]{transform:scale(var(--fx-reveal-scale, .92))}@supports (animation-timeline: view()){.fx-scroll-reveal[data-fx-mode=scrub]{transition:none;animation-fill-mode:both;animation-timing-function:linear;animation-timeline:view();animation-range:var(--fx-reveal-start, entry 10%) var(--fx-reveal-end, cover 40%)}.fx-scroll-reveal[data-fx-mode=scrub][data-fx-preset=rise]{animation-name:fx-reveal-rise}.fx-scroll-reveal[data-fx-mode=scrub][data-fx-preset=depth]{animation-name:fx-reveal-depth}.fx-scroll-reveal[data-fx-mode=scrub][data-fx-preset=flip]{animation-name:fx-reveal-flip}.fx-scroll-reveal[data-fx-mode=scrub][data-fx-preset=swing]{animation-name:fx-reveal-swing}.fx-scroll-reveal[data-fx-mode=scrub][data-fx-preset=zoom]{animation-name:fx-reveal-zoom}}@keyframes fx-reveal-rise{0%{opacity:0;transform:translate3d(0,var(--fx-reveal-distance, 28px),0)}to{opacity:1;transform:none}}@keyframes fx-reveal-depth{0%{opacity:0;transform:perspective(var(--fx-reveal-perspective, 1000px)) translate3d(0,calc(var(--fx-reveal-distance, 28px) * .4),var(--fx-reveal-depth, -140px)) scale(var(--fx-reveal-scale, .92))}to{opacity:1;transform:none}}@keyframes fx-reveal-flip{0%{opacity:0;transform:perspective(var(--fx-reveal-perspective, 1000px)) rotateX(var(--fx-reveal-rotate, 22deg)) translate3d(0,calc(var(--fx-reveal-distance, 28px) * .5),0)}to{opacity:1;transform:none}}@keyframes fx-reveal-swing{0%{opacity:0;transform:perspective(var(--fx-reveal-perspective, 1000px)) rotateY(calc(var(--fx-reveal-rotate, 22deg) * -1)) translate3d(calc(var(--fx-reveal-distance, 28px) * -.5),0,0)}to{opacity:1;transform:none}}@keyframes fx-reveal-zoom{0%{opacity:0;transform:scale(var(--fx-reveal-scale, .92))}to{opacity:1;transform:none}}.fx-scroll-reveal[data-fx-mode=scrub][data-fx-preset=flip]{transform-origin:50% 100%}.fx-scroll-reveal[data-fx-mode=scrub][data-fx-preset=swing]{transform-origin:0% 50%}",qm='.fx-silk{position:relative;isolation:isolate;overflow:hidden;--fx-silk-c1: #1b1d3a;--fx-silk-c2: #5b5bd6;--fx-silk-c3: #a78bfa;background-color:var(--fx-silk-c1);background-image:radial-gradient(120% 90% at 18% 12%,var(--fx-silk-c2) 0%,transparent 58%),radial-gradient(100% 80% at 82% 78%,var(--fx-silk-c3) 0%,transparent 55%),radial-gradient(90% 70% at 55% 45%,color-mix(in srgb,var(--fx-silk-c2) 55%,var(--fx-silk-c3)) 0%,transparent 62%)}.fx-silk-bg__canvas{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;display:block;width:100%;height:100%;pointer-events:none;opacity:0;transition:opacity .6s var(--fx-ease-out)}.fx-silk-bg--ready .fx-silk-bg__canvas{opacity:1}.fx-silk-bg--lost .fx-silk-bg__canvas{opacity:0}.fx-silk>*:not(.fx-layer){position:relative;z-index:1}.fx-silk--scrim:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;pointer-events:none;background:linear-gradient(to bottom,#00000026,#00000073)}.fx-silk--scrim-light:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;pointer-events:none;background:linear-gradient(to bottom,#ffffff40,#ffffff8c)}.fx-silk-hero{display:grid;place-items:center;min-height:min(80vh,760px);border-radius:var(--fx-radius, 16px);padding:40px 24px;text-align:center;color:#fff}.fx-silk-hero h1{margin:0 0 14px;font-size:clamp(2rem,6vw,4.2rem);font-weight:700;letter-spacing:-.035em;line-height:1.04;text-shadow:0 2px 24px rgba(0,0,0,.35)}.fx-silk-hero p{margin:0;font-size:clamp(.95rem,2vw,1.15rem);color:#ffffffd1}',Im=".fx-dots{position:relative;isolation:isolate;overflow:hidden;--fx-dot-color: #6b7280}@media (prefers-color-scheme: dark){.fx-dots{--fx-dot-color: #9ca3af}}:root[data-theme=dark] .fx-dots{--fx-dot-color: #9ca3af}:root[data-theme=light] .fx-dots{--fx-dot-color: #6b7280}.fx-dot-grid-wave__canvas{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;display:block;pointer-events:none;opacity:0;transition:opacity .5s var(--fx-ease-out)}.fx-dot-grid-wave .fx-dot-grid-wave__canvas{opacity:1}.fx-dots>*:not(.fx-layer){position:relative;z-index:1}.fx-dots--fade .fx-dot-grid-wave__canvas{-webkit-mask-image:radial-gradient(ellipse 78% 78% at 50% 50%,#000 45%,transparent 100%);mask-image:radial-gradient(ellipse 78% 78% at 50% 50%,#000 45%,transparent 100%)}.fx-dots--fade-y .fx-dot-grid-wave__canvas{-webkit-mask-image:linear-gradient(to bottom,transparent 0%,#000 22%,#000 78%,transparent 100%);mask-image:linear-gradient(to bottom,transparent 0%,#000 22%,#000 78%,transparent 100%)}.fx-dots-section{display:grid;place-items:center;min-height:min(62vh,560px);padding:56px 24px;border-radius:var(--fx-radius, 16px);background:var(--fx-surface);text-align:center;color:var(--fx-text)}.fx-dots-section h2{margin:0 0 12px;font-size:clamp(1.6rem,4vw,2.6rem);font-weight:700;letter-spacing:-.03em}.fx-dots-section p{margin:0;max-width:46ch;color:var(--fx-text-dim);line-height:1.6}",Hm='.fx-magnetic-button{position:relative;transform-style:preserve-3d;transform:perspective(600px) translate3d(var(--fx-mag-x, 0px),var(--fx-mag-y, 0px),0) rotateX(var(--fx-mag-rx, 0deg)) rotateY(var(--fx-mag-ry, 0deg)) scale(var(--fx-mag-scale, 1));overflow:hidden;isolation:isolate}.fx-magnetic-button[data-fx-magnetic="1"]{will-change:transform}.fx-magnetic-button [data-fx-label]{position:relative;z-index:1;display:inline-block;transform:translate3d(calc(var(--fx-mag-x, 0px) * var(--fx-mag-lf, .5)),calc(var(--fx-mag-y, 0px) * var(--fx-mag-lf, .5)),0);will-change:transform}.fx-magnetic-button__glow{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;pointer-events:none;border-radius:inherit;opacity:var(--fx-mag-glow, 0);background:radial-gradient(circle at var(--fx-mag-px, 50%) var(--fx-mag-py, 50%),var(--fx-glare) 0%,transparent 55%)}.fx-magnetic-button.fx-inert [data-fx-label]{transform:none}.fx-magnetic-button.fx-inert .fx-magnetic-button__glow{display:none}.fx-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:14px 28px;border:0;border-radius:999px;font:inherit;font-size:.9375rem;font-weight:650;letter-spacing:-.005em;line-height:1;text-decoration:none;white-space:nowrap;color:#fff;background:var(--fx-accent);cursor:pointer;box-shadow:0 8px 22px -10px color-mix(in srgb,var(--fx-accent) 80%,#000);transition:box-shadow var(--fx-duration-fast) var(--fx-ease),background-color var(--fx-duration-fast) var(--fx-ease)}.fx-btn[data-fx-magnetic="1"]{box-shadow:0 16px 34px -12px color-mix(in srgb,var(--fx-accent) 85%,#000)}.fx-btn:active{filter:brightness(.94)}.fx-btn--ghost{color:var(--fx-text);background:transparent;box-shadow:inset 0 0 0 1px var(--fx-border)}.fx-btn--ghost[data-fx-magnetic="1"]{box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--fx-accent) 60%,transparent),0 14px 30px -16px #00000080}',Vm=".fx-flip-card{position:relative;perspective:var(--fx-flip-perspective, 1400px);cursor:pointer;-webkit-tap-highlight-color:transparent}.fx-flip-card__inner{position:relative;width:100%;height:100%;transform-style:preserve-3d;transition:transform var(--fx-flip-duration, .6s) var(--fx-ease)}.fx-flip-card__face{backface-visibility:hidden;-webkit-backface-visibility:hidden;border-radius:inherit;transform:translateZ(0)}.fx-flip-card__face--back{position:absolute;top:0;right:0;bottom:0;left:0;transform:rotateY(var(--fx-flip-deg, 180deg))}.fx-flip-card.is-flipped .fx-flip-card__inner{transform:rotateY(var(--fx-flip-deg, 180deg))}.fx-flip-card[data-fx-flip-axis=x] .fx-flip-card__face--back,.fx-flip-card[data-fx-flip-axis=x].is-flipped .fx-flip-card__inner{transform:rotateX(var(--fx-flip-deg, 180deg))}.fx-flip-card:hover .fx-flip-card__inner,.fx-flip-card:focus-within .fx-flip-card__inner,.fx-flip-card.is-flipped .fx-flip-card__inner{will-change:transform}.fx-flip-card:focus-visible{outline:2px solid var(--fx-accent);outline-offset:4px;border-radius:var(--fx-radius, 16px)}.fx-flip{border-radius:var(--fx-radius, 16px);min-height:200px}.fx-flip .fx-flip-card__face{display:flex;flex-direction:column;justify-content:center;gap:8px;height:100%;padding:24px;border-radius:var(--fx-radius, 16px);border:1px solid var(--fx-border);box-shadow:var(--fx-shadow);color:var(--fx-text)}.fx-flip .fx-flip-card__face--front{background:var(--fx-surface)}.fx-flip .fx-flip-card__face--back{background:linear-gradient(145deg,var(--fx-accent),color-mix(in srgb,var(--fx-accent) 55%,#000));color:#fff}.fx-flip__title{margin:0;font-size:1.125rem;font-weight:650;letter-spacing:-.01em}.fx-flip__body{margin:0;font-size:.875rem;line-height:1.6;color:var(--fx-text-dim)}.fx-flip .fx-flip-card__face--back .fx-flip__body{color:#ffffffd9}.fx-flip__hint{margin-top:auto;font-size:.75rem;font-weight:600;letter-spacing:.02em;color:var(--fx-text-dim);opacity:.8}.fx-flip .fx-flip-card__face--back .fx-flip__hint{color:#ffffffb3}",Wm=".fx-char{position:relative;display:block;width:100%;aspect-ratio:3 / 4;--fx-char-color: #ffffff;background:#16181d;border-radius:var(--fx-radius, 16px);overflow:hidden;isolation:isolate}.fx-char--light{--fx-char-color: #16181d;background:var(--fx-surface-2)}.fx-char--bare{background:transparent;border-radius:0;--fx-char-color: currentColor}@media (prefers-color-scheme: dark){.fx-char--bare{--fx-char-color: currentColor}}.fx-character__canvas{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;display:block;pointer-events:none;opacity:0;transition:opacity .4s var(--fx-ease-out)}.fx-character .fx-character__canvas{opacity:1}.fx-char>*:not(.fx-character__canvas){position:relative;z-index:1}.fx-char--interactive{cursor:pointer;-webkit-tap-highlight-color:transparent}.fx-char--interactive:focus-visible{outline:2px solid var(--fx-accent);outline-offset:3px}.fx-char--fixed{position:fixed;right:20px;bottom:20px;z-index:40;width:clamp(90px,12vw,150px);aspect-ratio:3 / 4;background:transparent;border-radius:0;overflow:visible;pointer-events:none}@media (max-width: 640px){.fx-char--fixed{display:none}}.fx-char-hero{display:grid;grid-template-columns:1fr;gap:24px;align-items:center}@media (min-width: 720px){.fx-char-hero{grid-template-columns:1.2fr .8fr}}.fx-char-hero__text h1{margin:0 0 12px;font-size:clamp(1.8rem,5vw,3.2rem);font-weight:700;letter-spacing:-.03em;line-height:1.08}.fx-char-hero__text p{margin:0;color:var(--fx-text-dim);line-height:1.6}",Um='.fx-model{position:relative;display:block;width:100%;aspect-ratio:4 / 3;overflow:hidden;border-radius:var(--fx-radius, 16px);background:var(--wf-surface, var(--fx-surface-2));isolation:isolate}.fx-model__poster{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:100%;height:100%;object-fit:contain;display:block;transition:opacity .5s var(--fx-ease-out)}.fx-model--loaded .fx-model__poster{opacity:0;pointer-events:none}.fx-model__viewer{position:absolute;top:0;right:0;bottom:0;left:0;z-index:2;width:100%;height:100%;opacity:0;transition:opacity .5s var(--fx-ease-out);background-color:transparent;--poster-color: transparent;cursor:grab}.fx-model__viewer:active{cursor:grabbing}.fx-model--loaded .fx-model__viewer{opacity:1}.fx-model:after{content:"";position:absolute;left:0;bottom:0;z-index:3;height:2px;width:calc(var(--fx-model-progress, 0) * 100%);background:var(--fx-accent);opacity:0;transition:opacity .3s var(--fx-ease);pointer-events:none}.fx-model--loading:after{opacity:1}.fx-model--failed{outline:1px dashed color-mix(in srgb,var(--fx-text-dim) 40%,transparent);outline-offset:-1px}.fx-model__hint{position:absolute;left:50%;bottom:12px;z-index:4;transform:translate(-50%);padding:6px 14px;border-radius:999px;font-size:.75rem;font-weight:600;letter-spacing:.01em;white-space:nowrap;color:var(--fx-text);background:color-mix(in srgb,var(--fx-surface) 82%,transparent);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);border:1px solid var(--fx-border);opacity:0;transition:opacity .4s var(--fx-ease-out) .6s;pointer-events:none}.fx-model--loaded .fx-model__hint{opacity:1}.fx-model--touched .fx-model__hint{opacity:0;transition-delay:0ms}.fx-model--square{aspect-ratio:1}.fx-model--wide{aspect-ratio:16 / 9}.fx-model--tall{aspect-ratio:3 / 4}',Gm=".fx-hover-preview__float{position:fixed;top:0;left:0;z-index:55;pointer-events:none;overflow:hidden;border-radius:10px;box-shadow:0 18px 44px #00000047;opacity:0;scale:.86;transition:opacity .2s ease,scale .24s cubic-bezier(.2,.7,.2,1)}.fx-hover-preview__float.is-on{opacity:1;scale:1}.fx-hover-preview__float img{display:block;width:100%;height:auto}@media (prefers-reduced-motion: reduce){.fx-hover-preview__float{transition:opacity .15s ease;scale:1}}",Ym=".fx-spotlight{position:relative}.fx-spotlight__glow{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;z-index:0;opacity:0;transition:opacity .35s ease;background:radial-gradient(var(--fx-spot-size, 420px) circle at var(--fx-spot-x, 50%) var(--fx-spot-y, 40%),color-mix(in srgb,var(--fx-spot-color, var(--wf-accent, #8b8bff)) calc(var(--fx-spot-alpha, .22) * 100%),transparent),transparent 70%)}.fx-spotlight.is-spot-on .fx-spotlight__glow{opacity:1}.fx-spotlight>*:not(.fx-layer){position:relative;z-index:1}",Km=".fx-starfield{position:relative}.fx-starfield__cv{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0}.fx-starfield>*:not(.fx-layer){position:relative;z-index:1}",$t="'Malgun Gothic', 'Apple SD Gothic Neo', 'Noto Sans KR'",hn=[{id:"sans",label:"모던 산세리프",tagline:"무난하고 안전",sample:"Aa 가",webfont:"Inter",files:[{weight:400,file:"inter-400.woff2"},{weight:700,file:"inter-700.woff2"}],font:`'Inter', -apple-system, 'Segoe UI', ${$t}, system-ui, sans-serif`,h1:50,h2:34,h3:19,body:16,small:13,hWeight:700,bWeight:400,tracking:-1.2,lineHeight:1.25,bodyLine:1.65},{id:"display",label:"초대형 타이틀",tagline:"첫 화면을 크게",sample:"Aa 가",webfont:"Space Grotesk",files:[{weight:400,file:"grotesk-400.woff2"},{weight:700,file:"grotesk-700.woff2"}],font:`'Space Grotesk', -apple-system, 'Segoe UI', ${$t}, system-ui, sans-serif`,h1:78,h2:42,h3:20,body:17,small:13,hWeight:700,bWeight:400,tracking:-3,lineHeight:1.05,bodyLine:1.6},{id:"serif",label:"세리프",tagline:"차분하고 고전적",sample:"Aa 가",webfont:"Playfair Display",files:[{weight:400,file:"playfair-400.woff2"},{weight:700,file:"playfair-700.woff2"}],font:"'Playfair Display', 'Nanum Myeongjo', Batang, Georgia, serif",h1:52,h2:36,h3:20,body:17,small:14,hWeight:700,bWeight:400,tracking:-.5,lineHeight:1.3,bodyLine:1.8},{id:"mono",label:"모노스페이스",tagline:"개발자다운",sample:"Aa 가",webfont:"JetBrains Mono",files:[{weight:400,file:"jetbrains-400.woff2"},{weight:700,file:"jetbrains-700.woff2"}],font:"'JetBrains Mono', 'Cascadia Code', D2Coding, Consolas, monospace",h1:40,h2:28,h3:17,body:14,small:12,hWeight:700,bWeight:400,tracking:-.5,lineHeight:1.35,bodyLine:1.7},{id:"geist",label:"Geist",tagline:"개발자 포트폴리오 유행",sample:"Aa 가",webfont:"Geist",files:[{weight:400,file:"geist-400.woff2"},{weight:700,file:"geist-700.woff2"}],font:`'Geist', -apple-system, 'Segoe UI', ${$t}, system-ui, sans-serif`,h1:52,h2:34,h3:19,body:16,small:13,hWeight:700,bWeight:400,tracking:-1.4,lineHeight:1.2,bodyLine:1.65},{id:"manrope",label:"Manrope",tagline:"부드럽고 친근한 UI",sample:"Aa 가",webfont:"Manrope",files:[{weight:400,file:"manrope-400.woff2"},{weight:700,file:"manrope-700.woff2"}],font:`'Manrope', -apple-system, 'Segoe UI', ${$t}, system-ui, sans-serif`,h1:48,h2:32,h3:19,body:16,small:13,hWeight:700,bWeight:400,tracking:-.8,lineHeight:1.25,bodyLine:1.7},{id:"dmsans",label:"DM Sans",tagline:"깔끔한 제품 화면",sample:"Aa 가",webfont:"DM Sans",files:[{weight:400,file:"dmsans-400.woff2"},{weight:700,file:"dmsans-700.woff2"}],font:`'DM Sans', -apple-system, 'Segoe UI', ${$t}, system-ui, sans-serif`,h1:50,h2:33,h3:19,body:16,small:13,hWeight:700,bWeight:400,tracking:-1,lineHeight:1.22,bodyLine:1.65},{id:"instrument",label:"Instrument Serif",tagline:"요즘 유행 세리프 타이틀",sample:"Aa 가",webfont:"Instrument Serif",files:[{weight:400,file:"instrument-400.woff2"}],font:"'Instrument Serif', 'Nanum Myeongjo', Batang, Georgia, serif",h1:62,h2:40,h3:21,body:17,small:14,hWeight:400,bWeight:400,tracking:-.5,lineHeight:1.1,bodyLine:1.75},{id:"fraunces",label:"Fraunces",tagline:"개성 있는 세리프",sample:"Aa 가",webfont:"Fraunces",files:[{weight:400,file:"fraunces-400.woff2"},{weight:700,file:"fraunces-700.woff2"}],font:"'Fraunces', 'Nanum Myeongjo', Batang, Georgia, serif",h1:54,h2:36,h3:20,body:17,small:14,hWeight:700,bWeight:400,tracking:-.6,lineHeight:1.25,bodyLine:1.8},{id:"custom",label:"내 글꼴 (업로드)",tagline:"ttf·otf·woff2 파일",sample:"Aa 가",webfont:null,files:[],font:`'PBCustom', -apple-system, 'Segoe UI', ${$t}, system-ui, sans-serif`,h1:50,h2:34,h3:19,body:16,small:13,hWeight:700,bWeight:400,tracking:-1,lineHeight:1.25,bodyLine:1.65}];function $l(e,r){var a,o;const n=(o=(a=/\.([a-z0-9]+)$/i.exec(r??""))==null?void 0:a[1])==null?void 0:o.toLowerCase(),t={ttf:"truetype",otf:"opentype",woff:"woff",woff2:"woff2"}[n];return`@font-face{font-family:'PBCustom';font-style:normal;font-display:swap;src:url(${e})${t?` format('${t}')`:""};}`}const Au="sans",Du=e=>{var r;return((r=hn.find(n=>n.label===e))==null?void 0:r.font)??null},Ms=e=>hn.find(r=>r.id===e)??hn[0],Ls="/fonts";function Oc(e,r=null){return(r?hn.filter(t=>r.includes(t.id)):hn).flatMap(t=>t.files.map(a=>`@font-face{font-family:'${t.webfont}';font-style:normal;font-weight:${a.weight};font-display:swap;src:url(${e(a.file)}) format('woff2');}`)).join(`
`)}function Pu(e){var n;const r=new Set([(e==null?void 0:e.typeset)??Au]);for(const t of(e==null?void 0:e.pages)??[])for(const a of Object.values(t.overrides??{})){const o=(n=a==null?void 0:a.typo)==null?void 0:n.font;if(!o||o==="상속")continue;const s=hn.find(l=>l.label===o);s&&r.add(s.id)}return[...r]}const Qm=Oc(e=>`${Ls}/${e}`),Xm=[Qm,Fc,Om,Bm,qm,Im,Hm,Vm,Wm,Um,Gm,Ym,Km,Pc],Zm='<!doctype html><html lang="ko"><head><meta charset="utf-8"></head><body></body></html>';function Jm({width:e=1280,children:r,onReady:n}){const t=L.useRef(null),a=L.useRef(null),[o,s]=L.useState(null),[l,c]=L.useState(0);L.useEffect(()=>{const f=a.current;if(!f)return;const p=new ResizeObserver(([k])=>c(k.contentRect.width));return p.observe(f),c(f.getBoundingClientRect().width),()=>p.disconnect()},[]);const u=L.useCallback(()=>{var k;const f=(k=t.current)==null?void 0:k.contentDocument;if(!(f!=null&&f.body)||f.getElementById("pb-sheets"))return;const p=f.createElement("style");p.id="pb-sheets",p.textContent=Xm.join(`
`),f.head.appendChild(p),f.body.classList.add("pb-editing"),s(f.body),n==null||n(f)},[n]),h=l>0?Math.min(1,l/e):1;return i.jsxs("div",{className:"pb-frame__wrap",ref:a,children:[i.jsx("iframe",{ref:t,title:"canvas",className:`pb-frame ${e<1280?"pb-frame--device":""}`,style:{width:`${e}px`,height:`${100/h}%`,transform:h<1?`scale(${h})`:void 0,transformOrigin:"center top"},srcDoc:Zm,onLoad:u,children:o?Ru.createPortal(r,o):null}),h<1&&i.jsxs("span",{className:"pb-frame__zoom",title:"실제 폭 기준으로 그리고 화면에 맞게 줄여 보여줍니다",children:[e,"px · ",Math.round(h*100),"%"]})]})}const Bc=[{id:"none",label:"없음",hint:""},{id:"chars",label:"한 글자씩 (타이핑)",hint:"글자가 차례로 나타납니다",split:!0},{id:"up",label:"아래에서 올라오며",hint:"살짝 올라오며 나타납니다"},{id:"blur",label:"흐릿함에서 선명하게",hint:"초점이 맞는 느낌"},{id:"spread",label:"자간 벌어지며",hint:"큰 제목에 잘 맞습니다"},{id:"underline",label:"밑줄 그려지기",hint:"제목 아래 선이 좌→우로"},{id:"gradient",label:"글자 그라디언트",hint:"움직임 없이 인상만"},{id:"glitch",label:"글리치",hint:"간헐적으로 지직 — 테크 무드"},{id:"fill",label:"스크롤 따라 채워지기",hint:"회색에서 본문색으로 (스크롤 연동)"}],Fu={kind:"없음",target:"제목만",speed:40,delay:0},e4=[{key:"kind",label:"글자 효과",type:"select",options:Bc.map(e=>e.label)},{key:"target",label:"적용 대상",type:"select",options:["제목만","제목 + 본문"]},{key:"speed",label:"타이핑 속도 (글자당)",type:"range",min:10,max:300,step:5,unit:"ms"},{key:"delay",label:"시작 지연",type:"range",min:0,max:1500,step:50,unit:"ms"}],qc=e=>{var r;return((r=Bc.find(n=>n.label===e))==null?void 0:r.id)??(e||"none")},Ic=e=>!!e&&qc(e.kind)!=="none",Ou=e=>{var r;return Ic(e)&&((r=Bc.find(n=>n.id===qc(e.kind)))==null?void 0:r.split)===!0};function Bu(e){if(!Ic(e))return"";const r=e.target==="제목 + 본문"?"all":"title";return`wf-tfx wf-tfx--${qc(e.kind)} wf-tfx-on--${r}`}function qu(e){return Ic(e)?{"--tfx-step":`${e.speed??Fu.speed}ms`,"--tfx-delay":`${e.delay??0}ms`}:{}}function r4(e){const r=[];let n=0,t=null;const a=()=>{t&&(r.push({word:t}),t=null)};for(const o of String(e??"")){if(o===`
`){a(),r.push({br:!0});continue}(t??(t=[])).push({ch:o===" "?" ":o,i:n++}),o===" "&&a()}return a(),r}const n4=" ";function t4({tag:e="span",value:r,onCommit:n,editable:t=!1,multiline:a=!1,placeholder:o="",className:s="",style:l,split:c=!1,fxSeed:u=""}){const h=L.useRef(null),f=L.useRef(null);return f.current={value:r,onCommit:n,multiline:a},L.useEffect(()=>{const p=h.current;if(!p||p.ownerDocument.activeElement===p)return;const k=r??"";p.innerText!==k&&(p.innerText=k)},[r,t]),L.useEffect(()=>{const p=h.current;if(!p||!t)return;let k=0;const _=()=>{clearTimeout(k);const{value:d,onCommit:m}=f.current,x=p.innerText.split(n4).join(" ").replace(/\n+$/,"");x!==(d??"")&&m(x)},j=()=>{clearTimeout(k),k=setTimeout(_,350)},C=d=>{d.stopPropagation();const{value:m,multiline:x}=f.current;d.key==="Escape"?(clearTimeout(k),p.innerText=m??"",p.blur()):d.key==="Enter"&&!x&&(d.preventDefault(),_(),p.blur())},b=d=>{var y;d.preventDefault();const{multiline:m}=f.current,x=((y=d.clipboardData)==null?void 0:y.getData("text/plain"))??"";p.ownerDocument.execCommand("insertText",!1,m?x:x.replace(/\s*\n\s*/g," "))};return p.addEventListener("input",j),p.addEventListener("blur",_),p.addEventListener("focusout",_),p.addEventListener("keydown",C),p.addEventListener("paste",b),()=>{clearTimeout(k),p.removeEventListener("input",j),p.removeEventListener("blur",_),p.removeEventListener("focusout",_),p.removeEventListener("keydown",C),p.removeEventListener("paste",b)}},[t]),t?i.jsx(e,{ref:h,className:`${s} wf-edit`.trim(),style:l,contentEditable:!0,suppressContentEditableWarning:!0,spellCheck:!1,"data-ph":o},"edit"):c?i.jsx(e,{className:s,style:l,children:r4(r).map((p,k)=>p.br?i.jsx("br",{},k):i.jsx("span",{className:"wf-tfx__w",children:p.word.map(_=>i.jsx("span",{className:"wf-tfx__ch",style:{"--i":_.i},children:_.ch},_.i))},k))},`fx:${u}`):i.jsx(e,{className:s,style:l,children:r},"txt")}const a4="portfolio-builder",o4=1,et="docs",da="assets",Iu="current",Rl="pb:doc:v6";let Oo=null;function s4(){return Oo||(Oo=new Promise((e,r)=>{const n=indexedDB.open(a4,o4);n.onupgradeneeded=()=>{const t=n.result;t.objectStoreNames.contains(et)||t.createObjectStore(et),t.objectStoreNames.contains(da)||t.createObjectStore(da)},n.onsuccess=()=>e(n.result),n.onerror=()=>r(n.error)}),Oo)}function gn(e,r,n){return s4().then(t=>new Promise((a,o)=>{const s=t.transaction(e,r),l=n(s.objectStore(e));s.onerror=()=>o(s.error),s.oncomplete=()=>a(l==null?void 0:l.result)}))}async function i4(){var n;let e=null;try{e=await gn(et,"readonly",t=>t.get(Iu))}catch{}if(e)return e;const r=localStorage.getItem(Rl);if(!r)return null;try{const t=JSON.parse(r);return(n=t==null?void 0:t.pages)!=null&&n.length?(await Hu(t),localStorage.removeItem(Rl),t):null}catch{return null}}async function Hu(e){try{return await gn(et,"readwrite",r=>r.put(e,Iu)),!0}catch{try{return localStorage.setItem(Rl,JSON.stringify(e)),!0}catch{return!1}}}const Hc=(e,r)=>gn(da,"readwrite",n=>n.put(r,e)),Vc=e=>gn(da,"readonly",r=>r.get(e)),l4=e=>gn(da,"readwrite",r=>r.delete(e)),c4=()=>gn(da,"readonly",e=>e.getAllKeys()),co="slot:",d4=(e,r)=>gn(et,"readwrite",n=>n.put(r,e)),Vu=e=>gn(et,"readonly",r=>r.get(e)),f4=e=>gn(et,"readwrite",r=>r.delete(e)),u4=()=>gn(et,"readonly",e=>e.getAllKeys()),p4=1600,m4=.82,ht=new Map;let h4=0;const Wu=()=>`img${Date.now().toString(36)}${(h4++).toString(36)}`;async function g4(e){var c;if(!e||!e.type.startsWith("image/"))throw new Error("이미지 파일이 아닙니다.");const r=await createImageBitmap(e),n=Math.min(1,p4/Math.max(r.width,r.height)),t=Math.max(1,Math.round(r.width*n)),a=Math.max(1,Math.round(r.height*n)),o=document.createElement("canvas");o.width=t,o.height=a,o.getContext("2d").drawImage(r,0,0,t,a),(c=r.close)==null||c.call(r);const s=await new Promise(u=>o.toBlob(u,"image/webp",m4));if(!s)throw new Error("이미지를 변환할 수 없습니다.");const l=Wu();return await Hc(l,s),{id:l,alt:"",fit:"cover",w:t,h:a,bytes:s.size}}async function x4(e,r=8){if(!e)throw new Error("파일이 없습니다.");if(e.size>r*1024*1024)throw new Error(`파일이 너무 큽니다 (${Uc(e.size)}). ${r}MB 이하로 줄여 주세요.`);const n=Wu();return await Hc(n,e),{id:n,name:e.name||"파일",bytes:e.size,type:e.type||"application/octet-stream"}}async function w4(e){if(!e)return null;if(ht.has(e))return ht.get(e);const r=await Vc(e);if(!r)return null;const n=URL.createObjectURL(r);return ht.set(e,n),n}async function Uu(e){const r=await Vc(e);return r?new Promise(n=>{const t=new FileReader;t.onload=()=>n(t.result),t.onerror=()=>n(null),t.readAsDataURL(r)}):null}async function b4(e){return e?Vc(e):null}async function fo(e){if(!e)return;const r=ht.get(e);r&&(URL.revokeObjectURL(r),ht.delete(e)),await l4(e)}function Sn(e){const[r,n]=L.useState(()=>e?ht.get(e)??null:null);return L.useEffect(()=>{if(!e)return n(null);const t=ht.get(e);if(t)return n(t);let a=!0;return w4(e).then(o=>{a&&n(o)}),()=>{a=!1}},[e]),r}function Wc(e){const r=new Set,n=t=>{if(!(!t||typeof t!="object")){if(Array.isArray(t))return t.forEach(n);if(typeof t.id=="string"&&typeof t.bytes=="number")return r.add(t.id);Object.values(t).forEach(n)}};for(const t of(e==null?void 0:e.pages)??[])Object.values(t.content??{}).forEach(n),Object.values(t.overrides??{}).forEach(n);return n(e==null?void 0:e.site),[...r]}async function v4(e){try{const r=new Set(Wc(e)),t=(await c4()??[]).filter(a=>!r.has(a));for(const a of t)await fo(a);return t.length}catch{return 0}}const Uc=e=>e<1024?`${e}B`:e<1048576?`${(e/1024).toFixed(0)}KB`:`${(e/1048576).toFixed(1)}MB`;function Rt({image:e,className:r="",style:n}){const t=Sn(e==null?void 0:e.id);return e!=null&&e.id?i.jsx("img",{className:r,src:t??void 0,alt:e.alt??"",style:{objectFit:e.fit??"cover",...n}}):null}const Bo=["start","center","end","space-between"],Ln={topheader:{group:"머리",label:"Top Header",pad:14,tag:"div",hint:"로고 · 메뉴",color:"#6b6bff",h:60,nav:!0,defaults:{logo:"홍길동",align:"space-between",showMenu:!0,linkTo:"페이지",sticky:!0,divider:!0,modeToggle:!1,hideOnScroll:!1},fields:[{key:"logo",label:"로고 / 이름",type:"text"},{key:"align",label:"정렬",type:"select",options:Bo},{key:"showMenu",label:"메뉴 표시",type:"boolean"},{key:"modeToggle",label:"다크 모드 토글 버튼 (☾/☀)",type:"boolean"},{key:"linkTo",label:"메뉴가 가리키는 곳",type:"select",options:["페이지","이 페이지 섹션"]},{key:"sticky",label:"스크롤 시 상단 고정",type:"boolean"},{key:"hideOnScroll",label:"내릴 땐 숨기기 (올리면 표시)",type:"boolean"},{key:"divider",label:"아래 구분선",type:"boolean"}]},nav:{group:"머리",label:"Nav",pad:12,tag:"nav",hint:"메뉴만",color:"#818cf8",h:52,nav:!0,defaults:{align:"center",gap:26,uppercase:!1,linkTo:"페이지",sticky:!1,divider:!1,modeToggle:!1,hideOnScroll:!1},fields:[{key:"align",label:"정렬",type:"select",options:Bo},{key:"linkTo",label:"메뉴가 가리키는 곳",type:"select",options:["페이지","이 페이지 섹션"]},{key:"modeToggle",label:"다크 모드 토글 버튼 (☾/☀)",type:"boolean"},{key:"gap",label:"항목 간격",type:"range",min:8,max:64,step:2,unit:"px"},{key:"uppercase",label:"대문자",type:"boolean"},{key:"sticky",label:"스크롤 시 상단 고정",type:"boolean"},{key:"hideOnScroll",label:"내릴 땐 숨기기 (올리면 표시)",type:"boolean"},{key:"divider",label:"아래 구분선",type:"boolean"}]},header:{group:"머리",label:"Header",pad:16,tag:"header",hint:"로고 + 메뉴 + CTA",color:"#22d3ee",h:76,nav:!0,defaults:{logo:"홍길동",cta:"Contact",align:"space-between",showMenu:!0,linkTo:"페이지",sticky:!0,divider:!0,modeToggle:!1,hideOnScroll:!1},fields:[{key:"logo",label:"로고 / 이름",type:"text"},{key:"cta",label:"CTA 버튼",type:"text"},{key:"modeToggle",label:"다크 모드 토글 버튼 (☾/☀)",type:"boolean"},{key:"align",label:"정렬",type:"select",options:Bo},{key:"showMenu",label:"메뉴 표시",type:"boolean"},{key:"linkTo",label:"메뉴가 가리키는 곳",type:"select",options:["페이지","이 페이지 섹션"]},{key:"sticky",label:"스크롤 시 상단 고정",type:"boolean"},{key:"hideOnScroll",label:"내릴 땐 숨기기 (올리면 표시)",type:"boolean"},{key:"divider",label:"아래 구분선",type:"boolean"}]},hero:{group:"본문",label:"Hero",pad:48,tag:"section",hint:"첫 화면 · 인사말",color:"#a78bfa",h:320,defaults:{title:`안녕하세요,
프론트엔드 개발자 홍길동입니다`,subtitle:"보이는 것에 집착합니다. 성능도 함께 챙깁니다.",subColor:"",photo:null,photoSize:120,photoRound:!0,cta:"이력서 보기",ctaFile:null,ctaKind:"채움",ctaBg:"",ctaText:"",ctaRadius:8,ctaScale:1,align:"center",titleScale:1},fields:[{key:"photo",label:"프로필 사진",type:"image"},{key:"photoSize",label:"사진 크기",type:"range",min:64,max:280,step:4,unit:"px"},{key:"photoRound",label:"동그랗게",type:"boolean"},{key:"title",label:"제목",type:"textarea"},{key:"subtitle",label:"부제",type:"textarea"},{key:"subColor",label:"부제 색 (비우면 테마 보조색)",type:"color"},{key:"cta",label:"버튼",type:"text"},{key:"ctaFile",label:"버튼에 파일 걸기 (PDF)",type:"file"},{key:"ctaKind",label:"버튼 모양",type:"select",options:["채움","윤곽","글자만"]},{key:"ctaBg",label:"버튼 색 (비우면 테마 강조색)",type:"color"},{key:"ctaText",label:"버튼 글자 색",type:"color"},{key:"ctaRadius",label:"버튼 모서리",type:"range",min:0,max:40,step:1,unit:"px"},{key:"ctaScale",label:"버튼 크기",type:"range",min:.8,max:1.6,step:.05},{key:"titleScale",label:"제목 크기",type:"range",min:.6,max:1.8,step:.05},{key:"align",label:"정렬",type:"select",options:["start","center","end"]}]},aside:{group:"본문",label:"Aside",pad:28,tag:"aside",hint:"프로필 · 목차",color:"#f472b6",h:0,nav:!0,defaults:{name:"홍길동",role:"Front End Engineer",bio:"디자인 시스템과 3D 인터랙션을 주로 다룹니다.",photo:null,photoSize:96,photoRound:!0,showMenu:!0,linkTo:"페이지",sticky:!0,align:"start"},fields:[{key:"photo",label:"프로필 사진",type:"image"},{key:"photoSize",label:"사진 크기",type:"range",min:48,max:260,step:4,unit:"px"},{key:"photoRound",label:"동그랗게",type:"boolean"},{key:"name",label:"이름",type:"text"},{key:"role",label:"직함",type:"text"},{key:"bio",label:"한 줄 소개",type:"textarea"},{key:"showMenu",label:"목차(메뉴) 표시",type:"boolean"},{key:"linkTo",label:"목차가 가리키는 곳",type:"select",options:["페이지","이 페이지 섹션"]},{key:"sticky",label:"스크롤에 고정",type:"boolean"},{key:"align",label:"정렬",type:"select",options:["start","center"]}]},main:{group:"본문",label:"Main",pad:20,tag:"main",hint:"본문 묶음",color:"#4ade80",h:0,defaults:{columns:2,gap:20,items:[{label:"Experience"},{label:"Education"}]},fields:[{key:"items",label:"슬롯",type:"list",itemLabel:"슬롯",itemDefaults:{label:"새 슬롯"},itemFields:[{key:"label",label:"이름",type:"text"}]},{key:"columns",label:"열 수",type:"range",min:1,max:4,step:1},{key:"gap",label:"간격",type:"range",min:0,max:48,step:2,unit:"px"}]},section:{group:"본문",label:"Section",pad:36,tag:"section",hint:"제목 + 본문",color:"#fbbf24",h:240,defaults:{title:"About",body:`3년차 프론트엔드 개발자입니다.
디자인 시스템과 3D 인터랙션을 주로 다룹니다.`,columns:1,align:"start",listStyle:"none",items:[{label:"React",note:"3년"},{label:"TypeScript",note:"2년"},{label:"WebGL",note:"셰이더"}]},fields:[{key:"title",label:"제목",type:"text"},{key:"body",label:"본문",type:"textarea"},{key:"columns",label:"열 수",type:"range",min:1,max:3,step:1},{key:"align",label:"정렬",type:"select",options:["start","center"]},{key:"listStyle",label:"목록 형태",type:"select",options:["none","tags","badges","timeline","marquee","stats"]},{key:"items",label:"목록 항목",type:"list",itemLabel:"항목",itemDefaults:{label:"새 항목",note:""},itemFields:[{key:"label",label:"이름",type:"text"},{key:"note",label:"보조 설명",type:"text"}]}]},gallery:{group:"본문",label:"Gallery",pad:36,tag:"section",hint:"작업물 카드 그리드",color:"#fb923c",h:300,defaults:{title:"Projects",columns:3,rows:0,ratio:.7,stackStyle:"배지",showThumb:!0,grayHover:!1,items:[{title:"실시간 협업 에디터",stack:"React · Yjs · WebSocket",desc:"CRDT로 동시 편집을 구현했습니다.",link:"https://github.com/"},{title:"디자인 시스템",stack:"TypeScript · Storybook",desc:"컴포넌트 60여 개를 문서화했습니다.",link:""},{title:"3D 포트폴리오 팩",stack:"WebGL · Canvas",desc:"빌드 도구 없이 도는 효과 9종입니다.",link:""}]},fields:[{key:"title",label:"제목",type:"text"},{key:"items",label:"카드",type:"list",itemLabel:"카드",itemDefaults:{title:"새 프로젝트",stack:"",status:"없음",desc:"",detail:"",link:"",image:null},itemFields:[{key:"image",label:"썸네일",type:"image"},{key:"title",label:"제목",type:"text"},{key:"status",label:"진행 상태",type:"select",options:["없음","기획중","진행중","완료","운영중","보류"]},{key:"stack",label:"기술 스택 (· 나 , 로 구분)",type:"text"},{key:"desc",label:"카드에 보일 한 줄",type:"textarea"},{key:"detail",label:"자세히 (적으면 카드를 누를 때 열립니다)",type:"textarea"},{key:"link",label:"링크",type:"text"}]},{key:"stackStyle",label:"기술 스택 모양",type:"select",options:["배지","글자"]},{key:"columns",label:"가로 칸 수",type:"range",min:1,max:5,step:1},{key:"rows",label:"세로 칸 수 (0 = 카드 수만큼)",type:"range",min:0,max:5,step:1},{key:"ratio",label:"카드 높이 비율",type:"range",min:.4,max:1.4,step:.05},{key:"showThumb",label:"썸네일 자리 표시",type:"boolean"},{key:"grayHover",label:"흑백에서 컬러로 (호버)",type:"boolean"}]},timeline:{group:"본문",label:"Timeline",pad:36,tag:"section",hint:"히스토리 · 연혁 라인",color:"#2dd4bf",h:320,defaults:{eyebrow:"tag",title:"연혁",items:[{label:"2019",head:"회사 설립",desc:"작은 사무실에서 세 명이 시작했습니다. 첫 제품의 방향을 잡은 해입니다."},{label:"2021",head:"첫 투자 유치 · 팀 확장",desc:"시드 투자를 받고 개발·디자인 팀을 갖췄습니다. 월 이용자 1만 명을 넘었습니다."},{label:"2024",head:"해외 진출",desc:"일본·동남아 시장에 서비스를 열고 현지 파트너십을 맺었습니다."}]},fields:[{key:"eyebrow",label:"작은 라벨 (비우면 숨김)",type:"text"},{key:"title",label:"제목",type:"text"},{key:"items",label:"항목",type:"list",itemLabel:"항목",itemDefaults:{label:"분류",head:"새 항목",desc:""},itemFields:[{key:"label",label:"분류 (위 작은 글)",type:"text"},{key:"head",label:"항목 제목",type:"text"},{key:"desc",label:"설명",type:"textarea"}]}]},model:{group:"3D",label:"3D Model",tag:"div",pad:0,hint:".glb 모델 뷰어",color:"#0ea5e9",h:380,is3d:!0,defaults:{boxHeight:380,srcFile:null,src:"",alt:"3D 모델",cameraControls:!0,autoRotate:!0,disableZoom:!0,exposure:1,shadowIntensity:.75,cameraOrbit:"",autoRotateDelay:3e3,rotationPerSecond:"18deg",autoplay:!0,animationName:"",interactionPrompt:"auto",disablePan:!0,ar:!1,envFile:null,environmentImage:"",skybox:!1,fill:!1,shadowSoftness:1,free:!1,freeX:72,freeY:58,freeW:26,follow:!1,followDecay:80,followYaw:28,followPitch:10},optionKeys:["src","alt","cameraControls","autoRotate","disableZoom","disablePan","exposure","shadowIntensity","shadowSoftness","cameraOrbit","autoRotateDelay","rotationPerSecond","autoplay","animationName","interactionPrompt","ar","environmentImage","skybox","follow","followDecay","followYaw","followPitch"],fields:[{key:"srcFile",label:".glb 파일 올리기",type:"file",maxMB:40,compress:"glb"},{key:"src",label:"또는 경로 / URL 직접 입력",type:"text"},{key:"alt",label:"대체 설명",type:"text"},{key:"cameraOrbit",label:"처음 보이는 각도",type:"text"},{key:"autoRotateDelay",label:"자동 회전 시작까지",type:"range",min:0,max:1e4,step:500,unit:"ms"},{key:"rotationPerSecond",label:"회전 속도",type:"select",options:["6deg","12deg","18deg","30deg","60deg"]},{key:"autoplay",label:"파일에 담긴 동작 재생",type:"boolean"},{key:"animationName",label:"동작 이름 (비우면 첫 번째)",type:"text"},{key:"interactionPrompt",label:"돌려보라는 힌트",type:"select",options:["auto","when-focused","none"]},{key:"disablePan",label:"끌어서 이동 끄기",type:"boolean"},{key:"ar",label:"휴대폰에서 실물 크기로 보기(AR)",type:"boolean"},{key:"free",label:"레이아웃 무관 모드 (화면에 고정)",type:"boolean"},{key:"freeX",label:"가로 위치",type:"range",min:0,max:100,step:1,unit:"%"},{key:"freeY",label:"세로 위치",type:"range",min:0,max:100,step:1,unit:"%"},{key:"freeW",label:"크기",type:"range",min:8,max:70,step:1,unit:"%"},{key:"follow",label:"마우스 쪽을 바라보기 (쉴 때는 자동 회전)",type:"boolean"},{key:"followDecay",label:"따라오는 느긋함 (클수록 느림)",type:"range",min:20,max:200,step:5},{key:"followYaw",label:"좌우로 돌아보는 각도",type:"range",min:0,max:70,step:2,unit:"°"},{key:"followPitch",label:"위아래로 돌아보는 각도",type:"range",min:0,max:30,step:1,unit:"°"},{key:"envFile",label:"환경광 파일 올리기 (.hdr·.exr·.jpg)",type:"file",accept:".hdr,.exr,.jpg,.jpeg,.png,image/*",maxMB:24},{key:"environmentImage",label:"또는 환경광 URL (비우면 기본)",type:"text"},{key:"skybox",label:"배경까지 환경광으로 (환경광 필요)",type:"boolean"},{key:"fill",label:"영역 전체 채우기 (환경광이 영역 배경처럼)",type:"boolean"},{key:"shadowSoftness",label:"그림자 부드럽게",type:"range",min:0,max:1,step:.05},{key:"boxHeight",label:"영역 높이",type:"range",min:200,max:700,step:10,unit:"px"},{key:"autoRotate",label:"자동 회전",type:"boolean"},{key:"cameraControls",label:"드래그 회전",type:"boolean"},{key:"disableZoom",label:"휠 줌 끄기",type:"boolean"},{key:"exposure",label:"노출",type:"range",min:.2,max:2.5,step:.05},{key:"shadowIntensity",label:"그림자",type:"range",min:0,max:1,step:.05}]},contact:{group:"마무리",label:"Contact",pad:40,tag:"section",hint:"연락처 · 이메일",color:"#f97316",h:220,defaults:{title:"Contact",body:"함께 만들고 싶은 것이 있다면 메일로 연락 주세요.",email:"hong@example.com",phone:"",location:"",align:"center",big:!0},fields:[{key:"title",label:"제목",type:"text"},{key:"body",label:"안내 문구",type:"textarea"},{key:"email",label:"이메일",type:"text"},{key:"phone",label:"전화 (비워도 됩니다)",type:"text"},{key:"location",label:"지역 (비워도 됩니다)",type:"text"},{key:"big",label:"이메일을 크게",type:"boolean"},{key:"align",label:"정렬",type:"select",options:["start","center"]}]},cover:{group:"배너",label:"Cover Banner",pad:0,tag:"section",tagLabel:"배너 · Cover",hint:"큰 이미지 + 문구",color:"#f43f5e",h:260,defaults:{image:null,title:"만드는 사람",sub:"",height:320,align:"center",valign:"center",overlay:.42,kenBurns:!0,zoomOnScroll:!1},fields:[{key:"image",label:"배경 이미지",type:"image"},{key:"title",label:"문구",type:"textarea"},{key:"sub",label:"작은 문구",type:"text"},{key:"height",label:"높이",type:"range",min:140,max:720,step:10,unit:"px"},{key:"align",label:"가로 정렬",type:"select",options:["start","center","end"]},{key:"valign",label:"세로 정렬",type:"select",options:["start","center","end"]},{key:"overlay",label:"어둡게 (글자 가독성)",type:"range",min:0,max:.85,step:.01},{key:"kenBurns",label:"천천히 확대 (켄번즈)",type:"boolean"},{key:"zoomOnScroll",label:"스크롤 따라 확대",type:"boolean"}]},marquee:{group:"배너",label:"Marquee Banner",pad:0,tag:"section",tagLabel:"배너 · Marquee",hint:"큰 글씨가 흐르는 띠",color:"#14b8a6",h:96,defaults:{text:"AVAILABLE FOR WORK",sep:"✦",speed:26,size:2.6,reverse:!1,outline:!1,pauseOnHover:!0},fields:[{key:"text",label:"문구",type:"text"},{key:"sep",label:"사이 기호",type:"text"},{key:"size",label:"글자 크기",type:"range",min:1,max:8,step:.1,unit:"em"},{key:"speed",label:"한 바퀴 시간",type:"range",min:6,max:80,step:2,unit:"s"},{key:"reverse",label:"반대 방향",type:"boolean"},{key:"outline",label:"윤곽 글자",type:"boolean"},{key:"pauseOnHover",label:"올리면 멈춤",type:"boolean"}]},cta:{group:"배너",label:"CTA Banner",pad:44,tag:"section",tagLabel:"배너 · CTA",hint:"행동 유도 + 버튼",color:"#8b5cf6",h:190,defaults:{title:"함께 만들 것이 있으신가요?",sub:"메일 한 통이면 시작입니다.",cta:"연락하기",ctaHref:"",ctaFile:null,ctaKind:"채움",ctaBg:"",ctaText:"",ctaRadius:10,ctaScale:1.15,align:"center",gradient:!1},fields:[{key:"title",label:"제목",type:"text"},{key:"sub",label:"보조 문구",type:"text"},{key:"cta",label:"버튼 글자",type:"text"},{key:"ctaHref",label:"버튼 주소 (비우면 연락처로)",type:"text"},{key:"ctaFile",label:"또는 파일 (PDF 등)",type:"file"},{key:"ctaKind",label:"버튼 모양",type:"select",options:["채움","윤곽","글자만"]},{key:"ctaBg",label:"버튼 색 (비우면 테마 강조색)",type:"color"},{key:"ctaText",label:"버튼 글자 색",type:"color"},{key:"ctaRadius",label:"버튼 모서리",type:"range",min:0,max:40,step:1,unit:"px"},{key:"ctaScale",label:"버튼 크기",type:"range",min:.8,max:1.8,step:.05},{key:"align",label:"정렬",type:"select",options:["start","center"]},{key:"gradient",label:"배경 그라디언트 흐름",type:"boolean"}]},slider:{group:"배너",label:"Slider Banner",pad:0,tag:"section",tagLabel:"배너 · Slider",hint:"여러 장이 넘어가는 배너",color:"#e879f9",h:300,defaults:{items:[{image:null,title:"첫 번째 슬라이드",sub:"문구를 바꿔 보세요",cta:"",href:""},{image:null,title:"두 번째 슬라이드",sub:"",cta:"",href:""},{image:null,title:"세 번째 슬라이드",sub:"",cta:"",href:""}],transition:"밀기",height:340,overlay:.42,align:"center",valign:"center",autoplay:!0,interval:5,speed:600,pauseOnHover:!0,loop:!0,dots:!0,arrows:!0,kenBurns:!1},fields:[{key:"items",label:"슬라이드",type:"list",itemLabel:"슬라이드",itemDefaults:{image:null,title:"새 슬라이드",sub:"",cta:"",href:""},itemFields:[{key:"title",label:"문구",type:"text"},{key:"sub",label:"작은 문구",type:"text"},{key:"image",label:"배경 이미지",type:"image"},{key:"cta",label:"버튼 글자",type:"text"},{key:"href",label:"버튼 주소",type:"text"}]},{key:"transition",label:"전환 방식",type:"select",options:["밀기","페이드","덮기","확대","자유 스크롤"]},{key:"height",label:"높이",type:"range",min:160,max:720,step:10,unit:"px"},{key:"overlay",label:"어둡게 (글자 가독성)",type:"range",min:0,max:.85,step:.01},{key:"align",label:"가로 정렬",type:"select",options:["start","center","end"]},{key:"valign",label:"세로 정렬",type:"select",options:["start","center","end"]},{key:"autoplay",label:"자동 넘김 (결과물에서)",type:"boolean"},{key:"interval",label:"넘김 간격",type:"range",min:2,max:15,step:.5,unit:"s"},{key:"speed",label:"전환 시간",type:"range",min:200,max:1500,step:50,unit:"ms"},{key:"pauseOnHover",label:"올리면 멈춤",type:"boolean"},{key:"loop",label:"무한 반복",type:"boolean"},{key:"dots",label:"점 표시기",type:"boolean"},{key:"arrows",label:"좌우 화살표",type:"boolean"},{key:"kenBurns",label:"천천히 확대 (켄번즈)",type:"boolean"}]},links:{group:"마무리",label:"Links",pad:28,tag:"section",hint:"외부 링크 · SNS",color:"#38bdf8",h:150,defaults:{title:"Links",style:"buttons",align:"start",newTab:!0,items:[{label:"GitHub",url:"github.com/"},{label:"Instagram",url:"instagram.com/"},{label:"Notion",url:""}]},fields:[{key:"title",label:"제목",type:"text"},{key:"items",label:"링크",type:"list",itemLabel:"링크",itemDefaults:{label:"새 링크",url:"",desc:"",file:null},itemFields:[{key:"label",label:"이름",type:"text"},{key:"url",label:"주소",type:"text"},{key:"desc",label:"설명 (cards 모양에서 보입니다)",type:"textarea"},{key:"file",label:"또는 파일 (PDF 등)",type:"file"}]},{key:"style",label:"모양",type:"select",options:["buttons","text","list","cards"]},{key:"align",label:"정렬",type:"select",options:["start","center"]},{key:"newTab",label:"새 탭에서 열기",type:"boolean"}]},bcard:{group:"마무리",label:"디지털 명함",pad:0,tag:"section",hint:"명함 한 장 · QR",color:"#eab308",h:0,defaults:{faces:"한 면",paper:40,design:"콰이엇",role:"BackEnd",roleSub:"Developer",name:"홍길동",nameEn:"Hong Gildong",title:"Junior Developer",org:"",phone:"010-0000-0000",email:"hello@example.com",location:"Republic of Korea",site:"",label:"PORTFOLIO 2026",initials:"",tagline:"인터페이스를 정확하게 만듭니다.",stack:"TypeScript · React · Node",accent:"",iconStyle:"채움 원형",qr:!0,qrPos:"자동",vcf:!0,width:520},fields:[{key:"faces",label:"면 구성",type:"select",options:["한 면","앞·뒤 (누르면 뒤집기)"]},{key:"design",label:"명함 디자인",type:"select",options:["콰이엇","셸(터미널)","그리드","나이트","시그널","레터프레스","스위스","신택스","사이드 라인","가운데 정렬","좌우 분할","다크 카드","포멀 (기업)","이그제큐티브 (임원)","매니페스트 (공책)","스키마 (청사진)","컬러 필드 (2분할)","한글 (넓은 여백)","디렉터리 (3열 정보)"]},{key:"iconStyle",label:"아이콘 모양",type:"select",options:["채움 원형","윤곽 원형","아이콘만","없음"]},{key:"paper",label:"종이 질감",type:"range",min:0,max:100,step:5,unit:"%"},{key:"accent",label:"포인트 색 (비우면 테마 강조색)",type:"color"},{key:"width",label:"명함 폭",type:"range",min:320,max:760,step:10,unit:"px"},{key:"role",label:"큰 글자 (분야)",type:"text"},{key:"roleSub",label:"큰 글자 아랫줄",type:"text"},{key:"name",label:"이름",type:"text"},{key:"nameEn",label:"이름 (영문)",type:"text"},{key:"title",label:"직함",type:"text"},{key:"org",label:"소속 (비워도 됩니다)",type:"text"},{key:"phone",label:"전화",type:"text"},{key:"email",label:"이메일",type:"text"},{key:"location",label:"지역",type:"text"},{key:"site",label:"홈페이지 (비워도 됩니다)",type:"text"},{key:"tagline",label:"한 줄 소개",type:"text"},{key:"stack",label:"기술 스택 (· 로 구분)",type:"text"},{key:"label",label:"작은 라벨 (예: PORTFOLIO 2026)",type:"text"},{key:"initials",label:"이니셜 마크 (비우면 이름에서 만듭니다)",type:"text"},{key:"qr",label:"QR 코드 (스캔하면 연락처 저장)",type:"boolean"},{key:"qrPos",label:"QR 자리",type:"select",options:["자동","오른쪽 가운데","왼쪽 아래","오른쪽 아래"]},{key:"vcf",label:"연락처 저장 버튼 (.vcf 내려받기)",type:"boolean"}]},footer:{group:"마무리",label:"Footer",pad:24,tag:"footer",hint:"연락처 · 저작권",color:"#8b93ad",h:110,nav:!0,defaults:{text:"© 2026 홍길동",email:"hong@example.com",showMenu:!0,align:"space-between",showTime:!1,timeCity:"Seoul",timeZone:"Asia/Seoul"},fields:[{key:"text",label:"문구",type:"text"},{key:"email",label:"이메일",type:"text"},{key:"showMenu",label:"메뉴 표시",type:"boolean"},{key:"showTime",label:"로컬 타임 표시 (Seoul, 14:32)",type:"boolean"},{key:"timeCity",label:"도시 이름 (표시용)",type:"text"},{key:"timeZone",label:"시간대 (예: Asia/Seoul)",type:"text"},{key:"align",label:"정렬",type:"select",options:Bo}]}};function Gu(e,r){let n;try{n=new Intl.DateTimeFormat("ko-KR",{hour:"2-digit",minute:"2-digit",hour12:!1,timeZone:r||void 0}).format(new Date)}catch{n=new Intl.DateTimeFormat("ko-KR",{hour:"2-digit",minute:"2-digit",hour12:!1}).format(new Date)}return`${e||"Seoul"}, ${n}`}for(const[e,r]of Object.entries(Ln))r.freeItems=e!=="model";const y4=["머리","본문","배너","마무리","3D"],_4=Object.entries(Ln).map(([e,r])=>({id:e,...r})),Yt=e=>{var r;return{...((r=Ln[e])==null?void 0:r.defaults)??{}}};function At(e){const r=String(e??"").trim();return r?/^(https?:|mailto:|tel:|#|\/)/i.test(r)?r:/^[\w.+-]+@[\w-]+\.[\w.]+$/.test(r)?`mailto:${r}`:`https://${r}`:""}function Yu(e=[],r=3,n=0){const t=Array.isArray(e)?e:[];if(!n)return t.map((o,s)=>({item:o,index:s}));const a=Math.max(r*n,t.length);return Array.from({length:a},(o,s)=>({item:t[s]??null,index:s}))}const Ku=(e,r="section")=>String(e??"").trim().toLowerCase().replace(/[^a-z0-9가-힣]+/g,"-").replace(/^-+|-+$/g,"")||r,Qu=["section","gallery","links","main"],k4={밀기:"slide",페이드:"fade",덮기:"cover",확대:"zoom","자유 스크롤":"scroll"},Xu=e=>k4[e]??"slide",Zu=e=>`sld-${e}`,Hn=(e,r)=>`sld-${e}-${r}`,Ju=12,$s=(e,r)=>`detail-${e}-${r+1}`,ep=e=>{const r=String(e??"").replace(/\s+/g," ").trim();return r.length>18?`${r.slice(0,18)}…`:r},j4=e=>{var r;return(r=e==null?void 0:e.file)!=null&&r.id?{file:e.file}:{url:At(e==null?void 0:e.url)}},rp=e=>String(e??"").trim().replace(/^https?:\/\//i,"").replace(/\/+$/,""),np=(e,r)=>Number(r)>0?Number(r):e,S4=["왼쪽","가운데","오른쪽","양끝 정렬","고르게","자유"],C4=["늘리기","위","가운데","아래"],Rs=e=>({위:"start",가운데:"center",아래:"end"})[e]??"",E4=["배치","상자","배경"],N4=[{key:"radius",group:"상자",label:"모서리",type:"range",min:0,max:40,step:1,unit:"px"},{key:"padding",group:"상자",label:"안쪽 여백",type:"range",min:0,max:96,step:2,unit:"px"},{key:"minHeight",group:"상자",label:"최소 높이",type:"range",min:0,max:800,step:10,unit:"px"},{key:"border",group:"상자",label:"테두리",type:"range",min:0,max:6,step:.5,unit:"px"},{key:"z",group:"상자",pro:!0,label:"레이어 순서",type:"range",min:0,max:20,step:1},{key:"free",group:"배치",label:"영역 안 자유 배치 (항목 끌기)",type:"boolean"},{key:"rowAlign",group:"배치",label:"이 행의 가로 배치",type:"select",options:S4},{key:"alignY",group:"배치",label:"세로 배치",type:"select",options:C4},{key:"bg",group:"배경",label:"배경 색",type:"color"},{key:"bgShift",group:"배경",pro:!0,label:"스크롤 배경 전환색 (페이지가 물듦)",type:"color"},{key:"bgSee",group:"배경",pro:!0,label:"사이트 배경 비침",type:"range",min:0,max:1,step:.05},{key:"bgImage",group:"배경",label:"배경 이미지",type:"image"},{key:"bgDim",group:"배경",label:"배경 어둡게",type:"range",min:0,max:.85,step:.05}],Ts={radius:0,padding:24,minHeight:0,border:1,z:0,bg:"",bgShift:"",bgSee:0,bgImage:null,bgDim:0,free:!1,itemPos:null,colSpan:0,rowAlign:"왼쪽",colAt:null,alignY:"늘리기"};function tp(e,r){const n=/^#?([0-9a-f]{6})$/i.exec(e??"");if(!n)return e??"";const t=parseInt(n[1],16),a=Math.max(0,Math.min(1,1-(r||0)));return`rgba(${t>>16&255}, ${t>>8&255}, ${t&255}, ${+a.toFixed(3)})`}function As(e){const r={},n=(e==null?void 0:e.ctaKind)??"채움",t=Number(e==null?void 0:e.ctaScale)||1;return e!=null&&e.ctaBg&&(r["--wf-accent"]=e.ctaBg),n==="윤곽"?(r.background="transparent",r.border="2px solid var(--wf-accent)",r.color=(e==null?void 0:e.ctaText)||"var(--wf-accent)"):n==="글자만"?(r.background="transparent",r.color=(e==null?void 0:e.ctaText)||"var(--wf-accent)",r.textDecoration="underline",r.textUnderlineOffset="4px"):e!=null&&e.ctaText&&(r.color=e.ctaText),(e==null?void 0:e.ctaRadius)!==void 0&&(e==null?void 0:e.ctaRadius)!==null&&(r.borderRadius=`${e.ctaRadius}px`),t!==1?(r.fontSize=`${(.9333*t).toFixed(3)}em`,r.padding=n==="글자만"?"0.3em 0.2em":"0.79em 1.71em"):n==="글자만"&&(r.padding="4px 2px"),r}function ap(e,r){var t,a;const n=(a=(t=/\.(hdr|exr)$/i.exec(r??""))==null?void 0:t[1])==null?void 0:a.toLowerCase();return!e||!n||new RegExp(`\\.${n}$`,"i").test(e)?e:`${e}#.${n}`}function op(e,r){var a;if(!r)return{};const n=(e==null?void 0:e.bgDim)||0,t=`url('${r}')`;return{backgroundImage:n?`linear-gradient(rgba(0,0,0,${n}),rgba(0,0,0,${n})), ${t}`:t,backgroundSize:((a=e==null?void 0:e.bgImage)==null?void 0:a.fit)==="contain"?"contain":"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}const z4=[{key:"font",label:"글꼴",type:"select",options:["상속","모던 산세리프","초대형 타이틀","세리프","모노스페이스","Geist","Manrope","DM Sans","Instrument Serif","Fraunces","내 글꼴 (업로드)"]},{key:"fs",label:"글자 크기",type:"range",min:10,max:30,step:.5,unit:"px"},{key:"weight",label:"굵기",type:"select",options:["상속",300,400,500,600,700,800]},{key:"tracking",label:"자간",type:"range",min:-4,max:6,step:.2,unit:"px"},{key:"leading",label:"행간",type:"range",min:1,max:2.4,step:.05},{key:"align",label:"글자 정렬",type:"select",options:["상속","left","center","right"]},{key:"color",label:"글자 색",type:"color"},{key:"muted",label:"보조 글자 색 (부제·본문)",type:"color"}],Tl={font:"상속",fs:15,weight:"상속",tracking:0,leading:1.55,align:"상속",color:"",muted:""};function sp(e,r){if(!e)return{};const n={};return e.font&&e.font!=="상속"&&(n.fontFamily=r(e.font)),e.fs&&e.fs!==Tl.fs&&(n["--wf-fs"]=`${e.fs}px`),e.weight&&e.weight!=="상속"&&(n.fontWeight=e.weight),e.tracking&&(n.letterSpacing=`${e.tracking}px`),e.leading&&e.leading!==Tl.leading&&(n.lineHeight=e.leading),e.align&&e.align!=="상속"&&(n.textAlign=e.align),e.color&&(n.color=e.color),e.muted&&(n["--wf-muted"]=e.muted),n}const M4=[{key:"radius",label:"모서리",type:"range",min:0,max:40,step:1,unit:"px"},{key:"gap",label:"영역 간격 (거터)",type:"range",min:0,max:40,step:2,unit:"px"},{key:"padding",label:"안쪽 여백",type:"range",min:0,max:96,step:2,unit:"px"},{key:"marginX",label:"바깥 여백 (마진)",type:"range",min:0,max:120,step:2,unit:"px"},{key:"maxWidth",label:"콘텐츠 최대 폭",type:"range",min:640,max:1600,step:20,unit:"px"},{key:"rowsMax",label:"행을 콘텐츠 폭에 맞춤 (와이드 화면)",type:"boolean"},{key:"border",label:"테두리",type:"range",min:0,max:6,step:.5,unit:"px"},{key:"gridGuide",label:"그리드 가이드 보기 (편집 화면 전용)",type:"boolean"},{key:"gridCols",label:"가이드 컬럼 수",type:"range",min:2,max:16,step:1,unit:"칸"}],ip={radius:0,gap:10,padding:24,marginX:10,maxWidth:1120,rowsMax:!1,border:1,gridGuide:!1,gridCols:12},Et={reveal:{label:"스크롤 등장",icon:"↑",tier:"T0",cost:"0KB",desc:"화면에 들어올 때 나타납니다",module:"./effects/scroll-reveal/react.jsx",component:"Reveal",appliesTo:["topheader","nav","header","hero","aside","main","section","gallery","links","contact","footer","cover","marquee","cta","slider"],defaults:{preset:"rise",duration:700,delay:0,distance:28,rotate:22,scale:.92,threshold:.15,repeat:!1},schema:[{key:"preset",label:"프리셋",type:"select",options:["rise","depth","flip","swing","zoom"]},{key:"duration",label:"시간",type:"range",min:200,max:1600,step:50,unit:"ms"},{key:"delay",label:"지연",type:"range",min:0,max:1e3,step:25,unit:"ms"},{key:"distance",label:"올라오는 거리",type:"range",min:0,max:120,step:4,unit:"px"},{key:"rotate",label:"회전",type:"range",min:0,max:90,step:2,unit:"°"},{key:"scale",label:"시작 배율",type:"range",min:.5,max:1,step:.02},{key:"threshold",label:"등장 지점",type:"range",min:0,max:1,step:.05},{key:"repeat",label:"반복",type:"boolean"}]},silk:{label:"실크 배경",icon:"≋",tier:"T2",cost:"~8KB",desc:"WebGL 셰이더 그라디언트 (OGL 지연 로드)",module:"./effects/silk-bg/react.jsx",component:"SilkBackground",appliesTo:["hero","section","gallery","contact","cover","cta"],needsClass:"fx-silk",themeColors:"silk",defaults:{speed:.12,scale:2.2,swirl:3.2,grain:.035,mouse:!0,alpha:1},schema:[{key:"speed",label:"속도",type:"range",min:.02,max:.5,step:.01},{key:"scale",label:"무늬 크기",type:"range",min:.5,max:6,step:.1},{key:"swirl",label:"휘감김",type:"range",min:0,max:8,step:.1},{key:"grain",label:"그레인",type:"range",min:0,max:.12,step:.005},{key:"alpha",label:"투명도",type:"range",min:.1,max:1,step:.05},{key:"mouse",label:"마우스 반응",type:"boolean"}]},dots:{label:"도트 웨이브",icon:"⋯",tier:"T1",cost:"0KB",desc:"물결치는 점 격자 배경",module:"./effects/dot-grid-wave/react.jsx",component:"DotGridWave",appliesTo:["hero","section","gallery","contact","cover","cta"],needsClass:"fx-dots",defaults:{spacing:28,radius:1.7,opacity:.5,depth:34,speed:1,angle:38,ripple:.35,pointer:!0},schema:[{key:"spacing",label:"점 간격",type:"range",min:14,max:60,step:2,unit:"px"},{key:"radius",label:"점 크기",type:"range",min:.5,max:5,step:.1,unit:"px"},{key:"opacity",label:"불투명도",type:"range",min:0,max:1,step:.05},{key:"depth",label:"파동 깊이",type:"range",min:0,max:120,step:4,unit:"px"},{key:"speed",label:"속도",type:"range",min:.1,max:3,step:.1},{key:"angle",label:"진행 방향",type:"range",min:0,max:360,step:5,unit:"°"},{key:"ripple",label:"원형 파동",type:"range",min:0,max:1,step:.05},{key:"pointer",label:"커서 반응",type:"boolean"}]},spotlight:{label:"스포트라이트",icon:"◎",tier:"T1",cost:"0KB",desc:"커서를 따라오는 은은한 빛 (CSS 변수)",module:"./effects/spotlight/react.jsx",component:"Spotlight",appliesTo:["hero","section","gallery","contact","cover","cta"],needsClass:"fx-spotlight",defaults:{size:420,strength:.22,color:""},schema:[{key:"size",label:"광원 크기",type:"range",min:200,max:800,step:20,unit:"px"},{key:"strength",label:"세기",type:"range",min:.05,max:.6,step:.01},{key:"color",label:"색 (비우면 테마 강조색)",type:"color"}]},starfield:{label:"별하늘 배경",icon:"✦",tier:"T1",cost:"0KB",desc:"잔잔히 반짝이는 캔버스 별 — 어두운 테마에서 최고",module:"./effects/starfield/react.jsx",component:"Starfield",appliesTo:["hero","section","gallery","contact","cover","cta"],needsClass:"fx-starfield",defaults:{density:1,speed:6,twinkle:.6,size:1.2,color:""},schema:[{key:"density",label:"별 밀도",type:"range",min:.3,max:3,step:.1},{key:"speed",label:"표류 속도",type:"range",min:0,max:30,step:1},{key:"twinkle",label:"반짝임",type:"range",min:0,max:1,step:.05},{key:"size",label:"별 크기",type:"range",min:.5,max:3,step:.1},{key:"color",label:"별 색 (비우면 테마 색)",type:"color"}]},tilt:{label:"틸트 카드",icon:"◈",tier:"T1",cost:"0KB",desc:"카드가 커서를 따라 기울어집니다",module:"./effects/tilt-card/react.jsx",component:"TiltCard",appliesTo:["gallery","main"],target:".wf-card, .wf-main__slot",defaults:{maxTilt:12,perspective:900,scale:1.02,speed:12,glare:!0,maxGlare:.35,axis:"both"},schema:[{key:"maxTilt",label:"최대 기울기",type:"range",min:0,max:30,step:1,unit:"°"},{key:"perspective",label:"원근",type:"range",min:300,max:2e3,step:50,unit:"px"},{key:"scale",label:"확대",type:"range",min:1,max:1.15,step:.01},{key:"speed",label:"따라오는 속도",type:"range",min:2,max:24,step:1},{key:"axis",label:"축",type:"select",options:["both","x","y"]},{key:"glare",label:"글레어",type:"boolean"},{key:"maxGlare",label:"글레어 세기",type:"range",min:0,max:1,step:.05}]},magnetic:{label:"자석 버튼",icon:"⌾",tier:"T1",cost:"0KB",desc:"커서를 끌어당기는 CTA",module:"./effects/magnetic-button/react.jsx",component:"MagneticButton",appliesTo:["hero","header","footer","links","contact","cta"],target:".wf-btn, .wf-link, .wf-contact__mail",defaults:{strength:.35,radius:110,labelFactor:.5,scale:1.04,rotate:6,speed:11,glow:!0},schema:[{key:"strength",label:"자력",type:"range",min:0,max:1,step:.05},{key:"radius",label:"자력 반경",type:"range",min:20,max:300,step:10,unit:"px"},{key:"labelFactor",label:"라벨 추가 이동",type:"range",min:0,max:2,step:.1},{key:"scale",label:"확대",type:"range",min:1,max:1.2,step:.01},{key:"rotate",label:"기울기",type:"range",min:0,max:20,step:1,unit:"°"},{key:"speed",label:"따라오는 속도",type:"range",min:2,max:24,step:1},{key:"glow",label:"빛 번짐",type:"boolean"}]},flip:{label:"플립 카드",icon:"⇄",tier:"T0",cost:"0KB",desc:"카드가 뒤집혀 뒷면을 보여줍니다",module:"./effects/flip-card/react.jsx",component:"FlipCard",appliesTo:["gallery"],target:".wf-card",needsFaces:!0,defaults:{trigger:"both",axis:"y",direction:1,duration:600,perspective:1400,flipOnFocus:!0,asButton:!1},schema:[{key:"trigger",label:"작동",type:"select",options:["both","hover","click"]},{key:"axis",label:"축",type:"select",options:["y","x"]},{key:"direction",label:"방향",type:"select",options:[1,-1]},{key:"duration",label:"회전 시간",type:"range",min:200,max:1200,step:50,unit:"ms"},{key:"perspective",label:"원근",type:"range",min:600,max:2400,step:100,unit:"px"},{key:"flipOnFocus",label:"키보드 포커스로 뒤집기",type:"boolean"}]},preview:{label:"호버 프리뷰",icon:"▣",tier:"T1",cost:"0KB",desc:"카드 위에서 그림이 커서를 따라 뜹니다",module:"./effects/hover-preview/react.jsx",component:"HoverPreview",appliesTo:["gallery"],defaults:{width:240,speed:.16,offsetX:24,offsetY:-20,rotate:3},schema:[{key:"width",label:"프리뷰 폭",type:"range",min:120,max:480,step:10,unit:"px"},{key:"speed",label:"따라오는 속도",type:"range",min:.05,max:.5,step:.01},{key:"rotate",label:"기울기",type:"range",min:0,max:12,step:1,unit:"°"},{key:"offsetX",label:"커서에서 가로 거리",type:"range",min:-80,max:120,step:4,unit:"px"},{key:"offsetY",label:"커서에서 세로 거리",type:"range",min:-120,max:80,step:4,unit:"px"}]},scramble:{label:"텍스트 스크램블",icon:"⌗",tier:"T1",cost:"0KB",desc:"랜덤 문자가 제목으로 수렴합니다",module:"./effects/text-scramble/react.jsx",component:"TextScramble",appliesTo:["hero","section","aside","cta"],target:".wf-hero__title, .wf-sec__title, .wf-aside__name",defaults:{duration:1400,churn:.28,delay:0,repeat:!0},schema:[{key:"duration",label:"재생 시간",type:"range",min:300,max:2400,step:100,unit:"ms"},{key:"churn",label:"지글거림",type:"range",min:.05,max:1,step:.05},{key:"delay",label:"지연",type:"range",min:0,max:1500,step:50,unit:"ms"},{key:"repeat",label:"다시 들어오면 반복",type:"boolean"}]},parallax:{label:"패럴랙스",icon:"⧉",tier:"T1",cost:"0KB",desc:"마우스·스크롤에 따라 층이 어긋나 움직입니다",module:"./effects/parallax-layers/react.jsx",component:"ParallaxScene",appliesTo:["hero","section","gallery","cover"],layerTargets:!0,defaults:{mouse:!0,mouseStrength:26,scroll:!0,scrollStrength:70,depth:0,perspective:1200,speed:9},schema:[{key:"mouseStrength",label:"마우스 이동",type:"range",min:0,max:80,step:2,unit:"px"},{key:"scrollStrength",label:"스크롤 이동",type:"range",min:0,max:200,step:5,unit:"px"},{key:"depth",label:"입체 높이",type:"range",min:0,max:200,step:5,unit:"px"},{key:"perspective",label:"원근",type:"range",min:400,max:2400,step:100,unit:"px"},{key:"speed",label:"따라오는 속도",type:"range",min:2,max:24,step:1},{key:"mouse",label:"마우스 반응",type:"boolean"},{key:"scroll",label:"스크롤 반응",type:"boolean"}]}},lp=Object.entries(Et).map(([e,r])=>({id:e,...r})),qo=e=>{var r;return JSON.parse(JSON.stringify(((r=Et[e])==null?void 0:r.defaults)??{}))},uo=(e,r)=>{var n;return((n=Et[e])==null?void 0:n.appliesTo.includes(r))??!1},v1=e=>lp.filter(r=>r.appliesTo.includes(e)),L4={hero:"실크 배경이나 패럴랙스 하나 + 버튼에 자석. 첫 화면은 하나만 크게 쓰는 편이 낫습니다.",gallery:"카드에 기울기 또는 뒤집기. 둘을 같이 켜면 서로 싸웁니다.",section:"스크롤 등장으로 충분합니다. 배경까지 넣으면 글이 안 읽힙니다.",main:"슬롯마다 기울기.",links:"칩에 자석. 누를 수 있다는 느낌을 줍니다.",contact:"이메일에 자석, 또는 실크 배경으로 마지막 화면을 마무리.",aside:"스크롤 등장만. 좁은 칸에 배경 효과는 답답합니다.",topheader:"스크롤 등장만.",nav:"스크롤 등장만.",header:"버튼에 자석.",footer:"스크롤 등장이나 버튼에 자석."},y1=e=>L4[e]??"",Al={silk:"background",dots:"background",starfield:"background"},$4=e=>Al[e]??null;function cp(e){const r=$4(e);return r?Object.keys(Al).filter(n=>n!==e&&Al[n]===r):[]}const ve=(e,r,n,t=0)=>({id:e,col:r,row:n,minH:t}),ra=[{id:"t-fullpage",label:"풀페이지 섹션",source:"port11 · 13 · 15 · 16 · 17",tagline:"가장 흔한 형태",desc:"고정 내비 아래로 섹션이 쭉 쌓입니다. 17개 중 5개가 이 구조였습니다.",cols:"1fr",rows:"auto auto auto auto auto",sticky:"a",regions:[ve("a","1","1",56),ve("b","1","2",460),ve("c","1","3",300),ve("d","1","4",320),ve("e","1","5",110)],fills:{a:"nav",b:"hero",c:"section",d:"gallery",e:"footer"},content:{c:{title:"About",body:`3년차 프론트엔드 개발자입니다.
디자인 시스템과 3D 인터랙션을 주로 다룹니다.`}}},{id:"t-sidemenu",label:"좌측 메뉴 고정",source:"port1",tagline:"메뉴가 늘 보임",desc:"왼쪽에 메뉴를 붙박이로 두고 오른쪽만 스크롤합니다.",cols:"230px 1fr",rows:"auto 1fr auto",sticky:"a",regions:[ve("a","1","1 / -1",420),ve("b","2","1",400),ve("c","2","2",380),ve("d","2","3",100)],fills:{a:"aside",b:"hero",c:"gallery",d:"footer"}},{id:"t-classic12",label:"클래식 3분할",source:"port3",tagline:"상단바 + 히어로 + 3열",desc:"고정 상단바 아래 히어로, 그 아래 3열 본문. 부트스트랩 시절의 정석입니다.",cols:"repeat(3, 1fr)",rows:"auto auto auto auto",sticky:"a",regions:[ve("a","1 / -1","1",64),ve("b","1 / -1","2",360),ve("c","1","3",260),ve("d","2","3",260),ve("e","3","3",260),ve("f","1 / -1","4",100)],fills:{a:"header",b:"hero",c:"section",d:"section",e:"section",f:"footer"},content:{c:{title:"About",body:"3년차 프론트엔드 개발자입니다."},d:{title:"Skills",body:"",listStyle:"tags"},e:{title:"Contact",body:`hong@example.com
github.com/hong`}}},{id:"t-hero4",label:"히어로 + 4분할",source:"port12",tagline:"큰 첫 화면, 4칸 요약",desc:"큰 히어로 아래 4칸이 나란히. 카테고리가 네 개로 딱 떨어질 때 좋습니다.",cols:"repeat(4, 1fr)",rows:"auto auto auto",sticky:"a",regions:[ve("a","1 / -1","1",56),ve("b","1 / -1","2",480),ve("c","1","3",260),ve("d","2","3",260),ve("e","3","3",260),ve("f","4","3",260)],fills:{a:"nav",b:"hero",c:"section",d:"section",e:"section",f:"section"},content:{c:{title:"About",body:"무엇을 만드는 사람인지."},d:{title:"Skills",body:"",listStyle:"tags"},e:{title:"Career",body:"",listStyle:"timeline"},f:{title:"Contact",body:"hong@example.com"}}},{id:"t-railnav",label:"얇은 세로바",source:"port7",tagline:"왼쪽 끝 세로 내비",desc:"왼쪽 끝에 아주 좁은 세로 바를 두고 본문을 넓게 씁니다.",cols:"76px 1fr",rows:"auto 1fr auto",sticky:"a",regions:[ve("a","1","1 / -1",480),ve("b","2","1",420),ve("c","2","2",420),ve("d","2","3",100)],fills:{a:"nav",b:"hero",c:"gallery",d:"footer"}},{id:"t-overlay",label:"오버레이 메뉴",source:"port10 · port15",tagline:"햄버거 + 전체화면",desc:"얇은 상단 바에 햄버거만 두고 첫 화면을 꽉 채웁니다.",cols:"1fr",rows:"auto 1fr auto auto",sticky:"a",regions:[ve("a","1","1",48),ve("b","1","2",560),ve("c","1","3",360),ve("d","1","4",100)],fills:{a:"topheader",b:"hero",c:"gallery",d:"footer"}},{id:"t-desktop",label:"데스크톱 아이콘",source:"port8",tagline:"OS 흉내내기",desc:"맨 위 상태바와 아이콘 격자, 맨 아래 독. 개성이 강한 대신 호불호가 갈립니다.",cols:"1fr",rows:"auto 1fr auto",regions:[ve("a","1","1",40),ve("b","1","2",480),ve("c","1","3",84)],fills:{a:"topheader",b:"main",c:"footer"},content:{b:{columns:4,gap:24,items:[{label:"About"},{label:"Works"},{label:"Resume"},{label:"Contact"}]}}},{id:"t-triple",label:"3단 분할",source:"port6",tagline:"좌 · 중앙 · 우",desc:"양쪽에 보조 영역을 두고 가운데를 본문으로. 정보가 많을 때 씁니다.",cols:"210px 1fr 210px",rows:"auto 1fr auto",sticky:"a",regions:[ve("a","1","1 / 3",420),ve("b","2","1",360),ve("c","2","2",380),ve("d","3","1 / 3",420),ve("e","1 / -1","3",100)],fills:{a:"aside",b:"hero",c:"gallery",d:"section",e:"footer"},content:{d:{title:"Skills",body:"",listStyle:"tags"}}},{id:"t-layerhero",label:"레이어 히어로",source:"port9",tagline:"내비 없이 첫 화면부터",desc:"상단 바 없이 히어로가 화면을 다 차지합니다. 패럴랙스와 잘 맞습니다.",cols:"1fr",rows:"auto auto auto auto",regions:[ve("a","1","1",640),ve("b","1","2",320),ve("c","1","3",360),ve("d","1","4",100)],fills:{a:"hero",b:"section",c:"gallery",d:"footer"},content:{a:{titleScale:1.4}},fx:{a:[{name:"parallax",options:{}}]}},{id:"t-bands",label:"비대칭 밴드",source:"port4",tagline:"2:1 → 1:2 교차",desc:"넓은 칸과 좁은 칸을 위아래로 엇갈리게 둡니다. 단조로움이 덜합니다.",cols:"repeat(6, 1fr)",rows:"auto auto auto auto",sticky:"a",regions:[ve("a","1 / -1","1",56),ve("b","1 / 5","2",340),ve("c","5 / -1","2",340),ve("d","1 / 3","3",340),ve("e","3 / -1","3",340),ve("f","1 / -1","4",100)],fills:{a:"nav",b:"hero",c:"section",d:"section",e:"gallery",f:"footer"},content:{c:{title:"About",body:"3년차 프론트엔드 개발자입니다."},d:{title:"Career",body:"",listStyle:"timeline"}}}],_1=e=>ra.find(r=>r.id===e)??null,Be=(e,r,n,t=0)=>({id:e,col:r,row:n,minH:t}),Dl=[{id:"stack",label:"단순 스택",tagline:"위에서 아래로",desc:"가장 흔한 1단 구성. 영역 4개.",cols:"1fr",rows:"auto auto 1fr auto",regions:[Be("a","1","1",48),Be("b","1","2",200),Be("c","1","3",260),Be("d","1","4",80)]},{id:"sidebar-left",label:"좌측 사이드바",tagline:"목차를 옆에",desc:"상단바 아래 사이드바와 본문이 나란히. 영역 4개.",cols:"240px 1fr",rows:"auto 1fr auto",regions:[Be("a","1 / -1","1",56),Be("b","1","2",320),Be("c","2","2",320),Be("d","1 / -1","3",80)]},{id:"sidebar-right",label:"우측 사이드바",tagline:"본문이 먼저",desc:"본문을 왼쪽에 두고 보조 정보를 오른쪽에. 영역 4개.",cols:"1fr 260px",rows:"auto 1fr auto",regions:[Be("a","1 / -1","1",56),Be("b","1","2",320),Be("c","2","2",320),Be("d","1 / -1","3",80)]},{id:"hero-split",label:"히어로 + 2단",tagline:"첫 화면을 크게",desc:"상단바 · 큰 히어로 · 2단 본문 · 푸터. 영역 5개.",cols:"1fr 1fr",rows:"auto auto 1fr auto",regions:[Be("a","1 / -1","1",56),Be("b","1 / -1","2",240),Be("c","1","3",240),Be("d","2","3",240),Be("e","1 / -1","4",80)]},{id:"sticky-split",label:"고정 2단",tagline:"왼쪽 고정 · 오른쪽 스크롤",desc:"이름과 목차를 왼쪽에 붙박이로 두는 개발자 포트폴리오 정석. 영역 3개.",cols:"380px 1fr",rows:"1fr auto",sticky:"b",regions:[Be("b","1","1 / -1",420),Be("c","2","1",640),Be("d","2","2",90)]},{id:"magazine",label:"매거진 3단",tagline:"정보가 많을 때",desc:"상단바 아래 3단. 작업물이 많을 때 좋습니다. 영역 5개.",cols:"1fr 1fr 1fr",rows:"auto auto 1fr auto",regions:[Be("a","1 / -1","1",56),Be("b","1 / -1","2",180),Be("c","1","3",260),Be("d","2","3",260),Be("e","3","3",260)]}],R4="stack",kt=e=>Dl.find(r=>r.id===e)??ra.find(r=>r.id===e)??Dl[0];function dp(e,r){const n=h=>{const f=parseInt(String(h??"1"),10);return Number.isFinite(f)?f:1},t=String(e.rows??"").trim().split(/\s+/).filter(Boolean),a=Math.max(t.length,...e.regions.map(h=>n(h.row)),1),o=h=>{var p;const f=(p=String(h??"").split("/")[1])==null?void 0:p.trim();return f?f==="-1"?a+1:parseInt(f,10)||null:null},s=new Set;for(const h of e.regions)r[h.id]&&s.add(n(h.row));const l=[...s].sort((h,f)=>h-f),c=new Map(l.map((h,f)=>[h,f+1])),u={};for(const h of e.regions){if(!r[h.id])continue;const f=c.get(n(h.row)),p=o(h.row),k=p==null?null:l.filter(_=>_<=p-1).pop();u[h.id]={col:String(h.col??"auto"),row:p==null?String(f):`${f} / ${c.get(k)+1}`}}return{rows:l.map(h=>t[h-1]??"auto").join(" ")||null,place:u}}function fp(e){const r=[],n=/repeat\(\s*(\d+)\s*,\s*([^)]+)\)|(\S+)/g;let t;for(;t=n.exec(String(e??"1fr").trim());){if(t[3]){r.push(t[3]);continue}const a=t[2].trim().split(/\s+/).filter(Boolean);for(let o=0;o<Number(t[1]);o++)r.push(...a)}return r.length?r:["1fr"]}const Gc=e=>fp(e).length;function T4(e,r){const[n,t]=String(e??"1").split("/").map(s=>s.trim()),a=Math.max(1,parseInt(n,10)||1);let o;return t?t==="-1"?o=r+1:/^span\b/.test(t)?o=a+(parseInt(t.slice(4),10)||1):o=parseInt(t,10)||a+1:o=a+1,{start:a,span:Math.max(1,o-a)}}function ti(e){const r=Gc(e.cols),n=new Map;for(const t of e.regions){const a=parseInt(String(t.row??"1"),10)||1;n.has(a)||n.set(a,[]),n.get(a).push({id:t.id,...T4(t.col,r)})}for(const t of n.values())t.sort((a,o)=>a.start-o.start);return n}function up(e){const r=fp(e);return/^\d*\.?\d+fr$/.test(r[0])&&r.every(n=>n===r[0])?r.length:0}const gt=12,k1=(e,r)=>Array.from({length:Math.max(0,r)},(n,t)=>Math.floor(e/r)+(t<e%r?1:0)),pp=(e,r,n,t,a=0)=>{var c;const o=r*t,s={},l={};for(const u of e){const h=(u[0].start-1)*t+1,f=u.map(x=>{var y;return Math.max(1,((y=n[x.id])==null?void 0:y.colSpan)||x.span*t)});let p=f.reduce((x,y)=>x+y,0)-(o-h+1);for(let x=f.length-1;x>=0&&p>0;x--){const y=Math.min(p,f[x]-1);f[x]-=y,p-=y}const k=o-h+1,_=Math.max(0,k-f.reduce((x,y)=>x+y,0)),j=f.length,C=(c=n[u[0].id])==null?void 0:c.rowAlign;if(C==="자유"){const x=[];let y=0;for(let v=j-1;v>=0;v--)y+=f[v],x[v]=y;let S=0,w=0;u.forEach((v,g)=>{var M;const E=(M=n[v.id])==null?void 0:M.colAt,N=Math.max(S,Math.min(k-x[g],Number.isFinite(E)?E:w));s[v.id]=`${h+N} / span ${f[g]}`,S=N+f[g],w+=f[g]});continue}if(j===1&&_>0&&(C==="가운데"||C==="오른쪽")){const x=u[0].id,y=C==="가운데"?Math.round(_/2):_;s[x]=`${h+y} / span ${f[0]}`,l[x]={col:`${h} / span ${k}`,width:`calc((100% + ${a}px) * ${f[0]} / ${k} - ${a}px)`,justify:C==="가운데"?"center":"end"};continue}let b=0,d=new Array(Math.max(0,j-1)).fill(0);if(_>0){if(C==="가운데")b=Math.floor(_/2);else if(C==="오른쪽")b=_;else if(C==="양끝 정렬"&&j>1)d=k1(_,j-1);else if(C==="고르게"){const x=k1(_,j+1);b=x[0],d=x.slice(1,j)}}let m=h+b;u.forEach((x,y)=>{y>0&&(m+=d[y-1]);const S=Math.max(1,Math.min(o-m+1,f[y]));s[x.id]=`${m} / span ${S}`,m+=S})}return{cols:Array(o).fill("1fr").join(" "),place:s,fit:l}},mp={cols:null,place:{},fit:{}},hp=(e,r)=>e.some(n=>{var t,a;return((t=r[n])==null?void 0:t.colSpan)||((a=r[n])==null?void 0:a.rowAlign)});function Yc(e,r={},n=0){const t=[...ti(e).values()];return hp(e.regions.map(a=>a.id),r)?pp(t,Gc(e.cols),r,up(e.cols)?gt:1,n):mp}function Kc(e,r={},n=0){const t=tr(e);return hp(t,r)?pp([t.map((a,o)=>({id:a,start:o+1,span:1}))],e.cols,r,gt,n):mp}function gp(e,r,n){for(const t of ti(e).values())if(t.some(a=>a.id===n))return t.map(a=>a.id);for(const t of r??[]){const a=tr(t);if(a.includes(n))return a}return[]}function A4(e,r,n){const t=xp(e.cols);for(const a of ti(e).values())if(a.some(o=>o.id===n))return(a[0].start-1)*t+1;return 1}function D4(e,r,n,t){const a=gp(e,r,t);if(!a.length)return{};const o=(r??[]).find(c=>tr(c).includes(t)),{place:s}=o?Kc(o,n):Yc(e,n);if(a.some(c=>!s[c]))return{};const l=o?1:A4(e,r,t);return Object.fromEntries(a.map(c=>[c,(parseInt(s[c],10)||l)-l]))}const xp=e=>up(e)?gt:1;function P4(e,r,n,t){const a=e.map(f=>Math.max(1,Math.round(f)||1)),o=a.length,s=t??a.reduce((f,p)=>f+p,0),l=Math.max(0,s-a.reduce((f,p)=>f+p,0)),c=a.slice(r+1).reduce((f,p)=>f+p-1,0),u=Math.max(1,Math.min(a[r]+l+c,Math.round(n)||1));let h=u-a[r];a[r]=u,h-=Math.min(h,l);for(let f=r+1;f<o&&h>0;f++){const p=Math.min(h,a[f]-1);a[f]-=p,h-=p}return a}function yo(e){const r=String(e.rows??"").trim().split(/\s+/).filter(Boolean),n=o=>parseInt(String(o.row??"1"),10)||1,t=Math.max(r.length,...e.regions.map(n),1);return{tokens:r,total:t,from:n,to:o=>{var l;const s=(l=String(o.row??"").split("/")[1])==null?void 0:l.trim();return s?s==="-1"?t+1:parseInt(s,10)||n(o)+1:n(o)+1}}}function j1(e,r){const{total:n,from:t,to:a}=yo(e);return r<=0||r>=n?!0:!e.regions.some(o=>t(o)<=r&&a(o)>r+1)}function wp(e,r=[]){const{total:n}=yo(e),t=[];let a=0;for(const o of r){const s=Math.max(0,Math.min(n,o.at??n));s>a&&(t.push({kind:"band",from:a+1,to:s}),a=s),t.push({kind:"row",row:o})}return a<n&&t.push({kind:"band",from:a+1,to:n}),t}const tr=e=>Array.from({length:e.cols},(r,n)=>`${e.id}-${n+1}`),F4=e=>`x${e.reduce((r,n)=>Math.max(r,Number(n.id.slice(1))||0),0)+1}`;function O4(e,r,n){const t=[...e],a=Math.max(0,Math.min(t.length,n??t.length));return t.splice(a,0,{id:F4(e),cols:r}),t}function S1(e,r,n=[]){const t=new Set(kt(r).regions.map(o=>o.id));n.forEach(o=>tr(o).forEach(s=>t.add(s)));const a={};for(const[o,s]of Object.entries(e))t.has(o)&&(a[o]=s);return a}const ga=typeof window<"u";function ai(e){return!ga||typeof window.matchMedia!="function"?null:window.matchMedia(e)}function po(){var e;return((e=ai("(prefers-reduced-motion: reduce)"))==null?void 0:e.matches)??!1}function B4(e){const r=ai("(prefers-reduced-motion: reduce)");if(!r)return()=>{};const n=()=>e(r.matches);return r.addEventListener?r.addEventListener("change",n):r.addListener(n),()=>{r.removeEventListener?r.removeEventListener("change",n):r.removeListener(n)}}function q4(){var e;return((e=ai("(pointer: coarse)"))==null?void 0:e.matches)??!1}function bp(){var e;return((e=ai("(hover: hover)"))==null?void 0:e.matches)??!0}function vp(e){return ga?window.innerWidth<e:!1}let Tt=null;function I4(){var e;if(Tt!==null)return Tt;if(!ga)return Tt=!1;try{const r=document.createElement("canvas"),n=r.getContext("webgl2")||r.getContext("webgl");Tt=!!n,(e=n==null?void 0:n.getExtension("WEBGL_lose_context"))==null||e.loseContext()}catch{Tt=!1}return Tt}const C1={low:0,mid:1,high:2};let ot=null;function Qc(){if(ot)return ot;if(!ga)return ot="mid";const e=navigator.hardwareConcurrency||4,r=navigator.deviceMemory||4,n=q4();return e<=4||r<=4||n&&vp(768)?ot="low":e>=8&&r>=8?ot="high":ot="mid",ot}function yp(e=2){if(!ga)return 1;const r=Qc(),n=r==="low"?1.5:r==="mid"?2:e;return Math.min(window.devicePixelRatio||1,n,e)}function _p(e=0){const r=Qc();return r==="low"?Math.min(e||30,30):e||0}function H4(e={},r={}){if(r.guard===!1)return{pass:!0,reason:""};const{motion:n="skip",pointer:t="any",minWidth:a=0,webgl:o=!1,minTier:s="low"}=e;return n==="skip"&&po()?{pass:!1,reason:"reduced-motion"}:t==="fine"&&!bp()?{pass:!1,reason:"coarse-pointer"}:a>0&&vp(a)?{pass:!1,reason:"viewport-too-narrow"}:o&&!I4()?{pass:!1,reason:"no-webgl"}:C1[Qc()]<C1[s]?{pass:!1,reason:"device-tier"}:{pass:!0,reason:""}}function V4(e,r=200){if(!ga)return()=>{};let n=0;const t=()=>{clearTimeout(n),n=setTimeout(e,r)};return window.addEventListener("resize",t,{passive:!0}),window.addEventListener("orientationchange",t,{passive:!0}),()=>{clearTimeout(n),window.removeEventListener("resize",t),window.removeEventListener("orientationchange",t)}}const E1=new WeakMap,N1=e=>!!e&&e.nodeType===1;function W4(e,r=document){return e?typeof e=="string"?Array.from(r.querySelectorAll(e)):N1(e)?[e]:typeof e.length=="number"?Array.from(e).filter(N1):[]:[]}const z1=e=>e.replace(/[A-Z]/g,r=>"-"+r.toLowerCase());function Pl(e){const r=e.trim();if(r==="true")return!0;if(r==="false")return!1;if(r==="null")return null;if(r!==""&&!Number.isNaN(Number(r)))return Number(r);if(/^[[{]/.test(r))try{return JSON.parse(r)}catch{}return r.includes(",")?r.split(",").map(n=>Pl(n)):r}function U4(e,r,n){const t={};for(const a of Object.keys(r)){const o=n?`data-fx-${n}-${z1(a)}`:null,s=`data-fx-${z1(a)}`;o&&e.hasAttribute(o)?t[a]=Pl(e.getAttribute(o)):e.hasAttribute(s)&&(t[a]=Pl(e.getAttribute(s)))}return t}function Vr(e){const{name:r,defaults:n={},guard:t={},setup:a}=e;if(!r||typeof a!="function")throw new Error("[fx] defineEffect: name과 setup은 필수입니다.");function o(l,c){let u=E1.get(l);if(u||E1.set(l,u=new Map),u.has(r))return u.get(r);const h=Object.assign({},n,U4(l,n,r),c);let f=[],p=null,k=!1;const _=!l.classList.contains(`fx-${r}`),j=!l.classList.contains("fx"),C={el:l,opts:h,name:r,on(w,v,g,E){return w.addEventListener(v,g,E),f.push(()=>w.removeEventListener(v,g,E)),g},addCleanup(w){typeof w=="function"&&f.push(w)},setVar(w,v){l.style.setProperty(w,v)},emit(w,v){l.dispatchEvent(new CustomEvent(`fx:${r}:${w}`,{detail:v,bubbles:!0}))}};function b(){if(!k){k=!0,l.classList.add(`fx-${r}`);try{p=a(C)||{}}catch(w){k=!1,l.classList.remove(`fx-${r}`),console.error(`[fx:${r}] setup 실패`,w)}}}function d(){var w;if(k){k=!1;for(const v of f.reverse())try{v()}catch(g){console.warn(`[fx:${r}] cleanup 오류`,g)}f=[];try{(w=p==null?void 0:p.destroy)==null||w.call(p)}catch(v){console.warn(`[fx:${r}] destroy 오류`,v)}p=null,_&&l.classList.remove(`fx-${r}`)}}function m(){const w=H4(t,h);w.pass?(l.classList.remove("fx-inert"),delete l.dataset.fxSkipped,b()):(d(),l.classList.add("fx-inert"),l.dataset.fxSkipped=w.reason)}l.classList.add("fx"),m();const x=B4(m),y=t.minWidth?V4(m):()=>{},S={name:r,el:l,get active(){return k},get api(){return p},update(w={}){return Object.assign(h,w),k&&(d(),b()),S},destroy(){x(),y(),d(),j&&l.classList.remove("fx"),l.classList.remove("fx-inert"),delete l.dataset.fxSkipped,u.delete(r)}};return u.set(r,S),S}function s(l,c={}){var f;const h=W4(l,c.root||document).map(p=>o(p,c));return!h.length&&typeof l=="string"&&console.warn(`[fx:${r}] "${l}"에 해당하는 요소가 없습니다.`),{name:r,items:h,el:((f=h[0])==null?void 0:f.el)??null,get api(){var p;return((p=h[0])==null?void 0:p.api)??null},get active(){return h.some(p=>p.active)},update(p){return h.forEach(k=>k.update(p)),this},destroy:()=>h.forEach(p=>p.destroy())}}return s.effectName=r,s.defaults=n,s}const G4=typeof IntersectionObserver<"u";function oi(e,{onEnter:r,onLeave:n,threshold:t=0,rootMargin:a="0px"}={}){var u;const s=(((u=e==null?void 0:e.ownerDocument)==null?void 0:u.defaultView)??window).IntersectionObserver;if(!G4||!s)return r==null||r(),()=>{};let l=null;const c=new s(h=>{for(const f of h){const p=f.isIntersecting;p!==l&&(l=p,p?r==null||r(f):n==null||n(f))}},{threshold:t,rootMargin:a});return c.observe(e),()=>c.disconnect()}function Xc(e,{fps:r=0}={}){const n=r>0?1/r:0;let t=0,a=0,o=0,s=0,l=!1;const c=u=>{if(t=requestAnimationFrame(c),!a){a=u;return}let h=(u-a)/1e3;a=u,h>.1&&(h=.1),o+=h,!(n&&o<n)&&(s+=o,e(o,s),o=0)};return{start(){l||(l=!0,a=0,o=0,t=requestAnimationFrame(c))},stop(){l&&(l=!1,cancelAnimationFrame(t),t=0)},get running(){return l},get elapsed(){return s}}}function Zc(e,r,{fps:n=0,threshold:t=0,rootMargin:a="150px"}={}){const o=Xc(r,{fps:n});let s=!1,l=typeof document>"u"||!document.hidden,c=!0;const u=()=>{c&&s&&l?o.start():o.stop()},h=oi(e,{threshold:t,rootMargin:a,onEnter:()=>{s=!0,u()},onLeave:()=>{s=!1,u()}}),f=()=>{l=!document.hidden,u()};return document.addEventListener("visibilitychange",f),{pause(){c=!1,u()},resume(){c=!0,u()},get running(){return o.running},get elapsed(){return o.elapsed},destroy(){h(),document.removeEventListener("visibilitychange",f),o.stop()}}}function kp(e,r){if(typeof ResizeObserver<"u"){const t=new ResizeObserver(a=>{var o;return r((o=a[0])==null?void 0:o.contentRect)});return t.observe(e),()=>t.disconnect()}const n=()=>r(e.getBoundingClientRect());return window.addEventListener("resize",n,{passive:!0}),()=>window.removeEventListener("resize",n)}const jp={ogl:"https://cdn.jsdelivr.net/npm/ogl@1/+esm",modelViewer:"https://cdn.jsdelivr.net/npm/@google/model-viewer@4/dist/model-viewer.min.js"},Io=new Map,Ho=new Map;function Y4(e){if(Io.has(e))return Io.get(e);const r=import(e).catch(n=>{throw Io.delete(e),new Error(`[fx] 모듈 로드 실패: ${e}
${n.message}`)});return Io.set(e,r),r}function K4(e,{module:r=!0}={}){if(Ho.has(e))return Ho.get(e);const n=new Promise((t,a)=>{const o=document.querySelector(`script[src="${e}"]`);if(o){if(o.dataset.fxLoaded==="1")return t();o.addEventListener("load",()=>t(),{once:!0}),o.addEventListener("error",a,{once:!0});return}const s=document.createElement("script");s.src=e,r&&(s.type="module"),s.async=!0,s.addEventListener("load",()=>{s.dataset.fxLoaded="1",t()},{once:!0}),s.addEventListener("error",()=>{Ho.delete(e),a(new Error(`[fx] 스크립트 로드 실패: ${e}`))},{once:!0}),document.head.appendChild(s)});return Ho.set(e,n),n}const Q4=()=>Y4(jp.ogl);function X4(){return typeof customElements<"u"&&customElements.get("model-viewer")?Promise.resolve():K4(jp.modelViewer,{module:!0}).then(()=>{var e;return(e=customElements==null?void 0:customElements.whenDefined)==null?void 0:e.call(customElements,"model-viewer")})}const Nr=(e,r,n)=>e<r?r:e>n?n:e,Fl=(e,r,n)=>e+(r-e)*n,mn=(e,r,n,t)=>Fl(e,r,1-Math.exp(-n*t)),Ze=(e,r=3)=>{const n=10**r;return Math.round(e*n)/n};function Z4(e){let r=String(e).trim().replace(/^#/,"");if(r.length===3&&(r=r.split("").map(t=>t+t).join("")),r.length!==6||/[^0-9a-f]/i.test(r))return[0,0,0];const n=parseInt(r,16);return[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255]}function J4(e){let r=0,n=null;const t=(...a)=>{n=a,!r&&(r=requestAnimationFrame(()=>{r=0,e(...n)}))};return t.cancel=()=>{r&&cancelAnimationFrame(r),r=0},t}const M1=typeof CSS<"u"&&typeof CSS.supports=="function"&&CSS.supports("animation-timeline","view()"),L1=["rise","depth","flip","swing","zoom"],e5=Vr({name:"scroll-reveal",defaults:{preset:"rise",mode:"once",duration:700,delay:0,stagger:80,index:null,distance:28,rotate:22,depth:140,scale:.92,perspective:1e3,threshold:.15,rootMargin:"0px 0px -10% 0px",repeat:!1,rangeStart:"entry 10%",rangeEnd:"cover 40%"},guard:{motion:"skip",pointer:"any"},setup({el:e,opts:r,addCleanup:n,setVar:t,emit:a}){const o=L1.includes(r.preset)?r.preset:"rise";o!==r.preset&&console.warn(`[fx:scroll-reveal] 알 수 없는 preset "${r.preset}". 사용 가능: ${L1.join(", ")}`),e.dataset.fxPreset=o;let s=r.mode;s==="auto"&&(s=M1?"scrub":"once"),s==="scrub"&&!M1&&(s="once"),e.dataset.fxMode=s;let l=r.index;if(l==null){const c=e.dataset.fxIndex;c!==void 0&&(l=parseInt(c,10))}if(!Number.isFinite(l)){const c=e.parentElement?e.parentElement.children:[];l=Math.max(0,Array.prototype.indexOf.call(c,e))}if(t("--fx-reveal-duration",`${r.duration}ms`),t("--fx-reveal-delay",`${r.delay+l*r.stagger}ms`),t("--fx-reveal-distance",`${r.distance}px`),t("--fx-reveal-rotate",`${r.rotate}deg`),t("--fx-reveal-depth",`${-Math.abs(r.depth)}px`),t("--fx-reveal-scale",r.scale),t("--fx-reveal-perspective",`${r.perspective}px`),s==="scrub"&&(t("--fx-reveal-start",r.rangeStart),t("--fx-reveal-end",r.rangeEnd)),s==="once"){let c=!1;const u=oi(e,{threshold:r.threshold,rootMargin:r.rootMargin,onEnter:()=>{c&&!r.repeat||(c=!0,e.classList.add("is-revealed"),a("reveal",{index:l}),r.repeat||u())},onLeave:()=>{r.repeat&&e.classList.remove("is-revealed")}});n(()=>u())}return n(()=>{e.classList.remove("is-revealed"),delete e.dataset.fxPreset,delete e.dataset.fxMode;for(const c of["--fx-reveal-duration","--fx-reveal-delay","--fx-reveal-distance","--fx-reveal-rotate","--fx-reveal-depth","--fx-reveal-scale","--fx-reveal-perspective","--fx-reveal-start","--fx-reveal-end"])e.style.removeProperty(c)}),{reveal:()=>e.classList.add("is-revealed"),reset:()=>e.classList.remove("is-revealed"),mode:s,index:l}}}),r5=`
  attribute vec2 uv;
  attribute vec2 position;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,n5=`
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
`,t5=["#1b1d3a","#5b5bd6","#a78bfa"];function a5(e,r){if(Array.isArray(r)&&r.length>=2){const t=r.slice(0,3);for(;t.length<3;)t.push(t[t.length-1]);return t}const n=getComputedStyle(e);return t5.map((t,a)=>{const o=n.getPropertyValue(`--fx-silk-c${a+1}`).trim();return/^#?[0-9a-f]{3,6}$/i.test(o)?o:t})}const o5=Vr({name:"silk-bg",defaults:{colors:null,speed:.12,scale:2.2,swirl:3.2,grain:.035,mouse:!0,mouseStrength:.18,alpha:1,dpr:1.25,fps:0},guard:{motion:"skip",webgl:!0,pointer:"any"},setup({el:e,opts:r,on:n,addCleanup:t,setVar:a,emit:o}){const s=a5(e,r.colors);s.forEach((h,f)=>a(`--fx-silk-c${f+1}`,h)),getComputedStyle(e).position==="static"&&(e.style.position="relative",t(()=>{e.style.position=""}));const l=document.createElement("canvas");l.className="fx-silk-bg__canvas fx-layer",l.setAttribute("aria-hidden","true"),e.prepend(l),t(()=>l.remove());let c=!1,u=null;t(()=>{c=!0,u==null||u(),u=null}),(async()=>{const h=await Q4();if(c)return;const{Renderer:f,Program:p,Mesh:k,Triangle:_}=h,j=new f({canvas:l,dpr:Math.min(yp(2),r.dpr),alpha:r.alpha<1,antialias:!1,depth:!1,stencil:!1,powerPreference:"low-power"}),C=j.gl,[b,d,m]=s.map(Z4),x=new p(C,{vertex:r5,fragment:n5,uniforms:{uTime:{value:0},uResolution:{value:[1,1]},uColor1:{value:b},uColor2:{value:d},uColor3:{value:m},uScale:{value:r.scale},uSwirl:{value:r.swirl},uGrain:{value:r.grain},uMouse:{value:[0,0]},uAlpha:{value:r.alpha}},transparent:r.alpha<1,depthTest:!1}),y=new k(C,{geometry:new _(C),program:x}),S=()=>{const $=e.clientWidth||1,P=e.clientHeight||1;j.setSize($,P),x.uniforms.uResolution.value=[C.canvas.width,C.canvas.height]},w=kp(e,S);S();const v={x:0,y:0,tx:0,ty:0};let g=()=>{};if(r.mouse){const $=P=>{if(P.pointerType==="touch")return;const J=e.getBoundingClientRect();J.width&&(v.tx=Nr((P.clientX-J.left)/J.width*2-1,-1,1)*r.mouseStrength,v.ty=Nr((P.clientY-J.top)/J.height*2-1,-1,1)*r.mouseStrength)};window.addEventListener("pointermove",$,{passive:!0}),g=()=>window.removeEventListener("pointermove",$)}let E=0;const N=Zc(e,$=>{E+=$*r.speed,x.uniforms.uTime.value=E,r.mouse&&(v.x=mn(v.x,v.tx,3.5,$),v.y=mn(v.y,v.ty,3.5,$),x.uniforms.uMouse.value=[v.x,v.y]),j.render({scene:y})},{fps:r.fps||_p(),rootMargin:"120px"}),M=$=>{$.preventDefault(),N.pause(),e.classList.add("fx-silk-bg--lost")},T=()=>{e.classList.remove("fx-silk-bg--lost"),S(),N.resume()};l.addEventListener("webglcontextlost",M),l.addEventListener("webglcontextrestored",T),u=()=>{var $;N.destroy(),w(),g(),l.removeEventListener("webglcontextlost",M),l.removeEventListener("webglcontextrestored",T),($=C.getExtension("WEBGL_lose_context"))==null||$.loseContext()},e.classList.add("fx-silk-bg--ready"),t(()=>e.classList.remove("fx-silk-bg--ready")),o("ready",{colors:s})})().catch(h=>{console.warn("[fx:silk-bg] WebGL 초기화 실패 — CSS 그라디언트로 대체합니다.",h),l.remove(),e.classList.add("fx-silk-bg--failed")}),t(()=>{e.classList.remove("fx-silk-bg--failed","fx-silk-bg--lost")})}}),s5=Math.PI*2,i5=e=>e*e*(3-2*e),l5=Vr({name:"dot-grid-wave",defaults:{spacing:28,radius:1.7,color:null,opacity:.55,depth:38,focal:420,speed:1,frequency:.022,angle:38,ripple:.35,pointer:!0,pointerRadius:140,pointerPush:18,pointerLift:26,fps:0,dpr:2,maxDots:7e3},guard:{motion:"skip",pointer:"any"},setup({el:e,opts:r,on:n,addCleanup:t,emit:a}){var $;getComputedStyle(e).position==="static"&&(e.style.position="relative",t(()=>{e.style.position=""}));const o=document.createElement("canvas");o.className="fx-dot-grid-wave__canvas fx-layer",o.setAttribute("aria-hidden","true"),e.prepend(o),t(()=>o.remove());const s=o.getContext("2d",{alpha:!0});if(!s){console.warn("[fx:dot-grid-wave] Canvas 2D 컨텍스트를 만들 수 없습니다."),o.remove();return}const l=()=>{if(r.color)return r.color;const P=getComputedStyle(e);return P.getPropertyValue("--fx-dot-color").trim()||P.color||"#888"};let c=l(),u=1,h=0,f=0,p=0,k=0,_=r.spacing,j=0,C=0,b=0,d=0;const m=()=>{h=e.clientWidth||1,f=e.clientHeight||1,u=Math.min(yp(3),r.dpr),o.width=Math.round(h*u),o.height=Math.round(f*u),o.style.width=`${h}px`,o.style.height=`${f}px`,_=r.spacing;let P=Math.ceil(h/_)*Math.ceil(f/_);P>r.maxDots&&(_=Math.sqrt(h*f/r.maxDots),P=Math.ceil(h/_)*Math.ceil(f/_)),p=Math.ceil(h/_)+2,k=Math.ceil(f/_)+2,j=(h-(p-1)*_)/2,C=(f-(k-1)*_)/2,b=h/2,d=f/2,s.setTransform(u,0,0,u,0,0),c=l()},x=kp(e,m);t(()=>x()),m();const y={x:-9999,y:-9999,tx:-9999,ty:-9999,active:0,tActive:0};r.pointer&&(n(e,"pointermove",P=>{const J=e.getBoundingClientRect();y.tx=P.clientX-J.left,y.ty=P.clientY-J.top,y.tActive=1,y.x<-9e3&&(y.x=y.tx,y.y=y.ty)},{passive:!0}),n(e,"pointerleave",()=>{y.tActive=0}));const S=r.angle*Math.PI/180,w=Math.cos(S),v=Math.sin(S),g=r.focal*.6;let E=0;const M=Zc(e,P=>{E+=P*r.speed,y.x=mn(y.x,y.tx,14,P),y.y=mn(y.y,y.ty,14,P),y.active=mn(y.active,y.tActive,8,P),s.clearRect(0,0,h,f),s.globalAlpha=r.opacity,s.fillStyle=c;const J=new Path2D,H=r.pointerRadius,A=r.pointer&&y.active>.01;for(let B=0;B<k;B++){const Q=C+B*_;for(let pe=0;pe<p;pe++){const Z=j+pe*_;let Se=(Z*w+Q*v)*r.frequency-E*2.2;if(r.ripple>0){const W=Z-b,ee=Q-d,we=Math.sqrt(W*W+ee*ee);Se=Se*(1-r.ripple)+(we*r.frequency-E*2.2)*r.ripple}let X=Math.sin(Se)*r.depth,ne=Z,Ne=Q;if(A){const W=Z-y.x,ee=Q-y.y,we=W*W+ee*ee;if(we<H*H){const ge=Math.sqrt(we)||1e-4,xe=i5(1-ge/H)*y.active;ne+=W/ge*r.pointerPush*xe,Ne+=ee/ge*r.pointerPush*xe,X+=r.pointerLift*xe}}X>g&&(X=g);const Re=r.focal/(r.focal-X),ae=b+(ne-b)*Re,fe=d+(Ne-d)*Re,Me=r.radius*Re;Me<=.05||ae<-8||ae>h+8||fe<-8||fe>f+8||(J.moveTo(ae+Me,fe),J.arc(ae,fe,Me,0,s5))}}s.fill(J),s.globalAlpha=1},{fps:r.fps||_p(),rootMargin:"120px"});t(()=>M.destroy());const T=($=window.matchMedia)==null?void 0:$.call(window,"(prefers-color-scheme: dark)");if(T!=null&&T.addEventListener){const P=()=>{c=l()};T.addEventListener("change",P),t(()=>T.removeEventListener("change",P))}return a("ready",{cols:p,rows:k,step:_}),{refresh:()=>m(),get dots(){return p*k}}}}),c5=Vr({name:"tilt-card",defaults:{maxTilt:12,perspective:900,scale:1.02,speed:12,glare:!0,maxGlare:.35,glareZ:0,reverse:!1,axis:"both",focusScale:!0},guard:{motion:"skip",pointer:"fine"},setup({el:e,opts:r,on:n,addCleanup:t,setVar:a,emit:o}){getComputedStyle(e).position==="static"&&(e.style.position="relative",t(()=>{e.style.position=""}));const s=Array.from(e.querySelectorAll("[data-fx-depth]"));for(const x of s)x.style.setProperty("--fx-depth",parseFloat(x.dataset.fxDepth)||0);t(()=>{for(const x of s)x.style.removeProperty("--fx-depth")});let l=null;r.glare&&(l=document.createElement("div"),l.className="fx-tilt-card__glare",l.setAttribute("aria-hidden","true"),e.appendChild(l),t(()=>l.remove())),a("--fx-tilt-perspective",`${r.perspective}px`),l&&(a("--fx-tilt-glare-z",`${r.glareZ}px`),a("--fx-tilt-glare-scale",Ze((r.perspective-r.glareZ)/r.perspective,4)));const c={rx:0,ry:0,sc:1,g:0,nx:0,ny:0},u={rx:0,ry:0,sc:1,g:0,nx:0,ny:0};let h=null,f=!1,p=!1;const k=()=>{h=null};n(window,"scroll",k,{passive:!0}),n(window,"resize",k,{passive:!0});const _=()=>{a("--fx-tilt-rx",`${Ze(c.rx,2)}deg`),a("--fx-tilt-ry",`${Ze(c.ry,2)}deg`),a("--fx-tilt-scale",Ze(c.sc,4)),a("--fx-tilt-nx",Ze(c.nx,3)),a("--fx-tilt-ny",Ze(c.ny,3)),l&&(a("--fx-tilt-px",`${Ze(50+c.nx*50,1)}%`),a("--fx-tilt-py",`${Ze(50+c.ny*50,1)}%`),a("--fx-tilt-glare-o",Ze(c.g,3)))},j=["rx","ry","sc","g","nx","ny"],C=()=>j.every(x=>Math.abs(c[x]-u[x])<.002),b=Xc(x=>{for(const y of j)c[y]=mn(c[y],u[y],r.speed,x);if(_(),!f&&!p&&C()){for(const y of j)c[y]=u[y];_(),b.stop(),e.dataset.fxTilting="0"}});t(()=>b.stop());const d=()=>{e.dataset.fxTilting="1",b.start()},m=x=>{if(h||(h=e.getBoundingClientRect()),!h.width||!h.height)return;const y=Nr((x.clientX-h.left)/h.width*2-1,-1,1),S=Nr((x.clientY-h.top)/h.height*2-1,-1,1),w=r.reverse?-1:1;u.nx=y,u.ny=S,u.ry=r.axis==="y"?0:w*y*r.maxTilt,u.rx=r.axis==="x"?0:w*-S*r.maxTilt,u.g=r.maxGlare};n(e,"pointerenter",x=>{x.pointerType!=="touch"&&(f=!0,h=e.getBoundingClientRect(),u.sc=r.scale,m(x),d(),o("enter"))}),n(e,"pointermove",x=>{!f||x.pointerType==="touch"||m(x)}),n(e,"pointerleave",()=>{f&&(f=!1,u.rx=0,u.ry=0,u.nx=0,u.ny=0,u.g=0,u.sc=p?r.scale:1,o("leave"))}),r.focusScale&&(n(e,"focusin",()=>{p=!0,u.sc=r.scale,d()}),n(e,"focusout",()=>{p=!1,f||(u.sc=1)})),t(()=>{for(const x of["--fx-tilt-rx","--fx-tilt-ry","--fx-tilt-scale","--fx-tilt-nx","--fx-tilt-ny","--fx-tilt-px","--fx-tilt-py","--fx-tilt-glare-o","--fx-tilt-perspective","--fx-tilt-glare-z","--fx-tilt-glare-scale"])e.style.removeProperty(x);delete e.dataset.fxTilting}),_()}}),d5=e=>e*e*(3-2*e),f5=Vr({name:"magnetic-button",defaults:{strength:.35,radius:110,labelFactor:.5,scale:1.04,rotate:6,speed:11,glow:!0,resetOnLeave:!0},guard:{motion:"skip",pointer:"fine"},setup({el:e,opts:r,on:n,addCleanup:t,setVar:a,emit:o}){getComputedStyle(e).position==="static"&&(e.style.position="relative",t(()=>{e.style.position=""})),e.querySelector("[data-fx-label]")||(e.dataset.fxMagLabel="none",t(()=>delete e.dataset.fxMagLabel));let l=null;r.glow&&(l=document.createElement("span"),l.className="fx-magnetic-button__glow",l.setAttribute("aria-hidden","true"),e.appendChild(l),t(()=>l.remove())),a("--fx-mag-lf",r.labelFactor);const c={x:0,y:0,rx:0,ry:0,sc:1,g:0,px:50,py:50},u={x:0,y:0,rx:0,ry:0,sc:1,g:0,px:50,py:50},h=["x","y","rx","ry","sc","g","px","py"];let f=null,p=!1;const k=()=>{f=null};n(window,"scroll",k,{passive:!0}),n(window,"resize",k,{passive:!0});const _=()=>{a("--fx-mag-x",`${Ze(c.x,2)}px`),a("--fx-mag-y",`${Ze(c.y,2)}px`),a("--fx-mag-rx",`${Ze(c.rx,2)}deg`),a("--fx-mag-ry",`${Ze(c.ry,2)}deg`),a("--fx-mag-scale",Ze(c.sc,4)),l&&(a("--fx-mag-px",`${Ze(c.px,1)}%`),a("--fx-mag-py",`${Ze(c.py,1)}%`),a("--fx-mag-glow",Ze(c.g,3)))},j=()=>h.every(m=>Math.abs(c[m]-u[m])<.01),C=Xc(m=>{for(const x of h)c[x]=mn(c[x],u[x],r.speed,m);if(_(),!p&&j()){for(const x of h)c[x]=u[x];_(),C.stop(),e.dataset.fxMagnetic="0"}});t(()=>C.stop());const b=()=>{e.dataset.fxMagnetic="1",C.start()},d=()=>{p&&(p=!1,u.x=0,u.y=0,u.rx=0,u.ry=0,u.sc=1,u.g=0,u.px=50,u.py=50,o("leave"))};n(window,"pointermove",m=>{if(m.pointerType==="touch"||(f||(f=e.getBoundingClientRect()),!f.width))return;const x=f.left+f.width/2,y=f.top+f.height/2,S=m.clientX-x,w=m.clientY-y,v=Math.max(f.width,f.height)/2+r.radius,g=Math.hypot(S,w);if(g>v){d();return}const E=d5(1-g/v);if(p||(p=!0,o("enter")),u.x=S*r.strength*E,u.y=w*r.strength*E,u.sc=1+(r.scale-1)*E,u.g=E,r.rotate){const N=Nr(S/(f.width/2+r.radius),-1,1),M=Nr(w/(f.height/2+r.radius),-1,1);u.ry=N*r.rotate*E,u.rx=-M*r.rotate*E}u.px=Nr((m.clientX-f.left)/f.width*100,-20,120),u.py=Nr((m.clientY-f.top)/f.height*100,-20,120),b()},{passive:!0}),n(document,"pointerleave",()=>{d(),b()}),r.resetOnLeave&&n(window,"blur",()=>{d(),b()}),n(e,"focusin",()=>{u.sc=r.scale,u.g=1,b()}),n(e,"focusout",()=>{p||(u.sc=1,u.g=0)}),_(),t(()=>{for(const m of["--fx-mag-x","--fx-mag-y","--fx-mag-rx","--fx-mag-ry","--fx-mag-scale","--fx-mag-px","--fx-mag-py","--fx-mag-glow","--fx-mag-lf"])e.style.removeProperty(m);delete e.dataset.fxMagnetic})}}),u5=Vr({name:"parallax-layers",defaults:{mouse:!0,mouseStrength:26,scroll:!0,scrollStrength:70,depth:0,perspective:1200,speed:9,pointerTarget:"window",idleSleep:.4},guard:{motion:"skip",pointer:"any"},setup({el:e,opts:r,on:n,addCleanup:t,setVar:a,emit:o}){const s=Array.from(e.querySelectorAll("[data-fx-layer]"));s.length||console.warn("[fx:parallax-layers] data-fx-layer를 가진 자식이 없습니다.");for(const _ of s){const j=parseFloat(_.dataset.fxLayer);_.style.setProperty("--fx-layer",Number.isFinite(j)?j:0)}t(()=>{for(const _ of s)_.style.removeProperty("--fx-layer")}),a("--fx-plx-perspective",`${r.perspective}px`),a("--fx-plx-mx",`${-r.mouseStrength}px`),a("--fx-plx-my",`${-r.mouseStrength}px`),a("--fx-plx-sy",`${r.scrollStrength}px`),a("--fx-plx-z",`${r.depth}px`);const l={x:0,y:0,p:0},c={x:0,y:0,p:0};let u=0;const h=()=>{a("--fx-plx-x",Ze(l.x,4)),a("--fx-plx-y",Ze(l.y,4)),a("--fx-plx-s",Ze(l.p,4))},f=()=>{if(!r.scroll)return;const _=e.getBoundingClientRect(),j=window.innerHeight||1,C=_.top+_.height/2,b=j/2+_.height/2;c.p=Nr((C-j/2)/(b||1),-1,1)},p=Zc(e,_=>{l.x=mn(l.x,c.x,r.speed,_),l.y=mn(l.y,c.y,r.speed,_),l.p=mn(l.p,c.p,r.speed,_),h(),Math.abs(l.x-c.x)>.001||Math.abs(l.y-c.y)>.001||Math.abs(l.p-c.p)>.001?u=0:(u+=_,u>r.idleSleep&&(l.x=c.x,l.y=c.y,l.p=c.p,h(),p.pause()))},{rootMargin:"200px"});t(()=>p.destroy());const k=()=>{u=0,p.resume()};if(r.mouse){const _=C=>{if(C.pointerType!=="touch"){if(r.pointerTarget==="self"){const b=e.getBoundingClientRect();if(!b.width||!b.height)return;c.x=Nr((C.clientX-b.left)/b.width*2-1,-1,1),c.y=Nr((C.clientY-b.top)/b.height*2-1,-1,1)}else c.x=Nr(C.clientX/window.innerWidth*2-1,-1,1),c.y=Nr(C.clientY/window.innerHeight*2-1,-1,1);k()}},j=r.pointerTarget==="self"?e:window;n(j,"pointermove",_,{passive:!0}),n(document,"pointerleave",()=>{c.x=0,c.y=0,k()})}if(r.scroll){const _=J4(()=>{f(),k()});n(window,"scroll",_,{passive:!0}),n(window,"resize",_,{passive:!0}),t(()=>_.cancel()),f(),l.p=c.p}h(),o("ready",{layers:s.length}),t(()=>{for(const _ of["--fx-plx-x","--fx-plx-y","--fx-plx-s","--fx-plx-mx","--fx-plx-my","--fx-plx-sy","--fx-plx-z","--fx-plx-perspective"])e.style.removeProperty(_)})}}),p5=typeof HTMLElement<"u"&&"inert"in HTMLElement.prototype,m5='a[href],button,input,select,textarea,[tabindex]:not([tabindex="-1"])';function Vo(e,r){if(!e)return;if(e.setAttribute("aria-hidden",r?"true":"false"),p5){e.inert=r;return}const n=e.querySelectorAll(m5);for(const t of n)if(r)t.hasAttribute("data-fx-prev-tabindex")||t.setAttribute("data-fx-prev-tabindex",t.getAttribute("tabindex")??""),t.setAttribute("tabindex","-1");else{const a=t.getAttribute("data-fx-prev-tabindex");if(a===null)continue;a===""?t.removeAttribute("tabindex"):t.setAttribute("tabindex",a),t.removeAttribute("data-fx-prev-tabindex")}}const h5=Vr({name:"flip-card",defaults:{trigger:"both",axis:"y",direction:1,duration:600,perspective:1400,flipOnFocus:!0,asButton:!0},guard:{motion:"ignore",pointer:"any"},setup({el:e,opts:r,on:n,addCleanup:t,setVar:a,emit:o}){const s=e.querySelector(".fx-flip-card__inner"),l=e.querySelector('[data-fx-face="front"]')||e.querySelector(".fx-flip-card__face--front"),c=e.querySelector('[data-fx-face="back"]')||e.querySelector(".fx-flip-card__face--back");if(!s||!l||!c){console.warn(`[fx:flip-card] 구조가 맞지 않습니다. README의 마크업을 확인하세요.
  .fx-flip-card > .fx-flip-card__inner > (.fx-flip-card__face--front, --back)`);return}a("--fx-flip-duration",`${r.duration}ms`),a("--fx-flip-perspective",`${r.perspective}px`),a("--fx-flip-deg",`${r.direction<0?-180:180}deg`),e.dataset.fxFlipAxis=r.axis==="x"?"x":"y";const u=e.tagName==="BUTTON"||e.tagName==="A"&&e.hasAttribute("href"),h=[],f=(d,m,x)=>{h.push([d,m,d.getAttribute(m)]),d.setAttribute(m,x)};u||(e.hasAttribute("tabindex")||f(e,"tabindex","0"),r.asButton&&(e.hasAttribute("role")||f(e,"role","button"),f(e,"aria-pressed","false"))),t(()=>{for(const[d,m,x]of h.reverse())x===null?d.removeAttribute(m):d.setAttribute(m,x)});let p=!1;const k=()=>{e.classList.toggle("is-flipped",p),e.hasAttribute("aria-pressed")&&e.setAttribute("aria-pressed",String(p)),Vo(l,p),Vo(c,!p),o("flip",{flipped:p})},_=d=>{d!==p&&(p=d,k())},j=bp(),C=r.trigger==="hover"||r.trigger==="both"&&j,b=r.trigger==="click"||r.trigger==="both"&&!j;return C&&(n(e,"pointerenter",d=>{d.pointerType!=="touch"&&_(!0)}),n(e,"pointerleave",d=>{d.pointerType!=="touch"&&(e.contains(document.activeElement)&&r.flipOnFocus||_(!1))})),b&&n(e,"click",d=>{d.target.closest("a[href],button,input,select,textarea")||_(!p)}),n(e,"keydown",d=>{d.key!=="Enter"&&d.key!==" "&&d.key!=="Spacebar"||d.target===e&&(d.preventDefault(),_(!p))}),n(e,"keydown",d=>{d.key==="Escape"&&p&&_(!1)}),r.flipOnFocus&&(n(e,"focusin",()=>_(!0)),n(e,"focusout",d=>{e.contains(d.relatedTarget)||e.matches(":hover")&&C||_(!1)})),k(),t(()=>{e.classList.remove("is-flipped"),Vo(l,!1),Vo(c,!1),delete e.dataset.fxFlipAxis;for(const d of["--fx-flip-duration","--fx-flip-perspective","--fx-flip-deg"])e.style.removeProperty(d)}),{flip:()=>_(!p),show:d=>_(d==="back"),get flipped(){return p}}}});function g5(e,r){for(const[n,t]of Object.entries(r))t==null||t===!1||e.setAttribute(n,t===!0?"":String(t))}const x5=Vr({name:"model-showcase",defaults:{src:null,iosSrc:null,alt:"3D 모델",poster:null,cameraControls:!0,autoRotate:!0,autoRotateDelay:1500,rotationPerSecond:"18deg",disableZoom:!0,disablePan:!0,disableTap:!1,ar:!1,arModes:"webxr scene-viewer quick-look",exposure:1,shadowIntensity:.75,shadowSoftness:1,environmentImage:"neutral",skybox:!1,cameraOrbit:null,minCameraOrbit:null,maxCameraOrbit:null,fieldOfView:null,autoplay:!0,animationName:null,follow:!1,followDecay:80,followYaw:28,followPitch:10,interactionPrompt:"auto",preloadMargin:"300px"},guard:{motion:"ignore",webgl:!0,pointer:"any"},setup({el:e,opts:r,addCleanup:n,setVar:t,emit:a}){var j;if(!r.src){console.warn("[fx:model-showcase] src 옵션(.glb 경로)이 필요합니다.");return}const o=((j=e.ownerDocument)==null?void 0:j.defaultView)??window;let s=typeof r.environmentImage=="string"&&r.environmentImage.trim()||"neutral";/\.exr([?#]|$)/i.test(s)&&(console.warn(`[fx:model-showcase] .exr 환경 이미지는 model-viewer가 지원하지 않습니다: ${s}
.hdr(또는 .jpg)로 다시 받아 주세요. 기본 조명으로 대신합니다.`),s="neutral");const l=r.skybox&&/[./]/.test(s)?s:null;r.skybox&&!l&&console.warn("[fx:model-showcase] skybox는 .hdr/.jpg 환경 이미지 URL이 있어야 켜집니다 — environmentImage가 기본 조명('neutral')이라 이번에는 무시합니다.");const c=e.querySelector(".fx-model__poster"),u=r.poster||(c==null?void 0:c.getAttribute("src"))||null;let h=!1,f=null;n(()=>{h=!0,f==null||f.remove(),f=null,e.classList.remove("fx-model--loading","fx-model--loaded","fx-model--failed"),e.style.removeProperty("--fx-model-progress")});const p=oi(e,{rootMargin:r.preloadMargin,threshold:0,onEnter:()=>{p(),k()}});n(()=>p());async function k(){if(h)return;e.classList.add("fx-model--loading");try{await X4()}catch(x){console.warn("[fx:model-showcase] model-viewer 로드 실패 — 포스터를 유지합니다.",x),e.classList.remove("fx-model--loading"),e.classList.add("fx-model--failed");return}if(h)return;const C=r.autoRotate&&!r.follow&&!po();f=document.createElement("model-viewer"),f.className="fx-model__viewer",g5(f,{src:r.src,"ios-src":r.iosSrc,alt:r.alt,poster:u,"camera-controls":r.cameraControls,"auto-rotate":C,"auto-rotate-delay":r.autoRotateDelay,"rotation-per-second":r.rotationPerSecond,"disable-zoom":r.disableZoom,"disable-pan":r.disablePan,"disable-tap":r.disableTap,ar:r.ar,"ar-modes":r.ar?r.arModes:null,exposure:r.exposure,"shadow-intensity":r.shadowIntensity,"shadow-softness":r.shadowSoftness,"environment-image":s,"skybox-image":l,"camera-orbit":r.cameraOrbit,"min-camera-orbit":r.minCameraOrbit,"max-camera-orbit":r.maxCameraOrbit,"field-of-view":r.fieldOfView,autoplay:r.autoplay,"animation-name":r.animationName,"interaction-prompt":r.interactionPrompt,loading:"eager",reveal:"auto"});const b=x=>{var S;const y=((S=x.detail)==null?void 0:S.totalProgress)??0;t("--fx-model-progress",y),a("progress",{progress:y})},d=()=>{e.classList.remove("fx-model--loading"),e.classList.add("fx-model--loaded"),_(f),a("load")},m=x=>{console.warn(`[fx:model-showcase] 모델 로드 실패: ${r.src}
GitHub Pages라면 base 경로 문제일 가능성이 높습니다. README 8번을 보세요.`,x.detail??x),e.classList.remove("fx-model--loading"),e.classList.add("fx-model--failed"),f==null||f.remove(),f=null,a("error",{src:r.src})};f.addEventListener("progress",b),f.addEventListener("load",d,{once:!0}),f.addEventListener("error",m,{once:!0}),e.appendChild(f),a("mounted")}function _(C){if(!C||!r.follow||po())return;C.setAttribute("interpolation-decay",String(Math.max(20,Number(r.followDecay)||80)));const b=Math.max(0,Number(r.followYaw)||28),d=Math.max(0,Number(r.followPitch)||10);let m=0;const x=(H,A)=>{const B=`${H.toFixed(1)}deg ${A.toFixed(1)}deg 105%`;C.cameraOrbit=B,C.setAttribute("camera-orbit",B)},y=r.autoRotate,S=Math.max(.5,(parseFloat(r.rotationPerSecond)||18)/4),w=Math.max(800,Number(r.autoRotateDelay)||1500);let v=0,g=0;const E=()=>{g&&(o.clearInterval(g),g=0)},N=()=>{!y||g||(g=o.setInterval(()=>{m+=S,x(m,75)},250))};let M=!1;const T=()=>{var A;M=!1;const H=(A=C.getCameraOrbit)==null?void 0:A.call(C);H&&Number.isFinite(H.theta)&&(m=H.theta*180/Math.PI),N()},$=H=>{var A;((A=H.detail)==null?void 0:A.source)==="user-interaction"&&(M=!0,E(),o.clearTimeout(v),v=o.setTimeout(T,w))};C.addEventListener("camera-change",$),n(()=>C.removeEventListener("camera-change",$));let P=0;const J=H=>{if(M)return;const A=H.timeStamp??0;if(A-P<80)return;P=A,E(),o.clearTimeout(v),v=o.setTimeout(N,w);const B=H.clientX/o.innerWidth*2-1,Q=H.clientY/o.innerHeight*2-1;let pe=-B*b;pe+=Math.round((m-pe)/360)*360,m=pe,x(m,75-Q*d)};N(),o.addEventListener("pointermove",J,{passive:!0}),n(()=>{E(),o.clearTimeout(v),o.removeEventListener("pointermove",J),C.removeAttribute("interpolation-decay")})}return{get viewer(){return f},reset:()=>{var C;return(C=f==null?void 0:f.resetTurntableRotation)==null?void 0:C.call(f)},toDataURL:(C="image/webp")=>{var b;return((b=f==null?void 0:f.toDataURL)==null?void 0:b.call(f,C))??null}}}}),w5=Vr({name:"hover-preview",defaults:{width:240,speed:.16,offsetX:24,offsetY:-20,rotate:3,card:".wf-card"},guard:{pointer:"fine",motion:"ignore"},setup({el:e,opts:r,on:n,addCleanup:t}){var b,d;const a=e.ownerDocument,o=[...e.querySelectorAll(r.card)];if(!o.length)return;const s=a.createElement("div");s.className="fx-hover-preview__float",s.style.width=`${r.width}px`,s.setAttribute("aria-hidden","true");const l=a.createElement("img");l.alt="",s.appendChild(l),a.body.appendChild(s),t(()=>s.remove());let c=0,u=0,h=0,f=0,p=0,k=!1;const _=po(),j=()=>{const m=_?1:r.speed;if(c=Fl(c,h,m),u=Fl(u,f,m),s.style.transform=`translate(${(c+r.offsetX).toFixed(1)}px, ${(u+r.offsetY).toFixed(1)}px) rotate(${r.rotate}deg)`,!k&&Math.abs(c-h)<.5&&Math.abs(u-f)<.5){p=0;return}p=a.defaultView.requestAnimationFrame(j)},C=()=>{p||(p=a.defaultView.requestAnimationFrame(j))};t(()=>{p&&a.defaultView.cancelAnimationFrame(p)});for(const m of o){const x=((b=m.querySelector("img"))==null?void 0:b.currentSrc)||((d=m.querySelector("img"))==null?void 0:d.src);x&&(n(m,"pointerenter",y=>{l.src=x,k=!0,c=h=y.clientX,u=f=y.clientY,s.classList.add("is-on"),C()}),n(m,"pointermove",y=>{h=y.clientX,f=y.clientY,C()}),n(m,"pointerleave",()=>{k=!1,s.classList.remove("is-on")}))}}}),$1="!<>-_\\/[]{}—=+*^?#ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",b5=Vr({name:"text-scramble",defaults:{duration:1400,churn:.28,delay:0,repeat:!0},guard:{motion:"skip"},setup({el:e,opts:r,addCleanup:n}){var j;const t=e.ownerDocument.defaultView??window,a=e.ownerDocument.createTreeWalker(e,4),o=[];let s=0;for(let C=a.nextNode();C;C=a.nextNode())C.data.trim()&&(o.push({node:C,original:C.data,offset:s}),s+=C.data.length);if(!s)return;let l=0,c=0,u=!1;const h=()=>o.forEach(({node:C,original:b})=>{C.data=b}),f=()=>{if(u&&!r.repeat)return;u=!0;const C=t.performance.now(),b=d=>{const m=Math.min(1,(d-C)/Math.max(200,r.duration)),x=Math.floor(s*m);for(const{node:y,original:S,offset:w}of o)y.data=[...S].map((v,g)=>w+g<x||/\s/.test(v)?v:Math.random()<r.churn?$1[Math.random()*$1.length|0]:y.data[g]??v).join("");m<1?l=t.requestAnimationFrame(b):(h(),l=0)};l=t.requestAnimationFrame(b)},p=(j=e.closest)==null?void 0:j.call(e,".fx-scroll-reveal"),k=C=>{if(!p||p.classList.contains("is-revealed"))return C();let b=!1;const d=()=>{b=!0,x.disconnect(),t.clearTimeout(y)},m=()=>{b||(d(),C())},x=new t.MutationObserver(()=>{p.classList.contains("is-revealed")&&t.setTimeout(m,150)});x.observe(p,{attributes:!0,attributeFilter:["class"]});const y=t.setTimeout(m,2e3);n(d)},_=oi(e,{threshold:.4,onEnter:()=>{c=t.setTimeout(()=>k(f),r.delay)}});n(()=>{_(),t.clearTimeout(c),l&&t.cancelAnimationFrame(l),h()})}}),v5=Vr({name:"spotlight",defaults:{size:420,strength:.22,color:""},guard:{motion:"ignore",pointer:"fine"},setup({el:e,opts:r,on:n,addCleanup:t,setVar:a}){getComputedStyle(e).position==="static"&&(e.style.position="relative",t(()=>{e.style.removeProperty("position")}));const o=e.ownerDocument.createElement("i");o.className="fx-spotlight__glow fx-layer",o.setAttribute("aria-hidden","true"),e.appendChild(o),t(()=>o.remove()),a("--fx-spot-size",`${r.size}px`),a("--fx-spot-alpha",String(r.strength)),r.color&&a("--fx-spot-color",r.color),n(e,"pointermove",s=>{const l=e.getBoundingClientRect();a("--fx-spot-x",`${((s.clientX-l.left)/l.width*100).toFixed(2)}%`),a("--fx-spot-y",`${((s.clientY-l.top)/l.height*100).toFixed(2)}%`)}),n(e,"pointerenter",()=>e.classList.add("is-spot-on")),n(e,"pointerleave",()=>e.classList.remove("is-spot-on")),t(()=>e.classList.remove("is-spot-on"))}}),y5=Vr({name:"starfield",defaults:{density:1,speed:6,twinkle:.6,size:1.2,color:""},guard:{motion:"ignore",webgl:!1},setup({el:e,opts:r,addCleanup:n}){const t=e.ownerDocument,a=t.defaultView??window;getComputedStyle(e).position==="static"&&(e.style.position="relative",n(()=>{e.style.removeProperty("position")}));const o=t.createElement("canvas");o.className="fx-starfield__cv fx-layer",o.setAttribute("aria-hidden","true"),e.prepend(o),n(()=>o.remove());const s=o.getContext("2d"),c=(()=>{const d=(r.color||"").trim();return d||getComputedStyle(e).getPropertyValue("--fx-star-color").trim()||"#ffffff"})();let u=[],h=0,f=0;const p=()=>{const d=Math.min(a.devicePixelRatio||1,2);h=e.clientWidth,f=e.clientHeight,o.width=Math.max(1,Math.round(h*d)),o.height=Math.max(1,Math.round(f*d)),s.setTransform(d,0,0,d,0,0);const m=Math.round(h*f/9e3*r.density);u=Array.from({length:m},()=>({x:Math.random()*h,y:Math.random()*f,r:(.4+Math.random()*1.1)*r.size,a:.35+Math.random()*.65,p:Math.random()*Math.PI*2,v:.5+Math.random()}))},k=d=>{s.clearRect(0,0,h,f),s.fillStyle=c;for(const m of u){const x=1-r.twinkle+r.twinkle*(.5+.5*Math.sin(m.p+d*2));s.globalAlpha=m.a*x,s.beginPath(),s.arc(m.x,m.y,m.r,0,Math.PI*2),s.fill()}s.globalAlpha=1},_=new a.ResizeObserver(()=>{p(),k(0)});if(_.observe(e),n(()=>_.disconnect()),p(),k(0),po())return;let j=0,C=null;const b=d=>{C===null&&(C=d);const m=(d-C)/1e3,x=r.speed/60;for(const y of u)y.x-=x*y.v,y.x<-2&&(y.x=h+2,y.y=Math.random()*f);k(m),j=a.requestAnimationFrame(b)};j=a.requestAnimationFrame(b),n(()=>a.cancelAnimationFrame(j))}}),R1={reveal:e5,silk:o5,dots:l5,tilt:c5,magnetic:f5,parallax:u5,flip:h5,preview:w5,scramble:b5,spotlight:v5,starfield:y5},_5={model:{mount:x5,cls:"fx-model"}};function k5(e,r,n,t=!0){const a=L.useRef(null),o=e+JSON.stringify(r??{})+((n==null?void 0:n.id)??"")+t;return L.useEffect(()=>{const s=a.current,l=_5[e];if(!s||!l||!t)return;s.classList.contains(l.cls)||s.classList.add(l.cls);const c={...r};if(e==="model"&&!c.src)return;let u=null;try{u=l.mount(s,c)}catch{}return()=>{try{u==null||u.destroy()}catch{}}},[o]),a}const j5=new Set(["silk","dots","starfield","spotlight"]);function S5(e,r,n=!0,t=""){const a=L.useRef(null),o=L.useRef(new Map),s=JSON.stringify(e??[])+((r==null?void 0:r.id)??"")+n+t;return L.useEffect(()=>{const l=a.current,c=o.current,u=f=>{var k;const p=c.get(f);if(p){try{(k=p.handle)==null||k.destroy()}catch{}p.classes.forEach(_=>l==null?void 0:l.classList.remove(_)),c.delete(f)}};if(!l||!n){[...c.keys()].forEach(u);return}const h=new Map;for(const f of e??[]){const p=Et[f.name];if(!p||!R1[f.name])continue;const k=!j5.has(f.name);h.set(f.name,{fx:f,meta:p,key:JSON.stringify(f.options??{})+((r==null?void 0:r.id)??"")+(k?t:"")})}for(const f of[...c.keys()]){const p=h.get(f);(!p||p.key!==c.get(f).key)&&u(f)}for(const[f,p]of h){if(c.has(f))continue;const{fx:k,meta:_}=p,j=[];_.needsClass&&(l.classList.add(_.needsClass),j.push(_.needsClass));const C={...k.options};if(_.themeColors==="silk"&&(r!=null&&r.silk)&&(C.colors=r.silk),k.name==="dots"&&(r!=null&&r.dot)&&(C.color=r.dot),k.name==="silk"&&(r!=null&&r.scrim)){const m=r.scrim==="light"?"fx-silk--scrim-light":"fx-silk--scrim";l.classList.add(m),j.push(m)}_.layerTargets&&[...l.children].filter(x=>!x.hasAttribute("data-fx-depth")).forEach((x,y)=>x.setAttribute("data-fx-depth",String(.2+y*.25)));let b=l;if(_.target){const m=l.querySelectorAll(_.target);if(!m.length){j.forEach(x=>l.classList.remove(x));continue}b=[...m]}let d=null;try{d=R1[k.name](b,C)}catch{}c.set(f,{handle:d,key:p.key,classes:j})}},[s]),L.useEffect(()=>{const l=a.current;l&&o.current.forEach(c=>c.classes.forEach(u=>l.classList.add(u)))}),L.useEffect(()=>{const l=o.current;return()=>{l.forEach(c=>{var u;try{(u=c.handle)==null||u.destroy()}catch{}}),l.clear()}},[]),a}const Sp={kind:"none",image:null,video:null,poster:null,mode:"fixed",dim:.35,blur:0,gray:0,gradient:!1,scrollFx:"없음",grain:0},Cp=[{id:"none",label:"없음"},{id:"zoom",label:"스크롤하면 커짐"},{id:"drift",label:"스크롤보다 느리게 밀림 (시차)"},{id:"dim",label:"내려갈수록 어두워짐"},{id:"blur",label:"내려갈수록 흐려짐"}],C5=e=>{var r;return((r=Cp.find(n=>n.label===e))==null?void 0:r.id)??"none"},Ep=[{id:"fixed",label:"고정",hint:"스크롤해도 그대로"},{id:"scroll",label:"함께 스크롤",hint:"내용과 같이 올라감"},{id:"zoom",label:"느린 확대",hint:"30초에 걸쳐 조금씩"},{id:"tile",label:"무늬 반복",hint:"작은 그림을 타일처럼"}],E5=[{key:"kind",label:"배경",type:"select",options:["none","image","video"]},{key:"image",label:"배경 이미지",type:"image"},{key:"video",label:"배경 영상 (mp4 · webm)",type:"file",accept:"video/*",maxMB:24},{key:"poster",label:"영상 첫 화면 그림",type:"image"},{key:"mode",label:"움직임",type:"select",options:Ep.map(e=>e.label)},{key:"dim",label:"어둡게",type:"range",min:0,max:.85,step:.05},{key:"blur",label:"흐림",type:"range",min:0,max:24,step:1,unit:"px"},{key:"gray",label:"흑백",type:"range",min:0,max:1,step:.05},{key:"gradient",label:"아래로 어둡게",type:"boolean"},{key:"scrollFx",label:"스크롤 반응",type:"select",options:Cp.map(e=>e.label)},{key:"grain",label:"그레인 (필름 질감)",type:"range",min:0,max:.3,step:.02}],Np=e=>{var r;return((r=Ep.find(n=>n.label===e))==null?void 0:r.id)??e??"fixed"};function Ds(e){var r,n;return!e||e.kind==="none"?!1:e.kind==="video"?!!((r=e.video)!=null&&r.id):!!((n=e.image)!=null&&n.id)}function Ol(e){const r=Np(e==null?void 0:e.mode),n=C5(e==null?void 0:e.scrollFx);return["wf-bg",`wf-bg--${r}`,e!=null&&e.gradient?"has-gradient":"",n!=="none"?`wf-bg--sfx-${n}`:""].filter(Boolean).join(" ")}function zp(e){const r=[];e!=null&&e.blur&&r.push(`blur(${e.blur}px)`),e!=null&&e.gray&&r.push(`grayscale(${e.gray})`);const n={};return r.length&&(n.filter=r.join(" ")),e!=null&&e.blur&&(n.transform=`scale(${(1+Math.min(e.blur,24)/120).toFixed(3)})`),n}const Mp=e=>e!=null&&e.dim?{backgroundColor:`rgba(0,0,0,${e.dim})`}:{},G='<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>',Y='</title><path d="',K='"/></svg>',N5={title:"Anaconda",slug:"anaconda",get svg(){return G+"Anaconda"+Y+this.path+K},path:"M12.045.033a12.181 12.182 0 00-1.361.078 17.512 17.513 0 011.813 1.433l.48.438-.465.45a15.047 15.048 0 00-1.126 1.205l-.178.215a8.527 8.527 0 01.86-.05 8.154 8.155 0 11-4.286 15.149 15.764 15.765 0 01-1.841.106h-.86a21.847 21.848 0 00.264 2.866 11.966 11.967 0 106.7-21.89zM8.17.678a12.181 12.182 0 00-2.624 1.275 15.506 15.507 0 011.813.43A18.551 18.552 0 018.17.678zM9.423.75a16.237 16.238 0 00-.995 1.998 16.15 16.152 0 011.605.66 6.98 6.98 0 01.43-.509c.234-.286.472-.559.716-.817A15.047 15.048 0 009.423.75zM4.68 2.949a14.969 14.97 0 000 2.336c.587-.065 1.196-.1 1.812-.107a16.617 16.617 0 01.48-1.748 16.48 16.481 0 00-2.292-.481zM3.62 3.5A11.938 11.938 0 001.762 5.88a17.004 17.004 0 011.877-.444A17.39 17.391 0 013.62 3.5zm4.406.287c-.143.437-.265.888-.38 1.347a8.255 8.255 0 011.67-.803c-.423-.2-.845-.38-1.29-.544zM6.3 6.216a14.051 14.052 0 00-1.555.108c.064.523.157 1.038.272 1.554a8.39 8.391 0 011.283-1.662zm-2.55.137a15.313 15.313 0 00-2.602.716h-.078v.079a17.104 17.105 0 001.267 2.544l.043.071.072-.049a16.309 16.31 0 011.734-1.083l.057-.035V8.54a16.867 16.868 0 01-.408-2.094v-.092zM.644 8.095l-.063.2A11.844 11.845 0 000 11.655v.209l.143-.152a17.706 17.707 0 011.584-1.447l.057-.043-.043-.064a16.18 16.18 0 01-1.025-1.87zm3.77 1.253l-.18.1c-.465.273-.93.573-1.375.889l-.065.05.05.064c.309.437.645.867.996 1.276l.137.165v-.208a8.176 8.176 0 01.364-2.15zM2.2 10.853l-.072.05a16.574 16.574 0 00-1.813 1.734l-.058.058.066.057a15.449 15.45 0 001.991 1.483l.072.05.043-.08a16.738 16.74 0 011.053-1.64v-.05l-.043-.05a16.99 16.99 0 01-1.19-1.54zm1.855 2.071l-.121.172a15.363 15.363 0 00-.917 1.433l-.043.072.071.043a16.61 16.61 0 001.562.766l.193.086-.086-.193a8.04 8.04 0 01-.66-2.172zm-3.976.48v.2a11.758 11.759 0 00.946 3.326l.078.186.072-.194a16.215 16.216 0 01.845-2l.057-.063-.064-.043a17.197 17.198 0 01-1.776-1.284zm2.543 1.805l-.035.08a15.764 15.765 0 00-.983 2.479v.08h.086a16.15 16.152 0 002.688.5l.072.007v-.086a17.562 17.563 0 01.164-2.056v-.065H4.55a16.266 16.266 0 01-1.849-.896zm2.544 1.169v.114a17.254 17.255 0 00-.151 1.828v.078h.931c.287 0 .624.014.946 0h.209l-.166-.129a8.011 8.011 0 01-1.64-1.834zm-3.29 2.1l.115.172a11.988 11.988 0 002.502 2.737l.157.129v-.201a22.578 22.58 0 01-.2-2.336v-.071h-.072a16.23 16.23 0 01-2.3-.387z",source:"https://www.anaconda.com",hex:"44A833"},z5={title:"Angular",slug:"angular",get svg(){return G+"Angular"+Y+this.path+K},path:"M16.712 17.711H7.288l-1.204 2.916L12 24l5.916-3.373-1.204-2.916ZM14.692 0l7.832 16.855.814-12.856L14.692 0ZM9.308 0 .662 3.999l.814 12.856L9.308 0Zm-.405 13.93h6.198L12 6.396 8.903 13.93Z",source:"https://angular.dev/press-kit",hex:"0F0F11",guidelines:"https://angular.dev/press-kit",license:{type:"CC-BY-4.0",url:"https://spdx.org/licenses/CC-BY-4.0"}},M5={title:"Apache",slug:"apache",get svg(){return G+"Apache"+Y+this.path+K},path:"M17.805 2.197v.066h.156v.44h.072v-.44h.156v-.066zm.9 0l-.175.353-.172-.353h-.087v.506h.067V2.3l.172.35h.045l.172-.35v.404h.066v-.506zm-4.257 1c-.204.31-.424.66-.66 1.06l-.04.062a44.457 44.457 0 00-1.265 2.29c-.187.36-.38.742-.577 1.146l2.267-.25c.66-.302.955-.578 1.242-.976a15.5 15.5 0 00.23-.342c.23-.363.46-.763.663-1.16.197-.386.37-.767.505-1.11.083-.22.15-.422.198-.6.042-.158.074-.307.1-.45-.884.15-1.965.295-2.668.33zM11.894 7.78l-.077.16c-.078.16-.157.32-.236.488-.086.18-.172.364-.26.552l-.132.287a75.265 75.265 0 00-1.427 3.3c-.163.397-.327.807-.493 1.23-.15.38-.297.765-.45 1.164l-.02.06c-.15.396-.3.802-.453 1.22l-.01.027.72-.08a.213.213 0 01-.042-.006c.863-.106 2.01-.75 2.75-1.547.342-.367.652-.8.94-1.306.213-.377.413-.795.604-1.258.168-.405.328-.843.48-1.318-.196.105-.423.18-.673.235a2.184 2.184 0 01-.273.046c.806-.31 1.314-.905 1.683-1.64a2.816 2.816 0 01-.968.428c-.06.012-.116.022-.174.03l-.043.006h.002c.278-.118.514-.248.718-.403a2.571 2.571 0 00.637-.698l.063-.104.077-.154a8.107 8.107 0 00.367-.85l.03-.088a3.04 3.04 0 00.123-.463.733.733 0 01-.094.065c-.243.145-.66.277-.996.34l.663-.074-.664.073h-.017l-.1.017c.006-.003.01-.006.017-.008l-2.265.25-.013.022zM8.27 16.45c-.117.323-.236.654-.355.992l-.005.015c-.016.046-.032.094-.05.142-.08.227-.15.432-.31.9.264.12.475.435.675.793a1.44 1.44 0 00-.466-.99c1.293.06 2.41-.27 2.99-1.217.05-.084.096-.173.14-.268-.26.333-.59.474-1.2.44 0 0-.004 0-.005.002l.004-.002c.9-.404 1.354-.79 1.754-1.433.094-.153.186-.32.28-.503-.788.81-1.702 1.04-2.664.865l-.72.078a6.43 6.43 0 00-.067.183zM15.42.112c-.376.222-1 .85-1.748 1.763l.686 1.294c.48-.687.97-1.307 1.462-1.836l.058-.062c-.02.02-.04.04-.057.062-.16.176-.644.74-1.375 1.863.703-.035 1.784-.18 2.666-.33.262-1.47-.258-2.142-.258-2.142s-.66-1.07-1.436-.61zm-3.084 6.402a40.253 40.253 0 011.306-2.26l.04-.064c.224-.352.45-.693.677-1.02l-.685-1.293-.157.192c-.197.245-.403.51-.613.79a39.853 39.853 0 00-2.016 2.97l-.022.038.893 1.763c.19-.378.38-.752.575-1.118zm-3.73 8.32c.158-.406.319-.81.483-1.225.156-.394.32-.79.484-1.19a91.133 91.133 0 011.6-3.604l.205-.424c.12-.243.237-.485.36-.724a.125.125 0 01.02-.04l-.895-1.763-.044.07c-.207.34-.414.687-.617 1.042a38.056 38.056 0 00-1.092 2.04l-.094.193a24.573 24.573 0 00-1.258 3.087 18.492 18.492 0 00-.52 1.997l.896 1.77c.117-.317.24-.638.364-.963zm-1.376-.476a13.38 13.38 0 00-.234 1.692c0 .02-.004.04-.005.06-.28-.45-1.03-.888-1.026-.884.537.778.944 1.55 1.005 2.31-.29.058-.684-.027-1.14-.195.475.436.83.556.97.588-.434.03-.89.328-1.346.67.668-.27 1.21-.38 1.596-.29-.61 1.74-1.23 3.655-1.843 5.69a.538.538 0 00.364-.354c.11-.368.84-2.786 1.978-5.965l.097-.27.028-.078c.12-.332.246-.672.374-1.02l.09-.237v-.004L7.24 14.3c-.003.02-.01.04-.012.06z",source:"https://www.apache.org/foundation/press/kit",hex:"D22128",guidelines:"https://www.apache.org/foundation/marks",license:{type:"Apache-2.0",url:"https://spdx.org/licenses/Apache-2.0"}},L5={title:"Apache Tomcat",slug:"apachetomcat",get svg(){return G+"Apache Tomcat"+Y+this.path+K},path:"M12.66 3.494c-.377.637-.544 2.114-.502 3.162l-.005.004c.036.946.165 1.816.372 2.615-3.096.767-6.466 2.795-8.352 4.754-.882-1.19-1.232-2.168-1.336-2.908-.131-.936.092-1.794.646-2.482.867-1.077 2.098-1.153 3.365-.94-.025.2.001.391.081.51.335.494 2.135.668 3.21.189-.793-1.112-2.4-1.654-2.844-1.437a.762.762 0 00-.335.359c-.438-.078-.873-.137-1.19-.134-1.117.008-1.971.398-2.61 1.193-.628.78-.882 1.747-.734 2.8.14.996.633 2.055 1.46 3.154-.138.147-.27.293-.398.436C1.473 17.023 0 19.44 0 19.842v.207h2.658l-.046-.246c-.15-.793.15-1.785.763-2.526.386-.465 1.024-.996 2.027-1.241.891.87 2.027 1.794 3.291 2.685h1.976v-.208a.678.678 0 00-.327-.577c-.312-.204-.794-.232-1.237-.081-.421-.47-.658-1.098-.709-1.877 4.287.38 8.388 2.11 13.015 4.528h2.546l.033-.167c.048-.237-.082-.556-.346-.851-.456-.51-1.349-.752-2.095-.734-.514-.612-3.342-3.591-3.507-3.765a9.626 9.626 0 002.673-2.847h1.388v-.298H20.89a9.81 9.81 0 00.223-.419h.989v-.299h-.845c.628-1.359.975-2.918.942-4.625l.003.002c-.002-.468-.147-2.445-.415-2.989-.726.276-2.047 1.17-2.346 2.084a14.557 14.557 0 00-4.463.056c-.237-.984-1.423-1.736-2.318-2.16zm.164.577c.211 1.148.593 1.869 1.42 2.223.734-.21 1.58-.34 2.448-.388l.717 1.571.46-1.585c.876.029 1.736.142 2.485.349.762-.554 1.057-1.4 1.218-2.138.202.86.178 2.717.18 2.717a9.883 9.883 0 01-.158 1.988l-.824.35.726.11a9.19 9.19 0 01-.198.714l-.703.205.56.201c-.094.253-.2.5-.314.738h-1.16v.299h1.008a8.788 8.788 0 01-.238.419h-.77v.298h.583a8.634 8.634 0 01-2.921 2.748c-1.334-.664-2.341-1.634-3.079-2.748h.446v-.298h-.636a9.195 9.195 0 01-.236-.419h.872v-.299h-1.026a10.12 10.12 0 01-.46-1.094l.522-.147-.659-.263c-.066-.215-.127-.43-.18-.646l1.015-.069-1.16-.615c-.282-1.563-.225-3.08.062-4.221zm2.946 2.97c-.89 0-1.24.909-1.255.948l.252.094c.012-.033.302-.773 1.003-.773.154 0 .262.062.34.195.182.314.152.933 0 1.58h-1.227v.269h1.159a5.679 5.679 0 01-.496 1.225l-.064.112 1.537.967-.865.57.148.224.967-.637 1.043.681.143-.228-.967-.598 1.518-.986v-.001c-.318-.47-.42-.872-.286-1.329h.108l1.167-.001.002-.268h-1.175c.216-.51.52-.968 1.602-.968v-.27c-.999 0-1.596.397-1.883 1.238h-2.154c.15-.672.177-1.333-.046-1.715a.63.63 0 00-.57-.33zm.55 2.313h2.126c-.095.304-.057.763.178 1.157h-2.737c.166-.334.32-.74.433-1.157zm-3.683.321c.155.515.344.997.562 1.451h-.91v.299h1.06c.075.142.153.282.233.419H12.29v.298h1.478c.91 1.416 2.14 2.499 3.534 3.318a9.45 9.45 0 00.456-.28l.362.39-.61.938 1.04-.474.606.652-1.019.776 1.403-.363 1.905 2.05.16-.014c1.007-.086 1.58.46 1.73.63.112.124.179.237.215.326h-2.036c-4.67-2.437-8.771-4.155-13.127-4.53.01-.607.117-1.293.324-2.058l-.4-.108c-.213.786-.325 1.497-.338 2.134-.454-.03-.91-.046-1.371-.046-.391 0-.747.036-1.072.1a14.771 14.771 0 01-1.09-1.21c.546-.57 1.19-1.123 1.893-1.643l.967.668-.316-1.128c.297-.2.603-.394.914-.58l1.434.73-.673-1.162c.198-.106.398-.21.598-.31l2.007 1.346-.66-1.952a15.32 15.32 0 012.034-.667zm3.492 1.105h2.22l-1.084.715zM4.153 14.675c.273.337.577.678.91 1.021a4.104 4.104 0 00-2.007 1.316c-.629.76-.962 1.762-.886 2.622H.495c.337-.728 1.677-2.833 3.658-4.959z",source:"https://apache.org/logos",hex:"F8DC75",guidelines:"https://www.apache.org/foundation/marks",license:{type:"Apache-2.0",url:"https://spdx.org/licenses/Apache-2.0"}},$5={title:"Babel",slug:"babel",get svg(){return G+"Babel"+Y+this.path+K},path:"M15.76 0c-1.603.147-3.719.713-6.317 1.719a22.366 22.366 0 01-2.44 1.539l.01.158c.064 0 .136-.043.24-.096.106-.01.169.032.169.137l.168-.094.084-.011.01.074c.01.073-.566.523-1.707 1.33l.093.146-.084.012-.177-.064c0 .052-.073.085-.24.095l.01.084.189.21a.673.673 0 01-.252-.053c-.367.031-.734.303-1.09.806l.094.147c.314-.283.492-.43.544-.43l.022.23c-.052 0-.136.042-.24.094l.199.295A5.86 5.86 0 016.29 5.291c.23.063.346.125.346.209l.168-.01c1.225-.911 2.44-1.562 3.644-1.97l.012.158c-.22.335-.377.501-.461.511.01.116.052.21.115.305.021.21-.524 1.583-1.635 4.139-2.535 5.93-4.651 10.307-6.359 13.156 0 .052.041.136.094.23.419-.104.691-.197.806-.302l.096-.012.01.158.158-.011.166-.094c0 .052.063.073.168.062l.012.159c.01.157-.075.397-.274.722-.178.2-.355.607-.554 1.225l.01.074.158-.01c.68-.764 1.204-1.52 1.56-2.254 2.001-.586 3.52-1.162 4.578-1.728 1.058-.094 1.876-.365 2.42-.826l-.011-.084-.399.115-.094.01-.01-.084c.776-.116 1.32-.293 1.614-.524 1.519-1.173 2.66-2 3.435-2.492 2.4-1.76 3.531-3.457 3.395-5.07-.01-.168-.545-.828-1.582-1.98-.021-.22.345-.535 1.078-.954l2.086-1.834c.46-.597.744-1.56.838-2.89l-.031-.315c-.084-.932-.756-1.687-2.034-2.264C19.06.303 17.708.031 15.76 0zm2.525 1.037c1.55.063 2.347.335 2.389.817l-.063.158-2.326-.975zm-1.482 1.317c1.063-.016 1.617.267 1.672.863l.156-.012-.031-.398.168-.01c.408.22.627.492.648.816.021.22-.094.494-.355.819-.105.01-.168-.064-.178-.221l-.168.012-.041.47c-.702 1.048-1.205 1.582-1.52 1.614-.283.387-.462.587-.535.597-.22.262-.816.712-1.8 1.34-.325.032-1.531.493-3.616 1.404a.595.595 0 00-.334-.052l-.012-.147c-.02-.304.107-.681.41-1.142.158-.86.335-1.352.534-1.467l1.738-3.906c-.02-.241.347-.43 1.111-.555l.252-.022.02.221a50.387 50.387 0 011.394-.2c.173-.014.335-.022.487-.024zm3.619.39h.027c.139.012.288.263.446.744l.01.147c-.085.01-.24-.242-.471-.744l-.012-.147zm-9.836 2.483h.072l.022.23c-.074.01-.177.116-.303.336l-.012-.156c.147-.178.22-.316.22-.41zM5.6 5.354l.01.072c-.053 0-.136.043-.24.095l-.085.01-.01-.146.325-.031zM9.885 6.86l.031.315-.084.01-.031-.313.084-.012zm-.2.567c-.02.262-.084.397-.22.408l-.084.01c.094-.178.147-.303.137-.397l.168-.021zm-.345.816l.01.074-.147.25-.158.012-.01-.074c.157-.01.231-.093.22-.25l.085-.012zm-.358.735l-.04.386-.085.01-.03-.387.155-.01zm8.497.28l.345.212c.01.104-.042.167-.146.177-.147-.094-.262-.136-.346-.136l-.021-.23.168-.022zm-6.653.891l.012.147-.326.033-.01-.148.324-.032zm5.363.545c.23.105.347.21.358.293l.01.075c-.22.02-.42-.095-.608-.346l.24-.022zm2.6.252c.178.074.261.148.272.221l.052.617c-.073.168-.146.252-.23.252l-.094-1.09zm-4.195.065c.84-.014 1.482.184 1.922.605l.03.315c-.376 1.09-.795 1.719-1.245 1.918l-2.096 1.666c-1.56 1.026-2.4 1.538-2.525 1.548-2.483 1.373-4.032 2.075-4.63 2.127l-.095.01c.084-.293 1.185-2.555 3.322-6.808.943-.084 2.43-.525 4.452-1.32l.492-.042c.128-.01.253-.017.373-.02zm-3.055.49l.01.074-.334.031-.012-.074.336-.031zm-5.226 5.07c-.105.535-.221.808-.336.819l-.01-.075c-.021-.272.094-.513.346-.744zm7.101.336l.01.147c.01.063-.23.261-.701.607-1.394.681-2.21 1.152-2.452 1.393-1.508.523-2.252.849-2.242.974-1.34.535-2.22.923-2.638 1.164-.095.01-.241-.031-.43-.115-.021-.272.093-.494.365-.672.23-.02.463.011.672.106.251-.126.68-.274 1.299-.42l-.012-.156-.492.04c.063-.083.535-.303 1.436-.67l.251-.02.01.073c-.419.032-.66.167-.713.387.01.094.064.147.168.137.304-.21.461-.324.461-.356.608-.115 2.274-.995 5.008-2.619zm-7.584.723l.01.072c.01.105-.042.17-.147.18l-.01-.074c-.01-.095.042-.157.147-.178zm3.77.937c.089-.002.139.049.148.131-.199.021-.566.178-1.121.492l-.084.01-.01-.156a1.586 1.586 0 001.026-.47c.014-.003.028-.006.04-.007zm-3.664 1.243l.01.082c-.064 0-.138.043-.243.095l-.156.01c-.01-.073.032-.136.137-.168l.252-.02zm-1.918.953l.177.072c-.063.471-.198.713-.44.734a1.076 1.076 0 00-.513-.105l-.021-.23c-.01-.095.043-.147.158-.178.105-.01.167.061.178.218.282-.345.44-.511.46-.511Z",source:"https://github.com/babel/website/blob/93330158b6ecca1ab88d3be8dbf661f5c2da6c76/website/static/img/babel-black.svg",hex:"F9DC3E"},R5={title:"Blender",slug:"blender",get svg(){return G+"Blender"+Y+this.path+K},path:"M12.51 13.214c.046-.8.438-1.506 1.03-2.006a3.424 3.424 0 0 1 2.212-.79c.85 0 1.631.3 2.211.79.592.5.983 1.206 1.028 2.005.045.823-.285 1.586-.865 2.153a3.389 3.389 0 0 1-2.374.938 3.393 3.393 0 0 1-2.376-.938c-.58-.567-.91-1.33-.865-2.152M7.35 14.831c.006.314.106.922.256 1.398a7.372 7.372 0 0 0 1.593 2.757 8.227 8.227 0 0 0 2.787 2.001 8.947 8.947 0 0 0 3.66.76 8.964 8.964 0 0 0 3.657-.772 8.285 8.285 0 0 0 2.785-2.01 7.428 7.428 0 0 0 1.592-2.762 6.964 6.964 0 0 0 .25-3.074 7.123 7.123 0 0 0-1.016-2.779 7.764 7.764 0 0 0-1.852-2.043h.002L13.566 2.55l-.02-.015c-.492-.378-1.319-.376-1.86.002-.547.382-.609 1.015-.123 1.415l-.001.001 3.126 2.543-9.53.01h-.013c-.788.001-1.545.518-1.695 1.172-.154.665.38 1.217 1.2 1.22V8.9l4.83-.01-8.62 6.617-.034.025c-.813.622-1.075 1.658-.563 2.313.52.667 1.625.668 2.447.004L7.414 14s-.069.52-.063.831zm12.09 1.741c-.97.988-2.326 1.548-3.795 1.55-1.47.004-2.827-.552-3.797-1.538a4.51 4.51 0 0 1-1.036-1.622 4.282 4.282 0 0 1 .282-3.519 4.702 4.702 0 0 1 1.153-1.371c.942-.768 2.141-1.183 3.396-1.185 1.256-.002 2.455.41 3.398 1.175.48.391.87.854 1.152 1.367a4.28 4.28 0 0 1 .522 1.706 4.236 4.236 0 0 1-.239 1.811 4.54 4.54 0 0 1-1.035 1.626",source:"https://www.blender.org/about/logo",hex:"E87D0D",guidelines:"https://www.blender.org/about/logo"},T5={title:"Bootstrap",slug:"bootstrap",get svg(){return G+"Bootstrap"+Y+this.path+K},path:"M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z",source:"https://getbootstrap.com/docs/5.3/about/brand",hex:"7952B3",guidelines:"https://getbootstrap.com/docs/5.3/about/brand",license:{type:"MIT",url:"https://spdx.org/licenses/MIT"}},A5={title:"C",slug:"c",get svg(){return G+"C"+Y+this.path+K},path:"M16.5921 9.1962s-.354-3.298-3.627-3.39c-3.2741-.09-4.9552 2.474-4.9552 6.14 0 3.6651 1.858 6.5972 5.0451 6.5972 3.184 0 3.5381-3.665 3.5381-3.665l6.1041.365s.36 3.31-2.196 5.836c-2.552 2.5241-5.6901 2.9371-7.8762 2.9201-2.19-.017-5.2261.034-8.1602-2.97-2.938-3.0101-3.436-5.9302-3.436-8.8002 0-2.8701.556-6.6702 4.047-9.5502C7.444.72 9.849 0 12.254 0c10.0422 0 10.7172 9.2602 10.7172 9.2602z",source:"https://commons.wikimedia.org/wiki/File:The_C_Programming_Language_logo.svg",hex:"A8B9CC"},T1={title:"C++",slug:"cplusplus",get svg(){return G+"C++"+Y+this.path+K},path:"M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z",source:"https://github.com/isocpp/logos/tree/64ef037049f87ac74875dbe72695e59118b52186",hex:"00599C"},D5={title:"Confluence",slug:"confluence",get svg(){return G+"Confluence"+Y+this.path+K},path:"M.87 18.257c-.248.382-.53.875-.763 1.245a.764.764 0 0 0 .255 1.04l4.965 3.054a.764.764 0 0 0 1.058-.26c.199-.332.454-.763.733-1.221 1.967-3.247 3.945-2.853 7.508-1.146l4.957 2.337a.764.764 0 0 0 1.028-.382l2.364-5.346a.764.764 0 0 0-.382-1 599.851 599.851 0 0 1-4.965-2.361C10.911 10.97 5.224 11.185.87 18.257zM23.131 5.743c.249-.405.531-.875.764-1.25a.764.764 0 0 0-.256-1.034L18.675.404a.764.764 0 0 0-1.058.26c-.195.335-.451.763-.734 1.225-1.966 3.246-3.945 2.85-7.508 1.146L4.437.694a.764.764 0 0 0-1.027.382L1.046 6.422a.764.764 0 0 0 .382 1c1.039.49 3.105 1.467 4.965 2.361 6.698 3.246 12.392 3.029 16.738-4.04z",source:"https://www.atlassian.com/company/news/press-kit",hex:"172B4D"},A1={title:"CSS",slug:"css",get svg(){return G+"CSS"+Y+this.path+K},path:"M0 0v20.16A3.84 3.84 0 0 0 3.84 24h16.32A3.84 3.84 0 0 0 24 20.16V3.84A3.84 3.84 0 0 0 20.16 0Zm14.256 13.08c1.56 0 2.28 1.08 2.304 2.64h-1.608c.024-.288-.048-.6-.144-.84-.096-.192-.288-.264-.552-.264-.456 0-.696.264-.696.84-.024.576.288.888.768 1.08.72.288 1.608.744 1.92 1.296q.432.648.432 1.656c0 1.608-.912 2.592-2.496 2.592-1.656 0-2.4-1.032-2.424-2.688h1.68c0 .792.264 1.176.792 1.176.264 0 .456-.072.552-.24.192-.312.24-1.176-.048-1.512-.312-.408-.912-.6-1.32-.816q-.828-.396-1.224-.936c-.24-.36-.36-.888-.36-1.536 0-1.44.936-2.472 2.424-2.448m5.4 0c1.584 0 2.304 1.08 2.328 2.64h-1.608c0-.288-.048-.6-.168-.84-.096-.192-.264-.264-.528-.264-.48 0-.72.264-.72.84s.288.888.792 1.08c.696.288 1.608.744 1.92 1.296.264.432.408.984.408 1.656.024 1.608-.888 2.592-2.472 2.592-1.68 0-2.424-1.056-2.448-2.688h1.68c0 .744.264 1.176.792 1.176.264 0 .456-.072.552-.24.216-.312.264-1.176-.048-1.512-.288-.408-.888-.6-1.32-.816-.552-.264-.96-.576-1.2-.936s-.36-.888-.36-1.536c-.024-1.44.912-2.472 2.4-2.448m-11.031.018c.711-.006 1.419.198 1.839.63.432.432.672 1.128.648 1.992H9.336c.024-.456-.096-.792-.432-.96-.312-.144-.768-.048-.888.24-.12.264-.192.576-.168.864v3.504c0 .744.264 1.128.768 1.128a.65.65 0 0 0 .552-.264c.168-.24.192-.552.168-.84h1.776c.096 1.632-.984 2.712-2.568 2.688-1.536 0-2.496-.864-2.472-2.472v-4.032c0-.816.24-1.44.696-1.848.432-.408 1.146-.624 1.857-.63",source:"https://github.com/CSS-Next/logo.css/blob/bacc20878227204b283c68a6b935f8279e06b0cd/css.svg",hex:"663399",guidelines:"https://github.com/CSS-Next/logo.css"},P5={title:"Cypress",slug:"cypress",get svg(){return G+"Cypress"+Y+this.path+K},path:"M11.998.0195c-.8642 0-1.6816.1101-2.1445.1934v.002C4.1731 1.2283 0 6.1368 0 12.0018c0 1.1265.1573 2.2328.4648 3.3028.0387.1453.0915.2993.1368.4473 1.607 4.865 6.2245 8.226 11.3925 8.2285.0651 0 .2518-.0003.502-.0118.8564-.0353 1.6228-.5734 1.9512-1.369l.4736-1.1544L20.4258 8.043H18.621l-2.3164 5.871-2.334-5.871h-1.9082l3.2734 8.0117c-.8115 1.9702-1.6252 3.9395-2.4355 5.9101-.0808.1945-.2655.3284-.4727.336-.144.005-.285.0098-.4316.0098-4.5848 0-8.6672-3.0695-9.9277-7.4649a10.3058 10.3058 0 0 1-.3985-2.8437c0-5.0887 3.6521-9.3404 8.6035-10.164.2214-.037.8885-.1446 1.7246-.1446 4.4166 0 8.269 2.732 9.7305 6.8476.0558.144.0977.293.1465.4395.299.9746.4531 1.9887.4531 3.0215 0 4.5696-2.9413 8.5326-7.3164 9.8613l.4863 1.5996c5.085-1.546 8.4995-6.1518 8.502-11.459 0-1.5491-.2983-2.8706-.6504-3.8926-.0432-.1212-.0873-.2422-.1309-.3633h-.002C21.4577 3.0954 17.0444.0195 11.998.0195ZM8.4336 7.8906c-1.1999 0-2.1747.3852-2.9805 1.1758-.8007.7856-1.205 1.7736-1.205 2.9356 0 1.1544.4068 2.1368 1.205 2.9199.8058.7906 1.7806 1.1738 2.9805 1.1738 1.705 0 3.1556-.955 3.7871-2.4883l.0332-.082-1.6289-.5547c-.168.4563-.7552 1.4883-2.1914 1.4883-.6745 0-1.2437-.2344-1.6934-.6992-.4572-.4699-.6875-1.0632-.6875-1.7578 0-.6998.2253-1.2809.6875-1.7735.4522-.4648 1.019-.7012 1.6934-.7012 1.438 0 2.0238 1.0815 2.1934 1.4883l1.627-.5527-.0333-.084c-.629-1.5358-2.082-2.4883-3.7871-2.4883Z",source:"https://www.cypress.io/press-kit",hex:"69D3A7"},F5={title:"Dart",slug:"dart",get svg(){return G+"Dart"+Y+this.path+K},path:"M4.105 4.105S9.158 1.58 11.684.316a3.079 3.079 0 0 1 1.481-.315c.766.047 1.677.788 1.677.788L24 9.948v9.789h-4.263V24H9.789l-9-9C.303 14.5 0 13.795 0 13.105c0-.319.18-.818.316-1.105l3.789-7.895zm.679.679v11.787c.002.543.021 1.024.498 1.508L10.204 23h8.533v-4.263L4.784 4.784zm12.055-.678c-.899-.896-1.809-1.78-2.74-2.643-.302-.267-.567-.468-1.07-.462-.37.014-.87.195-.87.195L6.341 4.105l10.498.001z",source:"https://github.com/dart-lang/site-shared/tree/18458ff440afd3d06f04e5cb871c4c5eda29c9d5/src/_assets/image/dart/logo",hex:"0175C2"},O5={title:"Django",slug:"django",get svg(){return G+"Django"+Y+this.path+K},path:"M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.05 1.707.203zm0 9.143a3.894 3.894 0 00-1.325-.204c-1.988 0-3.134 1.223-3.134 3.365 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.53 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39z",source:"https://www.djangoproject.com/community/logos/",hex:"092E20"},B5={title:"Docker",slug:"docker",get svg(){return G+"Docker"+Y+this.path+K},path:"M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z",source:"https://www.docker.com/company/newsroom/media-resources",hex:"2496ED"},q5={title:"Elasticsearch",slug:"elasticsearch",get svg(){return G+"Elasticsearch"+Y+this.path+K},path:"M13.394 0C8.683 0 4.609 2.716 2.644 6.667h15.641a4.77 4.77 0 0 0 3.073-1.11c.446-.375.864-.785 1.247-1.243l.001-.002A11.974 11.974 0 0 0 13.394 0zM1.804 8.889a12.009 12.009 0 0 0 0 6.222h14.7a3.111 3.111 0 1 0 0-6.222zm.84 8.444C4.61 21.283 8.684 24 13.395 24c3.701 0 7.011-1.677 9.212-4.312l-.001-.002a9.958 9.958 0 0 0-1.247-1.243 4.77 4.77 0 0 0-3.073-1.11z",source:"https://www.elastic.co/brand",hex:"005571"},I5={title:"Electron",slug:"electron",get svg(){return G+"Electron"+Y+this.path+K},path:"M12.0111 0c-.85 0-1.5392.6891-1.5392 1.5392 0 .8501.6891 1.5393 1.5392 1.5393.595 0 1.11-.338 1.3662-.832 2.2208 1.2675 3.847 5.4728 3.847 10.3623 0 2.0715-.2891 4.056-.825 5.7685a.3215.3215 0 0 0 .2107.403.322.322 0 0 0 .4033-.2111c.5558-1.7763.8542-3.8251.8542-5.9604 0-5.1927-1.7717-9.686-4.3206-11.0027.001-.0223.0035-.0443.0035-.0669 0-.85-.6891-1.5392-1.5393-1.5392zm0 .6432a.896.896 0 1 1 0 1.792.896.896 0 1 1 0-1.792zm-5.486 4.3052c-2.067.0074-3.6473.6646-4.3885 1.9485-.7375 1.2774-.5267 2.971.5113 4.7813a.3217.3217 0 0 0 .558-.32C2.271 9.7274 2.089 8.266 2.6938 7.2185c.821-1.422 3.033-1.9552 5.9321-1.4271a.3216.3216 0 0 0 .1153-.6329c-.784-.1428-1.5271-.2125-2.216-.21zm11.0522.0176a.3216.3216 0 0 0-.0084.6432c1.8337.0239 3.1556.5956 3.7502 1.6256.8192 1.419.1798 3.5947-1.7182 5.837a.322.322 0 0 0 .0377.4535.3215.3215 0 0 0 .4532-.0377c2.0535-2.426 2.7708-4.8661 1.7845-6.5744-.7257-1.257-2.26-1.9207-4.299-1.9472zm-2.6984.2924a.3225.3225 0 0 0-.0647.0072c-1.8568.3979-3.8333 1.1755-5.7314 2.2714-4.5699 2.6384-7.5924 6.4948-7.3601 9.3717-.4726.2628-.7928.7664-.7928 1.3455 0 .85.6892 1.5392 1.5393 1.5392.85 0 1.5392-.6891 1.5392-1.5392 0-.8501-.6891-1.5393-1.5392-1.5393-.038 0-.0754.003-.1128.0057-.1002-2.5597 2.7434-6.1412 7.048-8.6265 1.8413-1.063 3.7551-1.8163 5.5445-2.1997a.3217.3217 0 0 0-.07-.636zm-2.8787 6.2364a1.1192 1.1192 0 0 0-.2243.0255c-.6012.1301-.983.7225-.8533 1.3238.1302.6012.7226.9832 1.3238.8533.6012-.1302.9832-.7226.8533-1.3238-.1139-.526-.5816-.8844-1.0995-.8788zM4.532 13.341a.321.321 0 0 0-.2318.0835.3214.3214 0 0 0-.0214.4542c1.2682 1.3936 2.9157 2.701 4.7946 3.7857 4.4146 2.5489 9.1056 3.2849 11.5608 1.8392a1.53 1.53 0 0 0 .8966.2899c.8501 0 1.5392-.6891 1.5392-1.5392 0-.8501-.689-1.5393-1.5392-1.5393-.85 0-1.5392.6892-1.5392 1.5393 0 .276.0737.5344.201.7584-2.2448 1.214-6.631.5002-10.7976-1.9054-1.8228-1.0524-3.418-2.3181-4.6404-3.6614a.3206.3206 0 0 0-.2226-.1049zm-2.0628 4.0172a.896.896 0 1 1 0 1.792.896.896 0 1 1 0-1.792zm19.0616 0a.896.896 0 1 1 0 1.792.891.891 0 0 1-.5864-.2194c-.0025-.004-.0039-.0083-.0066-.0123a.3195.3195 0 0 0-.0957-.0914.896.896 0 0 1 .6887-1.4689zm-14.0045 1.368a.3215.3215 0 0 0-.3207.4296C8.2793 22.154 10.036 24 12.0111 24c1.4406 0 2.7735-.9822 3.8128-2.711a.3215.3215 0 0 0-.11-.4413.3219.3219 0 0 0-.4415.11c-.934 1.5537-2.0812 2.399-3.2613 2.399-1.6407 0-3.2075-1.6465-4.2-4.4179a.3216.3216 0 0 0-.2848-.2126z",source:"https://www.electronjs.org",hex:"47848F"},H5={title:"ESLint",slug:"eslint",get svg(){return G+"ESLint"+Y+this.path+K},path:"M7.257 9.132L11.816 6.5a.369.369 0 0 1 .368 0l4.559 2.632a.369.369 0 0 1 .184.32v5.263a.37.37 0 0 1-.184.319l-4.559 2.632a.369.369 0 0 1-.368 0l-4.559-2.632a.369.369 0 0 1-.184-.32V9.452a.37.37 0 0 1 .184-.32M23.852 11.53l-5.446-9.475c-.198-.343-.564-.596-.96-.596H6.555c-.396 0-.762.253-.96.596L.149 11.509a1.127 1.127 0 0 0 0 1.117l5.447 9.398c.197.342.563.517.959.517h10.893c.395 0 .76-.17.959-.512l5.446-9.413a1.069 1.069 0 0 0 0-1.086m-4.51 4.556a.4.4 0 0 1-.204.338L12.2 20.426a.395.395 0 0 1-.392 0l-6.943-4.002a.4.4 0 0 1-.205-.338V8.08c0-.14.083-.269.204-.338L11.8 3.74c.12-.07.272-.07.392 0l6.943 4.003a.4.4 0 0 1 .206.338z",source:"https://eslint.org",hex:"4B32C3"},V5={title:"Express",slug:"express",get svg(){return G+"Express"+Y+this.path+K},path:"M12.262 16.666h1.146l6.975-9.325H19.22zm9.778 1.441v.004l-4.334-5.706-.557.74 4.873 6.682H.945V4.173h9.505l5.026 6.7.574-.772-4.374-5.928h.003l-.719-.945H0v17.544h24zM10.917 8.705a3.8 3.8 0 0 0-1.292-1.183q-.796-.45-1.916-.45c-.746 0-1.37.14-1.906.424a3.76 3.76 0 0 0-1.31 1.12 4.9 4.9 0 0 0-.75 1.581 7.17 7.17 0 0 0 0 3.696c.148.567.402 1.101.75 1.573a3.5 3.5 0 0 0 1.31 1.066q.803.39 1.906.389 1.77 0 2.739-.868.966-.867 1.328-2.457h-1.139q-.271 1.084-.977 1.734-.704.651-1.952.65-.812 0-1.392-.342a3.1 3.1 0 0 1-.957-.869 3.5 3.5 0 0 1-.551-1.182 5 5 0 0 1-.17-1.133 9 9 0 0 0-.015-.286 4.5 4.5 0 0 1 .015-.829c.047-.418.147-.83.296-1.223A3.7 3.7 0 0 1 5.54 9.05a2.9 2.9 0 0 1 .922-.742q.541-.28 1.246-.28c.47 0 .869.093 1.23.28q.541.281.922.742.379.461.587 1.057t.225 1.246H5.625l.004.957h6.182a7.3 7.3 0 0 0-.18-1.924 4.9 4.9 0 0 0-.715-1.68z",source:"https://github.com/openjs-foundation/artwork/blob/3816245ebbf4707bdafde748350ac8476b6b5b62/projects/express/express-icon-black.svg",hex:"0A0A0A"},W5={title:"FastAPI",slug:"fastapi",get svg(){return G+"FastAPI"+Y+this.path+K},path:"M12 .0387C5.3729.0384.0003 5.3931 0 11.9988c-.001 6.6066 5.372 11.9628 12 11.9625 6.628.0003 12.001-5.3559 12-11.9625-.0003-6.6057-5.3729-11.9604-12-11.96m-.829 5.4153h7.55l-7.5805 5.3284h5.1828L5.279 18.5436q2.9466-6.5444 5.892-13.0896",source:"https://github.com/tiangolo/fastapi/blob/ffb4f77a11f83132b521ba0aac6c95792c19e797/docs/en/docs/img/icon-white.svg",hex:"009688"},U5={title:"Figma",slug:"figma",get svg(){return G+"Figma"+Y+this.path+K},path:"M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z",source:"https://www.figma.com/using-the-figma-brand/",hex:"F24E1E",guidelines:"https://www.figma.com/using-the-figma-brand/"},G5={title:"Firebase",slug:"firebase",get svg(){return G+"Firebase"+Y+this.path+K},path:"M19.455 8.369c-.538-.748-1.778-2.285-3.681-4.569-.826-.991-1.535-1.832-1.884-2.245a146 146 0 0 0-.488-.576l-.207-.245-.113-.133-.022-.032-.01-.005L12.57 0l-.609.488c-1.555 1.246-2.828 2.851-3.681 4.64-.523 1.064-.864 2.105-1.043 3.176-.047.241-.088.489-.121.738-.209-.017-.421-.028-.632-.033-.018-.001-.035-.002-.059-.003a7.46 7.46 0 0 0-2.28.274l-.317.089-.163.286c-.765 1.342-1.198 2.869-1.252 4.416-.07 2.01.477 3.954 1.583 5.625 1.082 1.633 2.61 2.882 4.42 3.611l.236.095.071.025.003-.001a9.59 9.59 0 0 0 2.941.568q.171.006.342.006c1.273 0 2.513-.249 3.69-.742l.008.004.313-.145a9.63 9.63 0 0 0 3.927-3.335c1.01-1.49 1.577-3.234 1.641-5.042.075-2.161-.643-4.304-2.133-6.371m-7.083 6.695c.328 1.244.264 2.44-.191 3.558-1.135-1.12-1.967-2.352-2.475-3.665-.543-1.404-.87-2.74-.974-3.975.48.157.922.366 1.315.622 1.132.737 1.914 1.902 2.325 3.461zm.207 6.022c.482.368.99.712 1.513 1.028-.771.21-1.565.302-2.369.273a8 8 0 0 1-.373-.022c.458-.394.869-.823 1.228-1.279zm1.347-6.431c-.516-1.957-1.527-3.437-3.002-4.398-.647-.421-1.385-.741-2.194-.95.011-.134.026-.268.043-.4.014-.113.03-.216.046-.313.133-.689.332-1.37.589-2.025.099-.25.206-.499.321-.74l.004-.008c.177-.358.376-.719.61-1.105l.092-.152-.003-.001c.544-.851 1.197-1.627 1.942-2.311l.288.341c.672.796 1.304 1.548 1.878 2.237 1.291 1.549 2.966 3.583 3.612 4.48 1.277 1.771 1.893 3.579 1.83 5.375-.049 1.395-.461 2.755-1.195 3.933-.694 1.116-1.661 2.05-2.8 2.708-.636-.318-1.559-.839-2.539-1.599.79-1.575.952-3.28.479-5.072zm-2.575 5.397c-.725.939-1.587 1.55-2.09 1.856-.081-.029-.163-.06-.243-.093l-.065-.026c-1.49-.616-2.747-1.656-3.635-3.01-.907-1.384-1.356-2.993-1.298-4.653.041-1.19.338-2.327.882-3.379.316-.07.638-.114.96-.131l.084-.002c.162-.003.324-.003.478 0 .227.011.454.035.677.07.073 1.513.445 3.145 1.105 4.852.637 1.644 1.694 3.162 3.144 4.515z",source:"https://firebase.google.com/brand-guidelines",hex:"DD2C00",guidelines:"https://firebase.google.com/brand-guidelines"},Y5={title:"Flask",slug:"flask",get svg(){return G+"Flask"+Y+this.path+K},path:"M10.773 2.878c-.013 1.434.322 4.624.445 5.734l-8.558 3.83c-.56-.959-.98-2.304-1.237-3.38l-.06.027c-.205.09-.406.053-.494-.088l-.011-.018-.82-1.506c-.058-.105-.05-.252.024-.392a.78.78 0 0 1 .358-.331l9.824-4.207c.146-.064.299-.063.4.004.106.062.127.128.13.327Zm.68 7c.523 1.97.675 2.412.832 2.818l-7.263 3.7a19.35 19.35 0 0 1-1.81-2.83l8.24-3.689Zm12.432 8.786h.003c.283.402-.047.657-.153.698l-.947.37c.037.125.035.319-.217.414l-.736.287c-.229.09-.398-.059-.42-.2l-.025-.125c-4.427 1.784-7.94 1.685-10.696.647-1.981-.745-3.576-1.983-4.846-3.379l6.948-3.54c.721 1.431 1.586 2.454 2.509 3.178 2.086 1.638 4.415 1.712 5.793 1.563l-.047-.233c-.015-.077.007-.135.086-.165l.734-.288a.302.302 0 0 1 .342.086l.748-.288a.306.306 0 0 1 .341.086l.583.89Z",source:"https://github.com/pallets/flask/blob/85c5d93cbd049c4bd0679c36fd1ddcae8c37b642/docs/_static/flask-icon.svg",hex:"3BABC3"},K5={title:"Flutter",slug:"flutter",get svg(){return G+"Flutter"+Y+this.path+K},path:"M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z",source:"https://flutter.dev/brand",hex:"02569B",guidelines:"https://flutter.dev/brand"},Q5={title:"Git",slug:"git",get svg(){return G+"Git"+Y+this.path+K},path:"M13.09 23.549a1.54 1.54 0 0 1-2.18 0L.451 13.089a1.54 1.54 0 0 1 0-2.179l7.191-7.19 2.733 2.733a1.85 1.85 0 0 0 .964 2.326v6.66a1.849 1.849 0 1 0 1.54 0V8.957l2.508 2.508a1.85 1.85 0 1 0 1.09-1.09l-2.634-2.634a1.85 1.85 0 0 0-2.378-2.377L8.73 2.63 10.91.451a1.54 1.54 0 0 1 2.179 0l10.459 10.46a1.54 1.54 0 0 1 0 2.179z",source:"https://git-scm.com/community/logos",hex:"F03C2E",license:{type:"CC-BY-3.0",url:"https://spdx.org/licenses/CC-BY-3.0"}},X5={title:"GitHub",slug:"github",get svg(){return G+"GitHub"+Y+this.path+K},path:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",source:"https://github.com/logos",hex:"181717",guidelines:"https://github.com/logos"},Z5={title:"GitHub Actions",slug:"githubactions",get svg(){return G+"GitHub Actions"+Y+this.path+K},path:"M10.984 13.836a.5.5 0 0 1-.353-.146l-.745-.743a.5.5 0 1 1 .706-.708l.392.391 1.181-1.18a.5.5 0 0 1 .708.707l-1.535 1.533a.504.504 0 0 1-.354.146zm9.353-.147l1.534-1.532a.5.5 0 0 0-.707-.707l-1.181 1.18-.392-.391a.5.5 0 1 0-.706.708l.746.743a.497.497 0 0 0 .706-.001zM4.527 7.452l2.557-1.585A1 1 0 0 0 7.09 4.17L4.533 2.56A1 1 0 0 0 3 3.406v3.196a1.001 1.001 0 0 0 1.527.85zm2.03-2.436L4 6.602V3.406l2.557 1.61zM24 12.5c0 1.93-1.57 3.5-3.5 3.5a3.503 3.503 0 0 1-3.46-3h-2.08a3.503 3.503 0 0 1-3.46 3 3.502 3.502 0 0 1-3.46-3h-.558c-.972 0-1.85-.399-2.482-1.042V17c0 1.654 1.346 3 3 3h.04c.244-1.693 1.7-3 3.46-3 1.93 0 3.5 1.57 3.5 3.5S13.43 24 11.5 24a3.502 3.502 0 0 1-3.46-3H8c-2.206 0-4-1.794-4-4V9.899A5.008 5.008 0 0 1 0 5c0-2.757 2.243-5 5-5s5 2.243 5 5a5.005 5.005 0 0 1-4.952 4.998A2.482 2.482 0 0 0 7.482 12h.558c.244-1.693 1.7-3 3.46-3a3.502 3.502 0 0 1 3.46 3h2.08a3.503 3.503 0 0 1 3.46-3c1.93 0 3.5 1.57 3.5 3.5zm-15 8c0 1.378 1.122 2.5 2.5 2.5s2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5S9 19.122 9 20.5zM5 9c2.206 0 4-1.794 4-4S7.206 1 5 1 1 2.794 1 5s1.794 4 4 4zm9 3.5c0-1.378-1.122-2.5-2.5-2.5S9 11.122 9 12.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5zm9 0c0-1.378-1.122-2.5-2.5-2.5S18 11.122 18 12.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5zm-13 8a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0zm12 0c0 1.93-1.57 3.5-3.5 3.5a3.503 3.503 0 0 1-3.46-3.002c-.007.001-.013.005-.021.005l-.506.017h-.017a.5.5 0 0 1-.016-.999l.506-.017c.018-.002.035.006.052.007A3.503 3.503 0 0 1 20.5 17c1.93 0 3.5 1.57 3.5 3.5zm-1 0c0-1.378-1.122-2.5-2.5-2.5S18 19.122 18 20.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5z",source:"https://github.com/features/actions",hex:"2088FF"},J5={title:"GitLab",slug:"gitlab",get svg(){return G+"GitLab"+Y+this.path+K},path:"m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z",source:"https://about.gitlab.com/press/press-kit/",hex:"FC6D26",guidelines:"https://about.gitlab.com/handbook/marketing/corporate-marketing/brand-activation/trademark-guidelines/"},D1={title:"Go",slug:"go",get svg(){return G+"Go"+Y+this.path+K},path:"M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.795.514-1.204 1.274-1.192 2.22.011.935.654 1.706 1.577 1.835.795.105 1.46-.175 1.987-.77.105-.13.198-.27.315-.434H10.47c-.245 0-.304-.152-.222-.35.152-.362.432-.97.596-1.274a.315.315 0 01.292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 01-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.77-.865-.655-1.356-1.52-1.484-2.595-.152-1.274.222-2.419.993-3.424.83-1.086 1.928-1.776 3.272-2.02 1.098-.2 2.15-.07 3.096.571.62.41 1.063.97 1.356 1.648.07.105.023.164-.117.2m3.868 6.461c-1.064-.024-2.034-.328-2.852-1.029a3.665 3.665 0 01-1.262-2.255c-.21-1.32.152-2.489.947-3.529.853-1.122 1.881-1.706 3.272-1.95 1.192-.21 2.314-.095 3.33.595.923.63 1.496 1.484 1.648 2.605.198 1.578-.257 2.863-1.344 3.962-.771.783-1.718 1.273-2.805 1.495-.315.06-.63.07-.934.106zm2.78-4.72c-.011-.153-.011-.27-.034-.387-.21-1.157-1.274-1.81-2.384-1.554-1.087.245-1.788.935-2.045 2.033-.21.912.234 1.835 1.075 2.21.643.28 1.285.244 1.905-.07.923-.48 1.425-1.228 1.484-2.233z",source:"https://blog.golang.org/go-brand",hex:"00ADD8",guidelines:"https://blog.golang.org/go-brand"},eh={title:"Google Cloud",slug:"googlecloud",get svg(){return G+"Google Cloud"+Y+this.path+K},path:"M12.19 2.38a9.344 9.344 0 0 0-9.234 6.893c.053-.02-.055.013 0 0-3.875 2.551-3.922 8.11-.247 10.941l.006-.007-.007.03a6.717 6.717 0 0 0 4.077 1.356h5.173l.03.03h5.192c6.687.053 9.376-8.605 3.835-12.35a9.365 9.365 0 0 0-2.821-4.552l-.043.043.006-.05A9.344 9.344 0 0 0 12.19 2.38zm-.358 4.146c1.244-.04 2.518.368 3.486 1.15a5.186 5.186 0 0 1 1.862 4.078v.518c3.53-.07 3.53 5.262 0 5.193h-5.193l-.008.009v-.04H6.785a2.59 2.59 0 0 1-1.067-.23h.001a2.597 2.597 0 1 1 3.437-3.437l3.013-3.012A6.747 6.747 0 0 0 8.11 8.24c.018-.01.04-.026.054-.023a5.186 5.186 0 0 1 3.67-1.69z",source:"https://cloud.google.com",hex:"4285F4"},rh={title:"GraphQL",slug:"graphql",get svg(){return G+"GraphQL"+Y+this.path+K},path:"M12.002 0a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm8.54 4.931a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm0 9.862a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm-8.54 4.931a2.138 2.138 0 1 0 0 4.276 2.138 2.138 0 1 0 0-4.276zm-8.542-4.93a2.138 2.138 0 1 0 0 4.276 2.138 2.138 0 1 0 0-4.277zm0-9.863a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm8.542-3.378L2.953 6.777v10.448l9.049 5.224 9.047-5.224V6.777zm0 1.601 7.66 13.27H4.34zm-1.387.371L3.97 15.037V7.363zm2.774 0 6.646 3.838v7.674zM5.355 17.44h13.293l-6.646 3.836z",source:"https://graphql.org/brand",hex:"E10098",guidelines:"https://graphql.org/brand"},P1={title:"HTML5",slug:"html5",get svg(){return G+"HTML5"+Y+this.path+K},path:"M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z",source:"https://www.w3.org/html/logo/",hex:"E34F26"},F1={title:"JavaScript",slug:"javascript",get svg(){return G+"JavaScript"+Y+this.path+K},path:"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z",source:"https://github.com/voodootikigod/logo.js/blob/1544bdeed6d618a6cfe4f0650d04ab8d9cfa76d9/js.svg",hex:"F7DF1E",license:{type:"MIT",url:"https://spdx.org/licenses/MIT"}},nh={title:"Jenkins",slug:"jenkins",get svg(){return G+"Jenkins"+Y+this.path+K},path:"M2.872 24h-.975a3.866 3.866 0 01-.07-.197c-.215-.666-.594-1.49-.692-2.154-.146-.984.78-1.039 1.374-1.465.915-.66 1.635-1.025 2.627-1.62.295-.179 1.182-.624 1.281-.829.201-.408-.345-.982-.49-1.3-.225-.507-.345-.937-.376-1.435-.824-.13-1.455-.627-1.844-1.185-.63-.925-1.066-2.635-.525-3.936.045-.103.254-.305.285-.463.06-.308-.105-.72-.12-1.048-.06-1.692.284-3.15 1.425-3.66.463-1.84 2.113-2.453 3.673-3.367.58-.342 1.224-.562 1.89-.807 2.372-.877 6.027-.712 7.994.783.836.633 2.176 1.97 2.656 2.939 1.262 2.555 1.17 6.825.287 9.934-.12.421-.29 1.032-.533 1.533-.168.35-.689 1.05-.625 1.36.064.314 1.19 1.17 1.432 1.395.434.422 1.26.975 1.324 1.5.07.557-.248 1.336-.41 1.875-.217.721-.436 1.441-.654 2.131H2.87zm11.104-3.54c-.545-.3-1.361-.622-2.065-.757-.87-.164-.78 1.188-.75 1.994.03.643.36 1.316.51 1.744.076.197.09.41.256.449.3.068 1.29-.326 1.575-.479.6-.328 1.064-.844 1.574-1.189.016-.17.016-.34.03-.508a2.648 2.648 0 00-1.095-.277c.314-.15.75-.15 1.035-.332l.016-.193c-.496-.03-.69-.254-1.021-.436zm7.454 2.935a17.78 17.78 0 00.465-1.752c.06-.287.215-.918.178-1.176-.059-.459-.684-.799-1.004-1.086-.584-.525-.95-.975-1.56-1.469-.249.375-.78.615-.983.914 1.447-.689 1.71 2.625 1.141 3.69.09.329.391.45.514.735l-.086.166h1.29c.013 0 .03 0 .044.014zm-6.634-.012c-.05-.074-.1-.135-.15-.209l-.301.195h.45zm2.77 0c.008-.209.018-.404.03-.598-.53.029-.825-.48-1.196-.527-.324-.045-.6.361-1.02.195-.095.105-.183.227-.284.316.154.18.295.375.424.584h.815c.014-.164.135-.285.3-.285.165 0 .284.121.284.27h.66zm2.116 0c-.314-.479-.947-.898-1.68-.555l-.03.541h1.71zm-8.51 0l-.104-.344c-.225-.72-.36-1.26-.405-1.68-.914-.436-1.875-.87-2.654-1.426-.15-.105-1.109-1.35-1.23-1.305-1.739.676-3.359 1.86-4.814 2.984.256.557.48 1.141.69 1.74h8.505zm8.265-2.113c-.029-.512-.164-1.56-.48-1.74-.66-.39-1.846.78-2.34.943.045.15.135.271.15.48.285-.074.645-.029.898.092-.299.03-.629.03-.824.164-.074.195.016.48-.029.764.69.197 1.5.303 2.385.332.164-.227.225-.645.211-1.082zm-4.08-.36c-.044.375.046.51.12.943 1.26.391 1.034-1.74-.135-.959zM8.76 19.5c-.45.457 1.27 1.082 1.814 1.115 0-.29.165-.564.135-.77-.65-.118-1.502-.042-1.945-.347zm5.565.215c0 .043-.061.03-.068.064.58.451 1.014.545 1.802.51.354-.262.67-.563 1.043-.807-.855.074-1.931.607-2.774.23zm3.42-17.726c-1.606-.906-4.35-1.591-6.076-.731-1.38.692-3.27 1.84-3.899 3.292.6 1.402-.166 2.686-.226 4.109-.018.757.36 1.42.391 2.242-.2.338-.825.38-1.26.356-.146-.729-.4-1.549-1.155-1.63-1.064-.116-1.845.764-1.89 1.683-.06 1.08.833 2.864 2.085 2.745.488-.046.608-.54 1.139-.54.285.57-.445.75-.523 1.154-.016.105.06.511.104.705.233.944.744 2.16 1.245 2.88.635.9 1.884 1.051 3.229 1.141.24-.525 1.125-.48 1.706-.346-.691-.27-1.336-.945-1.875-1.529-.615-.676-1.23-1.41-1.261-2.28 1.155 1.604 2.1 3 4.2 3.704 1.59.525 3.45-.254 4.664-1.109.51-.359.811-.93 1.17-1.439 1.35-1.936 1.98-4.71 1.846-7.394-.06-1.111-.06-2.221-.436-2.955-.389-.781-1.695-1.471-2.475-.781-.15-.764.63-1.23 1.545-.96-.66-.854-1.336-1.858-2.266-2.384zM13.58 14.896c.615 1.544 2.724 1.363 4.505 1.323-.084.194-.256.435-.465.515-.57.232-2.145.408-2.937-.012-.506-.27-.824-.873-1.102-1.227-.137-.172-.795-.608-.012-.609zm.164-.87c.893.464 2.52.517 3.731.48.066.267.066.593.068.913-1.55.08-3.386-.304-3.794-1.395h-.005zm6.675-.586c-.473.9-1.145 1.897-2.539 1.928-.023-.284-.045-.735 0-.904 1.064-.103 1.727-.646 2.543-1.017zm-.649-.667c-1.02.66-2.154 1.375-3.824 1.21-.351-.31-.485-1-.14-1.458.181.313.06.885.57.97.944.165 2.038-.579 2.73-.84.42-.713-.046-.976-.42-1.433-.782-.93-1.83-2.1-1.802-3.51.314-.224.346.346.391.45.404.96 1.424 2.175 2.174 3 .18.21.48.39.51.524.092.39-.254.854-.209 1.11zm-13.439-.675c-.314-.184-.393-.99-.768-1.01-.535-.03-.438 1.05-.436 1.68-.37-.33-.435-1.365-.164-1.89-.308-.15-.445.164-.618.284.22-1.59 2.34-.734 1.99.96zM4.713 5.995c-.685.756-.54 2.174-.459 3.188 1.244-.785 2.898.06 2.883 1.394.595-.016.223-.744.115-1.215-.353-1.528.592-3.187.041-4.59-1.064.084-1.939.52-2.578 1.215zm9.12 1.113c.307.562.404 1.148.84 1.57.195.19.574.424.387.95-.045.121-.365.391-.551.45-.674.195-2.254.03-1.721-.81.563.015 1.314.36 1.732-.045-.314-.524-.885-1.53-.674-2.13zm6.198-.013h.068c.33.668.6 1.375 1.004 1.965-.27.628-2.053 1.19-2.023.057.39-.17 1.05-.035 1.395-.25-.193-.556-.48-1.006-.434-1.771zm-6.927-1.617c-1.422-.33-2.131.592-2.56 1.553-.384-.094-.231-.615-.135-.883.255-.701 1.28-1.633 2.119-1.506.359.057.848.386.576.834zM9.642 1.593c-1.56.44-3.56 1.574-4.2 2.974.495-.07.84-.321 1.33-.351.186-.016.428.074.641.015.424-.104.78-1.065 1.102-1.41.31-.345.685-.496.94-.81.167-.09.409-.074.42-.33-.073-.075-.15-.135-.232-.105v.017z",source:"https://get.jenkins.io/art/",hex:"D24939",guidelines:"https://www.jenkins.io/press/",license:{type:"CC-BY-SA-3.0",url:"https://spdx.org/licenses/CC-BY-SA-3.0"}},th={title:"Jest",slug:"jest",get svg(){return G+"Jest"+Y+this.path+K},path:"M22.251 11.82a3.117 3.117 0 0 0-2.328-3.01L22.911 0H8.104L11.1 8.838a3.116 3.116 0 0 0-2.244 2.988c0 1.043.52 1.967 1.313 2.536a8.279 8.279 0 0 1-1.084 1.244 8.14 8.14 0 0 1-2.55 1.647c-.834-.563-1.195-1.556-.869-2.446a3.11 3.11 0 0 0-.91-6.08 3.117 3.117 0 0 0-3.113 3.113c0 .848.347 1.626.903 2.182-.048.097-.097.195-.146.299-.465.959-.993 2.043-1.195 3.259-.403 2.432.257 4.384 1.849 5.489A5.093 5.093 0 0 0 5.999 24c1.827 0 3.682-.917 5.475-1.807 1.279-.632 2.599-1.292 3.898-1.612.48-.118.98-.187 1.508-.264 1.07-.153 2.175-.312 3.168-.89a4.482 4.482 0 0 0 2.182-3.091c.174-.994 0-1.994-.444-2.87.298-.48.465-1.042.465-1.647zm-1.355 0c0 .965-.785 1.75-1.75 1.75a1.753 1.753 0 0 1-1.085-3.126l.007-.007c.056-.042.118-.084.18-.125 0 0 .008 0 .008-.007.028-.014.055-.035.083-.05.007 0 .014-.006.021-.006.028-.014.063-.028.097-.042.035-.014.07-.027.098-.041.007 0 .013-.007.02-.007.028-.007.056-.021.084-.028.007 0 .02-.007.028-.007.034-.007.062-.014.097-.02h.007l.104-.022c.007 0 .02 0 .028-.007.028 0 .055-.007.083-.007h.035c.035 0 .07-.007.111-.007h.09c.028 0 .05 0 .077.007h.014c.055.007.111.014.167.028a1.766 1.766 0 0 1 1.396 1.723zM10.043 1.39h10.93l-2.509 7.4c-.104.02-.208.055-.312.09l-2.64-5.385-2.648 5.35c-.104-.034-.216-.055-.327-.076l-2.494-7.38zm4.968 9.825a3.083 3.083 0 0 0-.938-1.668l1.438-2.904 1.452 2.967c-.43.43-.743.98-.868 1.605H15.01zm-3.481-1.098c.034-.007.062-.014.097-.02h.02c.029-.008.056-.008.084-.015h.028c.028 0 .049-.007.076-.007h.271c.028 0 .049.007.07.007.014 0 .02 0 .035.007.027.007.048.007.076.014.007 0 .014 0 .028.007l.097.02h.007c.028.008.056.015.083.029.007 0 .014.007.028.007.021.007.049.014.07.027.007 0 .014.007.02.007.028.014.056.021.084.035h.007a.374.374 0 0 1 .09.049h.007c.028.014.056.034.084.048.007 0 .007.007.013.007.028.014.05.035.077.049l.007.007c.083.062.16.132.236.201l.007.007a1.747 1.747 0 0 1 .48 1.209 1.752 1.752 0 0 1-3.502 0 1.742 1.742 0 0 1 1.32-1.695zm-6.838-.049c.966 0 1.751.786 1.751 1.751s-.785 1.751-1.75 1.751-1.752-.785-1.752-1.75.786-1.752 1.751-1.752zm16.163 6.025a3.07 3.07 0 0 1-1.508 2.133c-.758.438-1.689.577-2.669.716a17.29 17.29 0 0 0-1.64.291c-1.445.355-2.834 1.05-4.182 1.717-1.724.854-3.35 1.66-4.857 1.66a3.645 3.645 0 0 1-2.154-.688c-1.529-1.056-1.453-3.036-1.272-4.12.167-1.015.632-1.966 1.077-2.877.028-.055.049-.104.077-.16.152.056.312.098.479.126-.264 1.473.486 2.994 1.946 3.745l.264.139.284-.104c1.216-.431 2.342-1.133 3.336-2.071a9.334 9.334 0 0 0 1.445-1.716c.16.027.32.034.48.034a3.117 3.117 0 0 0 3.008-2.327h1.167a3.109 3.109 0 0 0 3.01 2.327c.576 0 1.11-.16 1.57-.43.18.52.236 1.063.139 1.605z",source:"https://jestjs.io",hex:"C21325"},ah={title:"Jira",slug:"jira",get svg(){return G+"Jira"+Y+this.path+K},path:"M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005zm5.723-5.756H5.736a5.215 5.215 0 0 0 5.215 5.214h2.129v2.058a5.218 5.218 0 0 0 5.215 5.214V6.758a1.001 1.001 0 0 0-1.001-1.001zM23.013 0H11.455a5.215 5.215 0 0 0 5.215 5.215h2.129v2.057A5.215 5.215 0 0 0 24 12.483V1.005A1.001 1.001 0 0 0 23.013 0Z",source:"https://atlassian.design/resources/logo-library",hex:"0052CC",guidelines:"https://atlassian.design/foundations/logos/"},oh={title:"jQuery",slug:"jquery",get svg(){return G+"jQuery"+Y+this.path+K},path:"M1.525 5.87c-2.126 3.054-1.862 7.026-.237 10.269.037.079.078.154.118.229.023.052.049.1.077.15.013.027.031.056.047.082.026.052.054.102.081.152l.157.266c.03.049.057.097.09.146.056.094.12.187.178.281.026.04.05.078.079.117a6.368 6.368 0 00.31.445c.078.107.156.211.24.315.027.038.058.076.086.115l.22.269c.028.03.055.067.084.099.098.118.202.233.306.35l.005.006a3.134 3.134 0 00.425.44c.08.083.16.165.245.245l.101.097c.111.105.223.209.34.309.002 0 .003.002.005.003l.057.05c.102.089.205.178.31.26l.125.105c.085.068.174.133.26.2l.137.105c.093.07.192.139.287.207.035.025.07.05.106.073l.03.023.28.185.12.08c.148.094.294.184.44.272.041.02.084.044.123.068.108.062.22.125.329.183.06.034.122.063.184.094.075.042.153.083.234.125a.324.324 0 01.056.023c.033.015.064.031.096.047.12.06.245.118.375.175.024.01.05.02.076.034.144.063.289.123.438.182.034.01.07.027.105.04.135.051.274.103.411.152l.05.018c.154.052.305.102.46.15.036.01.073.023.111.033.16.048.314.105.474.137 10.273 1.872 13.258-6.177 13.258-6.177-2.508 3.266-6.958 4.127-11.174 3.169-.156-.036-.312-.086-.47-.132a13.539 13.539 0 01-.567-.182l-.062-.024c-.136-.046-.267-.097-.4-.148a1.615 1.615 0 00-.11-.04c-.148-.06-.29-.121-.433-.184-.031-.01-.057-.024-.088-.036a23.44 23.44 0 01-.362-.17 1.485 1.485 0 01-.106-.052c-.094-.044-.188-.095-.28-.143a3.947 3.947 0 01-.187-.096c-.114-.06-.227-.125-.34-.187-.034-.024-.073-.044-.112-.066a15.922 15.922 0 01-.439-.27 2.107 2.107 0 01-.118-.078 6.01 6.01 0 01-.312-.207c-.035-.023-.067-.048-.103-.073a9.553 9.553 0 01-.295-.212c-.042-.034-.087-.066-.132-.1-.088-.07-.177-.135-.265-.208l-.118-.095a10.593 10.593 0 01-.335-.28.258.258 0 00-.037-.031l-.347-.316-.1-.094c-.082-.084-.166-.164-.25-.246l-.098-.1a9.081 9.081 0 01-.309-.323l-.015-.016c-.106-.116-.21-.235-.313-.355-.027-.03-.053-.064-.08-.097l-.227-.277a21.275 21.275 0 01-.34-.449C2.152 11.79 1.306 7.384 3.177 3.771m4.943-.473c-1.54 2.211-1.454 5.169-.254 7.508a9.111 9.111 0 00.678 1.133c.23.33.484.721.793.988.107.122.223.24.344.36l.09.09c.114.11.232.217.35.325l.016.013a9.867 9.867 0 00.414.342c.034.023.063.05.096.073.14.108.282.212.428.316l.015.009c.062.045.128.086.198.13.028.018.06.042.09.06.106.068.21.132.318.197.017.007.032.016.048.023.09.055.188.108.282.157.033.02.065.035.1.054.066.033.132.068.197.102l.032.014c.135.067.273.129.408.19.034.014.063.025.092.039.111.048.224.094.336.137.05.017.097.037.144.052.102.038.21.073.31.108l.14.045c.147.045.295.104.449.13C22.164 17.206 24 11.098 24 11.098c-1.653 2.38-4.852 3.513-8.261 2.628a8.04 8.04 0 01-.449-.13c-.048-.014-.09-.029-.136-.043-.104-.036-.211-.07-.312-.109l-.144-.054c-.113-.045-.227-.087-.336-.135-.034-.015-.065-.025-.091-.04-.14-.063-.281-.125-.418-.192l-.206-.107-.119-.06a5.673 5.673 0 01-.265-.15.62.62 0 01-.062-.035c-.106-.066-.217-.13-.318-.198-.034-.019-.065-.042-.097-.062l-.208-.136c-.144-.1-.285-.208-.428-.313-.032-.029-.063-.053-.094-.079-1.499-1.178-2.681-2.79-3.242-4.613-.59-1.897-.46-4.023.56-5.75m4.292-.147c-.909 1.334-.996 2.99-.37 4.46.665 1.563 2.024 2.79 3.608 3.37.065.025.128.046.196.07l.088.027c.092.03.185.063.28.084 4.381.845 5.567-2.25 5.886-2.704-1.043 1.498-2.792 1.857-4.938 1.335a4.85 4.85 0 01-.516-.16 6.352 6.352 0 01-.618-.254 6.53 6.53 0 01-1.082-.66c-1.922-1.457-3.113-4.236-1.859-6.5",source:"https://brand.jquery.org/logos/",hex:"0769AD",guidelines:"https://brand.jquery.org/logos/"},sh={title:"Jupyter",slug:"jupyter",get svg(){return G+"Jupyter"+Y+this.path+K},path:"M7.157 22.201A1.784 1.799 0 0 1 5.374 24a1.784 1.799 0 0 1-1.784-1.799 1.784 1.799 0 0 1 1.784-1.799 1.784 1.799 0 0 1 1.783 1.799zM20.582 1.427a1.415 1.427 0 0 1-1.415 1.428 1.415 1.427 0 0 1-1.416-1.428A1.415 1.427 0 0 1 19.167 0a1.415 1.427 0 0 1 1.415 1.427zM4.992 3.336A1.047 1.056 0 0 1 3.946 4.39a1.047 1.056 0 0 1-1.047-1.055A1.047 1.056 0 0 1 3.946 2.28a1.047 1.056 0 0 1 1.046 1.056zm7.336 1.517c3.769 0 7.06 1.38 8.768 3.424a9.363 9.363 0 0 0-3.393-4.547 9.238 9.238 0 0 0-5.377-1.728A9.238 9.238 0 0 0 6.95 3.73a9.363 9.363 0 0 0-3.394 4.547c1.713-2.04 5.004-3.424 8.772-3.424zm.001 13.295c-3.768 0-7.06-1.381-8.768-3.425a9.363 9.363 0 0 0 3.394 4.547A9.238 9.238 0 0 0 12.33 21a9.238 9.238 0 0 0 5.377-1.729 9.363 9.363 0 0 0 3.393-4.547c-1.712 2.044-5.003 3.425-8.772 3.425Z",source:"https://github.com/jupyter/design/blob/80716ee75dd7b2a6ec6abcd89922d020483589b1/logos/Logo%20Mark/logomark-whitebody-whitemoons/logomark-whitebody-whitemoons.svg",hex:"F37626",guidelines:"https://github.com/jupyter/design"},ih={title:"Kotlin",slug:"kotlin",get svg(){return G+"Kotlin"+Y+this.path+K},path:"M24 24H0V0h24L12 12Z",source:"https://www.jetbrains.com/company/brand/logos/",hex:"7F52FF",guidelines:"https://www.jetbrains.com/company/brand/"},O1={title:"Kubernetes",slug:"kubernetes",get svg(){return G+"Kubernetes"+Y+this.path+K},path:"M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 0 1-2.075-2.597l2.578-.437.004.005a.44.44 0 0 1 .484.606zm-.833-2.129a.44.44 0 0 0 .173-.756l.002-.011L7.585 9.7a5.143 5.143 0 0 0-.73 3.255l2.514-.725.002-.009zm1.145-1.98a.44.44 0 0 0 .699-.337l.01-.005.15-2.62a5.144 5.144 0 0 0-3.01 1.442l2.147 1.523.004-.002zm.76 2.75l.723.349.722-.347.18-.78-.5-.623h-.804l-.5.623.179.779zm1.5-3.095a.44.44 0 0 0 .7.336l.008.003 2.134-1.513a5.188 5.188 0 0 0-2.992-1.442l.148 2.615.002.001zm10.876 5.97l-5.773 7.181a1.6 1.6 0 0 1-1.248.594l-9.261.003a1.6 1.6 0 0 1-1.247-.596l-5.776-7.18a1.583 1.583 0 0 1-.307-1.34L2.1 5.573c.108-.47.425-.864.863-1.073L11.305.513a1.606 1.606 0 0 1 1.385 0l8.345 3.985c.438.209.755.604.863 1.073l2.062 8.955c.108.47-.005.963-.308 1.34zm-3.289-2.057c-.042-.01-.103-.026-.145-.034-.174-.033-.315-.025-.479-.038-.35-.037-.638-.067-.895-.148-.105-.04-.18-.165-.216-.216l-.201-.059a6.45 6.45 0 0 0-.105-2.332 6.465 6.465 0 0 0-.936-2.163c.052-.047.15-.133.177-.159.008-.09.001-.183.094-.282.197-.185.444-.338.743-.522.142-.084.273-.137.415-.242.032-.024.076-.062.11-.089.24-.191.295-.52.123-.736-.172-.216-.506-.236-.745-.045-.034.027-.08.062-.111.088-.134.116-.217.23-.33.35-.246.25-.45.458-.673.609-.097.056-.239.037-.303.033l-.19.135a6.545 6.545 0 0 0-4.146-2.003l-.012-.223c-.065-.062-.143-.115-.163-.25-.022-.268.015-.557.057-.905.023-.163.061-.298.068-.475.001-.04-.001-.099-.001-.142 0-.306-.224-.555-.5-.555-.275 0-.499.249-.499.555l.001.014c0 .041-.002.092 0 .128.006.177.044.312.067.475.042.348.078.637.056.906a.545.545 0 0 1-.162.258l-.012.211a6.424 6.424 0 0 0-4.166 2.003 8.373 8.373 0 0 1-.18-.128c-.09.012-.18.04-.297-.029-.223-.15-.427-.358-.673-.608-.113-.12-.195-.234-.329-.349-.03-.026-.077-.062-.111-.088a.594.594 0 0 0-.348-.132.481.481 0 0 0-.398.176c-.172.216-.117.546.123.737l.007.005.104.083c.142.105.272.159.414.242.299.185.546.338.743.522.076.082.09.226.1.288l.16.143a6.462 6.462 0 0 0-1.02 4.506l-.208.06c-.055.072-.133.184-.215.217-.257.081-.546.11-.895.147-.164.014-.305.006-.48.039-.037.007-.09.02-.133.03l-.004.002-.007.002c-.295.071-.484.342-.423.608.061.267.349.429.645.365l.007-.001.01-.003.129-.029c.17-.046.294-.113.448-.172.33-.118.604-.217.87-.256.112-.009.23.069.288.101l.217-.037a6.5 6.5 0 0 0 2.88 3.596l-.09.218c.033.084.069.199.044.282-.097.252-.263.517-.452.813-.091.136-.185.242-.268.399-.02.037-.045.095-.064.134-.128.275-.034.591.213.71.248.12.556-.007.69-.282v-.002c.02-.039.046-.09.062-.127.07-.162.094-.301.144-.458.132-.332.205-.68.387-.897.05-.06.13-.082.215-.105l.113-.205a6.453 6.453 0 0 0 4.609.012l.106.192c.086.028.18.042.256.155.136.232.229.507.342.84.05.156.074.295.145.457.016.037.043.09.062.129.133.276.442.402.69.282.247-.118.341-.435.213-.71-.02-.039-.045-.096-.065-.134-.083-.156-.177-.261-.268-.398-.19-.296-.346-.541-.443-.793-.04-.13.007-.21.038-.294-.018-.022-.059-.144-.083-.202a6.499 6.499 0 0 0 2.88-3.622c.064.01.176.03.213.038.075-.05.144-.114.28-.104.266.039.54.138.87.256.154.06.277.128.448.173.036.01.088.019.13.028l.009.003.007.001c.297.064.584-.098.645-.365.06-.266-.128-.537-.423-.608zM16.4 9.701l-1.95 1.746v.005a.44.44 0 0 0 .173.757l.003.01 2.526.728a5.199 5.199 0 0 0-.108-1.674A5.208 5.208 0 0 0 16.4 9.7zm-4.013 5.325a.437.437 0 0 0-.404-.232.44.44 0 0 0-.372.233h-.002l-1.268 2.292a5.164 5.164 0 0 0 3.326.003l-1.27-2.296h-.01zm1.888-1.293a.44.44 0 0 0-.27.036.44.44 0 0 0-.214.572l-.003.004 1.01 2.438a5.15 5.15 0 0 0 2.081-2.615l-2.6-.44-.004.005z",source:"https://github.com/kubernetes/kubernetes/tree/cac53883f4714452f3084a22e4be20d042a9df33/logo",hex:"326CE5"},lh={title:"Laravel",slug:"laravel",get svg(){return G+"Laravel"+Y+this.path+K},path:"M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 01.375 0L9.93 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 01.024-.059c.007-.012.018-.02.025-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.01.026-.023.041-.032h.001l4.513-2.598a.375.375 0 01.375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.019.021.024.033.011.02.018.04.024.06.006.01.012.021.015.032zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003H5.04c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.04-.01-.011-.021-.022-.028-.036h-.002c-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043a.49.49 0 01-.008-.057c-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257zM5.23.81L1.47 2.974l3.76 2.164 3.758-2.164zm1.956 13.505l2.182-1.256V3.624l-1.58.91-2.182 1.255v9.435zm11.581-10.95l-3.76 2.163 3.76 2.163 3.759-2.164zm-.376 4.978L16.21 7.087 14.63 6.18v4.283l2.182 1.256 1.58.908zm-8.65 9.654l5.514-3.148 2.756-1.572-3.757-2.163-4.323 2.489-3.941 2.27z",source:"https://github.com/laravel/art/tree/5a8325b064634b900f25dbb6f1cafd888b2d2211",hex:"FF2D20"},ch={title:"Linux",slug:"linux",get svg(){return G+"Linux"+Y+this.path+K},path:"M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.043c-.06-.003-.12 0-.18 0h-.016c.151-.467-.182-.825-1.065-1.224-.915-.4-1.646-.336-1.77.465-.008.043-.013.066-.018.135-.068.023-.139.053-.209.064-.43.268-.662.669-.793 1.187-.13.533-.17 1.156-.205 1.869v.003c-.02.334-.17.838-.319 1.35-1.5 1.072-3.58 1.538-5.348.334a2.645 2.645 0 00-.402-.533 1.45 1.45 0 00-.275-.333c.182 0 .338-.03.465-.067a.615.615 0 00.314-.334c.108-.267 0-.697-.345-1.163-.345-.467-.931-.995-1.788-1.521-.63-.4-.986-.87-1.15-1.396-.165-.534-.143-1.085-.015-1.645.245-1.07.873-2.11 1.274-2.763.107-.065.037.135-.408.974-.396.751-1.14 2.497-.122 3.854a8.123 8.123 0 01.647-2.876c.564-1.278 1.743-3.504 1.836-5.268.048.036.217.135.289.202.218.133.38.333.59.465.21.201.477.335.876.335.039.003.075.006.11.006.412 0 .73-.134.997-.268.29-.134.52-.334.74-.4h.005c.467-.135.835-.402 1.044-.7zm2.185 8.958c.037.6.343 1.245.882 1.377.588.134 1.434-.333 1.791-.765l.211-.01c.315-.007.577.01.847.268l.003.003c.208.199.305.53.391.876.085.4.154.78.409 1.066.486.527.645.906.636 1.14l.003-.007v.018l-.003-.012c-.015.262-.185.396-.498.595-.63.401-1.746.712-2.457 1.57-.618.737-1.37 1.14-2.036 1.191-.664.053-1.237-.2-1.574-.898l-.005-.003c-.21-.4-.12-1.025.056-1.69.176-.668.428-1.344.463-1.897.037-.714.076-1.335.195-1.814.12-.465.308-.797.641-.984l.045-.022zm-10.814.049h.01c.053 0 .105.005.157.014.376.055.706.333 1.023.752l.91 1.664.003.003c.243.533.754 1.064 1.189 1.637.434.598.77 1.131.729 1.57v.006c-.057.744-.48 1.148-1.125 1.294-.645.135-1.52.002-2.395-.464-.968-.536-2.118-.469-2.857-.602-.369-.066-.61-.2-.723-.4-.11-.2-.113-.602.123-1.23v-.004l.002-.003c.117-.334.03-.752-.027-1.118-.055-.401-.083-.71.043-.94.16-.334.396-.4.69-.533.294-.135.64-.202.915-.47h.002v-.002c.256-.268.445-.601.668-.838.19-.201.38-.336.663-.336zm7.159-9.074c-.435.201-.945.535-1.488.535-.542 0-.97-.267-1.28-.466-.154-.134-.28-.268-.373-.335-.164-.134-.144-.333-.074-.333.109.016.129.134.199.2.096.066.215.2.36.333.292.2.68.467 1.167.467.485 0 1.053-.267 1.398-.466.195-.135.445-.334.648-.467.156-.136.149-.267.279-.267.128.016.034.134-.147.332a8.097 8.097 0 01-.69.468zm-1.082-1.583V5.64c-.006-.02.013-.042.029-.05.074-.043.18-.027.26.004.063 0 .16.067.15.135-.006.049-.085.066-.135.066-.055 0-.092-.043-.141-.068-.052-.018-.146-.008-.163-.065zm-.551 0c-.02.058-.113.049-.166.066-.047.025-.086.068-.14.068-.05 0-.13-.02-.136-.068-.01-.066.088-.133.15-.133.08-.031.184-.047.259-.005.019.009.036.03.03.05v.02h.003z",source:"https://www.linuxfoundation.org/the-linux-mark/",hex:"FCC624"},dh={title:"MariaDB",slug:"mariadb",get svg(){return G+"MariaDB"+Y+this.path+K},path:"M23.157 4.412c-.676.284-.79.31-1.673.372-.65.045-.757.057-1.212.209-.75.246-1.395.75-2.02 1.59-.296.398-1.249 1.913-1.249 1.988 0 .057-.65.998-.915 1.32-.574.713-1.08 1.079-2.14 1.59-.77.36-1.224.524-4.102 1.477-1.073.353-2.133.738-2.367.864-.852.449-1.515 1.036-2.203 1.938-1.003 1.32-.972 1.313-3.042.947a12.264 12.264 0 00-.675-.063c-.644-.05-1.023.044-1.332.334L0 17.193l.177.088c.094.05.353.234.561.398.215.17.461.347.55.391.088.044.17.088.183.101.012.013-.089.17-.228.353-.435.581-.593.871-.574 1.048.019.164.032.17.43.17.517-.006.826-.056 1.261-.208.65-.233 2.058-.94 2.784-1.4.776-.5 1.717-.998 1.956-1.042.082-.02.354-.07.594-.114.58-.107 1.464-.095 2.587.05.108.013.373.045.6.064.227.025.43.057.454.076.026.012.474.037.998.056.934.026 1.104.007 1.3-.189.126-.133.385-.631.498-.985.209-.643.417-.921.366-.492-.113.966-.322 1.692-.713 2.411-.259.499-.663 1.092-.934 1.395-.322.347-.315.36.088.315.619-.063 1.471-.397 2.096-.82.827-.562 1.647-1.691 2.19-3.03.107-.27.22-.22.183.083-.013.094-.038.315-.057.498l-.031.328.353-.202c.833-.48 1.414-1.262 2.127-2.884.227-.518.877-2.922 1.073-3.976a9.64 9.64 0 01.271-1.042c.127-.429.196-.555.48-.858.183-.19.625-.555.978-.808.72-.505.953-.75 1.187-1.205.208-.417.284-1.13.132-1.357-.132-.202-.284-.196-.763.006Z",source:"https://mariadb.com/about-us/logos/",hex:"003545",guidelines:"https://mariadb.com/about-us/logos/"},fh={title:"MongoDB",slug:"mongodb",get svg(){return G+"MongoDB"+Y+this.path+K},path:"M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z",source:"https://www.mongodb.com/pressroom",hex:"47A248"},uh={title:"MySQL",slug:"mysql",get svg(){return G+"MySQL"+Y+this.path+K},path:"M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z",source:"https://www.mysql.com/about/legal/logos.html",hex:"4479A1",guidelines:"https://www.mysql.com/about/legal/logos.html"},ph={title:"NestJS",slug:"nestjs",get svg(){return G+"NestJS"+Y+this.path+K},path:"M14.131.047c-.173 0-.334.037-.483.087.316.21.49.49.576.806.007.043.019.074.025.117a.681.681 0 0 1 .013.112c.024.545-.143.614-.26.936-.18.415-.13.861.086 1.22a.74.74 0 0 0 .074.137c-.235-1.568 1.073-1.803 1.314-2.293.019-.428-.334-.713-.613-.911a1.37 1.37 0 0 0-.732-.21zM16.102.4c-.024.143-.006.106-.012.18-.006.05-.006.112-.012.161-.013.05-.025.1-.044.149-.012.05-.03.1-.05.149l-.067.142c-.02.025-.031.05-.05.075l-.037.055a2.152 2.152 0 0 1-.093.124c-.037.038-.068.081-.112.112v.006c-.037.031-.074.068-.118.1-.13.099-.278.173-.415.266-.043.03-.087.056-.124.093a.906.906 0 0 0-.118.099c-.043.037-.074.074-.111.118-.031.037-.068.08-.093.124a1.582 1.582 0 0 0-.087.13c-.025.05-.043.093-.068.142-.019.05-.037.093-.05.143a2.007 2.007 0 0 0-.043.155c-.006.025-.006.056-.012.08-.007.025-.007.05-.013.075 0 .05-.006.105-.006.155 0 .037 0 .074.006.111 0 .05.006.1.019.155.006.05.018.1.03.15.02.049.032.098.05.148.013.03.031.062.044.087l-1.426-.552c-.241-.068-.477-.13-.719-.186l-.39-.093c-.372-.074-.75-.13-1.128-.167-.013 0-.019-.006-.031-.006A11.082 11.082 0 0 0 8.9 2.855c-.378.025-.756.074-1.134.136a12.45 12.45 0 0 0-.837.174l-.279.074c-.092.037-.18.08-.266.118l-.205.093c-.012.006-.024.006-.03.012-.063.031-.118.056-.174.087a2.738 2.738 0 0 0-.236.118c-.043.018-.086.043-.124.062a.559.559 0 0 1-.055.03c-.056.032-.112.063-.162.094a1.56 1.56 0 0 0-.148.093c-.044.03-.087.055-.124.086-.006.007-.013.007-.019.013-.037.025-.08.056-.118.087l-.012.012-.093.074c-.012.007-.025.019-.037.025-.031.025-.062.056-.093.08-.006.013-.019.02-.025.025-.037.038-.074.069-.111.106-.007 0-.007.006-.013.012a1.742 1.742 0 0 0-.111.106c-.007.006-.007.012-.013.012a1.454 1.454 0 0 0-.093.1c-.012.012-.03.024-.043.036a1.374 1.374 0 0 1-.106.112c-.006.012-.018.019-.024.03-.05.05-.093.1-.143.15l-.018.018c-.1.106-.205.211-.317.304-.111.1-.229.192-.347.273a3.777 3.777 0 0 1-.762.421c-.13.056-.267.106-.403.149-.26.056-.527.161-.756.18-.05 0-.105.012-.155.018l-.155.037-.149.056c-.05.019-.099.044-.148.068-.044.031-.093.056-.137.087a1.011 1.011 0 0 0-.124.106c-.043.03-.087.074-.124.111-.037.043-.074.08-.105.124-.031.05-.068.093-.093.143a1.092 1.092 0 0 0-.087.142c-.025.056-.05.106-.068.161-.019.05-.037.106-.056.161-.012.05-.025.1-.03.15 0 .005-.007.012-.007.018-.012.056-.012.13-.019.167C.006 7.95 0 7.986 0 8.03a.657.657 0 0 0 .074.31v.006c.019.037.044.075.069.112.024.037.05.074.08.111.031.031.068.069.106.1a.906.906 0 0 0 .117.099c.149.13.186.173.378.272.031.019.062.031.1.05.006 0 .012.006.018.006 0 .013 0 .019.006.031a1.272 1.272 0 0 0 .08.298c.02.037.032.074.05.111.007.013.013.025.02.031.024.05.049.093.073.137l.093.13c.031.037.069.08.106.118.037.037.074.068.118.105 0 0 .006.006.012.006.037.031.074.062.112.087a.986.986 0 0 0 .136.08c.043.025.093.05.142.069a.73.73 0 0 0 .124.043c.007.006.013.006.025.012.025.007.056.013.08.019-.018.335-.024.65.026.762.055.124.328-.254.6-.688-.036.428-.061.93 0 1.079.069.155.44-.329.763-.862 4.395-1.016 8.405 2.02 8.826 6.31-.08-.67-.905-1.041-1.283-.948-.186.458-.502 1.047-1.01 1.413.043-.41.025-.83-.062-1.24a4.009 4.009 0 0 1-.769 1.562c-.588.043-1.177-.242-1.487-.67-.025-.018-.031-.055-.05-.08-.018-.043-.037-.087-.05-.13a.515.515 0 0 1-.037-.13c-.006-.044-.006-.087-.006-.137v-.093a.992.992 0 0 1 .031-.13c.013-.043.025-.086.044-.13.024-.043.043-.087.074-.13.105-.298.105-.54-.087-.682a.706.706 0 0 0-.118-.062c-.024-.006-.055-.018-.08-.025l-.05-.018a.847.847 0 0 0-.13-.031.472.472 0 0 0-.13-.019 1.01 1.01 0 0 0-.136-.012c-.031 0-.062.006-.093.006a.484.484 0 0 0-.137.019c-.043.006-.086.012-.13.024a1.068 1.068 0 0 0-.13.044c-.043.018-.08.037-.124.056-.037.018-.074.043-.118.062-1.444.942-.582 3.148.403 3.787-.372.068-.75.148-.855.229l-.013.012c.267.161.546.298.837.416.397.13.818.247 1.004.297v.006a5.996 5.996 0 0 0 1.562.112c2.746-.192 4.996-2.281 5.405-5.033l.037.161c.019.112.043.23.056.347v.006c.012.056.018.112.025.162v.024c.006.056.012.112.012.162.006.068.012.136.012.204v.1c0 .03.007.067.007.098 0 .038-.007.075-.007.112v.087c0 .043-.006.08-.006.124 0 .025 0 .05-.006.08 0 .044-.006.087-.006.137-.006.018-.006.037-.006.055l-.02.143c0 .019 0 .037-.005.056-.007.062-.019.118-.025.18v.012l-.037.174v.018l-.037.167c0 .007-.007.02-.007.025a1.663 1.663 0 0 1-.043.168v.018c-.019.062-.037.118-.05.174-.006.006-.006.012-.006.012l-.056.186c-.024.062-.043.118-.068.18-.025.062-.043.124-.068.18-.025.062-.05.117-.074.18h-.007c-.024.055-.05.117-.08.173a.302.302 0 0 1-.019.043c-.006.006-.006.013-.012.019a5.867 5.867 0 0 1-1.742 2.082c-.05.031-.099.069-.149.106-.012.012-.03.018-.043.03a2.603 2.603 0 0 1-.136.094l.018.037h.007l.26-.037h.006c.161-.025.322-.056.483-.087.044-.006.093-.019.137-.031l.087-.019c.043-.006.086-.018.13-.024.037-.013.074-.02.111-.031.62-.15 1.221-.354 1.798-.595a9.926 9.926 0 0 1-3.85 3.142c.714-.05 1.426-.167 2.114-.366a9.903 9.903 0 0 0 5.857-4.68 9.893 9.893 0 0 1-1.667 3.986 9.758 9.758 0 0 0 1.655-1.376 9.824 9.824 0 0 0 2.61-5.268c.21.98.272 1.99.18 2.987 4.474-6.241.371-12.712-1.346-14.416-.006-.013-.012-.019-.012-.031-.006.006-.006.006-.006.012 0-.006 0-.006-.007-.012 0 .074-.006.148-.012.223a8.34 8.34 0 0 1-.062.415c-.03.136-.068.273-.105.41-.044.13-.093.266-.15.396a5.322 5.322 0 0 1-.185.378 4.735 4.735 0 0 1-.477.688c-.093.111-.192.21-.292.31a3.994 3.994 0 0 1-.18.155l-.142.124a3.459 3.459 0 0 1-.347.241 4.295 4.295 0 0 1-.366.211c-.13.062-.26.118-.39.174a4.364 4.364 0 0 1-.818.223c-.143.025-.285.037-.422.05a4.914 4.914 0 0 1-.297.012 4.66 4.66 0 0 1-.422-.025 3.137 3.137 0 0 1-.421-.062 3.136 3.136 0 0 1-.415-.105h-.007c.137-.013.273-.025.41-.05a4.493 4.493 0 0 0 .818-.223c.136-.05.266-.112.39-.174.13-.062.248-.13.372-.204.118-.08.235-.161.347-.248.112-.087.217-.18.316-.279.105-.093.198-.198.291-.304.093-.111.18-.223.26-.334.013-.019.026-.044.038-.062.062-.1.124-.199.18-.298a4.272 4.272 0 0 0 .334-.775c.044-.13.075-.266.106-.403.025-.142.05-.278.062-.415.012-.142.025-.285.025-.421 0-.1-.007-.199-.013-.298a6.726 6.726 0 0 0-.05-.415 4.493 4.493 0 0 0-.092-.415c-.044-.13-.087-.267-.137-.397-.05-.13-.111-.26-.173-.384-.069-.124-.137-.248-.211-.366a6.843 6.843 0 0 0-.248-.34c-.093-.106-.186-.212-.285-.317a3.878 3.878 0 0 0-.161-.155c-.28-.217-.57-.421-.862-.607a1.154 1.154 0 0 0-.124-.062 2.415 2.415 0 0 0-.589-.26Z",source:"https://nestjs.com",hex:"E0234E"},mh={title:"Netlify",slug:"netlify",get svg(){return G+"Netlify"+Y+this.path+K},path:"M6.49 19.04h-.23L5.13 17.9v-.23l1.73-1.71h1.2l.15.15v1.2L6.5 19.04ZM5.13 6.31V6.1l1.13-1.13h.23L8.2 6.68v1.2l-.15.15h-1.2L5.13 6.31Zm9.96 9.09h-1.65l-.14-.13v-3.83c0-.68-.27-1.2-1.1-1.23-.42 0-.9 0-1.43.02l-.07.08v4.96l-.14.14H8.9l-.13-.14V8.73l.13-.14h3.7a2.6 2.6 0 0 1 2.61 2.6v4.08l-.13.14Zm-8.37-2.44H.14L0 12.82v-1.64l.14-.14h6.58l.14.14v1.64l-.14.14Zm17.14 0h-6.58l-.14-.14v-1.64l.14-.14h6.58l.14.14v1.64l-.14.14ZM11.05 6.55V1.64l.14-.14h1.65l.14.14v4.9l-.14.14h-1.65l-.14-.13Zm0 15.81v-4.9l.14-.14h1.65l.14.13v4.91l-.14.14h-1.65l-.14-.14Z",source:"https://www.netlify.com/press/",hex:"00C7B7",guidelines:"https://www.netlify.com/press/"},hh={title:"Next.js",slug:"nextdotjs",get svg(){return G+"Next.js"+Y+this.path+K},path:"M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z",source:"https://vercel.com/design/brands#next-js",hex:"000000",guidelines:"https://vercel.com/design/brands#next-js"},gh={title:"NGINX",slug:"nginx",get svg(){return G+"NGINX"+Y+this.path+K},path:"M12 0L1.605 6v12L12 24l10.395-6V6L12 0zm6 16.59c0 .705-.646 1.29-1.529 1.29-.631 0-1.351-.255-1.801-.81l-6-7.141v6.66c0 .721-.57 1.29-1.274 1.29H7.32c-.721 0-1.29-.6-1.29-1.29V7.41c0-.705.63-1.29 1.5-1.29.646 0 1.38.255 1.83.81l5.97 7.141V7.41c0-.721.6-1.29 1.29-1.29h.075c.72 0 1.29.6 1.29 1.29v9.18H18z",source:"https://www.nginx.com/press/",hex:"009639",guidelines:"https://www.nginx.com/press/"},B1={title:"Node.js",slug:"nodedotjs",get svg(){return G+"Node.js"+Y+this.path+K},path:"M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z",source:"https://nodejs.org/en/about/branding",hex:"5FA04E",guidelines:"https://nodejs.org/en/about/branding"},xh={title:"Notion",slug:"notion",get svg(){return G+"Notion"+Y+this.path+K},path:"M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z",source:"https://www.notion.so",hex:"000000"},wh={title:"NumPy",slug:"numpy",get svg(){return G+"NumPy"+Y+this.path+K},path:"M10.315 4.876L6.3048 2.8517l-4.401 2.1965 4.1186 2.0683zm1.8381.9277l4.2045 2.1223-4.3622 2.1906-4.125-2.0718zm5.6153-2.9213l4.3193 2.1658-3.863 1.9402-4.2131-2.1252zm-1.859-.9329L12.021 0 8.1742 1.9193l4.0068 2.0208zm-3.0401 16.7443V24l4.7107-2.3507-.0053-5.3085zm4.7037-4.2057l-.0052-5.2528-4.6985 2.3356v5.2546zm5.6553-.9845v5.327l-4.0178 2.0052-.0029-5.3028zm0-1.8626V6.4214l-4.0253 2.001.0034 5.2633zM11.2062 11.571L8.0333 9.9756v6.895s-3.8804-8.2564-4.2399-8.998c-.0463-.0957-.2371-.2007-.2858-.2262C2.8118 7.2812.773 6.2485.773 6.2485V18.43l2.8204 1.5076v-6.3674s3.8392 7.3775 3.878 7.458c.0389.0807.4245.8582.8362 1.1314.5485.363 2.8992 1.7766 2.8992 1.7766z",source:"https://numpy.org/press-kit/",hex:"013243",guidelines:"https://github.com/numpy/numpy/blob/main/branding/logo/logoguidelines.md"},bh={title:"Nuxt",slug:"nuxt",get svg(){return G+"Nuxt"+Y+this.path+K},path:"M13.4642 19.8295h8.9218c.2834 0 .5618-.0723.8072-.2098a1.5899 1.5899 0 0 0 .5908-.5732 1.5293 1.5293 0 0 0 .216-.783 1.529 1.529 0 0 0-.2167-.7828L17.7916 7.4142a1.5904 1.5904 0 0 0-.5907-.573 1.6524 1.6524 0 0 0-.807-.2099c-.2833 0-.5616.0724-.807.2098a1.5904 1.5904 0 0 0-.5907.5731L13.4642 9.99l-2.9954-5.0366a1.5913 1.5913 0 0 0-.591-.573 1.6533 1.6533 0 0 0-.8071-.2098c-.2834 0-.5617.0723-.8072.2097a1.5913 1.5913 0 0 0-.591.573L.2168 17.4808A1.5292 1.5292 0 0 0 0 18.2635c-.0001.2749.0744.545.216.783a1.59 1.59 0 0 0 .5908.5732c.2454.1375.5238.2098.8072.2098h5.6003c2.219 0 3.8554-.9454 4.9813-2.7899l2.7337-4.5922L16.3935 9.99l4.3944 7.382h-5.8586ZM7.123 17.3694l-3.9083-.0009 5.8586-9.8421 2.9232 4.921-1.9572 3.2892c-.7478 1.1967-1.5972 1.6328-2.9163 1.6328z",source:"https://nuxt.com/design-kit",hex:"00DC82",guidelines:"https://nuxt.com/design-kit"},vh={title:"OpenJDK",slug:"openjdk",get svg(){return G+"OpenJDK"+Y+this.path+K},path:"M11.915 0 11.7.215C9.515 2.4 7.47 6.39 6.046 10.483c-1.064 1.024-3.633 2.81-3.711 3.551-.093.87 1.746 2.611 1.55 3.235-.198.625-1.304 1.408-1.014 1.939.1.188.823.011 1.277-.491a13.389 13.389 0 0 0-.017 2.14c.076.906.27 1.668.643 2.232.372.563.956.911 1.667.911.397 0 .727-.114 1.024-.264.298-.149.571-.33.91-.5.68-.34 1.634-.666 3.53-.604 1.903.062 2.872.39 3.559.704.687.314 1.15.664 1.925.664.767 0 1.395-.336 1.807-.9.412-.563.631-1.33.72-2.24.06-.623.055-1.32 0-2.066.454.45 1.117.604 1.213.424.29-.53-.816-1.314-1.013-1.937-.198-.624 1.642-2.366 1.549-3.236-.08-.748-2.707-2.568-3.748-3.586C16.428 6.374 14.308 2.394 12.13.215zm.175 6.038a2.95 2.95 0 0 1 2.943 2.942 2.95 2.95 0 0 1-2.943 2.943A2.95 2.95 0 0 1 9.148 8.98a2.95 2.95 0 0 1 2.942-2.942zM8.685 7.983a3.515 3.515 0 0 0-.145.997c0 1.951 1.6 3.55 3.55 3.55 1.95 0 3.55-1.598 3.55-3.55 0-.329-.046-.648-.132-.951.334.095.64.208.915.336a42.699 42.699 0 0 1 2.042 5.829c.678 2.545 1.01 4.92.846 6.607-.082.844-.29 1.51-.606 1.94-.315.431-.713.651-1.315.651-.593 0-.932-.27-1.673-.61-.741-.338-1.825-.694-3.792-.758-1.974-.064-3.073.293-3.821.669-.375.188-.659.373-.911.5s-.466.2-.752.2c-.53 0-.876-.209-1.16-.64-.285-.43-.474-1.101-.545-1.948-.141-1.693.176-4.069.823-6.614a43.155 43.155 0 0 1 1.934-5.783c.348-.167.749-.31 1.192-.425zm-3.382 4.362a.216.216 0 0 1 .13.031c-.166.56-.323 1.116-.463 1.665a33.849 33.849 0 0 0-.547 2.555 3.9 3.9 0 0 0-.2-.39c-.58-1.012-.914-1.642-1.16-2.08.315-.24 1.679-1.755 2.24-1.781zm13.394.01c.562.027 1.926 1.543 2.24 1.783-.246.438-.58 1.068-1.16 2.08a4.428 4.428 0 0 0-.163.309 32.354 32.354 0 0 0-.562-2.49 40.579 40.579 0 0 0-.482-1.652.216.216 0 0 1 .127-.03z",source:"https://hg.openjdk.java.net/duke/duke/file/ca00f100dafc/vector/Agent.svg",hex:"000000",license:{type:"BSD-3-Clause",url:"https://spdx.org/licenses/BSD-3-Clause"}},yh={title:"pandas",slug:"pandas",get svg(){return G+"pandas"+Y+this.path+K},path:"M16.922 0h2.623v18.104h-2.623zm-4.126 12.94h2.623v2.57h-2.623zm0-7.037h2.623v5.446h-2.623zm0 11.197h2.623v5.446h-2.623zM4.456 5.896h2.622V24H4.455zm4.213 2.559h2.623v2.57H8.67zm0 4.151h2.623v5.447H8.67zm0-11.187h2.623v5.446H8.67Z",source:"https://pandas.pydata.org/about/citing.html",hex:"150458",guidelines:"https://pandas.pydata.org/about/citing.html"},_h={title:"PHP",slug:"php",get svg(){return G+"PHP"+Y+this.path+K},path:"M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z",source:"https://php.net/download-logos.php",hex:"777BB4",license:{type:"CC-BY-SA-4.0",url:"https://spdx.org/licenses/CC-BY-SA-4.0"}},q1={title:"PostgreSQL",slug:"postgresql",get svg(){return G+"PostgreSQL"+Y+this.path+K},path:"M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z",source:"https://wiki.postgresql.org/wiki/Logo",hex:"4169E1",guidelines:"https://www.postgresql.org/about/policies/trademarks/"},kh={title:"Prettier",slug:"prettier",get svg(){return G+"Prettier"+Y+this.path+K},path:"M8.571 23.429A.571.571 0 0 1 8 24H2.286a.571.571 0 0 1 0-1.143H8c.316 0 .571.256.571.572zM8 20.57H6.857a.571.571 0 0 0 0 1.143H8a.571.571 0 0 0 0-1.143zm-5.714 1.143H4.57a.571.571 0 0 0 0-1.143H2.286a.571.571 0 0 0 0 1.143zM8 18.286H2.286a.571.571 0 0 0 0 1.143H8a.571.571 0 0 0 0-1.143zM16 16H5.714a.571.571 0 0 0 0 1.143H16A.571.571 0 0 0 16 16zM2.286 17.143h1.143a.571.571 0 0 0 0-1.143H2.286a.571.571 0 0 0 0 1.143zm17.143-3.429H16a.571.571 0 0 0 0 1.143h3.429a.571.571 0 0 0 0-1.143zM9.143 14.857h4.571a.571.571 0 0 0 0-1.143H9.143a.571.571 0 0 0 0 1.143zm-6.857 0h4.571a.571.571 0 0 0 0-1.143H2.286a.571.571 0 0 0 0 1.143zM20.57 11.43H11.43a.571.571 0 0 0 0 1.142h9.142a.571.571 0 0 0 0-1.142zM9.714 12a.571.571 0 0 0-.571-.571H5.714a.571.571 0 0 0 0 1.142h3.429A.571.571 0 0 0 9.714 12zm-7.428.571h1.143a.571.571 0 0 0 0-1.142H2.286a.571.571 0 0 0 0 1.142zm19.428-3.428H16a.571.571 0 0 0 0 1.143h5.714a.571.571 0 0 0 0-1.143zM2.286 10.286H8a.571.571 0 0 0 0-1.143H2.286a.571.571 0 0 0 0 1.143zm13.143-2.857c0 .315.255.571.571.571h5.714a.571.571 0 0 0 0-1.143H16a.571.571 0 0 0-.571.572zm-8.572-.572a.571.571 0 0 0 0 1.143H8a.571.571 0 0 0 0-1.143H6.857zM2.286 8H4.57a.571.571 0 0 0 0-1.143H2.286a.571.571 0 0 0 0 1.143zm16.571-2.857c0 .315.256.571.572.571h1.142a.571.571 0 0 0 0-1.143H19.43a.571.571 0 0 0-.572.572zm-1.143 0a.571.571 0 0 0-.571-.572H12.57a.571.571 0 0 0 0 1.143h4.572a.571.571 0 0 0 .571-.571zm-15.428.571h8a.571.571 0 0 0 0-1.143h-8a.571.571 0 0 0 0 1.143zm5.143-2.857c0 .316.255.572.571.572h11.429a.571.571 0 0 0 0-1.143H8a.571.571 0 0 0-.571.571zm-5.143.572h3.428a.571.571 0 0 0 0-1.143H2.286a.571.571 0 0 0 0 1.143zm0-2.286H16A.571.571 0 0 0 16 0H2.286a.571.571 0 0 0 0 1.143z",source:"https://github.com/prettier/prettier-logo/blob/06997b307e0608ebee2044dafa0b9429d6b5a103/images/prettier-icon-clean-centred.svg",hex:"F7B93E"},jh={title:"Python",slug:"python",get svg(){return G+"Python"+Y+this.path+K},path:"M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z",source:"https://www.python.org/community/logos/",hex:"3776AB",guidelines:"https://www.python.org/community/logos/"},Sh={title:"PyTorch",slug:"pytorch",get svg(){return G+"PyTorch"+Y+this.path+K},path:"M12.005 0L4.952 7.053a9.865 9.865 0 000 14.022 9.866 9.866 0 0014.022 0c3.984-3.9 3.986-10.205.085-14.023l-1.744 1.743c2.904 2.905 2.904 7.634 0 10.538s-7.634 2.904-10.538 0-2.904-7.634 0-10.538l4.647-4.646.582-.665zm3.568 3.899a1.327 1.327 0 00-1.327 1.327 1.327 1.327 0 001.327 1.328A1.327 1.327 0 0016.9 5.226 1.327 1.327 0 0015.573 3.9z",source:"https://github.com/pytorch/pytorch.github.io/blob/8f083bd12192ca12d5e1c1f3d236f4831d823d8f/assets/images/logo.svg",hex:"EE4C2C",guidelines:"https://github.com/pytorch/pytorch.github.io/blob/381117ec296f002b2de475402ef29cca6c55e209/assets/brand-guidelines/PyTorch-Brand-Guidelines.pdf"},I1={title:"React",slug:"react",get svg(){return G+"React"+Y+this.path+K},path:"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z",source:"https://github.com/facebook/create-react-app/blob/282c03f9525fdf8061ffa1ec50dce89296d916bd/test/fixtures/relative-paths/src/logo.svg",hex:"61DAFB"},H1={title:"React Query",slug:"reactquery",get svg(){return G+"React Query"+Y+this.path+K},path:"M6.9297 13.6875c.164-.0938.375-.0352.4687.1328l.0625.1055c.4805.8515.9805 1.6601 1.5 2.4258.6133.9023 1.3047 1.8164 2.0743 2.7421a.3455.3455 0 0 1-.0391.4844l-.0742.0664c-2.543 2.2227-4.1914 2.664-4.9532 1.332-.746-1.3046-.4765-3.6718.8086-7.1093a.3437.3437 0 0 1 .1524-.1797ZM17.75 16.3008c.1836-.0313.3594.086.3945.2695l.0196.1016c.6289 3.2851.1875 4.9297-1.3243 4.9297-1.4804 0-3.3593-1.4024-5.6484-4.2032a.3271.3271 0 0 1-.0742-.2226c0-.1875.1562-.3399.3437-.3399h.1211a32.9838 32.9838 0 0 0 2.8086-.0976c1.0703-.086 2.1914-.2305 3.3594-.4375zm.871-6.9766a.3528.3528 0 0 1 .4454-.211l.1016.0352c3.2617 1.1094 4.5039 2.332 3.7187 3.6641-.7656 1.3047-2.9922 2.254-6.6836 2.8477-.082.0117-.168-.004-.2383-.047-.168-.0976-.2265-.3085-.125-.4765l.0625-.1054c.504-.8438.957-1.6836 1.3672-2.5235.4766-.9883.9297-2.0508 1.3516-3.1836zM7.797 8.3398c.082-.0117.168.004.2383.047.168.0976.2265.3085.125.4765l-.0625.1054a34.0882 34.0882 0 0 0-1.3672 2.5235c-.4766.9883-.9297 2.0508-1.3516 3.1836a.3528.3528 0 0 1-.4453.211l-.1016-.0352c-3.2617-1.1094-4.5039-2.332-3.7187-3.6641.7656-1.3047 2.9922-2.254 6.6836-2.8477Zm5.2812-3.9843c2.543-2.2227 4.1914-2.664 4.9532-1.332.746 1.3046.4765 3.6718-.8086 7.1093a.3436.3436 0 0 1-.1524.1797c-.164.0938-.375.0352-.4687-.1328l-.0625-.1055c-.4805-.8515-.9805-1.6601-1.5-2.4258-.6133-.9023-1.3047-1.8164-2.0743-2.7421a.3455.3455 0 0 1 .0391-.4844Zm-5.793-2.082c1.4805 0 3.3633 1.4023 5.6485 4.203a.3488.3488 0 0 1 .0781.2188c-.0039.1914-.1562.3438-.3476.3438l-.1172-.004a34.5835 34.5835 0 0 0-2.8086.1016c-1.0742.086-2.1953.2305-3.3633.4375a.343.343 0 0 1-.3945-.2734l-.0196-.0977c-.629-3.2851-.1876-4.9297 1.3242-4.9297Zm2.8711 5.8124h3.6875a.638.638 0 0 1 .5508.3164l1.8477 3.2188a.6437.6437 0 0 1 0 .6289l-1.8477 3.2227a.638.638 0 0 1-.5507.3164h-3.6875c-.2266 0-.4375-.1211-.547-.3164L7.7579 12.25a.6437.6437 0 0 1 0-.629l1.8516-3.2187c.1093-.1953.3203-.3164.5468-.3164Zm3.2305.793a.638.638 0 0 1 .5508.3164l1.3906 2.4258a.6437.6437 0 0 1 0 .6289l-1.3906 2.4297a.638.638 0 0 1-.5508.3164h-2.7734c-.2266 0-.4375-.1211-.5469-.3164L8.672 12.25a.6437.6437 0 0 1 0-.629l1.3945-2.4257c.1094-.1953.3203-.3164.5469-.3164Zm-.4922.8672h-1.789c-.2266 0-.4336.1172-.547.3164l-.8983 1.5586a.6437.6437 0 0 0 0 .6289l.8984 1.5625a.6317.6317 0 0 0 .5469.3164h1.789a.6317.6317 0 0 0 .547-.3164l.8983-1.5625a.6437.6437 0 0 0 0-.629l-.8984-1.5585c-.1133-.1992-.3203-.3164-.5469-.3164Zm-.4765.8281c.2265 0 .4375.1211.5468.3164l.422.7305c.1132.1953.1132.4375 0 .6289l-.422.7344c-.1093.1953-.3203.3164-.5468.3164h-.836a.6317.6317 0 0 1-.5468-.3164l-.422-.7344c-.1132-.1914-.1132-.4336 0-.629l.422-.7304a.6317.6317 0 0 1 .5468-.3164zm-.418.8164a.548.548 0 0 0-.4727.2735c-.0976.168-.0976.375 0 .5468a.5444.5444 0 0 0 .4727.2696.5444.5444 0 0 0 .4727-.2696c.0976-.1718.0976-.3789 0-.5468A.548.548 0 0 0 12 11.3906Zm-4.4219.5469h.9805M18.9805 7.75c.3906-1.8945.4765-3.3438.2226-4.3984-.1484-.629-.4218-1.1368-.8398-1.5078-.4414-.3907-1-.582-1.625-.582-1.0352 0-2.1211.4726-3.2813 1.3671-.4726.3633-.9648.8047-1.4726 1.3164-.043-.0508-.086-.1015-.1367-.1445-1.4454-1.2852-2.6602-2.082-3.6993-2.3906-.6171-.1836-1.1953-.1993-1.7226-.0235-.5586.1875-1.004.5742-1.3164 1.1172-.5156.8945-.6524 2.0742-.461 3.5274.0782.5898.2149 1.2343.4024 1.9335a1.1187 1.1187 0 0 0-.2149.047C3.008 8.621 1.711 9.2694.9258 10.0155c-.4649.4414-.7695.9375-.8828 1.4805-.1133.5781 0 1.1562.3125 1.6992.5156.8945 1.4648 1.5977 2.8164 2.1563.543.2226 1.1562.4257 1.8437.6093a1.0227 1.0227 0 0 0-.0703.2266c-.3906 1.8906-.4765 3.3438-.2226 4.3945.1484.629.4257 1.1407.8398 1.5078.4414.3907 1 .582 1.625.582 1.0352 0 2.121-.4726 3.2813-1.3632.4765-.3711.9726-.8164 1.4882-1.336a1.2 1.2 0 0 0 .1953.2266c1.4454 1.2852 2.6602 2.082 3.6993 2.3906.6172.1836 1.1953.1993 1.7226.0235.5586-.1875 1.004-.5742 1.3164-1.1172.5157-.8945.6524-2.0742.461-3.5273-.082-.6133-.2227-1.2813-.4258-2.0118a1.2248 1.2248 0 0 0 .2383-.0468c1.828-.6094 3.125-1.2578 3.9101-2.004.4649-.4413.7696-.9374.8828-1.4804.1133-.5781 0-1.1563-.3125-1.6992-.5156-.8946-1.4648-1.5977-2.8164-2.1563-.5586-.2304-1.1953-.4414-1.9062-.625a.8647.8647 0 0 0 .0586-.1953z",source:"https://github.com/tannerlinsley/react-query/blob/9b5d18cd47a4c1454d6c8dd0f38280641c1dd5dd/docs/src/images/emblem-light.svg",hex:"FF4154"},Ch={title:"Redis",slug:"redis",get svg(){return G+"Redis"+Y+this.path+K},path:"M22.71 13.145c-1.66 2.092-3.452 4.483-7.038 4.483-3.203 0-4.397-2.825-4.48-5.12.701 1.484 2.073 2.685 4.214 2.63 4.117-.133 6.94-3.852 6.94-7.239 0-4.05-3.022-6.972-8.268-6.972-3.752 0-8.4 1.428-11.455 3.685C2.59 6.937 3.885 9.958 4.35 9.626c2.648-1.904 4.748-3.13 6.784-3.744C8.12 9.244.886 17.05 0 18.425c.1 1.261 1.66 4.648 2.424 4.648.232 0 .431-.133.664-.365a100.49 100.49 0 0 0 5.54-6.765c.222 3.104 1.748 6.898 6.014 6.898 3.819 0 7.604-2.756 9.33-8.965.2-.764-.73-1.361-1.261-.73zm-4.349-5.013c0 1.959-1.926 2.922-3.685 2.922-.941 0-1.664-.247-2.235-.568 1.051-1.592 2.092-3.225 3.21-4.973 1.972.334 2.71 1.43 2.71 2.619z",source:"https://redis.io/brand-guidelines",hex:"FF4438",guidelines:"https://redis.io/brand-guidelines"},Eh={title:"Redux",slug:"redux",get svg(){return G+"Redux"+Y+this.path+K},path:"M16.634 16.504c.87-.075 1.543-.84 1.5-1.754-.047-.914-.796-1.648-1.709-1.648h-.061a1.71 1.71 0 00-1.648 1.769c.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.005 4.795-1.603.838-3.296 1.154-4.944.93-1.378-.195-2.456-.81-3.116-1.799-.988-1.499-1.078-3.116-.255-4.734.6-1.17 1.499-2.023 2.099-2.443a9.96 9.96 0 01-.42-1.543C-.868 14.408-.416 18.752.932 20.805c1.004 1.498 3.057 2.456 5.304 2.456.6 0 1.23-.044 1.843-.194 3.897-.749 6.848-3.086 8.541-6.532zm5.348-3.746c-2.32-2.728-5.738-4.226-9.634-4.226h-.51c-.253-.554-.837-.899-1.498-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074a1.69 1.69 0 001.499-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.005 2.622 2.323 3.237 3.897.538 1.288.509 2.547-.045 3.597-.855 1.647-2.294 2.517-4.196 2.517-1.199 0-2.367-.375-2.967-.644-.36.298-.96.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.094-1.647 5.919-3.236.898-1.798.824-4.824-1.47-7.416zM6.49 17.042c.03.899.793 1.648 1.708 1.648h.06a1.688 1.688 0 001.648-1.768c0-.9-.779-1.647-1.693-1.647h-.06c-.06 0-.15 0-.226.029-1.243-2.098-1.768-4.347-1.572-6.772.12-1.828.72-3.417 1.797-4.735.9-1.124 2.593-1.68 3.747-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.45C17.741 3.197 14.686.62 11.764.62 9.02.62 6.49 2.613 5.47 5.535 4.077 9.43 4.991 13.177 6.7 16.174c-.15.195-.24.539-.21.868z",source:"https://github.com/reduxjs/redux/blob/abb5f892f7e46849e5ca9bc13e75cfbc944a71b6/logo/logo.svg",hex:"764ABC"},Nh={title:"Ruby",slug:"ruby",get svg(){return G+"Ruby"+Y+this.path+K},path:"M20.156.083c3.033.525 3.893 2.598 3.829 4.77L24 4.822 22.635 22.71 4.89 23.926h.016C3.433 23.864.15 23.729 0 19.139l1.645-3 2.819 6.586.503 1.172 2.805-9.144-.03.007.016-.03 9.255 2.956-1.396-5.431-.99-3.9 8.82-.569-.615-.51L16.5 2.114 20.159.073l-.003.01zM0 19.089zM5.13 5.073c3.561-3.533 8.157-5.621 9.922-3.84 1.762 1.777-.105 6.105-3.673 9.636-3.563 3.532-8.103 5.734-9.864 3.957-1.766-1.777.045-6.217 3.612-9.75l.003-.003z",source:"https://www.ruby-lang.org/en/about/logo/",hex:"CC342D",license:{type:"CC-BY-SA-2.5",url:"https://spdx.org/licenses/CC-BY-SA-2.5"}},zh={title:"Rust",slug:"rust",get svg(){return G+"Rust"+Y+this.path+K},path:"M23.8346 11.7033l-1.0073-.6236a13.7268 13.7268 0 00-.0283-.2936l.8656-.8069a.3483.3483 0 00-.1154-.578l-1.1066-.414a8.4958 8.4958 0 00-.087-.2856l.6904-.9587a.3462.3462 0 00-.2257-.5446l-1.1663-.1894a9.3574 9.3574 0 00-.1407-.2622l.49-1.0761a.3437.3437 0 00-.0274-.3361.3486.3486 0 00-.3006-.154l-1.1845.0416a6.7444 6.7444 0 00-.1873-.2268l.2723-1.153a.3472.3472 0 00-.417-.4172l-1.1532.2724a14.0183 14.0183 0 00-.2278-.1873l.0415-1.1845a.3442.3442 0 00-.49-.328l-1.076.491c-.0872-.0476-.1742-.0952-.2623-.1407l-.1903-1.1673A.3483.3483 0 0016.256.955l-.9597.6905a8.4867 8.4867 0 00-.2855-.086l-.414-1.1066a.3483.3483 0 00-.5781-.1154l-.8069.8666a9.2936 9.2936 0 00-.2936-.0284L12.2946.1683a.3462.3462 0 00-.5892 0l-.6236 1.0073a13.7383 13.7383 0 00-.2936.0284L9.9803.3374a.3462.3462 0 00-.578.1154l-.4141 1.1065c-.0962.0274-.1903.0567-.2855.086L7.744.955a.3483.3483 0 00-.5447.2258L7.009 2.348a9.3574 9.3574 0 00-.2622.1407l-1.0762-.491a.3462.3462 0 00-.49.328l.0416 1.1845a7.9826 7.9826 0 00-.2278.1873L3.8413 3.425a.3472.3472 0 00-.4171.4171l.2713 1.1531c-.0628.075-.1255.1509-.1863.2268l-1.1845-.0415a.3462.3462 0 00-.328.49l.491 1.0761a9.167 9.167 0 00-.1407.2622l-1.1662.1894a.3483.3483 0 00-.2258.5446l.6904.9587a13.303 13.303 0 00-.087.2855l-1.1065.414a.3483.3483 0 00-.1155.5781l.8656.807a9.2936 9.2936 0 00-.0283.2935l-1.0073.6236a.3442.3442 0 000 .5892l1.0073.6236c.008.0982.0182.1964.0283.2936l-.8656.8079a.3462.3462 0 00.1155.578l1.1065.4141c.0273.0962.0567.1914.087.2855l-.6904.9587a.3452.3452 0 00.2268.5447l1.1662.1893c.0456.088.0922.1751.1408.2622l-.491 1.0762a.3462.3462 0 00.328.49l1.1834-.0415c.0618.0769.1235.1528.1873.2277l-.2713 1.1541a.3462.3462 0 00.4171.4161l1.153-.2713c.075.0638.151.1255.2279.1863l-.0415 1.1845a.3442.3442 0 00.49.327l1.0761-.49c.087.0486.1741.0951.2622.1407l.1903 1.1662a.3483.3483 0 00.5447.2268l.9587-.6904a9.299 9.299 0 00.2855.087l.414 1.1066a.3452.3452 0 00.5781.1154l.8079-.8656c.0972.0111.1954.0203.2936.0294l.6236 1.0073a.3472.3472 0 00.5892 0l.6236-1.0073c.0982-.0091.1964-.0183.2936-.0294l.8069.8656a.3483.3483 0 00.578-.1154l.4141-1.1066a8.4626 8.4626 0 00.2855-.087l.9587.6904a.3452.3452 0 00.5447-.2268l.1903-1.1662c.088-.0456.1751-.0931.2622-.1407l1.0762.49a.3472.3472 0 00.49-.327l-.0415-1.1845a6.7267 6.7267 0 00.2267-.1863l1.1531.2713a.3472.3472 0 00.4171-.416l-.2713-1.1542c.0628-.0749.1255-.1508.1863-.2278l1.1845.0415a.3442.3442 0 00.328-.49l-.49-1.076c.0475-.0872.0951-.1742.1407-.2623l1.1662-.1893a.3483.3483 0 00.2258-.5447l-.6904-.9587.087-.2855 1.1066-.414a.3462.3462 0 00.1154-.5781l-.8656-.8079c.0101-.0972.0202-.1954.0283-.2936l1.0073-.6236a.3442.3442 0 000-.5892zm-6.7413 8.3551a.7138.7138 0 01.2986-1.396.714.714 0 11-.2997 1.396zm-.3422-2.3142a.649.649 0 00-.7715.5l-.3573 1.6685c-1.1035.501-2.3285.7795-3.6193.7795a8.7368 8.7368 0 01-3.6951-.814l-.3574-1.6684a.648.648 0 00-.7714-.499l-1.473.3158a8.7216 8.7216 0 01-.7613-.898h7.1676c.081 0 .1356-.0141.1356-.088v-2.536c0-.074-.0536-.0881-.1356-.0881h-2.0966v-1.6077h2.2677c.2065 0 1.1065.0587 1.394 1.2088.0901.3533.2875 1.5044.4232 1.8729.1346.413.6833 1.2381 1.2685 1.2381h3.5716a.7492.7492 0 00.1296-.0131 8.7874 8.7874 0 01-.8119.9526zM6.8369 20.024a.714.714 0 11-.2997-1.396.714.714 0 01.2997 1.396zM4.1177 8.9972a.7137.7137 0 11-1.304.5791.7137.7137 0 011.304-.579zm-.8352 1.9813l1.5347-.6824a.65.65 0 00.33-.8585l-.3158-.7147h1.2432v5.6025H3.5669a8.7753 8.7753 0 01-.2834-3.348zm6.7343-.5437V8.7836h2.9601c.153 0 1.0792.1772 1.0792.8697 0 .575-.7107.7815-1.2948.7815zm10.7574 1.4862c0 .2187-.008.4363-.0243.651h-.9c-.09 0-.1265.0586-.1265.1477v.413c0 .973-.5487 1.1846-1.0296 1.2382-.4576.0517-.9648-.1913-1.0275-.4717-.2704-1.5186-.7198-1.8436-1.4305-2.4034.8817-.5599 1.799-1.386 1.799-2.4915 0-1.1936-.819-1.9458-1.3769-2.3153-.7825-.5163-1.6491-.6195-1.883-.6195H5.4682a8.7651 8.7651 0 014.907-2.7699l1.0974 1.151a.648.648 0 00.9182.0213l1.227-1.1743a8.7753 8.7753 0 016.0044 4.2762l-.8403 1.8982a.652.652 0 00.33.8585l1.6178.7188c.0283.2875.0425.577.0425.8717zm-9.3006-9.5993a.7128.7128 0 11.984 1.0316.7137.7137 0 01-.984-1.0316zm8.3389 6.71a.7107.7107 0 01.9395-.3625.7137.7137 0 11-.9405.3635z",source:"https://www.rust-lang.org",hex:"000000",guidelines:"https://www.rust-lang.org/policies/media-guide",license:{type:"CC-BY-SA-4.0",url:"https://spdx.org/licenses/CC-BY-SA-4.0"}},V1={title:"Sass",slug:"sass",get svg(){return G+"Sass"+Y+this.path+K},path:"M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM9.615 15.998c.175.645.156 1.248-.024 1.792l-.065.18c-.024.061-.052.12-.078.176-.14.29-.326.56-.555.81-.698.759-1.672 1.047-2.09.805-.45-.262-.226-1.335.584-2.19.871-.918 2.12-1.509 2.12-1.509v-.003l.108-.061zm9.911-10.861c-.542-2.133-4.077-2.834-7.422-1.645-1.989.707-4.144 1.818-5.693 3.267C4.568 8.48 4.275 9.98 4.396 10.607c.427 2.211 3.457 3.657 4.703 4.73v.006c-.367.18-3.056 1.529-3.686 2.925-.675 1.47.105 2.521.615 2.655 1.575.436 3.195-.36 4.065-1.649.84-1.261.766-2.881.404-3.676.496-.135 1.08-.195 1.83-.104 2.101.24 2.521 1.56 2.43 2.1-.09.539-.523.854-.674.944-.15.091-.195.12-.181.181.015.09.091.09.21.075.165-.03 1.096-.45 1.141-1.471.045-1.29-1.186-2.729-3.375-2.7-.9.016-1.471.091-1.875.256-.03-.045-.061-.075-.105-.105-1.35-1.455-3.855-2.475-3.75-4.41.03-.705.285-2.564 4.8-4.814 3.705-1.846 6.661-1.335 7.171-.21.733 1.604-1.576 4.59-5.431 5.024-1.47.165-2.235-.404-2.431-.615-.209-.225-.239-.24-.314-.194-.12.06-.045.255 0 .375.12.3.585.825 1.396 1.095.704.225 2.43.359 4.5-.45 2.324-.899 4.139-3.405 3.614-5.505l.073.067z",source:"https://sass-lang.com/styleguide/brand",hex:"CC6699",guidelines:"https://sass-lang.com/styleguide/brand",license:{type:"CC-BY-NC-SA-3.0",url:"https://spdx.org/licenses/CC-BY-NC-SA-3.0"}},W1={title:"sharp",slug:"sharp",get svg(){return G+"sharp"+Y+this.path+K},path:"M14.2209.0875v5.9613l-3.7433.5012v3.5233l3.7433-.5012v3.5735l3.492-.4672V9.1047L24 8.2634l-.4631-3.4613-5.824.7794V.0875zM6.287 1.145v5.9618L0 7.9483l.4634 3.4613 5.8514-.7834 3.4644-.4637V1.145zm3.5198 9.7185l-3.492.4675v3.578l-6.183.8276.4633 3.4613 5.8239-.7796v5.4942h3.492v-5.962l3.6114-.4834V13.944l-3.7156.4973zm13.73 1.7405l-5.824.779-3.492.4673v9.0179h3.492v-5.9618L24 16.0652Z",source:"https://github.com/lovell/sharp/blob/315f519e1dd9adca0678e94a5ed0492cb5e0aae4/docs/image/sharp-logo-mono.svg",hex:"99CC00"},Mh={title:"Socket.io",slug:"socketdotio",get svg(){return G+"Socket.io"+Y+this.path+K},path:"M11.9362.0137a12.1694 12.1694 0 00-2.9748.378C4.2816 1.5547.5678 5.7944.0918 10.6012c-.59 4.5488 1.7079 9.2856 5.6437 11.6345 3.8608 2.4179 9.0926 2.3199 12.8734-.223 3.3969-2.206 5.5118-6.2277 5.3858-10.2845-.058-4.0159-2.31-7.9167-5.7588-9.9796C16.354.5876 14.1431.0047 11.9362.0137zm-.063 1.696c4.9448-.007 9.7886 3.8137 10.2815 8.9245.945 5.6597-3.7528 11.4125-9.4875 11.5795-5.4538.544-10.7245-4.0798-10.8795-9.5566-.407-4.4338 2.5159-8.8346 6.6977-10.2995a9.1126 9.1126 0 013.3878-.647zm5.0908 3.2248c-2.6869 2.0849-5.2598 4.3078-7.8886 6.4567 1.2029.017 2.4118.016 3.6208.01 1.41-2.165 2.8589-4.3008 4.2678-6.4667zm-5.6647 7.6536c-1.41 2.166-2.86 4.3088-4.2699 6.4737 2.693-2.0799 5.2548-4.3198 7.9017-6.4557a255.4132 255.4132 0 00-3.6318-.018z",source:"https://socket.io",hex:"010101"},U1={title:"Spring",slug:"spring",get svg(){return G+"Spring"+Y+this.path+K},path:"M21.8537 1.4158a10.4504 10.4504 0 0 1-1.284 2.2471A11.9666 11.9666 0 1 0 3.8518 20.7757l.4445.3951a11.9543 11.9543 0 0 0 19.6316-8.2971c.3457-3.0126-.568-6.8649-2.0743-11.458zM5.5805 20.8745a1.0174 1.0174 0 1 1-.1482-1.4323 1.0396 1.0396 0 0 1 .1482 1.4323zm16.1991-3.5806c-2.9385 3.9263-9.2601 2.5928-13.2852 2.7904 0 0-.7161.0494-1.4323.1481 0 0 .2717-.1234.6174-.2469 2.8398-.9877 4.1732-1.1853 5.9018-2.0743 3.2349-1.6545 6.4698-5.2844 7.1118-9.0379-1.2347 3.6053-4.9881 6.7167-8.3959 7.9761-2.3459.8643-6.5685 1.7039-6.5685 1.7039l-.1729-.0988c-2.8645-1.4076-2.9632-7.6304 2.2718-9.6306 2.2966-.889 4.4696-.395 6.9637-.9877 2.6422-.6174 5.7043-2.5929 6.939-5.1857 1.3828 4.1732 3.062 10.643.0493 14.6434z",source:"https://spring.io/trademarks",hex:"6DB33F"},Lh={title:"Spring Boot",slug:"springboot",get svg(){return G+"Spring Boot"+Y+this.path+K},path:"m23.693 10.7058-4.73-8.1844c-.4094-.7106-1.4166-1.2942-2.2402-1.2942H7.2725c-.819 0-1.8308.5836-2.2402 1.2942L.307 10.7058c-.4095.7106-.4095 1.873 0 2.5837l4.7252 8.189c.4094.7107 1.4166 1.2943 2.2402 1.2943h9.455c.819 0 1.826-.5836 2.2402-1.2942l4.7252-8.189c.4095-.7107.4095-1.8732 0-2.5838zM10.9763 5.7547c0-.5365.4377-.9742.9742-.9742s.9742.4377.9742.9742v5.8217c0 .5366-.4377.9742-.9742.9742s-.9742-.4376-.9742-.9742zm.9742 12.4294c-3.6427 0-6.6077-2.965-6.6077-6.6077.0047-2.0896.993-4.0521 2.6685-5.304a.8657.8657 0 0 1 1.2142.1788.8657.8657 0 0 1-.1788 1.2143c-2.1602 1.6048-2.612 4.6592-1.0072 6.8194 1.6049 2.1603 4.6593 2.612 6.8195 1.0072 1.2378-.9177 1.9673-2.372 1.9673-3.9157a4.8972 4.8972 0 0 0-1.9861-3.925c-.386-.2824-.466-.8284-.1836-1.2143.2824-.386.8283-.466 1.2143-.1835 1.6895 1.2471 2.6826 3.2238 2.6873 5.3228 0 3.6474-2.965 6.6077-6.6077 6.6077z",source:"https://spring.io/projects",hex:"6DB33F"},$h={title:"Spring Security",slug:"springsecurity",get svg(){return G+"Spring Security"+Y+this.path+K},path:"M20.59 2.066 11.993 0 3.41 2.066v6.612h4.557a3.804 3.804 0 0 0 0 .954H3.41v3.106C3.41 19.867 11.994 24 11.994 24s8.582-4.133 8.582-11.258V9.635h-4.545a3.616 3.616 0 0 0 0-.954h4.558zM12 12.262h-.006a3.109 3.109 0 1 1 .006 0zm-.006-4.579a.804.804 0 0 0-.37 1.52v.208l.238.237v.159l.159.159v.159l-.14.14.15.246v.159l-.16.189.223.222.246-.246V9.218a.804.804 0 0 0-.346-1.535zm0 .836a.299.299 0 1 1 .298-.299.299.299 0 0 1-.298.3z",source:"https://spring.io/projects",hex:"6DB33F"},Rh={title:"SQLite",slug:"sqlite",get svg(){return G+"SQLite"+Y+this.path+K},path:"M21.678.521c-1.032-.92-2.28-.55-3.513.544a8.71 8.71 0 0 0-.547.535c-2.109 2.237-4.066 6.38-4.674 9.544.237.48.422 1.093.544 1.561a13.044 13.044 0 0 1 .164.703s-.019-.071-.096-.296l-.05-.146a1.689 1.689 0 0 0-.033-.08c-.138-.32-.518-.995-.686-1.289-.143.423-.27.818-.376 1.176.484.884.778 2.4.778 2.4s-.025-.099-.147-.442c-.107-.303-.644-1.244-.772-1.464-.217.804-.304 1.346-.226 1.478.152.256.296.698.422 1.186.286 1.1.485 2.44.485 2.44l.017.224a22.41 22.41 0 0 0 .056 2.748c.095 1.146.273 2.13.5 2.657l.155-.084c-.334-1.038-.47-2.399-.41-3.967.09-2.398.642-5.29 1.661-8.304 1.723-4.55 4.113-8.201 6.3-9.945-1.993 1.8-4.692 7.63-5.5 9.788-.904 2.416-1.545 4.684-1.931 6.857.666-2.037 2.821-2.912 2.821-2.912s1.057-1.304 2.292-3.166c-.74.169-1.955.458-2.362.629-.6.251-.762.337-.762.337s1.945-1.184 3.613-1.72C21.695 7.9 24.195 2.767 21.678.521m-18.573.543A1.842 1.842 0 0 0 1.27 2.9v16.608a1.84 1.84 0 0 0 1.835 1.834h9.418a22.953 22.953 0 0 1-.052-2.707c-.006-.062-.011-.141-.016-.2a27.01 27.01 0 0 0-.473-2.378c-.121-.47-.275-.898-.369-1.057-.116-.197-.098-.31-.097-.432 0-.12.015-.245.037-.386a9.98 9.98 0 0 1 .234-1.045l.217-.028c-.017-.035-.014-.065-.031-.097l-.041-.381a32.8 32.8 0 0 1 .382-1.194l.2-.019c-.008-.016-.01-.038-.018-.053l-.043-.316c.63-3.28 2.587-7.443 4.8-9.791.066-.069.133-.128.198-.194Z",source:"https://github.com/sqlite/sqlite/blob/43e862723ec680542ca6f608f9963c0993dd7324/art/sqlite370.eps",hex:"003B57"},Th={title:"Storybook",slug:"storybook",get svg(){return G+"Storybook"+Y+this.path+K},path:"M16.71.243l-.12 2.71a.18.18 0 00.29.15l1.06-.8.9.7a.18.18 0 00.28-.14l-.1-2.76 1.33-.1a1.2 1.2 0 011.279 1.2v21.596a1.2 1.2 0 01-1.26 1.2l-16.096-.72a1.2 1.2 0 01-1.15-1.16l-.75-19.797a1.2 1.2 0 011.13-1.27L16.7.222zM13.64 9.3c0 .47 3.16.24 3.59-.08 0-3.2-1.72-4.89-4.859-4.89-3.15 0-4.899 1.72-4.899 4.29 0 4.45 5.999 4.53 5.999 6.959 0 .7-.32 1.1-1.05 1.1-.96 0-1.35-.49-1.3-2.16 0-.36-3.649-.48-3.769 0-.27 4.03 2.23 5.2 5.099 5.2 2.79 0 4.969-1.49 4.969-4.18 0-4.77-6.099-4.64-6.099-6.999 0-.97.72-1.1 1.13-1.1.45 0 1.25.07 1.19 1.87z",source:"https://github.com/storybookjs/brand/tree/6f4d67f65f8275c53c310a73a8da6c6e96c8488c",hex:"FF4785",license:{type:"MIT",url:"https://spdx.org/licenses/MIT"}},Ah={title:"Supabase",slug:"supabase",get svg(){return G+"Supabase"+Y+this.path+K},path:"M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z",source:"https://github.com/supabase/supabase/blob/4031a7549f5d46da7bc79c01d56be4177dc7c114/packages/common/assets/images/supabase-logo-wordmark--light.svg",hex:"3FCF8E"},Dh={title:"Svelte",slug:"svelte",get svg(){return G+"Svelte"+Y+this.path+K},path:"M10.354 21.125a4.44 4.44 0 0 1-4.765-1.767 4.109 4.109 0 0 1-.703-3.107 3.898 3.898 0 0 1 .134-.522l.105-.321.287.21a7.21 7.21 0 0 0 2.186 1.092l.208.063-.02.208a1.253 1.253 0 0 0 .226.83 1.337 1.337 0 0 0 1.435.533 1.231 1.231 0 0 0 .343-.15l5.59-3.562a1.164 1.164 0 0 0 .524-.778 1.242 1.242 0 0 0-.211-.937 1.338 1.338 0 0 0-1.435-.533 1.23 1.23 0 0 0-.343.15l-2.133 1.36a4.078 4.078 0 0 1-1.135.499 4.44 4.44 0 0 1-4.765-1.766 4.108 4.108 0 0 1-.702-3.108 3.855 3.855 0 0 1 1.742-2.582l5.589-3.563a4.072 4.072 0 0 1 1.135-.499 4.44 4.44 0 0 1 4.765 1.767 4.109 4.109 0 0 1 .703 3.107 3.943 3.943 0 0 1-.134.522l-.105.321-.286-.21a7.204 7.204 0 0 0-2.187-1.093l-.208-.063.02-.207a1.255 1.255 0 0 0-.226-.831 1.337 1.337 0 0 0-1.435-.532 1.231 1.231 0 0 0-.343.15L8.62 9.368a1.162 1.162 0 0 0-.524.778 1.24 1.24 0 0 0 .211.937 1.338 1.338 0 0 0 1.435.533 1.235 1.235 0 0 0 .344-.151l2.132-1.36a4.067 4.067 0 0 1 1.135-.498 4.44 4.44 0 0 1 4.765 1.766 4.108 4.108 0 0 1 .702 3.108 3.857 3.857 0 0 1-1.742 2.583l-5.589 3.562a4.072 4.072 0 0 1-1.135.499m10.358-17.95C18.484-.015 14.082-.96 10.9 1.068L5.31 4.63a6.412 6.412 0 0 0-2.896 4.295 6.753 6.753 0 0 0 .666 4.336 6.43 6.43 0 0 0-.96 2.396 6.833 6.833 0 0 0 1.168 5.167c2.229 3.19 6.63 4.135 9.812 2.108l5.59-3.562a6.41 6.41 0 0 0 2.896-4.295 6.756 6.756 0 0 0-.665-4.336 6.429 6.429 0 0 0 .958-2.396 6.831 6.831 0 0 0-1.167-5.168Z",source:"https://github.com/sveltejs/branding/blob/c4dfca6743572087a6aef0e109ffe3d95596e86a/svelte-logo.svg",hex:"FF3E00"},Ph={title:"Swift",slug:"swift",get svg(){return G+"Swift"+Y+this.path+K},path:"M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z",source:"https://developer.apple.com/swift/resources/",hex:"F05138",guidelines:"https://developer.apple.com/swift/resources/"},G1={title:"Tailwind CSS",slug:"tailwindcss",get svg(){return G+"Tailwind CSS"+Y+this.path+K},path:"M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z",source:"https://tailwindcss.com/brand",hex:"06B6D4",guidelines:"https://tailwindcss.com/brand"},Fh={title:"TensorFlow",slug:"tensorflow",get svg(){return G+"TensorFlow"+Y+this.path+K},path:"M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.43 5.311l-.014-5.31L12.46 0v24l4.095-2.378V14.87l3.092 1.788-.018-4.618-3.074-1.756V7.603l6.168 3.564z",source:"https://www.tensorflow.org",hex:"FF6F00"},Oh={title:"Three.js",slug:"threedotjs",get svg(){return G+"Three.js"+Y+this.path+K},path:"M.38 0a.268.268 0 0 0-.256.332l2.894 11.716a.268.268 0 0 0 .01.04l2.89 11.708a.268.268 0 0 0 .447.128L23.802 7.15a.268.268 0 0 0-.112-.45l-5.784-1.667a.268.268 0 0 0-.123-.035L6.38 1.715a.268.268 0 0 0-.144-.04L.456.01A.268.268 0 0 0 .38 0zm.374.654L5.71 2.08 1.99 5.664zM6.61 2.34l4.864 1.4-3.65 3.515zm-.522.12l1.217 4.926-4.877-1.4zm6.28 1.538l4.878 1.404-3.662 3.53zm-.52.13l1.208 4.9-4.853-1.392zm6.3 1.534l4.947 1.424-3.715 3.574zm-.524.12l1.215 4.926-4.876-1.398zm-15.432.696l4.964 1.424-3.726 3.586zM8.047 8.15l4.877 1.4-3.66 3.527zm-.518.137l1.236 5.017-4.963-1.432zm6.274 1.535l4.965 1.425-3.73 3.586zm-.52.127l1.235 5.012-4.958-1.43zm-9.63 2.438l4.873 1.406-3.656 3.523zm5.854 1.687l4.863 1.403-3.648 3.51zm-.54.04l1.214 4.927-4.875-1.4zm-3.896 4.02l5.037 1.442-3.782 3.638z",source:"https://github.com/mrdoob/three.js/blob/a567b810cfcb7f6a03e4faea99f03c53081da477/files/icon.svg",hex:"000000"},Y1={title:"TypeScript",slug:"typescript",get svg(){return G+"TypeScript"+Y+this.path+K},path:"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z",source:"https://www.typescriptlang.org/branding",hex:"3178C6",guidelines:"https://www.typescriptlang.org/branding"},Bh={title:"Ubuntu",slug:"ubuntu",get svg(){return G+"Ubuntu"+Y+this.path+K},path:"M17.61.455a3.41 3.41 0 0 0-3.41 3.41 3.41 3.41 0 0 0 3.41 3.41 3.41 3.41 0 0 0 3.41-3.41 3.41 3.41 0 0 0-3.41-3.41zM12.92.8C8.923.777 5.137 2.941 3.148 6.451a4.5 4.5 0 0 1 .26-.007 4.92 4.92 0 0 1 2.585.737A8.316 8.316 0 0 1 12.688 3.6 4.944 4.944 0 0 1 13.723.834 11.008 11.008 0 0 0 12.92.8zm9.226 4.994a4.915 4.915 0 0 1-1.918 2.246 8.36 8.36 0 0 1-.273 8.303 4.89 4.89 0 0 1 1.632 2.54 11.156 11.156 0 0 0 .559-13.089zM3.41 7.932A3.41 3.41 0 0 0 0 11.342a3.41 3.41 0 0 0 3.41 3.409 3.41 3.41 0 0 0 3.41-3.41 3.41 3.41 0 0 0-3.41-3.41zm2.027 7.866a4.908 4.908 0 0 1-2.915.358 11.1 11.1 0 0 0 7.991 6.698 11.234 11.234 0 0 0 2.422.249 4.879 4.879 0 0 1-.999-2.85 8.484 8.484 0 0 1-.836-.136 8.304 8.304 0 0 1-5.663-4.32zm11.405.928a3.41 3.41 0 0 0-3.41 3.41 3.41 3.41 0 0 0 3.41 3.41 3.41 3.41 0 0 0 3.41-3.41 3.41 3.41 0 0 0-3.41-3.41z",source:"https://design.ubuntu.com/resources",hex:"E95420",guidelines:"https://design.ubuntu.com/brand"},qh={title:"Unity",slug:"unity",get svg(){return G+"Unity"+Y+this.path+K},path:"m12.9288 4.2939 3.7997 2.1929c.1366.077.1415.2905 0 .3675l-4.515 2.6076a.4192.4192 0 0 1-.4246 0L7.274 6.8543c-.139-.0745-.1415-.293 0-.3675l3.7972-2.193V0L1.3758 5.5977V16.793l3.7177-2.1456v-4.3858c-.0025-.1565.1813-.2682.318-.1838l4.5148 2.6076a.4252.4252 0 0 1 .2136.3676v5.2127c.0025.1565-.1813.2682-.3179.1838l-3.7996-2.1929-3.7178 2.1457L12 24l9.6954-5.5977-3.7178-2.1457-3.7996 2.1929c-.1341.082-.3229-.0248-.3179-.1838V13.053c0-.1565.087-.2956.2136-.3676l4.5149-2.6076c.134-.082.3228.0224.3179.1838v4.3858l3.7177 2.1456V5.5977L12.9288 0Z",source:"https://brand.unity.com",hex:"FFFFFF",guidelines:"https://unity.com/legal/branding-trademarks"},Ih={title:"Vercel",slug:"vercel",get svg(){return G+"Vercel"+Y+this.path+K},path:"m12 1.608 12 20.784H0Z",source:"https://vercel.com/geist/brands",hex:"000000",guidelines:"https://vercel.com/geist/brands"},Hh={title:"Vite",slug:"vite",get svg(){return G+"Vite"+Y+this.path+K},path:"M13.056 23.238a.57.57 0 0 1-1.02-.355v-5.202c0-.63-.512-1.143-1.144-1.143H5.148a.57.57 0 0 1-.464-.903l3.777-5.29c.54-.753 0-1.804-.93-1.804H.57a.574.574 0 0 1-.543-.746.6.6 0 0 1 .08-.157L5.008.78a.57.57 0 0 1 .467-.24h14.589a.57.57 0 0 1 .466.903l-3.778 5.29c-.54.755 0 1.806.93 1.806h5.745c.238 0 .424.138.513.322a.56.56 0 0 1-.063.603z",source:"https://github.com/voidzero-dev/community-design-resources/blob/55902097229cf01cf2a4ceb376f992f5cf306756/brand-assets/vite/vite-icon-color-bracketless.svg",hex:"9135FF"},Vh={title:"Vitest",slug:"vitest",get svg(){return G+"Vitest"+Y+this.path+K},path:"M11.545 23.3a.613.613 0 0 1-.895.197L.252 15.936A.61.61 0 0 1 0 15.439V6.325c0-.502.569-.792.975-.497l6.358 4.624c.594.433 1.432.25 1.793-.39L14.393.7a.62.62 0 0 1 .535-.314h8.455a.613.613 0 0 1 .537.916z",source:"https://github.com/voidzero-dev/community-design-resources/blob/55902097229cf01cf2a4ceb376f992f5cf306756/brand-assets/vitest/vitest-icon-color-bracketless.svg",hex:"00FF74"},K1={title:"Vue.js",slug:"vuedotjs",get svg(){return G+"Vue.js"+Y+this.path+K},path:"M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z",source:"https://github.com/vuejs/art/blob/a1c78b74569b70a25300925b4eacfefcc143b8f6/logo.svg",hex:"4FC08D",guidelines:"https://github.com/vuejs/art/blob/a1c78b74569b70a25300925b4eacfefcc143b8f6/README.md",license:{type:"CC-BY-NC-SA-4.0",url:"https://spdx.org/licenses/CC-BY-NC-SA-4.0"}},Wh={title:"Webpack",slug:"webpack",get svg(){return G+"Webpack"+Y+this.path+K},path:"M22.1987 18.498l-9.7699 5.5022v-4.2855l6.0872-3.3338 3.6826 2.117zm.6683-.6026V6.3884l-3.5752 2.0544v7.396zm-21.0657.6026l9.7699 5.5022v-4.2855L5.484 16.3809l-3.6826 2.117zm-.6683-.6026V6.3884l3.5751 2.0544v7.396zm.4183-12.2515l10.0199-5.644v4.1434L5.152 7.6586l-.0489.028zm20.8975 0l-10.02-5.644v4.1434l6.4192 3.5154.0489.028 3.5518-2.0427zm-10.8775 13.096l-6.0056-3.2873V8.9384l6.0054 3.4525v6.349zm.8575 0l6.0053-3.2873V8.9384l-6.0053 3.4525zM5.9724 8.1845l6.0287-3.3015L18.03 8.1845l-6.0288 3.4665z",source:"https://webpack.js.org/branding",hex:"8DD6F9",guidelines:"https://webpack.js.org/branding",license:{type:"custom",url:"https://js.foundation/about/governance/trademark-policy"}},Uh={html:"#E34F26",html5:"#E34F26",css:"#1572B6",css3:"#1572B6",javascript:"#F7DF1E",js:"#F7DF1E",typescript:"#3178C6",ts:"#3178C6",java:"#007396",kotlin:"#7F52FF",python:"#3776AB",go:"#00ADD8",golang:"#00ADD8",c:"#A8B9CC","c++":"#00599C",cpp:"#00599C","c#":"#512BD4",csharp:"#512BD4",php:"#777BB4",ruby:"#CC342D",swift:"#F05138",dart:"#0175C2",rust:"#000000",react:"#61DAFB",reactnative:"#61DAFB",vue:"#4FC08D",vuejs:"#4FC08D",nextjs:"#000000",nuxt:"#00DC82",angular:"#DD0031",svelte:"#FF3E00",vite:"#646CFF",webpack:"#8DD6F9",babel:"#F9DC3E",jquery:"#0769AD",tailwind:"#06B6D4",tailwindcss:"#06B6D4",bootstrap:"#7952B3",sass:"#CC6699",scss:"#CC6699",redux:"#764ABC",zustand:"#443E38",recoil:"#3578E5",mobx:"#FF9955",tanstackquery:"#FF4154",reactquery:"#FF4154",storybook:"#FF4785",threejs:"#000000",webgl:"#990000",electron:"#47848F",flutter:"#02569B",nodejs:"#339933",node:"#339933",express:"#000000",nestjs:"#E0234E",spring:"#6DB33F",springboot:"#6DB33F",springsecurity:"#6DB33F",jpa:"#6DB33F",django:"#092E20",flask:"#000000",fastapi:"#009688",laravel:"#FF2D20",graphql:"#E10098",socketio:"#010101",websocket:"#010101",mysql:"#4479A1",mariadb:"#003545",postgresql:"#4169E1",postgres:"#4169E1",mongodb:"#47A248",redis:"#DC382D",oracle:"#F80000",sqlite:"#003B57",firebase:"#FFCA28",supabase:"#3FCF8E",elasticsearch:"#005571",docker:"#2496ED",kubernetes:"#326CE5",k8s:"#326CE5",jenkins:"#D24939",aws:"#FF9900",awsec2:"#FF9900",awss3:"#569A31",awsrds:"#527FFF",awslambda:"#FF9900",gcp:"#4285F4",azure:"#0078D4",vercel:"#000000",netlify:"#00C7B7",heroku:"#430098",nginx:"#009639",apache:"#D22128",tomcat:"#F8DC75",linux:"#FCC624",ubuntu:"#E95420",git:"#F05032",github:"#181717",gitlab:"#FC6D26",githubactions:"#2088FF",jest:"#C21325",vitest:"#6E9F18",cypress:"#69D3A7",eslint:"#4B32C3",prettier:"#F7B93E",figma:"#F24E1E",notion:"#000000",slack:"#4A154B",jira:"#0052CC",confluence:"#172B4D",photoshop:"#31A8FF",illustrator:"#FF9A00",blender:"#F5792A",unity:"#000000",tensorflow:"#FF6F00",pytorch:"#EE4C2C",pandas:"#150458",numpy:"#013243",jupyter:"#F37626",anaconda:"#44A833"},Gh={html:P1,html5:P1,css:A1,css3:A1,javascript:F1,js:F1,typescript:Y1,ts:Y1,java:vh,kotlin:ih,python:jh,go:D1,golang:D1,c:A5,"c++":T1,cpp:T1,"c#":W1,csharp:W1,php:_h,ruby:Nh,swift:Ph,dart:F5,rust:zh,react:I1,reactnative:I1,vue:K1,vuejs:K1,nextjs:hh,nuxt:bh,angular:z5,svelte:Dh,vite:Hh,webpack:Wh,babel:$5,jquery:oh,tailwind:G1,tailwindcss:G1,bootstrap:T5,sass:V1,scss:V1,redux:Eh,tanstackquery:H1,reactquery:H1,storybook:Th,threejs:Oh,electron:I5,flutter:K5,nodejs:B1,node:B1,express:V5,nestjs:ph,spring:U1,springboot:Lh,springsecurity:$h,jpa:U1,django:O5,flask:Y5,fastapi:W5,laravel:lh,graphql:rh,socketio:Mh,mysql:uh,mariadb:dh,postgresql:q1,postgres:q1,mongodb:fh,redis:Ch,sqlite:Rh,firebase:G5,supabase:Ah,elasticsearch:q5,docker:B5,kubernetes:O1,k8s:O1,jenkins:nh,gcp:eh,vercel:Ih,netlify:mh,nginx:gh,apache:M5,tomcat:L5,linux:ch,ubuntu:Bh,git:Q5,github:X5,gitlab:J5,githubactions:Z5,jest:th,vitest:Vh,cypress:P5,eslint:H5,prettier:kh,figma:U5,notion:xh,jira:ah,confluence:D5,blender:R5,unity:qh,tensorflow:Fh,pytorch:Sh,pandas:yh,numpy:wh,jupyter:sh,anaconda:N5},Yh="#555555";function Lp(e){const r=parseInt(e.slice(1),16);return((r>>16&255)*299+(r>>8&255)*587+(r&255)*114)/255e3>.62}function Ps(e){var t;const r=String(e??"").toLowerCase().replace(/[\s._\-/]+/g,""),n=Uh[r]??Yh;return{bg:n,fg:Lp(n)?"#111111":"#ffffff",path:((t=Gh[r])==null?void 0:t.path)??null}}const $p=e=>String(e??"").split(/[·,/|]+/).map(r=>r.trim()).filter(Boolean),Rp={기획중:"#f59e0b",진행중:"#ef4444",완료:"#10b981",운영중:"#3b82f6",보류:"#6b7280"};[...Object.keys(Rp)];function Tp(e){const r=String(e??"").trim(),n=Rp[r];return n?{bg:n,fg:Lp(n)?"#111111":"#ffffff"}:null}const xa=function(e,r){let a=e;const o=$a[r];let s=null,l=0,c=null;const u=[],h={},f=function(w,v){l=a*4+17,s=function(g){const E=new Array(g);for(let N=0;N<g;N+=1){E[N]=new Array(g);for(let M=0;M<g;M+=1)E[N][M]=null}return E}(l),p(0,0),p(l-7,0),p(0,l-7),j(),_(),b(w,v),a>=7&&C(w),c==null&&(c=x(a,o,u)),d(c,v)},p=function(w,v){for(let g=-1;g<=7;g+=1)if(!(w+g<=-1||l<=w+g))for(let E=-1;E<=7;E+=1)v+E<=-1||l<=v+E||(0<=g&&g<=6&&(E==0||E==6)||0<=E&&E<=6&&(g==0||g==6)||2<=g&&g<=4&&2<=E&&E<=4?s[w+g][v+E]=!0:s[w+g][v+E]=!1)},k=function(){let w=0,v=0;for(let g=0;g<8;g+=1){f(!0,g);const E=Tn.getLostPoint(h);(g==0||w>E)&&(w=E,v=g)}return v},_=function(){for(let w=8;w<l-8;w+=1)s[w][6]==null&&(s[w][6]=w%2==0);for(let w=8;w<l-8;w+=1)s[6][w]==null&&(s[6][w]=w%2==0)},j=function(){const w=Tn.getPatternPosition(a);for(let v=0;v<w.length;v+=1)for(let g=0;g<w.length;g+=1){const E=w[v],N=w[g];if(s[E][N]==null)for(let M=-2;M<=2;M+=1)for(let T=-2;T<=2;T+=1)M==-2||M==2||T==-2||T==2||M==0&&T==0?s[E+M][N+T]=!0:s[E+M][N+T]=!1}},C=function(w){const v=Tn.getBCHTypeNumber(a);for(let g=0;g<18;g+=1){const E=!w&&(v>>g&1)==1;s[Math.floor(g/3)][g%3+l-8-3]=E}for(let g=0;g<18;g+=1){const E=!w&&(v>>g&1)==1;s[g%3+l-8-3][Math.floor(g/3)]=E}},b=function(w,v){const g=o<<3|v,E=Tn.getBCHTypeInfo(g);for(let N=0;N<15;N+=1){const M=!w&&(E>>N&1)==1;N<6?s[N][8]=M:N<8?s[N+1][8]=M:s[l-15+N][8]=M}for(let N=0;N<15;N+=1){const M=!w&&(E>>N&1)==1;N<8?s[8][l-N-1]=M:N<9?s[8][15-N-1+1]=M:s[8][15-N-1]=M}s[l-8][8]=!w},d=function(w,v){let g=-1,E=l-1,N=7,M=0;const T=Tn.getMaskFunction(v);for(let $=l-1;$>0;$-=2)for($==6&&($-=1);;){for(let P=0;P<2;P+=1)if(s[E][$-P]==null){let J=!1;M<w.length&&(J=(w[M]>>>N&1)==1),T(E,$-P)&&(J=!J),s[E][$-P]=J,N-=1,N==-1&&(M+=1,N=7)}if(E+=g,E<0||l<=E){E-=g,g=-g;break}}},m=function(w,v){let g=0,E=0,N=0;const M=new Array(v.length),T=new Array(v.length);for(let H=0;H<v.length;H+=1){const A=v[H].dataCount,B=v[H].totalCount-A;E=Math.max(E,A),N=Math.max(N,B),M[H]=new Array(A);for(let je=0;je<M[H].length;je+=1)M[H][je]=255&w.getBuffer()[je+g];g+=A;const Q=Tn.getErrorCorrectPolynomial(B),Z=mo(M[H],Q.getLength()-1).mod(Q);T[H]=new Array(Q.getLength()-1);for(let je=0;je<T[H].length;je+=1){const Se=je+Z.getLength()-T[H].length;T[H][je]=Se>=0?Z.getAt(Se):0}}let $=0;for(let H=0;H<v.length;H+=1)$+=v[H].totalCount;const P=new Array($);let J=0;for(let H=0;H<E;H+=1)for(let A=0;A<v.length;A+=1)H<M[A].length&&(P[J]=M[A][H],J+=1);for(let H=0;H<N;H+=1)for(let A=0;A<v.length;A+=1)H<T[A].length&&(P[J]=T[A][H],J+=1);return P},x=function(w,v,g){const E=Q1.getRSBlocks(w,v),N=X1();for(let T=0;T<g.length;T+=1){const $=g[T];N.put($.getMode(),4),N.put($.getLength(),Tn.getLengthInBits($.getMode(),w)),$.write(N)}let M=0;for(let T=0;T<E.length;T+=1)M+=E[T].dataCount;if(N.getLengthInBits()>M*8)throw"code length overflow. ("+N.getLengthInBits()+">"+M*8+")";for(N.getLengthInBits()+4<=M*8&&N.put(0,4);N.getLengthInBits()%8!=0;)N.putBit(!1);for(;!(N.getLengthInBits()>=M*8||(N.put(236,8),N.getLengthInBits()>=M*8));)N.put(17,8);return m(N,E)};h.addData=function(w,v){v=v||"Byte";let g=null;switch(v){case"Numeric":g=Kh(w);break;case"Alphanumeric":g=Qh(w);break;case"Byte":g=Xh(w);break;case"Kanji":g=Zh(w);break;default:throw"mode:"+v}u.push(g),c=null},h.isDark=function(w,v){if(w<0||l<=w||v<0||l<=v)throw w+","+v;return s[w][v]},h.getModuleCount=function(){return l},h.make=function(){if(a<1){let w=1;for(;w<40;w++){const v=Q1.getRSBlocks(w,o),g=X1();for(let N=0;N<u.length;N++){const M=u[N];g.put(M.getMode(),4),g.put(M.getLength(),Tn.getLengthInBits(M.getMode(),w)),M.write(g)}let E=0;for(let N=0;N<v.length;N++)E+=v[N].dataCount;if(g.getLengthInBits()<=E*8)break}a=w}f(!1,k())},h.createTableTag=function(w,v){w=w||2,v=typeof v>"u"?w*4:v;let g="";g+='<table style="',g+=" border-width: 0px; border-style: none;",g+=" border-collapse: collapse;",g+=" padding: 0px; margin: "+v+"px;",g+='">',g+="<tbody>";for(let E=0;E<h.getModuleCount();E+=1){g+="<tr>";for(let N=0;N<h.getModuleCount();N+=1)g+='<td style="',g+=" border-width: 0px; border-style: none;",g+=" border-collapse: collapse;",g+=" padding: 0px; margin: 0px;",g+=" width: "+w+"px;",g+=" height: "+w+"px;",g+=" background-color: ",g+=h.isDark(E,N)?"#000000":"#ffffff",g+=";",g+='"/>';g+="</tr>"}return g+="</tbody>",g+="</table>",g},h.createSvgTag=function(w,v,g,E){let N={};typeof arguments[0]=="object"&&(N=arguments[0],w=N.cellSize,v=N.margin,g=N.alt,E=N.title),w=w||2,v=typeof v>"u"?w*4:v,g=typeof g=="string"?{text:g}:g||{},g.text=g.text||null,g.id=g.text?g.id||"qrcode-description":null,E=typeof E=="string"?{text:E}:E||{},E.text=E.text||null,E.id=E.text?E.id||"qrcode-title":null;const M=h.getModuleCount()*w+v*2;let T,$,P,J,H="",A;for(A="l"+w+",0 0,"+w+" -"+w+",0 0,-"+w+"z ",H+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',H+=N.scalable?"":' width="'+M+'px" height="'+M+'px"',H+=' viewBox="0 0 '+M+" "+M+'" ',H+=' preserveAspectRatio="xMinYMin meet"',H+=E.text||g.text?' role="img" aria-labelledby="'+y([E.id,g.id].join(" ").trim())+'"':"",H+=">",H+=E.text?'<title id="'+y(E.id)+'">'+y(E.text)+"</title>":"",H+=g.text?'<description id="'+y(g.id)+'">'+y(g.text)+"</description>":"",H+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',H+='<path d="',P=0;P<h.getModuleCount();P+=1)for(J=P*w+v,T=0;T<h.getModuleCount();T+=1)h.isDark(P,T)&&($=T*w+v,H+="M"+$+","+J+A);return H+='" stroke="transparent" fill="black"/>',H+="</svg>",H},h.createDataURL=function(w,v){w=w||2,v=typeof v>"u"?w*4:v;const g=h.getModuleCount()*w+v*2,E=v,N=g-v;return ng(g,g,function(M,T){if(E<=M&&M<N&&E<=T&&T<N){const $=Math.floor((M-E)/w),P=Math.floor((T-E)/w);return h.isDark(P,$)?0:1}else return 1})},h.createImgTag=function(w,v,g){w=w||2,v=typeof v>"u"?w*4:v;const E=h.getModuleCount()*w+v*2;let N="";return N+="<img",N+=' src="',N+=h.createDataURL(w,v),N+='"',N+=' width="',N+=E,N+='"',N+=' height="',N+=E,N+='"',g&&(N+=' alt="',N+=y(g),N+='"'),N+="/>",N};const y=function(w){let v="";for(let g=0;g<w.length;g+=1){const E=w.charAt(g);switch(E){case"<":v+="&lt;";break;case">":v+="&gt;";break;case"&":v+="&amp;";break;case'"':v+="&quot;";break;default:v+=E;break}}return v},S=function(w){w=typeof w>"u"?1*2:w;const g=h.getModuleCount()*1+w*2,E=w,N=g-w;let M,T,$,P,J;const H={"██":"█","█ ":"▀"," █":"▄","  ":" "},A={"██":"▀","█ ":"▀"," █":" ","  ":" "};let B="";for(M=0;M<g;M+=2){for($=Math.floor((M-E)/1),P=Math.floor((M+1-E)/1),T=0;T<g;T+=1)J="█",E<=T&&T<N&&E<=M&&M<N&&h.isDark($,Math.floor((T-E)/1))&&(J=" "),E<=T&&T<N&&E<=M+1&&M+1<N&&h.isDark(P,Math.floor((T-E)/1))?J+=" ":J+="█",B+=w<1&&M+1>=N?A[J]:H[J];B+=`
`}return g%2&&w>0?B.substring(0,B.length-g-1)+Array(g+1).join("▀"):B.substring(0,B.length-1)};return h.createASCII=function(w,v){if(w=w||1,w<2)return S(v);w-=1,v=typeof v>"u"?w*2:v;const g=h.getModuleCount()*w+v*2,E=v,N=g-v;let M,T,$,P;const J=Array(w+1).join("██"),H=Array(w+1).join("  ");let A="",B="";for(M=0;M<g;M+=1){for($=Math.floor((M-E)/w),B="",T=0;T<g;T+=1)P=1,E<=T&&T<N&&E<=M&&M<N&&h.isDark($,Math.floor((T-E)/w))&&(P=0),B+=P?J:H;for($=0;$<w;$+=1)A+=B+`
`}return A.substring(0,A.length-1)},h.renderTo2dContext=function(w,v){v=v||2;const g=h.getModuleCount();for(let E=0;E<g;E++)for(let N=0;N<g;N++)w.fillStyle=h.isDark(E,N)?"black":"white",w.fillRect(N*v,E*v,v,v)},h};xa.stringToBytes=function(e){const r=[];for(let n=0;n<e.length;n+=1){const t=e.charCodeAt(n);r.push(t&255)}return r};xa.createStringToBytes=function(e,r){const n=function(){const a=eg(e),o=function(){const c=a.read();if(c==-1)throw"eof";return c};let s=0;const l={};for(;;){const c=a.read();if(c==-1)break;const u=o(),h=o(),f=o(),p=String.fromCharCode(c<<8|u),k=h<<8|f;l[p]=k,s+=1}if(s!=r)throw s+" != "+r;return l}(),t=63;return function(a){const o=[];for(let s=0;s<a.length;s+=1){const l=a.charCodeAt(s);if(l<128)o.push(l);else{const c=n[a.charAt(s)];typeof c=="number"?(c&255)==c?o.push(c):(o.push(c>>>8),o.push(c&255)):o.push(t)}}return o}};const dr={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},$a={L:1,M:0,Q:3,H:2},Rn={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},Tn=function(){const e=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],r=1335,n=7973,t=21522,a={},o=function(s){let l=0;for(;s!=0;)l+=1,s>>>=1;return l};return a.getBCHTypeInfo=function(s){let l=s<<10;for(;o(l)-o(r)>=0;)l^=r<<o(l)-o(r);return(s<<10|l)^t},a.getBCHTypeNumber=function(s){let l=s<<12;for(;o(l)-o(n)>=0;)l^=n<<o(l)-o(n);return s<<12|l},a.getPatternPosition=function(s){return e[s-1]},a.getMaskFunction=function(s){switch(s){case Rn.PATTERN000:return function(l,c){return(l+c)%2==0};case Rn.PATTERN001:return function(l,c){return l%2==0};case Rn.PATTERN010:return function(l,c){return c%3==0};case Rn.PATTERN011:return function(l,c){return(l+c)%3==0};case Rn.PATTERN100:return function(l,c){return(Math.floor(l/2)+Math.floor(c/3))%2==0};case Rn.PATTERN101:return function(l,c){return l*c%2+l*c%3==0};case Rn.PATTERN110:return function(l,c){return(l*c%2+l*c%3)%2==0};case Rn.PATTERN111:return function(l,c){return(l*c%3+(l+c)%2)%2==0};default:throw"bad maskPattern:"+s}},a.getErrorCorrectPolynomial=function(s){let l=mo([1],0);for(let c=0;c<s;c+=1)l=l.multiply(mo([1,An.gexp(c)],0));return l},a.getLengthInBits=function(s,l){if(1<=l&&l<10)switch(s){case dr.MODE_NUMBER:return 10;case dr.MODE_ALPHA_NUM:return 9;case dr.MODE_8BIT_BYTE:return 8;case dr.MODE_KANJI:return 8;default:throw"mode:"+s}else if(l<27)switch(s){case dr.MODE_NUMBER:return 12;case dr.MODE_ALPHA_NUM:return 11;case dr.MODE_8BIT_BYTE:return 16;case dr.MODE_KANJI:return 10;default:throw"mode:"+s}else if(l<41)switch(s){case dr.MODE_NUMBER:return 14;case dr.MODE_ALPHA_NUM:return 13;case dr.MODE_8BIT_BYTE:return 16;case dr.MODE_KANJI:return 12;default:throw"mode:"+s}else throw"type:"+l},a.getLostPoint=function(s){const l=s.getModuleCount();let c=0;for(let f=0;f<l;f+=1)for(let p=0;p<l;p+=1){let k=0;const _=s.isDark(f,p);for(let j=-1;j<=1;j+=1)if(!(f+j<0||l<=f+j))for(let C=-1;C<=1;C+=1)p+C<0||l<=p+C||j==0&&C==0||_==s.isDark(f+j,p+C)&&(k+=1);k>5&&(c+=3+k-5)}for(let f=0;f<l-1;f+=1)for(let p=0;p<l-1;p+=1){let k=0;s.isDark(f,p)&&(k+=1),s.isDark(f+1,p)&&(k+=1),s.isDark(f,p+1)&&(k+=1),s.isDark(f+1,p+1)&&(k+=1),(k==0||k==4)&&(c+=3)}for(let f=0;f<l;f+=1)for(let p=0;p<l-6;p+=1)s.isDark(f,p)&&!s.isDark(f,p+1)&&s.isDark(f,p+2)&&s.isDark(f,p+3)&&s.isDark(f,p+4)&&!s.isDark(f,p+5)&&s.isDark(f,p+6)&&(c+=40);for(let f=0;f<l;f+=1)for(let p=0;p<l-6;p+=1)s.isDark(p,f)&&!s.isDark(p+1,f)&&s.isDark(p+2,f)&&s.isDark(p+3,f)&&s.isDark(p+4,f)&&!s.isDark(p+5,f)&&s.isDark(p+6,f)&&(c+=40);let u=0;for(let f=0;f<l;f+=1)for(let p=0;p<l;p+=1)s.isDark(p,f)&&(u+=1);const h=Math.abs(100*u/l/l-50)/5;return c+=h*10,c},a}(),An=function(){const e=new Array(256),r=new Array(256);for(let t=0;t<8;t+=1)e[t]=1<<t;for(let t=8;t<256;t+=1)e[t]=e[t-4]^e[t-5]^e[t-6]^e[t-8];for(let t=0;t<255;t+=1)r[e[t]]=t;const n={};return n.glog=function(t){if(t<1)throw"glog("+t+")";return r[t]},n.gexp=function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return e[t]},n}(),mo=function(e,r){if(typeof e.length>"u")throw e.length+"/"+r;const n=function(){let a=0;for(;a<e.length&&e[a]==0;)a+=1;const o=new Array(e.length-a+r);for(let s=0;s<e.length-a;s+=1)o[s]=e[s+a];return o}(),t={};return t.getAt=function(a){return n[a]},t.getLength=function(){return n.length},t.multiply=function(a){const o=new Array(t.getLength()+a.getLength()-1);for(let s=0;s<t.getLength();s+=1)for(let l=0;l<a.getLength();l+=1)o[s+l]^=An.gexp(An.glog(t.getAt(s))+An.glog(a.getAt(l)));return mo(o,0)},t.mod=function(a){if(t.getLength()-a.getLength()<0)return t;const o=An.glog(t.getAt(0))-An.glog(a.getAt(0)),s=new Array(t.getLength());for(let l=0;l<t.getLength();l+=1)s[l]=t.getAt(l);for(let l=0;l<a.getLength();l+=1)s[l]^=An.gexp(An.glog(a.getAt(l))+o);return mo(s,0).mod(a)},t},Q1=function(){const e=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],r=function(a,o){const s={};return s.totalCount=a,s.dataCount=o,s},n={},t=function(a,o){switch(o){case $a.L:return e[(a-1)*4+0];case $a.M:return e[(a-1)*4+1];case $a.Q:return e[(a-1)*4+2];case $a.H:return e[(a-1)*4+3];default:return}};return n.getRSBlocks=function(a,o){const s=t(a,o);if(typeof s>"u")throw"bad rs block @ typeNumber:"+a+"/errorCorrectionLevel:"+o;const l=s.length/3,c=[];for(let u=0;u<l;u+=1){const h=s[u*3+0],f=s[u*3+1],p=s[u*3+2];for(let k=0;k<h;k+=1)c.push(r(f,p))}return c},n}(),X1=function(){const e=[];let r=0;const n={};return n.getBuffer=function(){return e},n.getAt=function(t){const a=Math.floor(t/8);return(e[a]>>>7-t%8&1)==1},n.put=function(t,a){for(let o=0;o<a;o+=1)n.putBit((t>>>a-o-1&1)==1)},n.getLengthInBits=function(){return r},n.putBit=function(t){const a=Math.floor(r/8);e.length<=a&&e.push(0),t&&(e[a]|=128>>>r%8),r+=1},n},Kh=function(e){const r=dr.MODE_NUMBER,n=e,t={};t.getMode=function(){return r},t.getLength=function(s){return n.length},t.write=function(s){const l=n;let c=0;for(;c+2<l.length;)s.put(a(l.substring(c,c+3)),10),c+=3;c<l.length&&(l.length-c==1?s.put(a(l.substring(c,c+1)),4):l.length-c==2&&s.put(a(l.substring(c,c+2)),7))};const a=function(s){let l=0;for(let c=0;c<s.length;c+=1)l=l*10+o(s.charAt(c));return l},o=function(s){if("0"<=s&&s<="9")return s.charCodeAt(0)-48;throw"illegal char :"+s};return t},Qh=function(e){const r=dr.MODE_ALPHA_NUM,n=e,t={};t.getMode=function(){return r},t.getLength=function(o){return n.length},t.write=function(o){const s=n;let l=0;for(;l+1<s.length;)o.put(a(s.charAt(l))*45+a(s.charAt(l+1)),11),l+=2;l<s.length&&o.put(a(s.charAt(l)),6)};const a=function(o){if("0"<=o&&o<="9")return o.charCodeAt(0)-48;if("A"<=o&&o<="Z")return o.charCodeAt(0)-65+10;switch(o){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+o}};return t},Xh=function(e){const r=dr.MODE_8BIT_BYTE,n=xa.stringToBytes(e),t={};return t.getMode=function(){return r},t.getLength=function(a){return n.length},t.write=function(a){for(let o=0;o<n.length;o+=1)a.put(n[o],8)},t},Zh=function(e){const r=dr.MODE_KANJI,n=xa.stringToBytes;(function(o,s){const l=n(o);if(l.length!=2||(l[0]<<8|l[1])!=s)throw"sjis not supported."})("友",38726);const t=n(e),a={};return a.getMode=function(){return r},a.getLength=function(o){return~~(t.length/2)},a.write=function(o){const s=t;let l=0;for(;l+1<s.length;){let c=(255&s[l])<<8|255&s[l+1];if(33088<=c&&c<=40956)c-=33088;else if(57408<=c&&c<=60351)c-=49472;else throw"illegal char at "+(l+1)+"/"+c;c=(c>>>8&255)*192+(c&255),o.put(c,13),l+=2}if(l<s.length)throw"illegal char at "+(l+1)},a},Ap=function(){const e=[],r={};return r.writeByte=function(n){e.push(n&255)},r.writeShort=function(n){r.writeByte(n),r.writeByte(n>>>8)},r.writeBytes=function(n,t,a){t=t||0,a=a||n.length;for(let o=0;o<a;o+=1)r.writeByte(n[o+t])},r.writeString=function(n){for(let t=0;t<n.length;t+=1)r.writeByte(n.charCodeAt(t))},r.toByteArray=function(){return e},r.toString=function(){let n="";n+="[";for(let t=0;t<e.length;t+=1)t>0&&(n+=","),n+=e[t];return n+="]",n},r},Jh=function(){let e=0,r=0,n=0,t="";const a={},o=function(l){t+=String.fromCharCode(s(l&63))},s=function(l){if(l<0)throw"n:"+l;if(l<26)return 65+l;if(l<52)return 97+(l-26);if(l<62)return 48+(l-52);if(l==62)return 43;if(l==63)return 47;throw"n:"+l};return a.writeByte=function(l){for(e=e<<8|l&255,r+=8,n+=1;r>=6;)o(e>>>r-6),r-=6},a.flush=function(){if(r>0&&(o(e<<6-r),e=0,r=0),n%3!=0){const l=3-n%3;for(let c=0;c<l;c+=1)t+="="}},a.toString=function(){return t},a},eg=function(e){const r=e;let n=0,t=0,a=0;const o={};o.read=function(){for(;a<8;){if(n>=r.length){if(a==0)return-1;throw"unexpected end of file./"+a}const c=r.charAt(n);if(n+=1,c=="=")return a=0,-1;if(c.match(/^\s$/))continue;t=t<<6|s(c.charCodeAt(0)),a+=6}const l=t>>>a-8&255;return a-=8,l};const s=function(l){if(65<=l&&l<=90)return l-65;if(97<=l&&l<=122)return l-97+26;if(48<=l&&l<=57)return l-48+52;if(l==43)return 62;if(l==47)return 63;throw"c:"+l};return o},rg=function(e,r){const n=e,t=r,a=new Array(e*r),o={};o.setPixel=function(u,h,f){a[h*n+u]=f},o.write=function(u){u.writeString("GIF87a"),u.writeShort(n),u.writeShort(t),u.writeByte(128),u.writeByte(0),u.writeByte(0),u.writeByte(0),u.writeByte(0),u.writeByte(0),u.writeByte(255),u.writeByte(255),u.writeByte(255),u.writeString(","),u.writeShort(0),u.writeShort(0),u.writeShort(n),u.writeShort(t),u.writeByte(0);const h=2,f=l(h);u.writeByte(h);let p=0;for(;f.length-p>255;)u.writeByte(255),u.writeBytes(f,p,255),p+=255;u.writeByte(f.length-p),u.writeBytes(f,p,f.length-p),u.writeByte(0),u.writeString(";")};const s=function(u){const h=u;let f=0,p=0;const k={};return k.write=function(_,j){if(_>>>j)throw"length over";for(;f+j>=8;)h.writeByte(255&(_<<f|p)),j-=8-f,_>>>=8-f,p=0,f=0;p=_<<f|p,f=f+j},k.flush=function(){f>0&&h.writeByte(p)},k},l=function(u){const h=1<<u,f=(1<<u)+1;let p=u+1;const k=c();for(let d=0;d<h;d+=1)k.add(String.fromCharCode(d));k.add(String.fromCharCode(h)),k.add(String.fromCharCode(f));const _=Ap(),j=s(_);j.write(h,p);let C=0,b=String.fromCharCode(a[C]);for(C+=1;C<a.length;){const d=String.fromCharCode(a[C]);C+=1,k.contains(b+d)?b=b+d:(j.write(k.indexOf(b),p),k.size()<4095&&(k.size()==1<<p&&(p+=1),k.add(b+d)),b=d)}return j.write(k.indexOf(b),p),j.write(f,p),j.flush(),_.toByteArray()},c=function(){const u={};let h=0;const f={};return f.add=function(p){if(f.contains(p))throw"dup key:"+p;u[p]=h,h+=1},f.size=function(){return h},f.indexOf=function(p){return u[p]},f.contains=function(p){return typeof u[p]<"u"},f};return o},ng=function(e,r,n){const t=rg(e,r);for(let l=0;l<r;l+=1)for(let c=0;c<e;c+=1)t.setPixel(c,l,n(c,l));const a=Ap();t.write(a);const o=Jh(),s=a.toByteArray();for(let l=0;l<s.length;l+=1)o.writeByte(s[l]);return o.flush(),"data:image/gif;base64,"+o};xa.stringToBytes;function Dp(e,r=2){const n=String(e??"").trim();if(!n)return null;let t;try{t=xa(0,"M"),t.addData(n),t.make()}catch{return null}const a=t.getModuleCount(),o=a+r*2;let s="";for(let l=0;l<a;l++)for(let c=0;c<a;c++)t.isDark(l,c)&&(s+=`M${c+r},${l+r}h1v1h-1z`);return`<svg class="wf-qr" viewBox="0 0 ${o} ${o}" role="img" aria-label="연락처 QR 코드" shape-rendering="crispEdges"><path d="${s}" fill="currentColor"/></svg>`}const wn=e=>String(e??"").replace(/([\\,;])/g,"\\$1").replace(/\r?\n/g,"\\n");function Bl(e={}){const r=["BEGIN:VCARD","VERSION:3.0"],n=e.name||"";return n&&(r.push(`N:${wn(n)};;;;`),r.push(`FN:${wn(n)}`)),e.nameEn&&r.push(`NICKNAME:${wn(e.nameEn)}`),e.title&&r.push(`TITLE:${wn(e.title)}`),e.org&&r.push(`ORG:${wn(e.org)}`),e.phone&&r.push(`TEL;TYPE=CELL:${wn(e.phone)}`),e.email&&r.push(`EMAIL;TYPE=INTERNET:${wn(e.email)}`),e.location&&r.push(`ADR;TYPE=WORK:;;${wn(e.location)};;;;`),e.site&&r.push(`URL:${wn(e.site)}`),r.push("END:VCARD"),r.join(`\r
`)}const Pp={person:"M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-5 0-9 2.5-9 5.5V22h18v-2.5c0-3-4-5.5-9-5.5z",phone:"M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.7 21 3 13.3 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z",mail:"M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z",pin:"M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z",globe:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM4.3 14a8 8 0 0 1 0-4h3.3a17 17 0 0 0 0 4H4.3zm.8 2h2.9c.3 1.3.8 2.5 1.4 3.6A8 8 0 0 1 5.1 16zm2.9-8H5.1a8 8 0 0 1 4.3-3.6A15.7 15.7 0 0 0 8 8zm4 12c-.8-1.2-1.4-2.5-1.8-4h3.6c-.4 1.5-1 2.8-1.8 4zm2.2-6H9.8a15 15 0 0 1 0-4h4.4a15 15 0 0 1 0 4zM12 4c.8 1.2 1.4 2.5 1.8 4h-3.6c.4-1.5 1-2.8 1.8-4zm2.6 15.6c.6-1.1 1.1-2.3 1.4-3.6h2.9a8 8 0 0 1-4.3 3.6zM16.4 14a17 17 0 0 0 0-4h3.3a8 8 0 0 1 0 4h-3.3zm-.4-6a15.7 15.7 0 0 0-1.4-3.6A8 8 0 0 1 18.9 8h-2.9z"},Fp={콰이엇:"quiet","셸(터미널)":"shell",그리드:"grid",나이트:"night",시그널:"signal",레터프레스:"letter",스위스:"swiss",신택스:"syntax","사이드 라인":"sideline","가운데 정렬":"center","좌우 분할":"split","다크 카드":"dark","매니페스트 (공책)":"manifest","스키마 (청사진)":"schema","컬러 필드 (2분할)":"field","한글 (넓은 여백)":"hangeul","디렉터리 (3열 정보)":"directory","포멀 (기업)":"formal","이그제큐티브 (임원)":"executive"};function Op(e={}){const r=String(e.initials??"").trim();if(r)return r;const n=String(e.nameEn??"").trim();return n?n.split(/\s+/).slice(0,2).map(t=>t[0]).join("").toUpperCase():String(e.name??"").trim().slice(0,2)}const ql=(e={})=>({name:e.name,nameEn:e.nameEn,title:e.title,org:e.org,phone:e.phone,email:e.email,location:e.location,site:e.site}),jt={navMode:"anchor",navSync:!0,title:"",description:"",favLetter:"",favColor:"#4f6bff",lang:"ko",ogImage:null,siteUrl:"",background:{...Sp},enterFx:"없음",enterDelay:2,scrollBar:!1,smoothScroll:!1,cursor:!1,snapScroll:!1,introLoader:!1},Bp=[{id:"none",label:"없음"},{id:"sides",label:"좌우에서 모이기"},{id:"up",label:"아래에서 올라오기"},{id:"zoom",label:"살짝 커지며"}],qp=e=>{var r;return((r=Bp.find(n=>n.label===e))==null?void 0:r.id)??"none"};function Ip(e,r=null){const n=o=>{const s=parseInt(String(o??""),10);return Number.isFinite(s)?`r${s}`:`s${o}`},t={};(e??[]).forEach((o,s)=>{var c;if(r&&!r[o.id])return;const l=parseInt(String(o.col??""),10);(t[c=n(o.row)]??(t[c]=[])).push({id:o.id,c:Number.isFinite(l)?l:null,i:s})});const a={};for(const o of Object.values(t))o.sort((s,l)=>(s.c??s.i)-(l.c??l.i)||s.i-l.i),o.forEach((s,l)=>{a[s.id]=o.length<2?"up":l===0?"left":l===o.length-1?"right":"up"});return a}const tg=[{key:"title",label:"사이트 제목 (탭에 보임)",type:"text"},{key:"description",label:"한 줄 설명 (검색·공유에 보임)",type:"textarea"},{key:"ogImage",label:"공유 미리보기 이미지",type:"image"},{key:"siteUrl",label:"배포 주소 (공유 미리보기에 필요)",type:"text"},{key:"favLetter",label:"탭 아이콘 글자",type:"text"},{key:"favColor",label:"탭 아이콘 색",type:"color"},{key:"lang",label:"언어",type:"select",options:["ko","en"]}],ag=[{key:"enterFx",label:"영역 등장 효과",type:"select",options:Bp.map(e=>e.label)},{key:"enterDelay",label:"등장 시작 지점 (노출 %)",type:"range",min:0,max:40,step:1,unit:"%",needsFx:!0},{key:"scrollBar",label:"스크롤 진행 바 (상단)",type:"boolean"}],Hp=e=>Math.max(0,Math.min(60,Number(e??jt.enterDelay)||0)),og=[{key:"smoothScroll",label:"부드러운 스크롤 (Lenis · 약 10KB)",type:"boolean"},{key:"cursor",label:"커스텀 커서 (점 + 링)",type:"boolean"},{key:"snapScroll",label:"섹션 단위 스냅 (한 페이지 구성)",type:"boolean"},{key:"introLoader",label:"인트로 로더 (제목 + 커튼)",type:"boolean"}],ho=(e,r)=>{var n,t;return((n=e==null?void 0:e.title)==null?void 0:n.trim())||((t=r==null?void 0:r[0])==null?void 0:t.name)||"Portfolio"};function sg(e,r){if(!r)return null;const n=String((e==null?void 0:e.siteUrl)??"").trim().replace(/\/+$/,"");return!n||!/^https?:\/\//i.test(n)?null:`${n}/${r.replace(/^\.\//,"")}`}function ig(e,r){var o;const n=(((o=e==null?void 0:e.favLetter)==null?void 0:o.trim())||ho(e,r).trim().charAt(0)||"P").slice(0,2),a=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="${(e==null?void 0:e.favColor)||jt.favColor}"/><text x="32" y="34" text-anchor="middle" dominant-baseline="central" font-family="system-ui,sans-serif" font-size="${n.length>1?30:40}" font-weight="700" fill="#fff">${n.replace(/[<>&"]/g,"")}</text></svg>`;return`data:image/svg+xml,${encodeURIComponent(a)}`}const na=[{id:"midnight",label:"미드나잇",swatch:["#0b0b12","#4f46e5","#a78bfa"],dark:!0,bg:"#0b0b12",bgAlt:"#0e1020",surface:"#16161f",border:"#262633",text:"#e9e9f2",muted:"#b9bad4",soft:"#8b8ca6",accent:"#6b6bff",accent2:"#22d3ee",accent3:"#f472b6",silk:["#12142c","#4f46e5","#a78bfa"],scrim:"dark",dot:"#7c8cff",line:"#e9e9f2"},{id:"carbon",label:"카본",swatch:["#0a0a0a","#3f3f46","#e4e4e7"],dark:!0,bg:"#0a0a0a",bgAlt:"#121214",surface:"#18181b",border:"#27272a",text:"#fafafa",muted:"#a1a1aa",soft:"#71717a",accent:"#e4e4e7",accent2:"#a1a1aa",accent3:"#d4d4d8",silk:["#0a0a0a","#3f3f46","#71717a"],scrim:"dark",dot:"#a1a1aa",line:"#fafafa"},{id:"mint",label:"민트",swatch:["#04120f","#0d9488","#5eead4"],dark:!0,bg:"#04120f",bgAlt:"#07201b",surface:"#0c2a24",border:"#14453c",text:"#e6fffa",muted:"#99f6e4",soft:"#5eead4",accent:"#14b8a6",accent2:"#5eead4",accent3:"#fbbf24",silk:["#04120f","#0d9488","#5eead4"],scrim:"dark",dot:"#2dd4bf",line:"#e6fffa"},{id:"sunset",label:"선셋",swatch:["#140a06","#c2410c","#fbbf24"],dark:!0,bg:"#140a06",bgAlt:"#1d0f08",surface:"#26150c",border:"#3d2415",text:"#fff7ed",muted:"#fed7aa",soft:"#fdba74",accent:"#f97316",accent2:"#fbbf24",accent3:"#fb7185",silk:["#140a06","#c2410c","#fbbf24"],scrim:"dark",dot:"#fb923c",line:"#fff7ed"},{id:"paper",label:"페이퍼",swatch:["#f7f6f3","#d6d3cd","#1c1917"],dark:!1,bg:"#f7f6f3",bgAlt:"#efedE8",surface:"#ffffff",border:"#e0ddd6",text:"#1c1917",muted:"#57534e",soft:"#78716c",accent:"#1c1917",accent2:"#a16207",accent3:"#9f1239",silk:["#f7f6f3","#d6d3cd","#a8a29e"],scrim:"light",dot:"#a8a29e",line:"#1c1917"},{id:"arctic",label:"아틱",swatch:["#f0f6ff","#bfdbfe","#1e3a8a"],dark:!1,bg:"#f0f6ff",bgAlt:"#e4eeff",surface:"#ffffff",border:"#cbd9f0",text:"#0f1e3d",muted:"#3b5482",soft:"#64748b",accent:"#2563eb",accent2:"#0891b2",accent3:"#7c3aed",silk:["#f0f6ff","#bfdbfe","#93c5fd"],scrim:"light",dot:"#60a5fa",line:"#0f1e3d"},{id:"ocean",label:"오션",swatch:["#051220","#0ea5e9","#7dd3fc"],dark:!0,bg:"#051220",bgAlt:"#081a2e",surface:"#0c2338",border:"#173a56",text:"#e8f6ff",muted:"#a5d8f3",soft:"#7ab8d9",accent:"#38bdf8",accent2:"#34d399",accent3:"#fbbf24",silk:["#051220","#0ea5e9","#7dd3fc"],scrim:"dark",dot:"#38bdf8",line:"#e8f6ff"},{id:"forest",label:"포레스트",swatch:["#071108","#16a34a","#86efac"],dark:!0,bg:"#071108",bgAlt:"#0b1a0d",surface:"#102415",border:"#1d3d26",text:"#ecfdf1",muted:"#b5e8c7",soft:"#86c89d",accent:"#22c55e",accent2:"#a3e635",accent3:"#fbbf24",silk:["#071108","#16a34a","#86efac"],scrim:"dark",dot:"#4ade80",line:"#ecfdf1"},{id:"slate",label:"슬레이트",swatch:["#0f172a","#6366f1","#c7d2fe"],dark:!0,bg:"#0f172a",bgAlt:"#14203a",surface:"#1b2a47",border:"#2b3f61",text:"#eef2ff",muted:"#bcc7e8",soft:"#8b9ac4",accent:"#818cf8",accent2:"#34d399",accent3:"#f472b6",silk:["#0f172a","#6366f1","#c7d2fe"],scrim:"dark",dot:"#818cf8",line:"#eef2ff"},{id:"burgundy",label:"버건디",swatch:["#170609","#be123c","#fda4af"],dark:!0,bg:"#170609",bgAlt:"#22090e",surface:"#2d0d13",border:"#4c1722",text:"#fff1f2",muted:"#fecdd3",soft:"#fb9aa8",accent:"#f43f5e",accent2:"#fb923c",accent3:"#e879f9",silk:["#170609","#be123c","#fda4af"],scrim:"dark",dot:"#fb7185",line:"#fff1f2"},{id:"grape",label:"그레이프",swatch:["#12071f","#9333ea","#d8b4fe"],dark:!0,bg:"#12071f",bgAlt:"#1a0b2e",surface:"#241239",border:"#3c1f5c",text:"#f5f0ff",muted:"#ddc9f5",soft:"#b593dd",accent:"#a855f7",accent2:"#22d3ee",accent3:"#fbbf24",silk:["#12071f","#9333ea","#d8b4fe"],scrim:"dark",dot:"#c084fc",line:"#f5f0ff"},{id:"neon",label:"네온",swatch:["#0a0f0a","#a3e635","#dcfce7"],dark:!0,bg:"#0a0f0a",bgAlt:"#0f160f",surface:"#141d14",border:"#243324",text:"#f2ffe8",muted:"#c8e8b0",soft:"#93b87b",accent:"#a3e635",accent2:"#22d3ee",accent3:"#f472b6",silk:["#0a0f0a","#65a30d","#a3e635"],scrim:"dark",dot:"#a3e635",line:"#f2ffe8"},{id:"rose",label:"로즈",swatch:["#fdf2f4","#fda4af","#9f1239"],dark:!1,bg:"#fdf2f4",bgAlt:"#fce8ec",surface:"#ffffff",border:"#f3d3da",text:"#3f0d1c",muted:"#88304a",soft:"#b0637a",accent:"#e11d48",accent2:"#d97706",accent3:"#7c3aed",silk:["#fdf2f4","#fda4af","#fb7185"],scrim:"light",dot:"#fb7185",line:"#3f0d1c"},{id:"lavender",label:"라벤더",swatch:["#f6f4ff","#c4b5fd","#4c1d95"],dark:!1,bg:"#f6f4ff",bgAlt:"#eeeaff",surface:"#ffffff",border:"#dcd4f5",text:"#241145",muted:"#5b3f8f",soft:"#8b74b8",accent:"#7c3aed",accent2:"#0891b2",accent3:"#e11d48",silk:["#f6f4ff","#c4b5fd","#a78bfa"],scrim:"light",dot:"#a78bfa",line:"#241145"},{id:"mocha",label:"모카",swatch:["#f5efe8","#d3b8a0","#5c3a21"],dark:!1,bg:"#f5efe8",bgAlt:"#eee5da",surface:"#fffdfa",border:"#e0d2c2",text:"#33200f",muted:"#6b4a2e",soft:"#96755a",accent:"#92400e",accent2:"#0f766e",accent3:"#9f1239",silk:["#f5efe8","#d3b8a0","#b08968"],scrim:"light",dot:"#b08968",line:"#33200f"},{id:"cream",label:"크림",swatch:["#fffbeb","#fcd34d","#78350f"],dark:!1,bg:"#fffbeb",bgAlt:"#fdf3d3",surface:"#ffffff",border:"#f1e2b6",text:"#3d2a08",muted:"#7c5b16",soft:"#a8873a",accent:"#d97706",accent2:"#65a30d",accent3:"#be123c",silk:["#fffbeb","#fcd34d","#fbbf24"],scrim:"light",dot:"#fbbf24",line:"#3d2a08"},{id:"sage",label:"세이지",swatch:["#f2f6ec","#a9c49a","#31501f"],dark:!1,bg:"#f2f6ec",bgAlt:"#e9f0df",surface:"#ffffff",border:"#d6e2c8",text:"#1f3311",muted:"#4a6b33",soft:"#7d9a68",accent:"#4d7c0f",accent2:"#0f766e",accent3:"#b45309",silk:["#f2f6ec","#a9c49a","#84cc16"],scrim:"light",dot:"#84cc16",line:"#1f3311"},{id:"ivory",label:"아이보리 블랙",swatch:["#ffffff","#d4d4d4","#111111"],dark:!1,bg:"#ffffff",bgAlt:"#f7f7f7",surface:"#fafafa",border:"#e5e5e5",text:"#111111",muted:"#525252",soft:"#737373",accent:"#111111",accent2:"#2563eb",accent3:"#dc2626",silk:["#ffffff","#d4d4d4","#a3a3a3"],scrim:"light",dot:"#a3a3a3",line:"#111111"}],lg="paper",fa=e=>na.find(r=>r.id===e)??na[0],Vp=e=>(e==null?void 0:e.star)??(e!=null&&e.dark?"#ffffff":(e==null?void 0:e.muted)??"#6b7280");function Wp(e){return e!=null&&e.dark?{bg:"#f7f6f2",surface:"#ffffff",border:"#e3e1d9",text:"#1d1d24",muted:"#5d5d68"}:{bg:"#101116",surface:"#181a22",border:"#2a2d38",text:"#eceef4",muted:"#a6aab8"}}const Up=".wf-bcard__png, .wf-bcard__flipbtn, .wf-bcard__toggle";function Gp(e,r){const n=e.ownerDocument,t=n.defaultView,a=r||3,o=Math.round(e.getBoundingClientRect().width),s=Math.round(e.getBoundingClientRect().height);let l="";for(const j of Array.from(n.styleSheets))try{l+=Array.from(j.cssRules).map(C=>C.cssText).join(`
`)+`
`}catch{}const c=!!e.querySelector(".wf-bcard__face--back"),u=c?Math.round(o*.04):0,h=c?o*2+u:o,f=j=>{const C=e.cloneNode(!0);if(C.querySelectorAll(Up).forEach(b=>b.remove()),C.querySelectorAll(".wf-edit").forEach(b=>b.classList.remove("wf-edit")),C.querySelectorAll("[contenteditable]").forEach(b=>b.removeAttribute("contenteditable")),C.querySelectorAll("[data-ph]").forEach(b=>b.removeAttribute("data-ph")),j){const b=j==="front"?".wf-bcard__face--back":".wf-bcard__face--front",d=C.querySelector(b);d&&d.remove();const m=C.querySelector(".wf-bcard__flip");m&&m.setAttribute("style","transform:none;position:absolute;inset:0");const x=C.querySelector(".wf-bcard__face");x&&x.setAttribute("style","transform:none;backface-visibility:visible")}return new t.XMLSerializer().serializeToString(C)},p=l.replace(/&/g,"&amp;").replace(/</g,"&lt;"),k=(j,C)=>'<foreignObject x="'+C+'" y="0" width="'+o+'" height="'+s+'"><div xmlns="http://www.w3.org/1999/xhtml" style="width:'+o+"px;height:"+s+'px">'+j+"</div></foreignObject>",_='<svg xmlns="http://www.w3.org/2000/svg" width="'+h*a+'" height="'+s*a+'" viewBox="0 0 '+h+" "+s+'"><style>'+p+"</style>"+(c?k(f("front"),0)+k(f("back"),o+u):k(f(null),0))+"</svg>";return new Promise((j,C)=>{const b=new t.Image;b.onload=()=>{const d=n.createElement("canvas");d.width=h*a,d.height=s*a,d.getContext("2d").drawImage(b,0,0),d.toBlob(x=>x?j(x):C(new Error("PNG 변환 실패")),"image/png")},b.onerror=()=>C(new Error("명함을 그림으로 옮기지 못했습니다")),b.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(_)})}function Yp(e,r){const n=e.ownerDocument,t=n.defaultView;return Gp(e,3).then(a=>{const o=t.URL.createObjectURL(a),s=n.createElement("a");s.href=o,s.download=(r||"명함")+".png",n.body.appendChild(s),s.click(),s.remove(),t.setTimeout(()=>t.URL.revokeObjectURL(o),1e4)})}function cg(){return`(function(){
var EDITOR_ONLY=`+JSON.stringify(Up)+`;
var cardToPngBlob=`+Gp.toString()+`;
var downloadCardPng=`+Yp.toString()+`;
document.addEventListener('click',function(e){var b=e.target.closest('.wf-bcard__png');if(!b)return;var card=b.closest('.wf-bcard');if(!card)return;downloadCardPng(card, b.getAttribute("data-name") || "명함");});
})();`}const Z1=()=>i.jsxs("button",{type:"button",className:"wf-mode","data-mode-toggle":!0,"aria-label":"다크 / 라이트 전환",children:[i.jsx("svg",{className:"wf-mode__moon","aria-hidden":"true",width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}),i.jsxs("svg",{className:"wf-mode__sun","aria-hidden":"true",width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("circle",{cx:"12",cy:"12",r:"4"}),i.jsx("path",{d:"M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"})]})]});function Wo({pages:e,current:r,sections:n=null,vertical:t=!1,gap:a=26,uppercase:o=!1}){const s=o?{textTransform:"uppercase",letterSpacing:"0.08em"}:void 0;return n?i.jsxs("nav",{className:`wf-nav ${t?"wf-nav--v":""}`,style:{gap:`${a}px`},children:[n.map(l=>i.jsx("button",{type:"button","data-anchor":l.anchor,className:"wf-nav__item",style:s,children:l.label},l.anchor)),n.length===0&&i.jsx("span",{className:"wf-nav__item",children:"제목이 있는 섹션이 없습니다"})]}):i.jsx("nav",{className:`wf-nav ${t?"wf-nav--v":""}`,style:{gap:`${a}px`},children:e.map(l=>i.jsx("button",{type:"button","data-goto":l.id,className:`wf-nav__item ${l.id===r?"is-current":""}`,style:s,children:l.name},l.id))})}function dg({partId:e,c:r,pages:n,current:t,sections:a,hasFlip:o,edit:s,regionId:l,tfx:c}){var p,k,_,j,C,b;const u=r.linkTo==="이 페이지 섹션"?a??[]:null,h=(d="")=>{if(!Ou(c))return!1;const m=/title/.test(d);return c.target==="제목 + 본문"?!0:m},f=(d,m,x={})=>i.jsx(t4,{tag:x.tag??"span",className:x.className,style:x.style,value:m,multiline:x.multiline,placeholder:x.ph,editable:!!s,split:h(x.className),fxSeed:c?`${c.speed??""}:${c.delay??""}`:"",onCommit:y=>s(d,y)});switch(e){case"topheader":case"header":return i.jsxs("div",{className:"wf-bar",style:{justifyContent:r.align},children:[f(["logo"],r.logo,{className:"wf-bar__logo",ph:"이름 / 로고"}),r.showMenu&&i.jsx(Wo,{pages:n,current:t,sections:u}),e==="header"&&r.cta&&i.jsx("button",{type:"button",className:"wf-btn wf-btn--sm",children:f(["cta"],r.cta,{ph:"버튼"})}),r.modeToggle&&i.jsx(Z1,{})]});case"nav":return i.jsxs("div",{className:"wf-bar",style:{justifyContent:r.align},children:[i.jsx(Wo,{pages:n,current:t,sections:u,gap:r.gap,uppercase:r.uppercase}),r.modeToggle&&i.jsx(Z1,{})]});case"hero":return i.jsxs("div",{className:"wf-hero",style:{alignItems:ln(r.align),textAlign:r.align==="center"?"center":"left"},children:[((p=r.photo)==null?void 0:p.id)&&i.jsx(Rt,{image:r.photo,className:`wf-hero__photo ${r.photoRound?"is-round":""}`,style:{width:`${r.photoSize??120}px`,height:`${r.photoSize??120}px`}}),f(["title"],r.title,{tag:"h1",className:"wf-hero__title",style:{fontSize:`clamp(1.9em, 8.5vw, calc(${r.titleScale} * 3.2em))`},multiline:!0,ph:"첫 화면 제목"}),r.subtitle&&f(["subtitle"],r.subtitle,{tag:"p",className:"wf-hero__sub",style:r.subColor?{color:r.subColor}:void 0,multiline:!0,ph:"부제"}),r.cta&&i.jsxs("button",{type:"button",className:"wf-btn",style:As(r),children:[f(["cta"],r.cta,{ph:"버튼"}),((k=r.ctaFile)==null?void 0:k.id)&&i.jsxs("em",{className:"wf-btn__file",children:["↓ ",r.ctaFile.name]})]})]});case"aside":return i.jsxs("div",{className:"wf-aside",style:{alignItems:ln(r.align),textAlign:r.align==="center"?"center":"left"},children:[((_=r.photo)==null?void 0:_.id)&&i.jsx(Rt,{image:r.photo,className:`wf-aside__photo ${r.photoRound?"is-round":""}`,style:{width:`${r.photoSize??96}px`,height:`${r.photoSize??96}px`}}),f(["name"],r.name,{tag:"h2",className:"wf-aside__name",ph:"이름"}),f(["role"],r.role,{tag:"p",className:"wf-aside__role",ph:"직함"}),r.bio&&f(["bio"],r.bio,{tag:"p",className:"wf-aside__bio",multiline:!0,ph:"한 줄 소개"}),r.showMenu&&i.jsx(Wo,{pages:n,current:t,sections:u,vertical:!0,gap:10}),r.sticky&&i.jsx("span",{className:"wf-badge",children:"sticky"})]});case"section":return i.jsxs("div",{className:"wf-sec",style:{alignItems:ln(r.align)},children:[(s||r.title)&&f(["title"],r.title,{tag:"h2",className:"wf-sec__title",ph:"섹션 제목"}),(s||r.body)&&i.jsx("div",{className:"wf-sec__cols",style:{gridTemplateColumns:`repeat(${r.columns}, minmax(0, 1fr))`},children:Array.from({length:r.columns},(d,m)=>m===0?i.jsx(os.Fragment,{children:f(["body"],r.body,{tag:"p",className:"wf-sec__body",multiline:!0,ph:"본문"})},m):i.jsx("p",{className:"wf-sec__body",children:`${m+1}. ${r.body}`},m))}),r.listStyle==="tags"&&i.jsx("div",{className:"wf-tags",children:(r.items??[]).map((d,m)=>i.jsxs("span",{className:"wf-tag",children:[f(["items",m,"label"],d.label,{ph:"항목"}),d.note&&f(["items",m,"note"],d.note,{tag:"em"})]},m))}),r.listStyle==="badges"&&i.jsx("div",{className:"wf-tags wf-tags--badges",children:(r.items??[]).map((d,m)=>{const x=Ps(d.label);return i.jsxs("span",{className:"wf-tag wf-tag--badge",style:{"--bdg-bg":x.bg,"--bdg-fg":x.fg},children:[x.path&&i.jsx("svg",{className:"wf-tag__logo",viewBox:"0 0 24 24","aria-hidden":"true",children:i.jsx("path",{d:x.path,fill:"currentColor"})}),f(["items",m,"label"],d.label,{ph:"항목"}),d.note&&f(["items",m,"note"],d.note,{tag:"em"})]},m)})}),r.listStyle==="timeline"&&i.jsx("ol",{className:"wf-time",children:(r.items??[]).map((d,m)=>i.jsxs("li",{className:"wf-time__row",children:[f(["items",m,"label"],d.label,{tag:"b",ph:"항목"}),d.note&&f(["items",m,"note"],d.note)]},m))}),r.listStyle==="marquee"&&i.jsx("div",{className:"wf-marquee",style:{"--marq-t":`${Math.max(10,(((j=r.items)==null?void 0:j.length)??0)*3)}s`},children:i.jsx("div",{className:"wf-marquee__track",children:[0,1].map(d=>i.jsx("div",{className:"wf-marquee__set","aria-hidden":d===1||void 0,children:(r.items??[]).map((m,x)=>i.jsxs("span",{className:"wf-tag",children:[d===0?f(["items",x,"label"],m.label,{ph:"항목"}):i.jsx("span",{children:m.label}),m.note&&(d===0?f(["items",x,"note"],m.note,{tag:"em"}):i.jsx("em",{children:m.note}))]},x))},d))})}),r.listStyle==="stats"&&i.jsx("div",{className:"wf-stats",children:(r.items??[]).map((d,m)=>{const x=/^(\d+)\s*(.*)$/.exec(String(d.note??"").trim());return i.jsxs("div",{className:"wf-stat",children:[i.jsx("b",{className:"wf-stat__num",children:x?i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"wf-stat__count",style:{"--wf-n-to":+x[1]},"aria-hidden":"true"}),i.jsx("span",{className:"wf-stat__plain","aria-hidden":"true",children:x[1]}),x[2]&&i.jsx("span",{className:"wf-stat__suffix","aria-hidden":"true",children:x[2]}),i.jsx("span",{className:"wf-sr",children:d.note})]}):i.jsx("span",{children:d.note||"0"})}),f(["items",m,"label"],d.label,{className:"wf-stat__label",ph:"항목"})]},m)})})]});case"gallery":{const d=Yu(r.items,r.columns,r.rows),m=(y,S)=>y.stack?(r.stackStyle??"배지")!=="배지"?f(["items",S,"stack"],y.stack,{className:"wf-card__stack"}):i.jsx("span",{className:"wf-card__stack wf-card__stack--badges",children:$p(y.stack).map((w,v)=>{const g=Ps(w);return i.jsxs("span",{className:"wf-tag wf-tag--badge",style:{"--bdg-bg":g.bg,"--bdg-fg":g.fg},children:[g.path&&i.jsx("svg",{className:"wf-tag__logo",viewBox:"0 0 24 24","aria-hidden":"true",children:i.jsx("path",{d:g.path,fill:"currentColor"})}),w]},v)})}):null,x=y=>{const S=Tp(y.status);return S?i.jsx("span",{className:"wf-card__status",style:{"--st-bg":S.bg,"--st-fg":S.fg},children:y.status}):null};return i.jsxs("div",{className:`wf-gal${r.grayHover?" is-gray":""}`,children:[f(["title"],r.title,{tag:"h2",className:"wf-sec__title",ph:"섹션 제목"}),i.jsxs("div",{className:"wf-gal__grid",style:{gridTemplateColumns:`repeat(${r.columns}, minmax(0, 1fr))`},children:[d.map(({item:y,index:S})=>{var w,v,g;return y?o?i.jsx("article",{className:"wf-card fx-flip-card is-flip",children:i.jsxs("div",{className:"fx-flip-card__inner",children:[i.jsxs("div",{className:"fx-flip-card__face fx-flip-card__face--front","data-fx-face":"front",children:[i.jsx("b",{className:"wf-card__title",children:y.title}),y.stack&&i.jsx("span",{className:"wf-card__stack",children:y.stack})]}),i.jsxs("div",{className:"fx-flip-card__face fx-flip-card__face--back","data-fx-face":"back",children:[i.jsx("span",{className:"wf-card__desc",children:y.desc||"뒷면 내용을 적어 주세요."}),y.link&&i.jsx("span",{className:"wf-card__link",children:"↗ 링크"})]})]})},S):i.jsxs("article",{className:`wf-card ${(w=y.detail)!=null&&w.trim()?"has-detail":""}`,"data-detail":(v=y.detail)!=null&&v.trim()?$s(l,S):void 0,children:[r.showThumb&&i.jsxs("span",{className:"wf-card__thumb",style:{paddingBottom:`${r.ratio*100}%`},children:[(g=y.image)!=null&&g.id?i.jsx(Rt,{image:y.image,className:"wf-card__img"}):i.jsx("em",{children:S+1}),x(y)]}),i.jsxs("span",{className:"wf-card__body",children:[!r.showThumb&&x(y),f(["items",S,"title"],y.title,{tag:"b",className:"wf-card__title",ph:"작업물 제목"}),m(y,S),y.desc&&f(["items",S,"desc"],y.desc,{className:"wf-card__desc",multiline:!0}),y.link&&i.jsx("span",{className:"wf-card__link",children:"↗ 링크"})]})]},S):i.jsx("article",{className:"wf-card wf-card--empty",children:i.jsx("span",{className:"wf-card__slot",children:"+"})},`empty-${S}`)}),d.length===0&&i.jsx("p",{className:"wf-sec__body",children:"오른쪽 편집 패널에서 카드를 추가하세요."})]}),(r.items??[]).map((y,S)=>{var w,v;return(w=y==null?void 0:y.detail)!=null&&w.trim()?i.jsxs("div",{className:"wf-detail",id:$s(l,S),children:[i.jsx("span",{className:"wf-detail__scrim","data-detail-close":"1"}),i.jsxs("div",{className:"wf-detail__box",children:[i.jsx("span",{className:"wf-detail__close","data-detail-close":"1",children:"✕"}),((v=y.image)==null?void 0:v.id)&&i.jsx(Rt,{image:y.image,className:"wf-detail__img"}),i.jsx("b",{className:"wf-detail__title",children:y.title}),y.stack&&i.jsx("span",{className:"wf-card__stack",children:y.stack}),f(["items",S,"detail"],y.detail,{tag:"p",className:"wf-detail__body",multiline:!0,ph:"자세한 설명"}),y.link&&i.jsx("span",{className:"wf-card__link",children:"↗ 링크 열기"})]})]},`d-${S}`):null})]})}case"timeline":return i.jsxs("div",{className:"wf-tl",children:[r.eyebrow&&f(["eyebrow"],r.eyebrow,{className:"wf-tl__eyebrow",ph:"// 라벨"}),f(["title"],r.title,{tag:"h2",className:"wf-tl__title",ph:"제목"}),i.jsx("ol",{className:"wf-tl__list",children:(r.items??[]).map((d,m)=>i.jsxs("li",{className:"wf-tl__item",children:[f(["items",m,"label"],d.label,{className:"wf-tl__label",ph:"분류"}),f(["items",m,"head"],d.head,{tag:"b",className:"wf-tl__head",ph:"항목 제목"}),d.desc&&f(["items",m,"desc"],d.desc,{tag:"p",className:"wf-tl__desc",multiline:!0,ph:"설명"})]},m))}),(r.items??[]).length===0&&i.jsx("p",{className:"wf-sec__body",children:"오른쪽 편집 패널에서 항목을 추가하세요."})]});case"main":return i.jsx("div",{className:"wf-main",style:{gridTemplateColumns:`repeat(${r.columns}, minmax(0, 1fr))`,gap:`${r.gap}px`},children:(r.items??[]).map((d,m)=>i.jsx("div",{className:"wf-main__slot",children:f(["items",m,"label"],d.label,{ph:`본문 ${m+1}`})},m))});case"contact":return i.jsxs("div",{className:"wf-contact",style:{alignItems:ln(r.align),textAlign:r.align==="center"?"center":"left"},children:[f(["title"],r.title,{tag:"h2",className:"wf-sec__title",ph:"제목"}),r.body&&f(["body"],r.body,{tag:"p",className:"wf-sec__body",multiline:!0,ph:"안내 문구"}),r.email&&i.jsx("span",{className:`wf-contact__mail ${r.big?"is-big":""}`,children:f(["email"],r.email,{ph:"이메일"})}),(r.phone||r.location)&&i.jsxs("span",{className:"wf-contact__meta",children:[r.phone&&f(["phone"],r.phone,{ph:"전화"}),r.phone&&r.location&&i.jsx("i",{children:" · "}),r.location&&f(["location"],r.location,{ph:"지역"})]})]});case"cover":return i.jsxs("div",{className:`wf-cover${r.kenBurns?" is-kb":""}${r.zoomOnScroll?" is-zoom":""}`,style:{height:`${r.height}px`,justifyContent:ln(r.valign),alignItems:ln(r.align)},children:[(C=r.image)!=null&&C.id?i.jsx(Rt,{image:r.image,className:"wf-cover__img"}):i.jsx("span",{className:"wf-cover__empty","aria-hidden":"true"}),i.jsx("span",{className:"wf-cover__veil",style:{opacity:r.overlay},"aria-hidden":"true"}),i.jsxs("span",{className:"wf-cover__body",style:{textAlign:r.align==="center"?"center":"left"},children:[f(["title"],r.title,{tag:"b",className:"wf-cover__title",multiline:!0,ph:"문구"}),r.sub&&f(["sub"],r.sub,{tag:"span",className:"wf-cover__sub",ph:"작은 문구"})]})]});case"marquee":{const d=m=>i.jsx("span",{className:"wf-mq__set","aria-hidden":m===1||void 0,children:[0,1,2,3].map(x=>i.jsxs(os.Fragment,{children:[m===0&&x===0?f(["text"],r.text,{className:"wf-mq__txt",ph:"문구"}):i.jsx("span",{className:"wf-mq__txt",children:r.text}),i.jsx("i",{className:"wf-mq__sep",children:r.sep})]},x))},m);return i.jsx("div",{className:`wf-mq${r.outline?" is-outline":""}${r.pauseOnHover?" is-pausable":""}`,style:{"--mq-t":`${r.speed}s`,"--mq-size":`${r.size}em`,"--mq-dir":r.reverse?"reverse":"normal"},children:i.jsx("div",{className:"wf-mq__track",children:[0,1].map(d)})})}case"cta":return i.jsxs("div",{className:`wf-cta${r.gradient?" is-grad":""}`,style:{alignItems:ln(r.align),textAlign:r.align==="center"?"center":"left"},children:[f(["title"],r.title,{tag:"b",className:"wf-cta__title",ph:"제목"}),r.sub&&f(["sub"],r.sub,{tag:"span",className:"wf-cta__sub",ph:"보조 문구"}),r.cta&&i.jsxs("button",{type:"button",className:"wf-btn wf-cta__btn",style:As(r),children:[f(["cta"],r.cta,{ph:"버튼"}),((b=r.ctaFile)==null?void 0:b.id)&&i.jsxs("em",{className:"wf-btn__file",children:["↓ ",r.ctaFile.name]})]})]});case"slider":{const d=Xu(r.transition),m=(r.items??[]).slice(0,Ju),x=Zu(l);return i.jsxs("div",{className:`wf-sld wf-sld--${d}${r.kenBurns?" is-kb":""}${r.arrows?"":" no-arrows"}`,style:{"--sld-h":`${r.height}px`,"--sld-t":`${r.speed}ms`},"data-auto":r.autoplay&&d!=="scroll"?String((r.interval??5)*1e3):void 0,"data-loop":r.loop?"1":"0","data-pause":r.pauseOnHover?"1":"0",children:[d!=="scroll"&&m.map((y,S)=>i.jsx("input",{className:"wf-sld__r",type:"radio",name:x,id:Hn(l,S),defaultChecked:S===0},`r${S}`)),i.jsxs("div",{className:"wf-sld__track",children:[m.map((y,S)=>{var w;return i.jsxs("div",{className:"wf-sld__slide",children:[(w=y.image)!=null&&w.id?i.jsx(Rt,{image:y.image,className:"wf-sld__img"}):i.jsx("span",{className:"wf-sld__empty","aria-hidden":"true"}),i.jsx("span",{className:"wf-sld__veil",style:{opacity:r.overlay},"aria-hidden":"true"}),i.jsxs("span",{className:"wf-sld__body",style:{justifyContent:ln(r.valign),alignItems:ln(r.align),textAlign:r.align==="center"?"center":"left"},children:[f(["items",S,"title"],y.title,{tag:"b",className:"wf-sld__title",ph:"문구"}),y.sub&&f(["items",S,"sub"],y.sub,{tag:"span",className:"wf-sld__sub",ph:"작은 문구"}),y.cta&&i.jsx("button",{type:"button",className:"wf-btn wf-sld__btn",children:f(["items",S,"cta"],y.cta,{ph:"버튼"})})]}),d!=="scroll"&&m.length>1&&r.arrows&&i.jsxs("span",{className:"wf-sld__nav","aria-hidden":"true",children:[i.jsx("label",{className:"wf-sld__arrow is-prev",htmlFor:Hn(l,(S-1+m.length)%m.length),children:"‹"}),i.jsx("label",{className:"wf-sld__arrow is-next",htmlFor:Hn(l,(S+1)%m.length),children:"›"})]})]},S)}),m.length===0&&i.jsx("p",{className:"wf-sec__body",children:"오른쪽에서 슬라이드를 추가하세요."})]}),d!=="scroll"&&m.length>1&&r.dots&&i.jsx("span",{className:"wf-sld__dots",children:m.map((y,S)=>i.jsx("label",{htmlFor:Hn(l,S),title:`${S+1}번째`},`d${S}`))})]})}case"bcard":{const d=Fp[r.design]??"quiet",m={"채움 원형":"fill","윤곽 원형":"line",아이콘만:"bare",없음:"none"}[r.iconStyle]??"fill",x={"오른쪽 가운데":" is-qr-right","왼쪽 아래":" is-qr-bl","오른쪽 아래":" is-qr-br"}[r.qrPos]??"",y=[["phone",r.phone,["phone"]],["mail",r.email,["email"]],["pin",r.location,["location"]],["globe",r.site,["site"]]].filter(([,X])=>X),S=X=>i.jsx("span",{className:"wf-bcard__ico","aria-hidden":"true",children:i.jsx("svg",{viewBox:"0 0 24 24",children:i.jsx("path",{d:Pp[X],fill:"currentColor"})})}),w=r.qr?Dp(Bl(ql(r))):null,v=r.faces==="앞·뒤 (누르면 뒤집기)",g=`bcflip-${l}`,E=r.label&&f(["label"],r.label,{className:"wf-bcard__label"}),N=i.jsx("span",{className:"wf-bcard__mono",children:Op(r)}),M=i.jsxs("div",{className:"wf-bcard__lead",children:[f(["role"],r.role,{tag:"b",className:"wf-bcard__role",ph:"분야"}),r.roleSub&&f(["roleSub"],r.roleSub,{className:"wf-bcard__rolesub"})]}),T=i.jsxs("div",{className:"wf-bcard__row",children:[i.jsxs("span",{className:"wf-bcard__text",children:[f(["name"],r.name,{tag:"b",className:"wf-bcard__name",ph:"이름"}),r.nameEn&&f(["nameEn"],r.nameEn,{className:"wf-bcard__nameen"}),r.title&&f(["title"],r.title,{className:"wf-bcard__title"}),r.org&&f(["org"],r.org,{className:"wf-bcard__title"})]}),S("person")]}),$=y.map(([X,ne,Ne])=>i.jsxs("div",{className:"wf-bcard__row",children:[i.jsx("span",{className:"wf-bcard__text",children:f(Ne,ne,{className:"wf-bcard__line",multiline:!0})}),S(X)]},X)),P=r.tagline&&f(["tagline"],r.tagline,{tag:"p",className:"wf-bcard__tagline"}),J=r.stack&&f(["stack"],r.stack,{className:"wf-bcard__stack"}),H=(w||r.vcf)&&i.jsxs("div",{className:"wf-bcard__side",children:[w&&i.jsx("span",{className:"wf-bcard__qr",dangerouslySetInnerHTML:{__html:w}}),r.vcf&&i.jsx("span",{className:"wf-bcard__save",children:"연락처 저장"})]}),A=i.jsxs("div",{className:"wf-bcard__in",children:[E,N,M,i.jsxs("div",{className:"wf-bcard__info",children:[T,!v&&$]}),!v&&P,!v&&J,!v&&H]}),B=v&&i.jsxs("div",{className:"wf-bcard__in wf-bcard__in--back",children:[P,i.jsx("div",{className:"wf-bcard__info",children:$}),J,H]}),Q=`wf-bcard wf-bcard--${d} wf-bcard--ico-${m}${x}${v?" is-2face":""}`,pe=r.paper===!0?40:r.paper===!1?0:Number.isFinite(r.paper)?r.paper:40,Z={...r.accent?{"--bc-accent":r.accent}:null,"--bc-paper":pe/100,maxWidth:`${r.width??520}px`},je=pe>0?i.jsx("span",{className:"wf-bcard__paper","aria-hidden":"true"}):null,Se=i.jsx("button",{type:"button",className:"wf-bcard__png",title:"이 명함을 PNG 그림으로 저장합니다","aria-label":"명함을 PNG로 저장",onClick:X=>{X.stopPropagation();const ne=X.currentTarget.closest(".wf-bcard");ne&&Yp(ne,r.name||"명함")},children:i.jsx("svg",{viewBox:"0 0 24 24",width:"1em",height:"1em","aria-hidden":"true",focusable:"false",children:i.jsx("path",{d:"M12 3v10m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})});return v?i.jsxs("div",{className:Q,style:Z,children:[i.jsx("input",{className:"wf-bcard__toggle",type:"checkbox",id:g,"aria-label":"명함 뒤집기"}),i.jsxs("div",{className:"wf-bcard__flip",children:[i.jsxs("div",{className:"wf-bcard__face wf-bcard__face--front",children:[i.jsx("span",{className:"wf-bcard__deco","aria-hidden":"true"}),je,A]}),i.jsxs("div",{className:"wf-bcard__face wf-bcard__face--back",children:[je,B]})]}),i.jsx("label",{className:"wf-bcard__flipbtn",htmlFor:g,children:"뒤집기"}),Se]}):i.jsxs("div",{className:Q,style:Z,children:[i.jsx("span",{className:"wf-bcard__deco","aria-hidden":"true"}),je,A,Se]})}case"links":{const d=r.items??[];return i.jsxs("div",{className:`wf-links wf-links--${r.style}`,style:{alignItems:ln(r.align)},children:[r.title&&f(["title"],r.title,{tag:"h2",className:"wf-sec__title",ph:"섹션 제목"}),i.jsxs("div",{className:"wf-links__row",children:[d.map((m,x)=>{var y;return i.jsxs("span",{className:"wf-link",children:[f(["items",x,"label"],m.label,{ph:"이름"}),(y=m.file)!=null&&y.id?i.jsxs("em",{className:"wf-link__url",children:["↓ ",m.file.name]}):r.style!=="buttons"&&m.url&&i.jsx("em",{className:"wf-link__url",children:rp(m.url)}),r.style==="cards"&&m.desc&&f(["items",x,"desc"],m.desc,{tag:"p",className:"wf-link__desc",multiline:!0,ph:"설명"})]},x)}),d.length===0&&i.jsx("p",{className:"wf-sec__body",children:"오른쪽에서 링크를 추가하세요."})]})]})}case"footer":return i.jsxs("div",{className:"wf-bar wf-bar--foot",style:{justifyContent:r.align},children:[f(["text"],r.text,{className:"wf-foot__text",ph:"저작권 문구"}),r.showMenu&&i.jsx(Wo,{pages:n,current:t,sections:u,gap:18}),r.showTime&&i.jsx("span",{className:"wf-foot__time",children:Gu(r.timeCity,r.timeZone)}),r.email&&f(["email"],r.email,{className:"wf-foot__mail",ph:"이메일"})]});default:return null}}const ln=e=>e==="center"?"center":e==="end"?"flex-end":"flex-start",J1=".wf-sld__r, .wf-sld__track, .wf-sld__dots, .wf-detail, .wf-cover__img, .wf-cover__empty, .wf-cover__veil, .wf-mq__track",fg=e=>String(e).replace(/(^|[\s,(])(\d*\.?\d+)fr/g,"$1minmax(0, $2fr)"),ug=e=>{const r=String(e).trim().split(/\s+/),n=r.map(l=>l.endsWith("px")?parseFloat(l):0),t=r.map(l=>l.endsWith("fr")?parseFloat(l):0),a=n.reduce((l,c)=>l+c,0),o=t.reduce((l,c)=>l+c,0)||1,s=Math.max(80,(1120-a)/o);return r.map((l,c)=>`minmax(0, ${Math.round(n[c]?n[c]:(t[c]||1)*s)}fr)`).join(" ")};function ed({onFreeMove:e,id:r,partId:n,content:t,detail:a,style:o,mini:s,selected:l,pages:c,current:u,sticky:h,fx:f,theme:p,effectsOn:k,isDrop:_,isHot:j,onEditText:C,sections:b,anchor:d,enterDir:m,enterFxOn:x,onFreeBox:y,onHideRegion:S,colSlot:w,rowSlot:v,rowInfo:g,siteBgOn:E=!1}){var Ne,Re,ae,fe,Me;const N=n?Ln[n]:null,M=t??{},T=(f??[]).some(W=>W.name==="flip"),$=S5(s?[]:f,p,!s&&k,JSON.stringify(M)),P=Sn((Ne=M.srcFile)==null?void 0:Ne.id),J=Sn((Re=M.envFile)==null?void 0:Re.id),H={};for(const W of(N==null?void 0:N.optionKeys)??[])M[W]!==void 0&&(H[W]=M[W]);P&&(H.src=P),J&&(H.environmentImage=ap(J,(ae=M.envFile)==null?void 0:ae.name)),n==="model"&&(H.fill=!!M.fill);const A=k5(s?null:n,H,p,!s&&k),B=Sn((fe=a.bgImage)==null?void 0:fe.id),Q=!s&&n==="model"&&!!M.free,pe=!s&&!!a.free&&!!(N!=null&&N.freeItems),Z=a.itemPos??null,je=parseInt(String((o==null?void 0:o.gridColumn)??""),10)||1;L.useEffect(()=>{const W=$.current;if(!W||!Q||!e)return;const ee=we=>{var le;if(we.button!==0)return;we.preventDefault(),we.stopPropagation(),(le=W.setPointerCapture)==null||le.call(W,we.pointerId);const ge=Te=>{const D=W.ownerDocument.documentElement.clientWidth||1,O=W.ownerDocument.documentElement.clientHeight||1,se=Math.max(0,Math.min(100,Te.clientX/D*100)),F=Math.max(0,Math.min(100,Te.clientY/O*100));e(r,Math.round(se),Math.round(F))},xe=()=>{W.removeEventListener("pointermove",ge),W.removeEventListener("pointerup",xe)};W.addEventListener("pointermove",ge),W.addEventListener("pointerup",xe)};return W.addEventListener("pointerdown",ee),()=>W.removeEventListener("pointerdown",ee)},[Q,r,e]);const Se=L.useRef(a);Se.current=a;const X=()=>{var W;return((W=$.current)==null?void 0:W.querySelector(":scope > :not(span, button)"))??null};L.useEffect(()=>{if(!pe||!y||a.itemPos)return;const W=X();if(!W||!W.children.length)return;const ee=$.current;ee==null||ee.classList.remove("is-freeitems");const we=W.getBoundingClientRect();if(!we.width||!we.height){ee==null||ee.classList.add("is-freeitems");return}const ge={};[...W.children].forEach((xe,le)=>{var D;if((D=xe.matches)!=null&&D.call(xe,J1))return;const Te=xe.getBoundingClientRect();ge[le+1]={x:Math.round((Te.x-we.x)/we.width*200)/2,y:Math.round((Te.y-we.y)/we.height*200)/2}}),ee==null||ee.classList.add("is-freeitems"),y(r,{itemPos:ge})},[pe,a.itemPos,r,y]),L.useEffect(()=>{const W=$.current;if(!W||!pe||!y)return;const ee=we=>{var Ce,ie,De;if(we.button!==0||(ie=(Ce=we.target).closest)!=null&&ie.call(Ce,".wf__resize"))return;const ge=X();if(!ge)return;const xe=[...ge.children].find(te=>te===we.target||te.contains(we.target));if(!xe||(De=xe.matches)!=null&&De.call(xe,J1))return;const le=[...ge.children].indexOf(xe)+1,Te=ge.getBoundingClientRect(),D=xe.getBoundingClientRect(),se=(Se.current.itemPos??{})[le]??{x:(D.x-Te.x)/(Te.width||1)*100,y:(D.y-Te.y)/(Te.height||1)*100},F=we.clientX,U=we.clientY;let me=!1;const ye=te=>Math.round(te*2)/2,be=te=>{var Xe;const $e=te.clientX-F,Fe=te.clientY-U;if(!me){if(Math.hypot($e,Fe)<4)return;me=!0;try{(Xe=W.setPointerCapture)==null||Xe.call(W,we.pointerId)}catch{}}y(r,{itemPos:{...Se.current.itemPos??{},[le]:{x:Math.max(0,Math.min(96,ye(se.x+$e/(Te.width||1)*100))),y:Math.max(0,Math.min(96,ye(se.y+Fe/(Te.height||1)*100)))}}})},ke=te=>{if(W.removeEventListener("pointermove",be),W.removeEventListener("pointerup",ke),W.removeEventListener("pointercancel",ke),me){te.stopPropagation();const $e=Fe=>{Fe.stopPropagation(),Fe.preventDefault()};W.addEventListener("click",$e,{capture:!0,once:!0}),setTimeout(()=>W.removeEventListener("click",$e,{capture:!0}),0)}};W.addEventListener("pointermove",be),W.addEventListener("pointerup",ke),W.addEventListener("pointercancel",ke)};return W.addEventListener("pointerdown",ee),()=>W.removeEventListener("pointerdown",ee)},[pe,r,y]);const ne=L.useRef(g);return ne.current=g,L.useEffect(()=>{const W=$.current,ee=W==null?void 0:W.querySelector(":scope > .wf__resize");if(!W||!ee||!y)return;const we=ge=>{var en;if(ge.button!==0)return;ge.preventDefault(),ge.stopPropagation();const xe=W.closest(".wf");if(!xe)return;try{(en=ee.setPointerCapture)==null||en.call(ee,ge.pointerId)}catch{}const le=getComputedStyle(xe),Te=parseFloat(le.columnGap)||0,D=W.getBoundingClientRect().width,O=W.getBoundingClientRect().height,se=X(),F=getComputedStyle(W),U=parseFloat(F.paddingTop)+parseFloat(F.paddingBottom)+parseFloat(F.borderTopWidth)+parseFloat(F.borderBottomWidth),me=pe||!se?0:Math.ceil(se.getBoundingClientRect().height+U),ye=ne.current;if(!ye)return;const be=ye.spans,ke=(xe.getBoundingClientRect().width+Te)/Math.max(1,ye.units),Ce=Math.max(1,ye.room),ie=ge.clientX,De=ge.clientY;let te=!1,$e=be,Fe=Math.max(0,Math.round(O/5)*5);const Xe=rn=>{const nn=rn.clientX-ie,tn=rn.clientY-De;if(!te){if(Math.hypot(nn,tn)<4)return;te=!0}const wr={},xn=Math.round((D+nn+Te)/ke),an=P4(be,ye.idx,xn,Ce);an.some((Cr,Tr)=>Cr!==$e[Tr])&&(an.forEach((Cr,Tr)=>{Cr!==$e[Tr]&&(wr[ye.ids[Tr]]={...wr[ye.ids[Tr]]??{},colSpan:Cr})}),$e=an);const Wr=Math.max(me,Math.round((O+tn)/5)*5);Wr!==Fe&&(wr[r]={...wr[r]??{},minHeight:Wr},Fe=Wr),Object.keys(wr).length&&y(wr)},xr=()=>{ee.removeEventListener("pointermove",Xe),ee.removeEventListener("pointerup",xr),ee.removeEventListener("pointercancel",xr)};ee.addEventListener("pointermove",Xe),ee.addEventListener("pointerup",xr),ee.addEventListener("pointercancel",xr)};return ee.addEventListener("pointerdown",we),()=>ee.removeEventListener("pointerdown",we)},[r,y,je,l]),L.useEffect(()=>{const W=$.current,ee=W==null?void 0:W.querySelector(":scope > .wf__movex");if(!W||!ee||!y)return;const we=ge=>{var ke;if(ge.button!==0)return;ge.preventDefault(),ge.stopPropagation();const xe=W.closest(".wf");if(!xe)return;try{(ke=ee.setPointerCapture)==null||ke.call(ee,ge.pointerId)}catch{}const le=ne.current;if(!le)return;const Te=getComputedStyle(xe),D=parseFloat(Te.columnGap)||0,O=(xe.getBoundingClientRect().width+D)/Math.max(1,le.units),se=Number.isFinite(le.ats[le.idx])?le.ats[le.idx]:le.spans.slice(0,le.idx).reduce((Ce,ie)=>Ce+ie,0),F=ge.clientX;let U=!1,me=se;const ye=Ce=>{const ie=Ce.clientX-F;if(!U){if(Math.abs(ie)<4)return;U=!0}const De=Math.max(0,Math.min(le.room-le.spans[le.idx],se+Math.round(ie/O)));De!==me&&(me=De,y(r,{colAt:De}))},be=()=>{ee.removeEventListener("pointermove",ye),ee.removeEventListener("pointerup",be),ee.removeEventListener("pointercancel",be)};ee.addEventListener("pointermove",ye),ee.addEventListener("pointerup",be),ee.addEventListener("pointercancel",be)};return ee.addEventListener("pointerdown",we),()=>ee.removeEventListener("pointerdown",we)},[r,y,l,g==null?void 0:g.align]),i.jsxs("div",{ref:$,className:["wf__region",N?"is-filled":"is-empty",l?"is-sel":"",_?"is-drop":"",j?"is-hot":"",h?"is-sticky":"",Q?"is-free":"",pe?"is-freeitems":"",M.divider?"has-divider":"",s?"":Bu(a.tfx)].join(" "),id:d||void 0,"data-enter":m||void 0,"data-hide-scroll":!s&&M.hideOnScroll&&(h||M.sticky)?"":void 0,"data-region":r,"data-part":n??"",style:{...o,...sp(a.typo,Du),...s?{}:qu(a.tfx),"--part-color":(N==null?void 0:N.color)??"currentColor",borderRadius:`${a.radius}px`,borderWidth:`${a.border}px`,...Q?{gridColumn:void 0,gridRow:void 0,left:`${M.freeX??72}%`,top:`${M.freeY??58}%`,width:`clamp(104px, ${M.freeW??26}vw, 46vw)`,height:"auto",aspectRatio:"1 / 1",minHeight:0}:null,...pe&&Z?Object.fromEntries(Object.entries(Z).flatMap(([W,ee])=>[[`--fi${W}x`,`${ee.x}%`],[`--fi${W}y`,`${ee.y}%`]])):null,...!s&&Rs(a.alignY)?{alignSelf:Rs(a.alignY)}:null,zIndex:a.z||void 0,...!s&&a.bgShift?{viewTimeline:`--wfbg-${r} block`}:{},padding:s?0:`min(${a.padding}px, 6vw)`,backgroundColor:a.bg?a.bg:E?tp(p==null?void 0:p.bg,a.bgSee):void 0,...op(a,B)},children:[!s&&!N&&S&&i.jsx("button",{className:"wf__regiondel","data-hide-region":r,title:"이 빈 영역 지우기 (Ctrl+Z로 되돌리기)",children:"✕"}),!s&&v&&i.jsxs(i.Fragment,{children:[i.jsx("button",{className:"wf__edge is-t","data-add":"1","data-ins":v.top.at,"data-ins-idx":v.top.idx,title:"바로 위에 영역 추가",children:"+"}),i.jsx("button",{className:"wf__edge is-b","data-add":"1","data-ins":v.bottom.at,"data-ins-idx":v.bottom.idx,title:"바로 아래에 영역 추가",children:"+"})]}),!s&&w&&i.jsxs(i.Fragment,{children:[i.jsx("button",{className:"wf__edge is-l","data-add-col":`${w.rowId}:${w.at}`,title:"왼쪽에 영역 추가",children:"+"}),i.jsx("button",{className:"wf__edge is-r","data-add-col":`${w.rowId}:${w.at+1}`,title:"오른쪽에 영역 추가",children:"+"})]}),s?null:N?i.jsxs(i.Fragment,{children:[i.jsx("span",{className:"wf__tag",children:N.tagLabel??`<${N.tag}>`}),y&&l&&i.jsx("span",{className:"wf__resize",title:"끌어서 크기 조절 (가로: 칸 수 · 세로: 높이)"}),y&&l&&(g==null?void 0:g.align)==="자유"&&i.jsx("span",{className:"wf__movex",title:"끌어서 좌우로 옮기기 (행 안에서)"}),x&&i.jsx("span",{className:`wf__entertag${a.enterOff?" is-off":""}`,title:a.enterOff?"등장 효과 꺼짐 — Shift+클릭으로 켜기":`등장: ${m==="left"?"왼쪽에서":m==="right"?"오른쪽에서":"아래에서"} — Shift+클릭으로 끄기`,children:a.enterOff?"등장 ✕":`등장 ${m==="left"?"←":m==="right"?"→":"↑"}`}),(f==null?void 0:f.length)>0&&i.jsx("span",{className:"wf__fxtag",children:f.map(W=>{var ee;return((ee=Et[W.name])==null?void 0:ee.icon)??"•"}).join(" ")}),N.is3d?i.jsx("div",{ref:A,className:`wf-3d${M.fill?" is-fill":""}`,style:M.fill?void 0:{height:Q?"100%":`min(${M.boxHeight??N.h}px, 62vh)`},children:n==="model"&&!M.src&&!((Me=M.srcFile)!=null&&Me.id)&&i.jsxs("div",{className:"wf-3d__empty",children:[i.jsx("input",{className:"wf-3d__tab-radio wf-3d__tab-radio--glb",type:"radio",name:`m3d-${r}`,id:`m3d-${r}-glb`,defaultChecked:!0}),i.jsx("input",{className:"wf-3d__tab-radio wf-3d__tab-radio--env",type:"radio",name:`m3d-${r}`,id:`m3d-${r}-env`}),i.jsx("b",{children:"3D 모델(.glb) 파일이 필요합니다"}),i.jsxs("span",{className:"wf-3d__tabs",children:[i.jsx("label",{htmlFor:`m3d-${r}-glb`,children:"GLB (기본)"}),i.jsx("label",{htmlFor:`m3d-${r}-env`,children:"환경광 이미지"})]}),i.jsxs("span",{className:"wf-3d__pane wf-3d__pane--glb",children:[i.jsxs("span",{children:["오른쪽 ",i.jsx("b",{children:".glb 경로 / URL"})," 칸에 주소를 넣거나, ZIP으로 내보낸 뒤",i.jsx("code",{children:"assets/"})," 폴더에 파일을 두고 ",i.jsx("code",{children:"assets/모델명.glb"}),"라고 적으세요."]}),i.jsxs("span",{className:"wf-3d__links",children:[i.jsxs("a",{href:"https://poly.pizza/",target:"_blank",rel:"noopener noreferrer",children:["Poly Pizza ",i.jsx("em",{children:"CC0 · 가볍고 아기자기함 · 첫 추천"})]}),i.jsxs("a",{href:"https://www.opensource3dassets.com/en/gallery",target:"_blank",rel:"noopener noreferrer",children:["Open Source 3D Assets ",i.jsx("em",{children:"CC0 · GLB 991개 · 계정 불필요"})]}),i.jsxs("a",{href:"https://pixabay.com/3d-models/search/glb/",target:"_blank",rel:"noopener noreferrer",children:["Pixabay 3D ",i.jsx("em",{children:"무료 · 출처 표기 불필요"})]}),i.jsxs("a",{href:"https://womp.com/",target:"_blank",rel:"noopener noreferrer",children:["Womp ",i.jsx("em",{children:"직접 만들기 · 무료 · 브라우저에서"})]})]})]}),i.jsxs("span",{className:"wf-3d__pane wf-3d__pane--env",children:[i.jsxs("span",{children:["환경광(.hdr)은 모델의 ",i.jsx("b",{children:"조명과 반사"}),"를 정합니다. 아래에서 받아 오른쪽 ",i.jsx("b",{children:"환경광 파일 올리기"}),"로 넣거나, URL 칸에 주소를 적으세요.",i.jsx("b",{children:"배경까지 환경광으로"}),"를 켜면 배경으로도 깔립니다. 1k~2k 해상도면 충분합니다."]}),i.jsxs("span",{className:"wf-3d__links",children:[i.jsxs("a",{href:"https://polyhaven.com/hdris",target:"_blank",rel:"noopener noreferrer",children:["Poly Haven ",i.jsx("em",{children:"CC0 · .hdr 바로 받기 · 첫 추천"})]}),i.jsxs("a",{href:"https://ambientcg.com/list?type=hdri",target:"_blank",rel:"noopener noreferrer",children:["ambientCG ",i.jsx("em",{children:"CC0 · 계정 불필요"})]}),i.jsxs("a",{href:"https://hdri-haven.com/",target:"_blank",rel:"noopener noreferrer",children:["HDRI Haven ",i.jsx("em",{children:"CC0 · 야외·실내 다양"})]})]})]}),i.jsxs("span",{className:"wf-3d__warn",children:["3D는 ES 모듈을 씁니다 — ",i.jsx("b",{children:"ZIP으로 내보내 서버로 열어야"})," 보입니다. 파일을 더블클릭(file://)하면 브라우저가 차단합니다."]})]})}):i.jsx(dg,{partId:n,c:M,pages:c,current:u,sections:b,regionId:r,tfx:a.tfx,hasFlip:T,edit:C&&!s?(W,ee)=>C(r,W,ee):null})]}):i.jsxs(i.Fragment,{children:[i.jsx("span",{className:"wf__tag",children:r.toUpperCase()}),i.jsx("span",{className:"wf__label",children:"비어 있음"}),i.jsx("span",{className:"wf__hint",children:"왼쪽에서 파트를 고르세요"})]})]})}function pg({bg:e}){var s,l,c;const r=Sn((e==null?void 0:e.kind)==="image"?(s=e.image)==null?void 0:s.id:null),n=Sn((e==null?void 0:e.kind)==="video"?(l=e.video)==null?void 0:l.id:null),t=Sn((e==null?void 0:e.kind)==="video"?(c=e.poster)==null?void 0:c.id:null);if(!Ds(e))return null;const a=zp(e),o=e.mode&&Ol(e).includes("--tile")&&r?{backgroundImage:`url("${r}")`}:{};return i.jsxs("div",{className:Ol(e),style:o,"aria-hidden":"true",children:[e.kind==="video"?i.jsx("video",{className:"wf-bg__media",style:a,src:n??void 0,poster:t??void 0,autoPlay:!0,muted:!0,loop:!0,playsInline:!0}):i.jsx("img",{className:"wf-bg__media",style:a,src:r??void 0,alt:""}),i.jsx("span",{className:"wf-bg__veil",style:Mp(e)})]})}function Fs({page:e,pages:r=[],current:n=null,global:t,theme:a=null,effectsOn:o=!0,mini:s=!1,selected:l=null,dropId:c=null,hotIds:u=null,rootStyle:h=null,onEditText:f=null,background:p=null,flow:k=!1,onFreeMove:_,onFreeBox:j,onHideRegion:C,enterFx:b="없음",enterDelay:d,scrollBar:m=!1,customFont:x=null,siteDark:y=!1}){var xe,le,Te;const S=kt(e.wireframe),w=e.fills??{},v=e.overrides??{},g=e.extra??[],E=new Set((e.hidden??[]).filter(D=>!w[D])),N=Sn(x==null?void 0:x.id),M=D=>{var O;return{...Ts,radius:t.radius,padding:((O=Ln[w[D]])==null?void 0:O.pad)??t.padding,border:t.border,minHeight:0,bg:"",...v[D]??{}}},T=[...S.regions.map(D=>D.id),...g.flatMap(tr)],$={},P=[];for(const D of T){const O=w[D];if(!Qu.includes(O))continue;const se=(Te=(le=(xe=e.content)==null?void 0:xe[D])==null?void 0:le.title)==null?void 0:Te.trim();if(!se)continue;const F=Ku(se,D);let U=F,me=2;for(;P.some(ye=>ye.anchor===U);)U=`${F}-${me++}`;$[D]=U,P.push({regionId:D,label:ep(se),anchor:U})}const J=k?dp(S,w):null,H=Yc(S,v,t.gap),A=(D,O,se)=>{const F=k?J.place[se]?{gridColumn:J.place[se].col,gridRow:J.place[se].row}:{}:{gridColumn:D,gridRow:O};if(!H.place[se]||!F.gridColumn)return F;const U=H.fit[se];return{...F,gridColumn:(U==null?void 0:U.col)??H.place[se],...U?{width:U.width,justifySelf:U.justify}:null}},{total:B,from:Q,to:pe}=yo(S),Z=D=>Math.max(0,Math.min(B,D.at??B)),je=D=>g.filter(O=>Z(O)<=D).length,Se=D=>g.filter(O=>Z(O)<D).length,X=D=>{const O=Q(D),se=pe(D),F=j1(S,O-1)?O-1:0,U=j1(S,se-1)?se-1:B;return{top:{at:F,idx:je(F)},bottom:{at:U,idx:Se(U)}}},ne=(D,O)=>({top:{at:Z(D),idx:O},bottom:{at:Z(D),idx:O+1}}),Ne={},Re=(D,O,se)=>{var ke;const F=D.map(Ce=>Ce.id),U=D.map(Ce=>{var ie;return((ie=v[Ce.id])==null?void 0:ie.colSpan)||Ce.span*O}),me=se-((D[0].start-1)*O+1)+1,ye=(ke=v[D[0].id])==null?void 0:ke.rowAlign,be=D.map(Ce=>{var ie;return(ie=v[Ce.id])==null?void 0:ie.colAt});D.forEach((Ce,ie)=>{Ne[Ce.id]={ids:F,spans:U,idx:ie,units:se,room:me,align:ye,ats:be}})},ae=xp(S.cols);for(const D of ti(S).values())Re(D,ae,Gc(S.cols)*ae);for(const D of g)Re(tr(D).map((O,se)=>({id:O,start:se+1,span:1})),gt,D.cols*gt);const fe=qp(b),Me=fe==="none"||s?{}:Ip([...S.regions,...g.flatMap(D=>tr(D).map(O=>({id:O,row:D.id})))].filter(D=>{var O;return!((O=v[D.id])!=null&&O.enterOff)}),w),W=s?[]:[...S.regions.map(D=>D.id),...g.flatMap(tr)].filter(D=>{var O;return w[D]&&(((O=v[D])==null?void 0:O.bgShift)??"").trim()}).map(D=>({id:D,color:v[D].bgShift})),ee=(D,O)=>{const se=Kc(D,v,t.gap),F=tr(D);return i.jsx(os.Fragment,{children:i.jsxs("div",{className:`wf wf--row ${s?"wf--mini":""}`,style:{gridTemplateColumns:se.cols?`repeat(${D.cols*gt}, minmax(0, 1fr))`:`repeat(${D.cols}, minmax(0, 1fr))`,gap:`${t.gap}px`},children:[F.filter(U=>!E.has(U)).map(U=>{var me;return i.jsx(ed,{...ge(U,{...se.place[U]?{gridColumn:((me=se.fit[U])==null?void 0:me.col)??se.place[U]}:null,...se.fit[U]?{width:se.fit[U].width,justifySelf:se.fit[U].justify}:null,minHeight:s?10:0}),colSlot:D.cols<6?{rowId:D.id,at:F.indexOf(U)}:null,rowSlot:ne(D,O)},U)}),!s&&i.jsx("button",{className:"wf__rowdel","data-remove-row":D.id,title:"이 행 삭제",children:"✕"})]})},D.id)},we=(D,O)=>{const F=S.regions.filter(ie=>!E.has(ie.id)&&Q(ie)>=D&&Q(ie)<=O).map(ie=>({r:ie,p:A(ie.col,ie.row,ie.id)})),U=F.map(({p:ie})=>String(ie.gridRow??"")).filter(Boolean).map(ie=>{const[De,te]=ie.split("/").map(Xe=>Xe.trim()),$e=parseInt(De,10)||1,Fe=te?te==="-1"?1/0:parseInt(te,10)||$e+1:$e+1;return[$e,Fe]}),me=U.length?Math.min(...U.map(([ie])=>ie)):D,ye=U.length?Math.max(...U.map(([,ie])=>ie===1/0?me:ie)):O+1,be=ie=>{const[De,te]=String(ie).split("/").map(Fe=>Fe.trim()),$e=(parseInt(De,10)||1)-me+1;return te?te==="-1"?`${$e} / -1`:`${$e} / ${(parseInt(te,10)||$e+1)-me+1}`:String($e)},ke=(ie,De,te)=>{const $e=String(ie??"").trim().split(/\s+/).filter(Boolean);return $e.length&&$e.slice(De,te).join(" ")||void 0},Ce=s?ke(String(S.rows??"").trim().split(/\s+/).map(ie=>/fr$/.test(ie)?ie:"minmax(0, auto)").join(" "),D-1,O):k?ke(J.rows,me-1,ye-1):ke(S.rows,D-1,O);return i.jsx("div",{className:`wf ${s?"wf--mini":""}`,style:{gridTemplateColumns:s?ug(H.cols??S.cols):fg(H.cols??S.cols),gridTemplateRows:Ce,gap:`${t.gap}px`},children:F.map(({r:ie,p:De})=>i.jsx(ed,{...ge(ie.id,{...De,...De.gridRow?{gridRow:be(De.gridRow)}:null,minHeight:s?Math.max(8,ie.minH/26):w[ie.id]?0:ie.minH}),sticky:!s&&S.sticky===ie.id,rowSlot:X(ie)},ie.id))},`band-${D}`)},ge=(D,O)=>{var U,me;const se=M(D),F=w[D];return{id:D,partId:F,siteBgOn:!s&&Ds(p),content:(U=e.content)==null?void 0:U[D],fx:((me=e.fx)==null?void 0:me[D])??[],theme:a,effectsOn:o,detail:se,mini:s,selected:l===D,isDrop:c===D,isHot:u==="all"||u instanceof Set&&u.has(D),pages:r,current:n,onEditText:f,onFreeMove:_,onFreeBox:j,onHideRegion:C,rowInfo:Ne[D],sections:P,anchor:s?null:$[D],enterDir:Me[D],enterFxOn:fe!=="none"&&!s,style:{...O,minHeight:np(O.minHeight??0,se.minHeight)}}};return i.jsxs("div",{className:`wf-page ${s?"wf-page--mini":""} ${t.rowsMax?"is-rowmax":""} ${fe!=="none"&&!s?`wf-enter wf-enter--${fe}`:""} ${y&&!s?"is-dark":""}`,style:{...h??{},gap:`${t.gap}px`,...s?{}:{padding:`10px ${t.marginX??10}px`},...fe!=="none"&&!s?{"--enter-at":`${Hp(d)}%`}:{},...W.length?{timelineScope:W.map(D=>`--wfbg-${D.id}`).join(", ")}:{},...y&&!s?(()=>{const D=Wp(a);return{background:D.bg,color:D.text,"--wf-bg":D.bg,"--wf-text":D.text,"--wf-surface":D.surface,"--wf-line":D.border,"--wf-muted":D.muted}})():{}},children:[!s&&t.gridGuide&&i.jsx("span",{className:"wf-guide","aria-hidden":"true",style:{left:`${t.marginX??10}px`,right:`${t.marginX??10}px`,"--gcw":`calc((100% - ${((t.gridCols??12)-1)*(t.gap??10)}px) / ${t.gridCols??12})`,"--ggap":`${t.gap??10}px`}}),!s&&N&&i.jsx("style",{children:$l(N,x==null?void 0:x.name)}),!s&&i.jsx(pg,{bg:p}),W.map(D=>i.jsx("i",{className:"wf-bgshift","aria-hidden":"true",style:{background:D.color,animationTimeline:`--wfbg-${D.id}`}},D.id)),!s&&m&&i.jsx("span",{className:"wf-progress","aria-hidden":"true"}),!s&&((p==null?void 0:p.grain)??0)>0&&i.jsx("span",{className:"wf-grain",style:{opacity:p.grain},"aria-hidden":"true"}),wp(S,g).map(D=>D.kind==="row"?ee(D.row,g.indexOf(D.row)):we(D.from,D.to)),!s&&P.length>0&&i.jsx("span",{className:"wf-down","data-anchor":P[0].anchor,"aria-label":"아래로 이동",children:i.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("path",{d:"M12 5v14M6 13l6 6 6-6"})})}),!s&&i.jsxs("div",{className:"wf__add",children:[i.jsx("span",{className:"wf__add__label",children:"아래로 영역 추가"}),[1,2,3].map(D=>i.jsxs("button",{"data-add":D,className:"wf__add__btn",children:["+ ",D,"단"]},D))]})]})}let Jc=null;function Kp(e){Jc=e,window.dispatchEvent(new CustomEvent("pb:dragstart",{detail:e}))}function Qp(){Jc=null,window.dispatchEvent(new CustomEvent("pb:dragend"))}const rd=()=>Jc,mg={desktop:1280,tablet:768,mobile:390};function hg({page:e,pages:r,current:n,global:t,theme:a,effectsOn:o,rootStyle:s,selected:l,onSelect:c,onGoto:u,onAddRow:h,onRemoveRow:f,onDropEffect:p,onDropPart:k,onEditText:_,onFreeMove:j,onFreeBox:C,device:b,preview:d,background:m,enterFx:x,enterDelay:y,onToggleEnter:S,onClearRegion:w,onHideRegion:v,onAddCol:g,scrollBar:E,customFont:N}){const M=L.useRef(null),[T,$]=L.useState(!1),[P,J]=L.useState(null),[H,A]=L.useState(null),[B,Q]=L.useState(null),pe=L.useRef(null);pe.current=H;const Z=L.useRef({});Z.current={onSelect:c,onGoto:u,onAddRow:h,onRemoveRow:f,onDropEffect:p,onDropPart:k,onToggleEnter:S,onClearRegion:w,onHideRegion:v,onAddCol:g,preview:d};const je=L.useMemo(()=>{if(!P)return null;const X=new Set,ne=[...e.fills?Object.keys(e.fills):[]];if(P.kind==="effect")ne.forEach(Ne=>{uo(P.id,e.fills[Ne])&&X.add(Ne)});else return"all";return X},[P,e.fills]);L.useEffect(()=>{const X=Ne=>J(Ne.detail),ne=()=>{J(null),A(null)};return window.addEventListener("pb:dragstart",X),window.addEventListener("pb:dragend",ne),()=>{window.removeEventListener("pb:dragstart",X),window.removeEventListener("pb:dragend",ne)}},[]);const Se=L.useCallback(X=>{M.current=X;const ne={timer:null,fired:!1,x:0,y:0},Ne=()=>{clearTimeout(ne.timer),ne.timer=null};X.addEventListener("pointerdown",ae=>{var Me,W;if(ae.pointerType!=="touch"||Z.current.preview)return;const fe=(W=(Me=ae.target).closest)==null?void 0:W.call(Me,"[data-region]");fe!=null&&fe.dataset.part&&(ne.x=ae.clientX,ne.y=ae.clientY,ne.fired=!1,ne.timer=setTimeout(()=>{var ee,we,ge,xe,le;ne.fired=!0,(we=(ee=Z.current).onToggleEnter)==null||we.call(ee,fe.dataset.region);try{(le=(xe=(ge=X.defaultView)==null?void 0:ge.navigator)==null?void 0:xe.vibrate)==null||le.call(xe,10)}catch{}},550))}),X.addEventListener("pointermove",ae=>{ne.timer&&Math.hypot(ae.clientX-ne.x,ae.clientY-ne.y)>8&&Ne()}),X.addEventListener("pointerup",Ne),X.addEventListener("pointercancel",Ne);let Re=0;X.addEventListener("scroll",()=>{const ae=X.documentElement.scrollTop,fe=ae-Re;Re=ae,!(Math.abs(fe)<4)&&X.querySelectorAll("[data-hide-scroll]").forEach(Me=>{Me.classList.toggle("wf-nav-hidden",fe>0&&ae>80)})},{passive:!0}),X.addEventListener("click",ae=>{var O,se,F,U,me,ye,be,ke,Ce,ie,De,te,$e,Fe,Xe,xr,en,rn,nn,tn,wr,xn,an,Wr,Cr,Tr,Nt,at;const fe=Z.current;if(ne.fired){ne.fired=!1,ae.stopPropagation(),ae.preventDefault();return}const Me=(se=(O=ae.target).closest)==null?void 0:se.call(O,"[data-detail-close]");if(Me){ae.stopPropagation(),(F=Me.closest(".wf-detail"))==null||F.classList.remove("is-open");return}if(fe.preview){const We=(me=(U=ae.target).closest)==null?void 0:me.call(U,"[data-detail]");if(We){ae.stopPropagation(),(ye=X.getElementById(We.dataset.detail))==null||ye.classList.add("is-open");return}}if((ke=(be=ae.target).closest)==null?void 0:ke.call(be,"[data-mode-toggle]"))return ae.stopPropagation(),$(We=>!We);const ee=(ie=(Ce=ae.target).closest)==null?void 0:ie.call(Ce,"[data-anchor]");if(ee){ae.stopPropagation(),(De=X.getElementById(ee.dataset.anchor))==null||De.scrollIntoView({behavior:"smooth",block:"start"});return}const we=($e=(te=ae.target).closest)==null?void 0:$e.call(te,"[data-goto]");if(we)return ae.stopPropagation(),fe.onGoto(we.dataset.goto);if(fe.preview)return;if(ae.shiftKey){const We=(Xe=(Fe=ae.target).closest)==null?void 0:Xe.call(Fe,"[data-region]");if(We!=null&&We.dataset.part)return ae.preventDefault(),(xr=fe.onToggleEnter)==null?void 0:xr.call(fe,We.dataset.region)}const ge=(rn=(en=ae.target).closest)==null?void 0:rn.call(en,"[data-add-col]");if(ge){ae.stopPropagation();const[We,zt]=ge.dataset.addCol.split(":");return(nn=fe.onAddCol)==null?void 0:nn.call(fe,We,Number(zt))}const xe=(wr=(tn=ae.target).closest)==null?void 0:wr.call(tn,"[data-add]");if(xe){ae.stopPropagation();const We=xe.closest("[data-ins]");return fe.onAddRow(Number(xe.dataset.add),We?Number(We.dataset.ins):void 0,(We==null?void 0:We.dataset.insIdx)==null?void 0:Number(We.dataset.insIdx))}const le=(an=(xn=ae.target).closest)==null?void 0:an.call(xn,"[data-remove-row]");if(le)return fe.onRemoveRow(le.dataset.removeRow);const Te=(Cr=(Wr=ae.target).closest)==null?void 0:Cr.call(Wr,"[data-hide-region]");if(Te)return ae.preventDefault(),ae.stopPropagation(),(Tr=fe.onHideRegion)==null?void 0:Tr.call(fe,Te.dataset.hideRegion);const D=(at=(Nt=ae.target).closest)==null?void 0:at.call(Nt,"[data-region]");fe.onSelect(D?D.dataset.region:null)},!0),X.addEventListener("contextmenu",ae=>{var xe,le;const fe=Z.current;if(fe.preview)return;const Me=(le=(xe=ae.target).closest)==null?void 0:le.call(xe,"[data-region]");if(!Me)return;ae.preventDefault();const W=Me.dataset.region;fe.onSelect(W);const ee=X.defaultView.frameElement,we=ee.getBoundingClientRect(),ge=we.width/ee.clientWidth;Q({x:we.left+ae.clientX*ge,y:we.top+ae.clientY*ge,regionId:W,partId:Me.dataset.part||""})}),X.addEventListener("dragover",ae=>{var ge,xe;const fe=rd();if(!fe||Z.current.preview)return;ae.preventDefault();const Me=(xe=(ge=ae.target).closest)==null?void 0:xe.call(ge,"[data-region]");if(!Me)return A(null);const W=Me.dataset.region,ee=Me.dataset.part||"",we=fe.kind==="part"?!0:uo(fe.id,ee);A(we?W:null)}),X.addEventListener("dragleave",ae=>{ae.relatedTarget||A(null)}),X.addEventListener("drop",ae=>{const fe=rd();if(!fe)return;ae.preventDefault();const Me=pe.current;Me&&(fe.kind==="part"?Z.current.onDropPart(Me,fe.id):Z.current.onDropEffect(Me,fe.id)),A(null),J(null)})},[]);return L.useEffect(()=>{const X=M.current;X&&(X.body.classList.toggle("pb-preview",d),X.body.classList.toggle("pb-editing",!d))},[d]),L.useEffect(()=>{var X,ne;(ne=(X=M.current)==null?void 0:X.defaultView)==null||ne.scrollTo(0,0)},[n]),i.jsxs("div",{className:"pb-canvas",children:[i.jsx(Jm,{width:mg[b],onReady:Se,children:i.jsx(Fs,{page:e,pages:r,current:n,global:t,theme:a,effectsOn:o,rootStyle:s,selected:d?null:l,dropId:H,hotIds:je,onEditText:d?null:_,onFreeMove:d?null:j,onFreeBox:d?null:C,onHideRegion:d?null:v,onAddCol:d?null:g,background:m,flow:d,enterFx:x,enterDelay:y,scrollBar:E,siteDark:T,customFont:N})}),B&&i.jsx("div",{className:"pb-ctx__veil",onClick:()=>Q(null),onContextMenu:X=>{X.preventDefault(),Q(null)},children:i.jsxs("div",{className:"pb-ctx",style:{left:Math.min(B.x,window.innerWidth-190),top:Math.min(B.y,window.innerHeight-120)},onClick:X=>X.stopPropagation(),children:[i.jsxs("b",{className:"pb-ctx__title",children:[B.regionId.toUpperCase()," 영역"]}),i.jsx("button",{disabled:!B.partId,onClick:()=>{var X,ne;(ne=(X=Z.current).onToggleEnter)==null||ne.call(X,B.regionId),Q(null)},children:"등장 효과 켜기 / 끄기"}),i.jsx("button",{className:"pb-danger",disabled:!B.partId,onClick:()=>{var X,ne;(ne=(X=Z.current).onClearRegion)==null||ne.call(X,B.regionId),Q(null)},children:"파트 비우기"})]})})]})}const gg="modulepreload",xg=function(e){return"/"+e},nd={},wg=function(r,n,t){let a=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));a=Promise.allSettled(n.map(c=>{if(c=xg(c),c in nd)return;nd[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":gg,u||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),u)return new Promise((p,k)=>{f.addEventListener("load",p),f.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(s){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s}return a.then(s=>{for(const l of s||[])l.status==="rejected"&&o(l.reason);return r().catch(o)})},bg="https://api.openverse.org/v1/images/",td=20,Ai=12;async function ad(e,r={}){var l;const n=String(e??"").trim();if(!n)return{items:[],total:0};const t=new URLSearchParams({q:n,license:"cc0,pdm",page_size:String(Math.min(r.perPage??td,td)),page:String(r.page??1)}),a=await fetch(`${bg}?${t}`);if(a.status===429)throw new Error("검색이 잠시 막혔습니다. 몇 분 뒤에 다시 시도하세요.");if(!a.ok){let c="";try{c=((l=await a.json())==null?void 0:l.detail)??""}catch{}throw new Error(c||`사진 검색에 실패했습니다 (${a.status}). 인터넷 연결을 확인하세요.`)}const o=await a.json(),s=(o.results??[]).map(c=>({id:c.id,title:c.title||"제목 없음",creator:c.creator||"",license:c.license||"",provider:c.provider||"",width:c.width,height:c.height,thumb:c.thumbnail,full:c.url}));return{items:s,total:o.result_count??s.length}}async function vg(e){const r=[e.full,`${e.thumb}?full_size=true`,e.thumb].filter(Boolean);for(const n of r)try{const t=await fetch(n);if(!t.ok)continue;const a=await t.blob();if(!a.type.startsWith("image/"))continue;return new File([a],`${e.id}.jpg`,{type:a.type})}catch{}throw new Error("사진을 내려받을 수 없습니다. 다른 사진을 골라 보세요.")}const yg=e=>({title:e.title,creator:e.creator,license:e.license,provider:e.provider,source:"openverse"}),_g=["desk","texture","gradient","city","nature","paper","studio","minimal"];function kg({onPick:e,onClose:r}){const[n,t]=L.useState(""),[a,o]=L.useState([]),[s,l]=L.useState(0),[c,u]=L.useState("idle"),[h,f]=L.useState(""),[p,k]=L.useState(null),[_,j]=L.useState(0),[C,b]=L.useState(!1),[d,m]=L.useState(!1),x=L.useRef(null);L.useEffect(()=>{var g;(g=x.current)==null||g.focus()},[]);const y=async g=>{t(g),u("loading"),f("");try{const{items:E,total:N}=await ad(g,{page:1});o(E),l(N),j(1),b(E.length===0),u("done")}catch(E){f((E==null?void 0:E.message)??"검색에 실패했습니다."),u("error")}},S=async()=>{if(d)return;m(!0),f("");const g=_+1;try{const{items:E}=await ad(n,{page:g});o(N=>{const M=new Set(N.map(T=>T.id));return[...N,...E.filter(T=>!M.has(T.id))]}),j(g),(E.length===0||g>=Ai)&&b(!0)}catch(E){f((E==null?void 0:E.message)??"더 불러오지 못했습니다.")}finally{m(!1)}},w=c==="done"&&a.length>0&&!C&&_<Ai&&a.length<s,v=async g=>{k(g.id),f("");try{const E=await vg(g);await e(E,{alt:g.title,credit:yg(g)}),r()}catch(E){f((E==null?void 0:E.message)??"사진을 넣을 수 없습니다."),k(null)}};return i.jsx("div",{className:"pb-modal",onClick:g=>g.target===g.currentTarget&&r(),children:i.jsxs("div",{className:"pb-modal__box pb-stock",children:[i.jsxs("div",{className:"pb-modal__head",children:[i.jsx("b",{children:"무료 사진 찾기"}),i.jsx("span",{className:"pb-hint",children:c==="done"?`${s.toLocaleString()}장 중 ${a.length}장`:"Openverse · 저작자 표시가 필요 없는 사진만"}),i.jsx("span",{className:"pb-modal__tools",children:i.jsx("button",{onClick:r,children:"닫기"})})]}),i.jsxs("form",{className:"pb-stock__search",onSubmit:g=>{g.preventDefault(),y(n)},children:[i.jsx("input",{ref:x,type:"text",value:n,placeholder:"영어로 검색하면 결과가 훨씬 많습니다 — desk, texture, city…",onChange:g=>t(g.target.value)}),i.jsx("button",{type:"submit",className:"is-on",disabled:c==="loading",children:c==="loading"?"찾는 중…":"검색"})]}),i.jsx("div",{className:"pb-stock__tags",children:_g.map(g=>i.jsx("button",{type:"button",onClick:()=>y(g),children:g},g))}),h&&i.jsx("p",{className:"pb-note pb-note--warn",children:h}),c==="idle"&&i.jsxs("p",{className:"pb-note pb-note--dashed",children:["찾은 사진은 ",i.jsx("b",{children:"내 프로젝트에 저장"}),"됩니다. 내보낸 사이트는 인터넷 없이도 그대로 열립니다."]}),c==="done"&&a.length===0&&i.jsx("p",{className:"pb-note pb-note--dashed",children:"결과가 없습니다. 다른 낱말로 찾아보세요."}),i.jsxs("div",{className:"pb-stock__grid",children:[a.map(g=>i.jsxs("button",{type:"button",className:`pb-stock__item ${p===g.id?"is-busy":""}`,onClick:()=>v(g),disabled:!!p,title:`${g.title}${g.creator?` · ${g.creator}`:""} · ${g.license.toUpperCase()}`,children:[i.jsx("img",{src:g.thumb,alt:g.title}),i.jsx("span",{children:p===g.id?"넣는 중…":g.title})]},g.id)),w&&i.jsx("button",{type:"button",className:"pb-stock__more",onClick:S,disabled:d||!!p,children:d?"불러오는 중…":"더 보기"}),c==="done"&&a.length>0&&!w&&i.jsx("p",{className:"pb-note pb-note--dashed pb-stock__end",children:_>=Ai?"여기까지입니다. 다른 낱말로 찾으면 새 사진이 나옵니다.":"더 보여 줄 사진이 없습니다. 다른 낱말로 찾아보세요."})]})]})})}function ut({title:e,body:r="",ok:n="확인",cancel:t="취소",danger:a=!1}){return new Promise(o=>{const s=document.activeElement,l=document.createElement("div");l.className="pb-modal pb-confirm",l.setAttribute("role","dialog"),l.setAttribute("aria-modal","true");const c=document.createElement("div");c.className="pb-confirm__box";const u=document.createElement("b");if(u.className="pb-confirm__title",u.textContent=e,c.appendChild(u),r){const j=document.createElement("p");j.className="pb-confirm__body",r.split(`
`).forEach((C,b)=>{b&&j.appendChild(document.createElement("br")),j.appendChild(document.createTextNode(C))}),c.appendChild(j)}const h=document.createElement("div");h.className="pb-confirm__row";const f=document.createElement("button");f.textContent=t;const p=document.createElement("button");p.textContent=n,p.className=a?"pb-confirm__ok is-danger":"pb-confirm__ok",h.append(f,p),c.appendChild(h),l.appendChild(c);const k=j=>{var C;document.removeEventListener("keydown",_,!0),l.remove(),(C=s==null?void 0:s.focus)==null||C.call(s),o(j)},_=j=>{j.key==="Escape"&&(j.stopPropagation(),k(!1)),j.key==="Enter"&&document.activeElement!==f&&(j.stopPropagation(),k(!0)),j.key==="Tab"&&(j.preventDefault(),(document.activeElement===p?f:p).focus())};p.addEventListener("click",()=>k(!0)),f.addEventListener("click",()=>k(!1)),l.addEventListener("click",j=>{j.target===l&&k(!1)}),document.addEventListener("keydown",_,!0),document.body.appendChild(l),(a?f:p).focus()})}function jg({spec:e,value:r,set:n}){const t=Array.isArray(r)?r:[],[a,o]=L.useState(()=>new Set(t.length===1?[0]:[])),s=e.itemFields.find(_=>!_.type||_.type==="text"||_.type==="textarea")??e.itemFields[0],l=_=>n(_),c=(_,j,C)=>l(t.map((b,d)=>d===_?{...b,[j]:C}:b)),u=_=>o(j=>{const C=new Set(j);return C.has(_)?C.delete(_):C.add(_),C}),h=_=>o(j=>new Set([...j].map(_).filter(C=>C!=null))),f=(_,j)=>{const C=_+j;if(C<0||C>=t.length)return;const b=[...t],[d]=b.splice(_,1);b.splice(C,0,d),l(b),h(m=>m===_?C:m===C?_:m)},p=_=>{l(t.filter((j,C)=>C!==_)),h(j=>j===_?null:j>_?j-1:j)},k=()=>{l([...t,{...e.itemDefaults??{}}]),o(_=>new Set([..._,t.length]))};return i.jsxs("div",{className:"pb-field",children:[i.jsxs("span",{className:"pb-field__label",children:[e.label,i.jsxs("b",{children:[t.length,"개"]})]}),i.jsx("div",{className:"pb-list",children:t.map((_,j)=>i.jsxs("details",{className:"pb-item",open:a.has(j),onToggle:C=>{C.currentTarget.open!==a.has(j)&&u(j)},children:[i.jsxs("summary",{className:"pb-item__head",children:[i.jsx("span",{className:"pb-item__n",children:j+1}),i.jsx("span",{className:"pb-item__title",children:typeof _[s.key]=="string"&&_[s.key]||"(제목 없음)"}),i.jsxs("span",{className:"pb-item__tools",children:[i.jsx("button",{type:"button",title:"위로","aria-label":"위로",disabled:j===0,onClick:C=>{C.preventDefault(),f(j,-1)},children:"↑"}),i.jsx("button",{type:"button",title:"아래로","aria-label":"아래로",disabled:j===t.length-1,onClick:C=>{C.preventDefault(),f(j,1)},children:"↓"}),i.jsx("button",{type:"button",title:"삭제","aria-label":"삭제",className:"pb-danger",onClick:C=>{C.preventDefault(),p(j)},children:"✕"})]})]}),i.jsx("div",{className:"pb-item__body",children:e.itemFields.map(C=>i.jsx(Or,{spec:C,value:_[C.key],onChange:(b,d)=>c(j,b,d)},C.key))})]},j))}),i.jsxs("button",{type:"button",className:"pb-list__add",onClick:k,children:["+ ",e.itemLabel??"항목"," 추가"]})]})}function Sg({spec:e,value:r,onChange:n}){const t=L.useRef(null),[a,o]=L.useState(!1),[s,l]=L.useState("넣는 중…"),[c,u]=L.useState(""),[h,f]=L.useState(""),p=async k=>{if(!k)return;u(""),f("");let _=k;const j=C=>(C/1048576).toFixed(1);if(e.compress==="glb"&&e.maxMB&&k.size>e.maxMB*1024*1024&&await ut({title:"파일이 커서 압축이 필요합니다",body:`파일이 ${j(k.size)}MB로 제한(${e.maxMB}MB)을 넘습니다.
브라우저에서 Draco로 자동 압축할까요? (파일 크기에 따라 수십 초 걸릴 수 있습니다)`,ok:"압축하기"})){o(!0),l("압축 중…");try{const{compressGlb:b}=await wg(async()=>{const{compressGlb:m}=await import("./glbCompress-IS3wb9T6.js");return{compressGlb:m}},[]),d=await b(_);d&&(f(`${j(k.size)}MB → ${j(d.size)}MB로 압축했습니다.`),_=d)}catch{}}o(!0),l("넣는 중…");try{const C=await x4(_,e.maxMB);r!=null&&r.id&&await fo(r.id),n(e.key,C)}catch(C){f(""),u((C==null?void 0:C.message)??"파일을 넣을 수 없습니다.")}finally{o(!1)}};return i.jsxs("div",{className:"pb-field",children:[i.jsxs("span",{className:"pb-field__label",children:[e.label,r!=null&&r.bytes?i.jsx("b",{children:Uc(r.bytes)}):null]}),i.jsxs("div",{className:"pb-file",children:[i.jsx("span",{className:"pb-file__name",children:a?s:(r==null?void 0:r.name)||"없음"}),i.jsx("button",{type:"button",onClick:()=>{var k;return(k=t.current)==null?void 0:k.click()},disabled:a,children:r!=null&&r.id?"바꾸기":"파일 고르기"}),(r==null?void 0:r.id)&&i.jsx("button",{type:"button",className:"pb-danger",onClick:async()=>{await fo(r.id),n(e.key,null)},children:"✕"}),i.jsx("input",{ref:t,type:"file",accept:e.accept??".pdf,.zip,.doc,.docx,image/*",hidden:!0,onChange:k=>{var _;p((_=k.target.files)==null?void 0:_[0]),k.target.value=""}})]}),c&&i.jsx("p",{className:"pb-note pb-note--warn",children:c}),h&&i.jsx("p",{className:"pb-note",children:h})]})}function Cg({spec:e,value:r,onChange:n}){const t=L.useRef(null),[a,o]=L.useState(!1),[s,l]=L.useState(""),[c,u]=L.useState(!1),h=Sn(r==null?void 0:r.id),f=async(k,_={})=>{if(k){o(!0),l("");try{const j=await g4(k);r!=null&&r.id&&await fo(r.id),n(e.key,{...j,alt:_.alt??(r==null?void 0:r.alt)??"",fit:(r==null?void 0:r.fit)??"cover",..._.credit?{credit:_.credit}:{}})}catch(j){throw l((j==null?void 0:j.message)??"이미지를 넣을 수 없습니다."),j}finally{o(!1)}}},p=async()=>{r!=null&&r.id&&await fo(r.id),n(e.key,null)};return i.jsxs("div",{className:"pb-field",children:[i.jsxs("span",{className:"pb-field__label",children:[e.label,r!=null&&r.bytes?i.jsx("b",{children:Uc(r.bytes)}):null]}),i.jsx("div",{className:`pb-img ${r!=null&&r.id?"has-img":""}`,onDragOver:k=>{k.preventDefault()},onDrop:k=>{var _;k.preventDefault(),f((_=k.dataTransfer.files)==null?void 0:_[0]).catch(()=>{})},children:r!=null&&r.id?i.jsx("img",{className:"pb-img__thumb",src:h??void 0,alt:""}):i.jsx("span",{className:"pb-img__empty",children:a?"넣는 중…":"사진을 끌어다 놓거나 아래에서 고르세요"})}),i.jsxs("div",{className:"pb-img__tools",children:[i.jsx("button",{type:"button",onClick:()=>{var k;return(k=t.current)==null?void 0:k.click()},disabled:a,children:r!=null&&r.id?"바꾸기":"사진 올리기"}),i.jsx("button",{type:"button",onClick:()=>u(!0),disabled:a,children:"무료 사진"}),(r==null?void 0:r.id)&&i.jsx("button",{type:"button",className:"pb-danger",onClick:p,children:"비우기"}),i.jsx("input",{ref:t,type:"file",accept:"image/*",hidden:!0,onChange:k=>{var _;f((_=k.target.files)==null?void 0:_[0]).catch(()=>{}),k.target.value=""}})]}),s&&i.jsx("p",{className:"pb-note pb-note--warn",children:s}),c&&i.jsx(kg,{onPick:f,onClose:()=>u(!1)}),(r==null?void 0:r.id)&&i.jsxs(i.Fragment,{children:[i.jsxs("label",{className:"pb-field",children:[i.jsxs("span",{className:"pb-field__label",children:["대체 텍스트",!r.alt&&i.jsx("b",{className:"pb-req",children:"필요"})]}),i.jsx("input",{type:"text",value:r.alt??"",placeholder:"사진에 무엇이 담겨 있는지",onChange:k=>n(e.key,{...r,alt:k.target.value})})]}),i.jsxs("label",{className:"pb-field pb-field--row",children:[i.jsx("span",{className:"pb-field__label",children:"맞춤"}),i.jsxs("select",{value:r.fit??"cover",onChange:k=>n(e.key,{...r,fit:k.target.value}),children:[i.jsx("option",{value:"cover",children:"칸을 꽉 채우기 (잘릴 수 있음)"}),i.jsx("option",{value:"contain",children:"전체 보이기 (여백 생김)"})]})]})]})]})}function Or({spec:e,value:r,onChange:n}){const t=a=>n(e.key,a);switch(e.type){case"image":return i.jsx(Cg,{spec:e,value:r,onChange:n});case"file":return i.jsx(Sg,{spec:e,value:r,onChange:n});case"list":return i.jsx(jg,{spec:e,value:r,set:t});case"range":return i.jsxs("label",{className:"pb-field",children:[i.jsxs("span",{className:"pb-field__label",children:[e.label,i.jsxs("b",{children:[typeof r=="number"?+r.toFixed(3):r,e.unit??""]})]}),i.jsx("input",{type:"range",min:e.min,max:e.max,step:e.step??1,value:r??e.min,onChange:a=>t(Number(a.target.value))})]});case"boolean":return i.jsxs("label",{className:"pb-field pb-field--row",children:[i.jsx("span",{className:"pb-field__label",children:e.label}),i.jsx("input",{type:"checkbox",checked:!!r,onChange:a=>t(a.target.checked)})]});case"select":return i.jsxs("label",{className:"pb-field pb-field--row",children:[i.jsx("span",{className:"pb-field__label",children:e.label}),i.jsx("select",{value:String(r),onChange:a=>{const o=a.target.value,s=e.options.find(l=>String(l)===o);t(s)},children:e.options.map(a=>i.jsx("option",{value:String(a),children:a===!1?"없음":String(a)},String(a)))})]});case"color":return i.jsxs("label",{className:"pb-field pb-field--row",children:[i.jsx("span",{className:"pb-field__label",children:e.label}),i.jsxs("span",{className:"pb-color",children:[i.jsx("input",{type:"color",value:r||"#000000",onChange:a=>t(a.target.value)}),i.jsx("input",{type:"text",className:"pb-color__hex",value:r??"",placeholder:"상속",onChange:a=>t(a.target.value)})]})]});case"colors":return i.jsxs("div",{className:"pb-field",children:[i.jsx("span",{className:"pb-field__label",children:e.label}),i.jsx("span",{className:"pb-colors",children:(r??[]).map((a,o)=>i.jsx("input",{type:"color",value:a,onChange:s=>{const l=[...r];l[o]=s.target.value,t(l)}},o))})]});case"textarea":return i.jsxs("label",{className:"pb-field",children:[i.jsx("span",{className:"pb-field__label",children:e.label}),i.jsx("textarea",{rows:3,value:r??"",onChange:a=>t(a.target.value)})]});default:return i.jsxs("label",{className:"pb-field",children:[i.jsx("span",{className:"pb-field__label",children:e.label}),i.jsx("input",{type:"text",value:r??"",onChange:a=>t(a.target.value)})]})}}function kn({text:e}){const r=L.useRef(null),[n,t]=L.useState(!1),a=()=>{const o=r.current;o&&t(window.innerHeight-o.getBoundingClientRect().bottom<120)};return e?i.jsx("button",{ref:r,type:"button",className:`pb-why${n?" is-up":""}`,"data-tip":e,"aria-label":`설명: ${e}`,onMouseEnter:a,onFocus:a,onClick:o=>{o.preventDefault(),o.stopPropagation()},children:"?"}):null}function Xp({id:e,label:r}){return i.jsxs("span",{className:`pb-fxdemo pb-fxdemo--${e}`,"aria-hidden":"true",children:[i.jsx("i",{}),i.jsx("i",{}),i.jsx("i",{}),i.jsx("em",{children:r})]})}const Eg={머리:"맨 위 · 메뉴",본문:"내용을 담는 칸",배너:"눈에 띄는 띠",마무리:"맨 아래 · 연락처","3D":"부가 기능"};function Ng({pages:e,current:r,page:n,global:t,editing:a,setEditing:o,onSwitchPage:s,onAddPage:l,onRenamePage:c,onRemovePage:u,onMovePage:h,onWireframe:f,onTemplate:p,applyAll:k,onApplyAll:_,site:j,onSite:C}){const b=(j==null?void 0:j.navMode)??"anchor";return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"pb-panel__title",children:["사이트 구성",i.jsx(kn,{text:"내보낸 결과물에 적용됩니다. 편집은 지금처럼 페이지 단위로 합니다."}),i.jsx("span",{className:"pb-hint",children:"메뉴가 움직이는 방식"})]}),i.jsxs("div",{className:"pb-navmode",children:[i.jsxs("label",{className:b==="anchor"?"is-on":"",children:[i.jsx("input",{type:"radio",name:"pb-navmode",checked:b==="anchor",onChange:()=>C({navMode:"anchor"})}),i.jsx("b",{children:"한 페이지 (퀵메뉴)"}),i.jsx("span",{children:"전부 세로로 잇고, 메뉴는 해당 위치로 스크롤"})]}),i.jsxs("label",{className:b==="pages"?"is-on":"",children:[i.jsx("input",{type:"radio",name:"pb-navmode",checked:b==="pages",onChange:()=>C({navMode:"pages"})}),i.jsx("b",{children:"여러 페이지"}),i.jsx("span",{children:"페이지별 파일로 나눠 링크 이동"})]})]}),i.jsxs("div",{className:"pb-panel__title",children:["페이지",i.jsx("span",{className:"pb-hint",children:"상단 메뉴가 됩니다"})]}),i.jsxs("div",{className:"pb-pages",children:[e.map((d,m)=>i.jsxs("div",{className:`pb-page ${d.id===r?"is-on":""}`,draggable:a!==d.id,onDragStart:x=>{x.dataTransfer.effectAllowed="move",x.dataTransfer.setData("text/pb-page",String(m))},onDragOver:x=>{x.dataTransfer.types.includes("text/pb-page")&&(x.preventDefault(),x.currentTarget.classList.add("is-dragover"))},onDragLeave:x=>x.currentTarget.classList.remove("is-dragover"),onDrop:x=>{x.preventDefault(),x.currentTarget.classList.remove("is-dragover");const y=Number(x.dataTransfer.getData("text/pb-page"));Number.isInteger(y)&&y!==m&&h(e[y].id,m-y)},children:[a===d.id?i.jsx("input",{autoFocus:!0,className:"pb-page__input",defaultValue:d.name,onBlur:x=>{c(d.id,x.target.value),o(null)},onKeyDown:x=>{x.key==="Enter"&&x.currentTarget.blur(),x.key==="Escape"&&o(null)}}):i.jsxs("button",{className:"pb-page__name",onClick:()=>s(d.id),children:[i.jsx("span",{className:"pb-page__idx",children:m+1}),d.name]}),i.jsxs("span",{className:"pb-page__tools",children:[i.jsx("button",{onClick:()=>h(d.id,-1),disabled:m===0,title:"위로",children:"↑"}),i.jsx("button",{onClick:()=>h(d.id,1),disabled:m===e.length-1,title:"아래로",children:"↓"}),i.jsx("button",{onClick:()=>o(d.id),title:"이름 바꾸기",children:"✎"}),i.jsx("button",{className:"pb-danger",onClick:()=>u(d.id),disabled:e.length<=1,title:"삭제",children:"✕"})]})]},d.id)),i.jsx("button",{className:"pb-page__add",onClick:l,children:"+ 페이지 추가"})]}),i.jsxs("div",{className:"pb-panel__title",children:["템플릿",i.jsx(kn,{text:`고르면 ${n.name} 페이지의 구조와 파트 배치가 바뀝니다. 배경·글꼴은 그대로입니다.`}),i.jsx("span",{className:"pb-hint",children:"구조만 · 스타일 제외"})]}),i.jsxs("label",{className:"pb-field pb-field--row pb-applyall",children:[i.jsxs("span",{className:"pb-field__label",children:["모든 페이지에 적용",i.jsx(kn,{text:`끄면 ${n.name} 페이지에만 적용됩니다. 아래 템플릿과 빈 뼈대 모두에 해당합니다.`})]}),i.jsx("input",{type:"checkbox",checked:k,onChange:d=>_(d.target.checked)})]}),i.jsx("div",{className:"pb-tpls",children:ra.map(d=>i.jsxs("button",{className:`pb-tpl ${n.wireframe===d.id?"is-on":""}`,onClick:()=>p(d.id),title:d.desc,children:[i.jsx("span",{className:"pb-tpl__preview",children:i.jsx(Fs,{page:n.wireframe===d.id?n:{wireframe:d.id,fills:d.fills,extra:[]},global:t,mini:!0})}),i.jsxs("span",{className:"pb-tpl__meta",children:[i.jsx("b",{children:d.label}),i.jsx("span",{className:"pb-tpl__tagline",children:d.tagline}),i.jsx("code",{className:"pb-tpl__src",children:d.source})]})]},d.id))}),i.jsxs("div",{className:"pb-panel__title",children:["빈 뼈대",i.jsx("span",{className:"pb-hint",children:"내용 없이 칸만"})]}),i.jsx("div",{className:"pb-wfs",children:Dl.map(d=>i.jsxs("button",{className:`pb-wf ${n.wireframe===d.id?"is-on":""}`,onClick:()=>f(d.id),title:d.desc,children:[i.jsx("span",{className:"pb-wf__preview",children:i.jsx(Fs,{page:{...n,wireframe:d.id,fills:{},content:{},fx:{},extra:[]},global:t,mini:!0})}),i.jsxs("span",{className:"pb-wf__meta",children:[i.jsx("b",{children:d.label}),i.jsx("span",{children:d.tagline})]})]},d.id))})]})}function zg({advanced:e,page:r,selected:n,emptyCount:t,onFill:a}){var s;const o=n?(s=r.fills)==null?void 0:s[n]:null;return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"pb-panel__title",children:["영역 파트",i.jsx("span",{className:"pb-hint",children:n?`${n.toUpperCase()}에 채우기`:`빈 영역 ${t}개`})]}),n?i.jsxs("p",{className:"pb-note",children:["아래에서 고르면 ",i.jsx("b",{children:n.toUpperCase()})," 영역에 들어갑니다. 내용은 오른쪽 패널에서 고칩니다."]}):i.jsxs("p",{className:"pb-note pb-note--dashed",children:["가운데 캔버스에서 ",i.jsx("b",{children:"영역을 먼저 클릭"}),"하세요. 또는 아래 파트를 영역으로 끌어다 놓으세요."]}),y4.map(l=>{const c=_4.filter(u=>u.group===l);return c.length?i.jsxs("div",{children:[i.jsxs("div",{className:"pb-parts__group",children:[l,i.jsx("span",{className:"pb-hint",children:Eg[l]})]}),i.jsx("div",{className:"pb-parts",children:c.map(u=>i.jsxs("button",{className:`pb-part ${o===u.id?"is-on":""}`,style:{"--part-color":u.color},draggable:!0,onDragStart:h=>{h.dataTransfer.effectAllowed="copy",h.dataTransfer.setData("text/plain",u.id),Kp({kind:"part",id:u.id})},onDragEnd:Qp,onClick:()=>n&&a(u.id),title:`${u.hint} — 캔버스 영역으로 끌어다 놓거나, 영역을 고른 뒤 클릭`,children:[i.jsx("i",{className:"pb-part__dot"}),i.jsxs("span",{className:"pb-part__meta",children:[i.jsx("b",{children:u.label}),i.jsx("span",{children:u.hint})]}),e&&i.jsx("code",{className:"pb-part__tag",children:`<${u.tag}>`})]},u.id))})]},l):null})]})}function Mg({advanced:e,global:r,theme:n,typeset:t,page:a,selected:o,background:s,onBackground:l,site:c,onSite:u,onGlobal:h,onTheme:f,onTypeset:p,onDropEffect:k}){var b;const _=o?(b=a==null?void 0:a.fills)==null?void 0:b[o]:null,j={...Sp,...s??{}},C=E5.filter(d=>d.key==="kind"||d.key==="grain"?!0:j.kind==="none"?!1:d.key==="image"?j.kind==="image":d.key==="video"||d.key==="poster"?j.kind==="video":!0);return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"pb-panel__title",children:["등장 효과",i.jsx(kn,{text:"좌우에서 모이기는 한 줄에 칸이 둘 이상일 때 첫 칸은 왼쪽, 마지막 칸은 오른쪽에서 들어옵니다. 켜면 캔버스의 각 영역에 방향 표식이 붙고, Shift+클릭으로 그 영역만 끌 수 있습니다."}),i.jsx("span",{className:"pb-hint",children:"스크롤할 때"})]}),i.jsx("div",{className:"pb-fields",children:ag.filter(d=>!d.needsFx||(c==null?void 0:c.enterFx)&&c.enterFx!=="없음").map(d=>i.jsx(Or,{spec:d,value:(c==null?void 0:c[d.key])??(d.type==="boolean"?!1:d.type==="range"?jt[d.key]??d.min:"없음"),onChange:(m,x)=>u({[m]:x})},d.key))}),i.jsxs("div",{className:"pb-panel__title",children:["인터랙션",i.jsx(kn,{text:"스크립트가 필요한 효과라 내보낸 결과물에서만 동작합니다. 편집 화면에는 나타나지 않습니다."}),i.jsx("span",{className:"pb-hint",children:"내보낸 사이트에서"})]}),i.jsx("div",{className:"pb-fields",children:og.map(d=>i.jsx(Or,{spec:d,value:(c==null?void 0:c[d.key])??!1,onChange:(m,x)=>u({[m]:x})},d.key))}),i.jsxs("div",{className:"pb-panel__title",children:["사이트 배경",i.jsx("span",{className:"pb-hint",children:"전체에 깔립니다"})]}),i.jsx("div",{className:"pb-fields",children:C.map(d=>i.jsx(Or,{spec:d,value:j[d.key],onChange:(m,x)=>l({[m]:x})},d.key))}),i.jsxs("div",{className:"pb-panel__title",children:["배경 색",i.jsx("span",{className:"pb-hint",children:"글자 색까지 함께"})]}),i.jsx("div",{className:"pb-fields",children:i.jsxs("label",{className:"pb-field",children:[i.jsxs("span",{className:"pb-field__label",children:["색 테마 ",i.jsxs("b",{children:[na.length,"종"]})]}),i.jsxs("select",{value:n,onChange:d=>f(d.target.value),children:[i.jsx("optgroup",{label:"어두운 배경",children:na.filter(d=>d.dark).map(d=>i.jsx("option",{value:d.id,children:d.label},d.id))}),i.jsx("optgroup",{label:"밝은 배경",children:na.filter(d=>!d.dark).map(d=>i.jsx("option",{value:d.id,children:d.label},d.id))})]})]})}),i.jsxs("div",{className:"pb-themepreview","aria-hidden":"true",children:[fa(n).swatch.map((d,m)=>i.jsx("i",{style:{background:d}},m)),i.jsx("span",{children:fa(n).label})]}),i.jsxs("div",{className:"pb-panel__title",children:["글꼴",i.jsx(kn,{text:"올린 파일은 '내 글꼴 (업로드)'을 고르거나 영역별 글꼴에서 선택하면 적용됩니다. 한글 글꼴은 파일이 큽니다(1~4MB) — 서브셋 파일을 권장합니다."}),i.jsx("span",{className:"pb-hint",children:"외부 요청 없음"})]}),i.jsx("div",{className:"pb-fields",children:i.jsxs("label",{className:"pb-field",children:[i.jsxs("span",{className:"pb-field__label",children:["글꼴 ",i.jsxs("b",{children:[hn.length,"종"]})]}),i.jsx("select",{value:t,onChange:d=>p(d.target.value),children:hn.map(d=>i.jsxs("option",{value:d.id,children:[d.label," — ",d.tagline]},d.id))})]})}),i.jsx("p",{className:"pb-typepreview",style:{fontFamily:Ms(t).font,fontWeight:Ms(t).hWeight},"aria-hidden":"true",children:"Aa 가나다 Portfolio 123"}),i.jsx("div",{className:"pb-fields",children:i.jsx(Or,{spec:{key:"customFont",label:"내 글꼴 파일 (.ttf·.otf·.woff2)",type:"file",accept:".ttf,.otf,.woff,.woff2",maxMB:20},value:c==null?void 0:c.customFont,onChange:(d,m)=>u({[d]:m})})}),i.jsxs("div",{className:"pb-panel__title",children:["여백 · 모서리",i.jsx("span",{className:"pb-hint",children:"모든 영역 기본값"})]}),i.jsx("div",{className:"pb-fields",children:M4.map(d=>i.jsx(Or,{spec:d,value:r[d.key],onChange:(m,x)=>h({[m]:x})},d.key))}),i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"pb-panel__title",children:["효과",i.jsx(kn,{text:"칩을 집으면 받아줄 수 있는 영역만 점선으로 표시됩니다. 마우스를 올리면 어떤 움직임인지 미리 보여줍니다."}),i.jsx("span",{className:"pb-hint",children:_?`${_.toUpperCase()}에 붙는 것만 진하게`:"영역으로 끌어다 놓기"})]}),i.jsx("div",{className:"pb-fxpal",children:lp.map(d=>{const m=!_||uo(d.id,_);return i.jsxs("button",{className:`pb-fxpal__chip ${m?"":"is-off"}`,"aria-disabled":m?void 0:!0,draggable:!0,onDragStart:x=>{x.dataTransfer.effectAllowed="copy",x.dataTransfer.setData("text/plain",d.id),Kp({kind:"effect",id:d.id})},onDragEnd:Qp,onClick:()=>m&&o&&k(o,d.id),title:m?`${d.desc} · ${d.cost} — 끌어다 놓거나, 영역을 고른 뒤 클릭`:`${d.label} — ${_.toUpperCase()} 영역(${_})에는 붙지 않습니다`,children:[i.jsx(Xp,{id:d.id,label:d.desc}),i.jsx("i",{children:d.icon}),i.jsx("span",{children:d.label}),i.jsx("em",{children:d.tier})]},d.id)})})]})]})}function Lg({pages:e,page:r,emptyCount:n,filledCount:t,site:a,onSite:o,onExport:s}){const l=n===0,c={...jt,...a??{}};return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"pb-panel__title",children:["사이트 정보",i.jsx(kn,{text:"링크를 카톡·슬랙에 붙였을 때 보이는 것들입니다. 비워 두면 첫 페이지 이름을 씁니다."}),i.jsx("span",{className:"pb-hint",children:"탭 · 검색 · 링크 공유"})]}),i.jsx("div",{className:"pb-fields",children:tg.map(u=>i.jsx(Or,{spec:u,value:c[u.key],onChange:(h,f)=>o({[h]:f})},u.key))}),i.jsxs("div",{className:"pb-panel__title",children:["점검",i.jsxs("span",{className:"pb-hint",children:[r.name," 페이지"]})]}),i.jsxs("div",{className:"pb-checks",children:[i.jsxs("div",{className:"pb-check is-ok",children:[i.jsx("i",{children:"✓"})," 페이지 ",e.length,"장"]}),i.jsxs("div",{className:"pb-check is-ok",children:[i.jsx("i",{children:"✓"})," 채운 영역 ",t,"개"]}),i.jsxs("div",{className:`pb-check ${l?"is-ok":"is-warn"}`,children:[i.jsx("i",{children:l?"✓":"!"}),l?"빈 영역 없음":`빈 영역 ${n}개 — 결과물에 빈 칸으로 남습니다`]})]}),i.jsx("button",{className:"pb-bigbtn",onClick:s,children:"내 사이트 내려받기"}),i.jsx("p",{className:"pb-note",children:"받은 파일을 두 번 클릭하면 바로 열립니다."})]})}const $g=[{id:"frame",n:"1",label:"틀",hint:"페이지 · 템플릿 · 뼈대"},{id:"content",n:"2",label:"내용",hint:"영역에 파트 채우기"},{id:"style",n:"3",label:"꾸미기",hint:"배경 · 글꼴 · 여백"},{id:"export",n:"4",label:"내보내기",hint:"점검 후 다운로드"}];function Rg({open:e=!0,advanced:r=!1,pages:n,current:t,page:a,global:o,theme:s,typeset:l,selected:c,onSwitchPage:u,onAddPage:h,onRenamePage:f,onRemovePage:p,onMovePage:k,onWireframe:_,onTemplate:j,applyAll:C,onApplyAll:b,onFill:d,onGlobal:m,onTheme:x,onTypeset:y,onDropEffect:S,onExport:w,site:v,onSite:g,onBackground:E}){const[N,M]=L.useState("frame"),[T,$]=L.useState(null),P=kt(a.wireframe),J=a.extra??[],H=new Set(a.hidden??[]),A=[...P.regions.map(Z=>Z.id),...J.flatMap(tr)].filter(Z=>{var je;return!H.has(Z)||((je=a.fills)==null?void 0:je[Z])}),B=A.filter(Z=>{var je;return!((je=a.fills)!=null&&je[Z])}).length,Q=A.length-B,pe=L.useRef(c);return L.useEffect(()=>{c&&!pe.current&&N==="frame"&&M("content"),pe.current=c},[c,N]),e?i.jsxs("aside",{className:"pb-modes",children:[i.jsx("div",{className:"pb-steps",children:$g.map(Z=>i.jsxs("button",{className:`pb-step ${N===Z.id?"is-on":""}`,onClick:()=>M(Z.id),title:Z.hint,children:[i.jsx("i",{children:Z.n}),Z.label]},Z.id))}),i.jsxs("div",{className:"pb-steps__body",children:[N==="frame"&&i.jsx(Ng,{pages:n,current:t,page:a,global:o,editing:T,setEditing:$,onSwitchPage:u,onAddPage:h,onRenamePage:f,onRemovePage:p,onMovePage:k,onWireframe:_,onTemplate:j,applyAll:C,onApplyAll:b,site:v,onSite:g}),N==="content"&&i.jsx(zg,{advanced:r,page:a,selected:c,emptyCount:B,onFill:d}),N==="style"&&i.jsx(Mg,{advanced:r,global:o,theme:s,typeset:l,page:a,selected:c,onGlobal:m,onTheme:x,onTypeset:y,background:v==null?void 0:v.background,onBackground:E,site:v,onSite:g,onDropEffect:S}),N==="export"&&i.jsx(Lg,{pages:n,page:a,emptyCount:B,filledCount:Q,site:v,onSite:g,onExport:w})]})]}):null}const Tg="이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.",Ag=[{label:"앱코 AN06F TKL 기계식 키보드 (클릭)",url:"https://link.coupang.com/a/fPmD2AJcCO",img:"https://image13.coupangcdn.com/image/affiliate/banner/c9b86094d67d213a82e00f9f31e5bc8e@2x.jpg",alt:"앱코 기계식 게이밍 유선 텐키리스 키보드 클릭, 레트로 베이지, AN06F TKL PBT",width:120,height:240,addedAt:"2026-07-31"},{label:"2026 이기적 빅데이터분석기사 필기 기본서",url:"https://link.coupang.com/a/fUQgrhZPzw",img:"https://image2.coupangcdn.com/image/affiliate/banner/9b60727bd0b28a5ed9aacaeb2cbb406a@2x.jpg",alt:"2026 이기적 빅데이터분석기사 필기 기본서",width:120,height:240,addedAt:"2026-08-03"},{type:"iframe",slot:"appFooter",label:"카테고리 배너 728x90 (id 1012415)",src:"https://ads-partners.coupang.com/widgets.html?id=1012415&template=banner&trackingCode=AF3785129&subId=PORTFOLIOCREATE&width=728&height=90",width:728,height:90,addedAt:"2026-07-31"},{type:"iframe",label:"다이나믹 캐러셀 486x267 (id 1012411)",src:"https://ads-partners.coupang.com/widgets.html?id=1012411&template=carousel&trackingCode=AF3785129&subId=PORTFOLIOCREATE&width=486&height=267&tsource=",width:486,height:267,addedAt:"2026-07-31"},{label:"박문각 2026 정보처리기사 필기 기출원스톱 1800제",url:"https://link.coupang.com/a/fUQijKfima",img:"https://static.coupangcdn.com/image/affiliate/banner/e9b9e2bfed6b6a130e82ca5b564b47f7@2x.jpg",alt:"박문각 2026 정보처리기사 필기 기출원스톱 1800제 + 유튜브 무료특강(프로그래밍언어 + 25년 CBT) + CBT기출복원 + 핵심요약, 상세 설명 참조",width:120,height:240,addedAt:"2026-08-03"},{label:"박문각 2026 ADsP 데이터분석준전문가 기출원스톱 400문제",url:"https://link.coupang.com/a/fUQjwUWdTU",img:"https://img3a.coupangcdn.com/image/affiliate/banner/79959ce16bec7e40d4d090b9fab28518@2x.jpg",alt:"박문각 2026 ADsP 데이터분석준전문가 기출원스톱 400문제 (50 최빈출 문제) + 유튜브 무료특강 + 실전모의고사",width:120,height:240,addedAt:"2026-08-03"},{label:"로지텍 리프트 버티컬 마우스",url:"https://link.coupang.com/a/fPlZT0o9RY",img:"https://image15.coupangcdn.com/image/affiliate/banner/2bcc697ae408b0c3e46c1f853142035e@2x.jpg",alt:"로지텍 코리아 리프트 버티컬 인체공학 무선 블루투스 마우스 LIFT VERTICAL, MR0094, 그래파이트",width:120,height:240,addedAt:"2026-07-31"},{label:"2026 이기적 정보보안기사 필기+실기 올인원",url:"https://link.coupang.com/a/fUQk2HqWmi",img:"https://image15.coupangcdn.com/image/affiliate/banner/4cebd750d25da9cfd8ce4bde44abe07c@2x.jpg",alt:"[지구돋이 책갈피 증정] 2026 이기적 정보보안기사 필기+실기 올인원 영진닷컴, 임호진",width:120,height:240,addedAt:"2026-08-03"},{label:"SQL자격검정 실전문제",url:"https://link.coupang.com/a/fUQnnuyR2G",img:"https://image14.coupangcdn.com/image/affiliate/banner/5b9ea110add5233eba8c220eb46132b0@2x.jpg",alt:"SQL자격검정 실전문제, 한국데이터산업진흥원",width:120,height:240,addedAt:"2026-08-03"}],Dn={disclosure:Tg,banners:Ag},Va={},Zp=[];var bd;for(const e of Dn.banners??[])(e.slot?Va[bd=e.slot]??(Va[bd]=[]):Zp).push(e);const st=e=>{var r;return(r=Va[e])!=null&&r.length?Va[e].shift():Zp.shift()??null},Dg={exportModal:{banner:st("exportModal"),disclosure:Dn.disclosure,placeholder:!1},exportModalLeft:{banner:st("exportModalLeft"),disclosure:Dn.disclosure,placeholder:!0},saveModal:{banner:st("saveModal"),disclosure:Dn.disclosure,placeholder:!0},inspectorEmpty:{banner:st("inspectorEmpty"),disclosure:Dn.disclosure,placeholder:!0},appFooter:{banner:st("appFooter"),disclosure:Dn.disclosure,placeholder:!0},inspectorBottom:{banner:st("inspectorBottom"),disclosure:Dn.disclosure,placeholder:!0},sidebarBottom:{banner:st("sidebarBottom"),disclosure:Dn.disclosure,placeholder:!1}},Di=e=>!!(e&&(e.url||e.src));function od({b:e}){return e.type==="iframe"?i.jsx("iframe",{src:e.src,title:e.label||"쿠팡 파트너스 광고",width:e.width,height:e.height,frameBorder:"0",scrolling:"no",referrerPolicy:"unsafe-url",browsingtopics:"",style:{maxWidth:"100%",border:0}}):i.jsx("a",{href:e.url,target:"_blank",rel:"sponsored nofollow noopener",referrerPolicy:"unsafe-url",children:i.jsx("img",{src:e.img,alt:e.alt,width:e.width,height:e.height})})}function ua({id:e,className:r=""}){const n=Dg[e];if(!n)return null;if(Array.isArray(n.banners)){const a=n.banners.some(Di);return!a&&!n.placeholder?null:i.jsxs("div",{className:`pb-adslot pb-adslot--grid ${r}`,children:[a&&i.jsx("p",{className:"pb-note pb-adslot__note",children:n.disclosure}),i.jsx("div",{className:"pb-adslot__cells",children:n.banners.map((o,s)=>Di(o)?i.jsx("div",{className:"pb-adslot__cell",children:i.jsx(od,{b:o})},s):i.jsxs("div",{className:"pb-adslot__cell",children:[i.jsxs("span",{children:["광고 자리 ",s+1]}),i.jsx("em",{children:"등록 예정"})]},s))})]})}const t=n.banner;return Di(t)?i.jsxs("div",{className:`pb-ad ${r}`,children:[i.jsx("p",{className:"pb-note",children:n.disclosure}),i.jsx(od,{b:t})]}):n.placeholder?i.jsxs("div",{className:`pb-adslot ${r}`,children:[i.jsx("span",{children:"광고 자리"}),i.jsx("em",{children:"등록 예정"})]}):null}const sd="pb:ai-key",Pg="claude-haiku-4-5-20251001";async function Fg(e,r,n){var c;const t=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"content-type":"application/json","x-api-key":e,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:Pg,max_tokens:500,messages:[{role:"user",content:`한국어 개발자 포트폴리오의 첫 화면 문구 3안을 만들어줘.
직군: ${r||"개발자"}
키워드: ${n||"(없음)"}
각 안은 title(인사말, 줄바꿈 \\n 1번 허용, 25자 내외)과 sub(한 문장 소개, 30자 내외)로.
반드시 JSON 배열만 출력: [{"title":"...","sub":"..."},...]`}]})});if(!t.ok){const u=await t.text();throw t.status===401?new Error("API 키가 올바르지 않습니다. 키를 다시 확인해 주세요."):new Error(`요청 실패 (${t.status}): ${u.slice(0,120)}`)}const a=await t.json(),s=(((c=a==null?void 0:a.content)==null?void 0:c.map(u=>u.text??"").join(""))??"").match(/\[[\s\S]*\]/);if(!s)throw new Error("응답을 해석하지 못했습니다. 다시 시도해 주세요.");const l=JSON.parse(s[0]);if(!Array.isArray(l)||!l.length)throw new Error("제안이 비어 있습니다.");return l.slice(0,3)}function Og({content:e,onApply:r}){const[n,t]=L.useState(!1),[a,o]=L.useState(()=>localStorage.getItem(sd)??""),[s,l]=L.useState(""),[c,u]=L.useState(""),[h,f]=L.useState(!1),[p,k]=L.useState(""),[_,j]=L.useState([]),C=async()=>{k("");const b=a.trim();if(!b)return k("API 키를 먼저 넣어 주세요.");localStorage.setItem(sd,b),f(!0);try{j(await Fg(b,s.trim(),c.trim()))}catch(d){k((d==null?void 0:d.message)??"실패했습니다.")}finally{f(!1)}};return i.jsxs(i.Fragment,{children:[i.jsx("button",{className:"pb-ai__open",onClick:()=>t(!0),children:"✦ AI 문구 제안"}),n&&i.jsx("div",{className:"pb-modal pb-ai",onClick:b=>b.target===b.currentTarget&&t(!1),children:i.jsxs("div",{className:"pb-confirm__box",role:"dialog","aria-modal":"true","aria-label":"AI 문구 제안",children:[i.jsx("b",{className:"pb-confirm__title",children:"AI 문구 제안 — 첫 화면 인사말"}),i.jsxs("label",{className:"pb-field",children:[i.jsx("span",{className:"pb-field__label",children:"Anthropic API 키 (이 브라우저에만 저장)"}),i.jsx("input",{type:"password",value:a,placeholder:"sk-ant-…",onChange:b=>o(b.target.value)})]}),i.jsxs("p",{className:"pb-note",children:["키는 ",i.jsx("b",{children:"내 컴퓨터에서 Anthropic으로 직접"})," 전달되며 다른 어디에도 저장되지 않습니다. 키 발급: console.anthropic.com"]}),i.jsxs("label",{className:"pb-field",children:[i.jsx("span",{className:"pb-field__label",children:"직군 · 역할"}),i.jsx("input",{type:"text",value:s,placeholder:"예: 프론트엔드 개발자 3년 차",onChange:b=>l(b.target.value)})]}),i.jsxs("label",{className:"pb-field",children:[i.jsx("span",{className:"pb-field__label",children:"강조하고 싶은 키워드 (선택)"}),i.jsx("input",{type:"text",value:c,placeholder:"예: 3D 인터랙션, 디자인 시스템",onChange:b=>u(b.target.value)})]}),p&&i.jsx("p",{className:"pb-note pb-note--warn",children:p}),_.length>0&&i.jsxs("div",{className:"pb-ai__list",children:[_.map((b,d)=>i.jsxs("button",{className:"pb-ai__item",onClick:()=>{r({title:b.title,sub:b.sub}),t(!1)},children:[i.jsx("b",{children:b.title}),i.jsx("span",{children:b.sub})]},d)),i.jsx("p",{className:"pb-note",children:"마음에 드는 안을 누르면 히어로에 바로 들어갑니다."})]}),i.jsxs("div",{className:"pb-confirm__row",children:[i.jsx("button",{onClick:()=>t(!1),children:"닫기"}),i.jsx("button",{className:"pb-confirm__ok",onClick:C,disabled:h,children:h?"생각 중…":_.length?"다시 제안 받기":"제안 받기"})]})]})})]})}function Bg(){const[e,r]=os.useState(()=>localStorage.getItem("pb:inspad-hidden")==="1"),n=()=>{const t=!e;r(t),localStorage.setItem("pb:inspad-hidden",t?"1":"")};return i.jsxs(i.Fragment,{children:[i.jsx("button",{className:"pb-inspad__toggle",onClick:n,children:e?"∨ 광고 보기":"∧ 광고 숨기기"}),!e&&i.jsx(ua,{id:"inspectorEmpty",className:"pb-adslot--inspector"})]})}function Ca({title:e,hint:r,why:n,open:t=!1,children:a}){return i.jsxs("details",{className:"pb-sec",open:t,children:[i.jsxs("summary",{className:"pb-sec__head",children:[e,i.jsx(kn,{text:n}),r&&i.jsx("span",{className:"pb-hint",children:r})]}),a]})}const qg={배치:"이 영역을 행 안에서 어디에 둘지 정합니다. 폭은 영역 오른쪽 아래 손잡이를 끌어서 바꿉니다.",상자:"영역이라는 상자 자체의 모양입니다 — 모서리, 안쪽 여백, 최소 높이, 테두리.",배경:"이 영역의 배경. 색이나 이미지를 깔고, 사이트 배경을 비쳐 보이게 할 수도 있습니다."};function Ig({open:e=!0,onClose:r,narrow:n=!1,advanced:t=!1,regionId:a,partId:o,content:s,override:l,fx:c=[],global:u,onContent:h,onOverride:f,onResetOverride:p,onClearPart:k,onToggleEffect:_,onEffectOptions:j,onRowAlign:C,site:b,onSite:d}){if(!e)return null;const m=n?i.jsx("button",{className:"pb-panel__close",onClick:r,title:"닫기",children:"✕"}):null;if(!a)return i.jsxs("aside",{className:"pb-inspector pb-inspector--empty",children:[i.jsxs("div",{className:"pb-panel__title",children:["편집",m]}),i.jsxs("p",{className:"pb-note pb-note--dashed",children:["캔버스에서 ",i.jsx("b",{children:"영역"}),"을 클릭하세요."]}),i.jsx(Bg,{})]});const x=o?Ln[o]:null,y={...Ts,radius:u.radius,padding:u.padding,border:u.border,...l??{}};return i.jsxs("aside",{className:"pb-inspector",children:[i.jsxs("div",{className:"pb-panel__title",children:[a.toUpperCase(),i.jsx("span",{className:"pb-hint",children:x?x.label:"비어 있음"}),m]}),x?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"pb-part__banner",style:{"--part-color":x.color},children:[i.jsx("i",{}),i.jsx("b",{children:x.label}),i.jsx("code",{children:`<${x.tag}>`}),i.jsx("button",{className:"pb-danger",onClick:k,title:"이 영역 비우기",children:"✕"})]}),x.nav&&i.jsxs("label",{className:"pb-field pb-field--row pb-sync",children:[i.jsx("span",{className:"pb-field__label",children:"모든 페이지에 함께 적용"}),i.jsx("input",{type:"checkbox",checked:(b==null?void 0:b.navSync)!==!1,onChange:S=>d==null?void 0:d({navSync:S.target.checked})})]}),o==="hero"&&i.jsx("div",{className:"pb-ai__row",children:i.jsx(Og,{content:s,onApply:S=>h(S)})}),i.jsx(Ca,{title:"내용",hint:`${x.fields.length}개`,open:!0,children:i.jsx("div",{className:"pb-fields",children:x.fields.map(S=>i.jsx(Or,{spec:S,value:s==null?void 0:s[S.key],onChange:(w,v)=>h({[w]:v})},S.key))})})]}):i.jsxs("p",{className:"pb-note pb-note--dashed",children:["왼쪽 ",i.jsx("b",{children:"영역 파트"}),"에서 채울 것을 고르세요."]}),x&&t&&i.jsxs(Ca,{title:"효과",hint:c.length?`${c.length}개 적용`:"선택",children:[i.jsxs("div",{className:"pb-fxchips",children:[v1(o).map(S=>{const w=c.some(v=>v.name===S.id);return i.jsxs("button",{className:`pb-fxchip ${w?"is-on":""}`,onClick:()=>_(S.id),title:`${S.desc} · ${S.cost}`,children:[i.jsx(Xp,{id:S.id,label:S.desc}),i.jsx("i",{children:S.icon}),S.label,i.jsx("em",{children:S.cost})]},S.id)}),v1(o).length===0&&i.jsx("p",{className:"pb-note",children:"이 파트에 붙일 수 있는 효과가 아직 없습니다."})]}),y1(o)&&i.jsx("p",{className:"pb-note",children:y1(o)}),c.map(S=>{const w=Et[S.name];return w?i.jsxs("div",{className:"pb-fx",children:[i.jsxs("div",{className:"pb-fx__head",children:[i.jsx("i",{className:"pb-fx__icon",children:w.icon}),i.jsx("b",{children:w.label}),i.jsx("span",{className:"pb-chip__tier",children:w.cost}),i.jsx("button",{className:"pb-danger",onClick:()=>_(S.name),title:"제거",children:"✕"})]}),i.jsx("div",{className:"pb-fx__body",children:w.schema.map(v=>{var g;return i.jsx(Or,{spec:v,value:(g=S.options)==null?void 0:g[v.key],onChange:(E,N)=>j(S.name,{[E]:N})},v.key)})})]},S.name):null})]}),i.jsx(Ca,{title:"글자",hint:l!=null&&l.typo&&Object.keys(l.typo).length?"이 영역만":"전역값 사용",children:i.jsx("div",{className:"pb-fields",children:z4.map(S=>i.jsx(Or,{spec:S,value:{...Tl,...(l==null?void 0:l.typo)??{}}[S.key],onChange:(w,v)=>f({typo:{...(l==null?void 0:l.typo)??{},[w]:v}})},S.key))})}),i.jsx(Ca,{title:"글자 효과",hint:l!=null&&l.tfx&&l.tfx.kind&&l.tfx.kind!=="없음"?l.tfx.kind:"없음",children:i.jsx("div",{className:"pb-fields",children:e4.map(S=>i.jsx(Or,{spec:S,value:{...Fu,...(l==null?void 0:l.tfx)??{}}[S.key],onChange:(w,v)=>f({tfx:{...(l==null?void 0:l.tfx)??{},[w]:v}})},S.key))})}),E4.map(S=>{const w=N4.filter(v=>v.group===S).filter(v=>v.key!=="free"||(x==null?void 0:x.freeItems)).filter(v=>!v.pro||t||y[v.key]!==Ts[v.key]);return w.length?i.jsx(Ca,{title:S,why:qg[S],hint:`${w.length}개`,children:i.jsx("div",{className:"pb-fields",children:w.map(v=>i.jsx(Or,{spec:v,value:y[v.key],onChange:(g,E)=>g==="rowAlign"?C==null?void 0:C(E):f(g==="free"&&!E?{free:E,itemPos:null}:{[g]:E})},v.key))})},S):null}),l&&Object.keys(l).length>0&&i.jsx("div",{className:"pb-parts__tools",children:i.jsx("button",{onClick:p,children:"전역값으로 되돌리기"})}),i.jsx(ua,{id:"inspectorBottom",className:"pb-adslot--inspbtm"})]})}const Hg=`# 3D Effects Pack\r
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
`,Vg=`# \`_core\` — 공통 엔진\r
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
`,Wg=`/**\r
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
`,Ug=`/**\r
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
`,Gg=`/**\r
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
`,Yg=`/**\r
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
`,Kg=`/**\r
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
`,Qg=`/**\r
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
`,Xg=`/**\r
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
`,Zg=`/**\r
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
`,Jg=`# \`character\` — 마우스를 따라 보는 3D 스틱 캐릭터\r
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
`,e6=`/**\r
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
`,r6=`/**\r
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
`,n6=`/**\r
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
`,t6=`/**\r
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
`,a6=`/**\r
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
`,o6=`/**\r
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
`,s6=`/**\r
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
`,i6=`# \`dot-grid-wave\` — 3D 파동 도트 그리드\r
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
`,l6=`/**\r
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
`,c6=`/**\r
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
`,d6=`/**\r
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
`,f6=`# \`flip-card\` — 3D 플립 카드\r
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
`,u6=`/**\r
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
`,p6=`/**\r
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
`,m6=`/**\r
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
`,h6=`/**\r
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
`,g6=`/**\r
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
`,x6=`/**\r
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
`,w6=`# \`magnetic-button\` — 자석 버튼\r
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
`,b6=`/**\r
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
`,v6=`/**\r
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
`,y6=`/**\r
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
`,_6=`# \`model-showcase\` — GLB 3D 모델 쇼케이스\r
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
`,k6=`/**\r
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
`,j6=`/**\r
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
`,S6=`/**\r
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
`,C6=`# \`parallax-layers\` — 히어로 깊이감 레이어\r
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
`,E6=`/**\r
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
`,N6=`/**\r
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
`,z6=`/**\r
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
`,M6=`# \`scroll-reveal\` — 스크롤 3D 등장\r
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
`,L6=`/**\r
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
`,$6=`/**\r
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
`,R6=`/**\r
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
`,T6=`# \`silk-bg\` — 흐르는 셰이더 그라디언트 배경\r
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
`,A6=`/**\r
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
`,D6=`/**\r
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
`,P6=`/**\r
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
`,F6=`/**\r
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
`,O6=`/**\r
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
`,B6=`# spotlight — 커서를 따라오는 은은한 빛

영역 위에서 커서가 움직이면 그 자리에 radial-gradient 광원이 따라붙습니다.
그리기는 전부 CSS(변수 + 그라디언트), JS는 좌표만 흘려 넣습니다 — 프레임 비용 ≈ 0.

## 바닐라

\`\`\`html
<section class="fx-spotlight" data-fx="spotlight" data-fx-size="480" data-fx-strength="0.25">
  <h1>Hello</h1>
</section>
<script type="module">
  import { mount } from './effects/spotlight/index.js';
  mount('.fx-spotlight');
<\/script>
\`\`\`

## 옵션

| 키 | 기본 | 설명 |
|---|---|---|
| \`size\` | 420 | 광원 지름(px) |
| \`strength\` | 0.22 | 광원 세기(0~1) |
| \`color\` | \`''\` | 비우면 테마 강조색(\`--wf-accent\`) |

터치 환경·포인터 없음에서는 마운트하지 않습니다(guard: pointer fine).
`,q6=`/**\r
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
`,I6=`/**
 * spotlight / react.jsx
 */

import React, { forwardRef } from 'react';
import { useFx, mergeRefs } from '../_core/react.js';
import { mount } from './index.js';

import '../_core/core.css';
import './style.css';

/** 훅 버전 — 컨테이너에 .fx-spotlight 클래스를 꼭 주세요. */
export function useSpotlight(options, deps = []) {
  return useFx(mount, options, deps);
}

/**
 * <Spotlight as="section" size={480} strength={0.25}>
 *   <h1>Hello</h1>
 * </Spotlight>
 */
export const Spotlight = forwardRef(function Spotlight(
  { as: Tag = 'section', children, className = '', deps = [], size, strength, color, ...rest },
  outerRef
) {
  const ref = useSpotlight({ size, strength, color }, deps);
  return (
    <Tag ref={mergeRefs(ref, outerRef)} className={\`fx-spotlight \${className}\`} {...rest}>
      {children}
    </Tag>
  );
});
`,H6=`/* spotlight — 커서를 따라오는 은은한 빛 */\r
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
`,V6=`# starfield — 잔잔히 반짝이는 별하늘 배경

Canvas 2D 별 파티클. 별은 원 하나, 반짝임은 sin 하나 — 셰이더 없이 가볍습니다.
동작 줄이기 사용자에게는 멈춘 별하늘 한 장을 그립니다.

## 바닐라

\`\`\`html
<section class="fx-starfield" data-fx="starfield" data-fx-density="1.4">
  <h1>Night</h1>
</section>
<script type="module">
  import { mount } from './effects/starfield/index.js';
  mount('.fx-starfield');
<\/script>
\`\`\`

## 옵션

| 키 | 기본 | 설명 |
|---|---|---|
| \`density\` | 1 | 별 밀도(9000px²당 1개 기준 배율) |
| \`speed\` | 6 | 표류 속도 |
| \`twinkle\` | 0.6 | 반짝임 세기(0~1) |
| \`size\` | 1.2 | 별 크기 배율 |
| \`color\` | \`''\` | 비우면 흰색 |

어두운 배경 위에서 가장 좋습니다(밝은 테마에서는 색을 지정하세요).
`,W6=`/**\r
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
`,U6=`/**
 * starfield / react.jsx
 */

import React, { forwardRef } from 'react';
import { useFx, mergeRefs } from '../_core/react.js';
import { mount } from './index.js';

import '../_core/core.css';
import './style.css';

/** 훅 버전 — 컨테이너에 .fx-starfield 클래스를 꼭 주세요. */
export function useStarfield(options, deps = []) {
  return useFx(mount, options, deps);
}

/**
 * <Starfield as="section" density={1.4} twinkle={0.7}>
 *   <h1>Night</h1>
 * </Starfield>
 */
export const Starfield = forwardRef(function Starfield(
  { as: Tag = 'section', children, className = '', deps = [], density, speed, twinkle, size, color, ...rest },
  outerRef
) {
  const ref = useStarfield({ density, speed, twinkle, size, color }, deps);
  return (
    <Tag ref={mergeRefs(ref, outerRef)} className={\`fx-starfield \${className}\`} {...rest}>
      {children}
    </Tag>
  );
});
`,G6=`/* starfield — 잔잔히 반짝이는 별하늘 배경 */\r
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
`,Y6=`/**\r
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
`,K6=`# \`tilt-card\` — 3D 틸트 카드\r
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
`,Q6=`/**\r
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
`,X6=`/**\r
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
`,Z6=`/**\r
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
`,id=Object.assign({"../../../effects/README.md":Hg,"../../../effects/_core/README.md":Vg,"../../../effects/_core/core.css":Wg,"../../../effects/_core/effect.js":Ug,"../../../effects/_core/guard.js":Gg,"../../../effects/_core/index.js":Yg,"../../../effects/_core/loader.js":Kg,"../../../effects/_core/math.js":Qg,"../../../effects/_core/observer.js":Xg,"../../../effects/_core/react.js":Zg,"../../../effects/character/README.md":Jg,"../../../effects/character/index.js":e6,"../../../effects/character/react.jsx":r6,"../../../effects/character/rig.js":n6,"../../../effects/character/skeleton.js":t6,"../../../effects/character/style.css":a6,"../../../effects/cursor-dot/index.js":o6,"../../../effects/cursor-dot/style.css":s6,"../../../effects/dot-grid-wave/README.md":i6,"../../../effects/dot-grid-wave/index.js":l6,"../../../effects/dot-grid-wave/react.jsx":c6,"../../../effects/dot-grid-wave/style.css":d6,"../../../effects/flip-card/README.md":f6,"../../../effects/flip-card/index.js":u6,"../../../effects/flip-card/react.jsx":p6,"../../../effects/flip-card/style.css":m6,"../../../effects/hover-preview/index.js":h6,"../../../effects/hover-preview/style.css":g6,"../../../effects/index.js":x6,"../../../effects/magnetic-button/README.md":w6,"../../../effects/magnetic-button/index.js":b6,"../../../effects/magnetic-button/react.jsx":v6,"../../../effects/magnetic-button/style.css":y6,"../../../effects/model-showcase/README.md":_6,"../../../effects/model-showcase/index.js":k6,"../../../effects/model-showcase/react.jsx":j6,"../../../effects/model-showcase/style.css":S6,"../../../effects/parallax-layers/README.md":C6,"../../../effects/parallax-layers/index.js":E6,"../../../effects/parallax-layers/react.jsx":N6,"../../../effects/parallax-layers/style.css":z6,"../../../effects/scroll-reveal/README.md":M6,"../../../effects/scroll-reveal/index.js":L6,"../../../effects/scroll-reveal/react.jsx":$6,"../../../effects/scroll-reveal/style.css":R6,"../../../effects/silk-bg/README.md":T6,"../../../effects/silk-bg/index.js":A6,"../../../effects/silk-bg/react.jsx":D6,"../../../effects/silk-bg/shader.js":P6,"../../../effects/silk-bg/style.css":F6,"../../../effects/smooth-scroll/index.js":O6,"../../../effects/spotlight/README.md":B6,"../../../effects/spotlight/index.js":q6,"../../../effects/spotlight/react.jsx":I6,"../../../effects/spotlight/style.css":H6,"../../../effects/starfield/README.md":V6,"../../../effects/starfield/index.js":W6,"../../../effects/starfield/react.jsx":U6,"../../../effects/starfield/style.css":G6,"../../../effects/text-scramble/index.js":Y6,"../../../effects/tilt-card/README.md":K6,"../../../effects/tilt-card/index.js":Q6,"../../../effects/tilt-card/react.jsx":X6,"../../../effects/tilt-card/style.css":Z6}),Wa={reveal:"scroll-reveal",silk:"silk-bg",dots:"dot-grid-wave",tilt:"tilt-card",magnetic:"magnetic-button",parallax:"parallax-layers",flip:"flip-card",preview:"hover-preview",scramble:"text-scramble",spotlight:"spotlight",starfield:"starfield"},Os={model:"model-showcase"},ld={model:{fn:"model",sel:".fx-model"}},I=(e="")=>String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),Ar=(e="")=>I(e).replace(/\n/g,"<br />"),si=(e,r)=>{const n=String(e).trim().toLowerCase().replace(/[^a-z0-9가-힣]+/g,"-").replace(/^-|-$/g,"");return r===0?"index":n||`page-${r+1}`},xt=e=>e.replace(/[A-Z]/g,r=>"-"+r.toLowerCase());function cd(e){if(!(e!=null&&e.length))return"";const r=e.map(a=>a.name).join(" "),n=e.length>1;let t=` data-fx="${r}"`;for(const a of e){const o=n?`${Wa[a.name]??a.name}-`:"";for(const[s,l]of Object.entries(a.options??{})){if(l==null)continue;const c=Array.isArray(l)?l.join(","):String(l);t+=` data-fx-${o}${xt(s)}="${I(c)}"`}}return t}const J6=/wf__tag|wf__fxtag|wf__entertag|wf__resize|wf__movex|wf__add|wf__rowdel|wf__regiondel|wf__edge|is-empty|is-hot|is-drop|is-sel|pb-editing|pb-preview|wf__label|wf__hint|wf-3d__|wf-edit|wf-card--empty|wf-card__slot|wf-detail\.is-open/;function Bs(e){const r=[];let n=0,t="";for(const a of e)if(t+=a,a==="{")n++;else if(a==="}"&&(n--,n===0)){const o=t.split("{")[0].replace(/\/\*[\s\S]*?\*\//g,"");J6.test(o)||r.push(t.trim()),t=""}return r.join(`
`)}function e8(e,r,n={}){const t=n.sections?n.sections.map(o=>`<a href="#${encodeURIComponent(o.anchor)}" class="wf-nav__item">${I(o.label)}</a>`).join(`
        `):e.map((o,s)=>`<a href="${n.onePage?`#pg-${s}`:`${si(o.name,s)}.html`}"${s===r?' class="wf-nav__item is-current"':' class="wf-nav__item"'}>${I(o.name)}</a>`).join(`
        `),a=n.gap?` style="gap:${n.gap}px"`:"";return`<nav class="wf-nav${n.vertical?" wf-nav--v":""}"${a}>
        ${t}
      </nav>`}function r8(e,r,n,t,a,o,s,l,c,u,h){var k,_,j,C,b,d,m,x;const f=r.linkTo==="이 페이지 섹션"?l??[]:null,p=(y={})=>e8(n,t,{sections:f,onePage:h,...y});switch(e){case"topheader":case"header":return`<div class="wf-bar" style="justify-content:${r.align}">
        <span class="wf-bar__logo">${I(r.logo)}</span>
        ${r.showMenu?p():""}
        ${e==="header"&&r.cta?`<a class="wf-btn wf-btn--sm" href="#contact">${I(r.cta)}</a>`:""}
        ${r.modeToggle?dd:""}
      </div>`;case"nav":return`<div class="wf-bar" style="justify-content:${r.align}">
        ${p({gap:r.gap})}
        ${r.modeToggle?dd:""}
      </div>`;case"hero":{const y=Object.entries(As(r)).map(([w,v])=>`${w.startsWith("--")?w:xt(w)}:${v}`).join(";"),S=` class="wf-btn"${y?` style="${y}"`:""}`;return`<div class="wf-hero" style="align-items:${cn(r.align)};text-align:${r.align==="center"?"center":"left"}">
        ${o(r.photo,`wf-hero__photo${r.photoRound?" is-round":""}`,`width:${r.photoSize??120}px;height:${r.photoSize??120}px`)}
        <h1 class="wf-hero__title" style="font-size:clamp(1.9em, 8.5vw, calc(${r.titleScale} * 3.2em))">${Ar(r.title)}</h1>
        ${r.subtitle?`<p class="wf-hero__sub"${r.subColor?` style="color:${r.subColor}"`:""}>${Ar(r.subtitle)}</p>`:""}
        ${r.cta?(k=r.ctaFile)!=null&&k.id?`<a${S}${s(r.ctaFile)}>${I(r.cta)}</a>`:`<a${S} href="#contact">${I(r.cta)}</a>`:""}
      </div>`}case"aside":return`<div class="wf-aside" style="align-items:${cn(r.align)}">
        ${o(r.photo,`wf-aside__photo${r.photoRound?" is-round":""}`,`width:${r.photoSize??96}px;height:${r.photoSize??96}px`)}
        <h2 class="wf-aside__name">${I(r.name)}</h2>
        <p class="wf-aside__role">${I(r.role)}</p>
        ${r.bio?`<p class="wf-aside__bio">${Ar(r.bio)}</p>`:""}
        ${r.showMenu?p({vertical:!0,gap:10}):""}
      </div>`;case"section":{const y=Array.from({length:r.columns},($,P)=>`<p class="wf-sec__body">${Ar(r.columns>1?`${P+1}. ${r.body}`:r.body)}</p>`).join(`
          `),S=r.title?`<h2 class="wf-sec__title">${I(r.title)}</h2>`:"",w=r.body?`<div class="wf-sec__cols" style="grid-template-columns:repeat(${r.columns}, minmax(0, 1fr))">
          ${y}
        </div>`:"",v=r.listStyle==="tags"?`<div class="wf-tags">${(r.items??[]).map($=>`<span class="wf-tag">${I($.label)}${$.note?`<em>${I($.note)}</em>`:""}</span>`).join("")}</div>`:"",g=r.listStyle==="badges"?`<div class="wf-tags wf-tags--badges">${(r.items??[]).map($=>{const P=Ps($.label),J=P.path?`<svg class="wf-tag__logo" viewBox="0 0 24 24" aria-hidden="true"><path d="${P.path}" fill="currentColor"/></svg>`:"";return`<span class="wf-tag wf-tag--badge" style="--bdg-bg:${P.bg};--bdg-fg:${P.fg}">${J}${I($.label)}${$.note?`<em>${I($.note)}</em>`:""}</span>`}).join("")}</div>`:"",E=r.listStyle==="timeline"?`<ol class="wf-time">${(r.items??[]).map($=>`<li class="wf-time__row"><b>${I($.label)}</b>${$.note?`<span>${I($.note)}</span>`:""}</li>`).join("")}</ol>`:"",N=()=>(r.items??[]).map($=>`<span class="wf-tag">${I($.label)}${$.note?`<em>${I($.note)}</em>`:""}</span>`).join(""),M=r.listStyle==="marquee"?`<div class="wf-marquee" style="--marq-t:${Math.max(10,(((_=r.items)==null?void 0:_.length)??0)*3)}s"><div class="wf-marquee__track"><div class="wf-marquee__set">${N()}</div><div class="wf-marquee__set" aria-hidden="true">${N()}</div></div></div>`:"",T=r.listStyle==="stats"?`<div class="wf-stats">${(r.items??[]).map($=>{const P=/^(\d+)\s*(.*)$/.exec(String($.note??"").trim());return`<div class="wf-stat"><b class="wf-stat__num">${P?`<i class="wf-stat__count" style="--wf-n-to:${+P[1]}" aria-hidden="true"></i><span class="wf-stat__plain" aria-hidden="true">${I(P[1])}</span>`+(P[2]?`<span class="wf-stat__suffix" aria-hidden="true">${I(P[2])}</span>`:"")+`<span class="wf-sr">${I($.note)}</span>`:`<span>${I($.note||"0")}</span>`}</b><span class="wf-stat__label">${I($.label)}</span></div>`}).join("")}</div>`:"";return`<div class="wf-sec" style="align-items:${cn(r.align)}">
        ${S}
        ${w}
        ${v}${g}${E}${M}${T}
      </div>`}case"timeline":return`<div class="wf-tl">
        ${r.eyebrow?`<span class="wf-tl__eyebrow">${I(r.eyebrow)}</span>`:""}
        <h2 class="wf-tl__title">${I(r.title)}</h2>
        <ol class="wf-tl__list">${(r.items??[]).map(y=>`<li class="wf-tl__item"><span class="wf-tl__label">${I(y.label)}</span><b class="wf-tl__head">${I(y.head)}</b>${y.desc?`<p class="wf-tl__desc">${Ar(y.desc)}</p>`:""}</li>`).join(`
        `)}</ol>
      </div>`;case"gallery":{const y=g=>g.stack?(r.stackStyle??"배지")!=="배지"?`<span class="wf-card__stack">${I(g.stack)}</span>`:`<span class="wf-card__stack wf-card__stack--badges">${$p(g.stack).map(N=>{const M=Ps(N),T=M.path?`<svg class="wf-tag__logo" viewBox="0 0 24 24" aria-hidden="true"><path d="${M.path}" fill="currentColor"/></svg>`:"";return`<span class="wf-tag wf-tag--badge" style="--bdg-bg:${M.bg};--bdg-fg:${M.fg}">${T}${I(N)}</span>`}).join("")}</span>`:"",S=g=>{const E=Tp(g.status);return E?`<span class="wf-card__status" style="--st-bg:${E.bg};--st-fg:${E.fg}">${I(g.status)}</span>`:""},w=Yu(r.items,r.columns,r.rows).filter(g=>g.item).map(({item:g,index:E})=>{var $,P;if(a)return`<article class="wf-card fx-flip-card is-flip">
            <div class="fx-flip-card__inner">
              <div class="fx-flip-card__face fx-flip-card__face--front" data-fx-face="front">
                <b class="wf-card__title">${I(g.title)}</b>
                ${g.stack?`<span class="wf-card__stack">${I(g.stack)}</span>`:""}
              </div>
              <div class="fx-flip-card__face fx-flip-card__face--back" data-fx-face="back">
                <span class="wf-card__desc">${Ar(g.desc)}</span>
              </div>
            </div>
          </article>`;const N=`<span class="wf-card__body">
              ${r.showThumb?"":S(g)}
              <b class="wf-card__title">${I(g.title)}</b>
              ${y(g)}
              ${g.desc?`<span class="wf-card__desc">${Ar(g.desc)}</span>`:""}
              ${g.link?'<span class="wf-card__link">↗ 링크</span>':""}
            </span>`,T=`${r.showThumb?`<span class="wf-card__thumb" style="padding-bottom:${r.ratio*100}%">${($=g.image)!=null&&$.id?o(g.image,"wf-card__img"):`<em>${E+1}</em>`}${S(g)}</span>`:""}${N}`;return(P=g.detail)!=null&&P.trim()?`<a class="wf-card has-detail" href="#${$s(c,E)}">${T}</a>`:g.link?`<a class="wf-card" href="${I(At(g.link))}" target="_blank" rel="noreferrer noopener">${T}</a>`:`<article class="wf-card">${T}</article>`}).join(`
          `),v=(r.items??[]).map((g,E)=>{var M,T;if(!((M=g==null?void 0:g.detail)!=null&&M.trim()))return"";const N=g.link?`<a class="wf-card__link" href="${I(At(g.link))}" target="_blank" rel="noreferrer noopener">↗ 링크 열기</a>`:"";return`<div class="wf-detail" id="${$s(c,E)}">
            <a class="wf-detail__scrim" href="#!" aria-label="닫기"></a>
            <div class="wf-detail__box">
              <a class="wf-detail__close" href="#!" aria-label="닫기">✕</a>
              ${(T=g.image)!=null&&T.id?o(g.image,"wf-detail__img"):""}
              <b class="wf-detail__title">${I(g.title)}</b>
              ${g.stack?`<span class="wf-card__stack">${I(g.stack)}</span>`:""}
              <p class="wf-detail__body">${Ar(g.detail)}</p>
              ${N}
            </div>
          </div>`}).filter(Boolean).join(`
        `);return`<div class="wf-gal${r.grayHover?" is-gray":""}">
        <h2 class="wf-sec__title">${I(r.title)}</h2>
        <div class="wf-gal__grid" style="grid-template-columns:repeat(${r.columns}, minmax(0, 1fr))">
          ${w}
        </div>
        ${v}
      </div>`}case"main":return`<div class="wf-main" style="grid-template-columns:repeat(${r.columns}, minmax(0, 1fr));gap:${r.gap}px">
        ${(r.items??[]).map(y=>`<div class="wf-main__slot">${I(y.label)}</div>`).join(`
        `)}
      </div>`;case"model":{const y=(j=r.srcFile)!=null&&j.id?u==null?void 0:u(r.srcFile):r.src,S=(C=r.envFile)!=null&&C.id?ap(u==null?void 0:u(r.envFile),(b=r.envFile)==null?void 0:b.name):r.environmentImage,w=(((d=Ln[e])==null?void 0:d.optionKeys)??[]).filter(g=>g!=="src"&&g!=="environmentImage").filter(g=>r[g]!==void 0&&r[g]!==null&&r[g]!=="").map(g=>` data-fx-${xt(g)}="${I(String(r[g]))}"`).join(""),v=r.fill?null:r.free?"100%":`min(${r.boxHeight}px, 62vh)`;return`<div class="wf-3d fx-model${r.fill?" is-fill":""}"${v?` style="height:${v}"`:""}${y?` data-fx-src="${I(y)}"`:""}${S?` data-fx-environment-image="${I(S)}"`:""}${w}></div>`}case"contact":{const y=[r.phone?`<a href="tel:${I(r.phone.replace(/[^\d+]/g,""))}">${I(r.phone)}</a>`:"",r.location?`<span>${I(r.location)}</span>`:""].filter(Boolean).join("<i> · </i>");return`<div class="wf-contact" style="align-items:${cn(r.align)};text-align:${r.align==="center"?"center":"left"}">
        <h2 class="wf-sec__title">${I(r.title)}</h2>
        ${r.body?`<p class="wf-sec__body">${Ar(r.body)}</p>`:""}
        ${r.email?`<a class="wf-contact__mail${r.big?" is-big":""}" href="mailto:${I(r.email)}">${I(r.email)}</a>`:""}
        ${y?`<span class="wf-contact__meta">${y}</span>`:""}
      </div>`}case"cover":{const y=`wf-cover${r.kenBurns?" is-kb":""}${r.zoomOnScroll?" is-zoom":""}`,S=(m=r.image)!=null&&m.id?o(r.image,"wf-cover__img"):'<span class="wf-cover__empty" aria-hidden="true"></span>';return`<div class="${y}" style="height:${r.height}px;justify-content:${cn(r.valign)};align-items:${cn(r.align)}">
        ${S}
        <span class="wf-cover__veil" style="opacity:${r.overlay}" aria-hidden="true"></span>
        <span class="wf-cover__body" style="text-align:${r.align==="center"?"center":"left"}">
          <b class="wf-cover__title">${Ar(r.title)}</b>
          ${r.sub?`<span class="wf-cover__sub">${I(r.sub)}</span>`:""}
        </span>
      </div>`}case"marquee":{const y=()=>[0,1,2,3].map(()=>`<span class="wf-mq__txt">${I(r.text)}</span><i class="wf-mq__sep">${I(r.sep)}</i>`).join(""),S=`--mq-t:${r.speed}s;--mq-size:${r.size}em;--mq-dir:${r.reverse?"reverse":"normal"}`;return`<div class="wf-mq${r.outline?" is-outline":""}${r.pauseOnHover?" is-pausable":""}" style="${S}">
        <div class="wf-mq__track">
          <span class="wf-mq__set">${y()}</span>
          <span class="wf-mq__set" aria-hidden="true">${y()}</span>
        </div>
      </div>`}case"cta":{const y=Object.entries(As(r)).map(([v,g])=>`${v.startsWith("--")?v:xt(v)}:${g}`).join(";"),S=` class="wf-btn wf-cta__btn"${y?` style="${y}"`:""}`,w=r.cta?(x=r.ctaFile)!=null&&x.id?`<a${S}${s(r.ctaFile)}>${I(r.cta)}</a>`:`<a${S} href="${I(r.ctaHref?At(r.ctaHref):"#contact")}"${r.ctaHref&&/^https?:/i.test(At(r.ctaHref))?' target="_blank" rel="noreferrer noopener"':""}>${I(r.cta)}</a>`:"";return`<div class="wf-cta${r.gradient?" is-grad":""}" style="align-items:${cn(r.align)};text-align:${r.align==="center"?"center":"left"}">
        <b class="wf-cta__title">${I(r.title)}</b>
        ${r.sub?`<span class="wf-cta__sub">${I(r.sub)}</span>`:""}
        ${w}
      </div>`}case"slider":{const y=Xu(r.transition),S=(r.items??[]).slice(0,Ju),w=Zu(c),v=y!=="scroll"?S.map((M,T)=>`<input class="wf-sld__r" type="radio" name="${w}" id="${Hn(c,T)}"${T===0?" checked":""} />`).join(`
        `):"",g=S.map((M,T)=>{var A;const $=(A=M.image)!=null&&A.id?o(M.image,"wf-sld__img"):'<span class="wf-sld__empty" aria-hidden="true"></span>',P=M.href?At(M.href):"",J=M.cta?`<a class="wf-btn wf-sld__btn" href="${I(P||"#contact")}"${P&&/^https?:/i.test(P)?' target="_blank" rel="noreferrer noopener"':""}>${I(M.cta)}</a>`:"",H=y!=="scroll"&&S.length>1&&r.arrows?`<span class="wf-sld__nav" aria-hidden="true">
            <label class="wf-sld__arrow is-prev" for="${Hn(c,(T-1+S.length)%S.length)}">‹</label>
            <label class="wf-sld__arrow is-next" for="${Hn(c,(T+1)%S.length)}">›</label>
          </span>`:"";return`<div class="wf-sld__slide">
          ${$}
          <span class="wf-sld__veil" style="opacity:${r.overlay}" aria-hidden="true"></span>
          <span class="wf-sld__body" style="justify-content:${cn(r.valign)};align-items:${cn(r.align)};text-align:${r.align==="center"?"center":"left"}">
            <b class="wf-sld__title">${I(M.title)}</b>
            ${M.sub?`<span class="wf-sld__sub">${I(M.sub)}</span>`:""}
            ${J}
          </span>
          ${H}
        </div>`}).join(`
        `),E=y!=="scroll"&&S.length>1&&r.dots?`<span class="wf-sld__dots">${S.map((M,T)=>`<label for="${Hn(c,T)}" title="${T+1}번째"></label>`).join("")}</span>`:"",N=r.autoplay&&y!=="scroll"?` data-auto="${(r.interval??5)*1e3}"`:"";return`<div class="wf-sld wf-sld--${y}${r.kenBurns?" is-kb":""}${r.arrows?"":" no-arrows"}" style="--sld-h:${r.height}px;--sld-t:${r.speed}ms"${N} data-loop="${r.loop?1:0}" data-pause="${r.pauseOnHover?1:0}">
        ${v}
        <div class="wf-sld__track">
        ${g}
        </div>
        ${E}
      </div>`}case"bcard":{const y=Fp[r.design]??"quiet",S={"채움 원형":"fill","윤곽 원형":"line",아이콘만:"bare",없음:"none"}[r.iconStyle]??"fill",w={"오른쪽 가운데":" is-qr-right","왼쪽 아래":" is-qr-bl","오른쪽 아래":" is-qr-br"}[r.qrPos]??"",v=ae=>`<span class="wf-bcard__ico" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="${Pp[ae]}" fill="currentColor"/></svg></span>`,g=(ae,fe)=>fe?`<div class="wf-bcard__row"><span class="wf-bcard__text"><span class="wf-bcard__line">${Ar(fe)}</span></span>${v(ae)}</div>`:"",E=r.qr?Dp(Bl(ql(r))):null,N=r.vcf?`<a class="wf-bcard__save" href="data:text/vcard;charset=utf-8,${encodeURIComponent(Bl(ql(r)))}" download="${I((r.name||"contact").replace(/[\\/:*?"<>|]+/g,"-"))}.vcf">연락처 저장</a>`:"",M=E||N?`<div class="wf-bcard__side">${E?`<span class="wf-bcard__qr">${E}</span>`:""}${N}</div>`:"",T=r.faces==="앞·뒤 (누르면 뒤집기)",$=`bcflip-${c}`,P=r.label?`<span class="wf-bcard__label">${I(r.label)}</span>`:"",J=`<span class="wf-bcard__mono">${I(Op(r))}</span>`,H=`<div class="wf-bcard__lead">
          <b class="wf-bcard__role">${I(r.role)}</b>
          ${r.roleSub?`<span class="wf-bcard__rolesub">${I(r.roleSub)}</span>`:""}
        </div>`,A=`<div class="wf-bcard__row">
            <span class="wf-bcard__text">
              <b class="wf-bcard__name">${I(r.name)}</b>
              ${r.nameEn?`<span class="wf-bcard__nameen">${I(r.nameEn)}</span>`:""}
              ${r.title?`<span class="wf-bcard__title">${I(r.title)}</span>`:""}
              ${r.org?`<span class="wf-bcard__title">${I(r.org)}</span>`:""}
            </span>
            ${v("person")}
          </div>`,B=`${g("phone",r.phone)}${g("mail",r.email)}${g("pin",r.location)}${g("globe",r.site)}`,Q=r.tagline?`<p class="wf-bcard__tagline">${I(r.tagline)}</p>`:"",pe=r.stack?`<span class="wf-bcard__stack">${I(r.stack)}</span>`:"",Z=`<div class="wf-bcard__in">
        ${P}
        ${J}
        ${H}
        <div class="wf-bcard__info">
          ${A}
          ${T?"":B}
        </div>
        ${T?"":Q}
        ${T?"":pe}
        ${T?"":M}
        </div>`,je=`<div class="wf-bcard__in wf-bcard__in--back">
        ${Q}
        <div class="wf-bcard__info">${B}</div>
        ${pe}
        ${M}
        </div>`,Se=`wf-bcard wf-bcard--${y} wf-bcard--ico-${S}${w}${T?" is-2face":""}`,X=r.paper===!0?40:r.paper===!1?0:Number.isFinite(r.paper)?r.paper:40,ne=`${r.accent?`--bc-accent:${r.accent};`:""}--bc-paper:${X/100};max-width:${r.width??520}px`,Ne=X>0?'<span class="wf-bcard__paper" aria-hidden="true"></span>':"",Re=`<button type="button" class="wf-bcard__png" data-name="${I(r.name||"명함")}" title="이 명함을 PNG 그림으로 저장합니다" aria-label="명함을 PNG로 저장"><svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" focusable="false"><path d="M12 3v10m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>`;return T?`<div class="${Se}" style="${ne}">
        <input class="wf-bcard__toggle" type="checkbox" id="${$}" aria-label="명함 뒤집기">
        <div class="wf-bcard__flip">
          <div class="wf-bcard__face wf-bcard__face--front">
            <span class="wf-bcard__deco" aria-hidden="true"></span>
            ${Ne}
            ${Z}
          </div>
          <div class="wf-bcard__face wf-bcard__face--back">${Ne}${je}</div>
        </div>
        <label class="wf-bcard__flipbtn" for="${$}">뒤집기</label>
        ${Re}
      </div>`:`<div class="${Se}" style="${ne}">
        <span class="wf-bcard__deco" aria-hidden="true"></span>
        ${Ne}
        ${Z}
        ${Re}
      </div>`}case"links":{const y=(r.items??[]).filter(S=>S.label||S.url).map(S=>{const w=j4(S),v=r.style==="cards"&&S.desc?`<p class="wf-link__desc">${Ar(S.desc)}</p>`:"";if(w.file){const T=s(w.file),$=`<em class="wf-link__url">↓ ${I(w.file.name??"파일")}</em>`;return T?`<a class="wf-link"${T}>${I(S.label)}${$}${v}</a>`:`<span class="wf-link">${I(S.label)}${v}</span>`}const g=w.url,E=/^https?:/i.test(g),N=g?` href="${I(g)}"${r.newTab&&E?' target="_blank" rel="noreferrer noopener"':""}`:"",M=r.style!=="buttons"&&S.url?`<em class="wf-link__url">${I(rp(S.url))}</em>`:"";return g?`<a class="wf-link"${N}>${I(S.label)}${M}${v}</a>`:`<span class="wf-link">${I(S.label)}${M}${v}</span>`}).join(`
          `);return`<div class="wf-links wf-links--${r.style}" style="align-items:${cn(r.align)}">
        ${r.title?`<h2 class="wf-sec__title">${I(r.title)}</h2>`:""}
        <div class="wf-links__row">
          ${y}
        </div>
      </div>`}case"footer":return`<footer class="wf-bar wf-bar--foot" style="justify-content:${r.align}">
        <span class="wf-foot__text">${I(r.text)}</span>
        ${r.showMenu?p({gap:18}):""}
        ${r.showTime?`<span class="wf-foot__time" data-wf-clock="${I(r.timeZone??"")}" data-wf-city="${I(r.timeCity??"Seoul")}">${I(Gu(r.timeCity,r.timeZone))}</span>`:""}
        ${r.email?`<a class="wf-foot__mail" href="mailto:${I(r.email)}">${I(r.email)}</a>`:""}
      </footer>`;default:return""}}const cn=e=>e==="center"?"center":e==="end"?"flex-end":"flex-start",dd='<button type="button" class="wf-mode" data-mode-toggle aria-label="다크 / 라이트 전환"><svg class="wf-mode__moon" aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg><svg class="wf-mode__sun" aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg></button>',n8=e=>String(e).replace(/(^|[\s,(])(\d*\.?\d+)fr/g,"$1minmax(0, $2fr)");function fd(e,r,n,t){var Me,W,ee,we,ge,xe,le,Te,D,O,se;const{pages:a,theme:o,typeset:s,global:l}=n,c=kt(e.wireframe),u=e.fills??{},h=e.overrides??{},f=e.fx??{},p=[...c.regions.map(F=>F.id),...(e.extra??[]).flatMap(tr)],k={},_=[];for(const F of p){const U=u[F];if(!Qu.includes(U))continue;const me=(ee=(W=(Me=e.content)==null?void 0:Me[F])==null?void 0:W.title)==null?void 0:ee.trim();if(!me)continue;const ye=Ku(me,F);let be=ye,ke=2;for(;_.some(Ce=>Ce.anchor===be);)be=`${ye}-${ke++}`;k[F]=be,_.push({regionId:F,label:ep(me),anchor:be})}const j=qp((we=n.site)==null?void 0:we.enterFx),C=j==="none"?{}:Ip([...c.regions,...(e.extra??[]).flatMap(F=>tr(F).map(U=>({id:U,row:F.id})))].filter(F=>{var U;return!((U=h[F.id])!=null&&U.enterOff)}),u),b=(F,U,me,ye)=>{var at,We,zt;const be=u[F];if(!be)return"";const ke=Ln[be],Ce=((at=e.content)==null?void 0:at[F])??{},ie=f[F]??[],De=ie.some(br=>br.name==="flip"),te={...Ts,radius:((ke==null?void 0:ke.pad)!==void 0,l.radius),padding:(ke==null?void 0:ke.pad)??l.padding,border:l.border,minHeight:0,bg:"",...h[F]??{}},$e=Object.entries(sp(te.typo,Du)).map(([br,on])=>`${br.startsWith("--")?br:xt(br)}:${on}`).join(";"),Fe=be==="model"&&!!Ce.free,Xe=!!te.free&&!!(ke!=null&&ke.freeItems),xr=Xe&&te.itemPos?Object.entries(te.itemPos).map(([br,on])=>`--fi${br}x:${on.x}%;--fi${br}y:${on.y}%`).join(";"):"",en=[Fe?`left:${Ce.freeX??72}%;top:${Ce.freeY??58}%;width:clamp(104px, ${Ce.freeW??26}vw, 46vw);height:auto;aspect-ratio:1/1`:"",Fe?"":U,Fe?"":Rs(te.alignY)?`align-self:${Rs(te.alignY)}`:"",Fe?"":`min-height:${np(0,te.minHeight)}px`,xr,`border-radius:${te.radius}px`,`border-width:${t.borders===!1?0:te.border}px`,t.borders===!1?"":"border-color:var(--wf-line, currentColor)",te.z?`z-index:${te.z}`:"",(te.bgShift??"").trim()?`view-timeline:--wfbg-${F} block`:"",`padding:min(${te.padding}px, 6vw)`,te.bg?`background-color:${te.bg}`:Ds((We=n.site)==null?void 0:We.background)?`background-color:${tp(fa(o).bg,te.bgSee)}`:"",Object.entries(op(te,(zt=t.imgSrc)==null?void 0:zt.call(t,te.bgImage))).map(([br,on])=>`${xt(br)}:${on}`).join(";"),Object.entries(qu(te.tfx)).map(([br,on])=>`${br}:${on}`).join(";"),$e].filter(Boolean).join(";"),rn=["wf__region",ye?"is-sticky":"",Fe?"is-free":"",Xe?"is-freeitems":"",Ce.divider?"has-divider":"",Bu(te.tfx)].filter(Boolean).join(" "),nn=ke!=null&&ke.tag&&/^(header|nav|main|aside|section|footer)$/.test(ke.tag)?ke.tag:"div",tn=l8(r8(be,Ce,a,r,De,t.img,t.file,_,F,t.fileSrc,t.onePage),te.tfx),wr=k[F]?` id="${k[F]}"`:be==="footer"?' id="contact"':"",xn=C[F]?` data-enter="${C[F]}"`:"",an=Ce.hideOnScroll&&(ye||Ce.sticky)?' data-hide-scroll=""':"";if(be==="footer")return`<div class="${rn}"${wr}${xn} style="${en}"${cd(ie)}>${tn}</div>`;const Wr=`<${nn} class="${rn}"${wr}${xn}${an} style="${en}"${cd(ie)}>
      ${tn}
    </${nn}>`,Cr=/grid-row:[^;]*\//.test(U||"")&&/grid-column:1(?![0-9])/.test(U||""),Tr=["topheader","nav","header"].includes(be),Nt=be&&(ye||Tr||be==="aside"&&Cr);return t.onePage&&Nt?r>0?"":`<!--WFHEAD:${Cr?"side":"top"}-->${Wr}<!--/WFHEAD-->`:Wr},d=dp(c,u),m=Yc(c,h,l.gap),x=(F,U)=>{var me;return((me=F.fit[U])==null?void 0:me.col)??F.place[U]},y=(F,U)=>F.fit[U]?`;width:${F.fit[U].width};justify-self:${F.fit[U].justify}`:"",S=F=>{const U=Kc(F,h,l.gap),me=tr(F).map(be=>b(be,U.place[be]?`grid-column:${x(U,be)}${y(U,be)}`:"",0,!1)).filter(Boolean).join(`
      `);return me?`<div class="wf wf--row" style="grid-template-columns:repeat(${U.cols?F.cols*gt:F.cols}, minmax(0, 1fr));gap:${l.gap}px">
      ${me}
    </div>`:""},{from:w}=yo(c),v=(F,U,me)=>{const ye=String(F??"").trim().split(/\s+/).filter(Boolean);return ye.length?ye.slice(U,me).join(" "):""},g=F=>{const[U,me]=String(F).split("/").map(be=>be.trim()),ye=parseInt(U,10)||1;return[ye,!me||me==="-1"?ye+1:parseInt(me,10)||ye+1]},E=(F,U)=>{const me=c.regions.filter(te=>d.place[te.id]&&w(te)>=F&&w(te)<=U);if(!me.length)return"";const ye=me.map(te=>g(d.place[te.id].row)),be=Math.min(...ye.map(([te])=>te)),ke=Math.max(...ye.map(([,te])=>te)),Ce=te=>{const[$e,Fe]=String(te).split("/").map(xr=>xr.trim()),Xe=(parseInt($e,10)||1)-be+1;return Fe?Fe==="-1"?Xe+" / -1":Xe+" / "+((parseInt(Fe,10)||Xe+1)-be+1):String(Xe)},ie=me.map(te=>b(te.id,`grid-column:${x(m,te.id)??d.place[te.id].col};grid-row:${Ce(d.place[te.id].row)}${y(m,te.id)}`,te.minH,c.sticky===te.id)).filter(Boolean).join(`
    `);if(!ie)return"";const De=v(d.rows,be-1,ke-1);return`<div class="wf" style="grid-template-columns:${n8(m.cols??c.cols)};${De?`grid-template-rows:${De};`:""}gap:${l.gap}px">
    ${ie}
    </div>`},N=wp(c,e.extra??[]).map(F=>F.kind==="row"?S(F.row):E(F.from,F.to)).filter(Boolean).join(`
    `),M=new Set;Object.values(f).forEach(F=>F.forEach(U=>M.add(U.name))),Object.values(u).forEach(F=>{Os[F]&&M.add(F)});const T=fa(o),$=Ms(s),P=[...c.regions.map(F=>F.id),...(e.extra??[]).flatMap(tr)].filter(F=>{var U;return u[F]&&(((U=h[F])==null?void 0:U.bgShift)??"").trim()}).map(F=>({id:F,color:h[F].bgShift})),J=[`font-family:${$.font}`,`background:${T.bg}`,`--wf-bg:${T.bg}`,`--wf-text:${T.text}`,`color:${T.text}`,`--wf-surface:${T.surface}`,`--wf-line:${T.border}`,`--wf-muted:${T.muted}`,`--wf-accent:${T.accent}`,`--wf-max:${l.maxWidth}px`,`padding:10px ${l.marginX??10}px`,`--fx-dot-color:${T.dot}`,`--fx-star-color:${Vp(T)}`,`--fx-char-color:${T.line}`,...j!=="none"?[`--enter-at:${Hp((ge=n.site)==null?void 0:ge.enterDelay)}%`]:[],...P.length?[`timeline-scope:${P.map(F=>`--wfbg-${F.id}`).join(", ")}`]:[],...t.modeToggle?(()=>{const F=Wp(T);return[`--wfm-bg:${F.bg}`,`--wfm-text:${F.text}`,`--wfm-surface:${F.surface}`,`--wfm-line:${F.border}`,`--wfm-muted:${F.muted}`]})():[]].join(";"),H=t.withEffects&&(M.size||t.globalsOn)?`
  <script type="module" src="./assets/init.js"><\/script>`:"",A=t.single?`
  <style>
${t.fontCss??""}
${Bs(Fc)}
${Bs(Pc)}
  </style>`:`
  <link rel="stylesheet" href="./assets/site.css" />`,B=n.site??{},Q=ho(B,a),pe=r===0?Q:`${e.name} — ${Q}`,Z=(xe=B.description)==null?void 0:xe.trim(),je=(le=t.imgSrc)==null?void 0:le.call(t,B.ogImage),Se=t.single?je:sg(B,je),X=[Z?`
  <meta name="description" content="${I(Z)}" />`:"",`
  <meta property="og:type" content="website" />`,`
  <meta property="og:title" content="${I(pe)}" />`,Z?`
  <meta property="og:description" content="${I(Z)}" />`:"",Se?`
  <meta property="og:image" content="${Se}" />`:"",`
  <meta name="twitter:card" content="${Se?"summary_large_image":"summary"}" />`,`
  <link rel="icon" href="${ig(B,a)}" />`].join(""),ne=B.background,Ne=F=>Object.entries(F).map(([U,me])=>`${xt(U)}:${me}`).join(";");let Re="";if(Ds(ne)){const F=Ne(zp(ne)),U=Ne(Mp(ne)),me=ne.kind==="video"?(Te=t.fileSrc)==null?void 0:Te.call(t,ne.video):(D=t.imgSrc)==null?void 0:D.call(t,ne.image),ye=ne.kind==="video"?(O=t.imgSrc)==null?void 0:O.call(t,ne.poster):null,be=Np(ne.mode)==="tile"&&me?` background-image:url('${me}');`:"";if(me){const ke=ne.kind==="video"?`<video class="wf-bg__media"${F?` style="${F}"`:""} src="${me}"${ye?` poster="${ye}"`:""} autoplay muted loop playsinline></video>`:`<img class="wf-bg__media"${F?` style="${F}"`:""} src="${me}" alt="" />`;Re=`
    <div class="${Ol(ne)}"${be?` style="${be.trim()}"`:""} aria-hidden="true">
      ${ke}
      <span class="wf-bg__veil"${U?` style="${U}"`:""}></span>
    </div>`}}(se=n.site)!=null&&se.introLoader&&r===0&&(Re+=`
    <div class="wf-intro" aria-hidden="true"><b class="wf-intro__name">${I(ho(B,a))}</b><i class="wf-intro__bar"></i></div>`);for(const F of P)Re+=`
    <i class="wf-bgshift" aria-hidden="true" style="background:${I(F.color)};animation-timeline:--wfbg-${F.id}"></i>`;B.scrollBar&&(Re+=`
    <span class="wf-progress" aria-hidden="true"></span>`),((ne==null?void 0:ne.grain)??0)>0&&(Re+=`
    <span class="wf-grain" style="opacity:${ne.grain}" aria-hidden="true"></span>`);const ae=_.length?`
    <a class="wf-down" href="#${encodeURIComponent(_[0].anchor)}" aria-label="아래로 이동"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M6 13l6 6 6-6"/></svg></a>`:"",fe=`<div class="wf-page${l.rowsMax?" is-rowmax":""}${j!=="none"?` wf-enter wf-enter--${j}`:""}" style="${J};gap:${l.gap}px">${Re}
    ${N}${ae}
  </div>`;return{file:`${si(e.name,r)}.html`,usesFx:M,bodyHTML:fe,html:`<!doctype html>
<html lang="${I(B.lang||"ko")}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${I(pe)}</title>${X}${A}
</head>
<body>
  ${fe}${H}
</body>
</html>
`}}function t8(e,r={}){const n=[],t=[];r.smooth&&(n.push("import { mount as smoothScroll } from '../effects/smooth-scroll/index.js';"),t.push("  smoothScroll(document.body);")),r.cursor&&(n.push("import { mount as cursorDot } from '../effects/cursor-dot/index.js';"),t.push("  cursorDot(document.body);")),r.clock&&t.push(`  document.querySelectorAll('[data-wf-clock]').forEach((el) => {
    const tick = () => {
      try {
        const hm = new Intl.DateTimeFormat('ko-KR', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: el.dataset.wfClock || undefined }).format(new Date());
        el.textContent = (el.dataset.wfCity || 'Seoul') + ', ' + hm;
      } catch { /* 시간대 이름이 틀리면 마지막 값을 그대로 둡니다 */ }
    };
    tick();
    setInterval(tick, 30000);
  });`),r.mode&&t.push(`  const MODE_KEY = 'pm:dark';
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
  try { if (localStorage.getItem(MODE_KEY) === '1') applyMode(true); } catch { /* 저장 불가 환경 */ }`),r.slider&&t.push(`  document.querySelectorAll('.wf-sld').forEach((sl) => {
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
  });`),r.hideNav&&t.push(`  {
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
  }`);for(const a of e)if(Wa[a]){n.push(`import { mount as ${a} } from '../effects/${Wa[a]}/index.js';`);const o=Et[a];o!=null&&o.target?t.push(`  document.querySelectorAll('[data-fx~="${a}"]').forEach((el) => {
    const targets = el.querySelectorAll('${o.target}');
    if (targets.length) ${a}([...targets], readOpts(el, '${Wa[a]}'));
  });`):t.push(`  ${a}('[data-fx~="${a}"]');`)}else if(Os[a]&&ld[a]){const{fn:o,sel:s}=ld[a];n.push(`import { mount as ${o} } from '../effects/${Os[a]}/index.js';`),t.push(`  ${o}('${s}');`)}return`/**
 * 3D 효과 마운트.
 *
 * 옵션은 HTML의 data-fx-* 속성에 들어 있고, 효과 팩의 defineEffect가
 * 그걸 알아서 읽습니다(effects/_core/effect.js). 그래서 여기서는
 * "선택자마다 mount 한 번"만 부르면 끝입니다.
 *
 * 효과를 빼고 싶으면 아래 한 줄을 지우고 HTML의 data-fx도 지우면 됩니다.
 */

${n.join(`
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
`}const a8={"image/webp":"webp","image/png":"png","image/jpeg":"jpg","image/gif":"gif","image/svg+xml":"svg","application/pdf":"pdf","application/zip":"zip","model/gltf-binary":"glb","model/gltf+json":"gltf"};function o8(e,r,n){var o;const t=a8[r]??(((o=n==null?void 0:n.match(/\.([a-z0-9]{1,5})$/i))==null?void 0:o[1])??"bin").toLowerCase();return r!=null&&r.startsWith("image/")?`images/${e}.${t}`:`files/${(n??e).replace(/\.[^.]*$/,"").replace(/[^\w가-힣.-]+/g,"-").slice(0,40)||e}.${t}`}function s8(e){const r={},n=t=>{if(!(!t||typeof t!="object")){if(Array.isArray(t))return t.forEach(n);if(typeof t.id=="string"&&typeof t.bytes=="number"){t.name&&(r[t.id]=t.name);return}Object.values(t).forEach(n)}};for(const t of(e==null?void 0:e.pages)??[])Object.values(t.content??{}).forEach(n),Object.values(t.overrides??{}).forEach(n);return n(e==null?void 0:e.site),r}async function i8(e,r){const n={},t={},a=s8(e);for(const o of Wc(e)){if(r){const c=await Uu(o);c&&(n[o]=c);continue}const s=await b4(o);if(!s)continue;const l=`assets/${o8(o,s.type,a[o])}`;t[l]=new Uint8Array(await s.arrayBuffer()),n[o]=`./${l}`}return{srcMap:n,binaries:t}}function l8(e,r){if(!Ou(r))return e;const t=r.target==="제목 + 본문"?"(?:title|__body|__sub)":"title",a=new RegExp(String.raw`(<(h1|h2|b|p|span)\b[^>]*class="[^"]*${t}[^"]*"[^>]*>)([\s\S]*?)(</\2>)`,"g");return e.replace(a,(o,s,l,c,u)=>{if(/<(?!br\b)/.test(c)||c.includes("&"))return o;let h=0;const f=c.split(/<br \/>/).map(p=>(p.match(/\S+ ?| /g)??[]).map(k=>`<span class="wf-tfx__w">${[...k].map(_=>`<span class="wf-tfx__ch" style="--i:${h++}">${_===" "?"&nbsp;":_}</span>`).join("")}</span>`).join("")).join("<br />");return`${s}${f}${u}`})}const c8=e=>{const r=new Uint8Array(e);let n="";for(let t=0;t<r.length;t+=8192)n+=String.fromCharCode(...r.subarray(t,t+8192));return btoa(n)};async function d8(e,r){const n=Pu(e),t=[...new Set(hn.filter(l=>n.includes(l.id)).flatMap(l=>l.files.map(c=>c.file)))],a={},o={};for(const l of t)try{const c=await fetch(`${Ls}/${l}`);if(!c.ok)continue;const u=await c.arrayBuffer();r?o[l]=`data:font/woff2;base64,${c8(u)}`:a[`assets/fonts/${l}`]=new Uint8Array(u)}catch{}if(!r&&Object.keys(a).length)try{const l=await fetch(`${Ls}/OFL.txt`);l.ok&&(a["assets/fonts/OFL.txt"]=await l.text())}catch{}const s=Oc(l=>r?o[l]??"":`./fonts/${l}`,n);return{css:Object.keys(r?o:a).length?s:"",binaries:a}}function f8(e,r){const n=e!=null&&e.id?r[e.id]:null;return n?` href="${n}" download="${I(e.name??"파일")}"`:""}function u8(e,r,n,t){const a=e!=null&&e.id?t[e.id]:null;if(!a)return"";const o=`object-fit:${e.fit??"cover"}`;return`<img class="${r}" src="${a}" alt="${I(e.alt??"")}" loading="lazy" style="${o}${n?";"+n:""}" />`}async function p8(e,r={}){var f,p,k,_,j,C,b;const n={single:!1,withEffects:!0,borders:!0,...r},t={},a=new Set,o={smooth:!!((f=e.site)!=null&&f.smoothScroll),cursor:!!((p=e.site)!=null&&p.cursor),clock:(e.pages??[]).some(d=>Object.entries(d.fills??{}).some(([m,x])=>{var y,S;return x==="footer"&&((S=(y=d.content)==null?void 0:y[m])==null?void 0:S.showTime)})),mode:(e.pages??[]).some(d=>Object.entries(d.fills??{}).some(([m,x])=>{var y,S;return["topheader","header","nav"].includes(x)&&((S=(y=d.content)==null?void 0:y[m])==null?void 0:S.modeToggle)})),hideNav:(e.pages??[]).some(d=>Object.entries(d.fills??{}).some(([m,x])=>{var y,S;return["topheader","header","nav"].includes(x)&&((S=(y=d.content)==null?void 0:y[m])==null?void 0:S.hideOnScroll)})),slider:(e.pages??[]).some(d=>Object.entries(d.fills??{}).some(([m,x])=>{var y,S;return x==="slider"&&(((S=(y=d.content)==null?void 0:y[m])==null?void 0:S.items)??[]).length>1}))};n.globalsOn=o.smooth||o.cursor||o.clock||o.mode||o.hideNav||o.slider,n.modeToggle=o.mode;const{srcMap:s,binaries:l}=await i8(e,n.single),c=await d8(e,n.single);n.fontCss=c.css;const u=(k=e.site)==null?void 0:k.customFont;if(u!=null&&u.id&&Pu(e).includes("custom")){const d=s[u.id];if(d){const m=d.startsWith("data:")?d:d.replace(/^\.\/assets\//,"./");c.css=`${$l(m,u.name)}
${c.css}`,n.fontCss=`${$l(d,u.name)}
${n.fontCss}`}}if(n.img=(d,m,x)=>u8(d,m,x,s),n.imgSrc=d=>d!=null&&d.id?s[d.id]??null:null,n.file=d=>f8(d,s),n.fileSrc=d=>d!=null&&d.id?s[d.id]??null:null,n.onePage=(((_=e.site)==null?void 0:_.navMode)??"anchor")==="anchor",n.onePage){const d=e.pages.map((N,M)=>fd(N,M,e,n));d.forEach(N=>N.usesFx.forEach(M=>a.add(M)));let m="",x="top";const y=d[0].bodyHTML.match(/<!--WFHEAD:(top|side)-->([\s\S]*?)<!--\/WFHEAD-->/);if(y){x=y[1];const N=((j=d[0].bodyHTML.match(/^<div class="wf-page[^"]*" style="([^"]*)"/))==null?void 0:j[1])??"";m=`<div class="wf-page wf-headbar${x==="side"?" wf-headbar--side":""}" style="${N}">${y[2]}</div>
  `}const S=m+d.map((N,M)=>{const T=M===0?N.bodyHTML.replace(/<!--WFHEAD:(?:top|side)-->[\s\S]*?<!--\/WFHEAD-->/,"").replace(/<!--\/?WFHEAD(?::top|:side)?-->/g,""):N.bodyHTML;return`<section class="wf-pg" id="pg-${M}">
  ${T}
  </section>`}).join(`
  `);let w=d[0].html.replace(d[0].bodyHTML,S);const v=fa(e.theme).bg,g=(()=>{var M,T;const N=/^(\d+(?:\.\d+)?)px/.exec(String(((T=kt((M=e.pages[0])==null?void 0:M.wireframe))==null?void 0:T.cols)??""));return N?Number(N[1]):240})(),E=((C=e.global)==null?void 0:C.marginX)??10;w=w.replace("</head>",`  <style>html{scroll-behavior:smooth}.wf-pg{display:block}html,body{background:${v}}.wf-headbar{position:sticky;top:0;z-index:60;min-height:0!important;padding-top:0!important;padding-bottom:0!important}.wf-headbar .wf__region{position:static!important;align-self:stretch!important;width:100%}.wf-headbar--side{position:fixed;top:10px;bottom:10px;left:${E}px;width:${g}px;padding:0!important;overflow:auto}.wf-headbar--side .wf__region{height:100%}.wf-pg{scroll-margin-top:70px}`+((b=e.site)!=null&&b.snapScroll?"html{scroll-snap-type:y proximity}.wf-pg{scroll-snap-align:start}":"")+`</style>
</head>`),w=w.replace("</body>",`  <script>(function(){var L=[].slice.call(document.querySelectorAll('.wf-headbar a[href^="#pg-"]'));if(!L.length)return;
  var S=[].slice.call(document.querySelectorAll('.wf-pg'));
  var set=function(i){L.forEach(function(a,k){a.classList.toggle('is-current',k===i);});};
  L.forEach(function(a,i){a.addEventListener('click',function(){set(i);});});
  if('IntersectionObserver'in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var i=S.indexOf(e.target);if(i>-1)set(i);}});},{rootMargin:'-45% 0px -50% 0px'});
  S.forEach(function(s){io.observe(s);});}
  })();<\/script>
</body>`),n.withEffects&&(a.size||n.globalsOn)&&!w.includes("assets/init.js")&&(w=w.replace("</body>",`  <script type="module" src="./assets/init.js"><\/script>
</body>`)),t["index.html"]=w}else e.pages.forEach((d,m)=>{const{file:x,html:y,usesFx:S}=fd(d,m,e,n);t[x]=y,S.forEach(w=>a.add(w))});Object.keys(t).forEach(d=>{if(!d.endsWith(".html"))return;const m=t[d];typeof m!="string"||!m.includes("wf-bcard__png")||(t[d]=m.replace("</body>",`  <script>${cg()}<\/script>
</body>`))}),n.single||(t["assets/site.css"]=`/* 레이아웃 + 파트 스타일. 편집기 전용 규칙은 걷어냈습니다. */
`+(c.css?`${c.css}

`:"")+Bs(Fc)+`

`+Bs(Pc));const h=new Set;if(n.withEffects&&(a.size||n.globalsOn)){t["assets/init.js"]=t8(a,o),h.add("_core"),a.forEach(d=>{const m=Wa[d]??Os[d];m&&h.add(m)}),o.smooth&&h.add("smooth-scroll"),o.cursor&&h.add("cursor-dot");for(const[d,m]of Object.entries(id)){const x=d.match(/effects\/([^/]+)\/(.+)$/);!x||!h.has(x[1])||x[2].endsWith(".jsx")||(t[`effects/${x[1]}/${x[2]}`]=m)}if(!n.single&&t["assets/site.css"]){const d=[...h].filter(m=>m!=="_core").map(m=>id[`../../../effects/${m}/style.css`]).filter(Boolean).join(`

`);d&&(t["assets/site.css"]+=`

/* ── 효과 팩 스타일 ── */
${d}`)}}return Object.assign(t,l,c.binaries),t["README.md"]=m8(e,[...h],n),{files:t,usedFolders:[...h]}}function m8(e,r,n){const t=e.pages.map((a,o)=>`- \`${si(a.name,o)}.html\` — ${a.name}`).join(`
`);return`# ${ho(e.site,e.pages)}

Portfolio Maker로 만든 정적 사이트입니다. **빌드 도구가 필요 없습니다.**

## 열기

ES 모듈은 \`file://\`에서 브라우저가 차단합니다. 반드시 서버로 열어야 합니다.

\`\`\`bash
python -m http.server 5500
\`\`\`

→ <http://localhost:5500/index.html>

${n.withEffects?"":"3D 효과 없이 내보냈으므로 `index.html`을 더블클릭해도 열립니다.\n"}
## 페이지

${t}

## 구조

\`\`\`
${n.single?"index.html            스타일이 안에 들어 있습니다":`index.html 등        페이지마다 한 장
assets/site.css      레이아웃 · 테마 · 파트 스타일
${n.withEffects?`assets/init.js       3D 효과 마운트
effects/             효과 팩 (`+r.join(" · ")+")":""}`}
\`\`\`

## 고치는 법

- **글·구조** — HTML을 직접 고치세요. 의미 태그(\`header\`/\`nav\`/\`main\`/\`section\`/\`footer\`)로 나가 있습니다.
- **색·폰트** — 각 페이지 \`.wf-page\`의 인라인 CSS 변수(\`--wf-accent\` 등)를 바꾸면 전체에 적용됩니다.
- **3D 효과** — HTML의 \`data-fx\` / \`data-fx-*\` 속성이 곧 옵션입니다. 지우면 효과가 사라집니다.

## GitHub Pages 배포

리포지터리에 그대로 올리고 Settings → Pages에서 브랜치를 지정하면 됩니다.
경로 설정이 따로 필요 없습니다(상대 경로만 씁니다).
`}const ud=new TextEncoder,h8=(()=>{const e=new Uint32Array(256);for(let r=0;r<256;r++){let n=r;for(let t=0;t<8;t++)n=n&1?3988292384^n>>>1:n>>>1;e[r]=n>>>0}return e})();function g8(e){let r=4294967295;for(let n=0;n<e.length;n++)r=h8[(r^e[n])&255]^r>>>8;return(r^4294967295)>>>0}class x8{constructor(){this.parts=[],this.length=0}push(r){this.parts.push(r),this.length+=r.length}u16(r){this.push(new Uint8Array([r&255,r>>>8&255]))}u32(r){this.push(new Uint8Array([r&255,r>>>8&255,r>>>16&255,r>>>24&255]))}}function w8(e){const r=new x8,n=[];for(const[a,o]of Object.entries(e)){const s=ud.encode(a),l=typeof o=="string"?ud.encode(o):o,c=g8(l),u=r.length;r.u32(67324752),r.u16(20),r.u16(2048),r.u16(0),r.u16(0),r.u16(0),r.u32(c),r.u32(l.length),r.u32(l.length),r.u16(s.length),r.u16(0),r.push(s),r.push(l),n.push({name:s,crc:c,size:l.length,offset:u})}const t=r.length;for(const a of n)r.u32(33639248),r.u16(20),r.u16(20),r.u16(2048),r.u16(0),r.u16(0),r.u16(0),r.u32(a.crc),r.u32(a.size),r.u32(a.size),r.u16(a.name.length),r.u16(0),r.u16(0),r.u16(0),r.u16(0),r.u32(0),r.u32(a.offset),r.push(a.name);return r.u32(101010256),r.u16(0),r.u16(0),r.u16(n.length),r.u16(n.length),r.u32(r.length-t),r.u32(t),r.u16(0),new Blob(r.parts,{type:"application/zip"})}function pd(e,r){const n=document.createElement("a");n.href=URL.createObjectURL(e),n.download=r,n.click(),setTimeout(()=>URL.revokeObjectURL(n.href),1e3)}const md=e=>e<1024?`${e}B`:e<1024*1024?`${(e/1024).toFixed(1)}KB`:`${(e/1048576).toFixed(2)}MB`,b8=e=>((e==null?void 0:e.pages)??[]).some(r=>Object.values(r.fx??{}).some(n=>n==null?void 0:n.length)||Object.values(r.fills??{}).some(n=>n==="model"));function v8({doc:e,advanced:r=!1,onClose:n}){var y,S;const t=b8(e),[a,o]=L.useState(t?"zip":"single"),[s,l]=L.useState(t),[c,u]=L.useState(!0),h=Math.max(0,e.pages.findIndex(w=>w.id===e.current)),f=`${si((y=e.pages[h])==null?void 0:y.name,h)}.html`,[p,k]=L.useState(f),_=a==="single",[j,C]=L.useState(null);L.useEffect(()=>{let w=!0;return C(null),p8(e,{single:_,withEffects:_?!1:s,borders:c}).then(v=>{w&&C(v)}),()=>{w=!1}},[e,_,s,c]);const b=j?Object.entries(j.files):[],d=b.reduce((w,[,v])=>w+(typeof v=="string"?new Blob([v]).size:v.length),0),m=(((S=e.pages[0])==null?void 0:S.name)||"portfolio").toLowerCase().replace(/\s+/g,"-"),x=()=>{if(j){if(_){const w=Object.entries(j.files).filter(([v])=>v.endsWith(".html"));w.forEach(([v,g],E)=>{setTimeout(()=>{const N=w.length===1?`${m}.html`:v;pd(new Blob([g],{type:"text/html"}),N)},E*250)});return}pd(w8(j.files),`${m}.zip`)}};return L.useEffect(()=>{j&&!j.files[p]&&k("index.html")},[j,p]),i.jsx("div",{className:"pb-modal",onClick:w=>w.target===w.currentTarget&&n(),children:i.jsxs("div",{className:"pb-modal__box",children:[i.jsxs("div",{className:"pb-modal__head",children:[i.jsx("b",{children:"내보내기"}),i.jsxs("span",{className:"pb-hint",children:[b.length,"개 파일 · ",md(d)]}),i.jsxs("span",{className:"pb-modal__tools",children:[i.jsx("button",{className:"is-on",onClick:x,children:j?_?"HTML 내려받기":"ZIP 내려받기":"만드는 중…"}),i.jsx("button",{onClick:n,children:"닫기"})]})]}),i.jsxs("div",{className:"pb-exp",children:[i.jsxs("div",{className:"pb-exp__side",children:[i.jsxs("div",{className:"pb-exp__modes",children:[i.jsxs("button",{className:`pb-exp__mode ${_?"is-on":""}`,onClick:()=>o("single"),children:[i.jsx("b",{children:"단일 HTML"}),i.jsxs("span",{children:["파일 하나 · 더블클릭으로 열림",r?" · 3D 제외":""]})]}),i.jsxs("button",{className:`pb-exp__mode ${a==="zip"?"is-on":""}`,onClick:()=>o("zip"),children:[i.jsx("b",{children:"폴더 ZIP"}),i.jsx("span",{children:r?"3D 효과 포함 · 서버로 열기":"배포용 · 파일이 나뉘어 나옴"})]})]}),i.jsxs("label",{className:"pb-field pb-field--row",children:[i.jsx("span",{className:"pb-field__label",children:"영역 테두리 그리기"}),i.jsx("input",{type:"checkbox",checked:c,onChange:w=>u(w.target.checked)})]}),i.jsx("p",{className:"pb-note",children:"칸을 나누는 선입니다. 끄면 내용만 남아 더 깔끔하고, 켜면 편집 화면과 똑같이 나갑니다."}),!_&&r&&i.jsxs("label",{className:"pb-field pb-field--row",children:[i.jsx("span",{className:"pb-field__label",children:"3D 효과 포함"}),i.jsx("input",{type:"checkbox",checked:s,onChange:w=>l(w.target.checked)})]}),!_&&r&&s&&(j==null?void 0:j.usedFolders.length)>0&&i.jsxs("p",{className:"pb-note",children:["담기는 효과 폴더: ",i.jsx("b",{children:j.usedFolders.join(" · ")})]}),_&&i.jsxs("p",{className:"pb-note pb-note--dashed",children:["파일 하나에 스타일까지 전부 들어갑니다. 받아서 ",i.jsx("b",{children:"더블클릭하면 바로 열립니다."}),r&&" 단 3D 효과는 file://에서 차단되므로 빠집니다."]}),h!==0&&i.jsxs("p",{className:"pb-note",children:["방문자가 처음 보는 화면은 ",i.jsx("b",{children:e.pages[0].name}),"(",i.jsx("code",{children:"index.html"}),")입니다. 지금 편집 중인 ",i.jsx("b",{children:e.pages[h].name}),"은 메뉴에서 들어가는 페이지입니다."]}),i.jsx("div",{className:"pb-exp__files",children:b.map(([w,v])=>i.jsxs("button",{className:`pb-exp__file ${p===w?"is-on":""}`,onClick:()=>k(w),children:[i.jsxs("span",{children:[w,w===f&&i.jsx("b",{className:"pb-exp__here",children:" 편집 중"})]}),i.jsx("em",{children:md(typeof v=="string"?new Blob([v]).size:v.length)})]},w))}),i.jsx(ua,{id:"exportModalLeft",className:"pb-adslot--expside"})]}),i.jsxs("pre",{className:"pb-code pb-exp__preview",children:[!j&&i.jsx("span",{className:"pb-loadbar","aria-hidden":"true"}),j?typeof j.files[p??"index.html"]=="string"?j.files[p??"index.html"]:"(이미지 파일 — 미리보기 없음)":"만드는 중…"]}),i.jsx(ua,{id:"exportModal",className:"pb-exp__ad"})]})]})})}function y8(){const[e,r]=L.useState(null);return L.useEffect(()=>{let n=!0;return fetch("/stats.json",{cache:"no-store"}).then(t=>t.ok?t.json():null).then(t=>{n&&t&&(typeof t.daily=="number"||typeof t.total=="number")&&r(t)}).catch(()=>{}),()=>{n=!1}},[]),e?i.jsxs("span",{className:"pb-visits",title:"Google Analytics 기준 · 3시간마다 갱신",children:["오늘 접속자 ",i.jsx("b",{children:(e.daily??0).toLocaleString("ko-KR")}),i.jsx("i",{children:" · "}),"총 누적 ",i.jsx("b",{children:(e.total??0).toLocaleString("ko-KR")})]}):null}function _8({global:e,onStart:r,onSkip:n}){const[t,a]=L.useState(""),[o,s]=L.useState(""),l=c=>r({templateId:c,name:t.trim(),role:o.trim()});return i.jsx("div",{className:"pb-welcome",children:i.jsxs("div",{className:"pb-welcome__box",children:[i.jsxs("div",{className:"pb-welcome__head",children:[i.jsxs("h1",{children:[i.jsx("span",{className:"pb-welcome__mark","aria-hidden":"true"}),"포트폴리오 사이트 만들기"]}),i.jsx("p",{children:"이름을 넣고 마음에 드는 틀을 고르세요. 구조와 색은 나중에 언제든 바꿉니다."})]}),i.jsxs("div",{className:"pb-welcome__who",children:[i.jsxs("label",{className:"pb-field",children:[i.jsx("span",{className:"pb-field__label",children:"이름"}),i.jsx("input",{autoFocus:!0,type:"text",value:t,placeholder:"홍길동",onChange:c=>a(c.target.value)})]}),i.jsxs("label",{className:"pb-field",children:[i.jsx("span",{className:"pb-field__label",children:"한 줄 소개 · 직함"}),i.jsx("input",{type:"text",value:o,placeholder:"프론트엔드 개발자",onChange:c=>s(c.target.value)})]})]}),i.jsxs("div",{className:"pb-welcome__label",children:["틀 고르기 ",i.jsxs("span",{children:[ra.length,"가지"]})]}),i.jsx("div",{className:"pb-welcome__grid",children:ra.map(c=>i.jsxs("button",{className:"pb-welcome__tpl",onClick:()=>l(c.id),title:c.desc,children:[i.jsx("span",{className:"pb-welcome__preview",children:i.jsx(Fs,{page:{wireframe:c.id,fills:c.fills,extra:[]},global:e,mini:!0})}),i.jsx("b",{children:c.label}),i.jsx("span",{className:"pb-welcome__tagline",children:c.tagline})]},c.id))}),i.jsxs("div",{className:"pb-welcome__foot",children:[i.jsx("button",{className:"pb-welcome__skip",onClick:n,children:"빈 페이지로 시작하기"}),i.jsxs("span",{className:"pb-hint",children:["틀은 왼쪽 ",i.jsx("b",{children:"① 틀"})," 단계에서 언제든 다시 고를 수 있습니다."]}),i.jsx("a",{className:"pb-welcome__guide",href:"./guide/how-to.html",target:"_blank",rel:"noopener noreferrer",children:"처음이신가요? 단계별 사용 가이드 ↗"}),i.jsx("button",{className:"pb-welcome__go",onClick:()=>l(ra[0].id),children:"기본으로 시작하기"}),i.jsxs("span",{className:"pb-welcome__legal",children:[i.jsx("a",{href:"./about.html",target:"_blank",rel:"noopener noreferrer",children:"소개"})," · ",i.jsx("a",{href:"./privacy.html",target:"_blank",rel:"noopener noreferrer",children:"개인정보처리방침"})," · ",i.jsx("a",{href:"./terms.html",target:"_blank",rel:"noopener noreferrer",children:"이용약관"})," · ",i.jsx("a",{href:"./contact.html",target:"_blank",rel:"noopener noreferrer",children:"문의"})]})]})]})})}const hd=[{id:"01-studio-nocturne",name:"스튜디오 녹턴",kind:"사진 · 디자인 스튜디오",tags:"미드나잇 · 비대칭 밴드 · 3D 카메라",color:"#0b0b12",proj:"studio-nocturne.pbproj",size:4.3},{id:"02-atelier-mono",name:"아틀리에 모노",kind:"그래픽 · 편집 디자인",tags:"크림 · 여러 페이지 · 3D 의자",color:"#fffbeb",proj:"atelier-mono.pbproj",size:3.7},{id:"03-halcyon-lab",name:"핼시온 랩",kind:"인터랙티브 · 제너러티브",tags:"모카 · 히어로+4분할 · 3D 현미경",color:"#f5efe8",proj:"halcyon-lab.pbproj",size:4.4},{id:"04-hwalja-bam",name:"활자밤",kind:"독립출판 · 활판인쇄",tags:"한 페이지 · 섹션 메뉴 · 3D 영사기",color:"#170609",proj:"hwalja-bam.pbproj",size:4.9},{id:"05-tide-and-timber",name:"타이드 앤 팀버",kind:"필드 레코딩 · 사운드 디자인",tags:"슬레이트 · 빈 뼈대에서 벤토 · 3D 공중전화",color:"#0f172a",proj:"tide-and-timber.pbproj",size:5.3},{id:"06-fern-and-form",name:"펀 앤 폼",kind:"도예 · 식물 스튜디오",tags:"세이지 · 매거진 3단 · 3D 고사리",color:"#f2f6ec",proj:"fern-and-form.pbproj",size:3.9},{id:"07-plum-and-pitch",name:"플럼 앤 피치",kind:"조향 스튜디오",tags:"아틱 · 여러 페이지 · 3D 황동 화병",color:"#f0f6ff",proj:"plum-and-pitch.pbproj",size:4.3},{id:"08-millisecond-works",name:"밀리세컨드 웍스",kind:"웹 · 앱 개발 스튜디오",tags:"카본 · Geist · 지표 중심 사례 · 3D 노트북",color:"#0a0a0a",proj:"millisecond-works.pbproj",size:3.6},{id:"09-first-commit",name:"퍼스트 커밋",kind:"신입 프론트엔드 개발자",tags:"오션 · 3단 분할 · 막혔던 지점까지 기록",color:"#051220",proj:"first-commit.pbproj",size:4.3},{id:"10-quiet-server",name:"콰이엇 서버",kind:"신입 백엔드 · 안드로이드",tags:"포레스트 · 레이어 히어로 · 장애를 일부러 낸 기록",color:"#071108",proj:"quiet-server.pbproj",size:3.2},{id:"14-open-to-work",name:"오픈 투 워크",kind:"신입 풀스택 개발자",tags:"페이퍼 · 디지털 명함 앞뒤 뒤집기 · 기술 배지",color:"#f5f4ef",proj:"open-to-work.pbproj",size:.3},{id:"14-paper-trail",name:"페이퍼 트레일",kind:"신입 백엔드 개발자 (국내 취준)",tags:"기술 배지 · 증빙 중심 · 막혔던 지점 3건",color:"#f7f6f3",proj:"paper-trail.pbproj",size:.2},{id:"15-fewer-better",name:"퓨어 베터",kind:"경력 프론트엔드 (해외·외국계 지원)",tags:"영문 · 왼쪽 고정 레일 · 프로젝트 4개만",color:"#ffffff",proj:"fewer-better.pbproj",size:.2},{id:"16-margin-notes",name:"마진 노트",kind:"시니어 · 오픈소스 메인테이너 (글쓰기 중심)",tags:"사진 0장 · 세리프 · 프로젝트 섹션 없음",color:"#f6f4ff",proj:"margin-notes.pbproj",size:0},{id:"17-loud-pixels",name:"라우드 픽셀",kind:"인터랙션 개발자 (크리에이티브 프론트)",tags:"직접 만든 3D 매듭 · 실크 배경 · 효과 10종",color:"#0a0f0a",proj:"loud-pixels.pbproj",size:.4},{id:"18-blast-radius",name:"블래스트 레이디어스",kind:"SRE · 플랫폼 엔지니어 (인프라)",tags:"대시보드 격자 · 모노스페이스 · 장애 회고 중심",color:"#140a06",proj:"blast-radius.pbproj",size:.2}],Jp="https://portfoliomaker-samples.github.io",k8=[{id:"01-studio-nocturne",name:"스튜디오 녹턴",kind:"사진 · 디자인 스튜디오",tags:"미드나잇 · 비대칭 밴드 · 3D 카메라",color:"#0f1216",proj:"studio-nocturne.pbproj",size:6.8},{id:"02-atelier-mono",name:"아틀리에 모노",kind:"그래픽 · 편집 디자인",tags:"크림 · 여러 페이지 · 3D 의자",color:"#f4efe4",proj:"atelier-mono.pbproj",size:5.6},{id:"03-halcyon-lab",name:"핼시온 랩",kind:"인터랙티브 · 제너러티브",tags:"모카 · 히어로+4분할 · 3D 현미경",color:"#2b211b",proj:"halcyon-lab.pbproj",size:6.8},{id:"04-hwalja-bam",name:"활자밤",kind:"독립출판 · 활판인쇄",tags:"한 페이지 · 섹션 메뉴 · 3D 영사기",color:"#1a1714",proj:"hwalja-bam.pbproj",size:7.8}],e2=hd.length?hd:k8,as=4,j8=()=>Math.max(1,Math.ceil(e2.length/as)),S8=e=>e2.slice(e*as,e*as+as),C8="https://github.com/PORTFOLIOMAKER-SAMPLES",gd=e=>`${Jp}/${e.id}/`,E8=e=>`${Jp}/${e.id}/${e.proj}`,N8=e=>{const r=parseInt(String(e).replace("#",""),16);if(Number.isNaN(r))return!1;const[n,t,a]=[r>>16&255,r>>8&255,r&255];return(.2126*n+.7152*t+.0722*a)/255>.6};function z8({onStart:e,onOpenSample:r,busy:n}){const[t,a]=L.useState(null),[o,s]=L.useState(!1),l=L.useRef(0),c=()=>{clearTimeout(l.current),l.current=setTimeout(()=>s(!0),500)},u=d=>{clearTimeout(l.current),a(d),s(!1)},h=d=>{clearTimeout(l.current),a(m=>m===d?null:m),s(!1)},[f,p]=L.useState(!1),[k,_]=L.useState(0),j=j8(),C=S8(k),b=d=>{clearTimeout(l.current),a(null),s(!1),_(m=>(d+j)%j)};return i.jsx("div",{className:"pb-welcome pb-samples",role:"dialog","aria-modal":"true","aria-label":"예시 사이트",children:i.jsxs("div",{className:"pb-welcome__box pb-samples__box",children:[i.jsxs("div",{className:"pb-samples__head",children:[i.jsxs("h1",{children:[i.jsx("span",{className:"pb-samples__mark","aria-hidden":"true"}),"Portfolio ",i.jsx("i",{children:"Maker"})]}),i.jsxs("p",{children:["코딩 없이 만드는 포트폴리오. ",i.jsx("b",{children:"파일로 받아서 내 마음대로."})]}),i.jsxs("ul",{className:"pb-samples__pts",children:[i.jsx("li",{children:"가입 없음"}),i.jsx("li",{children:"결과물에 광고 없음"}),i.jsx("li",{children:"작업물은 내 브라우저에"})]})]}),i.jsxs("div",{className:"pb-samples__label",children:["이런 사이트가 나옵니다",i.jsx("a",{className:"pb-samples__more",href:C8,target:"_blank",rel:"noopener noreferrer",children:"예시 더 보기 ↗"})]}),i.jsxs("div",{className:"pb-samples__grid",children:[C.map(d=>i.jsxs("div",{className:"pb-samples__card",onMouseEnter:()=>u(d.id),onMouseLeave:()=>h(d.id),children:[i.jsxs("div",{className:`pb-samples__shot ${N8(d.color)?"is-light":""}`,style:{background:d.color},children:[i.jsx("span",{className:`pb-samples__ph ${t===d.id&&o?"is-gone":""}`,children:d.name}),t===d.id&&i.jsx("iframe",{className:"pb-samples__frame",src:gd(d),title:`${d.name} 미리보기`,loading:"lazy",tabIndex:-1,sandbox:"allow-scripts allow-same-origin",onLoad:c})]}),i.jsxs("b",{className:"pb-samples__name",children:[d.name,i.jsx("span",{className:"pb-samples__kind",children:d.kind})]}),i.jsx("span",{className:"pb-samples__tags",children:d.tags}),i.jsxs("div",{className:"pb-samples__acts",children:[i.jsx("a",{className:"pb-samples__open",href:gd(d),target:"_blank",rel:"noopener noreferrer",children:"사이트 보기 ↗"}),i.jsx("button",{className:"pb-samples__use",disabled:!!n,onClick:()=>r(d),children:n===d.id?"여는 중…":d.size?`이걸로 시작 (${d.size}MB)`:"이걸로 시작"})]})]},`${k}-${d.id}`)),Array.from({length:Math.max(0,4-C.length)},(d,m)=>i.jsx("div",{className:"pb-samples__gap","aria-hidden":"true"},`gap-${m}`))]}),i.jsxs("div",{className:"pb-samples__foot",children:[j>1&&i.jsxs("div",{className:"pb-samples__pager",children:[i.jsx("button",{type:"button",onClick:()=>b(k-1),"aria-label":"이전 예시",children:"‹"}),i.jsxs("span",{children:[k+1," / ",j]}),i.jsx("button",{type:"button",onClick:()=>b(k+1),"aria-label":"다음 예시",children:"›"})]}),i.jsxs("label",{className:"pb-samples__skip",children:[i.jsx("input",{type:"checkbox",checked:f,onChange:d=>p(d.target.checked)}),"다시 보지 않기"]}),i.jsx("button",{className:"pb-samples__go",disabled:!!n,onClick:()=>e(f),children:"빈 화면에서 바로 시작하기 →"})]})]})})}const r2="portfolio-builder/project",M8=1;async function L8(e,r=""){const n={};for(const t of Wc(e)){const a=await Uu(t);a&&(n[t]=a)}return JSON.stringify({format:r2,version:M8,name:r,savedAt:new Date().toISOString(),doc:e,assets:n})}async function n2(e){var n,t;let r;try{r=JSON.parse(e)}catch{throw new Error("이 파일은 프로젝트 파일이 아닙니다.")}if((r==null?void 0:r.format)!==r2||!((t=(n=r==null?void 0:r.doc)==null?void 0:n.pages)!=null&&t.length))throw new Error("이 파일은 이 빌더가 만든 프로젝트 파일이 아닙니다.");for(const[a,o]of Object.entries(r.assets??{}))if(/^(data:|blob:)/i.test(String(o)))try{const s=await(await fetch(o)).blob();await Hc(a,s)}catch{}return r.doc}function $8(e,r){const n=(r||"portfolio").trim().replace(/[\\/:*?"<>|]+/g,"-").slice(0,40)||"portfolio",t=document.createElement("a");t.href=URL.createObjectURL(new Blob([e],{type:"application/json"})),t.download=`${n}.pbproj`,t.click(),setTimeout(()=>URL.revokeObjectURL(t.href),1e3)}const t2=(e,r)=>d4(`${co}${e}`,{name:e,savedAt:new Date().toISOString(),doc:r}),R8=async e=>{var r;return((r=await Vu(`${co}${e}`))==null?void 0:r.doc)??null},a2=e=>f4(`${co}${e}`);async function o2(){var n,t;const e=await u4()??[],r=[];for(const a of e){if(typeof a!="string"||!a.startsWith(co))continue;const o=await Vu(a);r.push({name:a.slice(co.length),savedAt:(o==null?void 0:o.savedAt)??"",pages:((t=(n=o==null?void 0:o.doc)==null?void 0:n.pages)==null?void 0:t.length)??0})}return r.sort((a,o)=>String(o.savedAt).localeCompare(String(a.savedAt)))}const e0="snap:";async function T8(){return(await o2()).filter(e=>!e.name.startsWith(e0))}async function A8(e,r=8){await t2(`${e0}${Date.now()}`,e);const n=await s2();for(const t of n.slice(r))await a2(t.name)}async function s2(){return(await o2()).filter(e=>e.name.startsWith(e0))}function D8({doc:e,onLoad:r,onClose:n}){const t=ho(e.site,e.pages),[a,o]=L.useState(t),[s,l]=L.useState([]),[c,u]=L.useState([]),[h,f]=L.useState(""),[p,k]=L.useState(""),[_,j]=L.useState(""),C=5,[b,d]=L.useState(0),m=Math.max(1,Math.ceil(c.length/C)),x=Math.min(b,m-1),y=c.slice(x*C,(x+1)*C),S=()=>{T8().then(l),s2().then(u)};L.useEffect(()=>{S()},[]);const w=$=>{k($),j("")},v=$=>{j(($==null?void 0:$.message)??"실패했습니다."),k("")},g=async()=>{const $=a.trim();if(!$)return v(new Error("이름을 적어 주세요."));f("slot");try{await t2($,e),await S(),w(`'${$}'으로 저장했습니다.`)}catch(P){v(P)}finally{f("")}},E=async()=>{f("file");try{$8(await L8(e,a.trim()),a.trim()||t),w("파일로 내려받았습니다. 사진까지 함께 담겨 있습니다.")}catch($){v($)}finally{f("")}},N=()=>ut({title:"지금 작업을 덮어씁니다",body:"불러온 내용으로 바뀝니다. 되돌리기로 다시 살릴 수 있습니다.",ok:"불러오기"}),M=async $=>{if(await N()){f("load");try{const P=await R8($);if(!P)throw new Error("저장본을 찾을 수 없습니다.");r(P),n()}catch(P){v(P)}finally{f("")}}},T=async $=>{if($&&await N()){f("load");try{r(await n2(await $.text())),n()}catch(P){v(P)}finally{f("")}}};return i.jsx("div",{className:"pb-modal",onClick:$=>$.target===$.currentTarget&&n(),children:i.jsxs("div",{className:"pb-modal__box pb-proj",children:[i.jsxs("div",{className:"pb-modal__head",children:[i.jsx("b",{children:"저장 · 불러오기"}),i.jsx("span",{className:"pb-hint",children:"이 컴퓨터에 여러 개 · 파일로 한 덩어리"}),i.jsx("span",{className:"pb-modal__tools",children:i.jsx("button",{onClick:n,children:"닫기"})})]}),i.jsxs("div",{className:"pb-proj__body",children:[i.jsxs("label",{className:"pb-field",children:[i.jsx("span",{className:"pb-field__label",children:"저장 이름"}),i.jsx("input",{type:"text",value:a,onChange:$=>o($.target.value),placeholder:t})]}),i.jsxs("div",{className:"pb-proj__row",children:[i.jsx("button",{onClick:g,disabled:!!h,children:h==="slot"?"저장 중…":"이 컴퓨터에 저장"}),i.jsx("button",{onClick:E,disabled:!!h,children:h==="file"?"만드는 중…":"파일로 저장 (.pbproj)"}),i.jsxs("label",{className:"pb-proj__open",children:[h==="load"?"불러오는 중…":"파일에서 불러오기",i.jsx("input",{type:"file",accept:".pbproj,application/json",hidden:!0,onChange:$=>{var P;T((P=$.target.files)==null?void 0:P[0]),$.target.value=""}})]})]}),p&&i.jsx("p",{className:"pb-note",children:p}),_&&i.jsx("p",{className:"pb-note pb-note--warn",children:_}),i.jsxs("div",{className:"pb-panel__title",children:["이 컴퓨터에 저장된 것",i.jsxs("span",{className:"pb-hint",children:[s.length,"개"]})]}),s.length===0?i.jsx("p",{className:"pb-note pb-note--dashed",children:"아직 없습니다. 위에서 이름을 적고 저장해 보세요."}):i.jsx("div",{className:"pb-slots",children:s.map($=>i.jsxs("div",{className:"pb-slot",children:[i.jsxs("span",{className:"pb-slot__meta",children:[i.jsx("b",{children:$.name}),i.jsxs("span",{children:[$.pages,"장 · ",$.savedAt?$.savedAt.slice(0,16).replace("T"," "):""]})]}),i.jsx("button",{onClick:()=>M($.name),disabled:!!h,children:"불러오기"}),i.jsx("button",{className:"pb-danger",disabled:!!h,onClick:async()=>{await ut({title:`'${$.name}' 저장본을 지울까요?`,ok:"지우기",danger:!0})&&(await a2($.name),S())},children:"✕"})]},$.name))}),i.jsxs("p",{className:"pb-note",children:[i.jsx("b",{children:"이 컴퓨터에 저장"}),"은 빠르지만 이 브라우저에만 남습니다. 다른 PC에서 이어서 하려면 ",i.jsx("b",{children:"파일로 저장"}),"을 쓰세요 — 사진까지 함께 담깁니다."]}),i.jsxs("div",{className:"pb-panel__title",children:["자동 스냅샷",i.jsxs("span",{className:"pb-hint",children:["20번 고칠 때마다 · 최근 ",c.length,"개"]})]}),c.length===0?i.jsx("p",{className:"pb-note pb-note--dashed",children:"아직 없습니다. 작업을 이어가면 자동으로 쌓입니다 — 실수해도 여기서 돌아올 수 있습니다."}):i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"pb-slots",children:y.map($=>i.jsxs("div",{className:"pb-slot",children:[i.jsxs("span",{className:"pb-slot__meta",children:[i.jsx("b",{children:$.savedAt?$.savedAt.slice(5,16).replace("T"," "):"스냅샷"}),i.jsxs("span",{children:[$.pages,"장 · 자동 저장본"]})]}),i.jsx("button",{onClick:()=>M($.name),disabled:!!h,children:"이 시점으로"})]},$.name))}),m>1&&i.jsxs("div",{className:"pb-pager",children:[i.jsx("button",{disabled:x===0,onClick:()=>d(x-1),"aria-label":"이전 스냅샷",children:"←"}),i.jsxs("span",{className:"pb-pager__num",children:[x+1," / ",m]}),i.jsx("button",{disabled:x===m-1,onClick:()=>d(x+1),"aria-label":"다음 스냅샷",children:"→"})]})]}),i.jsx(ua,{id:"saveModal",className:"pb-adslot--save"})]})]})})}const P8={desktop:"M3 5h18v11H3zM8 20h8M12 16v4",tablet:"M6 3h12v18H6zM11 18h2",mobile:"M8 2h8v20H8zM11 19h2",sun:"M12 5V3M12 21v-2M5 12H3M21 12h-2M6.3 6.3 4.9 4.9M19.1 19.1l-1.4-1.4M17.7 6.3l1.4-1.4M4.9 19.1l1.4-1.4",moon:"M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z",sparkle:"M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM18.5 15.5l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z",wand:"M15 4l5 5L9 20H4v-5zM13 6l5 5",undo:"M9 7 4 12l5 5M4 12h10a6 6 0 0 1 0 12h-3",redo:"M15 7l5 5-5 5M20 12H10a6 6 0 0 0 0 12h3",eye:"M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",pencil:"M4 20h4L20 8l-4-4L4 16zM14 6l4 4",save:"M5 3h11l3 3v15H5zM8 3v6h8V3M8 14h8v7H8z",download:"M12 3v12M7 11l5 5 5-5M4 20h16",trash:"M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 11v6M14 11v6",panelLeft:"M3 4h18v16H3zM9 4v16",panelRight:"M3 4h18v16H3zM15 4v16"};function Dr({name:e,size:r=15}){const n=P8[e];return n?i.jsx("svg",{className:"pb-icon",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:i.jsx("path",{d:n})}):null}function F8(e,r){if(r===0)return"home";const n=String(e??"").trim().toLowerCase();return/work|project|작업|프로젝트|포트폴리오/.test(n)?"work":/about|소개|프로필|이력/.test(n)?"about":/contact|연락|문의/.test(n)?"contact":null}const O8={work:{parts:{b:"gallery",c:"section",d:"footer"},content:e=>({b:{title:"Work",columns:3,ratio:.72},c:{title:"쓰는 도구",body:"",listStyle:"tags",items:[{label:"HTML · CSS",note:""},{label:"JavaScript",note:""},{label:"Figma",note:""}]},d:Pi(e)})},about:{parts:{b:"section",c:"section",d:"footer"},content:e=>({b:{title:"About",body:e.name?`${e.name}입니다.
${e.role||"무엇을 어떻게 만드는 사람인지"} 두어 문장으로 적어 주세요.`:"어떤 사람인지 두어 문장으로 적어 주세요."},c:{title:"Career",body:"",listStyle:"timeline",items:[{label:"○○ 인턴 · 프론트엔드",note:"2026"},{label:"○○ 대학교 · 시각디자인",note:"2022 — 2026"}]},d:Pi(e)})},contact:{parts:{b:"contact",c:"links",d:"footer"},content:e=>({b:{title:"Contact",body:`함께 만들고 싶은 것이 있다면 메일로 연락 주세요.
보통 하루 안에 답장합니다.`,align:"center"},c:{title:"Links",style:"buttons",align:"center",items:[{label:"GitHub",url:"github.com/"},{label:"Instagram",url:"instagram.com/"},{label:"Email",url:e.email||""}]},d:Pi(e)})}},Pi=e=>({text:e.name?`© ${new Date().getFullYear()} ${e.name}`:`© ${new Date().getFullYear()}`});function B8(e,r,n={}){const t=O8[e];if(!t)return null;const a=r!=null&&r.partId&&r.partId!=="aside"?r.partId:"topheader",o=(r==null?void 0:r.partId)===a?{...r.content??{}}:{...Yt(a),...n.name?{logo:n.name}:{}},s={a,...t.parts},l=t.content(n),c={};for(const[u,h]of Object.entries(s))c[u]=u==="a"?o:{...Yt(h),...l[u]??{}};return{wireframe:"stack",fills:s,content:c,fx:{},extra:[],overrides:{}}}function q8(e,r){for(const[n,t]of Object.entries(e??{}))if(["topheader","header","nav","aside"].includes(t))return{partId:t,content:r==null?void 0:r[n]};return null}function I8({open:e,actions:r,onClose:n}){const[t,a]=L.useState(""),[o,s]=L.useState(0),l=L.useRef(null),c=L.useRef(null),u=L.useMemo(()=>{const p=t.trim().toLowerCase();return(p?r.filter(_=>`${_.group} ${_.label}`.toLowerCase().includes(p)):r).slice(0,40)},[t,r]);if(L.useEffect(()=>{e&&(a(""),s(0),setTimeout(()=>{var p;return(p=l.current)==null?void 0:p.focus()},0))},[e]),L.useEffect(()=>{s(0)},[t]),L.useEffect(()=>{var p,k;(k=(p=c.current)==null?void 0:p.querySelector(".is-cursor"))==null||k.scrollIntoView({block:"nearest"})},[o,u]),!e)return null;const h=p=>{n(),p.run()},f=p=>{p.key==="Escape"&&(p.stopPropagation(),n()),p.key==="ArrowDown"&&(p.preventDefault(),s(k=>Math.min(k+1,u.length-1))),p.key==="ArrowUp"&&(p.preventDefault(),s(k=>Math.max(k-1,0))),p.key==="Enter"&&u[o]&&(p.preventDefault(),h(u[o]))};return i.jsx("div",{className:"pb-modal pb-palette",onClick:p=>p.target===p.currentTarget&&n(),children:i.jsxs("div",{className:"pb-palette__box",role:"dialog","aria-modal":"true","aria-label":"명령 팔레트",children:[i.jsx("input",{ref:l,className:"pb-palette__input",placeholder:"무엇을 할까요? — 페이지 · 테마 · 글꼴 · 도구 검색",value:t,onChange:p=>a(p.target.value),onKeyDown:f}),i.jsxs("div",{className:"pb-palette__list",ref:c,role:"listbox",children:[u.length===0&&i.jsx("p",{className:"pb-note pb-note--dashed",children:"결과가 없습니다."}),u.map((p,k)=>i.jsxs("button",{className:`pb-palette__item ${k===o?"is-cursor":""}`,onMouseEnter:()=>s(k),onClick:()=>h(p),children:[i.jsx("span",{className:"pb-palette__group",children:p.group}),i.jsx("span",{className:"pb-palette__label",children:p.label}),p.hint&&i.jsx("em",{children:p.hint})]},`${p.group}-${p.label}`))]}),i.jsx("div",{className:"pb-palette__foot",children:i.jsx("span",{children:"↑↓ 이동 · Enter 실행 · Esc 닫기"})})]})})}function H8({open:e,onClose:r}){if(!e)return null;const n=[["Ctrl + K","명령 팔레트 — 페이지·테마·글꼴·도구 검색 실행"],["Ctrl + Z","되돌리기"],["Ctrl + Shift + Z","다시 실행"],["Shift + 영역 클릭","그 영역의 등장 효과 켜기 / 끄기"],["영역 우클릭","빠른 메뉴 (파트 비우기 · 등장 효과)"],["?","이 도움말"],["Esc","창 닫기"]];return i.jsx("div",{className:"pb-modal pb-help",onClick:t=>t.target===t.currentTarget&&r(),children:i.jsxs("div",{className:"pb-confirm__box",role:"dialog","aria-modal":"true","aria-label":"단축키 도움말",children:[i.jsx("b",{className:"pb-confirm__title",children:"단축키"}),i.jsx("table",{className:"pb-help__table",children:i.jsx("tbody",{children:n.map(([t,a])=>i.jsxs("tr",{children:[i.jsx("td",{children:i.jsx("span",{className:"kbd",children:t})}),i.jsx("td",{children:a})]},t))})}),i.jsx("div",{className:"pb-confirm__row",children:i.jsx("button",{className:"pb-confirm__ok",onClick:r,children:"닫기"})})]})})}let V8=0;const W8=()=>`p${(++V8).toString(36)}${Math.floor(performance.now()%1296).toString(36)}`;function Ra(e,r=R4){return{id:W8(),name:e,wireframe:r,fills:{},extra:[],overrides:{}}}function U8(){return[Ra("Home","stack"),Ra("Work","magazine"),Ra("About","sidebar-left"),Ra("Contact","stack")]}const G8=(e,r)=>e.find(n=>n.id===r)??e[0];function Ta(e,r,n){return e.map(t=>t.id===r?{...t,...n}:t)}function Y8(e,r,n){return Ta(e,r,{name:n.trim()||"이름 없음"})}function K8(e,r){return e.length<=1?e:e.filter(n=>n.id!==r)}function Q8(e,r,n){const t=e.findIndex(l=>l.id===r),a=t+n;if(t<0||a<0||a>=e.length)return e;const o=[...e],[s]=o.splice(t,1);return o.splice(a,0,s),o}const Ea="pb:welcome",Fi="pb:samples-seen",xd="pb:footad-hidden",wd=(e,r)=>{const n=new Set(cp(r));return n.size?e.filter(t=>!n.has(t.name)):e},Il=()=>{const e=U8();return{pages:e,current:e[0].id,theme:lg,typeset:Au,global:{...ip},site:{...jt}}};function X8(){const[e,r]=L.useState(null);return L.useEffect(()=>{let n=!0;return i4().then(t=>{var o,s;if(!n)return;const a=(o=t==null?void 0:t.pages)!=null&&o.length?{...Il(),...t,global:{...ip,...t.global??{}}}:Il();a.site={...jt,...a.site??{},background:{...jt.background,...((s=a.site)==null?void 0:s.background)??{}}};for(const l of a.pages)for(const[c,u]of Object.entries(l.fx??{})){if(!Array.isArray(u)||u.length<2)continue;const h=[];for(const f of u){const p=new Set(cp(f.name));h.some(k=>p.has(k.name))||h.push(f)}h.length!==u.length&&(l.fx[c]=h)}r(a),v4(a)}),()=>{n=!1}},[]),e?i.jsx(Z8,{initial:e}):i.jsx("div",{className:"pb-boot",children:"불러오는 중…"})}const Oi=720;function Z8({initial:e}){var n0,t0,a0,o0,s0,i0,l0,c0,d0;const[r,n]=L.useState(e),[t,a]=L.useState("saved"),[o,s]=L.useState(null),[l,c]=L.useState(()=>window.innerWidth<Oi?"mobile":"desktop"),[u,h]=L.useState(!1),[f,p]=L.useState(!0),[k,_]=L.useState(!1),[j,C]=L.useState(!1),[b,d]=L.useState(()=>localStorage.getItem(Ea)==="1"),[m,x]=L.useState(()=>localStorage.getItem(Fi)==="1"),[y,S]=L.useState(""),[w,v]=L.useState(!1),[g,E]=L.useState(()=>localStorage.getItem("pb:advanced")!=="0"),[N,M]=L.useState(()=>localStorage.getItem(xd)==="1");L.useEffect(()=>{document.querySelectorAll(".pb-iconbtn[data-tip]").forEach(z=>{z.setAttribute("aria-label",z.dataset.tip.split(" — ")[0])})}),L.useEffect(()=>{localStorage.setItem("pb:advanced",g?"1":"0")},[g]);const T=async()=>{const z=((r==null?void 0:r.pages)??[]).reduce((q,re)=>q+Object.values(re.fx??{}).reduce((ce,ue)=>ce+((ue==null?void 0:ue.length)??0),0),0);await ut({title:"부가 기능을 끌까요?",body:["3D 효과 · Character · 3D Model이 편집 화면에서 숨겨집니다.",z?`이미 걸어 둔 효과 ${z}개는 그대로 돌지만, 설정을 바꾸거나 지우려면 다시 켜야 합니다.`:"효과를 건 뒤 설정을 바꾸거나 지우려면 다시 켜야 합니다."].join(`
`),ok:"끄기",cancel:"그대로 두기",danger:!0})&&E(!1)},$=f,P=1240,[J,H]=L.useState(()=>window.innerWidth<P),[A,B]=L.useState(()=>window.innerWidth<Oi),[Q,pe]=L.useState(!1),[Z,je]=L.useState(()=>window.innerWidth>=P),[Se,X]=L.useState(()=>window.innerWidth>=P),ne=z=>{je(z),z&&A&&X(!1)},Ne=z=>{X(z),z&&A&&je(!1)};L.useEffect(()=>{let z=window.innerWidth<P;const R=()=>{const q=window.innerWidth<P;H(q),B(window.innerWidth<Oi),q!==z&&(je(!q),X(!q),z=q)};return window.addEventListener("resize",R),()=>window.removeEventListener("resize",R)},[]);const[Re,ae]=L.useState(()=>localStorage.getItem("pb:ui")??"light");L.useEffect(()=>{document.documentElement.dataset.ui=Re,localStorage.setItem("pb:ui",Re)},[Re]);const fe=L.useRef(0);L.useEffect(()=>{r&&(fe.current+=1,fe.current>=20&&(fe.current=0,A8(r).catch(()=>{})))},[r]);const[Me,W]=L.useState(!1),[ee,we]=L.useState(!1);L.useEffect(()=>{const z=R=>{var ce;if((R.ctrlKey||R.metaKey)&&R.key.toLowerCase()==="k"){R.preventDefault(),W(ue=>!ue);return}const q=R.target,re=(ce=q==null?void 0:q.closest)==null?void 0:ce.call(q,'input, textarea, select, [contenteditable="true"]');R.key==="?"&&!re&&(R.preventDefault(),we(ue=>!ue))};return window.addEventListener("keydown",z),()=>window.removeEventListener("keydown",z)},[]);const ge=L.useRef([]),xe=L.useRef([]),le=L.useCallback(z=>{n(R=>{const q=z(R);return q===R?R:(ge.current.push(R),ge.current.length>60&&ge.current.shift(),xe.current=[],q)})},[]),Te=L.useCallback(()=>{n(z=>{const R=ge.current.pop();return R?(xe.current.push(z),R):z})},[]),D=L.useCallback(()=>{n(z=>{const R=xe.current.pop();return R?(ge.current.push(z),R):z})},[]);L.useEffect(()=>{if(!r)return;a("saving");const z=setTimeout(()=>{Hu(r).then(R=>a(R?"saved":"failed"))},400);return()=>clearTimeout(z)},[r]),L.useEffect(()=>{const z=R=>{const q=/INPUT|TEXTAREA|SELECT/.test(R.target.tagName),re=R.ctrlKey||R.metaKey,ce=R.key.toLowerCase();re&&ce==="z"&&!q&&(R.preventDefault(),R.shiftKey?D():Te()),re&&ce==="y"&&!q&&(R.preventDefault(),D()),R.key==="Escape"&&s(null)};return window.addEventListener("keydown",z),()=>window.removeEventListener("keydown",z)},[Te,D]),L.useEffect(()=>{J&&o&&Ne(!0)},[J,o]);const O=G8(r.pages,r.current),se=z=>le(R=>({...R,pages:Ta(R.pages,R.current,z)})),F=(z,R,q,re)=>{var ce,ue;return!((ce=Ln[R])!=null&&ce.nav)||((ue=z.site)==null?void 0:ue.navSync)===!1?z:{...z,pages:z.pages.map(he=>{if(he.id===z.current)return he;const de=Object.keys(he.fills??{}).filter(ze=>he.fills[ze]===R);if(!de.length)return he;const _e={...he[q]??{}};for(const ze of de)_e[ze]=re(_e[ze]??{});return{...he,[q]:_e}})}},U=L.useCallback(z=>{n(R=>R.current===z?R:{...R,current:z}),s(null)},[]),me=()=>le(z=>{const R=Ra(`Page ${z.pages.length+1}`);return{...z,pages:[...z.pages,R],current:R.id}}),ye=z=>{le(R=>{const q=K8(R.pages,z);return{...R,pages:q,current:R.current===z?q[0].id:R.current}}),s(null)},[be,ke]=L.useState(!0),Ce=z=>{be?le(R=>({...R,pages:R.pages.map(q=>({...q,wireframe:z,fills:S1(q.fills??{},z,q.extra??[])}))})):se({wireframe:z,fills:S1(O.fills??{},z,O.extra??[])}),s(null)},ie=({templateId:z,name:R,role:q})=>{var ue;const re=z?_1(z):null,ce=he=>{const de=R||"",_e=q||"";if(!de&&!_e)return{};switch(he){case"topheader":case"header":return de?{logo:de}:{};case"aside":return{...de?{name:de}:{},..._e?{role:_e}:{}};case"hero":return de?{title:_e?`안녕하세요,
${_e} ${de}입니다`:`안녕하세요,
${de}입니다`}:{};case"footer":return de?{text:`© ${new Date().getFullYear()} ${de}`}:{};default:return{}}};if(re){const he={};for(const[He,Pe]of Object.entries(re.fills))he[He]={...Yt(Pe),...((ue=re.content)==null?void 0:ue[He])??{},...ce(Pe)};const de={};if(g)for(const[He,Pe]of Object.entries(re.fx??{}))de[He]=Pe.map(Ur=>({name:Ur.name,options:{...qo(Ur.name),...Ur.options??{}}}));const _e=q8(re.fills,he),ze={name:R||"",role:q||""};le(He=>({...He,pages:He.pages.map((Pe,Ur)=>{if(Object.keys(Pe.fills??{}).length)return Pe;const Mt=B8(F8(Pe.name,Ur),_e,ze);return Mt?{...Pe,...Mt}:{...Pe,wireframe:re.id,fills:{...re.fills},content:he,fx:de,extra:[],overrides:{}}})}))}le(he=>{var de,_e,ze;return{...he,site:{...he.site,navMode:((de=he.site)==null?void 0:de.navMode)??"anchor",...R?{title:(_e=he.site)!=null&&_e.title?he.site.title:`${R} 포트폴리오`,description:(ze=he.site)!=null&&ze.description?he.site.description:`${q?`${q} `:""}${R}의 포트폴리오입니다.`}:{}}}}),localStorage.setItem(Ea,"1"),d(!0)},De=z=>{z&&localStorage.setItem(Fi,"1"),x(!0)},te=async z=>{if(!(r.pages.some(q=>Object.keys(q.fills??{}).length)&&!await ut({title:"지금 작업을 덮어쓸까요?",body:`예시 「${z.name}」을 열면 지금 편집 중인 내용이 사라집니다. 되돌리기(Ctrl+Z)로 되살릴 수 있습니다.`,ok:"예시 열기"}))){S(z.id);try{const q=await fetch(E8(z));if(!q.ok)throw new Error(`예시를 받지 못했습니다 (${q.status})`);const re=await n2(await q.text());le(()=>re),s(null),localStorage.setItem(Ea,"1"),d(!0),v(!0)}catch(q){await ut({title:"예시를 열지 못했습니다",body:`${q.message}

인터넷 연결을 확인한 뒤 다시 시도해 주세요. 「사이트 보기」로 결과물만 먼저 보실 수도 있습니다.`,ok:"확인",cancel:null})}finally{S("")}}},$e=!w&&(new URLSearchParams(location.search).has("welcome")||!b&&r.pages.every(z=>!Object.keys(z.fills??{}).length)),Fe=z=>{var he,de;const R=_1(z);if(!R)return;const q={};for(const[_e,ze]of Object.entries(R.fills))q[_e]={...Yt(ze),...((he=R.content)==null?void 0:he[_e])??{}};const re={};if(g)for(const[_e,ze]of Object.entries(R.fx??{}))re[_e]=ze.map(He=>({name:He.name,options:{...qo(He.name),...He.options??{}}}));const ce=(_e,ze,He)=>{const Pe={..._e},Ur=Object.keys(ze).find(li=>ze[li]==="hero");if(Ur)return Pe[Ur]={...Pe[Ur],title:`${He} 페이지입니다`,sub:`상단 메뉴의 ${He}에서 들어오는 화면입니다. 내용을 채워 주세요.`},Pe;const Mt=Object.keys(ze).find(li=>ze[li]==="section");return Mt&&(Pe[Mt]={...Pe[Mt],title:`${He} 페이지입니다`}),Pe},ue=()=>({wireframe:z,fills:{...R.fills},content:Object.fromEntries(Object.entries(q).map(([_e,ze])=>[_e,{...ze}])),fx:Object.fromEntries(Object.entries(re).map(([_e,ze])=>[_e,ze.map(He=>({...He,options:{...He.options}}))])),extra:[],overrides:{}});if(be)le(_e=>({..._e,pages:_e.pages.map((ze,He)=>{const Pe=ue();return He>0&&(Pe.content=ce(Pe.content,Pe.fills,ze.name)),{...ze,...Pe}})}));else{const _e=ue();((de=r.pages[0])==null?void 0:de.id)===r.current||(_e.content=ce(_e.content,_e.fills,O.name)),se(_e)}s(null)},Xe=z=>{o&&se({fills:{...O.fills??{},[o]:z},content:{...O.content??{},[o]:Yt(z)}})},xr=z=>{if(!z)return;const R={...O.fills??{}},q={...O.content??{}},re={...O.fx??{}};delete R[z],delete q[z],delete re[z],se({fills:R,content:q,fx:re})},en=()=>{o&&xr(o)},rn=z=>{var q;const R=(q=O.fills)==null?void 0:q[o];le(re=>{var ce;return F({...re,pages:Ta(re.pages,re.current,{content:{...O.content??{},[o]:{...((ce=O.content)==null?void 0:ce[o])??{},...z}}})},R,"content",ue=>({...ue,...z}))})},nn=(z,R,q)=>{var ue;const re=he=>{if(R.length===1)return{...he,[R[0]]:q};const[de,_e,ze]=R,He=Array.isArray(he[de])?he[de]:[];return{...he,[de]:He.map((Pe,Ur)=>Ur===_e?{...Pe,[ze]:q}:Pe)}},ce=(ue=O.fills)==null?void 0:ue[z];le(he=>{var de;return F({...he,pages:Ta(he.pages,he.current,{content:{...O.content??{},[z]:re(((de=O.content)==null?void 0:de[z])??{})}})},ce,"content",re)})},tn=z=>{var ce,ue;if(!o)return;const R=(ce=O.fills)==null?void 0:ce[o];if(!uo(z,R))return;const q=((ue=O.fx)==null?void 0:ue[o])??[],re=q.some(he=>he.name===z)?q.filter(he=>he.name!==z):[...wd(q,z),{name:z,options:qo(z)}];se({fx:{...O.fx??{},[o]:re}})},wr=(z,R)=>{const q=typeof z=="string"?{[z]:R}:z;n(re=>{const ce=re.pages.map(ue=>{if(ue.id!==re.current)return ue;const he={...ue.overrides??{}};for(const[de,_e]of Object.entries(q))he[de]={...he[de]??{},..._e};return{...ue,overrides:he}});return{...re,pages:ce}})},xn=z=>{if(!o)return;const R=kt(O.wireframe),q=gp(R,O.extra,o);if(!q.length)return;const re=z==="자유"?D4(R,O.extra,O.overrides??{},o):null;le(ce=>({...ce,pages:ce.pages.map(ue=>{if(ue.id!==ce.current)return ue;const he={...ue.overrides??{}};for(const de of q)he[de]={...he[de]??{},rowAlign:z},re&&re[de]!==void 0&&(he[de].colAt=re[de]);return{...ue,overrides:he}})}))},an=(z,R,q)=>{n(re=>{const ce=re.pages.map(ue=>{var de;if(ue.id!==re.current)return ue;const he=(de=ue.content)==null?void 0:de[z];return he?{...ue,content:{...ue.content,[z]:{...he,freeX:R,freeY:q}}}:ue});return{...re,pages:ce}})},Wr=async()=>{await ut({title:"처음부터 다시 시작할까요?",body:`지금 작업을 모두 지웁니다. 되돌릴 수 없습니다.
남겨 두려면 먼저 "파일로 저장"을 하세요.`,ok:"모두 지우기",danger:!0})&&(ge.current=[],xe.current=[],s(null),localStorage.removeItem(Ea),d(!1),localStorage.removeItem(Fi),x(!1),n(Il()))},Cr=(z,R)=>{var ce,ue;const q=(ce=O.fills)==null?void 0:ce[z];if(!uo(R,q))return;const re=((ue=O.fx)==null?void 0:ue[z])??[];re.some(he=>he.name===R)||(se({fx:{...O.fx??{},[z]:[...wd(re,R),{name:R,options:qo(R)}]}}),s(z))},Tr=(z,R)=>{se({fills:{...O.fills??{},[z]:R},content:{...O.content??{},[z]:Yt(R)}}),s(z)},Nt=(z,R)=>{var re;if(!o)return;const q=(((re=O.fx)==null?void 0:re[o])??[]).map(ce=>ce.name===z?{...ce,options:{...ce.options,...R}}:ce);se({fx:{...O.fx??{},[o]:q}})},at=z=>{var q;const R=(q=O.fills)==null?void 0:q[o];le(re=>{var ce;return F({...re,pages:Ta(re.pages,re.current,{overrides:{...O.overrides??{},[o]:{...((ce=O.overrides)==null?void 0:ce[o])??{},...z}}})},R,"overrides",ue=>({...ue,...z}))})},We=()=>{const z={...O.overrides??{}};delete z[o],se({overrides:z})},zt=z=>{var R,q,re;return se({overrides:{...O.overrides??{},[z]:{...((R=O.overrides)==null?void 0:R[z])??{},enterOff:!((re=(q=O.overrides)==null?void 0:q[z])!=null&&re.enterOff)}}})},br=(z,R,q)=>{const re=O.extra??[],ce=yo(kt(O.wireframe)).total,ue=R==null?ce:Math.max(0,Math.min(ce,R)),he=q??re.filter(_e=>(_e.at??ce)<=ue).length,de=O4(re,z,he);de[he]={...de[he],at:ue},se({extra:de})},on=z=>{var re;if(!z||(re=O.fills)!=null&&re[z])return;const R=[...new Set([...O.hidden??[],z])],q=(O.extra??[]).find(ce=>tr(ce).includes(z));if(q&&tr(q).every(ce=>{var ue;return R.includes(ce)||!((ue=O.fills)!=null&&ue[ce])})){const ce=R.filter(ue=>!tr(q).includes(ue));se({hidden:ce,...r0(q.id)})}else se({hidden:R});o===z&&s(null)},l2=(z,R)=>{const q=O.extra??[],re=q.find(de=>de.id===z);if(!re||re.cols>=6)return;const ce=de=>de>=R+1?de+1:de,ue=de=>{const _e={};for(const[ze,He]of Object.entries(de??{})){const Pe=new RegExp(`^${z}-(\\d+)$`).exec(ze);_e[Pe?`${z}-${ce(Number(Pe[1]))}`:ze]=He}return _e},he=de=>(de??[]).map(_e=>{const ze=new RegExp(`^${z}-(\\d+)$`).exec(_e);return ze?`${z}-${ce(Number(ze[1]))}`:_e});se({extra:q.map(de=>de.id===z?{...de,cols:de.cols+1}:de),fills:ue(O.fills),content:ue(O.content),overrides:ue(O.overrides),fx:ue(O.fx),hidden:he(O.hidden)})},r0=z=>({extra:(O.extra??[]).filter(R=>R.id!==z)}),c2=z=>{const R=(O.extra??[]).find(ce=>ce.id===z),q={...O.fills??{}},re={...O.content??{}};R&&tr(R).forEach(ce=>{delete q[ce],delete re[ce]}),se({...r0(z),fills:q,content:re}),s(null)},vr=fa(r.theme),ii=Ms(r.typeset),d2=L.useMemo(()=>({fontFamily:ii.font,background:vr.bg,color:vr.text,"--wf-bg":vr.bg,"--wf-text":vr.text,"--wf-surface":vr.surface,"--wf-line":vr.border,"--wf-muted":vr.muted,"--wf-accent":vr.accent,"--wf-max":`${r.global.maxWidth}px`,"--fx-dot-color":vr.dot,"--fx-star-color":Vp(vr),"--fx-char-color":vr.line}),[vr,ii,r.global.maxWidth]),f2=Object.keys(O.fills??{}).length,u2=`${O.name} · ${vr.label} · ${ii.label} — ${f2}개 채움`;return i.jsxs("div",{className:`pb-app${A?" is-phone":""}`,children:[i.jsxs("header",{className:"pb-topbar",children:[i.jsxs("div",{className:"pb-brand",children:["Portfolio ",i.jsx("b",{children:"Maker"}),i.jsx("span",{className:"pb-badge",children:"draft"})]}),i.jsx("span",{className:"pb-summary",children:u2}),i.jsx("span",{className:`pb-save is-${t}`,children:t==="saving"?"저장 중…":t==="failed"?"저장 실패":"저장됨"}),i.jsxs("div",{className:"pb-panelbtns",children:[i.jsx("button",{className:`pb-iconbtn ${Z?"is-on":""}`,onClick:()=>ne(!Z),"data-tip":"왼쪽 패널 접기 / 펼치기",children:i.jsx(Dr,{name:"panelLeft"})}),i.jsx("button",{className:`pb-iconbtn ${Se?"is-on":""}`,onClick:()=>Ne(!Se),"data-tip":"오른쪽 편집 패널 접기 / 펼치기",children:i.jsx(Dr,{name:"panelRight"})})]}),i.jsx("div",{className:`pb-devices${Q?" is-open":""}`,children:[["desktop","데스크톱 1280px로 보기"],["tablet","태블릿 768px로 보기"],["mobile","모바일 390px로 보기"]].map(([z,R])=>i.jsx("button",{className:`pb-iconbtn ${l===z?"is-on":""}`,onClick:()=>c(z),"data-tip":R,children:i.jsx(Dr,{name:z})},z))}),i.jsxs("div",{className:"pb-actions",children:[i.jsxs("div",{className:`pb-actions__sec${Q?" is-open":""}`,children:[i.jsx("button",{className:"pb-iconbtn",onClick:()=>ae(z=>z==="light"?"dark":"light"),"data-tip":Re==="light"?"에디터를 어둡게":"에디터를 밝게",children:i.jsx(Dr,{name:Re==="light"?"moon":"sun"})}),i.jsx("button",{className:`pb-iconbtn ${g?"is-on":""}`,onClick:g?T:()=>E(!0),"data-tip":`부가 기능 ${g?"끄기":"켜기"} — 3D 효과 · Character · 3D Model`,children:i.jsx(Dr,{name:"sparkle"})}),i.jsx("button",{className:`pb-iconbtn ${f?"is-on":""}`,onClick:()=>p(z=>!z),"data-tip":`효과 ${f?"잠시 끄기":"켜기"} — 끄면 레이아웃 잡기가 편합니다`,children:i.jsx(Dr,{name:"wand"})}),i.jsx("button",{className:"pb-iconbtn pb-iconbtn--danger",onClick:Wr,"data-tip":"처음부터 다시 — 지금 작업을 모두 지웁니다",children:i.jsx(Dr,{name:"trash"})})]}),i.jsx("button",{className:"pb-iconbtn",onClick:Te,"data-tip":"되돌리기 (Ctrl+Z)",children:i.jsx(Dr,{name:"undo"})}),i.jsx("button",{className:"pb-iconbtn",onClick:D,"data-tip":"다시 실행 (Ctrl+Shift+Z)",children:i.jsx(Dr,{name:"redo"})}),i.jsx("button",{className:`pb-iconbtn ${u?"is-on":""}`,onClick:()=>h(z=>!z),"data-tip":u?"편집으로 돌아가기":"미리보기 — 편집 표식 없이 보기",children:i.jsx(Dr,{name:u?"pencil":"eye"})}),i.jsx("button",{className:"pb-iconbtn",onClick:()=>C(!0),"data-tip":"저장 · 불러오기 — 이 컴퓨터에 여러 개 또는 파일로",children:i.jsx(Dr,{name:"save"})}),i.jsx("button",{className:"pb-iconbtn",onClick:()=>_(!0),"data-tip":"내보내기 — HTML / ZIP으로 내려받기",children:i.jsx(Dr,{name:"download"})}),A&&i.jsx("button",{className:`pb-iconbtn ${Q?"is-on":""}`,onClick:()=>pe(z=>!z),"data-tip":"더보기 — 테마 · 부가 기능 · 효과 · 기기 보기",children:"⋯"})]})]}),i.jsxs("div",{className:`pb-body ${J?"is-narrow":""}`,children:[J&&(Z||Se)&&i.jsx("button",{className:"pb-scrim","aria-label":"패널 닫기",onClick:()=>{je(!1),X(!1)}}),i.jsx(Rg,{open:Z,advanced:g,pages:r.pages,current:r.current,page:O,global:r.global,theme:r.theme,typeset:r.typeset,selected:o,onSwitchPage:U,onAddPage:me,onRenamePage:(z,R)=>le(q=>({...q,pages:Y8(q.pages,z,R)})),onRemovePage:ye,onMovePage:(z,R)=>le(q=>({...q,pages:Q8(q.pages,z,R)})),onWireframe:Ce,onTemplate:Fe,applyAll:be,onApplyAll:ke,onFill:Xe,onDropEffect:Cr,onGlobal:z=>le(R=>({...R,global:{...R.global,...z}})),site:r.site,onSite:z=>le(R=>({...R,site:{...R.site,...z}})),onBackground:z=>le(R=>{var q;return{...R,site:{...R.site,background:{...(q=R.site)==null?void 0:q.background,...z}}}}),onTheme:z=>le(R=>({...R,theme:z})),onTypeset:z=>le(R=>({...R,typeset:z})),onExport:()=>_(!0)}),i.jsx(hg,{page:O,pages:r.pages,current:r.current,global:r.global,theme:vr,effectsOn:$,rootStyle:d2,selected:o,onSelect:s,onGoto:U,onAddRow:br,onRemoveRow:c2,onDropEffect:Cr,onDropPart:Tr,onEditText:nn,onFreeMove:an,onFreeBox:wr,background:(n0=r.site)==null?void 0:n0.background,enterFx:(t0=r.site)==null?void 0:t0.enterFx,enterDelay:(a0=r.site)==null?void 0:a0.enterDelay,onToggleEnter:zt,onClearRegion:xr,onHideRegion:on,onAddCol:l2,scrollBar:!!((o0=r.site)!=null&&o0.scrollBar),customFont:(s0=r.site)==null?void 0:s0.customFont,device:l,preview:u}),i.jsx(Ig,{open:Se,onClose:()=>X(!1),narrow:J,advanced:g,regionId:o,partId:o?(i0=O.fills)==null?void 0:i0[o]:null,content:o?(l0=O.content)==null?void 0:l0[o]:null,override:o?(c0=O.overrides)==null?void 0:c0[o]:null,fx:o?((d0=O.fx)==null?void 0:d0[o])??[]:[],global:r.global,onContent:rn,onOverride:at,onResetOverride:We,onClearPart:en,onToggleEffect:tn,onEffectOptions:Nt,onRowAlign:xn,site:r.site,onSite:z=>le(R=>({...R,site:{...R.site,...z}}))})]}),i.jsx(I8,{open:Me,onClose:()=>W(!1),actions:[...r.pages.map(z=>({group:"페이지",label:`${z.name} 열기`,run:()=>U(z.id)})),{group:"도구",label:"내보내기 — HTML / ZIP",hint:"⬇",run:()=>_(!0)},{group:"도구",label:"저장 · 불러오기",run:()=>C(!0)},{group:"도구",label:u?"미리보기 끄기":"미리보기 — 편집 표식 없이",run:()=>h(z=>!z)},{group:"도구",label:Re==="dark"?"에디터 밝게":"에디터 어둡게",run:()=>ae(Re==="dark"?"light":"dark")},{group:"도구",label:r.global.gridGuide?"그리드 가이드 끄기":"그리드 가이드 켜기",run:()=>le(z=>({...z,global:{...z.global,gridGuide:!z.global.gridGuide}}))},{group:"도구",label:"단계별 사용 가이드 열기",hint:"새 탭",run:()=>window.open("./guide/how-to.html","_blank","noopener")},...na.map(z=>({group:"테마",label:z.label??z.name??z.id,run:()=>le(R=>({...R,theme:z.id}))})),...hn.map(z=>({group:"글꼴",label:z.label??z.name??z.id,run:()=>le(R=>({...R,typeset:z.id}))}))]}),i.jsx(H8,{open:ee,onClose:()=>we(!1)}),i.jsxs("div",{className:`pb-footerad ${N?"is-hidden":""}`,children:[i.jsx(y8,{}),i.jsxs("span",{className:"pb-copy",children:["© ",new Date().getFullYear()," Portfolio Maker",i.jsx("span",{className:"pb-copy__sep",children:" · "}),i.jsx("a",{href:"./about.html",target:"_blank",rel:"noopener noreferrer",children:"소개"}),i.jsx("span",{className:"pb-copy__sep",children:" · "}),i.jsx("a",{href:"./privacy.html",target:"_blank",rel:"noopener noreferrer",children:"개인정보처리방침"}),i.jsx("span",{className:"pb-copy__sep",children:" · "}),i.jsx("a",{href:"./terms.html",target:"_blank",rel:"noopener noreferrer",children:"이용약관"}),i.jsx("span",{className:"pb-copy__sep",children:" · "}),i.jsx("a",{href:"./contact.html",target:"_blank",rel:"noopener noreferrer",children:"문의"})]}),i.jsx("button",{className:"pb-footerad__toggle",onClick:()=>{const z=!N;M(z),localStorage.setItem(xd,z?"1":"")},children:N?"∧ 광고 보기":"∨ 숨기기"}),!N&&i.jsx(ua,{id:"appFooter",className:"pb-adslot--footer"})]}),k&&i.jsx(v8,{doc:r,advanced:g,onClose:()=>_(!1)}),j&&i.jsx(D8,{doc:r,onLoad:z=>{le(()=>z),s(null)},onClose:()=>C(!1)}),$e&&!m&&i.jsx(z8,{onStart:De,onOpenSample:te,busy:y}),$e&&m&&i.jsx(_8,{global:r.global,onStart:ie,onSkip:()=>{localStorage.setItem(Ea,"1"),d(!0)}})]})}const i2=document.createElement("style");i2.textContent=Oc(e=>`${Ls}/${e}`);document.head.appendChild(i2);Tu(document.getElementById("root")).render(i.jsx(X8,{}));
