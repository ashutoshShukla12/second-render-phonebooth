"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

export default function Services() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.matchMedia("(min-width: 1024px)").matches);
    };
    
    // Initial check
    checkScreenSize();
    
    // Add listener
    window.addEventListener("resize", checkScreenSize);
    
    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const services = [
    {
      icon: "fas fa-mobile-alt",
      title: "Phone Repair",
      description: "Tap for more details",
      details: [
        "Screen replacement (LCD/Glass)",
        "Battery replacement",
        "Charging port repair",
        "Speaker & mic repair",
        "Water damage repair",
        "Camera & button issues",
        "Software troubleshooting"
      ]
    },
    {
      icon: "fas fa-headphones",
      title: "Accessories",
      description: "Tap for more details",
      details: [
        "Mobile covers & protective cases",
        "Tempered glass & screen protectors",
        "Chargers & USB cables",
        "Power banks",
        "Earphones & Bluetooth devices",
        "Car mounts & holders",
        "Smartwatches & fitness bands",
        "Memory cards & storage devices"
      ]
    },
    {
      icon: "fas fa-shopping-bag",
      title: "Buy & Sell",
      description: "Tap for more details",
      details: [
        "Buy new and used phones",
        "Sell your old phone for instant cash",
        "Exchange or trade-in offers",
        "Certified pre-owned & refurbished phones",
        "Unlocked & carrier phones available",
        "Warranty on selected used phones",
        "Free device evaluation",
        "Accessories bundle deals"
      ]
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
        
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {services.map((service, index) => (
            <motion.div
              layout
              key={index}
              onClick={() => {
                if (!isLargeScreen) {
                  setActiveCard(activeCard === index ? null : index);
                }
              }}
              onMouseEnter={() => {
                if (isLargeScreen) {
                  setActiveCard(index);
                }
              }}
              onMouseLeave={() => {
                if (isLargeScreen) {
                  setActiveCard(null);
                }
              }}
              initial={{ borderRadius: 16 }}
              className={`bg-[#1f2833] border border-white/5 overflow-hidden transition-colors duration-300 hover:border-[#66fcf1] hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] text-center group cursor-pointer ${activeCard === index ? 'border-[#66fcf1] shadow-[0_10px_30px_rgba(102,252,241,0.2)]' : ''}`}
            >
              <Card className="bg-transparent border-none shadow-none p-8">
                <motion.div layout="position">
                    <CardHeader className="p-0 mb-6 flex flex-col items-center">
                        <div className="w-[60px] h-[60px] bg-[rgba(102,252,241,0.1)] rounded-full flex justify-center items-center text-[#66fcf1] text-2xl group-hover:scale-110 transition-transform duration-300">
                        <i className={service.icon}></i>
                        </div>
                        <CardTitle className="text-2xl font-bold mb-4 text-white">{service.title}</CardTitle>
                    </CardHeader>
                </motion.div>
                
                <CardContent className="p-0">
                  <AnimatePresence mode="wait">
                    {activeCard === index && service.details ? (
                      <motion.ul
                        key="details"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-left text-[#c5c6c7] text-[0.95rem] space-y-2 overflow-hidden"
                      >
                        {service.details.map((detail, i) => (
                          <motion.li 
                            key={i} 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-start gap-2"
                          >
                            <span className="text-[#66fcf1] mt-1">•</span>
                            <span>{detail}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    ) : (
                      <motion.div
                        key="description"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <CardDescription className="text-[#c5c6c7] text-[0.95rem]">
                            {service.description}
                        </CardDescription>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
