<template>
  <v-col cols="6">
    <v-card
        class="mx-auto"
        tile
    >
      <template v-if="selectedWebsite">
        <v-chip
            class="d-block text-center font-weight-bold rounded-b-0"
            color="error"
            label
            text-color="white"
        >
          SUBSCRIPTION FORM - {{ selectedWebsite.title }}
        </v-chip>
        <v-col cols="12">
          <v-form ref="form" v-model="valid">
            <v-row>
              <v-col cols="12">
                <v-text-field
                    type="text"
                    name="name"
                    label="Name"
                    id="name"
                    v-model="name"
                    placeholder="Enter Name"
                    :rules="[rules.required]"></v-text-field>
                <template v-if="errors != null && errors.hasOwnProperty('name')">
                  <div class="v-messages theme--light error--text" v-for="err in errors.name" :key="err">
                    {{ err }}
                  </div>
                </template>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field
                    type="email"
                    name="email"
                    label="Email"
                    placeholder="example@domain.com"
                    id="email"
                    v-model="email"
                    :rules="[rules.required, rules.email]"></v-text-field>
                <template v-if="errors != null && errors.hasOwnProperty('email')">
                  <div class="v-messages theme--light error--text" v-for="err in errors.email" :key="err">
                    {{ err }}
                  </div>
                </template>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-btn
                    color="error"
                    class="float-left rounded-0"
                    @click="reset"
                >
                  Reset
                </v-btn>
                <v-btn
                    color="primary"
                    class="float-right rounded-0"
                    @click="onSubscribe"
                    :disabled="!valid">
                  Subscribe
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
      </template>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: ['selectedWebsite'],
  computed: {
    errors() {
      return this.$store.state.errors
    }
  },
  data() {
    return {
      name: '',
      email: '',
      valid: false,
      rules: {
        required: value => !!value || 'Required.',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      }
    }
  },
  methods: {
    onSubscribe() {
      if (!this.$refs.form.validate()) {
        return false
      }

      this.$store.dispatch('subscribe', {
        slug: this.selectedWebsite.slug,
        name: this.name,
        email: this.email,
      })
    },
    reset() {
      this.$refs.form.reset()
    }
  }
}
</script>