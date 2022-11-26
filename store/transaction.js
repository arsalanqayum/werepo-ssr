

const state = {
    transaction:null
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
      transactionUpdate(state,payload){
          state.transaction = payload;
      }
  };
  
  const actions = {
    transaction({commit}, reqPayLoad){
      commit('transactionUpdate', reqPayLoad)
    }
  };
  
  
  
  export default {
      state,
      mutations,
      actions
     
  };
  