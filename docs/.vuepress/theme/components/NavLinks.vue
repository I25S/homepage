<template>
  <b-nav>
    <li>
      <a href="#" class="nav-link">Consulting</a>
      <a href="#" class="nav-link">Engagement</a>
      <a href="#" class="nav-link">System Development</a>
      <a href="#" class="nav-link">About</a>
    </li>
    <!-- <li>
      <a class="nav-link nav-link--button" href="/i25swhitepaper.pdf" @click="$analytics.triggerEvent({category: 'Exploration', action: 'WhitepaperDownload', fields: {placement: 'Nav'}})" target="_blank" rel="noopener noreferrer nofollow">
       Whitepaper <OutboundLink />
      </a>
    </li>-->
  </b-nav>
</template>

<script>
import { isActive, resolveNavLinkItem } from "../util";
import NavLink from "./NavLink.vue";

export default {
  components: { NavLink },
  computed: {
    nav() {
      return this.$site.themeConfig.nav || [];
    },
    userLinks() {
      return (this.nav || []).map(link => {
        return Object.assign(resolveNavLinkItem(link), {
          items: (link.items || []).map(resolveNavLinkItem)
        });
      });
    }
  },
  methods: {
    isActive
  }
};
</script>

