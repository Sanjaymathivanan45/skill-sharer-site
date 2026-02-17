import AnimatedSection from "./AnimatedSection";

const skills = [
  { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React.js"] },
  { category: "Programming", items: ["Java", "C Programming"] },
  { category: "Teaching", items: ["Technical Training", "Curriculum Design", "Student Assessment", "Mentoring"] },
  { category: "Soft Skills", items: ["Problem Solving", "Debugging", "Communication", "Team Collaboration"] },
];

const SkillsSection = () => (
  <section id="skills" className="section-container">
    <AnimatedSection>
      <p className="font-mono text-primary text-sm mb-2">02. Skills</p>
      <h2 className="section-title">Technical Skills</h2>
      <div className="h-1 w-16 bg-primary rounded mb-8" />
    </AnimatedSection>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {skills.map((group, i) => (
        <AnimatedSection key={group.category} delay={i * 0.1}>
          <div className="glass-card h-full">
            <h3 className="text-primary font-mono text-sm font-semibold mb-4">{group.category}</h3>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
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

export default SkillsSection;
