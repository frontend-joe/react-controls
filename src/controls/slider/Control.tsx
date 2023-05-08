import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";
import "./styles.css";

export const Control = () => {
  const [value, setValue] = useState(20000);

  const handleChange = (val: number | number[]) => {
    setValue(Number(val));
  };

  return (
    <div className="card">
      <header>
        <h2>Estimated Down Payment</h2>
        <h3>
          <abbr>$</abbr>
          {value.toLocaleString("en-US")}
        </h3>
      </header>
      <Slider step={25} max={100000} value={value} onChange={handleChange} />
      {/* <button>Calculate Loan</button> */}
    </div>
  );
};
