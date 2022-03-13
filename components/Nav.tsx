import Link from "next/link";
import { useState } from "react";
import { useUserQuery } from "../types/generated-queries";
import DisplayError from "./ErrorMessage";
import LoadingAnimation from "./Loading";
import SignOut from "./SignOut";

function Nav() {
  const user = useUserQuery();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  if (user.loading) return <LoadingAnimation />;
  if (user.error) return <DisplayError error={user.error} />;

  const count = user.data?.authenticatedItem?.cart.reduce(
    (tally, cartItem) => tally + (cartItem?.product || 0 ? cartItem?.quantity || 0 : 0),
    0,
  );

  return (
    <div>
      <nav className="mt-10 mb-10 hidden md:block">
        <ul className="flex -skew-x-6 justify-around p-4 text-2xl font-bold uppercase">
          <li className="hover:text-custompurple">
            <Link href="/products">Games</Link>
          </li>
          {user.data?.authenticatedItem && (
            <>
              <li className="hover:text-custompurple">
                <Link href="/sell">Sell</Link>
              </li>
              <li className="hover:text-custompurple">
                <Link href="/orders">Orders</Link>
              </li>
              <li className="hover:text-custompurple">
                <Link href="/account">Account</Link>
              </li>
              <li className="hover:text-custompurple">
                <Link href="/cart">
                  <a>
                    Cart
                    <span className="rounded-full border-2 border-custompurple p-1 text-custompurple">{count}</span>
                  </a>
                </Link>
              </li>
              <SignOut />
            </>
          )}
          {!user.data?.authenticatedItem && (
            <li className="hover:text-custompurple">
              <Link href="/signin">Sign In</Link>
            </li>
          )}
        </ul>
      </nav>
      {/*  */}
      <div className="flex cursor-pointer justify-center md:hidden">
        <button type="button" className="mt-4" onClick={() => setIsOpen(!isOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <nav className="mt-2 mb-10 p-2 font-bold uppercase sm:block md:hidden">
          <ul>
            <li className="flex justify-center p-2 hover:text-custompurple">
              <Link href="/products">Products</Link>
            </li>
            {user.data?.authenticatedItem && (
              <>
                <li className="flex justify-center p-2 hover:text-custompurple">
                  <Link href="/sell">Sell</Link>
                </li>
                <li className="flex justify-center p-2 hover:text-custompurple">
                  <Link href="/orders">Orders</Link>
                </li>
                <li className="flex justify-center p-2 hover:text-custompurple">
                  <Link href="/account">Account</Link>
                </li>
                <li className="flex justify-center p-2 hover:text-custompurple">
                  <Link href="/cart">Cart</Link>
                </li>
                <li className="flex justify-center p-2">
                  <SignOut />
                </li>
              </>
            )}
            {!user.data?.authenticatedItem && (
              <li className="flex justify-center p-2 hover:text-custompurple">
                <Link href="/signin">Sign In</Link>
              </li>
            )}
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Nav;
