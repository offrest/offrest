<script setup>
import { ref, watch, computed } from 'vue';
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

// 확인요청 :: 내용 추가
const formatText = (text) => {
  return text
    ? text
      .replace(/\nmo/g, '<br class="mo-only"/>') // 모바일만 줄바꿈
      .replace(/\nall/g, '<br />')
  : '';
};

const formattedText = computed(() => formatText(currentQuestion.value.text || ''));
const formattedOptionA = computed(() => formatText(currentQuestion.value.A || ''));
const formattedOptionB = computed(() => formatText(currentQuestion.value.B || ''));
// 확인요청 :: 내용 추가

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
        <div class="progress">
          <div
            v-for="(bar, index) in questions.length"
            :key="index"
            :class="['progress-bar', { active: index < currentQuestion.id }]"
          ></div>
        </div>

        <p class="title">
          <span>Q{{ currentQuestion.id }}.</span>
          <!-- 확인요청 ::
           {{ currentQuestion.text }} 삭제 후 v-html="formattedText" 추가
          -->
          <span v-html="formattedText"></span>
        </p>

        <div class="detail">
          <!-- 선택지 리스트 -->
          <div class="options">
            <!-- 확인요청 ::
             [currentQuestion.A, currentQuestion.B] 변경,
             {{ option }} 삭제 후 v-html="option" 추가
            -->
            <button
              v-for="(option, index) in [formattedOptionA, formattedOptionB]"
              :key="index"
              :class="['option-btn']"
              @click="selectOption(option)"
              v-html="option"
            >
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
