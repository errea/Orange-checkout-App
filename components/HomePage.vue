<template>
 <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <div class="absolute justify-center top-2">
      <button 
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      @click.prevent='setComponent("signin")'
      >
      Signin
			</button>
			<button 
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      @click.prevent='setComponent("signup")'
      >
      Register
			</button> 
      <transition name='form' mode='out-in'>
			<keep-alive>
				 <component 
         :is="currentComponent"
         :feedback='feedback' 
				 @signup-form='handleForm' @signin-form='handleForm'>
         </component>
			</keep-alive>
	  </transition>
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
            feedback:{},
            currentComponent:'signin'
         }
    },
    methods: {
        handleForm ( data ) {
            this.feedback = data
            setTimeout(() => {
                this.setComponent('feedback')
            }, 280)
        },
        // isDisabled (btnName) {
        //     return (this.currentComponent === btnName)
        // },
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
