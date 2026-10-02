import { storyblokInit, apiPlugin } from "@storyblok/react"; 
import Hero from "@/components/hero";

export function getStoryblokTokenStatus() {
    const token = process.env.STORYBLOK_PREVIEW_TOKEN;

    return {
        configured: Boolean(token),
        length: token?.length ?? 0,
    };
}

storyblokInit({
    accessToken: process.env.STORYBLOK_PREVIEW_TOKEN,
    use: [apiPlugin],
    components: {
        Hero: Hero,
    },
});