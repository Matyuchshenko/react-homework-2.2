(this.webpackJsonphomework_1=this.webpackJsonphomework_1||[]).push([[0],{11:function(e,t,n){e.exports={App:"App_App__3uQC2"}},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),o=n.n(r),c=n(10),i=n.n(c),u=(n(18),n(12)),s=n(3),l=n(4),m=n(7),h=n(6),d=n(11),b=n.n(d),f=n(5),j=n(21),p=n(2),v=n.n(p),C={name:"",number:""},O=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={INITIAL_STATE:C},e.handelChangeForm=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(f.a)({},a,r))},e.handelFormSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,r=n.number,o=e.props.onAdd;e.validateForm()&&(o({id:Object(j.a)(),name:a,number:r}),e.resetForm())},e.validateForm=function(){var t=e.state,n=t.name,a=t.number,r=e.props.onCheckUnique;return n&&a?r(n):(alert("Some field is empty"),!1)},e.resetForm=function(){return e.setState(C)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(a.jsxs)("form",{onSubmit:this.handelFormSubmit,className:v.a.form,children:["Name",Object(a.jsx)("input",{className:v.a.input,type:"text",name:"name",placeholder:"Enter name",value:t,onChange:this.handelChangeForm}),"Number",Object(a.jsx)("input",{className:v.a.input,type:"tel",name:"number",placeholder:"Enter phone number",value:n,onChange:this.handelChangeForm}),Object(a.jsx)("button",{className:v.a.button,type:"submit",children:"Add Contact"})]})}}]),n}(r.Component),g=n(9),x=function(e){var t=e.id,n=e.name,r=e.number,o=e.onRemove;return Object(a.jsxs)(a.Fragment,{children:[n,": ",r,Object(a.jsx)("button",{onClick:function(){return o(t)},children:"Delete"})]})},F=function(e){var t=e.contacts,n=e.onRemove;return 0===t.length?null:Object(a.jsx)("ul",{children:t.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)(x,Object(g.a)(Object(g.a)({},e),{},{onRemove:n}))},e.id)}))})},_=function(e){var t=e.filter,n=e.onChange;return Object(a.jsx)("input",{type:"text",name:"filter",value:t,onChange:function(e){var t=e.target;return n(t.value)},placeholder:"Enter name for Search"})},A=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.handleAddContact=function(t){return e.setState((function(e){var n=e.contacts;return{contacts:[].concat(Object(u.a)(n),[t])}}))},e.handleCheckUnique=function(t){var n=!!e.state.contacts.find((function(e){return e.name===t}));return n&&alert("Contact is already exist"),!n},e.handleRemoveContact=function(t){return e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.handelFilterChange=function(t){return e.setState({filter:t})},e.getVisibleContacts=function(){var t=e.state,n=t.contacts,a=t.filter;return n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.filter,t=this.getVisibleContacts();return Object(a.jsxs)("div",{className:b.a.App,children:[Object(a.jsx)("h1",{children:"Phone book"}),Object(a.jsx)(O,{onAdd:this.handleAddContact,onCheckUnique:this.handleCheckUnique}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(_,{filter:e,onChange:this.handelFilterChange}),Object(a.jsx)(F,{contacts:t,onRemove:this.handleRemoveContact})]})}}]),n}(r.Component),S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))};i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(A,{})}),document.getElementById("root")),S()},2:function(e,t,n){e.exports={form:"ContactForm_form__1Nhtf",input:"ContactForm_input__hzRU0",button:"ContactForm_button__2MWRT"}}},[[19,1,2]]]);
//# sourceMappingURL=main.2b35e801.chunk.js.map