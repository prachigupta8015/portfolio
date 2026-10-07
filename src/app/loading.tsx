import React from "react";

/**
 * Next.js App Router Root Loading Component.
 * Automatically shown by React Suspense when route segments, fonts, or server components are loading.
 * Features the signature organic morphing blob without generic progress bars.
 */
export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading Prachi Gupta's portfolio"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--bg)] text-[var(--fg)] px-6 select-none"
    >
      {/* Decorative ambient glowing radial gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute h-[380px] w-[380px] rounded-full blur-[100px] opacity-40 animate-pulse"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--accent) 50%, transparent) 0%, transparent 70%)",
        }}
      />

      {/* Signature Morphing Blob */}
      <div className="relative z-10 flex flex-col items-center gap-6 text-center">
        <div className="relative aspect-[1/1.05] w-28 sm:w-32">
          {/* Outline element */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 border border-[var(--accent)] opacity-75 translate-x-2.5 translate-y-2.5"
            style={{
              animation: "blob-morph 12s ease-in-out infinite",
              animationDelay: "0.35s",
            }}
          />

          {/* Morphing core with PG monogram */}
          <div
            className="relative z-10 flex h-full w-full items-center justify-center overflow-hidden border border-[var(--line)] bg-gradient-to-br from-[#a5b4fc] via-[#c7d2fe] to-[#dbe4ff] text-[#14152a] dark:from-[#353c6e] dark:via-[#222749] dark:to-[#14162b] dark:text-[#ecebf3] shadow-lg"
            style={{
              animation: "blob-morph 12s ease-in-out infinite",
            }}
          >
            <span className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              PG
            </span>
          </div>
        </div>

        {/* Name and role */}
        <div className="flex flex-col items-center gap-1">
          <h2 className="text-lg font-semibold tracking-[-0.02em] text-[var(--fg)]">
            Prachi Gupta
          </h2>
          <p className="text-sm text-[var(--muted)]">
            Software Engineer
          </p>
        </div>
      </div>

      <style>{`
        @keyframes blob-morph {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          25% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; }
          75% { border-radius: 40% 60% 60% 40% / 60% 40% 60% 40%; }
        }
      `}</style>
    </div>
  );
}
