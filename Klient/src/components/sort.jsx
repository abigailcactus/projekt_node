import { useState } from "react";
export function Sort({sortFun, search}) {
  const [sortState, setSort] = useState("asc");
  const [orderState, setOrder] = useState("tytul");
  let order = "tytul"
  let sort = "asc"
  return (
    <div id="sort">
      Sortuj po
      <form>
        <select onClick={(e)=>{
          setOrder(e.target.value)
          order = e.target.value
          sortFun(search, order, sortState)
          console.log(orderState)
          }}>
          <option value="tytul">tytule</option>
          <option value="rok_wydania">roku wydania</option>
          <option value="autorzy">autorze</option>
        </select>
        <br />
        <input type="radio" value="asc" name="sort" id="asc" defaultChecked onClick={(e)=>{
          setSort(e.target.value)
          sort = e.target.value
          console.log(sortState)
          sortFun(search, orderState, sort)
          }}/>
        <label htmlFor="asc">Rosnąco</label>
        <br />
        <input type="radio" value="desc" name="sort" id="desc" onClick={(e)=>{
          setSort(e.target.value)
          sort = e.target.value
          console.log(sortState)
          sortFun(search, orderState, sort)
          }}/>
        <label htmlFor="desc">Malejąco</label>
      </form>
    </div>
  );
}
