<template>
  <div class="container1">
    <div class="container2">
      <profile></profile>
    </div>
    <div class="container3">
      3
    </div>
    <div class="container4">
      4
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
</script>

<style lang="scss" scoped>
  .container1{
    .container2{
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 25%;
    }
    .container3{
      flex: 1;
      height: 100%;
    }
    .container4{
      display: flex;
      align-items: center;
      width: 25%;
    }
  }
  @media screen and (max-width: 1024px) {
    .container1{
      .container2{
        display: none;
        width: 0%;
      }
      .container3{
        width: 75%;
        background-color: yellow;
      }
    }
    }
</style>