<template>
    <App>
        <v-navigation-drawer
                v-model="drawer"
                app
                color="accent"
        >
            <v-list dense>
                <v-list-item link>
                    <v-list-item-action>
                        <v-icon class="secondary--text">mdi-home</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="secondary--text">Featured</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-action>
                        <v-icon class="secondary--text">mdi-contact-mail</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="secondary--text">Your Profile</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
                app
                color="secondary"
                height="90px"
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="accent--text"/>
            <v-toolbar-title class="accent--text display-1">FixiPay</v-toolbar-title>
            <div class="pl-5">
                <v-img src="../Images/icon4 - kopie.png" height="50" width="90"/>
            </div>
            <v-flex class="searchbar-positioning">
                <div class="pt-7">
                    <v-text-field rounded solo class="" label="Search" append-icon="fas fa-search"
                                  style="width: 750px;"></v-text-field>
                </div>
            </v-flex>
            <div class="px-5">
                <v-btn fab class="accent">
                    <v-icon class="fas fa-user"></v-icon>
                </v-btn>
            </div>
        </v-app-bar>
    </App>
</template>

<script>
    export default {
        name: "NavDrawer.vue",
        props: {
            source: String,
        },
        data: () => ({
            drawer: false,
        }),
    }
</script>

<style scoped>
    .searchbar-positioning {
        display: flex;
        justify-content: center;
    }
</style>