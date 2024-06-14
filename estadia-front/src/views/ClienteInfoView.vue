<template>
  <q-layout class="mainContainer">
      <q-page-container>
        <q-page>
          <ClienteData :modo-registro="true" :data="data"/>
          <div class=" q-mb-xl q-py-md bg-grey-9 text-white row justify-center">
            <q-timeline dark color="secondary" side="right" class="timeline">
              <q-timeline-entry heading>Estado del cliente</q-timeline-entry>
            
              <q-timeline-entry
                v-for="(item) in events" :key="events.id"
                :title="item.title"
                :subtitle="item.date"
                :icon="item.icon"
                :color="item.color"
              >
                <div>
                  {{ item.descripcion }}
                </div>
              </q-timeline-entry>

              <q-btn
                  v-if="!addingState"
                  color= 'secondary'
                  label= 'Agregar estado'
                  @click="toggleAddingState"/>
            
            </q-timeline>
          </div>
          

          <div class="row justify-center q-mb-xl" v-if="addingState">
            <q-card class="my-card-state bg-blue-grey-9 text-white">
              <q-card-section>
                <div class="text-h6 q-mb-md">Nuevo estado</div>
                <div class=" col-11 col-md-5 q-ma-md">
                    <q-input
                      outlined
                      class="q-pb-md"
                      v-model="newState.titulo"
                      label="Titulo"
                      type="text"
                      dark
                      dense/>
                      <q-input
                      outlined
                      v-model="newState.descripcion"
                      label="Descripción"
                      type="textarea"
                      dark
                      dense/>
                  </div>
                  <q-card-actions class="row justify-center">
                    <q-btn 
                      flat
                      :disable="addingEmpty"
                      @click="toggleModal">Guardar</q-btn>
                      <q-btn 
                      flat
                      @click="toggleAddingState">Cancelar</q-btn>
                  </q-card-actions>
              </q-card-section>
            
            </q-card>
          </div>
          <Modal  :value="showModal"
                  @confirm="postState"
                  @close="toggleModal"
                  title="¿Estas seguro que deseas agregar este nuevo estado?"/>
          
        </q-page>
      </q-page-container>
    </q-layout>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import ClienteData from '../components/ClienteData.vue';
import Modal from '../components/Modal.vue';

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
    const events = [
      {
        title: 'Evento nuevo',
        date: new Date(2023,11,31).toISOString().split('T')[0],
        color: 'negative',
        icon: 'delete',
        descripcion: 'Lorem ipsum dotempoagna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        id: 1
      },
      {
        title: 'Evento nuevo 2',
        date: new Date(2023,11,31).toISOString().split('T')[0],
        color: 'positive',
        icon: 'delete',
        descripcion: 'Lorem ipsum dotempoagna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        id: 2
      },
      {
        title: 'Evento nuevo 3',
        date: new Date(2023,11,31).toISOString().split('T')[0],
        color: 'secondary',
        icon: 'delete',
        descripcion: 'Lorem ipsum dotempoagna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        id: 3
      }

    ]
    const addingState = ref(false);
    const showModal = ref(false);

    const newState = reactive({
      titulo: '',
      descripcion: ''
    });

    const toggleAddingState = () => {
      addingState.value = !addingState.value
      newState.titulo = ''
      newState.descripcion = ''
    };
    const toggleModal = () => {
      showModal.value = !showModal.value
    };

    const postState = () => {
      console.log('post state');
      toggleAddingState()
      toggleModal()
    };
    const addingEmpty = computed(() => {
      return newState.titulo === '' || newState.descripcion === ''  ? true : false
    })

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
  