<template>
  <main>
    <div class="quote-container">
      <blockquote cite="#">{{ quote }}</blockquote>
      <cite>- {{ author }}</cite>
      <button class="quote-generator-btn" @click="getRandomQuote()">
        <i class="fa-solid fa-arrow-rotate-left"></i>
      </button>
    </div>
  </main>
</template>

<script>
import Data from "../quotes.json";

export default {
  name: "QuotesGenerator",
  props: {},

  emits: ["source", "type"],

  data() {
    return {
      data: Data,
      quote: null,
      author: null,
      source: null,
      type: null,
    };
  },

  methods: {
    getRandomQuote() {
      const len = this.data.length;
      const randomIndex = Math.floor(Math.random() * len);
      const obj = this.data[randomIndex];

      this.quote = obj.quote;
      this.author = obj.author;
      this.source = obj.source;
      this.type = obj.type;

      this.$emit("source", this.source);
      this.$emit("type", this.type);
    },
  },

  mounted() {
    this.getRandomQuote();
  },
};
</script>

<style scoped>
.quote-container {
  margin: 2rem 0 3rem 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  line-height: 1.6;
  background-color: hsl(217, 0%, 98%, 0.9);
  border: 2px solid hsl(136, 54%, 43%);
  border-radius: 8px;
  box-shadow: 0 3px 0 2px hsl(136, 54%, 43%);
}

blockquote {
  padding: 1rem;
}

cite {
  margin-right: 2rem;
  align-self: flex-end;
}

.quote-generator-btn {
  width: fit-content;
  aspect-ratio: 1;
  padding: 0.8rem;
  transform: translateY(80%);
  align-self: center;
  font-size: 1.1em;
  font-weight: 500;
  color: hsl(122, 79%, 47%);
  border: 3px solid hsl(122, 79%, 47%);
  border-radius: 50%;
  background-color: hsl(217, 0%, 98%);
  box-shadow: 0 0 4px hsl(122, 40%, 64%);
  transition: 0.2s ease;
  cursor: pointer;
}

@media (hover: hover) {
  .quote-generator-btn:hover {
    color: hsl(136, 54%, 43%);
    border-color: hsl(136, 54%, 43%);
  }

  .quote-generator-btn:focus {
    outline: 3px dotted hsl(122, 79%, 47%);
  }
}

@media (prefers-color-scheme: dark) {
  .quote-container {
    background-color: hsl(210, 30%, 30%);
    border-color: hsl(136, 100%, 72%);
    box-shadow: 0 3px 0 2px hsl(136, 100%, 72%);
  }

  .quote-generator-btn {
    background-color: hsl(209, 52%, 30%);
    border-color: hsl(136, 100%, 72%);
    color: hsl(136, 100%, 72%);
  }

  .quote-generator-btn:hover {
    border-color: hsl(136, 100%, 54%);
    color: hsl(136, 100%, 54%);
  }
}
</style>
