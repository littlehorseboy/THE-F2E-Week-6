const types = {
  UPDATE_STEP: 'step/UPDATE_STEP',
};

const state = {
  step: 1,
};

const getters = {
  getStep() {
    return state.step;
  },
};

const actions = {
  updateStep({ commit }, step) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (step) {
          commit(types.UPDATE_STEP, step);
          resolve();
        } else {
          reject();
        }
      }, 1500);
    });
  },
};

const mutations = {
  [types.UPDATE_STEP](state, step) {
    state.step = step;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
