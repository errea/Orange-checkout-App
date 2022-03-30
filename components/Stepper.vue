<template>
	<section class="section">
		<div class="container">
			<div class="columns">
				<div class="column is-8 is-offset-2">
					<horizontal-stepper
						:steps="stepperSteps"
						@completed-step="completeStep"
						@active-step="isStepActive"
						@stepper-finished="alert"
					>
					</horizontal-stepper>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import HorizontalStepper from 'vue-stepper';
import ShoppingCartListStepper from '~/components/panels/ShoppingCartListStepper.vue';


export default {
  name: 'StepperComponent',
   components: {
    HorizontalStepper,
  },
  data () {
    return {
      stepperSteps: [
                {
                    name: 'Checkout Form',
                    title: 'Enter Checkout List',
                    subtitle: 'Form for Checkout List',
                    component: ShoppingCartListStepper,
                    completed: false

                },
            ]
      }
    },
  mounted() {
    if (sessionStorage.activeUser) {
      const activeUser = sessionStorage.activeUser;
      this.user = JSON.parse(activeUser);
      this.$router.push("/user/stepper")
    } else {
      this.$router.push("/");
    }
  },

  methods: {
    completeStep(payload) {
            this.stepperSteps.forEach((step) => {
                if (step.name === payload.name) {
                    step.completed = true;
                }
            })
        },
        isStepActive(payload) {
            this.stepperSteps.forEach((step) => {
                if (step.name === payload.name) {
                    if(step.completed === true) {
                        step.completed = false;
                    }
                }
            })
        },
        alert(payload) {
            alert('end')
        }
  }
}
</script>


<style>
/* .nuxt-logo {
  height: 180px;
} */
</style>
