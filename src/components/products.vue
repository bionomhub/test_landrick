

<template>
  
    <div class="row" >
      <div>
      </div>
      <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2" v-for="product in get_products" :key="product.id">
        <div class="card shop-list border-0 position-relative overflow-hidden">
          <div class="shop-image position-relative overflow-hidden rounded shadow">
            <router-link to="/shop-product-detail"><img :src="product.image" class="img-fluid" alt="">
            </router-link>
            <ul class="list-unstyled shop-icons">
              <li><a href="javascript:void(0)" class="btn btn-icon btn-pills btn-soft-danger">
                  <heart-icon class="icons"></heart-icon>
                </a></li>
              <li class="mt-2">
                <router-link to="/shop-product-detail" class="btn btn-icon btn-pills btn-soft-primary">
                  <eye-icon class="icons"></eye-icon>
                </router-link>
              </li>
              <li class="mt-2">
                <a class="btn btn-icon btn-pills btn-soft-warning" @click.prevent="ADD_TO_CART(product)">
                  <shopping-cart-icon class="icons"></shopping-cart-icon>
                </a>
              </li>
            </ul>
          </div>
          <div class="card-body content pt-4 p-2">
            <router-link to="/shop-product-detail" class="text-dark product-name h6">{{product.title}}</router-link>
            <div class="d-flex justify-content-between mt-1">
              <h6 class="text-muted small font-italic mb-0 mt-1">{{product.price}} руб.</h6>
              <ul class="list-unstyled text-warning mb-0">
                <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>

import {
    ArrowUpIcon,
    HeartIcon,
    EyeIcon,
    ShoppingCartIcon
} from 'vue-feather-icons';

  import {
    mapActions,
    mapGetters
  } from 'vuex'
  export default {

    async mounted() {
      // this.GET_PRODUCTS_FROM_API();
      
      // if (!Object.keys(this.$store.getters.info3).length){
      //   await this.$store.dispatch('fetchInfo2')
      // }
      // this.action_productions();
        
      if (!Object.keys(this.$store.getters.get_products).length){
        await this.$store.dispatch('action_productions')
      }

    },
    methods: {
      ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CART', 'action_productions' ]),

    },
    computed: {
      ...mapGetters(['PRODUCTS', 'get_products']),

    },
    components:{
        ArrowUpIcon,
        HeartIcon,
        EyeIcon,
        ShoppingCartIcon
    }

  }
</script>

<style>
.img-fluid{
    max-height: 150px;
    max-width: 120px;
}
.shop-image.position-relative.overflow-hidden.rounded.shadow{
    margin: 0 auto;
    border: none !important;
    box-shadow: none !important;
    min-height: 150px;
    display: flex;
    align-items: center;
}

</style>