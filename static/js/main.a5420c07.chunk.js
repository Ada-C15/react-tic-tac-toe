(this["webpackJsonpreact-tic-tac-toe"]=this["webpackJsonpreact-tic-tac-toe"]||[]).push([[0],[,,,,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var c=t(0),a=t(1),r=t.n(a),o=t(6),i=t.n(o),l=(t(12),t(2)),u=(t(13),t(5)),s=(t(14),t(15),function(e){return Object(c.jsx)("button",{className:"square",onClick:function(n){return e.onClickCallback(e.id,n)},children:e.value})}),f=function(e){var n=e.squares,t=e.onClickCallback,a=function(e,n){var t,c=[],a=Object(u.a)(e);try{for(a.s();!(t=a.n()).done;){var r,o=t.value,i=Object(u.a)(o);try{for(i.s();!(r=i.n()).done;){var l=r.value;c.push(l)}}catch(s){i.e(s)}finally{i.f()}}}catch(s){a.e(s)}finally{a.f()}return c}(n);console.log("1-d square list",a);var r=a.map((function(e){return Object(c.jsx)(s,{id:e.id,value:e.value,onClickCallback:t})}));return Object(c.jsx)("div",{className:"grid",children:r})},h="x",v="o",j="",d=function(e){for(var n=j,t=[],c=[],a=0;a<e.length;a++){a in t||(t[a]={x:0,o:0});for(var r=0;r<e[a].length;r++){var o=e[a][r];o!==j&&(O(t[a],o),r in c||(c[r]={x:0,o:0}),O(c[r],o))}}return(n=b(t))===j&&(n=b(c)),n===j&&(n=x(e,!1)),n===j&&(n=x(e,!0)),n},b=function(e){var n=j;for(var t in e)e[t].x===e.length?n=h:e[t].o===e.length&&(n=v);return console.log("getWinningRowCol = ",n),n},x=function(e){for(var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t="",c={x:0,o:0},a=e.length,r=0;r<a;r++){var o=null;o=!0===n?e[r][a-r-1]:e[r][r],O(c,o)}return c.x===a?t=h:c.o===a&&(t=v),t},O=function(e,n){n.value===h?e.x+=1:n.value===v&&(e.o+=1)},g=function(e){return d(e)},k="x",m=function(){for(var e=[],n=0,t=0;t<3;t+=1){e.push([]);for(var c=0;c<3;c+=1)e[t].push({id:n,value:""}),n+=1}return e},p=function(){var e=Object(a.useState)(m()),n=Object(l.a)(e,2),t=n[0],r=n[1],o=Object(a.useState)(k),i=Object(l.a)(o,2),u=i[0],s=i[1],h=Object(a.useState)(""),v=Object(l.a)(h,2),j=v[0],d=v[1],b=Object(a.useState)(""),x=Object(l.a)(b,2),O=x[0],p=x[1],C=function(){return g(t)};return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("header",{className:"App-header",children:[Object(c.jsx)("h1",{children:"React Tic Tac Toe"}),Object(c.jsx)("h2",{children:j}),Object(c.jsx)("button",{onClick:function(){r(m());s("x"),p(""),d("Current player ".concat("x"))},children:"Reset Game"})]}),Object(c.jsx)("main",{children:Object(c.jsx)(f,{squares:t,onClickCallback:function(e,n){if(""===O){var c=Math.floor(e/t.length),a=e%t.length,r=t[c][a];if(r.value!==k&&"o"!==r.value){t[c][a]={id:e,value:u};var o="";s(o=u===k?"o":k),d("Current Player ".concat(o));var i=C();i!==k&&"o"!==i||(p(i),d("Winner is ".concat(i)))}}}})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[16,1,2]]]);
//# sourceMappingURL=main.a5420c07.chunk.js.map