<script setup>
import { ref, watch, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import questionData from '@/data/questions.json';

const route = useRoute();
const router = useRouter();

const questions = ref(questionData);
const currentQuestion = ref({});
const selectedAnswers = ref({
  block1: [], // 질문 1번
  block2: [], // 질문 2~4번
  block3: [], // 질문 5~7번
  block4: []  // 질문 8~10번
});

const updateQuestion = () => {
  const id = parseInt(route.params.id, 10);
  const question = questions.value.find(q => q.id === id);
  currentQuestion.value = question;
};

watch(() => route.params.id, updateQuestion, { immediate: true });

const formattedText = computed(() => formatText(currentQuestion.value.text || ''));

const selectOption = (option) => {
  const id = parseInt(route.params.id, 10);
  const question = questions.value.find(q => q.id === id);

  // 질문 id에 따라 해당 블록 구분
  let block;
  if (id === 1) block = 'block1'; // 1번 질문은 block1
  else if (id >= 2 && id <= 4) block = 'block2'; // 2~4번은 block2
  else if (id >= 5 && id <= 7) block = 'block3'; // 5~7번은 block3
  else if (id >= 8 && id <= 10) block = 'block4'; // 8~10번은 block4

  const selectedKey = question.A === option ? 'A' : 'B';
  selectedAnswers.value[block].push(selectedKey);
  localStorage.setItem('answers', JSON.stringify(selectedAnswers.value));

  const nextId = id + 1;
  if (questions.value.some(q => q.id === nextId)) {
    router.push(`/page-3/${nextId}`);
  } else {
    router.push('/page-4'); // 로딩페이지로 이동동
  }
};

// 모바일만 줄바꿈 적용
const formatText = (text) => {
  return text
    ? text
      .replace(/\nmo/g, '<br class="mo-only"/>')
  : '';
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
            v-for="(question, index) in questions"
            :key="index"
            :class="['progress-bar', { active: index < currentQuestion.id }]"
          ></div>
        </div>

        <p class="title">
          <span>Q{{ currentQuestion.id }}.</span>
          <span v-html="formattedText"></span>
        </p>

        <div class="detail">
          <!-- 선택지 리스트 -->
          <div class="options">
            <button
              v-for="(option, index) in [currentQuestion.A, currentQuestion.B]"
              :key="index"
              :class="['option-btn']"
              @click="selectOption(option)"
              v-html="formatText(option)"
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
  @import '@/assets/scss/_util.scss';

  .title {
    font-size: fv(48); // 폰트 크기
    line-height: lh(64, 48); // 행간
  }

  .option-btn {
    padding: fv(26) fv(24) fv(18); // 버튼 여백 값:상 좌우 하
    font-size: fv(36);
    line-height: lh(50, 36);
  }

  // 모바일 스타일
  @media screen and (max-width: 720px) {
    .title {
      font-size: fv(42);
      line-height: lh(58, 42);
    }
  }
</style>
