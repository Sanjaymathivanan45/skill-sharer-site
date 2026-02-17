import AnimatedSection from "./AnimatedSection";
import { BookOpen, Target, Award, Lightbulb } from "lucide-react";

const MentoringSection = () => (
  <section id="mentoring" className="section-container">
    <AnimatedSection>
      <p className="font-mono text-primary text-sm mb-2">03. Mentoring</p>
      <h2 className="section-title">Mentoring &amp; Training</h2>
      <div className="h-1 w-16 bg-primary rounded mb-8" />
      <p className="section-subtitle max-w-2xl">
        As a Technical Trainer at Lesuccess, I've dedicated my career to making programming 
        accessible and building the next generation of developers.
      </p>
    </AnimatedSection>

    <div className="grid md:grid-cols-2 gap-6 mb-10">
      {[
        {
          icon: BookOpen,
          title: "Topics I Teach",
          items: ["C Programming Fundamentals", "Variables, Control Structures & Functions", "Arrays, Pointers & Memory Management", "Java Programming", "Computer Science Fundamentals"],
        },
        {
          icon: Target,
          title: "Training Approach",
          items: ["Hands-on practical coding sessions", "Structured curriculum with real exercises", "Simplified explanations of complex topics", "Custom assignments & coding challenges", "One-on-one guidance and code reviews"],
        },
        {
          icon: Award,
          title: "Student Impact",
          items: ["Built strong programming foundations", "Improved problem-solving abilities", "Enhanced debugging & analytical skills", "Career-ready programming competency", "Confidence in tackling coding challenges"],
        },
        {
          icon: Lightbulb,
          title: "My Philosophy",
          items: ["Learning by doing, not just reading", "Every student learns differently", "Patience & clear communication matter", "Real-world problems drive engagement", "Continuous feedback accelerates growth"],
        },
      ].map((card, i) => (
        <AnimatedSection key={card.title} delay={i * 0.1}>
          <div className="glass-card glow-border h-full">
            <div className="flex items-center gap-3 mb-4">
              <card.icon className="text-primary" size={24} />
              <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
            </div>
            <ul className="space-y-2">
              {card.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default MentoringSection;
