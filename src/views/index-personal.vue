<script>
import { VueTyper } from "vue-typer";
import {
  ArrowUpIcon,
  MailIcon,
  UserIcon,
  MessageCircleIcon,
  CameraIcon,
} from "vue-feather-icons";
import { Carousel, Slide } from "vue-carousel";
import VueEasyLightbox from "vue-easy-lightbox";

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";

/**
 * Index-personal component
 */
export default {
  data() {
    return {
      list: [
        {
          image: "images/personal/1.jpg",
          title: "Iphone mockup",
          type: "Branding",
        },
        {
          image: "images/personal/2.jpg",
          title: "Mockup Collection",
          type: "Mockup",
        },
        {
          image: "images/personal/3.jpg",
          title: "Abstract images",
          type: "Abstract",
        },
        {
          image: "images/personal/4.jpg",
          title: "Yellow bg with Books",
          type: "Books",
        },
        {
          image: "images/personal/5.jpg",
          title: "Company V-card",
          type: "V-card",
        },
        {
          image: "images/personal/6.jpg",
          title: "Mockup box with paints",
          type: "Photography",
        },
      ],
      lightboximgs: [
        "images/personal/1.jpg",
        "images/personal/2.jpg",
        "images/personal/3.jpg",
        "images/personal/4.jpg",
        "images/personal/5.jpg",
        "images/personal/6.jpg",
      ],
      visible: false,
      index: 0, // default: 0,
    };
  },
  components: {
    Navbar,
    Switcher,
    Footer,
    Carousel,
    Slide,
    ArrowUpIcon,
    MailIcon,
    UserIcon,
    CameraIcon,
    "vue-typer": VueTyper,
    MessageCircleIcon,
    VueEasyLightbox,
  },
  methods: {
    updateFilter(filterName) {
      this.filterCategory = filterName;
    },
    showImg(index) {
      this.index = index;
      this.visible = true;
    },
  },
};
</script>

<template>
  <div>
    <Navbar />

    <!-- Hero Start -->
    <section
      class="bg-home rtl-personal-hero bg-light d-flex align-items-center"
      style="background: url('images/personal/bg01.png') center center"
      id="home"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8 col-md-9">
            <div class="title-heading mt-4">
              <h1 class="display-3 font-weight-bold mb-3">
                Here I'm <br />
                <vue-typer
                  :text="['Calvin Carlo', 'UI/UX Designer', 'Web Developer']"
                ></vue-typer>
              </h1>
              <p class="para-desc text-muted">
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered bootstrap4 html page.
              </p>
              <div class="mt-4 pt-2">
                <a
                  v-scroll-to="'#portfolio'"
                  class="btn btn-primary mt-2 mr-2 mouse-down"
                  ><i class="mdi mdi-camera"></i> View Portfolio</a
                >
                <a
                  v-scroll-to="'#contact'"
                  class="btn btn-outline-primary mt-2 mouse-down"
                  ><i class="mdi mdi-cloud-download"></i> Hire Me</a
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
    <!--end section-->
    <!-- Hero End -->

    <!-- About Start -->
    <section class="section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <div class="section-title">
              <h4 class="title">About Me</h4>
              <h6 class="text-primary mb-4">I'm Passionate Web Designer</h6>
              <p class="text-muted mb-0">
                Start working with landrick that can provide everything you need
                to generate awareness, drive traffic, connect. Dummy text is
                also used to demonstrate the appearance of different typefaces
                and layouts, and in general the content of dummy text is
                nonsensical. Due to its widespread use as filler text for
                layouts, non-readability is of great importance: human
                perception is tuned to recognize certain patterns and
                repetitions in texts.
              </p>
              <div class="mt-4">
                <a v-scroll-to="'#contact'" class="btn btn-primary mouse-down"
                  ><i class="mdi mdi-phone"></i> Contact Me</a
                >
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="ml-md-4">
              <div class="progress-box">
                <h6 class="title text-muted">WordPress</h6>
                <div class="progress">
                  <div
                    class="progress-bar position-relative bg-primary"
                    style="width: 84%"
                  >
                    <div class="progress-value d-block text-muted h6">84%</div>
                  </div>
                </div>
              </div>
              <!--end process box-->
              <div class="progress-box mt-4">
                <h6 class="title text-muted">PHP / MYSQL</h6>
                <div class="progress">
                  <div
                    class="progress-bar position-relative bg-primary"
                    style="width: 75%"
                  >
                    <div class="progress-value d-block text-muted h6">75%</div>
                  </div>
                </div>
              </div>
              <!--end process box-->
              <div class="progress-box mt-4">
                <h6 class="title text-muted">Angular / JavaScript</h6>
                <div class="progress">
                  <div
                    class="progress-bar position-relative bg-primary"
                    style="width: 79%"
                  >
                    <div class="progress-value d-block text-muted h6">79%</div>
                  </div>
                </div>
              </div>
              <!--end process box-->
              <div class="progress-box mt-4">
                <h6 class="title text-muted">HTML</h6>
                <div class="progress">
                  <div
                    class="progress-bar position-relative bg-primary"
                    style="width: 95%"
                  >
                    <div class="progress-value d-block text-muted h6">95%</div>
                  </div>
                </div>
              </div>
              <!--end process box-->
              <div class="progress-box mt-4">
                <h6 class="title text-muted">CSS</h6>
                <div class="progress">
                  <div
                    class="progress-bar position-relative bg-primary"
                    style="width: 93%"
                  >
                    <div class="progress-value d-block text-muted h6">93%</div>
                  </div>
                </div>
              </div>
              <!--end process box-->
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->

      <div class="container mt-100 mt-60" id="portfolio">
        <div class="row">
          <div class="col-12">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">My Work & Portfolio</h4>
              <p class="text-muted para-desc mb-0">
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
            class="col-lg-4 col-md-6 col-12 mt-4 pt-2"
            v-for="(item, index) of list"
            :key="index"
          >
            <div
              class="card border-0 work-container work-modern position-relative d-block overflow-hidden rounded"
            >
              <div class="card-body p-0">
                <img :src="item.image" class="img-fluid" alt="work-image" />
                <div class="overlay-work bg-dark"></div>
                <div class="content">
                  <h5 class="mb-0">
                    <router-link
                      to="/page-work-detail"
                      class="text-white title"
                      >{{ item.title }}</router-link
                    >
                  </h5>
                  <h6 class="text-light tag mb-0">{{ item.type }}</h6>
                </div>
                <div class="icons text-center">
                  <a
                    href="javascript: void(0);"
                    @click="() => showImg(index)"
                    class="text-primary work-icon bg-white d-inline-block rounded-pill mfp-image"
                  >
                    <camera-icon class="fea icon-sm"></camera-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!--end col-->

          <!--end col-->
          <vue-easy-lightbox
            :visible="visible"
            :index="index"
            :imgs="lightboximgs"
            @hide="visible = false"
          ></vue-easy-lightbox>
          <div class="col-12 mt-4 pt-2">
            <router-link to="/page-work-modern" class="btn btn-outline-primary"
              >See More <i class="mdi mdi-chevron-right"></i
            ></router-link>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row">
          <div class="col-12">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">Work Process</h4>
              <p class="text-muted para-desc mb-0">
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
          <div class="col-md-4 mt-4 pt-2">
            <div class="card work-process border-0 rounded shadow">
              <div class="card-body">
                <h4 class="title">Discuss The Project</h4>
                <p class="text-muted para">
                  The most well-known dummy text is the 'Lorem Ipsum', which is
                  said to have originated in the 16th century.
                </p>
                <a href="javascript:void(0)" class="text-primary"
                  >Read more <i class="mdi mdi-chevron-right"></i
                ></a>
                <ul
                  class="list-unstyled d-flex justify-content-between mb-0 mt-2"
                >
                  <li class="step h1 mb-0 font-weight-bold">Step 01.</li>
                  <li class="step-icon">
                    <i class="mdi mdi-chevron-double-right mdi-36px"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-md-4 mt-4 pt-2">
            <div class="card work-process border-0 rounded shadow">
              <div class="card-body">
                <h4 class="title">Develop & Elaborate</h4>
                <p class="text-muted para">
                  The most well-known dummy text is the 'Lorem Ipsum', which is
                  said to have originated in the 16th century.
                </p>
                <a href="javascript:void(0)" class="text-primary"
                  >Read more <i class="mdi mdi-chevron-right"></i
                ></a>
                <ul
                  class="list-unstyled d-flex justify-content-between mb-0 mt-2"
                >
                  <li class="step h1 mb-0 font-weight-bold">Step 02.</li>
                  <li class="step-icon">
                    <i class="mdi mdi-chevron-double-right mdi-36px"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-md-4 mt-4 pt-2">
            <div class="card work-process border-0 rounded shadow">
              <div class="card-body">
                <h4 class="title">Final Approvement</h4>
                <p class="text-muted para">
                  The most well-known dummy text is the 'Lorem Ipsum', which is
                  said to have originated in the 16th century.
                </p>
                <a href="javascript:void(0)" class="text-primary"
                  >Read more <i class="mdi mdi-chevron-right"></i
                ></a>
                <ul
                  class="list-unstyled d-flex justify-content-between mb-0 mt-2"
                >
                  <li class="step h1 mb-0 font-weight-bold">Step 03.</li>
                  <li class="step-icon">
                    <i class="mdi mdi-check-all mdi-36px"></i>
                  </li>
                </ul>
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
    <!-- About End -->

    <!-- Testi Start -->
    <section
      class="section"
      style="background: url('images/personal/bg02.jpg') center center"
    >
      <div class="bg-overlay"></div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7 text-center">
            <carousel
              id="owl-fade"
              class="owl-carousel owl-theme"
              dir="ltr"
              :per-page="1"
              :loop="true"
            >
              <Slide>
                <div class="customer-testi text-center">
                  <p class="text-light para-dark h6 font-italic">
                    " It seems that only fragments of the original text remain
                    in the Lorem Ipsum texts used today. The most well-known
                    dummy text is the 'Lorem Ipsum', which is said to have
                    originated in the 16th century. "
                  </p>
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
                  <h6 class="text-light title-dark">Thomas Israel</h6>
                  <img
                    src="images/client/01.jpg"
                    class="img-fluid avatar avatar-small mt-3 rounded-circle mx-auto shadow"
                    alt=""
                  />
                </div>
                <!--end customer testi-->
              </Slide>
              <Slide>
                <div class="customer-testi text-center">
                  <p class="text-light para-dark h6 font-italic">
                    " The advantage of its Latin origin and the relative
                    meaninglessness of Lorum Ipsum is that the text does not
                    attract attention to itself or distract the viewer's
                    attention from the layout. "
                  </p>
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
                  <h6 class="text-light title-dark">Carl Oliver</h6>
                  <img
                    src="images/client/02.jpg"
                    class="img-fluid avatar avatar-small mt-3 rounded-circle mx-auto shadow"
                    alt=""
                  />
                </div>
                <!--end customer testi-->
              </Slide>
              <Slide>
                <div class="customer-testi text-center">
                  <p class="text-light para-dark h6 font-italic">
                    " There is now an abundance of readable dummy texts. These
                    are usually used when a text is required purely to fill a
                    space. These alternatives to the classic Lorem Ipsum texts
                    are often amusing and tell short, funny or nonsensical
                    stories. "
                  </p>
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
                  <h6 class="text-light title-dark">Barbara McIntosh</h6>
                  <img
                    src="images/client/03.jpg"
                    class="img-fluid avatar avatar-small mt-3 rounded-circle mx-auto shadow"
                    alt=""
                  />
                </div>
                <!--end customer testi-->
              </Slide>
              <Slide>
                <div class="customer-testi text-center">
                  <p class="text-light para-dark h6 font-italic">
                    " According to most sources, Lorum Ipsum can be traced back
                    to a text composed by Cicero in 45 BC. Allegedly, a Latin
                    scholar established the origin of the text by compiling all
                    the instances of the unusual word 'consectetur' he could
                    find "
                  </p>
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
                  <h6 class="text-light title-dark">Christa Smith</h6>
                  <img
                    src="images/client/04.jpg"
                    class="img-fluid avatar avatar-small mt-3 rounded-circle mx-auto shadow"
                    alt=""
                  />
                </div>
                <!--end customer testi-->
              </Slide>
              <Slide>
                <div class="customer-testi text-center">
                  <p class="text-light para-dark h6 font-italic">
                    " It seems that only fragments of the original text remain
                    in the Lorem Ipsum texts used today. The most well-known
                    dummy text is the 'Lorem Ipsum', which is said to have
                    originated in the 16th century. "
                  </p>
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
                  <h6 class="text-light title-dark">Dean Tolle</h6>
                  <img
                    src="images/client/05.jpg"
                    class="img-fluid avatar avatar-small mt-3 rounded-circle mx-auto shadow"
                    alt=""
                  />
                </div>
                <!--end customer testi-->
              </Slide>
              <Slide>
                <div class="customer-testi text-center">
                  <p class="text-light para-dark h6 font-italic">
                    " It seems that only fragments of the original text remain
                    in the Lorem Ipsum texts used today. One may speculate that
                    over the course of time certain letters were added or
                    deleted at various positions within the text. "
                  </p>
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
                  <h6 class="text-light title-dark">Jill Webb</h6>
                  <img
                    src="images/client/06.jpg"
                    class="img-fluid avatar avatar-small mt-3 rounded-circle mx-auto shadow"
                    alt=""
                  />
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
    </section>
    <!--end section-->
    <!-- Testi End -->

    <!-- Client start -->
    <section class="py-4 border-bottom">
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
    <!-- Client End -->

    <!-- Blog Start -->
    <section class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">Latest News</h4>
              <p class="text-muted para-desc mb-0">
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
          <div class="col-lg-4 col-md-6 mt-4 pt-2">
            <div class="card blog rounded border-0 shadow">
              <div class="position-relative">
                <img
                  src="images/personal/1.jpg"
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
                <div class="post-meta d-flex justify-content-between mt-3">
                  <ul class="list-unstyled mb-0">
                    <li class="list-inline-item mr-2 mb-0">
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

          <div class="col-lg-4 col-md-6 mt-4 pt-2">
            <div class="card blog rounded border-0 shadow">
              <div class="position-relative">
                <img
                  src="images/personal/2.jpg"
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
                <div class="post-meta d-flex justify-content-between mt-3">
                  <ul class="list-unstyled mb-0">
                    <li class="list-inline-item mr-2 mb-0">
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

          <div class="col-lg-4 col-md-6 mt-4 pt-2">
            <div class="card blog rounded border-0 shadow">
              <div class="position-relative">
                <img
                  src="images/personal/3.jpg"
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
                    >Smartest Applications for Business</a
                  >
                </h5>
                <div class="post-meta d-flex justify-content-between mt-3">
                  <ul class="list-unstyled mb-0">
                    <li class="list-inline-item mr-2 mb-0">
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

          <div class="col-12 mt-4 pt-2">
            <router-link to="/page-blog-grid" class="btn btn-primary"
              >See More <i class="mdi mdi-chevron-right"></i
            ></router-link>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->

      <div class="container mt-100 mt-60" id="contact">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">Contact Me</h4>
              <p class="text-muted para-desc mb-0">
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
          <div class="col-lg-4 col-md-6 mt-4 pt-2">
            <div class="card rounded shadow border-0">
              <div class="card-body py-5">
                <h4 class="card-title">Get In Touch !</h4>
                <div class="custom-form mt-3">
                  <div id="message"></div>
                  <form
                    method="post"
                    action="php/contact.php"
                    name="contact-form"
                    id="contact-form"
                  >
                    <div class="row">
                      <div class="col-md-12">
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
                      <div class="col-md-12">
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
                          type="submit"
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

          <div class="col-lg-8 col-md-6 pl-md-3 pr-md-3 mt-4 pt-2">
            <div class="card border-0 shadow rounded">
              <div class="map map-height-two map-gray">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                  style="border: 0"
                  class="rounded"
                  allowfullscreen=""
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
