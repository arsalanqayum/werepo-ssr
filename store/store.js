import Vue from 'vue'
import Vuex from 'vuex'
import Loader from "./Loader";
import auth from "./auth"
import siteData from './siteData';
import localization from './localization';
import transaction from './transaction';
Vue.use(Vuex)

export const store = new Vuex.Store({
 
  modules: {
    auth,
    Loader,
    siteData,
    localization,
    transaction
}

})



