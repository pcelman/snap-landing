const hamburguerIcon = document.querySelector(".nav__hamb");
const navOverlay = document.querySelector(".nav__overlay");
let currentDropdown = navOverlay;

// changes classes when clicking the icon
hamburguerIcon.addEventListener("click", () => {
  hamburguerIcon.classList.toggle("nav__hamburguer--open");

  navOverlay.classList.toggle("nav__overlay--show");
});

navOverlay.addEventListener("click", (e) => {
  e.preventDefault();
  const currentElement = e.target;
  // console.log(e.target.classList.value);

  if (isActive(currentElement, "nav__parent")) {
    const subMenu = currentElement.parentElement.children[1];
    console.log(subMenu);
    // sub-menus will close when changing to a bigger screen

    if (window.innerWidth < 768) {
      let height = subMenu.clientHeight == 0 ? subMenu.scrollHeight : 0;
      // console.log(subMenu.clientHeight);

      subMenu.style.height = `${height}px`;
    } else {
      // to make sure only one element has the active class:
      if (!isActive(subMenu, "nav__inner--show")) {
        closeDropdown(currentDropdown);
      }
      subMenu.classList.toggle("nav__inner--show");

      currentDropdown = subMenu;
    }
  }
});

function isActive(element, string) {
  return element.classList.value.includes(string);
}

function closeDropdown(currentDropdown) {
  if (isActive(currentDropdown, "nav__inner--show")) {
    currentDropdown.classList.remove("nav__inner--show");
  }
}

// will close the menu is it´s open when resizing 
window.addEventListener("resize", () => {
  closeDropdown(currentDropdown);

  if (window.innerWidth > 768) {
    const navInners = document.querySelectorAll(".nav__inner");

    navInners.forEach((navInner) => {
      navInner.style.height = "";
    });
  }
});
