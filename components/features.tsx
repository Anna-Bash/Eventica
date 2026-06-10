"use client";

import { MapPin, Bell, Compass, Users } from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "Curated Discovery",
    description:
      "We aggregate entertainment options from dozens of sources, so you never miss an event happening nearby.",
  },
  {
    icon: MapPin,
    title: "Hyperlocal Focus",
    description:
      "Find events in your neighborhood, not just your city. Discover hidden gems just around the corner.",
  },
  {
    icon: Users,
    title: "Family-Friendly",
    description:
      "Every event is tagged for age-appropriateness, so you can find activities perfect for the whole family.",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description:
      "Get notified when events matching your interests pop up. Never miss your favorite band or festival again.",
  },
];

export function Features() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] text-balance">
              Stop searching.{" "}
              <span className="text-primary">Start exploring.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground text-pretty">
              Eventica transforms the overwhelming task of finding family entertainment 
              into an exciting journey of discovery. We believe every weekend should be 
              an adventure waiting to happen.
            </p>
            <p className="mt-4 text-muted-foreground">
              Unlike personal calendar apps, Eventica doesn&apos;t manage your schedule — 
              it curates a comprehensive directory of what&apos;s happening around you, 
              making it easy to answer the age-old question: &quot;What should we do today?&quot;
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="p-6 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
