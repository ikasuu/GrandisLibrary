(this.webpackJsonpgrandislibrary=this.webpackJsonpgrandislibrary||[]).push([[14],{104:function(n,e,t){"use strict";t.d(e,"b",(function(){return f}));var a=t(1),r=t(2),i=t(4),c=t.n(i),o=t(0),u=t.n(o),d=t(3),m=t.n(d),l=t(5),f={bsPrefix:m.a.string,fluid:m.a.bool,rounded:m.a.bool,roundedCircle:m.a.bool,thumbnail:m.a.bool},s=u.a.forwardRef((function(n,e){var t=n.bsPrefix,i=n.className,o=n.fluid,d=n.rounded,m=n.roundedCircle,f=n.thumbnail,s=Object(r.a)(n,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);t=Object(l.a)(t,"img");var b=c()(o&&t+"-fluid",d&&"rounded",m&&"rounded-circle",f&&t+"-thumbnail");return u.a.createElement("img",Object(a.a)({ref:e},s,{className:c()(i,b)}))}));s.displayName="Image",s.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},e.a=s},105:function(n,e,t){"use strict";var a=t(1),r=t(2),i=t(4),c=t.n(i),o=t(0),u=t.n(o),d=t(5),m=t(40),l=t(96),f=t(41),s=u.a.forwardRef((function(n,e){var t=n.bsPrefix,i=n.className,o=n.variant,m=n.as,l=void 0===m?"img":m,f=Object(r.a)(n,["bsPrefix","className","variant","as"]),s=Object(d.a)(t,"card-img");return u.a.createElement(l,Object(a.a)({ref:e,className:c()(o?s+"-"+o:s,i)},f))}));s.displayName="CardImg",s.defaultProps={variant:null};var b=s,h=Object(l.a)("h5"),g=Object(l.a)("h6"),v=Object(m.a)("card-body"),p=Object(m.a)("card-title",{Component:h}),j=Object(m.a)("card-subtitle",{Component:g}),O=Object(m.a)("card-link",{Component:"a"}),x=Object(m.a)("card-text",{Component:"p"}),w=Object(m.a)("card-header"),E=Object(m.a)("card-footer"),y=Object(m.a)("card-img-overlay"),k=u.a.forwardRef((function(n,e){var t=n.bsPrefix,i=n.className,m=n.bg,l=n.text,s=n.border,b=n.body,h=n.children,g=n.as,p=void 0===g?"div":g,j=Object(r.a)(n,["bsPrefix","className","bg","text","border","body","children","as"]),O=Object(d.a)(t,"card"),x=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:O+"-header"}}),[O]);return u.a.createElement(f.a.Provider,{value:x},u.a.createElement(p,Object(a.a)({ref:e},j,{className:c()(i,O,m&&"bg-"+m,l&&"text-"+l,s&&"border-"+s)}),b?u.a.createElement(v,null,h):h))}));k.displayName="Card",k.defaultProps={body:!1},k.Img=b,k.Title=p,k.Subtitle=j,k.Body=v,k.Link=O,k.Text=x,k.Header=w,k.Footer=E,k.ImgOverlay=y;e.a=k},197:function(n,e,t){"use strict";t.r(e),t.d(e,"DamageSkin",(function(){return g}));var a=t(100),r=t(101),i=t(103),c=t(102),o=t(0),u=t.n(o),d=t(114),m=t.n(d),l=t(115),f=t.n(l),s=t(42),b=t(33),h=t(94),g=(t(93),function(n){Object(i.a)(t,n);var e=Object(c.a)(t);function t(n){var r;return Object(a.a)(this,t),(r=e.call(this,n)).state={data:{},loading:!0,fail:!1},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var n=this;fetch("./data/DamageSkin.img.json").then((function(n){return n.json()})).then((function(e){n.setState({data:e,loading:!1,fail:!1},n.fetchDamageSkin)})).catch((function(e){return n.setState({fail:!0})}))}},{key:"fetchDamageSkin",value:function(){this.state.data.children.forEach((function(n){f()(m.a,{retries:5})}))}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(s.a,null,u.a.createElement("title",null,"Damage Skin | Grandis Library")),u.a.createElement(h.a,{imageUrl:"".concat(b.d.ristonia,".jpg")}),u.a.createElement("h1",{className:"page-title"},"Damage Skin"))}}]),t}(o.Component));e.default=g},93:function(n,e,t){"use strict";t.d(e,"g",(function(){return j})),t.d(e,"f",(function(){return O})),t.d(e,"a",(function(){return x})),t.d(e,"e",(function(){return w})),t.d(e,"c",(function(){return E})),t.d(e,"d",(function(){return y})),t.d(e,"b",(function(){return z}));var a=t(22),r=t(0),i=t.n(r),c=t(13),o=t(105),u=t(9);function d(){var n=Object(a.a)(["\n    font-size: 0.9rem;\n    line-height: 1.25rem;\n\n    @media(min-width: 200px){\n        font-size: 0.8rem;\n    }\n    @media(min-width: 430px){\n        font-size: 0.85rem;\n    }\n    @media(min-width: 800px){\n        font-size: 0.9rem;\n    }\n"]);return d=function(){return n},n}function m(){var n=Object(a.a)(["\n    font-size: 1.15rem;\n"]);return m=function(){return n},n}function l(){var n=Object(a.a)(["\n    min-width: 8rem;\n    margin: 0.5rem;\n\n    @media(min-width: 200px){\n        max-width: 100%;\n    }\n    @media(min-width: 400px){\n        max-width: 45%;\n    }\n    @media(min-width: 800px){\n        max-width: 30%;\n    }\n    @media(min-width: 1100px){\n        max-width: 23%;\n    }\n    @media(min-width: 1500px){\n        max-width: 23.5%;\n    }\n"]);return l=function(){return n},n}function f(){var n=Object(a.a)(["\n    max-width: 80%;\n    margin-left: auto;\n    margin-right: auto;\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: start;\n\n    @media(min-width: 200px){\n        max-width: 100%;\n    }\n    @media(min-width: 500px){\n        padding: 0 0 0 0.5rem;\n        max-width: 90%;\n    }\n    @media(min-width: 800px){\n        padding: 0 0 0 2.5rem;\n        max-width: 80%;\n    }\n"]);return f=function(){return n},n}function s(){var n=Object(a.a)(["\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border-radius: 1rem;\n    top: 0;\n    left: 0;\n    background: rgb(0,0,0);\n    background: linear-gradient(145deg, rgba(0,0,0,1) 3%, rgba(107,107,107,0) 100%); \n    opacity: 0.8;\n"]);return s=function(){return n},n}function b(){var n=Object(a.a)(["\n    position: absolute;\n    width: 100%;\n    height: inherit;\n    top: 0;\n    left: 0;\n    background-color: #2a2829;\n    opacity: 0.2;\n"]);return b=function(){return n},n}function h(){var n=Object(a.a)(["\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n"]);return h=function(){return n},n}function g(){var n=Object(a.a)(["\n    text-align: center;\n    margin-top: 2.5rem;\n    margin-bottom: 1.5rem;\n    font-size: 1.08rem;\n"]);return g=function(){return n},n}function v(){var n=Object(a.a)(["\n    text-align: center;\n    margin-top: 2rem;\n    margin-bottom: 2.5rem;\n    font-size: 2.5rem;\n"]);return v=function(){return n},n}function p(){var n=Object(a.a)(["\n    text-align: center;\n    margin-bottom: 3rem;\n    font-size: 3.5rem;\n"]);return p=function(){return n},n}var j=c.c.h1(p()),O=c.c.h2(v()),x=c.c.p(g()),w=c.c.div(h()),E=c.c.div(b()),y=c.c.div(s()),k=c.c.div(f()),N=Object(c.c)(o.a)(l()),P=Object(c.c)(o.a.Title)(m()),C=Object(c.c)(o.a.Text)(d());function z(n){var e=n.content;return i.a.createElement(k,null,e.map((function(n){return i.a.createElement(N,null,i.a.createElement(u.Link,{to:"content/".concat(n[0])},i.a.createElement(o.a.Img,{variant:"top",src:"".concat("/GrandisLibrary","/thumbnail/").concat(n[0],".png"),alt:n[1]})),i.a.createElement(o.a.Body,null,i.a.createElement(u.Link,{to:"content/".concat(n[0])},i.a.createElement(P,null,n[1])),i.a.createElement(C,null,n[2])))})))}},94:function(n,e,t){"use strict";var a=t(22),r=t(0),i=t.n(r),c=t(104),o=t(13),u=t(93);function d(){var n=Object(a.a)(["\n    width: 100%;\n    height: 100%;\n    object-position: 50% 75%;\n    object-fit: cover;\n    box-sizing: border-box;\n"]);return d=function(){return n},n}function m(){var n=Object(a.a)(["\n    height: 20rem;\n"]);return m=function(){return n},n}function l(){var n=Object(a.a)(["\n    margin-bottom: 4rem;\n"]);return l=function(){return n},n}var f=o.c.div(l()),s=o.c.div(m()),b=Object(o.c)(c.a)(d());e.a=function(n){return i.a.createElement(f,null,i.a.createElement(s,null,i.a.createElement(b,{fluid:!0,src:n.imageUrl}),i.a.createElement(u.c,null)))}},96:function(n,e,t){"use strict";var a=t(1),r=t(0),i=t.n(r),c=t(4),o=t.n(c);e.a=function(n){return i.a.forwardRef((function(e,t){return i.a.createElement("div",Object(a.a)({},e,{ref:t,className:o()(e.className,n)}))}))}}}]);
//# sourceMappingURL=14.d0132555.chunk.js.map