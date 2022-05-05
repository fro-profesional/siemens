<template>
  <n-input
    class="w-full max-w-2xl mx-auto"
    placeholder="Buscar.."
    round
    size="large"
  >
    <template #suffix>
      <i class="fas fa-search"></i>
    </template>
  </n-input>
</template>

<script >
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    return {
      selectOptions: ref([
        {
          label: "option",
          value: "option",
        },
      ]),
      cascaderOptions: ref([
        {
          label: "option-1",
          value: "option-1",
          children: [
            {
              label: "option-1-1",
              value: "option-1-1",
            },
          ],
        },
      ]),
    };
  },
});
</script>