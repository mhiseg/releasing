(window.webpackJsonp_openmrs_esm_refapp_navigation=window.webpackJsonp_openmrs_esm_refapp_navigation||[]).push([[2],{11:function(n){n.exports={Logout:"Logout"}},12:function(n){n.exports={Logout:"Déconnexion"}},26:function(n,t,e){var r=e(27);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(8)(r,o);r.locals&&(n.exports=r.locals)},27:function(n,t,e){(t=n.exports=e(7)(!1)).push([n.i,"._2_6bIRZOTMYLdshFof092n {\n  text-align: right;\n  display: flex;\n  align-items: center;\n  margin-right: 10px;\n}\n\n._3cXXNhzQQCYVtjZOghfKrs {\n  margin-right: 10px;\n}\n\n._3cXXNhzQQCYVtjZOghfKrs span {\n  margin-left: 5px;\n}\n\n._3BV1nRQeBguEGZmM5hfaJw {\n  height: 60px;\n  width: 120px;\n}\n",""]),t.locals={"action-container":"_2_6bIRZOTMYLdshFof092n",username:"_3cXXNhzQQCYVtjZOghfKrs","custom-logo":"_3BV1nRQeBguEGZmM5hfaJw"}},29:function(n,t,e){var r=e(30);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(8)(r,o);r.locals&&(n.exports=r.locals)},30:function(n,t,e){(n.exports=e(7)(!1)).push([n.i,"",""])},33:function(n,t,e){"use strict";e.r(t);var r=e(1),o=e.n(r),a=e(2),c=e.n(a),i=e(10),u=e.n(i),s=e(32),l=e(3),f={en:{translations:e(11)},fr:{translations:e(12)}},p=e(31),m=e(9);var g=function(n){p.a.changeLanguage(n||"en")},b=e(26),h=e.n(b);function d(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var e=[],r=!0,o=!1,a=void 0;try{for(var c,i=n[Symbol.iterator]();!(r=(c=i.next()).done)&&(e.push(c.value),!t||e.length!==t);r=!0);}catch(n){o=!0,a=n}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return e}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return v(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return v(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}e(29);e.d(t,"bootstrap",(function(){return O})),e.d(t,"mount",(function(){return j})),e.d(t,"unmount",(function(){return _}));var y=u()({React:o.a,ReactDOM:c.a,rootComponent:function(n){var t=d(Object(r.useState)(!0),2),e=t[0],o=t[1],a=d(Object(r.useState)(null),2),c=a[0],i=a[1],u=d(Object(r.useState)("en"),2),b=u[0],v=u[1],y=d(Object(r.useState)({type:"",url:""}),2),O=y[0],j=y[1];!function(n,t,e){var r,o,a;p.a.use(m.b).init(function(n){return{resources:n,lng:"en",keySeparator:!1,interpolation:{escapeValue:!1},fallbackLng:"en",ns:["translations"],defaultNS:"translations"}}(n)),r=function(n){return n.split("_")[0]}(t),o=e,(a=g)(r),o((function(){a(r)}),[r])}(f,b,r.useEffect);var _="/openmrs/appui/header/logout.action?successUrl=openmrs";return Object(r.useEffect)((function(){var n=Object(l.getCurrentUser)({includeAuthStatus:!0}).subscribe((function(n){return function(n){n.authenticated?(o(!0),i(n.user.display),v(n.locale)):o(!1)}(n)})),t=Object(l.openmrsFetch)("".concat("/frontend/headerConfig",".json")),e={type:"default",url:""};return Promise.resolve(t).then((function(n){j(n.data)})).catch((function(n){console.log("Unable to load the header configuration: ".concat(n)),j(e)})),function(){return n.unsubscribe()}}),[]),Object(r.useEffect)((function(){e||(window.location.href=_)}),[e]),e&&Object(s.a)("div",{className:"header"},Object(s.a)("div",null,Object(s.a)("a",{href:"/openmrs",className:"logo",title:"navbar-logo"},""==O.type?"":"custom"==O.type?Object(s.a)("img",{className:h.a["custom-logo"],src:"../".concat(O.url),alt:"custom-logo"}):Object(s.a)("span",null))),Object(s.a)("div",{className:h.a["action-container"]},Object(s.a)("a",{href:"/openmrs/adminui/myaccount/myAccount.page",className:h.a.username},Object(s.a)("i",{className:"icon-user small"}),Object(s.a)("span",null,c)),Object(s.a)("a",{href:_},Object(s.a)(m.a,null,"Logout"),Object(s.a)("i",{className:"icon-signout small"}))))}}),O=y.bootstrap,j=y.mount,_=y.unmount}}]);
//# sourceMappingURL=2.openmrs-esm-refapp-navigation.js.map