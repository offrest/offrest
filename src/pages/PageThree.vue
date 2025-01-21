<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from "vue-router";
import questionData from '@/data/questions.json';

const router = useRouter();
const selectedOption = ref(null);

const questions = ref(questionData);
const currentQuestion = ref(questions.value[0] || {});

const selectOption = (option) => {
  selectedOption.value = option;
  localStorage.setItem('selectedOption', selectedOption.value);
  router.push("/page-4");
};

onMounted(async() => {
  const response = await fetch('../data/questions.json');
  const data = await response.json();
  questions.value = data;

  console.log(questions.value);
  localStorage.removeItem('selectedOption');
  selectedOption.value = null;
  console.log(questionData);
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
          <span>{{ currentQuestion.value.text }}</span>
        </p>

        <div class="detail">
          <!-- 선택지 리스트 -->
          <div class="options">
            <button
              v-for="(option, index) in [currentQuestion.value.A, currentQuestion.value.B]"
              :key="index"
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
