// components/ui/search-input.tsx
import { Search } from "lucide-react";

type Props = {
  readonly value: string;
  readonly onChange: (value: string) => void;
  readonly placeholder?: string;
};

export default function SearchInput({
  value,
  onChange,
  placeholder = "Search...",
}: Readonly<Props>) {
  return (
    <div className="relative flex items-center">
      <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="pl-9 py-1.5 text-sm rounded-md border w-full focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
