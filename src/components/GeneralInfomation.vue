<template>
  <div>
    <h2>General Infomation</h2>
    <h4>Tell us who you are!</h4>

    <div class="form">
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
        <router-link :to="{ name: 'UpdateProfilePicture' }" tag="button">SUBMIT & NEXT</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GeneralInfomation',
  data() {
    return {

    };
  },
};
</script>

<style lang="scss" scoped>

</style>
