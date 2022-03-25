<template>
<section class="section">
    <div class="container">
        <div class="columns">
            <div class="column is-8 is-offset-2">
                <HorizontalStepper
                    :steps="StepperSteps" @completed-step="completeStep"
                    @active-step="isStepActive" @stepper-finished="alert"
                >
                                <ShoppingCartListStepper />

                </HorizontalStepper>
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
    ShoppingCartListStepper,
    HorizontalStepper,
  },
  data () {
    return {
      StepperSteps: [
                {
                    icon: 'mail',
                    name: 'first',
                    title: 'Sample title 1',
                    subtitle: 'Subtitle sample',
                    component: ShoppingCartListStepper,
                    completed: false

                },
                // {
                //     icon: 'report_problem',
                //     name: 'second',
                //     title: 'Sample title 2',
                //     subtitle: 'Subtitle sample',
                //     component: StepTwo,
                //     completed: false
                // }
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
            this.demoSteps.forEach((step) => {
                if (step.name === payload.name) {
                    step.completed = true;
                }
            })
        },
        isStepActive(payload) {
            this.demoSteps.forEach((step) => {
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
