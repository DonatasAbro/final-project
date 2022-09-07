import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Views from "./components/Views";
import ToTop from "./components/ToTop";

function App() {
  return (
    <BrowserRouter>
      <div id="page-container">
        <div id="content-wrap">
          <Header />
          <Views />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
      <ToTop />
    </BrowserRouter>
  );
}

export default App;
