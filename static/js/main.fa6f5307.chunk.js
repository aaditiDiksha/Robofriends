(this.webpackJsonprobofriend=this.webpackJsonprobofriend||[]).push([[0],{18:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(3),s=n.n(o),c=(n(18),n(4)),a=n(5),i=n(8),h=n(7),u=n(6),b=n(1),d=function(e){var t=e.name,n=e.email,r=e.id;return Object(b.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(b.jsx)("img",{alt:"robo",className:"photo",src:"https://robohash.org/".concat(r,"?size=200x200 ")}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:t}),Object(b.jsx)("p",{children:n})]})]})},l=function(e){var t=e.robots,n=t.map((function(e,n){return Object(b.jsx)(d,{id:t[n].id,name:t[n].name,email:t[n].email},n)}));return Object(b.jsx)("div",{children:n})},j=function(e){return Object(b.jsx)("div",{style:{overflow:"scroll",border:"2px solid black",height:"500px"},children:e.children})},p=function(e){var t=e.onSearchChange;return Object(b.jsx)("div",{className:"pa2",children:Object(b.jsx)("input",{className:"pa3 ba b--green bg-lightest blue ",type:" search",placeholder:"Search Robots",onChange:t})})},O=function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(a.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(b.jsx)("h1",{children:" Oooops. That is not good"}):this.props.children}}]),n}(r.Component),g="CHANGE_SEARCH_FIELD",f="REQUEST_ROBOTS_PENDING",v="REQUEST_ROBOTS_SUCCESS",m="REQUEST_ROBOTS_FAILED",x=function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,o=e.isPending,s=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o?Object(b.jsx)("h1",{children:"Loading"}):Object(b.jsxs)("div",{className:"tc",children:[Object(b.jsx)("h1",{className:"title",children:"RoboFriends"}),Object(b.jsx)(p,{onSearchChange:n}),Object(b.jsx)(j,{children:Object(b.jsx)(O,{children:Object(b.jsx)(l,{robots:s})})})]})}}]),n}(r.Component),y=Object(u.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,{type:g,payload:n}));var n},onRequestRobots:function(){return e((function(e){e({type:f}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:v,payload:t})})).catch((function(t){return e({type:m,payload:t})}))}))}}}))(x),R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),o(e),s(e),c(e)}))},C=(n(24),n(2)),S=n(12),E=n(13),F={searchField:""},w={isPending:!1,robots:[],error:""},P=Object(S.createLogger)(),N=Object(C.b)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case g:return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case f:return Object.assign({},e,{isPending:!0});case v:return Object.assign({},e,{robots:t.payload,isPending:!1});case m:return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),T=Object(C.c)(N,Object(C.a)(E.a,P));s.a.render(Object(b.jsx)(u.a,{store:T,children:Object(b.jsx)(y,{})}),document.getElementById("root")),R()}},[[26,1,2]]]);
//# sourceMappingURL=main.fa6f5307.chunk.js.map