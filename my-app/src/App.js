// import { CurrentUserLoader } from "./Section3/components/current-user-loader";
import { UserInfo } from "./Section3/components/user-info";
import { UserLoader } from "./Section3/components/user-loader";

function App() {
  return (
    <>
      <UserLoader userId={"3"}>
        <UserInfo />
      </UserLoader>
    </>
  );
}

export default App;
