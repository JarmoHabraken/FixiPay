<template>
    <App>
        <v-container class="justify-center d-flex pt-12">
            <v-card width="95%" height="500px" class="elevation-0">
                <v-row class="justify-space-around">
                    <v-card width="35%" class="elevation-0">
                        <div class="py-5">
                            <div class="pt-12">
                                <v-card class="display-3 pt-12 elevation-0 pl-12 font-weight-medium" max-width="90%">
                                    Fixipay
                                </v-card>
                            </div>
                        </div>
                        <v-card max-width="90%" class="elevation-0 pl-12 display-2 pb-1">
                            Made like magic
                        </v-card>
                        <v-card max-width="90%" class="elevation-0 pl-12 headline pt-12">
                            Here at FixiPay we know starting isn't easy so sometimes you want some help
                        </v-card>
                        <div class="pl-12 pt-5">
                            <v-btn  class="elevation-0 primary pt-5 px-10 pb-10 title" tile>
                                Learn More
                            </v-btn>
                        </div>
                    </v-card>
                    <v-card class="elevation-0 pt-5 pr-12" max-width="40%">
                        <img src="../Images/glenns-afbeelding.png" height="450"/>
                    </v-card>
                </v-row>
            </v-card>
        </v-container>
    </App>
</template>

<script>
    export default {
        name: "ProgramCards.vue"
    }
</script>

<style scoped>

</style>