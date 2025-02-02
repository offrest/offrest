<script setup>
import { useRouter } from "vue-router";
import { onMounted } from "vue";
const router = useRouter();

const onStart = () => {
  router.push("/page-2");
};

onMounted(() => {
  localStorage.clear();
});
</script>

<template>
  <section class="section">
    <div class="container">
      <header>
        <div class="logo">
          <img src="../assets/images/logo.png" alt="OFFREST" />
        </div>
      </header>

      <div class="content">
        <p class="title title--l">이--- 음악이 당신에게<br class="mo-only"/> 휴식이 되었으면 좋겠습니다.</p>

        <div class="obj">
          <img src="../assets/images/obj.jpg" alt="음표" />
        </div>

        <button
          type="button"
          class="start-btn"
          @click="onStart">START
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>
