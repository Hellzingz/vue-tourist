<script setup>
import { ref, onMounted } from "vue";
import { getTrips } from "./api.js";

const trips = ref([]);

onMounted(async () => {
  trips.value = await getTrips(); 
});
</script>

<template>
  <main class="container">
    <h2>🌏 รายการทริปจาก Travel Explorer</h2>

    <ul v-if="trips.length">
      <li v-for="trip in trips" :key="trip.id">
        <strong>{{ trip.title }}</strong><br />
        <small>{{ trip.latitude }}, {{ trip.longitude }}</small>
      </li>
    </ul>

    <p v-else>กำลังโหลดข้อมูล...</p>
  </main>
</template>

<style>
.container {
  font-family: sans-serif;
  max-width: 700px;
  margin: 40px auto;
  text-align: center;
}
</style>