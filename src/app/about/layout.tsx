import { AboutMeta } from "../../../lib/metadata";

export const metadata = AboutMeta;

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
