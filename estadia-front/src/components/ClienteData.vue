<template>
  <q-layout class="mainContainer">
      <q-page-container>
        <q-page >
          <div class="row justify-center">
            <q-card dark bordered class="bg-grey-9 my-card q-my-lg">
              <q-card-section>
                <div class="text-h6 q-mb-sm">Información del cliente</div>
                <q-btn
                  v-if="props.modoRegistro"
                  :color="!editmode ? 'secondary' : 'accent'"
                  :label="!editmode ? 'Editar' : 'Guardar'"
                  :disable="editmode && isError"
                  @click="!editmode ? toggleEditmode() : updateClientData()"/>
              </q-card-section>
            
              <q-separator dark inset />
            
              <q-card-section>
                <div class="row justify-center">
                  <div class="col-11 col-md-5 q-ma-md"  v-for="(item, index) in data" :key="index">
                    <q-input
                      :disable="props.modoRegistro ? !editmode : props.modoRegistro"
                      outlined
                      :ref="(el) => reFunction(el, item.type, index)"
                      v-model="item.value"
                      :label="item.label"
                      :type="item.type"
                      :rules="getRules(item)"
                      dark
                      dense/>
                  </div>
                </div>
              </q-card-section>

              <q-card-section v-if="!props.modoRegistro">
                <q-btn  
                  color="secondary"
                  label='Guardar'
                  :disable="isError"
                  @click="postClient"/>
              </q-card-section>
            </q-card>
          </div>
         
        </q-page>
      </q-page-container>
    </q-layout>
</template>

<script setup>
import { ref, computed, reactive, defineProps } from 'vue';

    const props = defineProps({modoRegistro: {
      type: Boolean,
      default: false
    }})
    const data = reactive([
      { 
        value: 'Jairo',
        label: 'nombre',
        type: 'text'
      },
      { 
        value: 'Lopez',
        label: 'Apellido Materno',
        type: 'text'
      },
      { 
        value: 'Torres',
        label: 'Apellido Paterno',
        type: 'text'
      },
      { 
        value: 34,
        label: 'Edad',
        type: 'number'
      },
      { 
        value: 'a@gmail.com',
        label: 'Email',
        type: 'email'
      },
      { 
        value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        label: 'Descripcion',
        type: 'textarea'
      },
      { 
        value: 5572151955,
        label: 'Teléfono',
        type: 'number'
      },
      { 
        value: new Date(2023,11,31).toISOString().split('T')[0],
        label: 'Fecha de Creación',
        type: 'date'
      },
      
     
    ])
    const isError = computed(() => {
      // console.log(dataRef.value[0]);
      return dataRef.value.some(item => item.hasError || item.modelValue === '')
    })
    const reFunction = (el, type, index) => {
      if (el) {
        dataRef.value.push(el);
      }

      return
    };
    const editmode = ref(!props.modoRegistro ? true : false);
    const dataRef = ref([]);

    const toggleEditmode = () => {
      console.log(props)
      editmode.value = !editmode.value
    };

    const updateClientData = () => {
      console.log('data updated:');
      toggleEditmode()
    };

    const postClient = () => {
      console.log('data updated:')
      clearClient()
    };

    const clearClient = () => {
      console.log('data updated:', data[0]);
      data.forEach( item => item.value = '')
    };

    const getRules = (item) => {
      switch(item.type) {
        case 'email':
          return [
            val => !!val || 'El campo es requerido',
            val => /.+@.+\..+/.test(val) || 'Ingrese un correo electrónico válido',
          ];
        case 'number':
          if (item.label === 'Edad') {
            return [
              val => !!val || 'El campo es requerido',
              val => Number(val) >= 18 || 'Debe ser mayor o igual a 18 años',
            ];
          } else if (item.label === 'Teléfono') {
            return [
              val => !!val || 'El campo es requerido',
              val => /^\d{10}$/.test(val) || 'Debe tener 10 dígitos',
            ];
          }
          // Otros tipos de validación aquí si es necesario
          return [];
        default:
          return [];
      }
    };

</script>

<style scoped>
.my-card{
  width: 100%;
  /* max-width: 250px; */
}
.my-card-state{
  width: 40%;
  /* max-width: 250px; */
}
.timeline{
  max-width: 60vw;
}
</style>
