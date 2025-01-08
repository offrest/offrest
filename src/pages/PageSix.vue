<script setup>

const userName = localStorage.getItem('userName'); 
const firstOption = localStorage.getItem('firstOption');
const secondOption = localStorage.getItem('secondOption');

const resultsMap = {
  행복: {
    행복1: {
      name: '플리1',
      youtube: 'https://youtube.com/example1',
      qrCode: '/path/to/qrcode1.png',
    },
    행복2: {
      name: '플리2',
      youtube: 'https://youtube.com/example2',
      qrCode: '/path/to/qrcode2.png',
    },
    행복3: {
      name: '플리3',
      youtube: 'https://youtube.com/example3',
      qrCode: '/path/to/qrcode3.png',
    },
    행복4: {
      name: '플리4',
      youtube: 'https://youtube.com/example4',
      qrCode: '/path/to/qrcode4.png',
    },
  },
  슬픔: {
    슬픔1: {
      name: '플리5',
      youtube: 'https://youtube.com/example5',
      qrCode: '/path/to/qrcode5.png',
    },
    슬픔2: {
      name: '플리6',
      youtube: 'https://youtube.com/example6',
      qrCode: '/path/to/qrcode6.png',
    },
    슬픔3: {
      name: '플리7',
      youtube: 'https://youtube.com/example7',
      qrCode: '/path/to/qrcode7.png',
    },
    슬픔4: {
      name: '플리8',
      youtube: 'https://youtube.com/example8',
      qrCode: '/path/to/qrcode8.png',
    },
  },
  평온: {
    평온1: {
      name: '플리9',
      youtube: 'https://youtube.com/example9',
      qrCode: '/path/to/qrcode9.png',
    },
    평온2: {
      name: '플리10',
      youtube: 'https://youtube.com/example10',
      qrCode: '/path/to/qrcode10.png',
    },
    평온3: {
      name: '플리11',
      youtube: 'https://youtube.com/example11',
      qrCode: '/path/to/qrcode11.png',
    },
    평온4: {
      name: '플리12',
      youtube: 'https://youtube.com/example12',
      qrCode: '/path/to/qrcode12.png',
    },
  },
  불안: {
    불안1: {
      name: '플리13',
      youtube: 'https://youtube.com/example13',
      qrCode: '/path/to/qrcode13.png',
    },
    불안2: {
      name: '플리14',
      youtube: 'https://youtube.com/example14',
      qrCode: '/path/to/qrcode14.png',
    },
    불안3: {
      name: '플리15',
      youtube: 'https://youtube.com/example15',
      qrCode: '/path/to/qrcode15.png',
    },
    불안4: {
      name: '플리16',
      youtube: 'https://youtube.com/example16',
      qrCode: '/path/to/qrcode16.png',
    },
  },
};

const result = resultsMap[firstOption]?.[secondOption];

</script>

<template>
  <div v-if="result">
    <p>{{  userName }}님</p>
    <p>{{  firstOption }}과</p>
    <p>{{  secondOption }}을 택하셨습니다.</p>
    <p>선택한 플리: {{ result.name }}</p>
    <p><a :href="result.youtube" target="_blank">유튜브 링크</a></p>
    <img :src="result.qrCode" alt="QR 코드" />
  </div>
  <p v-else>결과 없음</p>
</template>

<style lang="scss" scoped>

</style>