<template>
    <v-app id="inspire">
        <nav-drawer/>

        <v-content>
            <header-card/>
            <program-cards/>
            <v-row class="">
                <v-col class="pa-12">
                    <v-card max-width="100%" class="elevation-5">
                        <v-container class="pa-5">
                            <div class="headline secondary--text font-weight-bold">Illustrator Specialist</div>
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
                            <div class="headline secondary--text font-weight-bold">Illustrator Specialist</div>
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
            <span class="white--text">&copy; FixiPay 2020 v0.02</span>

        </v-footer>
    </v-app>
</template>

<script>

    import HeaderCard from "./components/HeaderCard";
    import ProgramCards from "./components/ProgramCards";
    import NavDrawer from "./components/NavDrawer";

    export default {
        name: 'App',

        components: {
            HeaderCard,
            ProgramCards,
            NavDrawer,
        },
    }
</script>

<style>
    .searchbar-positioning {
        display: flex;
        justify-content: center;
    }
</style>