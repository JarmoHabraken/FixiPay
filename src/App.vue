<template>
    <v-app id="inspire">
        <nav-drawer/>

        <v-content>
            <header-card/>
            <program-cards/>
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
            <page-footer/>
        </v-content>

    </v-app>
</template>

<script>

    import HeaderCard from "./components/HeaderCard";
    import ProgramCards from "./components/ProgramCards";
    import PageFooter from "./components/PageFooter";
    import NavDrawer from "./components/NavDrawer";

    export default {
        name: 'App',

        components: {
            PageFooter,
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