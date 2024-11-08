import { Alert } from "./alert";
import { useState } from "react";

export function AddByHand() {
  const [alert, setAlert] = useState(false);
  const [title, setTitle] = useState(["", ""]);
  const [isbn, setISBN] = useState(["", ""]);
  const [desc, setDesc] = useState("");
  const [authors, setAuthors] = useState("");
  const [year, setYear] = useState(null);
  const [genre, setGenre] = useState("");
  const [lang, setLang] = useState("");
  const [langOg, setLangOg] = useState("");

  return (
    <div className="add">
      <form>
        <label>
          Tytuł {"("}pole obowiązkowe{")"}
        </label>
        <br />
        {title[1] == "red" && "Uzupełnij pole"}
        <input
          type="text"
          placeholder="Tytuł"
          name="title"
          className="addBookI"
          onChange={(e) => {
            setTitle([e.target.value, ""]);
            console.log(title);
          }}
          onBlur={(e) => {
            if (e.target.value.length == 0) {
              setTitle([e.target.value, "red"]);
            }
          }}
          style={{ backgroundColor: title[1] }}
        />

        <br />
        <label>Opis</label>
        <br />
        <input
          type="text"
          placeholder="Opis"
          name="desc"
          className="addBookI"
          onChange={(e) => {
            setDesc(e.target.value);
            console.log(desc);
          }}
        />
        <br />
        <label>Autorzy</label>
        <br />
        <input
          type="text"
          placeholder="Autorzy"
          name="authors"
          className="addBookI"
          onChange={(e) => {
            setAuthors(e.target.value);
            console.log(authors);
          }}
        />
        <br />
        <label>Rok pierwszego wydania</label>
        <br />
        <input
          type="number"
          placeholder="Rok pierwszego wydania"
          name="year"
          className="addBookI"
          onChange={(e) => {
            setYear(e.target.value);
            console.log(year);
          }}
        />
        <br />
        <label>Gatunek</label>
        <br />
        <input
          type="text"
          placeholder="Gatunek"
          name="genre"
          className="addBookI"
          onChange={(e) => {
            setGenre(e.target.value);
            console.log(genre);
          }}
        />
        <br />
        <label>Język</label>
        <br />
        <input
          type="text"
          placeholder="Język"
          name="lang"
          className="addBookI"
          onChange={(e) => {
            setLang(e.target.value);
            console.log(lang);
          }}
        />
        <br />
        <label>Język oryginału</label>
        <br />
        <input
          type="text"
          placeholder="Język oryginału"
          name="ogLang"
          className="addBookI"
          onChange={(e) => {
            setLangOg(e.target.value);
            console.log(langOg);
          }}
        />
        <br />
        <label>
          ISBN {"("}pole obowiązkowe{")"}
        </label>
        <br />
        {isbn[1] == "red" && "Uzupełnij pole"}
        <input
          type="number"
          placeholder="ISBN"
          name="isbn"
          className="addBookI"
          onChange={(e) => {
            setISBN([e.target.value, ""]);
            console.log(isbn);
          }}
          onBlur={(e) => {
            if (e.target.value.length == 0) {
              setISBN([e.target.value, "red"]);
            }
          }}
          style={{ backgroundColor: isbn[1] }}
        />
        <br />
      </form>
      <div
        className="addBtn"
        onClick={() => {
          if (title[0].length > 0 && isbn[0].length > 0) {
            const bookData = {
              title: title[0],
              desc: desc,
              authors: authors,
              year: year,
              genre: genre,
              lang: lang,
              ogLang: langOg,
              isbn: isbn[0],
            };
            fetch("http://localhost:8000/addForm", {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify(bookData),
            })
              .then((res) => res.json())
              .then((myJson) => {
                console.log(myJson);
                setAlert(myJson);
              });
          } else {
            if (title[0].length < 1) {
              setAlert("Uzupełnij pola");
              setTitle(["", "red"]);
            }
            if (isbn[0].length < 1) {
              setAlert("Uzupełnij pola");
              setISBN(["", "red"]);
            }
          }
        }}
      >
        Dodaj!
      </div>
      {alert.length > 0 && <Alert text={alert} />}
    </div>
  );
}
