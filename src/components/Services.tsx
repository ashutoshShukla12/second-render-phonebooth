import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      icon: "fas fa-mobile-alt",
      title: "Phone Repair",
      description: "Screen replacement, battery upgrades, and motherboard fixes for all major brands.",
    },
    {
      icon: "fas fa-laptop",
      title: "Laptop Repair",
      description: "Hardware diagnostics, software troubleshooting, and component level repairs.",
    },
    {
      icon: "fas fa-headphones",
      title: "Accessories",
      description: "Premium cases, chargers, audio gear, and protective accessories.",
    },
    {
      icon: "fas fa-shopping-bag",
      title: "Buy & Sell",
      description: "Get the best deals on new and pre-owned devices. Trade-in options available.",
    },
  ];

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-[2.5rem] font-bold mb-4 text-white">
            Our <span className="text-[#66fcf1]">Services</span>
          </h2>
          <p className="text-[#c5c6c7] max-w-[600px] mx-auto">
            Comprehensive solutions for all your gadget needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
                key={index} 
                className="bg-[#1f2833] border border-white/5 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:border-[#66fcf1] hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] text-center p-8 group"
            >
              <CardHeader className="p-0 mb-6 flex flex-col items-center">
                <div className="w-[60px] h-[60px] bg-[rgba(102,252,241,0.1)] rounded-full flex justify-center items-center text-[#66fcf1] text-2xl group-hover:scale-110 transition-transform duration-300">
                  <i className={service.icon}></i>
                </div>
                <CardTitle className="text-2xl font-bold mb-4 text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <CardDescription className="text-[#c5c6c7] text-[0.95rem]">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
