<template>
  <div class="h-[640px] md:h-[720px] 2xl:h-[920px]">
    <div class="h-full w-full relative">
      <img
        src="../../assets/images/General/home.jpg"
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
          text-mst_white
          text-center
          font-extrabold
          text-5xl
          p-12
          font-mono
          md:text-7xl
        "
      >
        Smart Home
      </h1>

      <div
        class="
          border-4
          border-mst_construction
          mt-[30px]
          w-full
          h-[300px]
          drop-shadow-2xl
          m-auto
          md:mt-[60px] md:w-[700px]
          2xl:mt-[130px]
        "
      >
        <ul
          class="
            list-none
            p-6
            md:p-12
            text-lg
            md:text-2xl
            text-mst_white
            text-center
          "
        >
          <li class="leading-normal tracking-wider mb-6">
            {{ $t("smartHomeView") }}
          </li>
          <li class="leading-normal tracking-wider mb-6">
            {{ $t("smartHomeView2") }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

