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
                                v-model.trim="email" />
                        </div>
                    </div>
                </div>

                <div class="col-lg-12">
                    <div class="form-group">
                        <label>Пароль <span class="text-danger">*</span></label>
                        <div class="position-relative">
                            <key-icon class="fea icon-sm icons"></key-icon>
                            <input type="password" class="form-control pl-5" placeholder="Пароль" required=""
                                v-model.trim="password" />
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
                            <a href="javascript:void(0)" class="btn btn-block btn-light" @click.prevent="loginGoogle"><i
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
    import {mapActions, mapGetters} from 'vuex'
    import messages from '@/utils/messages'
    
    export default {
        name: 'Register',
        data() {
            return {
                email: '',
                password: '',
                user: null,
            };
        },
        methods: {
            ...mapActions(['loginFirebase', 'loginFirebaseGoogle']),
           async login(){
                try{
                 await this.loginFirebase({
                    email: this.email,
                    password: this.password
                })
                this.$router.push('/shop-myaccount');
                } catch (e){
                    console.log('ОШИБКАААА')
                }   
            },
            async loginGoogle(){
                try{
                 await this.loginFirebaseGoogle()
                this.$router.push('/shop-myaccount');
                } catch (e){
                    console.log('ОШИБКАААА')
                }   
            },
        },
        computed: {
            error(){
                return this.$store.getters.error
            },
            name(){
                return this.$store.getters.info.name
            }
        },
        watch: {
            error(fbError) {
                console.log(fbError)
                this.$error(messages[fbError.code] || 'Что-то пошло не так')
            }
        },
        async mounted() {
            if (messages[this.$route.query.message]){
                this.$message(messages[this.$route.query.message])
            }

            if (!Object.keys(this.$store.getters.info).length){
                await this.$store.dispatch('fetchInfo')
            }
        }
    }
</script>

<style>
#toast-container{
    position: absolute;
    top:50px;
    right: 100px;
    z-index: 9999999;
    opacity: 1;
}
.toast{
    padding: 10px;
    background-color: bisque;
    color: black;
    border-radius: 10px;
}
</style>


