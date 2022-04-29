(self.webpackChunkesm_ohri_hiv_app=self.webpackChunkesm_ohri_hiv_app||[]).push([[2659],{29270:(e,t,n)=>{"use strict";n.d(t,{ue:()=>l,Lq:()=>c,AN:()=>h,V5:()=>u,q3:()=>d,Ig:()=>p,am:()=>_,k$:()=>g,JH:()=>f,zj:()=>v,Jf:()=>y,kT:()=>b,Xm:()=>E,sy:()=>w,B1:()=>S});var i=n(9035),o=n(19034),r=n.n(o),a=n(18394);const s="/ws/rest/v1/";function l(e){return(0,i.openmrsFetch)(`/ws/fhir2/R4/Encounter?patient=${e}&_sort=-date&_count=1`)}function c(e=1,t=10){return(0,i.openmrsFetch)(`/ws/fhir2/R4/Patient?_getpagesoffset=${e}&_count=${t}`)}function h(){let e=r()().format("YYYY-MM-DD");return(0,i.openmrsFetch)(`/ws/fhir2/R4/Encounter?date=${e}`).then((({data:e})=>e.entry?.length?m(e):[]))}function u(e,t,n){let o=r()().format("YYYY-MM-DD"),a=r()().subtract(n,"days").format("YYYY-MM-DD");return(0,i.openmrsFetch)(`/ws/fhir2/R4/Observation?code=${e}${t?`&value-concept=${t}`:""}${n?`&_lastUpdated=ge${a}&_lastUpdated=le${o}`:""}`).then((({data:e})=>e.entry?.length?m(e):[]))}function m(e){let t=e.entry.map((e=>e.resource.subject.reference));return t=new Set([...t]),t=Array.from(t),Promise.all(t.map((e=>(0,i.openmrsFetch)("/ws/fhir2/R4/"+e))))}async function d(e,t){const{data:n}=await(0,i.openmrsFetch)(`/ws/rest/v1/cohortm/cohort/${e}${t?`?v=${t}`:""}`);return n.cohortMembers=n.cohortMembers.filter((e=>!e.voided)),n}async function p(e,t){const n=t?t.join("&"):"",o=n?`reportingrest/cohort/${e}?${n}`:`reportingrest/cohort/${e}`,{data:r}=await(0,i.openmrsFetch)(s+o);return r}async function _(e,t){const n=t?t.join("&"):"",o=n?`reportingrest/cohort/${e}?${n}`:`reportingrest/cohort/${e}`,{data:r}=await(0,i.openmrsFetch)(s+o);return Promise.all(r.members.map((e=>(0,i.openmrsFetch)(`/ws/rest/v1/patient/${e.uuid}?v=full`))))}async function g(e){const{data:{results:t,error:n}}=await(0,i.openmrsFetch)("/ws/rest/v1/cohortm/cohort?v=custom:(uuid,name,voided)"+(e?`&cohortType=${e}`:""));if(n)throw n;return t.filter((e=>!e.voided))}function f(e,t){return(0,i.openmrsFetch)("/ws/rest/v1/cohortm/cohortmember",{method:"POST",headers:{"Content-Type":"application/json"},body:{patient:e,cohort:t,startDate:new Date}})}function v(e){return(0,i.openmrsFetch)(`/ws/rest/v1/cohortm/cohortmember/${e}`,{method:"DELETE"})}async function y(e){const{data:{results:t,error:n}}=await(0,i.openmrsFetch)(`/ws/rest/v1/cohortm/cohortmember?patient=${e}&v=full`);if(n)throw n;return t.filter((e=>!e.voided))}function b(e){return(0,i.openmrsFetch)(`/ws/fhir2/R4/Observation?code=${a.Ln}&value-concept=${a.$l}&patient=${e}&_sort=-date&_count=1`).then((({data:e})=>e.entry?.length?e.entry[0].resource.valueCodeableConcept.coding[0].display:"Negative"))}function E(e){return(0,i.openmrsFetch)(`/ws/fhir2/R4/Observation?code=${a.Ws}&value-concept=${a.Ws}&patient=${e}&_sort=-date&_count=1`).then((({data:e})=>e.entry?.length?e.entry[0].resource.valueCodeableConcept.coding[0].display:"Negative"))}function w(e,t){const n=`encounterType=${t}&patient=${e}`;return(0,i.openmrsFetch)(`/ws/rest/v1/encounter?${n}&v=${a.Ib}`).then((({data:e})=>e.results.length?e.results[e.results.length-1]:null))}function S(e){return(0,i.openmrsFetch)(`/ws/rest/v1/concept/${e}/name?limit=1`).then((({data:e})=>{if(e.results.length)return e.results[e.results.length-1].display}))}},79083:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var i=n(67627),o=n(20160),r=n(10364),a=n(47500),s=n(58804),l=n(67004),c=n(62427),h=n(33783),u=n(95720),m=n.n(u);const d=({tableHeaders:e,message:t})=>m().createElement("div",{style:{marginLeft:"-16px"}},m().createElement(i.ZP,{rows:[],headers:e,isSortable:!0,size:"short",useZebraStyles:!0},(({headers:n,getHeaderProps:i,getTableProps:u})=>m().createElement(o.Z,null,m().createElement(r.Z,u(),m().createElement(a.Z,null,m().createElement(s.Z,null,n.map((e=>m().createElement(l.Z,i({header:e,isSortable:e.isSortable}),e.header?.content??e.header))))),m().createElement(c.Z,null,m().createElement(s.Z,null,m().createElement(h.Z,{colSpan:e.length},t))))))))},23683:(e,t,n)=>{"use strict";n.r(t),n.d(t,{AddPatientToListModal:()=>d,default:()=>p});var i=n(9035),o=n(56086),r=n(5787),a=n(838),s=n(26879),l=n(64631),c=n(18769),h=n(95720),u=n.n(h),m=n(29270);const d=({isOpen:e,close:t,patientUuid:n,cohortType:d,title:p})=>{const[_,g]=(0,h.useState)([]),[f,v]=(0,h.useState)([]),[y,b]=(0,h.useState)([]),[E,w]=(0,h.useState)(!0),[S,x]=(0,h.useState)(null),[T,$]=(0,h.useState)(!1);(0,h.useEffect)((()=>{Promise.all([(0,m.k$)(d),(0,m.Jf)(n)]).then((([e,t])=>{const n=e.filter((e=>!t.some((t=>e.uuid==t.cohort.uuid))));g(n),b(t),v(t.map((e=>e.cohort))),w(!1)}))}),[d]);const k=(0,h.useMemo)((()=>{const e=_.map(((e,t)=>u().createElement(o.Z,{labelText:e.name,value:e.uuid,id:e.uuid,key:t})));return e.push(u().createElement(o.Z,{labelText:"None",value:"none",id:"none"})),e}),[_]),F=(0,h.useMemo)((()=>u().createElement(u().Fragment,null,u().createElement(r.Z,{width:"60%"}),u().createElement(r.Z,{width:"60%"}))),[]),Z=(0,h.useMemo)((()=>f.length?u().createElement(a.Z,{style:{marginLeft:"1rem",marginBottom:"1rem",color:"#c6c6c6"}},f.map(((e,t)=>u().createElement(s.Z,{key:t},e.name)))):u().createElement("div",{style:{marginBottom:"1rem"}},u().createElement("span",{style:{fontSize:".875rem",color:"#c6c6c6"}},"-- None --"))),[f]),N=(0,h.useCallback)((()=>{$(!0),"none"==S?Promise.all(y.map((e=>(0,m.zj)(e.uuid)))).then((e=>{(0,i.showToast)({kind:"success",critical:!0,description:"Patient was successfully removed from all lists"}),t()})).catch((e=>{$(!1)})):(0,m.JH)(n,S).then((e=>{e.ok?((0,i.showToast)({kind:"success",critical:!0,description:`Patient was successfully added to ${e.data.cohort.display}`}),t()):$(!1)}))}),[S,n,t,y]);return u().createElement(u().Fragment,null,u().createElement(l.Z,{style:{zIndex:99999},open:e,modalHeading:p||"Add Patient to list",modalLabel:"",onRequestClose:t,passiveModal:!1,primaryButtonText:"Confirm",secondaryButtonText:"Cancel",onRequestSubmit:N,primaryButtonDisabled:E||null==S||T||"none"==S&&0==y.length},u().createElement("div",{style:{paddingLeft:"1rem",marginBottom:"2rem"}},u().createElement("p",{style:{marginBottom:"1rem"}},"Currently added to the list(s) below"),E?F:Z,u().createElement("p",{style:{marginBottom:"1rem"}},"Select the list where to add the client"),E?F:u().createElement(c.Z,{legendText:"",name:"patient-lists",orientation:"vertical",onChange:e=>x(e.toString())},k))))},p=({patientUuid:e,displayText:t})=>{const[,n]=(0,i.useCurrentPatient)(e),[o,r]=(0,h.useState)(!1),a=(0,h.useMemo)((()=>n?`${n.name[0].given.join(" ")} ${n.name[0].family}`:"Patient"),[n]);return u().createElement(u().Fragment,null,o&&u().createElement(d,{isOpen:o,close:()=>r(!1),patientUuid:e,title:`Add ${a} to list`}),u().createElement("li",{className:"bx--overflow-menu-options__option"},u().createElement("button",{className:"bx--overflow-menu-options__btn",role:"menuitem",title:"Add to list","data-floating-menu-primary-focus":!0,onClick:()=>r(!0),style:{maxWidth:"100vw"}},u().createElement("span",{className:"bx--overflow-menu-options__option-content"},t||"Add to list"))))}},52659:(e,t,n)=>{"use strict";n.d(t,{Z:()=>O});var i=n(9035),o=n(95720),r=n.n(o),a=n(29270),s=n(19034),l=n.n(s),c=n(79083),h=n(7896),u=n(59740),m=n(13980),d=n.n(m),p=n(72779),_=n.n(p),g=n(618),f=n(63346),v=n(93597),y=n(89623),b=n(60330),E=["className","success","status","iconDescription","description","onSuccess","successDelay"];function w(e){var t=e.className,n=e.success,i=e.status,o=void 0===i?n?"finished":"active":i,a=e.iconDescription,s=e.description,l=e.onSuccess,c=e.successDelay,m=(0,u.Z)(e,E),d=(0,b.A)(),p=_()("".concat(d,"--inline-loading"),t),v=r().createElement("div",{className:"".concat(d,"--inline-loading__text")},s),w="error"===o?r().createElement(g.ycZ,{className:"".concat(d,"--inline-loading--error")},r().createElement("title",null,a)):"finished"===o?(setTimeout((function(){l&&l()}),c),r().createElement(f.Y3p,{className:"".concat(d,"--inline-loading__checkmark-container")},r().createElement("title",null,a))):"inactive"===o||"active"===o?r().createElement(y.Z,{small:!0,description:a,withOverlay:!1,active:"active"===o}):void 0,S=w&&r().createElement("div",{className:"".concat(d,"--inline-loading__animation")},w);return r().createElement("div",(0,h.Z)({className:p},m,{"aria-live":"assertive"}),S,s&&v)}w.propTypes={className:d().string,description:d().node,iconDescription:d().string,onSuccess:d().func,status:d().oneOf(["inactive","active","finished","error"]),success:(0,v.Z)(d().bool,'\nThe prop `success` for InlineLoading has been deprecated in favor of `status`. Please use `status="finished"` instead.'),successDelay:d().number},w.defaultProps={successDelay:1500};var S=n(43190),x=n(62367),T=n(23683),$=n(18394),k=n(63707),F=n(63778),Z=n(91354),N=n.n(Z),D=n(31583),L=n.n(D),H=n(47378),M=n.n(H),z=n(55993),C=n.n(z),P=n(54154),Y=n.n(P),A=n(8141),R=n.n(A),U=n(18268),I=n.n(U),V={};V.styleTagTransform=R(),V.setAttributes=C(),V.insert=M().bind(null,"head"),V.domAPI=L(),V.insertStyleElement=Y(),N()(I(),V);const j=I()&&I().locals?I().locals:void 0,B=[{key:"name",header:"Name",getValue:e=>e.name,link:{getUrl:e=>e.url}},{key:"timeAddedToList",header:"Time Added To List",getValue:e=>e.timeAddedToList},{key:"waitingTime",header:"Waiting Time",getValue:e=>e.waitingTime},{key:"gender",header:"Sex",getValue:e=>e.gender},{key:"location",header:"Location",getValue:e=>e.location},{key:"age",header:"Age",getValue:e=>e.age},{key:"phoneNumber",header:"Phone Number",getValue:e=>e.phoneNumber},{key:"hivResult",header:"HIV Result",getValue:e=>e.hivResult},{key:"actions",header:"Actions",getValue:e=>e.actions}],W=({patientUuid:e,launchableForm:t,form:n,encounterType:s})=>{const[l,c]=(0,o.useState)(t.actionText),[h,u]=(0,o.useState)(null),[m,d]=(0,o.useState)(!1),p=t.editActionText||"Continue encounter";return(0,o.useEffect)((()=>{t.editLatestEncounter&&s&&!h?(d(!0),(0,a.sy)(e,s).then((e=>{e&&(c(p),u(e.uuid)),d(!1)}))):d(!1)}),[]),r().createElement(r().Fragment,null,m?r().createElement(w,{style:{margin:"0 auto",width:"16px"}}):r().createElement(S.Z,{itemText:l,onClick:()=>{h?(0,k.Lm)(n,h):(0,k.aT)(n),(0,i.navigate)({to:`${$.sb}${e}/chart/hts-summary`})}}))},O=({cohortId:e,cohortSlotName:t,isReportingCohort:n,otherColumns:s,excludeColumns:h,queryParams:u,associatedEncounterType:m,launchableForm:d})=>{const[p,_]=(0,o.useState)([]),[g,f]=(0,o.useState)(!0),[v,y]=(0,o.useState)(!1),[b,E]=(0,o.useState)(!1),[w,S]=(0,o.useState)(!1),[k,Z]=(0,o.useState)(1),[N,D]=(0,o.useState)(10),[L,H]=(0,o.useState)(0),[M,z]=(0,o.useState)(null),[C,P]=(0,o.useState)(0),[Y,A]=(0,o.useState)([]),[R,U]=(0,o.useState)([]),I=d&&(0,F.R3)(d.package,d.name),V=e=>{const t=n?e.person.uuid:e.patient.uuid,i=d?.targetDashboard?`/${d?.targetDashboard}`:"";return{uuid:t,id:n?e.identifiers[0].identifier:e.patient.identifiers[0].identifier,age:n?e.person.age:e.patient.person.age,name:n?e.person.display:e.patient.person.display,birthdate:n?l()(e.person.birthdate).format("DD-MMM-YYYY"):l()(e.patient.person.birthdate).format("DD-MMM-YYYY"),gender:n?"M"==e.person.gender?"Male":"Female":"M"==e.patient.person.gender?"Male":"Female",birthday:n?e.person.birthdate:e.patient.person.birthdate,url:`${$.sb}${t}/chart${i}`}},O=(e,t)=>{const i=n?e.person.uuid:e.patient.uuid;return{timeAddedToList:n?null:l()(e.startDate).format("LL"),waitingTime:n?null:l()(e.startDate).fromNow(),location:t&&t.name,phoneNumber:"0700xxxxxx",hivResult:"None",actions:r().createElement(x.Z,{flipped:!0},I?r().createElement(W,{patientUuid:i,launchableForm:d,form:(0,F.NL)(d.intent,I),encounterType:d.encounterType||m,key:i}):r().createElement(r().Fragment,null),r().createElement(T.default,{patientUuid:i,displayText:"Move to list"}))}},q=(e,t,n)=>{let i=[];for(let o=t;o<t+n;o++)o<e.length&&i.push(e[o]);_(i)};(0,o.useEffect)((()=>{n?(0,a.am)(e,u).then((e=>{const t=e.map((({data:e})=>({...V(e),...O(e,null)})));U(t),q(t,0,N),f(!1),y(!0)})):(0,a.q3)(e,"full").then((e=>{const t=e.cohortMembers.map((t=>({...V(t),...O(t,e.location)})));U(t),q(t,0,N),f(!1),y(!0)}))}),[e]),(0,o.useEffect)((()=>{p.length&&m&&!b&&Promise.all(p.map((e=>(0,a.sy)(e.uuid,m)))).then((e=>{e.forEach(((e,t)=>{p[t].latestEncounter=e,t==p.length-1&&(_([...p]),E(!0))}))})),H(R.length)}),[v]),(0,o.useEffect)((()=>{const e=!h||!h.includes("hivResult");!b&&m||w||!e||Promise.all(p.map((e=>(0,a.kT)(e.uuid)))).then((e=>{e.forEach(((e,t)=>{p[t].hivResult=e,t==p.length-1&&(_([...p]),S(!0))}))}))}),[p,b]);const J=(0,o.useMemo)((()=>({usePagination:!0,currentPage:k,onChange:({pageSize:e,page:t})=>(q(R,(t-1)*e,e),Z(t),D(e),null),pageSize:N,totalItems:L})),[k,N,L]),X=(0,o.useCallback)((e=>{z(e);const t=((e,t)=>t.filter((t=>-1!==t.name.toLowerCase().search(e.toLowerCase()))))(e,p);return A(t),!0}),[p]);(0,o.useEffect)((()=>((0,i.attach)(t,"patient-table"),()=>{(0,i.detach)(t,"patient-table")})));const G=(0,o.useMemo)((()=>{let e=[...B];h&&(e=B.filter((e=>!h.includes(e.key)))),s&&s.forEach((t=>{t.index?e.splice(t.index,0,t):e.push(t)}));const t=e.findIndex((e=>"actions"==e.key));if(t){const n=e[t];e.splice(t,1),e.push(n)}return{patients:M?Y:p,columns:e,isLoading:g,search:{placeHolder:"Search client list",onSearch:e=>{e||z("")},currentSearchTerm:M,otherSearchProps:{onKeyDown:e=>{13==e.keyCode&&X(e.target.value)},autoFocus:!0}},pagination:J,autoFocus:!0}}),[M,Y,p,X,J,g,h,s]);return(0,o.useEffect)((()=>{P(C+1)}),[G]),r().createElement("div",{className:j.table1},g||p.length?r().createElement(r().Fragment,null,r().createElement(i.ExtensionSlot,{extensionSlotName:t,state:G,key:C})):r().createElement(c.Z,{tableHeaders:G.columns,message:"There are no patients in this list."}))}},18268:(e,t,n)=>{(t=n(82609)(!1)).push([e.id,":root{--brand-01: #005d5d;--brand-02: #004144;--brand-light-01: #007d79}.esm-ohri-hiv__patient-list-cohort__productiveHeading01___2xzUz{font-size:.875rem;font-weight:600;line-height:1.29;letter-spacing:.16px}.esm-ohri-hiv__patient-list-cohort__productiveHeading02___2XlYI{font-size:1rem;font-weight:600;line-height:1.375;letter-spacing:0}.esm-ohri-hiv__patient-list-cohort__productiveHeading03___2U9JT{font-size:1.25rem;font-weight:400;line-height:1.4;letter-spacing:0}.esm-ohri-hiv__patient-list-cohort__productiveHeading04___1sndE{font-size:1.75rem;font-weight:400;line-height:1.29;letter-spacing:0}.esm-ohri-hiv__patient-list-cohort__productiveHeading05___3NNLG{font-size:2rem;font-weight:400;line-height:1.25;letter-spacing:0}.esm-ohri-hiv__patient-list-cohort__productiveHeading06___1tgd3{font-size:2rem;font-weight:300;line-height:1.199;letter-spacing:0}.esm-ohri-hiv__patient-list-cohort__bodyShort01___aFwIr{font-size:.875rem;font-weight:400;line-height:1.29;letter-spacing:.16px}.esm-ohri-hiv__patient-list-cohort__helperText01___1Ezg9{font-size:.75rem;line-height:1.34;letter-spacing:.32px}.esm-ohri-hiv__patient-list-cohort__bodyShort02___1Z2oX{font-size:1rem;font-weight:400;line-height:1.375;letter-spacing:0}.esm-ohri-hiv__patient-list-cohort__bodyLong01___KEHaG{font-size:.875rem;font-weight:400;line-height:1.43;letter-spacing:.16px}.esm-ohri-hiv__patient-list-cohort__bodyLong02___3ZaxR{font-size:1rem;font-weight:400;line-height:1.5;letter-spacing:0}.esm-ohri-hiv__patient-list-cohort__label01___2YUAj{font-size:.75rem;font-weight:400;line-height:1.34;letter-spacing:.32px}.esm-ohri-hiv__patient-list-cohort__text01___2p1jb{color:#161616}.esm-ohri-hiv__patient-list-cohort__text02___12VaQ{color:#525252}aside{background-color:#fff !important}.esm-ohri-hiv__patient-list-cohort__contentSwitcherWrapper___1b2pD{padding-bottom:50px}.esm-ohri-hiv__patient-list-cohort__contentSwitcherWrapper___1b2pD>div{width:150px;float:right}.esm-ohri-hiv__patient-list-cohort__contentSwitcherWrapper___1b2pD button[aria-selected=true]{background-color:#007d79}",""]),t.locals={productiveHeading01:"esm-ohri-hiv__patient-list-cohort__productiveHeading01___2xzUz",productiveHeading02:"esm-ohri-hiv__patient-list-cohort__productiveHeading02___2XlYI",productiveHeading03:"esm-ohri-hiv__patient-list-cohort__productiveHeading03___2U9JT",productiveHeading04:"esm-ohri-hiv__patient-list-cohort__productiveHeading04___1sndE",productiveHeading05:"esm-ohri-hiv__patient-list-cohort__productiveHeading05___3NNLG",productiveHeading06:"esm-ohri-hiv__patient-list-cohort__productiveHeading06___1tgd3",bodyShort01:"esm-ohri-hiv__patient-list-cohort__bodyShort01___aFwIr",helperText01:"esm-ohri-hiv__patient-list-cohort__helperText01___1Ezg9",bodyShort02:"esm-ohri-hiv__patient-list-cohort__bodyShort02___1Z2oX",bodyLong01:"esm-ohri-hiv__patient-list-cohort__bodyLong01___KEHaG",bodyLong02:"esm-ohri-hiv__patient-list-cohort__bodyLong02___3ZaxR",label01:"esm-ohri-hiv__patient-list-cohort__label01___2YUAj",text01:"esm-ohri-hiv__patient-list-cohort__text01___2p1jb",text02:"esm-ohri-hiv__patient-list-cohort__text02___12VaQ",contentSwitcherWrapper:"esm-ohri-hiv__patient-list-cohort__contentSwitcherWrapper___1b2pD"},e.exports=t}}]);
//# sourceMappingURL=2659.js.map