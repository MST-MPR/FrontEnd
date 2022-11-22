<script setup>

defineProps(['title', 'paragraph'])

</script>

<template>
  <div class="flip-card bg-transparent w-[300px] h-[300px]">
    <div
      class="flip-card-inner relative w-full h-full text-center duration-[1300ms]"
    >
      <div class="flip-card-front absolute w-full h-full">
        <img
          src="../../assets/images/General/kameras.jpg"
          class="w-[300px] h-[300px]"
        />
      </div>
      <div class="flip-card-back absolute w-full h-full p-2 text-mst_white border-4 border-mst_bg drop-shadow-2xl shadow-mst_white">
        <h1 class="text-xl font-semibold mt-6 mb-5">{{title}}</h1>
        <p class="italic">{{paragraph}}</p>
      </div>
    </div>
  </div>
</template>

<style setup>
body {
  font-family: Arial, Helvetica, sans-serif;
}
.flip-card {
  perspective: 1000px;
}
.flip-card-inner {
  transform-style: preserve-3d;
}
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}
.flip-card-front,
.flip-card-back {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.flip-card-back {
  transform: rotateY(180deg);
}
</style>