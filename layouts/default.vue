<template>
  <v-app>
    <BaseAppBar />
        <Nuxt />
    
    <baseAppFooter/>
  </v-app>
</template>

<script>
import BaseAppBar from "./base/AppBar.vue";
import baseAppFooter from "./base/Footer.vue";
import MobileNavigation from './base/MobileNavigationBar.vue';
export default {
  name: "DefaultLayout",
  components: {
    BaseAppBar,
    baseAppFooter,
    MobileNavigation
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>
