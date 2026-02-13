import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 text-center bg-[#0b0c10]">
      <div className="container mx-auto px-5">
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-2.5 text-white">
            Phone<span className="text-[#66fcf1]">Booth</span>
          </h3>
          <p className="text-[#c5c6c7] mb-8">
            Your Ultimate Mobile Destination.
          </p>
        </div>
        
        <div className="flex justify-center gap-5 mb-10">
          {["instagram", "facebook-f", "twitter"].map((icon) => (
            <Link 
                key={icon} 
                href="#"
                className="w-10 h-10 bg-white/5 rounded-full flex justify-center items-center transition-all duration-300 hover:bg-[#66fcf1] hover:text-[#0b0c10] text-white"
            >
              <i className={`fab fa-${icon}`}></i>
            </Link>
          ))}
        </div>
        
        <div className="text-[#c5c6c7]/90 text-[0.9rem]">
          <p>&copy; 2026 PhoneBooth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
