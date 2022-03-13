import { ReactNode } from "react";
import Header from "./Header";

interface PageProps {
  children: ReactNode;
}

function Page({ children }: PageProps) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Page;
