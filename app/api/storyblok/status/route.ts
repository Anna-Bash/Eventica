import { getStoryblokTokenStatus } from "@/lib/storyblok";

export function GET() {
  return Response.json(getStoryblokTokenStatus());
}
