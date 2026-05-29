export default function SectionHeading({ eyebrow, title, description, align = "center" }) {
  const alignment = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div className={`mx-auto mb-10 flex max-w-3xl flex-col ${alignment}`}>
      <span className="mb-3 text-sm font-bold uppercase tracking-widest text-roof-copper">{eyebrow}</span>
      <h2 className="text-3xl font-black leading-tight text-roof-navy sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-roof-steel sm:text-lg">{description}</p> : null}
    </div>
  );
}
