<script>
import {
    ArrowUpIcon,
    MailIcon,
    PhoneIcon,
    MapPinIcon,
    LinkIcon
} from 'vue-feather-icons';

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";

/**
 * Page-invoice component
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
        PhoneIcon,
        MapPinIcon,
        LinkIcon
    }
}
</script>

<template>
<div>
    <Navbar />

    <!-- Invoice Start -->
    <section class="bg-invoice bg-light">
        <div class="container">
            <div class="row mt-5 pt-4 pt-sm-0 justify-content-center">
                <div class="col-lg-10">
                    <div class="card shadow rounded border-0">
                        <div class="card-body">
                            <div class="invoice-top pb-4 border-bottom">
                                <div class="row">
                                    <div class="col-md-8">
                                        <div class="logo-invoice mb-2">Landrick<span class="text-primary">.</span></div>
                                        <a href="javascript:void(0)" class="text-primary h6">
                                            <link-icon class="fea icon-sm text-muted mr-2"></link-icon>www.landrick.corp
                                        </a>
                                    </div>
                                    <!--end col-->

                                    <div class="col-md-4 mt-4 mt-sm-0">
                                        <h5>Address :</h5>
                                        <dl class="row mb-0">
                                            <dt class="col-2 text-muted">
                                                <map-pin-icon class="fea icon-sm"></map-pin-icon>
                                            </dt>
                                            <dd class="col-10 text-muted">
                                                <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" class="video-play-icon text-muted">
                                                    <p class="mb-0">1419 Riverwood Drive,</p>
                                                    <p class="mb-0">Redding, CA 96001</p>
                                                </a>
                                            </dd>

                                            <dt class="col-2 text-muted">
                                                <mail-icon class="fea icon-sm"></mail-icon>
                                            </dt>
                                            <dd class="col-10 text-muted">
                                                <a href="mailto:contact@example.com" class="text-muted">info@landrick.com</a>
                                            </dd>

                                            <dt class="col-2 text-muted">
                                                <phone-icon class="fea icon-sm"></phone-icon>
                                            </dt>
                                            <dd class="col-10 text-muted">
                                                <a href="tel:+152534-468-854" class="text-muted">(+12) 1546-456-856</a>
                                            </dd>
                                        </dl>
                                    </div>
                                    <!--end col-->
                                </div>
                                <!--end row-->
                            </div>

                            <div class="invoice-middle py-4">
                                <h5>Invoice Details :</h5>
                                <div class="row mb-0">
                                    <div class="col-md-8 order-2 order-md-1">
                                        <dl class="row">
                                            <dt class="col-md-3 col-5 font-weight-normal">Invoice No. :</dt>
                                            <dd class="col-md-9 col-7 text-muted">land45845621</dd>

                                            <dt class="col-md-3 col-5 font-weight-normal">Name :</dt>
                                            <dd class="col-md-9 col-7 text-muted">Calvin Carlo</dd>

                                            <dt class="col-md-3 col-5 font-weight-normal">Address :</dt>
                                            <dd class="col-md-9 col-7 text-muted">
                                                <p class="mb-0">1962 Pike Street,</p>
                                                <p>Diego, CA 92123</p>
                                            </dd>

                                            <dt class="col-md-3 col-5 font-weight-normal">Phone :</dt>
                                            <dd class="col-md-9 col-7 text-muted">(+45) 4584-458-695</dd>
                                        </dl>
                                    </div>

                                    <div class="col-md-4 order-md-2 order-1 mt-2 mt-sm-0">
                                        <dl class="row mb-0">
                                            <dt class="col-md-4 col-5 font-weight-normal">Date :</dt>
                                            <dd class="col-md-8 col-7 text-muted">15th Oct, 2019</dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>

                            <div class="invoice-table pb-4">
                                <div class="table-responsive bg-white shadow rounded">
                                    <table class="table mb-0 table-center invoice-tb">
                                        <thead class="bg-light">
                                            <tr>
                                                <th scope="col" class="text-left">No.</th>
                                                <th scope="col" class="text-left">Item</th>
                                                <th scope="col">Qty</th>
                                                <th scope="col">Rate</th>
                                                <th scope="col">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row" class="text-left">1</th>
                                                <td class="text-left">Inclusive Insights</td>
                                                <td>2</td>
                                                <td>$ 2600</td>
                                                <td>$ 5200</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" class="text-left">2</th>
                                                <td class="text-left">Handy Guide</td>
                                                <td>1</td>
                                                <td>$ 3660</td>
                                                <td>$ 3660</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" class="text-left">3</th>
                                                <td class="text-left">Premiere Product</td>
                                                <td>3</td>
                                                <td>$ 4580</td>
                                                <td>$ 13740</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="row">
                                    <div class="col-lg-4 col-md-5 ml-auto">
                                        <ul class="list-unstyled h5 font-weight-normal mt-4 mb-0">
                                            <li class="text-muted d-flex justify-content-between">Subtotal :<span>$ 22600</span></li>
                                            <li class="text-muted d-flex justify-content-between">Taxes :<span> 0</span></li>
                                            <li class="d-flex justify-content-between">Total :<span>$ 22600</span></li>
                                        </ul>
                                    </div>
                                    <!--end col-->
                                </div>
                                <!--end row-->
                            </div>

                            <div class="invoice-footer border-top pt-4">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="text-sm-left text-muted text-center">
                                            <h6 class="mb-0">Customer Services : <a href="tel:+152534-468-854" class="text-warning">(+12) 1546-456-856</a></h6>
                                        </div>
                                    </div>

                                    <div class="col-sm-6">
                                        <div class="text-sm-right text-muted text-center">
                                            <h6 class="mb-0">
                                                <router-link to="/page-terms" target="_blank" class="text-primary">Terms & Conditions</router-link>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
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
    <!-- Invoice End -->
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
