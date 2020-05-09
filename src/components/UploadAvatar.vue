<template>
  <div class="upload">
    <v-card class="img-content mb-4" elevation="6" width="300px" height="300px">
      <v-img :src="image" width="100%" height="100%"></v-img>
    </v-card>

    <!-- color 控制背景色ㄋ -->
    <v-avatar size="60" color="primary">
      <label style="cursor: pointer;">
        <!-- color 控制背景色ㄋ -->
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
.upload {
  width: 300px;
  height: 300px;
  position: relative;

  .img-content {
    border-radius: 16px;
  }

  .v-avatar {
    bottom: -20px;
    right: -20px;
    position: absolute;
  }
}
</style>
