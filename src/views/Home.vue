<template>
  <v-row no-gutters style="height: 100%;">
    <List />
    <div style="width: calc(100% - 280px);">
      <Bar />
      <v-row no-gutters class="pa-8">
        <v-col>
          <Card class="mb-8" />
          <UploadAvatar class="mb-8" />
          <v-btn class="white--text mr-8" color="primary">按鈕</v-btn>
          <Dialog />
          <v-btn
            id="switchTheme"
            class="white--text"
            color="warning"
            @click="switchTheme"
          >切換淺色與深色模式</v-btn>
        </v-col>
        <v-col>Right</v-col>
      </v-row>
    </div>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import List from '@/components/List.vue';
import Bar from '@/components/Bar.vue';
import Card from '@/components/Card.vue';
import Dialog from '@/components/Dialog.vue';
import UploadAvatar from '@/components/UploadAvatar.vue';

@Component({
  components: {
    List,
    Bar,
    Card,
    Dialog,
    UploadAvatar,
  },
})
export default class Home extends Vue {
  switchTheme() {
    this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
  }
}
</script>
