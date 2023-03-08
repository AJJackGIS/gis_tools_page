<script setup>
import * as Cesium from 'cesium';
import { onMounted, ref } from 'vue';
console.log(Cesium.VERSION);
onMounted(() => {
  const viewer = new Cesium.Viewer("map");
});
</script>

<template>
  <div id="map"></div>
</template>

<style scoped lang="scss">

.bg {
  background-color: $background-color;
  width: 300px;
  height: 100px;
}
</style>