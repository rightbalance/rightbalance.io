(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{354:function(t,e,d){"use strict";d(18),d(19),d(10),d(26),d(32);var o=d(7),n=d(6),r=d(12),l=d(11),c=d(4),f=d(5),m=d(2),v=d(48),h=(d(31),d(28),d(3)),x=(d(37),d(36),d(79));var w=function(t,e,d,desc){var o,n=arguments.length,r=n<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,d):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,d,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(r=(n<3?o(r):n>3?o(e,d,r):o(e,d))||r);return n>3&&r&&Object.defineProperty(e,d,r),r},y=d(78).a.loadByEnvironment(),k=function(t){Object(r.a)(f,t);var e,d=function(t){function e(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var d,o=Object(c.a)(t);if(e()){var n=Object(c.a)(this).constructor;d=Reflect.construct(o,arguments,n)}else d=o.apply(this,arguments);return Object(l.a)(this,d)}}(f);function f(){var t;return Object(o.a)(this,f),(t=d.apply(this,arguments)).inputs=[],t.values={},t.isLoading=!1,t.endpoint="".concat(y.apiUrl,"/contact"),t}return Object(n.a)(f,[{key:"placeholder",get:function(){return this.$t("form.placeholder").replace("{{grab}}",this.grab)}},{key:"formSent",value:function(t,data){return{isSuccess:t,data:data}}},{key:"created",value:function(){var t=[{name:"".concat(this.$t("form.name"),"*"),type:"text",validate:"required",field:"name",focused:!1},{name:"".concat(this.$t("form.email"),"*"),type:"email",validate:"required|email",field:"email",focused:!1},{name:this.$t("form.phone"),type:"tel",field:"phone",focused:!1},{name:this.$t("form.message"),type:"textarea",field:"message",focused:!1}];this.inputs=t}},{key:"submit",value:(e=Object(h.a)(regeneratorRuntime.mark((function t(){var e,d,o,n,r,l,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$validator.validateAll();case 2:if(!t.sent||this.isLoading){t.next=21;break}return this.isLoading=!0,e={name:this.values.name,email:this.values.email,phone:this.values.phone,message:this.values.message||this.placeholder},t.next=8,fetch(this.endpoint,{method:"POST",headers:{"Content-Type":"application/json","X-Api-Key":y.apiKey},body:JSON.stringify(e)});case 8:if(!(d=t.sent).ok){t.next=19;break}return t.next=12,d.json();case 12:o=t.sent,n=o.PublishResponse,r=n.ResponseMetadata,l=n.PublishResult,c=r&&r.RequestId&&l&&l.MessageId,200===d.status&&c?(this.conversionEvent(x.a.FORM_SENT,this.placement),this.formSent(!0,e),this.isLoading=!1):(this.formSent(!1,e),this.isLoading=!1),t.next=21;break;case 19:this.formSent(!1,e),this.isLoading=!1;case 21:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"isNumber",value:function(t){var e=t.charCode;if("tel"===t.path[0].type){if(!(e>31&&(e<48||e>57))||[32,43,45,40,41,46].includes(e))return!0;t.preventDefault()}}}]),f}(Object(m.mixins)(v.a));w([Object(m.Prop)({type:String,required:!1,default:""})],k.prototype,"grab",void 0),w([Object(m.Prop)({type:String,default:"home"})],k.prototype,"placement",void 0),w([Object(m.Emit)()],k.prototype,"formSent",null);var j=k=w([m.Component],k),O=(d(386),d(8)),_=Object(O.a)(j,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[t._l(t.inputs,(function(input,e){return d("div",{key:e,class:{row:!0,error:t.errors&&t.errors.has(input.field)}},[d("label",{class:{focused:input.focused}},[t._v(" "+t._s(input.name)+" ")]),d("div",{staticClass:"field"},["checkbox"===input.type&&"textarea"!==input.type?d("input",{directives:[{name:"model",rawName:"v-model",value:t.values[input.field],expression:"values[input.field]"},{name:"validate",rawName:"v-validate",value:input.validate,expression:"input.validate"}],attrs:{"data-vv-validate-on":"none",name:input.field,type:"checkbox"},domProps:{checked:Array.isArray(t.values[input.field])?t._i(t.values[input.field],null)>-1:t.values[input.field]},on:{focus:function(t){input.focused=!0},blur:function(t){input.focused=!1},keypress:function(e){return t.isNumber(e)},change:function(e){var d=t.values[input.field],o=e.target,n=!!o.checked;if(Array.isArray(d)){var r=t._i(d,null);o.checked?r<0&&t.$set(t.values,input.field,d.concat([null])):r>-1&&t.$set(t.values,input.field,d.slice(0,r).concat(d.slice(r+1)))}else t.$set(t.values,input.field,n)}}}):"radio"===input.type&&"textarea"!==input.type?d("input",{directives:[{name:"model",rawName:"v-model",value:t.values[input.field],expression:"values[input.field]"},{name:"validate",rawName:"v-validate",value:input.validate,expression:"input.validate"}],attrs:{"data-vv-validate-on":"none",name:input.field,type:"radio"},domProps:{checked:t._q(t.values[input.field],null)},on:{focus:function(t){input.focused=!0},blur:function(t){input.focused=!1},keypress:function(e){return t.isNumber(e)},change:function(e){return t.$set(t.values,input.field,null)}}}):"textarea"!==input.type?d("input",{directives:[{name:"model",rawName:"v-model",value:t.values[input.field],expression:"values[input.field]"},{name:"validate",rawName:"v-validate",value:input.validate,expression:"input.validate"}],attrs:{"data-vv-validate-on":"none",name:input.field,type:input.type},domProps:{value:t.values[input.field]},on:{focus:function(t){input.focused=!0},blur:function(t){input.focused=!1},keypress:function(e){return t.isNumber(e)},input:function(e){e.target.composing||t.$set(t.values,input.field,e.target.value)}}}):d("textarea",{directives:[{name:"model",rawName:"v-model",value:t.values[input.field],expression:"values[input.field]"}],attrs:{name:input.field,placeholder:t.placeholder},domProps:{value:t.values[input.field]},on:{focus:function(t){input.focused=!0},blur:function(t){input.focused=!1},input:function(e){e.target.composing||t.$set(t.values,input.field,e.target.value)}}}),t._v(" "),t.errors&&t.errors.has(input.field)?d("div",{staticClass:"error-text wiggle"},[t._v(" "+t._s(t.errors.first(input.field))+" ")]):t._e()])])})),d("div",{staticClass:"row"},[d("button",[d("span",[t._v(t._s(t.$t("submit")))]),d("div",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"lds-ring"},t._l([1,2,3],(function(i){return d("div",{key:i})})),0)])])],2)}),[],!1,null,"5d97d96d",null).exports;var z=function(t,e,d,desc){var o,n=arguments.length,r=n<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,d):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,d,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(r=(n<3?o(r):n>3?o(e,d,r):o(e,d))||r);return n>3&&r&&Object.defineProperty(e,d,r),r},C=function(t){Object(r.a)(d,t);var e=function(t){function e(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var d,o=Object(c.a)(t);if(e()){var n=Object(c.a)(this).constructor;d=Reflect.construct(o,arguments,n)}else d=o.apply(this,arguments);return Object(l.a)(this,d)}}(d);function d(){var t;return Object(o.a)(this,d),(t=e.apply(this,arguments)).isFormSent=!1,t.isSuccess=!1,t}return Object(n.a)(d,[{key:"mailto",get:function(){var t=this.formData&&this.formData.name||"",e=this.formData&&this.formData.message||"";return"mailto:".concat(this.$t("emailAddress").trim(),"?subject=").concat(this.$t("form.failure.mailtoSubject")).concat(t,"&body=").concat(e)}},{key:"beforeOpen",value:function(){document.body.classList.add("disable-scroll")}},{key:"beforeClose",value:function(){document.body.classList.remove("disable-scroll")}},{key:"closeClicked",value:function(){this.buttonClick("ContactModal.closeClicked",this.modalName),this.$modal.hide(this.modalName),this.isFormSent=!1,this.isSuccess=!1,this.formData=void 0}},{key:"focusFirstInput",value:function(){var t=this.$el.querySelector("input");t&&t.focus()}},{key:"formSent",value:function(t){var e=t.isSuccess,data=t.data;this.isFormSent=!0,this.isSuccess=e,this.formData=data}},{key:"opened",value:function(){this.focusFirstInput()}},{key:"onTriggerChanged",value:function(){this.$modal.show(this.modalName)}}]),d}(Object(m.mixins)(v.a));z([Object(m.Prop)({type:String,default:"contact"})],C.prototype,"placement",void 0),z([Object(m.Prop)({type:String,default:"contact-modal"})],C.prototype,"modalName",void 0),z([Object(m.Prop)({default:!1})],C.prototype,"trigger",void 0),z([Object(m.Watch)("trigger")],C.prototype,"onTriggerChanged",null);var $=C=z([Object(m.Component)({components:{Form:_}})],C),S=(d(388),Object(O.a)($,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("modal",{attrs:{name:t.modalName,width:"675px",height:"auto","click-to-close":!1,transition:"nice-modal-fade"},on:{"before-open":t.beforeOpen,"before-close":t.beforeClose,opened:t.opened}},[o("div",{staticClass:"form-wrapper"},[o("a",{staticClass:"close",on:{click:function(e){return e.preventDefault(),t.closeClicked.apply(null,arguments)}}}),o("transition",{attrs:{name:"fade"}},[t.isFormSent?t.isSuccess?o("div",{staticClass:"result"},[o("img",{staticClass:"logo result-logo",attrs:{src:d(133),alt:"Right Balance logo"}}),o("div",{staticClass:"heading result-heading"},[t._v(t._s(t.$t("form.success.title")))]),o("div",{staticClass:"subtitle"},[t._v(t._s(t.$t("form.success.subtitle")))])]):o("div",{staticClass:"result"},[o("img",{staticClass:"logo result-logo",attrs:{src:d(133),alt:"Right Balance logo"}}),o("div",{staticClass:"heading result-heading"},[t._v(t._s(t.$t("form.failure.title")))]),o("div",[o("div",{staticClass:"subtitle subtitle-failure"},[t._v(" "+t._s(t.$t("form.failure.subtitle"))+" "),o("a",{attrs:{href:"tel:"+t.$t("phoneNumber")}},[t._v(t._s(t.$t("form.failure.call")))]),t._v(" "+t._s(t.$t("form.failure.afterCall"))+" "),o("a",{attrs:{href:t.mailto}},[t._v(t._s(t.$t("form.failure.email")))]),t._v(" "+t._s(t.$t("form.failure.afterEmail"))+" ")])])]):o("Form",{staticClass:"form-style",attrs:{placement:t.placement},on:{"form-sent":t.formSent}})],1)],1)])}),[],!1,null,"54cdd47d",null));e.a=S.exports},359:function(t,e,d){var content=d(387);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(23).default)("50c2042f",content,!0,{sourceMap:!1})},360:function(t,e,d){var content=d(389);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(23).default)("36b2abcc",content,!0,{sourceMap:!1})},386:function(t,e,d){"use strict";d(359)},387:function(t,e,d){(e=d(22)(!1)).push([t.i,'form[data-v-5d97d96d]{margin:0 auto;width:100%}@media (max-width:850px){form[data-v-5d97d96d]{width:100%;max-width:550px}}@media (max-height:420px){form[data-v-5d97d96d]{padding:0 0 25px}}form .row[data-v-5d97d96d]{text-transform:uppercase;margin:30px 0;display:flex;width:100%}@media (max-width:850px){form .row[data-v-5d97d96d]{margin:15px 0}}form .row label[data-v-5d97d96d]{min-width:80px;color:#294dd2;font-weight:900;text-align:right;vertical-align:top;display:table-cell;padding:0 20px 0 0;margin-top:.3em}form .row label.focused[data-v-5d97d96d]{color:#ff00eb}form .field[data-v-5d97d96d]{width:100%;margin:0;display:inline-block}@media only screen and (min-width:850px){form .field[data-v-5d97d96d]{padding-right:80px}}form input[data-v-5d97d96d],form textarea[data-v-5d97d96d]{width:100%;padding:6px 12px;background:#000;color:#fff;border:2px solid #1c85ff;border-radius:9px;outline:none;box-sizing:border-box}form input[data-v-5d97d96d]:-webkit-autofill,form textarea[data-v-5d97d96d]:-webkit-autofill{background-color:#000;-webkit-text-fill-color:#fff;-webkit-box-shadow:0 0 0 1000px #000 inset;background-clip:content-box!important}form input[data-v-5d97d96d]:focus,form textarea[data-v-5d97d96d]:focus{border-color:#ff00eb}form textarea[data-v-5d97d96d]{height:125px;resize:none}form textarea[data-v-5d97d96d]::-moz-placeholder{color:#fff}form textarea[data-v-5d97d96d]::placeholder{color:#fff}form button[data-v-5d97d96d]{display:flex;align-items:center;background:#294dd2;color:#fff;cursor:pointer;font-family:"Montserrat",sans-serif;font-size:1.5em;font-weight:1000;border-radius:9px;border:none;outline:none;margin-left:auto;margin-right:auto;margin-top:1em;padding:.27em 1.2em .25em;text-transform:uppercase}form button.error[data-v-5d97d96d]{color:#ff00eb}form button input[data-v-5d97d96d]{border-color:#ff00eb}form .error-text[data-v-5d97d96d]{color:#ff00eb;text-transform:none;text-align:left;font-size:.8em;margin-top:2px;position:absolute}.lds-ring[data-v-5d97d96d]{display:block;position:relative;height:10px;margin:-14px auto 0 4px}.lds-ring div[data-v-5d97d96d]{box-sizing:border-box;display:block;position:absolute;width:16px;height:16px;margin:4px;border-radius:50%;-webkit-animation:lds-ring-data-v-5d97d96d 1.2s linear infinite;animation:lds-ring-data-v-5d97d96d 1.2s linear infinite;border:1px solid transparent;border-top-color:#fff}.lds-ring div[data-v-5d97d96d]:first-child{-webkit-animation-delay:-.45s;animation-delay:-.45s}.lds-ring div[data-v-5d97d96d]:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-ring div[data-v-5d97d96d]:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}.wiggle[data-v-5d97d96d]{-webkit-animation:wiggle-data-v-5d97d96d .25s ease-in-out;animation:wiggle-data-v-5d97d96d .25s ease-in-out}@-webkit-keyframes lds-ring-data-v-5d97d96d{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes lds-ring-data-v-5d97d96d{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@-webkit-keyframes wiggle-data-v-5d97d96d{0%{transform:rotate(0deg)}25%{transform:rotate(-1.5deg)}50%{transform:rotate(0deg)}75%{transform:rotate(1.5deg)}to{transform:rotate(0deg)}}@keyframes wiggle-data-v-5d97d96d{0%{transform:rotate(0deg)}25%{transform:rotate(-1.5deg)}50%{transform:rotate(0deg)}75%{transform:rotate(1.5deg)}to{transform:rotate(0deg)}}',""]),t.exports=e},388:function(t,e,d){"use strict";d(360)},389:function(t,e,d){var o=d(22),n=d(70),r=d(71),l=d(72),c=d(73),f=d(74);e=o(!1);var m=n(r),v=n(l),h=n(c),x=n(f);e.push([t.i,'body[data-v-54cdd47d],html[data-v-54cdd47d]{-webkit-overflow-scrolling:touch;overflow-scrolling:touch;scroll-behavior:auto}body[data-v-54cdd47d]{background:#000;color:#fff;text-align:center;margin:0;font-family:"Montserrat",sans-serif;font-size:16px;overflow-x:hidden;overflow-y:auto}.testimonial-bg[data-v-54cdd47d]{background:#1d19ab url('+m+")}@media screen and (max-width:768px){.testimonial-bg[data-v-54cdd47d]{background-image:url("+v+")}}.diamond-bg[data-v-54cdd47d]{background:#1d19ab url("+h+")}@media screen and (max-width:768px){.diamond-bg[data-v-54cdd47d]{background-image:url("+x+')}}.center-container[data-v-54cdd47d]{display:flex;justify-content:center}.close[data-v-54cdd47d]{cursor:pointer;position:absolute;right:32px;top:32px;width:32px;height:32px;opacity:.5}.close[data-v-54cdd47d]:hover{opacity:1}.close[data-v-54cdd47d]:after,.close[data-v-54cdd47d]:before{position:absolute;left:15px;content:" ";height:33px;width:2px;background-color:#fff}.close[data-v-54cdd47d]:before{transform:rotate(45deg)}.close[data-v-54cdd47d]:after{transform:rotate(-45deg)}.uppercase[data-v-54cdd47d]{text-transform:uppercase}.background[data-v-54cdd47d]{background-size:cover}.heading[data-v-54cdd47d]{font-size:2.9em;line-height:1em;font-weight:900;margin:0;text-transform:uppercase;white-space:pre-line}@media (max-width:850px){.heading[data-v-54cdd47d]{font-size:2em}}.subheading[data-v-54cdd47d]{font-style:italic;font-weight:400;line-height:1.5em;font-size:1.4em;margin:1.5em auto;max-width:70ch;white-space:pre-line}@media screen and (max-width:850px){.subheading[data-v-54cdd47d]{font-size:1.1em;line-height:1.4em}}@media screen and (max-width:850px){.can-play-webm .slide.box-slide .heading[data-v-54cdd47d],.can-play-webm .slide.diamond-bg .heading[data-v-54cdd47d]{padding-top:40px}.can-play-webm .slide.box-slide .col.thin[data-v-54cdd47d],.can-play-webm .slide.diamond-bg .col.thin[data-v-54cdd47d]{height:95vh;z-index:-1}.can-play-webm .slide.box-slide .col.thin video[data-v-54cdd47d],.can-play-webm .slide.diamond-bg .col.thin video[data-v-54cdd47d]{-o-object-fit:cover;object-fit:cover;-o-object-position:top center;object-position:top center;height:95vh;max-height:95vh}}.col[data-v-54cdd47d]{vertical-align:middle;display:table-cell;width:50%;position:relative}@media screen and (max-width:850px){.col.wide[data-v-54cdd47d]{margin:50vh 0 0}.col.half-margin[data-v-54cdd47d]{margin:33vh 0 0}.col.thin[data-v-54cdd47d]{position:absolute;top:0;left:0;height:50vh}}@media screen and (max-width:850px){.col.thin[data-v-54cdd47d],.col.wide[data-v-54cdd47d]{display:block;width:100%;min-width:auto}}.two-thirds .wide[data-v-54cdd47d]{width:55%}.two-thirds .thin[data-v-54cdd47d]{width:45%}@media screen and (max-width:850px){.two-thirds .thin[data-v-54cdd47d],.two-thirds .wide[data-v-54cdd47d]{width:100%}}b[data-v-54cdd47d]{font-style:italic}.col .video-to-background video[data-v-54cdd47d]{max-height:100%;max-width:100%;position:absolute!important;left:-5%;top:0;bottom:0;z-index:-1;width:100%;height:100%}@media screen and (max-width:850px){.col .video-to-background video[data-v-54cdd47d]{left:0}}.col .video-to-background video.head[data-v-54cdd47d]{max-height:110%;max-width:110%;width:110%;height:110%;left:-10%;top:-5%}@media (max-width:850px){.col .video-to-background video.head[data-v-54cdd47d]{max-height:100%;max-width:100%;width:100%;height:100%;left:0;top:0}}.wrapper[data-v-54cdd47d]{position:relative}.visible .fade[data-v-54cdd47d]{opacity:1}.fade-enter-active[data-v-54cdd47d],.fade-leave-active[data-v-54cdd47d]{transition:opacity .3s}.fade[data-v-54cdd47d],.fade-enter[data-v-54cdd47d],.fade-leave-to[data-v-54cdd47d]{opacity:0}.fade[data-v-54cdd47d]{transition:opacity .3s linear}.fade.delay[data-v-54cdd47d]{transition-delay:.45s}.frame .borders[data-v-54cdd47d]{border:10px solid rgba(0,0,0,.2);border-radius:12px;box-sizing:border-box}.frame .testimonial-bg[data-v-54cdd47d]{display:table;height:100%;min-width:100%;background-size:cover;background-position:100% 0;background-repeat:no-repeat}.frame .gradient[data-v-54cdd47d]{background:rgba(0,0,0,.12);padding:10px 30px;height:100%;box-sizing:border-box;display:table-cell;vertical-align:middle}.frame .border[data-v-54cdd47d]{border-radius:100%;border:10px solid rgba(0,0,0,.2);display:inline-block;overflow:hidden}.frame .client-photo[data-v-54cdd47d]{display:block;margin:0 auto;width:194px;height:194px;background:#fff}.frame q[data-v-54cdd47d]{font-size:2.65em;line-height:1.02em;font-weight:800;text-transform:uppercase;margin:15px 0;display:block}.frame .subheading[data-v-54cdd47d]{line-height:1.5em}.frame .person[data-v-54cdd47d]{font-weight:900;font-size:1.3em;text-transform:uppercase;margin:2em 0;letter-spacing:1px}.purple-box[data-v-54cdd47d]{width:165px;height:10px;background:#ff00eb;margin:0 auto}.no-margin[data-v-54cdd47d]{margin:0}.width-100[data-v-54cdd47d]{width:100%}.video-fallback .col[data-v-54cdd47d],.video-fallback .slide .content[data-v-54cdd47d]{position:static}.video-fallback .fallback-no-bg[data-v-54cdd47d]{background:none}@media (max-width:850px){.video-fallback .fallback-no-bg .col.wide[data-v-54cdd47d]{margin-top:55vh}.video-fallback .fallback-no-bg .col.wide .video-to-background video[data-v-54cdd47d]{left:0;-o-object-fit:contain;object-fit:contain}.video-fallback .fallback-no-bg .col.wide video[data-v-54cdd47d]{max-height:100%}}.contacts-modal[data-v-54cdd47d]{display:flex;flex-direction:column;align-items:center;text-align:center}.contacts-modal button[data-v-54cdd47d]{align-self:flex-end}.disable-scroll[data-v-54cdd47d]{overflow:hidden}.v--modal-overlay[data-v-54cdd47d]{background:rgba(0,0,0,.5)}@media (max-width:850px){.v--modal[data-v-54cdd47d]{top:0!important;left:0!important;width:100%!important;height:100%!important}}.v--modal[data-v-54cdd47d]{background-color:transparent}.text[data-v-54cdd47d]{white-space:pre-line;text-align:left}.text.main[data-v-54cdd47d]{font-size:1.5em;line-height:2em;font-weight:500}.text.name[data-v-54cdd47d]{font-size:1.75em;font-weight:900;color:#294dd2;text-transform:uppercase}.text.quote[data-v-54cdd47d]{line-height:2em;max-width:390px}.text.person[data-v-54cdd47d]{font-size:1em;font-weight:900;text-transform:uppercase;line-height:1.5em}.text.description[data-v-54cdd47d]{font-size:1.25em;line-height:1.5em;font-style:italic}.text.large[data-v-54cdd47d]{font-size:3.5em}.text.small[data-v-54cdd47d]{font-size:1em}.light-mode .wrapper[data-v-54cdd47d]:not(.main-page){background-color:#fff}.light-mode .wrapper:not(.main-page) .case-study-section[data-v-54cdd47d]{border-top:none}.light-mode .wrapper:not(.main-page) .case-study-section .content .container[data-v-54cdd47d]{border-bottom:8px solid #294dd2}.light-mode .wrapper:not(.main-page) .testimonial-bg[data-v-54cdd47d]:not(.case-study-section){background:none;border-top:8px solid #294dd2}.light-mode .wrapper:not(.main-page) .testimonial-bg:not(.case-study-section) .gradient[data-v-54cdd47d]{background:none}.light-mode .wrapper:not(.main-page) .testimonial-bg:not(.case-study-section) .button[data-v-54cdd47d],.light-mode .wrapper:not(.main-page) .testimonial-bg:not(.case-study-section) .text[data-v-54cdd47d]{color:#294dd2!important}.light-mode .wrapper:not(.main-page) .testimonial-bg:not(.case-study-section) .button[data-v-54cdd47d]{border-color:#294dd2}.light-mode .wrapper:not(.main-page) header[data-v-54cdd47d]{background-color:#fff}.light-mode .wrapper:not(.main-page) .company-name[data-v-54cdd47d],.light-mode .wrapper:not(.main-page) .contact .connect-link[data-v-54cdd47d],.light-mode .wrapper:not(.main-page) .contact .contact-link[data-v-54cdd47d],.light-mode .wrapper:not(.main-page) .toggle-text[data-v-54cdd47d],.light-mode .wrapper:not(.main-page) header a[data-v-54cdd47d]{color:#000}.light-mode .wrapper:not(.main-page) .testimonial-bg.slide[data-v-54cdd47d]{background-image:none;background-color:#fff;color:#294dd2}.light-mode .wrapper:not(.main-page) .slide[data-v-54cdd47d]:not(.footer):not(.last-slide):not(.two-thirds){background-color:#fff}.light-mode .wrapper:not(.main-page) .slide:not(.footer):not(.last-slide):not(.two-thirds) p[data-v-54cdd47d]{color:#294dd2}.light-mode .wrapper:not(.main-page) .slide:not(.footer):not(.last-slide):not(.two-thirds) .text[data-v-54cdd47d]{color:#000}.light-mode .wrapper:not(.main-page) .slide:not(.footer):not(.last-slide):not(.two-thirds) .text.heading[data-v-54cdd47d],.light-mode .wrapper:not(.main-page) .slide:not(.footer):not(.last-slide):not(.two-thirds) .text.name[data-v-54cdd47d],.light-mode .wrapper:not(.main-page) .slide:not(.footer):not(.last-slide):not(.two-thirds) .text.subtitle[data-v-54cdd47d]{color:#294dd2}.light-mode .wrapper:not(.main-page) .slide:not(.footer):not(.last-slide):not(.two-thirds).borderless .container[data-v-54cdd47d]{border:none}.light-mode .wrapper:not(.main-page) section.footer[data-v-54cdd47d]{background-color:#fff}.light-mode .wrapper:not(.main-page) section.footer .subtitle[data-v-54cdd47d]{color:#294dd2}.light-mode .wrapper:not(.main-page) section.footer footer .contacts[data-v-54cdd47d],.light-mode .wrapper:not(.main-page) section.footer footer .contacts a[data-v-54cdd47d]{color:#000}.light-mode .wrapper:not(.main-page) .head-slide .container[data-v-54cdd47d]{padding-bottom:48px}.light-mode .wrapper:not(.main-page) .purple-box[data-v-54cdd47d]{background-color:#294dd2}.light-mode .wrapper:not(.main-page) .testimonials-wrapper .testimonial-bg[data-v-54cdd47d],.light-mode .wrapper:not(.main-page) .testimonials-wrapper .testimonial-bg .person[data-v-54cdd47d]{color:#fff!important}.link-button[data-v-54cdd47d]{font-weight:900;font-size:1.1em;text-transform:uppercase;letter-spacing:1px;border:1px solid #fff;background:transparent;color:#fff;padding:.5em 2em;text-decoration:none;transition:all 1.25s cubic-bezier(.19,1,.22,1)}.link-button[data-v-54cdd47d]:hover{box-shadow:0 0 10px #fff}.link-button[data-v-54cdd47d]:active{box-shadow:inset 0 0 10px #fff}button.cta-button[data-v-54cdd47d]{text-transform:uppercase;background:#294dd2;color:#fff;font-family:"Montserrat",sans-serif;font-size:2em;font-weight:1000;border-radius:9px;border:none;outline:none;cursor:pointer;padding:.27em 1.2em .25em}.badges-on-page[data-v-54cdd47d]{margin-top:75px}.form-wrapper[data-v-54cdd47d]{border-radius:10px;border:1px solid grey;background:#000;height:425px;padding-left:25px;padding-top:60px;padding-bottom:60px}@media only screen and (max-width:850px){.form-wrapper[data-v-54cdd47d]{border:none;padding-left:15px;padding-right:15px;padding-top:80px}}.form-style[data-v-54cdd47d]{left:0;margin-right:0;margin-left:0}.result[data-v-54cdd47d]{align-items:center;display:flex;flex-direction:column;height:80%;justify-content:center}.result-logo[data-v-54cdd47d]{margin-bottom:25px}.result-heading[data-v-54cdd47d]{margin-bottom:10px}.subtitle-failure[data-v-54cdd47d]{font-size:1.3em;margin-top:10px}@media (max-width:450px){.subtitle-failure[data-v-54cdd47d]{font-size:12px;margin:6px 0}}.subtitle-failure a[data-v-54cdd47d],.subtitle-failure a[data-v-54cdd47d]:visited{color:#fff}@media only screen and (max-width:850px){.v--modal-overlay[data-v-54cdd47d]{background:#000!important}}',""]),t.exports=e}}]);