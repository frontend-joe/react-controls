import { ChangeEvent, useState } from "react";
import "./styles.css";

export const MaterialDesignTextbox = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="md-textbox">
      <input
        onChange={handleChange}
        className={`${value ? "has-value" : ""}`}
        id="textbox"
        type="text"
      />
      <span className="material-symbols-outlined">account_circle</span>
      <label htmlFor="textbox">Your Name</label>
    </div>
  );
};
