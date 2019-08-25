<template>
  <img src="https://booklog.jp/img/star/star.png" v-if="visibility" />
  <img src="https://booklog.jp/img/star/unstar.png" v-else />
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
      default: 0
    },
    rank: {
      type: Number,
      required: true,
      default: 0
    }
  },
  computed: {
    visibility: function() {
      return this.rank >= this.id;
    }
  }
};
</script>

<style scoped>
img {
  display: inline-block;
  cursor: pointer;
}
</style>