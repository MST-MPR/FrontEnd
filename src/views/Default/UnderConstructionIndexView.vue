<template>
  <div
    class="flex flex-wrap justify-center md:gap-8 lg:gap-12 bg-mst_construction"
  >
    <div class="pt-4 pb-4 ml-24">
      <img src="@/assets/images/General/thanks.jpg" class="w-8/12 h-full shadow-2xl" />
    </div>
    <div class="mt-48">
      <h1
        class="
          pt-20
          pb-20
          pr-20
          mr-48
          text-center text-6xl
          italic
          text-mst_white
          text-shadow:
          2px 2px
          black
        "
      >
        {{ $t("coomingSoon") }}
      </h1>
      <h3
        class="mr-56 text-lg italic text-mst_white text-shadow: 2px 2px black"
      >
        {{ $t("working") }}
      </h3>
    </div>
  </div>
</template>
