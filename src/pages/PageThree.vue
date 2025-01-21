<script setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router'; 
import questionData from '@/data/questions.json';

const route = useRoute(); 
const router = useRouter(); 

const questions = ref(questionData);
const currentQuestion = ref({});
const selectedAnswers = ref([]);

const updateQuestion = () => {
  const id = parseInt(route.params.id, 10); 
  const question = questions.value.find(q => q.id === id);
  currentQuestion.value = question;
};

watch(() => route.params.id, updateQuestion, { immediate: true });

const selectOption = (option) => {
  const id = parseInt(route.params.id, 10);
  const question = questions.value.find(q => q.id === id);

  const selectedKey = question.A === option ? 'A' : 'B';
  selectedAnswers.value[id - 1] = selectedKey;
  localStorage.setItem('answers', JSON.stringify(selectedAnswers.value));

  const nextId = id + 1;
  if (questions.value.some(q => q.id === nextId)) {
    router.push(`/page-3/${nextId}`);
  } else {
    router.push('/page-4'); // 로딩페이지로 이동동
  }
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

      <div class="content" v-if="currentQuestion.text">
        <p class="title">
          <span>Q{{ currentQuestion.id }}.</span>
          <span>{{ currentQuestion.text }}</span>
        </p>

        <div class="detail">
          <!-- 선택지 리스트 -->
          <div class="options">
            <button
              v-for="(option, index) in [currentQuestion.A, currentQuestion.B]"
              :key="index"
              :class="['option-btn']"
              @click="selectOption(option)"
            >
              {{ option }}
            </button>
          </div>
        </div>
      </div>
      <div v-else>질문을 찾을 수 없습니다.</div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>