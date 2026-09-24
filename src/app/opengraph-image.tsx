import { ogImageContentType, ogImageSize, renderProfileOgImage } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function Image() {
  return renderProfileOgImage();
}
