window.onload = () => {
  const navMenu = document.querySelector('.nav-menu');
  const navItems = document.querySelectorAll('.nav-item');
  const hamburger = document.querySelector('.nav-toggle');
  const formulario = document.querySelector();
  
  const toggle = e => e.classList.toggle('is-active');
  const toggleNav = ({ target }) => Array.from(navMenu.classList).includes('is-active') ? toggle(navMenu) : null;

  hamburger.addEventListener('click', () => toggle(navMenu, 'is-active'));
  Array.from(navItems).forEach(e => e.addEventListener('click', toggleNav));
}


const projectImgs = document.querySelectorAll('.project-img');

projectImgs.forEach(function(projectImg) {
  projectImg.addEventListener('click', function(event) {
    event.preventDefault();
    const fullsizeImgSrc = this.parentElement.getAttribute('href');
    const popupHtml = `<div class="popup-overlay">
                          <div class="popup-content">
                            <img src="${fullsizeImgSrc}" alt="Fullsize Image">
                            <span class="close-btn">&times;</span>
                          </div>
                        </div>`;
    document.body.insertAdjacentHTML('beforeend', popupHtml);
    const popupOverlay = document.querySelector('.popup-overlay');
    const closeBtn = document.querySelector('.close-btn');
    popupOverlay.addEventListener('click', function(event) {
      if (event.target === this || event.target === closeBtn) {
        popupOverlay.remove();
      }
    });
  });

  projectImg.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
  });

  projectImg.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
  });
});