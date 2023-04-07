<template>
  <main>
    <div class="banner contactspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>
        <title-item :title="title" />
      </div>
    </div>
    <section class="contacts">
      <div class="container">
        <div class="row">
          <div class="col col-12 col-lg-6 offset-0 offset-lg-3">
            <div class="title mt-5">Tell us about your tastes</div>
            <img
              class="beanslogo mt-5"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />

            <form action="#" ref="form" class="mt-5" @submit.prevent="submit">
              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="name-input" class="mb-0">
                    Name
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    v-model="v$.name.$model"
                    type="text"
                    class="form-control"
                    id="name-input"
                  />
                  <span v-for="error in v$.name.$errors" :key="error.$uid">{{
                    error.$message
                  }}</span>
                </div>
              </div>

              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="email-input" class="mb-0">
                    E-mail
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    v-model="v$.email.$model"
                    type="email"
                    class="form-control"
                    id="email-input"
                  />
                  <span v-for="error in v$.email.$errors" :key="error.$uid">{{
                    error.$message
                  }}</span>
                </div>
              </div>

              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="phone-input" class="mb-0"> Phone </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    v-model="v$.phone.$model"
                    type="tel"
                    class="form-control"
                    id="phone-input"
                  />
                  <span v-for="error in v$.phone.$errors" :key="error.$uid">{{
                    error.$message
                  }}</span>
                </div>
              </div>

              <div class="form-group row textarea">
                <div class="col col-12 d-flex justify-content-start">
                  <label for="pmessage" class="mb-3 mt-3 text-center">
                    Your message
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12">
                  <textarea
                    @input="lengthTextSubstr()"
                    v-model="v$.text.$model"
                    class="form-control"
                    name="message"
                    id="message"
                    rows="5"
                    placeholder="Leave your comments here"
                  ></textarea>
                  <span v-for="error in v$.text.$errors" :key="error.$uid">{{
                    error.$message
                  }}</span>
                </div>
              </div>
<div class="form-group row">
  <div class="form-check mb-2">
    <input type="checkbox"  v-model="v$.privacy.$model"  name="privacy" id="Check" >
     <span v-for="error in v$.privacy.$errors" :key="error.$uid">{{
                    error.$message
                  }}</span>
</div>

                <div class="col col-12 col-sm-11 d-flex align-items-start">
                  <label for="Check" class="mb-0"> Отправляя данные из формы, вы соглашаетесь с  
                          <router-link :to="links.link">{{ links.text }}</router-link>    
      </label>
                </div>

</div>
                      



              <div class="row">
                <div class="col">
                  <button type="submit" class="btn btn-outline-dark send-btn">
                    Send us
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <footer-component />
  </main>
</template>
<script>

import TitleItem from "@/components/TitleItem.vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";
import { helpers } from "@vuelidate/validators";
import { minLengthCast } from "../validators/minLengthCast";
import {checked} from "../validators/checked"
import { lengthTextSubstr } from "../mixins/lengthTextSubstr";


export default {
  setup() {
    return { v$: useVuelidate() };
  },
  components: {  TitleItem },
  data() {
    return {
      title: "Contact us",
      name: "",
      email: "",
      phone: "",
      text: "",
      privacy:true
    };
  },
  validations() {
    return {
      name: {
        required,
        minLength: helpers.withMessage(
          "Минимальное значение 2 символа",
          minLengthCast
        ),
      }, // Matches this.firstName
      email: { required, email }, // Matches this.contact.email
      phone: {},
      text: {
        required,
        maxLength: helpers.withMessage(
          "Максимальное значение 20 символов",
          maxLength(20)
        ),
      },
      privacy: {required: helpers.withMessage(
          "Вы должны согласиться с офертой",
          checked) }
    };
  },
  computed: {links() {
          return this.$store.getters["getPrivacyLinks"];
    },},
  mixins: [lengthTextSubstr],
  methods: {
    async submit() {
      const isFormCorrect = await this.v$.$validate();

      if (!isFormCorrect) return;
      console.log({
        name: this.name,
        email: this.email,
        phone: this.phone,
        text: this.text,
      });
        this.$refs.form.reset();
    },
    
  },
};
</script>
