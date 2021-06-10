(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-opn]'),
    closeModalBtn: document.querySelector('[data-modal-cls]'),
    modal: document.querySelector('[data-mdl]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();