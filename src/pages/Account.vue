<template>
  <div>
    <header></header>
    <div class="AccountContainer">
      <div class="dotdotdotdot">
        <ul class="progressbarStep">
          <li :class="{ active: step > 0 }">step 1</li>
          <li :class="{ active: step > 1 }">step 2</li>
          <li :class="{ active: step > 2 }">step 3</li>
          <li :class="{ active: step > 3 }">step 4</li>
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
        width: 420px;
        @media (max-width: 768px) {
          width: 100%;
        }
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
            color: #0275D8;
            &:before {
              border-color: #0275D8;
            }
            &+ li:after {
              background-color: #0275D8;
            }
          }
        }
      }
    }
  }
</style>
