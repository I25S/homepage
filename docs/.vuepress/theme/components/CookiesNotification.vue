<template>
  <div class="container t-cookies-alert" :class="{'t-cookies-alert--shown': !privacySeen}">
    <div class="alert shadow-sm t-cookies-alert__block" role="alert">
      <b-row>
        <b-col cols="12" lg="10" class="mb-4 mb-lg-0">
          <p class="small mb-0 t-cookies-alert__text">
            <strong>Our privacy policy has been updated.</strong>
            <br />By continuing to use the site or closing this banner, you agree with our privacy policy and use of cookies.
            <br />To find out more and learn how to change your choices, please go to our
            <u>
              <router-link to="/meta/privacy-policy">privacy policy</router-link>
            </u>.
          </p>
        </b-col>
        <b-col cols="12" lg="2" class="text-right d-flex justify-content-end align-items-end">
          <div class>
            <button
              type="button"
              class="btn btn-sm btn-light"
              aria-label="Accept cookies policy and close"
              @click="accept()"
            >Accept</button>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      privacySeen: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.privacySeen = this.$privacy.isAccepted();
    }, 1000);
  },
  methods: {
    accept() {
      this.$privacy.accept();
      this.$analytics.init();
      this.privacySeen = true;
    }
  }
};
</script>
