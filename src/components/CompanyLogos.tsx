import companyLogos from "@/assets/company-logos.jpg";

const CompanyLogos = () => {
  const companies = [
    { name: "ABC Home Services", id: 1 },
    { name: "Aptive", id: 2 },
    { name: "Way Cool Plumbing", id: 3 },
    { name: "Lee's Air", id: 4 },
    { name: "Crowther", id: 5 },
    { name: "Thompson Plumbing", id: 6 },
    { name: "Roto-Rooter", id: 7 },
    { name: "Rollins", id: 8 },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-muted-foreground font-medium">
            Trusted by the best service professionals and their customers
          </p>
        </div>
        
        {/* Company Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center opacity-60">
          {companies.map((company) => (
            <div
              key={company.id}
              className="w-full max-w-[120px] h-12 bg-muted rounded-lg flex items-center justify-center hover:opacity-80 smooth-transition"
            >
              <span className="text-xs font-medium text-muted-foreground text-center px-2">
                {company.name}
              </span>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-foreground mb-2">2M+</div>
            <p className="text-muted-foreground">Calls answered in the trades.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-foreground mb-2">~92%</div>
            <p className="text-muted-foreground">Booking rate in most channels.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-foreground mb-2">$1.25B</div>
            <p className="text-muted-foreground">Revenue sold by our AI Agents.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-foreground mb-2">96%</div>
            <p className="text-muted-foreground">Satisfaction from Sameday customers.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;