<template>
  <v-app dark>
    <v-navigation-drawer
        v-model="drawer"
        :mini-variant="miniVariant"
        :clipped="clipped"
        fixed
        absolute
        temporary
        app
    >
    </v-navigation-drawer>
    <v-app-bar
        dark
        dense
        flat
        :clipped-left="clipped"
        fixed
        color="primary"
        app
    >
      <v-app-bar-nav-icon
          class="hidden-md-and-up"
          @click.stop="drawer = !drawer"/>
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
        :absolute="!fixed"
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
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      title: 'Subscription Platform'
    }
  }
}
</script>
