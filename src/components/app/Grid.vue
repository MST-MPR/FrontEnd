<template>
  <div class="w-full h-full border-y-4 border-mst_orange py-20 sm:p-32">
    <div class="
            grid grid-cols-1
            h-fit
            place-items-center
            gap-10
            sm:grid-cols-2
            xl:grid-cols-5 xl:gap-60 2xl:px-28
            2xl:gap-72
          ">
      <div class="
              flex
              justify-center
              w-[200px]
              h-[200px]
              shadow-2xl
              place-items-center
              md:h-[400px] md:w-[220px]
              2xl:w-[300px] 2xl:h-[500px]
              shadow-mst_black
            ">
        <div class="grid overflow-hidden">
          <div class="box">
            <div class="place-content-center">
              <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="
                      w-10
                      h-10
                      stroke-2
                      stroke-mst_orange
                      mb-2
                      mx-auto
                      2xl:mb-10
                    ">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
              </svg>
              <h1 class="
                      text-center
                      font-normal
                      tracking-wide
                      text-4xl
                      hidden
                      md:block md:text-3xl
                      2xl:text-4xl 2xl:visible 2xl:mb-5
                    ">
                Full service
              </h1>
            </div>
          </div>
          <div class="box">
            <div class="
                    p-4
                    h-52
                    text-center
                    tracking-wide
                    hidden
                    md:text-sm
                    2xl:text-base
                    md:block md:visible
                  ">
              <p>
                {{ $t("home.fullServiceGrid") }}
              </p>
            </div>
          </div>
          <div class="mx-auto mt-5">
            <router-link to="/fullService" type="button" class="
                    w-36
                    text-mst_white
                    bg-gradient-to-br
                    from-mst_gray
                    to-mst_orange
                    hover:bg-gradient-to-bl
                    focus:ring-2 focus:outline-none focus:ring-mst_orange
                    font-medium
                    rounded-lg
                    px-5
                    py-2.5
                    text-center
                  ">
              FULL SERVICE
            </router-link>
          </div>
        </div>
      </div>
      <div class="
              flex
              justify-center
              w-[200px]
              h-[200px]
              shadow-2xl
              shadow-mst_black
              place-items-center
              md:h-[400px] md:w-[220px]
              2xl:w-[300px] 2xl:h-[500px]
            ">
        <div class="grid overflow-hidden">
          <div class="box">
            <div class="place-content-center">
              <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="
                      w-10
                      h-10
                      stroke-2
                      stroke-mst_orange
                      mb-2
                      mx-auto
                      2xl:mb-10
                    ">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>

              <h1 class="
                      text-center
                      font-normal
                      tracking-wide
                      text-4xl
                      hidden
                      md:block md:text-3xl
                      2xl:text-4xl 2xl:visible 2xl:mb-5
                    ">
                {{ $t("header.verkaufH") }}
              </h1>
            </div>
          </div>
          <div class="box">
            <div class="
                    p-4
                    h-52
                    text-center
                    tracking-wide
                    hidden
                    md:text-sm
                    2xl:text-base
                    md:block md:visible
                  ">
              <p>
                {{ $t("home.verkaufGrid") }}
              </p>
            </div>
          </div>
          <div class="mx-auto mt-5">
            <router-link to="/sale" type="button" class="
                    w-36
                    text-mst_white
                    bg-gradient-to-br
                    from-mst_gray
                    to-mst_orange
                    hover:bg-gradient-to-bl
                    focus:ring-2 focus:outline-none focus:ring-mst_orange
                    font-medium
                    rounded-lg
                    px-5
                    py-2.5
                    text-center
                  ">
              {{ $t("buttons.verkauf") }}
            </router-link>
          </div>
        </div>
      </div>

      <div class="
              flex
              justify-center
              w-[200px]
              h-[200px]
              shadow-2xl
              place-items-center
              md:h-[400px] md:w-[220px]
              2xl:w-[300px] 2xl:h-[500px]
              shadow-mst_black
            ">
        <div class="grid overflow-hidden">
          <div class="box">
            <div class="place-content-center">
              <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="
                      w-10
                      h-10
                      stroke-2
                      stroke-mst_orange
                      mb-2
                      mx-auto
                      2xl:mb-10
                    ">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
              </svg>

              <h1 class="
                      text-center
                      font-normal
                      tracking-wide
                      text-4xl
                      hidden
                      md:block md:text-3xl
                      2xl:text-4xl 2xl:visible 2xl:mb-5
                    ">
                {{ $t("header.vermietungH") }}
              </h1>
            </div>
          </div>
          <div class="box">
            <div class="
                    p-4
                    h-52
                    text-center
                    tracking-wide
                    hidden
                    md:text-sm md:block md:visible
                    2xl:text-base
                  ">
              <p>
                {{ $t("home.vermietungGrid") }}
              </p>
            </div>
          </div>
          <div class="mx-auto mt-5">
            <router-link to="/rental" type="button" class="
                    w-36
                    text-mst_white
                    bg-gradient-to-br
                    from-mst_gray
                    to-mst_orange
                    hover:bg-gradient-to-bl
                    focus:ring-2 focus:outline-none focus:ring-mst_orange
                    font-medium
                    rounded-lg
                    px-5
                    py-2.5
                    text-center
                  ">
              {{ $t("buttons.vermietung") }}
            </router-link>
          </div>
        </div>
      </div>
      <div class="
              flex
              justify-center
              w-[200px]
              h-[200px]
              shadow-2xl
              place-items-center
              md:h-[400px] md:w-[220px]
              2xl:w-[300px] 2xl:h-[500px]
              shadow-mst_black
            ">
        <div class="grid overflow-hidden">
          <div class="box">
            <div class="place-content-center">
              <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="
                      w-10
                      h-10
                      stroke-2
                      stroke-mst_orange
                      mb-2
                      mx-auto
                      2xl:mb-10
                    ">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
              </svg>

              <h1 class="
                      text-center
                      font-normal
                      tracking-wide
                      text-4xl
                      hidden
                      md:block md:text-3xl
                      2xl:text-4xl 2xl:visible 2xl:mb-5
                    ">
                Streaming
              </h1>
            </div>
          </div>
          <div class="box">
            <div class="
                    p-4
                    h-52
                    text-center
                    tracking-wide
                    hidden
                    md:text-sm md:block md:visible
                    2xl:text-base
                  ">
              <p>
                {{ $t("home.streamingGrid") }}
              </p>
            </div>
          </div>
          <div class="mx-auto mt-5">
            <router-link to="/streaming" type="button" class="
                    w-36
                    text-mst_white
                    bg-gradient-to-br
                    from-mst_gray
                    to-mst_orange
                    hover:bg-gradient-to-bl
                    focus:ring-2 focus:outline-none focus:ring-mst_orange
                    font-medium
                    rounded-lg
                    px-5
                    py-2.5
                    text-center
                  ">
              STREAMING
            </router-link>
          </div>
        </div>
      </div>
      <div class="
              m-0
              flex
              justify-center
              w-[200px]
              h-[200px]
              shadow-2xl
              place-items-center
              sm sm:col-span-2
              md:h-[400px] md:w-[220px]
              xl:col-span-1
              2xl:w-[300px] 2xl:h-[500px]
              shadow-mst_black
            ">
        <div class="grid overflow-hidden">
          <div class="box">
            <div class="place-content-center">
              <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="
                      w-10
                      h-10
                      stroke-2
                      stroke-mst_orange
                      mb-2
                      mx-auto
                      2xl:mb-10
                    ">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>

              <h1 class="
                      text-center
                      font-normal
                      tracking-wide
                      text-4xl
                      hidden
                      md:block md:text-3xl
                      2xl:text-4xl 2xl:visible 2xl:mb-5
                    ">
                Smart Home
              </h1>
            </div>
          </div>
          <div class="box">
            <div class="
                    p-4
                    h-52
                    text-center
                    tracking-wide
                    hidden
                    md:text-sm md:block md:visible
                    2xl:text-base
                  ">
              <p>
                {{ $t("home.smartHomeGrid") }}
              </p>
            </div>
          </div>
          <div class="mx-auto mt-5">
            <router-link to="/smartHome" type="button" class="
                    w-36
                    text-mst_white
                    bg-gradient-to-br
                    from-mst_gray
                    to-mst_orange
                    hover:bg-gradient-to-bl
                    focus:ring-2 focus:outline-none focus:ring-mst_orange
                    font-medium
                    rounded-lg
                    px-5
                    py-2.5
                    text-center
                  ">
              SMART HOME
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>