<template>
  <main>
    <h1>سياسة الخصوصية</h1>
    <p>
      النادي السينمائي السوري يهتم جداً لأمر زواره وخصوصيتهم، حيث صمم هذا الموقع
      ليتناسب مع هذه الرؤية.
    </p>
    <p>
      لذا نود التنويه بأن هذا الموقع <strong>لا يحتوي أبداً</strong> على أي
      برامج وسيطة من شأنها جمع بيانات عن رواد الموقع أو أي شيء ينتهك خصوصيتهم.
    </p>
    <p>
      وفي حال كان هناك أي استفسارت حيال سياسة الخصوصية أو أي شكوة كانت، يرجى
      <a href="/contact#landing-phrase">مراسلتنا</a> لتوضيح الأمر أو تصحيحه.
    </p>
    <p>
      علماً بأن أي تغيير يطرأ على سياسة الخصوصية لدينا سوف نبلغ عنه عبر صفحاتنا
      على وسائل التواصل الاجتماعي وهذه الصفحة.
    </p>

    <div class="quick-links">
      <router-link to="/about">ما هو النادي السينمائي السوري</router-link>
      <br />
      <router-link to="/contact">تواصل معنا</router-link>
      <br />
      <router-link to="/">الصفحة الرئيسية</router-link>
    </div>
  </main>
</template>

<style scoped>
main {
  padding: 2rem;
}

h1 {
  margin-bottom: 2rem;
  padding: 0;
  direction: rtl;
  font-family: "Tajawal", sans-serif;
}

p {
  margin-block: 1rem;
  direction: rtl;
  font-family: "Tajawal", sans-serif;
  font-weight: 500;
  line-height: 1.6;
  color: #2c3e50;
}

a {
  color: hsl(39, 98%, 50%);
}

.quick-links {
  margin-block: 3rem 1rem;
  direction: rtl;
  font-family: "Tajawal", sans-serif;
}

@media screen and (min-width: 1024px) {
  main {
    padding: 2rem 12rem;
  }
}

@media screen and (min-height: 700px) {
  .quick-links {
    margin-block: 7rem 1rem;
  }
}

@media (prefers-color-scheme: dark) {
  p {
    color: hsl(0, 0%, 98%);
  }
}
</style>
