(this["webpackJsonpcondor-server-list"]=this["webpackJsonpcondor-server-list"]||[]).push([[0],{34:function(e,t,r){e.exports=r(75)},39:function(e,t,r){},40:function(e,t,r){},75:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(14),o=r.n(c),s=(r(39),r(40),r(7)),u=r(13),l=r(20),i=r.n(l);function d(e,t){return i()("tr[id^=table_6_row]",e).map((function(e,r){return r.children[t].textContent})).toArray()}var p=Object(u.b)({name:"condorServerList",initialState:{loading:!1,listData:[],requestLastTimeSpent:null,requestLastTimestamp:null,errorMessage:null,fetchInterval:12e4},reducers:{fetchList:function(e){e.loading=!0,e.errorMessage=null},fetchListRequestError:function(e,t){e.loading=!1,e.errorMessage=t.payload.errorMessage,e.requestLastTimestamp=Date.now()},fetchListRequestSuccess:function(e,t){e.loading=!1,e.errorMessage=null,e.listData=function(e){for(var t=i.a.parseHTML(e),r=d(t,2),n=d(t,4),a=d(t,5),c=d(t,6),o=d(t,7),s=d(t,11),u=[],l=0;l<r.length;l++)u.push({name:r[l],landscape:a[l],serverStatus:n[l],length:c[l],playerNum:o[l],isPrivate:s[l]});return u}(t.payload.html_body),e.requestLastTimeSpent=t.payload.time_spent,e.requestLastTimestamp=Date.now()},updateFetchInterval:function(e,t){e.fetchInterval=t.payload.fetchInterval}}}),m=function(e){return e.condorServerList.loading},f=function(e){return e.condorServerList.errorMessage},h=function(e){return e.condorServerList.listData.filter((function(e){return"No"===e.isPrivate&&(e.landscape.includes("Slovenia")||e.landscape.includes("South East UK"))&&e.serverStatus.includes("Join")})).sort((function(e,t){var r=e.landscape.localeCompare(t.landscape);if(0!==r)return-r;var n=e.playerNum.includes("/")?e.playerNum.split("/")[0]:e.playerNum;return(t.playerNum.includes("/")?t.playerNum.split("/")[0]:t.playerNum)-n}))},v=function(e){return e.condorServerList.requestLastTimeSpent},b=function(e){return e.condorServerList.requestLastTimestamp},g=function(e){return e.condorServerList.fetchInterval},w=p.actions,y=w.fetchList,E=w.fetchListRequestError,L=w.fetchListRequestSuccess,S=w.updateFetchInterval,j=p.reducer,O=r(25),x=r(27),k=r(29),M=r(28);function T(){var e=Object(x.a)(["\n  padding: 1rem;\n\n  table {\n    border-spacing: 0;\n    border: 1px solid black;\n\n    tr {\n      :last-child {\n        td {\n          border-bottom: 0;\n        }\n      }\n    }\n\n    th,\n    td {\n      margin: 0;\n      padding: 0.5rem;\n      border-bottom: 1px solid black;\n      border-right: 1px solid black;\n\n      :last-child {\n        border-right: 0;\n      }\n    }\n  }\n"]);return T=function(){return e},e}var q=k.a.div(T());var N=function(e){var t=e.columns,r=e.data,n=Object(M.useTable)({columns:t,data:r}),c=n.getTableProps,o=n.getTableBodyProps,s=n.headerGroups,u=n.rows,l=n.prepareRow;return a.a.createElement("table",c(),a.a.createElement("thead",null,s.map((function(e){return a.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map((function(e){return a.a.createElement("th",e.getHeaderProps(),e.render("Header"))})))}))),a.a.createElement("tbody",o(),u.map((function(e,t){return l(e),a.a.createElement("tr",e.getRowProps(),e.cells.map((function(e){return a.a.createElement("td",e.getCellProps(),e.render("Cell"))})))}))))},P=r(31),H=r.n(P);function I(){var e=Object(s.c)(v),t=Object(s.c)(b),r=Object(s.c)(g),c=Object(s.b)();Object(n.useEffect)(u,[]),Object(n.useEffect)((function(){var e=setTimeout((function(){u()}),r);return function(){return clearTimeout(e)}}),[t]);var o=a.a.useMemo((function(){return[{Header:"Name",accessor:"name"},{Header:"Landscape",accessor:"landscape"},{Header:"ServerStatus",accessor:"serverStatus"},{Header:"Task",accessor:"length"},{Header:"Players",accessor:"playerNum"},{Header:"Private",accessor:"isPrivate"}]}),[]);function u(e){c(y())}return a.a.createElement("div",null,a.a.createElement("h1",null,"Condor"),a.a.createElement("p",{style:{color:"red"}},Object(s.c)(f)),a.a.createElement("span",null,a.a.createElement(O.MoonLoader,{loading:Object(s.c)(m)})),e&&a.a.createElement("p",null,Math.round(e),"ms / ",H()(t).format("MMMM Do YYYY, h:mm:ss a")),a.a.createElement("input",{type:"text",value:r,onChange:function(e){c(S({fetchInterval:e.target.value}))}}),a.a.createElement("button",{onClick:u},"Fetch"),a.a.createElement(q,null,a.a.createElement(N,{columns:o,data:Object(s.c)(h)})))}var _=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(I,null))},C=r(32),R=r(8),D=r.n(R),Y=r(12),B=D.a.mark(J),F=D.a.mark(W);function J(){var e,t,r;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,"https://cors-anywhere.herokuapp.com/","https://cors-anywhere.herokuapp.com/https://www.condorsoaring.com/serverlist/?wdt_search=cndr2",e=performance.now(),n.next=6,fetch("https://cors-anywhere.herokuapp.com/https://www.condorsoaring.com/serverlist/?wdt_search=cndr2",{headers:{"X-Requested-With":"node"}});case 6:return t=n.sent,r=performance.now(),n.t0=Y.b,n.t1=L.type,n.next=12,t.text();case 12:return n.t2=n.sent,n.t3=r-e,n.t4={html_body:n.t2,time_spent:n.t3},n.t5={type:n.t1,payload:n.t4},n.next=18,(0,n.t0)(n.t5);case 18:n.next=25;break;case 20:return n.prev=20,n.t6=n.catch(0),console.error(n.t6),n.next=25,Object(Y.b)({type:E.type,payload:{errorMessage:n.t6.toString()}});case 25:case"end":return n.stop()}}),B,null,[[0,20]])}function W(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Y.c)(y.type,J);case 2:case"end":return e.stop()}}),F)}var A=r(33),G=D.a.mark(K);function K(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Y.a)([W()]);case 2:case"end":return e.stop()}}),G)}var U=Object(A.a)(),X=Object(u.a)({reducer:{condorServerList:j},middleware:[U].concat(Object(C.a)(Object(u.c)()))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));U.run(K),o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(s.a,{store:X},a.a.createElement(_,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.65b1d893.chunk.js.map