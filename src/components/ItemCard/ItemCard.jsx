import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {
  const handleActivate = () => onCardClick(item);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onCardClick(item);
    }
  };

  return (
    <li
      className="item-card"
      onClick={handleActivate}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View ${item.name}`}
    >
      <img className="item-card__image" src={item.link} alt={item.name} />
      <span className="item-card__name-container">
        <h2 className="item-card__name ui-text-2_bold">{item.name}</h2>
      </span>
    </li>
  );
}

export default ItemCard;
