import Image from "next/image";

const Header = () => {
  return (
    <header>
      <nav aria-label="Main navigation">
        <a href="#">HOME</a>
        <a href="#">EVENTS</a>
        <a href="#">BOOK TABLE</a>
        <a href="#">CONTACT US</a>
      </nav>
      <Image
        src="/assets/Logo.png"
        alt="Logo"
        width={189}
        height={46}
      />
    </header>
  );
};

export default Header;
