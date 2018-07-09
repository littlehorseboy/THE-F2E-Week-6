<template>
  <div>
    <header></header>
    <div>
      <font-awesome-icon icon="faDotCircle" />
      <font-awesome-icon icon="faDotCircle" />
      <font-awesome-icon icon="faDotCircle" />
      <font-awesome-icon icon="faDotCircle" />
    </div>
    asda
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'CreateAccount',
};
</script>

<style lang="scss" scoped>
  header {
    width: 100%;
    height: 3px;
    background-color: #0275D8;
  }
</style>
