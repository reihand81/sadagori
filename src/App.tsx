import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Beranda } from "./components/pages/Beranda";
import { Tentang } from "./components/pages/Tentang";
import { Artikel } from "./components/pages/Artikel";
import { Galeri } from "./components/pages/Galeri";
import { Kontak } from "./components/pages/Kontak";
import ScrollToTop from "./components/ScrollToTop";
import "./styles/globals.css";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-cream">
        <Navigation />
        <main className="bg-cream">
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/tentang" element={<Tentang />} />
            <Route path="/artikel" element={<Artikel />} />
            <Route path="/galeri" element={<Galeri />} />
            <Route path="/kontak" element={<Kontak />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
