<script>
import Switcher from "@/components/switcher";
import { HomeIcon, UserIcon, KeyIcon } from "vue-feather-icons";

import Login from "../components/login";

/**
 * Auth-login component
 */
export default {
  data() {
    return {};
  },
  components: {
    Switcher,
    HomeIcon,
    UserIcon,
    KeyIcon,
    Login,
  },
};
</script>

<template>
  <div>
    <div class="back-to-home rounded d-none d-sm-block">
      <router-link to="/" class="btn btn-icon btn-soft-primary">
        <home-icon class="icons"></home-icon>
      </router-link>
    </div>

    <!-- Hero Start -->
    <section class="bg-home d-flex align-items-center">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7 col-md-6">
            <div class="mr-lg-5">
              <img
                src="images/user/login.svg"
                class="img-fluid d-block mx-auto"
                alt=""
              />
            </div>
          </div>
          <div class="col-lg-5 col-md-6">
          <section id="firebaseui-auth-container"></section>
            <div class="card login-page bg-white shadow rounded border-0">
              <div class="card-body">
                <!-- <h4 class="card-title text-center">Login</h4> -->
                <!-- <form class="login-form mt-4">
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
                            to="/auth-re-password"
                            class="text-dark font-weight-bold"
                            >Forgot password ?</router-link
                          >
                        </p>
                      </div>
                    </div>
                    <div class="col-lg-12 mb-0">
                      <button class="btn btn-primary btn-block">Sign in</button>
                    </div>
                    <div class="col-lg-12 mt-4 text-center">
                      <h6>Or Login With</h6>
                      <div class="row">
                        <div class="col-6 mt-3">
                          <a
                            href="javascript:void(0)"
                            class="btn btn-block btn-light"
                            ><i class="mdi mdi-facebook text-primary"></i>
                            Facebook</a
                          >
                        </div>
                        

                        <div class="col-6 mt-3">
                          <a
                            href="javascript:void(0)"
                            class="btn btn-block btn-light"
                            ><i class="mdi mdi-google text-danger"></i>
                            Google</a
                          >
                        </div>
                        
                      </div>
                    </div>
                    
                    <div class="col-12 text-center">
                      <p class="mb-0 mt-3">
                        <small class="text-dark mr-2"
                          >Don't have an account ?</small
                        >
                        <router-link
                          to="/auth-signup"
                          class="text-dark font-weight-bold"
                          >Sign Up</router-link
                        >
                      </p>
                    </div>
                  </div>
                </form> -->

                <Login />
              </div>
            </div>
            <!---->
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- Hero End -->
    <Switcher />
    
  </div>
</template>
