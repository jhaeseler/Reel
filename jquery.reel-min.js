/*
 Copyright (c) 2009-2011 Petr Vostrel (http://petr.vostrel.cz/)
 Dual licensed under the MIT (MIT-LICENSE.txt)
 and GPL (GPL-LICENSE.txt) licenses.

 jQuery Reel
 http://jquery.vostrel.cz/reel
 Version: 1.1.3-devel
 Updated: 2011-11-09

 Requires jQuery 1.4.2 or higher
*/
jQuery.reel||function(i,nb,ra,q){function F(f){return i.reel.instances.length?i.reel.instances.first().data(f):null}function ob(f){return i.reel.instances.push(f[0])&&f}function pb(f){return(i.reel.instances=i.reel.instances.not("#"+f.attr(V)))&&f}function sa(f){return qb&&"data:image/gif;base64,R0lGODlh"+f}function rb(f){return"<"+f+"/>"}function ta(f){return"."+f}function ua(f){return"http://code.vostrel.cz/"+f}function va(f){return"url("+f+")"}function P(f,a,o){return W(f,Ra(a,o))}function sb(f){function a(){i.fn[this]||
(i.fn[this]=function(){return this})}i.each(f,a)}function wa(f,a){return z(f)*(a?-1:1)}function ba(f){return f.originalEvent.touches[0]}i.reel={version:"1.1.3-devel",def:{footage:6,frame:1,frames:36,hint:"",horizontal:true,hotspot:q,indicator:0,klass:"",loops:true,reversed:q,spacing:0,stitched:0,suffix:"-reel",tooltip:"",area:q,brake:0.5,clickfree:false,cw:false,delay:-1,directional:false,draggable:true,entry:q,graph:q,image:q,images:[],inversed:false,laziness:6,monitor:q,opening:0,orbital:0,path:"",
preloader:4,rebound:0.5,revolution:q,row:1,rows:0,speed:0,step:q,steps:q,tempo:36,timeout:2,throwable:true,vertical:false,wheelable:true,attr:{},scrollable:true,velocity:0}};i.fn.reel=function(f){var a=i.extend({},i.reel.def,f);f=function(g){var t=[];g.filter(tb).each(function(){var c=i(this),d=a.images.length&&a.images||a.image||a.attr.src||c.attr(Sa),w=ca(a.attr.width||c.css(Ta)),m=ca(a.attr.height||c.css(Ua));!d||d==Va||!w||!m||t.push(c)});g.filter(ta(A)).each(function(){t.push(i(this).trigger("teardown"))});
return i(t)}(this);var o=[];a.reversed&&(a.cw=true);a.tooltip&&(a.hint=a.tooltip);a.hotspot&&(a.area=a.hotspot);f.each(function(){var g=i(this),t=g.data(),c=function(h,b){t[h]=b;g.trigger("store",[h,b]);return b},d=function(h){var b=t[h];g.trigger("recall",[h,b]);return b},w={setup:function(h){if(g.hasClass(A))return m.call(h);var b=g.attr(a.attr).attr(Sa),e=c(V,g.attr(V)||g.attr(V,A+"-"+ +new Date).attr(V)),k=g.attr("style"),j=i.extend({},g.data()),l=a.images,n=a.stitched,p=a.loops,r={x:ca(g.css(Ta)||
a.attr.width),y:ca(g.css(Ua)||a.attr.height)},B=c(xa,a.orbital&&a.footage||a.rows<=1&&l.length||a.frames),D=n?1:Wa(B/a.footage),X={display:"block",width:r.x,height:r.y};e="#"+e+a.suffix;var Xa=g.attr("class")||"",ya={position:"relative",width:r.x,height:r.y};ya=i(Y,{id:e.substr(1),"class":Xa+za+ub,css:ya}).bind("openingDone",da);X=g.wrap(ya).attr({"class":A}).css(X).bind(w);o.push(ob(X)[0]);c(Ya,l.length&&l.length||a.image||b.replace(/^(.*)\.(jpg|jpeg|png|gif)$/,"$1"+a.suffix+".$2"));c(Za,[]);c(G,
a.frame);c($a,a.spacing);c(Q,r);c(s,0);c(Aa,a.steps||a.frames);c(ea,a.revolution||n/2||r.x*2);c(Ba,D);c(fa,1/(B-(p&&!n?0:1)));c(vb,1/W(B,d(Aa)));c(Ca,n);c(ab,n-(p?0:r.x));c(ga,e);c(L,c(Da,a.speed)<0);c(R,a.velocity||0);c(S,a.vertical);c(E,(a.row-1)/(a.rows-1));c(ha,wa(1,!a.cw&&!n));c(Z,false);c(bb,a.brake);c(Ea,!!a.orbital);c(H,a.tempo/(i.reel.lazy?a.laziness:1));c(ia,0);c(cb,{src:b,classes:Xa,style:k||Va,data:j});I.bind(M,w.tick);m.call(h);g.trigger("start")},teardown:function(h){var b=g.data(cb);
g.parent().unbind("openingDone",da).children("img").unbind(u);g.unbind(u).unbind(w).attr({"class":b.classes,src:b.src,style:b.style}).removeClass(A);g.data(b.data).siblings().remove();g.unwrap();pb(g);ja();I.unbind(M,w.tick).unbind(M,w.opening_tick);ka.unbind(Fa).unbind(Ga);m.call(h)},start:function(){var h=d(Q),b=d(xa),e=W(b,d(Aa));e=c(s,1/e*((a.step||a.frame)-1));c(G,N(e*b)+1);g.attr("id");b=g.parent();e=i(Y,{"class":wb,css:{position:la,left:0,top:0,width:h.x,height:h.y,background:Ha,opacity:0}}).appendTo(b);
var k=!d(Z)||a.rows<=1||!a.orbital||a.scrollable;e=c(db,i(a.area||e));if(i.reel.touchy){g.css({WebkitUserSelect:"none",WebkitBackgroundSize:a.images.length?"auto":d(Ca)&&d(Ca)+"px "+h.y+"px"||h.x*a.footage+"px "+h.y*d(Ba)*(a.rows||1)*(a.directional?2:1)+"px"});e.bind(xb,function(j){g.trigger("down",[ba(j).clientX,ba(j).clientY,true])}).bind(yb,function(j){g.trigger("pan",[ba(j).clientX,ba(j).clientY,true]);return!k}).bind(zb,function(){g.trigger("up",[true]);return false}).bind(Ab,function(){g.trigger("up",
[true]);return false})}else e.css({cursor:"url("+eb+"), "+Ia}).bind(a.wheelable?Bb:"",function(j,l){g.trigger("wheel",[l]);return false}).bind(Cb,function(){g.trigger("play")}).bind(a.clickfree?Db:Eb,function(j){if(j.which==1){g.trigger("down",[j.clientX,j.clientY]);return false}}).bind(a.clickfree?Fb:"",function(){g.trigger("up");return false}).disableTextSelect();a.hint&&e.attr(Gb,a.hint);a.monitor&&b.append(J=i(Y,{"class":Hb,css:{position:la,left:0,top:0}}))||(J=i());a.indicator&&b.append(C("x"));
a.rows>1&&a.indicator&&b.append(C("y"));g.trigger("preload")},preload:function(h){var b=d(Q),e=g.parent(),k=d(Ya),j=a.images,l=!j.length?[k]:i.reel.math.spread(j,a,d),n=[],p=g[0];p.frames=l.length;p.preloaded=0;g.trigger("stop");for(e.append(v=i(Y,{"class":Ib,css:{position:la,left:0,top:b.y-a.preloader,height:a.preloader,overflow:fb,backgroundColor:Ha}}));l.length;){var r=a.path+l.shift(),B=i(new Image).hide().attr({width:b.x,height:b.y}).bind("load"+u,function(){p.preloaded++;i(this).unbind(u);v.css({width:1/
p.frames*p.preloaded*b.x});if(p.frames==p.preloaded){v.remove();j.length||g.attr({src:Jb}).css({backgroundImage:va(a.path+k)});g.trigger(a.rows>1&&!a.stitched?"rowChange":"frameChange").trigger("loaded").trigger("opening");m.call(h)}});e.append(B);n.push(r);setTimeout(function(D,X){return function(){D.attr({src:X})}}(B,r),0)}c(Za,n)},tick:function(h){var b=d(R);if(K){var e=b-d(bb)/F(H)*K;b=!(b*e<=0||b<z(e))&&c(R,b>z(d(Da))?e:(K=x=0))}J.text(d(a.monitor));b&&K++;x&&x++;gb(0);Ja=true;if(x&&!b)return m.call(h);
if(d(ma))return m.call(h,y());e=d(ha)*wa(1,d(L));var k=(d(Ka)?b:z(d(Da))+b)/F(H);b=d(s);e=c(s,b-k*e);m.call(h);e!=b&&g.trigger("fractionChange")},opening:function(){var h=a.entry||a.speed,b=d(s),e=a.opening;c(s,b-h*a.opening);c(ia,e*F(H));I.bind(M,w.opening_tick)},opening_tick:function(h){var b=(a.entry||a.speed)/F(H)*(a.cw?-1:1),e=d(s);c(s,e+b);b=c(ia,d(ia)-1);g.trigger("fractionChange");m.call(h);if(!(b>1)){I.unbind(M,w.opening_tick);g.trigger("openingDone")}},play:function(h){var b=c(La,true);
c(Ka,!b);$();m.call(h)},pause:function(h){c(La,false);y();m.call(h)},stop:function(h){var b=c(Ka,true);c(La,!b);m.call(h)},down:function(h,b,e,k){if(a.draggable){c(ma,d(G));c(R,0);na=oa(b,e,d(s),d(ea),d(E));y();ja();if(!k){ka.css({cursor:va(Kb)+", "+Ia}).bind(Ga,function(j){g.trigger("pan",[j.clientX,j.clientY]);m.call(j);return false});a.clickfree||ka.bind(Fa,function(j){g.trigger("up");m.call(j)})}}m.call(h)},up:function(h,b){if(!a.draggable)return m.call(h);c(ma,false);c(Z,false);var e=c(R,!a.throwable?
0:z(aa[0]+aa[1])/60);K=e?1:0;e?$():y();ja();!b&&ka.unbind(Fa).unbind(Ga)&&d(db).css({cursor:va(eb)+", "+Ia});m.call(h)},pan:function(h,b,e){if(a.draggable&&Ja){Ja=false;y();var k={x:b-na.x,y:e-na.y};if(z(k.x)>0||z(k.y)>0){na={x:b,y:e};var j=d(ea),l=d(hb),n=d(S),p=c(s,ib(n?e-l.y:b-l.x,d(Ma),j,d(Na),d(Oa),d(ha)));c(Z,d(Z)||d(G)!=d(ma));(k=gb(n?k.y:k.x||0))&&c(L,k<0);if(a.orbital&&d(Ea)){c(S,z(e-l.y)>z(b-l.x));l=oa(b,e,p,j,d(E))}if(a.rows>1){k=d(Q).y;n=d(jb);var r=-n*k;c(E,i.reel.math.envelope(e-l.y,
n,k,r,r+k,-1))}!(p%1)&&!a.loops&&oa(b,e,p,j,d(E));g.trigger("fractionChange")}}m.call(h)},wheel:function(h,b){var e=Wa(Lb(z(b))/2);e=wa(e,b>0);b=0.2*d(ea);oa(q,q,d(s),b,d(E));c(s,ib(e,d(Ma),b,d(Na),d(Oa),d(ha)));e&&c(L,e<0);c(R,0);y();m.call(h);g.trigger("fractionChange");return false},fractionChange:function(h,b){b=c(s,pa.fraction(b,a,d));var e=c(G,1+T(b/d(fa))),k=a.rows>1,j=a.orbital;c(Ea,!!j&&(e<=j||e>=a.footage-j+2));if(!a.loops&&a.rebound){!x&&!(b%1)?Pa++:(Pa=0);Pa>=a.rebound*1E3/F(H)&&c(L,!d(L))}g.trigger(k?
"rowChange":"frameChange");m.call(h)},rowChange:function(h,b){var e=d(s)/d(fa)+1;b=c(E,pa.row(b,a,d));b=P(0,a.rows-1,T(b*a.rows));c(G,T(e+b*a.frames));m.call(h);g.trigger("frameChange")},frameChange:function(h,b){var e=c(s,pa.fraction(!b?q:d(fa)*(b-1),a,d)),k=d(kb);b=c(kb,c(G,pa.frame(b,a,d)));var j=a.images,l=a.footage,n=d(Q),p=a.rows>1,r=a.horizontal;if(d(S)){b=a.inversed?l+1-b:b;b+=l}var B=(d(S)?n.y:n.x)-a.indicator,D=P(0,B,N(i.reel.math.interpolate(d(s),-1,B+2)));D=!a.cw||a.stitched?D:B-D;i(ta(Qa+
".x"),d(ga)).css(d(S)?{left:0,top:D}:{left:D,top:n.y-a.indicator});if(p){p=n.y-a.indicator;p=P(0,p,N(i.reel.math.interpolate(d(E),-1,p+2)));i(ta(Qa+".y"),d(ga)).css({top:p})}if(b!=k){i(d(ga)).removeClass(lb+k).addClass(lb+b);if(j.length)g.attr({src:a.path+j[b-1]});else{if(a.stitched)j=[-N(e*d(ab))+U,0+U];else{e=b%l-1;e=e<0?l-1:e;l=T((b-0.1)/l);l+=a.rows>1?0:d(L)?0:d(Ba);b=d($a);l=l*((r?n.y:n.x)+b);n=e*((r?n.x:n.y)+b);j=j.length?[0,0]:r?[-n+U,-l+U]:[-l+U,-n+U]}g.css({backgroundPosition:j.join(za)})}}m.call(h)}},
m=function(h){mb||delete this;return h},x,K=0,$=function(){return x=0},y=function(){clearTimeout(O);I.unbind(M,w.opening_tick);g.trigger("play");return x=-a.timeout*F(H)},O,da=function(){O=setTimeout(function(){g.trigger("play")},a.delay*1E3||0)},J,v,C=function(h){return i(Y,{"class":[Qa,h].join(za),css:{width:a.indicator,height:a.indicator,overflow:fb,top:d(Q).y-a.indicator,left:0,position:la,backgroundColor:Ha}})},Pa=0,na={x:0,y:0},gb=function(h){return aa.push(h)&&aa.shift()&&h},ja=function(){return aa=
[0,0]},aa=ja(),ib=a.graph||i.reel.math[a.loops?"hatch":"envelope"],pa=i.reel.normal,oa=function(h,b,e,k,j){c(Ma,e);c(jb,j);c(Na,a.loops?0:-e*k);c(Oa,a.loops?k:k-e*k);return h&&c(hb,{x:h,y:b})||q},Ja=true,ka=i.browser.opera?I:i.unique(I.add(nb.top.document));w.setup()});qa=qa||function g(){var t=+new Date,c=F(H);if(c){I.trigger(M);i.reel.cost=(+new Date+i.reel.cost-t)/2;return qa=setTimeout(g,W(4,1E3/c-i.reel.cost))}else return qa=q}();return i(o)};i.reel.math={envelope:function(f,a,o,g,t,c){return a+
W(g,Ra(t,-f*c))/o},hatch:function(f,a,o,g,t,c){f=(f<g?t:0)+f%t;f=a+-f*c/o;return f-T(f)},interpolate:function(f,a,o){return a+f*(o-a)},spread:function(f,a){function o(m,x,K){function $(C){for(;!(C>=1&&C<=J);)C+=C<1?+J:-J;return w[K+C]||(w[K+C]=!!y.push(C))}if(!m.length)return[];var y=[],O=4*x,da=a.frame,J=m.length;x=J/O;for(var v=0;v<O;v++)$(da+N(v*x));for(;x>1;){v=0;O=y.length;for(x/=2;v<O;v++)$(N(y[v]+x))}for(v=0;v<y.length;v++)y[v]=m[y[v]-1];return y}var g=a.orbital?2:a.rows||1,t=a.orbital?a.footage:
a.frames,c=(a.row-1)*t,d=[].concat(f),w=new Array(f.length);f=g<2?[]:d.slice(c,c+t);return o(f,1,c).concat(o(d,g,0))}};i.reel.normal={fraction:function(f,a,o){f=f!=q?f:o(s);return a.loops?f-T(f):P(0,1,f)},row:function(f,a,o){return P(0,1,f!=q?(f-1)/(a.rows-1):o(E))},frame:function(f,a,o){f=N(f)||o(G);for(o=o(xa)*(a.orbital?2:a.rows||1);f<1;)f+=o;return a.loops?f%o:P(0,o,f)}};i.reel.touchy=/iphone|ipod|ipad|android/i.test(navigator.userAgent);i.reel.lazy=/iphone|ipod|android/i.test(navigator.userAgent);
i.reel.instances=i();i.reel.cost=0;i.reel.leader=F;sb("mousewheel disableTextSelect enableTextSelect".split(/ /));var I=i(ra);ra=+i.browser.version.split(".").slice(0,2).join(".");var mb=i.browser.msie,qb=!(mb&&ra<8),Ia="ew-resize",qa,A="jquery-reel",ub=A+"-overlay",Qa=A+"-indicator",Ib=A+"-preloader",Hb=A+"-monitor",wb=A+"-interface",lb="frame-",Jb=sa("CAAIAIAAAAAAAAAAACH5BAEAAAAALAAAAAAIAAgAAAIHhI+py+1dAAA7")||ua("blank.gif"),eb=sa("EAAQAJECAAAAAP///////wAAACH5BAEAAAIALAAAAAAQABAAQAI3lC8AeBDvgosQxQtne7yvLWGStVBelXBKqDJpNzLKq3xWBlU2nUs4C/O8cCvU0EfZGUwt19FYAAA7")||
ua("jquery.reel.cursor-drag.gif"),Kb=sa("EAAQAJECAAAAAP///////wAAACH5BAEAAAIALAAAAAAQABAAQAIslI95EB3MHECxNjBVdE/5b2zcRV1QBabqhwltq41St4hj5konmVioZ6OtEgUAOw==")||ua("jquery.reel.cursor-drag-down.gif"),N=Math.round,T=Math.floor,Wa=Math.ceil,Ra=Math.min,W=Math.max,z=Math.abs,Lb=Math.sqrt,ca=parseInt,db="area",cb="backup",L="backwards",fa="bit",bb="brake",Ea="center",ma="clicked",hb="clicked_location",Ma="clicked_on",jb="clicked_row",ha="cwish",Q="dimensions",s="fraction",G="frame",kb="_frame",xa="frames",
Oa="hi",fb="hidden",Ya="image",Za="images",ia="opening_ticks",Na="lo",La="playing",Z="reeling",ea="revolution",E="row",Ba="rows",$a="spacing",Da="speed",ga="stage",Aa="steps",Ca="stitched",ab="stitched_travel",Ka="stopped",H="tempo",R="velocity",S="vertical",vb="wheel_step",u=".reel",Cb="dblclick"+u,Eb="mousedown"+u,Db="mouseenter"+u,Fb="mouseleave"+u,Ga="mousemove"+u,Fa="mouseup"+u,Bb="mousewheel"+u,M="tick"+u,Ab="touchcancel"+u,zb="touchend"+u,xb="touchstart"+u,yb="touchmove"+u,Va="",za=" ",la=
"absolute",Y=rb("div"),Ua="height",Ha="#000",V="id",tb="img",U="px",Sa="src",Gb="title",Ta="width"}(jQuery,window,document);
