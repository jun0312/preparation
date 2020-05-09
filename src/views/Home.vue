<template>
  <v-row no-gutters style="height: 100%;">
    <List />
    <div style="width: calc(100% - 280px);">
      <Bar />
    </div>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import List from '@/components/List.vue';
import Bar from '@/components/Bar.vue';

@Component({
  components: {
    List,
    Bar,
  },
})
export default class Home extends Vue {}
</script>
