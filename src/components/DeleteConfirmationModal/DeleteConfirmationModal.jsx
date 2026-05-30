import useModalClose from "../../utils/useModalClose";
import "../ModalWithForm/ModalWithForm.css";
import "./DeleteConfirmationModal.css";

const DELETE_CONFIRMATION_TITLE_ID = "delete-confirmation-title";

function DeleteConfirmationModal({ isOpen, onClose, onConfirm }) {
  useModalClose(isOpen, onClose);

  return (
    <div
      className={`modal modal_type_delete-confirmation ${isOpen ? "modal_is-opened" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby={DELETE_CONFIRMATION_TITLE_ID}
    >
      <button
        type="button"
        className="modal__overlay"
        onClick={onClose}
        aria-label="Close modal"
      />
      <div className="modal__container delete-confirmation-modal__container">
        <button
          type="button"
          className="modal__close-button"
          onClick={onClose}
          aria-label="Close modal"
        />
        <p
          className="delete-confirmation-modal__text ui-text-1"
          id={DELETE_CONFIRMATION_TITLE_ID}
        >
          Are you sure you want to delete this item?
          <br />
          This action is irreversible.
        </p>
        <div className="delete-confirmation-modal__actions">
          <button
            type="button"
            className="delete-confirmation-modal__confirm-button"
            onClick={onConfirm}
          >
            Yes, delete item
          </button>
          <button
            type="button"
            className="delete-confirmation-modal__cancel-button"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;
