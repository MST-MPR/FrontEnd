<script>
import Input from "../../components/inputs/Input.vue"
import {mapActions} from "vuex"
import { nanoid } from 'nanoid'

export default {
  name: "ContactIndexView",
  components: {
    Input
  },
  data() {
    return {
      task: {
        id: "",
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    //Recive an array
    ...mapActions(["setTasks"]),

    processForm() {
      console.log(this.task);

      //Generate random id
        this.task.id = nanoid()
        
      //Delete data
      this.task = {
        name: "",
        email: "",
        message: "",
      };
    },
  },
};
</script>
<template>
  <div class="bg-contact bg-cover">
    <div
      class="
        grid
        overflow-hidden
        grid-row-2
        sm:grid-cols-3 h-[1350px] sm:ml-[550px] sm:w-fit sm:h-[800px]
      "
    >
      <div class="w-80 h-96 mt-5 ml-5 sm:w-[450px] sm:h-[740px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4800.1731102126205!2d8.789679!3d53.01880700000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x26d0285757006942!2sMST%20Medien-%20Systemtechnik%20GmbH!5e0!3m2!1ses!2sus!4v1669030223678!5m2!1ses!2sus"
          class="w-full h-full"
        ></iframe>
      </div>
      <div class="w-96 sm:w-[450px] sm:h-[650px]">
        <div class="p-8 m-auto">
          <h1
            class="
              mb-4
              mr-4
              sm:mr-0
              text-2xl
              tracking-tight
              font-extrabold
              text-left
              text-mst_white
            "
          >
            MST Medien- Systemtechnik GmbH
          </h1>
          <p class="text-mst_white mb-1 font-light sm:text-lg">
            Bremer Straße 63 <br />
            28816 Stuhr <br />
            event@mst-extra.net <br />
            +49 421 20 77 3 0
          </p>

          <!--FORM-->
          <form @submit.prevent="processForm" class="space-y-4 mt-5">
            <Input :task="task" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>