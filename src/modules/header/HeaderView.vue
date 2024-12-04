<template>
  <header class="bg-header w-full h-[60px] flex justify-between items-center">
    <div class="header-container flex items-center justify-between w-full px-[200px]">
      <div class="header-ico">
        <img :src="imageLogo" alt="icon-header" />
      </div>
      <ul class="header-tabs-container flex">
        <li v-for="(item, index) in tabs" :key="index" class="text-text">{{ item.name }}</li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
const imageLogo = '/images/header-logo.png'
const tabs = [
  {
    name: 'Home',
  },
  {
    name: 'About',
  },
  {
    name: 'Lab',
  },
  {
    name: 'Contract',
  },
]
</script>
