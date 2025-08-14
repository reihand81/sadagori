import { useState } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import {
  Calendar,
  MapPin,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export function Galeri() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const categories = [
    "Semua",
    "Ekspedisi",
    "Camping",
    "Training",
    "Konservasi",
    "Alumni",
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Ekspedisi Gunung Rinjani 2024",
      category: "Ekspedisi",
      date: "September 2024",
      location: "Lombok, NTB",
      participants: 15,
      image:
        "https://images.unsplash.com/photo-1615472767332-e5615c7e617a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZyUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NTQ5ODkxNjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Perjalanan menantang ke puncak Gunung Rinjani dengan danau Segara Anak yang memukau",
    },
    {
      id: 2,
      title: "Camping Seru di Kawah Putih",
      category: "Camping",
      date: "Agustus 2024",
      location: "Ciwidey, Bandung",
      participants: 25,
      image:
        "https://images.unsplash.com/photo-1714761127637-cc51b5cbf7b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMGNhbXBpbmclMjBmcmllbmRzfGVufDF8fHx8MTc1NDk4OTMzOHww&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Kegiatan camping bersama dengan suasana kawah yang eksotis dan udara pegunungan yang segar",
    },
    {
      id: 3,
      title: "Sunrise di Puncak Papandayan",
      category: "Ekspedisi",
      date: "Juli 2024",
      location: "Garut, Jawa Barat",
      participants: 20,
      image:
        "https://images.unsplash.com/photo-1637073503743-1712ea10d797?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHN1bnJpc2UlMjBoaWtpbmd8ZW58MXx8fHwxNzU0OTg5MzQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Menyaksikan sunrise yang spektakuler dari puncak Gunung Papandayan",
    },
    {
      id: 4,
      title: "Training Rock Climbing",
      category: "Training",
      date: "Juni 2024",
      location: "Gunung Batu, Lembang",
      participants: 12,
      image:
        "https://images.unsplash.com/photo-1595931285307-ec7ab5b0a1f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrJTIwY2xpbWJpbmclMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzU0OTg5Mjc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Pelatihan teknik memanjat tebing untuk anggota baru dengan instruktur berpengalaman",
    },
    {
      id: 5,
      title: "Kegiatan Konservasi Hutan",
      category: "Konservasi",
      date: "Mei 2024",
      location: "Taman Hutan Raya Juanda",
      participants: 30,
      image:
        "https://images.unsplash.com/photo-1650464187828-d380b8edbc0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBoaWtpbmclMjB0cmFpbHxlbnwxfHx8fDE3NTQ4OTA1NTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Program penanaman pohon dan edukasi konservasi bersama masyarakat sekitar",
    },
    {
      id: 6,
      title: "Ekspedisi Gunung Bromo",
      category: "Ekspedisi",
      date: "April 2024",
      location: "Probolinggo, Jawa Timur",
      participants: 18,
      image:
        "https://images.unsplash.com/photo-1685111192951-131370aba061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMGluZG9uZXNpYXxlbnwxfHx8fDE3NTQ5ODkxNjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Perjalanan menjelajahi keindahan kaldera Bromo dan lautan pasir yang menakjubkan",
    },
    {
      id: 7,
      title: "Camping Ground Cikole",
      category: "Camping",
      date: "Maret 2024",
      location: "Lembang, Bandung Barat",
      participants: 22,
      image:
        "https://images.unsplash.com/photo-1688380303708-26c534ab059b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwY2FtcGluZyUyMG5hdHVyZXxlbnwxfHx8fDE3NTQ5ODkxNjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Kegiatan camping dengan berbagai permainan dan pelatihan survival",
    },
    {
      id: 8,
      title: "Reuni Alumni Sadagori",
      category: "Alumni",
      date: "Februari 2024",
      location: "SMA Negeri 5 Bandung",
      participants: 50,
      image:
        "https://images.unsplash.com/photo-1714761127637-cc51b5cbf7b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMGNhbXBpbmclMjBmcmllbmRzfGVufDF8fHx8MTc1NDk4OTMzOHww&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Pertemuan tahunan alumni dari berbagai angkatan untuk berbagi pengalaman",
    },
  ];

  const filteredItems = galleryItems.filter(
    (item) => selectedCategory === "Semua" || item.category === selectedCategory
  );

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Header */}
      <section className="pb-16 pt-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Header with line */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-px bg-primary mr-4"></div>
              <span className="text-primary text-sm tracking-widest font-medium">
                PHOTO GALLERY
              </span>
              <div className="w-16 h-px bg-primary ml-4"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6 text-foreground">
              Precious Moments <br />
              of Sadagori
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Documentation of journeys and activities of Perhimpunan Pencinta
              Alam Sadagori in exploring the beauty of Indonesia's nature
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "border-border text-muted-foreground hover:bg-secondary"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            {/* Section header with line */}
            <div className="flex items-center">
              <div className="w-12 h-px bg-primary mr-4"></div>
              <h2 className="text-2xl font-medium text-foreground">
                {selectedCategory === "Semua"
                  ? "All Photos"
                  : `Category: ${selectedCategory}`}
                <span className="text-muted-foreground ml-2">
                  ({filteredItems.length} photos)
                </span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <Dialog key={item.id}>
                <DialogTrigger asChild>
                  <Card
                    className="bg-card border-border overflow-hidden hover:border-primary/30 transition-all cursor-pointer group shadow-sm"
                    onClick={() => setSelectedImageIndex(index)}
                  >
                    <div className="relative h-64">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-xs">
                        {item.category}
                      </Badge>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-medium mb-2 line-clamp-2">
                          {item.title}
                        </h3>
                        <div className="flex items-center justify-between text-xs text-white/80">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{item.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="h-3 w-3" />
                            <span>{item.participants}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>

                <DialogContent className="max-w-4xl bg-card border-border p-0">
                  <div className="relative">
                    {/* Navigation Buttons */}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70"
                      onClick={(e) => {
                        e.stopPropagation();
                        const prevIndex =
                          selectedImageIndex > 0
                            ? selectedImageIndex - 1
                            : filteredItems.length - 1;
                        setSelectedImageIndex(prevIndex);
                      }}
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70"
                      onClick={(e) => {
                        e.stopPropagation();
                        const nextIndex =
                          selectedImageIndex < filteredItems.length - 1
                            ? selectedImageIndex + 1
                            : 0;
                        setSelectedImageIndex(nextIndex);
                      }}
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>

                    {/* Image */}
                    <div className="h-96 md:h-[500px]">
                      <ImageWithFallback
                        src={filteredItems[selectedImageIndex]?.image}
                        alt={filteredItems[selectedImageIndex]?.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge className="bg-primary/10 text-primary border-primary/20">
                          {filteredItems[selectedImageIndex]?.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {selectedImageIndex + 1} / {filteredItems.length}
                        </span>
                      </div>

                      <h2 className="text-2xl font-medium mb-4 text-foreground">
                        {filteredItems[selectedImageIndex]?.title}
                      </h2>

                      <p className="text-muted-foreground mb-6">
                        {filteredItems[selectedImageIndex]?.description}
                      </p>

                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">
                            {filteredItems[selectedImageIndex]?.date}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">
                            {filteredItems[selectedImageIndex]?.location}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">
                            {filteredItems[selectedImageIndex]?.participants}{" "}
                            participants
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No photos available for category "{selectedCategory}"
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* Section header with line */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-px bg-primary mr-4"></div>
              <span className="text-primary text-xs tracking-widest font-medium">
                ACTIVITY STATISTICS
              </span>
              <div className="w-16 h-px bg-primary ml-4"></div>
            </div>
            <h2 className="text-3xl font-light leading-tight mb-6 text-foreground">
              Sadagori Achievements 2024
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="bg-card border-border text-center shadow-sm">
              <CardContent className="p-6">
                <div className="text-3xl font-light text-primary mb-2">12</div>
                <p className="text-muted-foreground">Mountain Expeditions</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center shadow-sm">
              <CardContent className="p-6">
                <div className="text-3xl font-light text-primary mb-2">24</div>
                <p className="text-muted-foreground">Camping Activities</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center shadow-sm">
              <CardContent className="p-6">
                <div className="text-3xl font-light text-primary mb-2">8</div>
                <p className="text-muted-foreground">Conservation Programs</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center shadow-sm">
              <CardContent className="p-6">
                <div className="text-3xl font-light text-primary mb-2">
                  200+
                </div>
                <p className="text-muted-foreground">Members Involved</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Share Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            {/* Section header with line */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-px bg-primary mr-4"></div>
              <span className="text-primary text-xs tracking-widest font-medium">
                SHARE MOMENTS
              </span>
              <div className="w-16 h-px bg-primary ml-4"></div>
            </div>
            <h2 className="text-3xl font-light leading-tight mb-6 text-foreground">
              Have Sadagori <br />
              Activity Photos?
            </h2>
            <p className="text-muted-foreground mb-8">
              Share your precious moments with Sadagori. Send your activity
              photos to be featured in our official gallery.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Submit Your Photos
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
