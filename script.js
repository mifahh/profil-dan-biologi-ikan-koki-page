const dropdownButton = document.querySelector('.dropdown-button');
const dropdownContent = document.querySelector('.dropdown-content');
dropdownButton.addEventListener('click', () =>{
  dropdownContent.style.display = (dropdownContent.style.display === 'none') ? 'flex' : 'none';
});

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('resize', () => {
      dropdownContent.style.display = (window.innerWidth < 768) ? 'none' : 'flex';
  });
});

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((el, i) => {
    el.classList.toggle('active', i === index);
  });
}

document.getElementById('next').addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

document.getElementById('prev').addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

const buttonProfile = document.getElementById('buttonProfile');
buttonProfile.addEventListener('click', () =>{
  const container = document.getElementById('profile');
  const profile = container.querySelector('article');
  if(buttonProfile.innerHTML === '&lt;'){
    profile.removeAttribute('style', 'display:none;');
    buttonProfile.innerHTML = '&gt;';
  }else if(buttonProfile.innerHTML === '&gt;'){
    profile.setAttribute('style', 'display:none;');
    buttonProfile.innerHTML = '&lt;';
  }
});

