(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-desk-modal-open]'),
      closeModalBtn: document.querySelector('[ata-desk-modal-close]'),
      modal: document.querySelector('[data-desk-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();