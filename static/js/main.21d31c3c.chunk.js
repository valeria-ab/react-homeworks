(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports={button:"Affairs_button__3YaQm",affair:"Affairs_affair__179X1",item:"Affairs_item__1BYAz",high:"Affairs_high__3bfAG",middle:"Affairs_middle__1oKMT",low:"Affairs_low__1RrbR"}},function(e,t,n){e.exports={link:"Header_link__1oUIl",active:"Header_active__1dmn0",block:"Header_block__3dX0N",header:"Header_header__1amup"}},function(e,t,n){e.exports={message:"Message_message__8WR15",contentMessage:"Message_contentMessage__UWwEn",avatar:"Message_avatar__3FT3j",angle:"Message_angle__1T-oN",name:"Message_name__Tzmp0",text:"Message_text__2fXBO",time:"Message_time__HOFTG"}},,,function(e,t,n){e.exports={hw3:"Greeting_hw3__16-SO",error:"Greeting_error__1uvQ8",normalInput:"Greeting_normalInput__3P9v8",errorInput:"Greeting_errorInput__2Khas",button:"Greeting_button__24QRF",input:"Greeting_input__2kXLu"}},,,,,,,function(e,t,n){e.exports={default:"SuperButton_default__-BXUG",red:"SuperButton_red__1kaz_",button:"SuperButton_button__cV79v",blink:"SuperButton_blink__3CGSw"}},function(e,t,n){e.exports={input:"SuperInputText_input__1P_Mf",superInput:"SuperInputText_superInput__3XH9u",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S"}},,,function(e,t,n){e.exports={select:"SuperSelect_select__3fEsa",option:"SuperSelect_option__33I2a"}},function(e,t,n){e.exports={radio:"SuperRadio_radio__3l3uR",label:"SuperRadio_label__2lqMv"}},function(e,t,n){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",testSpanError:"HW4_testSpanError___Mj8X"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__Imn1x",spanClassName:"SuperCheckbox_spanClassName__1K9ch"}},,,,function(e,t,n){e.exports={App:"App_App__1Sc4o"}},,function(e,t,n){e.exports={item:"HW8_item__1_bpL"}},function(e,t,n){e.exports={span:"SuperEditableSpan_span__TqnG3"}},,,,,,function(e,t,n){},,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(20),s=n.n(r),i=(n(43),n(34)),o=n.n(i),j=n(15),l=n(12),u=n.n(l),b=n(2),d=n(0);var O=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:"404"}),Object(d.jsx)("div",{children:"Page not found!"}),Object(d.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},h=n(5),x=n(8),m=n(23),p=n.n(m),_=["red","className"],f=function(e){var t=e.red,n=e.className,a=Object(x.a)(e,_),c="".concat(p.a.button," ").concat(t?p.a.red:p.a.default," ").concat(n);return Object(d.jsx)("button",Object(h.a)({className:c},a))},v=n(19),g={isLoading:!1},k=function(e){return{type:"SET-LOADING",value:e}};var C=function(){var e=Object(v.b)(),t=Object(v.c)((function(e){return e.loading.isLoading}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 10",t?Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:"https://inkazan.ru/images/commons/ajax_loader.gif",height:"50px"})}):Object(d.jsx)("div",{children:Object(d.jsx)(f,{onClick:function(){e(k(!0)),setTimeout((function(){e(k(!1))}),2e3),console.log("loading...")},children:"set loading..."})})]})},N=n(4),S=n(27),y=n.n(S),w=["options","className","onChange","onChangeOption"],I=function(e){var t=e.options,n=e.className,a=e.onChange,c=e.onChangeOption,r=Object(x.a)(e,w),s=t?t.map((function(e,t){return Object(d.jsx)("option",{className:y.a.option,value:e,children:e},e+"-"+t)})):[],i=y.a.select+(n?" "+n:"");return Object(d.jsx)("select",Object(h.a)(Object(h.a)({className:i,onChange:function(e){a&&a(e),c&&c(e.currentTarget.value)}},r),{},{children:s}))},T=n(28),A=n.n(T),E=["type","name","options","value","onChange","onChangeOption"],M=function(e){e.type;var t=e.name,n=e.options,a=e.value,c=e.onChange,r=e.onChangeOption,s=Object(x.a)(e,E),i=function(e){c&&c(e),r&&r(e.currentTarget.value)},o=n?n.map((function(e,n){return Object(d.jsxs)("label",{className:A.a.label,children:[Object(d.jsx)("input",Object(h.a)({className:A.a.radio,type:"radio",name:t,checked:e===a,value:e,onChange:i},s)),e]},t+"-"+n)})):[];return Object(d.jsx)(d.Fragment,{children:o})},F=["x","y","z"];var G=function(){var e=Object(a.useState)(F[1]),t=Object(N.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 7",Object(d.jsx)("div",{children:Object(d.jsx)(I,{options:F,value:n,onChangeOption:c})}),Object(d.jsx)("div",{children:Object(d.jsx)(M,{name:"radio",options:F,value:n,onChangeOption:c})})]})},B=n(22),H=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}],L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"sort":var n=Object(B.a)(e).sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}));return"up"===t.payload?n:n.reverse();case"check":return e.filter((function(e){return e.age>=t.payload}));default:return e}},P=n(36),W=n.n(P),R=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var U=function(){var e=Object(a.useState)(R),t=Object(N.a)(e,2),n=t[0],c=t[1],r=n.map((function(e){return Object(d.jsxs)("div",{className:W.a.item,children:[Object(d.jsx)("span",{children:e.name}),e.age]},e._id)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h4",{children:"homeworks 8"}),r,Object(d.jsx)(f,{onClick:function(){return c(L(R,{type:"sort",payload:"up"}))},children:"sort up"}),Object(d.jsx)(f,{onClick:function(){return c(L(R,{type:"sort",payload:"down"}))},children:"sort down"}),Object(d.jsx)(f,{onClick:function(){return c(L(R,{type:"check",payload:18}))},children:"check 18"})]})};var X=function(){var e=Object(a.useState)(0),t=Object(N.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(),s=Object(N.a)(r,2),i=s[0],o=s[1],j=Object(a.useState)(!1),l=Object(N.a)(j,2),u=l[0],b=l[1],O=function(){clearInterval(n)},h=(null===i||void 0===i?void 0:i.toLocaleTimeString())||Object(d.jsx)("br",{}),x=(null===i||void 0===i?void 0:i.toLocaleDateString())||Object(d.jsx)("br",{});return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{onMouseEnter:function(){b(!0)},onMouseLeave:function(){b(!1)},children:h}),u?Object(d.jsx)("div",{children:x}):Object(d.jsx)("br",{}),Object(d.jsx)(f,{onClick:function(){O();var e=+setInterval((function(){o(new Date)}),1e3);c(e)},children:"start"}),Object(d.jsx)(f,{onClick:O,children:"stop"})]})};var D=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h4",{children:"homeworks 9"}),Object(d.jsx)(X,{})]})};var J=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(G,{}),Object(d.jsx)(U,{}),Object(d.jsx)(D,{}),Object(d.jsx)(C,{})]})},K=n(13),z=n.n(K);var q=function(e){return Object(d.jsxs)("div",{className:z.a.message,children:[Object(d.jsx)("img",{className:z.a.avatar,src:e.avatar,alt:"avatar"}),Object(d.jsx)("div",{className:z.a.angle}),Object(d.jsxs)("div",{className:z.a.contentMessage,children:[Object(d.jsx)("div",{className:z.a.name,children:e.name}),Object(d.jsx)("div",{className:z.a.text,children:e.message}),Object(d.jsx)("div",{className:z.a.time,children:e.time})]})]})},Q="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",Y="Some Name",Z="some text",V="22:00";var $=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h3",{children:"homeworks 1"}),Object(d.jsx)(q,{avatar:Q,name:Y,message:Z,time:V})]})},ee=n(11),te=n.n(ee);var ne=function(e){var t=te.a.item+" "+te.a[e.affair.priority];return Object(d.jsxs)("div",{className:te.a.affair,children:[Object(d.jsx)("div",{className:te.a.item,children:e.affair.name}),Object(d.jsxs)("div",{className:t,children:["[",e.affair.priority,"]"]}),Object(d.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},className:te.a.button,children:"X"})]})};var ae=function(e){var t=e.data.map((function(t){return Object(d.jsx)(ne,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{children:[t,Object(d.jsx)("button",{className:te.a.button,onClick:function(){e.setFilter("all")},children:"All"}),Object(d.jsx)("button",{className:te.a.button,onClick:function(){e.setFilter("high")},children:"High"}),Object(d.jsx)("button",{className:te.a.button,onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(d.jsx)("button",{className:te.a.button,onClick:function(){e.setFilter("low")},children:"Low"})]})},ce=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var re=function(){var e=Object(a.useState)(ce),t=Object(N.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("all"),s=Object(N.a)(r,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h3",{children:"homework 2 --  \u0432\u0441\u0435 \u043a\u043d\u043e\u043f\u043a\u0438 \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0435"}),Object(d.jsx)(ae,{data:j,setFilter:o,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return t!==e._id}))}(n,e))}})]})},se=n(16),ie=n.n(se),oe=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,c=e.error,r=e.totalUsers,s=e.onEnter,i=c?ie.a.errorInput:ie.a.normalInput;return Object(d.jsxs)("div",{className:ie.a.hw3,children:[Object(d.jsx)("input",{value:t,onChange:n,className:i,onKeyPress:s}),Object(d.jsx)("button",{onClick:a,className:ie.a.button,children:"add"}),Object(d.jsx)("span",{children:r}),Object(d.jsx)("div",{className:ie.a.error,children:c})]})},je=function(e){var t=e.users,n=e.addUserCallback,c=Object(a.useState)(""),r=Object(N.a)(c,2),s=r[0],i=r[1],o=Object(a.useState)(""),j=Object(N.a)(o,2),l=j[0],u=j[1],b=function(){s.length>0?(n(s),alert("Hello ".concat(s," ! ")),i("")):u("Name is required!")},O=t.length;return Object(d.jsx)(oe,{name:s,setNameCallback:function(e){u(""),i(e.currentTarget.value.trim())},addUser:b,error:l,totalUsers:O,onEnter:function(e){13===e.charCode&&s&&b()}})},le=n(53);var ue=function(){var e=Object(a.useState)([]),t=Object(N.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h3",{children:"homeworks 3"}),Object(d.jsx)(je,{users:n,addUserCallback:function(e){var t={_id:Object(le.a)(),name:e};c([].concat(Object(B.a)(n),[t]))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},be=n(24),de=n.n(be),Oe=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],he=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,c=e.onEnter,r=e.error,s=e.className,i=e.spanClassName,o=Object(x.a)(e,Oe),j="".concat(de.a.error," ").concat(i||""),l="".concat(r?de.a.errorInput:de.a.superInput," ").concat(s);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(h.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),c&&"Enter"===e.key&&c()},className:l},o)),r&&Object(d.jsx)("span",{className:j,children:r})]})},xe=n(29),me=n.n(xe),pe=n(30),_e=n.n(pe),fe=["type","onChange","onChangeChecked","className","spanClassName","children"],ve=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,c=(e.spanClassName,e.children),r=Object(x.a)(e,fe),s="".concat(_e.a.checkbox," ").concat(a||"");return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(h.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},r)),c&&Object(d.jsx)("span",{className:_e.a.spanClassName,children:c})]})};var ge=function(){var e=Object(a.useState)(""),t=Object(N.a)(e,2),n=t[0],c=t[1],r=n?"":"error",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(N.a)(i,2),j=o[0],l=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"homeworks 4"}),Object(d.jsxs)("div",{className:me.a.column,children:[Object(d.jsx)(he,{value:n,onChangeText:c,onEnter:s,error:r}),Object(d.jsx)(he,{className:me.a.blue}),Object(d.jsx)(f,{children:"default"}),Object(d.jsx)(f,{red:!0,onClick:s,children:"delete "}),Object(d.jsx)(f,{disabled:!0,children:"disabled"}),Object(d.jsx)(ve,{checked:j,onChangeChecked:l,children:"some text "}),Object(d.jsx)(ve,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},ke=n(37),Ce=n.n(ke),Ne=["autoFocus","onBlur","onEnter","spanProps"],Se=["children","onDoubleClick","className"],ye=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,r=Object(x.a)(e,Ne),s=Object(a.useState)(!1),i=Object(N.a)(s,2),o=i[0],j=i[1],l=c||{},u=l.children,b=l.onDoubleClick,O=l.className,m=Object(x.a)(l,Se),p="".concat(Ce.a.span," ").concat(O);return Object(d.jsx)(d.Fragment,{children:o?Object(d.jsx)(he,Object(h.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},r)):Object(d.jsxs)("span",Object(h.a)(Object(h.a)({onDoubleClick:function(e){j(!0),b&&b(e)},className:p},m),{},{children:["\u270f\ufe0f ",u||r.value]}))})};function we(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function Ie(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}we("test",{x:"A",y:1});Ie("test",{x:"",y:0});var Te=function(){var e=Object(a.useState)(""),t=Object(N.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 6",Object(d.jsx)("div",{children:Object(d.jsx)(ye,{value:n,onChangeText:c,spanProps:{children:n?void 0:"enter text..."}})}),Object(d.jsx)(f,{onClick:function(){we("editable-span-value",n)},children:"save"}),Object(d.jsx)(f,{onClick:function(){c(Ie("editable-span-value",""))},children:"restore"}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var Ae=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)($,{}),Object(d.jsx)(re,{}),Object(d.jsx)(ue,{}),Object(d.jsx)(ge,{}),Object(d.jsx)(Te,{})]})};var Ee=function(){return Object(d.jsx)("div",{})},Me="/pre-junior",Fe="/junior",Ge="/junior-plus";var Be=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(b.d,{children:[Object(d.jsx)(b.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(b.a,{to:Me})}}),Object(d.jsx)(b.b,{path:Me,render:function(){return Object(d.jsx)(Ae,{})}}),Object(d.jsx)(b.b,{path:Fe,render:function(){return Object(d.jsx)(J,{})}}),Object(d.jsx)(b.b,{path:Ge,render:function(){return Object(d.jsx)(Ee,{})}}),Object(d.jsx)(b.b,{render:function(){return Object(d.jsx)(O,{})}})]})})};var He=function(){return Object(d.jsxs)("div",{className:u.a.header,children:[Object(d.jsx)(j.b,{to:Me,className:u.a.link,activeClassName:u.a.active,children:"pre-junior"}),Object(d.jsx)(j.b,{to:Fe,className:u.a.link,activeClassName:u.a.active,children:"junior"}),Object(d.jsx)(j.b,{to:Ge,className:u.a.link,activeClassName:u.a.active,children:"junior+"}),Object(d.jsx)("div",{className:u.a.block})]})};var Le=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)(He,{}),Object(d.jsx)(Be,{})]})})};var Pe=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"react homeworks:"})}),Object(d.jsx)(Le,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var We=n(32),Re=Object(We.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;return"SET-LOADING"===t.type?Object(h.a)(Object(h.a)({},e),{},{isLoading:t.value}):e}}),Ue=Object(We.b)(Re),Xe=Ue;window.store=Ue,s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(v.a,{store:Xe,children:Object(d.jsx)(Pe,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[51,1,2]]]);
//# sourceMappingURL=main.21d31c3c.chunk.js.map