(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00f8d069"],{"69e3":function(t,a,s){"use strict";var i=s("c30c"),e=s.n(i);e.a},"9d8d":function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("header",{staticClass:"defaultscroll sticky",class:{"bg-white":!0===t.isWhiteNavbar},attrs:{id:"topnav"}},[s("div",{staticClass:"container"},[s("div",[!0!==t.navLight?s("router-link",{staticClass:"logo",attrs:{to:"/"}},[s("img",{attrs:{src:"images/logo-dark.png",height:"24",alt:""}})]):s("router-link",{staticClass:"logo",attrs:{to:"/"}},[s("img",{staticClass:"l-dark",attrs:{src:"images/logo-dark.png",height:"24",alt:""}}),s("img",{staticClass:"l-light",attrs:{src:"images/logo-light.png",height:"24",alt:""}})])],1),!0!==t.isIcons?s("div",{staticClass:"buy-button"}):t._e(),s("ul",{staticClass:"buy-button list-inline mb-0"},[t.info?t._e():s("span",[s("li",{staticClass:"list-inline-item mb-0"},[s("router-link",{staticClass:"btn btn-icon btn-soft-primary",attrs:{to:"/auth-signup"}},[s("i",{staticClass:"mdi mdi-account-plus-outline mdi-18px icons"})])],1),s("li",{staticClass:"list-inline-item mb-0"},[s("router-link",{staticClass:"btn btn-icon btn-soft-primary",attrs:{to:"/auth-login"}},[s("i",{staticClass:"mdi mdi-login mdi-18px icons"})])],1)]),t.info?s("span",[s("li",{staticClass:"list-inline-item mb-0"},[s("router-link",{staticClass:"btn btn-icon btn-soft-primary",attrs:{to:"/shop-myaccount"}},[s("i",{staticClass:"mdi mdi-login mdi-18px icons"})])],1)]):t._e(),s("li",{staticClass:"list-inline-item mb-0"},[s("router-link",{staticClass:"btn btn-icon btn-soft-primary",attrs:{to:"/shop-cart"}},[s("i",{staticClass:"mdi mdi-cart mdi-18px icons"}),t.get_TotalPositions?s("span",{attrs:{id:"cart_total_num"}},[t._v(t._s(t.get_TotalPositions))]):t._e()])],1)]),s("div",{staticClass:"menu-extras"},[s("div",{staticClass:"menu-item"},[s("a",{staticClass:"navbar-toggle",class:{open:!0===t.isCondensed},on:{click:function(a){return t.toggleMenu()}}},[t._m(0)])])]),s("div",{attrs:{id:"navigation"}},[s("ul",{staticClass:"navigation-menu",class:{"nav-light":!0===t.navLight}},[s("li",[s("router-link",{staticClass:"side-nav-link-ref",attrs:{to:"/shop-grids"}},[t._v("Каталог")])],1),s("li",[s("router-link",{staticClass:"side-nav-link-ref",attrs:{to:"/shop-grids"}},[t._v("Бренды")])],1),s("li",[s("router-link",{staticClass:"side-nav-link-ref",attrs:{to:"/shop-grids"}},[t._v("Новинки")])],1),s("li",[s("router-link",{staticClass:"side-nav-link-ref",attrs:{to:"/shop-grids"}},[t._v("Акции")])],1),s("li",[s("router-link",{staticClass:"side-nav-link-ref",attrs:{to:"/shop-grids"}},[t._v("Скидки")])],1)])])])])])},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"lines"},[s("span"),s("span"),s("span")])}],r=s("5530"),n=s("2f62"),l={data:function(){return{isCondensed:!1}},props:{isWhiteNavbar:{type:Boolean},navLight:{type:Boolean},isIcons:{type:Boolean}},computed:Object(r["a"])({},Object(n["c"])(["info","get_TotalPositions"])),mounted:function(){function t(){document.body.scrollTop>50||document.documentElement.scrollTop>50?document.getElementById("topnav").classList.add("nav-sticky"):document.getElementById("topnav").classList.remove("nav-sticky"),document.body.scrollTop>100||document.documentElement.scrollTop>100?document.getElementById("back-to-top").style.display="inline":document.getElementById("back-to-top").style.display="none"}window.onscroll=function(){t()};for(var a=document.getElementsByClassName("side-nav-link-ref"),s=null,i=0;i<a.length;i++)if(window.location.pathname===a[i].pathname){s=a[i];break}if(s){s.classList.add("active");var e=s.parentElement;if(e){e.classList.add("active");var r=e.parentElement;if(r){r.classList.add("active");var n=r.parentElement;if(n){n.classList.add("active");var l=n.parentElement;if(l){var o=l.parentElement;o.classList.add("active")}}}}}},methods:{toggleMenu:function(){this.isCondensed=!this.isCondensed,this.isCondensed?document.getElementById("navigation").style.display="block":document.getElementById("navigation").style.display="none"},onMenuClick:function(t){t.preventDefault();var a=t.target.nextSibling.nextSibling;if(a&&!a.classList.contains("open")){var s=t.target.parentNode;s&&s.classList.remove("open"),a.classList.add("open")}else a&&a.classList.remove("open");return!1}}},o=l,c=(s("69e3"),s("2877")),d=Object(c["a"])(o,i,e,!1,null,"5e7c6ff5",null);a["a"]=d.exports},c30c:function(t,a,s){},da27:function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("carousel",{attrs:{id:"customer-testi","per-page":3,dir:"ltr",autoplay:!0,loop:!0}},t._l(t.testimonialData,(function(a){return s("Slide",{key:a.id},[s("div",{staticClass:"media customer-testi m-2"},[s("img",{staticClass:"avatar avatar-small mr-3 rounded shadow",attrs:{src:""+a.profile,alt:""}}),s("div",{staticClass:"media-body content p-3 shadow rounded bg-white position-relative"},[s("ul",{staticClass:"list-unstyled mb-0"},[s("li",{staticClass:"list-inline-item"},[s("i",{staticClass:"mdi mdi-star text-warning"})]),s("li",{staticClass:"list-inline-item"},[s("i",{staticClass:"mdi mdi-star text-warning"})]),s("li",{staticClass:"list-inline-item"},[s("i",{staticClass:"mdi mdi-star text-warning"})]),s("li",{staticClass:"list-inline-item"},[s("i",{staticClass:"mdi mdi-star text-warning"})]),s("li",{staticClass:"list-inline-item"},[s("i",{staticClass:"mdi mdi-star text-warning"})])]),s("p",{staticClass:"text-muted mt-2"},[t._v('" '+t._s(a.message)+' "')]),s("h6",{staticClass:"text-primary"},[t._v(" - "+t._s(a.name)+" "),s("small",{staticClass:"text-muted"},[t._v(t._s(a.designation))])])])])])})),1)},e=[],r=s("0a63"),n={props:{testimonialData:{type:Array,default:[]}},data:function(){return{}},components:{Carousel:r["Carousel"],Slide:r["Slide"]}},l=n,o=s("2877"),c=Object(o["a"])(l,i,e,!1,null,null,null);a["a"]=c.exports},df45:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("Navbar"),s("section",{staticClass:"bg-marketing d-table w-100",staticStyle:{background:"url('images/marketing/marketing-shape.png')"},attrs:{id:"home"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center mt-5"},[s("div",{staticClass:"col-lg-7 col-md-7 text-center"},[s("img",{staticClass:"img-fluid",staticStyle:{"max-height":"400px"},attrs:{src:"images/marketing/marketing.png",alt:""}}),s("div",{staticClass:"title-heading mt-0 mt-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0"},[s("h1",{staticClass:"heading mb-3"},[t._v(" Social Media Marketing is the Best Ever ")]),s("p",{staticClass:"para-desc text-muted"},[t._v(" Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page. ")]),s("div",{staticClass:"mt-4 pt-2"},[s("a",{staticClass:"btn btn-primary mt-2 mr-2",attrs:{href:"javascript:void(0)"}},[t._v("Get Started")]),s("router-link",{staticClass:"btn btn-outline-primary mt-2",attrs:{to:"/page-contact-one"}},[s("i",{staticClass:"mdi mdi-phone"}),t._v(" Contact us")])],1)])])])])]),t._m(0),s("section",{staticClass:"section bg-light"},[s("div",{staticClass:"container"},[t._m(1),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-4 col-md-6 mt-4 pt-2"},[s("div",{staticClass:"media key-feature align-items-center p-3 rounded shadow"},[s("div",{staticClass:"icon text-center rounded-circle mr-3"},[s("monitor-icon",{staticClass:"fea icon-ex-md text-primary"})],1),t._m(2)])]),s("div",{staticClass:"col-lg-4 col-md-6 mt-4 pt-2"},[s("div",{staticClass:"media key-feature align-items-center p-3 rounded shadow"},[s("div",{staticClass:"icon text-center rounded-circle mr-3"},[s("heart-icon",{staticClass:"fea icon-ex-md text-primary"})],1),t._m(3)])]),s("div",{staticClass:"col-lg-4 col-md-6 mt-4 pt-2"},[s("div",{staticClass:"media key-feature align-items-center p-3 rounded shadow"},[s("div",{staticClass:"icon text-center rounded-circle mr-3"},[s("eye-icon",{staticClass:"fea icon-ex-md text-primary"})],1),t._m(4)])]),s("div",{staticClass:"col-lg-4 col-md-6 mt-4 pt-2"},[s("div",{staticClass:"media key-feature align-items-center p-3 rounded shadow"},[s("div",{staticClass:"icon text-center rounded-circle mr-3"},[s("bold-icon",{staticClass:"fea icon-ex-md text-primary"})],1),t._m(5)])]),s("div",{staticClass:"col-lg-4 col-md-6 mt-4 pt-2"},[s("div",{staticClass:"media key-feature align-items-center p-3 rounded shadow"},[s("div",{staticClass:"icon text-center rounded-circle mr-3"},[s("feather-icon",{staticClass:"fea icon-ex-md text-primary"})],1),t._m(6)])]),s("div",{staticClass:"col-lg-4 col-md-6 mt-4 pt-2"},[s("div",{staticClass:"media key-feature align-items-center p-3 rounded shadow"},[s("div",{staticClass:"icon text-center rounded-circle mr-3"},[s("code-icon",{staticClass:"fea icon-ex-md text-primary"})],1),t._m(7)])]),s("div",{staticClass:"col-lg-4 col-md-6 mt-4 pt-2"},[s("div",{staticClass:"media key-feature align-items-center p-3 rounded shadow"},[s("div",{staticClass:"icon text-center rounded-circle mr-3"},[s("user-check-icon",{staticClass:"fea icon-ex-md text-primary"})],1),t._m(8)])]),s("div",{staticClass:"col-lg-4 col-md-6 mt-4 pt-2"},[s("div",{staticClass:"media key-feature align-items-center p-3 rounded shadow"},[s("div",{staticClass:"icon text-center rounded-circle mr-3"},[s("git-merge-icon",{staticClass:"fea icon-ex-md text-primary"})],1),t._m(9)])]),s("div",{staticClass:"col-lg-4 col-md-6 mt-4 pt-2"},[s("div",{staticClass:"media key-feature align-items-center p-3 rounded shadow"},[s("div",{staticClass:"icon text-center rounded-circle mr-3"},[s("settings-icon",{staticClass:"fea icon-ex-md text-primary"})],1),t._m(10)])]),t._m(11)])]),t._m(12),s("div",{staticClass:"container mt-100 mt-60"},[t._m(13),s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-lg-12 mt-4"},[s("Testimonial",{attrs:{testimonialData:t.testimonialData}})],1)])])]),s("section",{staticClass:"section"},[s("div",{staticClass:"container"},[t._m(14),s("div",{staticClass:"row",attrs:{id:"counter"}},[s("div",{staticClass:"col-md-3 col-6 mt-4 pt-2"},[s("div",{staticClass:"counter-box text-center"},[s("img",{staticClass:"avatar avatar-small",attrs:{src:"images/illustrator/Asset190.svg",alt:""}}),s("h2",{staticClass:"mb-0 mt-4"},[s("countTo",{attrs:{startVal:3,endVal:97,duration:4e3}}),t._v("% ")],1),s("h6",{staticClass:"counter-head text-muted"},[t._v("Happy Client")])])]),s("div",{staticClass:"col-md-3 col-6 mt-4 pt-2"},[s("div",{staticClass:"counter-box text-center"},[s("img",{staticClass:"avatar avatar-small",attrs:{src:"images/illustrator/Asset189.svg",alt:""}}),s("h2",{staticClass:"mb-0 mt-4"},[s("countTo",{attrs:{startVal:1,endVal:15,duration:4e3}}),t._v("+ ")],1),s("h6",{staticClass:"counter-head text-muted"},[t._v("Awards")])])]),s("div",{staticClass:"col-md-3 col-6 mt-4 pt-2"},[s("div",{staticClass:"counter-box text-center"},[s("img",{staticClass:"avatar avatar-small",attrs:{src:"images/illustrator/Asset192.svg",alt:""}}),s("h2",{staticClass:"mb-0 mt-4"},[s("countTo",{attrs:{startVal:0,endVal:2,duration:4e3}}),t._v("K ")],1),s("h6",{staticClass:"counter-head text-muted"},[t._v("Job Placement")])])]),s("div",{staticClass:"col-md-3 col-6 mt-4 pt-2"},[s("div",{staticClass:"counter-box text-center"},[s("img",{staticClass:"avatar avatar-small",attrs:{src:"images/illustrator/Asset187.svg",alt:""}}),s("h2",{staticClass:"mb-0 mt-4"},[s("countTo",{attrs:{startVal:3,endVal:98,duration:4e3}}),t._v("% ")],1),s("h6",{staticClass:"counter-head text-muted"},[t._v("Project Complete")])])])])]),s("div",{staticClass:"container mt-100 mt-60"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col-lg-7 col-md-6"},[s("div",{staticClass:"faq-content mr-lg-5"},[s("div",{staticClass:"accordion",attrs:{id:"accordionExampleone"}},[s("b-card",{staticClass:"mb-2 border-0 rounded",attrs:{"no-body":""}},[s("b-card-header",{staticClass:"border-0 bg-light p-3 pr-5"},[s("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-1",modifiers:{"accordion-1":!0}}],staticClass:"faq position-relative text-dark",attrs:{href:"javascript: void(0);"}},[s("h6",{staticClass:"title mb-0"},[t._v(" How our "),s("span",{staticClass:"text-primary"},[t._v("Landrick")]),t._v(" work ? ")])])]),s("b-collapse",{attrs:{id:"accordion-1",visible:"",accordion:"my-accordion",role:"tabpanel"}},[s("b-card-body",{staticClass:"px-2 py-4"},[s("p",{staticClass:"text-muted mb-0 faq-ans"},[t._v(" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form. ")])])],1)],1),s("b-card",{staticClass:"mb-2 border-0 rounded",attrs:{"no-body":""}},[s("b-card-header",{staticClass:"border-0 bg-light p-3 pr-5"},[s("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-2",modifiers:{"accordion-2":!0}}],staticClass:"faq position-relative text-dark",attrs:{href:"javascript: void(0);"}},[s("h6",{staticClass:"title mb-0"},[t._v(" What is the main process open account ? ")])])]),s("b-collapse",{attrs:{id:"accordion-2",accordion:"my-accordion",role:"tabpanel"}},[s("b-card-body",{staticClass:"px-2 py-4"},[s("p",{staticClass:"text-muted mb-0 faq-ans"},[t._v(" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form. ")])])],1)],1),s("b-card",{staticClass:"mb-2 border-0 rounded",attrs:{"no-body":""}},[s("b-card-header",{staticClass:"border-0 bg-light p-3 pr-5"},[s("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-3",modifiers:{"accordion-3":!0}}],staticClass:"faq position-relative text-dark",attrs:{href:"javascript: void(0);"}},[s("h6",{staticClass:"title mb-0"},[t._v(" How to make unlimited data entry ? ")])])]),s("b-collapse",{attrs:{id:"accordion-3",accordion:"my-accordion",role:"tabpanel"}},[s("b-card-body",{staticClass:"px-2 py-4"},[s("p",{staticClass:"text-muted mb-0 faq-ans"},[t._v(" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form. ")])])],1)],1),s("b-card",{staticClass:"mb-2 border-0 rounded",attrs:{"no-body":""}},[s("b-card-header",{staticClass:"border-0 bg-light p-3 pr-5"},[s("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-4",modifiers:{"accordion-4":!0}}],staticClass:"faq position-relative text-dark",attrs:{href:"javascript: void(0);"}},[s("h6",{staticClass:"title mb-0"},[t._v(" Is "),s("span",{staticClass:"text-primary"},[t._v("Landrick")]),t._v(" safer to use with my account ? ")])])]),s("b-collapse",{attrs:{id:"accordion-4",accordion:"my-accordion",role:"tabpanel"}},[s("b-card-body",{staticClass:"px-2 py-4"},[s("p",{staticClass:"text-muted mb-0 faq-ans"},[t._v(" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form. ")])])],1)],1),s("b-card",{staticClass:"mb-2 border-0 rounded",attrs:{"no-body":""}},[s("b-card-header",{staticClass:"border-0 bg-light p-3 pr-5"},[s("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-5",modifiers:{"accordion-5":!0}}],staticClass:"faq position-relative text-dark",attrs:{href:"javascript: void(0);"}},[s("h6",{staticClass:"title mb-0"},[t._v(" How can i contact your technical team ? ")])])]),s("b-collapse",{attrs:{id:"accordion-5",accordion:"my-accordion",role:"tabpanel"}},[s("b-card-body",{staticClass:"px-2 py-4"},[s("p",{staticClass:"text-muted mb-0 faq-ans"},[t._v(" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form. ")])])],1)],1)],1)])]),t._m(15)])]),s("div",{staticClass:"container mt-100 mt-60"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-12 text-center"},[s("div",{staticClass:"section-title"},[s("h4",{staticClass:"title mb-4"},[t._v("Get Started !")]),t._m(16),s("div",{staticClass:"watch-video mt-4 pt-2"},[t._m(17),s("a",{directives:[{name:"b-modal",rawName:"v-b-modal.modal",modifiers:{modal:!0}}],staticClass:"btn btn-icon btn-pills video-play-icon btn-primary m-1",attrs:{href:"javascript: void(0);"}},[s("video-icon",{staticClass:"icons"})],1),s("span",{staticClass:"font-weight-bold text-uppercase small align-middle ml-1"},[t._v("Watch Now")])]),s("b-modal",{attrs:{id:"modal","hide-footer":"",size:"lg","header-close-variant":"white","header-class":"border-0","content-class":"border-0",centered:""}},[s("vimeo-player",{ref:"player",attrs:{"player-width":750,"player-height":450,"video-id":99025203}})],1)],1)])])])]),s("footer",{staticClass:"footer bg-light"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2"},[t._m(18),s("p",{staticClass:"mt-4 text-muted"},[t._v(" Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect. ")]),s("ul",{staticClass:"list-unstyled social-icon social mb-0 mt-4"},[s("ul",{staticClass:"list-unstyled social-icon social mb-0 mt-4"},[s("li",{staticClass:"list-inline-item"},[s("a",{staticClass:"rounded",attrs:{href:"javascript:void(0)"}},[s("facebook-icon",{staticClass:"fea icon-sm fea-social"})],1)]),s("li",{staticClass:"list-inline-item ml-1"},[s("a",{staticClass:"rounded",attrs:{href:"javascript:void(0)"}},[s("instagram-icon",{staticClass:"fea icon-sm fea-social"})],1)]),s("li",{staticClass:"list-inline-item ml-1"},[s("a",{staticClass:"rounded",attrs:{href:"javascript:void(0)"}},[s("twitter-icon",{staticClass:"fea icon-sm fea-social"})],1)]),s("li",{staticClass:"list-inline-item ml-1"},[s("a",{staticClass:"rounded",attrs:{href:"javascript:void(0)"}},[s("linkedin-icon",{staticClass:"fea icon-sm fea-social"})],1)])])])]),s("div",{staticClass:"col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0"},[s("h5",{staticClass:"text-dark footer-head"},[t._v("Company")]),s("ul",{staticClass:"list-unstyled footer-list mt-4"},[s("li",[s("router-link",{staticClass:"text-foot",attrs:{to:"/page-aboutus"}},[s("i",{staticClass:"mdi mdi-chevron-right mr-1"}),t._v(" About us")])],1),s("li",[s("router-link",{staticClass:"text-foot",attrs:{to:"/page-services"}},[s("i",{staticClass:"mdi mdi-chevron-right mr-1"}),t._v(" Services")])],1),s("li",[s("router-link",{staticClass:"text-foot",attrs:{to:"/page-team"}},[s("i",{staticClass:"mdi mdi-chevron-right mr-1"}),t._v(" Team")])],1),s("li",[s("router-link",{staticClass:"text-foot",attrs:{to:"/page-pricing"}},[s("i",{staticClass:"mdi mdi-chevron-right mr-1"}),t._v(" Pricing")])],1),s("li",[s("router-link",{staticClass:"text-foot",attrs:{to:"/page-work-modern"}},[s("i",{staticClass:"mdi mdi-chevron-right mr-1"}),t._v(" Project")])],1),s("li",[s("router-link",{staticClass:"text-foot",attrs:{to:"/page-jobs"}},[s("i",{staticClass:"mdi mdi-chevron-right mr-1"}),t._v(" Careers")])],1),s("li",[s("router-link",{staticClass:"text-foot",attrs:{to:"/page-blog-grid"}},[s("i",{staticClass:"mdi mdi-chevron-right mr-1"}),t._v(" Blog")])],1),s("li",[s("router-link",{staticClass:"text-foot",attrs:{to:"/auth-cover-login"}},[s("i",{staticClass:"mdi mdi-chevron-right mr-1"}),t._v(" Login")])],1)])]),s("div",{staticClass:"col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0"},[s("h5",{staticClass:"text-dark footer-head"},[t._v("Usefull Links")]),s("ul",{staticClass:"list-unstyled footer-list mt-4"},[s("li",[s("router-link",{staticClass:"text-foot",attrs:{to:"/page-terms"}},[s("i",{staticClass:"mdi mdi-chevron-right mr-1"}),t._v(" Terms of Services")])],1),s("li",[s("router-link",{staticClass:"text-foot",attrs:{to:"/page-privacy"}},[s("i",{staticClass:"mdi mdi-chevron-right mr-1"}),t._v(" Privacy Policy")])],1),s("li",[s("router-link",{staticClass:"text-foot",attrs:{to:"/documentation"}},[s("i",{staticClass:"mdi mdi-chevron-right mr-1"}),t._v(" Documentation")])],1),s("li",[s("router-link",{staticClass:"text-foot",attrs:{to:"/changelog"}},[s("i",{staticClass:"mdi mdi-chevron-right mr-1"}),t._v(" Changelog")])],1),s("li",[s("router-link",{staticClass:"text-foot",attrs:{to:"/components"}},[s("i",{staticClass:"mdi mdi-chevron-right mr-1"}),t._v(" Components")])],1)])]),s("div",{staticClass:"col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0"},[s("h5",{staticClass:"text-dark footer-head"},[t._v("Newsletter")]),s("p",{staticClass:"mt-4 text-muted"},[t._v(" Sign up and receive the latest tips via email. ")]),s("form",[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},[s("div",{staticClass:"foot-subscribe foot-white form-group"},[t._m(19),s("div",{staticClass:"position-relative"},[s("mail-icon",{staticClass:"fea icon-sm icons"}),s("input",{staticClass:"form-control bg-light border pl-5 rounded",attrs:{type:"email",name:"email",id:"emailsubscribe",placeholder:"Your email : ",required:""}})],1)])]),t._m(20)])])])])])]),s("footer",{staticClass:"footer footer-bar"},[s("div",{staticClass:"container text-center"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col-sm-6"},[s("div",{staticClass:"text-sm-left"},[s("p",{staticClass:"mb-0"},[t._v(" © "+t._s((new Date).getFullYear())+" Landrick. Design with "),s("i",{staticClass:"mdi mdi-heart text-danger"}),t._v(" by "),s("a",{staticClass:"text-reset",attrs:{href:"https://themesbrand.com/",target:"_blank"}},[t._v("Themesbrand")]),t._v(". ")])])]),t._m(21)])])]),s("Switcher"),s("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#topnav",expression:"'#topnav'"}],staticClass:"btn btn-icon btn-primary back-to-top",attrs:{href:"javascript: void(0);",id:"back-to-top"}},[s("arrow-up-icon",{staticClass:"icons"})],1)],1)},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"py-4 border-bottom border-top"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-lg-2 col-md-2 col-6 text-center py-4"},[s("img",{staticClass:"avatar avatar-ex-sm",attrs:{src:"images/client/amazon.svg",alt:""}})]),s("div",{staticClass:"col-lg-2 col-md-2 col-6 text-center py-4"},[s("img",{staticClass:"avatar avatar-ex-sm",attrs:{src:"images/client/google.svg",alt:""}})]),s("div",{staticClass:"col-lg-2 col-md-2 col-6 text-center py-4"},[s("img",{staticClass:"avatar avatar-ex-sm",attrs:{src:"images/client/lenovo.svg",alt:""}})]),s("div",{staticClass:"col-lg-2 col-md-2 col-6 text-center py-4"},[s("img",{staticClass:"avatar avatar-ex-sm",attrs:{src:"images/client/paypal.svg",alt:""}})]),s("div",{staticClass:"col-lg-2 col-md-2 col-6 text-center py-4"},[s("img",{staticClass:"avatar avatar-ex-sm",attrs:{src:"images/client/shopify.svg",alt:""}})]),s("div",{staticClass:"col-lg-2 col-md-2 col-6 text-center py-4"},[s("img",{staticClass:"avatar avatar-ex-sm",attrs:{src:"images/client/spotify.svg",alt:""}})])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-12 text-center"},[s("div",{staticClass:"section-title mb-4 pb-2"},[s("h4",{staticClass:"title mb-4"},[t._v("Sample Features")]),s("p",{staticClass:"text-muted para-desc mx-auto mb-0"},[t._v(" Start working with "),s("span",{staticClass:"text-primary font-weight-bold"},[t._v("Landrick")]),t._v(" that can provide everything you need to generate awareness, drive traffic, connect. ")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"media-body"},[s("h4",{staticClass:"title mb-0"},[t._v("Fully Responsive")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"media-body"},[s("h4",{staticClass:"title mb-0"},[t._v("Browser Compatibility")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"media-body"},[s("h4",{staticClass:"title mb-0"},[t._v("Retina Ready")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"media-body"},[s("h4",{staticClass:"title mb-0"},[t._v("Based On Bootstrap 4")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"media-body"},[s("h4",{staticClass:"title mb-0"},[t._v("Feather Icons")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"media-body"},[s("h4",{staticClass:"title mb-0"},[t._v("Built With SASS")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"media-body"},[s("h4",{staticClass:"title mb-0"},[t._v("W3c Valid Code")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"media-body"},[s("h4",{staticClass:"title mb-0"},[t._v("Flaticon Icons")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"media-body"},[s("h4",{staticClass:"title mb-0"},[t._v("Easy to customize")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-12 mt-4 pt-2 text-center"},[s("a",{staticClass:"btn btn-primary",attrs:{href:"javascript:void(0)"}},[t._v("See More "),s("i",{staticClass:"mdi mdi-arrow-right"})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container mt-100 mt-60"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col-lg-5 col-md-6"},[s("img",{attrs:{src:"images/illustrator/youtube-media.svg",alt:""}})]),s("div",{staticClass:"col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0"},[s("div",{staticClass:"section-title ml-lg-5"},[s("h4",{staticClass:"title mb-4"},[t._v(" A better compose with landrick marketing ")]),s("p",{staticClass:"text-muted"},[t._v(" You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website. ")]),s("ul",{staticClass:"list-unstyled text-muted"},[s("li",{staticClass:"mb-0"},[s("span",{staticClass:"text-primary h5 mr-2"},[s("i",{staticClass:"uil uil-check-circle align-middle"})]),t._v("Digital Marketing Solutions for Tomorrow ")]),s("li",{staticClass:"mb-0"},[s("span",{staticClass:"text-primary h5 mr-2"},[s("i",{staticClass:"uil uil-check-circle align-middle"})]),t._v("Our Talented & Experienced Marketing Agency ")]),s("li",{staticClass:"mb-0"},[s("span",{staticClass:"text-primary h5 mr-2"},[s("i",{staticClass:"uil uil-check-circle align-middle"})]),t._v("Create your own skin to match your brand ")])])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-12 text-center"},[s("div",{staticClass:"section-title mb-4 pb-2"},[s("h4",{staticClass:"title mb-4"},[t._v("Our Valuable Clients")]),s("p",{staticClass:"text-muted para-desc mx-auto mb-0"},[t._v(" Start working with "),s("span",{staticClass:"text-primary font-weight-bold"},[t._v("Landrick")]),t._v(" that can provide everything you need to generate awareness, drive traffic, connect. ")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-12 text-center"},[s("div",{staticClass:"section-title mb-4 pb-2"},[s("h4",{staticClass:"title mb-4"},[t._v(" See everything about your "),s("span",{staticClass:"text-primary"},[t._v("Landrick")])]),s("p",{staticClass:"text-muted para-desc mx-auto mb-0"},[t._v(" Start working with "),s("span",{staticClass:"text-primary font-weight-bold"},[t._v("Landrick")]),t._v(" that can provide everything you need to generate awareness, drive traffic, connect. ")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0"},[s("img",{attrs:{src:"images/illustrator/faq.svg",alt:""}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",{staticClass:"text-muted para-desc mx-auto"},[t._v(" Start working with "),s("span",{staticClass:"text-primary font-weight-bold"},[t._v("Landrick")]),t._v(" that can provide everything you need to generate awareness, drive traffic, connect. ")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{staticClass:"btn btn-primary mb-2",attrs:{href:"https://1.envato.market/4n73n",target:"_blank"}},[t._v("Buy Now "),s("span",{staticClass:"badge badge-pill badge-danger ml-2"},[t._v("v2.5")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{staticClass:"logo-footer",attrs:{href:"#"}},[s("img",{attrs:{src:"images/logo-dark.png",height:"24",alt:""}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("label",{staticClass:"text-muted"},[t._v("Write your email "),s("span",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-lg-12"},[s("input",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit",id:"submitsubscribe",name:"send",value:"Subscribe"}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0"},[s("ul",{staticClass:"list-unstyled text-sm-right mb-0"},[s("li",{staticClass:"list-inline-item"},[s("a",{attrs:{href:"javascript:void(0)"}},[s("img",{staticClass:"avatar avatar-ex-sm",attrs:{src:"images/payments/american-ex.png",title:"American Express",alt:""}})])]),s("li",{staticClass:"list-inline-item"},[s("a",{attrs:{href:"javascript:void(0)"}},[s("img",{staticClass:"avatar avatar-ex-sm ml-1",attrs:{src:"images/payments/discover.png",title:"Discover",alt:""}})])]),s("li",{staticClass:"list-inline-item"},[s("a",{attrs:{href:"javascript:void(0)"}},[s("img",{staticClass:"avatar avatar-ex-sm ml-1",attrs:{src:"images/payments/master-card.png",title:"Master Card",alt:""}})])]),s("li",{staticClass:"list-inline-item"},[s("a",{attrs:{href:"javascript:void(0)"}},[s("img",{staticClass:"avatar avatar-ex-sm ml-1",attrs:{src:"images/payments/paypal.png",title:"Paypal",alt:""}})])]),s("li",{staticClass:"list-inline-item"},[s("a",{attrs:{href:"javascript:void(0)"}},[s("img",{staticClass:"avatar avatar-ex-sm ml-1",attrs:{src:"images/payments/visa.png",title:"Visa",alt:""}})])])])])}],r=s("0a35"),n=s("ec1b"),l=s.n(n),o=s("0a63"),c=s("9d8d"),d=s("5ce9"),m=s("da27"),u={data:function(){return{testimonialData:[{id:1,profile:"images/client/01.jpg",message:"It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.",name:"Thomas Israel",designation:"C.E.O"},{id:2,profile:"images/client/02.jpg",message:"One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.",name:"Barbara McIntosh",designation:"M.D"},{id:3,profile:"images/client/03.jpg",message:"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",name:"Carl Oliver",designation:"P.A"},{id:4,profile:"images/client/04.jpg",message:"According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero.",name:"Christa Smith",designation:"Manager"},{id:5,profile:"images/client/05.jpg",message:"There is now an abundance of readable dummy texts. These are usually used when a text is required.",name:"Dean Tolle",designation:"Developer"},{id:6,profile:"images/client/05.jpg",message:"Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts.",name:"Jill Webb",designation:"Designer"}]}},components:{Navbar:c["a"],Switcher:d["a"],Testimonial:m["a"],Carousel:o["Carousel"],Slide:o["Slide"],ArrowUpIcon:r["g"],MonitorIcon:r["X"],HeartIcon:r["L"],EyeIcon:r["B"],BoldIcon:r["k"],FeatherIcon:r["E"],CodeIcon:r["t"],UserCheckIcon:r["ob"],VideoIcon:r["sb"],GitMergeIcon:r["H"],SettingsIcon:r["gb"],FacebookIcon:r["D"],InstagramIcon:r["P"],TwitterIcon:r["nb"],LinkedinIcon:r["T"],MailIcon:r["U"],countTo:l.a}},v=u,p=s("2877"),h=Object(p["a"])(v,i,e,!1,null,null,null);a["default"]=h.exports},ec1b:function(t,a,s){!function(a,s){t.exports=s()}(0,(function(){return function(t){function a(i){if(s[i])return s[i].exports;var e=s[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,a),e.l=!0,e.exports}var s={};return a.m=t,a.c=s,a.i=function(t){return t},a.d=function(t,s,i){a.o(t,s)||Object.defineProperty(t,s,{configurable:!1,enumerable:!0,get:i})},a.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(s,"a",s),s},a.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},a.p="/dist/",a(a.s=2)}([function(t,a,s){var i=s(4)(s(1),s(5),null,null);t.exports=i.exports},function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=s(3);a.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,a,s,i){return s*(1-Math.pow(2,-10*t/i))*1024/1023+a}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,i.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,i.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,i.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,i.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var a=t-this.startTime;this.remaining=this.localDuration-a,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(a,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(a,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(a/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(a/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),a<this.localDuration?this.rAF=(0,i.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals),t+="";var a=t.split("."),s=a[0],i=a.length>1?this.decimal+a[1]:"",e=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;e.test(s);)s=s.replace(e,"$1"+this.separator+"$2");return this.prefix+s+i+this.suffix}},destroyed:function(){(0,i.cancelAnimationFrame)(this.rAF)}}},function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=s(0),e=function(t){return t&&t.__esModule?t:{default:t}}(i);a.default=e.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",e.default)},function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=0,e="webkit moz ms o".split(" "),r=void 0,n=void 0;if("undefined"==typeof window)a.requestAnimationFrame=r=function(){},a.cancelAnimationFrame=n=function(){};else{a.requestAnimationFrame=r=window.requestAnimationFrame,a.cancelAnimationFrame=n=window.cancelAnimationFrame;for(var l=void 0,o=0;o<e.length&&(!r||!n);o++)l=e[o],a.requestAnimationFrame=r=r||window[l+"RequestAnimationFrame"],a.cancelAnimationFrame=n=n||window[l+"CancelAnimationFrame"]||window[l+"CancelRequestAnimationFrame"];r&&n||(a.requestAnimationFrame=r=function(t){var a=(new Date).getTime(),s=Math.max(0,16-(a-i)),e=window.setTimeout((function(){t(a+s)}),s);return i=a+s,e},a.cancelAnimationFrame=n=function(t){window.clearTimeout(t)})}a.requestAnimationFrame=r,a.cancelAnimationFrame=n},function(t,a){t.exports=function(t,a,s,i){var e,r=t=t||{},n=typeof t.default;"object"!==n&&"function"!==n||(e=t,r=t.default);var l="function"==typeof r?r.options:r;if(a&&(l.render=a.render,l.staticRenderFns=a.staticRenderFns),s&&(l._scopeId=s),i){var o=Object.create(l.computed||null);Object.keys(i).forEach((function(t){var a=i[t];o[t]=function(){return a}})),l.computed=o}return{esModule:e,exports:r,options:l}}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement;return(t._self._c||a)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])}))}}]);
//# sourceMappingURL=chunk-00f8d069.2e37f80d.js.map