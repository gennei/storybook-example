<template>
  <div class="rating-input-wrapper">
    <div class="textlabel-wrapper">
      <Textlabel text="評価" />
    </div>
    <div class="stars">
      <Star :id="1" :rank="rank" />
      <Star :id="2" :rank="rank" />
      <Star :id="3" :rank="rank" />
      <Star :id="4" :rank="rank" />
      <Star :id="5" :rank="rank" />
      <div class="clear-button-wrapper">
        <ClearButton />
      </div>
    </div>
  </div>
</template>

<script>
import Textlabel from "../Atoms/Textlabel.vue";
import Star from "../Atoms/Star.vue";
import ClearButton from "../Atoms/ClearButton.vue";

export default {
  components: {
    Textlabel: Textlabel,
    Star: Star,
    ClearButton: ClearButton
  },
  props: {
    rank: {
      type: Number,
      required: true,
      default: 3
    }
  }
};
</script>

<style scoped>
.stars {
  margin-top: 15px;
  display: flex;
}
.clear-button-wrapper {
  margin-left: 15px;
}
</style>
