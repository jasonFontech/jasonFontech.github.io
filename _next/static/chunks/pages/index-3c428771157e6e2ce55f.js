(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3069:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return se}});var r=n(5893),a=n(7294),o=n(809),s=n.n(o),c=n(266),i=n(7182),u=n(2809),l=n(9501),d=n(4044),p=n(1372),f=n(4184),v=n.n(f);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b,x,w=function(e){var t=e.className,n=e.inputProps,a=void 0===n?{}:n,o=e.label,s=e.showError,c=void 0!==s&&s,i=e.errorString,u=void 0===i?"":i;return(0,r.jsxs)("div",{className:"pb-8",children:[(0,r.jsxs)("div",{className:t,children:[(0,r.jsx)("label",{className:"flex-0 block text-gray-700 text-sm font-bold mb-2",children:o}),(0,r.jsx)("input",m({className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"text"},a))]}),(0,r.jsx)("div",{className:v()("text-warning text-body-sm h-4 ml-16 my-1 md:5 md:ml-24",c&&u?"opacity-100":"opacity-0"),children:u})]})},j=n(773),g=n(5503),y=n(4642),k=n(1369),O=(0,g.ZF)({apiKey:"AIzaSyBd-Iaq7fSXCrLMLZLHD8gU0gjLQJYlszs",authDomain:"fontech-asana.firebaseapp.com",databaseURL:"https://fontech-asana-default-rtdb.firebaseio.com",projectId:"fontech-asana"}),P=function(){var e=(0,c.Z)(s().mark((function e(){var t,n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,y.iH)((0,y.N8)()),e.next=3,(0,y.U2)((0,y.iU)(t,"/"));case 3:if((n=e.sent).exists()){e.next=6;break}throw new Error("snapshot not exists");case 6:return r=n.val(),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=(0,c.Z)(s().mark((function e(t){var n,r,a,o,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.email,r=t.password,a=(0,k.v0)(),e.next=4,(0,k.e5)(a,n,r);case 4:return o=e.sent,c=o.user,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=(0,c.Z)(s().mark((function e(t){var n,r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.email,r=t.password,O){e.next=3;break}throw new Error("firebase not found");case 3:return e.next=5,S({email:n,password:r});case 5:if(e.sent){e.next=8;break}throw new Error("user not found");case 8:return e.next=10,P();case 10:return a=e.sent,e.abrupt("return",a);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();!function(e){e.email="email",e.password="password"}(b||(b={})),function(e){e.taskName="task-name",e.department="department",e.copyToSelectedProject="copy-to-selected-project",e.asignee="asignee"}(x||(x={}));var T,A,E,N=n(7990),_=[{id:b.email,label:"Email*",type:"text",placeholder:"name@example.com"},{id:b.password,label:"\u5bc6\u78bc*",type:"password",placeholder:"\u8acb\u8f38\u5165\u60a8\u7684\u5bc6\u78bc"}],I=(T={},(0,u.Z)(T,b.email,""),(0,u.Z)(T,b.password,""),T),D=l.Ry().shape({email:l.Z_().email("\u7121\u6548\u7684\u96fb\u5b50\u90f5\u4ef6").required("\u672c\u6b04\u4f4d\u70ba\u5fc5\u586b"),password:l.Z_().required("\u672c\u6b04\u4f4d\u70ba\u5fc5\u586b")}),C=function(){var e=(0,p.I0)(),t=a.useState(!1),n=(0,i.Z)(t,2),o=n[0],u=n[1],l=a.useState(""),f=(0,i.Z)(l,2),v=f[0],h=f[1],m=(0,d.TA)({initialValues:I,validationSchema:D,onSubmit:function(){var t=(0,c.Z)(s().mark((function t(n){var r,a,c;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!o){t.next=2;break}return t.abrupt("return");case 2:return u(!0),t.prev=3,t.next=6,Z({email:n[b.email],password:n[b.password]});case 6:if(r=t.sent){t.next=9;break}throw new Error("realTimeData not found");case 9:if(a=r["asana-access-token"],c=r.gids,a){t.next=13;break}throw new Error("asanaAccessToken is not vaild");case 13:e((s={data:{asanaAccessToken:a,gids:c}},{type:j.I.SAVE_LOCALDATA,data:s})),t.next=24;break;case 16:return t.prev=16,t.t0=t.catch(3),h("Login failed"),t.next=21,(0,N._v)(2e3);case 21:return h(""),u(!1),t.abrupt("return");case 24:u(!1);case 25:case"end":return t.stop()}var s}),t,null,[[3,16]])})));return function(e){return t.apply(this,arguments)}}()});return(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"\u8acb\u5148\u767b\u5165"}),(0,r.jsxs)("form",{className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",onSubmit:m.handleSubmit,children:[(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"flex-1 md:pr-3",children:_.map((function(e){return(0,r.jsx)(w,{inputProps:{id:e.id,name:e.id,placeholder:e.placeholder,type:e.type,onChange:m.handleChange,value:m.values[e.id]},label:e.label,showError:!(!m.touched[e.id]||!m.errors[e.id]),errorString:m.errors[e.id]},"contact-us-form-input-".concat(e.id))}))})}),(0,r.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit",children:"\u78ba\u8a8d\u9001\u51fa"}),v&&(0,r.jsx)("p",{children:v})]})]})},M=n(4880),B=n(7201),L=function(){var e=(0,c.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw new Error("asanaAccessToken not found");case 2:if(n=B.Client.create().useAccessToken(t)){e.next=5;break}throw new Error("client not found");case 5:return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var V="task-name",R="radio-name",X=(A={},(0,u.Z)(A,V,""),(0,u.Z)(A,R,""),A),z=l.Ry().shape((E={},(0,u.Z)(E,V,l.Z_().required("\u672c\u6b04\u4f4d\u70ba\u5fc5\u586b")),(0,u.Z)(E,R,l.Z_().required("\u672c\u6b04\u4f4d\u70ba\u5fc5\u586b")),E)),F=function(e){var t=e.asanaAccessToken,n=e.allProjectsId,o=e.totalProjectProgressId,u=a.useState(!1),l=(0,i.Z)(u,2),p=l[0],f=l[1],v=a.useState(!1),h=(0,i.Z)(v,2),m=h[0],b=h[1],x=a.useState(Array()),w=(0,i.Z)(x,2),j=w[0],g=w[1],y=a.useState(void 0),k=(0,i.Z)(y,2),O=k[0],P=k[1],S=a.useState(void 0),Z=(0,i.Z)(S,2),T=Z[0],A=Z[1],E=(0,d.TA)({initialValues:X,validationSchema:z,onSubmit:function(e){console.log("AsanaSelectProject onSubmit values: ",e)}}),_=function(){var e=(0,c.Z)(s().mark((function e(){var r,a,o,c,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L(t);case 3:return r=e.sent,e.next=6,r.sections.findByProject(n);case 6:return a=e.sent,o=a.filter((function(e){return"Other"!==e.name})),e.next=10,Promise.all(o.map((function(e){return r.tasks.findBySection(e.gid)})));case 10:c=e.sent,i=o.map((function(e,t){return U(U({},e),{},{list:c[t].data})})),g(i),e.next=17;break;case 15:e.prev=15,e.t0=e.catch(0);case 17:return e.next=19,(0,N._v)(5e3);case 19:f(!1);case 20:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();a.useEffect((function(){p||O||(f(!0),_())}),[]);var I=function(){var e=(0,c.Z)(s().mark((function e(){var n,r,a,c,i,u,l,d;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,O){e.next=3;break}throw new Error("selectedTask not found");case 3:return e.next=5,L(t);case 5:return n=e.sent,e.next=8,n.tasks.findById(O.gid);case 8:if(r=e.sent,a=r.notes,c=a.match("https://app.asana.com/0/(.*)/"),i=null===c||void 0===c?void 0:c[1]){e.next=14;break}throw new Error("projectId not found");case 14:return e.next=16,n.projects.findById(i);case 16:return u=e.sent,console.log("selectedProject: ",u),A(u),e.next=21,n.tasks.subtasks(O.gid);case 21:return l=e.sent,console.log("selectedTaskSubTasks: ",l),e.next=25,n.sections.findByProject(o);case 25:d=e.sent,console.log("totalProjectProgressSections: ",d),e.next=37;break;case 29:return e.prev=29,e.t0=e.catch(0),console.log("showSelectTaskDetail error: ",e.t0),e.next=34,(0,N._v)(5e3);case 34:return A(void 0),b(!1),e.abrupt("return");case 37:return e.next=39,(0,N._v)(5e3);case 39:b(!1);case 40:case"end":return e.stop()}}),e,null,[[0,29]])})));return function(){return e.apply(this,arguments)}}();a.useEffect((function(){O&&(m||I())}),[O]);var D=function(){var e=(0,c.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:A(void 0),P({gid:t.value,name:t.label});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=a.useMemo((function(){if(!O)return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{children:"Choose a Task (Project)"}),(0,r.jsx)("div",{className:"flex flex-wrap -mx-2",children:j.map((function(e){return(0,r.jsxs)("div",{className:"w-64 px-2",children:[(0,r.jsx)("div",{children:e.name}),(0,r.jsx)(M.ZP,{label:e.name,options:e.list.map((function(e){return{value:e.gid,label:e.name}})),onChange:D})]},"all-project-sections-".concat(e.gid))}))})]})}),[j,O]),B=a.useMemo((function(){}),[O,T,E]);return(0,r.jsxs)("div",{children:[C,O&&(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{children:["selectedTask: ",O.name]}),(0,r.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",onClick:function(){P(void 0),A(void 0)},children:"clear selected task"})]}),B]})},H=["To do","In progress","Needs review","Complete"];function G(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return J(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return J(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){c=!0,o=e},f:function(){try{s||null==n.return||n.return()}finally{if(c)throw o}}}}function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var K="project-name",Q="\u5c08\u6848\u540d\u7a31",Y="text",$="AAA",W=(0,u.Z)({},K,""),ee=l.Ry().shape((0,u.Z)({},K,l.Z_().required("\u672c\u6b04\u4f4d\u70ba\u5fc5\u586b"))),te=function(e){var t=e.asanaAccessToken,n=e.allProjectsId,o=e.developerTeamId,u=e.fontechTeamId,l=a.useState(!1),p=(0,i.Z)(l,2),f=p[0],v=p[1],h=a.useState(""),m=(0,i.Z)(h,2),b=m[0],x=m[1],j=function(){var e=(0,c.Z)(s().mark((function e(r){var a,i,l,d,p,f,h,m,b,w,j,g;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r||"AAA",e.prev=1,e.next=4,L(t);case 4:return i=e.sent,e.next=7,i.projects.createInTeam(u,{name:a,notes:"\u6b63\u5f0f\u7ad9\n\u524d\u53f0\n\n\u5f8c\u53f0\n\u5e33\u865f\n\u5bc6\u78bc\n\n\u6e2c\u8a66\u7ad9\n\u524d\u53f0\n\n\u5f8c\u53f0\n\u5e33\u865f\n\u5bc6\u78bc\n\n(\u82e5\u6b64\u5c08\u6848\u7121\u8a72\u9805\u8acb\u522a\u9664)\n\nGoogle drive:\n\n\u7db2\u7ad9\u57fa\u672c\u8cc7\u8a0a\ntitle\ndescription\nog:image\nfavicon\nicon\ndomain\nga (optional)\ngtag (optional)\nfacebook app id (optional)\nfacebook app secret (optional)\ngoogle app id (optional)\ngoogle app secret (optional)\ncontact email (optional)\nemail sender name (optional)\n",color:"light-green",default_view:"board"});case 7:return l=e.sent,e.next=10,i.sections.findByProject(l.gid);case 10:d=e.sent,p=G(H),e.prev=12,p.s();case 14:if((f=p.n()).done){e.next=20;break}return h=f.value,e.next=18,i.sections.createInProject(l.gid,{name:h});case 18:e.next=14;break;case 20:e.next=25;break;case 22:e.prev=22,e.t0=e.catch(12),p.e(e.t0);case 25:return e.prev=25,p.f(),e.finish(25);case 28:return e.next=30,Promise.all(d.map((function(e){return i.sections.delete(e.gid)})));case 30:return m=l.permalink_url,e.next=33,i.tasks.create({name:a,projects:[n],notes:m});case 33:return b=e.sent,w=b.gid,e.next=37,i.tasks.addSubtask(w,{name:"".concat(a,"| Developer")});case 37:return j=e.sent,e.next=40,i.sections.findByProject(o);case 40:return g=e.sent,e.next=43,Promise.all(g.map((function(e){return new Promise((function(t,n){(function(){var r=(0,c.Z)(s().mark((function r(){var o,c;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.tasks.addSubtask(j.gid,{name:"".concat(a,"| ").concat(e.name)});case 3:o=r.sent,c=i.sections.addTaskForSection(e.gid,{task:o.gid}),t(c),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),n(r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}})()()}))})));case 43:return e.next=45,i.tasks.addSubtask(w,{name:"".concat(a,"| Design")});case 45:return e.next=47,i.tasks.addSubtask(w,{name:"".concat(a,"| PM")});case 47:e.next=57;break;case 49:return e.prev=49,e.t1=e.catch(1),x("\u5931\u6557"),e.next=54,(0,N._v)(5e3);case 54:return x(""),v(!1),e.abrupt("return");case 57:return x("\u6210\u529f"),e.next=60,(0,N._v)(5e3);case 60:x(""),v(!1);case 62:case"end":return e.stop()}}),e,null,[[1,49],[12,22,25,28]])})));return function(t){return e.apply(this,arguments)}}(),g=(0,d.TA)({initialValues:W,validationSchema:ee,onSubmit:function(e){f||(v(!0),j(e[K]))}}),y=a.useMemo((function(){return f?(0,r.jsx)("div",{children:"\u8655\u7406\u4e2d..."}):(0,r.jsxs)("form",{className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",onSubmit:g.handleSubmit,children:[(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"flex-1 md:pr-3",children:(0,r.jsx)(w,{inputProps:{id:K,name:K,placeholder:$,type:Y,onChange:g.handleChange,value:g.values[K]},label:Q,showError:!(!g.touched[K]||!g.errors[K]),errorString:g.errors[K]},"contact-us-form-input-".concat(K))})}),(0,r.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit",children:"\u78ba\u8a8d\u9001\u51fa"})]})}),[f,g]);return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{children:"Version: 20200901-12:45"}),(0,r.jsx)("div",{className:"p-4",children:y}),b&&(0,r.jsx)("div",{className:"p-4",children:b})]})};function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ae=[{value:"showCreateProject",label:"showCreateProject"},{value:"showCreateTask",label:"showCreateTask"}],oe=function(e){var t=a.useState(ae[0]),n=(0,i.Z)(t,2),o=n[0],s=n[1],c=a.useMemo((function(){return"showCreateTask"===o.value?(0,r.jsx)(F,re({},e)):(0,r.jsx)(te,re({},e))}),[o]);return(0,r.jsxs)("div",{children:[(0,r.jsx)(M.ZP,{label:"Single select",options:ae,defaultValue:ae[0],onChange:s}),c]})},se=function(){var e=(0,p.v9)((function(e){return{localData:e.localDataManagerState.data}}),p.wU).localData,t=a.useMemo((function(){var t=(0,r.jsx)(C,{});if(!e)return t;var n=e.asanaAccessToken,a=e.gids;if([n,a].find((function(e){return!e})))return t;var o=null===a||void 0===a?void 0:a["all-projects-id"],s=null===a||void 0===a?void 0:a["developer-team-id"],c=null===a||void 0===a?void 0:a["fontech-team-id"],i=null===a||void 0===a?void 0:a["total-project-progress-id"];return[o,s,c,i].find((function(e){return!e}))?t:(0,r.jsx)(oe,{asanaAccessToken:n,allProjectsId:o.toString(),developerTeamId:s.toString(),fontechTeamId:c.toString(),totalProjectProgressId:i.toString()})}),[e]);return(0,r.jsx)("div",{className:"p-4",children:t})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3069)}])},2825:function(){},9862:function(){},964:function(){}},function(e){e.O(0,[662,831,627,64,726,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);