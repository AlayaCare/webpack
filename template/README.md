# {{ name }}

> {{ description }}

> This project includes Bootstrap v3.3.7, Font Awesome v4.7.0 and jQuery v3.2.1

> Translation support included (with plugin [vue-i18n](https://github.com/kazupon/vue-i18n))

> Form validation support included (with plugin [simple-vue-validator](https://github.com/semisleep/simple-vue-validator))

> Less and less-loader already added as dependencies.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
{{#unit}}

# build for distribution (through npm) with minification
npm run build-dist

# run unit tests
npm run unit
{{/unit}}
{{#e2e}}

# run e2e tests
npm run e2e
{{/e2e}}
{{#if_or unit e2e}}

# run all tests
npm test
{{/if_or}}
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
