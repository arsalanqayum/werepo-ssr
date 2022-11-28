<template>
  <v-container class="my-6">
    <TransactionDetail
      
     
    />
   
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TransactionDetail from "@/components/transaction/TransactionDetail.vue";
import axios from 'axios';
export default {
  components: {
    TransactionDetail,
  },
  head() {
    return {
      title: this.res.title,
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.res.item.title,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.res.description,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.res.description,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: window.location.href,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content:  this.res.item.image,
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.res.item.image,
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.res.description,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.res.item.title,
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content:  this.res.item.image,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.res.description,
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@mdotacademy',
        },
        {
          hid: 'twitter:creator',
          name: 'twitter:creator',
          content: '@markshust',
        },
      ],
    }
  },

  data() {
    return {
      gallery: [],
      transaction: null,
     
    };
  },
 async asyncData ({ params }) {
  console.log('!!!!!!!!!!!!!')
  return axios.get(`http://44.202.244.118/api/transactions/get/${params.id}`)
    .then((res) => {
      return {res:res.data}
      // return {
      //   info: res.item
      // }
    }).catch((err) => {
      console.log(err)
  })
},
  mounted() {
     this.getTransaction();
  },
  methods: {
    async getTransaction() {
      this.url = window.location.href;
    // await  this.$axios
    //     .$get("/transactions/get/" + this.$route.params.id)
    //     .then((data) => {
    //       this.gallery = data.item.gallery;
    //       this.transaction = data;
        
    //     });
    },
  },
};
</script>

