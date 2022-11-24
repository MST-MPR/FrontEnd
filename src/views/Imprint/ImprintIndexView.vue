<template>
  <div class="h-full bg-imprint bg-cover">
    <div class="drop-shadow-2xl">
      <h1
        class="
          drop-shadow-2xl
          text-mst_black
          text-center
          font-extrabold
          text-5xl
          p-12
          mb-2
          font-mono
          italic
          sm:text-7xl
        "
      >
        {{ $t("impressum") }}
      </h1>
    </div>
    <div class="p-10">
      <h2
        class="
          p-5
          -mt-16
          -mb-15
          text-mst_black
          font-extrabold
          text-lg
          text-center
            sm:text-left
          sm:p-12
          sm:mb-2
          font-mono
          italic
          sm:text-xl
        "
      >
        MST MEDIEN- SYSTEMTECHNIK GMBH
      </h2>
      <div class="ml-10 sm:ml-20 tracking-wider leading-normal sm:leading-loose">
        <ul class="list-disc">
          <li class="mb-8">
            <h2 class="text-xl sm:text-2xl italic font-semibold text-mst_orange">
              {{ $t("anschrift") }}:
            </h2>
            <p>Bremer Straße 63, 28816 Stuhr</p>
          </li>
          <li class="mb-8">
            <h2 class="text-xl sm:text-2xl italic font-semibold text-mst_orange">
              {{ $t("kontaktdaten") }}:
            </h2>

            <p>
              <strong>{{ $t("telefon") }}:</strong> +49 421 2077 3 0
            </p>
            <p><strong>Fax:</strong> +49 421 2077 3 91</p>
            <p><strong>E-Mail:</strong>info@mst-extra.net</p>
            <p><strong>Web:</strong>www.mst-extra.net</p>
          </li>
          <li class="mb-8">
            <h2 class="text-xl sm:text-2xl italic font-semibold text-mst_orange">
              {{ $t("geschäftsführer") }}:
            </h2>
            <p>Ralf-Peter Franz</p>
          </li>
          <li class="mb-8">
            <h2 class="text-xl sm:text-2xl italic font-semibold text-mst_orange">
              {{ $t("umsatzsteuer") }}:
            </h2>
            <p>DE 2914 55354</p>
          </li>
          <li class="mb-8">
            <h2 class="text-xl sm:text-2xl italic font-semibold text-mst_orange">
              {{ $t("inhaltlich") }}:
            </h2>
            <p>Ralf-Peter Franz</p>
          </li>
        </ul>
      </div>
      <div class="relative flex py-5 items-center w-52 sm:w-96 ml-10 sm:ml-20">
        <div class="flex-grow border-2 border-mst_orange"></div>
      </div>
      <div class="ml-10 sm:ml-20 tracking-wider leading-normal sm:leading-loose">
        <ul class="list-disc">
          <li class="mt-8 mb-8">
            <h2 class="text-xl sm:text-2xl italic font-semibold text-mst_orange">
              {{ $t("konzeption") }}:
            </h2>
            <p>MST Medien-Systemtechnik GmbH</p>
          </li>
        </ul>
      </div>
      <div class="relative flex py-5 items-center w-52 sm:w-96 ml-10 sm:ml-20">
        <div class="flex-grow border-2 border-mst_orange"></div>
      </div>
      <div class="tracking-wider leading-normal sm:leading-loose ml-10 sm:ml-20">
        <ul class="list-disc">
          <li class="w-52 sm:w-[500px] mt-8 mb-8">
            <h2 class="text-xl sm:text-2xl italic font-semibold text-mst_orange">
              {{ $t("streitschlichtung") }}:
            </h2>
            <p>{{ $t("streitschlichtung2") }}</p>
            <p>
              {{ $t("streitschlichtung3") }}
              <a
                href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage"
                class="font-bold text-mst_orange"
                >https://ec.europa.eu</a
              >
            </p>
          </li>

          <li class="w-52 sm:w-[500px] mt-8 mb-8">
            <h2 class="text-xl sm:text-2xl italic font-semibold text-mst_orange">
              {{ $t("haftungInhalte") }}:
            </h2>
            <p>{{ $t("haftungInhalte2") }}</p>
            <br />
            <p>{{ $t("haftungInhalte3") }}</p>
          </li>

          <li class="w-52 sm:w-[500px] mt-8 mb-8">
            <h2 class="text-xl sm:text-2xl italic font-semibold text-mst_orange">
              {{ $t("haftungLink") }}:
            </h2>
            <p>{{ $t("haftungLink2") }}</p>
            <br />
            <p>{{ $t("haftungLink3") }}</p>
          </li>

          <li class="w-52 sm:w-[500px] mt-8 mb-8">
            <h2 class="text-xl sm:text-2xl italic font-semibold text-mst_orange">
              {{ $t("urheberrecht") }}:
            </h2>
            <p>{{ $t("urheberrecht2") }}</p>
            <br />
            <p>{{ $t("urheberrecht3") }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


