import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

export async function renderProfileOgImage() {
  const alluraData = await readFile(
    join(process.cwd(), "src/app/og-fonts/Allura-Regular.ttf")
  );
  const poppinsData = await readFile(
    join(process.cwd(), "src/app/og-fonts/Poppins-Medium.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000000",
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "Allura",
            fontSize: 150,
            color: "#f3f2ee",
          }}
        >
          Jauvis Dozier
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "Poppins",
            marginTop: 16,
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#9b9aa1",
          }}
        >
          Undergraduate UX Designer
        </div>
      </div>
    ),
    {
      ...ogImageSize,
      fonts: [
        {
          name: "Allura",
          data: alluraData,
          style: "normal",
          weight: 400,
        },
        {
          name: "Poppins",
          data: poppinsData,
          style: "normal",
          weight: 500,
        },
      ],
    }
  );
}
