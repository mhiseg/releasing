(self.webpackChunkopenmrs_esm_ohri_form_app=self.webpackChunkopenmrs_esm_ohri_form_app||[]).push([[727],{7531:(n,t,e)=>{"use strict";e.d(t,{lX:()=>w,q_:()=>A,ob:()=>h,PP:()=>O,Ep:()=>l});var r=e(2122);function o(n){return"/"===n.charAt(0)}function i(n,t){for(var e=t,r=e+1,o=n.length;r<o;e+=1,r+=1)n[e]=n[r];n.pop()}var a=e(2177);function c(n){return"/"===n.charAt(0)?n:"/"+n}function u(n){return"/"===n.charAt(0)?n.substr(1):n}function s(n,t){return function(n,t){return 0===n.toLowerCase().indexOf(t.toLowerCase())&&-1!=="/?#".indexOf(n.charAt(t.length))}(n,t)?n.substr(t.length):n}function f(n){return"/"===n.charAt(n.length-1)?n.slice(0,-1):n}function l(n){var t=n.pathname,e=n.search,r=n.hash,o=t||"/";return e&&"?"!==e&&(o+="?"===e.charAt(0)?e:"?"+e),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function h(n,t,e,a){var c;"string"==typeof n?(c=function(n){var t=n||"/",e="",r="",o=t.indexOf("#");-1!==o&&(r=t.substr(o),t=t.substr(0,o));var i=t.indexOf("?");return-1!==i&&(e=t.substr(i),t=t.substr(0,i)),{pathname:t,search:"?"===e?"":e,hash:"#"===r?"":r}}(n)).state=t:(void 0===(c=(0,r.Z)({},n)).pathname&&(c.pathname=""),c.search?"?"!==c.search.charAt(0)&&(c.search="?"+c.search):c.search="",c.hash?"#"!==c.hash.charAt(0)&&(c.hash="#"+c.hash):c.hash="",void 0!==t&&void 0===c.state&&(c.state=t));try{c.pathname=decodeURI(c.pathname)}catch(n){throw n instanceof URIError?new URIError('Pathname "'+c.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):n}return e&&(c.key=e),a?c.pathname?"/"!==c.pathname.charAt(0)&&(c.pathname=function(n,t){void 0===t&&(t="");var e,r=n&&n.split("/")||[],a=t&&t.split("/")||[],c=n&&o(n),u=t&&o(t),s=c||u;if(n&&o(n)?a=r:r.length&&(a.pop(),a=a.concat(r)),!a.length)return"/";if(a.length){var f=a[a.length-1];e="."===f||".."===f||""===f}else e=!1;for(var l=0,h=a.length;h>=0;h--){var p=a[h];"."===p?i(a,h):".."===p?(i(a,h),l++):l&&(i(a,h),l--)}if(!s)for(;l--;l)a.unshift("..");!s||""===a[0]||a[0]&&o(a[0])||a.unshift("");var d=a.join("/");return e&&"/"!==d.substr(-1)&&(d+="/"),d}(c.pathname,a.pathname)):c.pathname=a.pathname:c.pathname||(c.pathname="/"),c}function p(){var n=null,t=[];return{setPrompt:function(t){return n=t,function(){n===t&&(n=null)}},confirmTransitionTo:function(t,e,r,o){if(null!=n){var i="function"==typeof n?n(t,e):n;"string"==typeof i?"function"==typeof r?r(i,o):o(!0):o(!1!==i)}else o(!0)},appendListener:function(n){var e=!0;function r(){e&&n.apply(void 0,arguments)}return t.push(r),function(){e=!1,t=t.filter((function(n){return n!==r}))}},notifyListeners:function(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];t.forEach((function(n){return n.apply(void 0,e)}))}}}var d=!("undefined"==typeof window||!window.document||!window.document.createElement);function v(n,t){t(window.confirm(n))}var m="popstate",g="hashchange";function y(){try{return window.history.state||{}}catch(n){return{}}}function w(n){void 0===n&&(n={}),d||(0,a.Z)(!1);var t,e=window.history,o=(-1===(t=window.navigator.userAgent).indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,i=!(-1===window.navigator.userAgent.indexOf("Trident")),u=n,w=u.forceRefresh,x=void 0!==w&&w,E=u.getUserConfirmation,b=void 0===E?v:E,P=u.keyLength,C=void 0===P?6:P,A=n.basename?f(c(n.basename)):"";function k(n){var t=n||{},e=t.key,r=t.state,o=window.location,i=o.pathname+o.search+o.hash;return A&&(i=s(i,A)),h(i,r,e)}function O(){return Math.random().toString(36).substr(2,C)}var T=p();function R(n){(0,r.Z)(H,n),H.length=e.length,T.notifyListeners(H.location,H.action)}function L(n){(function(n){return void 0===n.state&&-1===navigator.userAgent.indexOf("CriOS")})(n)||S(k(n.state))}function _(){S(k(y()))}var Z=!1;function S(n){Z?(Z=!1,R()):T.confirmTransitionTo(n,"POP",b,(function(t){t?R({action:"POP",location:n}):function(n){var t=H.location,e=M.indexOf(t.key);-1===e&&(e=0);var r=M.indexOf(n.key);-1===r&&(r=0);var o=e-r;o&&(Z=!0,$(o))}(n)}))}var U=k(y()),M=[U.key];function I(n){return A+l(n)}function $(n){e.go(n)}var j=0;function N(n){1===(j+=n)&&1===n?(window.addEventListener(m,L),i&&window.addEventListener(g,_)):0===j&&(window.removeEventListener(m,L),i&&window.removeEventListener(g,_))}var B=!1,H={length:e.length,action:"POP",location:U,createHref:I,push:function(n,t){var r="PUSH",i=h(n,t,O(),H.location);T.confirmTransitionTo(i,r,b,(function(n){if(n){var t=I(i),a=i.key,c=i.state;if(o)if(e.pushState({key:a,state:c},null,t),x)window.location.href=t;else{var u=M.indexOf(H.location.key),s=M.slice(0,u+1);s.push(i.key),M=s,R({action:r,location:i})}else window.location.href=t}}))},replace:function(n,t){var r="REPLACE",i=h(n,t,O(),H.location);T.confirmTransitionTo(i,r,b,(function(n){if(n){var t=I(i),a=i.key,c=i.state;if(o)if(e.replaceState({key:a,state:c},null,t),x)window.location.replace(t);else{var u=M.indexOf(H.location.key);-1!==u&&(M[u]=i.key),R({action:r,location:i})}else window.location.replace(t)}}))},go:$,goBack:function(){$(-1)},goForward:function(){$(1)},block:function(n){void 0===n&&(n=!1);var t=T.setPrompt(n);return B||(N(1),B=!0),function(){return B&&(B=!1,N(-1)),t()}},listen:function(n){var t=T.appendListener(n);return N(1),function(){N(-1),t()}}};return H}var x="hashchange",E={hashbang:{encodePath:function(n){return"!"===n.charAt(0)?n:"!/"+u(n)},decodePath:function(n){return"!"===n.charAt(0)?n.substr(1):n}},noslash:{encodePath:u,decodePath:c},slash:{encodePath:c,decodePath:c}};function b(n){var t=n.indexOf("#");return-1===t?n:n.slice(0,t)}function P(){var n=window.location.href,t=n.indexOf("#");return-1===t?"":n.substring(t+1)}function C(n){window.location.replace(b(window.location.href)+"#"+n)}function A(n){void 0===n&&(n={}),d||(0,a.Z)(!1);var t=window.history,e=(window.navigator.userAgent.indexOf("Firefox"),n),o=e.getUserConfirmation,i=void 0===o?v:o,u=e.hashType,m=void 0===u?"slash":u,g=n.basename?f(c(n.basename)):"",y=E[m],w=y.encodePath,A=y.decodePath;function k(){var n=A(P());return g&&(n=s(n,g)),h(n)}var O=p();function T(n){(0,r.Z)(B,n),B.length=t.length,O.notifyListeners(B.location,B.action)}var R=!1,L=null;function _(){var n,t,e=P(),r=w(e);if(e!==r)C(r);else{var o=k(),a=B.location;if(!R&&(t=o,(n=a).pathname===t.pathname&&n.search===t.search&&n.hash===t.hash))return;if(L===l(o))return;L=null,function(n){if(R)R=!1,T();else{O.confirmTransitionTo(n,"POP",i,(function(t){t?T({action:"POP",location:n}):function(n){var t=B.location,e=M.lastIndexOf(l(t));-1===e&&(e=0);var r=M.lastIndexOf(l(n));-1===r&&(r=0);var o=e-r;o&&(R=!0,I(o))}(n)}))}}(o)}}var Z=P(),S=w(Z);Z!==S&&C(S);var U=k(),M=[l(U)];function I(n){t.go(n)}var $=0;function j(n){1===($+=n)&&1===n?window.addEventListener(x,_):0===$&&window.removeEventListener(x,_)}var N=!1,B={length:t.length,action:"POP",location:U,createHref:function(n){var t=document.querySelector("base"),e="";return t&&t.getAttribute("href")&&(e=b(window.location.href)),e+"#"+w(g+l(n))},push:function(n,t){var e="PUSH",r=h(n,void 0,void 0,B.location);O.confirmTransitionTo(r,e,i,(function(n){if(n){var t=l(r),o=w(g+t);if(P()!==o){L=t,function(n){window.location.hash=n}(o);var i=M.lastIndexOf(l(B.location)),a=M.slice(0,i+1);a.push(t),M=a,T({action:e,location:r})}else T()}}))},replace:function(n,t){var e="REPLACE",r=h(n,void 0,void 0,B.location);O.confirmTransitionTo(r,e,i,(function(n){if(n){var t=l(r),o=w(g+t);P()!==o&&(L=t,C(o));var i=M.indexOf(l(B.location));-1!==i&&(M[i]=t),T({action:e,location:r})}}))},go:I,goBack:function(){I(-1)},goForward:function(){I(1)},block:function(n){void 0===n&&(n=!1);var t=O.setPrompt(n);return N||(j(1),N=!0),function(){return N&&(N=!1,j(-1)),t()}},listen:function(n){var t=O.appendListener(n);return j(1),function(){j(-1),t()}}};return B}function k(n,t,e){return Math.min(Math.max(n,t),e)}function O(n){void 0===n&&(n={});var t=n,e=t.getUserConfirmation,o=t.initialEntries,i=void 0===o?["/"]:o,a=t.initialIndex,c=void 0===a?0:a,u=t.keyLength,s=void 0===u?6:u,f=p();function d(n){(0,r.Z)(x,n),x.length=x.entries.length,f.notifyListeners(x.location,x.action)}function v(){return Math.random().toString(36).substr(2,s)}var m=k(c,0,i.length-1),g=i.map((function(n){return h(n,void 0,"string"==typeof n?v():n.key||v())})),y=l;function w(n){var t=k(x.index+n,0,x.entries.length-1),r=x.entries[t];f.confirmTransitionTo(r,"POP",e,(function(n){n?d({action:"POP",location:r,index:t}):d()}))}var x={length:g.length,action:"POP",location:g[m],index:m,entries:g,createHref:y,push:function(n,t){var r="PUSH",o=h(n,t,v(),x.location);f.confirmTransitionTo(o,r,e,(function(n){if(n){var t=x.index+1,e=x.entries.slice(0);e.length>t?e.splice(t,e.length-t,o):e.push(o),d({action:r,location:o,index:t,entries:e})}}))},replace:function(n,t){var r="REPLACE",o=h(n,t,v(),x.location);f.confirmTransitionTo(o,r,e,(function(n){n&&(x.entries[x.index]=o,d({action:r,location:o}))}))},go:w,goBack:function(){w(-1)},goForward:function(){w(1)},canGo:function(n){var t=x.index+n;return t>=0&&t<x.entries.length},block:function(n){return void 0===n&&(n=!1),f.setPrompt(n)},listen:function(n){return f.appendListener(n)}};return x}},3727:(n,t,e)=>{"use strict";e.d(t,{VK:()=>f});var r=e(5977),o=e(3552),i=e(9297),a=e(7531),c=(e(5697),e(2122)),u=e(639),s=e(2177),f=function(n){function t(){for(var t,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(t=n.call.apply(n,[this].concat(r))||this).history=(0,a.lX)(t.props),t}return(0,o.Z)(t,n),t.prototype.render=function(){return i.default.createElement(r.F0,{history:this.history,children:this.props.children})},t}(i.default.Component);i.default.Component;var l=function(n,t){return"function"==typeof n?n(t):n},h=function(n,t){return"string"==typeof n?(0,a.ob)(n,null,null,t):n},p=function(n){return n},d=i.default.forwardRef;void 0===d&&(d=p);var v=d((function(n,t){var e=n.innerRef,r=n.navigate,o=n.onClick,a=(0,u.Z)(n,["innerRef","navigate","onClick"]),s=a.target,f=(0,c.Z)({},a,{onClick:function(n){try{o&&o(n)}catch(t){throw n.preventDefault(),t}n.defaultPrevented||0!==n.button||s&&"_self"!==s||function(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}(n)||(n.preventDefault(),r())}});return f.ref=p!==d&&t||e,i.default.createElement("a",f)})),m=d((function(n,t){var e=n.component,o=void 0===e?v:e,a=n.replace,f=n.to,m=n.innerRef,g=(0,u.Z)(n,["component","replace","to","innerRef"]);return i.default.createElement(r.s6.Consumer,null,(function(n){n||(0,s.Z)(!1);var e=n.history,r=h(l(f,n.location),n.location),u=r?e.createHref(r):"",v=(0,c.Z)({},g,{href:u,navigate:function(){var t=l(f,n.location);(a?e.replace:e.push)(t)}});return p!==d?v.ref=t||m:v.innerRef=m,i.default.createElement(o,v)}))})),g=function(n){return n},y=i.default.forwardRef;void 0===y&&(y=g),y((function(n,t){var e=n["aria-current"],o=void 0===e?"page":e,a=n.activeClassName,f=void 0===a?"active":a,p=n.activeStyle,d=n.className,v=n.exact,w=n.isActive,x=n.location,E=n.sensitive,b=n.strict,P=n.style,C=n.to,A=n.innerRef,k=(0,u.Z)(n,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return i.default.createElement(r.s6.Consumer,null,(function(n){n||(0,s.Z)(!1);var e=x||n.location,a=h(l(C,e),e),u=a.pathname,O=u&&u.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),T=O?(0,r.LX)(e.pathname,{path:O,exact:v,sensitive:E,strict:b}):null,R=!!(w?w(T,e):T),L=R?function(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return t.filter((function(n){return n})).join(" ")}(d,f):d,_=R?(0,c.Z)({},P,{},p):P,Z=(0,c.Z)({"aria-current":R&&o||null,className:L,style:_,to:a},k);return g!==y?Z.ref=t||A:Z.innerRef=A,i.default.createElement(m,Z)}))}))},5977:(n,t,e)=>{"use strict";e.d(t,{AW:()=>E,F0:()=>g,s6:()=>m,LX:()=>x});var r=e(3552),o=e(9297),i=e(5697),a=e.n(i),c=(e(7531),1073741823),u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e.g?e.g:{};function s(n){var t=[];return{on:function(n){t.push(n)},off:function(n){t=t.filter((function(t){return t!==n}))},get:function(){return n},set:function(e,r){n=e,t.forEach((function(t){return t(n,r)}))}}}const f=o.default.createContext||function(n,t){var e,i,f,l="__create-react-context-"+((u[f="__global_unique_id__"]=(u[f]||0)+1)+"__"),h=function(n){function e(){var t;return(t=n.apply(this,arguments)||this).emitter=s(t.props.value),t}(0,r.Z)(e,n);var o=e.prototype;return o.getChildContext=function(){var n;return(n={})[l]=this.emitter,n},o.componentWillReceiveProps=function(n){if(this.props.value!==n.value){var e,r=this.props.value,o=n.value;((i=r)===(a=o)?0!==i||1/i==1/a:i!=i&&a!=a)?e=0:(e="function"==typeof t?t(r,o):c,0!=(e|=0)&&this.emitter.set(n.value,e))}var i,a},o.render=function(){return this.props.children},e}(o.Component);h.childContextTypes=((e={})[l]=a().object.isRequired,e);var p=function(t){function e(){var n;return(n=t.apply(this,arguments)||this).state={value:n.getValue()},n.onUpdate=function(t,e){0!=((0|n.observedBits)&e)&&n.setState({value:n.getValue()})},n}(0,r.Z)(e,t);var o=e.prototype;return o.componentWillReceiveProps=function(n){var t=n.observedBits;this.observedBits=null==t?c:t},o.componentDidMount=function(){this.context[l]&&this.context[l].on(this.onUpdate);var n=this.props.observedBits;this.observedBits=null==n?c:n},o.componentWillUnmount=function(){this.context[l]&&this.context[l].off(this.onUpdate)},o.getValue=function(){return this.context[l]?this.context[l].get():n},o.render=function(){return(n=this.props.children,Array.isArray(n)?n[0]:n)(this.state.value);var n},e}(o.Component);return p.contextTypes=((i={})[l]=a().object,i),{Provider:h,Consumer:p}};var l=e(2177),h=e(2122),p=e(9658),d=e.n(p),v=(e(9864),e(639),e(8679),function(n){var t=f();return t.displayName="Router-History",t}()),m=function(n){var t=f();return t.displayName="Router",t}(),g=function(n){function t(t){var e;return(e=n.call(this,t)||this).state={location:t.history.location},e._isMounted=!1,e._pendingLocation=null,t.staticContext||(e.unlisten=t.history.listen((function(n){e._isMounted?e.setState({location:n}):e._pendingLocation=n}))),e}(0,r.Z)(t,n),t.computeRootMatch=function(n){return{path:"/",url:"/",params:{},isExact:"/"===n}};var e=t.prototype;return e.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},e.componentWillUnmount=function(){this.unlisten&&this.unlisten()},e.render=function(){return o.default.createElement(m.Provider,{value:{history:this.props.history,location:this.state.location,match:t.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},o.default.createElement(v.Provider,{children:this.props.children||null,value:this.props.history}))},t}(o.default.Component);o.default.Component,o.default.Component;var y={},w=0;function x(n,t){void 0===t&&(t={}),("string"==typeof t||Array.isArray(t))&&(t={path:t});var e=t,r=e.path,o=e.exact,i=void 0!==o&&o,a=e.strict,c=void 0!==a&&a,u=e.sensitive,s=void 0!==u&&u;return[].concat(r).reduce((function(t,e){if(!e&&""!==e)return null;if(t)return t;var r=function(n,t){var e=""+t.end+t.strict+t.sensitive,r=y[e]||(y[e]={});if(r[n])return r[n];var o=[],i={regexp:d()(n,o,t),keys:o};return w<1e4&&(r[n]=i,w++),i}(e,{end:i,strict:c,sensitive:s}),o=r.regexp,a=r.keys,u=o.exec(n);if(!u)return null;var f=u[0],l=u.slice(1),h=n===f;return i&&!h?null:{path:e,url:"/"===e&&""===f?"/":f,isExact:h,params:a.reduce((function(n,t,e){return n[t.name]=l[e],n}),{})}}),null)}var E=function(n){function t(){return n.apply(this,arguments)||this}return(0,r.Z)(t,n),t.prototype.render=function(){var n=this;return o.default.createElement(m.Consumer,null,(function(t){t||(0,l.Z)(!1);var e=n.props.location||t.location,r=n.props.computedMatch?n.props.computedMatch:n.props.path?x(e.pathname,n.props):t.match,i=(0,h.Z)({},t,{location:e,match:r}),a=n.props,c=a.children,u=a.component,s=a.render;return Array.isArray(c)&&0===c.length&&(c=null),o.default.createElement(m.Provider,{value:i},i.match?c?"function"==typeof c?c(i):c:u?o.default.createElement(u,i):s?s(i):null:"function"==typeof c?c(i):null)}))},t}(o.default.Component);o.default.Component,o.default.Component,o.default.useContext},6585:n=>{n.exports=Array.isArray||function(n){return"[object Array]"==Object.prototype.toString.call(n)}},9658:(n,t,e)=>{var r=e(6585);n.exports=function n(t,e,o){return r(e)||(o=e||o,e=[]),o=o||{},t instanceof RegExp?function(n,t){var e=n.source.match(/\((?!\?)/g);if(e)for(var r=0;r<e.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(n,t)}(t,e):r(t)?function(t,e,r){for(var o=[],i=0;i<t.length;i++)o.push(n(t[i],e,r).source);return f(new RegExp("(?:"+o.join("|")+")",l(r)),e)}(t,e,o):function(n,t,e){return h(i(n,e),t,e)}(t,e,o)},n.exports.parse=i,n.exports.compile=function(n,t){return c(i(n,t),t)},n.exports.tokensToFunction=c,n.exports.tokensToRegExp=h;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function i(n,t){for(var e,r=[],i=0,a=0,c="",f=t&&t.delimiter||"/";null!=(e=o.exec(n));){var l=e[0],h=e[1],p=e.index;if(c+=n.slice(a,p),a=p+l.length,h)c+=h[1];else{var d=n[a],v=e[2],m=e[3],g=e[4],y=e[5],w=e[6],x=e[7];c&&(r.push(c),c="");var E=null!=v&&null!=d&&d!==v,b="+"===w||"*"===w,P="?"===w||"*"===w,C=e[2]||f,A=g||y;r.push({name:m||i++,prefix:v||"",delimiter:C,optional:P,repeat:b,partial:E,asterisk:!!x,pattern:A?s(A):x?".*":"[^"+u(C)+"]+?"})}}return a<n.length&&(c+=n.substr(a)),c&&r.push(c),r}function a(n){return encodeURI(n).replace(/[\/?#]/g,(function(n){return"%"+n.charCodeAt(0).toString(16).toUpperCase()}))}function c(n,t){for(var e=new Array(n.length),o=0;o<n.length;o++)"object"==typeof n[o]&&(e[o]=new RegExp("^(?:"+n[o].pattern+")$",l(t)));return function(t,o){for(var i="",c=t||{},u=(o||{}).pretty?a:encodeURIComponent,s=0;s<n.length;s++){var f=n[s];if("string"!=typeof f){var l,h=c[f.name];if(null==h){if(f.optional){f.partial&&(i+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(r(h)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var p=0;p<h.length;p++){if(l=u(h[p]),!e[s].test(l))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===p?f.prefix:f.delimiter)+l}}else{if(l=f.asterisk?encodeURI(h).replace(/[?#]/g,(function(n){return"%"+n.charCodeAt(0).toString(16).toUpperCase()})):u(h),!e[s].test(l))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+l+'"');i+=f.prefix+l}}else i+=f}return i}}function u(n){return n.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(n){return n.replace(/([=!:$\/()])/g,"\\$1")}function f(n,t){return n.keys=t,n}function l(n){return n&&n.sensitive?"":"i"}function h(n,t,e){r(t)||(e=t||e,t=[]);for(var o=(e=e||{}).strict,i=!1!==e.end,a="",c=0;c<n.length;c++){var s=n[c];if("string"==typeof s)a+=u(s);else{var h=u(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+h+p+")*"),a+=p=s.optional?s.partial?h+"("+p+")?":"(?:"+h+"("+p+"))?":h+"("+p+")"}}var d=u(e.delimiter||"/"),v=a.slice(-d.length)===d;return o||(a=(v?a.slice(0,-d.length):a)+"(?:"+d+"(?=$))?"),a+=i?"$":o&&v?"":"(?="+d+"|$)",f(new RegExp("^"+a,l(e)),t)}},2177:(n,t,e)=>{"use strict";e.d(t,{Z:()=>r});const r=function(n,t){if(!n)throw new Error("Invariant failed")}}}]);
//# sourceMappingURL=727.openmrs-esm-histac-ohri-app.js.map