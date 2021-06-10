(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-opn3]'),
    closeModalBtn: document.querySelector('[data-modal-cls3]'),
    modal: document.querySelector('[data-mdl3]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();