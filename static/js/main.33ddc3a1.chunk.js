(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(26)},,,,,function(e,t,a){},function(e,t,a){var n={"./1.PNG":14,"./10.PNG":15,"./2.PNG":16,"./3.PNG":17,"./4.PNG":18,"./5.PNG":19,"./6.PNG":20,"./7.PNG":21,"./8.PNG":22,"./9.PNG":23};function o(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id=13},function(e,t,a){e.exports=a.p+"static/media/1.c678f745.PNG"},function(e,t,a){e.exports=a.p+"static/media/10.a3142928.PNG"},function(e,t,a){e.exports=a.p+"static/media/2.64ce4056.PNG"},function(e,t,a){e.exports=a.p+"static/media/3.02875109.PNG"},function(e,t,a){e.exports=a.p+"static/media/4.cc80aa15.PNG"},function(e,t,a){e.exports=a.p+"static/media/5.460729be.PNG"},function(e,t,a){e.exports=a.p+"static/media/6.6f54386b.PNG"},function(e,t,a){e.exports=a.p+"static/media/7.7276cad0.PNG"},function(e,t,a){e.exports=a.p+"static/media/8.9e814dfc.PNG"},function(e,t,a){e.exports=a.p+"static/media/9.73b8f78a.PNG"},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(2),i=a.n(r),c=(a(12),a(3)),s=a(4),l=a(6),m=a(5),d=function(e){var t=e.id,n=e.name;return o.a.createElement("div",{className:"bg-light-blue dib br3 pa4 ma2 grow bw2 shadow-5"},o.a.createElement("img",{src:a(13)("./".concat(t,".PNG")),alt:"robot"}),o.a.createElement("h2",null,n))},u=function(e){var t=e.demo;return o.a.createElement("div",null,t.map((function(e,t){return o.a.createElement(d,{key:t,id:e.id,name:e.name,email:e.email})})))},f=[{id:1,name:"Introdution"},{id:2,name:"Pokemon"},{id:3,name:"Bolg"},{id:4,name:"Gallery"},{id:5,name:"Tic Tac Toe"},{id:6,name:"Glozzom demo"},{id:7,name:"Protfolio"},{id:8,name:"The Unconventional Calculator"},{id:9,name:"Monster Killer"},{id:10,name:"Music Player"}],h=function(e){e.searchfield;var t=e.searchChange;return o.a.createElement("div",{className:"pa3"},o.a.createElement("input",{className:"pa3 ba b--red bg-pink",type:"search",placeholder:"search demos",onChange:t}))},p=(a(24),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={demo:f,searchfield:""},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state.demo.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return o.a.createElement("div",{className:"tc"},o.a.createElement("h1",null,"ClassDemo"),o.a.createElement(h,{searchChange:this.onSearchChange}),o.a.createElement(u,{demo:t}),";")}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(25);i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement("div",null,o.a.createElement(p,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.33ddc3a1.chunk.js.map