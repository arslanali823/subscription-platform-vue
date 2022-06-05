<template>
  <v-col cols="6">
    <v-card
        class="mx-auto"
        max-width="400"
        tile
    >
      <template v-if="websites.length">
        <v-chip
            class="d-block text-center font-weight-bold rounded-b-0"
            color="error"
            label
            text-color="white"
        >
          CLICK ON LIST TO SUBSCRIBE
        </v-chip>
        <v-list-item two-line v-for="website in websites" :key="website.slug" @click="$emit('selected-website', website)">
          <v-list-item-content>
            <v-list-item-title>{{ website.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ website.url }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-list-item v-else>
        <v-list-item-content>
          <v-list-item-title>No Website Found!</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "WebsitesList",
  props: ['websites']
}
</script>

<style scoped>

</style>