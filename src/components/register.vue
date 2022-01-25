<template>
    <div>
        <form class="login-form mt-4" @submit.prevent="register">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group ">
                        <label>First name <span class="text-danger">*</span></label>
                        <div class="position-relative">
                            <user-icon class="fea icon-sm icons"></user-icon>
                            <input type="text" class="form-control pl-5" placeholder="First Name" name="s" required=""
                                v-model="first_name">
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group ">
                        <label>Last name <span class="text-danger">*</span></label>
                        <div class="position-relative">
                            <user-check-icon class="fea icon-sm icons"></user-check-icon>
                            <input type="text" class="form-control pl-5" placeholder="Last Name" name="s" required=""
                                v-model="last_name">
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="form-group ">
                        <label>Your Email <span class="text-danger">*</span></label>
                        <div class="position-relative">
                            <mail-icon class="fea icon-sm icons"></mail-icon>
                            <input type="email" class="form-control pl-5" placeholder="Email" name="email" required=""
                                v-model="email">
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="form-group ">
                        <label>Password <span class="text-danger">*</span></label>
                        <div class="position-relative">
                            <key-icon class="fea icon-sm icons"></key-icon>
                            <input type="password" class="form-control pl-5" placeholder="Password" required=""
                                v-model="password">
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="form-group">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="customCheck1">
                            <label class="custom-control-label" for="customCheck1">I Accept <a href="#"
                                    class="text-primary">Terms And Condition</a></label>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <button class="btn btn-primary btn-block">Register</button>
                </div>
                <div class="col-lg-12 mt-4 text-center">
                    <h6>Or Signup With</h6>
                    <div class="row">
                        <div class="col-6 mt-3">
                            <a href="javascript:void(0)" class="btn btn-block btn-light"><i
                                    class="mdi mdi-facebook text-primary"></i> Facebook</a>
                        </div>
                        <!--end col-->

                        <div class="col-6 mt-3">
                            <a href="javascript:void(0)" class="btn btn-block btn-light"><i
                                    class="mdi mdi-google text-danger"></i> Google</a>
                        </div>
                        <!--end col-->
                    </div>
                </div>
                <!--end col-->
                <div class="mx-auto">
                    <p class="mb-0 mt-3"><small class="text-dark mr-2">Already have an account ?</small>
                        <router-link to="/auth-login" class="text-dark font-weight-bold">Sign in</router-link>
                    </p>
                </div>
            </div>
        </form>

    </div>
</template>

<script>
    import firebase from 'firebase/compat/app';

    export default {
        name: 'Register',
        data() {
            return {
                first_name: '',
                last_name: '',
                email: '',
                password: '',
            };
        },
        methods: {
            register() {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword( this.email, this.password)
                    .then(() => {
                        alert('Successfully registered! Please login.');
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