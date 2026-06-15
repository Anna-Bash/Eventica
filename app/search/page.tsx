import {searchContent} from "@/lib/search";

type SearchResult = {
  id: string;
  title: string;
};

type Props = {
  searchParams: {
    q?: string;
  };
};

export default async function SearchPage({ searchParams }: Props) {
    const query = searchParams.q ?? "";
    const results: SearchResult[] = await searchContent(query);

    return (
      <main className="min-h-screen p-8">
        <h1 className="text-2xl font-bold mb-4">
          Search Results for "{query}"
        </h1>
        {results.length === 0 ? (
          <p>No results found.</p>
        ) : (
          <ul>
            {results.map((result: SearchResult) => (
              <li key={result.href} className="border rounded-md p-4">
                <a
                  href={result.href}
                  className="text-lg font-semibold text-primary hover:underline"
                >
                  {result.title}
                </a>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        )}
      </main>
    );
}
