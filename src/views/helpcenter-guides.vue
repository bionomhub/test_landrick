<script>
import { ArrowUpIcon } from "vue-feather-icons";

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
/**
 * Helpcenter-guides component
 */
export default {
  data() {
    return {};
  },
  components: {
    Navbar,
    Switcher,
    ArrowUpIcon,
  },
};
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
              <h4 class="title">Guides & Support</h4>

              <div class="page-next">
                <nav aria-label="breadcrumb" class="d-inline-block">
                  <ul class="breadcrumb bg-white rounded shadow mb-0">
                    <li class="breadcrumb-item">
                      <router-link to="/">Landrick</router-link>
                    </li>
                    <li class="breadcrumb-item">
                      <router-link to="/helpcenter-overview"
                        >Help Center</router-link
                      >
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Guides
                    </li>
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
    <!-- Hero End -->

    <!-- Start Section -->
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-12">
            <h5>Getting started</h5>
            <ul class="list-unstyled mt-4 mb-0">
              <li class="mt-2">
                <a href="javascript:void(0)" class="text-muted"
                  ><i class="mdi mdi-arrow-right text-primary mr-1"></i>Deciding
                  to purchase</a
                >
              </li>
              <li class="mt-2">
                <a href="javascript:void(0)" class="text-muted"
                  ><i class="mdi mdi-arrow-right text-primary mr-1"></i>List
                  your space</a
                >
              </li>
              <li class="mt-2">
                <a href="javascript:void(0)" class="text-muted"
                  ><i class="mdi mdi-arrow-right text-primary mr-1"></i>Landing
                  an experience or adventure</a
                >
              </li>
              <li class="mt-2">
                <a href="javascript:void(0)" class="text-muted"
                  ><i class="mdi mdi-arrow-right text-primary mr-1"></i>Top uses
                  questions</a
                >
              </li>
            </ul>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h5>Your calendar</h5>
            <ul class="list-unstyled mt-4 mb-0">
              <li class="mt-2">
                <a href="javascript:void(0)" class="text-muted"
                  ><i class="mdi mdi-arrow-right text-primary mr-1"></i>Pricing
                  & availability</a
                >
              </li>
              <li class="mt-2">
                <a href="javascript:void(0)" class="text-muted"
                  ><i class="mdi mdi-arrow-right text-primary mr-1"></i>Booking
                  settings</a
                >
              </li>
              <li class="mt-2">
                <a href="javascript:void(0)" class="text-muted"
                  ><i class="mdi mdi-arrow-right text-primary mr-1"></i
                  >Responding to enquiries & requests</a
                >
              </li>
              <li class="mt-2">
                <a href="javascript:void(0)" class="text-muted"
                  ><i class="mdi mdi-arrow-right text-primary mr-1"></i>Snoozing
                  or deactivating your listing</a
                >
              </li>
            </ul>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0 pt-2">
            <h5>Your listings</h5>
            <ul class="list-unstyled mt-4 mb-0">
              <li class="mt-2">
                <a href="javascript:void(0)" class="text-muted"
                  ><i class="mdi mdi-arrow-right text-primary mr-1"></i>Updating
                  your listing</a
                >
              </li>
              <li class="mt-2">
                <a href="javascript:void(0)" class="text-muted"
                  ><i class="mdi mdi-arrow-right text-primary mr-1"></i
                  >Neighbourhoods</a
                >
              </li>
              <li class="mt-2">
                <a href="javascript:void(0)" class="text-muted"
                  ><i class="mdi mdi-arrow-right text-primary mr-1"></i>Listing
                  photos & photography</a
                >
              </li>
              <li class="mt-2">
                <a href="javascript:void(0)" class="text-muted"
                  ><i class="mdi mdi-arrow-right text-primary mr-1"></i>Landrick
                  Plus</a
                >
              </li>
              <li class="mt-2">
                <a href="javascript:void(0)" class="text-muted"
                  ><i class="mdi mdi-arrow-right text-primary mr-1"></i
                  >API-connected software</a
                >
              </li>
            </ul>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <h5>How payouts work</h5>
            <ul class="list-unstyled mt-4 mb-0">
              <li class="mt-2">
                <a href="javascript:void(0)" class="text-muted"
                  ><i class="mdi mdi-arrow-right text-primary mr-1"></i>Getting
                  paid</a
                >
              </li>
              <li class="mt-2">
                <a href="javascript:void(0)" class="text-muted"
                  ><i class="mdi mdi-arrow-right text-primary mr-1"></i>Adding
                  payout info</a
                >
              </li>
              <li class="mt-2">
                <a href="javascript:void(0)" class="text-muted"
                  ><i class="mdi mdi-arrow-right text-primary mr-1"></i>Your
                  payout status</a
                >
              </li>
              <li class="mt-2">
                <a href="javascript:void(0)" class="text-muted"
                  ><i class="mdi mdi-arrow-right text-primary mr-1"></i
                  >Donations</a
                >
              </li>
              <li class="mt-2">
                <a href="javascript:void(0)" class="text-muted"
                  ><i class="mdi mdi-arrow-right text-primary mr-1"></i>Taxes</a
                >
              </li>
            </ul>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <h5>Your reservations</h5>
            <ul class="list-unstyled mt-4 mb-0">
              <li class="mt-2">
                <a href="javascript:void(0)" class="text-muted"
                  ><i class="mdi mdi-arrow-right text-primary mr-1"></i>Landrick
                  safely</a
                >
              </li>
              <li class="mt-2">
                <a href="javascript:void(0)" class="text-muted"
                  ><i class="mdi mdi-arrow-right text-primary mr-1"></i>Landrick
                  Experiences and Adventures</a
                >
              </li>
              <li class="mt-2">
                <a href="javascript:void(0)" class="text-muted"
                  ><i class="mdi mdi-arrow-right text-primary mr-1"></i>Changing
                  a reservation</a
                >
              </li>
              <li class="mt-2">
                <a href="javascript:void(0)" class="text-muted"
                  ><i class="mdi mdi-arrow-right text-primary mr-1"></i
                  >Cancelling a reservation</a
                >
              </li>
              <li class="mt-2">
                <a href="javascript:void(0)" class="text-muted"
                  ><i class="mdi mdi-arrow-right text-primary mr-1"></i
                  >Long-term reservations</a
                >
              </li>
            </ul>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <h5>Reservation help</h5>
            <ul class="list-unstyled mt-4 mb-0">
              <li class="mt-2">
                <a href="javascript:void(0)" class="text-muted"
                  ><i class="mdi mdi-arrow-right text-primary mr-1"></i>Help
                  with a reservation or guest</a
                >
              </li>
              <li class="mt-2">
                <a href="javascript:void(0)" class="text-muted"
                  ><i class="mdi mdi-arrow-right text-primary mr-1"></i>Guest
                  cancellations</a
                >
              </li>
            </ul>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <h5>Your account</h5>
            <ul class="list-unstyled mt-4 mb-0">
              <li class="mt-2">
                <a href="javascript:void(0)" class="text-muted"
                  ><i class="mdi mdi-arrow-right text-primary mr-1"></i>Your
                  profile</a
                >
              </li>
              <li class="mt-2">
                <a href="javascript:void(0)" class="text-muted"
                  ><i class="mdi mdi-arrow-right text-primary mr-1"></i>Account
                  security</a
                >
              </li>
              <li class="mt-2">
                <a href="javascript:void(0)" class="text-muted"
                  ><i class="mdi mdi-arrow-right text-primary mr-1"></i
                  >Identification & verifications</a
                >
              </li>
              <li class="mt-2">
                <a href="javascript:void(0)" class="text-muted"
                  ><i class="mdi mdi-arrow-right text-primary mr-1"></i
                  >Reviews</a
                >
              </li>
              <li class="mt-2">
                <a href="javascript:void(0)" class="text-muted"
                  ><i class="mdi mdi-arrow-right text-primary mr-1"></i
                  >Superhost status</a
                >
              </li>
            </ul>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-12">
            <div class="media align-items-center shadow rounded p-4 features">
              <div class="icons m-0 rounded h2 text-primary text-center px-3">
                <i class="uil uil-envelope-check"></i>
              </div>
              <div class="content ml-4">
                <h5 class="mb-1">
                  <a href="javascript:void(0)" class="text-dark"
                    >Get in Touch !</a
                  >
                </h5>
                <p class="text-muted mb-0">
                  This is required when, for text is not yet available.
                </p>
                <div class="mt-2">
                  <a
                    href="javascript:void(0)"
                    class="btn btn-sm btn-soft-primary"
                    >Submit a Request</a
                  >
                </div>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-6 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="media align-items-center shadow rounded p-4 features">
              <div class="icons m-0 rounded h2 text-primary text-center px-3">
                <i class="uil uil-webcam"></i>
              </div>
              <div class="content ml-4">
                <h5 class="mb-1">
                  <a href="javascript:void(0)" class="text-dark"
                    >Start a Meeting</a
                  >
                </h5>
                <p class="text-muted mb-0">
                  This is required when, for text is not yet available.
                </p>
                <div class="mt-2">
                  <a
                    href="javascript:void(0)"
                    class="btn btn-sm btn-soft-primary"
                    >Start Video Chat</a
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
    <!-- End Section -->
    <!--end section-->
    <footer class="footer footer-bar">
      <div class="container text-center">
        <div class="row align-items-center">
          <div class="col-sm-6">
            <div class="text-sm-left">
              <p class="mb-0">
                © {{ new Date().getFullYear() }} Landrick. Design with
                <i class="mdi mdi-heart text-danger"></i> by
                <a
                  href="https://www.themesbrand.com"
                  target="_blank"
                  class="text-reset"
                  >Themesbrand</a
                >.
              </p>
            </div>
          </div>
          <!--end col-->

          <div class="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <ul class="list-unstyled text-sm-right mb-0">
              <li class="list-inline-item">
                <a href="javascript:void(0)"
                  ><img
                    src="images/payments/american-ex.png"
                    class="avatar avatar-ex-sm"
                    title="American Express"
                    alt=""
                /></a>
              </li>
              <li class="list-inline-item ml-1">
                <a href="javascript:void(0)"
                  ><img
                    src="images/payments/discover.png"
                    class="avatar avatar-ex-sm"
                    title="Discover"
                    alt=""
                /></a>
              </li>
              <li class="list-inline-item ml-1">
                <a href="javascript:void(0)"
                  ><img
                    src="images/payments/master-card.png"
                    class="avatar avatar-ex-sm"
                    title="Master Card"
                    alt=""
                /></a>
              </li>
              <li class="list-inline-item ml-1">
                <a href="javascript:void(0)"
                  ><img
                    src="images/payments/paypal.png"
                    class="avatar avatar-ex-sm"
                    title="Paypal"
                    alt=""
                /></a>
              </li>
              <li class="list-inline-item ml-1">
                <a href="javascript:void(0)"
                  ><img
                    src="images/payments/visa.png"
                    class="avatar avatar-ex-sm"
                    title="Visa"
                    alt=""
                /></a>
              </li>
            </ul>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </footer>
    <!--end footer-->
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
