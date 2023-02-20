<template>
  <v-app :theme="theme">
    <v-app-bar id="topnav" density="compact">
      <template v-slot:prepend>
        <v-btn variant="flat" @click="drawer = !drawer">
          <v-icon start icon="fas fa-bars"></v-icon> Menu
        </v-btn>
      </template>
      
      <v-app-bar-title><a class="logobrand" href="/">
          <v-icon start icon="fas fa-user-group"></v-icon>Here2Mingle
        </a></v-app-bar-title>

      <v-text-field density="compact" variant="solo" label="Search" append-inner-icon="fas fa-search" single-line
        hide-details @click:append-inner="onClick"></v-text-field>
      <v-spacer></v-spacer>

      <div class="d-flex align-center flex-column flex-sm-row fill-height">
        <v-col>
          <v-btn :prepend-icon="theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'" @click="onClick"></v-btn>
        </v-col>
        <v-col>
          <v-menu :location="location" transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <v-btn variant="flat" v-bind="props">
                <v-icon start icon="fas fa-bell"></v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item title="" value="" href="/"></v-list-item>
              <v-divider></v-divider>
              <v-list-item title="All Notifications" value="notifications" href="/admin/user/notifications">
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>

        <v-col>
          <ecosystemmenu />
        </v-col>
        <v-col>
          <v-menu :location="location" transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <v-btn variant="flat" v-bind="props">
                <v-icon start icon="fas fa-user-circle"></v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item title="My Account" value="my account" href="/admin/user/"></v-list-item>
              <v-list-item title="Logout" value="logout" href="/logout"></v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </div>
    </v-app-bar>

    <v-main>
      <v-card>
        <v-layout>
          <v-navigation-drawer class="sidebarSection" v-model="drawer" temporary>
            <v-list-item prepend-icon="fas fa-user-circle" title="Profile" value="Profile" style="color: red" nav>
              <template v-slot:append>
                <v-btn variant="text" icon="fas fa-chevron-left" @click.stop="rail = !rail"></v-btn>
              </template>
            </v-list-item>

            <v-list-item prepend-icon="fas fa-feather" title="Home" value="Home" color="blue" href="/"></v-list-item>
            <v-list-item prepend-icon="fas fa-rss" title="Newsfeed" value="Newsfeed" style="color: aqua" href="/Social/Newsfeed"></v-list-item>
            <v-list-item prepend-icon="fas fa-users" title="Members" value="Members" style="color: indianred" href="/Social/Members"></v-list-item>
            <v-list-item prepend-icon="fas fa-user-plus" title="Friends" value="Friends" style="color: orange" href="/Social/Friends"></v-list-item>
            <v-list-item prepend-icon="fas fa-users-line" title="Groups" value="Groups" style="color: orangered" href="/Social/Groups"></v-list-item>
            <v-list-item prepend-icon="fas fa-video" title="Watch" value="Watch" style="color: purple" href="/Features/Watch"></v-list-item>
            <v-list-item prepend-icon="fas fa-headphones" title="Audioroom" value="Audioroom" style="color: brown" href="/Features/Audioroom"></v-list-item>
            <v-list-item prepend-icon="fas fa-tv" title="Channels" value="Channels" style="color: yellowgreen" href="/Features/Channels"></v-list-item>
            <v-list-item prepend-icon="fas fa-gamepad" title="Games" value="Games" style="color: green" href="/Features/Games"></v-list-item>
            <v-list-item prepend-icon="fas fa-newspaper" title="News" value="News" style="color: rebeccapurple" href="/Features/News"></v-list-item>
            <v-list-item prepend-icon="fas fa-comment-dots" title="Messages" value="Messages" style="color: tomato" href="/Chat/Messages"></v-list-item>
            <v-divider></v-divider>

            <h5>Shop</h5>
            <v-list-item prepend-icon="fas fa-shopping-cart" title="Shop" value="Shop" style="color: tan" href="/Shop/"></v-list-item>
            <v-divider></v-divider>

            <h5>The Mind</h5>
            <v-list-item prepend-icon="fas fa-star-half-stroke" title="The Rant" value="The Rant" style="color: gray" href="/Social/therant/"></v-list-item>
            <v-list-item prepend-icon="fas fa-spa" title="Mental Health Awareness" value="Mental Health Awareness" style="color: blueviolet" href="/Features/mentalawareness/"></v-list-item>
            <v-divider></v-divider>
            <v-spacer></v-spacer>

              <div class="pa-2">
                <v-btn block>
                  Logout
                </v-btn>
              </div>
          </v-navigation-drawer>
          <v-main id="sidebarNav"></v-main>
          <main id="mainSection">
            <slot />
          </main>
        </v-layout>
      </v-card>
      <FooterNav />
    </v-main>
  </v-app>
</template>

<script>
import search from '../components/Search/search.vue'
import ecosystemmenu from '../components/Menus/ecosystemmenu.vue'

  export default {
  components: { ecosystemmenu, search },
    data() {
      return {
        drawer: null,
        location: 'bottom',
        rail: true,
        loaded: false,
        loading: false,
      }
    },

    methods: {
      onClick() {
        this.loading = true

        setTimeout(() => {
          this.loading = false
          this.loaded = true
        }, 2000)
      },
    },
  }
</script>

<script setup>
  import {
    ref
  } from 'vue'

  const theme = ref('light')

  function onClick() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  };

</script>