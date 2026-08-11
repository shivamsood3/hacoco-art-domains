import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f5efe4",
          color: "#1d1a17",
          display: "flex",
          height: "100%",
          padding: "66px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div
              style={{
                color: "#9a6b39",
                fontSize: "22px",
                fontWeight: 700,
                letterSpacing: "8px",
                textTransform: "uppercase",
              }}
            >
              Private Real Estate Transactions
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "82px",
                letterSpacing: "-4px",
                lineHeight: 0.94,
                maxWidth: "760px",
              }}
            >
              Capital and transactions, handled privately.
            </div>
          </div>

          <div
            style={{
              borderTop: "2px solid #d9cfbf",
              color: "#6f685e",
              display: "flex",
              fontSize: "24px",
              gap: "26px",
              paddingTop: "24px",
            }}
          >
            <span>Acquisitions</span>
            <span>Income Assets</span>
            <span>Land</span>
            <span>Dispositions</span>
          </div>
        </div>

        <div
          style={{
            alignItems: "center",
            background: "#1d1a17",
            color: "#f7f1e7",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginLeft: "54px",
            padding: "36px",
            width: "250px",
          }}
        >
          <div style={{ fontSize: "46px", fontWeight: 700 }}>HC</div>
          <div
            style={{
              color: "#c8ad88",
              display: "flex",
              fontSize: "18px",
              letterSpacing: "5px",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            Hacoco Capital
          </div>
        </div>
      </div>
    ),
    {
      height: 630,
      width: 1200,
    },
  );
}
