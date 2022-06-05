<template>
  <v-app dark>
    <v-app-bar
        dark
        dense
        flat
        fixed
        color="primary"
        app
    >
      <v-toolbar-title>
        <router-link class="cursor-pointer" to="/"><span class="white--text">{{ title }}</span></router-link>
      </v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer
        absolute
        app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: 'Subscription Platform'
    }
  }
}
</script>
