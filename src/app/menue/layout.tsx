import { MenuMeta } from "../../../lib/metadata";

export const metadata = MenuMeta;

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
