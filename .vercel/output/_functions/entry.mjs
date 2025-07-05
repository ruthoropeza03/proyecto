import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_4k8LlGcu.mjs';
import { manifest } from './manifest_B_EZLluW.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/api/contact.astro.mjs');
const _page3 = () => import('./pages/api/test-db.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/contacts.astro.mjs');
const _page6 = () => import('./pages/posts.astro.mjs');
const _page7 = () => import('./pages/results.astro.mjs');
const _page8 = () => import('./pages/test-db.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.md", _page1],
    ["src/pages/api/contact.ts", _page2],
    ["src/pages/api/test-db.ts", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/contacts.astro", _page5],
    ["src/pages/posts.astro", _page6],
    ["src/pages/results.astro", _page7],
    ["src/pages/test-db.astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "15287107-8324-4397-ad27-13ccbf82bac9",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
