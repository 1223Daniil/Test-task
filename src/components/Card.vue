<script setup lang="ts">
const props = defineProps<{
  background: string;
  color: string[];
  contrast: string[];
}>();
</script>
<template>
  <div class="card" :style="{ backgroundColor: props.background }">
    <span
      class="contrast"
      :style="{ backgroundColor: props.contrast[1], color: props.contrast[2] }"
      >{{ props.contrast[0] }}</span
    >
    <span class="color" :style="{ color: props.color[1] }">{{
      props.color[0]
    }}</span>
  </div>
</template>
<style lang="scss">
.card {
  width: 100%;
  height: 150px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  .color {
    text-align: center;
    font-size: 16px;
  }
  .contrast {
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 12px;
    width: 32px;
    text-align: center;
  }
}
</style>
