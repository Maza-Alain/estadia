<template>
  <q-layout class="mainContainer">
      <q-page-container>
        <q-page >
          <ClienteData :modo-registro="false" :nuevo="true" :data="data"/>
     
        </q-page>
      </q-page-container>
    </q-layout>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import ClienteData from '../components/ClienteData.vue'; // Ajusta la ruta según tu estructura de archivos

    const data = reactive([
      { 
        value: '',
        label: 'nombre',
        type: 'text'
      },
      { 
        value: '',
        label: 'Apellido Materno',
        type: 'text'
      },
      { 
        value: '',
        label: 'Apellido Paterno',
        type: 'text'
      },
      { 
        value: 0,
        label: 'Edad',
        type: 'number'
      },
      { 
        value: '',
        label: 'Email',
        type: 'email'
      },
      { 
        value: '',
        label: 'Descripcion',
        type: 'textarea'
      },
      { 
        value: 0,
        label: 'Teléfono',
        type: 'number'
      },
      { 
        value: '',
        label: 'Fecha de Creación',
        type: 'date'
      },
      
     
    ])


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
  