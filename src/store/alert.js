/* eslint no-param-reassign: "error" */
export default {
  namespaced: true,
  strict: true,
  state: {
    messages: [],
  },
  actions: {
    updateMessage(context, { message, status = 'danger' }) {
      const timestamp = Math.floor(new Date() / 1000);
      context.commit('ADDMESSAGE', {
        message,
        status,
        timestamp,
      });
      context.dispatch('removeMessageWithTiming', timestamp);
    },
    removeMessage(context, num) {
      context.commit('REMOVEMESSAGE', num);
    },
    removeMessageWithTiming(context, timestamp) {
      setTimeout(() => {
        context.state.messages.forEach((item, i) => {
          if (item.timestamp === timestamp) {
            context.commit('REMOVEMESSAGE', i);
          }
        });
      }, 5000);
    },
  },
  mutations: {
    ADDMESSAGE(state, payload) {
      state.messages.push(payload);
    },
    REMOVEMESSAGE(state, payload) {
      state.messages.splice(payload, 1);
    },
  },
  getters: {
    messages(state) {
      return state.messages;
    },
  },
};
