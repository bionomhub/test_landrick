<script>
import { mapGetters } from 'vuex';
/**
 * Navbar component
 */
export default {
  data() {
    return {
      isCondensed: false,
    };
  },
  props: {
    isWhiteNavbar: {
      type: Boolean,
    },
    navLight: {
      type: Boolean,
    },
    isIcons: {
      type: Boolean,
    },
  },
  computed:{
    ...mapGetters(['info', 'get_TotalPositions'])
  },

  mounted: () => {
    window.onscroll = function () {
      onwindowScroll();
    };

    function onwindowScroll() {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        document.getElementById("topnav").classList.add("nav-sticky");
      } else {
        document.getElementById("topnav").classList.remove("nav-sticky");
      }

      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        document.getElementById("back-to-top").style.display = "inline";
      } else {
        document.getElementById("back-to-top").style.display = "none";
      }
    }

    var links = document.getElementsByClassName("side-nav-link-ref");
    var matchingMenuItem = null;
    for (var i = 0; i < links.length; i++) {
      if (window.location.pathname === links[i].pathname) {
        matchingMenuItem = links[i];
        break;
      }
    }

    if (matchingMenuItem) {
      matchingMenuItem.classList.add("active");
      var parent = matchingMenuItem.parentElement;

      /**
       * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
       * We should come up with non hard coded approach
       */
      if (parent) {
        parent.classList.add("active");
        const parent2 = parent.parentElement;
        if (parent2) {
          parent2.classList.add("active");
          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.add("active");
            const parent4 = parent3.parentElement;
            if (parent4) {
              const parent5 = parent4.parentElement;
              parent5.classList.add("active");
            }
          }
        }
      }
    }
  },
  methods: {
    /**
     * Toggle menu
     */
    ertyuyt(){
      console.log(info)
    },
    toggleMenu() {
      this.isCondensed = !this.isCondensed;
      if (this.isCondensed) {
        document.getElementById("navigation").style.display = "block";
      } else document.getElementById("navigation").style.display = "none";
    },

    /**
     * Menu clicked show the submenu
     */
    onMenuClick(event) {
      event.preventDefault();
      const nextEl = event.target.nextSibling.nextSibling;

      if (nextEl && !nextEl.classList.contains("open")) {
        const parentEl = event.target.parentNode;
        if (parentEl) {
          parentEl.classList.remove("open");
        }
        nextEl.classList.add("open");
      } else if (nextEl) {
        nextEl.classList.remove("open");
      }
      return false;
    },
  },


};
</script>

<template>
  <div>
    <!-- Navbar STart -->
    <header
      id="topnav"
      class="defaultscroll sticky"
      :class="{ 'bg-white': isWhiteNavbar === true }"
    >
      <div class="container">
        <!-- Logo container-->
        <div>
          <router-link class="logo" to="/" v-if="navLight !== true">
            <img src="images/logo-dark.png" height="24" alt="" />
          </router-link>
          <router-link class="logo" to="/" v-else>
            <img src="images/logo-dark.png" class="l-dark" height="24" alt="" />
            <img
              src="images/logo-light.png"
              class="l-light"
              height="24"
              alt=""
            />
          </router-link>
        </div>
        <div class="buy-button" v-if="isIcons !== true">
        
        </div>
        <ul class="buy-button list-inline mb-0">

<span v-if="info">
<!-- <span v-if="info.name"> -->
          <li class="list-inline-item mb-0" >
            <router-link to="/shop-myaccount"  class="btn btn-icon btn-soft-primary"><i class="mdi mdi-account mdi-18px icons"></i
            ></router-link>
          </li>
</span>
<span v-else> 
          <li class="list-inline-item mb-0" >
            <router-link to="/auth-signup"  class="btn btn-icon btn-soft-primary"
              ><i class="mdi mdi-account-plus-outline mdi-18px icons"></i
            ></router-link>
          </li>
          <li class="list-inline-item mb-0" >
            <router-link to="/auth-login"  class="btn btn-icon btn-soft-primary"><i class="mdi mdi-login mdi-18px icons"></i
            ></router-link>
          </li>
</span>
          <li class="list-inline-item mb-0">
            <router-link to="/shop-cart"  class="btn btn-icon btn-soft-primary"><i class="mdi mdi-cart mdi-18px icons"></i
            ><span v-if="get_TotalPositions" id="cart_total_num">{{get_TotalPositions}}</span></router-link>
          </li>
        </ul>
        <div class="menu-extras">
          <div class="menu-item">
            <!-- Mobile menu toggle-->
            <a
              class="navbar-toggle"
              @click="toggleMenu()"
              :class="{ open: isCondensed === true }"
            >
              <div class="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
            <!-- End mobile menu toggle-->
          </div>
        </div>

        <div id="navigation">
          <!-- Navigation Menu-->
          <ul
            class="navigation-menu"
            :class="{ 'nav-light': navLight === true }"
          >
            <li>
              <router-link to="/shop-grids" class="side-nav-link-ref">Каталог</router-link>
            </li>
            <li>
              <router-link to="/shop-grids" class="side-nav-link-ref">Бренды</router-link>
            </li>
            <li>
              <router-link to="/shop-grids" class="side-nav-link-ref">Новинки</router-link>
            </li>
            <li>
              <router-link to="/shop-grids" class="side-nav-link-ref">Акции</router-link>
            </li>
            <li>
              <router-link to="/shop-grids" class="side-nav-link-ref">Скидки</router-link>
            </li> 

           
          </ul>
          <!--end login button-->
        </div>
        <!--end navigation-->
      </div>
      <!--end container-->
    </header>
    <!--end header-->
    <!-- Navbar End -->
  </div>
</template>


<style scoped>

#cart_total_num{
    position: absolute;
    color: #fff;
    top: 5px;
    border-radius: 20px;
    font-size: 20px;
    height: 30px;
    width: 30px;
    margin-left: -5px;
    background-color: red;
    transform: scale(.7);
}
</style>