(this.webpackJsonpgrandislibrary=this.webpackJsonpgrandislibrary||[]).push([[13],{195:function(e,a,t){"use strict";t.r(a),t.d(a,"DamageSkin",(function(){return v}));var n=t(99),i=t(100),r=t(102),c=t(101),l=t(0),s=t.n(l),u=t(109),o=t.n(u),m=t(110),f=t.n(m),d=t(38),h=t(31),g=t(93),v=(t(95),function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(e){var i;return Object(n.a)(this,t),(i=a.call(this,e)).state={data:{},loading:!0,fail:!1},i}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("./data/DamageSkin.img.json").then((function(e){return e.json()})).then((function(a){e.setState({data:a,loading:!1,fail:!1},e.fetchDamageSkin)})).catch((function(a){return e.setState({fail:!0})}))}},{key:"fetchDamageSkin",value:function(){this.state.data.children.forEach((function(e){f()(o.a,{retries:5})}))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(d.a,null,s.a.createElement("title",null,"Damage Skin | Grandis Library")),s.a.createElement(g.a,{imageUrl:"".concat(h.d.ristonia,".jpg")}),s.a.createElement("h1",{className:"page-title"},"Damage Skin"))}}]),t}(l.Component));a.default=v},93:function(e,a,t){"use strict";var n=t(0),i=t.n(n),r=t(103);t(94);a.a=function(e){return i.a.createElement("div",{className:"outer-box"},i.a.createElement("div",{className:"header-box"},i.a.createElement(r.a,{fluid:!0,className:"header",src:e.imageUrl}),i.a.createElement("div",{className:"overlay"})))}},94:function(e,a,t){},95:function(e,a,t){}}]);
//# sourceMappingURL=13.82f62686.chunk.js.map