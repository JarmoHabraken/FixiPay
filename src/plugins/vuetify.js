import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
        theme: {
            themes: {
                light: {
                    primary: '#3f51b5',
                    secondary: '#4e56fb',
                    accent: '#ffffff',
                    error: '#b71c1c',
                },
            },
        },
});
