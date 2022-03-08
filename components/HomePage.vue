<!-- Please remove this file from your project -->
<template>
 <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <div class="absolute justify-center top-2">
			<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register
			</button> 
			<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Signin
			</button>
	  </div>
    <SignInForm />
    <!-- <SignUpForm /> -->
 </div>
</template>

<script>
// import SignUpForm from '~/components/SignUpForm';
import SignInForm from '~/components/SignInForm';

export default {
  name: 'SiginForm',
   components: {
    // SignUpForm,
    SignInForm
  },
}
</script>
