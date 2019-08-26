<template>
  <p class="label">{{ text }}</p>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
      default: "ラベル"
    }
  }
};
</script>

<style scoped>
.label {
  margin: 0;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.06px;
  color: #1e1e1e;
}
</style>