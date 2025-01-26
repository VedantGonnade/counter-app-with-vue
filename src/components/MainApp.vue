<template>
  <div class="flex justify-center items-center h-screen">
    <div class="flex flex-col justify-center items-center bg-blue-950 rounded-md w-96 h-56">
      <div>
        <h2 class="mb-8 font-medium text-lg text-white">Counter App</h2>
      </div>
      <div>
        <p :class="['text-4xl', counterColour]">{{ counter }}</p>
      </div>
      <hr class="my-1 border w-4/5" />
      <div class="flex justify-center items-center space-x-6 mt-8">
        <ActionButton @click="subtract" text="Subtract" type="subtract" icon="arrow-down"/>
        <ActionButton @click="reset" text="Reset" type="reset" icon="spinner"/>
        <ActionButton @click="add" text="Add" type="add" icon="arrow-up"/>
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
