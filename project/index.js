const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = new express();
const port = 8000;
app.use(cors());
app.use(bodyParser.json());

let db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ksiegozbior",
});

db.connect((err) => {
  if (!err) {
    console.log("Connected");
  } else {
    console.log("Error");
  }
});

function checkIfExistsAddShowId(query1, query2) {
  return new Promise((id) => {
    let exists = false;
    db.query(query1, (err, result) => {
      console.log(result);
      if (result.length > 0) {
        exists = true;
        console.log(exists);
        console.log("to coś istnieje w bazie danych");
        db.query(query1, (err, result) => {
          result.forEach((row) => {
            id(row["id"]);
          });
        });
      } else {
        console.log("to coś nie istnieje w bazie danych");
        if (exists == false) {
          console.log("nowe dane");
          db.query(query2, (err, result) => {
            console.log("Dodano nowe dane!");
            db.query(query1, (err, result) => {
              result.forEach((row) => {
                id(row["id"]);
              });
            });
          });
        }
      }
    });
  });
}

async function addBook(
  title,
  authors,
  genre,
  langOriginal,
  description,
  year,
  lang,
  ISBN,
  res
) {
  // sprawdzamy, czy mamy już takiego autora w bazie, jeżeli nie to go dodajemy
  let authorQuery =
    "select id from autorzy where autorzy like '" + authors + "'";
  let addAuthor = "insert into autorzy values ('', '" + authors + "')";
  let idAuthor = 0;
  let idLangOriginal = 0;
  let idLang = 0;
  let idGenre = 0;
  idAuthor = await checkIfExistsAddShowId(authorQuery, addAuthor);

  // sprawdzamy, czy mamy już taki język w bazie, jeżeli nie to go dodajemy
  let langOriginalQuery = "select id from jezyki where jezyk like '" + langOriginal + "'";
  let addLangOriginal = "insert into jezyki values ('', '" + langOriginal + "')";
  idLangOriginal = await checkIfExistsAddShowId(langOriginalQuery, addLangOriginal);

  let langQuery = "select id from jezyki where jezyk like '" + lang + "'";
  let addLang = "insert into jezyki values ('', '" + lang + "')";
  idLang = await checkIfExistsAddShowId(langQuery, addLang);

  // sprawdzamy, czy mamy już taki gatunek w bazie, jeżeli nie, to go dodajemy

  let genreQuery = "select id from gatunki where nazwa like '" + genre + "'";
  let addGenre = "insert into gatunki values ('', '" + genre + "')";
  idGenre = await checkIfExistsAddShowId(genreQuery, addGenre);

  // sprawdzamy jakie id mają w bazie autor, język i gatunek

  console.log("Id autora = " + idAuthor);
  console.log("Id języka = " + idLang);
  console.log("Id języka = " + idLangOriginal);
  console.log("Id gatunku = " + idGenre);

  // następnie dodajemy do tabeli ksiazki dane z formularza i klucze obce
  let searchBook = "select id from ksiazki where ISBN like '" + ISBN + "'";
  let addBook =
    "insert into ksiazki values ('', '" +
    title +
    "', '" +
    description +
    "', " +
    idAuthor +
    ", " +
    year +
    ", " +
    idGenre +
    ", '" +
    idLang +
    "', " +
    idLangOriginal +
    ", '" +
    ISBN +
    "')";
  db.query(searchBook, (err, result) => {
    if (result.length > 0) {
      console.log("Książka istnieje");
      res.json("Książka istnieje");
    } else {
      console.log("Książka zostanie dodana");
      db.query(addBook, (err, result) => {
        if (!err) {
          console.log("Dodano książkę");
          res.json("Dodano książkę");
        } else {
          res.json("Błąd");
        }
      });
    }
  });
}

app.get("/order/:orderBy/:desc", (req, res) => {
  // wyświetlanie wszystkich rekordów bazy danych
  let order_by = req.params.orderBy; // zmienna określająca po czym sortowane są dane
  let desc = req.params.desc; // czy malejąco?
  let sql =
    "select ksiazki.id, tytul, autorzy, opis, rok_wydania, jezyk2.jezyk as jezyk, jezyk1.jezyk as jezyk_oryginal, nazwa, ISBN from ksiazki join autorzy on ksiazki.oznaczenie_odpowiedzialnosci = autorzy.id join jezyki as jezyk1 on ksiazki.oryginalny_jezyk = jezyk1.id join jezyki as jezyk2 on ksiazki.jezyk = jezyk2.id join gatunki on ksiazki.gatunek_id = gatunki.id order by " +
    order_by +
    " " +
    desc;
  db.query(sql, (err, result) => {
    console.log(result);
    res.json(result);
  });
});

app.get("/search/:searchVal/:orderBy/:desc", (req, res) => {
  // wyświetlanie wszystkich rekordów bazy danych
  let search = req.params.searchVal;
  let order_by = req.params.orderBy; // zmienna określająca po czym sortowane są dane
  let desc = req.params.desc; // czy malejąco?
  let sql =
    "select ksiazki.id, tytul, autorzy, opis, rok_wydania, jezyk2.jezyk as jezyk, jezyk1.jezyk as jezyk_oryginal, nazwa, ISBN from ksiazki join autorzy on ksiazki.oznaczenie_odpowiedzialnosci = autorzy.id join jezyki as jezyk1 on ksiazki.oryginalny_jezyk = jezyk1.id join jezyki as jezyk2 on ksiazki.jezyk = jezyk2.id join gatunki on ksiazki.gatunek_id = gatunki.id having tytul like '%" +
    search +
    "%' or opis like '%" +
    search +
    "%' or autorzy like '%" +
    search +
    "%' or rok_wydania like '%" +
    search +
    "%' or jezyk like '%" +
    search +
    "%' or jezyk_oryginal like '%" +
    search +
    "%' or nazwa like '%" +
    search +
    "%' or ISBN like '" +
    search +
    "' order by " +
    order_by +
    " " +
    desc;
  db.query(sql, (err, result) => {
    console.log(result);
    res.json(result);
  });
});

app.post("/addForm", (req, res) => {
  if (req.body) {
    let title = req.body.title;
    let authors = req.body.authors;
    let genre = req.body.genre;
    let lang = req.body.lang;
    let langOriginal = req.body.ogLang;
    let description = req.body.desc;
    let year = req.body.year;
    let isbn = req.body.isbn;

    console.log("Tytuł: " + title);
    console.log("Autor: " + authors);
    console.log("ISBN: " + isbn);

    addBook(
      title,
      authors,
      genre,
      langOriginal,
      description,
      year,
      lang,
      isbn,
      res
    );
  } else {
    console.log("Error");
  }
  // dodawanie rekordów
  // dane pobierane z formularza u klienta, wysyłane w formacie json
});

app.get("/addJson/:isbn", async (req, res) => {
  // dane z biblioteki narodowej podawane po isbn
  let response = "";
  let ISBN = req.params.isbn;
  let ISBN2 = ISBN.replaceAll("-", "");

  let data = await fetch(
    "https://data.bn.org.pl/api/institutions/bibs.json?isbnIssn=" + ISBN2
  );
  let book = await data.json();
  if (book.bibs.length > 0) {
    let desc = book.bibs[0].subjectPlace + ", " + book.bibs[0].subject;
    let year = book.bibs[0].timePeriodOfCreation;
    if (book.bibs[0].timePeriodOfCreation.length == 0) {
      year = book.bibs[0].publicationYear;
    }

    let lang = book.bibs[0].language;
    let langOriginal = book.bibs[0].languageOfOriginal;

    if (lang == null && langOriginal != null) {
      lang = langOriginal;
    } else if (langOriginal == null && lang != null) {
      langOriginal = lang;
    } else if (lang == null && langOriginal == null) {
      lang = "";
      langOriginal = "";
    }

    if(desc[0] == ","){
      desc = desc.substring(1)
    }
    if(desc == " , " || desc == ""){
      desc = "brak"
    }

    addBook(
      book.bibs[0].title,
      book.bibs[0].author,
      book.bibs[0].genre,
      langOriginal,
      desc,
      year,
      lang,
      ISBN,
      res
    );
  } else {
    console.log("Nie ma takiej książki w bazie Biblioteki Narodowej");
    response = "Nie ma takiej książki w bazie Biblioteki Narodowej";
    res.json(response);
  }
});

app.get("/deleteBook/:bookId", (req, res) => {
  // usuwanie książek
  let bookId = req.params.bookId;
  let deleteBook = "delete from ksiazki where id like " + bookId;
  db.query(deleteBook, (err, result) => {
    if (!err) {
      console.log(result);
      res.json("Usunięto");
    }
  });
});

app.listen(port, (err) => {
  if (!err) {
    console.log("Server started");
  }
});
