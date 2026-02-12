export default function About() {
  const features = [
    "Certified Technicians",
    "Quick Turnaround Time",
    "Quality Parts Guarantee",
    "Transparent Pricing",
  ];

  return (
    <section id="about" className="py-24 bg-linear-to-r from-[#0b0c10] to-[#13151b]">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center">
        <div className="order-last md:order-first">
          <div className="w-full h-[400px] bg-[#1f2833] rounded-2xl relative overflow-hidden">
             {/* Abstract Box Effect implementation */}
             <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_40%,rgba(102,252,241,0.1)_100%)]"></div>
          </div>
        </div>
        
        <div>
          <h2 className="text-[2.5rem] font-bold mb-5 text-white">
            Why Choose <span className="text-[#66fcf1]">PhoneBooth?</span>
          </h2>
          <p className="text-[#c5c6c7] mb-8 leading-relaxed">
            At PhoneBooth, we combine technical expertise with customer-centric service. Your device is essential to your life, and we treat it that way.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2.5 text-[#c5c6c7] font-medium">
                <i className="fas fa-check-circle text-[#66fcf1]"></i>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
