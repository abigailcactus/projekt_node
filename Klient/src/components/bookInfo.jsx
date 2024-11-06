import { useState } from "react";

export function BookInfo({bookData, onClick}){
    const [hide, setHide] = useState("")
    return (
    <div className="bookInfo" onClick={onClick} onMouseOver={()=>{setHide("Ukryj opis")}} onMouseOut={()=>{setHide("")}}>
        <div>Opis: {bookData.opis.length<=0?"brak":bookData.opis}<br/>{hide}</div>
    </div>
  );
}