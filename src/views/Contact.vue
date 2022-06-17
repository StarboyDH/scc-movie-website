<template>
  <main>
    <h1>تواصل معنا</h1>
    <p id="landing-phrase">
      يمكنك التواصل مع النادي السينمائي السوري مباشرةً أو مع القائمين على
      الموقع، ومشاركة رأيك واقترحاتك وإضافتك، من خلال إرسال رسالتك إلينا عبر ملئ
      النموذج أدناه:
    </p>
    <form action="https://formsubmit.co/oscar.dh.95@gmail.com" method="POST">
      <!-- We use https://formsubmit.co as a backend for this form -->

      <!-- First name field  -->
      <div class="form-block first-name-block">
        <label for="first-name">الاسم الأول</label>
        <input class="contact-input first-name" name="firstName" type="text" />
      </div>

      <!-- Lirst name field  -->
      <div class="form-block last-name-block">
        <label for="last-name">الاسم الثاني</label>
        <input class="contact-input last-name" name="lastName" type="text" />
      </div>

      <!-- Client's email field  -->
      <div class="form-block email-block">
        <label for="email">البريد الإلكتروني</label>
        <input class="contact-input email" name="email" type="email" />
      </div>

      <!-- Massage field -->
      <div class="form-block massage-block">
        <span>
          <label for="massage">رسالتك</label>
          <button class="align" type="button" @click="alignToRight()">
            <i class="fa-solid fa-align-right"></i>
          </button>
          <button class="align" type="button" @click="alignToLeft()">
            <i class="fa-solid fa-align-left"></i>
          </button>
        </span>
        <textarea
          class="contact-input massage"
          name="massage"
          ref="textarea"
        ></textarea>
      </div>

      <!-- formsubmit.co features -->
      <!-- Email subject -->
      <input
        type="hidden"
        name="_subject"
        value="New massage from SCC website!"
      />

      <!-- Autoresponse -->
      <input
        type="hidden"
        name="_autoresponse"
        value="شكراً لتواصلكم معنا.\n\nالنادي  السينمائي السوري"
      />

      <!-- Redirect page when form is submitted -->
      <input
        type="hidden"
        name="_next"
        value="https://yourdomain.co/thanks.html"
      />

      <!-- Email massage template -->
      <input type="hidden" name="_template" value="box" />

      <button class="submit-btn" type="submit">أرســـــل</button>
    </form>
    <p>
      إن اقتراحاتك ورأيك يهمنا من أجل تحسين النادي على وجه العموم وهذا الموقع
      على وجه الخصوص. كما نتمنى إغناء الاقتباسات لدينا من خلال إرسال اقتباساتك
      المفضلة لإضافتها وإثراء المحتوى بها.
      <br />
      <a href="/about#landing-phrase">
        <em> اضغط هنا لمعرفة هيكلية وتفاصيل الاقتباسات في موقعنا... </em>
      </a>
    </p>

    <h2>ابقى قريباً منا</h2>
    <p>
      لتتابع كل ما هو جديد في عالم السينما وتبقى على تواصل دائم مع النادي
      السينمائي السوري، يمكنك متابعتنا على منصات التواصل الاجتماعي التالية:
    </p>
    <div class="contact-links-container">
      <a class="contact-links" target="_blank" href="https://t.me/sybest1">
        <i class="fa-brands fa-telegram"></i>
      </a>
      <a
        class="contact-links"
        target="_blank"
        href="https://www.instagram.com/syriancinematicclub/"
      >
        <i class="fa-brands fa-instagram"></i>
      </a>
      <a
        class="contact-links"
        target="_blank"
        href="https://twitter.com/SYRCENIMACLUB?t=GmlNKAeTcIWG-8gTvTAVDw&s=08"
      >
        <i class="fa-brands fa-twitter"></i>
      </a>
      <a
        class="contact-links"
        target="_blank"
        href="https://m.facebook.com/SyrianCinematicClub/"
      >
        <i class="fa-brands fa-facebook"></i>
      </a>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    alignToRight() {
      this.$refs.textarea.style.direction = "rtl";
    },

    alignToLeft() {
      this.$refs.textarea.style.direction = "ltr";
    },
  },
};
</script>

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

h2 {
  margin-block: 3rem 1rem;
  direction: rtl;
  font-family: "Tajawal", sans-serif;
  color: hsl(46, 98%, 50%);
}

p {
  direction: rtl;
  font-family: "Tajawal", sans-serif;
  font-weight: 500;
  line-height: 1.6;
  color: #2c3e50;
}

.contact-links-container {
  margin-block: 2rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.contact-links {
  width: fit-content;
  justify-self: center;
  font-size: 5em;
  color: #2c3e50;
}

.contact-links:hover {
  color: hsl(15, 96%, 49%);
}

form {
  margin-block: 3rem;
  margin-inline: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: hsl(217, 0%, 98%, 0.9);
  border-radius: 8px;
  border: 2px solid hsla(15, 96%, 49%, 0.7);
  box-shadow: 1px 2px 0 2px hsla(15, 96%, 49%, 0.7);
}

.form-block {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.5rem;
}

.first-name-block {
  grid-area: firstName;
}

.last-name-block {
  grid-area: lastName;
}

.email-block {
  width: 100%;
  grid-area: email;
}

.massage-block {
  grid-area: massage;
}

.submit-btn {
  grid-area: button;
}

label {
  direction: rtl;
  font-family: "Tajawal", sans-serif;
  font-weight: 400;
  color: #2c3e50;
}

input,
textarea {
  padding: 0.5rem;
  font-family: "Tajawal", sans-serif;
  font-weight: 400;
  color: #2c3e50;
  border-radius: 4px;
  border: 1px solid hsla(15, 96%, 49%);
  resize: vertical;
}

input:focus,
textarea:focus {
  border-color: hsl(46, 98%, 50%);
  outline: 1px solid hsl(46, 98%, 50%);
}

span {
  display: flex;
  flex-direction: row-reverse;
}

.align {
  margin-inline: 0.8rem;
  padding: 0.5rem;
  display: inline-block;
  background-color: inherit;
  border: none;
  cursor: pointer;
}

.submit-btn {
  padding-block: 0.5rem;
  direction: rtl;
  font-family: "Tajawal", sans-serif;
  font-weight: 700;
  color: #2c3e50;
  background-color: inherit;
  border-radius: 30px;
  border: 2px solid hsl(15, 96%, 49%);
  transition: 0.3s ease;
  cursor: pointer;
}

@media (hover: hover) {
  .submit-btn:hover {
    background-color: hsl(15, 96%, 49%);
    color: #fafafa;
  }

  .submit-btn:focus {
    outline: 2px dotted hsl(39, 98%, 50%);
  }

  .align:focus {
    outline: 2px solid hsl(39, 98%, 50%);
  }
}

a {
  color: hsl(39, 98%, 50%);
}

@media screen and (min-width: 1024px) {
  main {
    padding: 2rem 12rem;
  }

  p {
    text-align: justify;
  }

  .contact-links-container {
    padding: 1rem 5rem;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }

  .contact-links {
    padding: 0.5rem;
    justify-self: center;
  }

  .contact-links:focus {
    outline: 3px dotted hsl(39, 98%, 50%);
  }

  form {
    width: 80%;
    display: grid;
    grid-template-areas:
      "lastName firstName"
      "email email"
      "massage massage"
      "button button";
    gap: 1rem;
  }
}

@media (prefers-color-scheme: dark) {
  form {
    background-color: hsl(210, 30%, 30%);
    border-color: hsl(46, 100%, 75%);
    box-shadow: 1px 2px 0 2px hsl(46, 100%, 75%);
  }

  p,
  label,
  .contact-links {
    color: hsl(0, 0%, 98%);
  }

  input,
  textarea {
    background-color: hsl(210, 29%, 24%);
    border-color: hsl(46, 100%, 75%);
    color: hsl(0, 0%, 98%);
  }

  .submit-btn {
    background-color: hsl(46, 100%, 75%);
    border-color: hsl(46, 100%, 75%);
    color: hsl(210, 29%, 24%);
  }

  .submit-btn:hover {
    background-color: hsl(210, 29%, 24%);
    color: hsl(0, 0%, 98%);
  }

  .contact-links:hover {
    color: hsl(46, 100%, 75%);
  }
}
</style>
