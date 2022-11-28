<script>
import { VueRecaptcha } from "vue-recaptcha";

export default {
  props: {
    task: Object,
  },
  components: {
    VueRecaptcha,
  },
  methods: {
    reset() {
      this.$refs.recaptcha.reset();
    },
  },
};
</script>

<template>
  <div>
    <label for="email" class="block mb-2 text-sm font-medium text-mst_white"
      >Name</label
    >
    <input
      type="text"
      id="name"
      v-model.trim="task.name"
      class="shadow-2xl border text-sm rounded-lg block w-72 sm:w-full p-2.5"
      required
    />
  </div>
  <div>
    <label
      for="subject"
      class="block mb-2 text-sm font-medium text-mst_white"
      >{{ $t("email") }}</label
    >
    <input
      type="text"
      id="email"
      v-model.trim="task.email"
      class="
        block
        p-3
        w-72
        sm:w-full
        text-sm text-gray-900
        bg-gray-50
        rounded-lg
        border border-gray-300
        shadow-sm
      "
      required
    />
  </div>
  <div class="sm:col-span-2">
    <label
      for="message"
      class="block mb-2 text-sm font-medium text-mst_white"
      >{{ $t("message") }}</label
    >
    <input
      type="text"
      id="message"
      v-model.trim="task.message"
      rows="6"
      class="
        block
        p-2.5
        w-72
        sm:w-full
        text-sm text-gray-900
        bg-gray-50
        rounded-lg
        shadow-sm
      "
      required
    />
  </div>
  <div class="pt-3 pb-3">
    <vue-recaptcha
      ref="recaptcha"
      sitekey="6Lem_TIjAAAAAOmTwiskZDAWnkE81t8Y_jsXe_jG"
    />
  </div>
  <button
    @click="reset"
    type="submit"
    class="
      w-36
      text-mst_white
      bg-gradient-to-br
      from-mst_gray
      to-mst_orange
      hover:bg-gradient-to-bl
      focus:ring-2 focus:outline-none focus:ring-mst_orange
      font-medium
      rounded-lg
      text-sm
      px-5
      py-2.5
      text-center
    "
  >
    {{ $t("send") }}
  </button>
</template>


