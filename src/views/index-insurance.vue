<script>
import {
    ArrowUpIcon,
    UserIcon,
    MailIcon,
    ArrowRightIcon,
    HelpCircleIcon
} from 'vue-feather-icons';
import {
    Carousel,
    Slide
} from 'vue-carousel';

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";
import Testimonial from "@/components/testimonial";

/**
 * Index-insurance component
 */
export default {
    data() {
        return {
             testimonialData: [
        {
          id: 1,
          profile: "images/client/01.jpg",
          message:
            "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.",
          name: "Thomas Israel",
          designation: "C.E.O",
        },
        {
          id: 2,
          profile: "images/client/02.jpg",
          message:
            "One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.",
          name: "Barbara McIntosh",
          designation: "M.D",
        },
        {
          id: 3,
          profile: "images/client/03.jpg",
          message:
            "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
          name: "Carl Oliver",
          designation: "P.A",
        },
        {
          id: 4,
          profile: "images/client/04.jpg",
          message:
            "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero.",
          name: "Christa Smith",
          designation: "Manager",
        },
        {
          id: 5,
          profile: "images/client/05.jpg",
          message:
            "There is now an abundance of readable dummy texts. These are usually used when a text is required.",
          name: "Dean Tolle",
          designation: "Developer",
        },
        {
          id: 6,
          profile: "images/client/05.jpg",
          message:
            "Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts.",
          name: "Jill Webb",
          designation: "Designer",
        },
      ],
        }
    },
    components: {
        Navbar,
        Switcher,
        Footer,
        ArrowUpIcon,
        Carousel,
        Slide,
        UserIcon,
        MailIcon,
        ArrowRightIcon,
        HelpCircleIcon,
        Testimonial
    }
}
</script>

<template>
<div>
    <Navbar :nav-light="true" />

    <!-- Hero Start -->
    <section class="bg-half-170 bg-primary d-table w-100" style="background: url('images/insurance/bg.png') center center;">
        <div class="container">
            <div class="row mt-5 justify-content-center">
                <div class="col-lg-12">
                    <div class="title-heading text-center">
                        <h1 class="heading title-dark text-white mb-3">Landrick Insurance</h1>
                        <p class="para-desc mx-auto text-white-50">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>

                        <div class="row mt-4 pt-2">
                            <div class="col-lg-2 col-md-4 col-6 mt-4 pt-2">
                                <div class="card explore-feature border-0 rounded text-center bg-white">
                                    <div class="card-body">
                                        <div class="icon rounded-circle shadow-lg d-inline-block">
                                            <img src="images/insurance/health.svg" class="avatar avatar-md-sm" alt="">
                                        </div>
                                        <div class="content mt-3">
                                            <h6 class="mb-0"><a href="javascript:void(0);" class="title text-dark">Health Insurance</a></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--end col-->
                            <div class="col-lg-2 col-md-4 col-6 mt-4 pt-2">
                                <div class="card explore-feature border-0 rounded text-center bg-white">
                                    <div class="card-body">
                                        <div class="icon rounded-circle shadow-lg d-inline-block">
                                            <img src="images/insurance/term-life.svg" class="avatar avatar-md-sm" alt="">
                                        </div>
                                        <div class="content mt-3">
                                            <h6 class="mb-0"><a href="javascript:void(0);" class="title text-dark">Term Life Insurance</a></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--end col-->
                            <div class="col-lg-2 col-md-4 col-6 mt-4 pt-2">
                                <div class="card explore-feature border-0 rounded text-center bg-white">
                                    <div class="card-body">
                                        <div class="icon rounded-circle shadow-lg d-inline-block">
                                            <img src="images/insurance/family-health.svg" class="avatar avatar-md-sm" alt="">
                                        </div>
                                        <div class="content mt-3">
                                            <h6 class="mb-0"><a href="javascript:void(0);" class="title text-dark">Family Health Insurance</a></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--end col-->
                            <div class="col-lg-2 col-md-4 col-6 mt-4 pt-2">
                                <div class="card explore-feature border-0 rounded text-center bg-white">
                                    <div class="card-body">
                                        <div class="icon rounded-circle shadow-lg d-inline-block">
                                            <img src="images/insurance/investment.svg" class="avatar avatar-md-sm" alt="">
                                        </div>
                                        <div class="content mt-3">
                                            <h6 class="mb-0"><a href="javascript:void(0);" class="title text-dark">Investment Plans</a></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--end col-->
                            <div class="col-lg-2 col-md-4 col-6 mt-4 pt-2">
                                <div class="card explore-feature border-0 rounded text-center bg-white">
                                    <div class="card-body">
                                        <div class="icon rounded-circle shadow-lg d-inline-block">
                                            <img src="images/insurance/car.svg" class="avatar avatar-md-sm" alt="">
                                        </div>
                                        <div class="content mt-3">
                                            <h6 class="mb-0"><a href="javascript:void(0);" class="title text-dark">4 Wheeler Insurance</a></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--end col-->
                            <div class="col-lg-2 col-md-4 col-6 mt-4 pt-2">
                                <div class="card explore-feature border-0 rounded text-center bg-white">
                                    <div class="card-body">
                                        <div class="icon rounded-circle shadow-lg d-inline-block">
                                            <img src="images/insurance/bike.svg" class="avatar avatar-md-sm" alt="">
                                        </div>
                                        <div class="content mt-3">
                                            <h6 class="mb-0"><a href="javascript:void(0);" class="title text-dark">2 Wheeler Insurance</a></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--end col-->
                        </div>
                        <!--end row-->
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
                <div class="col-lg-4 col-md-6 col-12">
                    <div class="card features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0">
                        <span class="h1 icon2 text-primary">
                            <i class="uil uil-briefcase"></i>
                        </span>
                        <div class="card-body p-0 content">
                            <h5>Our Vision</h5>
                            <p class="para text-muted mb-0">It is a long established fact that a reader will be of a page reader will be of at its layout.</p>
                        </div>
                    </div>
                </div>
                <!--end col-->

                <div class="col-lg-4 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div class="card features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0">
                        <span class="h1 icon2 text-primary">
                            <i class="uil uil-rocket"></i>
                        </span>
                        <div class="card-body p-0 content">
                            <h5>Our Mission</h5>
                            <p class="para text-muted mb-0">It is a long established fact that a reader will be of a page reader will be of at its layout.</p>
                        </div>
                    </div>
                </div>
                <!--end col-->

                <div class="col-lg-4 col-md-6 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                    <div class="card features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0">
                        <span class="h1 icon2 text-primary">
                            <i class="uil uil-crosshairs"></i>
                        </span>
                        <div class="card-body p-0 content">
                            <h5>Our Goal</h5>
                            <p class="para text-muted mb-0">It is a long established fact that a reader will be of a page reader will be of at its layout.</p>
                        </div>
                    </div>
                </div>
                <!--end col-->
            </div>
            <!--end row-->
        </div>
        <!--end container-->

        <div class="container mt-100 mt-60">
            <div class="row align-items-center">
                <div class="col-lg-5 col-md-6 mt-4 pt-2">
                    <img src="images/illustrator/services.svg" alt="">
                </div>
                <!--end col-->

                <div class="col-lg-7 col-md-6 mt-4 pt-2">
                    <div class="section-title ml-lg-5">
                        <h4 class="title mb-4">Health Insurance</h4>
                        <p class="text-muted">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                        <ul class="list-unstyled text-muted">
                            <li class="mb-0"><span class="text-primary h5 mr-2"><i class="uil uil-check-circle align-middle"></i></span>Digital Marketing Solutions for Tomorrow</li>
                            <li class="mb-0"><span class="text-primary h5 mr-2"><i class="uil uil-check-circle align-middle"></i></span>Our Talented & Experienced Marketing Agency</li>
                            <li class="mb-0"><span class="text-primary h5 mr-2"><i class="uil uil-check-circle align-middle"></i></span>Create your own skin to match your brand</li>
                        </ul>
                        <div class="mt-4">
                            <a href="javascript:void(0);" class="btn btn-primary">Read More <arrow-right-icon class="fea icon-sm"></arrow-right-icon></a>
                        </div>
                    </div>
                </div>
                <!--end col-->
            </div>
            <!--end row-->
        </div>
        <!--end container-->

        <div class="container mt-100 mt-60">
            <div class="row align-items-center">
                <div class="col-lg-5 col-md-6 mt-4 pt-2 order-1 order-md-2">
                    <img src="images/illustrator/Marketing_strategy_SVG.svg" alt="">
                </div>
                <!--end col-->

                <div class="col-lg-7 col-md-6 mt-4 pt-2 order-2 order-md-1">
                    <div class="section-title mr-lg-5">
                        <h4 class="title mb-4">Investment Plans</h4>
                        <p class="text-muted">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                        <ul class="list-unstyled text-muted">
                            <li class="mb-0"><span class="text-primary h5 mr-2"><i class="uil uil-check-circle align-middle"></i></span>Digital Marketing Solutions for Tomorrow</li>
                            <li class="mb-0"><span class="text-primary h5 mr-2"><i class="uil uil-check-circle align-middle"></i></span>Our Talented & Experienced Marketing Agency</li>
                            <li class="mb-0"><span class="text-primary h5 mr-2"><i class="uil uil-check-circle align-middle"></i></span>Create your own skin to match your brand</li>
                        </ul>
                        <div class="mt-4">
                            <a href="javascript:void(0);" class="btn btn-primary">Read More <arrow-right-icon class="fea icon-sm"></arrow-right-icon></a>
                        </div>
                    </div>
                </div>
                <!--end col-->
            </div>
            <!--end row-->
        </div>
        <!--end container-->

        <div class="container-fluid mt-100 mt-60">
            <div class="rounded py-5" style="background: url('images/insurance/cta.jpg') center center;">
                <div class="container py-md-5 py-3">
                    <div class="row">
                        <div class="col-lg-6 col-md-7 col-12 offset-lg-6 offset-md-5">
                            <div class="card border-0">
                                <div class="card-body p-md-5 p-4 bg-white rounded">
                                    <div class="section-title">
                                        <h4 class="title mb-4">Advantages</h4>
                                        <p class="text-muted para-desc mb-0">Start working with <span class="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-6 col-12 mt-4">
                                            <div class="media align-items-center">
                                                <div class="icon text-center rounded-circle h4 text-primary mr-2 mb-0">
                                                    <i class="uil uil-umbrella"></i>
                                                </div>
                                                <div class="media-body">
                                                    <h6 class="title text-dark mb-0">Protection</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <!--end col-->

                                        <div class="col-md-6 col-12 mt-4">
                                            <div class="media align-items-center">
                                                <div class="icon text-center rounded-circle h4 text-primary mr-2 mb-0">
                                                    <i class="uil uil-user"></i>
                                                </div>
                                                <div class="media-body">
                                                    <h6 class="title text-dark mb-0">Customers</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <!--end col-->

                                        <div class="col-md-6 col-12 mt-4">
                                            <div class="media align-items-center">
                                                <div class="icon text-center rounded-circle h4 text-primary mr-2 mb-0">
                                                    <i class="uil uil-money-bill"></i>
                                                </div>
                                                <div class="media-body">
                                                    <h6 class="title text-dark mb-0">Save on rates</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <!--end col-->

                                        <div class="col-md-6 col-12 mt-4">
                                            <div class="media align-items-center">
                                                <div class="icon text-center rounded-circle h4 text-primary mr-2 mb-0">
                                                    <i class="uil uil-bolt-alt"></i>
                                                </div>
                                                <div class="media-body">
                                                    <h6 class="title text-dark mb-0">Fast Process</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <!--end col-->
                                    </div>
                                    <!--end row-->

                                    <div class="mt-4">
                                        <a href="javascript:void(0);" class="btn btn-primary">Protect your life <arrow-right-icon class="fea icon-sm"></arrow-right-icon></a>
                                    </div>
                                </div>
                                <!--end div-->
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
        <!--end container fluid-->

        <div class="container mt-100 mt-60">
            <div class="row justify-content-center">
                <div class="col-12 text-center">
                    <div class="section-title mb-4 pb-2">
                        <h4 class="title mb-4">Other Insurance Plans</h4>
                        <p class="text-muted para-desc mb-0 mx-auto">Start working with <span class="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>
                <!--end col-->
            </div>
            <!--end row-->

            <div class="row">
                <a href="javascript:void(0);" class="col-lg-4 col-md-6 mt-4 pt-2">
                    <div class="media key-feature align-items-center p-3 rounded shadow">
                        <div class="icon text-center rounded-circle h4 text-primary mr-3 mb-0">
                            <i class="uil uil-home-alt"></i>
                        </div>
                        <div class="media-body">
                            <h4 class="title text-dark mb-0">Home Insurance</h4>
                        </div>
                    </div>
                </a>
                <!--end col-->

                <div class="col-lg-4 col-md-6 mt-4 pt-2">
                    <a href="javascript:void(0);" class="media key-feature align-items-center p-3 rounded shadow">
                        <div class="icon text-center rounded-circle h4 text-primary mr-3 mb-0">
                            <i class="uil uil-user-arrows"></i>
                        </div>
                        <div class="media-body">
                            <h4 class="title text-dark mb-0">Group Mediclaim</h4>
                        </div>
                    </a>
                </div>
                <!--end col-->

                <div class="col-lg-4 col-md-6 mt-4 pt-2">
                    <a href="javascript:void(0);" class="media key-feature align-items-center p-3 rounded shadow">
                        <div class="icon text-center rounded-circle h4 text-primary mr-3 mb-0">
                            <i class="uil uil-user-circle"></i>
                        </div>
                        <div class="media-body">
                            <h4 class="title text-dark mb-0">Retirement Plans</h4>
                        </div>
                    </a>
                </div>
                <!--end col-->

                <div class="col-lg-4 col-md-6 mt-4 pt-2">
                    <a href="javascript:void(0);" class="media key-feature align-items-center p-3 rounded shadow">
                        <div class="icon text-center rounded-circle h4 text-primary mr-3 mb-0">
                            <i class="uil uil-car"></i>
                        </div>
                        <div class="media-body">
                            <h4 class="title text-dark mb-0">Travel Insurance</h4>
                        </div>
                    </a>
                </div>
                <!--end col-->

                <div class="col-lg-4 col-md-6 mt-4 pt-2">
                    <a href="javascript:void(0);" class="media key-feature align-items-center p-3 rounded shadow">
                        <div class="icon text-center rounded-circle h4 text-primary mr-3 mb-0">
                            <i class="uil uil-truck"></i>
                        </div>
                        <div class="media-body">
                            <h4 class="title text-dark mb-0">Taxi Insurance</h4>
                        </div>
                    </a>
                </div>
                <!--end col-->

                <div class="col-lg-4 col-md-6 mt-4 pt-2">
                    <a href="javascript:void(0);" class="media key-feature align-items-center p-3 rounded shadow">
                        <div class="icon text-center rounded-circle h4 text-primary mr-3 mb-0">
                            <i class="uil uil-chart-pie-alt"></i>
                        </div>
                        <div class="media-body">
                            <h4 class="title text-dark mb-0">Corporate Insurance</h4>
                        </div>
                    </a>
                </div>
                <!--end col-->

                <div class="col-lg-4 col-md-6 mt-4 pt-2">
                    <a href="javascript:void(0);" class="media key-feature align-items-center p-3 rounded shadow">
                        <div class="icon text-center rounded-circle h4 text-primary mr-3 mb-0">
                            <i class="uil uil-heartbeat"></i>
                        </div>
                        <div class="media-body">
                            <h4 class="title text-dark mb-0">Cancer Insurance</h4>
                        </div>
                    </a>
                </div>
                <!--end col-->

                <div class="col-lg-4 col-md-6 mt-4 pt-2">
                    <a href="javascript:void(0);" class="media key-feature align-items-center p-3 rounded shadow">
                        <div class="icon text-center rounded-circle h4 text-primary mr-3 mb-0">
                            <i class="uil uil-chart-line"></i>
                        </div>
                        <div class="media-body">
                            <h4 class="title text-dark mb-0">Tex Saving Investment</h4>
                        </div>
                    </a>
                </div>
                <!--end col-->

                <div class="col-lg-4 col-md-6 mt-4 pt-2">
                    <a href="javascript:void(0);" class="media key-feature align-items-center p-3 rounded shadow">
                        <div class="icon text-center rounded-circle h4 text-primary mr-3 mb-0">
                            <i class="uil uil-book-reader"></i>
                        </div>
                        <div class="media-body">
                            <h4 class="title text-dark mb-0">Child Saving Plans</h4>
                        </div>
                    </a>
                </div>
                <!--end col-->

                <div class="col-12 mt-4 pt-2 text-center">
                    <a href="javascript:void(0);" class="btn btn-primary">See More <i class="mdi mdi-arrow-right"></i></a>
                </div>
                <!--end col-->
            </div>
            <!--end row-->
        </div>
        <!--end container-->

        <div class="container mt-100 mt-60">
            <div class="row justify-content-center">
                <div class="col-12 text-center">
                    <div class="section-title mb-4 pb-2">
                        <h4 class="title mb-4">Our Customers</h4>
                        <p class="text-muted para-desc mb-0 mx-auto">Start working with <span class="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>
                <!--end col-->
            </div>
            <!--end row-->

            <div class="row justify-content-center">
                <div class="col-lg-12 mt-4">
                     <Testimonial :testimonialData="testimonialData" />
                </div>
                <!--end col-->
            </div>
            <!--end row-->
        </div>
        <!--end container-->

        <div class="container mt-100 mt-60">
            <div class="row align-items-center">
                <div class="col-lg-7 col-md-6 col-12">
                    <div class="section-title">
                        <h4 class="title mb-4">We're here to help you</h4>
                        <p class="text-muted para-desc">Start working with <span class="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        <ul class="list-unstyled text-muted mt-4">
                            <li class="mb-0"><span class="text-primary h5 mr-2"><i class="uil uil-check-circle align-middle"></i></span>Digital Marketing Solutions for Tomorrow</li>
                            <li class="mb-0"><span class="text-primary h5 mr-2"><i class="uil uil-check-circle align-middle"></i></span>Our Talented & Experienced Marketing Agency</li>
                            <li class="mb-0"><span class="text-primary h5 mr-2"><i class="uil uil-check-circle align-middle"></i></span>Create your own skin to match your brand</li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-5 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div class="card rounded border-0 shadow-lg ml-lg-5">
                        <div class="card-body">
                            <div class="text-center">
                                <img src="images/client/01.jpg" class="avatar avatar-md-md rounded-circle shadow" alt="">
                                <div class="section-title">
                                    <h6 class="my-3">Calvin Carlo</h6>
                                    <p class="text-muted para-desc mx-auto mb-0">Start working with <span class="text-primary font-weight-bold">Landrick</span> that can provide everything you need.</p>
                                </div>
                            </div>

                            <div class="content mt-4 pt-2">
                                <form>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group ">
                                                <label>Name : <span class="text-danger">*</span></label>
                                                <div class="position-relative">
                                                <user-icon class="fea icon-sm icons"></user-icon>
                                                <input type="text" class="form-control pl-5" placeholder="Name" name="name" required="">
                                                </div>
                                            </div>
                                        </div>
                                        <!--end col-->

                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <label>Email : <span class="text-danger">*</span></label>
                                                       <div class="position-relative">
                                                <mail-icon class="fea icon-sm icons"></mail-icon>
                                                <input type="email" class="form-control pl-5" placeholder="Email" name="email" required="">
                                                       </div>
                                            </div>
                                        </div>
                                        <!--end col-->

                                        <div class="col-lg-12 mt-2">
                                            <button class="btn btn-soft-primary">Request call <arrow-right-icon class="fea icon-sm"></arrow-right-icon></button>
                                        </div>
                                        <!--end col-->
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--end container-->

        <div class="container mt-100 mt-60">
            <div class="row">
                <div class="col-md-6 col-12">
                    <div class="media">
                        <help-circle-icon class="fea icon-ex-md text-primary mr-2 mt-1"></help-circle-icon>
                        <div class="media-body">
                            <h5 class="mt-0">How our <span class="text-primary">Landrick</span> work ?</h5>
                            <p class="answer text-muted mb-0">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.</p>
                        </div>
                    </div>
                </div>
                <!--end col-->

                <div class="col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div class="media">
                        <help-circle-icon class="fea icon-ex-md text-primary mr-2 mt-1"></help-circle-icon>
                        <div class="media-body">
                            <h5 class="mt-0"> What is the main process open account ?</h5>
                            <p class="answer text-muted mb-0">If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact</p>
                        </div>
                    </div>
                </div>
                <!--end col-->

                <div class="col-md-6 col-12 mt-4 pt-2">
                    <div class="media">
                        <help-circle-icon class="fea icon-ex-md text-primary mr-2 mt-1"></help-circle-icon>
                        <div class="media-body">
                            <h5 class="mt-0"> How to make unlimited data entry ?</h5>
                            <p class="answer text-muted mb-0">Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.</p>
                        </div>
                    </div>
                </div>
                <!--end col-->

                <div class="col-md-6 col-12 mt-4 pt-2">
                    <div class="media">
                        <help-circle-icon class="fea icon-ex-md text-primary mr-2 mt-1"></help-circle-icon>
                        <div class="media-body">
                            <h5 class="mt-0"> Is <span class="text-primary">Landrick</span> safer to use with my account ?</h5>
                            <p class="answer text-muted mb-0">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin.</p>
                        </div>
                    </div>
                </div>
                <!--end col-->
            </div>
            <!--end row-->

            <div class="row mt-5 pt-md-4 justify-content-center">
                <div class="col-12 text-center">
                    <div class="section-title">
                        <h4 class="title mb-4">Have Question ? Get in touch!</h4>
                        <p class="text-muted para-desc mx-auto">Start working with <span class="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        <router-link to="/page-contact-two" class="btn btn-primary mt-4"><i class="mdi mdi-phone"></i> Contact us</router-link>
                    </div>
                </div>
                <!--end col-->
            </div>
            <!--end row-->
        </div>
        <!--end container-->
    </section>
    <!--end section-->
    <!-- End -->
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
