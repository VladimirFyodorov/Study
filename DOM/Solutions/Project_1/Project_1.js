document.addEventListener('DOMContentLoaded', () => {
  const showModal = () => {
    const btns = document.querySelectorAll('[data-toggle="modal"]');

    Array.from(btns).forEach(btn => {
      const modalId = btn.dataset['target'];
      const modal = document.querySelector(modalId);
      const closeBtn = modal.querySelector('[data-dismiss="modal"]');

      btn.addEventListener('click', () => {
        modal.classList.add('show');
        modal.style.display = 'block';
      });

      closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
        modal.style.display = 'none';
      });
    });
  };

  showModal();
})
