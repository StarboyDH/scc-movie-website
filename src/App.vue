<template>
  <div id="app" ref="body">
    <!-- HEADER -->
    <nav>
      <button class="nav-btn" ref="navBtn" @click="openNav()">
        <i class="fa-solid fa-bars"></i>
      </button>
      <router-link class="logo-link" to="/">
        <img class="logo" src="/logo.png" alt="logo" />
      </router-link>
      <ul ref="ul" @click="closeNav()">
        <li>
          <router-link class="nav-links" to="/">Home</router-link>
        </li>
        <li>
          <router-link class="nav-links" to="/about">About</router-link>
        </li>
        <li>
          <router-link class="nav-links" to="/contact">Contact</router-link>
        </li>
      </ul>
    </nav>
    <div class="gray-out-bg" ref="grayOut" @click="closeNav()"></div>

    <!-- MAIN CONTENT -->
    <router-view></router-view>

    <!-- FOOTER -->
    <footer ref="footer">
      <small> Syrian Cinematic Club </small>
      <small> All rights reserved &copy; 2022 </small>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      clicked: false,
    };
  },

  methods: {
    openNav() {
      const body = this.$refs.body;
      const navBtn = this.$refs.navBtn;
      const ul = this.$refs.ul;
      const grayOut = this.$refs.grayOut;
      const screenWidth = window.screen.width;

      if (screenWidth < 1024) {
        if (!this.clicked && screenWidth < 1024) {
          body.style.height = "100vh";
          body.style.overflow = "hidden";
          grayOut.style.display = "block";
          ul.style.animation = "grow 1s ease-out forwards";
          navBtn.innerHTML = "<i class='fa-solid fa-xmark'></i>";
          navBtn.style.backgroundColor = "#c43404";
        } else {
          body.style.height = "100vh";
          body.style.overflow = "visible";
          grayOut.style.display = "none";
          ul.style.animation = "shrink 1s ease-out forwards";
          navBtn.innerHTML = "<i class='fa-solid fa-bars'></i>";
          navBtn.style.backgroundColor = "hsl(15, 96%, 49%)";
        }

        this.clicked = !this.clicked;
      }
    },

    closeNav() {
      this.clicked = true;
      return this.openNav();
    },
  },

  created() {
    this.$watch(
      () => this.$route.path,
      (currentPath) => {
        const pagesWithStaticFooter = [
          "/",
          "/about",
          "/contact",
          "/privacy-policy",
        ];
        if (pagesWithStaticFooter.includes(currentPath)) {
          this.$refs.footer.style.position = "static";
        } else {
          this.$refs.footer.style.position = "absolute";
          this.$refs.footer.style.bottom = "0";
        }
      }
    );
  },
};
</script>

<style>
*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  font-family: "Josefin Sans", sans-serif;
  background-color: #fafafa;
  background-image: url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z' fill='%239C92AC' fill-opacity='0.09' fill-rule='evenodd'/%3E%3C/svg%3E");
}

::placeholder {
  font-family: "Josefin Sans", sans-serif;
  color: #2c3e50;
}

::selection {
  color: #fefefe;
  background-color: hsl(39, 98%, 50%);
}

nav {
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: hsl(15, 96%, 49%);
}

.nav-btn {
  background-color: inherit;
  border: none;
  font-size: 1.2em;
  color: #ffffff;
  cursor: pointer;
  z-index: 3;
}

.logo {
  max-width: 6rem;
}

ul {
  width: 0;
  height: 100vh;
  padding: 0rem;
  position: fixed;
  top: 0;
  right: 0;
  background-color: #fafafa;
  z-index: 3;
}

@keyframes grow {
  from {
    width: 0;
    padding: 0;
  }
  to {
    width: 40vw;
    padding: 1rem;
  }
}

@keyframes shrink {
  from {
    width: 40vw;
    padding: 1rem;
  }
  to {
    width: 0;
    padding: 0;
  }
}

ul li:first-child {
  margin-top: 5rem;
}

li {
  margin: 2rem 1rem;
  display: block;
  text-align: right;
}

.nav-links {
  padding: 0.5rem;
  text-decoration: none;
  color: #2c3e50;
  transition: 0.1s ease;
}

.gray-out-bg {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  background-color: hsl(0, 0%, 0%, 0.2);
  z-index: 2;
}

h1 {
  margin-left: 2rem;
  font-size: 2.5em;
  line-height: 1.2;
  color: hsl(46, 98%, 50%);
}

footer {
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  color: #2c3e50;
  background-color: hsl(46, 98%, 50%);
}

@media (hover: hover) {
  .nav-links:hover {
    color: hsl(39, 98%, 50%);
  }

  .nav-links:focus,
  .logo-link:focus {
    outline: 3px dotted hsl(39, 98%, 50%);
  }
}

@media screen and (min-width: 1024px) {
  body {
    font-size: 20px;
  }

  nav {
    padding: 0 11rem;
    display: flex;
    flex-direction: row-reverse;
  }

  .nav-btn {
    display: none;
  }

  .logo {
    max-width: 8rem;
  }

  ul {
    width: fit-content;
    height: fit-content;
    position: static;
    background-color: inherit;
  }

  ul li:first-child {
    margin-top: 0;
  }

  li {
    display: inline-block;
  }

  .nav-links {
    color: #fafafa;
    font-size: 1.2em;
  }

  .nav-links:hover {
    color: hsl(65, 100%, 50%);
  }

  h1 {
    margin: 0;
    padding: 0 12rem;
    font-size: 3.2em;
  }

  footer {
    padding: 1.5rem 12rem;
    font-size: 1.2em;
    flex-direction: row;
  }
}

@media (prefers-color-scheme: dark) {
  html,
  body {
    background-color: hsl(210, 29%, 24%);
  }
}

@media (prefers-color-scheme: dark) and (max-width: 1023px) {
  ul {
    background-color: hsl(210, 29%, 24%);
  }

  .nav-links {
    color: #fafafa;
  }
}
</style>
