<template>
  <div class="flex h-screen items-center justify-center">
    <div class="flex h-56 w-96 flex-col items-center justify-center rounded-md bg-blue-950">
      <div>
        <h2 class="mb-8 text-lg font-medium text-white">Counter App</h2>
      </div>
      <div>
        <p :class="['text-4xl', counterColour]">{{ counter }}</p>
      </div>
      <hr class="my-1 w-4/5 border" />
      <div class="mt-8 flex items-center justify-center space-x-6">
        <ActionButton @click="subtract" text="Subtract" type="subtract" icon="arrow-down" />
        <ActionButton @click="reset" text="Reset" type="reset" icon="spinner" />
        <ActionButton @click="add" text="Add" type="add" icon="arrow-up" />
      </div>
    </div>
  </div>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
import { counter } from "@fortawesome/fontawesome-svg-core";
export default {
  name: "MainApp",
  components: {
    ActionButton,
  },
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    subtract() {
      this.counter--;
    },
    add() {
      this.counter++;
    },
    reset() {
      this.counter = 0;
    },
  },
  computed: {
    counterColour() {
      return {
        "text-green-500": this.counter > 0,
        "text-red-500": this.counter < 0,
        "text-white": this.counter === 0,
      };
    },
  },
};
</script>
