<script setup lang="ts">
import data from '@/assets/whatIDo.json'
import { useDisplay } from 'vuetify'
import EnvelopeComponent from './components/EnvelopeComponent.vue'
const { lgAndUp } = useDisplay()
</script>

<template>
  <v-parallax
    src="https://images.unsplash.com/photo-1527166420448-cf40007b5f38?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  >
    <v-container class="d-flex flex-column ga-10 mt-10">
      <section
        width="200"
        class="d-flex ga-10 d-flex align-center justify-center"
        :class="lgAndUp ? 'flex-row' : 'flex-column'"
      >
        <p class="d-flex flex-column">
          <span
            :class="lgAndUp ? 'text-h1' : 'text-h2'"
            class="text-center text-white poppins-extrabold mb-10"
            >Hello! My name is <span class="text-lime-darken-3">Alan</span></span
          >
          <span class="poppins-light">
            Lorem ipsum dolor sit amet consectetur. Augue vitae sit tempus quisque tincidunt nulla.
            Tincidunt id donec viverra tristique ullamcorper vel fermentum. Tempor ipsum tellus
            ornare lorem turpis ut elit non. Dignissim amet faucibus elementum eu nibh aliquam et.
            Vulputate nisl nibh vestibulum gravida.
          </span>
        </p>
      </section>
      <br />
      <section class="text-center">
        <p :class="lgAndUp ? 'text-h2' : 'text-h4'" class="poppins-bold">What I do</p>

        <section class="d-flex flex-wrap justify-center ga-2 mt-6">
          <v-card
            class="mx-auto d-flex align-center justify-center"
            width="200"
            height="200"
            v-for="item in data.whatIDo"
            :key="item"
          >
            <v-card-text class="text-center d-flex align-center justify-center poppins-light">
              {{ item }}
            </v-card-text>
          </v-card>
        </section>
      </section>
      <br />
      <section>
        <p :class="lgAndUp ? 'text-h2' : 'text-h4'" class="text-center poppins-bold">
          Recommendations
        </p>

        <section class="d-flex flex-row ga-6 flex-wrap mt-6">
          <EnvelopeComponent
            class="mx-auto"
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
</style>
