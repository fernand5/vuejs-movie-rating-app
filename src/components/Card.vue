<script setup>
import Chip from './Chip.vue'
import { ref } from "vue";
const props = defineProps({
    name: String,
    description: String,
    image: String,
    rating: Number,
    genres: Array,
});

const rating = ref(props.rating);
const starEnabledClass = ref('text-yellow-500')
const starDisabledClass = ref('text-gray-500')
/*
 This is an Icon that you can use to represent the stars if you like
 otherwise you could just use a simple ⭐️ emoji, or * character.
*/
import { StarIcon } from "@heroicons/vue/24/solid";

function setRating(i){
    this.rating = i;
}

</script>
<template>
    <div class="max-w-md rounded-xl overflow-hidden shadow-2xl bg-white flex flex-col  relative">
        <div class="absolute text-black right-0 top-0">
            <StarIcon class="text-yellow-500 w-20 h-20" />
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span class="text-2xl font-bold">{{ rating ?? '-' }}</span>
            </div>
          </div>
        <img class="h-[520px] overflow-hidden w-full " :src="image" :alt="name">
    
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

                <StarIcon v-for="i in 5" :key="i" @click="setRating(i)"
                class="inline-block h-4 w-4"
                :class="[
                    i <= rating ? starEnabledClass : starDisabledClass, 
                    i === rating ? 'pointer-events-none' : ''
                    ]" />
            </p>
        </div>
    </div>
</div>

</template>
