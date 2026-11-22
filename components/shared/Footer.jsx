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
      <div className="relative z-10 pt-12 lg:px-24">
        <Image
          src="/assets/Logo.png"
          alt="Logo"
          width={189}
          height={46}
          className="m-auto mb-12 lg:ml-0"
        />
        <div className="text-center space-y-8 lg:text-left">
          <div>
            <h2 className="mb-2 uppercase text-(--color-pink-500)">
              Location
            </h2>
            <address className="text-(length:--font-size-body)">
              <span className="block">
                Kompagnistræde 278
              </span>
              <span className="block">
                1265 København K
              </span>
            </address>
          </div>
          <div className="space-y-2 uppercase text-(length:--font-size-body)">
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
        </div>
        <div className="mt-16 grid text-center text-(--color-gray-500) lg:text-left lg:grid-cols-3 lg:mb-8 lg:items-end">
          <div className="mt-8 lg:mt-0 lg:flex lg:items-center lg:mb-3">
            <p>Night Club</p>
            <span className="hidden lg:inline lg:mx-2">
              -
            </span>
            <p>All Rights Reserved</p>
          </div>

          <div className="order-first space-y-4 lg:order-none lg:text-center">
            <h2 className="text-(--color-white) text-(length:--font-size-body)">
              Stay Connected With Us
            </h2>
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

          <p className="mt-8 pb-8 lg:mt-0 lg:pb-0 lg:text-right">
            Copyright © NightClub
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
