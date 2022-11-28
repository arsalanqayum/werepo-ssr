<template>
  <v-container class="my-6">
    <TransactionDetail
      v-if="transaction != null"
      :gallery="gallery"
      :transaction="transaction"
      :title="transaction.item.title"
      :description="transaction.item.description"
      :image="transaction.item.image"
      :url="url"
    />
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TransactionDetail from "@/components/transaction/TransactionDetail.vue";
export default {
  components: {
    TransactionDetail,
  },

  data() {
    return {
      gallery: [],
      transaction: null,
      url:null,
    };
  },
  created() {
     this.getTransaction();
  },
  mounted(){
        this.url = window.location.href;
  },
  methods: {
    async getTransaction() {
  
    await  this.$axios
        .$get("/transactions/get/" + this.$route.params.id)
        .then((data) => {
          this.gallery = data.item.gallery;
          this.transaction = data;
          this.$store.dispatch("transaction", data);
        });
    },
  },
};
</script>

