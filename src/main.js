import { createApp } from 'vue'
import './style.css'
import router from './router' 
import PrimeVue from 'primevue/config';
import App from './App.vue'
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const app = createApp(App);

const Noir = definePreset(Aura, {
  semantic: {
    primary: { color: '#01135D' },
    secondary: { color: '#DADADA' },
    colorScheme: {
      light: {
        primary: {
          color: '#01135D',
          inverseColor: '#ffffff',
          hoverColor: '#01135D',
          activeColor: '#01135D',
        },
        highlight: {
          background: '#DADADA',
          focusBackground: '#DADADA',
          color: '#000000',
          focusColor: '#000000',
        },
      },
      dark: {
        primary: {
          color: '#000000',
          inverseColor: '#ffffff',
          hoverColor: '#01135D',
          activeColor: '#01135D',
        },
        highlight: {
          background: '#ffffff',
          focusBackground: '#ffffff',
          color: '#000000',
          focusColor: '#000000',
        },
      },
    },
  },
});
 
app.use(PrimeVue, {
  theme: {
    preset: Noir,
    options: {
      darkModeSelector: false || 'none',
    },
  },
});
app.use(router)
app.mount('#app')


// ********************************************************************************************************


