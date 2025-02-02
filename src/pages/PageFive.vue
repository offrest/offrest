<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from "vue-router";
import results from '@/data/results.json';

const router = useRouter();
const userName = localStorage.getItem('userName');

const result = ref(null);
const blockCounts = ref({
  block1: { A: 0, B: 0 },
  block2: { A: 0, B: 0 },
  block3: { A: 0, B: 0 },
  block4: { A: 0, B: 0 },
});

const blockResults = {
  block1: { A: 'I', B: 'E' },
  block2: { A: 'N', B: 'S' },
  block3: { A: 'F', B: 'T' },
  block4: { A: 'P', B: 'J' },
};

const resultMapping = {
  'I-N-F-P': 1,
  'I-N-F-J': 2,
  'I-N-T-P': 3,
  'I-N-T-J': 4,
  'I-S-F-P': 5,
  'I-S-F-J': 6,
  'I-S-T-P': 7,
  'I-S-T-J': 8,
  'E-N-F-P': 9,
  'E-N-F-J': 10,
  'E-N-T-P': 11,
  'E-N-T-J': 12,
  'E-S-F-P': 13,
  'E-S-F-J': 14,
  'E-S-T-P': 15,
  'E-S-T-J': 16,
};

// 결과를 계산하는 함수
const getResult  = () => {
  const savedAnswers = JSON.parse(localStorage.getItem('answers')) || [];

  // 각 블록별로 A, B 카운트
  Object.keys(savedAnswers).forEach((block) => {
    const answers = savedAnswers[block];
    answers.forEach(answer => {
      if (answer === 'A') {
        blockCounts.value[block].A++;
      } else if (answer === 'B') {
        blockCounts.value[block].B++;
      }
    });
  });

  // 블록 결과 계산
  const finalResultKey = Object.keys(blockCounts.value).map(block => {
    const counts = blockCounts.value[block];
    return counts.A > counts.B ? blockResults[block].A : blockResults[block].B;
  }).join('-');

  const resultNumber = resultMapping[finalResultKey];
  result.value = results.find(r => r.number === resultNumber);

  if (result.value) {
    if (!result.value.qrcode.startsWith('/images/')) {
      result.value.qrcode = `/images/${result.value.qrcode}`;
    }
  }
  // console.log('******', result.value.qrcode ,'******');
  // console.log(finalResultKey);  // 최종 결과 키 확인용 로그
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
  } else if (url.startsWith('https://www.youtube.com/watch?v=')) {
    const videoId = new URL(url).searchParams.get('v');
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
            <span class="user-name">{{ userName }}</span> 님을 위해 추천드립니다.
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
