<script setup>
import { items } from "./movies.json";
import { ref } from "vue";
import Card from "@/components/Card.vue";
let movies = ref(items);

</script>

<template>

  <h1 class="text-4xl font-bold text-center my-8 text-black">Movies</h1>
  <div class="flex justify-center items-center min-h-screen bg-white-500">
    <div class="flex flex-wrap gap-4 justify-center">
      <Card class="h-300" v-for="movie in movies" :key="movie.id" :title="movie.title"
        :description="movie.description" :image="movie.image" :rating="movie.rating" :genres="movie.genres"
        :name="movie.name" />
    </div>
  </div>
</template>
