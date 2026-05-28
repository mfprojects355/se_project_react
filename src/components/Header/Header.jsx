import logo from '../../assets/Logo.svg'
import avatar from '../../assets/avatar.svg'
import './Header.css'

const userName = 'Mohammad Farid'

function Header({ weatherData, onAddClothesClick }) {
  const currentDate = new Date().toLocaleString('default', {
    month: 'long',
    day: 'numeric',
  })

  return (
    <header className="header">
      <div className="header__left">
        <img className="header__logo" src={logo} alt="WTWR logo" />
        <p className="header__datetime ui-text-1">
          {currentDate}, {weatherData.city}
        </p>
      </div>
      <div className="header__right">
        <button
          type="button"
          className="header__add-button ui-text-1"
          onClick={onAddClothesClick}
        >
          + Add clothes
        </button>
        <p className="header__username ui-text-1">{userName}</p>
        <img className="header__avatar" src={avatar} alt={userName} />
      </div>
    </header>
  )
}

export default Header
