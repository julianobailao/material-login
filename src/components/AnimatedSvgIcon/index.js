import Vivus from 'vivus'

export default {
  props: {
    file: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 128
    },
    duration: {
      type: Number,
      default: 100
    },
    type: {
      type: String,
      default: 'oneByOne'
    }
  },
  computed: {
    iconId () {
      return 'icon-' + this._uid
    }
  },
  methods: {
    loadIcon () {
      return new Vivus(
        this.iconId,
        {
          type: this.type,
          duration: this.duration,
          file: this.file,
          onReady: (icon) => {
            icon.el.setAttribute('width', this.size)
            icon.el.setAttribute('height', this.size)
          }
        }, (icon) => {
          icon.el.classList.add('loaded')
        }
      )
    }
  },
  render (h) {
    let props = {
      id: 'this.iconId',
      class: 'animated-svg-icon',
      'v-observe-visibility': 'loadIcon'
    }

    return h(this.file, props, this.$slots.default)
  }
}

/* <style lang="stylus">
  .animated-svg-icon
    &.dark
      svg
        #Black
          path,
          polygon
            stroke #FFF

    svg
      #Black
        path,
        polygon
          stroke #333

    #Frames-24px
      display none
</style> */
