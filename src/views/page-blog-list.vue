<script>
import {
    ArrowUpIcon
} from 'vue-feather-icons';

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";

/**
 * Page-blog-list component
 */
export default {
    data() {
        return {}
    },
    components: {
        Navbar,
        Switcher,
        Footer,
        ArrowUpIcon
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
                        <h4 class="title"> Blog Listing </h4>
                        <div class="page-next">
                            <nav aria-label="breadcrumb" class="d-inline-block">
                                <ul class="breadcrumb bg-white rounded shadow mb-0">
                                    <li class="breadcrumb-item">
                                        <router-link to="/">Landrick</router-link>
                                    </li>
                                    <li class="breadcrumb-item"><a href="#">Page</a></li>
                                    <li class="breadcrumb-item"><a href="#">Blog</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Blog List</li>
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

    <!--Blog Lists Start-->
    <section class="section">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-12 mb-4 pb-2">
                    <div class="card blog rounded border-0 shadow overflow-hidden">
                        <div class="row align-items-center no-gutters">
                            <div class="col-md-6">
                                <img src="images/work/14.jpg" class="img-fluid" alt="">
                                <div class="overlay bg-dark"></div>
                                <div class="author">
                                    <small class="text-light user d-block"><i class="mdi mdi-account"></i> Calvin Carlo</small>
                                    <small class="text-light date"><i class="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                </div>
                            </div>
                            <!--end col-->

                            <div class="col-md-6">
                                <div class="card-body content">
                                    <h5><a href="javascript:void(0)" class="card-title title text-dark">Design your apps in your own way</a></h5>
                                    <p class="text-muted mb-0">Due to its widespread use as filler text for layouts, non-readability</p>
                                    <div class="post-meta d-flex justify-content-between mt-3">
                                        <ul class="list-unstyled mb-0">
                                            <li class="list-inline-item mr-2 mb-0"><a href="javascript:void(0)" class="text-muted like"><i class="mdi mdi-heart-outline mr-1"></i>33</a></li>
                                            <li class="list-inline-item"><a href="javascript:void(0)" class="text-muted comments"><i class="mdi mdi-comment-outline mr-1"></i>08</a></li>
                                        </ul>
                                        <router-link to="/page-blog-detail" class="text-muted readmore">Read More <i class="mdi mdi-chevron-right"></i></router-link>
                                    </div>
                                </div>
                            </div>
                            <!--end col-->
                        </div>
                        <!--end row-->
                    </div>
                    <!--end blog post-->
                </div>
                <!--end col-->

                <div class="col-lg-6 col-12 mb-4 pb-2">
                    <div class="card blog rounded border-0 shadow overflow-hidden">
                        <div class="row align-items-center no-gutters">
                            <div class="col-md-6 order-2 order-md-1">
                                <div class="card-body content">
                                    <h5><a href="javascript:void(0)" class="card-title title text-dark">Design your apps in your own way</a></h5>
                                    <p class="text-muted mb-0">Due to its widespread use as filler text for layouts, non-readability</p>
                                    <div class="post-meta d-flex justify-content-between mt-3">
                                        <ul class="list-unstyled mb-0">
                                            <li class="list-inline-item mr-2 mb-0"><a href="javascript:void(0)" class="text-muted like"><i class="mdi mdi-heart-outline mr-1"></i>33</a></li>
                                            <li class="list-inline-item"><a href="javascript:void(0)" class="text-muted comments"><i class="mdi mdi-comment-outline mr-1"></i>08</a></li>
                                        </ul>
                                        <router-link to="/page-blog-detail" class="text-muted readmore">Read More <i class="mdi mdi-chevron-right"></i></router-link>
                                    </div>
                                </div>
                            </div>
                            <!--end col-->

                            <div class="col-md-6 order-1 order-md-2">
                                <img src="images/work/15.jpg" class="img-fluid" alt="">
                                <div class="overlay bg-dark"></div>
                                <div class="author">
                                    <small class="text-light user d-block"><i class="mdi mdi-account"></i> Calvin Carlo</small>
                                    <small class="text-light date"><i class="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                </div>
                            </div>
                            <!--end col-->
                        </div>
                        <!--end row-->
                    </div>
                    <!--end blog post-->
                </div>
                <!--end col-->

                <div class="col-lg-6 col-12 mb-4 pb-2">
                    <div class="card blog rounded border-0 shadow overflow-hidden">
                        <div class="row align-items-center no-gutters">
                            <div class="col-md-6">
                                <img src="images/work/16.jpg" class="img-fluid" alt="">
                                <div class="overlay bg-dark"></div>
                                <div class="author">
                                    <small class="text-light user d-block"><i class="mdi mdi-account"></i> Calvin Carlo</small>
                                    <small class="text-light date"><i class="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                </div>
                            </div>
                            <!--end col-->

                            <div class="col-md-6">
                                <div class="card-body content">
                                    <h5><a href="javascript:void(0)" class="card-title title text-dark">Design your apps in your own way</a></h5>
                                    <p class="text-muted mb-0">Due to its widespread use as filler text for layouts, non-readability</p>
                                    <div class="post-meta d-flex justify-content-between mt-3">
                                        <ul class="list-unstyled mb-0">
                                            <li class="list-inline-item mr-2 mb-0"><a href="javascript:void(0)" class="text-muted like"><i class="mdi mdi-heart-outline mr-1"></i>33</a></li>
                                            <li class="list-inline-item"><a href="javascript:void(0)" class="text-muted comments"><i class="mdi mdi-comment-outline mr-1"></i>08</a></li>
                                        </ul>
                                        <router-link to="/page-blog-detail" class="text-muted readmore">Read More <i class="mdi mdi-chevron-right"></i></router-link>
                                    </div>
                                </div>
                            </div>
                            <!--end col-->
                        </div>
                        <!--end row-->
                    </div>
                    <!--end blog post-->
                </div>
                <!--end col-->

                <div class="col-lg-6 col-12 mb-4 pb-2">
                    <div class="card blog rounded border-0 shadow overflow-hidden">
                        <div class="row align-items-center no-gutters">
                            <div class="col-md-6 order-2 order-md-1">
                                <div class="card-body content">
                                    <h5><a href="javascript:void(0)" class="card-title title text-dark">Design your apps in your own way</a></h5>
                                    <p class="text-muted mb-0">Due to its widespread use as filler text for layouts, non-readability</p>
                                    <div class="post-meta d-flex justify-content-between mt-3">
                                        <ul class="list-unstyled mb-0">
                                            <li class="list-inline-item mr-2 mb-0"><a href="javascript:void(0)" class="text-muted like"><i class="mdi mdi-heart-outline mr-1"></i>33</a></li>
                                            <li class="list-inline-item"><a href="javascript:void(0)" class="text-muted comments"><i class="mdi mdi-comment-outline mr-1"></i>08</a></li>
                                        </ul>
                                        <router-link to="/page-blog-detail" class="text-muted readmore">Read More <i class="mdi mdi-chevron-right"></i></router-link>
                                    </div>
                                </div>
                            </div>
                            <!--end col-->

                            <div class="col-md-6  order-1 order-md-2">
                                <img src="images/work/17.jpg" class="img-fluid" alt="">
                                <div class="overlay bg-dark"></div>
                                <div class="author">
                                    <small class="text-light user d-block"><i class="mdi mdi-account"></i> Calvin Carlo</small>
                                    <small class="text-light date"><i class="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                </div>
                            </div>
                            <!--end col-->
                        </div>
                        <!--end row-->
                    </div>
                    <!--end blog post-->
                </div>
                <!--end col-->

                <div class="col-lg-6 col-12 mb-4 pb-2">
                    <div class="card blog rounded border-0 shadow overflow-hidden">
                        <div class="row align-items-center no-gutters">
                            <div class="col-md-6">
                                <img src="images/work/18.jpg" class="img-fluid" alt="">
                                <div class="overlay bg-dark"></div>
                                <div class="author">
                                    <small class="text-light user d-block"><i class="mdi mdi-account"></i> Calvin Carlo</small>
                                    <small class="text-light date"><i class="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                </div>
                            </div>
                            <!--end col-->

                            <div class="col-md-6">
                                <div class="card-body content">
                                    <h5><a href="javascript:void(0)" class="card-title title text-dark">Design your apps in your own way</a></h5>
                                    <p class="text-muted mb-0">Due to its widespread use as filler text for layouts, non-readability</p>
                                    <div class="post-meta d-flex justify-content-between mt-3">
                                        <ul class="list-unstyled mb-0">
                                            <li class="list-inline-item mr-2 mb-0"><a href="javascript:void(0)" class="text-muted like"><i class="mdi mdi-heart-outline mr-1"></i>33</a></li>
                                            <li class="list-inline-item"><a href="javascript:void(0)" class="text-muted comments"><i class="mdi mdi-comment-outline mr-1"></i>08</a></li>
                                        </ul>
                                        <router-link to="/page-blog-detail" class="text-muted readmore">Read More <i class="mdi mdi-chevron-right"></i></router-link>
                                    </div>
                                </div>
                            </div>
                            <!--end col-->
                        </div>
                        <!--end row-->
                    </div>
                    <!--end blog post-->
                </div>
                <!--end col-->

                <div class="col-lg-6 col-12 mb-4 pb-2">
                    <div class="card blog rounded border-0 shadow overflow-hidden">
                        <div class="row align-items-center no-gutters">
                            <div class="col-md-6 order-2 order-md-1">
                                <div class="card-body content">
                                    <h5><a href="javascript:void(0)" class="card-title title text-dark">Design your apps in your own way</a></h5>
                                    <p class="text-muted mb-0">Due to its widespread use as filler text for layouts, non-readability</p>
                                    <div class="post-meta d-flex justify-content-between mt-3">
                                        <ul class="list-unstyled mb-0">
                                            <li class="list-inline-item mr-2 mb-0"><a href="javascript:void(0)" class="text-muted like"><i class="mdi mdi-heart-outline mr-1"></i>33</a></li>
                                            <li class="list-inline-item"><a href="javascript:void(0)" class="text-muted comments"><i class="mdi mdi-comment-outline mr-1"></i>08</a></li>
                                        </ul>
                                        <router-link to="/page-blog-detail" class="text-muted readmore">Read More <i class="mdi mdi-chevron-right"></i></router-link>
                                    </div>
                                </div>
                            </div>
                            <!--end col-->

                            <div class="col-md-6 order-1 order-md-2">
                                <img src="images/work/19.jpg" class="img-fluid" alt="">
                                <div class="overlay bg-dark"></div>
                                <div class="author">
                                    <small class="text-light user d-block"><i class="mdi mdi-account"></i> Calvin Carlo</small>
                                    <small class="text-light date"><i class="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                </div>
                            </div>
                            <!--end col-->
                        </div>
                        <!--end row-->
                    </div>
                    <!--end blog post-->
                </div>
                <!--end col-->

                <div class="col-lg-6 col-12 mb-4 pb-2">
                    <div class="card blog rounded border-0 shadow overflow-hidden">
                        <div class="row align-items-center no-gutters">
                            <div class="col-md-6">
                                <img src="images/work/13.jpg" class="img-fluid" alt="">
                                <div class="overlay bg-dark"></div>
                                <div class="author">
                                    <small class="text-light user d-block"><i class="mdi mdi-account"></i> Calvin Carlo</small>
                                    <small class="text-light date"><i class="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                </div>
                            </div>
                            <!--end col-->

                            <div class="col-md-6">
                                <div class="card-body content">
                                    <h5><a href="javascript:void(0)" class="card-title title text-dark">Design your apps in your own way</a></h5>
                                    <p class="text-muted mb-0">Due to its widespread use as filler text for layouts, non-readability</p>
                                    <div class="post-meta d-flex justify-content-between mt-3">
                                        <ul class="list-unstyled mb-0">
                                            <li class="list-inline-item mr-2 mb-0"><a href="javascript:void(0)" class="text-muted like"><i class="mdi mdi-heart-outline mr-1"></i>33</a></li>
                                            <li class="list-inline-item"><a href="javascript:void(0)" class="text-muted comments"><i class="mdi mdi-comment-outline mr-1"></i>08</a></li>
                                        </ul>
                                        <router-link to="/page-blog-detail" class="text-muted readmore">Read More <i class="mdi mdi-chevron-right"></i></router-link>
                                    </div>
                                </div>
                            </div>
                            <!--end col-->
                        </div>
                        <!--end row-->
                    </div>
                    <!--end blog post-->
                </div>
                <!--end col-->

                <!-- PAGINATION START -->
                <div class="col-12">
                    <ul class="pagination justify-content-center mb-0">
                        <li class="page-item"><a class="page-link" href="javascript:void(0)" aria-label="Previous">Prev</a></li>
                        <li class="page-item active"><a class="page-link" href="javascript:void(0)">1</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0)">2</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0)" aria-label="Next">Next</a></li>
                    </ul>
                </div>
                <!--end col-->
                <!-- PAGINATION END -->
            </div>
            <!--end row-->
        </div>
        <!--end container-->
    </section>
    <!--end section -->
    <!--Blog Lists End-->
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
