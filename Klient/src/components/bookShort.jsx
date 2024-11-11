import { useState } from "react";
import { Delete } from "./delete";
import { BookInfo } from "./bookInfo";

export function BookShort({bookData, getBooks}) {
  const [displayDelete, setDisplay] = useState(false)
  const [showInfo, setShow] = useState(false)
  const stopShowing = ()=>{
    setShow(false)
  }
  const displayNone = ()=>{
    setDisplay(false)
  }
  return (
    <>
    <div className="bookData" >
      <div className="bookShort" onClick={() => {setShow(true)}}>
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
          setDisplay(true)
        }}
      >
        Usuń
      </div>
      {displayDelete==true&&<Delete id={bookData.id} title={bookData.tytul} displayNone={displayNone} getBooks={getBooks}/>}
    </div>
    {showInfo == true&&<BookInfo bookData={bookData} onClick={stopShowing}/>}
    </>
  );
}
