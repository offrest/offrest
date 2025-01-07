<script setup>
import { ref } from 'vue';

const firstOption = localStorage.getItem('firstOption');
let options = [];
let text = ref('');

if (firstOption === '행복') {
  options = ['행복1', '행복2', '행복3', '행복4'];
  text.value = '행복 선택한 사람의 질문';
}else if (firstOption === '슬픔') {
  options = ['슬픔1', '슬픔2', '슬픔3', '슬픔4'];
  text.value = '슬픔 선택한 사람의 질문';
}else if (firstOption === '평온') {
  options = ['평온1', '평온2', '평온3', '평온4'];
  text.value = '평온 선택한 사람의 질문';
}else {
  options = ['불안1', '불안2', '불안3', '불안4'];
  text.value = '불안 선택한 사람의 질문';
}

</script>

<template>
 4페이지
  <!-- 시우야 클래스는 다 바꿔도 돼~~~~~~~~~~~ html도 가능 -->
  <div class="page">
    <p>{{ text }}</p> <!-- 여기는 동적으로 함! 앞에서 뭘 골랐는지에 따라 이것도 달라질테니까 -->
    
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