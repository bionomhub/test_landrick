<template>
  <section id="firebaseui-auth-container"></section>
</template>

<script>

import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

export default {
    mounted() {
        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        var uiConfig = {
            signInSuccessUrl: "/",
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
                firebase.auth.PhoneAuthProvider.PROVIDER_ID,
            ]
        };
        ui.start("#firebaseui-auth-container", uiConfig);
    },
}
</script>

<style>

</style>