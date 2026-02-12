export default function Clients() {
  const items = [
    "Authorized Service",
    "•",
    "Genuine Parts",
    "•",
    "Express Repair",
    "•",
    "Warranty Assured",
    "•",
    "Expert Technicians",
    "•",
    "Authorized Service",
    "•",
    "Genuine Parts",
    "•",
    "Express Repair",
    "•",
    "Warranty Assured",
    "•",
    "Expert Technicians",
    "•",
  ];

  return (
    <section id="clients" className="bg-[#1f2833] py-[15px] overflow-hidden whitespace-nowrap border-y border-white/5">
      <div className="inline-block animate-scroll">
        {items.map((item, index) => (
          <span key={index} className="text-[1.2rem] font-semibold text-[#c5c6c7] mx-[30px] uppercase tracking-[1px]">
            {item}
          </span>
        ))}
         {/* Duplicate for seamless loop if needed, though the animation handles it. 
             The CSS animation `scroll` moves -50%. So we need double content usually. 
             The provided HTML had double content manually. I'll just double the map here.
         */}
         {items.map((item, index) => (
          <span key={`dup-${index}`} className="text-[1.2rem] font-semibold text-[#c5c6c7] mx-[30px] uppercase tracking-[1px]">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
