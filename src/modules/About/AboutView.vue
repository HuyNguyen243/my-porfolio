<template>
  <section :id="SECTIONS_ID.HOME" class="bg-secondary w-full">
    <Layout>
      <div class="about-container pt-8">
        <div class="flex">
          <div
            class="about-avatar bg-about-gradient w-[385px] h-[431px] flex items-center justify-center relative"
          >
            <img src="@/assets/images/human.png" alt="mine" class="absolute left-[25%] w-22" />
            <img src="@/assets/images/arrow.png" alt="mine" class="absolute right-0 top-3" />
          </div>
          <div class="about-me">
            <div class="mt-8">
              <span class="text-text-primary">Hello! I Am </span>
              <span class="text-text-secondary">Ibrahim Memon</span>
            </div>
            <div class="mt-16">
              <p class="text-text-primary underline">A Designer who</p>
              <div class="w-[250px]">
                <span class="text-text-primary text-4xl">Judges a book by its</span>
                <span
                  class="bg-about-ellipse w-full h-full bg-no-repeat bg-contain text-text-secondary text-4xl mx-2 bg-center p-4"
                  >cover</span
                >
                <span class="text-text-primary text-4xl">...</span>
              </div>
            </div>
            <p class="text-text-primary text-xs mt-2">
              Because if the cover does not impress you what else can?
            </p>
          </div>
        </div>
        <div class="about-description pl-3">
          <h1 class="text-text-primary text-4xl mb-3">I'm a Software Engineer.</h1>
          <p class="text-text-primary text-xs mb-6">
            Currently, I'm a Software Engineer at
            <span class="text-text-third">Vacs architure company</span>
          </p>
          <p class="text-text-primary mb-0 text-xs w-[60%]">
            A self-taught UI/UX designer, functioning in the industry for 3+ years now. I make
            meaningful and delightful digital products that create an equilibrium between user needs
            and business goals.
          </p>
        </div>
      </div>
    </Layout>
  </section>
</template>

<script setup lang="ts">
import { SECTIONS_ID } from '@/shares/constants/header'
import Layout from '@/shares/layouts/Layout.vue'
</script>

<style scoped></style>
