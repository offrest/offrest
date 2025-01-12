<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const userName = localStorage.getItem('userName');
const firstOption = localStorage.getItem('firstOption');
const secondOption = localStorage.getItem('secondOption');

const reset = () => {
  router.push("/page-1");
};

const resultsMap = {
  행복: {
    '경쾌하고 밝은 팝': {
      name: '플리1',
      youtube: '/path/to/image.png',
      qrCode: '/path/to/qrcode1.png',
    },
    '몽환적이고 편안한 어쿠스틱': {
      name: '플리2',
      youtube: '/path/to/image.png',
      qrCode: '/path/to/qrcode2.png',
    },
    '신나는 힙합': {
      name: '플리3',
      youtube: '/path/to/image.png',
      qrCode: '/path/to/qrcode3.png',
    },
    '따뜻하고 감성적인 R&B': {
      name: '플리4',
      youtube: '/path/to/image.png',
      qrCode: '/path/to/qrcode4.png',
    },
  },
  슬픔: {
    '잔잔한 발라드': {
      name: '플리5',
      youtube: '/path/to/image.png',
      qrCode: '/path/to/qrcode5.png',
    },
    '피아노 중심의 감성적인 곡': {
      name: '플리6',
      youtube: '/path/to/image.png',
      qrCode: '/path/to/qrcode6.png',
    },
    '어두운 분위기의 알앤비 소울': {
      name: '플리7',
      youtube: '/path/to/image.png',
      qrCode: '/path/to/qrcode7.png',
    },
    '슬픈 어쿠스틱,인디 음악': {
      name: '플리8',
      youtube: '/path/to/image.png',
      qrCode: '/path/to/qrcode8.png',
    },
  },
  평온: {
    '잔잔한 클래식음악': {
      name: '플리9',
      youtube: '/path/to/image.png',
      qrCode: '/path/to/qrcode9.png',
    },
    '따뜻하고 부드러운 재즈': {
      name: '플리10',
      youtube: '/path/to/image.png',
      qrCode: '/path/to/qrcode10.png',
    },
    '편안한 어쿠스틱 팝': {
      name: '플리11',
      youtube: '/path/to/image.png',
      qrCode: '/path/to/qrcode11.png',
    },
    '명상적인 앰비언트 음악': {
      name: '플리12',
      youtube: '/path/to/image.png',
      qrCode: '/path/to/qrcode12.png',
    },
  },
  불안: {
    '차분한 일렉트로닉,앰비언트음악': {
      name: '플리13',
      youtube: '/path/to/image.png',
      qrCode: '/path/to/qrcode13.png',
    },
    '명상적인 인스트루 멘탈': {
      name: '플리14',
      youtube: '/path/to/image.png',
      qrCode: '/path/to/qrcode14.png',
    },
    '성적인 록/인디 음악': {
      name: '플리15',
      youtube: '/path/to/image.png',
      qrCode: '/path/to/qrcode15.png',
    },
    '편안한 어쿠스틱 팝': {
      name: '플리16',
      youtube: '/path/to/image.png',
      qrCode: '/path/to/qrcode16.png',
    },
  },
};

const result = resultsMap[firstOption]?.[secondOption];
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
          <p class="title title--mo">
            <span class="user-name">{{ userName }}</span> 님을 <br class="mo-only"/>
            위해 추천드립니다.
          </p>

          <div class="img-box">
            <!-- 유튜브 영상 iframe 삽입 -->
            <div class="img img-thumb">
              <img :src="result.qrCode" alt="썸네일" />
            </div>

            <!-- QR 코드 삽입 -->
            <div class="img img-code">
              <img :src="result.qrCode" alt="QR 코드" />
            </div>
          </div>
        </div>
        <p v-else>결과 없음</p>

        <p class="desc">이 음악이 위로가 되었으면 좋겠습니다.</p>

        <button
          type="button"
          class="reset-btn rounded-btn start-btn"
          @click="reset">처음으로
        </button>

      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>
