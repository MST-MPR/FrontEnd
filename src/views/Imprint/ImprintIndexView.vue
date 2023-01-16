<template>
  <div class="h-full w-full">
    <div class="drop-shadow-2xl">
      <h1
        class="
          drop-shadow-2xl
          text-center
          font-extrabold
          text-4xl
          pt-12
          mb-2
          md:text-5xl
          2xl:text-7xl
          text-mst_black
        "
      >
        {{ $t("impressum") }}
      </h1>
    </div>
    <div class="p-10">
      <h2
        class="
          p-5
          text-mst_black
          font-extrabold
          text-lg md:text-center md:p-12 md:mb-2 md:text-xl
          xl:text-left
        "
      >
        MST MEDIEN - SYSTEMTECHNIK GMBH
      </h2>
      <div
        class="ml-10 tracking-wider leading-normal md:leading-loose md:ml-20"
      >
        <ul class="list-disc">
          <li class="mb-8">
            <h2 class="text-xl font-semibold md:text-2xl text-mst_orange">
              {{ $t("anschrift") }}:
            </h2>
            <p>Bremer Straße 63, 28816 Stuhr</p>
          </li>
          <li class="mb-8">
            <h2 class="text-xl font-semibold md:text-2xl text-mst_orange">
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
            <h2 class="text-xl font-semibold md:text-2xl text-mst_orange">
              {{ $t("geschäftsführer") }}:
            </h2>
            <p>Ralf-Peter Franz</p>
          </li>
          <li class="mb-8">
            <h2 class="text-xl font-semibold md:text-2xl text-mst_orange">
              {{ $t("umsatzsteuer") }}:
            </h2>
            <p>DE 2914 55354</p>
          </li>
          <li class="mb-8">
            <h2 class="text-xl font-semibold md:text-2xl text-mst_orange">
              {{ $t("inhaltlich") }}:
            </h2>
            <p>Ralf-Peter Franz</p>
          </li>
        </ul>
      </div>
      <div class="relative flex py-5 items-center w-52 ml-10 md:w-96 md:ml-20">
        <div class="flex-grow border-2 border-mst_orange"></div>
      </div>
      <div
        class="ml-10 tracking-wider leading-normal md:ml-20 md:leading-loose"
      >
        <ul class="list-disc">
          <li class="mt-8 mb-8">
            <h2 class="text-xl font-semibold md:text-2xl text-mst_orange">
              {{ $t("konzeption") }}:
            </h2>
            <p>MST Medien-Systemtechnik GmbH</p>
          </li>
        </ul>
      </div>
      <div class="relative flex py-5 items-center w-52 ml-10 md:w-96 md:ml-20">
        <div class="flex-grow border-2 border-mst_orange"></div>
      </div>
      <div
        class="tracking-wider leading-normal ml-10 md:leading-loose md:ml-20"
      >
        <ul class="list-disc">
          <li class="w-52 mt-8 mb-8 md:w-full">
            <h2 class="text-xl font-semibold md:text-2xl text-mst_orange">
              {{ $t("streitschlichtung") }}:
            </h2>
            <div class="md:pr-12">
              <p>{{ $t("streitschlichtung2") }}</p>
              <p>
                {{ $t("streitschlichtung3") }}
                <a
                  href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage"
                  class="font-bold text-mst_orange"
                  >https://ec.europa.eu</a
                >
              </p>
            </div>
          </li>

          <li class="w-52 mt-8 mb-8 md:w-full">
            <h2 class="text-xl font-semibold md:text-2xl text-mst_orange">
              {{ $t("haftungInhalte") }}:
            </h2>
            <div class="md:pr-12">
              <p>{{ $t("haftungInhalte2") }}</p>
              <br />
              <p>{{ $t("haftungInhalte3") }}</p>
            </div>
          </li>

          <li class="w-52 mt-8 mb-8 md:w-full">
            <h2 class="text-xl font-semibold md:text-2xl text-mst_orange">
              {{ $t("haftungLink") }}:
            </h2>
            <div class="md:pr-12">
              <p>{{ $t("haftungLink2") }}</p>
              <br />
              <p>{{ $t("haftungLink3") }}</p>
            </div>
          </li>

          <li class="w-52 mt-8 mb-8 md:w-full">
            <h2 class="text-xl font-semibold md:text-2xl text-mst_orange">
              {{ $t("urheberrecht") }}:
            </h2>
            <div class="md:pr-12">
              <p>{{ $t("urheberrecht2") }}</p>
              <br />
              <p>{{ $t("urheberrecht3") }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


