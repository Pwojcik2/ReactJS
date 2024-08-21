import { RegularList } from "./components/lists/Regular";
import { authors } from "./data/authors";
import { SmallAuthorListItem } from "./components/authors/SmallListItems";
import { LargeAuthorListItem } from "./components/authors/LargeListItems";
import { books } from "./data/books";
import { SmallBookListItem } from "./components/books/SmallListItems";
import { LargeBookListItem } from "./components/books/LargeListItems";
import { NumberedList } from "./components/lists/NumberedList";
import { Modal } from "./components/Modal";

function App() {
  return (
    <>
      {/* <RegularList
        items={authors}
        sourceName={"author"}
        ItemComp={SmallAuthorListItem}
      />
      <RegularList
        items={authors}
        sourceName={"author"}
        ItemComp={LargeAuthorListItem}
      /> */}

      {/* <RegularList
        items={books}
        sourceName={"book"}
        ItemComp={SmallBookListItem}
      /> */}

      {/* <NumberedList
        items={books}
        sourceName={"book"}
        ItemComp={LargeBookListItem}
      /> */}

      <Modal>
        <LargeBookListItem book={books[0]} />
      </Modal>
    </>
  );
}

export default App;
