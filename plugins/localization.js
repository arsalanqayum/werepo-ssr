// localization
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from '@/localization/en'
import fr from '@/localization/fr'
import store from '@/store/store';
const messages = {
    en,
    fr
}
Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: 'en',
    messages
   
  })

  export default i18n;