import { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Facebook, 
  Twitter,
  Send,
  MessageCircle 
} from 'lucide-react';

export function Kontak() {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    pesan: '',
    subjek: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Pesan Anda telah dikirim! Kami akan segera merespon.');
    setFormData({
      nama: '',
      email: '',
      pesan: '',
      subjek: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat",
      content: "SMA Negeri 5 Bandung\nJl. Belitung No. 8, Citarum\nBandung, Jawa Barat 40115",
      action: "Lihat di Maps"
    },
    {
      icon: Phone,
      title: "Telepon",
      content: "+62 22 423 1324\n+62 22 420 7068",
      action: "Hubungi Sekarang"
    },
    {
      icon: Mail,
      title: "Email",
      content: "sadagori@sman5bandung.sch.id\ninfo.sadagori@gmail.com",
      action: "Kirim Email"
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      content: "Senin - Jumat: 07:00 - 16:00\nSabtu: 07:00 - 12:00\nMinggu: Libur",
      action: "Jadwal Kegiatan"
    }
  ];

  const socialMedia = [
    { 
      icon: Instagram, 
      name: "Instagram", 
      handle: "@sadagori_sman5bdg",
      url: "#",
      color: "hover:text-pink-400"
    },
    { 
      icon: Facebook, 
      name: "Facebook", 
      handle: "Sadagori SMAN 5 Bandung",
      url: "#",
      color: "hover:text-blue-400"
    },
    { 
      icon: Twitter, 
      name: "Twitter", 
      handle: "@sadagori_bdg",
      url: "#",
      color: "hover:text-blue-400"
    }
  ];

  const faqs = [
    {
      question: "Bagaimana cara bergabung dengan Sadagori?",
      answer: "Untuk bergabung dengan Sadagori, Anda harus menjadi siswa SMA Negeri 5 Bandung. Pendaftaran anggota baru biasanya dibuka pada awal tahun ajaran. Hubungi kami untuk informasi lebih lanjut."
    },
    {
      question: "Apakah ada biaya untuk mengikuti kegiatan?",
      answer: "Sebagian besar kegiatan rutin tidak dikenakan biaya. Namun untuk ekspedisi besar dan camping, ada kontribusi untuk biaya logistik dan transportasi. Kami selalu berusaha menjaga biaya seminimal mungkin."
    },
    {
      question: "Kapan jadwal kegiatan rutin Sadagori?",
      answer: "Kegiatan rutin kami dilaksanakan setiap hari Sabtu pukul 14:00-17:00 di lingkungan sekolah. Untuk ekspedisi dan camping biasanya dilakukan saat libur sekolah atau akhir pekan."
    }
  ];

  return (
    <div className="bg-background text-foreground min-h-screen pt-16">
      {/* Header */}
      <section className="relative py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Header with line */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-px bg-primary mr-4"></div>
            <span className="text-primary text-sm tracking-widest font-medium">CONTACT US</span>
            <div className="w-16 h-px bg-primary ml-4"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6 text-foreground">
            Let's Connect <br />
            with Sadagori
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have questions about our activities? Want to join us? 
            Or just want to share your nature adventure stories? We're ready to listen!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="bg-card border-border hover:border-primary/30 transition-all shadow-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium mb-3 text-foreground">{info.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 whitespace-pre-line leading-relaxed">
                      {info.content}
                    </p>
                    <Button variant="outline" size="sm" className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground">
                      {info.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              {/* Section header with line */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-px bg-primary mr-4"></div>
                <span className="text-primary text-xs tracking-widest font-medium">SEND MESSAGE</span>
              </div>
              <h2 className="text-3xl font-light leading-tight mb-6 text-foreground">Contact Us</h2>
              <p className="text-muted-foreground mb-8">
                Please fill out the form below and we will respond as soon as possible. 
                Or you can visit our secretariat directly at SMA Negeri 5 Bandung.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nama" className="text-foreground">Full Name</Label>
                    <Input
                      id="nama"
                      name="nama"
                      value={formData.nama}
                      onChange={handleInputChange}
                      className="bg-input-background border-border text-foreground mt-2"
                      placeholder="Enter full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-input-background border-border text-foreground mt-2"
                      placeholder="name@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subjek" className="text-foreground">Subject</Label>
                  <Input
                    id="subjek"
                    name="subjek"
                    value={formData.subjek}
                    onChange={handleInputChange}
                    className="bg-input-background border-border text-foreground mt-2"
                    placeholder="Your message topic"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="pesan" className="text-foreground">Message</Label>
                  <Textarea
                    id="pesan"
                    name="pesan"
                    value={formData.pesan}
                    onChange={handleInputChange}
                    className="bg-input-background border-border text-foreground mt-2 min-h-32"
                    placeholder="Write your message here..."
                    required
                  />
                </div>

                <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div>
              {/* Section header with line */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-px bg-primary mr-4"></div>
                <span className="text-primary text-xs tracking-widest font-medium">OUR LOCATION</span>
              </div>
              <h2 className="text-3xl font-light leading-tight mb-6 text-foreground">Find Us</h2>
              
              {/* Map Placeholder */}
              <Card className="bg-card border-border mb-8 shadow-sm">
                <CardContent className="p-0">
                  <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                      <p className="text-foreground">SMA Negeri 5 Bandung Location Map</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Click to open in Google Maps
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Info */}
              <div className="space-y-4">
                <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
                  <h3 className="text-lg font-medium mb-3 text-primary">Transportation Access</h3>
                  <ul className="text-muted-foreground text-sm space-y-2">
                    <li>• Public Transport: Cicaheum - Ledeng (via Jl. Belitung)</li>
                    <li>• Trans Metro Bandung: Cicaheum Stop</li>
                    <li>• Train: Kiaracondong Station (15 minutes drive)</li>
                    <li>• Vehicle parking available at school area</li>
                  </ul>
                </div>

                <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
                  <h3 className="text-lg font-medium mb-3 text-primary">Sadagori Secretariat</h3>
                  <p className="text-muted-foreground text-sm">
                    Organization Room 2nd Floor, Main Building SMA Negeri 5 Bandung. 
                    Open Monday-Saturday 1:00 PM - 4:00 PM WIB.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* Section header with line */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-px bg-primary mr-4"></div>
              <span className="text-primary text-xs tracking-widest font-medium">SOCIAL MEDIA</span>
              <div className="w-16 h-px bg-primary ml-4"></div>
            </div>
            <h2 className="text-3xl font-light leading-tight mb-6 text-foreground">Follow Us on Social Media</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get the latest updates on activities, adventure tips, and photos 
              from our expeditions through social media platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {socialMedia.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <Card key={index} className="bg-card border-border hover:border-primary/30 transition-all shadow-sm">
                  <CardContent className="p-6 text-center">
                    <IconComponent className={`h-12 w-12 mx-auto mb-4 text-muted-foreground transition-colors ${social.color}`} />
                    <h3 className="text-lg font-medium mb-2 text-foreground">{social.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{social.handle}</p>
                    <Button variant="outline" size="sm" className="border-border text-muted-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground">
                      Follow
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* Section header with line */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-px bg-primary mr-4"></div>
              <span className="text-primary text-xs tracking-widest font-medium">FAQ</span>
              <div className="w-16 h-px bg-primary ml-4"></div>
            </div>
            <h2 className="text-3xl font-light leading-tight mb-6 text-foreground">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Some questions we frequently receive along with their answers.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-card border-border shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <MessageCircle className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium mb-3 text-foreground">{faq.question}</h3>
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Still have other questions? Don't hesitate to contact us!
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Contact Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}