<template>
  <div class="h-full w-full overflow-x-hidden 2xl:h-screen">
    <div class="h-full w-full relative">
      <img
        src="/images/General/home.jpg"
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
          py-12
          md:text-5xl
          2xl:text-7xl
          text-mst_white
        "
      >
        SMART HOME
      </h1>
      <div class="pb-24 md:pb-12 px-12 xl:px-96">
        <div
          class="
            border-4
            w-full
            h-full
            drop-shadow-2xl
            m-auto
            2xl:mt-[130px]
            border-mst_construction
          "
        >
          <ul
            class="
              list-none
              p-6
              text-lg text-center
              md:p-8 md:text-2xl
              text-mst_white
            "
          >
            <li class="leading-normal tracking-wider mb-6">
              {{ $t("smartHome.smartHomeView") }}
            </li>
            <li class="leading-normal tracking-wider">
              {{ $t("smartHome.smartHomeView2") }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

