<script>
import {
  ArrowUpIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
  GithubIcon,
  YoutubeIcon,
  GitlabIcon,
  MessageCircleIcon,
  UserIcon,
  MailIcon,
} from "vue-feather-icons";

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";

/**
 * Page-blog-detail component
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
    GithubIcon,
    YoutubeIcon,
    GitlabIcon,
    MessageCircleIcon,
    UserIcon,
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
              <h2>Design your apps in your own way</h2>
              <ul class="list-unstyled mt-4">
                <li class="list-inline-item h6 user text-muted mr-2">
                  <i class="mdi mdi-account"></i> Calvin Carlo
                </li>
                <li class="list-inline-item h6 date text-muted">
                  <i class="mdi mdi-calendar-check"></i> 13th August, 2019
                </li>
              </ul>
              <div class="page-next">
                <nav aria-label="breadcrumb" class="d-inline-block">
                  <ul class="breadcrumb bg-white rounded shadow mb-0">
                    <li class="breadcrumb-item">
                      <router-link to="/">Landrick</router-link>
                    </li>
                    <li class="breadcrumb-item"><a href="#">Page</a></li>
                    <li class="breadcrumb-item"><a href="#">Blog</a></li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Blog Detail
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

    <!-- Blog STart -->
    <section class="section">
      <div class="container">
        <div class="row">
          <!-- BLog Start -->
          <div class="col-lg-8 col-md-6">
            <div class="card blog blog-detail border-0 shadow rounded">
              <img
                src="images/blog/01.jpg"
                class="img-fluid rounded-top"
                alt=""
              />
              <div class="card-body content">
                <h6>
                  <i class="mdi mdi-tag text-primary mr-1"></i
                  ><a href="javscript:void(0)" class="text-primary">Software</a
                  >,
                  <a href="javscript:void(0)" class="text-primary"
                    >Application</a
                  >
                </h6>
                <p class="text-muted mt-3">
                  The most well-known dummy text is the 'Lorem Ipsum', which is
                  said to have originated in the 16th century. Lorem Ipsum is
                  composed in a pseudo-Latin language which more or less
                  corresponds to 'proper' Latin. It contains a series of real
                  Latin words. This ancient dummy text is also incomprehensible,
                  but it imitates the rhythm of most European languages in Latin
                  script.
                </p>
                <blockquote class="blockquote mt-3 p-3">
                  <p class="text-muted mb-0 font-italic">
                    " There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. "
                  </p>
                </blockquote>
                <p class="text-muted">
                  The advantage of its Latin origin and the relative
                  meaninglessness of Lorum Ipsum is that the text does not
                  attract attention to itself or distract the viewer's attention
                  from the layout.
                </p>
                <div class="post-meta mt-3">
                  <ul class="list-unstyled mb-0">
                    <li class="list-inline-item mr-2">
                      <a href="javascript:void(0)" class="text-muted like"
                        ><i class="mdi mdi-heart-outline mr-1"></i>33</a
                      >
                    </li>
                    <li class="list-inline-item">
                      <a href="javascript:void(0)" class="text-muted comments"
                        ><i class="mdi mdi-comment-outline mr-1"></i>08</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="card shadow rounded border-0 mt-4">
              <div class="card-body">
                <h5 class="card-title mb-0">Comments :</h5>

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
              </div>
            </div>

            <div class="card shadow rounded border-0 mt-4">
              <div class="card-body">
                <h5 class="card-title mb-0">Related Posts :</h5>

                <div class="row">
                  <div class="col-lg-6 mt-4 pt-2">
                    <div class="card blog rounded border-0 shadow">
                      <div class="position-relative">
                        <img
                          src="images/blog/01.jpg"
                          class="card-img-top rounded-top"
                          alt="..."
                        />
                        <div class="overlay rounded-top bg-dark"></div>
                      </div>
                      <div class="card-body content">
                        <h5>
                          <a
                            href="javascript:void(0)"
                            class="card-title title text-dark"
                            >Design your apps in your own way</a
                          >
                        </h5>
                        <div
                          class="post-meta d-flex justify-content-between mt-3"
                        >
                          <ul class="list-unstyled mb-0">
                            <li class="list-inline-item mr-2 mb-0">
                              <a
                                href="javascript:void(0)"
                                class="text-muted like"
                                ><i class="mdi mdi-heart-outline mr-1"></i>33</a
                              >
                            </li>
                            <li class="list-inline-item">
                              <a
                                href="javascript:void(0)"
                                class="text-muted comments"
                                ><i class="mdi mdi-comment-outline mr-1"></i
                                >08</a
                              >
                            </li>
                          </ul>
                          <router-link
                            to="/page-blog-detail"
                            class="text-muted readmore"
                            >Read More <i class="mdi mdi-chevron-right"></i
                          ></router-link>
                        </div>
                      </div>
                      <div class="author">
                        <small class="text-light user d-block"
                          ><i class="mdi mdi-account"></i> Calvin Carlo</small
                        >
                        <small class="text-light date"
                          ><i class="mdi mdi-calendar-check"></i> 13th August,
                          2019</small
                        >
                      </div>
                    </div>
                  </div>
                  <!--end col-->

                  <div class="col-lg-6 mt-4 pt-2">
                    <div class="card blog rounded border-0 shadow">
                      <div class="position-relative">
                        <img
                          src="images/blog/02.jpg"
                          class="card-img-top rounded-top"
                          alt="..."
                        />
                        <div class="overlay rounded-top bg-dark"></div>
                      </div>
                      <div class="card-body content">
                        <h5>
                          <a
                            href="javascript:void(0)"
                            class="card-title title text-dark"
                            >How apps is changing the IT world</a
                          >
                        </h5>
                        <div
                          class="post-meta d-flex justify-content-between mt-3"
                        >
                          <ul class="list-unstyled mb-0">
                            <li class="list-inline-item mr-2 mb-0">
                              <a
                                href="javascript:void(0)"
                                class="text-muted like"
                                ><i class="mdi mdi-heart-outline mr-1"></i>33</a
                              >
                            </li>
                            <li class="list-inline-item">
                              <a
                                href="javascript:void(0)"
                                class="text-muted comments"
                                ><i class="mdi mdi-comment-outline mr-1"></i
                                >08</a
                              >
                            </li>
                          </ul>
                          <router-link
                            to="/page-blog-detail"
                            class="text-muted readmore"
                            >Read More <i class="mdi mdi-chevron-right"></i
                          ></router-link>
                        </div>
                      </div>
                      <div class="author">
                        <small class="text-light user d-block"
                          ><i class="mdi mdi-account"></i> Calvin Carlo</small
                        >
                        <small class="text-light date"
                          ><i class="mdi mdi-calendar-check"></i> 13th August,
                          2019</small
                        >
                      </div>
                    </div>
                  </div>
                  <!--end col-->
                </div>
                <!--end row-->
              </div>
            </div>

            <div class="card shadow rounded border-0 mt-4">
              <div class="card-body">
                <h5 class="card-title mb-0">Leave A Comment :</h5>

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
          <!-- BLog End -->

          <!-- START SIDEBAR -->
          <div class="col-lg-4 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="card border-0 sidebar sticky-bar rounded shadow">
              <div class="card-body">
                <!-- SEARCH -->
                <div class="widget mb-4 pb-2">
                  <h5 class="widget-title">Search</h5>
                  <div id="search2" class="widget-search mt-4 mb-0">
                    <form
                      role="search"
                      method="get"
                      id="searchform"
                      class="searchform"
                    >
                      <div>
                        <input
                          type="text"
                          class="border rounded"
                          name="s"
                          id="s"
                          placeholder="Search Keywords..."
                        />
                        <input type="submit" id="searchsubmit" value="Search" />
                      </div>
                    </form>
                  </div>
                </div>
                <!-- SEARCH -->

                <!-- Categories -->
                <div class="widget mb-4 pb-2">
                  <h5 class="widget-title">Categories</h5>
                  <ul class="list-unstyled mt-4 mb-0 blog-categories">
                    <li>
                      <a href="jvascript:void(0)">Finance</a>
                      <span class="float-right">13</span>
                    </li>
                    <li>
                      <a href="jvascript:void(0)">Business</a>
                      <span class="float-right">09</span>
                    </li>
                    <li>
                      <a href="jvascript:void(0)">Blog</a>
                      <span class="float-right">18</span>
                    </li>
                    <li>
                      <a href="jvascript:void(0)">Corporate</a>
                      <span class="float-right">20</span>
                    </li>
                    <li>
                      <a href="jvascript:void(0)">Investment</a>
                      <span class="float-right">22</span>
                    </li>
                  </ul>
                </div>
                <!-- Categories -->

                <!-- RECENT POST -->
                <div class="widget mb-4 pb-2">
                  <h5 class="widget-title">Recent Post</h5>
                  <div class="mt-4">
                    <div class="clearfix post-recent">
                      <div class="post-recent-thumb float-left">
                        <a href="jvascript:void(0)">
                          <img
                            alt="img"
                            src="images/blog/07.jpg"
                            class="img-fluid rounded"
                        /></a>
                      </div>
                      <div class="post-recent-content float-left">
                        <a href="jvascript:void(0)">Consultant Business</a
                        ><span class="text-muted mt-2">15th June, 2019</span>
                      </div>
                    </div>
                    <div class="clearfix post-recent">
                      <div class="post-recent-thumb float-left">
                        <a href="jvascript:void(0)">
                          <img
                            alt="img"
                            src="images/blog/08.jpg"
                            class="img-fluid rounded"
                        /></a>
                      </div>
                      <div class="post-recent-content float-left">
                        <a href="jvascript:void(0)"
                          >Look On The Glorious Balance</a
                        >
                        <span class="text-muted mt-2">15th June, 2019</span>
                      </div>
                    </div>
                    <div class="clearfix post-recent">
                      <div class="post-recent-thumb float-left">
                        <a href="jvascript:void(0)">
                          <img
                            alt="img"
                            src="images/blog/01.jpg"
                            class="img-fluid rounded"
                        /></a>
                      </div>
                      <div class="post-recent-content float-left">
                        <a href="jvascript:void(0)">Research Financial.</a>
                        <span class="text-muted mt-2">15th June, 2019</span>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- RECENT POST -->

                <!-- TAG CLOUDS -->
                <div class="widget mb-4 pb-2">
                  <h5 class="widget-title">Tags Cloud</h5>
                  <div class="tagcloud mt-4">
                    <a href="jvascript:void(0)" class="rounded">Business</a>
                    <a href="jvascript:void(0)" class="rounded">Finance</a>
                    <a href="jvascript:void(0)" class="rounded">Marketing</a>
                    <a href="jvascript:void(0)" class="rounded">Fashion</a>
                    <a href="jvascript:void(0)" class="rounded">Bride</a>
                    <a href="jvascript:void(0)" class="rounded">Lifestyle</a>
                    <a href="jvascript:void(0)" class="rounded">Travel</a>
                    <a href="jvascript:void(0)" class="rounded">Beauty</a>
                    <a href="jvascript:void(0)" class="rounded">Video</a>
                    <a href="jvascript:void(0)" class="rounded">Audio</a>
                  </div>
                </div>
                <!-- TAG CLOUDS -->

                <!-- SOCIAL -->
                <div class="widget">
                  <h5 class="widget-title">Follow us</h5>
                  <ul class="list-unstyled social-icon mb-0 mt-4">
                    <li class="list-inline-item">
                      <a href="javascript:void(0)" class="rounded">
                        <facebook-icon
                          class="fea icon-sm fea-social"
                        ></facebook-icon>
                      </a>
                    </li>
                    <li class="list-inline-item ml-1">
                      <a href="javascript:void(0)" class="rounded">
                        <instagram-icon
                          class="fea icon-sm fea-social"
                        ></instagram-icon>
                      </a>
                    </li>
                    <li class="list-inline-item ml-1">
                      <a href="javascript:void(0)" class="rounded">
                        <twitter-icon
                          class="fea icon-sm fea-social"
                        ></twitter-icon>
                      </a>
                    </li>
                    <li class="list-inline-item ml-1">
                      <a href="javascript:void(0)" class="rounded">
                        <linkedin-icon
                          class="fea icon-sm fea-social"
                        ></linkedin-icon>
                      </a>
                    </li>
                    <li class="list-inline-item ml-1">
                      <a href="javascript:void(0)" class="rounded">
                        <github-icon
                          class="fea icon-sm fea-social"
                        ></github-icon>
                      </a>
                    </li>
                    <li class="list-inline-item ml-1">
                      <a href="javascript:void(0)" class="rounded">
                        <youtube-icon
                          class="fea icon-sm fea-social"
                        ></youtube-icon>
                      </a>
                    </li>
                    <li class="list-inline-item ml-1">
                      <a href="javascript:void(0)" class="rounded">
                        <gitlab-icon
                          class="fea icon-sm fea-social"
                        ></gitlab-icon>
                      </a>
                    </li>
                  </ul>
                  <!--end icon-->
                </div>
                <!-- SOCIAL -->
              </div>
            </div>
          </div>
          <!--end col-->
          <!-- END SIDEBAR -->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- Blog End -->
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
