import { ChangeEvent, useState } from "react";
import "./styles.css";

export const AntDesignTextbox = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="ad-textbox">
      <input
        onChange={handleChange}
        className={`${value ? "has-value" : ""}`}
        id="textbox"
        type="text"
      />
      <span className="material-symbols-outlined">mail</span>
      <label htmlFor="textbox">Email Address</label>
      <div className="underline" />
    </div>
  );
};
