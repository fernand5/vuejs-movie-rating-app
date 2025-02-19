<script setup>
import { items } from "./movies.json";
import { ref } from "vue";
import Card from "@/components/Card.vue";

</script>

<template>

  <h1 class="text-4xl font-bold text-center my-8 text-white">Movies</h1>
  <div class="flex justify-center items-center min-h-screen bg-gray-900">
    <div class="flex flex-wrap gap-4 justify-center">
      <Card class="w-full h-full" v-for="item in items" :key="item.id" :title="item.title"
        :description="item.description" :image="item.image" :rating="item.rating" :genres="item.genres"
        :name="item.name" />
    </div>
  </div>
</template>
