<template lang="pug">
  v-card.login__card(flat dark color="transparent")
    .text-xs-center
      animated-svg-icon.dark(
        v-show="payload.gender === 'F'"
        file="/static/svg/icons/lady.svg"
        )

      animated-svg-icon.dark(
        v-show="payload.gender === 'M'"
        file="/static/svg/icons/gentleman.svg"
        )
    v-card-text
      v-layout(row align-center)
        v-divider
        .headline.text-xs-center.mx-3
          | CADASTRE-SE {{ payload.gender }}
        v-divider
      .mt-3
        label Informe seu sexo:
        v-layout(row align-center)
          v-btn.mr-1(
            dark
            block
            outline
            @click.native="setGender('F')"
            ) Feminino
          v-btn.ml-1(
            dark
            block
            outline
            @click.native="setGender('M')"
            ) Masculino
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
    },
    data () {
      return {
        payload: {
          gender: 'M'
        }
      }
    },
    methods: {
      setGender (gender) {
        this.payload.gender = gender
      }
    }
  }
</script>
