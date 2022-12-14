import { createStore } from "vuex";
import axiosClient from "../axios";

const store = createStore({
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem("TOKEN"),
    },
  },
  getters: {},
  actions: {
    async register({ commit }, user) {
      return axiosClient.post("/register", user).then(({ data }) => {
        commit("setUser", data);
        return data;
      });
    },
    async login({ commit }, user) {
      return axiosClient.post("/login", user).then(({ data }) => {
        commit("setUser", data);
        return data;
      });
    },
    async logout({ commit }) {
      return axiosClient.post("/logout").then((response) => {
        commit("logout");
        return response;
      });
    },
  },
  mutations: {
    logout: (state) => {
      state.user.data = {};
      sessionStorage.removeItem("TOKEN");
      state.user.token = null;

    },
    setUser: (state, userData) => {
      state.user.token = userData.token;
      state.user.data = userData.user;
      sessionStorage.setItem("TOKEN", userData.token);
    },
  },
  modules: {},
});

export default store;
