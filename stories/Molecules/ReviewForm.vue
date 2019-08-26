<template>
  <div class="review-form-wrapper">
    <Textlabel text="感想・レビュー" />
    <div class="text-area-wrapper">
      <FormTextarea />
    </div>
    <AnnotationText text="HTMLタグ使用不可" />
    <div class="netabare-checkbox-wrapper">
      <NetabareCheckbox text="ネタバレの内容を含む" />
    </div>
  </div>
</template>
<script>
import Textlabel from "../Atoms/Textlabel.vue";
import FormTextarea from "../Atoms/FormTextarea.vue";
import AnnotationText from "../Atoms/AnnotationText.vue";
import NetabareCheckbox from "../Atoms/NetabareCheckbox.vue";

export default {
  components: {
    Textlabel: Textlabel,
    FormTextarea: FormTextarea,
    AnnotationText: AnnotationText,
    NetabareCheckbox: NetabareCheckbox
  }
};
</script>

<style scoped>
.text-area-wrapper {
  margin-top: 10px;
}
.netabare-checkbox-wrapper {
  margin-top: 15px;
}
</style>