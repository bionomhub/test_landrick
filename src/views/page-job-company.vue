<script>
import {
    ArrowUpIcon,
    UserIcon,
    UsersIcon,
    MailIcon,
    MonitorIcon,
    PhoneIcon,
    BookIcon,
    MessageCircleIcon,
    AirplayIcon,
    LinkIcon,
    CpuIcon,
    DollarSignIcon,
    MapPinIcon,
    HexagonIcon,
    FigmaIcon,
    CropIcon
} from 'vue-feather-icons';

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";

/**
 * Page-job-comapany component
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
        UserIcon,
        UsersIcon,
        MailIcon,
        MonitorIcon,
        PhoneIcon,
        BookIcon,
        MessageCircleIcon,
        AirplayIcon,
        LinkIcon,
        CpuIcon,
        DollarSignIcon,
        MapPinIcon,
        HexagonIcon,
        FigmaIcon,
        CropIcon
    }
}
</script>

<template>
<div>
    <Navbar :nav-light="true" />

    <!-- Hero Start -->
    <section class="bg-half-260 d-table w-100" style="background: url('images/job/company.jpg') center center;">
        <div class="bg-overlay"></div>
    </section>
    <!--end section-->
    <!-- Hero End -->

    <!-- Company Detail Start -->
    <section class="section">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-5 col-12">
                    <div class="job-profile position-relative">
                        <div class="rounded shadow bg-white">
                            <div class="text-center py-5 border-bottom">
                                <img src="images/job/Circleci.svg" class="avatar avatar-medium mx-auto rounded-circle d-block" alt="">
                                <h5 class="mt-3 mb-0">CircleCi</h5>
                                <p class="text-muted mb-0">Internet Services</p>
                            </div>

                            <div class="p-4">
                                <h5>Company Details :</h5>
                                <ul class="list-unstyled mb-4">
                                    <li class="h6">
                                        <map-pin-icon class="fea icon-sm text-warning mr-2"></map-pin-icon><span class="text-muted">Location :</span> San Francisco
                                    </li>
                                    <li class="h6">
                                        <link-icon class="fea icon-sm text-warning mr-2"></link-icon><span class="text-muted">Comapny :</span> circleci.com
                                    </li>
                                    <li class="h6">
                                        <dollar-sign-icon class="fea icon-sm text-warning mr-2"></dollar-sign-icon><span class="text-muted">Revenue :</span> $ 5M / Annual
                                    </li>
                                    <li class="h6">
                                        <users-icon class="fea icon-sm text-warning mr-2"></users-icon><span class="text-muted">No. of employees :</span> 200
                                    </li>
                                </ul>
                                <a href="javascipt: void(0);" data-toggle="modal" v-b-modal.ApplyNow data-target="#ApplyNow" class="btn btn-block btn-primary">Apply Now</a>
                            </div>
                        </div>

                        <div class="map mt-4 pt-2">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.9459036900826!2d-122.39420768440696!3d37.79130751898054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085806516341641%3A0x3f1e44c262252836!2sCircleCI!5e0!3m2!1sen!2sin!4v1575034257139!5m2!1sen!2sin" style="border:0" class="rounded" allowfullscreen=""></iframe>
                        </div>
                    </div>
                </div>
                <!--end col-->

                <div class="col-lg-8 col-md-7 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div class="ml-md-4">
                        <h4>About us :</h4>
                        <p class="text-muted">Almost no business is immune from the need for quality software development. The act of building quality software, and shipping it quickly, has become the core engine of value creation in companies across all industries. CircleCI allows teams to rapidly release code they trust by automating the build, test, and delivery process. Thousands of leading companies, including Samsung, Ford Motor Company, Spotify, Lyft, Coinbase, PagerDuty, Stitch Fix, and BuzzFeed rely on CircleCI to accelerate delivery and improve quality.</p>
                        <p class="text-muted">CircleCI was named a Leader in cloud-native continuous integration by Forrester in 2019 and has been named to multiple Best DevOps Tools lists. CircleCI is the first CI/CD tool to become FedRAMP certified and processes more than 30 million builds each month across Linux, macOS, Docker and Windows build environments.</p>
                        <p class="text-muted mb-0">Founded in 2011 and headquartered in San Francisco with a global remote workforce, CircleCI is venture-backed by Scale Venture Partners, Threshold Ventures (formerly DFJ), Baseline Ventures, Top Tier Capital, Industry Ventures, Heavybit, Harrison Metal Capital, Owl Rock Capital Partners, and NextEquity Partners.</p>

                        <h4 class="mt-lg-5 mt-4">Join The Team :</h4>
                        <p class="text-muted mb-0">Started in 2011, we have grown to over 200 employees all over the world. Headquartered in San Francisco, we have offices in London, Tokyo, Toronto, Boston, and Denver, with team members working across 50+ cities and 13 countries.</p>

                        <div class="row">
                            <div class="col-lg-6 mt-4 pt-2">
                                <router-link to="/page-job-detail" class="text-dark">
                                    <div class="key-feature d-flex align-items-center p-3 bg-white rounded shadow">
                                        <div class="icon text-center rounded-circle mr-3">
                                            <monitor-icon class="fea icon-ex-md text-primary"></monitor-icon>
                                        </div>
                                        <div class="content">
                                            <h4 class="title mb-0">Senior Web Developer</h4>
                                            <p class="text-muted mb-0">London, UK</p>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                            <!--end col-->

                            <div class="col-lg-6 mt-4 pt-2">
                                <router-link to="/page-job-detail" class="text-dark">
                                    <div class="key-feature d-flex align-items-center p-3 bg-white rounded shadow">
                                        <div class="icon text-center rounded-circle mr-3">
                                            <airplay-icon class="fea icon-ex-md text-primary"></airplay-icon>
                                        </div>
                                        <div class="content">
                                            <h4 class="title mb-0">Front-End Developer</h4>
                                            <p class="text-muted mb-0">Brasilia, Brazil</p>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                            <!--end col-->

                            <div class="col-lg-6 mt-4 pt-2">
                                <router-link to="/page-job-detail" class="text-dark">
                                    <div class="key-feature d-flex align-items-center p-3 bg-white rounded shadow">
                                        <div class="icon text-center rounded-circle mr-3">
                                            <cpu-icon class="fea icon-ex-md text-primary"></cpu-icon>
                                        </div>
                                        <div class="content">
                                            <h4 class="title mb-0">Back-End Developer</h4>
                                            <p class="text-muted mb-0">Ottawa, Canada</p>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                            <!--end col-->

                            <div class="col-lg-6 mt-4 pt-2">
                                <router-link to="/page-job-detail" class="text-dark">
                                    <div class="key-feature d-flex align-items-center p-3 bg-white rounded shadow">
                                        <div class="icon text-center rounded-circle mr-3">
                                            <hexagon-icon class="fea icon-ex-md text-primary"></hexagon-icon>
                                        </div>
                                        <div class="content">
                                            <h4 class="title mb-0">UI Designer</h4>
                                            <p class="text-muted mb-0">Beijing, China</p>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                            <!--end col-->

                            <div class="col-lg-6 mt-4 pt-2">
                                <router-link to="/page-job-detail" class="text-dark">
                                    <div class="key-feature d-flex align-items-center p-3 bg-white rounded shadow">
                                        <div class="icon text-center rounded-circle mr-3">
                                            <figma-icon class="fea icon-ex-md text-primary"></figma-icon>
                                        </div>
                                        <div class="content">
                                            <h4 class="title mb-0">UX Designer</h4>
                                            <p class="text-muted mb-0">Bogota, Colombia</p>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                            <!--end col-->

                            <div class="col-lg-6 mt-4 pt-2">
                                <router-link to="/page-job-detail" class="text-dark">
                                    <div class="key-feature d-flex align-items-center p-3 bg-white rounded shadow">
                                        <div class="icon text-center rounded-circle mr-3">
                                            <crop-icon class="fea icon-ex-md text-primary"></crop-icon>
                                        </div>
                                        <div class="content">
                                            <h4 class="title mb-0">Php Developer</h4>
                                            <p class="text-muted mb-0">Havana, Cuba</p>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                            <!--end col-->
                            <div class="col-12 mt-4 pt-2">
                                <router-link to="/page-jobs" class="btn btn-primary">See All Jobs <i class="mdi mdi-chevron-right"></i></router-link>
                            </div>
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

    <!-- Modal Content Start -->
    <b-modal id="ApplyNow" title="Apply now" hide-footer body-class="p-4">
        <form>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group ">
                        <label>Your Name :<span class="text-danger">*</span></label>
                        <div class="position-relative">
                        <user-icon class="fea icon-sm icons"></user-icon>
                        <input name="name" id="name" type="text" class="form-control pl-5" required placeholder="First Name :">
                    </div>
                    </div>
                </div>
                <!--end col-->
                <div class="col-md-6">
                    <div class="form-group ">
                        <label>Your Email :<span class="text-danger">*</span></label>
                        <div class="position-relative">
                        <mail-icon class="fea icon-sm icons"></mail-icon>
                        <input name="email" id="email" type="email" class="form-control pl-5" required placeholder="Your email :">
                    </div>
                    </div>
                </div>
                <!--end col-->
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Your Phone no. :<span class="text-danger">*</span></label>
                          <div class="position-relative">
                        <phone-icon class="fea icon-sm icons"></phone-icon>
                        <input name="number" id="number" type="number" class="form-control pl-5" required placeholder="Your phone no. :">
                    </div>
                    </div>
                </div>
                <!--end col-->
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Job Title :</label>
                          <div class="position-relative">
                        <book-icon class="fea icon-sm icons"></book-icon>
                        <input name="subject" id="subject" class="form-control pl-5" required placeholder="Title :">
                    </div>
                    </div>
                </div>
                <!--end col-->
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Types of jobs :</label>
                        <select class="form-control custom-select" id="Sortbylist-job">
                            <option>All Jobs</option>
                            <option>Full Time</option>
                            <option>Half Time</option>
                            <option>Remote</option>
                            <option>In Office</option>
                        </select>
                    </div>
                </div>
                <!--end col-->
                <div class="col-md-12">
                    <div class="form-group">
                        <label>Description :</label>
                          <div class="position-relative">
                        <message-circle-icon class="fea icon-sm icons"></message-circle-icon>
                        <textarea name="comments" id="comments" rows="4" class="form-control pl-5" required placeholder="Describe the job :"></textarea>
                    </div>
                    </div>
                </div>
                <!--end col-->
                <div class="col-md-12">
                    <div class="form-group position-relative">
                        <label>Upload Your Cv / Resume :</label>
                        <input type="file" class="form-control-file" required id="fileupload">
                    </div>
                </div>
                <!--end col-->
                <div class="col-md-12">
                    <div class="form-group">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="customCheck1">
                            <label class="custom-control-label" for="customCheck1">I Accept <a href="#" class="text-primary">Terms And Condition</a></label>
                        </div>
                    </div>
                </div>
                <!--end col-->
            </div>
            <!--end row-->
            <div class="row">
                <div class="col-sm-12">
                    <input type="submit" id="submit" name="send" class="submitBnt btn btn-primary" value="Apply Now">
                </div>
                <!--end col-->
            </div>
            <!--end row-->
        </form>
        <!--end form-->
    </b-modal>
    <!-- Modal Content End -->
    <!-- Company Detail End -->
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
