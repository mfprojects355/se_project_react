import useModalClose from "../../utils/useModalClose";
import "./ModalWithForm.css";

function ModalWithForm({
  isOpen,
  onClose,
  onSubmit,
  title,
  name,
  buttonText,
  children,
  isSubmitDisabled = false,
}) {
  useModalClose(isOpen, onClose);

  const titleId = `modal-${name}-title`;

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(event);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`modal modal_type_${name} modal_is-opened`}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        className="modal__overlay"
        onClick={onClose}
        aria-label="Close modal"
      />
      <div className="modal__container">
        <button
          type="button"
          className="modal__close-button"
          onClick={onClose}
          aria-label="Close modal"
        />
        <h2 className="modal__title ui-text-1" id={titleId}>
          {title}
        </h2>
        <form className="modal__form" name={name} onSubmit={handleSubmit}>
          {children}
          <button
            type="submit"
            className="button modal__submit ui-text-2_bold"
            disabled={isSubmitDisabled}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
