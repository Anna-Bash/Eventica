"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, MapPin } from "lucide-react";

const footerLinks = {
  discover: {
    title: "Discover",
    links: [
      { name: "Events Near Me", href: "#" },
      { name: "This Weekend", href: "#" },
      { name: "Free Events", href: "#" },
      { name: "Family Activities", href: "#" },
      { name: "Festivals", href: "#" },
    ],
  },
  categories: {
    title: "Categories",
    links: [
      { name: "Live Music", href: "#" },
      { name: "Arts & Culture", href: "#" },
      { name: "Food & Drink", href: "#" },
      { name: "Outdoor", href: "#" },
      { name: "Sports", href: "#" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
  support: {
    title: "Support",
    links: [
      { name: "Help Center", href: "#" },
      { name: "Submit Event", href: "#" },
      { name: "Partner With Us", href: "#" },
      { name: "API", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ],
  },
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
];

const cities = [
  "San Francisco",
  "Los Angeles",
  "New York",
  "Chicago",
  "Seattle",
  "Austin",
  "Denver",
  "Miami",
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 pb-12 border-b border-background/10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">E</span>
              </div>
              <span className="text-xl font-bold tracking-tight font-[family-name:var(--font-heading)]">
                Eventica
              </span>
            </Link>
            <p className="text-sm text-background/70 mb-6 max-w-xs">
              Helping families discover amazing local entertainment since 2024.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/70 hover:text-background transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Cities Section */}
        <div className="py-8 border-b border-background/10">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Popular Cities
          </h3>
          <div className="flex flex-wrap gap-3">
            {cities.map((city) => (
              <a
                key={city}
                href="#"
                className="px-3 py-1.5 text-sm rounded-full bg-background/10 hover:bg-background/20 transition-colors"
              >
                {city}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/70">
            &copy; {new Date().getFullYear()} Eventica. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sm text-background/70 hover:text-background transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-sm text-background/70 hover:text-background transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-background/70 hover:text-background transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
