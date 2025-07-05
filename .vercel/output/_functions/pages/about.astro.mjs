import { c as createComponent, b as createAstro, e as renderHead, d as renderComponent, f as renderSlot, r as renderTemplate, u as unescapeHTML } from '../chunks/astro/server_Dn-3qLGO.mjs';
import 'kleur/colors';
import { $ as $$Header } from '../chunks/Header_D3bhzuHx.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderSlot($$result, $$slots["default"])} <!-- Aquí se inyectará el contenido de las páginas --> </main> <footer style="margin-top: 2rem; padding: 1rem; background-color: #f0f0f0;">
© 2025 blablabla
</footer> </body></html>`;
}, "C:/Users/USER/proyecto/src/layouts/Layout.astro", void 0);

const html = () => "<h1 id=\"sobre-este-proyecto\">Sobre este proyecto</h1>\n<p>Este es un sitio web creado con Astro y desplegado en Vercel.</p>\n<h2 id=\"características-principales\">Características principales</h2>\n<ul>\n<li>Rendimiento óptimo</li>\n<li>Fácil de mantener</li>\n<li>Moderno y rápido</li>\n</ul>\n<h2 id=\"tecnologías-utilizadas\">Tecnologías utilizadas</h2>\n<ul>\n<li>Astro</li>\n<li>JavaScript</li>\n<li>HTML/CSS</li>\n</ul>";

				const frontmatter = {"title":"Acerca de Nosotros","layout":"../layouts/Layout.astro"};
				const file = "C:/Users/USER/proyecto/src/pages/about.md";
				const url = "/about";
				function rawContent() {
					return "   \r\n                         \r\n                               \r\n   \r\n\r\n# Sobre este proyecto\r\n\r\nEste es un sitio web creado con Astro y desplegado en Vercel.\r\n\r\n## Características principales\r\n\r\n- Rendimiento óptimo\r\n- Fácil de mantener\r\n- Moderno y rápido\r\n\r\n## Tecnologías utilizadas\r\n\r\n- Astro\r\n- JavaScript\r\n- HTML/CSS";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"sobre-este-proyecto","text":"Sobre este proyecto"},{"depth":2,"slug":"características-principales","text":"Características principales"},{"depth":2,"slug":"tecnologías-utilizadas","text":"Tecnologías utilizadas"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$Layout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    Content,
    compiledContent,
    default: Content,
    file,
    frontmatter,
    getHeadings,
    rawContent,
    url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
