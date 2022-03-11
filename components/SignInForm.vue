<template>
    
<div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <div class="absolute justify-center top-2">
      <form 
  class="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mt-12"
  @submit.prevent="submitForm"
  >
    <div class="mb-6">
    <p class="flex justify-center font-bold text-4xl">
      Sign In
    </p>
    <span class="mt-6 font-medium">Your account has been created successfully, now sign in with your details created</span>
  </div>
    <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
        Email 
      </label>
      <input id="grid-email" v-model="user.email" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="email" required placeholder="erreakezy@gmail.com">
      <p class="text-gray-600 text-xs italic">Enter your email</p>
    </div>
  </div>
    <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Password
      </label>
      <input id="grid-password" v-model="user.password" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" autocomplete="on" type="password" required placeholder="******************">
      <p class="text-gray-600 text-xs italic">Enter your Password</p>
    </div>
  </div>
  <div class="w-full mb-6">
      <label class="w-full flex text-gray-500 font-bold">
      <input v-model="user.remember" class="mr-2 mt-1 leading-tight" type="checkbox" required>
      <p class="text-sm text-sky-400">
        Remember me 
      </p>
      </label>
    </div>
  <div class="flex justify-center">
      <button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Login
      </button>
      <!-- // If the user Logs in... take user to Home (HomeNav Component) -->
  </div>
    <div class="flex items-center gap-6 justify-between mt-6">
      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Click here to Sign Up
      </a>
      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
</form>
    </div>
</div>
</template>

<script>
export default {
  name: 'SignInForm',
  data () {
        return { 
            user: {
                email:'',
                password:'',
                remember: false,
            }
        }
    },
    computed: {
        isFormValid () {
            return (this.isValid('email') && this.isValid('password'))
        }
    },
    methods: {
        handleForm () {
            const formvalue = Object.assign({}, this.user)
            this.resetFormValues()
            this.$emit('signin-form', {type:'signin', data:formvalue})
        },
        submitForm () {
          
        }
    },
    template:'#signinTemplate',
}
</script>


<style>
/* .nuxt-logo {
  height: 180px;
} */
</style>