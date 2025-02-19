<script setup>
import { items } from "./movies.json";
import { ref } from "vue";
import Card from "@/components/Card.vue";

</script>

<template>
  
  <h1 class="text-4xl font-bold text-center my-8 text-white">Movies</h1>
  <div class="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-1">
    <Card class="w-full h-full"
      v-for="item in items"
      :key="item.id"
      :title="item.title"
      :description="item.description"
      :image="item.image"
      :rating="item.rating"
      :genres="item.genres"
      :name="item.name"
    />
  </div>
</template>
