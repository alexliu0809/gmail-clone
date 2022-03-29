import { useLocalContext } from "./context/context.js";
import { Loading, Signin, Home } from "./components";
import { useEffect } from "react";
function App() {
  // You have to get a specific var, otherwise it returns null
  const { appState, setAppState } = useLocalContext();

  console.log(appState);
  
  useEffect(() => {
    if (appState === 'loading'){
      setTimeout(() => {
        setAppState('home')
      }, 5000)
    }
  })
  return (
    <div className="App">
      {appState === "home" && <Home></Home>}
      {appState === "login" &&<Signin></Signin>}
      {appState === "loading" &&<Loading></Loading>}
    </div>
  );
}

export default App;
