<script>
    import {
        ArrowUpIcon,
        HeartIcon,
        EyeIcon,
        ShoppingCartIcon
    } from 'vue-feather-icons';

    import Navbar from "@/components/navbar";
    import Switcher from "@/components/switcher";
    import Footer from "@/components/footer";
    import Products from "@/components/products";
    import {
        mapGetters,
        mapActions
    } from 'vuex';

    /**
     * Shop-products component
     */
    export default {
        components: {
            Navbar,
            Switcher,
            Footer,
            ArrowUpIcon,
            HeartIcon,
            EyeIcon,
            ShoppingCartIcon,
            Products
        },
        computed: {
            ...mapGetters([ 'get_category', 'get_filters_products_all', 'get_products']),

        },
        methods: {
            ...mapActions(['act_categories', 'updateFilter']),
        },
        mounted() {
            this.act_categories()
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
                            <h4 class="title"> Каталог </h4>
                            <div class="page-next">
                                <nav aria-label="breadcrumb" class="d-inline-block">
                                    <ul class="breadcrumb bg-white rounded shadow mb-0">
                                        <li class="breadcrumb-item">
                                            <router-link to="/">Landrick</router-link>
                                        </li>
                                        <li class="breadcrumb-item">
                                            <router-link to="/index-shop">Shop</router-link>
                                        </li>
                                        <li class="breadcrumb-item active" aria-current="page">Products</li>
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

        <!-- Start Products -->
        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-12">
                        <div class="card border-0 sidebar sticky-bar">
                            <div class="card-body p-0">
                                <!-- SEARCH -->
                                <div class="widget">
                                    <div id="search2" class="widget-search mb-0">
                                        <form role="search" method="get" id="searchform" class="searchform">
                                            <div>
                                                <input type="text" class="border rounded" name="s" id="s"
                                                    placeholder="Поиск...">
                                                <input type="submit" id="searchsubmit" value="Search">
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <!-- SEARCH -->

                                <!-- CATAGORIES -->
                                <div class="widget mt-4 pt-2">
                                    <h4 class="widget-title">Категории</h4>
                                  
                                    <ul class="col container-filter list-unstyled categories-filter mb-0 pl-0">
                                        <li class="list-inline-item">
                                                <a class="categories-name border d-block text-dark rounded"
                                                @click="updateFilter('all')">all</a>
                                        </li>
                                    </ul>
                                    <ul class="col container-filter list-unstyled categories-filter mb-0 pl-0" id="filter"
                                        v-for="item in get_category" :key="item">
                                        <li class="list-inline-item">
                                                <a class="categories-name border d-block text-dark rounded"
                                                @click="updateFilter(item)">{{item}}</a>
                                        </li>
                                    </ul>
                                </div>
                                <!-- CATAGORIES -->

                                <!-- color -->
                                <!-- <div class="widget mt-4 pt-2">
                                    <h4 class="widget-title">Color</h4>
                                    <ul class="list-unstyled mt-4 mb-0">
                                        <li class="list-inline-item"><a href="javascript:void(0)"
                                                class="px-3 py-1 rounded-pill bg-primary"></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)"
                                                class="px-3 py-1 rounded-pill bg-danger ml-1"></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)"
                                                class="px-3 py-1 rounded-pill bg-success ml-1"></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)"
                                                class="px-3 py-1 rounded-pill bg-info ml-1"></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)"
                                                class="px-3 py-1 rounded-pill bg-secondary ml-1"></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)"
                                                class="px-3 py-1 rounded-pill bg-warning ml-1"></a></li>
                                    </ul>
                                </div> -->
                                <!-- COlor -->

                                <!-- Top Products -->
                                <div class="widget mt-4 pt-2">
                                    <h4 class="widget-title">Популярные товары</h4>
                                    <ul class="list-unstyled mt-4 mb-0" v-for="star in get_products" :key="star">
                                        <li class="media align-items-center" v-if="star.rating.rate > 4.5">
                                            <a href="javascript:void(0)">
                                                <img :src="star.image"
                                                    class="img-fluid avatar avatar-small rounded shadow"
                                                    style="height:auto;" alt="">
                                            </a>
                                            <div class="content ml-3">
                                                <a href="javascript:void(0)" class="text-dark h6">{{star.title}}</a>
                                                <h6 class="text-muted small font-italic mb-0 mt-1">{{star.price}} ₽<del
                                                        class="text-danger ml-2">{{star.price}} ₽</del> </h6>
                                            </div>
                                        </li>
                                        <!-- <li class="media align-items-center mt-2">
                                            <a href="javascript:void(0)">
                                                <img src="images/shop/product/s3.jpg"
                                                    class="img-fluid avatar avatar-small rounded shadow"
                                                    style="height:auto;" alt="">
                                            </a>
                                            <div class="content ml-3">
                                                <a href="javascript:void(0)" class="text-dark h6">Watch</a>
                                                <h6 class="text-muted small font-italic mb-0 mt-1">$18.00 <del
                                                        class="text-danger ml-2">$22.00</del> </h6>
                                            </div>
                                        </li>
                                        <li class="media align-items-center mt-2">
                                            <a href="javascript:void(0)">
                                                <img src="images/shop/product/s6.jpg"
                                                    class="img-fluid avatar avatar-small rounded shadow"
                                                    style="height:auto;" alt="">
                                            </a>
                                            <div class="content ml-3">
                                                <a href="javascript:void(0)" class="text-dark h6">Coffee Cup</a>
                                                <h6 class="text-muted small font-italic mb-0 mt-1">$18.00 <del
                                                        class="text-danger ml-2">$22.00</del> </h6>
                                            </div>
                                        </li>
                                        <li class="media align-items-center mt-2">
                                            <a href="javascript:void(0)">
                                                <img src="images/shop/product/s8.jpg"
                                                    class="img-fluid avatar avatar-small rounded shadow"
                                                    style="height:auto;" alt="">
                                            </a>
                                            <div class="content ml-3">
                                                <a href="javascript:void(0)" class="text-dark h6">Wooden Stools</a>
                                                <h6 class="text-muted small font-italic mb-0 mt-1">$18.00 <del
                                                        class="text-danger ml-2">$22.00</del> </h6>
                                            </div>
                                        </li> -->
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--end col-->

                    <div class="col-lg-9 col-md-8 col-12 mt-5 pt-2 mt-sm-0 pt-sm-0">
                        <!-- <div class="row align-items-center">
                            <div class="col-lg-9 col-md-7">
                                <div class="section-title">
                                    <h5 class="mb-0">Showing 1–15 of 47 results</h5>
                                </div>
                            </div>
                            

                            <div class="col-lg-3 col-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div class="form custom-form">
                                    <div class="form-group mb-0">
                                        <select class="form-control custom-select" id="Sortbylist-job">
                                            <option>Sort by latest</option>
                                            <option>Sort by popularity</option>
                                            <option>Sort by rating</option>
                                            <option>Sort by price: low to high</option>
                                            <option>Sort by price: high to low</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            
                        </div> -->
                        <!--end row-->

                        <Products />
                    </div>
                    <!--end col-->
                </div>
                <!--end row-->
            </div>
            <!--end container-->
        </section>
        <!--end section-->
        <!-- End Products -->
        <!--end section-->
        <Footer />
        <!-- Footer End -->
        <Switcher />
        <!-- Back to top -->
        <a href="javascript: void(0);" class="btn btn-icon btn-primary back-to-top" id="back-to-top"
            v-scroll-to="'#topnav'">
            <arrow-up-icon class="icons"></arrow-up-icon>
        </a>
        <!-- Back to top -->
    </div>
</template>