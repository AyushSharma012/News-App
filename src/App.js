import { useState } from "react";
import "./App.css";
import NavBar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard.js";

function App() {
  const [category, setCategory] = useState("top");
  return (
    <div>
      <NavBar setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </div>
  );
}

export default App;
