import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#082c3a",
          border: "5px solid #123f4d",
          borderRadius: "44px",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#f4f1e9",
            display: "flex",
            height: "84px",
            width: "16px",
          }}
        />
        <div
          style={{
            background: "#f4f1e9",
            display: "flex",
            height: "16px",
            width: "54px",
          }}
        />
        <div
          style={{
            background: "#f4f1e9",
            display: "flex",
            height: "84px",
            width: "16px",
          }}
        />
        <div
          style={{
            background: "#e87732",
            borderRadius: "50%",
            bottom: "24px",
            display: "flex",
            height: "20px",
            position: "absolute",
            right: "24px",
            width: "20px",
          }}
        />
      </div>
    ),
    size,
  );
}
