import { ChangeEvent, useState } from "react";
import "./styles.css";

export const MinimalTextbox = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="wrapper">
      <input
        spellCheck="false"
        className={`${value ? "has-value" : ""}`}
        onChange={handleChange}
        type="text"
      />
      <label>Location</label>
    </div>
  );
};
