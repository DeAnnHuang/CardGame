(function(e){function t(t){for(var r,a,c=t[0],s=t[1],d=t[2],m=0,l=[];m<c.length;m++)a=c[m],i[a]&&l.push(i[a][0]),i[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(l.length)l.shift()();return o.push.apply(o,d||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={1:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},a.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var u=s;o.push([3,0]),n()})({3:function(e,t,n){e.exports=n("Vtdi")},"8wtl":function(e,t,n){},CpHY:function(e,t,n){"use strict";var r=n("ZYh5"),i=n.n(r);i.a},EV1T:function(e,t,n){},QGY4:function(e,t,n){"use strict";var r=n("EV1T"),i=n.n(r);i.a},Qv4F:function(e,t,n){"use strict";var r=n("8wtl"),i=n.n(r);i.a},Vtdi:function(e,t,n){"use strict";n.r(t);var r={};n.d(r,"getCardsList",function(){return M}),n.d(r,"getImageRoot",function(){return Y}),n.d(r,"getRightSet",function(){return I});var i={};n.d(i,"handleCardClick",function(){return V}),n.d(i,"openAllCards",function(){return $}),n.d(i,"closeAllCards",function(){return J});n("VRzm");var o,a=n("Kw5r"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("cardList")],1)},s=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cardList"},[n("div",{staticClass:"cardsWrap"},e._l(e.cards,function(e){return n("Card",{key:e.id,attrs:{card:e}})})),e._v(" "),e.msg?n("p",{on:{click:e.memoryTime}},[e._v(e._s(e.msg))]):e._e()])},u=[],m=n("yT7P"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card",style:{backgroundImage:"url("+e.img+")"},on:{click:function(t){e.handleCardClick(e.card.id)}}})},p=[],f=n("L2JU"),g={name:"Card",props:{card:Object},computed:Object(m["a"])({},Object(f["c"])({image_root:"getImageRoot"}),{img:function(){var e;return e=this.card.opened?this.image_root+this.card.imgName:this.image_root+"641",e}}),methods:Object(m["a"])({},Object(f["b"])({handleCardClick:"handleCardClick"}))},h=g,v=(n("QGY4"),n("KHd+")),_=Object(v["a"])(h,l,p,!1,null,"6c34a5e6",null),C=_.exports,O={name:"cardList",components:{Card:C},data:function(){return{cards:null,msg:null}},mounted:function(){var e=this.$store.getters.getCardsList;this.cards=this.random(e),this.msg="Start!"},methods:Object(m["a"])({random:function(e){var t,n,r=e.length;while(0!==r)n=Math.floor(Math.random()*r),r-=1,t=e[r],e[r]=e[n],e[n]=t;return e},memoryTime:function(){var e=this;this.openAllCards(),this.msg=5,setTimeout(function(){e.closeAllCards(),clearInterval(t),e.msg="Your Turn"},5e3);var t=setInterval(function(){e.msg--},1e3)}},Object(f["b"])(["openAllCards","closeAllCards"])),computed:Object(m["a"])({},Object(f["c"])({right_set:"getRightSet"})),watch:{right_set:function(e){5==e&&(this.openAllCards(),alert("mission accomplish!"))}}},b=O,N=(n("CpHY"),Object(v["a"])(b,d,u,!1,null,null,null)),j=N.exports,E={name:"app",components:{cardList:j}},A=E,w=(n("Qv4F"),Object(v["a"])(A,c,s,!1,null,null,null)),y=w.exports,L=n("oyJW"),R=(n("dRSK"),"CARD_OPENED"),k="ADD_COMPARE_ZONE",P="COMPARE",x="CLEAR_COMPARE_ZONE",z="OPEN_ALL_CARDS",T="CLOSED_ALL_CARDS",S={image_root:"https://picsum.photos/200/200?image=",cards:[{id:1,imgName:"1084",opened:!1},{id:2,imgName:"1084",opened:!1},{id:3,imgName:"345",opened:!1},{id:4,imgName:"345",opened:!1},{id:5,imgName:"579",opened:!1},{id:6,imgName:"579",opened:!1},{id:7,imgName:"991",opened:!1},{id:8,imgName:"991",opened:!1},{id:9,imgName:"995",opened:!1},{id:10,imgName:"995",opened:!1},{id:11,imgName:"95",opened:!1},{id:12,imgName:"46",opened:!1},{id:13,imgName:"68",opened:!1},{id:14,imgName:"1083",opened:!1},{id:15,imgName:"1023",opened:!1},{id:16,imgName:"987",opened:!1}],compare_zone:[],right_set:0},D=(o={},Object(L["a"])(o,R,function(e,t){var n=e.cards.find(function(e){return e.id==t});n.opened=!0}),Object(L["a"])(o,k,function(e,t){var n=e.cards.find(function(e){return e.id==t});e.compare_zone.push(n)}),Object(L["a"])(o,P,function(e){var t=e.compare_zone[0].imgName,n=e.compare_zone[1].imgName;t!==n?e.compare_zone.forEach(function(t){var n=t.id,r=e.cards.find(function(e){return e.id==n});r.opened=!1}):e.right_set++}),Object(L["a"])(o,x,function(e){e.compare_zone=[]}),Object(L["a"])(o,z,function(e){e.cards.forEach(function(e){e.opened=!0})}),Object(L["a"])(o,T,function(e){e.cards.forEach(function(e){e.opened=!1})}),o),M=function(e){return e.cards},Y=function(e){return e.image_root},I=function(e){return e.right_set},V=function(e,t){var n=e.commit,r=e.state,i=r.cards.find(function(e){return e.id==t});!i.opened&&r.compare_zone.length<2&&(n(R,t),n(k,t),2==r.compare_zone.length&&setTimeout(function(){n(P),n(x)},2e3))},$=function(e){var t=e.commit;t(z)},J=function(e){var t=e.commit;t(T)};a["a"].use(f["a"]);var Q=new f["a"].Store({state:S,mutations:D,getters:r,actions:i,strict:!0});a["a"].config.productionTip=!1,new a["a"]({store:Q,render:function(e){return e(y)}}).$mount("#app")},ZYh5:function(e,t,n){}});
//# sourceMappingURL=app.f9c209ef.js.map