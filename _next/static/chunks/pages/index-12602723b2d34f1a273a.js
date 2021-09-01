(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3069:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return J}});var r=t(5893),a=t(7294),o=t(809),s=t.n(o),c=t(266),i=t(5383),u=t(2809),l=t(9501),d=t(1942),p=t(1372),f=t(4184),m=t.n(f);function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){(0,u.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var b,x=function(e){var n=e.className,t=e.inputProps,a=void 0===t?{}:t,o=e.label,s=e.showError,c=void 0!==s&&s,i=e.errorString,u=void 0===i?"":i;return(0,r.jsxs)("div",{className:"pb-8",children:[(0,r.jsxs)("div",{className:n,children:[(0,r.jsx)("label",{className:"flex-0 block text-gray-700 text-sm font-bold mb-2",children:o}),(0,r.jsx)("input",v({className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"text"},a))]}),(0,r.jsx)("div",{className:m()("text-warning text-body-sm h-4 ml-16 my-1 md:5 md:ml-24",c&&u?"opacity-100":"opacity-0"),children:u})]})},w=t(773),g=t(5503),j=t(4642),k=t(1369),y=(0,g.ZF)({apiKey:"AIzaSyBd-Iaq7fSXCrLMLZLHD8gU0gjLQJYlszs",authDomain:"fontech-asana.firebaseapp.com",databaseURL:"https://fontech-asana-default-rtdb.firebaseio.com",projectId:"fontech-asana"}),P=function(){var e=(0,c.Z)(s().mark((function e(){var n,t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,j.iH)((0,j.N8)()),e.next=3,(0,j.U2)((0,j.iU)(n,"/"));case 3:if((t=e.sent).exists()){e.next=6;break}throw new Error("snapshot not exists");case 6:return r=t.val(),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=(0,c.Z)(s().mark((function e(n){var t,r,a,o,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.email,r=n.password,a=(0,k.v0)(),e.next=4,(0,k.e5)(a,t,r);case 4:return o=e.sent,c=o.user,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();!function(e){e.email="email",e.password="password"}(b||(b={}));var T,I=t(7990),A=[{id:b.email,label:"Email*",type:"text",placeholder:"name@example.com"},{id:b.password,label:"\u5bc6\u78bc*",type:"password",placeholder:"\u8acb\u8f38\u5165\u60a8\u7684\u5bc6\u78bc"}],N=(T={},(0,u.Z)(T,b.email,""),(0,u.Z)(T,b.password,""),T),O=l.Ry().shape({email:l.Z_().email("\u7121\u6548\u7684\u96fb\u5b50\u90f5\u4ef6").required("\u672c\u6b04\u4f4d\u70ba\u5fc5\u586b"),password:l.Z_().required("\u672c\u6b04\u4f4d\u70ba\u5fc5\u586b")}),Z=function(){var e=(0,p.I0)(),n=a.useState(!1),t=(0,i.Z)(n,2),o=t[0],u=t[1],l=a.useState(""),f=(0,i.Z)(l,2),m=f[0],h=f[1],v=(0,d.TA)({initialValues:N,validationSchema:O,onSubmit:function(){var n=(0,c.Z)(s().mark((function n(t){var r,a,c;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!o){n.next=2;break}return n.abrupt("return");case 2:if(u(!0),n.prev=3,y){n.next=6;break}throw new Error("firebase not found");case 6:return n.next=8,S({email:t[b.email],password:t[b.password]});case 8:if(n.sent){n.next=11;break}throw new Error("user not found");case 11:return n.next=13,P();case 13:if(r=n.sent){n.next=16;break}throw new Error("realTimeData not found");case 16:if(a=r["asana-access-token"],c=r.gids,a){n.next=20;break}throw new Error("asanaAccessToken is not vaild");case 20:e((s={data:{asanaAccessToken:a,gids:c}},{type:w.I.SAVE_LOCALDATA,data:s})),n.next=31;break;case 23:return n.prev=23,n.t0=n.catch(3),h("Login failed"),n.next=28,(0,I._v)(2e3);case 28:return h(""),u(!1),n.abrupt("return");case 31:u(!1);case 32:case"end":return n.stop()}var s}),n,null,[[3,23]])})));return function(e){return n.apply(this,arguments)}}()});return(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"\u8acb\u5148\u767b\u5165"}),(0,r.jsxs)("form",{className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",onSubmit:v.handleSubmit,children:[(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"flex-1 md:pr-3",children:A.map((function(e){return(0,r.jsx)(x,{inputProps:{id:e.id,name:e.id,placeholder:e.placeholder,type:e.type,onChange:v.handleChange,value:v.values[e.id]},label:e.label,showError:!(!v.touched[e.id]||!v.errors[e.id]),errorString:v.errors[e.id]},"contact-us-form-input-".concat(e.id))}))})}),(0,r.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit",children:"\u78ba\u8a8d\u9001\u51fa"}),m&&(0,r.jsx)("p",{children:m})]})]})},_=t(9896),E=function(e){e.asanaAccessToken,e.allProjectsId,e.developerTeamId,e.fontechTeamId,e.totalProjectProgressId;return(0,r.jsx)("div",{children:"AsanaCreateTask"})},C=t(7201),D=function(){var e=(0,c.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}throw new Error("asanaAccessToken not found");case 2:if(t=C.Client.create().useAccessToken(n)){e.next=5;break}throw new Error("client not found");case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),L=["To do","In progress","Complete","Needs review"];function M(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"===typeof e)return U(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return U(e,n)}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,c=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return s=e.done,e},e:function(e){c=!0,o=e},f:function(){try{s||null==t.return||t.return()}finally{if(c)throw o}}}}function U(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var V="project-name",q="\u5c08\u6848\u540d\u7a31",B="text",F="AAA",R=(0,u.Z)({},V,""),X=l.Ry().shape({projectName:l.Z_()}),z=function(e){var n=e.asanaAccessToken,t=e.allProjectsId,o=e.developerTeamId,u=e.fontechTeamId,l=e.totalProjectProgressId,p=a.useState(!1),f=(0,i.Z)(p,2),m=f[0],h=f[1],v=a.useState(""),b=(0,i.Z)(v,2),w=b[0],g=b[1],j=function(){var e=(0,c.Z)(s().mark((function e(r){var a,i,d,p,f,m,v,b,x,w,j,k,y,P;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r||"AAA",e.prev=1,e.next=4,D(n);case 4:return i=e.sent,e.next=7,i.projects.createInTeam(u,{name:a,notes:"\u6b63\u5f0f\u7ad9\n\u524d\u53f0\n\n\u5f8c\u53f0\n\u5e33\u865f\n\u5bc6\u78bc\n\n\u6e2c\u8a66\u7ad9\n\u524d\u53f0\n\n\u5f8c\u53f0\n\u5e33\u865f\n\u5bc6\u78bc\n\n(\u82e5\u6b64\u5c08\u6848\u7121\u8a72\u9805\u8acb\u522a\u9664)\n\nGoogle drive:\n\n\u7db2\u7ad9\u57fa\u672c\u8cc7\u8a0a\ntitle\ndescription\nog:image\nfavicon\nicon\ndomain\nga (optional)\ngtag (optional)\nfacebook app id (optional)\nfacebook app secret (optional)\ngoogle app id (optional)\ngoogle app secret (optional)\ncontact email (optional)\nemail sender name (optional)\n",color:"light-green",default_view:"board"});case 7:return d=e.sent,e.next=10,i.sections.findByProject(d.gid);case 10:p=e.sent,f=M(L),e.prev=12,f.s();case 14:if((m=f.n()).done){e.next=20;break}return v=m.value,e.next=18,i.sections.createInProject(d.gid,{name:v});case 18:e.next=14;break;case 20:e.next=25;break;case 22:e.prev=22,e.t0=e.catch(12),f.e(e.t0);case 25:return e.prev=25,f.f(),e.finish(25);case 28:return e.next=30,Promise.all(p.map((function(e){return i.sections.delete(e.gid)})));case 30:return b=d.permalink_url,e.next=33,i.tasks.create({name:a,projects:[t],notes:b});case 33:return x=e.sent,w=x.gid,e.next=37,i.tasks.addSubtask(w,{name:"".concat(a,"| Developer")});case 37:return j=e.sent,e.next=40,i.sections.findByProject(o);case 40:return k=e.sent,e.next=43,Promise.all(k.map((function(e){return new Promise((function(n,t){(function(){var r=(0,c.Z)(s().mark((function r(){var o,c;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.tasks.addSubtask(j.gid,{name:"".concat(a,"| ").concat(e.name)});case 3:o=r.sent,c=i.sections.addTaskForSection(e.gid,{task:o.gid}),n(c),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),t(r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}})()()}))})));case 43:return e.next=45,i.tasks.addSubtask(w,{name:"".concat(a,"| Design")});case 45:return e.next=47,i.tasks.addSubtask(w,{name:"".concat(a,"| PM")});case 47:return y=e.sent,e.next=50,i.tasks.addSubtask(y.gid,{name:"Start"});case 50:return P=e.sent,e.next=53,i.sections.addTaskForSection(l,{task:P.gid});case 53:e.next=63;break;case 55:return e.prev=55,e.t1=e.catch(1),g("\u5931\u6557"),e.next=60,(0,I._v)(5e3);case 60:return g(""),h(!1),e.abrupt("return");case 63:return g("\u6210\u529f"),e.next=66,(0,I._v)(5e3);case 66:g(""),h(!1);case 68:case"end":return e.stop()}}),e,null,[[1,55],[12,22,25,28]])})));return function(n){return e.apply(this,arguments)}}(),k=(0,d.TA)({initialValues:R,validationSchema:X,onSubmit:function(e){m||(h(!0),j(e["project-name"]))}}),y=a.useMemo((function(){return m?(0,r.jsx)("div",{children:"\u8655\u7406\u4e2d..."}):(0,r.jsxs)("form",{className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",onSubmit:k.handleSubmit,children:[(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"flex-1 md:pr-3",children:(0,r.jsx)(x,{inputProps:{id:V,name:V,placeholder:F,type:B,onChange:k.handleChange,value:k.values[V]},label:q,showError:!(!k.touched[V]||!k.errors[V]),errorString:k.errors[V]},"contact-us-form-input-".concat(V))})}),(0,r.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit",children:"\u78ba\u8a8d\u9001\u51fa"})]})}),[m,k]);return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"p-4",children:y}),w&&(0,r.jsx)("div",{className:"p-4",children:w})]})},H=[{value:"showCreateProject",label:"showCreateProject"},{value:"showCreateTask",label:"showCreateTask"}],G=function(e){var n=e.asanaAccessToken,t=e.allProjectsId,o=e.developerTeamId,s=e.fontechTeamId,c=e.totalProjectProgressId,u=a.useState(H[0]),l=(0,i.Z)(u,2),d=l[0],p=l[1],f=a.useMemo((function(){return"showCreateTask"===d.value?(0,r.jsx)(E,{asanaAccessToken:n,allProjectsId:t,developerTeamId:o,fontechTeamId:s,totalProjectProgressId:c}):(0,r.jsx)(z,{asanaAccessToken:n,allProjectsId:t,developerTeamId:o,fontechTeamId:s,totalProjectProgressId:c})}),[d]);return(0,r.jsxs)("div",{children:[(0,r.jsx)(_.ZP,{label:"Single select",options:H,defaultValue:H[0],onChange:p}),f]})},J=function(){var e=(0,p.v9)((function(e){return{localData:e.localDataManagerState.data}}),p.wU).localData,n=a.useMemo((function(){var n=(0,r.jsx)(Z,{});if(!e)return n;var t=e.asanaAccessToken,a=e.gids;if([t,a].find((function(e){return!e})))return n;var o=null===a||void 0===a?void 0:a["all-projects-id"],s=null===a||void 0===a?void 0:a["developer-team-id"],c=null===a||void 0===a?void 0:a["fontech-team-id"],i=null===a||void 0===a?void 0:a["total-project-progress-id"];return[o,s,c,i].find((function(e){return!e}))?n:(0,r.jsx)(G,{asanaAccessToken:t,allProjectsId:o.toString(),developerTeamId:s.toString(),fontechTeamId:c.toString(),totalProjectProgressId:i.toString()})}),[e]);return(0,r.jsx)("div",{className:"p-4",children:n})}},5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3069)}])},2825:function(){},9862:function(){},964:function(){}},function(e){e.O(0,[662,831,627,64,118,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);