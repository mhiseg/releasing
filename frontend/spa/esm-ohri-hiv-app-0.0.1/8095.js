(self.webpackChunkesm_ohri_hiv_app=self.webpackChunkesm_ohri_hiv_app||[]).push([[8095],{95739:(t,r,e)=>{"use strict";e.d(r,{s:()=>f,Z:()=>s});var n=e(38777),o=e(38431),u=e.n(o),a=e(91987),i=e(99130),c=a.settings.prefix;function f(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(t&&"function"==typeof t.closest){var e=[".".concat(c,"--overflow-menu-options"),".".concat(c,"--tooltip"),".flatpickr-calendar"].concat((0,n.Z)(r));return e.some((function(r){return t.closest(r)}))}}const s=function(t){var r=t.bodyNode,e=t.startTrapNode,n=t.endTrapNode,o=t.currentActiveNode,a=t.oldActiveNode,c=t.selectorsFloatingMenus;if(r&&o&&a&&!r.contains(o)&&!f(o,c)){var s=a.compareDocumentPosition(o);if(o===e||s&i.I0){var l=u()(r.querySelectorAll(i.Kq),(function(t){return Boolean(t.offsetParent)}));l?l.focus():r!==a&&r.focus()}else if(o===n||s&i.ui){var p=Array.prototype.find.call(r.querySelectorAll(i.Kq),(function(t){return Boolean(t.offsetParent)}));p?p.focus():r!==a&&r.focus()}}}},42703:(t,r,e)=>{"use strict";function n(t,r){return function(t,e,n){for(var o=arguments.length,u=new Array(o>3?o-3:0),a=3;a<o;a++)u[a-3]=arguments[a];return r.apply(void 0,[t,e,n].concat(u))}}e.d(r,{Z:()=>n})},38431:(t,r,e)=>{t=e.nmd(t);var n="__lodash_hash_undefined__",o=9007199254740991,u="[object Arguments]",a="[object Array]",i="[object Boolean]",c="[object Date]",f="[object Error]",s="[object Function]",l="[object Map]",p="[object Number]",v="[object Object]",h="[object Promise]",_="[object RegExp]",y="[object Set]",d="[object String]",b="[object Symbol]",g="[object WeakMap]",j="[object ArrayBuffer]",w="[object DataView]",m=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,A=/^\w*$/,O=/^\./,k=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,$=/^\s+|\s+$/g,S=/\\(\\)?/g,N=/^[-+]0x[0-9a-f]+$/i,x=/^0b[01]+$/i,E=/^\[object .+?Constructor\]$/,P=/^0o[0-7]+$/i,F=/^(?:0|[1-9]\d*)$/,I={};I["[object Float32Array]"]=I["[object Float64Array]"]=I["[object Int8Array]"]=I["[object Int16Array]"]=I["[object Int32Array]"]=I["[object Uint8Array]"]=I["[object Uint8ClampedArray]"]=I["[object Uint16Array]"]=I["[object Uint32Array]"]=!0,I[u]=I[a]=I[j]=I[i]=I[w]=I[c]=I[f]=I[s]=I[l]=I[p]=I[v]=I[_]=I[y]=I[d]=I[g]=!1;var M=parseInt,T="object"==typeof e.g&&e.g&&e.g.Object===Object&&e.g,C="object"==typeof self&&self&&self.Object===Object&&self,B=T||C||Function("return this")(),U=r&&!r.nodeType&&r,q=U&&t&&!t.nodeType&&t,z=q&&q.exports===U&&T.process,D=function(){try{return z&&z.binding("util")}catch(t){}}(),L=D&&D.isTypedArray;function R(t,r){for(var e=-1,n=t?t.length:0;++e<n;)if(r(t[e],e,t))return!0;return!1}function Z(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function K(t){var r=-1,e=Array(t.size);return t.forEach((function(t,n){e[++r]=[n,t]})),e}function V(t){var r=-1,e=Array(t.size);return t.forEach((function(t){e[++r]=t})),e}var W,G,H,J=Array.prototype,Q=Function.prototype,X=Object.prototype,Y=B["__core-js_shared__"],tt=(W=/[^.]+$/.exec(Y&&Y.keys&&Y.keys.IE_PROTO||""))?"Symbol(src)_1."+W:"",rt=Q.toString,et=X.hasOwnProperty,nt=X.toString,ot=RegExp("^"+rt.call(et).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ut=B.Symbol,at=B.Uint8Array,it=X.propertyIsEnumerable,ct=J.splice,ft=(G=Object.keys,H=Object,function(t){return G(H(t))}),st=Math.max,lt=Math.min,pt=qt(B,"DataView"),vt=qt(B,"Map"),ht=qt(B,"Promise"),_t=qt(B,"Set"),yt=qt(B,"WeakMap"),dt=qt(Object,"create"),bt=Wt(pt),gt=Wt(vt),jt=Wt(ht),wt=Wt(_t),mt=Wt(yt),At=ut?ut.prototype:void 0,Ot=At?At.valueOf:void 0,kt=At?At.toString:void 0;function $t(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function St(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Nt(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function xt(t){var r=-1,e=t?t.length:0;for(this.__data__=new Nt;++r<e;)this.add(t[r])}function Et(t){this.__data__=new St(t)}function Pt(t,r){for(var e=t.length;e--;)if(Qt(t[e][0],r))return e;return-1}function Ft(t,r){for(var e=0,n=(r=Lt(r,t)?[r]:Ct(r)).length;null!=t&&e<n;)t=t[Vt(r[e++])];return e&&e==n?t:void 0}function It(t,r){return null!=t&&r in Object(t)}function Mt(t,r,e,n,o){return t===r||(null==t||null==r||!nr(t)&&!or(r)?t!=t&&r!=r:function(t,r,e,n,o,s){var h=Yt(t),g=Yt(r),m=a,A=a;h||(m=(m=zt(t))==u?v:m),g||(A=(A=zt(r))==u?v:A);var O=m==v&&!Z(t),k=A==v&&!Z(r),$=m==A;if($&&!O)return s||(s=new Et),h||ar(t)?Bt(t,r,e,n,o,s):function(t,r,e,n,o,u,a){switch(e){case w:if(t.byteLength!=r.byteLength||t.byteOffset!=r.byteOffset)return!1;t=t.buffer,r=r.buffer;case j:return!(t.byteLength!=r.byteLength||!n(new at(t),new at(r)));case i:case c:case p:return Qt(+t,+r);case f:return t.name==r.name&&t.message==r.message;case _:case d:return t==r+"";case l:var s=K;case y:var v=2&u;if(s||(s=V),t.size!=r.size&&!v)return!1;var h=a.get(t);if(h)return h==r;u|=1,a.set(t,r);var g=Bt(s(t),s(r),n,o,u,a);return a.delete(t),g;case b:if(Ot)return Ot.call(t)==Ot.call(r)}return!1}(t,r,m,e,n,o,s);if(!(2&o)){var S=O&&et.call(t,"__wrapped__"),N=k&&et.call(r,"__wrapped__");if(S||N){var x=S?t.value():t,E=N?r.value():r;return s||(s=new Et),e(x,E,n,o,s)}}return!!$&&(s||(s=new Et),function(t,r,e,n,o,u){var a=2&o,i=ir(t),c=i.length;if(c!=ir(r).length&&!a)return!1;for(var f=c;f--;){var s=i[f];if(!(a?s in r:et.call(r,s)))return!1}var l=u.get(t);if(l&&u.get(r))return l==r;var p=!0;u.set(t,r),u.set(r,t);for(var v=a;++f<c;){var h=t[s=i[f]],_=r[s];if(n)var y=a?n(_,h,s,r,t,u):n(h,_,s,t,r,u);if(!(void 0===y?h===_||e(h,_,n,o,u):y)){p=!1;break}v||(v="constructor"==s)}if(p&&!v){var d=t.constructor,b=r.constructor;d==b||!("constructor"in t)||!("constructor"in r)||"function"==typeof d&&d instanceof d&&"function"==typeof b&&b instanceof b||(p=!1)}return u.delete(t),u.delete(r),p}(t,r,e,n,o,s))}(t,r,Mt,e,n,o))}function Tt(t){return"function"==typeof t?t:null==t?cr:"object"==typeof t?Yt(t)?function(t,r){return Lt(t)&&Rt(r)?Zt(Vt(t),r):function(e){var n=function(t,r,e){var n=null==t?void 0:Ft(t,r);return void 0===n?void 0:n}(e,t);return void 0===n&&n===r?function(t,r){return null!=t&&function(t,r,e){for(var n,o=-1,u=(r=Lt(r,t)?[r]:Ct(r)).length;++o<u;){var a=Vt(r[o]);if(!(n=null!=t&&e(t,a)))break;t=t[a]}return n||!!(u=t?t.length:0)&&er(u)&&Dt(a,u)&&(Yt(t)||Xt(t))}(t,r,It)}(e,t):Mt(r,n,void 0,3)}}(t[0],t[1]):(e=function(t){for(var r=ir(t),e=r.length;e--;){var n=r[e],o=t[n];r[e]=[n,o,Rt(o)]}return r}(r=t),1==e.length&&e[0][2]?Zt(e[0][0],e[0][1]):function(t){return t===r||function(t,r,e,n){var o=e.length,u=o;if(null==t)return!u;for(t=Object(t);o--;){var a=e[o];if(a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++o<u;){var i=(a=e[o])[0],c=t[i],f=a[1];if(a[2]){if(void 0===c&&!(i in t))return!1}else{var s,l=new Et;if(!(void 0===s?Mt(f,c,n,3,l):s))return!1}}return!0}(t,0,e)}):Lt(n=t)?(o=Vt(n),function(t){return null==t?void 0:t[o]}):function(t){return function(r){return Ft(r,t)}}(n);var r,e,n,o}function Ct(t){return Yt(t)?t:Kt(t)}function Bt(t,r,e,n,o,u){var a=2&o,i=t.length,c=r.length;if(i!=c&&!(a&&c>i))return!1;var f=u.get(t);if(f&&u.get(r))return f==r;var s=-1,l=!0,p=1&o?new xt:void 0;for(u.set(t,r),u.set(r,t);++s<i;){var v=t[s],h=r[s];if(n)var _=a?n(h,v,s,r,t,u):n(v,h,s,t,r,u);if(void 0!==_){if(_)continue;l=!1;break}if(p){if(!R(r,(function(t,r){if(!p.has(r)&&(v===t||e(v,t,n,o,u)))return p.add(r)}))){l=!1;break}}else if(v!==h&&!e(v,h,n,o,u)){l=!1;break}}return u.delete(t),u.delete(r),l}function Ut(t,r){var e,n,o=t.__data__;return("string"==(n=typeof(e=r))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?o["string"==typeof r?"string":"hash"]:o.map}function qt(t,r){var e=function(t,r){return null==t?void 0:t[r]}(t,r);return function(t){return!(!nr(t)||function(t){return!!tt&&tt in t}(t))&&(rr(t)||Z(t)?ot:E).test(Wt(t))}(e)?e:void 0}$t.prototype.clear=function(){this.__data__=dt?dt(null):{}},$t.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},$t.prototype.get=function(t){var r=this.__data__;if(dt){var e=r[t];return e===n?void 0:e}return et.call(r,t)?r[t]:void 0},$t.prototype.has=function(t){var r=this.__data__;return dt?void 0!==r[t]:et.call(r,t)},$t.prototype.set=function(t,r){return this.__data__[t]=dt&&void 0===r?n:r,this},St.prototype.clear=function(){this.__data__=[]},St.prototype.delete=function(t){var r=this.__data__,e=Pt(r,t);return!(e<0||(e==r.length-1?r.pop():ct.call(r,e,1),0))},St.prototype.get=function(t){var r=this.__data__,e=Pt(r,t);return e<0?void 0:r[e][1]},St.prototype.has=function(t){return Pt(this.__data__,t)>-1},St.prototype.set=function(t,r){var e=this.__data__,n=Pt(e,t);return n<0?e.push([t,r]):e[n][1]=r,this},Nt.prototype.clear=function(){this.__data__={hash:new $t,map:new(vt||St),string:new $t}},Nt.prototype.delete=function(t){return Ut(this,t).delete(t)},Nt.prototype.get=function(t){return Ut(this,t).get(t)},Nt.prototype.has=function(t){return Ut(this,t).has(t)},Nt.prototype.set=function(t,r){return Ut(this,t).set(t,r),this},xt.prototype.add=xt.prototype.push=function(t){return this.__data__.set(t,n),this},xt.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.clear=function(){this.__data__=new St},Et.prototype.delete=function(t){return this.__data__.delete(t)},Et.prototype.get=function(t){return this.__data__.get(t)},Et.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.set=function(t,r){var e=this.__data__;if(e instanceof St){var n=e.__data__;if(!vt||n.length<199)return n.push([t,r]),this;e=this.__data__=new Nt(n)}return e.set(t,r),this};var zt=function(t){return nt.call(t)};function Dt(t,r){return!!(r=null==r?o:r)&&("number"==typeof t||F.test(t))&&t>-1&&t%1==0&&t<r}function Lt(t,r){if(Yt(t))return!1;var e=typeof t;return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=t&&!ur(t))||A.test(t)||!m.test(t)||null!=r&&t in Object(r)}function Rt(t){return t==t&&!nr(t)}function Zt(t,r){return function(e){return null!=e&&e[t]===r&&(void 0!==r||t in Object(e))}}(pt&&zt(new pt(new ArrayBuffer(1)))!=w||vt&&zt(new vt)!=l||ht&&zt(ht.resolve())!=h||_t&&zt(new _t)!=y||yt&&zt(new yt)!=g)&&(zt=function(t){var r=nt.call(t),e=r==v?t.constructor:void 0,n=e?Wt(e):void 0;if(n)switch(n){case bt:return w;case gt:return l;case jt:return h;case wt:return y;case mt:return g}return r});var Kt=Jt((function(t){var r;t=null==(r=t)?"":function(t){if("string"==typeof t)return t;if(ur(t))return kt?kt.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r}(r);var e=[];return O.test(t)&&e.push(""),t.replace(k,(function(t,r,n,o){e.push(n?o.replace(S,"$1"):r||t)})),e}));function Vt(t){if("string"==typeof t||ur(t))return t;var r=t+"";return"0"==r&&1/t==-1/0?"-0":r}function Wt(t){if(null!=t){try{return rt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}var Gt,Ht=(Gt=function(t,r,e){var n=t?t.length:0;if(!n)return-1;var o,u,a,i=n-1;return void 0!==e&&(u=(o=(a=e)?1/0===(a=function(t){if("number"==typeof t)return t;if(ur(t))return NaN;if(nr(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=nr(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace($,"");var e=x.test(t);return e||P.test(t)?M(t.slice(2),e?2:8):N.test(t)?NaN:+t}(a))||a===-1/0?17976931348623157e292*(a<0?-1:1):a==a?a:0:0===a?a:0)%1,i=o==o?u?o-u:o:0,i=e<0?st(n+i,0):lt(i,n-1)),function(t,r,e,n){t.length;for(var o=e+1;o--;)if(r(t[o],o,t))return o;return-1}(t,Tt(r),i)},function(t,r,e){var n=Object(t);if(!tr(t)){var o=Tt(r);t=ir(t),r=function(t){return o(n[t],t,n)}}var u=Gt(t,r,e);return u>-1?n[o?t[u]:u]:void 0});function Jt(t,r){if("function"!=typeof t||r&&"function"!=typeof r)throw new TypeError("Expected a function");var e=function(){var n=arguments,o=r?r.apply(this,n):n[0],u=e.cache;if(u.has(o))return u.get(o);var a=t.apply(this,n);return e.cache=u.set(o,a),a};return e.cache=new(Jt.Cache||Nt),e}function Qt(t,r){return t===r||t!=t&&r!=r}function Xt(t){return function(t){return or(t)&&tr(t)}(t)&&et.call(t,"callee")&&(!it.call(t,"callee")||nt.call(t)==u)}Jt.Cache=Nt;var Yt=Array.isArray;function tr(t){return null!=t&&er(t.length)&&!rr(t)}function rr(t){var r=nr(t)?nt.call(t):"";return r==s||"[object GeneratorFunction]"==r}function er(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}function nr(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}function or(t){return!!t&&"object"==typeof t}function ur(t){return"symbol"==typeof t||or(t)&&nt.call(t)==b}var ar=L?function(t){return function(r){return t(r)}}(L):function(t){return or(t)&&er(t.length)&&!!I[nt.call(t)]};function ir(t){return tr(t)?function(t,r){var e=Yt(t)||Xt(t)?function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}(t.length,String):[],n=e.length,o=!!n;for(var u in t)!r&&!et.call(t,u)||o&&("length"==u||Dt(u,n))||e.push(u);return e}(t):function(t){if(e=(r=t)&&r.constructor,r!==("function"==typeof e&&e.prototype||X))return ft(t);var r,e,n=[];for(var o in Object(t))et.call(t,o)&&"constructor"!=o&&n.push(o);return n}(t)}function cr(t){return t}t.exports=Ht}}]);
//# sourceMappingURL=8095.js.map