import { ImageResponse } from "next/og";
import { headers } from "next/headers";

import { getSiteConfigFromHeaders } from "@/lib/hostname";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default async function AppleIcon() {
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);
  const identity = getAppleIconIdentity(site.slug);

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: identity.background,
          border: `5px solid ${identity.border}`,
          borderRadius: site.slug === "capital" ? "24px" : "44px",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          position: "relative",
          width: "100%",
        }}
      >
        <div style={{ color: identity.foreground, display: "flex", fontSize: "62px", fontWeight: 750, letterSpacing: "-3px" }}>
          {identity.letters}
        </div>
        <div
          style={{
            background: identity.accent,
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

function getAppleIconIdentity(slug: "capital" | "investor" | "advisory") {
  if (slug === "capital") {
    return { accent: "#aa7a43", background: "#1d1a17", border: "#3b342c", foreground: "#f7f1e7", letters: "HC" };
  }

  if (slug === "investor") {
    return { accent: "#b78a55", background: "#f4f1e9", border: "#d8d0c2", foreground: "#20231f", letters: "IH" };
  }

  return { accent: "#e87732", background: "#082c3a", border: "#123f4d", foreground: "#f4f1e9", letters: "HA" };
}
