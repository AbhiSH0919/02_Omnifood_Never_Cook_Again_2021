// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
	headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

document.addEventListener("click", function (e) {
	const link = e.target?.closest("a:link");
	if (!link) return;
	e.preventDefault();

	const href = link?.getAttribute("href");

	// Scroll back to top
	if (href === "#" || href === "") {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	} else if (
		(link && e.target.classList.contains("btn")) ||
		e.target.classList.contains("main-nav-link")
	) {
		// Scroll to other links
		const scrollToSec = document.querySelector(href);
		scrollToSec?.scrollIntoView({ behavior: "smooth" });

		// Close mobile naviagtion when target sectio
		if (headerEl.classList.contains("nav-open"))
			headerEl.classList.remove("nav-open");
	}
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
	function (entries) {
		const ent = entries[0];

		ent.isIntersecting
			? document.body.classList.remove("sticky")
			: document.body.classList.add("sticky");
	},
	{
		// In the viewport
		root: null,
		threshold: 0,
		rootMargin: "-85px",
	}
);
obs.observe(sectionHeroEl);
