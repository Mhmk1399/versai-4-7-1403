import { BlogMeta } from "../../../lib/metadata";

export const metadata = BlogMeta;

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
