<template lang="pug">
  .login.primary-gradient
    v-container(fluid fill-height)
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

  .login
    position absolute
    right 0
    top 0
    bottom 0
    left 0
</style>
