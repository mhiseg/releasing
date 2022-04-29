(self.webpackChunkopenmrs_esm_ohri_hts_app=self.webpackChunkopenmrs_esm_ohri_hts_app||[]).push([[205],{9012:(e,t,A)=>{"use strict";A.d(t,{Z:()=>n});const n={name:"POC OHRI HTS Retrospective Form",pages:[{label:"Screening",sections:[{label:"Testing history",isExpanded:"true",questions:[{label:"Ever tested positive for HIV before?",type:"obs",questionOptions:{rendering:"radio",concept:"1492AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",answers:[{label:"yes",concept:"18316c68-b5f9-4986-b76d-9975cd0ebe31"},{label:"no",concept:"0d8a135b-0acf-47f3-a51c-77aefe7787db"}]},id:"everTestedPositive"},{label:"Last HIV test result",type:"obs",questionOptions:{rendering:"radio",concept:"159427AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",conceptMappings:[{type:"PIH",value:"2169"},{type:"SNOMED-MVP",value:"1594271000105002"},{type:"org.openmrs.module.mdrtb",value:"RESULT OF HIV TEST"},{type:"SNOMED-CT",value:"31676001"}],answers:[{concept:"664AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",label:"Negative",conceptMappings:[{type:"AMPATH",value:"664"},{type:"SNOMED-CT",value:"260385009"},{type:"PIH",value:"664"},{type:"org.openmrs.module.mdrtb",value:"NEGATIVE"},{type:"AMPATH",value:"665"}]},{concept:"1138AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",label:"Indeterminate",conceptMappings:[{type:"AMPATH",value:"1138"},{type:"SNOMED-CT",value:"82334004"}]}]},id:"lastHIVTestResult"},{label:"Months since last HIV test",type:"obs",questionOptions:{rendering:"number",concept:"07a6f86e-388b-416e-b1ed-4b4e543a6406",max:"12",min:"0",showDate:"false"},id:"monthSinceLastHIVTest"},{label:"Date of last HIV test",type:"obs",questionOptions:{rendering:"date",concept:"164400AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",weeksList:""},id:"lastHIVTestDate"},{label:"Population type",type:"obs",questionOptions:{rendering:"select",concept:"d3d4ae96-8c8a-43db-a9dc-dac951f5dcb3",answers:[{concept:"63ea75cb-205f-4e7b-9ede-5f9b8a4dda9f",label:"Migrant Workers",conceptMappings:[]},{concept:"b282bb08-62a7-42c2-9bea-8751c267d13e",label:"Uniformed Forces",conceptMappings:[]},{concept:"22b202fc-67de-4af9-8c88-46e22559d4b2",label:"Transgender Persons",conceptMappings:[]},{concept:"678f3144-302f-493e-ba22-7ec60a84732a",label:"Adolescent Girls & Young Women",conceptMappings:[]},{concept:"def00c73-f6d5-42fb-bcec-0b192b5be22d",label:"Fisher Folk",conceptMappings:[]},{concept:"8da9bf92-22f6-40be-b468-1ad08de7d457",label:"Prisoners",conceptMappings:[]},{concept:"dc1058ea-4edd-4780-aeaa-a474f7f3a437",label:"Refugees",conceptMappings:[]},{concept:"160578AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",label:"Male who has sex with men",conceptMappings:[{type:"SNOMED-CT",value:"266974005"}]},{concept:"160579AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",label:"Sex worker",conceptMappings:[{type:"SNOMED-CT",value:"53713009"}]},{concept:"162198AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",label:"Long distance truck driver",conceptMappings:[]}]},id:"patientPopulationType"}]},{label:"Partner information",isExpanded:"true",questions:[{label:"Partner HIV status as reported",type:"obs",questionOptions:{rendering:"radio",concept:"1436AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",conceptMappings:[{type:"SNOMED-MVP",value:"14361000105003"},{type:"AMPATH",value:"2313"},{type:"SNOMED-CT",value:"278977008"},{type:"PIH",value:"3082"}],answers:[{concept:"1138AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",label:"Indeterminate",conceptMappings:[{type:"AMPATH",value:"1138"},{type:"SNOMED-CT",value:"82334004"}]},{concept:"664AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",label:"Negative",conceptMappings:[{type:"AMPATH",value:"664"},{type:"SNOMED-CT",value:"260385009"},{type:"PIH",value:"664"},{type:"org.openmrs.module.mdrtb",value:"NEGATIVE"},{type:"AMPATH",value:"665"}]}]},id:"partnerHIVStatus"},{label:"Partner key population status",type:"obs",questionOptions:{rendering:"checkbox",concept:"d3d4ae96-8c8a-43db-a9dc-dac951f5dcb3",answers:[{concept:"63ea75cb-205f-4e7b-9ede-5f9b8a4dda9f",label:"Migrant Workers",conceptMappings:[]},{concept:"b282bb08-62a7-42c2-9bea-8751c267d13e",label:"Uniformed Forces",conceptMappings:[]},{concept:"22b202fc-67de-4af9-8c88-46e22559d4b2",label:"Transgender Persons",conceptMappings:[]},{concept:"678f3144-302f-493e-ba22-7ec60a84732a",label:"Adolescent Girls & Young Women",conceptMappings:[]},{concept:"def00c73-f6d5-42fb-bcec-0b192b5be22d",label:"Fisher Folk",conceptMappings:[]},{concept:"8da9bf92-22f6-40be-b468-1ad08de7d457",label:"Prisoners",conceptMappings:[]},{concept:"dc1058ea-4edd-4780-aeaa-a474f7f3a437",label:"Refugees",conceptMappings:[]},{concept:"160578AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",label:"Male who has sex with men",conceptMappings:[{type:"SNOMED-CT",value:"266974005"}]},{concept:"160579AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",label:"Sex worker",conceptMappings:[{type:"SNOMED-CT",value:"53713009"}]},{concept:"162198AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",label:"Long distance truck driver",conceptMappings:[]}]},id:"partnerKeyPopulationStatus"}]}]},{label:"Approach",sections:[{label:"Approach",isExpanded:"true",questions:[{label:"Where was HIV test conducted?",type:"obs",questionOptions:{rendering:"select",concept:"13abe5c9-6de2-4970-b348-36d352ee8eeb",answers:[{concept:"42dd1e18-00cb-471c-911c-cb254d5b01a5",label:"Community Level testing",conceptMappings:[]},{concept:"5995ebd5-11ae-47ca-ac12-bcb8c0117aec",label:"Facility Level Testing",conceptMappings:[]}]},id:"testingLocation"},{label:"How was the test initiated?",type:"obs",questionOptions:{rendering:"radio",concept:"9641ead9-8821-4898-b633-a8e96c0933cf",answers:[{concept:"e6924b2c-8f27-44d8-8228-9c5d2e8eae84",label:"Client or Voluntary-initiated (VCT/CICT)",conceptMappings:[]},{concept:"164163AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",label:"Provider-initiated testing and counseling (PITC)",conceptMappings:[{type:"SNOMED-NP",value:"270430005"}]}]},id:"his-approach"},{label:"Reason for testing",type:"obs",questionOptions:{rendering:"select",concept:"ce3816e7-082d-496b-890b-a2b169922c22",answers:[{concept:"7398c91a-8db8-480d-8130-1a92cc208ded",label:"Inconclusive HIV Result",conceptMappings:[]},{concept:"a6ad599d-2bc4-47b7-81fe-a38e88867c1d",label:"Self Initiative",conceptMappings:[]},{concept:"0e65e5fd-a1d8-4730-a991-75a1d703cba6",label:"HIV Self Test Positive",conceptMappings:[]},{concept:"6e768c50-a239-45ff-9920-2c6a9352320e",label:"Index Client Testing",conceptMappings:[]},{concept:"cb099534-b609-4561-9d4c-dd2fc74cedaf",label:"Assisted Partner Notification (APN)",conceptMappings:[]}]},id:"reasonForTesting"},{label:"Community delivery point",type:"obs",questionOptions:{rendering:"select",concept:"159936AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",conceptMappings:[{type:"SNOMED-CT",value:"43741000"},{type:"AMPATH",value:"2051"}],answers:[{concept:"5622AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",label:"Other",conceptMappings:[{type:"PIH-Malawi",value:"6408"},{type:"org.openmrs.module.mdrtb",value:"OTHER"},{type:"SNOMED-MVP",value:"56221000105001"},{type:"PIH",value:"5622"},{type:"AMPATH",value:"5622"},{type:"SNOMED-CT",value:"74964007"}]},{concept:"159939AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",label:"mobile voluntary counseling and testing program",conceptMappings:[{type:"AMPATH",value:"2048"}]},{concept:"159938AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",label:"Home based HIV testing program",conceptMappings:[{type:"AMPATH",value:"2049"}]}]},id:"serviceDeliveryPoint",hide:{hideWhenExpression:"isEmpty(testingLocation) || testingLocation == '5995ebd5-11ae-47ca-ac12-bcb8c0117aec'"}},{label:"Facility service delivery point",type:"obs",questionOptions:{rendering:"select",concept:"159936AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",conceptMappings:[{type:"SNOMED-CT",value:"43741000"},{type:"AMPATH",value:"2051"}],answers:[{concept:"5622AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",label:"Other",conceptMappings:[{type:"PIH-Malawi",value:"6408"},{type:"org.openmrs.module.mdrtb",value:"OTHER"},{type:"SNOMED-MVP",value:"56221000105001"},{type:"PIH",value:"5622"},{type:"AMPATH",value:"5622"},{type:"SNOMED-CT",value:"74964007"}]},{concept:"160542AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",label:"Outpatient department",conceptMappings:[{type:"PIH",value:"1651"},{type:"AMPATH",value:"1965"},{type:"SNOMED-CT",value:"33022008"}]},{concept:"159940AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",label:"Voluntary counseling and testing center",conceptMappings:[{type:"AMPATH",value:"2047"}]},{concept:"163266AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",label:"Current health facility",conceptMappings:[{type:"SNOMED-CT",value:"257622000"}]},{concept:"160541AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",label:"Tuberculosis treatment program",conceptMappings:[{type:"SNOMED-CT",value:"401173007"}]},{concept:"5485AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",label:"Inpatient care or hospitalization",conceptMappings:[{type:"AMPATH",value:"5485"},{type:"PIH",value:"1429"},{type:"SNOMED-CT",value:"394656005"}]},{concept:"159937AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",label:"Maternal and child health program",conceptMappings:[{type:"AMPATH",value:"2050"}]},{concept:"1459AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",label:"Diagnostic testing and counseling for HIV",conceptMappings:[{type:"AMPATH",value:"2177"}]}]},hide:{hideWhenExpression:"isEmpty(testingLocation) || testingLocation != '5995ebd5-11ae-47ca-ac12-bcb8c0117aec'"},id:"facilityServiceDeliveryPoint"}]}]},{label:"Pre-test counseling",sections:[{label:"Pre-test counseling",isExpanded:"true",questions:[{label:"Type of counseling session",type:"obs",questionOptions:{rendering:"select",concept:"0473ec07-2f34-4447-9c58-e35a1c491b6f",answers:[{concept:"02586245-99c3-4d47-ac34-7121156afeab",label:"Group Counselling",conceptMappings:[]},{concept:"09472f39-6030-4f71-a8f2-30b2fdc734ed",label:"Couple Counselling",conceptMappings:[]},{concept:"0c78532a-f2e8-4793-874e-90b0c9485cef",label:"Individual Counselling",conceptMappings:[]}]},id:"counselingSessionType"},{label:"Patient consent",type:"obs",questionOptions:{rendering:"radio",concept:"1710AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",conceptMappings:[{type:"SNOMED-CT",value:"182771004"}],answers:[{label:"yes",concept:"18316c68-b5f9-4986-b76d-9975cd0ebe31"},{label:"no",concept:"0d8a135b-0acf-47f3-a51c-77aefe7787db"}]},id:"preTestCounselingConsent"}]}]},{label:"TB / STI screening",sections:[{label:"TB / STI Screening",isExpanded:"true",questions:[{label:"Is the client experiencing the following TB symptoms?",type:"obs",questionOptions:{rendering:"checkbox",concept:"159800AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",conceptMappings:[{type:"AMPATH",value:"6174"}],answers:[{concept:"1494AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",label:"Fever lasting more than three weeks",conceptMappings:[{type:"AMPATH",value:"6173"},{type:"SNOMED-CT",value:"386661006"},{type:"ICD-10-WHO",value:"R50.9"}]},{concept:"159799AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",label:"cough lasting more than 2 weeks",conceptMappings:[{type:"PIH",value:"2573"},{type:"SNOMED-CT",value:"49727002"},{type:"SNOMED-MVP",value:"1597991000105004"},{type:"AMPATH",value:"6171"}]},{concept:"138905AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",label:"Hemoptysis",conceptMappings:[{type:"3BT",value:"10040493"},{type:"ICD-10-WHO",value:"R04.2"},{type:"PIH",value:"970"},{type:"ICPC2",value:"R24"},{type:"IMO-ProblemIT",value:"27441"},{type:"AMPATH",value:"6172"},{type:"SNOMED-CT",value:"66857006"},{type:"AMPATH",value:"967"}]},{concept:"133027AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",label:"Night sweats",conceptMappings:[{type:"ICPC2",value:"A09"},{type:"ICD-10-WHO",value:"R61.1"},{type:"AMPATH",value:"6029"},{type:"SNOMED-CT",value:"42984000"},{type:"PIH",value:"6029"},{type:"IMO-ProblemIT",value:"50760"},{type:"3BT",value:"10063085"}]}]},id:"tbSymptoms"},{label:"Is the client experiencing the following STI symptoms?",type:"obs",questionOptions:{rendering:"checkbox",concept:"c4f81292-61a3-4561-a4ae-78be7d16d928",answers:[{concept:"d8e46cc0-4d08-45d9-a46d-bd083db63057",label:"Complaints of scrotal swelling and pain (Male)",conceptMappings:[]},{concept:"60817acb-90f1-4d46-be87-2c47e150770b",label:"Complaints of urethral discharge or burning when urinating (Male)",conceptMappings:[]},{concept:"06be8996-ef55-438b-bbb9-5bebeb18e779",label:"Complaints of lower abdominal pains with or without  vaginal discharge (Female)",conceptMappings:[]},{concept:"9a24bedc-d42c-422e-9f5d-371b59af0660",label:"Complaints of vaginal discharge or burning when urinating (Female)",conceptMappings:[]},{concept:"faf06026-fce9-4d2c-9ef2-24fb45343804",label:"Complaints of genital sores or swollen inguinal lymph nodes with or without pains",conceptMappings:[]}]},id:"stiSymptoms"}]}]},{label:"HIV testing",sections:[{label:"HIV testing",isExpanded:"true",questions:[{label:"Date test was performed",type:"obs",questionOptions:{rendering:"date",concept:"164400AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",weeksList:""},id:"dateTestPerformed"}]}]},{label:"Recency testing",sections:[{label:"Recency testing",isExpanded:"true",questions:[{label:"Patient consent",type:"obs",questionOptions:{rendering:"radio",concept:"1710AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",conceptMappings:[{type:"SNOMED-CT",value:"182771004"}],answers:[{label:"yes",concept:"18316c68-b5f9-4986-b76d-9975cd0ebe31"},{label:"no",concept:"0d8a135b-0acf-47f3-a51c-77aefe7787db"}]},id:"recencyTestingConsent"},{label:"Recency test result",type:"obs",questionOptions:{rendering:"radio",concept:"165092AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",conceptMappings:[{type:"SNOMED-CT",value:"271918004"}],answers:[{concept:"165090AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",label:"Recent",conceptMappings:[{type:"SNOMED-CT",value:"6493001"}]},{concept:"165091AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",label:"Long duration",conceptMappings:[{type:"SNOMED-CT",value:"260384008"}]}]},id:"recencyTestResult"}]}]},{label:"Linkage to care",sections:[]},{label:"Referrals",sections:[]}],processor:"EncounterFormProcessor",uuid:"xxxx",referencedForms:[],encounterType:"79c1f50f-f77d-42e2-ad2a-d29304dde2fe"}},9205:(e,t,A)=>{"use strict";A.r(t),A.d(t,{default:()=>z,htsEncounterRepresentation:()=>D,htsFormSlot:()=>I});var n=A(9297),o=A(8120),s=A.n(o),i=A(734),a=A(7114),r=A(7789),l=A(5196),p=A(5566),c=A(8529),_=A(8722),d=A(9758),h=A(5794),m=A(7450),g=A(7188),u=A(2318),b=A.n(u);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var A=arguments[t];for(var n in A)Object.prototype.hasOwnProperty.call(A,n)&&(e[n]=A[n])}return e}).apply(this,arguments)}const f=({tableHeaders:e,tableRows:t})=>n.default.createElement(p.Z,null,n.default.createElement(l.ZP,{rows:t,headers:e,isSortable:!0,size:"short"},(({rows:e,headers:t,getHeaderProps:A,getTableProps:o})=>n.default.createElement(c.Z,o(),n.default.createElement(_.Z,null,n.default.createElement(d.Z,null,t.map((e=>{var t,o;return n.default.createElement(h.Z,v({className:`${b().productiveHeading01} ${b().text02}`},A({header:e,isSortable:e.isSortable})),null!==(t=null===(o=e.header)||void 0===o?void 0:o.content)&&void 0!==t?t:e.header)})))),n.default.createElement(m.Z,null,e.map((e=>n.default.createElement(d.Z,{key:e.id},e.cells.map((e=>{var t,A;return n.default.createElement(g.Z,{key:e.id},null!==(t=null===(A=e.value)||void 0===A?void 0:A.content)&&void 0!==t?t:e.value)}))))))))));var y=A(6512),w=A(5393),M=A(8349),H=A(3579),T=A(5122);const E=({width:e="61",height:t="59"})=>n.createElement("svg",{width:e,height:t,viewBox:"0 0 61 59"},n.createElement("title",null,"Empty data illustration"),n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("path",{d:"M38.133 13.186H21.947c-.768.001-1.39.623-1.39 1.391V50.55l-.186.057-3.97 1.216a.743.743 0 01-.927-.493L3.664 12.751a.742.742 0 01.492-.926l6.118-1.874 17.738-5.43 6.119-1.873a.741.741 0 01.926.492L38.076 13l.057.186z",fill:"#F4F4F4"}),n.createElement("path",{d:"M41.664 13L38.026 1.117A1.576 1.576 0 0036.056.07l-8.601 2.633-17.737 5.43-8.603 2.634a1.578 1.578 0 00-1.046 1.97l12.436 40.616a1.58 1.58 0 001.969 1.046l5.897-1.805.185-.057v-.194l-.185.057-5.952 1.822a1.393 1.393 0 01-1.737-.923L.247 12.682a1.39 1.39 0 01.923-1.738L9.772 8.31 27.51 2.881 36.112.247a1.393 1.393 0 011.737.923L41.47 13l.057.186h.193l-.057-.185z",fill:"#8D8D8D"}),n.createElement("path",{d:"M11.378 11.855a.836.836 0 01-.798-.59L9.385 7.361a.835.835 0 01.554-1.042l16.318-4.996a.836.836 0 011.042.554l1.195 3.902a.836.836 0 01-.554 1.043l-16.318 4.995a.831.831 0 01-.244.037z",fill:"#C6C6C6"}),n.createElement("circle",{fill:"#C6C6C6",cx:17.636,cy:2.314,r:1.855}),n.createElement("circle",{fill:"#FFF",fillRule:"nonzero",cx:17.636,cy:2.314,r:1.175}),n.createElement("path",{d:"M55.893 53.995H24.544a.79.79 0 01-.788-.789V15.644a.79.79 0 01.788-.788h31.349a.79.79 0 01.788.788v37.562a.79.79 0 01-.788.789z",fill:"#F4F4F4"}),n.createElement("path",{d:"M41.47 13H21.948a1.579 1.579 0 00-1.576 1.577V52.4l.185-.057V14.577c.001-.768.623-1.39 1.391-1.39h19.581L41.471 13zm17.02 0H21.947a1.579 1.579 0 00-1.576 1.577v42.478c0 .87.706 1.576 1.576 1.577H58.49a1.579 1.579 0 001.576-1.577V14.577a1.579 1.579 0 00-1.576-1.576zm1.39 44.055c0 .768-.622 1.39-1.39 1.392H21.947c-.768-.001-1.39-.624-1.39-1.392V14.577c0-.768.622-1.39 1.39-1.39H58.49c.768 0 1.39.622 1.39 1.39v42.478z",fill:"#8D8D8D"}),n.createElement("path",{d:"M48.751 17.082H31.686a.836.836 0 01-.835-.835v-4.081c0-.46.374-.834.835-.835H48.75c.461 0 .834.374.835.835v4.08c0 .462-.374.835-.835.836z",fill:"#C6C6C6"}),n.createElement("circle",{fill:"#C6C6C6",cx:40.218,cy:9.755,r:1.855}),n.createElement("circle",{fill:"#FFF",fillRule:"nonzero",cx:40.218,cy:9.755,r:1.13})));var x=A(9775),S=A.n(x);const C=e=>{const{t}=(0,r.useTranslation)();return n.default.createElement(T.n9,{light:!0,className:S().tile},n.default.createElement("h1",{className:S().heading},e.headerTitle),n.default.createElement(E,null),n.default.createElement("p",{className:S().content},n.default.createElement(r.Trans,{i18nKey:"emptyStateText",values:{displayText:e.displayText.toLowerCase()}},"There are no ",e.displayText.toLowerCase()," to display for this patient")),n.default.createElement("p",{className:S().action},n.default.createElement(H.Z,{onClick:()=>e.launchForm()},t("record","Record")," ",e.displayText.toLowerCase())))};var P=A(6720),O=A(9012);const I="hts-encounter-form-slot",D="custom:(uuid,encounterDatetime,location:(uuid,name),encounterProviders:(uuid,provider:(uuid,name)),obs:(uuid,obsDatetime,concept:(uuid,name:(uuid,name)),value:(uuid,name:(uuid,name))))",z=({patientUuid:e})=>{const{t}=(0,r.useTranslation)(),[A,o]=(0,n.useState)([]),[l,p]=(0,n.useState)(!0),[c,_]=(0,n.useState)(0),d=()=>_(c+1),h=()=>{(0,P.S)("ohri-forms-view-ext",{title:"HTS Entry form",state:{updateParent:d,formJson:O.Z}})};n.default.useEffect((()=>{var A,s;A=`encounterType=30b849bd-c4f4-4254-a033-fe9cf01001d8&patient=${e}`,s=D,(0,y.openmrsFetch)(`/ws/rest/v1/encounter?${A}&v=${s}`).then((({data:e})=>{let A=[];e.results.map((e=>{var o,s;const a=e.obs.find((e=>"f4470401-08e2-40e5-b52b-c9d1254a4d66"===e.concept.uuid)),r=e.encounterProviders.map((e=>e.provider.name)).join(" | "),l=n.default.createElement(i.Z,{kind:"ghost",iconDescription:"Edit",onClick:t=>{var A;t.preventDefault(),A=e.uuid,(0,P.S)("ohri-forms-view-ext",{title:"HTS Entry form",encounterUuid:A,state:{updateParent:d,formJson:O.Z}})}},t("editHTSEncounter","Edit"));A.push({id:e.uuid,date:(0,M.default)(e.encounterDatetime).format("DD-MMM-YYYY"),location:e.location.name,result:(null==a||null===(o=a.value)||void 0===o||null===(s=o.name)||void 0===s?void 0:s.name)||"None",provider:r,action:l})})),o(A),p(!1)}))}),[c]);const m="HTS Summary";return n.default.createElement(n.default.Fragment,null,l?n.default.createElement(w.Z,{rowCount:5}):A.length>0?n.default.createElement("div",{className:s().widgetContainer},n.default.createElement("div",{className:s().widgetHeaderContainer},n.default.createElement("h4",{className:`${s().productiveHeading03} ${s().text02}`},m),n.default.createElement("div",{className:s().toggleButtons},n.default.createElement(i.Z,{kind:"ghost",renderIcon:a.aXP,iconDescription:"New",onClick:e=>{e.preventDefault(),h()}},t("add","New")))),n.default.createElement(f,{tableHeaders:[{key:"date",header:"Date",isSortable:!0},{key:"location",header:"Location"},{key:"result",header:"Result"},{key:"provider",header:"HTS Provider"},{key:"action",header:"Action"}],tableRows:A})):n.default.createElement(C,{displayText:t("htsEncounters","hts encounters"),headerTitle:m,launchForm:h}),n.default.createElement("div",{className:s().widgetContainer,style:{marginTop:"2.5rem"}},n.default.createElement("div",{className:s().widgetHeaderContainer},n.default.createElement("h4",{className:`${s().productiveHeading03} ${s().text02}`},"Client Linkage"),n.default.createElement("div",{className:s().toggleButtons},n.default.createElement(i.Z,{kind:"ghost",renderIcon:a.aXP,iconDescription:"New",onClick:e=>{e.preventDefault()}},t("add","New"))))))}},6720:(e,t,A)=>{"use strict";A.d(t,{S:()=>i,w:()=>a});var n=A(6512),o=A(3808),s=A(6603);const i=(e,t)=>{(0,n.detachAll)(s.OHRIWorkspaceSlot),(0,n.registerExtension)("ohri-workspace",{moduleName:"@openmrs/esm-ohri-app",load:(0,n.getAsyncLifecycle)((()=>Promise.resolve().then(A.bind(A,6603))),{featureName:"ohri-workspace",moduleName:"@openmrs/esm-ohri-app"}),meta:{title:t.title}}),a.next(t),(0,n.attach)("patient-chart-workspace-slot","ohri-workspace"),(0,n.attach)(s.OHRIWorkspaceSlot,e)},a=new o.X(null)},6603:(e,t,A)=>{"use strict";A.r(t),A.d(t,{default:()=>i,OHRIWorkspaceSlot:()=>a});var n=A(9297),o=A(6512),s=A(6720);const i=({closeWorkspace:e,patientUuid:t})=>{const[A,i]=(0,n.useState)(null);return(0,n.useEffect)((()=>{const e=s.w.subscribe((e=>i(e)));return()=>e.unsubscribe()}),[]),n.default.createElement("div",null,A&&n.default.createElement(o.ExtensionSlot,{extensionSlotName:a,state:{encounterUuid:A.encounterUuid,patient:t,closeWorkspace:e,formJson:A.state.formJson,state:A.state}}))},a="ohri-workspace-slot"},1170:(e,t,A)=>{(t=A(3645)(!1)).push([e.id,".openmrs-esm-ohri-hts__o-table__productiveHeading01___1mAYv{font-size:.875rem;font-weight:600;line-height:1.29;letter-spacing:.16px}.openmrs-esm-ohri-hts__o-table__productiveHeading02___1Io2O{font-size:1rem;font-weight:600;line-height:1.375;letter-spacing:0}.openmrs-esm-ohri-hts__o-table__productiveHeading03___2-BPn{font-size:1.25rem;font-weight:400;line-height:1.4;letter-spacing:0}.openmrs-esm-ohri-hts__o-table__productiveHeading04___1MUeA{font-size:1.75rem;font-weight:400;line-height:1.29;letter-spacing:0}.openmrs-esm-ohri-hts__o-table__productiveHeading05___1nlx9{font-size:2rem;font-weight:400;line-height:1.25;letter-spacing:0}.openmrs-esm-ohri-hts__o-table__productiveHeading06___3nQiB{font-size:2rem;font-weight:300;line-height:1.199;letter-spacing:0}.openmrs-esm-ohri-hts__o-table__bodyShort01___1c21z{font-size:.875rem;font-weight:400;line-height:1.29;letter-spacing:.16px}.openmrs-esm-ohri-hts__o-table__helperText01___SFlQF{font-size:.75rem;line-height:1.34;letter-spacing:.32px}.openmrs-esm-ohri-hts__o-table__bodyShort02___2pQF-{font-size:1rem;font-weight:400;line-height:1.375;letter-spacing:0}.openmrs-esm-ohri-hts__o-table__bodyLong01___3cm-X{font-size:.875rem;font-weight:400;line-height:1.43;letter-spacing:.16px}.openmrs-esm-ohri-hts__o-table__bodyLong02___3CyIj{font-size:1rem;font-weight:400;line-height:1.5;letter-spacing:0}.openmrs-esm-ohri-hts__o-table__label01___1Iopw{font-size:.75rem;font-weight:400;line-height:1.34;letter-spacing:.32px}.openmrs-esm-ohri-hts__o-table__text01___3UDci{color:#161616}.openmrs-esm-ohri-hts__o-table__text02___1XRiY{color:#525252}",""]),t.locals={productiveHeading01:"openmrs-esm-ohri-hts__o-table__productiveHeading01___1mAYv",productiveHeading02:"openmrs-esm-ohri-hts__o-table__productiveHeading02___1Io2O",productiveHeading03:"openmrs-esm-ohri-hts__o-table__productiveHeading03___2-BPn",productiveHeading04:"openmrs-esm-ohri-hts__o-table__productiveHeading04___1MUeA",productiveHeading05:"openmrs-esm-ohri-hts__o-table__productiveHeading05___1nlx9",productiveHeading06:"openmrs-esm-ohri-hts__o-table__productiveHeading06___3nQiB",bodyShort01:"openmrs-esm-ohri-hts__o-table__bodyShort01___1c21z",helperText01:"openmrs-esm-ohri-hts__o-table__helperText01___SFlQF",bodyShort02:"openmrs-esm-ohri-hts__o-table__bodyShort02___2pQF-",bodyLong01:"openmrs-esm-ohri-hts__o-table__bodyLong01___3cm-X",bodyLong02:"openmrs-esm-ohri-hts__o-table__bodyLong02___3CyIj",label01:"openmrs-esm-ohri-hts__o-table__label01___1Iopw",text01:"openmrs-esm-ohri-hts__o-table__text01___3UDci",text02:"openmrs-esm-ohri-hts__o-table__text02___1XRiY"},e.exports=t},6553:(e,t,A)=>{(t=A(3645)(!1)).push([e.id,'.openmrs-esm-ohri-hts__empty-state__productiveHeading01___27EBO{font-size:.875rem;font-weight:600;line-height:1.29;letter-spacing:.16px}.openmrs-esm-ohri-hts__empty-state__productiveHeading02___3jOu2{font-size:1rem;font-weight:600;line-height:1.375;letter-spacing:0}.openmrs-esm-ohri-hts__empty-state__productiveHeading03___1OZ79{font-size:1.25rem;font-weight:400;line-height:1.4;letter-spacing:0}.openmrs-esm-ohri-hts__empty-state__productiveHeading04___3X9RP{font-size:1.75rem;font-weight:400;line-height:1.29;letter-spacing:0}.openmrs-esm-ohri-hts__empty-state__productiveHeading05___3ruZd{font-size:2rem;font-weight:400;line-height:1.25;letter-spacing:0}.openmrs-esm-ohri-hts__empty-state__productiveHeading06___3YBtF{font-size:2rem;font-weight:300;line-height:1.199;letter-spacing:0}.openmrs-esm-ohri-hts__empty-state__bodyShort01___z5_Rw{font-size:.875rem;font-weight:400;line-height:1.29;letter-spacing:.16px}.openmrs-esm-ohri-hts__empty-state__helperText01___2c6Ld{font-size:.75rem;line-height:1.34;letter-spacing:.32px}.openmrs-esm-ohri-hts__empty-state__bodyShort02___3dIfV{font-size:1rem;font-weight:400;line-height:1.375;letter-spacing:0}.openmrs-esm-ohri-hts__empty-state__bodyLong01___pjdjj{font-size:.875rem;font-weight:400;line-height:1.43;letter-spacing:.16px}.openmrs-esm-ohri-hts__empty-state__bodyLong02___2Q0Ec{font-size:1rem;font-weight:400;line-height:1.5;letter-spacing:0}.openmrs-esm-ohri-hts__empty-state__label01___1I5d4{font-size:.75rem;font-weight:400;line-height:1.34;letter-spacing:.32px}.openmrs-esm-ohri-hts__empty-state__text01___3zSLQ{color:#161616}.openmrs-esm-ohri-hts__empty-state__text02___2WZgm{color:#525252}.openmrs-esm-ohri-hts__empty-state__action___1Ugz3{margin-bottom:.5rem}.openmrs-esm-ohri-hts__empty-state__content___1RkND{font-size:.875rem;font-weight:600;line-height:1.29;letter-spacing:.16px;color:#525252;margin-top:1rem;margin-bottom:.5rem}.openmrs-esm-ohri-hts__empty-state__heading___19HzI{text-align:left;text-transform:capitalize;margin-bottom:1rem;font-size:1.25rem;font-weight:400;line-height:1.4;letter-spacing:0;color:#525252}.openmrs-esm-ohri-hts__empty-state__heading___19HzI:after{content:"";display:block;width:2rem;padding-top:.188rem;border-bottom:.375rem solid #007d79}.openmrs-esm-ohri-hts__empty-state__tile___2eOPZ{text-align:center}',""]),t.locals={productiveHeading01:"openmrs-esm-ohri-hts__empty-state__productiveHeading01___27EBO",productiveHeading02:"openmrs-esm-ohri-hts__empty-state__productiveHeading02___3jOu2",productiveHeading03:"openmrs-esm-ohri-hts__empty-state__productiveHeading03___1OZ79",productiveHeading04:"openmrs-esm-ohri-hts__empty-state__productiveHeading04___3X9RP",productiveHeading05:"openmrs-esm-ohri-hts__empty-state__productiveHeading05___3ruZd",productiveHeading06:"openmrs-esm-ohri-hts__empty-state__productiveHeading06___3YBtF",bodyShort01:"openmrs-esm-ohri-hts__empty-state__bodyShort01___z5_Rw",helperText01:"openmrs-esm-ohri-hts__empty-state__helperText01___2c6Ld",bodyShort02:"openmrs-esm-ohri-hts__empty-state__bodyShort02___3dIfV",bodyLong01:"openmrs-esm-ohri-hts__empty-state__bodyLong01___pjdjj",bodyLong02:"openmrs-esm-ohri-hts__empty-state__bodyLong02___2Q0Ec",label01:"openmrs-esm-ohri-hts__empty-state__label01___1I5d4",text01:"openmrs-esm-ohri-hts__empty-state__text01___3zSLQ",text02:"openmrs-esm-ohri-hts__empty-state__text02___2WZgm",action:"openmrs-esm-ohri-hts__empty-state__action___1Ugz3",content:"openmrs-esm-ohri-hts__empty-state__content___1RkND",heading:"openmrs-esm-ohri-hts__empty-state__heading___19HzI",tile:"openmrs-esm-ohri-hts__empty-state__tile___2eOPZ"},e.exports=t},4383:(e,t,A)=>{(t=A(3645)(!1)).push([e.id,'.openmrs-esm-ohri-hts__hts-overview-list__productiveHeading01___1b-MH{font-size:.875rem;font-weight:600;line-height:1.29;letter-spacing:.16px}.openmrs-esm-ohri-hts__hts-overview-list__productiveHeading02___35ZDx{font-size:1rem;font-weight:600;line-height:1.375;letter-spacing:0}.openmrs-esm-ohri-hts__hts-overview-list__productiveHeading03___3_pVS{font-size:1.25rem;font-weight:400;line-height:1.4;letter-spacing:0}.openmrs-esm-ohri-hts__hts-overview-list__productiveHeading04____6CeZ{font-size:1.75rem;font-weight:400;line-height:1.29;letter-spacing:0}.openmrs-esm-ohri-hts__hts-overview-list__productiveHeading05___xxpUs{font-size:2rem;font-weight:400;line-height:1.25;letter-spacing:0}.openmrs-esm-ohri-hts__hts-overview-list__productiveHeading06___3xRWR{font-size:2rem;font-weight:300;line-height:1.199;letter-spacing:0}.openmrs-esm-ohri-hts__hts-overview-list__bodyShort01___2iRMc{font-size:.875rem;font-weight:400;line-height:1.29;letter-spacing:.16px}.openmrs-esm-ohri-hts__hts-overview-list__helperText01___2i2mf{font-size:.75rem;line-height:1.34;letter-spacing:.32px}.openmrs-esm-ohri-hts__hts-overview-list__bodyShort02___3xTU2{font-size:1rem;font-weight:400;line-height:1.375;letter-spacing:0}.openmrs-esm-ohri-hts__hts-overview-list__bodyLong01___2aea8{font-size:.875rem;font-weight:400;line-height:1.43;letter-spacing:.16px}.openmrs-esm-ohri-hts__hts-overview-list__bodyLong02___3hxu9{font-size:1rem;font-weight:400;line-height:1.5;letter-spacing:0}.openmrs-esm-ohri-hts__hts-overview-list__label01___193__{font-size:.75rem;font-weight:400;line-height:1.34;letter-spacing:.32px}.openmrs-esm-ohri-hts__hts-overview-list__text01___RZzID{color:#161616}.openmrs-esm-ohri-hts__hts-overview-list__text02___39_in{color:#525252}.openmrs-esm-ohri-hts__hts-overview-list__widgetContainer___8Sy18{background-color:#fff}.openmrs-esm-ohri-hts__hts-overview-list__widgetHeaderContainer___2x0zr{display:flex;justify-content:space-between;align-items:center;padding:.75rem 0 .75rem 1rem}.openmrs-esm-ohri-hts__hts-overview-list__widgetHeaderContainer___2x0zr>h4:after{content:"";display:block;width:2rem;padding-top:.188rem;border-bottom:.375rem solid #007d79}.openmrs-esm-ohri-hts__hts-overview-list__toggleButtons___1Q6JZ{width:fit-content;margin:0 .5rem}',""]),t.locals={productiveHeading01:"openmrs-esm-ohri-hts__hts-overview-list__productiveHeading01___1b-MH",productiveHeading02:"openmrs-esm-ohri-hts__hts-overview-list__productiveHeading02___35ZDx",productiveHeading03:"openmrs-esm-ohri-hts__hts-overview-list__productiveHeading03___3_pVS",productiveHeading04:"openmrs-esm-ohri-hts__hts-overview-list__productiveHeading04____6CeZ",productiveHeading05:"openmrs-esm-ohri-hts__hts-overview-list__productiveHeading05___xxpUs",productiveHeading06:"openmrs-esm-ohri-hts__hts-overview-list__productiveHeading06___3xRWR",bodyShort01:"openmrs-esm-ohri-hts__hts-overview-list__bodyShort01___2iRMc",helperText01:"openmrs-esm-ohri-hts__hts-overview-list__helperText01___2i2mf",bodyShort02:"openmrs-esm-ohri-hts__hts-overview-list__bodyShort02___3xTU2",bodyLong01:"openmrs-esm-ohri-hts__hts-overview-list__bodyLong01___2aea8",bodyLong02:"openmrs-esm-ohri-hts__hts-overview-list__bodyLong02___3hxu9",label01:"openmrs-esm-ohri-hts__hts-overview-list__label01___193__",text01:"openmrs-esm-ohri-hts__hts-overview-list__text01___RZzID",text02:"openmrs-esm-ohri-hts__hts-overview-list__text02___39_in",widgetContainer:"openmrs-esm-ohri-hts__hts-overview-list__widgetContainer___8Sy18",widgetHeaderContainer:"openmrs-esm-ohri-hts__hts-overview-list__widgetHeaderContainer___2x0zr",toggleButtons:"openmrs-esm-ohri-hts__hts-overview-list__toggleButtons___1Q6JZ"},e.exports=t},2318:(e,t,A)=>{var n=A(3379),o=A(1170);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.id,o,""]]);n(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},9775:(e,t,A)=>{var n=A(3379),o=A(6553);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.id,o,""]]);n(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},8120:(e,t,A)=>{var n=A(3379),o=A(4383);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.id,o,""]]);n(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}}}]);
//# sourceMappingURL=205.openmrs-esm-ohri-app.js.map