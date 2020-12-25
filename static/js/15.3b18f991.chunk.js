(this.webpackJsonpgrandislibrary=this.webpackJsonpgrandislibrary||[]).push([[15],{102:function(n,e,t){"use strict";t.d(e,"b",(function(){return f}));var r=t(1),a=t(2),i=t(4),c=t.n(i),o=t(0),u=t.n(o),d=t(3),l=t.n(d),m=t(5),f={bsPrefix:l.a.string,fluid:l.a.bool,rounded:l.a.bool,roundedCircle:l.a.bool,thumbnail:l.a.bool},b=u.a.forwardRef((function(n,e){var t=n.bsPrefix,i=n.className,o=n.fluid,d=n.rounded,l=n.roundedCircle,f=n.thumbnail,b=Object(a.a)(n,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);t=Object(m.a)(t,"img");var s=c()(o&&t+"-fluid",d&&"rounded",l&&"rounded-circle",f&&t+"-thumbnail");return u.a.createElement("img",Object(r.a)({ref:e},b,{className:c()(i,s)}))}));b.displayName="Image",b.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},e.a=b},103:function(n,e,t){"use strict";var r=t(1),a=t(2),i=t(4),c=t.n(i),o=t(0),u=t.n(o),d=t(5),l=t(39),m=t(94),f=t(40),b=u.a.forwardRef((function(n,e){var t=n.bsPrefix,i=n.className,o=n.variant,l=n.as,m=void 0===l?"img":l,f=Object(a.a)(n,["bsPrefix","className","variant","as"]),b=Object(d.a)(t,"card-img");return u.a.createElement(m,Object(r.a)({ref:e,className:c()(o?b+"-"+o:b,i)},f))}));b.displayName="CardImg",b.defaultProps={variant:null};var s=b,g=Object(m.a)("h5"),h=Object(m.a)("h6"),p=Object(l.a)("card-body"),v=Object(l.a)("card-title",{Component:g}),j=Object(l.a)("card-subtitle",{Component:h}),O=Object(l.a)("card-link",{Component:"a"}),x=Object(l.a)("card-text",{Component:"p"}),w=Object(l.a)("card-header"),E=Object(l.a)("card-footer"),y=Object(l.a)("card-img-overlay"),N=u.a.forwardRef((function(n,e){var t=n.bsPrefix,i=n.className,l=n.bg,m=n.text,b=n.border,s=n.body,g=n.children,h=n.as,v=void 0===h?"div":h,j=Object(a.a)(n,["bsPrefix","className","bg","text","border","body","children","as"]),O=Object(d.a)(t,"card"),x=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:O+"-header"}}),[O]);return u.a.createElement(f.a.Provider,{value:x},u.a.createElement(v,Object(r.a)({ref:e},j,{className:c()(i,O,l&&"bg-"+l,m&&"text-"+m,b&&"border-"+b)}),s?u.a.createElement(p,null,g):g))}));N.displayName="Card",N.defaultProps={body:!1},N.Img=s,N.Title=v,N.Subtitle=j,N.Body=p,N.Link=O,N.Text=x,N.Header=w,N.Footer=E,N.ImgOverlay=y;e.a=N},197:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(41),c=t(32),o=t(92),u=t(91);e.default=function(){return a.a.createElement("div",null,a.a.createElement(i.a,null,a.a.createElement("title",null,"Resources | Grandis Library")),a.a.createElement(o.a,{imageUrl:"".concat(c.e.grandis,".jpg")}),a.a.createElement(u.g,null,"Resources"))}},91:function(n,e,t){"use strict";t.d(e,"g",(function(){return j})),t.d(e,"f",(function(){return O})),t.d(e,"a",(function(){return x})),t.d(e,"e",(function(){return w})),t.d(e,"c",(function(){return E})),t.d(e,"d",(function(){return y})),t.d(e,"b",(function(){return z}));var r=t(21),a=t(0),i=t.n(a),c=t(13),o=t(103),u=t(9);function d(){var n=Object(r.a)(["\n    font-size: 0.9rem;\n    @media(min-width: 200px){\n        font-size: 0.8rem;\n    }\n    @media(min-width: 430px){\n        font-size: 0.85rem;\n    }\n    @media(min-width: 800px){\n        font-size: 0.9rem;\n    }\n"]);return d=function(){return n},n}function l(){var n=Object(r.a)(["\n    font-size: 1.15rem;\n"]);return l=function(){return n},n}function m(){var n=Object(r.a)(["\n    min-width: 8rem;\n    margin: 0.5rem;\n    @media(min-width: 200px){\n        max-width: 100%;\n    }\n    @media(min-width: 400px){\n        max-width: 45%;\n    }\n    @media(min-width: 800px){\n        max-width: 30%;\n    }\n    @media(min-width: 1100px){\n        max-width: 23%;\n    }\n    @media(min-width: 1500px){\n        max-width: 23.5%;\n    }\n"]);return m=function(){return n},n}function f(){var n=Object(r.a)(["\n    max-width: 80%;\n    margin-left: auto;\n    margin-right: auto;\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: start;\n    @media(min-width: 200px){\n        padding: 0;\n    }\n    @media(min-width: 430px){\n        padding: 0 0 0 0.5rem;\n    }\n    @media(min-width: 800px){\n        padding: 0 0 0 2.5rem;\n    }\n"]);return f=function(){return n},n}function b(){var n=Object(r.a)(["\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border-radius: 1rem;\n    top: 0;\n    left: 0;\n    background: rgb(0,0,0);\n    background: linear-gradient(145deg, rgba(0,0,0,1) 3%, rgba(107,107,107,0) 100%); \n    opacity: 0.8;\n"]);return b=function(){return n},n}function s(){var n=Object(r.a)(["\n    position: absolute;\n    width: 100%;\n    height: inherit;\n    top: 0;\n    left: 0;\n    background-color: #2a2829;\n    opacity: 0.2;\n"]);return s=function(){return n},n}function g(){var n=Object(r.a)(["\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n"]);return g=function(){return n},n}function h(){var n=Object(r.a)(["\n    text-align: center;\n    margin-top: 2.5rem;\n    margin-bottom: 1.5rem;\n    font-size: 1.08rem;\n"]);return h=function(){return n},n}function p(){var n=Object(r.a)(["\n    text-align: center;\n    margin-top: 2rem;\n    margin-bottom: 2.5rem;\n    font-size: 2.5rem;\n"]);return p=function(){return n},n}function v(){var n=Object(r.a)(["\n    text-align: center;\n    margin-bottom: 3rem;\n    font-size: 3.5rem;\n"]);return v=function(){return n},n}var j=c.c.h1(v()),O=c.c.h2(p()),x=c.c.p(h()),w=c.c.div(g()),E=c.c.div(s()),y=c.c.div(b()),N=c.c.div(f()),P=Object(c.c)(o.a)(m()),C=Object(c.c)(o.a.Title)(l()),k=Object(c.c)(o.a.Text)(d());function z(n){var e=n.content;return i.a.createElement(N,null,e.map((function(n){return i.a.createElement(P,null,i.a.createElement(u.Link,{to:"content/".concat(n[0])},i.a.createElement(o.a.Img,{variant:"top",src:"".concat("/GrandisLibrary","/thumbnail/").concat(n[0],".png"),alt:n[1]})),i.a.createElement(o.a.Body,null,i.a.createElement(u.Link,{to:"content/".concat(n[0])},i.a.createElement(C,null,n[1])),i.a.createElement(k,null,n[2])))})))}},92:function(n,e,t){"use strict";var r=t(21),a=t(0),i=t.n(a),c=t(102),o=t(13),u=t(91);function d(){var n=Object(r.a)(["\n    width: 100%;\n    height: 100%;\n    object-position: 50% 75%;\n    object-fit: cover;\n    box-sizing: border-box;\n"]);return d=function(){return n},n}function l(){var n=Object(r.a)(["\n    height: 20rem;\n"]);return l=function(){return n},n}function m(){var n=Object(r.a)(["\n    margin-bottom: 4rem;\n"]);return m=function(){return n},n}var f=o.c.div(m()),b=o.c.div(l()),s=Object(o.c)(c.a)(d());e.a=function(n){return i.a.createElement(f,null,i.a.createElement(b,null,i.a.createElement(s,{fluid:!0,src:n.imageUrl}),i.a.createElement(u.c,null)))}},94:function(n,e,t){"use strict";var r=t(1),a=t(0),i=t.n(a),c=t(4),o=t.n(c);e.a=function(n){return i.a.forwardRef((function(e,t){return i.a.createElement("div",Object(r.a)({},e,{ref:t,className:o()(e.className,n)}))}))}}}]);
//# sourceMappingURL=15.3b18f991.chunk.js.map