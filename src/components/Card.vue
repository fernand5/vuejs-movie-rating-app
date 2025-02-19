<script setup>
import Chip from './Chip.vue'
defineProps({
    name: String,
    description: String,
    image: String,
    rating: Number,
    genres: Array,
});


/*
 This is an Icon that you can use to represent the stars if you like
 otherwise you could just use a simple ⭐️ emoji, or * character.
*/
import { StarIcon } from "@heroicons/vue/24/solid";
</script>
<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white justify-between h-screen">
        <img class="w-full" :src="image" :alt="name">
        <div class="px-6 py-4 flex flex-col h-screen justify-between">
            <div class="font-bold text-xl mb-2">{{ name }}</div>

            <Chip :genres="genres" class="mb-6"/>
            <p class="text-gray-700 text-base">
                {{ description }}
            </p>

            <p class="mb-auto h-10">
                Rating: ({{ rating }}/5)
                <StarIcon v-for="i in rating" :key="i" class="inline-block h-5 w-5 text-yellow-500" />
            </p>

        </div>
    </div>
</template>
