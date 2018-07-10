<template>
  <div>
    <h1>General Infomation</h1>
    <h3>Tell us who you are!</h3>

    <div class="form-main">
      <div>
        <div class="group">
          <label>Account</label>
          <input>
        </div>
        <div class="group">
          <label>Password</label>
          <input>
        </div>
        <div class="group">
          <label>Comfirm Password</label>
          <input>
        </div>
        <div class="group">
          <router-link :to="{ name: 'UpdateProfilePicture' }" @click.native="nextStep" tag="button">
            SUBMIT & NEXT
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GeneralInfomation',
  methods: {
    nextStep() {
      this.$store.dispatch('updateStep', 3);
    },
  },
};
</script>

<style lang="scss" scoped>
  h1 {
    font-weight: 400;
  }

  h3 {
    font-weight: 400;
  }

  .form-main {
    display: flex;
    justify-content: center;
    >div {
      min-width: 400px;
      max-width: 800px;
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
