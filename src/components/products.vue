<template>
  <div>
    <!-- <input type="text" v-model="search"> -->

    <div class="d-flex mb-5">
      <input type="text" class="border rounded w-100" style="margin: 0 auto; padding:8px;" placeholder="Поиск..." v-model="search">
    </div>

    <div class="row align-items-center">
      <div class="col-lg-9 col-md-7">
        <div class="section-title">
          <h5 class="mb-0">Показано {{item_start}}–{{item_finish}} из {{get_filters_products_all.length}} товаров</h5>
        </div>
      </div>

      


      <div class="col-lg-3 col-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
        <div class="form custom-form">
          <div class="form-group mb-0">
            <!-- <select class="form-control custom-select" id="Sortbylist-job">
              <option>Сортировать по latest</option>
              <option>Сортировать по popularity</option>
              <option>Сортировать по rating</option>
              <option>Сортировать по price: low to high</option>
              <option>Сортировать по price: high to low</option>
            </select> -->
            <select class="form-control custom-select">
              <option v-for="col in columns" :key="col" @click="sortBy(col)" >{{col.title}}</option>
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
            <!-- <p @click="click_product(product)">{{product.title}}</p> -->
            <div class="d-flex justify-content-between mt-1">
              <h6 class="text-muted small font-italic mb-0 mt-1">{{product.price}} ₽</h6>
              <!-- <ul class="list-unstyled text-warning mb-0" v-for="star in product.rating.rate.toFixed()" :key="star">
                  <li class="list-inline-item"><i class="mdi mdi-star">{{star}}</i></li>
              </ul> -->
              <ul class="list-unstyled text-warning mb-0" v-for="star in product.rating.rate.toFixed()" :key="star">
                <li v-if="star > 0" class="list-inline-item"><i class="mdi mdi-star"></i></li>
                <li v-if="star > 1" class="list-inline-item"><i class="mdi mdi-star"></i></li>
                <li v-if="star > 2" class="list-inline-item"><i class="mdi mdi-star"></i></li>
                <li v-if="star > 3" class="list-inline-item"><i class="mdi mdi-star"></i></li>
                <li v-if="star > 4" class="list-inline-item"><i class="mdi mdi-star"></i></li>
              </ul>
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

  import kak2c from './kak2c'

  export default {
    async mounted() {
    },
    components: {
      ArrowUpIcon,
      HeartIcon,
      EyeIcon,
      ShoppingCartIcon,
      kak2c
    },

    data() {
      return {
        search:'',
        perPage: 9,
        filterCategory: "all",
        sort: 'id',
        sortDir:'asc',
        columns: [
          { name: 'id',    title: 'id товара', type: 'number' },
          { name: 'title', title: 'Название',  type: 'string' },
          { name: 'price', title: 'Цена',      type: 'number', 
            output: v => v.toLocaleDateString('ru-RU') },
        ],
        sort: {
          column: null,
          reverse: false,
        },
        sortFuncs: {
          number: (a, b) => a - b,
          string: (a, b) => a.toLowerCase().localeCompare(b.toLowerCase()),
        },
      }
    },
    methods: {
      ...mapActions(['ADD_TO_CART', 'ADD_TO_WISHLIST', 'GET_PRODUCTS_FROM_FB', 'push_currentPage', 'act_push_prod']),
       
      sortBy(column) {
        const { sort } = this;
        this.sort = { column, reverse: (sort.column === column) ^ sort.reverse };
      },

    },
    computed: {
      ...mapGetters(['get_products', 'get_filters_products_all', 'get_currentPage']),

      linkOpen() {
        return '/shop-product-detail/' + product.id;
      },

      lists() {
        return this.searchItems.slice(
          (this.get_currentPage - 1) * this.perPage,
          this.get_currentPage * this.perPage
        )
      },

      totalRows() {
        return this.searchItems.length
      },

      count_page() {
        return Math.ceil(this.searchItems.length / this.perPage)
      },
      item_start(){
        return ((this.get_currentPage - 1) * this.perPage)+1
      },
      item_finish(){
        let fin_count = (this.get_currentPage) * this.perPage
        if( fin_count > this.searchItems.length){
          return this.searchItems.length
        }else{
          return (this.get_currentPage) * this.perPage
        }
      },

      sortedItems() {
        const { get_filters_products_all, sort: { column, reverse } } = this;
        const key = column?.name;
        const sort = this.sortFuncs[column?.type];

        return sort
          ? [...get_filters_products_all].sort((a, b) => sort(a[key], b[key]) * (reverse ? -1 : 1))
          : get_filters_products_all;
      },

      searchItems() {
        return this.sortedItems.filter(item => item.title.toLowerCase().indexOf(this.search.toLowerCase()) !== -1)
      },

    },
    async mounted() {
      // this.GET_PRODUCTS_FROM_FB()
      if((this.get_filters_products_all).length < 1){
         await this.GET_PRODUCTS_FROM_FB()
      } 
    },
    created() {
      this.sortBy(this.get_filters_products_all[this.get_filters_products_all.length - 1]);
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