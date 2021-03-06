import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#0077ff',
                secondary: '#ffffff',
                accent: '#EBEFF2',
                error: '#b71c1c',
                text: '#000',
            },
        },
    },
    icons: {
        iconfont: 'fa',
    },
});