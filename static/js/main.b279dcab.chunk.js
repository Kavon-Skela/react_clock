(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),o=n(2),i=n(3),r=n(5),l=n(4),s=n(1),u=n.n(s),d=(n(12),n(0)),h=function(e){return e.toUTCString().slice(-12,-4)},m=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).currentDate=new Date,e.state={date:h(e.currentDate)},e.timerId=0,e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=window.setInterval((function(){var t=new Date,n=h(t);e.setState({date:n}),console.info(n)}),1e3)}},{key:"componentDidUpdate",value:function(e){e.clockName!==this.props.clockName&&console.debug("Renamed from ".concat(e.clockName," to ").concat(this.props.clockName))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.state.date;return Object(d.jsxs)("div",{className:"Clock",children:[Object(d.jsx)("strong",{className:"Clock__name",children:this.props.clockName})," time is ",Object(d.jsx)("span",{className:"Clock__time",children:e})]})}}]),n}(u.a.Component),k=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={hasClock:!0,clockName:"Clock-0"},e.timerId=null,e.handlerRightClick=function(t){t.preventDefault(),e.setState({hasClock:!1})},e.handlerLeftClick=function(){e.setState({hasClock:!0})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("contextmenu",this.handlerRightClick),window.addEventListener("click",this.handlerLeftClick),this.timerId=window.setInterval((function(){var t=function(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}();e.setState({clockName:t})}),3300)}},{key:"componentWillUnmount",value:function(){this.timerId&&window.clearInterval(this.timerId),window.removeEventListener("contextmenu",this.handlerRightClick),window.removeEventListener("click",this.handlerLeftClick)}},{key:"render",value:function(){var e=this.state,t=e.hasClock,n=e.clockName;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React clock"}),t&&Object(d.jsx)(m,{clockName:n})]})}}]),n}(u.a.Component);a.a.render(Object(d.jsx)(k,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.b279dcab.chunk.js.map