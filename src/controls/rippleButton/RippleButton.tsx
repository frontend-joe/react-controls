import { MouseEvent } from "react";
import { createRoot } from "react-dom/client";
import { Ripple } from "./Ripple";
import "./styles.css";

export const RippleButton = () => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (!document.getElementById("ripple-shape")) {
      const btn: HTMLButtonElement = e?.currentTarget;
      const rect: DOMRect = btn.getBoundingClientRect();
      const top = `${e.clientY - rect.y}px`;
      const left = `${e.clientX - rect.x}px`;

      const container = createRoot(
        document.getElementById("ripple-container")!
      );

      container.render(<Ripple top={top} left={left} />);

      setTimeout(() => {
        container.unmount();
      }, 1000);
    }
  };

  return (
    <button onClick={handleClick} className="ripple-button">
      <span className="ripple-button-text">
        Login Now
        <span className="material-symbols-outlined">arrow_forward</span>
      </span>

      <span id="ripple-container"></span>
    </button>
  );
};
