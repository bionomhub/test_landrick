<script>
import Switcher from "@/components/switcher";
import { HomeIcon, MailIcon } from "vue-feather-icons";

/**
 * Auth-re-password-three component
 */
export default {
  data() {
    return {};
  },
  components: {
    Switcher,
    HomeIcon,
    MailIcon,
  },
};
</script>

<template>
  <div>
    <div class="back-to-home rounded d-none d-sm-block">
      <router-link to="/" class="btn btn-icon btn-primary">
        <home-icon class="icons"></home-icon>
      </router-link>
    </div>

    <!-- Hero Start -->
    <section class="bg-home bg-circle-gradiant d-flex align-items-center">
      <div class="bg-overlay bg-overlay-white"></div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5 col-md-8">
            <div class="card login_page shadow rounded border-0">
              <div class="card-body">
                <h4 class="card-title text-center">Recover Account</h4>

                <form class="login-form mt-4">
                  <div class="row">
                    <div class="col-lg-12">
                      <p class="text-muted">
                        Please enter your email address. You will receive a link
                        to create a new password via email.
                      </p>
                      <div class="form-group">
                        <label
                          >Email address
                          <span class="text-danger">*</span></label
                        >
                        <div class="position-relative">
                          <mail-icon class="fea icon-sm icons"></mail-icon>
                          <input
                            type="email"
                            class="form-control pl-5"
                            placeholder="Enter Your Email Address"
                            name="email"
                            required=""
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <button class="btn btn-primary btn-block">Send</button>
                    </div>
                    <div class="mx-auto">
                      <p class="mb-0 mt-3">
                        <small class="text-dark mr-2"
                          >Remember your password ?</small
                        >
                        <router-link
                          to="/auth-login-three"
                          class="text-dark font-weight-bold"
                          >Sign in</router-link
                        >
                      </p>
                    </div>
                  </div>
                </form>
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
    <Switcher />
  </div>
</template>
