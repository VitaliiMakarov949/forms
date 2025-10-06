const openBtn = document.querySelector('.open-modal-btn');
const modalBg = document.getElementById('modalLogin');
const closeBtn = modalBg.querySelector('.close-modal');

openBtn.onclick = () => { modalBg.style.display = 'flex'; };
closeBtn.onclick = () => { modalBg.style.display = 'none'; };
window.onclick = e => { if (e.target === modalBg) modalBg.style.display = 'none'; };
