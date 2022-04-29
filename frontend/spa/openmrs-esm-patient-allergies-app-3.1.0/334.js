"use strict";(self.webpackChunk_openmrs_esm_patient_allergies_app=self.webpackChunk_openmrs_esm_patient_allergies_app||[]).push([[334],{1145:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7896),c=n(9740),i=n(9902),r=n.n(i),o=n(3980),s=n.n(o),l=n(2779),u=n.n(l),d=n(618),f=n(3346),v=n(3597),p=n(6666),m=n(3182),g=n(330),y=["id","active","className","withOverlay","small","description"],b=(0,m.Z)();function Z(e){var t,n,o=e.id,s=e.active,l=e.className,d=e.withOverlay,f=e.small,v=e.description,m=(0,c.Z)(e,y),Z=(0,g.A)(),h=(0,i.useRef)(b()).current,_=u()(l,(t={},(0,p.Z)(t,"".concat(Z,"--loading"),!0),(0,p.Z)(t,"".concat(Z,"--loading--small"),f),(0,p.Z)(t,"".concat(Z,"--loading--stop"),!s),t)),N=u()((n={},(0,p.Z)(n,"".concat(Z,"--loading-overlay"),!0),(0,p.Z)(n,"".concat(Z,"--loading-overlay--stop"),!s),n)),E=o||"loading-id-".concat(h),j=r().createElement("div",(0,a.Z)({},m,{"aria-atomic":"true","aria-labelledby":E,"aria-live":s?"assertive":"off",className:_}),r().createElement("label",{id:E,className:"".concat(Z,"--visually-hidden")},v),r().createElement("svg",{className:"".concat(Z,"--loading__svg"),viewBox:"0 0 100 100"},r().createElement("title",null,v),f?r().createElement("circle",{className:"".concat(Z,"--loading__background"),cx:"50%",cy:"50%",r:"44"}):null,r().createElement("circle",{className:"".concat(Z,"--loading__stroke"),cx:"50%",cy:"50%",r:"44"})));return d?r().createElement("div",{className:N},j):j}Z.propTypes={active:s().bool,className:s().string,description:s().string,id:s().string,small:s().bool,withOverlay:s().bool},Z.defaultProps={active:!0,withOverlay:!0,small:!1,description:"Active loading indicator"};const h=Z;var _=["className","success","status","iconDescription","description","onSuccess","successDelay"];function N(e){var t=e.className,n=e.success,i=e.status,o=void 0===i?n?"finished":"active":i,s=e.iconDescription,l=e.description,v=e.onSuccess,p=e.successDelay,m=(0,c.Z)(e,_),y=(0,g.A)(),b=u()("".concat(y,"--inline-loading"),t),Z=r().createElement("div",{className:"".concat(y,"--inline-loading__text")},l),N="error"===o?r().createElement(d.ycZ,{className:"".concat(y,"--inline-loading--error")},r().createElement("title",null,s)):"finished"===o?(setTimeout((function(){v&&v()}),p),r().createElement(f.Y3p,{className:"".concat(y,"--inline-loading__checkmark-container")},r().createElement("title",null,s))):"inactive"===o||"active"===o?r().createElement(h,{small:!0,description:s,withOverlay:!1,active:"active"===o}):void 0,E=N&&r().createElement("div",{className:"".concat(y,"--inline-loading__animation")},N);return r().createElement("div",(0,a.Z)({className:b},m,{"aria-live":"assertive"}),E,l&&Z)}N.propTypes={className:s().string,description:s().node,iconDescription:s().string,onSuccess:s().func,status:s().oneOf(["inactive","active","finished","error"]),success:(0,v.Z)(s().bool,'\nThe prop `success` for InlineLoading has been deprecated in favor of `status`. Please use `status="finished"` instead.'),successDelay:s().number},N.defaultProps={successDelay:1500}},187:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n(3221).Z.Symbol},9001:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(187),c=Object.prototype,i=c.hasOwnProperty,r=c.toString,o=a.Z?a.Z.toStringTag:void 0;var s=Object.prototype.toString;var l=a.Z?a.Z.toStringTag:void 0;const u=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":l&&l in Object(e)?function(e){var t=i.call(e,o),n=e[o];try{e[o]=void 0;var a=!0}catch(e){}var c=r.call(e);return a&&(t?e[o]=n:delete e[o]),c}(e):function(e){return s.call(e)}(e)}},2168:(e,t,n)=>{n.d(t,{Z:()=>a});const a="object"==typeof global&&global&&global.Object===Object&&global},3221:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(2168),c="object"==typeof self&&self&&self.Object===Object&&self;const i=a.Z||c||Function("return this")()},4243:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(187);var c=n(7885),i=n(9001),r=n(3391);var o=a.Z?a.Z.prototype:void 0,s=o?o.toString:void 0;const l=function e(t){if("string"==typeof t)return t;if((0,c.Z)(t))return function(e,t){for(var n=-1,a=null==e?0:e.length,c=Array(a);++n<a;)c[n]=t(e[n],n,e);return c}(t,e)+"";if(function(e){return"symbol"==typeof e||(0,r.Z)(e)&&"[object Symbol]"==(0,i.Z)(e)}(t))return s?s.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},u=function(e){return null==e?"":l(e)},d=function(e,t,n){var a=e.length;return n=void 0===n?a:n,!t&&n>=a?e:function(e,t,n){var a=-1,c=e.length;t<0&&(t=-t>c?0:c+t),(n=n>c?c:n)<0&&(n+=c),c=t>n?0:n-t>>>0,t>>>=0;for(var i=Array(c);++a<c;)i[a]=e[a+t];return i}(e,t,n)};var f=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");const v=function(e){return f.test(e)};var p="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",m="\\ud83c[\\udffb-\\udfff]",g="[^\\ud800-\\udfff]",y="(?:\\ud83c[\\udde6-\\uddff]){2}",b="[\\ud800-\\udbff][\\udc00-\\udfff]",Z="(?:"+p+"|"+m+")?",h="[\\ufe0e\\ufe0f]?",_=h+Z+"(?:\\u200d(?:"+[g,y,b].join("|")+")"+h+Z+")*",N="(?:"+[g+p+"?",p,y,b,"[\\ud800-\\udfff]"].join("|")+")",E=RegExp(m+"(?="+m+")|"+N+_,"g");const j=function(e){return v(e)?function(e){return e.match(E)||[]}(e):function(e){return e.split("")}(e)},O=function(e){e=u(e);var t=v(e)?j(e):void 0,n=t?t[0]:e.charAt(0),a=t?d(t,1).join(""):e.slice(1);return n.toUpperCase()+a},w=function(e){return O(u(e).toLowerCase())}},7885:(e,t,n)=>{n.d(t,{Z:()=>a});const a=Array.isArray},3391:(e,t,n)=>{n.d(t,{Z:()=>a});const a=function(e){return null!=e&&"object"==typeof e}}}]);
//# sourceMappingURL=334.js.map