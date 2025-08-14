import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Calendar, Users, Award, MapPin } from 'lucide-react';

export function Tentang() {
  const heroImage = "https://images.unsplash.com/photo-1685111192951-131370aba061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMGluZG9uZXNpYXxlbnwxfHx8fDE3NTQ5ODkxNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  const visiMisi = [
    {
      title: "Visi",
      content: "Menjadi organisasi pecinta alam terdepan yang membentuk generasi muda berkarakter, peduli lingkungan, dan berwawasan luas tentang kekayaan alam Indonesia."
    },
    {
      title: "Misi",
      content: "Menyelenggarakan kegiatan pendidikan karakter melalui petualangan alam, melestarikan lingkungan hidup, dan mengembangkan potensi kepemimpinan anggota."
    }
  ];

  const nilaiNilai = [
    { title: "Integritas", description: "Berpegang teguh pada nilai-nilai kejujuran dan konsistensi" },
    { title: "Solidaritas", description: "Membangun kebersamaan dan gotong royong dalam setiap kegiatan" },
    { title: "Konservasi", description: "Berkomitmen menjaga kelestarian alam dan lingkungan hidup" },
    { title: "Petualangan", description: "Berani menghadapi tantangan dengan semangat eksplorasi" }
  ];

  const sejarah = [
    { tahun: "1982", peristiwa: "Berdirinya Perhimpunan Pencinta Alam Sadagori pada 14 Maret 1982" },
    { tahun: "1985", peristiwa: "Ekspedisi pertama ke Gunung Gede-Pangrango" },
    { tahun: "1990", peristiwa: "Peluncuran program konservasi lingkungan sekolah" },
    { tahun: "2000", peristiwa: "Kerjasama dengan Taman Nasional Gunung Halimun-Salak" },
    { tahun: "2010", peristiwa: "Program pembinaan komunitas pecinta alam se-Bandung" },
    { tahun: "2020", peristiwa: "Adaptasi kegiatan virtual dan hybrid selama pandemi" }
  ];

  return (
    <div className="bg-background text-foreground min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={heroImage}
            alt="Sejarah Sadagori"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with line */}
          <div className="flex items-center mb-6">
            <div className="w-16 h-px bg-primary mr-4"></div>
            <span className="text-primary text-sm tracking-widest font-medium">ABOUT SADAGORI</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light leading-tight mb-4 text-white">
            Our Story and <br />
            Organization Profile
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">
            The long journey of Perhimpunan Pencinta Alam Sadagori in shaping 
            nature-loving generations of Indonesia since 1982.
          </p>
        </div>
      </section>

      {/* Profil Organisasi */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* Section header with line */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-px bg-primary mr-4"></div>
                <span className="text-primary text-xs tracking-widest font-medium">ORGANIZATION PROFILE</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-light leading-tight mb-8 text-foreground">
                Who We Are and <br />
                What We Stand For
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Calendar className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium mb-2 text-foreground">Established</h3>
                    <p className="text-muted-foreground">March 14, 1982 (42+ years)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium mb-2 text-foreground">Location</h3>
                    <p className="text-muted-foreground">SMA Negeri 5 Bandung, West Java</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium mb-2 text-foreground">Active Members</h3>
                    <p className="text-muted-foreground">50+ students per generation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Award className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium mb-2 text-foreground">Achievements</h3>
                    <p className="text-muted-foreground">Various awards in environmental and youth fields</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {visiMisi.map((item, index) => (
                <Card key={index} className="bg-card border-border shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-4 text-primary">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nilai-Nilai Organisasi */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header with line */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-px bg-primary mr-4"></div>
              <span className="text-primary text-xs tracking-widest font-medium">OUR VALUES</span>
              <div className="w-16 h-px bg-primary ml-4"></div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-light leading-tight mb-6 text-foreground">
              Principles We <br />
              Hold Dear
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Four fundamental values that serve as the foundation for every activity and 
              character development of Sadagori members.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nilaiNilai.map((nilai, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/30 transition-all text-center shadow-sm">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-medium">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-medium mb-3 text-foreground">{nilai.title}</h3>
                  <p className="text-muted-foreground text-sm">{nilai.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Sejarah */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header with line */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-px bg-primary mr-4"></div>
              <span className="text-primary text-xs tracking-widest font-medium">OUR HISTORY</span>
              <div className="w-16 h-px bg-primary ml-4"></div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-light leading-tight mb-6 text-foreground">
              Sadagori <br />
              Timeline
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Important moments in the journey of Perhimpunan Pencinta Alam Sadagori 
              for more than 4 decades.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary/30"></div>
            
            <div className="space-y-12">
              {sejarah.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="bg-card border-border shadow-sm">
                      <CardContent className="p-6">
                        <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
                          {item.tahun}
                        </Badge>
                        <p className="text-muted-foreground">{item.peristiwa}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Struktur Organisasi */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header with line */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-px bg-primary mr-4"></div>
              <span className="text-primary text-xs tracking-widest font-medium">ORGANIZATION STRUCTURE</span>
              <div className="w-16 h-px bg-primary ml-4"></div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-light leading-tight mb-6 text-foreground">
              Sadagori <br />
              Leadership
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A structured organization with clear division of responsibilities 
              to carry out various activity programs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border text-center shadow-sm">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-medium mb-4 text-foreground">Core Leadership</h3>
                <p className="text-muted-foreground">President, Vice President, Secretary, and Treasurer who lead the organization</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border text-center shadow-sm">
              <CardContent className="p-8">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-medium mb-4 text-foreground">Activity Divisions</h3>
                <p className="text-muted-foreground">Expedition, Conservation, Training, and Member Development</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border text-center shadow-sm">
              <CardContent className="p-8">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-medium mb-4 text-foreground">Advisors</h3>
                <p className="text-muted-foreground">Teacher advisors and alumni who provide guidance and direction</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}