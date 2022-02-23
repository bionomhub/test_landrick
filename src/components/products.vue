<template>
  <div>

    <div class="row align-items-center">
      <div class="col-lg-9 col-md-7">
        <div class="section-title">
          <h5 class="mb-0">Показано {{item_start}}–{{item_finish}} из {{get_filters_products_all.length}} товаров</h5>
        </div>
      </div>


      <div class="col-lg-3 col-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
        <div class="form custom-form">
          <div class="form-group mb-0">
            <select class="form-control custom-select" id="Sortbylist-job">
              <option>Сортировать по latest</option>
              <option>Сортировать по popularity</option>
              <option>Сортировать по rating</option>
              <option>Сортировать по price: low to high</option>
              <option>Сортировать по price: high to low</option>
            </select>
          </div>
        </div>
      </div>

    </div>

    <div class="row">
      <div class="col-lg-4 col-12 mt-4 pt-2 offices" v-for="(product, index) in lists" :key="index">
        <div class="card shop-list border-0 position-relative overflow-hidden" >
          <div class="shop-image position-relative overflow-hidden rounded shadow">
            <router-link :to='`/shop-product-detail/${product.id}`'><img :src="product.image" class="img-fluid_" alt="">
            </router-link>
            <ul class="list-unstyled shop-icons">
              <li><a class="btn btn-icon btn-pills btn-soft-danger" @click.prevent="ADD_TO_WISHLIST(product)">
                  <heart-icon class="icons"></heart-icon>
                </a></li>
              <!-- <li class="mt-2">
                <router-link to='/shop-product-detail' class="btn btn-icon btn-pills btn-soft-primary">
                  <eye-icon class="icons"></eye-icon>
                </router-link>
              </li> -->
              <li class="mt-2">
                <a class="btn btn-icon btn-pills btn-soft-warning" @click.prevent="ADD_TO_CART(product)">
                  <shopping-cart-icon class="icons"></shopping-cart-icon>
                </a>
              </li>
            </ul>
          </div>
          <div class="card-body content pt-4 p-2">
            <router-link :to='`/shop-product-detail/${product.id}`' class="text-dark product-name h6">{{product.title}}</router-link>
            <div class="d-flex justify-content-between mt-1">
              <h6 class="text-muted small font-italic mb-0 mt-1">{{product.price}} ₽</h6>
              <ul class="list-unstyled text-warning mb-0" v-for="star in product.rating.rate.toFixed()" :key="star">
                  <li class="list-inline-item"><i class="mdi mdi-star">{{star}}</i></li>
              </ul>
              <!-- {{product.rating.rate.toFixed()}} -->
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="list-unstyled text-warning mb-0" v-for="star in lists" :key="star">
        <div class="list-inline-item"><i class="mdi mdi-star"></i></div>
      </div> -->
    </div>
    <div>
      <!-- <b-pagination :total-rows="totalRows" v-model="currentPage" align="center" :per-page="perPage"
        v-if="totalRows > perPage" /> -->

      <ul v-if="count_page > 1" class="pagination b-pagination justify-content-center">
        <li class="page-item" @click="push_currentPage(1)" ><span class="page-link">«</span></li>
        <!-- <li class="page-item" @click="push_currentPage(count_page-1)" ><span class="page-link">‹</span></li> -->

        <li class="page-item" @click="push_currentPage(item)" v-for="item in count_page" :key="item">
          <span class="page-link">{{item}}</span>
        </li>

        <!-- <li class="page-item" @click="push_currentPage(count_page+1)" ><span class="page-link">›</span></li> -->
        <li class="page-item" @click="push_currentPage(count_page)" ><span class="page-link">»</span></li>
      </ul>

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
      // if (!Object.keys(this.get_filters_products_all).length) {
      //   await this.GET_PRODUCTS_FROM_FB();
      // }
      // this.GET_PRODUCTS_FROM_FB()
      // if((this.get_filters_products_all).length < 1){
      //    await this.GET_PRODUCTS_FROM_FB();
      // }
    },
    components: {
      ArrowUpIcon,
      HeartIcon,
      EyeIcon,
      ShoppingCartIcon
    },

    data() {
      return {
        // currentPage: 1,
        perPage: 9,
        filterCategory: "all",
      }
    },
    methods: {
      ...mapActions(['ADD_TO_CART', 'ADD_TO_WISHLIST', 'GET_PRODUCTS_FROM_FB', 'click_product', 'push_currentPage']),
    },
    computed: {
      ...mapGetters(['get_products', 'get_click_product_id', 'get_filters_products_all', 'get_currentPage']),

      linkOpen() {
        return '/shop-product-detail/' + product.id;
      },

      lists() {
        return this.get_filters_products_all.slice(
          (this.get_currentPage - 1) * this.perPage,
          this.get_currentPage * this.perPage
        )
      },

      totalRows() {
        return this.get_filters_products_all.length
      },

      count_page() {
        return Math.ceil(this.get_filters_products_all.length / this.perPage)
        // return this.get_filters_products_all.length
      },
      item_start(){
        return ((this.get_currentPage - 1) * this.perPage)+1
      },
      item_finish(){
        let fin_count = (this.get_currentPage) * this.perPage
        if( fin_count > this.get_filters_products_all.length){
          return this.get_filters_products_all.length
        }else{
          return (this.get_currentPage) * this.perPage
        }
      },
    },
    async mounted() {
      // this.GET_PRODUCTS_FROM_FB()
      if((this.get_filters_products_all).length < 1){
         await this.GET_PRODUCTS_FROM_FB()
      }
    },
  }
</script>

<style>
  .img-fluid_ {
    max-height: 150px;
    max-width: 120px;
  }

  .shop-image.position-relative.overflow-hidden.rounded.shadow {
    margin: 0 auto;
    border: none !important;
    box-shadow: none !important;
    min-height: 150px;
    display: flex;
    align-items: center;
  }

  .row {
    margin-bottom: 3rem;
  }

  .page-item:hover .page-link {
    background-color: rgba(47, 85, 212, 0.9) !important;
    color: #fff !important;
  }
</style>