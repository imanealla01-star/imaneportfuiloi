interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 ${
          light ? "text-white" : "gradient-text"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg md:text-xl max-w-2xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/80" : "text-gray-600"}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-20 rounded-full ${
          centered ? "mx-auto" : ""
        } ${light ? "bg-white/40" : "bg-gradient-to-r from-ocean to-deep-ocean"}`}
      />
    </div>
  );
}
