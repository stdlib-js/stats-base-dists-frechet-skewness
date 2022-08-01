// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";function r(r){return r!=r}var n=Math.floor;function t(r){return n(r)===r}var e=Number.NEGATIVE_INFINITY;function u(r){return Math.abs(r)}var f,i="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,a=Object.prototype.hasOwnProperty,c="function"==typeof Symbol?Symbol.toStringTag:"",y=i&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,f;if(null==r)return o.call(r);t=r[c],f=c,n=null!=(u=r)&&a.call(u,f);try{r[c]=void 0}catch(n){return o.call(r)}return e=o.call(r),n?r[c]=t:delete r[c],e}:function(r){return o.call(r)},l="function"==typeof Uint32Array,v="function"==typeof Uint32Array?Uint32Array:null,p="function"==typeof Uint32Array?Uint32Array:void 0;f=function(){var r,n,t;if("function"!=typeof v)return!1;try{n=new v(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(l&&t instanceof Uint32Array||"[object Uint32Array]"===y(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?p:function(){throw new Error("not implemented")};var s,w=f,A="function"==typeof Float64Array,b="function"==typeof Float64Array?Float64Array:null,h="function"==typeof Float64Array?Float64Array:void 0;s=function(){var r,n,t;if("function"!=typeof b)return!1;try{n=new b([1,3.14,-3.14,NaN]),t=n,r=(A&&t instanceof Float64Array||"[object Float64Array]"===y(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?h:function(){throw new Error("not implemented")};var d,N=s,U="function"==typeof Uint8Array,m="function"==typeof Uint8Array?Uint8Array:null,I="function"==typeof Uint8Array?Uint8Array:void 0;d=function(){var r,n,t;if("function"!=typeof m)return!1;try{n=new m(n=[1,3.14,-3.14,256,257]),t=n,r=(U&&t instanceof Uint8Array||"[object Uint8Array]"===y(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?I:function(){throw new Error("not implemented")};var g,F=d,S="function"==typeof Uint16Array,H="function"==typeof Uint16Array?Uint16Array:null,O="function"==typeof Uint16Array?Uint16Array:void 0;g=function(){var r,n,t;if("function"!=typeof H)return!1;try{n=new H(n=[1,3.14,-3.14,65536,65537]),t=n,r=(S&&t instanceof Uint16Array||"[object Uint16Array]"===y(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?O:function(){throw new Error("not implemented")};var T,j={uint16:g,uint8:F};(T=new j.uint16(1))[0]=4660;var E=52===new j.uint8(T.buffer)[0],G=!0===E?1:0,M=new N(1),L=new w(M.buffer);function W(r){return M[0]=r,L[G]}function k(r,n){var t,e,u,f;return u=(f=r*r)*f,e=f*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(f),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(f),(u=1-(t=.5*f))+(1-u-t+(f*e-r*n))}var x=-.16666666666666632;function P(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(x+u*t):r-(u*(.5*n-e*t)-n-e*x)}var V,Y,_=!0===E?0:1,q=new N(1),z=new w(q.buffer);!0===E?(V=1,Y=0):(V=0,Y=1);var B={HIGH:V,LOW:Y},C=new N(1),D=new w(C.buffer),J=B.HIGH,K=B.LOW;function Q(r,n){return D[J]=r,D[K]=n,C[0]}var R,X,Z=Number.POSITIVE_INFINITY,$=1023;function rr(r){return r===Z||r===e}!0===E?(R=1,X=0):(R=0,X=1);var nr={HIGH:R,LOW:X},tr=new N(1),er=new w(tr.buffer),ur=nr.HIGH,fr=nr.LOW;function ir(r,n){return tr[0]=n,r[0]=er[ur],r[1]=er[fr],r}function or(r,n){return 1===arguments.length?ir([0,0],r):ir(r,n)}var ar=[0,0];function cr(r,n){var t,e;return or(ar,r),t=ar[0],t&=2147483647,e=W(n),Q(t|=e&=2147483648,ar[1])}function yr(n,t){return r(t)||rr(t)?(n[0]=t,n[1]=0,n):0!==t&&u(t)<22250738585072014e-324?(n[0]=4503599627370496*t,n[1]=-52,n):(n[0]=t,n[1]=0,n)}var lr=[0,0],vr=[0,0];function pr(n,t){var u,f;return 0===t||0===n||r(n)||rr(n)?n:(function(r,n){1===arguments.length?yr([0,0],r):yr(r,n)}(lr,n),t+=lr[1],t+=function(r){var n=W(r);return(n=(2146435072&n)>>>20)-$|0}(n=lr[0]),t<-1074?cr(0,n):t>1023?n<0?e:Z:(t<=-1023?(t+=52,f=2220446049250313e-31):f=1,or(vr,n),u=vr[0],u&=2148532223,f*Q(u|=t+$<<20,vr[1])))}function sr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var wr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Ar=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],br=16777216,hr=5.960464477539063e-8,dr=sr(20),Nr=sr(20),Ur=sr(20),mr=sr(20);function Ir(r,t,e,u,f,i,o,a,c){var y,l,v,p,s,w,A,b,h;for(p=i,h=u[e],b=e,s=0;b>0;s++)l=hr*h|0,mr[s]=h-br*l|0,h=u[b-1]+l,b-=1;if(h=pr(h,f),h-=8*n(.125*h),h-=A=0|h,v=0,f>0?(A+=s=mr[e-1]>>24-f,mr[e-1]-=s<<24-f,v=mr[e-1]>>23-f):0===f?v=mr[e-1]>>23:h>=.5&&(v=2),v>0){for(A+=1,y=0,s=0;s<e;s++)b=mr[s],0===y?0!==b&&(y=1,mr[s]=16777216-b):mr[s]=16777215-b;if(f>0)switch(f){case 1:mr[e-1]&=8388607;break;case 2:mr[e-1]&=4194303}2===v&&(h=1-h,0!==y&&(h-=pr(1,f)))}if(0===h){for(b=0,s=e-1;s>=i;s--)b|=mr[s];if(0===b){for(w=1;0===mr[i-w];w++);for(s=e+1;s<=e+w;s++){for(c[a+s]=wr[o+s],l=0,b=0;b<=a;b++)l+=r[b]*c[a+(s-b)];u[s]=l}return Ir(r,t,e+=w,u,f,i,o,a,c)}}if(0===h)for(e-=1,f-=24;0===mr[e];)e-=1,f-=24;else(h=pr(h,-f))>=br?(l=hr*h|0,mr[e]=h-br*l|0,f+=24,mr[e+=1]=l):mr[e]=0|h;for(l=pr(1,f),s=e;s>=0;s--)u[s]=l*mr[s],l*=hr;for(s=e;s>=0;s--){for(l=0,w=0;w<=p&&w<=e-s;w++)l+=Ar[w]*u[s+w];Ur[e-s]=l}for(l=0,s=e;s>=0;s--)l+=Ur[s];for(t[0]=0===v?l:-l,l=Ur[0]-l,s=1;s<=e;s++)l+=Ur[s];return t[1]=0===v?l:-l,7&A}function gr(r,n,t,e){var u,f,i,o,a,c,y;for((f=(t-3)/24|0)<0&&(f=0),o=t-24*(f+1),c=f-(i=e-1),y=i+4,a=0;a<=y;a++)dr[a]=c<0?0:wr[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=i;c++)u+=r[c]*dr[i+(a-c)];Nr[a]=u}return Ir(r,n,4,Nr,o,4,f,i,dr)}var Fr=Math.round;function Sr(r,n,t){var e,u,f,i,o;return f=r-1.5707963267341256*(e=Fr(.6366197723675814*r)),i=6077100506506192e-26*e,o=n>>20|0,t[0]=f-i,o-(W(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((u=f)-(f=u-(i=6077100506303966e-26*e))-i),t[0]=f-i,o-(W(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((u=f)-(f=u-(i=20222662487111665e-37*e))-i),t[0]=f-i)),t[1]=f-t[0]-i,e}var Hr=1.5707963267341256,Or=6077100506506192e-26,Tr=2*Or,jr=3*Or,Er=4*Or,Gr=[0,0,0],Mr=[0,0];function Lr(r,n){var t,e,u,f,i,o,a;if((u=2147483647&W(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Sr(r,u,n):u<=1073928572?r>0?(a=r-Hr,n[0]=a-Or,n[1]=a-n[0]-Or,1):(a=r+Hr,n[0]=a+Or,n[1]=a-n[0]+Or,-1):r>0?(a=r-2*Hr,n[0]=a-Tr,n[1]=a-n[0]-Tr,2):(a=r+2*Hr,n[0]=a+Tr,n[1]=a-n[0]+Tr,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Sr(r,u,n):r>0?(a=r-3*Hr,n[0]=a-jr,n[1]=a-n[0]-jr,3):(a=r+3*Hr,n[0]=a+jr,n[1]=a-n[0]+jr,-3):1075388923===u?Sr(r,u,n):r>0?(a=r-4*Hr,n[0]=a-Er,n[1]=a-n[0]-Er,4):(a=r+4*Hr,n[0]=a+Er,n[1]=a-n[0]+Er,-4);if(u<1094263291)return Sr(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return q[0]=r,z[_]}(r),a=Q(u-((e=(u>>20)-1046)<<20|0),t),i=0;i<2;i++)Gr[i]=0|a,a=16777216*(a-Gr[i]);for(Gr[2]=a,f=3;0===Gr[f-1];)f-=1;return o=gr(Gr,Mr,e,f),r<0?(n[0]=-Mr[0],n[1]=-Mr[1],-o):(n[0]=Mr[0],n[1]=Mr[1],o)}var Wr=[0,0],kr=3.141592653589793;function xr(r){return t(r/2)}function Pr(r){return xr(r>0?r-1:r+1)}var Vr=Math.sqrt,Yr=!0===E?0:1,_r=new N(1),qr=new w(_r.buffer);function zr(r,n){return _r[0]=r,qr[Yr]=n>>>0,_r[0]}function Br(r){return 0|r}var Cr=!0===E?1:0,Dr=new N(1),Jr=new w(Dr.buffer);function Kr(r,n){return Dr[0]=r,Jr[Cr]=n>>>0,Dr[0]}var Qr=1048576,Rr=[1,1.5],Xr=[0,.5849624872207642],Zr=[0,1.350039202129749e-8],$r=2147483647,rn=1048575,nn=1048576,tn=2147483647,en=1083179008,un=1e300,fn=1e-300,on=[0,0],an=[0,0];function cn(n,f){var i,o,a,c,y,l,v,p,s,w,A,b,h,d;if(r(n)||r(f))return NaN;if(or(on,f),y=on[0],0===on[1]){if(0===f)return 1;if(1===f)return n;if(-1===f)return 1/n;if(.5===f)return Vr(n);if(-.5===f)return 1/Vr(n);if(2===f)return n*n;if(3===f)return n*n*n;if(4===f)return(n*=n)*n;if(rr(f))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:u(r)<1==(n===Z)?0:Z}(n,f)}if(or(on,n),c=on[0],0===on[1]){if(0===c)return function(r,n){return n===e?Z:n===Z?0:n>0?Pr(n)?r:0:Pr(n)?cr(Z,r):Z}(n,f);if(1===n)return 1;if(-1===n&&Pr(f))return-1;if(rr(n))return n===e?cn(-0,-f):f<0?0:Z}if(n<0&&!1===t(f))return(n-n)/(n-n);if(a=u(n),i=c&tn|0,o=y&tn|0,v=y>>>31|0,l=(l=c>>>31|0)&&Pr(f)?-1:1,o>1105199104){if(o>1139802112)return function(r,n){return(2147483647&W(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(n,f);if(i<1072693247)return 1===v?l*un*un:l*fn*fn;if(i>1072693248)return 0===v?l*un*un:l*fn*fn;A=function(r,n){var t,e,u,f,i,o;return t=(i=1.9259629911266175e-8*(u=n-1)-u*u*(0===(o=u)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((e=zr(e=(f=1.4426950216293335*u)+i,0))-f),r[0]=e,r[1]=t,r}(an,a)}else A=function(r,n,t){var e,u,f,i,o,a,c,y,l,v,p,s,w,A,b,h,d,N,U,m,I;return N=0,t<Qr&&(N-=53,t=W(n*=9007199254740992)),N+=(t>>20)-$|0,t=1072693248|(U=1048575&t|0),U<=235662?m=0:U<767610?m=1:(m=0,N+=1,t-=Qr),i=zr(u=(h=(n=Kr(n,t))-(c=Rr[m]))*(d=1/(n+c)),0),e=524288+(t>>1|536870912),a=Kr(0,e+=m<<18),b=(f=u*u)*f*(0===(I=f)?.5999999999999946:.5999999999999946+I*(.4285714285785502+I*(.33333332981837743+I*(.272728123808534+I*(.23066074577556175+.20697501780033842*I))))),a=zr(a=3+(f=i*i)+(b+=(o=d*(h-i*a-i*(n-(a-c))))*(i+u)),0),w=(p=-7.028461650952758e-9*(l=zr(l=(h=i*a)+(d=o*a+(b-(a-3-f))*u),0))+.9617966939259756*(d-(l-h))+Zr[m])-((s=zr(s=(v=.9617967009544373*l)+p+(y=Xr[m])+(A=N),0))-A-y-v),r[0]=s,r[1]=w,r}(an,a,i);if(w=(f-(p=zr(f,0)))*A[0]+f*A[1],s=p*A[0],or(on,b=w+s),h=Br(on[0]),d=Br(on[1]),h>=en){if(0!=(h-en|d))return l*un*un;if(w+8008566259537294e-32>b-s)return l*un*un}else if((h&tn)>=1083231232){if(0!=(h-3230714880|d))return l*fn*fn;if(w<=b-s)return l*fn*fn}return b=function(r,n,t){var e,u,f,i,o,a,c,y,l,v;return l=((y=r&$r|0)>>20)-$|0,c=0,y>1071644672&&(u=Kr(0,((c=r+(nn>>l+1)>>>0)&~(rn>>(l=((c&$r)>>20)-$|0)))>>>0),c=(c&rn|nn)>>20-l>>>0,r<0&&(c=-c),n-=u),r=Br(r=W(a=1-((a=(f=.6931471824645996*(u=zr(u=t+n,0)))+(i=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(v=u)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((o=i-(a-f))+a*o)-a))),(r+=c<<20>>>0)>>20<=0?pr(a,c):Kr(a,r)}(h,s,w),l*b}var yn=Math.ceil;function ln(r){return r<0?yn(r):n(r)}var vn=1.4426950408889634,pn=1/(1<<28);function sn(n){var t;return r(n)||n===Z?n:n===e?0:n>709.782712893384?Z:n<-745.1332191019411?0:n>-3.725290298461914e-9&&n<pn?1+n:function(r,n,t){var e,u,f,i;return pr(1-(n-(e=r-n)*(f=e-(u=e*e)*(0===(i=u)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-f)-r),t)}(n-.6931471803691238*(t=ln(n<0?vn*n-.5:vn*n+.5)),1.9082149292705877e-10*t,t)}function wn(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=sn(r),2.5066282746310007*(t=r>143.01608?(e=cn(r,.5*r-.25))*(e/t):cn(r,r-.5)/t)*n}function An(r,n){return n/((1+.5772156649015329*r)*r)}function bn(f){var i,o,a,c;if(t(f)&&f<0||f===e||r(f))return NaN;if(0===f)return function(r){return 0===r&&1/r===e}(f)?e:Z;if(f>171.61447887182297)return Z;if(f<-170.5674972726612)return 0;if((o=u(f))>33)return f>=0?wn(f):(i=0==(1&(a=n(o)))?-1:1,(c=o-a)>.5&&(c=o-(a+=1)),c=o*function(r){var n;if(n=W(r),(n&=2147483647)<=1072243195)return n<1045430272?r:P(r,0);if(n>=2146435072)return NaN;switch(3&Lr(r,Wr)){case 0:return P(Wr[0],Wr[1]);case 1:return k(Wr[0],Wr[1]);case 2:return-P(Wr[0],Wr[1]);default:return-k(Wr[0],Wr[1])}}(kr*c),i*kr/(u(c)*wn(o)));for(c=1;f>=3;)c*=f-=1;for(;f<0;){if(f>-1e-9)return An(f,c);c/=f,f+=1}for(;f<2;){if(f<1e-9)return An(f,c);c/=f,f+=1}return 2===f?c:c*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(f-=2)}return function(n,t,e){var u,f,i;return r(n)||r(t)||r(e)||n<=0||t<=0?NaN:n<=3?Z:(u=(f=bn(1-1/n))*f,i=bn(1-2/n),(bn(1-3/n)-3*i*f+2*u*f)/cn(i-u,1.5))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).skewness=n();
//# sourceMappingURL=index.js.map
