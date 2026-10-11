/**
 * A hairline progress bar with a label.
 * With `progress` (0–100) it fills to that point; without it, a short burgundy
 * segment drifts along the line to read as "ongoing".
 */
export function StatusBar({ status, progress }: { status: string; progress?: number }) {
  const known = typeof progress === "number";
  const value = known ? Math.min(100, Math.max(0, progress)) : undefined;

  return (
    <div className="w-full sm:w-56">
      <div className="flex items-baseline justify-between text-sm tracking-[0.06em] uppercase">
        <span>{status}</span>
        {known && <span className="text-muted tabular-nums">{value}%</span>}
      </div>
      <div
        role="progressbar"
        aria-label={status}
        aria-valuemin={known ? 0 : undefined}
        aria-valuemax={known ? 100 : undefined}
        aria-valuenow={value}
        className="relative mt-3 h-[2px] overflow-hidden bg-rule"
      >
        {known ? (
          <div className="absolute inset-y-0 left-0 bg-oxblood" style={{ width: `${value}%` }} />
        ) : (
          <div className="progress-drift absolute inset-y-0 left-0 w-2/5 bg-oxblood" />
        )}
      </div>
    </div>
  );
}
