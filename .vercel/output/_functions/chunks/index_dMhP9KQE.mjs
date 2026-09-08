import { n as __exportAll, t as createComponent } from "./compiler_B3gswyWy.mjs";
import { d as renderHead, f as addAttribute, i as renderComponent, l as renderTemplate } from "./server_B527gEp2.mjs";
import { n as $$Navbar, t as $$Footer } from "./Footer_CmzPpRp4.mjs";
/* empty css                 */
import { createClient } from "@sanity/client";
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const client = createClient({
		projectId: "xdo0hyha",
		dataset: "production",
		useCdn: true,
		apiVersion: "2024-01-01"
	});
	const recentWorks = await client.fetch(`*[_type == "recentWork"] | order(_createdAt desc)[0...3]{
  title,
  description,
  "imageUrl": image.asset->url,
  date,
  category,
  tech,
  status,
  projectUrl,
  buttonText
}`);
	const profileData = await client.fetch(`*[_type == "profile"][0]{
  shortBio,
  "imageUrl": indexImage.asset->url // Mengambil dari kolom indexImage
}`);
	await client.fetch(`*[_type == "recentWork" && isPortfolio == true] | order(_createdAt desc){
  title,
  description,
  "imageUrl": image.asset->url,
  category,
  tech,
  projectUrl,
  buttonText
}`);
	return renderTemplate`<html lang="id" class="scroll-smooth"><head><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="Web Portofolio - Neo Brutalism Bright Edition"><meta name="author" content="asyraf"><title>Asyraf Studio - Home</title><!-- 1. TAMBAHKAN is:inline DI SINI --><script src="https://cdn.tailwindcss.com"><\/script><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"><!-- 2. TAMBAHKAN is:inline DI SINI --><script>
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
    <\/script>${renderHead($$result)}</head><body class="overflow-x-hidden p-4 md:p-8">${renderComponent($$result, "Navbar", $$Navbar, {})}<!-- SECTION 2: ABOUT ME (CMS Terintegrasi) --><section id="aboutme" class="mx-auto max-w-7xl mb-28 md:mb-36 px-4 md:px-8 pt-24 md:pt-28 mt-8 md:mt-12 scroll-mt-32"><div class="grid grid-cols-1 md:grid-cols-12 items-center relative"><!-- KOTAK FOTO --><div class="order-first md:order-none md:col-start-9 md:col-end-13 md:row-start-1 z-20 flex justify-center md:justify-end relative w-full mb-0 md:mb-0"><div class="w-[240px] sm:w-[280px] md:w-[330px] aspect-[3/4] relative group"><div class="w-full h-full nb-border-heavy nb-shadow-black overflow-hidden bg-gray-200">${profileData?.imageUrl ? renderTemplate`<img${addAttribute(profileData.imageUrl, "src")} alt="Foto Profil" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">` : renderTemplate`<div class="w-full h-full flex items-center justify-center font-bold text-gray-500">NO IMAGE</div>`}</div><div class="absolute -top-4 -right-4 md:-top-5 md:-right-6 bg-neon-yellow text-black px-3 py-1 md:px-4 md:py-1.5 font-black text-base md:text-lg z-30 rotate-[12deg] nb-border-heavy nb-shadow-black">MY PHOTO</div></div></div><!-- KOTAK TEKS PENJELASAN --><div class="order-last md:order-none md:col-start-1 md:col-end-11 md:row-start-1 bg-white pb-10 pt-12 md:pt-16 md:pb-12 px-6 md:pl-12 md:pr-56 nb-border-heavy flex flex-col items-center md:items-start text-center md:text-left relative -mt-6 md:mt-0 nb-shadow-black"><!-- JUDUL ABOUT ME --><h1 class="absolute -top-7 md:-top-9 left-4 md:left-8 bg-black text-white px-6 py-2 text-3xl md:text-5xl font-black tracking-tighter nb-border-heavy z-50">About Me</h1><!-- Paragraf Dinamis (shortBio) ditarik dari Sanity CMS --><!-- Penambahan whitespace-pre-line agar format enter/paragraf dari CMS tetap terbaca --><p class="text-base md:text-xl font-bold mb-5 max-w-2xl leading-relaxed mt-3 md:mt-2 whitespace-pre-line">${profileData?.shortBio || "Silakan isi bio singkat Anda di Sanity CMS."}</p><p class="text-xs md:text-sm font-black mb-6 bg-neon-yellow px-3.5 py-1.5 border-2 border-black inline-block">Web Dev - Data Analyst - Digital Marketing</p><!-- Tautan diubah menjadi /aboutme agar sesuai dengan sistem routing Astro --><a href="/aboutme" class="inline-block bg-neon-red text-white font-black px-7 py-3 text-lg nb-border-heavy nb-shadow-black nb-btn-click hover:bg-black transition-colors">View More</a></div></div></section><!-- SECTION 3: PORTFOLIO --><section id="portfolio" class="mx-auto max-w-7xl mb-32 px-4 md:px-8 mt-12 scroll-mt-32"><div class="bg-neon-yellow p-8 md:p-12 nb-border-heavy FOOTER relative pt-16 mt-8"><h2 class="absolute -top-8 left-1/2 transform -translate-x-1/2 text-3xl md:text-5xl font-black uppercase tracking-widest bg-white px-8 py-3 nb-border-heavy nb-shadow-black z-20 whitespace-nowrap">PORTFOLIO</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"><!-- Kartu 1: Web Dev --><div class="bg-white p-8 nb-border-heavy nb-shadow-black flex flex-col items-center hover:-translate-y-2 transition-transform"><div class="bg-neon-cyan p-4 nb-border-heavy mb-6"><i class="fas fa-laptop-code text-5xl text-black"></i></div><h3 class="text-2xl font-black mb-6 text-center">Web Dev</h3><div class="w-full font-bold text-sm bg-white nb-border-heavy mb-8"><p class="border-b-[3px] border-black p-3"><i class="fas fa-caret-right mr-2"></i> Front-End (UI/UX)</p><p class="border-b-[3px] border-black p-3"><i class="fas fa-caret-right mr-2"></i> Back-End Integration</p><p class="p-3"><i class="fas fa-caret-right mr-2"></i> Responsive Design</p></div><div class="mt-auto w-full"><a href="/portfolio-web" class="block text-center bg-neon-cyan text-black font-black px-6 py-3 text-base nb-border-heavy nb-shadow-black nb-btn-click hover:bg-black hover:text-neon-cyan transition-colors w-full">LIHAT PROYEK -></a></div></div><!-- Kartu 2: Data Analyst --><div class="bg-white p-8 nb-border-heavy nb-shadow-black flex flex-col items-center hover:-translate-y-2 transition-transform"><div class="bg-neon-red p-4 nb-border-heavy mb-6"><i class="fas fa-chart-bar text-5xl text-black"></i></div><h3 class="text-2xl font-black mb-6 text-center">Data Analyst</h3><div class="w-full font-bold text-sm bg-white nb-border-heavy mb-8"><p class="border-b-[3px] border-black p-3"><i class="fas fa-caret-right mr-2"></i> Data Visualization</p><p class="border-b-[3px] border-black p-3"><i class="fas fa-caret-right mr-2"></i> SQL & Database</p><p class="p-3"><i class="fas fa-caret-right mr-2"></i> Python Analysis</p></div><div class="mt-auto w-full"><a href="/portfolio-data" class="block text-center bg-neon-red text-white font-black px-6 py-3 text-base nb-border-heavy nb-shadow-black nb-btn-click hover:bg-black hover:text-neon-red transition-colors w-full">LIHAT PROYEK -></a></div></div><!-- Kartu 3: Digital Marketing --><div class="bg-white p-8 nb-border-heavy nb-shadow-black flex flex-col items-center hover:-translate-y-2 transition-transform"><div class="bg-neon-green p-4 nb-border-heavy mb-6"><i class="fas fa-bullhorn text-5xl text-black"></i></div><h3 class="text-2xl font-black mb-6 text-center">Digital Marketing</h3><div class="w-full font-bold text-sm bg-white nb-border-heavy mb-8"><p class="border-b-[3px] border-black p-3"><i class="fas fa-caret-right mr-2"></i> SEO & SEM Strategy</p><p class="border-b-[3px] border-black p-3"><i class="fas fa-caret-right mr-2"></i> Social Media Ads</p><p class="p-3"><i class="fas fa-caret-right mr-2"></i> Content Copywriting</p></div><div class="mt-auto w-full"><a href="/portfolio-marketing" class="block text-center bg-neon-green text-black font-black px-6 py-3 text-base nb-border-heavy nb-shadow-black nb-btn-click hover:bg-black hover:text-neon-green transition-colors w-full">LIHAT PROYEK -></a></div></div></div></div></section><!-- SECTION: RECENT WORK --><section id="recent-work" class="mx-auto max-w-7xl mb-24 mt-16 px-4 md:px-0"><div class="relative pt-8 md:pt-10"><!-- Kotak Judul Merah (Pop-out di atas kontainer) --><div class="absolute top-0 left-4 md:left-12 z-20 bg-neon-red text-white nb-border-heavy nb-shadow-black px-6 py-3 md:px-10 md:py-4"><h2 class="text-3xl md:text-5xl font-black uppercase tracking-widest">RECENT WORK</h2></div><!-- Kontainer Utama Cyan --><div class="bg-neon-cyan nb-border-heavy nb-shadow-black p-6 md:p-12 pt-20 md:pt-24 relative z-10 w-full mt-4"><!-- Grid Proyek (Desain 3: Folder Arsip) --><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">${recentWorks.map((work) => renderTemplate`<div class="relative mt-4"><!-- Tab Atas (Kategori) --><div class="absolute -top-8 left-0 bg-white nb-border-heavy border-b-0 px-4 py-1.5 font-black text-sm z-0">${work.category}</div><!-- Kontainer Utama Kartu --><div class="bg-white nb-border-heavy nb-shadow-black relative z-10 p-5 flex flex-col h-full group"><!-- Header Status & Waktu --><div class="flex justify-between items-center mb-4 border-b-4 border-black pb-3"><div${addAttribute(`border-2 border-black px-2 py-1 font-black text-xs ${work.status === "Completed" ? "bg-neon-green" : "bg-neon-yellow"}`, "class")}>${work.status}</div><div class="font-bold text-xs bg-white border-2 border-black px-2 py-1">${work.date}</div></div><!-- Judul --><h3 class="text-xl font-black uppercase leading-tight mb-2">${work.title}</h3><!-- Deskripsi Singkat --><p class="font-bold text-sm text-gray-700 mb-4 flex-grow line-clamp-3">${work.description}</p><!-- FOTO PROYEK --><div class="h-40 shrink-0 border-4 border-black overflow-hidden mb-3 relative bg-gray-200">${work.imageUrl && renderTemplate`<img${addAttribute(work.imageUrl, "src")}${addAttribute(work.title, "alt")} class="w-full h-full object-cover">`}</div><!-- TOMBOL LINK PROJECT (Langsung tampil tanpa hover) --><div class="mb-4">${work.projectUrl ? renderTemplate`<a${addAttribute(work.projectUrl, "href")} target="_blank" class="block w-full text-center bg-neon-cyan text-black font-black py-2 px-4 border-2 border-black nb-shadow-black nb-btn-click hover:bg-black hover:text-neon-cyan transition-colors uppercase text-xs tracking-wider"><i class="fas fa-external-link-alt mr-2"></i>${work.buttonText || "LIHAT PROYEK"}</a>` : renderTemplate`<button class="block w-full text-center bg-gray-200 text-gray-500 font-black py-2 px-4 border-2 border-black uppercase text-xs tracking-wider cursor-not-allowed" disabled><i class="fas fa-lock mr-2"></i>PRIVATE PROYEK</button>`}</div><!-- TEKNOLOGI (Tag Kotak) --><div class="flex flex-wrap gap-1.5 mt-auto">${work.tech && work.tech.split("//").map((tag) => renderTemplate`<span class="bg-gray-100 border-2 border-black px-1.5 py-0.5 text-[10px] font-bold text-black shadow-[2px_2px_0px_0px_#000000]">${tag.trim()}</span>`)}</div></div></div>`)}</div><!-- Tombol Halaman Tersendiri (Opsional) --><div class="mt-16 text-center"><a href="/recent-work" class="inline-block bg-white text-black font-black px-8 py-4 text-xl nb-border-heavy nb-shadow-black nb-btn-click hover:bg-neon-yellow transition-colors">LIHAT SEMUA ARSIP -></a></div></div></div></section><!-- SECTION 5: CONTACT ME --><section id="contact" class="mx-auto max-w-7xl mb-16 bg-black p-6 md:p-12 nb-border-heavy nb-shadow-cyan"><h1 class="text-5xl font-black text-center text-white mb-8 tracking-tight">CONTACT ME</h1><div class="container p-6 md:p-8 w-full lg:w-2/3 nb-border-heavy bg-white mx-auto"><form action="https://formsubmit.co/asrappp29@gmail.com" method="POST" class="text-center"><input type="hidden" name="_captcha" value="false"><input type="hidden" name="_next" value="https://domain-anda.com/thanks.html"><input type="hidden" name="_subject" value="Pesan Baru dari Web Portofolio!"><h4 class="text-2xl font-black bg-neon-yellow p-3 inline-block nb-border-heavy mb-2">KIRIM PESAN SEKARANG!</h4><p class="mb-8 font-bold text-sm block">// MARI BERKOLABORASI</p><div class="w-full mb-4 text-left"><label class="uppercase font-black text-sm bg-black text-white px-2 py-1 mb-1 inline-block">Nama Lengkap</label><input type="text" name="Nama" required class="p-3 bg-white w-full nb-border-heavy font-bold focus:bg-neon-cyan focus:outline-none" placeholder="Masukkan Nama"></div><div class="w-full mb-4 text-left"><label class="uppercase font-black text-sm bg-black text-white px-2 py-1 mb-1 inline-block">EMAIL</label><input type="email" name="Email" required class="p-3 bg-white w-full nb-border-heavy font-bold focus:bg-neon-cyan focus:outline-none" placeholder="Masukkan Email"></div><div class="w-full mb-8 text-left"><label class="uppercase font-black text-sm bg-black text-white px-2 py-1 mb-1 inline-block">pesan</label><textarea rows="4" name="Pesan" required class="p-3 bg-white w-full nb-border-heavy font-bold focus:bg-neon-cyan focus:outline-none" placeholder="Tulis pesan Anda di sini..."></textarea></div><button class="bg-neon-green text-black text-xl font-black uppercase px-8 py-4 nb-border-heavy nb-shadow-black nb-btn-click w-full md:w-auto hover:bg-black hover:text-neon-green transition-colors" type="submit">SUBMIT DATA -></button></form></div></section>${renderComponent($$result, "Footer", $$Footer, {})}<!-- BUTTON TO TOP (NEO-BRUTALISM STYLE) --><button id="backToTop" onclick="scrollToTop()" class="fixed bottom-6 right-6 z-50 bg-neon-yellow text-black w-12 h-12 nb-border-heavy nb-shadow-black nb-btn-click transition-all duration-300 transform translate-y-24 opacity-0 pointer-events-none hover:bg-black hover:text-neon-yellow flex items-center justify-center font-black text-xl"><i class="fas fa-arrow-up"></i></button><!-- SCRIPT LOGIKA PERGERAKAN NAVBAR & BACK TO TOP --><script>
    const backToTopBtn = document.getElementById("backToTop");
    const aboutMeSection = document.getElementById("aboutme");

    // Fungsi klik untuk kembali ke atas
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Deteksi scroll untuk memunculkan/menyembunyikan tombol
    window.addEventListener('scroll', () => {
        if (!aboutMeSection || !backToTopBtn) return;
        
        const aboutMeBottom = aboutMeSection.offsetTop + aboutMeSection.offsetHeight;
        const currentScroll = window.scrollY || window.pageYOffset;

        if (currentScroll >= aboutMeBottom) {
            // Munculkan tombol
            backToTopBtn.classList.remove("translate-y-24", "opacity-0", "pointer-events-none");
            backToTopBtn.classList.add("translate-y-0", "opacity-100", "pointer-events-auto");
        } else {
            // Sembunyikan tombol
            backToTopBtn.classList.remove("translate-y-0", "opacity-100", "pointer-events-auto");
            backToTopBtn.classList.add("translate-y-24", "opacity-0", "pointer-events-none");
        }
    });
<\/script></body></html>`;
}, "D:/web-portfolio/src/pages/index.astro", void 0);
var $$file = "D:/web-portfolio/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
