import { useRef, useState } from "react";
import "./styles.css";

const pages = [0, 1, 2, 3, 4, 5, 6, 7, 8];

export const Pagination = () => {
  const [activePage, setActivePage] = useState(0);

  const [isReversing, setIsReversing] = useState(false);

  const previousPage = useRef<number>(0);

  const handlePageChanged = (page: number) => {
    setIsReversing(previousPage.current > page);
    previousPage.current = page;
    setActivePage(page);
  };

  return (
    <div className="pagination">
      {pages.map((page) => (
        <button onClick={() => handlePageChanged(page)} />
      ))}
      <div
        className={`pacman ${isReversing ? "reverse" : ""}`}
        style={{ translate: `${activePage > 0 ? activePage * 100 : 0}%` }}
      />
    </div>
  );
};
