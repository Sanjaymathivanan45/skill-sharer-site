import { useState, FormEvent } from "react";
import AnimatedSection from "./AnimatedSection";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-container">
      <AnimatedSection>
        <p className="font-mono text-primary text-sm mb-2">07. Contact</p>
        <h2 className="section-title">Get in Touch</h2>
        <div className="h-1 w-16 bg-primary rounded mb-8" />
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-10">
        <AnimatedSection delay={0.1}>
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Whether you're looking for programming training, technical mentoring, or want to collaborate on a project — I'd love to hear from you.
            </p>
            <div className="space-y-4">
              {[
                { icon: Mail, label: "sanjaymathivanan7345@gmail.com", href: "mailto:sanjaymathivanan7345@gmail.com" },
                { icon: Phone, label: "+91 9361191214", href: "tel:+919361191214" },
                { icon: MapPin, label: "Erode, Tamil Nadu, India", href: "#" },
              ].map((item) => (
                <a key={item.label} href={item.href} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <item.icon size={18} className="text-primary" />
                  <span className="text-sm">{item.label}</span>
                </a>
              ))}
            </div>
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/sanjaymathivanan45" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/sanjaymathivanan" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <form onSubmit={handleSubmit} className="glass-card space-y-4">
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Name</label>
              <input
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Email</label>
              <input
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Message</label>
              <textarea
                required
                maxLength={1000}
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                placeholder="Tell me about your project or training needs..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Send size={16} />
              Send Message
            </button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
