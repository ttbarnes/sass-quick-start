Sass quick start
================

Quick start sass to css compilation with grunt or gulp. 

Kick start your project, idea or proof of concept with minimal sass/grunt/gulp configuration.


##Prerequisites

Install the sass gem: `gem install sass`

For gulp, ensure you have gulp installed:
`npm install --global gulp`

For grunt, ensure you have the grunt CLI installed:
`npm install -g grunt-cli`

##Getting started
1) `npm install`

2) `grunt` or `gulp` or `gulp watch`

##What's included
- Minimal HTML file for a starting point
- Minimal single Sass file for a starting point
- Gulp paths object, to easily update your paths:
```
var gulpPaths = {
  sass:'scss/',
  cssDist:'dist/css/'
}
```
- grunt tasks to compile, minify and watch sass:
  - grunt-contrib-clean
  - grunt-contrib-cssmin
  - grunt-contrib-sass
  - grunt-contrib-uglify
  - grunt-contrib-watch
  
- gulp tasks to compile, minify and watch sass:
  - gulp-sass
  - gulp-concat
  - gulp-minify-css
  - gulp-rename
  - gulp-watch



##Why?
I found myself frequently setting up grunt or gulp purely to start compiling sass. This makes it easier to get started.

##Contributions
Pull requests always welcome!
