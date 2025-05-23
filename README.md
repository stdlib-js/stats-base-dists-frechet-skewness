<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Skewness

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Fréchet][frechet-distribution] distribution [skewness][skewness].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [skewness][skewness] for a [Fréchet][frechet-distribution] random variable shape `α > 0`, scale `s > 0`, and location parameter `m` is

<!-- <equation class="equation" label="eq:frechet_skewness" align="center" raw="\operatorname{skew} = \begin{cases} {\frac{\Gamma \left(1-{\frac{3}{\alpha }}\right)-3\Gamma \left(1-{\frac{2}{\alpha }}\right)\Gamma \left(1-{\frac{1}{\alpha }}\right)+2\Gamma^{3}\left(1-{\frac{1}{\alpha }}\right)}{{\sqrt{\left(\Gamma \left(1-{\frac{2}{\alpha }}\right)-\Gamma^{2}\left(1-{\frac{1}{\alpha }}\right)\right)^{3}}}}} & \text{ for }\alpha > 3\\\ \infty & \text{ otherwise }\end{cases}" alt="Skewness for a Fréchet distribution."> -->

```math
\mathop{\mathrm{skew}} = \begin{cases} {\frac{\Gamma \left(1-{\frac{3}{\alpha }}\right)-3\Gamma \left(1-{\frac{2}{\alpha }}\right)\Gamma \left(1-{\frac{1}{\alpha }}\right)+2\Gamma^{3}\left(1-{\frac{1}{\alpha }}\right)}{{\sqrt{\left(\Gamma \left(1-{\frac{2}{\alpha }}\right)-\Gamma^{2}\left(1-{\frac{1}{\alpha }}\right)\right)^{3}}}}} & \text{ for }\alpha > 3\\\ \infty & \text{ otherwise }\end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{skew} = \begin{cases} {\frac{\Gamma \left(1-{\frac{3}{\alpha }}\right)-3\Gamma \left(1-{\frac{2}{\alpha }}\right)\Gamma \left(1-{\frac{1}{\alpha }}\right)+2\Gamma^{3}\left(1-{\frac{1}{\alpha }}\right)}{{\sqrt{\left(\Gamma \left(1-{\frac{2}{\alpha }}\right)-\Gamma^{2}\left(1-{\frac{1}{\alpha }}\right)\right)^{3}}}}} &amp; \text{ for }\alpha &gt; 3\\\ \infty &amp; \text{ otherwise }\end{cases}" data-equation="eq:frechet_skewness">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/frechet/skewness/docs/img/equation_frechet_skewness.svg" alt="Skewness for a Fréchet distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `Γ` is the [gamma function][gamma-function].

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-frechet-skewness
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var skewness = require( '@stdlib/stats-base-dists-frechet-skewness' );
```

#### skewness( alpha, s, m )

Returns the [skewness][skewness] for a [Fréchet][frechet-distribution] distribution with shape `alpha > 0`, scale `s > 0`, and location parameter `m`.

```javascript
var y = skewness( 4.0, 1.0, 1.0 );
// returns ~5.605

y = skewness( 4.0, 8.0, -3.0 );
// returns ~5.605

y = skewness( 5.0, 1.0, 2.0 );
// returns ~3.535
```

If `0 < alpha <= 3`, the function returns `+Infinity`.

```javascript
var y = skewness( 2.5, 1.0, 1.0 );
// returns Infinity
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = skewness( NaN, 1.0, -2.0 );
// returns NaN

y = skewness( 1.0, NaN, -2.0 );
// returns NaN

y = skewness( 1.0, 1.0, NaN );
// returns NaN
```

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var y = skewness( 0.0, 3.0, 2.0 );
// returns NaN

y = skewness( -1.0, 3.0, 2.0 );
// returns NaN
```

If provided `s <= 0`, the function returns `NaN`.

```javascript
var y = skewness( 1.0, 0.0, 2.0 );
// returns NaN

y = skewness( 1.0, -1.0, 2.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var EPS = require( '@stdlib/constants-float64-eps' );
var skewness = require( '@stdlib/stats-base-dists-frechet-skewness' );

var alpha;
var m;
var s;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    alpha = ( randu()*20.0 ) + EPS;
    s = ( randu()*20.0 ) + EPS;
    m = ( randu()*40.0 ) - 20.0;
    y = skewness( alpha, s, m );
    console.log( 'α: %d, s: %d, m: %d, skew(X;α,s,m): %d', alpha.toFixed( 4 ), s.toFixed( 4 ), m.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/stats/base/dists/frechet/skewness.h"
```

#### stdlib_base_dists_frechet_skewness( alpha, s, m )

Returns the skewness for a Fréchet distribution with shape `alpha`, scale `s`, and location `m`.

```c
double y = stdlib_base_dists_frechet_skewness( 5.0, 2.0, 0.0 );
// returns ~3.535
```

The function accepts the following arguments:

-   **alpha**: `[in] double` shape parameter.
-   **s**: `[in] double` scale parameter.
-   **m**: `[in] double` location parameter.

```c
double stdlib_base_dists_frechet_skewness( const double alpha, const double s, const double m );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/stats/base/dists/frechet/skewness.h"
#include "stdlib/constants/float64/eps.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
   double alpha;
   double s;
   double m;
   double y;
   int i;

    for ( i = 0; i < 10; i++ ) {
       alpha = random_uniform( STDLIB_CONSTANT_FLOAT64_EPS, 20.0 );
       s = random_uniform( STDLIB_CONSTANT_FLOAT64_EPS, 20.0 );
       m = random_uniform( -20.0, 20.0 );
       y = stdlib_base_dists_frechet_skewness( alpha, s, m );
       printf( "α: %.4lf, s: %.4lf, m: %.4lf, skew(X;α,s,m): %.4lf\n", alpha, s, m, y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-frechet-skewness.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-frechet-skewness

[test-image]: https://github.com/stdlib-js/stats-base-dists-frechet-skewness/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-frechet-skewness/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-frechet-skewness/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-frechet-skewness?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-frechet-skewness.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-frechet-skewness/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-frechet-skewness/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-frechet-skewness/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-frechet-skewness/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-frechet-skewness/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-frechet-skewness/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-frechet-skewness/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-frechet-skewness/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-frechet-skewness/main/LICENSE

[frechet-distribution]: https://en.wikipedia.org/wiki/Fr%C3%A9chet_distribution

[gamma-function]: https://en.wikipedia.org/wiki/Gamma_function

[skewness]: https://en.wikipedia.org/wiki/Skewness

</section>

<!-- /.links -->
