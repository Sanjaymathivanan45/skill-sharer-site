import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      <div className="relative z-10 section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-primary text-sm md:text-base mb-4 tracking-wider">
            Hello, I'm
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-heading">
            Sanjay{" "}
            <span className="gradient-text">Mathivanan</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-2">
            Technical Mentor | Frontend Developer | Java &amp; C Programmer
          </p>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Empowering learners through hands-on programming training and building modern web experiences.
          </p>

          <div className="flex items-center justify-center gap-4 mb-10">
            <a
              href="#contact"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
            <a
              href="/Sanjay_Mathivanan_Resume.pptx"
              download
              className="border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors"
            >
              Download Resume
            </a>
          </div>

          <div className="flex items-center justify-center gap-5 text-muted-foreground">
            <a href="https://github.com/sanjaymathivanan45" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="GitHub">
              <Github size={22} />
            </a>
            <a href="https://linkedin.com/in/sanjaymathivanan" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin size={22} />
            </a>
            <a href="mailto:sanjaymathivanan7345@gmail.com" className="hover:text-primary transition-colors" aria-label="Email">
              <Mail size={22} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="text-muted-foreground" size={24} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
