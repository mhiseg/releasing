(self.webpackChunkopenmrs_ohri_app=self.webpackChunkopenmrs_ohri_app||[]).push([[448],{58976:(e,t,r)=>{"use strict";r.d(t,{default:()=>y});var i=r(39743),o=r.n(i),n=r(3157),s=r.n(n),l=r(53439),_=r.n(l),a=r(79201),m=r.n(a),h=r(71573),c=r.n(h),p=r(35914),u=r.n(p),d=r(28531),f=r.n(d),g={};g.styleTagTransform=u(),g.setAttributes=m(),g.insert=_().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=c(),o()(f(),g);const y=f()&&f().locals?f().locals:void 0},1445:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var i=r(63123),o=r(8270),n=r(17253),s=r(92703),l=r.n(s),_=r(3074),a=r.n(_),m=r(50576),h=r.n(m),c=r(5901),p=["as","condensed","narrow","className","children"];function u(e){var t,r=e.as,s=void 0===r?"div":r,_=e.condensed,a=void 0!==_&&_,m=e.narrow,u=void 0!==m&&m,d=e.className,f=e.children,g=(0,n.Z)(e,p),y=(0,c.A)(),b=l()(d,(t={},(0,o.Z)(t,"".concat(y,"--row"),!0),(0,o.Z)(t,"".concat(y,"--row--condensed"),a),(0,o.Z)(t,"".concat(y,"--row--narrow"),u),t));return h().createElement(s,(0,i.Z)({className:b},g),f)}u.propTypes={as:a().oneOfType([a().string,a().elementType]),children:a().node,className:a().string,condensed:a().bool,narrow:a().bool};const d=u},59670:(e,t,r)=>{"use strict";r.d(t,{AN:()=>m,Aq:()=>T,B1:()=>$,Ig:()=>u,JH:()=>g,Jf:()=>b,Lq:()=>a,V5:()=>h,Xm:()=>w,am:()=>d,k$:()=>f,kT:()=>v,q3:()=>p,sy:()=>x,ue:()=>_,zj:()=>y});var i=r(91208),o=r(90421),n=r.n(o),s=r(9588);const l="/ws/rest/v1/";function _(e){return(0,i.openmrsFetch)(`/ws/fhir2/R4/Encounter?patient=${e}&_sort=-date&_count=1`)}function a(e=1,t=10){return(0,i.openmrsFetch)(`/ws/fhir2/R4/Patient?_getpagesoffset=${e}&_count=${t}`)}function m(){let e=n()().format("YYYY-MM-DD");return(0,i.openmrsFetch)(`/ws/fhir2/R4/Encounter?date=${e}`).then((({data:e})=>e.entry?.length?c(e):[]))}function h(e,t,r){let o=n()().format("YYYY-MM-DD"),s=n()().subtract(r,"days").format("YYYY-MM-DD");return(0,i.openmrsFetch)(`/ws/fhir2/R4/Observation?code=${e}${t?`&value-concept=${t}`:""}${r?`&_lastUpdated=ge${s}&_lastUpdated=le${o}`:""}`).then((({data:e})=>e.entry?.length?c(e):[]))}function c(e){let t=e.entry.map((e=>e.resource.subject.reference));return t=new Set([...t]),t=Array.from(t),Promise.all(t.map((e=>(0,i.openmrsFetch)("/ws/fhir2/R4/"+e))))}async function p(e,t){const{data:r}=await(0,i.openmrsFetch)(`/ws/rest/v1/cohortm/cohort/${e}${t?`?v=${t}`:""}`);return r.cohortMembers=r.cohortMembers.filter((e=>!e.voided)),r}async function u(e,t){const r=t?t.join("&"):"",o=r?`reportingrest/cohort/${e}?${r}`:`reportingrest/cohort/${e}`,{data:n}=await(0,i.openmrsFetch)(l+o);return n}async function d(e,t){const r=t?t.join("&"):"",o=r?`reportingrest/cohort/${e}?${r}`:`reportingrest/cohort/${e}`,{data:n}=await(0,i.openmrsFetch)(l+o);return Promise.all(n.members.map((e=>(0,i.openmrsFetch)(`/ws/rest/v1/patient/${e.uuid}?v=full`))))}async function f(e){const{data:{results:t,error:r}}=await(0,i.openmrsFetch)("/ws/rest/v1/cohortm/cohort?v=custom:(uuid,name,voided)"+(e?`&cohortType=${e}`:""));if(r)throw r;return t.filter((e=>!e.voided))}function g(e,t){return(0,i.openmrsFetch)("/ws/rest/v1/cohortm/cohortmember",{method:"POST",headers:{"Content-Type":"application/json"},body:{patient:e,cohort:t,startDate:new Date}})}function y(e){return(0,i.openmrsFetch)(`/ws/rest/v1/cohortm/cohortmember/${e}`,{method:"DELETE"})}async function b(e){const{data:{results:t,error:r}}=await(0,i.openmrsFetch)(`/ws/rest/v1/cohortm/cohortmember?patient=${e}&v=full`);if(r)throw r;return t.filter((e=>!e.voided))}function v(e){return(0,i.openmrsFetch)(`/ws/fhir2/R4/Observation?code=${s.Ln}&value-concept=${s.$l}&patient=${e}&_sort=-date&_count=1`).then((({data:e})=>e.entry?.length?e.entry[0].resource.valueCodeableConcept.coding[0].display:""))}function w(e){return(0,i.openmrsFetch)(`/ws/fhir2/R4/Observation?code=${s.Ws}&value-concept=${s.Ws}&patient=${e}&_sort=-date&_count=1`).then((({data:e})=>e.entry?.length?e.entry[0].resource.valueCodeableConcept.coding[0].display:""))}function x(e,t){const r=`encounterType=${t}&patient=${e}`;return(0,i.openmrsFetch)(`/ws/rest/v1/encounter?${r}&v=${s.Ib}`).then((({data:e})=>e.results.length?e.results[e.results.length-1]:null))}function T(){return(0,i.openmrsFetch)(`/ws/rest/v1/reportingrest/cohort/${s.pj}`).then((({data:e})=>{if(e.members?.length){let t=e.members.map((e=>e.uuid));return t=new Set([...t]),t=Array.from(t),Promise.all(t.map((e=>(0,i.openmrsFetch)("/ws/fhir2/R4//Person/"+e))))}return[]}))}function $(e){return(0,i.openmrsFetch)(`/ws/rest/v1/concept/${e}/name?limit=1`).then((({data:e})=>{if(e.results.length)return e.results[e.results.length-1].display}))}},22671:(e,t,r)=>{"use strict";r.d(t,{Z:()=>$});var i=r(1445),o=r(50576),n=r.n(o),s=r(48397),l=r(39743),_=r.n(l),a=r(3157),m=r.n(a),h=r(53439),c=r.n(h),p=r(79201),u=r.n(p),d=r(71573),f=r.n(d),g=r(35914),y=r.n(g),b=r(55803),v=r.n(b),w={};w.styleTagTransform=y(),w.setAttributes=u(),w.insert=c().bind(null,"head"),w.domAPI=m(),w.insertStyleElement=f(),_()(v(),w);const x=v()&&v().locals?v().locals:void 0;var T=r(36269);const $=function(e){return n().createElement(n().Fragment,null,n().createElement(i.Z,{className:x.desktopView},e.tiles.map(((e,t)=>n().createElement("div",{style:{width:"321px",marginLeft:"16px"},key:t},n().createElement(T.Z,{title:e.title,subTitle:e.subTitle,value:e.value,onClickView:e.onClick}))))),n().createElement(i.Z,{className:x.tileView},n().createElement(s.Z,{details:e.tiles})))}},48397:(e,t,r)=>{"use strict";r.d(t,{Z:()=>_});var i=r(50576),o=r.n(i),n=r(68877),s=r(1445),l=r(58976);const _=function({details:e}){return o().createElement(n.n9,{className:l.default.tabletTile},o().createElement(s.Z,{className:l.default.tabletTileTitle},"Programme summary"),o().createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},e.map(((e,t)=>o().createElement("div",{key:t},o().createElement("div",{className:l.default.tabletTileSubTitle},e.subTitle),o().createElement("div",{className:l.default.tabletTileValue},e.value))))))}},36269:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var i=r(50576),o=r.n(i),n=r(68877),s=r(64471),l=r(26921),_=r(58976);const a=({title:e,subTitle:t,value:r,onClickView:i})=>o().createElement(n.n9,{className:_.default.tile},o().createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},o().createElement("div",{className:_.default.tileTitle},e),o().createElement("div",null,i&&o().createElement(s.Z,{size:"small",kind:"ghost",onClick:i},"View ",o().createElement(l.RkN,{style:{width:"12px",height:"10px"}})))),o().createElement("div",{style:{display:"flex",flexDirection:"row"}},o().createElement("div",{style:{display:"flex",flexDirection:"column"}},o().createElement("div",{className:_.default.tileSubTitle},t),o().createElement("div",{className:_.default.tileValue},r))))},55803:(e,t,r)=>{(t=r(77705)(!1)).push([e.id,".openmrs-ohri__ohri-programme-summary-tiles__desktopView___hoK2j{display:flex}.openmrs-ohri__ohri-programme-summary-tiles__tileView___3B2IL{display:none}@media(max-width: 1024px){.openmrs-ohri__ohri-programme-summary-tiles__desktopView___hoK2j{display:none}.openmrs-ohri__ohri-programme-summary-tiles__tileView___3B2IL{display:flex}}",""]),t.locals={desktopView:"openmrs-ohri__ohri-programme-summary-tiles__desktopView___hoK2j",tileView:"openmrs-ohri__ohri-programme-summary-tiles__tileView___3B2IL"},e.exports=t},28531:(e,t,r)=>{(t=r(77705)(!1)).push([e.id,":root{--brand-01: #005d5d;--brand-02: #004144;--brand-03: #007d79}.openmrs-ohri__ohri-summary-tile__productiveHeading01___3t64f{font-size:.875rem;font-weight:600;line-height:1.29;letter-spacing:.16px}.openmrs-ohri__ohri-summary-tile__productiveHeading02___3hXEV{font-size:1rem;font-weight:600;line-height:1.375;letter-spacing:0}.openmrs-ohri__ohri-summary-tile__productiveHeading03___1qbEQ{font-size:1.25rem;font-weight:400;line-height:1.4;letter-spacing:0}.openmrs-ohri__ohri-summary-tile__productiveHeading04___3kTh1{font-size:1.75rem;font-weight:400;line-height:1.29;letter-spacing:0}.openmrs-ohri__ohri-summary-tile__productiveHeading05___1Cwvr{font-size:2rem;font-weight:400;line-height:1.25;letter-spacing:0}.openmrs-ohri__ohri-summary-tile__productiveHeading06___3vWsc{font-size:2rem;font-weight:300;line-height:1.199;letter-spacing:0}.openmrs-ohri__ohri-summary-tile__bodyShort01___2y3Tm{font-size:.875rem;font-weight:400;line-height:1.29;letter-spacing:.16px}.openmrs-ohri__ohri-summary-tile__helperText01___1s_Nc{font-size:.75rem;line-height:1.34;letter-spacing:.32px}.openmrs-ohri__ohri-summary-tile__bodyShort02___3Fawf{font-size:1rem;font-weight:400;line-height:1.375;letter-spacing:0}.openmrs-ohri__ohri-summary-tile__bodyLong01___3_ois{font-size:.875rem;font-weight:400;line-height:1.43;letter-spacing:.16px}.openmrs-ohri__ohri-summary-tile__bodyLong02___2q6yx{font-size:1rem;font-weight:400;line-height:1.5;letter-spacing:0}.openmrs-ohri__ohri-summary-tile__label01___1I34_{font-size:.75rem;font-weight:400;line-height:1.34;letter-spacing:.32px}.openmrs-ohri__ohri-summary-tile__text01___2s6Q_{color:#161616}.openmrs-ohri__ohri-summary-tile__text02___3xHhV{color:#525252}aside{background-color:#fff !important}div[class*=-esm-login__styles__center]>img{width:140px}.tab-12rem>button{width:12rem !important}.tab-14rem>button{width:14rem !important}.tab-16rem>button{width:16rem !important}.openmrs-ohri__ohri-summary-tile__tile___FoqBH{height:126px;padding:1px 0 16px 16px;border:solid 1px #e0e0e0;display:flex;flex-direction:column;background-color:#fff}.openmrs-ohri__ohri-summary-tile__tileTitle___2p5r2{height:18px;margin:15px 65px 24px 0;font-size:14px;font-weight:600;line-height:1.29;letter-spacing:.16px;color:#525252}.openmrs-ohri__ohri-summary-tile__tileSubTitle___2h-qA{height:16px;font-size:12px;line-height:1.33;letter-spacing:.32px;color:#525252}.openmrs-ohri__ohri-summary-tile__tileValue___NBtNL{margin:5px 35px 0 0;font-size:28px;line-height:1.29;color:#161616}.openmrs-ohri__ohri-summary-tile__tabletTile___2K-fA{width:100%;height:126px;margin:17px 16px;padding:16px 18px 16px 16px;border:solid 1px #e0e0e0}.openmrs-ohri__ohri-summary-tile__tabletTileTitle___N37my{height:18px;margin:0 392px 24px 0;font-size:14px;font-weight:600;font-stretch:normal;font-style:normal;line-height:1.29;letter-spacing:.16px;color:#525252}.openmrs-ohri__ohri-summary-tile__tabletTileSubTitle___20de5{height:16px;font-size:12px;font-weight:normal;font-stretch:normal;font-style:normal;line-height:1.33;letter-spacing:.32px;color:#0f62fe}.openmrs-ohri__ohri-summary-tile__tabletTileValue___2tfyv{height:36px;font-size:28px;font-weight:normal;font-stretch:normal;font-style:normal;line-height:1.29;letter-spacing:normal;color:#161616}",""]),t.locals={productiveHeading01:"openmrs-ohri__ohri-summary-tile__productiveHeading01___3t64f",productiveHeading02:"openmrs-ohri__ohri-summary-tile__productiveHeading02___3hXEV",productiveHeading03:"openmrs-ohri__ohri-summary-tile__productiveHeading03___1qbEQ",productiveHeading04:"openmrs-ohri__ohri-summary-tile__productiveHeading04___3kTh1",productiveHeading05:"openmrs-ohri__ohri-summary-tile__productiveHeading05___1Cwvr",productiveHeading06:"openmrs-ohri__ohri-summary-tile__productiveHeading06___3vWsc",bodyShort01:"openmrs-ohri__ohri-summary-tile__bodyShort01___2y3Tm",helperText01:"openmrs-ohri__ohri-summary-tile__helperText01___1s_Nc",bodyShort02:"openmrs-ohri__ohri-summary-tile__bodyShort02___3Fawf",bodyLong01:"openmrs-ohri__ohri-summary-tile__bodyLong01___3_ois",bodyLong02:"openmrs-ohri__ohri-summary-tile__bodyLong02___2q6yx",label01:"openmrs-ohri__ohri-summary-tile__label01___1I34_",text01:"openmrs-ohri__ohri-summary-tile__text01___2s6Q_",text02:"openmrs-ohri__ohri-summary-tile__text02___3xHhV",tile:"openmrs-ohri__ohri-summary-tile__tile___FoqBH",tileTitle:"openmrs-ohri__ohri-summary-tile__tileTitle___2p5r2",tileSubTitle:"openmrs-ohri__ohri-summary-tile__tileSubTitle___2h-qA",tileValue:"openmrs-ohri__ohri-summary-tile__tileValue___NBtNL",tabletTile:"openmrs-ohri__ohri-summary-tile__tabletTile___2K-fA",tabletTileTitle:"openmrs-ohri__ohri-summary-tile__tabletTileTitle___N37my",tabletTileSubTitle:"openmrs-ohri__ohri-summary-tile__tabletTileSubTitle___20de5",tabletTileValue:"openmrs-ohri__ohri-summary-tile__tabletTileValue___2tfyv"},e.exports=t}}]);
//# sourceMappingURL=448.js.map