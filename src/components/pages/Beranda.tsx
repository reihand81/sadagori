import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Button } from "../ui/button";

export function Beranda() {
  const heroImage = "/sadagori/bg1.png";

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={heroImage}
            alt="Mountain Adventure"
            className="w-full h-full object-cover"
          />
          {/* Layer hitam transparan 50% di atas gambar */}
          <div className="absolute inset-0 bg-black opacity-60"></div>
          {/* Gradient fadeout at bottom, warna akhir oranye */}
          <div className="absolute inset-x-0 bottom-0 h-150 pointer-events-none bg-gradient-to-b via-transparent to-[#ffbe00]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-16">
          <div className="max-w-2xl">
            {/* Main heading */}
            <img
              src="/sadagori/logo_sadagori_putih.svg"
              alt="Logo"
              className=" w-80 mx-auto"
            />
            <h2 className="center text-center text-2xl md:text-3xl lg:text-3xl font-bold leading-tight text-white">
              PERHIMPUNAN PECINTA ALAM
            </h2>
            <h1 className="center text-center text-4xl md:text-6xl lg:text-8xl font-bold leading-tight mb-8 text-white">
              SADAGORI
            </h1>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 justify-items-center">
          <h3 className="text-white font-qgb italic text-3xl mb-2 font-bold">
            "Kecil tapi Berarti"
          </h3>
          <svg
            className="w-12 h-12 text-white animate-bounce"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline
              id="primary"
              points="21 5 12 10 3 5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
            ></polyline>
            <polyline
              id="primary-2"
              data-name="primary"
              points="21 10 12 15 3 10"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
            ></polyline>
          </svg>
        </div>
      </section>

      {/* New Section: Gradient, Logo, and Quote */}
      <section className="relative py-20 flex flex-col h-screen items-center justify-center text-center">
        <div className="absolute inset-x-0 top-0 h-150 pointer-events-none bg-gradient-to-b via-transparent from-[#ffbe00]"></div>
        <img
          src="/sadagori/logo_sadagori.svg" // Assuming you want the colored logo here
          alt="Sadagori Logo"
          className="w-64 mb-8" // Adjust size as needed
        />
        <p className="text-xl md:text-2xl lg:text-3xl font-thin italic text-amber-900 max-w-3xl mx-auto px-4">
          "Yen ana angin bolang-baling,
          <br />
          Aja gagandulan maring kiara,
          <br />
          gagandulan maring sadagori"
        </p>
      </section>

      {/* Content Sections - Same background */}
      <section className="bg-background py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* Section header with line */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-px bg-primary mr-4"></div>
                <span className="text-primary text-xs tracking-widest font-medium">
                  GET STARTED
                </span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-light leading-tight mb-6 text-foreground">
                What level of hiker <br />
                are you?
              </h2>

              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                Determining your hiking experience level helps us recommend
                appropriate trails and prepare you with the right knowledge.
                From beginner-friendly paths to challenging mountain
                expeditions, we have programs designed for every adventurer
                seeking to explore Indonesia's natural beauty.
              </p>

              <Button
                variant="ghost"
                className="text-primary hover:bg-secondary p-0"
              >
                Read More →
              </Button>
            </div>

            <div className="relative">
              <ImageWithFallback
                src={heroImage}
                alt="Hiking Experience"
                className="w-full h-80 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2">
              {/* Section header with line */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-px bg-primary mr-4"></div>
                <span className="text-primary text-xs tracking-widest font-medium">
                  HIKING ESSENTIALS
                </span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-light leading-tight mb-6 text-foreground">
                Picking the right <br />
                Hiking Gear?
              </h2>

              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                The right hiking equipment can make the difference between a
                memorable adventure and a challenging ordeal. Our comprehensive
                guides cover everything from basic gear selection to advanced
                mountaineering equipment, ensuring you're well-prepared for any
                terrain.
              </p>

              <Button
                variant="ghost"
                className="text-primary hover:bg-background p-0"
              >
                Read More →
              </Button>
            </div>

            <div className="relative lg:order-1">
              <ImageWithFallback
                src={heroImage}
                alt="Hiking Gear"
                className="w-full h-80 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* Section header with line */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-px bg-primary mr-4"></div>
                <span className="text-primary text-xs tracking-widest font-medium">
                  WHERE YOU GO IS THE KEY
                </span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-light leading-tight mb-6 text-foreground">
                Understand Your <br />
                Map & Timing
              </h2>

              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                Navigation skills are essential for safe hiking adventures.
                Learn to read topographic maps, use compass bearings, and plan
                your timing effectively. Our experienced guides teach both
                traditional navigation methods and modern GPS techniques for
                confident exploration.
              </p>

              <Button
                variant="ghost"
                className="text-primary hover:bg-secondary p-0"
              >
                Read More →
              </Button>
            </div>

            <div className="relative">
              <ImageWithFallback
                src={heroImage}
                alt="Map and Navigation"
                className="w-full h-80 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-primary py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-light text-primary-foreground mb-4">
                42+
              </div>
              <div className="text-primary-foreground/80 text-sm">
                Years of Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-primary-foreground mb-4">
                200+
              </div>
              <div className="text-primary-foreground/80 text-sm">
                Alumni Members
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-primary-foreground mb-4">
                50+
              </div>
              <div className="text-primary-foreground/80 text-sm">
                Mountains Conquered
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-background py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          {/* Section header with line */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-px bg-primary mr-4"></div>
            <span className="text-primary text-xs tracking-widest font-medium">
              JOIN OUR COMMUNITY
            </span>
            <div className="w-16 h-px bg-primary ml-4"></div>
          </div>

          <h2 className="text-3xl lg:text-4xl font-light leading-tight mb-6 text-foreground">
            Ready to Start Your <br />
            Adventure Journey?
          </h2>

          <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl mx-auto mb-12">
            Join Perhimpunan Pencinta Alam Sadagori and become part of a
            community that has been exploring Indonesia's natural wonders for
            over four decades. Learn from experienced mountaineers and create
            unforgettable memories.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Learn More
            </Button>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
