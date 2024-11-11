export function Delete({id, title, displayNone, getBooks}){
    return <div id="delete">
        <div id="deleteWindow">
            <h2>Na pewno usunąć książkę "{title}"?</h2>
            <div>
              <div className="addBtn" onClick={()=>{
                  let path = "http://localhost:8000/deleteBook/" + id
                  fetch(path)
                    .then(function (response) {
                      console.log(response);
                      return response.json();
                    })
                    .then(function (myJson) {
                      console.log(myJson)
                    });

                  getBooks("", "tytul", "asc")
                  displayNone()
                  
                  }}>Tak</div>
              <div className="addBtn" onClick={displayNone}>Nie</div>
            </div>
        </div>
    </div>
}