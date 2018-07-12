<template>
  <div>
    <h1>Congratulations</h1>
    <h3>Now you’re one of us!</h3>

    <div class="form-main">
      <div>
        <div class="group">
          <div>
            <font-awesome-icon :icon="['fas', 'smile']" />
          </div>
        </div>
        <div class="group">
          Redirected to homepage after 5 seconds…
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UpdateProfilePicture',
  methods: {
    nextStep() {
      this.$store.dispatch('updateStep', 1);
      this.$router.push({ name: 'CreateAccount' });
    },
  },
  created() {
    setTimeout(() => {
      this.$store.dispatch('updateStep', 1);
      this.$router.push({ name: 'CreateAccount' });
    }, 5000);
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
        color: #0275D8;
        font-style: italic;
        font-weight: 400;
        >div {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          >svg {
            color: #BEE1FF;
            font-size: 12rem;
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
