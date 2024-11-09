import { useState } from "react";
import { Menu } from "./components/menu";
import { PageContent } from "./components/pageConetnt";

function App() {
  const [homeContent, setHomeContent] = useState(0);
  const [searchContent, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  const goHome = () => {
    setHomeContent(0);
  };
  const addISBN = () => {
    setHomeContent(1);
  };
  const addByHand = () => {
    setHomeContent(2);
  };
  const search = (searchC) => {
    setHomeContent(0);
    setSearch(searchC);
    console.log("szukana fraza: ");
    console.log(searchContent);
  };

  const getBooks = (search, order, sort) => {
    let path;
    if (search.length > 0) {
      path =
        "http://localhost:8000/search/" + search + "/" + order + "/" + sort;
    } else {
      path = "http://localhost:8000/order/" + order + "/" + sort;
    }

    fetch(path)
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        setBooks(myJson);
      });
  };

  return (
    <>
      <Menu
        addISBN={addISBN}
        addByHand={addByHand}
        goHome={goHome}
        searchVal={search}
        searchFunc={getBooks}
      />
      <div id="page_content">
        <PageContent
          page={homeContent}
          books={books}
          getBooks={getBooks}
          search={searchContent}
        />
      </div>
    </>
  );
}

export default App;
