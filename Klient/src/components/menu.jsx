import { useState } from "react";

export function Menu({ addISBN, addByHand, goHome, searchVal, searchFunc }) {
  const [searchContent, setSearch] = useState("");
  let theme = "";
  return (
    <div id="menu">
      <div className="textBox">
        <form>
          <input
            type="text"
            id="search"
            placeholder="Szukaj"
            value={searchContent}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                console.log("enter");
                searchVal(searchContent);
                searchFunc(searchContent, "tytul", "asc");
              }
            }}
          />
        </form>

        <div
          id="glass"
          onClick={() => {
            searchVal(searchContent);
            searchFunc(searchContent, "tytul", "asc");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#ffffff"
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
        </div>
      </div>
      <div
        className="addBtn"
        onClick={() => {
          setSearch("");
          searchVal("");
          searchFunc("", "tytul", "asc");
          goHome();
        }}
      >
        Strona główna
      </div>
      <div
        className="addBtn"
        onClick={() => {
          setSearch("");
          searchVal("");
          searchFunc("", "tytul", "asc");
          addByHand();
        }}
      >
        Dodaj książkę ręcznie
      </div>
      <div
        className="addBtn"
        onClick={() => {
          setSearch("");
          searchVal("");
          searchFunc("", "tytul", "asc");
          addISBN();
        }}
      >
        Dodaj książkę po ISBN
      </div>

      <div id="change_theme">
        <form>
          <select
            onChange={(e) => {
              theme = e.target.value;
              switch (theme) {
                case "red":
                  document.documentElement.style.setProperty(
                    "--lighterColor",
                    "#780000"
                  );
                  document.documentElement.style.setProperty(
                    "--primaryColor",
                    "#560000"
                  );
                  document.documentElement.style.setProperty(
                    "--darkerColor",
                    "#420101"
                  );
                  document.documentElement.style.setProperty(
                    "--textColor",
                    "#ffffffc7"
                  );
                  break;
                case "blue":
                  document.documentElement.style.setProperty(
                    "--lighterColor",
                    "#4989ab"
                  );
                  document.documentElement.style.setProperty(
                    "--primaryColor",
                    "#044263"
                  );
                  document.documentElement.style.setProperty(
                    "--darkerColor",
                    "#072a3d"
                  );
                  document.documentElement.style.setProperty(
                    "--textColor",
                    "#ffffffc7"
                  );
                  break;
                case "white":
                  document.documentElement.style.setProperty(
                    "--lighterColor",
                    "#d1d1d1"
                  );
                  document.documentElement.style.setProperty(
                    "--primaryColor",
                    "#ffffff"
                  );
                  document.documentElement.style.setProperty(
                    "--darkerColor",
                    "#9b9b9b"
                  );
                  document.documentElement.style.setProperty(
                    "--textColor",
                    "#000000"
                  );
                  break;
                case "black":
                  document.documentElement.style.setProperty(
                    "--lighterColor",
                    "#252525"
                  );
                  document.documentElement.style.setProperty(
                    "--primaryColor",
                    "#171717"
                  );
                  document.documentElement.style.setProperty(
                    "--darkerColor",
                    "#000000"
                  );
                  document.documentElement.style.setProperty(
                    "--textColor",
                    "#ffffffc7"
                  );
                  break;
              }
            }}
          >
            <option value="red">Czerwony</option>
            <option value="blue">Niebieski</option>
            <option value="white">Biały</option>
            <option value="black">Czarny</option>
          </select>
        </form>
      </div>
    </div>
  );
}
