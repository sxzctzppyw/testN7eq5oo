#test repo

Hi,

I use this configuration to

1. Compile JS, Babel from src/js/example.js to dist/js/example.js
2. Compile SCSS from src/scss/example.scss to dist/js/example.css

npm run dev
Sourcemap sholud be inline on css file - NOT WORKING
If u use postcss-loader, sourcemap is generarting but is not accurate.

npm run prod
Sourcemap should be in seprate file - WORKS
Minimize js, css, img - WORKS

CMS:
File: custom.css is imported to our CMS
File custom.js is imported to our CMS
We want them to be separate files, which is why we do not use css-laoder and style laoder
to import css to javascript.
