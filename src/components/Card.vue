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
    <div class="max-w-md rounded overflow-hidden shadow-lg bg-white h-screen flex flex-col">
    <img class="w-full h-2/3 object-cover" :src="image" :alt="name">
    
    <div class="px-6 py-4 flex flex-col flex-grow">
        <div class="font-medium text-3xl mb-2">{{ name }}</div>

        <Chip :genres="genres" class="mb-6" />
        
        <p class="text-gray-700 text-base">
            {{ description }}
        </p>

        <!-- This pushes the rating to the bottom -->
        <div class="mt-auto">
            <p class="text-gray-700 text-base">
                Rating: ({{ rating }}/5)
                <StarIcon v-for="i in rating" :key="i" class="inline-block h-5 w-5 text-yellow-500" />
            </p>
        </div>
    </div>
</div>

</template>
