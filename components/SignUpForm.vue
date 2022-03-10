<template>
<form 
  class="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mt-12" 
  @submit.prevent="submitForm">
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
      <input id="grid-first-name" v-model="user.firstName" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Jane" required>
      <p class="text-gray-600 text-xs italic">Fill out your First and Last names.</p>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input id="grid-last-name" v-model="user.lastName" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Doe" required>
    </div>
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
      <input id="grid-password" v-model="user.password" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" autocomplete="on" type="password" placeholder="******************" required>
      <p v-if="user.passwordErr" class="text-red-600 text-xs italic"> Password must be at least seven characters long </p>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Confirm Password
      </label>
      <input id="grid-passwordChck" v-model="user.passwordChck" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" autocomplete="on" type="password" placeholder="******************" required>
    </div>
  </div>
  <div class="w-full mb-6">
      <label class="w-full flex text-gray-500 font-bold">
      <input v-model="user.terms" class="mr-2 mt-1 leading-tight cursor-pointer" type="checkbox" required>
      <p class="text-sm">
        By clicking on the Sign Up button, you agree to our <span class="text-blue-400 hover:text-sky-400 cursor-pointer"> Terms & Conditions of use  </span> and <span class="text-blue-400 hover:text-sky-400 cursor-pointer "> Privacy Policy </span>
      </p>
      </label>
    </div>
   <div class="flex justify-center">
      <button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Register
      </button>
   </div>
</form>
</template>

<script>
export default {
  name: 'SignUpForm',
    data () {
        return { 
            user : {
                firstName:'',
                lastName:'',
                email:'',
                password:'',
                passwordChck:'',
                terms: false, 
                passwordErr:'',
            },
        }
    },
    // computed: {
    //     isFormValid () {
    //         return (
    //             this.isValid('firstname') && 
    //             this.isValid('lastname') && 
    //             this.isValid('email') && 
    //             this.isValid('password') && 
    //             this.isValid('passwordChck')
    //         )
    //     }
    // },
    watch: {
    user: {
      handler(newUser) {
      localStorage.user = JSON.stringify(newUser);
    },
    deep: true
    }
  },
  mounted() {
    if(localStorage.user) 
    {
      this.user = JSON.parse(localStorage.user);
    }
  },
    methods: {
        // isValid(prop) {
        
        // },
        // resetUser () {
        //     this.user.firstname = ''
        //     this.user.lastname = ''
        //     this.user.email = ''
        //     this.user.password = ''
        //     this.user.passwordChck = ''
        // },
        onSubmit () {
            const user = Object.assign({}, this.user)
            this.resetUser()
            this.$emit('signup-form', {type:'signup', data:user})
        },
        submitForm () {
          // validate the password
          this.user.passwordErr = this.user.password.length > 6 ? '' : 'Password must be at least seven characters long';

          // validate password + passwordCheck 
          

          if (!this.user.passwordErr) {
            console.log('FirstName: ', this.user.firstName)
            console.log('LastName: ', this.user.lastName)
            console.log('Email: ', this.user.email)
            console.log('Password: ', this.user.password)
            console.log('PasswordCheck: ', this.user.passwordChck)

          }
          if (this.user.password !== this.user.passwordChck) {
            alert("Passwords do not match.");
            return false;
        }
        return true;
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