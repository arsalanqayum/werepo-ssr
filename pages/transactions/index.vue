<template>
  <v-container class="mt-6">
    <v-row>
      <v-col cols="12">
        <div class="box-wrapper">
          <div
            class="box-overlay"
            :class="{ open: isSidebar }"
            @click="isSidebar = !isSidebar"
          ></div>
          <div class="box-sidebar pb-3 shadow-sm" :class="{ open: isSidebar }">
            <div class="mx-6 pt-3">
              <h5 class="mb-2">{{$t("home.transactions.tran_type")}}</h5>
              <v-select
                :items="types"
                placeholder="Ralph Awards"
                outlined
                v-model="type"
                :label='$t("home.transactions.native_country")'
                hide-details=""
                class="mb-4"
              ></v-select>
            </div>
            <v-divider class="pa-0 ma-0"></v-divider>

            <div class="mx-6 pt-3">
              <h5 class="mb-2">{{$t("home.transactions.object")}}</h5>
              <v-select
                :items="categories"
                placeholder="Ralph Awards"
                outlined
                v-model="objects"
                :label='$t("home.transactions.object")'
                hide-details=""
                class="mb-4"
                multiple
              ></v-select>
            </div>
            <v-divider class="pa-0 ma-0"></v-divider>
            <div class="mx-6 mb-5 pt-3">
              <h5 class="mb-10">{{$t("home.transactions.property_value")}}</h5>
              <vue-slider
                v-model="objVal"
                :dot-size="24"
                :dotStyle="dotStyle"
                :railStyle="railStyle"
                :processStyle="processStyle"
                :tooltipStyle="tooltipStyle"
                :min="parseFloat(minObj)"
                :max="parseFloat(maxObj)"
                :interval="0.01"
                :enable-cross="false"
                :lazy="true"
                class="py-2 px-2"
                tooltip="always"
                :tooltip-formatter="objFormat"
                @change="sliderValueChange"
              />

              <v-divider class="pa-0 mb-5 mt-5 ma-0"></v-divider>
            </div>
            <div class="mx-6 mb-5 pt-3">
              <h5 class="mb-10">{{$t("home.transactions.rising")}}</h5>
              <vue-slider
                v-model="AmountVal"
                :dot-size="24"
                :dotStyle="dotStyle"
                :railStyle="railStyle"
                :processStyle="processStyle"
                :tooltipStyle="tooltipStyle"
                :min="parseFloat(minAmount)"
                :max="parseFloat(maxAmount)"
                :interval="0.01"
                :enable-cross="false"
                :lazy="true"
                class="py-2 px-2"
                tooltip="always"
                :tooltip-formatter="objFormat"
                @change="sliderValueChange"
              />

              <v-divider class="pa-0 mb-5 mt-5 ma-0"></v-divider>
            </div>
            <div class="mx-6 mb-5 pt-3">
              <h5 class="mb-10">{{$t("home.transactions.duration")}}</h5>
              <vue-slider
                v-model="monthVal"
                :dot-size="24"
                :dotStyle="dotStyle"
                :railStyle="railStyle"
                :processStyle="processStyle"
                :tooltipStyle="tooltipStyle"
                :min="parseFloat(minMonth)"
                :max="parseFloat(maxMonth)"
                :interval="0.01"
                :enable-cross="false"
                :lazy="true"
                class="py-2 px-2"
                tooltip="always"
                :tooltip-formatter="monthFormat"
                @change="sliderValueChange"
              />

              <v-divider class="pa-0 mb-5 mt-5 ma-0"></v-divider>
            </div>
            <div class="mx-6 mb-5 pt-3">
              <h5 class="mb-10">{{$t("home.transactions.interest_rate")}}</h5>
              <vue-slider
                v-model="interestVal"
                :dot-size="24"
                :dotStyle="dotStyle"
                :railStyle="railStyle"
                :processStyle="processStyle"
                :tooltipStyle="tooltipStyle"
                :min="parseFloat(minInterest)"
                :max="parseFloat(maxInterest)"
                :interval="0.01"
                :enable-cross="false"
                :lazy="true"
                class="py-2 px-2"
                tooltip="always"
                :tooltip-formatter="ratioFormat"
                @change="sliderValueChange"
              />

              <v-divider class="pa-0 mb-5 mt-5 ma-0"></v-divider>
            </div>
            <div class="mx-6 mb-5 pt-3">
              <h5 class="mb-10">{{$t("home.transactions.ratio_amount")}}</h5>
              <vue-slider
                v-model="ratioVal"
                :dot-size="24"
                :dotStyle="dotStyle"
                :railStyle="railStyle"
                :processStyle="processStyle"
                :tooltipStyle="tooltipStyle"
                :min="parseFloat(minRatio)"
                :max="parseFloat(maxRatio)"
                :interval="0.01"
                :enable-cross="false"
                :lazy="true"
                class="py-2 px-2"
                tooltip="always"
                :tooltip-formatter="ratioFormat"
                @change="sliderValueChange"
              />

              <v-divider class="pa-0 mb-5 mt-5 ma-0"></v-divider>
            </div>

            <div class="mx-6 mb-5 pt-3">
              <v-btn
                color="#279ad6"
                @click="submitForm"
                class="text-capitalize mr-2 font-600"
              >
                {{$t("home.transactions.send_btn")}}
              </v-btn>
              <v-btn color="#ccc" @click="resetForm" class="text-capitalize font-600">
                {{$t("home.transactions.reset_btn")}}
              </v-btn>
            </div>
          </div>
          <div class="box-content">
            <div class="d-flex justify-end pa-2 d-block d-md-none">
              <v-btn icon @click="isSidebar = !isSidebar">
                <v-icon dark> mdi-format-list-bulleted-square </v-icon>
              </v-btn>
            </div>
            <div class="box-container">
              <v-row>
                <v-col cols="12">
                   
                   <v-data-iterator
                    :items="items"
                    :items-per-page.sync="itemsPerPage"
                    :page.sync="page"
                    hide-default-footer
                  >
                    <template v-slot:default="props">
                      <v-row>
                        <v-col
                          v-for="(item, index) in props.items"
                          :key="index"
                          cols="12"
                          sm="6"
                          md="4"
                          lg="4"
                          xl="4"
                        >
                          <CardCart
                            cardHoverShadow
                            :content-img="item.item.image"
                            :content-text="item.item.title"
                            :counter="item.qty"
                            :content="item"
                            @cartRemove="removeCart(item)"
                            @cartAdd="addCart(item)"
                            :amount="item.amount"
                          />
                        </v-col>
                      </v-row>
                    </template>

                    <template v-slot:footer>
                      <v-row class="my-5 me-1" align="center" justify="center">
                        <v-spacer></v-spacer>

                        <span class="mr-4 grey--text">
                          Page {{ page }} of {{ numberOfPages }}
                        </span>
                        <v-btn
                          fab
                          :disabled="page == 1"
                          small
                          color="primary"
                          class="mr-1"
                          @click="formerPage"
                        >
                          <v-icon>mdi-chevron-left</v-icon>
                        </v-btn>
                        <v-btn
                          fab
                          :disabled="page == numberOfPages"
                          small
                          color="primary"
                          class="ml-1"
                          @click="nextPage"
                        >
                          <v-icon>mdi-chevron-right</v-icon>
                        </v-btn>
                      </v-row>
                    </template>
                  </v-data-iterator>
                </v-col>
              </v-row>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CardCart from "@/components/cartCard/CardCart";

import "vue-slider-component/theme/antd.css";

export default {
  components: {
    CardCart,
    
  },
  data() {
    return {
      isSidebar: false,
      page: 1,
      itemsPerPage: 8,
      categories: [],
      types: ["flexible", "fix"],
      items: [],
      range: [0, 100, 500, 1000],
      itemsTwo: ["Low to High", "High to Low"],
      select: "",
      cartCount: 0,
      filterProductList: [],
      filterProduct: [],
      selected: [],
      minDuration: 0,
      maxDuration: 24,
      durationVal: [0, 0],
      objVal: [0, 1000],
      minObj: 0,
      maxObj: 1000,
      minAmount: 0,
      maxAmount: 1000,
      AmountVal: [0, 1000],
      minMonth: 0,
      maxMonth: 24,
      monthVal: [1, 24],
      interestVal: [-4, 8],
      minInterest: -4,
      maxInterest: 8,
      minRatio: 0,
      maxRatio: 200,
      ratioVal: [0, 200],
      type: "",
      objects: [],
      dotStyle: { background: "#1e255d", border: "0px" },
      railStyle: { height: "9px", background: "white" },
      processStyle: { background: "#0db9f0" },
      tooltipStyle: { color: "white", background: "#0db9f0" },
    };
  },

  computed: {
    ...mapGetters(["getProducts", "getCategory", "getRatings"]),

    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
  },
  created() {
    // window.addEventListener("scroll", this.handleScroll);

    this.$axios.$get("transactions/get").then((success) => {
      this.items = success;
    });
    this.$axios.$get("data/categories").then((result) => {
      this.categories = result.data.map((item) => ({
        text: item.name,
        value: item.id,
      }));
      //   this.categories = success.data;
    });
    // this.items = this.getProducts.slice(0, 15).map(n => n);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    ...mapActions(["addCart", "removeCart"]),
    submitForm() {
      let payload = {
        type: this.type,
        category: this.objects,
        item_amount: this.objVal,
        amount: this.AmountVal,
        duration: this.monthVal,
        tax: this.interestVal,
        ratio: this.ratioVal,
      };
       this.$axios.$post("transactions/get", payload).then((success) => {
        this.items = success.data;
      });
    },
    resetForm() {
      this.type = "";
      this.objects = [];
      this.objVal = [0, 1000];
      this.AmountVal = [0, 1000];
      this.monthVal = [1, 24];
      this.interestVal = [-4, 8];
      this.ratioVal = [0, 200];
    },
    relevance(amount) {
      if (this.select == "Low to High") {
        this.items = this.items.sort((a, b) =>
          a[amount] < b[amount] ? -1 : 1
        );
      } else {
        this.items = this.items.sort((a, b) =>
          a[amount] > b[amount] ? -1 : 1
        );
      }
    },
    sliderValueChange() {
      console.log("!!!!!!!!!!!!!");
      // this.inputSliderValues();
    },
    // fullProducts () {
    //   this.items = this.getProducts
    // },
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    monthFormat(val) {
      return val + " Mois";
    },
    season(val) {
      return this.range[val];
    },
    objFormat(time) {
      return time + " €";
    },
    ratioFormat(val) {
      return val + " %";
    },
    filterCategory(category) {
      this.items = this.getProducts.filter((x) =>
        this.selected.includes(x.category)
      );
      if (this.selected.length <= 0) {
        this.items = this.getProducts;
      }
    },
    filterRatings(rating) {
      this.items = this.getProducts.filter((x) =>
        this.selected.includes(x.rating)
      );
      if (this.selected.length <= 0) {
        this.items = this.getProducts;
      }
    },
    productRate(rate) {
      this.items = this.getProducts.filter((x) => x.rating == rate.rates);
      // this.items = this.filterProduct.sort((a, b) => a[rate.rates] < b[rate.rates] ? -1 : 1)
    },
  },
};
</script>

<style lang="scss" scoped>
.box-sidebar {
  .sidebar-slider {
    .v-messages {
      display: none;
    }
  }
}
</style>