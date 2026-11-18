import Image from "next/image";

/* Navigation */
const Header = () => {
  return (
    <header>
      <nav aria-label="Main navigation">
        <div id="burger-menu" popover="auto">
          <a href="#">HOME</a>
          <a href="#">EVENTS</a>
          <a href="#">BOOK TABLE</a>
          <a href="#">CONTACT US</a>
        </div>
      </nav>
      <Image
        src="/assets/Logo.png"
        alt="Logo"
        width={189}
        height={46}
      />
      <button
        type="button"
        aria-label="Toggle menu"
        popoverTarget="burger-menu"
        className="flex flex-col gap-2 w-11 h-8"
      >
        <span className="w-full h-1 bg-(--color-white)"></span>
        <span className="w-full h-1 bg-(--color-white)"></span>
        <span className="w-full h-1 bg-(--color-white)"></span>
      </button>
    </header>
  );
};

export default Header;
