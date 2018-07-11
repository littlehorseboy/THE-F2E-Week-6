<template>
  <div>
    <h1>Payment Method</h1>
    <h3>Add your credit card infomation!</h3>

    <div class="form-main">
      <div>
        <div class="group">
          <div>
            <label>Card Number</label>
            <input placeholder="1234 5678 9012 3456">
          </div>
        </div>
        <div class="group">
          <div>
            <label>Cardholder Name</label>
            <input placeholder="EXAMPLE NAME">
          </div>
          <div>
            <label>Bank Name</label>
            <input placeholder="EXAMPLE BANK">
          </div>
        </div>
        <div class="group">
          <div>
            <label>CVV</label>
            <input placeholder="123">
          </div>
          <div>
            <label>Expire Date</label>
            <input placeholder="MM">
          </div>
          <div>
            <label>Account</label>
            <input placeholder="DD">
          </div>
        </div>
        <div class="group">
          <button @click="nextStep">
            DONE
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentMethod',
  methods: {
    nextStep() {
      this.$store.dispatch('updateStep', 5);
      this.$router.push({ name: 'Congratulations' });
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
        display: flex;
        align-items: flex-end;
        margin-top: 1rem;
        >div {
          flex: 1;
          margin-left: 0.5rem;
          margin-right: 0.5rem;
          &:first-child {
            margin-left: 0;
          }
          &:last-child {
            margin-right: 0;
          }
          >label {
            display: block;
            width: 100%;
            margin-bottom: 0.4rem;
            text-align: left;
            font-size: 20px;
            line-height: 24px;
            letter-spacing: 0;
          }
          >input {
            display: block;
            width: 100%;
            border: 2px solid #000000;
            border-radius: 8px;
            height: 45px;
            font-size: 20px;
            line-height: 24px;
            padding-left: 1rem;
            padding-right: 1rem;
            box-sizing: border-box;
            &:focus {
              border-color: #4A90E2;
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
