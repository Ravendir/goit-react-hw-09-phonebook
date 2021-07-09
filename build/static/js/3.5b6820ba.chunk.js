(this["webpackJsonpgoit-react-hw-7-phonebook"]=this["webpackJsonpgoit-react-hw-7-phonebook"]||[]).push([[3],{80:function(t,e,n){t.exports={homePageHeading:"PagesStyle_homePageHeading__gGtZr",contactPageHeading:"PagesStyle_contactPageHeading__23VV4"}},83:function(t,e,n){t.exports={label:"ContactFormStyles_label__3TjRk",form:"ContactFormStyles_form__2M55U",formInput:"ContactFormStyles_formInput__2gJZg",formButton:"ContactFormStyles_formButton__1_Q1h"}},84:function(t,e,n){t.exports={list:"ContactListStyles_list__2_EqX",contacts:"ContactListStyles_contacts__2GLu_"}},85:function(t,e,n){t.exports={filterContainer:"FilterStyle_filterContainer__1UF0k"}},90:function(t,e,n){"use strict";n.r(e);var a,r=n(0),c=n(3),o=n(33),s=n(34),i=n(36),u=n(35),l=new Uint8Array(16);function f(){if(!a&&!(a="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(l)}var d=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var p=function(t){return"string"===typeof t&&d.test(t)},m=[],b=0;b<256;++b)m.push((b+256).toString(16).substr(1));var h=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(m[t[e+0]]+m[t[e+1]]+m[t[e+2]]+m[t[e+3]]+"-"+m[t[e+4]]+m[t[e+5]]+"-"+m[t[e+6]]+m[t[e+7]]+"-"+m[t[e+8]]+m[t[e+9]]+"-"+m[t[e+10]]+m[t[e+11]]+m[t[e+12]]+m[t[e+13]]+m[t[e+14]]+m[t[e+15]]).toLowerCase();if(!p(n))throw TypeError("Stringified UUID is invalid");return n};var j=function(t,e,n){var a=(t=t||{}).random||(t.rng||f)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,e){n=n||0;for(var r=0;r<16;++r)e[n+r]=a[r];return e}return h(a)},g=n(83),v=n.n(g),O=n(19),y=n(26),x=function(t){return t.contacts.loading},C=function(t){return t.contacts.filter},_=function(t){return t.contacts.items},w=Object(y.a)([_,C],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase().trim())}))})),k=n(16),S=n.n(k),N=n(22),A=n(18),P=n.n(A),z=n(9),B="https://connections-api.herokuapp.com",F=n(1),V=function(t){Object(i.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleSubmit=function(e,n){if(t.props.items.some((function(t){return t.name===e})))alert(e+" is already in contacts ");else{var a={id:j(),name:e,number:n};t.props.addNewContacts(a)}},t.handleChange=function(e){t.setState(Object(c.a)({},e.target.name,e.target.value))},t.onSubmit=function(e){e.preventDefault(),t.handleSubmit(t.state.name,t.state.number),t.setState({name:"",number:""})},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(F.jsxs)("form",{className:v.a.form,onSubmit:this.onSubmit,children:[Object(F.jsxs)("label",{className:v.a.label,children:["Name",Object(F.jsx)("input",{className:v.a.formInput,type:"text",name:"name",onChange:this.handleChange,value:this.state.name,placeholder:"Enter your name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(F.jsxs)("label",{className:v.a.label,children:["Number",Object(F.jsx)("input",{className:v.a.formInput,type:"tel",name:"number",onChange:this.handleChange,value:this.state.number,placeholder:"123-45-67",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(F.jsx)("button",{type:"submit",className:v.a.formButton,children:"Add contact"})]})}}]),n}(r.Component),H={addNewContacts:function(t){return function(){var e=Object(N.a)(S.a.mark((function e(n,a){var r,c,o;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a().auth.token,n(Object(z.b)()),e.prev=2,P.a.defaults.headers.Authorization="Bearer ".concat(r),e.next=6,P.a.post("".concat(B,"/contacts"),t);case 6:c=e.sent,o=c.data,n(Object(z.c)(o)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),n(Object(z.a)(e.t0));case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t,n){return e.apply(this,arguments)}}()},getAllContacts:function(){return function(){var t=Object(N.a)(S.a.mark((function t(e,n){var a,r,c;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n().auth.token,e(Object(z.f)()),t.prev=2,P.a.defaults.headers.Authorization="Bearer ".concat(a),t.next=6,P.a.get("".concat(B,"/contacts"));case 6:r=t.sent,c=r.data,e(Object(z.g)(c)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),e(Object(z.e)(t.t0));case 14:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e,n){return t.apply(this,arguments)}}()}},I=Object(O.b)((function(t){return{items:_(t),loading:x(t)}}),H)(V),L=(n(84),{handleDelete:function(t){return function(){var e=Object(N.a)(S.a.mark((function e(n,a){var r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a().auth.token,n(Object(z.i)()),e.prev=2,P.a.defaults.headers.Authorization="Bearer ".concat(r),e.next=6,P.a.delete("".concat(B,"/contacts/").concat(t));case 6:n(Object(z.j)(t)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),n(Object(z.h)(e.t0));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,n){return e.apply(this,arguments)}}()}}),R=Object(O.b)((function(t){return{items:w(t)}}),L)((function(t){var e=t.items,n=t.handleDelete;return Object(F.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(F.jsxs)("li",{children:[Object(F.jsxs)("p",{children:[a,": ",r]}),Object(F.jsx)("button",{type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})})),D=n(85),U=n.n(D),Z={handleChange:z.d},E=Object(O.b)((function(t){return{filter:C(t)}}),Z)((function(t){var e=t.filter,n=t.handleChange;return Object(F.jsxs)("div",{className:U.a.filterContainer,children:[Object(F.jsx)("h2",{children:"Find contacts by name"}),Object(F.jsx)("input",{id:"filter",name:"filter",type:"text",className:U.a.filterInput,onChange:function(t){n(t.target.value)},value:e})]})})),J=n(80),q=n.n(J);e.default=function(){return Object(F.jsxs)("div",{children:[Object(F.jsx)("h1",{className:q.a.contactPageHeading,children:"Phonebook"}),Object(F.jsx)(I,{}),Object(F.jsx)("h2",{className:q.a.contactPageHeading,children:"Contacts"}),Object(F.jsx)(E,{}),Object(F.jsx)(R,{})]})}}}]);
//# sourceMappingURL=3.5b6820ba.chunk.js.map