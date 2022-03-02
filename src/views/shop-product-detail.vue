<script>
import {
  ArrowUpIcon,
  HeartIcon,
  EyeIcon,
  ShoppingCartIcon,
  MessageCircleIcon,
  MailIcon,
  UserIcon,
} from "vue-feather-icons";
import { Carousel, Slide } from "vue-carousel";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";
import { mapGetters, mapActions } from 'vuex';

/**
 * Shop-product-detail component
 */
export default {
  data() {
    return {
      countval: 1,
      prod: [],
    };
  },
  components: {
    Navbar,
    Switcher,
    Footer,
    Carousel,
    Slide,
    ArrowUpIcon,
    VueSlickCarousel,
    HeartIcon,
    EyeIcon,
    ShoppingCartIcon,
    MessageCircleIcon,
    MailIcon,
    UserIcon,
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_FB', 'ADD_TO_CART', 'updateFilter', 'simillarFilter']),
    increment() {
      this.countval++;
    },
    decrement() {
      if (this.countval > 0) this.countval--;
    },
  },

  computed: {
    ...mapGetters(['get_products', 'get_filters_products_all', 'get_similar_products']),
      productId () {
          return this.$route.params.id;
      },
      countval_product(){
        return this.countval;
      },
      product_detales(){
        let a = this.get_products[this.productId - 1];
        a.qt = this.countval_product;
        return a
      },
      async mounted() {
      // this.GET_PRODUCTS_FROM_FB()
        if((this.get_filters_products_all).length < 1){
          await this.GET_PRODUCTS_FROM_FB()
        } 
      },
  },
  mounted(){
    this.simillarFilter(this.product_detales.category)
  }

};
</script>

<template>
  <div>
    <Navbar :isIcons="true" />
    <section class="bg-half bg-light d-table w-100">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12 text-center">
            <div class="page-next-level">
              <h4 class="title">Branded T-Shirts</h4>
              <div class="page-next">
                <nav aria-label="breadcrumb" class="d-inline-block">
                  <ul class="breadcrumb bg-white rounded shadow mb-0">
                    <li class="breadcrumb-item">
                      <router-link to="/">Landrick</router-link>
                    </li>
                    <li class="breadcrumb-item">
                      <router-link to="/index-shop">Shop</router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Product Details
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <div class="position-relative">
      <div class="shape overflow-hidden text-white">
        <svg
          viewBox="0 0 2880 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
    <!-- Hero End -->

    <router-view />

    <section class="section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-5">
            <VueSlickCarousel
              ref="c1"
              :arrows="false"
              :focusOnSelect="true"
              :asNavFor="$refs.c2"
              :dots="false"
              :autoplay="true"
              :fade="true"
            >
              <div>
                <img
                  :src="product_detales.image"
                  class="img-fluid rounded"
                  alt=""
                />
              </div>
              <div>
                <img
                  :src="product_detales.image"
                  class="img-fluid rounded"
                  alt=""
                />
              </div>
              <div>
                <img
                  :src="product_detales.image"
                  class="img-fluid rounded"
                  alt=""
                />
              </div>
              <div>
                <img
                  :src="product_detales.image"
                  class="img-fluid rounded"
                  alt=""
                />
              </div>
              <div>
                <img
                  :src="product_detales.image"
                  class="img-fluid rounded"
                  alt=""
                />
              </div>
              <div>
                <img
                  :src="product_detales.image"
                  class="img-fluid rounded"
                  alt=""
                />
              </div>
            </VueSlickCarousel>

            <VueSlickCarousel
              :asNavFor="$refs.c1"
              :arrows="false"
              :focusOnSelect="true"
              ref="c2"
              class="slick-slide"
              :slidesToShow="3"
            >
              <div>
                <img
                  :src="product_detales.image"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  :src="product_detales.image"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  :src="product_detales.image"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  :src="product_detales.image"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  :src="product_detales.image"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  :src="product_detales.image"
                  class="img-fluid"
                  alt=""
                />
              </div>
            </VueSlickCarousel>
          </div>
          <!--end col-->

          <div class="col-md-7 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="section-title ml-md-4">
              <h4 class="title">{{product_detales.title}}</h4>
              <h5 class="text-muted">
                {{product_detales.price}}₽
              </h5>
              <!-- <ul class="list-unstyled text-warning h5 mb-0">
                <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
              </ul> -->
               <!-- <ul class="list-unstyled text-warning mb-0" v-for="star in product_detales.rating.rate.toFixed()" :key="star">
                  <li class="list-inline-item"><i class="mdi mdi-star">{{star}}</i></li>
              </ul> -->
              <ul class="list-unstyled text-warning h5 mb-0" v-for="star in product_detales.rating.rate.toFixed()" :key="star">
                <li v-if="star > 0" class="list-inline-item"><i class="mdi mdi-star"></i></li>
                <li v-if="star > 1" class="list-inline-item"><i class="mdi mdi-star"></i></li>
                <li v-if="star > 2" class="list-inline-item"><i class="mdi mdi-star"></i></li>
                <li v-if="star > 3" class="list-inline-item"><i class="mdi mdi-star"></i></li>
                <li v-if="star > 4" class="list-inline-item"><i class="mdi mdi-star"></i></li>
              </ul>

              <h5 class="mt-4 py-2">Overview :</h5>
              <p class="text-muted">
                {{product_detales.description}}
              </p>

              <ul class="list-unstyled text-muted">
                <li class="mb-0">
                  <span class="text-primary h5 mr-2"
                    ><i class="uil uil-check-circle align-middle"></i
                  ></span>
                  Digital Marketing Solutions for Tomorrow
                </li>
                <li class="mb-0">
                  <span class="text-primary h5 mr-2"
                    ><i class="uil uil-check-circle align-middle"></i
                  ></span>
                  Our Talented &amp; Experienced Marketing Agency
                </li>
                <li class="mb-0">
                  <span class="text-primary h5 mr-2"
                    ><i class="uil uil-check-circle align-middle"></i
                  ></span>
                  Create your own skin to match your brand
                </li>
              </ul>

              <div class="row mt-4 pt-2">
                <!-- <div class="col-lg-6 col-12">
                  <div class="d-flex align-items-center">
                    <h6 class="mb-0">Объем:</h6>
                    <ul class="list-unstyled mb-0 ml-3">
                      <li class="list-inline-item">
                        <a
                          href="javascript:void(0)"
                          class="btn btn-icon btn-soft-primary"
                          >50</a
                        >
                      </li>
                      <li class="list-inline-item ml-1">
                        <a
                          href="javascript:void(0)"
                          class="btn btn-icon btn-soft-primary"
                          >100</a
                        >
                      </li>
                      <li class="list-inline-item ml-1">
                        <a
                          href="javascript:void(0)"
                          class="btn btn-icon btn-soft-primary"
                          >150</a
                        >
                      </li>
                      <li class="list-inline-item ml-1">
                        <a
                          href="javascript:void(0)"
                          class="btn btn-icon btn-soft-primary"
                          >200</a
                        >
                      </li>
                    </ul>
                  </div>
                </div> -->
                <!--end col-->

                <div class="col-lg-6 col-12 mt-4 mt-lg-0">
                  <div class="d-flex shop-list align-items-center">
                    <h6 class="mb-0">Количество:</h6>
                    <div class="ml-3">
                      <input
                        type="button"
                        value="-"
                        class="minus btn btn-icon btn-soft-primary font-weight-bold"
                        @click="decrement"
                      />
                      <input
                        type="text"
                        v-model="countval"
                        step="1"
                        min="1"
                        name="quantity"
                        value="1"
                        title="Qty"
                        class="btn btn-icon btn-soft-primary font-weight-bold ml-1"
                      />
                      <input
                        type="button"
                        value="+"
                        class="plus btn btn-icon btn-soft-primary font-weight-bold ml-1"
                        @click="increment"
                      />
                    </div>
                  </div>
                </div>
                <!--end col-->
              </div>
              <!--end row-->

              <div class="mt-4 pt-2">
                <!-- <a href="javascript:void(0)" class="btn btn-primary"
                  >Shop Now</a
                > -->
                <!-- <router-link to="/shop-cart" class="btn btn-soft-primary ml-2"
                  >Add to Cart</router-link
                > -->
                 <a class="btn btn-soft-primary ml-2" @click.prevent="ADD_TO_CART(product_detales)">Добавить в корзину</a>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row">
          <div class="col-12">
            <b-tabs content-class="mt-5" pills nav-class="bg-white shadow">
              <b-tab active title-item-class="m-1">
                <template #title>
                  <span class="nav-link py-2 px-5">
                    <div class="text-center">
                      <h6 class="mb-0">Описание</h6>
                    </div></span
                  >
                </template>

                <p class="text-muted mb-0">
                 {{product_detales.description}}
                </p>
              </b-tab>
              <b-tab title-item-class="m-1">
                <template #title>
                  <span class="nav-link py-2 px-5 rounded">
                    <div class="text-center">
                      <h6 class="mb-0">Дополнительная информация</h6>
                    </div>
                  </span>
                </template>
                <table class="table">
                  <tbody>
                    <tr>
                      <td style="width: 100px">Color</td>
                      <td class="text-muted">Red, White, Black, Orange</td>
                    </tr>

                    <tr>
                      <td>Material</td>
                      <td class="text-muted">Cotton</td>
                    </tr>

                    <tr>
                      <td>Size</td>
                      <td class="text-muted">S, M, L, XL, XXL</td>
                    </tr>
                  </tbody>
                </table>
              </b-tab>
              <b-tab title-item-class="m-1">
                <template #title>
                  <span class="nav-link py-2 px-5 rounded">
                    <div class="text-center">
                      <h6 class="mb-0">Отзывы</h6>
                    </div>
                  </span>
                </template>
                <div class="row">
                  <div class="col-lg-6">
                    <ul class="media-list list-unstyled mb-0">
                      <li>
                        <div class="d-flex justify-content-between">
                          <div class="media align-items-center">
                            <a class="pr-3" href="#">
                              <img
                                src="images/client/01.jpg"
                                class="img-fluid avatar avatar-md-sm rounded-circle shadow"
                                alt="img"
                              />
                            </a>
                            <div class="commentor-detail">
                              <h6 class="mb-0">
                                <a
                                  href="javascript:void(0)"
                                  class="text-dark media-heading"
                                  >Lorenzo Peterson</a
                                >
                              </h6>
                              <small class="text-muted"
                                >15th August, 2019 at 01:25 pm</small
                              >
                            </div>
                          </div>
                          <ul class="list-unstyled mb-0">
                            <li class="list-inline-item">
                              <i class="mdi mdi-star text-warning"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="mdi mdi-star text-warning"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="mdi mdi-star text-warning"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="mdi mdi-star text-warning"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="mdi mdi-star text-warning"></i>
                            </li>
                          </ul>
                        </div>
                        <div class="mt-3">
                          <p
                            class="text-muted font-italic p-3 bg-light rounded"
                          >
                            " Awesome product "
                          </p>
                        </div>
                      </li>

                      <li class="mt-4">
                        <div class="d-flex justify-content-between">
                          <div class="media align-items-center">
                            <a class="pr-3" href="#">
                              <img
                                src="images/client/02.jpg"
                                class="img-fluid avatar avatar-md-sm rounded-circle shadow"
                                alt="img"
                              />
                            </a>
                            <div class="commentor-detail">
                              <h6 class="mb-0">
                                <a
                                  href="javascript:void(0)"
                                  class="media-heading text-dark"
                                  >Tammy Camacho</a
                                >
                              </h6>
                              <small class="text-muted"
                                >15th August, 2019 at 05:44 pm</small
                              >
                            </div>
                          </div>
                          <ul class="list-unstyled mb-0">
                            <li class="list-inline-item">
                              <i class="mdi mdi-star text-warning"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="mdi mdi-star text-warning"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="mdi mdi-star text-warning"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="mdi mdi-star text-warning"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="mdi mdi-star-outline text-warning"></i>
                            </li>
                          </ul>
                        </div>
                        <div class="mt-3">
                          <p
                            class="text-muted font-italic p-3 bg-light rounded mb-0"
                          >
                            " Good "
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <!--end col-->

                  <div class="col-lg-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                    <form class="ml-lg-4">
                      <div class="row">
                        <div class="col-12">
                          <h5>Add your review:</h5>
                        </div>
                        <div class="col-12 mt-4">
                          <h6 class="small font-weight-bold">Your Rating:</h6>
                          <a
                            href="javascript:void(0)"
                            class="d-inline-block mr-3"
                          >
                            <ul class="list-unstyled mb-0 small">
                              <li class="list-inline-item">
                                <i class="mdi mdi-star text-warning"></i>
                              </li>
                              <li class="list-inline-item">
                                <i
                                  class="mdi mdi-star-outline text-warning"
                                ></i>
                              </li>
                              <li class="list-inline-item">
                                <i
                                  class="mdi mdi-star-outline text-warning"
                                ></i>
                              </li>
                              <li class="list-inline-item">
                                <i
                                  class="mdi mdi-star-outline text-warning"
                                ></i>
                              </li>
                              <li class="list-inline-item">
                                <i
                                  class="mdi mdi-star-outline text-warning"
                                ></i>
                              </li>
                            </ul>
                          </a>

                          <a
                            href="javascript:void(0)"
                            class="d-inline-block mr-3"
                          >
                            <ul class="list-unstyled mb-0 small">
                              <li class="list-inline-item">
                                <i class="mdi mdi-star text-warning"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="mdi mdi-star text-warning"></i>
                              </li>
                              <li class="list-inline-item">
                                <i
                                  class="mdi mdi-star-outline text-warning"
                                ></i>
                              </li>
                              <li class="list-inline-item">
                                <i
                                  class="mdi mdi-star-outline text-warning"
                                ></i>
                              </li>
                              <li class="list-inline-item">
                                <i
                                  class="mdi mdi-star-outline text-warning"
                                ></i>
                              </li>
                            </ul>
                          </a>

                          <a
                            href="javascript:void(0)"
                            class="d-inline-block mr-3"
                          >
                            <ul class="list-unstyled mb-0 small">
                              <li class="list-inline-item">
                                <i class="mdi mdi-star text-warning"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="mdi mdi-star text-warning"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="mdi mdi-star text-warning"></i>
                              </li>
                              <li class="list-inline-item">
                                <i
                                  class="mdi mdi-star-outline text-warning"
                                ></i>
                              </li>
                              <li class="list-inline-item">
                                <i
                                  class="mdi mdi-star-outline text-warning"
                                ></i>
                              </li>
                            </ul>
                          </a>

                          <a
                            href="javascript:void(0)"
                            class="d-inline-block mr-3"
                          >
                            <ul class="list-unstyled mb-0 small">
                              <li class="list-inline-item">
                                <i class="mdi mdi-star text-warning"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="mdi mdi-star text-warning"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="mdi mdi-star text-warning"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="mdi mdi-star text-warning"></i>
                              </li>
                              <li class="list-inline-item">
                                <i
                                  class="mdi mdi-star-outline text-warning"
                                ></i>
                              </li>
                            </ul>
                          </a>

                          <a href="javascript:void(0)" class="d-inline-block">
                            <ul class="list-unstyled mb-0 small">
                              <li class="list-inline-item">
                                <i class="mdi mdi-star text-warning"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="mdi mdi-star text-warning"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="mdi mdi-star text-warning"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="mdi mdi-star text-warning"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="mdi mdi-star text-warning"></i>
                              </li>
                            </ul>
                          </a>
                        </div>
                        <div class="col-md-12 mt-3">
                          <div class="form-group">
                            <label>Your Review:</label>
                            <div class="position-relative">
                              <message-circle-icon
                                class="fea icon-sm icons"
                              ></message-circle-icon>
                              <textarea
                                id="message"
                                placeholder="Your Comment"
                                rows="5"
                                name="message"
                                class="form-control pl-5"
                                required=""
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <!--end col-->

                        <div class="col-lg-6">
                          <div class="form-group">
                            <label
                              >Name <span class="text-danger">*</span></label
                            >
                            <div class="position-relative">
                              <user-icon class="fea icon-sm icons"></user-icon>
                              <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Name"
                                class="form-control pl-5"
                                required=""
                              />
                            </div>
                          </div>
                        </div>
                        <!--end col-->

                        <div class="col-lg-6">
                          <div class="form-group">
                            <label
                              >Your Email
                              <span class="text-danger">*</span></label
                            >
                            <div class="position-relative">
                              <mail-icon class="fea icon-sm icons"></mail-icon>
                              <input
                                id="email"
                                type="email"
                                placeholder="Email"
                                name="email"
                                class="form-control pl-5"
                                required=""
                              />
                            </div>
                          </div>
                        </div>
                        <!--end col-->

                        <div class="col-md-12">
                          <div class="send">
                            <button type="submit" class="btn btn-primary">
                              Submit
                            </button>
                          </div>
                        </div>
                        <!--end col-->
                      </div>
                      <!--end row-->
                    </form>
                    <!--end form-->
                  </div>
                  <!--end col-->
                </div>
                <!--end row-->
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </div>
      <!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row">
          <div class="col-12">
            <h5 class="mb-0">Похожие товары</h5>
          </div>
          <!--end col-->

          <div class="col-12 mt-4">

          <carousel id="client-four" class="owl-carousel owl-theme" dir="ltr" :per-page="3" :loop="true" >
              <Slide v-for="similar_product in get_similar_products" :key="similar_product">
                  <div class="card shop-list border-0 position-relative overflow-hidden m-2">
                      <div class="shop-image position-relative overflow-hidden rounded shadow d-flex justify-content-center">
                          <router-link :to='`/shop-product-detail/${similar_product.id}`' >
                            <img :src="similar_product.image" class="img-fluid img-fluid_" alt="" />
                          </router-link>
                          <!-- <router-link :to='`/shop-product-detail/${similar_product.id}`' class="overlay-work">
                            <img :src="similar_product.image" class="img-fluid img-fluid_" alt=""/>
                          </router-link> -->
                      </div>
                      <div class="card-body content pt-4 p-2">
                          <router-link :to='`/shop-product-detail/${similar_product.id}`' class="text-dark product-name h6"> {{similar_product.title}}</router-link>
                          <div class="d-flex justify-content-between mt-1">
                              <h6 class="text-muted small font-italic mb-0 mt-1">
                                  {{similar_product.price}}₽
                              </h6>
                          </div>
                      </div>
                  </div>
              </Slide>
          </carousel>
           
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <div class="container-fluid mt-100 mt-60 px-0">
        <div class="py-5 bg-light">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-12">
                <div class="d-flex align-items-center justify-content-center">
                  <!-- <router-link
                    tag="a"
                    to="/shop-product-detail"
                    class="text-dark align-items-center"
                  >
                    <span class="pro-icons"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-arrow-left fea icon-sm"
                      >
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline></svg
                    ></span>
                    <span class="text-muted d-none d-md-inline-block"
                      >Web Development</span
                    >
                    <img
                      src="images/work/6.jpg"
                      class="avatar avatar-small rounded shadow ml-2"
                      style="height: auto"
                      alt=""
                    />
                  </router-link> -->

                  <router-link
                    tag="a"
                    to="/"
                    class="btn btn-lg btn-pills btn-icon btn-soft-primary"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-home icons"
                    >
                      <path
                        d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                      ></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline></svg
                  ></router-link>

                  <!-- <router-link
                    tag="a"
                    to="/shop-product-detail"
                    class="text-dark align-items-center"
                  >
                    <img
                      src="images/work/7.jpg"
                      class="avatar avatar-small rounded shadow mr-2"
                      style="height: auto"
                      alt=""
                    />
                    <span class="text-muted d-none d-md-inline-block"
                      >Web Designer</span
                    >
                    <span class="pro-icons"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-arrow-right fea icon-sm"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline></svg
                    ></span>
                  </router-link> -->
                </div>
              </div>
              <!--end col-->
            </div>
            <!--end row-->
          </div>
          <!--end container-->
        </div>
        <!--end div-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!--end section-->
    <Footer />
    <!-- Footer End -->
    <Switcher />
    <!-- Back to top -->
    <a
      href="javascript: void(0);"
      class="btn btn-icon btn-primary back-to-top"
      id="back-to-top"
      v-scroll-to="'#topnav'"
    >
      <arrow-up-icon class="icons"></arrow-up-icon>
    </a>
    <!-- Back to top -->
  </div>
</template>

<style scoped>
.img-fluid_ {
    max-height: 150px;
    max-width: 120px;
  }
</style>