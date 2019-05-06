<template>
    <div class="app-sidebar">
        <v-navigation-drawer
                v-model="drawer"
                permanent
                absolute
        >
            <v-toolbar flat class="transparent">
                <v-list class="pa-0">
                    <v-list-tile avatar>
                        <v-list-tile-avatar>
                            <img src="https://randomuser.me/api/portraits/men/85.jpg">
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>Gezxxxxx</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-toolbar>

            <v-list class="pt-0" dense>
                <v-divider></v-divider>

                <v-list-tile
                        v-for="item in sidebarList"
                        :key="item.title"
                        :to="item.path"
                >
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
    import { subRouter } from "../../router/subRouter";

    export default {
        name: "sidebar",
        data() {
            return {
                drawer: true,
                right: null
            }
        },
        computed: {
            sidebarList() {
                return subRouter
            }
        }
    }
</script>

<style scoped>
    .app-sidebar {
        position: fixed;
        width: 230px;
        height: 100%;
        top: 64px;
        left: 0;
        padding-bottom: 32px;
    }

    .sidebar-menu {
        width: 50px !important;
        padding-left: 0;
    }

    .sidebar-menu > a {
        padding: 10px 5px 10px 15px;
        display: block;
    }
</style>
