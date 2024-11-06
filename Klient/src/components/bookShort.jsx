import { useState } from "react";
import { Delete } from "./delete";
import { BookInfo } from "./bookInfo";

export function BookShort({bookData, getBooks}) {
  const [display, setDisplay] = useState("none")
  const [showInfo, setShow] = useState()
  const stopShowing = ()=>{
    setShow("none")
  }
  const displayNone = ()=>{
    setDisplay("none")
  }
  return (
    <>
    <div className="bookData" >
      <div className="bookShort" onClick={() => {setShow("block")}}>
        <div>{bookData.tytul}</div>
        <div>{bookData.autorzy}</div>
        <div>{bookData.rok_wydania}</div>
        <div>{bookData.jezyk}</div>
        <div>{bookData.jezyk_oryginal}</div>
        <div>{bookData.nazwa}</div>
        <div>{bookData.ISBN}</div>
      </div>
      
      
      <div
        className="deleteBtn"
        onClick={() => {
          setDisplay("block")
        }}
      >
        Usuń
      </div>
      {display=="block"&&<Delete id={bookData.id} title={bookData.tytul} displayNone={displayNone} getBooks={getBooks}/>}
    </div>
    {showInfo == "block"&&<BookInfo bookData={bookData} onClick={stopShowing}/>}
    </>
  );
}
