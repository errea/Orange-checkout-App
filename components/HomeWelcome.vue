<template>
	<div class="bg-gray-50">
		<h1 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
			Welcome {{ user.email }}
		</h1>

		<HomeHeader />

		<HomeMain />

		<Footer />
	</div>
</template> 

<script>
import Footer from '~/components/panels/Footer';
import HomeHeader from '~/components/panels/HomeHeader';
import HomeMain from '~/components/panels/HomeMain';

export default {
  name: 'HomeWelocome',
   components: {
     Footer,
     HomeHeader,
     HomeMain,
  },
    data () {
        return {
          user:''
         }
    },
    mounted () {
      if(sessionStorage.activeUser) {
        const activeUser = sessionStorage.activeUser;
        this.user = JSON.parse(activeUser);
      }
    },
    methods: {
    }
}
</script>

<style>
/* .nuxt-logo {
  height: 180px;
} */
</style>