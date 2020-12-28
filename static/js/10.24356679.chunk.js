(this.webpackJsonpgrandislibrary=this.webpackJsonpgrandislibrary||[]).push([[10],{102:function(e,n,t){"use strict";t.d(n,"b",(function(){return m}));var a=t(1),r=t(2),i=t(4),o=t.n(i),c=t(0),l=t.n(c),u=t(3),d=t.n(u),s=t(5),m={bsPrefix:d.a.string,fluid:d.a.bool,rounded:d.a.bool,roundedCircle:d.a.bool,thumbnail:d.a.bool},f=l.a.forwardRef((function(e,n){var t=e.bsPrefix,i=e.className,c=e.fluid,u=e.rounded,d=e.roundedCircle,m=e.thumbnail,f=Object(r.a)(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);t=Object(s.a)(t,"img");var h=o()(c&&t+"-fluid",u&&"rounded",d&&"rounded-circle",m&&t+"-thumbnail");return l.a.createElement("img",Object(a.a)({ref:n},f,{className:o()(i,h)}))}));f.displayName="Image",f.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},n.a=f},103:function(e,n,t){"use strict";var a=t(1),r=t(2),i=t(4),o=t.n(i),c=t(0),l=t.n(c),u=t(5),d=t(39),s=t(94),m=t(40),f=l.a.forwardRef((function(e,n){var t=e.bsPrefix,i=e.className,c=e.variant,d=e.as,s=void 0===d?"img":d,m=Object(r.a)(e,["bsPrefix","className","variant","as"]),f=Object(u.a)(t,"card-img");return l.a.createElement(s,Object(a.a)({ref:n,className:o()(c?f+"-"+c:f,i)},m))}));f.displayName="CardImg",f.defaultProps={variant:null};var h=f,b=Object(s.a)("h5"),g=Object(s.a)("h6"),p=Object(d.a)("card-body"),v=Object(d.a)("card-title",{Component:b}),w=Object(d.a)("card-subtitle",{Component:g}),x=Object(d.a)("card-link",{Component:"a"}),y=Object(d.a)("card-text",{Component:"p"}),j=Object(d.a)("card-header"),O=Object(d.a)("card-footer"),E=Object(d.a)("card-img-overlay"),k=l.a.forwardRef((function(e,n){var t=e.bsPrefix,i=e.className,d=e.bg,s=e.text,f=e.border,h=e.body,b=e.children,g=e.as,v=void 0===g?"div":g,w=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),x=Object(u.a)(t,"card"),y=Object(c.useMemo)((function(){return{cardHeaderBsPrefix:x+"-header"}}),[x]);return l.a.createElement(m.a.Provider,{value:y},l.a.createElement(v,Object(a.a)({ref:n},w,{className:o()(i,x,d&&"bg-"+d,s&&"text-"+s,f&&"border-"+f)}),h?l.a.createElement(p,null,b):b))}));k.displayName="Card",k.defaultProps={body:!1},k.Img=h,k.Title=v,k.Subtitle=w,k.Body=p,k.Link=x,k.Text=y,k.Header=j,k.Footer=O,k.ImgOverlay=E;n.a=k},111:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return r}));var a={gameplay:[["progression-guide","Progression Guide","A guide to important content such as equipment, bosses, training maps, quests and 5th Job Advancement"],["boss-matchmaking-pre-quests","Boss Pre-quests","An explanation on how to unlock access to each of the bosses in the Boss Matchmaking System"],["level-content-guide","Level Content Guide","An in-depth guide to recommended and optional content and training spots available at each level"]],class:[["stat-terms","Stat Terms","An explanation of each stat in the Character Stat UI and other special stats"],["attack-speed","Attack Speed","An explanation of Attack Speed and the difference between Soft Cap and Hard Cap attack speed"],["link-skills","Link Skills","An explanation of Link Skills and a list of all Link Skills and their Master Levels and effects"]],equipment:[["shared-cash-shop-inventories","Shared Cash Shop Inventories","A list of all classes that share Cash Shop inventories"],["upgrading-enhancing-equipment","Upgrading & Enhancing Equipment","An explanation on the different possible ways to upgrade and enhance your gear"]]},r={training:[["burning-world","Burning World","Burning World is a temporary world that has special benefits for all characters in this world"],["who-to-tera-burn","Who to Tera Burn","A guide to help you choose a character to Tera Burn based on good Link Skills and Legion bonuses"],["tera-burning","Tera Burning","An event where NEWLY created characters after level 10 gain 2 extra levels for every level up until level 200"],["mega-burning","Mega Burning","An event where created characters after level 10 gain 2 extra levels for every level up until level 150"]],item:[["maple-relay","Maple Relay","Maple Relay is an event where you receive rewards for simply staying online. Obtain gifts daily and at each milestone"],["maplehood-watch","Maplehood Watch","An event where players can earn free cash items. The event lasts for two weeks and each week has 3 special days with free gifts"],["synergy-ring","Synergy Ring","An event ring that gains increased stats depending on how many characters you have the ring equipped on the same world"],["chaos-ring","Chaos Ring","An event ring that has allows you to reroll the ring\u2019s stats and potential for free a fixed number of times each week"]],update:[["update-timeline-overview","Update Timeline Overview","Looking to catch up? Take a look at an overview of every update so far from Big Bang to the current update"]]}},190:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(41),o=t(32),c=t(92),l=t(111),u=t(91);n.default=function(){return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement("title",null,"Content | Grandis Library")),r.a.createElement(c.a,{imageUrl:"".concat(o.a.ristonia,".jpg")}),r.a.createElement(u.g,null,"Content"),r.a.createElement(u.f,null,"Gameplay Related"),r.a.createElement(u.b,{content:l.a.gameplay}),r.a.createElement(u.f,null,"Class Related"),r.a.createElement(u.b,{content:l.a.class}),r.a.createElement(u.f,null,"Equipment Related"),r.a.createElement(u.b,{content:l.a.equipment}))}},91:function(e,n,t){"use strict";t.d(n,"g",(function(){return w})),t.d(n,"f",(function(){return x})),t.d(n,"a",(function(){return y})),t.d(n,"e",(function(){return j})),t.d(n,"c",(function(){return O})),t.d(n,"d",(function(){return E})),t.d(n,"b",(function(){return S}));var a=t(21),r=t(0),i=t.n(r),o=t(13),c=t(103),l=t(9);function u(){var e=Object(a.a)(["\n    font-size: 0.9rem;\n    line-height: 1.25rem;\n\n    @media(min-width: 200px){\n        font-size: 0.8rem;\n    }\n    @media(min-width: 430px){\n        font-size: 0.85rem;\n    }\n    @media(min-width: 800px){\n        font-size: 0.9rem;\n    }\n"]);return u=function(){return e},e}function d(){var e=Object(a.a)(["\n    font-size: 1.15rem;\n"]);return d=function(){return e},e}function s(){var e=Object(a.a)(["\n    min-width: 8rem;\n    margin: 0.5rem;\n\n    @media(min-width: 200px){\n        max-width: 100%;\n    }\n    @media(min-width: 400px){\n        max-width: 45%;\n    }\n    @media(min-width: 800px){\n        max-width: 30%;\n    }\n    @media(min-width: 1100px){\n        max-width: 23%;\n    }\n    @media(min-width: 1500px){\n        max-width: 23.5%;\n    }\n"]);return s=function(){return e},e}function m(){var e=Object(a.a)(["\n    max-width: 80%;\n    margin-left: auto;\n    margin-right: auto;\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: start;\n\n    @media(min-width: 200px){\n        max-width: 100%;\n    }\n    @media(min-width: 500px){\n        padding: 0 0 0 0.5rem;\n        max-width: 90%;\n    }\n    @media(min-width: 800px){\n        padding: 0 0 0 2.5rem;\n        max-width: 80%;\n    }\n"]);return m=function(){return e},e}function f(){var e=Object(a.a)(["\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border-radius: 1rem;\n    top: 0;\n    left: 0;\n    background: rgb(0,0,0);\n    background: linear-gradient(145deg, rgba(0,0,0,1) 3%, rgba(107,107,107,0) 100%); \n    opacity: 0.8;\n"]);return f=function(){return e},e}function h(){var e=Object(a.a)(["\n    position: absolute;\n    width: 100%;\n    height: inherit;\n    top: 0;\n    left: 0;\n    background-color: #2a2829;\n    opacity: 0.2;\n"]);return h=function(){return e},e}function b(){var e=Object(a.a)(["\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n"]);return b=function(){return e},e}function g(){var e=Object(a.a)(["\n    text-align: center;\n    margin-top: 2.5rem;\n    margin-bottom: 1.5rem;\n    font-size: 1.08rem;\n"]);return g=function(){return e},e}function p(){var e=Object(a.a)(["\n    text-align: center;\n    margin-top: 2rem;\n    margin-bottom: 2.5rem;\n    font-size: 2.5rem;\n"]);return p=function(){return e},e}function v(){var e=Object(a.a)(["\n    text-align: center;\n    margin-bottom: 3rem;\n    font-size: 3.5rem;\n"]);return v=function(){return e},e}var w=o.c.h1(v()),x=o.c.h2(p()),y=o.c.p(g()),j=o.c.div(b()),O=o.c.div(h()),E=o.c.div(f()),k=o.c.div(m()),C=Object(o.c)(c.a)(s()),A=Object(o.c)(c.a.Title)(d()),N=Object(o.c)(c.a.Text)(u());function S(e){var n=e.content;return i.a.createElement(k,null,n.map((function(e){return i.a.createElement(C,null,i.a.createElement(l.Link,{to:"content/".concat(e[0])},i.a.createElement(c.a.Img,{variant:"top",src:"".concat("/GrandisLibrary","/thumbnail/").concat(e[0],".png"),alt:e[1]})),i.a.createElement(c.a.Body,null,i.a.createElement(l.Link,{to:"content/".concat(e[0])},i.a.createElement(A,null,e[1])),i.a.createElement(N,null,e[2])))})))}},92:function(e,n,t){"use strict";var a=t(21),r=t(0),i=t.n(r),o=t(102),c=t(13),l=t(91);function u(){var e=Object(a.a)(["\n    width: 100%;\n    height: 100%;\n    object-position: 50% 75%;\n    object-fit: cover;\n    box-sizing: border-box;\n"]);return u=function(){return e},e}function d(){var e=Object(a.a)(["\n    height: 20rem;\n"]);return d=function(){return e},e}function s(){var e=Object(a.a)(["\n    margin-bottom: 4rem;\n"]);return s=function(){return e},e}var m=c.c.div(s()),f=c.c.div(d()),h=Object(c.c)(o.a)(u());n.a=function(e){return i.a.createElement(m,null,i.a.createElement(f,null,i.a.createElement(h,{fluid:!0,src:e.imageUrl}),i.a.createElement(l.c,null)))}},94:function(e,n,t){"use strict";var a=t(1),r=t(0),i=t.n(r),o=t(4),c=t.n(o);n.a=function(e){return i.a.forwardRef((function(n,t){return i.a.createElement("div",Object(a.a)({},n,{ref:t,className:c()(n.className,e)}))}))}}}]);
//# sourceMappingURL=10.24356679.chunk.js.map