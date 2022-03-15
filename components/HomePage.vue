<template>
<div class="px-2 sm:px-4 py-2.5 dark:bg-gray-800">
  <div class="container flex flex-wrap justify-center items-center mx-auto">
    <div class="w-full md:block md:w-auto">
          <button 
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      @click.prevent='setComponent("signup")'
      >
      Register
			</button> 
       <button 
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      @click.prevent='setComponent("signin")'
      >
      Signin
			</button>
       <transition name='form' mode='out-in'>
			<keep-alive>
				 <component 
         :is="currentComponent"
				 @signup-form='handleForm' @signin-form='handleForm'>
         </component>
			</keep-alive>
	  </transition>
    </div>
  </div>
</div>	 
</template>

<script>
import SignUpForm from '~/components/SignUpForm';
import SignInForm from '~/components/SignInForm';

export default {
  name: 'HomePage',
   components: {
    signup:SignUpForm,
    signin:SignInForm,
  },
    data () {
        return {
            currentComponent:'signup'
         }
    },
    methods: {
        handleForm ( data ) {
            this.feedback = data
            setTimeout(() => {
                this.setComponent('feedback')
            }, 280)
        },
        isDisabled (btnName) {
            return (this.currentComponent === btnName)
        },
        setComponent(componentName) {
            if (this.currentComponent !== componentName) {
                this.currentComponent = componentName
            }
        }
    }
}
</script>

<style>
/* .nuxt-logo {
  height: 180px;
} */
</style>