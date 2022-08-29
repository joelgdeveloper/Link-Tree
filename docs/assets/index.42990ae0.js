const A_=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};A_();var L={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eo=Symbol.for("react.element"),x_=Symbol.for("react.portal"),D_=Symbol.for("react.fragment"),P_=Symbol.for("react.strict_mode"),O_=Symbol.for("react.profiler"),L_=Symbol.for("react.provider"),$_=Symbol.for("react.context"),M_=Symbol.for("react.forward_ref"),U_=Symbol.for("react.suspense"),b_=Symbol.for("react.memo"),F_=Symbol.for("react.lazy"),Xf=Symbol.iterator;function V_(t){return t===null||typeof t!="object"?null:(t=Xf&&t[Xf]||t["@@iterator"],typeof t=="function"?t:null)}var Fg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vg=Object.assign,Bg={};function Ai(t,e,n){this.props=t,this.context=e,this.refs=Bg,this.updater=n||Fg}Ai.prototype.isReactComponent={};Ai.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ai.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function zg(){}zg.prototype=Ai.prototype;function Lh(t,e,n){this.props=t,this.context=e,this.refs=Bg,this.updater=n||Fg}var $h=Lh.prototype=new zg;$h.constructor=Lh;Vg($h,Ai.prototype);$h.isPureReactComponent=!0;var Yf=Array.isArray,jg=Object.prototype.hasOwnProperty,Mh={current:null},Hg={key:!0,ref:!0,__self:!0,__source:!0};function Wg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)jg.call(e,r)&&!Hg.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:eo,type:t,key:s,ref:o,props:i,_owner:Mh.current}}function B_(t,e){return{$$typeof:eo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Uh(t){return typeof t=="object"&&t!==null&&t.$$typeof===eo}function z_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Jf=/\/+/g;function gu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?z_(""+t.key):e.toString(36)}function ua(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case eo:case x_:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+gu(o,0):r,Yf(i)?(n="",t!=null&&(n=t.replace(Jf,"$&/")+"/"),ua(i,e,n,"",function(u){return u})):i!=null&&(Uh(i)&&(i=B_(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Jf,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Yf(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+gu(s,a);o+=ua(s,e,n,l,i)}else if(l=V_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+gu(s,a++),o+=ua(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function $o(t,e,n){if(t==null)return t;var r=[],i=0;return ua(t,r,"","",function(s){return e.call(n,s,i++)}),r}function j_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var tt={current:null},ca={transition:null},H_={ReactCurrentDispatcher:tt,ReactCurrentBatchConfig:ca,ReactCurrentOwner:Mh};K.Children={map:$o,forEach:function(t,e,n){$o(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return $o(t,function(){e++}),e},toArray:function(t){return $o(t,function(e){return e})||[]},only:function(t){if(!Uh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};K.Component=Ai;K.Fragment=D_;K.Profiler=O_;K.PureComponent=Lh;K.StrictMode=P_;K.Suspense=U_;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H_;K.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Vg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Mh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)jg.call(e,l)&&!Hg.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:eo,type:t.type,key:i,ref:s,props:r,_owner:o}};K.createContext=function(t){return t={$$typeof:$_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:L_,_context:t},t.Consumer=t};K.createElement=Wg;K.createFactory=function(t){var e=Wg.bind(null,t);return e.type=t,e};K.createRef=function(){return{current:null}};K.forwardRef=function(t){return{$$typeof:M_,render:t}};K.isValidElement=Uh;K.lazy=function(t){return{$$typeof:F_,_payload:{_status:-1,_result:t},_init:j_}};K.memo=function(t,e){return{$$typeof:b_,type:t,compare:e===void 0?null:e}};K.startTransition=function(t){var e=ca.transition;ca.transition={};try{t()}finally{ca.transition=e}};K.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};K.useCallback=function(t,e){return tt.current.useCallback(t,e)};K.useContext=function(t){return tt.current.useContext(t)};K.useDebugValue=function(){};K.useDeferredValue=function(t){return tt.current.useDeferredValue(t)};K.useEffect=function(t,e){return tt.current.useEffect(t,e)};K.useId=function(){return tt.current.useId()};K.useImperativeHandle=function(t,e,n){return tt.current.useImperativeHandle(t,e,n)};K.useInsertionEffect=function(t,e){return tt.current.useInsertionEffect(t,e)};K.useLayoutEffect=function(t,e){return tt.current.useLayoutEffect(t,e)};K.useMemo=function(t,e){return tt.current.useMemo(t,e)};K.useReducer=function(t,e,n){return tt.current.useReducer(t,e,n)};K.useRef=function(t){return tt.current.useRef(t)};K.useState=function(t){return tt.current.useState(t)};K.useSyncExternalStore=function(t,e,n){return tt.current.useSyncExternalStore(t,e,n)};K.useTransition=function(){return tt.current.useTransition()};K.version="18.2.0";(function(t){t.exports=K})(L);var uc={},Kg={exports:{}},gt={},qg={exports:{}},Gg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,z){var j=D.length;D.push(z);e:for(;0<j;){var he=j-1>>>1,ke=D[he];if(0<i(ke,z))D[he]=z,D[j]=ke,j=he;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var z=D[0],j=D.pop();if(j!==z){D[0]=j;e:for(var he=0,ke=D.length,Oo=ke>>>1;he<Oo;){var nr=2*(he+1)-1,mu=D[nr],rr=nr+1,Lo=D[rr];if(0>i(mu,j))rr<ke&&0>i(Lo,mu)?(D[he]=Lo,D[rr]=j,he=rr):(D[he]=mu,D[nr]=j,he=nr);else if(rr<ke&&0>i(Lo,j))D[he]=Lo,D[rr]=j,he=rr;else break e}}return z}function i(D,z){var j=D.sortIndex-z.sortIndex;return j!==0?j:D.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,m=!1,y=!1,w=!1,T=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=D)r(u),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(u)}}function v(D){if(w=!1,g(D),!y)if(n(l)!==null)y=!0,Po(C);else{var z=n(u);z!==null&&pu(v,z.startTime-D)}}function C(D,z){y=!1,w&&(w=!1,p(E),E=-1),m=!0;var j=d;try{for(g(z),h=n(l);h!==null&&(!(h.expirationTime>z)||D&&!ee());){var he=h.callback;if(typeof he=="function"){h.callback=null,d=h.priorityLevel;var ke=he(h.expirationTime<=z);z=t.unstable_now(),typeof ke=="function"?h.callback=ke:h===n(l)&&r(l),g(z)}else r(l);h=n(l)}if(h!==null)var Oo=!0;else{var nr=n(u);nr!==null&&pu(v,nr.startTime-z),Oo=!1}return Oo}finally{h=null,d=j,m=!1}}var R=!1,N=null,E=-1,O=5,$=-1;function ee(){return!(t.unstable_now()-$<O)}function We(){if(N!==null){var D=t.unstable_now();$=D;var z=!0;try{z=N(!0,D)}finally{z?Ke():(R=!1,N=null)}}else R=!1}var Ke;if(typeof f=="function")Ke=function(){f(We)};else if(typeof MessageChannel<"u"){var vn=new MessageChannel,Ot=vn.port2;vn.port1.onmessage=We,Ke=function(){Ot.postMessage(null)}}else Ke=function(){T(We,0)};function Po(D){N=D,R||(R=!0,Ke())}function pu(D,z){E=T(function(){D(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,Po(C))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var z=3;break;default:z=d}var j=d;d=z;try{return D()}finally{d=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,z){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var j=d;d=D;try{return z()}finally{d=j}},t.unstable_scheduleCallback=function(D,z,j){var he=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?he+j:he):j=he,D){case 1:var ke=-1;break;case 2:ke=250;break;case 5:ke=1073741823;break;case 4:ke=1e4;break;default:ke=5e3}return ke=j+ke,D={id:c++,callback:z,priorityLevel:D,startTime:j,expirationTime:ke,sortIndex:-1},j>he?(D.sortIndex=j,e(u,D),n(l)===null&&D===n(u)&&(w?(p(E),E=-1):w=!0,pu(v,j-he))):(D.sortIndex=ke,e(l,D),y||m||(y=!0,Po(C))),D},t.unstable_shouldYield=ee,t.unstable_wrapCallback=function(D){var z=d;return function(){var j=d;d=z;try{return D.apply(this,arguments)}finally{d=j}}}})(Gg);(function(t){t.exports=Gg})(qg);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qg=L.exports,pt=qg.exports;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xg=new Set,ks={};function Lr(t,e){fi(t,e),fi(t+"Capture",e)}function fi(t,e){for(ks[t]=e,t=0;t<e.length;t++)Xg.add(e[t])}var an=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cc=Object.prototype.hasOwnProperty,W_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Zf={},ep={};function K_(t){return cc.call(ep,t)?!0:cc.call(Zf,t)?!1:W_.test(t)?ep[t]=!0:(Zf[t]=!0,!1)}function q_(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function G_(t,e,n,r){if(e===null||typeof e>"u"||q_(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function nt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Me[t]=new nt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Me[e]=new nt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Me[t]=new nt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Me[t]=new nt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Me[t]=new nt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Me[t]=new nt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Me[t]=new nt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Me[t]=new nt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Me[t]=new nt(t,5,!1,t.toLowerCase(),null,!1,!1)});var bh=/[\-:]([a-z])/g;function Fh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(bh,Fh);Me[e]=new nt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(bh,Fh);Me[e]=new nt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(bh,Fh);Me[e]=new nt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Me[t]=new nt(t,1,!1,t.toLowerCase(),null,!1,!1)});Me.xlinkHref=new nt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Me[t]=new nt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Vh(t,e,n,r){var i=Me.hasOwnProperty(e)?Me[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(G_(e,n,i,r)&&(n=null),r||i===null?K_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var gn=Qg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Mo=Symbol.for("react.element"),jr=Symbol.for("react.portal"),Hr=Symbol.for("react.fragment"),Bh=Symbol.for("react.strict_mode"),hc=Symbol.for("react.profiler"),Yg=Symbol.for("react.provider"),Jg=Symbol.for("react.context"),zh=Symbol.for("react.forward_ref"),dc=Symbol.for("react.suspense"),fc=Symbol.for("react.suspense_list"),jh=Symbol.for("react.memo"),Sn=Symbol.for("react.lazy"),Zg=Symbol.for("react.offscreen"),tp=Symbol.iterator;function Bi(t){return t===null||typeof t!="object"?null:(t=tp&&t[tp]||t["@@iterator"],typeof t=="function"?t:null)}var le=Object.assign,yu;function Ji(t){if(yu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);yu=e&&e[1]||""}return`
`+yu+t}var vu=!1;function wu(t,e){if(!t||vu)return"";vu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{vu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ji(t):""}function Q_(t){switch(t.tag){case 5:return Ji(t.type);case 16:return Ji("Lazy");case 13:return Ji("Suspense");case 19:return Ji("SuspenseList");case 0:case 2:case 15:return t=wu(t.type,!1),t;case 11:return t=wu(t.type.render,!1),t;case 1:return t=wu(t.type,!0),t;default:return""}}function pc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Hr:return"Fragment";case jr:return"Portal";case hc:return"Profiler";case Bh:return"StrictMode";case dc:return"Suspense";case fc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Jg:return(t.displayName||"Context")+".Consumer";case Yg:return(t._context.displayName||"Context")+".Provider";case zh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jh:return e=t.displayName||null,e!==null?e:pc(t.type)||"Memo";case Sn:e=t._payload,t=t._init;try{return pc(t(e))}catch{}}return null}function X_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pc(e);case 8:return e===Bh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function jn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ey(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Y_(t){var e=ey(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Uo(t){t._valueTracker||(t._valueTracker=Y_(t))}function ty(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=ey(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function xa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function mc(t,e){var n=e.checked;return le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function np(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=jn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ny(t,e){e=e.checked,e!=null&&Vh(t,"checked",e,!1)}function gc(t,e){ny(t,e);var n=jn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?yc(t,e.type,n):e.hasOwnProperty("defaultValue")&&yc(t,e.type,jn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function rp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function yc(t,e,n){(e!=="number"||xa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Zi=Array.isArray;function ri(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+jn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function vc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ip(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(Zi(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:jn(n)}}function ry(t,e){var n=jn(e.value),r=jn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function sp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function iy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?iy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var bo,sy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(bo=bo||document.createElement("div"),bo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=bo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ts(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ss={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},J_=["Webkit","ms","Moz","O"];Object.keys(ss).forEach(function(t){J_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ss[e]=ss[t]})});function oy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ss.hasOwnProperty(t)&&ss[t]?(""+e).trim():e+"px"}function ay(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=oy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Z_=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _c(t,e){if(e){if(Z_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function Ec(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sc=null;function Hh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var kc=null,ii=null,si=null;function op(t){if(t=ro(t)){if(typeof kc!="function")throw Error(S(280));var e=t.stateNode;e&&(e=Rl(e),kc(t.stateNode,t.type,e))}}function ly(t){ii?si?si.push(t):si=[t]:ii=t}function uy(){if(ii){var t=ii,e=si;if(si=ii=null,op(t),e)for(t=0;t<e.length;t++)op(e[t])}}function cy(t,e){return t(e)}function hy(){}var _u=!1;function dy(t,e,n){if(_u)return t(e,n);_u=!0;try{return cy(t,e,n)}finally{_u=!1,(ii!==null||si!==null)&&(hy(),uy())}}function Is(t,e){var n=t.stateNode;if(n===null)return null;var r=Rl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var Tc=!1;if(an)try{var zi={};Object.defineProperty(zi,"passive",{get:function(){Tc=!0}}),window.addEventListener("test",zi,zi),window.removeEventListener("test",zi,zi)}catch{Tc=!1}function eE(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var os=!1,Da=null,Pa=!1,Ic=null,tE={onError:function(t){os=!0,Da=t}};function nE(t,e,n,r,i,s,o,a,l){os=!1,Da=null,eE.apply(tE,arguments)}function rE(t,e,n,r,i,s,o,a,l){if(nE.apply(this,arguments),os){if(os){var u=Da;os=!1,Da=null}else throw Error(S(198));Pa||(Pa=!0,Ic=u)}}function $r(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function fy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ap(t){if($r(t)!==t)throw Error(S(188))}function iE(t){var e=t.alternate;if(!e){if(e=$r(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ap(i),t;if(s===r)return ap(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function py(t){return t=iE(t),t!==null?my(t):null}function my(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=my(t);if(e!==null)return e;t=t.sibling}return null}var gy=pt.unstable_scheduleCallback,lp=pt.unstable_cancelCallback,sE=pt.unstable_shouldYield,oE=pt.unstable_requestPaint,de=pt.unstable_now,aE=pt.unstable_getCurrentPriorityLevel,Wh=pt.unstable_ImmediatePriority,yy=pt.unstable_UserBlockingPriority,Oa=pt.unstable_NormalPriority,lE=pt.unstable_LowPriority,vy=pt.unstable_IdlePriority,kl=null,bt=null;function uE(t){if(bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(kl,t,void 0,(t.current.flags&128)===128)}catch{}}var At=Math.clz32?Math.clz32:dE,cE=Math.log,hE=Math.LN2;function dE(t){return t>>>=0,t===0?32:31-(cE(t)/hE|0)|0}var Fo=64,Vo=4194304;function es(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function La(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=es(a):(s&=o,s!==0&&(r=es(s)))}else o=n&~i,o!==0?r=es(o):s!==0&&(r=es(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-At(e),i=1<<n,r|=t[n],e&=~i;return r}function fE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-At(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=fE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Cc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function wy(){var t=Fo;return Fo<<=1,(Fo&4194240)===0&&(Fo=64),t}function Eu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function to(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-At(e),t[e]=n}function mE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-At(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Kh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-At(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Y=0;function _y(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Ey,qh,Sy,ky,Ty,Rc=!1,Bo=[],Pn=null,On=null,Ln=null,Cs=new Map,Rs=new Map,Tn=[],gE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function up(t,e){switch(t){case"focusin":case"focusout":Pn=null;break;case"dragenter":case"dragleave":On=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":Cs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rs.delete(e.pointerId)}}function ji(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ro(e),e!==null&&qh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function yE(t,e,n,r,i){switch(e){case"focusin":return Pn=ji(Pn,t,e,n,r,i),!0;case"dragenter":return On=ji(On,t,e,n,r,i),!0;case"mouseover":return Ln=ji(Ln,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Cs.set(s,ji(Cs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Rs.set(s,ji(Rs.get(s)||null,t,e,n,r,i)),!0}return!1}function Iy(t){var e=ar(t.target);if(e!==null){var n=$r(e);if(n!==null){if(e=n.tag,e===13){if(e=fy(n),e!==null){t.blockedOn=e,Ty(t.priority,function(){Sy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ha(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Nc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Sc=r,n.target.dispatchEvent(r),Sc=null}else return e=ro(n),e!==null&&qh(e),t.blockedOn=n,!1;e.shift()}return!0}function cp(t,e,n){ha(t)&&n.delete(e)}function vE(){Rc=!1,Pn!==null&&ha(Pn)&&(Pn=null),On!==null&&ha(On)&&(On=null),Ln!==null&&ha(Ln)&&(Ln=null),Cs.forEach(cp),Rs.forEach(cp)}function Hi(t,e){t.blockedOn===e&&(t.blockedOn=null,Rc||(Rc=!0,pt.unstable_scheduleCallback(pt.unstable_NormalPriority,vE)))}function Ns(t){function e(i){return Hi(i,t)}if(0<Bo.length){Hi(Bo[0],t);for(var n=1;n<Bo.length;n++){var r=Bo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Pn!==null&&Hi(Pn,t),On!==null&&Hi(On,t),Ln!==null&&Hi(Ln,t),Cs.forEach(e),Rs.forEach(e),n=0;n<Tn.length;n++)r=Tn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Tn.length&&(n=Tn[0],n.blockedOn===null);)Iy(n),n.blockedOn===null&&Tn.shift()}var oi=gn.ReactCurrentBatchConfig,$a=!0;function wE(t,e,n,r){var i=Y,s=oi.transition;oi.transition=null;try{Y=1,Gh(t,e,n,r)}finally{Y=i,oi.transition=s}}function _E(t,e,n,r){var i=Y,s=oi.transition;oi.transition=null;try{Y=4,Gh(t,e,n,r)}finally{Y=i,oi.transition=s}}function Gh(t,e,n,r){if($a){var i=Nc(t,e,n,r);if(i===null)Du(t,e,r,Ma,n),up(t,r);else if(yE(i,t,e,n,r))r.stopPropagation();else if(up(t,r),e&4&&-1<gE.indexOf(t)){for(;i!==null;){var s=ro(i);if(s!==null&&Ey(s),s=Nc(t,e,n,r),s===null&&Du(t,e,r,Ma,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Du(t,e,r,null,n)}}var Ma=null;function Nc(t,e,n,r){if(Ma=null,t=Hh(r),t=ar(t),t!==null)if(e=$r(t),e===null)t=null;else if(n=e.tag,n===13){if(t=fy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ma=t,null}function Cy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(aE()){case Wh:return 1;case yy:return 4;case Oa:case lE:return 16;case vy:return 536870912;default:return 16}default:return 16}}var xn=null,Qh=null,da=null;function Ry(){if(da)return da;var t,e=Qh,n=e.length,r,i="value"in xn?xn.value:xn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return da=i.slice(t,1<r?1-r:void 0)}function fa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function zo(){return!0}function hp(){return!1}function yt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?zo:hp,this.isPropagationStopped=hp,this}return le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zo)},persist:function(){},isPersistent:zo}),e}var xi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xh=yt(xi),no=le({},xi,{view:0,detail:0}),EE=yt(no),Su,ku,Wi,Tl=le({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Wi&&(Wi&&t.type==="mousemove"?(Su=t.screenX-Wi.screenX,ku=t.screenY-Wi.screenY):ku=Su=0,Wi=t),Su)},movementY:function(t){return"movementY"in t?t.movementY:ku}}),dp=yt(Tl),SE=le({},Tl,{dataTransfer:0}),kE=yt(SE),TE=le({},no,{relatedTarget:0}),Tu=yt(TE),IE=le({},xi,{animationName:0,elapsedTime:0,pseudoElement:0}),CE=yt(IE),RE=le({},xi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),NE=yt(RE),AE=le({},xi,{data:0}),fp=yt(AE),xE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},DE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},PE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function OE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=PE[t])?!!e[t]:!1}function Yh(){return OE}var LE=le({},no,{key:function(t){if(t.key){var e=xE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=fa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?DE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yh,charCode:function(t){return t.type==="keypress"?fa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$E=yt(LE),ME=le({},Tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pp=yt(ME),UE=le({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yh}),bE=yt(UE),FE=le({},xi,{propertyName:0,elapsedTime:0,pseudoElement:0}),VE=yt(FE),BE=le({},Tl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zE=yt(BE),jE=[9,13,27,32],Jh=an&&"CompositionEvent"in window,as=null;an&&"documentMode"in document&&(as=document.documentMode);var HE=an&&"TextEvent"in window&&!as,Ny=an&&(!Jh||as&&8<as&&11>=as),mp=String.fromCharCode(32),gp=!1;function Ay(t,e){switch(t){case"keyup":return jE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wr=!1;function WE(t,e){switch(t){case"compositionend":return xy(e);case"keypress":return e.which!==32?null:(gp=!0,mp);case"textInput":return t=e.data,t===mp&&gp?null:t;default:return null}}function KE(t,e){if(Wr)return t==="compositionend"||!Jh&&Ay(t,e)?(t=Ry(),da=Qh=xn=null,Wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ny&&e.locale!=="ko"?null:e.data;default:return null}}var qE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!qE[t.type]:e==="textarea"}function Dy(t,e,n,r){ly(r),e=Ua(e,"onChange"),0<e.length&&(n=new Xh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ls=null,As=null;function GE(t){zy(t,0)}function Il(t){var e=Gr(t);if(ty(e))return t}function QE(t,e){if(t==="change")return e}var Py=!1;if(an){var Iu;if(an){var Cu="oninput"in document;if(!Cu){var vp=document.createElement("div");vp.setAttribute("oninput","return;"),Cu=typeof vp.oninput=="function"}Iu=Cu}else Iu=!1;Py=Iu&&(!document.documentMode||9<document.documentMode)}function wp(){ls&&(ls.detachEvent("onpropertychange",Oy),As=ls=null)}function Oy(t){if(t.propertyName==="value"&&Il(As)){var e=[];Dy(e,As,t,Hh(t)),dy(GE,e)}}function XE(t,e,n){t==="focusin"?(wp(),ls=e,As=n,ls.attachEvent("onpropertychange",Oy)):t==="focusout"&&wp()}function YE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Il(As)}function JE(t,e){if(t==="click")return Il(e)}function ZE(t,e){if(t==="input"||t==="change")return Il(e)}function eS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Pt=typeof Object.is=="function"?Object.is:eS;function xs(t,e){if(Pt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!cc.call(e,i)||!Pt(t[i],e[i]))return!1}return!0}function _p(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ep(t,e){var n=_p(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_p(n)}}function Ly(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ly(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function $y(){for(var t=window,e=xa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=xa(t.document)}return e}function Zh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function tS(t){var e=$y(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ly(n.ownerDocument.documentElement,n)){if(r!==null&&Zh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ep(n,s);var o=Ep(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var nS=an&&"documentMode"in document&&11>=document.documentMode,Kr=null,Ac=null,us=null,xc=!1;function Sp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xc||Kr==null||Kr!==xa(r)||(r=Kr,"selectionStart"in r&&Zh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),us&&xs(us,r)||(us=r,r=Ua(Ac,"onSelect"),0<r.length&&(e=new Xh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Kr)))}function jo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var qr={animationend:jo("Animation","AnimationEnd"),animationiteration:jo("Animation","AnimationIteration"),animationstart:jo("Animation","AnimationStart"),transitionend:jo("Transition","TransitionEnd")},Ru={},My={};an&&(My=document.createElement("div").style,"AnimationEvent"in window||(delete qr.animationend.animation,delete qr.animationiteration.animation,delete qr.animationstart.animation),"TransitionEvent"in window||delete qr.transitionend.transition);function Cl(t){if(Ru[t])return Ru[t];if(!qr[t])return t;var e=qr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in My)return Ru[t]=e[n];return t}var Uy=Cl("animationend"),by=Cl("animationiteration"),Fy=Cl("animationstart"),Vy=Cl("transitionend"),By=new Map,kp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yn(t,e){By.set(t,e),Lr(e,[t])}for(var Nu=0;Nu<kp.length;Nu++){var Au=kp[Nu],rS=Au.toLowerCase(),iS=Au[0].toUpperCase()+Au.slice(1);Yn(rS,"on"+iS)}Yn(Uy,"onAnimationEnd");Yn(by,"onAnimationIteration");Yn(Fy,"onAnimationStart");Yn("dblclick","onDoubleClick");Yn("focusin","onFocus");Yn("focusout","onBlur");Yn(Vy,"onTransitionEnd");fi("onMouseEnter",["mouseout","mouseover"]);fi("onMouseLeave",["mouseout","mouseover"]);fi("onPointerEnter",["pointerout","pointerover"]);fi("onPointerLeave",["pointerout","pointerover"]);Lr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ts="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sS=new Set("cancel close invalid load scroll toggle".split(" ").concat(ts));function Tp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,rE(r,e,void 0,t),t.currentTarget=null}function zy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Tp(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Tp(i,a,u),s=l}}}if(Pa)throw t=Ic,Pa=!1,Ic=null,t}function te(t,e){var n=e[$c];n===void 0&&(n=e[$c]=new Set);var r=t+"__bubble";n.has(r)||(jy(e,t,2,!1),n.add(r))}function xu(t,e,n){var r=0;e&&(r|=4),jy(n,t,r,e)}var Ho="_reactListening"+Math.random().toString(36).slice(2);function Ds(t){if(!t[Ho]){t[Ho]=!0,Xg.forEach(function(n){n!=="selectionchange"&&(sS.has(n)||xu(n,!1,t),xu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ho]||(e[Ho]=!0,xu("selectionchange",!1,e))}}function jy(t,e,n,r){switch(Cy(e)){case 1:var i=wE;break;case 4:i=_E;break;default:i=Gh}n=i.bind(null,e,n,t),i=void 0,!Tc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Du(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ar(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}dy(function(){var u=s,c=Hh(n),h=[];e:{var d=By.get(t);if(d!==void 0){var m=Xh,y=t;switch(t){case"keypress":if(fa(n)===0)break e;case"keydown":case"keyup":m=$E;break;case"focusin":y="focus",m=Tu;break;case"focusout":y="blur",m=Tu;break;case"beforeblur":case"afterblur":m=Tu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=kE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=bE;break;case Uy:case by:case Fy:m=CE;break;case Vy:m=VE;break;case"scroll":m=EE;break;case"wheel":m=zE;break;case"copy":case"cut":case"paste":m=NE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=pp}var w=(e&4)!==0,T=!w&&t==="scroll",p=w?d!==null?d+"Capture":null:d;w=[];for(var f=u,g;f!==null;){g=f;var v=g.stateNode;if(g.tag===5&&v!==null&&(g=v,p!==null&&(v=Is(f,p),v!=null&&w.push(Ps(f,v,g)))),T)break;f=f.return}0<w.length&&(d=new m(d,y,null,n,c),h.push({event:d,listeners:w}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Sc&&(y=n.relatedTarget||n.fromElement)&&(ar(y)||y[ln]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?ar(y):null,y!==null&&(T=$r(y),y!==T||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(w=dp,v="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(w=pp,v="onPointerLeave",p="onPointerEnter",f="pointer"),T=m==null?d:Gr(m),g=y==null?d:Gr(y),d=new w(v,f+"leave",m,n,c),d.target=T,d.relatedTarget=g,v=null,ar(c)===u&&(w=new w(p,f+"enter",y,n,c),w.target=g,w.relatedTarget=T,v=w),T=v,m&&y)t:{for(w=m,p=y,f=0,g=w;g;g=Br(g))f++;for(g=0,v=p;v;v=Br(v))g++;for(;0<f-g;)w=Br(w),f--;for(;0<g-f;)p=Br(p),g--;for(;f--;){if(w===p||p!==null&&w===p.alternate)break t;w=Br(w),p=Br(p)}w=null}else w=null;m!==null&&Ip(h,d,m,w,!1),y!==null&&T!==null&&Ip(h,T,y,w,!0)}}e:{if(d=u?Gr(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var C=QE;else if(yp(d))if(Py)C=ZE;else{C=YE;var R=XE}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=JE);if(C&&(C=C(t,u))){Dy(h,C,n,c);break e}R&&R(t,d,u),t==="focusout"&&(R=d._wrapperState)&&R.controlled&&d.type==="number"&&yc(d,"number",d.value)}switch(R=u?Gr(u):window,t){case"focusin":(yp(R)||R.contentEditable==="true")&&(Kr=R,Ac=u,us=null);break;case"focusout":us=Ac=Kr=null;break;case"mousedown":xc=!0;break;case"contextmenu":case"mouseup":case"dragend":xc=!1,Sp(h,n,c);break;case"selectionchange":if(nS)break;case"keydown":case"keyup":Sp(h,n,c)}var N;if(Jh)e:{switch(t){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Wr?Ay(t,n)&&(E="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Ny&&n.locale!=="ko"&&(Wr||E!=="onCompositionStart"?E==="onCompositionEnd"&&Wr&&(N=Ry()):(xn=c,Qh="value"in xn?xn.value:xn.textContent,Wr=!0)),R=Ua(u,E),0<R.length&&(E=new fp(E,t,null,n,c),h.push({event:E,listeners:R}),N?E.data=N:(N=xy(n),N!==null&&(E.data=N)))),(N=HE?WE(t,n):KE(t,n))&&(u=Ua(u,"onBeforeInput"),0<u.length&&(c=new fp("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=N))}zy(h,e)})}function Ps(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ua(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Is(t,n),s!=null&&r.unshift(Ps(t,s,i)),s=Is(t,e),s!=null&&r.push(Ps(t,s,i))),t=t.return}return r}function Br(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ip(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Is(n,s),l!=null&&o.unshift(Ps(n,l,a))):i||(l=Is(n,s),l!=null&&o.push(Ps(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var oS=/\r\n?/g,aS=/\u0000|\uFFFD/g;function Cp(t){return(typeof t=="string"?t:""+t).replace(oS,`
`).replace(aS,"")}function Wo(t,e,n){if(e=Cp(e),Cp(t)!==e&&n)throw Error(S(425))}function ba(){}var Dc=null,Pc=null;function Oc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Lc=typeof setTimeout=="function"?setTimeout:void 0,lS=typeof clearTimeout=="function"?clearTimeout:void 0,Rp=typeof Promise=="function"?Promise:void 0,uS=typeof queueMicrotask=="function"?queueMicrotask:typeof Rp<"u"?function(t){return Rp.resolve(null).then(t).catch(cS)}:Lc;function cS(t){setTimeout(function(){throw t})}function Pu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ns(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ns(e)}function $n(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Np(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Di=Math.random().toString(36).slice(2),Mt="__reactFiber$"+Di,Os="__reactProps$"+Di,ln="__reactContainer$"+Di,$c="__reactEvents$"+Di,hS="__reactListeners$"+Di,dS="__reactHandles$"+Di;function ar(t){var e=t[Mt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ln]||n[Mt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Np(t);t!==null;){if(n=t[Mt])return n;t=Np(t)}return e}t=n,n=t.parentNode}return null}function ro(t){return t=t[Mt]||t[ln],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Gr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function Rl(t){return t[Os]||null}var Mc=[],Qr=-1;function Jn(t){return{current:t}}function re(t){0>Qr||(t.current=Mc[Qr],Mc[Qr]=null,Qr--)}function J(t,e){Qr++,Mc[Qr]=t.current,t.current=e}var Hn={},He=Jn(Hn),ot=Jn(!1),_r=Hn;function pi(t,e){var n=t.type.contextTypes;if(!n)return Hn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function at(t){return t=t.childContextTypes,t!=null}function Fa(){re(ot),re(He)}function Ap(t,e,n){if(He.current!==Hn)throw Error(S(168));J(He,e),J(ot,n)}function Hy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,X_(t)||"Unknown",i));return le({},n,r)}function Va(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Hn,_r=He.current,J(He,t),J(ot,ot.current),!0}function xp(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=Hy(t,e,_r),r.__reactInternalMemoizedMergedChildContext=t,re(ot),re(He),J(He,t)):re(ot),J(ot,n)}var Xt=null,Nl=!1,Ou=!1;function Wy(t){Xt===null?Xt=[t]:Xt.push(t)}function fS(t){Nl=!0,Wy(t)}function Zn(){if(!Ou&&Xt!==null){Ou=!0;var t=0,e=Y;try{var n=Xt;for(Y=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Xt=null,Nl=!1}catch(i){throw Xt!==null&&(Xt=Xt.slice(t+1)),gy(Wh,Zn),i}finally{Y=e,Ou=!1}}return null}var Xr=[],Yr=0,Ba=null,za=0,vt=[],wt=0,Er=null,Jt=1,Zt="";function ir(t,e){Xr[Yr++]=za,Xr[Yr++]=Ba,Ba=t,za=e}function Ky(t,e,n){vt[wt++]=Jt,vt[wt++]=Zt,vt[wt++]=Er,Er=t;var r=Jt;t=Zt;var i=32-At(r)-1;r&=~(1<<i),n+=1;var s=32-At(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Jt=1<<32-At(e)+i|n<<i|r,Zt=s+t}else Jt=1<<s|n<<i|r,Zt=t}function ed(t){t.return!==null&&(ir(t,1),Ky(t,1,0))}function td(t){for(;t===Ba;)Ba=Xr[--Yr],Xr[Yr]=null,za=Xr[--Yr],Xr[Yr]=null;for(;t===Er;)Er=vt[--wt],vt[wt]=null,Zt=vt[--wt],vt[wt]=null,Jt=vt[--wt],vt[wt]=null}var ft=null,ht=null,ie=!1,Nt=null;function qy(t,e){var n=Et(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Dp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ft=t,ht=$n(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ft=t,ht=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Er!==null?{id:Jt,overflow:Zt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Et(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ft=t,ht=null,!0):!1;default:return!1}}function Uc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function bc(t){if(ie){var e=ht;if(e){var n=e;if(!Dp(t,e)){if(Uc(t))throw Error(S(418));e=$n(n.nextSibling);var r=ft;e&&Dp(t,e)?qy(r,n):(t.flags=t.flags&-4097|2,ie=!1,ft=t)}}else{if(Uc(t))throw Error(S(418));t.flags=t.flags&-4097|2,ie=!1,ft=t}}}function Pp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ft=t}function Ko(t){if(t!==ft)return!1;if(!ie)return Pp(t),ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Oc(t.type,t.memoizedProps)),e&&(e=ht)){if(Uc(t))throw Gy(),Error(S(418));for(;e;)qy(t,e),e=$n(e.nextSibling)}if(Pp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ht=$n(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ht=null}}else ht=ft?$n(t.stateNode.nextSibling):null;return!0}function Gy(){for(var t=ht;t;)t=$n(t.nextSibling)}function mi(){ht=ft=null,ie=!1}function nd(t){Nt===null?Nt=[t]:Nt.push(t)}var pS=gn.ReactCurrentBatchConfig;function Ct(t,e){if(t&&t.defaultProps){e=le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ja=Jn(null),Ha=null,Jr=null,rd=null;function id(){rd=Jr=Ha=null}function sd(t){var e=ja.current;re(ja),t._currentValue=e}function Fc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ai(t,e){Ha=t,rd=Jr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(st=!0),t.firstContext=null)}function kt(t){var e=t._currentValue;if(rd!==t)if(t={context:t,memoizedValue:e,next:null},Jr===null){if(Ha===null)throw Error(S(308));Jr=t,Ha.dependencies={lanes:0,firstContext:t}}else Jr=Jr.next=t;return e}var lr=null;function od(t){lr===null?lr=[t]:lr.push(t)}function Qy(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,od(e)):(n.next=i.next,i.next=n),e.interleaved=n,un(t,r)}function un(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var kn=!1;function ad(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function rn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Mn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(G&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,un(t,n)}return i=r.interleaved,i===null?(e.next=e,od(r)):(e.next=i.next,i.next=e),r.interleaved=e,un(t,n)}function pa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Kh(t,n)}}function Op(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Wa(t,e,n,r){var i=t.updateQueue;kn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,w=a;switch(d=e,m=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){h=y.call(m,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,d=typeof y=="function"?y.call(m,h,d):y,d==null)break e;h=le({},h,d);break e;case 2:kn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=h):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);kr|=o,t.lanes=o,t.memoizedState=h}}function Lp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Yy=new Qg.Component().refs;function Vc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Al={isMounted:function(t){return(t=t._reactInternals)?$r(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ze(),i=bn(t),s=rn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Mn(t,s,i),e!==null&&(xt(e,t,i,r),pa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ze(),i=bn(t),s=rn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Mn(t,s,i),e!==null&&(xt(e,t,i,r),pa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ze(),r=bn(t),i=rn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Mn(t,i,r),e!==null&&(xt(e,t,r,n),pa(e,t,r))}};function $p(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!xs(n,r)||!xs(i,s):!0}function Jy(t,e,n){var r=!1,i=Hn,s=e.contextType;return typeof s=="object"&&s!==null?s=kt(s):(i=at(e)?_r:He.current,r=e.contextTypes,s=(r=r!=null)?pi(t,i):Hn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Al,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Mp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Al.enqueueReplaceState(e,e.state,null)}function Bc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Yy,ad(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=kt(s):(s=at(e)?_r:He.current,i.context=pi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Vc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Al.enqueueReplaceState(i,i.state,null),Wa(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ki(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Yy&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function qo(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Up(t){var e=t._init;return e(t._payload)}function Zy(t){function e(p,f){if(t){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Fn(p,f),p.index=0,p.sibling=null,p}function s(p,f,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,g,v){return f===null||f.tag!==6?(f=Vu(g,p.mode,v),f.return=p,f):(f=i(f,g),f.return=p,f)}function l(p,f,g,v){var C=g.type;return C===Hr?c(p,f,g.props.children,v,g.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Sn&&Up(C)===f.type)?(v=i(f,g.props),v.ref=Ki(p,f,g),v.return=p,v):(v=_a(g.type,g.key,g.props,null,p.mode,v),v.ref=Ki(p,f,g),v.return=p,v)}function u(p,f,g,v){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Bu(g,p.mode,v),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function c(p,f,g,v,C){return f===null||f.tag!==7?(f=gr(g,p.mode,v,C),f.return=p,f):(f=i(f,g),f.return=p,f)}function h(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Vu(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Mo:return g=_a(f.type,f.key,f.props,null,p.mode,g),g.ref=Ki(p,null,f),g.return=p,g;case jr:return f=Bu(f,p.mode,g),f.return=p,f;case Sn:var v=f._init;return h(p,v(f._payload),g)}if(Zi(f)||Bi(f))return f=gr(f,p.mode,g,null),f.return=p,f;qo(p,f)}return null}function d(p,f,g,v){var C=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:a(p,f,""+g,v);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Mo:return g.key===C?l(p,f,g,v):null;case jr:return g.key===C?u(p,f,g,v):null;case Sn:return C=g._init,d(p,f,C(g._payload),v)}if(Zi(g)||Bi(g))return C!==null?null:c(p,f,g,v,null);qo(p,g)}return null}function m(p,f,g,v,C){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(g)||null,a(f,p,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Mo:return p=p.get(v.key===null?g:v.key)||null,l(f,p,v,C);case jr:return p=p.get(v.key===null?g:v.key)||null,u(f,p,v,C);case Sn:var R=v._init;return m(p,f,g,R(v._payload),C)}if(Zi(v)||Bi(v))return p=p.get(g)||null,c(f,p,v,C,null);qo(f,v)}return null}function y(p,f,g,v){for(var C=null,R=null,N=f,E=f=0,O=null;N!==null&&E<g.length;E++){N.index>E?(O=N,N=null):O=N.sibling;var $=d(p,N,g[E],v);if($===null){N===null&&(N=O);break}t&&N&&$.alternate===null&&e(p,N),f=s($,f,E),R===null?C=$:R.sibling=$,R=$,N=O}if(E===g.length)return n(p,N),ie&&ir(p,E),C;if(N===null){for(;E<g.length;E++)N=h(p,g[E],v),N!==null&&(f=s(N,f,E),R===null?C=N:R.sibling=N,R=N);return ie&&ir(p,E),C}for(N=r(p,N);E<g.length;E++)O=m(N,p,E,g[E],v),O!==null&&(t&&O.alternate!==null&&N.delete(O.key===null?E:O.key),f=s(O,f,E),R===null?C=O:R.sibling=O,R=O);return t&&N.forEach(function(ee){return e(p,ee)}),ie&&ir(p,E),C}function w(p,f,g,v){var C=Bi(g);if(typeof C!="function")throw Error(S(150));if(g=C.call(g),g==null)throw Error(S(151));for(var R=C=null,N=f,E=f=0,O=null,$=g.next();N!==null&&!$.done;E++,$=g.next()){N.index>E?(O=N,N=null):O=N.sibling;var ee=d(p,N,$.value,v);if(ee===null){N===null&&(N=O);break}t&&N&&ee.alternate===null&&e(p,N),f=s(ee,f,E),R===null?C=ee:R.sibling=ee,R=ee,N=O}if($.done)return n(p,N),ie&&ir(p,E),C;if(N===null){for(;!$.done;E++,$=g.next())$=h(p,$.value,v),$!==null&&(f=s($,f,E),R===null?C=$:R.sibling=$,R=$);return ie&&ir(p,E),C}for(N=r(p,N);!$.done;E++,$=g.next())$=m(N,p,E,$.value,v),$!==null&&(t&&$.alternate!==null&&N.delete($.key===null?E:$.key),f=s($,f,E),R===null?C=$:R.sibling=$,R=$);return t&&N.forEach(function(We){return e(p,We)}),ie&&ir(p,E),C}function T(p,f,g,v){if(typeof g=="object"&&g!==null&&g.type===Hr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Mo:e:{for(var C=g.key,R=f;R!==null;){if(R.key===C){if(C=g.type,C===Hr){if(R.tag===7){n(p,R.sibling),f=i(R,g.props.children),f.return=p,p=f;break e}}else if(R.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Sn&&Up(C)===R.type){n(p,R.sibling),f=i(R,g.props),f.ref=Ki(p,R,g),f.return=p,p=f;break e}n(p,R);break}else e(p,R);R=R.sibling}g.type===Hr?(f=gr(g.props.children,p.mode,v,g.key),f.return=p,p=f):(v=_a(g.type,g.key,g.props,null,p.mode,v),v.ref=Ki(p,f,g),v.return=p,p=v)}return o(p);case jr:e:{for(R=g.key;f!==null;){if(f.key===R)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Bu(g,p.mode,v),f.return=p,p=f}return o(p);case Sn:return R=g._init,T(p,f,R(g._payload),v)}if(Zi(g))return y(p,f,g,v);if(Bi(g))return w(p,f,g,v);qo(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=Vu(g,p.mode,v),f.return=p,p=f),o(p)):n(p,f)}return T}var gi=Zy(!0),ev=Zy(!1),io={},Ft=Jn(io),Ls=Jn(io),$s=Jn(io);function ur(t){if(t===io)throw Error(S(174));return t}function ld(t,e){switch(J($s,e),J(Ls,t),J(Ft,io),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:wc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=wc(e,t)}re(Ft),J(Ft,e)}function yi(){re(Ft),re(Ls),re($s)}function tv(t){ur($s.current);var e=ur(Ft.current),n=wc(e,t.type);e!==n&&(J(Ls,t),J(Ft,n))}function ud(t){Ls.current===t&&(re(Ft),re(Ls))}var oe=Jn(0);function Ka(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Lu=[];function cd(){for(var t=0;t<Lu.length;t++)Lu[t]._workInProgressVersionPrimary=null;Lu.length=0}var ma=gn.ReactCurrentDispatcher,$u=gn.ReactCurrentBatchConfig,Sr=0,ae=null,ve=null,Ie=null,qa=!1,cs=!1,Ms=0,mS=0;function Fe(){throw Error(S(321))}function hd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Pt(t[n],e[n]))return!1;return!0}function dd(t,e,n,r,i,s){if(Sr=s,ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ma.current=t===null||t.memoizedState===null?wS:_S,t=n(r,i),cs){s=0;do{if(cs=!1,Ms=0,25<=s)throw Error(S(301));s+=1,Ie=ve=null,e.updateQueue=null,ma.current=ES,t=n(r,i)}while(cs)}if(ma.current=Ga,e=ve!==null&&ve.next!==null,Sr=0,Ie=ve=ae=null,qa=!1,e)throw Error(S(300));return t}function fd(){var t=Ms!==0;return Ms=0,t}function $t(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?ae.memoizedState=Ie=t:Ie=Ie.next=t,Ie}function Tt(){if(ve===null){var t=ae.alternate;t=t!==null?t.memoizedState:null}else t=ve.next;var e=Ie===null?ae.memoizedState:Ie.next;if(e!==null)Ie=e,ve=t;else{if(t===null)throw Error(S(310));ve=t,t={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},Ie===null?ae.memoizedState=Ie=t:Ie=Ie.next=t}return Ie}function Us(t,e){return typeof e=="function"?e(t):e}function Mu(t){var e=Tt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=ve,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Sr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ae.lanes|=c,kr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Pt(r,e.memoizedState)||(st=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ae.lanes|=s,kr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Uu(t){var e=Tt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Pt(s,e.memoizedState)||(st=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function nv(){}function rv(t,e){var n=ae,r=Tt(),i=e(),s=!Pt(r.memoizedState,i);if(s&&(r.memoizedState=i,st=!0),r=r.queue,pd(ov.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ie!==null&&Ie.memoizedState.tag&1){if(n.flags|=2048,bs(9,sv.bind(null,n,r,i,e),void 0,null),Ce===null)throw Error(S(349));(Sr&30)!==0||iv(n,e,i)}return i}function iv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function sv(t,e,n,r){e.value=n,e.getSnapshot=r,av(e)&&lv(t)}function ov(t,e,n){return n(function(){av(e)&&lv(t)})}function av(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Pt(t,n)}catch{return!0}}function lv(t){var e=un(t,1);e!==null&&xt(e,t,1,-1)}function bp(t){var e=$t();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Us,lastRenderedState:t},e.queue=t,t=t.dispatch=vS.bind(null,ae,t),[e.memoizedState,t]}function bs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function uv(){return Tt().memoizedState}function ga(t,e,n,r){var i=$t();ae.flags|=t,i.memoizedState=bs(1|e,n,void 0,r===void 0?null:r)}function xl(t,e,n,r){var i=Tt();r=r===void 0?null:r;var s=void 0;if(ve!==null){var o=ve.memoizedState;if(s=o.destroy,r!==null&&hd(r,o.deps)){i.memoizedState=bs(e,n,s,r);return}}ae.flags|=t,i.memoizedState=bs(1|e,n,s,r)}function Fp(t,e){return ga(8390656,8,t,e)}function pd(t,e){return xl(2048,8,t,e)}function cv(t,e){return xl(4,2,t,e)}function hv(t,e){return xl(4,4,t,e)}function dv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function fv(t,e,n){return n=n!=null?n.concat([t]):null,xl(4,4,dv.bind(null,e,t),n)}function md(){}function pv(t,e){var n=Tt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&hd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function mv(t,e){var n=Tt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&hd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function gv(t,e,n){return(Sr&21)===0?(t.baseState&&(t.baseState=!1,st=!0),t.memoizedState=n):(Pt(n,e)||(n=wy(),ae.lanes|=n,kr|=n,t.baseState=!0),e)}function gS(t,e){var n=Y;Y=n!==0&&4>n?n:4,t(!0);var r=$u.transition;$u.transition={};try{t(!1),e()}finally{Y=n,$u.transition=r}}function yv(){return Tt().memoizedState}function yS(t,e,n){var r=bn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},vv(t))wv(e,n);else if(n=Qy(t,e,n,r),n!==null){var i=Ze();xt(n,t,r,i),_v(n,e,r)}}function vS(t,e,n){var r=bn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(vv(t))wv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Pt(a,o)){var l=e.interleaved;l===null?(i.next=i,od(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Qy(t,e,i,r),n!==null&&(i=Ze(),xt(n,t,r,i),_v(n,e,r))}}function vv(t){var e=t.alternate;return t===ae||e!==null&&e===ae}function wv(t,e){cs=qa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function _v(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Kh(t,n)}}var Ga={readContext:kt,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useInsertionEffect:Fe,useLayoutEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useMutableSource:Fe,useSyncExternalStore:Fe,useId:Fe,unstable_isNewReconciler:!1},wS={readContext:kt,useCallback:function(t,e){return $t().memoizedState=[t,e===void 0?null:e],t},useContext:kt,useEffect:Fp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ga(4194308,4,dv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ga(4194308,4,t,e)},useInsertionEffect:function(t,e){return ga(4,2,t,e)},useMemo:function(t,e){var n=$t();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=$t();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=yS.bind(null,ae,t),[r.memoizedState,t]},useRef:function(t){var e=$t();return t={current:t},e.memoizedState=t},useState:bp,useDebugValue:md,useDeferredValue:function(t){return $t().memoizedState=t},useTransition:function(){var t=bp(!1),e=t[0];return t=gS.bind(null,t[1]),$t().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ae,i=$t();if(ie){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),Ce===null)throw Error(S(349));(Sr&30)!==0||iv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Fp(ov.bind(null,r,s,t),[t]),r.flags|=2048,bs(9,sv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=$t(),e=Ce.identifierPrefix;if(ie){var n=Zt,r=Jt;n=(r&~(1<<32-At(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ms++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=mS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},_S={readContext:kt,useCallback:pv,useContext:kt,useEffect:pd,useImperativeHandle:fv,useInsertionEffect:cv,useLayoutEffect:hv,useMemo:mv,useReducer:Mu,useRef:uv,useState:function(){return Mu(Us)},useDebugValue:md,useDeferredValue:function(t){var e=Tt();return gv(e,ve.memoizedState,t)},useTransition:function(){var t=Mu(Us)[0],e=Tt().memoizedState;return[t,e]},useMutableSource:nv,useSyncExternalStore:rv,useId:yv,unstable_isNewReconciler:!1},ES={readContext:kt,useCallback:pv,useContext:kt,useEffect:pd,useImperativeHandle:fv,useInsertionEffect:cv,useLayoutEffect:hv,useMemo:mv,useReducer:Uu,useRef:uv,useState:function(){return Uu(Us)},useDebugValue:md,useDeferredValue:function(t){var e=Tt();return ve===null?e.memoizedState=t:gv(e,ve.memoizedState,t)},useTransition:function(){var t=Uu(Us)[0],e=Tt().memoizedState;return[t,e]},useMutableSource:nv,useSyncExternalStore:rv,useId:yv,unstable_isNewReconciler:!1};function vi(t,e){try{var n="",r=e;do n+=Q_(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function bu(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function zc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var SS=typeof WeakMap=="function"?WeakMap:Map;function Ev(t,e,n){n=rn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Xa||(Xa=!0,Jc=r),zc(t,e)},n}function Sv(t,e,n){n=rn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){zc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){zc(t,e),typeof r!="function"&&(Un===null?Un=new Set([this]):Un.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Vp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new SS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=MS.bind(null,t,e,n),e.then(t,t))}function Bp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function zp(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=rn(-1,1),e.tag=2,Mn(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var kS=gn.ReactCurrentOwner,st=!1;function Ge(t,e,n,r){e.child=t===null?ev(e,null,n,r):gi(e,t.child,n,r)}function jp(t,e,n,r,i){n=n.render;var s=e.ref;return ai(e,i),r=dd(t,e,n,r,s,i),n=fd(),t!==null&&!st?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,cn(t,e,i)):(ie&&n&&ed(e),e.flags|=1,Ge(t,e,r,i),e.child)}function Hp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!kd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,kv(t,e,s,r,i)):(t=_a(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:xs,n(o,r)&&t.ref===e.ref)return cn(t,e,i)}return e.flags|=1,t=Fn(s,r),t.ref=e.ref,t.return=e,e.child=t}function kv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(xs(s,r)&&t.ref===e.ref)if(st=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(st=!0);else return e.lanes=t.lanes,cn(t,e,i)}return jc(t,e,n,r,i)}function Tv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(ei,ct),ct|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,J(ei,ct),ct|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,J(ei,ct),ct|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,J(ei,ct),ct|=r;return Ge(t,e,i,n),e.child}function Iv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function jc(t,e,n,r,i){var s=at(n)?_r:He.current;return s=pi(e,s),ai(e,i),n=dd(t,e,n,r,s,i),r=fd(),t!==null&&!st?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,cn(t,e,i)):(ie&&r&&ed(e),e.flags|=1,Ge(t,e,n,i),e.child)}function Wp(t,e,n,r,i){if(at(n)){var s=!0;Va(e)}else s=!1;if(ai(e,i),e.stateNode===null)ya(t,e),Jy(e,n,r),Bc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=kt(u):(u=at(n)?_r:He.current,u=pi(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Mp(e,o,r,u),kn=!1;var d=e.memoizedState;o.state=d,Wa(e,r,o,i),l=e.memoizedState,a!==r||d!==l||ot.current||kn?(typeof c=="function"&&(Vc(e,n,c,r),l=e.memoizedState),(a=kn||$p(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Xy(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Ct(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=kt(l):(l=at(n)?_r:He.current,l=pi(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Mp(e,o,r,l),kn=!1,d=e.memoizedState,o.state=d,Wa(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||ot.current||kn?(typeof m=="function"&&(Vc(e,n,m,r),y=e.memoizedState),(u=kn||$p(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Hc(t,e,n,r,s,i)}function Hc(t,e,n,r,i,s){Iv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&xp(e,n,!1),cn(t,e,s);r=e.stateNode,kS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=gi(e,t.child,null,s),e.child=gi(e,null,a,s)):Ge(t,e,a,s),e.memoizedState=r.state,i&&xp(e,n,!0),e.child}function Cv(t){var e=t.stateNode;e.pendingContext?Ap(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ap(t,e.context,!1),ld(t,e.containerInfo)}function Kp(t,e,n,r,i){return mi(),nd(i),e.flags|=256,Ge(t,e,n,r),e.child}var Wc={dehydrated:null,treeContext:null,retryLane:0};function Kc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Rv(t,e,n){var r=e.pendingProps,i=oe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),J(oe,i&1),t===null)return bc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ol(o,r,0,null),t=gr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Kc(n),e.memoizedState=Wc,t):gd(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return TS(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Fn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Fn(a,s):(s=gr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Kc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Wc,r}return s=t.child,t=s.sibling,r=Fn(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function gd(t,e){return e=Ol({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Go(t,e,n,r){return r!==null&&nd(r),gi(e,t.child,null,n),t=gd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function TS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=bu(Error(S(422))),Go(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ol({mode:"visible",children:r.children},i,0,null),s=gr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&gi(e,t.child,null,o),e.child.memoizedState=Kc(o),e.memoizedState=Wc,s);if((e.mode&1)===0)return Go(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(S(419)),r=bu(s,r,void 0),Go(t,e,o,r)}if(a=(o&t.childLanes)!==0,st||a){if(r=Ce,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,un(t,i),xt(r,t,i,-1))}return Sd(),r=bu(Error(S(421))),Go(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=US.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ht=$n(i.nextSibling),ft=e,ie=!0,Nt=null,t!==null&&(vt[wt++]=Jt,vt[wt++]=Zt,vt[wt++]=Er,Jt=t.id,Zt=t.overflow,Er=e),e=gd(e,r.children),e.flags|=4096,e)}function qp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Fc(t.return,e,n)}function Fu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Nv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ge(t,e,r.children,n),r=oe.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qp(t,n,e);else if(t.tag===19)qp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(J(oe,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ka(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Fu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ka(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Fu(e,!0,n,null,s);break;case"together":Fu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ya(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function cn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),kr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=Fn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Fn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function IS(t,e,n){switch(e.tag){case 3:Cv(e),mi();break;case 5:tv(e);break;case 1:at(e.type)&&Va(e);break;case 4:ld(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;J(ja,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(J(oe,oe.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?Rv(t,e,n):(J(oe,oe.current&1),t=cn(t,e,n),t!==null?t.sibling:null);J(oe,oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return Nv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),J(oe,oe.current),r)break;return null;case 22:case 23:return e.lanes=0,Tv(t,e,n)}return cn(t,e,n)}var Av,qc,xv,Dv;Av=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qc=function(){};xv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ur(Ft.current);var s=null;switch(n){case"input":i=mc(t,i),r=mc(t,r),s=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),s=[];break;case"textarea":i=vc(t,i),r=vc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ba)}_c(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ks.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ks.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&te("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Dv=function(t,e,n,r){n!==r&&(e.flags|=4)};function qi(t,e){if(!ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ve(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function CS(t,e,n){var r=e.pendingProps;switch(td(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(e),null;case 1:return at(e.type)&&Fa(),Ve(e),null;case 3:return r=e.stateNode,yi(),re(ot),re(He),cd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ko(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Nt!==null&&(th(Nt),Nt=null))),qc(t,e),Ve(e),null;case 5:ud(e);var i=ur($s.current);if(n=e.type,t!==null&&e.stateNode!=null)xv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return Ve(e),null}if(t=ur(Ft.current),Ko(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Mt]=e,r[Os]=s,t=(e.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(i=0;i<ts.length;i++)te(ts[i],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":np(r,s),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},te("invalid",r);break;case"textarea":ip(r,s),te("invalid",r)}_c(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Wo(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Wo(r.textContent,a,t),i=["children",""+a]):ks.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&te("scroll",r)}switch(n){case"input":Uo(r),rp(r,s,!0);break;case"textarea":Uo(r),sp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ba)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=iy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Mt]=e,t[Os]=r,Av(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ec(n,r),n){case"dialog":te("cancel",t),te("close",t),i=r;break;case"iframe":case"object":case"embed":te("load",t),i=r;break;case"video":case"audio":for(i=0;i<ts.length;i++)te(ts[i],t);i=r;break;case"source":te("error",t),i=r;break;case"img":case"image":case"link":te("error",t),te("load",t),i=r;break;case"details":te("toggle",t),i=r;break;case"input":np(t,r),i=mc(t,r),te("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),te("invalid",t);break;case"textarea":ip(t,r),i=vc(t,r),te("invalid",t);break;default:i=r}_c(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ay(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&sy(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ts(t,l):typeof l=="number"&&Ts(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ks.hasOwnProperty(s)?l!=null&&s==="onScroll"&&te("scroll",t):l!=null&&Vh(t,s,l,o))}switch(n){case"input":Uo(t),rp(t,r,!1);break;case"textarea":Uo(t),sp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+jn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ri(t,!!r.multiple,s,!1):r.defaultValue!=null&&ri(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ba)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ve(e),null;case 6:if(t&&e.stateNode!=null)Dv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=ur($s.current),ur(Ft.current),Ko(e)){if(r=e.stateNode,n=e.memoizedProps,r[Mt]=e,(s=r.nodeValue!==n)&&(t=ft,t!==null))switch(t.tag){case 3:Wo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Wo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Mt]=e,e.stateNode=r}return Ve(e),null;case 13:if(re(oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ie&&ht!==null&&(e.mode&1)!==0&&(e.flags&128)===0)Gy(),mi(),e.flags|=98560,s=!1;else if(s=Ko(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[Mt]=e}else mi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ve(e),s=!1}else Nt!==null&&(th(Nt),Nt=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(oe.current&1)!==0?we===0&&(we=3):Sd())),e.updateQueue!==null&&(e.flags|=4),Ve(e),null);case 4:return yi(),qc(t,e),t===null&&Ds(e.stateNode.containerInfo),Ve(e),null;case 10:return sd(e.type._context),Ve(e),null;case 17:return at(e.type)&&Fa(),Ve(e),null;case 19:if(re(oe),s=e.memoizedState,s===null)return Ve(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)qi(s,!1);else{if(we!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Ka(t),o!==null){for(e.flags|=128,qi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return J(oe,oe.current&1|2),e.child}t=t.sibling}s.tail!==null&&de()>wi&&(e.flags|=128,r=!0,qi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ka(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),qi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ie)return Ve(e),null}else 2*de()-s.renderingStartTime>wi&&n!==1073741824&&(e.flags|=128,r=!0,qi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=de(),e.sibling=null,n=oe.current,J(oe,r?n&1|2:n&1),e):(Ve(e),null);case 22:case 23:return Ed(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(ct&1073741824)!==0&&(Ve(e),e.subtreeFlags&6&&(e.flags|=8192)):Ve(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function RS(t,e){switch(td(e),e.tag){case 1:return at(e.type)&&Fa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return yi(),re(ot),re(He),cd(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return ud(e),null;case 13:if(re(oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));mi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return re(oe),null;case 4:return yi(),null;case 10:return sd(e.type._context),null;case 22:case 23:return Ed(),null;case 24:return null;default:return null}}var Qo=!1,Be=!1,NS=typeof WeakSet=="function"?WeakSet:Set,A=null;function Zr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ue(t,e,r)}else n.current=null}function Gc(t,e,n){try{n()}catch(r){ue(t,e,r)}}var Gp=!1;function AS(t,e){if(Dc=$a,t=$y(),Zh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var m;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pc={focusedElem:t,selectionRange:n},$a=!1,A=e;A!==null;)if(e=A,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,A=t;else for(;A!==null;){e=A;try{var y=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,T=y.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?w:Ct(e.type,w),T);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(v){ue(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,A=t;break}A=e.return}return y=Gp,Gp=!1,y}function hs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Gc(e,n,s)}i=i.next}while(i!==r)}}function Dl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Qc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Pv(t){var e=t.alternate;e!==null&&(t.alternate=null,Pv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Mt],delete e[Os],delete e[$c],delete e[hS],delete e[dS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ov(t){return t.tag===5||t.tag===3||t.tag===4}function Qp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ov(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ba));else if(r!==4&&(t=t.child,t!==null))for(Xc(t,e,n),t=t.sibling;t!==null;)Xc(t,e,n),t=t.sibling}function Yc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Yc(t,e,n),t=t.sibling;t!==null;)Yc(t,e,n),t=t.sibling}var xe=null,Rt=!1;function wn(t,e,n){for(n=n.child;n!==null;)Lv(t,e,n),n=n.sibling}function Lv(t,e,n){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(kl,n)}catch{}switch(n.tag){case 5:Be||Zr(n,e);case 6:var r=xe,i=Rt;xe=null,wn(t,e,n),xe=r,Rt=i,xe!==null&&(Rt?(t=xe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):xe.removeChild(n.stateNode));break;case 18:xe!==null&&(Rt?(t=xe,n=n.stateNode,t.nodeType===8?Pu(t.parentNode,n):t.nodeType===1&&Pu(t,n),Ns(t)):Pu(xe,n.stateNode));break;case 4:r=xe,i=Rt,xe=n.stateNode.containerInfo,Rt=!0,wn(t,e,n),xe=r,Rt=i;break;case 0:case 11:case 14:case 15:if(!Be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Gc(n,e,o),i=i.next}while(i!==r)}wn(t,e,n);break;case 1:if(!Be&&(Zr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ue(n,e,a)}wn(t,e,n);break;case 21:wn(t,e,n);break;case 22:n.mode&1?(Be=(r=Be)||n.memoizedState!==null,wn(t,e,n),Be=r):wn(t,e,n);break;default:wn(t,e,n)}}function Xp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new NS),e.forEach(function(r){var i=bS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function It(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:xe=a.stateNode,Rt=!1;break e;case 3:xe=a.stateNode.containerInfo,Rt=!0;break e;case 4:xe=a.stateNode.containerInfo,Rt=!0;break e}a=a.return}if(xe===null)throw Error(S(160));Lv(s,o,i),xe=null,Rt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ue(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$v(e,t),e=e.sibling}function $v(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(It(e,t),Lt(t),r&4){try{hs(3,t,t.return),Dl(3,t)}catch(w){ue(t,t.return,w)}try{hs(5,t,t.return)}catch(w){ue(t,t.return,w)}}break;case 1:It(e,t),Lt(t),r&512&&n!==null&&Zr(n,n.return);break;case 5:if(It(e,t),Lt(t),r&512&&n!==null&&Zr(n,n.return),t.flags&32){var i=t.stateNode;try{Ts(i,"")}catch(w){ue(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&ny(i,s),Ec(a,o);var u=Ec(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?ay(i,h):c==="dangerouslySetInnerHTML"?sy(i,h):c==="children"?Ts(i,h):Vh(i,c,h,u)}switch(a){case"input":gc(i,s);break;case"textarea":ry(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ri(i,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?ri(i,!!s.multiple,s.defaultValue,!0):ri(i,!!s.multiple,s.multiple?[]:"",!1))}i[Os]=s}catch(w){ue(t,t.return,w)}}break;case 6:if(It(e,t),Lt(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){ue(t,t.return,w)}}break;case 3:if(It(e,t),Lt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ns(e.containerInfo)}catch(w){ue(t,t.return,w)}break;case 4:It(e,t),Lt(t);break;case 13:It(e,t),Lt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(wd=de())),r&4&&Xp(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Be=(u=Be)||c,It(e,t),Be=u):It(e,t),Lt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(A=t,c=t.child;c!==null;){for(h=A=c;A!==null;){switch(d=A,m=d.child,d.tag){case 0:case 11:case 14:case 15:hs(4,d,d.return);break;case 1:Zr(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(w){ue(r,n,w)}}break;case 5:Zr(d,d.return);break;case 22:if(d.memoizedState!==null){Jp(h);continue}}m!==null?(m.return=d,A=m):Jp(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=oy("display",o))}catch(w){ue(t,t.return,w)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(w){ue(t,t.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:It(e,t),Lt(t),r&4&&Xp(t);break;case 21:break;default:It(e,t),Lt(t)}}function Lt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ov(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ts(i,""),r.flags&=-33);var s=Qp(t);Yc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Qp(t);Xc(t,a,o);break;default:throw Error(S(161))}}catch(l){ue(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function xS(t,e,n){A=t,Mv(t)}function Mv(t,e,n){for(var r=(t.mode&1)!==0;A!==null;){var i=A,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Qo;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Be;a=Qo;var u=Be;if(Qo=o,(Be=l)&&!u)for(A=i;A!==null;)o=A,l=o.child,o.tag===22&&o.memoizedState!==null?Zp(i):l!==null?(l.return=o,A=l):Zp(i);for(;s!==null;)A=s,Mv(s),s=s.sibling;A=i,Qo=a,Be=u}Yp(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,A=s):Yp(t)}}function Yp(t){for(;A!==null;){var e=A;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Be||Dl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Be)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ct(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Lp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Lp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Ns(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Be||e.flags&512&&Qc(e)}catch(d){ue(e,e.return,d)}}if(e===t){A=null;break}if(n=e.sibling,n!==null){n.return=e.return,A=n;break}A=e.return}}function Jp(t){for(;A!==null;){var e=A;if(e===t){A=null;break}var n=e.sibling;if(n!==null){n.return=e.return,A=n;break}A=e.return}}function Zp(t){for(;A!==null;){var e=A;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Dl(4,e)}catch(l){ue(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ue(e,i,l)}}var s=e.return;try{Qc(e)}catch(l){ue(e,s,l)}break;case 5:var o=e.return;try{Qc(e)}catch(l){ue(e,o,l)}}}catch(l){ue(e,e.return,l)}if(e===t){A=null;break}var a=e.sibling;if(a!==null){a.return=e.return,A=a;break}A=e.return}}var DS=Math.ceil,Qa=gn.ReactCurrentDispatcher,yd=gn.ReactCurrentOwner,St=gn.ReactCurrentBatchConfig,G=0,Ce=null,ge=null,Oe=0,ct=0,ei=Jn(0),we=0,Fs=null,kr=0,Pl=0,vd=0,ds=null,it=null,wd=0,wi=1/0,Qt=null,Xa=!1,Jc=null,Un=null,Xo=!1,Dn=null,Ya=0,fs=0,Zc=null,va=-1,wa=0;function Ze(){return(G&6)!==0?de():va!==-1?va:va=de()}function bn(t){return(t.mode&1)===0?1:(G&2)!==0&&Oe!==0?Oe&-Oe:pS.transition!==null?(wa===0&&(wa=wy()),wa):(t=Y,t!==0||(t=window.event,t=t===void 0?16:Cy(t.type)),t)}function xt(t,e,n,r){if(50<fs)throw fs=0,Zc=null,Error(S(185));to(t,n,r),((G&2)===0||t!==Ce)&&(t===Ce&&((G&2)===0&&(Pl|=n),we===4&&In(t,Oe)),lt(t,r),n===1&&G===0&&(e.mode&1)===0&&(wi=de()+500,Nl&&Zn()))}function lt(t,e){var n=t.callbackNode;pE(t,e);var r=La(t,t===Ce?Oe:0);if(r===0)n!==null&&lp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&lp(n),e===1)t.tag===0?fS(em.bind(null,t)):Wy(em.bind(null,t)),uS(function(){(G&6)===0&&Zn()}),n=null;else{switch(_y(r)){case 1:n=Wh;break;case 4:n=yy;break;case 16:n=Oa;break;case 536870912:n=vy;break;default:n=Oa}n=Hv(n,Uv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Uv(t,e){if(va=-1,wa=0,(G&6)!==0)throw Error(S(327));var n=t.callbackNode;if(li()&&t.callbackNode!==n)return null;var r=La(t,t===Ce?Oe:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=Ja(t,r);else{e=r;var i=G;G|=2;var s=Fv();(Ce!==t||Oe!==e)&&(Qt=null,wi=de()+500,mr(t,e));do try{LS();break}catch(a){bv(t,a)}while(1);id(),Qa.current=s,G=i,ge!==null?e=0:(Ce=null,Oe=0,e=we)}if(e!==0){if(e===2&&(i=Cc(t),i!==0&&(r=i,e=eh(t,i))),e===1)throw n=Fs,mr(t,0),In(t,r),lt(t,de()),n;if(e===6)In(t,r);else{if(i=t.current.alternate,(r&30)===0&&!PS(i)&&(e=Ja(t,r),e===2&&(s=Cc(t),s!==0&&(r=s,e=eh(t,s))),e===1))throw n=Fs,mr(t,0),In(t,r),lt(t,de()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:sr(t,it,Qt);break;case 3:if(In(t,r),(r&130023424)===r&&(e=wd+500-de(),10<e)){if(La(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ze(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Lc(sr.bind(null,t,it,Qt),e);break}sr(t,it,Qt);break;case 4:if(In(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-At(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*DS(r/1960))-r,10<r){t.timeoutHandle=Lc(sr.bind(null,t,it,Qt),r);break}sr(t,it,Qt);break;case 5:sr(t,it,Qt);break;default:throw Error(S(329))}}}return lt(t,de()),t.callbackNode===n?Uv.bind(null,t):null}function eh(t,e){var n=ds;return t.current.memoizedState.isDehydrated&&(mr(t,e).flags|=256),t=Ja(t,e),t!==2&&(e=it,it=n,e!==null&&th(e)),t}function th(t){it===null?it=t:it.push.apply(it,t)}function PS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Pt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function In(t,e){for(e&=~vd,e&=~Pl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-At(e),r=1<<n;t[n]=-1,e&=~r}}function em(t){if((G&6)!==0)throw Error(S(327));li();var e=La(t,0);if((e&1)===0)return lt(t,de()),null;var n=Ja(t,e);if(t.tag!==0&&n===2){var r=Cc(t);r!==0&&(e=r,n=eh(t,r))}if(n===1)throw n=Fs,mr(t,0),In(t,e),lt(t,de()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,sr(t,it,Qt),lt(t,de()),null}function _d(t,e){var n=G;G|=1;try{return t(e)}finally{G=n,G===0&&(wi=de()+500,Nl&&Zn())}}function Tr(t){Dn!==null&&Dn.tag===0&&(G&6)===0&&li();var e=G;G|=1;var n=St.transition,r=Y;try{if(St.transition=null,Y=1,t)return t()}finally{Y=r,St.transition=n,G=e,(G&6)===0&&Zn()}}function Ed(){ct=ei.current,re(ei)}function mr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,lS(n)),ge!==null)for(n=ge.return;n!==null;){var r=n;switch(td(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fa();break;case 3:yi(),re(ot),re(He),cd();break;case 5:ud(r);break;case 4:yi();break;case 13:re(oe);break;case 19:re(oe);break;case 10:sd(r.type._context);break;case 22:case 23:Ed()}n=n.return}if(Ce=t,ge=t=Fn(t.current,null),Oe=ct=e,we=0,Fs=null,vd=Pl=kr=0,it=ds=null,lr!==null){for(e=0;e<lr.length;e++)if(n=lr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}lr=null}return t}function bv(t,e){do{var n=ge;try{if(id(),ma.current=Ga,qa){for(var r=ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}qa=!1}if(Sr=0,Ie=ve=ae=null,cs=!1,Ms=0,yd.current=null,n===null||n.return===null){we=1,Fs=e,ge=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Oe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Bp(o);if(m!==null){m.flags&=-257,zp(m,o,a,s,e),m.mode&1&&Vp(s,u,e),e=m,l=u;var y=e.updateQueue;if(y===null){var w=new Set;w.add(l),e.updateQueue=w}else y.add(l);break e}else{if((e&1)===0){Vp(s,u,e),Sd();break e}l=Error(S(426))}}else if(ie&&a.mode&1){var T=Bp(o);if(T!==null){(T.flags&65536)===0&&(T.flags|=256),zp(T,o,a,s,e),nd(vi(l,a));break e}}s=l=vi(l,a),we!==4&&(we=2),ds===null?ds=[s]:ds.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Ev(s,l,e);Op(s,p);break e;case 1:a=l;var f=s.type,g=s.stateNode;if((s.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Un===null||!Un.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=Sv(s,a,e);Op(s,v);break e}}s=s.return}while(s!==null)}Bv(n)}catch(C){e=C,ge===n&&n!==null&&(ge=n=n.return);continue}break}while(1)}function Fv(){var t=Qa.current;return Qa.current=Ga,t===null?Ga:t}function Sd(){(we===0||we===3||we===2)&&(we=4),Ce===null||(kr&268435455)===0&&(Pl&268435455)===0||In(Ce,Oe)}function Ja(t,e){var n=G;G|=2;var r=Fv();(Ce!==t||Oe!==e)&&(Qt=null,mr(t,e));do try{OS();break}catch(i){bv(t,i)}while(1);if(id(),G=n,Qa.current=r,ge!==null)throw Error(S(261));return Ce=null,Oe=0,we}function OS(){for(;ge!==null;)Vv(ge)}function LS(){for(;ge!==null&&!sE();)Vv(ge)}function Vv(t){var e=jv(t.alternate,t,ct);t.memoizedProps=t.pendingProps,e===null?Bv(t):ge=e,yd.current=null}function Bv(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=CS(n,e,ct),n!==null){ge=n;return}}else{if(n=RS(n,e),n!==null){n.flags&=32767,ge=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{we=6,ge=null;return}}if(e=e.sibling,e!==null){ge=e;return}ge=e=t}while(e!==null);we===0&&(we=5)}function sr(t,e,n){var r=Y,i=St.transition;try{St.transition=null,Y=1,$S(t,e,n,r)}finally{St.transition=i,Y=r}return null}function $S(t,e,n,r){do li();while(Dn!==null);if((G&6)!==0)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(mE(t,s),t===Ce&&(ge=Ce=null,Oe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Xo||(Xo=!0,Hv(Oa,function(){return li(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=St.transition,St.transition=null;var o=Y;Y=1;var a=G;G|=4,yd.current=null,AS(t,n),$v(n,t),tS(Pc),$a=!!Dc,Pc=Dc=null,t.current=n,xS(n),oE(),G=a,Y=o,St.transition=s}else t.current=n;if(Xo&&(Xo=!1,Dn=t,Ya=i),s=t.pendingLanes,s===0&&(Un=null),uE(n.stateNode),lt(t,de()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Xa)throw Xa=!1,t=Jc,Jc=null,t;return(Ya&1)!==0&&t.tag!==0&&li(),s=t.pendingLanes,(s&1)!==0?t===Zc?fs++:(fs=0,Zc=t):fs=0,Zn(),null}function li(){if(Dn!==null){var t=_y(Ya),e=St.transition,n=Y;try{if(St.transition=null,Y=16>t?16:t,Dn===null)var r=!1;else{if(t=Dn,Dn=null,Ya=0,(G&6)!==0)throw Error(S(331));var i=G;for(G|=4,A=t.current;A!==null;){var s=A,o=s.child;if((A.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(A=u;A!==null;){var c=A;switch(c.tag){case 0:case 11:case 15:hs(8,c,s)}var h=c.child;if(h!==null)h.return=c,A=h;else for(;A!==null;){c=A;var d=c.sibling,m=c.return;if(Pv(c),c===u){A=null;break}if(d!==null){d.return=m,A=d;break}A=m}}}var y=s.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var T=w.sibling;w.sibling=null,w=T}while(w!==null)}}A=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,A=o;else e:for(;A!==null;){if(s=A,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:hs(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,A=p;break e}A=s.return}}var f=t.current;for(A=f;A!==null;){o=A;var g=o.child;if((o.subtreeFlags&2064)!==0&&g!==null)g.return=o,A=g;else e:for(o=f;A!==null;){if(a=A,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Dl(9,a)}}catch(C){ue(a,a.return,C)}if(a===o){A=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,A=v;break e}A=a.return}}if(G=i,Zn(),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(kl,t)}catch{}r=!0}return r}finally{Y=n,St.transition=e}}return!1}function tm(t,e,n){e=vi(n,e),e=Ev(t,e,1),t=Mn(t,e,1),e=Ze(),t!==null&&(to(t,1,e),lt(t,e))}function ue(t,e,n){if(t.tag===3)tm(t,t,n);else for(;e!==null;){if(e.tag===3){tm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Un===null||!Un.has(r))){t=vi(n,t),t=Sv(e,t,1),e=Mn(e,t,1),t=Ze(),e!==null&&(to(e,1,t),lt(e,t));break}}e=e.return}}function MS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ze(),t.pingedLanes|=t.suspendedLanes&n,Ce===t&&(Oe&n)===n&&(we===4||we===3&&(Oe&130023424)===Oe&&500>de()-wd?mr(t,0):vd|=n),lt(t,e)}function zv(t,e){e===0&&((t.mode&1)===0?e=1:(e=Vo,Vo<<=1,(Vo&130023424)===0&&(Vo=4194304)));var n=Ze();t=un(t,e),t!==null&&(to(t,e,n),lt(t,n))}function US(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),zv(t,n)}function bS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),zv(t,n)}var jv;jv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ot.current)st=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return st=!1,IS(t,e,n);st=(t.flags&131072)!==0}else st=!1,ie&&(e.flags&1048576)!==0&&Ky(e,za,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ya(t,e),t=e.pendingProps;var i=pi(e,He.current);ai(e,n),i=dd(null,e,r,t,i,n);var s=fd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,at(r)?(s=!0,Va(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ad(e),i.updater=Al,e.stateNode=i,i._reactInternals=e,Bc(e,r,t,n),e=Hc(null,e,r,!0,s,n)):(e.tag=0,ie&&s&&ed(e),Ge(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ya(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=VS(r),t=Ct(r,t),i){case 0:e=jc(null,e,r,t,n);break e;case 1:e=Wp(null,e,r,t,n);break e;case 11:e=jp(null,e,r,t,n);break e;case 14:e=Hp(null,e,r,Ct(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ct(r,i),jc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ct(r,i),Wp(t,e,r,i,n);case 3:e:{if(Cv(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Xy(t,e),Wa(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=vi(Error(S(423)),e),e=Kp(t,e,r,n,i);break e}else if(r!==i){i=vi(Error(S(424)),e),e=Kp(t,e,r,n,i);break e}else for(ht=$n(e.stateNode.containerInfo.firstChild),ft=e,ie=!0,Nt=null,n=ev(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mi(),r===i){e=cn(t,e,n);break e}Ge(t,e,r,n)}e=e.child}return e;case 5:return tv(e),t===null&&bc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Oc(r,i)?o=null:s!==null&&Oc(r,s)&&(e.flags|=32),Iv(t,e),Ge(t,e,o,n),e.child;case 6:return t===null&&bc(e),null;case 13:return Rv(t,e,n);case 4:return ld(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=gi(e,null,r,n):Ge(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ct(r,i),jp(t,e,r,i,n);case 7:return Ge(t,e,e.pendingProps,n),e.child;case 8:return Ge(t,e,e.pendingProps.children,n),e.child;case 12:return Ge(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,J(ja,r._currentValue),r._currentValue=o,s!==null)if(Pt(s.value,o)){if(s.children===i.children&&!ot.current){e=cn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=rn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Fc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Fc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ge(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ai(e,n),i=kt(i),r=r(i),e.flags|=1,Ge(t,e,r,n),e.child;case 14:return r=e.type,i=Ct(r,e.pendingProps),i=Ct(r.type,i),Hp(t,e,r,i,n);case 15:return kv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ct(r,i),ya(t,e),e.tag=1,at(r)?(t=!0,Va(e)):t=!1,ai(e,n),Jy(e,r,i),Bc(e,r,i,n),Hc(null,e,r,!0,t,n);case 19:return Nv(t,e,n);case 22:return Tv(t,e,n)}throw Error(S(156,e.tag))};function Hv(t,e){return gy(t,e)}function FS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Et(t,e,n,r){return new FS(t,e,n,r)}function kd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function VS(t){if(typeof t=="function")return kd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===zh)return 11;if(t===jh)return 14}return 2}function Fn(t,e){var n=t.alternate;return n===null?(n=Et(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function _a(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")kd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Hr:return gr(n.children,i,s,e);case Bh:o=8,i|=8;break;case hc:return t=Et(12,n,e,i|2),t.elementType=hc,t.lanes=s,t;case dc:return t=Et(13,n,e,i),t.elementType=dc,t.lanes=s,t;case fc:return t=Et(19,n,e,i),t.elementType=fc,t.lanes=s,t;case Zg:return Ol(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Yg:o=10;break e;case Jg:o=9;break e;case zh:o=11;break e;case jh:o=14;break e;case Sn:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=Et(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function gr(t,e,n,r){return t=Et(7,t,r,e),t.lanes=n,t}function Ol(t,e,n,r){return t=Et(22,t,r,e),t.elementType=Zg,t.lanes=n,t.stateNode={isHidden:!1},t}function Vu(t,e,n){return t=Et(6,t,null,e),t.lanes=n,t}function Bu(t,e,n){return e=Et(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function BS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Eu(0),this.expirationTimes=Eu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Eu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Td(t,e,n,r,i,s,o,a,l){return t=new BS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Et(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ad(s),t}function zS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:jr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Wv(t){if(!t)return Hn;t=t._reactInternals;e:{if($r(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(at(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(at(n))return Hy(t,n,e)}return e}function Kv(t,e,n,r,i,s,o,a,l){return t=Td(n,r,!0,t,i,s,o,a,l),t.context=Wv(null),n=t.current,r=Ze(),i=bn(n),s=rn(r,i),s.callback=e!=null?e:null,Mn(n,s,i),t.current.lanes=i,to(t,i,r),lt(t,r),t}function Ll(t,e,n,r){var i=e.current,s=Ze(),o=bn(i);return n=Wv(n),e.context===null?e.context=n:e.pendingContext=n,e=rn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Mn(i,e,o),t!==null&&(xt(t,i,o,s),pa(t,i,o)),o}function Za(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function nm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Id(t,e){nm(t,e),(t=t.alternate)&&nm(t,e)}function jS(){return null}var qv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Cd(t){this._internalRoot=t}$l.prototype.render=Cd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));Ll(t,e,null,null)};$l.prototype.unmount=Cd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Tr(function(){Ll(null,t,null,null)}),e[ln]=null}};function $l(t){this._internalRoot=t}$l.prototype.unstable_scheduleHydration=function(t){if(t){var e=ky();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Tn.length&&e!==0&&e<Tn[n].priority;n++);Tn.splice(n,0,t),n===0&&Iy(t)}};function Rd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ml(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function rm(){}function HS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Za(o);s.call(u)}}var o=Kv(e,r,t,0,null,!1,!1,"",rm);return t._reactRootContainer=o,t[ln]=o.current,Ds(t.nodeType===8?t.parentNode:t),Tr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Za(l);a.call(u)}}var l=Td(t,0,!1,null,null,!1,!1,"",rm);return t._reactRootContainer=l,t[ln]=l.current,Ds(t.nodeType===8?t.parentNode:t),Tr(function(){Ll(e,l,n,r)}),l}function Ul(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Za(o);a.call(l)}}Ll(e,o,t,i)}else o=HS(n,e,t,i,r);return Za(o)}Ey=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=es(e.pendingLanes);n!==0&&(Kh(e,n|1),lt(e,de()),(G&6)===0&&(wi=de()+500,Zn()))}break;case 13:Tr(function(){var r=un(t,1);if(r!==null){var i=Ze();xt(r,t,1,i)}}),Id(t,1)}};qh=function(t){if(t.tag===13){var e=un(t,134217728);if(e!==null){var n=Ze();xt(e,t,134217728,n)}Id(t,134217728)}};Sy=function(t){if(t.tag===13){var e=bn(t),n=un(t,e);if(n!==null){var r=Ze();xt(n,t,e,r)}Id(t,e)}};ky=function(){return Y};Ty=function(t,e){var n=Y;try{return Y=t,e()}finally{Y=n}};kc=function(t,e,n){switch(e){case"input":if(gc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Rl(r);if(!i)throw Error(S(90));ty(r),gc(r,i)}}}break;case"textarea":ry(t,n);break;case"select":e=n.value,e!=null&&ri(t,!!n.multiple,e,!1)}};cy=_d;hy=Tr;var WS={usingClientEntryPoint:!1,Events:[ro,Gr,Rl,ly,uy,_d]},Gi={findFiberByHostInstance:ar,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},KS={bundleType:Gi.bundleType,version:Gi.version,rendererPackageName:Gi.rendererPackageName,rendererConfig:Gi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=py(t),t===null?null:t.stateNode},findFiberByHostInstance:Gi.findFiberByHostInstance||jS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yo.isDisabled&&Yo.supportsFiber)try{kl=Yo.inject(KS),bt=Yo}catch{}}gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=WS;gt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rd(e))throw Error(S(200));return zS(t,e,null,n)};gt.createRoot=function(t,e){if(!Rd(t))throw Error(S(299));var n=!1,r="",i=qv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Td(t,1,!1,null,null,n,!1,r,i),t[ln]=e.current,Ds(t.nodeType===8?t.parentNode:t),new Cd(e)};gt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=py(e),t=t===null?null:t.stateNode,t};gt.flushSync=function(t){return Tr(t)};gt.hydrate=function(t,e,n){if(!Ml(e))throw Error(S(200));return Ul(null,t,e,!0,n)};gt.hydrateRoot=function(t,e,n){if(!Rd(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=qv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Kv(e,null,t,1,n!=null?n:null,i,!1,s,o),t[ln]=e.current,Ds(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new $l(e)};gt.render=function(t,e,n){if(!Ml(e))throw Error(S(200));return Ul(null,t,e,!1,n)};gt.unmountComponentAtNode=function(t){if(!Ml(t))throw Error(S(40));return t._reactRootContainer?(Tr(function(){Ul(null,null,t,!1,function(){t._reactRootContainer=null,t[ln]=null})}),!0):!1};gt.unstable_batchedUpdates=_d;gt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ml(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return Ul(t,e,n,!1,r)};gt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=gt})(Kg);var im=Kg.exports;uc.createRoot=im.createRoot,uc.hydrateRoot=im.hydrateRoot;var bl={exports:{}},Fl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qS=L.exports,GS=Symbol.for("react.element"),QS=Symbol.for("react.fragment"),XS=Object.prototype.hasOwnProperty,YS=qS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,JS={key:!0,ref:!0,__self:!0,__source:!0};function Gv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)XS.call(e,r)&&!JS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:GS,type:t,key:s,ref:o,props:i,_owner:YS.current}}Fl.Fragment=QS;Fl.jsx=Gv;Fl.jsxs=Gv;(function(t){t.exports=Fl})(bl);const Jo=bl.exports.Fragment,I=bl.exports.jsx,ce=bl.exports.jsxs;function el(){return el=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},el.apply(this,arguments)}var cr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(cr||(cr={}));var sm=function(t){return t},om="beforeunload",ZS="hashchange",ek="popstate";function tk(t){t===void 0&&(t={});var e=t,n=e.window,r=n===void 0?document.defaultView:n,i=r.history;function s(){var E=Wn(r.location.hash.substr(1)),O=E.pathname,$=O===void 0?"/":O,ee=E.search,We=ee===void 0?"":ee,Ke=E.hash,vn=Ke===void 0?"":Ke,Ot=i.state||{};return[Ot.idx,sm({pathname:$,search:We,hash:vn,state:Ot.usr||null,key:Ot.key||"default"})]}var o=null;function a(){if(o)m.call(o),o=null;else{var E=cr.Pop,O=s(),$=O[0],ee=O[1];if(m.length){if($!=null){var We=c-$;We&&(o={action:E,location:ee,retry:function(){R(We*-1)}},R(We))}}else g(E)}}r.addEventListener(ek,a),r.addEventListener(ZS,function(){var E=s(),O=E[1];ps(O)!==ps(h)&&a()});var l=cr.Pop,u=s(),c=u[0],h=u[1],d=lm(),m=lm();c==null&&(c=0,i.replaceState(el({},i.state,{idx:c}),""));function y(){var E=document.querySelector("base"),O="";if(E&&E.getAttribute("href")){var $=r.location.href,ee=$.indexOf("#");O=ee===-1?$:$.slice(0,ee)}return O}function w(E){return y()+"#"+(typeof E=="string"?E:ps(E))}function T(E,O){return O===void 0&&(O=null),sm(el({pathname:h.pathname,hash:"",search:""},typeof E=="string"?Wn(E):E,{state:O,key:nk()}))}function p(E,O){return[{usr:E.state,key:E.key,idx:O},w(E)]}function f(E,O,$){return!m.length||(m.call({action:E,location:O,retry:$}),!1)}function g(E){l=E;var O=s();c=O[0],h=O[1],d.call({action:l,location:h})}function v(E,O){var $=cr.Push,ee=T(E,O);function We(){v(E,O)}if(f($,ee,We)){var Ke=p(ee,c+1),vn=Ke[0],Ot=Ke[1];try{i.pushState(vn,"",Ot)}catch{r.location.assign(Ot)}g($)}}function C(E,O){var $=cr.Replace,ee=T(E,O);function We(){C(E,O)}if(f($,ee,We)){var Ke=p(ee,c),vn=Ke[0],Ot=Ke[1];i.replaceState(vn,"",Ot),g($)}}function R(E){i.go(E)}var N={get action(){return l},get location(){return h},createHref:w,push:v,replace:C,go:R,back:function(){R(-1)},forward:function(){R(1)},listen:function(O){return d.push(O)},block:function(O){var $=m.push(O);return m.length===1&&r.addEventListener(om,am),function(){$(),m.length||r.removeEventListener(om,am)}}};return N}function am(t){t.preventDefault(),t.returnValue=""}function lm(){var t=[];return{get length(){return t.length},push:function(n){return t.push(n),function(){t=t.filter(function(r){return r!==n})}},call:function(n){t.forEach(function(r){return r&&r(n)})}}}function nk(){return Math.random().toString(36).substr(2,8)}function ps(t){var e=t.pathname,n=e===void 0?"/":e,r=t.search,i=r===void 0?"":r,s=t.hash,o=s===void 0?"":s;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function Wn(t){var e={};if(t){var n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));var r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Nd=L.exports.createContext(null),Ad=L.exports.createContext(null),so=L.exports.createContext({outlet:null,matches:[]});function Ht(t,e){if(!t)throw new Error(e)}function rk(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Wn(e):e,i=Yv(r.pathname||"/",n);if(i==null)return null;let s=Qv(t);ik(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=fk(s[a],i);return o}function Qv(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(o.relativePath.startsWith(r)||Ht(!1),o.relativePath=o.relativePath.slice(r.length));let a=Vn([r,o.relativePath]),l=n.concat(o);i.children&&i.children.length>0&&(i.index===!0&&Ht(!1),Qv(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:hk(a,i.index),routesMeta:l})}),e}function ik(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:dk(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const sk=/^:\w+$/,ok=3,ak=2,lk=1,uk=10,ck=-2,um=t=>t==="*";function hk(t,e){let n=t.split("/"),r=n.length;return n.some(um)&&(r+=ck),e&&(r+=ak),n.filter(i=>!um(i)).reduce((i,s)=>i+(sk.test(s)?ok:s===""?lk:uk),r)}function dk(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function fk(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=pk({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Vn([i,c.pathname]),pathnameBase:Jv(Vn([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Vn([i,c.pathnameBase]))}return s}function pk(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=mk(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=gk(a[h]||""),u},{}),pathname:s,pathnameBase:o,pattern:t}}function mk(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,e?void 0:"i"),r]}function gk(t,e){try{return decodeURIComponent(t)}catch{return t}}function yk(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Wn(t):t;return{pathname:n?n.startsWith("/")?n:vk(n,e):e,search:_k(r),hash:Ek(i)}}function vk(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Xv(t,e,n){let r=typeof t=="string"?Wn(t):t,i=t===""||r.pathname===""?"/":r.pathname,s;if(i==null)s=n;else{let a=e.length-1;if(i.startsWith("..")){let l=i.split("/");for(;l[0]==="..";)l.shift(),a-=1;r.pathname=l.join("/")}s=a>=0?e[a]:"/"}let o=yk(r,s);return i&&i!=="/"&&i.endsWith("/")&&!o.pathname.endsWith("/")&&(o.pathname+="/"),o}function wk(t){return t===""||t.pathname===""?"/":typeof t=="string"?Wn(t).pathname:t.pathname}function Yv(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=t.charAt(e.length);return n&&n!=="/"?null:t.slice(e.length)||"/"}const Vn=t=>t.join("/").replace(/\/\/+/g,"/"),Jv=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),_k=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Ek=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Sk(t){oo()||Ht(!1);let{basename:e,navigator:n}=L.exports.useContext(Nd),{hash:r,pathname:i,search:s}=Zv(t),o=i;if(e!=="/"){let a=wk(t),l=a!=null&&a.endsWith("/");o=i==="/"?e+(l?"/":""):Vn([e,i])}return n.createHref({pathname:o,search:s,hash:r})}function oo(){return L.exports.useContext(Ad)!=null}function Vl(){return oo()||Ht(!1),L.exports.useContext(Ad).location}function Mr(){oo()||Ht(!1);let{basename:t,navigator:e}=L.exports.useContext(Nd),{matches:n}=L.exports.useContext(so),{pathname:r}=Vl(),i=JSON.stringify(n.map(a=>a.pathnameBase)),s=L.exports.useRef(!1);return L.exports.useEffect(()=>{s.current=!0}),L.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=Xv(a,JSON.parse(i),r);t!=="/"&&(u.pathname=Vn([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state)},[t,e,i,r])}function kk(){let{matches:t}=L.exports.useContext(so),e=t[t.length-1];return e?e.params:{}}function Zv(t){let{matches:e}=L.exports.useContext(so),{pathname:n}=Vl(),r=JSON.stringify(e.map(i=>i.pathnameBase));return L.exports.useMemo(()=>Xv(t,JSON.parse(r),n),[t,r,n])}function Tk(t,e){oo()||Ht(!1);let{matches:n}=L.exports.useContext(so),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let s=r?r.pathnameBase:"/";r&&r.route;let o=Vl(),a;if(e){var l;let d=typeof e=="string"?Wn(e):e;s==="/"||((l=d.pathname)==null?void 0:l.startsWith(s))||Ht(!1),a=d}else a=o;let u=a.pathname||"/",c=s==="/"?u:u.slice(s.length)||"/",h=rk(t,{pathname:c});return Ik(h&&h.map(d=>Object.assign({},d,{params:Object.assign({},i,d.params),pathname:Vn([s,d.pathname]),pathnameBase:d.pathnameBase==="/"?s:Vn([s,d.pathnameBase])})),n)}function Ik(t,e){return e===void 0&&(e=[]),t==null?null:t.reduceRight((n,r,i)=>L.exports.createElement(so.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:e.concat(t.slice(0,i+1))}}),null)}function En(t){Ht(!1)}function Ck(t){let{basename:e="/",children:n=null,location:r,navigationType:i=cr.Pop,navigator:s,static:o=!1}=t;oo()&&Ht(!1);let a=Jv(e),l=L.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Wn(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:m="default"}=r,y=L.exports.useMemo(()=>{let w=Yv(u,a);return w==null?null:{pathname:w,search:c,hash:h,state:d,key:m}},[a,u,c,h,d,m]);return y==null?null:L.exports.createElement(Nd.Provider,{value:l},L.exports.createElement(Ad.Provider,{children:n,value:{location:y,navigationType:i}}))}function Rk(t){let{children:e,location:n}=t;return Tk(nh(e),n)}function nh(t){let e=[];return L.exports.Children.forEach(t,n=>{if(!L.exports.isValidElement(n))return;if(n.type===L.exports.Fragment){e.push.apply(e,nh(n.props.children));return}n.type!==En&&Ht(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=nh(n.props.children)),e.push(r)}),e}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rh(){return rh=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},rh.apply(this,arguments)}function Nk(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const Ak=["onClick","reloadDocument","replace","state","target","to"];function xk(t){let{basename:e,children:n,window:r}=t,i=L.exports.useRef();i.current==null&&(i.current=tk({window:r}));let s=i.current,[o,a]=L.exports.useState({action:s.action,location:s.location});return L.exports.useLayoutEffect(()=>s.listen(a),[s]),L.exports.createElement(Ck,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}function Dk(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}const Ea=L.exports.forwardRef(function(e,n){let{onClick:r,reloadDocument:i,replace:s=!1,state:o,target:a,to:l}=e,u=Nk(e,Ak),c=Sk(l),h=Pk(l,{replace:s,state:o,target:a});function d(m){r&&r(m),!m.defaultPrevented&&!i&&h(m)}return L.exports.createElement("a",rh({},u,{href:c,onClick:d,ref:n,target:a}))});function Pk(t,e){let{target:n,replace:r,state:i}=e===void 0?{}:e,s=Mr(),o=Vl(),a=Zv(t);return L.exports.useCallback(l=>{if(l.button===0&&(!n||n==="_self")&&!Dk(l)){l.preventDefault();let u=!!r||ps(o)===ps(a);s(t,{replace:u,state:i})}},[o,s,a,r,i,n,t])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ok=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},t0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(d=64)),r.push(n[c],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(e0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ok(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Lk=function(t){const e=e0(t);return t0.encodeByteArray(e,!0)},n0=function(t){return Lk(t).replace(/\./g,"")},$k=function(t){try{return t0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function r0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function i0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function s0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Uk(){return Re().indexOf("Electron/")>=0}function o0(){const t=Re();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function bk(){return Re().indexOf("MSAppHost/")>=0}function Fk(){return typeof indexedDB=="object"}function Vk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk="FirebaseError";class qt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Bk,Object.setPrototypeOf(this,qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ao.prototype.create)}}class ao{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?zk(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new qt(i,a,r)}}function zk(t,e){return t.replace(jk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const jk=/\{\$([^}]+)}/g;function Hk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function tl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(cm(s)&&cm(o)){if(!tl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function cm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Wk(t,e){const n=new Kk(t,e);return n.subscribe.bind(n)}class Kk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");qk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=zu),i.error===void 0&&(i.error=zu),i.complete===void 0&&(i.complete=zu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function zu(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t){return t&&t._delegate?t._delegate:t}class Kn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Mk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xk(e))try{this.getOrInitializeService({instanceIdentifier:or})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=or){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=or){return this.instances.has(e)}getOptions(e=or){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Qk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=or){return this.component?this.component.multipleInstances?e:or:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qk(t){return t===or?void 0:t}function Xk(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Gk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const Jk={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},Zk=Q.INFO,eT={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},tT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=eT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xd{constructor(e){this.name=e,this._logLevel=Zk,this._logHandler=tT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Jk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const nT=(t,e)=>e.some(n=>t instanceof n);let hm,dm;function rT(){return hm||(hm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iT(){return dm||(dm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const a0=new WeakMap,ih=new WeakMap,l0=new WeakMap,ju=new WeakMap,Dd=new WeakMap;function sT(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Bn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&a0.set(n,t)}).catch(()=>{}),Dd.set(e,t),e}function oT(t){if(ih.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ih.set(t,e)}let sh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ih.get(t);if(e==="objectStoreNames")return t.objectStoreNames||l0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function aT(t){sh=t(sh)}function lT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Hu(this),e,...n);return l0.set(r,e.sort?e.sort():[e]),Bn(r)}:iT().includes(t)?function(...e){return t.apply(Hu(this),e),Bn(a0.get(this))}:function(...e){return Bn(t.apply(Hu(this),e))}}function uT(t){return typeof t=="function"?lT(t):(t instanceof IDBTransaction&&oT(t),nT(t,rT())?new Proxy(t,sh):t)}function Bn(t){if(t instanceof IDBRequest)return sT(t);if(ju.has(t))return ju.get(t);const e=uT(t);return e!==t&&(ju.set(t,e),Dd.set(e,t)),e}const Hu=t=>Dd.get(t);function cT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Bn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Bn(o.result),l.oldVersion,l.newVersion,Bn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const hT=["get","getKey","getAll","getAllKeys","count"],dT=["put","add","delete","clear"],Wu=new Map;function fm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wu.get(e))return Wu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=dT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||hT.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Wu.set(e,s),s}aT(t=>({...t,get:(e,n,r)=>fm(e,n)||t.get(e,n,r),has:(e,n)=>!!fm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function pT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const oh="@firebase/app",pm="0.7.30";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=new xd("@firebase/app"),mT="@firebase/app-compat",gT="@firebase/analytics-compat",yT="@firebase/analytics",vT="@firebase/app-check-compat",wT="@firebase/app-check",_T="@firebase/auth",ET="@firebase/auth-compat",ST="@firebase/database",kT="@firebase/database-compat",TT="@firebase/functions",IT="@firebase/functions-compat",CT="@firebase/installations",RT="@firebase/installations-compat",NT="@firebase/messaging",AT="@firebase/messaging-compat",xT="@firebase/performance",DT="@firebase/performance-compat",PT="@firebase/remote-config",OT="@firebase/remote-config-compat",LT="@firebase/storage",$T="@firebase/storage-compat",MT="@firebase/firestore",UT="@firebase/firestore-compat",bT="firebase",FT="9.9.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0="[DEFAULT]",VT={[oh]:"fire-core",[mT]:"fire-core-compat",[yT]:"fire-analytics",[gT]:"fire-analytics-compat",[wT]:"fire-app-check",[vT]:"fire-app-check-compat",[_T]:"fire-auth",[ET]:"fire-auth-compat",[ST]:"fire-rtdb",[kT]:"fire-rtdb-compat",[TT]:"fire-fn",[IT]:"fire-fn-compat",[CT]:"fire-iid",[RT]:"fire-iid-compat",[NT]:"fire-fcm",[AT]:"fire-fcm-compat",[xT]:"fire-perf",[DT]:"fire-perf-compat",[PT]:"fire-rc",[OT]:"fire-rc-compat",[LT]:"fire-gcs",[$T]:"fire-gcs-compat",[MT]:"fire-fst",[UT]:"fire-fst-compat","fire-js":"fire-js",[bT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl=new Map,ah=new Map;function BT(t,e){try{t.container.addComponent(e)}catch(n){Ir.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Cr(t){const e=t.name;if(ah.has(e))return Ir.debug(`There were multiple attempts to register component ${e}.`),!1;ah.set(e,t);for(const n of nl.values())BT(n,t);return!0}function Bl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Rr=new ao("app","Firebase",zT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=FT;function HT(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:u0,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Rr.create("bad-app-name",{appName:String(r)});const i=nl.get(r);if(i){if(tl(t,i.options)&&tl(n,i.config))return i;throw Rr.create("duplicate-app",{appName:r})}const s=new Yk(r);for(const a of ah.values())s.addComponent(a);const o=new jT(t,n,s);return nl.set(r,o),o}function Pd(t=u0){const e=nl.get(t);if(!e)throw Rr.create("no-app",{appName:t});return e}function Vt(t,e,n){var r;let i=(r=VT[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ir.warn(a.join(" "));return}Cr(new Kn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT="firebase-heartbeat-database",KT=1,Vs="firebase-heartbeat-store";let Ku=null;function c0(){return Ku||(Ku=cT(WT,KT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Vs)}}}).catch(t=>{throw Rr.create("idb-open",{originalErrorMessage:t.message})})),Ku}async function qT(t){var e;try{return(await c0()).transaction(Vs).objectStore(Vs).get(h0(t))}catch(n){if(n instanceof qt)Ir.warn(n.message);else{const r=Rr.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Ir.warn(r.message)}}}async function mm(t,e){var n;try{const i=(await c0()).transaction(Vs,"readwrite");return await i.objectStore(Vs).put(e,h0(t)),i.done}catch(r){if(r instanceof qt)Ir.warn(r.message);else{const i=Rr.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Ir.warn(i.message)}}}function h0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT=1024,QT=30*24*60*60*1e3;class XT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new JT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=gm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=QT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=gm(),{heartbeatsToSend:n,unsentEntries:r}=YT(this._heartbeatsCache.heartbeats),i=n0(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function gm(){return new Date().toISOString().substring(0,10)}function YT(t,e=GT){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ym(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ym(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class JT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fk()?Vk().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await qT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return mm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return mm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ym(t){return n0(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(t){Cr(new Kn("platform-logger",e=>new fT(e),"PRIVATE")),Cr(new Kn("heartbeat",e=>new XT(e),"PRIVATE")),Vt(oh,pm,t),Vt(oh,pm,"esm2017"),Vt("fire-js","")}ZT("");var eI="firebase",tI="9.9.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vt(eI,tI,"app");function Od(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function d0(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nI=d0,f0=new ao("auth","Firebase",d0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm=new xd("@firebase/auth");function Sa(t,...e){vm.logLevel<=Q.ERROR&&vm.error(`Auth (${Pi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t,...e){throw Ld(t,...e)}function Bt(t,...e){return Ld(t,...e)}function p0(t,e,n){const r=Object.assign(Object.assign({},nI()),{[e]:n});return new ao("auth","Firebase",r).create(e,{appName:t.name})}function rI(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Wt(t,"argument-error"),p0(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ld(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return f0.create(t,...e)}function F(t,e,...n){if(!t)throw Ld(e,...n)}function en(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Sa(e),new Error(e)}function hn(t,e){t||en(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm=new Map;function tn(t){hn(t instanceof Function,"Expected a class definition");let e=wm.get(t);return e?(hn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,wm.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI(t,e){const n=Bl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(tl(s,e!=null?e:{}))return i;Wt(i,"already-initialized")}return n.initialize({options:e})}function sI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(tn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function oI(){return _m()==="http:"||_m()==="https:"}function _m(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(oI()||i0()||"connection"in navigator)?navigator.onLine:!0}function lI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,n){this.shortDelay=e,this.longDelay=n,hn(n>e,"Short delay should be less than long delay!"),this.isMobile=r0()||s0()}get(){return aI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(t,e){hn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;en("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;en("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;en("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI=new uo(3e4,6e4);function hI(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function zl(t,e,n,r,i={}){return g0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=lo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),m0.fetch()(y0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function g0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},uI),e);try{const i=new fI(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Zo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Zo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Zo(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw p0(t,c,u);Wt(t,c)}}catch(i){if(i instanceof qt)throw i;Wt(t,"network-request-failed")}}async function dI(t,e,n,r,i={}){const s=await zl(t,e,n,r,i);return"mfaPendingCredential"in s&&Wt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function y0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?$d(t.config,i):`${t.config.apiScheme}://${i}`}class fI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Bt(this.auth,"network-request-failed")),cI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Zo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Bt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pI(t,e){return zl(t,"POST","/v1/accounts:delete",e)}async function mI(t,e){return zl(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gI(t,e=!1){const n=et(t),r=await n.getIdToken(e),i=Md(r);F(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ms(qu(i.auth_time)),issuedAtTime:ms(qu(i.iat)),expirationTime:ms(qu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function qu(t){return Number(t)*1e3}function Md(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return Sa("JWT malformed, contained fewer than 3 sections"),null;try{const s=$k(r);return s?JSON.parse(s):(Sa("Failed to decode base64 JWT payload"),null)}catch(s){return Sa("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function yI(t){const e=Md(t);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof qt&&vI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function vI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ms(this.lastLoginAt),this.creationTime=ms(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Bs(t,mI(n,{idToken:r}));F(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?SI(s.providerUserInfo):[],a=EI(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new v0(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function _I(t){const e=et(t);await rl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function EI(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function SI(t){return t.map(e=>{var{providerId:n}=e,r=Od(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kI(t,e){const n=await g0(t,{},async()=>{const r=lo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=y0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",m0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await kI(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new zs;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(F(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(F(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zs,this.toJSON())}_performRefresh(){return en("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(t,e){F(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class yr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Od(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new v0(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Bs(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return gI(this,e)}reload(){return _I(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new yr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await rl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Bs(this,pI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:v,isAnonymous:C,providerData:R,stsTokenManager:N}=n;F(g&&N,e,"internal-error");const E=zs.fromJSON(this.name,N);F(typeof g=="string",e,"internal-error"),_n(h,e.name),_n(d,e.name),F(typeof v=="boolean",e,"internal-error"),F(typeof C=="boolean",e,"internal-error"),_n(m,e.name),_n(y,e.name),_n(w,e.name),_n(T,e.name),_n(p,e.name),_n(f,e.name);const O=new yr({uid:g,auth:e,email:d,emailVerified:v,displayName:h,isAnonymous:C,photoURL:y,phoneNumber:m,tenantId:w,stsTokenManager:E,createdAt:p,lastLoginAt:f});return R&&Array.isArray(R)&&(O.providerData=R.map($=>Object.assign({},$))),T&&(O._redirectEventId=T),O}static async _fromIdTokenResponse(e,n,r=!1){const i=new zs;i.updateFromServerResponse(n);const s=new yr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await rl(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}w0.type="NONE";const Em=w0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(t,e,n){return`firebase:${t}:${e}:${n}`}class ui{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ka(this.userKey,i.apiKey,s),this.fullPersistenceKey=ka("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?yr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ui(tn(Em),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||tn(Em);const o=ka(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=yr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ui(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ui(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(S0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(T0(e))return"Blackberry";if(I0(e))return"Webos";if(Ud(e))return"Safari";if((e.includes("chrome/")||E0(e))&&!e.includes("edge/"))return"Chrome";if(k0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function _0(t=Re()){return/firefox\//i.test(t)}function Ud(t=Re()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function E0(t=Re()){return/crios\//i.test(t)}function S0(t=Re()){return/iemobile/i.test(t)}function k0(t=Re()){return/android/i.test(t)}function T0(t=Re()){return/blackberry/i.test(t)}function I0(t=Re()){return/webos/i.test(t)}function jl(t=Re()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function TI(t=Re()){var e;return jl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function II(){return o0()&&document.documentMode===10}function C0(t=Re()){return jl(t)||k0(t)||I0(t)||T0(t)||/windows phone/i.test(t)||S0(t)}function CI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R0(t,e=[]){let n;switch(t){case"Browser":n=Sm(Re());break;case"Worker":n=`${Sm(Re())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Pi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new km(this),this.idTokenSubscription=new km(this),this.beforeStateQueue=new RI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=f0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ui.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await rl(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?et(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(tn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ao("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tn(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await ui.create(this,[tn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return F(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=R0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function bd(t){return et(t)}class km{constructor(e){this.auth=e,this.observer=null,this.addObserver=Wk(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return en("not implemented")}_getIdTokenResponse(e){return en("not implemented")}_linkToIdToken(e,n){return en("not implemented")}_getReauthenticationResolver(e){return en("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ci(t,e){return dI(t,"POST","/v1/accounts:signInWithIdp",hI(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI="http://localhost";class Nr extends N0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Nr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Od(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Nr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ci(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ci(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ci(e,n)}buildRequest(){const e={requestUri:AI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=lo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co extends Fd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends co{constructor(){super("facebook.com")}static credential(e){return Nr._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends co{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Nr._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yt.credential(n,r)}catch{return null}}}Yt.GOOGLE_SIGN_IN_METHOD="google.com";Yt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends co{constructor(){super("github.com")}static credential(e){return Nr._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rn.credential(e.oauthAccessToken)}catch{return null}}}Rn.GITHUB_SIGN_IN_METHOD="github.com";Rn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends co{constructor(){super("twitter.com")}static credential(e,n){return Nr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Nn.credential(n,r)}catch{return null}}}Nn.TWITTER_SIGN_IN_METHOD="twitter.com";Nn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await yr._fromIdTokenResponse(e,r,i),o=Tm(r);return new _i({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Tm(r);return new _i({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Tm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il extends qt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,il.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new il(e,n,r,i)}}function A0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?il._fromErrorAndOperation(t,s,e,r):s})}async function xI(t,e,n=!1){const r=await Bs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _i._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DI(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await Bs(t,A0(i,s,e,t),n);F(o.idToken,i,"internal-error");const a=Md(o.idToken);F(a,i,"internal-error");const{sub:l}=a;return F(t.uid===l,i,"user-mismatch"),_i._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Wt(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PI(t,e,n=!1){const r="signIn",i=await A0(t,r,e),s=await _i._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function OI(t,e,n,r){return et(t).onAuthStateChanged(e,n,r)}const sl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(sl,"1"),this.storage.removeItem(sl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LI(){const t=Re();return Ud(t)||jl(t)}const $I=1e3,MI=10;class D0 extends x0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=LI()&&CI(),this.fallbackToPolling=C0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);II()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,MI):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},$I)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}D0.type="LOCAL";const UI=D0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0 extends x0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}P0.type="SESSION";const O0=P0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Hl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await bI(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Vd("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return window}function VI(t){zt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L0(){return typeof zt().WorkerGlobalScope<"u"&&typeof zt().importScripts=="function"}async function BI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function jI(){return L0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0="firebaseLocalStorageDb",HI=1,ol="firebaseLocalStorage",M0="fbase_key";class ho{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wl(t,e){return t.transaction([ol],e?"readwrite":"readonly").objectStore(ol)}function WI(){const t=indexedDB.deleteDatabase($0);return new ho(t).toPromise()}function uh(){const t=indexedDB.open($0,HI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ol,{keyPath:M0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ol)?e(r):(r.close(),await WI(),e(await uh()))})})}async function Im(t,e,n){const r=Wl(t,!0).put({[M0]:e,value:n});return new ho(r).toPromise()}async function KI(t,e){const n=Wl(t,!1).get(e),r=await new ho(n).toPromise();return r===void 0?null:r.value}function Cm(t,e){const n=Wl(t,!0).delete(e);return new ho(n).toPromise()}const qI=800,GI=3;class U0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await uh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>GI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return L0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hl._getInstance(jI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await BI(),!this.activeServiceWorker)return;this.sender=new FI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await uh();return await Im(e,sl,"1"),await Cm(e,sl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Im(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>KI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Cm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Wl(i,!1).getAll();return new ho(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}U0.type="LOCAL";const QI=U0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function YI(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Bt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",XI().appendChild(r)})}function JI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new uo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b0(t,e){return e?tn(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd extends N0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ci(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ci(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ci(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ZI(t){return PI(t.auth,new Bd(t),t.bypassAuthState)}function eC(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),DI(n,new Bd(t),t.bypassAuthState)}async function tC(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),xI(n,new Bd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ZI;case"linkViaPopup":case"linkViaRedirect":return tC;case"reauthViaPopup":case"reauthViaRedirect":return eC;default:Wt(this.auth,"internal-error")}}resolve(e){hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=new uo(2e3,1e4);async function rC(t,e,n){const r=bd(t);rI(t,e,Fd);const i=b0(r,n);return new hr(r,"signInViaPopup",e,i).executeNotNull()}class hr extends F0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,hr.currentPopupAction&&hr.currentPopupAction.cancel(),hr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){hn(this.filter.length===1,"Popup operations only handle one event");const e=Vd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Bt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,nC.get())};e()}}hr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC="pendingRedirect",Ta=new Map;class sC extends F0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ta.get(this.auth._key());if(!e){try{const r=await oC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ta.set(this.auth._key(),e)}return this.bypassAuthState||Ta.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oC(t,e){const n=uC(e),r=lC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function aC(t,e){Ta.set(t._key(),e)}function lC(t){return tn(t._redirectPersistence)}function uC(t){return ka(iC,t.config.apiKey,t.name)}async function cC(t,e,n=!1){const r=bd(t),i=b0(r,e),o=await new sC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC=10*60*1e3;class dC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!V0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Bt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rm(e))}saveEventToCache(e){this.cachedEventUids.add(Rm(e)),this.lastProcessedEventTime=Date.now()}}function Rm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function V0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return V0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pC(t,e={}){return zl(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gC=/^https?/;async function yC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await pC(t);for(const n of e)try{if(vC(n))return}catch{}Wt(t,"unauthorized-domain")}function vC(t){const e=lh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!gC.test(n))return!1;if(mC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC=new uo(3e4,6e4);function Nm(){const t=zt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function _C(t){return new Promise((e,n)=>{var r,i,s;function o(){Nm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nm(),n(Bt(t,"network-request-failed"))},timeout:wC.get()})}if(!((i=(r=zt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=zt().gapi)===null||s===void 0)&&s.load)o();else{const a=JI("iframefcb");return zt()[a]=()=>{gapi.load?o():n(Bt(t,"network-request-failed"))},YI(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ia=null,e})}let Ia=null;function EC(t){return Ia=Ia||_C(t),Ia}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC=new uo(5e3,15e3),kC="__/auth/iframe",TC="emulator/auth/iframe",IC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},CC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function RC(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$d(e,TC):`https://${t.config.authDomain}/${kC}`,r={apiKey:e.apiKey,appName:t.name,v:Pi},i=CC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${lo(r).slice(1)}`}async function NC(t){const e=await EC(t),n=zt().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:RC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:IC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Bt(t,"network-request-failed"),a=zt().setTimeout(()=>{s(o)},SC.get());function l(){zt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xC=500,DC=600,PC="_blank",OC="http://localhost";class Am{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function LC(t,e,n,r=xC,i=DC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},AC),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Re().toLowerCase();n&&(a=E0(u)?PC:n),_0(u)&&(e=e||OC,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[m,y])=>`${d}${m}=${y},`,"");if(TI(u)&&a!=="_self")return $C(e||"",a),new Am(null);const h=window.open(e||"",a,c);F(h,t,"popup-blocked");try{h.focus()}catch{}return new Am(h)}function $C(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MC="__/auth/handler",UC="emulator/auth/handler";function xm(t,e,n,r,i,s){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Pi,eventId:i};if(e instanceof Fd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Hk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof co){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${bC(t)}?${lo(a).slice(1)}`}function bC({config:t}){return t.emulator?$d(t,UC):`https://${t.authDomain}/${MC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu="webStorageSupport";class FC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=O0,this._completeRedirectFn=cC,this._overrideRedirectResult=aC}async _openPopup(e,n,r,i){var s;hn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=xm(e,n,r,lh(),i);return LC(e,o,Vd())}async _openRedirect(e,n,r,i){return await this._originValidation(e),VI(xm(e,n,r,lh(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(hn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await NC(e),r=new dC(e);return n.register("authEvent",i=>(F(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Gu,{type:Gu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Gu];o!==void 0&&n(!!o),Wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return C0()||Ud()||jl()}}const VC=FC;var Dm="@firebase/auth",Pm="0.20.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function jC(t){Cr(new Kn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{F(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),F(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:R0(t)},c=new NI(a,l,u);return sI(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Cr(new Kn("auth-internal",e=>{const n=bd(e.getProvider("auth").getImmediate());return(r=>new BC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vt(Dm,Pm,zC(t)),Vt(Dm,Pm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HC(t=Pd()){const e=Bl(t,"auth");return e.isInitialized()?e.getImmediate():iI(t,{popupRedirectResolver:VC,persistence:[QI,UI,O0]})}jC("Browser");var WC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x,zd=zd||{},b=WC||self;function al(){}function ch(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function fo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function KC(t){return Object.prototype.hasOwnProperty.call(t,Qu)&&t[Qu]||(t[Qu]=++qC)}var Qu="closure_uid_"+(1e9*Math.random()>>>0),qC=0;function GC(t,e,n){return t.call.apply(t.bind,arguments)}function QC(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Le(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Le=GC:Le=QC,Le.apply(null,arguments)}function ea(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function be(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function er(){this.s=this.s,this.o=this.o}var XC=0;er.prototype.s=!1;er.prototype.na=function(){!this.s&&(this.s=!0,this.M(),XC!=0)&&KC(this)};er.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const B0=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},z0=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function YC(t){e:{var e=zR;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Om(t){return Array.prototype.concat.apply([],arguments)}function jd(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function ll(t){return/^[\s\xa0]*$/.test(t)}var Lm=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Qe(t,e){return t.indexOf(e)!=-1}function Xu(t,e){return t<e?-1:t>e?1:0}var Xe;e:{var $m=b.navigator;if($m){var Mm=$m.userAgent;if(Mm){Xe=Mm;break e}}Xe=""}function Hd(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function j0(t){const e={};for(const n in t)e[n]=t[n];return e}var Um="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function H0(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Um.length;s++)n=Um[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Wd(t){return Wd[" "](t),t}Wd[" "]=al;function JC(t){var e=tR;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var ZC=Qe(Xe,"Opera"),Ei=Qe(Xe,"Trident")||Qe(Xe,"MSIE"),W0=Qe(Xe,"Edge"),hh=W0||Ei,K0=Qe(Xe,"Gecko")&&!(Qe(Xe.toLowerCase(),"webkit")&&!Qe(Xe,"Edge"))&&!(Qe(Xe,"Trident")||Qe(Xe,"MSIE"))&&!Qe(Xe,"Edge"),eR=Qe(Xe.toLowerCase(),"webkit")&&!Qe(Xe,"Edge");function q0(){var t=b.document;return t?t.documentMode:void 0}var ul;e:{var Yu="",Ju=function(){var t=Xe;if(K0)return/rv:([^\);]+)(\)|;)/.exec(t);if(W0)return/Edge\/([\d\.]+)/.exec(t);if(Ei)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(eR)return/WebKit\/(\S+)/.exec(t);if(ZC)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ju&&(Yu=Ju?Ju[1]:""),Ei){var Zu=q0();if(Zu!=null&&Zu>parseFloat(Yu)){ul=String(Zu);break e}}ul=Yu}var tR={};function nR(){return JC(function(){let t=0;const e=Lm(String(ul)).split("."),n=Lm("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Xu(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Xu(i[2].length==0,s[2].length==0)||Xu(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var dh;if(b.document&&Ei){var bm=q0();dh=bm||parseInt(ul,10)||void 0}else dh=void 0;var rR=dh,iR=function(){if(!b.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{b.addEventListener("test",al,e),b.removeEventListener("test",al,e)}catch{}return t}();function je(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}je.prototype.h=function(){this.defaultPrevented=!0};function js(t,e){if(je.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(K0){e:{try{Wd(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:sR[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&js.Z.h.call(this)}}be(js,je);var sR={2:"touch",3:"pen",4:"mouse"};js.prototype.h=function(){js.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var po="closure_listenable_"+(1e6*Math.random()|0),oR=0;function aR(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++oR,this.ca=this.fa=!1}function Kl(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ql(t){this.src=t,this.g={},this.h=0}ql.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=ph(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new aR(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function fh(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=B0(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Kl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ph(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var Kd="closure_lm_"+(1e6*Math.random()|0),ec={};function G0(t,e,n,r,i){if(r&&r.once)return X0(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)G0(t,e[s],n,r,i);return null}return n=Qd(n),t&&t[po]?t.N(e,n,fo(r)?!!r.capture:!!r,i):Q0(t,e,n,!1,r,i)}function Q0(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=fo(i)?!!i.capture:!!i,a=Gd(t);if(a||(t[Kd]=a=new ql(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=lR(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)iR||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(J0(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function lR(){function t(n){return e.call(t.src,t.listener,n)}var e=uR;return t}function X0(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)X0(t,e[s],n,r,i);return null}return n=Qd(n),t&&t[po]?t.O(e,n,fo(r)?!!r.capture:!!r,i):Q0(t,e,n,!0,r,i)}function Y0(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Y0(t,e[s],n,r,i);else r=fo(r)?!!r.capture:!!r,n=Qd(n),t&&t[po]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=ph(s,n,r,i),-1<n&&(Kl(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Gd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ph(e,n,r,i)),(n=-1<t?e[t]:null)&&qd(n))}function qd(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[po])fh(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(J0(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Gd(e))?(fh(n,t),n.h==0&&(n.src=null,e[Kd]=null)):Kl(t)}}}function J0(t){return t in ec?ec[t]:ec[t]="on"+t}function uR(t,e){if(t.ca)t=!0;else{e=new js(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&qd(t),t=n.call(r,e)}return t}function Gd(t){return t=t[Kd],t instanceof ql?t:null}var tc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qd(t){return typeof t=="function"?t:(t[tc]||(t[tc]=function(e){return t.handleEvent(e)}),t[tc])}function Ne(){er.call(this),this.i=new ql(this),this.P=this,this.I=null}be(Ne,er);Ne.prototype[po]=!0;Ne.prototype.removeEventListener=function(t,e,n,r){Y0(this,t,e,n,r)};function $e(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new je(e,t);else if(e instanceof je)e.target=e.target||t;else{var i=e;e=new je(r,t),H0(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=ta(o,r,!0,e)&&i}if(o=e.g=t,i=ta(o,r,!0,e)&&i,i=ta(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=ta(o,r,!1,e)&&i}Ne.prototype.M=function(){if(Ne.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Kl(n[r]);delete t.g[e],t.h--}}this.I=null};Ne.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ne.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ta(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&fh(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Xd=b.JSON.stringify;function cR(){var t=ew;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class hR{constructor(){this.h=this.g=null}add(e,n){const r=Z0.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Z0=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new dR,t=>t.reset());class dR{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function fR(t){b.setTimeout(()=>{throw t},0)}function Yd(t,e){mh||pR(),gh||(mh(),gh=!0),ew.add(t,e)}var mh;function pR(){var t=b.Promise.resolve(void 0);mh=function(){t.then(mR)}}var gh=!1,ew=new hR;function mR(){for(var t;t=cR();){try{t.h.call(t.g)}catch(n){fR(n)}var e=Z0;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}gh=!1}function Gl(t,e){Ne.call(this),this.h=t||1,this.g=e||b,this.j=Le(this.kb,this),this.l=Date.now()}be(Gl,Ne);x=Gl.prototype;x.da=!1;x.S=null;x.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),$e(this,"tick"),this.da&&(Jd(this),this.start()))}};x.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Jd(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}x.M=function(){Gl.Z.M.call(this),Jd(this),delete this.g};function Zd(t,e,n){if(typeof t=="function")n&&(t=Le(t,n));else if(t&&typeof t.handleEvent=="function")t=Le(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:b.setTimeout(t,e||0)}function tw(t){t.g=Zd(()=>{t.g=null,t.i&&(t.i=!1,tw(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class gR extends er{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:tw(this)}M(){super.M(),this.g&&(b.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Hs(t){er.call(this),this.h=t,this.g={}}be(Hs,er);var Fm=[];function nw(t,e,n,r){Array.isArray(n)||(n&&(Fm[0]=n.toString()),n=Fm);for(var i=0;i<n.length;i++){var s=G0(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function rw(t){Hd(t.g,function(e,n){this.g.hasOwnProperty(n)&&qd(e)},t),t.g={}}Hs.prototype.M=function(){Hs.Z.M.call(this),rw(this)};Hs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ql(){this.g=!0}Ql.prototype.Aa=function(){this.g=!1};function yR(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function vR(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function ti(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+_R(t,n)+(r?" "+r:"")})}function wR(t,e){t.info(function(){return"TIMEOUT: "+e})}Ql.prototype.info=function(){};function _R(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Xd(n)}catch{return e}}var Ur={},Vm=null;function Xl(){return Vm=Vm||new Ne}Ur.Ma="serverreachability";function iw(t){je.call(this,Ur.Ma,t)}be(iw,je);function Ws(t){const e=Xl();$e(e,new iw(e))}Ur.STAT_EVENT="statevent";function sw(t,e){je.call(this,Ur.STAT_EVENT,t),this.stat=e}be(sw,je);function Ye(t){const e=Xl();$e(e,new sw(e,t))}Ur.Na="timingevent";function ow(t,e){je.call(this,Ur.Na,t),this.size=e}be(ow,je);function mo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return b.setTimeout(function(){t()},e)}var Yl={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},aw={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ef(){}ef.prototype.h=null;function Bm(t){return t.h||(t.h=t.i())}function lw(){}var go={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function tf(){je.call(this,"d")}be(tf,je);function nf(){je.call(this,"c")}be(nf,je);var yh;function Jl(){}be(Jl,ef);Jl.prototype.g=function(){return new XMLHttpRequest};Jl.prototype.i=function(){return{}};yh=new Jl;function yo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Hs(this),this.P=ER,t=hh?125:void 0,this.W=new Gl(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new uw}function uw(){this.i=null,this.g="",this.h=!1}var ER=45e3,vh={},cl={};x=yo.prototype;x.setTimeout=function(t){this.P=t};function wh(t,e,n){t.K=1,t.v=eu(dn(e)),t.s=n,t.U=!0,cw(t,null)}function cw(t,e){t.F=Date.now(),vo(t),t.A=dn(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),yw(n.h,"t",r),t.C=0,n=t.l.H,t.h=new uw,t.g=Uw(t.l,n?e:null,!t.s),0<t.O&&(t.L=new gR(Le(t.Ia,t,t.g),t.O)),nw(t.V,t.g,"readystatechange",t.gb),e=t.H?j0(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Ws(),yR(t.j,t.u,t.A,t.m,t.X,t.s)}x.gb=function(t){t=t.target;const e=this.L;e&&nn(t)==3?e.l():this.Ia(t)};x.Ia=function(t){try{if(t==this.g)e:{const c=nn(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>c)&&(c!=3||hh||this.g&&(this.h.h||this.g.ga()||Wm(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?Ws(3):Ws(2)),Zl(this);var n=this.g.ba();this.N=n;t:if(hw(this)){var r=Wm(this.g);t="";var i=r.length,s=nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){dr(this),gs(this);var o="";break t}this.h.i=new b.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,vR(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ll(a)){var u=a;break t}}u=null}if(n=u)ti(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,_h(this,n);else{this.i=!1,this.o=3,Ye(12),dr(this),gs(this);break e}}this.U?(dw(this,c,o),hh&&this.i&&c==3&&(nw(this.V,this.W,"tick",this.fb),this.W.start())):(ti(this.j,this.m,o,null),_h(this,o)),c==4&&dr(this),this.i&&!this.I&&(c==4?Ow(this.l,this):(this.i=!1,vo(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ye(12)):(this.o=0,Ye(13)),dr(this),gs(this)}}}catch{}finally{}};function hw(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function dw(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=SR(t,n),i==cl){e==4&&(t.o=4,Ye(14),r=!1),ti(t.j,t.m,null,"[Incomplete Response]");break}else if(i==vh){t.o=4,Ye(15),ti(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else ti(t.j,t.m,i,null),_h(t,i);hw(t)&&i!=cl&&i!=vh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ye(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),df(e),e.L=!0,Ye(11))):(ti(t.j,t.m,n,"[Invalid Chunked Response]"),dr(t),gs(t))}x.fb=function(){if(this.g){var t=nn(this.g),e=this.g.ga();this.C<e.length&&(Zl(this),dw(this,t,e),this.i&&t!=4&&vo(this))}};function SR(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?cl:(n=Number(e.substring(n,r)),isNaN(n)?vh:(r+=1,r+n>e.length?cl:(e=e.substr(r,n),t.C=r+n,e)))}x.cancel=function(){this.I=!0,dr(this)};function vo(t){t.Y=Date.now()+t.P,fw(t,t.P)}function fw(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=mo(Le(t.eb,t),e)}function Zl(t){t.B&&(b.clearTimeout(t.B),t.B=null)}x.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(wR(this.j,this.A),this.K!=2&&(Ws(),Ye(17)),dr(this),this.o=2,gs(this)):fw(this,this.Y-t)};function gs(t){t.l.G==0||t.I||Ow(t.l,t)}function dr(t){Zl(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Jd(t.W),rw(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function _h(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Eh(n.i,t))){if(n.I=t.N,!t.J&&Eh(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)pl(n),ru(n);else break e;hf(n),Ye(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=mo(Le(n.ab,n),6e3));if(1>=_w(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else fr(n,11)}else if((t.J||n.g==t)&&pl(n),!ll(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const c=u[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const y=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;!s.g&&(Qe(y,"spdy")||Qe(y,"quic")||Qe(y,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(of(s,s.h),s.h=null))}if(r.D){const w=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.sa=w,se(r.F,r.D,w))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=Mw(r,r.H?r.la:null,r.W),o.J){Ew(r.i,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(Zl(a),vo(a)),r.g=o}else Dw(r);0<n.l.length&&iu(n)}else u[0]!="stop"&&u[0]!="close"||fr(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?fr(n,7):cf(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}Ws(4)}catch{}}function kR(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(ch(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function rf(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ch(t)||typeof t=="string")z0(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(ch(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=kR(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Oi(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Oi)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}x=Oi.prototype;x.R=function(){sf(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};x.T=function(){return sf(this),this.g.concat()};function sf(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Ar(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],Ar(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}x.get=function(t,e){return Ar(this.h,t)?this.h[t]:e};x.set=function(t,e){Ar(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};x.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function Ar(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var pw=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function TR(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function xr(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof xr){this.g=e!==void 0?e:t.g,hl(this,t.j),this.s=t.s,dl(this,t.i),fl(this,t.m),this.l=t.l,e=t.h;var n=new Ks;n.i=e.i,e.g&&(n.g=new Oi(e.g),n.h=e.h),zm(this,n),this.o=t.o}else t&&(n=String(t).match(pw))?(this.g=!!e,hl(this,n[1]||"",!0),this.s=ys(n[2]||""),dl(this,n[3]||"",!0),fl(this,n[4]),this.l=ys(n[5]||"",!0),zm(this,n[6]||"",!0),this.o=ys(n[7]||"")):(this.g=!!e,this.h=new Ks(null,this.g))}xr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ns(e,jm,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ns(e,jm,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(ns(n,n.charAt(0)=="/"?AR:NR,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ns(n,DR)),t.join("")};function dn(t){return new xr(t)}function hl(t,e,n){t.j=n?ys(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function dl(t,e,n){t.i=n?ys(e,!0):e}function fl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function zm(t,e,n){e instanceof Ks?(t.h=e,PR(t.h,t.g)):(n||(e=ns(e,xR)),t.h=new Ks(e,t.g))}function se(t,e,n){t.h.set(e,n)}function eu(t){return se(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function IR(t){return t instanceof xr?dn(t):new xr(t,void 0)}function CR(t,e,n,r){var i=new xr(null,void 0);return t&&hl(i,t),e&&dl(i,e),n&&fl(i,n),r&&(i.l=r),i}function ys(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ns(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,RR),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function RR(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var jm=/[#\/\?@]/g,NR=/[#\?:]/g,AR=/[#\?]/g,xR=/[#\?@]/g,DR=/#/g;function Ks(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function tr(t){t.g||(t.g=new Oi,t.h=0,t.i&&TR(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}x=Ks.prototype;x.add=function(t,e){tr(this),this.i=null,t=Li(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function mw(t,e){tr(t),e=Li(t,e),Ar(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Ar(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&sf(t)))}function gw(t,e){return tr(t),e=Li(t,e),Ar(t.g.h,e)}x.forEach=function(t,e){tr(this),this.g.forEach(function(n,r){z0(n,function(i){t.call(e,i,r,this)},this)},this)};x.T=function(){tr(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};x.R=function(t){tr(this);var e=[];if(typeof t=="string")gw(this,t)&&(e=Om(e,this.g.get(Li(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Om(e,t[n])}return e};x.set=function(t,e){return tr(this),this.i=null,t=Li(this,t),gw(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};x.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function yw(t,e,n){mw(t,e),0<n.length&&(t.i=null,t.g.set(Li(t,e),jd(n)),t.h+=n.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function Li(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function PR(t,e){e&&!t.j&&(tr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(mw(this,r),yw(this,i,n))},t)),t.j=e}var OR=class{constructor(t,e){this.h=t,this.g=e}};function vw(t){this.l=t||LR,b.PerformanceNavigationTiming?(t=b.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(b.g&&b.g.Ea&&b.g.Ea()&&b.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var LR=10;function ww(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function _w(t){return t.h?1:t.g?t.g.size:0}function Eh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function of(t,e){t.g?t.g.add(e):t.h=e}function Ew(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}vw.prototype.cancel=function(){if(this.i=Sw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Sw(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return jd(t.i)}function af(){}af.prototype.stringify=function(t){return b.JSON.stringify(t,void 0)};af.prototype.parse=function(t){return b.JSON.parse(t,void 0)};function $R(){this.g=new af}function MR(t,e,n){const r=n||"";try{rf(t,function(i,s){let o=i;fo(i)&&(o=Xd(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function UR(t,e){const n=new Ql;if(b.Image){const r=new Image;r.onload=ea(na,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ea(na,n,r,"TestLoadImage: error",!1,e),r.onabort=ea(na,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ea(na,n,r,"TestLoadImage: timeout",!1,e),b.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function na(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function wo(t){this.l=t.$b||null,this.j=t.ib||!1}be(wo,ef);wo.prototype.g=function(){return new tu(this.l,this.j)};wo.prototype.i=function(t){return function(){return t}}({});function tu(t,e){Ne.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=lf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}be(tu,Ne);var lf=0;x=tu.prototype;x.open=function(t,e){if(this.readyState!=lf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,qs(this)};x.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||b).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_o(this)),this.readyState=lf};x.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,qs(this)),this.g&&(this.readyState=3,qs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof b.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;kw(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function kw(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}x.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?_o(this):qs(this),this.readyState==3&&kw(this)}};x.Ua=function(t){this.g&&(this.response=this.responseText=t,_o(this))};x.Ta=function(t){this.g&&(this.response=t,_o(this))};x.ha=function(){this.g&&_o(this)};function _o(t){t.readyState=4,t.l=null,t.j=null,t.A=null,qs(t)}x.setRequestHeader=function(t,e){this.v.append(t,e)};x.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function qs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(tu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var bR=b.JSON.parse;function ye(t){Ne.call(this),this.headers=new Oi,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Tw,this.K=this.L=!1}be(ye,Ne);var Tw="",FR=/^https?$/i,VR=["POST","PUT"];x=ye.prototype;x.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():yh.g(),this.C=this.u?Bm(this.u):Bm(yh),this.g.onreadystatechange=Le(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Hm(this,s);return}t=n||"";const i=new Oi(this.headers);r&&rf(r,function(s,o){i.set(o,s)}),r=YC(i.T()),n=b.FormData&&t instanceof b.FormData,!(0<=B0(VR,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Rw(this),0<this.B&&((this.K=BR(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Le(this.pa,this)):this.A=Zd(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Hm(this,s)}};function BR(t){return Ei&&nR()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function zR(t){return t.toLowerCase()=="content-type"}x.pa=function(){typeof zd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,$e(this,"timeout"),this.abort(8))};function Hm(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Iw(t),nu(t)}function Iw(t){t.D||(t.D=!0,$e(t,"complete"),$e(t,"error"))}x.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,$e(this,"complete"),$e(this,"abort"),nu(this))};x.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),nu(this,!0)),ye.Z.M.call(this)};x.Fa=function(){this.s||(this.F||this.v||this.l?Cw(this):this.cb())};x.cb=function(){Cw(this)};function Cw(t){if(t.h&&typeof zd<"u"&&(!t.C[1]||nn(t)!=4||t.ba()!=2)){if(t.v&&nn(t)==4)Zd(t.Fa,0,t);else if($e(t,"readystatechange"),nn(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(pw)[1]||null;if(!i&&b.self&&b.self.location){var s=b.self.location.protocol;i=s.substr(0,s.length-1)}r=!FR.test(i?i.toLowerCase():"")}n=r}if(n)$e(t,"complete"),$e(t,"success");else{t.m=6;try{var o=2<nn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Iw(t)}}finally{nu(t)}}}}function nu(t,e){if(t.g){Rw(t);const n=t.g,r=t.C[0]?al:null;t.g=null,t.C=null,e||$e(t,"ready");try{n.onreadystatechange=r}catch{}}}function Rw(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(b.clearTimeout(t.A),t.A=null)}function nn(t){return t.g?t.g.readyState:0}x.ba=function(){try{return 2<nn(this)?this.g.status:-1}catch{return-1}};x.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),bR(e)}};function Wm(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Tw:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}x.Da=function(){return this.m};x.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function jR(t){let e="";return Hd(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function uf(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=jR(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):se(t,e,n))}function Qi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Nw(t){this.za=0,this.l=[],this.h=new Ql,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Qi("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Qi("baseRetryDelayMs",5e3,t),this.$a=Qi("retryDelaySeedMs",1e4,t),this.Ya=Qi("forwardChannelMaxRetries",2,t),this.ra=Qi("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new vw(t&&t.concurrentRequestLimit),this.Ca=new $R,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}x=Nw.prototype;x.ma=8;x.G=1;function cf(t){if(Aw(t),t.G==3){var e=t.V++,n=dn(t.F);se(n,"SID",t.J),se(n,"RID",e),se(n,"TYPE","terminate"),Eo(t,n),e=new yo(t,t.h,e,void 0),e.K=2,e.v=eu(dn(n)),n=!1,b.navigator&&b.navigator.sendBeacon&&(n=b.navigator.sendBeacon(e.v.toString(),"")),!n&&b.Image&&(new Image().src=e.v,n=!0),n||(e.g=Uw(e.l,null),e.g.ea(e.v)),e.F=Date.now(),vo(e)}$w(t)}x.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function ru(t){t.g&&(df(t),t.g.cancel(),t.g=null)}function Aw(t){ru(t),t.u&&(b.clearTimeout(t.u),t.u=null),pl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&b.clearTimeout(t.m),t.m=null)}function nc(t,e){t.l.push(new OR(t.Za++,e)),t.G==3&&iu(t)}function iu(t){ww(t.i)||t.m||(t.m=!0,Yd(t.Ha,t),t.C=0)}function HR(t,e){return _w(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=mo(Le(t.Ha,t,e),Lw(t,t.C)),t.C++,!0)}x.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new yo(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=j0(s),H0(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=xw(this,i,e),n=dn(this.F),se(n,"RID",t),se(n,"CVER",22),this.D&&se(n,"X-HTTP-Session-Id",this.D),Eo(this,n),this.o&&s&&uf(n,this.o,s),of(this.i,i),this.Ra&&se(n,"TYPE","init"),this.ja?(se(n,"$req",e),se(n,"SID","null"),i.$=!0,wh(i,n,null)):wh(i,n,e),this.G=2}}else this.G==3&&(t?Km(this,t):this.l.length==0||ww(this.i)||Km(this))};function Km(t,e){var n;e?n=e.m:n=t.V++;const r=dn(t.F);se(r,"SID",t.J),se(r,"RID",n),se(r,"AID",t.U),Eo(t,r),t.o&&t.s&&uf(r,t.o,t.s),n=new yo(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=xw(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),of(t.i,n),wh(n,r,e)}function Eo(t,e){t.j&&rf({},function(n,r){se(e,r,n)})}function xw(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Le(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{MR(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function Dw(t){t.g||t.u||(t.Y=1,Yd(t.Ga,t),t.A=0)}function hf(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=mo(Le(t.Ga,t),Lw(t,t.A)),t.A++,!0)}x.Ga=function(){if(this.u=null,Pw(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=mo(Le(this.bb,this),t)}};x.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Ye(10),ru(this),Pw(this))};function df(t){t.B!=null&&(b.clearTimeout(t.B),t.B=null)}function Pw(t){t.g=new yo(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=dn(t.oa);se(e,"RID","rpc"),se(e,"SID",t.J),se(e,"CI",t.N?"0":"1"),se(e,"AID",t.U),Eo(t,e),se(e,"TYPE","xmlhttp"),t.o&&t.s&&uf(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=eu(dn(e)),n.s=null,n.U=!0,cw(n,t)}x.ab=function(){this.v!=null&&(this.v=null,ru(this),hf(this),Ye(19))};function pl(t){t.v!=null&&(b.clearTimeout(t.v),t.v=null)}function Ow(t,e){var n=null;if(t.g==e){pl(t),df(t),t.g=null;var r=2}else if(Eh(t.i,e))n=e.D,Ew(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Xl(),$e(r,new ow(r,n)),iu(t)}else Dw(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&HR(t,e)||r==2&&hf(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:fr(t,5);break;case 4:fr(t,10);break;case 3:fr(t,6);break;default:fr(t,2)}}}function Lw(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function fr(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=Le(t.jb,t);n||(n=new xr("//www.google.com/images/cleardot.gif"),b.location&&b.location.protocol=="http"||hl(n,"https"),eu(n)),UR(n.toString(),r)}else Ye(2);t.G=0,t.j&&t.j.va(e),$w(t),Aw(t)}x.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Ye(2)):(this.h.info("Failed to ping google.com"),Ye(1))};function $w(t){t.G=0,t.I=-1,t.j&&((Sw(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,jd(t.l),t.l.length=0),t.j.ua())}function Mw(t,e,n){let r=IR(n);if(r.i!="")e&&dl(r,e+"."+r.i),fl(r,r.m);else{const i=b.location;r=CR(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&Hd(t.aa,function(i,s){se(r,s,i)}),e=t.D,n=t.sa,e&&n&&se(r,e,n),se(r,"VER",t.ma),Eo(t,r),r}function Uw(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new ye(new wo({ib:!0})):new ye(t.qa),e.L=t.H,e}function bw(){}x=bw.prototype;x.xa=function(){};x.wa=function(){};x.va=function(){};x.ua=function(){};x.Oa=function(){};function ml(){if(Ei&&!(10<=Number(rR)))throw Error("Environmental error: no available transport.")}ml.prototype.g=function(t,e){return new mt(t,e)};function mt(t,e){Ne.call(this),this.g=new Nw(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!ll(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ll(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new $i(this)}be(mt,Ne);mt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Yd(Le(t.hb,t,e))),Ye(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Mw(t,null,t.W),iu(t)};mt.prototype.close=function(){cf(this.g)};mt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,nc(this.g,e)}else this.v?(e={},e.__data__=Xd(t),nc(this.g,e)):nc(this.g,t)};mt.prototype.M=function(){this.g.j=null,delete this.j,cf(this.g),delete this.g,mt.Z.M.call(this)};function Fw(t){tf.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}be(Fw,tf);function Vw(){nf.call(this),this.status=1}be(Vw,nf);function $i(t){this.g=t}be($i,bw);$i.prototype.xa=function(){$e(this.g,"a")};$i.prototype.wa=function(t){$e(this.g,new Fw(t))};$i.prototype.va=function(t){$e(this.g,new Vw)};$i.prototype.ua=function(){$e(this.g,"b")};ml.prototype.createWebChannel=ml.prototype.g;mt.prototype.send=mt.prototype.u;mt.prototype.open=mt.prototype.m;mt.prototype.close=mt.prototype.close;Yl.NO_ERROR=0;Yl.TIMEOUT=8;Yl.HTTP_ERROR=6;aw.COMPLETE="complete";lw.EventType=go;go.OPEN="a";go.CLOSE="b";go.ERROR="c";go.MESSAGE="d";Ne.prototype.listen=Ne.prototype.N;ye.prototype.listenOnce=ye.prototype.O;ye.prototype.getLastError=ye.prototype.La;ye.prototype.getLastErrorCode=ye.prototype.Da;ye.prototype.getStatus=ye.prototype.ba;ye.prototype.getResponseJson=ye.prototype.Qa;ye.prototype.getResponseText=ye.prototype.ga;ye.prototype.send=ye.prototype.ea;var WR=function(){return new ml},KR=function(){return Xl()},rc=Yl,qR=aw,GR=Ur,qm={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},QR=wo,ra=lw,XR=ye;const Gm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mi="9.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=new xd("@firebase/firestore");function Qm(){return Dr.logLevel}function M(t,...e){if(Dr.logLevel<=Q.DEBUG){const n=e.map(ff);Dr.debug(`Firestore (${Mi}): ${t}`,...n)}}function fn(t,...e){if(Dr.logLevel<=Q.ERROR){const n=e.map(ff);Dr.error(`Firestore (${Mi}): ${t}`,...n)}}function Xm(t,...e){if(Dr.logLevel<=Q.WARN){const n=e.map(ff);Dr.warn(`Firestore (${Mi}): ${t}`,...n)}}function ff(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(t="Unexpected state"){const e=`FIRESTORE (${Mi}) INTERNAL ASSERTION FAILED: `+t;throw fn(e),new Error(e)}function Z(t,e){t||V()}function B(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class P extends qt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class JR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(rt.UNAUTHENTICATED))}shutdown(){}}class ZR{constructor(e){this.t=e,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new sn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new sn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new sn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Z(typeof r.accessToken=="string"),new YR(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Z(e===null||typeof e=="string"),new rt(e)}}class eN{constructor(e,n,r){this.type="FirstParty",this.user=rt.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class tN{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new eN(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rN{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=s=>{s.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.p;return this.p=s.token,M("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.g.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.g.getImmediate({optional:!0});s?i(s):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Z(typeof n.token=="string"),this.p=n.token,new nN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=iN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function X(t,e){return t<e?-1:t>e?1:0}function Si(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new P(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new P(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new P(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new P(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return _e.fromMillis(Date.now())}static fromDate(e){return _e.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new _e(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.timestamp=e}static fromTimestamp(e){return new H(e)}static min(){return new H(new _e(0,0))}static max(){return new H(new _e(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n,r){n===void 0?n=0:n>e.length&&V(),r===void 0?r=e.length-n:r>e.length-n&&V(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Gs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Gs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ne extends Gs{construct(e,n,r){return new ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new P(_.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ne(n)}static emptyPath(){return new ne([])}}const sN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends Gs{construct(e,n,r){return new ze(e,n,r)}static isValidIdentifier(e){return sN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ze(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new P(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new P(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new P(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new P(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ze(n)}static emptyPath(){return new ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(ne.fromString(e))}static fromName(e){return new U(ne.fromString(e).popFirst(5))}static empty(){return new U(ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new ne(e.slice()))}}function oN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=H.fromTimestamp(r===1e9?new _e(n+1,0):new _e(n,r));return new qn(i,U.empty(),e)}function aN(t){return new qn(t.readTime,t.key,-1)}class qn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new qn(H.min(),U.empty(),-1)}static max(){return new qn(H.max(),U.empty(),-1)}}function lN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=U.comparator(t.documentKey,e.documentKey),n!==0?n:X(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==uN)throw t;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&V(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):k.reject(n)}static resolve(e){return new k((n,r)=>{n(e)})}static reject(e){return new k((n,r)=>{r(e)})}static waitFor(e){return new k((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=k.resolve(!1);for(const r of e)n=n.next(i=>i?k.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new k((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new k((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ko(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.it(r),this.rt=r=>n.writeSequenceNumber(r))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ui(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function zw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pf.ot=-1;class Se{constructor(e,n){this.comparator=e,this.root=n||De.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,De.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,De.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ia(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ia(this.root,e,this.comparator,!1)}getReverseIterator(){return new ia(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ia(this.root,e,this.comparator,!0)}}class ia{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class De{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:De.RED,this.left=i!=null?i:De.EMPTY,this.right=s!=null?s:De.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new De(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return De.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return De.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,De.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,De.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw V();const e=this.left.check();if(e!==this.right.check())throw V();return e+(this.isRed()?0:1)}}De.EMPTY=null,De.RED=!0,De.BLACK=!1;De.EMPTY=new class{constructor(){this.size=0}get key(){throw V()}get value(){throw V()}get color(){throw V()}get left(){throw V()}get right(){throw V()}copy(t,e,n,r,i){return this}insert(t,e,n){return new De(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Jm(this.data.getIterator())}getIteratorFrom(e){return new Jm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ee)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ee(this.comparator);return n.data=e,n}}class Jm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.fields=e,e.sort(ze.comparator)}static empty(){return new jt([])}unionWith(e){let n=new Ee(ze.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new jt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Si(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ue(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Ue(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ue.EMPTY_BYTE_STRING=new Ue("");const hN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gn(t){if(Z(!!t),typeof t=="string"){let e=0;const n=hN.exec(t);if(Z(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:me(t.seconds),nanos:me(t.nanos)}}function me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ki(t){return typeof t=="string"?Ue.fromBase64String(t):Ue.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Hw(t){const e=t.mapValue.fields.__previous_value__;return jw(e)?Hw(e):e}function Qs(t){const e=Gn(t.mapValue.fields.__local_write_time__.timestampValue);return new _e(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Ti{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ti("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ti&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(t){return t==null}function gl(t){return t===0&&1/t==-1/0}function fN(t){return typeof t=="number"&&Number.isInteger(t)&&!gl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Pr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?jw(t)?4:pN(t)?9007199254740991:10:V()}function Kt(t,e){if(t===e)return!0;const n=Pr(t);if(n!==Pr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Qs(t).isEqual(Qs(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Gn(r.timestampValue),o=Gn(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return ki(r.bytesValue).isEqual(ki(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return me(r.geoPointValue.latitude)===me(i.geoPointValue.latitude)&&me(r.geoPointValue.longitude)===me(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return me(r.integerValue)===me(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=me(r.doubleValue),o=me(i.doubleValue);return s===o?gl(s)===gl(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Si(t.arrayValue.values||[],e.arrayValue.values||[],Kt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Ym(s)!==Ym(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Kt(s[a],o[a])))return!1;return!0}(t,e);default:return V()}}function Xs(t,e){return(t.values||[]).find(n=>Kt(n,e))!==void 0}function Ii(t,e){if(t===e)return 0;const n=Pr(t),r=Pr(e);if(n!==r)return X(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return X(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=me(i.integerValue||i.doubleValue),a=me(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Zm(t.timestampValue,e.timestampValue);case 4:return Zm(Qs(t),Qs(e));case 5:return X(t.stringValue,e.stringValue);case 6:return function(i,s){const o=ki(i),a=ki(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=X(o[l],a[l]);if(u!==0)return u}return X(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=X(me(i.latitude),me(s.latitude));return o!==0?o:X(me(i.longitude),me(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Ii(o[l],a[l]);if(u)return u}return X(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===sa.mapValue&&s===sa.mapValue)return 0;if(i===sa.mapValue)return 1;if(s===sa.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=X(a[c],u[c]);if(h!==0)return h;const d=Ii(o[a[c]],l[u[c]]);if(d!==0)return d}return X(a.length,u.length)}(t.mapValue,e.mapValue);default:throw V()}}function Zm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return X(t,e);const n=Gn(t),r=Gn(e),i=X(n.seconds,r.seconds);return i!==0?i:X(n.nanos,r.nanos)}function hi(t){return Sh(t)}function Sh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Gn(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ki(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,U.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Sh(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Sh(r.fields[a])}`;return s+"}"}(t.mapValue):V();var e,n}function eg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function kh(t){return!!t&&"integerValue"in t}function mf(t){return!!t&&"arrayValue"in t}function tg(t){return!!t&&"nullValue"in t}function ng(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ca(t){return!!t&&"mapValue"in t}function vs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ui(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=vs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=vs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function pN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.value=e}static empty(){return new _t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ca(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=vs(n)}setAll(e){let n=ze.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=vs(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ca(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Kt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ca(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ui(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new _t(vs(this.value))}}function Ww(t){const e=[];return Ui(t.fields,(n,r)=>{const i=new ze([n]);if(Ca(r)){const s=Ww(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new jt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Pe(e,0,H.min(),H.min(),_t.empty(),0)}static newFoundDocument(e,n,r){return new Pe(e,1,n,H.min(),r,0)}static newNoDocument(e,n){return new Pe(e,2,n,H.min(),_t.empty(),0)}static newUnknownDocument(e,n){return new Pe(e,3,n,H.min(),_t.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Pe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Pe(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ut=null}}function rg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new mN(t,e,n,r,i,s,o)}function gf(t){const e=B(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+hi(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),su(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>hi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>hi(r)).join(",")),e.ut=n}return e.ut}function gN(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${hi(r.value)}`;var r}).join(", ")}]`),su(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>hi(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>hi(n)).join(",")),`Target(${e})`}function yf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!TN(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Kt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!sg(t.startAt,e.startAt)&&sg(t.endAt,e.endAt)}function Th(t){return U.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Je extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,r):new yN(e,n,r):n==="array-contains"?new _N(e,r):n==="in"?new EN(e,r):n==="not-in"?new SN(e,r):n==="array-contains-any"?new kN(e,r):new Je(e,n,r)}static ct(e,n,r){return n==="in"?new vN(e,r):new wN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(Ii(n,this.value)):n!==null&&Pr(this.value)===Pr(n)&&this.at(Ii(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return V()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class yN extends Je{constructor(e,n,r){super(e,n,r),this.key=U.fromName(r.referenceValue)}matches(e){const n=U.comparator(e.key,this.key);return this.at(n)}}class vN extends Je{constructor(e,n){super(e,"in",n),this.keys=Kw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class wN extends Je{constructor(e,n){super(e,"not-in",n),this.keys=Kw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Kw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>U.fromName(r.referenceValue))}class _N extends Je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return mf(n)&&Xs(n.arrayValue,this.value)}}class EN extends Je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Xs(this.value.arrayValue,n)}}class SN extends Je{constructor(e,n){super(e,"not-in",n)}matches(e){if(Xs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Xs(this.value.arrayValue,n)}}class kN extends Je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!mf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Xs(this.value.arrayValue,r))}}class yl{constructor(e,n){this.position=e,this.inclusive=n}}class ws{constructor(e,n="asc"){this.field=e,this.dir=n}}function TN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function ig(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=U.comparator(U.fromName(o.referenceValue),n.key):r=Ii(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function sg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Kt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.lt=null,this.ft=null,this.startAt,this.endAt}}function IN(t,e,n,r,i,s,o,a){return new To(t,e,n,r,i,s,o,a)}function vf(t){return new To(t)}function og(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function qw(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Gw(t){for(const e of t.filters)if(e.ht())return e.field;return null}function Qw(t){return t.collectionGroup!==null}function Ys(t){const e=B(t);if(e.lt===null){e.lt=[];const n=Gw(e),r=qw(e);if(n!==null&&r===null)n.isKeyField()||e.lt.push(new ws(n)),e.lt.push(new ws(ze.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.lt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new ws(ze.keyField(),s))}}}return e.lt}function pn(t){const e=B(t);if(!e.ft)if(e.limitType==="F")e.ft=rg(e.path,e.collectionGroup,Ys(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ys(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new ws(s.field,o))}const r=e.endAt?new yl(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new yl(e.startAt.position,e.startAt.inclusive):null;e.ft=rg(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.ft}function Ih(t,e,n){return new To(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ou(t,e){return yf(pn(t),pn(e))&&t.limitType===e.limitType}function Xw(t){return`${gf(pn(t))}|lt:${t.limitType}`}function Ch(t){return`Query(target=${gN(pn(t))}; limitType=${t.limitType})`}function wf(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):U.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=ig(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Ys(n),r)||n.endAt&&!function(i,s,o){const a=ig(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Ys(n),r))}(t,e)}function CN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Yw(t){return(e,n)=>{let r=!1;for(const i of Ys(t)){const s=RN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function RN(t,e,n){const r=t.field.isKeyField()?U.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Ii(a,l):V()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return V()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gl(e)?"-0":e}}function Zw(t){return{integerValue:""+t}}function NN(t,e){return fN(e)?Zw(e):Jw(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(){this._=void 0}}function AN(t,e,n){return t instanceof vl?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Js?t1(t,e):t instanceof Zs?n1(t,e):function(r,i){const s=e1(r,i),o=ag(s)+ag(r._t);return kh(s)&&kh(r._t)?Zw(o):Jw(r.wt,o)}(t,e)}function xN(t,e,n){return t instanceof Js?t1(t,e):t instanceof Zs?n1(t,e):n}function e1(t,e){return t instanceof wl?kh(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class vl extends au{}class Js extends au{constructor(e){super(),this.elements=e}}function t1(t,e){const n=r1(e);for(const r of t.elements)n.some(i=>Kt(i,r))||n.push(r);return{arrayValue:{values:n}}}class Zs extends au{constructor(e){super(),this.elements=e}}function n1(t,e){let n=r1(e);for(const r of t.elements)n=n.filter(i=>!Kt(i,r));return{arrayValue:{values:n}}}class wl extends au{constructor(e,n){super(),this.wt=e,this._t=n}}function ag(t){return me(t.integerValue||t.doubleValue)}function r1(t){return mf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function DN(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Js&&r instanceof Js||n instanceof Zs&&r instanceof Zs?Si(n.elements,r.elements,Kt):n instanceof wl&&r instanceof wl?Kt(n._t,r._t):n instanceof vl&&r instanceof vl}(t.transform,e.transform)}class PN{constructor(e,n){this.version=e,this.transformResults=n}}class Dt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Dt}static exists(e){return new Dt(void 0,e)}static updateTime(e){return new Dt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ra(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class lu{}function i1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new _f(t.key,Dt.none()):new Io(t.key,t.data,Dt.none());{const n=t.data,r=_t.empty();let i=new Ee(ze.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new br(t.key,r,new jt(i.toArray()),Dt.none())}}function ON(t,e,n){t instanceof Io?function(r,i,s){const o=r.value.clone(),a=ug(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof br?function(r,i,s){if(!Ra(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=ug(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(s1(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function _s(t,e,n,r){return t instanceof Io?function(i,s,o,a){if(!Ra(i.precondition,s))return o;const l=i.value.clone(),u=cg(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof br?function(i,s,o,a){if(!Ra(i.precondition,s))return o;const l=cg(i.fieldTransforms,a,s),u=s.data;return u.setAll(s1(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Ra(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function LN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=e1(r.transform,i||null);s!=null&&(n===null&&(n=_t.empty()),n.set(r.field,s))}return n||null}function lg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Si(n,r,(i,s)=>DN(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Io extends lu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class br extends lu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function s1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ug(t,e,n){const r=new Map;Z(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,xN(o,a,n[i]))}return r}function cg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,AN(s,o,e))}return r}class _f extends lu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $N extends lu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe,q;function UN(t){switch(t){default:return V();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function o1(t){if(t===void 0)return fn("GRPC error has no .code"),_.UNKNOWN;switch(t){case pe.OK:return _.OK;case pe.CANCELLED:return _.CANCELLED;case pe.UNKNOWN:return _.UNKNOWN;case pe.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case pe.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case pe.INTERNAL:return _.INTERNAL;case pe.UNAVAILABLE:return _.UNAVAILABLE;case pe.UNAUTHENTICATED:return _.UNAUTHENTICATED;case pe.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case pe.NOT_FOUND:return _.NOT_FOUND;case pe.ALREADY_EXISTS:return _.ALREADY_EXISTS;case pe.PERMISSION_DENIED:return _.PERMISSION_DENIED;case pe.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case pe.ABORTED:return _.ABORTED;case pe.OUT_OF_RANGE:return _.OUT_OF_RANGE;case pe.UNIMPLEMENTED:return _.UNIMPLEMENTED;case pe.DATA_LOSS:return _.DATA_LOSS;default:return V()}}(q=pe||(pe={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ui(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return zw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bN=new Se(U.comparator);function mn(){return bN}const a1=new Se(U.comparator);function rs(...t){let e=a1;for(const n of t)e=e.insert(n.key,n);return e}function l1(t){let e=a1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function pr(){return Es()}function u1(){return Es()}function Es(){return new bi(t=>t.toString(),(t,e)=>t.isEqual(e))}const FN=new Se(U.comparator),VN=new Ee(U.comparator);function W(...t){let e=VN;for(const n of t)e=e.add(n);return e}const BN=new Ee(X);function c1(){return BN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Co.createSynthesizedTargetChangeForCurrentChange(e,n)),new uu(H.min(),r,c1(),mn(),W())}}class Co{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Co(Ue.EMPTY_BYTE_STRING,n,W(),W(),W())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,n,r,i){this.gt=e,this.removedTargetIds=n,this.key=r,this.yt=i}}class h1{constructor(e,n){this.targetId=e,this.It=n}}class d1{constructor(e,n,r=Ue.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class hg{constructor(){this.Tt=0,this.Et=fg(),this.At=Ue.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=W(),n=W(),r=W();return this.Et.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:V()}}),new Co(this.At,this.Rt,e,n,r)}Dt(){this.bt=!1,this.Et=fg()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Mt(){this.bt=!0,this.Rt=!0}}class zN{constructor(e){this.Ot=e,this.Ft=new Map,this.$t=mn(),this.Bt=dg(),this.Lt=new Ee(X)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const r=this.Qt(n);switch(e.state){case 0:this.jt(n)&&r.Vt(e.resumeToken);break;case 1:r.kt(),r.Pt||r.Dt(),r.Vt(e.resumeToken);break;case 2:r.kt(),r.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(r.Mt(),r.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),r.Vt(e.resumeToken));break;default:V()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((r,i)=>{this.jt(i)&&n(i)})}zt(e){const n=e.targetId,r=e.It.count,i=this.Ht(n);if(i){const s=i.target;if(Th(s))if(r===0){const o=new U(s.path);this.Kt(n,o,Pe.newNoDocument(o,H.min()))}else Z(r===1);else this.Jt(n)!==r&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((s,o)=>{const a=this.Ht(o);if(a){if(s.current&&Th(a.target)){const l=new U(a.target.path);this.$t.get(l)!==null||this.Xt(o,l)||this.Kt(o,l,Pe.newNoDocument(l,e))}s.vt&&(n.set(o,s.St()),s.Dt())}});let r=W();this.Bt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ht(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.$t.forEach((s,o)=>o.setReadTime(e));const i=new uu(e,n,this.Lt,this.$t,r);return this.$t=mn(),this.Bt=dg(),this.Lt=new Ee(X),i}qt(e,n){if(!this.jt(e))return;const r=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,r),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,r){if(!this.jt(e))return;const i=this.Qt(e);this.Xt(e,n)?i.Ct(n,1):i.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),r&&(this.$t=this.$t.insert(n,r))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Ot.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new hg,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new Ee(X),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||M("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Ot.te(e)}Wt(e){this.Ft.set(e,new hg),this.Ot.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Ot.getRemoteKeysForTarget(e).has(n)}}function dg(){return new Se(U.comparator)}function fg(){return new Se(U.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jN=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),HN=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class WN{constructor(e,n){this.databaseId=e,this.dt=n}}function _l(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function f1(t,e){return t.dt?e.toBase64():e.toUint8Array()}function KN(t,e){return _l(t,e.toTimestamp())}function on(t){return Z(!!t),H.fromTimestamp(function(e){const n=Gn(e);return new _e(n.seconds,n.nanos)}(t))}function Ef(t,e){return function(n){return new ne(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function p1(t){const e=ne.fromString(t);return Z(y1(e)),e}function Rh(t,e){return Ef(t.databaseId,e.path)}function ic(t,e){const n=p1(e);if(n.get(1)!==t.databaseId.projectId)throw new P(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new P(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new U(m1(n))}function Nh(t,e){return Ef(t.databaseId,e)}function qN(t){const e=p1(t);return e.length===4?ne.emptyPath():m1(e)}function Ah(t){return new ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function m1(t){return Z(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function pg(t,e,n){return{name:Rh(t,e),fields:n.value.mapValue.fields}}function GN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:V()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.dt?(Z(u===void 0||typeof u=="string"),Ue.fromBase64String(u||"")):(Z(u===void 0||u instanceof Uint8Array),Ue.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?_.UNKNOWN:o1(l.code);return new P(u,l.message||"")}(o);n=new d1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ic(t,r.document.name),s=on(r.document.updateTime),o=new _t({mapValue:{fields:r.document.fields}}),a=Pe.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Na(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ic(t,r.document),s=r.readTime?on(r.readTime):H.min(),o=Pe.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Na([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ic(t,r.document),s=r.removedTargetIds||[];n=new Na([],s,i,null)}else{if(!("filter"in e))return V();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new MN(i),o=r.targetId;n=new h1(o,s)}}return n}function QN(t,e){let n;if(e instanceof Io)n={update:pg(t,e.key,e.value)};else if(e instanceof _f)n={delete:Rh(t,e.key)};else if(e instanceof br)n={update:pg(t,e.key,e.data),updateMask:sA(e.fieldMask)};else{if(!(e instanceof $N))return V();n={verify:Rh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof vl)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Js)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Zs)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof wl)return{fieldPath:s.field.canonicalString(),increment:o._t};throw V()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:KN(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:V()}(t,e.precondition)),n}function XN(t,e){return t&&t.length>0?(Z(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?on(r.updateTime):on(i);return s.isEqual(H.min())&&(s=on(i)),new PN(s,r.transformResults||[])}(n,e))):[]}function YN(t,e){return{documents:[Nh(t,e.path)]}}function JN(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Nh(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Nh(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(c=>function(h){if(h.op==="=="){if(ng(h.value))return{unaryFilter:{field:zr(h.field),op:"IS_NAN"}};if(tg(h.value))return{unaryFilter:{field:zr(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(ng(h.value))return{unaryFilter:{field:zr(h.field),op:"IS_NOT_NAN"}};if(tg(h.value))return{unaryFilter:{field:zr(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zr(h.field),op:nA(h.op),value:h.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:zr(c.field),direction:tA(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.dt||su(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function ZN(t){let e=qN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Z(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=g1(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new ws(ni(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,su(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new yl(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new yl(d,h)}(n.endAt)),IN(e,i,o,s,a,"F",l,u)}function eA(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return V()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function g1(t){return t?t.unaryFilter!==void 0?[iA(t)]:t.fieldFilter!==void 0?[rA(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>g1(e)).reduce((e,n)=>e.concat(n)):V():[]}function tA(t){return jN[t]}function nA(t){return HN[t]}function zr(t){return{fieldPath:t.canonicalString()}}function ni(t){return ze.fromServerFormat(t.fieldPath)}function rA(t){return Je.create(ni(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return V()}}(t.fieldFilter.op),t.fieldFilter.value)}function iA(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ni(t.unaryFilter.field);return Je.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ni(t.unaryFilter.field);return Je.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ni(t.unaryFilter.field);return Je.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ni(t.unaryFilter.field);return Je.create(i,"!=",{nullValue:"NULL_VALUE"});default:return V()}}function sA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function y1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ON(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=_s(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=_s(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=u1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=i1(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(H.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),W())}isEqual(e){return this.batchId===e.batchId&&Si(this.mutations,e.mutations,(n,r)=>lg(n,r))&&Si(this.baseMutations,e.baseMutations,(n,r)=>lg(n,r))}}class Sf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Z(e.mutations.length===r.length);let i=FN;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Sf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,n,r,i,s=H.min(),o=H.min(),a=Ue.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new vr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e){this.ne=e}}function uA(t){const e=ZN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ih(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(){this.ze=new hA}addToCollectionParentIndex(e,n){return this.ze.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return k.resolve()}deleteFieldIndex(e,n){return k.resolve()}getDocumentsMatchingTarget(e,n){return k.resolve(null)}getIndexType(e,n){return k.resolve(0)}getFieldIndexes(e,n){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,n){return k.resolve(qn.min())}getMinOffsetFromCollectionGroup(e,n){return k.resolve(qn.min())}updateCollectionGroup(e,n,r){return k.resolve()}updateIndexEntries(e,n){return k.resolve()}}class hA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ee(ne.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ee(ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new Ci(0)}static Rn(){return new Ci(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(){this.changes=new bi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Pe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?k.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&_s(r.mutation,i,jt.empty(),_e.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,W()).next(()=>r))}getLocalViewOfDocuments(e,n,r=W()){const i=pr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=rs();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=pr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,W()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=mn();const o=Es(),a=Es();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof br)?s=s.insert(u.key,u):c!==void 0&&(o.set(u.key,c.mutation.getFieldMask()),_s(c.mutation,u,c.mutation.getFieldMask(),_e.now()))}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new fA(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Es();let i=new Se((o,a)=>o-a),s=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||jt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||W()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=u1();c.forEach(d=>{if(!s.has(d)){const m=i1(n.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return k.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return U.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Qw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):k.resolve(pr());let a=-1,l=s;return o.next(u=>k.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?k.resolve():this.getBaseDocument(e,c,h).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,W())).next(c=>({batchId:a,changes:l1(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new U(n)).next(r=>{let i=rs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=rs();return this.indexManager.getCollectionParents(e,i).next(o=>k.forEach(o,a=>{const l=function(u,c){return new To(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,Pe.newInvalidDocument(u)))});let o=rs();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&_s(u.mutation,l,jt.empty(),_e.now()),wf(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):k.resolve(Pe.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return k.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var r;return this.Jn.set(n.id,{id:(r=n).id,version:r.version,createTime:on(r.createTime)}),k.resolve()}getNamedQuery(e,n){return k.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(r){return{name:r.name,query:uA(r.bundledQuery),readTime:on(r.readTime)}}(n)),k.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(){this.overlays=new Se(U.comparator),this.Xn=new Map}getOverlay(e,n){return k.resolve(this.overlays.get(n))}getOverlays(e,n){const r=pr();return k.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ie(e,n,s)}),k.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Xn.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Xn.delete(r)),k.resolve()}getOverlaysForCollection(e,n,r){const i=pr(),s=n.length+1,o=new U(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return k.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Se((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=pr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=pr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return k.resolve(a)}ie(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Xn.get(i.largestBatchId).delete(r.key);this.Xn.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new aA(n,r));let s=this.Xn.get(n);s===void 0&&(s=W(),this.Xn.set(n,s)),this.Xn.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(){this.Zn=new Ee(Te.ts),this.es=new Ee(Te.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const r=new Te(e,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.rs(new Te(e,n))}os(e,n){e.forEach(r=>this.removeReference(r,n))}us(e){const n=new U(new ne([])),r=new Te(n,e),i=new Te(n,e+1),s=[];return this.es.forEachInRange([r,i],o=>{this.rs(o),s.push(o.key)}),s}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new U(new ne([])),r=new Te(n,e),i=new Te(n,e+1);let s=W();return this.es.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Te(e,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Te{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return U.comparator(e.key,n.key)||X(e.ls,n.ls)}static ns(e,n){return X(e.ls,n.ls)||U.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new Ee(Te.ts)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new oA(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.ds=this.ds.add(new Te(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,n){return k.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ws(r),s=i<0?0:i;return k.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Te(n,0),i=new Te(n,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([r,i],o=>{const a=this._s(o.ls);s.push(a)}),k.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ee(X);return n.forEach(i=>{const s=new Te(i,0),o=new Te(i,Number.POSITIVE_INFINITY);this.ds.forEachInRange([s,o],a=>{r=r.add(a.ls)})}),k.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;U.isDocumentKey(s)||(s=s.child(""));const o=new Te(new U(s),0);let a=new Ee(X);return this.ds.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.ls)),!0)},o),k.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(r=>{const i=this._s(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Z(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.ds;return k.forEach(n.mutations,i=>{const s=new Te(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ds=r})}In(e){}containsKey(e,n){const r=new Te(n,0),i=this.ds.firstAfterOrEqual(r);return k.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(e){this.ps=e,this.docs=new Se(U.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ps(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return k.resolve(r?r.document.mutableCopy():Pe.newInvalidDocument(n))}getEntries(e,n){let r=mn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Pe.newInvalidDocument(i))}),k.resolve(r)}getAllFromCollection(e,n,r){let i=mn();const s=new U(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||lN(aN(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,n,r,i){V()}Is(e,n){return k.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new wA(this)}getSize(e){return k.resolve(this.size)}}class wA extends dA{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.zn.addEntry(e,i)):this.zn.removeEntry(r)}),k.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(e){this.persistence=e,this.Ts=new bi(n=>gf(n),yf),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.Es=0,this.As=new kf,this.targetCount=0,this.Rs=Ci.An()}forEachTarget(e,n){return this.Ts.forEach((r,i)=>n(i)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Es&&(this.Es=n),k.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new Ci(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.vn(n),k.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Ts.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),k.waitFor(s).next(()=>i)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const r=this.Ts.get(n)||null;return k.resolve(r)}addMatchingKeys(e,n,r){return this.As.ss(n,r),k.resolve()}removeMatchingKeys(e,n,r){this.As.os(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),k.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),k.resolve()}getMatchingKeysForTargetId(e,n){const r=this.As.hs(n);return k.resolve(r)}containsKey(e,n){return k.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e,n){this.bs={},this.overlays={},this.Ps=new pf(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new _A(this),this.indexManager=new cA,this.remoteDocumentCache=function(r){return new vA(r)}(r=>this.referenceDelegate.Ss(r)),this.wt=new lA(n),this.Ds=new mA(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new gA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.bs[e.toKey()];return r||(r=new yA(n,this.referenceDelegate),this.bs[e.toKey()]=r),r}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,r){M("MemoryPersistence","Starting transaction:",e);const i=new SA(this.Ps.next());return this.referenceDelegate.Cs(),r(i).next(s=>this.referenceDelegate.xs(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ns(e,n){return k.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class SA extends cN{constructor(e){super(),this.currentSequenceNumber=e}}class Tf{constructor(e){this.persistence=e,this.ks=new kf,this.Ms=null}static Os(e){return new Tf(e)}get Fs(){if(this.Ms)return this.Ms;throw V()}addReference(e,n,r){return this.ks.addReference(r,n),this.Fs.delete(r.toString()),k.resolve()}removeReference(e,n,r){return this.ks.removeReference(r,n),this.Fs.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),k.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(i=>this.Fs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Fs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Cs(){this.Ms=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Fs,r=>{const i=U.fromPath(r);return this.$s(e,i).next(s=>{s||n.removeEntry(i,H.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(r=>{r?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return k.or([()=>k.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Pi=r,this.vi=i}static Vi(e,n){let r=W(),i=W();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new If(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ci(e,n).next(s=>s||this.xi(e,n,i,r)).next(s=>s||this.Ni(e,n))}Ci(e,n){if(og(n))return k.resolve(null);let r=pn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ih(n,null,"F"),r=pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=W(...s);return this.Di.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ki(n,a);return this.Mi(n,u,o,l.readTime)?this.Ci(e,Ih(n,null,"F")):this.Oi(e,u,n,l)}))})))}xi(e,n,r,i){return og(n)||i.isEqual(H.min())?this.Ni(e,n):this.Di.getDocuments(e,r).next(s=>{const o=this.ki(n,s);return this.Mi(n,o,r,i)?this.Ni(e,n):(Qm()<=Q.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ch(n)),this.Oi(e,o,n,oN(i,-1)))})}ki(e,n){let r=new Ee(Yw(e));return n.forEach((i,s)=>{wf(e,s)&&(r=r.add(s))}),r}Mi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ni(e,n){return Qm()<=Q.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Ch(n)),this.Di.getDocumentsMatchingQuery(e,n,qn.min())}Oi(e,n,r,i){return this.Di.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(e,n,r,i){this.persistence=e,this.Fi=n,this.wt=i,this.$i=new Se(X),this.Bi=new bi(s=>gf(s),yf),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(r)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new pA(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function IA(t,e,n,r){return new TA(t,e,n,r)}async function v1(t,e){const n=B(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=W();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Ki:u,removedBatchIds:o,addedBatchIds:a}))})})}function CA(t,e){const n=B(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ui.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=k.resolve();return h.forEach(m=>{d=d.next(()=>u.getEntry(a,m)).next(y=>{const w=l.docVersions.get(m);Z(w!==null),y.version.compareTo(w)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=W();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function w1(t){const e=B(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function RA(t,e){const n=B(t),r=e.snapshotVersion;let i=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});i=n.$i;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Vs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Vs.addMatchingKeys(s,c.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?m=m.withResumeToken(Ue.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(h,m),function(y,w,T){return y.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(d,m,c)&&a.push(n.Vs.updateTargetData(s,m))});let l=mn(),u=W();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(NA(s,o,e.documentUpdates).next(c=>{l=c.Gi,u=c.Qi})),!r.isEqual(H.min())){const c=n.Vs.getLastRemoteSnapshotVersion(s).next(h=>n.Vs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return k.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.$i=i,s))}function NA(t,e,n){let r=W(),i=W();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=mn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(H.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):M("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Gi:o,Qi:i}})}function AA(t,e){const n=B(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function xA(t,e){const n=B(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Vs.getTargetData(r,e).next(s=>s?(i=s,k.resolve(i)):n.Vs.allocateTargetId(r).next(o=>(i=new vr(e,o,0,r.currentSequenceNumber),n.Vs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.$i.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.$i=n.$i.insert(r.targetId,r),n.Bi.set(e,r.targetId)),r})}async function xh(t,e,n){const r=B(t),i=r.$i.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ko(o))throw o;M("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.$i=r.$i.remove(e),r.Bi.delete(i.target)}function mg(t,e,n){const r=B(t);let i=H.min(),s=W();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=B(a),h=c.Bi.get(u);return h!==void 0?k.resolve(c.$i.get(h)):c.Vs.getTargetData(l,u)}(r,o,pn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Fi.getDocumentsMatchingQuery(o,e,n?i:H.min(),n?s:W())).next(a=>(DA(r,CN(e),a),{documents:a,ji:s})))}function DA(t,e,n){let r=H.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Li.set(e,r)}class gg{constructor(){this.activeTargetIds=c1()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class PA{constructor(){this.Fr=new gg,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,r){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new gg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{Br(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,r,i,s){const o=this.oo(e,n);M("RestConnection","Sending: ",o,r);const a={};return this.uo(a,i,s),this.co(e,o,a,r).then(l=>(M("RestConnection","Received: ",l),l),l=>{throw Xm("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}ao(e,n,r,i,s,o){return this.ro(e,n,r,i,s)}uo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Mi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}oo(e,n){const r=LA[e];return`${this.so}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,r,i){return new Promise((s,o)=>{const a=new XR;a.listenOnce(qR.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case rc.NO_ERROR:const u=a.getResponseJson();M("Connection","XHR received:",JSON.stringify(u)),s(u);break;case rc.TIMEOUT:M("Connection",'RPC "'+e+'" timed out'),o(new P(_.DEADLINE_EXCEEDED,"Request time out"));break;case rc.HTTP_ERROR:const c=a.getStatus();if(M("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(m){const y=m.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(y)>=0?y:_.UNKNOWN}(h.status);o(new P(d,h.message))}else o(new P(_.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new P(_.UNAVAILABLE,"Connection failed."));break;default:V()}}finally{M("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}ho(e,n,r){const i=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=WR(),o=KR(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new QR({})),this.uo(a.initMessageHeaders,n,r),r0()||s0()||Uk()||o0()||bk()||i0()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=i.join("");M("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const d=new $A({jr:y=>{h?M("Connection","Not sending because WebChannel is closed:",y):(c||(M("Connection","Opening WebChannel transport."),u.open(),c=!0),M("Connection","WebChannel sending:",y),u.send(y))},Wr:()=>u.close()}),m=(y,w,T)=>{y.listen(w,p=>{try{T(p)}catch(f){setTimeout(()=>{throw f},0)}})};return m(u,ra.EventType.OPEN,()=>{h||M("Connection","WebChannel transport opened.")}),m(u,ra.EventType.CLOSE,()=>{h||(h=!0,M("Connection","WebChannel transport closed"),d.eo())}),m(u,ra.EventType.ERROR,y=>{h||(h=!0,Xm("Connection","WebChannel transport errored:",y),d.eo(new P(_.UNAVAILABLE,"The operation could not be completed")))}),m(u,ra.EventType.MESSAGE,y=>{var w;if(!h){const T=y.data[0];Z(!!T);const p=T,f=p.error||((w=p[0])===null||w===void 0?void 0:w.error);if(f){M("Connection","WebChannel received error:",f);const g=f.status;let v=function(R){const N=pe[R];if(N!==void 0)return o1(N)}(g),C=f.message;v===void 0&&(v=_.INTERNAL,C="Unknown error status: "+g+" with message "+f.message),h=!0,d.eo(new P(v,C)),u.close()}else M("Connection","WebChannel received:",T),d.no(T)}}),m(o,GR.STAT_EVENT,y=>{y.stat===qm.PROXY?M("Connection","Detected buffering proxy"):y.stat===qm.NOPROXY&&M("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.Zr()},0),d}}function sc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(t){return new WN(t,!0)}class _1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.js=e,this.timerId=n,this.lo=r,this.fo=i,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),r=Math.max(0,Date.now()-this.yo),i=Math.max(0,n-r);i>0&&M("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,i,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(e,n,r,i,s,o,a,l){this.js=e,this.Ao=r,this.Ro=i,this.bo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new _1(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(fn(n.toString()),fn("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Po===n&&this.Uo(r,i)},r=>{e(()=>{const i=new P(_.UNKNOWN,"Fetching auth token failed: "+r.message);return this.qo(i)})})}Uo(e,n){const r=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{r(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(i=>{r(()=>this.qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return M("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class UA extends E1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.wt=s}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=GN(this.wt,e),r=function(i){if(!("targetChange"in i))return H.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?H.min():s.readTime?on(s.readTime):H.min()}(e);return this.listener.Go(n,r)}Qo(e){const n={};n.database=Ah(this.wt),n.addTarget=function(i,s){let o;const a=s.target;return o=Th(a)?{documents:YN(i,a)}:{query:JN(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=f1(i,s.resumeToken):s.snapshotVersion.compareTo(H.min())>0&&(o.readTime=_l(i,s.snapshotVersion.toTimestamp())),o}(this.wt,e);const r=eA(this.wt,e);r&&(n.labels=r),this.Oo(n)}jo(e){const n={};n.database=Ah(this.wt),n.removeTarget=e,this.Oo(n)}}class bA extends E1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.wt=s,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,n){return this.bo.ho("Write",e,n)}onMessage(e){if(Z(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const n=XN(e.writeResults,e.commitTime),r=on(e.commitTime);return this.listener.Jo(r,n)}return Z(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=Ah(this.wt),this.Oo(e)}Ho(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>QN(this.wt,r))};this.Oo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=r,this.wt=i,this.Zo=!1}tu(){if(this.Zo)throw new P(_.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.bo.ro(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new P(_.UNKNOWN,i.toString())})}ao(e,n,r,i){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.bo.ao(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new P(_.UNKNOWN,s.toString())})}terminate(){this.Zo=!0}}class VA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(fn(n),this.su=!1):M("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=s,this.du.Br(o=>{r.enqueueAndForget(async()=>{Fr(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=B(a);l.lu.add(4),await Ro(l),l._u.set("Unknown"),l.lu.delete(4),await hu(l)}(this))})}),this._u=new VA(r,i)}}async function hu(t){if(Fr(t))for(const e of t.fu)await e(!0)}async function Ro(t){for(const e of t.fu)await e(!1)}function S1(t,e){const n=B(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),Nf(n)?Rf(n):Fi(n).Co()&&Cf(n,e))}function k1(t,e){const n=B(t),r=Fi(n);n.hu.delete(e),r.Co()&&T1(n,e),n.hu.size===0&&(r.Co()?r.ko():Fr(n)&&n._u.set("Unknown"))}function Cf(t,e){t.wu.Nt(e.targetId),Fi(t).Qo(e)}function T1(t,e){t.wu.Nt(e),Fi(t).jo(e)}function Rf(t){t.wu=new zN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),Fi(t).start(),t._u.iu()}function Nf(t){return Fr(t)&&!Fi(t).Do()&&t.hu.size>0}function Fr(t){return B(t).lu.size===0}function I1(t){t.wu=void 0}async function zA(t){t.hu.forEach((e,n)=>{Cf(t,e)})}async function jA(t,e){I1(t),Nf(t)?(t._u.uu(e),Rf(t)):t._u.set("Unknown")}async function HA(t,e,n){if(t._u.set("Online"),e instanceof d1&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.hu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.hu.delete(o),r.wu.removeTarget(o))}(t,e)}catch(r){M("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await El(t,r)}else if(e instanceof Na?t.wu.Ut(e):e instanceof h1?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(H.min()))try{const r=await w1(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.wu.Yt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.hu.get(l);u&&i.hu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.hu.get(a);if(!l)return;i.hu.set(a,l.withResumeToken(Ue.EMPTY_BYTE_STRING,l.snapshotVersion)),T1(i,a);const u=new vr(l.target,a,1,l.sequenceNumber);Cf(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){M("RemoteStore","Failed to raise snapshot:",r),await El(t,r)}}async function El(t,e,n){if(!ko(e))throw e;t.lu.add(1),await Ro(t),t._u.set("Offline"),n||(n=()=>w1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await hu(t)})}function C1(t,e){return e().catch(n=>El(t,n,e))}async function du(t){const e=B(t),n=Qn(e);let r=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;WA(e);)try{const i=await AA(e.localStore,r);if(i===null){e.au.length===0&&n.ko();break}r=i.batchId,KA(e,i)}catch(i){await El(e,i)}R1(e)&&N1(e)}function WA(t){return Fr(t)&&t.au.length<10}function KA(t,e){t.au.push(e);const n=Qn(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function R1(t){return Fr(t)&&!Qn(t).Do()&&t.au.length>0}function N1(t){Qn(t).start()}async function qA(t){Qn(t).Xo()}async function GA(t){const e=Qn(t);for(const n of t.au)e.Ho(n.mutations)}async function QA(t,e,n){const r=t.au.shift(),i=Sf.from(r,e,n);await C1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await du(t)}async function XA(t,e){e&&Qn(t).zo&&await async function(n,r){if(i=r.code,UN(i)&&i!==_.ABORTED){const s=n.au.shift();Qn(n).No(),await C1(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await du(n)}var i}(t,e),R1(t)&&N1(t)}async function vg(t,e){const n=B(t);n.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const r=Fr(n);n.lu.add(3),await Ro(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await hu(n)}async function YA(t,e){const n=B(t);e?(n.lu.delete(2),await hu(n)):e||(n.lu.add(2),await Ro(n),n._u.set("Unknown"))}function Fi(t){return t.mu||(t.mu=function(e,n,r){const i=B(e);return i.tu(),new UA(n,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,r)}(t.datastore,t.asyncQueue,{zr:zA.bind(null,t),Jr:jA.bind(null,t),Go:HA.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),Nf(t)?Rf(t):t._u.set("Unknown")):(await t.mu.stop(),I1(t))})),t.mu}function Qn(t){return t.gu||(t.gu=function(e,n,r){const i=B(e);return i.tu(),new bA(n,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,r)}(t.datastore,t.asyncQueue,{zr:qA.bind(null,t),Jr:XA.bind(null,t),Yo:GA.bind(null,t),Jo:QA.bind(null,t)}),t.fu.push(async e=>{e?(t.gu.No(),await du(t)):(await t.gu.stop(),t.au.length>0&&(M("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))})),t.gu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new sn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Af(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new P(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xf(t,e){if(fn("AsyncQueue",`${e}: ${t}`),ko(t))return new P(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e){this.comparator=e?(n,r)=>e(n,r)||U.comparator(n.key,r.key):(n,r)=>U.comparator(n.key,r.key),this.keyedMap=rs(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new di(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof di)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new di;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(){this.yu=new Se(U.comparator)}track(e){const n=e.doc.key,r=this.yu.get(n);r?e.type!==0&&r.type===3?this.yu=this.yu.insert(n,e):e.type===3&&r.type!==1?this.yu=this.yu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.yu=this.yu.remove(n):e.type===1&&r.type===2?this.yu=this.yu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):V():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ri{constructor(e,n,r,i,s,o,a,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new Ri(e,n,di.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ou(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(){this.Iu=void 0,this.listeners=[]}}class ZA{constructor(){this.queries=new bi(e=>Xw(e),ou),this.onlineState="Unknown",this.Tu=new Set}}async function A1(t,e){const n=B(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new JA),i)try{s.Iu=await n.onListen(r)}catch(o){const a=xf(o,`Initialization of query '${Ch(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Eu(n.onlineState),s.Iu&&e.Au(s.Iu)&&Df(n)}async function x1(t,e){const n=B(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function ex(t,e){const n=B(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Au(i)&&(r=!0);o.Iu=i}}r&&Df(n)}function tx(t,e,n){const r=B(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Df(t){t.Tu.forEach(e=>{e.next()})}class D1{constructor(e,n,r){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=r||{}}Au(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ri(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Du||!r)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=Ri.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e){this.key=e}}class O1{constructor(e){this.key=e}}class nx{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=W(),this.mutatedKeys=W(),this.Lu=Yw(e),this.Uu=new di(this.Lu)}get qu(){return this.Fu}Ku(e,n){const r=n?n.Gu:new wg,i=n?n.Uu:this.Uu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),m=wf(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),w=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let T=!1;d&&m?d.data.isEqual(m.data)?y!==w&&(r.track({type:3,doc:m}),T=!0):this.Qu(d,m)||(r.track({type:2,doc:m}),T=!0,(l&&this.Lu(m,l)>0||u&&this.Lu(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),T=!0):d&&!m&&(r.track({type:1,doc:d}),T=!0,(l||u)&&(a=!0)),T&&(m?(o=o.add(m),s=w?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Uu:o,Gu:r,Mi:a,mutatedKeys:s}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const s=e.Gu.pu();s.sort((u,c)=>function(h,d){const m=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return V()}};return m(h)-m(d)}(u.type,c.type)||this.Lu(u.doc,c.doc)),this.ju(r);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,l=a!==this.$u;return this.$u=a,s.length!==0||l?{snapshot:new Ri(this.query,e.Uu,i,s,e.mutatedKeys,a===0,l,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new wg,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=W(),this.Uu.forEach(r=>{this.Hu(r.key)&&(this.Bu=this.Bu.add(r.key))});const n=[];return e.forEach(r=>{this.Bu.has(r)||n.push(new O1(r))}),this.Bu.forEach(r=>{e.has(r)||n.push(new P1(r))}),n}Ju(e){this.Fu=e.ji,this.Bu=W();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return Ri.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class rx{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class ix{constructor(e){this.key=e,this.Xu=!1}}class sx{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new bi(a=>Xw(a),ou),this.ec=new Map,this.nc=new Set,this.sc=new Se(U.comparator),this.ic=new Map,this.rc=new kf,this.oc={},this.uc=new Map,this.cc=Ci.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function ox(t,e){const n=gx(t);let r,i;const s=n.tc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Yu();else{const o=await xA(n.localStore,pn(e));n.isPrimaryClient&&S1(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await ax(n,e,r,a==="current")}return i}async function ax(t,e,n,r){t.hc=(c,h,d)=>async function(m,y,w,T){let p=y.view.Ku(w);p.Mi&&(p=await mg(m.localStore,y.query,!1).then(({documents:v})=>y.view.Ku(v,p)));const f=T&&T.targetChanges.get(y.targetId),g=y.view.applyChanges(p,m.isPrimaryClient,f);return Eg(m,y.targetId,g.zu),g.snapshot}(t,c,h,d);const i=await mg(t.localStore,e,!0),s=new nx(e,i.ji),o=s.Ku(i.documents),a=Co.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),l=s.applyChanges(o,t.isPrimaryClient,a);Eg(t,n,l.zu);const u=new rx(e,n,s);return t.tc.set(e,u),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),l.snapshot}async function lx(t,e){const n=B(t),r=n.tc.get(e),i=n.ec.get(r.targetId);if(i.length>1)return n.ec.set(r.targetId,i.filter(s=>!ou(s,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await xh(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),k1(n.remoteStore,r.targetId),Dh(n,r.targetId)}).catch(So)):(Dh(n,r.targetId),await xh(n.localStore,r.targetId,!0))}async function ux(t,e,n){const r=yx(t);try{const i=await function(s,o){const a=B(s),l=_e.now(),u=o.reduce((d,m)=>d.add(m.key),W());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=mn(),y=W();return a.Ui.getEntries(d,u).next(w=>{m=w,m.forEach((T,p)=>{p.isValidDocument()||(y=y.add(T))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,m)).next(w=>{c=w;const T=[];for(const p of o){const f=LN(p,c.get(p.key).overlayedDocument);f!=null&&T.push(new br(p.key,f,Ww(f.value.mapValue),Dt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,T,o)}).next(w=>{h=w;const T=w.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(d,w.batchId,T)})}).then(()=>({batchId:h.batchId,changes:l1(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.oc[s.currentUser.toKey()];l||(l=new Se(X)),l=l.insert(o,a),s.oc[s.currentUser.toKey()]=l}(r,i.batchId,n),await No(r,i.changes),await du(r.remoteStore)}catch(i){const s=xf(i,"Failed to persist write");n.reject(s)}}async function L1(t,e){const n=B(t);try{const r=await RA(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ic.get(s);o&&(Z(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Xu=!0:i.modifiedDocuments.size>0?Z(o.Xu):i.removedDocuments.size>0&&(Z(o.Xu),o.Xu=!1))}),await No(n,r,e)}catch(r){await So(r)}}function _g(t,e,n){const r=B(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.tc.forEach((s,o)=>{const a=o.view.Eu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=B(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Eu(o)&&(l=!0)}),l&&Df(a)}(r.eventManager,e),i.length&&r.Zu.Go(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function cx(t,e,n){const r=B(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ic.get(e),s=i&&i.key;if(s){let o=new Se(U.comparator);o=o.insert(s,Pe.newNoDocument(s,H.min()));const a=W().add(s),l=new uu(H.min(),new Map,new Ee(X),o,a);await L1(r,l),r.sc=r.sc.remove(s),r.ic.delete(e),Pf(r)}else await xh(r.localStore,e,!1).then(()=>Dh(r,e,n)).catch(So)}async function hx(t,e){const n=B(t),r=e.batch.batchId;try{const i=await CA(n.localStore,e);M1(n,r,null),$1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await No(n,i)}catch(i){await So(i)}}async function dx(t,e,n){const r=B(t);try{const i=await function(s,o){const a=B(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(Z(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);M1(r,e,n),$1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await No(r,i)}catch(i){await So(i)}}function $1(t,e){(t.uc.get(e)||[]).forEach(n=>{n.resolve()}),t.uc.delete(e)}function M1(t,e,n){const r=B(t);let i=r.oc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.oc[r.currentUser.toKey()]=i}}function Dh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ec.get(e))t.tc.delete(r),n&&t.Zu.lc(r,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(r=>{t.rc.containsKey(r)||U1(t,r)})}function U1(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(k1(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),Pf(t))}function Eg(t,e,n){for(const r of n)r instanceof P1?(t.rc.addReference(r.key,e),fx(t,r)):r instanceof O1?(M("SyncEngine","Document no longer in limbo: "+r.key),t.rc.removeReference(r.key,e),t.rc.containsKey(r.key)||U1(t,r.key)):V()}function fx(t,e){const n=e.key,r=n.path.canonicalString();t.sc.get(n)||t.nc.has(r)||(M("SyncEngine","New document in limbo: "+n),t.nc.add(r),Pf(t))}function Pf(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new U(ne.fromString(e)),r=t.cc.next();t.ic.set(r,new ix(n)),t.sc=t.sc.insert(n,r),S1(t.remoteStore,new vr(pn(vf(n.path)),r,2,pf.ot))}}async function No(t,e,n){const r=B(t),i=[],s=[],o=[];r.tc.isEmpty()||(r.tc.forEach((a,l)=>{o.push(r.hc(l,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u.fromCache?"not-current":"current"),i.push(u);const c=If.Vi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Zu.Go(i),await async function(a,l){const u=B(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>k.forEach(l,h=>k.forEach(h.Pi,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>k.forEach(h.vi,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!ko(c))throw c;M("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.$i.get(h),m=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(m);u.$i=u.$i.insert(h,y)}}}(r.localStore,s))}async function px(t,e){const n=B(t);if(!n.currentUser.isEqual(e)){M("SyncEngine","User change. New user:",e.toKey());const r=await v1(n.localStore,e);n.currentUser=e,function(i,s){i.uc.forEach(o=>{o.forEach(a=>{a.reject(new P(_.CANCELLED,s))})}),i.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await No(n,r.Ki)}}function mx(t,e){const n=B(t),r=n.ic.get(e);if(r&&r.Xu)return W().add(r.key);{let i=W();const s=n.ec.get(e);if(!s)return i;for(const o of s){const a=n.tc.get(o);i=i.unionWith(a.view.qu)}return i}}function gx(t){const e=B(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=L1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=cx.bind(null,e),e.Zu.Go=ex.bind(null,e.eventManager),e.Zu.lc=tx.bind(null,e.eventManager),e}function yx(t){const e=B(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dx.bind(null,e),e}class vx{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=cu(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return IA(this.persistence,new kA,e.initialUser,this.wt)}_c(e){return new EA(Tf.Os,this.wt)}dc(e){return new PA}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class wx{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>_g(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=px.bind(null,this.syncEngine),await YA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ZA}createDatastore(e){const n=cu(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new MA(i));var i;return function(s,o,a,l){return new FA(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>_g(this.syncEngine,a,0),o=yg.V()?new yg:new OA,new BA(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new sx(r,i,s,o,a,l);return u&&(c.ac=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=B(e);M("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await Ro(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):fn("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=rt.UNAUTHENTICATED,this.clientId=Bw.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{M("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(M("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new P(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new sn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=xf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ex(t,e){t.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await v1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Sx(t,e){t.asyncQueue.verifyOperationInProgress();const n=await kx(t);M("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>vg(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>vg(e.remoteStore,s)),t.onlineComponents=e}async function kx(t){return t.offlineComponents||(M("FirestoreClient","Using default OfflineComponentProvider"),await Ex(t,new vx)),t.offlineComponents}async function F1(t){return t.onlineComponents||(M("FirestoreClient","Using default OnlineComponentProvider"),await Sx(t,new wx)),t.onlineComponents}function Tx(t){return F1(t).then(e=>e.syncEngine)}async function V1(t){const e=await F1(t),n=e.eventManager;return n.onListen=ox.bind(null,e.syncEngine),n.onUnlisten=lx.bind(null,e.syncEngine),n}function Ix(t,e,n={}){const r=new sn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new b1({next:h=>{s.enqueueAndForget(()=>x1(i,c));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new P(_.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new P(_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new D1(vf(o.path),u,{includeMetadataChanges:!0,Du:!0});return A1(i,c)}(await V1(t),t.asyncQueue,e,n,r)),r.promise}function Cx(t,e,n={}){const r=new sn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new b1({next:h=>{s.enqueueAndForget(()=>x1(i,c)),h.fromCache&&a.source==="server"?l.reject(new P(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new D1(o,u,{includeMetadataChanges:!0,Du:!0});return A1(i,c)}(await V1(t),t.asyncQueue,e,n,r)),r.promise}const Sg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B1(t,e,n){if(!n)throw new P(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Rx(t,e,n,r){if(e===!0&&r===!0)throw new P(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function kg(t){if(!U.isDocumentKey(t))throw new P(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Tg(t){if(U.isDocumentKey(t))throw new P(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function fu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":V()}function Xn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new P(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fu(t);throw new P(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new P(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new P(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Rx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ig({}),this._settingsFrozen=!1,e instanceof Ti?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new P(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ti(i.options.projectId)}(e))}get app(){if(!this._app)throw new P(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new P(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ig(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new JR;switch(n.type){case"gapi":const r=n.client;return Z(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new tN(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new P(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Sg.get(e);n&&(M("ComponentProvider","Removing Datastore"),Sg.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ut(this.firestore,e,this._key)}}class Ao{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ao(this.firestore,e,this._query)}}class zn extends Ao{constructor(e,n,r){super(e,n,vf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ut(this.firestore,null,new U(e))}withConverter(e){return new zn(this.firestore,e,this._path)}}function xo(t,e,...n){if(t=et(t),B1("collection","path",e),t instanceof Of){const r=ne.fromString(e,...n);return Tg(r),new zn(t,null,r)}{if(!(t instanceof ut||t instanceof zn))throw new P(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ne.fromString(e,...n));return Tg(r),new zn(t.firestore,null,r)}}function Vr(t,e,...n){if(t=et(t),arguments.length===1&&(e=Bw.I()),B1("doc","path",e),t instanceof Of){const r=ne.fromString(e,...n);return kg(r),new ut(t,null,new U(r))}{if(!(t instanceof ut||t instanceof zn))throw new P(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ne.fromString(e,...n));return kg(r),new ut(t.firestore,t instanceof zn?t.converter:null,new U(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new _1(this,"async_queue_retry"),this.Kc=()=>{const n=sc();n&&M("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=sc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=sc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new sn;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Oc.push(e),this.jc()))}async jc(){if(this.Oc.length!==0){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(e){if(!ko(e))throw e;M("AsyncQueue","Operation failed with retryable error: "+e)}this.Oc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Mc.then(()=>(this.Lc=!0,e().catch(r=>{this.Bc=r,this.Lc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw fn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Lc=!1,r))));return this.Mc=n,n}enqueueAfterDelay(e,n,r){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const i=Af.createAndSchedule(this,e,n,r,s=>this.Wc(s));return this.$c.push(i),i}Gc(){this.Bc&&V()}verifyOperationInProgress(){}async zc(){let e;do e=this.Mc,await e;while(e!==this.Mc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class Vi extends Of{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new Nx,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||z1(this),this._firestoreClient.terminate()}}function Ax(t=Pd()){return Bl(t,"firestore").getImmediate()}function Lf(t){return t._firestoreClient||z1(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function z1(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new dN(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new _x(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new P(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ni(Ue.fromBase64String(e))}catch(n){throw new P(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ni(Ue.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new P(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new P(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xx=/^__.*__$/;class Dx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new br(e,this.data,this.fieldMask,n,this.fieldTransforms):new Io(e,this.data,n,this.fieldTransforms)}}function H1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw V()}}class Uf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.wt=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Xc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new Uf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ta({path:r,na:!1});return i.sa(e),i}ia(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ta({path:r,na:!1});return i.Xc(),i}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return Sl(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(e.length===0)throw this.oa("Document fields must not be empty");if(H1(this.Zc)&&xx.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class Px{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.wt=r||cu(e)}aa(e,n,r,i=!1){return new Uf({Zc:e,methodName:n,ca:r,path:ze.emptyPath(),na:!1,ua:i},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function bf(t){const e=t._freezeSettings(),n=cu(t._databaseId);return new Px(t._databaseId,!!e.ignoreUndefinedProperties,n)}function W1(t,e,n,r,i,s={}){const o=t.aa(s.merge||s.mergeFields?2:0,e,n,i);G1("Data must be an object, but it was:",o,r);const a=K1(r,o);let l,u;if(s.merge)l=new jt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Lx(e,h,n);if(!o.contains(d))throw new P(_.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Mx(c,d)||c.push(d)}l=new jt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new Dx(new _t(a),l,u)}function Ox(t,e,n,r=!1){return Ff(n,t.aa(r?4:3,e))}function Ff(t,e){if(q1(t=et(t)))return G1("Unsupported field value:",e,t),K1(t,e);if(t instanceof j1)return function(n,r){if(!H1(r.Zc))throw r.oa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.oa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&e.Zc!==4)throw e.oa("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Ff(o,r.ra(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=et(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return NN(r.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=_e.fromDate(n);return{timestampValue:_l(r.wt,i)}}if(n instanceof _e){const i=new _e(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:_l(r.wt,i)}}if(n instanceof Mf)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ni)return{bytesValue:f1(r.wt,n._byteString)};if(n instanceof ut){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.oa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ef(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.oa(`Unsupported field value: ${fu(n)}`)}(t,e)}function K1(t,e){const n={};return zw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ui(t,(r,i)=>{const s=Ff(i,e.ea(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function q1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof _e||t instanceof Mf||t instanceof Ni||t instanceof ut||t instanceof j1)}function G1(t,e,n){if(!q1(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=fu(n);throw r==="an object"?e.oa(t+" a custom object"):e.oa(t+" "+r)}}function Lx(t,e,n){if((e=et(e))instanceof $f)return e._internalPath;if(typeof e=="string")return Q1(t,e);throw Sl("Field path arguments must be of type string or ",t,!1,void 0,n)}const $x=new RegExp("[~\\*/\\[\\]]");function Q1(t,e,n){if(e.search($x)>=0)throw Sl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new $f(...e.split("."))._internalPath}catch{throw Sl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Sl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new P(_.INVALID_ARGUMENT,a+t+l)}function Mx(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ux(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Vf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Ux extends X1{data(){return super.data()}}function Vf(t,e){return typeof e=="string"?Q1(t,e):e instanceof $f?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Y1 extends X1{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Aa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Vf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Aa extends Y1{data(e={}){return super.data(e)}}class bx{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new is(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Aa(this._firestore,this._userDataWriter,r.key,r,new is(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new P(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Aa(r._firestore,r._userDataWriter,o.doc.key,o.doc,new is(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Aa(r._firestore,r._userDataWriter,o.doc.key,o.doc,new is(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:Fx(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Fx(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return V()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vx(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new P(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Bx{}function J1(t,...e){for(const n of e)t=n._apply(t);return t}class zx extends Bx{constructor(e,n,r){super(),this.fa=e,this.da=n,this._a=r,this.type="where"}_apply(e){const n=bf(e.firestore),r=function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new P(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Rg(c,u);const m=[];for(const y of c)m.push(Cg(a,i,y));h={arrayValue:{values:m}}}else h=Cg(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Rg(c,u),h=Ox(o,s,c,u==="in"||u==="not-in");const d=Je.create(l,u,h);return function(m,y){if(y.ht()){const T=Gw(m);if(T!==null&&!T.isEqual(y.field))throw new P(_.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${T.toString()}' and '${y.field.toString()}'`);const p=qw(m);p!==null&&jx(m,y.field,p)}const w=function(T,p){for(const f of T.filters)if(p.indexOf(f.op)>=0)return f.op;return null}(m,function(T){switch(T){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(y.op));if(w!==null)throw w===y.op?new P(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${y.op.toString()}' filter.`):new P(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${y.op.toString()}' filters with '${w.toString()}' filters.`)}(i,d),d}(e._query,"where",n,e.firestore._databaseId,this.fa,this.da,this._a);return new Ao(e.firestore,e.converter,function(i,s){const o=i.filters.concat([s]);return new To(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function Z1(t,e,n){const r=e,i=Vf("where",t);return new zx(i,r,n)}function Cg(t,e,n){if(typeof(n=et(n))=="string"){if(n==="")throw new P(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Qw(e)&&n.indexOf("/")!==-1)throw new P(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ne.fromString(n));if(!U.isDocumentKey(r))throw new P(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return eg(t,new U(r))}if(n instanceof ut)return eg(t,n._key);throw new P(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${fu(n)}.`)}function Rg(t,e){if(!Array.isArray(t)||t.length===0)throw new P(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new P(_.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function jx(t,e,n){if(!n.isEqual(e))throw new P(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{convertValue(e,n="none"){switch(Pr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ki(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw V()}}convertObject(e,n){const r={};return Ui(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Mf(me(e.latitude),me(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Hw(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Qs(e));default:return null}}convertTimestamp(e){const n=Gn(e);return new _e(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ne.fromString(e);Z(y1(r));const i=new Ti(r.get(1),r.get(3)),s=new U(r.popFirst(5));return i.isEqual(n)||fn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(t){t=Xn(t,ut);const e=Xn(t.firestore,Vi);return Ix(Lf(e),t._key).then(n=>qx(e,t,n))}class n_ extends Hx{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ni(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ut(this.firestore,null,n)}}function r_(t){t=Xn(t,Ao);const e=Xn(t.firestore,Vi),n=Lf(e),r=new n_(e);return Vx(t._query),Cx(n,t._query).then(i=>new bx(e,r,t,i))}function Bf(t,e,n){t=Xn(t,ut);const r=Xn(t.firestore,Vi),i=e_(t.converter,e,n);return zf(r,[W1(bf(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Dt.none())])}function Wx(t){return zf(Xn(t.firestore,Vi),[new _f(t._key,Dt.none())])}function Kx(t,e){const n=Xn(t.firestore,Vi),r=Vr(t),i=e_(t.converter,e);return zf(n,[W1(bf(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Dt.exists(!1))]).then(()=>r)}function zf(t,e){return function(n,r){const i=new sn;return n.asyncQueue.enqueueAndForget(async()=>ux(await Tx(n),r,i)),i.promise}(Lf(t),e)}function qx(t,e,n){const r=n.docs.get(e._key),i=new n_(t);return new Y1(t,i,e._key,r,new is(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Mi=n})(Pi),Cr(new Kn("firestore",(n,{options:r})=>{const i=n.getProvider("app").getImmediate(),s=new Vi(i,new ZR(n.getProvider("auth-internal")),new rN(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC")),Vt(Gm,"3.4.14",t),Vt(Gm,"3.4.14","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_="firebasestorage.googleapis.com",s_="storageBucket",Gx=2*60*1e3,Qx=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe extends qt{constructor(e,n){super(oc(e),`Firebase Storage: ${n} (${oc(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,fe.prototype)}_codeEquals(e){return oc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function oc(t){return"storage/"+t}function jf(){const t="An unknown error occurred, please check the error payload for server response.";return new fe("unknown",t)}function Xx(t){return new fe("object-not-found","Object '"+t+"' does not exist.")}function Yx(t){return new fe("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Jx(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new fe("unauthenticated",t)}function Zx(){return new fe("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function eD(t){return new fe("unauthorized","User does not have permission to access '"+t+"'.")}function tD(){return new fe("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function nD(){return new fe("canceled","User canceled the upload/download.")}function rD(t){return new fe("invalid-url","Invalid URL '"+t+"'.")}function iD(t){return new fe("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function sD(){return new fe("no-default-bucket","No default bucket found. Did you set the '"+s_+"' property when initializing the app?")}function oD(){return new fe("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function aD(){return new fe("no-download-url","The given file does not have any download URLs.")}function Ph(t){return new fe("invalid-argument",t)}function o_(){return new fe("app-deleted","The Firebase app was deleted.")}function lD(t){return new fe("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ss(t,e){return new fe("invalid-format","String does not match format '"+t+"': "+e)}function Xi(t){throw new fe("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=dt.makeFromUrl(e,n)}catch{return new dt(e,"")}if(r.path==="")return r;throw iD(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(v){v.path.charAt(v.path.length-1)==="/"&&(v.path_=v.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(v){v.path_=decodeURIComponent(v.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),y={bucket:1,path:3},w=n===i_?"(?:storage.googleapis.com|storage.cloud.google.com)":n,T="([^?#]*)",p=new RegExp(`^https?://${w}/${i}/${T}`,"i"),g=[{regex:a,indices:l,postModify:s},{regex:m,indices:y,postModify:u},{regex:p,indices:{bucket:1,path:2},postModify:u}];for(let v=0;v<g.length;v++){const C=g[v],R=C.regex.exec(e);if(R){const N=R[C.indices.bucket];let E=R[C.indices.path];E||(E=""),r=new dt(N,E),C.postModify(r);break}}if(r==null)throw rD(e);return r}}class uD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cD(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...T){u||(u=!0,e.apply(null,T))}function h(T){i=setTimeout(()=>{i=null,t(m,l())},T)}function d(){s&&clearTimeout(s)}function m(T,...p){if(u){d();return}if(T){d(),c.call(null,T,...p);return}if(l()||o){d(),c.call(null,T,...p);return}r<64&&(r*=2);let g;a===1?(a=2,g=0):g=(r+Math.random())*1e3,h(g)}let y=!1;function w(T){y||(y=!0,d(),!u&&(i!==null?(T||(a=2),clearTimeout(i),h(0)):T||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,w(!0)},n),w}function hD(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dD(t){return t!==void 0}function fD(t){return typeof t=="object"&&!Array.isArray(t)}function Hf(t){return typeof t=="string"||t instanceof String}function Ng(t){return Wf()&&t instanceof Blob}function Wf(){return typeof Blob<"u"}function Ag(t,e,n,r){if(r<e)throw Ph(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ph(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function a_(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(wr||(wr={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pD{constructor(e,n,r,i,s,o,a,l,u,c,h){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,m)=>{this.resolve_=d,this.reject_=m,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new oa(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===wr.NO_ERROR,l=s.getStatus();if(!a||this.isRetryStatusCode_(l)){const c=s.getErrorCode()===wr.ABORT;r(!1,new oa(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new oa(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());dD(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=jf();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?o_():nD();o(l)}else{const l=tD();o(l)}};this.canceled_?n(!1,new oa(!1,null,!0)):this.backoffId_=cD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&hD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=this.additionalRetryCodes_.indexOf(e)!==-1;return n||i||s}}class oa{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function mD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function gD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function yD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function vD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function wD(t,e,n,r,i,s){const o=a_(t.urlParams),a=t.url+o,l=Object.assign({},t.headers);return yD(l,e),mD(l,n),gD(l,s),vD(l,r),new pD(a,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _D(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function ED(...t){const e=_D();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Wf())return new Blob(t);throw new fe("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function SD(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kD(t){return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ac{constructor(e,n){this.data=e,this.contentType=n||null}}function TD(t,e){switch(t){case Ut.RAW:return new ac(l_(e));case Ut.BASE64:case Ut.BASE64URL:return new ac(u_(t,e));case Ut.DATA_URL:return new ac(CD(e),RD(e))}throw jf()}function l_(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function ID(t){let e;try{e=decodeURIComponent(t)}catch{throw Ss(Ut.DATA_URL,"Malformed data URL.")}return l_(e)}function u_(t,e){switch(t){case Ut.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Ss(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Ut.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Ss(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=kD(e)}catch{throw Ss(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class c_{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ss(Ut.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=ND(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function CD(t){const e=new c_(t);return e.base64?u_(Ut.BASE64,e.rest):ID(e.rest)}function RD(t){return new c_(t).contentType}function ND(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,n){let r=0,i="";Ng(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Ng(this.data_)){const r=this.data_,i=SD(r,e,n);return i===null?null:new An(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new An(r,!0)}}static getBlob(...e){if(Wf()){const n=e.map(r=>r instanceof An?r.data_:r);return new An(ED.apply(null,n))}else{const n=e.map(o=>Hf(o)?TD(Ut.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new An(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(t){let e;try{e=JSON.parse(t)}catch{return null}return fD(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function xD(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function d_(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DD(t,e){return e}class qe{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||DD}}let aa=null;function PD(t){return!Hf(t)||t.length<2?t:d_(t)}function f_(){if(aa)return aa;const t=[];t.push(new qe("bucket")),t.push(new qe("generation")),t.push(new qe("metageneration")),t.push(new qe("name","fullPath",!0));function e(s,o){return PD(o)}const n=new qe("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new qe("size");return i.xform=r,t.push(i),t.push(new qe("timeCreated")),t.push(new qe("updated")),t.push(new qe("md5Hash",null,!0)),t.push(new qe("cacheControl",null,!0)),t.push(new qe("contentDisposition",null,!0)),t.push(new qe("contentEncoding",null,!0)),t.push(new qe("contentLanguage",null,!0)),t.push(new qe("contentType",null,!0)),t.push(new qe("metadata","customMetadata",!0)),aa=t,aa}function OD(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new dt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function LD(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return OD(r,t),r}function p_(t,e,n){const r=h_(e);return r===null?null:LD(t,r,n)}function $D(t,e,n,r){const i=h_(e);if(i===null||!Hf(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),m=Kf(d,n,r),y=a_({alt:"media",token:u});return m+y})[0]}function MD(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class m_{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_(t){if(!t)throw jf()}function UD(t,e){function n(r,i){const s=p_(t,i,e);return g_(s!==null),s}return n}function bD(t,e){function n(r,i){const s=p_(t,i,e);return g_(s!==null),$D(s,i,t.host,t._protocol)}return n}function y_(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=Zx():i=Jx():n.getStatus()===402?i=Yx(t.bucket):n.getStatus()===403?i=eD(t.path):i=r,i.serverResponse=r.serverResponse,i}return e}function FD(t){const e=y_(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=Xx(t.path)),s.serverResponse=i.serverResponse,s}return n}function VD(t,e,n){const r=e.fullServerUrl(),i=Kf(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new m_(i,s,bD(t,n),o);return a.errorHandler=FD(e),a}function BD(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function zD(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=BD(null,e)),r}function jD(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let g="";for(let v=0;v<2;v++)g=g+Math.random().toString().slice(2);return g}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=zD(e,r,i),c=MD(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",m=An.getBlob(h,r,d);if(m===null)throw oD();const y={name:u.fullPath},w=Kf(s,t.host,t._protocol),T="POST",p=t.maxUploadRetryTime,f=new m_(w,T,UD(t,n),p);return f.urlParams=y,f.headers=o,f.body=m.uploadData(),f.errorHandler=y_(e),f}class HD{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=wr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=wr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=wr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Xi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Xi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Xi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Xi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Xi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class WD extends HD{initXhr(){this.xhr_.responseType="text"}}function v_(){return new WD}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,n){this._service=e,n instanceof dt?this._location=n:this._location=dt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Or(e,n)}get root(){const e=new dt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return d_(this._location.path)}get storage(){return this._service}get parent(){const e=AD(this._location.path);if(e===null)return null;const n=new dt(this._location.bucket,e);return new Or(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw lD(e)}}function KD(t,e,n){t._throwIfRoot("uploadBytes");const r=jD(t.storage,t._location,f_(),new An(e,!0),n);return t.storage.makeRequestWithTokens(r,v_).then(i=>({metadata:i,ref:t}))}function qD(t){t._throwIfRoot("getDownloadURL");const e=VD(t.storage,t._location,f_());return t.storage.makeRequestWithTokens(e,v_).then(n=>{if(n===null)throw aD();return n})}function GD(t,e){const n=xD(t._location.path,e),r=new dt(t._location.bucket,n);return new Or(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QD(t){return/^[A-Za-z]+:\/\//.test(t)}function XD(t,e){return new Or(t,e)}function w_(t,e){if(t instanceof qf){const n=t;if(n._bucket==null)throw sD();const r=new Or(n,n._bucket);return e!=null?w_(r,e):r}else return e!==void 0?GD(t,e):t}function YD(t,e){if(e&&QD(e)){if(t instanceof qf)return XD(t,e);throw Ph("To use ref(service, url), the first argument must be a Storage instance.")}else return w_(t,e)}function xg(t,e){const n=e==null?void 0:e[s_];return n==null?null:dt.makeFromBucketSpec(n,t)}class qf{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=i_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Gx,this._maxUploadRetryTime=Qx,this._requests=new Set,i!=null?this._bucket=dt.makeFromBucketSpec(i,this._host):this._bucket=xg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=dt.makeFromBucketSpec(this._url,e):this._bucket=xg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ag("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ag("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Or(this,e)}_makeRequest(e,n,r,i){if(this._deleted)return new uD(o_());{const s=wD(e,this._appId,r,i,n,this._firebaseVersion);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Dg="@firebase/storage",Pg="0.9.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __="storage";function JD(t,e,n){return t=et(t),KD(t,e,n)}function ZD(t){return t=et(t),qD(t)}function E_(t,e){return t=et(t),YD(t,e)}function eP(t=Pd(),e){return t=et(t),Bl(t,__).getImmediate({identifier:e})}function tP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new qf(n,r,i,e,Pi)}function nP(){Cr(new Kn(__,tP,"PUBLIC").setMultipleInstances(!0)),Vt(Dg,Pg,""),Vt(Dg,Pg,"esm2017")}nP();const rP={apiKey:"AIzaSyBwvdq0NaDfkXRFY1hVMsV6GnQXL4x8g9c",authDomain:"treelink-firebase.firebaseapp.com",projectId:"treelink-firebase",storageBucket:"treelink-firebase.appspot.com",messagingSenderId:"1071174768042",appId:"1:1071174768042:web:197f79b821fc854862c7d3"},Gf=HT(rP),Qf=HC(Gf),yn=Ax(Gf),S_=eP(Gf),iP=async t=>{const e=Vr(yn,"users",t);return(await t_(e)).exists()},k_=async t=>{const e=[],n=xo(yn,"users"),r=J1(n,Z1("username","==",t));return(await r_(r)).forEach(s=>{e.push(s.data())}),e.length>0?e[0].uid:null},sP=async t=>{try{const e=xo(yn,"users"),n=Vr(e,t.uid);await Bf(n,t)}catch{}},T_=async t=>{try{const e=xo(yn,"users"),n=Vr(e,t.uid);await Bf(n,t)}catch{}},I_=async t=>{try{const e=Vr(yn,"users",t);return(await t_(e)).data()}catch{}},oP=async t=>{try{const e=xo(yn,"links");return await Kx(e,t)}catch(e){console.log(e)}},C_=async t=>{const e=[];try{const n=xo(yn,"links"),r=J1(n,Z1("uid","==",t));return(await r_(r)).forEach(s=>{const o={...s.data()};o.docId=s.id,e.push(o)}),e}catch(n){console.log(n)}},aP=async(t,e)=>{try{const n=Vr(yn,"links",t);return await Bf(n,e)}catch(n){console.log(n)}},lP=async t=>{try{const e=Vr(yn,"links",t);return await Wx(e)}catch(e){console.log(e)}},uP=async(t,e)=>{try{const n=E_(S_,`images/${t}`);return await JD(n,e)}catch(n){console.log(n)}},Oh=async t=>{try{const e=E_(S_,t);return await ZD(e)}catch(e){console.log(e)}},cP=async t=>{const e=await I_(t),n=await C_(t);return{profileInfo:e,linksInfo:n}},hP=async()=>{await Qf.signOut()},Do=({children:t,onUserLoggedIn:e,onUserNotLoggedIn:n,onUserNotRegistered:r})=>{const i=Mr();L.exports.useEffect(()=>{OI(Qf,s)},[i,e,n,r]);const s=async o=>{if(o)if(await iP(o.uid)){const l=await I_(o.uid);l.processCompleted?e(l):r(l)}else await sP({uid:o.uid,displayName:o.displayName,profilePicture:"",username:"",processCompleted:!1}),r(o);else n()};return I("div",{children:t})},dP="_loginView_19o9m_5",fP="_googleBtn_19o9m_23",pP="_googleiconWrapper_19o9m_45",mP="_googleIcon_19o9m_59",gP="_btnText_19o9m_75",Yi={loginView:dP,googleBtn:fP,googleiconWrapper:pP,googleIcon:mP,btnText:gP};function Og(){const t=Mr(),[e,n]=L.exports.useState(0),r=async()=>{const a=new Yt;await(async u=>{try{const c=await rC(Qf,u);console.log(c)}catch(c){console.log(c)}})(a)},i=a=>{t("/dashboard")},s=a=>{t("/choose-username")},o=()=>{n(4)};return e===2?I("div",{children:"Estas autenticado y registrado"}):e===3?I("div",{children:"Estas autenticado pero no registrado"}):e===4?ce("div",{className:Yi.loginView,children:[I("div",{children:I("h1",{children:"Link Tree"})}),ce("div",{children:[I("div",{className:Yi.googleiconWrapper,children:I("img",{className:Yi.googleIcon,src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"})}),I("button",{onClick:r,className:Yi.googleBtn,children:I("b",{className:Yi.btnText,children:"Sign in with google"})})]})]}):e===5?I("div",{children:I("button",{onClick:r,children:"Login with Google"})}):I(Do,{onUserLoggedIn:i,onUserNotLoggedIn:o,onUserNotRegistered:s,children:I("div",{children:"Loading..."})})}const yP="_nav_hodui_1",vP="_logo_hodui_39",Lg={nav:yP,logo:vP},R_=({children:t})=>ce("div",{children:[ce("nav",{className:Lg.nav,children:[I("div",{className:Lg.logo,children:"Link Tree"}),I(Ea,{to:"/dashboard",children:"Links"}),I(Ea,{to:"/dashboard/profile",children:"Profile"}),I(Ea,{to:"/signout",children:"Sign Out"})]}),I("div",{className:"main-container",children:t})]});var la,wP=new Uint8Array(16);function _P(){if(!la&&(la=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!la))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return la(wP)}const EP=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function SP(t){return typeof t=="string"&&EP.test(t)}var Ae=[];for(var lc=0;lc<256;++lc)Ae.push((lc+256).toString(16).substr(1));function kP(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(Ae[t[e+0]]+Ae[t[e+1]]+Ae[t[e+2]]+Ae[t[e+3]]+"-"+Ae[t[e+4]]+Ae[t[e+5]]+"-"+Ae[t[e+6]]+Ae[t[e+7]]+"-"+Ae[t[e+8]]+Ae[t[e+9]]+"-"+Ae[t[e+10]]+Ae[t[e+11]]+Ae[t[e+12]]+Ae[t[e+13]]+Ae[t[e+14]]+Ae[t[e+15]]).toLowerCase();if(!SP(n))throw TypeError("Stringified UUID is invalid");return n}function TP(t,e,n){t=t||{};var r=t.random||(t.rng||_P)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(var i=0;i<16;++i)e[n+i]=r[i];return e}return kP(r)}const IP="_linksContainer_l1dhj_1",CP="_link_l1dhj_1",RP="_linkActions_l1dhj_33",NP="_linkInfo_l1dhj_47",AP="_linkTitle_l1dhj_57",xP="_linkUrl_l1dhj_73",DP="_btnEdit_l1dhj_91",PP="_btnDelete_l1dhj_109",Gt={linksContainer:IP,link:CP,linkActions:RP,linkInfo:NP,linkTitle:AP,linkUrl:xP,btnEdit:DP,btnDelete:PP,"material-icons":"_material-icons_l1dhj_139"},OP=({docId:t,title:e,url:n,onDelete:r,onUpdate:i})=>{const[s,o]=L.exports.useState(e),[a,l]=L.exports.useState(n),[u,c]=L.exports.useState(!1),[h,d]=L.exports.useState(!1),m=L.exports.useRef(null),y=L.exports.useRef(null);L.exports.useEffect(()=>{m.current&&m.current.focus(),y.current&&y.current.focus()},[u,h]);const w=()=>{c(!0)},T=()=>{d(!0)},p=R=>{o(R.target.value)},f=R=>{l(R.target.value)},g=R=>{c(!1),i(t,s,a)},v=R=>{d(!1),i(t,s,a)},C=()=>{r(t)};return ce("div",{className:Gt.link,children:[ce("div",{className:Gt.info,children:[I("div",{className:Gt.linkTitle,children:u?I(Jo,{children:I("input",{ref:m,type:"text",value:s,onChange:p,onBlur:g})}):ce(Jo,{children:[I("button",{className:Gt.btnEdit,onClick:w,children:I("span",{className:"material-icons",children:"edit"})}),s]})}),I("div",{className:Gt.linkUrl,children:h?I(Jo,{children:I("input",{ref:y,type:"text",value:a,onChange:f,onBlur:v})}):ce(Jo,{children:[ce("button",{className:Gt.btnEdit,onClick:T,children:[I("span",{className:"material-icons",children:"edit"})," "]}),a]})})]}),I("div",{className:Gt.linkActions,children:I("button",{className:Gt.btnDelete,onClick:C,children:I("span",{className:"material-icons",children:"delete"})})})]})},LP="_entryContainer_xbtn2_1",$P="_generateLink_xbtn2_19",$g={entryContainer:LP,generateLink:$P};function MP(){const[t,e]=L.exports.useState(0),[n,r]=L.exports.useState({}),[i,s]=L.exports.useState({}),[o,a]=L.exports.useState([]),l=Mr(),u=async p=>{r(p),e(2);const f=await C_(p.uid);a([...f])},c=p=>{l("/login")},h=()=>{l("/login")};if(t===0)return I(Do,{onUserLoggedIn:u,onUserNotLoggedIn:h,onUserNotRegistered:c,children:"Loading..."});const d=p=>{const f=p.target.name,g=p.target.value;s(v=>({...v,[f]:g}))},m=p=>{p.preventDefault(),y()},y=()=>{if(i.title!==""&&i.url!==""){const p={id:TP(),title:i.title,url:i.url,uid:n.uid},f=oP(p);p.docId=f.id,s({}),a([...o,p])}},w=async p=>{await lP(p);const f=o.filter(g=>g.docId!==p);a([...f])},T=async(p,f,g)=>{const v=o.find(C=>C.docId===p);v.title=f,v.url=g,await aP(p,v)};return I(R_,{children:ce("div",{children:[I("h1",{children:"Dashboard"}),ce("span",{className:"viewUrl",children:["My Url:",window.location.hostname.includes("localhost")?I("a",{href:`http://${window.location.hostname}:${window.location.port}/u/${n.username}`,target:"_blank",children:`   ${window.location.hostname}:${window.location.port}/u/${n.username}`}):I("a",{href:`http://${window.location.hostname}/u/${n.username}`,target:"_blank",children:`   ${window.location.hostname}/u/${n.username}`})]}),ce("form",{className:$g.entryContainer,action:"",onSubmit:m,children:[I("span",{className:$g.generateLink,children:"Generate Links"}),I("label",{htmlFor:"title",children:"Title"}),I("input",{className:"inputLarge",type:"text",value:i.title?i.title:"",name:"title",onChange:d}),I("label",{htmlFor:"url",children:"Url"}),I("input",{className:"inputLarge",type:"text",value:i.url?i.url:"",name:"url",onChange:d}),I("input",{className:"btn",type:"submit",value:"Create new Link"})]}),I("div",{className:Gt.linksContainer,children:o.map(p=>I(OP,{docId:p.docId,title:p.title,url:p.url,onDelete:w,onUpdate:T},p.id))})]})})}const UP="_profilePictureContainer_1nkzg_1",bP="_fileInput_1nkzg_29",Mg={profilePictureContainer:UP,fileInput:bP};function FP(){const[t,e]=L.exports.useState(0),[n,r]=L.exports.useState({}),[i,s]=L.exports.useState(null),o=L.exports.useRef(null),a=Mr(),l=async m=>{r(m);const y=await Oh(m.profilePicture);s(y),e(2)},u=()=>{a("/login")},c=m=>{a("/login")},h=()=>{o.current&&o.current.click()},d=m=>{const y=m.target.files,w=new FileReader;w&&y&&y.length>0&&(w.readAsArrayBuffer(y[0]),w.onload=async function(){const T=w.result,p=await uP(n.uid,T);if(p){const f={...n};f.profilePicture=p.metadata.fullPath,await T_(f),r({...f});const g=await Oh(n.profilePicture);s(g),window.location.reload()}})};return t!==2?I(Do,{onUserLoggedIn:l,onUserNotLoggedIn:u,onUserNotRegistered:c}):ce(R_,{children:[ce("div",{className:"containerEditProfile",children:[I("h2",{children:"Edit Profile Info"}),ce("div",{className:Mg.profilePictureContainer,children:[I("div",{children:I("img",{src:i,alt:"",width:100})}),ce("div",{children:[I("button",{className:"btn-picture",onClick:h,children:"Choose new profile picture"}),I("input",{className:Mg.fileInput,type:"file",ref:o,onChange:d})]})]})]}),ce("span",{className:"viewUrl",children:["My Url:",window.location.hostname.includes("localhost")?I("a",{href:`http://${window.location.hostname}:${window.location.port}/u/${n.username}`,target:"_blank",children:`   ${window.location.hostname}:${window.location.port}/u/${n.username}`}):console.log("chau")]})]})}function VP(){const t=Mr();return I(Do,{onUserLoggedIn:async i=>{await hP()},onUserNotLoggedIn:()=>{t("/login",{replace:!0}),window.location.reload()},onUserNotRegistered:i=>{t("/login",{replace:!0}),window.location.reload()}})}const BP="_publicLinksContainer_kydb1_1",zP="_publicLinkContainer_kydb1_13",N_={publicLinksContainer:BP,publicLinkContainer:zP},jP=({url:t,title:e})=>I("a",{href:`https://${t}`,className:N_.publicLinkContainer,target:"_blank",children:I("div",{children:e})}),HP="_profileContainer_7ij9n_1",WP="_profilePicture_7ij9n_13",Ug={profileContainer:HP,profilePicture:WP},KP="/assets/no-photo.c99b8df1.jpg";function qP(){const t=kk(),[e,n]=L.exports.useState(null),[r,i]=L.exports.useState(""),[s,o]=L.exports.useState(0);return L.exports.useEffect(()=>{a();async function a(){const l=t.username;try{const u=await k_(l);if(u){const c=await cP(u);n(c);const h=await Oh(c.profileInfo.profilePicture);i(h)}else o(7)}catch(u){console.log(u)}}},[t]),s===7?I("div",{children:I("h1",{children:"Username doesn't exist "})}):ce("div",{className:Ug.profileContainer,children:[I("div",{className:Ug.profilePicture,children:I("img",{src:r||KP,alt:"User's picture"})}),I("h2",{children:e==null?void 0:e.profileInfo.username}),I("h3",{children:e==null?void 0:e.profileInfo.displayName}),I("div",{className:N_.publicLinksContainer,children:e==null?void 0:e.linksInfo.map(a=>I(jP,{url:a.url,title:a.title},a.docId))})]})}const GP="_chooseUsernameContainer_s71lw_1",bg={chooseUsernameContainer:GP};function QP(){const t=Mr(),[e,n]=L.exports.useState(0),[r,i]=L.exports.useState({}),[s,o]=L.exports.useState(""),a=d=>{t("/dashboard")},l=d=>{i(d),n(3)},u=()=>{t("/login")},c=d=>{o(d.target.value)},h=async()=>{if(s!=="")if(await k_(s))n(5);else{const m={...r};m.username=s,m.processCompleted=!0,await T_(m),n(6)}};return e===3||e===5?ce("div",{className:bg.chooseUsernameContainer,children:[ce("h1",{children:["Bienvenido ",r.displayName]}),I("p",{children:"Para terminar el proceso elige un nombre de usuario"}),e===5?I("p",{children:"El nombre de usuario ya existe, escoge otro"}):"",I("div",{children:I("input",{className:"input",type:"text",onChange:c})}),I("div",{children:I("button",{className:"btn",onClick:h,children:"Continue"})})]}):e===6?ce("div",{className:bg.chooseUsernameContainer,children:[I("h1",{children:"Congratulations! You can now go to the dashboard to create your links."}),I(Ea,{to:"/dashboard",children:"Continue"})]}):I(Do,{onUserLoggedIn:a,onUserNotLoggedIn:u,onUserNotRegistered:l})}uc.createRoot(document.getElementById("root")).render(I(xk,{children:ce(Rk,{children:[I(En,{path:"/Link-Tree",element:I(Og,{})}),I(En,{exact:!0,path:"/login",element:I(Og,{})}),I(En,{exact:!0,path:"/dashboard",element:I(MP,{})}),I(En,{exact:!0,path:"/dashboard/profile",element:I(FP,{})}),I(En,{exact:!0,path:"/signout",element:I(VP,{})}),I(En,{exact:!0,path:"/u/:username",element:I(qP,{})}),I(En,{exact:!0,path:"/choose-username",element:I(QP,{})})]})}));
