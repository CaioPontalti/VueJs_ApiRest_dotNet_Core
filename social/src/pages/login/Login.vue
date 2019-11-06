<template>
  <div class="row margin-0 bg">
    <div class="col s12 margin-0">
      <div class="intro">
          <form class="box">
            <h4>Login</h4>
            <input
                type="text"
                name=""
                placeholder="Username"
                v-model="usuario.email"
                @click="clearArrayError"
                v-on:keyup.enter="login">

            <input
                type="password"
                name=""
                placeholder="Password"
                v-model="usuario.senha"
                @click="clearArrayError"
                v-on:keyup.enter="login">

            <button
                type="button"
                class="btn"
                name="Login"
                @click="login">
                <span id="texto">Login</span>
            </button>

            <p v-if="this.errors.length">
              <b class="error">Por favor, corrija o(s) seguinte(s) erro(s):</b>
              <ul>
                <li class="error" v-for="error in errors" :key="error">{{ error }}</li>
              </ul>
            </p>
        </form>
      </div>
    </div>

  </div>

</template>

<script>
import GridVue from '@/components/layouts/GridVue'
import axios from 'axios'

export default {
  name:'Login',
  data() {
    return {
      usuario:{
        email:'',
        senha:''
      },
      errors:[]
    }
  },
  components:{
    GridVue
  },

  methods: {
    async login(){

        this.clearArrayError();
        if (!this.usuario.email) {
          this.errors.push('O usuário é obrigatório.');
        }

        if (!this.usuario.senha) {
          this.errors.push('A senha é obrigatório.');
        }

        if(this.errors.length)
          e.preventDefault();

        const { data } = await axios.post(`http://localhost:50102/api/Accounts/login`,{
          UserName: this.usuario.email
        })

        try
        {
          const response = await axios.post(`http://localhost:50102/api/Accounts/Password`, {
            Password: this.usuario.senha,
            Guid: data
          })

          if(response.data)
          {
            await localStorage.setItem("token", response.data.access_token);
            await localStorage.setItem("userName", 'Admin');
            this.$router.push({path: '/home'});
          }
        }
        catch(e){
          this.errors.push('Usuário ou senha inválidos.');
        }
    },
    clearArrayError(){
      this.errors = [];
    }
  },
}
</script>

<style scoped>
.intro{

    width:100%;
}

.btn{
    border: 1px solid #2ecc71;
    color: white;
    border-radius: 24px;
    text-transform: capitalize;
    background: none;
    margin-bottom: 15px;
    padding-inline-start: 30px;
    padding-inline-end: 30px;
}

#texto{
    display: flex;
    margin-top: -1px;
}

.btn:hover{
    background: #2ecc71;
}

.bg {
  background: url('/static/img/Login.jpg') no-repeat center center;
  background-size: 100% 100%;
  height: 100%;
  display: flex;
  width: 100%;
}
col{
  padding-left: 0% !important;
}

.margin-0 {
  margin: 0!important;
}

body{
    margin: 0;
    padding: 0;
    font-family: fantasy;
}

.box h4{
    margin-top: 10px;
    margin-bottom: -5px;
    color:#D9C6C4;
    font-weight: 500;
    font-family:'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
}

.box{
    width: 350px;
    padding: 0px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #130D0D;
    text-align: center;
    border-radius: 50px;
    opacity: 0.93;
    border:0.5px solid white;
}

.box input[type="text"], .box input[type="Password"]{
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border:2px solid #3498db;
    padding: 14px 10px;
    width: 200px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s
}

.box input[type="text"]:focus, .box input[type="Password"]:focus{
    width: 250px;
    border-color: #2ecc71;
}
.error{
  color: red;
}

</style>
