(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(3),r=a.n(s),o=a(1);a(9);var l=function(e){var t=e.time,a=e.steps,s=(e.onTick,e.autostart),r=Object(n.useState)(t),l=Object(o.a)(r,2),u=l[0],i=l[1],m=Object(n.useState)(),b=Object(o.a)(m,2),p=b[0],j=b[1],O=Object(n.useState)(),f=Object(o.a)(O,2),E=f[0],d=f[1],v=Object(n.useState)(!1),S=Object(o.a)(v,2),h=S[0],k=S[1],N=Object(n.useState)(!1),g=Object(o.a)(N,2),y=g[0],B=g[1],M=Object(n.useState)(1e3*a),T=Object(o.a)(M,2),w=T[0],x=(T[1],Object(n.useState)(s)),C=Object(o.a)(x,2),J=C[0];function F(){k(!0),B(!1)}C[1],!0===h&&u>=1e3&&!1===y?setTimeout((function(){i(u-w)}),w):!0===J&&!1===y&&(F(),i(t));var I=100*u/t;return Object(n.useEffect)((function(){j(Math.floor(u/6e4)),d(Math.floor(u%6e4/1e3))})),c.a.createElement("div",{className:"timer"},c.a.createElement("span",{className:"titel"},p,":",E),c.a.createElement("div",{className:"btn"},c.a.createElement("button",{className:"startBtn",onClick:F},"Start"),c.a.createElement("button",{className:"pauseBtn",onClick:function(){B(!0),k(!1)}},"Pause")),c.a.createElement("div",{className:"progressBox"},c.a.createElement("div",{style:{width:I+"%"},className:"progressLine"},Math.floor(I),"%")))};var u=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(l,{time:75e3,steps:1,autostart:!0,onTick:!0}),c.a.createElement(l,{time:12e4,steps:2,autostart:!1,onTick:!0}))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u,null)),document.getElementById("root"))},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.d826de48.chunk.js.map