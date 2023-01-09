<template>
  <div class="h-[700px] md:h-[710px] 2xl:h-[920px]">
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
          mb-2
  	      md:mb-5 
          2xl:mb-20 md:text-7xl
        "
      >
        {{ $t("verkauf") }}
      </h1>

      <div
        class="
          border-4
          border-mst_construction
          w-full
          md:w-[650px]
          h-[470px]
          md:h-[430px]
          drop-shadow-2xl
          m-auto
        "
      >
        <p
          class="
            p-6
            leading-normal
            tracking-wider
            md:p-10
            text-lg
            md:text-2xl
            text-mst_white
          "
        >
          {{ $t("verkaufView") }}
        </p>
      </div>
    </div>
  </div>
</template>

