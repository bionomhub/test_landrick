<script>
import {
    ArrowUpIcon
} from 'vue-feather-icons';
import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";

/**
 * page-work-modern component
 */
export default {
    data() {
        return {}
    },
    components: {
        Navbar,
        Switcher,
        Footer,
        ArrowUpIcon
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
                        <h4 class="title"> Work Modern </h4>
                        <div class="page-next">
                            <nav aria-label="breadcrumb" class="d-inline-block">
                                <ul class="breadcrumb bg-white rounded shadow mb-0">
                                    <li class="breadcrumb-item">
                                        <router-link to="/">Landrick</router-link>
                                    </li>
                                    <li class="breadcrumb-item"><a href="#">Page</a></li>
                                    <li class="breadcrumb-item"><a href="#">Work</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Works</li>
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
            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>
    <!-- Hero End -->

    <!-- Start Works -->
    <section class="section">
        <div class="container">
            <div class="row projects-wrapper">
                <div class="col-lg-4 col-md-6 col-12 mb-4 pb-2">
                    <div class="card work-container work-modern position-relative overflow-hidden shadow rounded border-0">
                        <div class="card-body p-0">
                            <img src="images/work/1.jpg" class="img-fluid rounded" alt="work-image">
                            <div class="overlay-work bg-dark"></div>
                            <div class="content">
                                <router-link to="/page-portfolio-detail" class="title text-white d-block font-weight-bold">Shifting Perspective</router-link>
                                <small class="text-light">Studio</small>
                            </div>
                            <div class="client">
                                <small class="text-light user d-block"><i class="mdi mdi-account"></i> Calvin Carlo</small>
                                <small class="text-light date"><i class="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                            </div>
                        </div>
                    </div>
                </div>
                <!--end col-->

                <div class="col-lg-4 col-md-6 col-12 mb-4 pb-2">
                    <div class="card work-container work-modern position-relative overflow-hidden shadow rounded border-0">
                        <div class="card-body p-0">
                            <img src="images/work/2.jpg" class="img-fluid rounded" alt="work-image">
                            <div class="overlay-work bg-dark"></div>
                            <div class="content">
                                <router-link to="/page-portfolio-detail" class="title text-white d-block font-weight-bold">Colors Magazine</router-link>
                                <small class="text-light">Web Design</small>
                            </div>
                            <div class="client">
                                <small class="text-light user d-block"><i class="mdi mdi-account"></i> Calvin Carlo</small>
                                <small class="text-light date"><i class="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                            </div>
                        </div>
                    </div>
                </div>
                <!--end col-->

                <div class="col-lg-4 col-md-6 col-12 mb-4 pb-2">
                    <div class="card work-container work-modern position-relative overflow-hidden shadow rounded border-0">
                        <div class="card-body p-0">
                            <img src="images/work/3.jpg" class="img-fluid rounded" alt="work-image">
                            <div class="overlay-work bg-dark"></div>
                            <div class="content">
                                <router-link to="/page-portfolio-detail" class="title text-white d-block font-weight-bold">Spa Cosmetics</router-link>
                                <small class="text-light">Developing</small>
                            </div>
                            <div class="client">
                                <small class="text-light user d-block"><i class="mdi mdi-account"></i> Calvin Carlo</small>
                                <small class="text-light date"><i class="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                            </div>
                        </div>
                    </div>
                </div>
                <!--end col-->

                <div class="col-lg-4 col-md-6 col-12 mb-4 pb-2">
                    <div class="card work-container work-modern position-relative overflow-hidden shadow rounded border-0">
                        <div class="card-body p-0">
                            <img src="images/work/4.jpg" class="img-fluid rounded" alt="work-image">
                            <div class="overlay-work bg-dark"></div>
                            <div class="content">
                                <router-link to="/page-portfolio-detail" class="title text-white d-block font-weight-bold">Riser Coffee</router-link>
                                <small class="text-light">Branding</small>
                            </div>
                            <div class="client">
                                <small class="text-light user d-block"><i class="mdi mdi-account"></i> Calvin Carlo</small>
                                <small class="text-light date"><i class="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                            </div>
                        </div>
                    </div>
                </div>
                <!--end col-->

                <div class="col-lg-4 col-md-6 col-12 mb-4 pb-2">
                    <div class="card work-container work-modern position-relative overflow-hidden shadow rounded border-0">
                        <div class="card-body p-0">
                            <img src="images/work/5.jpg" class="img-fluid rounded" alt="work-image">
                            <div class="overlay-work bg-dark"></div>
                            <div class="content">
                                <router-link to="/page-portfolio-detail" class="title text-white d-block font-weight-bold">Dancing With Myself</router-link>
                                <small class="text-light">Photography</small>
                            </div>
                            <div class="client">
                                <small class="text-light user d-block"><i class="mdi mdi-account"></i> Calvin Carlo</small>
                                <small class="text-light date"><i class="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                            </div>
                        </div>
                    </div>
                </div>
                <!--end col-->

                <div class="col-lg-4 col-md-6 col-12 mb-4 pb-2">
                    <div class="card work-container work-modern position-relative overflow-hidden shadow rounded border-0">
                        <div class="card-body p-0">
                            <img src="images/work/6.jpg" class="img-fluid rounded" alt="work-image">
                            <div class="overlay-work bg-dark"></div>
                            <div class="content">
                                <router-link to="/page-portfolio-detail" class="title text-white d-block font-weight-bold">New trends in SEO</router-link>
                                <small class="text-light">Business</small>
                            </div>
                            <div class="client">
                                <small class="text-light user d-block"><i class="mdi mdi-account"></i> Calvin Carlo</small>
                                <small class="text-light date"><i class="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                            </div>
                        </div>
                    </div>
                </div>
                <!--end col-->

                <div class="col-lg-4 col-md-6 col-12 mb-4 pb-2">
                    <div class="card work-container work-modern position-relative overflow-hidden shadow rounded border-0">
                        <div class="card-body p-0">
                            <img src="images/work/7.jpg" class="img-fluid rounded" alt="work-image">
                            <div class="overlay-work bg-dark"></div>
                            <div class="content">
                                <router-link to="/page-portfolio-detail" class="title text-white d-block font-weight-bold">Shifting Perspective</router-link>
                                <small class="text-light">Studio</small>
                            </div>
                            <div class="client">
                                <small class="text-light user d-block"><i class="mdi mdi-account"></i> Calvin Carlo</small>
                                <small class="text-light date"><i class="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                            </div>
                        </div>
                    </div>
                </div>
                <!--end col-->

                <div class="col-lg-4 col-md-6 col-12 mb-4 pb-2">
                    <div class="card work-container work-modern position-relative overflow-hidden shadow rounded border-0">
                        <div class="card-body p-0">
                            <img src="images/work/8.jpg" class="img-fluid rounded" alt="work-image">
                            <div class="overlay-work bg-dark"></div>
                            <div class="content">
                                <router-link to="/page-portfolio-detail" class="title text-white d-block font-weight-bold">Colors Magazine</router-link>
                                <small class="text-light">Web Design</small>
                            </div>
                            <div class="client">
                                <small class="text-light user d-block"><i class="mdi mdi-account"></i> Calvin Carlo</small>
                                <small class="text-light date"><i class="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                            </div>
                        </div>
                    </div>
                </div>
                <!--end col-->

                <div class="col-lg-4 col-md-6 col-12 mb-4 pb-2">
                    <div class="card work-container work-modern position-relative overflow-hidden shadow rounded border-0">
                        <div class="card-body p-0">
                            <img src="images/work/9.jpg" class="img-fluid rounded" alt="work-image">
                            <div class="overlay-work bg-dark"></div>
                            <div class="content">
                                <router-link to="/page-portfolio-detail" class="title text-white d-block font-weight-bold">Spa Cosmetics</router-link>
                                <small class="text-light">Developing</small>
                            </div>
                            <div class="client">
                                <small class="text-light user d-block"><i class="mdi mdi-account"></i> Calvin Carlo</small>
                                <small class="text-light date"><i class="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                            </div>
                        </div>
                    </div>
                </div>
                <!--end col-->

                <div class="col-lg-4 col-md-6 col-12 mb-4 pb-2">
                    <div class="card work-container work-modern position-relative overflow-hidden shadow rounded border-0">
                        <div class="card-body p-0">
                            <img src="images/work/10.jpg" class="img-fluid rounded" alt="work-image">
                            <div class="overlay-work bg-dark"></div>
                            <div class="content">
                                <router-link to="/page-portfolio-detail" class="title text-white d-block font-weight-bold">Riser Coffee</router-link>
                                <small class="text-light">Branding</small>
                            </div>
                            <div class="client">
                                <small class="text-light user d-block"><i class="mdi mdi-account"></i> Calvin Carlo</small>
                                <small class="text-light date"><i class="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                            </div>
                        </div>
                    </div>
                </div>
                <!--end col-->

                <div class="col-lg-4 col-md-6 col-12 mb-4 pb-2">
                    <div class="card work-container work-modern position-relative overflow-hidden shadow rounded border-0">
                        <div class="card-body p-0">
                            <img src="images/work/11.jpg" class="img-fluid rounded" alt="work-image">
                            <div class="overlay-work bg-dark"></div>
                            <div class="content">
                                <router-link to="/page-portfolio-detail" class="title text-white d-block font-weight-bold">Dancing With Myself</router-link>
                                <small class="text-light">Photography</small>
                            </div>
                            <div class="client">
                                <small class="text-light user d-block"><i class="mdi mdi-account"></i> Calvin Carlo</small>
                                <small class="text-light date"><i class="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                            </div>
                        </div>
                    </div>
                </div>
                <!--end col-->

                <div class="col-lg-4 col-md-6 col-12 mb-4 pb-2">
                    <div class="card work-container work-modern position-relative overflow-hidden shadow rounded border-0">
                        <div class="card-body p-0">
                            <img src="images/work/12.jpg" class="img-fluid rounded" alt="work-image">
                            <div class="overlay-work bg-dark"></div>
                            <div class="content">
                                <router-link to="/page-portfolio-detail" class="title text-white d-block font-weight-bold">New trends in SEO</router-link>
                                <small class="text-light">Business</small>
                            </div>
                            <div class="client">
                                <small class="text-light user d-block"><i class="mdi mdi-account"></i> Calvin Carlo</small>
                                <small class="text-light date"><i class="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                            </div>
                        </div>
                    </div>
                </div>
                <!--end col-->

                <!-- PAGINATION START -->
                <div class="col-12">
                    <ul class="pagination justify-content-center mb-0">
                        <li class="page-item"><a class="page-link" href="javascript:void(0)" aria-label="Previous">Prev</a></li>
                        <li class="page-item active"><a class="page-link" href="javascript:void(0)">1</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0)">2</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0)" aria-label="Next">Next</a></li>
                    </ul>
                </div>
                <!--end col-->
                <!-- PAGINATION END -->
            </div>
            <!--end row-->
        </div>
        <!--end container-->
    </section>
    <!--end section-->
    <!-- End Works -->

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
