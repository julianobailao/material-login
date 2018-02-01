<template lang="pug">
  .outline-btn-toggle
    label(v-if="label") {{ label }}
    v-container.pa-0(fluid grid-list-lg)
      v-layout(row align-center)
        v-flex(
          xs6
          v-for="item in items"
          :key="item.value"
          )
          v-btn(
            block
            :color="color"
            :light="selectedOption === item.value"
            :dark="selectedOption !== item.value"
            :outline="selectedOption !== item.value"
            @click.native="setValue(item.value)"
            )
            | {{ item.label }}
</template>

<script>
  import AnimatedSvgIcon from '@/components/AnimatedSvgIcon'

  export default {
    props: {
      dark: {
        type: [String, Boolean],
        default: false
      },
      label: {
        type: String
      },
      color: {
        type: String,
        default: 'white'
      },
      items: {
        type: Array,
        required: true
      },
      value: String
    },
    components: {
      AnimatedSvgIcon
    },
    data () {
      return {
        selectedOption: this.value
      }
    },
    methods: {
      setValue (value) {
        this.selectedOption = value
        this.$emit('input', value)
      }
    }
  }
</script>
