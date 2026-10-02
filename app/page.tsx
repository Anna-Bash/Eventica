import { Header } from "@/components/header";
import { Categories } from "@/components/categories";
import { EventsSection } from "@/components/events-section";
import { Features } from "@/components/features";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { getStoryblokApi, StoryblokComponent } from "@storyblok/react";
import "@/lib/storyblok";

export default async function Home() {
  const storyblokApi = getStoryblokApi()
  const {data} = await storyblokApi.get("cdn/stories/how-to-use", {version: "draft"});
  return (
    <main className="min-h-screen">
      {data.story.content.body.map((blok: any) => (
        <StoryblokComponent
        blok={blok}
        key={blok._uid}/>
      ))}
      {/* <StoryblokComponent blok={data.story.content} /> */}
      {/* <Header />
      <Hero />
      <Categories />
      <EventsSection />
      <Features />
      <Testimonials />
      <CTA />
      <Footer /> */}
    </main>
  );
}
