import { useState } from "react";

import "./styles.css";

const pages = [1, 2, 3, 4, 5];

export const Pagination = () => {
  const [activePage, setActivePage] = useState<number>(1);

  const gotoPage = (page: number) => setActivePage(page);

  return (
    <div className="pager">
      {pages.map((page: number) => (
        <button
          className={`pager-button ${page === activePage ? "active" : ""}`}
          onClick={() => gotoPage(page)}
          key={page}
          type="button"
        ></button>
      ))}
    </div>
  );
};
