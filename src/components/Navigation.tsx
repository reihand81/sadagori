import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, User } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { id: "beranda", label: "Home", path: "/" },
    { id: "tentang", label: "About us", path: "/tentang" },
    { id: "artikel", label: "Blog", path: "/artikel" },
    { id: "galeri", label: "Gallery", path: "/galeri" },
    { id: "kontak", label: "Contact", path: "/kontak" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        location.pathname === "/" && !isScrolled
          ? "bg-transparent py-8 content-center text-white"
          : "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm text-foreground"
      }`}
    >
      <div className="max-w-[1800px] px-6">
        <div className="flex justify-between items-center h-16 mx-4">
          {/* Logo & Organization Name - Left */}
          <Link
            to="/"
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <img
              src="/sadagori/logo_sadagori.svg"
              alt="Logo"
              className="h-12 my-4 ml-24 my-4"
            />
            <div className="flex flex-col">
              <span className="text-xs">Perhimpunan Pecinta Alam</span>
              <span className="font-medium text-xl">S A D A G O R I</span>
            </div>
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`relative text-sm font-medium transition-colors hover:text-primary group ${
                  location.pathname === item.path
                    ? "text-primary font-bold"
                    : "font-normal"
                }`}
              >
                {item.label}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            ))}
          </div>

          {/* Account - Right */}
          <div className="hidden lg:flex items-center">
            <Button variant="ghost" className="hover:bg-secondary">
              <User className="h-4 w-4 mr-2" />
              Account
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="text-foreground">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-background border-border"
              >
                <div className="flex flex-col space-y-6 mt-8">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.id}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-left text-lg font-medium transition-colors hover:text-primary ${
                        location.pathname === item.path
                          ? "text-primary"
                          : "text-foreground/70"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="pt-4 border-t border-border">
                    <Button
                      variant="ghost"
                      className="text-foreground hover:bg-secondary w-full justify-start"
                    >
                      <User className="h-4 w-4 mr-2" />
                      Account
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
