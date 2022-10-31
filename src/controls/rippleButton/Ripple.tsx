import { FC } from "react";

type Props = {
  top: string;
  left: string;
};

export const Ripple: FC<Props> = ({ top, left }) => (
  <span style={{ top, left }} id="ripple-shape" className="ripple-shape"></span>
);
