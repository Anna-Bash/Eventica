import { ReactNode } from "react";
import Header from "@/components/organisms/Header/Header";
import { Input } from "../atoms/Input/Input";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Input label="Search Events" placeholder="Search for events..." />
    </>
  );
}