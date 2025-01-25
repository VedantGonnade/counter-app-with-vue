<template>
  <button :class="buttonType">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "Add",
      required: false,
      validator: value => {
        return ["Subtract", "Reset", "Add"].includes(value);
      },
    },
  },

  computed: {
    buttonType() {
      return {
        [this.type.toLowerCase()]: true,
      };
    },
  },
};
</script>

<style scoped>
button {
  @apply rounded-md px-4 py-2;
}

.add {
  @apply bg-green-500 text-white;
}

.subtract {
  @apply bg-red-500 text-white;
}

.reset {
  @apply bg-blue-500 text-white;
}
</style>
