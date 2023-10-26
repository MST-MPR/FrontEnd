<script>
import Slider from "../../components/app/Slider.vue";
import SliderFacebook from "../../components/app/SliderFacebook.vue";
import Team from "../../components/app/Team.vue";
import Principal from "../../components/app/Principal.vue";
import Grid from "../../components/app/Grid.vue";
import UberUns from "../../components/app/UberUns.vue";
import Partners from "../../components/app/Partners.vue";
import Contact from "../../components/app/Contact.vue";
import Sponsoring from "../../components/app/Sponsoring.vue";

export default {
  components: {
    Slider,
    SliderFacebook,
    Team,
    Principal,
    Grid,
    UberUns,
    Partners,
    Contact,
    Sponsoring
  }
};
</script>

<template id="template">
  <div class="object-fit">
    <Principal />

    <Slider />

    <Grid />

    <SliderFacebook />

    <UberUns />

    <Team />

    <Partners />

    <Contact />

    <Sponsoring />
  </div>
</template>