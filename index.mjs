// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";var m=s,a=t,n=e,r=i;var d=function(s,t,e){var i,d,o;return m(s)||m(t)||m(e)||s<=0||t<=0?NaN:s<=3?r:(i=(d=a(1-1/s))*d,o=a(1-2/s),(a(1-3/s)-3*o*d+2*i*d)/n(o-i,1.5))};export{d as default};
//# sourceMappingURL=index.mjs.map
