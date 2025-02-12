<script setup>
import { ref } from 'vue';
import { useRouter } from "vue-router";
import { onMounted } from 'vue';
import { Keyboard } from '@capacitor/keyboard';

onMounted(() => {
  const inputElement = document.querySelector('input');
  if (inputElement) {
    inputElement.focus();
  }
});
const router = useRouter();

const textInput = ref('');

const saveName = () => {
  if(textInput.value.trim() === '') {
    alert('이름을 입력해주세요!');
    return;
  }
  localStorage.setItem('userName', textInput.value);
  router.push("/page-3/1");
};

const handleEnter = () => {
  Keyboard.dismiss();
  textInput.value.blur(); 
  saveName(); 
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
              
            />
          </div>
          <span class="info">※ 필수로 기재해 주셔야 합니다.</span>

          <button
            type="submit"
            class="submit-btn rounded-btn"
            @click="saveName">등록하기
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>
