import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: []
  },
  getters: {
    itemsCount: state => {
      return state.items.reduce((acc, x) => acc + x.quantity, 0);
    },
    itemsPrice: state => {
      return state.items.reduce((acc, x) => acc + x.price * x.quantity, 0);
    },
    getItemById: state => id => {
      return state.items.find(x => x.id === id);
    }
  },
  mutations: {
    addNewItem(state, item) {
      state.items.push(item);
    },
    incrementItem(state, item) {
      state.items.find(x => x.id === item.id).quantity += item.quantity;
    }
  },
  actions: {
    updateItem({ commit, getters }, item) {
      if (getters.getItemById(item.id)) {
        commit("incrementItem", item);
      } else {
        commit("addNewItem", item);
      }
    }
  },
  modules: {}
});
