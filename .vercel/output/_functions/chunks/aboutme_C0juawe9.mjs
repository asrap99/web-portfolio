import { n as __exportAll, t as createComponent } from "./compiler_B3gswyWy.mjs";
import { d as renderHead, f as addAttribute, i as renderComponent, l as renderTemplate } from "./server_B527gEp2.mjs";
import { n as $$Navbar, t as $$Footer } from "./Footer_CmzPpRp4.mjs";
/* empty css                 */
import { createClient } from "@sanity/client";
//#region src/pages/aboutme.astro
var aboutme_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Aboutme,
	file: () => $$file,
	url: () => $$url
});
var $$Aboutme = createComponent(async ($$result, $$props, $$slots) => {
	const client = createClient({
		projectId: "xdo0hyha",
		dataset: "production",
		useCdn: true,
		apiVersion: "2024-01-01"
	});
	const journeys = await client.fetch(`*[_type == "journey"] | order(order asc){
  period,
  role,
  company,
  description
}`);
	const profileData = await client.fetch(`*[_type == "profile"][0]{
  fullBio,
  "imageUrl": aboutImage.asset->url // Mengambil dari kolom aboutImage
}`);
	return renderTemplate`<html lang="id" class="scroll-smooth"><head><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="About Me - Asyraf Neo Brutalism Portofolio"><meta name="author" content="asyraf"><title>About Asyraf - Full Profile</title><!-- 1. TAMBAHKAN is:inline DI SINI --><script src="https://cdn.tailwindcss.com"><\/script><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"><!-- 2. TAMBAHKAN is:inline DI SINI --><script>
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
    <\/script>${renderHead($$result)}</head><body class="overflow-x-hidden p-4 md:p-8">${renderComponent($$result, "Navbar", $$Navbar, {})}<!-- SECTION 1: HEADER ABOUT ME (CMS Terintegrasi) --><section id="pageHeader" class="mx-auto max-w-7xl mb-10 pt-24 md:pt-28"><div class="bg-white p-6 md:p-8 nb-border-heavy nb-shadow-black relative"><!-- Label Dekorasi --><div class="absolute -top-5 left-6 bg-neon-yellow border-2 border-black font-black text-xl px-4 py-1 -rotate-2 z-10">WHO AM I?</div><div class="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center mt-2"><!-- Foto Profil (Dari CMS) --><div class="lg:col-span-4 w-full max-w-xs mx-auto aspect-square relative group"><div class="w-full h-full nb-border-heavy nb-shadow-black overflow-hidden bg-neon-cyan">${profileData?.imageUrl ? renderTemplate`<img${addAttribute(profileData.imageUrl, "src")} alt="Foto Profil Asyraf" class="w-full h-full object-cover">` : renderTemplate`<div class="w-full h-full flex items-center justify-center font-bold text-black bg-gray-200">NO IMAGE</div>`}</div></div><!-- Teks Biografi --><div class="lg:col-span-8"><h1 class="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter leading-none">HELLO, I'M <span class="bg-neon-yellow px-2 inline-block">ASYRAF.</span></h1><!-- Paragraf Dinamis (fullBio) ditarik dari Sanity CMS --><div class="text-base md:text-lg font-bold mb-8 leading-relaxed text-gray-800 whitespace-pre-line">${profileData?.fullBio || "Silakan isi bio lengkap Anda di Sanity CMS."}</div><div class="flex flex-wrap gap-3"><!-- Tautan diubah menjadi /#contact dan /#portfolio --><a href="/#contact" class="inline-block bg-neon-red text-white font-black px-6 py-2.5 text-base tracking-tight nb-border-heavy nb-shadow-black nb-btn-click hover:bg-black hover:text-neon-red transition-colors">HIRE ME -></a><a href="/#portfolio" class="bg-white text-black font-black px-6 py-2.5 text-base nb-border-heavy nb-shadow-black nb-btn-click hover:bg-neon-cyan transition-colors">VIEW WORKS</a></div></div></div></div></section><!-- SECTION: EXPERTISE & TOOLS --><section class="mx-auto max-w-7xl mb-16"><h2 class="text-4xl md:text-5xl font-black uppercase tracking-widest bg-neon-cyan inline-block px-6 py-2 nb-border-heavy nb-shadow-black mb-8">TECH STACK</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><!-- Box 1 --><div class="bg-white p-6 nb-border-heavy nb-shadow-black"><h3 class="text-2xl font-black mb-4 border-b-4 border-black pb-2">WEB DEVELOPMENT</h3><div class="flex flex-wrap gap-2 font-bold"><span class="bg-neon-cyan border-2 border-black px-3 py-1">HTML</span><span class="bg-neon-cyan border-2 border-black px-3 py-1">JavaScript</span><span class="bg-neon-cyan border-2 border-black px-3 py-1">Tailwind CSS</span><span class="bg-neon-cyan border-2 border-black px-3 py-1">PHP / MySQL</span></div></div><!-- Box 2 --><div class="bg-white p-6 nb-border-heavy nb-shadow-black"><h3 class="text-2xl font-black mb-4 border-b-4 border-black pb-2">DATA ANALYTICS</h3><div class="flex flex-wrap gap-2 font-bold"><span class="bg-neon-red border-2 border-black px-3 py-1">Python</span><span class="bg-neon-red border-2 border-black px-3 py-1">SQL</span><span class="bg-neon-red border-2 border-black px-3 py-1">Tableau</span><span class="bg-neon-red border-2 border-black px-3 py-1">Excel (Advanced)</span></div></div><!-- Box 3 --><div class="bg-white p-6 nb-border-heavy nb-shadow-black"><h3 class="text-2xl font-black mb-4 border-b-4 border-black pb-2">DIGITAL MARKETING</h3><div class="flex flex-wrap gap-2 font-bold"><span class="bg-neon-green border-2 border-black px-3 py-1">SEO/SEM</span><span class="bg-neon-green border-2 border-black px-3 py-1">Copywriting</span><span class="bg-neon-green border-2 border-black px-3 py-1">Analytics</span></div></div></div></section><!-- SECTION: THE JOURNEY --><section class="mx-auto max-w-5xl mb-24 px-4 sm:px-6 pt-6"><div class="relative pt-6 md:pt-8"><!-- Kotak Judul Menempel di Tengah Atas (1 Baris) --><div class="absolute top-0 left-1/2 transform -translate-x-1/2 z-20 bg-neon-yellow text-black nb-border-heavy nb-shadow-black px-6 py-2 md:px-10 md:py-3 text-center whitespace-nowrap"><h2 class="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-widest whitespace-nowrap">THE JOURNEY</h2></div><!-- Kontainer Utama Kotak Putih (Lebih Lebar di Laptop) --><div class="bg-white nb-border-heavy nb-shadow-black p-5 sm:p-8 md:p-12 pt-14 md:pt-16 relative z-10 w-full"><!-- Garis Timeline (Dikunci Posisinya) --><div class="border-l-8 border-black ml-6 md:ml-10 pl-8 md:pl-10 flex flex-col gap-8 md:gap-10 relative">${journeys.map((item, index) => renderTemplate`<div class="relative group"><!-- Titik (Bulatan) Timeline -> Diatur presisi di tengah garis border-l-8 --><div${addAttribute(`absolute -left-[52px] md:-left-[64px] top-1 w-8 h-8 md:w-10 md:h-10 border-4 border-black rounded-full z-10 shadow-[2px_2px_0px_0px_#000000] ${index % 3 === 0 ? "bg-neon-cyan" : index % 3 === 1 ? "bg-neon-red" : "bg-neon-green"}`, "class")}></div><!-- Garis Penghubung dari Bulatan ke Kotak Kartu --><div class="absolute -left-[36px] md:-left-[44px] top-4 w-9 md:w-11 h-2 bg-black z-0"></div><!-- Kotak Konten Pengalaman --><div class="bg-[#F5F5F5] nb-border-heavy nb-shadow-black p-5 sm:p-6 md:p-8 transform group-hover:-translate-y-1 transition-transform duration-300"><!-- Periode --><span class="inline-block bg-black text-white font-black text-xs px-3 py-1 mb-2 tracking-widest">${item.period}</span><!-- Peran & Instansi --><h3 class="text-xl sm:text-2xl md:text-3xl font-black uppercase leading-tight mb-1">${item.role}</h3><p class="font-black text-sm sm:text-base md:text-lg text-gray-600 uppercase mb-3 border-b-2 sm:border-b-4 border-black pb-2 inline-block">@ ${item.company}</p><!-- Deskripsi --><p class="font-bold text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">${item.description}</p></div></div>`)}</div></div></div></section>${renderComponent($$result, "Footer", $$Footer, {})}<button id="backToTop" onclick="scrollToTop()" class="fixed bottom-6 right-6 z-50 bg-neon-yellow text-black w-12 h-12 nb-border-heavy nb-shadow-black nb-btn-click transition-all duration-300 transform translate-y-24 opacity-0 pointer-events-none hover:bg-black hover:text-neon-yellow flex items-center justify-center font-black text-xl"><i class="fas fa-arrow-up"></i></button><script>
    const backToTopBtn = document.getElementById("backToTop");

    // Fungsi klik untuk meluncur ke atas
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Memunculkan tombol jika pengunjung sudah scroll sejauh 200px
    window.addEventListener('scroll', () => {
        if (!backToTopBtn) return;

        if (window.scrollY >= 200) {
            backToTopBtn.classList.remove("translate-y-24", "opacity-0", "pointer-events-none");
            backToTopBtn.classList.add("translate-y-0", "opacity-100", "pointer-events-auto");
        } else {
            backToTopBtn.classList.remove("translate-y-0", "opacity-100", "pointer-events-auto");
            backToTopBtn.classList.add("translate-y-24", "opacity-0", "pointer-events-none");
        }
    });
<\/script></body></html>`;
}, "D:/web-portfolio/src/pages/aboutme.astro", void 0);
var $$file = "D:/web-portfolio/src/pages/aboutme.astro";
var $$url = "/aboutme";
//#endregion
//#region \0virtual:astro:page:src/pages/aboutme@_@astro
var page = () => aboutme_exports;
//#endregion
export { page };
