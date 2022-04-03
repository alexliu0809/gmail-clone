import { useLocalContext } from "./context/context.js";
import { Loading, Signin, Home } from "./components";
import { useEffect } from "react";
import { useMailContext } from "./context/mailcontext.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  // You have to get a specific var, otherwise it returns null
  const { appState, setAppState } = useLocalContext();
  const { allMailStates } = useMailContext();

  console.log(appState);
  
  useEffect(() => {
    if (appState === 'loading'){
      setTimeout(() => {
        setAppState('home')
      }, 2000)
    }
  })

  allMailStates.map((mailState, index) => {
    console.log("full_id", `/${mailState.state.full_id}`)
  })

  return (
    <Router>
      <Routes>
        {allMailStates.map((mailState, index) => {
          return <Route key={`/${mailState.state.full_id}`} path={`/${mailState.state.full_id}`} eaxct element={
            <Home mailState={mailState} showMails={false}/>
          }>
          </Route>
        })}

        <Route path="/" exact element={
          <div className="App">
          {appState === "home" && <Home></Home>}
          {appState === "login" &&<Signin></Signin>}
          {appState === "loading" &&<Loading></Loading>}
          </div>
        }>
        </Route>

      </Routes>
    </Router>
    
  );
}

export default App;
