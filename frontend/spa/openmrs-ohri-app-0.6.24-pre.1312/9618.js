(self.webpackChunkopenmrs_ohri_app=self.webpackChunkopenmrs_ohri_app||[]).push([[9618],{99618:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>L});var n=a(50576),r=a.n(n),l=a(22218),i=a(38594),o=a(98261),s=a(75778),u=a(9588);const c=[{key:"encounterDate",header:"Date of Test ordered",getValue:e=>(0,s.KX)(e,"encounterDateTime",!0),link:{handleNavigate:e=>{e.launchFormActions?.viewEncounter()}}},{key:"location",header:"Location",getValue:e=>e.location.name||"None"},{key:"hivLabResult",header:"CD4 Date Result",getValue:e=>(0,s.hF)(e,u.rb)},{key:"hivCD4Count",header:"CD4 Count",getValue:e=>(0,s.hF)(e,u.t9)},{key:"actions",header:"Actions",getValue:()=>{}}],d=({patientUuid:e})=>{const{t}=(0,o.useTranslation)(),a=t("cd4","CD4"),n=t("cd4","CD4");return r().createElement(r().Fragment,null,r().createElement(s.ZP,{patientUuid:e,encounterUuid:u.FD,form:{package:"hiv",name:"lab_results"},columns:c,description:n,headerTitle:a}))};var m=a(39743),p=a.n(m),h=a(3157),b=a.n(h),_=a(53439),v=a.n(_),C=a(79201),D=a.n(C),g=a(71573),E=a.n(g),k=a(35914),y=a.n(k),T=a(52627),V=a.n(T),U={};U.styleTagTransform=y(),U.setAttributes=D(),U.insert=v().bind(null,"head"),U.domAPI=b(),U.insertStyleElement=E(),p()(V(),U);const f=V()&&V().locals?V().locals:void 0;var F=a(6021);const w=({patientUuid:e})=>{const{t}=(0,o.useTranslation)(),a=t("labResults","Viral Load"),n=t("labResults","Viral Load");return r().createElement(r().Fragment,null,r().createElement(F.Z,{displayText:n,headerTitle:a}))},L=({patientUuid:e})=>r().createElement("div",{className:f.tabContainer},r().createElement(l.ZP,{type:"container"},r().createElement(i.Z,{label:"Viral Load"},r().createElement(w,{patientUuid:e})),r().createElement(i.Z,{label:"CD4",style:{padding:0}},r().createElement(d,{patientUuid:e}))))},52627:(e,t,a)=>{(t=a(77705)(!1)).push([e.id,".openmrs-ohri__lab-results-overview__tabContainer___103bD div[role=tabpanel]{padding:0 !important}",""]),t.locals={tabContainer:"openmrs-ohri__lab-results-overview__tabContainer___103bD"},e.exports=t}}]);
//# sourceMappingURL=9618.js.map