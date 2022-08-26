<template>
 <div class="container">
 <div class="row">
  <div class="col-1">
    <div class="navigation">
      <router-link to="#">Link-1</router-link>
      <router-link to="#">Link-2</router-link>
      <router-link to="#">Link-3</router-link>
      <router-link to="#">Link-4</router-link>
      <router-link to="#">Link-5</router-link>
      <router-link to="#">Link-6</router-link>
      <router-link to="#">Link-7</router-link>
      <router-link to="#">Link-8</router-link>
    </div>
  </div>
  <div class="col-2">
    <div class="about-me-1"></div>
    <div class="about-me-2"></div>
  </div>
 </div>
 </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container{
  height: 86.5vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 1px solid black;
}
.row{
  width: 80%;
  height: 90%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.col-1{
  width: 30%;
  height: 80%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}
.navigation{
   width: 90%;
  height: 92%;
  border: 1px solid black;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.navigation a{
  border: 1px solid black;
  border-radius: 6px;
  width: 90%;
  height: 10%;
}
.col-2{
  width: 60%;
  height: 80%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.about-me-1{
  width: 90%;
  height: 30%;
  border: 1px solid black;
}
.about-me-2{
  width: 90%;
  height: 60%;
  border: 1px solid black;
}
</style>