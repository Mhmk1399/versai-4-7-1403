import { GetStaticProps } from "next";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { sectionsData, optionsData } from "../../lib/data";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

interface ImageData {
  type: "bad" | "normal" | "good";
  url: string;
  category: string;
}

interface PageProps {
  category: string;
}

const Page = ({ category }: PageProps) => {
  const handleButtonClick = () => {
    window.location.href = "/galery";
  };

  const [image, setImage] = useState<ImageData[]>([]);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch("/api/uploadedFiles");
        const data = await response.json();
        setImage(data as ImageData[]);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    }

    fetchImages();
  }, [category]);

  return (
    <div>
      {/* Your component JSX */}
    </div>
  );
};

// Define getStaticProps to generate the page at build time
export const getStaticProps: GetStaticProps = async () => {
  const category = "defaultCategory"; // Replace this with actual logic or fetch data if needed

  return {
    props: {
      category,
    },
    // Optional: Revalidate every hour to keep data updated
    revalidate: 3600, // Rebuild page every hour (in seconds) for any updated content
  };
};

export default Page;
