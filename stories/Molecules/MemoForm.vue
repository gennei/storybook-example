<template>
  <div class="memo-form-wrapper">
    <Textlabel text="読書メモ" />
    <div class="text-area-wrapper">
      <FormTextarea />
    </div>
    <AnnotationText text="HTMLタグ使用不可　/　あなた以外は見ることができません" />
  </div>
</template>
<script>
import Textlabel from "../Atoms/Textlabel.vue";
import FormTextarea from "../Atoms/FormTextarea.vue";
import AnnotationText from "../Atoms/AnnotationText.vue";

export default {
  components: {
    Textlabel: Textlabel,
    FormTextarea: FormTextarea,
    AnnotationText: AnnotationText
  }
};
</script>

<style scoped>
.text-area-wrapper {
  margin-top: 10px;
}
</style>