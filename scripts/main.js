const darkThemeClass = "dark-theme"
const darkThemeButton = document.getElementById("dark-theme-toggle");
const navMenu = document.getElementById("nav-menu");
const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
const hiddenTerminals = []


function updateThemeButton() {
	const icons = document.getElementsByClassName("icon")
	if (document.body.classList.contains(darkThemeClass)) {
		darkThemeButton.innerHTML = "<img width='20' height='20' src='images/icons/moon-solid.svg' alt='Dark'>"
		for (let i = 0; i < icons.length; i++) {
			icons.item(i).src = icons.item(i).src.replace("light", "dark")
		}
	} else {
		darkThemeButton.innerHTML = "<img width='20' height='20' src='images/icons/sun-regular.svg' alt='Light'>"
		for (let i = 0; i < icons.length; i++) {
			icons.item(i).src = icons.item(i).src.replace("dark", "light")
		}
	}
}


function showTerminal(id) {
	const terminal = document.getElementById(id)
	const titlebar = terminal.children.item(0)
	titlebar.style.borderBottomLeftRadius = ""
	titlebar.style.borderBottomRightRadius = ""
	for (let i = 1; i < terminal.children.length; i++) {
		terminal.children.item(i).style.display = ""
	}
}


function toggleTerminal(id) {
	if (hiddenTerminals.includes(id)) {
		showTerminal(id)
		hiddenTerminals.splice(hiddenTerminals.indexOf(id), 1)
	} else {
		hideTerminal(id)
		hiddenTerminals.push(id)
	}
}


function hideTerminal(id) {
	const terminal = document.getElementById(id)
	const titlebar = terminal.children.item(0)
	titlebar.style.borderBottomLeftRadius = "15px"
	titlebar.style.borderBottomRightRadius = "15px"
	for (let i = 1; i < terminal.children.length; i++) {
		terminal.children.item(i).style.display = "none"
	}
}


darkThemeButton.addEventListener(
	"click",
	() => {
		document.body.classList.toggle(darkThemeClass);
		updateThemeButton()
	}
)

if (prefersDarkTheme.matches) {
	document.body.classList.add(darkThemeClass);
} else {
	document.body.classList.remove(darkThemeClass);
}
updateThemeButton()
