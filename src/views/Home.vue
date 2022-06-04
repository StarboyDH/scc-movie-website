<template>
  <header>
    <h1>Syrian<br />Cinematic<br />Club</h1>
  </header>
  <main>
    <MovieSearch
      :type="userType"
      :title="userTitle"
      :apiKey="API_KEY"
      @movieId="(e) => (userId = e)"
      @seriesId="(e) => (userId = e)"
    />
    <QuotesGenerator
      @type="(e) => (userType = e)"
      @source="(e) => (userTitle = e)"
    />
    <MovieDetails :id="userId" :apiKey="API_KEY" />
  </main>
</template>

<script>
import MovieSearch from "../components/MovieSearch.vue";
import MovieDetails from "../components/MovieDetails.vue";
import QuotesGenerator from "../components/QuotesGenerator.vue";
import STORED_API_KEY from "../config.js";

export default {
  name: "Home",
  components: {
    MovieSearch,
    MovieDetails,
    QuotesGenerator,
  },

  data() {
    return {
      API_KEY: STORED_API_KEY.API_KEY,

      userType: null,
      userTitle: null,
      userId: null,
    };
  },
};
</script>

<style scoped>
main {
  margin: 3rem 0;
  padding: 0 1rem;
  text-align: center;
}

header {
  padding: 2rem 6rem 0 0;
  background-color: inherit;
}

h1 {
  margin-bottom: 2rem;
  padding: 0;
  text-align: left;
}

@media screen and (min-width: 1024px) {
  main {
    padding: 0 6rem;
  }

  header {
    padding: 2rem 6rem 3rem 6rem;
    background-image: url("/blog-cover.png");
    background-size: cover;
    background-position-y: 60%;
    background-repeat: repeat;
    box-shadow: 0 0 15px hsl(15, 96%, 49%);
  }

  h1 {
    padding: 0 6rem;
  }
}

@media (prefers-color-scheme: dark) and (min-width: 1024px) {
  header {
    box-shadow: 0 10px 15px -10px #ff8989;
  }
}
</style>
