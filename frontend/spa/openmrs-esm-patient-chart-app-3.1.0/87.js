(self.webpackChunk_openmrs_esm_patient_chart_app=self.webpackChunk_openmrs_esm_patient_chart_app||[]).push([[87,394],{8394:(e,t,i)=>{"use strict";i.d(t,{S_:()=>n,sb:()=>a,Yh:()=>r,JB:()=>o,e1:()=>s,uc:()=>u,Fd:()=>d});const n=window.getOpenmrsSpaBase(),a="/patient/:patientUuid/chart",r=`${a}/:view?/:subview?`,o=`${window.spaBase}${a}`,s="@openmrs/esm-patient-chart-app",u="patient-chart-workspace-slot",d="patient-chart-workspace-header-slot"},87:(e,t,i)=>{"use strict";i.r(t),i.d(t,{backendDependencies:()=>l,importTranslation:()=>f,setupOpenMRS:()=>p});var n=i(4465),a=i(9035),r=i(3771);const o={visitDiagnosisConceptUuid:{_default:"159947AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",_type:a.Type.ConceptUuid},problemListConceptUuid:{_default:"1284AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",_type:a.Type.ConceptUuid},diagnosisOrderConceptUuid:{_default:"159946AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",_type:a.Type.ConceptUuid},notesConceptUuids:{_type:a.Type.Array,_default:["162169AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"]},offlineVisitTypeUuid:{_type:a.Type.UUID,_description:"The UUID of the visit type to be used for the automatically created offline visits.",_default:"a22733fa-3501-4020-a520-da024eeff088"}};var s=i(8394),u=i(1269);const d={name:"summary",slot:"patient-chart-summary-dashboard-slot",config:{columns:4,type:"grid"},title:"Patient Summary"},c={name:"encounters",slot:"patient-chart-encounters-dashboard-slot",config:{columns:1,type:"grid"},title:"Encounters"},f=i(3979),l={};function p(){return(0,u.Gq)(),(0,u.BK)(),(0,a.defineConfigSchema)(s.e1,o),(0,a.registerBreadcrumbs)([{path:s.JB,title:"Patient",parent:`${window.spaBase}/home`},{path:`${s.JB}/:view/:subview?`,title:e=>{let[t,i]=e;return`${(0,n.Z)(i)} Dashboard`},parent:s.JB}]),{pages:[{route:/^patient\/.+\/chart/,load:(0,a.getAsyncLifecycle)((()=>Promise.all([i.e(930),i.e(197),i.e(406),i.e(250),i.e(913),i.e(973),i.e(398),i.e(924),i.e(479),i.e(536),i.e(625)]).then(i.bind(i,9625))),{featureName:"patient-chart",moduleName:s.e1}),online:!0,offline:!0}],extensions:[{id:"charts-summary-dashboard",slot:"patient-chart-dashboard-slot",order:0,load:(0,a.getSyncLifecycle)((0,r.createDashboardLink)(d),{featureName:"summary-dashboard",moduleName:s.e1}),meta:d,online:!0,offline:!0},{id:"patient-chart-nav-items",load:(0,a.getAsyncLifecycle)((()=>i.e(857).then(i.bind(i,3857))),{featureName:"nav-items",moduleName:s.e1}),online:!0,offline:!0},{id:"start-visit-patient-actions-slot",slot:"patient-actions-slot",load:(0,a.getAsyncLifecycle)((()=>Promise.all([i.e(924),i.e(578)]).then(i.bind(i,9578))),{featureName:"patient-actions-slot",moduleName:s.e1})},{id:"stop-visit-patient-actions-slot",slot:"patient-actions-slot",load:(0,a.getAsyncLifecycle)((()=>Promise.all([i.e(924),i.e(253)]).then(i.bind(i,9253))),{featureName:"patient-actions-slot",moduleName:s.e1})},{id:"notification-buttons",slot:"action-menu-items-slot",load:(0,a.getAsyncLifecycle)((()=>Promise.all([i.e(930),i.e(479),i.e(536),i.e(40)]).then(i.bind(i,7040))),{featureName:"notification-buttons",moduleName:s.e1})},{id:"add-past-visit-patient-actions-slot",slot:"patient-actions-slot",load:(0,a.getAsyncLifecycle)((()=>Promise.all([i.e(924),i.e(103)]).then(i.bind(i,4103))),{featureName:"patient-actions-slot",moduleName:s.e1})},{id:"encounters-summary-dashboard",slot:"patient-chart-dashboard-slot",order:5,load:(0,a.getSyncLifecycle)((0,r.createDashboardLink)(c),{featureName:"encounter",moduleName:s.e1}),meta:c,online:!0,offline:!0},{id:"past-visits-detail-overview",order:1,slot:"patient-chart-encounters-dashboard-slot",load:(0,a.getAsyncLifecycle)((()=>Promise.all([i.e(930),i.e(197),i.e(406),i.e(214),i.e(770),i.e(250),i.e(311),i.e(691),i.e(924),i.e(479),i.e(565),i.e(922)]).then(i.bind(i,3922))),{featureName:"visits-detail-slot",moduleName:s.e1}),meta:{title:"Visits",view:"visits"}},,{id:"past-visits-overview",load:(0,a.getAsyncLifecycle)((()=>Promise.all([i.e(930),i.e(197),i.e(406),i.e(214),i.e(770),i.e(250),i.e(311),i.e(924),i.e(479),i.e(616)]).then(i.bind(i,616))),{featureName:"past-visits-overview",moduleName:s.e1}),meta:{title:"Edit or load a past visit",view:"visits"}},{id:"start-visit-workspace-form",load:(0,a.getAsyncLifecycle)((()=>Promise.all([i.e(930),i.e(197),i.e(406),i.e(925),i.e(770),i.e(913),i.e(973),i.e(791),i.e(924),i.e(479),i.e(565),i.e(959)]).then(i.bind(i,6959))),{featureName:"start-visit-form",moduleName:s.e1}),meta:{title:"Start a visit"}},{id:"patient-details-tile",slot:"visit-form-header-slot",order:1,load:(0,a.getAsyncLifecycle)((()=>Promise.all([i.e(744),i.e(565),i.e(72)]).then(i.bind(i,1072))),{featureName:"patient-details-tile",moduleName:s.e1})}]}}},1269:(e,t,i)=>{"use strict";i.d(t,{BK:()=>y,Gq:()=>h,Nn:()=>v,Zf:()=>b});var n,a=i(9035),r=i(9902),o=new Uint8Array(16);function s(){if(!n&&!(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(o)}const u=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,d=function(e){return"string"==typeof e&&u.test(e)};for(var c=[],f=0;f<256;++f)c.push((f+256).toString(16).substr(1));const l=function(e,t,i){var n=(e=e||{}).random||(e.rng||s)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){i=i||0;for(var a=0;a<16;++a)t[i+a]=n[a];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=(c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]).toLowerCase();if(!d(i))throw TypeError("Stringified UUID is invalid");return i}(n)};var p=i(9857);const A="visit",m="patient-registration";function y(){(0,a.messageOmrsServiceWorker)({type:"registerDynamicRoute",pattern:".+/ws/fhir2/R4/Patient/.+"}),(0,a.messageOmrsServiceWorker)({type:"registerDynamicRoute",pattern:".+/ws/rest/v1/visit.+"})}function h(){(0,a.setupOfflineSync)(A,[m],(async(e,t)=>{const i={...e,stopDatetime:new Date},n=await(0,a.saveVisit)(i,t.abort).toPromise();if(!n.ok)throw new Error(`Failed to synchronize offline visit with the UUID: ${e.uuid}. Error: ${JSON.stringify(n.data)}`);return n.data}))}function v(e,t){const{offlineVisitTypeUuid:i}=(0,a.useConfig)();(0,r.useEffect)((()=>(0,a.subscribeConnectivity)((async n=>{let{online:r}=n;if(!r&&e&&t){const n=await async function(e){return(await(0,a.getSynchronizationItems)(A)).find((t=>t.patient===e))}(e)??await async function(e,t,i){const n=(await(0,a.getSynchronizationItems)(m)).some((t=>t.fhirPatient.id===e)),r={uuid:l(),patient:e,startDatetime:new Date,location:t,visitType:i},o={id:r.uuid,displayName:"Offline visit",dependencies:n?[{type:m,id:e}]:[]};return await(0,a.queueSynchronizationItem)(A,r,o),r}(e,t,i);a.getStartedVisit.next({mode:a.VisitMode.NEWVISIT,status:a.VisitStatus.ONGOING,visitData:g(n)})}}))),[e,t,i])}function g(e){return{uuid:e.uuid,startDatetime:e.startDatetime?.toString(),stopDatetime:e.stopDatetime?.toString(),encounters:[],visitType:{uuid:e.visitType,display:"Offline"},patient:{uuid:e.patient}}}function b(e){const t=(0,a.usePatient)(e),i=(0,p.ZP)(`offlineRegisteredPatient/${e}`,(async()=>{const t=await async function(e){return(await(0,a.getSynchronizationItems)(m)).find((t=>t.fhirPatient.id===e)).fhirPatient}(e);if(!t)throw new Error(`No offline registered patient could be found. UUID: ${e}`);return t}));return t.isLoading||!i.data&&!i.error?{isLoading:!0,patient:null,patientUuid:e,error:null}:t.patient&&!t.patient.issue?{isLoading:!1,patient:t.patient,patientUuid:e,error:null}:i.data?{isLoading:!1,patient:i.data,patientUuid:e,error:null}:{isLoading:!1,patient:null,patientUuid:e,error:t.error??i.error}}},3979:(e,t,i)=>{var n={"./en.json":[3574,574],"./fr.json":[2757,757]};function a(e){if(!i.o(n,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],a=t[0];return i.e(t[1]).then((()=>i(a)))}a.keys=()=>Object.keys(n),a.id=3979,e.exports=a},4465:(e,t,i)=>{"use strict";i.d(t,{Z:()=>_});var n=i(187);var a=i(7885),r=i(2758),o=n.Z?n.Z.prototype:void 0,s=o?o.toString:void 0;const u=function e(t){if("string"==typeof t)return t;if((0,a.Z)(t))return function(e,t){for(var i=-1,n=null==e?0:e.length,a=Array(n);++i<n;)a[i]=t(e[i],i,e);return a}(t,e)+"";if((0,r.Z)(t))return s?s.call(t):"";var i=t+"";return"0"==i&&1/t==-1/0?"-0":i},d=function(e){return null==e?"":u(e)},c=function(e,t,i){var n=e.length;return i=void 0===i?n:i,!t&&i>=n?e:function(e,t,i){var n=-1,a=e.length;t<0&&(t=-t>a?0:a+t),(i=i>a?a:i)<0&&(i+=a),a=t>i?0:i-t>>>0,t>>>=0;for(var r=Array(a);++n<a;)r[n]=e[n+t];return r}(e,t,i)};var f=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");const l=function(e){return f.test(e)};var p="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",A="\\ud83c[\\udffb-\\udfff]",m="[^\\ud800-\\udfff]",y="(?:\\ud83c[\\udde6-\\uddff]){2}",h="[\\ud800-\\udbff][\\udc00-\\udfff]",v="(?:"+p+"|"+A+")?",g="[\\ufe0e\\ufe0f]?",b=g+v+"(?:\\u200d(?:"+[m,y,h].join("|")+")"+g+v+")*",w="(?:"+[m+p+"?",p,y,h,"[\\ud800-\\udfff]"].join("|")+")",N=RegExp(A+"(?="+A+")|"+w+b,"g");const U=function(e){return l(e)?function(e){return e.match(N)||[]}(e):function(e){return e.split("")}(e)},S=function(e){e=d(e);var t=l(e)?U(e):void 0,i=t?t[0]:e.charAt(0),n=t?c(t,1).join(""):e.slice(1);return i.toUpperCase()+n},_=function(e){return S(d(e).toLowerCase())}},2758:(e,t,i)=>{"use strict";i.d(t,{Z:()=>r});var n=i(9001),a=i(3391);const r=function(e){return"symbol"==typeof e||(0,a.Z)(e)&&"[object Symbol]"==(0,n.Z)(e)}}}]);
//# sourceMappingURL=87.js.map