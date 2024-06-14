<template>
  <q-dialog v-model="model" backdrop-filter="blur(4px) sepia(94%)" dark>
      <q-card class="card bg-blue-grey-10">
        <div class="text-h6">{{  props.title }}</div>

        <q-card-actions align="right">
          <q-btn 
            flat
            label="Aceptar"
            color="primary"
            @click="emitTrigger('confirm')"/>
          <q-btn flat label="Cancelar" color="primary" v-close-popup @click="emitTrigger('close')"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>

<script setup>
import {  computed, defineEmits, defineProps } from 'vue';

    const props = defineProps({
      title: {
        type: String,
        default: 'titulo'
      },
      value: {
        type: Boolean,
        default: false
      },

    })
    const emit = defineEmits(['close', 'confirm'])

    
    const model = computed(() => {
      return props.value
  
    })
    const emitTrigger = (emited) => {
      emit(`${emited}`)
    };


</script>

<style >
.card{
  width: 700px;
  max-width: 80vw;
  max-height: 600px;
}
</style>
