<template>
  <span>{{ text }}</span>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
      default: "注意:"
    }
  }
};
</script>

<style scoped>
span {
  font-size: 12px;
  letter-spacing: 0.05px;
  color: #646464;
}
</style>