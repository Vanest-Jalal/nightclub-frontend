export default function SectionHeading({ title }) {
  return (
    <div className="mb-8">
      <h2 className="uppercase text-center text-(length:--font-size-h1) tracking-(--letter-spacing-wide)">
        {title}
      </h2>
      {/* Sektionsoverskrift */}
      <div className="bg-linear-to-r from-transparent via-(--color-pink-500) to-transparent w-[99px] h-0.5 mx-auto mt-3"></div>
    </div>
  );
}
