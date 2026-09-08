import { t as createComponent } from "./compiler_B3gswyWy.mjs";
import { b as createAstro, f as addAttribute, l as renderTemplate, u as maybeRenderHead } from "./server_B527gEp2.mjs";
//#region src/components/Navbar.astro
createAstro("https://astro.build");
var $$Navbar = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Navbar;
	const currentPath = Astro.url.pathname;
	const isAboutActive = currentPath.includes("/aboutme");
	const isPortfolioActive = currentPath.includes("/portfolio");
	const isRecentWorkActive = currentPath.includes("/recent-work");
	return renderTemplate`${maybeRenderHead($$result)}<div id="navbarWrapper" class="absolute top-0 left-0 right-0 z-40 px-4 pt-4 md:px-8 md:pt-8 transition-transform duration-300 transform translate-y-0"><section class="mx-auto max-w-7xl"><nav class="flex flex-wrap p-4 justify-between items-center bg-neon-green nb-border-heavy nb-shadow-black"><div class="flex flex-shrink-0 mr-6 items-center"><a href="/" class="block h-12 sm:h-14 md:h-16 py-0.5 transition-transform hover:scale-105"><img src="/aset/logo/logo.svg" alt="Logo Asyraf" class="h-full w-auto object-contain"></a></div><div class="block lg:hidden"><button onclick="toggleSidebar()" class="px-4 py-2 nb-border-heavy bg-neon-yellow nb-shadow-black font-bold nb-btn-click"><i class="fas fa-bars text-xl"></i></button></div><div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block"><div class="text-sm lg:flex-grow flex justify-end gap-4 mr-4"><a href="/aboutme"${addAttribute(`block mt-4 lg:inline-block lg:mt-0 px-3 py-2 nb-border-heavy font-black text-lg transition-colors ${isAboutActive ? "bg-black text-white cursor-default translate-x-[6px] translate-y-[6px] !shadow-none" : "bg-white text-black nb-shadow-black nb-btn-click hover:bg-black hover:text-white"}`, "class")}>About Me</a><a href="/#portfolio"${addAttribute(`block mt-4 lg:inline-block lg:mt-0 px-3 py-2 nb-border-heavy font-black text-lg transition-colors ${isPortfolioActive ? "bg-black text-neon-yellow cursor-default translate-x-[6px] translate-y-[6px] !shadow-none" : "bg-neon-yellow text-black nb-shadow-black nb-btn-click hover:bg-black hover:text-neon-yellow"}`, "class")}>Portfolio</a><a href="/recent-work"${addAttribute(`block mt-4 lg:inline-block lg:mt-0 px-3 py-2 nb-border-heavy font-black text-lg transition-colors ${isRecentWorkActive ? "bg-black text-neon-cyan cursor-default translate-x-[6px] translate-y-[6px] !shadow-none" : "bg-neon-cyan text-black nb-shadow-black nb-btn-click hover:bg-black hover:text-neon-cyan"}`, "class")}>Recent Work</a></div><div><a href="/#contact" class="inline-block text-lg px-5 py-2 nb-border-heavy bg-neon-red text-white font-black tracking-tight nb-shadow-black nb-btn-click hover:bg-white hover:text-neon-red transition-colors">CONTACT_ME//</a></div></div></nav></section></div><div id="mobileSidebar" class="nb-border-heavy nb-shadow-black" style="position: fixed !important; top: 0 !important; right: -300px !important; width: 300px !important; height: 100vh !important; background-color: #FFFF33 !important; z-index: 99999 !important; transition: right 0.2s ease-in-out !important; padding: 24px !important;"><div class="text-right mb-8"><button onclick="toggleSidebar()" class="nb-border-heavy bg-neon-red text-white p-2 font-black nb-shadow-black nb-btn-click hover:bg-black transition-colors"><i class="fas fa-times text-2xl"></i></button></div><div class="flex flex-col gap-4"><a href="/aboutme"${addAttribute(`nb-border-heavy p-3 font-black text-xl text-center transition-colors ${isAboutActive ? "bg-black text-white translate-x-[6px] translate-y-[6px] !shadow-none" : "bg-white text-black nb-shadow-black hover:bg-black hover:text-white"}`, "class")}>About Me</a><a href="/#portfolio"${addAttribute(`nb-border-heavy p-3 font-black text-xl text-center transition-colors ${isPortfolioActive ? "bg-black text-neon-yellow translate-x-[6px] translate-y-[6px] !shadow-none" : "bg-neon-yellow text-black nb-shadow-black hover:bg-black hover:text-neon-yellow"}`, "class")}>Portfolio</a><a href="/recent-work" onclick="toggleSidebar()"${addAttribute(`nb-border-heavy p-3 font-black text-xl text-center transition-colors ${isRecentWorkActive ? "bg-black text-neon-cyan translate-x-[6px] translate-y-[6px] !shadow-none" : "bg-neon-cyan text-black nb-shadow-black hover:bg-black hover:text-neon-cyan"}`, "class")}>Recent Work</a><hr class="border-2 border-black my-2"><a href="/#contact" onclick="toggleSidebar()" class="nb-border-heavy bg-neon-red text-white p-4 font-black text-lg text-center nb-shadow-black hover:bg-white hover:text-neon-red transition-colors">Contact Me</a></div></div><script>
    let isSidebarOpen = false;
    function toggleSidebar() {
        const sidebar = document.getElementById("mobileSidebar");
        if (!sidebar) return;
        isSidebarOpen = !isSidebarOpen;
        if (isSidebarOpen) {
            sidebar.style.setProperty("right", "0px", "important");
        } else {
            sidebar.style.setProperty("right", "-300px", "important");
        }
    }

    let idleTimer = null;
    let delayTimer = null;
    let stopMovementTimer = null;
    let hasAttemptedFirstPass = false; 
    let isWaitingDelay = false;
    let isFixedState = false;

    function handleNavbarBehavior() {
        const navbar = document.getElementById("navbarWrapper");
        const boundary = document.getElementById("pageHeader") || document.getElementById("aboutme");
        if (!navbar || !boundary) return;

        const boundaryBottom = boundary.offsetTop + boundary.offsetHeight;
        const currentScroll = window.scrollY || window.pageYOffset;

        if (currentScroll < boundaryBottom) {
            clearTimeout(delayTimer);
            clearTimeout(idleTimer);
            clearTimeout(stopMovementTimer);
            isWaitingDelay = false;
            if (isFixedState) {
                isFixedState = false;
                navbar.classList.remove("fixed", "-translate-y-full", "duration-200", "duration-300", "transition-transform");
                navbar.classList.add("absolute", "translate-y-0", "duration-0");
            }
            return;
        }

        if (!hasAttemptedFirstPass) {
            if (!isFixedState) {
                isFixedState = true;
                navbar.classList.remove("absolute", "translate-y-0", "duration-200", "duration-300");
                navbar.classList.add("fixed", "-translate-y-full", "duration-0");
            }
            if (!isWaitingDelay) {
                isWaitingDelay = true;
                delayTimer = setTimeout(() => {
                    navbar.classList.remove("duration-0", "-translate-y-full");
                    navbar.classList.add("transition-transform", "duration-300", "ease-out", "translate-y-0");
                    hasAttemptedFirstPass = true; 
                    isWaitingDelay = false;
                    clearTimeout(stopMovementTimer);
                    resetIdleTimer();
                }, 3000);
            }
            clearTimeout(stopMovementTimer);
            stopMovementTimer = setTimeout(() => {
                if (!hasAttemptedFirstPass) {
                    clearTimeout(delayTimer);
                    isWaitingDelay = false;
                    hasAttemptedFirstPass = true; 
                }
            }, 400);
            return;
        }

        if (!isFixedState) {
            isFixedState = true;
            navbar.classList.remove("absolute", "translate-y-0", "duration-300");
            navbar.classList.add("fixed", "-translate-y-full", "duration-0");
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    navbar.classList.remove("duration-0", "-translate-y-full");
                    navbar.classList.add("transition-transform", "duration-300", "ease-out", "translate-y-0");
                    resetIdleTimer();
                });
            });
        } else {
            navbar.classList.remove("-translate-y-full", "duration-0");
            navbar.classList.add("transition-transform", "duration-300", "ease-out", "translate-y-0");
            resetIdleTimer();
        }
    }

    function resetIdleTimer() {
        clearTimeout(idleTimer);
        idleTimer = setTimeout(() => {
            const navbar = document.getElementById("navbarWrapper");
            const boundary = document.getElementById("pageHeader") || document.getElementById("aboutme");
            if (!navbar || !boundary) return;
            const boundaryBottom = boundary.offsetTop + boundary.offsetHeight;
            const currentScroll = window.scrollY || window.pageYOffset;
            if (!isSidebarOpen && currentScroll >= boundaryBottom) {
                navbar.classList.remove("translate-y-0", "duration-300");
                navbar.classList.add("-translate-y-full", "transition-transform", "duration-200", "ease-in");
            }
        }, 2500);
    }

    ['scroll', 'mousemove', 'touchstart', 'keydown'].forEach(evt => {
        window.addEventListener(evt, handleNavbarBehavior, { passive: true });
    });
<\/script>`;
}, "D:/web-portfolio/src/components/Navbar.astro", void 0);
//#endregion
//#region src/components/Footer.astro
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="mx-auto max-w-7xl mb-12 bg-white p-6 nb-border-heavy nb-shadow-black flex flex-col md:flex-row justify-between items-center gap-4"><div class="flex gap-4"><a href="https://www.instagram.com/abdullahasyraf?igsh=MTJsbmxqMHByOHRwNg==" target="_blank" class="w-12 h-12 flex items-center justify-center nb-border-heavy bg-neon-red text-black nb-shadow-black nb-btn-click hover:text-white"><i class="fab fa-instagram text-xl"></i></a><a href="https://www.linkedin.com/in/muh-abdullah-asyraf-588238280?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" class="w-12 h-12 flex items-center justify-center nb-border-heavy bg-neon-cyan text-black nb-shadow-black nb-btn-click hover:text-white"><i class="fab fa-linkedin text-xl"></i></a><a href="https://github.com/asrap99" target="_blank" class="w-12 h-12 flex items-center justify-center nb-border-heavy bg-neon-yellow text-black nb-shadow-black nb-btn-click hover:text-white"><i class="fab fa-github text-xl"></i></a></div><div class="font-black text-lg bg-black text-white px-4 py-2 hover:bg-neon-green hover:text-black transition-colors cursor-default">CREATED BY ASYRAF // © 2026</div></section>`;
}, "D:/web-portfolio/src/components/Footer.astro", void 0);
//#endregion
export { $$Navbar as n, $$Footer as t };
