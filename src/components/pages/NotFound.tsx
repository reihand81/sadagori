import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-medium mb-2">Halaman tidak ditemukan</h2>
      <p className="text-muted-foreground mb-6">
        Maaf, halaman yang Anda cari tidak tersedia.
      </p>
      <Button asChild className="btn-primary">
        <Link to="/">Kembali ke Beranda</Link>
      </Button>
    </div>
  );
}
