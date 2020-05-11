<template>
  <!-- dark 控制字體色，color 控制背景色 -->
  <v-list
    flat
    width="280"
    height="100%"
    min-height="100vh"
    :color="blockColor.color"
  >
    <v-list-item-group v-model="item">
      <!-- color 控制激活的字體色 -->
      <v-list-item color="warning" v-for="(item, i) in items" :key="i">
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class List extends Vue {
  @Prop() blockColor!: object;

  item = 1;

  items = [
    { text: 'Real-Time', icon: 'mdi-clock' },
    { text: 'Audience', icon: 'mdi-account' },
    { text: 'Conversions', icon: 'mdi-flag' },
  ];
}
</script>
