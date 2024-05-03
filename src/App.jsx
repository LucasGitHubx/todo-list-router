import NavBar from "./components/NavBar";
import { useState, createContext } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import InsertTodoPage from "./pages/InsertTodoPage.jsx";
import ListTodoPage from "./pages/ListTodoPage.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";

export const Context = createContext();

export default function App() {
  const [data, setData] = useState([]);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Context.Provider value={[data, setData]}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/insert" element={<InsertTodoPage />} />
            <Route path="/list" element={<ListTodoPage />} />
            <Route path="/about" element={<AboutUsPage />} />
          </Routes>
        </Context.Provider>
      </BrowserRouter>
    </>
  );
}
