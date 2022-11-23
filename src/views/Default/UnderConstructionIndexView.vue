<template>
  <div class="h-[750px] sm:h-[900px] bg-mst_construction">
    <div
      class="
        grid
        overflow-hidden
        grid-row-2
        sm:grid-cols-2 sm:w-full sm:h-[800px]
      "
    >
      <div
        class="
          w-80
          h-96
          mt-5
          sm:mt-28
          ml-5
          sm:ml-[450px] sm:w-[450px] sm:h-[700px]
        "
      >
        <img src="../../assets/images/General/time.jpg" />
      </div>
      <div class="w-80 ml-2 p-8 mt-5 sm:mt-64 sm:w-[600px] sm:h-[650px]">
        <h1
          class="
            mt-24
            mb-5
            text-5xl
            tracking-tight
            font-extrabold
            text-center
            text-mst_white
            dark:text-white
          "
        >
          {{ $t("coomingSoon") }}
        </h1>
        <p class="font-light text-mst_white text-center ml-6 sm:text-xl">
          {{ $t("working") }}
        </p>
      </div>
    </div>
  </div>
</template>

