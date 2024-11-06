import { useEffect, useState } from "react";
import { BookShort } from "./bookShort";

export function Home({books, getBooks}) {
  return (
    <div id="home">
      <div className="header">
        <div>Tytuł</div>
        <div>Autorzy</div>
        <div>Rok wydania</div>
        <div>Język</div>
        <div>Język oryginału</div>
        <div>Gatunek</div>
        <div>ISBN</div>
      </div>
      {books.map((book, index) => (
        <BookShort bookData={book} getBooks={getBooks} key={index}/>
      ))}
    </div>
  );
}
