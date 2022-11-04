import { MouseEvent, useState } from "react";
import "./styles.css";

const radioButtons = ["Frontend", "Backend", "Full-stack"];

export const RadioButtons = () => {
  const [, setState] = useState("");

  const handleChange = (e: MouseEvent<HTMLInputElement>) => {
    const element: HTMLInputElement = e.currentTarget;
    setState(element.value);
  };

  return (
    <div className="radio-buttons">
      {radioButtons.map((value) => (
        <label key={value}>
          <input
            type="radio"
            name="radio-group"
            onClick={handleChange}
            value={value}
          />
          <span className="radio">
            <span />
          </span>
          <span>{value}</span>
        </label>
      ))}
    </div>
  );
};
