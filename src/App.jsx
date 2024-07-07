
import { useContext } from "react";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import List from "./pages/list/list";
import NewPage from "./pages/newpage/new";
import Single from "./pages/single/single";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss"
import { DarkModeContext } from "./context/darkModeContext";


const App=()=>{

  const{darkMode}=useContext(DarkModeContext)

  return(
    <>
    <div className={darkMode ? "dark app" : "App"} >
      <Router>
        <Routes>
          {/* <Route path="/">
            <Route index element ={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element ={<Single />} />
              <Route path="new" element ={<NewPage />} />
            </Route>
          </Route> */}

          <Route path="/">
            <Route index element={<Home  />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<NewPage inputs ={userInputs} title="Add New User" />} />
            </Route>
            <Route path="products"> 
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<NewPage inputs ={productInputs} title="Add New Product" />} />
            </Route>
          </Route>
          
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App;