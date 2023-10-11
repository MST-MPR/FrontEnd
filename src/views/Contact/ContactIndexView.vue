<script>
import Input from "../../components/inputs/Input.vue";
import { mapActions } from "vuex";
//import { nanoid } from "nanoid";
import axios from "axios";

export default {
  name: "ContactIndexView",
  components: {
    Input,
  },
  data() {
    return {
      task: {
        //id: "",
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
      //Generate random id
      //this.task.id = nanoid();

      //Delete data
      this.task = {
        name: "",
        email: "",
        message: "",
      };
    },
    /*async submitForm() {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/contact-us-store",
          this.task
        );
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },*/
  },
};
</script>
<template>
  <div class="bg-contact bg-cover w-full">
    <div class="grid grid-row-2 mx-auto w-full h-full xl:w-fit xl:grid-cols-2">
      <div
        class="
          hidden
          w-80
          h-[600px]
          mx-auto
          md:w-[450px] md:h-[600px]
          xl:block xl:h-[800px] xl:py-10 2xl:h-[850px]
        "
      >
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19202.23207521861!2d8.788377599999995!3d53.01534720000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b0d68d4200bf6b%3A0x26d0285757006942!2sMST%20Medien-%20Systemtechnik%20GmbH!5e0!3m2!1sde!2sde!4v1678183789083!5m2!1sde!2sde" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="w-full h-full
      "></iframe>
      </div>
      <div class="w-full mx-auto py-10 md:w-[450px]">
        <div class="p-8 m-auto">
          <h1
            class="
              mb-4
              mx-auto
              text-2xl
              tracking-tight
              font-extrabold
              text-left
              text-mst_white
            "
          >
            MST Medien- Systemtechnik GmbH
          </h1>
          <p class="text-mst_white mb-1 font-light md:text-lg">
            Bremer Straße 63 <br />
            28816 Stuhr <br />
            event@mst-extra.net <br />
            +49 421 20 77 3 0
          </p>

          <!--FORM-->
          <form @submit.prevent="processForm" method="POST" class="space-y-4">
            <Input :task="task" />
          </form>
          <div
            class="
              w-fit
              py-10
              pr-2
              h-[600px]
              mx-auto
              md:w-full md:pl-4
              xl:ml-72 xl:mt-[60px] xl:w-[450px] xl:h-[600px] xl:hidden
              2xl:hidden 2xl:ml-5 2xl:h-[800px]
            "
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4800.1731102126205!2d8.789679!3d53.01880700000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x26d0285757006942!2sMST%20Medien-%20Systemtechnik%20GmbH!5e0!3m2!1ses!2sus!4v1669030223678!5m2!1ses!2sus"
              class="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>