type SearchResult = {
  title: string;
  href: string;
  description: string;
};

const searchIndex: SearchResult[] = [
  { title: "Home", description: "Welcome to our site", href: "/" },
  { title: "Events", description: "Browse upcoming events", href: "/events" },
  { title: "About", description: "Learn about us", href: "/about" },
  { title: "Contact", description: "Get in touch", href: "/contact" },
];

export async function searchContent(query: string): Promise<SearchResult[]> {
  if (!query.trim()) return [];

  const q = query.toLowerCase();

  return searchIndex.filter(
    (item) =>
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q),
  );
}