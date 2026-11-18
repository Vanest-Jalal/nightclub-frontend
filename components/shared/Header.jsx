"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

/* Navigation */
const Header = () => {
  const pathname = usePathname();
  return (
    <header className="relative flex items-center justify-between px-4 py-5 border-t border-b border-(--color-pink-500)">
      <div className="absolute top-0 left-0 w-8 h-8 bg-(--color-pink-500) [clip-path:polygon(0_0,_100%_0,_0_100%)]"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 bg-(--color-pink-500) [clip-path:polygon(100%_0,100%_100%,0_100%)]"></div>

      <nav
        aria-label="Main navigation"
        className="flex w-full items-center justify-between group"
      >
        <Image
          src="/assets/Logo.png"
          alt="Logo"
          width={189}
          height={46}
          className="lg:ml-20"
        />
        <button
          type="button"
          aria-label="Toggle menu"
          popoverTarget="burger-menu"
          className="ml-auto flex flex-col gap-2 w-11 h-8 group-has-[#burger-menu:popover-open]:hidden lg:hidden"
        >
          <span className="w-full h-1 bg-(--color-white)"></span>
          <span className="w-full h-1 bg-(--color-white)"></span>
          <span className="w-full h-1 bg-(--color-white)"></span>
        </button>

        <div className="hidden lg:flex gap-8 lg:mr-20 lg:text-2xl">
          <a
            href="/"
            className={
              pathname === "/"
                ? "text-(--color-pink-500)"
                : "text-(--color-white)"
            }
          >
            Home
          </a>
          <a
            href="/events"
            className={
              pathname === "/events"
                ? "text-(--color-pink-500)"
                : "text-(--color-white)"
            }
          >
            Events
          </a>
          <a
            href="/book-table"
            className={
              pathname === "/book-table"
                ? "text-(--color-pink-500)"
                : "text-(--color-white)"
            }
          >
            Book Table
          </a>
          <a
            href="/contact"
            className={
              pathname === "/contact"
                ? "text-(--color-pink-500)"
                : "text-(--color-white)"
            }
          >
            Contact Us
          </a>
        </div>
        <div
          id="burger-menu"
          popover="auto"
          className="m-0 w-full h-dvh max-w-none text-(--color-white) bg-black/80 open:flex flex-col items-center justify-center gap-8 text-xl font-medium uppercase tracking-wide"
        >
          <a href="#">Home</a>
          <a href="#">Events</a>
          <a href="#">Book Table</a>
          <a href="#">Contact Us</a>
          <button
            type="button"
            aria-label="Close menu"
            popoverTarget="burger-menu"
            popoverTargetAction="hide"
            className="absolute top-4 right-4 text-3xl font-bold"
          >
            X
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
