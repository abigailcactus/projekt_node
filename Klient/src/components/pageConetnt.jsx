import { useState, useEffect } from "react";
import { AddByHand } from "./addByHand";
import { AddISBN } from "./addISBN";
import { Home } from "./home";
import { Sort } from "./sort";

export function PageContent({ page, books, getBooks, search}) {

  useEffect(() => {
    getBooks("", "tytul", "asc");
  }, []);

  if (page == 0) {
    return (
      <>
        <Sort sortFun={getBooks} search={search}/>
        <Home books={books} getBooks={getBooks}/>
      </>
    );
  } else if (page == 1) {
    return <AddISBN />;
  } else if (page == 2) {
    return <AddByHand />;
  } 
}
