<script setup>
defineProps({
  modelValue: {
    type: Object,
    required: true
  },
  errors: {
    type: Object,
    required: true
  },
  genres: {
    type: Array,
    required: true
  }
});
const emit = defineEmits(['update', 'cancel']);


</script>

<template>
  <form @submit.prevent="emit('update', modelValue)">
    <div class="movie-form-input-wrapper">
      <label for="name">Name</label>
      <input type="text" name="name" v-model="modelValue.name" class="movie-form-input" />
      <span class="movie-form-error">{{ errors.name }}</span>
    </div>
    <div class="movie-form-input-wrapper">
      <label for="description">Description</label>
      <textarea type="text" name="description" v-model="modelValue.description" class="movie-form-textarea" />
      <span class="movie-form-error">{{ errors.description }}</span>
    </div>
    <div class="movie-form-input-wrapper">
      <label for="image">Image</label>
      <input type="text" name="image" v-model="modelValue.image" class="movie-form-input" />
      <span class="movie-form-error">{{ errors.image }}</span>
    </div>
    <div class="movie-form-input-wrapper">
      <label for="genre">Genres</label>
      <select name="genre" v-model="modelValue.genres" class="movie-form-input" multiple>
        <option v-for="option in genres" :key="option.value" :value="option.value">
          {{ option.text }}
        </option>
      </select>
      <span class="movie-form-error">
        {{ errors.genres }}
      </span>
    </div>
    <div class="movie-form-input-wrapper">
      <label for="genre" class="movie-form-checkbox-label">
        <input type="checkbox" v-model="modelValue.inTheaters" :true-value="true" :false-value="false"
          class="movie-form-checkbox" />
        <span>In theaters</span>
      </label>
      <span class="movie-form-error">
        {{ errors.inTheaters }}
      </span>
    </div>
    <div class="movie-form-actions-wrapper">
      <button type="button" class="button" @click="emit('cancel')">
        Cancel
      </button>

      <button type="submit" class="button-primary">
        <span v-if="modelValue.id">Update</span>
        <span v-else>Create</span>
      </button>
    </div>
  </form>
</template>
