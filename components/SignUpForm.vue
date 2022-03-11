<template>   
<div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
  <div class="absolute justify-center top-2">
    <form 
          class="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mt-12" 
          @submit.prevent="registerUsersubmitForm()">
        <div class="mb-6">
          <p class="flex justify-center font-bold text-4xl">
            Register
          </p>
            <span class="mb-6 font-medium">Create your account, it is free and only takes Minutes</span>
          </div>
        <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input id="grid-first-name" v-model="firstName" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" :class="`form-control ${errors.firstName ? 'is-invalid' : ''}`" type="text" placeholder="Jane" required>
      <div class="text-red-600 text-xs italic">{{ errors.firstName }}</div>
      </div>
      <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        User Name
      </label>
      <input id="grid-last-name" v-model="userName" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" :class="`form-control ${errors.userName ? 'is-invalid' : ''}`" type="text" placeholder="Doe" required>
      <div class="text-red-600 text-xs italic">{{ errors.userName }}</div>
      </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
        Email 
      </label>
      <input id="grid-email" v-model="email" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" :class="`form-control ${errors.email ? 'is-invalid' : ''}`" type="email" required placeholder="erreakezy@gmail.com">
      <div class="text-red-600 text-xs italic">{{ errors.email }}</div>
      </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Password
      </label>
      <input id="grid-password" v-model="password" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" :class="`form-control ${errors.password ? 'is-invalid' : ''}`" autocomplete="on" type="password" placeholder="******************" required>
      <!-- <p v-if="passwordErr" class="text-red-600 text-xs italic"> Password must be at least seven characters long </p> -->
      <div class="text-red-600 text-xs italic">{{ errors.password }}</div>
      </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Confirm Password
      </label>
      <input id="grid-passwordChck" v-model="passwordChck" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" :class="`form-control ${errors.passwordChck ? 'is-invalid' : ''}`" autocomplete="on" type="password" required placeholder="******************">
      <div class="text-red-600 text-xs italic">{{ errors.passwordChck }}</div>
      </div>
      </div>
      <div class="w-full mb-6">
      <label class="w-full flex text-gray-500 font-bold">
      <input v-model="terms" class="mr-2 mt-1 leading-tight cursor-pointer" type="checkbox" required>
      <p class="text-sm">
        By clicking on the Sign Up button, you agree to our <span class="text-blue-400 hover:text-sky-400 cursor-pointer"> Terms & Conditions of use  </span> and <span class="text-blue-400 hover:text-sky-400 cursor-pointer "> Privacy Policy </span>
      </p>
      </label>
    </div>
    <div class="flex justify-center">
      <button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Register
      </button>
      <!-- // if the user clicks on this register... take user to login or SignInForm -->
    </div>
  </form>
  </div>
</div>
</template>

<script>
import validateSignUpForm from '~/validations/validateSignUpForm';

export default {
  name: 'SignUpForm',
    data () {
        return { 
                firstName:'',
                userName:'',
                email:'',
                password:'',
                passwordChck:'',
                terms: false, 
        }
    },
  //   watch: {
  //   user: {
  //     handler(newUser, oldUser) {
  //     localStorage.user = JSON.stringify(newUser);
  //   },
  //   deep: true
  //   }
  // },
  // mounted() {
  //   if(localStorage.user) 
  //   {
  //     this.user = JSON.parse(localStorage.user);
  //   }
  // },
    methods: {
        onSubmit () {
            const user = Object.assign({}, this.user)
            this.resetUser()
            this.$emit('signup-form', {type:'signup', data:user})
        },
        registerUsersubmitForm () {

          const user = {
            firstName: this.firstName, 
            userName: this.userName,
            email: this.email,
            password: this.password,
            passwordChck: this.passwordChck,
            terms: this.terms
          };
          const { isInvalid, errors } = validateSignUpForm(user);
      if (isInvalid) {
        this.errors = errors;
      } else {
        this.errors = {};
        // store user in local storage
        if (localStorage.users) {
          const lsUsers = localStorage.users;
          this.users = JSON.parse(lsUsers);
        }
        this.users.push(user);
        localStorage.setItem("users", JSON.stringify(this.users));
        this.firstName = "";
        this.userName = "";
        this.email = "";
        this.password = "";
        this.passwordChck = "";
        // this.$router.push("/login");
      }
        }
    },
    template:'#registerTemplate',
}
</script>

<style>
/* .nuxt-logo {
  height: 180px;
} */
</style>