(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/EDR":function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e("QeBL")}])},"2wwy":function(n,t,e){n.exports=e("nhzr")},"4mXO":function(n,t,e){n.exports=e("7TPF")},"7TPF":function(n,t,e){e("AUvm"),n.exports=e("WEpk").Object.getOwnPropertySymbols},E8gZ:function(n,t,e){var r=e("jmDH"),o=e("w6GO"),a=e("NsO/"),u=e("NV0k").f;n.exports=function(n){return function(t){for(var e,i=a(t),c=o(i),f=c.length,l=0,s=[];f>l;)e=c[l++],r&&!u.call(i,e)||s.push(n?[e,i[e]]:i[e]);return s}}},QeBL:function(n,t,e){"use strict";e.r(t);var r=e("q1tI"),o=e.n(r),a=e("soUV"),u=e("aqas"),i=e("PRER"),c=e("2wwy"),f=e.n(c),l=e("Jo+v"),s=e.n(l),p=e("4mXO"),h=e.n(p),g=e("pLtp"),w=e.n(g),m=e("hfKm"),b=e.n(m);function v(n,t,e){return t in n?b()(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function y(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function d(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),b()(n,r.key,r)}}function q(n,t,e){return t&&d(n.prototype,t),e&&d(n,e),n}var P=e("XVgq"),k=e.n(P),E=e("Z7t5"),R=e.n(E);function _(n){return(_="function"===typeof R.a&&"symbol"===typeof k.a?function(n){return typeof n}:function(n){return n&&"function"===typeof R.a&&n.constructor===R.a&&n!==R.a.prototype?"symbol":typeof n})(n)}function O(n){return(O="function"===typeof R.a&&"symbol"===_(k.a)?function(n){return _(n)}:function(n){return n&&"function"===typeof R.a&&n.constructor===R.a&&n!==R.a.prototype?"symbol":_(n)})(n)}function x(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function T(n,t){return!t||"object"!==O(t)&&"function"!==typeof t?x(n):t}var j=e("Bhuq"),z=e.n(j),S=e("TRZx"),Z=e.n(S);function C(n){return(C=Z.a?z.a:function(n){return n.__proto__||z()(n)})(n)}var N=e("SqZg"),X=e.n(N);function B(n,t){return(B=Z.a||function(n,t){return n.__proto__=t,n})(n,t)}function D(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=X()(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&B(n,t)}var L=e("rt45"),W=e("vOnD"),A=o.a.createElement,H=function(n){function t(n){var e;return y(this,t),v(x(e=T(this,C(t).call(this,n))),"handleBlockQuoteHeight",function(){console.log("ref current",e.blockquoteRef)}),v(x(e),"toggleParagraph",function(){e.props.toggleParagraph()}),e.blockquoteRef=o.a.createRef(),e}return D(t,o.a.Component),q(t,[{key:"render",value:function(){var n=this;return A("div",{onClick:function(){return n.toggleParagraph()}},A("blockquote",{ref:this.blockquoteRef},A("h2",null,this.props.title),A("p",null,"-> ",this.props.quote)))}}]),t}(),J=o.a.createElement;function Q(){var n=Object(L.a)(["\n    p{\n        font-size:2rem;\n        line-height:1.6;\n    }\n"]);return Q=function(){return n},n}function V(){var n=Object(L.a)(["\nmargin-bottom: 6rem;\nblockquote{\n        border-radius:5px;\n        background-color:",";\n        border-left: 5px solid ",';\n        font-family:"Space Mono", monospace;\n        margin:3rem 0;\n        padding-left: 2rem;\n        h2{\n            font-size:2.2rem;\n            color: ',";\n            margin: 1rem 0;\n            padding: 1rem 0 0 0;\n        }\n        p{\n            margin: 0 0 2rem 0;\n            padding: 0 0 2rem 0;\n            line-height:1.2;\n            font-size:2rem;\n        }\n    }\n"]);return V=function(){return n},n}var F=W.c.div(V(),function(n){return n.theme.colors.gray},function(n){return n.theme.colors.blue},function(n){return n.theme.colors.blue}),U=W.c.div(Q()),G=function(n){function t(n){var e;return y(this,t),v(x(e=T(this,C(t).call(this,n))),"state",{showParagraph:!1}),v(x(e),"_renderAnswer",function(){var n=function(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=w()(e);"function"===typeof h.a&&(r=r.concat(h()(e).filter(function(n){return s()(e,n).enumerable}))),r.forEach(function(t){v(n,t,e[t])})}return n}({},e.props.answer);return f()(n).map(function(n){return J("p",null,n)})}),v(x(e),"toggleParagraph",function(){e.setState({showParagraph:!e.state.showParagraph},function(){e.pRef&&(console.log("\ud83d\udc68\u200d\ud83d\ude80",e.pRef),window.scroll(0,e.pRef.offsetHeight))})}),e.pRef=o.a.createRef(),e}return D(t,o.a.Component),q(t,[{key:"render",value:function(){var n=this.props,t=this.state.showParagraph;return J(F,null,J(H,{title:n.title,quote:n.quote,toggleParagraph:this.toggleParagraph,showParagraph:this.state.showParagraph}),J("div",{ref:this.pRef},n.answer&&t?J(U,null,this._renderAnswer()):null))}}]),t}(),I=o.a.createElement;t.default=function(){var n=i.a.quotes;return I(a.a,{title:"Le Petit Nietzsche"},I(u.a,{subTitle:i.a.howto}),I(G,{title:n[1].t,quote:n[1].q,answer:n[1].a}),I(G,{title:n[2].t,quote:n[2].q,answer:n[2].a}),I(G,{title:n[3].t,quote:n[3].q,answer:n[3].a}),I(G,{title:n[4].t,quote:n[4].q,answer:n[4].a}),I(G,{title:n[5].t,quote:n[5].q,answer:n[5].a}))}},fW1p:function(n,t,e){var r=e("Y7ZC"),o=e("E8gZ")(!1);r(r.S,"Object",{values:function(n){return o(n)}})},nhzr:function(n,t,e){e("fW1p"),n.exports=e("WEpk").Object.values}},[["/EDR",1,0]]]);