(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function _v(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var vd={exports:{}},Fo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $x;function _y(){if($x)return Fo;$x=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return Fo.Fragment=e,Fo.jsx=i,Fo.jsxs=i,Fo}var eg;function by(){return eg||(eg=1,vd.exports=_y()),vd.exports}var S=by(),_d={exports:{}},ut={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tg;function yy(){if(tg)return ut;tg=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),_=Symbol.iterator;function M(B){return B===null||typeof B!="object"?null:(B=_&&B[_]||B["@@iterator"],typeof B=="function"?B:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,E={};function v(B,Z,xe){this.props=B,this.context=Z,this.refs=E,this.updater=xe||T}v.prototype.isReactComponent={},v.prototype.setState=function(B,Z){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,Z,"setState")},v.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function O(){}O.prototype=v.prototype;function D(B,Z,xe){this.props=B,this.context=Z,this.refs=E,this.updater=xe||T}var z=D.prototype=new O;z.constructor=D,A(z,v.prototype),z.isPureReactComponent=!0;var j=Array.isArray;function L(){}var I={H:null,A:null,T:null,S:null},q=Object.prototype.hasOwnProperty;function N(B,Z,xe){var _e=xe.ref;return{$$typeof:s,type:B,key:Z,ref:_e!==void 0?_e:null,props:xe}}function R(B,Z){return N(B.type,Z,B.props)}function F(B){return typeof B=="object"&&B!==null&&B.$$typeof===s}function k(B){var Z={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(xe){return Z[xe]})}var te=/\/+/g;function $(B,Z){return typeof B=="object"&&B!==null&&B.key!=null?k(""+B.key):Z.toString(36)}function de(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(L,L):(B.status="pending",B.then(function(Z){B.status==="pending"&&(B.status="fulfilled",B.value=Z)},function(Z){B.status==="pending"&&(B.status="rejected",B.reason=Z)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function P(B,Z,xe,_e,Re){var ie=typeof B;(ie==="undefined"||ie==="boolean")&&(B=null);var oe=!1;if(B===null)oe=!0;else switch(ie){case"bigint":case"string":case"number":oe=!0;break;case"object":switch(B.$$typeof){case s:case e:oe=!0;break;case g:return oe=B._init,P(oe(B._payload),Z,xe,_e,Re)}}if(oe)return Re=Re(B),oe=_e===""?"."+$(B,0):_e,j(Re)?(xe="",oe!=null&&(xe=oe.replace(te,"$&/")+"/"),P(Re,Z,xe,"",function(Pe){return Pe})):Re!=null&&(F(Re)&&(Re=R(Re,xe+(Re.key==null||B&&B.key===Re.key?"":(""+Re.key).replace(te,"$&/")+"/")+oe)),Z.push(Re)),1;oe=0;var Ee=_e===""?".":_e+":";if(j(B))for(var Le=0;Le<B.length;Le++)_e=B[Le],ie=Ee+$(_e,Le),oe+=P(_e,Z,xe,ie,Re);else if(Le=M(B),typeof Le=="function")for(B=Le.call(B),Le=0;!(_e=B.next()).done;)_e=_e.value,ie=Ee+$(_e,Le++),oe+=P(_e,Z,xe,ie,Re);else if(ie==="object"){if(typeof B.then=="function")return P(de(B),Z,xe,_e,Re);throw Z=String(B),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return oe}function K(B,Z,xe){if(B==null)return B;var _e=[],Re=0;return P(B,_e,"","",function(ie){return Z.call(xe,ie,Re++)}),_e}function Y(B){if(B._status===-1){var Z=B._result;Z=Z(),Z.then(function(xe){(B._status===0||B._status===-1)&&(B._status=1,B._result=xe)},function(xe){(B._status===0||B._status===-1)&&(B._status=2,B._result=xe)}),B._status===-1&&(B._status=0,B._result=Z)}if(B._status===1)return B._result.default;throw B._result}var ve=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)},Se={map:K,forEach:function(B,Z,xe){K(B,function(){Z.apply(this,arguments)},xe)},count:function(B){var Z=0;return K(B,function(){Z++}),Z},toArray:function(B){return K(B,function(Z){return Z})||[]},only:function(B){if(!F(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return ut.Activity=x,ut.Children=Se,ut.Component=v,ut.Fragment=i,ut.Profiler=l,ut.PureComponent=D,ut.StrictMode=r,ut.Suspense=m,ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,ut.__COMPILER_RUNTIME={__proto__:null,c:function(B){return I.H.useMemoCache(B)}},ut.cache=function(B){return function(){return B.apply(null,arguments)}},ut.cacheSignal=function(){return null},ut.cloneElement=function(B,Z,xe){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var _e=A({},B.props),Re=B.key;if(Z!=null)for(ie in Z.key!==void 0&&(Re=""+Z.key),Z)!q.call(Z,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&Z.ref===void 0||(_e[ie]=Z[ie]);var ie=arguments.length-2;if(ie===1)_e.children=xe;else if(1<ie){for(var oe=Array(ie),Ee=0;Ee<ie;Ee++)oe[Ee]=arguments[Ee+2];_e.children=oe}return N(B.type,Re,_e)},ut.createContext=function(B){return B={$$typeof:f,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:c,_context:B},B},ut.createElement=function(B,Z,xe){var _e,Re={},ie=null;if(Z!=null)for(_e in Z.key!==void 0&&(ie=""+Z.key),Z)q.call(Z,_e)&&_e!=="key"&&_e!=="__self"&&_e!=="__source"&&(Re[_e]=Z[_e]);var oe=arguments.length-2;if(oe===1)Re.children=xe;else if(1<oe){for(var Ee=Array(oe),Le=0;Le<oe;Le++)Ee[Le]=arguments[Le+2];Re.children=Ee}if(B&&B.defaultProps)for(_e in oe=B.defaultProps,oe)Re[_e]===void 0&&(Re[_e]=oe[_e]);return N(B,ie,Re)},ut.createRef=function(){return{current:null}},ut.forwardRef=function(B){return{$$typeof:h,render:B}},ut.isValidElement=F,ut.lazy=function(B){return{$$typeof:g,_payload:{_status:-1,_result:B},_init:Y}},ut.memo=function(B,Z){return{$$typeof:p,type:B,compare:Z===void 0?null:Z}},ut.startTransition=function(B){var Z=I.T,xe={};I.T=xe;try{var _e=B(),Re=I.S;Re!==null&&Re(xe,_e),typeof _e=="object"&&_e!==null&&typeof _e.then=="function"&&_e.then(L,ve)}catch(ie){ve(ie)}finally{Z!==null&&xe.types!==null&&(Z.types=xe.types),I.T=Z}},ut.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},ut.use=function(B){return I.H.use(B)},ut.useActionState=function(B,Z,xe){return I.H.useActionState(B,Z,xe)},ut.useCallback=function(B,Z){return I.H.useCallback(B,Z)},ut.useContext=function(B){return I.H.useContext(B)},ut.useDebugValue=function(){},ut.useDeferredValue=function(B,Z){return I.H.useDeferredValue(B,Z)},ut.useEffect=function(B,Z){return I.H.useEffect(B,Z)},ut.useEffectEvent=function(B){return I.H.useEffectEvent(B)},ut.useId=function(){return I.H.useId()},ut.useImperativeHandle=function(B,Z,xe){return I.H.useImperativeHandle(B,Z,xe)},ut.useInsertionEffect=function(B,Z){return I.H.useInsertionEffect(B,Z)},ut.useLayoutEffect=function(B,Z){return I.H.useLayoutEffect(B,Z)},ut.useMemo=function(B,Z){return I.H.useMemo(B,Z)},ut.useOptimistic=function(B,Z){return I.H.useOptimistic(B,Z)},ut.useReducer=function(B,Z,xe){return I.H.useReducer(B,Z,xe)},ut.useRef=function(B){return I.H.useRef(B)},ut.useState=function(B){return I.H.useState(B)},ut.useSyncExternalStore=function(B,Z,xe){return I.H.useSyncExternalStore(B,Z,xe)},ut.useTransition=function(){return I.H.useTransition()},ut.version="19.2.1",ut}var ng;function ip(){return ng||(ng=1,_d.exports=yy()),_d.exports}var ue=ip();const pa=_v(ue);var bd={exports:{}},zo={},yd={exports:{}},Sd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ig;function Sy(){return ig||(ig=1,(function(s){function e(P,K){var Y=P.length;P.push(K);e:for(;0<Y;){var ve=Y-1>>>1,Se=P[ve];if(0<l(Se,K))P[ve]=K,P[Y]=Se,Y=ve;else break e}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var K=P[0],Y=P.pop();if(Y!==K){P[0]=Y;e:for(var ve=0,Se=P.length,B=Se>>>1;ve<B;){var Z=2*(ve+1)-1,xe=P[Z],_e=Z+1,Re=P[_e];if(0>l(xe,Y))_e<Se&&0>l(Re,xe)?(P[ve]=Re,P[_e]=Y,ve=_e):(P[ve]=xe,P[Z]=Y,ve=Z);else if(_e<Se&&0>l(Re,Y))P[ve]=Re,P[_e]=Y,ve=_e;else break e}}return K}function l(P,K){var Y=P.sortIndex-K.sortIndex;return Y!==0?Y:P.id-K.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var m=[],p=[],g=1,x=null,_=3,M=!1,T=!1,A=!1,E=!1,v=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function z(P){for(var K=i(p);K!==null;){if(K.callback===null)r(p);else if(K.startTime<=P)r(p),K.sortIndex=K.expirationTime,e(m,K);else break;K=i(p)}}function j(P){if(A=!1,z(P),!T)if(i(m)!==null)T=!0,L||(L=!0,k());else{var K=i(p);K!==null&&de(j,K.startTime-P)}}var L=!1,I=-1,q=5,N=-1;function R(){return E?!0:!(s.unstable_now()-N<q)}function F(){if(E=!1,L){var P=s.unstable_now();N=P;var K=!0;try{e:{T=!1,A&&(A=!1,O(I),I=-1),M=!0;var Y=_;try{t:{for(z(P),x=i(m);x!==null&&!(x.expirationTime>P&&R());){var ve=x.callback;if(typeof ve=="function"){x.callback=null,_=x.priorityLevel;var Se=ve(x.expirationTime<=P);if(P=s.unstable_now(),typeof Se=="function"){x.callback=Se,z(P),K=!0;break t}x===i(m)&&r(m),z(P)}else r(m);x=i(m)}if(x!==null)K=!0;else{var B=i(p);B!==null&&de(j,B.startTime-P),K=!1}}break e}finally{x=null,_=Y,M=!1}K=void 0}}finally{K?k():L=!1}}}var k;if(typeof D=="function")k=function(){D(F)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,$=te.port2;te.port1.onmessage=F,k=function(){$.postMessage(null)}}else k=function(){v(F,0)};function de(P,K){I=v(function(){P(s.unstable_now())},K)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(P){P.callback=null},s.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<P?Math.floor(1e3/P):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_next=function(P){switch(_){case 1:case 2:case 3:var K=3;break;default:K=_}var Y=_;_=K;try{return P()}finally{_=Y}},s.unstable_requestPaint=function(){E=!0},s.unstable_runWithPriority=function(P,K){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Y=_;_=P;try{return K()}finally{_=Y}},s.unstable_scheduleCallback=function(P,K,Y){var ve=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ve+Y:ve):Y=ve,P){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=Y+Se,P={id:g++,callback:K,priorityLevel:P,startTime:Y,expirationTime:Se,sortIndex:-1},Y>ve?(P.sortIndex=Y,e(p,P),i(m)===null&&P===i(p)&&(A?(O(I),I=-1):A=!0,de(j,Y-ve))):(P.sortIndex=Se,e(m,P),T||M||(T=!0,L||(L=!0,k()))),P},s.unstable_shouldYield=R,s.unstable_wrapCallback=function(P){var K=_;return function(){var Y=_;_=K;try{return P.apply(this,arguments)}finally{_=Y}}}})(Sd)),Sd}var ag;function My(){return ag||(ag=1,yd.exports=Sy()),yd.exports}var Md={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rg;function Ey(){if(rg)return Dn;rg=1;var s=ip();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Dn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,g)},Dn.flushSync=function(m){var p=f.T,g=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=g,r.d.f()}},Dn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Dn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Dn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,x=h(g,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:_,fetchPriority:M}):g==="script"&&r.d.X(m,{crossOrigin:x,integrity:_,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Dn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,x=h(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Dn.requestFormReset=function(m){r.d.r(m)},Dn.unstable_batchedUpdates=function(m,p){return m(p)},Dn.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},Dn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Dn.version="19.2.1",Dn}var sg;function Ty(){if(sg)return Md.exports;sg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Md.exports=Ey(),Md.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var og;function Ay(){if(og)return zo;og=1;var s=My(),e=ip(),i=Ty();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=d;else{for(var y=!1,w=u.child;w;){if(w===a){y=!0,a=u,o=d;break}if(w===o){y=!0,o=u,a=d;break}w=w.sibling}if(!y){for(w=d.child;w;){if(w===a){y=!0,a=d,o=u;break}if(w===o){y=!0,o=d,a=u;break}w=w.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,_=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),D=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function k(t){return t===null||typeof t!="object"?null:(t=F&&t[F]||t["@@iterator"],typeof t=="function"?t:null)}var te=Symbol.for("react.client.reference");function $(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===te?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case v:return"Profiler";case E:return"StrictMode";case j:return"Suspense";case L:return"SuspenseList";case N:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case D:return t.displayName||"Context";case O:return(t._context.displayName||"Context")+".Consumer";case z:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:$(t.type)||"Memo";case q:n=t._payload,t=t._init;try{return $(t(n))}catch{}}return null}var de=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},ve=[],Se=-1;function B(t){return{current:t}}function Z(t){0>Se||(t.current=ve[Se],ve[Se]=null,Se--)}function xe(t,n){Se++,ve[Se]=t.current,t.current=n}var _e=B(null),Re=B(null),ie=B(null),oe=B(null);function Ee(t,n){switch(xe(ie,n),xe(Re,t),xe(_e,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Sx(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Sx(n),t=Mx(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Z(_e),xe(_e,t)}function Le(){Z(_e),Z(Re),Z(ie)}function Pe(t){t.memoizedState!==null&&xe(oe,t);var n=_e.current,a=Mx(n,t.type);n!==a&&(xe(Re,t),xe(_e,a))}function nt(t){Re.current===t&&(Z(_e),Z(Re)),oe.current===t&&(Z(oe),No._currentValue=Y)}var Rt,je;function qe(t){if(Rt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Rt=n&&n[1]||"",je=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Rt+t+je}var H=!1;function at(t,n){if(!t||H)return"";H=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ye=function(){throw Error()};if(Object.defineProperty(ye.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ye,[])}catch(he){var ce=he}Reflect.construct(t,[],ye)}else{try{ye.call()}catch(he){ce=he}t.call(ye.prototype)}}else{try{throw Error()}catch(he){ce=he}(ye=t())&&typeof ye.catch=="function"&&ye.catch(function(){})}}catch(he){if(he&&ce&&typeof he.stack=="string")return[he.stack,ce.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),y=d[0],w=d[1];if(y&&w){var V=y.split(`
`),re=w.split(`
`);for(u=o=0;o<V.length&&!V[o].includes("DetermineComponentFrameRoot");)o++;for(;u<re.length&&!re[u].includes("DetermineComponentFrameRoot");)u++;if(o===V.length||u===re.length)for(o=V.length-1,u=re.length-1;1<=o&&0<=u&&V[o]!==re[u];)u--;for(;1<=o&&0<=u;o--,u--)if(V[o]!==re[u]){if(o!==1||u!==1)do if(o--,u--,0>u||V[o]!==re[u]){var ge=`
`+V[o].replace(" at new "," at ");return t.displayName&&ge.includes("<anonymous>")&&(ge=ge.replace("<anonymous>",t.displayName)),ge}while(1<=o&&0<=u);break}}}finally{H=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?qe(a):""}function dt(t,n){switch(t.tag){case 26:case 27:case 5:return qe(t.type);case 16:return qe("Lazy");case 13:return t.child!==n&&n!==null?qe("Suspense Fallback"):qe("Suspense");case 19:return qe("SuspenseList");case 0:case 15:return at(t.type,!1);case 11:return at(t.type.render,!1);case 1:return at(t.type,!0);case 31:return qe("Activity");default:return""}}function _t(t){try{var n="",a=null;do n+=dt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ge=Object.prototype.hasOwnProperty,Ht=s.unstable_scheduleCallback,Ke=s.unstable_cancelCallback,ot=s.unstable_shouldYield,U=s.unstable_requestPaint,b=s.unstable_now,G=s.unstable_getCurrentPriorityLevel,ne=s.unstable_ImmediatePriority,me=s.unstable_UserBlockingPriority,le=s.unstable_NormalPriority,Be=s.unstable_LowPriority,Ue=s.unstable_IdlePriority,Qe=s.log,Ye=s.unstable_setDisableYieldValue,Te=null,we=null;function Je(t){if(typeof Qe=="function"&&Ye(t),we&&typeof we.setStrictMode=="function")try{we.setStrictMode(Te,t)}catch{}}var We=Math.clz32?Math.clz32:X,Ie=Math.log,lt=Math.LN2;function X(t){return t>>>=0,t===0?32:31-(Ie(t)/lt|0)|0}var Oe=256,De=262144,Ne=4194304;function Ae(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Me(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var w=o&134217727;return w!==0?(o=w&~d,o!==0?u=Ae(o):(y&=w,y!==0?u=Ae(y):a||(a=w&~t,a!==0&&(u=Ae(a))))):(w=o&~d,w!==0?u=Ae(w):y!==0?u=Ae(y):a||(a=o&~t,a!==0&&(u=Ae(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Ve(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ct(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gt(){var t=Ne;return Ne<<=1,(Ne&62914560)===0&&(Ne=4194304),t}function Dt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Cn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function qn(t,n,a,o,u,d){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var w=t.entanglements,V=t.expirationTimes,re=t.hiddenUpdates;for(a=y&~a;0<a;){var ge=31-We(a),ye=1<<ge;w[ge]=0,V[ge]=-1;var ce=re[ge];if(ce!==null)for(re[ge]=null,ge=0;ge<ce.length;ge++){var he=ce[ge];he!==null&&(he.lane&=-536870913)}a&=~ye}o!==0&&sl(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(y&~n))}function sl(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-We(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Vs(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-We(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function ks(t,n){var a=n&-n;return a=(a&42)!==0?1:gi(a),(a&(t.suspendedLanes|n))!==0?0:a}function gi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function sr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function js(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:Wx(t.type))}function Xs(t,n){var a=K.p;try{return K.p=t,n()}finally{K.p=a}}var Yn=Math.random().toString(36).slice(2),on="__reactFiber$"+Yn,pn="__reactProps$"+Yn,Hi="__reactContainer$"+Yn,Pr="__reactEvents$"+Yn,fu="__reactListeners$"+Yn,du="__reactHandles$"+Yn,ol="__reactResources$"+Yn,or="__reactMarker$"+Yn;function Ws(t){delete t[on],delete t[pn],delete t[Pr],delete t[fu],delete t[du]}function Ma(t){var n=t[on];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Hi]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Dx(t);t!==null;){if(a=t[on])return a;t=Dx(t)}return n}t=a,a=t.parentNode}return null}function C(t){if(t=t[on]||t[Hi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Q(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function fe(t){var n=t[ol];return n||(n=t[ol]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function se(t){t[or]=!0}var ee=new Set,Ce={};function Fe(t,n){He(t,n),He(t+"Capture",n)}function He(t,n){for(Ce[t]=n,t=0;t<n.length;t++)ee.add(n[t])}var ke=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),it={},st={};function $e(t){return Ge.call(st,t)?!0:Ge.call(it,t)?!1:ke.test(t)?st[t]=!0:(it[t]=!0,!1)}function mt(t,n,a){if($e(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ct(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Nt(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function Et(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Pt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function tt(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,d.call(this,y)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Wt(t){if(!t._valueTracker){var n=Pt(t)?"checked":"value";t._valueTracker=tt(t,n,""+t[n])}}function Tt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Pt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function _n(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ea=/[\n"\\]/g;function Yt(t){return t.replace(Ea,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Gi(t,n,a,o,u,d,y,w){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Et(n)):t.value!==""+Et(n)&&(t.value=""+Et(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?bn(t,y,Et(n)):a!=null?bn(t,y,Et(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+Et(w):t.removeAttribute("name")}function Zt(t,n,a,o,u,d,y,w){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Wt(t);return}a=a!=null?""+Et(a):"",n=n!=null?""+Et(n):a,w||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=w?t.checked:!!o,t.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),Wt(t)}function bn(t,n,a){n==="number"&&_n(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function mn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Et(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function yn(t,n,a){if(n!=null&&(n=""+Et(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Et(a):""}function En(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(de(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Et(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Wt(t)}function Di(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Vi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _p(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Vi.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function bp(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&_p(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&_p(t,d,n[d])}function hu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var m_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),x_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ll(t){return x_.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ki(){}var pu=null;function mu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Br=null,Ir=null;function yp(t){var n=C(t);if(n&&(t=n.stateNode)){var a=t[pn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Gi(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Yt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[pn]||null;if(!u)throw Error(r(90));Gi(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Tt(o)}break e;case"textarea":yn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&mn(t,!!a.multiple,n,!1)}}}var xu=!1;function Sp(t,n,a){if(xu)return t(n,a);xu=!0;try{var o=t(n);return o}finally{if(xu=!1,(Br!==null||Ir!==null)&&(Zl(),Br&&(n=Br,t=Ir,Ir=Br=null,yp(n),t)))for(n=0;n<t.length;n++)yp(t[n])}}function qs(t,n){var a=t.stateNode;if(a===null)return null;var o=a[pn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gu=!1;if(ji)try{var Ys={};Object.defineProperty(Ys,"passive",{get:function(){gu=!0}}),window.addEventListener("test",Ys,Ys),window.removeEventListener("test",Ys,Ys)}catch{gu=!1}var Ta=null,vu=null,cl=null;function Mp(){if(cl)return cl;var t,n=vu,a=n.length,o,u="value"in Ta?Ta.value:Ta.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var y=a-t;for(o=1;o<=y&&n[a-o]===u[d-o];o++);return cl=u.slice(t,1<o?1-o:void 0)}function ul(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function fl(){return!0}function Ep(){return!1}function Bn(t){function n(a,o,u,d,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(a=t[w],this[w]=a?a(d):d[w]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?fl:Ep,this.isPropagationStopped=Ep,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),n}var lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dl=Bn(lr),Zs=x({},lr,{view:0,detail:0}),g_=Bn(Zs),_u,bu,Ks,hl=x({},Zs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Su,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ks&&(Ks&&t.type==="mousemove"?(_u=t.screenX-Ks.screenX,bu=t.screenY-Ks.screenY):bu=_u=0,Ks=t),_u)},movementY:function(t){return"movementY"in t?t.movementY:bu}}),Tp=Bn(hl),v_=x({},hl,{dataTransfer:0}),__=Bn(v_),b_=x({},Zs,{relatedTarget:0}),yu=Bn(b_),y_=x({},lr,{animationName:0,elapsedTime:0,pseudoElement:0}),S_=Bn(y_),M_=x({},lr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),E_=Bn(M_),T_=x({},lr,{data:0}),Ap=Bn(T_),A_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},w_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},R_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function C_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=R_[t])?!!n[t]:!1}function Su(){return C_}var D_=x({},Zs,{key:function(t){if(t.key){var n=A_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ul(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?w_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Su,charCode:function(t){return t.type==="keypress"?ul(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ul(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),N_=Bn(D_),U_=x({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wp=Bn(U_),L_=x({},Zs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Su}),O_=Bn(L_),F_=x({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),z_=Bn(F_),P_=x({},hl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),B_=Bn(P_),I_=x({},lr,{newState:0,oldState:0}),H_=Bn(I_),G_=[9,13,27,32],Mu=ji&&"CompositionEvent"in window,Qs=null;ji&&"documentMode"in document&&(Qs=document.documentMode);var V_=ji&&"TextEvent"in window&&!Qs,Rp=ji&&(!Mu||Qs&&8<Qs&&11>=Qs),Cp=" ",Dp=!1;function Np(t,n){switch(t){case"keyup":return G_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Up(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hr=!1;function k_(t,n){switch(t){case"compositionend":return Up(n);case"keypress":return n.which!==32?null:(Dp=!0,Cp);case"textInput":return t=n.data,t===Cp&&Dp?null:t;default:return null}}function j_(t,n){if(Hr)return t==="compositionend"||!Mu&&Np(t,n)?(t=Mp(),cl=vu=Ta=null,Hr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Rp&&n.locale!=="ko"?null:n.data;default:return null}}var X_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!X_[t.type]:n==="textarea"}function Op(t,n,a,o){Br?Ir?Ir.push(o):Ir=[o]:Br=o,n=nc(n,"onChange"),0<n.length&&(a=new dl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Js=null,$s=null;function W_(t){xx(t,0)}function pl(t){var n=Q(t);if(Tt(n))return t}function Fp(t,n){if(t==="change")return n}var zp=!1;if(ji){var Eu;if(ji){var Tu="oninput"in document;if(!Tu){var Pp=document.createElement("div");Pp.setAttribute("oninput","return;"),Tu=typeof Pp.oninput=="function"}Eu=Tu}else Eu=!1;zp=Eu&&(!document.documentMode||9<document.documentMode)}function Bp(){Js&&(Js.detachEvent("onpropertychange",Ip),$s=Js=null)}function Ip(t){if(t.propertyName==="value"&&pl($s)){var n=[];Op(n,$s,t,mu(t)),Sp(W_,n)}}function q_(t,n,a){t==="focusin"?(Bp(),Js=n,$s=a,Js.attachEvent("onpropertychange",Ip)):t==="focusout"&&Bp()}function Y_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return pl($s)}function Z_(t,n){if(t==="click")return pl(n)}function K_(t,n){if(t==="input"||t==="change")return pl(n)}function Q_(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Zn=typeof Object.is=="function"?Object.is:Q_;function eo(t,n){if(Zn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Ge.call(n,u)||!Zn(t[u],n[u]))return!1}return!0}function Hp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gp(t,n){var a=Hp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Hp(a)}}function Vp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Vp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function kp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=_n(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=_n(t.document)}return n}function Au(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var J_=ji&&"documentMode"in document&&11>=document.documentMode,Gr=null,wu=null,to=null,Ru=!1;function jp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ru||Gr==null||Gr!==_n(o)||(o=Gr,"selectionStart"in o&&Au(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),to&&eo(to,o)||(to=o,o=nc(wu,"onSelect"),0<o.length&&(n=new dl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Gr)))}function cr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Vr={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionrun:cr("Transition","TransitionRun"),transitionstart:cr("Transition","TransitionStart"),transitioncancel:cr("Transition","TransitionCancel"),transitionend:cr("Transition","TransitionEnd")},Cu={},Xp={};ji&&(Xp=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function ur(t){if(Cu[t])return Cu[t];if(!Vr[t])return t;var n=Vr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Xp)return Cu[t]=n[a];return t}var Wp=ur("animationend"),qp=ur("animationiteration"),Yp=ur("animationstart"),$_=ur("transitionrun"),eb=ur("transitionstart"),tb=ur("transitioncancel"),Zp=ur("transitionend"),Kp=new Map,Du="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Du.push("scrollEnd");function vi(t,n){Kp.set(t,n),Fe(n,[t])}var ml=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},si=[],kr=0,Nu=0;function xl(){for(var t=kr,n=Nu=kr=0;n<t;){var a=si[n];si[n++]=null;var o=si[n];si[n++]=null;var u=si[n];si[n++]=null;var d=si[n];if(si[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}d!==0&&Qp(a,u,d)}}function gl(t,n,a,o){si[kr++]=t,si[kr++]=n,si[kr++]=a,si[kr++]=o,Nu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Uu(t,n,a,o){return gl(t,n,a,o),vl(t)}function fr(t,n){return gl(t,null,null,n),vl(t)}function Qp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-We(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function vl(t){if(50<Eo)throw Eo=0,Vf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var jr={};function nb(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,n,a,o){return new nb(t,n,a,o)}function Lu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Xi(t,n){var a=t.alternate;return a===null?(a=Kn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Jp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function _l(t,n,a,o,u,d){var y=0;if(o=t,typeof t=="function")Lu(t)&&(y=1);else if(typeof t=="string")y=oy(t,a,_e.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case N:return t=Kn(31,a,n,u),t.elementType=N,t.lanes=d,t;case A:return dr(a.children,u,d,n);case E:y=8,u|=24;break;case v:return t=Kn(12,a,n,u|2),t.elementType=v,t.lanes=d,t;case j:return t=Kn(13,a,n,u),t.elementType=j,t.lanes=d,t;case L:return t=Kn(19,a,n,u),t.elementType=L,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case D:y=10;break e;case O:y=9;break e;case z:y=11;break e;case I:y=14;break e;case q:y=16,o=null;break e}y=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=Kn(y,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function dr(t,n,a,o){return t=Kn(7,t,o,n),t.lanes=a,t}function Ou(t,n,a){return t=Kn(6,t,null,n),t.lanes=a,t}function $p(t){var n=Kn(18,null,null,0);return n.stateNode=t,n}function Fu(t,n,a){return n=Kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var em=new WeakMap;function oi(t,n){if(typeof t=="object"&&t!==null){var a=em.get(t);return a!==void 0?a:(n={value:t,source:n,stack:_t(n)},em.set(t,n),n)}return{value:t,source:n,stack:_t(n)}}var Xr=[],Wr=0,bl=null,no=0,li=[],ci=0,Aa=null,Ni=1,Ui="";function Wi(t,n){Xr[Wr++]=no,Xr[Wr++]=bl,bl=t,no=n}function tm(t,n,a){li[ci++]=Ni,li[ci++]=Ui,li[ci++]=Aa,Aa=t;var o=Ni;t=Ui;var u=32-We(o)-1;o&=~(1<<u),a+=1;var d=32-We(n)+u;if(30<d){var y=u-u%5;d=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Ni=1<<32-We(n)+u|a<<u|o,Ui=d+t}else Ni=1<<d|a<<u|o,Ui=t}function zu(t){t.return!==null&&(Wi(t,1),tm(t,1,0))}function Pu(t){for(;t===bl;)bl=Xr[--Wr],Xr[Wr]=null,no=Xr[--Wr],Xr[Wr]=null;for(;t===Aa;)Aa=li[--ci],li[ci]=null,Ui=li[--ci],li[ci]=null,Ni=li[--ci],li[ci]=null}function nm(t,n){li[ci++]=Ni,li[ci++]=Ui,li[ci++]=Aa,Ni=n.id,Ui=n.overflow,Aa=t}var Tn=null,Kt=null,At=!1,wa=null,ui=!1,Bu=Error(r(519));function Ra(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw io(oi(n,t)),Bu}function im(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[on]=t,n[pn]=o,a){case"dialog":yt("cancel",n),yt("close",n);break;case"iframe":case"object":case"embed":yt("load",n);break;case"video":case"audio":for(a=0;a<Ao.length;a++)yt(Ao[a],n);break;case"source":yt("error",n);break;case"img":case"image":case"link":yt("error",n),yt("load",n);break;case"details":yt("toggle",n);break;case"input":yt("invalid",n),Zt(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":yt("invalid",n);break;case"textarea":yt("invalid",n),En(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||bx(n.textContent,a)?(o.popover!=null&&(yt("beforetoggle",n),yt("toggle",n)),o.onScroll!=null&&yt("scroll",n),o.onScrollEnd!=null&&yt("scrollend",n),o.onClick!=null&&(n.onclick=ki),n=!0):n=!1,n||Ra(t,!0)}function am(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:ui=!1;return;case 27:case 3:ui=!0;return;default:Tn=Tn.return}}function qr(t){if(t!==Tn)return!1;if(!At)return am(t),At=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||id(t.type,t.memoizedProps)),a=!a),a&&Kt&&Ra(t),am(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Kt=Cx(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Kt=Cx(t)}else n===27?(n=Kt,Va(t.type)?(t=ld,ld=null,Kt=t):Kt=n):Kt=Tn?di(t.stateNode.nextSibling):null;return!0}function hr(){Kt=Tn=null,At=!1}function Iu(){var t=wa;return t!==null&&(Vn===null?Vn=t:Vn.push.apply(Vn,t),wa=null),t}function io(t){wa===null?wa=[t]:wa.push(t)}var Hu=B(null),pr=null,qi=null;function Ca(t,n,a){xe(Hu,n._currentValue),n._currentValue=a}function Yi(t){t._currentValue=Hu.current,Z(Hu)}function Gu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Vu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var y=u.child;d=d.firstContext;e:for(;d!==null;){var w=d;d=u;for(var V=0;V<n.length;V++)if(w.context===n[V]){d.lanes|=a,w=d.alternate,w!==null&&(w.lanes|=a),Gu(d.return,a,t),o||(y=null);break e}d=w.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(r(341));y.lanes|=a,d=y.alternate,d!==null&&(d.lanes|=a),Gu(y,a,t),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===t){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function Yr(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var w=u.type;Zn(u.pendingProps.value,y.value)||(t!==null?t.push(w):t=[w])}}else if(u===oe.current){if(y=u.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(No):t=[No])}u=u.return}t!==null&&Vu(n,t,a,o),n.flags|=262144}function yl(t){for(t=t.firstContext;t!==null;){if(!Zn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function mr(t){pr=t,qi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return rm(pr,t)}function Sl(t,n){return pr===null&&mr(t),rm(t,n)}function rm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},qi===null){if(t===null)throw Error(r(308));qi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else qi=qi.next=n;return a}var ib=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},ab=s.unstable_scheduleCallback,rb=s.unstable_NormalPriority,ln={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ku(){return{controller:new ib,data:new Map,refCount:0}}function ao(t){t.refCount--,t.refCount===0&&ab(rb,function(){t.controller.abort()})}var ro=null,ju=0,Zr=0,Kr=null;function sb(t,n){if(ro===null){var a=ro=[];ju=0,Zr=Yf(),Kr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return ju++,n.then(sm,sm),n}function sm(){if(--ju===0&&ro!==null){Kr!==null&&(Kr.status="fulfilled");var t=ro;ro=null,Zr=0,Kr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function ob(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var om=P.S;P.S=function(t,n){j0=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&sb(t,n),om!==null&&om(t,n)};var xr=B(null);function Xu(){var t=xr.current;return t!==null?t:qt.pooledCache}function Ml(t,n){n===null?xe(xr,xr.current):xe(xr,n.pool)}function lm(){var t=Xu();return t===null?null:{parent:ln._currentValue,pool:t}}var Qr=Error(r(460)),Wu=Error(r(474)),El=Error(r(542)),Tl={then:function(){}};function cm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function um(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ki,ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,dm(t),t;default:if(typeof n.status=="string")n.then(ki,ki);else{if(t=qt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,dm(t),t}throw vr=n,Qr}}function gr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(vr=a,Qr):a}}var vr=null;function fm(){if(vr===null)throw Error(r(459));var t=vr;return vr=null,t}function dm(t){if(t===Qr||t===El)throw Error(r(483))}var Jr=null,so=0;function Al(t){var n=so;return so+=1,Jr===null&&(Jr=[]),um(Jr,t,n)}function oo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function wl(t,n){throw n.$$typeof===_?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function hm(t){function n(J,W){if(t){var ae=J.deletions;ae===null?(J.deletions=[W],J.flags|=16):ae.push(W)}}function a(J,W){if(!t)return null;for(;W!==null;)n(J,W),W=W.sibling;return null}function o(J){for(var W=new Map;J!==null;)J.key!==null?W.set(J.key,J):W.set(J.index,J),J=J.sibling;return W}function u(J,W){return J=Xi(J,W),J.index=0,J.sibling=null,J}function d(J,W,ae){return J.index=ae,t?(ae=J.alternate,ae!==null?(ae=ae.index,ae<W?(J.flags|=67108866,W):ae):(J.flags|=67108866,W)):(J.flags|=1048576,W)}function y(J){return t&&J.alternate===null&&(J.flags|=67108866),J}function w(J,W,ae,be){return W===null||W.tag!==6?(W=Ou(ae,J.mode,be),W.return=J,W):(W=u(W,ae),W.return=J,W)}function V(J,W,ae,be){var et=ae.type;return et===A?ge(J,W,ae.props.children,be,ae.key):W!==null&&(W.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===q&&gr(et)===W.type)?(W=u(W,ae.props),oo(W,ae),W.return=J,W):(W=_l(ae.type,ae.key,ae.props,null,J.mode,be),oo(W,ae),W.return=J,W)}function re(J,W,ae,be){return W===null||W.tag!==4||W.stateNode.containerInfo!==ae.containerInfo||W.stateNode.implementation!==ae.implementation?(W=Fu(ae,J.mode,be),W.return=J,W):(W=u(W,ae.children||[]),W.return=J,W)}function ge(J,W,ae,be,et){return W===null||W.tag!==7?(W=dr(ae,J.mode,be,et),W.return=J,W):(W=u(W,ae),W.return=J,W)}function ye(J,W,ae){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Ou(""+W,J.mode,ae),W.return=J,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case M:return ae=_l(W.type,W.key,W.props,null,J.mode,ae),oo(ae,W),ae.return=J,ae;case T:return W=Fu(W,J.mode,ae),W.return=J,W;case q:return W=gr(W),ye(J,W,ae)}if(de(W)||k(W))return W=dr(W,J.mode,ae,null),W.return=J,W;if(typeof W.then=="function")return ye(J,Al(W),ae);if(W.$$typeof===D)return ye(J,Sl(J,W),ae);wl(J,W)}return null}function ce(J,W,ae,be){var et=W!==null?W.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number"||typeof ae=="bigint")return et!==null?null:w(J,W,""+ae,be);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case M:return ae.key===et?V(J,W,ae,be):null;case T:return ae.key===et?re(J,W,ae,be):null;case q:return ae=gr(ae),ce(J,W,ae,be)}if(de(ae)||k(ae))return et!==null?null:ge(J,W,ae,be,null);if(typeof ae.then=="function")return ce(J,W,Al(ae),be);if(ae.$$typeof===D)return ce(J,W,Sl(J,ae),be);wl(J,ae)}return null}function he(J,W,ae,be,et){if(typeof be=="string"&&be!==""||typeof be=="number"||typeof be=="bigint")return J=J.get(ae)||null,w(W,J,""+be,et);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case M:return J=J.get(be.key===null?ae:be.key)||null,V(W,J,be,et);case T:return J=J.get(be.key===null?ae:be.key)||null,re(W,J,be,et);case q:return be=gr(be),he(J,W,ae,be,et)}if(de(be)||k(be))return J=J.get(ae)||null,ge(W,J,be,et,null);if(typeof be.then=="function")return he(J,W,ae,Al(be),et);if(be.$$typeof===D)return he(J,W,ae,Sl(W,be),et);wl(W,be)}return null}function Xe(J,W,ae,be){for(var et=null,Ut=null,Ze=W,xt=W=0,Mt=null;Ze!==null&&xt<ae.length;xt++){Ze.index>xt?(Mt=Ze,Ze=null):Mt=Ze.sibling;var Lt=ce(J,Ze,ae[xt],be);if(Lt===null){Ze===null&&(Ze=Mt);break}t&&Ze&&Lt.alternate===null&&n(J,Ze),W=d(Lt,W,xt),Ut===null?et=Lt:Ut.sibling=Lt,Ut=Lt,Ze=Mt}if(xt===ae.length)return a(J,Ze),At&&Wi(J,xt),et;if(Ze===null){for(;xt<ae.length;xt++)Ze=ye(J,ae[xt],be),Ze!==null&&(W=d(Ze,W,xt),Ut===null?et=Ze:Ut.sibling=Ze,Ut=Ze);return At&&Wi(J,xt),et}for(Ze=o(Ze);xt<ae.length;xt++)Mt=he(Ze,J,xt,ae[xt],be),Mt!==null&&(t&&Mt.alternate!==null&&Ze.delete(Mt.key===null?xt:Mt.key),W=d(Mt,W,xt),Ut===null?et=Mt:Ut.sibling=Mt,Ut=Mt);return t&&Ze.forEach(function(qa){return n(J,qa)}),At&&Wi(J,xt),et}function rt(J,W,ae,be){if(ae==null)throw Error(r(151));for(var et=null,Ut=null,Ze=W,xt=W=0,Mt=null,Lt=ae.next();Ze!==null&&!Lt.done;xt++,Lt=ae.next()){Ze.index>xt?(Mt=Ze,Ze=null):Mt=Ze.sibling;var qa=ce(J,Ze,Lt.value,be);if(qa===null){Ze===null&&(Ze=Mt);break}t&&Ze&&qa.alternate===null&&n(J,Ze),W=d(qa,W,xt),Ut===null?et=qa:Ut.sibling=qa,Ut=qa,Ze=Mt}if(Lt.done)return a(J,Ze),At&&Wi(J,xt),et;if(Ze===null){for(;!Lt.done;xt++,Lt=ae.next())Lt=ye(J,Lt.value,be),Lt!==null&&(W=d(Lt,W,xt),Ut===null?et=Lt:Ut.sibling=Lt,Ut=Lt);return At&&Wi(J,xt),et}for(Ze=o(Ze);!Lt.done;xt++,Lt=ae.next())Lt=he(Ze,J,xt,Lt.value,be),Lt!==null&&(t&&Lt.alternate!==null&&Ze.delete(Lt.key===null?xt:Lt.key),W=d(Lt,W,xt),Ut===null?et=Lt:Ut.sibling=Lt,Ut=Lt);return t&&Ze.forEach(function(vy){return n(J,vy)}),At&&Wi(J,xt),et}function jt(J,W,ae,be){if(typeof ae=="object"&&ae!==null&&ae.type===A&&ae.key===null&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case M:e:{for(var et=ae.key;W!==null;){if(W.key===et){if(et=ae.type,et===A){if(W.tag===7){a(J,W.sibling),be=u(W,ae.props.children),be.return=J,J=be;break e}}else if(W.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===q&&gr(et)===W.type){a(J,W.sibling),be=u(W,ae.props),oo(be,ae),be.return=J,J=be;break e}a(J,W);break}else n(J,W);W=W.sibling}ae.type===A?(be=dr(ae.props.children,J.mode,be,ae.key),be.return=J,J=be):(be=_l(ae.type,ae.key,ae.props,null,J.mode,be),oo(be,ae),be.return=J,J=be)}return y(J);case T:e:{for(et=ae.key;W!==null;){if(W.key===et)if(W.tag===4&&W.stateNode.containerInfo===ae.containerInfo&&W.stateNode.implementation===ae.implementation){a(J,W.sibling),be=u(W,ae.children||[]),be.return=J,J=be;break e}else{a(J,W);break}else n(J,W);W=W.sibling}be=Fu(ae,J.mode,be),be.return=J,J=be}return y(J);case q:return ae=gr(ae),jt(J,W,ae,be)}if(de(ae))return Xe(J,W,ae,be);if(k(ae)){if(et=k(ae),typeof et!="function")throw Error(r(150));return ae=et.call(ae),rt(J,W,ae,be)}if(typeof ae.then=="function")return jt(J,W,Al(ae),be);if(ae.$$typeof===D)return jt(J,W,Sl(J,ae),be);wl(J,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"||typeof ae=="bigint"?(ae=""+ae,W!==null&&W.tag===6?(a(J,W.sibling),be=u(W,ae),be.return=J,J=be):(a(J,W),be=Ou(ae,J.mode,be),be.return=J,J=be),y(J)):a(J,W)}return function(J,W,ae,be){try{so=0;var et=jt(J,W,ae,be);return Jr=null,et}catch(Ze){if(Ze===Qr||Ze===El)throw Ze;var Ut=Kn(29,Ze,null,J.mode);return Ut.lanes=be,Ut.return=J,Ut}finally{}}}var _r=hm(!0),pm=hm(!1),Da=!1;function qu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Na(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ua(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ft&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=vl(t),Qp(t,null,a),n}return gl(t,o,n,a),vl(t)}function lo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Vs(t,a)}}function Zu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=y:d=d.next=y,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Ku=!1;function co(){if(Ku){var t=Kr;if(t!==null)throw t}}function uo(t,n,a,o){Ku=!1;var u=t.updateQueue;Da=!1;var d=u.firstBaseUpdate,y=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var V=w,re=V.next;V.next=null,y===null?d=re:y.next=re,y=V;var ge=t.alternate;ge!==null&&(ge=ge.updateQueue,w=ge.lastBaseUpdate,w!==y&&(w===null?ge.firstBaseUpdate=re:w.next=re,ge.lastBaseUpdate=V))}if(d!==null){var ye=u.baseState;y=0,ge=re=V=null,w=d;do{var ce=w.lane&-536870913,he=ce!==w.lane;if(he?(St&ce)===ce:(o&ce)===ce){ce!==0&&ce===Zr&&(Ku=!0),ge!==null&&(ge=ge.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var Xe=t,rt=w;ce=n;var jt=a;switch(rt.tag){case 1:if(Xe=rt.payload,typeof Xe=="function"){ye=Xe.call(jt,ye,ce);break e}ye=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=rt.payload,ce=typeof Xe=="function"?Xe.call(jt,ye,ce):Xe,ce==null)break e;ye=x({},ye,ce);break e;case 2:Da=!0}}ce=w.callback,ce!==null&&(t.flags|=64,he&&(t.flags|=8192),he=u.callbacks,he===null?u.callbacks=[ce]:he.push(ce))}else he={lane:ce,tag:w.tag,payload:w.payload,callback:w.callback,next:null},ge===null?(re=ge=he,V=ye):ge=ge.next=he,y|=ce;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;he=w,w=he.next,he.next=null,u.lastBaseUpdate=he,u.shared.pending=null}}while(!0);ge===null&&(V=ye),u.baseState=V,u.firstBaseUpdate=re,u.lastBaseUpdate=ge,d===null&&(u.shared.lanes=0),Pa|=y,t.lanes=y,t.memoizedState=ye}}function mm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function xm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)mm(a[t],n)}var $r=B(null),Rl=B(0);function gm(t,n){t=ia,xe(Rl,t),xe($r,n),ia=t|n.baseLanes}function Qu(){xe(Rl,ia),xe($r,$r.current)}function Ju(){ia=Rl.current,Z($r),Z(Rl)}var Qn=B(null),fi=null;function La(t){var n=t.alternate;xe(an,an.current&1),xe(Qn,t),fi===null&&(n===null||$r.current!==null||n.memoizedState!==null)&&(fi=t)}function $u(t){xe(an,an.current),xe(Qn,t),fi===null&&(fi=t)}function vm(t){t.tag===22?(xe(an,an.current),xe(Qn,t),fi===null&&(fi=t)):Oa()}function Oa(){xe(an,an.current),xe(Qn,Qn.current)}function Jn(t){Z(Qn),fi===t&&(fi=null),Z(an)}var an=B(0);function Cl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||sd(a)||od(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Zi=0,pt=null,Vt=null,cn=null,Dl=!1,es=!1,br=!1,Nl=0,fo=0,ts=null,lb=0;function en(){throw Error(r(321))}function ef(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Zn(t[a],n[a]))return!1;return!0}function tf(t,n,a,o,u,d){return Zi=d,pt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?t0:gf,br=!1,d=a(o,u),br=!1,es&&(d=bm(n,a,o,u)),_m(t),d}function _m(t){P.H=mo;var n=Vt!==null&&Vt.next!==null;if(Zi=0,cn=Vt=pt=null,Dl=!1,fo=0,ts=null,n)throw Error(r(300));t===null||un||(t=t.dependencies,t!==null&&yl(t)&&(un=!0))}function bm(t,n,a,o){pt=t;var u=0;do{if(es&&(ts=null),fo=0,es=!1,25<=u)throw Error(r(301));if(u+=1,cn=Vt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}P.H=n0,d=n(a,o)}while(es);return d}function cb(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?ho(n):n,t=t.useState()[0],(Vt!==null?Vt.memoizedState:null)!==t&&(pt.flags|=1024),n}function nf(){var t=Nl!==0;return Nl=0,t}function af(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function rf(t){if(Dl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Dl=!1}Zi=0,cn=Vt=pt=null,es=!1,fo=Nl=0,ts=null}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?pt.memoizedState=cn=t:cn=cn.next=t,cn}function rn(){if(Vt===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=Vt.next;var n=cn===null?pt.memoizedState:cn.next;if(n!==null)cn=n,Vt=t;else{if(t===null)throw pt.alternate===null?Error(r(467)):Error(r(310));Vt=t,t={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},cn===null?pt.memoizedState=cn=t:cn=cn.next=t}return cn}function Ul(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ho(t){var n=fo;return fo+=1,ts===null&&(ts=[]),t=um(ts,t,n),n=pt,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?t0:gf),t}function Ll(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ho(t);if(t.$$typeof===D)return An(t)}throw Error(r(438,String(t)))}function sf(t){var n=null,a=pt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=pt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ul(),pt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=R;return n.index++,a}function Ki(t,n){return typeof n=="function"?n(t):n}function Ol(t){var n=rn();return of(n,Vt,t)}function of(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var y=u.next;u.next=d.next,d.next=y}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var w=y=null,V=null,re=n,ge=!1;do{var ye=re.lane&-536870913;if(ye!==re.lane?(St&ye)===ye:(Zi&ye)===ye){var ce=re.revertLane;if(ce===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),ye===Zr&&(ge=!0);else if((Zi&ce)===ce){re=re.next,ce===Zr&&(ge=!0);continue}else ye={lane:0,revertLane:re.revertLane,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},V===null?(w=V=ye,y=d):V=V.next=ye,pt.lanes|=ce,Pa|=ce;ye=re.action,br&&a(d,ye),d=re.hasEagerState?re.eagerState:a(d,ye)}else ce={lane:ye,revertLane:re.revertLane,gesture:re.gesture,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},V===null?(w=V=ce,y=d):V=V.next=ce,pt.lanes|=ye,Pa|=ye;re=re.next}while(re!==null&&re!==n);if(V===null?y=d:V.next=w,!Zn(d,t.memoizedState)&&(un=!0,ge&&(a=Kr,a!==null)))throw a;t.memoizedState=d,t.baseState=y,t.baseQueue=V,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function lf(t){var n=rn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do d=t(d,y.action),y=y.next;while(y!==u);Zn(d,n.memoizedState)||(un=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function ym(t,n,a){var o=pt,u=rn(),d=At;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!Zn((Vt||u).memoizedState,a);if(y&&(u.memoizedState=a,un=!0),u=u.queue,ff(Em.bind(null,o,u,t),[t]),u.getSnapshot!==n||y||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,ns(9,{destroy:void 0},Mm.bind(null,o,u,a,n),null),qt===null)throw Error(r(349));d||(Zi&127)!==0||Sm(o,n,a)}return a}function Sm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=pt.updateQueue,n===null?(n=Ul(),pt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Mm(t,n,a,o){n.value=a,n.getSnapshot=o,Tm(n)&&Am(t)}function Em(t,n,a){return a(function(){Tm(n)&&Am(t)})}function Tm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Zn(t,a)}catch{return!0}}function Am(t){var n=fr(t,2);n!==null&&kn(n,t,2)}function cf(t){var n=Fn();if(typeof t=="function"){var a=t;if(t=a(),br){Je(!0);try{a()}finally{Je(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:t},n}function wm(t,n,a,o){return t.baseState=a,of(t,Vt,typeof o=="function"?o:Ki)}function ub(t,n,a,o,u){if(Pl(t))throw Error(r(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){d.listeners.push(y)}};P.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Rm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Rm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=P.T,y={};P.T=y;try{var w=a(u,o),V=P.S;V!==null&&V(y,w),Cm(t,n,w)}catch(re){uf(t,n,re)}finally{d!==null&&y.types!==null&&(d.types=y.types),P.T=d}}else try{d=a(u,o),Cm(t,n,d)}catch(re){uf(t,n,re)}}function Cm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Dm(t,n,o)},function(o){return uf(t,n,o)}):Dm(t,n,a)}function Dm(t,n,a){n.status="fulfilled",n.value=a,Nm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Rm(t,a)))}function uf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Nm(n),n=n.next;while(n!==o)}t.action=null}function Nm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Um(t,n){return n}function Lm(t,n){if(At){var a=qt.formState;if(a!==null){e:{var o=pt;if(At){if(Kt){t:{for(var u=Kt,d=ui;u.nodeType!==8;){if(!d){u=null;break t}if(u=di(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Kt=di(u.nextSibling),o=u.data==="F!";break e}}Ra(o)}o=!1}o&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Um,lastRenderedState:n},a.queue=o,a=Jm.bind(null,pt,o),o.dispatch=a,o=cf(!1),d=xf.bind(null,pt,!1,o.queue),o=Fn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=ub.bind(null,pt,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Om(t){var n=rn();return Fm(n,Vt,t)}function Fm(t,n,a){if(n=of(t,n,Um)[0],t=Ol(Ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=ho(n)}catch(y){throw y===Qr?El:y}else o=n;n=rn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(pt.flags|=2048,ns(9,{destroy:void 0},fb.bind(null,u,a),null)),[o,d,t]}function fb(t,n){t.action=n}function zm(t){var n=rn(),a=Vt;if(a!==null)return Fm(n,a,t);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function ns(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=pt.updateQueue,n===null&&(n=Ul(),pt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Pm(){return rn().memoizedState}function Fl(t,n,a,o){var u=Fn();pt.flags|=t,u.memoizedState=ns(1|n,{destroy:void 0},a,o===void 0?null:o)}function zl(t,n,a,o){var u=rn();o=o===void 0?null:o;var d=u.memoizedState.inst;Vt!==null&&o!==null&&ef(o,Vt.memoizedState.deps)?u.memoizedState=ns(n,d,a,o):(pt.flags|=t,u.memoizedState=ns(1|n,d,a,o))}function Bm(t,n){Fl(8390656,8,t,n)}function ff(t,n){zl(2048,8,t,n)}function db(t){pt.flags|=4;var n=pt.updateQueue;if(n===null)n=Ul(),pt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Im(t){var n=rn().memoizedState;return db({ref:n,nextImpl:t}),function(){if((Ft&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Hm(t,n){return zl(4,2,t,n)}function Gm(t,n){return zl(4,4,t,n)}function Vm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function km(t,n,a){a=a!=null?a.concat([t]):null,zl(4,4,Vm.bind(null,n,t),a)}function df(){}function jm(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&ef(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Xm(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&ef(n,o[1]))return o[0];if(o=t(),br){Je(!0);try{t()}finally{Je(!1)}}return a.memoizedState=[o,n],o}function hf(t,n,a){return a===void 0||(Zi&1073741824)!==0&&(St&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=W0(),pt.lanes|=t,Pa|=t,a)}function Wm(t,n,a,o){return Zn(a,n)?a:$r.current!==null?(t=hf(t,a,o),Zn(t,n)||(un=!0),t):(Zi&42)===0||(Zi&1073741824)!==0&&(St&261930)===0?(un=!0,t.memoizedState=a):(t=W0(),pt.lanes|=t,Pa|=t,n)}function qm(t,n,a,o,u){var d=K.p;K.p=d!==0&&8>d?d:8;var y=P.T,w={};P.T=w,xf(t,!1,n,a);try{var V=u(),re=P.S;if(re!==null&&re(w,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var ge=ob(V,o);po(t,n,ge,ti(t))}else po(t,n,o,ti(t))}catch(ye){po(t,n,{then:function(){},status:"rejected",reason:ye},ti())}finally{K.p=d,y!==null&&w.types!==null&&(y.types=w.types),P.T=y}}function hb(){}function pf(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=Ym(t).queue;qm(t,u,n,Y,a===null?hb:function(){return Zm(t),a(o)})}function Ym(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Zm(t){var n=Ym(t);n.next===null&&(n=t.alternate.memoizedState),po(t,n.next.queue,{},ti())}function mf(){return An(No)}function Km(){return rn().memoizedState}function Qm(){return rn().memoizedState}function pb(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ti();t=Na(a);var o=Ua(n,t,a);o!==null&&(kn(o,n,a),lo(o,n,a)),n={cache:ku()},t.payload=n;return}n=n.return}}function mb(t,n,a){var o=ti();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Pl(t)?$m(n,a):(a=Uu(t,n,a,o),a!==null&&(kn(a,t,o),e0(a,n,o)))}function Jm(t,n,a){var o=ti();po(t,n,a,o)}function po(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Pl(t))$m(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var y=n.lastRenderedState,w=d(y,a);if(u.hasEagerState=!0,u.eagerState=w,Zn(w,y))return gl(t,n,u,0),qt===null&&xl(),!1}catch{}finally{}if(a=Uu(t,n,u,o),a!==null)return kn(a,t,o),e0(a,n,o),!0}return!1}function xf(t,n,a,o){if(o={lane:2,revertLane:Yf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Pl(t)){if(n)throw Error(r(479))}else n=Uu(t,a,o,2),n!==null&&kn(n,t,2)}function Pl(t){var n=t.alternate;return t===pt||n!==null&&n===pt}function $m(t,n){es=Dl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function e0(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Vs(t,a)}}var mo={readContext:An,use:Ll,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};mo.useEffectEvent=en;var t0={readContext:An,use:Ll,useCallback:function(t,n){return Fn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:Bm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Fl(4194308,4,Vm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Fl(4194308,4,t,n)},useInsertionEffect:function(t,n){Fl(4,2,t,n)},useMemo:function(t,n){var a=Fn();n=n===void 0?null:n;var o=t();if(br){Je(!0);try{t()}finally{Je(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Fn();if(a!==void 0){var u=a(n);if(br){Je(!0);try{a(n)}finally{Je(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=mb.bind(null,pt,t),[o.memoizedState,t]},useRef:function(t){var n=Fn();return t={current:t},n.memoizedState=t},useState:function(t){t=cf(t);var n=t.queue,a=Jm.bind(null,pt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:df,useDeferredValue:function(t,n){var a=Fn();return hf(a,t,n)},useTransition:function(){var t=cf(!1);return t=qm.bind(null,pt,t.queue,!0,!1),Fn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=pt,u=Fn();if(At){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),qt===null)throw Error(r(349));(St&127)!==0||Sm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Bm(Em.bind(null,o,d,t),[t]),o.flags|=2048,ns(9,{destroy:void 0},Mm.bind(null,o,d,a,n),null),a},useId:function(){var t=Fn(),n=qt.identifierPrefix;if(At){var a=Ui,o=Ni;a=(o&~(1<<32-We(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Nl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=lb++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:mf,useFormState:Lm,useActionState:Lm,useOptimistic:function(t){var n=Fn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=xf.bind(null,pt,!0,a),a.dispatch=n,[t,n]},useMemoCache:sf,useCacheRefresh:function(){return Fn().memoizedState=pb.bind(null,pt)},useEffectEvent:function(t){var n=Fn(),a={impl:t};return n.memoizedState=a,function(){if((Ft&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},gf={readContext:An,use:Ll,useCallback:jm,useContext:An,useEffect:ff,useImperativeHandle:km,useInsertionEffect:Hm,useLayoutEffect:Gm,useMemo:Xm,useReducer:Ol,useRef:Pm,useState:function(){return Ol(Ki)},useDebugValue:df,useDeferredValue:function(t,n){var a=rn();return Wm(a,Vt.memoizedState,t,n)},useTransition:function(){var t=Ol(Ki)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:ho(t),n]},useSyncExternalStore:ym,useId:Km,useHostTransitionStatus:mf,useFormState:Om,useActionState:Om,useOptimistic:function(t,n){var a=rn();return wm(a,Vt,t,n)},useMemoCache:sf,useCacheRefresh:Qm};gf.useEffectEvent=Im;var n0={readContext:An,use:Ll,useCallback:jm,useContext:An,useEffect:ff,useImperativeHandle:km,useInsertionEffect:Hm,useLayoutEffect:Gm,useMemo:Xm,useReducer:lf,useRef:Pm,useState:function(){return lf(Ki)},useDebugValue:df,useDeferredValue:function(t,n){var a=rn();return Vt===null?hf(a,t,n):Wm(a,Vt.memoizedState,t,n)},useTransition:function(){var t=lf(Ki)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:ho(t),n]},useSyncExternalStore:ym,useId:Km,useHostTransitionStatus:mf,useFormState:zm,useActionState:zm,useOptimistic:function(t,n){var a=rn();return Vt!==null?wm(a,Vt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:sf,useCacheRefresh:Qm};n0.useEffectEvent=Im;function vf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var _f={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ti(),u=Na(o);u.payload=n,a!=null&&(u.callback=a),n=Ua(t,u,o),n!==null&&(kn(n,t,o),lo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ti(),u=Na(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ua(t,u,o),n!==null&&(kn(n,t,o),lo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ti(),o=Na(a);o.tag=2,n!=null&&(o.callback=n),n=Ua(t,o,a),n!==null&&(kn(n,t,a),lo(n,t,a))}};function i0(t,n,a,o,u,d,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,y):n.prototype&&n.prototype.isPureReactComponent?!eo(a,o)||!eo(u,d):!0}function a0(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&_f.enqueueReplaceState(n,n.state,null)}function yr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function r0(t){ml(t)}function s0(t){console.error(t)}function o0(t){ml(t)}function Bl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function l0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function bf(t,n,a){return a=Na(a),a.tag=3,a.payload={element:null},a.callback=function(){Bl(t,n)},a}function c0(t){return t=Na(t),t.tag=3,t}function u0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){l0(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){l0(n,a,o),typeof u!="function"&&(Ba===null?Ba=new Set([this]):Ba.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function xb(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Yr(n,a,u,!0),a=Qn.current,a!==null){switch(a.tag){case 31:case 13:return fi===null?Kl():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Tl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Xf(t,o,u)),!1;case 22:return a.flags|=65536,o===Tl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Xf(t,o,u)),!1}throw Error(r(435,a.tag))}return Xf(t,o,u),Kl(),!1}if(At)return n=Qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Bu&&(t=Error(r(422),{cause:o}),io(oi(t,a)))):(o!==Bu&&(n=Error(r(423),{cause:o}),io(oi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=oi(o,a),u=bf(t.stateNode,o,u),Zu(t,u),tn!==4&&(tn=2)),!1;var d=Error(r(520),{cause:o});if(d=oi(d,a),Mo===null?Mo=[d]:Mo.push(d),tn!==4&&(tn=2),n===null)return!0;o=oi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=bf(a.stateNode,o,t),Zu(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ba===null||!Ba.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=c0(u),u0(u,t,a,o),Zu(a,u),!1}a=a.return}while(a!==null);return!1}var yf=Error(r(461)),un=!1;function wn(t,n,a,o){n.child=t===null?pm(n,null,a,o):_r(n,t.child,a,o)}function f0(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var y={};for(var w in o)w!=="ref"&&(y[w]=o[w])}else y=o;return mr(n),o=tf(t,n,a,y,d,u),w=nf(),t!==null&&!un?(af(t,n,u),Qi(t,n,u)):(At&&w&&zu(n),n.flags|=1,wn(t,n,o,u),n.child)}function d0(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!Lu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,h0(t,n,d,o,u)):(t=_l(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Cf(t,u)){var y=d.memoizedProps;if(a=a.compare,a=a!==null?a:eo,a(y,o)&&t.ref===n.ref)return Qi(t,n,u)}return n.flags|=1,t=Xi(d,o),t.ref=n.ref,t.return=n,n.child=t}function h0(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(eo(d,o)&&t.ref===n.ref)if(un=!1,n.pendingProps=o=d,Cf(t,u))(t.flags&131072)!==0&&(un=!0);else return n.lanes=t.lanes,Qi(t,n,u)}return Sf(t,n,a,o,u)}function p0(t,n,a,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return m0(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ml(n,d!==null?d.cachePool:null),d!==null?gm(n,d):Qu(),vm(n);else return o=n.lanes=536870912,m0(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Ml(n,d.cachePool),gm(n,d),Oa(),n.memoizedState=null):(t!==null&&Ml(n,null),Qu(),Oa());return wn(t,n,u,a),n.child}function xo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function m0(t,n,a,o,u){var d=Xu();return d=d===null?null:{parent:ln._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&Ml(n,null),Qu(),vm(n),t!==null&&Yr(t,n,o,!0),n.childLanes=u,null}function Il(t,n){return n=Gl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function x0(t,n,a){return _r(n,t.child,null,a),t=Il(n,n.pendingProps),t.flags|=2,Jn(n),n.memoizedState=null,t}function gb(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(At){if(o.mode==="hidden")return t=Il(n,o),n.lanes=536870912,xo(null,t);if($u(n),(t=Kt)?(t=Rx(t,ui),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Aa!==null?{id:Ni,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},a=$p(t),a.return=n,n.child=a,Tn=n,Kt=null)):t=null,t===null)throw Ra(n);return n.lanes=536870912,null}return Il(n,o)}var d=t.memoizedState;if(d!==null){var y=d.dehydrated;if($u(n),u)if(n.flags&256)n.flags&=-257,n=x0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(un||Yr(t,n,a,!1),u=(a&t.childLanes)!==0,un||u){if(o=qt,o!==null&&(y=ks(o,a),y!==0&&y!==d.retryLane))throw d.retryLane=y,fr(t,y),kn(o,t,y),yf;Kl(),n=x0(t,n,a)}else t=d.treeContext,Kt=di(y.nextSibling),Tn=n,At=!0,wa=null,ui=!1,t!==null&&nm(n,t),n=Il(n,o),n.flags|=4096;return n}return t=Xi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Hl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Sf(t,n,a,o,u){return mr(n),a=tf(t,n,a,o,void 0,u),o=nf(),t!==null&&!un?(af(t,n,u),Qi(t,n,u)):(At&&o&&zu(n),n.flags|=1,wn(t,n,a,u),n.child)}function g0(t,n,a,o,u,d){return mr(n),n.updateQueue=null,a=bm(n,o,a,u),_m(t),o=nf(),t!==null&&!un?(af(t,n,d),Qi(t,n,d)):(At&&o&&zu(n),n.flags|=1,wn(t,n,a,d),n.child)}function v0(t,n,a,o,u){if(mr(n),n.stateNode===null){var d=jr,y=a.contextType;typeof y=="object"&&y!==null&&(d=An(y)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=_f,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},qu(n),y=a.contextType,d.context=typeof y=="object"&&y!==null?An(y):jr,d.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(vf(n,a,y,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(y=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),y!==d.state&&_f.enqueueReplaceState(d,d.state,null),uo(n,o,d,u),co(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var w=n.memoizedProps,V=yr(a,w);d.props=V;var re=d.context,ge=a.contextType;y=jr,typeof ge=="object"&&ge!==null&&(y=An(ge));var ye=a.getDerivedStateFromProps;ge=typeof ye=="function"||typeof d.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,ge||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(w||re!==y)&&a0(n,d,o,y),Da=!1;var ce=n.memoizedState;d.state=ce,uo(n,o,d,u),co(),re=n.memoizedState,w||ce!==re||Da?(typeof ye=="function"&&(vf(n,a,ye,o),re=n.memoizedState),(V=Da||i0(n,a,V,o,ce,re,y))?(ge||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=re),d.props=o,d.state=re,d.context=y,o=V):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Yu(t,n),y=n.memoizedProps,ge=yr(a,y),d.props=ge,ye=n.pendingProps,ce=d.context,re=a.contextType,V=jr,typeof re=="object"&&re!==null&&(V=An(re)),w=a.getDerivedStateFromProps,(re=typeof w=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==ye||ce!==V)&&a0(n,d,o,V),Da=!1,ce=n.memoizedState,d.state=ce,uo(n,o,d,u),co();var he=n.memoizedState;y!==ye||ce!==he||Da||t!==null&&t.dependencies!==null&&yl(t.dependencies)?(typeof w=="function"&&(vf(n,a,w,o),he=n.memoizedState),(ge=Da||i0(n,a,ge,o,ce,he,V)||t!==null&&t.dependencies!==null&&yl(t.dependencies))?(re||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,he,V),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,he,V)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&ce===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ce===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=he),d.props=o,d.state=he,d.context=V,o=ge):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&ce===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ce===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,Hl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=_r(n,t.child,null,u),n.child=_r(n,null,a,u)):wn(t,n,a,u),n.memoizedState=d.state,t=n.child):t=Qi(t,n,u),t}function _0(t,n,a,o){return hr(),n.flags|=256,wn(t,n,a,o),n.child}var Mf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ef(t){return{baseLanes:t,cachePool:lm()}}function Tf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ei),t}function b0(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,y;if((y=d)||(y=t!==null&&t.memoizedState===null?!1:(an.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(At){if(u?La(n):Oa(),(t=Kt)?(t=Rx(t,ui),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Aa!==null?{id:Ni,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},a=$p(t),a.return=n,n.child=a,Tn=n,Kt=null)):t=null,t===null)throw Ra(n);return od(t)?n.lanes=32:n.lanes=536870912,null}var w=o.children;return o=o.fallback,u?(Oa(),u=n.mode,w=Gl({mode:"hidden",children:w},u),o=dr(o,u,a,null),w.return=n,o.return=n,w.sibling=o,n.child=w,o=n.child,o.memoizedState=Ef(a),o.childLanes=Tf(t,y,a),n.memoizedState=Mf,xo(null,o)):(La(n),Af(n,w))}var V=t.memoizedState;if(V!==null&&(w=V.dehydrated,w!==null)){if(d)n.flags&256?(La(n),n.flags&=-257,n=wf(t,n,a)):n.memoizedState!==null?(Oa(),n.child=t.child,n.flags|=128,n=null):(Oa(),w=o.fallback,u=n.mode,o=Gl({mode:"visible",children:o.children},u),w=dr(w,u,a,null),w.flags|=2,o.return=n,w.return=n,o.sibling=w,n.child=o,_r(n,t.child,null,a),o=n.child,o.memoizedState=Ef(a),o.childLanes=Tf(t,y,a),n.memoizedState=Mf,n=xo(null,o));else if(La(n),od(w)){if(y=w.nextSibling&&w.nextSibling.dataset,y)var re=y.dgst;y=re,o=Error(r(419)),o.stack="",o.digest=y,io({value:o,source:null,stack:null}),n=wf(t,n,a)}else if(un||Yr(t,n,a,!1),y=(a&t.childLanes)!==0,un||y){if(y=qt,y!==null&&(o=ks(y,a),o!==0&&o!==V.retryLane))throw V.retryLane=o,fr(t,o),kn(y,t,o),yf;sd(w)||Kl(),n=wf(t,n,a)}else sd(w)?(n.flags|=192,n.child=t.child,n=null):(t=V.treeContext,Kt=di(w.nextSibling),Tn=n,At=!0,wa=null,ui=!1,t!==null&&nm(n,t),n=Af(n,o.children),n.flags|=4096);return n}return u?(Oa(),w=o.fallback,u=n.mode,V=t.child,re=V.sibling,o=Xi(V,{mode:"hidden",children:o.children}),o.subtreeFlags=V.subtreeFlags&65011712,re!==null?w=Xi(re,w):(w=dr(w,u,a,null),w.flags|=2),w.return=n,o.return=n,o.sibling=w,n.child=o,xo(null,o),o=n.child,w=t.child.memoizedState,w===null?w=Ef(a):(u=w.cachePool,u!==null?(V=ln._currentValue,u=u.parent!==V?{parent:V,pool:V}:u):u=lm(),w={baseLanes:w.baseLanes|a,cachePool:u}),o.memoizedState=w,o.childLanes=Tf(t,y,a),n.memoizedState=Mf,xo(t.child,o)):(La(n),a=t.child,t=a.sibling,a=Xi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function Af(t,n){return n=Gl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Gl(t,n){return t=Kn(22,t,null,n),t.lanes=0,t}function wf(t,n,a){return _r(n,t.child,null,a),t=Af(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function y0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Gu(t.return,n,a)}function Rf(t,n,a,o,u,d){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=d)}function S0(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var y=an.current,w=(y&2)!==0;if(w?(y=y&1|2,n.flags|=128):y&=1,xe(an,y),wn(t,n,o,a),o=At?no:0,!w&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&y0(t,a,n);else if(t.tag===19)y0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Cl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Rf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Cl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Rf(n,!0,a,null,d,o);break;case"together":Rf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Qi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Pa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Yr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Xi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Xi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Cf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&yl(t)))}function vb(t,n,a){switch(n.tag){case 3:Ee(n,n.stateNode.containerInfo),Ca(n,ln,t.memoizedState.cache),hr();break;case 27:case 5:Pe(n);break;case 4:Ee(n,n.stateNode.containerInfo);break;case 10:Ca(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,$u(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(La(n),n.flags|=128,null):(a&n.child.childLanes)!==0?b0(t,n,a):(La(n),t=Qi(t,n,a),t!==null?t.sibling:null);La(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Yr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return S0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xe(an,an.current),o)break;return null;case 22:return n.lanes=0,p0(t,n,a,n.pendingProps);case 24:Ca(n,ln,t.memoizedState.cache)}return Qi(t,n,a)}function M0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)un=!0;else{if(!Cf(t,a)&&(n.flags&128)===0)return un=!1,vb(t,n,a);un=(t.flags&131072)!==0}else un=!1,At&&(n.flags&1048576)!==0&&tm(n,no,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=gr(n.elementType),n.type=t,typeof t=="function")Lu(t)?(o=yr(t,o),n.tag=1,n=v0(null,n,t,o,a)):(n.tag=0,n=Sf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===z){n.tag=11,n=f0(null,n,t,o,a);break e}else if(u===I){n.tag=14,n=d0(null,n,t,o,a);break e}}throw n=$(t)||t,Error(r(306,n,""))}}return n;case 0:return Sf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=yr(o,n.pendingProps),v0(t,n,o,u,a);case 3:e:{if(Ee(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Yu(t,n),uo(n,o,null,a);var y=n.memoizedState;if(o=y.cache,Ca(n,ln,o),o!==d.cache&&Vu(n,[ln],a,!0),co(),o=y.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=_0(t,n,o,a);break e}else if(o!==u){u=oi(Error(r(424)),n),io(u),n=_0(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Kt=di(t.firstChild),Tn=n,At=!0,wa=null,ui=!0,a=pm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(hr(),o===u){n=Qi(t,n,a);break e}wn(t,n,o,a)}n=n.child}return n;case 26:return Hl(t,n),t===null?(a=Ox(n.type,null,n.pendingProps,null))?n.memoizedState=a:At||(a=n.type,t=n.pendingProps,o=ic(ie.current).createElement(a),o[on]=n,o[pn]=t,Rn(o,a,t),se(o),n.stateNode=o):n.memoizedState=Ox(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Pe(n),t===null&&At&&(o=n.stateNode=Nx(n.type,n.pendingProps,ie.current),Tn=n,ui=!0,u=Kt,Va(n.type)?(ld=u,Kt=di(o.firstChild)):Kt=u),wn(t,n,n.pendingProps.children,a),Hl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&At&&((u=o=Kt)&&(o=Yb(o,n.type,n.pendingProps,ui),o!==null?(n.stateNode=o,Tn=n,Kt=di(o.firstChild),ui=!1,u=!0):u=!1),u||Ra(n)),Pe(n),u=n.type,d=n.pendingProps,y=t!==null?t.memoizedProps:null,o=d.children,id(u,d)?o=null:y!==null&&id(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=tf(t,n,cb,null,null,a),No._currentValue=u),Hl(t,n),wn(t,n,o,a),n.child;case 6:return t===null&&At&&((t=a=Kt)&&(a=Zb(a,n.pendingProps,ui),a!==null?(n.stateNode=a,Tn=n,Kt=null,t=!0):t=!1),t||Ra(n)),null;case 13:return b0(t,n,a);case 4:return Ee(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=_r(n,null,o,a):wn(t,n,o,a),n.child;case 11:return f0(t,n,n.type,n.pendingProps,a);case 7:return wn(t,n,n.pendingProps,a),n.child;case 8:return wn(t,n,n.pendingProps.children,a),n.child;case 12:return wn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ca(n,n.type,o.value),wn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,mr(n),u=An(u),o=o(u),n.flags|=1,wn(t,n,o,a),n.child;case 14:return d0(t,n,n.type,n.pendingProps,a);case 15:return h0(t,n,n.type,n.pendingProps,a);case 19:return S0(t,n,a);case 31:return gb(t,n,a);case 22:return p0(t,n,a,n.pendingProps);case 24:return mr(n),o=An(ln),t===null?(u=Xu(),u===null&&(u=qt,d=ku(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},qu(n),Ca(n,ln,u)):((t.lanes&a)!==0&&(Yu(t,n),uo(n,null,null,a),co()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ca(n,ln,o)):(o=d.cache,Ca(n,ln,o),o!==u.cache&&Vu(n,[ln],a,!0))),wn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ji(t){t.flags|=4}function Df(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(K0())t.flags|=8192;else throw vr=Tl,Wu}else t.flags&=-16777217}function E0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Ix(n))if(K0())t.flags|=8192;else throw vr=Tl,Wu}function Vl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Gt():536870912,t.lanes|=n,ss|=n)}function go(t,n){if(!At)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Qt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function _b(t,n,a){var o=n.pendingProps;switch(Pu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(n),null;case 1:return Qt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Yi(ln),Le(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(qr(n)?Ji(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Iu())),Qt(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(Ji(n),d!==null?(Qt(n),E0(n,d)):(Qt(n),Df(n,u,null,o,a))):d?d!==t.memoizedState?(Ji(n),Qt(n),E0(n,d)):(Qt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&Ji(n),Qt(n),Df(n,u,t,o,a)),null;case 27:if(nt(n),a=ie.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Ji(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Qt(n),null}t=_e.current,qr(n)?im(n):(t=Nx(u,o,a),n.stateNode=t,Ji(n))}return Qt(n),null;case 5:if(nt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Ji(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Qt(n),null}if(d=_e.current,qr(n))im(n);else{var y=ic(ie.current);switch(d){case 1:d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=y.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}d[on]=n,d[pn]=o;e:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)d.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break e;for(;y.sibling===null;){if(y.return===null||y.return===n)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=d;e:switch(Rn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Ji(n)}}return Qt(n),Df(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Ji(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=ie.current,qr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[on]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||bx(t.nodeValue,a)),t||Ra(n,!0)}else t=ic(t).createTextNode(o),t[on]=n,n.stateNode=t}return Qt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=qr(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[on]=n}else hr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),t=!1}else a=Iu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Jn(n),n):(Jn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Qt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=qr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[on]=n}else hr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),u=!1}else u=Iu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Jn(n),n):(Jn(n),null)}return Jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Vl(n,n.updateQueue),Qt(n),null);case 4:return Le(),t===null&&Jf(n.stateNode.containerInfo),Qt(n),null;case 10:return Yi(n.type),Qt(n),null;case 19:if(Z(an),o=n.memoizedState,o===null)return Qt(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)go(o,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Cl(t),d!==null){for(n.flags|=128,go(o,!1),t=d.updateQueue,n.updateQueue=t,Vl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Jp(a,t),a=a.sibling;return xe(an,an.current&1|2),At&&Wi(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&b()>ql&&(n.flags|=128,u=!0,go(o,!1),n.lanes=4194304)}else{if(!u)if(t=Cl(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Vl(n,t),go(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!At)return Qt(n),null}else 2*b()-o.renderingStartTime>ql&&a!==536870912&&(n.flags|=128,u=!0,go(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=b(),t.sibling=null,a=an.current,xe(an,u?a&1|2:a&1),At&&Wi(n,o.treeForkCount),t):(Qt(n),null);case 22:case 23:return Jn(n),Ju(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Qt(n),n.subtreeFlags&6&&(n.flags|=8192)):Qt(n),a=n.updateQueue,a!==null&&Vl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Z(xr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Yi(ln),Qt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function bb(t,n){switch(Pu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Yi(ln),Le(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return nt(n),null;case 31:if(n.memoizedState!==null){if(Jn(n),n.alternate===null)throw Error(r(340));hr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Jn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));hr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Z(an),null;case 4:return Le(),null;case 10:return Yi(n.type),null;case 22:case 23:return Jn(n),Ju(),t!==null&&Z(xr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Yi(ln),null;case 25:return null;default:return null}}function T0(t,n){switch(Pu(n),n.tag){case 3:Yi(ln),Le();break;case 26:case 27:case 5:nt(n);break;case 4:Le();break;case 31:n.memoizedState!==null&&Jn(n);break;case 13:Jn(n);break;case 19:Z(an);break;case 10:Yi(n.type);break;case 22:case 23:Jn(n),Ju(),t!==null&&Z(xr);break;case 24:Yi(ln)}}function vo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,y=a.inst;o=d(),y.destroy=o}a=a.next}while(a!==u)}}catch(w){It(n,n.return,w)}}function Fa(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var y=o.inst,w=y.destroy;if(w!==void 0){y.destroy=void 0,u=n;var V=a,re=w;try{re()}catch(ge){It(u,V,ge)}}}o=o.next}while(o!==d)}}catch(ge){It(n,n.return,ge)}}function A0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{xm(n,a)}catch(o){It(t,t.return,o)}}}function w0(t,n,a){a.props=yr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){It(t,n,o)}}function _o(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){It(t,n,u)}}function Li(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){It(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){It(t,n,u)}else a.current=null}function R0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){It(t,t.return,u)}}function Nf(t,n,a){try{var o=t.stateNode;Vb(o,t.type,a,n),o[pn]=n}catch(u){It(t,t.return,u)}}function C0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Va(t.type)||t.tag===4}function Uf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||C0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Va(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Lf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ki));else if(o!==4&&(o===27&&Va(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Lf(t,n,a),t=t.sibling;t!==null;)Lf(t,n,a),t=t.sibling}function kl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Va(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(kl(t,n,a),t=t.sibling;t!==null;)kl(t,n,a),t=t.sibling}function D0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Rn(n,o,a),n[on]=t,n[pn]=a}catch(d){It(t,t.return,d)}}var $i=!1,fn=!1,Of=!1,N0=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function yb(t,n){if(t=t.containerInfo,td=uc,t=kp(t),Au(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var y=0,w=-1,V=-1,re=0,ge=0,ye=t,ce=null;t:for(;;){for(var he;ye!==a||u!==0&&ye.nodeType!==3||(w=y+u),ye!==d||o!==0&&ye.nodeType!==3||(V=y+o),ye.nodeType===3&&(y+=ye.nodeValue.length),(he=ye.firstChild)!==null;)ce=ye,ye=he;for(;;){if(ye===t)break t;if(ce===a&&++re===u&&(w=y),ce===d&&++ge===o&&(V=y),(he=ye.nextSibling)!==null)break;ye=ce,ce=ye.parentNode}ye=he}a=w===-1||V===-1?null:{start:w,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(nd={focusedElem:t,selectionRange:a},uc=!1,Sn=n;Sn!==null;)if(n=Sn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Sn=t;else for(;Sn!==null;){switch(n=Sn,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var Xe=yr(a.type,u);t=o.getSnapshotBeforeUpdate(Xe,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(rt){It(a,a.return,rt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)rd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":rd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Sn=t;break}Sn=n.return}}function U0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ta(t,a),o&4&&vo(5,a);break;case 1:if(ta(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(y){It(a,a.return,y)}else{var u=yr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){It(a,a.return,y)}}o&64&&A0(a),o&512&&_o(a,a.return);break;case 3:if(ta(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{xm(t,n)}catch(y){It(a,a.return,y)}}break;case 27:n===null&&o&4&&D0(a);case 26:case 5:ta(t,a),n===null&&o&4&&R0(a),o&512&&_o(a,a.return);break;case 12:ta(t,a);break;case 31:ta(t,a),o&4&&F0(t,a);break;case 13:ta(t,a),o&4&&z0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Db.bind(null,a),Kb(t,a))));break;case 22:if(o=a.memoizedState!==null||$i,!o){n=n!==null&&n.memoizedState!==null||fn,u=$i;var d=fn;$i=o,(fn=n)&&!d?na(t,a,(a.subtreeFlags&8772)!==0):ta(t,a),$i=u,fn=d}break;case 30:break;default:ta(t,a)}}function L0(t){var n=t.alternate;n!==null&&(t.alternate=null,L0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ws(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Jt=null,In=!1;function ea(t,n,a){for(a=a.child;a!==null;)O0(t,n,a),a=a.sibling}function O0(t,n,a){if(we&&typeof we.onCommitFiberUnmount=="function")try{we.onCommitFiberUnmount(Te,a)}catch{}switch(a.tag){case 26:fn||Li(a,n),ea(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Li(a,n);var o=Jt,u=In;Va(a.type)&&(Jt=a.stateNode,In=!1),ea(t,n,a),Ro(a.stateNode),Jt=o,In=u;break;case 5:fn||Li(a,n);case 6:if(o=Jt,u=In,Jt=null,ea(t,n,a),Jt=o,In=u,Jt!==null)if(In)try{(Jt.nodeType===9?Jt.body:Jt.nodeName==="HTML"?Jt.ownerDocument.body:Jt).removeChild(a.stateNode)}catch(d){It(a,n,d)}else try{Jt.removeChild(a.stateNode)}catch(d){It(a,n,d)}break;case 18:Jt!==null&&(In?(t=Jt,Ax(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ps(t)):Ax(Jt,a.stateNode));break;case 4:o=Jt,u=In,Jt=a.stateNode.containerInfo,In=!0,ea(t,n,a),Jt=o,In=u;break;case 0:case 11:case 14:case 15:Fa(2,a,n),fn||Fa(4,a,n),ea(t,n,a);break;case 1:fn||(Li(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&w0(a,n,o)),ea(t,n,a);break;case 21:ea(t,n,a);break;case 22:fn=(o=fn)||a.memoizedState!==null,ea(t,n,a),fn=o;break;default:ea(t,n,a)}}function F0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ps(t)}catch(a){It(n,n.return,a)}}}function z0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ps(t)}catch(a){It(n,n.return,a)}}function Sb(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new N0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new N0),n;default:throw Error(r(435,t.tag))}}function jl(t,n){var a=Sb(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Nb.bind(null,t,o);o.then(u,u)}})}function Hn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,y=n,w=y;e:for(;w!==null;){switch(w.tag){case 27:if(Va(w.type)){Jt=w.stateNode,In=!1;break e}break;case 5:Jt=w.stateNode,In=!1;break e;case 3:case 4:Jt=w.stateNode.containerInfo,In=!0;break e}w=w.return}if(Jt===null)throw Error(r(160));O0(d,y,u),Jt=null,In=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)P0(n,t),n=n.sibling}var _i=null;function P0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Hn(n,t),Gn(t),o&4&&(Fa(3,t,t.return),vo(3,t),Fa(5,t,t.return));break;case 1:Hn(n,t),Gn(t),o&512&&(fn||a===null||Li(a,a.return)),o&64&&$i&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=_i;if(Hn(n,t),Gn(t),o&512&&(fn||a===null||Li(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[or]||d[on]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Rn(d,o,a),d[on]=t,se(d),o=d;break e;case"link":var y=Px("link","href",u).get(o+(a.href||""));if(y){for(var w=0;w<y.length;w++)if(d=y[w],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(w,1);break t}}d=u.createElement(o),Rn(d,o,a),u.head.appendChild(d);break;case"meta":if(y=Px("meta","content",u).get(o+(a.content||""))){for(w=0;w<y.length;w++)if(d=y[w],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(w,1);break t}}d=u.createElement(o),Rn(d,o,a),u.head.appendChild(d);break;default:throw Error(r(468,o))}d[on]=t,se(d),o=d}t.stateNode=o}else Bx(u,t.type,t.stateNode);else t.stateNode=zx(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?Bx(u,t.type,t.stateNode):zx(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Nf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,t),Gn(t),o&512&&(fn||a===null||Li(a,a.return)),a!==null&&o&4&&Nf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,t),Gn(t),o&512&&(fn||a===null||Li(a,a.return)),t.flags&32){u=t.stateNode;try{Di(u,"")}catch(Xe){It(t,t.return,Xe)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Nf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Of=!0);break;case 6:if(Hn(n,t),Gn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Xe){It(t,t.return,Xe)}}break;case 3:if(sc=null,u=_i,_i=ac(n.containerInfo),Hn(n,t),_i=u,Gn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{ps(n.containerInfo)}catch(Xe){It(t,t.return,Xe)}Of&&(Of=!1,B0(t));break;case 4:o=_i,_i=ac(t.stateNode.containerInfo),Hn(n,t),Gn(t),_i=o;break;case 12:Hn(n,t),Gn(t);break;case 31:Hn(n,t),Gn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,jl(t,o)));break;case 13:Hn(n,t),Gn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Wl=b()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,jl(t,o)));break;case 22:u=t.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,re=$i,ge=fn;if($i=re||u,fn=ge||V,Hn(n,t),fn=ge,$i=re,Gn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||V||$i||fn||Sr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(d=V.stateNode,u)y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{w=V.stateNode;var ye=V.memoizedProps.style,ce=ye!=null&&ye.hasOwnProperty("display")?ye.display:null;w.style.display=ce==null||typeof ce=="boolean"?"":(""+ce).trim()}}catch(Xe){It(V,V.return,Xe)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(Xe){It(V,V.return,Xe)}}}else if(n.tag===18){if(a===null){V=n;try{var he=V.stateNode;u?wx(he,!0):wx(V.stateNode,!1)}catch(Xe){It(V,V.return,Xe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,jl(t,a))));break;case 19:Hn(n,t),Gn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,jl(t,o)));break;case 30:break;case 21:break;default:Hn(n,t),Gn(t)}}function Gn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(C0(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,d=Uf(t);kl(t,d,u);break;case 5:var y=a.stateNode;a.flags&32&&(Di(y,""),a.flags&=-33);var w=Uf(t);kl(t,w,y);break;case 3:case 4:var V=a.stateNode.containerInfo,re=Uf(t);Lf(t,re,V);break;default:throw Error(r(161))}}catch(ge){It(t,t.return,ge)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function B0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;B0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ta(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)U0(t,n.alternate,n),n=n.sibling}function Sr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Fa(4,n,n.return),Sr(n);break;case 1:Li(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&w0(n,n.return,a),Sr(n);break;case 27:Ro(n.stateNode);case 26:case 5:Li(n,n.return),Sr(n);break;case 22:n.memoizedState===null&&Sr(n);break;case 30:Sr(n);break;default:Sr(n)}t=t.sibling}}function na(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,y=d.flags;switch(d.tag){case 0:case 11:case 15:na(u,d,a),vo(4,d);break;case 1:if(na(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(re){It(o,o.return,re)}if(o=d,u=o.updateQueue,u!==null){var w=o.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)mm(V[u],w)}catch(re){It(o,o.return,re)}}a&&y&64&&A0(d),_o(d,d.return);break;case 27:D0(d);case 26:case 5:na(u,d,a),a&&o===null&&y&4&&R0(d),_o(d,d.return);break;case 12:na(u,d,a);break;case 31:na(u,d,a),a&&y&4&&F0(u,d);break;case 13:na(u,d,a),a&&y&4&&z0(u,d);break;case 22:d.memoizedState===null&&na(u,d,a),_o(d,d.return);break;case 30:break;default:na(u,d,a)}n=n.sibling}}function Ff(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&ao(a))}function zf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ao(t))}function bi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)I0(t,n,a,o),n=n.sibling}function I0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:bi(t,n,a,o),u&2048&&vo(9,n);break;case 1:bi(t,n,a,o);break;case 3:bi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ao(t)));break;case 12:if(u&2048){bi(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,y=d.id,w=d.onPostCommit;typeof w=="function"&&w(y,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){It(n,n.return,V)}}else bi(t,n,a,o);break;case 31:bi(t,n,a,o);break;case 13:bi(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,y=n.alternate,n.memoizedState!==null?d._visibility&2?bi(t,n,a,o):bo(t,n):d._visibility&2?bi(t,n,a,o):(d._visibility|=2,is(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Ff(y,n);break;case 24:bi(t,n,a,o),u&2048&&zf(n.alternate,n);break;default:bi(t,n,a,o)}}function is(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,y=n,w=a,V=o,re=y.flags;switch(y.tag){case 0:case 11:case 15:is(d,y,w,V,u),vo(8,y);break;case 23:break;case 22:var ge=y.stateNode;y.memoizedState!==null?ge._visibility&2?is(d,y,w,V,u):bo(d,y):(ge._visibility|=2,is(d,y,w,V,u)),u&&re&2048&&Ff(y.alternate,y);break;case 24:is(d,y,w,V,u),u&&re&2048&&zf(y.alternate,y);break;default:is(d,y,w,V,u)}n=n.sibling}}function bo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:bo(a,o),u&2048&&Ff(o.alternate,o);break;case 24:bo(a,o),u&2048&&zf(o.alternate,o);break;default:bo(a,o)}n=n.sibling}}var yo=8192;function as(t,n,a){if(t.subtreeFlags&yo)for(t=t.child;t!==null;)H0(t,n,a),t=t.sibling}function H0(t,n,a){switch(t.tag){case 26:as(t,n,a),t.flags&yo&&t.memoizedState!==null&&ly(a,_i,t.memoizedState,t.memoizedProps);break;case 5:as(t,n,a);break;case 3:case 4:var o=_i;_i=ac(t.stateNode.containerInfo),as(t,n,a),_i=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=yo,yo=16777216,as(t,n,a),yo=o):as(t,n,a));break;default:as(t,n,a)}}function G0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function So(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,k0(o,t)}G0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)V0(t),t=t.sibling}function V0(t){switch(t.tag){case 0:case 11:case 15:So(t),t.flags&2048&&Fa(9,t,t.return);break;case 3:So(t);break;case 12:So(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Xl(t)):So(t);break;default:So(t)}}function Xl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,k0(o,t)}G0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Fa(8,n,n.return),Xl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Xl(n));break;default:Xl(n)}t=t.sibling}}function k0(t,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:Fa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ao(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Sn=o;else e:for(a=t;Sn!==null;){o=Sn;var u=o.sibling,d=o.return;if(L0(o),o===a){Sn=null;break e}if(u!==null){u.return=d,Sn=u;break e}Sn=d}}}var Mb={getCacheForType:function(t){var n=An(ln),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return An(ln).controller.signal}},Eb=typeof WeakMap=="function"?WeakMap:Map,Ft=0,qt=null,bt=null,St=0,Bt=0,$n=null,za=!1,rs=!1,Pf=!1,ia=0,tn=0,Pa=0,Mr=0,Bf=0,ei=0,ss=0,Mo=null,Vn=null,If=!1,Wl=0,j0=0,ql=1/0,Yl=null,Ba=null,xn=0,Ia=null,os=null,aa=0,Hf=0,Gf=null,X0=null,Eo=0,Vf=null;function ti(){return(Ft&2)!==0&&St!==0?St&-St:P.T!==null?Yf():js()}function W0(){if(ei===0)if((St&536870912)===0||At){var t=De;De<<=1,(De&3932160)===0&&(De=262144),ei=t}else ei=536870912;return t=Qn.current,t!==null&&(t.flags|=32),ei}function kn(t,n,a){(t===qt&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)&&(ls(t,0),Ha(t,St,ei,!1)),Cn(t,a),((Ft&2)===0||t!==qt)&&(t===qt&&((Ft&2)===0&&(Mr|=a),tn===4&&Ha(t,St,ei,!1)),Oi(t))}function q0(t,n,a){if((Ft&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ve(t,n),u=o?wb(t,n):jf(t,n,!0),d=o;do{if(u===0){rs&&!o&&Ha(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!Tb(a)){u=jf(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var w=t;u=Mo;var V=w.current.memoizedState.isDehydrated;if(V&&(ls(w,y).flags|=256),y=jf(w,y,!1),y!==2){if(Pf&&!V){w.errorRecoveryDisabledLanes|=d,Mr|=d,u=4;break e}d=Vn,Vn=u,d!==null&&(Vn===null?Vn=d:Vn.push.apply(Vn,d))}u=y}if(d=!1,u!==2)continue}}if(u===1){ls(t,0),Ha(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ha(o,n,ei,!za);break e;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Wl+300-b(),10<u)){if(Ha(o,n,ei,!za),Me(o,0,!0)!==0)break e;aa=n,o.timeoutHandle=Ex(Y0.bind(null,o,a,Vn,Yl,If,n,ei,Mr,ss,za,d,"Throttled",-0,0),u);break e}Y0(o,a,Vn,Yl,If,n,ei,Mr,ss,za,d,null,-0,0)}}break}while(!0);Oi(t)}function Y0(t,n,a,o,u,d,y,w,V,re,ge,ye,ce,he){if(t.timeoutHandle=-1,ye=n.subtreeFlags,ye&8192||(ye&16785408)===16785408){ye={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ki},H0(n,d,ye);var Xe=(d&62914560)===d?Wl-b():(d&4194048)===d?j0-b():0;if(Xe=cy(ye,Xe),Xe!==null){aa=d,t.cancelPendingCommit=Xe(nx.bind(null,t,n,d,a,o,u,y,w,V,ge,ye,null,ce,he)),Ha(t,d,y,!re);return}}nx(t,n,d,a,o,u,y,w,V)}function Tb(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!Zn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ha(t,n,a,o){n&=~Bf,n&=~Mr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-We(u),y=1<<d;o[d]=-1,u&=~y}a!==0&&sl(t,a,n)}function Zl(){return(Ft&6)===0?(To(0),!1):!0}function kf(){if(bt!==null){if(Bt===0)var t=bt.return;else t=bt,qi=pr=null,rf(t),Jr=null,so=0,t=bt;for(;t!==null;)T0(t.alternate,t),t=t.return;bt=null}}function ls(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Xb(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),aa=0,kf(),qt=t,bt=a=Xi(t.current,null),St=n,Bt=0,$n=null,za=!1,rs=Ve(t,n),Pf=!1,ss=ei=Bf=Mr=Pa=tn=0,Vn=Mo=null,If=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-We(o),d=1<<u;n|=t[u],o&=~d}return ia=n,xl(),a}function Z0(t,n){pt=null,P.H=mo,n===Qr||n===El?(n=fm(),Bt=3):n===Wu?(n=fm(),Bt=4):Bt=n===yf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,$n=n,bt===null&&(tn=1,Bl(t,oi(n,t.current)))}function K0(){var t=Qn.current;return t===null?!0:(St&4194048)===St?fi===null:(St&62914560)===St||(St&536870912)!==0?t===fi:!1}function Q0(){var t=P.H;return P.H=mo,t===null?mo:t}function J0(){var t=P.A;return P.A=Mb,t}function Kl(){tn=4,za||(St&4194048)!==St&&Qn.current!==null||(rs=!0),(Pa&134217727)===0&&(Mr&134217727)===0||qt===null||Ha(qt,St,ei,!1)}function jf(t,n,a){var o=Ft;Ft|=2;var u=Q0(),d=J0();(qt!==t||St!==n)&&(Yl=null,ls(t,n)),n=!1;var y=tn;e:do try{if(Bt!==0&&bt!==null){var w=bt,V=$n;switch(Bt){case 8:kf(),y=6;break e;case 3:case 2:case 9:case 6:Qn.current===null&&(n=!0);var re=Bt;if(Bt=0,$n=null,cs(t,w,V,re),a&&rs){y=0;break e}break;default:re=Bt,Bt=0,$n=null,cs(t,w,V,re)}}Ab(),y=tn;break}catch(ge){Z0(t,ge)}while(!0);return n&&t.shellSuspendCounter++,qi=pr=null,Ft=o,P.H=u,P.A=d,bt===null&&(qt=null,St=0,xl()),y}function Ab(){for(;bt!==null;)$0(bt)}function wb(t,n){var a=Ft;Ft|=2;var o=Q0(),u=J0();qt!==t||St!==n?(Yl=null,ql=b()+500,ls(t,n)):rs=Ve(t,n);e:do try{if(Bt!==0&&bt!==null){n=bt;var d=$n;t:switch(Bt){case 1:Bt=0,$n=null,cs(t,n,d,1);break;case 2:case 9:if(cm(d)){Bt=0,$n=null,ex(n);break}n=function(){Bt!==2&&Bt!==9||qt!==t||(Bt=7),Oi(t)},d.then(n,n);break e;case 3:Bt=7;break e;case 4:Bt=5;break e;case 7:cm(d)?(Bt=0,$n=null,ex(n)):(Bt=0,$n=null,cs(t,n,d,7));break;case 5:var y=null;switch(bt.tag){case 26:y=bt.memoizedState;case 5:case 27:var w=bt;if(y?Ix(y):w.stateNode.complete){Bt=0,$n=null;var V=w.sibling;if(V!==null)bt=V;else{var re=w.return;re!==null?(bt=re,Ql(re)):bt=null}break t}}Bt=0,$n=null,cs(t,n,d,5);break;case 6:Bt=0,$n=null,cs(t,n,d,6);break;case 8:kf(),tn=6;break e;default:throw Error(r(462))}}Rb();break}catch(ge){Z0(t,ge)}while(!0);return qi=pr=null,P.H=o,P.A=u,Ft=a,bt!==null?0:(qt=null,St=0,xl(),tn)}function Rb(){for(;bt!==null&&!ot();)$0(bt)}function $0(t){var n=M0(t.alternate,t,ia);t.memoizedProps=t.pendingProps,n===null?Ql(t):bt=n}function ex(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=g0(a,n,n.pendingProps,n.type,void 0,St);break;case 11:n=g0(a,n,n.pendingProps,n.type.render,n.ref,St);break;case 5:rf(n);default:T0(a,n),n=bt=Jp(n,ia),n=M0(a,n,ia)}t.memoizedProps=t.pendingProps,n===null?Ql(t):bt=n}function cs(t,n,a,o){qi=pr=null,rf(n),Jr=null,so=0;var u=n.return;try{if(xb(t,u,n,a,St)){tn=1,Bl(t,oi(a,t.current)),bt=null;return}}catch(d){if(u!==null)throw bt=u,d;tn=1,Bl(t,oi(a,t.current)),bt=null;return}n.flags&32768?(At||o===1?t=!0:rs||(St&536870912)!==0?t=!1:(za=t=!0,(o===2||o===9||o===3||o===6)&&(o=Qn.current,o!==null&&o.tag===13&&(o.flags|=16384))),tx(n,t)):Ql(n)}function Ql(t){var n=t;do{if((n.flags&32768)!==0){tx(n,za);return}t=n.return;var a=_b(n.alternate,n,ia);if(a!==null){bt=a;return}if(n=n.sibling,n!==null){bt=n;return}bt=n=t}while(n!==null);tn===0&&(tn=5)}function tx(t,n){do{var a=bb(t.alternate,t);if(a!==null){a.flags&=32767,bt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){bt=t;return}bt=t=a}while(t!==null);tn=6,bt=null}function nx(t,n,a,o,u,d,y,w,V){t.cancelPendingCommit=null;do Jl();while(xn!==0);if((Ft&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=Nu,qn(t,a,d,y,w,V),t===qt&&(bt=qt=null,St=0),os=n,Ia=t,aa=a,Hf=d,Gf=u,X0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Ub(le,function(){return ox(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=K.p,K.p=2,y=Ft,Ft|=4;try{yb(t,n,a)}finally{Ft=y,K.p=u,P.T=o}}xn=1,ix(),ax(),rx()}}function ix(){if(xn===1){xn=0;var t=Ia,n=os,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=K.p;K.p=2;var u=Ft;Ft|=4;try{P0(n,t);var d=nd,y=kp(t.containerInfo),w=d.focusedElem,V=d.selectionRange;if(y!==w&&w&&w.ownerDocument&&Vp(w.ownerDocument.documentElement,w)){if(V!==null&&Au(w)){var re=V.start,ge=V.end;if(ge===void 0&&(ge=re),"selectionStart"in w)w.selectionStart=re,w.selectionEnd=Math.min(ge,w.value.length);else{var ye=w.ownerDocument||document,ce=ye&&ye.defaultView||window;if(ce.getSelection){var he=ce.getSelection(),Xe=w.textContent.length,rt=Math.min(V.start,Xe),jt=V.end===void 0?rt:Math.min(V.end,Xe);!he.extend&&rt>jt&&(y=jt,jt=rt,rt=y);var J=Gp(w,rt),W=Gp(w,jt);if(J&&W&&(he.rangeCount!==1||he.anchorNode!==J.node||he.anchorOffset!==J.offset||he.focusNode!==W.node||he.focusOffset!==W.offset)){var ae=ye.createRange();ae.setStart(J.node,J.offset),he.removeAllRanges(),rt>jt?(he.addRange(ae),he.extend(W.node,W.offset)):(ae.setEnd(W.node,W.offset),he.addRange(ae))}}}}for(ye=[],he=w;he=he.parentNode;)he.nodeType===1&&ye.push({element:he,left:he.scrollLeft,top:he.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<ye.length;w++){var be=ye[w];be.element.scrollLeft=be.left,be.element.scrollTop=be.top}}uc=!!td,nd=td=null}finally{Ft=u,K.p=o,P.T=a}}t.current=n,xn=2}}function ax(){if(xn===2){xn=0;var t=Ia,n=os,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=K.p;K.p=2;var u=Ft;Ft|=4;try{U0(t,n.alternate,n)}finally{Ft=u,K.p=o,P.T=a}}xn=3}}function rx(){if(xn===4||xn===3){xn=0,U();var t=Ia,n=os,a=aa,o=X0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,os=Ia=null,sx(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ba=null),sr(a),n=n.stateNode,we&&typeof we.onCommitFiberRoot=="function")try{we.onCommitFiberRoot(Te,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=K.p,K.p=2,P.T=null;try{for(var d=t.onRecoverableError,y=0;y<o.length;y++){var w=o[y];d(w.value,{componentStack:w.stack})}}finally{P.T=n,K.p=u}}(aa&3)!==0&&Jl(),Oi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Vf?Eo++:(Eo=0,Vf=t):Eo=0,To(0)}}function sx(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,ao(n)))}function Jl(){return ix(),ax(),rx(),ox()}function ox(){if(xn!==5)return!1;var t=Ia,n=Hf;Hf=0;var a=sr(aa),o=P.T,u=K.p;try{K.p=32>a?32:a,P.T=null,a=Gf,Gf=null;var d=Ia,y=aa;if(xn=0,os=Ia=null,aa=0,(Ft&6)!==0)throw Error(r(331));var w=Ft;if(Ft|=4,V0(d.current),I0(d,d.current,y,a),Ft=w,To(0,!1),we&&typeof we.onPostCommitFiberRoot=="function")try{we.onPostCommitFiberRoot(Te,d)}catch{}return!0}finally{K.p=u,P.T=o,sx(t,n)}}function lx(t,n,a){n=oi(a,n),n=bf(t.stateNode,n,2),t=Ua(t,n,2),t!==null&&(Cn(t,2),Oi(t))}function It(t,n,a){if(t.tag===3)lx(t,t,a);else for(;n!==null;){if(n.tag===3){lx(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ba===null||!Ba.has(o))){t=oi(a,t),a=c0(2),o=Ua(n,a,2),o!==null&&(u0(a,o,n,t),Cn(o,2),Oi(o));break}}n=n.return}}function Xf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Eb;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Pf=!0,u.add(a),t=Cb.bind(null,t,n,a),n.then(t,t))}function Cb(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,qt===t&&(St&a)===a&&(tn===4||tn===3&&(St&62914560)===St&&300>b()-Wl?(Ft&2)===0&&ls(t,0):Bf|=a,ss===St&&(ss=0)),Oi(t)}function cx(t,n){n===0&&(n=Gt()),t=fr(t,n),t!==null&&(Cn(t,n),Oi(t))}function Db(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),cx(t,a)}function Nb(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),cx(t,a)}function Ub(t,n){return Ht(t,n)}var $l=null,us=null,Wf=!1,ec=!1,qf=!1,Ga=0;function Oi(t){t!==us&&t.next===null&&(us===null?$l=us=t:us=us.next=t),ec=!0,Wf||(Wf=!0,Ob())}function To(t,n){if(!qf&&ec){qf=!0;do for(var a=!1,o=$l;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var y=o.suspendedLanes,w=o.pingedLanes;d=(1<<31-We(42|t)+1)-1,d&=u&~(y&~w),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,hx(o,d))}else d=St,d=Me(o,o===qt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Ve(o,d)||(a=!0,hx(o,d));o=o.next}while(a);qf=!1}}function Lb(){ux()}function ux(){ec=Wf=!1;var t=0;Ga!==0&&jb()&&(t=Ga);for(var n=b(),a=null,o=$l;o!==null;){var u=o.next,d=fx(o,n);d===0?(o.next=null,a===null?$l=u:a.next=u,u===null&&(us=a)):(a=o,(t!==0||(d&3)!==0)&&(ec=!0)),o=u}xn!==0&&xn!==5||To(t),Ga!==0&&(Ga=0)}function fx(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var y=31-We(d),w=1<<y,V=u[y];V===-1?((w&a)===0||(w&o)!==0)&&(u[y]=ct(w,n)):V<=n&&(t.expiredLanes|=w),d&=~w}if(n=qt,a=St,a=Me(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Ke(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ve(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Ke(o),sr(a)){case 2:case 8:a=me;break;case 32:a=le;break;case 268435456:a=Ue;break;default:a=le}return o=dx.bind(null,t),a=Ht(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Ke(o),t.callbackPriority=2,t.callbackNode=null,2}function dx(t,n){if(xn!==0&&xn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Jl()&&t.callbackNode!==a)return null;var o=St;return o=Me(t,t===qt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(q0(t,o,n),fx(t,b()),t.callbackNode!=null&&t.callbackNode===a?dx.bind(null,t):null)}function hx(t,n){if(Jl())return null;q0(t,n,!0)}function Ob(){Wb(function(){(Ft&6)!==0?Ht(ne,Lb):ux()})}function Yf(){if(Ga===0){var t=Zr;t===0&&(t=Oe,Oe<<=1,(Oe&261888)===0&&(Oe=256)),Ga=t}return Ga}function px(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ll(""+t)}function mx(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Fb(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=px((u[pn]||null).action),y=o.submitter;y&&(n=(n=y[pn]||null)?px(n.formAction):y.getAttribute("formAction"),n!==null&&(d=n,y=null));var w=new dl("action","action",null,o,u);t.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ga!==0){var V=y?mx(u,y):new FormData(u);pf(a,{pending:!0,data:V,method:u.method,action:d},null,V)}}else typeof d=="function"&&(w.preventDefault(),V=y?mx(u,y):new FormData(u),pf(a,{pending:!0,data:V,method:u.method,action:d},d,V))},currentTarget:u}]})}}for(var Zf=0;Zf<Du.length;Zf++){var Kf=Du[Zf],zb=Kf.toLowerCase(),Pb=Kf[0].toUpperCase()+Kf.slice(1);vi(zb,"on"+Pb)}vi(Wp,"onAnimationEnd"),vi(qp,"onAnimationIteration"),vi(Yp,"onAnimationStart"),vi("dblclick","onDoubleClick"),vi("focusin","onFocus"),vi("focusout","onBlur"),vi($_,"onTransitionRun"),vi(eb,"onTransitionStart"),vi(tb,"onTransitionCancel"),vi(Zp,"onTransitionEnd"),He("onMouseEnter",["mouseout","mouseover"]),He("onMouseLeave",["mouseout","mouseover"]),He("onPointerEnter",["pointerout","pointerover"]),He("onPointerLeave",["pointerout","pointerover"]),Fe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Fe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Fe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Fe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Fe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Fe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ao));function xx(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var y=o.length-1;0<=y;y--){var w=o[y],V=w.instance,re=w.currentTarget;if(w=w.listener,V!==d&&u.isPropagationStopped())break e;d=w,u.currentTarget=re;try{d(u)}catch(ge){ml(ge)}u.currentTarget=null,d=V}else for(y=0;y<o.length;y++){if(w=o[y],V=w.instance,re=w.currentTarget,w=w.listener,V!==d&&u.isPropagationStopped())break e;d=w,u.currentTarget=re;try{d(u)}catch(ge){ml(ge)}u.currentTarget=null,d=V}}}}function yt(t,n){var a=n[Pr];a===void 0&&(a=n[Pr]=new Set);var o=t+"__bubble";a.has(o)||(gx(n,t,2,!1),a.add(o))}function Qf(t,n,a){var o=0;n&&(o|=4),gx(a,t,o,n)}var tc="_reactListening"+Math.random().toString(36).slice(2);function Jf(t){if(!t[tc]){t[tc]=!0,ee.forEach(function(a){a!=="selectionchange"&&(Bb.has(a)||Qf(a,!1,t),Qf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[tc]||(n[tc]=!0,Qf("selectionchange",!1,n))}}function gx(t,n,a,o){switch(Wx(n)){case 2:var u=dy;break;case 8:u=hy;break;default:u=hd}a=u.bind(null,n,a,t),u=void 0,!gu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function $f(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var w=o.stateNode.containerInfo;if(w===u)break;if(y===4)for(y=o.return;y!==null;){var V=y.tag;if((V===3||V===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;w!==null;){if(y=Ma(w),y===null)return;if(V=y.tag,V===5||V===6||V===26||V===27){o=d=y;continue e}w=w.parentNode}}o=o.return}Sp(function(){var re=d,ge=mu(a),ye=[];e:{var ce=Kp.get(t);if(ce!==void 0){var he=dl,Xe=t;switch(t){case"keypress":if(ul(a)===0)break e;case"keydown":case"keyup":he=N_;break;case"focusin":Xe="focus",he=yu;break;case"focusout":Xe="blur",he=yu;break;case"beforeblur":case"afterblur":he=yu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":he=Tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":he=__;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":he=O_;break;case Wp:case qp:case Yp:he=S_;break;case Zp:he=z_;break;case"scroll":case"scrollend":he=g_;break;case"wheel":he=B_;break;case"copy":case"cut":case"paste":he=E_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":he=wp;break;case"toggle":case"beforetoggle":he=H_}var rt=(n&4)!==0,jt=!rt&&(t==="scroll"||t==="scrollend"),J=rt?ce!==null?ce+"Capture":null:ce;rt=[];for(var W=re,ae;W!==null;){var be=W;if(ae=be.stateNode,be=be.tag,be!==5&&be!==26&&be!==27||ae===null||J===null||(be=qs(W,J),be!=null&&rt.push(wo(W,be,ae))),jt)break;W=W.return}0<rt.length&&(ce=new he(ce,Xe,null,a,ge),ye.push({event:ce,listeners:rt}))}}if((n&7)===0){e:{if(ce=t==="mouseover"||t==="pointerover",he=t==="mouseout"||t==="pointerout",ce&&a!==pu&&(Xe=a.relatedTarget||a.fromElement)&&(Ma(Xe)||Xe[Hi]))break e;if((he||ce)&&(ce=ge.window===ge?ge:(ce=ge.ownerDocument)?ce.defaultView||ce.parentWindow:window,he?(Xe=a.relatedTarget||a.toElement,he=re,Xe=Xe?Ma(Xe):null,Xe!==null&&(jt=c(Xe),rt=Xe.tag,Xe!==jt||rt!==5&&rt!==27&&rt!==6)&&(Xe=null)):(he=null,Xe=re),he!==Xe)){if(rt=Tp,be="onMouseLeave",J="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(rt=wp,be="onPointerLeave",J="onPointerEnter",W="pointer"),jt=he==null?ce:Q(he),ae=Xe==null?ce:Q(Xe),ce=new rt(be,W+"leave",he,a,ge),ce.target=jt,ce.relatedTarget=ae,be=null,Ma(ge)===re&&(rt=new rt(J,W+"enter",Xe,a,ge),rt.target=ae,rt.relatedTarget=jt,be=rt),jt=be,he&&Xe)t:{for(rt=Ib,J=he,W=Xe,ae=0,be=J;be;be=rt(be))ae++;be=0;for(var et=W;et;et=rt(et))be++;for(;0<ae-be;)J=rt(J),ae--;for(;0<be-ae;)W=rt(W),be--;for(;ae--;){if(J===W||W!==null&&J===W.alternate){rt=J;break t}J=rt(J),W=rt(W)}rt=null}else rt=null;he!==null&&vx(ye,ce,he,rt,!1),Xe!==null&&jt!==null&&vx(ye,jt,Xe,rt,!0)}}e:{if(ce=re?Q(re):window,he=ce.nodeName&&ce.nodeName.toLowerCase(),he==="select"||he==="input"&&ce.type==="file")var Ut=Fp;else if(Lp(ce))if(zp)Ut=K_;else{Ut=Y_;var Ze=q_}else he=ce.nodeName,!he||he.toLowerCase()!=="input"||ce.type!=="checkbox"&&ce.type!=="radio"?re&&hu(re.elementType)&&(Ut=Fp):Ut=Z_;if(Ut&&(Ut=Ut(t,re))){Op(ye,Ut,a,ge);break e}Ze&&Ze(t,ce,re),t==="focusout"&&re&&ce.type==="number"&&re.memoizedProps.value!=null&&bn(ce,"number",ce.value)}switch(Ze=re?Q(re):window,t){case"focusin":(Lp(Ze)||Ze.contentEditable==="true")&&(Gr=Ze,wu=re,to=null);break;case"focusout":to=wu=Gr=null;break;case"mousedown":Ru=!0;break;case"contextmenu":case"mouseup":case"dragend":Ru=!1,jp(ye,a,ge);break;case"selectionchange":if(J_)break;case"keydown":case"keyup":jp(ye,a,ge)}var xt;if(Mu)e:{switch(t){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else Hr?Np(t,a)&&(Mt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Mt="onCompositionStart");Mt&&(Rp&&a.locale!=="ko"&&(Hr||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&Hr&&(xt=Mp()):(Ta=ge,vu="value"in Ta?Ta.value:Ta.textContent,Hr=!0)),Ze=nc(re,Mt),0<Ze.length&&(Mt=new Ap(Mt,t,null,a,ge),ye.push({event:Mt,listeners:Ze}),xt?Mt.data=xt:(xt=Up(a),xt!==null&&(Mt.data=xt)))),(xt=V_?k_(t,a):j_(t,a))&&(Mt=nc(re,"onBeforeInput"),0<Mt.length&&(Ze=new Ap("onBeforeInput","beforeinput",null,a,ge),ye.push({event:Ze,listeners:Mt}),Ze.data=xt)),Fb(ye,t,re,a,ge)}xx(ye,n)})}function wo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function nc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=qs(t,a),u!=null&&o.unshift(wo(t,u,d)),u=qs(t,n),u!=null&&o.push(wo(t,u,d))),t.tag===3)return o;t=t.return}return[]}function Ib(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function vx(t,n,a,o,u){for(var d=n._reactName,y=[];a!==null&&a!==o;){var w=a,V=w.alternate,re=w.stateNode;if(w=w.tag,V!==null&&V===o)break;w!==5&&w!==26&&w!==27||re===null||(V=re,u?(re=qs(a,d),re!=null&&y.unshift(wo(a,re,V))):u||(re=qs(a,d),re!=null&&y.push(wo(a,re,V)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var Hb=/\r\n?/g,Gb=/\u0000|\uFFFD/g;function _x(t){return(typeof t=="string"?t:""+t).replace(Hb,`
`).replace(Gb,"")}function bx(t,n){return n=_x(n),_x(t)===n}function kt(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Di(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Di(t,""+o);break;case"className":Ct(t,"class",o);break;case"tabIndex":Ct(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ct(t,a,o);break;case"style":bp(t,o,d);break;case"data":if(n!=="object"){Ct(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=ll(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&kt(t,n,"name",u.name,u,null),kt(t,n,"formEncType",u.formEncType,u,null),kt(t,n,"formMethod",u.formMethod,u,null),kt(t,n,"formTarget",u.formTarget,u,null)):(kt(t,n,"encType",u.encType,u,null),kt(t,n,"method",u.method,u,null),kt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=ll(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ki);break;case"onScroll":o!=null&&yt("scroll",t);break;case"onScrollEnd":o!=null&&yt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=ll(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":yt("beforetoggle",t),yt("toggle",t),mt(t,"popover",o);break;case"xlinkActuate":Nt(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Nt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Nt(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Nt(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Nt(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Nt(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Nt(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Nt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Nt(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":mt(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=m_.get(a)||a,mt(t,a,o))}}function ed(t,n,a,o,u,d){switch(a){case"style":bp(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Di(t,o):(typeof o=="number"||typeof o=="bigint")&&Di(t,""+o);break;case"onScroll":o!=null&&yt("scroll",t);break;case"onScrollEnd":o!=null&&yt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ce.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[pn]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):mt(t,a,o)}}}function Rn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":yt("error",t),yt("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var y=a[d];if(y!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:kt(t,n,d,y,a,null)}}u&&kt(t,n,"srcSet",a.srcSet,a,null),o&&kt(t,n,"src",a.src,a,null);return;case"input":yt("invalid",t);var w=d=y=u=null,V=null,re=null;for(o in a)if(a.hasOwnProperty(o)){var ge=a[o];if(ge!=null)switch(o){case"name":u=ge;break;case"type":y=ge;break;case"checked":V=ge;break;case"defaultChecked":re=ge;break;case"value":d=ge;break;case"defaultValue":w=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(r(137,n));break;default:kt(t,n,o,ge,a,null)}}Zt(t,d,w,V,re,y,u,!1);return;case"select":yt("invalid",t),o=y=d=null;for(u in a)if(a.hasOwnProperty(u)&&(w=a[u],w!=null))switch(u){case"value":d=w;break;case"defaultValue":y=w;break;case"multiple":o=w;default:kt(t,n,u,w,a,null)}n=d,a=y,t.multiple=!!o,n!=null?mn(t,!!o,n,!1):a!=null&&mn(t,!!o,a,!0);return;case"textarea":yt("invalid",t),d=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(w=a[y],w!=null))switch(y){case"value":o=w;break;case"defaultValue":u=w;break;case"children":d=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(91));break;default:kt(t,n,y,w,a,null)}En(t,o,u,d);return;case"option":for(V in a)if(a.hasOwnProperty(V)&&(o=a[V],o!=null))switch(V){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:kt(t,n,V,o,a,null)}return;case"dialog":yt("beforetoggle",t),yt("toggle",t),yt("cancel",t),yt("close",t);break;case"iframe":case"object":yt("load",t);break;case"video":case"audio":for(o=0;o<Ao.length;o++)yt(Ao[o],t);break;case"image":yt("error",t),yt("load",t);break;case"details":yt("toggle",t);break;case"embed":case"source":case"link":yt("error",t),yt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(re in a)if(a.hasOwnProperty(re)&&(o=a[re],o!=null))switch(re){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:kt(t,n,re,o,a,null)}return;default:if(hu(n)){for(ge in a)a.hasOwnProperty(ge)&&(o=a[ge],o!==void 0&&ed(t,n,ge,o,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(o=a[w],o!=null&&kt(t,n,w,o,a,null))}function Vb(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,y=null,w=null,V=null,re=null,ge=null;for(he in a){var ye=a[he];if(a.hasOwnProperty(he)&&ye!=null)switch(he){case"checked":break;case"value":break;case"defaultValue":V=ye;default:o.hasOwnProperty(he)||kt(t,n,he,null,o,ye)}}for(var ce in o){var he=o[ce];if(ye=a[ce],o.hasOwnProperty(ce)&&(he!=null||ye!=null))switch(ce){case"type":d=he;break;case"name":u=he;break;case"checked":re=he;break;case"defaultChecked":ge=he;break;case"value":y=he;break;case"defaultValue":w=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(r(137,n));break;default:he!==ye&&kt(t,n,ce,he,o,ye)}}Gi(t,y,w,V,re,ge,d,u);return;case"select":he=y=w=ce=null;for(d in a)if(V=a[d],a.hasOwnProperty(d)&&V!=null)switch(d){case"value":break;case"multiple":he=V;default:o.hasOwnProperty(d)||kt(t,n,d,null,o,V)}for(u in o)if(d=o[u],V=a[u],o.hasOwnProperty(u)&&(d!=null||V!=null))switch(u){case"value":ce=d;break;case"defaultValue":w=d;break;case"multiple":y=d;default:d!==V&&kt(t,n,u,d,o,V)}n=w,a=y,o=he,ce!=null?mn(t,!!a,ce,!1):!!o!=!!a&&(n!=null?mn(t,!!a,n,!0):mn(t,!!a,a?[]:"",!1));return;case"textarea":he=ce=null;for(w in a)if(u=a[w],a.hasOwnProperty(w)&&u!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:kt(t,n,w,null,o,u)}for(y in o)if(u=o[y],d=a[y],o.hasOwnProperty(y)&&(u!=null||d!=null))switch(y){case"value":ce=u;break;case"defaultValue":he=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&kt(t,n,y,u,o,d)}yn(t,ce,he);return;case"option":for(var Xe in a)if(ce=a[Xe],a.hasOwnProperty(Xe)&&ce!=null&&!o.hasOwnProperty(Xe))switch(Xe){case"selected":t.selected=!1;break;default:kt(t,n,Xe,null,o,ce)}for(V in o)if(ce=o[V],he=a[V],o.hasOwnProperty(V)&&ce!==he&&(ce!=null||he!=null))switch(V){case"selected":t.selected=ce&&typeof ce!="function"&&typeof ce!="symbol";break;default:kt(t,n,V,ce,o,he)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var rt in a)ce=a[rt],a.hasOwnProperty(rt)&&ce!=null&&!o.hasOwnProperty(rt)&&kt(t,n,rt,null,o,ce);for(re in o)if(ce=o[re],he=a[re],o.hasOwnProperty(re)&&ce!==he&&(ce!=null||he!=null))switch(re){case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(r(137,n));break;default:kt(t,n,re,ce,o,he)}return;default:if(hu(n)){for(var jt in a)ce=a[jt],a.hasOwnProperty(jt)&&ce!==void 0&&!o.hasOwnProperty(jt)&&ed(t,n,jt,void 0,o,ce);for(ge in o)ce=o[ge],he=a[ge],!o.hasOwnProperty(ge)||ce===he||ce===void 0&&he===void 0||ed(t,n,ge,ce,o,he);return}}for(var J in a)ce=a[J],a.hasOwnProperty(J)&&ce!=null&&!o.hasOwnProperty(J)&&kt(t,n,J,null,o,ce);for(ye in o)ce=o[ye],he=a[ye],!o.hasOwnProperty(ye)||ce===he||ce==null&&he==null||kt(t,n,ye,ce,o,he)}function yx(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function kb(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,y=u.initiatorType,w=u.duration;if(d&&w&&yx(y)){for(y=0,w=u.responseEnd,o+=1;o<a.length;o++){var V=a[o],re=V.startTime;if(re>w)break;var ge=V.transferSize,ye=V.initiatorType;ge&&yx(ye)&&(V=V.responseEnd,y+=ge*(V<w?1:(w-re)/(V-re)))}if(--o,n+=8*(d+y)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var td=null,nd=null;function ic(t){return t.nodeType===9?t:t.ownerDocument}function Sx(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Mx(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function id(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ad=null;function jb(){var t=window.event;return t&&t.type==="popstate"?t===ad?!1:(ad=t,!0):(ad=null,!1)}var Ex=typeof setTimeout=="function"?setTimeout:void 0,Xb=typeof clearTimeout=="function"?clearTimeout:void 0,Tx=typeof Promise=="function"?Promise:void 0,Wb=typeof queueMicrotask=="function"?queueMicrotask:typeof Tx<"u"?function(t){return Tx.resolve(null).then(t).catch(qb)}:Ex;function qb(t){setTimeout(function(){throw t})}function Va(t){return t==="head"}function Ax(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),ps(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Ro(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Ro(a);for(var d=a.firstChild;d;){var y=d.nextSibling,w=d.nodeName;d[or]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=y}}else a==="body"&&Ro(t.ownerDocument.body);a=u}while(a);ps(n)}function wx(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function rd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":rd(a),Ws(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Yb(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[or])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=di(t.nextSibling),t===null)break}return null}function Zb(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=di(t.nextSibling),t===null))return null;return t}function Rx(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=di(t.nextSibling),t===null))return null;return t}function sd(t){return t.data==="$?"||t.data==="$~"}function od(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Kb(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function di(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var ld=null;function Cx(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return di(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Dx(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Nx(t,n,a){switch(n=ic(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Ro(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ws(t)}var hi=new Map,Ux=new Set;function ac(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ra=K.d;K.d={f:Qb,r:Jb,D:$b,C:ey,L:ty,m:ny,X:ay,S:iy,M:ry};function Qb(){var t=ra.f(),n=Zl();return t||n}function Jb(t){var n=C(t);n!==null&&n.tag===5&&n.type==="form"?Zm(n):ra.r(t)}var fs=typeof document>"u"?null:document;function Lx(t,n,a){var o=fs;if(o&&typeof n=="string"&&n){var u=Yt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Ux.has(u)||(Ux.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Rn(n,"link",t),se(n),o.head.appendChild(n)))}}function $b(t){ra.D(t),Lx("dns-prefetch",t,null)}function ey(t,n){ra.C(t,n),Lx("preconnect",t,n)}function ty(t,n,a){ra.L(t,n,a);var o=fs;if(o&&t&&n){var u='link[rel="preload"][as="'+Yt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Yt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Yt(a.imageSizes)+'"]')):u+='[href="'+Yt(t)+'"]';var d=u;switch(n){case"style":d=ds(t);break;case"script":d=hs(t)}hi.has(d)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),hi.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Co(d))||n==="script"&&o.querySelector(Do(d))||(n=o.createElement("link"),Rn(n,"link",t),se(n),o.head.appendChild(n)))}}function ny(t,n){ra.m(t,n);var a=fs;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Yt(o)+'"][href="'+Yt(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=hs(t)}if(!hi.has(d)&&(t=x({rel:"modulepreload",href:t},n),hi.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Do(d)))return}o=a.createElement("link"),Rn(o,"link",t),se(o),a.head.appendChild(o)}}}function iy(t,n,a){ra.S(t,n,a);var o=fs;if(o&&t){var u=fe(o).hoistableStyles,d=ds(t);n=n||"default";var y=u.get(d);if(!y){var w={loading:0,preload:null};if(y=o.querySelector(Co(d)))w.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=hi.get(d))&&cd(t,a);var V=y=o.createElement("link");se(V),Rn(V,"link",t),V._p=new Promise(function(re,ge){V.onload=re,V.onerror=ge}),V.addEventListener("load",function(){w.loading|=1}),V.addEventListener("error",function(){w.loading|=2}),w.loading|=4,rc(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:w},u.set(d,y)}}}function ay(t,n){ra.X(t,n);var a=fs;if(a&&t){var o=fe(a).hoistableScripts,u=hs(t),d=o.get(u);d||(d=a.querySelector(Do(u)),d||(t=x({src:t,async:!0},n),(n=hi.get(u))&&ud(t,n),d=a.createElement("script"),se(d),Rn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function ry(t,n){ra.M(t,n);var a=fs;if(a&&t){var o=fe(a).hoistableScripts,u=hs(t),d=o.get(u);d||(d=a.querySelector(Do(u)),d||(t=x({src:t,async:!0,type:"module"},n),(n=hi.get(u))&&ud(t,n),d=a.createElement("script"),se(d),Rn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Ox(t,n,a,o){var u=(u=ie.current)?ac(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ds(a.href),a=fe(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ds(a.href);var d=fe(u).hoistableStyles,y=d.get(t);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,y),(d=u.querySelector(Co(t)))&&!d._p&&(y.instance=d,y.state.loading=5),hi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},hi.set(t,a),d||sy(u,t,a,y.state))),n&&o===null)throw Error(r(528,""));return y}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=hs(a),a=fe(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function ds(t){return'href="'+Yt(t)+'"'}function Co(t){return'link[rel="stylesheet"]['+t+"]"}function Fx(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function sy(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Rn(n,"link",a),se(n),t.head.appendChild(n))}function hs(t){return'[src="'+Yt(t)+'"]'}function Do(t){return"script[async]"+t}function zx(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Yt(a.href)+'"]');if(o)return n.instance=o,se(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),se(o),Rn(o,"style",u),rc(o,a.precedence,t),n.instance=o;case"stylesheet":u=ds(a.href);var d=t.querySelector(Co(u));if(d)return n.state.loading|=4,n.instance=d,se(d),d;o=Fx(a),(u=hi.get(u))&&cd(o,u),d=(t.ownerDocument||t).createElement("link"),se(d);var y=d;return y._p=new Promise(function(w,V){y.onload=w,y.onerror=V}),Rn(d,"link",o),n.state.loading|=4,rc(d,a.precedence,t),n.instance=d;case"script":return d=hs(a.src),(u=t.querySelector(Do(d)))?(n.instance=u,se(u),u):(o=a,(u=hi.get(d))&&(o=x({},a),ud(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),se(u),Rn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,rc(o,a.precedence,t));return n.instance}function rc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,y=0;y<o.length;y++){var w=o[y];if(w.dataset.precedence===n)d=w;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function cd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function ud(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var sc=null;function Px(t,n,a){if(sc===null){var o=new Map,u=sc=new Map;u.set(a,o)}else u=sc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[or]||d[on]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var y=d.getAttribute(n)||"";y=t+y;var w=o.get(y);w?w.push(d):o.set(y,[d])}}return o}function Bx(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function oy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Ix(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function ly(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=ds(o.href),d=n.querySelector(Co(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=oc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,se(d);return}d=n.ownerDocument||n,o=Fx(o),(u=hi.get(u))&&cd(o,u),d=d.createElement("link"),se(d);var y=d;y._p=new Promise(function(w,V){y.onload=w,y.onerror=V}),Rn(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=oc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var fd=0;function cy(t,n){return t.stylesheets&&t.count===0&&cc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&cc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&fd===0&&(fd=62500*kb());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&cc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>fd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function oc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)cc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var lc=null;function cc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,lc=new Map,n.forEach(uy,t),lc=null,oc.call(t))}function uy(t,n){if(!(n.state.loading&4)){var a=lc.get(t);if(a)var o=a.get(null);else{a=new Map,lc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var y=u[d];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),d=a.get(y)||o,d===o&&a.set(null,u),a.set(y,u),this.count++,o=oc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var No={$$typeof:D,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function fy(t,n,a,o,u,d,y,w,V){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Dt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dt(0),this.hiddenUpdates=Dt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function Hx(t,n,a,o,u,d,y,w,V,re,ge,ye){return t=new fy(t,n,a,y,V,re,ge,ye,w),n=1,d===!0&&(n|=24),d=Kn(3,null,null,n),t.current=d,d.stateNode=t,n=ku(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},qu(d),t}function Gx(t){return t?(t=jr,t):jr}function Vx(t,n,a,o,u,d){u=Gx(u),o.context===null?o.context=u:o.pendingContext=u,o=Na(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Ua(t,o,n),a!==null&&(kn(a,t,n),lo(a,t,n))}function kx(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function dd(t,n){kx(t,n),(t=t.alternate)&&kx(t,n)}function jx(t){if(t.tag===13||t.tag===31){var n=fr(t,67108864);n!==null&&kn(n,t,67108864),dd(t,67108864)}}function Xx(t){if(t.tag===13||t.tag===31){var n=ti();n=gi(n);var a=fr(t,n);a!==null&&kn(a,t,n),dd(t,n)}}var uc=!0;function dy(t,n,a,o){var u=P.T;P.T=null;var d=K.p;try{K.p=2,hd(t,n,a,o)}finally{K.p=d,P.T=u}}function hy(t,n,a,o){var u=P.T;P.T=null;var d=K.p;try{K.p=8,hd(t,n,a,o)}finally{K.p=d,P.T=u}}function hd(t,n,a,o){if(uc){var u=pd(o);if(u===null)$f(t,n,o,fc,a),qx(t,o);else if(my(u,t,n,a,o))o.stopPropagation();else if(qx(t,o),n&4&&-1<py.indexOf(t)){for(;u!==null;){var d=C(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var y=Ae(d.pendingLanes);if(y!==0){var w=d;for(w.pendingLanes|=2,w.entangledLanes|=2;y;){var V=1<<31-We(y);w.entanglements[1]|=V,y&=~V}Oi(d),(Ft&6)===0&&(ql=b()+500,To(0))}}break;case 31:case 13:w=fr(d,2),w!==null&&kn(w,d,2),Zl(),dd(d,2)}if(d=pd(o),d===null&&$f(t,n,o,fc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else $f(t,n,o,null,a)}}function pd(t){return t=mu(t),md(t)}var fc=null;function md(t){if(fc=null,t=Ma(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return fc=t,null}function Wx(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(G()){case ne:return 2;case me:return 8;case le:case Be:return 32;case Ue:return 268435456;default:return 32}default:return 32}}var xd=!1,ka=null,ja=null,Xa=null,Uo=new Map,Lo=new Map,Wa=[],py="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function qx(t,n){switch(t){case"focusin":case"focusout":ka=null;break;case"dragenter":case"dragleave":ja=null;break;case"mouseover":case"mouseout":Xa=null;break;case"pointerover":case"pointerout":Uo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(n.pointerId)}}function Oo(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=C(n),n!==null&&jx(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function my(t,n,a,o,u){switch(n){case"focusin":return ka=Oo(ka,t,n,a,o,u),!0;case"dragenter":return ja=Oo(ja,t,n,a,o,u),!0;case"mouseover":return Xa=Oo(Xa,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Uo.set(d,Oo(Uo.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Lo.set(d,Oo(Lo.get(d)||null,t,n,a,o,u)),!0}return!1}function Yx(t){var n=Ma(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,Xs(t.priority,function(){Xx(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Xs(t.priority,function(){Xx(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function dc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=pd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);pu=o,a.target.dispatchEvent(o),pu=null}else return n=C(a),n!==null&&jx(n),t.blockedOn=a,!1;n.shift()}return!0}function Zx(t,n,a){dc(t)&&a.delete(n)}function xy(){xd=!1,ka!==null&&dc(ka)&&(ka=null),ja!==null&&dc(ja)&&(ja=null),Xa!==null&&dc(Xa)&&(Xa=null),Uo.forEach(Zx),Lo.forEach(Zx)}function hc(t,n){t.blockedOn===n&&(t.blockedOn=null,xd||(xd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,xy)))}var pc=null;function Kx(t){pc!==t&&(pc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){pc===t&&(pc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(md(o||a)===null)continue;break}var d=C(a);d!==null&&(t.splice(n,3),n-=3,pf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function ps(t){function n(V){return hc(V,t)}ka!==null&&hc(ka,t),ja!==null&&hc(ja,t),Xa!==null&&hc(Xa,t),Uo.forEach(n),Lo.forEach(n);for(var a=0;a<Wa.length;a++){var o=Wa[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Wa.length&&(a=Wa[0],a.blockedOn===null);)Yx(a),a.blockedOn===null&&Wa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],y=u[pn]||null;if(typeof d=="function")y||Kx(a);else if(y){var w=null;if(d&&d.hasAttribute("formAction")){if(u=d,y=d[pn]||null)w=y.formAction;else if(md(u)!==null)continue}else w=y.action;typeof w=="function"?a[o+1]=w:(a.splice(o,3),o-=3),Kx(a)}}}function Qx(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function gd(t){this._internalRoot=t}mc.prototype.render=gd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ti();Vx(a,o,t,n,null,null)},mc.prototype.unmount=gd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Vx(t.current,2,null,t,null,null),Zl(),n[Hi]=null}};function mc(t){this._internalRoot=t}mc.prototype.unstable_scheduleHydration=function(t){if(t){var n=js();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Wa.length&&n!==0&&n<Wa[a].priority;a++);Wa.splice(a,0,t),a===0&&Yx(t)}};var Jx=e.version;if(Jx!=="19.2.1")throw Error(r(527,Jx,"19.2.1"));K.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var gy={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xc.isDisabled&&xc.supportsFiber)try{Te=xc.inject(gy),we=xc}catch{}}return zo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=r0,d=s0,y=o0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=Hx(t,1,!1,null,null,a,o,null,u,d,y,Qx),t[Hi]=n.current,Jf(t),new gd(n)},zo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",d=r0,y=s0,w=o0,V=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),n=Hx(t,1,!0,n,a??null,o,u,V,d,y,w,Qx),n.context=Gx(null),a=n.current,o=ti(),o=gi(o),u=Na(o),u.callback=null,Ua(a,u,o),a=o,n.current.lanes=a,Cn(n,a),Oi(n),t[Hi]=n.current,Jf(t),new mc(n)},zo.version="19.2.1",zo}var lg;function wy(){if(lg)return bd.exports;lg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),bd.exports=Ay(),bd.exports}var Ry=wy();/**
 * react-router v7.10.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var cg="popstate";function Cy(s={}){function e(r,l){let{pathname:c,search:f,hash:h}=r.location;return uh("",{pathname:c,search:f,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(r,l){return typeof l=="string"?l:Wo(l)}return Ny(e,i,null,s)}function $t(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Ri(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Dy(){return Math.random().toString(36).substring(2,10)}function ug(s,e){return{usr:s.state,key:s.key,idx:e}}function uh(s,e,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?Ps(e):e,state:i,key:e&&e.key||r||Dy()}}function Wo({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Ps(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function Ny(s,e,i,r={}){let{window:l=document.defaultView,v5Compat:c=!1}=r,f=l.history,h="POP",m=null,p=g();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function g(){return(f.state||{idx:null}).idx}function x(){h="POP";let E=g(),v=E==null?null:E-p;p=E,m&&m({action:h,location:A.location,delta:v})}function _(E,v){h="PUSH";let O=uh(A.location,E,v);p=g()+1;let D=ug(O,p),z=A.createHref(O);try{f.pushState(D,"",z)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;l.location.assign(z)}c&&m&&m({action:h,location:A.location,delta:1})}function M(E,v){h="REPLACE";let O=uh(A.location,E,v);p=g();let D=ug(O,p),z=A.createHref(O);f.replaceState(D,"",z),c&&m&&m({action:h,location:A.location,delta:0})}function T(E){return Uy(E)}let A={get action(){return h},get location(){return s(l,f)},listen(E){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(cg,x),m=E,()=>{l.removeEventListener(cg,x),m=null}},createHref(E){return e(l,E)},createURL:T,encodeLocation(E){let v=T(E);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:_,replace:M,go(E){return f.go(E)}};return A}function Uy(s,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),$t(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:Wo(s);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function bv(s,e,i="/"){return Ly(s,e,i,!1)}function Ly(s,e,i,r){let l=typeof e=="string"?Ps(e):e,c=_a(l.pathname||"/",i);if(c==null)return null;let f=yv(s);Oy(f);let h=null;for(let m=0;h==null&&m<f.length;++m){let p=Xy(c);h=ky(f[m],p,r)}return h}function yv(s,e=[],i=[],r="",l=!1){let c=(f,h,m=l,p)=>{let g={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(r)&&m)return;$t(g.relativePath.startsWith(r),`Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(r.length)}let x=ma([r,g.relativePath]),_=i.concat(g);f.children&&f.children.length>0&&($t(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),yv(f.children,e,_,x,m)),!(f.path==null&&!f.index)&&e.push({path:x,score:Gy(x,f.index),routesMeta:_})};return s.forEach((f,h)=>{var m;if(f.path===""||!((m=f.path)!=null&&m.includes("?")))c(f,h);else for(let p of Sv(f.path))c(f,h,!0,p)}),e}function Sv(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(r.length===0)return l?[c,""]:[c];let f=Sv(r.join("/")),h=[];return h.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&h.push(...f),h.map(m=>s.startsWith("/")&&m===""?"/":m)}function Oy(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:Vy(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var Fy=/^:[\w-]+$/,zy=3,Py=2,By=1,Iy=10,Hy=-2,fg=s=>s==="*";function Gy(s,e){let i=s.split("/"),r=i.length;return i.some(fg)&&(r+=Hy),e&&(r+=Py),i.filter(l=>!fg(l)).reduce((l,c)=>l+(Fy.test(c)?zy:c===""?By:Iy),r)}function Vy(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function ky(s,e,i=!1){let{routesMeta:r}=s,l={},c="/",f=[];for(let h=0;h<r.length;++h){let m=r[h],p=h===r.length-1,g=c==="/"?e:e.slice(c.length)||"/",x=Kc({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},g),_=m.route;if(!x&&p&&i&&!r[r.length-1].route.index&&(x=Kc({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!x)return null;Object.assign(l,x.params),f.push({params:l,pathname:ma([c,x.pathname]),pathnameBase:Ky(ma([c,x.pathnameBase])),route:_}),x.pathnameBase!=="/"&&(c=ma([c,x.pathnameBase]))}return f}function Kc(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=jy(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:r.reduce((p,{paramName:g,isOptional:x},_)=>{if(g==="*"){let T=h[_]||"";f=c.slice(0,c.length-T.length).replace(/(.)\/+$/,"$1")}const M=h[_];return x&&!M?p[g]=void 0:p[g]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:s}}function jy(s,e=!1,i=!0){Ri(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,m)=>(r.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function Xy(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ri(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function _a(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}var Wy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qy=s=>Wy.test(s);function Yy(s,e="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Ps(s):s,c;if(i)if(qy(i))c=i;else{if(i.includes("//")){let f=i;i=i.replace(/\/\/+/g,"/"),Ri(!1,`Pathnames cannot have embedded double slashes - normalizing ${f} -> ${i}`)}i.startsWith("/")?c=dg(i.substring(1),"/"):c=dg(i,e)}else c=e;return{pathname:c,search:Qy(r),hash:Jy(l)}}function dg(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Ed(s,e,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Zy(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function Mv(s){let e=Zy(s);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function Ev(s,e,i,r=!1){let l;typeof s=="string"?l=Ps(s):(l={...s},$t(!l.pathname||!l.pathname.includes("?"),Ed("?","pathname","search",l)),$t(!l.pathname||!l.pathname.includes("#"),Ed("#","pathname","hash",l)),$t(!l.search||!l.search.includes("#"),Ed("#","search","hash",l)));let c=s===""||l.pathname==="",f=c?"/":l.pathname,h;if(f==null)h=i;else{let x=e.length-1;if(!r&&f.startsWith("..")){let _=f.split("/");for(;_[0]==="..";)_.shift(),x-=1;l.pathname=_.join("/")}h=x>=0?e[x]:"/"}let m=Yy(l,h),p=f&&f!=="/"&&f.endsWith("/"),g=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||g)&&(m.pathname+="/"),m}var ma=s=>s.join("/").replace(/\/\/+/g,"/"),Ky=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Qy=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,Jy=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function $y(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function e1(s){return s.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Tv=["POST","PUT","PATCH","DELETE"];new Set(Tv);var t1=["GET",...Tv];new Set(t1);var Bs=ue.createContext(null);Bs.displayName="DataRouter";var ru=ue.createContext(null);ru.displayName="DataRouterState";ue.createContext(!1);var Av=ue.createContext({isTransitioning:!1});Av.displayName="ViewTransition";var n1=ue.createContext(new Map);n1.displayName="Fetchers";var i1=ue.createContext(null);i1.displayName="Await";var Ci=ue.createContext(null);Ci.displayName="Navigation";var Jo=ue.createContext(null);Jo.displayName="Location";var Sa=ue.createContext({outlet:null,matches:[],isDataRoute:!1});Sa.displayName="Route";var ap=ue.createContext(null);ap.displayName="RouteError";function a1(s,{relative:e}={}){$t($o(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=ue.useContext(Ci),{hash:l,pathname:c,search:f}=el(s,{relative:e}),h=c;return i!=="/"&&(h=c==="/"?i:ma([i,c])),r.createHref({pathname:h,search:f,hash:l})}function $o(){return ue.useContext(Jo)!=null}function rr(){return $t($o(),"useLocation() may be used only in the context of a <Router> component."),ue.useContext(Jo).location}var wv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Rv(s){ue.useContext(Ci).static||ue.useLayoutEffect(s)}function r1(){let{isDataRoute:s}=ue.useContext(Sa);return s?v1():s1()}function s1(){$t($o(),"useNavigate() may be used only in the context of a <Router> component.");let s=ue.useContext(Bs),{basename:e,navigator:i}=ue.useContext(Ci),{matches:r}=ue.useContext(Sa),{pathname:l}=rr(),c=JSON.stringify(Mv(r)),f=ue.useRef(!1);return Rv(()=>{f.current=!0}),ue.useCallback((m,p={})=>{if(Ri(f.current,wv),!f.current)return;if(typeof m=="number"){i.go(m);return}let g=Ev(m,JSON.parse(c),l,p.relative==="path");s==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:ma([e,g.pathname])),(p.replace?i.replace:i.push)(g,p.state,p)},[e,i,c,l,s])}ue.createContext(null);function el(s,{relative:e}={}){let{matches:i}=ue.useContext(Sa),{pathname:r}=rr(),l=JSON.stringify(Mv(i));return ue.useMemo(()=>Ev(s,JSON.parse(l),r,e==="path"),[s,l,r,e])}function o1(s,e){return Cv(s,e)}function Cv(s,e,i,r,l){var O;$t($o(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=ue.useContext(Ci),{matches:f}=ue.useContext(Sa),h=f[f.length-1],m=h?h.params:{},p=h?h.pathname:"/",g=h?h.pathnameBase:"/",x=h&&h.route;{let D=x&&x.path||"";Dv(p,!x||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let _=rr(),M;if(e){let D=typeof e=="string"?Ps(e):e;$t(g==="/"||((O=D.pathname)==null?void 0:O.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${D.pathname}" was given in the \`location\` prop.`),M=D}else M=_;let T=M.pathname||"/",A=T;if(g!=="/"){let D=g.replace(/^\//,"").split("/");A="/"+T.replace(/^\//,"").split("/").slice(D.length).join("/")}let E=bv(s,{pathname:A});Ri(x||E!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),Ri(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=d1(E&&E.map(D=>Object.assign({},D,{params:Object.assign({},m,D.params),pathname:ma([g,c.encodeLocation?c.encodeLocation(D.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?g:ma([g,c.encodeLocation?c.encodeLocation(D.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathnameBase])})),f,i,r,l);return e&&v?ue.createElement(Jo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},v):v}function l1(){let s=g1(),e=$y(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=ue.createElement(ue.Fragment,null,ue.createElement("p",null,"💿 Hey developer 👋"),ue.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ue.createElement("code",{style:c},"ErrorBoundary")," or"," ",ue.createElement("code",{style:c},"errorElement")," prop on your route.")),ue.createElement(ue.Fragment,null,ue.createElement("h2",null,"Unexpected Application Error!"),ue.createElement("h3",{style:{fontStyle:"italic"}},e),i?ue.createElement("pre",{style:l},i):null,f)}var c1=ue.createElement(l1,null),u1=class extends ue.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.onError?this.props.onError(s,e):console.error("React Router caught the following error during render",s)}render(){return this.state.error!==void 0?ue.createElement(Sa.Provider,{value:this.props.routeContext},ue.createElement(ap.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function f1({routeContext:s,match:e,children:i}){let r=ue.useContext(Bs);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),ue.createElement(Sa.Provider,{value:s},i)}function d1(s,e=[],i=null,r=null,l=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let c=s,f=i==null?void 0:i.errors;if(f!=null){let g=c.findIndex(x=>x.route.id&&(f==null?void 0:f[x.route.id])!==void 0);$t(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,g+1))}let h=!1,m=-1;if(i)for(let g=0;g<c.length;g++){let x=c[g];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(m=g),x.route.id){let{loaderData:_,errors:M}=i,T=x.route.loader&&!_.hasOwnProperty(x.route.id)&&(!M||M[x.route.id]===void 0);if(x.route.lazy||T){h=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}let p=i&&r?(g,x)=>{var _,M;r(g,{location:i.location,params:((M=(_=i.matches)==null?void 0:_[0])==null?void 0:M.params)??{},unstable_pattern:e1(i.matches),errorInfo:x})}:void 0;return c.reduceRight((g,x,_)=>{let M,T=!1,A=null,E=null;i&&(M=f&&x.route.id?f[x.route.id]:void 0,A=x.route.errorElement||c1,h&&(m<0&&_===0?(Dv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),T=!0,E=null):m===_&&(T=!0,E=x.route.hydrateFallbackElement||null)));let v=e.concat(c.slice(0,_+1)),O=()=>{let D;return M?D=A:T?D=E:x.route.Component?D=ue.createElement(x.route.Component,null):x.route.element?D=x.route.element:D=g,ue.createElement(f1,{match:x,routeContext:{outlet:g,matches:v,isDataRoute:i!=null},children:D})};return i&&(x.route.ErrorBoundary||x.route.errorElement||_===0)?ue.createElement(u1,{location:i.location,revalidation:i.revalidation,component:A,error:M,children:O(),routeContext:{outlet:null,matches:v,isDataRoute:!0},onError:p}):O()},null)}function rp(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function h1(s){let e=ue.useContext(Bs);return $t(e,rp(s)),e}function p1(s){let e=ue.useContext(ru);return $t(e,rp(s)),e}function m1(s){let e=ue.useContext(Sa);return $t(e,rp(s)),e}function sp(s){let e=m1(s),i=e.matches[e.matches.length-1];return $t(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function x1(){return sp("useRouteId")}function g1(){var r;let s=ue.useContext(ap),e=p1("useRouteError"),i=sp("useRouteError");return s!==void 0?s:(r=e.errors)==null?void 0:r[i]}function v1(){let{router:s}=h1("useNavigate"),e=sp("useNavigate"),i=ue.useRef(!1);return Rv(()=>{i.current=!0}),ue.useCallback(async(l,c={})=>{Ri(i.current,wv),i.current&&(typeof l=="number"?await s.navigate(l):await s.navigate(l,{fromRouteId:e,...c}))},[s,e])}var hg={};function Dv(s,e,i){!e&&!hg[s]&&(hg[s]=!0,Ri(!1,i))}ue.memo(_1);function _1({routes:s,future:e,state:i,unstable_onError:r}){return Cv(s,void 0,i,r,e)}function Cs(s){$t(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function b1({basename:s="/",children:e=null,location:i,navigationType:r="POP",navigator:l,static:c=!1,unstable_useTransitions:f}){$t(!$o(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=s.replace(/^\/*/,"/"),m=ue.useMemo(()=>({basename:h,navigator:l,static:c,unstable_useTransitions:f,future:{}}),[h,l,c,f]);typeof i=="string"&&(i=Ps(i));let{pathname:p="/",search:g="",hash:x="",state:_=null,key:M="default"}=i,T=ue.useMemo(()=>{let A=_a(p,h);return A==null?null:{location:{pathname:A,search:g,hash:x,state:_,key:M},navigationType:r}},[h,p,g,x,_,M,r]);return Ri(T!=null,`<Router basename="${h}"> is not able to match the URL "${p}${g}${x}" because it does not start with the basename, so the <Router> won't render anything.`),T==null?null:ue.createElement(Ci.Provider,{value:m},ue.createElement(Jo.Provider,{children:e,value:T}))}function y1({children:s,location:e}){return o1(fh(s),e)}function fh(s,e=[]){let i=[];return ue.Children.forEach(s,(r,l)=>{if(!ue.isValidElement(r))return;let c=[...e,l];if(r.type===ue.Fragment){i.push.apply(i,fh(r.props.children,c));return}$t(r.type===Cs,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),$t(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=fh(r.props.children,c)),i.push(f)}),i}var Vc="get",kc="application/x-www-form-urlencoded";function su(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function S1(s){return su(s)&&s.tagName.toLowerCase()==="button"}function M1(s){return su(s)&&s.tagName.toLowerCase()==="form"}function E1(s){return su(s)&&s.tagName.toLowerCase()==="input"}function T1(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function A1(s,e){return s.button===0&&(!e||e==="_self")&&!T1(s)}var gc=null;function w1(){if(gc===null)try{new FormData(document.createElement("form"),0),gc=!1}catch{gc=!0}return gc}var R1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Td(s){return s!=null&&!R1.has(s)?(Ri(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${kc}"`),null):s}function C1(s,e){let i,r,l,c,f;if(M1(s)){let h=s.getAttribute("action");r=h?_a(h,e):null,i=s.getAttribute("method")||Vc,l=Td(s.getAttribute("enctype"))||kc,c=new FormData(s)}else if(S1(s)||E1(s)&&(s.type==="submit"||s.type==="image")){let h=s.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||h.getAttribute("action");if(r=m?_a(m,e):null,i=s.getAttribute("formmethod")||h.getAttribute("method")||Vc,l=Td(s.getAttribute("formenctype"))||Td(h.getAttribute("enctype"))||kc,c=new FormData(h,s),!w1()){let{name:p,type:g,value:x}=s;if(g==="image"){let _=p?`${p}.`:"";c.append(`${_}x`,"0"),c.append(`${_}y`,"0")}else p&&c.append(p,x)}}else{if(su(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Vc,r=null,l=kc,f=s}return c&&l==="text/plain"&&(f=c,c=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function op(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function D1(s,e,i){let r=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return r.pathname==="/"?r.pathname=`_root.${i}`:e&&_a(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${i}`,r}async function N1(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function U1(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function L1(s,e,i){let r=await Promise.all(s.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await N1(c,i);return f.links?f.links():[]}return[]}));return P1(r.flat(1).filter(U1).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function pg(s,e,i,r,l,c){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,h=(m,p)=>{var g;return i[p].pathname!==m.pathname||((g=i[p].route.path)==null?void 0:g.endsWith("*"))&&i[p].params["*"]!==m.params["*"]};return c==="assets"?e.filter((m,p)=>f(m,p)||h(m,p)):c==="data"?e.filter((m,p)=>{var x;let g=r.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(f(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let _=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((x=i[0])==null?void 0:x.params)||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function O1(s,e,{includeHydrateFallback:i}={}){return F1(s.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function F1(s){return[...new Set(s)]}function z1(s){let e={},i=Object.keys(s).sort();for(let r of i)e[r]=s[r];return e}function P1(s,e){let i=new Set;return new Set(e),s.reduce((r,l)=>{let c=JSON.stringify(z1(l));return i.has(c)||(i.add(c),r.push({key:c,link:l})),r},[])}function Nv(){let s=ue.useContext(Bs);return op(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function B1(){let s=ue.useContext(ru);return op(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var lp=ue.createContext(void 0);lp.displayName="FrameworkContext";function Uv(){let s=ue.useContext(lp);return op(s,"You must render this element inside a <HydratedRouter> element"),s}function I1(s,e){let i=ue.useContext(lp),[r,l]=ue.useState(!1),[c,f]=ue.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:g,onTouchStart:x}=e,_=ue.useRef(null);ue.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let A=v=>{v.forEach(O=>{f(O.isIntersecting)})},E=new IntersectionObserver(A,{threshold:.5});return _.current&&E.observe(_.current),()=>{E.disconnect()}}},[s]),ue.useEffect(()=>{if(r){let A=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(A)}}},[r]);let M=()=>{l(!0)},T=()=>{l(!1),f(!1)};return i?s!=="intent"?[c,_,{}]:[c,_,{onFocus:Po(h,M),onBlur:Po(m,T),onMouseEnter:Po(p,M),onMouseLeave:Po(g,T),onTouchStart:Po(x,M)}]:[!1,_,{}]}function Po(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function H1({page:s,...e}){let{router:i}=Nv(),r=ue.useMemo(()=>bv(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?ue.createElement(V1,{page:s,matches:r,...e}):null}function G1(s){let{manifest:e,routeModules:i}=Uv(),[r,l]=ue.useState([]);return ue.useEffect(()=>{let c=!1;return L1(s,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[s,e,i]),r}function V1({page:s,matches:e,...i}){let r=rr(),{manifest:l,routeModules:c}=Uv(),{basename:f}=Nv(),{loaderData:h,matches:m}=B1(),p=ue.useMemo(()=>pg(s,e,m,l,r,"data"),[s,e,m,l,r]),g=ue.useMemo(()=>pg(s,e,m,l,r,"assets"),[s,e,m,l,r]),x=ue.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let T=new Set,A=!1;if(e.forEach(v=>{var D;let O=l.routes[v.route.id];!O||!O.hasLoader||(!p.some(z=>z.route.id===v.route.id)&&v.route.id in h&&((D=c[v.route.id])!=null&&D.shouldRevalidate)||O.hasClientLoader?A=!0:T.add(v.route.id))}),T.size===0)return[];let E=D1(s,f,"data");return A&&T.size>0&&E.searchParams.set("_routes",e.filter(v=>T.has(v.route.id)).map(v=>v.route.id).join(",")),[E.pathname+E.search]},[f,h,r,l,p,e,s,c]),_=ue.useMemo(()=>O1(g,l),[g,l]),M=G1(g);return ue.createElement(ue.Fragment,null,x.map(T=>ue.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...i})),_.map(T=>ue.createElement("link",{key:T,rel:"modulepreload",href:T,...i})),M.map(({key:T,link:A})=>ue.createElement("link",{key:T,nonce:i.nonce,...A})))}function k1(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var Lv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Lv&&(window.__reactRouterVersion="7.10.1")}catch{}function j1({basename:s,children:e,unstable_useTransitions:i,window:r}){let l=ue.useRef();l.current==null&&(l.current=Cy({window:r,v5Compat:!0}));let c=l.current,[f,h]=ue.useState({action:c.action,location:c.location}),m=ue.useCallback(p=>{i===!1?h(p):ue.startTransition(()=>h(p))},[i]);return ue.useLayoutEffect(()=>c.listen(m),[c,m]),ue.createElement(b1,{basename:s,children:e,location:f.location,navigationType:f.action,navigator:c,unstable_useTransitions:i===!0})}var Ov=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ln=ue.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:l,reloadDocument:c,replace:f,state:h,target:m,to:p,preventScrollReset:g,viewTransition:x,..._},M){let{basename:T,unstable_useTransitions:A}=ue.useContext(Ci),E=typeof p=="string"&&Ov.test(p),v,O=!1;if(typeof p=="string"&&E&&(v=p,Lv))try{let R=new URL(window.location.href),F=p.startsWith("//")?new URL(R.protocol+p):new URL(p),k=_a(F.pathname,T);F.origin===R.origin&&k!=null?p=k+F.search+F.hash:O=!0}catch{Ri(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let D=a1(p,{relative:l}),[z,j,L]=I1(r,_),I=Y1(p,{replace:f,state:h,target:m,preventScrollReset:g,relative:l,viewTransition:x,unstable_useTransitions:A});function q(R){e&&e(R),R.defaultPrevented||I(R)}let N=ue.createElement("a",{..._,...L,href:v||D,onClick:O||c?e:q,ref:k1(M,j),target:m,"data-discover":!E&&i==="render"?"true":void 0});return z&&!E?ue.createElement(ue.Fragment,null,N,ue.createElement(H1,{page:D})):N});Ln.displayName="Link";var X1=ue.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:l=!1,style:c,to:f,viewTransition:h,children:m,...p},g){let x=el(f,{relative:p.relative}),_=rr(),M=ue.useContext(ru),{navigator:T,basename:A}=ue.useContext(Ci),E=M!=null&&$1(x)&&h===!0,v=T.encodeLocation?T.encodeLocation(x).pathname:x.pathname,O=_.pathname,D=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(O=O.toLowerCase(),D=D?D.toLowerCase():null,v=v.toLowerCase()),D&&A&&(D=_a(D,A)||D);const z=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let j=O===v||!l&&O.startsWith(v)&&O.charAt(z)==="/",L=D!=null&&(D===v||!l&&D.startsWith(v)&&D.charAt(v.length)==="/"),I={isActive:j,isPending:L,isTransitioning:E},q=j?e:void 0,N;typeof r=="function"?N=r(I):N=[r,j?"active":null,L?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let R=typeof c=="function"?c(I):c;return ue.createElement(Ln,{...p,"aria-current":q,className:N,ref:g,style:R,to:f,viewTransition:h},typeof m=="function"?m(I):m)});X1.displayName="NavLink";var W1=ue.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:l,state:c,method:f=Vc,action:h,onSubmit:m,relative:p,preventScrollReset:g,viewTransition:x,..._},M)=>{let{unstable_useTransitions:T}=ue.useContext(Ci),A=Q1(),E=J1(h,{relative:p}),v=f.toLowerCase()==="get"?"get":"post",O=typeof h=="string"&&Ov.test(h),D=z=>{if(m&&m(z),z.defaultPrevented)return;z.preventDefault();let j=z.nativeEvent.submitter,L=(j==null?void 0:j.getAttribute("formmethod"))||f,I=()=>A(j||z.currentTarget,{fetcherKey:e,method:L,navigate:i,replace:l,state:c,relative:p,preventScrollReset:g,viewTransition:x});T&&i!==!1?ue.startTransition(()=>I()):I()};return ue.createElement("form",{ref:M,method:v,action:E,onSubmit:r?m:D,..._,"data-discover":!O&&s==="render"?"true":void 0})});W1.displayName="Form";function q1(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fv(s){let e=ue.useContext(Bs);return $t(e,q1(s)),e}function Y1(s,{target:e,replace:i,state:r,preventScrollReset:l,relative:c,viewTransition:f,unstable_useTransitions:h}={}){let m=r1(),p=rr(),g=el(s,{relative:c});return ue.useCallback(x=>{if(A1(x,e)){x.preventDefault();let _=i!==void 0?i:Wo(p)===Wo(g),M=()=>m(s,{replace:_,state:r,preventScrollReset:l,relative:c,viewTransition:f});h?ue.startTransition(()=>M()):M()}},[p,m,g,i,r,e,s,l,c,f,h])}var Z1=0,K1=()=>`__${String(++Z1)}__`;function Q1(){let{router:s}=Fv("useSubmit"),{basename:e}=ue.useContext(Ci),i=x1(),r=s.fetch,l=s.navigate;return ue.useCallback(async(c,f={})=>{let{action:h,method:m,encType:p,formData:g,body:x}=C1(c,e);if(f.navigate===!1){let _=f.fetcherKey||K1();await r(_,i,f.action||h,{preventScrollReset:f.preventScrollReset,formData:g,body:x,formMethod:f.method||m,formEncType:f.encType||p,flushSync:f.flushSync})}else await l(f.action||h,{preventScrollReset:f.preventScrollReset,formData:g,body:x,formMethod:f.method||m,formEncType:f.encType||p,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[r,l,e,i])}function J1(s,{relative:e}={}){let{basename:i}=ue.useContext(Ci),r=ue.useContext(Sa);$t(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),c={...el(s||".",{relative:e})},f=rr();if(s==null){c.search=f.search;let h=new URLSearchParams(c.search),m=h.getAll("index");if(m.some(g=>g==="")){h.delete("index"),m.filter(x=>x).forEach(x=>h.append("index",x));let g=h.toString();c.search=g?`?${g}`:""}}return(!s||s===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:ma([i,c.pathname])),Wo(c)}function $1(s,{relative:e}={}){let i=ue.useContext(Av);$t(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Fv("useViewTransitionState"),l=el(s,{relative:e});if(!i.isTransitioning)return!1;let c=_a(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=_a(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Kc(l.pathname,f)!=null||Kc(l.pathname,c)!=null}var zv={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},mg=pa.createContext&&pa.createContext(zv),eS=["attr","size","title"];function tS(s,e){if(s==null)return{};var i=nS(s,e),r,l;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(s);for(l=0;l<c.length;l++)r=c[l],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(s,r)&&(i[r]=s[r])}return i}function nS(s,e){if(s==null)return{};var i={};for(var r in s)if(Object.prototype.hasOwnProperty.call(s,r)){if(e.indexOf(r)>=0)continue;i[r]=s[r]}return i}function Qc(){return Qc=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(s[r]=i[r])}return s},Qc.apply(this,arguments)}function xg(s,e){var i=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);e&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(s,l).enumerable})),i.push.apply(i,r)}return i}function Jc(s){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?xg(Object(i),!0).forEach(function(r){iS(s,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(i)):xg(Object(i)).forEach(function(r){Object.defineProperty(s,r,Object.getOwnPropertyDescriptor(i,r))})}return s}function iS(s,e,i){return e=aS(e),e in s?Object.defineProperty(s,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):s[e]=i,s}function aS(s){var e=rS(s,"string");return typeof e=="symbol"?e:e+""}function rS(s,e){if(typeof s!="object"||!s)return s;var i=s[Symbol.toPrimitive];if(i!==void 0){var r=i.call(s,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(s)}function Pv(s){return s&&s.map((e,i)=>pa.createElement(e.tag,Jc({key:i},e.attr),Pv(e.child)))}function Is(s){return e=>pa.createElement(sS,Qc({attr:Jc({},s.attr)},e),Pv(s.child))}function sS(s){var e=i=>{var{attr:r,size:l,title:c}=s,f=tS(s,eS),h=l||i.size||"1em",m;return i.className&&(m=i.className),s.className&&(m=(m?m+" ":"")+s.className),pa.createElement("svg",Qc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,r,f,{className:m,style:Jc(Jc({color:s.color||i.color},i.style),s.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),c&&pa.createElement("title",null,c),s.children)};return mg!==void 0?pa.createElement(mg.Consumer,null,i=>e(i)):e(zv)}function oS(s){return Is({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M260.062 32C138.605 32 40.134 129.701 40.134 250.232c0 41.23 11.532 79.79 31.559 112.687L32 480l121.764-38.682c31.508 17.285 67.745 27.146 106.298 27.146C381.535 468.464 480 370.749 480 250.232 480 129.701 381.535 32 260.062 32zm109.362 301.11c-5.174 12.827-28.574 24.533-38.899 25.072-10.314.547-10.608 7.994-66.84-16.434-56.225-24.434-90.052-83.844-92.719-87.67-2.669-3.812-21.78-31.047-20.749-58.455 1.038-27.413 16.047-40.346 21.404-45.725 5.351-5.387 11.486-6.352 15.232-6.413 4.428-.072 7.296-.132 10.573-.011 3.274.124 8.192-.685 12.45 10.639 4.256 11.323 14.443 39.153 15.746 41.989 1.302 2.839 2.108 6.126.102 9.771-2.012 3.653-3.042 5.935-5.961 9.083-2.935 3.148-6.174 7.042-8.792 9.449-2.92 2.665-5.97 5.572-2.9 11.269 3.068 5.693 13.653 24.356 29.779 39.736 20.725 19.771 38.598 26.329 44.098 29.317 5.515 3.004 8.806 2.67 12.226-.929 3.404-3.599 14.639-15.746 18.596-21.169 3.955-5.438 7.661-4.373 12.742-2.329 5.078 2.052 32.157 16.556 37.673 19.551 5.51 2.989 9.193 4.529 10.51 6.9 1.317 2.38.901 13.531-4.271 26.359z"},child:[]}]})(s)}var jc={exports:{}},lS=jc.exports,gg;function cS(){return gg||(gg=1,(function(s,e){(function(i,r){s.exports=r()})(lS,function(){return(function(i){function r(c){if(l[c])return l[c].exports;var f=l[c]={exports:{},id:c,loaded:!1};return i[c].call(f.exports,f,f.exports,r),f.loaded=!0,f.exports}var l={};return r.m=i,r.c=l,r.p="dist/",r(0)})([function(i,r,l){function c($){return $&&$.__esModule?$:{default:$}}var f=Object.assign||function($){for(var de=1;de<arguments.length;de++){var P=arguments[de];for(var K in P)Object.prototype.hasOwnProperty.call(P,K)&&($[K]=P[K])}return $},h=l(1),m=(c(h),l(6)),p=c(m),g=l(7),x=c(g),_=l(8),M=c(_),T=l(9),A=c(T),E=l(10),v=c(E),O=l(11),D=c(O),z=l(14),j=c(z),L=[],I=!1,q={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},N=function(){var $=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if($&&(I=!0),I)return L=(0,D.default)(L,q),(0,v.default)(L,q.once),L},R=function(){L=(0,j.default)(),N()},F=function(){L.forEach(function($,de){$.node.removeAttribute("data-aos"),$.node.removeAttribute("data-aos-easing"),$.node.removeAttribute("data-aos-duration"),$.node.removeAttribute("data-aos-delay")})},k=function($){return $===!0||$==="mobile"&&A.default.mobile()||$==="phone"&&A.default.phone()||$==="tablet"&&A.default.tablet()||typeof $=="function"&&$()===!0},te=function($){q=f(q,$),L=(0,j.default)();var de=document.all&&!window.atob;return k(q.disable)||de?F():(q.disableMutationObserver||M.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),q.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",q.easing),document.querySelector("body").setAttribute("data-aos-duration",q.duration),document.querySelector("body").setAttribute("data-aos-delay",q.delay),q.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?N(!0):q.startEvent==="load"?window.addEventListener(q.startEvent,function(){N(!0)}):document.addEventListener(q.startEvent,function(){N(!0)}),window.addEventListener("resize",(0,x.default)(N,q.debounceDelay,!0)),window.addEventListener("orientationchange",(0,x.default)(N,q.debounceDelay,!0)),window.addEventListener("scroll",(0,p.default)(function(){(0,v.default)(L,q.once)},q.throttleDelay)),q.disableMutationObserver||M.default.ready("[data-aos]",R),L)};i.exports={init:te,refresh:N,refreshHard:R}},function(i,r){},,,,,function(i,r){(function(l){function c(k,te,$){function de(qe){var H=_e,at=Re;return _e=Re=void 0,Pe=qe,oe=k.apply(at,H)}function P(qe){return Pe=qe,Ee=setTimeout(ve,te),nt?de(qe):oe}function K(qe){var H=qe-Le,at=qe-Pe,dt=te-H;return Rt?R(dt,ie-at):dt}function Y(qe){var H=qe-Le,at=qe-Pe;return Le===void 0||H>=te||H<0||Rt&&at>=ie}function ve(){var qe=F();return Y(qe)?Se(qe):void(Ee=setTimeout(ve,K(qe)))}function Se(qe){return Ee=void 0,je&&_e?de(qe):(_e=Re=void 0,oe)}function B(){Ee!==void 0&&clearTimeout(Ee),Pe=0,_e=Le=Re=Ee=void 0}function Z(){return Ee===void 0?oe:Se(F())}function xe(){var qe=F(),H=Y(qe);if(_e=arguments,Re=this,Le=qe,H){if(Ee===void 0)return P(Le);if(Rt)return Ee=setTimeout(ve,te),de(Le)}return Ee===void 0&&(Ee=setTimeout(ve,te)),oe}var _e,Re,ie,oe,Ee,Le,Pe=0,nt=!1,Rt=!1,je=!0;if(typeof k!="function")throw new TypeError(_);return te=g(te)||0,h($)&&(nt=!!$.leading,Rt="maxWait"in $,ie=Rt?N(g($.maxWait)||0,te):ie,je="trailing"in $?!!$.trailing:je),xe.cancel=B,xe.flush=Z,xe}function f(k,te,$){var de=!0,P=!0;if(typeof k!="function")throw new TypeError(_);return h($)&&(de="leading"in $?!!$.leading:de,P="trailing"in $?!!$.trailing:P),c(k,te,{leading:de,maxWait:te,trailing:P})}function h(k){var te=typeof k>"u"?"undefined":x(k);return!!k&&(te=="object"||te=="function")}function m(k){return!!k&&(typeof k>"u"?"undefined":x(k))=="object"}function p(k){return(typeof k>"u"?"undefined":x(k))=="symbol"||m(k)&&q.call(k)==T}function g(k){if(typeof k=="number")return k;if(p(k))return M;if(h(k)){var te=typeof k.valueOf=="function"?k.valueOf():k;k=h(te)?te+"":te}if(typeof k!="string")return k===0?k:+k;k=k.replace(A,"");var $=v.test(k);return $||O.test(k)?D(k.slice(2),$?2:8):E.test(k)?M:+k}var x=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(k){return typeof k}:function(k){return k&&typeof Symbol=="function"&&k.constructor===Symbol&&k!==Symbol.prototype?"symbol":typeof k},_="Expected a function",M=NaN,T="[object Symbol]",A=/^\s+|\s+$/g,E=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,O=/^0o[0-7]+$/i,D=parseInt,z=(typeof l>"u"?"undefined":x(l))=="object"&&l&&l.Object===Object&&l,j=(typeof self>"u"?"undefined":x(self))=="object"&&self&&self.Object===Object&&self,L=z||j||Function("return this")(),I=Object.prototype,q=I.toString,N=Math.max,R=Math.min,F=function(){return L.Date.now()};i.exports=f}).call(r,(function(){return this})())},function(i,r){(function(l){function c(F,k,te){function $(je){var qe=xe,H=_e;return xe=_e=void 0,Le=je,ie=F.apply(H,qe)}function de(je){return Le=je,oe=setTimeout(Y,k),Pe?$(je):ie}function P(je){var qe=je-Ee,H=je-Le,at=k-qe;return nt?N(at,Re-H):at}function K(je){var qe=je-Ee,H=je-Le;return Ee===void 0||qe>=k||qe<0||nt&&H>=Re}function Y(){var je=R();return K(je)?ve(je):void(oe=setTimeout(Y,P(je)))}function ve(je){return oe=void 0,Rt&&xe?$(je):(xe=_e=void 0,ie)}function Se(){oe!==void 0&&clearTimeout(oe),Le=0,xe=Ee=_e=oe=void 0}function B(){return oe===void 0?ie:ve(R())}function Z(){var je=R(),qe=K(je);if(xe=arguments,_e=this,Ee=je,qe){if(oe===void 0)return de(Ee);if(nt)return oe=setTimeout(Y,k),$(Ee)}return oe===void 0&&(oe=setTimeout(Y,k)),ie}var xe,_e,Re,ie,oe,Ee,Le=0,Pe=!1,nt=!1,Rt=!0;if(typeof F!="function")throw new TypeError(x);return k=p(k)||0,f(te)&&(Pe=!!te.leading,nt="maxWait"in te,Re=nt?q(p(te.maxWait)||0,k):Re,Rt="trailing"in te?!!te.trailing:Rt),Z.cancel=Se,Z.flush=B,Z}function f(F){var k=typeof F>"u"?"undefined":g(F);return!!F&&(k=="object"||k=="function")}function h(F){return!!F&&(typeof F>"u"?"undefined":g(F))=="object"}function m(F){return(typeof F>"u"?"undefined":g(F))=="symbol"||h(F)&&I.call(F)==M}function p(F){if(typeof F=="number")return F;if(m(F))return _;if(f(F)){var k=typeof F.valueOf=="function"?F.valueOf():F;F=f(k)?k+"":k}if(typeof F!="string")return F===0?F:+F;F=F.replace(T,"");var te=E.test(F);return te||v.test(F)?O(F.slice(2),te?2:8):A.test(F)?_:+F}var g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(F){return typeof F}:function(F){return F&&typeof Symbol=="function"&&F.constructor===Symbol&&F!==Symbol.prototype?"symbol":typeof F},x="Expected a function",_=NaN,M="[object Symbol]",T=/^\s+|\s+$/g,A=/^[-+]0x[0-9a-f]+$/i,E=/^0b[01]+$/i,v=/^0o[0-7]+$/i,O=parseInt,D=(typeof l>"u"?"undefined":g(l))=="object"&&l&&l.Object===Object&&l,z=(typeof self>"u"?"undefined":g(self))=="object"&&self&&self.Object===Object&&self,j=D||z||Function("return this")(),L=Object.prototype,I=L.toString,q=Math.max,N=Math.min,R=function(){return j.Date.now()};i.exports=c}).call(r,(function(){return this})())},function(i,r){function l(g){var x=void 0,_=void 0;for(x=0;x<g.length;x+=1)if(_=g[x],_.dataset&&_.dataset.aos||_.children&&l(_.children))return!0;return!1}function c(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function f(){return!!c()}function h(g,x){var _=window.document,M=c(),T=new M(m);p=x,T.observe(_.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function m(g){g&&g.forEach(function(x){var _=Array.prototype.slice.call(x.addedNodes),M=Array.prototype.slice.call(x.removedNodes),T=_.concat(M);if(l(T))return p()})}Object.defineProperty(r,"__esModule",{value:!0});var p=function(){};r.default={isSupported:f,ready:h}},function(i,r){function l(_,M){if(!(_ instanceof M))throw new TypeError("Cannot call a class as a function")}function c(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(r,"__esModule",{value:!0});var f=(function(){function _(M,T){for(var A=0;A<T.length;A++){var E=T[A];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(M,E.key,E)}}return function(M,T,A){return T&&_(M.prototype,T),A&&_(M,A),M}})(),h=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,m=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,p=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,g=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,x=(function(){function _(){l(this,_)}return f(_,[{key:"phone",value:function(){var M=c();return!(!h.test(M)&&!m.test(M.substr(0,4)))}},{key:"mobile",value:function(){var M=c();return!(!p.test(M)&&!g.test(M.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),_})();r.default=new x},function(i,r){Object.defineProperty(r,"__esModule",{value:!0});var l=function(f,h,m){var p=f.node.getAttribute("data-aos-once");h>f.position?f.node.classList.add("aos-animate"):typeof p<"u"&&(p==="false"||!m&&p!=="true")&&f.node.classList.remove("aos-animate")},c=function(f,h){var m=window.pageYOffset,p=window.innerHeight;f.forEach(function(g,x){l(g,p+m,h)})};r.default=c},function(i,r,l){function c(p){return p&&p.__esModule?p:{default:p}}Object.defineProperty(r,"__esModule",{value:!0});var f=l(12),h=c(f),m=function(p,g){return p.forEach(function(x,_){x.node.classList.add("aos-init"),x.position=(0,h.default)(x.node,g.offset)}),p};r.default=m},function(i,r,l){function c(p){return p&&p.__esModule?p:{default:p}}Object.defineProperty(r,"__esModule",{value:!0});var f=l(13),h=c(f),m=function(p,g){var x=0,_=0,M=window.innerHeight,T={offset:p.getAttribute("data-aos-offset"),anchor:p.getAttribute("data-aos-anchor"),anchorPlacement:p.getAttribute("data-aos-anchor-placement")};switch(T.offset&&!isNaN(T.offset)&&(_=parseInt(T.offset)),T.anchor&&document.querySelectorAll(T.anchor)&&(p=document.querySelectorAll(T.anchor)[0]),x=(0,h.default)(p).top,T.anchorPlacement){case"top-bottom":break;case"center-bottom":x+=p.offsetHeight/2;break;case"bottom-bottom":x+=p.offsetHeight;break;case"top-center":x+=M/2;break;case"bottom-center":x+=M/2+p.offsetHeight;break;case"center-center":x+=M/2+p.offsetHeight/2;break;case"top-top":x+=M;break;case"bottom-top":x+=p.offsetHeight+M;break;case"center-top":x+=p.offsetHeight/2+M}return T.anchorPlacement||T.offset||isNaN(g)||(_=g),x+_};r.default=m},function(i,r){Object.defineProperty(r,"__esModule",{value:!0});var l=function(c){for(var f=0,h=0;c&&!isNaN(c.offsetLeft)&&!isNaN(c.offsetTop);)f+=c.offsetLeft-(c.tagName!="BODY"?c.scrollLeft:0),h+=c.offsetTop-(c.tagName!="BODY"?c.scrollTop:0),c=c.offsetParent;return{top:h,left:f}};r.default=l},function(i,r){Object.defineProperty(r,"__esModule",{value:!0});var l=function(c){return c=c||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(c,function(f){return{node:f}})};r.default=l}])})})(jc)),jc.exports}var uS=cS();const cp=_v(uS);function fS(){return S.jsx("section",{className:"w-full bg-black text-white px-6 sm:px-10 lg:px-20 xl:px-32 min-h-screen flex items-center",children:S.jsxs("div",{className:"w-full max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-10 items-center",children:[S.jsxs("div",{children:[S.jsx("div",{className:`text-[40px] sm:text-[55px] md:text-[70px] lg:text-[95px] xl:text-[80px] items-center mx-25\r
                  kumbh-bold leading-tight`,children:"ABOUT"}),S.jsxs("div",{className:`\r
      text-[40px] sm:text-[55px] md:text-[65px] lg:text-[85px] xl:text-[80px] mx-25\r
      kumbh-bold leading-tight mt-3\r
    text-[#CDFF00]`,children:["EDEX LIFE ",S.jsx("br",{})," SCHOOL"]})]}),S.jsxs("div",{children:[S.jsxs("div",{className:`\r
      kumbh-bold \r
      text-[25px] sm:text-[32px] md:text-[38px] lg:text-[44px] xl:text-[39px]\r
      leading-relaxed mb-8`,children:["Where 1% Daily Growth Leads to ",S.jsx("br",{}),"100% Transformational Change"]}),S.jsx("p",{className:`\r
      text-[16px] sm:text-[17px] md:text-[18px] lg:text-[25px] lufga-light\r
      leading-snug text-gray-300 max-w-[800px]\r
    `,children:"At EDEX Life School, we believe greatness is built day by day. We’re a 14-week immersive academy designed to equip you with the skills, mindset, and grit needed to thrive in today’s unpredictable world."})]})]})})}function dS(){const s=[{id:1,title:"Mental Development",desc:"Develop critical thinking, adaptability, and leadership skills."},{id:2,title:"Emotional Development",desc:"Build resilience, empathy, and strong interpersonal skills."},{id:3,title:"Physical Development",desc:"Enhance wellness and energy management."},{id:4,title:"Intellectual Development",desc:"Cultivate creativity, digital fluency, and financial literacy."}];return S.jsxs("section",{className:"w-full bg-black text-white px-4 sm:px-8 lg:px-16 xl:px-32 py-12 sm:py-16",children:[S.jsx("h1",{className:"kumbh-bold text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-10",children:"Who We Are"}),S.jsx("h2",{className:"text-gray-400 lufga-light text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-7xl mb-4",children:"We're more than an academy we're a community of educators, entrepreneurs, and innovators passionate about real world learning. Our program goes beyond textbooks by emphasizing practical experiences, hands-on challenges, and mentorship from industry experts."}),S.jsx("h3",{className:"kumbh text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mt-6 mb-8",children:"We nurture growth across four key pillars:"}),S.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8",children:s.map(e=>S.jsxs("div",{"data-aos":"fade-up",className:`\r
              bg-white \r
              text-black \r
              rounded-xl \r
              p-4 sm:p-6 md:p-8\r
              shadow-md \r
              hover:shadow-xl \r
              transition-all \r
              flex flex-col \r
              gap-3 sm:gap-4\r
              h-full\r
            `,children:[S.jsx("div",{className:`\r
              bg-black text-white \r
              w-10 h-10 sm:w-12 sm:h-12\r
              flex items-center justify-center \r
              rounded-lg \r
              kumbh-bold text-lg sm:text-xl\r
            `,children:e.id}),S.jsx("h2",{className:"kumbh-bold text-base sm:text-xl md:text-2xl lg:text-3xl leading-tight",children:e.title}),S.jsx("p",{className:"lufga-light text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed",children:e.desc})]},e.id))})]})}function hS(){return S.jsxs("section",{className:"w-full min-h-screen bg-black text-white px-6 sm:px-10 lg:px-20 xl:px-32 py-16",children:[S.jsxs("div",{className:"mb-16",children:[S.jsx("h2",{className:" kumbh-bold text-3xl sm:text-4xl lg:text-5xl font-bold mb-6",children:"Our Mission"}),S.jsx("p",{className:"lufga-light text-gray-300 text-base sm:text-lg lg:text-2xl max-w-5xl leading-relaxed",children:"Our mission is simple: empower you to become a T-shaped professional. We help you master your core passion while broadening your skills across multiple disciplines preparing you to lead in your career, entrepreneurship, and life."})]}),S.jsxs("div",{className:"mb-16",children:[S.jsx("h2",{className:"kumbh text-3xl sm:text-4xl lg:text-5xl font-bold mb-8",children:"Why Choose EDEX?"}),S.jsxs("div",{className:"kumbh grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:[S.jsxs("div",{className:"border border-[#C5FF00] rounded-xl p-6 hover:bg-white/5 transition","data-aos":"fade-up","data-aos-duration":"800","data-aos-delay":"0",children:[S.jsx("h2",{className:"font-bold text-xl lg:text-2xl sm:text-xl mb-2",children:"1% Better Every Day"}),S.jsx("p",{className:"text-gray-300 text-sm sm:text-base leading-relaxed",children:"Small, consistent improvements add up to transformative results."})]}),S.jsxs("div",{className:"border border-[#C5FF00] rounded-xl p-6 hover:bg-white/5 transition","data-aos":"fade-down","data-aos-duration":"800","data-aos-delay":"150",children:[S.jsx("h2",{className:"font-bold text-2xl lg:text-2xl sm:text-xl mb-2",children:"Real-World Learning"}),S.jsx("p",{className:"text-gray-300 text-sm sm:text-base leading-relaxed",children:"Enjoy 90% practical training through expert sessions, business visits, and interactive challenges."})]}),S.jsxs("div",{className:"border border-[#C5FF00] rounded-xl p-6 hover:bg-white/5 transition","data-aos":"fade-down","data-aos-duration":"800","data-aos-delay":"300",children:[S.jsx("h2",{className:"font-bold text-lg lg:text-2xl sm:text-xl mb-2",children:"Holistic Development"}),S.jsx("p",{className:"text-gray-300 text-sm sm:text-base leading-relaxed",children:"We nurture mind, body, and spirit to shape well-rounded, future-ready leaders."})]})]})]}),S.jsxs("div",{className:"mt-20 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start",children:[S.jsx("h3",{className:"kumbh-bold text-2xl sm:text-3xl font-bold whitespace-nowrap",children:"Our Story"}),S.jsx("p",{className:"lufga-light text-gray-200 text-lg sm:text-lg lg:text-2xl lg:col-span-2 leading-relaxed",children:"Born from the belief that education should prepare you for life not just exams EDEX Life School was founded by a team of educators, entrepreneurs, and behavioral scientists. Since our inception, we’ve reimagined learning as a daily adventure, empowering hundreds of students to unlock their potential, launch startups, and secure dream roles at leading companies."})]}),S.jsx("div",{className:"border-b border-white/20 my-16"}),S.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-10 items-start",children:[S.jsx("h3",{className:"kumbh-bold text-2xl sm:text-3xl font-bold whitespace-nowrap",children:"Join the Movement"}),S.jsx("p",{className:"lufga-light text-gray-200 text-xl sm:text-lg lg:text-2xl lg:col-span-2 leading-relaxed",children:"Whether you aspire to be a future CEO, creative innovator, or tech pioneer, EDEX Life School is your launchpad for success. Here, you'll gain 14 future-proof skills, a portfolio of real projects, and a network of mentors who are ready to support you every step of the way."})]})]})}const pS="/assets/girl-JzHfnU0b.png",mS="/assets/bg1-B0oQjiuL.png";function xS(){return S.jsxs("section",{className:`\r
        relative w-full overflow-hidden text-white\r
        px-6 sm:px-10 lg:px-20 \r
        py-10 sm:py-12 lg:py-16\r
        min-h-[500px] sm:min-h-[400px] lg:min-h-[600px]\r
      `,children:[S.jsx("img",{src:mS,alt:"Background",className:"absolute inset-0 w-full h-full object-cover object-center"}),S.jsx("div",{className:"absolute inset-0 bg-black/20"}),S.jsxs("div",{className:`\r
          relative z-10 max-w-7xl mx-auto \r
          grid grid-cols-1 lg:grid-cols-2 \r
          gap-12 lg:gap-20\r
          h-full\r
        `,children:[S.jsxs("div",{className:"text-center lg:text-left self-center space-y-6 lg:space-y-8",children:[S.jsxs("h1",{className:`\r
              font-bold kumbh\r
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl\r
              leading-tight mt-10            `,children:["Ready to transform ",S.jsx("br",{className:"hidden sm:block"}),"your future?"]}),S.jsx("a",{href:"https://admission.edexlifeschool.com/",target:"_blank",rel:"noopener noreferrer",children:S.jsx("button",{className:`\r
                bg-white text-black font-semibold\r
                px-6 sm:px-8 py-4 md:py-5 lufga\r
                rounded-md shadow-lg hover:bg-gray-200 transition\r
                mx-auto lg:mx-0 block text-lg sm:text-xl md:text-2xl\r
              `,children:"Apply Now"})})]}),S.jsx("div",{className:"relative hidden lg:block"})]}),S.jsx("div",{className:"absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-20 z-20 h-[50%] sm:h-[60%] md:h-[70%] lg:h-[85%] max-h-[500px] lg:max-h-none",children:S.jsx("img",{src:pS,alt:"Professional woman holding documents",className:"h-full w-auto object-contain object-bottom"})})]})}function gS(s){return Is({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(s)}function vg(s){return Is({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(s)}const vS="/assets/header%20new-C-2c91ZJ.png",Bv=()=>{const[s,e]=ue.useState(!1),[i,r]=ue.useState(!1);ue.useEffect(()=>{const c=()=>{r(window.scrollY>10)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]);const l=()=>{e(!1)};return S.jsxs("nav",{className:`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${i?"bg-black/20 backdrop-blur-lg shadow-lg":"bg-transparent"}
      `,children:[S.jsx("div",{className:"max-w-8xl mx-auto px-4 sm:px-6 lg:px-2",children:S.jsxs("div",{className:"flex items-center justify-between h-16 sm:h-20",children:[S.jsx(Ln,{to:"/",className:"flex-shrink-0",children:S.jsx("img",{src:vS,alt:"Edex Logo",className:"h-12 sm:h-16 md:h-20 lg:h-24 w-auto transition-all duration-300"})}),S.jsxs("ul",{className:"hidden md:flex items-center space-x-6 lg:space-x-10 lufga text-lg font-bold",children:[S.jsx("li",{children:S.jsx(Ln,{to:"/",className:"!text-white/80 hover:text-white transition-colors duration-200 py-2",children:"Home"})}),S.jsx("li",{children:S.jsx(Ln,{to:"/curiculam",className:"!text-white/80 hover:text-white transition-colors duration-200 py-2",children:"Curriculum"})}),S.jsx("li",{children:S.jsx(Ln,{to:"/about",className:"!text-white/80 hover:text-white transition-colors duration-200 py-2",children:"About Us"})}),S.jsx("li",{children:S.jsx(Ln,{to:"/contact",className:"!text-white/80 hover:text-white transition-colors duration-200 py-2",children:"Contact"})})]}),S.jsx("button",{className:"md:hidden text-white text-2xl p-2 hover:bg-white/10 rounded-lg transition-colors duration-200",onClick:()=>e(!s),"aria-label":"Toggle menu",children:s?S.jsx(vg,{}):S.jsx(gS,{})})]})}),S.jsxs("div",{className:`md:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${s?"opacity-100 visible":"opacity-0 invisible"}`,children:[S.jsx("div",{className:"absolute inset-0 bg-black/50 backdrop-blur-sm",onClick:l}),S.jsx("div",{className:`absolute top-0 right-0 w-3/4 max-w-sm h-full bg-black/90 backdrop-blur-lg shadow-2xl transform transition-transform duration-300 ease-in-out ${s?"translate-x-0":"translate-x-full"}`,children:S.jsxs("div",{className:"flex flex-col h-full pt-20 pb-8 px-6",children:[S.jsx("button",{className:"absolute top-4 right-4 text-white text-2xl p-2 hover:bg-white/10 rounded-lg",onClick:l,"aria-label":"Close menu",children:S.jsx(vg,{})}),S.jsxs("ul",{className:"flex flex-col space-y-6 lufga text-xl font-bold",children:[S.jsx("li",{children:S.jsx(Ln,{to:"/home",className:"block text-white/80 hover:text-white transition-colors duration-200 py-3 border-b border-white/10",onClick:l,children:"Home"})}),S.jsx("li",{children:S.jsx(Ln,{to:"/curiculam",className:"block text-sky-500 hover:text-white transition-colors duration-200 py-3 border-b border-white/10",onClick:l,children:"Curriculum"})}),S.jsx("li",{children:S.jsx(Ln,{to:"/about",className:"block text-white/80 hover:text-white transition-colors duration-200 py-3 border-b border-white/10",onClick:l,children:"About Us"})}),S.jsx("li",{children:S.jsx(Ln,{to:"/contact",className:"block text-white/80 hover:text-white transition-colors duration-200 py-3 border-b border-white/10",onClick:l,children:"Contact"})})]})]})})]})]})},_S=()=>S.jsxs("div",{children:[S.jsx(Bv,{}),S.jsx(fS,{}),S.jsx(dS,{}),S.jsx(hS,{}),S.jsx(xS,{})]}),bS="/assets/Frame1-DPEu-K0v.png";function yS(){return ue.useEffect(()=>{cp.init({duration:"2000"})},[]),S.jsx("div",{className:"overflow-x-hidden",children:S.jsxs("section",{className:"relative min-h-screen w-full overflow-hidden",style:{backgroundImage:`url(${bS})`,opacity:"100%",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"},children:[S.jsx("div",{className:"absolute inset-0 bg-black/40"}),S.jsx("div",{className:"relative z-10 pt-[200px] pb-20 flex items-center justify-between gap-12 px-5 md:px-10 lg:px-25 flex-wrap",children:S.jsxs("div",{className:"flex-1 max-w-[600px] ml-0 md:ml-10","data-aos":"fade-left",children:[S.jsxs("h1",{className:"lufga text-4xl md:text-5xl lg:text-8xl font-bold text-white text-left mb-15",children:["EDEX LIFE ",S.jsx("br",{}),"SCHOOL"]}),S.jsx("h2",{className:"lufga text-2xl md:text-3xl lg:text-5xl font-bold text-[#cdff00] text-left mb-10",children:"14-WEEK PROGRAM"}),S.jsx("p",{className:"lufga text-2xl md:text-3xl lg:text-3xl mb-5 font-bold text-white text-left",children:"Our Mission:"}),S.jsx("p",{className:"lufga-light text-base md:text-lg lg:text-2xl leading-relaxed text-gray-300 text-left",children:"Empower students to grow 1% every day-mentally, emotionally, physically, and intellectually through hands-on, practical learning."})]})})]})})}const SS="/assets/Frame2-BlP4tRnm.png";function MS(){const s=[{title:"Daily Tasks",desc:"Boost your progress by 1% every day."},{title:"Reflection",desc:"Track growth through journals and peer feedback."}],e=[{title:"Expert Sessions",desc:"Learn directly from industry leaders."},{title:"Business Visits",desc:"Gain insights with real-world exposure."},{title:"Interactive Games",desc:"Develop skills through practical challenges."}];return S.jsx("section",{className:"relative w-full overflow-hidden min-h-[600px] sm:min-h-[700px] md:min-h-[800px] flex items-center justify-center py-12 sm:py-16 md:py-20",style:{backgroundImage:`url(${SS})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"},children:S.jsxs("div",{className:"relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16",children:[S.jsxs("div",{className:"flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-8 mb-6 md:mb-8",children:[S.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl lg:text-7xl mt-10 font-bold text-white kumbh","data-aos":"fade-up",children:"How It Works"}),S.jsx("div",{className:"flex-1 md:max-w-[48%]","data-aos":"fade-up",children:S.jsxs("div",{className:"bg-transparent border border-[#CDFF00] rounded-2xl p-8 mb-3 sm:p-6 md:p-7 text-white hover:bg-white/10 transition-all duration-300",children:[S.jsx("h5",{className:"font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 kumbh border-b border-white pb-2",children:e[0].title}),S.jsx("p",{className:"text-sm sm:text-base md:text-lg lg:text-xl lufga-light leading-relaxed mt-2",children:e[0].desc})]})})]}),S.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12",children:[S.jsx("div",{"data-aos":"fade-up","data-aos-delay":"100",children:S.jsxs("div",{className:"bg-transparent border border-[#CDFF00] rounded-2xl p-8 sm:p-6 md:p-7 text-white hover:bg-white/10 transition-all duration-300",children:[S.jsx("h5",{className:"font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 kumbh border-b border-white pb-2",children:s[0].title}),S.jsx("p",{className:"text-sm sm:text-base md:text-lg lg:text-xl lufga-light leading-relaxed mt-2",children:s[0].desc})]})}),S.jsx("div",{"data-aos":"fade-up","data-aos-delay":"200",children:S.jsxs("div",{className:"bg-transparent border border-[#CDFF00] rounded-2xl p-8 sm:p-6 md:p-7 text-white hover:bg-white/10 transition-all duration-300",children:[S.jsx("h5",{className:"font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 kumbh border-b border-white pb-2",children:e[1].title}),S.jsx("p",{className:"text-sm sm:text-base md:text-lg lg:text-xl lufga-light leading-relaxed mt-2",children:e[1].desc})]})}),S.jsx("div",{"data-aos":"fade-up","data-aos-delay":"300",children:S.jsxs("div",{className:"bg-transparent border border-[#CDFF00] rounded-2xl p-8 sm:p-6 md:p-7 text-white hover:bg-white/10 transition-all duration-300",children:[S.jsx("h5",{className:"font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 kumbh border-b border-white pb-2",children:s[1].title}),S.jsx("p",{className:"text-sm sm:text-base md:text-lg lg:text-xl lufga-light leading-relaxed mt-2",children:s[1].desc})]})}),S.jsx("div",{"data-aos":"fade-up","data-aos-delay":"400",children:S.jsxs("div",{className:"bg-transparent border border-[#CDFF00] rounded-2xl p-8 sm:p-6 md:p-7 text-white hover:bg-white/10 transition-all duration-300",children:[S.jsx("h5",{className:"font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 kumbh border-b border-white pb-2",children:e[2].title}),S.jsx("p",{className:"text-sm sm:text-base md:text-lg lg:text-xl lufga-light leading-relaxed mt-2",children:e[2].desc})]})})]})]})})}function ES(){const s=[{week:"Week 1:",title:"Self-Awareness & Vision",desc:"Discover your strengths and set your personal vision."},{week:"Week 2:",title:"Resilience",desc:"Learn to manage stress and bounce back from challenges."},{week:"Week 3:",title:"Critical Thinking",desc:"Practice solving real-world problems."},{week:"Week 4:",title:"Emotional Intelligence",desc:"Enhance your ability to connect and lead with empathy."},{week:"Week 5:",title:"Creativity",desc:"Think outside the box and spark innovation."},{week:"Week 6:",title:"Entrepreneurship",desc:"Explore what it takes to start and run a business."},{week:"Week 7:",title:"Financial Literacy",desc:"Understand money management and basic investing."},{week:"Week 8:",title:"Adaptability",desc:"Learn to adjust quickly to new situations."},{week:"Week 9:",title:"Leadership",desc:"Develop skills to guide and inspire others."},{week:"Week 10:",title:"Communication",desc:"Master clear and persuasive communication."},{week:"Week 11:",title:"Collaboration",desc:"Work effectively in teams."},{week:"Week 12:",title:"Digital Skills",desc:"Build fluency in technology and digital tools."},{week:"Week 13:",title:"Cultural Intelligence",desc:"Embrace global perspective and diversity."},{week:"Week 14:",title:"Entrepreneurial Grit",desc:"Put it all together pitch your project and celebrate your growth."}];return S.jsxs("section",{className:"px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-12 md:py-16 bg-black text-white",children:[S.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-10 md:mb-12 lg:mb-16",children:[S.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl lg:text-xl xl:text-6xl font-bold kumbh mb-4 sm:mb-0 max-w-2xl",children:"Week-by-Week Themes"}),S.jsx("a",{href:"#",className:"text-white text-base sm:text-lg md:text-xl underline hover:text-[#CDFF00] transition-colors duration-300 lufga-light self-start sm:self-center",children:"View more →"})]}),S.jsxs("div",{className:"relative",children:[S.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 lg:w-20  z-10 pointer-events-none"}),S.jsx("div",{className:"absolute right-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 lg:w-20  z-10 pointer-events-none"}),S.jsx("div",{className:"flex overflow-x-auto overflow-y-hidden gap-4 sm:gap-5 md:gap-6 lg:gap-8 pb-6 px-1 sm:px-2 md:px-3 scrollbar-hide scroll-smooth",children:s.map((e,i)=>S.jsxs("div",{className:`bg-white text-black rounded-2xl flex-shrink-0 \r
                w-[280px] sm:w-[300px] md:w-[320px] lg:w-[340px] xl:w-[360px]\r
                h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px]\r
                p-4 sm:p-5 md:p-6 lg:p-7\r
                hover:shadow-2xl hover:shadow-[#CDFF00]/20 \r
                hover:scale-[1.02] active:scale-[0.99]\r
                transition-all duration-300 ease-out\r
                flex flex-col justify-between\r
                border border-white/10 group cursor-pointer`,"data-aos":"flip-right","data-aos-delay":i*50,"data-aos-duration":"600",children:[S.jsxs("div",{className:"relative",children:[S.jsx("div",{className:"absolute -top-2 -left-2 w-2 h-2 bg-[#CDFF00] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),S.jsx("h2",{className:"text-sm sm:text-base md:text-lg font-semibold text-gray-600 kumbh mb-1",children:e.week}),S.jsx("h3",{className:"text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 kumbh leading-tight",children:e.title})]}),S.jsx("p",{className:"text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 lufga-light leading-relaxed sm:leading-normal md:leading-relaxed",children:e.desc})]},i))})]}),S.jsx("div",{className:"flex justify-center mt-6 sm:mt-8 md:mt-10",children:S.jsxs("div",{className:"flex flex-col sm:flex-row i      tems-center gap-3 sm:gap-4",children:[S.jsxs("div",{className:"flex sm:hidden items-center gap-2 text-xs text-gray-400 lufga-light",children:[S.jsx("span",{children:"Swipe to see more"}),S.jsx("svg",{className:"w-4 h-4 animate-bounce",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:S.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]}),S.jsxs("div",{className:"hidden lg:flex items-center gap-2",children:[S.jsx("div",{className:"w-32 h-1 bg-gray-800 rounded-full overflow-hidden",children:S.jsx("div",{className:"h-full bg-[#CDFF00] rounded-full w-1/3 animate-pulse"})}),S.jsx("span",{className:"text-xs text-gray-500",children:"1/3"})]})]})}),S.jsx("div",{className:"hidden xl:grid xl:grid-cols-2 2xl:grid-cols-3 gap-6 mt-12"})]})}const TS="/assets/Frame3-Cmmi3a03.png";function AS(){const s=[{title:"Real-World Experience",desc:"Expert talks and business visits every week."},{title:"Ongoing Support",desc:"Daily tasks, progress tracking, and peer feedback."},{title:"Fun Challenges",desc:"Interactive games that reinforce what you learn."},{title:"Final Showcase",desc:"Pitch your project to real investors."}];return S.jsxs("section",{className:`\r
        relative w-full overflow-hidden text-white \r
        min-h-[600px] sm:min-h-[700px] md:min-h-[800px] \r
        flex items-center\r
      `,style:{backgroundImage:`url(${TS})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"},children:[S.jsx("div",{className:"absolute inset-0 bg-black/20"}),S.jsx("div",{className:`\r
          relative z-10 w-full \r
          px-6 sm:px-10 md:px-14 lg:px-20 \r
          flex justify-end\r
        `,children:S.jsxs("div",{className:"w-full max-w-4xl",children:[S.jsx("h2",{className:`\r
              text-left md:text-left\r
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl \r
              font-bold mb-10 lg:mb-14 kumbh\r
            `,children:"What You Get"}),S.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-15",children:s.map((e,i)=>S.jsxs("div",{className:`\r
                  bg-black/20 backdrop-blur-sm\r
                  border border-lime-400/40 \r
                  rounded-2xl p-6 sm:p-7 md:p-8\r
                  transition-all duration-500 \r
                  hover:scale-[1.05] hover:-translate-y-3 hover:shadow-2xl\r
                `,children:[S.jsx("h3",{className:"font-bold text-xl lg:text-2xl sm:text-2xl border-b border-white/40 pb-3 mb-3 kumbh",children:e.title}),S.jsx("p",{className:"text-base sm:text-lg lufga-light mb-5 leading-relaxed",children:e.desc})]},i))})]})})]})}const wS="/assets/contact-Dravg2hq.jpg";function RS(){const[s,e]=pa.useState({name:"",email:"",phone:""}),i=l=>{l.preventDefault(),console.log("Form submitted:",s)},r=l=>{const{name:c,value:f}=l.target;e(h=>({...h,[c]:f}))};return S.jsxs("section",{className:"relative min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-24 text-white overflow-hidden",children:[S.jsx("div",{className:"absolute inset-0",style:{backgroundImage:`url(${wS})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundAttachment:"fixed"},children:S.jsx("div",{className:"absolute inset-0 bg-black/70"})}),S.jsx("div",{className:"relative max-w-7xl mx-auto",children:S.jsxs("div",{className:"grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start",children:[S.jsxs("div",{className:"space-y-10 sm:space-y-12 md:space-y-14 lg:space-y-16",children:[S.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold kumbh leading-tight mt-5",children:["Talk to our ",S.jsx("span",{className:"text-[#CDFF00]",children:"expert"})]}),S.jsx("div",{className:"relative bg-transparent backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10 shadow-2xl w-full max-w-xl",children:S.jsxs("form",{onSubmit:i,className:"space-y-6 sm:space-y-8",children:[S.jsxs("div",{className:"group",children:[S.jsx("label",{className:"block text-base sm:text-lg md:text-xl lg:text-2xl lufga-light mb-3 text-gray-200",children:"Name"}),S.jsx("input",{type:"text",name:"name",value:s.name,onChange:r,placeholder:"Enter your full name",required:!0,className:`w-full px-4 sm:px-6 py-4 sm:py-5 bg-white/5 border-2 border-white/10\r
                    rounded-xl sm:rounded-2xl text-white text-lg sm:text-xl lg:text-2xl\r
                    placeholder-gray-500 focus:outline-none focus:border-[#CDFF00]\r
                    focus:ring-2 focus:ring-[#CDFF00]/30 hover:border-white/30 transition-all duration-300 backdrop-blur-sm`})]}),S.jsxs("div",{className:"group",children:[S.jsx("label",{className:"block text-base sm:text-lg md:text-xl lg:text-2xl lufga-light mb-3 text-gray-200",children:"Email"}),S.jsx("input",{type:"email",name:"email",value:s.email,onChange:r,placeholder:"Enter your email address",required:!0,className:`w-full px-4 sm:px-6 py-4 sm:py-5 bg-white/5 border-2 border-white/10\r
                    rounded-xl sm:rounded-2xl text-white text-lg sm:text-xl lg:text-2xl\r
                    placeholder-gray-500 focus:outline-none focus:border-[#CDFF00]\r
                    focus:ring-2 focus:ring-[#CDFF00]/30 hover:border-white/30 transition-all duration-300 backdrop-blur-sm`})]}),S.jsxs("div",{className:"group",children:[S.jsx("label",{className:"block text-base sm:text-lg md:text-xl lg:text-2xl lufga-light mb-3 text-gray-200",children:"Phone Number"}),S.jsx("input",{type:"tel",name:"phone",value:s.phone,onChange:r,placeholder:"Enter your phone number",required:!0,className:`w-full px-4 sm:px-6 py-4 sm:py-5 bg-white/5 border-2 border-white/10\r
                    rounded-xl sm:rounded-2xl text-white text-lg sm:text-xl lg:text-2xl\r
                    placeholder-gray-500 focus:outline-none focus:border-[#CDFF00]\r
                    focus:ring-2 focus:ring-[#CDFF00]/30 hover:border-white/30 transition-all duration-300 backdrop-blur-sm`})]}),S.jsx("div",{className:"pt-4 sm:pt-6",children:S.jsx("button",{type:"submit",className:"relative w-full group",children:S.jsxs("div",{className:`relative w-full px-8 py-5 sm:py-6 md:py-7 bg-gradient-to-r from-[#CDFF00] to-[#9BFF00]\r
                      rounded-2xl border-2 border-transparent hover:from-[#B8FF00] hover:to-[#7FFF00]\r
                      active:scale-[0.98] transition-all duration-300 shadow-lg shadow-[#CDFF00]/20\r
                      hover:shadow-xl hover:shadow-[#CDFF00]/30 overflow-hidden`,children:[S.jsx("span",{className:"relative text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold kumbh tracking-wide",children:"Request a Callback"}),S.jsx("svg",{className:`relative inline-block ml-3 sm:ml-4 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 \r
                        animate-bounce group-hover:animate-none group-hover:translate-x-2 transition-transform duration-300`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:S.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,d:"M14 5l7 7m0 0l-7 7m7-7H3"})})]})})})]})})]}),S.jsx("div",{})]})})]})}const CS=()=>S.jsxs("div",{children:[S.jsx(yS,{}),S.jsx(MS,{}),S.jsx(ES,{}),S.jsx(AS,{}),S.jsx(RS,{})]}),DS=()=>{const{pathname:s}=rr();return ue.useEffect(()=>{window.scrollTo(0,0)},[s]),null};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const up="181",NS=0,_g=1,US=2,Iv=1,LS=2,da=3,ir=0,Xn=1,ha=2,xa=0,Ds=1,dh=2,bg=3,yg=4,OS=5,Nr=100,FS=101,zS=102,PS=103,BS=104,IS=200,HS=201,GS=202,VS=203,hh=204,ph=205,kS=206,jS=207,XS=208,WS=209,qS=210,YS=211,ZS=212,KS=213,QS=214,mh=0,xh=1,gh=2,Us=3,vh=4,_h=5,bh=6,yh=7,Hv=0,JS=1,$S=2,nr=0,e2=1,t2=2,n2=3,i2=4,a2=5,r2=6,s2=7,Gv=300,Ls=301,Os=302,Sh=303,Mh=304,ou=306,Eh=1e3,ai=1001,Th=1002,ri=1003,o2=1004,vc=1005,On=1006,Ad=1007,Lr=1008,ba=1009,Vv=1010,kv=1011,qo=1012,fp=1013,Fr=1014,zi=1015,zr=1016,dp=1017,hp=1018,Yo=1020,jv=35902,Xv=35899,Wv=1021,qv=1022,xi=1023,Zo=1026,Ko=1027,Yv=1028,pp=1029,mp=1030,xp=1031,gp=1033,Xc=33776,Wc=33777,qc=33778,Yc=33779,Ah=35840,wh=35841,Rh=35842,Ch=35843,Dh=36196,Nh=37492,Uh=37496,Lh=37808,Oh=37809,Fh=37810,zh=37811,Ph=37812,Bh=37813,Ih=37814,Hh=37815,Gh=37816,Vh=37817,kh=37818,jh=37819,Xh=37820,Wh=37821,qh=36492,Yh=36494,Zh=36495,Kh=36283,Qh=36284,Jh=36285,$h=36286,l2=3200,c2=3201,u2=0,f2=1,er="",mi="srgb",Fs="srgb-linear",$c="linear",Xt="srgb",ms=7680,Sg=519,d2=512,h2=513,p2=514,Zv=515,m2=516,x2=517,g2=518,v2=519,Mg=35044,Eg="300 es",Pi=2e3,eu=2001;function Kv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function tu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function _2(){const s=tu("canvas");return s.style.display="block",s}const Tg={};function Ag(...s){const e="THREE."+s.shift();console.log(e,...s)}function ft(...s){const e="THREE."+s.shift();console.warn(e,...s)}function sn(...s){const e="THREE."+s.shift();console.error(e,...s)}function Qo(...s){const e=s.join(" ");e in Tg||(Tg[e]=!0,ft(...s))}function b2(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class Hs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wd=Math.PI/180,ep=180/Math.PI;function tl(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[i&63|128]+Nn[i>>8&255]+"-"+Nn[i>>16&255]+Nn[i>>24&255]+Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]).toLowerCase()}function wt(s,e,i){return Math.max(e,Math.min(i,s))}function y2(s,e){return(s%e+e)%e}function Rd(s,e,i){return(1-i)*s+i*e}function Bo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function jn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class ht{constructor(e=0,i=0){ht.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=wt(this.x,e.x,i.x),this.y=wt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=wt(this.x,e,i),this.y=wt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(wt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(wt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*l+e.x,this.y=c*l+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nl{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,f,h){let m=r[l+0],p=r[l+1],g=r[l+2],x=r[l+3],_=c[f+0],M=c[f+1],T=c[f+2],A=c[f+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=x;return}if(h>=1){e[i+0]=_,e[i+1]=M,e[i+2]=T,e[i+3]=A;return}if(x!==A||m!==_||p!==M||g!==T){let E=m*_+p*M+g*T+x*A;E<0&&(_=-_,M=-M,T=-T,A=-A,E=-E);let v=1-h;if(E<.9995){const O=Math.acos(E),D=Math.sin(O);v=Math.sin(v*O)/D,h=Math.sin(h*O)/D,m=m*v+_*h,p=p*v+M*h,g=g*v+T*h,x=x*v+A*h}else{m=m*v+_*h,p=p*v+M*h,g=g*v+T*h,x=x*v+A*h;const O=1/Math.sqrt(m*m+p*p+g*g+x*x);m*=O,p*=O,g*=O,x*=O}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=x}static multiplyQuaternionsFlat(e,i,r,l,c,f){const h=r[l],m=r[l+1],p=r[l+2],g=r[l+3],x=c[f],_=c[f+1],M=c[f+2],T=c[f+3];return e[i]=h*T+g*x+m*M-p*_,e[i+1]=m*T+g*_+p*x-h*M,e[i+2]=p*T+g*M+h*_-m*x,e[i+3]=g*T-h*x-m*_-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(r/2),g=h(l/2),x=h(c/2),_=m(r/2),M=m(l/2),T=m(c/2);switch(f){case"XYZ":this._x=_*g*x+p*M*T,this._y=p*M*x-_*g*T,this._z=p*g*T+_*M*x,this._w=p*g*x-_*M*T;break;case"YXZ":this._x=_*g*x+p*M*T,this._y=p*M*x-_*g*T,this._z=p*g*T-_*M*x,this._w=p*g*x+_*M*T;break;case"ZXY":this._x=_*g*x-p*M*T,this._y=p*M*x+_*g*T,this._z=p*g*T+_*M*x,this._w=p*g*x-_*M*T;break;case"ZYX":this._x=_*g*x-p*M*T,this._y=p*M*x+_*g*T,this._z=p*g*T-_*M*x,this._w=p*g*x+_*M*T;break;case"YZX":this._x=_*g*x+p*M*T,this._y=p*M*x+_*g*T,this._z=p*g*T-_*M*x,this._w=p*g*x-_*M*T;break;case"XZY":this._x=_*g*x-p*M*T,this._y=p*M*x-_*g*T,this._z=p*g*T+_*M*x,this._w=p*g*x+_*M*T;break;default:ft("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],g=i[6],x=i[10],_=r+h+x;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(g-m)*M,this._y=(c-p)*M,this._z=(f-l)*M}else if(r>h&&r>x){const M=2*Math.sqrt(1+r-h-x);this._w=(g-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+p)/M}else if(h>x){const M=2*Math.sqrt(1+h-r-x);this._w=(c-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+x-r-h);this._w=(f-l)/M,this._x=(c+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,f=e._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+f*h+l*p-c*m,this._y=l*g+f*m+c*h-r*p,this._z=c*g+f*p+r*m-l*h,this._w=f*g-r*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,c=e._z,f=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class pe{constructor(e=0,i=0,r=0){pe.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(wg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(wg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*r),g=2*(h*i-c*l),x=2*(c*r-f*i);return this.x=i+m*p+f*x-h*g,this.y=r+m*g+h*p-c*x,this.z=l+m*x+c*g-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=wt(this.x,e.x,i.x),this.y=wt(this.y,e.y,i.y),this.z=wt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=wt(this.x,e,i),this.y=wt(this.y,e,i),this.z=wt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(wt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-r*m,this.z=r*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Cd.copy(this).projectOnVector(e),this.sub(Cd)}reflect(e){return this.sub(Cd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(wt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cd=new pe,wg=new nl;class gt{constructor(e,i,r,l,c,f,h,m,p){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,h,m,p)}set(e,i,r,l,c,f,h,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=h,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],h=r[3],m=r[6],p=r[1],g=r[4],x=r[7],_=r[2],M=r[5],T=r[8],A=l[0],E=l[3],v=l[6],O=l[1],D=l[4],z=l[7],j=l[2],L=l[5],I=l[8];return c[0]=f*A+h*O+m*j,c[3]=f*E+h*D+m*L,c[6]=f*v+h*z+m*I,c[1]=p*A+g*O+x*j,c[4]=p*E+g*D+x*L,c[7]=p*v+g*z+x*I,c[2]=_*A+M*O+T*j,c[5]=_*E+M*D+T*L,c[8]=_*v+M*z+T*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],g=e[8];return i*f*g-i*h*p-r*c*g+r*h*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],g=e[8],x=g*f-h*p,_=h*m-g*c,M=p*c-f*m,T=i*x+r*_+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=x*A,e[1]=(l*p-g*r)*A,e[2]=(h*r-l*f)*A,e[3]=_*A,e[4]=(g*i-l*m)*A,e[5]=(l*c-h*i)*A,e[6]=M*A,e[7]=(r*m-p*i)*A,e[8]=(f*i-r*c)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Dd.makeScale(e,i)),this}rotate(e){return this.premultiply(Dd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Dd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Dd=new gt,Rg=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cg=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function S2(){const s={enabled:!0,workingColorSpace:Fs,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Xt&&(l.r=ga(l.r),l.g=ga(l.g),l.b=ga(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Xt&&(l.r=Ns(l.r),l.g=Ns(l.g),l.b=Ns(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===er?$c:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Qo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Qo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Fs]:{primaries:e,whitePoint:r,transfer:$c,toXYZ:Rg,fromXYZ:Cg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:e,whitePoint:r,transfer:Xt,toXYZ:Rg,fromXYZ:Cg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),s}const Ot=S2();function ga(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ns(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let xs;class M2{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{xs===void 0&&(xs=tu("canvas")),xs.width=e.width,xs.height=e.height;const l=xs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=xs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=tu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ga(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ga(i[r]/255)*255):i[r]=ga(i[r]);return{data:i,width:e.width,height:e.height}}else return ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let E2=0;class vp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:E2++}),this.uuid=tl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Nd(l[f].image)):c.push(Nd(l[f]))}else c=Nd(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Nd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?M2.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ft("Texture: Unable to serialize Texture."),{})}let T2=0;const Ud=new pe;class Pn extends Hs{constructor(e=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,r=ai,l=ai,c=On,f=Lr,h=xi,m=ba,p=Pn.DEFAULT_ANISOTROPY,g=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:T2++}),this.uuid=tl(),this.name="",this.source=new vp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ud).x}get height(){return this.source.getSize(Ud).y}get depth(){return this.source.getSize(Ud).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){ft(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ft(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Eh:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case Th:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Eh:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case Th:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=Gv;Pn.DEFAULT_ANISOTROPY=1;class nn{constructor(e=0,i=0,r=0,l=1){nn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],g=m[4],x=m[8],_=m[1],M=m[5],T=m[9],A=m[2],E=m[6],v=m[10];if(Math.abs(g-_)<.01&&Math.abs(x-A)<.01&&Math.abs(T-E)<.01){if(Math.abs(g+_)<.1&&Math.abs(x+A)<.1&&Math.abs(T+E)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(p+1)/2,z=(M+1)/2,j=(v+1)/2,L=(g+_)/4,I=(x+A)/4,q=(T+E)/4;return D>z&&D>j?D<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(D),l=L/r,c=I/r):z>j?z<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(z),r=L/l,c=q/l):j<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(j),r=I/c,l=q/c),this.set(r,l,c,i),this}let O=Math.sqrt((E-T)*(E-T)+(x-A)*(x-A)+(_-g)*(_-g));return Math.abs(O)<.001&&(O=1),this.x=(E-T)/O,this.y=(x-A)/O,this.z=(_-g)/O,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=wt(this.x,e.x,i.x),this.y=wt(this.y,e.y,i.y),this.z=wt(this.z,e.z,i.z),this.w=wt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=wt(this.x,e,i),this.y=wt(this.y,e,i),this.z=wt(this.z,e,i),this.w=wt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(wt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class A2 extends Hs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new nn(0,0,e,i),this.scissorTest=!1,this.viewport=new nn(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new Pn(l);this.textures=[];const f=r.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new vp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ar extends A2{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Qv extends Pn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ri,this.minFilter=ri,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class w2 extends Pn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ri,this.minFilter=ri,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class il{constructor(e=new pe(1/0,1/0,1/0),i=new pe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(yi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(yi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=yi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,yi):yi.fromBufferAttribute(c,f),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_c.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),_c.copy(r.boundingBox)),_c.applyMatrix4(e.matrixWorld),this.union(_c)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Io),bc.subVectors(this.max,Io),gs.subVectors(e.a,Io),vs.subVectors(e.b,Io),_s.subVectors(e.c,Io),Ya.subVectors(vs,gs),Za.subVectors(_s,vs),Er.subVectors(gs,_s);let i=[0,-Ya.z,Ya.y,0,-Za.z,Za.y,0,-Er.z,Er.y,Ya.z,0,-Ya.x,Za.z,0,-Za.x,Er.z,0,-Er.x,-Ya.y,Ya.x,0,-Za.y,Za.x,0,-Er.y,Er.x,0];return!Ld(i,gs,vs,_s,bc)||(i=[1,0,0,0,1,0,0,0,1],!Ld(i,gs,vs,_s,bc))?!1:(yc.crossVectors(Ya,Za),i=[yc.x,yc.y,yc.z],Ld(i,gs,vs,_s,bc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const sa=[new pe,new pe,new pe,new pe,new pe,new pe,new pe,new pe],yi=new pe,_c=new il,gs=new pe,vs=new pe,_s=new pe,Ya=new pe,Za=new pe,Er=new pe,Io=new pe,bc=new pe,yc=new pe,Tr=new pe;function Ld(s,e,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){Tr.fromArray(s,c);const h=l.x*Math.abs(Tr.x)+l.y*Math.abs(Tr.y)+l.z*Math.abs(Tr.z),m=e.dot(Tr),p=i.dot(Tr),g=r.dot(Tr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const R2=new il,Ho=new pe,Od=new pe;class lu{constructor(e=new pe,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):R2.setFromPoints(e).getCenter(r);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ho.subVectors(e,this.center);const i=Ho.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Ho,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Od.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ho.copy(e.center).add(Od)),this.expandByPoint(Ho.copy(e.center).sub(Od))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const oa=new pe,Fd=new pe,Sc=new pe,Ka=new pe,zd=new pe,Mc=new pe,Pd=new pe;class Jv{constructor(e=new pe,i=new pe(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=oa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(oa.copy(this.origin).addScaledVector(this.direction,i),oa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Fd.copy(e).add(i).multiplyScalar(.5),Sc.copy(i).sub(e).normalize(),Ka.copy(this.origin).sub(Fd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Sc),h=Ka.dot(this.direction),m=-Ka.dot(Sc),p=Ka.lengthSq(),g=Math.abs(1-f*f);let x,_,M,T;if(g>0)if(x=f*m-h,_=f*h-m,T=c*g,x>=0)if(_>=-T)if(_<=T){const A=1/g;x*=A,_*=A,M=x*(x+f*_+2*h)+_*(f*x+_+2*m)+p}else _=c,x=Math.max(0,-(f*_+h)),M=-x*x+_*(_+2*m)+p;else _=-c,x=Math.max(0,-(f*_+h)),M=-x*x+_*(_+2*m)+p;else _<=-T?(x=Math.max(0,-(-f*c+h)),_=x>0?-c:Math.min(Math.max(-c,-m),c),M=-x*x+_*(_+2*m)+p):_<=T?(x=0,_=Math.min(Math.max(-c,-m),c),M=_*(_+2*m)+p):(x=Math.max(0,-(f*c+h)),_=x>0?c:Math.min(Math.max(-c,-m),c),M=-x*x+_*(_+2*m)+p);else _=f>0?-c:c,x=Math.max(0,-(f*_+h)),M=-x*x+_*(_+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Fd).addScaledVector(Sc,_),M}intersectSphere(e,i){oa.subVectors(e.center,this.origin);const r=oa.dot(this.direction),l=oa.dot(oa)-r*r,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=r-f,m=r+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,f,h,m;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,_=this.origin;return p>=0?(r=(e.min.x-_.x)*p,l=(e.max.x-_.x)*p):(r=(e.max.x-_.x)*p,l=(e.min.x-_.x)*p),g>=0?(c=(e.min.y-_.y)*g,f=(e.max.y-_.y)*g):(c=(e.max.y-_.y)*g,f=(e.min.y-_.y)*g),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),x>=0?(h=(e.min.z-_.z)*x,m=(e.max.z-_.z)*x):(h=(e.max.z-_.z)*x,m=(e.min.z-_.z)*x),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,oa)!==null}intersectTriangle(e,i,r,l,c){zd.subVectors(i,e),Mc.subVectors(r,e),Pd.crossVectors(zd,Mc);let f=this.direction.dot(Pd),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Ka.subVectors(this.origin,e);const m=h*this.direction.dot(Mc.crossVectors(Ka,Mc));if(m<0)return null;const p=h*this.direction.dot(zd.cross(Ka));if(p<0||m+p>f)return null;const g=-h*Ka.dot(Pd);return g<0?null:this.at(g/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hn{constructor(e,i,r,l,c,f,h,m,p,g,x,_,M,T,A,E){hn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,h,m,p,g,x,_,M,T,A,E)}set(e,i,r,l,c,f,h,m,p,g,x,_,M,T,A,E){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=l,v[1]=c,v[5]=f,v[9]=h,v[13]=m,v[2]=p,v[6]=g,v[10]=x,v[14]=_,v[3]=M,v[7]=T,v[11]=A,v[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/bs.setFromMatrixColumn(e,0).length(),c=1/bs.setFromMatrixColumn(e,1).length(),f=1/bs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,f=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const _=f*g,M=f*x,T=h*g,A=h*x;i[0]=m*g,i[4]=-m*x,i[8]=p,i[1]=M+T*p,i[5]=_-A*p,i[9]=-h*m,i[2]=A-_*p,i[6]=T+M*p,i[10]=f*m}else if(e.order==="YXZ"){const _=m*g,M=m*x,T=p*g,A=p*x;i[0]=_+A*h,i[4]=T*h-M,i[8]=f*p,i[1]=f*x,i[5]=f*g,i[9]=-h,i[2]=M*h-T,i[6]=A+_*h,i[10]=f*m}else if(e.order==="ZXY"){const _=m*g,M=m*x,T=p*g,A=p*x;i[0]=_-A*h,i[4]=-f*x,i[8]=T+M*h,i[1]=M+T*h,i[5]=f*g,i[9]=A-_*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(e.order==="ZYX"){const _=f*g,M=f*x,T=h*g,A=h*x;i[0]=m*g,i[4]=T*p-M,i[8]=_*p+A,i[1]=m*x,i[5]=A*p+_,i[9]=M*p-T,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(e.order==="YZX"){const _=f*m,M=f*p,T=h*m,A=h*p;i[0]=m*g,i[4]=A-_*x,i[8]=T*x+M,i[1]=x,i[5]=f*g,i[9]=-h*g,i[2]=-p*g,i[6]=M*x+T,i[10]=_-A*x}else if(e.order==="XZY"){const _=f*m,M=f*p,T=h*m,A=h*p;i[0]=m*g,i[4]=-x,i[8]=p*g,i[1]=_*x+A,i[5]=f*g,i[9]=M*x-T,i[2]=T*x-M,i[6]=h*g,i[10]=A*x+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(C2,e,D2)}lookAt(e,i,r){const l=this.elements;return ni.subVectors(e,i),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Qa.crossVectors(r,ni),Qa.lengthSq()===0&&(Math.abs(r.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Qa.crossVectors(r,ni)),Qa.normalize(),Ec.crossVectors(ni,Qa),l[0]=Qa.x,l[4]=Ec.x,l[8]=ni.x,l[1]=Qa.y,l[5]=Ec.y,l[9]=ni.y,l[2]=Qa.z,l[6]=Ec.z,l[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],h=r[4],m=r[8],p=r[12],g=r[1],x=r[5],_=r[9],M=r[13],T=r[2],A=r[6],E=r[10],v=r[14],O=r[3],D=r[7],z=r[11],j=r[15],L=l[0],I=l[4],q=l[8],N=l[12],R=l[1],F=l[5],k=l[9],te=l[13],$=l[2],de=l[6],P=l[10],K=l[14],Y=l[3],ve=l[7],Se=l[11],B=l[15];return c[0]=f*L+h*R+m*$+p*Y,c[4]=f*I+h*F+m*de+p*ve,c[8]=f*q+h*k+m*P+p*Se,c[12]=f*N+h*te+m*K+p*B,c[1]=g*L+x*R+_*$+M*Y,c[5]=g*I+x*F+_*de+M*ve,c[9]=g*q+x*k+_*P+M*Se,c[13]=g*N+x*te+_*K+M*B,c[2]=T*L+A*R+E*$+v*Y,c[6]=T*I+A*F+E*de+v*ve,c[10]=T*q+A*k+E*P+v*Se,c[14]=T*N+A*te+E*K+v*B,c[3]=O*L+D*R+z*$+j*Y,c[7]=O*I+D*F+z*de+j*ve,c[11]=O*q+D*k+z*P+j*Se,c[15]=O*N+D*te+z*K+j*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],f=e[1],h=e[5],m=e[9],p=e[13],g=e[2],x=e[6],_=e[10],M=e[14],T=e[3],A=e[7],E=e[11],v=e[15];return T*(+c*m*x-l*p*x-c*h*_+r*p*_+l*h*M-r*m*M)+A*(+i*m*M-i*p*_+c*f*_-l*f*M+l*p*g-c*m*g)+E*(+i*p*x-i*h*M-c*f*x+r*f*M+c*h*g-r*p*g)+v*(-l*h*g-i*m*x+i*h*_+l*f*x-r*f*_+r*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],g=e[8],x=e[9],_=e[10],M=e[11],T=e[12],A=e[13],E=e[14],v=e[15],O=x*E*p-A*_*p+A*m*M-h*E*M-x*m*v+h*_*v,D=T*_*p-g*E*p-T*m*M+f*E*M+g*m*v-f*_*v,z=g*A*p-T*x*p+T*h*M-f*A*M-g*h*v+f*x*v,j=T*x*m-g*A*m-T*h*_+f*A*_+g*h*E-f*x*E,L=i*O+r*D+l*z+c*j;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/L;return e[0]=O*I,e[1]=(A*_*c-x*E*c-A*l*M+r*E*M+x*l*v-r*_*v)*I,e[2]=(h*E*c-A*m*c+A*l*p-r*E*p-h*l*v+r*m*v)*I,e[3]=(x*m*c-h*_*c-x*l*p+r*_*p+h*l*M-r*m*M)*I,e[4]=D*I,e[5]=(g*E*c-T*_*c+T*l*M-i*E*M-g*l*v+i*_*v)*I,e[6]=(T*m*c-f*E*c-T*l*p+i*E*p+f*l*v-i*m*v)*I,e[7]=(f*_*c-g*m*c+g*l*p-i*_*p-f*l*M+i*m*M)*I,e[8]=z*I,e[9]=(T*x*c-g*A*c-T*r*M+i*A*M+g*r*v-i*x*v)*I,e[10]=(f*A*c-T*h*c+T*r*p-i*A*p-f*r*v+i*h*v)*I,e[11]=(g*h*c-f*x*c-g*r*p+i*x*p+f*r*M-i*h*M)*I,e[12]=j*I,e[13]=(g*A*l-T*x*l+T*r*_-i*A*_-g*r*E+i*x*E)*I,e[14]=(T*h*l-f*A*l-T*r*m+i*A*m+f*r*E-i*h*E)*I,e[15]=(f*x*l-g*h*l+g*r*m-i*x*m-f*r*_+i*h*_)*I,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=e.x,h=e.y,m=e.z,p=c*f,g=c*h;return this.set(p*f+r,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+r,g*m-l*f,0,p*m-l*h,g*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,f){return this.set(1,r,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,g=f+f,x=h+h,_=c*p,M=c*g,T=c*x,A=f*g,E=f*x,v=h*x,O=m*p,D=m*g,z=m*x,j=r.x,L=r.y,I=r.z;return l[0]=(1-(A+v))*j,l[1]=(M+z)*j,l[2]=(T-D)*j,l[3]=0,l[4]=(M-z)*L,l[5]=(1-(_+v))*L,l[6]=(E+O)*L,l[7]=0,l[8]=(T+D)*I,l[9]=(E-O)*I,l[10]=(1-(_+A))*I,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=bs.set(l[0],l[1],l[2]).length();const f=bs.set(l[4],l[5],l[6]).length(),h=bs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],Si.copy(this);const p=1/c,g=1/f,x=1/h;return Si.elements[0]*=p,Si.elements[1]*=p,Si.elements[2]*=p,Si.elements[4]*=g,Si.elements[5]*=g,Si.elements[6]*=g,Si.elements[8]*=x,Si.elements[9]*=x,Si.elements[10]*=x,i.setFromRotationMatrix(Si),r.x=c,r.y=f,r.z=h,this}makePerspective(e,i,r,l,c,f,h=Pi,m=!1){const p=this.elements,g=2*c/(i-e),x=2*c/(r-l),_=(i+e)/(i-e),M=(r+l)/(r-l);let T,A;if(m)T=c/(f-c),A=f*c/(f-c);else if(h===Pi)T=-(f+c)/(f-c),A=-2*f*c/(f-c);else if(h===eu)T=-f/(f-c),A=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=x,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,f,h=Pi,m=!1){const p=this.elements,g=2/(i-e),x=2/(r-l),_=-(i+e)/(i-e),M=-(r+l)/(r-l);let T,A;if(m)T=1/(f-c),A=f/(f-c);else if(h===Pi)T=-2/(f-c),A=-(f+c)/(f-c);else if(h===eu)T=-1/(f-c),A=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=x,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=T,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const bs=new pe,Si=new hn,C2=new pe(0,0,0),D2=new pe(1,1,1),Qa=new pe,Ec=new pe,ni=new pe,Dg=new hn,Ng=new nl;class ya{constructor(e=0,i=0,r=0,l=ya.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],g=l[9],x=l[2],_=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(wt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(wt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-wt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(wt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Dg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dg,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Ng.setFromEuler(this),this.setFromQuaternion(Ng,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ya.DEFAULT_ORDER="XYZ";class $v{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let N2=0;const Ug=new pe,ys=new nl,la=new hn,Tc=new pe,Go=new pe,U2=new pe,L2=new nl,Lg=new pe(1,0,0),Og=new pe(0,1,0),Fg=new pe(0,0,1),zg={type:"added"},O2={type:"removed"},Ss={type:"childadded",child:null},Bd={type:"childremoved",child:null};class Wn extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:N2++}),this.uuid=tl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wn.DEFAULT_UP.clone();const e=new pe,i=new ya,r=new nl,l=new pe(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new hn},normalMatrix:{value:new gt}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=Wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $v,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ys.setFromAxisAngle(e,i),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,i){return ys.setFromAxisAngle(e,i),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(Lg,e)}rotateY(e){return this.rotateOnAxis(Og,e)}rotateZ(e){return this.rotateOnAxis(Fg,e)}translateOnAxis(e,i){return Ug.copy(e).applyQuaternion(this.quaternion),this.position.add(Ug.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Lg,e)}translateY(e){return this.translateOnAxis(Og,e)}translateZ(e){return this.translateOnAxis(Fg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(la.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Tc.copy(e):Tc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?la.lookAt(Go,Tc,this.up):la.lookAt(Tc,Go,this.up),this.quaternion.setFromRotationMatrix(la),l&&(la.extractRotation(l.matrixWorld),ys.setFromRotationMatrix(la),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(sn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zg),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null):sn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(O2),Bd.child=e,this.dispatchEvent(Bd),Bd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),la.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),la.multiply(e.parent.matrixWorld)),e.applyMatrix4(la),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zg),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,U2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,L2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const x=m[p];c(e.shapes,x)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),g=f(e.images),x=f(e.shapes),_=f(e.skeletons),M=f(e.animations),T=f(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),_.length>0&&(r.skeletons=_),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=l,r;function f(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Wn.DEFAULT_UP=new pe(0,1,0);Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new pe,ca=new pe,Id=new pe,ua=new pe,Ms=new pe,Es=new pe,Pg=new pe,Hd=new pe,Gd=new pe,Vd=new pe,kd=new nn,jd=new nn,Xd=new nn;class Ti{constructor(e=new pe,i=new pe,r=new pe){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Mi.subVectors(e,i),l.cross(Mi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Mi.subVectors(l,i),ca.subVectors(r,i),Id.subVectors(e,i);const f=Mi.dot(Mi),h=Mi.dot(ca),m=Mi.dot(Id),p=ca.dot(ca),g=ca.dot(Id),x=f*p-h*h;if(x===0)return c.set(0,0,0),null;const _=1/x,M=(p*m-h*g)*_,T=(f*g-h*m)*_;return c.set(1-M-T,T,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ua)===null?!1:ua.x>=0&&ua.y>=0&&ua.x+ua.y<=1}static getInterpolation(e,i,r,l,c,f,h,m){return this.getBarycoord(e,i,r,l,ua)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ua.x),m.addScaledVector(f,ua.y),m.addScaledVector(h,ua.z),m)}static getInterpolatedAttribute(e,i,r,l,c,f){return kd.setScalar(0),jd.setScalar(0),Xd.setScalar(0),kd.fromBufferAttribute(e,i),jd.fromBufferAttribute(e,r),Xd.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(kd,c.x),f.addScaledVector(jd,c.y),f.addScaledVector(Xd,c.z),f}static isFrontFacing(e,i,r,l){return Mi.subVectors(r,i),ca.subVectors(e,i),Mi.cross(ca).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),ca.subVectors(this.a,this.b),Mi.cross(ca).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ti.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Ti.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let f,h;Ms.subVectors(l,r),Es.subVectors(c,r),Hd.subVectors(e,r);const m=Ms.dot(Hd),p=Es.dot(Hd);if(m<=0&&p<=0)return i.copy(r);Gd.subVectors(e,l);const g=Ms.dot(Gd),x=Es.dot(Gd);if(g>=0&&x<=g)return i.copy(l);const _=m*x-g*p;if(_<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(r).addScaledVector(Ms,f);Vd.subVectors(e,c);const M=Ms.dot(Vd),T=Es.dot(Vd);if(T>=0&&M<=T)return i.copy(c);const A=M*p-m*T;if(A<=0&&p>=0&&T<=0)return h=p/(p-T),i.copy(r).addScaledVector(Es,h);const E=g*T-M*x;if(E<=0&&x-g>=0&&M-T>=0)return Pg.subVectors(c,l),h=(x-g)/(x-g+(M-T)),i.copy(l).addScaledVector(Pg,h);const v=1/(E+A+_);return f=A*v,h=_*v,i.copy(r).addScaledVector(Ms,f).addScaledVector(Es,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const e_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ja={h:0,s:0,l:0},Ac={h:0,s:0,l:0};function Wd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class zt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ot.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Ot.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ot.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Ot.workingColorSpace){if(e=y2(e,1),i=wt(i,0,1),r=wt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=Wd(f,c,e+1/3),this.g=Wd(f,c,e),this.b=Wd(f,c,e-1/3)}return Ot.colorSpaceToWorking(this,l),this}setStyle(e,i=mi){function r(c){c!==void 0&&parseFloat(c)<1&&ft("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ft("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ft("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=mi){const r=e_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):ft("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}copyLinearToSRGB(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return Ot.workingToColorSpace(Un.copy(this),e),Math.round(wt(Un.r*255,0,255))*65536+Math.round(wt(Un.g*255,0,255))*256+Math.round(wt(Un.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ot.workingColorSpace){Ot.workingToColorSpace(Un.copy(this),i);const r=Un.r,l=Un.g,c=Un.b,f=Math.max(r,l,c),h=Math.min(r,l,c);let m,p;const g=(h+f)/2;if(h===f)m=0,p=0;else{const x=f-h;switch(p=g<=.5?x/(f+h):x/(2-f-h),f){case r:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-r)/x+2;break;case c:m=(r-l)/x+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Ot.workingColorSpace){return Ot.workingToColorSpace(Un.copy(this),i),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=mi){Ot.workingToColorSpace(Un.copy(this),e);const i=Un.r,r=Un.g,l=Un.b;return e!==mi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Ja),this.setHSL(Ja.h+e,Ja.s+i,Ja.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ja),e.getHSL(Ac);const r=Rd(Ja.h,Ac.h,i),l=Rd(Ja.s,Ac.s,i),c=Rd(Ja.l,Ac.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new zt;zt.NAMES=e_;let F2=0;class al extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:F2++}),this.uuid=tl(),this.name="",this.type="Material",this.blending=Ds,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hh,this.blendDst=ph,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){ft(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ft(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(r.blending=this.blending),this.side!==ir&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==hh&&(r.blendSrc=this.blendSrc),this.blendDst!==ph&&(r.blendDst=this.blendDst),this.blendEquation!==Nr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class t_ extends al{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ya,this.combine=Hv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new pe,wc=new ht;let z2=0;class Ai{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:z2++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Mg,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)wc.fromBufferAttribute(this,i),wc.applyMatrix3(e),this.setXY(i,wc.x,wc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Bo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=jn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Bo(i,this.array)),i}setX(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Bo(i,this.array)),i}setY(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Bo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Bo(i,this.array)),i}setW(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),r=jn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),r=jn(r,this.array),l=jn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),r=jn(r,this.array),l=jn(l,this.array),c=jn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mg&&(e.usage=this.usage),e}}class n_ extends Ai{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class i_ extends Ai{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class va extends Ai{constructor(e,i,r){super(new Float32Array(e),i,r)}}let P2=0;const pi=new hn,qd=new Wn,Ts=new pe,ii=new il,Vo=new il,Mn=new pe;class Ii extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:P2++}),this.uuid=tl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kv(e)?i_:n_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new gt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,i,r){return pi.makeTranslation(e,i,r),this.applyMatrix4(pi),this}scale(e,i,r){return pi.makeScale(e,i,r),this.applyMatrix4(pi),this}lookAt(e){return qd.lookAt(e),qd.updateMatrix(),this.applyMatrix4(qd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new va(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new il);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){sn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new pe(-1/0,-1/0,-1/0),new pe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ii.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&sn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){sn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new pe,1/0);return}if(e){const r=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];Vo.setFromBufferAttribute(h),this.morphTargetsRelative?(Mn.addVectors(ii.min,Vo.min),ii.expandByPoint(Mn),Mn.addVectors(ii.max,Vo.max),ii.expandByPoint(Mn)):(ii.expandByPoint(Vo.min),ii.expandByPoint(Vo.max))}ii.getCenter(r);let l=0;for(let c=0,f=e.count;c<f;c++)Mn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(Mn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)Mn.fromBufferAttribute(h,p),m&&(Ts.fromBufferAttribute(e,p),Mn.add(Ts)),l=Math.max(l,r.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&sn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){sn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let q=0;q<r.count;q++)h[q]=new pe,m[q]=new pe;const p=new pe,g=new pe,x=new pe,_=new ht,M=new ht,T=new ht,A=new pe,E=new pe;function v(q,N,R){p.fromBufferAttribute(r,q),g.fromBufferAttribute(r,N),x.fromBufferAttribute(r,R),_.fromBufferAttribute(c,q),M.fromBufferAttribute(c,N),T.fromBufferAttribute(c,R),g.sub(p),x.sub(p),M.sub(_),T.sub(_);const F=1/(M.x*T.y-T.x*M.y);isFinite(F)&&(A.copy(g).multiplyScalar(T.y).addScaledVector(x,-M.y).multiplyScalar(F),E.copy(x).multiplyScalar(M.x).addScaledVector(g,-T.x).multiplyScalar(F),h[q].add(A),h[N].add(A),h[R].add(A),m[q].add(E),m[N].add(E),m[R].add(E))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let q=0,N=O.length;q<N;++q){const R=O[q],F=R.start,k=R.count;for(let te=F,$=F+k;te<$;te+=3)v(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const D=new pe,z=new pe,j=new pe,L=new pe;function I(q){j.fromBufferAttribute(l,q),L.copy(j);const N=h[q];D.copy(N),D.sub(j.multiplyScalar(j.dot(N))).normalize(),z.crossVectors(L,N);const F=z.dot(m[q])<0?-1:1;f.setXYZW(q,D.x,D.y,D.z,F)}for(let q=0,N=O.length;q<N;++q){const R=O[q],F=R.start,k=R.count;for(let te=F,$=F+k;te<$;te+=3)I(e.getX(te+0)),I(e.getX(te+1)),I(e.getX(te+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ai(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let _=0,M=r.count;_<M;_++)r.setXYZ(_,0,0,0);const l=new pe,c=new pe,f=new pe,h=new pe,m=new pe,p=new pe,g=new pe,x=new pe;if(e)for(let _=0,M=e.count;_<M;_+=3){const T=e.getX(_+0),A=e.getX(_+1),E=e.getX(_+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,A),f.fromBufferAttribute(i,E),g.subVectors(f,c),x.subVectors(l,c),g.cross(x),h.fromBufferAttribute(r,T),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,E),h.add(g),m.add(g),p.add(g),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(E,p.x,p.y,p.z)}else for(let _=0,M=i.count;_<M;_+=3)l.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),f.fromBufferAttribute(i,_+2),g.subVectors(f,c),x.subVectors(l,c),g.cross(x),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Mn.fromBufferAttribute(e,i),Mn.normalize(),e.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(h,m){const p=h.array,g=h.itemSize,x=h.normalized,_=new p.constructor(m.length*g);let M=0,T=0;for(let A=0,E=m.length;A<E;A++){h.isInterleavedBufferAttribute?M=m[A]*h.data.stride+h.offset:M=m[A]*g;for(let v=0;v<g;v++)_[T++]=p[M++]}return new Ai(_,g,x)}if(this.index===null)return ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ii,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,x=p.length;g<x;g++){const _=p[g],M=e(_,r);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let x=0,_=p.length;x<_;x++){const M=p[x];g.push(M.toJSON(e.data))}g.length>0&&(l[m]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=e.morphAttributes;for(const p in c){const g=[],x=c[p];for(let _=0,M=x.length;_<M;_++)g.push(x[_].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,g=f.length;p<g;p++){const x=f[p];this.addGroup(x.start,x.count,x.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bg=new hn,Ar=new Jv,Rc=new lu,Ig=new pe,Cc=new pe,Dc=new pe,Nc=new pe,Yd=new pe,Uc=new pe,Hg=new pe,Lc=new pe;class wi extends Wn{constructor(e=new Ii,i=new t_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Uc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],x=c[m];g!==0&&(Yd.fromBufferAttribute(x,e),f?Uc.addScaledVector(Yd,g):Uc.addScaledVector(Yd.sub(i),g))}i.add(Uc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Rc.copy(r.boundingSphere),Rc.applyMatrix4(c),Ar.copy(e.ray).recast(e.near),!(Rc.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(Rc,Ig)===null||Ar.origin.distanceToSquared(Ig)>(e.far-e.near)**2))&&(Bg.copy(c).invert(),Ar.copy(e.ray).applyMatrix4(Bg),!(r.boundingBox!==null&&Ar.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Ar)))}_computeIntersections(e,i,r){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,x=c.attributes.normal,_=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(f))for(let T=0,A=_.length;T<A;T++){const E=_[T],v=f[E.materialIndex],O=Math.max(E.start,M.start),D=Math.min(h.count,Math.min(E.start+E.count,M.start+M.count));for(let z=O,j=D;z<j;z+=3){const L=h.getX(z),I=h.getX(z+1),q=h.getX(z+2);l=Oc(this,v,e,r,p,g,x,L,I,q),l&&(l.faceIndex=Math.floor(z/3),l.face.materialIndex=E.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),A=Math.min(h.count,M.start+M.count);for(let E=T,v=A;E<v;E+=3){const O=h.getX(E),D=h.getX(E+1),z=h.getX(E+2);l=Oc(this,f,e,r,p,g,x,O,D,z),l&&(l.faceIndex=Math.floor(E/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let T=0,A=_.length;T<A;T++){const E=_[T],v=f[E.materialIndex],O=Math.max(E.start,M.start),D=Math.min(m.count,Math.min(E.start+E.count,M.start+M.count));for(let z=O,j=D;z<j;z+=3){const L=z,I=z+1,q=z+2;l=Oc(this,v,e,r,p,g,x,L,I,q),l&&(l.faceIndex=Math.floor(z/3),l.face.materialIndex=E.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),A=Math.min(m.count,M.start+M.count);for(let E=T,v=A;E<v;E+=3){const O=E,D=E+1,z=E+2;l=Oc(this,f,e,r,p,g,x,O,D,z),l&&(l.faceIndex=Math.floor(E/3),i.push(l))}}}}function B2(s,e,i,r,l,c,f,h){let m;if(e.side===Xn?m=r.intersectTriangle(f,c,l,!0,h):m=r.intersectTriangle(l,c,f,e.side===ir,h),m===null)return null;Lc.copy(h),Lc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Lc);return p<i.near||p>i.far?null:{distance:p,point:Lc.clone(),object:s}}function Oc(s,e,i,r,l,c,f,h,m,p){s.getVertexPosition(h,Cc),s.getVertexPosition(m,Dc),s.getVertexPosition(p,Nc);const g=B2(s,e,i,r,Cc,Dc,Nc,Hg);if(g){const x=new pe;Ti.getBarycoord(Hg,Cc,Dc,Nc,x),l&&(g.uv=Ti.getInterpolatedAttribute(l,h,m,p,x,new ht)),c&&(g.uv1=Ti.getInterpolatedAttribute(c,h,m,p,x,new ht)),f&&(g.normal=Ti.getInterpolatedAttribute(f,h,m,p,x,new pe),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const _={a:h,b:m,c:p,normal:new pe,materialIndex:0};Ti.getNormal(Cc,Dc,Nc,_.normal),g.face=_,g.barycoord=x}return g}class rl extends Ii{constructor(e=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],x=[];let _=0,M=0;T("z","y","x",-1,-1,r,i,e,f,c,0),T("z","y","x",1,-1,r,i,-e,f,c,1),T("x","z","y",1,1,e,r,i,l,f,2),T("x","z","y",1,-1,e,r,-i,l,f,3),T("x","y","z",1,-1,e,i,r,l,c,4),T("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new va(p,3)),this.setAttribute("normal",new va(g,3)),this.setAttribute("uv",new va(x,2));function T(A,E,v,O,D,z,j,L,I,q,N){const R=z/I,F=j/q,k=z/2,te=j/2,$=L/2,de=I+1,P=q+1;let K=0,Y=0;const ve=new pe;for(let Se=0;Se<P;Se++){const B=Se*F-te;for(let Z=0;Z<de;Z++){const xe=Z*R-k;ve[A]=xe*O,ve[E]=B*D,ve[v]=$,p.push(ve.x,ve.y,ve.z),ve[A]=0,ve[E]=0,ve[v]=L>0?1:-1,g.push(ve.x,ve.y,ve.z),x.push(Z/I),x.push(1-Se/q),K+=1}}for(let Se=0;Se<q;Se++)for(let B=0;B<I;B++){const Z=_+B+de*Se,xe=_+B+de*(Se+1),_e=_+(B+1)+de*(Se+1),Re=_+(B+1)+de*Se;m.push(Z,xe,Re),m.push(xe,_e,Re),Y+=6}h.addGroup(M,Y,N),M+=Y,_+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zs(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function zn(s){const e={};for(let i=0;i<s.length;i++){const r=zs(s[i]);for(const l in r)e[l]=r[l]}return e}function I2(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function a_(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ot.workingColorSpace}const H2={clone:zs,merge:zn};var G2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,V2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bi extends al{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=G2,this.fragmentShader=V2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=I2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class nu extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $a=new pe,Gg=new ht,Vg=new ht;class Ei extends nu{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=ep*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ep*2*Math.atan(Math.tan(wd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){$a.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($a.x,$a.y).multiplyScalar(-e/$a.z),$a.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set($a.x,$a.y).multiplyScalar(-e/$a.z)}getViewSize(e,i){return this.getViewBounds(e,Gg,Vg),i.subVectors(Vg,Gg)}setViewOffset(e,i,r,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(wd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const As=-90,ws=1;class k2 extends Wn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ei(As,ws,e,i);l.layers=this.layers,this.add(l);const c=new Ei(As,ws,e,i);c.layers=this.layers,this.add(c);const f=new Ei(As,ws,e,i);f.layers=this.layers,this.add(f);const h=new Ei(As,ws,e,i);h.layers=this.layers,this.add(h);const m=new Ei(As,ws,e,i);m.layers=this.layers,this.add(m);const p=new Ei(As,ws,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(e===Pi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===eu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,g]=this.children,x=e.getRenderTarget(),_=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,f),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(x,_,M),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class r_ extends Pn{constructor(e=[],i=Ls,r,l,c,f,h,m,p,g){super(e,i,r,l,c,f,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class j2 extends ar{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new r_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new rl(5,5,5),c=new Bi({name:"CubemapFromEquirect",uniforms:zs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Xn,blending:xa});c.uniforms.tEquirect.value=i;const f=new wi(l,c),h=i.minFilter;return i.minFilter===Lr&&(i.minFilter=On),new k2(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,r,l);e.setRenderTarget(c)}}class Fc extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const X2={type:"move"};class Zd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new pe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new pe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new pe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new pe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const A of e.hand.values()){const E=i.getJointPose(A,r),v=this._getHandJoint(p,A);E!==null&&(v.matrix.fromArray(E.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=E.radius),v.visible=E!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],_=g.position.distanceTo(x.position),M=.02,T=.005;p.inputState.pinching&&_>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(X2)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Fc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class kg extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ya,this.environmentIntensity=1,this.environmentRotation=new ya,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class s_ extends Pn{constructor(e=null,i=1,r=1,l,c,f,h,m,p=ri,g=ri,x,_){super(null,f,h,m,p,g,l,c,x,_),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Kd=new pe,W2=new pe,q2=new gt;class Dr{constructor(e=new pe(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Kd.subVectors(r,i).cross(W2.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Kd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||q2.getNormalMatrix(e),l=this.coplanarPoint(Kd).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new lu,Y2=new ht(.5,.5),zc=new pe;class o_{constructor(e=new Dr,i=new Dr,r=new Dr,l=new Dr,c=new Dr,f=new Dr){this.planes=[e,i,r,l,c,f]}set(e,i,r,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Pi,r=!1){const l=this.planes,c=e.elements,f=c[0],h=c[1],m=c[2],p=c[3],g=c[4],x=c[5],_=c[6],M=c[7],T=c[8],A=c[9],E=c[10],v=c[11],O=c[12],D=c[13],z=c[14],j=c[15];if(l[0].setComponents(p-f,M-g,v-T,j-O).normalize(),l[1].setComponents(p+f,M+g,v+T,j+O).normalize(),l[2].setComponents(p+h,M+x,v+A,j+D).normalize(),l[3].setComponents(p-h,M-x,v-A,j-D).normalize(),r)l[4].setComponents(m,_,E,z).normalize(),l[5].setComponents(p-m,M-_,v-E,j-z).normalize();else if(l[4].setComponents(p-m,M-_,v-E,j-z).normalize(),i===Pi)l[5].setComponents(p+m,M+_,v+E,j+z).normalize();else if(i===eu)l[5].setComponents(m,_,E,z).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),wr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){wr.center.set(0,0,0);const i=Y2.distanceTo(e.center);return wr.radius=.7071067811865476+i,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(zc.x=l.normal.x>0?e.max.x:e.min.x,zc.y=l.normal.y>0?e.max.y:e.min.y,zc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(zc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Z2 extends al{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const iu=new pe,au=new pe,jg=new hn,ko=new Jv,Pc=new lu,Qd=new pe,Xg=new pe;class K2 extends Wn{constructor(e=new Ii,i=new Z2){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)iu.fromBufferAttribute(i,l-1),au.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=iu.distanceTo(au);e.setAttribute("lineDistance",new va(r,1))}else ft("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Pc.copy(r.boundingSphere),Pc.applyMatrix4(l),Pc.radius+=c,e.ray.intersectsSphere(Pc)===!1)return;jg.copy(l).invert(),ko.copy(e.ray).applyMatrix4(jg);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,g=r.index,_=r.attributes.position;if(g!==null){const M=Math.max(0,f.start),T=Math.min(g.count,f.start+f.count);for(let A=M,E=T-1;A<E;A+=p){const v=g.getX(A),O=g.getX(A+1),D=Bc(this,e,ko,m,v,O,A);D&&i.push(D)}if(this.isLineLoop){const A=g.getX(T-1),E=g.getX(M),v=Bc(this,e,ko,m,A,E,T-1);v&&i.push(v)}}else{const M=Math.max(0,f.start),T=Math.min(_.count,f.start+f.count);for(let A=M,E=T-1;A<E;A+=p){const v=Bc(this,e,ko,m,A,A+1,A);v&&i.push(v)}if(this.isLineLoop){const A=Bc(this,e,ko,m,T-1,M,T-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Bc(s,e,i,r,l,c,f){const h=s.geometry.attributes.position;if(iu.fromBufferAttribute(h,l),au.fromBufferAttribute(h,c),i.distanceSqToSegment(iu,au,Qd,Xg)>r)return;Qd.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(Qd);if(!(p<e.near||p>e.far))return{distance:p,point:Xg.clone().applyMatrix4(s.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:s}}const Wg=new pe,qg=new pe;class Q2 extends K2{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let l=0,c=i.count;l<c;l+=2)Wg.fromBufferAttribute(i,l),qg.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+Wg.distanceTo(qg);e.setAttribute("lineDistance",new va(r,1))}else ft("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class l_ extends Pn{constructor(e,i,r=Fr,l,c,f,h=ri,m=ri,p,g=Zo,x=1){if(g!==Zo&&g!==Ko)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:x};super(_,l,c,f,h,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class c_ extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Or extends Ii{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,f=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,g=m+1,x=e/h,_=i/m,M=[],T=[],A=[],E=[];for(let v=0;v<g;v++){const O=v*_-f;for(let D=0;D<p;D++){const z=D*x-c;T.push(z,-O,0),A.push(0,0,1),E.push(D/h),E.push(1-v/m)}}for(let v=0;v<m;v++)for(let O=0;O<h;O++){const D=O+p*v,z=O+p*(v+1),j=O+1+p*(v+1),L=O+1+p*v;M.push(D,z,L),M.push(z,j,L)}this.setIndex(M),this.setAttribute("position",new va(T,3)),this.setAttribute("normal",new va(A,3)),this.setAttribute("uv",new va(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ic extends Bi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class J2 extends al{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=l2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $2 extends al{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class e3 extends nu{constructor(e=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,f=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class t3 extends Ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class n3{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function Yg(s,e,i,r){const l=i3(r);switch(i){case Wv:return s*e;case Yv:return s*e/l.components*l.byteLength;case pp:return s*e/l.components*l.byteLength;case mp:return s*e*2/l.components*l.byteLength;case xp:return s*e*2/l.components*l.byteLength;case qv:return s*e*3/l.components*l.byteLength;case xi:return s*e*4/l.components*l.byteLength;case gp:return s*e*4/l.components*l.byteLength;case Xc:case Wc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case qc:case Yc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wh:case Ch:return Math.max(s,16)*Math.max(e,8)/4;case Ah:case Rh:return Math.max(s,8)*Math.max(e,8)/2;case Dh:case Nh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Uh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Lh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Oh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case zh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Bh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Hh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Gh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case kh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case jh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Xh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Wh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case qh:case Yh:case Zh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Kh:case Qh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Jh:case $h:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function i3(s){switch(s){case ba:case Vv:return{byteLength:1,components:1};case qo:case kv:case zr:return{byteLength:2,components:1};case dp:case hp:return{byteLength:2,components:4};case Fr:case fp:case zi:return{byteLength:4,components:1};case jv:case Xv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:up}}));typeof window<"u"&&(window.__THREE__?ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=up);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function u_(){let s=null,e=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function a3(s){const e=new WeakMap;function i(h,m){const p=h.array,g=h.usage,x=p.byteLength,_=s.createBuffer();s.bindBuffer(m,_),s.bufferData(m,p,g),h.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:x}}function r(h,m,p){const g=m.array,x=m.updateRanges;if(s.bindBuffer(p,h),x.length===0)s.bufferSubData(p,0,g);else{x.sort((M,T)=>M.start-T.start);let _=0;for(let M=1;M<x.length;M++){const T=x[_],A=x[M];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++_,x[_]=A)}x.length=_+1;for(let M=0,T=x.length;M<T;M++){const A=x[M];s.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(s.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var r3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,s3=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,o3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,l3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,u3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,f3=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,d3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,h3=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,p3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,m3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,x3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,g3=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,v3=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_3=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,b3=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,y3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,S3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,M3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,E3=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,T3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,A3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,w3=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,R3=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,C3=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,D3=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,N3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,U3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,L3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,O3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,F3="gl_FragColor = linearToOutputTexel( gl_FragColor );",z3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,P3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,B3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,I3=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,H3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,G3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,V3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,k3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,j3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,X3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,W3=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,q3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Y3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Z3=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,K3=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Q3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,J3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$3=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,iM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,aM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_M=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,MM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,EM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,RM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,CM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,DM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,NM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,UM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,LM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,OM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,FM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,HM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,GM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,VM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,kM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,WM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,YM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ZM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,KM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,QM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,JM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$M=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,eE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,iE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_E=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ME=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,TE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,AE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,CE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,LE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vt={alphahash_fragment:r3,alphahash_pars_fragment:s3,alphamap_fragment:o3,alphamap_pars_fragment:l3,alphatest_fragment:c3,alphatest_pars_fragment:u3,aomap_fragment:f3,aomap_pars_fragment:d3,batching_pars_vertex:h3,batching_vertex:p3,begin_vertex:m3,beginnormal_vertex:x3,bsdfs:g3,iridescence_fragment:v3,bumpmap_pars_fragment:_3,clipping_planes_fragment:b3,clipping_planes_pars_fragment:y3,clipping_planes_pars_vertex:S3,clipping_planes_vertex:M3,color_fragment:E3,color_pars_fragment:T3,color_pars_vertex:A3,color_vertex:w3,common:R3,cube_uv_reflection_fragment:C3,defaultnormal_vertex:D3,displacementmap_pars_vertex:N3,displacementmap_vertex:U3,emissivemap_fragment:L3,emissivemap_pars_fragment:O3,colorspace_fragment:F3,colorspace_pars_fragment:z3,envmap_fragment:P3,envmap_common_pars_fragment:B3,envmap_pars_fragment:I3,envmap_pars_vertex:H3,envmap_physical_pars_fragment:Q3,envmap_vertex:G3,fog_vertex:V3,fog_pars_vertex:k3,fog_fragment:j3,fog_pars_fragment:X3,gradientmap_pars_fragment:W3,lightmap_pars_fragment:q3,lights_lambert_fragment:Y3,lights_lambert_pars_fragment:Z3,lights_pars_begin:K3,lights_toon_fragment:J3,lights_toon_pars_fragment:$3,lights_phong_fragment:eM,lights_phong_pars_fragment:tM,lights_physical_fragment:nM,lights_physical_pars_fragment:iM,lights_fragment_begin:aM,lights_fragment_maps:rM,lights_fragment_end:sM,logdepthbuf_fragment:oM,logdepthbuf_pars_fragment:lM,logdepthbuf_pars_vertex:cM,logdepthbuf_vertex:uM,map_fragment:fM,map_pars_fragment:dM,map_particle_fragment:hM,map_particle_pars_fragment:pM,metalnessmap_fragment:mM,metalnessmap_pars_fragment:xM,morphinstance_vertex:gM,morphcolor_vertex:vM,morphnormal_vertex:_M,morphtarget_pars_vertex:bM,morphtarget_vertex:yM,normal_fragment_begin:SM,normal_fragment_maps:MM,normal_pars_fragment:EM,normal_pars_vertex:TM,normal_vertex:AM,normalmap_pars_fragment:wM,clearcoat_normal_fragment_begin:RM,clearcoat_normal_fragment_maps:CM,clearcoat_pars_fragment:DM,iridescence_pars_fragment:NM,opaque_fragment:UM,packing:LM,premultiplied_alpha_fragment:OM,project_vertex:FM,dithering_fragment:zM,dithering_pars_fragment:PM,roughnessmap_fragment:BM,roughnessmap_pars_fragment:IM,shadowmap_pars_fragment:HM,shadowmap_pars_vertex:GM,shadowmap_vertex:VM,shadowmask_pars_fragment:kM,skinbase_vertex:jM,skinning_pars_vertex:XM,skinning_vertex:WM,skinnormal_vertex:qM,specularmap_fragment:YM,specularmap_pars_fragment:ZM,tonemapping_fragment:KM,tonemapping_pars_fragment:QM,transmission_fragment:JM,transmission_pars_fragment:$M,uv_pars_fragment:eE,uv_pars_vertex:tE,uv_vertex:nE,worldpos_vertex:iE,background_vert:aE,background_frag:rE,backgroundCube_vert:sE,backgroundCube_frag:oE,cube_vert:lE,cube_frag:cE,depth_vert:uE,depth_frag:fE,distanceRGBA_vert:dE,distanceRGBA_frag:hE,equirect_vert:pE,equirect_frag:mE,linedashed_vert:xE,linedashed_frag:gE,meshbasic_vert:vE,meshbasic_frag:_E,meshlambert_vert:bE,meshlambert_frag:yE,meshmatcap_vert:SE,meshmatcap_frag:ME,meshnormal_vert:EE,meshnormal_frag:TE,meshphong_vert:AE,meshphong_frag:wE,meshphysical_vert:RE,meshphysical_frag:CE,meshtoon_vert:DE,meshtoon_frag:NE,points_vert:UE,points_frag:LE,shadow_vert:OE,shadow_frag:FE,sprite_vert:zE,sprite_frag:PE},ze={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},Fi={basic:{uniforms:zn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:zn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new zt(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:zn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:zn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:zn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new zt(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:zn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:zn([ze.points,ze.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:zn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:zn([ze.common,ze.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:zn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:zn([ze.sprite,ze.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:zn([ze.common,ze.displacementmap,{referencePosition:{value:new pe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:zn([ze.lights,ze.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Fi.physical={uniforms:zn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const Hc={r:0,b:0,g:0},Rr=new ya,BE=new hn;function IE(s,e,i,r,l,c,f){const h=new zt(0);let m=c===!0?0:1,p,g,x=null,_=0,M=null;function T(D){let z=D.isScene===!0?D.background:null;return z&&z.isTexture&&(z=(D.backgroundBlurriness>0?i:e).get(z)),z}function A(D){let z=!1;const j=T(D);j===null?v(h,m):j&&j.isColor&&(v(j,1),z=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?r.buffers.color.setClear(0,0,0,1,f):L==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||z)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function E(D,z){const j=T(z);j&&(j.isCubeTexture||j.mapping===ou)?(g===void 0&&(g=new wi(new rl(1,1,1),new Bi({name:"BackgroundCubeMaterial",uniforms:zs(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(L,I,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Rr.copy(z.backgroundRotation),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,j.isCubeTexture&&j.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),g.material.uniforms.envMap.value=j,g.material.uniforms.flipEnvMap.value=j.isCubeTexture&&j.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(BE.makeRotationFromEuler(Rr)),g.material.toneMapped=Ot.getTransfer(j.colorSpace)!==Xt,(x!==j||_!==j.version||M!==s.toneMapping)&&(g.material.needsUpdate=!0,x=j,_=j.version,M=s.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null)):j&&j.isTexture&&(p===void 0&&(p=new wi(new Or(2,2),new Bi({name:"BackgroundMaterial",uniforms:zs(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=j,p.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,p.material.toneMapped=Ot.getTransfer(j.colorSpace)!==Xt,j.matrixAutoUpdate===!0&&j.updateMatrix(),p.material.uniforms.uvTransform.value.copy(j.matrix),(x!==j||_!==j.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,x=j,_=j.version,M=s.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function v(D,z){D.getRGB(Hc,a_(s)),r.buffers.color.setClear(Hc.r,Hc.g,Hc.b,z,f)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,z=1){h.set(D),m=z,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(D){m=D,v(h,m)},render:A,addToRenderList:E,dispose:O}}function HE(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=_(null);let c=l,f=!1;function h(R,F,k,te,$){let de=!1;const P=x(te,k,F);c!==P&&(c=P,p(c.object)),de=M(R,te,k,$),de&&T(R,te,k,$),$!==null&&e.update($,s.ELEMENT_ARRAY_BUFFER),(de||f)&&(f=!1,z(R,F,k,te),$!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function m(){return s.createVertexArray()}function p(R){return s.bindVertexArray(R)}function g(R){return s.deleteVertexArray(R)}function x(R,F,k){const te=k.wireframe===!0;let $=r[R.id];$===void 0&&($={},r[R.id]=$);let de=$[F.id];de===void 0&&(de={},$[F.id]=de);let P=de[te];return P===void 0&&(P=_(m()),de[te]=P),P}function _(R){const F=[],k=[],te=[];for(let $=0;$<i;$++)F[$]=0,k[$]=0,te[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:k,attributeDivisors:te,object:R,attributes:{},index:null}}function M(R,F,k,te){const $=c.attributes,de=F.attributes;let P=0;const K=k.getAttributes();for(const Y in K)if(K[Y].location>=0){const Se=$[Y];let B=de[Y];if(B===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(B=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(B=R.instanceColor)),Se===void 0||Se.attribute!==B||B&&Se.data!==B.data)return!0;P++}return c.attributesNum!==P||c.index!==te}function T(R,F,k,te){const $={},de=F.attributes;let P=0;const K=k.getAttributes();for(const Y in K)if(K[Y].location>=0){let Se=de[Y];Se===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(Se=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(Se=R.instanceColor));const B={};B.attribute=Se,Se&&Se.data&&(B.data=Se.data),$[Y]=B,P++}c.attributes=$,c.attributesNum=P,c.index=te}function A(){const R=c.newAttributes;for(let F=0,k=R.length;F<k;F++)R[F]=0}function E(R){v(R,0)}function v(R,F){const k=c.newAttributes,te=c.enabledAttributes,$=c.attributeDivisors;k[R]=1,te[R]===0&&(s.enableVertexAttribArray(R),te[R]=1),$[R]!==F&&(s.vertexAttribDivisor(R,F),$[R]=F)}function O(){const R=c.newAttributes,F=c.enabledAttributes;for(let k=0,te=F.length;k<te;k++)F[k]!==R[k]&&(s.disableVertexAttribArray(k),F[k]=0)}function D(R,F,k,te,$,de,P){P===!0?s.vertexAttribIPointer(R,F,k,$,de):s.vertexAttribPointer(R,F,k,te,$,de)}function z(R,F,k,te){A();const $=te.attributes,de=k.getAttributes(),P=F.defaultAttributeValues;for(const K in de){const Y=de[K];if(Y.location>=0){let ve=$[K];if(ve===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(ve=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(ve=R.instanceColor)),ve!==void 0){const Se=ve.normalized,B=ve.itemSize,Z=e.get(ve);if(Z===void 0)continue;const xe=Z.buffer,_e=Z.type,Re=Z.bytesPerElement,ie=_e===s.INT||_e===s.UNSIGNED_INT||ve.gpuType===fp;if(ve.isInterleavedBufferAttribute){const oe=ve.data,Ee=oe.stride,Le=ve.offset;if(oe.isInstancedInterleavedBuffer){for(let Pe=0;Pe<Y.locationSize;Pe++)v(Y.location+Pe,oe.meshPerAttribute);R.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Pe=0;Pe<Y.locationSize;Pe++)E(Y.location+Pe);s.bindBuffer(s.ARRAY_BUFFER,xe);for(let Pe=0;Pe<Y.locationSize;Pe++)D(Y.location+Pe,B/Y.locationSize,_e,Se,Ee*Re,(Le+B/Y.locationSize*Pe)*Re,ie)}else{if(ve.isInstancedBufferAttribute){for(let oe=0;oe<Y.locationSize;oe++)v(Y.location+oe,ve.meshPerAttribute);R.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let oe=0;oe<Y.locationSize;oe++)E(Y.location+oe);s.bindBuffer(s.ARRAY_BUFFER,xe);for(let oe=0;oe<Y.locationSize;oe++)D(Y.location+oe,B/Y.locationSize,_e,Se,B*Re,B/Y.locationSize*oe*Re,ie)}}else if(P!==void 0){const Se=P[K];if(Se!==void 0)switch(Se.length){case 2:s.vertexAttrib2fv(Y.location,Se);break;case 3:s.vertexAttrib3fv(Y.location,Se);break;case 4:s.vertexAttrib4fv(Y.location,Se);break;default:s.vertexAttrib1fv(Y.location,Se)}}}}O()}function j(){q();for(const R in r){const F=r[R];for(const k in F){const te=F[k];for(const $ in te)g(te[$].object),delete te[$];delete F[k]}delete r[R]}}function L(R){if(r[R.id]===void 0)return;const F=r[R.id];for(const k in F){const te=F[k];for(const $ in te)g(te[$].object),delete te[$];delete F[k]}delete r[R.id]}function I(R){for(const F in r){const k=r[F];if(k[R.id]===void 0)continue;const te=k[R.id];for(const $ in te)g(te[$].object),delete te[$];delete k[R.id]}}function q(){N(),f=!0,c!==l&&(c=l,p(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:q,resetDefaultState:N,dispose:j,releaseStatesOfGeometry:L,releaseStatesOfProgram:I,initAttributes:A,enableAttribute:E,disableUnusedAttributes:O}}function GE(s,e,i){let r;function l(p){r=p}function c(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function f(p,g,x){x!==0&&(s.drawArraysInstanced(r,p,g,x),i.update(g,r,x))}function h(p,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,x);let M=0;for(let T=0;T<x;T++)M+=g[T];i.update(M,r,1)}function m(p,g,x,_){if(x===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<p.length;T++)f(p[T],g[T],_[T]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,g,0,_,0,x);let T=0;for(let A=0;A<x;A++)T+=g[A]*_[A];i.update(T,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function VE(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(I){return!(I!==xi&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const q=I===zr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==ba&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==zi&&!q)}function m(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(ft("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const x=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),E=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),O=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),z=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),j=T>0,L=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:_,maxTextures:M,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:E,maxAttributes:v,maxVertexUniforms:O,maxVaryings:D,maxFragmentUniforms:z,vertexTextures:j,maxSamples:L}}function kE(s){const e=this;let i=null,r=0,l=!1,c=!1;const f=new Dr,h=new gt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,_){const M=x.length!==0||_||r!==0||l;return l=_,r=x.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,_){i=g(x,_,0)},this.setState=function(x,_,M){const T=x.clippingPlanes,A=x.clipIntersection,E=x.clipShadows,v=s.get(x);if(!l||T===null||T.length===0||c&&!E)c?g(null):p();else{const O=c?0:r,D=O*4;let z=v.clippingState||null;m.value=z,z=g(T,_,D,M);for(let j=0;j!==D;++j)z[j]=i[j];v.clippingState=z,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(x,_,M,T){const A=x!==null?x.length:0;let E=null;if(A!==0){if(E=m.value,T!==!0||E===null){const v=M+A*4,O=_.matrixWorldInverse;h.getNormalMatrix(O),(E===null||E.length<v)&&(E=new Float32Array(v));for(let D=0,z=M;D!==A;++D,z+=4)f.copy(x[D]).applyMatrix4(O,h),f.normal.toArray(E,z),E[z+3]=f.constant}m.value=E,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,E}}function jE(s){let e=new WeakMap;function i(f,h){return h===Sh?f.mapping=Ls:h===Mh&&(f.mapping=Os),f}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===Sh||h===Mh)if(e.has(f)){const m=e.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new j2(m.height);return p.fromEquirectangularTexture(s,f),e.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const tr=4,Zg=[.125,.215,.35,.446,.526,.582],Ur=20,XE=256,jo=new e3,Kg=new zt;let Jd=null,$d=0,eh=0,th=!1;const WE=new pe;class Qg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:f=256,position:h=WE}=c;Jd=this._renderer.getRenderTarget(),$d=this._renderer.getActiveCubeFace(),eh=this._renderer.getActiveMipmapLevel(),th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ev(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$g(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Jd,$d,eh),this._renderer.xr.enabled=th,e.scissorTest=!1,Rs(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ls||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jd=this._renderer.getRenderTarget(),$d=this._renderer.getActiveCubeFace(),eh=this._renderer.getActiveMipmapLevel(),th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:On,minFilter:On,generateMipmaps:!1,type:zr,format:xi,colorSpace:Fs,depthBuffer:!1},l=Jg(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jg(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=qE(c)),this._blurMaterial=ZE(c,e,i),this._ggxMaterial=YE(c,e,i)}return l}_compileMaterial(e){const i=new wi(new Ii,e);this._renderer.compile(i,jo)}_sceneToCubeUV(e,i,r,l,c){const m=new Ei(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,_=x.autoClear,M=x.toneMapping;x.getClearColor(Kg),x.toneMapping=nr,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wi(new rl,new t_({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,E=A.material;let v=!1;const O=e.background;O?O.isColor&&(E.color.copy(O),e.background=null,v=!0):(E.color.copy(Kg),v=!0);for(let D=0;D<6;D++){const z=D%3;z===0?(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[D],c.y,c.z)):z===1?(m.up.set(0,0,p[D]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[D],c.z)):(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[D]));const j=this._cubeSize;Rs(l,z*j,D>2?j:0,j,j),x.setRenderTarget(l),v&&x.render(A,m),x.render(e,m)}x.toneMapping=M,x.autoClear=_,e.background=O}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Ls||e.mapping===Os;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=ev()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$g());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Rs(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,jo)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[r];h.material=f;const m=f.uniforms,p=r/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),x=Math.sqrt(p*p-g*g),_=.05+p*.95,M=x*_,{_lodMax:T}=this,A=this._sizeLods[r],E=3*A*(r>T-tr?r-T+tr:0),v=4*(this._cubeSize-A);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=T-i,Rs(c,E,v,3*A,2*A),l.setRenderTarget(c),l.render(h,jo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-r,Rs(e,E,v,3*A,2*A),l.setRenderTarget(e),l.render(h,jo)}_blur(e,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,r,l,"latitudinal",c),this._halfBlur(f,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&sn("blur direction must be either latitudinal or longitudinal!");const g=3,x=this._lodMeshes[l];x.material=p;const _=p.uniforms,M=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Ur-1),A=c/T,E=isFinite(c)?1+Math.floor(g*A):Ur;E>Ur&&ft(`sigmaRadians, ${c}, is too large and will clip, as it requested ${E} samples when the maximum is set to ${Ur}`);const v=[];let O=0;for(let I=0;I<Ur;++I){const q=I/A,N=Math.exp(-q*q/2);v.push(N),I===0?O+=N:I<E&&(O+=2*N)}for(let I=0;I<v.length;I++)v[I]=v[I]/O;_.envMap.value=e.texture,_.samples.value=E,_.weights.value=v,_.latitudinal.value=f==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:D}=this;_.dTheta.value=T,_.mipInt.value=D-r;const z=this._sizeLods[l],j=3*z*(l>D-tr?l-D+tr:0),L=4*(this._cubeSize-z);Rs(i,j,L,3*z,2*z),m.setRenderTarget(i),m.render(x,jo)}}function qE(s){const e=[],i=[],r=[];let l=s;const c=s-tr+1+Zg.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);e.push(h);let m=1/h;f>s-tr?m=Zg[f-s+tr-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),g=-p,x=1+p,_=[g,g,x,g,x,x,g,g,x,x,g,x],M=6,T=6,A=3,E=2,v=1,O=new Float32Array(A*T*M),D=new Float32Array(E*T*M),z=new Float32Array(v*T*M);for(let L=0;L<M;L++){const I=L%3*2/3-1,q=L>2?0:-1,N=[I,q,0,I+2/3,q,0,I+2/3,q+1,0,I,q,0,I+2/3,q+1,0,I,q+1,0];O.set(N,A*T*L),D.set(_,E*T*L);const R=[L,L,L,L,L,L];z.set(R,v*T*L)}const j=new Ii;j.setAttribute("position",new Ai(O,A)),j.setAttribute("uv",new Ai(D,E)),j.setAttribute("faceIndex",new Ai(z,v)),r.push(new wi(j,null)),l>tr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function Jg(s,e,i){const r=new ar(s,e,i);return r.texture.mapping=ou,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Rs(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function YE(s,e,i){return new Bi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:XE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function ZE(s,e,i){const r=new Float32Array(Ur),l=new pe(0,1,0);return new Bi({name:"SphericalGaussianBlur",defines:{n:Ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function $g(){return new Bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function ev(){return new Bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function cu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function KE(s){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===Sh||m===Mh,g=m===Ls||m===Os;if(p||g){let x=e.get(h);const _=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return i===null&&(i=new Qg(s)),x=p?i.fromEquirectangular(h,x):i.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,e.set(h,x),x.texture;if(x!==void 0)return x.texture;{const M=h.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new Qg(s)),x=p?i.fromEquirectangular(h):i.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,e.set(h,x),h.addEventListener("dispose",c),x.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function QE(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Qo("WebGLRenderer: "+r+" extension not supported."),l}}}function JE(s,e,i,r){const l={},c=new WeakMap;function f(x){const _=x.target;_.index!==null&&e.remove(_.index);for(const T in _.attributes)e.remove(_.attributes[T]);_.removeEventListener("dispose",f),delete l[_.id];const M=c.get(_);M&&(e.remove(M),c.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function h(x,_){return l[_.id]===!0||(_.addEventListener("dispose",f),l[_.id]=!0,i.memory.geometries++),_}function m(x){const _=x.attributes;for(const M in _)e.update(_[M],s.ARRAY_BUFFER)}function p(x){const _=[],M=x.index,T=x.attributes.position;let A=0;if(M!==null){const O=M.array;A=M.version;for(let D=0,z=O.length;D<z;D+=3){const j=O[D+0],L=O[D+1],I=O[D+2];_.push(j,L,L,I,I,j)}}else if(T!==void 0){const O=T.array;A=T.version;for(let D=0,z=O.length/3-1;D<z;D+=3){const j=D+0,L=D+1,I=D+2;_.push(j,L,L,I,I,j)}}else return;const E=new(Kv(_)?i_:n_)(_,1);E.version=A;const v=c.get(x);v&&e.remove(v),c.set(x,E)}function g(x){const _=c.get(x);if(_){const M=x.index;M!==null&&_.version<M.version&&p(x)}else p(x);return c.get(x)}return{get:h,update:m,getWireframeAttribute:g}}function $E(s,e,i){let r;function l(_){r=_}let c,f;function h(_){c=_.type,f=_.bytesPerElement}function m(_,M){s.drawElements(r,M,c,_*f),i.update(M,r,1)}function p(_,M,T){T!==0&&(s.drawElementsInstanced(r,M,c,_*f,T),i.update(M,r,T))}function g(_,M,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,_,0,T);let E=0;for(let v=0;v<T;v++)E+=M[v];i.update(E,r,1)}function x(_,M,T,A){if(T===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let v=0;v<_.length;v++)p(_[v]/f,M[v],A[v]);else{E.multiDrawElementsInstancedWEBGL(r,M,0,c,_,0,A,0,T);let v=0;for(let O=0;O<T;O++)v+=M[O]*A[O];i.update(v,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function eT(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,h){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:sn("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function tT(s,e,i){const r=new WeakMap,l=new nn;function c(f,h,m){const p=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=g!==void 0?g.length:0;let _=r.get(h);if(_===void 0||_.count!==x){let R=function(){q.dispose(),r.delete(h),h.removeEventListener("dispose",R)};var M=R;_!==void 0&&_.texture.dispose();const T=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let z=0;T===!0&&(z=1),A===!0&&(z=2),E===!0&&(z=3);let j=h.attributes.position.count*z,L=1;j>e.maxTextureSize&&(L=Math.ceil(j/e.maxTextureSize),j=e.maxTextureSize);const I=new Float32Array(j*L*4*x),q=new Qv(I,j,L,x);q.type=zi,q.needsUpdate=!0;const N=z*4;for(let F=0;F<x;F++){const k=v[F],te=O[F],$=D[F],de=j*L*4*F;for(let P=0;P<k.count;P++){const K=P*N;T===!0&&(l.fromBufferAttribute(k,P),I[de+K+0]=l.x,I[de+K+1]=l.y,I[de+K+2]=l.z,I[de+K+3]=0),A===!0&&(l.fromBufferAttribute(te,P),I[de+K+4]=l.x,I[de+K+5]=l.y,I[de+K+6]=l.z,I[de+K+7]=0),E===!0&&(l.fromBufferAttribute($,P),I[de+K+8]=l.x,I[de+K+9]=l.y,I[de+K+10]=l.z,I[de+K+11]=$.itemSize===4?l.w:1)}}_={count:x,texture:q,size:new ht(j,L)},r.set(h,_),h.addEventListener("dispose",R)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let T=0;for(let E=0;E<p.length;E++)T+=p[E];const A=h.morphTargetsRelative?1:1-T;m.getUniforms().setValue(s,"morphTargetBaseInfluence",A),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:c}}function nT(s,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,g=m.geometry,x=e.get(m,g);if(l.get(x)!==p&&(e.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const _=m.skeleton;l.get(_)!==p&&(_.update(),l.set(_,p))}return x}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const f_=new Pn,tv=new l_(1,1),d_=new Qv,h_=new w2,p_=new r_,nv=[],iv=[],av=new Float32Array(16),rv=new Float32Array(9),sv=new Float32Array(4);function Gs(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=nv[l];if(c===void 0&&(c=new Float32Array(l),nv[l]=c),e!==0){r.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=i,s[f].toArray(c,h)}return c}function gn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function vn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function uu(s,e){let i=iv[e];i===void 0&&(i=new Int32Array(e),iv[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function iT(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function aT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;s.uniform2fv(this.addr,e),vn(i,e)}}function rT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(gn(i,e))return;s.uniform3fv(this.addr,e),vn(i,e)}}function sT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;s.uniform4fv(this.addr,e),vn(i,e)}}function oT(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),vn(i,e)}else{if(gn(i,r))return;sv.set(r),s.uniformMatrix2fv(this.addr,!1,sv),vn(i,r)}}function lT(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),vn(i,e)}else{if(gn(i,r))return;rv.set(r),s.uniformMatrix3fv(this.addr,!1,rv),vn(i,r)}}function cT(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),vn(i,e)}else{if(gn(i,r))return;av.set(r),s.uniformMatrix4fv(this.addr,!1,av),vn(i,r)}}function uT(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function fT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;s.uniform2iv(this.addr,e),vn(i,e)}}function dT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;s.uniform3iv(this.addr,e),vn(i,e)}}function hT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;s.uniform4iv(this.addr,e),vn(i,e)}}function pT(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function mT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;s.uniform2uiv(this.addr,e),vn(i,e)}}function xT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;s.uniform3uiv(this.addr,e),vn(i,e)}}function gT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;s.uniform4uiv(this.addr,e),vn(i,e)}}function vT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(tv.compareFunction=Zv,c=tv):c=f_,i.setTexture2D(e||c,l)}function _T(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||h_,l)}function bT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||p_,l)}function yT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||d_,l)}function ST(s){switch(s){case 5126:return iT;case 35664:return aT;case 35665:return rT;case 35666:return sT;case 35674:return oT;case 35675:return lT;case 35676:return cT;case 5124:case 35670:return uT;case 35667:case 35671:return fT;case 35668:case 35672:return dT;case 35669:case 35673:return hT;case 5125:return pT;case 36294:return mT;case 36295:return xT;case 36296:return gT;case 35678:case 36198:case 36298:case 36306:case 35682:return vT;case 35679:case 36299:case 36307:return _T;case 35680:case 36300:case 36308:case 36293:return bT;case 36289:case 36303:case 36311:case 36292:return yT}}function MT(s,e){s.uniform1fv(this.addr,e)}function ET(s,e){const i=Gs(e,this.size,2);s.uniform2fv(this.addr,i)}function TT(s,e){const i=Gs(e,this.size,3);s.uniform3fv(this.addr,i)}function AT(s,e){const i=Gs(e,this.size,4);s.uniform4fv(this.addr,i)}function wT(s,e){const i=Gs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function RT(s,e){const i=Gs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function CT(s,e){const i=Gs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function DT(s,e){s.uniform1iv(this.addr,e)}function NT(s,e){s.uniform2iv(this.addr,e)}function UT(s,e){s.uniform3iv(this.addr,e)}function LT(s,e){s.uniform4iv(this.addr,e)}function OT(s,e){s.uniform1uiv(this.addr,e)}function FT(s,e){s.uniform2uiv(this.addr,e)}function zT(s,e){s.uniform3uiv(this.addr,e)}function PT(s,e){s.uniform4uiv(this.addr,e)}function BT(s,e,i){const r=this.cache,l=e.length,c=uu(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let f=0;f!==l;++f)i.setTexture2D(e[f]||f_,c[f])}function IT(s,e,i){const r=this.cache,l=e.length,c=uu(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||h_,c[f])}function HT(s,e,i){const r=this.cache,l=e.length,c=uu(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||p_,c[f])}function GT(s,e,i){const r=this.cache,l=e.length,c=uu(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||d_,c[f])}function VT(s){switch(s){case 5126:return MT;case 35664:return ET;case 35665:return TT;case 35666:return AT;case 35674:return wT;case 35675:return RT;case 35676:return CT;case 5124:case 35670:return DT;case 35667:case 35671:return NT;case 35668:case 35672:return UT;case 35669:case 35673:return LT;case 5125:return OT;case 36294:return FT;case 36295:return zT;case 36296:return PT;case 35678:case 36198:case 36298:case 36306:case 35682:return BT;case 35679:case 36299:case 36307:return IT;case 35680:case 36300:case 36308:case 36293:return HT;case 36289:case 36303:case 36311:case 36292:return GT}}class kT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=ST(i.type)}}class jT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=VT(i.type)}}class XT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,i[h.id],r)}}}const nh=/(\w+)(\])?(\[|\.)?/g;function ov(s,e){s.seq.push(e),s.map[e.id]=e}function WT(s,e,i){const r=s.name,l=r.length;for(nh.lastIndex=0;;){const c=nh.exec(r),f=nh.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){ov(i,p===void 0?new kT(h,s,e):new jT(h,s,e));break}else{let x=i.map[h];x===void 0&&(x=new XT(h),ov(i,x)),i=x}}}class Zc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),f=e.getUniformLocation(i,c.name);WT(c,f,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&r.push(f)}return r}}function lv(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const qT=37297;let YT=0;function ZT(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const h=f+1;r.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return r.join(`
`)}const cv=new gt;function KT(s){Ot._getMatrix(cv,Ot.workingColorSpace,s);const e=`mat3( ${cv.elements.map(i=>i.toFixed(4))} )`;switch(Ot.getTransfer(s)){case $c:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return ft("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function uv(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+ZT(s.getShaderSource(e),h)}else return c}function QT(s,e){const i=KT(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function JT(s,e){let i;switch(e){case e2:i="Linear";break;case t2:i="Reinhard";break;case n2:i="Cineon";break;case i2:i="ACESFilmic";break;case r2:i="AgX";break;case s2:i="Neutral";break;case a2:i="Custom";break;default:ft("WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Gc=new pe;function $T(){Ot.getLuminanceCoefficients(Gc);const s=Gc.x.toFixed(4),e=Gc.y.toFixed(4),i=Gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function tA(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function nA(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),f=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:s.getAttribLocation(e,f),locationSize:h}}return i}function Xo(s){return s!==""}function fv(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dv(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iA=/^[ \t]*#include +<([\w\d./]+)>/gm;function tp(s){return s.replace(iA,rA)}const aA=new Map;function rA(s,e){let i=vt[e];if(i===void 0){const r=aA.get(e);if(r!==void 0)i=vt[r],ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return tp(i)}const sA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hv(s){return s.replace(sA,oA)}function oA(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function pv(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lA(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Iv?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===LS?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===da&&(e="SHADOWMAP_TYPE_VSM"),e}function cA(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ls:case Os:e="ENVMAP_TYPE_CUBE";break;case ou:e="ENVMAP_TYPE_CUBE_UV";break}return e}function uA(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Os:e="ENVMAP_MODE_REFRACTION";break}return e}function fA(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Hv:e="ENVMAP_BLENDING_MULTIPLY";break;case JS:e="ENVMAP_BLENDING_MIX";break;case $S:e="ENVMAP_BLENDING_ADD";break}return e}function dA(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function hA(s,e,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=lA(i),p=cA(i),g=uA(i),x=fA(i),_=dA(i),M=eA(i),T=tA(c),A=l.createProgram();let E,v,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(E=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Xo).join(`
`),E.length>0&&(E+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Xo).join(`
`),v.length>0&&(v+=`
`)):(E=[pv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),v=[pv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==nr?"#define TONE_MAPPING":"",i.toneMapping!==nr?vt.tonemapping_pars_fragment:"",i.toneMapping!==nr?JT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,QT("linearToOutputTexel",i.outputColorSpace),$T(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Xo).join(`
`)),f=tp(f),f=fv(f,i),f=dv(f,i),h=tp(h),h=fv(h,i),h=dv(h,i),f=hv(f),h=hv(h),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,E=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,v=["#define varying in",i.glslVersion===Eg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Eg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const D=O+E+f,z=O+v+h,j=lv(l,l.VERTEX_SHADER,D),L=lv(l,l.FRAGMENT_SHADER,z);l.attachShader(A,j),l.attachShader(A,L),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function I(F){if(s.debug.checkShaderErrors){const k=l.getProgramInfoLog(A)||"",te=l.getShaderInfoLog(j)||"",$=l.getShaderInfoLog(L)||"",de=k.trim(),P=te.trim(),K=$.trim();let Y=!0,ve=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,A,j,L);else{const Se=uv(l,j,"vertex"),B=uv(l,L,"fragment");sn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+de+`
`+Se+`
`+B)}else de!==""?ft("WebGLProgram: Program Info Log:",de):(P===""||K==="")&&(ve=!1);ve&&(F.diagnostics={runnable:Y,programLog:de,vertexShader:{log:P,prefix:E},fragmentShader:{log:K,prefix:v}})}l.deleteShader(j),l.deleteShader(L),q=new Zc(l,A),N=nA(l,A)}let q;this.getUniforms=function(){return q===void 0&&I(this),q};let N;this.getAttributes=function(){return N===void 0&&I(this),N};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(A,qT)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=YT++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=j,this.fragmentShader=L,this}let pA=0;class mA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new xA(e),i.set(e,r)),r}}class xA{constructor(e){this.id=pA++,this.code=e,this.usedTimes=0}}function gA(s,e,i,r,l,c,f){const h=new $v,m=new mA,p=new Set,g=[],x=l.logarithmicDepthBuffer,_=l.vertexTextures;let M=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(N){return p.add(N),N===0?"uv":`uv${N}`}function E(N,R,F,k,te){const $=k.fog,de=te.geometry,P=N.isMeshStandardMaterial?k.environment:null,K=(N.isMeshStandardMaterial?i:e).get(N.envMap||P),Y=K&&K.mapping===ou?K.image.height:null,ve=T[N.type];N.precision!==null&&(M=l.getMaxPrecision(N.precision),M!==N.precision&&ft("WebGLProgram.getParameters:",N.precision,"not supported, using",M,"instead."));const Se=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,B=Se!==void 0?Se.length:0;let Z=0;de.morphAttributes.position!==void 0&&(Z=1),de.morphAttributes.normal!==void 0&&(Z=2),de.morphAttributes.color!==void 0&&(Z=3);let xe,_e,Re,ie;if(ve){const Dt=Fi[ve];xe=Dt.vertexShader,_e=Dt.fragmentShader}else xe=N.vertexShader,_e=N.fragmentShader,m.update(N),Re=m.getVertexShaderID(N),ie=m.getFragmentShaderID(N);const oe=s.getRenderTarget(),Ee=s.state.buffers.depth.getReversed(),Le=te.isInstancedMesh===!0,Pe=te.isBatchedMesh===!0,nt=!!N.map,Rt=!!N.matcap,je=!!K,qe=!!N.aoMap,H=!!N.lightMap,at=!!N.bumpMap,dt=!!N.normalMap,_t=!!N.displacementMap,Ge=!!N.emissiveMap,Ht=!!N.metalnessMap,Ke=!!N.roughnessMap,ot=N.anisotropy>0,U=N.clearcoat>0,b=N.dispersion>0,G=N.iridescence>0,ne=N.sheen>0,me=N.transmission>0,le=ot&&!!N.anisotropyMap,Be=U&&!!N.clearcoatMap,Ue=U&&!!N.clearcoatNormalMap,Qe=U&&!!N.clearcoatRoughnessMap,Ye=G&&!!N.iridescenceMap,Te=G&&!!N.iridescenceThicknessMap,we=ne&&!!N.sheenColorMap,Je=ne&&!!N.sheenRoughnessMap,We=!!N.specularMap,Ie=!!N.specularColorMap,lt=!!N.specularIntensityMap,X=me&&!!N.transmissionMap,Oe=me&&!!N.thicknessMap,De=!!N.gradientMap,Ne=!!N.alphaMap,Ae=N.alphaTest>0,Me=!!N.alphaHash,Ve=!!N.extensions;let ct=nr;N.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(ct=s.toneMapping);const Gt={shaderID:ve,shaderType:N.type,shaderName:N.name,vertexShader:xe,fragmentShader:_e,defines:N.defines,customVertexShaderID:Re,customFragmentShaderID:ie,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:M,batching:Pe,batchingColor:Pe&&te._colorsTexture!==null,instancing:Le,instancingColor:Le&&te.instanceColor!==null,instancingMorph:Le&&te.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:oe===null?s.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Fs,alphaToCoverage:!!N.alphaToCoverage,map:nt,matcap:Rt,envMap:je,envMapMode:je&&K.mapping,envMapCubeUVHeight:Y,aoMap:qe,lightMap:H,bumpMap:at,normalMap:dt,displacementMap:_&&_t,emissiveMap:Ge,normalMapObjectSpace:dt&&N.normalMapType===f2,normalMapTangentSpace:dt&&N.normalMapType===u2,metalnessMap:Ht,roughnessMap:Ke,anisotropy:ot,anisotropyMap:le,clearcoat:U,clearcoatMap:Be,clearcoatNormalMap:Ue,clearcoatRoughnessMap:Qe,dispersion:b,iridescence:G,iridescenceMap:Ye,iridescenceThicknessMap:Te,sheen:ne,sheenColorMap:we,sheenRoughnessMap:Je,specularMap:We,specularColorMap:Ie,specularIntensityMap:lt,transmission:me,transmissionMap:X,thicknessMap:Oe,gradientMap:De,opaque:N.transparent===!1&&N.blending===Ds&&N.alphaToCoverage===!1,alphaMap:Ne,alphaTest:Ae,alphaHash:Me,combine:N.combine,mapUv:nt&&A(N.map.channel),aoMapUv:qe&&A(N.aoMap.channel),lightMapUv:H&&A(N.lightMap.channel),bumpMapUv:at&&A(N.bumpMap.channel),normalMapUv:dt&&A(N.normalMap.channel),displacementMapUv:_t&&A(N.displacementMap.channel),emissiveMapUv:Ge&&A(N.emissiveMap.channel),metalnessMapUv:Ht&&A(N.metalnessMap.channel),roughnessMapUv:Ke&&A(N.roughnessMap.channel),anisotropyMapUv:le&&A(N.anisotropyMap.channel),clearcoatMapUv:Be&&A(N.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&A(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qe&&A(N.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&A(N.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&A(N.iridescenceThicknessMap.channel),sheenColorMapUv:we&&A(N.sheenColorMap.channel),sheenRoughnessMapUv:Je&&A(N.sheenRoughnessMap.channel),specularMapUv:We&&A(N.specularMap.channel),specularColorMapUv:Ie&&A(N.specularColorMap.channel),specularIntensityMapUv:lt&&A(N.specularIntensityMap.channel),transmissionMapUv:X&&A(N.transmissionMap.channel),thicknessMapUv:Oe&&A(N.thicknessMap.channel),alphaMapUv:Ne&&A(N.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(dt||ot),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!de.attributes.uv&&(nt||Ne),fog:!!$,useFog:N.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:N.flatShading===!0&&N.wireframe===!1,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Ee,skinning:te.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:Z,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:N.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:ct,decodeVideoTexture:nt&&N.map.isVideoTexture===!0&&Ot.getTransfer(N.map.colorSpace)===Xt,decodeVideoTextureEmissive:Ge&&N.emissiveMap.isVideoTexture===!0&&Ot.getTransfer(N.emissiveMap.colorSpace)===Xt,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===ha,flipSided:N.side===Xn,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:Ve&&N.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&N.extensions.multiDraw===!0||Pe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return Gt.vertexUv1s=p.has(1),Gt.vertexUv2s=p.has(2),Gt.vertexUv3s=p.has(3),p.clear(),Gt}function v(N){const R=[];if(N.shaderID?R.push(N.shaderID):(R.push(N.customVertexShaderID),R.push(N.customFragmentShaderID)),N.defines!==void 0)for(const F in N.defines)R.push(F),R.push(N.defines[F]);return N.isRawShaderMaterial===!1&&(O(R,N),D(R,N),R.push(s.outputColorSpace)),R.push(N.customProgramCacheKey),R.join()}function O(N,R){N.push(R.precision),N.push(R.outputColorSpace),N.push(R.envMapMode),N.push(R.envMapCubeUVHeight),N.push(R.mapUv),N.push(R.alphaMapUv),N.push(R.lightMapUv),N.push(R.aoMapUv),N.push(R.bumpMapUv),N.push(R.normalMapUv),N.push(R.displacementMapUv),N.push(R.emissiveMapUv),N.push(R.metalnessMapUv),N.push(R.roughnessMapUv),N.push(R.anisotropyMapUv),N.push(R.clearcoatMapUv),N.push(R.clearcoatNormalMapUv),N.push(R.clearcoatRoughnessMapUv),N.push(R.iridescenceMapUv),N.push(R.iridescenceThicknessMapUv),N.push(R.sheenColorMapUv),N.push(R.sheenRoughnessMapUv),N.push(R.specularMapUv),N.push(R.specularColorMapUv),N.push(R.specularIntensityMapUv),N.push(R.transmissionMapUv),N.push(R.thicknessMapUv),N.push(R.combine),N.push(R.fogExp2),N.push(R.sizeAttenuation),N.push(R.morphTargetsCount),N.push(R.morphAttributeCount),N.push(R.numDirLights),N.push(R.numPointLights),N.push(R.numSpotLights),N.push(R.numSpotLightMaps),N.push(R.numHemiLights),N.push(R.numRectAreaLights),N.push(R.numDirLightShadows),N.push(R.numPointLightShadows),N.push(R.numSpotLightShadows),N.push(R.numSpotLightShadowsWithMaps),N.push(R.numLightProbes),N.push(R.shadowMapType),N.push(R.toneMapping),N.push(R.numClippingPlanes),N.push(R.numClipIntersection),N.push(R.depthPacking)}function D(N,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),R.gradientMap&&h.enable(22),N.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reversedDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),N.push(h.mask)}function z(N){const R=T[N.type];let F;if(R){const k=Fi[R];F=H2.clone(k.uniforms)}else F=N.uniforms;return F}function j(N,R){let F;for(let k=0,te=g.length;k<te;k++){const $=g[k];if($.cacheKey===R){F=$,++F.usedTimes;break}}return F===void 0&&(F=new hA(s,R,N,c),g.push(F)),F}function L(N){if(--N.usedTimes===0){const R=g.indexOf(N);g[R]=g[g.length-1],g.pop(),N.destroy()}}function I(N){m.remove(N)}function q(){m.dispose()}return{getParameters:E,getProgramCacheKey:v,getUniforms:z,acquireProgram:j,releaseProgram:L,releaseShaderCache:I,programs:g,dispose:q}}function vA(){let s=new WeakMap;function e(f){return s.has(f)}function i(f){let h=s.get(f);return h===void 0&&(h={},s.set(f,h)),h}function r(f){s.delete(f)}function l(f,h,m){s.get(f)[h]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function _A(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function mv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function xv(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function f(x,_,M,T,A,E){let v=s[e];return v===void 0?(v={id:x.id,object:x,geometry:_,material:M,groupOrder:T,renderOrder:x.renderOrder,z:A,group:E},s[e]=v):(v.id=x.id,v.object=x,v.geometry=_,v.material=M,v.groupOrder=T,v.renderOrder=x.renderOrder,v.z=A,v.group=E),e++,v}function h(x,_,M,T,A,E){const v=f(x,_,M,T,A,E);M.transmission>0?r.push(v):M.transparent===!0?l.push(v):i.push(v)}function m(x,_,M,T,A,E){const v=f(x,_,M,T,A,E);M.transmission>0?r.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function p(x,_){i.length>1&&i.sort(x||_A),r.length>1&&r.sort(_||mv),l.length>1&&l.sort(_||mv)}function g(){for(let x=e,_=s.length;x<_;x++){const M=s[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:m,finish:g,sort:p}}function bA(){let s=new WeakMap;function e(r,l){const c=s.get(r);let f;return c===void 0?(f=new xv,s.set(r,[f])):l>=c.length?(f=new xv,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:e,dispose:i}}function yA(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new pe,color:new zt};break;case"SpotLight":i={position:new pe,direction:new pe,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new pe,color:new zt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new pe,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":i={color:new zt,position:new pe,halfWidth:new pe,halfHeight:new pe};break}return s[e.id]=i,i}}}function SA(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let MA=0;function EA(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function TA(s){const e=new yA,i=SA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new pe);const l=new pe,c=new hn,f=new hn;function h(p){let g=0,x=0,_=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let M=0,T=0,A=0,E=0,v=0,O=0,D=0,z=0,j=0,L=0,I=0;p.sort(EA);for(let N=0,R=p.length;N<R;N++){const F=p[N],k=F.color,te=F.intensity,$=F.distance,de=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)g+=k.r*te,x+=k.g*te,_+=k.b*te;else if(F.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(F.sh.coefficients[P],te);I++}else if(F.isDirectionalLight){const P=e.get(F);if(P.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const K=F.shadow,Y=i.get(F);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,r.directionalShadow[M]=Y,r.directionalShadowMap[M]=de,r.directionalShadowMatrix[M]=F.shadow.matrix,O++}r.directional[M]=P,M++}else if(F.isSpotLight){const P=e.get(F);P.position.setFromMatrixPosition(F.matrixWorld),P.color.copy(k).multiplyScalar(te),P.distance=$,P.coneCos=Math.cos(F.angle),P.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),P.decay=F.decay,r.spot[A]=P;const K=F.shadow;if(F.map&&(r.spotLightMap[j]=F.map,j++,K.updateMatrices(F),F.castShadow&&L++),r.spotLightMatrix[A]=K.matrix,F.castShadow){const Y=i.get(F);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,r.spotShadow[A]=Y,r.spotShadowMap[A]=de,z++}A++}else if(F.isRectAreaLight){const P=e.get(F);P.color.copy(k).multiplyScalar(te),P.halfWidth.set(F.width*.5,0,0),P.halfHeight.set(0,F.height*.5,0),r.rectArea[E]=P,E++}else if(F.isPointLight){const P=e.get(F);if(P.color.copy(F.color).multiplyScalar(F.intensity),P.distance=F.distance,P.decay=F.decay,F.castShadow){const K=F.shadow,Y=i.get(F);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,Y.shadowCameraNear=K.camera.near,Y.shadowCameraFar=K.camera.far,r.pointShadow[T]=Y,r.pointShadowMap[T]=de,r.pointShadowMatrix[T]=F.shadow.matrix,D++}r.point[T]=P,T++}else if(F.isHemisphereLight){const P=e.get(F);P.skyColor.copy(F.color).multiplyScalar(te),P.groundColor.copy(F.groundColor).multiplyScalar(te),r.hemi[v]=P,v++}}E>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ze.LTC_FLOAT_1,r.rectAreaLTC2=ze.LTC_FLOAT_2):(r.rectAreaLTC1=ze.LTC_HALF_1,r.rectAreaLTC2=ze.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=x,r.ambient[2]=_;const q=r.hash;(q.directionalLength!==M||q.pointLength!==T||q.spotLength!==A||q.rectAreaLength!==E||q.hemiLength!==v||q.numDirectionalShadows!==O||q.numPointShadows!==D||q.numSpotShadows!==z||q.numSpotMaps!==j||q.numLightProbes!==I)&&(r.directional.length=M,r.spot.length=A,r.rectArea.length=E,r.point.length=T,r.hemi.length=v,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=z,r.spotShadowMap.length=z,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=z+j-L,r.spotLightMap.length=j,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=I,q.directionalLength=M,q.pointLength=T,q.spotLength=A,q.rectAreaLength=E,q.hemiLength=v,q.numDirectionalShadows=O,q.numPointShadows=D,q.numSpotShadows=z,q.numSpotMaps=j,q.numLightProbes=I,r.version=MA++)}function m(p,g){let x=0,_=0,M=0,T=0,A=0;const E=g.matrixWorldInverse;for(let v=0,O=p.length;v<O;v++){const D=p[v];if(D.isDirectionalLight){const z=r.directional[x];z.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),z.direction.sub(l),z.direction.transformDirection(E),x++}else if(D.isSpotLight){const z=r.spot[M];z.position.setFromMatrixPosition(D.matrixWorld),z.position.applyMatrix4(E),z.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),z.direction.sub(l),z.direction.transformDirection(E),M++}else if(D.isRectAreaLight){const z=r.rectArea[T];z.position.setFromMatrixPosition(D.matrixWorld),z.position.applyMatrix4(E),f.identity(),c.copy(D.matrixWorld),c.premultiply(E),f.extractRotation(c),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),z.halfWidth.applyMatrix4(f),z.halfHeight.applyMatrix4(f),T++}else if(D.isPointLight){const z=r.point[_];z.position.setFromMatrixPosition(D.matrixWorld),z.position.applyMatrix4(E),_++}else if(D.isHemisphereLight){const z=r.hemi[A];z.direction.setFromMatrixPosition(D.matrixWorld),z.direction.transformDirection(E),A++}}}return{setup:h,setupView:m,state:r}}function gv(s){const e=new TA(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function f(g){r.push(g)}function h(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function AA(s){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new gv(s),e.set(l,[h])):c>=f.length?(h=new gv(s),f.push(h)):h=f[c],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const wA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function CA(s,e,i){let r=new o_;const l=new ht,c=new ht,f=new nn,h=new J2({depthPacking:c2}),m=new $2,p={},g=i.maxTextureSize,x={[ir]:Xn,[Xn]:ir,[ha]:ha},_=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:wA,fragmentShader:RA}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const T=new Ii;T.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new wi(T,_),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Iv;let v=this.type;this.render=function(L,I,q){if(E.enabled===!1||E.autoUpdate===!1&&E.needsUpdate===!1||L.length===0)return;const N=s.getRenderTarget(),R=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),k=s.state;k.setBlending(xa),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const te=v!==da&&this.type===da,$=v===da&&this.type!==da;for(let de=0,P=L.length;de<P;de++){const K=L[de],Y=K.shadow;if(Y===void 0){ft("WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const ve=Y.getFrameExtents();if(l.multiply(ve),c.copy(Y.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/ve.x),l.x=c.x*ve.x,Y.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/ve.y),l.y=c.y*ve.y,Y.mapSize.y=c.y)),Y.map===null||te===!0||$===!0){const B=this.type!==da?{minFilter:ri,magFilter:ri}:{};Y.map!==null&&Y.map.dispose(),Y.map=new ar(l.x,l.y,B),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const Se=Y.getViewportCount();for(let B=0;B<Se;B++){const Z=Y.getViewport(B);f.set(c.x*Z.x,c.y*Z.y,c.x*Z.z,c.y*Z.w),k.viewport(f),Y.updateMatrices(K,B),r=Y.getFrustum(),z(I,q,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===da&&O(Y,q),Y.needsUpdate=!1}v=this.type,E.needsUpdate=!1,s.setRenderTarget(N,R,F)};function O(L,I){const q=e.update(A);_.defines.VSM_SAMPLES!==L.blurSamples&&(_.defines.VSM_SAMPLES=L.blurSamples,M.defines.VSM_SAMPLES=L.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new ar(l.x,l.y)),_.uniforms.shadow_pass.value=L.map.texture,_.uniforms.resolution.value=L.mapSize,_.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(I,null,q,_,A,null),M.uniforms.shadow_pass.value=L.mapPass.texture,M.uniforms.resolution.value=L.mapSize,M.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(I,null,q,M,A,null)}function D(L,I,q,N){let R=null;const F=q.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(F!==void 0)R=F;else if(R=q.isPointLight===!0?m:h,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const k=R.uuid,te=I.uuid;let $=p[k];$===void 0&&($={},p[k]=$);let de=$[te];de===void 0&&(de=R.clone(),$[te]=de,I.addEventListener("dispose",j)),R=de}if(R.visible=I.visible,R.wireframe=I.wireframe,N===da?R.side=I.shadowSide!==null?I.shadowSide:I.side:R.side=I.shadowSide!==null?I.shadowSide:x[I.side],R.alphaMap=I.alphaMap,R.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,R.map=I.map,R.clipShadows=I.clipShadows,R.clippingPlanes=I.clippingPlanes,R.clipIntersection=I.clipIntersection,R.displacementMap=I.displacementMap,R.displacementScale=I.displacementScale,R.displacementBias=I.displacementBias,R.wireframeLinewidth=I.wireframeLinewidth,R.linewidth=I.linewidth,q.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const k=s.properties.get(R);k.light=q}return R}function z(L,I,q,N,R){if(L.visible===!1)return;if(L.layers.test(I.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&R===da)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,L.matrixWorld);const te=e.update(L),$=L.material;if(Array.isArray($)){const de=te.groups;for(let P=0,K=de.length;P<K;P++){const Y=de[P],ve=$[Y.materialIndex];if(ve&&ve.visible){const Se=D(L,ve,N,R);L.onBeforeShadow(s,L,I,q,te,Se,Y),s.renderBufferDirect(q,null,te,Se,L,Y),L.onAfterShadow(s,L,I,q,te,Se,Y)}}}else if($.visible){const de=D(L,$,N,R);L.onBeforeShadow(s,L,I,q,te,de,null),s.renderBufferDirect(q,null,te,de,L,null),L.onAfterShadow(s,L,I,q,te,de,null)}}const k=L.children;for(let te=0,$=k.length;te<$;te++)z(k[te],I,q,N,R)}function j(L){L.target.removeEventListener("dispose",j);for(const q in p){const N=p[q],R=L.target.uuid;R in N&&(N[R].dispose(),delete N[R])}}}const DA={[mh]:xh,[gh]:bh,[vh]:yh,[Us]:_h,[xh]:mh,[bh]:gh,[yh]:vh,[_h]:Us};function NA(s,e){function i(){let X=!1;const Oe=new nn;let De=null;const Ne=new nn(0,0,0,0);return{setMask:function(Ae){De!==Ae&&!X&&(s.colorMask(Ae,Ae,Ae,Ae),De=Ae)},setLocked:function(Ae){X=Ae},setClear:function(Ae,Me,Ve,ct,Gt){Gt===!0&&(Ae*=ct,Me*=ct,Ve*=ct),Oe.set(Ae,Me,Ve,ct),Ne.equals(Oe)===!1&&(s.clearColor(Ae,Me,Ve,ct),Ne.copy(Oe))},reset:function(){X=!1,De=null,Ne.set(-1,0,0,0)}}}function r(){let X=!1,Oe=!1,De=null,Ne=null,Ae=null;return{setReversed:function(Me){if(Oe!==Me){const Ve=e.get("EXT_clip_control");Me?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),Oe=Me;const ct=Ae;Ae=null,this.setClear(ct)}},getReversed:function(){return Oe},setTest:function(Me){Me?oe(s.DEPTH_TEST):Ee(s.DEPTH_TEST)},setMask:function(Me){De!==Me&&!X&&(s.depthMask(Me),De=Me)},setFunc:function(Me){if(Oe&&(Me=DA[Me]),Ne!==Me){switch(Me){case mh:s.depthFunc(s.NEVER);break;case xh:s.depthFunc(s.ALWAYS);break;case gh:s.depthFunc(s.LESS);break;case Us:s.depthFunc(s.LEQUAL);break;case vh:s.depthFunc(s.EQUAL);break;case _h:s.depthFunc(s.GEQUAL);break;case bh:s.depthFunc(s.GREATER);break;case yh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ne=Me}},setLocked:function(Me){X=Me},setClear:function(Me){Ae!==Me&&(Oe&&(Me=1-Me),s.clearDepth(Me),Ae=Me)},reset:function(){X=!1,De=null,Ne=null,Ae=null,Oe=!1}}}function l(){let X=!1,Oe=null,De=null,Ne=null,Ae=null,Me=null,Ve=null,ct=null,Gt=null;return{setTest:function(Dt){X||(Dt?oe(s.STENCIL_TEST):Ee(s.STENCIL_TEST))},setMask:function(Dt){Oe!==Dt&&!X&&(s.stencilMask(Dt),Oe=Dt)},setFunc:function(Dt,Cn,qn){(De!==Dt||Ne!==Cn||Ae!==qn)&&(s.stencilFunc(Dt,Cn,qn),De=Dt,Ne=Cn,Ae=qn)},setOp:function(Dt,Cn,qn){(Me!==Dt||Ve!==Cn||ct!==qn)&&(s.stencilOp(Dt,Cn,qn),Me=Dt,Ve=Cn,ct=qn)},setLocked:function(Dt){X=Dt},setClear:function(Dt){Gt!==Dt&&(s.clearStencil(Dt),Gt=Dt)},reset:function(){X=!1,Oe=null,De=null,Ne=null,Ae=null,Me=null,Ve=null,ct=null,Gt=null}}}const c=new i,f=new r,h=new l,m=new WeakMap,p=new WeakMap;let g={},x={},_=new WeakMap,M=[],T=null,A=!1,E=null,v=null,O=null,D=null,z=null,j=null,L=null,I=new zt(0,0,0),q=0,N=!1,R=null,F=null,k=null,te=null,$=null;const de=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,K=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),P=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),P=K>=2);let ve=null,Se={};const B=s.getParameter(s.SCISSOR_BOX),Z=s.getParameter(s.VIEWPORT),xe=new nn().fromArray(B),_e=new nn().fromArray(Z);function Re(X,Oe,De,Ne){const Ae=new Uint8Array(4),Me=s.createTexture();s.bindTexture(X,Me),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ve=0;Ve<De;Ve++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Oe,0,s.RGBA,1,1,Ne,0,s.RGBA,s.UNSIGNED_BYTE,Ae):s.texImage2D(Oe+Ve,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ae);return Me}const ie={};ie[s.TEXTURE_2D]=Re(s.TEXTURE_2D,s.TEXTURE_2D,1),ie[s.TEXTURE_CUBE_MAP]=Re(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[s.TEXTURE_2D_ARRAY]=Re(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ie[s.TEXTURE_3D]=Re(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),oe(s.DEPTH_TEST),f.setFunc(Us),at(!1),dt(_g),oe(s.CULL_FACE),qe(xa);function oe(X){g[X]!==!0&&(s.enable(X),g[X]=!0)}function Ee(X){g[X]!==!1&&(s.disable(X),g[X]=!1)}function Le(X,Oe){return x[X]!==Oe?(s.bindFramebuffer(X,Oe),x[X]=Oe,X===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Oe),X===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Oe),!0):!1}function Pe(X,Oe){let De=M,Ne=!1;if(X){De=_.get(Oe),De===void 0&&(De=[],_.set(Oe,De));const Ae=X.textures;if(De.length!==Ae.length||De[0]!==s.COLOR_ATTACHMENT0){for(let Me=0,Ve=Ae.length;Me<Ve;Me++)De[Me]=s.COLOR_ATTACHMENT0+Me;De.length=Ae.length,Ne=!0}}else De[0]!==s.BACK&&(De[0]=s.BACK,Ne=!0);Ne&&s.drawBuffers(De)}function nt(X){return T!==X?(s.useProgram(X),T=X,!0):!1}const Rt={[Nr]:s.FUNC_ADD,[FS]:s.FUNC_SUBTRACT,[zS]:s.FUNC_REVERSE_SUBTRACT};Rt[PS]=s.MIN,Rt[BS]=s.MAX;const je={[IS]:s.ZERO,[HS]:s.ONE,[GS]:s.SRC_COLOR,[hh]:s.SRC_ALPHA,[qS]:s.SRC_ALPHA_SATURATE,[XS]:s.DST_COLOR,[kS]:s.DST_ALPHA,[VS]:s.ONE_MINUS_SRC_COLOR,[ph]:s.ONE_MINUS_SRC_ALPHA,[WS]:s.ONE_MINUS_DST_COLOR,[jS]:s.ONE_MINUS_DST_ALPHA,[YS]:s.CONSTANT_COLOR,[ZS]:s.ONE_MINUS_CONSTANT_COLOR,[KS]:s.CONSTANT_ALPHA,[QS]:s.ONE_MINUS_CONSTANT_ALPHA};function qe(X,Oe,De,Ne,Ae,Me,Ve,ct,Gt,Dt){if(X===xa){A===!0&&(Ee(s.BLEND),A=!1);return}if(A===!1&&(oe(s.BLEND),A=!0),X!==OS){if(X!==E||Dt!==N){if((v!==Nr||z!==Nr)&&(s.blendEquation(s.FUNC_ADD),v=Nr,z=Nr),Dt)switch(X){case Ds:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case dh:s.blendFunc(s.ONE,s.ONE);break;case bg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case yg:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:sn("WebGLState: Invalid blending: ",X);break}else switch(X){case Ds:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case dh:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case bg:sn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yg:sn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:sn("WebGLState: Invalid blending: ",X);break}O=null,D=null,j=null,L=null,I.set(0,0,0),q=0,E=X,N=Dt}return}Ae=Ae||Oe,Me=Me||De,Ve=Ve||Ne,(Oe!==v||Ae!==z)&&(s.blendEquationSeparate(Rt[Oe],Rt[Ae]),v=Oe,z=Ae),(De!==O||Ne!==D||Me!==j||Ve!==L)&&(s.blendFuncSeparate(je[De],je[Ne],je[Me],je[Ve]),O=De,D=Ne,j=Me,L=Ve),(ct.equals(I)===!1||Gt!==q)&&(s.blendColor(ct.r,ct.g,ct.b,Gt),I.copy(ct),q=Gt),E=X,N=!1}function H(X,Oe){X.side===ha?Ee(s.CULL_FACE):oe(s.CULL_FACE);let De=X.side===Xn;Oe&&(De=!De),at(De),X.blending===Ds&&X.transparent===!1?qe(xa):qe(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const Ne=X.stencilWrite;h.setTest(Ne),Ne&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ge(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?oe(s.SAMPLE_ALPHA_TO_COVERAGE):Ee(s.SAMPLE_ALPHA_TO_COVERAGE)}function at(X){R!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),R=X)}function dt(X){X!==NS?(oe(s.CULL_FACE),X!==F&&(X===_g?s.cullFace(s.BACK):X===US?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ee(s.CULL_FACE),F=X}function _t(X){X!==k&&(P&&s.lineWidth(X),k=X)}function Ge(X,Oe,De){X?(oe(s.POLYGON_OFFSET_FILL),(te!==Oe||$!==De)&&(s.polygonOffset(Oe,De),te=Oe,$=De)):Ee(s.POLYGON_OFFSET_FILL)}function Ht(X){X?oe(s.SCISSOR_TEST):Ee(s.SCISSOR_TEST)}function Ke(X){X===void 0&&(X=s.TEXTURE0+de-1),ve!==X&&(s.activeTexture(X),ve=X)}function ot(X,Oe,De){De===void 0&&(ve===null?De=s.TEXTURE0+de-1:De=ve);let Ne=Se[De];Ne===void 0&&(Ne={type:void 0,texture:void 0},Se[De]=Ne),(Ne.type!==X||Ne.texture!==Oe)&&(ve!==De&&(s.activeTexture(De),ve=De),s.bindTexture(X,Oe||ie[X]),Ne.type=X,Ne.texture=Oe)}function U(){const X=Se[ve];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function b(){try{s.compressedTexImage2D(...arguments)}catch(X){X("WebGLState:",X)}}function G(){try{s.compressedTexImage3D(...arguments)}catch(X){X("WebGLState:",X)}}function ne(){try{s.texSubImage2D(...arguments)}catch(X){X("WebGLState:",X)}}function me(){try{s.texSubImage3D(...arguments)}catch(X){X("WebGLState:",X)}}function le(){try{s.compressedTexSubImage2D(...arguments)}catch(X){X("WebGLState:",X)}}function Be(){try{s.compressedTexSubImage3D(...arguments)}catch(X){X("WebGLState:",X)}}function Ue(){try{s.texStorage2D(...arguments)}catch(X){X("WebGLState:",X)}}function Qe(){try{s.texStorage3D(...arguments)}catch(X){X("WebGLState:",X)}}function Ye(){try{s.texImage2D(...arguments)}catch(X){X("WebGLState:",X)}}function Te(){try{s.texImage3D(...arguments)}catch(X){X("WebGLState:",X)}}function we(X){xe.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),xe.copy(X))}function Je(X){_e.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),_e.copy(X))}function We(X,Oe){let De=p.get(Oe);De===void 0&&(De=new WeakMap,p.set(Oe,De));let Ne=De.get(X);Ne===void 0&&(Ne=s.getUniformBlockIndex(Oe,X.name),De.set(X,Ne))}function Ie(X,Oe){const Ne=p.get(Oe).get(X);m.get(Oe)!==Ne&&(s.uniformBlockBinding(Oe,Ne,X.__bindingPointIndex),m.set(Oe,Ne))}function lt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},ve=null,Se={},x={},_=new WeakMap,M=[],T=null,A=!1,E=null,v=null,O=null,D=null,z=null,j=null,L=null,I=new zt(0,0,0),q=0,N=!1,R=null,F=null,k=null,te=null,$=null,xe.set(0,0,s.canvas.width,s.canvas.height),_e.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:oe,disable:Ee,bindFramebuffer:Le,drawBuffers:Pe,useProgram:nt,setBlending:qe,setMaterial:H,setFlipSided:at,setCullFace:dt,setLineWidth:_t,setPolygonOffset:Ge,setScissorTest:Ht,activeTexture:Ke,bindTexture:ot,unbindTexture:U,compressedTexImage2D:b,compressedTexImage3D:G,texImage2D:Ye,texImage3D:Te,updateUBOMapping:We,uniformBlockBinding:Ie,texStorage2D:Ue,texStorage3D:Qe,texSubImage2D:ne,texSubImage3D:me,compressedTexSubImage2D:le,compressedTexSubImage3D:Be,scissor:we,viewport:Je,reset:lt}}function UA(s,e,i,r,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ht,g=new WeakMap;let x;const _=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(U,b){return M?new OffscreenCanvas(U,b):tu("canvas")}function A(U,b,G){let ne=1;const me=ot(U);if((me.width>G||me.height>G)&&(ne=G/Math.max(me.width,me.height)),ne<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const le=Math.floor(ne*me.width),Be=Math.floor(ne*me.height);x===void 0&&(x=T(le,Be));const Ue=b?T(le,Be):x;return Ue.width=le,Ue.height=Be,Ue.getContext("2d").drawImage(U,0,0,le,Be),ft("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+le+"x"+Be+")."),Ue}else return"data"in U&&ft("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),U;return U}function E(U){return U.generateMipmaps}function v(U){s.generateMipmap(U)}function O(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(U,b,G,ne,me=!1){if(U!==null){if(s[U]!==void 0)return s[U];ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let le=b;if(b===s.RED&&(G===s.FLOAT&&(le=s.R32F),G===s.HALF_FLOAT&&(le=s.R16F),G===s.UNSIGNED_BYTE&&(le=s.R8)),b===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(le=s.R8UI),G===s.UNSIGNED_SHORT&&(le=s.R16UI),G===s.UNSIGNED_INT&&(le=s.R32UI),G===s.BYTE&&(le=s.R8I),G===s.SHORT&&(le=s.R16I),G===s.INT&&(le=s.R32I)),b===s.RG&&(G===s.FLOAT&&(le=s.RG32F),G===s.HALF_FLOAT&&(le=s.RG16F),G===s.UNSIGNED_BYTE&&(le=s.RG8)),b===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(le=s.RG8UI),G===s.UNSIGNED_SHORT&&(le=s.RG16UI),G===s.UNSIGNED_INT&&(le=s.RG32UI),G===s.BYTE&&(le=s.RG8I),G===s.SHORT&&(le=s.RG16I),G===s.INT&&(le=s.RG32I)),b===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(le=s.RGB8UI),G===s.UNSIGNED_SHORT&&(le=s.RGB16UI),G===s.UNSIGNED_INT&&(le=s.RGB32UI),G===s.BYTE&&(le=s.RGB8I),G===s.SHORT&&(le=s.RGB16I),G===s.INT&&(le=s.RGB32I)),b===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(le=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(le=s.RGBA16UI),G===s.UNSIGNED_INT&&(le=s.RGBA32UI),G===s.BYTE&&(le=s.RGBA8I),G===s.SHORT&&(le=s.RGBA16I),G===s.INT&&(le=s.RGBA32I)),b===s.RGB&&(G===s.UNSIGNED_INT_5_9_9_9_REV&&(le=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(le=s.R11F_G11F_B10F)),b===s.RGBA){const Be=me?$c:Ot.getTransfer(ne);G===s.FLOAT&&(le=s.RGBA32F),G===s.HALF_FLOAT&&(le=s.RGBA16F),G===s.UNSIGNED_BYTE&&(le=Be===Xt?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(le=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(le=s.RGB5_A1)}return(le===s.R16F||le===s.R32F||le===s.RG16F||le===s.RG32F||le===s.RGBA16F||le===s.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function z(U,b){let G;return U?b===null||b===Fr||b===Yo?G=s.DEPTH24_STENCIL8:b===zi?G=s.DEPTH32F_STENCIL8:b===qo&&(G=s.DEPTH24_STENCIL8,ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Fr||b===Yo?G=s.DEPTH_COMPONENT24:b===zi?G=s.DEPTH_COMPONENT32F:b===qo&&(G=s.DEPTH_COMPONENT16),G}function j(U,b){return E(U)===!0||U.isFramebufferTexture&&U.minFilter!==ri&&U.minFilter!==On?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function L(U){const b=U.target;b.removeEventListener("dispose",L),q(b),b.isVideoTexture&&g.delete(b)}function I(U){const b=U.target;b.removeEventListener("dispose",I),R(b)}function q(U){const b=r.get(U);if(b.__webglInit===void 0)return;const G=U.source,ne=_.get(G);if(ne){const me=ne[b.__cacheKey];me.usedTimes--,me.usedTimes===0&&N(U),Object.keys(ne).length===0&&_.delete(G)}r.remove(U)}function N(U){const b=r.get(U);s.deleteTexture(b.__webglTexture);const G=U.source,ne=_.get(G);delete ne[b.__cacheKey],f.memory.textures--}function R(U){const b=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(b.__webglFramebuffer[ne]))for(let me=0;me<b.__webglFramebuffer[ne].length;me++)s.deleteFramebuffer(b.__webglFramebuffer[ne][me]);else s.deleteFramebuffer(b.__webglFramebuffer[ne]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[ne])}else{if(Array.isArray(b.__webglFramebuffer))for(let ne=0;ne<b.__webglFramebuffer.length;ne++)s.deleteFramebuffer(b.__webglFramebuffer[ne]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ne=0;ne<b.__webglColorRenderbuffer.length;ne++)b.__webglColorRenderbuffer[ne]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[ne]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const G=U.textures;for(let ne=0,me=G.length;ne<me;ne++){const le=r.get(G[ne]);le.__webglTexture&&(s.deleteTexture(le.__webglTexture),f.memory.textures--),r.remove(G[ne])}r.remove(U)}let F=0;function k(){F=0}function te(){const U=F;return U>=l.maxTextures&&ft("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),F+=1,U}function $(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function de(U,b){const G=r.get(U);if(U.isVideoTexture&&Ht(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&G.__version!==U.version){const ne=U.image;if(ne===null)ft("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)ft("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(G,U,b);return}}else U.isExternalTexture&&(G.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+b)}function P(U,b){const G=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&G.__version!==U.version){ie(G,U,b);return}else U.isExternalTexture&&(G.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+b)}function K(U,b){const G=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&G.__version!==U.version){ie(G,U,b);return}i.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+b)}function Y(U,b){const G=r.get(U);if(U.version>0&&G.__version!==U.version){oe(G,U,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+b)}const ve={[Eh]:s.REPEAT,[ai]:s.CLAMP_TO_EDGE,[Th]:s.MIRRORED_REPEAT},Se={[ri]:s.NEAREST,[o2]:s.NEAREST_MIPMAP_NEAREST,[vc]:s.NEAREST_MIPMAP_LINEAR,[On]:s.LINEAR,[Ad]:s.LINEAR_MIPMAP_NEAREST,[Lr]:s.LINEAR_MIPMAP_LINEAR},B={[d2]:s.NEVER,[v2]:s.ALWAYS,[h2]:s.LESS,[Zv]:s.LEQUAL,[p2]:s.EQUAL,[g2]:s.GEQUAL,[m2]:s.GREATER,[x2]:s.NOTEQUAL};function Z(U,b){if(b.type===zi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===On||b.magFilter===Ad||b.magFilter===vc||b.magFilter===Lr||b.minFilter===On||b.minFilter===Ad||b.minFilter===vc||b.minFilter===Lr)&&ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,ve[b.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,ve[b.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,ve[b.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,Se[b.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,Se[b.minFilter]),b.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,B[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ri||b.minFilter!==vc&&b.minFilter!==Lr||b.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function xe(U,b){let G=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",L));const ne=b.source;let me=_.get(ne);me===void 0&&(me={},_.set(ne,me));const le=$(b);if(le!==U.__cacheKey){me[le]===void 0&&(me[le]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,G=!0),me[le].usedTimes++;const Be=me[U.__cacheKey];Be!==void 0&&(me[U.__cacheKey].usedTimes--,Be.usedTimes===0&&N(b)),U.__cacheKey=le,U.__webglTexture=me[le].texture}return G}function _e(U,b,G){return Math.floor(Math.floor(U/G)/b)}function Re(U,b,G,ne){const le=U.updateRanges;if(le.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,G,ne,b.data);else{le.sort((Te,we)=>Te.start-we.start);let Be=0;for(let Te=1;Te<le.length;Te++){const we=le[Be],Je=le[Te],We=we.start+we.count,Ie=_e(Je.start,b.width,4),lt=_e(we.start,b.width,4);Je.start<=We+1&&Ie===lt&&_e(Je.start+Je.count-1,b.width,4)===Ie?we.count=Math.max(we.count,Je.start+Je.count-we.start):(++Be,le[Be]=Je)}le.length=Be+1;const Ue=s.getParameter(s.UNPACK_ROW_LENGTH),Qe=s.getParameter(s.UNPACK_SKIP_PIXELS),Ye=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let Te=0,we=le.length;Te<we;Te++){const Je=le[Te],We=Math.floor(Je.start/4),Ie=Math.ceil(Je.count/4),lt=We%b.width,X=Math.floor(We/b.width),Oe=Ie,De=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,lt),s.pixelStorei(s.UNPACK_SKIP_ROWS,X),i.texSubImage2D(s.TEXTURE_2D,0,lt,X,Oe,De,G,ne,b.data)}U.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ue),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Qe),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ye)}}function ie(U,b,G){let ne=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ne=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ne=s.TEXTURE_3D);const me=xe(U,b),le=b.source;i.bindTexture(ne,U.__webglTexture,s.TEXTURE0+G);const Be=r.get(le);if(le.version!==Be.__version||me===!0){i.activeTexture(s.TEXTURE0+G);const Ue=Ot.getPrimaries(Ot.workingColorSpace),Qe=b.colorSpace===er?null:Ot.getPrimaries(b.colorSpace),Ye=b.colorSpace===er||Ue===Qe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let Te=A(b.image,!1,l.maxTextureSize);Te=Ke(b,Te);const we=c.convert(b.format,b.colorSpace),Je=c.convert(b.type);let We=D(b.internalFormat,we,Je,b.colorSpace,b.isVideoTexture);Z(ne,b);let Ie;const lt=b.mipmaps,X=b.isVideoTexture!==!0,Oe=Be.__version===void 0||me===!0,De=le.dataReady,Ne=j(b,Te);if(b.isDepthTexture)We=z(b.format===Ko,b.type),Oe&&(X?i.texStorage2D(s.TEXTURE_2D,1,We,Te.width,Te.height):i.texImage2D(s.TEXTURE_2D,0,We,Te.width,Te.height,0,we,Je,null));else if(b.isDataTexture)if(lt.length>0){X&&Oe&&i.texStorage2D(s.TEXTURE_2D,Ne,We,lt[0].width,lt[0].height);for(let Ae=0,Me=lt.length;Ae<Me;Ae++)Ie=lt[Ae],X?De&&i.texSubImage2D(s.TEXTURE_2D,Ae,0,0,Ie.width,Ie.height,we,Je,Ie.data):i.texImage2D(s.TEXTURE_2D,Ae,We,Ie.width,Ie.height,0,we,Je,Ie.data);b.generateMipmaps=!1}else X?(Oe&&i.texStorage2D(s.TEXTURE_2D,Ne,We,Te.width,Te.height),De&&Re(b,Te,we,Je)):i.texImage2D(s.TEXTURE_2D,0,We,Te.width,Te.height,0,we,Je,Te.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){X&&Oe&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,We,lt[0].width,lt[0].height,Te.depth);for(let Ae=0,Me=lt.length;Ae<Me;Ae++)if(Ie=lt[Ae],b.format!==xi)if(we!==null)if(X){if(De)if(b.layerUpdates.size>0){const Ve=Yg(Ie.width,Ie.height,b.format,b.type);for(const ct of b.layerUpdates){const Gt=Ie.data.subarray(ct*Ve/Ie.data.BYTES_PER_ELEMENT,(ct+1)*Ve/Ie.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,ct,Ie.width,Ie.height,1,we,Gt)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,0,Ie.width,Ie.height,Te.depth,we,Ie.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ae,We,Ie.width,Ie.height,Te.depth,0,Ie.data,0,0);else ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?De&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,0,Ie.width,Ie.height,Te.depth,we,Je,Ie.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Ae,We,Ie.width,Ie.height,Te.depth,0,we,Je,Ie.data)}else{X&&Oe&&i.texStorage2D(s.TEXTURE_2D,Ne,We,lt[0].width,lt[0].height);for(let Ae=0,Me=lt.length;Ae<Me;Ae++)Ie=lt[Ae],b.format!==xi?we!==null?X?De&&i.compressedTexSubImage2D(s.TEXTURE_2D,Ae,0,0,Ie.width,Ie.height,we,Ie.data):i.compressedTexImage2D(s.TEXTURE_2D,Ae,We,Ie.width,Ie.height,0,Ie.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?De&&i.texSubImage2D(s.TEXTURE_2D,Ae,0,0,Ie.width,Ie.height,we,Je,Ie.data):i.texImage2D(s.TEXTURE_2D,Ae,We,Ie.width,Ie.height,0,we,Je,Ie.data)}else if(b.isDataArrayTexture)if(X){if(Oe&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,We,Te.width,Te.height,Te.depth),De)if(b.layerUpdates.size>0){const Ae=Yg(Te.width,Te.height,b.format,b.type);for(const Me of b.layerUpdates){const Ve=Te.data.subarray(Me*Ae/Te.data.BYTES_PER_ELEMENT,(Me+1)*Ae/Te.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Me,Te.width,Te.height,1,we,Je,Ve)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,we,Je,Te.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,We,Te.width,Te.height,Te.depth,0,we,Je,Te.data);else if(b.isData3DTexture)X?(Oe&&i.texStorage3D(s.TEXTURE_3D,Ne,We,Te.width,Te.height,Te.depth),De&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,we,Je,Te.data)):i.texImage3D(s.TEXTURE_3D,0,We,Te.width,Te.height,Te.depth,0,we,Je,Te.data);else if(b.isFramebufferTexture){if(Oe)if(X)i.texStorage2D(s.TEXTURE_2D,Ne,We,Te.width,Te.height);else{let Ae=Te.width,Me=Te.height;for(let Ve=0;Ve<Ne;Ve++)i.texImage2D(s.TEXTURE_2D,Ve,We,Ae,Me,0,we,Je,null),Ae>>=1,Me>>=1}}else if(lt.length>0){if(X&&Oe){const Ae=ot(lt[0]);i.texStorage2D(s.TEXTURE_2D,Ne,We,Ae.width,Ae.height)}for(let Ae=0,Me=lt.length;Ae<Me;Ae++)Ie=lt[Ae],X?De&&i.texSubImage2D(s.TEXTURE_2D,Ae,0,0,we,Je,Ie):i.texImage2D(s.TEXTURE_2D,Ae,We,we,Je,Ie);b.generateMipmaps=!1}else if(X){if(Oe){const Ae=ot(Te);i.texStorage2D(s.TEXTURE_2D,Ne,We,Ae.width,Ae.height)}De&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,we,Je,Te)}else i.texImage2D(s.TEXTURE_2D,0,We,we,Je,Te);E(b)&&v(ne),Be.__version=le.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function oe(U,b,G){if(b.image.length!==6)return;const ne=xe(U,b),me=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+G);const le=r.get(me);if(me.version!==le.__version||ne===!0){i.activeTexture(s.TEXTURE0+G);const Be=Ot.getPrimaries(Ot.workingColorSpace),Ue=b.colorSpace===er?null:Ot.getPrimaries(b.colorSpace),Qe=b.colorSpace===er||Be===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);const Ye=b.isCompressedTexture||b.image[0].isCompressedTexture,Te=b.image[0]&&b.image[0].isDataTexture,we=[];for(let Me=0;Me<6;Me++)!Ye&&!Te?we[Me]=A(b.image[Me],!0,l.maxCubemapSize):we[Me]=Te?b.image[Me].image:b.image[Me],we[Me]=Ke(b,we[Me]);const Je=we[0],We=c.convert(b.format,b.colorSpace),Ie=c.convert(b.type),lt=D(b.internalFormat,We,Ie,b.colorSpace),X=b.isVideoTexture!==!0,Oe=le.__version===void 0||ne===!0,De=me.dataReady;let Ne=j(b,Je);Z(s.TEXTURE_CUBE_MAP,b);let Ae;if(Ye){X&&Oe&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,lt,Je.width,Je.height);for(let Me=0;Me<6;Me++){Ae=we[Me].mipmaps;for(let Ve=0;Ve<Ae.length;Ve++){const ct=Ae[Ve];b.format!==xi?We!==null?X?De&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ve,0,0,ct.width,ct.height,We,ct.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ve,lt,ct.width,ct.height,0,ct.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ve,0,0,ct.width,ct.height,We,Ie,ct.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ve,lt,ct.width,ct.height,0,We,Ie,ct.data)}}}else{if(Ae=b.mipmaps,X&&Oe){Ae.length>0&&Ne++;const Me=ot(we[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,lt,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Te){X?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,we[Me].width,we[Me].height,We,Ie,we[Me].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,lt,we[Me].width,we[Me].height,0,We,Ie,we[Me].data);for(let Ve=0;Ve<Ae.length;Ve++){const Gt=Ae[Ve].image[Me].image;X?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ve+1,0,0,Gt.width,Gt.height,We,Ie,Gt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ve+1,lt,Gt.width,Gt.height,0,We,Ie,Gt.data)}}else{X?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,We,Ie,we[Me]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,lt,We,Ie,we[Me]);for(let Ve=0;Ve<Ae.length;Ve++){const ct=Ae[Ve];X?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ve+1,0,0,We,Ie,ct.image[Me]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ve+1,lt,We,Ie,ct.image[Me])}}}E(b)&&v(s.TEXTURE_CUBE_MAP),le.__version=me.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function Ee(U,b,G,ne,me,le){const Be=c.convert(G.format,G.colorSpace),Ue=c.convert(G.type),Qe=D(G.internalFormat,Be,Ue,G.colorSpace),Ye=r.get(b),Te=r.get(G);if(Te.__renderTarget=b,!Ye.__hasExternalTextures){const we=Math.max(1,b.width>>le),Je=Math.max(1,b.height>>le);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?i.texImage3D(me,le,Qe,we,Je,b.depth,0,Be,Ue,null):i.texImage2D(me,le,Qe,we,Je,0,Be,Ue,null)}i.bindFramebuffer(s.FRAMEBUFFER,U),Ge(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ne,me,Te.__webglTexture,0,_t(b)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ne,me,Te.__webglTexture,le),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Le(U,b,G){if(s.bindRenderbuffer(s.RENDERBUFFER,U),b.depthBuffer){const ne=b.depthTexture,me=ne&&ne.isDepthTexture?ne.type:null,le=z(b.stencilBuffer,me),Be=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=_t(b);Ge(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ue,le,b.width,b.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ue,le,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,le,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Be,s.RENDERBUFFER,U)}else{const ne=b.textures;for(let me=0;me<ne.length;me++){const le=ne[me],Be=c.convert(le.format,le.colorSpace),Ue=c.convert(le.type),Qe=D(le.internalFormat,Be,Ue,le.colorSpace),Ye=_t(b);G&&Ge(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye,Qe,b.width,b.height):Ge(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ye,Qe,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Qe,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pe(U,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=r.get(b.depthTexture);ne.__renderTarget=b,(!ne.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),de(b.depthTexture,0);const me=ne.__webglTexture,le=_t(b);if(b.depthTexture.format===Zo)Ge(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,me,0,le):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,me,0);else if(b.depthTexture.format===Ko)Ge(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,me,0,le):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function nt(U){const b=r.get(U),G=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){const ne=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ne){const me=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ne.removeEventListener("dispose",me)};ne.addEventListener("dispose",me),b.__depthDisposeCallback=me}b.__boundDepthTexture=ne}if(U.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const ne=U.texture.mipmaps;ne&&ne.length>0?Pe(b.__webglFramebuffer[0],U):Pe(b.__webglFramebuffer,U)}else if(G){b.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[ne]),b.__webglDepthbuffer[ne]===void 0)b.__webglDepthbuffer[ne]=s.createRenderbuffer(),Le(b.__webglDepthbuffer[ne],U,!1);else{const me=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=b.__webglDepthbuffer[ne];s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,le)}}else{const ne=U.texture.mipmaps;if(ne&&ne.length>0?i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Le(b.__webglDepthbuffer,U,!1);else{const me=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,le)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Rt(U,b,G){const ne=r.get(U);b!==void 0&&Ee(ne.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&nt(U)}function je(U){const b=U.texture,G=r.get(U),ne=r.get(b);U.addEventListener("dispose",I);const me=U.textures,le=U.isWebGLCubeRenderTarget===!0,Be=me.length>1;if(Be||(ne.__webglTexture===void 0&&(ne.__webglTexture=s.createTexture()),ne.__version=b.version,f.memory.textures++),le){G.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[Ue]=[];for(let Qe=0;Qe<b.mipmaps.length;Qe++)G.__webglFramebuffer[Ue][Qe]=s.createFramebuffer()}else G.__webglFramebuffer[Ue]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let Ue=0;Ue<b.mipmaps.length;Ue++)G.__webglFramebuffer[Ue]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(Be)for(let Ue=0,Qe=me.length;Ue<Qe;Ue++){const Ye=r.get(me[Ue]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=s.createTexture(),f.memory.textures++)}if(U.samples>0&&Ge(U)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Ue=0;Ue<me.length;Ue++){const Qe=me[Ue];G.__webglColorRenderbuffer[Ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[Ue]);const Ye=c.convert(Qe.format,Qe.colorSpace),Te=c.convert(Qe.type),we=D(Qe.internalFormat,Ye,Te,Qe.colorSpace,U.isXRRenderTarget===!0),Je=_t(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,Je,we,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,G.__webglColorRenderbuffer[Ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),Le(G.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(le){i.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture),Z(s.TEXTURE_CUBE_MAP,b);for(let Ue=0;Ue<6;Ue++)if(b.mipmaps&&b.mipmaps.length>0)for(let Qe=0;Qe<b.mipmaps.length;Qe++)Ee(G.__webglFramebuffer[Ue][Qe],U,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Qe);else Ee(G.__webglFramebuffer[Ue],U,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);E(b)&&v(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Be){for(let Ue=0,Qe=me.length;Ue<Qe;Ue++){const Ye=me[Ue],Te=r.get(Ye);let we=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(we=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(we,Te.__webglTexture),Z(we,Ye),Ee(G.__webglFramebuffer,U,Ye,s.COLOR_ATTACHMENT0+Ue,we,0),E(Ye)&&v(we)}i.unbindTexture()}else{let Ue=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ue=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ue,ne.__webglTexture),Z(Ue,b),b.mipmaps&&b.mipmaps.length>0)for(let Qe=0;Qe<b.mipmaps.length;Qe++)Ee(G.__webglFramebuffer[Qe],U,b,s.COLOR_ATTACHMENT0,Ue,Qe);else Ee(G.__webglFramebuffer,U,b,s.COLOR_ATTACHMENT0,Ue,0);E(b)&&v(Ue),i.unbindTexture()}U.depthBuffer&&nt(U)}function qe(U){const b=U.textures;for(let G=0,ne=b.length;G<ne;G++){const me=b[G];if(E(me)){const le=O(U),Be=r.get(me).__webglTexture;i.bindTexture(le,Be),v(le),i.unbindTexture()}}}const H=[],at=[];function dt(U){if(U.samples>0){if(Ge(U)===!1){const b=U.textures,G=U.width,ne=U.height;let me=s.COLOR_BUFFER_BIT;const le=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Be=r.get(U),Ue=b.length>1;if(Ue)for(let Ye=0;Ye<b.length;Ye++)i.bindFramebuffer(s.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer);const Qe=U.texture.mipmaps;Qe&&Qe.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let Ye=0;Ye<b.length;Ye++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),Ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Be.__webglColorRenderbuffer[Ye]);const Te=r.get(b[Ye]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Te,0)}s.blitFramebuffer(0,0,G,ne,0,0,G,ne,me,s.NEAREST),m===!0&&(H.length=0,at.length=0,H.push(s.COLOR_ATTACHMENT0+Ye),U.depthBuffer&&U.resolveDepthBuffer===!1&&(H.push(le),at.push(le),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,at)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,H))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ue)for(let Ye=0;Ye<b.length;Ye++){i.bindFramebuffer(s.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.RENDERBUFFER,Be.__webglColorRenderbuffer[Ye]);const Te=r.get(b[Ye]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.TEXTURE_2D,Te,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const b=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function _t(U){return Math.min(l.maxSamples,U.samples)}function Ge(U){const b=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ht(U){const b=f.render.frame;g.get(U)!==b&&(g.set(U,b),U.update())}function Ke(U,b){const G=U.colorSpace,ne=U.format,me=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||G!==Fs&&G!==er&&(Ot.getTransfer(G)===Xt?(ne!==xi||me!==ba)&&ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):sn("WebGLTextures: Unsupported texture color space:",G)),b}function ot(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=te,this.resetTextureUnits=k,this.setTexture2D=de,this.setTexture2DArray=P,this.setTexture3D=K,this.setTextureCube=Y,this.rebindTextures=Rt,this.setupRenderTarget=je,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Ge}function LA(s,e){function i(r,l=er){let c;const f=Ot.getTransfer(l);if(r===ba)return s.UNSIGNED_BYTE;if(r===dp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===hp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===jv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Xv)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Vv)return s.BYTE;if(r===kv)return s.SHORT;if(r===qo)return s.UNSIGNED_SHORT;if(r===fp)return s.INT;if(r===Fr)return s.UNSIGNED_INT;if(r===zi)return s.FLOAT;if(r===zr)return s.HALF_FLOAT;if(r===Wv)return s.ALPHA;if(r===qv)return s.RGB;if(r===xi)return s.RGBA;if(r===Zo)return s.DEPTH_COMPONENT;if(r===Ko)return s.DEPTH_STENCIL;if(r===Yv)return s.RED;if(r===pp)return s.RED_INTEGER;if(r===mp)return s.RG;if(r===xp)return s.RG_INTEGER;if(r===gp)return s.RGBA_INTEGER;if(r===Xc||r===Wc||r===qc||r===Yc)if(f===Xt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Xc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Yc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Xc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Wc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===qc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Yc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ah||r===wh||r===Rh||r===Ch)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Ah)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===wh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Rh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ch)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Dh||r===Nh||r===Uh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Dh||r===Nh)return f===Xt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Uh)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Lh||r===Oh||r===Fh||r===zh||r===Ph||r===Bh||r===Ih||r===Hh||r===Gh||r===Vh||r===kh||r===jh||r===Xh||r===Wh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Lh)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Oh)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Fh)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===zh)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ph)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Bh)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ih)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Hh)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Gh)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Vh)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===kh)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===jh)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Xh)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Wh)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===qh||r===Yh||r===Zh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===qh)return f===Xt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Yh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Zh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Kh||r===Qh||r===Jh||r===$h)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Kh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Qh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Jh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===$h)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Yo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const OA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class zA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new c_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Bi({vertexShader:OA,fragmentShader:FA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new wi(new Or(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PA extends Hs{constructor(e,i){super();const r=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,g=null,x=null,_=null,M=null,T=null;const A=typeof XRWebGLBinding<"u",E=new zA,v={},O=i.getContextAttributes();let D=null,z=null;const j=[],L=[],I=new ht;let q=null;const N=new Ei;N.viewport=new nn;const R=new Ei;R.viewport=new nn;const F=[N,R],k=new t3;let te=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let oe=j[ie];return oe===void 0&&(oe=new Zd,j[ie]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(ie){let oe=j[ie];return oe===void 0&&(oe=new Zd,j[ie]=oe),oe.getGripSpace()},this.getHand=function(ie){let oe=j[ie];return oe===void 0&&(oe=new Zd,j[ie]=oe),oe.getHandSpace()};function de(ie){const oe=L.indexOf(ie.inputSource);if(oe===-1)return;const Ee=j[oe];Ee!==void 0&&(Ee.update(ie.inputSource,ie.frame,p||f),Ee.dispatchEvent({type:ie.type,data:ie.inputSource}))}function P(){l.removeEventListener("select",de),l.removeEventListener("selectstart",de),l.removeEventListener("selectend",de),l.removeEventListener("squeeze",de),l.removeEventListener("squeezestart",de),l.removeEventListener("squeezeend",de),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",K);for(let ie=0;ie<j.length;ie++){const oe=L[ie];oe!==null&&(L[ie]=null,j[ie].disconnect(oe))}te=null,$=null,E.reset();for(const ie in v)delete v[ie];e.setRenderTarget(D),M=null,_=null,x=null,l=null,z=null,Re.stop(),r.isPresenting=!1,e.setPixelRatio(q),e.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){c=ie,r.isPresenting===!0&&ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){h=ie,r.isPresenting===!0&&ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(ie){p=ie},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return x===null&&A&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(ie){if(l=ie,l!==null){if(D=e.getRenderTarget(),l.addEventListener("select",de),l.addEventListener("selectstart",de),l.addEventListener("selectend",de),l.addEventListener("squeeze",de),l.addEventListener("squeezestart",de),l.addEventListener("squeezeend",de),l.addEventListener("end",P),l.addEventListener("inputsourceschange",K),O.xrCompatible!==!0&&await i.makeXRCompatible(),q=e.getPixelRatio(),e.getSize(I),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Le=null,Pe=null;O.depth&&(Pe=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ee=O.stencil?Ko:Zo,Le=O.stencil?Yo:Fr);const nt={colorFormat:i.RGBA8,depthFormat:Pe,scaleFactor:c};x=this.getBinding(),_=x.createProjectionLayer(nt),l.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),z=new ar(_.textureWidth,_.textureHeight,{format:xi,type:ba,depthTexture:new l_(_.textureWidth,_.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Ee={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Ee),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),z=new ar(M.framebufferWidth,M.framebufferHeight,{format:xi,type:ba,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Re.setContext(l),Re.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function K(ie){for(let oe=0;oe<ie.removed.length;oe++){const Ee=ie.removed[oe],Le=L.indexOf(Ee);Le>=0&&(L[Le]=null,j[Le].disconnect(Ee))}for(let oe=0;oe<ie.added.length;oe++){const Ee=ie.added[oe];let Le=L.indexOf(Ee);if(Le===-1){for(let nt=0;nt<j.length;nt++)if(nt>=L.length){L.push(Ee),Le=nt;break}else if(L[nt]===null){L[nt]=Ee,Le=nt;break}if(Le===-1)break}const Pe=j[Le];Pe&&Pe.connect(Ee)}}const Y=new pe,ve=new pe;function Se(ie,oe,Ee){Y.setFromMatrixPosition(oe.matrixWorld),ve.setFromMatrixPosition(Ee.matrixWorld);const Le=Y.distanceTo(ve),Pe=oe.projectionMatrix.elements,nt=Ee.projectionMatrix.elements,Rt=Pe[14]/(Pe[10]-1),je=Pe[14]/(Pe[10]+1),qe=(Pe[9]+1)/Pe[5],H=(Pe[9]-1)/Pe[5],at=(Pe[8]-1)/Pe[0],dt=(nt[8]+1)/nt[0],_t=Rt*at,Ge=Rt*dt,Ht=Le/(-at+dt),Ke=Ht*-at;if(oe.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Ke),ie.translateZ(Ht),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Pe[10]===-1)ie.projectionMatrix.copy(oe.projectionMatrix),ie.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const ot=Rt+Ht,U=je+Ht,b=_t-Ke,G=Ge+(Le-Ke),ne=qe*je/U*ot,me=H*je/U*ot;ie.projectionMatrix.makePerspective(b,G,ne,me,ot,U),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function B(ie,oe){oe===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(oe.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(l===null)return;let oe=ie.near,Ee=ie.far;E.texture!==null&&(E.depthNear>0&&(oe=E.depthNear),E.depthFar>0&&(Ee=E.depthFar)),k.near=R.near=N.near=oe,k.far=R.far=N.far=Ee,(te!==k.near||$!==k.far)&&(l.updateRenderState({depthNear:k.near,depthFar:k.far}),te=k.near,$=k.far),k.layers.mask=ie.layers.mask|6,N.layers.mask=k.layers.mask&3,R.layers.mask=k.layers.mask&5;const Le=ie.parent,Pe=k.cameras;B(k,Le);for(let nt=0;nt<Pe.length;nt++)B(Pe[nt],Le);Pe.length===2?Se(k,N,R):k.projectionMatrix.copy(N.projectionMatrix),Z(ie,k,Le)};function Z(ie,oe,Ee){Ee===null?ie.matrix.copy(oe.matrixWorld):(ie.matrix.copy(Ee.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(oe.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(oe.projectionMatrix),ie.projectionMatrixInverse.copy(oe.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=ep*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(_===null&&M===null))return m},this.setFoveation=function(ie){m=ie,_!==null&&(_.fixedFoveation=ie),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ie)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(k)},this.getCameraTexture=function(ie){return v[ie]};let xe=null;function _e(ie,oe){if(g=oe.getViewerPose(p||f),T=oe,g!==null){const Ee=g.views;M!==null&&(e.setRenderTargetFramebuffer(z,M.framebuffer),e.setRenderTarget(z));let Le=!1;Ee.length!==k.cameras.length&&(k.cameras.length=0,Le=!0);for(let je=0;je<Ee.length;je++){const qe=Ee[je];let H=null;if(M!==null)H=M.getViewport(qe);else{const dt=x.getViewSubImage(_,qe);H=dt.viewport,je===0&&(e.setRenderTargetTextures(z,dt.colorTexture,dt.depthStencilTexture),e.setRenderTarget(z))}let at=F[je];at===void 0&&(at=new Ei,at.layers.enable(je),at.viewport=new nn,F[je]=at),at.matrix.fromArray(qe.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(qe.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(H.x,H.y,H.width,H.height),je===0&&(k.matrix.copy(at.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Le===!0&&k.cameras.push(at)}const Pe=l.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){x=r.getBinding();const je=x.getDepthInformation(Ee[0]);je&&je.isValid&&je.texture&&E.init(je,l.renderState)}if(Pe&&Pe.includes("camera-access")&&A){e.state.unbindTexture(),x=r.getBinding();for(let je=0;je<Ee.length;je++){const qe=Ee[je].camera;if(qe){let H=v[qe];H||(H=new c_,v[qe]=H);const at=x.getCameraImage(qe);H.sourceTexture=at}}}}for(let Ee=0;Ee<j.length;Ee++){const Le=L[Ee],Pe=j[Ee];Le!==null&&Pe!==void 0&&Pe.update(Le,oe,p||f)}xe&&xe(ie,oe),oe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:oe}),T=null}const Re=new u_;Re.setAnimationLoop(_e),this.setAnimationLoop=function(ie){xe=ie},this.dispose=function(){}}}const Cr=new ya,BA=new hn;function IA(s,e){function i(E,v){E.matrixAutoUpdate===!0&&E.updateMatrix(),v.value.copy(E.matrix)}function r(E,v){v.color.getRGB(E.fogColor.value,a_(s)),v.isFog?(E.fogNear.value=v.near,E.fogFar.value=v.far):v.isFogExp2&&(E.fogDensity.value=v.density)}function l(E,v,O,D,z){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(E,v):v.isMeshToonMaterial?(c(E,v),x(E,v)):v.isMeshPhongMaterial?(c(E,v),g(E,v)):v.isMeshStandardMaterial?(c(E,v),_(E,v),v.isMeshPhysicalMaterial&&M(E,v,z)):v.isMeshMatcapMaterial?(c(E,v),T(E,v)):v.isMeshDepthMaterial?c(E,v):v.isMeshDistanceMaterial?(c(E,v),A(E,v)):v.isMeshNormalMaterial?c(E,v):v.isLineBasicMaterial?(f(E,v),v.isLineDashedMaterial&&h(E,v)):v.isPointsMaterial?m(E,v,O,D):v.isSpriteMaterial?p(E,v):v.isShadowMaterial?(E.color.value.copy(v.color),E.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(E,v){E.opacity.value=v.opacity,v.color&&E.diffuse.value.copy(v.color),v.emissive&&E.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(E.map.value=v.map,i(v.map,E.mapTransform)),v.alphaMap&&(E.alphaMap.value=v.alphaMap,i(v.alphaMap,E.alphaMapTransform)),v.bumpMap&&(E.bumpMap.value=v.bumpMap,i(v.bumpMap,E.bumpMapTransform),E.bumpScale.value=v.bumpScale,v.side===Xn&&(E.bumpScale.value*=-1)),v.normalMap&&(E.normalMap.value=v.normalMap,i(v.normalMap,E.normalMapTransform),E.normalScale.value.copy(v.normalScale),v.side===Xn&&E.normalScale.value.negate()),v.displacementMap&&(E.displacementMap.value=v.displacementMap,i(v.displacementMap,E.displacementMapTransform),E.displacementScale.value=v.displacementScale,E.displacementBias.value=v.displacementBias),v.emissiveMap&&(E.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,E.emissiveMapTransform)),v.specularMap&&(E.specularMap.value=v.specularMap,i(v.specularMap,E.specularMapTransform)),v.alphaTest>0&&(E.alphaTest.value=v.alphaTest);const O=e.get(v),D=O.envMap,z=O.envMapRotation;D&&(E.envMap.value=D,Cr.copy(z),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),E.envMapRotation.value.setFromMatrix4(BA.makeRotationFromEuler(Cr)),E.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,E.reflectivity.value=v.reflectivity,E.ior.value=v.ior,E.refractionRatio.value=v.refractionRatio),v.lightMap&&(E.lightMap.value=v.lightMap,E.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,E.lightMapTransform)),v.aoMap&&(E.aoMap.value=v.aoMap,E.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,E.aoMapTransform))}function f(E,v){E.diffuse.value.copy(v.color),E.opacity.value=v.opacity,v.map&&(E.map.value=v.map,i(v.map,E.mapTransform))}function h(E,v){E.dashSize.value=v.dashSize,E.totalSize.value=v.dashSize+v.gapSize,E.scale.value=v.scale}function m(E,v,O,D){E.diffuse.value.copy(v.color),E.opacity.value=v.opacity,E.size.value=v.size*O,E.scale.value=D*.5,v.map&&(E.map.value=v.map,i(v.map,E.uvTransform)),v.alphaMap&&(E.alphaMap.value=v.alphaMap,i(v.alphaMap,E.alphaMapTransform)),v.alphaTest>0&&(E.alphaTest.value=v.alphaTest)}function p(E,v){E.diffuse.value.copy(v.color),E.opacity.value=v.opacity,E.rotation.value=v.rotation,v.map&&(E.map.value=v.map,i(v.map,E.mapTransform)),v.alphaMap&&(E.alphaMap.value=v.alphaMap,i(v.alphaMap,E.alphaMapTransform)),v.alphaTest>0&&(E.alphaTest.value=v.alphaTest)}function g(E,v){E.specular.value.copy(v.specular),E.shininess.value=Math.max(v.shininess,1e-4)}function x(E,v){v.gradientMap&&(E.gradientMap.value=v.gradientMap)}function _(E,v){E.metalness.value=v.metalness,v.metalnessMap&&(E.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,E.metalnessMapTransform)),E.roughness.value=v.roughness,v.roughnessMap&&(E.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,E.roughnessMapTransform)),v.envMap&&(E.envMapIntensity.value=v.envMapIntensity)}function M(E,v,O){E.ior.value=v.ior,v.sheen>0&&(E.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),E.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(E.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,E.sheenColorMapTransform)),v.sheenRoughnessMap&&(E.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,E.sheenRoughnessMapTransform))),v.clearcoat>0&&(E.clearcoat.value=v.clearcoat,E.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(E.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,E.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(E.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(E.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Xn&&E.clearcoatNormalScale.value.negate())),v.dispersion>0&&(E.dispersion.value=v.dispersion),v.iridescence>0&&(E.iridescence.value=v.iridescence,E.iridescenceIOR.value=v.iridescenceIOR,E.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(E.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,E.iridescenceMapTransform)),v.iridescenceThicknessMap&&(E.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,E.iridescenceThicknessMapTransform))),v.transmission>0&&(E.transmission.value=v.transmission,E.transmissionSamplerMap.value=O.texture,E.transmissionSamplerSize.value.set(O.width,O.height),v.transmissionMap&&(E.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,E.transmissionMapTransform)),E.thickness.value=v.thickness,v.thicknessMap&&(E.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,E.thicknessMapTransform)),E.attenuationDistance.value=v.attenuationDistance,E.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(E.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(E.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,E.anisotropyMapTransform))),E.specularIntensity.value=v.specularIntensity,E.specularColor.value.copy(v.specularColor),v.specularColorMap&&(E.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,E.specularColorMapTransform)),v.specularIntensityMap&&(E.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,E.specularIntensityMapTransform))}function T(E,v){v.matcap&&(E.matcap.value=v.matcap)}function A(E,v){const O=e.get(v).light;E.referencePosition.value.setFromMatrixPosition(O.matrixWorld),E.nearDistance.value=O.shadow.camera.near,E.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function HA(s,e,i,r){let l={},c={},f=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,D){const z=D.program;r.uniformBlockBinding(O,z)}function p(O,D){let z=l[O.id];z===void 0&&(T(O),z=g(O),l[O.id]=z,O.addEventListener("dispose",E));const j=D.program;r.updateUBOMapping(O,j);const L=e.render.frame;c[O.id]!==L&&(_(O),c[O.id]=L)}function g(O){const D=x();O.__bindingPointIndex=D;const z=s.createBuffer(),j=O.__size,L=O.usage;return s.bindBuffer(s.UNIFORM_BUFFER,z),s.bufferData(s.UNIFORM_BUFFER,j,L),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,z),z}function x(){for(let O=0;O<h;O++)if(f.indexOf(O)===-1)return f.push(O),O;return sn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(O){const D=l[O.id],z=O.uniforms,j=O.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let L=0,I=z.length;L<I;L++){const q=Array.isArray(z[L])?z[L]:[z[L]];for(let N=0,R=q.length;N<R;N++){const F=q[N];if(M(F,L,N,j)===!0){const k=F.__offset,te=Array.isArray(F.value)?F.value:[F.value];let $=0;for(let de=0;de<te.length;de++){const P=te[de],K=A(P);typeof P=="number"||typeof P=="boolean"?(F.__data[0]=P,s.bufferSubData(s.UNIFORM_BUFFER,k+$,F.__data)):P.isMatrix3?(F.__data[0]=P.elements[0],F.__data[1]=P.elements[1],F.__data[2]=P.elements[2],F.__data[3]=0,F.__data[4]=P.elements[3],F.__data[5]=P.elements[4],F.__data[6]=P.elements[5],F.__data[7]=0,F.__data[8]=P.elements[6],F.__data[9]=P.elements[7],F.__data[10]=P.elements[8],F.__data[11]=0):(P.toArray(F.__data,$),$+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,F.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(O,D,z,j){const L=O.value,I=D+"_"+z;if(j[I]===void 0)return typeof L=="number"||typeof L=="boolean"?j[I]=L:j[I]=L.clone(),!0;{const q=j[I];if(typeof L=="number"||typeof L=="boolean"){if(q!==L)return j[I]=L,!0}else if(q.equals(L)===!1)return q.copy(L),!0}return!1}function T(O){const D=O.uniforms;let z=0;const j=16;for(let I=0,q=D.length;I<q;I++){const N=Array.isArray(D[I])?D[I]:[D[I]];for(let R=0,F=N.length;R<F;R++){const k=N[R],te=Array.isArray(k.value)?k.value:[k.value];for(let $=0,de=te.length;$<de;$++){const P=te[$],K=A(P),Y=z%j,ve=Y%K.boundary,Se=Y+ve;z+=ve,Se!==0&&j-Se<K.storage&&(z+=j-Se),k.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=z,z+=K.storage}}}const L=z%j;return L>0&&(z+=j-L),O.__size=z,O.__cache={},this}function A(O){const D={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(D.boundary=4,D.storage=4):O.isVector2?(D.boundary=8,D.storage=8):O.isVector3||O.isColor?(D.boundary=16,D.storage=12):O.isVector4?(D.boundary=16,D.storage=16):O.isMatrix3?(D.boundary=48,D.storage=48):O.isMatrix4?(D.boundary=64,D.storage=64):O.isTexture?ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ft("WebGLRenderer: Unsupported uniform value type.",O),D}function E(O){const D=O.target;D.removeEventListener("dispose",E);const z=f.indexOf(D.__bindingPointIndex);f.splice(z,1),s.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function v(){for(const O in l)s.deleteBuffer(l[O]);f=[],l={},c={}}return{bind:m,update:p,dispose:v}}const GA=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let fa=null;function VA(){return fa===null&&(fa=new s_(GA,32,32,mp,zr),fa.minFilter=On,fa.magFilter=On,fa.wrapS=ai,fa.wrapT=ai,fa.generateMipmaps=!1,fa.needsUpdate=!0),fa}class kA{constructor(e={}){const{canvas:i=_2(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=f;const T=new Set([gp,xp,pp]),A=new Set([ba,Fr,qo,Yo,dp,hp]),E=new Uint32Array(4),v=new Int32Array(4);let O=null,D=null;const z=[],j=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=nr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let I=!1;this._outputColorSpace=mi;let q=0,N=0,R=null,F=-1,k=null;const te=new nn,$=new nn;let de=null;const P=new zt(0);let K=0,Y=i.width,ve=i.height,Se=1,B=null,Z=null;const xe=new nn(0,0,Y,ve),_e=new nn(0,0,Y,ve);let Re=!1;const ie=new o_;let oe=!1,Ee=!1;const Le=new hn,Pe=new pe,nt=new nn,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function qe(){return R===null?Se:1}let H=r;function at(C,Q){return i.getContext(C,Q)}try{const C={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${up}`),i.addEventListener("webglcontextlost",Ae,!1),i.addEventListener("webglcontextrestored",Me,!1),i.addEventListener("webglcontextcreationerror",Ve,!1),H===null){const Q="webgl2";if(H=at(Q,C),H===null)throw at(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw C("WebGLRenderer: "+C.message),C}let dt,_t,Ge,Ht,Ke,ot,U,b,G,ne,me,le,Be,Ue,Qe,Ye,Te,we,Je,We,Ie,lt,X,Oe;function De(){dt=new QE(H),dt.init(),lt=new LA(H,dt),_t=new VE(H,dt,e,lt),Ge=new NA(H,dt),_t.reversedDepthBuffer&&_&&Ge.buffers.depth.setReversed(!0),Ht=new eT(H),Ke=new vA,ot=new UA(H,dt,Ge,Ke,_t,lt,Ht),U=new jE(L),b=new KE(L),G=new a3(H),X=new HE(H,G),ne=new JE(H,G,Ht,X),me=new nT(H,ne,G,Ht),Je=new tT(H,_t,ot),Ye=new kE(Ke),le=new gA(L,U,b,dt,_t,X,Ye),Be=new IA(L,Ke),Ue=new bA,Qe=new AA(dt),we=new IE(L,U,b,Ge,me,M,m),Te=new CA(L,me,_t),Oe=new HA(H,Ht,_t,Ge),We=new GE(H,dt,Ht),Ie=new $E(H,dt,Ht),Ht.programs=le.programs,L.capabilities=_t,L.extensions=dt,L.properties=Ke,L.renderLists=Ue,L.shadowMap=Te,L.state=Ge,L.info=Ht}De();const Ne=new PA(L,H);this.xr=Ne,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=dt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=dt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(C){C!==void 0&&(Se=C,this.setSize(Y,ve,!1))},this.getSize=function(C){return C.set(Y,ve)},this.setSize=function(C,Q,fe=!0){if(Ne.isPresenting){ft("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=C,ve=Q,i.width=Math.floor(C*Se),i.height=Math.floor(Q*Se),fe===!0&&(i.style.width=C+"px",i.style.height=Q+"px"),this.setViewport(0,0,C,Q)},this.getDrawingBufferSize=function(C){return C.set(Y*Se,ve*Se).floor()},this.setDrawingBufferSize=function(C,Q,fe){Y=C,ve=Q,Se=fe,i.width=Math.floor(C*fe),i.height=Math.floor(Q*fe),this.setViewport(0,0,C,Q)},this.getCurrentViewport=function(C){return C.copy(te)},this.getViewport=function(C){return C.copy(xe)},this.setViewport=function(C,Q,fe,se){C.isVector4?xe.set(C.x,C.y,C.z,C.w):xe.set(C,Q,fe,se),Ge.viewport(te.copy(xe).multiplyScalar(Se).round())},this.getScissor=function(C){return C.copy(_e)},this.setScissor=function(C,Q,fe,se){C.isVector4?_e.set(C.x,C.y,C.z,C.w):_e.set(C,Q,fe,se),Ge.scissor($.copy(_e).multiplyScalar(Se).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(C){Ge.setScissorTest(Re=C)},this.setOpaqueSort=function(C){B=C},this.setTransparentSort=function(C){Z=C},this.getClearColor=function(C){return C.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(C=!0,Q=!0,fe=!0){let se=0;if(C){let ee=!1;if(R!==null){const Ce=R.texture.format;ee=T.has(Ce)}if(ee){const Ce=R.texture.type,Fe=A.has(Ce),He=we.getClearColor(),ke=we.getClearAlpha(),it=He.r,st=He.g,$e=He.b;Fe?(E[0]=it,E[1]=st,E[2]=$e,E[3]=ke,H.clearBufferuiv(H.COLOR,0,E)):(v[0]=it,v[1]=st,v[2]=$e,v[3]=ke,H.clearBufferiv(H.COLOR,0,v))}else se|=H.COLOR_BUFFER_BIT}Q&&(se|=H.DEPTH_BUFFER_BIT),fe&&(se|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ae,!1),i.removeEventListener("webglcontextrestored",Me,!1),i.removeEventListener("webglcontextcreationerror",Ve,!1),we.dispose(),Ue.dispose(),Qe.dispose(),Ke.dispose(),U.dispose(),b.dispose(),me.dispose(),X.dispose(),Oe.dispose(),le.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",Vs),Ne.removeEventListener("sessionend",ks),gi.stop()};function Ae(C){C.preventDefault(),Ag("WebGLRenderer: Context Lost."),I=!0}function Me(){Ag("WebGLRenderer: Context Restored."),I=!1;const C=Ht.autoReset,Q=Te.enabled,fe=Te.autoUpdate,se=Te.needsUpdate,ee=Te.type;De(),Ht.autoReset=C,Te.enabled=Q,Te.autoUpdate=fe,Te.needsUpdate=se,Te.type=ee}function Ve(C){sn("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ct(C){const Q=C.target;Q.removeEventListener("dispose",ct),Gt(Q)}function Gt(C){Dt(C),Ke.remove(C)}function Dt(C){const Q=Ke.get(C).programs;Q!==void 0&&(Q.forEach(function(fe){le.releaseProgram(fe)}),C.isShaderMaterial&&le.releaseShaderCache(C))}this.renderBufferDirect=function(C,Q,fe,se,ee,Ce){Q===null&&(Q=Rt);const Fe=ee.isMesh&&ee.matrixWorld.determinant()<0,He=fu(C,Q,fe,se,ee);Ge.setMaterial(se,Fe);let ke=fe.index,it=1;if(se.wireframe===!0){if(ke=ne.getWireframeAttribute(fe),ke===void 0)return;it=2}const st=fe.drawRange,$e=fe.attributes.position;let mt=st.start*it,Ct=(st.start+st.count)*it;Ce!==null&&(mt=Math.max(mt,Ce.start*it),Ct=Math.min(Ct,(Ce.start+Ce.count)*it)),ke!==null?(mt=Math.max(mt,0),Ct=Math.min(Ct,ke.count)):$e!=null&&(mt=Math.max(mt,0),Ct=Math.min(Ct,$e.count));const Nt=Ct-mt;if(Nt<0||Nt===1/0)return;X.setup(ee,se,He,fe,ke);let Et,Pt=We;if(ke!==null&&(Et=G.get(ke),Pt=Ie,Pt.setIndex(Et)),ee.isMesh)se.wireframe===!0?(Ge.setLineWidth(se.wireframeLinewidth*qe()),Pt.setMode(H.LINES)):Pt.setMode(H.TRIANGLES);else if(ee.isLine){let tt=se.linewidth;tt===void 0&&(tt=1),Ge.setLineWidth(tt*qe()),ee.isLineSegments?Pt.setMode(H.LINES):ee.isLineLoop?Pt.setMode(H.LINE_LOOP):Pt.setMode(H.LINE_STRIP)}else ee.isPoints?Pt.setMode(H.POINTS):ee.isSprite&&Pt.setMode(H.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)Qo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pt.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))Pt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const tt=ee._multiDrawStarts,Wt=ee._multiDrawCounts,Tt=ee._multiDrawCount,_n=ke?G.get(ke).bytesPerElement:1,Ea=Ke.get(se).currentProgram.getUniforms();for(let Yt=0;Yt<Tt;Yt++)Ea.setValue(H,"_gl_DrawID",Yt),Pt.render(tt[Yt]/_n,Wt[Yt])}else if(ee.isInstancedMesh)Pt.renderInstances(mt,Nt,ee.count);else if(fe.isInstancedBufferGeometry){const tt=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Wt=Math.min(fe.instanceCount,tt);Pt.renderInstances(mt,Nt,Wt)}else Pt.render(mt,Nt)};function Cn(C,Q,fe){C.transparent===!0&&C.side===ha&&C.forceSinglePass===!1?(C.side=Xn,C.needsUpdate=!0,pn(C,Q,fe),C.side=ir,C.needsUpdate=!0,pn(C,Q,fe),C.side=ha):pn(C,Q,fe)}this.compile=function(C,Q,fe=null){fe===null&&(fe=C),D=Qe.get(fe),D.init(Q),j.push(D),fe.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Q.layers)&&(D.pushLight(ee),ee.castShadow&&D.pushShadow(ee))}),C!==fe&&C.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Q.layers)&&(D.pushLight(ee),ee.castShadow&&D.pushShadow(ee))}),D.setupLights();const se=new Set;return C.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Ce=ee.material;if(Ce)if(Array.isArray(Ce))for(let Fe=0;Fe<Ce.length;Fe++){const He=Ce[Fe];Cn(He,fe,ee),se.add(He)}else Cn(Ce,fe,ee),se.add(Ce)}),D=j.pop(),se},this.compileAsync=function(C,Q,fe=null){const se=this.compile(C,Q,fe);return new Promise(ee=>{function Ce(){if(se.forEach(function(Fe){Ke.get(Fe).currentProgram.isReady()&&se.delete(Fe)}),se.size===0){ee(C);return}setTimeout(Ce,10)}dt.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let qn=null;function sl(C){qn&&qn(C)}function Vs(){gi.stop()}function ks(){gi.start()}const gi=new u_;gi.setAnimationLoop(sl),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(C){qn=C,Ne.setAnimationLoop(C),C===null?gi.stop():gi.start()},Ne.addEventListener("sessionstart",Vs),Ne.addEventListener("sessionend",ks),this.render=function(C,Q){if(Q!==void 0&&Q.isCamera!==!0){sn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(Q),Q=Ne.getCamera()),C.isScene===!0&&C.onBeforeRender(L,C,Q,R),D=Qe.get(C,j.length),D.init(Q),j.push(D),Le.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),ie.setFromProjectionMatrix(Le,Pi,Q.reversedDepth),Ee=this.localClippingEnabled,oe=Ye.init(this.clippingPlanes,Ee),O=Ue.get(C,z.length),O.init(),z.push(O),Ne.enabled===!0&&Ne.isPresenting===!0){const Ce=L.xr.getDepthSensingMesh();Ce!==null&&sr(Ce,Q,-1/0,L.sortObjects)}sr(C,Q,0,L.sortObjects),O.finish(),L.sortObjects===!0&&O.sort(B,Z),je=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1,je&&we.addToRenderList(O,C),this.info.render.frame++,oe===!0&&Ye.beginShadows();const fe=D.state.shadowsArray;Te.render(fe,C,Q),oe===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=O.opaque,ee=O.transmissive;if(D.setupLights(),Q.isArrayCamera){const Ce=Q.cameras;if(ee.length>0)for(let Fe=0,He=Ce.length;Fe<He;Fe++){const ke=Ce[Fe];Xs(se,ee,C,ke)}je&&we.render(C);for(let Fe=0,He=Ce.length;Fe<He;Fe++){const ke=Ce[Fe];js(O,C,ke,ke.viewport)}}else ee.length>0&&Xs(se,ee,C,Q),je&&we.render(C),js(O,C,Q);R!==null&&N===0&&(ot.updateMultisampleRenderTarget(R),ot.updateRenderTargetMipmap(R)),C.isScene===!0&&C.onAfterRender(L,C,Q),X.resetDefaultState(),F=-1,k=null,j.pop(),j.length>0?(D=j[j.length-1],oe===!0&&Ye.setGlobalState(L.clippingPlanes,D.state.camera)):D=null,z.pop(),z.length>0?O=z[z.length-1]:O=null};function sr(C,Q,fe,se){if(C.visible===!1)return;if(C.layers.test(Q.layers)){if(C.isGroup)fe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Q);else if(C.isLight)D.pushLight(C),C.castShadow&&D.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ie.intersectsSprite(C)){se&&nt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Le);const Fe=me.update(C),He=C.material;He.visible&&O.push(C,Fe,He,fe,nt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ie.intersectsObject(C))){const Fe=me.update(C),He=C.material;if(se&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),nt.copy(C.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),nt.copy(Fe.boundingSphere.center)),nt.applyMatrix4(C.matrixWorld).applyMatrix4(Le)),Array.isArray(He)){const ke=Fe.groups;for(let it=0,st=ke.length;it<st;it++){const $e=ke[it],mt=He[$e.materialIndex];mt&&mt.visible&&O.push(C,Fe,mt,fe,nt.z,$e)}}else He.visible&&O.push(C,Fe,He,fe,nt.z,null)}}const Ce=C.children;for(let Fe=0,He=Ce.length;Fe<He;Fe++)sr(Ce[Fe],Q,fe,se)}function js(C,Q,fe,se){const{opaque:ee,transmissive:Ce,transparent:Fe}=C;D.setupLightsView(fe),oe===!0&&Ye.setGlobalState(L.clippingPlanes,fe),se&&Ge.viewport(te.copy(se)),ee.length>0&&Yn(ee,Q,fe),Ce.length>0&&Yn(Ce,Q,fe),Fe.length>0&&Yn(Fe,Q,fe),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function Xs(C,Q,fe,se){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;D.state.transmissionRenderTarget[se.id]===void 0&&(D.state.transmissionRenderTarget[se.id]=new ar(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?zr:ba,minFilter:Lr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ot.workingColorSpace}));const Ce=D.state.transmissionRenderTarget[se.id],Fe=se.viewport||te;Ce.setSize(Fe.z*L.transmissionResolutionScale,Fe.w*L.transmissionResolutionScale);const He=L.getRenderTarget(),ke=L.getActiveCubeFace(),it=L.getActiveMipmapLevel();L.setRenderTarget(Ce),L.getClearColor(P),K=L.getClearAlpha(),K<1&&L.setClearColor(16777215,.5),L.clear(),je&&we.render(fe);const st=L.toneMapping;L.toneMapping=nr;const $e=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),D.setupLightsView(se),oe===!0&&Ye.setGlobalState(L.clippingPlanes,se),Yn(C,fe,se),ot.updateMultisampleRenderTarget(Ce),ot.updateRenderTargetMipmap(Ce),dt.has("WEBGL_multisampled_render_to_texture")===!1){let mt=!1;for(let Ct=0,Nt=Q.length;Ct<Nt;Ct++){const Et=Q[Ct],{object:Pt,geometry:tt,material:Wt,group:Tt}=Et;if(Wt.side===ha&&Pt.layers.test(se.layers)){const _n=Wt.side;Wt.side=Xn,Wt.needsUpdate=!0,on(Pt,fe,se,tt,Wt,Tt),Wt.side=_n,Wt.needsUpdate=!0,mt=!0}}mt===!0&&(ot.updateMultisampleRenderTarget(Ce),ot.updateRenderTargetMipmap(Ce))}L.setRenderTarget(He,ke,it),L.setClearColor(P,K),$e!==void 0&&(se.viewport=$e),L.toneMapping=st}function Yn(C,Q,fe){const se=Q.isScene===!0?Q.overrideMaterial:null;for(let ee=0,Ce=C.length;ee<Ce;ee++){const Fe=C[ee],{object:He,geometry:ke,group:it}=Fe;let st=Fe.material;st.allowOverride===!0&&se!==null&&(st=se),He.layers.test(fe.layers)&&on(He,Q,fe,ke,st,it)}}function on(C,Q,fe,se,ee,Ce){C.onBeforeRender(L,Q,fe,se,ee,Ce),C.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ee.onBeforeRender(L,Q,fe,se,C,Ce),ee.transparent===!0&&ee.side===ha&&ee.forceSinglePass===!1?(ee.side=Xn,ee.needsUpdate=!0,L.renderBufferDirect(fe,Q,se,ee,C,Ce),ee.side=ir,ee.needsUpdate=!0,L.renderBufferDirect(fe,Q,se,ee,C,Ce),ee.side=ha):L.renderBufferDirect(fe,Q,se,ee,C,Ce),C.onAfterRender(L,Q,fe,se,ee,Ce)}function pn(C,Q,fe){Q.isScene!==!0&&(Q=Rt);const se=Ke.get(C),ee=D.state.lights,Ce=D.state.shadowsArray,Fe=ee.state.version,He=le.getParameters(C,ee.state,Ce,Q,fe),ke=le.getProgramCacheKey(He);let it=se.programs;se.environment=C.isMeshStandardMaterial?Q.environment:null,se.fog=Q.fog,se.envMap=(C.isMeshStandardMaterial?b:U).get(C.envMap||se.environment),se.envMapRotation=se.environment!==null&&C.envMap===null?Q.environmentRotation:C.envMapRotation,it===void 0&&(C.addEventListener("dispose",ct),it=new Map,se.programs=it);let st=it.get(ke);if(st!==void 0){if(se.currentProgram===st&&se.lightsStateVersion===Fe)return Pr(C,He),st}else He.uniforms=le.getUniforms(C),C.onBeforeCompile(He,L),st=le.acquireProgram(He,ke),it.set(ke,st),se.uniforms=He.uniforms;const $e=se.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&($e.clippingPlanes=Ye.uniform),Pr(C,He),se.needsLights=ol(C),se.lightsStateVersion=Fe,se.needsLights&&($e.ambientLightColor.value=ee.state.ambient,$e.lightProbe.value=ee.state.probe,$e.directionalLights.value=ee.state.directional,$e.directionalLightShadows.value=ee.state.directionalShadow,$e.spotLights.value=ee.state.spot,$e.spotLightShadows.value=ee.state.spotShadow,$e.rectAreaLights.value=ee.state.rectArea,$e.ltc_1.value=ee.state.rectAreaLTC1,$e.ltc_2.value=ee.state.rectAreaLTC2,$e.pointLights.value=ee.state.point,$e.pointLightShadows.value=ee.state.pointShadow,$e.hemisphereLights.value=ee.state.hemi,$e.directionalShadowMap.value=ee.state.directionalShadowMap,$e.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,$e.spotShadowMap.value=ee.state.spotShadowMap,$e.spotLightMatrix.value=ee.state.spotLightMatrix,$e.spotLightMap.value=ee.state.spotLightMap,$e.pointShadowMap.value=ee.state.pointShadowMap,$e.pointShadowMatrix.value=ee.state.pointShadowMatrix),se.currentProgram=st,se.uniformsList=null,st}function Hi(C){if(C.uniformsList===null){const Q=C.currentProgram.getUniforms();C.uniformsList=Zc.seqWithValue(Q.seq,C.uniforms)}return C.uniformsList}function Pr(C,Q){const fe=Ke.get(C);fe.outputColorSpace=Q.outputColorSpace,fe.batching=Q.batching,fe.batchingColor=Q.batchingColor,fe.instancing=Q.instancing,fe.instancingColor=Q.instancingColor,fe.instancingMorph=Q.instancingMorph,fe.skinning=Q.skinning,fe.morphTargets=Q.morphTargets,fe.morphNormals=Q.morphNormals,fe.morphColors=Q.morphColors,fe.morphTargetsCount=Q.morphTargetsCount,fe.numClippingPlanes=Q.numClippingPlanes,fe.numIntersection=Q.numClipIntersection,fe.vertexAlphas=Q.vertexAlphas,fe.vertexTangents=Q.vertexTangents,fe.toneMapping=Q.toneMapping}function fu(C,Q,fe,se,ee){Q.isScene!==!0&&(Q=Rt),ot.resetTextureUnits();const Ce=Q.fog,Fe=se.isMeshStandardMaterial?Q.environment:null,He=R===null?L.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Fs,ke=(se.isMeshStandardMaterial?b:U).get(se.envMap||Fe),it=se.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,st=!!fe.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),$e=!!fe.morphAttributes.position,mt=!!fe.morphAttributes.normal,Ct=!!fe.morphAttributes.color;let Nt=nr;se.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Nt=L.toneMapping);const Et=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,Pt=Et!==void 0?Et.length:0,tt=Ke.get(se),Wt=D.state.lights;if(oe===!0&&(Ee===!0||C!==k)){const yn=C===k&&se.id===F;Ye.setState(se,C,yn)}let Tt=!1;se.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Wt.state.version||tt.outputColorSpace!==He||ee.isBatchedMesh&&tt.batching===!1||!ee.isBatchedMesh&&tt.batching===!0||ee.isBatchedMesh&&tt.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&tt.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&tt.instancing===!1||!ee.isInstancedMesh&&tt.instancing===!0||ee.isSkinnedMesh&&tt.skinning===!1||!ee.isSkinnedMesh&&tt.skinning===!0||ee.isInstancedMesh&&tt.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&tt.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&tt.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&tt.instancingMorph===!1&&ee.morphTexture!==null||tt.envMap!==ke||se.fog===!0&&tt.fog!==Ce||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==Ye.numPlanes||tt.numIntersection!==Ye.numIntersection)||tt.vertexAlphas!==it||tt.vertexTangents!==st||tt.morphTargets!==$e||tt.morphNormals!==mt||tt.morphColors!==Ct||tt.toneMapping!==Nt||tt.morphTargetsCount!==Pt)&&(Tt=!0):(Tt=!0,tt.__version=se.version);let _n=tt.currentProgram;Tt===!0&&(_n=pn(se,Q,ee));let Ea=!1,Yt=!1,Gi=!1;const Zt=_n.getUniforms(),bn=tt.uniforms;if(Ge.useProgram(_n.program)&&(Ea=!0,Yt=!0,Gi=!0),se.id!==F&&(F=se.id,Yt=!0),Ea||k!==C){Ge.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Zt.setValue(H,"projectionMatrix",C.projectionMatrix),Zt.setValue(H,"viewMatrix",C.matrixWorldInverse);const En=Zt.map.cameraPosition;En!==void 0&&En.setValue(H,Pe.setFromMatrixPosition(C.matrixWorld)),_t.logarithmicDepthBuffer&&Zt.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Zt.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),k!==C&&(k=C,Yt=!0,Gi=!0)}if(ee.isSkinnedMesh){Zt.setOptional(H,ee,"bindMatrix"),Zt.setOptional(H,ee,"bindMatrixInverse");const yn=ee.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Zt.setValue(H,"boneTexture",yn.boneTexture,ot))}ee.isBatchedMesh&&(Zt.setOptional(H,ee,"batchingTexture"),Zt.setValue(H,"batchingTexture",ee._matricesTexture,ot),Zt.setOptional(H,ee,"batchingIdTexture"),Zt.setValue(H,"batchingIdTexture",ee._indirectTexture,ot),Zt.setOptional(H,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Zt.setValue(H,"batchingColorTexture",ee._colorsTexture,ot));const mn=fe.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&Je.update(ee,fe,_n),(Yt||tt.receiveShadow!==ee.receiveShadow)&&(tt.receiveShadow=ee.receiveShadow,Zt.setValue(H,"receiveShadow",ee.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(bn.envMap.value=ke,bn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&Q.environment!==null&&(bn.envMapIntensity.value=Q.environmentIntensity),bn.dfgLUT!==void 0&&(bn.dfgLUT.value=VA()),Yt&&(Zt.setValue(H,"toneMappingExposure",L.toneMappingExposure),tt.needsLights&&du(bn,Gi),Ce&&se.fog===!0&&Be.refreshFogUniforms(bn,Ce),Be.refreshMaterialUniforms(bn,se,Se,ve,D.state.transmissionRenderTarget[C.id]),Zc.upload(H,Hi(tt),bn,ot)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Zc.upload(H,Hi(tt),bn,ot),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Zt.setValue(H,"center",ee.center),Zt.setValue(H,"modelViewMatrix",ee.modelViewMatrix),Zt.setValue(H,"normalMatrix",ee.normalMatrix),Zt.setValue(H,"modelMatrix",ee.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const yn=se.uniformsGroups;for(let En=0,Di=yn.length;En<Di;En++){const Vi=yn[En];Oe.update(Vi,_n),Oe.bind(Vi,_n)}}return _n}function du(C,Q){C.ambientLightColor.needsUpdate=Q,C.lightProbe.needsUpdate=Q,C.directionalLights.needsUpdate=Q,C.directionalLightShadows.needsUpdate=Q,C.pointLights.needsUpdate=Q,C.pointLightShadows.needsUpdate=Q,C.spotLights.needsUpdate=Q,C.spotLightShadows.needsUpdate=Q,C.rectAreaLights.needsUpdate=Q,C.hemisphereLights.needsUpdate=Q}function ol(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(C,Q,fe){const se=Ke.get(C);se.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),Ke.get(C.texture).__webglTexture=Q,Ke.get(C.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:fe,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Q){const fe=Ke.get(C);fe.__webglFramebuffer=Q,fe.__useDefaultFramebuffer=Q===void 0};const or=H.createFramebuffer();this.setRenderTarget=function(C,Q=0,fe=0){R=C,q=Q,N=fe;let se=!0,ee=null,Ce=!1,Fe=!1;if(C){const ke=Ke.get(C);if(ke.__useDefaultFramebuffer!==void 0)Ge.bindFramebuffer(H.FRAMEBUFFER,null),se=!1;else if(ke.__webglFramebuffer===void 0)ot.setupRenderTarget(C);else if(ke.__hasExternalTextures)ot.rebindTextures(C,Ke.get(C.texture).__webglTexture,Ke.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const $e=C.depthTexture;if(ke.__boundDepthTexture!==$e){if($e!==null&&Ke.has($e)&&(C.width!==$e.image.width||C.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(C)}}const it=C.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Fe=!0);const st=Ke.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(st[Q])?ee=st[Q][fe]:ee=st[Q],Ce=!0):C.samples>0&&ot.useMultisampledRTT(C)===!1?ee=Ke.get(C).__webglMultisampledFramebuffer:Array.isArray(st)?ee=st[fe]:ee=st,te.copy(C.viewport),$.copy(C.scissor),de=C.scissorTest}else te.copy(xe).multiplyScalar(Se).floor(),$.copy(_e).multiplyScalar(Se).floor(),de=Re;if(fe!==0&&(ee=or),Ge.bindFramebuffer(H.FRAMEBUFFER,ee)&&se&&Ge.drawBuffers(C,ee),Ge.viewport(te),Ge.scissor($),Ge.setScissorTest(de),Ce){const ke=Ke.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ke.__webglTexture,fe)}else if(Fe){const ke=Q;for(let it=0;it<C.textures.length;it++){const st=Ke.get(C.textures[it]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+it,st.__webglTexture,fe,ke)}}else if(C!==null&&fe!==0){const ke=Ke.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ke.__webglTexture,fe)}F=-1},this.readRenderTargetPixels=function(C,Q,fe,se,ee,Ce,Fe,He=0){if(!(C&&C.isWebGLRenderTarget)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=Ke.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Fe!==void 0&&(ke=ke[Fe]),ke){Ge.bindFramebuffer(H.FRAMEBUFFER,ke);try{const it=C.textures[He],st=it.format,$e=it.type;if(!_t.textureFormatReadable(st)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_t.textureTypeReadable($e)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=C.width-se&&fe>=0&&fe<=C.height-ee&&(C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+He),H.readPixels(Q,fe,se,ee,lt.convert(st),lt.convert($e),Ce))}finally{const it=R!==null?Ke.get(R).__webglFramebuffer:null;Ge.bindFramebuffer(H.FRAMEBUFFER,it)}}},this.readRenderTargetPixelsAsync=async function(C,Q,fe,se,ee,Ce,Fe,He=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=Ke.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Fe!==void 0&&(ke=ke[Fe]),ke)if(Q>=0&&Q<=C.width-se&&fe>=0&&fe<=C.height-ee){Ge.bindFramebuffer(H.FRAMEBUFFER,ke);const it=C.textures[He],st=it.format,$e=it.type;if(!_t.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_t.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const mt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,mt),H.bufferData(H.PIXEL_PACK_BUFFER,Ce.byteLength,H.STREAM_READ),C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+He),H.readPixels(Q,fe,se,ee,lt.convert(st),lt.convert($e),0);const Ct=R!==null?Ke.get(R).__webglFramebuffer:null;Ge.bindFramebuffer(H.FRAMEBUFFER,Ct);const Nt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await b2(H,Nt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,mt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ce),H.deleteBuffer(mt),H.deleteSync(Nt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Q=null,fe=0){const se=Math.pow(2,-fe),ee=Math.floor(C.image.width*se),Ce=Math.floor(C.image.height*se),Fe=Q!==null?Q.x:0,He=Q!==null?Q.y:0;ot.setTexture2D(C,0),H.copyTexSubImage2D(H.TEXTURE_2D,fe,0,0,Fe,He,ee,Ce),Ge.unbindTexture()};const Ws=H.createFramebuffer(),Ma=H.createFramebuffer();this.copyTextureToTexture=function(C,Q,fe=null,se=null,ee=0,Ce=null){Ce===null&&(ee!==0?(Qo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ce=ee,ee=0):Ce=0);let Fe,He,ke,it,st,$e,mt,Ct,Nt;const Et=C.isCompressedTexture?C.mipmaps[Ce]:C.image;if(fe!==null)Fe=fe.max.x-fe.min.x,He=fe.max.y-fe.min.y,ke=fe.isBox3?fe.max.z-fe.min.z:1,it=fe.min.x,st=fe.min.y,$e=fe.isBox3?fe.min.z:0;else{const mn=Math.pow(2,-ee);Fe=Math.floor(Et.width*mn),He=Math.floor(Et.height*mn),C.isDataArrayTexture?ke=Et.depth:C.isData3DTexture?ke=Math.floor(Et.depth*mn):ke=1,it=0,st=0,$e=0}se!==null?(mt=se.x,Ct=se.y,Nt=se.z):(mt=0,Ct=0,Nt=0);const Pt=lt.convert(Q.format),tt=lt.convert(Q.type);let Wt;Q.isData3DTexture?(ot.setTexture3D(Q,0),Wt=H.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(ot.setTexture2DArray(Q,0),Wt=H.TEXTURE_2D_ARRAY):(ot.setTexture2D(Q,0),Wt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Q.unpackAlignment);const Tt=H.getParameter(H.UNPACK_ROW_LENGTH),_n=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Ea=H.getParameter(H.UNPACK_SKIP_PIXELS),Yt=H.getParameter(H.UNPACK_SKIP_ROWS),Gi=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Et.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Et.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,it),H.pixelStorei(H.UNPACK_SKIP_ROWS,st),H.pixelStorei(H.UNPACK_SKIP_IMAGES,$e);const Zt=C.isDataArrayTexture||C.isData3DTexture,bn=Q.isDataArrayTexture||Q.isData3DTexture;if(C.isDepthTexture){const mn=Ke.get(C),yn=Ke.get(Q),En=Ke.get(mn.__renderTarget),Di=Ke.get(yn.__renderTarget);Ge.bindFramebuffer(H.READ_FRAMEBUFFER,En.__webglFramebuffer),Ge.bindFramebuffer(H.DRAW_FRAMEBUFFER,Di.__webglFramebuffer);for(let Vi=0;Vi<ke;Vi++)Zt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ke.get(C).__webglTexture,ee,$e+Vi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ke.get(Q).__webglTexture,Ce,Nt+Vi)),H.blitFramebuffer(it,st,Fe,He,mt,Ct,Fe,He,H.DEPTH_BUFFER_BIT,H.NEAREST);Ge.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(ee!==0||C.isRenderTargetTexture||Ke.has(C)){const mn=Ke.get(C),yn=Ke.get(Q);Ge.bindFramebuffer(H.READ_FRAMEBUFFER,Ws),Ge.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ma);for(let En=0;En<ke;En++)Zt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,mn.__webglTexture,ee,$e+En):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,mn.__webglTexture,ee),bn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,yn.__webglTexture,Ce,Nt+En):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,yn.__webglTexture,Ce),ee!==0?H.blitFramebuffer(it,st,Fe,He,mt,Ct,Fe,He,H.COLOR_BUFFER_BIT,H.NEAREST):bn?H.copyTexSubImage3D(Wt,Ce,mt,Ct,Nt+En,it,st,Fe,He):H.copyTexSubImage2D(Wt,Ce,mt,Ct,it,st,Fe,He);Ge.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else bn?C.isDataTexture||C.isData3DTexture?H.texSubImage3D(Wt,Ce,mt,Ct,Nt,Fe,He,ke,Pt,tt,Et.data):Q.isCompressedArrayTexture?H.compressedTexSubImage3D(Wt,Ce,mt,Ct,Nt,Fe,He,ke,Pt,Et.data):H.texSubImage3D(Wt,Ce,mt,Ct,Nt,Fe,He,ke,Pt,tt,Et):C.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ce,mt,Ct,Fe,He,Pt,tt,Et.data):C.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ce,mt,Ct,Et.width,Et.height,Pt,Et.data):H.texSubImage2D(H.TEXTURE_2D,Ce,mt,Ct,Fe,He,Pt,tt,Et);H.pixelStorei(H.UNPACK_ROW_LENGTH,Tt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,_n),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ea),H.pixelStorei(H.UNPACK_SKIP_ROWS,Yt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Gi),Ce===0&&Q.generateMipmaps&&H.generateMipmap(Wt),Ge.unbindTexture()},this.initRenderTarget=function(C){Ke.get(C).__webglFramebuffer===void 0&&ot.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ot.setTextureCube(C,0):C.isData3DTexture?ot.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ot.setTexture2DArray(C,0):ot.setTexture2D(C,0),Ge.unbindTexture()},this.resetState=function(){q=0,N=0,R=null,Ge.reset(),X.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ot._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ot._getUnpackColorSpace()}}function jA({mouseForce:s=20,cursorSize:e=100,isViscous:i=!1,viscous:r=30,iterationsViscous:l=32,iterationsPoisson:c=32,dt:f=.014,BFECC:h=!0,resolution:m=.5,isBounce:p=!1,colors:g=["#5227FF","#FF9FFC","#B19EEF"],style:x={},className:_="",autoDemo:M=!0,autoSpeed:T=.5,autoIntensity:A=2.2,takeoverDuration:E=.25,autoResumeDelay:v=1e3,autoRampDuration:O=.6}){const D=ue.useRef(null),z=ue.useRef(null),j=ue.useRef(null),L=ue.useRef(null),I=ue.useRef(null),q=ue.useRef(!0),N=ue.useRef(null);return ue.useEffect(()=>{if(!D.current)return;function R(U){let b;Array.isArray(U)&&U.length>0?U.length===1?b=[U[0],U[0]]:b=U:b=["#ffffff","#ffffff"];const G=b.length,ne=new Uint8Array(G*4);for(let le=0;le<G;le++){const Be=new zt(b[le]);ne[le*4+0]=Math.round(Be.r*255),ne[le*4+1]=Math.round(Be.g*255),ne[le*4+2]=Math.round(Be.b*255),ne[le*4+3]=255}const me=new s_(ne,G,1,xi);return me.magFilter=On,me.minFilter=On,me.wrapS=ai,me.wrapT=ai,me.generateMipmaps=!1,me.needsUpdate=!0,me}const F=R(g),k=new nn(0,0,0,0);class te{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(b){this.container=b,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new kA({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new zt(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new n3,this.clock.start()}resize(){if(!this.container)return;const b=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(b.width)),this.height=Math.max(1,Math.floor(b.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const $=new te;class de{constructor(){this.mouseMoved=!1,this.coords=new ht,this.coords_old=new ht,this.diff=new ht,this.timer=null,this.container=null,this.docTarget=null,this.listenerTarget=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new ht,this.takeoverTo=new ht,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this)}init(b){this.container=b,this.docTarget=b.ownerDocument||null;const G=this.docTarget&&this.docTarget.defaultView||(typeof window<"u"?window:null);G&&(this.listenerTarget=G,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),this.docTarget&&this.docTarget.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave),this.listenerTarget=null,this.docTarget=null,this.container=null}isPointInside(b,G){if(!this.container)return!1;const ne=this.container.getBoundingClientRect();return ne.width===0||ne.height===0?!1:b>=ne.left&&b<=ne.right&&G>=ne.top&&G<=ne.bottom}updateHoverState(b,G){return this.isHoverInside=this.isPointInside(b,G),this.isHoverInside}setCoords(b,G){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const ne=this.container.getBoundingClientRect();if(ne.width===0||ne.height===0)return;const me=(b-ne.left)/ne.width,le=(G-ne.top)/ne.height;this.coords.set(me*2-1,-(le*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(b,G){this.coords.set(b,G),this.mouseMoved=!0}onDocumentMouseMove(b){if(this.updateHoverState(b.clientX,b.clientY)){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const G=this.container.getBoundingClientRect();if(G.width===0||G.height===0)return;const ne=(b.clientX-G.left)/G.width,me=(b.clientY-G.top)/G.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(ne*2-1,-(me*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(b.clientX,b.clientY),this.hasUserControl=!0}}onDocumentTouchStart(b){if(b.touches.length!==1)return;const G=b.touches[0];this.updateHoverState(G.clientX,G.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(G.clientX,G.clientY),this.hasUserControl=!0)}onDocumentTouchMove(b){if(b.touches.length!==1)return;const G=b.touches[0];this.updateHoverState(G.clientX,G.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(G.clientX,G.clientY))}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const b=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(b>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const G=b*b*(3-2*b);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,G)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const P=new de;class K{constructor(b,G,ne){this.mouse=b,this.manager=G,this.enabled=ne.enabled,this.speed=ne.speed,this.resumeDelay=ne.resumeDelay||3e3,this.rampDurationMs=(ne.rampDuration||0)*1e3,this.active=!1,this.current=new ht(0,0),this.target=new ht,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new ht,this.pickNewTarget()}pickNewTarget(){const b=Math.random;this.target.set((b()*2-1)*(1-this.margin),(b()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const b=performance.now();if(b-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=b,this.activationTime=b),!this.active)return;this.mouse.isAutoActive=!0;let ne=(b-this.lastTime)/1e3;this.lastTime=b,ne>.2&&(ne=.016);const me=this._tmpDir.subVectors(this.target,this.current),le=me.length();if(le<.01){this.pickNewTarget();return}me.normalize();let Be=1;if(this.rampDurationMs>0){const Ye=Math.min(1,(b-this.activationTime)/this.rampDurationMs);Be=Ye*Ye*(3-2*Ye)}const Ue=this.speed*ne*Be,Qe=Math.min(Ue,le);this.current.addScaledVector(me,Qe),this.mouse.setNormalized(this.current.x,this.current.y)}}const Y=`
  attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}
`,ve=`
  attribute vec3 position;
  uniform vec2 px;
  precision highp float;
  varying vec2 uv;
  void main(){
  vec3 pos = position;
  uv = 0.5 + pos.xy * 0.5;
  vec2 n = sign(pos.xy);
  pos.xy = abs(pos.xy) - px * 1.0;
  pos.xy *= n;
  gl_Position = vec4(pos, 1.0);
}
`,Se=`
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`,B=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform bool isBFECC;
    uniform vec2 fboSize;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`,Z=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D palette;
    uniform vec4 bgColor;
    varying vec2 uv;
    void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float lenv = clamp(length(vel), 0.0, 1.0);
    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
    vec3 outRGB = mix(bgColor.rgb, c, lenv);
    float outA = mix(bgColor.a, 1.0, lenv);
    gl_FragColor = vec4(outRGB, outA);
}
`,xe=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
    float divergence = (x1 - x0 + y1 - y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}
`,_e=`
    precision highp float;
    uniform vec2 force;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0 - min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,Re=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D divergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`,ie=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D velocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`,oe=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D velocity_new;
    uniform float v;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    newv /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class Ee{constructor(b){var G;this.props=b||{},this.uniforms=(G=this.props.material)==null?void 0:G.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new kg,this.camera=new nu,this.uniforms&&(this.material=new Ic(this.props.material),this.geometry=new Or(2,2),this.plane=new wi(this.geometry,this.material),this.scene.add(this.plane))}update(){$.renderer.setRenderTarget(this.props.output||null),$.renderer.render(this.scene,this.camera),$.renderer.setRenderTarget(null)}}class Le extends Ee{constructor(b){super({material:{vertexShader:Y,fragmentShader:B,uniforms:{boundarySpace:{value:b.cellScale},px:{value:b.cellScale},fboSize:{value:b.fboSize},velocity:{value:b.src.texture},dt:{value:b.dt},isBFECC:{value:!0}}},output:b.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const b=new Ii,G=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);b.setAttribute("position",new Ai(G,3));const ne=new Ic({vertexShader:ve,fragmentShader:B,uniforms:this.uniforms});this.line=new Q2(b,ne),this.scene.add(this.line)}update({dt:b,isBounce:G,BFECC:ne}){this.uniforms.dt.value=b,this.line.visible=G,this.uniforms.isBFECC.value=ne,super.update()}}class Pe extends Ee{constructor(b){super({output:b.dst}),this.init(b)}init(b){super.init();const G=new Or(1,1),ne=new Ic({vertexShader:Se,fragmentShader:_e,blending:dh,depthWrite:!1,uniforms:{px:{value:b.cellScale},force:{value:new ht(0,0)},center:{value:new ht(0,0)},scale:{value:new ht(b.cursor_size,b.cursor_size)}}});this.mouse=new wi(G,ne),this.scene.add(this.mouse)}update(b){const G=P.diff.x/2*b.mouse_force,ne=P.diff.y/2*b.mouse_force,me=b.cursor_size*b.cellScale.x,le=b.cursor_size*b.cellScale.y,Be=Math.min(Math.max(P.coords.x,-1+me+b.cellScale.x*2),1-me-b.cellScale.x*2),Ue=Math.min(Math.max(P.coords.y,-1+le+b.cellScale.y*2),1-le-b.cellScale.y*2),Qe=this.mouse.material.uniforms;Qe.force.value.set(G,ne),Qe.center.value.set(Be,Ue),Qe.scale.value.set(b.cursor_size,b.cursor_size),super.update()}}class nt extends Ee{constructor(b){super({material:{vertexShader:Y,fragmentShader:oe,uniforms:{boundarySpace:{value:b.boundarySpace},velocity:{value:b.src.texture},velocity_new:{value:b.dst_.texture},v:{value:b.viscous},px:{value:b.cellScale},dt:{value:b.dt}}},output:b.dst,output0:b.dst_,output1:b.dst}),this.init()}update({viscous:b,iterations:G,dt:ne}){let me,le;this.uniforms.v.value=b;for(let Be=0;Be<G;Be++)Be%2===0?(me=this.props.output0,le=this.props.output1):(me=this.props.output1,le=this.props.output0),this.uniforms.velocity_new.value=me.texture,this.props.output=le,this.uniforms.dt.value=ne,super.update();return le}}class Rt extends Ee{constructor(b){super({material:{vertexShader:Y,fragmentShader:xe,uniforms:{boundarySpace:{value:b.boundarySpace},velocity:{value:b.src.texture},px:{value:b.cellScale},dt:{value:b.dt}}},output:b.dst}),this.init()}update({vel:b}){this.uniforms.velocity.value=b.texture,super.update()}}class je extends Ee{constructor(b){super({material:{vertexShader:Y,fragmentShader:Re,uniforms:{boundarySpace:{value:b.boundarySpace},pressure:{value:b.dst_.texture},divergence:{value:b.src.texture},px:{value:b.cellScale}}},output:b.dst,output0:b.dst_,output1:b.dst}),this.init()}update({iterations:b}){let G,ne;for(let me=0;me<b;me++)me%2===0?(G=this.props.output0,ne=this.props.output1):(G=this.props.output1,ne=this.props.output0),this.uniforms.pressure.value=G.texture,this.props.output=ne,super.update();return ne}}class qe extends Ee{constructor(b){super({material:{vertexShader:Y,fragmentShader:ie,uniforms:{boundarySpace:{value:b.boundarySpace},pressure:{value:b.src_p.texture},velocity:{value:b.src_v.texture},px:{value:b.cellScale},dt:{value:b.dt}}},output:b.dst}),this.init()}update({vel:b,pressure:G}){this.uniforms.velocity.value=b.texture,this.uniforms.pressure.value=G.texture,super.update()}}class H{constructor(b){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...b},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new ht,this.cellScale=new ht,this.boundarySpace=new ht,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?zr:zi}createAllFBO(){const G={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:On,magFilter:On,wrapS:ai,wrapT:ai};for(let ne in this.fbos)this.fbos[ne]=new ar(this.fboSize.x,this.fboSize.y,G)}createShaderPass(){this.advection=new Le({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new Pe({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new nt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new Rt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new je({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new qe({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const b=Math.max(1,Math.round(this.options.resolution*$.width)),G=Math.max(1,Math.round(this.options.resolution*$.height)),ne=1/b,me=1/G;this.cellScale.set(ne,me),this.fboSize.set(b,G)}resize(){this.calcSize();for(let b in this.fbos)this.fbos[b].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let b=this.fbos.vel_1;this.options.isViscous&&(b=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:b});const G=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:b,pressure:G})}}class at{constructor(){this.init()}init(){this.simulation=new H,this.scene=new kg,this.camera=new nu,this.output=new wi(new Or(2,2),new Ic({vertexShader:Y,fragmentShader:Z,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new ht},palette:{value:F},bgColor:{value:k}}})),this.scene.add(this.output)}addScene(b){this.scene.add(b)}resize(){this.simulation.resize()}render(){$.renderer.setRenderTarget(null),$.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class dt{constructor(b){this.props=b,$.init(b.$wrapper),P.init(b.$wrapper),P.autoIntensity=b.autoIntensity,P.takeoverDuration=b.takeoverDuration,this.lastUserInteraction=performance.now(),P.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new K(P,this,{enabled:b.autoDemo,speed:b.autoSpeed,resumeDelay:b.autoResumeDelay,rampDuration:b.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():q.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend($.renderer.domElement),this.output=new at}resize(){$.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),P.update(),$.update(),this.output.update()}loop(){this.running&&(this.render(),L.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,L.current&&(cancelAnimationFrame(L.current),L.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),P.dispose(),$.renderer){const b=$.renderer.domElement;b&&b.parentNode&&b.parentNode.removeChild(b),$.renderer.dispose()}}catch{}}}const _t=D.current;_t.style.position=_t.style.position||"relative",_t.style.overflow=_t.style.overflow||"hidden";const Ge=new dt({$wrapper:_t,autoDemo:M,autoSpeed:T,autoIntensity:A,takeoverDuration:E,autoResumeDelay:v,autoRampDuration:O});z.current=Ge,(()=>{var G;if(!z.current)return;const U=(G=z.current.output)==null?void 0:G.simulation;if(!U)return;const b=U.options.resolution;Object.assign(U.options,{mouse_force:s,cursor_size:e,isViscous:i,viscous:r,iterations_viscous:l,iterations_poisson:c,dt:f,BFECC:h,resolution:m,isBounce:p}),m!==b&&U.resize()})(),Ge.start();const Ke=new IntersectionObserver(U=>{const b=U[0],G=b.isIntersecting&&b.intersectionRatio>0;q.current=G,z.current&&(G&&!document.hidden?z.current.start():z.current.pause())},{threshold:[0,.01,.1]});Ke.observe(_t),I.current=Ke;const ot=new ResizeObserver(()=>{z.current&&(N.current&&cancelAnimationFrame(N.current),N.current=requestAnimationFrame(()=>{z.current&&z.current.resize()}))});return ot.observe(_t),j.current=ot,()=>{if(L.current&&cancelAnimationFrame(L.current),j.current)try{j.current.disconnect()}catch{}if(I.current)try{I.current.disconnect()}catch{}z.current&&z.current.dispose(),z.current=null}},[h,e,f,p,i,c,l,s,m,r,g,M,T,A,E,v,O]),ue.useEffect(()=>{var te;const R=z.current;if(!R)return;const F=(te=R.output)==null?void 0:te.simulation;if(!F)return;const k=F.options.resolution;Object.assign(F.options,{mouse_force:s,cursor_size:e,isViscous:i,viscous:r,iterations_viscous:l,iterations_poisson:c,dt:f,BFECC:h,resolution:m,isBounce:p}),R.autoDriver&&(R.autoDriver.enabled=M,R.autoDriver.speed=T,R.autoDriver.resumeDelay=v,R.autoDriver.rampDurationMs=O*1e3,R.autoDriver.mouse&&(R.autoDriver.mouse.autoIntensity=A,R.autoDriver.mouse.takeoverDuration=E)),m!==k&&F.resize()},[s,e,i,r,l,c,f,h,m,p,M,T,A,E,v,O]),S.jsx("div",{ref:D,className:`w-full h-full relative overflow-hidden pointer-events-none touch-none ${_||""}`,style:x})}const XA="/assets/edexScroll-CTfDaU9M.png";function WA(){return S.jsxs("div",{className:"overflow-hidden",children:[S.jsxs("section",{className:`\r
          relative \r
          w-full \r
          min-h-[95vh] sm:min-h-[100vh] md:min-h-[115vh]\r
          overflow-hidden \r
          bg-black \r
          text-white \r
          flex \r
          items-center \r
          justify-center\r
          pt-26 sm:pt-32\r
        `,children:[S.jsx("div",{className:"absolute inset-0",children:S.jsx(jA,{colors:["#00FF38","#00E544","#00C93B"],mouseForce:20,cursorSize:100,isViscous:!1,viscous:30,iterationsViscous:32,iterationsPoisson:32,resolution:.5,isBounce:!1,autoDemo:!0,autoSpeed:.5,autoIntensity:2.2,takeoverDuration:.25,autoResumeDelay:3e3,autoRampDuration:.6})}),S.jsxs("div",{className:`\r
            relative z-10\r
            w-full max-w-[1500px] \r
            mx-auto \r
            px-6 sm:px-8 md:px-10\r
            text-center \r
            mb-20 sm:mb-24\r
          `,children:[S.jsxs("div",{className:"space-y-3 sm:space-y-4",children:[S.jsx("div",{className:`\r
                lufga-bold\r
                leading-none\r
                text-[30px] xs:text-[36px] sm:text-[42px]\r
                md:text-[70px] lg:text-[55px] xl:text-[65px]\r
              `,children:S.jsx("span",{className:"text-gray-300 px-3 sm:px-4 xl:text-[90px]",children:"WHERE"})}),S.jsxs("h1",{className:`\r
                lufga-bold flex flex-wrap \r
                justify-center items-end gap-3 sm:gap-4\r
                leading-none\r
              `,children:[S.jsx("span",{className:"text-[35px] xs:text-[45px] sm:text-[52px] md:text-[70px] lg:text-[85px] xl:text-[90px]",children:"LEARNING"}),S.jsx("span",{className:"text-gray-300 text-[24px] xs:text-[30px] sm:text-[36px] md:text-[48px] lg:text-[64px] xl:text-[70px] pb-1",children:"MEANS"})]}),S.jsx("div",{className:`\r
                lufga-bold leading-none tracking-wide\r
                text-[40px] xs:text-[48px] sm:text-[58px]\r
                md:text-[80px] lg:text-[100px] xl:text-[70px]\r
              `,children:S.jsx("h1",{className:"px-3 xl:text-[90px] text-[#CDFF00]",children:"LIFE"})})]}),S.jsxs("div",{className:`\r
    mt-8 mb-6\r
    flex flex-row justify-center items-center\r
    whitespace-nowrap        /* prevents text from breaking into new lines */\r
    \r
    gap-3 xs:gap-5 sm:gap-8 md:gap-14 lg:gap-20 xl:gap-28\r
    \r
    text-[16px] xs:text-[20px] sm:text-[28px]\r
    md:text-[45px] lg:text-[75px] xl:text-[60px]\r
\r
    lufga   `,children:[S.jsx("h6",{className:"text-white/90 lg:mx-12 hover:text-[#CDFF00] transition duration-300",children:"Learn"}),S.jsx("h6",{className:"text-white/90 lg:mx-12 hover:text-[#CDFF00] transition duration-300",children:"Apply"}),S.jsx("h6",{className:"text-white/90 lg:mx-12 hover:text-[#CDFF00] transition duration-300",children:"Grow"})]}),S.jsx("h2",{className:`\r
    lufga-light tracking-wide leading-relaxed\r
    text-[18px]\r
    sm:text-[16px]\r
    md:text-[18px]\r
    lg:text-[20px]\r
    xl:text-[25px]\r
    2xl:!text-[25px]\r
    text-[#F1F1F1]\r
    max-w-[1100px] mx-auto mt-4\r
  `,children:"At EDEX Life School, we believe in learning by doing. Our 100-day Master Course is designed to make you 1% better every day, bridging the gap between theory and real-world application."}),S.jsx("div",{className:"mt-10 sm:mt-12 flex justify-center",children:S.jsx("a",{href:"https://admission.edexlifeschool.com/",target:"_blank",rel:"noopener noreferrer",className:`\r
    inline-block lufga \r
    leading-relaxed\r
    text-white/90 \r
    transition-all duration-300\r
    hover:text-black\r
\r
    px-6 xs:px-7 sm:px-9 md:px-12 lg:px-14 xl:px-16\r
    py-3 xs:py-3.5 sm:py-4 md:py-3 lg:py-3\r
\r
    text-[18px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px]\r
\r
    border-b border-l-2 border-white/40\r
    rounded\r
    bg-white/5 backdrop-blur-md\r
\r
    hover:bg-white\r
    hover:shadow-xl hover:scale-[1.03]\r
  `,children:S.jsx("span",{className:"lufga text-2xl",children:"Apply Now"})})})]})]}),S.jsx("div",{className:`\r
          w-full overflow-hidden bg-[#CDFF00]\r
          py-2 sm:py-3 rotate-[2deg]\r
          -mt-6 sm:-mt-10 md:-mt-12\r
        `,children:S.jsx("div",{className:"flex items-center whitespace-nowrap animate-scroll",children:[...Array(25)].map((s,e)=>S.jsxs(pa.Fragment,{children:[S.jsx("img",{src:XA,alt:"banner",className:`\r
                  h-8 xs:h-12 sm:h-14 md:h-16 \r
                  lg:h-20 xl:h-[80px]\r
                  mx-3 sm:mx-4\r
                `}),S.jsx("span",{className:`\r
                  text-black \r
                  text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl\r
                  mx-2\r
                `,children:"✦"})]},e))})})]})}const qA="/assets/grouppic-CQ2Sec9q.jpg",YA="/assets/Vrman-Cta40jvt.png",ZA=()=>S.jsx("div",{className:"w-full bg-white px-6 sm:px-12 lg:px-20 xl:px-32 pt-12 lg:pt-20 pb-0",children:S.jsxs("div",{className:`\r
        grid grid-cols-1 lg:grid-cols-2 \r
        gap-10 lg:gap-16 xl:gap-20 \r
        items-stretch\r
        max-w-[1800px] mx-auto\r
      `,children:[S.jsxs("div",{className:"flex flex-col justify-between w-full min-h-full",children:[S.jsx("div",{className:"mb-6 sm:mb-8 md:mb-12 w-full",children:S.jsxs("div",{className:`\r
                lufga-bold\r
                text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-[55px]\r
                leading-tight origin-left\r
                w-full\r
              `,children:[S.jsx("span",{className:"lufga-bold block leading-none",children:"Elevate Your Potential"}),S.jsxs("div",{className:"flex flex-wrap items-center mt-1 sm:mt-2 gap-2 sm:gap-3",children:[S.jsx("span",{className:"lufga-bold mx-1 sm:mx-1",children:"with"}),S.jsxs("div",{className:"flex items-center gap-0",children:[S.jsx("div",{className:`\r
                      bg-black rounded-full \r
                      w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 lg:w-12 lg:h-12 \r
                      flex items-center justify-center shrink-0\r
                    `,children:S.jsx("span",{className:`\r
                        bg-[#C5FF00] rounded-full \r
                        w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8\r
                        flex items-center justify-center\r
                      `,children:S.jsx("span",{className:`\r
                          text-white font-bold\r
                          text-lg sm:text-sm md:text-base lg:text-lg\r
                          leading-none\r
                        `,children:"+"})})}),S.jsx("span",{className:"lufga-bold leading-none pl-0 ml-0",children:"ur"})]}),S.jsx("span",{className:`\r
                    bg-[#C5FF00] font-bold \r
                    px-2 sm:px-3 md:px-4 rounded-3xl\r
                    text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-[55px]\r
                  `,children:"Growth"}),S.jsx("span",{className:`\r
                    lufga-bold\r
                    text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-[55px]\r
                  `,children:"Magic"})]})]})}),S.jsxs("div",{className:"relative w-full max-w-full mt-2 mb-7 flex-1",children:[S.jsx("img",{src:qA,className:"w-full h-full object-cover rounded-[30px]",alt:"group"}),S.jsxs("div",{className:`absolute bottom-4 left-4 \r
  px-2 sm:px-4 md:px-5 \r
  py-2 sm:py-2 \r
  flex items-start gap-2 sm:gap-3`,children:[S.jsx("div",{className:`bg-[#C5FF00] \r
    px-4 sm:px-6 md:px-8 lg:px-10 \r
    py-2 sm:py-2 \r
    flex items-center`,children:S.jsxs("span",{className:`text-black lufga \r
      text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg \r
      font-semibold leading-tight`,children:["Crafting Learning Experiences",S.jsx("br",{className:"hidden sm:block"}),"that Inspire Lasting Change"]})}),S.jsxs("div",{className:"flex items-start",children:[S.jsx("div",{className:`border-r-[6px] border-[#C5FF00] \r
      h-[40px] sm:h-[50px] md:h-[60px]`}),S.jsx("div",{className:`border-r-[4px] border-[#C5FF00] \r
      px-1 h-[40px] sm:h-[50px] md:h-[60px]`}),S.jsx("div",{className:`border-r-[2px] border-[#C5FF00] \r
      px-1 h-[40px] sm:h-[50px] md:h-[60px]`}),S.jsx("div",{className:`border-r-[1px] border-[#C5FF00] \r
      px-1 h-[40px] sm:h-[50px] md:h-[60px]`})]})]}),S.jsx("div",{className:`\r
                absolute \r
                bottom-[-15px] right-[-15px] \r
                sm:bottom-[-20px] sm:right-[-20px]\r
                bg-[#C5FF00]\r
                w-[55px] h-[55px] sm:w-[70px] sm:h-[70px]\r
                rounded-full flex items-center justify-center shadow-lg\r
              `,children:S.jsxs("svg",{width:"30",height:"35",viewBox:"0 0 24 24",fill:"none",stroke:"black",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round",className:"w-6 h-6 sm:w-8 sm:h-8",children:[S.jsx("line",{x1:"7",y1:"17",x2:"17",y2:"7"}),S.jsx("polyline",{points:"7 7 17 7 17 17"})]})})]})]}),S.jsxs("div",{className:"flex flex-col justify-between w-full min-h-full",children:[S.jsx("h4",{className:`\r
              lufga-light text-black font-normal\r
              text-base xs:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl\r
              leading-normal tracking-wide\r
              max-w-2xl\r
              mb-8 sm:mb-12 lg:mb-16 xl:mb-20\r
            `,children:"At EDEX Life School, we amplify your personal and professional journey through immersive, hands-on learning. Build skills, strengthen your mindset, and unlock your potential one day at a time."}),S.jsx("div",{className:"relative w-full flex-1 min-h-[300px] sm:min-h-[380px] md:min-h-[450px] lg:min-h-[520px] xl:min-h-[600px]",children:S.jsx("img",{src:YA,alt:"VR Man",className:`\r
                absolute \r
                bottom-0 \r
                left-1/2 \r
                -translate-x-1/2 \r
                h-full \r
                w-auto \r
                object-contain\r
                object-bottom\r
              `})})]})]})}),KA="/assets/card1-Dtx_bjd1.jpg",QA="/assets/img5-BPbZUhXZ.jpg",JA="/assets/card3-OrJUhIp7.jpg",$A="/assets/card4-DGlIW8RY.jpg",ew="/assets/card5-f2PicO3z.jpg",ih=[{id:"01",img:KA,title:"14 Skills",desc:"Master essential business and professional skills through hands on learning."},{id:"02",img:QA,title:"Immersive Learning Experience",desc:"Engage in 14 weeks of structured learning for progressive growth and industry relevance."},{id:"03",img:JA,title:"Real-Life Business Projects",desc:"Gain practical experience by working on real business challenges."},{id:"04",img:$A,title:"Expert Talks",desc:"Learn from top industry leaders and successful entrepreneurs during 14 insightful sessions."},{id:"05",img:ew,title:"Strategic Games",desc:"Develop leadership, problem-solving, and negotiation skills through high impact simulations."}];function tw(){return S.jsxs("section",{className:"bg-black text-white w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-20",children:[S.jsx("p",{className:`\r
    lufga-bold \r
    lg:px-5\r
    text-3xl          /* mobile */\r
    sm:text-4xl       /* tablets */\r
    md:text-5xl       /* laptops */\r
    lg:text-5xl\r
  `,children:"What makes EDEX unique?"}),S.jsx("p",{className:`\r
    lufga-light \r
    lg:px-5\r
    text-xl           /* mobile */\r
    sm:text-2xl       /* tablets */\r
    md:text-3xl       /* laptops */\r
    leading-relaxed\r
    max-w-[900px]\r
  `,children:"Discover what sets EDEX Life School apart and how it can transform your learning experience."}),S.jsxs("div",{className:"flex flex-col items-center mt-15 gap-4 sm:gap-6",children:[S.jsx("div",{className:"flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6 w-full lg:hidden",children:ih.map((s,e)=>S.jsxs("div",{className:`bg-white text-black rounded-3xl p-4 sm:p-5 shadow-lg\r
                         w-full sm:w-[calc(50%-12px)] md:w-[calc(50%-12px)] \r
                         transition duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2\r
                         flex flex-col`,children:[S.jsxs("div",{className:"relative rounded-2xl overflow-hidden flex-shrink-0",children:[S.jsx("img",{src:s.img,className:"w-full h-[200px] sm:h-[220px] object-cover",alt:s.title}),S.jsx("div",{className:`absolute top-3 right-3 \r
                    w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12\r
                    bg-[#D7FF00] rounded-full\r
                    flex items-center justify-center\r
                    text-black font-bold text-sm sm:text-base`,children:s.id})]}),S.jsxs("div",{className:"flex flex-col flex-grow pt-4",children:[S.jsx("h2",{className:"font-bold kumbh text-lg sm:text-xl md:text-[22px] leading-tight mb-2",children:s.title}),S.jsx("p",{className:"text-gray-500 lufga-light text-sm sm:text-[15px] leading-[150%]",children:s.desc})]})]},e))}),S.jsxs("div",{className:"hidden lg:flex flex-col items-center gap-4 md:gap-6 w-full",children:[S.jsx("div",{className:"flex flex-wrap justify-center gap-5 md:gap-6 w-full",children:ih.slice(0,3).map((s,e)=>S.jsxs("div",{className:`bg-white text-black rounded-3xl p-4 sm:p-5 shadow-lg\r
lg:w-[450px] xl:w-[500px] 2xl:w-[550px] \r
                           transition duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2\r
                           flex flex-col`,children:[S.jsxs("div",{className:"relative rounded-2xl overflow-hidden flex-shrink-0",children:[S.jsx("img",{src:s.img,className:"w-full h-[200px] sm:h-[220px] object-cover",alt:s.title}),S.jsx("div",{className:`absolute top-3 right-3 \r
                      w-12 h-12\r
                      bg-[#D7FF00] rounded-full lufga-bold  text-2xl\r
                      flex items-center justify-center\r
                      text-black font-bold `,children:s.id})]}),S.jsxs("div",{className:"flex flex-col flex-grow pt-4",children:[S.jsx("h2",{className:"font-bold kumbh text-xl md:text-[22px] leading-tight mb-2",children:s.title}),S.jsx("p",{className:"text-gray-600 lufga text-[20px] leading-[150%]",children:s.desc})]})]},e))}),S.jsx("div",{className:"flex flex-wrap justify-center gap-5 md:gap-6 w-full",children:ih.slice(3).map((s,e)=>S.jsxs("div",{className:`bg-white text-black rounded-3xl p-4 sm:p-5 shadow-lg\r
lg:w-[450px] xl:w-[500px] 2xl:w-[550px]\r
                           transition duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2\r
                           flex flex-col`,children:[S.jsxs("div",{className:"relative rounded-2xl overflow-hidden flex-shrink-0",children:[S.jsx("img",{src:s.img,className:"w-full h-[200px] sm:h-[220px] object-cover",alt:s.title}),S.jsx("div",{className:`absolute top-3 right-3 \r
                      w-12 h-12\r
                      bg-[#D7FF00] rounded-full lufga-bold\r
                      flex items-center justify-center\r
                      text-black font-bold text-2xl`,children:s.id})]}),S.jsxs("div",{className:"flex flex-col flex-grow pt-4",children:[S.jsx("h2",{className:"font-bold kumbh text-xl md:text-[22px] leading-tight mb-2",children:s.title}),S.jsx("p",{className:"text-gray-600 lufga text-[20px] leading-[150%]",children:s.desc})]})]},e))})]})]})]})}const np="/assets/bubble%20arrow-C1l_YMFx.png",nw="/assets/badge-BVgsP3wE.png",iw="/assets/badgewhite-NBAepwZ-.png",aw="/assets/ambras-BVyAr4Fi.jpg",rw="/assets/Arjun-BsKzfJGg.png",sw="/assets/Mustafa-BoevoLEV.jpg",ow="/assets/Rafeeq-HQz0o94L.jpg",lw="/assets/najiya-D1EQ7SPS.jpg",cw="/assets/Neha-BIVFyfKz.png",uw="/assets/shahab-D17IUplq.jpg",fw="/assets/thashreefa-D_nik3Ru.jpg",dw=[{name:"⁠Muhammed Ambras K. T",quote:"Founder",img:aw},{name:"⁠Muhammed Rafeek T",quote:" Co-Founder",img:ow},{name:"Najiya Nasrin",quote:"Operations Manager",img:lw},{name:"Shihab Sinan",quote:"Business Development Manager",img:uw},{name:"Arjun K",quote:"Creative Head",img:rw},{name:"Muhammed Musthafa",quote:"Marketing Head",img:sw},{name:"Thashreefa Parvin R",quote:"Organizational Psychologist",img:fw},{name:"Neha Beegum",quote:" English Communicative Trainer",img:cw}];function hw({person:s}){return S.jsxs("div",{className:`group relative bg-white text-black rounded-3xl \r
  min-w-[250px] sm:min-w-[280px] md:min-w-[320px] lg:min-w-[340px]\r
  h-[420px] sm:h-[460px] md:h-[500px] lg:h-[520px]\r
  overflow-hidden transition-all duration-500 hover:shadow-2xl flex flex-col`,children:[S.jsxs("div",{className:`\r
          p-5 sm:p-6 md:p-7 lg:p-8\r
          h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px]\r
\r
          flex flex-col justify-center\r
          transition-all duration-500 \r
          group-hover:bg-[#CEFF00]\r
        `,children:[S.jsx("h1",{className:`\r
            font-bold lufga-bold\r
            text-xl sm:text-2xl md:text-3xl lg:text-4xl\r
            leading-tight\r
            transition-all duration-500\r
            group-hover:text-2xl sm:group-hover:text-3xl md:group-hover:text-4xl lg:group-hover:text-5xl\r
            group-hover:scale-[1.10]\r
          `,children:s.name}),S.jsx("p",{className:`\r
            mt-2 sm:mt-3 md:mt-4 tracking-tight\r
            text-sm sm:text-base md:text-lg lg:text-2xl\r
            transition-all duration-500\r
            group-hover:text-base sm:group-hover:text-lg md:group-hover:text-xl lg:group-hover:text-2xl\r
            group-hover:scale-[1.10]\r
          `,children:s.quote})]}),S.jsx("div",{className:`\r
          flex-1 min-h-[300px] sm:min-h-[330px] md:min-h-[350px] lg:min-h-[370px]\r
          transition-all duration-700 ease-out\r
        `,children:S.jsx("img",{src:s.img,alt:s.name,className:`\r
            w-full h-full object-cover object-top\r
            rounded-b-3xl rounded-t-2xl\r
\r
          `})}),S.jsxs("div",{className:"absolute top-4 right-4 z-10",children:[S.jsx("img",{src:nw,className:`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 \r
          rounded-full transition-opacity duration-300 group-hover:opacity-0`,alt:"Badge"}),S.jsx("img",{src:iw,className:`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 \r
          absolute rounded-full inset-0 opacity-10 transition-opacity duration-300 group-hover:opacity-100`,alt:"Badge Hover"})]})]})}function pw(){const s=ue.useRef(null),[e,i]=ue.useState(!0),r=()=>{if(s.current){const{scrollLeft:c,scrollWidth:f,clientWidth:h}=s.current;i(c+h<f-20)}};ue.useEffect(()=>{const c=s.current;if(c)return r(),c.addEventListener("scroll",r),()=>c.removeEventListener("scroll",r)},[]);const l=()=>{if(s.current){const c=window.innerWidth<640?260:window.innerWidth<768?290:window.innerWidth<1024?330:350;s.current.scrollBy({left:c+32,behavior:"smooth"})}};return S.jsx("section",{className:"relative bg-black text-white overflow-hidden",children:S.jsxs("div",{className:"max-w-full mx-auto px-2 sm:px-5 md:px-8 lg:px-30 xl:px-20 py-10 sm:py-12 md:py-16 lg:py-20",children:[S.jsxs("button",{onClick:l,className:`
            absolute right-4 sm:right-6 md:right-8 lg:right-12 xl:right-20
            top-8 sm:top-12 md:top-16 lg:top-24
            w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 lg:w-16 lg:h-16
            rounded-full flex items-center justify-center 
            backdrop-blur-md z-30 transition-opacity duration-300
            ${e?"opacity-100":"opacity-0 pointer-events-none"}
          `,children:[S.jsx("img",{src:np,className:"absolute inset-0 w-full h-full object-cover rounded-full",alt:"Scroll"}),S.jsxs("svg",{className:"w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white z-10",fill:"none",stroke:"currentColor",strokeWidth:"3",children:[S.jsx("line",{x1:"7",y1:"12",x2:"17",y2:"12"}),S.jsx("polyline",{points:"12 7 17 12 12 17"})]})]}),S.jsxs("div",{className:`\r
    pl-4 xs:pl-5 sm:pl-6 md:pl-8 lg:pl-10 xl:pl-14\r
    pr-6 xs:pr-8 sm:pr-10 md:pr-14 lg:pr-20 xl:pr-28\r
  `,children:[S.jsx("h1",{className:`\r
      font-bold lufga-bold tracking-tight \r
      text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl\r
      leading-tight sm:leading-snug\r
      mb-3 sm:mb-4 md:mb-5 lg:mb-6\r
    `,children:"Meet Our Team"}),S.jsx("p",{className:`\r
      max-w-4xl \r
      text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl\r
      font-light lufga-light\r
      leading-relaxed md:leading-relaxed\r
      opacity-100\r
      mb-8 sm:mb-10 md:mb-12 lg:mb-14\r
    `,children:"Discover the diverse individuals who have transformed their education into real-world experience at EDEX Life School."})]}),S.jsx("div",{ref:s,className:`\r
    flex \r
    gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8\r
\r
    overflow-x-auto \r
    snap-x snap-mandatory \r
    scrollbar-hide \r
    scroll-smooth \r
\r
    /* Bottom padding */\r
    pb-4 xs:pb-5 sm:pb-6 md:pb-8 lg:pb-10\r
\r
    /* NEW Right & Left responsive padding */\r
    pr-6 xs:pr-8 sm:pr-10 md:pr-14 lg:pr-20 xl:pr-28\r
    pl-4 xs:pl-5 sm:pl-6 md:pl-8 lg:pl-10 xl:pl-14\r
  `,children:dw.map((c,f)=>S.jsx(hw,{person:c},f))})]})})}const ah="/assets/img1-_9GAqcvi.jpg",rh="/assets/img2-DgQyfBki.jpg",sh="/assets/img3-DX31XClF.jpg",oh="/assets/img4-DjFxAIon.jpg",lh="/assets/img5-BPbZUhXZ.jpg",ch="/assets/img6-CnLRK1Lt.jpg";function mw(){const s=ue.useRef(null),[e,i]=ue.useState(0),r=[[ah,rh,sh,oh,lh,ch],[sh,oh,ah,lh,rh,ch],[lh,rh,sh,oh,ch,ah]];ue.useEffect(()=>{const f=()=>{s.current&&s.current.scrollTo({left:e*s.current.offsetWidth,behavior:"instant"})};return window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[e]);const l=()=>{const f=s.current,h=Math.round(f.scrollLeft/f.offsetWidth);i(h)},c=f=>{const h=s.current;if(!h)return;const m=Math.max(0,Math.min(f,r.length-1));h.scrollTo({left:m*h.offsetWidth,behavior:"smooth"}),i(m)};return S.jsxs("section",{className:"relative bg-black text-white w-full pt-10 lg:px-5 overflow-hidden lg:p-5 md:p-3",children:[S.jsxs("div",{className:"max-w-[1200px] px-4  ",children:[S.jsx("h1",{className:"text-5xl sm:text-6xl md:text-8xl lg:text-[90px] lufga-bold leading-tight mb-4",children:"Meet Our community"}),S.jsx("p",{className:"text-white max-w-[650px] text-base sm:text-lg lg:text-xl mb-10 lufga-light",children:"Discover snapshots of learning, teamwork, and real-world impact from our vibrant community."})]}),S.jsxs("div",{className:"absolute right-6 top-20 px-15 hidden md:flex items-center gap-4 z-30",children:[S.jsxs("button",{onClick:()=>c(e-1),className:"relative w-[60px] h-[60px] rounded-full flex items-center justify-center",children:[S.jsx("img",{src:np,className:"absolute inset-0 w-full h-full object-cover rounded-full rotate-180"}),S.jsxs("svg",{className:"absolute w-6 h-6 text-white rotate-180",fill:"none",stroke:"white",strokeWidth:"3",children:[S.jsx("line",{x1:"7",y1:"12",x2:"17",y2:"12"}),S.jsx("polyline",{points:"12 7 17 12 12 17"})]})]}),S.jsxs("button",{onClick:()=>c(e+1),className:"relative w-[60px] h-[60px] rounded-full flex items-center justify-center",children:[S.jsx("img",{src:np,className:"absolute inset-0 w-full h-full object-cover rounded-full"}),S.jsxs("svg",{className:"absolute w-6 h-6 text-white",fill:"none",stroke:"white",strokeWidth:"3",children:[S.jsx("line",{x1:"7",y1:"12",x2:"17",y2:"12"}),S.jsx("polyline",{points:"12 7 17 12 12 17"})]})]})]}),S.jsx("div",{ref:s,onScroll:l,className:"w-full overflow-x-hidden no-scrollbar scroll-smooth mt-10 snap-x snap-mandatory",style:{WebkitOverflowScrolling:"touch"},children:S.jsx("div",{className:"flex",children:r.map((f,h)=>S.jsx("div",{className:"snap-start shrink-0 w-full md:max-w-[1200px] mx-auto px-4",style:{minWidth:"100%"},children:S.jsxs("div",{className:`\r
  grid \r
  grid-cols-2              /* ALWAYS 2 columns on small screens */\r
  md:grid-cols-3           /* 3 columns from md */\r
  gap-2 \r
  auto-rows-[140px] \r
  sm:auto-rows-[160px] \r
  md:auto-rows-[260px]\r
`,children:[S.jsx("div",{className:"overflow-hidden group md:row-span-2",children:S.jsx("img",{src:f[1],className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"})}),S.jsx("div",{className:"overflow-hidden group",children:S.jsx("img",{src:f[0],className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"})}),S.jsx("div",{className:"overflow-hidden group md:row-span-2",children:S.jsx("img",{src:f[2],className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"})}),S.jsx("div",{className:"overflow-hidden group",children:S.jsx("img",{src:f[3],className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"})}),S.jsxs("div",{className:"col-span-2 md:col-span-3 grid grid-cols-2 gap-2",children:[S.jsx("div",{className:"overflow-hidden group",children:S.jsx("img",{src:f[4],className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"})}),S.jsx("div",{className:"overflow-hidden group",children:S.jsx("img",{src:f[5],className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"})})]})]})},h))})}),S.jsx("div",{className:"flex justify-center mt-6 mb-3",children:S.jsx("div",{className:"inline-flex items-center gap-3",children:r.map((f,h)=>S.jsx("button",{onClick:()=>c(h),className:`rounded-2xl transition-all ${e===h?"bg-white w-6 h-1":"bg-gray-600 w-6 h-1"}`},h))})}),S.jsx("a",{href:"",className:`\r
    fixed md:absolute \r
    bottom-6 right-6 \r
    z-50\r
    w-14 h-14 \r
    rounded-full \r
    bg-[#CDFF00] \r
    flex items-center justify-center\r
    shadow-2xl\r
    transition-all duration-300\r
    hover:scale-110 hover:rotate-45\r
  `,children:S.jsxs("svg",{className:"w-6 h-6 text-black",fill:"none",stroke:"currentColor",strokeWidth:"2.5",viewBox:"0 0 24 24",children:[S.jsx("line",{x1:"7",y1:"17",x2:"17",y2:"7"}),S.jsx("polyline",{points:"7 7 17 7 17 17"})]})})]})}const xw=()=>{const[s,e]=ue.useState(!1);return ue.useEffect(()=>{if(typeof window>"u")return;const i=window.matchMedia("(prefers-color-scheme: dark)");e(i.matches);const r=l=>e(l.matches);return i.addEventListener("change",r),()=>i.removeEventListener("change",r)},[]),s},gw=({children:s,width:e=200,height:i=80,borderRadius:r=20,borderWidth:l=.07,brightness:c=50,opacity:f=.93,blur:h=11,displace:m=0,backgroundOpacity:p=0,saturation:g=1,distortionScale:x=-180,redOffset:_=0,greenOffset:M=10,blueOffset:T=20,xChannel:A="R",yChannel:E="G",mixBlendMode:v="difference",className:O="",style:D={}})=>{const z=ue.useId().replace(/:/g,"-"),j=`glass-filter-${z}`,L=`red-grad-${z}`,I=`blue-grad-${z}`,q=ue.useRef(null),N=ue.useRef(null),R=ue.useRef(null),F=ue.useRef(null),k=ue.useRef(null),te=ue.useRef(null),$=xw(),de=()=>{var oe;const Z=(oe=q.current)==null?void 0:oe.getBoundingClientRect(),xe=(Z==null?void 0:Z.width)||400,_e=(Z==null?void 0:Z.height)||200,Re=Math.min(xe,_e)*(l*.5),ie=`
      <svg viewBox="0 0 ${xe} ${_e}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="${L}" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="red"/>
          </linearGradient>
          <linearGradient id="${I}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="blue"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="${xe}" height="${_e}" fill="black"></rect>
        <rect x="0" y="0" width="${xe}" height="${_e}" rx="${r}" fill="url(#${L})" />
        <rect x="0" y="0" width="${xe}" height="${_e}" rx="${r}" fill="url(#${I})" style="mix-blend-mode: ${v}" />
        <rect x="${Re}" y="${Re}" width="${xe-Re*2}" height="${_e-Re*2}" rx="${r}" fill="hsl(0 0% ${c}% / ${f})" style="filter:blur(${h}px)" />
      </svg>
    `;return`data:image/svg+xml,${encodeURIComponent(ie)}`},P=()=>{var Z;(Z=N.current)==null||Z.setAttribute("href",de())};ue.useEffect(()=>{var Z;P(),[{ref:R,offset:_},{ref:F,offset:M},{ref:k,offset:T}].forEach(({ref:xe,offset:_e})=>{xe.current&&(xe.current.setAttribute("scale",(x+_e).toString()),xe.current.setAttribute("xChannelSelector",A),xe.current.setAttribute("yChannelSelector",E))}),(Z=te.current)==null||Z.setAttribute("stdDeviation",m.toString())},[e,i,r,l,c,f,h,m,x,_,M,T,A,E,v]),ue.useEffect(()=>{if(!q.current)return;const Z=new ResizeObserver(()=>{setTimeout(P,0)});return Z.observe(q.current),()=>{Z.disconnect()}},[]),ue.useEffect(()=>{if(!q.current)return;const Z=new ResizeObserver(()=>{setTimeout(P,0)});return Z.observe(q.current),()=>{Z.disconnect()}},[]),ue.useEffect(()=>{setTimeout(P,0)},[e,i]);const K=()=>{const Z=/Safari/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent),xe=/Firefox/.test(navigator.userAgent);if(Z||xe)return!1;const _e=document.createElement("div");return _e.style.backdropFilter=`url(#${j})`,_e.style.backdropFilter!==""},Y=()=>typeof window>"u"?!1:CSS.supports("backdrop-filter","blur(10px)"),ve=()=>{const Z={...D,width:typeof e=="number"?`${e}px`:e,height:typeof i=="number"?`${i}px`:i,borderRadius:`${r}px`,"--glass-frost":p,"--glass-saturation":g},xe=K(),_e=Y();return xe?{...Z,background:$?`hsl(0 0% 0% / ${p})`:`hsl(0 0% 100% / ${p})`,backdropFilter:`url(#${j}) saturate(${g})`,boxShadow:$?`0 0 2px 1px color-mix(in oklch, white, transparent 65%) inset,
             0 0 10px 4px color-mix(in oklch, white, transparent 85%) inset,
             0px 4px 16px rgba(17, 17, 26, 0.05),
             0px 8px 24px rgba(17, 17, 26, 0.05),
             0px 16px 56px rgba(17, 17, 26, 0.05),
             0px 4px 16px rgba(17, 17, 26, 0.05) inset,
             0px 8px 24px rgba(17, 17, 26, 0.05) inset,
             0px 16px 56px rgba(17, 17, 26, 0.05) inset`:`0 0 2px 1px color-mix(in oklch, black, transparent 85%) inset,
             0 0 10px 4px color-mix(in oklch, black, transparent 90%) inset,
             0px 4px 16px rgba(17, 17, 26, 0.05),
             0px 8px 24px rgba(17, 17, 26, 0.05),
             0px 16px 56px rgba(17, 17, 26, 0.05),
             0px 4px 16px rgba(17, 17, 26, 0.05) inset,
             0px 8px 24px rgba(17, 17, 26, 0.05) inset,
             0px 16px 56px rgba(17, 17, 26, 0.05) inset`}:$?_e?{...Z,background:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(12px) saturate(1.8) brightness(1.2)",WebkitBackdropFilter:"blur(12px) saturate(1.8) brightness(1.2)",border:"1px solid rgba(255, 255, 255, 0.2)",boxShadow:`inset 0 1px 0 0 rgba(255, 255, 255, 0.2),
                        inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)`}:{...Z,background:"rgba(0, 0, 0, 0.4)",border:"1px solid rgba(255, 255, 255, 0.2)",boxShadow:`inset 0 1px 0 0 rgba(255, 255, 255, 0.2),
                        inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)`}:_e?{...Z,background:"rgba(255, 255, 255, 0.25)",backdropFilter:"blur(12px) saturate(1.8) brightness(1.1)",WebkitBackdropFilter:"blur(12px) saturate(1.8) brightness(1.1)",border:"1px solid rgba(255, 255, 255, 0.3)",boxShadow:`0 8px 32px 0 rgba(31, 38, 135, 0.2),
                        0 2px 16px 0 rgba(31, 38, 135, 0.1),
                        inset 0 1px 0 0 rgba(255, 255, 255, 0.4),
                        inset 0 -1px 0 0 rgba(255, 255, 255, 0.2)`}:{...Z,background:"rgba(255, 255, 255, 0.4)",border:"1px solid rgba(255, 255, 255, 0.3)",boxShadow:`inset 0 1px 0 0 rgba(255, 255, 255, 0.5),
                        inset 0 -1px 0 0 rgba(255, 255, 255, 0.3)`}},Se="relative flex items-center justify-center overflow-hidden transition-opacity duration-[260ms] ease-out",B=$?"focus-visible:outline-2 focus-visible:outline-[#0A84FF] focus-visible:outline-offset-2":"focus-visible:outline-2 focus-visible:outline-[#007AFF] focus-visible:outline-offset-2";return S.jsxs("div",{ref:q,className:`${Se} ${B} ${O}`,style:ve(),children:[S.jsx("svg",{className:"w-full h-full pointer-events-none absolute inset-0 opacity-0 -z-10",xmlns:"http://www.w3.org/2000/svg",children:S.jsx("defs",{children:S.jsxs("filter",{id:j,colorInterpolationFilters:"sRGB",x:"0%",y:"0%",width:"100%",height:"100%",children:[S.jsx("feImage",{ref:N,x:"0",y:"0",width:"100%",height:"100%",preserveAspectRatio:"none",result:"map"}),S.jsx("feDisplacementMap",{ref:R,in:"SourceGraphic",in2:"map",id:"redchannel",result:"dispRed"}),S.jsx("feColorMatrix",{in:"dispRed",type:"matrix",values:`1 0 0 0 0\r
                      0 0 0 0 0\r
                      0 0 0 0 0\r
                      0 0 0 1 0`,result:"red"}),S.jsx("feDisplacementMap",{ref:F,in:"SourceGraphic",in2:"map",id:"greenchannel",result:"dispGreen"}),S.jsx("feColorMatrix",{in:"dispGreen",type:"matrix",values:`0 0 0 0 0\r
                      0 1 0 0 0\r
                      0 0 0 0 0\r
                      0 0 0 1 0`,result:"green"}),S.jsx("feDisplacementMap",{ref:k,in:"SourceGraphic",in2:"map",id:"bluechannel",result:"dispBlue"}),S.jsx("feColorMatrix",{in:"dispBlue",type:"matrix",values:`0 0 0 0 0\r
                      0 0 0 0 0\r
                      0 0 1 0 0\r
                      0 0 0 1 0`,result:"blue"}),S.jsx("feBlend",{in:"red",in2:"green",mode:"screen",result:"rg"}),S.jsx("feBlend",{in:"rg",in2:"blue",mode:"screen",result:"output"}),S.jsx("feGaussianBlur",{ref:te,in:"output",stdDeviation:"0.7"})]})})}),S.jsx("div",{className:"w-full h-full flex items-start justify-start p-2 rounded-[inherit] relative z-10",children:s})]})},vw="/assets/wave-CQG0QxVv.png",_w="/assets/img2-YpoeqUph.jpg";function bw(){const s=["Graduates seeking practical experience.","Entrepreneurs aiming to building stronger business acumen.","Professionals looking to enhance leadership and decision-making skills.","Career Fast-Trackers who want to accelerate their career growth."];return S.jsx("div",{className:"bg-black",children:S.jsxs("section",{className:`\r
          w-full bg-[#1F1F1F] text-white \r
          px-6 lg:px-20 py-16\r
          rounded-t-[50px]\r
          border-t-2 border-gray-500 \r
          overflow-visible\r
        `,children:[S.jsx("h1",{className:"lufga-bold font-semibold text-[40px] leading-[100%] mb-10",children:"Who is this for ?"}),S.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[S.jsxs("div",{className:"col-span-2 relative space-y-6 mt-5",children:[S.jsx("img",{src:vw,className:"absolute inset-0 w-full h-[500px] object-cover opacity-60 pointer-events-none"}),S.jsx("div",{className:"relative space-y-6",children:s.map((e,i)=>{const r=e.split(" ")[0],l=e.replace(r,"");return S.jsx(gw,{width:"100%",height:"auto",borderRadius:18,className:`\r
    px-6 py-2\r
    shadow-[0_8px_25px_rgba(0,0,0,0.25)]\r
    cursor-pointer border-t-2\r
    transition-all duration-300\r
    flex items-start   /* FIX: forces content alignment to left */\r
  `,displace:15,distortionScale:-150,redOffset:8,greenOffset:10,blueOffset:60,brightness:100,opacity:.15,mixBlendMode:"screen",children:S.jsxs("p",{className:"lufga-light text-[22px] w-120 sm:text-[24px] leading-snug text-white text-left block",children:[S.jsxs("span",{className:"font-bold",children:[r," "]}),l]})},i)})})]}),S.jsxs("div",{className:"col-span-1 flex flex-col items-center mt-5 gap-3 px-3",children:[S.jsx("img",{src:_w,className:"w-full h-[300px] sm:h-[380px] lg:h-[390px] object-cover rounded-2xl shadow-xl",alt:"person"}),S.jsxs("button",{className:`\r
                flex items-center justify-between w-full \r
                bg-[#CDFF00]\r
                rounded shadow-lg px-4 py-3\r
                hover:scale-105 hover:shadow-2xl transition-all duration-300\r
              `,children:[S.jsx("span",{className:"text-black lufga font-semibold text-[20px]",children:"Let’s Communicate"}),S.jsx("span",{className:`\r
                  w-[60px] h-[60px] bg-white text-2xl\r
                  rounded-2xl flex items-center justify-center \r
                  border border-black/20 text-black font-semibold\r
                `,children:"➜"})]})]})]})]})})}function yw(){ue.useEffect(()=>{cp.init({duration:900,easing:"ease-out",once:!1})},[]);const s=[{id:1,title:"Mental Development",desc:"Develop critical thinking, adaptability, and leadership skills."},{id:2,title:"Emotional Development",desc:"Build resilience, empathy, and strong interpersonal skills."},{id:3,title:"Physical Development",desc:"Enhance wellness and energy management."},{id:4,title:"Intellectual Development",desc:"Cultivate creativity, digital fluency, and financial literacy."}];return S.jsxs("div",{className:"w-full bg-black text-white py-20 px-6 sm:px-8 md:px-12 lg:px-14 xl:px-20",children:[S.jsx("h1",{className:"text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl lufga-bold",children:"Focus Areas"}),S.jsx("div",{className:`\r
          grid \r
          grid-cols-2                 /* Always 2 cards on mobile */\r
          sm:grid-cols-2\r
          md:grid-cols-2\r
          lg:grid-cols-4\r
          gap-4 sm:gap-6 md:gap-8 \r
          mt-10\r
        `,children:s.map(e=>S.jsxs("div",{"data-aos":"flip-left",className:`\r
              bg-white text-black \r
              rounded-xl \r
              shadow-md \r
              cursor-pointer \r
              hover:bg-[#D1FF22]\r
              transition-all duration-300 \r
              hover:shadow-xl hover:scale-[1.03]\r
\r
              min-h-[170px] \r
              xs:min-h-[185px] \r
              sm:min-h-[200px] \r
              md:min-h-[230px] \r
              lg:min-h-[250px]\r
\r
              p-3 xs:p-4 sm:p-5 md:p-6\r
              flex flex-col\r
            `,children:[S.jsx("div",{className:`\r
                w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-11 lg:h-11\r
                bg-[#D1FF22] text-black \r
                rounded flex items-center justify-center\r
                text-[11px] xs:text-[12px] sm:text-[14px] md:text-[15px] lg:text-[17px]\r
                lufga-bold\r
                mb-2\r
              `,children:e.id}),S.jsx("p",{className:`\r
    lufga-bold\r
    max-w-[340px]\r
    text-wrap\r
    leading-tight\r
    overflow-hidden\r
\r
    /* Fluid auto-scaling text (shrinks on small, grows on large) */\r
    text-[clamp(16px,4vw,35px)]\r
\r
    mb-2\r
  `,children:e.title}),S.jsx("p",{className:`\r
                flex-grow\r
                lufga-light \r
                text-[10px] xs:text-[11px] sm:text-[13px] md:text-[14px] lg:text-[20px]\r
                leading-relaxed\r
                text-gray-900\r
              `,children:e.desc})]},e.id))}),S.jsxs("div",{className:"mt-20 flex flex-col items-center py-10",children:[S.jsxs("div",{"data-aos":"fade-up",className:`\r
            flex flex-wrap justify-center items-center \r
            gap-2 sm:gap-4 md:gap-8 \r
            text-[22px] xs:text-[26px] sm:text-[38px] lg:text-[60px] \r
            lufga-bold text-center\r
          `,children:[S.jsx("span",{children:"Learn"}),S.jsx("span",{className:"text-[#D1FF22] text-xl sm:text-3xl lg:text-5xl",children:"✦"}),S.jsx("span",{children:"Apply"}),S.jsx("span",{className:"text-[#D1FF22] text-xl sm:text-3xl lg:text-5xl",children:"✦"}),S.jsx("span",{children:"Grow"})]}),S.jsxs("div",{className:"w-full max-w-5xl mt-10 flex items-center px-4 gap-2",children:[S.jsx("span",{className:"w-2 h-2 sm:w-3 sm:h-3 bg-gray-300 rounded-full"}),S.jsx("span",{className:"flex-1 h-[2px] bg-gray-500"}),S.jsx("span",{className:"w-2 h-2 sm:w-3 sm:h-3 bg-gray-300 rounded-full"}),S.jsx("span",{className:"text-gray-300 text-2xl sm:text-4xl lg:text-5xl px-4",children:"✦"}),S.jsx("span",{className:"w-2 h-2 sm:w-3 sm:h-3 bg-gray-300 rounded-full"}),S.jsx("span",{className:"flex-1 h-[2px] bg-gray-500"}),S.jsx("span",{className:"w-2 h-2 sm:w-3 sm:h-3 bg-gray-300 rounded-full"})]})]})]})}function Sw(s){return Is({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(s)}function Mw(s){return Is({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(s)}function Ew(s){return Is({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(s)}const Tw="/assets/footer-logo-93_ROG0R.png";function Aw(){return S.jsxs("footer",{className:"w-full bg-black text-white py-14 px-6 sm:px-10 md:px-14 lg:px-20",children:[S.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 sm:gap-14",children:[S.jsxs("div",{className:"flex flex-col items-center md:items-start text-center md:text-left",children:[S.jsx("img",{src:Tw,alt:"Edex Life School Logo",className:`\r
    w-20        /* very small screens (smaller than 360px) */\r
    xs:w-15     /* small phones */\r
    sm:w-20     /* normal phones */\r
    md:w-25     /* tablets */\r
    lg:w-30     /* laptops */\r
    xl:w-35     /* large desktops */\r
    object-contain\r
  `}),S.jsx("p",{className:"lufga text-base sm:text-lg md:text-sm px-2 mt-3 text-center whitespace-nowrap",children:"Learn. Apply. Grow."}),S.jsxs("div",{className:"flex gap-6 sm:gap-8 text-xl sm:text-2xl mt-6 justify-center md:justify-start",children:[S.jsx("a",{href:"https://www.facebook.com/p/Edex-Life-School-61578199106983/",children:S.jsx(Sw,{className:"hover:text-[#D1FF22] transition"})}),S.jsx("a",{href:"https://www.instagram.com/edex_life_school?igsh=MXV2MGp6cnk3d25waw==",children:S.jsx(Mw,{className:"hover:text-[#D1FF22] transition"})}),S.jsx("a",{href:"https://wa.me/911234512345",children:S.jsx(Ew,{className:"hover:text-[#D1FF22] transition"})})]})]}),S.jsxs("div",{className:"text-center md:text-left lufga",children:[S.jsx("h3",{className:"text-lg sm:text-xl mb-4 ",children:"Quick Links"}),S.jsxs("ul",{className:"space-y-2 text-gray-300 text-base sm:text-lg ",children:[S.jsx("li",{children:S.jsx(Ln,{to:"/home",className:"hover:text-[#D1FF22]",children:"Home"})}),S.jsx("li",{children:S.jsx(Ln,{to:"/curiculum",className:"hover:text-[#D1FF22]",children:"Curriculum"})}),S.jsx("li",{children:S.jsx(Ln,{to:"/about",className:"hover:text-[#D1FF22]",children:"About Us"})}),S.jsx("li",{children:S.jsx(Ln,{to:"/contact",className:"hover:text-[#D1FF22]",children:"Contact"})})]})]}),S.jsxs("div",{className:"text-center md:text-left lufga",children:[S.jsx("h3",{className:"text-lg sm:text-xl font-semibold mb-3",children:"Address"}),S.jsx("p",{className:"text-gray-300 text-sm sm:text-base",children:"Cherpulassery, Kerala"}),S.jsx("h3",{className:"text-lg sm:text-xl font-semibold mt-6 mb-2",children:"Phone & Mail"}),S.jsx("p",{className:"text-gray-300 text-sm sm:text-base",children:"+91 9539752725"}),S.jsx("p",{className:"text-gray-300 text-sm sm:text-base",children:"info@edexlifeschool"})]}),S.jsxs("div",{className:"text-center md:text-left lufga",children:[S.jsx("h3",{className:"text-lg sm:text-xl font-semibold mb-4",children:"Newsletter"}),S.jsx("p",{className:"text-gray-300 text-sm sm:text-base mb-6",children:"Be the first to know about school events, new courses, and exclusive updates."}),S.jsx("input",{type:"email",placeholder:"Email address",className:`\r
        w-full bg-white text-black px-3 sm:px-4 py-2.5 sm:py-3 \r
        rounded outline-none focus:ring-2 focus:ring-[#D1FF22]\r
        text-sm sm:text-base\r
      `}),S.jsx("button",{className:`\r
        w-full bg-white text-black font-semibold \r
        mt-4 py-2.5 sm:py-3 rounded\r
        hover:bg-[#D1FF22] hover:text-black \r
        transition text-sm sm:text-base\r
      `,children:"Subscribe"})]})]}),S.jsx("div",{className:"w-full h-[1px] bg-gray-700 mt-14"})]})}const ww=()=>S.jsxs("div",{children:[S.jsx(WA,{}),S.jsx(ZA,{}),S.jsx(tw,{}),S.jsx(pw,{}),S.jsx(mw,{}),S.jsx(bw,{}),S.jsx(yw,{})]}),Rw="/assets/call-eqv61TFg.jpg";function vv(){const[s,e]=ue.useState({name:"",email:"",phone:""}),i=l=>{e({...s,[l.target.name]:l.target.value})},r=l=>{l.preventDefault();const c="919539752725",f=`
Hello EDEX LIFE SCHOOL 👋

Name: ${s.name}
Email: ${s.email}
Phone: ${s.phone}

Please contact me.
    `,h=`https://wa.me/${c}?text=${encodeURIComponent(f)}`;window.open(h,"_blank")};return S.jsxs("section",{className:"w-full text-white",children:[S.jsx("div",{className:"w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] flex items-end px-6 sm:px-10 md:px-20 pb-10",style:{backgroundImage:`url(${Rw})`,backgroundSize:"cover",backgroundPosition:"center"},children:S.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight",children:["CONTACT US ",S.jsx("br",{}),"EDEX LIFE ",S.jsx("br",{}),"SCHOOL"]})}),S.jsx("div",{className:"w-full bg-black px-6 sm:px-10 md:px-20 py-12 sm:py-16 md:py-20",children:S.jsxs("div",{className:"grid md:grid-cols-2 gap-12",children:[S.jsxs("div",{children:[S.jsx("h2",{className:"text-xl sm:text-2xl md:text-3xl font-semibold mb-4 mt-3",children:"We’d Love to Hear from You!"}),S.jsx("p",{className:"text-gray-300 mb-8 text-sm sm:text-base leading-relaxed max-w-md",children:"Have questions about our programs? Need guidance on admissions? Reach out to us – we’re here to help!"}),S.jsxs("div",{className:"space-y-6 text-gray-200",children:[S.jsxs("div",{className:"flex items-center gap-4",children:[S.jsx("span",{children:"📞"}),S.jsx("p",{children:"+91 95397 52725"})]}),S.jsxs("div",{className:"flex items-center gap-4",children:[S.jsx("span",{children:"📧"}),S.jsx("p",{children:"info@edexlifeschool.com"})]}),S.jsxs("div",{className:"flex items-center gap-4",children:[S.jsx("span",{children:"📍"}),S.jsx("p",{children:"Cherpulassery, Kerala"})]})]})]}),S.jsxs("div",{children:[S.jsx("h2",{className:"text-xl sm:text-2xl md:text-3xl font-semibold mb-6",children:"Get a Call Back Now !"}),S.jsx("p",{className:"text-gray-300 mb-8 text-sm sm:text-base",children:"Fill in your details, and we’ll reach out to you shortly."}),S.jsxs("form",{className:"space-y-6",onSubmit:r,children:[S.jsx("input",{type:"text",name:"name",placeholder:"Name",required:!0,value:s.name,onChange:i,className:"w-full bg-white text-black rounded-lg px-4 py-3 outline-none"}),S.jsx("input",{type:"email",name:"email",placeholder:"Email",required:!0,value:s.email,onChange:i,className:"w-full bg-white text-black rounded-lg px-4 py-3 outline-none"}),S.jsx("input",{type:"tel",name:"phone",placeholder:"Phone Number",required:!0,value:s.phone,onChange:i,className:"w-full bg-white text-black rounded-lg px-4 py-3 outline-none"}),S.jsx("button",{type:"submit",className:"bg-white text-black font-semibold px-10 py-3 rounded-lg hover:bg-gray-200 transition",children:"Send"})]})]})]})})]})}function Cw(){return ue.useEffect(()=>{cp.init({duration:800,once:!0})},[]),S.jsxs(S.Fragment,{children:[S.jsx(DS,{}),S.jsx(Bv,{}),S.jsxs(y1,{children:[S.jsx(Cs,{path:"/",element:S.jsx(ww,{})}),S.jsx(Cs,{path:"/about",element:S.jsx(_S,{})}),S.jsx(Cs,{path:"/contact",element:S.jsx(vv,{})}),S.jsx(Cs,{path:"/curiculam",element:S.jsx(CS,{})}),S.jsx(Cs,{path:"/contact",element:S.jsx(vv,{})})]}),S.jsx("a",{href:"https://wa.me/919539752725",target:"_blank",rel:"noopener noreferrer",className:`\r
    fixed bottom-6 right-6 z-50\r
    w-14 h-14\r
    flex items-center justify-center\r
    bg-[#25D366]\r
    hover:bg-[#20b957]\r
    text-white\r
    rounded-full\r
    shadow-xl\r
    transition-all duration-300\r
    hover:scale-105\r
  `,children:S.jsx(oS,{className:"text-white",size:28})}),S.jsx(Aw,{})]})}Ry.createRoot(document.getElementById("root")).render(S.jsx(ue.StrictMode,{children:S.jsx(j1,{children:S.jsx(Cw,{})})}));
