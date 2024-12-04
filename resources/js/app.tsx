import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import React from 'react';

const pages = import.meta.glob('./Pages/**/*.tsx');
createInertiaApp({
  resolve: async name => {
    const page = pages[`./Pages/${name}.tsx`]
    if(!page) {
        throw new Error(`Page not found: ./Pages/${name}.tsx`);
    }
    return (await page()).default;
},
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
});