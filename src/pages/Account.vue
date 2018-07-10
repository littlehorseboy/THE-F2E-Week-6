<template>
  <div>
    <header></header>
    <div class="AccountContainer">
      <div>
        <font-awesome-icon :icon="['far', 'dot-circle']" />
        <font-awesome-icon :icon="['far', 'dot-circle']" />
        <font-awesome-icon :icon="['far', 'dot-circle']" />
        <font-awesome-icon :icon="['far', 'dot-circle']" />
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Account',
};
</script>

<style lang="scss" scoped>
  header {
    width: 100%;
    height: 3px;
    background-color: #0275D8;
  }

  .AccountContainer {
    margin: 0 auto;
    max-width: 1200px;
    text-align: center;
  }
</style>
