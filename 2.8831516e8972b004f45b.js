(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"1ua0":function(t,e,n){"use strict";n.d(e,"a",function(){return i.a}),n.d(e,"b",function(){return o.a}),n.d(e,"c",function(){return m}),n("L21D");var i=n("N619"),o=(n("aF9I"),n("668k"),n("CI8k")),r=n("R0Ic"),s=n("fXoL"),c=n("LRne"),a=n("3E0/"),l=n("IzEk"),u=n("aDQ/"),d=n("ofXK");function h(t,e){if(1&t){const t=s.Ob();s.Nb(0,"button",4),s.Ub("click",function(){return s.jc(t),s.Wb(2).close()}),s.pc(1,"Close "),s.Mb()}}function p(t,e){if(1&t&&(s.Nb(0,"div",1),s.Nb(1,"div",2),s.pc(2),s.nc(3,h,2,0,"button",3),s.Mb(),s.Mb()),2&t){const t=s.Wb();s.cc("@fade",void 0),s.wb(2),s.rc(" ",t.message," "),s.wb(1),s.cc("ngIf",!t.autoclose)}}const b={opacity:1,height:"*",transform:"*"},f={opacity:0,height:0,transform:"scale(0)"};let m=(()=>{class t{constructor(t){this.cdr=t,this.message="Default message",this.ms=3e3,this.autoclose=!0,this.afterClosed=new s.n,this.shown=!0}ngOnInit(){this.autoclose&&this.onClose()}close(){this.shown=!1,this.cdr.markForCheck(),this.afterClosed.emit()}onClose(){Object(c.a)(!0).pipe(Object(a.a)(this.ms),Object(l.a)(1)).subscribe(()=>this.close())}}return t.\u0275fac=function(e){return new(e||t)(s.Ib(s.h))},t.\u0275cmp=s.Cb({type:t,selectors:[["app-snackbar"]],inputs:{message:"message",ms:"ms",autoclose:"autoclose"},outputs:{afterClosed:"afterClosed"},decls:1,vars:1,consts:[["class","snackbar",4,"ngIf"],[1,"snackbar"],[1,"snackbar__container"],["class","snackbar__close-btn",3,"click",4,"ngIf"],[1,"snackbar__close-btn",3,"click"]],template:function(t,e){1&t&&s.nc(0,p,4,3,"div",0),2&t&&s.cc("ngIf",e.shown)},directives:[d.n],styles:[".snackbar[_ngcontent-%COMP%]{margin-bottom:15px;text-align:center}.snackbar__container[_ngcontent-%COMP%]{background-color:#252525;border-radius:4px;color:#d9d9d9;display:inline-block;font-size:.95rem;padding:10px 20px;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);transition:all .3s cubic-bezier(.25,.8,.25,1)}.snackbar__close-btn[_ngcontent-%COMP%]{margin-left:15px}.snackbar__close-btn[_ngcontent-%COMP%]:hover{background-color:#003d66;color:#fff}"],data:{animation:[Object(r.i)("fade",Object(u.a)(250,b,f))]},changeDetection:0}),t})();n("S9hJ"),n("FUlN")},"3E0/":function(t,e,n){"use strict";n.d(e,"a",function(){return l});var i=n("D0XW"),o=n("7o/Q"),r=n("EY2u"),s=n("LRne"),c=n("HDdC");let a=(()=>{class t{constructor(t,e,n){this.kind=t,this.value=e,this.error=n,this.hasValue="N"===t}observe(t){switch(this.kind){case"N":return t.next&&t.next(this.value);case"E":return t.error&&t.error(this.error);case"C":return t.complete&&t.complete()}}do(t,e,n){switch(this.kind){case"N":return t&&t(this.value);case"E":return e&&e(this.error);case"C":return n&&n()}}accept(t,e,n){return t&&"function"==typeof t.next?this.observe(t):this.do(t,e,n)}toObservable(){switch(this.kind){case"N":return Object(s.a)(this.value);case"E":return t=this.error,new c.a(e=>e.error(t));case"C":return Object(r.b)()}var t;throw new Error("unexpected notification kind value")}static createNext(e){return void 0!==e?new t("N",e):t.undefinedValueNotification}static createError(e){return new t("E",void 0,e)}static createComplete(){return t.completeNotification}}return t.completeNotification=new t("C"),t.undefinedValueNotification=new t("N",void 0),t})();function l(t,e=i.a){var n;const o=(n=t)instanceof Date&&!isNaN(+n)?+t-e.now():Math.abs(t);return t=>t.lift(new u(o,e))}class u{constructor(t,e){this.delay=t,this.scheduler=e}call(t,e){return e.subscribe(new d(t,this.delay,this.scheduler))}}class d extends o.a{constructor(t,e,n){super(t),this.delay=e,this.scheduler=n,this.queue=[],this.active=!1,this.errored=!1}static dispatch(t){const e=t.source,n=e.queue,i=t.scheduler,o=t.destination;for(;n.length>0&&n[0].time-i.now()<=0;)n.shift().notification.observe(o);if(n.length>0){const e=Math.max(0,n[0].time-i.now());this.schedule(t,e)}else this.unsubscribe(),e.active=!1}_schedule(t){this.active=!0,this.destination.add(t.schedule(d.dispatch,this.delay,{source:this,destination:this.destination,scheduler:t}))}scheduleNotification(t){if(!0===this.errored)return;const e=this.scheduler,n=new h(e.now()+this.delay,t);this.queue.push(n),!1===this.active&&this._schedule(e)}_next(t){this.scheduleNotification(a.createNext(t))}_error(t){this.errored=!0,this.queue=[],this.destination.error(t),this.unsubscribe()}_complete(){this.scheduleNotification(a.createComplete()),this.unsubscribe()}}class h{constructor(t,e){this.time=t,this.notification=e}}},"668k":function(t,e,n){"use strict";n.d(e,"a",function(){return u});var i=n("CI8k"),o=n("fXoL"),r=n("ofXK");function s(t,e){1&t&&o.Jb(0,"div",5)}function c(t,e){if(1&t&&(o.Nb(0,"span"),o.pc(1),o.Mb()),2&t){const t=e.$implicit;o.wb(1),o.qc(t)}}function a(t,e){if(1&t&&(o.Nb(0,"div",6),o.nc(1,c,2,1,"span",7),o.Mb()),2&t){const t=o.Wb(2);o.wb(1),o.cc("ngForOf",t.text.split(""))}}function l(t,e){if(1&t&&(o.Nb(0,"div",1),o.Lb(1,2),o.nc(2,s,1,0,"div",3),o.nc(3,a,2,1,"div",4),o.Kb(),o.Mb()),2&t){const t=o.Wb();o.wb(1),o.cc("ngSwitch",t.type),o.wb(1),o.cc("ngSwitchCase",t.loaderTypes.Circular)}}let u=(()=>{class t{constructor(){this.shown=!1,this.type=i.a.Circular,this.loaderTypes=i.a,this.text="Loading"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Cb({type:t,selectors:[["app-loader"]],inputs:{shown:"shown",type:"type"},decls:1,vars:1,consts:[["class","loader",4,"ngIf"],[1,"loader"],[3,"ngSwitch"],["class","loader__circle",4,"ngSwitchCase"],["class","loader__text",4,"ngSwitchDefault"],[1,"loader__circle"],[1,"loader__text"],[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&o.nc(0,l,4,2,"div",0),2&t&&o.cc("ngIf",e.shown)},directives:[r.n,r.p,r.q,r.r,r.m],styles:[".loader[_ngcontent-%COMP%]{align-items:center;background-color:hsla(0,0%,100%,.6);display:flex;justify-content:center;height:100%;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:100%}.loader__circle[_ngcontent-%COMP%]{animation:loader-spin 1.5s linear infinite;border-radius:50%;border:10px solid #eee;border-top-color:#007acc;height:80px;margin:auto;width:80px}.loader__text[_ngcontent-%COMP%]{font-size:2.8rem}.loader__text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{animation:loader-scale .7s infinite alternate;display:inline-block;margin:0 -.05em}.loader__text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){animation-delay:.1s}.loader__text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){animation-delay:.2s}.loader__text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4){animation-delay:.3s}.loader__text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(5){animation-delay:.4s}.loader__text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(6){animation-delay:.5s}.loader__text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(7){animation-delay:.6s}@keyframes loader-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes loader-scale{0%{transform:scale(1)}to{transform:scale(.8)}}"],changeDetection:0}),t})()},CI8k:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=function(t){return t.Circular="Circular",t.Loading="Loading",t}({})},D0XW:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var i=n("quSY");class o extends i.a{constructor(t,e){super()}schedule(t,e=0){return this}}class r extends o{constructor(t,e){super(t,e),this.scheduler=t,this.work=e,this.pending=!1}schedule(t,e=0){if(this.closed)return this;this.state=t;const n=this.id,i=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(i,n,e)),this.pending=!0,this.delay=e,this.id=this.id||this.requestAsyncId(i,this.id,e),this}requestAsyncId(t,e,n=0){return setInterval(t.flush.bind(t,this),n)}recycleAsyncId(t,e,n=0){if(null!==n&&this.delay===n&&!1===this.pending)return e;clearInterval(e)}execute(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const n=this._execute(t,e);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,e){let n=!1,i=void 0;try{this.work(t)}catch(o){n=!0,i=!!o&&o||new Error(o)}if(n)return this.unsubscribe(),i}_unsubscribe(){const t=this.id,e=this.scheduler,n=e.actions,i=n.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==i&&n.splice(i,1),null!=t&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null}}let s=(()=>{class t{constructor(e,n=t.now){this.SchedulerAction=e,this.now=n}schedule(t,e=0,n){return new this.SchedulerAction(this,t).schedule(n,e)}}return t.now=()=>Date.now(),t})();class c extends s{constructor(t,e=s.now){super(t,()=>c.delegate&&c.delegate!==this?c.delegate.now():e()),this.actions=[],this.active=!1,this.scheduled=void 0}schedule(t,e=0,n){return c.delegate&&c.delegate!==this?c.delegate.schedule(t,e,n):super.schedule(t,e,n)}flush(t){const{actions:e}=this;if(this.active)return void e.push(t);let n;this.active=!0;do{if(n=t.execute(t.state,t.delay))break}while(t=e.shift());if(this.active=!1,n){for(;t=e.shift();)t.unsubscribe();throw n}}}const a=new c(r)},Kj3r:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=n("7o/Q"),o=n("D0XW");function r(t,e=o.a){return n=>n.lift(new s(t,e))}class s{constructor(t,e){this.dueTime=t,this.scheduler=e}call(t,e){return e.subscribe(new c(t,this.dueTime,this.scheduler))}}class c extends i.a{constructor(t,e,n){super(t),this.dueTime=e,this.scheduler=n,this.debouncedSubscription=null,this.lastValue=null,this.hasValue=!1}_next(t){this.clearDebounce(),this.lastValue=t,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(a,this.dueTime,this))}_complete(){this.debouncedNext(),this.destination.complete()}debouncedNext(){if(this.clearDebounce(),this.hasValue){const{lastValue:t}=this;this.lastValue=null,this.hasValue=!1,this.destination.next(t)}}clearDebounce(){const t=this.debouncedSubscription;null!==t&&(this.remove(t),t.unsubscribe(),this.debouncedSubscription=null)}}function a(t){t.debouncedNext()}},L21D:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var i=n("fXoL"),o=n("ofXK");function r(t,e){if(1&t&&i.Jb(0,"i"),2&t){const t=i.Wb();i.yb(t.icon)}}const s=[[["","body",""]],[["","footer",""]]],c=function(t){return{"background-color":t}},a=["[body]","[footer]"];let l=(()=>{class t{constructor(){this.color="#40c980"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Cb({type:t,selectors:[["app-card"]],inputs:{title:"title",subtitle:"subtitle",icon:"icon",color:"color"},ngContentSelectors:a,decls:13,vars:6,consts:[[1,"card"],[1,"card__title",3,"ngStyle"],[3,"class",4,"ngIf"],[1,"card__title-content"],[1,"card__content"],[1,"card__content-body"],[1,"card__content-footer"]],template:function(t,e){1&t&&(i.bc(s),i.Nb(0,"div",0),i.Nb(1,"div",1),i.nc(2,r,1,2,"i",2),i.Nb(3,"div",3),i.Nb(4,"h5"),i.pc(5),i.Mb(),i.Nb(6,"span"),i.pc(7),i.Mb(),i.Mb(),i.Mb(),i.Nb(8,"div",4),i.Nb(9,"div",5),i.ac(10),i.Mb(),i.Nb(11,"div",6),i.ac(12,1),i.Mb(),i.Mb(),i.Mb()),2&t&&(i.wb(1),i.cc("ngStyle",i.ec(4,c,e.color)),i.wb(1),i.cc("ngIf",e.icon),i.wb(3),i.rc(" ",e.title," "),i.wb(2),i.rc(" ",e.subtitle," "))},directives:[o.o,o.n],styles:["[_nghost-%COMP%]{width:100%}.card[_ngcontent-%COMP%]{border-radius:5px;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);transition:all .3s cubic-bezier(.25,.8,.25,1)}.card__title[_ngcontent-%COMP%]{color:#fff}.card__title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:8px}.card__title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.8rem}.card__content[_ngcontent-%COMP%], .card__title[_ngcontent-%COMP%]{padding:10px}.card__title[_ngcontent-%COMP%]{align-items:center;border-top-left-radius:5px;border-top-right-radius:5px;display:flex}.card__content-body[_ngcontent-%COMP%]{padding:10px 0 25px}"],changeDetection:0}),t})()},N619:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=n("fXoL"),o=n("3Pt+");let r=(()=>{class t{constructor(t){this.fb=t,this.formSubmit=new i.n}ngOnInit(){this.buildForm()}onSubmit(){this.formSubmit.emit({values:this.form.value,form:this.form})}isInvalid(t){const e=this.form.get(t);return e.touched&&e.invalid}buildForm(){this.form=this.fb.group({name:["",[o.l.required]],email:["",[o.l.required,o.l.email]],message:[""]})}}return t.\u0275fac=function(e){return new(e||t)(i.Ib(o.b))},t.\u0275cmp=i.Cb({type:t,selectors:[["app-email-form"]],outputs:{formSubmit:"formSubmit"},decls:22,vars:6,consts:[[1,"email-form",3,"formGroup","submit"],[1,"email-form__title"],[1,"email-form__section"],[1,"email-form__input-wrapper"],[1,"email-form__label"],["type","text","placeholder","Your Name","formControlName","name",1,"email-form__input"],["aria-hidden","true",1,"email-form__input-icon","fas","fa-user"],[1,"email-form__message"],["type","email","placeholder","Your Email","formControlName","email",1,"email-form__input"],["aria-hidden","true",1,"email-form__input-icon","fas","fa-envelope"],["placeholder","Your Message","rows","5","formControlName","message",1,"email-form__input","email-form__input--textarea"],["aria-hidden","true",1,"email-form__input-icon","email-form__input-icon--top","fas","fa-comment"],[3,"disabled"]],template:function(t,e){1&t&&(i.Nb(0,"form",0),i.Ub("submit",function(){return e.onSubmit()}),i.Nb(1,"h2",1),i.pc(2,"Get in Touch"),i.Mb(),i.Nb(3,"div",2),i.Nb(4,"div",3),i.Nb(5,"label",4),i.Jb(6,"input",5),i.Jb(7,"i",6),i.Mb(),i.Nb(8,"div",7),i.pc(9," Please, enter Name. "),i.Mb(),i.Mb(),i.Nb(10,"div",3),i.Nb(11,"label",4),i.Jb(12,"input",8),i.Jb(13,"i",9),i.Mb(),i.Nb(14,"div",7),i.pc(15," Please, enter valid Email. "),i.Mb(),i.Mb(),i.Mb(),i.Nb(16,"div",3),i.Nb(17,"label",4),i.Jb(18,"textarea",10),i.Jb(19,"i",11),i.Mb(),i.Mb(),i.Nb(20,"button",12),i.pc(21,"Submit"),i.Mb(),i.Mb()),2&t&&(i.cc("formGroup",e.form),i.wb(4),i.Ab("email-form__input-wrapper--invalid",e.isInvalid("name")),i.wb(6),i.Ab("email-form__input-wrapper--invalid",e.isInvalid("email")),i.wb(10),i.cc("disabled",e.form.invalid))},directives:[o.m,o.h,o.d,o.a,o.g,o.c],styles:[".email-form__title[_ngcontent-%COMP%]{color:#007acc;margin-bottom:15px}.email-form__section[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;column-gap:10px}@media (max-width:768px){.email-form__section[_ngcontent-%COMP%]{display:block}}.email-form__input[_ngcontent-%COMP%], .email-form__input-wrapper[_ngcontent-%COMP%]{width:100%}.email-form__label[_ngcontent-%COMP%]{display:block;position:relative;transition:.1s}.email-form__input[_ngcontent-%COMP%]{border:2px solid #929293;border-radius:5px;outline:none;padding:10px 10px 10px 30px;transition:.3s}.email-form__input[_ngcontent-%COMP%]:focus + i[_ngcontent-%COMP%]{color:#007acc}.email-form__input.ng-touched.ng-valid[_ngcontent-%COMP%]{border-color:#40c980}.email-form__input.ng-touched.ng-valid[_ngcontent-%COMP%] + i[_ngcontent-%COMP%]{color:#40c980}.email-form__input-wrapper[_ngcontent-%COMP%]{margin:0 0 15px}.email-form__input-wrapper--invalid[_ngcontent-%COMP%]   .email-form__label[_ngcontent-%COMP%]{border-left:5px solid #ff6058}.email-form__input-wrapper--invalid[_ngcontent-%COMP%]   .email-form__input[_ngcontent-%COMP%]{border-left-color:#ff6058;border-top-left-radius:0;border-bottom-left-radius:0}.email-form__input-wrapper--invalid[_ngcontent-%COMP%]   .email-form__input[_ngcontent-%COMP%]:focus{border-color:#ff6058}.email-form__input-wrapper--invalid[_ngcontent-%COMP%]   .email-form__input[_ngcontent-%COMP%]:focus + i[_ngcontent-%COMP%]{color:#ff6058}.email-form__input-wrapper--invalid[_ngcontent-%COMP%]   .email-form__input-icon[_ngcontent-%COMP%]{color:#ff6058;transition:.3s}.email-form__input-wrapper--invalid[_ngcontent-%COMP%]   .email-form__message[_ngcontent-%COMP%]{display:block}.email-form__input-icon[_ngcontent-%COMP%]{left:10px;position:absolute;top:50%;transform:translateY(-50%)}.email-form__input-icon--top[_ngcontent-%COMP%]{top:13px;transform:none}.email-form__input[_ngcontent-%COMP%]:focus{border-color:#007acc}.email-form__message[_ngcontent-%COMP%]{color:#ff6058;display:none;font-size:.8rem;font-weight:500;margin-top:5px}"],changeDetection:0}),t})()},RuMB:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var i=n("fXoL"),o=n("XNiG"),r=n("Kj3r");let s=(()=>{class t{constructor(){this.subject=new o.a,this.debounceTime=500,this.debouncedEvent=new i.n}ngOnInit(){this.subscribe()}ngOnDestroy(){this.subject.complete()}onEvent(t){t.preventDefault(),t.stopPropagation(),this.subject.next(t)}subscribe(){this.subject.pipe(Object(r.a)(this.debounceTime)).subscribe(t=>this.debouncedEvent.emit(t))}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=i.Db({type:t,inputs:{debounceTime:"debounceTime"},outputs:{debouncedEvent:"debouncedEvent"}}),t})()},"aDQ/":function(t,e,n){"use strict";n.d(e,"a",function(){return o});var i=n("R0Ic");const o=(t=200,e={opacity:1},n={opacity:0})=>[Object(i.h)(":leave",[Object(i.g)(e),Object(i.e)(t,Object(i.g)(n))]),Object(i.h)(":enter",[Object(i.g)(n),Object(i.e)(t,Object(i.g)(e))])]},j7lE:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var i=n("lJxs"),o=n("3E0/"),r=n("fXoL"),s=n("tk/3");let c=(()=>{class t{constructor(t){this.httpClient=t,this.url="https://jsonplaceholder.typicode.com/users"}get(){return this.httpClient.get(this.url).pipe(Object(i.a)(t=>t.map(t=>this.mapUser(t))))}getOne(){return this.httpClient.get(`${this.url}/${Math.floor(10*Math.random())+1}`).pipe(Object(i.a)(t=>this.mapUser(t)),Object(o.a)(1e3))}mapUser(t){const{name:e,email:n,phone:i,website:o}=t;return{name:e,email:n,phone:i,website:o}}}return t.\u0275fac=function(e){return new(e||t)(r.Rb(s.a))},t.\u0275prov=r.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},o0su:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return l.a});var i=n("ofXK"),o=n("IzEk"),r=n("3E0/"),s=n("1ua0"),c=n("fXoL");let a=(()=>{class t{constructor(t,e,n,i){this.document=t,this.componentFactoryResolver=e,this.appRef=n,this.injector=i,this.wrapperSelector="snackbar-wrapper"}show(t="Default message",e=!0,n=3e3){return this.appendComponent(t,e,n)}appendComponent(t,e,n){let i=this.componentFactoryResolver.resolveComponentFactory(s.c).create(this.injector);const{instance:c}=i;c.message=t,c.ms=n,c.autoclose=e,this.appRef.attachView(i.hostView);const a=i.hostView.rootNodes[0];return this.getContainer().append(a),c.afterClosed.pipe(Object(o.a)(1),Object(r.a)(250)).subscribe(()=>{this.appRef.detachView(i.hostView),i.destroy()}),c}getContainer(){let t=this.document.querySelector("."+this.wrapperSelector);return t||(t=this.document.createElement("div"),t.setAttribute("class",this.wrapperSelector),this.document.body.appendChild(t)),t}}return t.\u0275fac=function(e){return new(e||t)(c.Rb(i.d),c.Rb(c.j),c.Rb(c.g),c.Rb(c.r))},t.\u0275prov=c.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var l=n("j7lE")}}]);