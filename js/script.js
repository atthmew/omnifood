"use strict";

// Mobile Nav
const header = document.querySelector(".header");
const openCloseNav = document.querySelector(".btn-mobile-nav");

openCloseNav.addEventListener("click", function () {
	header.classList.toggle("nav-open");
});

// CTA button
const btnToCta = document.querySelector(".btn--full");
const sectionCta = document.querySelector("#section-cta");

btnToCta.addEventListener("click", function () {
	sectionCta.scrollIntoView({ behavior: "smooth" });
});

// Nav smooth scroll
const navLinkParent = document.querySelector(".main-nav-list");
navLinkParent.addEventListener("click", function (e) {
	e.preventDefault();

	if (e.target.classList.contains("main-nav-link")) {
		const id = e.target.getAttribute("href");
		const navId = document.querySelector(id);
		navId.scrollIntoView({ behavior: "smooth" });
	} else {
		console.log("error");
	}
});

const imgLogo = document.querySelector(".logo");
const sectionHero = document.querySelector(".section-hero");
imgLogo.addEventListener("click", function () {
	sectionHero.scrollIntoView({ behavior: "smooth" });
});

// Sticky Navigation
const nav = document.querySelector(".main-nav");
const navHeight = nav.getBoundingClientRect().height;
const obs = new IntersectionObserver(
	function (entries) {
		const ent = entries[0];
		if (ent.isIntersecting === false) {
			document.body.classList.add("sticky");
		} else {
			document.body.classList.remove("sticky");
		}
	},
	{
		root: null,
		threshhold: 0,
		rootMargin: `-80px`,
	}
);
obs.observe(sectionHero);
