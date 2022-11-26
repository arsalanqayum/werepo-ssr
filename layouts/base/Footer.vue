<template>
  <v-footer
    dark
    color="secondary"
    :class="{ 'd-none': $route.path == '/home-two' }"
  >
    <v-container>
      <v-row>
        <v-col cols="12" xl="4" lg="4" md="4" sm="6">
          <v-avatar width="60" height="44" tile class="mb-5">
            <img src="@/assets/images/logo.png" alt="" />
          </v-avatar>
        </v-col>
        <v-col cols="12" xl="3" lg="3" md="4" sm="6">
          <h2 class="mb-5">{{$t("home.footer.customer_service")}}</h2>
          <p class="footer-text">
           {{$t("home.footer.timing")}}
          </p>
          <p class="footer-text">Email: contact@werepo.fr</p>
          <p class="footer-text mb-5">Phone: +33 7 67 83 79 39</p>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="me-2 white--text"
            elevation="0"
            x-small
            fab
            dark
            color="secondary darken-1"
          >
            <v-icon small size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-col>
      
        <v-col cols="12" xl="3" lg="3" md="4" sm="6">
          <h2 class="mb-5">{{$t("home.footer.legal_info")}}</h2>
          <!-- <div v-for="(n, index) in siteData.siteData.menu.footer" :key="index" class="my-1">
            <router-link :to="'/pages'+n.link" class="text-decoration-none footer-link-hover">{{
              n.anchor.fr
            }}</router-link>
          </div> -->
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: "Footer",
  data: () => ({
    icons: [
      "mdi-facebook",
      "mdi-twitter",
      "mdi-youtube",
      "mdi-google",
      "mdi-instagram",
    ],
    aboutUs: [
      "Careers",
      "Our Stores",
      "Our Cares",
      "Terms & Conditions",
      "Privacy Policy",
    ],
    customerCare: [
      "Help Center",
      "How to Buy",
      "Track Your Order",
      "Corporate & Bulk Purchasing",
      "Returns & Funds",
    ],
  }),
  //  computed: {
  //   ...mapState({
  //     siteData: (state) => state.siteData,
  //   }),
  // },
  created(){
    // console.log(this.siteData.siteData.menu.footer)
  }
};
</script>
<style lang="scss">
a.footer-link-hover {
  color: #bdbdbd !important;
  &:hover {
    color: #fff !important;
  }
}
.v-footer {
  padding-top: 5rem;
  padding-bottom: 5rem;
}
</style>