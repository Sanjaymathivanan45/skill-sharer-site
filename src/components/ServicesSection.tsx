import AnimatedSection from "./AnimatedSection";
import { Code, Users, Compass, Globe } from "lucide-react";

const services = [
  { icon: Code, title: "Programming Training", desc: "Structured training in C, Java, and programming fundamentals tailored for beginners and intermediate learners." },
  { icon: Users, title: "Technical Mentoring", desc: "One-on-one guidance on programming concepts, debugging techniques, and building real-world projects." },
  { icon: Compass, title: "Career Guidance", desc: "Personalized advice on tech career paths, skill development, and navigating the software industry." },
  { icon: Globe, title: "Web Development", desc: "Modern, responsive websites and web applications built with React, JavaScript, and industry best practices." },
];

const ServicesSection = () => (
  <section id="services" className="section-container">
    <AnimatedSection>
      <p className="font-mono text-primary text-sm mb-2">06. Services</p>
      <h2 className="section-title">What I Offer</h2>
      <div className="h-1 w-16 bg-primary rounded mb-8" />
    </AnimatedSection>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((s, i) => (
        <AnimatedSection key={s.title} delay={i * 0.1}>
          <div className="glass-card glow-border h-full text-center hover:scale-[1.03] transition-transform duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <s.icon className="text-primary" size={24} />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default ServicesSection;
