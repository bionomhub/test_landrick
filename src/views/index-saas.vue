<script>
import { ArrowUpIcon } from "vue-feather-icons";
import { Carousel, Slide } from "vue-carousel";

import Navbar from "@/components/navbar";
import Testimonial from "@/components/testimonial";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";

/**
 * Index-saas component
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
    };
  },
  components: {
    Carousel,
    Slide,
    Navbar,
    Testimonial,
    Switcher,
    Footer,
    ArrowUpIcon,
  },
};
</script>

<template>
  <div>
    <Navbar />
    <!-- Hero Start -->
    <section
      class="bg-home d-flex align-items-center"
      style="
        background: url('images/saas/home-shape.png') center center;
        height: auto;
      "
      id="home"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12 text-center mt-0 mt-md-5 pt-0 pt-md-5">
            <div class="title-heading margin-top-100">
              <h1 class="heading mb-3">Build fast, released quickly.</h1>
              <p class="para-desc mx-auto text-muted">
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered bootstrap4 html page.
              </p>
              <div class="mt-4 pt-2">
                <a v-scroll-to="'#about'" class="btn btn-primary"
                  >Start Free Trial <i class="mdi mdi-chevron-right"></i
                ></a>
              </div>
            </div>

            <div class="home-dashboard">
              <img src="images/saas/home.png" alt="" class="img-fluid" />
            </div>
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
    <section class="section bg-light mt-0 mt-md-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">Our Trusted Clients</h4>
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
          <div class="col-lg-2 col-md-2 col-6 text-center mt-4 pt-2">
            <img
              src="images/client/amazon.svg"
              class="avatar avatar-ex-sm"
              alt=""
            />
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center mt-4 pt-2">
            <img
              src="images/client/google.svg"
              class="avatar avatar-ex-sm"
              alt=""
            />
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center mt-4 pt-2">
            <img
              src="images/client/lenovo.svg"
              class="avatar avatar-ex-sm"
              alt=""
            />
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center mt-4 pt-2">
            <img
              src="images/client/paypal.svg"
              class="avatar avatar-ex-sm"
              alt=""
            />
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center mt-4 pt-2">
            <img
              src="images/client/shopify.svg"
              class="avatar avatar-ex-sm"
              alt=""
            />
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center mt-4 pt-2">
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

    <!-- Feature Start -->
    <section class="section">
      <div class="container">
       <div class="row">
                    <div class="col-md-4 col-12">
                        <div class="features">
                            <div class="image position-relative d-inline-block">
                                <i class="uil uil-airplay h1 text-primary"></i>
                            </div>

                            <div class="content mt-4">
                                <h5>Easy To Use</h5>
                                <p class="text-muted mb-0">Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper.</p>
                            </div>
                        </div>
                    </div><!--end col-->
                    
                    <div class="col-md-4 col-12 mt-5 mt-sm-0">
                        <div class="features">
                            <div class="image position-relative d-inline-block">
                                <i class="uil uil-calendar-alt h1 text-primary"></i>
                            </div>

                            <div class="content mt-4">
                                <h5>Daily Reports</h5>
                                <p class="text-muted mb-0">Allegedly, a Latin scholar established the origin of the established text by compiling unusual word.</p>
                            </div>
                        </div>
                    </div><!--end col-->
                    
                    <div class="col-md-4 col-12 mt-5 mt-sm-0">
                        <div class="features">
                            <div class="image position-relative d-inline-block">
                                <i class="uil uil-clock h1 text-primary"></i>
                            </div>

                            <div class="content mt-4">
                                <h5>Real Time Zone</h5>
                                <p class="text-muted mb-0">It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today.</p>
                            </div>
                        </div>
                    </div><!--end col-->
                </div>
        <!--end row-->
      </div>
      <!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6">
            <img
              src="images/saas/classic02.png"
              class="img-fluid shadow rounded"
              alt=""
            />
          </div>
          <!--end col-->

          <div class="col-lg-6 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="section-title ml-lg-5">
              <h4 class="title mb-4">
                Great Product Analytics With Real Problem
              </h4>
              <p class="text-muted">
                Due to its widespread use as filler text for layouts,
                non-readability is of great importance: human perception is
                tuned to recognize certain patterns and repetitions in texts. If
                the distribution of letters visual impact.
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
          <div
            class="col-lg-7 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0"
          >
            <div class="section-title mr-lg-5">
              <h4 class="title mb-4">Get Notified About Importent Email</h4>
              <p class="text-muted">
                This prevents repetitive patterns from impairing the overall
                visual impression and facilitates the comparison of different
                typefaces. Furthermore, it is advantageous when the dummy text
                is relatively realistic.
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
                  >Create your own skin to match your brand
                </li>
              </ul>
              <a href="javascript:void(0)" class="mt-3 h6 text-primary"
                >Find Out More <i class="mdi mdi-chevron-right"></i
              ></a>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-5 col-md-6 order-1 order-md-2">
            <img src="images/illustrator/app_development_SVG.svg" alt="" />
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

      <div class="container pb-lg-4 mb-md-5 mb-4 mt-100 mt-60">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title">
              <h4 class="title mb-4">
                See everything about your employee at one place.
              </h4>
              <p class="text-muted para-desc mx-auto mb-0">
                Start working with
                <span class="text-primary font-weight-bold">Landrick</span> that
                can provide everything you need to generate awareness, drive
                traffic, connect.
              </p>

              <div class="mt-4">
                <a href="javascript:void(0)" class="btn btn-primary mt-2 mr-2"
                  >Get Started Now</a
                >
                <a
                  href="javascript:void(0)"
                  class="btn btn-outline-primary mt-2"
                  >Free Trial</a
                >
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end sectipn-->
    <div class="position-relative">
      <div class="shape overflow-hidden text-footer">
        <svg
          viewBox="0 0 2880 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M720 125L2160 0H2880V250H0V125H720Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
    <!-- Client End -->
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
