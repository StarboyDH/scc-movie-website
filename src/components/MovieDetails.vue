<template>
  <main>
    <div class="bg-img" ref="bgImg">
      <div class="main-info">
        <img class="poster" :src="image" alt="movie_poster" />
        <h3 class="movieTitle">{{ fullTitle }}</h3>
        <p class="duration">{{ runtimeStr }}</p>
        <p class="geners">{{ geners }}</p>
      </div>
    </div>

    <div class="basic-info">
      <p class="info directors">
        <span class="discreption">المخرج</span> {{ directors || "--" }}
      </p>
      <p class="info writers">
        <span class="discreption">الكاتب</span> {{ writers || "--" }}
      </p>
      <p class="info contentRating">
        <span class="discreption">العمر المناسب</span>
        {{ contentRating || "--" }}
      </p>
      <p class="info imDbRating">
        <span class="discreption">التقييم</span> {{ imDbRating || "--" }}
      </p>
    </div>

    <div class="additional-info">
      <p class="info releaseDate">
        <span class="discreption">تاريخ الاصدار</span> {{ releaseDate || "--" }}
      </p>
      <p class="info countries">
        <span class="discreption">بلد الإنتاج</span> {{ countries || "--" }}
      </p>
      <p class="info awards">
        <span class="discreption">الجوائز</span>{{ awards || "--" }}
      </p>
    </div>
  </main>
</template>

<script>
export default {
  name: "MovieDetails",
  props: {
    id: String,
    apiKey: String,
  },

  data() {
    return {
      data: null,

      fullTitle: null,
      year: null,
      geners: null,
      runtimeStr: null,
      releaseDate: null,
      contentRating: null,
      directors: null,
      writers: null,
      imDbRating: null,
      awards: null,
      countries: null,
      plot: null,
      image: null,
    };
  },

  methods: {
    async getInfo() {
      const res = await fetch(
        `https://imdb-api.com/en/API/Title/${this.apiKey}/${this.id}/Images,Ratings,`
      );

      this.data = await res.json();

      this.fullTitle = this.data.fullTitle;
      this.year = this.data.year;
      this.geners = this.data.geners;
      this.runtimeStr = this.data.runtimeStr;
      this.releaseDate = this.data.releaseDate;
      this.contentRating = this.data.contentRating;
      this.directors = this.data.directors;
      this.writers = this.data.writers;
      this.imDbRating = this.data.imDbRating;
      this.awards = this.data.awards;
      this.countries = this.data.countries;
      this.plot = this.data.plot;
      this.image = this.data.image;
      this.$refs.bgImg.style.backgroundImage = `url(${this.data.image})`;
    },
  },

  watch: {
    id() {
      this.getInfo();
    },
  },
};
</script>

<style scoped>
.bg-img {
  margin: 1rem 0rem;
  background-size: cover;
  border-radius: 8px;
}

.main-info {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  backdrop-filter: blur(6px);
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  font-size: 1.2em;
  color: hsl(0, 0%, 83%);
}

.basic-info,
.additional-info {
  margin: 2rem 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  background-color: hsl(217, 0%, 98%, 0.9);
  border: 2px solid hsl(343, 98%, 50%);
  border-radius: 8px;
  box-shadow: 0px 2px 0 2px hsl(343, 98%, 50%);
}

.additional-info {
  border: 2px solid hsl(46, 98%, 50%);
  box-shadow: 0px 2px 0 2px hsl(46, 98%, 50%);
}

.poster {
  max-width: 8rem;
  z-index: 1;
}

.info {
  margin: 0.4rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.discreption {
  direction: rtl;
  font-family: "Tajawal", sans-serif;
  color: hsl(343, 98%, 50%);
}

.additional-info span {
  color: hsl(46, 98%, 50%);
}

.awards {
  line-height: 1.6;
}

@media screen and (min-width: 1024px) {
  .bg-img {
    background-size: 100%;
  }

  .main-info {
    width: 30%;
  }
}

@media (prefers-color-scheme: dark) {
  .basic-info {
    background-color: hsl(210, 30%, 30%);
    border-color: hsl(343, 100%, 75%);
    box-shadow: 0px 2px 0 2px hsl(343, 100%, 75%);
  }

  .discreption {
    color: hsl(343, 100%, 75%);
  }

  .additional-info {
    background-color: hsl(210, 30%, 30%);
    border-color: hsl(46, 100%, 75%);
    box-shadow: 0px 2px 0 2px hsl(46, 100%, 75%);
  }

  .additional-info span {
    color: hsl(46, 100%, 75%);
  }
}
</style>
