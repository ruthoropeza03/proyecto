import { c as createComponent, m as maybeRenderHead, r as renderTemplate } from '../chunks/astro/server_Dn-3qLGO.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Posts = createComponent(async ($$result, $$props, $$slots) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  const posts = await response.json();
  return renderTemplate`${maybeRenderHead()}<h1>Últimas Publicaciones</h1> <div style="max-width: 800px; margin: 0 auto; display: grid; gap: 2rem;"> ${posts.map((post) => renderTemplate`<article style="border: 1px solid #ddd; padding: 1rem; border-radius: 4px;"> <h2 style="margin-top: 0;">${post.title}</h2> <p>${post.body}</p> </article>`)} </div>`;
}, "C:/Users/USER/proyecto/src/pages/posts.astro", void 0);

const $$file = "C:/Users/USER/proyecto/src/pages/posts.astro";
const $$url = "/posts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Posts,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
