(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c117a"],{4525:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"back-to-home rounded d-none d-sm-block"},[a("router-link",{staticClass:"btn btn-icon btn-soft-primary",attrs:{to:"/"}},[a("home-icon",{staticClass:"icons"})],1)],1),a("section",{staticClass:"bg-home d-flex align-items-center",staticStyle:{"background-image":"url('images/comingsoon.jpg')"},attrs:{"data-jarallax":'{"speed": 0.5}'}},[a("div",{staticClass:"bg-overlay"}),a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 text-center"},[a("div",{attrs:{id:"countdown"}},[a("div",{staticClass:"count-down"},[a("span",{staticClass:"count-number"},[t._v(t._s(t.days))]),a("span",{staticClass:"count-head position-relative d-bock"},[t._v("Days")])]),a("div",{staticClass:"count-down"},[a("span",{staticClass:"count-number"},[t._v(t._s(t.hours))]),a("span",{staticClass:"count-head position-relative d-bock"},[t._v("Hours")])]),a("div",{staticClass:"count-down"},[a("span",{staticClass:"count-number"},[t._v(t._s(t.minutes))]),a("span",{staticClass:"count-head position-relative d-bock"},[t._v("Minutes")])]),a("div",{staticClass:"count-down"},[a("span",{staticClass:"count-number"},[t._v(t._s(t.seconds))]),a("span",{staticClass:"count-head position-relative d-bock"},[t._v("Seconds")])])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 text-center"},[a("router-link",{staticClass:"btn btn-primary mt-4",attrs:{to:"/"}},[a("i",{staticClass:"mdi mdi-backup-restore"}),t._v(" Go Back Home")])],1)])])]),a("Switcher")],1)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-8 col-md-12 text-center"},[a("a",{staticClass:"logo h5",attrs:{href:"javascript:void(0)"}},[a("img",{attrs:{src:"images/logo-light.png",height:"24",alt:""}})]),a("div",{staticClass:"text-uppercase title-dark text-white mt-2 mb-4 coming-soon"},[t._v("We're Coming soon...")]),a("p",{staticClass:"text-light para-desc para-dark mx-auto"},[t._v("Start working with "),a("span",{staticClass:"text-primary font-weight-bold"},[t._v("Landrick")]),t._v(" that can provide everything you need to generate awareness, drive traffic, connect.")])])])}],n=a("5ce9"),o=a("0a35"),c={data:function(){return{start:"",end:"",interval:"",days:"",minutes:"",hours:"",seconds:"",starttime:"Dec 25, 2021 15:37:25",endtime:"Dec 31, 2021 16:37:25"}},components:{Switcher:n["a"],HomeIcon:o["O"]},mounted:function(){var t=this;this.start=new Date(this.starttime).getTime(),this.end=new Date(this.endtime).getTime(),this.timerCount(this.start,this.end),this.interval=setInterval((function(){t.timerCount(t.start,t.end)}),1e3)},methods:{timerCount:function(t,s){var a=(new Date).getTime(),e=t-a,i=s-a;e<0&&i<0?clearInterval(this.interval):e<0&&i>0?this.calcTime(i):e>0&&i>0&&this.calcTime(e)},calcTime:function(t){this.days=Math.floor(t/864e5),this.hours=Math.floor(t%864e5/36e5),this.minutes=Math.floor(t%36e5/6e4),this.seconds=Math.floor(t%6e4/1e3)}}},r=c,l=a("2877"),d=Object(l["a"])(r,e,i,!1,null,null,null);s["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0c117a.a47bd606.js.map