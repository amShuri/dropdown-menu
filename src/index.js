import './style.css';

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

function handleDropdownClick(e) {
  const dropdownToggle = e.target.closest('.dropdown-toggle');
  if (!dropdownToggle) return;

  toggleDropdownVisibility(dropdownToggle.getAttribute('data-target'));
}

function initialize(element) {
  document
    .querySelector(element)
    .addEventListener('click', handleDropdownClick);
}

initialize('nav');
