import { Button } from "@/components/ui/button";
import { MotionDiv, fadeIn, staggerContainer } from "@/components/ui/motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <MotionDiv
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="min-h-screen flex items-center justify-center relative bg-[url('https://images.unsplash.com/photo-1506443102696-39d0c10eae2b')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-white/90" />
      
      <div className="relative z-10 text-center px-4">
        <MotionDiv variants={fadeIn} className="mb-6">
          <img
            src="https://images.unsplash.com/photo-1573496799515-eebbb63814f2"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-primary"
          />
        </MotionDiv>
        
        <MotionDiv variants={fadeIn}>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Jane Smith
          </h1>
        </MotionDiv>
        
        <MotionDiv variants={fadeIn}>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Full Stack Developer & UI/UX Designer
          </p>
        </MotionDiv>
        
        <MotionDiv variants={fadeIn}>
          <Button
            size="lg"
            onClick={() => {
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group"
          >
            Learn More
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
        </MotionDiv>
      </div>
    </MotionDiv>
  );
}
