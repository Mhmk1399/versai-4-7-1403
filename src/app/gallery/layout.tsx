import { GalleryMeta } from "../../../lib/metadata";

export const metadata = GalleryMeta;

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
