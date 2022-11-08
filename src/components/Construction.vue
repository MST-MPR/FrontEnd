<script>
</script>

<template>
  <div class="flex flex-wrap justify-center md:gap-8 lg:gap-12">
    <div class="pt-4 pb-4 ml-24">
      <img src="@/assets/images/thanks-kut.jpg" class="w-8/12 h-full shadow-2xl	" />
    </div>
    <div class="mt-48">
      <h1 class="pt-20 pb-20 pr-20 mr-48 text-center text-6xl italic text-white_dark">{{ $t("coomingSoon") }}</h1>
      <h3 class="mr-56 text-lg italic text-white_dark">
        {{ $t("working") }}
      </h3>
      <iframe src="https://giphy.com/embed/toXKzaJP3WIgM" class="mt-24 ml-40" />
    </div>
  </div>
</template>

<style>
 h1, h3{
  text-shadow: 2px 2px black
 }
</style>