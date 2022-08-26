<template>
  <div class="container">
    <form @submit.prevent="login">
      <h3>Log in to Love Choices</h3>
      <input class="form-input" type="text" name="email" required v-model="email" placeholder="Email:" />
      <input class="form-input" type="password" name="password" required v-model="password" placeholder="Password:" />
      <input class="form-btn" type="submit" value="Login" />
      <hr>
      <div class="form-extra">
        <router-link to="/register"><p>Register</p></router-link>
        <router-link to="/reset"><p>Reset-Psw</p></router-link>
      </div>
      <!-- <div class="welcome" v-if="user">Welcome {{ user.full_name }}</div> -->
    </form>
  </div>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
  },
};

</script>
<style scoped>
.container{
  height: 86.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
form{
  box-shadow: 5px 5px 5px 5px lightsalmon;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20vw;
  height: 50vh;
  gap: 10px;
  background: salmon;
}
.form-input{
  width: 200px;
  border: none;
  border-radius: 5px;
  height: 30px;
}
.form-btn{
  width: 208px;
  border: none;
  border-radius: 5px;
  height: 30px;
}
.form-extra{
  display: flex;
  gap: 10px;
}
.form-extra p {
  width: 100px;
  border: none;
  border-radius: 5px;
  height: 30px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-extra a{
  text-decoration: none;
  color: black;
}
h3{
  color: white;
  font-weight: bold;
  font-size: 1.4rem;
}
hr{
  width: 90%; 
}
.welcome{
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>