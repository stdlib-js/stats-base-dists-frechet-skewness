// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.1.0-esm/index.mjs";function m(m,n,a){var d,r,o;return s(m)||s(n)||s(a)||m<=0||n<=0?NaN:m<=3?i:(d=(r=t(1-1/m))*r,o=t(1-2/m),(t(1-3/m)-3*o*r+2*d*r)/e(o-d,1.5))}export{m as default};
//# sourceMappingURL=index.mjs.map
