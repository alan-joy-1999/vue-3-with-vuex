import { createStore } from "vuex";

export default createStore({
  state: {
    userList : []
  },
  getters: {
    getUserList(state){
      return state.userList;
    }
  },
  mutations: {
    SaveUserData(state, username){
      var obj = {};
      obj.name = username;
      obj.registered = false;
      state.userList.push(obj);
    }
  },
  actions: {},
  modules: {}
});