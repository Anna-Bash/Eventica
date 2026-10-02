import type { StoryblokImage } from "@/lib/storyblok";
import type { StoryblokLink } from "@/lib/storyblok-link";

type CategoryCardProps = {
  blok: {
    title: string;
    description: string;
    image: StoryblokImage;
    link: (typeof StoryblokLink);
  };
};