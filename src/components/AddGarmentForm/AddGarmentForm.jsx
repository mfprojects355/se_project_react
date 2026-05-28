function AddGarmentForm({
  name,
  imageUrl,
  weather,
  imageUrlError,
  onNameChange,
  onImageUrlChange,
  onWeatherChange,
}) {
  const imageErrorId = 'add-clothes-image-error'

  return (
    <>
      <label className="modal__label" htmlFor="add-clothes-name">
        <span className="modal__label-text ui-text-2_bold">Name</span>
        <input
          className="modal__input ui-text-2"
          id="add-clothes-name"
          name="garmentName"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => onNameChange(event.target.value)}
          required
        />
      </label>
      <label className="modal__label" htmlFor="add-clothes-image">
        <span
          className={`modal__label-text ui-text-2_bold ${
            imageUrlError ? 'modal__label-text_type_error' : ''
          }`}
        >
          {imageUrlError ? (
            <>
              Link<span className="modal__label-asterisk">*</span>
              <span className="modal__error-message" id={imageErrorId}>
                {' '}
                (This is not a valid image link)
              </span>
            </>
          ) : (
            'Image'
          )}
        </span>
        <input
          className={`modal__input ui-text-2 ${
            imageUrlError ? 'modal__input_type_error' : ''
          }`}
          id="add-clothes-image"
          name="garmentImage"
          type="url"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(event) => onImageUrlChange(event.target.value)}
          aria-invalid={imageUrlError}
          aria-describedby={imageUrlError ? imageErrorId : undefined}
          required
        />
      </label>
      <fieldset className="modal__fieldset">
        <legend className="modal__legend ui-text-2_bold">
          Select the weather type:
        </legend>
        <label className="modal__radio" htmlFor="garment-weather-hot">
          <input
            className="modal__radio-input"
            id="garment-weather-hot"
            type="radio"
            name="garmentWeather"
            value="hot"
            checked={weather === 'hot'}
            onChange={(event) => onWeatherChange(event.target.value)}
          />
          <span className="modal__radio-text ui-text-2_bold">Hot</span>
        </label>
        <label className="modal__radio" htmlFor="garment-weather-warm">
          <input
            className="modal__radio-input"
            id="garment-weather-warm"
            type="radio"
            name="garmentWeather"
            value="warm"
            checked={weather === 'warm'}
            onChange={(event) => onWeatherChange(event.target.value)}
          />
          <span className="modal__radio-text ui-text-2_bold">Warm</span>
        </label>
        <label className="modal__radio" htmlFor="garment-weather-cold">
          <input
            className="modal__radio-input"
            id="garment-weather-cold"
            type="radio"
            name="garmentWeather"
            value="cold"
            checked={weather === 'cold'}
            onChange={(event) => onWeatherChange(event.target.value)}
          />
          <span className="modal__radio-text ui-text-2_bold">Cold</span>
        </label>
      </fieldset>
    </>
  )
}

export default AddGarmentForm
