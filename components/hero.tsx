"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Calendar, Sparkles } from "lucide-react";
import Image from "next/image";
import {
  StoryblokRichText,
  type StoryblokRichTextInput,
  type StoryblokReactRichTextProps,
} from "@storyblok/react";
import { StoryblokLink, type StoryblokLinkProps } from "@/lib/storyblok-link";

//create a

type StoryblokImage = {
  filename: string;
  alt?: string;
  title?: string;
  copyright?: string;
  focus?: string;
};

type HeroProps = {
  blok: {
    heading: string | StoryblokRichTextInput;
    text: string | StoryblokRichTextInput;
    image?: StoryblokImage;
    eyebrow?: string;
    button_text?: string;
    button_link?: StoryblokLinkProps["link"];
  };
};

function InlineRichTextParagraph({
  children,
}: StoryblokReactRichTextProps<"paragraph">) {
  return <>{children}</>;
}

export default function Hero({ blok }: Readonly<HeroProps>) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8">
            <Sparkles className="h-4 w-4" />
            <span className="hero-eyebrow text-sm font-medium">{blok.eyebrow}</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight font-[family-name:var(--font-heading)] text-balance">
            {typeof blok.heading === "string" ? (
              blok.heading
            ) : (
              <StoryblokRichText
                document={blok.heading}
                wrapper={false}
                components={{ paragraph: InlineRichTextParagraph }}
              />
            )}
          </h1>

          {/* Subheading */}
          <div className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {typeof blok.text === "string" ? (
              blok.text
            ) : (
              <StoryblokRichText document={blok.text} />
            )}
          </div>

          {blok.image && (
            <Image
              src={blok.image.filename}
              alt={blok.image.alt ?? ""}
              width={800}
              height={500}
            />
          )}

          {blok.button_text && blok.button_link && (
            <StoryblokLink link={blok.button_link} className="mt-8 inline-block">
              <Button size="lg">{blok.button_text}</Button>
            </StoryblokLink>
          )}


          {/* Search Bar */}
          <div className="mt-10 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 p-3 bg-card rounded-2xl shadow-lg border border-border">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search events, activities, festivals..."
                  className="pl-10 h-12 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="h-12 gap-2 px-4">
                  <MapPin className="h-4 w-4" />
                  <span className="hidden sm:inline">Location</span>
                </Button>
                <Button variant="outline" className="h-12 gap-2 px-4">
                  <Calendar className="h-4 w-4" />
                  <span className="hidden sm:inline">Date</span>
                </Button>
                <Button className="h-12 px-6">Search</Button>
              </div>
            </div>
          </div>

          {/* Quick Tags */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <span className="text-sm text-muted-foreground">Popular:</span>
            {["Family Fun", "Live Music", "Outdoor", "Free Events", "This Weekend"].map(
              (tag) => (
                <button
                  key={tag}
                  className="px-3 py-1.5 text-sm rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                >
                  {tag}
                </button>
              )
            )}
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { value: "2,500+", label: "Local Events" },
              { value: "150+", label: "Venues" },
              { value: "50K+", label: "Families" },
              { value: "12", label: "Categories" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary font-[family-name:var(--font-heading)]">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
