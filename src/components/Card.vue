<template>
  <v-card width="600">
    <!-- class 控制字體色，style 控制背景色 -->
    <v-card-title class="white--text" style="backgroundColor: #62CFBB;">預設內容外框樣式</v-card-title>
    <div class="px-4 py-8">
      <span>
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Dolore ut officia aut error quaerat.
        Ab molestiae aperiam, perferendis impedit ullam sequi optio aliquid
        consectetur soluta placeat mollitia accusantium sit! Corporis?
      </span>
    </div>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="secondary">取消</v-btn>
      <v-btn color="primary">確定</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Card extends Vue {}
</script>
