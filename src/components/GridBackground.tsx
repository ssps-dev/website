"use client";

export default function GridBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <div className="mx-auto h-full max-w-7xl px-6 lg:px-8">
        <div className="relative h-full">
          {/* 5 visible vertical dotted grid lines */}
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="absolute top-0 h-full"
              style={{
                left: `${(i / 6) * 100}%`,
                width: "1px",
                backgroundImage:
                  "repeating-linear-gradient(to bottom, #E5E2DE 0px, #E5E2DE 3px, transparent 3px, transparent 10px)",
              }}
            />
          ))}
          {/* Left border line */}
          <div
            className="absolute top-0 left-0 h-full"
            style={{
              width: "1px",
              backgroundImage:
                "repeating-linear-gradient(to bottom, #E5E2DE 0px, #E5E2DE 3px, transparent 3px, transparent 10px)",
            }}
          />
          {/* Right border line */}
          <div
            className="absolute top-0 right-0 h-full"
            style={{
              width: "1px",
              backgroundImage:
                "repeating-linear-gradient(to bottom, #E5E2DE 0px, #E5E2DE 3px, transparent 3px, transparent 10px)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
