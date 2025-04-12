"use client";
import logo from "../../public/logo.webp";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import styles from "./loading.module.css";
import { useEffect, useState } from "react";

export default function Loading() {
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    // Set mounted state to true when component mounts
    setMounted(true);

    // Cleanup function that runs when component unmounts
    return () => {
      setMounted(false);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full h-full absolute inset-0 flex flex-col items-center justify-center bg-white z-50">
      <div className={styles.logoWrapper}>
        <Image
          src={logo}
          alt="Versai Logo"
          width={120}
          height={120}
          className={styles.logo}
        />
        <div className={styles.glowRing}></div>
      </div>
      <div className="mt-8 text-2xl font-light text-green" dir="rtl">
        {mounted && (
          <TypeAnimation
            sequence={[
              "شاتو دو ورسای",
              1000,
              "رویای یک شب فرانسوی در تهران",
              1000,
              "شاتو دو ورسای",
              1000,
              "رویای یک شب فرانسوی در تهران",
              1000,
            ]}
            repeat={Infinity}
            speed={40}
          />
        )}
      </div>
    </div>
  );
}
