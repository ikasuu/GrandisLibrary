(this.webpackJsonpgrandislibrary=this.webpackJsonpgrandislibrary||[]).push([[9],{104:function(e,t,n){"use strict";var r=n(7),a=n(0),o=n.n(a),l=n(110),c=n(6),s=n(46);function i(){var e=Object(r.a)(["\n    width: 100%;\n    height: 100%;\n    object-position: 50% 75%;\n    object-fit: cover;\n    box-sizing: border-box;\n"]);return i=function(){return e},e}function u(){var e=Object(r.a)(["\n    height: 20rem;\n"]);return u=function(){return e},e}function f(){var e=Object(r.a)(["\n    margin-bottom: 4rem;\n"]);return f=function(){return e},e}var d=c.c.div(f()),m=c.c.div(u()),p=Object(c.c)(l.a)(i());t.a=function(e){return o.a.createElement(d,null,o.a.createElement(m,null,o.a.createElement(p,{fluid:!0,src:e.imageUrl}),o.a.createElement(s.d,null)))}},115:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.forceVisible=t.forceCheck=t.lazyload=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),o=f(a),l=f(n(3)),c=n(118),s=f(n(119)),i=f(n(120)),u=f(n(121));function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function p(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var h=0,v=0,g=0,y=0,b="data-lazyload-listened",E=[],w=[],k=!1;try{var x=Object.defineProperty({},"passive",{get:function(){k=!0}});window.addEventListener("test",null,x)}catch(T){}var O=!!k&&{capture:!1,passive:!0},L=function(e){var t=e.ref;if(t instanceof HTMLElement){var n=(0,s.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?function(e,t){var n=e.ref,r=void 0,a=void 0,o=void 0,l=void 0;try{var c=t.getBoundingClientRect();r=c.top,a=c.left,o=c.height,l=c.width}catch(T){r=h,a=v,o=y,l=g}var s=window.innerHeight||document.documentElement.clientHeight,i=window.innerWidth||document.documentElement.clientWidth,u=Math.max(r,0),f=Math.max(a,0),d=Math.min(s,r+o)-u,m=Math.min(i,a+l)-f,p=void 0,b=void 0,E=void 0,w=void 0;try{var k=n.getBoundingClientRect();p=k.top,b=k.left,E=k.height,w=k.width}catch(T){p=h,b=v,E=y,w=g}var x=p-u,O=b-f,L=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return x-L[0]<=d&&x+E+L[1]>=0&&O-L[0]<=m&&O+w+L[1]>=0}(e,n):function(e){var t=e.ref;if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,r=void 0;try{var a=t.getBoundingClientRect();n=a.top,r=a.height}catch(T){n=h,r=y}var o=window.innerHeight||document.documentElement.clientHeight,l=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-l[0]<=o&&n+r+l[1]>=0}(e))?e.visible||(e.props.once&&w.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},j=function(){w.forEach((function(e){var t=E.indexOf(e);-1!==t&&E.splice(t,1)})),w=[]},N=function(){for(var e=0;e<E.length;++e){var t=E[e];L(t)}j()},P=void 0,C=null,_=function(e){function t(e){d(this,t);var n=m(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n.setRef=n.setRef.bind(n),n}return p(t,e),r(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"===typeof t&&(e=e.document.querySelector(t));var n=void 0!==this.props.debounce&&"throttle"===P||"debounce"===P&&void 0===this.props.debounce;if(n&&((0,c.off)(e,"scroll",C,O),(0,c.off)(window,"resize",C,O),C=null),C||(void 0!==this.props.debounce?(C=(0,i.default)(N,"number"===typeof this.props.debounce?this.props.debounce:300),P="debounce"):void 0!==this.props.throttle?(C=(0,u.default)(N,"number"===typeof this.props.throttle?this.props.throttle:300),P="throttle"):C=N),this.props.overflow){var r=(0,s.default)(this.ref);if(r&&"function"===typeof r.getAttribute){var a=+r.getAttribute(b)+1;1===a&&r.addEventListener("scroll",C,O),r.setAttribute(b,a)}}else if(0===E.length||n){var o=this.props,l=o.scroll,f=o.resize;l&&(0,c.on)(e,"scroll",C,O),f&&(0,c.on)(window,"resize",C,O)}E.push(this),L(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,s.default)(this.ref);if(e&&"function"===typeof e.getAttribute){var t=+e.getAttribute(b)-1;0===t?(e.removeEventListener("scroll",C,O),e.removeAttribute(b)):e.setAttribute(b,t)}}var n=E.indexOf(this);-1!==n&&E.splice(n,1),0===E.length&&"undefined"!==typeof window&&((0,c.off)(window,"resize",C,O),(0,c.off)(window,"scroll",C,O))}},{key:"setRef",value:function(e){e&&(this.ref=e)}},{key:"render",value:function(){var e=this.props,t=e.height,n=e.children,r=e.placeholder,a=e.classNamePrefix,l=e.style;return o.default.createElement("div",{className:a+"-wrapper",ref:this.setRef,style:l},this.visible?n:r||o.default.createElement("div",{style:{height:t},className:a+"-placeholder"}))}}]),t}(a.Component);_.propTypes={classNamePrefix:l.default.string,once:l.default.bool,height:l.default.oneOfType([l.default.number,l.default.string]),offset:l.default.oneOfType([l.default.number,l.default.arrayOf(l.default.number)]),overflow:l.default.bool,resize:l.default.bool,scroll:l.default.bool,children:l.default.node,throttle:l.default.oneOfType([l.default.number,l.default.bool]),debounce:l.default.oneOfType([l.default.number,l.default.bool]),placeholder:l.default.node,scrollContainer:l.default.oneOfType([l.default.string,l.default.object]),unmountIfInvisible:l.default.bool,style:l.default.object},_.defaultProps={classNamePrefix:"lazyload",once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var G=function(e){return e.displayName||e.name||"Component"};t.lazyload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function a(){d(this,a);var e=m(this,(a.__proto__||Object.getPrototypeOf(a)).call(this));return e.displayName="LazyLoad"+G(t),e}return p(a,n),r(a,[{key:"render",value:function(){return o.default.createElement(_,e,o.default.createElement(t,this.props))}}]),a}(a.Component)}},t.default=_,t.forceCheck=N,t.forceVisible=function(){for(var e=0;e<E.length;++e){var t=E[e];t.visible=!0,t.forceUpdate()}j()}},118:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,n,r){r=r||!1,e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on"+t,(function(t){n.call(e,t||window.event)}))},t.off=function(e,t,n,r){r=r||!1,e.removeEventListener?e.removeEventListener(t,n,r):e.detachEvent&&e.detachEvent("on"+t,n)}},119:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,r=e;r;){if(!r.parentNode)return e.ownerDocument||document.documentElement;var a=window.getComputedStyle(r),o=a.position,l=a.overflow,c=a["overflow-x"],s=a["overflow-y"];if("static"===o&&t)r=r.parentNode;else{if(n.test(l)&&n.test(c)&&n.test(s))return r;r=r.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},120:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var r=void 0,a=void 0,o=void 0,l=void 0,c=void 0,s=function s(){var i=+new Date-l;i<t&&i>=0?r=setTimeout(s,t-i):(r=null,n||(c=e.apply(o,a),r||(o=null,a=null)))};return function(){o=this,a=arguments,l=+new Date;var i=n&&!r;return r||(r=setTimeout(s,t)),i&&(c=e.apply(o,a),o=null,a=null),c}}},121:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var r,a;return t||(t=250),function(){var o=n||this,l=+new Date,c=arguments;r&&l<r+t?(clearTimeout(a),a=setTimeout((function(){r=l,e.apply(o,c)}),t)):(r=l,e.apply(o,c))}}},126:function(e,t,n){"use strict";n.d(t,"a",(function(){return k})),n.d(t,"b",(function(){return x}));var r=n(7),a=n(0),o=n.n(a),l=n(191),c=n(110),s=n(10),i=n(288),u=n(263),f=n(282),d=n(264),m=n(6),p=n(115),h=n.n(p),v=n(37),g=n(46);n(125),n(134);function y(){var e=Object(r.a)(["\n    margin: 0.5rem;\n    @media(max-width: 473px){\n        margin: 0.25rem;\n    }\n    @media(max-width: 422px){\n        margin: 0;\n    }\n"]);return y=function(){return e},e}function b(){var e=Object(r.a)(["\n    width: 62%;\n    padding-left: 2.5rem;\n    margin: auto;\n\n    /* Adjustments to container and figures for mobile / tablet */\n    @media(max-width: 1199px){\n        width: 90%;\n    }\n\n    @media(max-width: 521px){\n        width: 95%;\n    }\n\n    @media(max-width: 473px){\n        padding-left: 1rem;\n    }\n"]);return b=function(){return e},e}f.a.use([d.a]);var E=m.c.div(b()),w=Object(m.c)(l.a.Image)(y());function k(e){var t=e.classes,n=e.classGroup;return o.a.createElement(E,null,o.a.createElement(h.a,{height:200,offset:100},t.map((function(e){return o.a.createElement(s.Link,{to:"/classes/".concat(n,"/").concat(e[0]),key:e,className:"hvr-float"},o.a.createElement(l.a,null,o.a.createElement(w,{width:120,height:176,alt:e[1],src:"".concat("/GrandisLibrary","/class-portrait/").concat(e[0],".png")}),o.a.createElement(g.g,null)))}))))}function x(e){var t=e.classes;return o.a.createElement(i.a,{spaceBetween:10,slidesPerView:2,breakpoints:{360:{slidesPerView:3.5},490:{slidesPerView:4.5},770:{slidesPerView:5.5},991:{slidesPerView:8.5},1199:{slidesPerView:9.5}}},t.map((function(e){return o.a.createElement(u.a,null,o.a.createElement(s.Link,{to:"/classes/".concat(e.path),key:e.alt,className:"hvr-float"},o.a.createElement(c.a,{src:"".concat("/GrandisLibrary","/class-portrait/").concat(e.class,".png"),alt:e.alt,style:{width:"100px",margin:"1rem 0 1rem 0"}}),o.a.createElement("div",{className:"class-overlay"})))})))}t.c=function(e){var t=e.classGroup,n=t;return t.includes("Resistance")?n="Resistance":t.includes("Other")&&(n="Other"),o.a.createElement("div",null,o.a.createElement("h5",null,"Check out some more ",n," classes below:"),o.a.createElement(i.a,{scrollbar:{draggable:!0,hide:!0},spaceBetween:10,slidesPerView:2,breakpoints:{360:{slidesPerView:3.5},490:{slidesPerView:4.5},770:{slidesPerView:5.5},991:{slidesPerView:8.5},1199:{slidesPerView:9.5}}},function(e){switch(e){case"Explorers":return v.c.explorers.map((function(e){return o.a.createElement(u.a,null,o.a.createElement(s.Link,{to:"/classes/explorers/".concat(e[0]),key:e,className:"hvr-float"},o.a.createElement(c.a,{src:"".concat("/GrandisLibrary","/class-portrait/").concat(e[0],".png"),style:{width:"100px",margin:"1rem 0 1rem 0"}}),o.a.createElement(g.g,null)))}));case"Cygnus Knights":return v.c.cygnusKnights.map((function(e){return o.a.createElement(u.a,null,o.a.createElement(s.Link,{to:"/classes/cygnus-knights/".concat(e[0]),key:e,className:"hvr-float"},o.a.createElement(c.a,{src:"".concat("/GrandisLibrary","/class-portrait/").concat(e[0],".png"),style:{width:"100px",margin:"1rem 0 0 0"}}),o.a.createElement(g.g,null)))}));case"Heroes":return v.c.heroes.map((function(e){return o.a.createElement(u.a,null,o.a.createElement(s.Link,{to:"/classes/heroes/".concat(e[0]),key:e,className:"hvr-float"},o.a.createElement(c.a,{src:"".concat("/GrandisLibrary","/class-portrait/").concat(e[0],".png"),style:{width:"100px",margin:"1rem 0 1rem 0"}}),o.a.createElement(g.g,null)))}));case"Resistance":return v.c.resistance.map((function(e){return o.a.createElement(u.a,null,o.a.createElement(s.Link,{to:"/classes/resistance/".concat(e[0]),key:e,className:"hvr-float"},o.a.createElement(c.a,{src:"".concat("/GrandisLibrary","/class-portrait/").concat(e[0],".png"),style:{width:"100px",margin:"1rem 0 1rem 0"}}),o.a.createElement(g.g,null)))}));case"Nova":return v.c.nova.map((function(e){return o.a.createElement(u.a,null,o.a.createElement(s.Link,{to:"/classes/nova/".concat(e[0]),key:e,className:"hvr-float"},o.a.createElement(c.a,{src:"".concat("/GrandisLibrary","/class-portrait/").concat(e[0],".png"),style:{width:"100px",margin:"1rem 0 1rem 0"}}),o.a.createElement(g.g,null)))}));case"Sengoku":return v.c.sengoku.map((function(e){return o.a.createElement(u.a,null,o.a.createElement(s.Link,{to:"/classes/sengoku/".concat(e[0]),key:e,className:"hvr-float"},o.a.createElement(c.a,{src:"".concat("/GrandisLibrary","/class-portrait/").concat(e[0],".png"),style:{width:"100px",margin:"1rem 0 1rem 0"}}),o.a.createElement(g.g,null)))}));case"Flora":return v.c.flora.map((function(e){return o.a.createElement(u.a,null,o.a.createElement(s.Link,{to:"/classes/flora/".concat(e[0]),key:e,className:"hvr-float"},o.a.createElement(c.a,{src:"".concat("/GrandisLibrary","/class-portrait/").concat(e[0],".png"),style:{width:"100px",margin:"1rem 0 1rem 0"}}),o.a.createElement(g.g,null)))}));case"Other":return v.c.other.map((function(e){return o.a.createElement(u.a,null,o.a.createElement(s.Link,{to:"/classes/other/".concat(e[0]),key:e,className:"hvr-float"},o.a.createElement(c.a,{src:"".concat("/GrandisLibrary","/class-portrait/").concat(e[0],".png"),style:{width:"100px",margin:"1rem 0 1rem 0"}}),o.a.createElement(g.g,null)))}));default:return v.c.explorers.map((function(e){return o.a.createElement(u.a,null,o.a.createElement(s.Link,{to:"/classes/explorers/".concat(e[0]),key:e,className:"hvr-float"},o.a.createElement(c.a,{src:"".concat("/GrandisLibrary","/class-portrait/").concat(e[0],".png"),style:{width:"100px",margin:"1rem 0 1rem 0"}}),o.a.createElement(g.g,null)))}))}}(n)))}},191:function(e,t,n){"use strict";var r=n(12),a=n(1),o=n(2),l=n(4),c=n.n(l),s=n(0),i=n.n(s),u=n(110),f=i.a.forwardRef((function(e,t){var n=e.className,r=Object(o.a)(e,["className"]);return i.a.createElement(u.a,Object(a.a)({ref:t},r,{className:c()(n,"figure-img")}))}));f.displayName="FigureImage",f.propTypes=u.b,f.defaultProps={fluid:!0};var d=f,m=Object(r.a)("figure-caption",{Component:"figcaption"}),p=Object(r.a)("figure",{Component:"figure"});p.Image=d,p.Caption=m;t.a=p},267:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(47),l=n(37),c=n(104),s=n(126),i=n(46);n(73);t.default=function(){return a.a.createElement("div",null,a.a.createElement(o.a,null,a.a.createElement("title",null,"Classes | Grandis Library")),a.a.createElement(c.a,{imageUrl:l.b.verdel}),a.a.createElement("div",null,a.a.createElement(i.j,null,"Classes"),a.a.createElement(i.h,null,"Explorers"),a.a.createElement(s.a,{classes:l.c.explorers,classGroup:"explorers"}),a.a.createElement(i.h,null,"Cygnus Knights"),a.a.createElement(s.a,{classes:l.c.cygnusKnights,classGroup:"cygnus-knights"}),a.a.createElement(i.h,null,"Heroes"),a.a.createElement(s.a,{classes:l.c.heroes,classGroup:"heroes"}),a.a.createElement(i.h,null,"Resistance"),a.a.createElement(s.a,{classes:l.c.resistance,classGroup:"resistance"}),a.a.createElement(i.h,null,"Nova"),a.a.createElement(s.a,{classes:l.c.nova,classGroup:"nova"}),a.a.createElement(i.h,null,"Sengoku"),a.a.createElement(s.a,{classes:l.c.sengoku,classGroup:"sengoku"}),a.a.createElement(i.h,null,"Flora"),a.a.createElement(s.a,{classes:l.c.flora,classGroup:"flora"}),a.a.createElement(i.h,null,"Other"),a.a.createElement(i.a,null,"Classes here only share Cash Shop Inventories with their own class - they do not share with each other"),a.a.createElement(s.a,{classes:l.c.other,classGroup:"other"})))}}}]);
//# sourceMappingURL=9.7d09260e.chunk.js.map