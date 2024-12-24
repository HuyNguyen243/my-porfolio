<template>
  <div class="header-main bg-primary w-full">
    <div
      class="header-container flex items-center justify-between max-w-max-size m-auto py-[10px] px-2 xl:px-0"
    >
      <img src="@/assets/images/header-logo.png" alt="header-logo" class="header-logo" />
      <ul class="header-nav-items items-center m-0 hidden md:flex">
        <li
          v-for="(item, index) in HEADER_SIDEBAR_ITEMS"
          :key="index"
          class="text-text-primary px-12 cursor-pointer hover:underline ease-linear transition delay-300 duration-300"
          :class="{ 'pr-0': index === HEADER_SIDEBAR_ITEMS.length - 1 }"
        >
          {{ item.name }}
        </li>
      </ul>
      <div class="header-sidebar-mobi block md:hidden">
        <Button class="bg-transparent border-none text-text-primary p-0" @click="handleOpenDrawer"
          ><Bars4Icon class="w-7 text-text-primary"></Bars4Icon
        ></Button>
        <DrawerView :open="openDrawer" @on-close="handleCloseDrawer">
          <ul class="header-nav-items m-0 flex flex-col">
            <li
              v-for="(item, index) in HEADER_SIDEBAR_ITEMS"
              :key="index"
              class="text-text-primary text-xl ml-4 mt-6 cursor-pointer"
              :class="{ 'pr-0': index === HEADER_SIDEBAR_ITEMS.length - 1 }"
            >
              {{ item.name }}
            </li>
          </ul>
        </DrawerView>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Bars4Icon } from '@heroicons/vue/16/solid'
import DrawerView from '../components/Drawer/DrawerView.vue'
import { HEADER_SIDEBAR_ITEMS } from '../constants/header'
import { Button } from 'ant-design-vue'
const openDrawer = ref(false)

const handleOpenDrawer = () => {
  openDrawer.value = true
}

const handleCloseDrawer = () => {
  openDrawer.value = false
}
</script>

<style lang="scss" scoped></style>
