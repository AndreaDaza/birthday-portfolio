<script setup lang="ts">
import data from '@/assets/whatIDo.json'
import { ref } from 'vue'
import { useDisplay } from 'vuetify'
import EnvelopeComponent from './components/EnvelopeComponent.vue'
import FlipCardComponent from './components/FlipCardComponent.vue'
const { lgAndUp } = useDisplay()
const cardComponent = ref()

const displayHand = ref(true)
</script>

<template>
  <v-parallax
    src="https://images.unsplash.com/photo-1527166420448-cf40007b5f38?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  >
    <v-container class="d-flex flex-column ga-10 mt-10">
      <section
        width="200"
        class="d-flex ga-10 align-center justify-center"
        :class="lgAndUp ? 'flex-row' : 'flex-column'"
      >
        <p class="d-flex flex-column">
          <span
            :class="lgAndUp ? 'text-h1' : 'text-h2'"
            class="text-center text-white poppins-extrabold mb-10 text-shadow-3"
            >Hello! My name is <span style="color: #7f9e24">Alan</span></span
          >
          <span class="mx-auto poppins-light text-white text-shadow-1" style="max-width: 700px">
            I am a brave and determined person, always ready to fight for what I want and protect
            those I love. I fully dedicate myself to the important people in my life and enjoy
            making others laugh with my sense of humor. One of my passions is the art of making
            coffee; I love experimenting with different methods and perfecting each cup I prepare.
            Every day, I strive to be a better version of myself, learning and growing at every
            opportunity.
          </span>
        </p>
      </section>
      <br />
      <section class="text-center">
        <p :class="lgAndUp ? 'text-h2' : 'text-h3'" class="poppins-bold text-white text-shadow-3">
          What I do
        </p>

        <section class="d-flex flex-wrap justify-center ga-16 mt-6 pt-14">
          <FlipCardComponent
            v-for="item in data.whatIDo"
            :key="item.front"
            class="cursor-pointer glowing-box"
            ref="cardComponent"
          >
            <template #front>
              <v-card
                class="mx-auto d-flex align-center justify-center"
                width="200"
                height="200"
                @click="displayHand = false"
              >
                <v-card-text class="text-center d-flex align-center justify-center poppins-light">
                  <font-awesome-icon :icon="['fas', item.front]" size="lg" />
                  <font-awesome-icon v-if="displayHand" :icon="['fas', 'hand-pointer']" size="md" />
                </v-card-text>
              </v-card>
            </template>
            <template #back>
              <v-card class="mx-auto d-flex align-center justify-center" width="200" height="200">
                <v-card-text
                  class="text-center d-flex align-center justify-center poppins-semibold"
                >
                  {{ item.back }}
                </v-card-text>
              </v-card>
            </template>
          </FlipCardComponent>
        </section>
      </section>
      <br />
      <section>
        <p
          :class="lgAndUp ? 'text-h2' : 'text-h4'"
          class="text-center poppins-bold text-white text-shadow-3"
        >
          Recommendations
        </p>

        <section class="d-flex flex-row ga-6 flex-wrap mt-6">
          <EnvelopeComponent
            class="mx-auto pt-14"
            v-for="recommendation in data.recommendations"
            :key="recommendation.name"
            :content="recommendation"
          />
        </section>
      </section>
      <br />
      <section style="text-align: center">
        <div class="balloon"></div>
        <div class="balloon"></div>
        <div class="balloon"></div>
        <div class="balloon"></div>
        <div class="balloon"></div>
      </section>
    </v-container>
  </v-parallax>
</template>

<style scoped>
@media only screen and (max-width: 850px) {
  .v-responsive__sizer {
    padding-bottom: 250% !important;
  }
}
/* .v-responsive__sizer {
  padding-bottom: 250% !important;
} */

:deep(.v-card) {
  overflow-y: auto;
}

:deep(.v-img__img) {
  filter: blur(10px);
}

.flex-wrap {
  flex-wrap: wrap;
}

.text-shadow-3 {
  text-shadow: 3px 3px black;
}
.text-shadow-1 {
  text-shadow: 1px 1px black;
}

.fa-lg {
  font-size: 7rem;
  color: #4b6b3f;
}
.fa-md {
  font-size: 2rem;
  color: #4b6b3f3d;
  margin: 126px 150px 0 0;
  position: fixed;
}
</style>
