<script>
import {
    ArrowUpIcon
} from 'vue-feather-icons';
import countTo from 'vue-count-to';

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";

/**
 * Page-case-detail component
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
        countTo
    }
}
</script>

<template>
<div>
    <Navbar />

    <section class="bg-half">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-md-10">
                    <div class="section-title">
                        <div class="text-center">
                            <h4 class="title mb-4">Social Media & Small Business</h4>
                            <img src="images/blog/05.jpg" class="img-fluid rounded-md shadow-md" alt="">
                        </div>
                        <p class="text-muted mb-0 mt-4">This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody. Dummy texts have been in use by typesetters since the 16th century.</p>

                        <h4 class="my-4">Challenges</h4>
                        <p class="text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.</p>
                        <p class="text-muted mb-0">For this reason, dummy text usually consists of a more or less random series of words or syllables. This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces.</p>

                        <h4 class="my-4">Solutions</h4>
                        <p class="text-muted">Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.</p>
                        <p class="text-muted mb-0">One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others - which creates a distinct visual impression. Moreover, in Latin only words at the beginning of sentences are capitalized.</p>

                        <h4 class="my-4">Results</h4>
                        <p class="text-muted">Disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others - which creates a distinct visual impression. Moreover, in Latin only words at the beginning of sentences are capitalized. It is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.</p>

                        <div class="row" id="counter">
                            <div class="col-md-4 col-6 mt-4 pt-2">
                                <div class="counter-box text-center">
                                    <img src="images/illustrator/Asset190.svg" class="avatar avatar-small" alt="">
                                    <h2 class="mb-0 mt-4">
                                        <countTo :startVal="3" :duration="4000" :endVal="15"></countTo>%
                                    </h2>
                                    <h6 class="counter-head text-muted">Depritiation</h6>
                                </div>
                                <!--end counter box-->
                            </div>

                            <div class="col-md-4 col-6 mt-4 pt-2">
                                <div class="counter-box text-center">
                                    <img src="images/illustrator/Asset189.svg" class="avatar avatar-small" alt="">
                                    <h2 class="mb-0 mt-4">
                                        <countTo :startVal="1" :duration="4000" :endVal="195"></countTo>%
                                    </h2>
                                    <h6 class="counter-head text-muted">Profit</h6>
                                </div>
                                <!--end counter box-->
                            </div>

                            <div class="col-md-4 col-6 mt-4 pt-2">
                                <div class="counter-box text-center">
                                    <img src="images/illustrator/Asset187.svg" class="avatar avatar-small" alt="">
                                    <h2 class="mb-0 mt-4">
                                        <countTo :startVal="3" :duration="4000" :endVal="98"></countTo>%
                                    </h2>
                                    <h6 class="counter-head text-muted">Case Solved</h6>
                                </div>
                                <!--end counter box-->
                            </div>
                        </div>
                        <!--end row-->

                        <h4 class="my-4">Client Feedback</h4>
                        <div class="p-4 bg-light">
                            <p class="text-muted h6 font-italic">" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "</p>
                            <img src="images/client/01.jpg" class="img-fluid avatar avatar-small rounded-circle mx-auto shadow" alt="">
                            <ul class="list-unstyled mb-0 mt-3">
                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                            </ul>
                            <h6 class="text-primary">- Thomas Israel <small class="text-muted">C.E.O</small></h6>
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
