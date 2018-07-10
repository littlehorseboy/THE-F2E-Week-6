<template>
  <div>
    <h2>Create Account</h2>
    <h4>Glad to see you here!</h4>

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
          <router-link :to="{ name: 'GeneralInfomation' }" tag="button">SUBMIT & NEXT</router-link>
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

    };
  },
};
</script>

<style lang="scss" scoped>
.form-main {
  display: flex;
  justify-content: center;
  >div {
    min-width: 400px;
    max-width: 800px;
    .group {

      >label {
        display: block;
        width: 100%;
      }
      >input {
        display: block;
        width: 100%;
      }
      >button {
        display: block;
        width: 100%;
        background-color: #0275D8;
        border: 2px solid #4A90E2;
        border-radius: 8px;
        box-sizing: border-box;
        font-size: 20px;
        color: #FFFFFF;
        text-align: center;
        line-height: 52px;
      }
    }
  }
}
</style>
