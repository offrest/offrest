<script setup>
import { ref } from 'vue';
import { useRouter } from "vue-router";

const router = useRouter();

const firstOption = localStorage.getItem('firstOption');
const selectedOption = ref(null);

const optionData = {
  행복: {
    question: '행복 선택한 사람의 질문',
    options: ['행복1', '행복2', '행복3', '행복4'],
  },
  슬픔: {
    question: '슬픔 선택한 사람의 질문',
    options: ['슬픔1', '슬픔2', '슬픔3', '슬픔4'],
  },
  평온: {
    question: '평온 선택한 사람의 질문',
    options: ['평온1', '평온2', '평온3', '평온4'],
  },
  불안: {
    question: '불안 선택한 사람의 질문',
    options: ['불안1', '불안2', '불안3', '불안4'],
  },
};

const text = ref(optionData[firstOption]?.question || '질문 없음');
const options = optionData[firstOption]?.options || [];

const selectOption = (option) => {
  selectedOption.value = option;
  localStorage.setItem('secondOption', selectedOption.value);
  router.push("/page-6");
};
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
        <p class="title">Q3. {{ text }}</p>

        <div class="detail">
          <!-- 선택지 리스트 -->
          <div class="options">
            <button
              v-for="option in options"
              :key="option"
              :class="['option-btn', { active: selectedOption === option }]"
              @click="selectOption(option)"
            >
              {{ option }}&nbsp;&nbsp;
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
