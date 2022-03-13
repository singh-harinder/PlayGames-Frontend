import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import Nav from "./Nav";
import Search from "./Search";

type ClientOnlyProps = {
  children: ReactNode;
};

function ClientOnly({ children, ...delegated }: ClientOnlyProps) {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return <div {...delegated}>{children}</div>;
}

function Header() {
  return (
    <header>
      <div className="to to mb-4 mt-2 flex justify-center bg-[#48CAE4] bg-gradient-to-r from-customblue p-4 text-4xl font-bold uppercase text-white md:text-6xl">
        <Link href="/">
          <a className="-skew-x-6">Play Games </a>
        </Link>
      </div>
      <Nav />
      <ClientOnly>
        <div className="mb-5 p-2">
          <Search />
        </div>
      </ClientOnly>
    </header>
  );
}

export default Header;
