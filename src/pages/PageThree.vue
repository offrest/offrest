<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from "vue-router";

const router = useRouter();
const selectedOption = ref(null);

// 선택지를 고칠때는 나중에 여기만 고치면 됨
const options = ['행복', '슬픔', '평온', '불안'];

const selectOption = (option) => {
  selectedOption.value = option;
  localStorage.setItem('firstOption', selectedOption.value);
  router.push("/page-4");
};

onMounted(() => {
  localStorage.removeItem('firstOption');
  selectedOption.value = null;
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
        <p class="title">
          <span>Q2.</span>
          <span>오늘의 기분은 어떠신가요?</span>
        </p>

        <div class="detail">
          <!-- 선택지 리스트 -->
          <div class="options">
            <button
              v-for="option in options"
              :key="option"
              :class="['option-btn', { active: selectedOption === option }]"
              @click="selectOption(option)"
            >
              {{ option }}
            </button>
          </div>

          <div class="selected-option" v-if="selectedOption">
            <p>선택된 옵션: {{ selectedOption }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>
