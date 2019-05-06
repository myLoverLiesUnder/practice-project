<template>
    <v-toolbar
            class="app-header"
            color="cyan"
            dark
            app
            fixed>
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
            <!--<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>-->
            <span class="hidden-sm-and-down">I'm Iron Man</span>
        </v-toolbar-title>
        <v-text-field
                flat
                solo-inverted
                hide-details
                prepend-inner-icon="search"
                label="Search"
                class="hidden-sm-and-down"
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-btn icon large>
            <v-avatar size="32px" tile>
                <img
                        src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
                        alt="Vuetify"
                >
            </v-avatar>
        </v-btn>
    </v-toolbar>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    .app-header {
        position: fixed;
        width: 100%;
    }
</style>
