(this.webpackJsonpgrandislibrary=this.webpackJsonpgrandislibrary||[]).push([[12],{102:function(n,e,t){"use strict";var a=t(21),r=t(0),i=t.n(r),o=t(109),c=t(13),u=t(97);function m(){var n=Object(a.a)(["\n    width: 100%;\n    height: 100%;\n    object-position: 50% 75%;\n    object-fit: cover;\n    box-sizing: border-box;\n"]);return m=function(){return n},n}function l(){var n=Object(a.a)(["\n    height: 20rem;\n"]);return l=function(){return n},n}function d(){var n=Object(a.a)(["\n    margin-bottom: 4rem;\n"]);return d=function(){return n},n}var s=c.c.div(d()),f=c.c.div(l()),b=Object(c.c)(o.a)(m());e.a=function(n){return i.a.createElement(s,null,i.a.createElement(f,null,i.a.createElement(b,{fluid:!0,src:n.imageUrl}),i.a.createElement(u.d,null)))}},103:function(n,e,t){"use strict";var a=t(1),r=t(0),i=t.n(r),o=t(4),c=t.n(o);e.a=function(n){return i.a.forwardRef((function(e,t){return i.a.createElement("div",Object(a.a)({},e,{ref:t,className:c()(e.className,n)}))}))}},109:function(n,e,t){"use strict";t.d(e,"b",(function(){return s}));var a=t(1),r=t(2),i=t(4),o=t.n(i),c=t(0),u=t.n(c),m=t(3),l=t.n(m),d=t(5),s={bsPrefix:l.a.string,fluid:l.a.bool,rounded:l.a.bool,roundedCircle:l.a.bool,thumbnail:l.a.bool},f=u.a.forwardRef((function(n,e){var t=n.bsPrefix,i=n.className,c=n.fluid,m=n.rounded,l=n.roundedCircle,s=n.thumbnail,f=Object(r.a)(n,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);t=Object(d.a)(t,"img");var b=o()(c&&t+"-fluid",m&&"rounded",l&&"rounded-circle",s&&t+"-thumbnail");return u.a.createElement("img",Object(a.a)({ref:e},f,{className:o()(i,b)}))}));f.displayName="Image",f.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},e.a=f},118:function(n,e,t){"use strict";var a=t(1),r=t(2),i=t(4),o=t.n(i),c=t(0),u=t.n(c),m=t(5),l=t(42),d=t(103),s=t(43),f=u.a.forwardRef((function(n,e){var t=n.bsPrefix,i=n.className,c=n.variant,l=n.as,d=void 0===l?"img":l,s=Object(r.a)(n,["bsPrefix","className","variant","as"]),f=Object(m.a)(t,"card-img");return u.a.createElement(d,Object(a.a)({ref:e,className:o()(c?f+"-"+c:f,i)},s))}));f.displayName="CardImg",f.defaultProps={variant:null};var b=f,h=Object(d.a)("h5"),p=Object(d.a)("h6"),g=Object(l.a)("card-body"),v=Object(l.a)("card-title",{Component:h}),x=Object(l.a)("card-subtitle",{Component:p}),w=Object(l.a)("card-link",{Component:"a"}),j=Object(l.a)("card-text",{Component:"p"}),O=Object(l.a)("card-header"),y=Object(l.a)("card-footer"),E=Object(l.a)("card-img-overlay"),I=u.a.forwardRef((function(n,e){var t=n.bsPrefix,i=n.className,l=n.bg,d=n.text,f=n.border,b=n.body,h=n.children,p=n.as,v=void 0===p?"div":p,x=Object(r.a)(n,["bsPrefix","className","bg","text","border","body","children","as"]),w=Object(m.a)(t,"card"),j=Object(c.useMemo)((function(){return{cardHeaderBsPrefix:w+"-header"}}),[w]);return u.a.createElement(s.a.Provider,{value:j},u.a.createElement(v,Object(a.a)({ref:e},x,{className:o()(i,w,l&&"bg-"+l,d&&"text-"+d,f&&"border-"+f)}),b?u.a.createElement(g,null,h):h))}));I.displayName="Card",I.defaultProps={body:!1},I.Img=b,I.Title=v,I.Subtitle=x,I.Body=g,I.Link=w,I.Text=j,I.Header=O,I.Footer=y,I.ImgOverlay=E;e.a=I},129:function(n,e,t){"use strict";var a=t(1),r=t(2),i=t(4),o=t.n(i),c=t(0),u=t.n(c),m=t(5),l=u.a.forwardRef((function(n,e){var t=n.bsPrefix,i=n.fluid,c=n.as,l=void 0===c?"div":c,d=n.className,s=Object(r.a)(n,["bsPrefix","fluid","as","className"]),f=Object(m.a)(t,"container"),b="string"===typeof i?"-"+i:"-fluid";return u.a.createElement(l,Object(a.a)({ref:e},s,{className:o()(d,i?""+f+b:f)}))}));l.displayName="Container",l.defaultProps={fluid:!1},e.a=l},259:function(n,e,t){"use strict";t.r(e);var a=t(21),r=t(0),i=t.n(r),o=t(44),c=t(95),u=t(129),m=t(94),l=t(13),d=t(33),s=t(102),f=t(97);t(70);function b(){var n=Object(a.a)(["\n    max-width: 10rem;\n"]);return b=function(){return n},n}function h(){var n=Object(a.a)(["\n    max-width: 2rem;\n"]);return h=function(){return n},n}function p(){var n=Object(a.a)(["\n    margin: 2rem 0 1rem 0;\n    max-width: 100%;\n    height: auto;\n"]);return p=function(){return n},n}function g(){var n=Object(a.a)(["\n    max-width: 31rem;\n\n    // 0 - 1199px\n    @media(max-width: 1199px){\n        max-width: 29rem;\n    }\n    // 0 - 992px\n    @media(max-width: 992px){\n        margin: 0 0.5rem 0 0.5rem;\n        max-width: 40rem;\n    }\n"]);return g=function(){return n},n}function v(){var n=Object(a.a)(["\n    max-width: 35rem;\n\n    // 200+px\n    @media(min-width: 200px){\n        margin: 0 1rem 0 1rem;\n    }\n    // 1201+px\n    @media(min-width: 1201px){\n        margin: 0 5rem 0 0;\n    }\n    // 0 - 1199px\n    @media(max-width: 1199px){\n        max-width: 28rem;\n    }\n    // 0 - 992px\n    @media(max-width: 992px){\n        max-width: 40rem;\n    }\n"]);return v=function(){return n},n}function x(){var n=Object(a.a)(["\n    text-align: left;\n"]);return x=function(){return n},n}function w(){var n=Object(a.a)(["\n    text-align: left;\n\n    // 200+px\n    @media(min-width: 200px){\n        margin-left: 1rem;\n    }\n"]);return w=function(){return n},n}var j=Object(l.c)(f.i)(w()),O=Object(l.c)(f.g)(x()),y=Object(l.c)(c.a)(v()),E=Object(l.c)(c.a)(g()),I=l.c.img(p()),k=l.c.img(h()),N=l.c.img(b());e.default=function(){return i.a.createElement("div",null,i.a.createElement(o.a,null,i.a.createElement("title",null,"About | Grandis Library")),i.a.createElement(s.a,{imageUrl:"".concat(d.d.library,".jpg")}),i.a.createElement(u.a,null,i.a.createElement(j,null,"About"),i.a.createElement(m.a,null,i.a.createElement(y,{md:"auto"},i.a.createElement(O,null,"Who am I?"),i.a.createElement("p",null,"I am Ikasuu, a Hayato in Bera. I used to play on KMS from 2011-2018 before my KMS account went into Protection Mode. Prior to that, I played GMS from 2005 - 2011. If you want to find me in game, I am usually training or chilling at Arcana and Morass"),i.a.createElement(O,null,"What is Grandis Library?"),i.a.createElement("p",null,"Grandis Library is a passion project of mine. What I noticed during my time playing was that information on MapleStory can be hard to find and you need to be continuously playing in order to keep up to date. Additionally, most information is buried within Patch Notes to be lost and forgotten. I wanted to unify and organize the information so that content can be easily found and navigated through for both new and returning players"),i.a.createElement("p",null,"As you will notice from the site, I\u2019ve designed it in a way that the content is comprehensive and easy to maintain so that it does not become outdated. Numbers and values are scarce to remove any complexity and as a part of the maintainability aspect. Links are abundant to help redirect users to other useful resources and information. Overall, I wanted the navigation of the site to be simple and not overwhelming. As a downside, some pages may be very long but, I\u2019ve added Quick Jumps to help navigate through them"),i.a.createElement("p",null,"Information on the site is also catered to GMS players but a lot of the content can also be applied to other servers as well"),i.a.createElement("p",null,"I hope that you find this site to be useful! 8)"),i.a.createElement("p",null,"-Ikasuu")),i.a.createElement(E,{md:"auto"},i.a.createElement(I,{src:"https://i.imgur.com/rzgSbGD.png",alt:"Ikasuu"}),i.a.createElement("p",null,"IGN - Ikasuu ",i.a.createElement(k,{src:"https://i.imgur.com/aE9e6Mh.png",alt:"Bera Icon"})),i.a.createElement("p",null,"Psst, if you'd like to support me, check out my Ko-fi! ;))"),i.a.createElement("a",{href:"https://ko-fi.com/B0B22RS80",target:"_blank",rel:"noreferrer noopener"},i.a.createElement(N,{className:"hvr-buzz-out",src:"https://cdn.ko-fi.com/cdn/kofi1.png?v=2",alt:"Ko-fi"}))))))}},97:function(n,e,t){"use strict";t.d(e,"i",(function(){return w})),t.d(e,"c",(function(){return j})),t.d(e,"g",(function(){return O})),t.d(e,"a",(function(){return y})),t.d(e,"f",(function(){return E})),t.d(e,"d",(function(){return I})),t.d(e,"e",(function(){return k})),t.d(e,"h",(function(){return M})),t.d(e,"b",(function(){return G}));var a=t(21),r=t(0),i=t.n(r),o=t(13),c=t(118),u=t(9);function m(){var n=Object(a.a)(["\n    font-size: 0.9rem;\n    line-height: 1.25rem;\n\n    @media(min-width: 200px){\n        font-size: 0.8rem;\n    }\n    @media(min-width: 430px){\n        font-size: 0.85rem;\n    }\n    @media(min-width: 800px){\n        font-size: 0.9rem;\n    }\n"]);return m=function(){return n},n}function l(){var n=Object(a.a)(["\n    font-size: 1.15rem;\n"]);return l=function(){return n},n}function d(){var n=Object(a.a)(["\n    min-width: 8rem;\n    margin: 0.5rem;\n\n    @media(min-width: 200px){\n        max-width: 100%;\n    }\n    @media(min-width: 400px){\n        max-width: 45%;\n    }\n    @media(min-width: 800px){\n        max-width: 30%;\n    }\n    @media(min-width: 1100px){\n        max-width: 23%;\n    }\n    @media(min-width: 1500px){\n        max-width: 23.5%;\n    }\n"]);return d=function(){return n},n}function s(){var n=Object(a.a)(["\n    max-width: 80%;\n    margin-left: auto;\n    margin-right: auto;\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: start;\n\n    @media(min-width: 200px){\n        max-width: 100%;\n    }\n    @media(min-width: 500px){\n        padding: 0 0 0 0.5rem;\n        max-width: 90%;\n    }\n    @media(min-width: 800px){\n        padding: 0 0 0 2.5rem;\n        max-width: 80%;\n    }\n"]);return s=function(){return n},n}function f(){var n=Object(a.a)(["\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border-radius: 1rem;\n    top: 0;\n    left: 0;\n    background: rgb(0,0,0);\n    background: linear-gradient(145deg, rgba(0,0,0,1) 3%, rgba(107,107,107,0) 100%); \n    opacity: 0.8;\n"]);return f=function(){return n},n}function b(){var n=Object(a.a)(["\n    position: absolute;\n    width: 100%;\n    height: inherit;\n    top: 0;\n    left: 0;\n    background-color: #2a2829;\n    opacity: 0.2;\n"]);return b=function(){return n},n}function h(){var n=Object(a.a)(["\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n"]);return h=function(){return n},n}function p(){var n=Object(a.a)(["\n    text-align: center;\n    margin-top: 2.5rem;\n    margin-bottom: 1.5rem;\n    font-size: 1.08rem;\n"]);return p=function(){return n},n}function g(){var n=Object(a.a)(["\n    text-align: center;\n    margin-top: 2rem;\n    margin-bottom: 2.5rem;\n    font-size: 2.5rem;\n"]);return g=function(){return n},n}function v(){var n=Object(a.a)(["\n    margin-top: 1rem;\n    margin-bottom: 2.5rem;\n    font-size: 3.5rem;\n"]);return v=function(){return n},n}function x(){var n=Object(a.a)(["\n    text-align: center;\n    margin-bottom: 3rem;\n    font-size: 3.5rem;\n"]);return x=function(){return n},n}var w=o.c.h1(x()),j=o.c.h1(v()),O=o.c.h2(g()),y=o.c.p(p()),E=o.c.div(h()),I=o.c.div(b()),k=o.c.div(f()),N=o.c.div(s()),P=Object(o.c)(c.a)(d()),z=Object(o.c)(c.a.Title)(l()),C=Object(o.c)(c.a.Text)(m());function M(n){var e=n.url;return i.a.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer"},e)}function G(n){var e=n.content,t=n.type;return i.a.createElement(N,null,e.map((function(n){return i.a.createElement(P,null,i.a.createElement(u.Link,{to:"".concat(t,"/").concat(n[0])},i.a.createElement(c.a.Img,{variant:"top",src:"".concat("/GrandisLibrary","/thumbnail/").concat(n[0],".png"),alt:n[1]})),i.a.createElement(c.a.Body,null,i.a.createElement(u.Link,{to:"".concat(t,"/").concat(n[0])},i.a.createElement(z,null,n[1])),i.a.createElement(C,null,n[2])))})))}}}]);
//# sourceMappingURL=12.307c217b.chunk.js.map