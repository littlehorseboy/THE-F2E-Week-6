<template>
  <div>
    <h1>Create Account</h1>
    <h3>Glad to see you here!</h3>

    <div class="form-main">
      <div>
        <div class="group">
          <label>Account</label>
          <input v-model="account" v-validate="{ required: true, email: true }"
            name="account" placeholder="example@email.com">
          <span class="msg-error">{{ errors.first('account') }}</span>
        </div>
        <div class="group">
          <label>Password</label>
          <input v-model="password"
            v-validate="{ required: true, confirmed: 'passwordRef',  }"
            name="password" type="password" placeholder="********">
          <span class="msg-error">{{ errors.first('password') }}</span>
        </div>
        <div class="group">
          <label>Confirm Password</label>
          <input v-model="confirmPassword" v-validate="{ required: true }"
            name="confirmPassword" ref="passwordRef" type="password" placeholder="********">
          <span class="msg-error">{{ errors.first('confirmPassword') }}</span>
        </div>
        <div class="group">
          <button @click="nextStep">
            SUBMIT & NEXT
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateAccount',
  data() {
    return {
      account: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    nextStep() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.$store.dispatch('updateStep', 2);
          this.$router.push({ name: 'GeneralInfomation' });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  h1 {
    font-size: 2.5rem;
    font-weight: 300;
    margin-bottom: 0.2em;
  }

  h3 {
    font-weight: 400;
    margin-top: 0.2em;
  }

  .form-main {
    display: flex;
    justify-content: center;
    >div {
      width: 420px;
      @media (max-width: 768px) {
        width: 90%;
      }
      .group {
        margin-top: 1rem;
        >label {
          display: block;
          width: 100%;
          margin-bottom: 0.4rem;
          text-align: left;
          font-size: 20px;
          line-height: 24px;
          letter-spacing: 0;
        }
        >input {
          display: block;
          width: 100%;
          border: 2px solid #000000;
          border-radius: 8px;
          height: 45px;
          font-size: 20px;
          line-height: 24px;
          padding-left: 1rem;
          padding-right: 1rem;
          box-sizing: border-box;
          &:focus {
            border-color: #4A90E2;
          }
        }
        >button {
          display: block;
          width: 100%;
          margin-top: 2rem;
          background-color: #0275D8;
          border: 2px solid #4A90E2;
          border-radius: 8px;
          box-sizing: border-box;
          font-size: 20px;
          color: #FFFFFF;
          text-align: center;
          line-height: 40px;
          cursor: pointer;
          &:hover {
            background-color: rgb(0, 126, 236);
          }
        }
      }
    }
  }
</style>
