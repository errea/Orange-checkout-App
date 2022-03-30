<template>

	<div class="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0 dark:bg-gray-800">
		<div class="justify-center top-2">
			<form
				novalidate
				class="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mt-12"
				@submit.prevent="loginUserSubmitForm"
			>
				<div class="mb-6">
					<p class="flex justify-center font-bold text-4xl">
						Sign In
					</p>
					<span class="mt-6 font-medium">Your account has been created successfully, now sign in with your details created</span>
				</div>
				<div class="flex flex-wrap -mx-3 mb-6">
					<div class="w-full px-3">
						<label
							class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							for="grid-email"
						>
							Email
						</label>
						<input
							id="grid-email"
							v-model="email"
							class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							:class="`form-control ${errors.email ? 'is-invalid' : ''}`"
							type="email"
							placeholder="erreakezy@gmail.com"
						>
						<div class="text-red-600 text-xs italic">{{ errors.email }}</div>
					</div>
				</div>
				<div class="flex flex-wrap -mx-3 mb-6">
					<div class="w-full px-3">
						<label
							class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							for="grid-password"
						>
							Password
						</label>
						<input
							id="grid-password"
							v-model="password"
							class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							:class="`form-control ${errors.password ? 'is-invalid' : ''}`"
							type="password"
							placeholder="******************"
						>
						<div class="text-red-600 text-xs italic">{{ errors.password }}</div>
					</div>
				</div>
				<div class="w-full mb-6">
					<label class="w-full flex text-gray-500 font-bold">
						<input
							v-model="remember"
							class="mr-2 mt-1 leading-tight"
							type="checkbox"
							required
						>
						<p class="text-sm text-sky-400">
							Remember me
						</p>
					</label>
				</div>
				<div class="flex justify-center">
					<button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
						Login
					</button>
				</div>
				<div class="flex items-center gap-6 justify-between mt-6">
					<NuxtLink
						to="/user/reg"
						class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
					>
						Click here to Sign Up
					</NuxtLink>
					<NuxtLink
						to="/user/forgot"
						class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
					>
						Forgot Password?
					</NuxtLink>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import validateSignInForm from '~/validations/validateSignInForm';


export default {
  name: 'SignInForm',
  data () {
        return {   
                email:'',
                password:'',
                remember: false,
                errors: {},
                user:'',
              }
    },
 mounted() {
    if (sessionStorage.activeUser) {
      const activeUser = sessionStorage.activeUser;
      this.user = JSON.parse(activeUser);
      this.$router.push("/user/home")
    }
  }, 
    methods: {
       handleForm () {
            const formvalue = Object.assign({}, this.user)
            this.resetFormValues()
            this.$emit('signin-form', {type:'signin', data:formvalue})
        },
    loginUserSubmitForm () {

      const credentials = {
        email: this.email,
        password: this.password,
      };
      const { isInvalid, errors } = validateSignInForm(credentials);

      if (isInvalid) {
        this.errors = errors;
      } else {
        this.errors = {};
        // login code goes here
        let lsUsers = localStorage.users;
        lsUsers = JSON.parse(lsUsers);

        const emailIndex = lsUsers.findIndex(
          (user) => user.email === credentials.email);

        if (emailIndex > -1) {
          const passwordIndex = lsUsers.findIndex(
            (user) => user.password === credentials.password);
            if (passwordIndex > -1) {
              // setting active user
                const activeUser = lsUsers.find(
              (user) => user.email === credentials.email
            );
              sessionStorage.setItem("activeUser", JSON.stringify(activeUser));
              this.$router.push("/user/home")
            } else {
            this.errors.password = "Incorrect Login";
            }
           } else {
            this.errors.email = "Email Address does not exist!";
          }
      }
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