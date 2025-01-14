<script setup>
import qrCode from '@/assets/images/qrCode1.jpg'

import { useRouter } from "vue-router";

const router = useRouter();
const userName = localStorage.getItem('userName');
const firstOption = localStorage.getItem('firstOption');
const secondOption = localStorage.getItem('secondOption');

const reset = () => {
  router.push("/");
};

const resultsMap = {
  행복: {
    '경쾌하고\n 밝은 팝': {
      name: '플리1',
      youtube: 'https://youtu.be/DSwI1_8INBE?si=-ndQ9LwC9sFdYhwf',
      qrCode: qrCode,
    },
    '몽환적이고\n 편안한\n 어쿠스틱': {
      name: '플리2',
      youtube: 'https://youtu.be/4fj4kVl65K8?si=V3Aa07G45SwP9h0T',
      qrCode: qrCode,
    },
    '신나는\n 힙합': {
      name: '플리3',
      youtube: 'https://youtu.be/DSwI1_8INBE?si=-ndQ9LwC9sFdYhwf',
      qrCode: qrCode,
    },
    '따뜻하고\n 감성적인\n R&B': {
      name: '플리4',
      youtube: 'https://youtu.be/DSwI1_8INBE?si=-ndQ9LwC9sFdYhwf',
      qrCode: qrCode,
    },
  },
  슬픔: {
    '잔잔한\n 발라드': {
      name: '플리5',
      youtube: 'https://youtu.be/DSwI1_8INBE?si=-ndQ9LwC9sFdYhwf',
      qrCode: '/path/to/qrcode5.png',
    },
    '피아노 중심의\n 감성적인 곡': {
      name: '플리6',
      youtube: 'https://youtu.be/DSwI1_8INBE?si=-ndQ9LwC9sFdYhwf',
      qrCode: '/path/to/qrcode6.png',
    },
    '어두운\n 분위기의\n 알앤비 소울': {
      name: '플리7',
      youtube: 'https://youtu.be/DSwI1_8INBE?si=-ndQ9LwC9sFdYhwf',
      qrCode: '/path/to/qrcode7.png',
    },
    '슬픈 어쿠스틱,\n인디 음악': {
      name: '플리8',
      youtube: 'https://youtu.be/DSwI1_8INBE?si=-ndQ9LwC9sFdYhwf',
      qrCode: '/path/to/qrcode8.png',
    },
  },
  평온: {
    '잔잔한\n 클래식음악': {
      name: '플리9',
      youtube: 'https://youtu.be/DSwI1_8INBE?si=-ndQ9LwC9sFdYhwf',
      qrCode: '/path/to/qrcode9.png',
    },
    '따뜻하고\n 부드러운 재즈': {
      name: '플리10',
      youtube: 'https://youtu.be/DSwI1_8INBE?si=-ndQ9LwC9sFdYhwf',
      qrCode: '/path/to/qrcode10.png',
    },
    '편안한\n 어쿠스틱 팝': {
      name: '플리11',
      youtube: 'https://youtu.be/DSwI1_8INBE?si=-ndQ9LwC9sFdYhwf',
      qrCode: '/path/to/qrcode11.png',
    },
    '명상적인\n 앰비언트 음악': {
      name: '플리12',
      youtube: 'https://youtu.be/DSwI1_8INBE?si=-ndQ9LwC9sFdYhwf',
      qrCode: '/path/to/qrcode12.png',
    },
  },
  불안: {
    '차분한\n 일렉트로닉,\n앰비언트음악 ': {
      name: '플리13',
      youtube: 'https://youtu.be/DSwI1_8INBE?si=-ndQ9LwC9sFdYhwf',
      qrCode: '/path/to/qrcode13.png',
    },
    '명상적인\n 인스트루 멘탈': {
      name: '플리14',
      youtube: 'https://youtu.be/DSwI1_8INBE?si=-ndQ9LwC9sFdYhwf',
      qrCode: '/path/to/qrcode14.png',
    },
    '감성적인 록\n/인디 음악': {
      name: '플리15',
      youtube: 'https://youtu.be/DSwI1_8INBE?si=-ndQ9LwC9sFdYhwf',
      qrCode: '/path/to/qrcode15.png',
    },
    '편안한\n 어쿠스틱 팝': {
      name: '플리16',
      youtube: 'https://youtu.be/DSwI1_8INBE?si=-ndQ9LwC9sFdYhwf',
      qrCode: '/path/to/qrcode16.png',
    },
  },
};

const result = resultsMap[firstOption]?.[secondOption];
const getEmbedUrl = (url) => {
      if (url.startsWith('https://youtu.be/')) {
        const videoId = url.split('/').pop().split('?')[0];
        return `https://www.youtube.com/embed/${videoId}`;
      }
      return null;
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

      <div class="content content--pt">
        <div v-if="result">
          <p class="title title--row">
            <span class="user-name">{{ userName }}</span><br class="mo-only"/>
            님을 위해 추천드립니다.
          </p>

          <div class="img-box">

            <!-- 유튜브 영상 iframe 삽입 -->
            <div class="img img-thumb">
              <iframe
                :src="getEmbedUrl(result.youtube)"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                title="YouTube video"
              ></iframe>
            </div>

            <!-- QR 코드 삽입 -->
            <div class="img img-code">
              <img :src="result.qrCode" alt="QR 코드" />
            </div>
          </div>
        </div>
        <p v-else>결과 없음</p>

        <p class="desc">이 음악이 휴식이 되었으면 좋겠습니다.</p>

        <button
          type="button"
          class="reset-btn rounded-btn"
          @click="reset">처음으로
        </button>

      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>
