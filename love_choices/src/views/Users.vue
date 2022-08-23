<template>
    <div v-if="users" class="container">
   
  <UserCard class="card"
   v-for="user in users" 
   :key="user.user_id" 
   :user="user"/>

  </div>
</template>
<script>
import UserCard from "../components/UserCard.vue";
export default {
  computed: {
    users() {
      return this.$store.state.users
    },
  },
  components: { UserCard },
  mounted() {
    this.$store.dispatch("getUsers");
  }
};
</script>
<style scoped>
.container{
  height: 86vh;
  display: flex;
  flex-direction: column;
}
</style>