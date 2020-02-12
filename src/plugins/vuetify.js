import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#3f51b5',
                secondary: '#666364',
                accent: '#ffffff',
                error: '#b71c1c',
            },
        },
    },
    icons: {
        iconfont: 'fa',
    },
});