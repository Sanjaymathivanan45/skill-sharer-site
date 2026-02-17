import AnimatedSection from "./AnimatedSection";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const ExperienceSection = () => (
  <section id="experience" className="section-container">
    <AnimatedSection>
      <p className="font-mono text-primary text-sm mb-2">05. Experience &amp; Education</p>
      <h2 className="section-title">My Journey</h2>
      <div className="h-1 w-16 bg-primary rounded mb-8" />
    </AnimatedSection>

    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

      {[
        {
          icon: Briefcase,
          title: "Technical Trainer",
          org: "Lesuccess",
          period: "2024 – Present",
          items: [
            "Delivered training programs in C programming and CS fundamentals",
            "Designed practical sessions on variables, control structures, arrays, pointers, and functions",
            "Prepared training materials, assignments, and coding exercises",
            "Assessed student performance and provided personalized guidance",
          ],
        },
        {
          icon: GraduationCap,
          title: "B.Tech – Information Technology",
          org: "Sri Shanmugha College of Engineering and Technology",
          period: "GPA: 7.89",
          items: [
            "Core coursework in Data Structures, Algorithms, and Software Engineering",
            "Built a strong foundation in programming with Java and C",
          ],
        },
        {
          icon: Award,
          title: "Full-Stack Development MasterClass",
          org: "NoviTech R&D Pvt. Ltd.",
          period: "Certification",
          items: [
            "Completed intensive training covering modern full-stack technologies",
          ],
        },
      ].map((entry, i) => (
        <AnimatedSection key={entry.title} delay={i * 0.15}>
          <div className={`relative flex flex-col md:flex-row gap-4 mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1.5 md:-translate-x-1.5 mt-2 z-10" />

            <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
              <div className="glass-card">
                <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                  <entry.icon className="text-primary" size={18} />
                  <span className="font-mono text-xs text-primary">{entry.period}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{entry.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{entry.org}</p>
                <ul className={`space-y-1 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                  {entry.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground">• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default ExperienceSection;
