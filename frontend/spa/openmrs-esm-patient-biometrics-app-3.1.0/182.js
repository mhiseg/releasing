"use strict";(self.webpackChunk_openmrs_esm_patient_biometrics_app=self.webpackChunk_openmrs_esm_patient_biometrics_app||[]).push([[182],{182:(e,a,t)=>{t.d(a,{Z:()=>D});var c,i,n=t(7896),s=t(2159),l=t(9902),r=t.n(l),o=t(3980),d=t.n(o),m=t(2779),u=t.n(m),p=t(5495),v=["children"],g=r().forwardRef((function(e,a){var t=e.children,n=(0,p._)(e,v);return r().createElement(p.I,(0,p.a)({width:16,height:16,viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",ref:a},n),c||(c=r().createElement("path",{d:"M8,1C4.1,1,1,4.1,1,8s3.1,7,7,7s7-3.1,7-7S11.9,1,8,1z M10.7,11.5L4.5,5.3l0.8-0.8l6.2,6.2L10.7,11.5z"})),i||(i=r().createElement("path",{fill:"none",d:"M10.7,11.5L4.5,5.3l0.8-0.8l6.2,6.2L10.7,11.5z","data-icon-path":"inner-path",opacity:"0"})),t)})),h=t(3346),f=t(3597),_=t(6666),y=t(3182),E=t(330),N=["id","active","className","withOverlay","small","description"],w=(0,y.Z)();function b(e){var a,t,c=e.id,i=e.active,o=e.className,d=e.withOverlay,m=e.small,p=e.description,v=(0,s.Z)(e,N),g=(0,E.A)(),h=(0,l.useRef)(w()).current,f=u()(o,(a={},(0,_.Z)(a,"".concat(g,"--loading"),!0),(0,_.Z)(a,"".concat(g,"--loading--small"),m),(0,_.Z)(a,"".concat(g,"--loading--stop"),!i),a)),y=u()((t={},(0,_.Z)(t,"".concat(g,"--loading-overlay"),!0),(0,_.Z)(t,"".concat(g,"--loading-overlay--stop"),!i),t)),b=c||"loading-id-".concat(h),Z=r().createElement("div",(0,n.Z)({},v,{"aria-atomic":"true","aria-labelledby":b,"aria-live":i?"assertive":"off",className:f}),r().createElement("label",{id:b,className:"".concat(g,"--visually-hidden")},p),r().createElement("svg",{className:"".concat(g,"--loading__svg"),viewBox:"0 0 100 100"},r().createElement("title",null,p),m?r().createElement("circle",{className:"".concat(g,"--loading__background"),cx:"50%",cy:"50%",r:"44"}):null,r().createElement("circle",{className:"".concat(g,"--loading__stroke"),cx:"50%",cy:"50%",r:"44"})));return d?r().createElement("div",{className:y},Z):Z}b.propTypes={active:d().bool,className:d().string,description:d().string,id:d().string,small:d().bool,withOverlay:d().bool},b.defaultProps={active:!0,withOverlay:!0,small:!1,description:"Active loading indicator"};const Z=b;var k=["className","success","status","iconDescription","description","onSuccess","successDelay"];function D(e){var a=e.className,t=e.success,c=e.status,i=void 0===c?t?"finished":"active":c,l=e.iconDescription,o=e.description,d=e.onSuccess,m=e.successDelay,p=(0,s.Z)(e,k),v=(0,E.A)(),f=u()("".concat(v,"--inline-loading"),a),_=r().createElement("div",{className:"".concat(v,"--inline-loading__text")},o),y="error"===i?r().createElement(g,{className:"".concat(v,"--inline-loading--error")},r().createElement("title",null,l)):"finished"===i?(setTimeout((function(){d&&d()}),m),r().createElement(h.Y3p,{className:"".concat(v,"--inline-loading__checkmark-container")},r().createElement("title",null,l))):"inactive"===i||"active"===i?r().createElement(Z,{small:!0,description:l,withOverlay:!1,active:"active"===i}):void 0,N=y&&r().createElement("div",{className:"".concat(v,"--inline-loading__animation")},y);return r().createElement("div",(0,n.Z)({className:f},p,{"aria-live":"assertive"}),N,o&&_)}D.propTypes={className:d().string,description:d().node,iconDescription:d().string,onSuccess:d().func,status:d().oneOf(["inactive","active","finished","error"]),success:(0,f.Z)(d().bool,'\nThe prop `success` for InlineLoading has been deprecated in favor of `status`. Please use `status="finished"` instead.'),successDelay:d().number},D.defaultProps={successDelay:1500}}}]);
//# sourceMappingURL=182.js.map