<script>
import {mapGetters, mapActions} from 'vuex'
import {
    ArrowUpIcon
} from 'vue-feather-icons';
import {
    Carousel,
    Slide
} from 'vue-carousel';

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";

/**
 * Shop-cart component
 */
export default {
    data() {
        return {
            counter: 0,
        }
    },
    components: {
        Navbar,
        Switcher,
        Footer,
        Carousel,
        Slide,
        ArrowUpIcon
    },
    methods: {
        ...mapActions(['increase_count', 'decrement_count', 'DELETE_TO_CART', 'removeItem',]),
    },
    computed:{
        ...mapGetters([ 'get_cart', 'get_item', 'get_TotalPositions', 'get_basket_total', 'get_Total'])
    },
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
                        <h4 class="title"> Корзина </h4>
                        <div class="page-next">
                            <nav aria-label="breadcrumb" class="d-inline-block">
                                <ul class="breadcrumb bg-white rounded shadow mb-0">
                                    <li class="breadcrumb-item">
                                        <router-link to="/">Landrick</router-link>
                                    </li>
                                    <li class="breadcrumb-item">
                                        <router-link to="/index-shop">Магазин</router-link>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">Корзина</li>
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
        <div class="container" v-if="get_Total > 0">
            <div class="row">
                <div class="col-12">
                    <div class="table-responsive bg-white shadow">
                        <table class="table table-center table-padding mb-0">
                            <thead>
                                <tr>
                                    <th class="py-3" style="min-width:20px "></th>
                                    <th class="py-3" style="min-width: 300px;">Товар</th>
                                    <th class=" py-3" style="min-width: 160px;">Наименование</th>
                                    <th class="text-center py-3" style="min-width: 160px;">Цена</th>
                                    <th class="text-center py-3" style="min-width: 160px;">Количество</th>
                                    <th class="text-center py-3" style="min-width: 160px;">Итого</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                <tr v-for="item in get_cart" :key="item.id">
                                    <td class="h6"><a class="text-danger" @click.prevent="removeItem(item.id)">X</a></td>
                                    <!-- <p>{{item}}</p> -->
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <img :src="item.image" class="img-fluid avatar avatar-small rounded shadow" style="height:auto;" alt="">
                                            <h6 class="mb-0 ml-3">{{item.brand}}</h6>
                                        </div>
                                    </td>
                                    <td class="text">{{item.title}}</td>
                                    <td class="text-center">{{item.price}}₽</td>
                                    <td class="text-center">
                                        <input type="button" value="-" class="minus btn btn-icon btn-soft-primary font-weight-bold" @click.prevent="decrement_count(item.id)">
                                        <input type="text" v-model="item.qt" step="1" min="1" name="quantity"  title="Qty" class="btn btn-icon btn-soft-primary font-weight-bold ml-1">
                                        <input type="button" value="+" class="plus btn btn-icon btn-soft-primary font-weight-bold ml-1"  @click.prevent="increase_count(item.id)">
                                    </td>
                                    <td class="text-center font-weight-bold">{{item.price * item.qt}}₽</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>                
            </div>            
            <div class="row">
                <div class="col-lg-8 col-md-6 mt-4 pt-2">
                    <a @click.prevent="DELETE_TO_CART" class="btn btn-danger">Очистить корзину</a>
                    
                    
                    
                </div>
                <div class="col-lg-4 col-md-6 ml-auto mt-4 pt-2">
                    <div class="table-responsive bg-white rounded shadow">
                        <table class="table table-center table-padding mb-0">
                            <tbody>
                                <tr>
                                    <td class="h6">Количество товаров</td>
                                    <td class="text-center font-weight-bold">{{get_TotalPositions}}</td>
                                </tr>
                                <tr>
                                    <td class="h6">Итого:</td>
                                    <td class="text-center font-weight-bold">{{get_Total}}₽</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="mt-4 pt-2 text-right">
                        <router-link to="/shop-checkouts" class="btn btn-primary">Оформление заказа</router-link>
                    </div>
                </div>
            </div>
        </div>
            <div class="container" v-else>
                <p style="text-align:center">В вашей корзине пока ничего нет</p>
            </div>
    </section>
    <Footer />
    <Switcher />
    <a href="javascript: void(0);" class="btn btn-icon btn-primary back-to-top" id="back-to-top" v-scroll-to="'#topnav'">
        <arrow-up-icon class="icons"></arrow-up-icon>
    </a>
</div>
</template>


<style scoped>
.cart_on_page{
    padding: 10px;
    border: 1px solid;
    border-radius: 10px;
    background-color: azure;
    max-width: 500px;
    margin-left: 20px;
}
</style>