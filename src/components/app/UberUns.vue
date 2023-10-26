<template>
  <div class="h-full md:h-full 2xl:h-fit">
    <div class="w-full h-full pb-5 relative">
      <img src="/images/General/esc.jpg" class="
              w-full
              h-full
              object-cover
              absolute
              mix-blend-overlay
              object-left-bottom
              brightness-50
              blur-sm
              md:object-center
            " />
      <h1 class="
              text-mst_white
              text-center
              font-extrabold
              text-5xl
              p-10
              md:text-7xl
            ">
        {{ $t("home.überUns1") }}
      </h1>
      <p class="
              text-mst_white
              text-center text-base
              p-4
              tracking-wider
              leading-relaxed
              md:px-40 md:text-2xl
            ">
        {{ $t("home.überUns2") }}
      </p>
    </div>
  </div>
</template>