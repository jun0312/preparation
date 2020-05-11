<template>
  <v-dialog v-model="dialog" width="600">
    <template v-slot:activator="{ on }">
      <!-- class 控制字體色，color 控制背景色 -->
      <v-btn class="mr-8" color="primary" v-on="on">對話框</v-btn>
    </template>

    <v-card>
      <!-- class 控制字體色，style 控制背景色 -->
      <v-card-title :style="`background-color: ${ blockColor.color }`">預設內容外框樣式</v-card-title>
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
        <v-btn color="secondary" @click="dialog = false">取消</v-btn>
        <v-btn color="primary" @click="dialog = false">確定</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Dialog extends Vue {
  @Prop() blockColor!: object;

  dialog = false;
}
</script>
