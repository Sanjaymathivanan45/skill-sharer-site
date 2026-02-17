const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-mono text-sm gradient-text">&lt;SM /&gt;</p>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Sanjay Mathivanan. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
