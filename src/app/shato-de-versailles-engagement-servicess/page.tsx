"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogSchema } from "../../../components/schema/blogSchema";
import CommentBox from "../../../components/commentBox";

const Page = () => {
  const blogId = "shato-de-versailles-engagement-servicess";
  const blogData = {
    title: "راهنمای کامل برای زوج‌های جوان",
    url: "/shato-de-versailles-engagement-services",
    images: [
      "/assets/images/138.webp",
      "/assets/images/151.webp",
    ],
    sections: [
      {
        heading: "خلاصه مطلب",
        content:
          "مراسم عقد در ایران معمولاً با همکاری خانواده‌های عروس و داماد برگزار می‌شود. خانواده عروس مسئولیت تالار، سفره عقد و پذیرایی را بر عهده می‌گیرد و خانواده داماد هزینه‌های هدایا و حلقه را. شاتو دو ورسای با دکوراسیون لوکس و خدمات حرفه‌ای، بهترین انتخاب برای یک مراسم رویایی است.",
      },
      {
        heading: "مقدمه",
        content:
          "شاتو دو ورسای با فضای لوکس، دکوراسیون الهام‌گرفته از کاخ‌های اروپایی و تیم حرفه‌ای، مراسم عقد شما را به یک جشن عاشقانه و خاطره‌انگیز تبدیل می‌کند.",
      },
      {
        heading: "چرا مراسم عقد مهم است؟",
        content:
          "مراسم عقد جشنی معنوی برای شروع زندگی مشترک است که با انتخاب تالار مناسب و برنامه‌ریزی دقیق، به تجربه‌ای بی‌نظیر تبدیل می‌شود.",
      },
      {
        heading: "مسئولیت‌های مراسم عقد",
        content:
          "خانواده عروس معمولاً تالار، سفره عقد و پذیرایی را مدیریت می‌کند، در حالی که خانواده داماد هزینه‌های حلقه، هدایا و گاهی موسیقی یا ماشین عروس را بر عهده می‌گیرد.",
      },
      {
        heading: "چرا تالار مناسب مهم است؟",
        content:
          "تالار شاتو دو ورسای با دکوراسیون خیره‌کننده، خدمات کامل و ظرفیت‌های متنوع، مراسم شما را به یک تجربه فراموش‌نشدنی تبدیل می‌کند.",
      },
      {
        heading: "رسم و رسومات مراسم عقد",
        content:
          "سفره عقد، خطبه عقد و هدایا از بخش‌های اصلی مراسم هستند که هر کدام معانی خاص خود را دارند.",
      },
      {
        heading: "نکات برگزاری مراسم بی‌نقص",
        content:
          "برنامه‌ریزی دقیق، انتخاب تالار مناسب و مدیریت بودجه، کلید یک مراسم عقد رویایی است.",
      },
      {
        heading: "چرا شاتو دو ورسای؟",
        content:
          "دکوراسیون لوکس، تیم حرفه‌ای و منوی متنوع، شاتو دو ورسای را به بهترین انتخاب برای مراسم عقد تبدیل کرده است.",
      },
      {
        heading: "نحوه رزرو",
        content:
          "با تماس با شماره 09123314145 یا وب‌سایت شاتو دو ورسای، می‌توانید مراسم خود را رزرو کنید.",
      },
      {
        heading: "سوالات متداول",
        content:
          "اطلاعات کامل درباره هزینه‌ها، خدمات و رزرو مراسم عقد در شاتو دو ورسای.",
      },
      {
        heading: "نتیجه‌گیری",
        content:
          "شاتو دو ورسای با امکانات بی‌نظیر، مراسم عقد شما را به یک شب رویایی تبدیل می‌کند.",
      },
    ],
  };

  useEffect(() => {
    document.title = "مراسم عقد در ایران به عهده کیست؟ راهنمای کامل برای زوج‌های جوان";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "مراسم عقد در ایران با همکاری خانواده‌های عروس و داماد برگزار می‌شود. شاتو دو ورسای با دکوراسیون لوکس و خدمات حرفه‌ای، بهترین انتخاب برای یک مراسم رویایی است. برای رزرو، با 09123314145 تماس بگیرید."
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
                src="/assets/images/138.webp"
                width={4000}
                height={4000}
                alt="shato-de-versailles-engagement-services"
                className="rounded-lg shadow-lg h-full"
              />
            </div>
            <div className="mx-auto width-auto my-2 px-1.5 py-1.5 rounded-lg text-center">
              <h1 className="text-2xl font-bold mx-auto h1-blog-header" id="contetTitle">
                مراسم عقد در ایران به عهده کیست؟ راهنمای کامل برای زوج‌های جوان
              </h1>

              <p className="p-2">
                سلام به همه عروس و دامادهای خوش‌ذوق! اگه تو فکر برگزاری یه مراسم عقد رویایی هستید و دنبال اینید که بدونید تو ایران این مراسم به عهده کیه، جای درستی اومدید!
              </p>
              <p id="contentDiscription" className="text-regular mx-auto mt-2">
                <span className="text-black font-bold mb-3 text-2xl">خلاصه مقاله</span>
                <br />
              </p>
              <p className="p-2">
                مراسم عقد در ایران معمولاً با همکاری خانواده‌های عروس و داماد برگزار می‌شود. خانواده عروس مسئولیت تالار، سفره عقد و پذیرایی را بر عهده می‌گیرد و خانواده داماد هزینه‌های حلقه، هدایا و گاهی موسیقی یا ماشین عروس را. شاتو دو ورسای با دکوراسیون لوکس و خدمات حرفه‌ای، بهترین انتخاب برای یک مراسم رویایی است. برای رزرو و مشاوره، با شماره <a href="tel:09123314145" className="text-blue-700">09123314145</a> تماس بگیرید.
              </p>

              <Link href="/menue">
                <button className="mb-6 bg-green text-white hover-btn py-2 px-8 mx-auto rounded-md hover:shadow-2xl transition-transform transform hover:scale-105 mt-8 text-xl">
                  رزرو شاتو دو ورسای
                </button>
              </Link>

              <div className="mx-auto width-auto my-8 px-4 py-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-center mb-6">
                  چرا شاتو دو ورسای بهترین انتخاب برای مراسم عقد شماست؟
                </h3>

                <div className="space-y-8">
                  {/* مقدمه */}
                  <div className="bg-gray-50 p-5 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold mb-3">مقدمه: رویای یک مراسم عقد لاکچری</h4>
                    <p className="mb-4">
                      اگه تو فکر برگزاری یه مراسم عقد رویایی هستید و دنبال اینید که بدونید تو ایران این مراسم به عهده کیه، جای درستی اومدید! شاتو دو ورسای در احمدآباد مستوفی، با طراحی خیره‌کننده و امکانات VIP، مراسم عقد شما رو به یه جشن عاشقانه تبدیل می‌کنه. برای رزرو و مشاوره رایگان، با شماره <a href="tel:09123314145" className="text-blue-700">09123314145</a> تماس بگیرید!
                    </p>
                  </div>

                  {/* چرا مراسم عقد مهم است؟ */}
                  <div className="bg-gray-50 p-5 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold mb-3">چرا مراسم عقد انقدر مهمه؟</h4>
                    <p className="mb-4">
                      مراسم عقد تو ایران یکی از قشنگ‌ترین و معنوی‌ترین بخش‌های عروسیه. این مراسم جاییه که عروس و داماد به‌صورت رسمی به هم قول زندگی مشترک می‌دن و با یه خطبه عقد، زندگی جدیدشون رو شروع می‌کنن. تو فرهنگ ایرانی، معمولاً مسئولیت برگزاری مراسم عقد به عهده خانواده عروس یا به‌صورت مشترک بین دو خانواده تقسیم می‌شه. اما بسته به شهر و فرهنگ، این مسئولیت‌ها فرق می‌کنه.
                    </p>
                    <div className="bg-green-100 p-4 rounded-lg">
                      <h5 className="font-bold mb-2">یه مثال واقعی</h5>
                      <p>
                        سارا و علی، زوج تهرانی، تصمیم گرفتن مراسم عقدشون رو تو شاتو دو ورسای برگزار کنن. خانواده عروس هزینه تالار و پذیرایی رو تقبل کردن، اما خانواده داماد مسئولیت خرید حلقه و هدایا رو بر عهده گرفتن. این یه مدل رایج تو تهرانه که هر دو طرف یه بخشی از کار رو به عهده می‌گیرن.
                      </p>
                    </div>
                  </div>

                  {/* مسئولیت‌های مراسم عقد */}
                  <div className="bg-gray-50 p-5 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold mb-3">مسئولیت‌های مراسم عقد: کی چیکار می‌کنه؟</h4>
                    <p className="mb-4">
                      تو ایران، رسم و رسومات مراسم عقد خیلی متنوعه و هر منطقه سبک خودش رو داره. اما به‌صورت کلی، مسئولیت‌ها این‌جوری تقسیم می‌شه:
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg mb-4">
                      <h5 className="font-bold mb-2">۱. خانواده عروس: ستون اصلی مراسم</h5>
                      <p className="mb-4">
                        معمولاً خانواده عروس مسئولیت‌های اصلی مثل انتخاب و رزرو تالار، چیدمان سفره عقد و پذیرایی رو بر عهده می‌گیرن. تالار شاتو دو ورسای با دکوراسیون لوکس و فضای رویایی، انتخابی عالی برای این کاره.
                      </p>
                      <ul className="list-disc pr-5 space-y-2">
                        <li><strong>رزرو تالار:</strong> انتخاب یه تالار شیک مثل شاتو دو ورسای که مهمون‌ها رو تحت تأثیر قرار می‌ده.</li>
                        <li><strong>سفره عقد:</strong> چیدمان سفره عقد با آینه، شمعدان و قرآن.</li>
                        <li><strong>پذیرایی:</strong> از شیرینی و میوه گرفته تا شام و نوشیدنی.</li>
                      </ul>
                      <p className="mt-4">
                        نکته: شاتو دو ورسای یه تیم حرفه‌ای داره که از صفر تا صد مراسم رو براتون هماهنگ می‌کنه!
                      </p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg mb-4">
                      <h5 className="font-bold mb-2">۲. خانواده داماد: حمایت و همراهی</h5>
                      <p>
                        خانواده داماد معمولاً هزینه‌های مربوط به خرید حلقه، هدایا و گاهی بخشی از هزینه‌های تالار رو تقبل می‌کنن. تو بعضی شهرها، اونا ماشین عروس یا گروه موسیقی رو هم هماهنگ می‌کنن.
                      </p>
                      <p className="mt-2">
                        مثال: تو مراسم عقد سارا و علی تو شاتو دو ورسای، خانواده داماد هزینه گروه موسیقی و فیلم‌برداری رو پرداخت کردن و یه ماشین کلاسیک برای ورود عروس و داماد هماهنگ کردن.
                      </p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg mb-4">
                      <h5 className="font-bold mb-2">۳. توافقات مشترک</h5>
                      <p>
                        امروزه خیلی از زوج‌ها ترجیح می‌دن هزینه‌ها و مسئولیت‌ها رو بین خودشون و خانواده‌هاشون تقسیم کنن تا فشار مالی روی یه طرف نباشه.
                      </p>
                    </div>
                  </div>

                  {/* چرا تالار مناسب مهم است؟ */}
                  <div className="bg-gray-50 p-5 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold mb-3">چرا انتخاب تالار مناسب انقدر مهمه؟</h4>
                    <p className="mb-4">
                      یه تالار خوب می‌تونه مراسم شما رو از یه مهمونی معمولی به یه خاطره فراموش‌نشدنی تبدیل کنه. شاتو دو ورسای با فضای لوکس، دکوراسیون خیره‌کننده و خدمات حرفه‌ای، حسابی تو دل زوج‌های جوان جا باز کرده.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg mb-4">
                      <h5 className="font-bold mb-2">ویژگی‌های یه تالار رویایی</h5>
                      <ul className="list-disc pr-5 space-y-2">
                        <li><strong>فضای شیک و مدرن:</strong> تالار باید برای عکس و فیلم‌برداری عالی باشه.</li>
                        <li><strong>خدمات کامل:</strong> از پذیرایی تا چیدمان سفره عقد و موسیقی.</li>
                        <li><strong>ظرفیت مناسب:</strong> از مراسم‌های ۵۰ نفره تا جشن‌های ۵۰۰ نفره.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mx-auto flex flex-col justify-center items-center my-2 px-1.5 py-1.5 rounded-lg">
                    <Image
                      src="/assets/images/151.webp"
                      width={4000}
                      height={4000}
                      alt="shato-de-versailles-engagement-services"
                      className="rounded-lg shadow-lg h-full"
                    />
                  </div>

                  {/* رسم و رسومات مراسم عقد */}
                  <div className="bg-gray-50 p-5 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold mb-3">رسم و رسومات مراسم عقد تو ایران</h4>
                    <p className="mb-4">
                      رسم و رسومات مراسم عقد از شهر به شهر فرق می‌کنه، ولی یه سری چیزا همه‌جا مشترکه:
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg mb-4">
                      <h5 className="font-bold mb-2">۱. سفره عقد: قلب مراسم</h5>
                      <p>
                        سفره عقد با آینه، شمعدان، قرآن و نقل و نبات، نمادهای زندگی مشترک رو به نمایش می‌ذاره. تو شاتو دو ورسای، تیم طراحی سفره عقد یه فضای رویایی و مدرن براتون آماده می‌کنه.
                      </p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg mb-4">
                      <h5 className="font-bold mb-2">۲. خطبه عقد</h5>
                      <p>
                        خطبه عقد توسط عاقد خونده می‌شه و می‌تونه با متن‌های شخصی‌سازی‌شده خاص‌تر بشه. مثلاً نگار و رضا تو شاتو دو ورسای یه متن عاشقانه به خطبه اضافه کردن که همه رو به گریه انداخت!
                      </p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg mb-4">
                      <h5 className="font-bold mb-2">۳. هدایا و شیرینی‌خوران</h5>
                      <p>
                        هدایایی مثل حلقه و طلا بین عروس و داماد رد و بدل می‌شه و شیرینی‌خوران حس و حال جشن رو بیشتر می‌کنه.
                      </p>
                    </div>
                  </div>

                  {/* نکات برگزاری مراسم بی‌نقص */}
                  <div className="bg-gray-50 p-5 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold mb-3">چطور یه مراسم عقد بی‌نقص برگزار کنیم؟</h4>
                    <p className="mb-4">
                      برای یه مراسم بی‌نقص، این نکات رو رعایت کنید:
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg mb-4">
                      <h5 className="font-bold mb-2">۱. برنامه‌ریزی دقیق</h5>
                      <ul className="list-disc pr-5 space-y-2">
                        <li>رزرو تالار (مثل شاتو دو ورسای) حداقل ۶ ماه قبل.</li>
                        <li>انتخاب منوی پذیرایی.</li>
                        <li>هماهنگی با عکاس و فیلم‌بردار.</li>
                        <li>طراحی دعوت‌نامه و کارت عروسی.</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg mb-4">
                      <h5 className="font-bold mb-2">۲. انتخاب تالار مناسب</h5>
                      <p>
                        شاتو دو ورسای با سالن‌های متنوع و خدمات VIP، یه انتخاب عالی برای مراسم لوکسه.
                      </p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg mb-4">
                      <h5 className="font-bold mb-2">۳. مدیریت بودجه</h5>
                      <p>
                        بودجه رو مشخص کنید و هزینه‌ها رو با خانواده‌ها تقسیم کنید. شاتو دو ورسای پکیج‌های اقتصادی و لوکس داره.
                      </p>
                    </div>
                  </div>

                  {/* چرا شاتو دو ورسای؟ */}
                  <div className="bg-gray-50 p-5 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold mb-3">چرا شاتو دو ورسای بهترین انتخاب برای مراسم عقده؟</h4>
                    <p className="mb-4">
                      شاتو دو ورسای با ویژگی‌های خاص، مراسم شما رو به یه تجربه بی‌نظیر تبدیل می‌کنه:
                    </p>
                    <ul className="list-disc pr-5 space-y-2">
                      <li><strong>دکوراسیون خیره‌کننده:</strong> لوسترهای کریستالی و دیوارهای الهام‌گرفته از کاخ‌های ورسای.</li>
                      <li><strong>تیم حرفه‌ای:</strong> از هماهنگ‌کننده مراسم تا سرآشپزهای حرفه‌ای.</li>
                      <li><strong>منوی متنوع:</strong> از غذاهای سنتی ایرانی تا منوهای بین‌المللی.</li>
                      <li><strong>فضای عکاسی:</strong> هر گوشه تالار یه لوکیشن عالی برای عکسه.</li>
                    </ul>
                    <p className="mt-4">
                      مثال: مینا و آرش مراسم عقدشون رو تو سالن VIP شاتو دو ورسای با سفره عقد سفید و طلایی برگزار کردن و هنوز مهمون‌هاشون درباره‌ش حرف می‌زنن!
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6 p-6 bg-gradient-to-r from-pink-100 to-pink-200 rounded-2xl shadow-md">
                    <p className="text-lg font-semibold text-gray-700">بیشتر بخوانید:</p>
                    <Link
                      href="/shato-de-versailles-wedding"
                      className="text-blue-700 bg-blue-100 px-6 py-3 rounded-xl hover:bg-blue-200 transition-colors duration-200 text-base font-medium"
                    >
                      چرا ورسای بهترین انتخاب برای عروسی شماست؟
                    </Link>
                  </div>

                  {/* نحوه رزرو */}
                  <div className="bg-gray-50 p-5 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold mb-3">چطور رزرو کنیم؟</h4>
                    <p className="mb-4">
                      کافیه با شماره‌ی تماس تالار یا از طریق وب‌سایت شاتو دو ورسای اقدام کنی. تیم ما آماده‌ست تا یه جلسه مشاوره رایگان برات ترتیب بده و همه‌ی جزئیات رو باهات هماهنگ کنه. پیشنهاد می‌کنیم حداقل ۶ ماه قبل رزرو کنید چون تاریخ‌های پرطرفدار زود پر می‌شن!
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg mb-4">
                      <h5 className="font-bold mb-2">مراحل رزرو:</h5>
                      <ul className="list-disc pr-5 space-y-2">
                        <li><strong>تماس با مشاوران:</strong> با شماره <a href="tel:09123314145" className="text-blue-700">09123314145</a> تماس بگیرید.</li>
                        <li><strong>مشاوره رایگان:</strong> وقت بازدید هماهنگ کنید و با تیم ما صحبت کنید.</li>
                        <li><strong>انتخاب پکیج:</strong> پکیج دلخواه‌تون رو بر اساس بودجه و نیاز انتخاب کنید.</li>
                        <li><strong>رزرو و برنامه‌ریزی:</strong> تاریخ مراسم رو رزرو کنید و ما همه‌چیز رو مدیریت می‌کنیم.</li>
                      </ul>
                    </div>
                  </div>

                  {/* سوالات متداول */}
                  <div className="my-12 bg-gray-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-center mb-6">
                      سوالات متداول درباره مراسم عقد در ایران
                    </h3>
                    <div className="space-y-6">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-lg mb-2">۱. آیا مراسم عقد حتماً باید تو تالار برگزار بشه؟</h4>
                        <p className="pr-4">
                          نه لزوماً! خیلی‌ها مراسم عقد رو تو خونه یا باغ برگزار می‌کنن، ولی تالارهایی مثل شاتو دو ورسای به خاطر خدمات کامل و فضای شیک، انتخاب محبوب‌تری هستن.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-lg mb-2">۲. هزینه مراسم عقد به عهده کیه؟</h4>
                        <p className="pr-4">
                          بستگی به توافق خانواده‌ها داره، ولی معمولاً خانواده عروس هزینه تالار و پذیرایی رو می‌دن و خانواده داماد هزینه هدایا و حلقه رو.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-lg mb-2">۳. چطور می‌تونم تالار شاتو دو ورسای رو رزرو کنم؟</h4>
                        <p className="pr-4">
                          کافیه با تیم شاتو دو ورسای تماس بگیرید یا به وب‌سایتشون سر بزنید. پیشنهاد می‌کنیم حداقل ۶ ماه قبل رزرو کنید چون این تالار خیلی پرطرفداره!
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-lg mb-2">۴. سفره عقد رو کی باید آماده کنه؟</h4>
                        <p className="pr-4">
                          معمولاً خانواده عروس این کار رو می‌کنن، ولی تو شاتو دو ورسای تیم حرفه‌ای طراحی سفره عقد دارن که می‌تونن این کار رو براتون انجام بدن.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-lg mb-2">۵. آیا می‌تونم منوی پذیرایی رو شخصی‌سازی کنم؟</h4>
                        <p className="pr-4">
                          بله! تو شاتو دو ورسای می‌تونید منو رو طبق سلیقه و بودجه‌تون تنظیم کنید.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* نتیجه‌گیری */}
                  <div className="my-12 bg-gray-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-center mb-6">
                      حرف آخر
                    </h3>
                    <p className="mb-4">
                      مراسم عقد تو ایران یه جشن پر از عشق و خاطره‌ست که با یه برنامه‌ریزی درست و انتخاب یه تالار خوب مثل شاتو دو ورسای، می‌تونه به یکی از بهترین لحظات زندگی‌تون تبدیل بشه. با رزرو شاتو دو ورسای، نه‌تنها یه مراسم بی‌نقص خواهید داشت، بلکه مهمون‌هاتون هم تا سال‌ها درباره‌ش حرف می‌زنن. همین حالا با شماره <a href="tel:09123314145" className="text-blue-700">09123314145</a> تماس بگیر و قدم اول رو برای یه شب افسانه‌ای بردار!
                    </p>
                    <div className="bg-green-100 p-4 rounded-lg mb-4">
                      <h5 className="font-bold mb-2">تماس با شاتو:</h5>
                      <p>
                        شماره: <a href="tel:09123314145" className="text-blue-700">09123314145</a>
                        <br />
                        وب‌سایت: <Link href="https://www.kakhversai.ir/" className="text-blue-700">www.kakhversai.ir</Link>
                        <br />
                        آدرس: جنوب غرب تهران - احمدآباد مستوفی
                      </p>
                    </div>
                    <p className="text-center font-bold mt-4">
                      شاتو دو ورسای، جایی که عشق شما به واقعیت تبدیل می‌شود.
                    </p>
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