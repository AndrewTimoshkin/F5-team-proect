(() => {
    const refs = {
      openModalBtn: document.querySelector('[desk-modal-open]'),
      closeModalBtn: document.querySelector('[desk-modal-close]'),
      modal: document.querySelector('[desk-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();