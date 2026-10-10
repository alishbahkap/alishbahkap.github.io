/**
 * A fixed-proportion image frame. With no `src` it draws a flat placeholder
 * block at the same shape, so layouts don't shift when real photos arrive.
 *
 * No hooks, so it works in both server and client components.
 */
export function ImageBox({
  src,
  alt,
  ratio,
  className = "",
}: {
  src?: string;
  alt: string;
  /** A Tailwind aspect class, e.g. "aspect-square" or "aspect-[16/7]". */
  ratio: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-rule ${ratio} ${className}`} aria-hidden={src ? undefined : true}>
      {src && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      )}
    </div>
  );
}
