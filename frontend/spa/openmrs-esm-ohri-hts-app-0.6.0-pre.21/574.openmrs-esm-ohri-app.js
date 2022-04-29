(self.webpackChunkopenmrs_esm_ohri_hts_app=self.webpackChunkopenmrs_esm_ohri_hts_app||[]).push([[574],{9351:(e,t,_)=>{"use strict";_.d(t,{Z:()=>a});var n=_(9297),r=_(2242),o=_(9068),i=_.n(o);const a=()=>n.default.createElement("div",{className:i().centerLoadingSVG},n.default.createElement(r.Z,{description:"Active loading indicator",withOverlay:!1,small:!0}))},3683:(e,t,_)=>{"use strict";_.d(t,{p:()=>l});var n=_(6512),r=_(8349),o=_(6486),i=_(9297),a=_(4092),s=_.n(a);const l=({patient:e})=>i.default.createElement("div",{id:"header-wrapper",className:s().headerWrapper},i.default.createElement("div",{className:`${s().column} ${s().demo}`},i.default.createElement("div",{className:s().row},i.default.createElement("span",{className:s().name},`${e.name[0].given.join(" ")} ${e.name[0].family}`)),i.default.createElement("div",{className:`${s().row} ${s().details}`},i.default.createElement("span",null,(0,o.capitalize)(e.gender)," · ",(0,n.age)(e.birthDate)," ·"," ",(0,r.default)(e.birthDate).format("DD - MMM - YYYY")))),i.default.createElement("div",{className:`${s().column} ${s().weight}`},i.default.createElement("div",{className:`${s().row} ${s().weightLabel}`},i.default.createElement("span",null,"Weight")),i.default.createElement("div",{className:s().row},i.default.createElement("span",{className:s().weightValue},"60"),i.default.createElement("span",{className:s().weightUnit},"kg"))),i.default.createElement("div",{className:`${s().column} ${s().allergies}`},i.default.createElement("div",{className:s().row},i.default.createElement("span",{className:s().allergiesLabel},"Allergies")),i.default.createElement("div",{className:s().row},i.default.createElement("span",{className:s().allergiesValue},"Peanuts, Fructose"))))},9258:(e,t,_)=>{"use strict";_.d(t,{Z:()=>o});var n=_(9297),r=_(273);const o=({fields:e,onFieldChange:t,sectionTitle:_})=>n.default.createElement("div",{style:{marginBottom:"3.063rem",borderBottom:"solid 1px rgba(107, 104, 104, 0.5)"}},n.default.createElement("h4",{style:{margin:"10px 0px 10px 0px"}},_),e.map(((e,_)=>{const o=(0,r.dK)(e.questionOptions.rendering);if(o)return n.default.createElement(o,{question:e,onChange:t,key:_,handler:(0,r.DS)(e.type)})})))},9905:(e,t,_)=>{"use strict";_.d(t,{Z:()=>s});var n=_(3579),r=_(9297),o=_(1712),i=_.n(o),a=_(5829);const s=function({pages:e,setCurrentPage:t}){const _=e.map((e=>r.default.createElement("div",{className:i().space05},r.default.createElement(n.Z,{onClick:()=>t(e)},r.default.createElement(a.Z,null)," ",e.label))));return r.default.createElement("div",{className:i().leftNavWrapper},_)}},5933:(e,t,_)=>{"use strict";_.d(t,{Z:()=>n});const n="30b849bd-c4f4-4254-a033-fe9cf01001d8"},9105:(e,t,_)=>{"use strict";_.d(t,{y:()=>n});const n=_(9297).default.createContext(void 0)},9574:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(9297),carbon_components_react__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(7012),carbon_components_react__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(1018),carbon_components_react__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(2967),carbon_components_react__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(734),_form_scss__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7324),_form_scss__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_form_scss__WEBPACK_IMPORTED_MODULE_1__),formik__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8519),yup__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8041),_ohri_form_context__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9105),_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(6512),_registry_registry__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(273),_ohri_form_resource__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(9069),_components_patient_banner_patient_banner_component__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(3683),_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(9351),_hts_encounters_list_hts_overview_list_component__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(9205),_components_section_ohri_form_section_component__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(9258),_components_sidebar_ohri_form_sidebar_component__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(9905),_constants__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(5933);const OHRIForm=({formJson,encounterUuid,onSubmit,onCancel})=>{const[fields,setFields]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),[currentProvider,setCurrentProvider]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),[location,setEncounterLocation]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),[,patient]=(0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_5__.useCurrentPatient)(),session=(0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_5__.useSessionUser)(),[initialValues,setInitialValues]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),encDate=new Date,[encounter,setEncounter]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),[form,setForm]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),[currentPage,setCurrentPage]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const e=JSON.parse(JSON.stringify(formJson)),t=[],_={};e.pages.forEach((e=>e.sections.forEach((e=>t.push(...e.questions))))),encounter?(t.forEach((e=>{var t;return _[e.id]=(null===(t=(0,_registry_registry__WEBPACK_IMPORTED_MODULE_6__.DS)(e.type))||void 0===t?void 0:t.getInitialValue(encounter,e))||""})),setEncounterLocation(encounter.location)):t.forEach((e=>{"checkbox"==e.questionOptions.rendering?_[e.id]=[]:_[e.id]=""})),setFields(t.map((e=>(e.hide?evaluateHideExpression(e,null,t):e.isHidden=!1,e)))),setForm(e),setInitialValues(_),setCurrentPage(null==e?void 0:e.pages[0])}),[encounter]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{session&&(encounterUuid||setEncounterLocation(session.sessionLocation),setCurrentProvider(session.currentProvider.uuid))}),[session]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{let e;return encounterUuid&&(e=(0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_5__.openmrsObservableFetch)(`/ws/rest/v1/encounter/${encounterUuid}?v=${_hts_encounters_list_hts_overview_list_component__WEBPACK_IMPORTED_MODULE_10__.htsEncounterRepresentation}`).subscribe((e=>{setEncounter(e.data)}))),()=>{var t;return null===(t=e)||void 0===t?void 0:t.unsubscribe()}}),[encounterUuid]);const evaluateHideExpression=(field,determinantValue,allFields)=>{if("string"!=typeof field.hide)return void(field.isHidden=!1);const allFieldsKeys=allFields.map((e=>e.id)),parts=field.hide.trim().split(" "),determinantField=parts[0];if(allFieldsKeys.includes(determinantField)){field.hideDeterminant=determinantField;const determinant=allFields.find((e=>e.id===determinantField));determinant.dependant=field.id;let hideExp=field.hide;determinantValue=determinantValue||initialValues[determinantField];const expectedValue=parts[2];hideExp=hideExp.replace(determinantField,"determinantValue"),hideExp=hideExp.replace(expectedValue,"expectedValue"),field.isHidden=eval(hideExp)}else field.isHidden=!1},handleFormSubmit=e=>{const t=[];fields.filter((e=>!e.isHidden&&"obs"==e.type&&e.value)).forEach((e=>{Array.isArray(e.value)?t.push(...e.value):t.push(e.value)}));let _={};encounter?(Object.assign(_,encounter),_.location=location.uuid,-1!==_.encounterProviders.findIndex((e=>e.provider.uuid==currentProvider))||(_.encounterProviders=[..._.encounterProviders,{provider:currentProvider,encounterRole:"240b26f9-dd88-4172-823d-4a8bfeb7841f"}]),_.obs=t):_={patient:patient.id,encounterDatetime:encDate,location:location.uuid,encounterType:formJson.encounterType||_constants__WEBPACK_IMPORTED_MODULE_13__.Z,encounterProviders:[{provider:currentProvider,encounterRole:"240b26f9-dd88-4172-823d-4a8bfeb7841f"}],obs:t};const n=new AbortController;(0,_ohri_form_resource__WEBPACK_IMPORTED_MODULE_7__.M1)(n,_,encounterUuid).then((e=>{e.ok&&onSubmit&&onSubmit()}))},onFieldChange=(e,t)=>{const _=fields.find((t=>t.id==e));if(_.dependant){const n=fields.find((t=>t.hideDeterminant==e));evaluateHideExpression(n,t,fields);let r=[...fields];const o=r.findIndex((e=>e.id==_.dependant));r[o]=n,setFields(r)}};return react__WEBPACK_IMPORTED_MODULE_0__.default.createElement("div",{className:_form_scss__WEBPACK_IMPORTED_MODULE_1___default().ohriformcontainer},react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(formik__WEBPACK_IMPORTED_MODULE_2__.J9,{enableReinitialize:!0,initialValues,validationSchema:yup__WEBPACK_IMPORTED_MODULE_3__.Ry({}),onSubmit:(e,{setSubmitting:t})=>{handleFormSubmit(e),t(!1)}},(e=>react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(formik__WEBPACK_IMPORTED_MODULE_2__.l0,null,patient?react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(react__WEBPACK_IMPORTED_MODULE_0__.default.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(_components_patient_banner_patient_banner_component__WEBPACK_IMPORTED_MODULE_8__.p,{patient}),react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_14__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_15__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_16__.Z,{lg:2,md:2,sm:1},react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(_components_sidebar_ohri_form_sidebar_component__WEBPACK_IMPORTED_MODULE_12__.Z,{pages:form.pages,setCurrentPage}),react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_17__.Z,{style:{marginBottom:"1rem",width:"11.688rem",display:"block"},type:"submit"},"Save"),react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_17__.Z,{style:{width:"11.688rem"},kind:"tertiary",onClick:()=>onCancel?onCancel():null},"Cancel")),react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_16__.Z,{lg:10,md:6},react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(_ohri_form_context__WEBPACK_IMPORTED_MODULE_4__.y.Provider,{value:{values:e.values,setFieldValue:e.setFieldValue,setEncounterLocation,fields,encounterContext:{patient,encounter,location,sessionMode:encounterUuid?"edit":"enter",date:encDate}}},currentPage&&react__WEBPACK_IMPORTED_MODULE_0__.default.createElement("div",{className:_form_scss__WEBPACK_IMPORTED_MODULE_1___default().contentWrapper},currentPage.sections.map(((e,t)=>react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(_components_section_ohri_form_section_component__WEBPACK_IMPORTED_MODULE_11__.Z,{fields:e.questions,onFieldChange,sectionTitle:e.label}))))))))):react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__.Z,null)))))},__WEBPACK_DEFAULT_EXPORT__=OHRIForm},9069:(e,t,_)=>{"use strict";_.d(t,{M1:()=>o,mu:()=>i,aP:()=>a});var n=_(6512),r=_(5709);function o(e,t,_){let r="/ws/rest/v1/encounter";return _&&(r+=`/${_}`),(0,n.openmrsFetch)(r,{headers:{"Content-Type":"application/json"},method:"POST",body:t,signal:e.signal})}function i(e,t){return(0,n.openmrsObservableFetch)(`/ws/rest/v1/concept/${e}?v=${t}`).pipe((0,r.U)((e=>e.data)))}function a(e){return(0,n.openmrsObservableFetch)(`/ws/rest/v1/location?tag=${e}&v=custom:(uuid,display)`).pipe((0,r.U)((({data:e})=>e.results)))}},273:(e,t,_)=>{"use strict";_.d(t,{dK:()=>L,DS:()=>T});var n=_(9297),r=_(3149),o=_(5005),i=_(1572),a=_(3136),s=_.n(a),l=_(8519),d=_(9105),m=_(521),c=_(3307);var p=_(7938),u=_(9069),h=_(6512),f=_(1870),E=_.n(f),b=_(8197);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var _=arguments[t];for(var n in _)Object.prototype.hasOwnProperty.call(_,n)&&(e[n]=_[n])}return e}).apply(this,arguments)}var v=_(7491),O=_(4849);var P=_(7177),M=_.n(P);var D=_(71);function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var _=arguments[t];for(var n in _)Object.prototype.hasOwnProperty.call(_,n)&&(e[n]=_[n])}return e}).apply(this,arguments)}const x={handleFieldSubmission:(e,t,_)=>"checkbox"==e.questionOptions.rendering?y(e,t,_):(e.value?"radio"==e.questionOptions.rendering?e.value.value=t:"edit"!=_.sessionMode||t?t?(e.value.value=t,e.value.voided=!1):e.value=void 0:e.value.voided=!0:e.value={person:_.patient.id,obsDatetime:_.date,concept:e.questionOptions.concept,location:_.location,order:null,groupMembers:[],voided:!1,value:t},e.value),getInitialValue:(e,t)=>{const _=e.obs.find((e=>e.concept.uuid==t.questionOptions.concept));return _?(t.value=_,"string"==typeof _.value||"number"==typeof _.value?"date"==t.questionOptions.rendering?new Date(_.value):_.value:"checkbox"==t.questionOptions.rendering?(t.value=e.obs.filter((e=>e.concept.uuid==t.questionOptions.concept)),t.value.map((e=>e.value.uuid))):_.value.uuid):""}},y=(e,t,_)=>{const{checked:n,id:r}=t;if(e.value||(e.value=[]),n){const t=e.value.find((e=>e.value.uuid==r));t&&t.voided?t.voided=!1:e.value.push({person:_.patient.id,obsDatetime:_.date,concept:e.questionOptions.concept,location:_.location,order:null,groupMembers:[],voided:!1,value:r})}else{const t=e.value.find((e=>e.value.uuid==r));t&&"edit"==_.sessionMode?t.voided=!0:e.value=e.value.filter((e=>e.value!==r))}return e.value},w=[{id:"OHRIText",component:({question:e,onChange:t,handler:_})=>{const[r,o]=(0,l.U$)(e.id),{encounterContext:i}=n.default.useContext(d.y),[a,m]=(0,n.useState)();return r.onBlur=()=>{a!==r.value&&t(e.id,r.value),e.value=_.handleFieldSubmission(e,r.value,i)},!e.isHidden&&n.default.createElement("div",{className:s().textContainer},n.default.createElement(D.Z,C({},r,{id:e.id,labelText:e.label,name:e.id,value:r.value||"",onFocus:()=>m(r.value)})))},type:"text"},{id:"OHRIRadio",component:({question:e,onChange:t,handler:_})=>{const[o,i]=(0,l.U$)(e.id),{setFieldValue:a,encounterContext:s}=n.default.useContext(d.y),[m,c]=(0,n.useState)(!1),p="18316c68-b5f9-4986-b76d-9975cd0ebe31";return(0,n.useEffect)((()=>{var t;m&&null!==(t=e.value)&&void 0!==t&&t.value&&"boolean"!=typeof e.value.value&&(e.value.value=e.value.value.uuid==p)}),[e.value,m]),(0,n.useEffect)((()=>{(0,u.mu)(e.questionOptions.concept,"custom:(uuid,display,datatype:(uuid,display,name))").subscribe((e=>{"Boolean"==e.datatype.name&&c(!0)}))}),[e.questionOptions.concept]),n.default.createElement("div",null,n.default.createElement(r.Z,{legendText:e.label},n.default.createElement(v.Z,{defaultSelected:"default-selected",name:e.id,valueSelected:o.value,onChange:n=>{a(e.id,n),t(e.id,n),e.value=_.handleFieldSubmission(e,m?n==p:n,s)}},e.questionOptions.answers.map(((t,_)=>n.default.createElement(O.Z,{id:`${e.id}-${t.label}`,labelText:t.label,value:t.concept,key:_}))))))},type:"radio"},{id:"OHRIDate",component:({question:e,onChange:t,handler:_})=>{const[r,o]=(0,l.U$)(e.id),{setFieldValue:i,encounterContext:a}=n.default.useContext(d.y);return n.default.createElement("div",{className:s().formField},n.default.createElement(m.Z,{datePickerType:"single",onChange:([n])=>{i(e.id,n),t(e.id,n),e.value=_.handleFieldSubmission(e,n,a)}},n.default.createElement(c.Z,{id:"date-picker-calendar-id",placeholder:"mm/dd/yyyy",labelText:e.label,value:r.value instanceof Date?r.value.toLocaleDateString(window.navigator.language):r.value})))},type:"date"},{id:"OHRINumber",component:({question:e,onChange:t,handler:_})=>{const[r,o]=(0,l.U$)(e.id),{encounterContext:i}=n.default.useContext(d.y),[a,m]=(0,n.useState)();return r.onBlur=()=>{a!==r.value&&t(e.id,r.value),e.value=_.handleFieldSubmission(e,r.value,i)},n.default.createElement("div",{className:s().numberInputWrapper},n.default.createElement(b.ZP,g({},r,{id:e.id,invalidText:"Number is not valid",label:e.label,max:e.questionOptions.max||void 0,min:e.questionOptions.min||void 0,name:e.id,value:r.value||"",onFocus:()=>m(r.value),allowEmpty:!0,size:"xl"})))},type:"number"},{id:"OHRIMultiSelect",component:({question:e,onChange:t,handler:_})=>{const[o,i]=(0,l.U$)(e.id),{setFieldValue:a,encounterContext:s}=n.default.useContext(d.y),m=(t,n,r)=>{a(e.id,t?[...o.value,n]:o.value.filter((e=>e!==n))),e.value=_.handleFieldSubmission(e,{checked:t,id:n},s)};return n.default.createElement("div",null,n.default.createElement(r.Z,{legendText:e.label},e.questionOptions.answers.map(((e,t)=>n.default.createElement(E(),{id:e.concept,labelText:e.label,value:e.concept,key:t,onChange:m,checked:o.value.includes(e.concept)})))))},type:"checkbox"},{id:"OHRIContentSwitcher",component:({question:e,onChange:t,handler:_})=>{const[a,m]=(0,l.U$)(e.id),{setFieldValue:c,encounterContext:p}=n.default.useContext(d.y),u=(0,n.useMemo)((()=>e.questionOptions.answers.findIndex((e=>e.concept==a.value))),[a.value]);return!e.isHidden&&n.default.createElement("div",{className:s().textContainer},n.default.createElement(r.Z,{legendText:e.label},n.default.createElement(o.Z,{onChange:n=>{c(e.id,n.name),t(e.id,n.name),e.value=_.handleFieldSubmission(e,n.name,p)},selectedIndex:u},e.questionOptions.answers.map(((e,t)=>n.default.createElement(i.Z,{name:e.concept,text:e.label,key:t}))))))},type:"content-switcher"},{id:"OHRIEncounterLocationPicker",component:({question:e})=>{const[t,_]=(0,l.U$)(e.id),{setEncounterLocation:r,setFieldValue:o}=n.default.useContext(d.y),[i,a]=(0,n.useState)([]);return(0,n.useEffect)((()=>{e.questionOptions.locationTag&&(0,u.aP)(e.questionOptions.locationTag.trim().split(" ").join("%20")).subscribe((e=>a(e)),(e=>(0,h.createErrorHandler)()))}),[]),n.default.createElement("div",{className:s().formInputField},n.default.createElement(p.Z,{id:e.id,titleText:e.label,label:"Choose location",items:i,itemToString:e=>e.display,selectedItem:t.value,onChange:({selectedItem:t})=>{o(e.id,t),r(t)}}))},type:"encounter-location"},{id:"OHRIDropdown",component:({question:e,onChange:t,handler:_})=>{const[r,o]=(0,l.U$)(e.id),{setFieldValue:i,encounterContext:a}=n.default.useContext(d.y),[m,c]=n.default.useState([]);return(0,n.useEffect)((()=>{c(e.questionOptions.answers.map((e=>e.value||e.concept)))}),[e.questionOptions.answers]),n.default.createElement("div",{className:s().formInputField},n.default.createElement(M(),{id:e.id,titleText:e.label,label:"Choose an option",items:m,itemToString:t=>e.questionOptions.answers.find((e=>e.value?e.value==t:e.concept==t)).label,selectedItem:r.value,onChange:({selectedItem:n})=>{return r=n,i(e.id,r),t(e.id,r),void(e.value=_.handleFieldSubmission(e,r,a));var r}}))},type:"select"}],I=[{id:"ObsSubmissionHandler",component:x,type:"obs"},{id:"EncounterLocationSubmissionHandler",component:{handleFieldSubmission:(e,t,_)=>null,getInitialValue:(e,t)=>({display:e.location.name,uuid:e.location.uuid})},type:"encounterLocation"}],L=e=>{var t;return null===(t=w.find((t=>t.type==e)))||void 0===t?void 0:t.component};function T(e){var t;return null===(t=I.find((t=>t.type==e)))||void 0===t?void 0:t.component}},5225:(e,t,_)=>{(t=_(3645)(!1)).push([e.id,".openmrs-esm-ohri-hts__loading-component__centerLoadingSVG___Vme8M{display:flex;width:100vw;height:100vh;justify-content:center;align-items:center}",""]),t.locals={centerLoadingSVG:"openmrs-esm-ohri-hts__loading-component__centerLoadingSVG___Vme8M"},e.exports=t},6587:(e,t,_)=>{(t=_(3645)(!1)).push([e.id,'.openmrs-esm-ohri-hts__patient-banner__productiveHeading01___3IV1N{font-size:.875rem;font-weight:600;line-height:1.29;letter-spacing:.16px}.openmrs-esm-ohri-hts__patient-banner__productiveHeading02___Fe3xU{font-size:1rem;font-weight:600;line-height:1.375;letter-spacing:0}.openmrs-esm-ohri-hts__patient-banner__productiveHeading03___3sHJI{font-size:1.25rem;font-weight:400;line-height:1.4;letter-spacing:0}.openmrs-esm-ohri-hts__patient-banner__productiveHeading04___1nh3V{font-size:1.75rem;font-weight:400;line-height:1.29;letter-spacing:0}.openmrs-esm-ohri-hts__patient-banner__productiveHeading05___2Q8eh{font-size:2rem;font-weight:400;line-height:1.25;letter-spacing:0}.openmrs-esm-ohri-hts__patient-banner__productiveHeading06___2OEos{font-size:2rem;font-weight:300;line-height:1.199;letter-spacing:0}.openmrs-esm-ohri-hts__patient-banner__bodyShort01___1St_2{font-size:.875rem;font-weight:400;line-height:1.29;letter-spacing:.16px}.openmrs-esm-ohri-hts__patient-banner__helperText01___3fF-O{font-size:.75rem;line-height:1.34;letter-spacing:.32px}.openmrs-esm-ohri-hts__patient-banner__bodyShort02___3XbWf{font-size:1rem;font-weight:400;line-height:1.375;letter-spacing:0}.openmrs-esm-ohri-hts__patient-banner__bodyLong01___1xcA0{font-size:.875rem;font-weight:400;line-height:1.43;letter-spacing:.16px}.openmrs-esm-ohri-hts__patient-banner__bodyLong02___1B3y2{font-size:1rem;font-weight:400;line-height:1.5;letter-spacing:0}.openmrs-esm-ohri-hts__patient-banner__label01___3xCQ6{font-size:.75rem;font-weight:400;line-height:1.34;letter-spacing:.32px}.openmrs-esm-ohri-hts__patient-banner__text01___E6Jpi{color:#161616}.openmrs-esm-ohri-hts__patient-banner__text02___1FL_i{color:#525252}.openmrs-esm-ohri-hts__patient-banner__headerWrapper___1lOvD{display:flex;width:100%;height:100%;margin:0 0 1rem;padding:1rem .5rem 1rem;border-bottom:.063rem solid #c6c6c6}.openmrs-esm-ohri-hts__patient-banner__row___FGEDh{display:flex;flex-direction:row;align-items:baseline}.openmrs-esm-ohri-hts__patient-banner__demo___Jzt5P{width:50%;border-right:.1rem solid #c6c6c6;margin-left:1rem}.openmrs-esm-ohri-hts__patient-banner__name___X1dOw{margin:0 8.375rem .5rem 0;font-family:"IBM Plex Sans";font-size:1.4rem;line-height:1.5;color:#161616}.openmrs-esm-ohri-hts__patient-banner__details___1qHz-{font-size:1.2rem;color:#525252;font-family:"IBM Plex Sans"}.openmrs-esm-ohri-hts__patient-banner__weight___14-od{width:10rem;margin-left:2rem}.openmrs-esm-ohri-hts__patient-banner__weightLabel___i3zds,.openmrs-esm-ohri-hts__patient-banner__allergiesLabel___4MEzp{margin:0 0 .5rem 0;font-family:"IBM Plex Sans";font-size:1.2rem;line-height:1.5;color:#525252}.openmrs-esm-ohri-hts__patient-banner__weightValue___xmEWS,.openmrs-esm-ohri-hts__patient-banner__allergiesValue___3iSbX{font-family:"IBM Plex Sans";font-size:1.3rem;color:#161616}.openmrs-esm-ohri-hts__patient-banner__weightUnit___2uzEo{margin-left:.5rem;font-size:1.2rem;font-family:"IBM Plex Sans";color:#525252}.openmrs-esm-ohri-hts__patient-banner__allergies___7YAiM{width:60%}',""]),t.locals={productiveHeading01:"openmrs-esm-ohri-hts__patient-banner__productiveHeading01___3IV1N",productiveHeading02:"openmrs-esm-ohri-hts__patient-banner__productiveHeading02___Fe3xU",productiveHeading03:"openmrs-esm-ohri-hts__patient-banner__productiveHeading03___3sHJI",productiveHeading04:"openmrs-esm-ohri-hts__patient-banner__productiveHeading04___1nh3V",productiveHeading05:"openmrs-esm-ohri-hts__patient-banner__productiveHeading05___2Q8eh",productiveHeading06:"openmrs-esm-ohri-hts__patient-banner__productiveHeading06___2OEos",bodyShort01:"openmrs-esm-ohri-hts__patient-banner__bodyShort01___1St_2",helperText01:"openmrs-esm-ohri-hts__patient-banner__helperText01___3fF-O",bodyShort02:"openmrs-esm-ohri-hts__patient-banner__bodyShort02___3XbWf",bodyLong01:"openmrs-esm-ohri-hts__patient-banner__bodyLong01___1xcA0",bodyLong02:"openmrs-esm-ohri-hts__patient-banner__bodyLong02___1B3y2",label01:"openmrs-esm-ohri-hts__patient-banner__label01___3xCQ6",text01:"openmrs-esm-ohri-hts__patient-banner__text01___E6Jpi",text02:"openmrs-esm-ohri-hts__patient-banner__text02___1FL_i",headerWrapper:"openmrs-esm-ohri-hts__patient-banner__headerWrapper___1lOvD",row:"openmrs-esm-ohri-hts__patient-banner__row___FGEDh",demo:"openmrs-esm-ohri-hts__patient-banner__demo___Jzt5P",name:"openmrs-esm-ohri-hts__patient-banner__name___X1dOw",details:"openmrs-esm-ohri-hts__patient-banner__details___1qHz-",weight:"openmrs-esm-ohri-hts__patient-banner__weight___14-od",weightLabel:"openmrs-esm-ohri-hts__patient-banner__weightLabel___i3zds",allergiesLabel:"openmrs-esm-ohri-hts__patient-banner__allergiesLabel___4MEzp",weightValue:"openmrs-esm-ohri-hts__patient-banner__weightValue___xmEWS",allergiesValue:"openmrs-esm-ohri-hts__patient-banner__allergiesValue___3iSbX",weightUnit:"openmrs-esm-ohri-hts__patient-banner__weightUnit___2uzEo",allergies:"openmrs-esm-ohri-hts__patient-banner__allergies___7YAiM"},e.exports=t},1763:(e,t,_)=>{(t=_(3645)(!1)).push([e.id,'.openmrs-esm-ohri-hts___form__ohriformcontainer___1bpMc{margin:0rem 0rem .5rem 0rem;height:100%;font-family:"IBM Plex Sans"}.openmrs-esm-ohri-hts___form__contentWrapper___3jAA7,.openmrs-esm-ohri-hts___form__submit___3EMJF{margin:0px 20px 0px 20px}',""]),t.locals={ohriformcontainer:"openmrs-esm-ohri-hts___form__ohriformcontainer___1bpMc",contentWrapper:"openmrs-esm-ohri-hts___form__contentWrapper___3jAA7",submit:"openmrs-esm-ohri-hts___form__submit___3EMJF"},e.exports=t},2075:(e,t,_)=>{(t=_(3645)(!1)).push([e.id,".openmrs-esm-ohri-hts___input__formField___1AY8i,.openmrs-esm-ohri-hts___input__numberInputWrapper___3SPQH .bx--number,.openmrs-esm-ohri-hts___input__formInputField___xDdc2{padding-bottom:1rem}.openmrs-esm-ohri-hts___input__formInputField___xDdc2{max-width:22rem}.openmrs-esm-ohri-hts___input__numberInputWrapper___3SPQH .bx--number{width:15rem}",""]),t.locals={formField:"openmrs-esm-ohri-hts___input__formField___1AY8i",numberInputWrapper:"openmrs-esm-ohri-hts___input__numberInputWrapper___3SPQH",formInputField:"openmrs-esm-ohri-hts___input__formInputField___xDdc2"},e.exports=t},1458:(e,t,_)=>{(t=_(3645)(!1)).push([e.id,".openmrs-esm-ohri-hts__ohri-form-sidebar-component__productiveHeading01___2a1ss{font-size:.875rem;font-weight:600;line-height:1.29;letter-spacing:.16px}.openmrs-esm-ohri-hts__ohri-form-sidebar-component__productiveHeading02___3ztK8{font-size:1rem;font-weight:600;line-height:1.375;letter-spacing:0}.openmrs-esm-ohri-hts__ohri-form-sidebar-component__productiveHeading03___3UWKO{font-size:1.25rem;font-weight:400;line-height:1.4;letter-spacing:0}.openmrs-esm-ohri-hts__ohri-form-sidebar-component__productiveHeading04___2nBC8{font-size:1.75rem;font-weight:400;line-height:1.29;letter-spacing:0}.openmrs-esm-ohri-hts__ohri-form-sidebar-component__productiveHeading05___2FERy{font-size:2rem;font-weight:400;line-height:1.25;letter-spacing:0}.openmrs-esm-ohri-hts__ohri-form-sidebar-component__productiveHeading06___xd5O-{font-size:2rem;font-weight:300;line-height:1.199;letter-spacing:0}.openmrs-esm-ohri-hts__ohri-form-sidebar-component__bodyShort01___fiRR7{font-size:.875rem;font-weight:400;line-height:1.29;letter-spacing:.16px}.openmrs-esm-ohri-hts__ohri-form-sidebar-component__helperText01___5yubD{font-size:.75rem;line-height:1.34;letter-spacing:.32px}.openmrs-esm-ohri-hts__ohri-form-sidebar-component__bodyShort02___1spZ1{font-size:1rem;font-weight:400;line-height:1.375;letter-spacing:0}.openmrs-esm-ohri-hts__ohri-form-sidebar-component__bodyLong01___1kGp9{font-size:.875rem;font-weight:400;line-height:1.43;letter-spacing:.16px}.openmrs-esm-ohri-hts__ohri-form-sidebar-component__bodyLong02___qVlAW{font-size:1rem;font-weight:400;line-height:1.5;letter-spacing:0}.openmrs-esm-ohri-hts__ohri-form-sidebar-component__label01___3RA0R{font-size:.75rem;font-weight:400;line-height:1.34;letter-spacing:.32px}.openmrs-esm-ohri-hts__ohri-form-sidebar-component__text01___3SrmB{color:#161616}.openmrs-esm-ohri-hts__ohri-form-sidebar-component__text02___3jbh-{color:#525252}.openmrs-esm-ohri-hts__ohri-form-sidebar-component__space05___1pQAY{margin:1rem 0 1rem 0}",""]),t.locals={productiveHeading01:"openmrs-esm-ohri-hts__ohri-form-sidebar-component__productiveHeading01___2a1ss",productiveHeading02:"openmrs-esm-ohri-hts__ohri-form-sidebar-component__productiveHeading02___3ztK8",productiveHeading03:"openmrs-esm-ohri-hts__ohri-form-sidebar-component__productiveHeading03___3UWKO",productiveHeading04:"openmrs-esm-ohri-hts__ohri-form-sidebar-component__productiveHeading04___2nBC8",productiveHeading05:"openmrs-esm-ohri-hts__ohri-form-sidebar-component__productiveHeading05___2FERy",productiveHeading06:"openmrs-esm-ohri-hts__ohri-form-sidebar-component__productiveHeading06___xd5O-",bodyShort01:"openmrs-esm-ohri-hts__ohri-form-sidebar-component__bodyShort01___fiRR7",helperText01:"openmrs-esm-ohri-hts__ohri-form-sidebar-component__helperText01___5yubD",bodyShort02:"openmrs-esm-ohri-hts__ohri-form-sidebar-component__bodyShort02___1spZ1",bodyLong01:"openmrs-esm-ohri-hts__ohri-form-sidebar-component__bodyLong01___1kGp9",bodyLong02:"openmrs-esm-ohri-hts__ohri-form-sidebar-component__bodyLong02___qVlAW",label01:"openmrs-esm-ohri-hts__ohri-form-sidebar-component__label01___3RA0R",text01:"openmrs-esm-ohri-hts__ohri-form-sidebar-component__text01___3SrmB",text02:"openmrs-esm-ohri-hts__ohri-form-sidebar-component__text02___3jbh-",space05:"openmrs-esm-ohri-hts__ohri-form-sidebar-component__space05___1pQAY"},e.exports=t},9068:(e,t,_)=>{var n=_(3379),r=_(5225);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.id,r,""]]);n(r,{insert:"head",singleton:!1}),e.exports=r.locals||{}},4092:(e,t,_)=>{var n=_(3379),r=_(6587);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.id,r,""]]);n(r,{insert:"head",singleton:!1}),e.exports=r.locals||{}},7324:(e,t,_)=>{var n=_(3379),r=_(1763);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.id,r,""]]);n(r,{insert:"head",singleton:!1}),e.exports=r.locals||{}},3136:(e,t,_)=>{var n=_(3379),r=_(2075);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.id,r,""]]);n(r,{insert:"head",singleton:!1}),e.exports=r.locals||{}},1712:(e,t,_)=>{var n=_(3379),r=_(1458);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.id,r,""]]);n(r,{insert:"head",singleton:!1}),e.exports=r.locals||{}}}]);
//# sourceMappingURL=574.openmrs-esm-ohri-app.js.map