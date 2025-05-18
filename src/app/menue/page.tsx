"use client";
import { useState, FormEvent } from "react";
// import { Calendar } from "react-modern-calendar-datepicker";
import Image from "next/image";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { motion } from "framer-motion";
import { BlogSchema } from "../../../components/schema/blogSchema";
import Banner1 from "../../../public/assets/images/131.webp";
import Banner2 from "../../../public/assets/images/132.webp";
import Banner3 from "../../../public/assets/images/133.webp";
import Banner4 from "../../../public/assets/images/134.webp";
import Banner5 from "../../../public/assets/images/135.webp";
import Banner6 from "../../../public/assets/images/136.webp";
import Banner7 from "../../../public/assets/images/137.webp";
import Food from "../../../public/food.svg";
import Dessert from "../../../public/dessert.svg";
import Pish from "../../../public/pishGhaza.svg";
import Khorak from "../../../public/khorak.svg";
import Salad from "../../../public/salad.svg";
import SideDish from "../../../public/sideDish.svg";
import Drink from "../../../public/drink.svg";
import WarmDrink from "../../../public/warmDrink.svg";
import Snack from "../../../public/snack.svg";
import ColdDrink from "../../../public/coldDrink.svg";

interface FoodItem {
  icon: string;
  name: string;
  videoUrl: string;
  description: JSX.Element;
}

const Page = () => {
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
  const [selectedFood, setSelectedFood] = useState<FoodItem>();
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
          icon: Food,
          name: "غذای اصلی",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li className="mt-2">جوجه کباب بدون استخوان 50%</li>
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
              <li className="text-xs italic">(به ازای هر 100 نفر)</li>
            </ul>
          ),
        },
        {
          icon: Khorak,
          name: "خوراک ها",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li className="mt-2">خوراک زبان %20</li>
              <li>چیکن استراگانوف %20</li>
              <li>خوراک دلمه %20</li>
              <li>خوراک ژیگو %20</li>
              <li>بیف استراگانوف %20</li>
            </ul>
          ),
        },
        {
          icon: Salad,
          name: "سالاد ها",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li className="mt-2">سالاد سزار %20</li>
              <li>سالاد قفقازی %20</li>
              <li>سالاد فصل %20</li>
              <li>سالاد روس %20</li>
              <li>سالاد کاردینال %20</li>
            </ul>
          ),
        },
        {
          icon: SideDish,
          name: "کنار غذاها",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li className="mt-2">زیتون پرورده</li>
              <li>ترشی بندری</li>
              <li>ترشی هفت بیجار</li>
              <li>ترشی مکزیکی</li>
              <li>ترشی لبنانی</li>
            </ul>
          ),
        },
        {
          icon: Dessert,
          name: "انواع دسر",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li className="mt-2">ژله بستنی</li>
              <li>شارلوت</li>
              <li>کرم کارامل</li>
              <li>کیک بستنی</li>
              <li>پلمبیر به صورت تک نفره</li>
            </ul>
          ),
        },
        {
          icon: WarmDrink,
          name: "نوشیدنی گرم",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li className="mt-2">چای و نسکافه</li>
              <li>نوشیدنی سرد : آب میوه در 5 طعم نا محدود</li>
            </ul>
          ),
        },
        {
          icon: Snack,
          name: "میان وعده",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li className="mt-2">فینگر فود</li>
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
          icon: Food,
          name: "غذای اصلی",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li className="mt-2">جوجه کباب بدون استخوان 40%</li>
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
          icon: Khorak,
          name: "خوراک ها",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li className="mt-2">خوراک زبان %25</li>
              <li>چیکن استراگانوف %25</li>
              <li>خوراک دلمه %25</li>
              <li>خوراک ژیگو %25</li>
            </ul>
          ),
        },
        {
          icon: Salad,
          name: "سالاد ها",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li className="mt-2">سالاد سزار %25</li>
              <li>سالاد قفقازی %25</li>
              <li>سالاد فصل %25</li>
              <li>سالاد روس %25</li>
            </ul>
          ),
        },
        {
          icon: SideDish,
          name: "کنار غذاها",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li className="mt-2">زیتون پرورده</li>
              <li>ترشی بندری</li>
              <li>ترشی هفت بیجار</li>
              <li>ترشی مکزیکی</li>
            </ul>
          ),
        },
        {
          icon: Dessert,
          name: "انواع دسر",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li className="mt-2">ژله بستنی</li>
              <li>شارلوت</li>
              <li>کرم کارامل</li>
              <li>کیک بستنی</li>
              <li>پلمبیر به صورت تک نفره</li>
            </ul>
          ),
        },
        {
          icon: Drink,
          name: "نوشیدنی همراه با غذا",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li className="mt-2">انواع نوشابه</li>
              <li>دوغ</li>
              <li>دلستر و آب معدنی</li>
            </ul>
          ),
        },
        {
          icon: WarmDrink,
          name: "نوشیدنی گرم",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li>چای و نسکافه</li>
            </ul>
          ),
        },
        {
          icon: ColdDrink,
          name: "نوشیدنی سرد",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li> آب میوه در 5 طعم نا محدود</li>
            </ul>
          ),
        },
        {
          icon: Snack,
          name: "میان وعده",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li className="mt-2">فینگر فود</li>
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
          icon: Food,
          name: "غذای اصلی",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li className="mt-2">باقالی پلو با گوشت بره و ماهیچه %50</li>
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
          icon: Khorak,
          name: "خوراک ها",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li className="mt-2">خوراک زبان %30</li>
              <li>چیکن استراگانوف %30</li>
              <li>خوراک دلمه %30</li>
            </ul>
          ),
        },
        {
          icon: Salad,
          name: "سالاد ها",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li className="mt-2">سالاد سزار %30</li>
              <li>سالاد قفقازی %30</li>
              <li>سالاد فصل %40</li>
            </ul>
          ),
        },
        {
          icon: SideDish,
          name: "کنار غذاها",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li className="mt-2">زیتون پرورده</li>
              <li>ترشی بندری</li>
              <li>ترشی هفت بیجار</li>
            </ul>
          ),
        },
        {
          icon: Dessert,
          name: "انواع دسر",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li className="mt-2">ژله بستنی</li>
              <li>شارلوت</li>
              <li>کرم کارامل</li>
              <li>کیک بستنی</li>
              <li>پلمبیر</li>
            </ul>
          ),
        },
        {
          icon: Drink,
          name: "نوشیدنی همراه با غذا",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li className="mt-2">انواع نوشابه</li>
              <li>دوغ</li>
              <li>دلستر و آب معدنی</li>
            </ul>
          ),
        },
        {
          icon: WarmDrink,
          name: "نوشیدنی گرم",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li>چای و نسکافه</li>
            </ul>
          ),
        },
        {
          icon: ColdDrink,
          name: "نوشیدنی سرد",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li> آب میوه در 5 طعم نا محدود</li>
            </ul>
          ),
        },
        {
          icon: Snack,
          name: "میان وعده",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li className="mt-2">فینگر فود</li>
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
          icon: Food,
          name: "غذای اصلی",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li className="mt-2">باقالی پلو با گوشت بره و ماهیچه %50</li>
              <li>جوجه کباب بدون استخوان 40%</li>
              <li>زرشک پلو با مرغ %30</li>
              <li>برنج سفید 20%</li>
              <li>ته چین 100%</li>
            </ul>
          ),
        },
        {
          icon: Khorak,
          name: "خوراک ها",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li className="mt-2">چیکن استراگانوف %40</li>
              <li>خوراک دلمه %40</li>
            </ul>
          ),
        },
        {
          icon: Salad,
          name: "سالاد ها",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li className="mt-2">سالاد سزار %40</li>
              <li>سالاد فصل %40</li>
            </ul>
          ),
        },
        {
          icon: SideDish,
          name: "کنار غذاها",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li className="mt-2">زیتون پرورده</li>
              <li>ترشی بندری</li>
            </ul>
          ),
        },
        {
          icon: Dessert,
          name: "انواع دسر",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li className="mt-2">ژله بستنی</li>
              <li>شارلوت</li>
              <li>کرم کارامل</li>
              <li>کیک بستنی</li>
              <li>پلمبیر</li>
            </ul>
          ),
        },
        {
          icon: Drink,
          name: "نوشیدنی همراه با غذا",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li className="mt-2">انواع نوشابه</li>
              <li>دوغ</li>
              <li>دلستر و آب معدنی</li>
            </ul>
          ),
        },
        {
          icon: WarmDrink,
          name: "نوشیدنی گرم",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li>چای و نسکافه</li>
            </ul>
          ),
        },
        {
          icon: ColdDrink,
          name: "نوشیدنی سرد",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li> آب میوه در 5 طعم نا محدود</li>
            </ul>
          ),
        },
        {
          icon: Snack,
          name: "میان وعده",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li className="mt-2">فینگر فود</li>
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
          icon: Food,
          name: "غذای اصلی",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li className="mt-2">باقالی پلو با گوشت بره و ماهیچه %50</li>
              <li>جوجه کباب بدون استخوان 50%</li>
              <li>کباب لقمه زعفرانی 50%</li>
              <li>زرشک پلو با مرغ %50</li>
            </ul>
          ),
        },
        {
          icon: Pish,
          name: "پیش غذا",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li className="mt-2">ته چین مرغ</li>
              <li>سالاد سزار</li>
              <li>سوپ قارچ و شیر</li>
              <li>ماست (بورانی ، خیار ، بادمجان ، موسیر و ... انتخابی)</li>
            </ul>
          ),
        },

        {
          icon: Dessert,
          name: "انواع دسر",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li className="mt-2">ژله بستنی</li>
              <li>شارلوت</li>
              <li>کرم کارامل</li>
              <li>کیک بستنی</li>
              <li>پلمبیر</li>
            </ul>
          ),
        },
        {
          icon: Drink,
          name: "نوشیدنی همراه با غذا",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li className="mt-2">انواع نوشابه</li>
              <li>دوغ</li>
              <li>دلستر و آب معدنی</li>
            </ul>
          ),
        },
        {
          icon: WarmDrink,
          name: "نوشیدنی گرم",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li>چای و نسکافه</li>
            </ul>
          ),
        },
        {
          icon: ColdDrink,
          name: "نوشیدنی سرد",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li> آب میوه در 5 طعم نا محدود</li>
            </ul>
          ),
        },
        {
          icon: Snack,
          name: "میان وعده",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li className="mt-2">فینگر فود</li>
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
          icon: Food,
          name: "غذای اصلی",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li className="mt-2">باقالی پلو با گوشت بره و ماهیچه %50</li>
              <li>جوجه کباب بدون استخوان 50%</li>
              <li>کباب لقمه زعفرانی</li>
            </ul>
          ),
        },
        {
          icon: Pish,
          name: "پیش غذا",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li>سالاد سزار</li>
            </ul>
          ),
        },

        {
          icon: Dessert,
          name: "انواع دسر",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li className="mt-2">ژله بستنی</li>
              <li>شارلوت</li>
              <li>کرم کارامل</li>
              <li>کیک بستنی</li>
              <li>پلمبیر</li>
            </ul>
          ),
        },
        {
          icon: Drink,
          name: "نوشیدنی همراه با غذا",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li className="mt-2">انواع نوشابه</li>
              <li>دلستر و آب معدنی</li>
            </ul>
          ),
        },
        {
          icon: WarmDrink,
          name: "نوشیدنی گرم",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li>چای و نسکافه</li>
            </ul>
          ),
        },
        {
          icon: ColdDrink,
          name: "نوشیدنی سرد",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li> آب میوه در 5 طعم نا محدود</li>
            </ul>
          ),
        },
        {
          icon: Snack,
          name: "میان وعده",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li className="mt-2">فینگر فود</li>
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
          icon: Food,
          name: "غذای اصلی",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li className="mt-2">باقالی پلو با گوشت بره و ماهیچه %50</li>
              <li>جوجه کباب بدون استخوان 50%</li>
            </ul>
          ),
        },
        {
          icon: Pish,
          name: "پیش غذا",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li>سالاد سزار</li>
            </ul>
          ),
        },

        {
          icon: Dessert,
          name: "انواع دسر",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li className="mt-2">ژله بستنی</li>
              <li>شارلوت</li>
              <li>کرم کارامل</li>
              <li>کیک بستنی</li>
              <li>پلمبیر</li>
            </ul>
          ),
        },
        {
          icon: Drink,
          name: "نوشیدنی همراه با غذا",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li className="mt-2">انواع نوشابه</li>
              <li>دلستر و آب معدنی</li>
            </ul>
          ),
        },
        {
          icon: WarmDrink,
          name: "نوشیدنی گرم",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li>چای و نسکافه</li>
            </ul>
          ),
        },
        {
          icon: ColdDrink,
          name: "نوشیدنی سرد",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li> آب میوه در 5 طعم نا محدود</li>
            </ul>
          ),
        },
        {
          icon: Snack,
          name: "میان وعده",
          videoUrl: "/assets/images/testi.mp4",
          description: (
            <ul className="space-y-2 grid grid-cols-3 gap-1 border border-gray-500 lg:gap-4 text-center bg-white/20 backdrop-blur-md lg:p-4 p-2 rounded-lg">
              <li className="mt-2">فینگر فود</li>
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

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (!name || !phoneNumber || !gustes || !menue) {
      setMessage("Please fill in all fields");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phoneNumber", phoneNumber);
    formData.append("gustes", gustes);
    formData.append("menue", menue);

    console.log(FormData, "mamad");

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

  const blogData = {
    title: "منوی غذایی و پکیج های پذیرایی شاتو دو ورسای",
    url: "/menue",
    images: [
      "/assets/images/131.webp",
      "/assets/images/132.webp",
      "/assets/images/133.webp",
    ],
    sections: [
      {
        heading: "پکیج های متنوع پذیرایی در تالار شاتو دو ورسای",
        content:
          "ما در ورسای سعی کردیم با ارائه کردن هفت پکیج مختلف از غذا ها و میان وعده های متفاوت حداکثر رضایت شما را به دست بیاوریم. تمام منو ها قابل تغییر می باشند و شما می توانید بر اساس سلیقه و بودجه خود بهترین گزینه را انتخاب کنید.",
        lists: [
          "پکیج VIP با لوکس‌ترین خدمات",
          "پکیج طلایی با خدمات ویژه",
          "پکیج نقره‌ای با خدمات درجه یک",
          "پکیج برنزی با خدمات استاندارد",
          "سرویس مجلل با پذیرایی خاص",
          "سرویس ویژه با پذیرایی منحصر به فرد",
          "سرویس کلاسیک با پذیرایی اصیل",
        ],
      },
      {
        heading: "تنوع غذایی و خدمات پذیرایی",
        content:
          "در هر پکیج، مجموعه کاملی از خدمات پذیرایی شامل غذای اصلی، پیش غذا، دسر، نوشیدنی و میان وعده ارائه می‌شود. تمامی غذاها با بهترین مواد اولیه و توسط سرآشپزهای مجرب تهیه می‌شوند.",
        lists: [
          "غذاهای اصلی متنوع و با کیفیت",
          "پیش غذاها و سالادهای متنوع",
          "دسرهای لوکس و خوشمزه",
          "نوشیدنی‌های گرم و سرد",
          "میان وعده‌های لذیذ",
        ],
      },
    ],
  };

  return (
    <>
      <BlogSchema blogData={blogData} />
      <div className="flex flex-col justify-center items-center min-h-screen  p-8">
        <div className=" rounded-lg  p-4 flex justify-around items-center flex-wrap gap-4 mx-auto mb-4 text-center text-green">
          <h1 className="text-2xl font-bold text-green text-center mx-auto ">
            منوی غذا ها و خدمات شاتو دو ورسای
          </h1>
          <p>
            ما در ورسای سعی کردیم با ارائه کردن هفت پکیج مختلف از غذا ها و میان
            وعده های متفاوت حداکثر رضایت شما را به دست بیاوریم تمام منو ها قابل
            تغییر می باشند لطفا برای دریافت قیمت ها و اطلاع از خدمات دیگر با
            تکمیل فرم زیر اقدام فرمایید
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
                  <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6">
                    {/* Food Icons Grid */}
                    <div className="grid grid-cols-4 lg:grid-cols-2 gap-1 lg:gap-4">
                      {menuDetails[
                        item.title as keyof typeof menuDetails
                      ]?.foods.map((food, foodIndex) => (
                        <motion.button
                          key={foodIndex}
                          whileHover={{ scale: 1.05 }}
                          onClick={() => setSelectedFood(food as FoodItem)}
                          className={` p-1 rounded-lg flex group flex-col transition-all duration-300 ease-in-out items-center border border-green/10 justify-center gap-2 ${
                            selectedFood === food
                              ? "bg-green/20 border-2"
                              : "focus:bg-gold/60 focus:border-none"
                          } `}
                        >
                          <Image
                            src={food.icon}
                            alt="Food Icon"
                            width={40}
                            height={40}
                            className="w-5 h-5 lg:w-10 lg:h-10 group-focus:text-white group-focus:font-bold"
                          />
                          <span className="lg:text-base group-focus:text-white text-xs font-medium text-gray-700">
                            {food.name}
                          </span>
                        </motion.button>
                      ))}
                    </div>

                    {/* Video Player */}
                    <div className="relative bg-black/50 rounded-2xl overflow-hidden min-h-[300px]">
                      {selectedFood ? (
                        <div className="relative w-full h-full">
                          <video
                            key={selectedFood.videoUrl}
                            className="w-full mx-auto h-full lg:w-full lg:h-full object-cover"
                            controls
                            autoPlay
                            loop
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
                            className="absolute inset-0 bg-black/60 flex items-center justify-center p-4"
                          >
                            <div className="text-center items-center">
                              <h3 className="text-base border-b lg:pb-3 pb-1 border-white lg:text-2xl font-bold text-white mb-4">
                                {selectedFood.name}
                              </h3>
                              <p className="lg:text-sm text-xs font-medium text-white/90">
                                {selectedFood.description}
                              </p>
                            </div>
                          </motion.div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-full text-white">
                          یک آیتم را برای مشاهده ویدیو انتخاب کنید
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}{" "}
          </div>
        </div>

        <div className=" py-4 px-12 flex justify-around items-center flex-wrap  gap-4 mx-auto mb-8 text-center text-green">
          <h1 className="text-2xl font-bold text-green text-center mx-auto ">
            your satisfaction guaranteed
          </h1>
        </div>

        <div className="w-auto sm:w-full max-w-5xl px-8 text-center">
          <h2 className="text-xl md:text-3xl font-semibold text-gray-800 text-center my-6">
            درخواست قیمت و رزرو زمان بازدید
          </h2>
          <form
            onSubmit={handleSubmit}
            className="flex lg:flex-row flex-col gap-4 justify-center items-center"
          >
            {/* Name & Phone Section */}
            <div className="flex flex-col gap-6">
              <div className="space-y-2">
                <label className="block text-base lg:text-xl font-bold text-black">
                  شماره تماس
                </label>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  className="w-full rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green/50 border-none sm:text-sm py-3 text-end px-4"
                  placeholder="شماره تماس خود را وارد کنید"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-base lg:text-xl font-bold text-black">
                  نام و نام خانوادگی
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  className="w-full rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green border-none sm:text-sm py-3 text-end px-4"
                  placeholder="نام خود را وارد کنید"
                />
              </div>
              {/* Guests & Menu Section */}

              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-gray-600 pb-4">
                <div className="space-y-2">
                  <label className="block text-base lg:text-xl font-bold text-black">
                    تعداد مهمان‌ها
                  </label>
                  <input
                    type="number"
                    value={gustes}
                    onChange={handleGustesChange}
                    className="w-full rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green/50 border-none sm:text-sm py-3 text-end px-4"
                    placeholder="تعداد مهمان‌ها را وارد کنید"
                  />
                </div>
                <div className="space-y-2" dir="rtl">
                  <label className="block text-xl font-bold text-black">
                    منو
                  </label>
                  <select
                    value={menue}
                    onChange={handleMenueChange}
                    className="w-full rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green/50 border-none sm:text-sm py-3 text-right px-4"
                  >
                    <option value="" disabled>
                      انتخاب منو
                    </option>
                    <option value="دیس پرس سیلور">دیس پرس سیلور</option>
                    <option value="دیس پرس گلد">دیس پرس گلد</option>
                    <option value="دیس پرس VIP">دیس پرس VIP</option>
                    <option value="سلف سیلور">سلف سیلور</option>
                    <option value="سلف گلد">سلف گلد</option>
                    <option value="سلف VIP">سلف VIP</option>
                  </select>
                </div>
              </div>
              <div className="md:col-span-2 ">
                <button
                  type="submit"
                  className="w-full hidden lg:block bg-[#344e41] text-white py-3 rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 ease-in-out"
                >
                  ارسال فرم
                </button>
                {message && (
                  <p className="text-center hidden lg:block mt-4 text-sm font-medium text-red-400">
                    لطفا تمام فیلدها را پر کنید
                  </p>
                )}
              </div>
            </div>

            {message && (
              <p className="text-center block lg:hidden mt-4 text-sm font-medium text-green-400">
                با موقثیت ثبت شد
              </p>
            )}
          </form>
          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full my-4 block lg:hidden bg-[#344e41] text-white py-3 rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 ease-in-out"
          >
            ارسال فرم
          </button>
        </div>
      </div>
    </>
  );
};

export default Page;
