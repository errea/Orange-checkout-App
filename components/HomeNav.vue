<template>
<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
    <a href="#" class="flex items-center">
        <img src="/docs/images/logo.svg" class="mr-3 h-6 sm:h-10" alt="Flowbite Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    <div id="mobile-menu" class="hidden w-full md:block md:w-auto">
      <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        <li>
          <NuxtLink to="/" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Logout</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>


<script>
export default {
  name: 'HomeNav',
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
  //    watch: {
  //   user: {
  //     handler(newUser) {
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
        handleForm () {
            const formvalue = Object.assign({}, this.user)
            this.resetFormValues()
            this.$emit('signin-form', {type:'signin', data:formvalue})
        },
        // resetFormValues () {
        //     this.user.email = ''
        //     this.user.password = ''
        // },
        // isValid(prop) {
        
        // },
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