<script setup>
import { ref } from 'vue';

const userName = localStorage.getItem('userName'); 
const firstOption = localStorage.getItem('firstOption');
const secondOption = localStorage.getItem('secondOption');


// if (firstOption === '행복' && secondOption === '행복1') {
//   result.value = '플리1';
// }else if (firstOption === '슬픔' && secondOption === '행복1') {
//   result.value = '플리2';
// }
const resultsMap = {
  행복: {
    행복1: '플리1',
    행복2: '플리2',
    행복3: '플리3',
    행복4: '플리4',
  },
  슬픔: {
    슬픔1: '플리5',
    슬픔2: '플리6',
    슬픔3: '플리7',
    슬픔4: '플리8',
  },
  평온: {
    평온1: '플리9',
    평온2: '플리10',
    평온3: '플리11',
    평온4: '플리12',
  },
  불안: {
    불안1: '플리13',
    불안2: '플리14',
    불안3: '플리15',
    불안4: '플리16',
  },
};

// 결과 계산
const result = ref(getResult(firstOption, secondOption));

function getResult(firstOption, secondOption) {
  return resultsMap[firstOption]?.[secondOption] || '결과 없음';
}

</script>

<template>
 <div>
    <p>{{ userName }}님,</p>
    <p>{{ firstOption }}와 {{ secondOption }}를 선택하셨네요!</p>
    <p>결과: {{ result }}</p>
  </div>
</template>

<style lang="scss" scoped>

</style>