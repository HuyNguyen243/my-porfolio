<template>
  <footer class="footer-container bg-secondary w-full h-[280px]">
    <Layout>
      <h2 class="footer-title text-text-primary text-xl cursor-pointer mb-16">Contact</h2>
      <p class="footer-content text-text-primary w-[70%]">
        I'm currently looking to join a cross-functional team that values improving people's lives
        through accessible design. or have a project in mind? Let's connect.
      </p>
      <p class="footer-contact text-text-primary mb-12">ibrhaimmemon930@gmail.com</p>
      <div class="footer-socials flex items-center">
        <img src="@/assets/images/socials/github.png" alt="" class="pr-2 cursor-pointer" />
        <img src="@/assets/images/socials/gmail.png" alt="" class="px-2 cursor-pointer" />
        <img src="@/assets/images/socials/facebook.png" alt="" class="px-2 cursor-pointer" />
      </div>
    </Layout>
  </footer>
</template>

<script setup lang="ts">
import Layout from './Layout.vue'
</script>

<style scoped></style>
