<script>
import {
  ArrowUpIcon,
  UserIcon,
  KeyIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
  GithubIcon,
  YoutubeIcon,
  GitlabIcon,
} from "vue-feather-icons";

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";

/**
 * Forums-topic component
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
    UserIcon,
    KeyIcon,
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    LinkedinIcon,
    GithubIcon,
    YoutubeIcon,
    GitlabIcon,
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
              <h4 class="title">Introduction: Landrick</h4>
              <div class="page-next">
                <nav aria-label="breadcrumb" class="d-inline-block">
                  <ul class="breadcrumb bg-white rounded shadow mb-0">
                    <li class="breadcrumb-item">
                      <router-link to="/">Landrick</router-link>
                    </li>
                    <li class="breadcrumb-item">
                      <router-link to="/">Forums</router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Forum Topic
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

    <!-- Start Forums -->
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="table-responsive bg-white shadow rounded">
              <table class="table mb-0 table-center">
                <thead class="bg-light">
                  <tr>
                    <th scope="col" style="min-width: 300px">Topics</th>
                    <th scope="col" class="text-center" style="width: 100px">
                      Comments
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="media">
                        <i class="uil uil-comment text-muted h5"></i>
                        <div class="content ml-3">
                          <router-link
                            to="/forums-comments"
                            class="forum-title text-primary font-weight-bold"
                            >Changelog</router-link
                          >
                          <p class="text-muted small mb-0 mt-2">
                            Write by:
                            <a
                              href="javascript:void(0)"
                              class="text-dark font-weight-bold"
                              >Calvin Carlo</a
                            >
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="text-center small">2</td>
                  </tr>

                  <tr>
                    <td>
                      <div class="media">
                        <i class="uil uil-comment text-muted h5"></i>
                        <div class="content ml-3">
                          <router-link
                            to="/forums-comments"
                            class="forum-title text-primary font-weight-bold"
                            >Documentation</router-link
                          >
                          <p class="text-muted small mb-0 mt-2">
                            Write by:
                            <a
                              href="javascript:void(0)"
                              class="text-dark font-weight-bold"
                              >George Meta</a
                            >
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="text-center small">4</td>
                  </tr>

                  <tr>
                    <td>
                      <div class="media">
                        <i class="uil uil-comment text-muted h5"></i>
                        <div class="content ml-3">
                          <router-link
                            to="/forums-comments"
                            class="forum-title text-primary font-weight-bold"
                            >Components</router-link
                          >
                          <p class="text-muted small mb-0 mt-2">
                            Write by:
                            <a
                              href="javascript:void(0)"
                              class="text-dark font-weight-bold"
                              >Crista Joseph</a
                            >
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="text-center small">1</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="mt-4 pt-2">
              <div class="rounded shadow p-4">
                <form class="login-form">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="form-group">
                        <label
                          >Your Email <span class="text-danger">*</span></label
                        >
                        <div class="position-relative">
                          <user-icon class="fea icon-sm icons"></user-icon>
                          <input
                            type="email"
                            class="form-control pl-5"
                            placeholder="Email"
                            name="email"
                            required=""
                          />
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-12">
                      <div class="form-group">
                        <label
                          >Password <span class="text-danger">*</span></label
                        >
                        <div class="position-relative">
                          <key-icon class="fea icon-sm icons"></key-icon>
                          <input
                            type="password"
                            class="form-control pl-5"
                            placeholder="Password"
                            required=""
                          />
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-12">
                      <div class="d-flex justify-content-between">
                        <div class="form-group">
                          <div class="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="customCheck2"
                            />
                            <label
                              class="custom-control-label"
                              for="customCheck2"
                              >Remember me</label
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-12 mb-0">
                      <button class="btn btn-primary btn-block">
                        Login Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-4 mt-4 mt-lg-0 pt-2 pt-lg-0">
            <div
              class="card border-0 sidebar sticky-bar rounded shadow bg-light"
            >
              <div class="card-body">
                <!-- SEARCH -->
                <div class="widget mb-4 pb-2">
                  <div id="search2" class="widget-search mb-0">
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
                          placeholder="Search forum..."
                        />
                        <input type="submit" id="searchsubmit" value="Search" />
                      </div>
                    </form>
                  </div>
                </div>
                <!-- SEARCH -->

                <!-- CATAGORIES -->
                <div class="widget mb-4 pb-2">
                  <h4 class="widget-title">Login</h4>
                  <form class="login-form mt-4">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="form-group ">
                          <label
                            >Your Email
                            <span class="text-danger">*</span></label
                          >
                          <div class="position-relative">
                          <user-icon class="fea icon-sm icons"></user-icon>
                          <input
                            type="email"
                            class="form-control pl-5"
                            placeholder="Email"
                            name="email"
                            required=""
                          />
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-12">
                        <div class="form-group">
                          <label
                            >Password <span class="text-danger">*</span></label
                          >
                              <div class="position-relative">
                          <key-icon class="fea icon-sm icons"></key-icon>
                          <input
                            type="password"
                            class="form-control pl-5"
                            placeholder="Password"
                            required=""
                          />
                              </div>
                        </div>
                      </div>

                      <div class="col-lg-12">
                        <div class="d-flex justify-content-between">
                          <div class="form-group">
                            <div class="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="customCheck1"
                              />
                              <label
                                class="custom-control-label"
                                for="customCheck1"
                                >Remember me</label
                              >
                            </div>
                          </div>
                          <p class="forgot-pass mb-0">
                            <router-link
                              to="/auth-re-password-three"
                              class="text-dark font-weight-bold"
                              >Forgot password ?</router-link
                            >
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-12 mb-0">
                        <button class="btn btn-primary btn-block">
                          Sign in
                        </button>
                      </div>
                      <div class="col-12 text-center">
                        <p class="mb-0 mt-4">
                          <small class="text-dark mr-2"
                            >Don't have an account ?</small
                          >
                          <router-link
                            to="/auth-signup-three"
                            class="text-dark font-weight-bold"
                            >Sign Up</router-link
                          >
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
                <!-- CATAGORIES -->

                <!-- RECENT POST -->
                <div class="widget mb-4 pb-2">
                  <h4 class="widget-title">Recent Replies</h4>
                  <ul class="list-unstyled mb-0 mt-4">
                    <li class="text-muted small h6">
                      <user-icon class="fea icon-sm"></user-icon
                      ><a href="javascript:void(0)" class="text-dark ml-2"
                        >Ameliya</a
                      >
                      on
                      <a href="javascript:void(0)" class="text-primary"
                        >Privacy policy</a
                      >
                    </li>
                    <li class="text-muted small h6">
                      <user-icon class="fea icon-sm"></user-icon
                      ><a href="javascript:void(0)" class="text-dark ml-2"
                        >Crista</a
                      >
                      on
                      <a href="javascript:void(0)" class="text-primary"
                        >HTML Template hosts</a
                      >
                    </li>
                    <li class="text-muted small h6">
                      <user-icon class="fea icon-sm"></user-icon
                      ><a href="javascript:void(0)" class="text-dark ml-2"
                        >John</a
                      >
                      on
                      <a href="javascript:void(0)" class="text-primary"
                        >Specific error messages</a
                      >
                    </li>
                    <li class="text-muted small h6">
                      <user-icon class="fea icon-sm"></user-icon
                      ><a href="javascript:void(0)" class="text-dark ml-2"
                        >Jafrin</a
                      >
                      on
                      <a href="javascript:void(0)" class="text-primary"
                        >Network administration</a
                      >
                    </li>
                    <li class="text-muted small h6 mb-0">
                      <user-icon class="fea icon-sm"></user-icon
                      ><a href="javascript:void(0)" class="text-dark ml-2"
                        >Harry</a
                      >
                      on
                      <a href="javascript:void(0)" class="text-primary"
                        >Customized template options</a
                      >
                    </li>
                  </ul>
                </div>
                <!-- RECENT POST -->

                <!-- SOCIAL -->
                <div class="widget">
                  <h4 class="widget-title">Follow us</h4>
                  <ul class="list-unstyled social-icon social mb-0 mt-4">
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
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- Start Forums -->

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
