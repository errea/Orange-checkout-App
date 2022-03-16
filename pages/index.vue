<template>
  <HomePage />
</template>

<script>
import HomePage from '~/components/HomePage'

export default {
  name: 'IndexPage',
  components: {
    HomePage,
  },
  data () {
    return { 
        user: '',
      }
    },
    // mounted () {
    //   if(sessionStorage.activeUser) {

    //   } 
    // },
}
</script>
