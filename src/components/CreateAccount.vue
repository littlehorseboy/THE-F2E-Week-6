<template>
  <div>
    <h2>Create Account</h2>
    <h4>Glad to see you here!</h4>

    <div>
      <div>
        <label>Account</label>
      </div>
      <div>
        <input>
      </div>
      <div>
        <label>Password</label>
      </div>
      <div>
        <input>
      </div>
      <div>
        <label>Comfirm Password</label>
      </div>
      <div>
        <input>
      </div>
      <div>
        <router-link :to="{ name: 'GeneralInfomation' }" tag="button">SUBMIT & NEXT</router-link>
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

</style>
