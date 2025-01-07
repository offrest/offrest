<script setup>
  const userName = localStorage.getItem('userName'); 
  const firstOption = localStorage.getItem('firstOption');
  const secondOption = localStorage.getItem('secondOption');
  
</script>

<template>
 {{ userName }}님
 {{ firstOption }}랑
 {{ secondOption }} 선택 하셨네요
</template>

<style lang="scss" scoped>

</style>