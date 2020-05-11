<template>
  <v-app
    :style="!this.$vuetify.theme.dark ? `backgroundColor: ${blocks[0].color}` : ''"
  >
    <router-view />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  computed: {
    ...mapGetters('colors', ['blocks']),
  },
});
</script>
