"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogSchema } from "../../../components/schema/blogSchema";
import CommentBox from "../../../components/commentBox";

const Page = () => {
  const blogId = "how-to-plan-a-luxury-wedding";
  const blogData = {
    title: "تمام چیزهایی که برای یک عروسی لاکچری نیاز دارین: راهنمای کامل با تالار ورسای",
    url: "/how-to-plan-a-luxury-wedding",
    images: [
      "/assets/images/6.webp",
      "/assets/images/134.webp",
      "/assets/images/138.webp",
      "/assets/images/151.webp",
    ],
    sections: [
      {
        heading: "خلاصه مطلب",
        content:
          "این وبلاگ راهنمایی جامع برای برگزاری یک عروسی لاکچری ارائه می‌دهد، با تمرکز بر انتخاب تالار عروسی مناسب. تالار ورسای به عنوان یک گزینه ایده‌آل معرفی شده است، زیرا امکانات و خدمات آن برای خلق یک تجربه مجلل و به‌یادماندنی طراحی شده‌اند. وبلاگ به بررسی عناصر کلیدی یک عروسی لاکچری می‌پردازد، از جمله دکوراسیون خیره‌کننده، لباس‌های شیک، موسیقی و سرگرمی باکیفیت، منوی غذایی شاهانه و خدمات جانبی حرفه‌ای. هر بخش نشان می‌دهد که چگونه تالار ورسای می‌تواند در تحقق این عناصر به عروس و داماد کمک کند.",
      },
      {
        heading: "مقدمه",
        content:
          "تصور کنید لحظه‌ای را که درهای عظیم و باشکوه تالار ورسای با ظرافتی بی‌نظیر باز می‌شوند. شما، عروس و داماد، دست در دست یکدیگر، قدم به فضایی می‌گذارید که انگار از دل رویاهایتان بیرون آمده است. نور لوسترهای کریستالی با درخششی ملایم بر لباس‌های فاخر و خیره‌کننده شما می‌تابد و انعکاس آن در آینه‌های عریض و طلاکوب سالن، جلوه‌ای جادویی به محیط می‌بخشد. مهمانان، مبهوت این شکوه، برای لحظه‌ای نفس‌هایشان را حبس می‌کنند و سپس با لبخندی از تحسین و شگفتی به استقبال شما می‌آیند. این لحظه، نه فقط آغاز یک مراسم، بلکه سرآغاز شبی است که تا ابد در قلب و ذهن همه جاودانه خواهد ماند. روز عروسی، بدون شک، یکی از خاص‌ترین و به‌یادماندنی‌ترین روزهای زندگی هر زوجی است. این روز، فراتر از یک جشن ساده، فرصتی است برای خلق خاطراتی که نسل‌ها نقل خواهند کرد؛ خاطراتی پر از عشق، زیبایی و کمال. تالار ورسای با امکانات بی‌همتا و خدمات حرفه‌ای، بستری ایده‌آل برای تحقق رویاهایتان فراهم می‌کند.",
      },
      {
        heading: "چرا باید عروسیمون لاکچری باشه؟",
        content:
          "عروسی، اون روز خاص زندگیتونه که فقط یه بار اتفاق می‌افته. حالا اگه قراره یه بار باشه، چرا بهترینش نباشه؟ یه عروسی لاکچری یعنی یه شب پر از جزئیات خیره‌کننده، کیفیت بالا، و یه حس شاهانه که نه تنها شما، بلکه مهموناتون هم تا سال‌ها ازش حرف بزنن. تالار ورسای دقیقا همون جاییه که می‌تونه این رویاهاتون رو به واقعیت تبدیل کنه.",
      },
      {
        heading: "بخش 1: انتخاب تالار عروسی - تالار ورسای، قلب مراسم شما",
        content:
          "اولین قدم برای یه عروسی لاکچری، پیدا کردن یه تالار عروسیه که هم شیک باشه، هم امکاناتش حرف نداشته باشه. تالار ورسای با معماری خیره‌کننده، فضای بزرگ، و ورودی مجلل با لوسترهای کریستالی، دقیقا همون چیزیه که دنبالشین. این تالار تا 500 نفر رو راحت جا می‌ده، یه باغ سرسبز برای عکس‌های رویایی داره، و با سیستم صوتی پیشرفته و نورپردازی حرفه‌ای، خیالتون رو از هر بابت راحت می‌کنه.",
        lists: [
          "ورودی مجلل با لوسترهای کریستالی و دکوراسیون لوکس.",
          "باغ سرسبز برای عکاسی و مراسم فضای باز.",
          "سیستم صوتی پیشرفته و پارکینگ اختصاصی برای راحتی مهمانان.",
        ],
      },
      {
        heading: "بخش 2: تزئینات و دکوراسیون - جادوی تالار ورسای",
        content:
          "اگه تالار عروسی قلب مراسمتونه، تزئینات روحشه. تالار ورسای با بهترین طراحان دکوراسیون کار می‌کنه تا مراسمتون رو به یه قصر واقعی تبدیل کنه. از میزهای شام با شمع‌های بلند و گل‌آرایی با گل‌های تازه و کمیاب گرفته تا تم‌های طلایی و سفید با نورپردازی ملایم، همه چی اینجا جادوییه.",
        lists: [
          "طراحی دکوراسیون با توجه به تم دلخواه شما.",
          "استفاده از گل‌های تازه و کمیاب برای گل‌آرایی.",
          "نورپردازی حرفه‌ای برای خلق فضایی جادویی.",
        ],
      },
      {
        heading: "بخش 3: لباس عروس و داماد - درخشش تو شب بزرگ",
        content:
          "لباس عروس و داماد، ستاره‌های عروسین. تالار ورسای با همکاری طراحان معروف و بوتیک‌های درجه یک، بهتون کمک می‌کنه لباس رویاهاتون رو پیدا کنین. از لباس عروس پرنسسی با تور بلند گرفته تا کت و شلوار شیک با پاپیون خاص، همه چی اینجا براتون جوره.",
        lists: [
          "همکاری با طراحان معروف برای لباس‌های سفارشی.",
          "ارتباط با بوتیک‌های لوکس برای انتخاب بهترین مدل‌ها.",
          "مشاوره برای انتخاب لباس متناسب با تم مراسم.",
        ],
      },
      {
        heading: "بخش 4: موسیقی و سرگرمی - رقص و حال با تالار ورسای",
        content:
          "یه عروسی لاکچری بدون موسیقی و سرگرمی، انگار یه کیک بدون شکره! تالار ورسای با بهترین گروه‌های موسیقی زنده و DJهای حرفه‌ای همکاری می‌کنه تا شبتون پر از رقص و شادی باشه. پیست رقص بزرگ و سیستم صوتی خفنش، تضمین می‌کنه که همه مهموناتون تا آخر شب پرانرژی بمونن.",
        lists: [
          "گروه‌های موسیقی زنده و DJهای حرفه‌ای.",
          "پیست رقص بزرگ با سیستم صوتی پیشرفته.",
          "امکان انتخاب پلی‌لیست اختصاصی برای مراسم.",
        ],
      },
      {
        heading: "بخش 5: منوی غذا و نوشیدنی - ضیافتی شاهانه تو تالار ورسای",
        content:
          "غذا، یکی از اون چیزایی که مهموناتون هیچ‌وقت فراموش نمی‌کنن. تالار ورسای با سرآشپزهای معروفش، منوهایی رو آماده می‌کنه که هر سلیقه‌ای رو راضی نگه می‌داره. از پیش‌غذاهای شیک مثل کاناپه‌های میگو تا غذاهای اصلی مثل استیک فیله مینیون و دسرهای لاکچری مثل تیرامیسو، همه چی اینجا با کیفیت درجه یک سرو می‌شه.",
        lists: [
          "منوی متنوع با غذاهای ایرانی و بین‌المللی.",
          "استفاده از مواد اولیه تازه و باکیفیت.",
          "امکان سفارشی‌سازی منو برای ضیافتی شاهانه.",
        ],
      },
      {
        heading: "بخش 6: خدمات جانبی - همه چی با تالار ورسای روبراهه",
        content:
          "تالار ورسای از عکاسی و فیلم‌برداری حرفه‌ای گرفته تا آتش‌بازی و ماشین عروس، همه رو براتون فراهم می‌کنه. تیم عکاسی با تجربه، بهترین لحظه‌های عروسیتون رو ثبت می‌کنه و اگه بخواین آخر شب یه آتش‌بازی خفن داشته باشین، تالار ورسای این رو هم جور می‌کنه.",
        lists: [
          "عکاسی و فیلم‌برداری حرفه‌ای با تجهیزات پیشرفته.",
          "آتش‌بازی و خدمات ماشین عروس لوکس.",
          "هماهنگی کامل برای تمام خدمات جانبی مراسم.",
        ],
      },
      {
        heading: "سوالات متداول درباره عروسی لاکچری در تالار ورسای",
        content:
          "در این بخش به سوالات رایج درباره برگزاری عروسی لاکچری در تالار ورسای پاسخ داده شده تا خیالتون راحت باشه.",
        lists: [
          "هزینه رزرو تالار ورسای چقدره؟ هزینه‌ها بستگی به فصل، تعداد مهمونا، و خدماتی که انتخاب می‌کنین داره. برای قیمت دقیق، با تیم فروش تماس بگیرین.",
          "تالار ورسای چند نفر ظرفیت داره؟ تا 500 نفر رو راحت جا می‌ده، و برای مراسم‌های کوچکتر هم فضاهای دنجی داره.",
          "آیا تالار ورسای خدمات پذیرایی هم داره؟ بله، با سرآشپزهای حرفه‌ای و تیم پذیرایی کاربلد، همه چی آماده‌ست.",
          "چطور می‌تونم تالار ورسای رو رزرو کنم؟ با یه تماس یا مراجعه به وب‌سایت تالار، وقت بازدید بگیرین و قرارداد ببندین.",
          "آیا تالار ورسای برای عکاسی فضای باز داره؟ بله، باغ سرسبز تالار بهترین جا برای عکس‌های رویاییه.",
        ],
      },
      {
        heading: "نتیجه‌گیری: تالار ورسای، کلید عروسی لاکچری شما",
        content:
          "تالار ورسای با فضای خیره‌کننده، امکانات مدرن، و تیم حرفه‌ای، بهترین انتخاب برای یه عروسی به‌یادموندنیه. از انتخاب تالار و دکور گرفته تا لباس، موسیقی، و غذا، تالار ورسای همه چی رو براتون جور می‌کنه تا شما فقط از شبتون لذت ببرین. همین حالا به وب‌سایت تالار ورسای سر بزنین یا تماس بگیرین و قدم اول رو برای عروسی رویاهاتون بردارین.",
      },
    ],
  };

  useEffect(() => {
    document.title = "تمام چیزهایی که برای یک عروسی لاکچری نیاز دارین";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "راهنمای کامل برای برگزاری یک عروسی لاکچری با تالار ورسای. از دکوراسیون خیره‌کننده تا منوی شاهانه، همه چیز برای یک شب رویایی!"
      );
    }
  }, []);

  return (
    <>
      <BlogSchema blogData={blogData} />
      <div className="grid mx-auto grid-cols-1 h-auto p-4" dir="rtl">
        <div className="px-4 mx-auto py-2 rounded-lg my-2 width-full grid grid-cols-1 gap-4">
          <div className="col-span-2 mx-auto width-auto my-2 max-w-5xl rounded-lg">
            <div className="mx-auto flex flex-col justify-center items-center my-2 px-1.5 py-1.5 rounded-lg">
              <Image
                src="/assets/images/6.webp"
                width={4000}
                height={4000}
                alt="how-to-plan-a-luxury-wedding"
                className="rounded-lg shadow-lg h-full"
              />
            </div>
            <div className="mx-auto width-auto my-2 px-1.5 py-1.5 rounded-lg text-center">
              <h1
                className="text-2xl font-bold mx-auto h1-blog-header"
                id="contetTitle"
              >
                تمام چیزهایی که برای یک عروسی لاکچری نیاز دارین: راهنمای کامل با تالار ورسای
              </h1>

              <p className="p-2">
                تصور کنید لحظه‌ای را که درهای عظیم و باشکوه تالار ورسای با ظرافتی بی‌نظیر باز می‌شوند. شما، عروس و داماد، دست در دست یکدیگر، قدم به فضایی می‌گذارید که انگار از دل رویاهایتان بیرون آمده است. نور لوسترهای کریستالی با درخششی ملایم بر لباس‌های فاخر و خیره‌کننده شما می‌تابد و انعکاس آن در آینه‌های عریض و طلاکوب سالن، جلوه‌ای جادویی به محیط می‌بخشد. این لحظه، سرآغاز شبی است که تا ابد جاودانه خواهد ماند.
              </p>
              <p id="contentDiscription" className="text-regular mx-auto mt-2">
                <span className="text-black font-bold mb-3 text-2xl">
                  خلاصه مطلب
                </span>
                <br />
              </p>
              <p className="p-2">
                این وبلاگ راهنمایی جامع برای برگزاری یک عروسی لاکچری ارائه می‌دهد، با تمرکز بر انتخاب تالار عروسی مناسب. تالار ورسای به عنوان یک گزینه ایده‌آل معرفی شده است، زیرا امکانات و خدمات آن برای خلق یک تجربه مجلل و به‌یادماندنی طراحی شده‌اند.
              </p>

              <Link href="/menue">
                <button className="mb-6 bg-green text-white hover-btn py-2 px-8 mx-auto rounded-md hover:shadow-2xl transition-transform transform hover:scale-105 mt-8 text-xl">
                  رزرو تالار ورسای
                </button>
              </Link>

              <div className="mx-auto width-auto my-8 px-4 py-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-center mb-6">
                  قدم‌های کلیدی برای برگزاری یک عروسی لاکچری
                </h3>

                <div className="space-y-8">
                  {/* چرا عروسی لاکچری */}
                  <div className="bg-gray-50 p-5 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold mb-3">
                      چرا باید عروسیمون لاکچری باشه؟
                    </h4>
                    <p className="mb-4">
                      عروسی، اون روز خاص زندگیتونه که فقط یه بار اتفاق می‌افته. یه عروسی لاکچری یعنی یه شب پر از جزئیات خیره‌کننده، کیفیت بالا، و یه حس شاهانه که نه تنها شما، بلکه مهموناتون هم تا سال‌ها ازش حرف بزنن. تالار ورسای دقیقا همون جاییه که می‌تونه این رویاهاتون رو به واقعیت تبدیل کنه.
                    </p>
                  </div>

                  {/* بخش 1 */}
                  <div className="bg-gray-50 p-5 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold mb-3">
                      بخش 1: انتخاب تالار عروسی - تالار ورسای، قلب مراسم شما
                    </h4>
                    <p className="mb-4">
                      اولین قدم برای یه عروسی لاکچری، پیدا کردن یه تالار عروسیه که هم شیک باشه، هم امکاناتش حرف نداشته باشه. تالار ورسای با معماری خیره‌کننده، ورودی مجلل با لوسترهای کریستالی، و باغ سرسبز برای عکس‌های رویایی، دقیقا همون چیزیه که دنبالشین.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg mb-4">
                      <h5 className="font-bold mb-2">چرا تالار ورسای؟</h5>
                      <ul className="list-disc pr-5 space-y-2">
                        <li>ورودی مجلل با لوسترهای کریستالی و دکوراسیون لوکس.</li>
                        <li>باغ سرسبز برای عکاسی و مراسم فضای باز.</li>
                        <li>سیستم صوتی پیشرفته و پارکینگ اختصاصی.</li>
                      </ul>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg">
                      <h5 className="font-bold mb-2">مثال واقعی:</h5>
                      <p>
                        عروسی سارا و محمد تو تالار ورسای برگزار شد. از لحظه ورود مهمونا با دکوراسیون لوکس تا آتش‌بازی آخر شب، همه از شکوه مراسم حرف می‌زدن.
                      </p>
                    </div>
                  </div>

                  {/* بخش 2 */}
                  <div className="bg-gray-50 p-5 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold mb-3">
                      بخش 2: تزئینات و دکوراسیون - جادوی تالار ورسای
                    </h4>
                    <p className="mb-4">
                      تزئینات روح عروسی شماست. تالار ورسای با بهترین طراحان دکوراسیون، مراسمتون رو به یه قصر واقعی تبدیل می‌کنه. از گل‌آرایی با گل‌های تازه تا نورپردازی ملایم، همه چی اینجا جادوییه.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <h5 className="font-bold mb-2">ویژگی‌های دکوراسیون:</h5>
                      <ul className="list-disc pr-5 space-y-2">
                        <li>طراحی دکوراسیون با توجه به تم دلخواه شما.</li>
                        <li>استفاده از گل‌های تازه و کمیاب برای گل‌آرایی.</li>
                        <li>نورپردازی حرفه‌ای برای خلق فضایی جادویی.</li>
                      </ul>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg">
                      <h5 className="font-bold mb-2">مثال واقعی:</h5>
                      <p>
                        تو عروسی نگار و آرش، تیم ورسای با دکور پر از گل‌های ارکیده و کریستال، یه فضای رویایی ساخت که همه مهمونا انگشت به دهن موندن.
                      </p>
                    </div>
                  </div>

                  <div className="mx-auto flex flex-col justify-center items-center my-2 px-1.5 py-1.5 rounded-lg">
                    <Image
                      src="/assets/images/134.webp"
                      width={4000}
                      height={4000}
                      alt="how-to-plan-a-luxury-wedding"
                      className="rounded-lg shadow-lg h-full"
                    />
                  </div>

                  {/* بخش 3 */}
                  <div className="bg-gray-50 p-5 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold mb-3">
                      بخش 3: لباس عروس و داماد - درخشش تو شب بزرگ
                    </h4>
                    <p className="mb-4">
                      لباس عروس و داماد، ستاره‌های عروسین. تالار ورسای با همکاری طراحان معروف و بوتیک‌های درجه یک، بهتون کمک می‌کنه لباس رویاهاتون رو پیدا کنین.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <h5 className="font-bold mb-2">ویژگی‌های لباس ورسای:</h5>
                      <ul className="list-disc pr-5 space-y-2">
                        <li>همکاری با طراحان معروف برای لباس‌های سفارشی.</li>
                        <li>ارتباط با بوتیک‌های لوکس برای بهترین مدل‌ها.</li>
                        <li>مشاوره برای انتخاب لباس متناسب با تم مراسم.</li>
                      </ul>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg">
                      <h5 className="font-bold mb-2">مثال واقعی:</h5>
                      <p>
                        شیما تو عروسیش یه لباس عروس پرنسسی با کار دست از طریق تیم ورسای سفارش داد و مثل یه ملکه می‌درخشید.
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6 p-6 bg-gradient-to-r from-pink-100 to-pink-200 rounded-2xl shadow-md">
                      <p className="text-lg font-semibold text-gray-700">
                        بیشتر بخوانید:
                      </p>
                      <Link
                        href="/how-is-the-hall-rental-in-east-tehran"
                        className="text-blue-700 bg-blue-100 px-6 py-3 rounded-xl hover:bg-blue-200 transition-colors duration-200 text-base font-medium"
                      >
                        اجاره سالن در شرق تهران چگونه است؟
                      </Link>
                    </div>
                  </div>

                  {/* بخش 4 */}
                  <div className="bg-gray-50 p-5 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold mb-3">
                      بخش 4: موسیقی و سرگرمی - رقص و حال با تالار ورسای
                    </h4>
                    <p className="mb-4">
                      موسیقی، حال و هوای مراسم رو می‌سازه. تالار ورسای با گروه‌های موسیقی زنده و DJهای حرفه‌ای، شبتون رو پر از رقص و شادی می‌کنه.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <h5 className="font-bold mb-2">ویژگی‌های موسیقی ورسای:</h5>
                      <ul className="list-disc pr-5 space-y-2">
                        <li>گروه‌های موسیقی زنده و DJهای حرفه‌ای.</li>
                        <li>پیست رقص بزرگ با سیستم صوتی پیشرفته.</li>
                        <li>امکان انتخاب پلی‌لیست اختصاصی برای مراسم.</li>
                      </ul>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg">
                      <h5 className="font-bold mb-2">مثال واقعی:</h5>
                      <p>
                        تو عروسی لیلا و کامران، یه گروه موسیقی زنده و DJ تا صبح همه رو رو پیست رقص نگه داشتن.
                      </p>
                    </div>
                  </div>

                  <div className="mx-auto flex flex-col justify-center items-center my-2 px-1.5 py-1.5 rounded-lg">
                    <Image
                      src="/assets/images/138.webp"
                      width={4000}
                      height={4000}
                      alt="how-to-plan-a-luxury-wedding"
                      className="rounded-lg shadow-lg h-full"
                    />
                  </div>

                  {/* بخش 5 */}
                  <div className="bg-gray-50 p-5 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold mb-3">
                      بخش 5: منوی غذا و نوشیدنی - ضیافتی شاهانه تو تالار ورسای
                    </h4>
                    <p className="mb-4">
                      یه عروسی لاکچری، منوی لاکچری می‌خواد. تالار ورسای با سرآشپزهای معروفش، منوهایی رو آماده می‌کنه که هر سلیقه‌ای رو راضی نگه می‌داره.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <h5 className="font-bold mb-2">ویژگی‌های منوی ورسای:</h5>
                      <ul className="list-disc pr-5 space-y-2">
                        <li>منوی متنوع با غذاهای ایرانی و بین‌المللی.</li>
                        <li>استفاده از مواد اولیه تازه و باکیفیت.</li>
                        <li>امکان سفارشی‌سازی منو برای ضیافتی شاهانه.</li>
                      </ul>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg">
                      <h5 className="font-bold mb-2">مثال واقعی:</h5>
                      <p>
                        تو عروسی تینا و رضا، منوی شاهانه ورسای با ترکیب غذاهای ایرانی و فرنگی، همه رو شگفت‌زده کرد.
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6 p-6 bg-gradient-to-r from-pink-100 to-pink-200 rounded-2xl shadow-md">
                      <p className="text-lg font-semibold text-gray-700">
                        بیشتر بخوانید:
                      </p>
                      <Link
                        href="/how-to-choose-best-garden-hall"
                        className="text-blue-700 bg-blue-100 px-6 py-3 rounded-xl hover:bg-blue-200 transition-colors duration-200 text-base font-medium"
                      >
                        نحوه انتخاب-بهترین-باغ-تالار
                      </Link>
                    </div>
                  </div>

                  {/* بخش 6 */}
                  <div className="bg-gray-50 p-5 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold mb-3">
                      بخش 6: خدمات جانبی - همه چی با تالار ورسای روبراهه
                    </h4>
                    <p className="mb-4">
                      تالار ورسای از عکاسی و فیلم‌برداری حرفه‌ای گرفته تا آتش‌بازی و ماشین عروس، همه رو براتون فراهم می‌کنه.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <h5 className="font-bold mb-2">ویژگی‌های خدمات جانبی:</h5>
                      <ul className="list-disc pr-5 space-y-2">
                        <li>عکاسی و فیلم‌برداری حرفه‌ای با تجهیزات پیشرفته.</li>
                        <li>آتش‌بازی و خدمات ماشین عروس لوکس.</li>
                        <li>هماهنگی کامل برای تمام خدمات جانبی مراسم.</li>
                      </ul>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg">
                      <h5 className="font-bold mb-2">مثال واقعی:</h5>
                      <p>
                        عروسی مهتاب و پارسا با فیلم‌برداری حرفه‌ای و یه آتش‌بازی 10 دقیقه‌ای، به یه خاطره‌ی ابدی تبدیل شد.
                      </p>
                    </div>
                  </div>

                  <div className="mx-auto flex flex-col justify-center items-center my-2 px-1.5 py-1.5 rounded-lg">
                    <Image
                      src="/assets/images/151.webp"
                      width={4000}
                      height={4000}
                      alt="how-to-plan-a-luxury-wedding"
                      className="rounded-lg shadow-lg h-full"
                    />
                  </div>

                  {/* سوالات متداول */}
                  <div className="my-12 bg-gray-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-center mb-6">
                      سوالات متداول درباره عروسی لاکچری در تالار ورسای
                    </h3>
                    <div className="space-y-6">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-lg mb-2">
                          ۱. هزینه رزرو تالار ورسای چقدره؟
                        </h4>
                        <p className="pr-4">
                          هزینه‌ها بستگی به فصل، تعداد مهمونا، و خدماتی که انتخاب می‌کنین داره. برای قیمت دقیق، با تیم فروش تماس بگیرین.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-lg mb-2">
                          ۲. تالار ورسای چند نفر ظرفیت داره؟
                        </h4>
                        <p className="pr-4">
                          تا 500 نفر رو راحت جا می‌ده، و برای مراسم‌های کوچکتر هم فضاهای دنجی داره.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-lg mb-2">
                          ۳. آیا تالار ورسای خدمات پذیرایی هم داره؟
                        </h4>
                        <p className="pr-4">
                          بله، با سرآشپزهای حرفه‌ای و تیم پذیرایی کاربلد، همه چی آماده‌ست.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-lg mb-2">
                          ۴. چطور می‌تونم تالار ورسای رو رزرو کنم؟
                        </h4>
                        <p className="pr-4">
                          با یه تماس یا مراجعه به وب‌سایت تالار، وقت بازدید بگیرین و قرارداد ببندین.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-lg mb-2">
                          ۵. آیا تالار ورسای برای عکاسی فضای باز داره؟
                        </h4>
                        <p className="pr-4">
                          بله، باغ سرسبز تالار بهترین جا برای عکس‌های رویاییه.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* نتیجه‌گیری */}
                  <div className="my-12 bg-gray-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-center mb-6">
                      نتیجه‌گیری: تالار ورسای، کلید عروسی لاکچری شما
                    </h3>
                    <p className="mb-4">
                      تالار ورسای با فضای خیره‌کننده، امکانات مدرن، و تیم حرفه‌ای، بهترین انتخاب برای یه عروسی به‌یادموندنیه. از انتخاب تالار و دکور گرفته تا لباس، موسیقی، و غذا، تالار ورسای همه چی رو براتون جور می‌کنه.
                    </p>
                    <div className="bg-green-100 p-4 rounded-lg mb-4">
                      <p className="font-bold">یه نکته رو فراموش نکن:</p>
                      <p>
                        اگه می‌خوای عروسیت یه خاطره فراموش‌نشدنی بشه، همین حالا تالار ورسای رو رزرو کن. مطمئن باش بهترین تصمیم زندگیت رو گرفتی!
                      </p>
                    </div>
                    <p className="text-center font-bold mt-4">
                      به امید جشن‌های لاکچری و خاطره‌انگیز
                    </p>
                    <div className="text-center mt-6">
                      <Link href="/about">
                        <button className="bg-green text-white hover-btn py-3 px-8 rounded-md hover:shadow-2xl transition-transform transform hover:scale-105 text-xl">
                          همین حالا با تالار ورسای تماس بگیرید
                        </button>
                      </Link>
                    </div>
                  </div>
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