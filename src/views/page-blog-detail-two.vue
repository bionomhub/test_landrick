<script>
import {
  ArrowUpIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
  MessageCircleIcon,
  MailIcon,
  UserIcon,
} from "vue-feather-icons";
import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";

/**
 * Page-blog-detail-two component
 */
export default {
  data() {
    return {};
  },
  components: {
    Navbar,
    Switcher,
    Footer,
    ArrowUpIcon,
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    LinkedinIcon,
    MessageCircleIcon,
    MailIcon,
    UserIcon,
  },
};
</script>

<template>
  <div>
    <Navbar :nav-light="true" />
    <!-- Hero Start -->
    <section
      class="bg-half d-table w-100"
      style="background: url('images/1.jpg') center center"
    >
      <div class="bg-overlay"></div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12 text-center">
            <div class="page-next-level">
              <h4 class="title text-white title-dark">
                Smartest Applications for <br />Your Business
              </h4>
              <div class="page-next">
                <nav aria-label="breadcrumb" class="d-inline-block">
                  <ul class="breadcrumb bg-white rounded shadow mb-0">
                    <li class="breadcrumb-item">
                      <router-link to="/">Landrick</router-link>
                    </li>
                    <li class="breadcrumb-item"><a href="#">Blog</a></li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Blog Details
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
    <!-- Hero End -->

    <section class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="row">
              <div class="col-md-2 d-none d-md-block">
                <ul
                  class="list-unstyled text-center sticky-bar social-icon mb-0"
                >
                  <li class="mb-3 h6">Share</li>
                  <li>
                    <a href="javascript:void(0)" class="rounded">
                      <facebook-icon
                        class="fea icon-sm fea-social"
                      ></facebook-icon>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="rounded">
                      <instagram-icon
                        class="fea icon-sm fea-social"
                      ></instagram-icon>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="rounded">
                      <twitter-icon
                        class="fea icon-sm fea-social"
                      ></twitter-icon>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="rounded">
                      <linkedin-icon
                        class="fea icon-sm fea-social"
                      ></linkedin-icon>
                    </a>
                  </li>
                </ul>
                <!--end icon-->
              </div>

              <div class="col-md-10">
                <p class="text-muted">
                  This is required when, for example, the final text is not yet
                  available. Dummy text is also known as 'fill text'. It is said
                  that song composers of the past used dummy texts as lyrics
                  when writing melodies in order to have a 'ready-made' text to
                  sing with the melody.
                </p>

                <ul class="list-unstyled d-flex justify-content-between mt-4">
                  <li class="list-inline-item user mr-2">
                    <a href="javascript:void(0)" class="text-muted"
                      ><i class="mdi mdi-account text-dark"></i> Calvin Carlo</a
                    >
                  </li>
                  <li class="list-inline-item date text-muted">
                    <i class="mdi mdi-calendar-check text-dark"></i> 13th
                    August, 2019
                  </li>
                </ul>

                <img
                  src="images/blog/bg1.jpg"
                  class="img-fluid rounded-md shadow"
                  alt=""
                />

                <h5 class="mt-4">
                  Mornings contain the secret to an extraordinarily successful
                  life
                </h5>

                <p class="text-muted">
                  Due to its widespread use as filler text for layouts,
                  non-readability is of great importance: human perception is
                  tuned to recognize certain patterns and repetitions in texts.
                  If the distribution of letters and 'words' is random, the
                  reader will not be distracted from making a neutral judgement
                  on the visual impact and readability of the typefaces
                  (typography), or the distribution of text on the page (layout
                  or type area).
                </p>

                <h5 class="mt-4">Comments :</h5>

                <ul class="media-list list-unstyled mb-0">
                  <li class="mt-4">
                    <div class="d-flex justify-content-between">
                      <div class="media align-items-center">
                        <a class="pr-3" href="#">
                          <img
                            src="images/client/01.jpg"
                            class="img-fluid avatar avatar-md-sm rounded-circle shadow"
                            alt="img"
                          />
                        </a>
                        <div class="commentor-detail">
                          <h6 class="mb-0">
                            <a
                              href="javascript:void(0)"
                              class="text-dark media-heading"
                              >Lorenzo Peterson</a
                            >
                          </h6>
                          <small class="text-muted"
                            >15th August, 2019 at 01:25 pm</small
                          >
                        </div>
                      </div>
                      <a href="#" class="text-muted"
                        ><i class="mdi mdi-reply"></i> Reply</a
                      >
                    </div>
                    <div class="mt-3">
                      <p class="text-muted font-italic p-3 bg-light rounded">
                        " There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour "
                      </p>
                    </div>
                  </li>

                  <li class="mt-4">
                    <div class="d-flex justify-content-between">
                      <div class="media align-items-center">
                        <a class="pr-3" href="#">
                          <img
                            src="images/client/02.jpg"
                            class="img-fluid avatar avatar-md-sm rounded-circle shadow"
                            alt="img"
                          />
                        </a>
                        <div class="commentor-detail">
                          <h6 class="mb-0">
                            <a
                              href="javascript:void(0)"
                              class="media-heading text-dark"
                              >Tammy Camacho</a
                            >
                          </h6>
                          <small class="text-muted"
                            >15th August, 2019 at 05:44 pm</small
                          >
                        </div>
                      </div>
                      <a href="#" class="text-muted"
                        ><i class="mdi mdi-reply"></i> Reply</a
                      >
                    </div>
                    <div class="mt-3">
                      <p class="text-muted font-italic p-3 bg-light rounded">
                        " There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour "
                      </p>
                    </div>
                  </li>

                  <li class="mt-4">
                    <div class="d-flex justify-content-between">
                      <div class="media align-items-center">
                        <a class="pr-3" href="#">
                          <img
                            src="images/client/03.jpg"
                            class="img-fluid avatar avatar-md-sm rounded-circle shadow"
                            alt="img"
                          />
                        </a>
                        <div class="commentor-detail">
                          <h6 class="mb-0">
                            <a
                              href="javascript:void(0)"
                              class="media-heading text-dark"
                              >Tammy Camacho</a
                            >
                          </h6>
                          <small class="text-muted"
                            >16th August, 2019 at 03:44 pm</small
                          >
                        </div>
                      </div>
                      <a href="#" class="text-muted"
                        ><i class="mdi mdi-reply"></i> Reply</a
                      >
                    </div>
                    <div class="mt-3">
                      <p class="text-muted font-italic p-3 bg-light rounded">
                        " There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour "
                      </p>
                    </div>

                    <ul class="list-unstyled pl-4 pl-md-5 sub-comment">
                      <li class="mt-4">
                        <div class="d-flex justify-content-between">
                          <div class="media align-items-center">
                            <a class="pr-3" href="#">
                              <img
                                src="images/client/01.jpg"
                                class="img-fluid avatar avatar-md-sm rounded-circle shadow"
                                alt="img"
                              />
                            </a>
                            <div class="commentor-detail">
                              <h6 class="mb-0">
                                <a
                                  href="javascript:void(0)"
                                  class="text-dark media-heading"
                                  >Lorenzo Peterson</a
                                >
                              </h6>
                              <small class="text-muted"
                                >17th August, 2019 at 01:25 pm</small
                              >
                            </div>
                          </div>
                          <a href="#" class="text-muted"
                            ><i class="mdi mdi-reply"></i> Reply</a
                          >
                        </div>
                        <div class="mt-3">
                          <p
                            class="text-muted font-italic p-3 bg-light rounded"
                          >
                            " There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered
                            alteration in some form, by injected humour "
                          </p>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>

                <h5 class="mt-4">Leave A Comment :</h5>

                <form class="mt-3">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Your Comment</label>
                        <div class="position-relative">
                          <message-circle-icon
                            class="fea icon-sm icons"
                          ></message-circle-icon>
                          <textarea
                            id="message"
                            placeholder="Your Comment"
                            rows="5"
                            name="message"
                            class="form-control pl-5"
                            required=""
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <!--end col-->

                    <div class="col-lg-6">
                      <div class="form-group">
                        <label>Name <span class="text-danger">*</span></label>
                        <div class="position-relative">
                          <user-icon class="fea icon-sm icons"></user-icon>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Name"
                            class="form-control pl-5"
                            required=""
                          />
                        </div>
                      </div>
                    </div>
                    <!--end col-->

                    <div class="col-lg-6">
                      <div class="form-group">
                        <label
                          >Your Email <span class="text-danger">*</span></label
                        >
                        <div class="position-relative">
                          <mail-icon class="fea icon-sm icons"></mail-icon>
                          <input
                            id="email"
                            type="email"
                            placeholder="Email"
                            name="email"
                            class="form-control pl-5"
                            required=""
                          />
                        </div>
                      </div>
                    </div>
                    <!--end col-->

                    <div class="col-md-12">
                      <div class="send">
                        <button type="submit" class="btn btn-primary btn-block">
                          Send Message
                        </button>
                      </div>
                    </div>
                    <!--end col-->
                  </div>
                  <!--end row-->
                </form>
                <!--end form-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

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
