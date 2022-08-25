<template>

  <div class="container">
    <form @submit.prevent="register">
    <h3>Register</h3>
            <input class="form-input" type="text" name="full_name" required v-model="full_name" placeholder="Full Name"/>
            <input class="form-input" type="text" name="user_type" required v-model="user_type" placeholder="User Type:"/>
            <input class="form-input" type="text" name="email" required v-model="email" placeholder="Email:"/>
            <input class="form-input" type="text" name="password" required v-model="password" placeholder="Password:"/>
            <input class="form-btn" type="submit" value="Register" />
           
    </form>

    <div v-if="user">
      Welcome {{ user.full_name }}, Your sign up was successsul
    </div>
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
      full_name: "",
      email: "",
      password: "",
      user_type: "",
    };
  },
  methods: {
    register() {
      this.$store.dispatch("register", {
        full_name: this.full_name,
        email: this.email,
        password: this.password,
        user_type: this.user_type,
      });
    },
  },
};
</script>
<style scoped>
.container{
  height: 86vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
form{
  border-radius: 10px;
  box-shadow: 5px 5px 5px 5px lightsalmon;
  background: salmon;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 300px;
  height: 400px;
 
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
  width: 200px;
  border: none;
  border-radius: 5px;
  height: 25px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-extra a{
  text-decoration: none;
  color: black;
}
.form-section{
  border-radius: 10px;
  box-shadow: 5px 5px 5px 5px white;
  background: salmon;
  width: 90vw;
  height: 100vh;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
h3{
  color: white;
  font-weight: bold;
  font-size: 1.4rem;
}
hr{
  width: 90%;
  

}
</style>
