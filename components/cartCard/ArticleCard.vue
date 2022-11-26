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
    
       
      </div>
    </div>
    <router-link to="/single-product">
      <v-img height="250" class="br-t-8" :src="content.picture"></v-img>
    </router-link>

    <v-card-text class="d-flex justify-content-between align-end">
      
      <div class="flex-grow-1 my-3">
        <router-link to="/single-product" class="text-decoration-none">
          <h6 class="mb-0 grey--text text--darken-4">{{content.description}}</h6>
        </router-link>
        <div class="d-flex mb-1"></div>
        <div class="d-flex"></div>
      </div>
      <!-- btn cart  -->
      <!-- <slot name="cardCart"></slot> -->
    </v-card-text>
    <div class="space-between">
      <div>
        <p>{{content.created_at}}</p>
       
      </div>
     
    </div>
    
  
  </v-card>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: {
    
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
}
.space-between div {
  line-height: 4px !important;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: right;
}
</style>