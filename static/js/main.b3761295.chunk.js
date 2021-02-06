(this["webpackJsonptodo-mvc"]=this["webpackJsonptodo-mvc"]||[]).push([[0],{27:function(e,t,n){},37:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n(0),c=n.n(o),r=n(28),i=n.n(r),s=(n(37),n(10)),u=(n(27),n(2)),l=n.n(u),d=n(7),f=n(25),b=n(8),j=n(20),p=function(e){var t=e.inputValue,n=e.handleChange,o=e.handleKeyPress,c=e.handleAddTodo;return Object(a.jsxs)("div",{className:Object(j.a)("add-todo",{active:t.length>0}),children:[Object(a.jsx)("label",{className:"add-todo-icon icon",htmlFor:"add-todo-input"}),Object(a.jsx)("div",{className:"add-todo-input",children:Object(a.jsx)("input",{id:"add-todo-input",type:"text",placeholder:"\u65b0\u589e\u5de5\u4f5c",onChange:n,onKeyPress:o,value:t})}),Object(a.jsx)("div",{className:"add-todo-action",children:Object(a.jsxs)("button",{className:"btn-reset btn-add",onClick:c,children:[" ","\u65b0\u589e"," "]})})]})},h=n(11),v=n(12),O=Object(o.createContext)({status:null,authResponse:null,handleFBLogin:null,handleFBLogout:null});function x(){var e=Object(h.a)(["\n  font-size: 14px;\n  font-weight: 300;\n  margin: 2rem 0 1rem;\n  &:hover {\n    text-decoration: underline;\n  }\n"]);return x=function(){return e},e}function g(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return g=function(){return e},e}var m=v.a.footer(g()),k=v.a.button(x()),w=function(e){var t=e.numOfTodos,n=Object(o.useContext)(O).handleFBLogout;return Object(a.jsxs)(m,{children:[Object(a.jsxs)("p",{children:["\u5269\u9918\u9805\u76ee\u6578\uff1a",t]}),Object(a.jsx)(k,{className:"btn-reset",onClick:n,children:"\u767b\u51fa"})]})},T=function(){return Object(a.jsx)("header",{children:Object(a.jsx)("h3",{children:"Tasks"})})},y=function(e){var t=e.todo,n=e.handleDelete,c=e.handleSave,r=e.handleToggleIsDone,i=e.updateIsEdit,u=Object(o.useState)(t.title),l=Object(s.a)(u,2),d=l[0],f=l[1],b=Object(o.useRef)(null);Object(o.useEffect)((function(){t.isEdit&&b.current.focus()}),[t.isEdit]);return Object(a.jsxs)("div",{className:Object(j.a)("task-item",{done:t.isDone,edit:t.isEdit}),children:[Object(a.jsx)("div",{className:"task-item-checked",children:Object(a.jsx)("span",{className:"icon icon-checked",onClick:r(t.id)})}),Object(a.jsxs)("div",{className:"task-item-body",onDoubleClick:function(){return i({id:t.id,isEdit:!0})},children:[Object(a.jsx)("span",{className:"task-item-body-text",children:t.title}),Object(a.jsx)("input",{ref:b,className:"task-item-body-input",type:"text",placeholder:"\u65b0\u589e\u5de5\u4f5c",value:d,onChange:function(e){f(e.target.value)},onKeyDown:function(e){13===e.keyCode&&0!==d.length&&c({id:t.id,title:d,isDone:t.isDone}),27===e.keyCode&&(i({id:t.id,isEdit:!1}),f(t.title))}})]}),Object(a.jsx)("div",{className:"task-item-action",children:Object(a.jsx)("button",{className:"btn-reset btn-destroy icon",onClick:n(t.id),children:" "})})]})},C=function(e){var t=e.todos,n=e.handleDelete,o=e.handleSave,c=e.handleToggleIsDone,r=e.updateIsEdit;return Object(a.jsx)("div",{className:"todos",children:t.map((function(e){return Object(a.jsx)(y,{todo:e,handleDelete:n,handleSave:o,handleToggleIsDone:c,updateIsEdit:r},e.id)}))})},D="https://todo-mvc.herokuapp.com/api/v1",E=function(){var e=Object(b.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(D,"/todos/"),{headers:{"Facebook-Client-Token":localStorage.getItem("facebookClientToken")}});case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(b.a)(l.a.mark((function e(t){var n,a,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.title,a=t.isDone,e.next=3,fetch("".concat(D,"/todos/"),{method:"POST",headers:{"Content-Type":"application/json","Facebook-Client-Token":localStorage.getItem("facebookClientToken")},body:JSON.stringify({title:n,isDone:a})});case 3:return o=e.sent,e.abrupt("return",o.json());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(b.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(D,"/todos/").concat(t),{method:"DELETE",headers:{"Facebook-Client-Token":localStorage.getItem("facebookClientToken")}});case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(b.a)(l.a.mark((function e(t){var n,a,o,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,a=t.title,o=t.isDone,e.next=3,fetch("".concat(D,"/todos/").concat(n),{method:"PATCH",headers:{"Content-Type":"application/json","Facebook-Client-Token":localStorage.getItem("facebookClientToken")},body:JSON.stringify({title:a,isDone:o})});case 3:return c=e.sent,e.abrupt("return",c.json());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(o.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(o.useState)([]),i=Object(s.a)(r,2),u=i[0],j=i[1],h=u.filter((function(e){return!e.isDone})).length,v=function(){var e=Object(b.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,0!==n.length){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,S({title:n,isDone:!1});case 5:t=e.sent,j((function(e){return[].concat(Object(f.a)(e),[Object(d.a)(Object(d.a)({},t),{},{isEdit:!1})])})),c(""),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("[handleAddTodo] createTodo failed: ",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(b.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"Enter"===t.key){e.next=3;break}return e.abrupt("return");case 3:if(0!==n.length){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,S({title:n,isDone:!1});case 7:a=e.sent,j((function(e){return[].concat(Object(f.a)(e),[Object(d.a)(Object(d.a)({},a),{},{isEdit:!1})])})),c(""),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("[handleKeyPress] createTodo failed: ",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(b.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.id,a=t.title,j((function(e){return e.map((function(e){return e.id!==n?e:Object(d.a)(Object(d.a)({},e),{},{title:a,isEdit:!1})}))})),e.next=5,N({id:n,title:a});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("[handleSave] patchTodo failed: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){(function(){var e=Object(b.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E();case 3:t=e.sent,j(t.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{isEdit:!1})}))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("fetchTodos error",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.jsxs)("div",{children:[Object(a.jsx)(T,{}),Object(a.jsx)(p,{inputValue:n,handleChange:function(e){c(e.target.value)},handleKeyPress:O,handleAddTodo:v}),Object(a.jsx)(C,{todos:u,handleDelete:function(e){return Object(b.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,j((function(t){return t.filter((function(t){return t.id!==e}))})),t.next=4,F(e);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log("[handleDelete] deleteTodo failed: ",t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))},handleSave:x,handleToggleIsDone:function(e){return Object(b.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=u.find((function(t){return t.id===e})),j((function(t){return t.map((function(t){return t.id!==e?t:Object(d.a)(Object(d.a)({},t),{},{isDone:!t.isDone})}))})),t.next=5,N({id:e,title:n.title,isDone:!n.isDone});case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("[handleToggleIsDone] patchTodo failed: ",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))},updateIsEdit:function(e){var t=e.id,n=e.isEdit;j((function(e){return e.map((function(e){return e.id!==t?e:Object(d.a)(Object(d.a)({},e),{},{isEdit:n})}))}))}}),Object(a.jsx)(w,{numOfTodos:h})]})},B=n(3);function L(){var e=Object(h.a)(["\n  background: #1877f2;\n  color: white;\n  min-width: 200px;\n  font-family: 'Noto Sans TC', sans-serif;\n  font-weight: bold;\n  padding: 6px 0;\n  margin: 2rem 0;\n\n  &:hover {\n    background: #385898;\n  }\n"]);return L=function(){return e},e}function P(){var e=Object(h.a)(["\n  text-align: center;\n  font-family: 'Noto Sans TC', sans-serif;\n  margin: 2rem 0;\n"]);return P=function(){return e},e}function A(){var e=Object(h.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return A=function(){return e},e}var R=v.a.div(A()),K=v.a.h1(P()),J=v.a.button(L()),V=function(){var e=Object(o.useContext)(O),t=e.status,n=e.handleFBLogin;return"connected"===t?Object(a.jsx)(B.a,{to:"/todos"}):Object(a.jsxs)(R,{children:[Object(a.jsx)(K,{children:"\u767b\u5165 Todo"}),Object(a.jsxs)(J,{className:"btn-reset",onClick:n,children:[" ","\u4f7f\u7528 Facebook \u767b\u5165"," "]})]})},_=function(){var e=Object(o.useState)(),t=Object(s.a)(e,2),n=t[0],a=t[1];Object(o.useEffect)((function(){window.fbAsyncInit=function(){window.FB.init({appId:"904503003705537",cookie:!0,xfbml:!0,version:"v9.0"}),console.log("[fbAsyncInit] after window.FB.init"),window.FB.getLoginStatus((function(e){var t;localStorage.setItem("facebookClientToken",null===e||void 0===e||null===(t=e.authResponse)||void 0===t?void 0:t.accessToken),a(e)})),window.FB.AppEvents.logPageView()},function(e,t,n){var a,o=e.getElementsByTagName(t)[0];e.getElementById(n)||((a=e.createElement(t)).id=n,a.src="https://connect.facebook.net/en_US/sdk.js",o.parentNode.insertBefore(a,o))}(document,"script","facebook-jssdk")}),[]);return[n,function(){window.FB.login((function(e){var t;a(e),localStorage.setItem("facebookClientToken",null===e||void 0===e||null===(t=e.authResponse)||void 0===t?void 0:t.accessToken)}),{scope:"public_profile,email"})},function(){window.FB.logout((function(e){var t;localStorage.setItem("facebookClientToken",null===e||void 0===e||null===(t=e.authResponse)||void 0===t?void 0:t.accessToken),a(e)}))}]},z=function(){var e=_(),t=Object(s.a)(e,3),n=t[0],o=t[1],c=t[2],r=Object(B.g)("/login");return n?"connected"===n.status||r?Object(a.jsx)(O.Provider,{value:{status:n.status,authResponse:n.authResponse,handleFBLogin:o,handleFBLogout:c},children:Object(a.jsx)("div",{className:"app",children:Object(a.jsxs)(B.d,{children:[Object(a.jsx)(B.b,{exact:!0,path:"/",children:"connected"===n.status?Object(a.jsx)(B.a,{to:"/todos"}):Object(a.jsx)(B.a,{to:"/login"})}),Object(a.jsx)(B.b,{path:"/login",children:Object(a.jsx)(V,{})}),Object(a.jsx)(B.b,{path:"/todos",children:Object(a.jsx)(I,{})})]})})}):Object(a.jsx)(B.a,{to:"/login"}):Object(a.jsx)(a.Fragment,{})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),o(e),c(e),r(e)}))},M=n(18);i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(M.a,{children:Object(a.jsx)(z,{})})}),document.getElementById("root")),H()}},[[45,1,2]]]);
//# sourceMappingURL=main.b3761295.chunk.js.map