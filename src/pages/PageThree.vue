<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from "vue-router";

const router = useRouter();
const selectedOption = ref(null);

// 선택지를 고칠때는 나중에 여기만 고치면 됨
const options = ['행복', '슬픔', '평온', '불안'];

// 선택한 옵션을 로컬스토리지에 저장하는 함수 
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
  <!-- 시우야 클래스는 다 바꿔도 돼~~~~~~~~~~~ html도 가능 -->
  <div class="page">
    <p>오늘의 기분은 어떠신가요?</p>
    
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
</template>

<style lang="scss" scoped>

</style>