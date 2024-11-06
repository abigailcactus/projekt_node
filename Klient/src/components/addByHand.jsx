import { Alert } from "./alert";
import { useState } from "react";

export function AddByHand() {
  const [alert, setAlert] = useState(false);
  const [title, setTitle] = useState("");
  const [isbn, setISBN] = useState("");
  const [desc, setDesc] = useState("");
  const [authors, setAuthors] = useState("");
  const [year, setYear] = useState(0);
  const [genre, setGenre] = useState("");
  const [lang, setLang] = useState("");
  const [langOg, setLangOg] = useState("");
  return (
    <div className="add">
      <form>
        <label>Tytuł</label>
        <br />
        <input
          type="text"
          placeholder="Tytuł"
          name="title"
          className="addBookI"
          onChange={(e) => {
            setTitle(e.target.value);
            console.log(title);
          }}
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
        <label>ISBN</label>
        <br />
        <input
          type="text"
          placeholder="ISBN"
          name="isbn"
          className="addBookI"
          onChange={(e) => {
            setISBN(e.target.value);
            console.log(isbn);
          }}
        />
        <br />
      </form>
      <div
        className="addBtn"
        onClick={() => {
          if (title.length > 0 && isbn.length > 0) {
            const bookData = {
              title: title,
              desc: desc,
              authors: authors,
              year: year,
              genre: genre,
              lang: lang,
              ogLang: langOg,
              isbn: isbn,
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
            // let path =
            //   "http://localhost:8000/addForm/" +
            //   title +
            //   "/" +
            //   authors +
            //   "/" +
            //   genre +
            //   "/" +
            //   lang +
            //   "/" +
            //   langOg +
            //   "/" +
            //   desc +
            //   "/" +
            //   year +
            //   "/" +
            //   isbn;
            // fetch(path)
            //   .then(function (response) {
            //     console.log(response);
            //     return response.json();
            //   })
            //   .then(function (myJson) {
            //     setAlert(myJson);
            //     console.log(alert);
            //   });
          } else {
            if (title.length < 1) {
              setAlert("Wpisz tytuł");
            }
            if (isbn.length < 1) {
              setAlert("Wpisz ISBN");
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
