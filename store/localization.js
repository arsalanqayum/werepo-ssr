

const state = {
    locale: { text: "fr", icon: require("@/assets/images/fr.png") },

};

const mutations = {

    updateLocale(state, payload) {
        state.locale = payload;
    }
};

const actions = {
    setLocale({ commit }, data) {
        commit('updateLocale', data)
    }

};


const getters ={
    locale(state){
        return state.locale.text
    },
};

export default {
    state,
    mutations,
    actions,
    getters

};
