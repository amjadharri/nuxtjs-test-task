(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{249:function(n,t,e){var content=e(255);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(43).default)("6101bb57",content,!0,{sourceMap:!1})},254:function(n,t,e){"use strict";e(249)},255:function(n,t,e){var r=e(42)((function(i){return i[1]}));r.push([n.i,'/*purgecss start ignore*/\n.navbar{\n  background-color:#5c5c5c;\n  height:88px;\n  justify-content:space-between;\n  color:#fff;\n  position:-webkit-sticky;\n  position:sticky;\n  top:0;\n  z-index:1\n}\n.navbar,.navbar .navbar__logo{\n  display:flex;\n  align-items:center\n}\n.navbar .navbar__logo{\n  width:30%;\n  height:100%;\n  background:#002a52;\n  padding-left:48px;\n  font-size:36.21px;\n  font-weight:700\n}\n@media(max-width:768px){\n.navbar .navbar__logo{\n    padding-left:20px\n}\n}\n@media(min-width:768px)and (max-width:1060px){\n.navbar .navbar__logo{\n    font-size:26px;\n    width:25%\n}\n}\n.navbar .navbar__items{\n  font-family:"Roboto",sans-serif;\n  display:flex;\n  padding-right:96px\n}\n@media(max-width:768px){\n.navbar .navbar__items{\n    display:none\n}\n.navbar .navbar__items.collapse-menu{\n    background:#002a52;\n    display:block;\n    position:absolute;\n    left:0;\n    right:0;\n    top:88px;\n    padding:0 20px 12px 4px\n}\n.navbar .navbar__items.collapse-menu .navbar__items--item{\n    margin-left:0;\n    padding:8px 8px 8px 16px;\n    border-radius:8px\n}\n.navbar .navbar__items.collapse-menu .navbar__items--item:hover{\n    background-color:#fff;\n    color:#5c5c5c\n}\n}\n@media(min-width:768px)and (max-width:1060px){\n.navbar .navbar__items{\n    padding-left:1.75rem\n}\n}\n.navbar .navbar__items .navbar__items--item{\n  font-size:16px;\n  font-weight:500;\n  letter-spacing:.03em;\n  text-transform:uppercase;\n  margin-left:50px;\n  cursor:pointer\n}\n.navbar .navbar__items .navbar__items--item .navbar__items--item:first-child{\n  margin-left:0\n}\n@media(min-width:768px)and (max-width:1060px){\n.navbar .navbar__items .navbar__items--item{\n    margin-left:28px;\n    font-size:12px\n}\n}\n.navbar .navbr__navigation-icon{\n  display:none;\n  margin-right:20px;\n  color:#fff;\n  cursor:pointer\n}\n@media(max-width:768px){\n.navbar .navbr__navigation-icon{\n    display:block\n}\n}\n@media(max-width:768px){\n.navbar{\n    background:#002a52\n}\n}\n\n/*purgecss end ignore*/',""]),r.locals={},n.exports=r},261:function(n,t,e){"use strict";e.r(t);var r={name:"AppNavbar",data:function(){return{menuItems:["menu item 1","menu item 2","menu item 3","menu item 4"],collapse:!1}},methods:{handleCollapse:function(){this.collapse=!this.collapse}}},o=(e(254),e(44)),component=Object(o.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"navbar"},[e("div",{staticClass:"navbar__logo"},[n._v("MANGO")]),n._v(" "),e("div",{staticClass:"navbar__items",class:{"collapse-menu":n.collapse}},n._l(n.menuItems,(function(t){return e("div",{key:t,staticClass:"navbar__items--item"},[n._v("\n      "+n._s(t)+"\n    ")])})),0),n._v(" "),n.collapse?e("i",{staticClass:"fa fa-times fa-2x navbr__navigation-icon",on:{click:n.handleCollapse}}):e("i",{staticClass:"fa fa-bars fa-2x navbr__navigation-icon",on:{click:n.handleCollapse}})])}),[],!1,null,null,null);t.default=component.exports}}]);