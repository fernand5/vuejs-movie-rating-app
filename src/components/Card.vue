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
    <div class="max-w-md rounded-xl overflow-hidden shadow-2xl bg-white flex flex-col">
    <img class="h-[520px] overflow-hidden w-full relative" :src="image" :alt="name">
    
    <div class="px-6 py-4 flex flex-col flex-grow">
        <div class="font-sm text-3xl mb-2">{{ name }}</div>

        <Chip :genres="genres" class="mb-6" />
        
        <p class="text-gray-700 text-sm mb-6">
            {{ description }}
        </p>

        <!-- This pushes the rating to the bottom -->
        <div class="mt-auto">
            <p class="text-gray-700 text-xs">
                Rating: ({{ rating }}/5)
                <StarIcon v-for="i in rating" :key="i" class="inline-block h-4 w-4 text-yellow-500" />
            </p>
        </div>
    </div>
</div>

</template>
