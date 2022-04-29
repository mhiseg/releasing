"use strict";(self.webpackChunkopenmrs_ohri_app=self.webpackChunkopenmrs_ohri_app||[]).push([[8432],{58432:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(50576),d=a.n(n),i=a(90421),o=a.n(i),r=a(75778),u=a(9588);const s=[{key:"date",header:"Date of HIV Test",getValue:e=>o()(e.encounterDatetime).format("DD-MMM-YYYY")},{key:"htsFormStrategy",header:"HTS Strategy",getValue:e=>(0,r.hF)(e,u.pS)},{key:"location",header:"Location",getValue:e=>e.location.name},{key:"hivTestResult",header:"HIV Test result",getValue:e=>(0,r.hF)(e,"e16b0068-b6a2-46b7-aba9-e3be00a7b4ab")},{key:"provider",header:"HTS Provider",getValue:e=>e.encounterProviders.map((e=>e.provider.name)).join(" | ")},{key:"actions",header:"Actions",getValue:e=>{const t=(0,r.b5)(e,"f0d85da0-c235-4540-a0d1-63640594f98b");return"WHO"==(t?{"9de587b2-564d-4d86-bf72-e76da924018e":"WHO","43105ef4-afde-4f33-89bd-fb318d3f07a3":"Classic"}[t.value.uuid]:"Classic")?[{form:{package:"hiv",name:"hts_who"},encounterUuid:e.uuid,intent:"*",label:"View",mode:"view"},{form:{package:"hiv",name:"hts_who"},encounterUuid:e.uuid,intent:"*",label:"Edit",mode:"edit"}]:[{form:{package:"hiv",name:"hts"},encounterUuid:e.uuid,intent:"*",label:"View",mode:"view"},{form:{package:"hiv",name:"hts"},encounterUuid:e.uuid,intent:"*",label:"Edit",mode:"edit"}]}}],c=({patientUuid:e})=>{const[t,a]=(0,n.useState)(0),i="HTS Sessions";return d().createElement(r.ZP,{patientUuid:e,encounterUuid:"79c1f50f-f77d-42e2-ad2a-d29304dde2fe",form:{package:"hiv",name:"hts"},forms:[{package:"hiv",name:"hts",fixedIntent:"*",excludedIntents:[]},{package:"hiv",name:"hts_who",fixedIntent:"*",excludedIntents:[]}],columns:s,description:i,headerTitle:i,dropdownText:"Add"})}}}]);
//# sourceMappingURL=8432.js.map