<template>
  <div class="h-full">
    <div class="drop-shadow-2xl py-10">
      <h1
        class="
          drop-shadow-2xl
          text-center
          font-extrabold font-mono
          text-4xl
          md:text-5xl
          2xl:text-7xl
          text-mst_black
        "
      >
        {{ $t("cookieRichtline") }}
      </h1>
    </div>
    <div class="mx-auto px-8 md:px-16 xl:px-32">
      <div class="mx-auto tracking-wider leading-normal md:leading-loose">
        <p class="font-semibold text-center 2xl:pb-8 2xl:text-xl">
          {{ $t("oktober") }}
        </p>
        <ul class="list-decimal">
          <li class="w-80 my-8 sm:w-[700px]">
            <h2 class="text-2xl font-semibold text-mst_orange">
              {{ $t("einfürung") }}
            </h2>
            <p>{{ $t("einfürung2") }}</p>
          </li>
          <li class="w-80 my-8 sm:w-[700px]">
            <h2 class="text-2xl font-semibold text-mst_orange">
              {{ $t("was") }}
            </h2>
            <p>{{ $t("was2") }}</p>
          </li>
          <li class="w-80 my-8 sm:w-[700px]">
            <h2 class="text-2xl font-semibold text-mst_orange">
              {{ $t("skripte") }}
            </h2>
            <p>{{ $t("skripte2") }}</p>
          </li>
          <li class="w-80 my-8 sm:w-[700px]">
            <h2 class="text-2xl font-semibold text-mst_orange">Cookies</h2>
            <p>{{ $t("cookies") }}</p>
          </li>
          <li class="w-80 my-8 sm:w-[700px]">
            <h2 class="text-2xl font-semibold text-mst_orange">
              {{ $t("platzierte") }}
            </h2>
          </li>
          <li class="w-80 my-8 sm:w-[700px]">
            <h2 class="text-2xl font-semibold text-mst_orange">
              {{ $t("zustimmung") }}
            </h2>
            <p>{{ $t("zustimmung2") }}</p>
            <br />
            <p>{{ $t("zustimmung3") }}</p>
          </li>
          <li class="w-80 my-8 sm:w-[700px]">
            <h2 class="text-2xl font-semibold text-mst_orange">
              {{ $t("aktivierung") }}
            </h2>
            <p>{{ $t("aktivierung2") }}</p>
            <p>{{ $t("aktivierung3") }}</p>
          </li>
          <li class="w-80 my-8 sm:w-[700px]">
            <h2 class="text-2xl font-semibold text-mst_orange">
              {{ $t("rechte") }}
            </h2>
            <p class="mb-5">{{ $t("rechte2") }}</p>
            <ul class="list-disc ml-12">
              <li>
                <p>{{ $t("rechte3") }}</p>
              </li>
              <li>
                <p>{{ $t("rechte4") }}</p>
              </li>
              <li>
                <p>{{ $t("rechte5") }}</p>
              </li>
              <li>
                <p>{{ $t("rechte6") }}</p>
              </li>
              <li>
                <p>{{ $t("rechte7") }}</p>
              </li>
              <li>
                <p>{{ $t("rechte8") }}</p>
              </li>
            </ul>
            <br />
            <p>{{ $t("rechte9") }}</p>
          </li>
          <li class="w-80 my-8 sm:w-[700px]">
            <h2 class="text-2xl font-semibold text-mst_orange">
              {{ $t("kontakt") }}
            </h2>
            <p>{{ $t("cookieKontaktdaten") }}</p>
            <br />
            <p>Bremer Straße 63, 28816 Stuhr, Deutschland</p>
            <p>
              <strong>{{ $t("telefon") }}:</strong> +49 421 2077 3 0
            </p>
            <p><strong>Fax:</strong>+49 421 2077 3 91</p>
            <p><strong>E-Mail:</strong>info@mst-extra.net</p>
            <p><strong>Web:</strong>www.mst-extra.net</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


