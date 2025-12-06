<script setup>
import { computed, reactive, ref, defineAsyncComponent, useTemplateRef } from "vue";
import MovieItem from "./MovieItem.vue";
import { items } from "./movies.json";
import { onMounted } from "vue";

// async components
const AppModal = defineAsyncComponent(() => import("@/AppModal.vue"));
const MovieForm = defineAsyncComponent(() => import("@/MovieForm.vue"));

const formRef = useTemplateRef("movieForm");

const movies = ref(items);

function updateRating(movieIndex, rating) {
  movies.value[movieIndex].rating = rating;
}
function removeMovie(movieIndex) {
  movies.value = movies.value.filter((movie, index) => index !== movieIndex);
}
function editMovie(movieIndex) {
  const movie = movies.value[movieIndex];

  form.id = movie.id;
  form.name = movie.name;
  form.description = movie.description;
  form.image = movie.image;
  form.inTheaters = movie.inTheaters;
  form.genres = movie.genres;

  showForm();
}

const errors = reactive({
  name: null,
  description: null,
  image: null,
  inTheaters: null,
  genres: null,
});
const form = reactive({
  id: null,
  name: null,
  description: null,
  image: null,
  inTheaters: false,
  genres: null,
});
const validations = reactive({
  name: "required",
  genres: "required",
});

const genres = reactive([
  { text: "Drama", value: "Drama" },
  { text: "Crime", value: "Crime" },
  { text: "Action", value: "Action" },
  { text: "Comedy", value: "Comedy" },
]);

const validationRules = (rule) => {
  if (rule === "required") return /^ *$/;

  return null;
};

function validate() {
  let valid = true;
  clearErrors();
  for (const [field, rule] of Object.entries(validations)) {
    const validation = validationRules(rule);
    if (validation) {
      if (validation.test(form[field] || "")) {
        errors[field] = `${field} is ${rule}`;
        valid = false;
      }
    }
  }

  return valid;
}

function saveMovie() {
  if (form.id) {
    updateMovie();
  } else {
    addMovie();
  }
}

function updateMovie() {
  if (validate()) {
    const movie = {
      id: form.id,
      name: form.name,
      description: form.description,
      image: form.image,
      genres: form.genres,
      inTheaters: form.inTheaters,
      rating: 0,
    };

    movies.value = movies.value.map((m) => {
      if (m.id === movie.id) {
        movie.rating = m.rating;
        return movie;
      }
      return m;
    });

    hideForm();
  }
}

function addMovie() {
  if (validate()) {
    const movie = {
      id: Number(Date.now()),
      name: form.name,
      description: form.description,
      image: form.image,
      genres: form.genres,
      inTheaters: form.inTheaters,
      rating: 0,
    };
    movies.value.push(movie);
    hideForm();
  }
}

function cleanUpForm() {
  form.id = null;
  form.name = null;
  form.description = null;
  form.image = null;
  form.genres = null;
  form.inTheaters = false;
  clearErrors();
}

function clearErrors() {
  errors.name = null;
  errors.description = null;
  errors.image = null;
  errors.genres = null;
  errors.inTheaters = null;
}

const showMovieForm = ref(false);
function hideForm() {
  showMovieForm.value = false;
  cleanUpForm();
}

function showForm() {
  showMovieForm.value = true;
}

const averageRating = computed(() => {
  const avg = movies.value
    .map((movie) => parseInt(movie.rating || 0))
    .reduce((a, b) => a + b, 0);

  return Number(avg / movies.value.length).toFixed(1);
});

const totalMovies = computed(() => {
  return movies.value.length;
});

function removeRatings() {
  movies.value = movies.value.map((movie) => {
    movie.rating = 0;
    return movie;
  });
}
const focusFirstInputInChild = () => {
  if (formRef.value && formRef.value.firstInputRef) {
    formRef.value.firstInputRef.focus();
  }
};
onMounted(() => {
  focusFirstInputInChild();
});
</script>

<template>
  <div class="app">
    <transition name="modal-fade">
      <AppModal v-if="showMovieForm" :title="form.id ? 'Edit Movie' : 'Add Movie'" @close="hideForm">
        <MovieForm ref="showMovieForm" :modelValue="form" :errors="errors" :genres="genres" @update="saveMovie"
          @cancel="hideForm" />
      </AppModal>
    </transition>
    <div class="movie-actions-list-wrapper">
      <div class="movie-actions-list-info">
        <span>Total Movies: {{ totalMovies }}</span>
        <span> / </span>
        <span>Average Rating: {{ averageRating }}</span>
      </div>
      <div class="flex-spacer"></div>
      <div class="movie-actions-list-actions">
        <button class="self-end movie-actions-list-action-button button-primary justify-self-end"
          @click="removeRatings">
          Remove Ratings
        </button>
        <button class="movie-actions-list-action-button" :class="{
          'button-primary': !showMovieForm,
          'button-disabled': showMovieForm,
        }" @click="showForm" :disabled="showMovieForm">
          Add Movie
        </button>
      </div>
    </div>
    <div class="movie-list">
      <MovieItem v-for="(movie, index) in movies" :key="movie.id" :movie="movie"
        @update-rating="updateRating(index, $event)" @remove-movie="removeMovie(index)"
        @edit-movie="editMovie(index)" />
    </div>
  </div>
</template>
