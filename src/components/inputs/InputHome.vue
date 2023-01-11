<script>
import { VueRecaptcha } from "vue-recaptcha";
import axios from "axios";

export default {
  props: {
    task: Object,
  },
  components: {
    VueRecaptcha,
  },
  methods: {
    async reset() {
      this.$refs.recaptcha.reset();
      try {
        axios.defaults.headers.common["X-CSRF-TOKEN"] =
          "ggURxwmVHVgDK5W3jLZ2uESkVrzEWSZ1jlwk7twG";
        const response = await axios.post(
          "http://localhost:8000/contact-us/store",
          this.task
        );
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<template>
  <div>
    <label for="email" class="block mb-2 text-sm font-medium text-mst_black"
      >Name</label
    >
    <input
      type="text"
      id="name"
      v-model.trim="task.name"
      class="shadow-2xl border text-sm rounded-lg block w-72 md:w-full p-2.5"
      required
    />
  </div>
  <div>
    <label
      for="subject"
      class="block mb-2 text-sm font-medium text-mst_black"
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
        md:w-full
        text-sm text-gray-900
        bg-gray-50
        rounded-lg
        border border-gray-300
        shadow-sm
      "
    />
  </div>
  <div class="md:col-span-2">
    <label
      for="message"
      class="block mb-2 text-sm font-medium text-mst_black"
      >{{ $t("message") }}</label
    >
    <textarea
      type="text"
      id="message"
      v-model.trim="task.message"
      rows="6"
      class="
        block
        p-3
        w-72
        md:w-full
        text-sm text-gray-900
        bg-gray-50
        rounded-lg
        border border-gray-300
        shadow-sm
      "
    />
  </div>
  <div class="pt-3 pb-3">
    <vue-recaptcha
      ref="recaptcha"
      sitekey="6Lf6husjAAAAADC6zdk_WB-qL-7I7QxEKR4ANx06"
      required
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
      ml-[75px]
      md:ml-0
      text-center
    "
  >
    {{ $t("send") }}
  </button>
</template>


