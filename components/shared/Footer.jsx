import Image from "next/image";

const Footer = () => {
  const socialIcons = [
    "/assets/icon/facebook.svg",
    "/assets/icon/snapchat.svg",
    "/assets/icon/instagram.svg",
  ];
  return (
    <footer
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/bg/footerbg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/90"></div>
      <div className="relative z-10 pt-12">
        <Image
          src="/assets/Logo.png"
          alt="Logo"
          width={189}
          height={46}
          className="m-auto mb-12 "
        />
        <div className="text-center space-y-8">
          <div>
            <h2 className="mb-2 uppercase text-(--color-pink-500)">
              Location
            </h2>
            <address>
              <span className="block ">
                Kompagnistræde 278
              </span>
              <span className="block">
                1265 København K
              </span>
            </address>
          </div>
          <div className="space-y-2 uppercase">
            <h2 className="text-(--color-pink-500)">
              Opening hours
            </h2>
            <span className="block">
              wed - thu 10:30 PM TO 3 AM
            </span>
            <span className="block">
              sat - sun: 11 PM TO 5 AM
            </span>
          </div>
          <div className="space-y-4 mt-12">
            <h2>Stay Connected With Us</h2>
            <div className="flex justify-center gap-4">
              {socialIcons.map((icon) => (
                <Image
                  key={icon}
                  src={icon}
                  alt="Social Media"
                  width={48}
                  height={48}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 text-center text-(--color-gray-500)">
          <p>Night Club</p>
          <p>All Rights Reserved</p>

          <p className="mt-8 pb-8">Copyright © NightClub</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
