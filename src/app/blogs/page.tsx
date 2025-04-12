import { Metadata } from "next";
import BlogPage from "../../../components/route/blog-page";

export const metadata: Metadata = {
  title: "وبلاگ",
  description:
    "وبلاگ مجموعه تشریفاتی کاخ ورسای، منبعی برای اطلاع رسانی و ارائه مقالات و مطالب مرتبط با حوزه های مختلف عروسی و مراسم  شما.",
};

const BlogContainer = () => {
  return <BlogPage />;
};

export default BlogContainer;
