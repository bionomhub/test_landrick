<script>
/**
 * Email-alert component
 */
export default {}
</script>

<template>
<!-- Hero Start -->
<section style="align-items: center; padding: 150px 0;">
    <div class="container">
        <div class="row" style="justify-content: center;">
            <div class="col-lg-6 col-md-8">
                <table style="box-sizing: border-box; width: 100%; border-radius: 6px; overflow: hidden; background-color: #fff; box-shadow: 0 0 3px rgba(60, 72, 88, 0.15);">
                    <thead>
                        <tr style="background-color: #2f55d4; padding: 3px 0; line-height: 68px; text-align: center; color: #fff; font-size: 24px; font-weight: 700; letter-spacing: 1px;">
                            <th scope="col"><img src="images/logo-light.png" height="24" alt=""></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td style="padding: 24px 24px;">
                                <div style="padding: 8px; color: #e43f52; background-color: rgba(228, 63, 82, 0.2); border: 1px solid rgba(228, 63, 82, 0.2); border-radius: 6px; text-align: center; font-size: 16px; font-weight: 600;">
                                    Warning: You're approaching your limit. Please upgrade.
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 0 24px 15px; color: #8492a6;">
                                <div>
                                    You have <span style="color: #fff; background-color: #e43f52; padding: 4px 8px; border-radius: 6px;">1 free report</span> remaining.
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 0 24px 15px; color: #8492a6;">
                                Add your credit card / debit card now to upgrade your account to a premium plan to ensure you don't miss out on any reports.
                            </td>
                        </tr>

                        <tr>
                            <td style="padding: 15px 24px;">
                                <a href="javascript:void(0)" class="btn-primary" style="padding: 8px 20px; outline: none; text-decoration: none; font-size: 16px; letter-spacing: 0.5px; transition: all 0.3s; font-weight: 600; border-radius: 6px;">Upgrade Account</a>
                            </td>
                        </tr>

                        <tr>
                            <td style="padding: 15px 24px 0; color: #8492a6;">
                                Thanks for choosing Landrick Template.
                            </td>
                        </tr>

                        <tr>
                            <td style="padding: 15px 24px 15px; color: #8492a6;">
                                Landrick <br> Support Team
                            </td>
                        </tr>

                        <tr>
                            <td style="padding: 16px 8px; color: #8492a6; background-color: #f8f9fc; text-align: center;">
                                © {{new Date().getFullYear()}} Landrick.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!--end col-->
        </div>
        <!--end row-->
    </div>
    <!--end container-->
</section>
<!--end section-->
<!-- Hero End -->
</template>

<style>
body {
    font-family: Nunito, sans-serif;
    font-size: 15px;
    font-weight: 400;
    overflow: visible;
}
</style>
