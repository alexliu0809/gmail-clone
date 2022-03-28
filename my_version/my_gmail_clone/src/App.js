import { useLocalContext } from "./context/context.js";
import Signin from "./components/signin/signin.js";
import Loading from "./components/loading/loading.js"
function App() {
  // You have to get a specific var, otherwise it returns null
  const { appState } = useLocalContext();

  console.log(appState);
    
  return (
    <div className="App">
      {appState == "home" && <h1>Home</h1>}
      {appState == "login" &&<Signin></Signin>}
      {appState == "loading" &&<Loading></Loading>}
    </div>
  );
}

export default App;
