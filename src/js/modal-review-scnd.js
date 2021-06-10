(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-opn2]'),
    closeModalBtn: document.querySelector('[data-modal-cls2]'),
    modal: document.querySelector('[data-mdl2]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();