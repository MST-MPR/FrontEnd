<template>
  <div class="h-[1500px] sm:h-[1800px]">
    <div class="h-full w-full relative">
      <img
        src="../../assets/images/General/cam.jpg"
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
        {{ $t("vermietung") }}
      </h1>

      <div
        class="
          border-4
          border-mst_bg
          w-full
          sm:w-[700px]
          h-[1300px]
          drop-shadow-2xl
          m-auto
        "
      >
        <ul class="list-disc p-6 sm:p-12 text-lg sm:text-2xl text-mst_white italic">
          <li class="leading-normal tracking-wider mb-6">{{ $t("vermietungView") }} </li>
          <li class="leading-normal tracking-wider mb-6">{{ $t("vermietungView2") }} </li>
          <li class="leading-normal tracking-wider mb-6">{{ $t("vermietungView3") }} </li>
          <li class="leading-normal tracking-wider mb-6">{{ $t("vermietungView4") }} </li>
          <li class="leading-normal tracking-wider mb-6">{{ $t("vermietungView5") }} </li>
          <li class="leading-normal tracking-wider mb-6">{{ $t("vermietungView6") }} </li>
          <li class="leading-normal tracking-wider mb-6">{{ $t("vermietungView7") }} </li>
          <li class="leading-normal tracking-wider mb-6">{{ $t("vermietungView8") }} </li>
          <li class="leading-normal tracking-wider mb-6">{{ $t("vermietungView9") }} </li>
        </ul>
      </div>
    </div>
  </div>
</template>

