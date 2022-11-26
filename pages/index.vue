<template>
  <div class="">
    <!-- section-1  -->
    <div class="white mb-60">
      <v-container>
        <v-row>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12">
            <v-carousel class="vuetify-carousel" cycle height="100%" hide-delimiter-background show-arrows-on-hover
              :show-arrows="false">
              <v-carousel-item v-for="(item,index) in topSlider" :key="'topSlider'+index">
                <v-sheet height="100%" light>
                  <v-row class="fill-height" align="center">
                    <v-col cols="7" lg="8" class="mb-14 mb-sm-0">
                      <v-col cols="12" xl="7" class="ms-3 ps-0">
                        <h1 class="show-3 font-weight-bold mb-4">
                          {{$t("home.top_slider.title")}}
                        </h1>
                      </v-col>
                      <v-col cols="12" xl="8">
                        <p class="secondary--text banner-text mb-4">
                          {{$t("home.top_slider.sub_title")}}
                        </p>
                      </v-col>
                      <v-btn color="primary" class="text-capitalize ms-3"> {{$t("home.top_slider.button")}}</v-btn>
                    </v-col>
                    <v-col cols="5" lg="4">
                      <v-img aspect-ratio="1" contain :src="item.img"></v-img>
                    </v-col>
                  </v-row>
                </v-sheet>
              </v-carousel-item>
             
            </v-carousel>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- section-5  -->
  

    <!-- section-6  -->
     <div class="white mb-60">
    <v-container class=" mb-60">
      <v-row>
        <v-col cols="12">
          <div class="d-flex justify-space-between align-center mb-4">
            <div class="d-flex align-center">


              <h2 class="font-weight-bold">{{$t("home.first_container.feature_transaction")}}</h2>
            </div>
            <a href="#" class="text-decoration-none blue-grey--text darken-1">
              View all
              <v-icon class="m-0 p-0">mdi-menu-right</v-icon>
            </a>
          </div>
        </v-col>
        <v-col cols="12" class="px-0">
          <v-row>
            <v-col class="col-12 col-lg-4 col-md-4 col-sm-6 m-5" v-for="(item, index) in transactions" :key="index">
             <CardCart cardHoverShadow :content-img="item.item.image" :content-text="item.item.title"
                :counter="item.qty" :content="item" @cartRemove="removeCart(item)" @cartAdd="addCart(item)"
                :amount="item.amount" /> 
        
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
     </div>
    <!-- section-7  -->
    <div class="white padding">
      <v-container class="mb-60 white-bg">
        <v-row>
          <v-col col-xs="12" class="white col-12 col-lg-6 col-md-6 col-sm-12 col-sm-8 col-xl-6">
            <v-card class="white pa-11" elevation="0">
              <v-row>
                <v-col cols="12">
                  <div>
                    <h2>{{$t("home.second_container.invest_with_repo")}}</h2>
                    <p>
                      {{$t("home.second_container.paragraph")}}
                    </p>
                    <v-btn color="#279ad6" style="color: #fff" elevation="2" x-large>
                      {{$t("home.second_container.button")}}</v-btn>
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <div>
                    <!-- <v-icon size="23">mdi-account</v-icon> -->
                    <img src="@/assets/werepo/payment.png" />
                    <p>{{$t("home.second_container.attractive_rates")}}</p>
                  </div>
                </v-col>
                <v-col cols="6">
                  <div>
                    <img src="@/assets/werepo/loan.png" />
                    <p>{{$t("home.second_container.helping_citizen")}}</p>
                  </div>
                </v-col>
                <v-col cols="6">
                  <div>
                    <img src="@/assets/werepo/no-heavy-increase.png" />
                    <p>{{$t("home.second_container.option_to_purchase")}}
                    </p>
                  </div>
                </v-col>
                <v-col cols="6">
                  <div>
                    <img src="@/assets/werepo/right-to-default.png" />
                    <p>
                      {{$t("home.second_container.loan_secured")}}
                    </p>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col col-xs="12" class="col-12 col-lg-6 col-md-6 col-sm-12 col-sm-8 col-xl-6">
            <v-card class="pa-11" style="min-height: 671px" elevation="0">
              <v-row>
                <v-col cols="12">
                  <div>
                    <h2>{{$t("home.second_container.invest_with_repo")}}</h2>
                    <p>
                      {{$t("home.second_container.inexpansive")}}
                    </p>
                    <v-btn color="#279ad6" style="color: #fff" elevation="2" x-large>
                      {{$t("home.second_container.button")}}</v-btn>
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <div>
                    <!-- <v-icon size="23">mdi-account</v-icon> -->
                    <img src="@/assets/werepo/payment.png" />
                    <p>{{$t("home.second_container.bank_consumer")}}
                    </p>
                  </div>
                </v-col>
                <v-col cols="6">
                  <div>
                    <img src="@/assets/werepo/loan.png" />
                    <p>
                      {{$t("home.second_container.flexibility_loan")}}
                    </p>
                  </div>
                </v-col>
                <v-col cols="6">
                  <div>
                    <img src="@/assets/werepo/no-heavy-increase.png" />
                    <p>
                      {{$t("home.second_container.debt")}}
                    </p>
                  </div>
                </v-col>
                <v-col cols="6">
                  <div>
                    <img src="@/assets/werepo/right-to-default.png" />
                    <p>{{$t("home.second_container.right_to_default")}}</p>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="
        bg-fixed
        ng-star-inserted
        section section-bg section-xl
        white
        mb-60
        bg-news
      ">
      <div>
        <p>
          {{$t("home.second_container.subscribe")}}
        </p>
        <h2>Newsletter</h2>

        <v-form>
          <v-container>
            <v-row>
              <v-col cols="6" class="offset-3">
                <div _ngcontent-serverapp-c84="" class="newsletter-input">
                  <input _ngcontent-serverapp-c84="" type="text" :placeholder='$t("home.second_container.placeholder")' /><button
                    _ngcontent-serverapp-c84="" mat-fab="" color="primary" class="
                      mat-focus-indicator
                      btn
                      mat-fab mat-button-base mat-primary
                    ">
                    <v-icon class="arrow-icon">mdi-arrow-right</v-icon>
                    <span matripple="" class="
                        mat-ripple mat-button-ripple mat-button-ripple-round
                      "></span><span class="mat-button-focus-overlay"></span>
                  </button>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </div>
    </div>
 
    <v-container class="mb-60">
      <v-row>
        <v-col cols="12">
          <div class="d-flex justify-space-between align-center mb-4">
            <div class="d-flex align-center">


              <h2 class="font-weight-bold">{{$t("home.third_container.article")}}</h2>
            </div>
             <a href="#" class="text-decoration-none blue-grey--text darken-1">
              View all
              <v-icon class="m-0 p-0">mdi-menu-right</v-icon>
            </a> 
          </div>
        </v-col>
        <v-col cols="12" class="px-0">
          <v-row>
          <v-col class="col-12 col-lg-4 col-md-4 col-sm-6 m-5" v-for="(n, index) in posts.slice(0, 3)" :key="index">
              <base-card>
                <v-card-text>
                  <router-link to="/single-product" class="text-decoration-none">
                    <v-img class="card-overlay-item mb-2 br-8" :src="n.featured" height="400px"></v-img>
                  </router-link>
                  <router-link to="/single-product" class="text-decoration-none">
                    <v-chip color="blue">
                      {{
                      n.categories.length > 0 ? n.categories[0].name : ""
                      }}</v-chip>
                    <h5 class="grey--text text--darken-4">
                      {{ n.title }}
                    </h5>
                    <p>{{ n.created_at | formatDate }}</p>
                  </router-link>
                </v-card-text>
              </base-card>
            </v-col> 
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <!-- testamonial -->
    <div class="white mb-60 bg-fixed ng-star-inserted section section-bg section-xl white mb-60 bg-news">
      <v-container>
        <v-row>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12">
            <v-carousel class="vuetify-carousel" cycle height="100%" hide-delimiter-background show-arrows-on-hover
              :show-arrows="false">
              <v-carousel-item v-for="(item, index) in testimonial" :key="index">
                <v-sheet height="100%" light>
                  <v-row class="fill-height" align="center">
                    <v-col cols="7" lg="8" class="mb-14 mb-sm-0">
                      <v-col cols="12" xl="7" class="ms-3 ps-0">
                        <h1 style="color:#fff !important;" class="show-3 font-weight-bold mb-4">
                          {{$t("home.bottomcorasal.customer_thinking")}}
                        </h1>
                      </v-col>
                      <v-col cols="12" xl="8">
                        <p style="color:#fff !important;font-weight:bold;" class="secondary--text banner-text mb-4">
                          {{ item.description }}
                        </p>
                      </v-col>
                      <v-card class="mx-auto" max-width="200" outlined>
                        <v-list-item three-line>


                          <v-list-item-avatar tile size="80" color="grey">
                            <v-img :src="item.picture" />
                          </v-list-item-avatar>
                          <v-list-item-content>
                            <div style="color:#fff;font-weight:bold;" class="text-overline mb-4">
                              {{ item.name }}
                            </div>
                          </v-list-item-content>
                        </v-list-item>
                      </v-card>
                    </v-col>
                    <v-col cols="5" lg="4">

                   
                    </v-col>
                  </v-row>
                </v-sheet>
              </v-carousel-item>
            </v-carousel> 
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- partners -->
    <v-container class="mb-60">
      <v-row>
        <v-col cols="12">
          <div class="d-flex justify-space-between mb-4">
            <div class="d-flex align-center">


              <h2 class="font-weight-bold">{{$t("home.bottomcorasal.our_partner")}}</h2>
            </div>

          </div>
        </v-col>
         <v-col v-for="(n, index) in partners" :key="index" cols="6" sm="4" md="3" lg="2">

          <base-card class="card-hover-shadow">
            <v-card-text>
              <div class="d-flex align-center">
                <v-avatar tile>
                  <img class="mr-3" :src="n.image.full_path" alt="" />
                </v-avatar>
                <p class="font-weight-bold mb-0 text-truncate">
                  {{ n.name }}
                </p>
              </div>
            </v-card-text>
          </base-card>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script>
import Navbar from "@/pages/home/navbar";
import CardCart from "@/components/cartCard/CardCart";
import { mapGetters, mapActions } from "vuex";

import moment from "moment";
export default {
  // name: 'Home',
  components: {
    Navbar,
    CardCart,
  },
  computed: {
    ...mapGetters(["getProducts"]),
  },
  filters: {
    formatDate(value) {
      return moment(value).format("mm DD, yyyy");
    },
  },
  data() {
    return {
      slickSettings: {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,

        responsive: [
          {
            breakpoint: 2100,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
            },
          },
          {
            breakpoint: 1900,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
            },
          },
          {
            breakpoint: 1800,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
            },
          },
          {
            breakpoint: 1264,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
      slickSettingsTwo: {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,

        responsive: [
          {
            breakpoint: 1700,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 1264,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
            },
          },
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
        ],
      },
      slickSettingsThree: {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,

        responsive: [
          {
            breakpoint: 1700,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 6,
              infinite: true,
            },
          },
          {
            breakpoint: 1264,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
            },
          },
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 3,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ],
      },
    

      topRatings: [
        {
          img: require("@/assets/images/products/camera-1.png"),
          title: "Camera",
          price: "$3,300",
        },
        {
          img: require("@/assets/images/products/shoes-2.png"),
          title: "Shoe",
          price: "$400",
        },
        {
          img: require("@/assets/images/products/mobile-1.png"),
          title: "Mobile",
          price: "$999",
        },
        {
          img: require("@/assets/images/products/watch-1.png"),
          title: "Watch",
          price: "$600",
        },
      ],
      newArrivals: [
        {
          img: require("@/assets/images/products/imagegoggles.png"),
          title: "Sunglass",
          price: "$150",
        },
        {
          img: require("@/assets/images/products/lipstick(2).png"),
          title: "Lipstick",
          price: "$250",
        },
        {
          img: require("@/assets/images/products/lipstick(2).png"),
          title: "Lipstick",
          price: "$250",
        },
        {
          img: require("@/assets/images/products/bgwatch.png"),
          title: "Lipstick",
          price: "$250",
        },
        {
          img: require("@/assets/images/products/lipstick(4).png"),
          title: "Green Plant",
          price: "$250",
        },
        {
          img: require("@/assets/images/products/lipstick(3).png"),
          title: "Bonsai Tree",
          price: "$450",
        },
      ],
        topSlider: [
        {
          img: require("@/assets/images/werepo.jpg"),
          title: "Sunglass",
          price: "$150",
        },
        {
          img: require("@/assets/images/1.png"),
          title: "Lipstick",
          price: "$250",
        },
        {
          img: require("@/assets/images/2.png"),
          title: "Lipstick",
          price: "$250",
        },
        {
          img: require("@/assets/images/3.png"),
          title: "Lipstick",
          price: "$250",
        },
        {
          img: require("@/assets/images/4.png"),
          title: "Green Plant",
          price: "$250",
        },
        {
          img: require("@/assets/images/5.png"),
          title: "Bonsai Tree",
          price: "$450",
        },
      ],
      bigDiscounts: [
        {
          img: require("@/assets/images/products/Electronics/7.beatsw3.png"),
          title: "BenX 2020",
        },
        {
          img: require("@/assets/images/products/Electronics/9.SonyTV1080p.png"),
          title: "Tony TV 1080p",
        },
        {
          img: require("@/assets/images/products/Electronics/10.SonyPS4.png"),
          title: "Tony PS4",
        },
        {
          img: require("@/assets/images/products/Electronics/11.Netgear2020.png"),
          title: "Setgearr 2020",
        },
        {
          img: require("@/assets/images/products/Electronics/12.SonyBGB.png"),
          title: "Tony BGB",
        },
        {
          img: require("@/assets/images/products/Electronics/13.LGProducts.png"),
          title: "RG Products",
        },
        {
          img: require("@/assets/images/products/Electronics/14.Panasonic2019.png"),
          title: "Sanasonic 2019",
        },
        {
          img: require("@/assets/images/products/Electronics/15.DuneHD.png"),
          title: "Zune HD",
        },
        {
          img: require("@/assets/images/products/Electronics/19.LGWashingMachine.png"),
          title: "JK Washing Machine",
        },
      ],
      topCategories: [
        {
          img: require("@/assets/images/banners/category-1.png"),
        },
        {
          img: require("@/assets/images/banners/category-2.png"),
        },
        {
          img: require("@/assets/images/banners/category-3.png"),
        },
        {
          img: require("@/assets/images/banners/category-1.png"),
        },
        {
          img: require("@/assets/images/banners/category-1.png"),
        },
        {
          img: require("@/assets/images/banners/category-2.png"),
        },
        {
          img: require("@/assets/images/banners/category-3.png"),
        },
        {
          img: require("@/assets/images/banners/category-1.png"),
        },
      ],
      featuredBrands: [
        {
          img: require("@/assets/images/products/london-britches.png"),
          title: "London Britches",
        },
        {
          img: require("@/assets/images/products/jimandjiko.png"),
          title: "Jim & Jago",
        },
      ],
      categories: [
        {
          img: require("@/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png"),
          title: "Tops",
        },
        {
          img: require("@/assets/images/products/Fashion/Clothes/10.LandsJacket.png"),
          title: "Jacket",
        },
        {
          img: require("@/assets/images/products/Fashion/Accessories/18.DragonRedWristWatch.png"),
          title: "Smart Watch",
        },
        {
          img: require("@/assets/images/products/Fashion/Accessories/10.RayBanOcean.png"),
          title: "Sunglasses",
        },
        {
          img: require("@/assets/images/products/Fashion/Accessories/3.BrownCap.png"),
          title: "Cap",
        },
        {
          img: require("@/assets/images/products/Fashion/Shoes/1.NikeRed.png"),
          title: "Nike Red",
        },
        {
          img: require("@/assets/images/products/Fashion/Shoes/5.NikeBlue.png"),
          title: "Nike Silver",
        },
        {
          img: require("@/assets/images/products/Fashion/Jewellery/1.Heavy22ktGoldNecklaceSet.png"),
          title: "Gold Necklace",
        },
        {
          img: require("@/assets/images/products/Fashion/Clothes/3.NBLHoopHoodie.png"),
          title: "NBL Hoodie",
        },
        {
          img: require("@/assets/images/products/Fashion/Clothes/10.LandsJacket.png"),
          title: "Jacket",
        },
        {
          img: require("@/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png"),
          title: "Tops",
        },
        {
          img: require("@/assets/images/products/Fashion/Clothes/10.LandsJacket.png"),
          title: "Jacket",
        },
      ],
      heroSlider: [
        {
          img: require("@/assets/images/products/apple-watch-0.png"),
          name: "50% Off For Your First Shopping",
        },
        {
          img: require("@/assets/images/products/apple-watch-0.png"),
          name: " 20% Off For  First Electronics Purchase",
        },
        {
          img: require("@/assets/images/products/apple-watch-0.png"),
          name: "Get 70% Off For  First  Grocery Purchase",
        },
      ],
      tab: null,
      items: ["Brands", "Shops"],
      transactions: [],
      testimonial: [],
      partners: [],
      posts: [],
    };
  },
  created() {
    this.$axios.$get("/data/home").then((success) => {
      console.log(success)
      this.transactions = success.transactions;
      this.testimonial = success.testimonials;
      this.partners = success.partners;
      this.posts = success.posts;
    });
  },
  methods: {
    ...mapActions(["addCart", "removeCart"]),
  },
};
</script>
<style lang="scss" scoped>
.top-categories-img {
  width: 385px;
  min-width: 100%;
  max-width: 100%;
}

.white-bg {
  background: #fff;
}

.bg-image {
  background-image: url("@/assets/werepo/home-1.jpg");
  min-height: 100vh;
}

.bg-news {
  background-image: url("@/assets/werepo/newsletter-bg.jpg");
  background-color: initial;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
  line-height: 60px;
}

.bg-image div {
  width: 61%;
  margin: auto;
  padding-top: 11%;
  color: #fff;
  line-height: 93px;
  text-align: center;
}

.bg-image div h1 {
  font-size: 3.5rem;
}

.bg-image div button {
  width: 40%;
  margin: auto;
  display: flex;
}

.section-bg {
  background-color: initial;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
}

.section.section-xl {
  padding: 160px 0;
}

.bg-fixed {
  background-attachment: fixed;
}

.section {
  position: relative;
  z-index: 2;
}

.newsletter-input {
  border-radius: 20px;
  max-width: 740px;
  margin: 0 auto;
  position: relative;
}

.newsletter-input input {
  padding: 7px;
  border-radius: 2.25rem;
  width: 100%;
  border: none;
  background: #fff;
  outline: none;
  transition: all 0.3s ease;
  box-shadow: 0 5px 30px 0 rgb(0 0 0 / 5%);
}

.newsletter-input .btn {
  position: absolute;
  margin-top: 6px;
  top: 0.25rem;
  right: 0.2125rem;
  background: #279ad6;
  border-radius: 60%;
  height: 52px;
  width: 50px;
}

.arrow-icon {
  position: absolute;
  bottom: 23%;
  left: 27%;
  color: #fff;
}

.padding {
  padding-top: 20px;
  padding-bottom: 20px;
}

.top-categories-img {
  width: 385px;
  min-width: 100%;
  max-width: 100%;
  height: 380px;
}

.theme--light.v-sheet {
  background-color: #ffffff00;
  border-color: #ffffff;
}

.testamonial-title {
  color: #fff;
}

.testamonial-desc {
  color: #fff !important;
}

.testamonial-img {
  border-radius: 50%;
  overflow: hidden;
  width: 200px;
  height: 200px;
}

.media-content p {
  position: absolute;
  top: 0px;
  left: 20%;
  font-weight: 900;
}

@media only screen and (max-width: 600px) and (min-width: 350px) {
  .bg-image div {
    width: 90%;
    margin: auto;
    padding-top: 11%;
    color: #fff;
    line-height: 68px;
    text-align: center;
  }

  .bg-image div h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 16px;
  }
}

.space-between {
  display: flex;
  justify-content: space-between;
  margin-left: 2%;
  margin-right: 2%;
}

.space-between div {
  line-height: 4px !important;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: right;
}

.theme--light.v-sheet {
  background-color: #ffffff00;
  border-color: #ffffff00;
}
</style>




