<template>
    <div>
        <h4 class="card-title text-center">Регистрация</h4>
        <form class="login-form mt-4" @submit.prevent="register">
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group ">
                        <label>Имя <span class="text-danger">*</span></label>
                        <div class="position-relative">
                            <user-icon class="fea icon-sm icons"></user-icon>
                            <input type="text" class="form-control pl-5" placeholder="Имя" name="first_name" required=""
                                v-model.trim="first_name">
                        </div>
                    </div>
                </div>
                <!-- <div class="col-md-6">
                    <div class="form-group ">
                        <label>Фамилия <span class="text-danger">*</span></label>
                        <div class="position-relative">
                            <user-check-icon class="fea icon-sm icons"></user-check-icon>
                            <input type="text" class="form-control pl-5" placeholder="Фамилия" name="last_name" required=""
                                v-model="last_name">
                        </div>
                    </div>
                </div> -->
                <div class="col-md-12">
                    <div class="form-group ">
                        <label>Email <span class="text-danger">*</span></label>
                        <div class="position-relative">
                            <mail-icon class="fea icon-sm icons"></mail-icon>
                            <input type="email" class="form-control pl-5" placeholder="Email" name="email" required=""
                                v-model.trim="email">
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="form-group ">
                        <label>Пароль <span class="text-danger">*</span></label>
                        <div class="position-relative">
                            <key-icon class="fea icon-sm icons"></key-icon>
                            <input type="password" class="form-control pl-5" placeholder="Пароль" required=""
                                v-model.trim="password">
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="form-group">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="customCheck1" v-model="agree" required=""> 
                            <label class="custom-control-label" for="customCheck1">Я принимаю <a href="#"
                                    class="text-primary">условия конфиденциальности</a></label>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <button class="btn btn-primary btn-block">Зарегистрироваться</button>
                </div>
                <div class="col-lg-12 mt-4 text-center">
                    <h6>Зарегистрироваться с помощью</h6>
                    <div class="row">
                        <div class="col-6 mt-3">
                            <a href="javascript:void(0)" class="btn btn-block btn-light"><i
                                    class="mdi mdi-phone text-primary"></i> Телефон</a>
                        </div>

                        <div class="col-6 mt-3">
                            <a href="javascript:void(0)" class="btn btn-block btn-light"><i
                                    class="mdi mdi-google text-danger"></i> Google</a>
                        </div>
                    </div>
                </div>
                <div class="mx-auto">
                    <p class="mb-0 mt-3"><small class="text-dark mr-2">Уже есть аккаунт ?</small>
                        <router-link to="/auth-login" class="text-dark font-weight-bold">Вход</router-link>
                    </p>
                </div>
            </div>
        </form>

    </div>
</template>

<script>
    import firebase from 'firebase/compat/app'
    import {mapActions} from 'vuex'
    import messages from '@/utils/messages'

    export default {
        name: 'Register',
        data() {
            return {
                first_name: '',
                // last_name: '',
                email: '',
                password: '',
                agree: false
            };
        },
        
        methods: {
            ...mapActions(['registerFirebase']),
            async register(){
                try{
                await this.registerFirebase({
                    email: this.email,
                    password: this.password,
                    name: this.first_name
                })
                this.$router.push('/auth-login');

                } catch (e){console.log('ОШИБКАААА')}      
            }
        },
        computed: {
            error(){
                return this.$store.getters.error
            }
        },
         watch: {
            error(fbError) {
                console.log(fbError)
                this.$error(messages[fbError.code] || 'Что-то пошло не так')
                // console.log('ошибка')
            }
        },
        mounted() {
            // this.$message('Test')
            if (messages[this.$route.query.message]){
                this.$message(messages[this.$route.query.message])
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