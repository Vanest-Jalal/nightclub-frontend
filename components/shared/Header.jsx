"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

/* Navigationslinks */
const navLinks = [
  { title: "Home", href: "/" },
  { title: "Events", href: "/events" },
  { title: "Book Table", href: "/booking" },
  { title: "Contact Us", href: "/contact" },
];

/* Header */
const Header = () => {
  const pathname = usePathname();
  const closeMenu = () => {
    document.getElementById("burger-menu").hidePopover();
  };

  return (
    <header className="sticky top-0 flex items-center justify-between px-4 py-5 bg-(--color-black) border-t border-b border-(--color-pink-500)">
      {/* Dekorative hjørner */}
      <div className="absolute top-0 left-0 w-8 h-8 bg-(--color-pink-500) [clip-path:polygon(0_0,_100%_0,_0_100%)]"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 bg-(--color-pink-500) [clip-path:polygon(100%_0,100%_100%,0_100%)]"></div>

      <nav
        aria-label="Main navigation"
        className="flex w-full items-center justify-between"
      >
        {/* Logo */}
        <Image
          src="/assets/Logo.png"
          alt="Logo"
          width={189}
          height={46}
          className="lg:ml-20"
        />

        {/* Burgerikon */}
        <button
          type="button"
          aria-label="Toggle menu"
          popoverTarget="burger-menu"
          className="ml-auto flex flex-col gap-2 w-11 h-8 lg:hidden"
        >
          <span className="w-full h-1 bg-(--color-white)"></span>
          <span className="w-full h-1 bg-(--color-white)"></span>
          <span className="w-full h-1 bg-(--color-white)"></span>
        </button>

        {/* Desktopnavigation */}
        <div className="hidden lg:flex gap-8 lg:mr-20 text-(length:--font-size-nav) leading-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group ${
                pathname === link.href
                  ? "text-(--color-nav-active)"
                  : "text-(--color-nav-text)"
              }`}
            >
              <span className="block h-7 overflow-hidden">
                <span
                  className={`block transition-transform duration-300 ${pathname === link.href ? "" : "group-hover:-translate-y-7"}`}
                >
                  <span className="block">
                    {link.title}
                  </span>
                  <span
                    aria-hidden="true"
                    className="block text-(--color-nav-active)"
                  >
                    {link.title}
                  </span>
                </span>
              </span>
              <span
                className={`block w-8 h-px bg-linear-to-r from-transparent via-(--color-nav-active) to-transparent mx-auto my-2 group-hover:scale-x-100 ${pathname === link.href ? "scale-x-100" : "scale-x-0"}`}
              ></span>
            </Link>
          ))}
        </div>

        {/* Mobilnavigation */}
        <div
          id="burger-menu"
          popover="auto"
          className="m-0 w-full h-dvh max-w-none text-(--color-nav-text) bg-(--color-black)/80 open:flex flex-col items-center justify-center gap-8 text-(length:--font-size-nav) font-(--font-weight-medium) uppercase tracking-(--letter-spacing-wide)"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              onClick={closeMenu}
              href={link.href}
            >
              {link.title}
            </Link>
          ))}

          {/* Lukkeikon */}
          <button
            type="button"
            aria-label="Close menu"
            popoverTarget="burger-menu"
            popoverTargetAction="hide"
            className="absolute top-4 right-4"
          >
            <Image
              src="/assets/icon/close.svg"
              alt=""
              width={24}
              height={24}
            />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
