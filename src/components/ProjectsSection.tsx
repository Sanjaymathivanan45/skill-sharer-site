import AnimatedSection from "./AnimatedSection";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Programming Training Platform",
    desc: "Designed and delivered a comprehensive C programming curriculum with assignments, coding exercises, and structured learning modules for beginners.",
    tech: ["C", "Curriculum Design", "Assessment"],
    impact: "Helped dozens of students build strong programming foundations",
  },
  {
    title: "Interactive Web Portfolio",
    desc: "Built a modern, responsive personal portfolio using React and Tailwind CSS with smooth animations, dark theme, and optimized performance.",
    tech: ["React", "Tailwind CSS", "TypeScript", "Framer Motion"],
    impact: "Showcases development and mentoring expertise",
  },
  {
    title: "Student Management System",
    desc: "Developed a Java-based application for tracking student progress, assessments, and performance metrics during training programs.",
    tech: ["Java", "OOP", "Data Structures"],
    impact: "Streamlined student tracking and performance evaluation",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-container">
    <AnimatedSection>
      <p className="font-mono text-primary text-sm mb-2">04. Projects</p>
      <h2 className="section-title">Featured Projects</h2>
      <div className="h-1 w-16 bg-primary rounded mb-8" />
    </AnimatedSection>

    <div className="grid md:grid-cols-3 gap-6">
      {projects.map((project, i) => (
        <AnimatedSection key={project.title} delay={i * 0.15}>
          <div className="glass-card glow-border h-full flex flex-col hover:scale-[1.02] transition-transform duration-300">
            <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 flex-1">{project.desc}</p>
            <p className="text-xs text-primary mb-3 italic">{project.impact}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="text-xs font-mono bg-secondary text-secondary-foreground px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
