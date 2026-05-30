import avatar from "../../assets/avatar.svg";
import "./SideBar.css";

const userName = "Mohammad Farid";

function SideBar() {
  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src={avatar} alt={userName} />
      <p className="sidebar__username ui-text-1">{userName}</p>
    </div>
  );
}

export default SideBar;
