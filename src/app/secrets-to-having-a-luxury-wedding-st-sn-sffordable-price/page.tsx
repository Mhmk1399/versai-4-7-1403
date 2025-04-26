"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogSchema } from "../../../components/schema/blogSchema";
import CommentBox from "../../../components/commentBox";

const Page = () => {
  const blogId = "secrets-to-having-a-luxury-wedding-st-sn-sffordable-price";
  const blogData = {
    title: "رازهای برگزاری عروسی لوکس با قیمت مناسب",
    url: "/secrets-to-having-a-luxury-wedding-st-sn-sffordable-price",
    images: [
      "/assets/images/bloog12.webp",
      "/assets/images/hall-good-3.webp",
      "/assets/images/Luxurious-hall-and-garden-hall-of-Chateau-de-Versailles.webp",
      "/assets/images/new-image8-kakhversai.webp",
      "/assets/images/182.webp",
    ],
    sections: [
      {
        heading: "مقدمه: چرا «لوکس» همیشه مترادف با «گران» نیست؟",
        content:
          "بسیاری از عروس‌دامادها فکر می‌کنن برای یک شب باشکوه و رویایی باید هزینه‌های میلیاردی بکنن؛ اما واقعیت اینه که با چند ترفند هوشمندانه می‌شه هم کیفیت بالا برد، هم از بودجه‌ش کم نکرد. تو این مقاله قراره با ۹ راز طلایی آشنا بشی که هر مهمانی لوکسی رو ممکن می‌کنه، حتی اگر حساب‌‌کتاب مالی‌ات سر سَرم نباشه! و در نهایت می‌بینی چرا تالار ورسای در احمدآباد مستوفی انتخاب ایده‌آل توئه که هم لاکچره، هم قیمتش معقوله",
      },
      {
        heading: "راز ۱: انتخاب تاریخ «میان‌فصل»؛ کم‌‌هزینه اما خاص",
        content:
          "چرا مهمه؟ اوج فصل و تعطیلات (مثل اردیبهشت، شهریور) نرخ تالار و خدمات موج می‌زنه.",
        lists: [
          "ترفند: تاریخ‌هایی مثل اوایل خرداد یا اواسط مهر که هوا عالیه ولی تقاضا کمتره، تا ۲۰–۳۰٪ تخفیف می‌گیری.",
          "مثال ورسای: تو ورسای پکیج‌های «میان‌فصلی» داریم؛ مراسم عروسی در ۵ ماه از سال شامل ۱۵٪ تخفیف اختصاصی می‌شه—بدون کم شدن کیفیت دکور یا خدمات.",
          "نکته طلایی: روزهای وسط هفته (دوشنبه تا چهارشنبه) حتی در فصل‌های پرطرفدار هم تخفیف‌های ویژه دارند!",
        ],
      },
      {
        heading: "راز ۲: دیزاین هوشمندانه با گل‌های فصلی",
        content:
          "کلید ماجرا: استفاده از گل‌های فصلی داخلی به‌جای گل‌های وارداتی گرون.",
        lists: [
          "ترفند: گلای بهاره (لاله، میخک، آلسترومریا) یا پاییزی (آفتابگردان، داوودی) هم هزینه رو می‌کاهند، هم رنگ و جلوه‌ی قشنگی می‌دن.",
          "نکته ورسای: گلفروشی طرف قرارداد با قیمت عمده و گل‌های کاملاً تازه؛ دکور سالن و باغ رو با ترکیب فصلی آرایش می‌کنن تا حس بهاری یا پاییزی رو منتقل کنه، اما هزینه‌ت نصف گل وارداتی باشه.",
          "ایده خلاقانه: ترکیب گل‌های طبیعی با شاخه‌های تزئینی و شمع‌های LED، هم زیبایی رو دوچندان می‌کنه، هم هزینه رو کاهش میده.",
        ],
      },
      {
        heading: "راز ۳: منوی «بوفه به‌صرفه» با طعم شخصی‌شده",
        content:
          "چرا مهمه؟ منوی آلاکارته (سفارش به ازای هر پرس) معمولاً هزینه‌ی واحد بالاتری داره.",
        lists: [
          "ترفند: منوی بوفه سرد و گرم با گزینه‌های منتخب در اندازه‌های معقول انتخاب کن؛ با چیدمان زیبا و پیش‌غذاهای کوچیک.",
          "قابلیت ورسای: کیترینگ لایو فقط روی یک ایستگاه (مثلاً پاستا یا سوشی) پیاده می‌شه و بقیه‌ی غذاها بوفه‌ای هست. ترکیب این دو سرویس، هم حس «لایو» و خاص داره، هم هزینه‌ی کل رو کنترل می‌کنه.",
          "تجربه مهمان‌ها: یکی از مهمون‌ها می‌گفت: «ایستگاه پاستای زنده با سس‌های مختلف، حس یک رستوران ۵ ستاره رو داشت، اما وقتی فهمیدم قیمتش چقدر معقوله، باورم نمی‌شد!»",
        ],
      },
      {
        heading: "راز ۴: استفاده مجدد و هوشمند از المان‌ها",
        content:
          "ایده: تزئیناتی مثل شمع‌های LED، آینه‌های اجاره‌ای، و حروف نورانی رو بعد از مراسم اول استفاده کن.",
        lists: [
          "ترفند ورسای: بسیاری از المان‌های دکوری سالن و باغ به‌صورت قراردادی و اجاره‌ای هستند؛ هزینه‌ی اولیه کمتر و می‌تونی برای مراسم دیگه یا دوستانت هم استفاده‌شون کنی.",
          "نکته اقتصادی: با اجاره کردن به جای خرید، تا ۶۰٪ در هزینه‌های دکوراسیون صرفه‌جویی کنید. بعلاوه، نگرانی نگهداری و انبار کردن وسایل بعد از مراسم هم نخواهید داشت!",
        ],
      },
      {
        heading: "راز ۵: بسته‌‌بندی و پذیرایی مقرون‌به‌صرفه ولی شیک",
        content:
          "کلید: به‌جای پک‌های پذیرایی تک‌بار مصرف گران‌قیمت، می‌تونی از گیفت‌های کوچک و کاربردی مثل بسته‌ قهوه یا شکلات‌های سفارشی‌شده استفاده کنی.",
        lists: [
          "ترفند: طراحی جعبه با لوگوی ورسای، یک یادگاری جذاب و اقتصادی می‌سازه.",
          "نمونه ورسای: پک‌های پذیرایی ورسای شامل یک شیشه مربای خانگی و یک شکلات دست‌ساز هست که هم هزینه‌ش کمتر از لوازم یک‌‌بارمصرفه، هم خاطره‌انگیزتره.",
          'بازخورد مهمان‌ها: "شیشه مربای کوچک با برچسب اسم عروس و داماد رو هنوز نگه داشتم و هر بار که ازش استفاده می‌کنم، یاد اون شب قشنگ می‌افتم."',
        ],
      },
      {
        heading: "راز ۶: موسیقی هوشمندانه—دی‌جی ترکیبی",
        content: "چرا؟ استخدام یک گروه موسیقی زنده تمام‌وقت حسابی گرونه.",
        lists: [
          "ترفند: بخش‌هایی از مراسم (مثل ورود عروس‌وداماد یا رقص اول) رو با گروه زنده یا نوازنده‌ی تک‌نواز بپوشون و بقیه‌ی ساعات رو با دی‌جی حرفه‌ای بگذار.",
          "کار در ورسای: برای ورود، یک نوازنده‌ی کمانچه یا پیانو چیست دعوت می‌کنیم و پس از آن، دی‌جی تا پایان مراسم ادامه می‌ده؛ هزینه ترکیبی در مقایسه با گروه کامل هنوز کمتره، اما جلوه‌ی لوکس حفظ می‌شه.",
          "پیشنهاد ویژه: برای لحظات خاص مثل بریدن کیک، یک نوازنده ویولن یا سنتور می‌تونه فضا رو کاملاً رمانتیک کنه، بدون نیاز به هزینه کردن برای یک گروه کامل در تمام طول مراسم.",
        ],
      },
      {
        heading: "راز ۷: بسته‌های «همکاری چندگانه»—آژانس همه‌کاره!",
        content:
          "اصل ماجرا: وقتی همه‌ی خدمات (عکاسی، فیلم‌برداری، کیترینگ، گل‌آرایی) رو از یک آژانس یا مجموعه می‌گیری، تخفیف جمعی می‌گیری.",
        lists: [
          "ترفند: تالارهایی که پکیج‌های کاملاً یکپارچه ارائه می‌دن (مثل ورسای) معمولاً قیمت‌ پایین‌تری نسبت به جمع مجزای خدمات دارند.",
          "ورسای چجوریه؟: پکیج کاملِ ورسای شامل سالن + باغ + کیترینگ + تیم تشریفات + گل‌آرایی + دی‌جی + اتاق VIP با قیمت ویژه‌ست. حتی اگر جداگانه هم بخوای، مجموع قیمت‌ها همیشه از بیرون ارزون‌تر درمیاد.",
          'مقایسه هزینه: یکی از زوج‌های ما تعریف می‌کرد: "وقتی قیمت‌های جداگانه رو جمع زدیم، دیدیم پکیج کامل ورسای حدود ۳۰٪ ارزون‌تر از گرفتن همه خدمات به‌صورت مجزاست. تازه هماهنگی بین تیم‌ها هم خیلی بهتر بود."',
        ],
      },
      {
        heading: "راز ۸: دعوت دیجیتال هوشمندانه و پخش زنده مراسم",
        content:
          "دیگه دوران کارت و کاغذ پرتی تموم شده! با دعوت‌نامه‌های دیجیتال، نه فقط هزینه چاپ و پست کم می‌شه، بلکه می‌تونی لینک پخش زنده مراسم رو هم داخلش بفرستی.",
        lists: [
          "ترفند ورسای: سیستم اختصاصی RSVP آنلاین داریم که مهمونا با یک کلیک حضورشون رو تأیید می‌کنن و شما دقیقاً می‌دونی چند نفر میان.",
        ],
      },
    ],
  };

  useEffect(() => {
    document.title = "تالار رویایی چیه؟ این 9 نکته رو بدونی، دیگه خیالت راحته";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "با کشف رازهای برگزاری یک عروسی لوکس با بودجه معقول، از انتخاب زمان و مکان هوشمند تا ترفندهای دکور و پذیرایی شیک بدون هزینه‌ی اضافی لذت ببرید"
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
                src="/assets/images/bloog12.webp"
                width={4000}
                height={4000}
                alt="دکوراسیون لوکس عروسی با هزینه کم"
                className="rounded-lg shadow-lg h-full"
              />
            </div>
            <div className="mx-auto width-auto my-2 px-1.5 py-1.5 rounded-lg text-center">
              <h1
                className="text-2xl font-bold mx-auto h1-blog-header"
                id="contetTitle"
              >
                رازهای برگزاری عروسی لوکس با قیمت مناسب؛ 9 ترفند ساده تا شبی
                شاهانه با بودجه‌ای معقول!
              </h1>
              <br />
              <span className="text-xl mx-auto h1-blog-header">
                رازهای برگزاری عروسی لوکس با قیمت مناسب{" "}
              </span>
              <br />
              <br />

              <p id="contentDiscription" className="text-regular mx-auto mt-2">
                <span className="text-black font-bold mb-3 text-2xl">
                  مقدمه: چرا «لوکس» همیشه مترادف با «گران» نیست؟
                </span>
                <br />
              </p>
              <p className="p-2">
                بسیاری از عروس‌دامادها فکر می‌کنن برای یک شب باشکوه و رویایی
                باید هزینه‌های میلیاردی بکنن؛ اما واقعیت اینه که با چند ترفند
                هوشمندانه می‌شه هم کیفیت بالا برد، هم از بودجه‌ش کم نکرد. تو این
                مقاله قراره با ۷ راز طلایی آشنا بشی که هر مهمانی لوکسی رو ممکن
                می‌کنه، حتی اگر حساب‌‌کتاب مالی‌ات سر سَرم نباشه! و در نهایت
                می‌بینی چرا تالار ورسای در احمدآباد مستوفی انتخاب ایده‌آل توئه
                که هم لاکچره، هم قیمتش معقوله
              </p>

              <Link href="/menue">
                <button className="mb-6 bg-green text-white hover-btn py-2 px-8 mx-auto rounded-md hover:shadow-2xl transition-transform transform hover:scale-105 mt-8 text-xl">
                  رزرو سالن عقد شاتو دو ورسای
                </button>
              </Link>
              {/* راز های اصلی برگزاری عروسی لوکس با قیمت مناسب */}
              <div className="bg-white p-5 rounded-lg shadow-md mb-8">
                <h3 className="text-2xl font-bold text-center mb-6">
                  رازهای اصلی برگزاری عروسی لوکس با قیمت مناسب
                </h3>

                {/* راز 1 */}
                <div className="bg-gray-50 p-5 rounded-lg shadow-md mb-6">
                  <h4 className="text-xl font-bold mb-3">
                    راز ۱: انتخاب تاریخ «میان‌فصل»؛ کم‌‌هزینه اما خاص
                  </h4>
                  <p className="mb-4">
                    چرا مهمه؟ اوج فصل و تعطیلات (مثل اردیبهشت، شهریور) نرخ تالار
                    و خدمات موج می‌زنه.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-white p-3 rounded-md shadow">
                      <h5 className="font-bold mb-2">ترفند</h5>
                      <p>
                        تاریخ‌هایی مثل اوایل خرداد یا اواسط مهر که هوا عالیه ولی
                        تقاضا کمتره، تا ۲۰–۳۰٪ تخفیف می‌گیری.
                      </p>
                    </div>

                    <div className="bg-white p-3 rounded-md shadow">
                      <h5 className="font-bold mb-2">مثال ورسای</h5>
                      <p>
                        تو ورسای پکیج‌های «میان‌فصلی» داریم؛ مراسم عروسی در ۵
                        ماه از سال شامل ۱۵٪ تخفیف اختصاصی می‌شه—بدون کم شدن
                        کیفیت دکور یا خدمات.
                      </p>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-md mt-4 border-r-4 border-green-300">
                    <h5 className="font-bold mb-2">نکته طلایی</h5>
                    <p>
                      روزهای وسط هفته (دوشنبه تا چهارشنبه) حتی در فصل‌های
                      پرطرفدار هم تخفیف‌های ویژه دارند!
                    </p>
                  </div>
                </div>

                {/* راز 2 */}
                <div className="bg-gray-50 p-5 rounded-lg shadow-md mb-6">
                  <h4 className="text-xl font-bold mb-3">
                    راز ۲: دیزاین هوشمندانه با گل‌های فصلی
                  </h4>
                  <p className="mb-4">
                    کلید ماجرا: استفاده از گل‌های فصلی داخلی به‌جای گل‌های
                    وارداتی گرون.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-white p-3 rounded-md shadow">
                      <h5 className="font-bold mb-2">ترفند</h5>
                      <p>
                        گلای بهاره (لاله، میخک، آلسترومریا) یا پاییزی
                        (آفتابگردان، داوودی) هم هزینه رو می‌کاهند، هم رنگ و
                        جلوه‌ی قشنگی می‌دن.
                      </p>
                    </div>

                    <div className="bg-white p-3 rounded-md shadow">
                      <h5 className="font-bold mb-2">نکته ورسای</h5>
                      <p>
                        گلفروشی طرف قرارداد با قیمت عمده و گل‌های کاملاً تازه؛
                        دکور سالن و باغ رو با ترکیب فصلی آرایش می‌کنن تا حس
                        بهاری یا پاییزی رو منتقل کنه، اما هزینه‌ت نصف گل وارداتی
                        باشه.
                      </p>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-md mt-4 border-r-4 border-green-300">
                    <h5 className="font-bold mb-2">ایده خلاقانه</h5>
                    <p>
                      ترکیب گل‌های طبیعی با شاخه‌های تزئینی و شمع‌های LED، هم
                      زیبایی رو دوچندان می‌کنه، هم هزینه رو کاهش میده.
                    </p>
                  </div>
                </div>

                {/* راز 3 */}
                <div className="bg-gray-50 p-5 rounded-lg shadow-md mb-6">
                  <h4 className="text-xl font-bold mb-3">
                    راز ۳: منوی «بوفه به‌صرفه» با طعم شخصی‌شده
                  </h4>
                  <p className="mb-4">
                    چرا مهمه؟ منوی آلاکارته (سفارش به ازای هر پرس) معمولاً
                    هزینه‌ی واحد بالاتری داره.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-white p-3 rounded-md shadow">
                      <h5 className="font-bold mb-2">ترفند</h5>
                      <p>
                        منوی بوفه سرد و گرم با گزینه‌های منتخب در اندازه‌های
                        معقول انتخاب کن؛ با چیدمان زیبا و پیش‌غذاهای کوچیک.
                      </p>
                    </div>

                    <div className="bg-white p-3 rounded-md shadow">
                      <h5 className="font-bold mb-2">قابلیت ورسای</h5>
                      <p>
                        کیترینگ لایو فقط روی یک ایستگاه (مثلاً پاستا یا سوشی)
                        پیاده می‌شه و بقیه‌ی غذاها بوفه‌ای هست. ترکیب این دو
                        سرویس، هم حس «لایو» و خاص داره، هم هزینه‌ی کل رو کنترل
                        می‌کنه.
                      </p>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-md mt-4 border-r-4 border-green-300">
                    <h5 className="font-bold mb-2">تجربه مهمان‌ها</h5>
                    <p>
                      یکی از مهمون‌ها می‌گفت: «ایستگاه پاستای زنده با سس‌های
                      مختلف، حس یک رستوران ۵ ستاره رو داشت، اما وقتی فهمیدم
                      قیمتش چقدر معقوله، باورم نمی‌شد!»
                    </p>
                  </div>
                </div>
              </div>

              <div className="mx-auto flex flex-col justify-center items-center my-2 px-1.5 py-1.5   rounded-lg">
                <Image
                  src="/assets/images/hall-good-3.webp"
                  width={4000}
                  height={4000}
                  alt="دکوراسیون لوکس عروسی با هزینه کم"
                  className="rounded-lg shadow-lg h-full"
                />
              </div>
              {/* راز 4 */}
              <div className="bg-gray-50 p-5 rounded-lg shadow-md mb-6">
                <h4 className="text-xl font-bold mb-3">
                  راز ۴: استفاده مجدد و هوشمند از المان‌ها
                </h4>
                <p className="mb-4">
                  ایده: تزئیناتی مثل شمع‌های LED، آینه‌های اجاره‌ای، و حروف
                  نورانی رو بعد از مراسم اول استفاده کن.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white p-3 rounded-md shadow md:col-span-2">
                    <h5 className="font-bold mb-2">ترفند ورسای</h5>
                    <p>
                      بسیاری از المان‌های دکوری سالن و باغ به‌صورت قراردادی و
                      اجاره‌ای هستند؛ هزینه‌ی اولیه کمتر و می‌تونی برای مراسم
                      دیگه یا دوستانت هم استفاده‌شون کنی.
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-md mt-4 border-r-4 border-green-300">
                  <h5 className="font-bold mb-2">نکته اقتصادی</h5>
                  <p>
                    با اجاره کردن به جای خرید، تا ۶۰٪ در هزینه‌های دکوراسیون
                    صرفه‌جویی کنید. بعلاوه، نگرانی نگهداری و انبار کردن وسایل
                    بعد از مراسم هم نخواهید داشت!
                  </p>
                </div>
              </div>

              {/* راز 5 */}
              <div className="bg-gray-50 p-5 rounded-lg shadow-md mb-6">
                <h4 className="text-xl font-bold mb-3">
                  راز ۵: بسته‌‌بندی و پذیرایی مقرون‌به‌صرفه ولی شیک
                </h4>
                <p className="mb-4">
                  کلید: به‌جای پک‌های پذیرایی تک‌بار مصرف گران‌قیمت، می‌تونی از
                  گیفت‌های کوچک و کاربردی مثل بسته‌ قهوه یا شکلات‌های سفارشی‌شده
                  استفاده کنی.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white p-3 rounded-md shadow">
                    <h5 className="font-bold mb-2">ترفند</h5>
                    <p>
                      طراحی جعبه با لوگوی ورسای، یک یادگاری جذاب و اقتصادی
                      می‌سازه.
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded-md shadow">
                    <h5 className="font-bold mb-2">نمونه ورسای</h5>
                    <p>
                      پک‌های پذیرایی ورسای شامل یک شیشه مربای خانگی و یک شکلات
                      دست‌ساز هست که هم هزینه‌ش کمتر از لوازم یک‌‌بارمصرفه، هم
                      خاطره‌انگیزتره.
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-md mt-4 border-r-4 border-green-300">
                  <h5 className="font-bold mb-2">بازخورد مهمان‌ها</h5>
                  <p>
                    شیشه مربای کوچک با برچسب اسم عروس و داماد رو هنوز نگه داشتم
                    و هر بار که ازش استفاده می‌کنم، یاد اون شب قشنگ می‌افتم.
                  </p>
                </div>
              </div>

              {/* راز 6 */}
              <div className="bg-gray-50 p-5 rounded-lg shadow-md mb-6">
                <h4 className="text-xl font-bold mb-3">
                  راز ۶: موسیقی هوشمندانه—دی‌جی ترکیبی
                </h4>
                <p className="mb-4">
                  چرا؟ استخدام یک گروه موسیقی زنده تمام‌وقت حسابی گرونه.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white p-3 rounded-md shadow">
                    <h5 className="font-bold mb-2">ترفند</h5>
                    <p>
                      بخش‌هایی از مراسم (مثل ورود عروس‌وداماد یا رقص اول) رو با
                      گروه زنده یا نوازنده‌ی تک‌نواز بپوشون و بقیه‌ی ساعات رو با
                      دی‌جی حرفه‌ای بگذار.
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded-md shadow">
                    <h5 className="font-bold mb-2">کار در ورسای</h5>
                    <p>
                      برای ورود، یک نوازنده‌ی کمانچه یا پیانو چیست دعوت می‌کنیم
                      و پس از آن، دی‌جی تا پایان مراسم ادامه می‌ده؛ هزینه ترکیبی
                      در مقایسه با گروه کامل هنوز کمتره، اما جلوه‌ی لوکس حفظ
                      می‌شه.
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-md mt-4 border-r-4 border-green-300">
                  <h5 className="font-bold mb-2">پیشنهاد ویژه</h5>
                  <p>
                    برای لحظات خاص مثل بریدن کیک، یک نوازنده ویولن یا سنتور
                    می‌تونه فضا رو کاملاً رمانتیک کنه، بدون نیاز به هزینه کردن
                    برای یک گروه کامل در تمام طول مراسم.
                  </p>
                </div>
              </div>

              <div className="mx-auto flex flex-col justify-center items-center my-2 px-1.5 py-1.5   rounded-lg">
                <Image
                  src="/assets/images/Luxurious-hall-and-garden-hall-of-Chateau-de-Versailles.webp"
                  width={4000}
                  height={4000}
                  alt="تالار رویایی"
                  className="rounded-lg shadow-lg h-full"
                />
              </div>
              {/* راز 7 */}
              <div className="bg-gray-50 p-5 rounded-lg shadow-md mb-6">
                <h4 className="text-xl font-bold mb-3">
                  راز ۷: بسته‌های «همکاری چندگانه»—آژانس همه‌کاره!
                </h4>
                <p className="mb-4">
                  اصل ماجرا: وقتی همه‌ی خدمات (عکاسی، فیلم‌برداری، کیترینگ،
                  گل‌آرایی) رو از یک آژانس یا مجموعه می‌گیری، تخفیف جمعی
                  می‌گیری.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white p-3 rounded-md shadow">
                    <h5 className="font-bold mb-2">ترفند</h5>
                    <p>
                      تالارهایی که پکیج‌های کاملاً یکپارچه ارائه می‌دن (مثل
                      ورسای) معمولاً قیمت‌ پایین‌تری نسبت به جمع مجزای خدمات
                      دارند.
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded-md shadow">
                    <h5 className="font-bold mb-2">ورسای چجوریه؟</h5>
                    <p>
                      پکیج کاملِ ورسای شامل سالن + باغ + کیترینگ + تیم تشریفات +
                      گل‌آرایی + دی‌جی + اتاق VIP با قیمت ویژه‌ست. حتی اگر
                      جداگانه هم بخوای، مجموع قیمت‌ها همیشه از بیرون ارزون‌تر
                      درمیاد.
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-md mt-4 border-r-4 border-green-300">
                  <h5 className="font-bold mb-2">مقایسه هزینه</h5>
                  <p>
                    یکی از زوج‌های ما تعریف می‌کرد: وقتی قیمت‌های جداگانه رو
                    جمع زدیم، دیدیم پکیج کامل ورسای حدود ۳۰٪ ارزون‌تر از گرفتن
                    همه خدمات به‌صورت مجزاست. تازه هماهنگی بین تیم‌ها هم خیلی
                    بهتر بود.
                  </p>
                </div>
              </div>

              {/* راز 8 */}
              <div className="bg-gray-50 p-5 rounded-lg shadow-md mb-6">
                <h4 className="text-xl font-bold mb-3">
                  راز ۸: دعوت دیجیتال هوشمندانه و پخش زنده مراسم
                </h4>
                <p className="mb-4">
                  دیگه دوران کارت و کاغذ پرتی تموم شده! با دعوت‌نامه‌های
                  دیجیتال، نه فقط هزینه چاپ و پست کم می‌شه، بلکه می‌تونی لینک
                  پخش زنده مراسم رو هم داخلش بفرستی.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white p-3 rounded-md shadow">
                    <h5 className="font-bold mb-2">ترفند ورسای</h5>
                    <p>
                      سیستم اختصاصی RSVP آنلاین داریم که مهمونا با یک کلیک
                      حضورشون رو تأیید می‌کنن و شما دقیقاً می‌دونی چند نفر میان.
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded-md shadow">
                    <h5 className="font-bold mb-2">پخش زنده مراسم</h5>
                    <p>
                      برای مهمون‌هایی که خارج از تهران هستن یا رفیق و فامیل
                      دوردست دارن، می‌شه مراسم رو با کیفیت HD پخش کرد. هزینه
                      تهیه دوربین و استریم معمولاً کمتر از کرایه دستگاه‌های
                      اضافیه و خاطره‌سازی دیجیتال رو تضمین می‌کنه.
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-md mt-4 border-r-4 border-green-300">
                  <h5 className="font-bold mb-2">صرفه‌جویی واقعی</h5>
                  <p>
                    با حذف کارت‌های کاغذی و استفاده از دعوت دیجیتال، یک عروسی
                    ۲۰۰ نفره می‌تونه تا ۲ میلیون تومان در هزینه‌های چاپ و ارسال
                    صرفه‌جویی کنه. علاوه بر این، امکان ردیابی پاسخ‌ها به شما کمک
                    می‌کنه تعداد دقیق مهمان‌ها رو بدونید و در هزینه‌های پذیرایی
                    صرفه‌جویی کنید.
                  </p>
                </div>
              </div>

              {/* راز 9 */}
              <div className="bg-gray-50 p-5 rounded-lg shadow-md mb-6">
                <h4 className="text-xl font-bold mb-3">
                  راز ۹: عکاسی و فیلم‌برداری مقرون‌به‌صرفه با ژورنال دیجیتال
                </h4>
                <p className="mb-4">
                  چاپ آلبوم‌های سنگین هزینه‌بره. با ژورنال دیجیتال، عکس‌ها و
                  کلیپ‌ها روی یک USB استیل یا درایو ابری در اختیارت قرار
                  می‌گیره.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white p-3 rounded-md shadow md:col-span-2">
                    <h5 className="font-bold mb-2">مزیت</h5>
                    <p>
                      مهمونا هم می‌تونن آلبوم دیجیتال رو دریافت کنن و شما هزینه
                      چاپ و صحافی رو حذف می‌کنی.
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-md mt-4 border-r-4 border-green-300">
                  <h5 className="font-bold mb-2">پیشنهاد ورسای</h5>
                  <p>
                    در ورسای، یک فلش مموری طلایی با لوگوی شخصی‌سازی شده عروس و
                    داماد، حاوی تمام عکس‌ها و فیلم‌ها با کیفیت اصلی به همراه یک
                    نسخه ویرایش شده و یک کلیپ کوتاه ۵ دقیقه‌ای برای اشتراک‌گذاری
                    در شبکه‌های اجتماعی ارائه می‌دهیم. این پکیج تا ۵۰٪ ارزان‌تر
                    از آلبوم‌های چاپی سنتی است.
                  </p>
                </div>
              </div>

              <div className="mx-auto flex flex-col justify-center items-center my-2 px-1.5 py-1.5   rounded-lg">
                <Image
                  src="/assets/images/new-image8-kakhversai.webp"
                  width={4000}
                  height={4000}
                  alt="تالار رویایی"
                  className="rounded-lg shadow-lg h-full"
                />
              </div>
              {/* چرا تالار ورسای بهترین انتخاب است */}
              <div className="bg-white p-5 rounded-lg shadow-md mb-8">
                <h3 className="text-2xl font-bold text-center mb-6">
                  چرا «تالار ورسای» بهترین انتخاب برای عروسی لوکس اما
                  مقرون‌به‌صرفه‌ست؟
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                  <div className="bg-gray-50 p-4 rounded-lg shadow">
                    <div className="flex items-center mb-3">
                      <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
                        <span>1</span>
                      </div>
                      <h4 className="font-bold">پکیج میان‌فصل</h4>
                    </div>
                    <p>
                      ۱۵٪ تخفیف برای تاریخ‌هایی که هم هوا عالیه، هم قیمتا
                      شکسته‌تر.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg shadow">
                    <div className="flex items-center mb-3">
                      <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
                        <span>2</span>
                      </div>
                      <h4 className="font-bold">گل‌آرایی فصلی</h4>
                    </div>
                    <p>
                      گل‌آرایی با گل‌های تازه‌ی فصلی از گل‌فروشی‌های عمده در
                      احمدآباد مستوفی—ظاهری شاهانه با نصف قیمت.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg shadow">
                    <div className="flex items-center mb-3">
                      <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
                        <span>3</span>
                      </div>
                      <h4 className="font-bold">کیترینگ ترکیبی</h4>
                    </div>
                    <p>
                      کیترینگ ترکیبی لایو + بوفه برای جذابیت بیشتر و هزینه کمتر
                      از منوی تمام سفارشی.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg shadow">
                    <div className="flex items-center mb-3">
                      <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
                        <span>4</span>
                      </div>
                      <h4 className="font-bold">موسیقی ترکیبی</h4>
                    </div>
                    <p>
                      دی‌جی + نوازنده‌ی تک‌نواز برای بالا بردن کیفیت مراسم بدون
                      استخدام گروه کامل.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg shadow md:col-span-2 lg:col-span-2">
                    <div className="flex items-center mb-3">
                      <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
                        <span>5</span>
                      </div>
                      <h4 className="font-bold">
                        پکیج کامل «همه‌چیز در یک‌جا»
                      </h4>
                    </div>
                    <p>
                      پکیج کامل «همه‌چیز در یک‌جا» با قیمت جمع‌شده‌ای که همیشه
                      از جمع خدمات مجزا پایین‌تره.
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 p-5 rounded-md mt-6 border-r-4 border-green-300">
                  <h4 className="font-bold text-lg mb-2">
                    تجربه واقعی مشتریان
                  </h4>
                  <p className="italic">
                    وقتی فهمیدیم می‌تونیم با بودجه‌ای که داریم یک عروسی لوکس
                    توی ورسای برگزار کنیم، باورمون نمی‌شد! همه مهمون‌ها فکر
                    می‌کردن ما دو برابر هزینه کردیم. ترکیب پکیج میان‌فصل با
                    کیترینگ ترکیبی واقعاً معجزه کرد.
                  </p>
                  <p className="text-right mt-2 font-bold">
                    — سارا و امیر، زوج خوشبخت ورسای
                  </p>
                </div>
              </div>

              {/* سوالات متداول */}
              <div className="bg-white p-5 rounded-lg shadow-md mb-8">
                <h3 className="text-2xl font-bold text-center mb-6">
                  سوالات متداول (FAQ)
                </h3>

                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h4 className="font-bold text-lg mb-2">
                      چطور بفهمم تاریخ «میان‌فصل» چیه؟
                    </h4>
                    <p>
                      کافیِ با مشاوران تالار هماهنگ کنی؛ اون‌ها تقویم فصلی و
                      ظرفیت خالی رو نشون‌ت می‌دن.
                    </p>
                  </div>

                  <div className="border-b pb-4">
                    <h4 className="font-bold text-lg mb-2">
                      آیا گل‌آرایی فصلی محدودیتی داره؟
                    </h4>
                    <p>
                      خیر، گل‌فروش‌ها همیشه ترکیب متنوعی دارند؛ فقط ممکنه
                      رنگ‌بندی کمی متفاوت بشه که اتفاقاً خاص‌تر هم می‌کنه!
                    </p>
                  </div>

                  <div className="border-b pb-4">
                    <h4 className="font-bold text-lg mb-2">
                      بسته‌ی کیترینگ لایو شامل چه غذاییه؟
                    </h4>
                    <p>
                      معمولاً پاستا، استیک یا سوشی روی میز لایو می‌ره و بقیه‌ی
                      منو بوفه‌ای هست.
                    </p>
                  </div>

                  <div className="border-b pb-4">
                    <h4 className="font-bold text-lg mb-2">
                      هزینه‌ی دی‌جی + نوازنده‌ی تک‌نواز چقدر فرق می‌کنه؟
                    </h4>
                    <p>
                      حدود ۳۰–۴۰٪ کمتر از گروه موسیقی کامل—در حالی که تجربه‌ی
                      لوکس رو حفظ می‌کنه.
                    </p>
                  </div>
                </div>
              </div>

              {/* جمع‌بندی */}
              <div className="bg-green-50 p-6 rounded-lg shadow-md mb-8 border-2 border-green-200">
                <h3 className="text-2xl font-bold text-center mb-4">
                  جمع‌بندی
                </h3>

                <p className="mb-4 text-lg">
                  همین امروز با تلفن 09123314145 تماس بگیر یا از فرم رزرو آنلاین
                  تالار ورسای استفاده کن تا مشاور ویژه‌ی ما، رازهای بیشتری از
                  صرفه‌جویی لوکس رو باهات در میون بذاره.
                </p>

                <p className="mb-6 text-lg">
                  منتظرتیم تا شبی بسازیم که همه بگن: «باورت نمیشه این مراسم با
                  این قیمت برگزار شد!»
                </p>

                <div className="text-center">
                  <p className="text-xl font-bold mb-6">
                    🏰 تالار ورسای — جایی که لوکس و اقتصادی دست در دست هم می‌ده.
                  </p>

                  <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
                    <Link href="/menue">
                      <button className="bg-green text-white hover-btn py-3 px-8 rounded-md hover:shadow-2xl transition-transform transform hover:scale-105 text-xl w-full md:w-auto">
                        رزرو تالار
                      </button>
                    </Link>

                    <Link href="/contact">
                      <button className="bg-purple-600 text-green hover-btn py-3 px-8 rounded-md hover:shadow-2xl transition-transform transform hover:scale-105 text-xl w-full md:w-auto">
                        مشاوره رایگان
                      </button>
                    </Link>
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
