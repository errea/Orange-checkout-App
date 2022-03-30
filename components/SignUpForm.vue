<template>
	<div class="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0 dark:bg-gray-800">
		<div class="justify-center top-2">
			<form
				class="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mt-12"
				@submit.prevent="registerUserSubmitForm()"
			>
				<div class="mb-6">
					<p class="flex justify-center font-bold text-4xl">
						Register
					</p>
					<span class="mb-6 font-medium">Create your account, it is free and only takes Minutes</span>
				</div>
				<div class="flex flex-wrap -mx-3 mb-6">
					<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
						<label
							class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							for="grid-first-name"
						>
							First Name
						</label>
						<input
							id="grid-first-name"
							v-model="firstName"
							class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
							:class="`form-control ${errors.firstName ? 'is-invalid' : ''}`"
							type="text"
							placeholder="Jane"
						>
						<div class="text-red-600 text-xs italic">{{ errors.firstName }}</div>
					</div>
					<div class="w-full md:w-1/2 px-3">
						<label
							class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							for="grid-last-name"
						>
							Last Name
						</label>
						<input
							id="grid-last-name"
							v-model="lastName"
							class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							:class="`form-control ${errors.userName ? 'is-invalid' : ''}`"
							type="text"
							placeholder="Doe"
						>
						<div class="text-red-600 text-xs italic">{{ errors.lastName }}</div>
					</div>
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
				<div class="flex flex-wrap -mx-3 mb-6">
					<div class="w-full px-3">
						<label
							class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							for="grid-password"
						>
							Confirm Password
						</label>
						<input
							id="grid-passwordChck"
							v-model="passwordChck"
							class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							:class="`form-control ${errors.passwordChck ? 'is-invalid' : ''}`"
							autocomplete="on"
							type="password"
							placeholder="******************"
						>
						<div class="text-red-600 text-xs italic">{{ errors.passwordChck }}</div>
					</div>
				</div>
				<div class="w-full mb-6">
					<label class="w-full flex text-gray-500 font-bold">
						<input
							v-model="terms"
							class="mr-2 mt-1 leading-tight cursor-pointer"
							name="terms"
							value="1"
							type="checkbox"
							required
						>
						<p class="text-sm">
							By clicking on the Sign Up button, you agree to our <span class="text-blue-400 hover:text-sky-400 cursor-pointer"> Terms & Conditions of use </span> and <span class="text-blue-400 hover:text-sky-400 cursor-pointer "> Privacy Policy </span>
						</p>
					</label>
				</div>
				<div class="flex justify-center">
					<button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
						Register
					</button>
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
                lastName:'',
                email:'',
                password:'',
                passwordChck:'',
                terms: false,
                errors: {}, 
                users: [],
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
        onSubmit () {
            const user = Object.assign({}, this.user)
            this.resetUser()
            this.$emit('signup-form', {type:'signup', data:user})
        },
        registerUserSubmitForm () {

          const user = {
            firstName: this.firstName, 
            lastName: this.lastName,
            email: this.email,
            password: this.password,
          };
          const { isInvalid, errors } = validateSignUpForm({
           ...user,
            passwordChck: this.passwordChck,
            });
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
        this.lastName = "";
        this.email = "";
        this.password = "";
        this.passwordChck = "";
        this.$router.push("/user/login");
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