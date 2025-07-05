import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro, d as renderComponent } from '../chunks/astro/server_Dn-3qLGO.mjs';
import 'kleur/colors';
import { $ as $$Header } from '../chunks/Header_D3bhzuHx.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Counter = createComponent(($$result, $$props, $$slots) => {
  const initialCount = 0;
  return renderTemplate(_a || (_a = __template(["", '<div id="counter-container" data-astro-cid-x63rdsgb> <p data-astro-cid-x63rdsgb>Contador: <span id="count-value" data-astro-cid-x63rdsgb>', `</span></p> <button id="increment-btn" type="button" data-astro-cid-x63rdsgb>Incrementar</button> <button id="decrement-btn" type="button" data-astro-cid-x63rdsgb>Decrementar</button> </div> <script>
// Este c\xF3digo se ejecuta en el cliente
if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        const countElement = document.getElementById('count-value');
        const incrementBtn = document.getElementById('increment-btn');
        const decrementBtn = document.getElementById('decrement-btn');
        
        let count = parseInt(countElement.textContent);
        
        incrementBtn.addEventListener('click', () => {
            count++;
            countElement.textContent = count;
        });
        
        decrementBtn.addEventListener('click', () => {
            count--;
            countElement.textContent = count;
        });
    });
}
<\/script> `])), maybeRenderHead(), initialCount);
}, "C:/Users/USER/proyecto/src/components/Counter.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const nombre = "Mundo";
  const visitas = 1e3;
  return renderTemplate`${renderComponent($$result, "Header", $$Header, {})} ${maybeRenderHead()}<h1>Hola, ${nombre}!</h1> <p>Bienvenido a mi sitio Astro desplegado en Vercel</p> <p>Visitas totales: ${visitas.toLocaleString()}</p> ${renderComponent($$result, "Counter", $$Counter, {})} <section> <h2>Características de Astro</h2> <ul> <li>Rápido</li> <li>Moderno</li> <li>Fácil de usar</li> </ul> </section> <div style="margin-top:2rem;"> <button onclick="window.location.href='/test-db'" style="padding: 0.75rem 1.5rem; background: #0070f3; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 1rem;">
Probar conexión a la base de datos
</button> </div>`;
}, "C:/Users/USER/proyecto/src/pages/index.astro", void 0);

const $$file = "C:/Users/USER/proyecto/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
