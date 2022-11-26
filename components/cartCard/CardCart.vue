<template>
  <!-- card-hover-shadow  -->
 
  <v-card
    class="card-hover"
    :class="cardHoverShadow ? 'card-hover-shadow' : ''"
  >
   
    <div class="card-hover-icon">
      <div
        class="
          d-flex
          flex-column
          p-absolute
          right-0
          z-1
          mr-2
          mt-1
          card-hover-icon
        "
      >
        <!-- dialog -- modal  -->
        <v-dialog v-model="dialog" max-width="600px">
         
          <base-card>
            <v-card-title>
              <v-btn
                class="mt-4"
                absolute
                right
                icon
                color="secondary"
                text
                @click="dialog = false"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" md="6">
                  <v-img
                    height="250"
                    src="@/assets/images/products/Fashion/Shoes/23.NikeSilverRace.png"
                  ></v-img>
                </v-col>
                <v-col cols="12" md="6">
                  <h1 class="mt-4 mb-4 leading-tight">Smart Watch Black</h1>
                  <h5 class="grey--text text--darken-5 mb-3">
                    Brand:
                    <span
                      class="grey--text text--darken-1 font-weight-medium ml-2"
                      >Xiaomi</span
                    >
                  </h5>
                  <div class="d-flex mb-3">
                    <h5 class="grey--text text--darken-5 mr-2">Rated:</h5>
                    <div class="d-flex mb-1">
                      <v-rating
                        :value="4.5"
                        color="amber"
                        dense
                        half-increments
                        readonly
                        size="16"
                      ></v-rating>

                      <div
                        class="grey--text text--darken-1 font-weight-bold ml-1"
                      >
                       
                      </div>
                    </div>
                  </div>
                  <h2 class="font-weight-bold primary--text mb-2"></h2>
                  <h5 class="font-weight-light mb-3"></h5>
                  <h5 class="grey--text text--darken-5 mb-3">
                   
                    <span
                      class="grey--text text--darken-1 font-weight-medium ml-2"
                      ></span
                    >
                  </h5>
                </v-col>
              </v-row>
            </v-card-text>
          </base-card>
        </v-dialog>

        <!-- end dialog end modal  -->
       
      </div>
    </div>
    <router-link to="/single-product">
      <v-img height="250" class="br-t-8" :src="contentImg"></v-img>
    </router-link>
 <div v-if="content" class="space-between">
      <div>
        <p>Type: {{content.type}}</p>
       
      </div>
      <div>
        <p>{{ content.days_left  }} {{content.days_left ? $t("home.card_cart.remaining_days"):''}}</p>
        
      </div>
      <div>
        <p>{{$t("home.card_cart.validity")}} :{{ content.expiration }} </p>
        
      </div>
    </div>
    <v-card-text class="d-flex justify-content-between align-end">
      
      <div class="flex-grow-1 my-3">
        <router-link to="/single-product" class="text-decoration-none">
          <h6 class="mb-0 grey--text text--darken-4">{{ contentText }}</h6>
        </router-link>
        <div class="d-flex mb-1"></div>
        <div class="d-flex"></div>
      </div>
      <!-- btn cart  -->
      <!-- <slot name="cardCart"></slot> -->
    </v-card-text>
    <div v-if="content" class="space-between ">
      <div>
        <p>{{$t("home.card_cart.interest")}}</p>
        <h4 v-if="content.rate">{{ content.rate  }}{{content.rate ? '%':''}}</h4>
        <h4 v-if="content.rate_min">{{ content.rate_min  }}{{content.rate_min ? '%':''}} - {{content.rate_max}}{{content.rate_max ? "%":''}}</h4>
        
      </div>
       <div>
        <p>{{$t("home.card_cart.month")}}</p>
        <h4 v-if="content.duration">{{ content.duration }}</h4>
        <h4 v-if="content.duration_min">{{ content.duration_min }} - {{content.duration_max}}</h4>
      </div>
      <div>
        <p>{{$t("home.card_cart.rising")}}</p>
        <h4>{{ content.amount }} {{content.amount ? '€':''}}</h4>
      </div>
    </div>
    <div v-if="content" class="space-between ">
     
      <div>
        <p>{{$t("home.card_cart.object")}}</p>
        <h4>{{ content.item.category.name }}</h4>
      </div>
      <div>
        <p>{{$t("home.card_cart.property_value")}}</p>
        <h4>{{ content.item.price }} {{content.item.price ? '€':""}}</h4>
      </div>
    </div>
    
    <div class="mr-5 mt-5 ml-5 mb-5" style="height: 63px;">
      <NuxtLink :to="'transactions/'+content.id" v-if="content" block color="rgb(39, 154, 214)" class="mb-5" elevation="2">Détails </NuxtLink>
    </div>
  </v-card>
  
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: {
    btnText: {
      type: String,
      default: "",
    },
    cardHoverShadow: {
      type: Boolean,
      default: false,
    },
    counter: {
      type: Number,
      default: 0,
    },
    contentImg: String,
    contentText: String,
    amount: {
      type: Number,
      default: 200,
    },
    contentRating: {
      type: Number,
      default: 4.5,
    },
    content: Object,
  },
  computed: {
    ...mapGetters(["getProducts"]),
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    ...mapActions(["addCart"]),
    navigateToTransaction(id){
    //  this.$axios.$get("/transactions/get/" + id).then((data) => {
    // this.$store.dispatch('transaction',data);
     
    //  this. $router.push('transaction/'+id)
    // });
     
    }
  },
};
</script>
<style lang="scss" scoped>
.br-t-8 {
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
}
.card-hover {
  &:hover {
    .card-hover-icon {
      display: block;
    }
  }
  .card-hover-icon {
    display: none;
  }
}
.space-between {
  display: flex;
  justify-content: space-between;
  margin-left: 2%;
  margin-right: 2%;
  flex-wrap: wrap;
}
.space-between div {
  line-height: 4px !important;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: right;
}
</style>