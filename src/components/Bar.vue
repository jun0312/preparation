<template>
  <!-- dark 控制字體色，color 控制背景色 -->
  <v-app-bar color="primary">
    <v-img class="mr-4" src="@/assets/logo.png" max-width="48px"></v-img>
    <v-toolbar-title>智遇動物醫院</v-toolbar-title>
    <v-spacer></v-spacer>
    <span class="mr-4">胡譽懷醫師</span>
    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <span class="mx-4">12:32 PM</span>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Bar extends Vue {}
</script>
