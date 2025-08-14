import { useState } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Calendar, User, Search } from 'lucide-react';

export function Artikel() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const categories = ['Semua', 'Ekspedisi', 'Tips & Teknik', 'Konservasi', 'Peralatan', 'Keselamatan'];

  const articles = [
    {
      id: 1,
      title: "Panduan Lengkap Pendakian Gunung Gede-Pangrango untuk Pemula",
      excerpt: "Tips penting dan persiapan yang dibutuhkan untuk mendaki Gunung Gede-Pangrango dengan aman dan nyaman.",
      category: "Ekspedisi",
      author: "Tim Sadagori",
      date: "15 Januari 2025",
      image: "https://images.unsplash.com/photo-1615472767332-e5615c7e617a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZyUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NTQ5ODkxNjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      readTime: "8 menit"
    },
    {
      id: 2,
      title: "Teknik Rock Climbing yang Aman untuk Pemula",
      excerpt: "Dasar-dasar rock climbing dan teknik keselamatan yang harus dikuasai sebelum memulai petualangan vertical.",
      category: "Tips & Teknik",
      author: "Ahmad Rizki",
      date: "12 Januari 2025",
      image: "https://images.unsplash.com/photo-1595931285307-ec7ab5b0a1f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrJTIwY2xpbWJpbmclMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzU0OTg5Mjc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      readTime: "12 menit"
    },
    {
      id: 3,
      title: "Konservasi Taman Nasional: Peran Pecinta Alam dalam Pelestarian",
      excerpt: "Bagaimana pecinta alam dapat berkontribusi dalam menjaga kelestarian taman nasional Indonesia.",
      category: "Konservasi",
      author: "Sari Indah",
      date: "10 Januari 2025",
      image: "https://images.unsplash.com/photo-1650464187828-d380b8edbc0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBoaWtpbmclMjB0cmFpbHxlbnwxfHx8fDE3NTQ4OTA1NTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      readTime: "10 menit"
    },
    {
      id: 4,
      title: "Daftar Peralatan Wajib untuk Pendakian Multi-Hari",
      excerpt: "Checklist lengkap peralatan yang dibutuhkan untuk ekspedisi pendakian lebih dari satu hari.",
      category: "Peralatan",
      author: "Budi Santoso",
      date: "8 Januari 2025",
      image: "https://images.unsplash.com/photo-1688380303708-26c534ab059b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwY2FtcGluZyUyMG5hdHVyZXxlbnwxfHx8fDE3NTQ5ODkxNjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      readTime: "6 menit"
    },
    {
      id: 5,
      title: "Penanganan Darurat di Alam Bebas: First Aid untuk Pendaki",
      excerpt: "Teknik pertolongan pertama yang harus dikuasai setiap pecinta alam saat berada di gunung.",
      category: "Keselamatan",
      author: "Dr. Maya Sari",
      date: "5 Januari 2025",
      image: "https://images.unsplash.com/photo-1685111192951-131370aba061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMGluZG9uZXNpYXxlbnwxfHx8fDE3NTQ5ODkxNjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      readTime: "15 menit"
    },
    {
      id: 6,
      title: "Ekspedisi Sadagori ke Puncak Jayawijaya: Perjalanan Epic",
      excerpt: "Laporan perjalanan ekspedisi anggota Sadagori ke puncak tertinggi Indonesia di Papua.",
      category: "Ekspedisi",
      author: "Tim Ekspedisi Papua",
      date: "2 Januari 2025",
      image: "https://images.unsplash.com/photo-1615472767332-e5615c7e617a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZyUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NTQ5ODkxNjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      readTime: "20 menit"
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Semua' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticle = articles[0];

  return (
    <div className="bg-background text-foreground min-h-screen pt-16">
      {/* Header */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Header with line */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-px bg-primary mr-4"></div>
              <span className="text-primary text-sm tracking-widest font-medium">ARTICLES & TIPS</span>
              <div className="w-16 h-px bg-primary ml-4"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6 text-foreground">
              Knowledge and <br />
              Nature Experience
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Collection of articles, tips, and guides from Sadagori members' experiences 
              in exploring the nature of Indonesia
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-input-background border-border text-foreground"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category 
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground" 
                    : "border-border text-muted-foreground hover:bg-secondary"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header with line */}
          <div className="flex items-center mb-8">
            <div className="w-12 h-px bg-primary mr-4"></div>
            <span className="text-primary text-xs tracking-widest font-medium">FEATURED ARTICLE</span>
          </div>
          <Card className="bg-card border-border overflow-hidden shadow-sm">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <ImageWithFallback
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                  {featuredArticle.category}
                </Badge>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-medium mb-4 text-foreground">{featuredArticle.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{featuredArticle.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{featuredArticle.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredArticle.date}</span>
                    </div>
                  </div>
                  <span>{featuredArticle.readTime}</span>
                </div>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-fit">
                  Read More
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            {/* Section header with line */}
            <div className="flex items-center">
              <div className="w-12 h-px bg-primary mr-4"></div>
              <h2 className="text-2xl font-medium text-foreground">
                All Articles ({filteredArticles.length})
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.slice(1).map((article) => (
              <Card key={article.id} className="bg-card border-border overflow-hidden hover:border-primary/30 transition-all group shadow-sm">
                <div className="relative h-48">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-xs">
                    {article.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-3 text-foreground line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                    <span>{article.readTime}</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full border-border text-muted-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground">
                    Read Article
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No articles found with keyword "{searchTerm}"
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            {/* Section header with line */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-px bg-primary mr-4"></div>
              <span className="text-primary text-xs tracking-widest font-medium">NEWSLETTER</span>
              <div className="w-16 h-px bg-primary ml-4"></div>
            </div>
            <h2 className="text-3xl font-light leading-tight mb-6 text-foreground">
              Get Latest Articles
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter to get the latest tips, 
              expedition reports, and Sadagori activity information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="flex-1 bg-input-background border-border text-foreground"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}