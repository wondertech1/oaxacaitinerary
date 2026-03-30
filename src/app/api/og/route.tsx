import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const title = searchParams.get("title") || "Oaxaca Itinerary";
  const subtitle = searchParams.get("subtitle") || "Local-feeling guides to Oaxaca City";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          backgroundColor: "#3B3228",
          padding: "0",
        }}
      >
        {/* Top accent bar */}
        <div style={{ display: "flex", width: "100%", height: "6px" }}>
          <div style={{ flex: 1, backgroundColor: "#A0522D" }} />
          <div style={{ flex: 1, backgroundColor: "#2C3E6B" }} />
          <div style={{ flex: 1, backgroundColor: "#5B7C52" }} />
          <div style={{ flex: 1, backgroundColor: "#C9944A" }} />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            padding: "60px 80px",
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
            <span
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "#F5F0E6",
                letterSpacing: "-0.02em",
              }}
            >
              OAXACA
            </span>
            <span
              style={{
                fontSize: "12px",
                color: "#A0522D",
                textTransform: "uppercase",
                letterSpacing: "0.25em",
              }}
            >
              itinerary
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: "56px",
              fontWeight: 700,
              color: "#F5F0E6",
              lineHeight: 1.1,
              marginTop: "32px",
              maxWidth: "900px",
            }}
          >
            {title}
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "22px",
              color: "#F5F0E6",
              opacity: 0.5,
              marginTop: "16px",
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px 80px",
            borderTop: "1px solid rgba(245,240,230,0.1)",
          }}
        >
          <span style={{ fontSize: "14px", color: "#F5F0E6", opacity: 0.3 }}>
            oaxacaitinerary.com
          </span>
          <span style={{ fontSize: "14px", color: "#F5F0E6", opacity: 0.3 }}>
            2026 Guide
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
