<template>
    <v-app id="inspire">
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
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="accent--text"/>
            <v-toolbar-title class="accent--text">FixiPay</v-toolbar-title>
            <div class="pl-3">
                <v-img src="./Images/icon3.png" height="50" width="75"/>
            </div>
            <v-flex class="searchbar-positioning">
                <div class="pt-7">
                    <v-text-field rounded solo class="" label="Search" append-icon="fas fa-search"></v-text-field>
                </div>
            </v-flex>
            <div class="px-5">
                <v-btn fab><v-icon class="fas fa-user"></v-icon></v-btn>
            </div>
        </v-app-bar>

        <v-content>
            <v-container class="justify-center d-flex pt-12">
                <v-card width="80%" height="500px" class="elevation-24">

                </v-card>
            </v-container>
            <v-row class="">
                <v-col class="pa-12">
                    <v-card max-width="100%" class="elevation-5">
                        <v-container class="pa-5">
                            <div class="headline primary--text font-weight-bold">Illustrator Specialist</div>
                            <v-row class="pa-3 justify-space-around">
                                <v-card class="elevation-0" max-width="60%">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure
                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt
                                    mollit anim id est laborum.
                                </v-card>
                                <v-card class="elevation-0" max-width="40%">
                                    <v-img src="./Images/Adobe_Illustrator_Icon_CS6.png" height="200"
                                           width="200"></v-img>
                                </v-card>
                            </v-row>
                            <v-divider class="py-3"></v-divider>
                            <v-row class="d-flex justify-end pr-9">
                                <v-btn class="ma-3 secondary--text" outlined>Contact now</v-btn>
                                <v-btn class="ma-3 secondary--text" outlined>Contact now</v-btn>
                            </v-row>
                        </v-container>
                    </v-card>
                </v-col>
                <v-col class="pa-12">
                    <v-card max-width="100%" class="elevation-5">
                        <v-container class="pa-5">
                            <div class="headline primary--text font-weight-bold">Illustrator Specialist</div>
                            <v-row class="pa-3 justify-space-around">
                                <v-card class="elevation-0" max-width="60%">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure
                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt
                                    mollit anim id est laborum.
                                </v-card>
                                <v-card class="elevation-0" max-width="40%">
                                    <v-img src="./Images/logo_brand_brands_logos_adobe_photoshop-512.png"
                                           height="200"
                                           width="200"/>
                                </v-card>
                            </v-row>
                            <v-divider class="py-3"></v-divider>
                            <v-row class="d-flex justify-end pr-9">
                                <v-btn class="ma-3 secondary--text" outlined>Contact now</v-btn>
                                <v-btn class="ma-3 secondary--text" outlined>Contact now</v-btn>
                            </v-row>
                        </v-container>
                    </v-card>
                </v-col>
            </v-row>
            <v-row
                    align="center"
                    justify="center"
            >
                <v-col class="text-center">
                    <v-tooltip left>
                        <template v-slot:activator="{ on }">
                        </template>
                        <span>Source</span>
                    </v-tooltip>

                    <v-tooltip right>
                        <template v-slot:activator="{ on }">
                        </template>
                    </v-tooltip>
                </v-col>
            </v-row>
        </v-content>
        <v-footer
                color="secondary"
                app
        >
            <span class="white--text">&copy; FixiPay 2020 v0.01</span>
        </v-footer>
    </v-app>
</template>

<script>

    export default {
        name: 'App',

        components: {},
        props: {
            source: String,
        },
        data: () => ({
            drawer: false,
        }),
    }
</script>

<style>
    .searchbar-positioning {
        display: flex;
        justify-content: flex-end;
    }
</style>