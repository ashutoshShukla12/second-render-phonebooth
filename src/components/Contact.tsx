import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 bg-[#1f2833] rounded-[30px] p-8 md:p-12 overflow-hidden">
          <div className="md:pr-8">
            <h2 className="text-[2.5rem] font-bold mb-4 text-white">
              Get In <span className="text-[#66fcf1]">Touch</span>
            </h2>
            <p className="text-[#c5c6c7] mb-8">
              Visit our store or contact us for a quote.
            </p>
            
            <div className="space-y-8 mt-8">
              <div className="flex items-start gap-5">
                <i className="fas fa-map-marker-alt text-[#66fcf1] text-xl mt-1"></i>
                <div>
                  <h4 className="text-white font-bold mb-1">Location</h4>
                  <p className="text-[#c5c6c7]">123 Tech Street, Digital City</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <i className="fas fa-phone text-[#66fcf1] text-xl mt-1"></i>
                <div>
                  <h4 className="text-white font-bold mb-1">Phone</h4>
                  <p className="text-[#c5c6c7]">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <i className="fas fa-envelope text-[#66fcf1] text-xl mt-1"></i>
                <div>
                  <h4 className="text-white font-bold mb-1">Email</h4>
                  <p className="text-[#c5c6c7]">support@phonebooth.co.in</p>
                </div>
              </div>
            </div>
          </div>
          
          <form className="flex flex-col gap-5">
            <div className="form-group">
              <Input 
                type="text" 
                placeholder="Your Name" 
                required 
                className="bg-black/20 border-white/10 text-white placeholder:text-white/50 h-auto py-4 px-5 rounded-xl focus-visible:ring-1 focus-visible:ring-[#66fcf1] focus-visible:border-[#66fcf1] transition-all"
              />
            </div>
            <div className="form-group">
              <Input 
                type="email" 
                placeholder="Your Email" 
                required 
                className="bg-black/20 border-white/10 text-white placeholder:text-white/50 h-auto py-4 px-5 rounded-xl focus-visible:ring-1 focus-visible:ring-[#66fcf1] focus-visible:border-[#66fcf1] transition-all"
              />
            </div>
            <div className="form-group">
              <Textarea 
                placeholder="Message / Issue Description" 
                required 
                className="bg-black/20 border-white/10 text-white placeholder:text-white/50 min-h-[150px] py-4 px-5 rounded-xl resize-none focus-visible:ring-1 focus-visible:ring-[#66fcf1] focus-visible:border-[#66fcf1] transition-all"
              />
            </div>
            <Button 
                type="submit" 
                className="mt-2 w-max rounded-full px-8 py-6 text-base font-semibold bg-linear-to-br from-[#66fcf1] to-[#45a29e] text-[#0b0c10] border-2 border-transparent hover:translate-y-[-3px] hover:shadow-[0_10px_20px_rgba(102,252,241,0.2)] transition-all duration-300"
            >
                Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
