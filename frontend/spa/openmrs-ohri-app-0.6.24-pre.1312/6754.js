(self.webpackChunkopenmrs_ohri_app=self.webpackChunkopenmrs_ohri_app||[]).push([[6754],{50206:(e,t,_)=>{"use strict";_.d(t,{default:()=>u});var r=_(39743),n=_.n(r),o=_(3157),i=_.n(o),a=_(53439),s=_.n(a),p=_(79201),l=_.n(p),m=_(71573),c=_.n(m),d=_(35914),h=_.n(d),g=_(26775),y=_.n(g),f={};f.styleTagTransform=h(),f.setAttributes=l(),f.insert=s().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=c(),n()(y(),f);const u=y()&&y().locals?y().locals:void 0},32943:(e,t,_)=>{"use strict";_.d(t,{Z:()=>n});var r=_(50576);const n="undefined"!=typeof window?r.useLayoutEffect:r.useEffect},50190:(e,t,_)=>{"use strict";_.d(t,{Z:()=>n});var r=_(50576);const n=({width:e="61",height:t="59"})=>r.createElement("svg",{width:e,height:t,viewBox:"0 0 61 59"},r.createElement("title",null,"Empty data illustration"),r.createElement("g",{fill:"none",fillRule:"evenodd"},r.createElement("path",{d:"M38.133 13.186H21.947c-.768.001-1.39.623-1.39 1.391V50.55l-.186.057-3.97 1.216a.743.743 0 01-.927-.493L3.664 12.751a.742.742 0 01.492-.926l6.118-1.874 17.738-5.43 6.119-1.873a.741.741 0 01.926.492L38.076 13l.057.186z",fill:"#F4F4F4"}),r.createElement("path",{d:"M41.664 13L38.026 1.117A1.576 1.576 0 0036.056.07l-8.601 2.633-17.737 5.43-8.603 2.634a1.578 1.578 0 00-1.046 1.97l12.436 40.616a1.58 1.58 0 001.969 1.046l5.897-1.805.185-.057v-.194l-.185.057-5.952 1.822a1.393 1.393 0 01-1.737-.923L.247 12.682a1.39 1.39 0 01.923-1.738L9.772 8.31 27.51 2.881 36.112.247a1.393 1.393 0 011.737.923L41.47 13l.057.186h.193l-.057-.185z",fill:"#8D8D8D"}),r.createElement("path",{d:"M11.378 11.855a.836.836 0 01-.798-.59L9.385 7.361a.835.835 0 01.554-1.042l16.318-4.996a.836.836 0 011.042.554l1.195 3.902a.836.836 0 01-.554 1.043l-16.318 4.995a.831.831 0 01-.244.037z",fill:"#C6C6C6"}),r.createElement("circle",{fill:"#C6C6C6",cx:17.636,cy:2.314,r:1.855}),r.createElement("circle",{fill:"#FFF",fillRule:"nonzero",cx:17.636,cy:2.314,r:1.175}),r.createElement("path",{d:"M55.893 53.995H24.544a.79.79 0 01-.788-.789V15.644a.79.79 0 01.788-.788h31.349a.79.79 0 01.788.788v37.562a.79.79 0 01-.788.789z",fill:"#F4F4F4"}),r.createElement("path",{d:"M41.47 13H21.948a1.579 1.579 0 00-1.576 1.577V52.4l.185-.057V14.577c.001-.768.623-1.39 1.391-1.39h19.581L41.471 13zm17.02 0H21.947a1.579 1.579 0 00-1.576 1.577v42.478c0 .87.706 1.576 1.576 1.577H58.49a1.579 1.579 0 001.576-1.577V14.577a1.579 1.579 0 00-1.576-1.576zm1.39 44.055c0 .768-.622 1.39-1.39 1.392H21.947c-.768-.001-1.39-.624-1.39-1.392V14.577c0-.768.622-1.39 1.39-1.39H58.49c.768 0 1.39.622 1.39 1.39v42.478z",fill:"#8D8D8D"}),r.createElement("path",{d:"M48.751 17.082H31.686a.836.836 0 01-.835-.835v-4.081c0-.46.374-.834.835-.835H48.75c.461 0 .834.374.835.835v4.08c0 .462-.374.835-.835.836z",fill:"#C6C6C6"}),r.createElement("circle",{fill:"#C6C6C6",cx:40.218,cy:9.755,r:1.855}),r.createElement("circle",{fill:"#FFF",fillRule:"nonzero",cx:40.218,cy:9.755,r:1.13})))},6021:(e,t,_)=>{"use strict";_.d(t,{Z:()=>m});var r=_(50576),n=_.n(r),o=_(97963),i=_(68877),a=_(50190),s=_(50206),p=_(98261),l=_(64471);const m=({headerTitle:e,displayText:t,launchFormComponent:_,hideFormLauncher:r=!0,launchForm:m})=>{const{t:c}=(0,p.useTranslation)();return n().createElement(i.n9,{light:!0},n().createElement("div",{className:s.default.headerWrapper},n().createElement("h1",{className:s.default.heading},e),_),n().createElement("div",{className:s.default.contentWrapper},n().createElement(a.Z,null),n().createElement("p",{className:s.default.content},n().createElement(p.Trans,{i18nKey:"emptyStateText",values:{displayText:t.toLowerCase()}},"There are no ",t.toLowerCase()," to display","patients"!=t.toLowerCase()?" for this patient":"")),_&&!r&&n().createElement("p",{className:s.default.action},n().createElement(o.Z,{onClick:()=>m()},c("record","Record")," ",t.toLowerCase()))),n().createElement(l.Z,{kind:"ghost",displayText:c("add","Add"),id:"choose-intent",label:"Add +"}))}},9358:(e,t,_)=>{"use strict";_.r(t),_.d(t,{default:()=>a});var r=_(50576),n=_.n(r),o=_(98261),i=_(6021);const a=({patientUuid:e})=>{const{t}=(0,o.useTranslation)(),_=t("appointments","Appointments"),r=t("appointments","Appointments");return n().createElement(n().Fragment,null,n().createElement(i.Z,{displayText:r,headerTitle:_}))}},26775:(e,t,_)=>{(t=_(77705)(!1)).push([e.id,':root{--brand-01: #005d5d;--brand-02: #004144;--brand-03: #007d79}.openmrs-ohri__empty-state__productiveHeading01___27EBO{font-size:.875rem;font-weight:600;line-height:1.29;letter-spacing:.16px}.openmrs-ohri__empty-state__productiveHeading02___3jOu2{font-size:1rem;font-weight:600;line-height:1.375;letter-spacing:0}.openmrs-ohri__empty-state__productiveHeading03___1OZ79{font-size:1.25rem;font-weight:400;line-height:1.4;letter-spacing:0}.openmrs-ohri__empty-state__productiveHeading04___3X9RP{font-size:1.75rem;font-weight:400;line-height:1.29;letter-spacing:0}.openmrs-ohri__empty-state__productiveHeading05___3ruZd{font-size:2rem;font-weight:400;line-height:1.25;letter-spacing:0}.openmrs-ohri__empty-state__productiveHeading06___3YBtF{font-size:2rem;font-weight:300;line-height:1.199;letter-spacing:0}.openmrs-ohri__empty-state__bodyShort01___z5_Rw{font-size:.875rem;font-weight:400;line-height:1.29;letter-spacing:.16px}.openmrs-ohri__empty-state__helperText01___2c6Ld{font-size:.75rem;line-height:1.34;letter-spacing:.32px}.openmrs-ohri__empty-state__bodyShort02___3dIfV{font-size:1rem;font-weight:400;line-height:1.375;letter-spacing:0}.openmrs-ohri__empty-state__bodyLong01___pjdjj{font-size:.875rem;font-weight:400;line-height:1.43;letter-spacing:.16px}.openmrs-ohri__empty-state__bodyLong02___2Q0Ec{font-size:1rem;font-weight:400;line-height:1.5;letter-spacing:0}.openmrs-ohri__empty-state__label01___1I5d4{font-size:.75rem;font-weight:400;line-height:1.34;letter-spacing:.32px}.openmrs-ohri__empty-state__text01___3zSLQ{color:#161616}.openmrs-ohri__empty-state__text02___2WZgm{color:#525252}aside{background-color:#fff !important}div[class*=-esm-login__styles__center]>img{width:140px}.tab-12rem>button{width:12rem !important}.tab-14rem>button{width:14rem !important}.tab-16rem>button{width:16rem !important}.openmrs-ohri__empty-state__action___1Ugz3{margin-bottom:.5rem}.openmrs-ohri__empty-state__content___1RkND{font-size:.875rem;font-weight:600;line-height:1.29;letter-spacing:.16px;color:#525252;margin-top:1rem;margin-bottom:.5rem}.openmrs-ohri__empty-state__heading___19HzI{text-align:left;text-transform:capitalize;margin-bottom:1rem;font-size:1.25rem;font-weight:400;line-height:1.4;letter-spacing:0;color:#525252}.openmrs-ohri__empty-state__heading___19HzI:after{content:"";display:block;width:2rem;padding-top:.188rem;border-bottom:.375rem solid}.openmrs-ohri__empty-state__contentWrapper___1DVFj{text-align:center;margin-top:"0.5rem";margin-bottom:"2rem"}.openmrs-ohri__empty-state__headerWrapper___1mq_s{display:flex;justify-content:space-between}',""]),t.locals={productiveHeading01:"openmrs-ohri__empty-state__productiveHeading01___27EBO",productiveHeading02:"openmrs-ohri__empty-state__productiveHeading02___3jOu2",productiveHeading03:"openmrs-ohri__empty-state__productiveHeading03___1OZ79",productiveHeading04:"openmrs-ohri__empty-state__productiveHeading04___3X9RP",productiveHeading05:"openmrs-ohri__empty-state__productiveHeading05___3ruZd",productiveHeading06:"openmrs-ohri__empty-state__productiveHeading06___3YBtF",bodyShort01:"openmrs-ohri__empty-state__bodyShort01___z5_Rw",helperText01:"openmrs-ohri__empty-state__helperText01___2c6Ld",bodyShort02:"openmrs-ohri__empty-state__bodyShort02___3dIfV",bodyLong01:"openmrs-ohri__empty-state__bodyLong01___pjdjj",bodyLong02:"openmrs-ohri__empty-state__bodyLong02___2Q0Ec",label01:"openmrs-ohri__empty-state__label01___1I5d4",text01:"openmrs-ohri__empty-state__text01___3zSLQ",text02:"openmrs-ohri__empty-state__text02___2WZgm",action:"openmrs-ohri__empty-state__action___1Ugz3",content:"openmrs-ohri__empty-state__content___1RkND",heading:"openmrs-ohri__empty-state__heading___19HzI",contentWrapper:"openmrs-ohri__empty-state__contentWrapper___1DVFj",headerWrapper:"openmrs-ohri__empty-state__headerWrapper___1mq_s"},e.exports=t}}]);
//# sourceMappingURL=6754.js.map