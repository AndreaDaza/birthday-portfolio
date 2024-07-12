<script setup lang="ts">
import { defineProps, ref } from 'vue'
import ModalComponent from './ModalComponent.vue'

defineProps({
  content: {
    type: Object,
    default: () => {}
  }
})

const isActive = ref(false)
</script>

<template>
  <body>
    <div class="wrapper">
      <div class="lid one"></div>
      <div class="lid two"></div>
      <div class="envelope"></div>
      <div class="letter" @click="isActive = true">
        <ModalComponent :content />
        <p class="poppins-light"><span class="poppins-bold">From:</span> {{ content.name }}</p>
      </div>
    </div>
  </body>
</template>
