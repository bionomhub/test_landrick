<script>
import {
    ArrowUpIcon,
    ArrowRightIcon
} from 'vue-feather-icons';
import {
    Swiper,
    SwiperSlide
} from 'vue-awesome-swiper'

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";

/**
 * Index-blog component
 */
export default {
    data() {
        return {}
    },
    components: {
        Navbar,
        Switcher,
        Footer,
        ArrowUpIcon,
        Swiper,
        SwiperSlide,
        ArrowRightIcon
    }
}
</script>

<template>
<div>
    <Navbar />

    <!-- Hero Start -->
    <div class="container-fluid px-0 px-md-3 mt-5 pt-md-4">
        <swiper ref="mySwiper" class="single-item">
            <swiper-slide>
                <div class="bg-half-170 rounded-md" style="background: url('images/blog/bg1.jpg') center center;">
                    <div class="bg-overlay rounded-md"></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-12">
                                <div class="title-heading text-center">
                                    <h2 class="text-white title-dark mb-3">Weekend Travel</h2>
                                    <ul class="list-unstyled">
                                        <li class="list-inline-item small user text-white-50 mr-2"><i class="mdi mdi-account text-white title-dark"></i> Calvin Carlo</li>
                                        <li class="list-inline-item small date text-white-50"><i class="mdi mdi-calendar-check text-white title-dark"></i> 13th August, 2019</li>
                                    </ul>
                                    <p class="para-desc mx-auto text-white-50 mb-0">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                    <div class="mt-4">
                                        <a href="javascript:void(0)" class="btn btn-primary">Read More </a>
                                    </div>
                                </div>
                            </div>
                            <!--end col-->
                        </div>
                        <!--end row-->
                    </div>
                </div>
                <!--end slide-->
            </swiper-slide>
            <swiper-slide>
                <div class="bg-half-170 rounded-md" style="background: url('images/blog/bg2.jpg') center center;">
                    <div class="bg-overlay rounded-md"></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-12">
                                <div class="title-heading text-center">
                                    <h1 class="text-white title-dark mb-3">Business Meeting</h1>
                                    <ul class="list-unstyled">
                                        <li class="list-inline-item small user text-white-50 mr-2"><i class="mdi mdi-account text-white title-dark"></i> Calvin Carlo</li>
                                        <li class="list-inline-item small date text-white-50"><i class="mdi mdi-calendar-check text-white title-dark"></i> 13th August, 2019</li>
                                    </ul>
                                    <p class="para-desc mx-auto text-white-50 mb-0">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                    <div class="mt-4">
                                        <a href="javascript:void(0)" class="btn btn-primary">Read More </a>
                                    </div>
                                </div>
                            </div>
                            <!--end col-->
                        </div>
                        <!--end row-->
                    </div>
                </div>
                <!--end slide-->
            </swiper-slide>
            <swiper-slide>
                <div class="bg-half-170 rounded-md" style="background: url('images/blog/bg3.jpg') center center;">
                    <div class="bg-overlay rounded-md"></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-12">
                                <div class="title-heading text-center">
                                    <h1 class="text-white title-dark mb-3">Delicious & Organic</h1>
                                    <ul class="list-unstyled">
                                        <li class="list-inline-item small user text-white-50 mr-2"><i class="mdi mdi-account text-white title-dark"></i> Calvin Carlo</li>
                                        <li class="list-inline-item small date text-white-50"><i class="mdi mdi-calendar-check text-white title-dark"></i> 13th August, 2019</li>
                                    </ul>
                                    <p class="para-desc mx-auto text-white-50 mb-0">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                    <div class="mt-4">
                                        <a href="javascript:void(0)" class="btn btn-primary">Read More </a>
                                    </div>
                                </div>
                            </div>
                            <!--end col-->
                        </div>
                        <!--end row-->
                    </div>
                </div>
                <!--end slide-->
            </swiper-slide>
        </swiper>

    </div>
    <!--end container-->
    <!-- Hero End -->

    <section class="section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="features-absolute blog-search">
                        <div class="row justify-content-center">
                            <div class="col-md-10">
                                <div class="subcribe-form">
                                    <form style="max-width: 800px;">
                                        <div class="form-group">
                                            <input type="text" id="course" name="name" class="rounded-pill shadow-md bg-white" placeholder="Search keywords...">
                                            <button type="submit" class="btn btn-pills btn-primary">Search</button>
                                        </div>
                                    </form>
                                    <!--end form-->
                                </div>
                            </div>
                            <!--end col-->
                        </div>
                        <!--end row-->
                    </div>
                    <!--end div-->
                </div>
                <!--end col-->
            </div>
            <!--end row-->
        </div>
        <!--end container-->

        <div class="container mt-4 mt-lg-0">
            <div class="row align-items-center mb-4 pb-4">
                <div class="col-md-8">
                    <div class="section-title text-center text-md-left">
                        <h4 class="mb-4">Popular post</h4>
                        <p class="text-muted mb-0 para-desc">Start working with <span class="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>
                <!--end col-->

                <div class="col-md-4 mt-4 mt-sm-0">
                    <div class="text-center text-md-right">
                        <a href="javascript:void(0)" class="btn btn-soft-primary">See More <arrow-right-icon class="fea icon-sm"></arrow-right-icon></a>
                    </div>
                </div>
                <!--end col-->
            </div>
            <!--end row-->

            <div class="row">
                <div class="col-lg-4 col-md-6 mt-4 pt-2">
                    <div class="card blog rounded border-0 shadow overflow-hidden">
                        <div class="position-relative">
                            <img src="images/blog/01.jpg" class="card-img-top" alt="...">
                            <div class="overlay rounded-top bg-dark"></div>
                        </div>
                        <div class="card-body content">
                            <h5><a href="javascript:void(0)" class="card-title title text-dark">Design your apps in your own way</a></h5>
                            <div class="post-meta d-flex justify-content-between mt-3">
                                <ul class="list-unstyled mb-0">
                                    <li class="list-inline-item mr-2 mb-0"><a href="javascript:void(0)" class="text-muted like"><i class="mdi mdi-heart-outline mr-1"></i>33</a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="text-muted comments"><i class="mdi mdi-comment-outline mr-1"></i>08</a></li>
                                </ul>
                                <router-link to="/page-blog-detail" class="text-muted readmore">Read More <i class="mdi mdi-chevron-right"></i></router-link>
                            </div>
                        </div>
                        <div class="author">
                            <small class="text-light user d-block"><i class="mdi mdi-account"></i> Calvin Carlo</small>
                            <small class="text-light date"><i class="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                        </div>
                    </div>
                </div>
                <!--end col-->

                <div class="col-lg-4 col-md-6 mt-4 pt-2">
                    <div class="card blog rounded border-0 shadow overflow-hidden">
                        <div class="position-relative">
                            <img src="images/blog/02.jpg" class="card-img-top" alt="...">
                            <div class="overlay rounded-top bg-dark"></div>
                        </div>
                        <div class="card-body content">
                            <h5><a href="javascript:void(0)" class="card-title title text-dark">How apps is changing the IT world</a></h5>
                            <div class="post-meta d-flex justify-content-between mt-3">
                                <ul class="list-unstyled mb-0">
                                    <li class="list-inline-item mr-2 mb-0"><a href="javascript:void(0)" class="text-muted like"><i class="mdi mdi-heart-outline mr-1"></i>33</a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="text-muted comments"><i class="mdi mdi-comment-outline mr-1"></i>08</a></li>
                                </ul>
                                <router-link to="/page-blog-detail" class="text-muted readmore">Read More <i class="mdi mdi-chevron-right"></i></router-link>
                            </div>
                        </div>
                        <div class="author">
                            <small class="text-light user d-block"><i class="mdi mdi-account"></i> Calvin Carlo</small>
                            <small class="text-light date"><i class="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                        </div>
                    </div>
                </div>
                <!--end col-->

                <div class="col-lg-4 col-md-6 mt-4 pt-2">
                    <div class="card blog rounded border-0 shadow overflow-hidden">
                        <div class="position-relative">
                            <img src="images/blog/03.jpg" class="card-img-top" alt="...">
                            <div class="overlay rounded-top bg-dark"></div>
                        </div>
                        <div class="card-body content">
                            <h5><a href="javascript:void(0)" class="card-title title text-dark">Smartest Applications for Business</a></h5>
                            <div class="post-meta d-flex justify-content-between mt-3">
                                <ul class="list-unstyled mb-0">
                                    <li class="list-inline-item mr-2 mb-0"><a href="javascript:void(0)" class="text-muted like"><i class="mdi mdi-heart-outline mr-1"></i>33</a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="text-muted comments"><i class="mdi mdi-comment-outline mr-1"></i>08</a></li>
                                </ul>
                                <router-link to="/page-blog-detail" class="text-muted readmore">Read More <i class="mdi mdi-chevron-right"></i></router-link>
                            </div>
                        </div>
                        <div class="author">
                            <small class="text-light user d-block"><i class="mdi mdi-account"></i> Calvin Carlo</small>
                            <small class="text-light date"><i class="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                        </div>
                    </div>
                </div>
                <!--end col-->
            </div>
            <!--end row-->
        </div>
        <!--end container-->

        <div class="container mt-100 mt-60">
            <div class="row align-items-center mb-4 pb-4">
                <div class="col-md-8">
                    <div class="section-title text-center text-md-left">
                        <h4 class="mb-4">Recent Post</h4>
                        <p class="text-muted mb-0 para-desc">Start working with <span class="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>
                <!--end col-->

                <div class="col-md-4 mt-4 mt-sm-0">
                    <div class="text-center text-md-right">
                        <a href="javascript:void(0)" class="btn btn-soft-primary">See More <arrow-right-icon class="fea icon-sm"></arrow-right-icon></a>
                    </div>
                </div>
                <!--end col-->
            </div>
            <!--end row-->

            <div class="row">
                <div class="col-lg-4 col-md-6 mt-4 pt-2">
                    <div class="card blog rounded border-0 shadow overflow-hidden">
                        <div class="position-relative">
                            <img src="images/blog/04.jpg" class="card-img-top" alt="...">
                            <div class="overlay rounded-top bg-dark"></div>
                        </div>
                        <div class="card-body content">
                            <h5><a href="javascript:void(0)" class="card-title title text-dark">How apps is changing the IT world</a></h5>
                            <div class="post-meta d-flex justify-content-between mt-3">
                                <ul class="list-unstyled mb-0">
                                    <li class="list-inline-item mr-2 mb-0"><a href="javascript:void(0)" class="text-muted like"><i class="mdi mdi-heart-outline mr-1"></i>33</a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="text-muted comments"><i class="mdi mdi-comment-outline mr-1"></i>08</a></li>
                                </ul>
                                <router-link to="/page-blog-detail" class="text-muted readmore">Read More <i class="mdi mdi-chevron-right"></i></router-link>
                            </div>
                        </div>
                        <div class="author">
                            <small class="text-light user d-block"><i class="mdi mdi-account"></i> Calvin Carlo</small>
                            <small class="text-light date"><i class="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                        </div>
                    </div>
                </div>
                <!--end col-->

                <div class="col-lg-4 col-md-6 mt-4 pt-2">
                    <div class="card blog rounded border-0 shadow overflow-hidden">
                        <div class="position-relative">
                            <img src="images/blog/05.jpg" class="card-img-top" alt="...">
                            <div class="overlay rounded-top bg-dark"></div>
                        </div>
                        <div class="card-body content">
                            <h5><a href="javascript:void(0)" class="card-title title text-dark">Design your apps in your own way</a></h5>
                            <div class="post-meta d-flex justify-content-between mt-3">
                                <ul class="list-unstyled mb-0">
                                    <li class="list-inline-item mr-2 mb-0"><a href="javascript:void(0)" class="text-muted like"><i class="mdi mdi-heart-outline mr-1"></i>33</a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="text-muted comments"><i class="mdi mdi-comment-outline mr-1"></i>08</a></li>
                                </ul>
                                <router-link to="/page-blog-detail" class="text-muted readmore">Read More <i class="mdi mdi-chevron-right"></i></router-link>
                            </div>
                        </div>
                        <div class="author">
                            <small class="text-light user d-block"><i class="mdi mdi-account"></i> Calvin Carlo</small>
                            <small class="text-light date"><i class="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                        </div>
                    </div>
                </div>
                <!--end col-->

                <div class="col-lg-4 col-md-6 mt-4 pt-2">
                    <div class="card blog rounded border-0 shadow overflow-hidden">
                        <div class="position-relative">
                            <img src="images/blog/06.jpg" class="card-img-top" alt="...">
                            <div class="overlay rounded-top bg-dark"></div>
                        </div>
                        <div class="card-body content">
                            <h5><a href="javascript:void(0)" class="card-title title text-dark">Smartest Applications for Business</a></h5>
                            <div class="post-meta d-flex justify-content-between mt-3">
                                <ul class="list-unstyled mb-0">
                                    <li class="list-inline-item mr-2 mb-0"><a href="javascript:void(0)" class="text-muted like"><i class="mdi mdi-heart-outline mr-1"></i>33</a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="text-muted comments"><i class="mdi mdi-comment-outline mr-1"></i>08</a></li>
                                </ul>
                                <router-link to="/page-blog-detail" class="text-muted readmore">Read More <i class="mdi mdi-chevron-right"></i></router-link>
                            </div>
                        </div>
                        <div class="author">
                            <small class="text-light user d-block"><i class="mdi mdi-account"></i> Calvin Carlo</small>
                            <small class="text-light date"><i class="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                        </div>
                    </div>
                </div>
                <!--end col-->
            </div>
            <!--end row-->
        </div>
        <!--end container-->

        <!-- Cta start -->
        <div class="container-fluid mt-100 mt-60">
            <div class="rounded-md shadow-md py-5 position-relative" style="background: url('images/3.jpg') center center;">
                <div class="bg-overlay rounded-md"></div>
                <div class="container py-5">
                    <div class="row justify-content-center">
                        <div class="col-12">
                            <div class="section-title text-center">
                                <h2 class="font-weight-bold text-white title-dark mb-4 pb-2">People are podcasting <br> all over the world</h2>
                                <a href="javascript:void(0)" class="btn btn-primary">Read More <arrow-right-icon class="fea icon-sm"></arrow-right-icon></a>
                            </div>
                        </div>
                        <!--end col-->
                    </div>
                    <!--end row-->
                </div>
                <!--end container-->
            </div>
            <!--end slide-->
        </div>
        <!--end container-->
        <!-- Cta End -->

        <div class="container mt-100 mt-60">
            <div class="row align-items-center mb-4 pb-4">
                <div class="col-md-8">
                    <div class="section-title text-center text-md-left">
                        <h4 class="mb-4">All News or Blog Post</h4>
                        <p class="text-muted mb-0 para-desc">Start working with <span class="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>
                <!--end col-->
            </div>
            <!--end row-->

            <div class="row">
                <div class="col-lg-4 col-md-6 mt-4 pt-2">
                    <div class="card blog rounded border-0 shadow overflow-hidden">
                        <div class="position-relative">
                            <img src="images/blog/01.jpg" class="card-img-top" alt="...">
                            <div class="overlay rounded-top bg-dark"></div>
                        </div>
                        <div class="card-body content">
                            <h5><a href="javascript:void(0)" class="card-title title text-dark">Design your apps in your own way</a></h5>
                            <div class="post-meta d-flex justify-content-between mt-3">
                                <ul class="list-unstyled mb-0">
                                    <li class="list-inline-item mr-2 mb-0"><a href="javascript:void(0)" class="text-muted like"><i class="mdi mdi-heart-outline mr-1"></i>33</a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="text-muted comments"><i class="mdi mdi-comment-outline mr-1"></i>08</a></li>
                                </ul>
                                <router-link to="/page-blog-detail" class="text-muted readmore">Read More <i class="mdi mdi-chevron-right"></i></router-link>
                            </div>
                        </div>
                        <div class="author">
                            <small class="text-light user d-block"><i class="mdi mdi-account"></i> Calvin Carlo</small>
                            <small class="text-light date"><i class="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                        </div>
                    </div>
                </div>
                <!--end col-->

                <div class="col-lg-4 col-md-6 mt-4 pt-2">
                    <div class="card blog rounded border-0 shadow overflow-hidden">
                        <div class="position-relative">
                            <img src="images/blog/02.jpg" class="card-img-top" alt="...">
                            <div class="overlay rounded-top bg-dark"></div>
                        </div>
                        <div class="card-body content">
                            <h5><a href="javascript:void(0)" class="card-title title text-dark">How apps is changing the IT world</a></h5>
                            <div class="post-meta d-flex justify-content-between mt-3">
                                <ul class="list-unstyled mb-0">
                                    <li class="list-inline-item mr-2 mb-0"><a href="javascript:void(0)" class="text-muted like"><i class="mdi mdi-heart-outline mr-1"></i>33</a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="text-muted comments"><i class="mdi mdi-comment-outline mr-1"></i>08</a></li>
                                </ul>
                                <router-link to="/page-blog-detail" class="text-muted readmore">Read More <i class="mdi mdi-chevron-right"></i></router-link>
                            </div>
                        </div>
                        <div class="author">
                            <small class="text-light user d-block"><i class="mdi mdi-account"></i> Calvin Carlo</small>
                            <small class="text-light date"><i class="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                        </div>
                    </div>
                </div>
                <!--end col-->

                <div class="col-lg-4 col-md-6 mt-4 pt-2">
                    <div class="card blog rounded border-0 shadow overflow-hidden">
                        <div class="position-relative">
                            <img src="images/blog/03.jpg" class="card-img-top" alt="...">
                            <div class="overlay rounded-top bg-dark"></div>
                        </div>
                        <div class="card-body content">
                            <h5><a href="javascript:void(0)" class="card-title title text-dark">Smartest Applications for Business</a></h5>
                            <div class="post-meta d-flex justify-content-between mt-3">
                                <ul class="list-unstyled mb-0">
                                    <li class="list-inline-item mr-2 mb-0"><a href="javascript:void(0)" class="text-muted like"><i class="mdi mdi-heart-outline mr-1"></i>33</a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="text-muted comments"><i class="mdi mdi-comment-outline mr-1"></i>08</a></li>
                                </ul>
                                <router-link to="/page-blog-detail" class="text-muted readmore">Read More <i class="mdi mdi-chevron-right"></i></router-link>
                            </div>
                        </div>
                        <div class="author">
                            <small class="text-light user d-block"><i class="mdi mdi-account"></i> Calvin Carlo</small>
                            <small class="text-light date"><i class="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                        </div>
                    </div>
                </div>
                <!--end col-->

                <div class="col-lg-4 col-md-6 mt-4 pt-2">
                    <div class="card blog rounded border-0 shadow overflow-hidden">
                        <div class="position-relative">
                            <img src="images/blog/04.jpg" class="card-img-top" alt="...">
                            <div class="overlay rounded-top bg-dark"></div>
                        </div>
                        <div class="card-body content">
                            <h5><a href="javascript:void(0)" class="card-title title text-dark">How apps is changing the IT world</a></h5>
                            <div class="post-meta d-flex justify-content-between mt-3">
                                <ul class="list-unstyled mb-0">
                                    <li class="list-inline-item mr-2 mb-0"><a href="javascript:void(0)" class="text-muted like"><i class="mdi mdi-heart-outline mr-1"></i>33</a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="text-muted comments"><i class="mdi mdi-comment-outline mr-1"></i>08</a></li>
                                </ul>
                                <router-link to="/page-blog-detail" class="text-muted readmore">Read More <i class="mdi mdi-chevron-right"></i></router-link>
                            </div>
                        </div>
                        <div class="author">
                            <small class="text-light user d-block"><i class="mdi mdi-account"></i> Calvin Carlo</small>
                            <small class="text-light date"><i class="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                        </div>
                    </div>
                </div>
                <!--end col-->

                <div class="col-lg-4 col-md-6 mt-4 pt-2">
                    <div class="card blog rounded border-0 shadow overflow-hidden">
                        <div class="position-relative">
                            <img src="images/blog/05.jpg" class="card-img-top" alt="...">
                            <div class="overlay rounded-top bg-dark"></div>
                        </div>
                        <div class="card-body content">
                            <h5><a href="javascript:void(0)" class="card-title title text-dark">Design your apps in your own way</a></h5>
                            <div class="post-meta d-flex justify-content-between mt-3">
                                <ul class="list-unstyled mb-0">
                                    <li class="list-inline-item mr-2 mb-0"><a href="javascript:void(0)" class="text-muted like"><i class="mdi mdi-heart-outline mr-1"></i>33</a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="text-muted comments"><i class="mdi mdi-comment-outline mr-1"></i>08</a></li>
                                </ul>
                                <router-link to="/page-blog-detail" class="text-muted readmore">Read More <i class="mdi mdi-chevron-right"></i></router-link>
                            </div>
                        </div>
                        <div class="author">
                            <small class="text-light user d-block"><i class="mdi mdi-account"></i> Calvin Carlo</small>
                            <small class="text-light date"><i class="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                        </div>
                    </div>
                </div>
                <!--end col-->

                <div class="col-lg-4 col-md-6 mt-4 pt-2">
                    <div class="card blog rounded border-0 shadow overflow-hidden">
                        <div class="position-relative">
                            <img src="images/blog/06.jpg" class="card-img-top" alt="...">
                            <div class="overlay rounded-top bg-dark"></div>
                        </div>
                        <div class="card-body content">
                            <h5><a href="javascript:void(0)" class="card-title title text-dark">Smartest Applications for Business</a></h5>
                            <div class="post-meta d-flex justify-content-between mt-3">
                                <ul class="list-unstyled mb-0">
                                    <li class="list-inline-item mr-2 mb-0"><a href="javascript:void(0)" class="text-muted like"><i class="mdi mdi-heart-outline mr-1"></i>33</a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="text-muted comments"><i class="mdi mdi-comment-outline mr-1"></i>08</a></li>
                                </ul>
                                <router-link to="/page-blog-detail" class="text-muted readmore">Read More <i class="mdi mdi-chevron-right"></i></router-link>
                            </div>
                        </div>
                        <div class="author">
                            <small class="text-light user d-block"><i class="mdi mdi-account"></i> Calvin Carlo</small>
                            <small class="text-light date"><i class="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                        </div>
                    </div>
                </div>
                <!--end col-->

                <div class="col-12 mt-4 pt-2">
                    <div class="text-center">
                        <a href="javascript:void(0)" class="btn btn-primary">See More <arrow-right-icon class="fea icon-sm"></arrow-right-icon></a>
                    </div>
                </div>
                <!--end col-->
            </div>
            <!--end row-->
        </div>
        <!--end container-->
    </section>
    <!--end section-->
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
