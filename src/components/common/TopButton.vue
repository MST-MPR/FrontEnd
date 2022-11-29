<script setup>
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<template>
  <button @click="scrollToTop" type="button" class="w-full flex justify-end">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      class="h-16 stroke-mst_construction"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
      />
    </svg>
  </button>
</template>