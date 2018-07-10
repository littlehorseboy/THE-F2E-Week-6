<template>
  <div>
    <header></header>
    <div class="AccountContainer">
      <div class="dotdotdotdot">
        <!-- <font-awesome-icon :icon="['far', 'dot-circle']" />
        <font-awesome-icon :icon="['far', 'dot-circle']" />
        <font-awesome-icon :icon="['far', 'dot-circle']" />
        <font-awesome-icon :icon="['far', 'dot-circle']" /> -->
        <ul class="progressbarStep">
          <li :class="{ active: step > 0 }">gg</li>
          <li :class="{ active: step > 1 }">gg</li>
          <li :class="{ active: step > 2 }">gg</li>
          <li :class="{ active: step > 3 }">gg</li>
        </ul>
      </div>
      <div style="clear: both;"></div>
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Account',
  computed: {
    ...mapGetters({
      step: 'getStep',
    }),
  },
};
</script>

<style lang="scss" scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  header {
    width: 100%;
    height: 3px;
    background-color: #0275D8;
  }

  .AccountContainer {
    margin: 0 auto;
    max-width: 1200px;
    text-align: center;
    .dotdotdotdot {
      margin-top: 2rem;
      display: flex;
      justify-content: center;
      .progressbarStep {
        min-width: 400px;
        max-width: 800px;
        padding-left: 0;
        counter-reset: step;
        >li {
          list-style-type: none;
          display: inline-block;
          width: 20%;
          position: relative;
          text-align: center;
          &:before {
            content: counter(step);
            counter-increment: step;
            width: 30px;
            height: 30px;
            line-height: 30px;
            border: 1px solid #ddd;
            display: block;
            text-align: center;
            margin: 0 auto 10px auto;
            border-radius: 50%;
            background-color: #fff;
          }
          &:after {
            content: '';
            position: absolute;
            width: 100%;
            height: 1px;
            background-color: #ddd;
            top: 15px;
            left: -50%;
            z-index: -1;
          }
          &:first-child:after {
            content: none;
          }
          &.active {
            color: green;
            &:before {
              border-color: green;
            }
            &+ li:after {
              background-color: green;
            }
          }
        }
      }
    }
  }
</style>
