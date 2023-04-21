function toggleMenu() {
  var menu = document.querySelector('.Navbar ul');
  menu.classList.toggle('show');
  var menuToggle = document.querySelector('.Navbar .menu-toggle');
  menuToggle.classList.toggle('active');
}