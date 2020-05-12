<template>
  <v-dialog v-model="dialog" width="400">
    <template v-slot:activator="{ on }">
      <v-btn color="warning" v-on="on">切換指定區塊顏色</v-btn>
    </template>

    <v-card>
      <!-- class 控制字體色，style 控制背景色 -->
      <v-card-title
        :style="`background-color: ${ blockColor[2].color }`"
      >預設內容外框樣式</v-card-title>
      <div class="px-4 py-8">
        <v-select
          :items="blockColor"
          label="選擇切換顏色區域"
          solo
          v-model="selectBlock"
          item-text="zh"
          item-value="value"
        ></v-select>
        <v-color-picker
          class="mx-auto"
          v-model="selectColor"
          v-if="selectBlock !== ''"
        ></v-color-picker>
      </div>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="secondary" @click="dialog = false">取消</v-btn>
        <v-btn color="warning" @click="RESET_COLOR">重置</v-btn>
        <v-btn
          id="confirm"
          color="primary"
          @click="SWITCH_COLOR({ selectColor, selectBlock })"
        >確定</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { mapMutations } from 'vuex';

@Component({
  methods: {
    ...mapMutations('colors', ['SWITCH_COLOR', 'RESET_COLOR']),
  },
})
export default class Dialog extends Vue {
  @Prop() blockColor!: object;

  dialog = false;

  selectBlock = '';

  selectColor = '';
}
</script>
