<script>
  import {
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    LinkedinIcon,
    MailIcon,
  } from "vue-feather-icons";
  export default {
    data() {
      return {};
    },
    components: {
      FacebookIcon,
      InstagramIcon,
      TwitterIcon,
      LinkedinIcon,
      MailIcon,
    },
  };
</script>

<template>
  <div>
    <!-- Footer Start -->
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
            <a href="#" class="logo-footer">
              <img src="images/logo-light.png" height="24" alt="" />
            </a>
            <p class="mt-4">
              Start working with Landrick that can provide everything you need
              to generate awareness, drive traffic, connect.
            </p>
            <ul class="list-unstyled social-icon social mb-0 mt-4">
              <li class="list-inline-item">
                <a href="javascript:void(0)" class="rounded">
                  <facebook-icon class="fea icon-sm fea-social"></facebook-icon>
                </a>
              </li>
              <li class="list-inline-item ml-1">
                <a href="javascript:void(0)" class="rounded">
                  <instagram-icon class="fea icon-sm fea-social"></instagram-icon>
                </a>
              </li>
              <li class="list-inline-item ml-1">
                <a href="javascript:void(0)" class="rounded">
                  <twitter-icon class="fea icon-sm fea-social"></twitter-icon>
                </a>
              </li>
              <li class="list-inline-item ml-1">
                <a href="javascript:void(0)" class="rounded">
                  <linkedin-icon class="fea icon-sm fea-social"></linkedin-icon>
                </a>
              </li>
            </ul>
            <!--end icon-->
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h5 class="text-light footer-head">Компания</h5>
            <ul class="list-unstyled footer-list mt-4">
              <li>
                <router-link to="/page-aboutus-two" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i>О компании
                </router-link>
              </li>
              <li>
                <router-link to="/page-services" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i>
                  Партнеры</router-link>
              </li>
              <li>
                <router-link to="/page-blog-grid" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> Блог
                </router-link>
              </li>
            </ul>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h5 class="text-light footer-head">Покупателям / FAQ</h5>
            <ul class="list-unstyled footer-list mt-4">
              <li>
                <router-link to="/helpcenter-faqs" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> Как оформить заказ</router-link>
              </li>
              <li>
                <router-link to="/helpcenter-faqs" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> Доставка товара</router-link>
              </li>
              <li>
                <router-link to="/helpcenter-faqs" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i>
                  Оплата товара</router-link>
              </li>
              <li>
                <router-link to="/helpcenter-faqs" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i>
                  Получение товара</router-link>
              </li>
              <li>
                <router-link to="/helpcenter-faqs" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i>
                  Возврат товара</router-link>
              </li>
              <li>
                <router-link to="/helpcenter-guides" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i>
                  Помощь покупателям</router-link>
              </li>
            </ul>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h5 class="text-light footer-head">Newsletter</h5>
            <p class="mt-4">Sign up and receive the latest tips via email.</p>
            <form>
              <div class="row">
                <div class="col-lg-12">
                  <div class="foot-subscribe form-group">
                    <label>Write your email
                      <span class="text-danger">*</span></label>
                    <div class="position-relative">
                      <mail-icon class="fea icon-sm icons"></mail-icon>
                      <input type="email" name="email" id="emailsubscribe" class="form-control pl-5 rounded"
                        placeholder="Your email : " required />
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <input type="submit" id="submitsubscribe" name="send" class="btn btn-soft-primary btn-block"
                    value="Subscribe" />
                </div>
              </div>
            </form>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </footer>
    <!--end footer-->
    <footer class="footer footer-bar">
      <div class="container text-center">
        <div class="row align-items-center">
          <div class="col-sm-6">
            <div class="text-sm-left">
              <p class="mb-0">
                © 2020 - {{ new Date().getFullYear() }} Landrick. Design with
                <i class="mdi mdi-heart text-danger"></i> by
                <a href="http://www.themesbrand.com/" target="_blank" class="text-reset">Themesbrand</a>.
              </p>
            </div>
          </div>
          <!--end col-->

          <div class="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <ul class="list-unstyled text-sm-right mb-0">
              <li class="list-inline-item">
                <a href="javascript:void(0)"><img src="images/payments/american-ex.png" class="avatar avatar-ex-sm"
                    title="American Express" alt="" /></a>
              </li>
              <li class="list-inline-item ml-1">
                <a href="javascript:void(0)"><img src="images/payments/discover.png" class="avatar avatar-ex-sm"
                    title="Discover" alt="" /></a>
              </li>
              <li class="list-inline-item ml-1">
                <a href="javascript:void(0)"><img src="images/payments/master-card.png" class="avatar avatar-ex-sm"
                    title="Master Card" alt="" /></a>
              </li>
              <li class="list-inline-item ml-1">
                <a href="javascript:void(0)"><img src="images/payments/paypal.png" class="avatar avatar-ex-sm"
                    title="Paypal" alt="" /></a>
              </li>
              <li class="list-inline-item ml-1">
                <a href="javascript:void(0)"><img src="images/payments/visa.png" class="avatar avatar-ex-sm"
                    title="Visa" alt="" /></a>
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
  </div>
</template>