(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{416:function(e,t,r){r(73),r(33),r(27);var n=r(417);r(418),r(420);var o=r(421);r(71);var c=r(422),h=r(423),f=r(424);r(28),r(34),r(31),r(8),r(47);var l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object.keys(e).filter((function(e){return t.includes(e)})).reduce((function(t,r){return Object.assign(t,f({},r,e[r]))}),{})},y=function(){"use strict";function e(t,r){var n=t.query,path=t.path,o=t.init,h=t.postprocess,l=void 0===h?[]:h;c(this,e),this.query=n,this.path=path,this.init=o,this.postprocess=l,this.options=r||{},this.keys=null,this.postprocess.unshift((function(data){return data.map((function(e){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object.keys(e).filter((function(e){return!t.includes(e)})).reduce((function(t,r){return Object.assign(t,f({},r,e[r]))}),{})}(e,["text"])}))}))}var t;return h(e,[{key:"only",value:function(e){return this.keys=Array.isArray(e)?e:[e],this}},{key:"sortBy",value:function(e,t){return this.query=this.query.simplesort(e,{desc:"desc"===t}),this}},{key:"where",value:function(e){return this.query=this.query.find(e),this}},{key:"search",value:function(e,t){var r;return r="object"===o(e)?e:t?{query:{type:"match",field:e,value:t,prefix_length:1,fuzziness:1,extended:!0,minimum_should_match:1}}:{query:{type:"bool",should:this.options.fullTextSearchFields.map((function(t){return{type:"match",field:t,value:e,prefix_length:1,operator:"and",minimum_should_match:1,fuzziness:1,extended:!0}}))}},this.query=this.query.find({$fts:r}),this}},{key:"surround",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.before,n=void 0===r?1:r,o=t.after,c=void 0===o?1:o;this.keys&&this.keys.push("slug");var h=function(data){var t=data.findIndex((function(t){return t.slug===e})),r=new Array(n+c).fill(null,0);if(-1===t)return r;for(var o=data.slice(t-n,t),h=data.slice(t+1,t+1+c),f=0,i=n-1;i>=0;i--)r[i]=o[f]||null,f++;for(var l=0,y=n;y<=c;y++)r[y]=h[l]||null,l++;return r};return this.postprocess.push(h),this}},{key:"limit",value:function(e){return"string"==typeof e&&(e=parseInt(e)),this.query=this.query.limit(e),this}},{key:"skip",value:function(e){return"string"==typeof e&&(e=parseInt(e)),this.query=this.query.offset(e),this}},{key:"fetch",value:(t=n(regeneratorRuntime.mark((function e(){var data,t,r,n,o,c,h,f,y=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(data=this.query.data({removeMeta:!0}),this.keys&&(t=function(data){return data.map((function(e){return l(e,y.keys)}))},this.postprocess.unshift(t)),r=!0,n=!1,o=void 0,e.prev=5,c=this.postprocess[Symbol.iterator]();!(r=(h=c.next()).done);r=!0)f=h.value,data=f(data);e.next=13;break;case 9:e.prev=9,e.t0=e.catch(5),n=!0,o=e.t0;case 13:e.prev=13,e.prev=14,r||null==c.return||c.return();case 16:if(e.prev=16,!n){e.next=19;break}throw o;case 19:return e.finish(16);case 20:return e.finish(13);case 21:if(data){e.next=23;break}throw new Error("".concat(this.path," not found"));case 23:return e.abrupt("return",data);case 24:case"end":return e.stop()}}),e,this,[[5,9,13,21],[14,,16,20]])}))),function(){return t.apply(this,arguments)})}]),e}();e.exports=y},427:function(e,t,r){"use strict";r.r(t);r(71),r(108),r(415),r(40);var n=r(416),o=r.n(n),c=r(425),h=r.n(c),f=r(426);r.n(f).a.register();var l,y,d=["/","/case-studies","/join","/solutions","/learn","/opportunities","/testimonials"],v=function(){var path="/".concat(Array.from(arguments).join("/").replace(/\/+/g,"/")),e=!path||!!d.find((function(e){return e===path})),t=e?{dir:path}:{path:path},r=e?[]:[function(data){return data[0]}];return new o.a({query:y.chain().find(t,!e),postprocess:r},{fullTextSearchFields:["title","description","slug","text"]})};t.default=function(e){return(l=new h.a("content.db")).loadJSONObject(e),y=l.getCollection("items"),v}}}]);