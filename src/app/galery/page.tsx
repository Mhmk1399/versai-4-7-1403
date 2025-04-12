import { Metadata } from "next";
import Gallery from "../../../components/route/gallery-page";

export const metadata: Metadata = {
  title: "گالری تصاویر",
  description:
    "شما در این دو سالن به ظرفیت 1200 نفر میتوانید تمام دیزاین های روز دنیا را پیاده سازی کنید",
};

const GalleryContainer = () => {
  // Group images by category

  return (
    <>
      <div>
        <Gallery />
      </div>
    </>
  );
};

export default GalleryContainer;
