<script>
export default {
  data() {
    return {
      showPopUp: true,
    };
  },
  methods: {
    closePopUp() {
      this.showPopUp = false;
    },
  },
};
</script>

<template>
  <div id="overlay" v-if="showPopUp">
    <div id="pop-up" class="w-full h-auto rounded-3xl md:w-5/12">
      <div class="flex items-center justify-between">
        <router-link to="/cookiePolicy" class="md:pl-5">
          <img src="../../assets/images/General/logo_black.png" class="w-10" />
        </router-link>
        <router-link to="/cookiePolicy">{{ $t("ver") }}</router-link>
        <button @click="closePopUp" class="md:pr-5">
          <img
            src="../../assets/images/General/cancel-icon.png"
            class="w-6 h-auto"
          />
        </button>
      </div>

      <p class="p-5 py-10 text-sm">
        {{ $t("pCoo") }}
      </p>
      <div class="flex flex-col md:flex-row md:ml-10 2xl:ml-32">
        <div class="w-full pb-4 md:w-3/12 md:mx-14">
          <button
            @click="closePopUp"
            class="
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
              py-2.5
              text-center
            "
          >
            {{ $t("ak") }}
          </button>
        </div>
        <div class="w-full pb-4 md:w-3/12 md:mx-14">
          <button
            @click="closePopUp"
            class="
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
              py-2.5
              text-center
            "
          >
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
