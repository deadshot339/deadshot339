import logo from "./logo.svg";
import "./App.css";
import i18n from "./i18n.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import { useTranslation } from "react-i18next";


function App() {
  const { t } = useTranslation();

  return (
    <Router>
      <div className="App min-h-screen flex flex-col">
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
