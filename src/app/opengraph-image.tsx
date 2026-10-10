import { ImageResponse } from "next/og";

export const alt = "Alishbah K. — Engineering, Creative, About, Resume";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#221A15", padding: 48 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            background: "#FAF8F3",
            color: "#221A15",
          }}
        >
          <div style={{ fontSize: 120, fontFamily: "serif" }}>Alishbah K.</div>
          <div style={{ display: "flex", marginTop: 48, fontSize: 34, gap: 40 }}>
            <span style={{ color: "#6E1F24" }}>Engineering</span>
            <span style={{ width: 2, background: "#221A15" }} />
            <span>Creative</span>
          </div>
        </div>
      </div>
    ),
    size
  );
}
