<template>
	<!-- component -->
	<div class="p-5">
      <StepHorizontal />
		<div class="mt-8 p-4">
			<div>
				<div class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3"></div>
            <ShoppingCartListStepper />
			</div>
			<div class="flex p-2 mt-4">
				<button 
        class="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-gray-200  
        bg-gray-100 
        text-gray-700 
        border duration-200 ease-in-out 
        border-gray-600 transition">Previous</button>
				<div class="flex-auto flex flex-row-reverse">
					<button 
        class="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-600  
        bg-teal-600 
        text-teal-100 
        border duration-200 ease-in-out 
        border-teal-600 transition">Next</button>
					<button 
        class="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-200  
        bg-teal-100 
        text-teal-700 
        border duration-200 ease-in-out 
        border-teal-600 transition">Skip</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ShoppingCartListStepper from '~/components/panels/ShoppingCartListStepper.vue';
import StepHorizontal from '~/components/panels/StepHorizontal.vue';



export default {
  name: 'StepperComponent',
   components: {
   ShoppingCartListStepper,
   StepHorizontal,
  },
data () {
    return {
        currentstep : 1,
        indicatorclass: true,
        step: 1,
        active: 1,
        firststep: true,
        nextStep:"",
        lastStep: "",
        laststep: false,
        steps: [
            {
                id: 1,
                title: 'Start',
                icon_class: "fa fa-map-marker"
            }, {
                id: 2,
                title: 'Middle',
                icon_class: "fa fa-folder-open"
            }, {
                id: 3,
                title: 'End',
                icon_class: "fa fa-paper-plane"
            }
        ]
      }
    },
// computed: {
//         indicatorclass() {
//             return {
//                 'active': (this.step.id === this.currentstep),
//                 'complete': (this.currentstep > this.step.id)
//             }
//         },
//         active() {
//             return (this.step.id === this.currentstep)
//         },

//         firststep() {
//             return (this.currentstep === 1)
//         },

//         laststep() {
//             return (this.currentstep === this.stepcount)
//         }
//     },
  mounted() {
    if (sessionStorage.activeUser) {
      const activeUser = sessionStorage.activeUser;
      this.user = JSON.parse(activeUser);
      this.$router.push("/user/stepper")
    } else {
      this.$router.push("/");
    }
  },

  // methods: {
  //   nextStep() {
  //           this.$emit('step-change', this.currentstep + 1)
  //       },

  //     lastStep() {
  //           this.$emit('step-change', this.currentstep - 1)
  //       },
  //   stepChanged(step) {
  //           this.currentstep = step;
  //       }
  // }
}
</script>


<style>
/* .nuxt-logo {
  height: 180px;
} */
</style>
