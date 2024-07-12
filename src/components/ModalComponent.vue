<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  content: {
    type: Object,
    default: () => {}
  }
})
</script>

<template>
  <v-dialog activator="parent">
    <template v-slot:default="{ isActive }">
      <v-card class="mx-auto" width="400" height="300">
        <v-card-text class="pa-5 poppins-light"> {{ content.message }} </v-card-text>

        <v-card-actions>
          <v-btn class="ml-auto" text="Close" @click="isActive.value = false"></v-btn>
          <v-list-item class="w-100">
            <template v-slot:prepend>
              <font-awesome-icon class="mr-4 text-red" icon="fa-solid fa-heart"></font-awesome-icon>
            </template>

            <v-list-item-title class="poppins-light">{{ content.name }}</v-list-item-title>
            <v-list-item-subtitle class="poppins-light">{{
              content.relation
            }}</v-list-item-subtitle>
          </v-list-item>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<style scoped>
:deep(.v-overlay__content) {
  flex-direction: row;
}
</style>
