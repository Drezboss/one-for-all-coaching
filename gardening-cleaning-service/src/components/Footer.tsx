import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Sparkles, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div>
        <div>
          {/* Company Info */}
          <div>
            <Link to="/">
              <div>
                <Leaf />
                <Sparkles />
              </div>
              <div>
                <span>GreenClean</span>
                <span>Garden & Home Services</span>
              </div>
            </Link>
            <p>
              Professional gardening and cleaning services for your home. 
              We bring nature's beauty and cleanliness to your doorstep.
            </p>
            <div>
              <a href="#">
                <Facebook />
              </a>
              <a href="#">
                <Instagram />
              </a>
              <a href="#">
                <Twitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/team">
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/booking">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3>Our Services</h3>
            <ul>
              <li>Garden Maintenance</li>
              <li>Lawn Care</li>
              <li>Tree & Hedge Trimming</li>
              <li>House Cleaning</li>
              <li>Window Cleaning</li>
              <li>Pressure Washing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3>Contact Information</h3>
            <div>
              <div>
                <Phone />
                <div>
                  <p>Phone</p>
                  <p>+44 123 456 7890</p>
                </div>
              </div>
              <div>
                <Mail />
                <div>
                  <p>Email</p>
                  <p>info@greenclean.com</p>
                </div>
              </div>
              <div>
                <MapPin />
                <div>
                  <p>Service Area</p>
                  <p>London & Surrounding Areas</p>
                </div>
              </div>
              <div>
                <Clock />
                <div>
                  <p>Working Hours</p>
                  <p>Mon-Sat: 8AM-6PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div>
          <div>
            <p>
              &copy; 2024 GreenClean Garden & Home Services. All rights reserved.
            </p>
            <div>
              <Link to="/privacy">Privacy Policy</Link>
              <span>|</span>
              <Link to="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;