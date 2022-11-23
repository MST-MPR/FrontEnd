<template>
  <div class="h-screen">
    <div class="h-full w-full relative">
      <img
        src="../../assets/images/General/micro.jpg"
        class="
          w-full
          h-full
          object-cover
          absolute
          mix-blend-overlay
          object-left-bottom
          brightness-50
          blur-sm
          sm:object-center
        "
      />
      <h1
        class="
          text-mst_white
          text-center
          font-extrabold
          text-5xl
          p-12
          mb-2
          sm:mb-20
          font-mono
          italic
          sm:text-7xl
        "
      >
        {{ $t("verkauf") }}
      </h1>

      <div
        class="
          border-4
          border-mst_bg
          w-full
          sm:w-[700px]
          h-[470px]
          sm:h-[430px]
          drop-shadow-2xl
          m-auto
        "
      >
        <p
          class="
            p-6
            leading-normal
            tracking-wider
            sm:p-10
            text-lg
            sm:text-2xl
            text-mst_white
            italic
          "
        >
          {{ $t("verkaufView") }}
        </p>
      </div>
    </div>
  </div>
</template>

