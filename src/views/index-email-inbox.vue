<script>
import {
  ArrowUpIcon,
  ChevronRightIcon,
  SmartphoneIcon,
  VideoIcon
} from "vue-feather-icons";
import { Carousel, Slide } from "vue-carousel";

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";
import Testimonial from "@/components/testimonial";
import Pricing from "@/components/pricing";

/**
 * Index-email-inbox component
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
      features: [
        {
          icon: "uil uil-comment-verify",
          title: "Instant Chat",
          text:
            "The most well-known dummy text is the, which is said to have originated in the 16th century.",
        },
        {
          icon: "uil uil-image",
          title: "Media Messages",
          text:
            "The most well-known dummy text is the, which is said to have originated in the 16th century.",
        },
        {
          icon: "uil uil-video",
          title: "Video Messages",
          text:
            "The most well-known dummy text is the, which is said to have originated in the 16th century.",
        },
        {
          icon: "uil uil-database-alt",
          title: "Dedicated Server",
          text:
            "The most well-known dummy text is the, which is said to have originated in the 16th century.",
        },
        {
          icon: "uil uil-users-alt",
          title: "Team Collaboration",
          text:
            "The most well-known dummy text is the, which is said to have originated in the 16th century.",
        },
        {
          icon: "uil uil-apps",
          title: "Responsive App",
          text:
            "The most well-known dummy text is the, which is said to have originated in the 16th century.",
        },
      ],
    };
  },
  components: {
    Navbar,
    Switcher,
    Footer,
    Testimonial,
    Pricing,
    Carousel,
    Slide,
    VideoIcon,
    ArrowUpIcon,
    ChevronRightIcon,
    SmartphoneIcon,
  },
};
</script>

<template>
  <div>
    <Navbar />

    <!-- Hero Start -->
    <section
      class="bg-home d-flex align-items-center"
      style="height: auto"
      id="home"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12 text-center mt-0 mt-md-5 pt-0 pt-md-5">
            <div class="title-heading margin-top-100">
              <h1 class="heading font-weight-bold mb-3">
                We Build A Design <br />
                For Email Inbox
              </h1>
              <p class="para-desc mx-auto text-muted">
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered bootstrap4 html page.
              </p>
              <div class="mt-4 pt-2">
                <a href="#about" class="btn btn-primary"
                  >Start Free Trial <i class="mdi mdi-chevron-right"></i
                ></a>
              </div>
            </div>

            <div class="row justify-content-center">
              <div class="col-lg-10">
                <div class="home-dashboard">
                  <img
                    src="images/email/home.png"
                    alt=""
                    class="img-fluid rounded-md shadow-lg"
                    style="z-index: -1"
                  />
                </div>
              </div>
            </div>
            <!--end row-->
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- Hero End -->

    <!-- Partners start -->
    <section class="section py-4 bg-light">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-2 col-md-2 col-6 text-center py-4">
            <img
              src="images/client/amazon.svg"
              class="avatar avatar-ex-sm"
              alt=""
            />
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center py-4">
            <img
              src="images/client/google.svg"
              class="avatar avatar-ex-sm"
              alt=""
            />
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center py-4">
            <img
              src="images/client/lenovo.svg"
              class="avatar avatar-ex-sm"
              alt=""
            />
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center py-4">
            <img
              src="images/client/paypal.svg"
              class="avatar avatar-ex-sm"
              alt=""
            />
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center py-4">
            <img
              src="images/client/shopify.svg"
              class="avatar avatar-ex-sm"
              alt=""
            />
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center py-4">
            <img
              src="images/client/spotify.svg"
              class="avatar avatar-ex-sm"
              alt=""
            />
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- Partners End -->

    <!-- Start -->
    <section class="section border-bottom">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="section-title text-center mb-4 pb-2">
              <h4 class="title mb-4">Our Features</h4>
              <p class="text-muted para-desc mb-0 mx-auto">
                Start working with
                <span class="text-primary font-weight-bold">Landrick</span> that
                can provide everything you need to generate awareness, drive
                traffic, connect.
              </p>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row">
          <div
            class="col-lg-4 col-md-6 mt-5"
            v-for="(data, index) of features"
            :key="index"
          >
            <div class="media features feature-clean">
              <div class="icons text-primary text-center mx-auto">
                <i :class="`${data.icon} d-block rounded h3 mb-0`"></i>
              </div>
              <div class="content ml-4">
                <h5 class="mb-1">
                  <a href="javascript:void(0)" class="text-dark">{{
                    data.title
                  }}</a>
                </h5>
                <p class="text-muted mb-0">
                  {{ data.text }}
                </p>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row justify-content-center">
          <div class="col-12 mt-5">
            <div class="watch-video text-center">
              <a href="javascript:void(0)" class="btn btn-primary m-1"
                >Get Started <i class="mdi mdi-chevron-right"></i
              ></a>
              <a
                href="javascript: void(0);"
                v-b-modal.modal-1
                class="btn btn-icon btn-pills video-play-icon btn-primary m-1"
              >
                <video-icon class="icons"></video-icon>
              </a>
              <span
                class="font-weight-bold text-uppercase small align-middle ml-1"
                >Watch Now</span
              >
            </div>
            <b-modal
              id="modal-1"
              hide-footer
              size="lg"
              header-close-variant="white"
              header-class="border-0"
              content-class="border-0"
              centered
            >
              <vimeo-player
                ref="player"
                :player-width="750"
                :player-height="450"
                :video-id="99025203"
              />
            </b-modal>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>

    <section class="section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <img src="images/saas/classic01.png" class="img-fluid" alt="" />
          </div>
          <!--end col-->

          <div class="col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="section-title ml-lg-5">
              <h4 class="title mb-4">
                Make your website <br />
                growth with next level visitors
              </h4>
              <p class="text-muted">
                You can combine all the Landrick templates into a single one,
                you can take a component from the Application theme and use it
                in the Website.
              </p>
              <ul class="list-unstyled text-muted">
                <li class="mb-0">
                  <span class="text-primary h5 mr-2"
                    ><i class="uil uil-check-circle align-middle"></i></span
                  >Digital Marketing Solutions for Tomorrow
                </li>
                <li class="mb-0">
                  <span class="text-primary h5 mr-2"
                    ><i class="uil uil-check-circle align-middle"></i></span
                  >Our Talented & Experienced Marketing Agency
                </li>
                <li class="mb-0">
                  <span class="text-primary h5 mr-2"
                    ><i class="uil uil-check-circle align-middle"></i></span
                  >Create your own skin to match your brand
                </li>
              </ul>
              <a href="javascript:void(0)" class="mt-3 h6 text-primary"
                >Find Out More <i class="mdi mdi-chevron-right"></i
              ></a>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row align-items-center">
          <div class="col-md-6 order-1 order-md-2">
            <img src="images/illustrator/inbox-cleanup.svg" alt="" />
          </div>
          <!--end col-->

          <div class="col-md-6 order-2 order-md-1">
            <div class="section-title ml-lg-5">
              <h4 class="title mb-4">
                Meet our business <br />
                partner who work behind the scene
              </h4>
              <p class="text-muted">
                You can combine all the Landrick templates into a single one,
                you can take a component from the Application theme and use it
                in the Website.
              </p>
              <ul class="list-unstyled text-muted">
                <li class="mb-0">
                  <span class="text-primary h5 mr-2"
                    ><i class="uil uil-check-circle align-middle"></i></span
                  >Digital Marketing Solutions for Tomorrow
                </li>
                <li class="mb-0">
                  <span class="text-primary h5 mr-2"
                    ><i class="uil uil-check-circle align-middle"></i></span
                  >Our Talented & Experienced Marketing Agency
                </li>
                <li class="mb-0">
                  <span class="text-primary h5 mr-2"
                    ><i class="uil uil-check-circle align-middle"></i></span
                  >Create your own skin to match your brand
                </li>
              </ul>
              <a href="javascript:void(0)" class="mt-3 h6 text-primary"
                >Find Out More <i class="mdi mdi-chevron-right"></i
              ></a>
            </div>
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
              <h4 class="title mb-4">
                Whats Our Clients Said About
                <span class="text-primary">Landrick</span> Project
              </h4>
              <p class="text-muted para-desc mx-auto mb-0">
                Start working with
                <span class="text-primary font-weight-bold">Landrick</span> that
                can provide everything you need to generate awareness, drive
                traffic, connect.
              </p>
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
    </section>
    <!--end section-->
    <!-- End -->

    <!-- Start Plan -->
    <section class="section bg-light">
      <div class="container">
        <div class="row align-items-end mb-4 pb-2">
          <div class="col-md-8">
            <div class="section-title text-center text-md-left">
              <h4 class="title mb-4">
                Choose the best <br />
                one for you
              </h4>
              <p class="text-muted mb-0 para-desc">
                Start working with
                <span class="text-primary font-weight-bold">Landrick</span> that
                can provide everything you need to generate awareness, drive
                traffic, connect.
              </p>
            </div>
          </div>
          <!--end col-->

          <div class="col-md-4 mt-4 mt-sm-0">
            <div class="text-center text-md-right">
              <ul
                class="nav nav-pills bg-white rounded-lg justify-content-center d-inline-block shadow py-1 px-2 mb-0"
                id="pills-tab"
                role="tablist"
              >
                <li class="nav-item d-inline-block">
                  <a
                    class="nav-link px-3 rounded-lg active monthly"
                    id="Monthly"
                    data-toggle="pill"
                    href="javascript: void(0);"
                    role="tab"
                    aria-controls="Month"
                    aria-selected="true"
                    >Monthly</a
                  >
                </li>
                <li class="nav-item d-inline-block">
                  <a
                    class="nav-link px-3 rounded-lg yearly"
                    id="Yearly"
                    data-toggle="pill"
                    href="javascript: void(0);"
                    role="tab"
                    aria-controls="Year"
                    aria-selected="false"
                    >Yearly</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row">
          <div class="col-12">
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade active show"
                id="Month"
                role="tabpanel"
                aria-labelledby="Monthly"
              >
                <Pricing />
                <!--end row-->
              </div>

              <div
                class="tab-pane fade"
                id="Year"
                role="tabpanel"
                aria-labelledby="Yearly"
              >
                <div class="row">
                  <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                    <div
                      class="card pricing-rates business-rate shadow bg-light border-0 rounded"
                    >
                      <div class="card-body">
                        <h2 class="title text-uppercase mb-4">Free</h2>
                        <div class="d-flex mb-4">
                          <span class="h6 mb-0 mt-2">$</span>
                          <span class="price h1 mb-0">0</span>
                          <span class="h5 align-self-end mb-1"> /mo</span>
                        </div>

                        <ul class="list-unstyled mb-0 pl-0">
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 mr-2"
                              ><i class="uil uil-check-circle align-middle"></i></span
                            >Full Access
                          </li>
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 mr-2"
                              ><i class="uil uil-check-circle align-middle"></i></span
                            >Source Files
                          </li>
                        </ul>
                        <a
                          href="javascript:void(0)"
                          class="btn btn-primary mt-4"
                          >Buy Now</a
                        >
                      </div>
                    </div>
                  </div>
                  <!--end col-->

                  <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                    <div
                      class="card pricing-rates business-rate shadow bg-white border-0 rounded"
                    >
                      <div class="card-body">
                        <h2 class="title text-uppercase text-primary mb-4">
                          Starter
                        </h2>
                        <div class="d-flex mb-4">
                          <span class="h6 mb-0 mt-2">$</span>
                          <span class="price h1 mb-0">29</span>
                          <span class="h5 align-self-end mb-1"> /mo</span>
                        </div>

                        <ul class="list-unstyled mb-0 pl-0">
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 mr-2"
                              ><i class="uil uil-check-circle align-middle"></i></span
                            >Full Access
                          </li>
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 mr-2"
                              ><i class="uil uil-check-circle align-middle"></i></span
                            >Source Files
                          </li>
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 mr-2"
                              ><i class="uil uil-check-circle align-middle"></i></span
                            >Free Appointments
                          </li>
                        </ul>
                        <a
                          href="javascript:void(0)"
                          class="btn btn-primary mt-4"
                          >Get Started</a
                        >
                      </div>
                    </div>
                  </div>
                  <!--end col-->

                  <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                    <div
                      class="card pricing-rates business-rate shadow bg-light border-0 rounded"
                    >
                      <div class="card-body">
                        <h2 class="title text-uppercase mb-4">Professional</h2>
                        <div class="d-flex mb-4">
                          <span class="h6 mb-0 mt-2">$</span>
                          <span class="price h1 mb-0">45</span>
                          <span class="h5 align-self-end mb-1"> /mo</span>
                        </div>

                        <ul class="list-unstyled mb-0 pl-0">
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 mr-2"
                              ><i class="uil uil-check-circle align-middle"></i></span
                            >Full Access
                          </li>
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 mr-2"
                              ><i class="uil uil-check-circle align-middle"></i></span
                            >Source Files
                          </li>
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 mr-2"
                              ><i class="uil uil-check-circle align-middle"></i></span
                            >1 Domain Free
                          </li>
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 mr-2"
                              ><i class="uil uil-check-circle align-middle"></i></span
                            >Enhanced Security
                          </li>
                        </ul>
                        <a
                          href="javascript:void(0)"
                          class="btn btn-primary mt-4"
                          >Try It Now</a
                        >
                      </div>
                    </div>
                  </div>
                  <!--end col-->

                  <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                    <div
                      class="card pricing-rates business-rate shadow bg-light border-0 rounded"
                    >
                      <div class="card-body">
                        <h2 class="title text-uppercase mb-4">Ultimate</h2>
                        <div class="d-flex mb-4">
                          <span class="h6 mb-0 mt-2">$</span>
                          <span class="price h1 mb-0">69</span>
                          <span class="h5 align-self-end mb-1"> /mo</span>
                        </div>

                        <ul class="list-unstyled mb-0 pl-0">
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 mr-2"
                              ><i class="uil uil-check-circle align-middle"></i></span
                            >Full Access
                          </li>
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 mr-2"
                              ><i class="uil uil-check-circle align-middle"></i></span
                            >Enhanced Security
                          </li>
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 mr-2"
                              ><i class="uil uil-check-circle align-middle"></i></span
                            >Source Files
                          </li>
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 mr-2"
                              ><i class="uil uil-check-circle align-middle"></i></span
                            >1 Domain Free
                          </li>
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 mr-2"
                              ><i class="uil uil-check-circle align-middle"></i></span
                            >Free Installment
                          </li>
                        </ul>
                        <a
                          href="javascript:void(0)"
                          class="btn btn-primary mt-4"
                          >Started Now</a
                        >
                      </div>
                    </div>
                  </div>
                  <!--end col-->
                </div>
                <!--end row-->
              </div>
            </div>
          </div>
        </div>
        <!--end row-->
      </div>
      <!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row align-items-center">
          <div class="col-lg-5 col-md-5 col-12">
            <img
              src="images/illustrator/envelope.svg"
              class="img-fluid mx-auto d-block"
              alt=""
            />
          </div>
          <!--end col-->

          <div class="col-lg-7 col-md-7 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="section-title">
              <div class="alert alert-light alert-pills" role="alert">
                <span class="badge badge-primary badge-pill mr-1">Apps</span>
                <span class="content"
                  >Download now
                  <chevron-right-icon class="fea icon-sm"></chevron-right-icon
                ></span>
              </div>
              <h4 class="title mb-4">
                Available for your <br />
                Smartphones
              </h4>
              <p class="text-muted para-desc mb-0">
                Start working with
                <span class="text-primary font-weight-bold">Landrick</span> that
                can provide everything you need to generate awareness, drive
                traffic, connect.
              </p>
              <div class="my-4">
                <a
                  href="javascript: void(0);"
                  class="btn btn-lg btn-dark mt-2 mr-2"
                  ><i class="mdi mdi-apple"></i> App Store</a
                >
                <a href="javascript: void(0);" class="btn btn-lg btn-dark mt-2"
                  ><i class="mdi mdi-google-play"></i> Play Store</a
                >
              </div>

              <div class="d-inline-block">
                <div class="pt-4 d-flex align-items-center border-top">
                  <smartphone-icon
                    class="fea icon-md mr-2 text-primary"
                  ></smartphone-icon>
                  <div class="content">
                    <h6 class="mb-0">Install app now on your cellphones</h6>
                    <a href="javascript: void(0);" class="text-primary"
                      >Learn More <i class="mdi mdi-arrow-right"></i
                    ></a>
                  </div>
                </div>
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
    <!-- End Plan -->
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

<style>
.modal-content {
  background-color: transparent;
}
</style>
