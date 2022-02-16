<script>
import {
  ArrowUpIcon,
  HeartIcon,
  EyeIcon,
  ShoppingCartIcon,
  KeyIcon,
  PhoneIcon,
  MailIcon,
  SettingsIcon,
  MapPinIcon,
  UserIcon,
  UserCheckIcon
} from "vue-feather-icons";
import { Carousel, Slide } from "vue-carousel";

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";

import {mapActions, mapGetters} from 'vuex';
/**
 * Shop-myaccount component
 */
export default {
  data() {
    return {
    };
  },
  components: {
    Navbar,
    Switcher,
    Footer,
    Carousel,
    Slide,
    ArrowUpIcon,
    HeartIcon,
    EyeIcon,
    ShoppingCartIcon,
    KeyIcon,
    PhoneIcon,
    MailIcon,
    SettingsIcon,
    MapPinIcon,
    UserIcon,
    UserCheckIcon
  },
  computed:{
    ...mapGetters(['info', 'take_order']),
  },
  async mounted() {
    // if (!Object.keys(this.info).length){
    //    await this.fetchInfo()
    // }
    // this.fetchInfo()
    // if (!Object.keys(this.$store.getters.info).length){
    //       await this.$store.dispatch('fetchInfo')
    //   }

    if(this.info === null){
      this.fetchInfo()
    }
    this.getOrder()
  },
  methods:{
    ...mapActions(['fetchInfo', 'logoutFirebase', 'mut_clearInfo', 'updateUserName', 'updateShippingAdress', 'getOrder']),
    async logout(){
        try{
          await this.logoutFirebase();
          this.mut_clearInfo;
          this.$router.push('/auth-login?message=logout');
        } catch (e){
            console.log('ОШИБКАААА');
        }   
    },
    clearFileds(){
      this.NewName = this.NewSurName = this.NewEmail = this.ShippingName = this.ShippingSurName = this.ShippingAdress = this.ShippingPhone = '';
    }
  },
};
</script>

<template>
  <div>
    <Navbar />

    <!-- Hero Start -->
    <section class="bg-half bg-light d-table w-100">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12 text-center">
            <div class="page-next-level">
              <h4 class="title">Личный кабинет</h4>
              <div class="page-next">
                <nav aria-label="breadcrumb" class="d-inline-block">
                  <ul class="breadcrumb bg-white rounded shadow mb-0">
                    <li class="breadcrumb-item">
                      <router-link to="/">Landrick</router-link>
                    </li>
                    <!-- <li class="breadcrumb-item">
                      <router-link to="/index-shop">Shop</router-link>
                    </li> -->
                    <li class="breadcrumb-item active" aria-current="page">
                      Личный кабинет
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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

    <!-- Start -->
    <section class="section">
      <div class="container">
        <div class="rounded p-4">
          <div class="media align-items-center">
            <img
              src="images/client/05.jpg"
              class="avatar avatar-md-md rounded-circle"
              alt=""
            />
            <div class="ml-3">
              <h6 class="text-muted mb-0">Добро пожаловать, <span style="font-size:1.3rem; color:black;">{{info.name }} {{info.surName}}</span></h6>
              <br>
              <a href="#" class="text-danger" @click.prevent="logout">Выйти</a>
            </div>
          </div>
          <div class="">
            <b-tabs
              pills
              justified
              vertical
              nav-wrapper-class="col-md-4 shadow"
              nav-class="bg-white rounded mt-4 p-3 mb-0"
              content-class="col-md-8 col-12 mt-4 pt-2 border"
            >
              <b-tab active>
                <template #title>
                  <div class="text-left py-1 px-3">
                    <h6 class="mb-0">
                      <i
                        class="uil uil-dashboard h5 align-middle mr-2 mb-0"
                      ></i>
                      Dashboard
                    </h6>
                  </div>
                </template>

                <!-- <h6 class="text-muted">
                  Hello <span class="text-dark">{{info.name}}</span> (not
                  <span class="text-dark">{{info.name}}</span>?
                  <a href="#" class="text-danger" @click.prevent="logout">Выйти</a>)
                </h6> -->

                <!-- <h6 class="text-muted mb-0">
                  From your account dashboard you can view your
                  <a href="javascript:void(0)" class="text-danger"
                    >recent orders</a
                  >, manage your
                  <a href="javascript:void(0)" class="text-danger"
                    >shipping and billing addresses</a
                  >, and
                  <a href="javascript:void(0)" class="text-danger"
                    >edit your password and account details</a
                  >.
                </h6> -->
              </b-tab>
              <b-tab title-link-class="border-top">
                <template #title>
                  <div class="text-left py-1 px-3">
                    <h6 class="mb-0">
                      <i class="uil uil-list-ul h5 align-middle mr-2 mb-0"></i>
                      Заказы
                    </h6>
                  </div>
                </template>

                <div class="table-responsive bg-white shadow rounded">
                  <table class="table mb-0 table-center table-nowrap">
                    <thead>
                      <tr>
                        <th scope="col">Order no.</th>
                        <th scope="col">Date</th>
                        <th scope="col">Status</th>
                        <th scope="col">Total</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in take_order" :key="item.id">
                        <!-- <p>item_name - {{item}}</p> -->
                        <th scope="row">{{item.id}}</th>
                        <td>{{item.data}}</td>
                        <td class="text-success">Delivered</td>
                        <td>
                          {{item.totalSum}} ₽ <span class="text-muted"> </span>
                        </td>
                        <td>
                          <a href="javascript:void(0)" class="text-primary"
                            >Подробнее <i class="uil uil-arrow-right"></i
                          ></a>
                        </td>
                      </tr>

                      <!-- <tr>
                        <th scope="row">8007</th>
                        <td>4th November 2020</td>
                        <td class="text-muted">Processing</td>
                        <td>$ 800 <span class="text-muted">for 1item</span></td>
                        <td>
                          <a href="javascript:void(0)" class="text-primary"
                            >View <i class="uil uil-arrow-right"></i
                          ></a>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">8008</th>
                        <td>4th November 2020</td>
                        <td class="text-danger">Canceled</td>
                        <td>$ 800 <span class="text-muted">for 1item</span></td>
                        <td>
                          <a href="javascript:void(0)" class="text-primary"
                            >View <i class="uil uil-arrow-right"></i
                          ></a>
                        </td> 
                      </tr>-->
                    </tbody>
                  </table>
                </div>
              </b-tab>
              <b-tab title-link-class="border-top">
                <template #title>
                  <div class="text-left py-1 px-3">
                    <h6 class="mb-0">
                      <i
                        class="uil uil-arrow-circle-down h5 align-middle mr-2 mb-0"
                      ></i>
                      Downloads
                    </h6>
                  </div>
                </template>

                <div class="table-responsive bg-white shadow rounded">
                  <table class="table mb-0 table-center table-nowrap">
                    <thead>
                      <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Quick heal</th>
                        <td class="text-muted">
                          It is said that song composers of the past <br />
                          used dummy texts as lyrics when writing <br />
                          melodies in order to have a 'ready-made' <br />
                          text to sing with the melody.
                        </td>
                        <td class="text-success">Downloaded</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </b-tab>
              <b-tab title-link-class="border-top">
                <template #title>
                  <div class="text-left py-1 px-3">
                    <h6 class="mb-0">
                      <i
                        class="uil uil-map-marker h5 align-middle mr-2 mb-0"
                      ></i>
                      Адрес доставки
                    </h6>
                  </div>
                </template>

                <h6 class="text-muted mb-0">
                  Следующий адрес будут использоваться на странице оформления заказа по умолчанию.
                </h6>

                <!-- <div class="row">
                  <div class="col-lg-12 mt-4 pt-2">
                    <div
                      class="media align-items-center mb-4 justify-content-between"
                    >
                      <h5 class="mb-0">Адрес доставки:</h5>
                      <a
                        href="javascript:void(0)"
                        class="text-primary h5 mb-0"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Edit"
                        ><i class="uil uil-edit align-middle"></i
                      ></a>
                    </div>
                    <div class="pt-4 border-top">
                      <p class="h6">{{info.name}} {{info.surName}}</p>
                      <p class="h6 text-muted">{{info.adress}}</p>
                      <p class="h6 text-muted">{{info.country}}</p>
                      <p class="h6 text-muted mb-0">{{info.phone}}</p>
                    </div>
                  </div>

                  <div class="col-lg-6 mt-4 pt-2">
                    <div
                      class="media align-items-center mb-4 justify-content-between"
                    >
                      <h5 class="mb-0">Shipping Address:</h5>
                      <a
                        href="javascript:void(0)"
                        class="text-primary h5 mb-0"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Edit"
                        ><i class="uil uil-edit align-middle"></i
                      ></a>
                    </div>
                    <div class="pt-4 border-top">
                      <p class="h6">Cally Joseph</p>
                      <p class="h6 text-muted">C/54 Northwest Freeway,</p>
                      <p class="h6 text-muted">Suite 558,</p>
                      <p class="h6 text-muted">Houston, USA 485</p>
                      <p class="h6 text-muted mb-0">+123 897 5468</p>
                    </div>
                  </div>
                </div> -->
                <hr>
                
                <form @submit.prevent="updateShippingAdress({ShippingName, ShippingSurName, ShippingAdress, ShippingPhone}), clearFileds()">
                  
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Имя</label>
                        <div class="position-relative">
                          <user-icon class="fea icon-sm icons"></user-icon>
                          <input
                            :placeholder="info.ShippingName"
                            name="name"
                            id="first-name"
                            type="text"
                            class="form-control pl-5"
                            v-model="ShippingName"
                          />
                        </div>
                      </div>
                    </div>
                    <!--end col-->
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Фамилия</label>
                        <div class="position-relative">
                          <user-check-icon
                            class="fea icon-sm icons"
                          ></user-check-icon>
                          <input
                            :placeholder="info.ShippingSurName"
                            name="sur_name"
                            id="last-name"
                            type="text"
                            class="form-control pl-5"
                            v-model="ShippingSurName"
                          />
                        </div>
                      </div>
                    </div>
                    <!--end col-->
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Ваш Адрес</label>
                        <div class="position-relative">
                          <house-icon class="fea icon-sm icons"></house-icon>
                          <input
                            :placeholder="info.ShippingAdress"
                            name="text"
                            id="text"
                            type="text"
                            class="form-control pl-5"
                            v-model="ShippingAdress"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Ваш Телефон</label>
                        <div class="position-relative">
                          <phone-icon class="fea icon-sm icons"></phone-icon>
                          <input
                            :placeholder="info.ShippingPhone"
                            autocomplete="tel"
                            name="phone"
                            id="phone"
                            type="phone"
                            class="form-control pl-5"
                            v-model="ShippingPhone"
                          />
                        </div>
                      </div>
                    </div>
                    <!-- :value="info.email" -->
                    <!--end col-->
                    <!-- <div class="col-md-6">
                      <div class="form-group">
                        <label>Display Name</label>
                        <div class="position-relative">
                          <user-check-icon
                            class="fea icon-sm icons"
                          ></user-check-icon>
                          <input
                            name="name"
                            id="display-name"
                            type="text"
                            class="form-control pl-5"
                            :value="info.name"
                          />
                        </div>
                      </div>
                    </div> -->
                    <!--end col-->

                    <div class="col-lg-12 mt-2 mb-0">
                      <button class="btn btn-primary" >Сохранить</button>
                    </div>
                    <!--end col-->
                  </div>
                  <!--end row-->
                </form>

              </b-tab>
              <b-tab>
                <template #title>
                  <div class="text-left py-1 px-3">
                    <h6 class="mb-0">
                      <i class="uil uil-user h5 align-middle mr-2 mb-0"></i>
                      Детали Аккаунта
                    </h6>
                  </div>
                </template>

                <!-- <form @submit.prevent="lol"> -->
                <form @submit.prevent="updateUserName({NewName, NewSurName, NewEmail}), clearFileds()">
                  
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Имя</label>
                        <div class="position-relative">
                          <user-icon class="fea icon-sm icons"></user-icon>
                          <input
                            :placeholder="info.name"
                            name="name"
                            id="first-name"
                            type="text"
                            class="form-control pl-5"
                            v-model="NewName"
                          />
                        </div>
                      </div>
                    </div>
                    <!--end col-->
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Фамилия</label>
                        <div class="position-relative">
                          <user-check-icon
                            class="fea icon-sm icons"
                          ></user-check-icon>
                          <input
                            :placeholder="info.surName"
                            name="sur_name"
                            id="last-name"
                            type="text"
                            class="form-control pl-5"
                            v-model="NewSurName"
                          />
                        </div>
                      </div>
                    </div>
                    <!--end col-->
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Ваш Email</label>
                        <div class="position-relative">
                          <mail-icon class="fea icon-sm icons"></mail-icon>
                          <input
                            :placeholder="info.email"
                            name="email"
                            id="email"
                            type="email"
                            class="form-control pl-5"
                            v-model="NewEmail"
                          />
                        </div>
                      </div>
                    </div>
                    <!-- :value="info.email" -->
                    <!--end col-->
                    <!-- <div class="col-md-6">
                      <div class="form-group">
                        <label>Display Name</label>
                        <div class="position-relative">
                          <user-check-icon
                            class="fea icon-sm icons"
                          ></user-check-icon>
                          <input
                            name="name"
                            id="display-name"
                            type="text"
                            class="form-control pl-5"
                            :value="info.name"
                          />
                        </div>
                      </div>
                    </div> -->
                    <!--end col-->

                    <div class="col-lg-12 mt-2 mb-0">
                      <button class="btn btn-primary" >Сохранить</button>
                    </div>
                    <!--end col-->
                  </div>
                  <!--end row-->
                </form>

                <h5 class="mt-4">Изменить пароль :</h5>
                <form>
                  <div class="row mt-3">
                    <div class="col-lg-12">
                      <div class="form-group">
                        <label>Старый пароль :</label>
                        <div class="position-relative">
                          <key-icon class="fea icon-sm icons"></key-icon>
                          <input
                            type="password"
                            class="form-control pl-5"
                            required=""
                          />
                        </div>
                      </div>
                    </div>
                    <!--end col-->

                    <div class="col-lg-12">
                      <div class="form-group">
                        <label>Новый пароль :</label>
                        <div class="position-relative">
                          <key-icon class="fea icon-sm icons"></key-icon>
                          <input
                            type="password"
                            class="form-control pl-5"
                            required=""
                          />
                        </div>
                      </div>
                    </div>
                    <!--end col-->

                    <div class="col-lg-12">
                      <div class="form-group">
                        <label>Повторите пароль :</label>
                        <div class="position-relative">
                          <key-icon class="fea icon-sm icons"></key-icon>
                          <input
                            type="password"
                            class="form-control pl-5"
                            required=""
                          />
                        </div>
                      </div>
                    </div>
                    <!--end col-->

                    <div class="col-lg-12 mt-2 mb-0">
                      <button class="btn btn-primary">Сохранить</button>
                    </div>
                    <!--end col-->
                  </div>
                  <!--end row-->
                </form>
              </b-tab>

              <b-tab>
                <template #title>
                  <div class="text-left py-1 px-3">
                    <h6 class="mb-0">
                      <i
                        class="uil uil-sign-out-alt h5 align-middle mr-2 mb-0"
                      ></i>
                      Logout
                    </h6>
                  </div>
                </template>
                <p>I'm a disabled tab!</p></b-tab
              >
            </b-tabs>
          </div>
          <!--end row-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->

    </section>
    <!--end section-->
    <!-- End -->
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
