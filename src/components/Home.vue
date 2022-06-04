<template>
  <v-container>
    <v-row>
      <v-col class="col-12 text-center">
        <h1 class="primary--text">Subscription Platform</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <v-progress-circular
            indeterminate
            color="primary"
            :width="7"
            :size="70"
            v-if="loading"
        ></v-progress-circular>
      </v-col>
    </v-row>
    <v-row v-if="!loading">
      <v-col>
        <v-card class="mx-auto" max-width="400">
          <v-list>
            <template v-if="websites.length">
              <v-list-item two-line v-for="website in websites" :key="website.slug">
                <v-list-item-title v-text="website.title"></v-list-item-title>
                <v-list-item-subtitle v-text="website.description"></v-list-item-subtitle>
              </v-list-item>
            </template>
            <v-list-item v-else>
              <v-list-item-title>No Website Found!</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  computed: {
    websites() {
      return this.$store.getters.websites
    },
    loading() {
      return this.$store.getters.loading
    }
  }
}
</script>
