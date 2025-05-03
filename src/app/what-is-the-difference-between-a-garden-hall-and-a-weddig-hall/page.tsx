"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogSchema } from "../../../components/schema/blogSchema";
import CommentBox from "../../../components/commentBox";

const Page = () => {
  const blogId =
    "what-is-the-difference-between-a-garden-hall-and-a-weddig-hall";
  const rawBlogData = {
    title: "باغ تالار یا تالار عروسی: کدومش برای عروسی شما بهتره؟",
    url: "/what-is-the-difference-between-a-garden-hall-and-a-weddig-hall",
    images: [
      "/assets/images/S__00448.webp",
      "/assets/images/Luxurious-hall-and-garden-hall-of-Chateau-de-Versailles3.webp",
      "/assets/images/VAG_2082.webp",
      "/assets/images/photo_2024-11-16_14-00-54.webp",
      "/assets/images/202.webp",
    ],
    sections: [
      {
        title: "باغ تالار چیه و چه فرقی با تالار عروسی داره؟",
        description:
          "تصور کنین که دارین برای عروسی‌تون برنامه‌ریزی می‌کنین و می‌خواین یه جای عالی پیدا کنین. آیا دلتون می‌خواد تو یه باغ سرسبز و قشنگ مراسم‌تون رو برگزار کنین یا تو یه سالن شیک و باکلاس؟ هر کدوم از این گزینه‌ها یه حس و حال خاص خودشون رو دارن.",
        list: [
          {
            heading: "فضای باز و طبیعی",
            text: "اگه عاشق طبیعت هستین و دلتون می‌خواد عروسی‌تون تو فضای آزاد باشه، باغ تالار بهترین انتخابه",
          },
          {
            heading: "زیبایی خیره‌کننده",
            text: "مناظر طبیعی و گل‌ها و چمن‌زارها می‌تونن مراسم شما رو مثل یه فیلم رمانتیک کنن",
          },
          {
            heading: "وابسته به آب و هوا",
            text: "اگه یهو بارون بیاد یا هوا خیلی گرم بشه، ممکنه برنامه‌تون بهم بریزه",
          },
        ],
        tip: {
          title: "شاتو دو ورسای: انتخاب هوشمندانه",
          text: "تالار عروسی شاتو دو ورسای با ترکیب زیبایی از فضای لوکس داخلی و محوطه سرسبز، بهترین ویژگی‌های هر دو گزینه را برای شما فراهم می‌کند.",
        },
      },
      {
        title: "مقایسه باغ تالار و تالار عروسی: کدومش برنده می‌شه؟",
        description:
          "حالا که با خوبی‌ها و بدی‌های هر دو آشنا شدیم، بیاین یه مقایسه سریع کنیم:",
        list: [
          {
            heading: "فضا",
            text: "باغ تالار: باز و طبیعی | تالار عروسی: بسته و مجلل",
          },
          {
            heading: "وابستگی به آب و هوا",
            text: "باغ تالار: زیاد | تالار عروسی: صفر",
          },
          {
            heading: "امکانات",
            text: "باغ تالار: نیاز به تجهیزات اضافی | تالار عروسی: همه چیز آماده‌ست",
          },
        ],
        tip: {
          title: "پیشنهاد ویژه",
          text: "تالار شاتو دو ورسای با ترکیب امکانات لوکس داخلی و فضای سبز محوطه، تجربه منحصربفردی را برای شما فراهم می‌کند.",
        },
      },
      {
        title: "چرا تالار عروسی شاتو دو ورسای انتخاب شماست؟",
        description:
          "اگه دنبال یه تالار عروسی هستین که هم شیک باشه، هم باکلاس، و هم همه رو انگشت به دهن کنه، شاتو دو ورسای همون جائیه که باید رزرو کنین!",
        list: [
          {
            heading: "دکوراسیون خفن و مدرن",
            text: "از لحظه‌ای که پاتون رو تو شاتو دو ورسای می‌ذارین، حس می‌کنین وارد یه کاخ سلطنتی شدین",
          },
          {
            heading: "صدا و نور حرفه‌ای",
            text: "سیستم‌های صوتی و نورپردازی پیشرفته شاتو دو ورسای، عروسی‌تون رو مثل یه کنسرت بزرگ می‌کنه",
          },
          {
            heading: "فضای بزرگ",
            text: "چه 50 نفر مهمون داشته باشین، چه 500 نفر، شاتو دو ورسای جا برای همه داره",
          },
        ],
        tip: {
          title: "تجربه منحصر به فرد",
          text: "اینجا فقط یه تالار نیست، یه تجربه‌ست که تا آخر عمر یادتون می‌مونه!",
        },
      },
      {
        title: "سوالات متداول: همه چیزایی که باید بدونین",
        description:
          "حالا که بحث باغ تالار و تالار عروسی داغ شده، بیاین به چند تا سوال پرتکرار جواب بدیم که خیالتون راحت بشه:",
        list: [
          {
            heading: "باغ تالار تو زمستون جواب می‌ده؟",
            text: "اگه باغ تالار چادر یا فضای سرپوشیده داشته باشه، آره می‌تونه جواب بده. ولی تو سرمای زمستون، تالار عروسی مثل شاتو دو ورسای خیالتون رو راحت‌تر می‌کنه",
          },
          {
            heading: "شاتو دو ورسای چه امکاناتی داره؟",
            text: "دکور شیک، نور و صدای حرفه‌ای، فضای بزرگ، منوی غذایی متنوع، و یه تیم خفن که همه چیز رو براتون ردیف می‌کنه",
          },
          {
            heading: "چطور شاتو دو ورسای رو رزرو کنم؟",
            text: "کافیه با شماره 09123314145 زنگ بزنین یا تو وب‌سایت فرم رزرو رو پر کنین",
          },
        ],
        tip: {
          title: "مشاوره رایگان",
          text: "با تماس با ما، می‌توانید از مشاوره رایگان برای انتخاب بهترین پکیج مناسب مراسم خود بهره‌مند شوید.",
        },
      },
      {
        title: "حرف آخر: شاتو دو ورسای منتظر شماست!",
        description:
          "انتخاب بین باغ تالار و تالار عروسی به خودتون بستگی داره. اگه عاشق طبیعت و فضای باز هستین، باغ تالار براتون خوبه. ولی اگه دنبال یه جای شیک، مطمئن و بی‌دردسر هستین که همه چیزش آماده‌ست، تالار عروسی بهترین گزینه‌ست.",
        orderedList: [
          "با ما تماس بگیرید",
          "از تالار بازدید کنید",
          "تاریخ مراسم خود را رزرو کنید",
          "با خیال راحت منتظر روز بزرگتان باشید",
          "خاطره‌ای ماندگار در شاتو دو ورسای بسازید",
        ],
        tip: {
          title: "پیشنهاد نهایی",
          text: "برای یک انتخاب مطمئن و خاطره‌انگیز، با تالار «شاتو دو ورسای» در احمدآباد مستوفی تهران تماس بگیر. تیم مشاوره‌ی ما آماده‌ست تا بر اساس بودجه و سلیقه‌ت، بهترین پکیج رو پیشنهاد بده.\n📞 09123314145\n📱 یا از فرم رزرو آنلاین تالار ورسای استفاده کن و یک قدم به شب رویایی‌ات نزدیک‌تر شو!",
        },
      },
    ],
  };

  const blogData = {
    title: rawBlogData.title,
    url: rawBlogData.url,
    images: rawBlogData.images,
    sections: rawBlogData.sections.map((section) => ({
      heading: section.title,
      content: section.description || "",
      lists: section.list
        ? section.list.map((item) => `${item.heading}: ${item.text}`)
        : section.orderedList || [],
    })),
  };

  useEffect(() => {
    document.title = "فرق باغ تالار با تالار عروسی چیست";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "فرق باغ تالار با تالار عروسی در فضای باز، طبیعت، طراحی مراسم و خدمات متفاوت است. کدام گزینه برای عروسی شما مناسب‌تر است؟"
      );
    }
  }, []);

  return (
    <>
      <BlogSchema blogData={blogData} />
      <div className="grid mx-auto grid-cols-1 h-auto p-4" dir="rtl">
        <div className="px-4 mx-auto py-2 rounded-lg my-2 width-full grid grid-cols-1 gap-4">
          <div className="col-span-2 mx-auto width-auto my-2 max-w-5xl  rounded-lg">
            {" "}
            <div className="mx-auto flex flex-col justify-center items-center my-2 px-1.5 py-1.5   rounded-lg">
              <Image
                src="/assets/images/S__00448.webp"
                width={4000}
                height={4000}
                alt="فرق باغ تالار با تالار عروسی چیست"
                className="rounded-lg shadow-lg h-full"
              />
            </div>
            <div className="mx-auto width-auto my-2 px-1.5 py-1.5 rounded-lg text-center">
              <h1
                className="text-2xl font-bold mx-auto h1-blog-header"
                id="contetTitle"
              >
                باغ تالار یا تالار عروسی: کدومش برای عروسی شما بهتره؟ راهنمای
                کامل با معرفی شاتو دو ورسای
              </h1>
              <br />

              <p className="mb-6">
                سلام به همه عروس‌ها و دامادهای آینده و کسانی که دنبال یه جای شیک
                و خاص برای مراسمشون هستن! اگه شما هم مثل من عاشق مراسم‌های لوکس
                و خاطره‌انگیز هستین، حتماً تا حالا به این فکر کردین که عروسی‌تون
                رو کجا برگزار کنین. دو تا گزینه اصلی پیش روتونه: باغ تالار یا
                تالار عروسی. اما فرق این دوتا چیه و کدومش برای شما بهتره؟ تو این
                مقاله قراره با زبون خودمونی و یه عالمه مثال واقعی بهتون بگم که
                فرق باغ تالار با تالار عروسی چیه و چرا تالار عروسی شاتو دو ورسای
                می‌تونه بهترین انتخاب برای روز بزرگتون باشه. پس با من همراه
                باشین تا با هم این موضوع رو زیر و رو کنیم
              </p>
              <p className="mb-6 text-2xl font-bold text-center">
                باغ تالار یا تالار عروسی: کدام یک برای مراسم شما بهتر است؟
              </p>

              <div className="bg-gray-50 p-5 rounded-lg shadow-md mb-6">
                <h4 className="text-xl font-bold mb-3">
                  باغ تالار چیه و چه فرقی با تالار عروسی داره؟
                </h4>
                <p className="mb-4">
                  تصور کنین که دارین برای عروسی‌تون برنامه‌ریزی می‌کنین و
                  می‌خواین یه جای عالی پیدا کنین. آیا دلتون می‌خواد تو یه باغ
                  سرسبز و قشنگ مراسم‌تون رو برگزار کنین یا تو یه سالن شیک و
                  باکلاس؟ هر کدوم از این گزینه‌ها یه حس و حال خاص خودشون رو
                  دارن.
                </p>

                <h5 className="text-lg font-bold mb-2">
                  باغ تالار: عروسی تو دل طبیعت
                </h5>
                <p className="mb-3">
                  باغ تالارها جاهایی هستن که توشون می‌تونین مراسم‌تون رو تو فضای
                  باز و وسط طبیعت برگزار کنین. فکرشو بکنین: یه باغ پر از گل‌های
                  رنگارنگ، درخت‌های سرسبز، یه آسمون پر ستاره بالای سرتون و نسیم
                  خنکی که صورتتون رو نوازش می‌ده.
                </p>

                <h6 className="font-bold mt-3 mb-2">مزایای باغ تالار:</h6>
                <ul className="list-disc list-inside mb-4">
                  <li>
                    <strong>فضای باز و طبیعی:</strong> اگه عاشق طبیعت هستین و
                    دلتون می‌خواد عروسی‌تون تو فضای آزاد باشه، باغ تالار بهترین
                    انتخابه
                  </li>
                  <li>
                    <strong>زیبایی خیره‌کننده:</strong> مناظر طبیعی و گل‌ها و
                    چمن‌زارها می‌تونن مراسم شما رو مثل یه فیلم رمانتیک کنن
                  </li>
                  <li>
                    <strong>فضای بزرگ:</strong> باغ تالارها معمولاً جا برای
                    تعداد زیادی مهمان دارن و همه می‌تونن راحت باشن
                  </li>
                </ul>

                <h6 className="font-bold mt-3 mb-2">معایب باغ تالار:</h6>
                <ul className="list-disc list-inside mb-4">
                  <li>
                    <strong>وابسته به آب و هوا:</strong> اگه یهو بارون بیاد یا
                    هوا خیلی گرم بشه، ممکنه برنامه‌تون بهم بریزه
                  </li>
                  <li>
                    <strong>محدودیت فصلی:</strong> تو زمستون یا پاییز که هوا
                    سرده، باغ تالار زیاد جواب نمیده
                  </li>
                  <li>
                    <strong>نیاز به تجهیزات بیشتر:</strong> شاید لازم بشه چادر،
                    سایبون یا سیستم گرمایشی بذارین که هزینه‌تون رو می‌بره بالا
                  </li>
                </ul>

                <div className="bg-green-50 p-4 rounded-md border-l-4 border-green-300">
                  <h5 className="font-bold mb-2">
                    شاتو دو ورسای: انتخاب هوشمندانه
                  </h5>
                  <p>
                    تالار عروسی شاتو دو ورسای با ترکیب زیبایی از فضای لوکس داخلی
                    و محوطه سرسبز، بهترین ویژگی‌های هر دو گزینه را برای شما
                    فراهم می‌کند.
                  </p>
                </div>
              </div>
              <div className="mx-auto flex flex-col justify-center items-center my-2 px-1.5 py-1.5   rounded-lg">
                <Image
                  src="/assets/images/Luxurious-hall-and-garden-hall-of-Chateau-de-Versailles3.webp"
                  width={4000}
                  height={4000}
                  alt="فرق باغ تالار با تالار عروسی چیست"
                  className="rounded-lg shadow-lg h-full"
                />
              </div>

              <div className="bg-gray-50 p-5 rounded-lg shadow-md mb-6">
                <h4 className="text-xl font-bold mb-3">
                  مقایسه باغ تالار و تالار عروسی: کدومش برنده می‌شه؟
                </h4>
                <p className="mb-4">
                  حالا که با خوبی‌ها و بدی‌های هر دو آشنا شدیم، بیاین یه مقایسه
                  سریع کنیم:
                </p>

                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg mb-4">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-2 px-4 border-b text-right">معیار</th>
                        <th className="py-2 px-4 border-b text-right">
                          باغ تالار
                        </th>
                        <th className="py-2 px-4 border-b text-right">
                          تالار عروسی
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-right">
                      <tr>
                        <td className="py-2 px-4 border-b font-medium text-right">
                          فضا
                        </td>
                        <td className="py-2 px-4 border-b text-right">
                          باز و طبیعی
                        </td>
                        <td className="py-2 px-4 border-b text-right">
                          بسته و مجلل
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-2 px-4 border-b font-medium">
                          وابستگی به آب و هوا
                        </td>
                        <td className="py-2 px-4 border-b">زیاد</td>
                        <td className="py-2 px-4 border-b">صفر</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b font-medium">
                          امکانات
                        </td>
                        <td className="py-2 px-4 border-b">
                          نیاز به تجهیزات اضافی
                        </td>
                        <td className="py-2 px-4 border-b">همه چیز آماده‌ست</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-2 px-4 border-b font-medium">
                          فصل مناسب
                        </td>
                        <td className="py-2 px-4 border-b">بهار و تابستون</td>
                        <td className="py-2 px-4 border-b">هر موقع از سال</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b font-medium">
                          هزینه
                        </td>
                        <td className="py-2 px-4 border-b">متغیر، گاهی کمتر</td>
                        <td className="py-2 px-4 border-b">
                          گاهی بیشتر، ولی مطمئن‌تر
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mb-4">
                  خب، اگه دلتون می‌خواد عروسی‌تون تو طبیعت و زیر آسمون باشه، باغ
                  تالار انتخاب خوبیه. ولی اگه دنبال یه جای شیک و بی‌دردسر هستین
                  که همه چیز تحت کنترل باشه، تالار عروسی حرف نداره.
                </p>

                <div className="bg-green-50 p-4 rounded-md border-l-4 border-green-300">
                  <h5 className="font-bold mb-2">پیشنهاد ویژه</h5>
                  <p>
                    حالا که بحث تالار عروسی شد، بذارین یه گزینه خاص رو بهتون
                    معرفی کنم که دیگه نیازی به فکر کردن نداشته باشین. تالار شاتو
                    دو ورسای با ترکیب امکانات لوکس داخلی و فضای سبز محوطه، تجربه
                    منحصربفردی را برای شما فراهم می‌کند.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg shadow-md mb-6">
                <h4 className="text-xl font-bold mb-3">
                  چرا تالار عروسی شاتو دو ورسای انتخاب شماست؟
                </h4>
                <p className="mb-4">
                  اگه دنبال یه تالار عروسی هستین که هم شیک باشه، هم باکلاس، و هم
                  همه رو انگشت به دهن کنه، شاتو دو ورسای همون جائیه که باید رزرو
                  کنین! این تالار یکی از بهترین و لوکس‌ترین تالارهای عروسیه که
                  با امکانات فوق‌العاده و خدمات حرفه‌ای، عروسی‌تون رو به یه جشن
                  رویاهاتون تبدیل می‌کنه.
                </p>

                <h5 className="text-lg font-bold mb-3">
                  امکانات شاتو دو ورسای که شما رو عاشقش می‌کنه
                </h5>
                <ul className="list-disc list-inside mb-4">
                  <li>
                    <strong>دکوراسیون خفن و مدرن:</strong> از لحظه‌ای که پاتون
                    رو تو شاتو دو ورسای می‌ذارین، حس می‌کنین وارد یه کاخ سلطنتی
                    شدین. دکوراسیون شیک و طراحی‌های خاصش، مراسم‌تون رو لاکچری
                    می‌کنه
                  </li>
                  <li>
                    <strong>صدا و نور حرفه‌ای:</strong> سیستم‌های صوتی و
                    نورپردازی پیشرفته شاتو دو ورسای، عروسی‌تون رو مثل یه کنسرت
                    بزرگ می‌کنه که همه ازش لذت می‌برن
                  </li>
                  <li>
                    <strong>فضای بزرگ:</strong> چه 50 نفر مهمون داشته باشین، چه
                    500 نفر، شاتو دو ورسای جا برای همه داره و راحت می‌تونین رقص
                    و شادی کنین
                  </li>
                  <li>
                    <strong>تیم حرفه‌ای:</strong> از برنامه‌ریزی تا اجرای مراسم،
                    یه تیم خفن کنار شماست که همه چیز رو براتون مثل آب خوردن
                    می‌کنه
                  </li>
                  <li>
                    <strong>غذاهای خوشمزه:</strong> منوی غذایی متنوع و لذیذ شاتو
                    دو ورسای، مهموناتون رو سورپرایز می‌کنه و همه ازتون تعریف
                    می‌کنن
                  </li>
                </ul>

                <p className="mb-4">
                  مثلاً تصور کنین: مهموناتون وارد تالار می‌شن، نورهای رنگی و
                  موزیک ملایم فضا رو پر کرده، میزها با گل‌های شیک تزئین شدن و
                  بوی غذاهای خوشمزه همه رو دیوونه کرده. این همون چیزیه که با
                  رزرو شاتو دو ورسای به دست می‌آرین. اینجا فقط یه تالار نیست، یه
                  تجربه‌ست که تا آخر عمر یادتون می‌مونه!
                </p>

                <div className="mx-auto flex flex-col justify-center items-center my-4 px-1.5 py-1.5 rounded-lg">
                  <Image
                    src="/assets/images/VAG_2082.webp"
                    width={4000}
                    height={4000}
                    alt="تالار عروسی شاتو دو ورسای"
                    className="rounded-lg shadow-lg h-full"
                  />
                </div>

                <h5 className="text-lg font-bold mb-3 mt-6">
                  سوالات متداول: همه چیزایی که باید بدونین
                </h5>
                <p className="mb-4">
                  حالا که بحث باغ تالار و تالار عروسی داغ شده، بیاین به چند تا
                  سوال پرتکرار جواب بدیم که خیالتون راحت بشه:
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h6 className="font-bold mb-2">
                      1. باغ تالار تو زمستون جواب می‌ده؟
                    </h6>
                    <p>
                      خب، اگه باغ تالار چادر یا فضای سرپوشیده داشته باشه، آره
                      می‌تونه جواب بده. ولی تو سرمای زمستون، تالار عروسی مثل
                      شاتو دو ورسای خیالتون رو راحت‌تر می‌کنه.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h6 className="font-bold mb-2">
                      2. شاتو دو ورسای چه امکاناتی داره؟
                    </h6>
                    <p>
                      دکور شیک، نور و صدای حرفه‌ای، فضای بزرگ، منوی غذایی متنوع،
                      و یه تیم خفن که همه چیز رو براتون ردیف می‌کنه. چیزی کم
                      دارین؟ بهمون بگین!
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h6 className="font-bold mb-2">
                      3. چطور شاتو دو ورسای رو رزرو کنم؟
                    </h6>
                    <p>
                      کافیه با شماره 09123314145 زنگ بزنین یا تو وب‌سایت فرم
                      رزرو رو پر کنین. ما سریع باهاتون تماس می‌گیریم و همه چیز
                      رو هماهنگ می‌کنیم.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h6 className="font-bold mb-2">
                      4. شاتو دو ورسای برای عروسی‌های کوچیک هم خوبه؟
                    </h6>
                    <p>
                      صددرصد! فرقی نمی‌کنه مراسم‌تون کوچیک باشه یا بزرگ، ما فضا
                      و خدمات رو براتون شخصی‌سازی می‌کنیم.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h6 className="font-bold mb-2">
                      5. می‌شه مراسم عقد رو هم تو شاتو دو ورسای برگزار کرد؟
                    </h6>
                    <p>
                      آره، یه فضای مخصوص برای عقد داریم که می‌تونین هم عقدتون رو
                      اونجا برگزار کنین، هم عروسی‌تون رو. همه چیز تو یه جا جمع
                      می‌شه!
                    </p>
                  </div>
                </div>
                <div className="mx-auto flex flex-col justify-center items-center my-2 px-1.5 py-1.5   rounded-lg">
                  <Image
                    src="/assets/images/photo_2024-11-16_14-00-54.webp"
                    width={4000}
                    height={4000}
                    alt="فرق باغ تالار با تالار عروسی چیست"
                    className="rounded-lg shadow-lg h-full"
                  />
                </div>

                <div className="bg-green-50 p-4 rounded-md border-l-4 border-green-300">
                  <h5 className="font-bold mb-2">
                    حرف آخر: شاتو دو ورسای منتظر شماست!
                  </h5>
                  <p>
                    انتخاب بین باغ تالار و تالار عروسی به خودتون بستگی داره. اگه
                    عاشق طبیعت و فضای باز هستین، باغ تالار براتون خوبه. ولی اگه
                    دنبال یه جای شیک، مطمئن و بی‌دردسر هستین که همه چیزش
                    آماده‌ست، تالار عروسی بهترین گزینه‌ست. و اگه تالار عروسی
                    می‌خواین، چرا شاتو دو ورسای رو انتخاب نکنین؟
                  </p>
                  <p className="mt-2">
                    اینجا جاییه که رویاهاتون رو به واقعیت تبدیل می‌کنه و یه
                    عروسی لاکچری براتون می‌سازه که همه تا سال‌ها ازش حرف بزنن.
                    پس معطل نکنین، همین حالا با ما تماس بگیرین و تاریخ مراسم‌تون
                    رو رزرو کنین. شاتو دو ورسای منتظر شماست تا بهترین شب
                    زندگی‌تون رو براتون رقم بزنه!
                  </p>
                </div>

                <Link href="/menue">
                  <button className="mb-6 bg-green text-white hover-btn py-2 px-8 mx-auto rounded-md hover:shadow-2xl transition-transform transform hover:scale-105 mt-8 text-xl block">
                    رزرو تالار شاتو دو ورسای
                  </button>
                </Link>
              </div>

              <Link href="/menue">
                <button className="mb-6 bg-green text-white hover-btn py-2 px-8 mx-auto rounded-md hover:shadow-2xl transition-transform transform hover:scale-105 mt-8 text-xl">
                  رزرو سالن عقد شاتو دو ورسای
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <CommentBox blogId={blogId} />
    </>
  );
};
export default Page;
