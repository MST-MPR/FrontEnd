<script>
import { VueRecaptcha } from "vue-recaptcha";
import axios from "axios";

export default {
  data() {
    return {
      recaptchaVerified: false,
      errorMessage: "",
      formDisabled: true,
    };
  },
  props: {
    task: Object,
  },
  components: {
    VueRecaptcha,
  },
  methods: {
    handleSuccess() {
      this.recaptchaVerified = true;
      this.errorMessage = "";
    },
    async reset() {
      if (this.recaptchaVerified) {
        this.$refs.recaptcha.reset();
        try {
          /*axios.defaults.headers.common["X-CSRF-TOKEN"] =
            "ggURxwmVHVgDK5W3jLZ2uESkVrzEWSZ1jlwk7twG";*/
          const response = await axios.post(
            "http://localhost:8000/contact-us/store",
            this.task
          );
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
        this.recaptchaVerified = false;
      } else {
        this.errorMessage = "Alert message";
      }
    },
  },
};
</script>

<template>
  <div>
    <label for="name" class="block mb-2 text-sm font-medium text-mst_white"
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
    <label for="email" class="block mb-2 text-sm font-medium text-mst_white">{{
      $t("email")
    }}</label>
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
      class="block mb-2 text-sm font-medium text-mst_white"
      >{{ $t("message") }}</label
    >
    <textarea
      type="text"
      id="message"
      v-model.trim="task.message"
      rows="6"
      class="
        block
        p-2.5
        w-72
        md:w-full
        text-sm text-gray-900
        bg-gray-50
        rounded-lg
        shadow-sm
        md:h-20
        2xl:h-full
      "
    />
  </div>
  <div class="pt-3 pb-3">
    <VueRecaptcha
      ref="recaptcha"
      sitekey="6Lf6husjAAAAADC6zdk_WB-qL-7I7QxEKR4ANx06"
      :load-recaptcha-script="true"
      @verify="handleSuccess"
      @error="handleError"
    />
    <p v-if="errorMessage" class="text-mst_red text-xl mx-auto font-black">
      {{ $t("r1") }}
    </p>
  </div>
  <div class="pt-3 pb-3">
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
        text-center
        md:w-full
        lg:w-36
        md:mx-auto
        xl:ml-0
      "
    >
      {{ $t("send") }}
    </button>
  </div>
</template>
