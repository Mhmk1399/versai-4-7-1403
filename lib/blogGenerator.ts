interface BlogSchemaProps {
  title: string;
  url: string;
  images: string[];
  sections: {
    heading: string;
    content: string;
    images?: string[];
    lists?: string[];
  }[];
}

export function generateBlogSchema(blogData: BlogSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://versay.ir${blogData.url}`,
    },
    headline: blogData.title,
    image: blogData.images,
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    author: {
      "@type": "Organization",
      name: "Versay Garden Hall",
      url: "https://versay.ir",
    },
    publisher: {
      "@type": "Organization",
      name: "Versay Garden Hall",
      logo: {
        "@type": "ImageObject",
        url: "https://versay.ir/logo.png",
      },
    },
    articleBody: blogData.sections.map((section) => section.content).join(" "),
  };
}

