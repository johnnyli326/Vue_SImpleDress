<template>
  <div class="message-alert">
    <div
      class="alert alert-dismissible"
      :class="'alert-' + item.status"
      v-for="(item, i) in messages"
      :key="i"
    >
      {{ item.message }}
      <button type="button" class="close" @click="removeMessage(i)" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AlertMessage',
  data() {
    return {};
  },
  methods: {
    removeMessage(i) {
      const vm = this;
      vm.$store.dispatch('alertModules/removeMessage', i);
    },
    removeMessageWithTiming(timestamp) {
      const vm = this;
      vm.$store.dispatch('alertModules/removeMessageWithTiming', timestamp);
    },
  },
  computed: {
    ...mapGetters('alertModules', ['messages']),
  },
  created() {
    // const vm = this;
    // 自定義名稱 'messsage:push'
    // message: 傳入參數
    // status: 樣式，預設值為 warning
    // 利用$on在bus，外層註冊一個message:push的方法
    // vm.updateMessage(message, state = 'success');
    // vm.$bus.$on('message:push',(message, status = 'warning') => {
    //   vm.updateMessage(message, status);
    // });
    
    // 內層註冊 ==> Product.vue
    // vm.$bus.$emit('message:push');
  },
};
</script>

<style scope>
.message-alert {
  position: fixed;
  max-width: 50%;
  top: 56px;
  right: 20px;
  z-index: 1100;
}
</style>
