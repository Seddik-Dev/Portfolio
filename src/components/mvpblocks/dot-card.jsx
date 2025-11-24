const DotRow = ({ accentColor }) => {
  return (
    <section className="absolute z-0 grid h-full w-full grid-cols-2 place-content-between">
      {Array.from({ length: 4 }).map((_, idx) => (
        <div
          key={idx}
          className={`my-4 size-1 rounded-full outline outline-8 outline-gray-50 sm:my-6 md:my-8 dark:outline-gray-950 ${
            idx % 2 === 0 ? "-translate-x-[2.5px]" : "translate-x-[2.5px] place-self-end"
          }`}
          style={{ backgroundColor: accentColor }}
        />
      ))}
    </section>
  );
};

export default function DotCard({
  year,
  title,
  subtitle,
  description,
  icon,
  className = "",
  accentColor = "#a855f7",
  dateFormat = "badge",
  children,
}) {
  return (
    <div
      className={`relative mx-auto w-full rounded-lg border border-dashed border-zinc-300 px-4 sm:px-6 md:px-8 dark:border-zinc-800 ${className}`}
    >
      <div className="absolute top-4 left-0 -z-0 h-px w-full bg-zinc-300 sm:top-6 md:top-8 dark:bg-zinc-700" />
      <div className="absolute bottom-4 left-0 z-0 h-px w-full bg-zinc-300 sm:bottom-6 md:bottom-8 dark:bg-zinc-700" />
      <div className="relative w-full border-x border-zinc-200 dark:border-zinc-700 bg-background/90 backdrop-blur">
        <div className="absolute inset-0 z-0 grid h-full w-full items-center">
          <DotRow accentColor={accentColor} />
        </div>
        <div className="relative z-20 mx-auto py-8">
          <div className="p-6 space-y-3">
            {year &&
              (dateFormat === "badge" ? (
                <div className="flex items-center text-sm font-semibold uppercase tracking-wide">
                  {icon && (
                    <span className="mr-2 text-primary" style={{ color: accentColor }}>
                      {icon}
                    </span>
                  )}
                  <span style={{ color: accentColor }}>{year}</span>
                </div>
              ) : (
                <p
                  className="text-lg font-bold text-primary"
                  style={{ color: accentColor }}
                >
                  {year}
                </p>
              ))}
            {title && (
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {subtitle}
              </p>
            )}
            {description && (
              <p className="text-gray-700 dark:text-gray-300">{description}</p>
            )}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}