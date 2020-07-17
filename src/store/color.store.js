import Vue from 'vue';
import Vuex from 'vuex';
import Color from 'color';

Vue.use(Vuex);

let internalColorValue = new Color('#000');

export default new Vuex.Store({
  state: {
    hex: internalColorValue.hex(),
    rgb: internalColorValue.rgb(),
    red: internalColorValue.red(),
    green: internalColorValue.green(),
    blue: internalColorValue.blue(),
    alphaRgb: internalColorValue.alpha() * 255,
    hsl: internalColorValue.hsl(),
    hue: internalColorValue.hue(),
    saturation: internalColorValue.saturationl(),
    lightness: internalColorValue.lightness(),
    alphaHsl: internalColorValue.alpha() * 100,
    keyword: internalColorValue.keyword()
  },
  mutations: {},
  actions: {},
  modules: {}
});
