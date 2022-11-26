

const state = {
  user:null,
  token:null,
};

const mutations = {
    updateAuthState(state, payload) {
        state.user = payload.user;
        state.token = payload.token;
    },
    resetM(state){
        state.user=null;
        state.token =null;
    },
    UserUpdate(state,payload){
        state.user = payload;
    }
};

const actions = {
  userAction({commit}, reqPayLoad){
    commit('updateAuthState', reqPayLoad)
  },
  user({commit}, reqPayLoad){
    commit('UserUpdate', reqPayLoad)
  },
  reset({commit}){
     commit('resetM');
  }
};

const getters = {
    token(state) {
        return (
            state.token
        );
    },
    token() {
        return state.user;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};
