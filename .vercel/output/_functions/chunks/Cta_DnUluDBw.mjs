import { t as createComponent } from "./compiler_B3gswyWy.mjs";
import { b as createAstro, f as addAttribute, l as renderTemplate, u as maybeRenderHead } from "./server_B527gEp2.mjs";
//#region src/components/Cta.astro
createAstro("https://astro.build");
var $$Cta = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Cta;
	const currentPath = Astro.url.pathname;
	const displayedSkills = [
		{
			title: "WEB DEVELOPMENT ->",
			url: "/portfolio-web",
			hoverClass: "hover:bg-neon-cyan hover:text-black"
		},
		{
			title: "DATA ANALYST ->",
			url: "/portfolio-data",
			hoverClass: "hover:bg-neon-red hover:text-white"
		},
		{
			title: "DIGITAL MARKETING ->",
			url: "/portfolio-marketing",
			hoverClass: "hover:bg-neon-green hover:text-black"
		}
	].filter((skill) => !currentPath.includes(skill.url));
	return renderTemplate`${maybeRenderHead($$result)}<div class="bg-neon-yellow nb-border-heavy nb-shadow-black flex flex-col justify-center items-center text-center p-8 border-dashed border-4"><h2 class="text-4xl font-black mb-4 uppercase">Want to see<br>other skills?</h2><p class="font-bold mb-8">Jelajahi keahlian saya di bidang lain untuk melihat gambar besar dari apa yang bisa saya bangun untuk bisnis Anda.</p><div class="flex flex-col w-full gap-4"><!-- 4. Mencetak tombol yang tersisa secara otomatis -->${displayedSkills.map((skill) => renderTemplate`<a${addAttribute(skill.url, "href")}${addAttribute(`block text-center bg-white text-black font-black py-3 text-base nb-border-heavy nb-shadow-black nb-btn-click transition-colors ${skill.hoverClass}`, "class")}>${skill.title}</a>`)}</div></div>`;
}, "D:/web-portfolio/src/components/Cta.astro", void 0);
//#endregion
export { $$Cta as t };
