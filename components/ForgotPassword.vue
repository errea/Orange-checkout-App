<template>
	<main class="relative z-10 flex-auto flex items-center justify-center text-sm text-center text-gray-600 py-16 px-4 sm:px-6 lg:px-8">
		<div class="w-full max-w-sm justify-center mt-10">
			<h1 class="text-center mb-2 text-gray-900 text-sm font-semibold">Reset your password</h1>
			<p class="text-center text-sm mb-10">Enter your new password and we'll help you to reset your password and you can Login.</p>
			<form
				novalidate
				@submit.prevent=""
			>
				<input
					type="hidden"
					name="_token"
					value="fjbLDgGGF7TBivJwS2vQsu2ReKFdXqpF4XqpyPO7"
				>
				<div class="relative">
					<label
						for="grid-password"
						class="sr-only"
					>
            Password
          </label>
					<input
						id="grid-password"
						name="password"
						type="password"
						required=""
						autofocus=""
						class="text-gray-900 ring-gray-900 ring-opacity-5 placeholder-gray-400 appearance-none bg-white rounded-md block w-full px-3 py-2 border border-transparent shadow ring-1 sm:text-sm focus:border-teal-500 focus:ring-teal-500 focus:outline-none"
						placeholder="Password"
						value=""
					>
				</div>
				<div class="mt-4">
					<label
						for="grid-password"
						class="sr-only"
					>
            Re-enter Password
          </label>
					<input
						id="grid-passwordReset"
						name="password"
						type="password"
						required=""
						autofocus=""
						class="text-gray-900 ring-gray-900 ring-opacity-5 placeholder-gray-400 appearance-none bg-white rounded-md block w-full px-3 py-2 border border-transparent shadow ring-1 sm:text-sm focus:border-teal-500 focus:ring-teal-500 focus:outline-none"
						placeholder="Re-enter Password"
						value=""
					>
				</div>
				<button
					type="submit"
					class="block w-full py-2 px-3 border border-transparent rounded-md text-white font-medium bg-gray-700 shadow-sm sm:text-sm mt-4 hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50"
				>
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

//     mounted() {
//     if (sessionStorage.activeUser) {
//       const activeUser = sessionStorage.activeUser;
//       this.user = JSON.parse(activeUser);
//       this.$router.push("/user/home")
//     } else {
//       this.$router.push("/");
//     }
//   },
    //  methods: {
    //   forgotPasseordSubmit () {
    // //    if ((this.password !== this.passwordVerify){
    // //        this.alert = "Passwords must match";
    // //       return;
    // //    }   
    //   sessionStorage.removeItem("activeUser");
    //   this.$router.push("/user/login");
    //   // window.location.reload();
    // },
    // },
}
</script>

<style>
/* .nuxt-logo {
  height: 180px;
} */
</style>