import { Link } from "wouter";
import { Trophy, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const services = [
    { name: "1-2-1 Coaching", href: "/individual-coaching" },
    { name: "Group Sessions", href: "/group-sessions" },
    { name: "Coach Education", href: "/about" },
    { name: "Coach Mentorship", href: "/about" },
  ];

  const quickLinks = [
    { name: "About Dave", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Book Now", href: "/contact" },
  ];

  const parentLinks = [
    { name: "Parent Login", href: "/login" },
    { name: "Create Account", href: "/register" },
  ];

  return (
    <footer>
      <div>
        <div>
          <div>
            <Link href="/">
              <div>
                <Trophy />
                ONE FOR ALL
                <span>COACHING</span>
              </div>
            </Link>
            <p>
              Helping You Become the Best Version of Yourself through professional football coaching and development.
            </p>
            <div>
              <a href="#">
                <Facebook />
              </a>
              <a href="#">
                <Twitter />
              </a>
              <a href="#">
                <Instagram />
              </a>
              <a href="#">
                <Linkedin />
              </a>
            </div>
          </div>

          <div>
            <h3>Services</h3>
            <ul>
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href}>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Quick Links</h3>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>For Parents</h3>
            <ul>
              {parentLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <h4>Contact Info</h4>
              <p>Email: coach@oneforallcoaching.com</p>
              <p>Phone: +44 123 456 7890</p>
            </div>
          </div>
        </div>

        <div>
          <div>
            <p>
              &copy; 2024 One For All Coaching. All rights reserved.
            </p>
            <div>
              <Link href="/privacy">
                Privacy Policy
              </Link>
              <Link href="/terms">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
