<template>
  <main>
    <form>
      <input
        name="movie-title"
        type="text"
        v-model="movieTitle"
        placeholder="Type a movie title"
      />
    </form>
  </main>
</template>

<script>
import debounce from "lodash.debounce";

export default {
  name: "MovieSearch",
  props: {
    title: String,
    type: String,
    apiKey: String,
  },

  emits: ["movieId", "seriesId"],

  data() {
    return {
      data: null, // Movie data
      sData: null, // Series data

      id: null,

      movieTitle: null,
      seriesTitle: null,
    };
  },

  methods: {
    async getMovieId() {
      const res = await fetch(
        `https://imdb-api.com/en/API/SearchMovie/${this.apiKey}/${this.movieTitle}`
      );

      this.data = await res.json();
      this.id = this.data.results[0].id;

      this.$emit("movieId", this.id);
    },

    async getSeriesId() {
      const res = await fetch(
        `https://imdb-api.com/en/API/SearchSeries/${this.apiKey}/${this.seriesTitle}`
      );

      this.sData = await res.json();
      this.id = this.sData.results[0].id;

      this.$emit("seriesId", this.id);
    },

    chooseMovieOrSeries() {
      if (this.type === "movie") return this.getMovieId();
      return this.getSeriesId();
    },
  },

  mounted() {
    this.chooseMovieOrSeries();
  },

  watch: {
    movieTitle(...args) {
      this.debouncedWatch(...args);
    },

    title() {
      this.movieTitle = this.title;
      this.seriesTitle = this.title;
    },
  },

  created() {
    this.debouncedWatch = debounce((newValue, oldValue) => {
      this.movieTitle = newValue;
      this.seriesTitle = newValue;
      this.chooseMovieOrSeries();
    }, 800);
  },

  beforeUnmount() {
    this.debouncedWatch.cancel();
  },
};
</script>

<style scoped>
form {
  margin: 1rem 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: hsl(217, 0%, 98%, 0.9);
  border: 2px solid hsl(15, 96%, 49%);
  border-radius: 8px;
  box-shadow: 0 3px 0 -1px hsl(15, 96%, 49%);
}

label {
  width: 90%;
  margin: 0 1rem;
  text-align: left;
}

input {
  width: 90%;
  margin: 0 0.5rem;
  padding: 0.5rem 0.7rem;
  font-family: "Josefin Sans", sans-serif;
  color: #2c3e50;
  border: 1px solid hsl(15, 96%, 49%);
  border-radius: 30px;
  outline: 2px dotted hsl(217, 0%, 98%, 0.9);
  background-color: hsl(217, 0%, 98%, 0.9);
}

input:focus {
  outline: 2px dotted hsl(32, 98%, 50%);
  border: 1px solid hsl(32, 98%, 50%);
}

@media (prefers-color-scheme: dark) {
  form {
    background-color: hsl(210, 30%, 30%);
    border-color: hsl(15, 100%, 72%);
    box-shadow: 0 3px 0 -1px hsl(15, 100%, 72%);
  }

  input {
    outline-color: hsl(210, 30%, 30%);
    border-color: hsl(15, 100%, 72%);
  }
}
</style>
