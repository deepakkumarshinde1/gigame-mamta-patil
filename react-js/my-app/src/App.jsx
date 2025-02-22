import From from "./components/From";
import { UserFormContextProvider } from "./context/users.context";
function App() {
  return (
    <>
      <UserFormContextProvider>
        <From />
      </UserFormContextProvider>
    </>
  );
}

export default App;
