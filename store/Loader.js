

const state = {
    loader:false,
   
  };
  
  const mutations = {
    updateLoader(state, payload) {
        console.log(payload)
          state.loader = payload;
          
      },
  };
  
  const actions = {
    loaderAction({commit}, reqPayLoad){
     
      commit('updateLoader', reqPayLoad)
    }
  };
  
  const getters = {
   
  };
  
  export default {
      state,
      mutations,
      actions,
      getters
  };
  