import { n as __exportAll, t as createComponent } from "./compiler_B3gswyWy.mjs";
import { d as renderHead, f as addAttribute, i as renderComponent, l as renderTemplate } from "./server_B527gEp2.mjs";
import { n as $$Navbar, t as $$Footer } from "./Footer_CmzPpRp4.mjs";
/* empty css                 */
import { t as $$Cta } from "./Cta_DnUluDBw.mjs";
import { createClient } from "@sanity/client";
//#region src/pages/portfolio-web.astro
var portfolio_web_exports = /* @__PURE__ */ __exportAll({
	default: () => $$PortfolioWeb,
	file: () => $$file,
	url: () => $$url
});
var $$PortfolioWeb = createComponent(async ($$result, $$props, $$slots) => {
	const projects = await createClient({
		projectId: "xdo0hyha",
		dataset: "production",
		useCdn: true,
		apiVersion: "2024-01-01"
	}).fetch(`*[
  (_type == "project" || (_type == "recentWork" && isPortfolio == true)) 
  && category match "Web Dev*"
] | order(_createdAt desc){
  title,
  date,
  description,
  "imageUrl": image.asset->url,
  tech,
  projectUrl,
  buttonText
}`);
	return renderTemplate`<html lang="id" class="scroll-smooth"><head><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="Web Development Portfolio - Asyraf"><meta name="author" content="asyraf"><title>Web Dev Portfolio - Asyraf</title><!-- TAILWIND CDN & FONT AWESOME --><script src="https://cdn.tailwindcss.com"><\/script><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"><!-- KONFIGURASI WARNA TAILWIND --><script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'neon-red': '#FF3333',
                        'neon-green': '#33FF33',
                        'neon-cyan': '#33FFFF',
                        'neon-yellow': '#FFFF33',
                    }
                }
            }
        }
    <\/script><!-- CSS NEO-BRUTALISM --><style>
        body {
            color: #000000;
            font-family: 'Courier New', Courier, monospace, sans-serif;
            background-color: #F5F5F5;
        }
        .nb-border-heavy { border: 3px solid #000000 !important; }
        .nb-shadow-black { box-shadow: 6px 6px 0px 0px #000000 !important; }
        .nb-btn-click { transition: transform 0.05s ease, box-shadow 0.05s ease; }
        .nb-btn-click:active {
            transform: translate(6px, 6px);
            box-shadow: 0px 0px 0px 0px #000000 !important;
        }
    </style>${renderHead($$result)}</head><body class="overflow-x-hidden p-4 md:p-8"><!-- 2. PANGGIL KOMPONEN NAVBAR -->${renderComponent($$result, "Navbar", $$Navbar, {})}<!-- HEADER HALAMAN (DIJADIKAN TARGET ACUAN BOUNDARY NAVBAR) --><section id="pageHeader" class="mx-auto max-w-7xl mb-12 pt-28 md:pt-36"><div class="bg-neon-cyan p-8 md:p-12 nb-border-heavy nb-shadow-black text-center relative overflow-hidden"><i class="fas fa-laptop-code absolute -right-10 -bottom-10 text-[200px] text-white opacity-40 -rotate-12"></i><p class="font-black text-lg md:text-xl mb-2 bg-white inline-block px-4 border-2 border-black relative z-10">SELECTED WORKS</p><h1 class="text-5xl md:text-7xl font-black uppercase tracking-tighter relative z-10 text-black">Web Development</h1><p class="font-bold mt-4 max-w-2xl mx-auto text-lg relative z-10 bg-white p-2 border-2 border-black">Kumpulan proyek perancangan dan pengembangan antarmuka website berbasis Front-End dan Back-End.</p></div></section><!-- GRID PROYEK PORTFOLIO --><section class="mx-auto max-w-7xl mb-8"><div class="grid grid-cols-1 md:grid-cols-2 gap-10"><!-- 3. RENDER KARTU PROYEK SECARA DINAMIS DARI SANITY -->${projects.map((project) => renderTemplate`<div class="bg-white nb-border-heavy nb-shadow-black flex flex-col group"><div class="h-64 bg-neutral-300 border-b-4 border-black overflow-hidden relative">${project.imageUrl && renderTemplate`<img${addAttribute(project.imageUrl, "src")}${addAttribute(project.title, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition duration-500">`}<div class="absolute top-4 left-4 bg-neon-yellow border-2 border-black px-3 py-1 font-black text-sm">${project.date}</div></div><div class="p-6 md:p-8 flex-grow flex flex-col"><h2 class="text-3xl font-black mb-2 uppercase leading-tight">${project.title}</h2><p class="font-bold text-gray-700 mb-6 flex-grow">${project.description}</p><div class="flex flex-wrap gap-2 mb-8">${project.tech && project.tech.split("//").map((tag) => renderTemplate`<span class="bg-black text-white text-xs font-black px-2 py-1">${tag.trim()}</span>`)}</div><!-- Tombol Aksi Neo-Brutalisme --><div class="mt-auto">${project.projectUrl && renderTemplate`<a${addAttribute(project.projectUrl, "href")} target="_blank" class="block text-center bg-white text-black font-black px-6 py-3 text-base nb-border-heavy nb-shadow-black nb-btn-click hover:bg-neon-cyan transition-colors w-full uppercase">${project.buttonText || "VISIT WEBSITE"} -></a>`}</div></div></div>`)}<!-- 4. PANGGIL KOMPONEN CTA DI AKHIR GRID -->${renderComponent($$result, "Cta", $$Cta, {})}</div></section><!-- 5. PANGGIL KOMPONEN FOOTER -->${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "D:/web-portfolio/src/pages/portfolio-web.astro", void 0);
var $$file = "D:/web-portfolio/src/pages/portfolio-web.astro";
var $$url = "/portfolio-web";
//#endregion
//#region \0virtual:astro:page:src/pages/portfolio-web@_@astro
var page = () => portfolio_web_exports;
//#endregion
export { page };
