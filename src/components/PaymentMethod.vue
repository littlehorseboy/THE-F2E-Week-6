<template>
  <div>
    <h2>Payment Method</h2>
    <h4>Add your credit card infomation!</h4>

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
        <router-link :to="{ name: 'CreateAccount' }" tag="button">SUBMIT & NEXT</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentMethod',
  data() {
    return {

    };
  },
};
</script>

<style lang="scss" scoped>

</style>
