(self.webpackChunkopenmrs_ohri_app=self.webpackChunkopenmrs_ohri_app||[]).push([[5059],{71503:(e,t,a)=>{"use strict";a.d(t,{Z:()=>b});var n=a(63123),o=a(8270),i=a(17253),r=a(3074),s=a.n(r),l=a(50576),c=a.n(l),_=a(92703),d=a.n(_),m=a(96771),h=["headers","rowCount","columnCount","zebra","compact","className","showHeader","showToolbar"],p=m.settings.prefix,u=function(e){for(var t,a=e.headers,r=e.rowCount,s=e.columnCount,l=e.zebra,_=e.compact,m=e.className,u=e.showHeader,b=e.showToolbar,g=(0,i.Z)(e,h),v=d()(m,(t={},(0,o.Z)(t,"".concat(p,"--skeleton"),!0),(0,o.Z)(t,"".concat(p,"--data-table"),!0),(0,o.Z)(t,"".concat(p,"--data-table--zebra"),l),(0,o.Z)(t,"".concat(p,"--data-table--compact"),_),t)),f=r,y=Array(f),E=Array.from({length:s},(function(e,t){return t})),T=0;T<f;T++)y[T]=c().createElement("tr",{key:T},E.map((function(e){return c().createElement("td",{key:e},c().createElement("span",null))})));return c().createElement("div",{className:"".concat(p,"--skeleton ").concat(p,"--data-table-container")},u?c().createElement("div",{className:"".concat(p,"--data-table-header")},c().createElement("div",{className:"".concat(p,"--data-table-header__title")}),c().createElement("div",{className:"".concat(p,"--data-table-header__description")})):null,b?c().createElement("section",{"aria-label":"data table toolbar",className:"".concat(p,"--table-toolbar")},c().createElement("div",{className:"".concat(p,"--toolbar-content")},c().createElement("span",{className:"".concat(p,"--skeleton ").concat(p,"--btn ").concat(p,"--btn--sm")}))):null,c().createElement("table",(0,n.Z)({className:v},g),c().createElement("thead",null,c().createElement("tr",null,E.map((function(e){var t;return c().createElement("th",{key:e},a?c().createElement("div",{className:"bx--table-header-label"},null===(t=a[e])||void 0===t?void 0:t.header):c().createElement("span",null))})))),c().createElement("tbody",null,y)))};u.propTypes={className:s().string,columnCount:s().number,compact:s().bool,headers:s().oneOfType([s().array,s().shape({key:s().string})]),rowCount:s().number,showHeader:s().bool,showToolbar:s().bool,zebra:s().bool},u.defaultProps={rowCount:5,columnCount:5,zebra:!1,compact:!1,showHeader:!0,showToolbar:!0};const b=u},94358:(e,t,a)=>{"use strict";a.d(t,{Z:()=>g});var n=a(63123),o=a(17253),i=a(50576),r=a.n(i),s=a(3074),l=a.n(s),c=a(92703),_=a.n(c),d=a(40124),m=a(39396),h=a(88469),p=a(28745),u=a(5901),b=["className","success","status","iconDescription","description","onSuccess","successDelay"];function g(e){var t=e.className,a=e.success,i=e.status,s=void 0===i?a?"finished":"active":i,l=e.iconDescription,c=e.description,h=e.onSuccess,g=e.successDelay,v=(0,o.Z)(e,b),f=(0,u.A)(),y=_()("".concat(f,"--inline-loading"),t),E=r().createElement("div",{className:"".concat(f,"--inline-loading__text")},c),T="error"===s?r().createElement(d.ycZ,{className:"".concat(f,"--inline-loading--error")},r().createElement("title",null,l)):"finished"===s?(setTimeout((function(){h&&h()}),g),r().createElement(m.Y3p,{className:"".concat(f,"--inline-loading__checkmark-container")},r().createElement("title",null,l))):"inactive"===s||"active"===s?r().createElement(p.Z,{small:!0,description:l,withOverlay:!1,active:"active"===s}):void 0,w=T&&r().createElement("div",{className:"".concat(f,"--inline-loading__animation")},T);return r().createElement("div",(0,n.Z)({className:y},v,{"aria-live":"assertive"}),w,c&&E)}g.propTypes={className:l().string,description:l().node,iconDescription:l().string,onSuccess:l().func,status:l().oneOf(["inactive","active","finished","error"]),success:(0,h.Z)(l().bool,'\nThe prop `success` for InlineLoading has been deprecated in favor of `status`. Please use `status="finished"` instead.'),successDelay:l().number},g.defaultProps={successDelay:1500}},28745:(e,t,a)=>{"use strict";a.d(t,{Z:()=>g});var n=a(63123),o=a(8270),i=a(17253),r=a(92703),s=a.n(r),l=a(3074),c=a.n(l),_=a(50576),d=a.n(_),m=a(85778),h=a(5901),p=["id","active","className","withOverlay","small","description"],u=(0,m.Z)();function b(e){var t,a,r=e.id,l=e.active,c=e.className,m=e.withOverlay,b=e.small,g=e.description,v=(0,i.Z)(e,p),f=(0,h.A)(),y=(0,_.useRef)(u()).current,E=s()(c,(t={},(0,o.Z)(t,"".concat(f,"--loading"),!0),(0,o.Z)(t,"".concat(f,"--loading--small"),b),(0,o.Z)(t,"".concat(f,"--loading--stop"),!l),t)),T=s()((a={},(0,o.Z)(a,"".concat(f,"--loading-overlay"),!0),(0,o.Z)(a,"".concat(f,"--loading-overlay--stop"),!l),a)),w=r||"loading-id-".concat(y),x=d().createElement("div",(0,n.Z)({},v,{"aria-atomic":"true","aria-labelledby":w,"aria-live":l?"assertive":"off",className:E}),d().createElement("label",{id:w,className:"".concat(f,"--visually-hidden")},g),d().createElement("svg",{className:"".concat(f,"--loading__svg"),viewBox:"0 0 100 100"},d().createElement("title",null,g),b?d().createElement("circle",{className:"".concat(f,"--loading__background"),cx:"50%",cy:"50%",r:"44"}):null,d().createElement("circle",{className:"".concat(f,"--loading__stroke"),cx:"50%",cy:"50%",r:"44"})));return m?d().createElement("div",{className:T},x):x}b.propTypes={active:c().bool,className:c().string,description:c().string,id:c().string,small:c().bool,withOverlay:c().bool},b.defaultProps={active:!0,withOverlay:!0,small:!1,description:"Active loading indicator"};const g=b},55031:(e,t,a)=>{"use strict";a.d(t,{Z:()=>x});var n=a(50576),o=a.n(n),i=a(22218),r=a(38594),s=a(39743),l=a.n(s),c=a(3157),_=a.n(c),d=a(53439),m=a.n(d),h=a(79201),p=a.n(h),u=a(71573),b=a.n(u),g=a(35914),v=a.n(g),f=a(10374),y=a.n(f),E={};E.styleTagTransform=v(),E.setAttributes=p(),E.insert=m().bind(null,"head"),E.domAPI=_(),E.insertStyleElement=b(),l()(y(),E);const T=y()&&y().locals?y().locals:void 0;var w=a(80892);const x=function({patientListConfigs:e}){return o().createElement(i.ZP,{type:"container",className:T.tabContainer},e.map(((e,t)=>o().createElement(r.Z,{id:t,label:e.label},o().createElement(w.Z,{cohortId:e.cohortId,cohortSlotName:e.cohortSlotName,isReportingCohort:e.isReportingCohort,excludeColumns:e.excludeColumns,otherColumns:e.otherColumns,queryParams:e.queryParams,associatedEncounterType:e.associatedEncounterType,launchableForm:e.launchableForm,extraAssociatedEncounterTypes:e.extraAssociatedEncounterTypes})))))}},36521:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>d});var n=a(50576),o=a.n(n),i=a(9588),r=a(55031),s=a(98261),l=a(75778),c=a(90421),_=a.n(c);const d=function(){const{t:e}=(0,s.useTranslation)(),t=[{label:e("allCTClients","All COVID-19 Clients"),cohortId:i.eF,isReportingCohort:!0,cohortSlotName:"clients-assessed-for-covid-slot",launchableForm:{package:"covid",name:"covid_assessment",editActionText:"Edit case assessment form",editLatestEncounter:!0,targetDashboard:"covid-assessments"},associatedEncounterType:i.lU,excludeColumns:["timeAddedToList","waitingTime","location","phoneNumber","hivResult"],otherColumns:[{key:"assessmentDate",header:"Assessment date",getValue:({latestEncounter:e})=>e&&_()(e.encounterDatetime).format("DD-MMM-YYYY"),index:3},{key:"finalAssessment",header:"Final result",getValue:({latestExtraEncounters:e})=>{const t=(0,l.G_)(e,i.ev);return t&&"--"!=t?t:(0,l.G_)(e,i.t4)}},{key:"outcome",header:"Outcome",getValue:({latestEncounter:e})=>(0,l.hF)(e,i.Gc)}],extraAssociatedEncounterTypes:[i.R9]},{label:e("pendingLabResults","Pending lab results"),cohortId:i.Lw,isReportingCohort:!0,cohortSlotName:"pending-covid-lab-results-slot",launchableForm:{package:"covid",name:"covid_lab_test",editActionText:"Enter test result",editLatestEncounter:!0,targetDashboard:"covid-lab-results"},excludeColumns:["timeAddedToList","waitingTime","location","phoneNumber","hivResult"],associatedEncounterType:i.lU,otherColumns:[{key:"testDate",header:"Test Date",getValue:({latestEncounter:e})=>(0,l.hF)(e,i.fR,!0)},{key:"testType",header:"Test Type",getValue:({latestEncounter:e})=>(0,l.hF)(e,i.JN)}]},{label:e("scheduledVaccination","Scheduled Vaccination"),cohortId:i.xB,isReportingCohort:!0,cohortSlotName:"clients-vaccinated-for-covid-slot",launchableForm:{package:"covid",name:"covid_vaccination",editActionText:"Edit covid vaccination form",editLatestEncounter:!0,targetDashboard:"covid_vaccination"},associatedEncounterType:i.KL,excludeColumns:["timeAddedToList","waitingTime","location","phoneNumber","hivResult"],otherColumns:[{key:"lastDoseAdministered",header:"Last Dose Administered",getValue:({latestEncounter:e})=>(0,l.hF)(e,i.Lm)},{key:"vaccine",header:"Vaccine",getValue:({latestEncounter:e})=>{const t=(0,l.b5)(e,i.WS);return void 0!==typeof t&&t&&"object"==typeof t.value&&"Other non-coded"===(t.value.names?.find((e=>"SHORT"===e.conceptNameType))?.name||t.value.name.name)?(0,l.hF)(e,i.mZ):(0,l.hF)(e,i.WS)}},{key:"returnVisitDate",header:"Return Visit Date",getValue:({latestEncounter:e})=>(0,l.hF)(e,i.Cf,!0)}]}];return o().createElement(r.Z,{patientListConfigs:t})}},10374:(e,t,a)=>{(t=a(77705)(!1)).push([e.id,":root{--brand-01: #005d5d;--brand-02: #004144;--brand-03: #007d79}.openmrs-ohri__ohri-patient-list-tabs__productiveHeading01___2OCxv{font-size:.875rem;font-weight:600;line-height:1.29;letter-spacing:.16px}.openmrs-ohri__ohri-patient-list-tabs__productiveHeading02___20lUq{font-size:1rem;font-weight:600;line-height:1.375;letter-spacing:0}.openmrs-ohri__ohri-patient-list-tabs__productiveHeading03___Eg_AU{font-size:1.25rem;font-weight:400;line-height:1.4;letter-spacing:0}.openmrs-ohri__ohri-patient-list-tabs__productiveHeading04___2mJMz{font-size:1.75rem;font-weight:400;line-height:1.29;letter-spacing:0}.openmrs-ohri__ohri-patient-list-tabs__productiveHeading05___299yU{font-size:2rem;font-weight:400;line-height:1.25;letter-spacing:0}.openmrs-ohri__ohri-patient-list-tabs__productiveHeading06___2E8jq{font-size:2rem;font-weight:300;line-height:1.199;letter-spacing:0}.openmrs-ohri__ohri-patient-list-tabs__bodyShort01___2YjnV{font-size:.875rem;font-weight:400;line-height:1.29;letter-spacing:.16px}.openmrs-ohri__ohri-patient-list-tabs__helperText01___1j9FE{font-size:.75rem;line-height:1.34;letter-spacing:.32px}.openmrs-ohri__ohri-patient-list-tabs__bodyShort02___1FjTF{font-size:1rem;font-weight:400;line-height:1.375;letter-spacing:0}.openmrs-ohri__ohri-patient-list-tabs__bodyLong01___2MB17{font-size:.875rem;font-weight:400;line-height:1.43;letter-spacing:.16px}.openmrs-ohri__ohri-patient-list-tabs__bodyLong02___2a3yk{font-size:1rem;font-weight:400;line-height:1.5;letter-spacing:0}.openmrs-ohri__ohri-patient-list-tabs__label01___hgTKp{font-size:.75rem;font-weight:400;line-height:1.34;letter-spacing:.32px}.openmrs-ohri__ohri-patient-list-tabs__text01___3jWOH{color:#161616}.openmrs-ohri__ohri-patient-list-tabs__text02___3ZnqG{color:#525252}aside{background-color:#fff !important}div[class*=-esm-login__styles__center]>img{width:140px}.tab-12rem>button{width:12rem !important}.tab-14rem>button{width:14rem !important}.tab-16rem>button{width:16rem !important}.openmrs-ohri__ohri-patient-list-tabs__container___megX5{margin-top:16px;margin-left:inherit;width:100%;overflow-y:hidden}.openmrs-ohri__ohri-patient-list-tabs__tabContainer___d7jsH{margin-top:16px;padding-left:1rem;background-color:#fff}.openmrs-ohri__ohri-patient-list-tabs__tabContainer___d7jsH li button{width:100% !important}",""]),t.locals={productiveHeading01:"openmrs-ohri__ohri-patient-list-tabs__productiveHeading01___2OCxv",productiveHeading02:"openmrs-ohri__ohri-patient-list-tabs__productiveHeading02___20lUq",productiveHeading03:"openmrs-ohri__ohri-patient-list-tabs__productiveHeading03___Eg_AU",productiveHeading04:"openmrs-ohri__ohri-patient-list-tabs__productiveHeading04___2mJMz",productiveHeading05:"openmrs-ohri__ohri-patient-list-tabs__productiveHeading05___299yU",productiveHeading06:"openmrs-ohri__ohri-patient-list-tabs__productiveHeading06___2E8jq",bodyShort01:"openmrs-ohri__ohri-patient-list-tabs__bodyShort01___2YjnV",helperText01:"openmrs-ohri__ohri-patient-list-tabs__helperText01___1j9FE",bodyShort02:"openmrs-ohri__ohri-patient-list-tabs__bodyShort02___1FjTF",bodyLong01:"openmrs-ohri__ohri-patient-list-tabs__bodyLong01___2MB17",bodyLong02:"openmrs-ohri__ohri-patient-list-tabs__bodyLong02___2a3yk",label01:"openmrs-ohri__ohri-patient-list-tabs__label01___hgTKp",text01:"openmrs-ohri__ohri-patient-list-tabs__text01___3jWOH",text02:"openmrs-ohri__ohri-patient-list-tabs__text02___3ZnqG",container:"openmrs-ohri__ohri-patient-list-tabs__container___megX5",tabContainer:"openmrs-ohri__ohri-patient-list-tabs__tabContainer___d7jsH"},e.exports=t}}]);
//# sourceMappingURL=5059.js.map