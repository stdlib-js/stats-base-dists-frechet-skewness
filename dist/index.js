"use strict";var o=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var q=o(function(x,g){
var t=require('@stdlib/math-base-assert-is-nan/dist'),n=require('@stdlib/math-base-special-gamma/dist'),c=require('@stdlib/math-base-special-pow/dist'),f=require('@stdlib/constants-float64-pinf/dist');function m(r,e,a){var u,i,s,v;return t(r)||t(e)||t(a)||r<=0||e<=0?NaN:r<=3?f:(i=n(1-1/r),u=i*i,s=n(1-2/r),v=n(1-3/r),(v-3*s*i+2*u*i)/c(s-u,1.5))}g.exports=m
});var N=q();module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
