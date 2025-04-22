"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogSchema } from "../../../components/schema/blogSchema";
import CommentBox from "../../../components/commentBox";

const Page = () => {
  const blogId = "wedding-hall-for-iranian-and-french-weddings";
  const blogData = {
    title: "تالار عروسی برای عروسی های ایرانی و فرانسوی | شاتو دو ورسای",
    url: "/wedding-hall-for-iranian-and-french-weddings",
    images: [
      "/assets/images/191.webp",
      "/assets/images/Green-space-and-night-with-lighting-along-with-the-statue-of-the-photography-location-of-the-garden-of-the-Chateau-de-Versailles-hall.webp",
      "/assets/images/View-of-table-and-chair-arrangement-in-the-garden-hall-of-Chateau-de-Versailles-luxury-hall (2).webp",
      "/assets/images/S__00395.webp",
    ],
    sections: [
      {
        heading: "مقدمه",
        content:
          "شاید اسم شاتو دو ورسای شما رو یاد قصرهای سلطنتی فرانسه بندازه، ولی اجازه بدید یه راز رو براتون فاش کنیم: اینجا تو دل تهران، جایی هست که ترکیبی از شکوه عروسی‌های ایرانی و کلاس و ظرافت مراسم‌های فرانسوی رو به نمایش می‌ذاره. اگه دنبال یه تالار خاص می‌گردید که همه چیزش متفاوت، لوکس و به‌یادموندنی باشه، «تالار شاتو دو ورسای» قراره قلب‌تون رو تسخیر کنه.",
      },
      {
        heading: "چرا تلفیق عروسی ایرانی و فرانسوی جذابه؟",
        content:
          "قبل از اینکه وارد جزئیات شاتو دو ورسای بشیم، بذارید کمی درباره تفاوت‌ها و جذابیت‌های این دو سبک عروسی صحبت کنیم. عروسی ایرانی پر از شور و هیجان، با رقص و موسیقی شاد، سفره عقد، شام مفصل ایرانی، و کلی مهمون‌های شاد است. در مقابل، عروسی فرانسوی با ظرافت، کلاس، سادگی شیک، گل‌آرایی سبک اروپایی، نورپردازی ملایم و لحظاتی پر از احساس شناخته می‌شود. حالا تصور کن جایی باشه که بتونی هر دو حس رو با هم تجربه کنی؛ از سفره عقد سنتی بگیر تا گل‌آرایی شیک و مینیمال فرانسوی! این همون جاییه که شاتو دو ورسای با تمام توان وارد میشه.",
      },
      {
        heading: "ویژگی‌های منحصر به فرد تالار شاتو دو ورسای",
        content:
          "تالار شاتو دو ورسای با ویژگی‌های منحصر به فرد خود، انتخاب ایده‌آلی برای برگزاری مراسم عروسی ترکیبی ایرانی-فرانسوی است.",
        lists: [
          "طراحی الهام‌گرفته از قصرهای فرانسوی: اولین چیزی که توی شاتو دو ورسای چشم‌تون رو می‌گیره، معماری خاصشه. ستون‌های بلند، سقف‌های تزیین‌شده، لوسترهای کریستالی، و یه حس لاکچری که به محض ورود مهمونا رو میخکوب می‌کنه.",
          "فضاهای چندمنظوره برای انواع مراسم: چه بخواید یه جشن سنتی ایرانی بگیرین با آتیش‌بازی و دف‌نوازی، چه یه مراسم صمیمی فرانسوی با نور شمع و موسیقی کلاسیک، شاتو دو ورسای برای هر دو گزینه آمادگی کامل داره.",
          "تیم حرفه‌ای تشریفات: تیم ما تجربه اجرای مراسم‌های مختلف با تم‌های متنوع رو داره. اگه عروس‌و‌داماد ایده‌ای خاص داشته باشن، با مشورت و برنامه‌ریزی تبدیلش می‌کنیم به یه اجرای دقیق و بی‌نقص.",
          "منوی غذایی منعطف و خوشمزه: ما منوی ایرانی داریم با چلوکباب و باقالی‌پلو، ولی می‌تونیم منو رو با سبک اروپایی مثل انواع فینگر فود، دسرهای فرانسوی مثل تارت میوه، ماکارون یا موس شکلاتی و نوشیدنی‌های خاص ترکیب کنیم.",
          "لوکیشن دنج و دسترسی آسان: شاتو دو ورسای در احمدآباد مستوفی واقع شده، جایی خلوت، امن و با فضای باز کافی برای عکاسی و فیلم‌برداری. دور از شلوغی شهر، ولی نزدیک به قلب تهرانه!",
        ],
      },
      {
        heading: "ایده‌هایی برای تم عروسی ترکیبی ایرانی-فرانسوی",
        content:
          "برای اونایی که می‌خوان یه مراسم خاص و متفاوت برگزار کنن، پیشنهاد می‌کنیم از ترکیب این دو فرهنگ استفاده کنن.",
        lists: [
          "لباس عروس: کت‌و‌دامن گیپوری فرانسوی + تاج سنتی ایرانی",
          "موسیقی: شروع با پیانو و ویولن فرانسوی، ادامه با گروه سنتی ایرانی",
          "دکور: میز مهمان با شمع‌های بلند و گل‌های طبیعی سبک اروپایی، سفره عقد سنتی ایرانی با طراحی مدرن",
          "کیک عروسی: کیک چندطبقه با طراحی کلاسیک و گل‌کاری فرانسوی با طعم‌های ایرانی مثل زعفران یا پسته",
          "هدایای مهمان‌ها: بسته‌های شیک با عطر و اسانس فرانسوی همراه با نقل ایرانی",
        ],
      },
      {
        heading: "خدمات ویژه شاتو دو ورسای برای مراسم‌های خاص",
        content:
          'شاید بپرسین "مگه شاتو دو ورسای خدمات فرانسوی هم داره؟" راستش نه به اون شکل کلاسیک، ولی ما یه چیز مهم‌تر داریم: توانایی خلق تجربه! هر عروسی که تا امروز اینجا برگزار شده، یه داستان منحصربه‌فرد بوده. ما به سلیقه و رویاهای شما گوش می‌دیم و کمک می‌کنیم یه مراسم خلق کنین که ترکیبی باشه از فرهنگ، عشق، و زیبایی.',
      },
      {
        heading: "سوالات پرتکرار درباره عروسی در شاتو دو ورسای",
        content:
          "در این بخش به سوالات متداولی که ممکن است برای شما پیش بیاید، پاسخ می‌دهیم.",
        lists: [
          "آیا شاتو دو ورسای برای مراسم‌های کوچک و صمیمی هم مناسبه؟ بله! سالن‌های ما قابلیت شخصی‌سازی دارن و می‌تونیم فضا رو برای مراسم‌های کم‌جمعیت هم به بهترین شکل طراحی کنیم.",
          "می‌تونیم تم عروسی خاصی انتخاب کنیم؟ صددرصد! تیم ما آماده‌ست تا با هر تم و سبک خاصی همکاری کنه. چه فرانسوی، چه ایرانی، چه هر چیز دیگه‌ای که در ذهنتونه.",
          "خدمات جانبی هم ارائه می‌دید؟ (مثلاً گروه موسیقی یا دی‌جی) بله، از گروه موسیقی سنتی ایرانی تا دی‌جی حرفه‌ای و حتی موسیقی کلاسیک زنده، همه در پکیج‌های ما قابل انتخابه.",
          "قیمت‌ها چطوره؟ شاتو دو ورسای با وجود تمام امکانات لاکچری‌اش، پکیج‌های متنوع و مقرون‌به‌صرفه‌ای داره که با بودجه‌های مختلف سازگاره.",
          "امکان تست غذا یا بازدید حضوری وجود داره؟ بله، قبل از مراسم می‌تونین با هماهنگی قبلی از تالار بازدید کنین و طعم غذاها رو تست کنین تا با اطمینان خاطر تصمیم بگیرین.",
        ],
      },
      {
        heading: "تجربه واقعی مراسم؛ قصه‌ای متفاوت",
        content:
          "از لحظه‌ای که مهمانان وارد تالار می‌شوند، با استقبال گرم و دلنشین مواجه می‌شوند. مهمانان از راه‌های مختلف (پارکینگ اختصاصی، آسانسور لوکس و ...) به راحتی به تالار هدایت می‌شوند. موسیقی زنده و هماهنگ، مهمانان رو شوق و ذوق می‌کنه. زوج‌های خوشبخت از خاطرات شیرینشون تعریف می‌کنند که همراه با عاطفه و صداقت هست. فضای رقص با نورپردازی جذاب و موسیقی‌های به‌یادماندنی، مهمانان رو به وجد می‌آورد.",
      },
      {
        heading: "غذا و منو؛ طعمی به‌یادماندنی",
        content:
          "یکی از مسائلی که در تمامی عروسی‌ها تاثیرگذار هست، منوی غذایی است. تالار شاتو دو ورسای، منویی متنوع و جذاب را ارائه می‌دهد که شامل غذاهای سنتی ایرانی و بین‌المللی فرانسوی است.",
        lists: [
          "پیش‌غذاهای خلاقانه: از ترکیبات تازه و خوشمزه گرفته تا طعم‌های متفاوت فرانسوی و ایرانی.",
          "غذای اصلی با سلیقه: هر غذایی با توجه به سلیقه مشتری تنظیم و به صورت لایو ساخته می‌شود، از چلوکباب ایرانی تا استیک فرانسوی.",
          "دسرهای دلپذیر: کیک‌های تزئینی، انواع شیرینی‌های سنتی ایرانی و دسرهای فرانسوی مثل کرم بروله و ماکارون.",
        ],
      },
    ],
  };

  useEffect(() => {
    document.title = "تالار عروسی برای عروسی های ایرانی و فرانسوی";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "به‌دنبال تالار عروسی خاص با ترکیب سبک ایرانی و فرانسوی هستی؟ شاتو دو ورسای با معماری مجلل، خدمات لاکچری و لوکیشن عالی در احمدآباد مستوفی"
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
                src="/assets/images/191.webp"
                width={4000}
                height={4000}
                alt="تالار عروسی برای عروسی های ایرانی و فرانسوی"
                className="rounded-lg shadow-lg h-full"
              />
            </div>
            <div className="mx-auto width-auto my-2 px-1.5 py-1.5 rounded-lg text-center">
              <h1
                className="text-2xl font-bold mx-auto h1-blog-header"
                id="contetTitle"
              >
                شاتو دو ورسای: جایی که عروسی‌تون به رویا تبدیل می‌شه
              </h1>

              <p id="contentDiscription" className="text-regular mx-auto mt-2">
                <span className="text-black font-bold mb-3 text-2xl">
                  مقدمه
                </span>
                <br />
              </p>
              <p className="p-2">
                شاید اسم شاتو دو ورسای شما رو یاد قصرهای سلطنتی فرانسه بندازه،
                ولی اجازه بدید یه راز رو براتون فاش کنیم: اینجا تو دل تهران،
                جایی هست که ترکیبی از شکوه عروسی‌های ایرانی و کلاس و ظرافت
                مراسم‌های فرانسوی رو به نمایش می‌ذاره. اگه دنبال یه تالار خاص
                می‌گردید که همه چیزش متفاوت، لوکس و به‌یادموندنی باشه، «تالار
                شاتو دو ورسای» قراره قلب‌تون رو تسخیر کنه
              </p>

              <Link href="/menue">
                <button className="mb-6 bg-green text-white hover-btn py-2 px-8 mx-auto rounded-md hover:shadow-2xl transition-transform transform hover:scale-105 mt-8 text-xl">
                  رزرو سالن عقد شاتو دو ورسای
                </button>
              </Link>
              <div className="mx-auto width-auto my-8 px-4 py-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-center mb-6">
                  چرا تلفیق عروسی ایرانی و فرانسوی جذابه؟
                </h3>

                <p className="mb-6 text-lg">
                  قبل از اینکه وارد جزئیات شاتو دو ورسای بشیم، بذارید کمی درباره
                  تفاوت‌ها و جذابیت‌های این دو سبک عروسی صحبت کنیم:
                </p>

                <div className="space-y-6">
                  <div className="bg-gray-50 p-5 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold mb-3">عروسی ایرانی</h4>
                    <p>
                      پر از شور و هیجان، با رقص و موسیقی شاد، سفره عقد، شام مفصل
                      ایرانی، و کلی مهمون‌های شاد.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-5 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold mb-3">عروسی فرانسوی</h4>
                    <p>
                      ظرافت، کلاس، سادگی شیک، گل‌آرایی سبک اروپایی، نورپردازی
                      ملایم و لحظاتی پر از احساس.
                    </p>
                  </div>

                  <div className="bg-green-50 p-5 rounded-lg shadow-md border-2 border-green-200">
                    <p className="text-lg font-medium">
                      حالا تصور کن جایی باشه که بتونی هر دو حس رو با هم تجربه
                      کنی؛ از سفره عقد سنتی بگیر تا گل‌آرایی شیک و مینیمال
                      فرانسوی! این همون جاییه که شاتو دو ورسای با تمام توان وارد
                      میشه.
                    </p>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <Link href="/menue">
                    <button className="bg-green text-white hover-btn py-2 px-8 mx-auto rounded-md hover:shadow-2xl transition-transform transform hover:scale-105 text-xl">
                      رزرو تالار عروسی ایرانی-فرانسوی
                    </button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto flex flex-col justify-center items-center my-2 px-1.5 py-1.5   rounded-lg">
                <Image
                  src="/assets/images/152.webp"
                  width={4000}
                  height={4000}
                  alt="تالار عروسی برای عروسی های ایرانی و فرانسوی"
                  className="rounded-lg shadow-lg h-full"
                />
              </div>

              <div className="mx-auto width-auto my-8 px-4 py-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-center mb-6">
                  ویژگی‌های منحصر به فرد تالار شاتو دو ورسای
                </h3>

                <div className="space-y-8">
                  {/* ویژگی 1 */}
                  <div className="bg-gray-50 p-5 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold mb-3">
                      1. طراحی الهام‌گرفته از قصرهای فرانسوی
                    </h4>
                    <p>
                      اولین چیزی که توی شاتو دو ورسای چشم‌تون رو می‌گیره، معماری
                      خاصشه. ستون‌های بلند، سقف‌های تزیین‌شده، لوسترهای
                      کریستالی، و یه حس لاکچری که به محض ورود مهمونا رو میخکوب
                      می‌کنه. یه جورایی انگار وارد یه تکه از پاریس شدی، اونم
                      درست وسط تهران!
                    </p>
                  </div>

                  {/* ویژگی 2 */}
                  <div className="bg-gray-50 p-5 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold mb-3">
                      2. فضاهای چندمنظوره برای انواع مراسم
                    </h4>
                    <p>
                      چه بخواید یه جشن سنتی ایرانی بگیرین با آتیش‌بازی و
                      دف‌نوازی، چه یه مراسم صمیمی فرانسوی با نور شمع و موسیقی
                      کلاسیک، شاتو دو ورسای برای هر دو گزینه آمادگی کامل داره.
                      حتی اگه بخواین مراسم عقد در فضای باز با دکور فرانسوی داشته
                      باشین، ما براتون فراهمش می‌کنیم.
                    </p>
                  </div>

                  {/* ویژگی 3 */}
                  <div className="bg-gray-50 p-5 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold mb-3">
                      3. تیم حرفه‌ای تشریفات
                    </h4>
                    <p>
                      تیم ما تجربه اجرای مراسم‌های مختلف با تم‌های متنوع رو
                      داره. اگه عروس‌و‌داماد ایده‌ای خاص داشته باشن (مثلاً بخوان
                      موسیقی فرانسوی یا سفره عقد مینیمال داشته باشن)، با مشورت و
                      برنامه‌ریزی تبدیلش می‌کنیم به یه اجرای دقیق و بی‌نقص.
                    </p>
                  </div>

                  {/* ویژگی 4 */}
                  <div className="bg-gray-50 p-5 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold mb-3">
                      4. منوی غذایی منعطف و خوشمزه
                    </h4>
                    <p>
                      ما منوی ایرانی داریم با چلوکباب و باقالی‌پلو، ولی می‌تونیم
                      منو رو با سبک اروپایی مثل انواع فینگر فود، دسرهای فرانسوی
                      مثل تارت میوه، ماکارون یا موس شکلاتی و نوشیدنی‌های خاص
                      ترکیب کنیم تا حس یک عروسی خاص رو ایجاد کنیم. باور کنین
                      هیچ‌کس گرسنه از عروسی شما بیرون نمی‌ره!
                    </p>
                  </div>

                  {/* ویژگی 5 */}
                  <div className="bg-gray-50 p-5 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold mb-3">
                      5. لوکیشن دنج و دسترسی آسان
                    </h4>
                    <p>
                      شاتو دو ورسای در احمدآباد مستوفی واقع شده، جایی خلوت، امن
                      و با فضای باز کافی برای عکاسی و فیلم‌برداری. دور از شلوغی
                      شهر، ولی نزدیک به قلب تهرانه! جای پارک برای همه مهمونا
                      فراهمه و دسترسی آسونه.
                    </p>
                  </div>
                </div>
                <div className="mx-auto width-auto my-8 px-4 py-6 bg-white rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-center mb-6">
                    ایده‌هایی برای تم عروسی ترکیبی ایرانی-فرانسوی
                  </h3>

                  <p className="mb-6 text-lg">
                    برای اونایی که می‌خوان یه مراسم خاص و متفاوت برگزار کنن،
                    پیشنهاد می‌کنیم از ترکیب این دو فرهنگ استفاده کنن:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                      <h4 className="text-lg font-bold mb-2">لباس عروس</h4>
                      <p>کت‌و‌دامن گیپوری فرانسوی + تاج سنتی ایرانی</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                      <h4 className="text-lg font-bold mb-2">موسیقی</h4>
                      <p>
                        شروع با پیانو و ویولن فرانسوی، ادامه با گروه سنتی ایرانی
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                      <h4 className="text-lg font-bold mb-2">دکور</h4>
                      <p>
                        میز مهمان با شمع‌های بلند و گل‌های طبیعی سبک اروپایی،
                        سفره عقد سنتی ایرانی با طراحی مدرن
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                      <h4 className="text-lg font-bold mb-2">کیک عروسی</h4>
                      <p>
                        کیک چندطبقه با طراحی کلاسیک و گل‌کاری فرانسوی با طعم‌های
                        ایرانی مثل زعفران یا پسته
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                      <h4 className="text-lg font-bold mb-2">
                        هدایای مهمان‌ها
                      </h4>
                      <p>
                        بسته‌های شیک با عطر و اسانس فرانسوی همراه با نقل ایرانی
                      </p>
                    </div>
                  </div>

                  <div className="my-8">
                    <h3 className="text-xl font-bold mb-4">
                      خدمات ویژه شاتو دو ورسای برای مراسم‌های خاص
                    </h3>
                    <p className="mb-4">
                      شاید بپرسین مگه شاتو دو ورسای خدمات فرانسوی هم داره؟ راستش
                      نه به اون شکل کلاسیک، ولی ما یه چیز مهم‌تر داریم: توانایی
                      خلق تجربه! هر عروسی که تا امروز اینجا برگزار شده، یه
                      داستان منحصربه‌فرد بوده. ما به سلیقه و رویاهای شما گوش
                      می‌دیم و کمک می‌کنیم یه مراسم خلق کنین که ترکیبی باشه از
                      فرهنگ، عشق، و زیبایی.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-5 rounded-lg shadow-md my-8">
                    <h3 className="text-xl font-bold mb-4">
                      سوالات پرتکرار درباره عروسی در شاتو دو ورسای
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold">
                          آیا شاتو دو ورسای برای مراسم‌های کوچک و صمیمی هم
                          مناسبه؟
                        </h4>
                        <p>
                          بله! سالن‌های ما قابلیت شخصی‌سازی دارن و می‌تونیم فضا
                          رو برای مراسم‌های کم‌جمعیت هم به بهترین شکل طراحی
                          کنیم.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold">
                          می‌تونیم تم عروسی خاصی انتخاب کنیم؟
                        </h4>
                        <p>
                          صددرصد! تیم ما آماده‌ست تا با هر تم و سبک خاصی همکاری
                          کنه. چه فرانسوی، چه ایرانی، چه هر چیز دیگه‌ای که در
                          ذهنتونه.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold">
                          خدمات جانبی هم ارائه می‌دید؟ (مثلاً گروه موسیقی یا
                          دی‌جی)
                        </h4>
                        <p>
                          بله، از گروه موسیقی سنتی ایرانی تا دی‌جی حرفه‌ای و حتی
                          موسیقی کلاسیک زنده، همه در پکیج‌های ما قابل انتخابه.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold">قیمت‌ها چطوره؟</h4>
                        <p>
                          شاتو دو ورسای با وجود تمام امکانات لاکچری‌اش، پکیج‌های
                          متنوع و مقرون‌به‌صرفه‌ای داره که با بودجه‌های مختلف
                          سازگاره.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold">
                          امکان تست غذا یا بازدید حضوری وجود داره؟
                        </h4>
                        <p>
                          بله، قبل از مراسم می‌تونین با هماهنگی قبلی از تالار
                          بازدید کنین و طعم غذاها رو تست کنین تا با اطمینان خاطر
                          تصمیم بگیرین.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-8">
                    <Link href="/menue">
                      <button className="bg-green text-white hover-btn py-2 px-8 mx-auto rounded-md hover:shadow-2xl transition-transform transform hover:scale-105 text-xl">
                        مشاوره رایگان برای عروسی ایرانی-فرانسوی
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="mx-auto flex flex-col justify-center items-center my-2 px-1.5 py-1.5   rounded-lg">
                  <Image
                    src="/assets/images/photo_2024-11-16_14-00-54.webp"
                    width={4000}
                    height={4000}
                    alt="تالار عروسی برای عروسی های ایرانی و فرانسوی"
                    className="rounded-lg shadow-lg h-full"
                  />
                </div>
                <div className="mx-auto width-auto my-8 px-4 py-6 bg-white rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-center mb-6">
                    جمع‌بندی: چرا باید شاتو دو ورسای رو انتخاب کنیم؟
                  </h3>

                  <div className="bg-green-50 p-5 rounded-lg shadow-md border-2 border-green-200 mb-6">
                    <p className="text-lg font-medium text-center">
                      در یه کلام: چون خاصه! چون فرق داره! چون شما لایق یه شب
                      رؤیایی هستید که سال‌ها در ذهن مهموناتون بمونه.
                    </p>
                  </div>

                  <p className="mb-6 text-lg">
                    شاتو دو ورسای فقط یه تالار عروسی نیست؛ یه تجربه‌ست، یه
                    خاطره‌ست، یه رؤیاست که قراره واقعی بشه.
                  </p>

                  <p className="mb-8 text-lg">
                    ما توی شاتو دو ورسای، نه‌تنها سبک ایرانی رو با تمام اصالتش
                    حفظ کردیم، بلکه فضایی ساختیم که بتونه الهام‌بخش سبک‌های مدرن
                    و اروپایی باشه. اگه دنبال یه تالار هستی که بتونی عروسی‌تو هم
                    ایرانی برگزار کنی و هم یه حس فرانسوی شیک و کلاس داشته باشه،
                    همین حالا با ما تماس بگیر. تیم ما آماده‌ست تا رؤیای تو رو
                    واقعی کنه.
                  </p>

                  <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
                    <Link href="/menue">
                      <button className="text-black hover-btn py-3 px-8 rounded-md hover:shadow-2xl transition-transform transform hover:scale-105 text-xl w-full md:w-auto flex items-center justify-center gap-2">
                        <span>رزرو تالار</span>
                      </button>
                    </Link>

                    <Link href="/contact">
                      <button className=" text-black hover-btn py-3 px-8 rounded-md hover:shadow-2xl transition-transform transform hover:scale-105 text-xl w-full md:w-auto flex items-center justify-center gap-2">
                        <span>بازدید حضوری</span>
                      </button>
                    </Link>

                    <Link href="tel:+982188888888">
                      <button className="bg-purple-600 text-black hover-btn py-3 px-8 rounded-md hover:shadow-2xl transition-transform transform hover:scale-105 text-xl w-full md:w-auto flex items-center justify-center gap-2">
                        <span>تماس با ما</span>
                      </button>
                    </Link>
                  </div>

                  <p className="text-center mt-6 text-gray-600">
                    برای رزرو و بازدید حضوری از تالار شاتو دو ورسای با ما تماس
                    بگیرید
                  </p>
                </div>

                <div className="text-center mt-8">
                  <Link href="/menue">
                    <button className="bg-green text-white hover-btn py-2 px-8 mx-auto rounded-md hover:shadow-2xl transition-transform transform hover:scale-105 text-xl">
                      رزرو تالار شاتو دو ورسای
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CommentBox blogId={blogId} />
    </>
  );
};
export default Page;
