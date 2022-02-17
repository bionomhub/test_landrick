<script>
import {mapGetters, mapActions} from 'vuex'
import {
    ArrowUpIcon
} from 'vue-feather-icons';

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";

/**
 * Shop checkouts component
 */
export default {
    data() {
        return {
            dateOrder:'',
            infoName1: '',
            ordersId: {}
        }
    },
    components: {
        Navbar,
        Switcher,
        Footer,
        ArrowUpIcon
    },
    computed:{
        ...mapGetters([ 'get_cart', 'get_item', 'get_TotalPositions', 'get_basket_total', 'get_Total', 'info']),
    },
    methods:{
        ...mapActions(['fetchInfo',  'updateShippingAdress', 'sendOrder']),
        lol(){
            console.log(this.OrderName, this.OrderSurName, this.OrderCity, this.OrderAdress, this.OrderPhone, this.dateOrder)
        },
        currentDateTime() {
            const current = new Date();
            const date = current.getDate() + ' '+(current.toLocaleString('default', { month: 'long' }))+' '+ current.getFullYear();
            const dateTime = date ;
            this.dateOrder = dateTime;
        return dateTime;
        },
        pushToHome(){
            this.$router.push('/')
        },
        infoName(){
            this.infoName1 = this.info.name
            return this.infoName1
        },
        getIdObjectCart(){
            const getOrdersId = Object.keys(this.get_cart);
            this.ordersId = getOrdersId;
            return getOrdersId;
        }

    },
    mounted(){
        this.currentDateTime()
        // console.log(this.infoName())
        this.getIdObjectCart()
        
    }
}
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
                        <h4 class="title"> Оформление заказа </h4>
                        <div class="page-next">
                            <nav aria-label="breadcrumb" class="d-inline-block">
                                <ul class="breadcrumb bg-white rounded shadow mb-0">
                                    <li class="breadcrumb-item">
                                        <router-link to="/">Landrick</router-link>
                                    </li>
                                    <li class="breadcrumb-item">
                                        <router-link to="/index-shop">Корзина</router-link>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">Оформление заказа</li>
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
            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>
    <!-- Hero End -->

    <!-- Start -->
    <section class="section">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-md-6">
                    <div class="rounded shadow-lg p-4">
                        <h5 class="mb-0">Детали заказа :</h5>

                        <!-- <form class="mt-4" @submit.prevent="sendOrder({OrderName, OrderSurName, OrderCity, OrderAdress, OrderPhone, dateOrder, get_Total, get_TotalPositions, ordersId, infoName}), pushToHome()"> -->
                            <form @submit.prevent >
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group position-relative">
                                        <label>Имя <span class="text-danger">*</span></label>
                                        <input name="name" id="firstname" type="text" class="form-control" :placeholder="info.ShippingName" v-model="OrderName">
                                    </div>
                                </div>
                                <!--end col-->
                                <div class="col-12">
                                    <div class="form-group position-relative">
                                        <label>Фамилия <span class="text-danger">*</span></label>
                                        <input name="name" id="lastname" type="text" class="form-control" :placeholder="info.ShippingSurName" v-model="OrderSurName">
                                    </div>
                                </div>
                                <!--end col-->
                                <!-- <div class="col-12">
                                    <div class="form-group position-relative">
                                        <label>Company Name <span class="text-muted">(Optional)</span></label>
                                        <input name="name" id="companyname" type="text" class="form-control" placeholder="Company Name :">
                                    </div>
                                </div> -->
                                <!--end col-->
                                 <div class="col-md-6">
                                    <div class="form-group position-relative">
                                        <label>Город <span class="text-danger">*</span></label>
                                        <input type="text" name="city" id="city" class="form-control" :placeholder="info.ShippingAdress" v-model="OrderCity">
                                    </div>
                                </div>
                                <!--end col-->
                                <div class="col-6">
                                    <div class="form-group position-relative">
                                        <label>Улица, дом <span class="text-danger">*</span></label>
                                        <input type="text" name="address1" id="address1" class="form-control" :placeholder="info.ShippingAdress" v-model="OrderAdress">
                                    </div>
                                </div>
                                <!--end col-->
                                <!-- <div class="col-12">
                                    <div class="form-group position-relative">
                                        <label>Apartment, suite, unit etc. <span class="text-muted">(Optional)</span></label>
                                        <input type="text" name="address2" id="address2" class="form-control" placeholder="Apartment, suite, unit etc. :">
                                    </div>
                                </div> -->
                                <!--end col-->
                                <!-- <div class="col-md-6">
                                    <div class="form-group position-relative">
                                        <label>Индекс <span class="text-danger">*</span></label>
                                        <input type="text" name="postcode" id="postcode" class="form-control" placeholder="Zip :">
                                    </div>
                                </div> -->
                                <!--end col-->
                                <!-- <div class="col-md-6">
                                    <div class="form-group position-relative">
                                        <label>State <span class="text-danger">*</span></label>
                                        <input type="text" name="state" id="state" class="form-control" placeholder="State Name :">
                                    </div>
                                </div> -->
                                <!--end col-->
                                <!-- <div class="col-md-6">
                                    <div class="form-group position-relative">
                                        <label>Страна <span class="text-danger">*</span></label>
                                        <select class="form-control custom-select">
                                            <option selected="">India</option>
                                            <option value="AF">Afghanistan</option>
                                            <option value="AX">&Aring;land Islands</option>
                                            <option value="AL">Albania</option>
                                            <option value="DZ">Algeria</option>
                                            <option value="AS">American Samoa</option>
                                            <option value="AD">Andorra</option>
                                            <option value="AO">Angola</option>
                                            <option value="AI">Anguilla</option>
                                            <option value="AQ">Antarctica</option>
                                        </select>
                                    </div>
                                </div> -->
                                <!--end col-->
                                <div class="col-12">
                                    <div class="form-group position-relative">
                                        <label>Телефон <span class="text-danger">*</span></label>
                                        <input type="text" name="phone" id="phone" class="form-control" :placeholder="info.ShippingPhone" v-model="OrderPhone">
                                    </div>
                                </div>
                                <!--end col-->
                                <!-- <div class="col-12">
                                    <div class="form-group position-relative">
                                        <label>Email <span class="text-danger">*</span></label>
                                        <input name="email" id="email" type="email" class="form-control" placeholder="Your email :">
                                    </div>
                                </div> -->
                                <!--end col-->
                            </div>
                            <!-- <button>submin</button> -->
                            <!--end row-->
                        </form>
                        <!--end form-->
                    </div>

                    <div class="form-check form-check-inline my-4">
                        <div class="form-group mb-0">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="newaccount">
                                <label class="custom-control-label" for="newaccount">Создать новый аккаунт ?</label>
                            </div>
                        </div>
                    </div>

                    <div class="rounded shadow-lg p-4">
                        <!-- <div class="form-check form-check-inline">
                            <div class="form-group">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="addnewaddress">
                                    <label class="custom-control-label" for="addnewaddress">Ship to a different address ?</label>
                                </div>
                            </div>
                        </div> -->

                        <div class="form-group position-relative">
                            <label>Коментарий</label>
                            <textarea name="comments" id="comments" rows="4" class="form-control" placeholder="Коментарий к вашему заказу:"></textarea>
                        </div>
                    </div>
                </div>
                <!--end col-->

                <div class="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div class="rounded shadow-lg p-4">
                        <div class="d-flex mb-4 justify-content-between">
                            <h5>{{get_TotalPositions}} позиции</h5>                            
                            <router-link to="/shop-cart" class="text-muted h6">Детали</router-link>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-center table-padding mb-0">
                                <tbody>
                                    <!-- <tr>
                                        <td class="h6 border-0">Subtotal</td>
                                        <td class="text-center font-weight-bold border-0">$ 2409</td>
                                    </tr>
                                    <tr>
                                        <td class="h6">Shipping Charge</td>
                                        <td class="text-center font-weight-bold">$ 0.00</td>
                                    </tr> -->
                                    <tr class="bg-light">
                                        <td class="h5 font-weight-bold">Итого</td>
                                        <td class="text-center text-primary h4 font-weight-bold">{{get_Total}}₽</td>
                                    </tr>
                                </tbody>
                            </table>

                            <ul class="list-unstyled mt-4 mb-0">
                                <!-- <li>
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <div class="form-group mb-0">
                                            <input type="radio" id="banktransfer" checked="checked" name="customRadio" class="custom-control-input">
                                            <label class="custom-control-label" for="banktransfer">Bank Transfer</label>
                                        </div>
                                    </div>
                                </li>

                                <li class="mt-3">
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <div class="form-group mb-0">
                                            <input type="radio" id="chaquepayment" name="customRadio" class="custom-control-input">
                                            <label class="custom-control-label" for="chaquepayment">Cheque Payment</label>
                                        </div>
                                    </div>
                                </li>

                                <li class="mt-3">
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <div class="form-group mb-0">
                                            <input type="radio" id="cashpayment" name="customRadio" class="custom-control-input">
                                            <label class="custom-control-label" for="cashpayment">Cash on Delivery</label>
                                        </div>
                                    </div>
                                </li> -->

                                <li class="mt-3">
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <div class="form-group mb-0">
                                            <input type="radio" id="paypal" name="customRadio" class="custom-control-input">
                                            <label class="custom-control-label" for="paypal">Оплата онлайн <a href="https://www.paypal.com/uk/webapps/mpp/paypal-popup" target="_blank" class="ml-2 text-primary">What is paypal?</a></label>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            <div class="mt-4 pt-2">
                                <button class="btn btn-block btn-primary" @click="sendOrder({OrderName, OrderSurName, OrderCity, OrderAdress, OrderPhone, dateOrder, get_Total, get_TotalPositions, ordersId, infoName}), pushToHome()">Оформить заказ</button>
                            </div>
                        </div>
                    </div>
                </div>
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
    <a href="javascript: void(0);" class="btn btn-icon btn-primary back-to-top" id="back-to-top" v-scroll-to="'#topnav'">
        <arrow-up-icon class="icons"></arrow-up-icon>
    </a>
    <!-- Back to top -->
</div>
</template>
