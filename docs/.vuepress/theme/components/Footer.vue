<template>
  <footer class="footer">
    <b-container>
      <b-row class="mt-2 align-items-md-center">
        <b-col cols="12">
          
          <ul
            class="list-inline list-group-transparent list-group-flush list-group-borderless mb-0 text-muted"
          >
            <li class="list-inline-item pl-0 pr-4 my-1">
              <router-link to="/meta/privacy-policy">Privacy Policy</router-link>
            </li>
            <li class="list-inline-item pl-0 pr-4 my-1">
              <router-link to="/meta/cookie-policy">Cookie Policy</router-link>
            </li>
            <li class="list-inline-item pl-0 pr-4 my-1">
              <router-link to="/meta/terms-of-use">Terms of Use</router-link>
            </li>
          </ul>
          <ul
            class=" mt-4 list-inline list-group-transparent list-group-flush list-group-borderless mb-0 text-muted"
          >
            <li
              class="list-inline-item pl-0 pr-4 my-1"
            >© 2019 i25s ApS, Huginsvej 2B, 3400 Hillerød, Denmark, CVR: <a href="https://datacvr.virk.dk/data/visenhed?enhedstype=virksomhed&id=39630753&soeg=i25s&type=undefined&language=uk%E2%80%8B" target="_blank">39630753​</a>. All rights reserved.</li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
import NewsletterForm from "./NewsletterForm";
import SocialButtons from "./SocialButtons";

export default {
  components: {
    NewsletterForm,
    SocialButtons
  }
};
</script>
