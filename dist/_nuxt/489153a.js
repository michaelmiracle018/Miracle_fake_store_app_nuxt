(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{516:function(n,o,t){"use strict";t.r(o);t(58);var c={data:function(){return{scTimer:0,scY:0}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var n=this;this.scTimer||(this.scTimer=setTimeout((function(){n.scY=window.scrollY,clearTimeout(n.scTimer),n.scTimer=0}),100))},toTop:function(){window.scrollTo({top:0,behavior:"smooth"})}}},e=t(81),component=Object(e.a)(c,(function(){var n=this,o=n._self._c;return o("div",{on:{click:n.handleSubmit}},[o("span",[n._v("top")])])}),[],!1,null,"82d68596",null);o.default=component.exports}}]);