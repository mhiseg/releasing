(self.webpackChunkopenmrs_ohri_app=self.webpackChunkopenmrs_ohri_app||[]).push([[3118],{59670:(A,e,t)=>{"use strict";t.d(e,{AN:()=>i,Aq:()=>k,B1:()=>$,Ig:()=>f,JH:()=>h,Jf:()=>y,Lq:()=>d,V5:()=>l,Xm:()=>g,am:()=>b,k$:()=>j,kT:()=>v,q3:()=>m,sy:()=>w,ue:()=>c,zj:()=>p});var s=t(91208),a=t(90421),n=t.n(a),r=t(9588);const o="/ws/rest/v1/";function c(A){return(0,s.openmrsFetch)(`/ws/fhir2/R4/Encounter?patient=${A}&_sort=-date&_count=1`)}function d(A=1,e=10){return(0,s.openmrsFetch)(`/ws/fhir2/R4/Patient?_getpagesoffset=${A}&_count=${e}`)}function i(){let A=n()().format("YYYY-MM-DD");return(0,s.openmrsFetch)(`/ws/fhir2/R4/Encounter?date=${A}`).then((({data:A})=>A.entry?.length?u(A):[]))}function l(A,e,t){let a=n()().format("YYYY-MM-DD"),r=n()().subtract(t,"days").format("YYYY-MM-DD");return(0,s.openmrsFetch)(`/ws/fhir2/R4/Observation?code=${A}${e?`&value-concept=${e}`:""}${t?`&_lastUpdated=ge${r}&_lastUpdated=le${a}`:""}`).then((({data:A})=>A.entry?.length?u(A):[]))}function u(A){let e=A.entry.map((A=>A.resource.subject.reference));return e=new Set([...e]),e=Array.from(e),Promise.all(e.map((A=>(0,s.openmrsFetch)("/ws/fhir2/R4/"+A))))}async function m(A,e){const{data:t}=await(0,s.openmrsFetch)(`/ws/rest/v1/cohortm/cohort/${A}${e?`?v=${e}`:""}`);return t.cohortMembers=t.cohortMembers.filter((A=>!A.voided)),t}async function f(A,e){const t=e?e.join("&"):"",a=t?`reportingrest/cohort/${A}?${t}`:`reportingrest/cohort/${A}`,{data:n}=await(0,s.openmrsFetch)(o+a);return n}async function b(A,e){const t=e?e.join("&"):"",a=t?`reportingrest/cohort/${A}?${t}`:`reportingrest/cohort/${A}`,{data:n}=await(0,s.openmrsFetch)(o+a);return Promise.all(n.members.map((A=>(0,s.openmrsFetch)(`/ws/rest/v1/patient/${A.uuid}?v=full`))))}async function j(A){const{data:{results:e,error:t}}=await(0,s.openmrsFetch)("/ws/rest/v1/cohortm/cohort?v=custom:(uuid,name,voided)"+(A?`&cohortType=${A}`:""));if(t)throw t;return e.filter((A=>!A.voided))}function h(A,e){return(0,s.openmrsFetch)("/ws/rest/v1/cohortm/cohortmember",{method:"POST",headers:{"Content-Type":"application/json"},body:{patient:A,cohort:e,startDate:new Date}})}function p(A){return(0,s.openmrsFetch)(`/ws/rest/v1/cohortm/cohortmember/${A}`,{method:"DELETE"})}async function y(A){const{data:{results:e,error:t}}=await(0,s.openmrsFetch)(`/ws/rest/v1/cohortm/cohortmember?patient=${A}&v=full`);if(t)throw t;return e.filter((A=>!A.voided))}function v(A){return(0,s.openmrsFetch)(`/ws/fhir2/R4/Observation?code=${r.Ln}&value-concept=${r.$l}&patient=${A}&_sort=-date&_count=1`).then((({data:A})=>A.entry?.length?A.entry[0].resource.valueCodeableConcept.coding[0].display:""))}function g(A){return(0,s.openmrsFetch)(`/ws/fhir2/R4/Observation?code=${r.Ws}&value-concept=${r.Ws}&patient=${A}&_sort=-date&_count=1`).then((({data:A})=>A.entry?.length?A.entry[0].resource.valueCodeableConcept.coding[0].display:""))}function w(A,e){const t=`encounterType=${e}&patient=${A}`;return(0,s.openmrsFetch)(`/ws/rest/v1/encounter?${t}&v=${r.Ib}`).then((({data:A})=>A.results.length?A.results[A.results.length-1]:null))}function k(){return(0,s.openmrsFetch)(`/ws/rest/v1/reportingrest/cohort/${r.pj}`).then((({data:A})=>{if(A.members?.length){let e=A.members.map((A=>A.uuid));return e=new Set([...e]),e=Array.from(e),Promise.all(e.map((A=>(0,s.openmrsFetch)("/ws/fhir2/R4//Person/"+A))))}return[]}))}function $(A){return(0,s.openmrsFetch)(`/ws/rest/v1/concept/${A}/name?limit=1`).then((({data:A})=>{if(A.results.length)return A.results[A.results.length-1].display}))}},64874:(A,e,t)=>{"use strict";t.r(e),t.d(e,{AddPatientToListModal:()=>m,default:()=>f});var s=t(91208),a=t(18137),n=t(89908),r=t(81658),o=t(45047),c=t(94115),d=t(81273),i=t(50576),l=t.n(i),u=t(59670);const m=({isOpen:A,close:e,patientUuid:t,cohortType:m,title:f,excludeCohorts:b})=>{const[j,h]=(0,i.useState)([]),[p,y]=(0,i.useState)([]),[v,g]=(0,i.useState)([]),[w,k]=(0,i.useState)(!0),[$,E]=(0,i.useState)(null),[z,F]=(0,i.useState)(!1);(0,i.useEffect)((()=>{Promise.all([(0,u.k$)(m),(0,u.Jf)(t)]).then((([A,e])=>{let t=A.filter((A=>!e.some((e=>A.uuid==e.cohort.uuid))));b&&b.length&&(t=t.filter((A=>!b.includes(A.name)))),h(t),g(e),y(e.map((A=>A.cohort))),k(!1)}))}),[m]);const _=(0,i.useMemo)((()=>{const A=j.map(((A,e)=>l().createElement(a.Z,{labelText:A.name,value:A.uuid,id:A.uuid,key:e})));return A.push(l().createElement(a.Z,{labelText:"None",value:"none",id:"none"})),A}),[j]),P=(0,i.useMemo)((()=>l().createElement(l().Fragment,null,l().createElement(n.Z,{width:"60%"}),l().createElement(n.Z,{width:"60%"}))),[]),x=(0,i.useMemo)((()=>p.length?l().createElement(r.Z,{style:{marginLeft:"1rem",marginBottom:"1rem",color:"#c6c6c6"}},p.map(((A,e)=>l().createElement(o.Z,{key:e},A.name)))):l().createElement("div",{style:{marginBottom:"1rem"}},l().createElement("span",{style:{fontSize:".875rem",color:"#c6c6c6"}},"-- None --"))),[p]),C=(0,i.useCallback)((()=>{F(!0),"none"==$?Promise.all(v.map((A=>(0,u.zj)(A.uuid)))).then((A=>{(0,s.showToast)({kind:"success",critical:!0,description:"Patient was successfully removed from all lists"}),e()})).catch((A=>{F(!1)})):(0,u.JH)(t,$).then((A=>{A.ok?((0,s.showToast)({kind:"success",critical:!0,description:`Patient was successfully added to ${A.data.cohort.display}`}),e()):F(!1)}))}),[$,t,e,v]);return l().createElement(l().Fragment,null,l().createElement(c.Z,{style:{zIndex:99999},open:A,modalHeading:f||"Add Patient to list",modalLabel:"",onRequestClose:e,passiveModal:!1,primaryButtonText:"Confirm",secondaryButtonText:"Cancel",onRequestSubmit:C,primaryButtonDisabled:w||null==$||z||"none"==$&&0==v.length},l().createElement("div",{style:{paddingLeft:"1rem",marginBottom:"2rem"}},l().createElement("p",{style:{marginBottom:"1rem"}},"Currently added to the list(s) below"),w?P:x,l().createElement("p",{style:{marginBottom:"1rem"}},"Select the list where to add the client"),w?P:l().createElement(d.Z,{legendText:"",name:"patient-lists",orientation:"vertical",onChange:A=>E(A.toString())},_))))},f=({patientUuid:A,displayText:e,excludeCohorts:t})=>{const{patient:a}=(0,s.usePatient)(A),[n,r]=(0,i.useState)(!1),o=(0,i.useMemo)((()=>a?`${a.name[0].given.join(" ")} ${a.name[0].family}`:"Patient"),[a]);return l().createElement(l().Fragment,null,n&&l().createElement(m,{isOpen:n,close:()=>r(!1),patientUuid:A,title:`Add ${o} to list`,excludeCohorts:t}),l().createElement("li",{className:"bx--overflow-menu-options__option"},l().createElement("button",{className:"bx--overflow-menu-options__btn",role:"menuitem",title:"Add to list",onClick:()=>r(!0),style:{maxWidth:"100vw"}},l().createElement("span",{className:"bx--overflow-menu-options__option-content"},e||"Add to list"))))}},9588:(A,e,t)=>{"use strict";t.d(e,{$l:()=>r,BN:()=>k,Cf:()=>M,Dn:()=>Z,EK:()=>$,ES:()=>uA,FD:()=>jA,FS:()=>P,GZ:()=>fA,Gc:()=>g,H3:()=>x,I0:()=>W,II:()=>z,IX:()=>mA,Ib:()=>a,J2:()=>u,JN:()=>v,KL:()=>Y,Lm:()=>tA,Ln:()=>n,Lw:()=>j,Mn:()=>EA,P:()=>O,P0:()=>gA,PG:()=>l,PH:()=>I,PN:()=>S,Pb:()=>FA,Pl:()=>X,R9:()=>B,RA:()=>wA,Rl:()=>oA,TJ:()=>N,UT:()=>m,V3:()=>E,VJ:()=>H,WK:()=>i,WS:()=>sA,Ws:()=>o,Yn:()=>eA,Z7:()=>yA,ZJ:()=>c,_r:()=>kA,be:()=>G,bg:()=>iA,dw:()=>J,eE:()=>U,eF:()=>b,e_:()=>rA,ep:()=>_,es:()=>q,ev:()=>V,f7:()=>p,fR:()=>y,gi:()=>R,hf:()=>C,i6:()=>dA,iK:()=>f,k0:()=>AA,lU:()=>L,lo:()=>F,mV:()=>d,mZ:()=>aA,m_:()=>cA,pS:()=>nA,pj:()=>w,po:()=>D,qC:()=>vA,qv:()=>Q,rb:()=>hA,sb:()=>s,t4:()=>K,t9:()=>pA,wV:()=>bA,xB:()=>h,xg:()=>T,yL:()=>lA,z9:()=>zA,zM:()=>$A});const s="${openmrsSpaBase}/patient/",a="custom:(uuid,encounterDatetime,location:(uuid,name),patient:(uuid,display),encounterProviders:(uuid,provider:(uuid,name)),obs:(uuid,obsDatetime,voided,groupMembers,concept:(uuid,name:(uuid,name)),value:(uuid,name:(uuid,name),names:(uuid,conceptNameType,name))))",n="e16b0068-b6a2-46b7-aba9-e3be00a7b4ab",r="6378487b-584d-4422-a6a6-56c8830873ff",o="a5261998-c635-4e27-870c-e837faf6cf9a",c="e8e8fe71-adbb-48e7-b531-589985094d30",d="1065AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",i="e4d801f0-e2fd-11eb-8212-7d7156e00a1f",l="cdee0abe-e471-11eb-8212-7d7156e00a1f",u="01af2130-e472-11eb-8212-7d7156e00a1f",m="51bec6f7-df43-426e-a83e-c1ae5501372f",f="ccbcf6d8-77b7-44a5-bb43-d352478ea4e9",b="ec373b01-4ba3-488e-a322-9dd6a50cfdf7",j="166aa2b1-ce55-4d16-9643-ca9d2e2694ea",h="b5d52da9-10c2-43af-ae23-552acc5e445b",p="1523b1e5-b6d0-44fb-bd9e-c91bfefb4d1c",y="159951AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",v="069f6dfe-88c1-4a45-a894-0d99549c8718",g="a845f3e6-4432-4de4-9fff-37fa270b1a06",w="afb0d950-48fd-44d7-ae2c-79615cd125f0",k="7e54cd64-f9c3-11eb-8e6a-57478ce139b0",$="160555AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",E="83e40f2c-c316-43e6-a12e-20a338100281",z="d3d4ae96-8c8a-43db-a9dc-dac951f5dcb3",F="160554AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",_="160540AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",P="20efadf9-86d3-4498-b3ab-7da4dad9c429",x="cb0a65a7-0587-477e-89b9-cf2fd144f1d4",C="163137AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",T="8a9809e9-8a0b-4e0e-b1f6-80b0cbbe361b",S="dfbe256e-30ba-4033-837a-2e8477f2e7cd",M="5096AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",D="c0661c0f-348b-4941-812b-c531a0a67f2e",R="79c1f50f-f77d-42e2-ad2a-d29304dde2fe",L="253a43d3-c99e-415c-8b78-ee7d4d3c1d54",Y="5b37ce7a-c55e-4226-bdc8-5af04025a6de",B="a77d3e7f-5c8f-4074-a207-77a70e197b0c",N="253a43d3-c99e-415c-8b78-ee7d4d3c1d54",Z="ae46f4b1-c15d-4bba-ab41-b9157b82b0ce",O="a845f3e6-4432-4de4-9fff-37fa270b1a06",q="069f6dfe-88c1-4a45-a894-0d99549c8718",J="244b0dc0-eb1b-46ae-b62a-f580345d4f46",U="160753AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",I="de3bc9b7-05b5-41b6-a38d-8d2eec646c4f",W="162078AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",H="a77d3e7f-5c8f-4074-a207-77a70e197b0c",V="3f4ee14b-b4ab-4597-9fe9-406883b63d76",K="cbcbb029-f11f-4437-9d53-1d0f0a170433",G="161934AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",X="6681366c-2174-489a-b951-13a1404935bf",Q="163724AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",AA="5b37ce7a-c55e-4226-bdc8-5af04025a6de",eA="1410AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",tA="97bf47f9-0ba7-4d00-99bd-8939cd586072",sA="e41fbe17-4aee-4a44-950b-6676d6e0ede2",aA="0cc868bd-e9dd-4b59-b278-f923afe22d82",nA="f0d85da0-c235-4540-a0d1-63640594f98b",rA="74bf4fe6-8fdb-4228-be39-680a93a9cf6d",oA="159599AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",cA="164515AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",dA="7557d77c-172b-4673-9335-67a38657dd01",iA="162572AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",lA="164516AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",uA="164431AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",mA="160568AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",fA="160562AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",bA="163513AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",jA=" 15272be5-ae9c-4278-a303-4b8907eae73b",hA="657AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",pA="5497AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",yA="1543AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",vA="ef973f1f-557f-4620-acf5-9c4c18bf1eda",gA="e329cdf4-4eeb-4821-85ec-80ec4b503de0",wA="111c2104-991d-4b58-a30e-ce84bb275534",kA="3044916a-7e5f-478b-9091-803233f27f91",$A="163137AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",EA="162724AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",zA="160649AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",FA="797e0073-1f3f-46b1-8b1a-8cdad134d2b3"},46700:(A,e,t)=>{var s={"./af":89127,"./af.js":89127,"./ar":67006,"./ar-dz":47730,"./ar-dz.js":47730,"./ar-kw":63215,"./ar-kw.js":63215,"./ar-ly":96968,"./ar-ly.js":96968,"./ar-ma":52572,"./ar-ma.js":52572,"./ar-sa":68319,"./ar-sa.js":68319,"./ar-tn":75629,"./ar-tn.js":75629,"./ar.js":67006,"./az":76722,"./az.js":76722,"./be":15958,"./be.js":15958,"./bg":74921,"./bg.js":74921,"./bm":17293,"./bm.js":17293,"./bn":52288,"./bn-bd":9907,"./bn-bd.js":9907,"./bn.js":52288,"./bo":82127,"./bo.js":82127,"./br":43922,"./br.js":43922,"./bs":78932,"./bs.js":78932,"./ca":13246,"./ca.js":13246,"./cs":18208,"./cs.js":18208,"./cv":26492,"./cv.js":26492,"./cy":51818,"./cy.js":51818,"./da":12285,"./da.js":12285,"./de":6454,"./de-at":3082,"./de-at.js":3082,"./de-ch":9076,"./de-ch.js":9076,"./de.js":6454,"./dv":9016,"./dv.js":9016,"./el":83093,"./el.js":83093,"./en-au":85535,"./en-au.js":85535,"./en-ca":12610,"./en-ca.js":12610,"./en-gb":78386,"./en-gb.js":78386,"./en-ie":35272,"./en-ie.js":35272,"./en-il":73563,"./en-il.js":73563,"./en-in":68604,"./en-in.js":68604,"./en-nz":82140,"./en-nz.js":82140,"./en-sg":28217,"./en-sg.js":28217,"./eo":59823,"./eo.js":59823,"./es":30312,"./es-do":69546,"./es-do.js":69546,"./es-mx":69089,"./es-mx.js":69089,"./es-us":37781,"./es-us.js":37781,"./es.js":30312,"./et":58563,"./et.js":58563,"./eu":64003,"./eu.js":64003,"./fa":40463,"./fa.js":40463,"./fi":68941,"./fi.js":68941,"./fil":51742,"./fil.js":51742,"./fo":40006,"./fo.js":40006,"./fr":32346,"./fr-ca":60761,"./fr-ca.js":60761,"./fr-ch":10982,"./fr-ch.js":10982,"./fr.js":32346,"./fy":24934,"./fy.js":24934,"./ga":22670,"./ga.js":22670,"./gd":41733,"./gd.js":41733,"./gl":72271,"./gl.js":72271,"./gom-deva":75537,"./gom-deva.js":75537,"./gom-latn":70763,"./gom-latn.js":70763,"./gu":84125,"./gu.js":84125,"./he":81651,"./he.js":81651,"./hi":18602,"./hi.js":18602,"./hr":8641,"./hr.js":8641,"./hu":3079,"./hu.js":3079,"./hy-am":60443,"./hy-am.js":60443,"./id":8963,"./id.js":8963,"./is":11343,"./is.js":11343,"./it":28072,"./it-ch":33115,"./it-ch.js":33115,"./it.js":28072,"./ja":58183,"./ja.js":58183,"./jv":71064,"./jv.js":71064,"./ka":81999,"./ka.js":81999,"./kk":29360,"./kk.js":29360,"./km":43667,"./km.js":43667,"./kn":41882,"./kn.js":41882,"./ko":42401,"./ko.js":42401,"./ku":42583,"./ku.js":42583,"./ky":66751,"./ky.js":66751,"./lb":81193,"./lb.js":81193,"./lo":80769,"./lo.js":80769,"./lt":44409,"./lt.js":44409,"./lv":9262,"./lv.js":9262,"./me":97514,"./me.js":97514,"./mi":83434,"./mi.js":83434,"./mk":70610,"./mk.js":70610,"./ml":71654,"./ml.js":71654,"./mn":86730,"./mn.js":86730,"./mr":47196,"./mr.js":47196,"./ms":20487,"./ms-my":14750,"./ms-my.js":14750,"./ms.js":20487,"./mt":58856,"./mt.js":58856,"./my":21240,"./my.js":21240,"./nb":12121,"./nb.js":12121,"./ne":89802,"./ne.js":89802,"./nl":80737,"./nl-be":93497,"./nl-be.js":93497,"./nl.js":80737,"./nn":18153,"./nn.js":18153,"./oc-lnc":55173,"./oc-lnc.js":55173,"./pa-in":10499,"./pa-in.js":10499,"./pl":53629,"./pl.js":53629,"./pt":95702,"./pt-br":23312,"./pt-br.js":23312,"./pt.js":95702,"./ro":10719,"./ro.js":10719,"./ru":33778,"./ru.js":33778,"./sd":25545,"./sd.js":25545,"./se":35811,"./se.js":35811,"./si":12015,"./si.js":12015,"./sk":21587,"./sk.js":21587,"./sl":20147,"./sl.js":20147,"./sq":36821,"./sq.js":36821,"./sr":63019,"./sr-cyrl":37792,"./sr-cyrl.js":37792,"./sr.js":63019,"./ss":15078,"./ss.js":15078,"./sv":13593,"./sv.js":13593,"./sw":57655,"./sw.js":57655,"./ta":51553,"./ta.js":51553,"./te":65967,"./te.js":65967,"./tet":39236,"./tet.js":39236,"./tg":82091,"./tg.js":82091,"./th":44141,"./th.js":44141,"./tk":14204,"./tk.js":14204,"./tl-ph":98941,"./tl-ph.js":98941,"./tlh":99565,"./tlh.js":99565,"./tr":6075,"./tr.js":6075,"./tzl":91637,"./tzl.js":91637,"./tzm":48231,"./tzm-latn":84943,"./tzm-latn.js":84943,"./tzm.js":48231,"./ug-cn":27822,"./ug-cn.js":27822,"./uk":17263,"./uk.js":17263,"./ur":71769,"./ur.js":71769,"./uz":29736,"./uz-latn":24725,"./uz-latn.js":24725,"./uz.js":29736,"./vi":9562,"./vi.js":9562,"./x-pseudo":7219,"./x-pseudo.js":7219,"./yo":76195,"./yo.js":76195,"./zh-cn":37289,"./zh-cn.js":37289,"./zh-hk":51589,"./zh-hk.js":51589,"./zh-mo":49708,"./zh-mo.js":49708,"./zh-tw":23384,"./zh-tw.js":23384};function a(A){var e=n(A);return t(e)}function n(A){if(!t.o(s,A)){var e=new Error("Cannot find module '"+A+"'");throw e.code="MODULE_NOT_FOUND",e}return s[A]}a.keys=function(){return Object.keys(s)},a.resolve=n,A.exports=a,a.id=46700}}]);
//# sourceMappingURL=3118.js.map