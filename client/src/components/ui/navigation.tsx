import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Trophy } from "lucide-react";

export function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Dave", href: "/about" },
    { name: "1-2-1 Coaching", href: "/individual-coaching" },
    { name: "Group Sessions", href: "/group-sessions" },
    { name: "Contact", href: "/contact" },
  ];

  // Quick section navigation for home page
  const homeSections = [
    { name: "Services", anchor: "services" },
    { name: "About", anchor: "about" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    // Close mobile menu and scroll to top will be handled by useEffect
  };

  const handleAnchorClick = (anchor: string) => {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <nav>
      <div>
        <div>
          {/* Logo */}
          <div>
            <Link href="/">
              <div>
                <Trophy />
                <div>
                  <span>ONE FOR ALL</span>
                  <span>COACHING</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div>
            <div>
              {navigation.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  onClick={() => handleLinkClick(item.href)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Home page section links */}
              {location === "/" && homeSections.map((section) => (
                <button
                  key={section.anchor}
                  onClick={() => handleAnchorClick(section.anchor)}
                >
                  {section.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button>
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div>
                  <div>
                    <Trophy />
                    <div>
                      <div>ONE FOR ALL</div>
                      <div>COACHING</div>
                    </div>
                  </div>
                </div>
                <nav>
                  <div>
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => handleLinkClick(item.href)}
                      >
                        {item.name}
                      </Link>
                    ))}
                    
                    {/* Home page section links in mobile */}
                    {location === "/" && homeSections.map((section) => (
                      <button
                        key={section.anchor}
                        onClick={() => handleAnchorClick(section.anchor)}
                      >
                        {section.name}
                      </button>
                    ))}
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
