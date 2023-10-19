<script>

export default {
  props: ['member'],
  data() {
    return {
      selected: null
    };
  },
  methods: {
    select(item) {
      //Tests if the value of 'this.selected' is equal to item.
      if (this.selected == item) {
        //If they are equal, sets 'this.selected' as an empty string, i.e. clears its current value.
        this.selected = null;
      } else {
        //If they are not equal, assign the value of item to 'this.selected'.
        this.selected = item;
      }
    },
  },
}
</script>

<template>
  <div class="
  item
  w-64
  shadow-inner
  shadow-mst_black
  rounded-2xl
  grayscale
  transition
  duration-300
  hover:grayscale-0
  md:shadow-2xl md:shadow-mst_black
  cursor-pointer" @click="select('item')" :class="[selected == 'item' ? 'h-[420px]' : 'h-[390px]']">
    <img :src="member.urlImage" class="pt-4 pb-2 h-52 mx-auto">
    <h1 class="text-center font-bold tracking-wide text-2xl mt-3">
      {{ member.name }}
    </h1>
    <h2 class="text-center mt-4 text-lg">
      {{ member.position1 }} <br>
      {{ member.position2 }}
    </h2>
    <h2 class="text-center mt-4 text-lg"></h2>
    <div class="text-center mt-4" v-if="selected == 'item'">
      <div class="relative flex items-center w-16 mb-4 mx-auto">
        <div class="flex-grow border-2 border-mst_orange"></div>
      </div>
      <p>
        <strong>{{ $t("telefon") }}</strong>: {{ member.telefon }}
      </p>
      <p><strong>Email:</strong> {{ member.email }}</p>
    </div>
  </div>
</template>