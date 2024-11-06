import { useState } from "react";
import { Alert } from "./alert";

export function AddISBN() {
  let isbn = "";
  const [alert, setAlert] = useState("");
  return (
    <div className="add">
      <label>Podaj ISBN książki:</label>
      <form>
        <input
          type="text"
          placeholder="ISBN"
          className="addBookI"
          onChange={(e) => {
            isbn = e.target.value;
          }}
        />
      </form>
      <div
        className="addBtn"
        onClick={() => {
          if (isbn.length > 0) {
            isbn = isbn.replaceAll(" ", "");
            let path = "http://localhost:8000/addJson/" + isbn;
            fetch(path)
              .then(function (response) {
                console.log(response);
                return response.json();
              })
              .then(function (myJson) {
                setAlert(myJson);
                console.log(alert);
              });
          }
        }}
      >
        Dodaj!
      </div>
      {alert.length > 0 && <Alert text={alert} />}
    </div>
  );
}
