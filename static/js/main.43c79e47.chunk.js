(this["webpackJsonphomework-01"]=this["webpackJsonphomework-01"]||[]).push([[0],[,function(a){a.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","stats":{"followers":5603,"views":4827,"likes":1308}}')},,,function(a){a.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(a,e,t){a.exports=t(15)},,,,,function(a,e,t){},function(a,e,t){},function(a,e,t){},function(a,e,t){},function(a,e,t){},function(a,e,t){"use strict";t.r(e);var n=t(0),r=t.n(n),l=t(3),c=t.n(l),s=(t(10),t(17)),o=(t(11),function(a){var e=a.avatar,t=a.name,n=a.tag,l=a.location;return r.a.createElement("div",{className:"description"},r.a.createElement("img",{src:e,alt:"user avatar",className:"avatar"}),r.a.createElement("p",{className:"name"},t),r.a.createElement("p",{className:"tag"},"@",n),r.a.createElement("p",{className:"location"},l))});t(12);function i(){for(var a="#",e=0;e<6;e++)a+="0123456789ABCDEF"[Math.floor(16*Math.random())];return a}var m=function(a){var e=a.label,t=a.quantity,n=a.colored,l="item";return n&&(l+=" item--colored"),r.a.createElement("li",{className:l,style:{backgroundColor:n?i():"inherit"}},r.a.createElement("span",{className:"label"},e),r.a.createElement("span",{className:"quantity"},t))},u=function(a){var e=a.avatar,t=a.name,n=a.tag,l=a.location,c=a.stats;return r.a.createElement("div",{className:"profile"},r.a.createElement(o,{avatar:e,name:t,tag:n,location:l}),r.a.createElement("ul",{className:"stats"},Object.keys(c).map((function(a){return r.a.createElement(m,{key:Object(s.a)(),label:a,quantity:c[a]})}))))};u.defaultProps={avatar:"https://dummyimage.com/600x400/000/fff.jpg&text=Avatar",stats:{}};var p=u,d=(t(13),function(a){var e=a.title,t=a.stats;return r.a.createElement("div",{className:"statistics"},e&&r.a.createElement("h2",{class:"title"},e),r.a.createElement("ul",{className:"stat-list"},t.map((function(a){return r.a.createElement(m,{key:a.id,colored:!0,label:a.label,quantity:"".concat(a.percentage,"%")})}))))});d.defaultProps={stats:[]};var f=d,v=t(1),E=t(4);t(14);var g=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{name:v.name,tag:v.tag,location:v.location,avatar:v.avatar,stats:v.stats}),r.a.createElement(f,{title:"Upload stats",stats:E}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.43c79e47.chunk.js.map