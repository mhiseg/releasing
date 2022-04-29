"use strict";(self.webpackChunkopenmrs=self.webpackChunkopenmrs||[]).push([[314],{9314:(e,t,n)=>{n.r(t),n.d(t,{Breadcrumbs:()=>q,CustomBreadcrumbItem:()=>Y,default:()=>G});var r=n(3579),a=n.n(r),i=n(6465),c=n.n(i),l=n(7454),s=n.n(l),o=n(7084);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=o.settings.prefix,m=function(e){var t,n=e.children,r=e.className,i=e.href,c=e.disabled,l=e.inline,o=e.visited,m=e.size,d=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["children","className","href","disabled","inline","visited","size"]),b=s()("".concat(p,"--link"),r,(f(t={},"".concat(p,"--link--disabled"),c),f(t,"".concat(p,"--link--inline"),l),f(t,"".concat(p,"--link--visited"),o),f(t,"".concat(p,"--link--").concat(m),m),t)),g=c?"p":"a",v="_blank"===d.target?"noopener":null;return a().createElement(g,u({href:c?null:i,className:b,rel:v},d),n)};m.propTypes={children:c().node,className:c().string,disabled:c().bool,href:c().string,inline:c().bool,size:c().oneOf(["sm","lg"]),visited:c().bool};const d=m;function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(this,arguments)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=o.settings.prefix,y=a().forwardRef((function(e,t){var n,r=e["aria-current"],i=e.children,c=e.className,l=e.href,o=e.isCurrentPage,u=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["aria-current","children","className","href","isCurrentPage"]),f=s()((g(n={},"".concat(v,"--breadcrumb-item"),!0),g(n,"".concat(v,"--breadcrumb-item--current"),o&&"page"!==r),g(n,c,!!c),n));return"string"==typeof i&&l?a().createElement("li",b({className:f,ref:t},u),a().createElement(d,{href:l,"aria-current":r},i)):a().createElement("li",b({className:f,ref:t},u),a().cloneElement(i,{"aria-current":r,className:"".concat(v,"--link")}))}));y.displayName="BreadcrumbItem",y.propTypes={"aria-current":c().oneOfType([c().string,c().bool]),children:c().node,className:c().string,href:c().string,isCurrentPage:c().bool};const h=y;var O=n(8029),j=n(142),N=n(1856);function E(){return E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E.apply(this,arguments)}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P,k=o.settings.prefix,x=(P=0,function(){return++P});function S(e){var t,n,i=e.id,c=e.active,l=e.className,o=e.withOverlay,u=e.small,f=e.description,p=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["id","active","className","withOverlay","small","description"]),m=(0,r.useRef)(x()).current,d=s()(l,(w(t={},"".concat(k,"--loading"),!0),w(t,"".concat(k,"--loading--small"),u),w(t,"".concat(k,"--loading--stop"),!c),t)),b=s()((w(n={},"".concat(k,"--loading-overlay"),!0),w(n,"".concat(k,"--loading-overlay--stop"),!c),n)),g=i||"loading-id-".concat(m),v=u?"42":"44",y=a().createElement("div",E({},p,{"aria-atomic":"true","aria-labelledby":g,"aria-live":c?"assertive":"off",className:d}),a().createElement("label",{id:g,className:"".concat(k,"--visually-hidden")},f),a().createElement("svg",{className:"".concat(k,"--loading__svg"),viewBox:"0 0 100 100"},a().createElement("title",null,f),u?a().createElement("circle",{className:"".concat(k,"--loading__background"),cx:"50%",cy:"50%",r:v}):null,a().createElement("circle",{className:"".concat(k,"--loading__stroke"),cx:"50%",cy:"50%",r:v})));return o?a().createElement("div",{className:b},y):y}S.propTypes={active:c().bool,className:c().string,description:c().string,id:c().string,small:c().bool,withOverlay:c().bool},S.defaultProps={active:!0,withOverlay:!0,small:!1,description:"Active loading indicator"};const _=S;function T(){return T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},T.apply(this,arguments)}var I=o.settings.prefix;function B(e){var t=e.className,n=e.success,r=e.status,i=void 0===r?n?"finished":"active":r,c=e.iconDescription,l=e.description,o=e.onSuccess,u=e.successDelay,f=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["className","success","status","iconDescription","description","onSuccess","successDelay"]),p=s()("".concat(I,"--inline-loading"),t),m=a().createElement("div",{className:"".concat(I,"--inline-loading__text")},l),d="error"===i?a().createElement(O.ycZ,{className:"".concat(I,"--inline-loading--error")}):"finished"===i?(setTimeout((function(){o&&o()}),u),a().createElement(j.Y3p,{className:"".concat(I,"--inline-loading__checkmark-container")})):"inactive"===i||"active"===i?a().createElement(_,{small:!0,description:c,withOverlay:!1,active:"active"===i}):void 0,b=d&&a().createElement("div",{className:"".concat(I,"--inline-loading__animation")},d);return a().createElement("div",T({className:p},f,{"aria-live":"assertive"}),b,l&&m)}function C(){return C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},C.apply(this,arguments)}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}B.propTypes={className:c().string,description:c().node,iconDescription:c().string,onSuccess:c().func,status:c().oneOf(["inactive","active","finished","error"]),success:(0,N.Z)(c().bool,'\nThe prop `success` for InlineLoading has been deprecated in favor of `status`. Please use `status="finished"` instead.'),successDelay:c().number},B.defaultProps={successDelay:1500};var R=o.settings.prefix,z=a().forwardRef((function(e,t){var n,r=e["aria-label"],i=e.children,c=e.className,l=e.noTrailingSlash,o=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["aria-label","children","className","noTrailingSlash"]),u=s()((D(n={},"".concat(R,"--breadcrumb"),!0),D(n,"".concat(R,"--breadcrumb--no-trailing-slash"),l),n));return a().createElement("nav",C({className:c,"aria-label":r||"Breadcrumb",ref:t},o),a().createElement("ol",{className:u},i))}));z.displayName="Breadcrumb",z.propTypes={"aria-label":c().string,children:c().node,className:c().string,noTrailingSlash:c().bool};const L=z;var Z=n(6078);function A(e,t){const n=[...t];return e.replace(/:([A-Za-z0-9_]+)/g,(e=>{var t;return null!==(t=n.shift())&&void 0!==t?t:e}))}function F(e,t){const n=null==t?void 0:t.exec(e);if(n){const[,...e]=n;return e}{const n=e.split("/");if(n.pop(),n.length>1)return F(n.join("/"),t)}return[]}const Y=({breadcrumbRegistration:e,params:t})=>{const[n,i]=(0,r.useState)("");return(0,r.useEffect)((()=>{"function"==typeof e.settings.title?Promise.resolve(e.settings.title(t)).then((e=>i(e))):i(e.settings.title)}),[e,t]),a().createElement(h,{key:e.settings.path},a().createElement(Z.ConfigurableLink,{to:A(e.settings.path,t)},n||a().createElement(B,null)))},q=()=>{const[e,t]=(0,r.useState)(location.pathname),n=(0,Z.getBreadcrumbsFor)(e),i=n[n.length-1],c=F(e,null==i?void 0:i.matcher);return(0,r.useEffect)((()=>{const e=()=>t(location.pathname);return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}),[]),n.length>4&&n.splice(1,n.length-3,Object.assign(Object.assign({},n[1]),{settings:Object.assign(Object.assign({},n[1].settings),{title:"..."})})),a().createElement(L,{className:"breadcrumbs-container"},n.map((e=>a().createElement(Y,{breadcrumbRegistration:e,params:c}))))},G=q}}]);
//# sourceMappingURL=228d23d58cf9c127cc47.js.map