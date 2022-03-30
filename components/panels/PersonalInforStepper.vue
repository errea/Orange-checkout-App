<template>
	<div class="mt-8 p-4">
		<div>
			<div class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">Full Name</div>
			<div class="flex flex-col md:flex-row">
				<div class="w-full flex-1 mx-2 svelte-1l8159u">
					<div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
						<input
							placeholder="First Name"
							class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
						>
					</div>
				</div>
				<div class="w-full flex-1 mx-2 svelte-1l8159u">
					<div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
						<input
							placeholder="Last Name"
							class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
						>
					</div>
				</div>
			</div>
			<div class="flex flex-col md:flex-row">
				<div class="w-full mx-2 flex-1 svelte-1l8159u">
					<div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"> Username</div>
					<div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
						<input
							placeholder="Just a hint.."
							class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
						>
					</div>
				</div>
				<div class="w-full mx-2 flex-1 svelte-1l8159u">
					<div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"> Your Email</div>
					<div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
						<input
							placeholder="jhon@doe.com"
							class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
						>
					</div>
				</div>
			</div>
			<div class="flex flex-wrap -mx-3 mb-2">
				<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<label
						class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-city"
					>
						City
					</label>
					<input
						id="grid-city"
						class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						type="text"
						placeholder="Albuquerque"
					>
				</div>
				<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<label
						class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-state"
					>
						State
					</label>
					<div class="relative">
						<select
							id="grid-state"
							class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						>
							<option>New Mexico</option>
							<option>Missouri</option>
							<option>Texas</option>
						</select>
						<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
							<svg
								class="fill-current h-4 w-4"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
							>
								<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
							</svg>
						</div>
					</div>
				</div>
				<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<label
						class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-zip"
					>
						Zip
					</label>
					<input
						id="grid-zip"
						class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						type="text"
						placeholder="90210"
					>
				</div>
			</div>
		</div>

	</div>
</template>

<script>


export default {
  name: 'FooterComponent',
   components: {
  },
  data () {
    return { 
      }
    },
}
</script>


<style>
/* .nuxt-logo {
  height: 180px;
} */
</style>