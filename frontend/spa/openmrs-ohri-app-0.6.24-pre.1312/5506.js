/*! For license information please see 5506.js.LICENSE.txt */
"use strict";(self.webpackChunkopenmrs_ohri_app=self.webpackChunkopenmrs_ohri_app||[]).push([[5506],{87773:(e,t,r)=>{var o=r(79972),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},f={};function p(e){return o.isMemo(e)?c:f[e.$$typeof]||n}f[o.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},f[o.Memo]=c;var s=Object.defineProperty,y=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,r,o){if("string"!=typeof r){if(m){var n=l(r);n&&n!==m&&e(t,n,o)}var c=y(r);i&&(c=c.concat(i(r)));for(var f=p(t),d=p(r),b=0;b<c.length;++b){var $=c[b];if(!(a[$]||o&&o[$]||d&&d[$]||f&&f[$])){var S=u(r,$);try{s(t,$,S)}catch(e){}}}}return t}},4005:(e,t)=>{var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,f=r?Symbol.for("react.profiler"):60114,p=r?Symbol.for("react.provider"):60109,s=r?Symbol.for("react.context"):60110,y=r?Symbol.for("react.async_mode"):60111,i=r?Symbol.for("react.concurrent_mode"):60111,u=r?Symbol.for("react.forward_ref"):60112,l=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,d=r?Symbol.for("react.memo"):60115,b=r?Symbol.for("react.lazy"):60116,$=r?Symbol.for("react.block"):60121,S=r?Symbol.for("react.fundamental"):60117,g=r?Symbol.for("react.responder"):60118,v=r?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case y:case i:case a:case f:case c:case l:return e;default:switch(e=e&&e.$$typeof){case s:case u:case b:case d:case p:return e;default:return t}}case n:return t}}}function P(e){return w(e)===i}t.AsyncMode=y,t.ConcurrentMode=i,t.ContextConsumer=s,t.ContextProvider=p,t.Element=o,t.ForwardRef=u,t.Fragment=a,t.Lazy=b,t.Memo=d,t.Portal=n,t.Profiler=f,t.StrictMode=c,t.Suspense=l,t.isAsyncMode=function(e){return P(e)||w(e)===y},t.isConcurrentMode=P,t.isContextConsumer=function(e){return w(e)===s},t.isContextProvider=function(e){return w(e)===p},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return w(e)===u},t.isFragment=function(e){return w(e)===a},t.isLazy=function(e){return w(e)===b},t.isMemo=function(e){return w(e)===d},t.isPortal=function(e){return w(e)===n},t.isProfiler=function(e){return w(e)===f},t.isStrictMode=function(e){return w(e)===c},t.isSuspense=function(e){return w(e)===l},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===i||e===f||e===c||e===l||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===d||e.$$typeof===p||e.$$typeof===s||e.$$typeof===u||e.$$typeof===S||e.$$typeof===g||e.$$typeof===v||e.$$typeof===$)},t.typeOf=w},79972:(e,t,r)=>{e.exports=r(4005)},66443:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var o=r(50576),n=r.n(o),a=r(86387),c=r(52429);const f=()=>{const e=window.getOpenmrsSpaBase(),t=(0,o.useMemo)((()=>`${window.location.origin}${e}dashboard`!=document.referrer),[e]);return n().createElement(n().Fragment,null,t&&n().createElement(c.VK,null,n().createElement(a.l_,{to:{pathname:`${e}dashboard`}})))}},16881:(e,t,r)=>{r.d(t,{Z:()=>n});var o=r(2717);function n(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,(0,o.Z)(e,t)}}}]);
//# sourceMappingURL=5506.js.map