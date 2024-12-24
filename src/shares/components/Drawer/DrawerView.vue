<template>
  <div>
    <DrawerView
      :title="title"
      placement="right"
      :open="open"
      @close="onClose"
      width="300"
      :body-style="{ padding: 0, background: '#2C1250' }"
      :closable="false"
    >
      <div class="drawer-header bg-primary py-4 border-b-[1px] border-solid border-gray-400">
        <Button type="text" @click="onClose">
          <XMarkIcon class="w-[20px] text-text-primary" />
        </Button>
      </div>

      <div class="bg-primary drawer-body">
        <slot></slot>
      </div>
    </DrawerView>
  </div>
</template>

<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/16/solid'
import { Button, Drawer as DrawerView } from 'ant-design-vue'
const { open, title = '' } = defineProps<{
  open: boolean
  title?: string
}>()

// type-based (TS)
const emit = defineEmits<{
  (e: 'onClose'): void
}>()

const onClose = () => {
  emit('onClose')
}
</script>

<style scoped>
.anticon-close {
  color: white;
  cursor: pointer;
}
</style>
