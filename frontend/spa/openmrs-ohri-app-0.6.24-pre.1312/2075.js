(self.webpackChunkopenmrs_ohri_app=self.webpackChunkopenmrs_ohri_app||[]).push([[2075],{22075:(e,r,o)=>{"use strict";o.r(r),o.d(r,{default:()=>G});var _=o(50576),t=o.n(_),n=o(52429),i=o(86387),a=o(1445),d=o(24224),m=o(22218),s=o(38594),h=o(75906),l=o(78091),p=o(64471),c=o(39743),f=o.n(c),g=o(3157),b=o.n(g),u=o(53439),v=o.n(u),w=o(79201),y=o.n(w),S=o(71573),x=o.n(S),E=o(35914),C=o.n(E),T=o(89519),H=o.n(T),z={};z.styleTagTransform=C(),z.setAttributes=y(),z.insert=v().bind(null,"head"),z.domAPI=b(),z.insertStyleElement=x(),f()(H(),z);const N=H()&&H().locals?H().locals:void 0;var M=o(77254),k=o(58684),L=o(46428),I=o(47826),J=o(58459);o(57651);const R=function(){const[e,r]=(0,_.useState)("enter"),[o,n]=(0,_.useState)(),[i,c]=(0,_.useState)([]),[f,g]=(0,_.useState)(!0),[b,u]=(0,_.useState)(""),[v,w]=(0,_.useState)(""),[y,S]=(0,_.useState)(""),[x,E]=(0,_.useState)(!1),[C,T]=(0,_.useState)(""),[H,z]=(0,_.useState)(null),[R,Z]=(0,_.useState)("github"),j=(0,_.useMemo)((()=>new URLSearchParams(window.location.search).get("json")),[]),[D,U]=(0,_.useState)(0),[O,W]=(0,_.useState)(null),A=e=>{w("");try{const r="string"==typeof e?JSON.parse(e):e;z(r),n(r),(e=>{let r=e.availableIntents||[];r.length>0?(c(r),g(!1),u("")):(c([]),g(!0),u("*"))})(r)}catch(e){w(e.toString())}E(!1)},[F,G]=(0,_.useState)("Fullscreen");return(0,_.useEffect)((()=>{if(j){const e="?dl=1";let r=j.split("?")[0]+e;r=r.replace("www.dropbox.com","ohri-form-render.globalhealthapp.net"),fetch(r).then((e=>e.json())).then((e=>{e&&(W(JSON.stringify(e,null,2)),A(e),U(D+1))})).catch((e=>{console.error(e)}))}}),[j]),t().createElement("div",{className:N.container},t().createElement("div",{className:N.mainWrapper},t().createElement("div",{className:N.formRenderTitle},"Form Render Test"),t().createElement(a.Z,null,t().createElement(d.Z,{lg:5,md:5,sm:12,style:{paddingRight:"0"},className:N.renderColumn+" "+("Split-screen"===F?N.hide:"")},t().createElement("h4",null,"JSON Schema"),t().createElement("h5",{style:{color:"orange",marginBottom:"1rem"}},v),t().createElement(m.ZP,{type:"container"},t().createElement(s.Z,{id:"tab-form",label:"JSON Input"},t().createElement(h.Z,{onSubmit:e=>{e.preventDefault(),(e=>{E(!1),S("");const r=(0,I.NL)(b,(0,I.UX)(H));try{T(JSON.stringify(r,null,"  ")),n(r)}catch(e){S(e.toString())}E(!0)})()}},t().createElement(J.ZP,{key:D,mode:"json",theme:R,onChange:A,name:"jsonText",placeholder:"Enter JSON Text",showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,width:"100%",className:N.jsonEditor,setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,displayIndentGuides:!0,enableSnippets:!1,showLineNumbers:!0,tabSize:2},defaultValue:O}),t().createElement("div",{className:N.renderDropdown},t().createElement(l.Z,{id:"default",titleText:"Form Intent",label:"--Select Form Intent",items:i,itemToString:e=>e.display,onChange:e=>{u(e.selectedItem.intent),E(!1)},disabled:f})),t().createElement("div",{className:N.renderDropdown},t().createElement(l.Z,{id:"",titleText:"JSON Editor Theme",label:R,items:["monokai","github","tomorrow","kuroir","twilight","xcode","solarized_dark","solarized_light","terminal"],itemToString:e=>e,onChange:e=>{Z(e.selectedItem)}})),t().createElement(p.Z,{type:"submit",renderIcon:M.G7E,className:"form-group",style:{marginTop:"1em"},disabled:!b},"Render"))),t().createElement(s.Z,{id:"tab-json-schema",label:"Final Schema"},t().createElement("div",{className:N.finalJsonSchema},t().createElement(J.ZP,{mode:"json",theme:R,value:C,name:"json-schema-result",placeholder:"",showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,width:"100%",height:"700px",readOnly:!0,setOptions:{enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,displayIndentGuides:!0,enableSnippets:!1,showLineNumbers:!0,tabSize:2}}))))),t().createElement(d.Z,{lg:"Split-screen"===F?12:7,md:7,sm:12},t().createElement("div",{className:N.viewMode},t().createElement("h4",null,"Generated Form"),t().createElement(p.Z,{renderIcon:k.Bz7,className:x?N.show:"",onClick:()=>{G("Fullscreen"===F?"Split-screen":"Fullscreen")}},F)),t().createElement("div",{className:N.formRenderContent},t().createElement("h5",{style:{color:"orange",marginBottom:"1rem"}},y),t().createElement(m.ZP,{type:"container"},t().createElement(s.Z,{id:"tab-form",label:"Form Render",className:N.renderTab},x?t().createElement("div",{className:N.formRenderDisplay},t().createElement(L.default,{formJson:o,patientUUID:"b280078a-c0ce-443b-9997-3c66c63ec2f8",mode:e})):t().createElement("p",null,"Please submit the form"))))))))};var Z=o(91208),j=o(97171),D=o.n(j),U={};U.styleTagTransform=C(),U.setAttributes=y(),U.insert=v().bind(null,"head"),U.domAPI=b(),U.insertStyleElement=x(),f()(D(),U);const O=D()&&D().locals?D().locals:void 0,W=({groupSlot:e,dashboards:r,setDashboards:o,updateDashboardState:n})=>{const i=(0,Z.useExtensionSlotMeta)(e);return(0,_.useEffect)((()=>{i&&Object.keys(i).length&&(r.push(...Object.values(i)),n&&o([...r]))}),[i]),t().createElement(t().Fragment,null)},A=({dashboardSlot:e,title:r,programme:o})=>t().createElement("div",null,t().createElement(Z.ExtensionSlot,{extensionSlotName:e,state:{programme:o,dashboardTitle:r}})),F=({match:e})=>{const{params:{view:r}}=e,[o,n]=(0,_.useState)([]),i={...(0,Z.useExtensionSlotMeta)("dashboard-links-slot"),...(0,Z.useExtensionSlotMeta)("dashboard-slot")},a=Object.values(i),[d,m]=(0,_.useState)(o[0]),s=(0,Z.useLayoutType)();return(0,_.useEffect)((()=>{m(r?o.find((e=>e.name==r)):o[0])}),[r,o]),(0,_.useEffect)((()=>("desktop"!=s&&(0,Z.attach)("nav-menu-slot","ohri-nav-items-ext"),()=>(0,Z.detach)("nav-menu-slot","ohri-nav-items-ext"))),[s]),t().createElement("div",{className:O.dashboardContainer},a.map(((e,r)=>t().createElement(W,{groupSlot:e.slot,dashboards:o,setDashboards:n,updateDashboardState:r==a.length-1}))),"desktop"===s&&t().createElement(Z.ExtensionSlot,{extensionSlotName:"ohri-nav-items-slot",key:s}),t().createElement("div",{className:`bx--grid ${O.dashboardContent}`},d&&t().createElement(A,{dashboardSlot:d.slot,title:d.title,programme:d?.config?.programme,key:d.slot})))};function G(){return t().createElement(n.VK,{basename:window.getOpenmrsSpaBase()},t().createElement(i.AW,{exact:!0,path:"/form-render-test",render:e=>t().createElement(R,null)}),t().createElement(i.AW,{path:"/dashboard/:view?",render:e=>t().createElement(F,{match:e.match})}))}},89519:(e,r,o)=>{(r=o(77705)(!1)).push([e.id,':root{--brand-01: #005d5d;--brand-02: #004144;--brand-03: #007d79}.openmrs-ohri__form-render__productiveHeading01___3_o8b{font-size:.875rem;font-weight:600;line-height:1.29;letter-spacing:.16px}.openmrs-ohri__form-render__productiveHeading02___2fClx{font-size:1rem;font-weight:600;line-height:1.375;letter-spacing:0}.openmrs-ohri__form-render__productiveHeading03___3JVfS{font-size:1.25rem;font-weight:400;line-height:1.4;letter-spacing:0}.openmrs-ohri__form-render__productiveHeading04___2zzYM{font-size:1.75rem;font-weight:400;line-height:1.29;letter-spacing:0}.openmrs-ohri__form-render__productiveHeading05___1kJGt{font-size:2rem;font-weight:400;line-height:1.25;letter-spacing:0}.openmrs-ohri__form-render__productiveHeading06___379pY{font-size:2rem;font-weight:300;line-height:1.199;letter-spacing:0}.openmrs-ohri__form-render__bodyShort01___3q2It{font-size:.875rem;font-weight:400;line-height:1.29;letter-spacing:.16px}.openmrs-ohri__form-render__helperText01___3_UQe{font-size:.75rem;line-height:1.34;letter-spacing:.32px}.openmrs-ohri__form-render__bodyShort02___26Sw0{font-size:1rem;font-weight:400;line-height:1.375;letter-spacing:0}.openmrs-ohri__form-render__bodyLong01___14ysQ{font-size:.875rem;font-weight:400;line-height:1.43;letter-spacing:.16px}.openmrs-ohri__form-render__bodyLong02___qImj7{font-size:1rem;font-weight:400;line-height:1.5;letter-spacing:0}.openmrs-ohri__form-render__label01___myXsd{font-size:.75rem;font-weight:400;line-height:1.34;letter-spacing:.32px}.openmrs-ohri__form-render__text01___1kKVX{color:#161616}.openmrs-ohri__form-render__text02___3HtzU{color:#525252}aside{background-color:#fff !important}div[class*=-esm-login__styles__center]>img{width:140px}.tab-12rem>button{width:12rem !important}.tab-14rem>button{width:14rem !important}.tab-16rem>button{width:16rem !important}.openmrs-ohri__form-render__mainWrapper___2tsMY{background-color:#fff;padding:16px !important;margin:auto}@media(max-width: 768px){.openmrs-ohri__form-render__mainWrapper___2tsMY{max-width:100%;margin-top:1rem}}@media only screen and (min-width: 992px){.openmrs-ohri__form-render__mainWrapper___2tsMY{max-width:90%}}.openmrs-ohri__form-render__headerText___1Lg-9{font-size:16px;font-stretch:normal;font-style:normal;line-height:1.38;letter-spacing:normal;font-weight:400;padding-bottom:4px;margin:auto}.openmrs-ohri__form-render__widgetHeaderContainer___1fyN7{display:flex;justify-content:space-between;align-items:center;padding:.75rem 0 .75rem 1rem}.openmrs-ohri__form-render__widgetHeaderContainer___1fyN7>h4:after{content:" ";display:block;width:2rem;padding-top:.188rem;border-bottom:.375rem solid #1a3054}.openmrs-ohri__form-render__toggleButtons___3NoyH{width:fit-content;margin:0 .5rem}.openmrs-ohri__form-render__formRenderContent___7ybie{height:84vh}.openmrs-ohri__form-render__formRenderContent___7ybie>div{padding:0}.openmrs-ohri__form-render__formRenderContent___7ybie>div>p{padding:.5rem}.openmrs-ohri__form-render__renderTab___G1rtC>.openmrs-ohri__form-render__tab-form___3r2LO{border:.01rem dotted #6f6f6f !important;padding:0 0 1rem}.openmrs-ohri__form-render__formRenderDisplay___14-gM{height:75vh;padding:0;border:.01rem dotted #6f6f6f !important;margin-top:.5rem}.openmrs-ohri__form-render__formRenderDisplay___14-gM>form>.openmrs-ohri__form-render__mainContainer___3TMTR>.openmrs-ohri__form-render__overflowContent___YFLx0{padding-bottom:1rem !important}.openmrs-ohri__form-render__formRenderTitle___3QNxu{font-size:25px;font-weight:normal;font-stretch:normal;font-style:normal;line-height:1.29;letter-spacing:normal;color:#161616;margin-bottom:16px}.openmrs-ohri__form-render__container___3JDbs>#openmrs-ohri__form-render__tab-form___3r2LO{padding:0}.openmrs-ohri__form-render__renderColumn___Tg0Zc{border-right:1em}.openmrs-ohri__form-render__renderColumn___Tg0Zc>div>form,.openmrs-ohri__form-render__renderColumn___Tg0Zc>div>.openmrs-ohri__form-render__finalJsonSchema___2cLrh{margin:-1rem;margin-top:-0.5rem}.openmrs-ohri__form-render__renderColumn___Tg0Zc>div>form .openmrs-ohri__form-render__renderDropdown___A3IsB{padding-top:.8rem;width:400px}.openmrs-ohri__form-render__jsonEditor___1m28h,.openmrs-ohri__form-render__finalJsonSchema___2cLrh{border:.01rem dotted #6f6f6f !important}.openmrs-ohri__form-render__viewMode___Tt5uM h4{float:left}.openmrs-ohri__form-render__viewMode___Tt5uM button{float:right;display:none}.openmrs-ohri__form-render__show___1_ve2{display:block !important}.openmrs-ohri__form-render__hide___23UoT{display:none}',""]),r.locals={productiveHeading01:"openmrs-ohri__form-render__productiveHeading01___3_o8b",productiveHeading02:"openmrs-ohri__form-render__productiveHeading02___2fClx",productiveHeading03:"openmrs-ohri__form-render__productiveHeading03___3JVfS",productiveHeading04:"openmrs-ohri__form-render__productiveHeading04___2zzYM",productiveHeading05:"openmrs-ohri__form-render__productiveHeading05___1kJGt",productiveHeading06:"openmrs-ohri__form-render__productiveHeading06___379pY",bodyShort01:"openmrs-ohri__form-render__bodyShort01___3q2It",helperText01:"openmrs-ohri__form-render__helperText01___3_UQe",bodyShort02:"openmrs-ohri__form-render__bodyShort02___26Sw0",bodyLong01:"openmrs-ohri__form-render__bodyLong01___14ysQ",bodyLong02:"openmrs-ohri__form-render__bodyLong02___qImj7",label01:"openmrs-ohri__form-render__label01___myXsd",text01:"openmrs-ohri__form-render__text01___1kKVX",text02:"openmrs-ohri__form-render__text02___3HtzU",mainWrapper:"openmrs-ohri__form-render__mainWrapper___2tsMY",headerText:"openmrs-ohri__form-render__headerText___1Lg-9",widgetHeaderContainer:"openmrs-ohri__form-render__widgetHeaderContainer___1fyN7",toggleButtons:"openmrs-ohri__form-render__toggleButtons___3NoyH",formRenderContent:"openmrs-ohri__form-render__formRenderContent___7ybie",renderTab:"openmrs-ohri__form-render__renderTab___G1rtC","tab-form":"openmrs-ohri__form-render__tab-form___3r2LO",formRenderDisplay:"openmrs-ohri__form-render__formRenderDisplay___14-gM",mainContainer:"openmrs-ohri__form-render__mainContainer___3TMTR",overflowContent:"openmrs-ohri__form-render__overflowContent___YFLx0",formRenderTitle:"openmrs-ohri__form-render__formRenderTitle___3QNxu",container:"openmrs-ohri__form-render__container___3JDbs",renderColumn:"openmrs-ohri__form-render__renderColumn___Tg0Zc",finalJsonSchema:"openmrs-ohri__form-render__finalJsonSchema___2cLrh",renderDropdown:"openmrs-ohri__form-render__renderDropdown___A3IsB",jsonEditor:"openmrs-ohri__form-render__jsonEditor___1m28h",viewMode:"openmrs-ohri__form-render__viewMode___Tt5uM",show:"openmrs-ohri__form-render__show___1_ve2",hide:"openmrs-ohri__form-render__hide___23UoT"},e.exports=r},97171:(e,r,o)=>{(r=o(77705)(!1)).push([e.id,":root{--brand-01: #005d5d;--brand-02: #004144;--brand-03: #007d79}.openmrs-ohri__ohri-dashboard__productiveHeading01___3P79l{font-size:.875rem;font-weight:600;line-height:1.29;letter-spacing:.16px}.openmrs-ohri__ohri-dashboard__productiveHeading02___kjLGS{font-size:1rem;font-weight:600;line-height:1.375;letter-spacing:0}.openmrs-ohri__ohri-dashboard__productiveHeading03___2z59I{font-size:1.25rem;font-weight:400;line-height:1.4;letter-spacing:0}.openmrs-ohri__ohri-dashboard__productiveHeading04___CVSMM{font-size:1.75rem;font-weight:400;line-height:1.29;letter-spacing:0}.openmrs-ohri__ohri-dashboard__productiveHeading05___3M08E{font-size:2rem;font-weight:400;line-height:1.25;letter-spacing:0}.openmrs-ohri__ohri-dashboard__productiveHeading06___xMpMU{font-size:2rem;font-weight:300;line-height:1.199;letter-spacing:0}.openmrs-ohri__ohri-dashboard__bodyShort01___7e2V2{font-size:.875rem;font-weight:400;line-height:1.29;letter-spacing:.16px}.openmrs-ohri__ohri-dashboard__helperText01___3WU07{font-size:.75rem;line-height:1.34;letter-spacing:.32px}.openmrs-ohri__ohri-dashboard__bodyShort02___2CSjJ{font-size:1rem;font-weight:400;line-height:1.375;letter-spacing:0}.openmrs-ohri__ohri-dashboard__bodyLong01___3WuJ9{font-size:.875rem;font-weight:400;line-height:1.43;letter-spacing:.16px}.openmrs-ohri__ohri-dashboard__bodyLong02___FEUqQ{font-size:1rem;font-weight:400;line-height:1.5;letter-spacing:0}.openmrs-ohri__ohri-dashboard__label01___3ZwCo{font-size:.75rem;font-weight:400;line-height:1.34;letter-spacing:.32px}.openmrs-ohri__ohri-dashboard__text01___2aUoK{color:#161616}.openmrs-ohri__ohri-dashboard__text02___1uSGc{color:#525252}aside{background-color:#fff !important}div[class*=-esm-login__styles__center]>img{width:140px}.tab-12rem>button{width:12rem !important}.tab-14rem>button{width:14rem !important}.tab-16rem>button{width:16rem !important}.openmrs-ohri__ohri-dashboard__dashboardContainer___2Wkvi{display:-webkit-flex;height:90vh;position:relative;overflow-y:hidden}.openmrs-ohri__ohri-dashboard__dashboardContent___1NgW2{margin:0;flex-basis:75%;flex-grow:1;flex-shrink:1;position:relative;overflow-y:auto;margin-left:16rem;padding-left:0;padding-right:0;max-width:100% !important}.openmrs-ohri__ohri-dashboard__noMarker___5CTCm{list-style-type:none}.openmrs-ohri__ohri-dashboard__noMarker___5CTCm ul li a{padding-left:40px !important;font:lighter}.openmrs-ohri__ohri-dashboard__currentNavItem___2cApu>a{background-color:#cecece !important;color:#161616 !important;border-left-color:#1a3054 !important;font:bolder}.openmrs-ohri__ohri-dashboard__hide___3KzbV{display:none}@media(max-width: 1200px){.openmrs-ohri__ohri-dashboard__dashboardContent___1NgW2{margin-left:0}}",""]),r.locals={productiveHeading01:"openmrs-ohri__ohri-dashboard__productiveHeading01___3P79l",productiveHeading02:"openmrs-ohri__ohri-dashboard__productiveHeading02___kjLGS",productiveHeading03:"openmrs-ohri__ohri-dashboard__productiveHeading03___2z59I",productiveHeading04:"openmrs-ohri__ohri-dashboard__productiveHeading04___CVSMM",productiveHeading05:"openmrs-ohri__ohri-dashboard__productiveHeading05___3M08E",productiveHeading06:"openmrs-ohri__ohri-dashboard__productiveHeading06___xMpMU",bodyShort01:"openmrs-ohri__ohri-dashboard__bodyShort01___7e2V2",helperText01:"openmrs-ohri__ohri-dashboard__helperText01___3WU07",bodyShort02:"openmrs-ohri__ohri-dashboard__bodyShort02___2CSjJ",bodyLong01:"openmrs-ohri__ohri-dashboard__bodyLong01___3WuJ9",bodyLong02:"openmrs-ohri__ohri-dashboard__bodyLong02___FEUqQ",label01:"openmrs-ohri__ohri-dashboard__label01___3ZwCo",text01:"openmrs-ohri__ohri-dashboard__text01___2aUoK",text02:"openmrs-ohri__ohri-dashboard__text02___1uSGc",dashboardContainer:"openmrs-ohri__ohri-dashboard__dashboardContainer___2Wkvi",dashboardContent:"openmrs-ohri__ohri-dashboard__dashboardContent___1NgW2",noMarker:"openmrs-ohri__ohri-dashboard__noMarker___5CTCm",currentNavItem:"openmrs-ohri__ohri-dashboard__currentNavItem___2cApu",hide:"openmrs-ohri__ohri-dashboard__hide___3KzbV"},e.exports=r}}]);
//# sourceMappingURL=2075.js.map