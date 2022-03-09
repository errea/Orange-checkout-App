<template>
<form 
class="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mt-12"
action="javascript:;" @submit.prevent="submitForm"
>
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
      <input id="grid-first-name" v-model="user.firstname" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Jane">
      <p class="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input id="grid-last-name" v-model="user.lastname" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Doe">
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
      <input id="grid-password" v-model="user.password" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="password" placeholder="******************">
      <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Confirm Password
      </label>
      <input id="grid-password" v-model="user.passwordChck" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="password" placeholder="******************">
      <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
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
      <button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Register
      </button>
   </div>
   <p>Email: {{user.email}}</p>
   <p>Password: {{user.password}}</p>
   <p>Terms: {{user.terms}}</p>
</form>
</template>

<script>
export default {
  name: 'SignUpForm',
    data () {
        return { 
            user : {
                firstname:'',
                lastname:'',
                email:'',
                password:'',
                passwordChck:'',
                terms: false, 
            }
        }
    },
    computed: {
        isFormValid () {
            return (
                this.isValid('firstname') && 
                this.isValid('lastname') && 
                this.isValid('email') && 
                this.isValid('password') && 
                this.isValid('passwordChck')
            )
        }
    },
    // mounted () {
    //     const element = this.$el.querySelector('#passwordcheck')
    //     element.addEventListener('blur', () => {
    //         if (!this.isValid('passwordChck')) {
    //             element.classList.add('invalid')
    //         } else {
    //             element.classList.remove('invalid')
    //         }
    //     })  
    // },
    methods: {
        isValid(prop) {
        
        },
        resetUser () {
            this.user.firstname = ''
            this.user.lastname = ''
            this.user.email = ''
            this.user.password = ''
            this.user.passwordChck = ''
        },
        onSubmit () {
            const user = Object.assign({}, this.user)
            this.resetUser()
            this.$emit('signup-form', {type:'signup', data:user})
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