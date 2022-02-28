import { createApp } from 'vue';
import type { App as Root } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import isInIcestark from '@ice/stark-app/lib/isInIcestark';
import getBasename from '@ice/stark-app/lib/getBasename';
import App from './App.vue';
import routes from './routes';


export const history = createWebHistory(isInIcestark() ? getBasename() : '/');
console.log(getBasename(), isInIcestark(), history)

let vue: Root<Element> | null = null;

const runApp = (container: Element | string) => {
  const router = createRouter({
    history,
    routes,
  });
  vue = createApp(App);
  vue.use(router);
  vue.mount(container);
};

if (!isInIcestark()) {
  runApp('#app22');
}

export function mount({ container }: { container: Element}) {
  runApp(container);
}

export function unmount() {
  console.log('on unmounted')
  if (vue) {
    vue.unmount();
  }
}
