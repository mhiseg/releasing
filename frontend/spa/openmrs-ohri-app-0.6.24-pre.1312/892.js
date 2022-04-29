(self.webpackChunkopenmrs_ohri_app=self.webpackChunkopenmrs_ohri_app||[]).push([[892],{59670:(e,t,n)=>{"use strict";n.d(t,{AN:()=>u,Aq:()=>x,B1:()=>S,Ig:()=>d,JH:()=>f,Jf:()=>y,Lq:()=>c,V5:()=>h,Xm:()=>v,am:()=>_,k$:()=>g,kT:()=>w,q3:()=>m,sy:()=>E,ue:()=>l,zj:()=>b});var o=n(91208),r=n(90421),a=n.n(r),i=n(9588);const s="/ws/rest/v1/";function l(e){return(0,o.openmrsFetch)(`/ws/fhir2/R4/Encounter?patient=${e}&_sort=-date&_count=1`)}function c(e=1,t=10){return(0,o.openmrsFetch)(`/ws/fhir2/R4/Patient?_getpagesoffset=${e}&_count=${t}`)}function u(){let e=a()().format("YYYY-MM-DD");return(0,o.openmrsFetch)(`/ws/fhir2/R4/Encounter?date=${e}`).then((({data:e})=>e.entry?.length?p(e):[]))}function h(e,t,n){let r=a()().format("YYYY-MM-DD"),i=a()().subtract(n,"days").format("YYYY-MM-DD");return(0,o.openmrsFetch)(`/ws/fhir2/R4/Observation?code=${e}${t?`&value-concept=${t}`:""}${n?`&_lastUpdated=ge${i}&_lastUpdated=le${r}`:""}`).then((({data:e})=>e.entry?.length?p(e):[]))}function p(e){let t=e.entry.map((e=>e.resource.subject.reference));return t=new Set([...t]),t=Array.from(t),Promise.all(t.map((e=>(0,o.openmrsFetch)("/ws/fhir2/R4/"+e))))}async function m(e,t){const{data:n}=await(0,o.openmrsFetch)(`/ws/rest/v1/cohortm/cohort/${e}${t?`?v=${t}`:""}`);return n.cohortMembers=n.cohortMembers.filter((e=>!e.voided)),n}async function d(e,t){const n=t?t.join("&"):"",r=n?`reportingrest/cohort/${e}?${n}`:`reportingrest/cohort/${e}`,{data:a}=await(0,o.openmrsFetch)(s+r);return a}async function _(e,t){const n=t?t.join("&"):"",r=n?`reportingrest/cohort/${e}?${n}`:`reportingrest/cohort/${e}`,{data:a}=await(0,o.openmrsFetch)(s+r);return Promise.all(a.members.map((e=>(0,o.openmrsFetch)(`/ws/rest/v1/patient/${e.uuid}?v=full`))))}async function g(e){const{data:{results:t,error:n}}=await(0,o.openmrsFetch)("/ws/rest/v1/cohortm/cohort?v=custom:(uuid,name,voided)"+(e?`&cohortType=${e}`:""));if(n)throw n;return t.filter((e=>!e.voided))}function f(e,t){return(0,o.openmrsFetch)("/ws/rest/v1/cohortm/cohortmember",{method:"POST",headers:{"Content-Type":"application/json"},body:{patient:e,cohort:t,startDate:new Date}})}function b(e){return(0,o.openmrsFetch)(`/ws/rest/v1/cohortm/cohortmember/${e}`,{method:"DELETE"})}async function y(e){const{data:{results:t,error:n}}=await(0,o.openmrsFetch)(`/ws/rest/v1/cohortm/cohortmember?patient=${e}&v=full`);if(n)throw n;return t.filter((e=>!e.voided))}function w(e){return(0,o.openmrsFetch)(`/ws/fhir2/R4/Observation?code=${i.Ln}&value-concept=${i.$l}&patient=${e}&_sort=-date&_count=1`).then((({data:e})=>e.entry?.length?e.entry[0].resource.valueCodeableConcept.coding[0].display:""))}function v(e){return(0,o.openmrsFetch)(`/ws/fhir2/R4/Observation?code=${i.Ws}&value-concept=${i.Ws}&patient=${e}&_sort=-date&_count=1`).then((({data:e})=>e.entry?.length?e.entry[0].resource.valueCodeableConcept.coding[0].display:""))}function E(e,t){const n=`encounterType=${t}&patient=${e}`;return(0,o.openmrsFetch)(`/ws/rest/v1/encounter?${n}&v=${i.Ib}`).then((({data:e})=>e.results.length?e.results[e.results.length-1]:null))}function x(){return(0,o.openmrsFetch)(`/ws/rest/v1/reportingrest/cohort/${i.pj}`).then((({data:e})=>{if(e.members?.length){let t=e.members.map((e=>e.uuid));return t=new Set([...t]),t=Array.from(t),Promise.all(t.map((e=>(0,o.openmrsFetch)("/ws/fhir2/R4//Person/"+e))))}return[]}))}function S(e){return(0,o.openmrsFetch)(`/ws/rest/v1/concept/${e}/name?limit=1`).then((({data:e})=>{if(e.results.length)return e.results[e.results.length-1].display}))}},54890:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var o=n(14718),r=n(73312),a=n(70404),i=n(68554),s=n(26542),l=n(71642),c=n(71273),u=n(75798),h=n(50576),p=n.n(h);const m=({tableHeaders:e,message:t})=>p().createElement("div",{style:{marginLeft:"-16px"}},p().createElement(o.ZP,{rows:[],headers:e,isSortable:!0,size:"short",useZebraStyles:!0},(({headers:n,getHeaderProps:o,getTableProps:h})=>p().createElement(r.Z,null,p().createElement(a.Z,h(),p().createElement(i.Z,null,p().createElement(s.Z,null,n.map((e=>p().createElement(l.Z,o({header:e,isSortable:e.isSortable}),e.header?.content??e.header))))),p().createElement(c.Z,null,p().createElement(s.Z,null,p().createElement(u.Z,{colSpan:e.length},t))))))))},64874:(e,t,n)=>{"use strict";n.r(t),n.d(t,{AddPatientToListModal:()=>m,default:()=>d});var o=n(91208),r=n(18137),a=n(89908),i=n(81658),s=n(45047),l=n(94115),c=n(81273),u=n(50576),h=n.n(u),p=n(59670);const m=({isOpen:e,close:t,patientUuid:n,cohortType:m,title:d,excludeCohorts:_})=>{const[g,f]=(0,u.useState)([]),[b,y]=(0,u.useState)([]),[w,v]=(0,u.useState)([]),[E,x]=(0,u.useState)(!0),[S,T]=(0,u.useState)(null),[$,k]=(0,u.useState)(!1);(0,u.useEffect)((()=>{Promise.all([(0,p.k$)(m),(0,p.Jf)(n)]).then((([e,t])=>{let n=e.filter((e=>!t.some((t=>e.uuid==t.cohort.uuid))));_&&_.length&&(n=n.filter((e=>!_.includes(e.name)))),f(n),v(t),y(t.map((e=>e.cohort))),x(!1)}))}),[m]);const F=(0,u.useMemo)((()=>{const e=g.map(((e,t)=>h().createElement(r.Z,{labelText:e.name,value:e.uuid,id:e.uuid,key:t})));return e.push(h().createElement(r.Z,{labelText:"None",value:"none",id:"none"})),e}),[g]),C=(0,u.useMemo)((()=>h().createElement(h().Fragment,null,h().createElement(a.Z,{width:"60%"}),h().createElement(a.Z,{width:"60%"}))),[]),L=(0,u.useMemo)((()=>b.length?h().createElement(i.Z,{style:{marginLeft:"1rem",marginBottom:"1rem",color:"#c6c6c6"}},b.map(((e,t)=>h().createElement(s.Z,{key:t},e.name)))):h().createElement("div",{style:{marginBottom:"1rem"}},h().createElement("span",{style:{fontSize:".875rem",color:"#c6c6c6"}},"-- None --"))),[b]),Z=(0,u.useCallback)((()=>{k(!0),"none"==S?Promise.all(w.map((e=>(0,p.zj)(e.uuid)))).then((e=>{(0,o.showToast)({kind:"success",critical:!0,description:"Patient was successfully removed from all lists"}),t()})).catch((e=>{k(!1)})):(0,p.JH)(n,S).then((e=>{e.ok?((0,o.showToast)({kind:"success",critical:!0,description:`Patient was successfully added to ${e.data.cohort.display}`}),t()):k(!1)}))}),[S,n,t,w]);return h().createElement(h().Fragment,null,h().createElement(l.Z,{style:{zIndex:99999},open:e,modalHeading:d||"Add Patient to list",modalLabel:"",onRequestClose:t,passiveModal:!1,primaryButtonText:"Confirm",secondaryButtonText:"Cancel",onRequestSubmit:Z,primaryButtonDisabled:E||null==S||$||"none"==S&&0==w.length},h().createElement("div",{style:{paddingLeft:"1rem",marginBottom:"2rem"}},h().createElement("p",{style:{marginBottom:"1rem"}},"Currently added to the list(s) below"),E?C:L,h().createElement("p",{style:{marginBottom:"1rem"}},"Select the list where to add the client"),E?C:h().createElement(c.Z,{legendText:"",name:"patient-lists",orientation:"vertical",onChange:e=>T(e.toString())},F))))},d=({patientUuid:e,displayText:t,excludeCohorts:n})=>{const{patient:r}=(0,o.usePatient)(e),[a,i]=(0,u.useState)(!1),s=(0,u.useMemo)((()=>r?`${r.name[0].given.join(" ")} ${r.name[0].family}`:"Patient"),[r]);return h().createElement(h().Fragment,null,a&&h().createElement(m,{isOpen:a,close:()=>i(!1),patientUuid:e,title:`Add ${s} to list`,excludeCohorts:n}),h().createElement("li",{className:"bx--overflow-menu-options__option"},h().createElement("button",{className:"bx--overflow-menu-options__btn",role:"menuitem",title:"Add to list",onClick:()=>i(!0),style:{maxWidth:"100vw"}},h().createElement("span",{className:"bx--overflow-menu-options__option-content"},t||"Add to list"))))}},80892:(e,t,n)=>{"use strict";n.d(t,{Z:()=>D});var o=n(91208),r=n(50576),a=n.n(r),i=n(59670),s=n(90421),l=n.n(s),c=n(54890),u=n(94358),h=n(42713),p=n(37617),m=n(71503),d=n(64874),_=n(9588),g=n(23647),f=n(47826),b=n(39743),y=n.n(b),w=n(3157),v=n.n(w),E=n(53439),x=n.n(E),S=n(79201),T=n.n(S),$=n(71573),k=n.n($),F=n(35914),C=n.n(F),L=n(93365),Z=n.n(L),H={};H.styleTagTransform=C(),H.setAttributes=T(),H.insert=x().bind(null,"head"),H.domAPI=v(),H.insertStyleElement=k(),y()(Z(),H);const M=Z()&&Z().locals?Z().locals:void 0;var P=n(99948);const z=[{key:"name",header:"Name",getValue:e=>e.name,link:{getUrl:e=>e.url}},{key:"timeAddedToList",header:"Time Added To List",getValue:e=>e.timeAddedToList},{key:"waitingTime",header:"Waiting Time",getValue:e=>e.waitingTime},{key:"gender",header:"Sex",getValue:e=>e.gender},{key:"location",header:"Location",getValue:e=>e.location},{key:"age",header:"Age",getValue:e=>e.age},{key:"phoneNumber",header:"Phone Number",getValue:e=>e.phoneNumber},{key:"hivResult",header:"HIV Result",getValue:e=>e.hivResult},{key:"actions",header:"Actions",getValue:e=>e.actions}],Y=({patientUuid:e,launchableForm:t,form:n,encounterType:s,patientUrl:l})=>{const[c,p]=(0,r.useState)(t.actionText),[m,d]=(0,r.useState)(null),[_,f]=(0,r.useState)(!1),b=t.actionText||"Continue encounter ";return(0,r.useEffect)((()=>{t.editLatestEncounter&&s&&!m?(f(!0),(0,i.sy)(e,s).then((e=>{e&&(p(b),d(e.uuid)),f(!1)}))):f(!1)}),[]),a().createElement(a().Fragment,null,_?a().createElement(u.Z,{style:{margin:"0 auto",width:"16px"}}):a().createElement(h.Z,{itemText:c,onClick:()=>{m?((0,P.changeWorkspaceContext)(e),(0,g.Lm)(n,m,null,null,"ohri-forms")):((0,P.changeWorkspaceContext)(e),(0,g.aT)(n,null,null,"ohri-forms")),(0,o.navigate)({to:l})}}))},D=({cohortId:e,cohortSlotName:t,isReportingCohort:n,otherColumns:s,excludeColumns:u,queryParams:h,associatedEncounterType:g,launchableForm:b,addPatientToListOptions:y,extraAssociatedEncounterTypes:w})=>{const[v,E]=(0,r.useState)(!0),[x,S]=(0,r.useState)(!1),[T,$]=(0,r.useState)(!1),[k,F]=(0,r.useState)(!1),[C,L]=(0,r.useState)(1),[Z,H]=(0,r.useState)(10),[P,D]=(0,r.useState)(0),[N,A]=(0,r.useState)(null),[R,U]=(0,r.useState)(0),[I,V]=(0,r.useState)([]),[j,W]=(0,r.useState)(!1),[B,q]=(0,r.useState)([]),[O,J]=(0,r.useState)([]),[X,G]=(0,r.useState)([]),K=b&&(0,f.R3)(b.package,b.name),Q=e=>{const t=n?e.person.uuid:e.patient.uuid,o=b?.targetDashboard?`/${b?.targetDashboard}`:"";return{uuid:t,id:n?e.identifiers[0].identifier:e.patient.identifiers[0].identifier,age:n?e.person.age:e.patient.person.age,name:n?e.person.display:e.patient.person.display,birthdate:n?l()(e.person.birthdate).format("DD-MMM-YYYY"):l()(e.patient.person.birthdate).format("DD-MMM-YYYY"),gender:n?"M"==e.person.gender?"Male":"Female":"M"==e.patient.person.gender?"Male":"Female",birthday:n?e.person.birthdate:e.patient.person.birthdate,url:`${_.sb}${t}/chart${o}`}},ee=(e,t)=>{const o=n?e.person.uuid:e.patient.uuid;return{timeAddedToList:n?null:l()(e.startDate).format("LL"),waitingTime:n?null:l()(e.startDate).fromNow(),location:t&&t.name,phoneNumber:"0700xxxxxx",hivResult:"None",actions:a().createElement(p.Z,{flipped:!0},K?a().createElement(Y,{patientUuid:o,launchableForm:b,form:(0,f.NL)(b.intent,K),encounterType:b.encounterType||g,key:o,patientUrl:e.patientUrl}):a().createElement(a().Fragment,null),y?.isEnabled&&a().createElement(d.default,{patientUuid:o,displayText:"Move to list",excludeCohorts:y?.excludeCohorts||[]}))}},te=(e,t,n)=>{let o=[];for(let r=t;r<t+n;r++)r<e.length&&o.push(e[r]);J(o)};(0,r.useEffect)((()=>{n?(0,i.am)(e,h).then((e=>{const t=e.map((({data:e})=>{let t=Q(e);return e.patientUrl=t.url,{...t,...ee(e,null)}}));G(t),te(t,0,Z),S(!0),E(t.length>0)})):(0,i.q3)(e,"full").then((e=>{const t=e.cohortMembers.map((t=>{let n=Q(t);return t.patientUrl=n.url,{...n,...ee(t,e.location)}}));G(t),te(t,0,Z),S(!0),E(t.length>0)}))}),[e]),(0,r.useEffect)((()=>{x&&X.length&&Promise.all(X.map((e=>(0,i.sy)(e.uuid,g)))).then((e=>{e.forEach(((e,t)=>{X[t].latestEncounter=e,t==X.length-1&&(G([...X]),$(!0),E(!1))}))})),D(X.length)}),[x]),(0,r.useEffect)((()=>{const e=!u||!u.includes("hivResult");!T&&g||k||!e||Promise.all(X.map((e=>(0,i.kT)(e.uuid)))).then((e=>{e.forEach(((e,t)=>{X[t].hivResult=e,t==X.length-1&&(G([...X]),F(!0))}))}))}),[X,T]);const ne=(0,r.useMemo)((()=>({usePagination:!0,currentPage:C,onChange:({pageSize:e,page:t})=>(te(X,(t-1)*e,e),L(t),H(e),null),pageSize:Z,totalItems:P})),[C,Z,P,T]),oe=(0,r.useCallback)((e=>{A(e);const t=((e,t)=>t.filter((t=>-1!==t.name.toLowerCase().search(e.toLowerCase()))))(e,O);return V(t),!0}),[O]);(0,r.useEffect)((()=>((0,o.attach)(t,"patient-table"),()=>{(0,o.detach)(t,"patient-table")})));const re=(0,r.useMemo)((()=>{let e=[...z];u&&(e=z.filter((e=>!u.includes(e.key)))),s&&s.forEach((t=>{t.index?e.splice(t.index,0,t):e.push(t)}));const t=e.findIndex((e=>"actions"==e.key));if(t){const n=e[t];e.splice(t,1),e.push(n)}return{patients:N?I:O,columns:e,isLoading:v,search:{placeHolder:"Search client list",onSearch:e=>{e||A("")},currentSearchTerm:N,otherSearchProps:{onKeyDown:e=>{13==e.keyCode&&oe(e.target.value)},autoFocus:!0}},pagination:ne,autoFocus:!0}}),[N,I,O,oe,ne,v,u,s]);return(0,r.useEffect)((()=>{U(R+1)}),[re]),(0,r.useEffect)((()=>{X.length&&w&&!j&&(X.forEach((e=>{w.forEach((t=>{B.push((0,i.sy)(e.uuid,t))}))})),Promise.all(B).then((e=>{e.forEach(((e,t)=>{const n=X.findIndex((t=>t.uuid===e?.patient.uuid));-1!==n&&(X[n].latestExtraEncounters=X[n].latestExtraEncounters?.concat(e)??[e])})),W(!0)})))}),[x]),a().createElement("div",{className:M.table1},v?a().createElement(m.Z,{rowCount:5}):O.length?a().createElement(o.ExtensionSlot,{extensionSlotName:t,state:re,key:R}):a().createElement(c.Z,{tableHeaders:re.columns,message:"There are no patients in this list."}))}},93365:(e,t,n)=>{(t=n(77705)(!1)).push([e.id,":root{--brand-01: #005d5d;--brand-02: #004144;--brand-03: #007d79}.openmrs-ohri__patient-list-cohort__productiveHeading01___2xzUz{font-size:.875rem;font-weight:600;line-height:1.29;letter-spacing:.16px}.openmrs-ohri__patient-list-cohort__productiveHeading02___2XlYI{font-size:1rem;font-weight:600;line-height:1.375;letter-spacing:0}.openmrs-ohri__patient-list-cohort__productiveHeading03___2U9JT{font-size:1.25rem;font-weight:400;line-height:1.4;letter-spacing:0}.openmrs-ohri__patient-list-cohort__productiveHeading04___1sndE{font-size:1.75rem;font-weight:400;line-height:1.29;letter-spacing:0}.openmrs-ohri__patient-list-cohort__productiveHeading05___3NNLG{font-size:2rem;font-weight:400;line-height:1.25;letter-spacing:0}.openmrs-ohri__patient-list-cohort__productiveHeading06___1tgd3{font-size:2rem;font-weight:300;line-height:1.199;letter-spacing:0}.openmrs-ohri__patient-list-cohort__bodyShort01___aFwIr{font-size:.875rem;font-weight:400;line-height:1.29;letter-spacing:.16px}.openmrs-ohri__patient-list-cohort__helperText01___1Ezg9{font-size:.75rem;line-height:1.34;letter-spacing:.32px}.openmrs-ohri__patient-list-cohort__bodyShort02___1Z2oX{font-size:1rem;font-weight:400;line-height:1.375;letter-spacing:0}.openmrs-ohri__patient-list-cohort__bodyLong01___KEHaG{font-size:.875rem;font-weight:400;line-height:1.43;letter-spacing:.16px}.openmrs-ohri__patient-list-cohort__bodyLong02___3ZaxR{font-size:1rem;font-weight:400;line-height:1.5;letter-spacing:0}.openmrs-ohri__patient-list-cohort__label01___2YUAj{font-size:.75rem;font-weight:400;line-height:1.34;letter-spacing:.32px}.openmrs-ohri__patient-list-cohort__text01___2p1jb{color:#161616}.openmrs-ohri__patient-list-cohort__text02___12VaQ{color:#525252}aside{background-color:#fff !important}div[class*=-esm-login__styles__center]>img{width:140px}.tab-12rem>button{width:12rem !important}.tab-14rem>button{width:14rem !important}.tab-16rem>button{width:16rem !important}.openmrs-ohri__patient-list-cohort__contentSwitcherWrapper___1b2pD{padding-bottom:50px}.openmrs-ohri__patient-list-cohort__contentSwitcherWrapper___1b2pD>div{width:150px;float:right}.bx--overflow-menu-options__btn{max-width:15rem !important}.bx--overflow-menu--flip.bx--overflow-menu-options{min-width:13rem !important}.bx--overflow-menu-options__btn:focus{outline:none}",""]),t.locals={productiveHeading01:"openmrs-ohri__patient-list-cohort__productiveHeading01___2xzUz",productiveHeading02:"openmrs-ohri__patient-list-cohort__productiveHeading02___2XlYI",productiveHeading03:"openmrs-ohri__patient-list-cohort__productiveHeading03___2U9JT",productiveHeading04:"openmrs-ohri__patient-list-cohort__productiveHeading04___1sndE",productiveHeading05:"openmrs-ohri__patient-list-cohort__productiveHeading05___3NNLG",productiveHeading06:"openmrs-ohri__patient-list-cohort__productiveHeading06___1tgd3",bodyShort01:"openmrs-ohri__patient-list-cohort__bodyShort01___aFwIr",helperText01:"openmrs-ohri__patient-list-cohort__helperText01___1Ezg9",bodyShort02:"openmrs-ohri__patient-list-cohort__bodyShort02___1Z2oX",bodyLong01:"openmrs-ohri__patient-list-cohort__bodyLong01___KEHaG",bodyLong02:"openmrs-ohri__patient-list-cohort__bodyLong02___3ZaxR",label01:"openmrs-ohri__patient-list-cohort__label01___2YUAj",text01:"openmrs-ohri__patient-list-cohort__text01___2p1jb",text02:"openmrs-ohri__patient-list-cohort__text02___12VaQ",contentSwitcherWrapper:"openmrs-ohri__patient-list-cohort__contentSwitcherWrapper___1b2pD"},e.exports=t}}]);
//# sourceMappingURL=892.js.map