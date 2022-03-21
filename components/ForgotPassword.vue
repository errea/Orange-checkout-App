<template>
    
  <main class="relative z-10 flex-auto flex items-center justify-center text-sm text-center text-gray-600 py-16 px-4 sm:px-6 lg:px-8"> 
<div class="w-full max-w-sm justify-center mt-10">
    <!-- <svg width="214" height="32" fill="none" class="mx-auto mb-12"><path d="M25.043 2.286c-6.071 0-9.866 3.048-11.383 9.143 2.276-3.048 4.932-4.19 7.968-3.429 1.732.435 2.97 1.696 4.34 3.093C28.199 13.367 30.783 16 36.426 16c6.07 0 9.865-3.048 11.383-9.142-2.277 3.048-4.933 4.19-7.968 3.428-1.732-.434-2.97-1.696-4.34-3.092-2.232-2.275-4.816-4.908-10.458-4.908zM13.66 16c-6.07 0-9.866 3.048-11.383 9.143 2.276-3.048 4.932-4.19 7.968-3.428 1.731.434 2.97 1.696 4.34 3.092 2.231 2.275 4.815 4.908 10.458 4.908 6.07 0 9.865-3.048 11.383-9.143-2.277 3.048-4.933 4.19-7.969 3.428-1.73-.434-2.97-1.696-4.34-3.092C21.887 18.634 19.302 16 13.66 16z" fill="#06B6D4"></path><path d="M68.594 12.708V9.143h-4.235v-4.8L60.671 5.44v3.703H57.53v3.565h3.142v8.229c0 4.457 2.254 6.034 7.923 5.348V22.96c-2.8.137-4.235.171-4.235-2.023v-8.229h4.235zM84.76 9.143v2.434c-1.298-1.783-3.312-2.88-5.976-2.88-4.644 0-8.503 3.908-8.503 9.017 0 5.074 3.859 9.017 8.503 9.017 2.664 0 4.678-1.097 5.976-2.914v2.468h3.688V9.143h-3.688zM79.366 23.2c-3.074 0-5.396-2.297-5.396-5.486 0-3.189 2.322-5.486 5.395-5.486 3.074 0 5.396 2.297 5.396 5.486 0 3.189-2.322 5.486-5.395 5.486zM94.593 6.57c1.297 0 2.356-1.097 2.356-2.366a2.366 2.366 0 00-2.356-2.365 2.366 2.366 0 00-2.357 2.365c0 1.269 1.059 2.366 2.356 2.366zm-1.844 19.714h3.688V9.143h-3.688v17.142zm7.97 0h3.688V1.257h-3.688v25.028zm27.64-17.142l-3.347 11.828-3.551-11.828h-3.517l-3.586 11.828-3.313-11.828h-3.893l5.362 17.142h3.62l3.585-11.554 3.552 11.554h3.62l5.361-17.142h-3.893zm8.453-2.572c1.298 0 2.356-1.097 2.356-2.366a2.365 2.365 0 00-2.356-2.365 2.365 2.365 0 00-2.356 2.365c0 1.269 1.058 2.366 2.356 2.366zm-1.844 19.714h3.688V9.143h-3.688v17.142zm16.951-17.588c-2.322 0-4.166.857-5.293 2.64V9.143h-3.688v17.142h3.688v-9.188c0-3.497 1.913-4.937 4.337-4.937 2.322 0 3.825 1.371 3.825 3.977v10.148h3.688V15.76c0-4.457-2.732-7.063-6.557-7.063zm24.05-6.412v9.292c-1.297-1.783-3.312-2.88-5.976-2.88-4.644 0-8.503 3.908-8.503 9.017 0 5.074 3.859 9.017 8.503 9.017 2.664 0 4.679-1.097 5.976-2.914v2.468h3.689v-24h-3.689zM170.574 23.2c-3.074 0-5.396-2.297-5.396-5.486 0-3.189 2.322-5.486 5.396-5.486 3.073 0 5.395 2.297 5.395 5.486 0 3.189-2.322 5.486-5.395 5.486z" fill="#111827"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M194.649 4.572h11.383c1.207 0 2.366.481 3.219 1.339a4.58 4.58 0 011.334 3.232v11.429a4.58 4.58 0 01-1.334 3.232 4.542 4.542 0 01-3.219 1.34h-11.383a4.545 4.545 0 01-3.22-1.34 4.58 4.58 0 01-1.333-3.232V9.143a4.58 4.58 0 011.333-3.232 4.544 4.544 0 013.22-1.34zm-6.83 4.571c0-1.818.72-3.562 2-4.848a6.817 6.817 0 014.83-2.009h11.383c1.811 0 3.548.723 4.829 2.009a6.871 6.871 0 012.001 4.848v11.429c0 1.819-.72 3.563-2.001 4.849a6.816 6.816 0 01-4.829 2.008h-11.383a6.817 6.817 0 01-4.83-2.008 6.874 6.874 0 01-2-4.85V9.144zm14.588 8.335c0 2.416-1.816 3.888-4.27 3.888-2.439 0-4.255-1.472-4.255-3.888V9.943h2.183v7.36c0 1.088.574 1.904 2.072 1.904 1.498 0 2.071-.816 2.071-1.904v-7.36h2.199v7.536zm2.301 3.664V9.943h2.199v11.2h-2.199z" fill="#111827"></path></svg> -->
      <h1 class="text-center mb-2 text-gray-900 text-sm font-semibold">Reset your password</h1>
  <p class="text-center text-sm mb-10">Enter your new password and we'll help you to reset your password and you can Login.</p>

  <form novalidate @submit.prevent="">
    <input type="hidden" name="_token" value="fjbLDgGGF7TBivJwS2vQsu2ReKFdXqpF4XqpyPO7">
    <div class="relative">
      <label for="grid-password" class="sr-only">Password</label>
      <input id="grid-password" name="password" type="password" required="" autofocus="" class="text-gray-900 ring-gray-900 ring-opacity-5 placeholder-gray-400 appearance-none bg-white rounded-md block w-full px-3 py-2 border border-transparent shadow ring-1 sm:text-sm focus:border-teal-500 focus:ring-teal-500 focus:outline-none" placeholder="Password" value="">
     </div>
     <div class="mt-4">
      <label for="grid-password" class="sr-only">Re-enter Password</label>
      <input id="grid-passwordReset" name="password" type="password" required="" autofocus="" class="text-gray-900 ring-gray-900 ring-opacity-5 placeholder-gray-400 appearance-none bg-white rounded-md block w-full px-3 py-2 border border-transparent shadow ring-1 sm:text-sm focus:border-teal-500 focus:ring-teal-500 focus:outline-none" placeholder="Re-enter Password" value="">
     </div>
    <button type="submit" class="block w-full py-2 px-3 border border-transparent rounded-md text-white font-medium bg-gray-700 shadow-sm sm:text-sm mt-4 hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50">
      Reset your password
    </button>
  </form>
  </div>
  </main>
</template>

<script>

export default {
  name: 'ForgotPassword',
  data () {
    return { 
        user: '',
         password: '',
        passwordVerify: '',
      }
    },

    mounted() {
    if (sessionStorage.activeUser) {
      const activeUser = sessionStorage.activeUser;
      this.user = JSON.parse(activeUser);
      this.$router.push("/user/home")
    } else {
      this.$router.push("/");
    }
  },
     methods: {
      forgotPasseordSubmit () {
    //    if ((this.password !== this.passwordVerify){
    //        this.alert = "Passwords must match";
    //       return;
    //    }   
      sessionStorage.removeItem("activeUser");
      this.$router.push("/user/login");
      // window.location.reload();
    },
    },
    template:'#signinTemplate',
}
</script>

<style>
/* .nuxt-logo {
  height: 180px;
} */
</style>