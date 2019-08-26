<template>
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
</template>

<script>
import Star from "../Atoms/Star.vue";
import ClearButton from "../Atoms/ClearButton.vue";

export default {
  components: {
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
  display: flex;
}
.clear-button-wrapper {
  margin-left: 15px;
}
</style>
