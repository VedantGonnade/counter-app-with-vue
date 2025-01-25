<template>
  <div class="flex h-screen items-center justify-center">
    <div class="flex h-56 w-96 flex-col items-center justify-center rounded-md bg-red-800">
      <div>
        <h2 class="mb-8 text-lg font-medium text-white">Counter App</h2>
      </div>
      <div>
        <p class="text-4xl text-white">0</p>
      </div>
      <div class="mt-10 flex items-center justify-center space-x-6">
        <ActionButton text="Subtract" type="subtract" />
        <ActionButton text="Reset" type="reset" />
        <ActionButton text="Add" type="add" />
      </div>
    </div>
  </div>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
export default {
  name: "MainApp",
  components: {
    ActionButton,
  },
};
</script>
