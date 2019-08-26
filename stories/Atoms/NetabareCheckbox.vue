<template>
  <label class="netabare-annotation-text">
    <input type="checkbox" />
    <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
    {{ text }}
  </label>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
      default: "ネタバレの内容を含む"
    }
  }
};
</script>

<style scoped>
.netabare-annotation-text {
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.2px;
  color: #da4740;
}
.fa-exclamation-triangle {
  color: #da4740;
}
</style>