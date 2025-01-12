<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from "vue-router";

const router = useRouter();
const firstOption = localStorage.getItem('firstOption');
const selectedOption = ref(null);

const optionData = {
  행복: {
    question: '행복한 감정을 느끼고 계시다면\n 어떤 노래로 휴식하고 싶으신가요? ',
    options: ['경쾌하고\n 밝은 팝', '몽환적이고\n 편안한\n 어쿠스틱', '신나는\n 힙합', '따뜻하고\n 감성적인\n R&B'],
  },
  슬픔: {
    question: '슬픈 감정을 느끼고 계시다면\n 어떤 노래로 휴식하고 싶으신가요? ',
    options: ['잔잔한\n 발라드', '피아노 중심의\n 감성적인 곡', '어두운\n 분위기의\n 알앤비 소울', '슬픈 어쿠스틱,\n인디 음악'],
  },
  평온: {
    question: '평온한 감정을 느끼고 계시다면\n 어떤 노래로 휴식하고 싶으신가요?',
    options: ['잔잔한\n 클래식음악', '따뜻하고\n 부드러운 재즈', '편안한\n 어쿠스틱 팝', '명상적인\n 앰비언트 음악'],
  },
  불안: {
    question: '불안한 감정을 느끼고 계시다면\n 어떤 노래로 휴식하고 싶으신가요?',
    options: ['차분한\n 일렉트로닉,\n앰비언트음악 ', '명상적인\n 인스트루 멘탈', '성적인 록/\n인디 음악', '편안한\n 어쿠스틱 팝'],
  },
};

const text = ref(optionData[firstOption]?.question);
const options = optionData[firstOption]?.options;

const selectOption = (option) => {
  selectedOption.value = option;
  localStorage.setItem('secondOption', selectedOption.value);
  router.push("/page-5");
};

onMounted(() => {
  localStorage.removeItem('secondOption');
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
          <span>Q3.</span>
          <span>{{ text }}</span>
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
