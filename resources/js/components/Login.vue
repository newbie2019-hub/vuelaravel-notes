<template>
  <div>
    <div class="loader" v-if="isLoading">
      <div class="loader-container" v-if="isLoading">
        <bounce-loader :loading="isLoading" :color="'rgba(74, 71, 250)'" :size="'15px'"></bounce-loader> 
      </div>
    </div>
    <div class="container-fluid p-0" style="height: 100vh">
      <div
        class="row h-100 w-100 justify-content-center align-items-center m-0"
      >
        <div class="col-12 col-sm-12 col-md-6 col-lg-6 mobile" v-if="isHome">
          <div class="login-container">
            <div class="row justify-content-center">
              <img src="/images/icon.png" class="img-fluid" style="" />
            </div>
            <h2 class="text-center">Welcome to Notes.</h2>
            <p class="text-center">
              A simple and elegant note web <br />
              application that is easy to use <br />
              for your daily needs
            </p>
            <div class="row justify-content-center pt-5">
              <div class="col-11 col-sm-8 col-md-7 col-lg-6">
                <button
                  class="btn btn-block btn-login"
                  @click.prevent="createAccount"
                >
                  Create Account
                </button>

                <p class="mt-5 text-center">
                  Already have an account?<a href="" @click.prevent="signin">
                    Sign-in</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-12 col-md-6 col-lg-6 mobile" v-if="isCreate">
          <div class="login-container">
            <div class="row justify-content-center">
              <img src="/images/icon.png" class="img-fluid" style="" />
            </div>
            <h2 class="text-center p-0">Welcome to Notes.</h2>
            <h3 class="text-center">We need your ...</h3>
            <div class="row justify-content-center">
              <div class="col-11 col-sm-8 col-md-8 col-lg-6">
                <input
                  type="text"
                  class="form-control mt-4"
                  v-model="signup.name"
                  id="fullname"
                  placeholder="Full Name"
                />
                <input
                  type="email"
                  class="form-control mt-3"
                  v-model="signup.email"
                  id="email"
                  placeholder="Email Address"
                />
                <input
                  type="password"
                  class="form-control mt-3"
                  v-model="signup.password"
                  id="password"
                  placeholder="Password"
                />
                <input
                  type="password"
                  class="form-control mt-3"
                  v-model="signup.confirm"
                  id="confirmpassword"
                  placeholder="Confirm your password"
                />
                <button
                  class="btn btn-block btn-login mt-4"
                  @click.prevent="storeAccount" :disabled="isLoading"
                >
                  {{ isLoading ? "Creating ..." : "Create Account" }}
                </button>
                <p class="mt-2">
                  Already have an account?<a href="" @click.prevent="signin">
                    Sign-in</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-12 col-md-6 col-lg-6 mobile" v-if="isLogin">
          <div class="login-container">
            <div class="row justify-content-center">
              <img src="/images/icon.png" class="img-fluid" style="" />
            </div>
            <h2 class="text-center p-0">Welcome to Notes.</h2>
            <p class="text-center">
              Please login to your account <br />
              to proceed to your notes
            </p>
            <div class="row justify-content-center">
              <div class="col-11 col-sm-8 col-md-8 col-lg-6">
                <input
                  type="email"
                  class="form-control mt-3"
                  v-model="data.email"
                  id="email"
                  placeholder="Email Address"
                  @keydown.enter="login"
                />
                <input
                  type="password"
                  class="form-control mt-3"
                  v-model="data.password"
                  id="password"
                  placeholder="Password"
                  @keydown.enter="login"
                />
                <button
                  class="btn btn-block btn-login mt-4"
                  @click.prevent="login" :disabled="isLoading"
                >
                  Login
                </button>
                <p class="mt-2">
                  Dont have an account?<a
                    href=""
                    @click.prevent="createAccount"
                  >
                    Sign-up</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-9 col-sm-10 col-md-6 col-lg-6 log-in p-0"></div>
      </div>
    </div>
  </div>
</template>

<script>
import BounceLoader from 'vue-spinner/src/BounceLoader.vue'
export default {
  components: {
    BounceLoader
  },
  async mounted() {
    this.isLoading = true
     const res = await this.callApi('post', `api/auth/me?token=${this.$store.state.token}`)
      if(res.status == 201){
        localStorage.removeItem('auth');
        localStorage.setItem('auth', res.data.newToken);
        console.log(res.data.newToken);
        this.$router.push('/home')
        this.isLoading = false
      }
      else if(res.status == 200){
        this.$router.push('/home')
        this.isLoading = false
      }
      else {
        localStorage.removeItem('auth');
        localStorage.removeItem('userid');
        localStorage.removeItem('username');
      }
      this.isLoading = false
  },
  data() {
    return {
      isLogin: false,
      isCreate: false,
      isHome: true,
      isLoading: false,
      signup: {
        name: "",
        email: "",
        password: "",
        confirm: "",
      },
      data: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    createAccount() {
      this.isLogin = false;
      this.isCreate = true;
      this.isHome = false;
    },
    signin() {
      this.isLogin = true;
      this.isCreate = false;
      this.isHome = false;
    },
    async storeAccount() {
      if (this.signup.name.trim() == "")
        return this.error("Your full name is required");
      if (this.signup.email.trim() == "")
        return this.error("Your email address is required");
      if (this.signup.password.trim() == "")
        return this.error("Your Password is required");
      if (this.signup.password != this.signup.confirm)
        return this.error("Your password doesnt match");

      this.isLoading = true;
      const res = await this.callApi("post", "api/auth/store", this.signup);
      if (res.status == 200) 
      {
        this.success("Account created successfuly!");
        this.isLoading = false;
        this.clearFields();
      } 
      else 
      {
        if (res.status == 422) {
          for (let i in res.data.errors) {
            this.warning(res.data.errors[i][0]);
            this.isLoading = false;
          }
        }
        this.isLoading = false;
      }
    },
    async login() {
      if (this.data.email.trim() == "")
        return this.error("Email Address is required");
      if (this.data.password.trim() == "")
        return this.error("Password is required");

      this.isLoading = true;
      const res = await this.callApi("POST", "api/auth/login", this.data);

      if (res.status == 200 || res.status == 201) 
      {
        const user = await this.callApi('post', 'api/auth/me', {token: res.data.access_token})
        if(user.status == 200){
          this.success("Welcome back to your notes.");
          localStorage.setItem('userid', user.data.id)
          localStorage.setItem('username', user.data.name)
          this.$store.commit('setToken', res.data.access_token)
          this.$router.push('/home')
          this.isLoading = false;
        }
         this.isLoading = false;
      } 
      else 
      {
        this.data.email = "";
        this.data.password = "";
        this.isLoading = false;
        return this.error(res["data"]["error"]);
      }

      this.isLoading = false;
    },
    clearFields() {
      this.signup.name = "";
      this.signup.email = "";
      this.signup.password = "";
      this.signup.confirm = "";
    },
  },
};
</script>
<style scoped>
.btn-login {
  background: rgba(74, 71, 250);
  color: white;
}
.form-control {
  border: 1px solid rgba(74, 71, 250) !important;
}
.login-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
}

a {
  color: rgb(255, 255, 255);
}

a:hover {
  color: rgb(0, 194, 253) !important;
}
.loader {
  width: 100%;
  position: fixed;
  height: 100vh;
  background: rgba(255, 255, 255, 0.87);
  top:0;
  left: 0;
  z-index: 25;
}

.loader-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
