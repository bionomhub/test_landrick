<script>
import {
  ArrowUpIcon,
  UserIcon,
  BookIcon,
  MessageCircleIcon,
  MailIcon,
} from "vue-feather-icons";

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";

/**
 * Helpcenter-support-request component
 */
export default {
  data() {
    return {};
  },
  components: {
    Navbar,
    Switcher,
    ArrowUpIcon,
    UserIcon,
    BookIcon,
    MessageCircleIcon,
    MailIcon,
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
              <h4 class="title">Submit your Support Request</h4>

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
                      Support
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
        <div class="row justify-content-center">
          <div class="col-lg-7 col-12">
            <div class="rounded p-4 shadow">
              <div class="row">
                <div class="col-12">
                  <form>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label
                            >Your Name <span class="text-danger">*</span></label
                          >
                          <div class="position-relative">
                            <user-icon class="fea icon-sm icons"></user-icon>
                            <input
                              name="name"
                              id="name"
                              type="text"
                              class="form-control pl-5"
                              placeholder="First Name :"
                            />
                          </div>
                        </div>
                      </div>
                      <!--end col-->
                      <div class="col-md-6">
                        <div class="form-group">
                          <label
                            >Your Email
                            <span class="text-danger">*</span></label
                          >
                          <div class="position-relative">
                            <mail-icon class="fea icon-sm icons"></mail-icon>
                            <input
                              name="email"
                              id="email"
                              type="email"
                              class="form-control pl-5"
                              placeholder="Your email :"
                            />
                          </div>
                        </div>
                      </div>
                      <!--end col-->
                      <div class="col-md-12">
                        <div class="form-group">
                          <label>Subject</label>
                          <div class="position-relative">
                            <book-icon class="fea icon-sm icons"></book-icon>
                            <input
                              name="subject"
                              id="subject"
                              class="form-control pl-5"
                              placeholder="Your subject :"
                            />
                          </div>
                        </div>
                      </div>
                      <!--end col-->
                      <div class="col-md-12">
                        <div class="form-group">
                          <label>Comments</label>
                          <div class="position-relative">
                            <message-circle-icon
                              class="fea icon-sm icons"
                            ></message-circle-icon>
                            <textarea
                              name="comments"
                              id="comments"
                              rows="4"
                              class="form-control pl-5"
                              placeholder="Your Message :"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--end row-->
                    <div class="row">
                      <div class="col-sm-12">
                        <input
                          type="submit"
                          id="submit"
                          name="send"
                          class="btn btn-primary"
                          value="Send Request"
                        />
                      </div>
                      <!--end col-->
                    </div>
                    <!--end row-->
                  </form>
                  <!--end form-->
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

      <div class="container mt-100 mt-60">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-12">
            <div class="media align-items-center features feature-clean shadow rounded p-4">
               <div class="icons text-primary text-center">
                                <i class="uil uil-envelope-check d-block rounded h3 mb-0"></i>
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
            <div class="media align-items-center features feature-clean shadow rounded p-4">
              <div class="icons text-primary text-center">
                <i class="uil uil-webcam d-block rounded h3 mb-0"></i>
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
