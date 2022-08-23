<template>
      <div class="card">
      <div class="card-item"><img :src="user.image"/></div>
      <div class="card-item">Full Name:{{ user.full_name }}</div>
    </div>

</template>
<script>
export default {
  props: ["user"],
};
</script>
<style scoped>
.card{
   box-shadow: 5px 5px 5px 5px lightsalmon;
    border-radius: 10px;
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
.card-item{
  width: 90%;
}
.card-item img{
  width: 200px;
  height: 200px;
}

</style>