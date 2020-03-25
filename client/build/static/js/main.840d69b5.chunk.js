(this["webpackJsonpgoogle-books-search"]=this["webpackJsonpgoogle-books-search"]||[]).push([[0],{30:function(e,t,a){e.exports=a(59)},35:function(e,t,a){},53:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(26),c=a.n(r),o=a(8),u=a(6),i=a(12),s=a(27),m=a(10);a(35);var E=function(e){return l.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")};var f=function(e){var t=e.children;return l.a.createElement("div",{style:{clear:"both",paddingTop:100,textAlign:"center"},className:"jumbotron"},t)},d=a(11),h=a.n(d),b=function(){return h.a.get("/api/books")},p=function(e){return h.a.get("/api/books/"+e)},v=function(e){return h.a.delete("/api/books/"+e)},g=function(e){return h.a.post("/api/books",e)};function k(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function N(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function j(e){var t=e.size,a=e.children;return l.a.createElement("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" ")},a)}a(53);function O(e){var t=e.children;return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},t))}function y(e){var t=e.children;return l.a.createElement("li",{className:"list-group-item"},t)}function S(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",Object.assign({className:"form-control"},e)))}function x(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",Object.assign({className:"form-control",rows:"20"},e)))}function z(e){return l.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}var B=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)({}),u=Object(m.a)(c,2),d=u[0],h=u[1];function p(){b().then((function(e){return r(e.data)})).catch((function(e){return console.log(e)}))}function B(e){var t=e.target,a=t.name,n=t.value;h(Object(s.a)({},d,Object(i.a)({},a,n)))}return Object(n.useEffect)((function(){p()}),[]),l.a.createElement(k,{fluid:!0},l.a.createElement(N,null,l.a.createElement(j,{size:"md-6"},l.a.createElement(f,null,l.a.createElement("h1",null,"What Books Should I Read?")),l.a.createElement("form",null,l.a.createElement(S,{onChange:B,name:"title",placeholder:"Title (required)"}),l.a.createElement(S,{onChange:B,name:"author",placeholder:"Author (required)"}),l.a.createElement(x,{onChange:B,name:"synopsis",placeholder:"Synopsis (Optional)"}),l.a.createElement(z,{disabled:!(d.author&&d.title),onClick:function(e){e.preventDefault(),d.title&&d.author&&g({title:d.title,author:d.author,synopsis:d.synopsis}).then((function(e){return p()})).catch((function(e){return console.log(e)}))}},"Submit Book"))),l.a.createElement(j,{size:"md-6 sm-12"},l.a.createElement(f,null,l.a.createElement("h1",null,"Books On My List")),a.length?l.a.createElement(O,null,a.map((function(e){return l.a.createElement(y,{key:e._id},l.a.createElement(o.b,{to:"/books/"+e._id},l.a.createElement("strong",null,e.title," by ",e.author)),l.a.createElement(E,{onClick:function(){return t=e._id,void v(t).then((function(e){return p()})).catch((function(e){return console.log(e)}));var t}}))}))):l.a.createElement("h3",null,"No Results to Display"))))};var w=function(e){var t=Object(n.useState)({}),a=Object(m.a)(t,2),r=a[0],c=a[1],i=Object(u.f)().id;return Object(n.useEffect)((function(){p(i).then((function(e){return c(e.data)})).catch((function(e){return console.log(e)}))})),l.a.createElement(k,{fluid:!0},l.a.createElement(N,null,l.a.createElement(j,{size:"md-12"},l.a.createElement(f,null,l.a.createElement("h1",null,r.title," by ",r.author)))),l.a.createElement(N,null,l.a.createElement(j,{size:"md-10 md-offset-1"},l.a.createElement("article",null,l.a.createElement("h1",null,"Synopsis"),l.a.createElement("p",null,r.synopsis)))),l.a.createElement(N,null,l.a.createElement(j,{size:"md-2"},l.a.createElement(o.b,{to:"/"},"\u2190 Back to Authors"))))};var C=function(){return l.a.createElement(k,{fluid:!0},l.a.createElement(N,null,l.a.createElement(j,{size:"md-12"},l.a.createElement(f,null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};var A=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-success"},l.a.createElement("div",{className:"navbar-brand"},"Google Books"),l.a.createElement("a",{className:"navbar-brand",href:"/"},"Saved"),l.a.createElement("a",{className:"navbar-brand",href:"/search"},"Search"))};var I=function(){return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(A,null),l.a.createElement(u.c,null,l.a.createElement(u.a,{exact:!0,path:["/","/books"]},l.a.createElement(B,null)),l.a.createElement(u.a,{exact:!0,path:"/books/:id"},l.a.createElement(w,null)),l.a.createElement(u.a,null,l.a.createElement(C,null)))))};c.a.render(l.a.createElement(I,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.840d69b5.chunk.js.map