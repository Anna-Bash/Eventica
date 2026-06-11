"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin, Search } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<{ name?: string; email?: string } | null>(null);
  const currentPath =
    typeof window !== 'undefined'
      ? `${window.location.pathname}${window.location.search}`
      : '/';

  useEffect(() => {
    let active = true;

    async function fetchUser() {
      try {
        const res = await fetch('/api/auth/me');
        if (!active) return;
        if (!res.ok) {
          setUser(null);
          return;
        }

        const data = await res.json();
        setUser(data?.authenticated ? data.user : null);
      } catch {
        if (active) {
          setUser(null);
        }
      }
    }

    fetchUser();
    return () => {
      active = false;
    };
  }, []);

  const initials = user
    ? (user.name ?? user.email ?? '')
        .split(' ')
        .map((part) => part[0])
        .filter(Boolean)
        .slice(0, 2)
        .join('')
        .toUpperCase()
    : '';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">E</span>
            </div>
            <span className="text-xl font-bold tracking-tight font-[family-name:var(--font-heading)]">
              Eventica
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#discover"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Discover
            </Link>
            <Link
              href="#categories"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Categories
            </Link>
            <Link
              href="#calendar"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Calendar
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="gap-2">
              <MapPin className="h-4 w-4" />
              <span>San Francisco</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Search className="h-4 w-4" />
            </Button>
            {user ? (
              <Avatar className="h-9 w-9">
                <AvatarFallback>{initials || "UN"}</AvatarFallback>
              </Avatar>
            ) : (
              <>
                <Button asChild variant="ghost" size="sm">
                  <Link href={`/login?returnTo=${encodeURIComponent(currentPath)}`}>Login</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href={`/register?returnTo=${encodeURIComponent(currentPath)}`}>Sign Up</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="#discover"
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Discover
              </Link>
              <Link
                href="#categories"
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Categories
              </Link>
              <Link
                href="#calendar"
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Calendar
              </Link>
              <Link
                href="#about"
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="outline" className="gap-2 justify-start">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco</span>
                </Button>
                {user ? (
                  <div className="flex items-center justify-center py-2">
                    <Avatar className="h-9 w-9">
                      <AvatarFallback>{initials || "UN"}</AvatarFallback>
                    </Avatar>
                  </div>
                ) : (
                  <>
                    <Button asChild variant="ghost" className="w-full">
                      <Link href={`/login?returnTo=${encodeURIComponent(currentPath)}`}>Login</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={`/register?returnTo=${encodeURIComponent(currentPath)}`}>Sign Up</Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
