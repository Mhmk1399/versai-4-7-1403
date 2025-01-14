"use client";
import { useState, FormEvent, useEffect } from "react";
import { Calendar } from "react-modern-calendar-datepicker";
import Image from "next/image";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { motion } from "framer-motion";

import Banner1 from "../../../public/assets/images/131.webp";
import Banner2 from "../../../public/assets/images/132.webp";
import Banner3 from "../../../public/assets/images/133.webp";
import Banner4 from "../../../public/assets/images/134.webp";
import Banner5 from "../../../public/assets/images/135.webp";
import Banner6 from "../../../public/assets/images/136.webp";
import Banner7 from "../../../public/assets/images/137.webp";
interface FoodItem {
  icon: string;
  name: string;
  videoUrl: string;
  description: JSX.Element;
}

const Page = () => {
  useEffect(() => {
    document.title = "منوی تالار شاتو دو ورسای";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        " ما در ورسای سعی کردیم با ارائه کردن هفت پکیج مختلف از غذا ها و میان وعده های متفاوت حداکثر رضایت شما را به دست بیاوریم"
      );
    }
  }, []);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gustes, setGustes] = useState("");
  const [weddingdate, setWeddingdate] = useState<{
    day: number;
    month: number;
    year: number;
  } | null>(null);
  const [reserveddate, setReserveddate] = useState<{
    day: number;
    month: number;
    year: number;
  } | null>(null);
  const [menue, setMenue] = useState("");
  const [message, setMessage] = useState("");
  const [selectedBanner, setSelectedBanner] = useState("");
  const [selectedFood, setSelectedFood] = useState<FoodItem>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedBanner, setExpandedBanner] = useState<number | null>(null);

  const Banners = [
    { img: Banner1, title: "پکیج VIP", desc: "لوکس‌ترین خدمات" },
    { img: Banner2, title: "پکیج طلایی", desc: "خدمات ویژه" },
    { img: Banner3, title: "پکیج نقره‌ای", desc: "خدمات درجه یک" },
    { img: Banner4, title: "پکیج برنزی", desc: "خدمات استاندارد" },
    { img: Banner5, title: "سرویس مجلل", desc: "پذیرایی خاص" },
    { img: Banner6, title: "سرویس ویژه", desc: "پذیرایی منحصر به فرد" },
    { img: Banner7, title: "سرویس کلاسیک", desc: "پذیرایی اصیل" },
  ];
  const menuDetails = {
    "پکیج VIP": {
      foods: [
        {
          icon: "🍖",
          name: "غذای اصلی",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 flex text-right">
              <li>جوجه کباب بدون استخوان 50%</li>
              <li>کباب لقمه زعفرانی 50%</li>
              <li>برنج سفید 50%</li>
              <li>خورشت فسنجان 30%</li>
              <li>خورشت قیمه نثار 30%</li>
              <li>خورشت قرمه سبزی 30%</li>
              <li>ته چین 100%</li>
              <li>سوپ قارچ و شیر</li>
              <li>سوپ قارچ و جو</li>
              <li>بره شکم پر 1 رأس</li>
              <li>شیر ماهی 1 عدد</li>
              <li>بوقلمون درسته شکم پر 1 رأس</li>
              <li className="text-sm italic">(به ازای هر 100 نفر)</li>
            </ul>
          ),
        },
        {
          icon: "🍗",
          name: "خوراک ها",
          videoUrl: "/videos/vip/joojeh.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>خوراک زبان %20</li>
              <li>چیکن استراگانوف %20</li>
              <li>خوراک دلمه %20</li>
              <li>خوراک ژیگو %20</li>
              <li>بیف استراگانوف %20</li>
            </ul>
          ),
        },
        {
          icon: "🥘",
          name: "سالاد ها",
          videoUrl: "/videos/vip/baghali.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>سالاد سزار %20</li>
              <li>سالاد قفقازی %20</li>
              <li>سالاد فصل %20</li>
              <li>سالاد روس %20</li>
              <li>سالاد کاردینال %20</li>
            </ul>
          ),
        },
        {
          icon: "🍚",
          name: "کنار غذاها",
          videoUrl: "/videos/vip/zereshk.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>زیتون پرورده</li>
              <li>ترشی بندری</li>
              <li>ترشی هفت بیجار</li>
              <li>ترشی مکزیکی</li>
              <li>ترشی لبنانی</li>
            </ul>
          ),
        },
        {
          icon: "🥗",
          name: "انواع دسر",
          videoUrl: "/videos/vip/salad.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>ژله بستنی</li>
              <li>شارلوت</li>
              <li>کرم کارامل</li>
              <li>کیک بستنی</li>
              <li>پلمبیر به صورت تک نفره</li>
            </ul>
          ),
        },
        {
          icon: "🍲",
          name: "نوشیدنی گرم",
          videoUrl: "/videos/vip/soup.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>چای و نسکافه</li>
              <li>نوشیدنی سرد : آب میوه در 5 طعم نا محدود</li>
            </ul>
          ),
        },
        {
          icon: "🍲",
          name: "میان وعده",
          videoUrl: "/videos/vip/soup.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>فینگر فود</li>
              <li>پاچینی</li>
              <li>زاتای گوشت و مرغ</li>
              <li>کراکت مرغ</li>
              <li>اسپرینگ رول</li>
              <li>کراکف سوخاری</li>
              <li>رول مارگاریتا و شیرینی تر و خشک با بهترین کیفیت</li>
              <li>پذیرایی نامحدود</li>
              <li>میوه فصل ، لوکس و دستچین حداقل 5 طعم با بهترین کیفیت</li>
            </ul>
          ),
        },
      ],
    },
    "پکیج طلایی": {
      foods: [
        {
          icon: "🍖",
          name: "غذای اصلی",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>جوجه کباب بدون استخوان 40%</li>
              <li>کباب لقمه زعفرانی 40%</li>
              <li>مرصع چلو %10</li>
              <li>شیرین چلو %10</li>
              <li>زرشک پلو با مرغ %30</li>
              <li>برنج سفید 40%</li>
              <li>خورشت فسنجان 30%</li>
              <li>خورشت قیمه نثار 30%</li>
              <li>ته چین 100%</li>
              <li>سوپ قارچ و شیر</li>
              <li>سوپ قارچ و جو</li>
              <li>بره شکم پر 1 رأس</li>
              <li>شیر ماهی 1 عدد</li>
              <li>بوقلمون درسته شکم پر 1 رأس</li>
              <li className="text-sm italic">(به ازای هر 100 نفر)</li>
            </ul>
          ),
        },
        {
          icon: "🍗",
          name: "خوراک ها",
          videoUrl: "/videos/vip/joojeh.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>خوراک زبان %25</li>
              <li>چیکن استراگانوف %25</li>
              <li>خوراک دلمه %25</li>
              <li>خوراک ژیگو %25</li>
            </ul>
          ),
        },
        {
          icon: "🥘",
          name: "سالاد ها",
          videoUrl: "/videos/vip/baghali.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>سالاد سزار %25</li>
              <li>سالاد قفقازی %25</li>
              <li>سالاد فصل %25</li>
              <li>سالاد روس %25</li>
            </ul>
          ),
        },
        {
          icon: "🥘",
          name: "کنار غذاها",
          videoUrl: "/videos/vip/baghali.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>زیتون پرورده</li>
              <li>ترشی بندری</li>
              <li>ترشی هفت بیجار</li>
              <li>ترشی مکزیکی</li>
            </ul>
          ),
        },
        {
          icon: "🥗",
          name: "انواع دسر",
          videoUrl: "/videos/vip/salad.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>ژله بستنی</li>
              <li>شارلوت</li>
              <li>کرم کارامل</li>
              <li>کیک بستنی</li>
              <li>پلمبیر به صورت تک نفره</li>
            </ul>
          ),
        },
        {
          icon: "🥗",
          name: "نوشیدنی همراه با غذا",
          videoUrl: "/videos/vip/salad.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>انواع نوشابه</li>
              <li>دوغ</li>
              <li>دلستر و آب معدنی</li>
            </ul>
          ),
        },
        {
          icon: "🥗",
          name: "نوشیدنی گرم",
          videoUrl: "/videos/vip/salad.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>چای و نسکافه</li>
            </ul>
          ),
        },
        {
          icon: "🥗",
          name: "نوشیدنی سرد",
          videoUrl: "/videos/vip/salad.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li> آب میوه در 5 طعم نا محدود</li>
            </ul>
          ),
        },
        {
          icon: "🍲",
          name: "میان وعده",
          videoUrl: "/videos/vip/soup.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>فینگر فود</li>
              <li>پاچینی</li>
              <li>زاتای گوشت و مرغ</li>
              <li>کراکت مرغ</li>
              <li>اسپرینگ رول</li>
              <li>کراکف سوخاری</li>
              <li>رول مارگاریتا و شیرینی تر و خشک با بهترین کیفیت</li>
              <li>پذیرایی نامحدود</li>
              <li>میوه فصل ، لوکس و دستچین حداقل 5 طعم با بهترین کیفیت</li>
            </ul>
          ),
        },
      ],
    },
    "پکیج نقره‌ای": {
      foods: [
        {
          icon: "🍖",
          name: "غذای اصلی",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>باقالی پلو با گوشت بره و ماهیچه %50</li>
              <li>جوجه کباب بدون استخوان 30%</li>
              <li>کباب لقمه زعفرانی 30%</li>
              <li>مرصع پلو %10</li>
              <li>شیرین پلو %10</li>
              <li>زرشک پلو با مرغ %30</li>
              <li>برنج سفید 40%</li>
              <li>خورشت فسنجان 30%</li>
              <li>ته چین 100%</li>
              <li>سوپ قارچ و جو</li>
              <li>شیر ماهی 1 عدد</li>
              <li className="text-sm italic">(به ازای هر 100 نفر)</li>
            </ul>
          ),
        },
        {
          icon: "🍗",
          name: "خوراک ها",
          videoUrl: "/videos/vip/joojeh.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>خوراک زبان %30</li>
              <li>چیکن استراگانوف %30</li>
              <li>خوراک دلمه %30</li>
            </ul>
          ),
        },
        {
          icon: "🥘",
          name: "سالاد ها",
          videoUrl: "/videos/vip/baghali.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>سالاد سزار %30</li>
              <li>سالاد قفقازی %30</li>
              <li>سالاد فصل %40</li>
            </ul>
          ),
        },
        {
          icon: "🍚",
          name: "کنار غذاها",
          videoUrl: "/videos/vip/zereshk.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>زیتون پرورده</li>
              <li>ترشی بندری</li>
              <li>ترشی هفت بیجار</li>
            </ul>
          ),
        },
        {
          icon: "🥗",
          name: "انواع دسر",
          videoUrl: "/videos/vip/salad.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>ژله بستنی</li>
              <li>شارلوت</li>
              <li>کرم کارامل</li>
              <li>کیک بستنی</li>
              <li>پلمبیر</li>
            </ul>
          ),
        },
        {
          icon: "🥗",
          name: "نوشیدنی همراه با غذا",
          videoUrl: "/videos/vip/salad.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>انواع نوشابه</li>
              <li>دوغ</li>
              <li>دلستر و آب معدنی</li>
            </ul>
          ),
        },
        {
          icon: "🥗",
          name: "نوشیدنی گرم",
          videoUrl: "/videos/vip/salad.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>چای و نسکافه</li>
            </ul>
          ),
        },
        {
          icon: "🥗",
          name: "نوشیدنی سرد",
          videoUrl: "/videos/vip/salad.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li> آب میوه در 5 طعم نا محدود</li>
            </ul>
          ),
        },
        {
          icon: "🍲",
          name: "میان وعده",
          videoUrl: "/videos/vip/soup.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>فینگر فود</li>
              <li>پاچینی</li>
              <li>زاتای گوشت و مرغ</li>
              <li>کراکت مرغ</li>
              <li>اسپرینگ رول</li>
              <li>کراکف سوخاری</li>
              <li>رول مارگاریتا و شیرینی تر و خشک با بهترین کیفیت</li>
              <li>پذیرایی نامحدود</li>
              <li>میوه فصل ، لوکس و دستچین حداقل 5 طعم با بهترین کیفیت</li>
            </ul>
          ),
        },
      ],
    },
    "پکیج برنزی": {
      foods: [
        {
          icon: "🍖",
          name: "غذای اصلی",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>باقالی پلو با گوشت بره و ماهیچه %50</li>
              <li>جوجه کباب بدون استخوان 40%</li>
              <li>زرشک پلو با مرغ %30</li>
              <li>برنج سفید 20%</li>
              <li>ته چین 100%</li>
            </ul>
          ),
        },
        {
          icon: "🍗",
          name: "خوراک ها",
          videoUrl: "/videos/vip/joojeh.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>چیکن استراگانوف %40</li>
              <li>خوراک دلمه %40</li>
            </ul>
          ),
        },
        {
          icon: "🥘",
          name: "سالاد ها",
          videoUrl: "/videos/vip/baghali.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>سالاد سزار %40</li>
              <li>سالاد فصل %40</li>
            </ul>
          ),
        },
        {
          icon: "🍚",
          name: "کنار غذاها",
          videoUrl: "/videos/vip/zereshk.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>زیتون پرورده</li>
              <li>ترشی بندری</li>
            </ul>
          ),
        },
        {
          icon: "🥗",
          name: "انواع دسر",
          videoUrl: "/videos/vip/salad.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>ژله بستنی</li>
              <li>شارلوت</li>
              <li>کرم کارامل</li>
              <li>کیک بستنی</li>
              <li>پلمبیر</li>
            </ul>
          ),
        },
        {
          icon: "🥗",
          name: "نوشیدنی همراه با غذا",
          videoUrl: "/videos/vip/salad.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>انواع نوشابه</li>
              <li>دوغ</li>
              <li>دلستر و آب معدنی</li>
            </ul>
          ),
        },
        {
          icon: "🥗",
          name: "نوشیدنی گرم",
          videoUrl: "/videos/vip/salad.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>چای و نسکافه</li>
            </ul>
          ),
        },
        {
          icon: "🥗",
          name: "نوشیدنی سرد",
          videoUrl: "/videos/vip/salad.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li> آب میوه در 5 طعم نا محدود</li>
            </ul>
          ),
        },
        {
          icon: "🍲",
          name: "میان وعده",
          videoUrl: "/videos/vip/soup.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>فینگر فود</li>
              <li>پاچینی</li>
              <li>زاتای گوشت و مرغ</li>
              <li>کراکت مرغ</li>
              <li>اسپرینگ رول</li>
              <li>کراکف سوخاری</li>
              <li>رول مارگاریتا و شیرینی تر و خشک با بهترین کیفیت</li>
              <li>پذیرایی نامحدود</li>
              <li>میوه فصل ، لوکس و دستچین حداقل 5 طعم با بهترین کیفیت</li>
            </ul>
          ),
        },
      ],
    },
    "سرویس مجلل": {
      foods: [
        {
          icon: "🍖",
          name: "غذای اصلی",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>باقالی پلو با گوشت بره و ماهیچه %50</li>
              <li>جوجه کباب بدون استخوان 50%</li>
              <li>کباب لقمه زعفرانی 50%</li>
              <li>زرشک پلو با مرغ %50</li>
            </ul>
          ),
        },
        {
          icon: "🍗",
          name: "پیش غذا",
          videoUrl: "/videos/vip/joojeh.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>ته چین مرغ</li>
              <li>سالاد سزار</li>
              <li>سوپ قارچ و شیر</li>
              <li>ماست (بورانی ، خیار ، بادمجان ، موسیر و ... انتخابی)</li>
            </ul>
          ),
        },

        {
          icon: "🥗",
          name: "انواع دسر",
          videoUrl: "/videos/vip/salad.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>ژله بستنی</li>
              <li>شارلوت</li>
              <li>کرم کارامل</li>
              <li>کیک بستنی</li>
              <li>پلمبیر</li>
            </ul>
          ),
        },
        {
          icon: "🥗",
          name: "نوشیدنی همراه با غذا",
          videoUrl: "/videos/vip/salad.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>انواع نوشابه</li>
              <li>دوغ</li>
              <li>دلستر و آب معدنی</li>
            </ul>
          ),
        },
        {
          icon: "🥗",
          name: "نوشیدنی گرم",
          videoUrl: "/videos/vip/salad.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>چای و نسکافه</li>
            </ul>
          ),
        },
        {
          icon: "🥗",
          name: "نوشیدنی سرد",
          videoUrl: "/videos/vip/salad.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li> آب میوه در 5 طعم نا محدود</li>
            </ul>
          ),
        },
        {
          icon: "🍲",
          name: "میان وعده",
          videoUrl: "/videos/vip/soup.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>فینگر فود</li>
              <li>پاچینی</li>
              <li>زاتای گوشت و مرغ</li>
              <li>کراکت مرغ</li>
              <li>اسپرینگ رول</li>
              <li>کراکف سوخاری</li>
              <li>رول مارگاریتا و شیرینی تر و خشک با بهترین کیفیت</li>
              <li>پذیرایی نامحدود</li>
              <li>میوه فصل ، لوکس و دستچین حداقل 5 طعم با بهترین کیفیت</li>
            </ul>
          ),
        },
      ],
    },
    "سرویس ویژه": {
      foods: [
        {
          icon: "🍖",
          name: "غذای اصلی",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>باقالی پلو با گوشت بره و ماهیچه %50</li>
              <li>جوجه کباب بدون استخوان 50%</li>
              <li>کباب لقمه زعفرانی</li>
            </ul>
          ),
        },
        {
          icon: "🍗",
          name: "پیش غذا",
          videoUrl: "/videos/vip/joojeh.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>سالاد سزار</li>
            </ul>
          ),
        },

        {
          icon: "🥗",
          name: "انواع دسر",
          videoUrl: "/videos/vip/salad.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>ژله بستنی</li>
              <li>شارلوت</li>
              <li>کرم کارامل</li>
              <li>کیک بستنی</li>
              <li>پلمبیر</li>
            </ul>
          ),
        },
        {
          icon: "🥗",
          name: "نوشیدنی همراه با غذا",
          videoUrl: "/videos/vip/salad.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>انواع نوشابه</li>
              <li>دلستر و آب معدنی</li>
            </ul>
          ),
        },
        {
          icon: "🥗",
          name: "نوشیدنی گرم",
          videoUrl: "/videos/vip/salad.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>چای و نسکافه</li>
            </ul>
          ),
        },
        {
          icon: "🥗",
          name: "نوشیدنی سرد",
          videoUrl: "/videos/vip/salad.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li> آب میوه در 5 طعم نا محدود</li>
            </ul>
          ),
        },
        {
          icon: "🍲",
          name: "میان وعده",
          videoUrl: "/videos/vip/soup.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>فینگر فود</li>
              <li>پاچینی</li>
              <li>زاتای گوشت و مرغ</li>
              <li>کراکت مرغ</li>
              <li>اسپرینگ رول</li>
              <li>کراکف سوخاری</li>
              <li>رول مارگاریتا و شیرینی تر و خشک با بهترین کیفیت</li>
              <li>پذیرایی نامحدود</li>
              <li>میوه فصل ، لوکس و دستچین حداقل 5 طعم با بهترین کیفیت</li>
            </ul>
          ),
        },
      ],
    },
    "سرویس کلاسیک": {
      foods: [
        {
          icon: "🍖",
          name: "غذای اصلی",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>باقالی پلو با گوشت بره و ماهیچه %50</li>
              <li>جوجه کباب بدون استخوان 50%</li>
            </ul>
          ),
        },
        {
          icon: "🍗",
          name: "پیش غذا",
          videoUrl: "/videos/vip/joojeh.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>سالاد سزار</li>
            </ul>
          ),
        },

        {
          icon: "🥗",
          name: "انواع دسر",
          videoUrl: "/videos/vip/salad.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>ژله بستنی</li>
              <li>شارلوت</li>
              <li>کرم کارامل</li>
              <li>کیک بستنی</li>
              <li>پلمبیر</li>
            </ul>
          ),
        },
        {
          icon: "🥗",
          name: "نوشیدنی همراه با غذا",
          videoUrl: "/videos/vip/salad.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>انواع نوشابه</li>
              <li>دلستر و آب معدنی</li>
            </ul>
          ),
        },
        {
          icon: "🥗",
          name: "نوشیدنی گرم",
          videoUrl: "/videos/vip/salad.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>چای و نسکافه</li>
            </ul>
          ),
        },
        {
          icon: "🥗",
          name: "نوشیدنی سرد",
          videoUrl: "/videos/vip/salad.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li> آب میوه در 5 طعم نا محدود</li>
            </ul>
          ),
        },
        {
          icon: "🍲",
          name: "میان وعده",
          videoUrl: "/videos/vip/soup.mp4",
          description: (
            <ul className="  space-y-2 text-right">
              <li>فینگر فود</li>
              <li>پاچینی</li>
              <li>زاتای گوشت و مرغ</li>
              <li>کراکت مرغ</li>
              <li>اسپرینگ رول</li>
              <li>کراکف سوخاری</li>
              <li>رول مارگاریتا و شیرینی تر و خشک با بهترین کیفیت</li>
              <li>پذیرایی نامحدود</li>
              <li>میوه فصل ، لوکس و دستچین حداقل 5 طعم با بهترین کیفیت</li>
            </ul>
          ),
        },
      ],
    },
  };

  const handleNameChange = (event: FormEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };
  const handlePhoneNumberChange = (event: FormEvent<HTMLInputElement>) => {
    setPhoneNumber(event.currentTarget.value);
  };
  const handleGustesChange = (event: FormEvent<HTMLInputElement>) => {
    setGustes(event.currentTarget.value);
  };
  const handleWeddingdateChange = (
    selectedDay: { day: number; month: number; year: number } | null
  ) => {
    setWeddingdate(selectedDay);
  };
  const handleReserveddateChange = (
    selectedDay: { day: number; month: number; year: number } | null
  ) => {
    setReserveddate(selectedDay);
  };
  const handleMenueChange = (event: FormEvent<HTMLSelectElement>) => {
    setMenue(event.currentTarget.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !name ||
      !phoneNumber ||
      !gustes ||
      !weddingdate ||
      !reserveddate ||
      !menue
    ) {
      setMessage("Please fill in all fields");
      return;
    }

    const weddingDateObject = new Date(
      weddingdate!.year,
      weddingdate!.month - 1,
      weddingdate!.day
    );
    const reservedDateObject = new Date(
      reserveddate!.year,
      reserveddate!.month - 1,
      reserveddate!.day
    );

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phoneNumber", phoneNumber);
    formData.append("gustes", gustes);
    formData.append("weddingDate", weddingDateObject.toISOString());
    formData.append("reservedDate", reservedDateObject.toISOString());
    formData.append("menue", menue);

    try {
      const response = await fetch("/api/forms", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        setMessage("مشکلی پیش آمده لطفا دوباره تلاش کنید");
      } else {
        setMessage(
          "اطلاعات شما با موفقیت ثبت شد همکاران ما در اسرع وقت با شما تماس حاصل میکنند "
        );
      }
    } catch (error) {
      setMessage("Error submitting form");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white p-8">
      <div className=" rounded-lg  p-4 flex justify-around items-center flex-wrap gap-4 mx-auto mb-4 text-center text-green">
        <h1 className="text-2xl font-bold  text-green text-center mx-auto ">
          منوی غذا ها و خدمات شاتو دو ورسای
        </h1>
        <p>
          ما در ورسای سعی کردیم با ارائه کردن هفت پکیج مختلف از غذا ها و میان
          وعده های متفاوت حداکثر رضایت شما را به دست بیاوریم تمام منو ها قابل
          تغییر می باشند لطفا برای دریافت قیمت ها و اطلاع از خدمات دیگر با تکمیل
          فرم زیر اقدام فرمایید
        </p>
      </div>

      {/* Banners Element */}

      <div className="w-full max-w-7xl mx-auto mb-12" dir="rtl">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
          {Banners.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div
                className="group relative overflow-hidden lg:h-[300px] h-[150px] rounded-xl shadow-2xl transition-all duration-500 hover:scale-[0.98] cursor-pointer"
                onClick={() =>
                  setExpandedBanner(expandedBanner === index ? null : index)
                }
              >
                <div className="aspect-[16/9] w-full">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div
                  className="absolute bottom-0 p-4 w-full text-white"
                  dir="rtl"
                >
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.desc}</p>
                </div>
              </div>

              {/* Expandable Content */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: expandedBanner === index ? "auto" : 0,
                  opacity: expandedBanner === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden bg-white/10 backdrop-blur-md rounded-b-xl mt-2"
              >
                <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Food Icons Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {menuDetails[
                      item.title as keyof typeof menuDetails
                    ]?.foods.map((food, foodIndex) => (
                      <motion.button
                        key={foodIndex}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedFood(food as FoodItem)}
                        className={`p-1 rounded-lg flex flex-col items-center justify-center gap-2 ${
                          selectedFood === food
                            ? "bg-purple-100 border-2 border-purple-500"
                            : "bg-gray-50"
                        }`}
                      >
                        <span className="text-4xl">{food.icon}</span>
                        <span className="text-base font-medium text-gray-700">
                          {food.name}
                        </span>
                      </motion.button>
                    ))}
                  </div>

                  {/* Video Player */}
                  <div className="relative bg-black/50 rounded-lg overflow-hidden min-h-[300px]">
                    {selectedFood ? (
                      <div className="relative w-full h-full">
                        <video
                          key={selectedFood.videoUrl}
                          className="w-full mx-auto h-full lg:w-full lg:h-full object-cover"
                          controls
                          autoPlay
                          muted
                        >
                          <source
                            src={selectedFood.videoUrl}
                            type="video/mp4"
                          />
                        </video>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute inset-0 bg-black/60 flex items-center justify-center p-6"
                        >
                          <div className="text-center items-center">
                            <h3 className="text-2xl font-bold text-white mb-4">
                              {selectedFood.name}
                            </h3>
                            <p className="text-xs text-white/90">
                              {selectedFood.description}
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-full text-white">
                        یک غذا را برای مشاهده ویدیو انتخاب کنید
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}{" "}
        </div>
      </div>
      {/* Modal Component */}

      {/* Shrinkable Container for Menu Photos */}
      {/* <div className="w-full max-w-4xl mb-8">
        <div className="bg-white/10 rounded-lg p-4 flex justify-around items-center flex-wrap gap-4">
          <div
            className="rounded-lg shadow-md transition duration-200 hover:scale-105 cursor-pointer flex flex-col justify-center"
            style={{
              backgroundImage: `url(${vip.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "300px",
              height: "300px",
            }}
            onClick={() => handleImageClick("/vip-self")}
          >
            <div className="text-4xl text-center text-violet-800 bg-transparent w-fit mx-auto rounded-full px-2 py-1 bg-opacity-85 ">
              vip سلف
            </div>
          </div>
          <div
            className="rounded-lg shadow-md transition duration-200 hover:scale-105 cursor-pointer flex flex-col justify-center relative overflow-hidden"
            style={{
              width: "300px",
              height: "300px",
            }}
            onClick={() => handleImageClick("/gold-self")}
          >
            <video
              autoPlay
              loop
              muted
              className="absolute inset-0 w-full h-full object-cover"
              src="/assets/images/menu/gold-self-ezgif.com-video-to-gif-converter.gif.mp4"
            />
            {/* <div className="text-4xl text-center text-yellow-600 bg-transparent w-fit mx-auto rounded-full px-2 py-1 bg-opacity-85 relative z-10">
              سلف طلایی
            </div> */}

      <div className=" py-4 px-12 flex justify-around items-center flex-wrap shadow-gold/50 gap-4 mx-auto mb-8 text-center text-green">
        <h1 className="text-2xl font-bold text-green text-center mx-auto ">
          your satisfaction guaranteed
        </h1>
      </div>

      <div className="w-auto sm:w-full max-w-3xl bg-white/50 rounded-lg shadow-lg px-8 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 text-center my-6">
          درخواست قیمت و رزرو زمان بازدید
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6 ">
          {/* Name */}
          <div className="mt-8">
            <label className="block text-xl font-bold text-black mb-4">
              نام و نام خانوادگی
            </label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              className="mt-1 block w-full rounded-md shadow-lg focus:outline-none focus:border-b-2 border-green sm:text-sm py-3 text-end px-2"
              placeholder="نام خود را وارد کنید"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-xl font-bold text-black mb-4">
              شماره تماس
            </label>
            <input
              type="text"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              className="mt-1 block w-full rounded-md shadow-lg focus:outline-none focus:border-b-2 border-green sm:text-sm py-3 text-end px-2"
              placeholder="شماره تماس خود را وارد کنید"
            />
          </div>

          {/* Guests */}
          <div>
            <label className="block text-xl font-bold text-black mb-4">
              تعداد مهمان‌ها
            </label>
            <input
              type="number"
              value={gustes}
              onChange={handleGustesChange}
              className="mt-1 block w-full rounded-md shadow-lg focus:outline-none focus:border-b-2 border-green sm:text-sm py-3 text-end px-2"
              placeholder="تعداد مهمان‌ها را وارد کنید"
            />
          </div>

          {/* Wedding Date */}
          <div className="flex flex-col justify-center items-center">
            <label className="block text-xl font-bold text-black mb-4">
              تاریخ عروسی
            </label>
            <Calendar
              value={weddingdate}
              onChange={handleWeddingdateChange}
              shouldHighlightWeekends
              locale="fa"
              calendarClassName="custom-calendar w-full"
              colorPrimary="#9c27b0"
              colorPrimaryLight="#f3e5f5"
            />
          </div>

          {/* Reserved Date */}
          <div className="flex flex-col justify-center items-center">
            <label className="block text-xl font-bold text-black mb-4">
              تاریخ رزرو بازدید
            </label>
            <Calendar
              value={reserveddate}
              onChange={handleReserveddateChange}
              shouldHighlightWeekends
              locale="fa"
              calendarClassName="custom-calendar w-full"
              colorPrimary="#673ab7"
              colorPrimaryLight="#ede7f6"
            />
          </div>

          {/* Menu Selection */}
          <div dir="rtl">
            <label className="block text-xl font-bold text-black mb-4">
              منو
            </label>
            <select
              value={menue}
              onChange={handleMenueChange}
              className="mt-1 block w-full rounded-md border-black shadow-lg focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 text-end px-2"
            >
              <option value="" disabled className="text-right">
                انتخاب منو
              </option>
              <option value="دیس پرس سیلور" className="text-right">
                دیس پرس سیلور
              </option>
              <option value="دیس پرس گلد" className="text-right">
                دیس پرس گلد
              </option>
              <option value="دیس پرس VIP" className="text-right">
                دیس پرس VIP
              </option>
              <option value="سلف سیلور" className="text-right">
                سلف سیلور
              </option>
              <option value="سلف گلد" className="text-right">
                سلف گلد
              </option>
              <option value="سلف VIP" className="text-right">
                سلف VIP
              </option>
            </select>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-[#344e41] mb-3 text-white py-3 rounded-md text-lg font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              ارسال فرم
            </button>
          </div>

          {/* Message */}
          {message && (
            <p className="text-center mt-4 text-sm font-medium text-green pb-3">
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Page;
