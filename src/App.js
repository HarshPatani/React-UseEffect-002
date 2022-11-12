import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </main>
  );
}

export default App;
