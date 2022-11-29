<template>
  <div class="h-[600px] sm:h-[900px] p-5">
    <h1 class="text-2xl font-extrabold sm:text-5xl text-center mt-52 sm:mt-80 mb-10 sm:mb-20">
      {{ $t("error") }}
    </h1>
    <router-link
      to="/home"
      class="
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
        ml-[80px]
        sm:ml-[950px]
      "
      >{{ $t("errorB") }}</router-link
    >
  </div>
</template>


