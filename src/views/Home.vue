<template>
  <v-row no-gutters style="height: 100%;">
    <List />
    <div style="width: calc(100% - 280px);">
      <Bar />
      <div class="pa-8">
        <Card class="mb-8" />
        <UploadAvatar class="mb-8" />
        <v-btn class="white--text mr-8" color="primary">按鈕</v-btn>
        <Dialog />
      </div>
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
export default class Home extends Vue {}
</script>
