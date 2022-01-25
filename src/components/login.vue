<template>
    
    
    <div>
        <h4 class="card-title text-center">Вход</h4>
        <form class="login-form mt-4" @submit.prevent="login">
            <div class="row">
                <div class="col-lg-12">
                    <div class="form-group">
                        <label> Email <span class="text-danger">*</span></label>
                        <div class="position-relative">
                            <user-icon class="fea icon-sm icons"></user-icon>
                            <input type="email" class="form-control pl-5" placeholder="Email" name="email" required=""
                                v-model="email" />
                        </div>
                    </div>
                </div>

                <div class="col-lg-12">
                    <div class="form-group">
                        <label>Пароль <span class="text-danger">*</span></label>
                        <div class="position-relative">
                            <key-icon class="fea icon-sm icons"></key-icon>
                            <input type="password" class="form-control pl-5" placeholder="Пароль" required=""
                                v-model="password" />
                        </div>
                    </div>
                </div>

                <div class="col-lg-12">
                    <div class="d-flex justify-content-between">
                        <div class="form-group">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                <label class="custom-control-label" for="customCheck1">Запомнить меня</label>
                            </div>
                        </div>
                        <p class="forgot-pass mb-0">
                            <router-link to="/auth-re-password" class="text-dark font-weight-bold">Забыли пароль ?
                            </router-link>
                        </p>
                    </div>
                </div>
                <div class="col-lg-12 mb-0">
                    <button class="btn btn-primary btn-block">Войти</button>
                </div>
                <div class="col-lg-12 mt-4 text-center">
                    <h6>Войти с помощью</h6>
                    <div class="row">
                        <div class="col-6 mt-3">
                            <a href="javascript:void(0)" class="btn btn-block btn-light"><i
                                    class="mdi mdi-phone text-primary"></i>
                                Телефона</a>
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
                        <small class="text-dark mr-2">У вас еще нет аккаунта ?</small>
                        <router-link to="/auth-signup" class="text-dark font-weight-bold">Зарегистрироваться</router-link>
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
                user: null,
            };
        },
        methods: {
            login() {
                firebase
                    .auth()
                    .signInWithEmailAndPassword(this.email, this.password)
                    .then(() => {
                        alert('Successfully login!');
                        this.$router.push('/shop-myaccount');
                    })
                    .catch(error => {
                        alert(error.message);
                    });
            },
            // signOut(){
            //     firebase
            //         .auth()
            //         signOut()
            //         .then(() => {
            //             alert('Successfully log out!');
            //         }).catch((error) => {
            //             alert('error');
            //         });
            // }
            
            signOut(e) {
                e.stopPropagation();    
                firebase.auth().signOut();
                alert('Successfully loguot!');
                this.$router.push('/');
            }
            

        },
        created() {
            firebase.auth().onAuthStateChanged(user => {
                if (user) {
                    this.user = user;
                }
            });
        }
    }
</script>

<style>

</style>