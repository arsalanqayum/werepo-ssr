<template>
  <div
    :class="[
      { 'sale-page-one': $route.path == '/sale-page-one' },
      { 'sale-page-two': $route.path == '/sale-page-two' },
    ]"
  >
   
    <div
      class="secondary white--text top-bar"
      :class="{ 'd-none': $route.path == '/home-two' }"
    >
      <v-container>
        <div class="d-flex justify-space-between align-center">
          <v-toolbar-title>
            <img
              class="me-2 logo d-md-none d-block"
              width="60"
              height="60"
              src="@/assets/images/logo.png"
              alt=""
            />
            <div class="mr-2 d-md-block d-none">
              <v-icon class="mr-2 white--text" small>mdi-phone-outline</v-icon>
              <span class="text-sm mr-5"> +33 7 67 83 79 39</span>
              
            </div>
          </v-toolbar-title>
          
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="transparent" dark v-bind="attrs" v-on="on" small>
                  <v-avatar tile size="14" class="mr-2">
                    <img :src="localization.icon" alt="" />
                  </v-avatar>
                  <span>{{localization.text}}</span>
                  <v-icon right small>mdi-chevron-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item-group v-model="selectedItem" color="primary">
                  <v-list-item v-for="(item, index) in items" :key="index" @click="setLocale(index)">
                    <v-list-item-icon>
                      <img height="40" width="40" :src="item.icon" />
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                    <!-- <v-list-item-title>{{ item.title }}</v-list-item-title> -->
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-menu>
          </v-toolbar-title>
        </div>
      </v-container>
    </div>

    <v-app-bar
      class="navbar white"
      :class="{ 'd-none': $route.path == '/sale-page-two' }"
    >
      <div class="container">
        <div class="d-flex justify-space-between align-center">
          <router-link to="/">
            <img width="60" height="60" src="@/assets/images/logo.png" alt="" />
          </router-link>
          <div
            id="navbar-toggle-dropdown"
            class="navbar-toggle-dropdown p-absolute"
            :class="{ open: isToggleNavbar }"
          ></div>
          <div>
            <ul class="navbar-nav navigation-navbar d-flex flex-row">
              <li class="nav-item me-3">
                <router-link to="/">{{$t('home.menu.home')}}</router-link>
              </li>

              <li class="nav-item me-3">
                <router-link to="/transactions">{{$t("home.menu.transactions")}}</router-link>
              </li>
              <li class="nav-item me-3">
                <router-link to="/contact">{{$t("home.menu.contact_us")}}</router-link>
              </li>
              <li v-if="auth.token == null" class="nav-item me-3">
                <router-link class="nav-link" to="/login">
                  <p class="mb-0">{{$t("home.menu.login")}}</p>
                </router-link>
              </li>
              <li v-if="auth.token == null" class="nav-item">
                <router-link class="nav-link" to="/register">
                  <p class="mb-0">{{$t("home.menu.register")}}</p>
                </router-link>
              </li>
              <li v-if="auth.token != null" class="nav-item">
                <router-link class="nav-link" to="/user">
                  <p class="mb-0">{{$t("home.menu.my_account")}}</p>
                </router-link>
              </li>
              <li v-if="auth.token != null" class="nav-item">
                <a class="nav-link" href="javascript:void(0);" @click="logout">
                  <p class="mb-0">{{$t("home.menu.logout")}}</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import HeaderNavbar from "@/pages/home/header-navbar";
import Navbar from "@/pages/home/navbar";
import { directive as onClickaway } from "vue-clickaway";

export default {
  name: "BaseAppBar",
  directives: {
    onClickaway: onClickaway,
  },
  components: {
    HeaderNavbar,
    Navbar,
 
  },
  computed: {
    ...mapState({
      auth: (state) => state.auth,
      localization:(state) => state.localization.locale
    }),
  },

  //   computed: {
  //     ...mapGetters(['getCartProducts']),
  //     cartTotal() {
  //       let total = 0;
  //       this.getCartProducts.forEach(product => {
  //         total += product.amount * product.qty
  //       })
  //       return total;
  //     }
  //   },
  data: () => ({
    cartCount: 0,
    selectedItem:null,
    colorNav: false,
    dialog: false,
    isToggleNavbar: false,
    items: [
      { text: "fr", icon: require("@/assets/images/fr.png") },
      { text: "en", icon: require("@/assets/images/en.png") },
    ],
    itemTwo: ["Foo", "Bar", "Fizz", "Buzz"],
    drawer: false,
    group: null,
  }),
  created(){
    console.log(this.localization);
  } ,
  methods: {
    ...mapActions(["addCart", "removeCart"]),
    setLocale(index){
    let selectedLocale = this.items[index];
      this.$store.dispatch('setLocale',selectedLocale)
      location.reload()
    },
    logout() {
      this.$store.dispatch("reset");
      this.$router.push("/login");
    },
    toggleNavbar() {
      if (this.$route.path == "/") {
        this.isToggleNavbar = false;
      } else {
        this.isToggleNavbar = !this.isToggleNavbar;
      }
    },
    away() {
      this.isToggleNavbar = false;
    },
    removeCartx(item) {
      this.removeCart(item);
    },
    addCartx(item) {
      this.addCart(item);
    },
  },
};
</script>
<style lang="scss" scoped>
$z-index-sub-topbar: 2;
$md: 959px;
$z-99: 99;
.z-999 {
  z-index: 999;
}

.v-list-item {
  min-height: 34px;
}
.top-bar {
  height: 70px;
  display: flex;
  align-items: center;
}
.sale-page-one {
  .sub-topbar {
    &.v-app-bar--is-scrolled {
      position: relative;
      .dropdown-ecommerce {
        display: none;
      }
    }
  }

  .navbar {
    &.v-app-bar--is-scrolled {
      top: 0;
      margin-bottom: 0px;
    }
  }
}
.sale-page-two {
  .sub-topbar {
    &.v-app-bar--is-scrolled {
      position: relative;
      .dropdown-ecommerce {
        display: none;
      }
    }
  }

  .navbar {
    &.v-app-bar--is-scrolled {
      top: 0;
      margin-bottom: 0px;
    }
  }
}
.sub-topbar {
  position: relative;
  box-shadow: none !important;
  width: 100%;
  height: 80px !important;
  z-index: $z-99;
  .dropdown-ecommerce {
    display: none;
  }
  &.v-app-bar--fixed {
    position: unset;
  }
  // z-index: $z-index-sub-topbar;

  &.v-app-bar--is-scrolled {
    position: fixed;
    top: 0;
    box-shadow: none !important;
    .dropdown-ecommerce {
      display: block;
    }
  }
  @media (max-width: $md) {
  }
}

.navbar {
  height: 60px;
  width: 100%;
  z-index: 2;
  box-shadow: rgb(43 52 69 / 10%) 0px 16px 16px -16px !important;
  &.v-app-bar--is-scrolled {
    position: relative;
    top: 64px;
    margin-bottom: 64px;
    box-shadow: rgb(43 52 69 / 10%) 0px 16px 16px -16px !important;
    // box-shadow: none !important;
  }
  @media (max-width: 992px) {
    display: none;
  }
}
.search-bar {
  ::v-deep .v-input__slot {
    border: 1px solid rgb(218, 225, 231);
    background-color: #fff !important;
  }
  .search-bar-dropdown {
    height: 39px;
    position: absolute;
    top: 20px;
    transform: translateY(-50%);
    right: 2px;
    border-radius: 22px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border-left: 1px solid rgb(218, 225, 231) !important;
    box-shadow: none !important;
    @media (max-width: $md) {
      display: none;
    }
  }
  ::v-deep .v-text-field__details {
    display: none;
  }
}

// toggleNavbarButton
.navbar-toggle-dropdown {
  z-index: 98;
  display: none;
  &.open {
    display: block;
    top: 64px;
  }
}
.v-hidden {
  visibility: hidden;
}
.empty-cart-sidebar {
  height: 80vh;
}
</style>