import { action } from '@storybook/addon-actions'
import Button from './Button.vue'

export default {
  title: 'Button',
  component: Button,
  args: {
    type: 'primary',
    rounded: false,
    default: 'Custom Button'
  },
  argTypes: {
    type: {
      control: { type: 'inline-radio' },
      options: ['primary', 'secondary']
    },
    default: {
      control: 'text',
      table: { category: 'slots', type: { summary: 'VNode[]' } }
    }
  }
}

export const Basic = (_arg, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  methods: {
    onClick: (event) => action('click')(event)
  },
  template: `
    <Button v-bind="$props" @click="onClick">
      {{ $props.default }}
    </Button>
  `
})
