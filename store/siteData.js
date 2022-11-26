

const state = {
    siteData:null,
   
  };
  
  const mutations = {
    
      updateSiteData(state,payload){
          state.siteData = payload;
      }
  };
  
  const actions = {
    data({commit}, data){
      commit('updateSiteData', data)
    }
   
  };
  
 
  
  export default {
      state,
      mutations,
      actions
     
  };
  