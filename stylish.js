let STYLISH_VERSION = "0.0.7 BETA";
let stylishCssLink = "stylish.css";
let pageTitle, pageDescription, pageKeywords, pageAuthor, pageImage;
let primaryColor = 
	getComputedStyle(document.body).getPropertyValue("--clr-primary")
	? getComputedStyle(document.body).getPropertyValue("--clr-primary").slice(1)
	: getComputedStyle(document.documentElement)
			.getPropertyValue("--clr-primary")
			.slice(1);

console.log("Stylish v" + STYLISH_VERSION + " is running.");

// background image
// images alt
// images title
// seo
// performance
// accessibility

// Get page info from Stylish.json
function importantMetaTags() {
	// Start stylish
	let comment = document.createComment("Coded with love by Stylish");
	document.head.appendChild(comment);

	// Set meta charset
	let metaCharset = document.querySelector("meta[charset]");
	if (metaCharset == null || metaCharset.charset == "") {
		let metaTag = document.createElement("meta");
		metaTag.setAttribute("charset", "utf-8");
		document.head.appendChild(metaTag);
	}

	// Set meta viewport
	let metaViewport = document.querySelector('meta[name="viewport"]');
	if (metaViewport == null || metaViewport.content == "") {
		let metaTag = document.createElement("meta");
		metaTag.setAttribute("name", "viewport");
		metaTag.setAttribute("content", "width=device-width, initial-scale=1");
		document.head.appendChild(metaTag);
	}

	// Set meta http-equiv
	let metaHttpEquiv = document.querySelector("meta[http-equiv]");
	if (metaHttpEquiv == null || metaHttpEquiv.content == "") {
		let metaTag = document.createElement("meta");
		metaTag.setAttribute("http-equiv", "X-UA-Compatible");
		metaTag.setAttribute("content", "IE=edge");
		document.head.appendChild(metaTag);
	}

	// Set title
	let titleTag = document.querySelector("title");
	if (titleTag == null || titleTag.innerHTML == "") {
		let titleTag = document.createElement("title");
		titleTag.innerHTML = pageTitle || "Coded with love by Stylish";
		document.head.appendChild(titleTag);
	}

	// Set meta description
	let metaDescription = document.querySelector('meta[name="description"]');
	if (metaDescription == null || metaDescription.content == "") {
		let metaTag = document.createElement("meta");
		metaTag.setAttribute("name", "description");
		metaTag.setAttribute(
			"content",
			pageDescription ||
				"Coded with love by Stylish. Stylish is a tool to help you improve your website style, SEO, accessibility, performance and more."
		);
		document.head.appendChild(metaTag);
	}

	// Set stylish.css link
	let stylishCssLinkTag = document.querySelector('link[href*="stylish.css"]');
	if (stylishCssLinkTag == null) {
		let linkTag = document.createElement("link");
		linkTag.setAttribute("rel", "stylesheet");
		linkTag.setAttribute("href", stylishCssLink);
		document.head.appendChild(linkTag);
	}

	// Set meta theme-color
	let metaThemeColor = document.querySelector('meta[name="theme-color"]');
	if (metaThemeColor == null || metaThemeColor.content == "") {
		let metaTag = document.createElement("meta");
		metaTag.setAttribute("name", "theme-color");
		metaTag.setAttribute("content", primaryColor);
		document.head.appendChild(metaTag);
	}
}
importantMetaTags();

// Print stylish version
let stylishVersion = document.querySelectorAll(".stylish-version");
if (stylishVersion.length > 0) {
	stylishVersion.forEach((version) => {
		version.innerHTML += STYLISH_VERSION;
	});
}
/* 
// Send request to get page info
let pageInfoRequest = new XMLHttpRequest();
pageInfoRequest.open("GET", "stylish.json");
pageInfoRequest.send();

pageInfoRequest.onreadystatechange = function () {
	if (pageInfoRequest.readyState == 4 && pageInfoRequest.status == 200) {
		let pageInfo = JSON.parse(pageInfoRequest.responseText);

		console.log(pageInfo);
		// Start stylish
		let comment = document.createComment("Coded with love by Stylish");
		document.head.appendChild(comment);

		// Set title
		let titleTag = document.querySelector("title");
		if (
			titleTag == null ||
			titleTag.innerHTML == "" ||
			titleTag.innerHTML == "Coded with love by Stylish"
		) {
			titleTag.innerHTML =
				pageInfo.pageTitle || "Coded with love by Stylish";
			document.head.appendChild(titleTag);
		}

		// Set meta description
		let metaDescription = document.querySelector('meta[name="description"]');
		if (
			metaDescription == null ||
			metaDescription.content == "" ||
			metaDescription.content ==
				"Coded with love by Stylish. Stylish is a tool to help you improve your website style, SEO, accessibility, performance and more."
		) {
			metaDescription.setAttribute("name", "description");
			metaDescription.setAttribute(
				"content",
				pageInfo.pageDescription ||
					"1Coded with love by Stylish. Stylish is a tool to help you improve your website style, SEO, accessibility, performance and more."
			);
		}

		// Set favicon
		let favicon = document.querySelector('link[rel="icon"]');
		if (favicon == null) {
			let linkTag = document.createElement("link");
			linkTag.setAttribute("rel", "icon");
			linkTag.setAttribute("href", pageInfo.pageImage || "favicon.ico");
			document.head.appendChild(linkTag);
		}

		// Set meta keywords
		let metaKeywords = document.querySelector('meta[name="keywords"]');
		if (metaKeywords == null || metaKeywords.content == "") {
			let metaTag = document.createElement("meta");
			metaTag.setAttribute("name", "keywords");
			metaTag.setAttribute("content", pageInfo.pageKeywords || "stylish");
			document.head.appendChild(metaTag);
		}

		// Set meta author
		let metaAuthor = document.querySelector('meta[name="author"]');
		if (metaAuthor == null || metaAuthor.content == "") {
			let metaTag = document.createElement("meta");
			metaTag.setAttribute("name", "author");
			metaTag.setAttribute(
				"content",
				pageInfo.pageAuthor || "A7med3bdulBaset"
			);
			document.head.appendChild(metaTag);
		}
	}
};
*/

// Set ROLE of .btn to button
let allButtons = document.querySelectorAll('[class*="btn"]');
allButtons.forEach((button) => {
	button.setAttribute("role", "button");
});

// Set aria-disabled="true" to .disabled, [disabled]
let allDisabled = document.querySelectorAll(".disabled,[disabled]");
allDisabled.forEach((disabled) => {
	disabled.setAttribute("aria-disabled", "true");
});

// Navigation Bar
window.onload = () => {
	let navColored = document.querySelector(".nav-auto-colored");

	function colorNavFn() {
		if (window.scrollY > 150) {
			navColored.classList.add("active");
		} else {
			navColored.classList.remove("active");
		}
	}
	if (navColored) {
		colorNavFn();
		window.onscroll = () => {
			colorNavFn();
		};
	}
}