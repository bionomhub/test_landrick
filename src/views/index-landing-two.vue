<script>
import { ArrowUpIcon, ChevronRightIcon } from "vue-feather-icons";

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";
import News from "@/components/news";

/**
 * Index-landing-two component
 */
export default {
  data() {
    return {};
  },
  components: {
    Navbar,
    Switcher,
    Footer,
    News,
    ArrowUpIcon,
    ChevronRightIcon,
  },
};
</script>

<template>
  <div>
    <Navbar />
    <!-- Hero Start -->
    <section class="bg-half-170 d-table w-100">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <div class="title-heading mt-4">
              <h1 class="display-4 font-weight-bold mb-3">
                Powerfull landing <br />
                for your website
              </h1>
              <p class="para-desc text-muted">
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered bootstrap4 html page.
              </p>

              <div class="subcribe-form mt-4 pt-2">
                <form>
                  <div class="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      class="border bg-white rounded-pill"
                      required
                      placeholder="Email Address"
                    />
                    <button type="submit" class="btn btn-pills btn-primary">
                      Get Started
                    </button>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <div class="form-group">
                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck1"
                          />
                          <label class="custom-control-label" for="customCheck1"
                            >I Accept
                            <a href="#" class="text-primary"
                              >Terms And Condition</a
                            ></label
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-md-6">
            <img src="images/illustrator/Creativity-bro.svg" alt="" />
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <div class="position-relative">
      <div class="shape overflow-hidden text-light">
        <svg
          viewBox="0 0 2880 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
    <!-- Hero End -->

    <section class="section bg-light">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h6 class="text-primary">Features</h6>
              <h4 class="title mb-4">Explore awesome features</h4>
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
          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <div
              class="card features feature-clean explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center"
            >
              <div class="icons rounded h2 text-center text-primary px-3">
                <i class="uil uil-airplay"></i>
              </div>

              <div class="card-body p-0 content">
                <h5 class="mt-4">
                  <a href="javascript:void(0)" class="title text-dark"
                    >Design & Development</a
                  >
                </h5>
                <p class="text-muted">
                  The most well-known dummy text is the 'Lorem Ipsum', which is
                  said to have originated
                </p>

                <a href="javascript:void(0)" class="text-primary"
                  >Read More
                  <chevron-right-icon class="fea icon-sm"></chevron-right-icon
                ></a>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <div
              class="card features feature-clean explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center"
            >
              <div class="icons rounded h2 text-center text-primary px-3">
                <i class="uil uil-clipboard-alt"></i>
              </div>

              <div class="card-body p-0 content">
                <h5 class="mt-4">
                  <a href="javascript:void(0)" class="title text-dark"
                    >Management & Marketing</a
                  >
                </h5>
                <p class="text-muted">
                  The most well-known dummy text is the 'Lorem Ipsum', which is
                  said to have originated
                </p>

                <a href="javascript:void(0)" class="text-primary"
                  >Read More
                  <chevron-right-icon class="fea icon-sm"></chevron-right-icon
                ></a>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <div
              class="card features feature-clean explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center"
            >
              <div class="icons rounded h2 text-center text-primary px-3">
                <i class="uil uil-credit-card-search"></i>
              </div>

              <div class="card-body p-0 content">
                <h5 class="mt-4">
                  <a href="javascript:void(0)" class="title text-dark"
                    >Stratagy & Research</a
                  >
                </h5>
                <p class="text-muted">
                  The most well-known dummy text is the 'Lorem Ipsum', which is
                  said to have originated
                </p>

                <a href="javascript:void(0)" class="text-primary"
                  >Read More
                  <chevron-right-icon class="fea icon-sm"></chevron-right-icon
                ></a>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <div
              class="card features feature-clean explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center"
            >
              <div class="icons rounded h2 text-center text-primary px-3">
                <i class="uil uil-ruler-combined"></i>
              </div>

              <div class="card-body p-0 content">
                <h5 class="mt-4">
                  <a href="javascript:void(0)" class="title text-dark"
                    >Easy To Use</a
                  >
                </h5>
                <p class="text-muted">
                  The most well-known dummy text is the 'Lorem Ipsum', which is
                  said to have originated
                </p>

                <a href="javascript:void(0)" class="text-primary"
                  >Read More
                  <chevron-right-icon class="fea icon-sm"></chevron-right-icon
                ></a>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <div
              class="card features feature-clean explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center"
            >
              <div class="icons rounded h2 text-center text-primary px-3">
                <i class="uil uil-exposure-alt"></i>
              </div>

              <div class="card-body p-0 content">
                <h5 class="mt-4">
                  <a href="javascript:void(0)" class="title text-dark"
                    >Daily Reports</a
                  >
                </h5>
                <p class="text-muted">
                  The most well-known dummy text is the 'Lorem Ipsum', which is
                  said to have originated
                </p>

                <a href="javascript:void(0)" class="text-primary"
                  >Read More
                  <chevron-right-icon class="fea icon-sm"></chevron-right-icon
                ></a>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <div
              class="card features feature-clean explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center"
            >
              <div class="icons rounded h2 text-center text-primary px-3">
                <i class="uil uil-clock"></i>
              </div>

              <div class="card-body p-0 content">
                <h5 class="mt-4">
                  <a href="javascript:void(0)" class="title text-dark"
                    >Real Time Zone</a
                  >
                </h5>
                <p class="text-muted">
                  The most well-known dummy text is the 'Lorem Ipsum', which is
                  said to have originated
                </p>

                <a href="javascript:void(0)" class="text-primary"
                  >Read More
                  <chevron-right-icon class="fea icon-sm"></chevron-right-icon
                ></a>
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
          <div class="col-lg-5 col-md-6">
            <img
              src="images/landing/1.jpg"
              class="img-fluid rounded-md shadow-lg"
              alt=""
            />
          </div>
          <!--end col-->

          <div class="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div class="section-title text-md-left text-center ml-lg-4">
              <h4 class="title mb-4">
                Collaborate with your <br />
                team anytime and anywhare.
              </h4>
              <p class="text-muted mb-0 para-desc">
                Start working with
                <span class="text-primary font-weight-bold">Landrick</span> that
                can provide everything you need to generate awareness, drive
                traffic, connect.
              </p>

              <div class="media align-items-center text-left mt-4 pt-2">
                <div
                  class="text-primary h4 mb-0 mr-3 p-3 rounded-md shadow bg-white"
                >
                  <i class="uil uil-capture"></i>
                </div>
                <div class="media-body">
                  <a href="javascript:void(0)" class="text-dark h6"
                    >Find Better Leads</a
                  >
                </div>
              </div>

              <div class="media align-items-center text-left mt-4">
                <div
                  class="text-primary h4 mb-0 mr-3 p-3 rounded-md shadow bg-white"
                >
                  <i class="uil uil-file"></i>
                </div>
                <div class="media-body">
                  <a href="javascript:void(0)" class="text-dark h6"
                    >Set Instant Metting</a
                  >
                </div>
              </div>

              <div class="media align-items-center text-left mt-4">
                <div
                  class="text-primary h4 mb-0 mr-3 p-3 rounded-md shadow bg-white"
                >
                  <i class="uil uil-credit-card-search"></i>
                </div>
                <div class="media-body">
                  <a href="javascript:void(0)" class="text-dark h6"
                    >Get Paid Seemlessly</a
                  >
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

    <section class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-12">
            <div class="sticky-bar">
              <div
                class="section-title text-lg-left text-center mb-4 mb-lg-0 pb-2 pb-lg-0"
              >
                <h6 class="text-primary">Reviews</h6>
                <h4 class="title mb-4">People love us</h4>
                <p class="text-muted para-desc mb-0 mx-auto">
                  Start working with
                  <span class="text-primary font-weight-bold">Landrick</span>
                  that can provide everything you need to generate awareness,
                  drive traffic, connect.
                </p>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-8 col-12">
            <div class="row align-items-center">
              <div class="col-md-6">
                <div class="row">
                  <div class="col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                    <div class="media customer-testi">
                      <img
                        src="images/client/01.jpg"
                        class="avatar avatar-small mr-3 rounded shadow"
                        alt=""
                      />
                      <div
                        class="media-body content p-3 shadow rounded bg-white position-relative"
                      >
                        <ul class="list-unstyled mb-0">
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
                        <p class="text-muted mt-2">
                          " It seems that only fragments of the original text
                          remain in the Lorem Ipsum texts used today. "
                        </p>
                        <h6 class="text-primary">
                          - Thomas Israel
                          <small class="text-muted">C.E.O</small>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <!--end col-->

                  <div class="col-12 mt-4 pt-2">
                    <div class="media customer-testi">
                      <img
                        src="images/client/02.jpg"
                        class="avatar avatar-small mr-3 rounded shadow"
                        alt=""
                      />
                      <div
                        class="media-body content p-3 shadow rounded bg-white position-relative"
                      >
                        <ul class="list-unstyled mb-0">
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
                            <i class="mdi mdi-star-half text-warning"></i>
                          </li>
                        </ul>
                        <p class="text-muted mt-2">
                          " One disadvantage of Lorum Ipsum is that in Latin
                          certain letters appear more frequently than others. "
                        </p>
                        <h6 class="text-primary">
                          - Barbara McIntosh
                          <small class="text-muted">M.D</small>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <!--end col-->

                  <div class="col-12 mt-4 pt-2">
                    <div class="media customer-testi">
                      <img
                        src="images/client/03.jpg"
                        class="avatar avatar-small mr-3 rounded shadow"
                        alt=""
                      />
                      <div
                        class="media-body content p-3 shadow rounded bg-white position-relative"
                      >
                        <ul class="list-unstyled mb-0">
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
                        <p class="text-muted mt-2">
                          " The most well-known dummy text is the 'Lorem Ipsum',
                          which is said to have originated in the 16th century.
                          "
                        </p>
                        <h6 class="text-primary">
                          - Carl Oliver <small class="text-muted">P.A</small>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <!--end col-->
                </div>
                <!--end row-->
              </div>
              <!--end col-->

              <div class="col-md-6">
                <div class="row">
                  <div class="col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div class="media customer-testi">
                      <img
                        src="images/client/04.jpg"
                        class="avatar avatar-small mr-3 rounded shadow"
                        alt=""
                      />
                      <div
                        class="media-body content p-3 shadow rounded bg-white position-relative"
                      >
                        <ul class="list-unstyled mb-0">
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
                        <p class="text-muted mt-2">
                          " According to most sources, Lorum Ipsum can be traced
                          back to a text composed by Cicero. "
                        </p>
                        <h6 class="text-primary">
                          - Christa Smith
                          <small class="text-muted">Manager</small>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <!--end col-->

                  <div class="col-12 mt-4 pt-2">
                    <div class="media customer-testi">
                      <img
                        src="images/client/05.jpg"
                        class="avatar avatar-small mr-3 rounded shadow"
                        alt=""
                      />
                      <div
                        class="media-body content p-3 shadow rounded bg-white position-relative"
                      >
                        <ul class="list-unstyled mb-0">
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
                        <p class="text-muted mt-2">
                          " There is now an abundance of readable dummy texts.
                          These are usually used when a text is required. "
                        </p>
                        <h6 class="text-primary">
                          - Dean Tolle
                          <small class="text-muted">Developer</small>
                        </h6>
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
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">Latest News</h4>
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
    </section>
    <!--end section-->
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
