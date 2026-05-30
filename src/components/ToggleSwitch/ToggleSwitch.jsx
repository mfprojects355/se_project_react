import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import "./ToggleSwitch.css";

function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext,
  );

  return (
    <label className="toggle-switch">
      <input
        className="toggle-switch__checkbox"
        type="checkbox"
        checked={currentTemperatureUnit === "C"}
        onChange={handleToggleSwitchChange}
        aria-label="Toggle temperature unit"
      />
      <span className="toggle-switch__thumb" />
      <span className="toggle-switch__unit toggle-switch__unit_type_f">F</span>
      <span className="toggle-switch__unit toggle-switch__unit_type_c">C</span>
    </label>
  );
}

export default ToggleSwitch;
