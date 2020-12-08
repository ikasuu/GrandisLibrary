(this.webpackJsonpgrandislibrary=this.webpackJsonpgrandislibrary||[]).push([[8],{135:function(e,t,a){},169:function(e,t,a){},195:function(e,t,a){"use strict";a.r(t),a.d(t,"ClassOverview",(function(){return me}));var n=a(99),l=a(100),r=a(102),c=a(101),s=a(0),i=a.n(s),o=a(31),m=a(94),u=a(115),E=a(184),d=a(171),f=a(201),p=a(88),h=a(106),v=a.n(h),y=a(107),k=a.n(y),b=a(108),g=a.n(b),N=a(109),w=a.n(N),S=a(103),D=a(23),L=a(200),j=a(183),x=a(194),C=a(168);a(169);function B(e){var t=e.animation,a=e.name,n=Object(s.useState)(!1),l=Object(D.a)(n,2),r=l[0],c=l[1];return i.a.createElement("span",null,i.a.createElement(L.a.Img,{className:"animation",variant:"top",src:t,onClick:function(){return c(!0)}}),i.a.createElement(x.a,{centered:!0,show:r,onHide:function(){return c(!1)},"aria-labelledby":"notable-skill",size:"lg"},i.a.createElement(x.a.Header,{closeButton:!0},i.a.createElement(x.a.Title,{id:"notable-skill"},a)),i.a.createElement(x.a.Body,null,i.a.createElement(S.a,{fluid:!0,src:t,className:"modal-animation"}))))}var O=function(e){var t=e.skillData,a=e.name,n=e.shortDesc,l=e.properties,r=e.maxLevel,c=function(e,t){var a=Object.entries(e),n={};a.forEach((function(e){e[1].includes("]")||"action"===e[0]||"memo_PL"===e[0]||"Image<Rgba32>: 32x32"===e[1]||(n[e[0]]=C.a.evaluate(e[1],{x:t,d:Math.floor,u:Math.ceil,y:1}))})),n.cooltimeMS&&(n.cooltimeMS=.001*n.cooltimeMS);return n}(l,r);return i.a.createElement(L.a,{className:"skill-body"},i.a.createElement(L.a.Body,null,t.animations&&t.animations.map((function(e,t){return i.a.createElement(B,{key:t,animation:e,name:a})})),i.a.createElement(L.a.Title,null,t.icons.map((function(e,t){return i.a.createElement("img",{key:t,className:"icon",src:e,alt:""})})),i.a.createElement("strong",{className:"skill-name"},a),i.a.createElement(j.a,{variant:"secondary",className:"badge"},t.type),t.reqLev&&i.a.createElement(j.a,{variant:"secondary",className:"badge"},"Lv. ",t.reqLev)),i.a.createElement(L.a.Subtitle,{className:"master-level"},i.a.createElement("em",null,"Master Level: ",r)),t.desc&&i.a.createElement(L.a.Text,null,k()(v.a.sanitize(t.desc))),t.details&&i.a.createElement("div",{className:"skill-detail"},i.a.createElement("ul",null,t.details.map((function(e,t){return i.a.createElement("li",{key:t},k()(v.a.sanitize(e)))})))),i.a.createElement("div",null,n?n.replace(/#(\w+)/g,(function(e,t){return c[t]||e})).replaceAll("#c","").replaceAll("#z","0").replaceAll("#","").replaceAll("mpCon","0").replaceAll("\\r","").replaceAll("\\N","\\n").replaceAll("\\c","").split("\\n").map((function(e){return i.a.createElement(L.a.Subtitle,{as:"p",className:"mb-2 text-muted short-desc"},e)})):null)))},z=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).state={retrievedData:[],skillData:e.skillData,loading:!0},l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.state.skillData;this._isMounted=!0;var a=[],n=[],l=[];w()(g.a,{retries:5}),t.forEach((function(e,t){e.offline?l.push([e,t]):a.push(g.a.get("https://maplestory.io/api/GMS/".concat(o.g,"/job/skill/").concat(e.id)))})),g.a.all(a).then((function(t){t.forEach((function(e){return n.push(e.data)})),l.forEach((function(e){return n.splice(e[1],0,e[0])})),e._isMounted&&e.setState({retrievedData:n,loading:!1})})).catch((function(e){return console.log(e)}))}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this,t=this.state,a=t.loading,n=t.retrievedData;return i.a.createElement("div",null,a?i.a.createElement("div",{style:{margin:"2rem 0% 2rem 45%"}},i.a.createElement(S.a,{src:o.e}),i.a.createElement("div",{style:{paddingLeft:"0.5rem"}},"Loading!")):i.a.createElement("div",null,n.map((function(t,a){return t.offline?i.a.createElement("div",{key:a},i.a.createElement(O,{skillData:t,name:t.name,properties:{},shortDesc:t.shortDesc,maxLevel:t.maxLevel})):i.a.createElement("div",{key:a},i.a.createElement(O,{skillData:e.state.skillData[a],name:t.description.name,desc:t.description.desc,shortDesc:t.description.shortDesc,properties:t.properties,levelProperties:t.levelProperties,maxLevel:t.properties.maxLevel}))})),i.a.createElement(p.a,{variant:"link"},i.a.createElement(u.HashLink,{smooth:!0,to:"#skill",scroll:function(e){return G(e)}},i.a.createElement("span",{className:"jump-button"})))))}}]),a}(s.Component);function I(e){var t=e.skillData;return i.a.createElement("div",null,t.map((function(e){return i.a.createElement("div",{key:e.id},i.a.createElement(O,{skillData:e,name:e.name,properties:{},shortDesc:e.shortDesc,maxLevel:"25 + 5"}))})))}var G=function(e){var t=e.getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:t+-80,behavior:"smooth"})};function A(e){var t=[];return e.fifthCommon.forEach((function(e){return t.push(o.c[e])})),t}var P=function(e){var t=e.primary,a=e.fifth,n=e.hyper,l=e.hyperSkillBuild,r=e.nodeInfo;return i.a.createElement(d.a,null,i.a.createElement("h2",null,"Skill Information"),i.a.createElement(f.a,null,function(e){return e.map((function(e,t){return i.a.createElement(E.a,{eventKey:e[0],title:e[0],key:t},i.a.createElement(z,{skillData:e[1]}))}))}(t),i.a.createElement(E.a,{eventKey:"fifth",title:"5th Job"},i.a.createElement("h4",null,"Recommended Skills for Boost Nodes"),i.a.createElement(d.a,null,k()(v.a.sanitize(r.recommended))),i.a.createElement("ul",null),i.a.createElement("h4",null,"All Possible Skills Obtainable for Boost Nodes"),i.a.createElement(d.a,null,k()(v.a.sanitize(r.possible))),i.a.createElement("h3",null,"Common V Skills"),i.a.createElement(I,{skillData:A(a)}),i.a.createElement("h3",null,"Class Specific V Skills"),i.a.createElement(I,{skillData:a.fifthMain}),i.a.createElement(p.a,{variant:"link"},i.a.createElement(u.HashLink,{smooth:!0,to:"#skill",scroll:function(e){return function(e){var t=e.getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:t+-80,behavior:"smooth"})}(e)}},i.a.createElement("span",{className:"jump-button"})))),i.a.createElement(E.a,{eventKey:"hyper",title:"Hyper Skills"},i.a.createElement("h3",null,"Passive Build"),k()(v.a.sanitize(l.recommended)),i.a.createElement("h3",null,"Passive Skills"),i.a.createElement(z,{skillData:n.hyperPassive}),i.a.createElement("h3",null,"Active Skills"),i.a.createElement(z,{skillData:n.hyperActive}))))},M=a(89),T=a(90),R=a(186),_=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).state={retrievedData:[],skillData:e.skillData,loading:!0},l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.state.skillData;this._isMounted=!0,w()(g.a,{retries:3}),g.a.get("https://maplestory.io/api/GMS/".concat(o.g,"/job/skill/").concat(t.id)).then((function(t){if(e._isMounted){var a=[];a.push(t.data),e.setState({retrievedData:a,loading:!1})}})).catch((function(e){return console.log(e)}))}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this,t=this.state,a=t.loading,n=t.retrievedData;return i.a.createElement("div",null,a?i.a.createElement("div",{style:{margin:"2rem 40% 2rem 40%"}},i.a.createElement(S.a,{src:o.e}),i.a.createElement("div",{style:{paddingLeft:"0.5rem"}},"Loading!")):i.a.createElement("div",null,n.map((function(t,a){return i.a.createElement("div",{key:t.description.id},i.a.createElement(O,{skillData:e.state.skillData,name:t.description.name,desc:t.description.desc,shortDesc:t.description.shortDesc,properties:t.properties,maxLevel:t.properties.maxLevel}))}))))}}]),a}(s.Component);function F(e){var t=e.linkSkill;return i.a.createElement("div",null,i.a.createElement("h2",null,"Link Skill"),i.a.createElement(_,{skillData:t}))}function H(e){var t=e.skill,a=Object(s.useState)(!1),n=Object(D.a)(a,2),l=n[0],r=n[1];return i.a.createElement("span",null,i.a.createElement(S.a,{src:t.icons[0],className:"hvr-grow",style:{margin:"0 0.25rem 0.5rem 0.25rem",cursor:"pointer"},onClick:function(){return r(!0)}}),i.a.createElement(x.a,{centered:!0,show:l,onHide:function(){return r(!1)},"aria-labelledby":"notable-skill",size:"lg"},i.a.createElement(x.a.Header,{closeButton:!0},i.a.createElement(x.a.Title,{id:"notable-skill"},t.name)),i.a.createElement(x.a.Body,null,i.a.createElement(S.a,{src:t.animations[0],style:{width:"100%",backgroundImage:"url(https://www.publicdomainpictures.net/pictures/30000/velka/plain-white-background.jpg)"}}))))}var V=a(197),q=a(185);var U=function(e){var t=e.tooltip;return i.a.createElement(V.a,{placement:"top",overlay:i.a.createElement(q.a,{style:{zIndex:"1"}},t)},i.a.createElement(p.a,{variant:"link"},i.a.createElement("span",{className:"info-button"})))};a(135);function J(e){var t=e.content;return i.a.createElement("div",{className:"class-property"},i.a.createElement("h2",null,"Class Properties"),i.a.createElement(d.a,null,i.a.createElement(R.a,{borderless:!0},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("th",null,i.a.createElement("strong",null,"Class Group")),i.a.createElement("td",null,t.classGroup)),i.a.createElement("tr",null,i.a.createElement("th",null,i.a.createElement("strong",null,"Job Group")),i.a.createElement("td",null,t.jobGroup)),i.a.createElement("tr",null,i.a.createElement("th",null,i.a.createElement("strong",null,"Primary Stat")),i.a.createElement("td",null,t.mainStat)),i.a.createElement("tr",null,i.a.createElement("th",null,i.a.createElement("strong",null,"Secondary Stat")),i.a.createElement("td",null,t.secondaryStat)),i.a.createElement("tr",null,i.a.createElement("th",null,i.a.createElement("strong",null,"Legion Bonus")),i.a.createElement("td",null,t.legion)),i.a.createElement("tr",null,i.a.createElement("th",null,i.a.createElement("strong",null,"Primary Weapon")),i.a.createElement("td",null,t.equipment[0].weapon.map((function(e){return i.a.createElement(M.a,{key:e,style:{marginBottom:"0.2rem"}},i.a.createElement(T.a,null,i.a.createElement(S.a,{src:o.j[e][0],style:{verticalAlign:"middle"}})," ",o.j[e][1]))})))),i.a.createElement("tr",null,i.a.createElement("th",null,i.a.createElement("strong",null,"Secondary Weapon")),i.a.createElement("td",null,t.equipment[1].secondary.map((function(e){return i.a.createElement(M.a,{key:e,style:{marginBottom:"0.2rem"}},i.a.createElement(T.a,null,i.a.createElement(S.a,{src:o.f[e][0],style:{verticalAlign:"middle"}})," ",o.f[e][1]))})))),t.equipment[2]&&i.a.createElement("tr",null,i.a.createElement("th",null,i.a.createElement("strong",null,"Ammo")),i.a.createElement("td",null,i.a.createElement("div",null,i.a.createElement(S.a,{src:o.i[t.equipment[2].ammo][0],style:{verticalAlign:"middle"}})," ",o.i[t.equipment[2].ammo][1])))))))}function K(e){var t=e.skills,a=e.classType;return i.a.createElement("div",{style:{paddingLeft:"0.5rem"}},i.a.createElement("h5",null,"Notable Skills"),t.map((function(e){return i.a.createElement(H,{key:e.name,skill:e})})),i.a.createElement("h5",null,"Class Type"),i.a.createElement("ul",null,a.map((function(e){return i.a.createElement("li",{key:e},e)}))))}function W(e){var t=e.pros,a=e.cons;return i.a.createElement("div",{className:"pros-cons-container"},i.a.createElement("h2",null,"Pros and Cons"),i.a.createElement(d.a,null,i.a.createElement("h3",null,"Pros"),i.a.createElement("ul",null,t.map((function(e){return i.a.createElement("li",{key:e},k()(v.a.sanitize(e)))}))),i.a.createElement("h3",null,"Cons"),i.a.createElement("ul",null,a.map((function(e){return i.a.createElement("li",{key:e},k()(v.a.sanitize(e)))})))))}function Y(e){var t=e.content;return i.a.createElement(d.a,null,i.a.createElement(M.a,null,i.a.createElement(T.a,{md:"auto",className:"base-stats-width"},i.a.createElement("h2",{className:"base-stat-title"},"Base Stats (From Skills)",i.a.createElement(U,{tooltip:k()(v.a.sanitize(t.baseStats[0]))})),i.a.createElement(R.a,{borderless:!0},i.a.createElement("tbody",null,t.baseStats[1].map((function(e,t){return i.a.createElement("tr",{key:t},i.a.createElement("td",{className:"stat-td"},k()(v.a.sanitize(e))))}))))),i.a.createElement(T.a,{md:"auto",className:"buff-width"},i.a.createElement("h2",null,"Buffs & Other Actives"),i.a.createElement(R.a,{size:"sm",borderless:!0},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("th",null,i.a.createElement("strong",null,"Active Buffs"),":")," ",i.a.createElement("td",{className:"buff-td"},k()(v.a.sanitize(t.buffInfo.active)))),t.buffInfo.summons?i.a.createElement("tr",null,i.a.createElement("th",null,i.a.createElement("strong",null,"Summons"),":")," ",i.a.createElement("td",{className:"buff-td"},k()(v.a.sanitize(t.buffInfo.summons)))):i.a.createElement("tr",null,i.a.createElement("th",null,i.a.createElement("strong",null,"Summons"),":")," ",i.a.createElement("td",null,"None")),i.a.createElement("tr",null,i.a.createElement("th",null,i.a.createElement("strong",null,"Buffs with Cooldowns"),":")," ",i.a.createElement("td",{className:"buff-td"},k()(v.a.sanitize(t.buffInfo.buffCd)))),i.a.createElement("tr",null,i.a.createElement("th",null,i.a.createElement("strong",null,"5th Job Buffs"),":")," ",i.a.createElement("td",{className:"buff-td"},k()(v.a.sanitize(t.buffInfo.buffFifth)))),t.buffInfo.binds?i.a.createElement("tr",null,i.a.createElement("th",null,i.a.createElement("strong",null,"Binds"),":")," ",i.a.createElement("td",{className:"buff-td"},k()(v.a.sanitize(t.buffInfo.binds)))):i.a.createElement("tr",null,i.a.createElement("th",null,i.a.createElement("strong",null,"Binds"),":")," ",i.a.createElement("td",null,"None")),t.buffInfo.iFrame?i.a.createElement("tr",null,i.a.createElement("th",null,i.a.createElement("strong",null,"iFrames"),":")," ",i.a.createElement("td",{className:"buff-td"},k()(v.a.sanitize(t.buffInfo.iFrame)))):i.a.createElement("tr",null,i.a.createElement("th",null,i.a.createElement("strong",null,"iFrames"),":")," ",i.a.createElement("td",null,"None")))))),i.a.createElement("h2",null,"Skill Build Path"),i.a.createElement(R.a,{borderless:!0},i.a.createElement("tbody",null,t.buildPath.build.map((function(e,t){return i.a.createElement("tr",{key:t},i.a.createElement("th",null,e[0],":"),i.a.createElement("td",{className:"skill-td"},k()(v.a.sanitize(e[1]))))})))),i.a.createElement("ul",null,t.buildPath.details.map((function(e,t){return i.a.createElement("li",{key:t},k()(v.a.sanitize(e)))}))))}function X(e){var t=e.className,a=e.howToCreate;return i.a.createElement(d.a,null,i.a.createElement("h2",{className:"creation-title"},"How to create a ",t),i.a.createElement(S.a,{thumbnail:!0,src:a.image[0],width:a.image[1][0],height:a.image[1][1],className:"creation-image"}),a.npc.map((function(e){return i.a.createElement(S.a,{key:e,src:e[0],width:e[1][0],height:e[1][1],className:"creation-image"})})),i.a.createElement(L.a,{className:"extra-content-width"},i.a.createElement(L.a.Body,null,a.info.map((function(e){return i.a.createElement("p",{key:e},k()(v.a.sanitize(e,{ADD_ATTR:["target"]})))})))))}function Q(e){var t=e.title,a=e.content;return i.a.createElement(d.a,null,i.a.createElement("h2",null,t),i.a.createElement(L.a,{className:"extra-content-width"},i.a.createElement(L.a.Body,null,k()(v.a.sanitize(a,{ADD_ATTR:["target"]})))))}var Z=function(e){var t=e.data;return i.a.createElement("div",null,i.a.createElement(d.a,null,i.a.createElement("h1",{className:"class-title"},t.class),i.a.createElement(M.a,null,i.a.createElement(T.a,{md:"auto",className:"property-container"},i.a.createElement(J,{content:t.content}),i.a.createElement(K,{skills:t.skill.notable,classType:t.content.classType})),i.a.createElement(T.a,{md:"auto",className:"pros-cons-container"},i.a.createElement(W,{pros:t.content.prosCons.pros,cons:t.content.prosCons.cons}),i.a.createElement(F,{linkSkill:t.content.linkSkill})))),i.a.createElement("hr",null),i.a.createElement(Y,{content:t.content}))},$=a(196),ee=a(188),te=a(193),ae=a(187),ne=a(9);a(173),a(174);te.a.use([ae.a]);var le=function(e){var t=e.classGroup;return i.a.createElement($.a,{scrollbar:{draggable:!0,hide:!0},spaceBetween:10,slidesPerView:2,breakpoints:{360:{slidesPerView:3.5},490:{slidesPerView:4.5},770:{slidesPerView:5.5},991:{slidesPerView:8.5},1199:{slidesPerView:9.5}}},function(e){switch(e){case"Explorers":return o.b.explorers.map((function(e){return i.a.createElement(ee.a,null,i.a.createElement(ne.Link,{to:"/classes/".concat(e[0]),key:e,className:"hvr-float"},i.a.createElement(S.a,{src:"".concat("/GrandisLibrary","/class-portrait/").concat(e[0],".jpg"),style:{width:"100px",margin:"1rem 0 1rem 0"}}),i.a.createElement("div",{className:"class-overlay"})))}));case"Cygnus Knights":return o.b.cygnusKnights.map((function(e){return i.a.createElement(ee.a,null,i.a.createElement(ne.Link,{to:"/classes/".concat(e[0]),key:e,className:"hvr-float"},i.a.createElement(S.a,{src:"".concat("/GrandisLibrary","/class-portrait/").concat(e[0],".jpg"),style:{width:"100px",margin:"1rem 0 0 0"}}),i.a.createElement("div",{className:"class-overlay"})))}));case"Heroes":return o.b.heroes.map((function(e){return i.a.createElement(ee.a,null,i.a.createElement(ne.Link,{to:"/classes/".concat(e[0]),key:e,className:"hvr-float"},i.a.createElement(S.a,{src:"".concat("/GrandisLibrary","/class-portrait/").concat(e[0],".jpg"),style:{width:"100px",margin:"1rem 0 1rem 0"}}),i.a.createElement("div",{className:"class-overlay"})))}));case"Resistance":case"Resistance (Xenon)":case"Resistance (Demon)":return o.b.resistance.map((function(e){return i.a.createElement(ee.a,null,i.a.createElement(ne.Link,{to:"/classes/".concat(e[0]),key:e,className:"hvr-float"},i.a.createElement(S.a,{src:"".concat("/GrandisLibrary","/class-portrait/").concat(e[0],".jpg"),style:{width:"100px",margin:"1rem 0 1rem 0"}}),i.a.createElement("div",{className:"class-overlay"})))}));case"Nova":return o.b.nova.map((function(e){return i.a.createElement(ee.a,null,i.a.createElement(ne.Link,{to:"/classes/".concat(e[0]),key:e,className:"hvr-float"},i.a.createElement(S.a,{src:"".concat("/GrandisLibrary","/class-portrait/").concat(e[0],".jpg"),style:{width:"100px",margin:"1rem 0 1rem 0"}}),i.a.createElement("div",{className:"class-overlay"})))}));case"Sengoku":return o.b.sengoku.map((function(e){return i.a.createElement(ee.a,null,i.a.createElement(ne.Link,{to:"/classes/".concat(e[0]),key:e,className:"hvr-float"},i.a.createElement(S.a,{src:"".concat("/GrandisLibrary","/class-portrait/").concat(e[0],".jpg"),style:{width:"100px",margin:"1rem 0 1rem 0"}}),i.a.createElement("div",{className:"class-overlay"})))}));case"Flora":return o.b.flora.map((function(e){return i.a.createElement(ee.a,null,i.a.createElement(ne.Link,{to:"/classes/".concat(e[0]),key:e,className:"hvr-float"},i.a.createElement(S.a,{src:"".concat("/GrandisLibrary","/class-portrait/").concat(e[0],".jpg"),style:{width:"100px",margin:"1rem 0 1rem 0"}}),i.a.createElement("div",{className:"class-overlay"})))}));case"Other":case"Other (Anima)":case"Other (FriendStory)":return o.b.other.map((function(e){return i.a.createElement(ee.a,null,i.a.createElement(ne.Link,{to:"/classes/".concat(e[0]),key:e,className:"hvr-float"},i.a.createElement(S.a,{src:"".concat("/GrandisLibrary","/class-portrait/").concat(e[0],".jpg"),style:{width:"100px",margin:"1rem 0 1rem 0"}}),i.a.createElement("div",{className:"class-overlay"})))}));default:return o.b.explorers.map((function(e){return i.a.createElement(ee.a,null,i.a.createElement(ne.Link,{to:"/classes/".concat(e[0]),key:e,className:"hvr-float"},i.a.createElement(S.a,{src:"".concat("/GrandisLibrary","/class-portrait/").concat(e[0],".jpg"),style:{width:"100px",margin:"1rem 0 1rem 0"}}),i.a.createElement("div",{className:"class-overlay"})))}))}}(t))};function re(e){var t=e.className,a=e.moreInfo;return i.a.createElement("div",null,i.a.createElement("h5",null,"For more information about ",t," check out:"),a.map((function(e){return i.a.createElement("div",{className:"more-info-link",key:e},i.a.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer"},e))})))}function ce(e){var t=e.classGroup;return i.a.createElement("div",null,i.a.createElement("h5",null,"Check out some more ",t," classes below:"),i.a.createElement(le,{classGroup:t}))}function se(e){var t=e.credits;return i.a.createElement("div",null,i.a.createElement("h3",null,"Credits"),t.map((function(e){return i.a.createElement("div",{className:"credit",key:e},i.a.createElement("strong",null,e[0]),": ",e[1])})))}var ie=function(e){var t=e.classGroup,a=e.className,n=e.moreInfo,l=e.credits;return i.a.createElement("div",null,i.a.createElement(re,{className:a,moreInfo:n}),i.a.createElement(ce,{classGroup:t}),i.a.createElement(se,{credits:l}))},oe=a(38),me=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).state={data:{},loading:!0,fail:!1},l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("./data/".concat(this.props.match.params.id,".json")).then((function(e){return e.json()})).then((function(t){return e.setState({data:t,loading:!1,fail:!1})})).catch((function(t){return e.setState({fail:!0})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(e.match.params.id!==this.props.match.params.id&&(this.setState({loading:!0}),fetch("./data/".concat(this.props.match.params.id,".json")).then((function(e){return e.json()})).then((function(e){return a.setState({data:e,loading:!1,fail:!1})})).catch((function(e){return a.setState({fail:!0})}))),window.location.hash){var n=window.location.hash.replace("#","").split("#"),l=document.getElementById(n[1]);l&&l.scrollIntoView()}}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.fail,n=e.data;return i.a.createElement("div",null,i.a.createElement(m.a,{imageUrl:"".concat(o.d.library,".jpg")}),t?i.a.createElement(d.a,null,a?i.a.createElement("h3",null,"Looks like there was an error in the URL you entered, the page you are looking for may be moved or deleted."):""):i.a.createElement("div",null,i.a.createElement(oe.a,null,i.a.createElement("title",null,"".concat(n.class," | Grandis Library")),i.a.createElement("meta",{name:n.meta,content:"description"})),i.a.createElement(d.a,null,i.a.createElement(Z,{data:n}),n.content.howToCreate&&i.a.createElement(X,{className:n.class,howToCreate:n.content.howToCreate}),n.content.extraContent&&i.a.createElement(Q,{title:n.content.extraContent.title,content:n.content.extraContent.content}),i.a.createElement("div",{id:"skill"}),i.a.createElement(P,{primary:n.skill.primary,fifth:n.skill.fifth,hyper:n.skill.hyper,hyperSkillBuild:n.content.hyperBuild,nodeInfo:n.content.nodeInfo}),i.a.createElement("hr",null),i.a.createElement(ie,{classGroup:n.content.classGroup,className:n.class,moreInfo:n.content.moreInfo,credits:n.content.credits}))))}}]),a}(s.Component);t.default=me},94:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(103);a(95);t.a=function(e){return l.a.createElement("div",{className:"outer-box"},l.a.createElement("div",{className:"header-box"},l.a.createElement(r.a,{fluid:!0,className:"header",src:e.imageUrl}),l.a.createElement("div",{className:"overlay"})))}},95:function(e,t,a){}}]);
//# sourceMappingURL=8.9ff3c68d.chunk.js.map