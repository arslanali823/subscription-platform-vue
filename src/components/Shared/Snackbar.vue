<template>
  <v-snackbar
      v-model="snackbar.enable"
  >
    {{ snackbar.text }}

    <template v-slot:action="{ attrs }">
      <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="$store.commit('clearSnackbar')"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>
<script>
export default {
  computed: {
    snackbar() {
      return this.$store.state.snackbar
    }
  }
}
</script>