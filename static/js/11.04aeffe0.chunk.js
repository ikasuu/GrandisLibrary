(this.webpackJsonpgrandislibrary=this.webpackJsonpgrandislibrary||[]).push([[11],{142:function(e,a,t){},145:function(e,a,t){},209:function(e,a,t){"use strict";t.r(a),t.d(a,"Home",(function(){return N}));var n=t(99),r=t(100),l=t(102),c=t(101),i=t(0),s=t.n(i),o=t(117),m=t(103),u=t(206),d=t(189),g=t(202),E=t(186),p=t(187),v=t(188),f=(t(142),t(31)),h=t(9);var b=function(e){return s.a.createElement("div",{className:"grid-wrapper"},s.a.createElement(h.Link,{to:e.linkTo},s.a.createElement(m.a,{className:"grid-image",src:e.imageUrl}),s.a.createElement("div",{className:"grid-overlay"}),s.a.createElement("div",{className:"grid-text"},s.a.createElement("h3",{className:"grid-title"},e.text))))};var k=function(){return s.a.createElement("div",{className:"grid-flex-container"},s.a.createElement(b,{text:"Content",linkTo:"/content",imageUrl:"".concat(f.d.ristonia,".png")}),s.a.createElement(b,{text:"Classes",linkTo:"/classes",imageUrl:"".concat(f.d.verdel,".png")}),s.a.createElement(b,{text:"Events",linkTo:"/events",imageUrl:"".concat(f.d.fox,".png")}),s.a.createElement(b,{text:"Resources",linkTo:"/resources",imageUrl:"".concat(f.d.grandis,".png")}))},y=t(92);t(116),t(143),t(144),t(145);g.a.use([E.a,p.a,v.a]);var N=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={data:{},loading:!0,fail:!1},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("./data/home-content.json").then((function(e){return e.json()})).then((function(a){return e.setState({data:a,loading:!1,fail:!1})})).catch((function(a){return e.setState({fail:!0})}))}},{key:"render",value:function(){var e=this.state,a=e.loading,t=e.fail,n=e.data;return s.a.createElement("div",null,a?s.a.createElement("div",null,s.a.createElement(y.a,{imageUrl:"".concat(f.d.library,".jpg")}),s.a.createElement(o.a,null,t?s.a.createElement("h3",null,"Looks like there was an error in the URL you entered, the page you are looking for may be moved or deleted."):"")):s.a.createElement("div",{style:{marginTop:"-1rem"}},s.a.createElement(k,null),s.a.createElement(o.a,null,s.a.createElement("h2",null,"Featured Content"),s.a.createElement("h2",null,"Upcoming Updates"),s.a.createElement(u.a,{autoplay:{delay:2500,disableOnInteraction:!1},pagination:{clickable:!0},spaceBetween:30,slidesPerView:2,navigation:!0,centeredSlides:!0,loop:!0,breakpoints:{360:{slidesPerView:1},991:{slidesPerView:2}}},n.upcoming.map((function(e){return s.a.createElement(d.a,{className:"content-slide"},s.a.createElement("a",{href:e.link,target:"_blank",rel:"noreferrer noopener"},s.a.createElement(m.a,{className:"content-image",src:e.image,alt:e.alt,fluid:!0}),s.a.createElement("div",{className:"content-overlay"}),s.a.createElement("span",{className:"content-launch",style:{background:'url("'.concat("/GrandisLibrary",'/icons/launch-white-18dp.svg")')}}),s.a.createElement("p",{className:"content-title"},e.title),s.a.createElement("p",{className:"content-subtitle"},e.date)))}))),s.a.createElement("h2",null,"Popular Content"),s.a.createElement("h2",null,"Popular Classes"))))}}]),t}(i.Component);a.default=N},92:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(103);t(93);a.a=function(e){return r.a.createElement("div",{className:"outer-box"},r.a.createElement("div",{className:"header-box"},r.a.createElement(l.a,{fluid:!0,className:"header",src:e.imageUrl}),r.a.createElement("div",{className:"overlay"})))}},93:function(e,a,t){}}]);
//# sourceMappingURL=11.04aeffe0.chunk.js.map