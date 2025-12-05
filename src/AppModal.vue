<script setup>
defineProps({
    title: {
        required: true,
        type: String
    }
});

const emit = defineEmits(['close']);


</script>

<template>
    <div class="modal-wrapper-inner">
        <div class="modal-header items-center text-xl font-bold mb-4">
            <span>{{ title }}</span>
            <button class="modal-close-button" @click="emit('close')">&times;</button>
        </div>
        
        <div class="modal-wrapper-inner">
            <slot />
        </div>
    </div>

</template>