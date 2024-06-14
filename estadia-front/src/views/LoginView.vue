<template>
  <q-layout class="mainContainer">
      <q-page-container>
        <q-page>
          <div class="row justify-center q-my-xl logincontainer">
            <q-card class="my-card-state bg-blue-grey-9 text-white">
              <q-card-section>
                <div class="text-h6 q-mb-md">Iniciar sesión</div>
                <div class=" col-11 col-md-5 q-ma-md">
                    <q-input
                      outlined
                      class="q-pb-md"
                      v-model="loginForm.user"
                      label="Usuario"
                      type="text"
                      dark
                      dense/>
                      <q-input
                      outlined
                      v-model="loginForm.pass"
                      label="Password"
                      type="password"
                      dark
                      dense/>
                  </div>
                  <q-card-actions class="row justify-center">
                    <q-btn 
                      flat
                      :disable="isEmpty"
                      @click="postLogin">Login</q-btn>
                  </q-card-actions>
              </q-card-section>
            
            </q-card>
          </div>
        </q-page>
      </q-page-container>
    </q-layout>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
   
    const addingState = ref(false);

    const loginForm = reactive({
      user: '',
      pass: ''
    });

    // const toggleAddingState = () => {
    //   addingState.value = !addingState.value
    //   loginForm.titulo = ''
    //   loginForm.descripcion = ''
    // };

    const postLogin = () => {
      console.log('post login', loginForm.user);
    };
    const isEmpty = computed(() => {
      return loginForm.user === '' || loginForm.pass === ''
    })

</script>

<style scoped>
@media (max-width: 768px) {
  .my-card-state {
    width: 100%;
  }
}

@media (min-width: 769px) {
  .my-card-state {
    width: 40%;
  }
}
.logincontainer{
  width: 100%;
  /* background-color: red; */
  /* max-width: 250px; */
}
/* .my-card-state{
  width: 40%;
} */
.timeline{
  max-width: 60vw;
}
</style>
    