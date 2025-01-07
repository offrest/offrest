<script setup>

</script>

<template>
  <section class="section">
    <div class="container">
      <header class="header">
          <div class="logo"><img src="../assets/images/logo.png" alt=""></div>
      </header>

      <div class="content">
          <p class="title">Q1. 이름이나 닉네임을 적어주세요.</p>

          <div class="input-box">
            <input type="text" v-model="textInput" maxlength="10" placeholder="10자 이내로 입력해 주세요." />
          </div>
          <span class="info active">※ 필수로 기재해 주셔야 합니다!</span>

          <button type="submit" class="submit-btn">등록하기</button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>
