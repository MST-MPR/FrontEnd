<script>
import axios from "axios";

export default {
  data() {
    return {
      showPopUp: true,
    };
  },
  methods: {
    async closePopUp(value) {
      //Mandar petición post a modo de resguardo
      this.showPopUp = false;
      if (value == 1) {
        this.$cookies.set("acceptCookie", value);
      }
      try {
        const response = await axios.post("http://localhost:8000/api/cookies/", {
          cookie: this.$cookies.get("acceptCookie"),
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    checkCookie() {
      this.showPopUp = !this.$cookies.isKey("acceptCookie");
      return this.$cookies.isKey("acceptCookie");
    },
  },
  mounted() {
    if (this.checkCookie()) {
      const keys = [
        "cmplz_banner-status",
        "cmplz_functional",
        "cmplz_consented_services",
        "cmplz_marketing",
        "cmplz_preferences",
        "cmplz_policy_id",
        "cmplz_stadistics",
      ];

      keys.forEach((key) => {
        this.$cookies.set(key, "allow", "30d", "/", "", "true", "Lax");
      });
    }
  },
};
</script>

<template>
  <div id="overlay" v-if="showPopUp">
    <div id="pop-up" class="w-full h-auto rounded-3xl md:w-5/12">
      <div class="flex items-center justify-between">
        <router-link to="/cookiePolicy" class="md:pl-5">
          <img src="../../../public/images/General/logo_black.png" class="w-10" />
        </router-link>
        <router-link to="/cookiePolicy">{{ $t("ver") }}</router-link>
        <button @click="closePopUp" class="md:pr-5">
          <img src="../../../public/images/General/cancel-icon.png" class="w-6 h-auto" />
        </button>
      </div>

      <p class="p-5 py-10 text-sm">
        {{ $t("pCoo") }}
      </p>
      <div class="flex flex-col md:flex-row md:justify-center md:space-x-4">
        <div class="w-auto pb-4 md:w-3/12">
          <button @click="closePopUp(1)" class="
          w-full
          text-mst_white
          bg-gradient-to-br
          from-mst_error
          to-mst_white
          hover:bg-gradient-to-bl
          focus:ring-2 focus:outline-none focus:ring-mst_error
          font-medium
          rounded-md
          text-md text-bold
          px-5
          py-2
          text-center
          h-auto
        ">
            {{ $t("ak") }}
          </button>
        </div>
        <div class="w-auto pb-4 md:w-3/12">
          <button @click="closePopUp(0)" class="
          w-full
          text-mst_white
          bg-gradient-to-br
          from-mst_error
          to-mst_white
          hover:bg-gradient-to-bl
          focus:ring-2 focus:outline-none focus:ring-mst_error
          font-medium
          rounded-md
          text-md text-bold
          px-5
          py-2
          text-center
          h-auto
        ">
            {{ $t("ab") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style >
#overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

#pop-up {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  z-index: 2;
}
</style>
