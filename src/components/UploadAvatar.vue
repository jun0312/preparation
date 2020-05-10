<template>
  <div class="vs-upload">
    <v-card elevation="8" width="300" height="300">
      <v-img :src="image" width="100%" height="100%"></v-img>
    </v-card>

    <!-- color 控制背景色 -->
    <v-avatar size="60" color="primary">
      <label style="cursor: pointer;">
        <!-- color 控制 icon 色 -->
        <v-icon color="white">fas fa-cloud-upload-alt</v-icon>
        <input class="d-none" type="file" @change="uploadImage" />
      </label>
    </v-avatar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class UploadAvatar extends Vue {
  image: any = '';

  uploadImage(target: any) {
    const { files }: any = (window as any).event.target;
    // const ft = files[0].type;
    // const fd = new FormData();
    const fr = new FileReader();
    fr.readAsDataURL(files[0]);
    fr.onload = () => {
      this.image = fr.result;
      // console.log(fr.result);
    };
  }
}
</script>

<style lang="scss" scoped>
.vs-upload {
  width: 300px;
  height: 300px;
  position: relative;

  .v-avatar {
    position: absolute;
    bottom: -20px;
    right: -20px;
  }
}
</style>
