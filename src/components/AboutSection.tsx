import AnimatedSection from "./AnimatedSection";
import { Code2, GraduationCap, Users } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="section-container">
    <AnimatedSection>
      <p className="font-mono text-primary text-sm mb-2">01. About Me</p>
      <h2 className="section-title">Who I Am</h2>
      <div className="h-1 w-16 bg-primary rounded mb-8" />
    </AnimatedSection>

    <div className="grid md:grid-cols-3 gap-6 mb-10">
      {[
        {
          icon: Code2,
          title: "Developer",
          desc: "Proficient in building responsive web applications using HTML, CSS, JavaScript, and React. Experienced in Java and C programming for solving complex problems.",
        },
        {
          icon: GraduationCap,
          title: "Technical Trainer",
          desc: "2+ years of experience delivering structured training in C programming and computer science fundamentals, simplifying complex concepts for effective learning.",
        },
        {
          icon: Users,
          title: "Mentor",
          desc: "Passionate about empowering students with strong problem-solving skills and guiding them through their programming journey with hands-on practice.",
        },
      ].map((item, i) => (
        <AnimatedSection key={item.title} delay={i * 0.15}>
          <div className="glass-card glow-border h-full hover:scale-[1.02] transition-transform duration-300">
            <item.icon className="text-primary mb-4" size={28} />
            <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
          </div>
        </AnimatedSection>
      ))}
    </div>

    <AnimatedSection delay={0.3}>
      <p className="text-muted-foreground leading-relaxed max-w-3xl">
        I'm a dedicated C Programmer and Technical Trainer with over 2 years of professional experience at Lesuccess. 
        My mission is to bridge the gap between theoretical knowledge and practical application — 
        helping aspiring developers build confidence through structured training, real-world projects, and personalized mentorship.
      </p>
    </AnimatedSection>
  </section>
);

export default AboutSection;
