"use client";

import { useState } from "react";
import SearchInput from "@/components/ui/search-input"

export default function NavbarSearch() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <SearchInput
      value={searchValue}
      onChange={setSearchValue}
      placeholder="Search site..."
    />
  );
}
