"use strict";(self.webpackChunkopenmrs_ohri_app=self.webpackChunkopenmrs_ohri_app||[]).push([[6729],{56729:(e,n,a)=>{a.r(n),a.d(n,{covidFormSlot:()=>r,default:()=>u});var t=a(50576),o=a.n(t),i=a(98261),c=a(9588),d=a(75778);const r="hts-encounter-form-slot",s=[{key:"vaccinationDate",header:"Date of Vaccination",getValue:e=>(0,d.hF)(e,c.Yn,!0)},{key:"doseAdministered",header:"Dose Administered",getValue:e=>(0,d.hF)(e,c.Lm)},{key:"covidVaccineType",header:"Vaccine",getValue:e=>{const n=(0,d.b5)(e,c.WS);return void 0!==typeof n&&n&&"object"==typeof n.value&&void 0!==n&&"Other non-coded"===(n.value.names?.find((e=>"SHORT"===e.conceptNameType))?.name||n.value.name.name)?(0,d.hF)(e,c.mZ):(0,d.hF)(e,c.WS)}},{key:"actions",header:"Actions",getValue:()=>{}}],u=({patientUuid:e})=>{const{t:n}=(0,i.useTranslation)(),a=n("covidVaccinations","Vaccinations"),t=n("covidVaccinations","Vaccinations");return o().createElement(d.ZP,{patientUuid:e,encounterUuid:c.k0,form:{package:"covid",name:"covid_vaccination"},columns:s,description:t,headerTitle:a,dropdownText:"Add"})}}}]);
//# sourceMappingURL=6729.js.map