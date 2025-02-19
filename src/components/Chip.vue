<script setup>
defineProps({
	genres: Array,
});
</script>

<template>
	<div class="flex gap-2">
		<span v-for="genre in genres" :key="genre"
			class="inline-block rounded-full bg-indigo-700 py-0.5 px-2.5 border border-transparent text-sm text-white transition-all shadow-sm">{{
				genre }}</span>
	</div>
</template>
