<script>
import {
    ArrowUpIcon,
    MailIcon,
    UserIcon,
    MessageCircleIcon
} from 'vue-feather-icons';

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";

/**
 * Page-work-detail component
 */
export default {
    data() {
        return {}
    },
    components: {
        Navbar,
        Switcher,
        Footer,
        ArrowUpIcon,
        MailIcon,
        UserIcon,
        MessageCircleIcon
    }
}
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
                        <h4 class="title"> New Trends in SEO </h4>
                        <ul class="list-unstyled mt-4">
                            <li class="list-inline-item h6 user text-muted mr-2"> <span class="text-dark">Client :</span> Calvin Carlo</li>
                            <li class="list-inline-item h6 date text-muted"> <span class="text-dark">Date :</span> 23th Sep, 2019</li>
                        </ul>
                        <div class="page-next">
                            <nav aria-label="breadcrumb" class="d-inline-block">
                                <ul class="breadcrumb bg-white rounded shadow mb-0">
                                    <li class="breadcrumb-item">
                                        <router-link to="/">Landrick</router-link>
                                    </li>
                                    <li class="breadcrumb-item"><a href="#">Page</a></li>
                                    <li class="breadcrumb-item"><a href="#">Work</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Work Detail</li>
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
            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>
    <!--Shape End-->

    <!-- Start Work Detail -->
    <section class="section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 text-center">
                    <img src="images/work/single.jpg" class="img-fluid rounded" alt="">
                </div>

                <div class="col-md-10 mt-4 pt-2">
                    <div class="bg-light rounded p-4">
                        <p class="text-muted font-italic mb-0">" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others - which creates a distinct visual impression. Moreover, in Latin only words at the beginning of sentences are capitalized; this means that Lorem Ipsum cannot accurately represent, for example, German, in which all nouns are capitalized. Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the characteristics of different typefaces, it sometimes makes sense to select texts containing the various letters and symbols specific to the output language. "</p>
                    </div>

                    <div class="row">
                        <div class="col-md-6 mt-4 pt-2">
                            <img src="images/work/2.jpg" class="img-fluid rounded" alt="">
                        </div>

                        <div class="col-md-6 mt-4 pt-2">
                            <img src="images/work/3.jpg" class="img-fluid rounded" alt="">
                        </div>
                    </div>

                    <div class="bg-light rounded p-4 mt-4 pt-2">
                        <p class="text-muted font-italic mb-0">" There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories. "</p>

                        <ul class="list-unstyled text-muted mt-4">
                            <li class="mb-0"><span class="text-primary h5 mr-2"><i class="uil uil-check-circle align-middle"></i></span>Digital Marketing Solutions for Tomorrow</li>
                            <li class="mb-0"><span class="text-primary h5 mr-2"><i class="uil uil-check-circle align-middle"></i></span>Our Talented & Experienced Marketing Agency</li>
                            <li class="mb-0"><span class="text-primary h5 mr-2"><i class="uil uil-check-circle align-middle"></i></span>Create your own skin to match your brand</li>
                            <li class="mb-0"><span class="text-primary h5 mr-2"><i class="uil uil-check-circle align-middle"></i></span>Digital Marketing Solutions for Tomorrow</li>
                            <li class="mb-0"><span class="text-primary h5 mr-2"><i class="uil uil-check-circle align-middle"></i></span>Our Talented & Experienced Marketing Agency</li>
                        </ul>
                    </div>

                    <div class="row align-items-center">
                        <div class="col-lg-6 mt-4 pt-2">
                            <div class="card work-details rounded bg-light border-0">
                                <div class="card-body">
                                    <h5 class="card-title border-bottom pb-3 mb-3">Project Info :</h5>
                                    <dl class="row mb-0">
                                        <dt class="col-md-4 col-5">Client :</dt>
                                        <dd class="col-md-8 col-7 text-muted">Calvin Carlo</dd>

                                        <dt class="col-md-4 col-5">Category :</dt>
                                        <dd class="col-md-8 col-7 text-muted">Web Design</dd>

                                        <dt class="col-md-4 col-5">Date :</dt>
                                        <dd class="col-md-8 col-7 text-muted">23rd Sep, 2019</dd>

                                        <dt class="col-md-4 col-5">Website :</dt>
                                        <dd class="col-md-8 col-7 text-muted">www.yourdomain.com</dd>

                                        <dt class="col-md-4 col-5">Location :</dt>
                                        <dd class="col-md-8 col-7 text-muted">3/2/64 Mongus Street, UK</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 mt-4 pt-2">
                            <img src="images/work/6.jpg" class="img-fluid rounded" alt="">
                        </div>
                    </div>

                    <!-- Comment Areas start -->
                    <div class="card shadow rounded border-0 mt-4">
                        <div class="card-body">
                            <h5 class="card-title mb-0">Comments :</h5>

                            <ul class="media-list list-unstyled mb-0">
                                <li class="mt-4">
                                    <div class="d-flex justify-content-between">
                                        <div class="media align-items-center">
                                            <a class="pr-3" href="#">
                                                <img src="images/client/01.jpg" class="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img">
                                            </a>
                                            <div class="commentor-detail">
                                                <h6 class="mb-0"><a href="javascript:void(0)" class="text-dark media-heading">Lorenzo Peterson</a></h6>
                                                <small class="text-muted">15th August, 2019 at 01:25 pm</small>
                                            </div>
                                        </div>
                                        <a href="#" class="text-muted"><i class="mdi mdi-reply"></i> Reply</a>
                                    </div>
                                    <div class="mt-3">
                                        <p class="text-muted font-italic p-3 bg-light rounded">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                                    </div>
                                </li>

                                <li class="mt-4">
                                    <div class="d-flex justify-content-between">
                                        <div class="media align-items-center">
                                            <a class="pr-3" href="#">
                                                <img src="images/client/02.jpg" class="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img">
                                            </a>
                                            <div class="commentor-detail">
                                                <h6 class="mb-0"><a href="javascript:void(0)" class="media-heading text-dark">Tammy Camacho</a></h6>
                                                <small class="text-muted">15th August, 2019 at 05:44 pm</small>
                                            </div>
                                        </div>
                                        <a href="#" class="text-muted"><i class="mdi mdi-reply"></i> Reply</a>
                                    </div>
                                    <div class="mt-3">
                                        <p class="text-muted font-italic p-3 bg-light rounded">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                                    </div>
                                </li>

                                <li class="mt-4">
                                    <div class="d-flex justify-content-between">
                                        <div class="media align-items-center">
                                            <a class="pr-3" href="#">
                                                <img src="images/client/03.jpg" class="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img">
                                            </a>
                                            <div class="commentor-detail">
                                                <h6 class="mb-0"><a href="javascript:void(0)" class="media-heading text-dark">Tammy Camacho</a></h6>
                                                <small class="text-muted">16th August, 2019 at 03:44 pm</small>
                                            </div>
                                        </div>
                                        <a href="#" class="text-muted"><i class="mdi mdi-reply"></i> Reply</a>
                                    </div>
                                    <div class="mt-3">
                                        <p class="text-muted font-italic p-3 bg-light rounded">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                                    </div>

                                    <ul class="list-unstyled pl-4 pl-md-5 sub-comment">
                                        <li class="mt-4">
                                            <div class="d-flex justify-content-between">
                                                <div class="media align-items-center">
                                                    <a class="pr-3" href="#">
                                                        <img src="images/client/01.jpg" class="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img">
                                                    </a>
                                                    <div class="commentor-detail">
                                                        <h6 class="mb-0"><a href="javascript:void(0)" class="text-dark media-heading">Lorenzo Peterson</a></h6>
                                                        <small class="text-muted">17th August, 2019 at 01:25 pm</small>
                                                    </div>
                                                </div>
                                                <a href="#" class="text-muted"><i class="mdi mdi-reply"></i> Reply</a>
                                            </div>
                                            <div class="mt-3">
                                                <p class="text-muted font-italic p-3 bg-light rounded">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Comments -->
                    <div class="card shadow rounded border-0 mt-4">
                        <div class="card-body">
                            <h5 class="card-title mb-0">Leave A Comment :</h5>

                            <form class="mt-3">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group ">
                                            <label>Your Comment</label>
                                            <div class="position-relative">
                                            <message-circle-icon class="fea icon-sm icons"></message-circle-icon>
                                            <textarea id="message" placeholder="Your Comment" rows="5" name="message" class="form-control pl-5" required=""></textarea>
                                        </div>
                                        </div>
                                    </div>
                                    <!--end col-->

                                    <div class="col-lg-6">
                                        <div class="form-group ">
                                            <label>Name <span class="text-danger">*</span></label>
                                           <div class=" position-relative">
                                            <user-icon class="fea icon-sm icons"></user-icon>
                                            <input id="name" name="name" type="text" placeholder="Name" class="form-control pl-5" required="">
                                        </div>
                                        </div>
                                    </div>
                                    <!--end col-->

                                    <div class="col-lg-6">
                                        <div class="form-group ">
                                            <label>Your Email <span class="text-danger">*</span></label>
                                            <div class="position-relative">
                                            <mail-icon class="fea icon-sm icons"></mail-icon>
                                            <input id="email" type="email" placeholder="Email" name="email" class="form-control pl-5" required="">
                                        </div>
                                        </div>
                                    </div>
                                    <!--end col-->

                                    <div class="col-md-12">
                                        <div class="send">
                                            <button type="submit" class="btn btn-primary btn-block">Send Message</button>
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
            </div>
        </div>
    </section>
    <!-- End Work Detail -->
    <!--end section-->
    <Footer />
    <!-- Footer End -->
    <Switcher />
    <!-- Back to top -->
    <a href="javascript: void(0);" class="btn btn-icon btn-primary back-to-top" id="back-to-top" v-scroll-to="'#topnav'">
        <arrow-up-icon class="icons"></arrow-up-icon>
    </a>
    <!-- Back to top -->
</div>
</template>
