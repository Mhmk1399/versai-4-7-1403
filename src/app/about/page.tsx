"use client";
import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Page = () => {
  useEffect(() => {
    document.title = "درباره ما";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "باغ تالار ورسای در جنوب غرب تهران یکی از لوکس‌ترین و مجلل‌ترین باغ تالارهای تهران به شمار می آید."
      );
    }
  }, []);

  return (
    <div>
      <section className="py-10 bg-[#e8e8e5]" id="aboutus">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-3xl font-bold text-[#c8a876] text-center mx-auto mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Your Satisfaction Guarantee
          </motion.h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              className="order-last flex flex-col justify-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-black p-2 text-center mx-auto mb-8">
                همه چیز در باره ی مجموعه تشریفاتی کاخ ورسای
              </h2>

              <p
                className="text-black text-lg text-center mb-4 p-2 mx-auto w-full md:w-3/4 align-middle"
                dir="rtl"
              >
                باغ تالار ورسای در جنوب غرب تهران یکی از لوکس‌ترین و مجلل‌ترین
                باغ تالارهای تهران به شمار می آید. مجموعه تشریفاتی کاخ ورسای با
                مساحت بیش از پنجاه هزار مترمربع، به‌عنوان الگویی از ضیافت‌های
                کاخ ورسای فرانسه، با رویکردی منحصر به فرد در برگزاری مهمانی‌ها و
                ارائه خدمات، در فاصله بیست دقیقه‌ای از غرب تهران آماده
                خدمت‌رسانی و برکذاری مراسم ها و ضیافت های رویایی شما میباشد.
                <br />
                <br />
                <br />
                در عمارتشاتو دو ورسای، سرو انواع نوشیدنی‌ها، میوه‌ها، شیرینی‌ها
                و دیگر خوراکی‌ها به‌صورت نامحدود و به‌شیوه all you can eat ارائه
                می‌شود. باغ تالار کاخ ورسای با دو سالن بزرگ، هر کدام به مساحت
                هزار و نهصد متر مربع و ارتفاع سقف هفت متر، بدون ستون، و فضای
                وسیع اختصاصی برای چیدمان میزها، خدماتی با کیفیت عالی و مطابق با
                استانداردهای جهانی ارائه می‌دهد.
                <br />
                <br />
                <br />
                پذیرایی در کاخ ورسای احمدآباد مستوفی با استفاده از بهترین مواد
                تازه، شامل غذاهای ایرانی و فرنگی، کباب‌ها، نوشیدنی‌ها و تزئینات
                غذا انجام می‌شود. تیم مجرب و حرفه‌ای آشپزی و مهمانداری این
                مجموعه به‌خوبی قادر به تأمین رضایت مهمانان هستند.
                <br />
                <br />
                <br />
                مجموعه تشریفاتی کاخ ورسای امکان برگزاری آیین عقد در دو مکان
                متفاوت را فراهم می‌آورد: لابی با طراحی کلیسایی و فضای باز با
                طراحی زیبای محوطه. همچنین، برای پذیرایی در فضای باز، تشریفات
                آتش‌بازی و سایر امکانات نیز موجود است. پارکینگ بزرگ با ظرفیت
                ششصد خودرو، اتاق بازی کودکان، سفره‌خانه سنتی و کافه‌تریا از دیگر
                ویژگی‌های برجسته این مجموعه است. که میتوانید در مورد تمام این
                بخش ها در صفحه اصلی وبسایت ما بیشتر مطالعه کنید و تصاوری مربوط
                به ارائه یاین خدمات را مشاهده کنید
              </p>
              <Link
                href="tel:+989123314145"
                className="inline-block px-6 py-3 bg-[#c8a876] text-white font-bold rounded-full hover:bg-[#c09858] transition duration-200 text-center mx-auto"
              >
                برای دیافت انتقادات و پیشتهادات در خدمت شما هستیم
              </Link>
            </motion.div>
            <motion.div
              className="flex justify-center items-center order-first md:order-first"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                alt="Exterior-view-of-the-garden-of-the-luxury-hall-of-Chateau-de-Versailles"
                src="/assets/images/aboutpage.jpg"
                width={4000}
                height={4000}
                className="rounded-lg shadow-lg lg:h-2/3"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
