import { FC, useEffect, useState } from "react";

import "./styles.css";

type Props = {
  pagesToDisplay?: number;
  pageCount?: number;
};

export const Pagination: FC<Props> = ({
  pagesToDisplay = 5,
  pageCount = 10,
}) => {
  const [pages, setPages] = useState<number[]>([]);
  const [activePage, setActivePage] = useState<number>();

  const buildPagination = (pageIndex: number) => {
    setActivePage(pageIndex);

    console.log("pageIndex", pageIndex);

    let newPages = [];

    let start = 0;
    let end = pagesToDisplay;

    if (pageIndex > (pagesToDisplay - 1) / 2) {
      start = pageIndex - (pagesToDisplay - 1) / 2;
      end = start + pagesToDisplay;
    }

    if (pageIndex > pageCount - (pagesToDisplay + 1) / 2) {
      start = pageCount - pagesToDisplay;
      end = pageCount;
    }

    for (let i = start; i < end; i++) {
      newPages.push(i);
    }

    setPages(newPages);
  };

  useEffect(() => {
    buildPagination(0);
  }, []);

  return (
    <div className="pagination">
      <button
        disabled={activePage === 0}
        onClick={() => buildPagination(0)}
        className="material-symbols-outlined"
        type="button"
      >
        first_page
      </button>
      {pages.map((page: number) => (
        <button
          className={page === activePage ? "active" : ""}
          onClick={() => buildPagination(page)}
          key={page}
          type="button"
        >
          {page + 1}
        </button>
      ))}
      <button
        disabled={activePage === pageCount - 1}
        onClick={() => buildPagination(pageCount - 1)}
        className="material-symbols-outlined"
        type="button"
      >
        last_page
      </button>
    </div>
  );
};
