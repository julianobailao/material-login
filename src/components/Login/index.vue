<template lang="pug">
  v-container.login.primary-gradient(fluid fill-height)
    v-layout(align-center justify-center)
      .circle
      v-flex(
        xs12
        md6
        lg4
        xl3
        )
        v-slide-y-transition(mode="out-in")
          router-view
</template>

<script>
  export default {
    //
  }
</script>

<style lang="stylus">
  .primary-gradient
    background-image linear-gradient(90deg, #8658eb, #6831e4)
</style>
