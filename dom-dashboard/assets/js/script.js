
const themeToggle = document.getElementById('themeToggle');
const themeLabel = document.getElementById('themeLabel');
const tipMessage = document.getElementById('tipMessage');
const courseForm = document.getElementById('courseForm');
const formMessage = document.getElementById('formMessage');
const profileMessage = document.getElementById('profileMessage');
const navLinks = document.getElementsByClassName('nav-link');
for (const link of navLinks) {
  link.addEventListener('click', () => {
    for (const item of navLinks) item.classList.remove('active');
    link.classList.add('active');
  });
}
[[]]

const paragraphCount = document.getElementsByTagName('p').length;
const elementCount = document.getElementById('elementCount');
elementCount.innerHTML = String(120 + paragraphCount * 2);

const heroTitle = document.querySelector('.hero-panel h2');
heroTitle.setAttribute('data-dom-ready', 'true');

const profileButtons = document.querySelectorAll('.profile-detail');
profileButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const person = button.dataset.person;
    profileMessage.innerHTML = `${person}: perspectiva carregada pelo <strong>querySelectorAll</strong>.`;
  });
});

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('theme-royal');
  const isRoyal = document.body.classList.contains('theme-royal');
  themeLabel.innerHTML = isRoyal ? 'Royal blue' : 'Soft light';
  themeToggle.querySelector('.theme-icon').innerHTML = isRoyal ? '◐' : '☼';
});

document.getElementById('showTip').addEventListener('click', () => {
  tipMessage.innerHTML = 'Dica: use querySelector para buscar um elemento e innerHTML para atualizar seu conteúdo.';
});


document.getElementById('addTech').addEventListener('click', () => {
  const techList = document.getElementById('techList');
  const newItem = document.createElement('li');
  newItem.innerHTML = '<span class="tech-dot" style="background:#d78bf2"></span>DOM API <small>prática</small>';
  techList.appendChild(newItem);
  document.getElementById('projectCount').innerHTML = '09';
});
courseForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const curso = document.getElementById('curso').value;
  formMessage.innerHTML = `Obrigado, ${nome}! Sua intenção no curso de ${curso} foi registrada nesta demonstração.`;
  courseForm.reset();
});
