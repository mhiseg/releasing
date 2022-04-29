(self.webpackChunkesm_ohri_hts_form_app=self.webpackChunkesm_ohri_hts_form_app||[]).push([[574],{9351:(e,_,t)=>{"use strict";t.d(_,{Z:()=>a});var r=t(9297),o=t(2242),i=t(9068),n=t.n(i);const a=()=>r.default.createElement("div",{className:n().centerLoadingSVG},r.default.createElement(o.Z,{description:"Active loading indicator",withOverlay:!1,small:!0}))},3683:(e,_,t)=>{"use strict";t.d(_,{p:()=>l});var r=t(6512),o=t(8349),i=t(6486),n=t(9297),a=t(4092),s=t.n(a);const l=({patient:e})=>n.default.createElement("div",{id:"header-wrapper",className:s().headerWrapper},n.default.createElement("div",{className:`${s().column} ${s().demo}`},n.default.createElement("div",{className:s().row},n.default.createElement("span",{className:s().name},`${e.name[0].given.join(" ")} ${e.name[0].family}`)),n.default.createElement("div",{className:`${s().row} ${s().details}`},n.default.createElement("span",null,(0,i.capitalize)(e.gender)," · ",(0,r.age)(e.birthDate)," ·"," ",(0,o.default)(e.birthDate).format("DD - MMM - YYYY")))),n.default.createElement("div",{className:`${s().column} ${s().weight}`},n.default.createElement("div",{className:`${s().row} ${s().weightLabel}`},n.default.createElement("span",null,"Weight")),n.default.createElement("div",{className:s().row},n.default.createElement("span",{className:s().weightValue},"60"),n.default.createElement("span",{className:s().weightUnit},"kg"))),n.default.createElement("div",{className:`${s().column} ${s().allergies}`},n.default.createElement("div",{className:s().row},n.default.createElement("span",{className:s().allergiesLabel},"Allergies")),n.default.createElement("div",{className:s().row},n.default.createElement("span",{className:s().allergiesValue},"Peanuts, Fructose"))))},6584:(e,_,t)=>{"use strict";t.d(_,{Z:()=>m});var r=t(9297),o=t(8436),i=t.n(o),n=t(1181),a=t.n(n),s=t(982);const l=({fields:e,onFieldChange:_,sectionTitle:t,showTitle:o})=>((0,r.useRef)(),r.default.createElement("div",{className:a().container},o&&r.default.createElement("h4",{className:a().sectionTitle},t),e.map(((e,t)=>{const o=(0,s.dK)(e.questionOptions.rendering);if(o)return r.default.createElement(o,{question:e,onChange:_,key:t,handler:(0,s.DS)(e.type)})})))),m=function({page:e,onFieldChange:_}){return r.default.createElement("div",{id:e.label},r.default.createElement("h4",{className:i().pageTitle},e.label),r.default.createElement("span",{className:i().required},"All fields are required unless marked optional"),e.sections.map(((t,o)=>r.default.createElement("div",{className:i().formSection,key:o},r.default.createElement(l,{fields:t.questions,showTitle:e.sections.length>1,onFieldChange:_,sectionTitle:t.label})))),r.default.createElement("hr",{className:i().divider}))}},5126:(e,_,t)=>{"use strict";t.d(_,{Z:()=>s});var r=t(3579),o=t(9297),i=t(1712),n=t.n(i),a=t(5829);const s=function({pages:e}){const _=e.map(((e,_)=>o.default.createElement("div",{className:n().space05,key:_},o.default.createElement(r.Z,{className:n().link,onClick:()=>{return _=e.label,void document.getElementById(_).scrollIntoView({behavior:"smooth",block:"center",inline:"center"});var _}},o.default.createElement(a.Z,null)," ",e.label))));return o.default.createElement("div",{className:n().leftNavWrapper},_)}},5933:(e,_,t)=>{"use strict";t.d(_,{Z:()=>r,k:()=>o});const r="30b849bd-c4f4-4254-a033-fe9cf01001d8",o="cf82933b-3f3f-45e7-a5ab-5d31aaee3da3"},9105:(e,_,t)=>{"use strict";t.d(_,{y:()=>r});const r=t(9297).default.createContext(void 0)},9574:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(9297),carbon_components_react__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(7012),carbon_components_react__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(1018),carbon_components_react__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(2967),carbon_components_react__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(734),_form_scss__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7324),_form_scss__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_form_scss__WEBPACK_IMPORTED_MODULE_1__),formik__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8519),yup__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8041),_ohri_form_context__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9105),_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(6512),_registry_registry__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(982),_ohri_form_resource__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(9069),_components_patient_banner_patient_banner_component__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(3683),_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(9351),_hts_encounters_list_hts_overview_list_component__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(2955),_components_sidebar_ohri_form_sidebar_component__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(5126),_components_page_ohri_form_page__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(6584),_constants__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(5933);const OHRIForm=({formJson,encounterUuid,onSubmit,onCancel})=>{const[fields,setFields]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),[currentProvider,setCurrentProvider]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),[location,setEncounterLocation]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),[,patient]=(0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_5__.useCurrentPatient)(),session=(0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_5__.useSessionUser)(),[initialValues,setInitialValues]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),encDate=new Date,[encounter,setEncounter]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),[form,setForm]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),[currentPage,setCurrentPage]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const e=JSON.parse(JSON.stringify(formJson)),_=[],t={};e.pages.forEach((e=>e.sections.forEach((e=>_.push(...e.questions))))),encounter?(_.forEach((e=>{var _;return t[e.id]=(null===(_=(0,_registry_registry__WEBPACK_IMPORTED_MODULE_6__.DS)(e.type))||void 0===_?void 0:_.getInitialValue(encounter,e))||""})),setEncounterLocation(encounter.location)):_.forEach((e=>{"checkbox"==e.questionOptions.rendering?t[e.id]=[]:t[e.id]=""})),setFields(_.map((e=>(e.hide?evaluateHideExpression(e,null,_):e.isHidden=!1,e)))),setForm(e),setInitialValues(t),setCurrentPage(null==e?void 0:e.pages)}),[encounter]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{session&&(encounterUuid||setEncounterLocation(session.sessionLocation),setCurrentProvider(session.currentProvider.uuid))}),[session]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{let e;return encounterUuid&&(e=(0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_5__.openmrsObservableFetch)(`/ws/rest/v1/encounter/${encounterUuid}?v=${_hts_encounters_list_hts_overview_list_component__WEBPACK_IMPORTED_MODULE_10__.htsEncounterRepresentation}`).subscribe((e=>{setEncounter(e.data)}))),()=>{var _;return null===(_=e)||void 0===_?void 0:_.unsubscribe()}}),[encounterUuid]);const evaluateHideExpression=(field,determinantValue,allFields)=>{if("string"!=typeof field.hide)return void(field.isHidden=!1);const allFieldsKeys=allFields.map((e=>e.id)),parts=field.hide.trim().split(" "),determinantField=parts[0];if(allFieldsKeys.includes(determinantField)){field.hideDeterminant=determinantField;const determinant=allFields.find((e=>e.id===determinantField));determinant.dependant=field.id;let hideExp=field.hide;determinantValue=determinantValue||initialValues[determinantField];const expectedValue=parts[2];hideExp=hideExp.replace(determinantField,"determinantValue"),hideExp=hideExp.replace(expectedValue,"expectedValue"),field.isHidden=eval(hideExp)}else field.isHidden=!1},handleFormSubmit=e=>{const _=[];fields.filter((e=>!e.isHidden&&"obs"==e.type&&e.value)).forEach((e=>{Array.isArray(e.value)?_.push(...e.value):_.push(e.value)}));let t={};encounter?(Object.assign(t,encounter),t.location=location.uuid,-1!==t.encounterProviders.findIndex((e=>e.provider.uuid==currentProvider))||(t.encounterProviders=[...t.encounterProviders,{provider:currentProvider,encounterRole:"240b26f9-dd88-4172-823d-4a8bfeb7841f"}]),t.obs=_):t={patient:patient.id,encounterDatetime:encDate,location:location.uuid,encounterType:formJson.encounterType||_constants__WEBPACK_IMPORTED_MODULE_13__.Z,encounterProviders:[{provider:currentProvider,encounterRole:"240b26f9-dd88-4172-823d-4a8bfeb7841f"}],obs:_};const r=new AbortController;(0,_ohri_form_resource__WEBPACK_IMPORTED_MODULE_7__.M1)(r,t,encounterUuid).then((e=>{e.ok&&onSubmit&&onSubmit()}))},onFieldChange=(e,_)=>{const t=fields.find((_=>_.id==e));if(t.dependant){const r=fields.find((_=>_.hideDeterminant==e));evaluateHideExpression(r,_,fields);let o=[...fields];const i=o.findIndex((e=>e.id==t.dependant));o[i]=r,setFields(o)}};return react__WEBPACK_IMPORTED_MODULE_0__.default.createElement("div",{className:_form_scss__WEBPACK_IMPORTED_MODULE_1___default().ohriformcontainer},react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(formik__WEBPACK_IMPORTED_MODULE_2__.J9,{enableReinitialize:!0,initialValues,validationSchema:yup__WEBPACK_IMPORTED_MODULE_3__.Ry({}),onSubmit:(e,{setSubmitting:_})=>{handleFormSubmit(e),_(!1)}},(e=>react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(formik__WEBPACK_IMPORTED_MODULE_2__.l0,{className:_form_scss__WEBPACK_IMPORTED_MODULE_1___default().formStyle},patient?react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(react__WEBPACK_IMPORTED_MODULE_0__.default.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(_components_patient_banner_patient_banner_component__WEBPACK_IMPORTED_MODULE_8__.p,{patient}),react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_14__.Z,{style:{backgroundColor:"red !important"}},react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_15__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_16__.Z,{lg:2,md:2,sm:1},react__WEBPACK_IMPORTED_MODULE_0__.default.createElement("div",{className:_form_scss__WEBPACK_IMPORTED_MODULE_1___default().ohriSidebar},react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(_components_sidebar_ohri_form_sidebar_component__WEBPACK_IMPORTED_MODULE_11__.Z,{pages:form.pages}),react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_17__.Z,{style:{marginBottom:"1rem",width:"11.688rem",display:"block"},type:"submit"},"Save"),react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_17__.Z,{style:{width:"11.688rem"},kind:"tertiary",onClick:()=>onCancel?onCancel():null},"Cancel"))),react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_16__.Z,{lg:10,md:6},react__WEBPACK_IMPORTED_MODULE_0__.default.createElement("div",{className:_form_scss__WEBPACK_IMPORTED_MODULE_1___default().ohriFormContent},react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(_ohri_form_context__WEBPACK_IMPORTED_MODULE_4__.y.Provider,{value:{values:e.values,setFieldValue:e.setFieldValue,setEncounterLocation,fields,encounterContext:{patient,encounter,location,sessionMode:encounterUuid?"edit":"enter",date:encDate}}},react__WEBPACK_IMPORTED_MODULE_0__.default.createElement("div",{className:_form_scss__WEBPACK_IMPORTED_MODULE_1___default().contentWrapper},react__WEBPACK_IMPORTED_MODULE_0__.default.createElement("h4",{className:_form_scss__WEBPACK_IMPORTED_MODULE_1___default().title},"Add a HTS record"),form.pages.map(((e,_)=>react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(_components_page_ohri_form_page__WEBPACK_IMPORTED_MODULE_12__.Z,{page:e,onFieldChange})))))))))):react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__.Z,null)))))},__WEBPACK_DEFAULT_EXPORT__=OHRIForm},9069:(e,_,t)=>{"use strict";t.d(_,{M1:()=>i,mu:()=>n,aP:()=>a});var r=t(6512),o=t(5709);function i(e,_,t){let o="/ws/rest/v1/encounter";return t&&(o+=`/${t}`),(0,r.openmrsFetch)(o,{headers:{"Content-Type":"application/json"},method:"POST",body:_,signal:e.signal})}function n(e,_){return(0,r.openmrsObservableFetch)(`/ws/rest/v1/concept/${e}?v=${_}`).pipe((0,o.U)((e=>e.data)))}function a(e){return(0,r.openmrsObservableFetch)(`/ws/rest/v1/location?tag=${e}&v=custom:(uuid,display)`).pipe((0,o.U)((({data:e})=>e.results)))}},982:(e,_,t)=>{"use strict";t.d(_,{dK:()=>W,DS:()=>B});var r=t(9297),o=t(3149),i=t(5005),n=t(1572),a=t(3136),s=t.n(a),l=t(8519),m=t(9105),d=t(521),c=t(3307);var u=t(7938),h=t(9069),p=t(6512),f=t(1870),g=t.n(f),b=t(8197);function E(){return(E=Object.assign||function(e){for(var _=1;_<arguments.length;_++){var t=arguments[_];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var v=t(7491),O=t(4849),P=t(5933);var x=t(7177),D=t.n(x);var M=t(9725);function y(){return(y=Object.assign||function(e){for(var _=1;_<arguments.length;_++){var t=arguments[_];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var C=t(71);function w(){return(w=Object.assign||function(e){for(var _=1;_<arguments.length;_++){var t=arguments[_];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var T=t(7446);var I=t(381),L=t.n(I);const R={handleFieldSubmission:(e,_,t)=>"checkbox"==e.questionOptions.rendering?S(e,_,t):(e.value?"radio"==e.questionOptions.rendering?e.value.value=_:"edit"!=t.sessionMode||_?_?(e.value.value=_,e.value.voided=!1):e.value=void 0:e.value.voided=!0:e.value={person:t.patient.id,obsDatetime:t.date,concept:e.questionOptions.concept,location:t.location,order:null,groupMembers:[],voided:!1,value:_},e.value),getInitialValue:(e,_)=>{const t=e.obs.find((e=>e.concept.uuid==_.questionOptions.concept));return t?(_.value=t,"string"==typeof t.value||"number"==typeof t.value?"date"==_.questionOptions.rendering?L()(t.value).toDate():t.value:"checkbox"==_.questionOptions.rendering?(_.value=e.obs.filter((e=>e.concept.uuid==_.questionOptions.concept)),_.value.map((e=>e.value.uuid))):"toggle"==_.questionOptions.rendering?(_.value.value=t.value.uuid==P.k,_.value.value):t.value.uuid):""}},S=(e,_,t)=>{const{checked:r,id:o}=_;if(e.value||(e.value=[]),r){const _=e.value.find((e=>e.value.uuid==o));_&&_.voided?_.voided=!1:e.value.push({person:t.patient.id,obsDatetime:t.date,concept:e.questionOptions.concept,location:t.location,order:null,groupMembers:[],voided:!1,value:o})}else{const _=e.value.find((e=>e.value.uuid==o));_&&"edit"==t.sessionMode?_.voided=!0:e.value=e.value.filter((e=>e.value!==o))}return e.value},A=[{id:"OHRIText",component:({question:e,onChange:_,handler:t})=>{const[o,i]=(0,l.U$)(e.id),{encounterContext:n}=r.default.useContext(m.y),[a,d]=(0,r.useState)();return o.onBlur=()=>{a!==o.value&&(_(e.id,o.value),e.value=t.handleFieldSubmission(e,o.value,n))},!e.isHidden&&r.default.createElement("div",{className:s().formField},r.default.createElement(C.Z,w({},o,{id:e.id,className:s().textInputOverrides,labelText:e.label,name:e.id,value:o.value||"",onFocus:()=>d(o.value)})))},type:"text"},{id:"OHRIRadio",component:({question:e,onChange:_,handler:t})=>{const[i,n]=(0,l.U$)(e.id),{setFieldValue:a,encounterContext:s}=r.default.useContext(m.y),[d,c]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{var _;d&&null!==(_=e.value)&&void 0!==_&&_.value&&"boolean"!=typeof e.value.value&&(e.value.value=e.value.value.uuid==P.k)}),[e.value,d]),(0,r.useEffect)((()=>{(0,h.mu)(e.questionOptions.concept,"custom:(uuid,display,datatype:(uuid,display,name))").subscribe((e=>{"Boolean"==e.datatype.name&&c(!0)}))}),[e.questionOptions.concept]),r.default.createElement("div",null,r.default.createElement(o.Z,{legendText:e.label},r.default.createElement(v.Z,{defaultSelected:"default-selected",name:e.id,valueSelected:i.value,onChange:r=>{a(e.id,r),_(e.id,r),e.value=t.handleFieldSubmission(e,d?r==P.k:r,s)},orientation:"vertical"},e.questionOptions.answers.map(((_,t)=>r.default.createElement(O.Z,{id:`${e.id}-${_.label}`,labelText:_.label,value:_.concept,key:t}))))))},type:"radio"},{id:"OHRIDate",component:({question:e,onChange:_,handler:t})=>{const[o,i]=(0,l.U$)(e.id),{setFieldValue:n,encounterContext:a}=r.default.useContext(m.y);return r.default.createElement("div",{className:s().formField},r.default.createElement(d.Z,{datePickerType:"single",onChange:([r])=>{n(e.id,r),_(e.id,r),e.value=t.handleFieldSubmission(e,r,a)},className:s().datePickerOverrides},r.default.createElement(c.Z,{id:"date-picker-calendar-id",placeholder:"mm/dd/yyyy",labelText:e.label,value:o.value instanceof Date?o.value.toLocaleDateString(window.navigator.language):o.value})))},type:"date"},{id:"OHRINumber",component:({question:e,onChange:_,handler:t})=>{const[o,i]=(0,l.U$)(e.id),{encounterContext:n}=r.default.useContext(m.y),[a,d]=(0,r.useState)();return o.onBlur=()=>{a!==o.value&&(_(e.id,o.value),e.value=t.handleFieldSubmission(e,o.value,n))},r.default.createElement("div",{className:s().numberInputWrapper},r.default.createElement(b.ZP,E({},o,{id:e.id,invalidText:"Number is not valid",label:e.label,max:e.questionOptions.max||void 0,min:e.questionOptions.min||void 0,name:e.id,value:o.value||"",onFocus:()=>d(o.value),allowEmpty:!0,size:"xl"})))},type:"number"},{id:"OHRIMultiSelect",component:({question:e,onChange:_,handler:t})=>{const[i,n]=(0,l.U$)(e.id),{setFieldValue:a,encounterContext:s}=r.default.useContext(m.y),d=(_,r,o)=>{a(e.id,_?[...i.value,o.currentTarget.value]:i.value.filter((e=>e!==o.currentTarget.value))),e.value=t.handleFieldSubmission(e,{checked:_,id:o.currentTarget.value},s)};return r.default.createElement("div",null,r.default.createElement(o.Z,{legendText:e.label},e.questionOptions.answers.map(((_,t)=>r.default.createElement(g(),{id:`${e.id}-${_.concept}`,labelText:_.label,value:_.concept,key:t,onChange:d,checked:i.value.includes(_.concept)})))))},type:"checkbox"},{id:"OHRIContentSwitcher",component:({question:e,onChange:_,handler:t})=>{const[a,d]=(0,l.U$)(e.id),{setFieldValue:c,encounterContext:u}=r.default.useContext(m.y),h=(0,r.useMemo)((()=>e.questionOptions.answers.findIndex((e=>e.concept==a.value))),[a.value]);return!e.isHidden&&r.default.createElement("div",{className:s().textContainer},r.default.createElement(o.Z,{legendText:e.label},r.default.createElement(i.Z,{onChange:r=>{c(e.id,r.name),_(e.id,r.name),e.value=t.handleFieldSubmission(e,r.name,u)},selectedIndex:h,className:s().selectedOption},e.questionOptions.answers.map(((e,_)=>r.default.createElement(n.Z,{className:h===_?s().switchOverrides:s().switchOverridesNone,name:e.concept,text:e.label,key:_}))))))},type:"content-switcher"},{id:"OHRIEncounterLocationPicker",component:({question:e})=>{const[_,t]=(0,l.U$)(e.id),{setEncounterLocation:o,setFieldValue:i}=r.default.useContext(m.y),[n,a]=(0,r.useState)([]);return(0,r.useEffect)((()=>{e.questionOptions.locationTag&&(0,h.aP)(e.questionOptions.locationTag.trim().split(" ").join("%20")).subscribe((e=>a(e)),(e=>(0,p.createErrorHandler)()))}),[]),r.default.createElement("div",{className:s().formInputField},r.default.createElement(u.Z,{id:e.id,titleText:e.label,label:"Choose location",items:n,itemToString:e=>e.display,selectedItem:_.value,onChange:({selectedItem:_})=>{i(e.id,_),o(_)}}))},type:"encounter-location"},{id:"OHRIDropdown",component:({question:e,onChange:_,handler:t})=>{const[o,i]=(0,l.U$)(e.id),{setFieldValue:n,encounterContext:a}=r.default.useContext(m.y),[d,c]=r.default.useState([]);return(0,r.useEffect)((()=>{c(e.questionOptions.answers.map((e=>e.value||e.concept)))}),[e.questionOptions.answers]),r.default.createElement("div",{className:s().formInputField},r.default.createElement(D(),{id:e.id,titleText:e.label,label:"Choose an option",items:d,itemToString:_=>e.questionOptions.answers.find((e=>e.value?e.value==_:e.concept==_)).label,selectedItem:o.value,onChange:({selectedItem:r})=>{return o=r,n(e.id,o),_(e.id,o),void(e.value=t.handleFieldSubmission(e,o,a));var o}}))},type:"select"},{id:"OHRITextArea",component:({question:e,onChange:_,handler:t})=>{const[o,i]=(0,l.U$)(e.id),{encounterContext:n}=r.default.useContext(m.y),[a,d]=(0,r.useState)();return o.onBlur=()=>{a!==o.value&&(_(e.id,o.value),e.value=t.handleFieldSubmission(e,o.value,n))},!e.isHidden&&r.default.createElement("div",{className:s().formField},r.default.createElement(M.Z,y({},o,{id:e.id,labelText:e.label,name:e.id,value:o.value||"",className:s().textInputOverrides,onFocus:()=>d(o.value),rows:e.questionOptions.rows||4})))},type:"textarea"},{id:"OHRIToggle",component:({question:e,onChange:_,handler:t})=>{const[o,i]=(0,l.U$)(e.id),{setFieldValue:n,encounterContext:a}=r.default.useContext(m.y);return r.default.createElement("div",{className:s().formField},r.default.createElement(T.Z,{labelText:e.label,id:e.id,labelA:e.questionOptions.toggleOptions.labelFalse,labelB:e.questionOptions.toggleOptions.labelTrue,onToggle:r=>{n(e.id,r),_(e.id,r),e.value=t.handleFieldSubmission(e,r,a)},toggled:o.value}))},type:"toggle"}],U=[{id:"ObsSubmissionHandler",component:R,type:"obs"},{id:"EncounterLocationSubmissionHandler",component:{handleFieldSubmission:(e,_,t)=>null,getInitialValue:(e,_)=>({display:e.location.name,uuid:e.location.uuid})},type:"encounterLocation"}],W=e=>{var _;return null===(_=A.find((_=>_.type==e)))||void 0===_?void 0:_.component};function B(e){var _;return null===(_=U.find((_=>_.type==e)))||void 0===_?void 0:_.component}},5225:(e,_,t)=>{(_=t(3645)(!1)).push([e.id,".esm-ohri-hts-form__loading-component__centerLoadingSVG___Vme8M{display:flex;width:100vw;height:100vh;justify-content:center;align-items:center}",""]),_.locals={centerLoadingSVG:"esm-ohri-hts-form__loading-component__centerLoadingSVG___Vme8M"},e.exports=_},6587:(e,_,t)=>{(_=t(3645)(!1)).push([e.id,'.esm-ohri-hts-form__patient-banner__productiveHeading01___3IV1N{font-size:.875rem;font-weight:600;line-height:1.29;letter-spacing:.16px}.esm-ohri-hts-form__patient-banner__productiveHeading02___Fe3xU{font-size:1rem;font-weight:600;line-height:1.375;letter-spacing:0}.esm-ohri-hts-form__patient-banner__productiveHeading03___3sHJI{font-size:1.25rem;font-weight:400;line-height:1.4;letter-spacing:0}.esm-ohri-hts-form__patient-banner__productiveHeading04___1nh3V{font-size:1.75rem;font-weight:400;line-height:1.29;letter-spacing:0}.esm-ohri-hts-form__patient-banner__productiveHeading05___2Q8eh{font-size:2rem;font-weight:400;line-height:1.25;letter-spacing:0}.esm-ohri-hts-form__patient-banner__productiveHeading06___2OEos{font-size:2rem;font-weight:300;line-height:1.199;letter-spacing:0}.esm-ohri-hts-form__patient-banner__bodyShort01___1St_2{font-size:.875rem;font-weight:400;line-height:1.29;letter-spacing:.16px}.esm-ohri-hts-form__patient-banner__helperText01___3fF-O{font-size:.75rem;line-height:1.34;letter-spacing:.32px}.esm-ohri-hts-form__patient-banner__bodyShort02___3XbWf{font-size:1rem;font-weight:400;line-height:1.375;letter-spacing:0}.esm-ohri-hts-form__patient-banner__bodyLong01___1xcA0{font-size:.875rem;font-weight:400;line-height:1.43;letter-spacing:.16px}.esm-ohri-hts-form__patient-banner__bodyLong02___1B3y2{font-size:1rem;font-weight:400;line-height:1.5;letter-spacing:0}.esm-ohri-hts-form__patient-banner__label01___3xCQ6{font-size:.75rem;font-weight:400;line-height:1.34;letter-spacing:.32px}.esm-ohri-hts-form__patient-banner__text01___E6Jpi{color:#161616}.esm-ohri-hts-form__patient-banner__text02___1FL_i{color:#525252}aside{background-color:#fff !important}.esm-ohri-hts-form__patient-banner__headerWrapper___1lOvD{display:flex;width:100%;position:fixed;z-index:8000;background:#fff;margin:0 0 1rem;padding:1rem .5rem 1rem;margin-top:-10px;border-bottom:.063rem solid #c6c6c6}.esm-ohri-hts-form__patient-banner__row___FGEDh{display:flex;flex-direction:row;align-items:baseline}.esm-ohri-hts-form__patient-banner__demo___Jzt5P{width:50%;border-right:.1rem solid #c6c6c6;margin-left:1rem}.esm-ohri-hts-form__patient-banner__name___X1dOw{margin:0 8.375rem .5rem 0;font-family:"IBM Plex Sans";font-size:1.4rem;line-height:1.5;color:#161616}.esm-ohri-hts-form__patient-banner__details___1qHz-{font-size:1.2rem;color:#525252;font-family:"IBM Plex Sans"}.esm-ohri-hts-form__patient-banner__weight___14-od{width:10rem;margin-left:2rem}.esm-ohri-hts-form__patient-banner__weightLabel___i3zds,.esm-ohri-hts-form__patient-banner__allergiesLabel___4MEzp{margin:0 0 .5rem 0;font-family:"IBM Plex Sans";font-size:1.2rem;line-height:1.5;color:#525252}.esm-ohri-hts-form__patient-banner__weightValue___xmEWS,.esm-ohri-hts-form__patient-banner__allergiesValue___3iSbX{font-family:"IBM Plex Sans";font-size:1.3rem;color:#161616}.esm-ohri-hts-form__patient-banner__weightUnit___2uzEo{margin-left:.5rem;font-size:1.2rem;font-family:"IBM Plex Sans";color:#525252}.esm-ohri-hts-form__patient-banner__allergies___7YAiM{width:60%}',""]),_.locals={productiveHeading01:"esm-ohri-hts-form__patient-banner__productiveHeading01___3IV1N",productiveHeading02:"esm-ohri-hts-form__patient-banner__productiveHeading02___Fe3xU",productiveHeading03:"esm-ohri-hts-form__patient-banner__productiveHeading03___3sHJI",productiveHeading04:"esm-ohri-hts-form__patient-banner__productiveHeading04___1nh3V",productiveHeading05:"esm-ohri-hts-form__patient-banner__productiveHeading05___2Q8eh",productiveHeading06:"esm-ohri-hts-form__patient-banner__productiveHeading06___2OEos",bodyShort01:"esm-ohri-hts-form__patient-banner__bodyShort01___1St_2",helperText01:"esm-ohri-hts-form__patient-banner__helperText01___3fF-O",bodyShort02:"esm-ohri-hts-form__patient-banner__bodyShort02___3XbWf",bodyLong01:"esm-ohri-hts-form__patient-banner__bodyLong01___1xcA0",bodyLong02:"esm-ohri-hts-form__patient-banner__bodyLong02___1B3y2",label01:"esm-ohri-hts-form__patient-banner__label01___3xCQ6",text01:"esm-ohri-hts-form__patient-banner__text01___E6Jpi",text02:"esm-ohri-hts-form__patient-banner__text02___1FL_i",headerWrapper:"esm-ohri-hts-form__patient-banner__headerWrapper___1lOvD",row:"esm-ohri-hts-form__patient-banner__row___FGEDh",demo:"esm-ohri-hts-form__patient-banner__demo___Jzt5P",name:"esm-ohri-hts-form__patient-banner__name___X1dOw",details:"esm-ohri-hts-form__patient-banner__details___1qHz-",weight:"esm-ohri-hts-form__patient-banner__weight___14-od",weightLabel:"esm-ohri-hts-form__patient-banner__weightLabel___i3zds",allergiesLabel:"esm-ohri-hts-form__patient-banner__allergiesLabel___4MEzp",weightValue:"esm-ohri-hts-form__patient-banner__weightValue___xmEWS",allergiesValue:"esm-ohri-hts-form__patient-banner__allergiesValue___3iSbX",weightUnit:"esm-ohri-hts-form__patient-banner__weightUnit___2uzEo",allergies:"esm-ohri-hts-form__patient-banner__allergies___7YAiM"},e.exports=_},1763:(e,_,t)=>{(_=t(3645)(!1)).push([e.id,".esm-ohri-hts-form___form__ohriformcontainer___1bpMc{margin:0rem 0rem .5rem 0rem;height:100%;background-color:#fff !important}.esm-ohri-hts-form___form__formStyle___1TAP2{background-color:#fff !important}.esm-ohri-hts-form___form__contentWrapper___3jAA7,.esm-ohri-hts-form___form__submit___3EMJF{margin:100px 20px 0px 20px}.esm-ohri-hts-form___form__title___yrqc-{margin:0 31.5rem 1.5rem 0;font-size:1.75rem;line-height:1.29;color:var(--color-gray-100)}.esm-ohri-hts-form___form__ohriSidebar___3vLBC{position:fixed;margin-top:5.5rem}.esm-ohri-hts-form___form__ohriFormContent___17IXv{position:absolute;overflow:auto;z-index:7999;overflow:hidden}",""]),_.locals={ohriformcontainer:"esm-ohri-hts-form___form__ohriformcontainer___1bpMc",formStyle:"esm-ohri-hts-form___form__formStyle___1TAP2",contentWrapper:"esm-ohri-hts-form___form__contentWrapper___3jAA7",submit:"esm-ohri-hts-form___form__submit___3EMJF",title:"esm-ohri-hts-form___form__title___yrqc-",ohriSidebar:"esm-ohri-hts-form___form__ohriSidebar___3vLBC",ohriFormContent:"esm-ohri-hts-form___form__ohriFormContent___17IXv"},e.exports=_},2075:(e,_,t)=>{(_=t(3645)(!1)).push([e.id,".esm-ohri-hts-form___input__productiveHeading01___3efTB{font-size:.875rem;font-weight:600;line-height:1.29;letter-spacing:.16px}.esm-ohri-hts-form___input__productiveHeading02___3JK0K{font-size:1rem;font-weight:600;line-height:1.375;letter-spacing:0}.esm-ohri-hts-form___input__productiveHeading03___oSZSr{font-size:1.25rem;font-weight:400;line-height:1.4;letter-spacing:0}.esm-ohri-hts-form___input__productiveHeading04___1k7Gz{font-size:1.75rem;font-weight:400;line-height:1.29;letter-spacing:0}.esm-ohri-hts-form___input__productiveHeading05___2DS9X{font-size:2rem;font-weight:400;line-height:1.25;letter-spacing:0}.esm-ohri-hts-form___input__productiveHeading06___3nquH{font-size:2rem;font-weight:300;line-height:1.199;letter-spacing:0}.esm-ohri-hts-form___input__bodyShort01___1-lOo{font-size:.875rem;font-weight:400;line-height:1.29;letter-spacing:.16px}.esm-ohri-hts-form___input__helperText01___3mUe2{font-size:.75rem;line-height:1.34;letter-spacing:.32px}.esm-ohri-hts-form___input__bodyShort02___1SQXu{font-size:1rem;font-weight:400;line-height:1.375;letter-spacing:0}.esm-ohri-hts-form___input__bodyLong01___1SogS{font-size:.875rem;font-weight:400;line-height:1.43;letter-spacing:.16px}.esm-ohri-hts-form___input__bodyLong02___1Wtsy{font-size:1rem;font-weight:400;line-height:1.5;letter-spacing:0}.esm-ohri-hts-form___input__label01___2tspH{font-size:.75rem;font-weight:400;line-height:1.34;letter-spacing:.32px}.esm-ohri-hts-form___input__text01___1TD33{color:#161616}.esm-ohri-hts-form___input__text02___34XWE{color:#525252}aside{background-color:#fff !important}.esm-ohri-hts-form___input__formField___1AY8i,.esm-ohri-hts-form___input__numberInputWrapper___3SPQH .bx--number,.esm-ohri-hts-form___input__formInputField___xDdc2{padding-bottom:1rem}.esm-ohri-hts-form___input__datePickerOverrides___gyecw input{width:22.313rem !important}.esm-ohri-hts-form___input__formInputField___xDdc2{width:22.313rem}.esm-ohri-hts-form___input__numberInputWrapper___3SPQH .bx--number{width:22.313rem;font-size:.875rem}.esm-ohri-hts-form___input__textContainer___12KRx label{font-size:.875rem !important}.esm-ohri-hts-form___input__selectedOption___SZu3V{border-radius:4px;width:15rem}.esm-ohri-hts-form___input__selectedOption___SZu3V button{background-color:#fff}.esm-ohri-hts-form___input__switchOverrides___3-ALO{background-color:#edf5ff !important;color:#0f62fe !important;padding:0 0 0 1rem;border:solid 1px #0f62fe !important}.esm-ohri-hts-form___input__switchOverrides___3-ALO:focus{border:none !important}.esm-ohri-hts-form___input__selectedOption___SZu3V button:before{display:none !important}.esm-ohri-hts-form___input__switchOverridesNone___nXV_C{background-color:#fff !important;padding:0 0 0 1rem;border:solid 1px #edf5ff !important}.esm-ohri-hts-form___input__radioButton_ohri___76iRx input[type=radio]{opacity:0 !important;position:fixed;width:0}.esm-ohri-hts-form___input__radioButton_ohri___76iRx label{display:inline-block;border:1px solid #a6c8ff;color:#525252;padding:.688rem 1rem;padding-right:3rem;border-radius:4px 0 0 4px;background-color:#fff}.esm-ohri-hts-form___input__radioButton_ohri___76iRx label:last-child{margin-left:-5px;border-radius:0 4px 4px 0}.esm-ohri-hts-form___input__radioButton_ohri___76iRx input[type=radio]:checked+label{color:#0f62fe;border-color:#0f62fe;background-color:#edf5ff}.esm-ohri-hts-form___input__radioButton_ohri___76iRx>.esm-ohri-hts-form___input__bx--radio-button-wrapper___Cimqv{margin-right:0rem !important}.esm-ohri-hts-form___input__textInputOverrides___1IitC{width:22.313rem}.esm-ohri-hts-form___input__textInputOverrides___1IitC label{font-size:.875rem !important}",""]),_.locals={productiveHeading01:"esm-ohri-hts-form___input__productiveHeading01___3efTB",productiveHeading02:"esm-ohri-hts-form___input__productiveHeading02___3JK0K",productiveHeading03:"esm-ohri-hts-form___input__productiveHeading03___oSZSr",productiveHeading04:"esm-ohri-hts-form___input__productiveHeading04___1k7Gz",productiveHeading05:"esm-ohri-hts-form___input__productiveHeading05___2DS9X",productiveHeading06:"esm-ohri-hts-form___input__productiveHeading06___3nquH",bodyShort01:"esm-ohri-hts-form___input__bodyShort01___1-lOo",helperText01:"esm-ohri-hts-form___input__helperText01___3mUe2",bodyShort02:"esm-ohri-hts-form___input__bodyShort02___1SQXu",bodyLong01:"esm-ohri-hts-form___input__bodyLong01___1SogS",bodyLong02:"esm-ohri-hts-form___input__bodyLong02___1Wtsy",label01:"esm-ohri-hts-form___input__label01___2tspH",text01:"esm-ohri-hts-form___input__text01___1TD33",text02:"esm-ohri-hts-form___input__text02___34XWE",formField:"esm-ohri-hts-form___input__formField___1AY8i",numberInputWrapper:"esm-ohri-hts-form___input__numberInputWrapper___3SPQH",formInputField:"esm-ohri-hts-form___input__formInputField___xDdc2",datePickerOverrides:"esm-ohri-hts-form___input__datePickerOverrides___gyecw",textContainer:"esm-ohri-hts-form___input__textContainer___12KRx",selectedOption:"esm-ohri-hts-form___input__selectedOption___SZu3V",switchOverrides:"esm-ohri-hts-form___input__switchOverrides___3-ALO",switchOverridesNone:"esm-ohri-hts-form___input__switchOverridesNone___nXV_C",radioButton_ohri:"esm-ohri-hts-form___input__radioButton_ohri___76iRx","bx--radio-button-wrapper":"esm-ohri-hts-form___input__bx--radio-button-wrapper___Cimqv",textInputOverrides:"esm-ohri-hts-form___input__textInputOverrides___1IitC"},e.exports=_},5623:(e,_,t)=>{(_=t(3645)(!1)).push([e.id,".esm-ohri-hts-form___page__divider___1yvKR{height:.063rem;margin:1.438rem 0 0 .063rem;border:solid 1px rgba(107,104,104,.5);margin-bottom:3.063rem;padding-right:1.438rem}.esm-ohri-hts-form___page__pageTitle___2VjsK{margin:0 39.438rem .25rem 0;font-size:1.25rem;font-weight:600;line-height:1.4;color:var(--color-gray-100);margin-top:1.5rem;max-Width:25.55rem}.esm-ohri-hts-form___page__required___1elZl{margin:.25rem 27rem 1.438rem 0;font-size:.875rem;line-height:1.29;letter-spacing:.16px;color:var(--color-gray-70);margin-bottom:1.5rem}.esm-ohri-hts-form___page__formSection___1fbE6{margin-top:1.438rem}",""]),_.locals={divider:"esm-ohri-hts-form___page__divider___1yvKR",pageTitle:"esm-ohri-hts-form___page__pageTitle___2VjsK",required:"esm-ohri-hts-form___page__required___1elZl",formSection:"esm-ohri-hts-form___page__formSection___1fbE6"},e.exports=_},244:(e,_,t)=>{(_=t(3645)(!1)).push([e.id,".esm-ohri-hts-form___section__section___1Ua8A{border-radius:solid 1px rgba(107,104,104,.5);margin-bottom:3.063rem}.esm-ohri-hts-form___section__sectionTitle___ckhWT{max-Width:12rem;font-size:1rem;font-weight:600;line-height:1.38;color:#525252;margin-top:1.438rem;margin-bottom:1.5rem}.esm-ohri-hts-form___section__container___1Gp6r{margin-top:1.438rem}",""]),_.locals={section:"esm-ohri-hts-form___section__section___1Ua8A",sectionTitle:"esm-ohri-hts-form___section__sectionTitle___ckhWT",container:"esm-ohri-hts-form___section__container___1Gp6r"},e.exports=_},1458:(e,_,t)=>{(_=t(3645)(!1)).push([e.id,".esm-ohri-hts-form__ohri-form-sidebar-component__productiveHeading01___2a1ss{font-size:.875rem;font-weight:600;line-height:1.29;letter-spacing:.16px}.esm-ohri-hts-form__ohri-form-sidebar-component__productiveHeading02___3ztK8{font-size:1rem;font-weight:600;line-height:1.375;letter-spacing:0}.esm-ohri-hts-form__ohri-form-sidebar-component__productiveHeading03___3UWKO{font-size:1.25rem;font-weight:400;line-height:1.4;letter-spacing:0}.esm-ohri-hts-form__ohri-form-sidebar-component__productiveHeading04___2nBC8{font-size:1.75rem;font-weight:400;line-height:1.29;letter-spacing:0}.esm-ohri-hts-form__ohri-form-sidebar-component__productiveHeading05___2FERy{font-size:2rem;font-weight:400;line-height:1.25;letter-spacing:0}.esm-ohri-hts-form__ohri-form-sidebar-component__productiveHeading06___xd5O-{font-size:2rem;font-weight:300;line-height:1.199;letter-spacing:0}.esm-ohri-hts-form__ohri-form-sidebar-component__bodyShort01___fiRR7{font-size:.875rem;font-weight:400;line-height:1.29;letter-spacing:.16px}.esm-ohri-hts-form__ohri-form-sidebar-component__helperText01___5yubD{font-size:.75rem;line-height:1.34;letter-spacing:.32px}.esm-ohri-hts-form__ohri-form-sidebar-component__bodyShort02___1spZ1{font-size:1rem;font-weight:400;line-height:1.375;letter-spacing:0}.esm-ohri-hts-form__ohri-form-sidebar-component__bodyLong01___1kGp9{font-size:.875rem;font-weight:400;line-height:1.43;letter-spacing:.16px}.esm-ohri-hts-form__ohri-form-sidebar-component__bodyLong02___qVlAW{font-size:1rem;font-weight:400;line-height:1.5;letter-spacing:0}.esm-ohri-hts-form__ohri-form-sidebar-component__label01___3RA0R{font-size:.75rem;font-weight:400;line-height:1.34;letter-spacing:.32px}.esm-ohri-hts-form__ohri-form-sidebar-component__text01___3SrmB{color:#161616}.esm-ohri-hts-form__ohri-form-sidebar-component__text02___3jbh-{color:#525252}aside{background-color:#fff !important}.esm-ohri-hts-form__ohri-form-sidebar-component__space05___1pQAY{margin:1rem 0 1rem 0}.esm-ohri-hts-form__ohri-form-sidebar-component__link___2i3jc{margin:.375rem 0 .375rem .5rem;font-size:1rem;line-height:1.43;letter-spacing:.16px;color:#161616;cursor:pointer}.esm-ohri-hts-form__ohri-form-sidebar-component__link___2i3jc:hover{outline:none}",""]),_.locals={productiveHeading01:"esm-ohri-hts-form__ohri-form-sidebar-component__productiveHeading01___2a1ss",productiveHeading02:"esm-ohri-hts-form__ohri-form-sidebar-component__productiveHeading02___3ztK8",productiveHeading03:"esm-ohri-hts-form__ohri-form-sidebar-component__productiveHeading03___3UWKO",productiveHeading04:"esm-ohri-hts-form__ohri-form-sidebar-component__productiveHeading04___2nBC8",productiveHeading05:"esm-ohri-hts-form__ohri-form-sidebar-component__productiveHeading05___2FERy",productiveHeading06:"esm-ohri-hts-form__ohri-form-sidebar-component__productiveHeading06___xd5O-",bodyShort01:"esm-ohri-hts-form__ohri-form-sidebar-component__bodyShort01___fiRR7",helperText01:"esm-ohri-hts-form__ohri-form-sidebar-component__helperText01___5yubD",bodyShort02:"esm-ohri-hts-form__ohri-form-sidebar-component__bodyShort02___1spZ1",bodyLong01:"esm-ohri-hts-form__ohri-form-sidebar-component__bodyLong01___1kGp9",bodyLong02:"esm-ohri-hts-form__ohri-form-sidebar-component__bodyLong02___qVlAW",label01:"esm-ohri-hts-form__ohri-form-sidebar-component__label01___3RA0R",text01:"esm-ohri-hts-form__ohri-form-sidebar-component__text01___3SrmB",text02:"esm-ohri-hts-form__ohri-form-sidebar-component__text02___3jbh-",space05:"esm-ohri-hts-form__ohri-form-sidebar-component__space05___1pQAY",link:"esm-ohri-hts-form__ohri-form-sidebar-component__link___2i3jc"},e.exports=_},9068:(e,_,t)=>{var r=t(3379),o=t(5225);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.id,o,""]]);r(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},4092:(e,_,t)=>{var r=t(3379),o=t(6587);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.id,o,""]]);r(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},7324:(e,_,t)=>{var r=t(3379),o=t(1763);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.id,o,""]]);r(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},3136:(e,_,t)=>{var r=t(3379),o=t(2075);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.id,o,""]]);r(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},8436:(e,_,t)=>{var r=t(3379),o=t(5623);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.id,o,""]]);r(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},1181:(e,_,t)=>{var r=t(3379),o=t(244);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.id,o,""]]);r(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},1712:(e,_,t)=>{var r=t(3379),o=t(1458);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.id,o,""]]);r(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}}}]);
//# sourceMappingURL=574.openmrs-esm-ohri-app.js.map