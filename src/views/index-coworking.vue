<script>
import {
  ArrowUpIcon,
  UserIcon,
  MailIcon,
  PhoneIcon,
  PlayIcon,
  VideoIcon,
} from "vue-feather-icons";
import { Carousel, Slide } from "vue-carousel";

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";
import Testimonial from "@/components/testimonial";
import News from "@/components/news";

/**
 * Index-coworking component
 */
export default {
  data() {
    return {
      slide: 0,
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
    Navbar,
    Switcher,
    Footer,
    News,
    ArrowUpIcon,
    Carousel,
    Slide,
    UserIcon,
    MailIcon,
    VideoIcon,
    PhoneIcon,
    PlayIcon,
    Testimonial,
  },
};
</script>

<template>
  <div>
    <Navbar :nav-light="true" />

    <!-- Hero Start -->
    <section class="home-slider position-relative">
      <b-carousel id="carousel-1" v-model="slide" class="slides">
        <b-carousel-slide
          caption=""
          controls
          class="align-items-center"
          :style="{
            'background-image':
              'url(' + require('../../public/images/coworking/bg01.jpg') + ')',
          }"
        >
          <div class="bg-overlay"></div>
          <div class="container">
            <div class="row justify-content-center">
              <div
                class="col-lg-12 text-center align-items-center justify-content-center d-flex"
              >
                <div class="title-heading mt-4">
                  <h6
                    class="text-light para-dark animated fadeInDownBig animation-delay-1"
                  >
                    Private office and Co-working space for
                    <span class="text-success">$19</span>
                  </h6>
                  <h1
                    class="heading mb-3 text-white title-dark animated fadeInUpBig animation-delay-3"
                  >
                    Coworking Space For a Success
                  </h1>
                  <p
                    class="para-desc text-light para-dark mx-auto animated fadeInUpBig animation-delay-7"
                  >
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap4 html
                    page.
                  </p>
                  <div
                    class="mt-4 pt-2 animated fadeInUpBig animation-delay-11"
                  >
                    <a href="javascript:void(0)" class="btn btn-primary mt-2"
                      ><i class="mdi mdi-email"></i> Get Started</a
                    >
                  </div>
                </div>
              </div>
              <!--end col-->
            </div>
            <!--end row-->
          </div>
        </b-carousel-slide>
        <b-carousel-slide
          class="align-items-center"
          :style="{
            'background-image':
              'url(' + require('../../public/images/coworking/bg02.jpg') + ')',
          }"
        >
          <div class="bg-overlay"></div>
          <div class="container">
            <div class="row justify-content-center">
              <div
                class="col-lg-12 text-center align-items-center justify-content-center d-flex"
              >
                <div class="title-heading mt-4">
                  <h6
                    class="text-light para-dark animated fadeInDownBig animation-delay-1"
                  >
                    The Best Coworking in The City
                  </h6>
                  <h1
                    class="heading mb-3 text-white title-dark animated fadeInUpBig animation-delay-3"
                  >
                    Office Space in Vietnam
                  </h1>
                  <p
                    class="para-desc mx-auto text-light para-dark animated fadeInUpBig animation-delay-7"
                  >
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap4 html
                    page.
                  </p>
                  <div
                    class="text-center subcribe-form mt-4 pt-2 animated fadeInUpBig animation-delay-11"
                  >
                    <form>
                      <div class="form-group">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          class="rounded"
                          placeholder="E-mail"
                        />
                        <button type="submit" class="btn btn-primary">
                          Book Space
                        </button>
                      </div>
                    </form>
                    <!--end form-->
                  </div>
                  <!--end subscribe form-->
                </div>
              </div>
              <!--end col-->
            </div>
            <!--end row-->
          </div>
          <!--end container-->
        </b-carousel-slide>
        <b-carousel-slide
          class="align-items-center"
          :style="{
            'background-image':
              'url(' + require('../../public/images/coworking/bg03.jpg') + ')',
          }"
        >
          <div class="bg-overlay"></div>
          <div class="container">
            <div class="row justify-content-center">
              <div
                class="col-lg-12 text-center align-items-center justify-content-center d-flex"
              >
                <div class="title-heading mt-4">
                  <h6
                    class="text-light para-dark animated fadeInDownBig animation-delay-1"
                  >
                    Our Space for You
                  </h6>
                  <h1
                    class="heading mb-3 text-white title-dark animated fadeInUpBig animation-delay-3"
                  >
                    Own Your Office For A Day
                  </h1>
                  <p
                    class="para-desc mx-auto text-light para-dark animated fadeInUpBig animation-delay-7"
                  >
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap4 html
                    page.
                  </p>
                  <div
                    class="watch-video mt-4 pt-2 animated fadeInUpBig animation-delay-11"
                  >
                    <a
                      href="javascript: void(0);"
                      v-b-modal.modal
                      class="video-play-icon watch text-white title-dark mb-2 ml-2"
                      ><i
                        class="mdi mdi-play play-icon-circle text-center d-inline-block mr-2 rounded-circle text-white title-dark position-relative play play-iconbar"
                      ></i>
                      WATCH VIDEO</a
                    >
                  </div>
                </div>
              </div>
              <!--end col-->
            </div>
            <!--end row-->
          </div>
          <!--end container-->
        </b-carousel-slide>
      </b-carousel>
      <b-modal
        id="modal"
        hide-footer
        size="lg"
        header-close-variant="white"
        header-class="border-0"
        content-class="border-0"
        centered
      >
        <youtube
          video-id="jNTZpfXYJa4"
          ref="youtube"
          width="750"
          height="450"
        ></youtube>
      </b-modal>
    </section>
    <!--end section-->
    <!-- Hero End -->

    <!-- Partners start -->
    <section class="py-5 border-bottom border-top">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <h5>Trusted client by over 10,000+ of the world’s</h5>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row mt-5 justify-content-center">
          <div class="col-lg-2 col-md-2 col-6 text-center">
            <img
              src="images/client/amazon.svg"
              class="avatar avatar-ex-sm"
              alt=""
            />
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center">
            <img
              src="images/client/google.svg"
              class="avatar avatar-ex-sm"
              alt=""
            />
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center mt-4 mt-sm-0">
            <img
              src="images/client/lenovo.svg"
              class="avatar avatar-ex-sm"
              alt=""
            />
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center mt-4 mt-sm-0">
            <img
              src="images/client/paypal.svg"
              class="avatar avatar-ex-sm"
              alt=""
            />
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center mt-4 mt-sm-0">
            <img
              src="images/client/shopify.svg"
              class="avatar avatar-ex-sm"
              alt=""
            />
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center mt-4 mt-sm-0">
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

    <!-- About Start -->
    <section class="section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5 col-md-6 col-12">
            <img
              src="images/coworking/about.jpg"
              class="img-fluid rounded"
              alt=""
            />
          </div>
          <!--end col-->

          <div class="col-lg-7 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="section-title ml-lg-4">
              <h4 class="title mb-4">About Our Community</h4>
              <p class="text-muted">
                Start working with
                <span class="text-primary font-weight-bold"
                  >Landrick Space</span
                >
                that can provide everything you need to generate awareness,
                drive traffic, connect. Dummy text is text that is used in the
                publishing industry or by web designers to occupy the space
                which will later be filled with 'real' content. This is required
                when, for example, the final text is not yet available. Dummy
                texts have been in use by typesetters since the 16th century.
              </p>
              <a href="javascript:void(0)" class="btn btn-primary mt-3"
                >Join now</a
              >
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--enc container-->
    </section>
    <!--end section-->
    <!-- About End -->

    <!-- Services Start -->
    <section class="section bg-light">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">Your Comfort is Our Priority</h4>
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

        <div class="row">
          <div class="col-lg-3 col-md-4 col-6 mt-4 pt-2">
            <div class="features text-center pt-3 pb-3">
              <i class="uil uil-wifi h1 text-primary"></i>
              <div class="content mt-3">
                <h5>Fast Internet</h5>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-4 col-6 mt-4 pt-2">
            <div class="features text-center pt-3 pb-3">
              <i class="uil uil-print h1 text-primary"></i>
              <div class="content mt-3">
                <h5>Printer & Fax</h5>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-4 col-6 mt-4 pt-2">
            <div class="features text-center pt-3 pb-3">
              <i class="uil uil-restaurant h1 text-primary"></i>
              <div class="content mt-3">
                <h5>Modern Kitchen</h5>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-4 col-6 mt-4 pt-2">
            <div class="features text-center pt-3 pb-3">
              <i class="uil uil-clock h1 text-primary"></i>
              <div class="content mt-3">
                <h5>24 Hr Access</h5>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-4 col-6 mt-4 pt-2">
            <div class="features text-center pt-3 pb-3">
              <i class="uil uil-envelope-alt h1 text-primary"></i>
              <div class="content mt-3">
                <h5>Mail Service</h5>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-4 col-6 mt-4 pt-2">
            <div class="features text-center pt-3 pb-3">
              <i class="uil uil-calendar-alt h1 text-primary"></i>
              <div class="content mt-3">
                <h5>Events Space</h5>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-4 col-6 mt-4 pt-2">
            <div class="features text-center pt-3 pb-3">
              <i class="uil uil-user-arrows h1 text-primary"></i>
              <div class="content mt-3">
                <h5>Conference Rooms</h5>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-4 col-6 mt-4 pt-2">
            <div class="features text-center pt-3 pb-3">
              <i class="uil uil-coffee h1 text-primary"></i>
              <div class="content mt-3">
                <h5>Organic Tea & Coffee</h5>
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
    <!-- Services End -->

    <!-- CTA START -->
    <section class="section">
      <div class="container">
        <div class="card bg-light rounded border-0 overflow-hidden">
          <div class="row no-gutters align-items-center">
            <div class="col-lg-6">
              <img src="images/coworking/cta.jpg" class="img-fluid" alt="" />
            </div>
            <!--end col-->

            <div class="col-lg-6 text-center">
              <div class="card-body section-title p-md-5">
                <a
                  href="javascript: void(0);"
                  v-b-modal.modal-1
                  class="play-btn mt-0 border border-light text-center video-play-icon"
                >
                  <play-icon class="fea icon-ex-md text-dark"></play-icon>
                </a>
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
                    :video-id="287684225"
                  />
                </b-modal>
                <h4 class="title mb-4 mt-4">
                  We Are Creative Dreamers and Co-workers
                </h4>
                <p class="text-muted mx-auto para-desc mb-0">
                  Start working with Landrick that can provide everything you
                  need to generate awareness, drive traffic, connect.
                </p>
              </div>
            </div>
            <!--end col-->
          </div>
        </div>
      </div>
      <!--end container-->

      <!-- Start Price -->
      <div class="container mt-100 mt-60">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">Choose The Pricing Plan</h4>
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

        <div class="row align-items-center">
          <div class="col-md-3 col-12 mt-4 pt-2">
            <div
              class="card pricing-rates best-plan rounded bg-light text-center border-0"
            >
              <div class="card-body py-5">
                <img
                  src="images/icon/lightbulb.svg"
                  class="mb-4"
                  height="50"
                  alt=""
                />
                <h6 class="title text-uppercase mb-4">Member</h6>
                <div class="d-flex justify-content-center mb-4">
                  <span class="h4 mb-0 mt-2">$</span>
                  <span class="price h1 mb-0">19</span>
                  <span class="h4 align-self-end mb-1">/mo</span>
                </div>

                <p class="text-muted">
                  Start working with Landrick that can provide everything you
                  need to generate awareness, drive traffic, connect.
                </p>
                <a
                  href="javascript:void(0)"
                  class="btn btn-outline-primary btn-sm mt-4"
                  >Buy Now</a
                >
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-md-3 col-12 mt-4 pt-2">
            <div
              class="card pricing-rates best-plan rounded shadow text-center border-0"
            >
              <div class="ribbon ribbon-right ribbon-warning overflow-hidden">
                <span class="text-center d-block shadow small h6">Best</span>
              </div>
              <div class="card-body py-5">
                <img
                  src="images/icon/table.svg"
                  class="mb-4"
                  height="50"
                  alt=""
                />
                <h6 class="title text-uppercase mb-4">Desk</h6>
                <div class="d-flex justify-content-center mb-4">
                  <span class="h4 mb-0 mt-2">$</span>
                  <span class="price h1 mb-0">39</span>
                  <span class="h4 align-self-end mb-1">/mo</span>
                </div>

                <p class="text-muted">
                  Start working with Landrick that can provide everything you
                  need to generate awareness, drive traffic, connect.
                </p>
                <a
                  href="javascript:void(0)"
                  class="btn btn-outline-primary btn-sm mt-4"
                  >Get Started</a
                >
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-md-3 col-12 mt-4 pt-2">
            <div
              class="card pricing-rates best-plan rounded bg-light text-center border-0"
            >
              <div class="card-body py-5">
                <img
                  src="images/icon/star.svg"
                  class="mb-4"
                  height="50"
                  alt=""
                />
                <h6 class="title text-uppercase mb-4">Dedicated</h6>
                <div class="d-flex justify-content-center mb-4">
                  <span class="h4 mb-0 mt-2">$</span>
                  <span class="price h1 mb-0">49</span>
                  <span class="h4 align-self-end mb-1">/mo</span>
                </div>

                <p class="text-muted">
                  Start working with Landrick that can provide everything you
                  need to generate awareness, drive traffic, connect.
                </p>
                <a
                  href="javascript:void(0)"
                  class="btn btn-outline-primary btn-sm mt-4"
                  >Get Started</a
                >
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-md-3 col-12 mt-4 pt-2">
            <div
              class="card pricing-rates best-plan rounded bg-light text-center border-0"
            >
              <div class="card-body py-5">
                <img
                  src="images/icon/start-up.svg"
                  class="mb-4"
                  height="50"
                  alt=""
                />
                <h6 class="title text-uppercase mb-4">Office</h6>
                <div class="d-flex justify-content-center mb-4">
                  <span class="h4 mb-0 mt-2">$</span>
                  <span class="price h1 mb-0">59</span>
                  <span class="h4 align-self-end mb-1">/mo</span>
                </div>

                <p class="text-muted">
                  Start working with Landrick that can provide everything you
                  need to generate awareness, drive traffic, connect.
                </p>
                <a
                  href="javascript:void(0)"
                  class="btn btn-outline-primary btn-sm mt-4"
                  >Try It Now</a
                >
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
      <!-- End Price -->
    </section>
    <!--end section-->
    <!-- CTA END -->

    <!-- Start Client And Blog -->
    <section class="section bg-light">
      <!-- Start Client -->
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">Trusted Co-workers</h4>
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
      <!-- End Client -->

      <!-- Start Blog -->
      <div class="container mt-100 mt-60">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">Latest News & Events</h4>
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

        <News />
        <!--end row-->
      </div>
      <!--end container-->
      <!-- End Blog -->
    </section>
    <!--end section-->
    <!-- End Client And Blog -->

    <!-- Start Form -->
    <section
      class="section"
      style="background: url('images/coworking/bg04.jpg') center center"
    >
      <div class="bg-overlay"></div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8 col-md-7">
            <div class="section-title mr-lg-4">
              <h4 class="title title-dark text-light mb-4">
                We are Built for Business – Explore Us Today !
              </h4>
              <p class="text-light para-dark para-desc mb-0">
                Start working with
                <span class="text-success font-weight-bold">Landrick</span> that
                can provide everything you need to generate awareness, drive
                traffic, connect.
              </p>
              <div class="watch-video mt-4 pt-2">
                <a href="javascript:void(0)" class="btn btn-primary mb-2 mr-2"
                  >Install Now</a
                >
                <a
                  v-b-modal.modalShow
                  href="javascript: void(0);"
                  class="btn btn-icon btn-pills video-play-icon btn-primary m-1"
                >
                  <video-icon class="icons"></video-icon>
                </a>
                <span
                  class="font-weight-bold text-uppercase small text-light title-dark align-middle ml-1"
                  >Watch Now</span
                >
              </div>
              <b-modal
                id="modalShow"
                hide-footer
                size="lg"
                header-close-variant="white"
                header-class="border-0"
                content-class="border-0"
                centered
              >
                <youtube
                  video-id="jNTZpfXYJa4"
                  ref="youtube"
                  width="750"
                  height="450"
                ></youtube>
              </b-modal>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="card rounded shadow border-0">
              <div class="card-body">
                <h5 class="text-center">Become A Member</h5>

                <form>
                  <div class="row mt-4">
                    <div class="col-lg-12">
                      <div class="form-group mb-3">
                        <label
                          >Your Name <span class="text-danger">*</span></label
                        >
                      
                        <div class="position-relative">
                            <user-icon class="fea icon-sm icons"></user-icon>
                          <input
                            name="name"
                            id="name3"
                            type="text"
                            class="form-control pl-5"
                            placeholder="Name"
                            required=""
                          />
                        </div>
                      </div>
                    </div>
                    <!--end col-->

                    <div class="col-lg-12">
                      <div class="form-group mb-3">
                        <label
                          >Your Email <span class="text-danger">*</span></label
                        >
                        <div class="position-relative">
                          <mail-icon class="fea icon-sm icons"></mail-icon>
                          <input
                            type="email"
                            id="email3"
                            class="form-control pl-5"
                            placeholder="Email"
                            name="email"
                            required=""
                          />
                        </div>
                      </div>
                    </div>
                    <!--end col-->

                    <div class="col-md-12">
                      <div class="form-group">
                        <label
                          >Your Phone no. :<span class="text-danger"
                            >*</span
                          ></label
                        >
                        <div class="position-relative">
                          <phone-icon class="fea icon-sm icons"></phone-icon>
                          <input
                            name="number"
                            id="number"
                            type="number"
                            class="form-control pl-5"
                            placeholder="Phone no. :"
                            required=""
                          />
                        </div>
                      </div>
                    </div>
                    <!--end col-->

                    <div class="col-lg-12 mb-0">
                      <button class="btn btn-primary btn-block">
                        Started now
                      </button>
                    </div>
                    <!--end col-->
                  </div>
                  <!--end row-->
                </form>
                <!--end form-->
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
    <!-- End Form -->
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

.carousel-caption {
  width: auto;
  height: auto !important;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  position: unset !important;
}
</style>
