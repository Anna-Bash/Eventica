import Link from "next/link";
import type { ReactNode } from "react";

export type StoryblokLinkProps = Readonly<{
  link: {
    linktype: string;
    cached_url?: string;
    url?: string;
  };
  children: ReactNode;
  className?: string;
}>;

export function StoryblokLink({ link, children, className }: StoryblokLinkProps) {
  if (link.linktype === "story" && typeof link.cached_url === "string") {
    const cachedUrl = link.cached_url;
    const href = cachedUrl.startsWith("/") ? cachedUrl : `/${cachedUrl}`;

    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  if (link.linktype === "url") {
    return link.url ? (
      <a href={link.url} className={className}>
        {children}
      </a>
    ) : null;
  }

  return null;
}
