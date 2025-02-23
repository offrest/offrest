<script setup>
import { ref } from 'vue';
import { useRouter } from "vue-router";
import { onMounted, onBeforeUnmount  } from 'vue';

onMounted(() => {
  visualViewport && visualViewport.addEventListener("resize", resizeHandler);
});

const router = useRouter();
const textInput = ref('');

const resizeHeight = ref(0);

const handleFocus = () => {
  const inputElement = document.querySelector('input');
  if (inputElement) {
    inputElement.focus();
  }
};

const resizeHandler = () => {
  const visualHeight = visualViewport ? visualViewport.height : window.innerHeight;
  resizeHeight.value = window.innerHeight - visualHeight; // 키보드가 올라올 때 뷰포트 차이를 계산
};

onBeforeUnmount(() => {
  visualViewport && visualViewport.removeEventListener("resize", resizeHandler);
});

const saveName = () => {
  if(textInput.value.trim() === '') {
    alert('이름을 입력해주세요!');
    return;
  }
  localStorage.setItem('userName', textInput.value);
  router.push("/page-3/1");
};

const handleEnter = () => {
  saveName(); 
  textInput.value.blur(); 
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

      <div class="content">
        <p class="title title--l">
          <span>이름이나 닉네임을 적어주세요.</span>
        </p>

        <div class="detail">
          <div class="input-box">
            <input
              v-model="textInput"
              type="text"
              maxlength="10"
              placeholder="10자 이내로 입력해 주세요."
              @keyup.enter="handleEnter"
              @focus="handleFocus"
            />
          </div>
          <span class="info">※ 필수로 기재해 주셔야 합니다.</span>

          <div class="detail" :style="{ marginBottom: resizeHeight + 'px' }">
            <button
              type="submit"
              class="submit-btn rounded-btn"
              @click="saveName"
            >
              등록하기
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>
