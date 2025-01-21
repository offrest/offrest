<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from "vue-router";
import results from '@/data/results.json';

const router = useRouter();
const userName = localStorage.getItem('userName');

const result = ref(null);
const resultMapping = {
    'A-A-A-A-A-A-A-A': 1,
    'A-B-A-B-B-A-A-B': 2,
    // 나머지 경우들...
  };
  
// 결과를 계산하는 함수
const getResult  = () => {
  const savedAnswers = JSON.parse(localStorage.getItem('answers')) || [];
  const key = savedAnswers.join('-'); // 각 선택지를 결합해 키로 사용
  const resultNumber = resultMapping[key];
  result.value = results.find(r => r.number === resultNumber );
};

onMounted(() => {
  getResult();
});
const reset = () => {
  router.push("/");
};

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
          <p class="title title--mo">
            <span class="user-name">{{ userName }}</span> 님을 <br class="mo-only"/>
            위해 추천드립니다.
          </p>

          <div class="img-box">
            
            <!-- 유튜브 영상 iframe 삽입 -->
            <iframe
              :src="getEmbedUrl(result.youtube)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="YouTube video"
            ></iframe>

            <!-- QR 코드 삽입 -->
            <div class="img img-code">
              <img :src="result.qrcode" alt="QR 코드" />
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
