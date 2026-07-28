import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f7f4ee",
          color: "#261f19",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "70px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div
              style={{
                color: "#9c8f80",
                fontSize: "26px",
                letterSpacing: "10px",
                textTransform: "uppercase",
              }}
            >
              Invest With Hacoco
            </div>
            <div style={{ fontSize: "78px", lineHeight: 0.94, maxWidth: "860px" }}>
              Real estate, land and global diversification.
            </div>
          </div>
          <div
            style={{
              alignItems: "center",
              background: "#261f19",
              borderRadius: "34px",
              color: "#f7f4ee",
              display: "flex",
              fontSize: "30px",
              fontWeight: 700,
              height: "104px",
              justifyContent: "center",
              width: "104px",
            }}
          >
            HC
          </div>
        </div>

        <div
          style={{
            borderTop: "2px solid #ded6ca",
            color: "#5f554b",
            display: "flex",
            fontSize: "28px",
            gap: "28px",
            paddingTop: "28px",
          }}
        >
          <span>South Delhi</span>
          <span>Off plan</span>
          <span>Dubai/UAE</span>
          <span>Goa</span>
          <span>North India land</span>
          <span>France vineyards</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
