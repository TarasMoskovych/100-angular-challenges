(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{FUS3:function(e,t,n){"use strict";n.r(t),n.d(t,"DirectivesModule",function(){return v});var i=n("ofXK"),r=n("tyNb"),o=n("PCNd"),s=n("fXoL"),c=n("L21D"),a=n("3Pt+"),p=n("o0su");let l=(()=>{class e{constructor(e){this.snackbarService=e,this.text=""}onClick(){return e=this,void 0,n=function*(){yield navigator.clipboard.writeText(this.text),this.snackbarService.show(`Copied: "${this.text}"`)},new((t=void 0)||(t=Promise))(function(i,r){function o(e){try{c(n.next(e))}catch(t){r(t)}}function s(e){try{c(n.throw(e))}catch(t){r(t)}}function c(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t(function(e){e(n)})).then(o,s)}c((n=n.apply(e,[])).next())});var e,t,n}}return e.\u0275fac=function(t){return new(t||e)(s.Ib(p.a))},e.\u0275dir=s.Db({type:e,selectors:[["","appCopy",""]],hostBindings:function(e,t){1&e&&s.Ub("click",function(){return t.onClick()})},inputs:{text:["appCopy","text"]}}),e})();var u=n("RuMB");let b=(()=>{class e extends u.a{onClick(e){this.onEvent(e)}}return e.\u0275fac=function(t){return d(t||e)},e.\u0275dir=s.Db({type:e,selectors:[["","appDebounceClick",""]],hostBindings:function(e,t){1&e&&s.Ub("click",function(e){return t.onClick(e)})},features:[s.tb]}),e})();const d=s.Pb(b);let f=(()=>{class e{constructor(){this.className="ripple"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=s.Db({type:e,selectors:[["","appRipple",""]],hostVars:2,hostBindings:function(e,t){2&e&&s.yb(t.className)}}),e})(),h=(()=>{class e{constructor(e,t){this.elementRef=e,this.renderer=t,this.styles=[{name:"transition",value:"transform .3s"},{name:"transform",value:"scale(1.25)"},{name:"will-change",value:"transform"}]}onMouseOver(){this.styles.forEach(e=>{this.renderer.setStyle(this.elementRef.nativeElement,e.name,e.value)})}onMouseOut(){this.renderer.removeStyle(this.elementRef.nativeElement,"transform")}}return e.\u0275fac=function(t){return new(t||e)(s.Ib(s.l),s.Ib(s.D))},e.\u0275dir=s.Db({type:e,selectors:[["","appScale",""]],hostBindings:function(e,t){1&e&&s.Ub("mouseover",function(){return t.onMouseOver()})("mouseout",function(){return t.onMouseOut()})}}),e})(),m=(()=>{class e{constructor(e,t,n){this.window=e,this.el=t,this.cdr=n}ngAfterViewInit(){this[this.canLazyLoad()?"lazyLoadImage":"loadImage"]()}ngOnDestroy(){this.observer&&this.observer.disconnect()}canLazyLoad(){return this.window&&"IntersectionObserver"in this.window}lazyLoadImage(){this.observer=new IntersectionObserver(e=>{e.forEach(({isIntersecting:e})=>{e&&(this.loadImage(),this.observer.unobserve(this.el.nativeElement))})}),this.observer.observe(this.el.nativeElement)}loadImage(){this.srcAttr=this.src,this.cdr.markForCheck()}}return e.\u0275fac=function(t){return new(t||e)(s.Ib("Window"),s.Ib(s.l),s.Ib(s.h))},e.\u0275dir=s.Db({type:e,selectors:[["img","appLazyLoadImage",""]],hostVars:1,hostBindings:function(e,t){2&e&&s.xb("src",t.srcAttr,s.lc)},inputs:{src:"src"}}),e})(),g=(()=>{class e{constructor(){this.counter=0,this.copy="Copy text"}onLog(e){this.counter++,console.log(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Cb({type:e,selectors:[["app-directives"]],decls:22,vars:4,consts:[["title","Copy","subtitle","Directives","icon","fas fa-info-circle",1,"wrapper"],["body","",1,"d-flex"],["type","text","value","Copy text",3,"ngModel","ngModelChange"],[2,"margin-left","10px",3,"appCopy"],["title","Debounce Click","subtitle","Directives","icon","fas fa-info-circle",1,"wrapper"],["body",""],["appDebounceClick","",3,"debounceTime","debouncedEvent"],["title","Ripple","subtitle","Directives","icon","fas fa-info-circle",1,"wrapper"],["body","","appRipple",""],["title","Scale","subtitle","Directives","icon","fas fa-info-circle",1,"wrapper"],["appScale","","body","",2,"background-color","green","width","50px","height","50px"],["title","Lazy Load Image","subtitle","Directives","icon","fas fa-info-circle",1,"wrapper"],["appLazyLoadImage","","src","assets/img/img1.jpg","alt","",1,"img-fluid"],["appLazyLoadImage","","src","assets/img/img2.jpg","alt","",1,"img-fluid"],["appLazyLoadImage","","src","assets/img/img3.jpg","alt","",1,"img-fluid"]],template:function(e,t){1&e&&(s.Nb(0,"app-card",0),s.Nb(1,"div",1),s.Nb(2,"input",2),s.Ub("ngModelChange",function(e){return t.copy=e}),s.Mb(),s.Nb(3,"button",3),s.pc(4,"Copy"),s.Mb(),s.Mb(),s.Mb(),s.Nb(5,"app-card",4),s.Nb(6,"div",5),s.Nb(7,"button",6),s.Ub("debouncedEvent",function(e){return t.onLog(e)}),s.pc(8,"Increase Counter"),s.Mb(),s.pc(9),s.Mb(),s.Mb(),s.Nb(10,"app-card",7),s.Nb(11,"button",8),s.pc(12,"Ripple Button"),s.Mb(),s.Mb(),s.Nb(13,"app-card",9),s.Jb(14,"div",10),s.Mb(),s.Nb(15,"app-card",11),s.Nb(16,"div",5),s.Jb(17,"img",12),s.Jb(18,"br"),s.Jb(19,"img",13),s.Jb(20,"br"),s.Jb(21,"img",14),s.Mb(),s.Mb()),2&e&&(s.wb(2),s.cc("ngModel",t.copy),s.wb(1),s.cc("appCopy",t.copy),s.wb(4),s.cc("debounceTime",200),s.wb(2),s.rc(" ",t.counter," "))},directives:[c.a,a.a,a.g,a.i,l,b,f,h,m],styles:[""],changeDetection:0}),e})(),v=(()=>{class e{}return e.\u0275mod=s.Gb({type:e}),e.\u0275inj=s.Fb({factory:function(t){return new(t||e)},imports:[[i.c,o.a,r.c.forChild([{path:"",component:g}])]]}),e})()}}]);