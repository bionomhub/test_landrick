<template>
  <div>
    <p>lololol</p>

    <!-- <div class="product_item" v-for="product in PRODUCTS" :key="product.id">
      <img :src="product.image" alt="img-product">
      <div class="product_item-into">
        <h2 class="product_item-title">{{product.title}}</h2>
        <p class="product_item-description">{{product.description}}</p>
        <span class="product_item-price">{{product.price}} руб.</span>
      </div>
    </div> -->


    <div class="row" v-for="product in PRODUCTS" :key="product.id">
      <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
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
                <router-link to="/shop-cart" class="btn btn-icon btn-pills btn-soft-warning">
                  <shopping-cart-icon class="icons"></shopping-cart-icon>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="card-body content pt-4 p-2">
            <router-link to="/shop-product-detail" class="text-dark product-name h6">{{product.title}}</router-link>
            <div class="d-flex justify-content-between mt-1">
              <h6 class="text-muted small font-italic mb-0 mt-1">{{product.price}} руб.<del class="text-danger ml-2">{{product.price}} руб.</del> </h6>
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



  </div>
</template>

<script>
  import {
    mapActions,
    mapGetters
  } from 'vuex'
  export default {
    data() {
      return {
        // products: {},
        // info: '',
        // res: {},
        // json: {}

      }
    },
    async mounted() {
      this.$message('Test');
      this.GET_PRODUCTS_FROM_API()
    },
    methods: {
      ...mapActions(['GET_PRODUCTS_FROM_API']),
    },
    computed: {
      ...mapGetters(['PRODUCTS']),
    },

  }
</script>

<style>

</style>