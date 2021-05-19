(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{187:function(t,n,e){"use strict";e.r(n);var i,a,c,o,r,s,d,l=e(0),x=e.n(l),p=e(27),b=e.n(p),j=(e(76),e(5)),u=e(4),h=e(8),f=(e(77),e(2)),O=e(3),g=O.a.span(i||(i=Object(f.a)(['\n\tfont-family: "Montserrat", sans-serif;\n']))),m="@media (min-width: ".concat(1024,"px)"),k=O.a.header(a||(a=Object(f.a)(["\n\twidth: 100%;\n\theight: 72px;\n\tpadding: 12px 24px;\n\tbox-shadow: 0px 3px 6px #00000029;\n\tbackground-color: #ffffff;\n\tposition: fixed;\n\tz-index: 10000;\n"]))),v=O.a.div(c||(c=Object(f.a)(["\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\talign-items: center;\n\twidth: 100%;\n\t"," {\n\t\tmax-width: 960px;\n\t\tmargin: auto;\n\t}\n"])),m),w=O.a.div(o||(o=Object(f.a)(["\n\tdisplay: flex;\n\talign-items: center;\n"]))),y=O.a.img(r||(r=Object(f.a)(["\n\twidth: 48px;\n\theight: 48px;\n\tborder-radius: 24px;\n\tbackground-color: #e8ecec;\n\tobject-fit: cover;\n"]))),C=Object(O.a)(g)(s||(s=Object(f.a)(["\n\tmargin-left: 16px;\n\tfont-size: 16px;\n\tline-height: 19px;\n\tcolor: #6d8187;\n"]))),T=Object(O.a)(C)(d||(d=Object(f.a)(["\n\tcursor: pointer;\n"]))),E=e(1);var L,I,S,z,P,N,B=function(t){var n=t.image,e=t.name,i=t.onClickLogout;return Object(E.jsx)(k,{children:Object(E.jsxs)(v,{children:[Object(E.jsxs)(w,{children:[Object(E.jsx)(y,{alt:"userPic",src:"https://dev-dl.tdcx.com:3092".concat(n)}),Object(E.jsx)(C,{children:e})]}),Object(E.jsx)(T,{onClick:i,children:"Logout"})]})})},M=O.a.div(L||(L=Object(f.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 296px;\n\tmin-height: 195px;\n\tpadding: 24px 24px;\n\tmargin: auto;\n\tborder-radius: 12px;\n\tbox-shadow: 0px 3px 6px #00000029;\n\tbackground-color: #ffffff;\n"]))),U=Object(O.a)(g)(I||(I=Object(f.a)(["\n\tfont-size: 20px;\n\tline-height: 24px;\n\tcolor: #537178;\n\ttext-align: left;\n\tmargin-bottom: 24px;\n"]))),D=O.a.input(S||(S=Object(f.a)(["\n\tborder: 0;\n\tborder-radius: 8px;\n\theight: 40px;\n\tpadding: 11px 0px 11px 16px;\n\tbackground: #eef1f8;\n\tmargin-bottom: 12px;\n"]))),G=O.a.button(z||(z=Object(f.a)(["\n\tborder: 0;\n\tborder-radius: 8px;\n\theight: 40px;\n\tbackground: #5285ec;\n\tcursor: pointer;\n"]))),A=Object(O.a)(g)(P||(P=Object(f.a)(["\n\tfont-size: 14px;\n\tline-height: 18px;\n\tcolor: #ffffff;\n"]))),F=Object(O.a)(g)(N||(N=Object(f.a)(["\n\tfont-size: 10px;\n\tline-height: 14px;\n\tcolor: red;\n\theight: 10px;\n"])));var _,H,K,J,R,Y,q,Q,V,W=function(t){var n=t.taskName||"",e=Object(l.useState)(n),i=Object(j.a)(e,2),a=i[0],c=i[1],o=Object(l.useState)(!0),r=Object(j.a)(o,2),s=r[0],d=r[1],x=function(){var n=t.onClickAddOrEditTask,e=a.trim();c(e),e.length>2?n({id:t.taskId,name:e}):d(!1)};return Object(E.jsxs)(M,{children:[Object(E.jsx)(U,{"data-testid":"addOrEditTask",children:t.taskId?"Edit Task":"+ New Task"}),Object(E.jsx)(D,{placeholder:"Task Name",value:a,onChange:function(t){c(t.target.value),d(!0)},onKeyDown:function(t){13===t.keyCode&&x()}}),Object(E.jsx)(G,{onClick:x,children:Object(E.jsx)(A,{children:t.taskId?"Edit Task":"+ New Task"})}),s?Object(E.jsx)(F,{}):Object(E.jsx)(F,{children:"Task Name should have minimum 3 characters"})]})},X=e(71),Z=O.a.div(_||(_=Object(f.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\t"," {\n\t\tflex-direction: row;\n\t\tjustify-content: space-between;\n\t\tmargin-top: 10px;\n\t}\n"])),m),$=O.a.div(H||(H=Object(f.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: flex-start;\n\theight: 158px;\n\twidth: 100%;\n\tmargin-top: 12px;\n\tbackground-color: #ffffff;\n\tbox-shadow: 0px 3px 6px #0000000a;\n\tpadding-left: 32px;\n\n\t"," {\n\t\twidth: 304px;\n\t\tmargin-right: 24px;\n\t\tborder-radius: 12px;\n\t\t:last-child {\n\t\t\tmargin-right: 0;\n\t\t}\n\t}\n"])),m),tt=Object(O.a)(g)(K||(K=Object(f.a)(["\n\tfont-size: 20px;\n\tline-height: 24px;\n\tcolor: #537178;\n"]))),nt=O.a.div(J||(J=Object(f.a)(["\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: flex-end;\n"]))),et=Object(O.a)(g)(R||(R=Object(f.a)(["\n\ttext-align: left;\n\tfont-size: 64px;\n\tline-height: 78px;\n\tcolor: #5285ec;\n"]))),it=Object(O.a)(g)(Y||(Y=Object(f.a)(["\n\ttext-align: left;\n\tfont-size: 20px;\n\tline-height: 24px;\n\tcolor: #8f9ea2;\n"]))),at=O.a.ul(q||(q=Object(f.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: flex-start;\n\tpadding-left: 20px;\n\tpadding-right: 12px;\n"]))),ct=O.a.li(Q||(Q=Object(f.a)(["\n\tspan {\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\tdisplay: -webkit-box;\n\t\t-webkit-line-clamp: 1;\n\t\t-webkit-box-orient: vertical;\n\t}\n"]))),ot=Object(O.a)(g)(V||(V=Object(f.a)(["\n\tfont-size: 14px;\n\tline-height: 26px;\n\tcolor: #8f9ea2;\n\ttext-decoration: ",";\n"])),(function(t){return t.isCompleted&&"line-through"}));var rt=function(t){var n=t.details,e=n.tasksCompleted,i=n.totalTasks,a=n.latestTasks;return Object(E.jsxs)(Z,{children:[Object(E.jsxs)($,{children:[Object(E.jsx)(tt,{children:"Tasks Completed"}),Object(E.jsxs)(nt,{children:[Object(E.jsx)(et,{children:e}),Object(E.jsxs)(it,{children:["/",i]})]})]}),Object(E.jsxs)($,{children:[Object(E.jsx)(tt,{children:"Latest Created Tasks"}),Object(E.jsx)(at,{children:a.map((function(t){return Object(E.jsx)(ct,{children:Object(E.jsx)(ot,{isCompleted:t.completed,children:t.name})},t.name)}))})]}),Object(E.jsx)($,{children:Object(E.jsx)(X.a,{height:103,width:103,data:{labels:["Completed Tasks","Not Completed Tasks"],datasets:[{label:"Completed Tasks",backgroundColor:["#5285EC","#E8ECEC"],data:[e,i-e]}]},options:{animation:!1,legend:{display:!1,position:"right"},maintainAspectRatio:!1}})})]})};var st=function(t){return Object(E.jsx)("svg",Object(u.a)(Object(u.a)({xmlns:"http://www.w3.org/2000/svg",width:16.443,height:16.443,viewBox:"0 0 16.443 16.443"},t),{},{children:Object(E.jsx)("path",{d:"M9.003 3.44l4 4-9 9h-3a1.029 1.029 0 01-1-1v-3zm7-1l-2-2a1.358 1.358 0 00-2 0l-2 2 4 4 2-2a1.358 1.358 0 000-2z",fill:"#647278"})}))};var dt,lt,xt,pt,bt,jt,ut,ht,ft,Ot=function(t){return Object(E.jsx)("svg",Object(u.a)(Object(u.a)({xmlns:"http://www.w3.org/2000/svg",width:16,height:18.13,viewBox:"0 0 16 18.13"},t),{},{children:Object(E.jsx)("path",{d:"M15 1.13h-4v-1c-.145-.291-.675 0-1 0H6c-.325 0-.857-.292-1 0v1H1a1.577 1.577 0 00-1 1v1c0 .316.684 0 1 0h14c.316 0 1 .316 1 0v-1a1.577 1.577 0 00-1-1zm-13 16c.057.9 1.095 1 2 1h8c.9 0 1.943-.1 2-1l1-12H1z",fill:"#647278"})}))},gt=O.a.div(dt||(dt=Object(f.a)(["\n\tmargin-top: 16px;\n\tmargin-bottom: 12px;\n\tbackground-color: #ffffff;\n\tbox-shadow: 0px 3px 6px #00000014;\n\twidth: 100%;\n\n\t"," {\n\t\tborder-radius: 12px;\n\t\tmax-width: 960px;\n\t}\n"])),m),mt=O.a.div(lt||(lt=Object(f.a)(["\n\tpadding: 24px 12px 24px 0px;\n\tmargin-left: 16px;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\talign-items: flex-start;\n\tborder-bottom: 2px solid #e8e8e8;\n\t:last-child {\n\t\tborder-bottom: none;\n\t}\n\n\t"," {\n\t\tmargin-left: 24px;\n\t\tmargin-right: 24px;\n\t}\n"])),m),kt=O.a.div(xt||(xt=Object(f.a)(["\n\tdisplay: flex;\n\tflex-direction: row;\n\tcursor: pointer;\n"]))),vt=O.a.input(pt||(pt=Object(f.a)(["\n\tborder: 2px solid #95a4ab;\n\tborder-radius: 4px;\n\twidth: 19px;\n\tmin-width: 19px;\n\theight: 19px;\n"]))),wt=Object(O.a)(g)(bt||(bt=Object(f.a)(["\n\ttext-align: left;\n\tfont-size: 20px;\n\tline-height: 28px;\n\tpadding-left: 12px;\n\tpadding-right: 24px;\n\tcolor: ",";\n\ttext-decoration: ",";\n"])),(function(t){return t.isCompleted?"#537178":"#5285ec"}),(function(t){return t.isCompleted&&"line-through"})),yt=O.a.div(jt||(jt=Object(f.a)(["\n\tdisplay: flex;\n\tflex-direction: row;\n"]))),Ct=Object(O.a)(st)(ut||(ut=Object(f.a)(["\n\tcursor: pointer;\n"]))),Tt=Object(O.a)(Ot)(ht||(ht=Object(f.a)(["\n\tcursor: pointer;\n\tmargin-left: 16px;\n"])));O.a.hr(ft||(ft=Object(f.a)(["\n\theight: 2px;\n\tbackground-color: #e8e8e8;\n"])));var Et=function(t){var n=function(n,e){(0,t.onClickUpdate)(n,{completed:e})};return Object(E.jsx)(gt,{children:function(){var e=t.tasks,i=t.searchInput;return e.map((function(e){var a=i.toLowerCase();return e.name.toLowerCase().includes(a)?Object(E.jsxs)(mt,{children:[Object(E.jsxs)(kt,{onClick:function(){return n(e._id,!e.completed)},children:[Object(E.jsx)(vt,{type:"checkbox",checked:e.completed,onChange:function(){return n(e._id,!e.completed)}}),Object(E.jsx)(wt,{isCompleted:e.completed,children:e.name})]}),Object(E.jsxs)(yt,{children:[Object(E.jsx)(Ct,{"data-testid":"editIcon",onClick:function(){return t.onClickEdit(e._id,e.name)}}),Object(E.jsx)(Tt,{"data-testid":"deleteIcon",onClick:function(){return n=e._id,void(window.confirm("Are you sure you want to delete the task?")&&(0,t.onClickDelete)(n));var n}})]})]},e._id):null}))}()})},Lt=Object(l.createContext)(),It="token",St="name",zt="user_pic";function Pt(t){var n;n=t.token,sessionStorage.setItem(It,n),function(t){sessionStorage.setItem(St,t)}(t.name),function(t){sessionStorage.setItem(zt,t)}(t.image)}function Nt(){return{token:{token:Bt(),name:sessionStorage.getItem(St)},image:sessionStorage.getItem(zt)}}function Bt(){return sessionStorage.getItem(It)}function Mt(t,n,e){var i="".concat("https://dev-dl.tdcx.com:3092","/").concat(t),a={method:n};switch(n){case"GET":a=Object(u.a)(Object(u.a)({},a),{},{headers:{Authorization:"Bearer ".concat(Bt())}});break;case"POST":case"PUT":case"DELETE":a=Object(u.a)(Object(u.a)({},a),{},{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(Bt())},body:JSON.stringify(e)})}return fetch(i,a).then((function(t){if(t.ok)return t.json();throw t})).then((function(t){return t}))}var Ut,Dt,Gt,At,Ft,_t,Ht,Kt,Jt,Rt,Yt,qt,Qt=function(t){return Object(E.jsx)("svg",Object(u.a)(Object(u.a)({xmlns:"http://www.w3.org/2000/svg",width:16,height:16.003,viewBox:"0 0 16 16.003"},t),{},{children:Object(E.jsx)("path",{d:"M15.782 13.835l-3.115-3.115a.749.749 0 00-.531-.219h-.509a6.5 6.5 0 10-1.127 1.125v.509a.749.749 0 00.219.531l3.116 3.116a.747.747 0 001.059 0l.884-.884a.754.754 0 00.004-1.063zM6.5 10.5a4 4 0 114-4 4 4 0 01-4 4z",fill:"#647278"})}))},Vt=O.a.div(Ut||(Ut=Object(f.a)(["\n\theight: 100vh;\n\toverflow: ",";\n"])),(function(t){return t.isModalOpened&&"hidden"})),Wt=O.a.div(Dt||(Dt=Object(f.a)(["\n\tbackground-color: #f4f4f6;\n\tmin-height: 100vh;\n\tpadding-top: 72px;\n\tdisplay: flex;\n\tflex-direction: column;\n\toverflow: ",";\n\t","\n\n\t"," {\n\t\tjustify-content: ",";\n\t\talign-items: center;\n\t\tpadding-bottom: 24px;\n\t}\n"])),(function(t){return t.isModalOpened&&"hidden"}),(function(t){if(t.isPageLoading)return{"justify-content":"center","align-items":"center"}}),m,(function(t){return(t.isTasksEmpty||t.isPageLoading)&&"center"})),Xt=O.a.div(Gt||(Gt=Object(f.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\theight: 158px;\n\twidth: 100%;\n\tmargin-top: 12px;\n\tbackground-color: #ffffff;\n\tbox-shadow: 0px 3px 6px #0000000a;\n\n\t"," {\n\t\twidth: 304px;\n\t\tborder-radius: 12px;\n\t}\n"])),m),Zt=Object(O.a)(g)(At||(At=Object(f.a)(["\n\ttext-align: center;\n\tfont-size: 20px;\n\tline-height: 28px;\n\tcolor: #537178;\n\tmargin-bottom: 12px;\n"]))),$t=O.a.button(Ft||(Ft=Object(f.a)(["\n\tborder: 0;\n\tborder-radius: 8px;\n\theight: 40px;\n\tmargin-top: 8px;\n\tbackground-color: #5285ec;\n\tcursor: pointer;\n\n\t"," {\n\t\tmargin-top: 0;\n\t\tmargin-left: 12px;\n\t}\n"])),m),tn=Object(O.a)(g)(_t||(_t=Object(f.a)(["\n\tfont-size: 14px;\n\tline-height: 18px;\n\tcolor: #ffffff;\n\tpadding: 11px 22px;\n"]))),nn=O.a.div(Ht||(Ht=Object(f.a)(["\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tbackground-color: #00000033;\n\theight: 100vh;\n\tpadding-top: 84px;\n\tz-index: 100000;\n\n\t"," {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t}\n"])),m),en=O.a.div(Kt||(Kt=Object(f.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin: 30px 15px 0;\n\tposition: relative;\n\n\t"," {\n\t\tflex-direction: row;\n\t\twidth: 100%;\n\t\tmax-width: 960px;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\t}\n"])),m),an=Object(O.a)(g)(Jt||(Jt=Object(f.a)(["\n\ttext-align: center;\n\tfont-size: 20px;\n\tline-height: 24px;\n\tcolor: #537178;\n"]))),cn=O.a.div(Rt||(Rt=Object(f.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\t"," {\n\t\tflex-direction: row;\n\t\tposition: relative;\n\t}\n"])),m),on=O.a.input(Yt||(Yt=Object(f.a)(["\n\tborder: 0;\n\tborder-radius: 8px;\n\theight: 40px;\n\tpadding: 11px 0px 11px 46px;\n\tbackground: #d9dfeb;\n\tmargin-top: 8px;\n\n\t"," {\n\t\tmargin-top: 0;\n\t\twidth: 244px;\n\t}\n"])),m),rn=Object(O.a)(Qt)(qt||(qt=Object(f.a)(["\n\tposition: absolute;\n\ttop: 45px;\n\tleft: 16px;\n\n\t"," {\n\t\ttop: 12px;\n\t}\n"])),m),sn={tasksCompleted:0,totalTasks:0,latestTasks:[]},dn={id:"",name:""};var ln,xn,pn,bn,jn,un,hn=function(){var t=Object(l.useContext)(Lt),n=t.state,e=t.dispatch,i=Object(l.useState)([]),a=Object(j.a)(i,2),c=a[0],o=a[1],r=Object(l.useState)(!1),s=Object(j.a)(r,2),d=s[0],x=s[1],p=Object(l.useState)(sn),b=Object(j.a)(p,2),u=b[0],f=b[1],O=Object(l.useState)(""),g=Object(j.a)(O,2),m=g[0],k=g[1],v=Object(l.useState)(dn),w=Object(j.a)(v,2),y=w[0],C=w[1],T=Object(l.useState)(!0),L=Object(j.a)(T,2),I=L[0],S=L[1];Object(l.useEffect)((function(){z()}),[]),Object(l.useEffect)((function(){return window.addEventListener("click",(function(t){t.stopPropagation();var n=document.getElementById("add-edit-task-card");n&&t.target===n&&(C(dn),x(!1))})),function(){window.removeEventListener("click",(function(){}))}}),[]);var z=function(){S(!0);var t=P(),n=N();Promise.all([t,n]).then((function(){S(!1)}))},P=function(){return Mt("dashboard","GET").then((function(t){f(t)})).catch((function(t){Object(h.b)(t.statusText)}))},N=function(){return Mt("tasks","GET").then((function(t){o(t.tasks)})).catch((function(t){Object(h.b)(t.statusText)}))},M=function(){if(u.totalTasks>0)return Object(E.jsx)(rt,{details:u})},U=function(){x(!0)},D=function(t,n){Mt("tasks/".concat(t),"PUT",n).then((function(t){C(dn),d&&x(!1),z()})).catch((function(t){Object(h.b)(t.statusText)}))},G=function(t,n){C({id:t,name:n}),x(!0)},A=function(t){Mt("tasks/".concat(t),"DELETE").then((function(t){z()})).catch((function(t){Object(h.b)(t.statusText)}))},F=function(){return Object(E.jsx)($t,{onClick:U,children:Object(E.jsx)(tn,{children:"+ New Task"})})},_=function(t){var n=t.target.value;k(n)};return Object(E.jsxs)(Vt,{isModalOpened:d,children:[Object(E.jsx)(B,{name:n.name,image:n.userPic,onClickLogout:function(){e({type:"LOGOUT"})}}),d?Object(E.jsx)(nn,{id:"add-edit-task-card",children:Object(E.jsx)(W,{taskId:y.id,taskName:y.name,onClickAddOrEditTask:function(t){t.id?D(t.id,{name:t.name}):function(t){Mt("tasks","POST",t).then((function(t){x(!1),z()})).catch((function(t){Object(h.b)(t.statusText)}))}({name:t.name})}})}):null,I?Object(E.jsx)(Wt,{isPageLoading:I,children:"Loading..."}):Object(E.jsxs)(Wt,{isModalOpened:d,isTasksEmpty:0===c.length,children:[M(),c.length>0?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(en,{children:[Object(E.jsx)(an,{children:"Tasks"}),Object(E.jsxs)(cn,{children:[Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(on,{placeholder:"Search by task name",value:m,onChange:_}),Object(E.jsx)(rn,{})]}),F()]})]}),Object(E.jsx)(Et,{tasks:c,searchInput:m,onClickUpdate:D,onClickEdit:G,onClickDelete:A})]}):Object(E.jsxs)(Xt,{children:[Object(E.jsx)(Zt,{children:"You have no task."}),F()]})]})]})},fn=O.a.div(ln||(ln=Object(f.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 296px;\n\tmin-height: 250px;\n\tpadding: 24px 24px;\n\tmargin: 12px 12px;\n\tborder-radius: 12px;\n\tbox-shadow: 0px 3px 6px #00000029;\n\tbackground-color: #ffffff;\n"]))),On=Object(O.a)(g)(xn||(xn=Object(f.a)(["\n\tfont-size: 20px;\n\tline-height: 24px;\n\tcolor: #537178;\n\ttext-align: left;\n\tmargin-bottom: 24px;\n"]))),gn=O.a.input(pn||(pn=Object(f.a)(["\n\tborder: 0;\n\tborder-radius: 8px;\n\theight: 40px;\n\tpadding: 11px 0px 11px 16px;\n\tbackground: #eef1f8;\n\tmargin-bottom: 12px;\n"]))),mn=O.a.button(bn||(bn=Object(f.a)(["\n\tborder: 0;\n\tborder-radius: 8px;\n\theight: 40px;\n\tbackground: #5285ec;\n\tcursor: pointer;\n"]))),kn=Object(O.a)(g)(jn||(jn=Object(f.a)(["\n\tfont-size: 14px;\n\tline-height: 18px;\n\tcolor: #ffffff;\n"]))),vn=Object(O.a)(g)(un||(un=Object(f.a)(["\n\tfont-size: 10px;\n\tline-height: 14px;\n\tcolor: red;\n\theight: 10px;\n"])));var wn,yn=function(t){var n=Object(l.useState)(""),e=Object(j.a)(n,2),i=e[0],a=e[1],c=Object(l.useState)(""),o=Object(j.a)(c,2),r=o[0],s=o[1],d=Object(l.useState)(!0),x=Object(j.a)(d,2),p=x[0],b=x[1],u=function(t){13===t.keyCode&&h()},h=function(){if(function(){var t=i.trim(),n=r.trim();return a(t),s(n),t.length>2&&n.length>2}()){var n={name:r.trim(),apiKey:"f5412ca892c4ee0b"};(0,t.onClickLogin)(n)}else b(!1)};return Object(E.jsxs)(fn,{children:[Object(E.jsx)(On,{children:"Login"}),Object(E.jsx)(gn,{value:i,placeholder:"Id",onChange:function(t){a(t.target.value),b(!0)},onKeyDown:u}),Object(E.jsx)(gn,{value:r,placeholder:"Name",onChange:function(t){s(t.target.value),b(!0)},onKeyDown:u}),Object(E.jsx)(mn,{onClick:h,children:Object(E.jsx)(kn,{children:"Login"})}),p?Object(E.jsx)(vn,{}):Object(E.jsx)(vn,{children:"Id and Name should have minimum 3 characters"})]})},Cn=O.a.div(wn||(wn=Object(f.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n  height: 100vh;\n\tbackground-color: #f4f4f6;\n"])));var Tn=function(){var t=Object(l.useContext)(Lt).dispatch;return Object(E.jsx)(Cn,{children:Object(E.jsx)(yn,{onClickLogin:function(n){!function(n){Mt("login","POST",n).then((function(n){n.token&&t({type:"LOGIN",payload:n})})).catch((function(t){Object(h.b)(t.statusText)}))}(n)}})})},En={isUserLoggedIn:!1,name:"",userPic:""},Ln=function(t,n){switch(n.type){case"LOGIN":var e=n.payload,i=e.token,a=e.image;return Pt({token:i.token,name:i.name,image:a}),Object(u.a)(Object(u.a)({},t),{},{isUserLoggedIn:!0,name:i.name,userPic:a});case"LOGOUT":return sessionStorage.clear(),Object(u.a)(Object(u.a)({},t),{},{isUserLoggedIn:!1,name:"",userPic:""});default:return t}};var In=function(){var t=Object(l.useReducer)(Ln,En),n=Object(j.a)(t,2),e=n[0],i=n[1],a=Object(l.useState)(!0),c=Object(j.a)(a,2),o=c[0],r=c[1];return Object(l.useEffect)((function(){Nt().token.token&&i({type:"LOGIN",payload:Nt()}),r(!1)}),[]),o?null:Object(E.jsx)(Lt.Provider,{value:{state:e,dispatch:i},children:Object(E.jsxs)("div",{className:"App",children:[e.isUserLoggedIn?Object(E.jsx)(hn,{}):Object(E.jsx)(Tn,{}),Object(E.jsx)(h.a,{position:"bottom-center",autoClose:2e3,hideProgressBar:!0,newestOnTop:!0,closeOnClick:!0,rtl:!1,closeButton:!1,draggable:!0,pauseOnHover:!0})]})})},Sn=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,188)).then((function(n){var e=n.getCLS,i=n.getFID,a=n.getFCP,c=n.getLCP,o=n.getTTFB;e(t),i(t),a(t),c(t),o(t)}))};b.a.render(Object(E.jsx)(x.a.StrictMode,{children:Object(E.jsx)(In,{})}),document.getElementById("root")),Sn()},76:function(t,n,e){}},[[187,1,2]]]);
//# sourceMappingURL=main.f8daa5c6.chunk.js.map