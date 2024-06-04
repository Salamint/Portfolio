const darkThemeClass = "dark-theme"
const darkThemeButton = document.getElementById("dark-theme-toggle")
const icons = document.getElementsByClassName("icon")
const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)")

const mainBurgerButton = document.getElementById("main-burger-button")
const mainMenu = document.getElementById("main-menu")
const hideMainMenuButton = document.getElementById("hide-main-menu")
const mainMenuSeparator = document.getElementById("main-menu-separator")

const navBurgerButton = document.getElementById("nav-burger-button")
const navMenu = document.getElementById("nav-menu")
const tableOfContents = document.getElementById("table-of-contents")
const terminals = document.getElementsByClassName("terminal")
const hiddenTerminals = []


function updateThemeButton() {
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
	const control = titlebar.children.item(1)
	titlebar.style.borderBottomLeftRadius = ""
	titlebar.style.borderBottomRightRadius = ""
	control.innerHTML = "<img src='images/icons/dark/xmark.svg' width='18' height='18'>"
	control.classList.remove("open-window")
	control.classList.add("close-window")
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
	const control = titlebar.children.item(1)
	titlebar.style.borderBottomLeftRadius = "15px"
	titlebar.style.borderBottomRightRadius = "15px"
	control.innerHTML = "<img src='images/icons/expand.svg' width='12' height='12'>"
	control.classList.remove("close-window")
	control.classList.add("open-window")
	for (let i = 1; i < terminal.children.length; i++) {
		terminal.children.item(i).style.display = "none"
	}
}


function showMainMenu() {
	mainBurgerButton.style.display = "none"
	mainMenu.style.display = "flex"
	mainMenuSeparator.style.display = "unset"
	hideMainMenuButton.style.display = "unset"
	tableOfContents.style.display = "unset"
}


function hideMainMenu() {
	mainBurgerButton.style.display = "unset"
	mainMenu.style.display = "none"
	mainMenuSeparator.style.display = "none"
	hideMainMenuButton.style.display = "none"
	tableOfContents.style.display = "none"
}


function showNavMenu() {
	navBurgerButton.style.display = "none"
	tableOfContents.style.display = "unset"
}


function hideNavMenu() {
	navBurgerButton.style.display = "unset"
	tableOfContents.style.display = "none"
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

if (window.innerWidth <= 768) {
	for (let i = 0; i < terminals.length; i++) {
		toggleTerminal(terminals.item(i).id)
	}
}
