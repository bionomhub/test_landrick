(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d226385"],{e873:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("Navbar",{attrs:{isIcons:!0}}),i("section",{staticClass:"bg-half bg-light d-table w-100"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-lg-12 text-center"},[i("div",{staticClass:"page-next-level"},[i("h4",{staticClass:"title"},[t._v("Branded T-Shirts")]),i("div",{staticClass:"page-next"},[i("nav",{staticClass:"d-inline-block",attrs:{"aria-label":"breadcrumb"}},[i("ul",{staticClass:"breadcrumb bg-white rounded shadow mb-0"},[i("li",{staticClass:"breadcrumb-item"},[i("router-link",{attrs:{to:"/"}},[t._v("Landrick")])],1),i("li",{staticClass:"breadcrumb-item"},[i("router-link",{attrs:{to:"/index-shop"}},[t._v("Shop")])],1),i("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(" Product Details ")])])])])])])])])]),i("div",{staticClass:"position-relative"},[i("div",{staticClass:"shape overflow-hidden text-white"},[i("svg",{attrs:{viewBox:"0 0 2880 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z",fill:"currentColor"}})])])]),i("router-view"),i("section",{staticClass:"section"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row align-items-center"},[i("div",{staticClass:"col-md-5"},[i("VueSlickCarousel",{ref:"c1",attrs:{arrows:!1,focusOnSelect:!0,asNavFor:t.$refs.c2,dots:!1,autoplay:!0,fade:!0}},[i("div",[i("img",{staticClass:"img-fluid rounded",attrs:{src:t.product_detales.image,alt:""}})]),i("div",[i("img",{staticClass:"img-fluid rounded",attrs:{src:t.product_detales.image,alt:""}})]),i("div",[i("img",{staticClass:"img-fluid rounded",attrs:{src:t.product_detales.image,alt:""}})]),i("div",[i("img",{staticClass:"img-fluid rounded",attrs:{src:t.product_detales.image,alt:""}})]),i("div",[i("img",{staticClass:"img-fluid rounded",attrs:{src:t.product_detales.image,alt:""}})]),i("div",[i("img",{staticClass:"img-fluid rounded",attrs:{src:t.product_detales.image,alt:""}})])]),i("VueSlickCarousel",{ref:"c2",staticClass:"slick-slide",attrs:{asNavFor:t.$refs.c1,arrows:!1,focusOnSelect:!0,slidesToShow:3}},[i("div",[i("img",{staticClass:"img-fluid",attrs:{src:t.product_detales.image,alt:""}})]),i("div",[i("img",{staticClass:"img-fluid",attrs:{src:t.product_detales.image,alt:""}})]),i("div",[i("img",{staticClass:"img-fluid",attrs:{src:t.product_detales.image,alt:""}})]),i("div",[i("img",{staticClass:"img-fluid",attrs:{src:t.product_detales.image,alt:""}})]),i("div",[i("img",{staticClass:"img-fluid",attrs:{src:t.product_detales.image,alt:""}})]),i("div",[i("img",{staticClass:"img-fluid",attrs:{src:t.product_detales.image,alt:""}})])])],1),i("div",{staticClass:"col-md-7 mt-4 mt-sm-0 pt-2 pt-sm-0"},[i("div",{staticClass:"section-title ml-md-4"},[i("h4",{staticClass:"title"},[t._v(t._s(t.product_detales.title))]),i("h5",{staticClass:"text-muted"},[t._v(" "+t._s(t.product_detales.price)+" "),i("del",{staticClass:"text-danger ml-2"},[t._v(t._s(t.product_detales.price))])]),t._m(0),i("h5",{staticClass:"mt-4 py-2"},[t._v("Overview :")]),i("p",{staticClass:"text-muted"},[t._v(" "+t._s(t.product_detales.description)+" ")]),t._m(1),i("div",{staticClass:"row mt-4 pt-2"},[t._m(2),i("div",{staticClass:"col-lg-6 col-12 mt-4 mt-lg-0"},[i("div",{staticClass:"d-flex shop-list align-items-center"},[i("h6",{staticClass:"mb-0"},[t._v("Количество:")]),i("div",{staticClass:"ml-3"},[i("input",{staticClass:"minus btn btn-icon btn-soft-primary font-weight-bold",attrs:{type:"button",value:"-"},on:{click:t.decrement}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.countval,expression:"countval"}],staticClass:"btn btn-icon btn-soft-primary font-weight-bold ml-1",attrs:{type:"text",step:"1",min:"1",name:"quantity",value:"1",title:"Qty"},domProps:{value:t.countval},on:{input:function(s){s.target.composing||(t.countval=s.target.value)}}}),i("input",{staticClass:"plus btn btn-icon btn-soft-primary font-weight-bold ml-1",attrs:{type:"button",value:"+"},on:{click:t.increment}})])])])]),i("div",{staticClass:"mt-4 pt-2"},[i("a",{staticClass:"btn btn-primary",attrs:{href:"javascript:void(0)"}},[t._v("Shop Now")]),i("a",{staticClass:"btn btn-soft-primary ml-2",on:{click:function(s){return s.preventDefault(),t.ADD_TO_CART(t.get_click_product_id)}}},[t._v("Добавить в корзину")])])])])])]),i("div",{staticClass:"container mt-100 mt-60"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("b-tabs",{attrs:{"content-class":"mt-5",pills:"","nav-class":"bg-white shadow"}},[i("b-tab",{attrs:{active:"","title-item-class":"m-1"},scopedSlots:t._u([{key:"title",fn:function(){return[i("span",{staticClass:"nav-link py-2 px-5"},[i("div",{staticClass:"text-center"},[i("h6",{staticClass:"mb-0"},[t._v("Описание")])])])]},proxy:!0}])},[i("p",{staticClass:"text-muted mb-0"},[t._v(" "+t._s(t.product_detales.description)+" ")])]),i("b-tab",{attrs:{"title-item-class":"m-1"},scopedSlots:t._u([{key:"title",fn:function(){return[i("span",{staticClass:"nav-link py-2 px-5 rounded"},[i("div",{staticClass:"text-center"},[i("h6",{staticClass:"mb-0"},[t._v("Дополнительная информация")])])])]},proxy:!0}])},[i("table",{staticClass:"table"},[i("tbody",[i("tr",[i("td",{staticStyle:{width:"100px"}},[t._v("Color")]),i("td",{staticClass:"text-muted"},[t._v("Red, White, Black, Orange")])]),i("tr",[i("td",[t._v("Material")]),i("td",{staticClass:"text-muted"},[t._v("Cotton")])]),i("tr",[i("td",[t._v("Size")]),i("td",{staticClass:"text-muted"},[t._v("S, M, L, XL, XXL")])])])])]),i("b-tab",{attrs:{"title-item-class":"m-1"},scopedSlots:t._u([{key:"title",fn:function(){return[i("span",{staticClass:"nav-link py-2 px-5 rounded"},[i("div",{staticClass:"text-center"},[i("h6",{staticClass:"mb-0"},[t._v("Отзывы")])])])]},proxy:!0}])},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-6"},[i("ul",{staticClass:"media-list list-unstyled mb-0"},[i("li",[i("div",{staticClass:"d-flex justify-content-between"},[i("div",{staticClass:"media align-items-center"},[i("a",{staticClass:"pr-3",attrs:{href:"#"}},[i("img",{staticClass:"img-fluid avatar avatar-md-sm rounded-circle shadow",attrs:{src:"images/client/01.jpg",alt:"img"}})]),i("div",{staticClass:"commentor-detail"},[i("h6",{staticClass:"mb-0"},[i("a",{staticClass:"text-dark media-heading",attrs:{href:"javascript:void(0)"}},[t._v("Lorenzo Peterson")])]),i("small",{staticClass:"text-muted"},[t._v("15th August, 2019 at 01:25 pm")])])]),i("ul",{staticClass:"list-unstyled mb-0"},[i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star text-warning"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star text-warning"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star text-warning"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star text-warning"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star text-warning"})])])]),i("div",{staticClass:"mt-3"},[i("p",{staticClass:"text-muted font-italic p-3 bg-light rounded"},[t._v(' " Awesome product " ')])])]),i("li",{staticClass:"mt-4"},[i("div",{staticClass:"d-flex justify-content-between"},[i("div",{staticClass:"media align-items-center"},[i("a",{staticClass:"pr-3",attrs:{href:"#"}},[i("img",{staticClass:"img-fluid avatar avatar-md-sm rounded-circle shadow",attrs:{src:"images/client/02.jpg",alt:"img"}})]),i("div",{staticClass:"commentor-detail"},[i("h6",{staticClass:"mb-0"},[i("a",{staticClass:"media-heading text-dark",attrs:{href:"javascript:void(0)"}},[t._v("Tammy Camacho")])]),i("small",{staticClass:"text-muted"},[t._v("15th August, 2019 at 05:44 pm")])])]),i("ul",{staticClass:"list-unstyled mb-0"},[i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star text-warning"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star text-warning"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star text-warning"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star text-warning"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star-outline text-warning"})])])]),i("div",{staticClass:"mt-3"},[i("p",{staticClass:"text-muted font-italic p-3 bg-light rounded mb-0"},[t._v(' " Good " ')])])])])]),i("div",{staticClass:"col-lg-6 mt-4 mt-lg-0 pt-2 pt-lg-0"},[i("form",{staticClass:"ml-lg-4"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("h5",[t._v("Add your review:")])]),i("div",{staticClass:"col-12 mt-4"},[i("h6",{staticClass:"small font-weight-bold"},[t._v("Your Rating:")]),i("a",{staticClass:"d-inline-block mr-3",attrs:{href:"javascript:void(0)"}},[i("ul",{staticClass:"list-unstyled mb-0 small"},[i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star text-warning"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star-outline text-warning"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star-outline text-warning"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star-outline text-warning"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star-outline text-warning"})])])]),i("a",{staticClass:"d-inline-block mr-3",attrs:{href:"javascript:void(0)"}},[i("ul",{staticClass:"list-unstyled mb-0 small"},[i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star text-warning"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star text-warning"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star-outline text-warning"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star-outline text-warning"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star-outline text-warning"})])])]),i("a",{staticClass:"d-inline-block mr-3",attrs:{href:"javascript:void(0)"}},[i("ul",{staticClass:"list-unstyled mb-0 small"},[i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star text-warning"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star text-warning"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star text-warning"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star-outline text-warning"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star-outline text-warning"})])])]),i("a",{staticClass:"d-inline-block mr-3",attrs:{href:"javascript:void(0)"}},[i("ul",{staticClass:"list-unstyled mb-0 small"},[i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star text-warning"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star text-warning"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star text-warning"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star text-warning"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star-outline text-warning"})])])]),i("a",{staticClass:"d-inline-block",attrs:{href:"javascript:void(0)"}},[i("ul",{staticClass:"list-unstyled mb-0 small"},[i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star text-warning"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star text-warning"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star text-warning"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star text-warning"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star text-warning"})])])])]),i("div",{staticClass:"col-md-12 mt-3"},[i("div",{staticClass:"form-group"},[i("label",[t._v("Your Review:")]),i("div",{staticClass:"position-relative"},[i("message-circle-icon",{staticClass:"fea icon-sm icons"}),i("textarea",{staticClass:"form-control pl-5",attrs:{id:"message",placeholder:"Your Comment",rows:"5",name:"message",required:""}})],1)])]),i("div",{staticClass:"col-lg-6"},[i("div",{staticClass:"form-group"},[i("label",[t._v("Name "),i("span",{staticClass:"text-danger"},[t._v("*")])]),i("div",{staticClass:"position-relative"},[i("user-icon",{staticClass:"fea icon-sm icons"}),i("input",{staticClass:"form-control pl-5",attrs:{id:"name",name:"name",type:"text",placeholder:"Name",required:""}})],1)])]),i("div",{staticClass:"col-lg-6"},[i("div",{staticClass:"form-group"},[i("label",[t._v("Your Email "),i("span",{staticClass:"text-danger"},[t._v("*")])]),i("div",{staticClass:"position-relative"},[i("mail-icon",{staticClass:"fea icon-sm icons"}),i("input",{staticClass:"form-control pl-5",attrs:{id:"email",type:"email",placeholder:"Email",name:"email",required:""}})],1)])]),i("div",{staticClass:"col-md-12"},[i("div",{staticClass:"send"},[i("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v(" Submit ")])])])])])])])])],1)],1)])]),i("div",{staticClass:"container mt-100 mt-60"},[i("div",{staticClass:"row"},[t._m(3),i("div",{staticClass:"col-12 mt-4"},[i("carousel",{staticClass:"owl-carousel owl-theme",attrs:{id:"client-four",dir:"ltr","per-page":3,loop:!0}},[i("Slide",[i("div",{staticClass:"card shop-list border-0 position-relative overflow-hidden m-2"},[i("div",{staticClass:"shop-image position-relative overflow-hidden rounded shadow"},[i("router-link",{attrs:{to:"/shop-product-detail"}},[i("img",{staticClass:"img-fluid",attrs:{src:"images/shop/product/s1.jpg",alt:""}})]),i("router-link",{staticClass:"overlay-work",attrs:{to:"/shop-product-detail"}},[i("img",{staticClass:"img-fluid",attrs:{src:"images/shop/product/s-1.jpg",alt:""}})]),i("ul",{staticClass:"list-unstyled shop-icons"},[i("li",[i("a",{staticClass:"btn btn-icon btn-pills btn-soft-danger",attrs:{href:"javascript:void(0)"}},[i("heart-icon",{staticClass:"icons"})],1)]),i("li",{staticClass:"mt-2"},[i("a",{staticClass:"btn btn-icon btn-pills btn-soft-primary",attrs:{href:"shop-product-detail"}},[i("eye-icon",{staticClass:"icons"})],1)]),i("li",{staticClass:"mt-2"},[i("router-link",{staticClass:"btn btn-icon btn-pills btn-soft-warning",attrs:{to:"/shop-cart"}},[i("shopping-cart-icon",{staticClass:"icons"})],1)],1)])],1),i("div",{staticClass:"card-body content pt-4 p-2"},[i("router-link",{staticClass:"text-dark product-name h6",attrs:{to:"/shop-product-detail"}},[t._v("Branded T-Shirt")]),i("div",{staticClass:"d-flex justify-content-between mt-1"},[i("h6",{staticClass:"text-muted small font-italic mb-0 mt-1"},[t._v(" $16.00 "),i("del",{staticClass:"text-danger ml-2"},[t._v("$21.00")])]),i("ul",{staticClass:"list-unstyled text-warning mb-0"},[i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star"})])])])],1)])]),i("Slide",[i("div",{staticClass:"card shop-list border-0 position-relative overflow-hidden m-2"},[i("div",{staticClass:"shop-image position-relative overflow-hidden rounded shadow"},[i("router-link",{attrs:{to:"/shop-product-detail"}},[i("img",{staticClass:"img-fluid",attrs:{src:"images/shop/product/s3.jpg",alt:""}})]),i("router-link",{staticClass:"overlay-work",attrs:{to:"/shop-product-detail"}},[i("img",{staticClass:"img-fluid",attrs:{src:"images/shop/product/s-3.jpg",alt:""}})]),i("ul",{staticClass:"list-unstyled shop-icons"},[i("li",[i("a",{staticClass:"btn btn-icon btn-pills btn-soft-danger",attrs:{href:"javascript:void(0)"}},[i("heart-icon",{staticClass:"icons"})],1)]),i("li",{staticClass:"mt-2"},[i("a",{staticClass:"btn btn-icon btn-pills btn-soft-primary",attrs:{href:"shop-product-detail"}},[i("eye-icon",{staticClass:"icons"})],1)]),i("li",{staticClass:"mt-2"},[i("router-link",{staticClass:"btn btn-icon btn-pills btn-soft-warning",attrs:{to:"/shop-cart"}},[i("shopping-cart-icon",{staticClass:"icons"})],1)],1)])],1),i("div",{staticClass:"card-body content pt-4 p-2"},[i("router-link",{staticClass:"text-dark product-name h6",attrs:{to:"/shop-product-detail"}},[t._v("Elegent Watch")]),i("div",{staticClass:"d-flex justify-content-between mt-1"},[i("h6",{staticClass:"text-muted small font-italic mb-0 mt-1"},[t._v(" $5.00 "),i("span",{staticClass:"text-success ml-1"},[t._v("30% off")])]),i("ul",{staticClass:"list-unstyled text-warning mb-0"},[i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star"})])])])],1)])]),i("Slide",[i("div",{staticClass:"card shop-list border-0 position-relative overflow-hidden m-2"},[i("div",{staticClass:"shop-image position-relative overflow-hidden rounded shadow"},[i("router-link",{attrs:{to:"/shop-product-detail"}},[i("img",{staticClass:"img-fluid",attrs:{src:"images/shop/product/s6.jpg",alt:""}})]),i("router-link",{staticClass:"overlay-work",attrs:{to:"/shop-product-detail"}},[i("img",{staticClass:"img-fluid",attrs:{src:"images/shop/product/s-6.jpg",alt:""}})]),i("ul",{staticClass:"list-unstyled shop-icons"},[i("li",[i("a",{staticClass:"btn btn-icon btn-pills btn-soft-danger",attrs:{href:"javascript:void(0)"}},[i("heart-icon",{staticClass:"icons"})],1)]),i("li",{staticClass:"mt-2"},[i("a",{staticClass:"btn btn-icon btn-pills btn-soft-primary",attrs:{href:"shop-product-detail"}},[i("eye-icon",{staticClass:"icons"})],1)]),i("li",{staticClass:"mt-2"},[i("router-link",{staticClass:"btn btn-icon btn-pills btn-soft-warning",attrs:{to:"/shop-cart"}},[i("shopping-cart-icon",{staticClass:"icons"})],1)],1)])],1),i("div",{staticClass:"card-body content pt-4 p-2"},[i("router-link",{staticClass:"text-dark product-name h6",attrs:{to:"/shop-product-detail"}},[t._v("Elegent Mug")]),i("div",{staticClass:"d-flex justify-content-between mt-1"},[i("h6",{staticClass:"text-muted small font-italic mb-0 mt-1"},[t._v(" $4.50 "),i("del",{staticClass:"text-danger ml-2"},[t._v("$6.50")])]),i("ul",{staticClass:"list-unstyled text-warning mb-0"},[i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star"})])])])],1)])]),i("Slide",[i("div",{staticClass:"card shop-list border-0 position-relative overflow-hidden m-2"},[i("div",{staticClass:"shop-image position-relative overflow-hidden rounded shadow"},[i("router-link",{attrs:{to:"/shop-product-detail"}},[i("img",{staticClass:"img-fluid",attrs:{src:"images/shop/product/s8.jpg",alt:""}})]),i("router-link",{staticClass:"overlay-work",attrs:{to:"/shop-product-detail"}},[i("img",{staticClass:"img-fluid",attrs:{src:"images/shop/product/s-8.jpg",alt:""}})]),i("ul",{staticClass:"list-unstyled shop-icons"},[i("li",[i("a",{staticClass:"btn btn-icon btn-pills btn-soft-danger",attrs:{href:"javascript:void(0)"}},[i("heart-icon",{staticClass:"icons"})],1)]),i("li",{staticClass:"mt-2"},[i("router-link",{staticClass:"btn btn-icon btn-pills btn-soft-primary",attrs:{to:"/shop-product-detail"}},[i("eye-icon",{staticClass:"icons"})],1)],1),i("li",{staticClass:"mt-2"},[i("router-link",{staticClass:"btn btn-icon btn-pills btn-soft-warning",attrs:{to:"/shop-cart"}},[i("shopping-cart-icon",{staticClass:"icons"})],1)],1)])],1),i("div",{staticClass:"card-body content pt-4 p-2"},[i("router-link",{staticClass:"text-dark product-name h6",attrs:{to:"/shop-product-detail"}},[t._v("Wooden Stools")]),i("div",{staticClass:"d-flex justify-content-between mt-1"},[i("h6",{staticClass:"text-muted small font-italic mb-0 mt-1"},[t._v(" $22.00 "),i("del",{staticClass:"text-danger ml-2"},[t._v("$25.00")])]),i("ul",{staticClass:"list-unstyled text-warning mb-0"},[i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star"})])])])],1)])]),i("Slide",[i("div",{staticClass:"card shop-list border-0 position-relative overflow-hidden m-2"},[i("div",{staticClass:"shop-image position-relative overflow-hidden rounded shadow"},[i("router-link",{attrs:{to:"/shop-product-detail"}},[i("img",{staticClass:"img-fluid",attrs:{src:"images/shop/product/s14.jpg",alt:""}})]),i("router-link",{staticClass:"overlay-work",attrs:{to:"/shop-product-detail"}},[i("img",{staticClass:"img-fluid",attrs:{src:"images/shop/product/s-14.jpg",alt:""}})]),i("ul",{staticClass:"list-unstyled shop-icons"},[i("li",[i("a",{staticClass:"btn btn-icon btn-pills btn-soft-danger",attrs:{href:"javascript:void(0)"}},[i("heart-icon",{staticClass:"icons"})],1)]),i("li",{staticClass:"mt-2"},[i("router-link",{staticClass:"btn btn-icon btn-pills btn-soft-primary",attrs:{to:"/shop-product-detail"}},[i("eye-icon",{staticClass:"icons"})],1)],1),i("li",{staticClass:"mt-2"},[i("router-link",{staticClass:"btn btn-icon btn-pills btn-soft-warning",attrs:{to:"/shop-cart"}},[i("shopping-cart-icon",{staticClass:"icons"})],1)],1)])],1),i("div",{staticClass:"card-body content pt-4 p-2"},[i("router-link",{staticClass:"text-dark product-name h6",attrs:{to:"/shop-product-detail"}},[t._v("Women Block Heels")]),i("div",{staticClass:"d-flex justify-content-between mt-1"},[i("h6",{staticClass:"text-muted small font-italic mb-0 mt-1"},[t._v(" $21.00 "),i("del",{staticClass:"text-danger ml-2"},[t._v("$25.00")])]),i("ul",{staticClass:"list-unstyled text-warning mb-0"},[i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star"})])])])],1)])])],1)],1)])]),i("div",{staticClass:"container-fluid mt-100 mt-60 px-0"},[i("div",{staticClass:"py-5 bg-light"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row align-items-center"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"d-flex align-items-center justify-content-between"},[i("router-link",{staticClass:"text-dark align-items-center",attrs:{tag:"a",to:"/shop-product-detail"}},[i("span",{staticClass:"pro-icons"},[i("svg",{staticClass:"feather feather-arrow-left fea icon-sm",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[i("line",{attrs:{x1:"19",y1:"12",x2:"5",y2:"12"}}),i("polyline",{attrs:{points:"12 19 5 12 12 5"}})])]),i("span",{staticClass:"text-muted d-none d-md-inline-block"},[t._v("Web Development")]),i("img",{staticClass:"avatar avatar-small rounded shadow ml-2",staticStyle:{height:"auto"},attrs:{src:"images/work/6.jpg",alt:""}})]),i("router-link",{staticClass:"btn btn-lg btn-pills btn-icon btn-soft-primary",attrs:{tag:"a",to:"/"}},[i("svg",{staticClass:"feather feather-home icons",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[i("path",{attrs:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}}),i("polyline",{attrs:{points:"9 22 9 12 15 12 15 22"}})])]),i("router-link",{staticClass:"text-dark align-items-center",attrs:{tag:"a",to:"/shop-product-detail"}},[i("img",{staticClass:"avatar avatar-small rounded shadow mr-2",staticStyle:{height:"auto"},attrs:{src:"images/work/7.jpg",alt:""}}),i("span",{staticClass:"text-muted d-none d-md-inline-block"},[t._v("Web Designer")]),i("span",{staticClass:"pro-icons"},[i("svg",{staticClass:"feather feather-arrow-right fea icon-sm",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[i("line",{attrs:{x1:"5",y1:"12",x2:"19",y2:"12"}}),i("polyline",{attrs:{points:"12 5 19 12 12 19"}})])])])],1)])])])])])]),i("Footer"),i("Switcher"),i("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#topnav",expression:"'#topnav'"}],staticClass:"btn btn-icon btn-primary back-to-top",attrs:{href:"javascript: void(0);",id:"back-to-top"}},[i("arrow-up-icon",{staticClass:"icons"})],1)],1)},l=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("ul",{staticClass:"list-unstyled text-warning h5 mb-0"},[i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"mdi mdi-star"})])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("ul",{staticClass:"list-unstyled text-muted"},[i("li",{staticClass:"mb-0"},[i("span",{staticClass:"text-primary h5 mr-2"},[i("i",{staticClass:"uil uil-check-circle align-middle"})]),t._v(" Digital Marketing Solutions for Tomorrow ")]),i("li",{staticClass:"mb-0"},[i("span",{staticClass:"text-primary h5 mr-2"},[i("i",{staticClass:"uil uil-check-circle align-middle"})]),t._v(" Our Talented & Experienced Marketing Agency ")]),i("li",{staticClass:"mb-0"},[i("span",{staticClass:"text-primary h5 mr-2"},[i("i",{staticClass:"uil uil-check-circle align-middle"})]),t._v(" Create your own skin to match your brand ")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"col-lg-6 col-12"},[i("div",{staticClass:"d-flex align-items-center"},[i("h6",{staticClass:"mb-0"},[t._v("Объем:")]),i("ul",{staticClass:"list-unstyled mb-0 ml-3"},[i("li",{staticClass:"list-inline-item"},[i("a",{staticClass:"btn btn-icon btn-soft-primary",attrs:{href:"javascript:void(0)"}},[t._v("50")])]),i("li",{staticClass:"list-inline-item ml-1"},[i("a",{staticClass:"btn btn-icon btn-soft-primary",attrs:{href:"javascript:void(0)"}},[t._v("100")])]),i("li",{staticClass:"list-inline-item ml-1"},[i("a",{staticClass:"btn btn-icon btn-soft-primary",attrs:{href:"javascript:void(0)"}},[t._v("150")])]),i("li",{staticClass:"list-inline-item ml-1"},[i("a",{staticClass:"btn btn-icon btn-soft-primary",attrs:{href:"javascript:void(0)"}},[t._v("200")])])])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"col-12"},[i("h5",{staticClass:"mb-0"},[t._v("Похожие продукты")])])}],e=i("5530"),n=i("0a35"),c=i("0a63"),r=i("a7ab"),o=i.n(r),d=(i("7b8d"),i("9d8d")),m=i("5ce9"),C=i("076e"),u=i("2f62"),p={data:function(){return{countval:1}},components:{Navbar:d["a"],Switcher:m["a"],Footer:C["a"],Carousel:c["Carousel"],Slide:c["Slide"],ArrowUpIcon:n["g"],VueSlickCarousel:o.a,HeartIcon:n["L"],EyeIcon:n["B"],ShoppingCartIcon:n["ib"],MessageCircleIcon:n["W"],MailIcon:n["U"],UserIcon:n["pb"]},methods:Object(e["a"])(Object(e["a"])({},Object(u["b"])(["ADD_TO_CART"])),{},{increment:function(){this.countval++},decrement:function(){this.countval>0&&this.countval--}}),computed:Object(e["a"])(Object(e["a"])({},Object(u["c"])(["get_click_product_id","get_products"])),{},{productId:function(){return+this.$route.params.id},countval_product:function(){return this.countval},product_detales:function(){return this.get_products[this.productId-1]}})},v=p,g=i("2877"),h=Object(g["a"])(v,a,l,!1,null,null,null);s["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d226385.86dcbe71.js.map