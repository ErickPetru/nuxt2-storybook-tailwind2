<template>
  <button
    class="py-2 px-4 font-semibold text-white"
    :class="classes"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    rounded: {
      type: Boolean,
      default: false
    },

    type: {
      type: String,
      default: 'primary'
    }
  },

  computed: {
    classes() {
      const classes = []

      if (this.rounded) {
        classes.push('rounded-full')
      }

      if (this.type === 'primary') {
        classes.push('bg-blue-500 hover:bg-blue-700')
      } else if (this.type === 'secondary') {
        classes.push('bg-gray-500 hover:bg-gray-700')
      }

      return classes.join(' ')
    }
  }
}
</script>
