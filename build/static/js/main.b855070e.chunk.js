(this["webpackJsonpgoit-react-hw-7-phonebook"]=this["webpackJsonpgoit-react-hw-7-phonebook"]||[]).push([[0],{23:function(t,e,n){"use strict";n.d(e,"d",(function(){return j})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return O})),n.d(e,"a",(function(){return d}));var c=n(16),r=n.n(c),a=n(22),u=n(18),o=n.n(u),s=n(5),i="https://connections-api.herokuapp.com",b=function(t){o.a.defaults.headers.common.Authorization="Bearer ".concat(t)},j=function(t){return function(){var e=Object(a.a)(r.a.mark((function e(n){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(s.k)()),e.prev=1,e.next=4,o.a.post("".concat(i,"/users/signup"),t);case 4:c=e.sent,n(Object(s.l)(c.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n(Object(s.j)(e.t0.massage));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},l=function(t){return function(){var e=Object(a.a)(r.a.mark((function e(n){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(s.e)()),e.prev=1,e.next=4,o.a.post("".concat(i,"/users/login"),t);case 4:c=e.sent,n(Object(s.f)(c.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n(Object(s.d)(e.t0.massage));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},O=function(){return function(){var t=Object(a.a)(r.a.mark((function t(e,n){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n().auth.token,e(Object(s.h)()),t.prev=2,o.a.defaults.headers.Authorization="Bearer ".concat(c),t.next=6,o.a.post("".concat(i,"/users/logout"));case 6:e(Object(s.i)()),window.location.reload(),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),e(Object(s.g)(t.t0.massage));case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e,n){return t.apply(this,arguments)}}()},d=function(){return function(){var t=Object(a.a)(r.a.mark((function t(e,n){var c,a,u;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=n(),a=c.auth.token){t.next=3;break}return t.abrupt("return");case 3:return b(a),e(Object(s.b)()),t.prev=5,t.next=8,o.a.get("".concat(i,"/users/current"));case 8:u=t.sent,e(Object(s.c)(u.data)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),e(Object(s.a)(t.t0.message));case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,n){return t.apply(this,arguments)}}()}},28:function(t,e,n){t.exports={ul:"NavBarStyles_ul__C0vul",span:"NavBarStyles_span__2XE2t",defAvatar:"NavBarStyles_defAvatar__1f_8u"}},5:function(t,e,n){"use strict";n.d(e,"k",(function(){return r})),n.d(e,"l",(function(){return a})),n.d(e,"j",(function(){return u})),n.d(e,"e",(function(){return o})),n.d(e,"f",(function(){return s})),n.d(e,"d",(function(){return i})),n.d(e,"h",(function(){return b})),n.d(e,"i",(function(){return j})),n.d(e,"g",(function(){return l})),n.d(e,"b",(function(){return O})),n.d(e,"c",(function(){return d})),n.d(e,"a",(function(){return f}));var c=n(2),r=Object(c.b)("contacts/registerRequest"),a=Object(c.b)("contacts/registerSuccess"),u=Object(c.b)("contacts/registerError"),o=Object(c.b)("contacts/loginRequest"),s=Object(c.b)("contacts/loginSuccess"),i=Object(c.b)("contacts/loginError"),b=Object(c.b)("contacts/logoutRequest"),j=Object(c.b)("contacts/logoutSuccess"),l=Object(c.b)("contacts/logoutError"),O=Object(c.b)("contacts/getCurrentUserRequest"),d=Object(c.b)("contacts/getCurrentUserSuccess"),f=Object(c.b)("contacts/getCurrentUserError")},78:function(t,e,n){},79:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(24),a=n.n(r),u=n(15),o=n(33),s=n(34),i=n(36),b=n(35),j=n(6),l=n(19),O=n(14),d=n(23),f=function(t){return t.auth.token},p=function(t){return t.auth.user.name},h=n(28),g=n.n(h),x=n(1),m={logoutOperation:d.c},v=Object(l.b)((function(t,e){return{IsAuthenticated:f(t),name:p(t)}}),m)((function(t){var e=t.IsAuthenticated,n=t.logoutOperation,c=t.name;return Object(x.jsx)("nav",{children:Object(x.jsx)("ul",{className:g.a.ul,children:e?Object(x.jsxs)(x.Fragment,{children:[" ",Object(x.jsx)("li",{children:Object(x.jsx)(O.b,{to:"/",children:"HomePage"})}),Object(x.jsx)("li",{children:Object(x.jsx)(O.b,{to:"/contacts",children:"ContactsPage"})}),Object(x.jsxs)("li",{children:[Object(x.jsx)("img",{src:"https://pngimg.com/uploads/face/face_PNG5645.png",alt:"face",className:g.a.defAvatar}),Object(x.jsxs)("span",{className:g.a.span,children:["Welcome, ",c]}),Object(x.jsx)("button",{type:"button",onClick:n,children:"Logout"})]})]}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("li",{children:Object(x.jsx)(O.b,{exact:!0,to:"/",children:"HomePage"})}),Object(x.jsx)("li",{children:Object(x.jsx)(O.b,{to:"/register",children:"RegisterPage"})}),Object(x.jsx)("li",{children:Object(x.jsx)(O.b,{to:"/login",children:"LoginPage"})})," "]})})})})),k=[{name:"HomePage",path:"/",component:Object(c.lazy)((function(){return n.e(6).then(n.bind(null,87))})),exact:!0,isPrivate:!1,isRestricted:!1},{name:"ContactsPage",path:"/contacts",component:Object(c.lazy)((function(){return n.e(3).then(n.bind(null,90))})),exact:!1,isPrivate:!0,isRestricted:!1},{name:"LoginPage",path:"/login",component:Object(c.lazy)((function(){return n.e(4).then(n.bind(null,88))})),exact:!0,isPrivate:!1,isRestricted:!0},{name:"RegisterPage",path:"/register",component:Object(c.lazy)((function(){return n.e(5).then(n.bind(null,89))})),exact:!0,isPrivate:!1,isRestricted:!0}],y=function(t){var e=t.exact,n=t.path,c=t.component;return t.isAuth?Object(x.jsx)(j.b,{path:n,exact:e,render:function(t){return Object(x.jsx)(c,Object(u.a)({},t))}},n):Object(x.jsx)(j.a,{to:"/login"})};var C,w,A,P,R,E=function(t){var e=t.exact,n=t.path,c=t.isAuth,r=t.component,a=t.isRestricted;return c&&a?Object(x.jsx)(j.a,{to:"/contacts"}):Object(x.jsx)(j.b,{path:n,exact:e,render:function(t){return Object(x.jsx)(r,Object(u.a)({},t))}},n)},S=function(t){Object(i.a)(n,t);var e=Object(b.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.getCurrentUser()}},{key:"render",value:function(){var t=this;return Object(x.jsxs)("div",{children:[Object(x.jsx)(v,{}),Object(x.jsx)(c.Suspense,{fallback:Object(x.jsx)("h2",{children:"...loading"}),children:Object(x.jsx)(j.d,{children:k.map((function(e){return e.isPrivate?Object(c.createElement)(y,Object(u.a)(Object(u.a)({},e),{},{isAuth:t.props.isAuth,key:e.path})):Object(c.createElement)(E,Object(u.a)(Object(u.a)({},e),{},{isAuth:t.props.isAuth,key:e.path}))}))})})]})}}]),n}(c.Component),_={getCurrentUser:d.a},N=Object(l.b)((function(t,e){return{isAuth:f(t)}}),_)(Object(j.g)(S)),q=n(27),z=n(2),B=n(3),U=n(7),F=n(9),H=Object(z.c)(!1,(C={},Object(B.a)(C,F.f,(function(){return!0})),Object(B.a)(C,F.g,(function(){return!1})),Object(B.a)(C,F.e,(function(){return!1})),Object(B.a)(C,F.b,(function(){return!0})),Object(B.a)(C,F.c,(function(){return!1})),Object(B.a)(C,F.a,(function(){return!1})),Object(B.a)(C,F.i,(function(){return!0})),Object(B.a)(C,F.j,(function(){return!1})),Object(B.a)(C,F.h,(function(){return!1})),C)),I=Object(z.c)([],(w={},Object(B.a)(w,F.g,(function(t,e){return e.payload})),Object(B.a)(w,F.c,(function(t,e){return[e.payload].concat(Object(q.a)(t))})),Object(B.a)(w,F.j,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),w)),L=Object(z.c)("",Object(B.a)({},F.d,(function(t,e){return e.payload}))),J=Object(U.b)({items:I,filter:L,loading:H}),D=n(5),G={name:null,email:null},M=Object(z.c)(G,(A={},Object(B.a)(A,D.l,(function(t,e){return e.payload.user})),Object(B.a)(A,D.f,(function(t,e){return e.payload.user})),Object(B.a)(A,D.i,(function(){return G})),Object(B.a)(A,D.c,(function(t,e){return e.payload})),A)),W=Object(z.c)(null,(P={},Object(B.a)(P,D.l,(function(t,e){return e.payload.token})),Object(B.a)(P,D.f,(function(t,e){return e.payload.token})),Object(B.a)(P,D.i,(function(){return null})),P)),X=Object(z.c)(null,(R={},Object(B.a)(R,D.j,(function(t,e){return e.payload})),Object(B.a)(R,D.d,(function(t,e){return e.payload})),Object(B.a)(R,D.g,(function(){return null})),Object(B.a)(R,D.a,(function(t,e){return e.payload})),R)),K=Object(U.b)({user:M,token:W,error:X}),Q=n(17),T=n(45),V={key:"auth",storage:n.n(T).a,whitelist:["token"]},Y=Object(z.a)({middleware:Object(q.a)(Object(z.d)({serializableCheck:{ignoredActions:[Q.d,Q.c,Q.e,Q.f,Q.b,Q.a]}})),reducer:{auth:Object(Q.g)(V,K),contacts:J}}),Z=Object(Q.h)(Y),$=n(46);n(78);a.a.render(Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(l.a,{store:Y,children:Object(x.jsx)($.a,{persistor:Z,children:Object(x.jsx)(O.a,{children:Object(x.jsx)(N,{})})})})}),document.getElementById("root"))},9:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return u})),n.d(e,"f",(function(){return o})),n.d(e,"g",(function(){return s})),n.d(e,"e",(function(){return i})),n.d(e,"d",(function(){return b})),n.d(e,"i",(function(){return j})),n.d(e,"j",(function(){return l})),n.d(e,"h",(function(){return O}));var c=n(2),r=Object(c.b)("contacts/addNewContactsRequest"),a=Object(c.b)("contacts/addNewContactsSuccess"),u=Object(c.b)("contacts/addNewContactsError"),o=Object(c.b)("contacts/getAllContactsRequest"),s=Object(c.b)("contacts/getAllContactsSuccess"),i=Object(c.b)("contacts/getAllContactsError"),b=Object(c.b)("contacts/filterChange"),j=Object(c.b)("contacts/removeContactsRequest"),l=Object(c.b)("contacts/removeContactsSuccess"),O=Object(c.b)("contacts/removeContactsError")}},[[79,1,2]]]);
//# sourceMappingURL=main.b855070e.chunk.js.map