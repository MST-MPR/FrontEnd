<template>
  <div class="h-full md:h-[710px] xl:h-[780px] 2xl:h-screen">
    <div class="h-full w-full relative">
      <img
        src="/images/General/micro.jpg"
        class="
          w-full
          h-full
          object-cover
          absolute
          mix-blend-overlay
          object-left-bottom
          brightness-50
          blur-sm
          md:object-center
        "
      />
      <h1
        class="
          text-center
          font-extrabold
          text-4xl
          pt-12
          md:text-5xl md:mb-5
          2xl:text-7xl
          text-mst_white
        "
      >
        {{ $t("buttons.verkauf") }}
      </h1>
      <div class="py-12 md:px-12 xl:pt-24 2xl:px-96 2xl:pt-28">
        <div
          class="
            border-4
            w-full
            h-full
            drop-shadow-2xl
            m-auto
            md:w-full md:h-full
            border-mst_construction
          "
        >
          <ul
            class="
              list-none
              p-6
              text-lg
              md:p-10 md:text-2xl
              text-mst_white
            "
          >
            <li class="leading-normal tracking-wider mb-6">
              {{ $t("verkauf.verkaufView") }}
            </li>
            <li class="leading-normal tracking-wider">
              {{ $t("verkauf.verkaufView2") }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

