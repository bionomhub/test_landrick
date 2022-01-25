<template>
    <div>
        <form class="login-form mt-4" @submit.prevent="login">
            <div class="row">
                <div class="col-lg-12">
                    <div class="form-group">
                        <label>Your Email <span class="text-danger">*</span></label>
                        <div class="position-relative">
                            <user-icon class="fea icon-sm icons"></user-icon>
                            <input type="email" class="form-control pl-5" placeholder="Email" name="email" required=""
                                v-model="email" />
                        </div>
                    </div>
                </div>

                <div class="col-lg-12">
                    <div class="form-group">
                        <label>Password <span class="text-danger">*</span></label>
                        <div class="position-relative">
                            <key-icon class="fea icon-sm icons"></key-icon>
                            <input type="password" class="form-control pl-5" placeholder="Password" required=""
                                v-model="password" />
                        </div>
                    </div>
                </div>

                <div class="col-lg-12">
                    <div class="d-flex justify-content-between">
                        <div class="form-group">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                <label class="custom-control-label" for="customCheck1">Remember me</label>
                            </div>
                        </div>
                        <p class="forgot-pass mb-0">
                            <router-link to="/auth-re-password" class="text-dark font-weight-bold">Forgot password ?
                            </router-link>
                        </p>
                    </div>
                </div>
                <div class="col-lg-12 mb-0">
                    <button class="btn btn-primary btn-block">Sign in</button>
                </div>
                <div class="col-lg-12 mt-4 text-center">
                    <h6>Or Login With</h6>
                    <div class="row">
                        <div class="col-6 mt-3">
                            <a href="javascript:void(0)" class="btn btn-block btn-light"><i
                                    class="mdi mdi-phone text-primary"></i>
                                Phone</a>
                        </div>


                        <div class="col-6 mt-3">
                            <a href="javascript:void(0)" class="btn btn-block btn-light"><i
                                    class="mdi mdi-google text-danger"></i>
                                Google</a>
                        </div>

                    </div>
                </div>

                <div class="col-12 text-center">
                    <p class="mb-0 mt-3">
                        <small class="text-dark mr-2">Don't have an account ?</small>
                        <router-link to="/auth-signup" class="text-dark font-weight-bold">Sign Up</router-link>
                    </p>
                </div>
            </div>
        </form>

    </div>
</template>

<script>
    import firebase from 'firebase/compat/app';
    // import * as firebaseui from 'firebaseui'
    // import 'firebaseui/dist/firebaseui.css'

    export default {
        // mounted() {
        //     var ui = new firebaseui.auth.AuthUI(firebase.auth());
        //     var uiConfig = {
        //         signInSuccessUrl: "/",
        //         signInOptions: [
        //             firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        //             firebase.auth.EmailAuthProvider.PROVIDER_ID,
        //             firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        //         ]
        //     };
        //     ui.start("#firebaseui-auth-container", uiConfig);
        // },

        name: 'Register',
        data() {
            return {
                email: '',
                password: '',
            };
        },
        methods: {
            login() {
                firebase
                    .auth()
                    .signInWithEmailAndPassword(this.email, this.password)
                    .then(() => {
                        alert('Successfully login!');
                        this.$router.push('/');
                    })
                    .catch(error => {
                        alert(error.message);
                    });
            },
        },
    }
</script>

<style>

</style>