<script>
import {
  ArrowUpIcon,
  UserIcon,
  MailIcon,
  BookIcon,
  MessageCircleIcon,
} from "vue-feather-icons";

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";

/**
 * Page-contact-one component
 */
export default {
  data() {
    return {};
  },
  components: {
    Navbar,
    Switcher,
    Footer,
    UserIcon,
    ArrowUpIcon,
    MailIcon,
    BookIcon,
    MessageCircleIcon,
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
              <h4 class="title">Contact Us</h4>
              <div class="page-next">
                <nav aria-label="breadcrumb" class="d-inline-block">
                  <ul class="breadcrumb bg-white rounded shadow mb-0">
                    <li class="breadcrumb-item">
                      <router-link to="/">Landrick</router-link>
                    </li>
                    <li class="breadcrumb-item"><a href="#">Page</a></li>
                    <li class="breadcrumb-item"><a href="#">Contact</a></li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Contact One
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

    <!-- Shape Start -->
    <div class="position-relative">
      <div class="shape overflow-hidden text-white">
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
    <!--Shape End-->

    <!-- Start Contact -->
    <section class="section pb-0">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="card border-0 text-center features feature-clean">
              <div class="icons text-primary text-center mx-auto">
                <i class="uil uil-phone d-block rounded h3 mb-0"></i>
              </div>
              <div class="content mt-3">
                <h5 class="font-weight-bold">Phone</h5>
                <p class="text-muted">
                  Start working with Landrick that can provide everything
                </p>
                <a href="tel:+152534-468-854" class="text-primary"
                  >+152 534-468-854</a
                >
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="card border-0 text-center features feature-clean">
              <div class="icons text-primary text-center mx-auto">
                <i class="uil uil-envelope d-block rounded h3 mb-0"></i>
              </div>
              <div class="content mt-3">
                <h5 class="font-weight-bold">Email</h5>
                <p class="text-muted">
                  Start working with Landrick that can provide everything
                </p>
                <a href="mailto:contact@example.com" class="text-primary"
                  >contact@example.com</a
                >
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="card border-0 text-center features feature-clean">
              <div class="icons text-primary text-center mx-auto">
                <i class="uil uil-map-marker d-block rounded h3 mb-0"></i>
              </div>
              <div class="content mt-3">
                <h5 class="font-weight-bold">Location</h5>
                <p class="text-muted">
                  C/54 Northwest Freeway, Suite 558, <br />Houston, USA 485
                </p>
                <a
                  href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                  class="video-play-icon h6 text-primary"
                  >View on Google map</a
                >
              </div>
            </div>
          </div>
        </div>
        <!--end col-->
        <!--end row-->
      </div>
      <!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row align-items-center">
          <div class="col-lg-5 col-md-6 pt-2 pt-sm-0 order-2 order-md-1">
            <div class="card shadow rounded border-0">
              <div class="card-body py-5">
                <h4 class="card-title">Get In Touch !</h4>
                <div class="custom-form mt-4">
                  <div id="message"></div>
                  <form name="contact-form" id="contact-form">
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
                              type="text"
                              class="form-control pl-5"
                              placeholder="Subject"
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
                      <div class="col-sm-12 text-center">
                        <input
                          type="button"
                          id="submit"
                          name="send"
                          class="submitBnt btn btn-primary btn-block"
                          value="Send Message"
                        />
                        <div id="simple-msg"></div>
                      </div>
                      <!--end col-->
                    </div>
                    <!--end row-->
                  </form>
                  <!--end form-->
                </div>
                <!--end custom-form-->
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-7 col-md-6 order-1 order-md-2">
            <div class="card border-0">
              <div class="card-body p-0">
                <img src="images/contact.svg" class="img-fluid" alt="" />
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->

      <div class="container-fluid mt-100 mt-60">
        <div class="row">
          <div class="col-12 p-0">
            <div class="card map border-0">
              <div class="card-body p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                  style="border: 0"
                  allowfullscreen
                ></iframe>
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
    <!-- End contact -->
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
