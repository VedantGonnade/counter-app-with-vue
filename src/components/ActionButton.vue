<template>
  <button :class="buttonType">
    <font-awesome-icon :icon="['fas', this.icon]" class="mr-1 mt-1" />
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
        return ["subtract", "reset", "add"].includes(value);
      },
    },
    icon: {
      type: String,
      required: true,
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
  @apply rounded-md px-4 py-2 font-medium;
}

.add {
  @apply bg-green-500 text-white;
}

.subtract {
  @apply bg-red-500 text-white;
}

.reset {
  @apply bg-slate-200 text-black;
}
</style>
