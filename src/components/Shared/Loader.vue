<template>
  <v-progress-circular
      indeterminate
      color="primary"
      :width="7"
      :size="70"
      v-if="loading"
  ></v-progress-circular>
</template>

<script>
export default {
  name: "Loader",
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>