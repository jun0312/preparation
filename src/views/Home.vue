<template>
  <v-row no-gutters style="height: 100%;">
    <List :blockColor="blocks[1]" />
    <div style="width: calc(100% - 280px);">
      <Bar />
      <v-row no-gutters class="pa-8">
        <v-col>
          <Card class="mb-8" :blockColor="blocks[2]" />
          <UploadAvatar class="mb-12" />
          <v-btn class="mr-8" :color="blocks[3].color">按鈕</v-btn>
          <Dialog :blockColor="blocks[2]" />
          <v-btn
            id="switchTheme"
            class="mr-8"
            color="warning"
            @click="switchTheme"
          >切換主題色</v-btn>
          <ColorPicker :blockColor="blocks" />
        </v-col>
      </v-row>
    </div>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapGetters } from 'vuex';

import List from '@/components/List.vue';
import Bar from '@/components/Bar.vue';
import Card from '@/components/Card.vue';
import Dialog from '@/components/Dialog.vue';
import UploadAvatar from '@/components/UploadAvatar.vue';

import ColorPicker from '@/components/ColorPicker.vue';

@Component({
  computed: {
    ...mapGetters('colors', ['blocks']),
  },
  components: {
    List,
    Bar,
    Card,
    Dialog,
    UploadAvatar,
    ColorPicker,
  },
})
export default class Home extends Vue {
  switchTheme() {
    this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
  }
}
</script>
