<template lang="pug">
  v-card.login__card(flat dark color="transparent")
    .text-xs-center
      animated-svg-icon.dark(file="/static/svg/icons/window-lock.svg")
    v-card-text
      v-layout(row align-center)
        v-divider
        .headline.text-xs-center.mx-3
          | ACESSO RESTRITO
        v-divider
      v-text-field.mt-3(
        color="white"
        label="Email"
        )
      v-text-field(
        color="white"
        label="Senha"
        type="password"
        )
      v-btn.mt-3(block light large)
        | Acessar Sistema
      v-layout.mt-3(row align-center)
        v-btn.mr-0(flat block to="/sign-up")
          v-icon.mr-2.mb-1 add
          | Cadastre-se
        v-btn.mr-0(flat block to="/forgot-password")
          | Esqueci minha senha
          v-icon.ml-2.mb-1 help
</template>

<script>
  import AnimatedSvgIcon from '@/components/AnimatedSvgIcon'

  export default {
    components: {
      AnimatedSvgIcon
    }
  }
</script>
