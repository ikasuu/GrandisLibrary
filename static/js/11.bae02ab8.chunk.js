(this.webpackJsonpgrandislibrary=this.webpackJsonpgrandislibrary||[]).push([[11],{103:function(e,a,t){"use strict";t.d(a,"b",(function(){return u}));var n=t(1),r=t(2),c=t(4),l=t.n(c),i=t(0),o=t.n(i),s=t(3),m=t.n(s),d=t(5),u={bsPrefix:m.a.string,fluid:m.a.bool,rounded:m.a.bool,roundedCircle:m.a.bool,thumbnail:m.a.bool},b=o.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,i=e.fluid,s=e.rounded,m=e.roundedCircle,u=e.thumbnail,b=Object(r.a)(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);t=Object(d.a)(t,"img");var f=l()(i&&t+"-fluid",s&&"rounded",m&&"rounded-circle",u&&t+"-thumbnail");return o.a.createElement("img",Object(n.a)({ref:a},b,{className:l()(c,f)}))}));b.displayName="Image",b.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},a.a=b},105:function(e,a,t){"use strict";var n=t(1),r=t(0),c=t.n(r),l=t(4),i=t.n(l);a.a=function(e){return c.a.forwardRef((function(a,t){return c.a.createElement("div",Object(n.a)({},a,{ref:t,className:i()(a.className,e)}))}))}},140:function(e,a,t){"use strict";var n=t(1),r=t(2),c=t(4),l=t.n(c),i=t(0),o=t.n(i),s=t(5),m=t(38),d=t(105),u=t(42),b=o.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,i=e.variant,m=e.as,d=void 0===m?"img":m,u=Object(r.a)(e,["bsPrefix","className","variant","as"]),b=Object(s.a)(t,"card-img");return o.a.createElement(d,Object(n.a)({ref:a,className:l()(i?b+"-"+i:b,c)},u))}));b.displayName="CardImg",b.defaultProps={variant:null};var f=b,E=Object(d.a)("h5"),v=Object(d.a)("h6"),N=Object(m.a)("card-body"),p=Object(m.a)("card-title",{Component:E}),g=Object(m.a)("card-subtitle",{Component:v}),h=Object(m.a)("card-link",{Component:"a"}),j=Object(m.a)("card-text",{Component:"p"}),x=Object(m.a)("card-header"),O=Object(m.a)("card-footer"),y=Object(m.a)("card-img-overlay"),P=o.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,m=e.bg,d=e.text,b=e.border,f=e.body,E=e.children,v=e.as,p=void 0===v?"div":v,g=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),h=Object(s.a)(t,"card"),j=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:h+"-header"}}),[h]);return o.a.createElement(u.a.Provider,{value:j},o.a.createElement(p,Object(n.a)({ref:a},g,{className:l()(c,h,m&&"bg-"+m,d&&"text-"+d,b&&"border-"+b)}),f?o.a.createElement(N,null,E):E))}));P.displayName="Card",P.defaultProps={body:!1},P.Img=f,P.Title=p,P.Subtitle=g,P.Body=N,P.Link=h,P.Text=j,P.Header=x,P.Footer=O,P.ImgOverlay=y;a.a=P},199:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(140),l=t(9),i=t(39),o=t(31),s=t(92);t(96);a.default=function(){return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement("title",null,"Events | Grandis Library")),r.a.createElement(s.a,{imageUrl:"".concat(o.a.fox,".jpg")}),r.a.createElement("h1",{className:"page-title"},"Events"),r.a.createElement("h2",{className:"page-subtitle"},"Training Related"),r.a.createElement("div",{className:"content-container"},o.f.training.map((function(e){return r.a.createElement(c.a,{className:"content-card"},r.a.createElement(l.Link,{to:"content/".concat(e[0])},r.a.createElement(c.a.Img,{variant:"top",src:"".concat("/GrandisLibrary","/thumbnail/").concat(e[0],".png"),alt:e[1]})),r.a.createElement(c.a.Body,null,r.a.createElement(l.Link,{to:"content/".concat(e[0])},r.a.createElement(c.a.Title,{className:"content-card-title"},e[1])),r.a.createElement(c.a.Text,{className:"content-card-text"},e[2])))}))),r.a.createElement("h2",{className:"page-subtitle"},"Item Related"),r.a.createElement("div",{className:"content-container"},o.f.item.map((function(e){return r.a.createElement(c.a,{className:"content-card"},r.a.createElement(l.Link,{to:"content/".concat(e[0])},r.a.createElement(c.a.Img,{variant:"top",src:"".concat("/GrandisLibrary","/thumbnail/").concat(e[0],".png"),alt:e[1]})),r.a.createElement(c.a.Body,null,r.a.createElement(l.Link,{to:"content/".concat(e[0])},r.a.createElement(c.a.Title,{className:"content-card-title"},e[1])),r.a.createElement(c.a.Text,{className:"content-card-text"},e[2])))}))),r.a.createElement("h2",{className:"page-subtitle"},"Update Related"),r.a.createElement("div",{className:"content-container"},o.f.update.map((function(e){return r.a.createElement(c.a,{className:"content-card"},r.a.createElement(l.Link,{to:"content/".concat(e[0])},r.a.createElement(c.a.Img,{variant:"top",src:"".concat("/GrandisLibrary","/thumbnail/").concat(e[0],".png"),alt:e[1]})),r.a.createElement(c.a.Body,null,r.a.createElement(l.Link,{to:"content/".concat(e[0])},r.a.createElement(c.a.Title,{className:"content-card-title"},e[1])),r.a.createElement(c.a.Text,{className:"content-card-text"},e[2])))}))))}},92:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(103);t(93);a.a=function(e){return r.a.createElement("div",{className:"outer-box"},r.a.createElement("div",{className:"header-box"},r.a.createElement(c.a,{fluid:!0,className:"header",src:e.imageUrl}),r.a.createElement("div",{className:"overlay"})))}},93:function(e,a,t){},96:function(e,a,t){}}]);
//# sourceMappingURL=11.bae02ab8.chunk.js.map