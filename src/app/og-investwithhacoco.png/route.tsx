import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f4f1e9",
          color: "#20231f",
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
                color: "#173f35",
                fontSize: "26px",
                letterSpacing: "10px",
                textTransform: "uppercase",
              }}
            >
              Private Real Estate &amp; Investment
            </div>
            <div style={{ fontSize: "78px", lineHeight: 0.94, maxWidth: "860px" }}>
              Property worth owning.
            </div>
          </div>
          <div
            style={{
              alignItems: "center",
              border: "2px solid #173f35",
              color: "#173f35",
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
            color: "#65685f",
            display: "flex",
            fontSize: "28px",
            gap: "28px",
            paddingTop: "28px",
          }}
        >
          <span>South Delhi</span>
          <span>NCR</span>
          <span>Dubai</span>
          <span>Goa</span>
          <span>Land</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
