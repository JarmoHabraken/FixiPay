import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#4e56fb',
                secondary: '#ffffff',
                accent: '#666364',
                error: '#b71c1c',
            },
        },
    },
    icons: {
        iconfont: 'fa',
    },
});