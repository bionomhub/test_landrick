<script>
import { ArrowUpIcon, CheckCircleIcon } from "vue-feather-icons";
import { Carousel, Slide } from "vue-carousel";

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";

/**
 * Index-payments component
 */
export default {
  data() {
    return {};
  },
  components: {
    Navbar,
    Switcher,
    Footer,
    Carousel,
    Slide,
    ArrowUpIcon,
    CheckCircleIcon,
  },
};
</script>

<template>
  <div>
    <Navbar />

    <!-- Hero Start -->
    <section class="bg-half-170 pb-0 d-table w-100">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="title-heading text-center mt-4">
              <img
                src="images/icon/credit-card.svg"
                class="avatar avatar-md-sm"
                alt=""
              />
              <h6 class="text-primary mt-3 font-weight-bold">PAYMENTS</h6>
              <h1 class="heading mb-3">
                A quick way to send your money faster
              </h1>
              <p class="para-desc mx-auto text-muted">
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered bootstrap4 html page.
              </p>
              <div class="mt-4 pt-2">
                <a href="javascript:void(0)" class="btn btn-primary"
                  >Get Started <i class="mdi mdi-chevron-right"></i
                ></a>
              </div>
            </div>

            <div class="row justify-content-center mt-lg-4 mt-3">
              <div class="col-md-6 mt-4 pt-2">
                <div class="card rounded shadow bg-light border-0">
                  <div class="card-body py-5">
                    <img
                      src="images/payments/payment/master.png"
                      height="60"
                      class="text-right"
                      alt=""
                    />
                    <div class="mt-4">
                      <h5 class="">•••• •••• •••• 4559</h5>
                      <div class="d-flex justify-content-between">
                        <p class="h6 text-muted mb-0">Cristino Murfy</p>
                        <h6 class="mb-0">
                          Exp: <span class="text-muted">10/22</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--end col-->

              <div class="col-md-6 mt-4 pt-2">
                <div class="card rounded shadow bg-dark border-0">
                  <div class="card-body py-5">
                    <img
                      src="images/payments/payment/visaa.png"
                      height="60"
                      class="text-right"
                      alt=""
                    />
                    <div class="mt-4">
                      <h5 class="text-light">•••• •••• •••• 9856</h5>
                      <div class="d-flex justify-content-between">
                        <p class="h6 text-muted mb-0">Calvin Carlo</p>
                        <h6 class="mb-0 text-muted">
                          Exp: <span class="text-muted">01/24</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--end col-->

              <div class="col-md-6 mt-4 pt-2">
                <div class="card rounded shadow bg-info border-0">
                  <div class="card-body py-5">
                    <img
                      src="images/payments/payment/rupay.png"
                      height="60"
                      class="text-right"
                      alt=""
                    />
                    <div class="mt-4">
                      <h5 class="text-white">•••• •••• •••• 5465</h5>
                      <div class="d-flex justify-content-between">
                        <p class="h6 text-light mb-0">Miriam Jockky</p>
                        <h6 class="mb-0 text-light">
                          Exp: <span class="text-light">03/23</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--end col-->

              <div class="col-md-6 mt-4 pt-2">
                <div class="card rounded shadow bg-light border-0">
                  <div class="card-body py-5">
                    <img
                      src="images/payments/payment/paypals.png"
                      height="60"
                      class="text-right"
                      alt=""
                    />
                    <div class="mt-4">
                      <form>
                        <div class="form-group mt-4 pt-3 mb-0">
                          <div class="input-group">
                            <input
                              name="email"
                              id="email"
                              type="email"
                              class="form-control"
                              placeholder="Paypal Email :"
                              required=""
                              aria-describedby="newssubscribebtn"
                            />
                            <div class="input-group-append">
                              <button
                                class="btn btn-primary submitBnt"
                                type="submit"
                                id="paypalmail"
                              >
                                Send
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                      <!--end form-->
                    </div>
                  </div>
                </div>
              </div>
              <!--end col-->
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

    <!-- Section Start -->
    <section class="section pb-0">
      <!-- Process Start -->
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title">
              <h4 class="title mb-4">
                Easy payment processing for your business
              </h4>
              <p class="text-muted para-desc mb-0 mx-auto">
                Start working with
                <span class="text-primary font-weight-bold">Landrick</span> that
                can provide everything you need to generate awareness, drive
                traffic, connect.
              </p>
            </div>
            <div class="mt-4">
              <a href="javascript:void(0)"
                ><img
                  src="images/payments/payment/discover.jpg"
                  class="img-fluid avatar avatar-small mx-2 mt-4 rounded-circle shadow"
                  v-b-tooltip.hover
                  title="Discover"
                  alt=""
              /></a>
              <a href="javascript:void(0)"
                ><img
                  src="images/payments/payment/maestro.jpg"
                  class="img-fluid avatar avatar-small mx-2 mt-4 rounded-circle shadow"
                  v-b-tooltip.hover
                  title="Maestro"
                  alt=""
              /></a>
              <a href="javascript:void(0)"
                ><img
                  src="images/payments/payment/paypal.jpg"
                  class="img-fluid avatar avatar-small mx-2 mt-4 rounded-circle shadow"
                  v-b-tooltip.hover
                  title="Paypal"
                  alt=""
              /></a>
              <a href="javascript:void(0)"
                ><img
                  src="images/payments/payment/master-card.jpg"
                  class="img-fluid avatar avatar-small mx-2 mt-4 rounded-circle shadow"
                  v-b-tooltip.hover
                  title="Master Card"
                  alt=""
              /></a>
              <a href="javascript:void(0)"
                ><img
                  src="images/payments/payment/visa.jpg"
                  class="img-fluid avatar avatar-small mx-2 mt-4 rounded-circle shadow"
                  v-b-tooltip.hover
                  title="Visa"
                  alt=""
              /></a>
              <a href="javascript:void(0)"
                ><img
                  src="images/payments/payment/american-express.jpg"
                  class="img-fluid avatar avatar-small mx-2 mt-4 rounded-circle shadow"
                  v-b-tooltip.hover
                  title="American Express"
                  alt=""
              /></a>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
      <!-- Process Start -->

      <!-- Features Start -->
      <div class="container mt-100 mt-60">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">Payments Great Features</h4>
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
          <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div class="card bg-light rounded shadow border-0">
              <div class="card-body py-5">
                <i class="uil uil-rupee-sign h1 text-primary"></i>
                <div class="mt-2">
                  <h5 class="card-title">
                    <a href="javascript:void(0)" class="text-primary">
                      Low Fees</a
                    >
                  </h5>
                  <p class="text-muted mt-3 mb-0">
                    If the distribution of letters and 'words' is random, the
                    reader will not be distracted.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div class="card bg-light rounded shadow border-0">
              <div class="card-body py-5">
                <i class="uil uil-shield h1 text-primary"></i>
                <div class="mt-2">
                  <h5 class="card-title">
                    <a href="javascript:void(0)" class="text-primary">
                      Safe & Secure</a
                    >
                  </h5>
                  <p class="text-muted mt-3 mb-0">
                    For this reason, dummy text usually consists of a more or
                    less random series of words.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div class="card bg-light rounded shadow border-0">
              <div class="card-body py-5">
                <i class="uil uil-headphones h1 text-primary"></i>
                <div class="mt-2">
                  <h5 class="card-title">
                    <a href="javascript:void(0)" class="text-primary">
                      Amazing Support</a
                    >
                  </h5>
                  <p class="text-muted mt-3 mb-0">
                    This prevents repetitive patterns from impairing the overall
                    visual impression.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div class="card bg-light rounded shadow border-0">
              <div class="card-body py-5">
                <i class="uil uil-exchange h1 text-primary"></i>
                <div class="mt-2">
                  <h5 class="card-title">
                    <a href="javascript:void(0)" class="text-primary">
                      Convenient & Easy</a
                    >
                  </h5>
                  <p class="text-muted mt-3 mb-0">
                    It is advantageous when the dummy text is relatively
                    realistic so that the layout.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
      <!-- Features End -->

      <!-- Transection Start -->
      <div class="container mt-100 mt-60">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-5 pb-2">
              <h4 class="title mb-4">Transection Between Buyers and Seller</h4>
              <p class="text-muted para-desc mb-0 mx-auto">
                Start working with
                <span class="text-primary font-weight-bold">Landrick</span> that
                can provide everything you need to generate awareness, drive
                traffic, connect.
              </p>
            </div>
            <img
              src="images/payments/payment/seller-order.png"
              alt=""
              class="position-relative img-fluid mx-auto d-block"
              style="z-index: 1"
            />
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
      <!-- Transection End -->
    </section>
    <!--end section-->
    <div class="position-relative">
      <div class="shape overflow-hidden text-light">
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
    <!-- Section End -->

    <!-- section Start -->
    <section class="section bg-light">
      <!-- Client Review Start -->
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">What customers say about us</h4>
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

        <div class="row justify-content-center">
          <div class="col-lg-12 pt-2 mt-2 text-center">
            <carousel
              id="customer-testi"
              class="owl-carousel owl-theme"
              dir="ltr"
              :per-page="3"
              :loop="true"
            >
              <Slide>
                <div
                  class="card customer-testi m-2 text-center rounded shadow border-0"
                >
                  <div class="card-body">
                    <p class="text-muted h6 font-italic">
                      " It seems that only fragments of the oem Ipsum', which is
                      said to have originated in the 16th century. "
                    </p>
                    <img
                      src="images/client/01.jpg"
                      class="img-fluid avatar avatar-small mt-3 rounded-circle mx-auto shadow"
                      alt=""
                    />
                    <ul class="list-unstyled mb-0 mt-3">
                      <li class="list-inline-item">
                        <i class="mdi mdi-star text-warning"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="mdi mdi-star text-warning"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="mdi mdi-star text-warning"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="mdi mdi-star text-warning"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="mdi mdi-star text-warning"></i>
                      </li>
                    </ul>
                    <h6 class="text-primary">
                      - Thomas Israel <small class="text-muted">C.E.O</small>
                    </h6>
                  </div>
                </div>
                <!--end customer testi-->
              </Slide>
              <Slide>
                <div
                  class="card customer-testi m-2 text-center rounded shadow border-0"
                >
                  <div class="card-body">
                    <p class="text-muted h6 font-italic">
                      " The advantage of its Latin origin andor distract the
                      viewer's attention from the layout. "
                    </p>
                    <img
                      src="images/client/02.jpg"
                      class="img-fluid avatar avatar-small mt-3 rounded-circle mx-auto shadow"
                      alt=""
                    />
                    <ul class="list-unstyled mb-0 mt-3">
                      <li class="list-inline-item">
                        <i class="mdi mdi-star text-warning"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="mdi mdi-star text-warning"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="mdi mdi-star text-warning"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="mdi mdi-star text-warning"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="mdi mdi-star text-warning"></i>
                      </li>
                    </ul>
                    <h6 class="text-primary">
                      - Carl Oliver <small class="text-muted">P.A</small>
                    </h6>
                  </div>
                </div>
                <!--end customer testi-->
              </Slide>
              <Slide>
                <div
                  class="card customer-testi m-2 text-center rounded shadow border-0"
                >
                  <div class="card-body">
                    <p class="text-muted h6 font-italic">
                      " There is now an abundance of readableives to the classic
                      and tell short, funny or nonsensical stories. "
                    </p>
                    <img
                      src="images/client/03.jpg"
                      class="img-fluid avatar avatar-small mt-3 rounded-circle mx-auto shadow"
                      alt=""
                    />
                    <ul class="list-unstyled mb-0 mt-3">
                      <li class="list-inline-item">
                        <i class="mdi mdi-star text-warning"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="mdi mdi-star text-warning"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="mdi mdi-star text-warning"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="mdi mdi-star text-warning"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="mdi mdi-star text-warning"></i>
                      </li>
                    </ul>
                    <h6 class="text-primary">
                      - Barbara McIntosh <small class="text-muted">M.D</small>
                    </h6>
                  </div>
                </div>
                <!--end customer testi-->
              </Slide>
              <Slide>
                <div
                  class="card customer-testi m-2 text-center rounded shadow border-0"
                >
                  <div class="card-body">
                    <p class="text-muted h6 font-italic">
                      " According to most sources, Lorum Ipsuthe origin of the
                      text by of the unusual word he could find "
                    </p>
                    <img
                      src="images/client/04.jpg"
                      class="img-fluid avatar avatar-small mt-3 rounded-circle mx-auto shadow"
                      alt=""
                    />
                    <ul class="list-unstyled mb-0 mt-3">
                      <li class="list-inline-item">
                        <i class="mdi mdi-star text-warning"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="mdi mdi-star text-warning"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="mdi mdi-star text-warning"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="mdi mdi-star text-warning"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="mdi mdi-star text-warning"></i>
                      </li>
                    </ul>
                    <h6 class="text-primary">
                      - Christa Smith <small class="text-muted">Manager</small>
                    </h6>
                  </div>
                </div>
                <!--end customer testi-->
              </Slide>
              <Slide>
                <div
                  class="card customer-testi m-2 text-center rounded shadow border-0"
                >
                  <div class="card-body">
                    <p class="text-muted h6 font-italic">
                      " It seems that only fragments of the oem Ipsum', which is
                      said to have originated in the 16th century. "
                    </p>
                    <img
                      src="images/client/05.jpg"
                      class="img-fluid avatar avatar-small mt-3 rounded-circle mx-auto shadow"
                      alt=""
                    />
                    <ul class="list-unstyled mb-0 mt-3">
                      <li class="list-inline-item">
                        <i class="mdi mdi-star text-warning"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="mdi mdi-star text-warning"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="mdi mdi-star text-warning"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="mdi mdi-star text-warning"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="mdi mdi-star text-warning"></i>
                      </li>
                    </ul>
                    <h6 class="text-primary">
                      - Dean Tolle <small class="text-muted">Developer</small>
                    </h6>
                  </div>
                </div>
                <!--end customer testi-->
              </Slide>
              <Slide>
                <div
                  class="card customer-testi m-2 text-center rounded shadow border-0"
                >
                  <div class="card-body">
                    <p class="text-muted h6 font-italic">
                      " It seems that only fragments of the otime certain
                      letters at various positions within the text. "
                    </p>
                    <img
                      src="images/client/06.jpg"
                      class="img-fluid avatar avatar-small mt-3 rounded-circle mx-auto shadow"
                      alt=""
                    />
                    <ul class="list-unstyled mb-0 mt-3">
                      <li class="list-inline-item">
                        <i class="mdi mdi-star text-warning"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="mdi mdi-star text-warning"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="mdi mdi-star text-warning"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="mdi mdi-star text-warning"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="mdi mdi-star text-warning"></i>
                      </li>
                    </ul>
                    <h6 class="text-primary">
                      - Jill Webb <small class="text-muted">Designer</small>
                    </h6>
                  </div>
                </div>
                <!--end customer testi-->
              </Slide>
            </carousel>
            <!--end owl carousel-->
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
      <!-- Client Review End -->

      <!-- Payment and Price Start -->
      <div class="container mt-100 mt-60">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">Pricing & Add Payment Card</h4>
              <p class="text-muted para-desc mb-0 mx-auto">
                Start working with
                <span class="text-primary font-weight-bold">Landrick</span> that
                can provide everything you need to genePrice awareness, drive
                traffic, connect.
              </p>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row align-items-center">
          <div class="col-lg-5 col-md-6 col-12 mt-4 pt-2">
            <div class="card bg-light shadow rounded border-0">
              <div class="bg-primary p-4 text-center rounded-top">
                <h4 class="mb-0 card-title title-dark text-light">
                  Payment plan
                </h4>
              </div>

              <div class="card-body">
                <div class="d-flex justify-content-center mb-4">
                  <span
                    class="price text-primary font-weight-bold display-4 mb-0"
                    >2</span
                  >
                  <span class="h4 mb-0 mt-2 text-primary">%</span>
                  <span
                    class="h6 align-self-end font-weight-bold text-uppercase mb-2 ml-2"
                  >
                    Per Transection</span
                  >
                </div>

                <ul class="feature list-inline">
                  <li class="h5 font-weight-normal">
                    <check-circle-icon
                      class="fea icon-ex-md text-primary mr-2"
                    ></check-circle-icon
                    >Transparent payouts
                  </li>
                  <li class="h5 font-weight-normal">
                    <check-circle-icon
                      class="fea icon-ex-md text-primary mr-2"
                    ></check-circle-icon
                    >Deposit tagging
                  </li>
                  <li class="h5 font-weight-normal">
                    <check-circle-icon
                      class="fea icon-ex-md text-primary mr-2"
                    ></check-circle-icon
                    >Control payout timing
                  </li>
                  <li class="h5 font-weight-normal">
                    <check-circle-icon
                      class="fea icon-ex-md text-primary mr-2"
                    ></check-circle-icon
                    >24×7 support
                  </li>
                </ul>

                <a
                  href="javascript:void(0)"
                  class="btn btn-primary btn-block mt-4 pt-2"
                  >Payment Now</a
                >
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-7 col-md-6 col-12 mt-4 pt-2">
            <div class="card rounded border-0 shadow">
              <div class="bg-light p-4 text-center rounded-top">
                <h4 class="mb-0 card-title text-primary">Add a new card</h4>
              </div>

              <div class="card-body">
                <form>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Name of card holder : </label>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          class="form-control font-weight-bold"
                          required
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <!--end col-->
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Card Number :</label>
                        <input
                          type="number"
                          min="0"
                          autocomplete="off"
                          id="cardnumber"
                          class="form-control font-weight-bold"
                          required
                          placeholder="0000 0000 0000 0000"
                        />
                      </div>
                    </div>
                    <!--end col-->
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Expires End :</label>
                        <input
                          type="number"
                          min="0"
                          autocomplete="off"
                          id="exdate"
                          class="form-control font-weight-bold"
                          required
                          placeholder="MM/YY"
                        />
                      </div>
                    </div>
                    <!--end col-->
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>CVV :</label>
                        <input
                          type="number"
                          min="0"
                          autocomplete="off"
                          id="cvv"
                          class="form-control font-weight-bold"
                          required
                          placeholder="CVV"
                        />
                      </div>
                    </div>
                    <!--end col-->
                  </div>
                  <!--end row-->
                  <div class="row">
                    <div class="col-sm-12">
                      <input
                        type="submit"
                        id="submit"
                        name="send"
                        class="submitBnt btn btn-primary"
                        value="Add Card"
                      />
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
      <!-- Payment and Price End -->
    </section>
    <!--end section-->
    <!-- section End -->

    <!-- Start -->
    <section class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title">
              <h4 class="title mb-4">
                Connect your business with more customers today
              </h4>
              <p class="text-muted para-desc mb-0 mx-auto">
                Start working with
                <span class="text-primary font-weight-bold">Landrick</span> that
                can provide everything you need to generate awareness, drive
                traffic, connect.
              </p>
            </div>

            <div class="contact-detail mt-5">
              <div class="content mt-3 overflow-hidden d-block">
                <h5 class="text-muted">
                  Want to talk now ?
                  <a href="tel:+152534-468-854" class="text-primary h5"
                    >+152 534-468-854</a
                  >
                </h5>
              </div>
              <a
                href="https://1.envato.market/4n73n"
                target="_blank"
                class="btn btn-primary mt-3"
                >Get Started
                <span class="badge badge-pill badge-danger ml-2">v2.5</span></a
              >
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
