import { ImageResponse } from "next/og";

// Social preview card shown when the portfolio link is shared (LinkedIn, Slack, X, etc.).
export const alt = "Prachi Gupta — Frontend & React Native Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const TAGS = ["React", "React Native", "TypeScript", "Next.js", "AI features"];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(circle at 85% 15%, rgba(154,168,255,0.35) 0%, rgba(12,13,20,0) 55%), #0c0d14",
          color: "#ecebf3",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#8d8fa3" }}>
          Portfolio
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 104,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            Prachi Gupta
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 40,
              color: "#9aa8ff",
            }}
          >
            Frontend & React Native Engineer
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 16,
              fontSize: 28,
              color: "#8d8fa3",
            }}
          >
            2+ years · 3 client apps shipped · Web, iOS & Android
          </div>
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {TAGS.map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                padding: "8px 22px",
                borderRadius: 999,
                fontSize: 24,
                color: "#9aa8ff",
                background: "rgba(154,168,255,0.14)",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
