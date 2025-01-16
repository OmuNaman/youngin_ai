import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Zap } from "lucide-react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-dark-primary py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 cursor-pointer">
          <Zap className="w-8 h-8 text-accent-primary" />
          <span className="text-2xl font-bold text-accent-primary font-heading">
            Youngin AI
          </span>
        </Link>
        <div className="hidden md:flex space-x-6">
          <ScrollLink
            to="features"
            smooth={true}
            duration={500}
            offset={-70}
            className="hover:text-accent-primary transition-colors cursor-pointer"
          >
            Features
          </ScrollLink>
          <ScrollLink
            to="pricing"
            smooth={true}
            duration={500}
            offset={-70}
            className="hover:text-accent-primary transition-colors cursor-pointer"
          >
            Pricing
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="hover:text-accent-primary transition-colors cursor-pointer"
          >
            Contact Us
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;