import { RegularList } from "./components/lists/Regular";
import { authors } from "./data/authors";
import { SmallAuthorListItem } from "./components/authors/SmallListItems";
import { LargeAuthorListItem } from "./components/authors/LargeListItems";

function App() {
  return (
    <>
      <RegularList
        items={authors}
        sourceName={"author"}
        ItemComp={SmallAuthorListItem}
      />
      <RegularList
        items={authors}
        sourceName={"author"}
        ItemComp={LargeAuthorListItem}
      />
    </>
  );
}

export default App;
