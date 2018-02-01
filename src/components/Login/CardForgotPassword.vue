<template lang="pug">
  v-card.login__card(flat dark color="transparent")
    .text-xs-center
      animated-svg-icon.dark(file="/static/svg/icons/shield.svg")
    v-card-text
      v-layout(row align-center)
        v-divider
        .headline.text-xs-center.mx-3
          | ESQUECI MINHA SENHA
        v-divider
      .mt-3
        | Informe seu e-mail no campo abaixa para inciar o
        | processo de recuperação de senha:
      v-text-field.mt-3(
        color="white"
        label="Email"
        )
      v-btn.mt-3(block light large)
        | Recuperar senha
      v-layout.mt-3(row align-center)
        v-btn.ma-0(flat to="/login")
          v-icon(left) chevron_left
          | Voltar para login
</template>

<script>
  import AnimatedSvgIcon from '@/components/AnimatedSvgIcon'

  export default {
    components: {
      AnimatedSvgIcon
    }
  }
</script>
