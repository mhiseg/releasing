"use strict";(self.webpackChunkesm_ohri_hiv_app=self.webpackChunkesm_ohri_hiv_app||[]).push([[9539],{59539:(e,n,t)=>{t.d(n,{Z:()=>P});var o=t(56666),r=t(38777),c=t(2867),i=t(59740),a=t(13980),s=t.n(a),l=t(95720),u=t.n(l),d=t(72779),f=t.n(d),p=t(93597),b=t(63834),y=t(44509),m=t(24817),v=t(60330),g=t(47304),h=t(60995),O=t(30309),Z=["children","as","className","disabled","small","size","kind","href","isExpressive","isSelected","tabIndex","type","renderIcon","dangerDescription","iconDescription","hasIconOnly","tooltipPosition","tooltipAlignment","onClick","onBlur","onFocus","onMouseEnter","onMouseLeave"];function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var j=u().forwardRef((function(e,n){var t,a=e.children,s=e.as,d=e.className,p=e.disabled,w=e.small,j=e.size,P=e.kind,x=e.href,M=e.isExpressive,D=e.isSelected,k=e.tabIndex,I=e.type,S=e.renderIcon,A=e.dangerDescription,L=e.iconDescription,_=e.hasIconOnly,C=e.tooltipPosition,T=e.tooltipAlignment,B=e.onClick,N=e.onBlur,F=e.onFocus,z=e.onMouseEnter,R=e.onMouseLeave,q=(0,i.Z)(e,Z),G=(0,l.useState)(!1),H=(0,c.Z)(G,2),J=H[0],K=H[1],Q=(0,l.useState)(!1),U=(0,c.Z)(Q,2),V=U[0],W=U[1],X=(0,l.useState)(!1),Y=(0,c.Z)(X,2),$=Y[0],ee=Y[1],ne=(0,l.useRef)(null),te=(0,l.useRef)(null),oe=(0,v.A)(),re=function(e){var n,t=null===(n=document)||void 0===n?void 0:n.querySelectorAll(".".concat(oe,"--tooltip--a11y"));(0,r.Z)(t).map((function(n){(0,h.Z)(n,"".concat(oe,"--tooltip--hidden"),n!==e.currentTarget)}))},ce=function(e){if(_){if(te.current&&clearTimeout(te.current),e.target===ne.current)return void K(!0);re(e),K(!0)}};(0,l.useEffect)((function(){var e=function(e){(0,y.wB)(e,[m.L1])&&(K(!1),W(!1))};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}),[]);var ie,ae=(0,O.ye)("enable-v11-release"),se={tabIndex:k,className:f()(d,(t={},(0,o.Z)(t,"".concat(oe,"--btn"),!0),(0,o.Z)(t,"".concat(oe,"--btn--sm"),"small"===j&&!M||"sm"===j&&!M||w&&!M),(0,o.Z)(t,"".concat(oe,"--btn--md"),"field"===j&&!M||"md"===j&&!M),(0,o.Z)(t,"".concat(oe,"--btn--lg"),ae?"xl"===j:"lg"===j),(0,o.Z)(t,"".concat(oe,"--btn--xl"),ae?"2xl"===j:"xl"===j),(0,o.Z)(t,"".concat(oe,"--btn--").concat(P),P),(0,o.Z)(t,"".concat(oe,"--btn--disabled"),p),(0,o.Z)(t,"".concat(oe,"--btn--expressive"),M),(0,o.Z)(t,"".concat(oe,"--tooltip--visible"),!ae&&V),(0,o.Z)(t,"".concat(oe,"--tooltip--hidden"),!ae&&_&&!J),(0,o.Z)(t,"".concat(oe,"--btn--icon-only"),_),(0,o.Z)(t,"".concat(oe,"--btn--selected"),_&&D&&"ghost"===P),(0,o.Z)(t,"".concat(oe,"--tooltip__trigger"),!ae&&_),(0,o.Z)(t,"".concat(oe,"--tooltip--a11y"),!ae&&_),(0,o.Z)(t,"".concat(oe,"--btn--icon-only--").concat(C),!ae&&_&&C),(0,o.Z)(t,"".concat(oe,"--tooltip--align-").concat(T),!ae&&_&&T),t)),ref:n},le=S?u().createElement(S,{"aria-label":L,className:"".concat(oe,"--btn__icon"),"aria-hidden":"true"}):null,ue=["danger","danger--tertiary","danger--ghost"],de="button",fe=(0,g.M)("danger-description"),pe={disabled:p,type:I,"aria-describedby":ue.includes(P)?fe:null,"aria-pressed":_&&"ghost"===P?D:null},be={href:x};return ie=_?u().createElement("div",{ref:ne,onMouseEnter:ce,className:"".concat(oe,"--assistive-text")},L):ue.includes(P)?u().createElement("span",{id:fe,className:"".concat(oe,"--visually-hidden")},A):null,s?(de=s,pe=E(E({},pe),be)):x&&!p&&(de="a",pe=be),ae?(delete pe["aria-describedby"],u().createElement(de,E(E(E({onMouseEnter:z,onMouseLeave:R,onFocus:F,onBlur:N,onClick:B,type:I},q),se),pe),a)):u().createElement(de,E(E(E({onMouseEnter:(0,b.M)([z,ce]),onMouseLeave:(0,b.M)([R,function(){!$&&_&&(te.current=setTimeout((function(){K(!1),W(!1)}),100))}]),onFocus:(0,b.M)([F,function(e){_&&(re(e),ee(!0),K(!0))}]),onBlur:(0,b.M)([N,function(){_&&(W(!1),ee(!1),K(!1))}]),onClick:(0,b.M)([B,function(e){K(!1),e.target!==ne.current||e.preventDefault()}])},q),se),pe),ie,a,le)}));j.displayName="Button",j.propTypes={as:s().oneOfType([s().func,s().string,s().elementType]),children:s().node,className:s().string,dangerDescription:s().string,disabled:s().bool,hasIconOnly:s().bool,href:s().string,iconDescription:function(e){if(e.renderIcon&&!e.children&&!e.iconDescription)return new Error("renderIcon property specified without also providing an iconDescription property.")},isExpressive:s().bool,isSelected:s().bool,kind:s().oneOf(["primary","secondary","danger","ghost","danger--primary","danger--ghost","danger--tertiary","tertiary"]).isRequired,onBlur:s().func,onClick:s().func,onFocus:s().func,onMouseEnter:s().func,onMouseLeave:s().func,renderIcon:s().oneOfType([s().func,s().object]),role:s().string,size:s().oneOf(["default","field","small","sm","md","lg","xl","2xl"]),small:(0,p.Z)(s().bool,'\nThe prop `small` for Button has been deprecated in favor of `size`. Please use `size="sm"` instead.'),tabIndex:s().number,tooltipAlignment:s().oneOf(["start","center","end"]),tooltipPosition:s().oneOf(["top","right","bottom","left"]),type:s().oneOf(["button","reset","submit"])},j.defaultProps={tabIndex:0,type:"button",disabled:!1,kind:"primary",size:"default",dangerDescription:"danger",tooltipAlignment:"center",tooltipPosition:"top",isExpressive:!1};const P=j},30309:(e,n,t)=>{t.d(n,{pG:()=>a,ye:()=>s}),t(2867);var o=t(70145),r=t(13980),c=t.n(r),i=t(95720),a=(0,i.createContext)(o.FeatureFlags);function s(e){return(0,i.useContext)(a).enabled(e)}c().node,c().objectOf(c().bool)},47304:(e,n,t)=>{t.d(n,{E:()=>d,M:()=>u});var o=t(2867),r=t(95720),c=t(83182),i=!("undefined"==typeof window||!window.document||!window.document.createElement),a=(0,c.Z)(),s=i?r.useLayoutEffect:r.useEffect,l=!1;function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"id",n=(0,r.useState)((function(){return l?"".concat(e,"-").concat(a()):null})),t=(0,o.Z)(n,2),c=t[0],i=t[1];return s((function(){null===c&&i("".concat(e,"-").concat(a()))}),[a]),(0,r.useEffect)((function(){!1===l&&(l=!0)}),[]),c}function d(e){var n=u();return null!=e?e:n}},93597:(e,n,t)=>{t.d(n,{Z:()=>a});var o=t(56666);function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var i={};function a(e,n){return function(n,t,r){if(void 0!==n[t]){i[r]&&i[r][t]||(i[r]=c(c({},i[r]),{},(0,o.Z)({},t,!0)));for(var a=arguments.length,s=new Array(a>3?a-3:0),l=3;l<a;l++)s[l-3]=arguments[l];return e.apply(void 0,[n,t,r].concat(s))}}}},63834:(e,n,t)=>{t.d(n,{M:()=>o});var o=function(e){return function(n){for(var t=arguments.length,o=new Array(t>1?t-1:0),r=1;r<t;r++)o[r-1]=arguments[r];for(var c=0;c<e.length&&!n.defaultPrevented;c++)"function"==typeof e[c]&&e[c].apply(e,[n].concat(o))}}},83182:(e,n,t)=>{function o(){var e=0;return function(){return++e}}t.d(n,{Z:()=>o})},60995:(e,n,t)=>{function o(e,n,t){e.classList.contains(n)===!t&&e.classList[t?"add":"remove"](n)}t.d(n,{Z:()=>o})},38777:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(926),r=t(59147);function c(e){return function(e){if(Array.isArray(e))return(0,o.Z)(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,r.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=9539.js.map