"use strict";(self.webpackChunk_openmrs_esm_patient_attachments_app=self.webpackChunk_openmrs_esm_patient_attachments_app||[]).push([[4],{4144:(e,t,a)=>{a.d(t,{eK:()=>o,E5:()=>r,Dc:()=>s,OE:()=>i,OW:()=>c});var n=a(9035);const o="/ws/rest/v1/attachment";function r(e,t){return(0,n.openmrsFetch)(`${o}/${e}`,{signal:t.signal})}function s(e,t,a){return(0,n.openmrsFetch)(`${o}?patient=${e}&includeEncounterless=${t}`,{signal:a.signal})}function i(e,t,a,r){const s=new FormData,i=new File([""],"randomfile");return s.append("fileCaption",a),s.append("patient",e),s.append("file",i),s.append("base64Content",t),(0,n.openmrsFetch)(`${o}`,{method:"POST",signal:r.signal,body:s})}function c(e,t){return(0,n.openmrsFetch)(`${o}/${e}`,{method:"DELETE",signal:t.signal})}},4:(e,t,a)=>{a.r(t),a.d(t,{default:()=>$});var n=a(9902),o=a.n(n),r=a(4924),s=a(9035),i=a(9493),c=a(321),m=a(6208),l=a(1354),p=a.n(l),_=a(1583),A=a.n(_),u=a(7378),d=a.n(u),h=a(5993),C=a.n(h),g=a(4154),v=a.n(g),b=a(8141),E=a.n(b),w=a(8253),f={};f.styleTagTransform=E(),f.setAttributes=C(),f.insert=d().bind(null,"head"),f.domAPI=A(),f.insertStyleElement=v(),p()(w.Z,f);const S=w.Z&&w.Z.locals?w.Z.locals:void 0;function F(e){const[t,a]=(0,n.useState)(!1),[l,p]=(0,n.useState)(""),{t:_}=(0,r.useTranslation)(),A=(0,n.useCallback)((n=>{t||(n.preventDefault(),e.onSaveImage?.(e.content,l),a(!0))}),[e.onSaveImage,t]),u=(0,n.useCallback)((a=>{t||(a.preventDefault(),e.onCancelCapture?.())}),[e.onCancelCapture,t]),d=(0,n.useCallback)((e=>{e.preventDefault(),p(e.target.value)}),[]);return o().createElement("form",{className:S.overview,onSubmit:A},o().createElement("img",{src:e.content,alt:_("webcamPreview","Webcam preview")}),e.collectCaption&&o().createElement("div",{className:S.captionFrame},o().createElement(i.Z,{id:"caption",autoFocus:!0,labelText:null,readOnly:t,placeholder:_("attachmentCaptionInstruction","Enter caption"),onChange:d})),o().createElement(s.UserHasAccess,{privilege:"Create Attachment"},o().createElement(c.Z,{className:S.buttonSetOverrides},o().createElement(m.Z,{size:"small",onClick:A,disabled:t},_("save","Save")),o().createElement(m.Z,{kind:"danger",size:"small",onClick:u,disabled:t},_("cancel","Cancel")))))}var y=a(4333),k={};k.styleTagTransform=E(),k.setAttributes=C(),k.insert=d().bind(null,"head"),k.domAPI=A(),k.insertStyleElement=v(),p()(y.Z,k);const D=y.Z&&y.Z.locals?y.Z.locals:void 0;var P=a(1569),Z=a.n(P),T=a(6750);a(4445);const $=e=>{let{onSavePhoto:t,onTakePhoto:a,collectCaption:i=!0}=e;const c=(0,n.useRef)(),[m,l]=(0,n.useState)(void 0),[p,_]=(0,n.useState)(""),{t:A}=(0,r.useTranslation)(),u=(0,n.useCallback)((()=>_("")),[]),d=(0,n.useCallback)((e=>{_(e),a?.(e)}),[a]),h=(0,n.useCallback)((e=>{(0,T.Z)(e.target.files[0]).then(_)}),[]),C=(0,n.useCallback)((e=>{c.current=e}),[]);(0,n.useEffect)((()=>{m&&(0,s.showToast)({description:m.message,kind:"error",title:A("cameraError","Camera Error")})}),[m]),(0,n.useEffect)((()=>()=>{c.current?.getTracks().forEach((e=>e.stop()))}),[]);const g=(0,n.useCallback)(((e,a)=>t?.(e,a)),[t]);return o().createElement("div",{className:D.cameraSection},o().createElement("div",{className:D.frameContent},p?o().createElement(F,{content:p,onCancelCapture:u,onSaveImage:g,collectCaption:i}):o().createElement(o().Fragment,null,!m&&o().createElement(Z(),{onTakePhoto:d,onCameraStart:C,onCameraError:l}),o().createElement("div",null,o().createElement("label",{htmlFor:"uploadPhoto",className:D.choosePhoto},A("selectPhoto","Select local photo instead")),o().createElement("input",{type:"file",id:"uploadPhoto",accept:"image/*",className:D.uploadFile,onChange:h})))))}},6750:(e,t,a)=>{a.d(t,{Z:()=>s,H:()=>i});var n=a(3565),o=a.n(n),r=a(4144);function s(e){return new Promise((t=>{if(e){const a=new FileReader;a.addEventListener("load",(()=>{"string"==typeof a.result?t(a.result):t("")})),a.addEventListener("error",(()=>{t("")})),a.readAsDataURL(e)}else t("")}))}function i(e){return{id:`${e.uuid}`,src:`${window.openmrsBase}${r.eK}/${e.uuid}/bytes`,thumbnail:`${window.openmrsBase}${r.eK}/${e.uuid}/bytes?view=complexdata.view.thumbnail`,thumbnailWidth:170,thumbnailHeight:130,caption:e.comment,isSelected:!1,dateTime:o()(e.dateTime).format("YYYY-MM-DD HH:mm:ss"),bytesMimeType:e.bytesMimeType,bytesContentFamily:e.bytesContentFamily}}},4333:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(1799),o=a.n(n),r=a(2609),s=a.n(r)()(o());s.push([e.id,".-esm-patient-attachments__camera-upload__cameraSection___GDabH{padding:10px}.react-html5-camera-photo>img,.react-html5-camera-photo>video{width:100% !important}.-esm-patient-attachments__camera-upload__frameContent___7eo4Z{margin:auto;padding:2rem;width:80%}.-esm-patient-attachments__camera-upload__choosePhoto___gejpd{float:right;color:#0f62fe;cursor:pointer;margin:1rem 0}.-esm-patient-attachments__camera-upload__choosePhoto___gejpd:hover{color:#000;text-decoration:none}.-esm-patient-attachments__camera-upload__uploadFile___rLK99{display:none}","",{version:3,sources:["webpack://./src/attachments/camera-upload.scss"],names:[],mappings:"AAAA,gEACE,YAAA,CAIA,8DACE,qBAAA,CAIJ,+DACE,WAAA,CACA,YAAA,CACA,SAAA,CAGF,8DACE,WAAA,CACA,aAAA,CACA,cAAA,CACA,aAAA,CAEA,oEACE,UAAA,CACA,oBAAA,CAIJ,6DACE,YAAA",sourcesContent:[".cameraSection {\n  padding: 10px;\n}\n\n:global(.react-html5-camera-photo) {\n  & > img, & > video {\n    width: 100% !important;\n  }\n}\n\n.frameContent {\n  margin: auto;\n  padding: 2rem;\n  width: 80%;\n}\n\n.choosePhoto {\n  float: right;\n  color: #0f62fe;\n  cursor: pointer;\n  margin: 1rem 0;\n\n  &:hover {\n    color: #000;\n    text-decoration: none;\n  }\n}\n\n.uploadFile {\n  display: none;\n}\n"],sourceRoot:""}]),s.locals={cameraSection:"-esm-patient-attachments__camera-upload__cameraSection___GDabH",frameContent:"-esm-patient-attachments__camera-upload__frameContent___7eo4Z",choosePhoto:"-esm-patient-attachments__camera-upload__choosePhoto___gejpd",uploadFile:"-esm-patient-attachments__camera-upload__uploadFile___rLK99"};const i=s},8253:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(1799),o=a.n(n),r=a(2609),s=a.n(r)()(o());s.push([e.id,".-esm-patient-attachments__image-preview__overview___HwhU0 img{max-width:100%;max-height:500px;margin:auto;display:block}.-esm-patient-attachments__image-preview__buttonSetOverrides___6FpUR{justify-content:center;margin:auto;width:50%}.-esm-patient-attachments__image-preview__buttonSetOverrides___6FpUR button{max-width:20rem !important}.-esm-patient-attachments__image-preview__captionFrame___DP3uQ{margin-bottom:.3rem}","",{version:3,sources:["webpack://./src/attachments/image-preview.scss"],names:[],mappings:"AAAA,+DACE,cAAA,CACA,gBAAA,CACA,WAAA,CACA,aAAA,CAGF,qEACE,sBAAA,CACA,WAAA,CACA,SAAA,CAGF,4EACE,0BAAA,CAGF,+DACE,mBAAA",sourcesContent:[".overview img {\n  max-width: 100%;\n  max-height: 500px;\n  margin: auto;\n  display: block;\n}\n\n.buttonSetOverrides {\n  justify-content: center;\n  margin: auto;\n  width: 50%;\n}\n\n.buttonSetOverrides button {\n  max-width: 20rem !important;\n}\n\n.captionFrame {\n  margin-bottom: .3rem;\n}\n"],sourceRoot:""}]),s.locals={overview:"-esm-patient-attachments__image-preview__overview___HwhU0",buttonSetOverrides:"-esm-patient-attachments__image-preview__buttonSetOverrides___6FpUR",captionFrame:"-esm-patient-attachments__image-preview__captionFrame___DP3uQ"};const i=s}}]);
//# sourceMappingURL=4.js.map