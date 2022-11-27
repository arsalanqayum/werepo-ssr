<template>
  <v-row v-if="transaction" id="print-me" class="content-align">
    <v-col cols="12" md="8" lg="8" xl="8">
      <div class="product-slider">
        <!-- <VueSlickCarousel :arrows="false" :dots="true">
          <div v-for="(item, index) in gallery" :key="index">
            <img  :src="item" />
          </div>
        </VueSlickCarousel> -->
        <v-carousel v-model="model" hide-delimiters>
          <v-carousel-item
            v-for="(item, index) in gallery"
            :key="index"
            :src="item"
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
          </v-carousel-item>
        </v-carousel>
        <div class="mt-5 mb-5">
           
          <ShareNetwork
          style="text-decoration:none"
            network="facebook"
            :url="url"
            :title="transaction.item.title"
            :description="transaction.item.description"
            :media="transaction.item.image"
          >
            <v-btn rounded color="#3b5897" dark>
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
          </ShareNetwork>
          <ShareNetwork
           style="text-decoration:none"
            network="twitter"
            :url="url"
            :title="transaction.item.title"
            :description="transaction.item.description"
            :media="transaction.item.image"
          >
            <v-btn rounded color="primary" dark>
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
          </ShareNetwork>
          <ShareNetwork
            network="whatsapp"
             style="text-decoration:none"
            :url="url"
            :title="transaction.item.title"
            :description="transaction.item.description"
            :media="transaction.item.image"
          >
            <v-btn rounded color="#25d466" dark>
              <v-icon>mdi-whatsapp</v-icon>
            </v-btn>
          </ShareNetwork>
        </div>
        <!-- <button @click="print">print</button> -->
      </div>
      <div v-if="transaction">
        <h3>{{ transaction.item.title }}</h3>
        <div class="text-align">
          <h4>TYPE D'OBJET :</h4>
          <p style="font-size: 16px">{{ transaction.item.category.name }}</p>
        </div>
        <div class="text-align">
          <h4>ESITIMATION :</h4>
          <p style="font-size: 16px">{{ transaction.item.price }} €</p>
        </div>
        <div class="text-align">
          <h4>L'OBJET PEUT-IL ÊTRE UTILISÉ :</h4>
          <p style="font-size: 16px">
            {{ transaction.item.usable === 1 ? "oui" : "" }}
          </p>
        </div>
        <div class="text-align">
          <h4>DESCRIPTION D'OBJET :</h4>
          <p style="font-size: 16px">{{ transaction.description }}</p>
        </div>
        <div class="text-align">
          <h4>DESCRIPTION ADDITIONNELLE :</h4>
          <p style="font-size: 16px">{{ transaction.reason }}</p>
        </div>
      </div>
    </v-col>
    <!-- <v-col cols="12" lg="6" align="center">
            <v-img max-width="300" src="@/assets/images/products/headphone.png"></v-img>
            <div class="d-flex justify-center mt-12">
                <v-avatar tile class="rounded-lg border-primary bg-white me-3" size="70" >
                    <img class="pa-3 " src="@/assets/images/products/headphone.png" alt="">
                </v-avatar>
                <v-avatar tile class="rounded-lg border-grey bg-white me-3" size="70" >
                    <img class="pa-3 " src="@/assets/images/products/headphone.png" alt="">
                </v-avatar>
                <v-avatar tile class="rounded-lg border-grey bg-white" size="70" >
                    <img class="pa-3 " src="@/assets/images/products/headphone.png" alt="">
                </v-avatar>
            </div>
          </v-col> -->
    <v-col cols="12" lg="4">
      <v-card class="mx-auto card-bg" tile>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="space-between"
              ><span> MONTANT DE L'EMPRUNT :</span
              ><span>{{ transaction.amount }} €</span></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="space-between">
              <span>TYPE DE DEMANDE :</span
              ><span>{{ transaction.type }}</span></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="space-between"
              ><span>VALIDITÉ :</span
              ><span>{{ transaction.expiration }}</span></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="space-between"
              ><span>PÉRIODICITÉ :</span
              ><span>{{ transaction.period }}</span></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="space-between"
              ><span>DURÉE :</span
              ><span>{{ transaction.duration }} mois</span></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="space-between"
              ><span>TAUX :</span
              ><span>{{ transaction.rate }}%</span></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="space-between"
              ><span>TYPE DE TRANSACTION :</span
              ><span>{{ transaction.method }}</span></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="space-between"
              ><span>GARDIEN :</span><span></span
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="space-between"
              ><span>VILLE :</span
              ><span>{{ transaction.user.city }}</span></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="space-between"
              ><span>MODE D'ÉCHANGE :</span
              ><span
                >{{ transaction.delivery_mode_french }}
              </span></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="space-between"
              ><span> COÛT DE LIVRAISON FR :</span
              ><span>{{ transaction.amount_fr }} €</span></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="space-between"
              ><span>MODE DE TRANSFERT DE FONDS :</span
              ><span>{{
                transaction.transfer_mode_french
              }}</span></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="auth.user && auth.user.id != transaction.user_id">
          <v-list-item-content>
            <v-list-item-title v-if="transaction.id">
              <v-btn
                @click="$router.push('/transaction-proposal/' + transaction.id)"
                elevation="2"
                >Faire une proposition
              </v-btn>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-col>
    <v-col cols="12" class="mt-12"> </v-col>
  </v-row>
</template>
<script>

import { mapState } from "vuex";
export default {
    props:['gallery','transaction','image','description','title','url'],
  components: {
  },
  head() {
    return {
    title: this.title,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
       { property: "og:url", content: window.location.href },
        { property: "og:title", content: this.title },
        
          { property: "og:description", content: this.description },
      
        
         { property: "og:image", content: this.image },
          { property: "og:image:alt", content: this.title },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: this.image,
      },
    ],
    }
  },
  data() {
    return {
      tab: null,

      url: null,
      model: null,
      isQuantity: 0,
   
      setting: {
        accessibility: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
      },
      singleProductData: {
        id: 1,
        img: require("@/assets/images/products/flash-1.png"),
        title: "Sneakers",
        category: "Sneakers",
        amount: 300,
        rating: 3,
        qty: 0,
      },
      flashDeals: [
        {
          img: require("@/assets/images/products/flash-1.png"),
          name: "Sneakers",
        },
        {
          img: require("@/assets/images/products/flash-2.png"),
          name: "Watch",
        },
        {
          img: require("@/assets/images/products/flash-3.png"),
          name: "Mobile",
        },
      ],
    };
  },
  computed: {
    ...mapState({
      auth: (state) => state.auth,
    
    }),
  },
  mounted() {
    this.url = window.location.href;
    // this.$axios
    //   .$get("/transactions/get/" + this.$route.params.id)
    //   .then((data) => {
    //     this.gallery = data.item.gallery;
    //     this.transaction = data;
    //     this.$store.dispatch("transaction", data);
    //   });
  },
  methods: {
    print() {
      // Pass the element id here
      this.$htmlToPaper("print-me");
    },
  },
};
</script>
<style lang="scss" scoped>
.product-slider {
  .product-slider-click {
    display: flex;
    justify-content: center;
    ::v-deep .slick-slide {
      width: 80px !important;
      margin-right: 16px;
      border: 1px solid rgb(218, 225, 231);
      border-radius: 5px;
    }
    ::v-deep .slick-current {
      border: 1px solid #d23f57;
      border-radius: 5px;
    }
  }
}
.card-bg {
  background: linear-gradient(
    89deg,
    #154abd 0.1%,
    #1a8ad3 51.5%,
    #48b1ea 100.2%
  );
  color: #fff;
}
.v-list-item {
  color: #fff !important;
  align-items: center;
  display: flex;
  flex: 1 1 100%;
  letter-spacing: normal;
  min-height: 48px;
  outline: none;
  padding: 0 16px;
  position: relative;
  text-decoration: none;
}
.v-list-item__subtitle {
  color: #fff !important;
}
.space-between {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid;
  padding: 5px;
}
.content-align {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}
.text-align {
  display: flex;
  gap: 5px;
}
.slick-list {
  max-height: 500px !important;
}
</style>