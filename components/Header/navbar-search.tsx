"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SearchInput from "@/components/ui/search-input"

export default function NavbarSearch() {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!searchValue.trim()) return;
      router.push(`/search?q=${encodeURIComponent(searchValue.trim())}`);
  }


  return (
    <form onSubmit={handleSearch}>
      <SearchInput
        value={searchValue}
        onChange={setSearchValue}
        placeholder="Search site..."
      />
    </form>
  );
}
