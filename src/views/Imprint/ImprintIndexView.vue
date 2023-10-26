<script setup>
const pdf = 'mst-agb.pdf';
const route = '../../public/documents/mst-agb.pdf';
</script>

<template>
  <div class="h-full container mx-auto">
    <div class="drop-shadow-2xl">
      <h1 class="
            drop-shadow-2xl
            text-center
            font-extrabold
            text-4xl
            py-10
            mb-2
            md:text-5xl
            2xl:text-7xl
            text-mst_black
          ">
        {{ $t("buttons.impressum") }}
      </h1>
    </div>
    <div class="p-10 w-2/3 mx-auto">
      <h2 class="
            p-5
            text-mst_black
            font-extrabold
            text-lg md:text-center 
            md:pb-14 md:text-xl
            xl:text-left
          ">
        MST MEDIEN - SYSTEMTECHNIK GMBH
      </h2>
      <div class="ml-10 tracking-wider leading-normal md:leading-loose md:ml-20">
        <ul class="list-disc">
          <li class="mb-8">
            <h2 class="text-xl font-semibold md:text-2xl text-mst_orange">
              {{ $t("impressum.anschrift") }}:
            </h2>
            <p>Bremer Straße 63, 28816 Stuhr</p>
          </li>
          <li class="mb-8">
            <h2 class="text-xl font-semibold md:text-2xl text-mst_orange">
              {{ $t("impressum.kontaktdaten") }}:
            </h2>
            <table>
              <tr>
                <td class="pr-4 "><strong>{{ $t("impressum.telefon") }}:</strong></td>
                <td>+49 421 2077 3 0</td>
              </tr>
              <tr>
                <td class="pr-4 "><strong>Fax:</strong></td>
                <td>+49 421 2077 3 91</td>
              </tr>
              <tr>
                <td class="pr-4 "><strong>E-Mail:</strong></td>
                <td><a href="mailto:info@mst-extra.net">info@mst-extra.net</a></td>
              </tr>
              <tr>
                <td class="pr-4"><strong>Web:</strong></td>
                <td><a href="http://www.mst-extra.net">www.mst-extra.net</a></td>
              </tr>
            </table>
          </li>
          <li class="mb-8">
            <h2 class="text-xl font-semibold md:text-2xl text-mst_orange">
              {{ $t("impressum.geschäftsführer") }}:
            </h2>
            <p>Ralf-Peter Franz</p>
          </li>
          <li class="mb-8">
            <h2 class="text-xl font-semibold md:text-2xl text-mst_orange">
              {{ $t("impressum.umsatzsteuer") }}:
            </h2>
            <p>DE 2914 55354</p>
          </li>
          <li class="mb-8">
            <h2 class="text-xl font-semibold md:text-2xl text-mst_orange">
              {{ $t("impressum.inhaltlich") }}:
            </h2>
            <p>Ralf-Peter Franz</p>
          </li>
        </ul>
      </div>
      <div class="relative flex py-5 items-center  ml-10 md:w-96 md:ml-20">
        <div class="flex-grow border-2 border-mst_orange"></div>
      </div>
      <div class="ml-10 tracking-wider leading-normal md:ml-20 md:leading-loose">
        <ul class="list-disc">
          <li class="mt-8 mb-8">
            <h2 class="text-xl font-semibold md:text-2xl text-mst_orange">
              {{ $t("impressum.konzeption") }}:
            </h2>
            <p>MST Medien-Systemtechnik GmbH</p>
          </li>
        </ul>
      </div>
      <div class="relative flex py-5 items-center  ml-10 md:w-96 md:ml-20">
        <div class="flex-grow border-2 border-mst_orange"></div>
      </div>
      <div class="ml-10 tracking-wider leading-normal md:ml-20 md:leading-loose">
        <ul class="list-disc">
          <li class="mt-8 mb-8">
            <p class="text-xl font-semibold md:text-2xl text-mst_orange">
              Allgemeine Geschäftsbedingungen
            </p>
            <a :href="route" :download="pdf">Klicken Sie hier, um das PDF-Dokument herunterzuladen.</a>
          </li>
        </ul>
      </div>
      <div class="relative flex py-5 items-center  ml-10 md:w-96 md:ml-20">
        <div class="flex-grow border-2 border-mst_orange"></div>
      </div>
      <div class="tracking-wider leading-normal ml-10 md:leading-loose md:ml-20">
        <ul class="list-disc">
          <li class=" mt-8 mb-8 md:w-full">
            <h2 class="text-xl font-semibold md:text-2xl text-mst_orange">
              {{ $t("impressum.streitschlichtung") }}:
            </h2>
            <div class="md:pr-12">
              <p>{{ $t("impressum.streitschlichtung2") }} <router-link to="/imprint" class="font-bold text-mst_orange">{{
                $t("impressum.streitschlichtung3") }}</router-link>.</p>
              <p>{{ $t("impressum.streitschlichtung4") }}</p>
              <p>
                {{ $t("streitschlichtung5") }}
                <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage"
                  class="font-bold text-mst_orange" target="_blank">https://ec.europa.eu</a>
              </p>
            </div>
          </li>

          <li class=" mt-8 mb-8 md:w-full">
            <h2 class="text-xl font-semibold md:text-2xl text-mst_orange">
              {{ $t("impressum.haftungInhalte") }}:
            </h2>
            <div class="md:pr-12">
              <p>{{ $t("impressum.haftungInhalte2") }}</p>
              <br />
              <p>{{ $t("impressum.haftungInhalte3") }}</p>
            </div>
          </li>

          <li class=" mt-8 mb-8 md:w-full">
            <h2 class="text-xl font-semibold md:text-2xl text-mst_orange">
              {{ $t("impressum.haftungLink") }}:
            </h2>
            <div class="md:pr-12">
              <p>{{ $t("impressum.haftungLink2") }}</p>
              <br />
              <p>{{ $t("impressum.haftungLink3") }}</p>
            </div>
          </li>

          <li class=" mt-8 mb-8 md:w-full">
            <h2 class="text-xl font-semibold md:text-2xl text-mst_orange">
              {{ $t("impressum.urheberrecht") }}:
            </h2>
            <div class="md:pr-12">
              <p>{{ $t("impressum.urheberrecht2") }}</p>
              <br />
              <p>{{ $t("impressum.urheberrecht3") }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


