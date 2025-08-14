import {
  Mountain,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-secondary text-foreground">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Mountain className="h-8 w-8 text-primary" />
              <div className="flex flex-col">
                <span className="text-muted-foreground text-xs">
                  Perhimpunan Pecinta Alam
                </span>
                <span className="text-foreground font-medium text-xl">
                  S A D A G O R I
                </span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-6 max-w-md leading-relaxed">
              Join the best & become part of something extraordinary. Make your
              life an adventure worth living and exploring the beauty of nature.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">
                  SMA Negeri 5 Bandung, Jl. Belitung No. 8, Citarum, Bandung
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">
                  +62 22 423 1324
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">
                  sadagori@sman5bandung.sch.id
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium mb-6 text-foreground">
              More on The Blog
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  About SADAGORI
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Contributors & Writers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Write For Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="font-medium mb-6 text-foreground">
              More on SADAGORI
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Library
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              Copyright 2025 SADAGORI by SMA Negeri 5 Bandung
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-primary p-2 h-auto"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-primary p-2 h-auto"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-primary p-2 h-auto"
              >
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
