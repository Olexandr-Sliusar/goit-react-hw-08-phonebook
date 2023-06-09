import { ContactForm } from 'components/ContactForm/ContactForm';
import { EditForm } from 'components/EditForm/EditForm';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Modal, Overlay } from './ModalContact.styled';

const modalRoot = document.querySelector('#modal-root');

export const ModalContact = ({ onClose, edit, values, showSnake }) => {
  useEffect(() => {
    window.addEventListener('keydown', clickCloseModal);
    return () => {
      window.removeEventListener('keydown', clickCloseModal);
    };
  });
  const clickCloseModal = event => {
    if (event.code === 'Escape' || event.target === event.currentTarget) {
      return onClose();
    }
  };

  return createPortal(
    <Overlay onClick={clickCloseModal}>
      <Modal>
        {!edit ? (
          <ContactForm onClose={onClose} showSnake={showSnake} />
        ) : (
          <EditForm onClose={onClose} values={values} showSnake={showSnake} />
        )}
      </Modal>
    </Overlay>,
    modalRoot
  );
};
