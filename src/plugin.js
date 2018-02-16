import StaticTerminal from './components/StaticTerminal.vue';

module.exports = {
  install: function (Vue, options) {
    Vue.component('static-terminal', StaticTerminal);
  }
};
