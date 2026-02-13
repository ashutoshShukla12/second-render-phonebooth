import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="relative h-[65vh] flex items-center pt-20 overflow-hidden">
        {/* Video Background */}
        <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-88 pointer-events-none"
        >
            <source src="/assets/dark.mp4" type="video/mp4" />
        </video>

        <div className="container mx-auto px-5 md:p-5 relative z-10 grid grid-cols-1  items-center gap-12 w-auto backdrop-blur rounded-2xl">
            <div className="text-center md:text-left md:p-5">
                <h1 className="text-5xl md:text-[3.5rem] font-bold leading-[1.2] mb-5 text-white">
                    Expert Repair.<br />
                    <span className="bg-linear-to-br from-[#66fcf1] to-[#45a29e] bg-clip-text text-transparent">
                        Premium Service.
                    </span>
                </h1>
                <p className="text-lg text-[#c5c6c7] mb-8 max-w-[500px] mx-auto md:mx-0">
                    Your one-stop destination for expert repairs, latest smartphones, and premium accessories. Buy, sell, trade, or fix your device with confidence.
                </p>
                <div className="flex gap-5 justify-center md:justify-start">
                    <Button 
                        asChild 
                        className="rounded-full px-8 py-6 text-base font-semibold bg-linear-to-br from-[#66fcf1] to-[#45a29e] text-[#0b0c10] border-2 border-transparent hover:translate-y-[-3px] hover:shadow-[0_10px_20px_rgba(102,252,241,0.2)] transition-all duration-300"
                    >
                        <Link href="#contact">Book a Repair</Link>
                    </Button>
                    <Button 
                        asChild 
                        variant="outline"
                        className="rounded-full px-8 py-6 text-base font-semibold bg-transparent border-2 border-[#66fcf1] text-[#66fcf1] hover:bg-[#66fcf1]/10 hover:text-[#66fcf1] transition-all duration-300"
                    >
                        <Link href="#services">View Services</Link>
                    </Button>
                </div>
            </div>
            
             {/* Floating Phone Visual (Optional/Implied by CSS) - Adding a placeholder visual similar to CSS */}
             <div className="hidden md:flex justify-center items-center relative">
                 <div className="relative w-full max-w-[500px] perspective-[1000px]">
                     {/* Placeholder for floating phone if image existed, or just empty as per HTML structure which had .hero-visual but no image source explicitly besides video */}
                 </div>
             </div>
        </div>
    </section>
  );
}