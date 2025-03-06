const NavLinks = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex items-center space-x-8">
      <button onClick={() => scrollToSection("features")} className="hover:text-blue-600">Features</button>
      <button onClick={() => scrollToSection("whychooseus")} className="hover:text-blue-600">Why Choose Us</button>
      <button onClick={() => scrollToSection("pricing")} className="hover:text-blue-600">Pricing</button>
      <button onClick={() => scrollToSection("faq")} className="hover:text-blue-600">FAQ</button>
    </div>
  );
};

export default NavLinks;
