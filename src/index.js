function toggleDropdownVisibility(dropdownId) {
  const visibleDropdown = document.querySelector('.visible');
  const clickedDropdown = document.getElementById(dropdownId);

  if (visibleDropdown === clickedDropdown) {
    clickedDropdown.classList.remove('visible');
  } else {
    if (visibleDropdown) {
      visibleDropdown.classList.remove('visible');
    }

    clickedDropdown.classList.add('visible');
  }
}

export class Dropdown {
  constructor(toggleSelector) {
    this.toggleSelector = toggleSelector;
    this.setupEvents();
  }

  setupEvents() {
    this.toggleSelector.addEventListener('click', (e) => {
      toggleDropdownVisibility(e.target.getAttribute('data-target'));
    });
  }
}
