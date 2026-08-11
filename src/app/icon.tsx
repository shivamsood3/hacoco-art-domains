import { ImageResponse } from "next/og";
import { headers } from "next/headers";

import { getSiteConfigFromHeaders } from "@/lib/hostname";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default async function Icon() {
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);
  const identity = getIconIdentity(site.slug);

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: identity.background,
          border: `2px solid ${identity.border}`,
          borderRadius: site.slug === "capital" ? "8px" : "18px",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          position: "relative",
          width: "100%",
        }}
      >
        <div style={{ color: identity.foreground, display: "flex", fontSize: "22px", fontWeight: 750, letterSpacing: "-1px" }}>
          {identity.letters}
        </div>
        <div
          style={{
            background: identity.accent,
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

function getIconIdentity(slug: "capital" | "investor" | "advisory") {
  if (slug === "capital") {
    return {
      accent: "#aa7a43",
      background: "#1d1a17",
      border: "#3b342c",
      foreground: "#f7f1e7",
      letters: "HC",
    };
  }

  if (slug === "investor") {
    return {
      accent: "#b78a55",
      background: "#f4f1e9",
      border: "#d8d0c2",
      foreground: "#20231f",
      letters: "IH",
    };
  }

  return {
    accent: "#e87732",
    background: "#082c3a",
    border: "#123f4d",
    foreground: "#f4f1e9",
    letters: "HA",
  };
}
