<template>
  <div id="map"></div>
</template>

<script setup>
import { onMounted } from 'vue';
import mapboxgl, { Map } from "mapbox-gl";

function initMap() {
  mapboxgl.accessToken = "pk.eyJ1Ijoia2FmZWlhb2ppZTIwMTIiLCJhIjoiY2p2bHE0MG4xMGpwczQzbXVibTdmNzhyNyJ9.zbiS6fCZHtcIWEVLSOG1xw";
  (async () => {
    const map = new Map({
      attributionControl: false,
      logoPosition: undefined,
      antialias: true,
      container: "map",
      style: {
        version: 8,
        zoom: 13,
        center: [6.6301, 45.35625],
        pitch: 80,
        bearing: 160,
        sources: {
          source_bg: {
            type: "raster",
            tiles: ["https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"],
            tileSize: 256,
            minzoom: 1,
            maxzoom: 18
          }
        },
        layers: [
          {
            id: "layer_bg",
            type: "raster",
            source: "source_bg"
          }
        ],
        fog: {
          'range': [-1, 2],
          'horizon-blend': 0.3,
          'color': 'white',
          'high-color': '#add8e6',
          'space-color': '#d8f2ff',
          'star-intensity': 0.0
        }
      }
    });
    await map.once('style.load');
    map.addSource('mapbox-dem', {
      'type': 'raster-dem',
      'url': 'mapbox://mapbox.terrain-rgb',
      'tileSize': 512,
      'maxzoom': 14
    });
    map.setTerrain({
      'source': 'mapbox-dem',
      'exaggeration': 1.5
    });
  })();
}

onMounted(() => {
  initMap();
})
</script>

<style scoped lang="scss">
#map {
  @include full;
}
</style>