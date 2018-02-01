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
          | CADASTRE-SE
        v-divider
      outline-btn-toggle.mt-3(
        :items="genders"
        label="Sexo"
        v-model="payload.gender"
        )
      v-text-field.mt-3(
        label="Nome"
        color="white"
        v-model="payload.name"
        )
      v-text-field(
        label="Email"
        type="email"
        color="white"
        v-model="payload.email"
        )
      v-text-field(
        label="Senha"
        color="white"
        v-model="payload.password"
        :append-icon="hidePassword ? 'visibility' : 'visibility_off'"
        :append-icon-cb="() => (hidePassword = !hidePassword)"
        :type="hidePassword ? 'password' : 'text'"
        )
      v-text-field(
        label="Confirme sua senha"
        color="white"
        v-model="payload.password_confirmation"
        :append-icon="hidePassword ? 'visibility' : 'visibility_off'"
        :append-icon-cb="() => (hidePassword = !hidePassword)"
        :type="hidePassword ? 'password' : 'text'"
        )
      v-btn.mt-3(block light large)
        | Enviar Cadastro
      v-layout.mt-3(row align-center)
        v-btn.mr-0(flat block to="/sign-in")
          v-icon.mr-2.mb-1 chevron_left
          | Ja sou cadastrado
</template>

<script>
  import AnimatedSvgIcon from '@/components/AnimatedSvgIcon'
  import OutlineBtnToggle from '@/components/OutlineBtnToggle'

  export default {
    components: {
      AnimatedSvgIcon,
      OutlineBtnToggle
    },
    data () {
      return {
        payload: {
          gender: 'F'
        },
        genders: [
          {
            label: 'Feminino',
            value: 'F'
          },
          {
            label: 'Masculino',
            value: 'M'
          }
        ],
        hidePassword: true
      }
    },
    methods: {
      setGender (gender) {
        this.payload.gender = gender
      }
    }
  }
</script>
