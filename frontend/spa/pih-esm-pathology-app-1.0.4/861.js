(self.webpackChunk_pih_esm_pathology_app=self.webpackChunk_pih_esm_pathology_app||[]).push([[861],{64132:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>G});var o=n(80150),a=n.n(o),r=n(93379),s=n.n(r),l=n(7795),i=n.n(l),c=n(90569),u=n.n(c),d=n(3565),p=n.n(d),m=n(19216),y=n.n(m),g=n(44589),E=n.n(g),f=n(56724),h={};h.styleTagTransform=E(),h.setAttributes=p(),h.insert=u().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=y(),s()(f.Z,h);const b=f.Z&&f.Z.locals?f.Z.locals:void 0;var A=n(91208),v=n(6311),x=n(89707),w=n(78529),C=n(78722),U=n(99758),_=n(19586),S=n(7450),I=n(67188),D=n(8601),B=n(74017),k={};k.styleTagTransform=E(),k.setAttributes=p(),k.insert=u().bind(null,"head"),k.domAPI=i(),k.insertStyleElement=y(),s()(B.Z,k);const O=B.Z&&B.Z.locals?B.Z.locals:void 0;async function F(e){const t=(await(0,A.openmrsFetch)("/ws/rest/v1/session")).data.user.person.uuid,n=(await(0,A.openmrsFetch)(`/ws/rest/v1/person/${t}/attribute`)).data.results.filter((t=>t.attributeType.uuid===e));return n[0]&&n.value.uuid}async function L(e){return(await(0,A.openmrsFetch)(`/ws/rest/v1/concept/${e}?v=full`)).data.answers}var R=n(28251),P=n(21016),T=n(97819);D.Zx.register({family:"GeorgiaBold",src:P}),D.Zx.register({family:"Georgia",src:T});const Z=D.mM.create({page:{flexDirection:"row"},section:{margin:10,padding:20,flexGrow:1},textLabels:{padding:7,fontFamily:"GeorgiaBold",fontSize:16,fontWeight:"bold",paddingBottom:30},sentenceLabels:{paddingTop:7,fontFamily:"GeorgiaBold",fontSize:16,fontWeight:"bold",paddingBottom:3},textAnswers:{margin:10,padding:20,fontFamily:"Georgia",fontSize:14},sentenceAnswers:{marginBottom:10,paddingBottom:20,fontFamily:"Georgia",fontSize:14},logo:{width:61}}),N=e=>a().createElement(D.BB,{title:`Pathology report \n  ${e.encounterInfo.family_name} \n  ${e.encounterInfo.given_name}  \n  ${e.encounterInfo.middle_name} `},a().createElement(D.T3,{size:"A4",style:Z.page},a().createElement(D.G7,{style:Z.section},a().createElement(D.Ee,{style:Z.logo,src:R}),a().createElement(D.xv,{style:{fontSize:8}},"Butaro Hospital"),a().createElement(D.xv,{style:{position:"absolute",top:0,left:300,width:300}},a().createElement(D.xv,{style:Z.textAnswers},"Lab phone number:"),a().createElement(D.xv,null," "," ","0784433618")),a().createElement(D.xv,{style:{position:"absolute",top:15,left:300,width:300}},a().createElement(D.xv,{style:Z.textAnswers},"Accession number:"),a().createElement(D.xv,null," "," ",e.encounterInfo.resultsEncounter.obs.map((t=>t.concept.uuid==e.config.AccessionNumberconceptUUID&&t.value)))),a().createElement(D.xv,{style:{backgroundColor:"#E4E4E4",borderBottom:"1px",textAlign:"center",fontWeight:1500,marginBottom:30,fontFamily:"GeorgiaBold"}},"Pathology Report"),a().createElement(D.xv,{style:{paddingBottom:10}},a().createElement(D.xv,{style:Z.textAnswers},"Patient Name:"),a().createElement(D.xv,{style:Z.textAnswers}," "," ",e.encounterInfo.family_name," "," ",e.encounterInfo.given_name," "," ",e.encounterInfo.middle_name)),a().createElement(D.xv,{style:{paddingBottom:10,position:"absolute",top:140,left:335}},a().createElement(D.xv,{style:Z.textAnswers},"Surgery Date:"),a().createElement(D.xv,{style:Z.textAnswers}," "," ",e.encounterInfo.resultsEncounter.obs.map((t=>t.concept.uuid==e.config.DateBiopsySpecimenTakenconceptUUID&&new Date(t.value).toLocaleString(["en-GB","en-US","en","fr-RW"],{day:"numeric",month:"numeric",year:"numeric"}))))),a().createElement(D.xv,{style:{paddingBottom:10}},a().createElement(D.xv,{style:Z.textAnswers},"Patient Birthday:"),a().createElement(D.xv,{style:Z.textAnswers}," "," ",new Date(e.encounterInfo.personBirthdate).toLocaleString(["en-GB","en-US","en","fr-RW"],{day:"numeric",month:"numeric",year:"numeric"}))),a().createElement(D.xv,{style:{paddingBottom:10,position:"absolute",top:168,left:335,width:200}},a().createElement(D.xv,{style:Z.textAnswers},"Specimen Reception Date:"),a().createElement(D.xv,{style:Z.textAnswers}," "," ",e.encounterInfo.resultsEncounter.obs.map((t=>t.concept.uuid==e.config.SpecimenSubmissionDateconceptUUID&&new Date(t.value).toLocaleString(["en-GB","en-US","en","fr-RW"],{day:"numeric",month:"numeric",year:"numeric"}))))),a().createElement(D.xv,{style:{paddingBottom:10,borderBottom:"1px"}},a().createElement(D.xv,{style:Z.textAnswers},"Patient Gender:"),a().createElement(D.xv,{style:Z.textAnswers}," "," ",e.encounterInfo.personGender)),a().createElement(D.xv,{style:{paddingBottom:10,position:"absolute",top:200,left:335,width:250}},a().createElement(D.xv,{style:Z.textAnswers},"Signout Date:"),a().createElement(D.xv,{style:Z.textAnswers}," "," ",new Date(e.encounterInfo.resultsEncounter.encounterDatetime).toLocaleString(["en-GB","en-US","en","fr-RW"],{day:"numeric",month:"numeric",year:"numeric"}))),a().createElement(D.xv,{style:{backgroundColor:"#E4E4E4",paddingBottom:10}},a().createElement(D.xv,{style:Z.textLabels},"Sending Physician:"),a().createElement(D.xv,{style:Z.textAnswers}," "," ",e.encounterInfo.resultsEncounter.obs.map((t=>t.concept.uuid==e.config.SendingPhysicianconceptUUID&&t.value)))),a().createElement(D.xv,{style:{backgroundColor:"#E4E4E4",paddingBottom:10}},a().createElement(D.xv,{style:Z.textLabels},"Sending Facility:"),a().createElement(D.xv,{style:Z.textAnswers}," "," ",e.encounterInfo.resultsEncounter.obs.map((t=>t.concept.uuid==e.config.OtherBiopsyLocationconceptUUID&&t.value)))),a().createElement(D.xv,{style:{backgroundColor:"#E4E4E4",paddingBottom:10,fontFamily:"Georgia"}},"Anatomical location:"),a().createElement(D.xv,{style:{backgroundColor:"#E4E4E4",paddingBottom:10,paddingLeft:10}},a().createElement(D.xv,{style:Z.textLabels},"i.System:"),a().createElement(D.xv,{style:Z.textAnswers}," "," ",e.encounterInfo.resultsEncounter.obs.map((t=>t.concept.uuid==e.config.OrganSystemconceptUUID&&t.value.name.display+",  ")))),a().createElement(D.xv,{style:{backgroundColor:"#E4E4E4",paddingBottom:10,paddingLeft:10}},a().createElement(D.xv,{style:Z.textLabels},"ii.Organ:"),a().createElement(D.xv,{style:Z.textAnswers}," "," ",e.encounterInfo.resultsEncounter.obs.map((t=>t.concept.uuid==e.config.OrganconceptUUID&&t.value.name.display+",  ")))),a().createElement(D.xv,{style:{backgroundColor:"#E4E4E4",paddingBottom:10,paddingLeft:10}},a().createElement(D.xv,{style:Z.textLabels},"iii.Detail:"),a().createElement(D.xv,{style:Z.textAnswers}," "," ",e.encounterInfo.resultsEncounter.obs.map((t=>t.concept.uuid==e.config.SpecimenDetailconceptUUID&&t.value)))),a().createElement(D.xv,{style:{backgroundColor:"#E4E4E4",paddingBottom:10}},a().createElement(D.xv,{style:Z.textLabels},"Procedure type:"),a().createElement(D.xv,{style:Z.textAnswers}," "," ",e.encounterInfo.resultsEncounter.obs.map((t=>t.concept.uuid==e.config.OtherTestsOrProceduresconceptUUID&&t.value)))),a().createElement(D.xv,{style:[Z.sentenceLabels]},"Gross Description:"),a().createElement(D.xv,{style:[Z.sentenceAnswers]},e.encounterInfo.resultsEncounter.obs.map((t=>t.concept.uuid==e.config.GrossDescriptionconceptUUID&&t.value))),a().createElement(D.xv,{style:Z.sentenceLabels},"Microscopic Examination:"),a().createElement(D.xv,{style:Z.sentenceAnswers},e.encounterInfo.resultsEncounter.obs.map((t=>t.concept.uuid==e.config.MacroscopicExaminationconceptUUID&&t.value))),a().createElement(D.xv,{style:Z.sentenceLabels},"Conclusion:"),a().createElement(D.xv,{style:Z.sentenceAnswers},e.encounterInfo.resultsEncounter.obs.map((t=>t.concept.uuid==e.config.COMMENTSATCONCLUSIONOFEXAMINATIONconceptUUID&&t.value))),a().createElement(D.xv,{style:{backgroundColor:"#E4E4E4",paddingBottom:10}},a().createElement(D.xv,{style:Z.textLabels},"Validated by pathologist:"),a().createElement(D.xv,{style:[Z.textAnswers,{fontWeight:"bold"}]}," "," ",e.encounterInfo.approvedBy))))),$=()=>{const e=(0,A.useConfig)(),[t,n]=a().useState(),[o,r]=a().useState([]),[s,l]=a().useState(""),[i,c]=a().useState([]),[u,d]=a().useState([]),[p,m]=a().useState([]),[y,g]=a().useState(""),[E,f]=a().useState(""),[h,b]=a().useState("");a().useEffect((()=>{F(e.healthCenterAttrTypeUUID).then(n),async function(){return(await(0,A.openmrsFetch)("/ws/rest/v1/location")).data.results}().then(c),L(e.sampleStatusConceptUUID).then(d),L(e.referralStatusConceptUUID).then(m),async function(e,t){const n=await F(e);let o=null;o=n&&n!=t?await(0,A.openmrsFetch)(`/ws/rest/v1/reportingrest/reportdata/996cf192-ff54-11eb-a63a-080027ce9ca0?location=${n}`):await(0,A.openmrsFetch)("/ws/rest/v1/reportingrest/reportdata/996cf192-ff54-11eb-a63a-080027ce9ca0");const a=o.data.dataSets[0].rows.map((async e=>{if(e.resultsEncounterUuid){o.data.dataSets[0].rows.findIndex((t=>t.encounterUuid==e.encounterUuid));const t=await async function(e){return(await(0,A.openmrsFetch)(`/ws/rest/v1/encounter/${e}?v=full`)).data}(e.resultsEncounterUuid);e.resultsEncounter=t}return e}));return Promise.all(a)}(e.healthCenterAttrTypeUUID,e.pathologyFullAllowedLocationUUID).then(r)}),[]);const B=o.filter((e=>!y||e.sampleStatusObs?.toLowerCase()==y.toLowerCase())).filter((e=>!E||e.referralStatusObs?.toLowerCase()==E.toLowerCase())).filter((e=>!s||e.patientHealthCenter?.toLowerCase()==s.toLowerCase())).filter((e=>{if(h){const t=h.split(/\s+/),n=`${e.family_name} ${e.middle_name} ${e.given_name}`;return t.every((e=>new RegExp("\\b"+e,"i").test(n)))}return!0})).map((n=>({id:n.encounterId,patientNames:a().createElement("a",{"data-testid":"patientNames",href:`/openmrs/patientDashboard.form?patientId=${n.personId}`},n.family_name,"  ",n.given_name,"  ",n.middle_name),pathologyRequest:a().createElement("a",{href:`/openmrs/module/htmlformentry/htmlFormEntry.form?encounterId=${n.encounterId}&mode=VIEW`}," ","Link"," "),sendingHospital:n.patientHealthCenter,phoneNumber:n.patientPhoneNumber||"",sampleStatus:a().createElement("select",{onChange:e=>R({uuid:e.target.value,display:e.target.options[e.target.selectedIndex].text},n)},a().createElement("option",{value:""}),u.map((e=>a().createElement("option",{"data-testid":"sampleStatus-option",value:e.uuid,key:e.uuid,selected:!!n.sampleStatusObs&&n.sampleStatusObs===e.display&&!0},e.display)))),dateOfRequest:new Date(n.encounterDatetime).toLocaleString(["en-GB","en-US","en","fr-RW"],{day:"numeric",month:"numeric",year:"numeric"}),referralStatus:a().createElement("select",{onChange:e=>P({uuid:e.target.value,display:e.target.options[e.target.selectedIndex].text},n)},a().createElement("option",{"data-testid":"referralStatus-option",value:""}),p.map((e=>a().createElement("option",{value:e.uuid,key:e.uuid,selected:n.referralStatusObs&&n.referralStatusObs===e.display},e.display)))),sampleDropOff:a().createElement("input",{"data-testid":"sampleDropOff",type:"checkbox",checked:Boolean(n.sampleDropoffObs),onChange:e=>k(n)}),pathologicDiagnosisObs:n.pathologicDiagnosisObs,resultsEncounter:n.resultsEncounterId?a().createElement("a",{"data-testid":"resultsEncounter",href:`/openmrs/module/htmlformentry/htmlFormEntry.form?encounterId=${n.resultsEncounterId}&mode=VIEW`}," ","Results"," "):(!t||t===e.pathologyFullAllowedLocationUUID)&&a().createElement("a",{href:`/openmrs/module/htmlformentry/htmlFormEntry.form?personId=${n.personId}&patientId=${n.personId}&returnUrl=&formId=${e.pathologyResultsFromID}&uuid=${n.encounterUuid}`}," ","Fill in results"," "),PDFReport:n.resultsEncounterId&&n.approvedBy&&a().createElement(D.WD,{document:a().createElement(N,{encounterInfo:n,config:e}),fileName:"Pathology Report"},(e=>{let{loading:t}=e;return t?"loading...":a().createElement("button",null,"Download")}))}))),k=t=>{const n=(0,v.Z)(o);t.sampleDropoffObs?async function(e){return await(0,A.openmrsFetch)(`/ws/rest/v1/obs/${e}`,{method:"POST",headers:{"content-type":"application/json"},body:{voided:!0}})}(t.sampleDropoffObsUuid).then((e=>{if(e.ok){const e=n.findIndex((e=>e.encounterUuid==t.encounterUuid));n[e].sampleDropoffObs="",n[e].sampleDropoffObsUuid="",r(n)}})):async function(e,t,n,o){const a={person:e.patientUuid,obsDatetime:(new Date).toISOString(),concept:t,location:await F(n),encounter:e.encounterUuid,value:o,voided:!1};return await(0,A.openmrsFetch)("/ws/rest/v1/obs",{method:"POST",headers:{"content-type":"application/json"},body:a})}(t,e.sampleDropOffconceptUUID,e.healthCenterAttrTypeUUID,e.yesConceptUUID).then((o=>{if(o.ok){const a=n.findIndex((e=>e.encounterUuid==t.encounterUuid));n[a].sampleDropoffObs=e.yesConceptName,n[a].sampleDropoffObsUuid=o.data.uuid,r(n)}}))},R=(t,n)=>{const a=(0,v.Z)(o);n.sampleStatusObs?async function(e,t,n,o){const a={person:t.patientUuid,obsDatetime:(new Date).toISOString(),concept:n,location:await F(o),encounter:t.encounterUuid,value:e.uuid,voided:!e};return await(0,A.openmrsFetch)(`/ws/rest/v1/obs/${t.sampleStatusObsUuid}`,{method:"POST",headers:{"content-type":"application/json"},body:a})}(t,n,e.sampleStatusConceptUUID,e.healthCenterAttrTypeUUID).then((e=>{if(e.ok){const o=a.findIndex((e=>e.encounterUuid==n.encounterUuid));a[o].sampleStatusObs=t.display,a[o].sampleStatusObsUuid=e.data.uuid,r(a)}else r(a)})):async function(e,t,n,o){const a={person:t.patientUuid,obsDatetime:(new Date).toISOString(),concept:n,location:await F(o),encounter:t.encounterUuid,value:e,voided:!1};return await(0,A.openmrsFetch)("/ws/rest/v1/obs",{method:"POST",headers:{"content-type":"application/json"},body:a})}(t.uuid,n,e.sampleStatusConceptUUID,e.healthCenterAttrTypeUUID).then((e=>{if(e.ok){const o=a.findIndex((e=>e.encounterUuid==n.encounterUuid));a[o].sampleStatusObs=t.display,a[o].sampleStatusObsUuid=e.data.uuid,r(a)}else r(a)}))},P=(t,n)=>{const a=(0,v.Z)(o);n.referralStatusObs?async function(e,t,n,o){const a={person:t.patientUuid,obsDatetime:(new Date).toISOString(),concept:n,location:await F(o),encounter:t.encounterUuid,value:e.uuid,voided:!e};return await(0,A.openmrsFetch)(`/ws/rest/v1/obs/${t.referralStatusObsUuid}`,{method:"POST",headers:{"content-type":"application/json"},body:a})}(t,n,e.referralStatusConceptUUID,e.healthCenterAttrTypeUUID).then((e=>{if(e.ok){const o=a.findIndex((e=>e.encounterUuid==n.encounterUuid));a[o].referralStatusObs=t.display,a[o].referralStatusObsUuid=e.data.uuid,r(a)}else r(a)})):async function(e,t,n,o){const a={person:t.patientUuid,obsDatetime:(new Date).toISOString(),concept:n,location:await F(o),encounter:t.encounterUuid,value:e,voided:!1};return await(0,A.openmrsFetch)("/ws/rest/v1/obs",{method:"POST",headers:{"content-type":"application/json"},body:a})}(t.uuid,n,e.referralStatusConceptUUID,e.healthCenterAttrTypeUUID).then((e=>{if(e.ok){const o=a.findIndex((e=>e.encounterUuid==n.encounterUuid));a[o].referralStatusObs=t.display,a[o].referralStatusObsUuid=e.data.uuid,r(a)}else r(a)}))};return a().createElement("div",null,a().createElement("div",{className:O.filtersContainer},a().createElement("label",{htmlFor:"sending-hospital"},"Sending Hospital "),a().createElement("select",{id:"sending-hospital",className:O.dropdown,value:s,onChange:e=>l(e.target.value)},a().createElement("option",{value:""}),i.map((n=>t&&t!==e.pathologyFullAllowedLocationUUID?n.uuid===t?a().createElement("option",{value:n.display,key:n.uuid},n.display):null:a().createElement("option",{value:n.display,key:n.uuid},n.display)))),a().createElement("label",{htmlFor:"sample-status"},"Sample Status "),a().createElement("select",{id:"sample-status",className:O.dropdown,value:y,onChange:e=>g(e.target.value)},a().createElement("option",{value:""}),u.map((e=>a().createElement("option",{value:e.display,key:e.uuid},e.display)))),a().createElement("label",{htmlFor:"referral-status"},"Referral Status "),a().createElement("select",{id:"referral-status",className:O.dropdown,value:E,onChange:e=>f(e.target.value)},a().createElement("option",{value:""}),p.map((e=>a().createElement("option",{value:e.display,key:e.uuid},e.display)))),a().createElement("label",{htmlFor:"patient-name"},"Patient Name "),a().createElement("input",{id:"patient-name",className:O.textBox,type:"text",onChange:e=>b(e.target.value)})),console.log(o),a().createElement("div",{className:O.tableContainer},a().createElement(x.ZP,{rows:B,headers:[{key:"patientNames",header:"Patient name"},{key:"pathologyRequest",header:"pathology request"},{key:"sendingHospital",header:"Sending Hospital"},{key:"phoneNumber",header:"Phone number"},{key:"sampleStatus",header:"Sample status"},{key:"dateOfRequest",header:"Date of Request"},{key:"referralStatus",header:"Referral status"},{key:"sampleDropOff",header:"Sample drop off?"},{key:"pathologicDiagnosisObs",header:"Pathologic diagnosis"},{key:"resultsEncounter",header:"Results"},{key:"PDFReport",header:"Report"}]},(e=>{let{rows:t,headers:n,getTableProps:o,getHeaderProps:r,getRowProps:s}=e;return a().createElement(w.Z,o(),a().createElement(C.Z,null,a().createElement(U.Z,null,n.map((e=>a().createElement(_.Z,r({header:e}),e.header))))),a().createElement(S.Z,null,t.map((e=>a().createElement(U.Z,s({row:e}),e.cells.map((e=>a().createElement(I.Z,{key:e.id},e.value))))))))}))),a().createElement("div",null))},G=()=>a().createElement("div",{className:`omrs-main-content ${b.container}`},a().createElement($,null))},74017:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var o=n(94015),a=n.n(o),r=n(23645),s=n.n(r)()(a());s.push([e.id,".-esm-pathology__ReportComponent__tableContainer___uOmmk {\n  height: 500px;\n  overflow-x: auto;\n  margin: 0 1rem;\n  border: 2px solid lightgrey;\n  border-radius: 0.25rem;\n}\n\n.-esm-pathology__ReportComponent__filtersContainer___avnpi {\n  border-radius: 0.25rem;\n  margin: 0 1rem;\n  padding-top: 4%;\n}\n\n.-esm-pathology__ReportComponent__dropdown___Lr3Fe {\n  width: 10%;\n  height: 2rem;\n  background: transparent;\n  border: 1px solid var(--omrs-color-ink-lowest-contrast);\n  background-clip: padding-box;\n  border-radius: 4px;\n  margin: 1rem;\n}\n.-esm-pathology__ReportComponent__dropdown___Lr3Fe:disabled {\n  opacity: 0.8;\n  background: lightgrey;\n  cursor: not-allowed;\n}\n.-esm-pathology__ReportComponent__dropdown___Lr3Fe:focus {\n  border: 2px solid var(--omrs-color-interaction);\n  outline: 0;\n}\n.-esm-pathology__ReportComponent__textBox___-gvpP {\n  background: transparent;\n  border: 1px solid var(--omrs-color-ink-lowest-contrast);\n  background-clip: padding-box;\n  border-radius: 4px;\n  margin: 1rem;\n}\n","",{version:3,sources:["webpack://./src/pathology-report/ReportComponent.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,gBAAgB;EAChB,cAAc;EACd,2BAA2B;EAC3B,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,uBAAuB;EACvB,uDAAuD;EACvD,4BAA4B;EAC5B,kBAAkB;EAClB,YAAY;AACd;AACA;EACE,YAAY;EACZ,qBAAqB;EACrB,mBAAmB;AACrB;AACA;EACE,+CAA+C;EAC/C,UAAU;AACZ;AACA;EACE,uBAAuB;EACvB,uDAAuD;EACvD,4BAA4B;EAC5B,kBAAkB;EAClB,YAAY;AACd",sourcesContent:[".tableContainer {\n  height: 500px;\n  overflow-x: auto;\n  margin: 0 1rem;\n  border: 2px solid lightgrey;\n  border-radius: 0.25rem;\n}\n\n.filtersContainer {\n  border-radius: 0.25rem;\n  margin: 0 1rem;\n  padding-top: 4%;\n}\n\n.dropdown {\n  width: 10%;\n  height: 2rem;\n  background: transparent;\n  border: 1px solid var(--omrs-color-ink-lowest-contrast);\n  background-clip: padding-box;\n  border-radius: 4px;\n  margin: 1rem;\n}\n.dropdown:disabled {\n  opacity: 0.8;\n  background: lightgrey;\n  cursor: not-allowed;\n}\n.dropdown:focus {\n  border: 2px solid var(--omrs-color-interaction);\n  outline: 0;\n}\n.textBox {\n  background: transparent;\n  border: 1px solid var(--omrs-color-ink-lowest-contrast);\n  background-clip: padding-box;\n  border-radius: 4px;\n  margin: 1rem;\n}\n"],sourceRoot:""}]),s.locals={tableContainer:"-esm-pathology__ReportComponent__tableContainer___uOmmk",filtersContainer:"-esm-pathology__ReportComponent__filtersContainer___avnpi",dropdown:"-esm-pathology__ReportComponent__dropdown___Lr3Fe",textBox:"-esm-pathology__ReportComponent__textBox___-gvpP"};const l=s},56724:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var o=n(94015),a=n.n(o),r=n(23645),s=n.n(r)()(a());s.push([e.id,".-esm-pathology__pathology__container___ny2VS {\n  padding: 2em;\n}\n","",{version:3,sources:["webpack://./src/pathology.css"],names:[],mappings:"AAAA;EACE,YAAY;AACd",sourcesContent:[".container {\n  padding: 2em;\n}\n"],sourceRoot:""}]),s.locals={container:"-esm-pathology__pathology__container___ny2VS"};const l=s},97819:(e,t,n)=>{"use strict";e.exports=n.p+"5b8bb278fcab4da4972e.ttf"},21016:(e,t,n)=>{"use strict";e.exports=n.p+"a5fad24f075c978ac04b.ttf"},28251:(e,t,n)=>{"use strict";e.exports=n.p+"00ebb57bb20c59433e84.gif"},42480:()=>{},19527:()=>{},69331:()=>{},52361:()=>{},94616:()=>{}}]);
//# sourceMappingURL=861.js.map