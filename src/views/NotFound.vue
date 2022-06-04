<template>
  <main>
    <div class="sad-face">
      <i class="fa-solid fa-face-sad-cry"></i>
    </div>
    <h2>هذه الصفحة غير متوفرة أو غير موجودة</h2>
    <router-link class="link-404" to="/">
      <i class="fa-solid fa-angles-left"></i>
      اضغط هنا للانتقال إلى الصفحة الرئيسية
    </router-link>
  </main>
</template>

<style scoped>
.sad-face {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  font-size: 8em;
  color: hsl(46, 98%, 50%);
}

h2 {
  margin: 3rem;
  direction: rtl;
  font-family: "Tajawal", sans-serif;
  text-align: center;
  color: #2c3e50;
}

.link-404 {
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-family: "Tajawal", sans-serif;
  text-decoration: none;
  color: #2c3e50;
  transition: 0.2s ease;
}

.link-404:hover {
  color: hsl(15, 96%, 49%);
  gap: 0.8rem;
}

@media (prefers-color-scheme: dark) {
  h2,
  .link-404 {
    color: #fafafa;
  }

  .link-404:hover {
    color: hsl(15, 100%, 72%);
  }
}
</style>
