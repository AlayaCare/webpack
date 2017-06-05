{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#router}}
import router from './router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/router}}
import VueI18n from 'vue-i18n'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
var SimpleVueValidation = require('simple-vue-validator'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(VueI18n){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(SimpleVueValidation){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'en'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  i18n,
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
