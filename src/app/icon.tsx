import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#082c3a",
          border: "2px solid #123f4d",
          borderRadius: "18px",
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
            height: "30px",
            width: "6px",
          }}
        />
        <div
          style={{
            background: "#f4f1e9",
            display: "flex",
            height: "6px",
            width: "19px",
          }}
        />
        <div
          style={{
            background: "#f4f1e9",
            display: "flex",
            height: "30px",
            width: "6px",
          }}
        />
        <div
          style={{
            background: "#e87732",
            borderRadius: "50%",
            bottom: "8px",
            display: "flex",
            height: "7px",
            position: "absolute",
            right: "8px",
            width: "7px",
          }}
        />
      </div>
    ),
    size,
  );
}
