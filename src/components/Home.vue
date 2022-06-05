<template>
  <v-container>
    <v-row>
      <v-col class="text-center" cols="12">
        <Loader :loading="loading" />
        <Snackbar />
      </v-col>
    </v-row>
    <v-row v-if="!loading">
      <WebsitesList :websites="websites" @selected-website="setSelectedWebsite"/>
      <SubscriptionForm v-if="selectedWebsite" :selectedWebsite="selectedWebsite"/>
    </v-row>
  </v-container>
</template>

<script>
import Snackbar from "@/components/Shared/Snackbar";
import WebsitesList from "@/components/Websites/WebsitesList";
import SubscriptionForm from "@/components/Websites/SubscriptionForm";
import Loader from "@/components/Shared/Loader";

export default {
  name: "Home",
  components: {Loader, SubscriptionForm, WebsitesList, Snackbar},
  computed: {
    websites() {
      return this.$store.state.websites
    },
    loading() {
      return this.$store.state.loading
    },
    snackbar() {
      return this.$store.state.snackbar
    }
  },
  data() {
    return {
      selectedWebsite: null,
    }
  },
  methods: {
    setSelectedWebsite(website) {
      this.selectedWebsite = website
    }
  }
}
</script>
