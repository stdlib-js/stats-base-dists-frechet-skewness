"use strict";var o=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(u){throw (e=0, u)}};};var a=o(function(x,q){
var n=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-gamma/dist'),c=require('@stdlib/math-base-special-pow/dist'),f=require('@stdlib/constants-float64-pinf/dist');function m(r,e,u){var s,i,t,g;return n(r)||n(e)||n(u)||r<=0||e<=0?NaN:r<=3?f:(i=v(1-1/r),s=i*i,t=v(1-2/r),g=v(1-3/r),(g-3*t*i+2*s*i)/c(t-s,1.5))}q.exports=m
});var N=a();module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
