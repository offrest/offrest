<script setup>
import { onMounted } from 'vue';
import { useRouter } from "vue-router";

const router = useRouter();
onMounted(() => {
  setTimeout(() => {
    router.push("/page-5");
  }, 2000); // 2000ms = 2초
});
</script>

<template>
  <section class="section">
    <div class="content">
      <div class='sound'>
        <div class='sound-wave'>
          <i class='bar'></i>
          <i class='bar'></i>
          <i class='bar'></i>
          <i class='bar'></i>
          <i class='bar'></i>
          <i class='bar'></i>
          <i class='bar'></i>
          <i class='bar'></i>
          <i class='bar'></i>
          <i class='bar'></i>
          <i class='bar'></i>
          <i class='bar'></i>
        </div>

        <div class="sound-logo">
          <img src="../assets/images/sound-logo.png" alt="OFFREST" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>
