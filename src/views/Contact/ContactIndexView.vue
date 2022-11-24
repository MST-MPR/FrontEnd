<template>
  <div class="bg-contact bg-cover">
    <div
      class="
        grid
        overflow-hidden
        grid-row-2
        sm:grid-cols-3 sm:ml-[550px] sm:w-fit sm:h-[800px]
      "
    >
      <div class="w-80 h-96 mt-5 ml-5 sm:w-[450px] sm:h-[700px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4800.1731102126205!2d8.789679!3d53.01880700000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x26d0285757006942!2sMST%20Medien-%20Systemtechnik%20GmbH!5e0!3m2!1ses!2sus!4v1669030223678!5m2!1ses!2sus"
          class="w-full h-full"
        ></iframe>
      </div>
      <div class="w-96 sm:w-[450px] sm:h-[650px]">
        <div class="p-8 m-auto">
          <h2
            class="
              mb-4
              mr-4
              sm:mr-0
              text-4xl
              tracking-tight
              font-extrabold
              text-center text-mst_white
            "
          >
            MST Medien- Systemtechnik GmbH
          </h2>
          <p class="text-mst_white mb-1 font-light sm:text-xl">
            Bremer Straße 63 <br />
            28816 Stuhr <br />
            event@mst-extra.net <br />
            +49 421 20 77 3 0
          </p>
          <form action="#" class="space-y-4 mt-5">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-mst_white"
                >Name</label
              >
              <input
                type="email"
                id="email"
                class="
                  shadow-2xl
                  border
                  text-sm
                  rounded-lg
                  block
                  w-72
                  sm:w-full
                  p-2.5
                "
                required
              />
            </div>
            <div>
              <label
                for="subject"
                class="
                  block
                  mb-2
                  text-sm
                  font-medium
                  text-mst_white
                "
                >{{ $t("email") }}</label
              >
              <input
                type="text"
                id="subject"
                class="
                  block
                  p-3
                  w-72
                  sm:w-full
                  text-sm text-gray-900
                  bg-gray-50
                  rounded-lg
                  border border-gray-300
                  shadow-sm
                "
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="
                  block
                  mb-2
                  text-sm
                  font-medium
                  text-mst_white
                "
                >{{ $t("message") }}</label
              >
              <textarea
                id="message"
                rows="6"
                class="
                  block
                  p-2.5
                  w-72
                  sm:w-full
                  text-sm text-gray-900
                  bg-gray-50
                  rounded-lg
                  shadow-sm
                "
              ></textarea>
            </div>
            <button
              type="button"
              class="
                w-36
                text-mst_white
                bg-gradient-to-br
                from-mst_gray
                to-mst_orange
                hover:bg-gradient-to-bl
                focus:ring-2 focus:outline-none focus:ring-mst_orange
                font-medium
                rounded-lg
                text-sm
                px-5
                py-2.5
                text-center
              "
            >
              {{ $t("send") }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>