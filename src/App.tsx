
import { HashRouter, Routes, Route, } from "react-router-dom";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Page1/>} />
        <Route path='/sec' element={<Page2/>} />
        
      </Routes>
    </HashRouter>
  );
}


export default App;