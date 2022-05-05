require('./bootstrap');

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';

// naive-ui
import naive from 'naive-ui'

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./Pages/${name}.vue`),
    setup({ el, app, props, plugin }) {
        const vueApp = createApp({ render: () => h(app, props) }) 

        // naive-ui
        vueApp.use(naive)

        // Mount
        vueApp.use(plugin)
        vueApp.mixin({ methods: { route } })
        vueApp.mount(el);

        // Return vue app
        return vueApp;
    },
});

InertiaProgress.init({ color: '#4B5563' });
