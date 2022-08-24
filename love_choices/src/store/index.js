import { createStore } from 'vuex'
import router from '../router/index'
export default createStore({
  state: {
    user: null,
    users: null,
    token: null,
  },
  mutations: {
    setUser: (state, user) => {
      state.user = user  ;
    },
    setUsers: (state, users) => {
      state.users = users  ;
    },
    setToken: (state, token) => {
      state.token = token  ;
    }
  },
  actions: {
    login: async (context, payload) => {
      let res = await fetch("https://love-choices-api.herokuapp.com/users/login", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: 
        JSON.stringify({
          email: payload.email,
          password: payload.password,
        }),
      });

      let data = await res.json()
      console.log(data)

      if(data.token){
        context.commit('setToken', data.token)

        // Verify token
        // 
        fetch('https://love-choices-api.herokuapp.com/users/users/verify', {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": data.token
          }
        }).then((res) => res.json()).then((data) => {
          context.commit('setUser', data.user)
          router.push('/users')
        })
      }
      else {
        alert(data)
      }
    },
    register: async (context, payload) => {
      fetch("https://love-choices-api.herokuapp.com/users/register", {
        method: 'POST',
        body: JSON.stringify({
            full_name: payload.full_name,
            email: payload.email,
            password: payload.password,
            phone: payload.phone,
            user_type: "user",
            birth_date: payload.birth_date,
            gender: payload.gender,
            marital_status: payload.marital_status,
            occupation: payload.occupation,
            address: payload.address,
            description: payload.description,
            image: payload.image
        }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
        },
    getUsers: async (context) => {
      fetch("https://love-choices-api.herokuapp.com/users")
        .then((response) => response.json())
        .then((json) => context.commit("setUsers", json));
    },
    getUser: async (context, id) => {
      fetch("https://love-choices-api.herokuapp.com/users/" +id)
        .then((response) => response.json())
        .then((user) => context.commit("setUser", user[0]));
    },
  }
})
