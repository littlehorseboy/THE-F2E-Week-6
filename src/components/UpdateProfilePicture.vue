<template>
  <div>
    <h1>Update Profile Picture</h1>
    <h3>We wanna know you more!</h3>

    <div class="form-main">
      <div>
        <div class="group">
          <div>
            <div>
              <font-awesome-icon :icon="['fas', 'images']" />
            </div>
            <div>
              <div>UPLOAD UP TO 3 PHOTOS</div>
              <div>MAX SIZE: 150*150px</div>
            </div>
          </div>
        </div>
        <div class="group">
          <button @click="nextStep">
            SUBMIT & NEXT
          </button>
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
      this.$store.dispatch('updateStep', 4);
      this.$router.push({ name: 'PaymentMethod' });
    },
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
        >div {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          color: #9B9B9B;
          border: 2px solid #000000;
          border-radius: 8px;
          height: 140px;
          font-size: 20px;
          padding-left: 1rem;
          padding-right: 1rem;
          box-sizing: border-box;
          cursor: pointer;
          &:hover {
            border-color: #4A90E2;
          }
          >div {
            text-align: left;
            >svg {
              font-size: 50px;
              margin-right: 1rem;
            }
            >div:nth-child(2) {
              font-size: 16px;
            }
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
