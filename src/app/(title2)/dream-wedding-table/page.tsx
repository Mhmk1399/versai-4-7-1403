"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  useEffect(() => {
    document.title = " ایده‌های جالب برای یه سفره عقد خاص و تازه";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "سفره عقد یه قسمت خیلی مهم و جدا نشدنی از مراسم عقده که با طراحی و ذیزاین مناسب، می‌تونه مراسم رو به یه تجربه فوق‌العاده تبدیل کنه."
      );
    }
  }, []);
  return (
    <>
      <div className="bg-white grid mx-auto grid-cols-1 h-auto p-4 " dir="rtl">
        <div className="px-4 mx-auto py-2 bg-gray-50 rounded-lg my-2 width-full grid grid-cols-1 gap-4">
          <div className="col-span-2 mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg">
            <div className="mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg">
              <Image
                src="/assets/images/garden-bad-1.webp"
                width={4000}
                height={4000}
                alt="سفره عقد"
                className="rounded-lg shadow-lg w-full h-full"
              />
            </div>
            <div className="mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg text-center">
              <h1
                className="text-2xl font-bold mx-auto h1-blog-header"
                id="contetTitle"
              >
                سفره عقد متفاوت: ایده‌های جالب برای یه چیدمان خاص و تازه
              </h1>
              <p id="contentDiscription" className="text-regular mx-auto mt-2">
                <span className="h2-blog-header font-bold mb-3">
                  سفره عقد یه قسمت خیلی مهم و جدا نشدنی از مراسم عقده که با
                  طراحی و ذیزاین مناسب، می‌تونه مراسم رو به یه تجربه فوق‌العاده
                  تبدیل کنه.
                </span>
                <br />
              </p>
              <p className="text-regular mx-auto my-3" id="contentDiscription">
                سفره عقد یکی از بخش‌های مهم و زیبا در مراسم عقد هست که توی این
                روز خاص، یه حس ویژه و معنوی به مراسم می‌ده. حالا بیایید با هم یه
                توضیح ساده و عامیانه درباره‌ش داشته باشیم:
              </p>
              <h2 className="text-xl font-bold mx-auto mb-4 my-3">
                سفره عقد چیست؟
              </h2>
              <p>
                سفره عقد، یه سفره نسبتا بزرگ و زیباست که برای مراسمات عقد چیده
                می‌شه. این سفره عمدتا روی یه میز یا سطحی صاف قرار می‌گیره و پر
                از عناصر رنگارنگ و نمادین هست که مراسم رو رسمی و جذاب‌تر می‌کنه.
              </p>
              <h3 className="text-lg font-semibold mx-auto mb-4 my-3">
                چرا سفره عقد مهمه؟
              </h3>
              <p className="my-3">
                سفره عقد برای زوجین یعنی عروس و داماد و خانواده‌ها یه معنا و
                ارزش ویژه‌ای داره. این سفره تزئینی نماد خوشبختی، زیبایی و شروع
                زندگی مشترک بین زوج هاست. هر چیز روی سفره به نوعی یک معنای خاصی
                داره و به مراسم شما عطر و طعم خاص و خوبی می‌بخشه.
              </p>
              <span className="text-sm font-bold block">
                اگه تصمیم گرفتی مراسم عقدت رو توی یه باغ تالار خوشگل برگزار کنی
                و می‌خوای سفره عقدت هم توی فضای باز چیده بشه، اینجا چندتا ایده
                باحال داریم که می‌تونه به سفره عقدت یه جلوه خاص و جذاب بده:
              </span>
              <Link href="/menue">
                <button className="bg-gradient-to-l mb-6 from-green to-black text-white hover-btn py-2 px-8 mx-auto rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 mt-8 text-xl">
                  رزرو سالن عقد شاتو دو ورسای
                </button>
              </Link>
              <div className="mx-auto width-auto my-2 px-1.5 py-1.5 bg-white  rounded-lg text-center">
                <h2 className="text-1xl font-bold mx-auto h2-blog-header ">
                  ۱۰ ترفند ساده برای طراحی سفره عقد در باغ تالار که چشم‌گیر باشه
                </h2>
                <ol
                  id="contentDiscription"
                  className="text-regular mx-auto text-gray-700 mt-5 "
                >
                  <span className="font-extrabold h-14 bg-gradient-to-r from-amber-500 px-3 py-1  to-Cyan-950 rounded-full">
                    سفره عقد شیک و مدرن در باغ تالار
                  </span>

                  <li className="text-regular li-border-color mt-3 ">
                    <span className="font-bold mb-3 text-lg ml-2">
                      1. انتخاب مکان مناسب
                    </span>
                    <br />
                    <span>
                      اول از هر چیز، مکان رو درست انتخاب کن. یه قسمتی از باغ
                      تالار رو که از نظر نور و دیزاین به بهترین حالت ممکن خودش
                      باشه، برای سفره عقدتون انتخاب کنین. بهتره یه فضای سایه‌دار
                      یا زیر یه درخت بزرگ پیدا کنین تا مهمونات راحت باشن و سفره
                      هم زیر نور آفتاب زیاد آسیب نبینه.
                    </span>
                  </li>
                  <div className="mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg">
                    <Image
                      src="/assets/images/S__00395.webp"
                      width={4000}
                      height={4000}
                      alt="تزیین سفره عقد"
                      className="rounded-lg shadow-lg w-full h-full"
                    />
                  </div>
                  <li className="text-regular li-border-color mb-3">
                    <span className="font-bold text-lg ml-2 ">
                      2. استفاده کردن از پارچه‌های سبک و رنگی در سفره
                    </span>
                    <br />
                    <span>
                      برای پوشش دادن سفره، از پارچه‌های سبک و رنگی استفاده کنین
                      که با فضای باغ تالار هماهنگ باشه. پارچه‌های نخی یا لینن
                      خیلی میتونن مناسب باشن و جلوه زیبایی به سفره می‌دن.
                      می‌تونین رنگ‌های ملایم یا طرح‌های گل‌دار یا ساده رو انتخاب
                      کنین که با فضای سبز باغ هماهنگی داشته باشن.
                    </span>
                  </li>
                  {/* <div className="mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg">
                  <Image
                    src="/assets/images/S__00448.webp"
                    width={4000}
                    height={4000}
                    alt="فضای وسیع و مجلل: مناسب برای پذیرایی از تعداد زیادی مهمان"
                    className="rounded-lg shadow-lg w-full h-full"
                  />
                </div> */}
                  <li className="text-regular li-border-color mb-3">
                    <span className="font-bold text-lg ml-2">
                      3. تزیین سفره با گل‌های طبیعی 
                    </span>
                    <br />
                    <span>
                      گل‌های طبیعی بهترین گزینه شما برای تزیین سفره عقد توی فضای
                      باز هستن. می‌تونین از گل‌های رنگارنگ و تازه برای تزیین
                      مرکز سفره و اطراف آن استفاده کنین. با این کار، سفره عقدتون
                      پر از زیبایی و هم چنین بوی خوبی می‌شه.
                    </span>
                  </li>
                  <div className="mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg">
                    <Image
                      src="/assets/images/garden-bad-2.webp"
                      width={4000}
                      height={4000}
                      alt="بسفره عقد برای عروسی"
                      className="rounded-lg shadow-lg w-full h-full"
                    />
                  </div>
                  <li className="text-regular li-border-color mb-3">
                    <span className="font-bold text-lg ml-2">
                      4. اضافه کردن شمع‌های معلق به دیزاین سفره
                    </span>
                    <br />
                    <span>
                      برای ساختن یه فضای رمانتیک و رویایی، می‌تونین از شمع‌های
                      معلق در سفره عقد استفاده کنین. شمع‌ها رو با ریسمان‌های
                      نازک از شاخه‌های درختان آویزون کرده یا توی قفس‌های تزئینی
                      بذارین. نور ملایم و زیبای شمع‌ها به سفره عقدت یه حال و
                      هوای خاص و دل نشینی می‌ده.
                    </span>
                  </li>
                  <div className="mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg">
                    <Image
                      src="/assets/images/S__00430.webp"
                      width={4000}
                      height={4000}
                      alt="موسیقی در مراسم عقد"
                      className="rounded-lg shadow-lg w-full h-full"
                    />
                  </div>
                  <li className="text-regular li-border-color mb-3">
                    <span className="font-bold ml-2 text-xl">
                      5. استفاده از لوازم دکوری طبیعی
                    </span>
                    <br />
                    <span>
                      می‌تونین از لوازم دکوری طبیعی مثل سنگ‌های زینتی، شاخه‌های
                      درخت خشک شده یا حتی میوه‌های تازه برای تزیین سفره عقد در
                      باغ تالار استفاده کنین. این موارد به سفره عقدتون یه حس
                      طبیعی و دل انگیز اضافه می‌کنن.
                    </span>
                    <br />
                    <span className="text-red-500 font-semibold">
                      * این لوازم نه‌تنها حس طراوت و تازگی به سفره می‌دن، بلکه
                      با فضای باز یا حتی داخل سالن هم به خوبی هماهنگ می‌شن.*
                    </span>
                    <br />
                    <Link href="/menue">
                      <button className="bg-gradient-to-l from-green to-black text-white hover-btn py-2 px-8 mx-auto rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 mt-8 mb-2 text-xl">
                        مشاهده منو مجموعه شاتو دو ورسای
                      </button>
                    </Link>
                  </li>
                  <div className="mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg">
                    <Image
                      src="/assets/images/S__00393.webp"
                      width={4000}
                      height={4000}
                      alt="جشن عقد باغ تالار"
                      className="rounded-lg shadow-lg w-full h-full"
                    />
                  </div>
                  <li className="text-regular li-border-color mb-3">
                    <span className="font-bold text-lg ml-2">
                      6. نورپردازی به اندازه و خلاقانه 
                    </span>
                    <br />
                    <span>
                      برای شب که هوا تاریک می‌شه، یه نورپردازی جالب و مناسب اما
                      به اندازه ترتیب بدهید. می‌تونی از لامپ‌های LED، چراغ‌های
                      فانوسی شکل یا حتی رشته‌های نوری استفاده کنین که به فضای
                      باز زیبایی ویژه‌ای بده.
                    </span>
                  </li>
                  {/* <div className="mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg">
                  <Image
                    src="/assets/images/hall-normal-1.webp"
                    width={4000}
                    height={4000}
                    alt="مبلمان راحت و لوکس: صندلی‌های زیبا و راحت"
                    className="rounded-lg shadow-lg w-full h-full"
                  />
                </div> */}
                  <li className="text-regular li-border-color mb-3">
                    <span className="font-bold text-lg ml-2">
                      7. ایجاد یه بخش پذیرایی جداگانه در باغ تالار
                    </span>
                    <br />
                    <span>
                      اگه فضای باغ به شما اجازه می‌ده، یه بخش جدا برای پذیرایی
                      با کمک عوامل درست کنین. میزهای کوچک با نوشیدنی‌های خوش طمع
                      می‌تونه به مهموناتون یه تجربه خوب و راحت بده و فضای مراسم
                      رو شیرین تر کنه.
                    </span>
                  </li>
                  <div className="mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg">
                    <Image
                      src="/assets/images/S__00844.webp"
                      width={4000}
                      height={4000}
                      alt="مراسم سفره عقد ایرانی"
                      className="rounded-lg shadow-lg w-full h-full"
                    />
                  </div>
                  <li className="text-regular li-border-color mb-3">
                    <span className="font-bold text-lg ml-2">
                      8. استفاده از میزهای راحت و شیک
                    </span>
                    <br />
                    <span>
                      میزهای چوبی یا فلزی با طراحی‌های شیک می‌تونن به سفره
                      عقدتون یک حالت خاصی بدن. اگه می‌خواین به سفره عقد یه حس
                      راحتی و صمیمیت اضافه کنین، از میزهای پایین و راحت استفاده
                      کنین که مهمونا بتونن دور هم نشسته و از مراسم شما لذت ببرن.
                    </span>
                  </li>
                  <div className="mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg">
                    <Image
                      src="/assets/images/garden-normal-1.webp"
                      width={4000}
                      height={4000}
                      alt="مراسم عقد در فضای باز"
                      className="rounded-lg shadow-lg w-full h-full"
                    />
                  </div>
                  <li className="text-regular li-border-color mb-3">
                    <span className="font-bold text-lg ml-2">
                      9. دیزاین خلاقانه با بادبادک‌
                    </span>
                    <br />
                    <span>
                      اگر به دنبال یه ایده متفاوت و جدید هستین، می‌تونین از
                      بادبادک‌های رنگی برای تزیین فضا استفاده کنین.به این شکل
                      که  بادبادک‌ها رو در فاصله‌های مختلف آویزون کرده تا فضای
                      سفره عقد رنگی و شاداب بشه.
                    </span>
                  </li>
                  {/* <div className="mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg">
                  <Image
                    src="/assets/images/hall-normal-1.webp"
                    width={4000}
                    height={4000}
                    alt="مبلمان راحت و لوکس: صندلی‌های زیبا و راحت"
                    className="rounded-lg shadow-lg w-full h-full"
                  />
                </div> */}
                  <li className="text-regular li-border-color mb-3">
                    <span className="font-bold text-lg ml-2">
                      10. اضافه کردن یادگاری‌های کوچک برای میهمان در سفره
                    </span>
                    <br />
                    <span>
                      برای اینکه سفره عقد مراسم خیلی خاص و به یاد موندنی بشه،
                      می‌تونین یادگاری‌های کوچیکی مثل کارت‌های خوشامدگویی یا
                      پیام‌های محبت آمیز رو روی سفره بذاری. این یادگاری‌ها
                      می‌تونن به مهمون ها  یک حس ویژه و شخصی بده که از حضور در
                      مراسم احساس رضایت بیشتری داشته باشند.
                    </span>
                  </li>

                  <span className="text-lg">
                    با این ایده‌ها، می‌تونین سفره عقدتون رو توی باغ تالار به یک
                    طراحی شیک و خاص تبدیل کنین که همه ی افراد حاضر ازش لذت ببرن
                    و مراسم رو به یه تجربه فراموش‌نشدنی تبدیل کنه!
                  </span>
                </ol>

                <Link href="https://tour.panoee.net/Versay/65df91a47a73f2e85a4da72b">
                  <button className="bg-gradient-to-l from-green to-black text-white hover-btn py-2 px-8 mx-auto rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 mt-8 mb-2 text-xl">
                    میتوانید برای دیدن فضای سه بعدی مجموعه کلیک کنید.
                  </button>
                </Link>
              </div>
              <hr />
              <div className="mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg text-center">
                <h2 className="text-2xl font-bold mx-auto h1-blog-header my-3">
                  انواع سفره عقد
                </h2>
                <p>
                  وقتی حرف از سفره عقد می‌شه، اینقدر تنوع  وجود داره که می‌تونین
                  بر اساس سلیقه خودت یه سفره خاص و متفاوت رو برای مراسم در باغ
                  تالار بچینی. از سنتی گرفته تا مدرن، سفره‌های عقد با مدل‌ها و
                  طراحی های مختلف می‌تونن حال و هوای خاصی به مراسم عقد شما بدن.
                  حالا اینجا چند نوع از این سفره‌های جذاب رو بررسی میکنیم:
                </p>
                <ul>
                  <li className="font-bold text-lg h2-blog-header">
                    1. سفره عقد سنتی
                  </li>
                  <p className="my-3">
                    تو این نوع سفره، از همون اجزای کلاسیک مثل آینه، شمعدون، نون
                    و پنیر، عسل، و تخم‌مرغ رنگی استفاده می‌شه. خیلی‌ها دوست دارن
                    با این سبک، یه حس نوستالژی و قدیمی به مراسمشون بدن. همه چیز
                    با دقت و زیبایی چیده می‌شه و فضای گرم و صمیمی رو ایجاد
                    می‌کنه.
                  </p>
                  <li className="font-bold text-lg h2-blog-header">
                    2. سفره عقد مدرن
                  </li>
                  <p className="my-3">
                    برای کسایی که که عاشق سبک‌های مینیمال و ساده‌ن، سفره عقد
                    مدرن انتخاب خوبیه و درجه یکیه.در این نوع به‌جای شلوغی و
                    تزیینات زیاد، از رنگ‌های ساده و هماهنگ و وسایل مینیمال مثل
                    ظروف شیشه‌ای یا فلزی استفاده می‌شه.
                  </p>
                  <li className="font-bold text-lg h2-blog-header">
                    3. سفره عقد طبیعی
                  </li>
                  <p className="my-3">
                    میخوای یه سفره عقد خیلی طبیعی و آروم داشته باشی؟ سفره عقد با
                    تم طبیعی همونی هست که باید انتخاب کنی. تو این مدل، از
                    المان‌های طبیعی مثل گل‌های تازه، برگ‌های سبز، سنگ‌های
                    رودخونه‌ای و شمع‌های روشن معطر استفاده می‌شه.
                  </p>
                </ul>
                <div className="mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg">
                  <Image
                    src="/assets/images/garden-good-1.webp"
                    width={4000}
                    height={4000}
                    alt="انواع سفره عقد"
                    className="rounded-lg shadow-lg w-full h-full"
                  />
                </div>
                <h3 className="text-2xl font-bold mx-auto h1-blog-header my-3 border-b-2 border-amber-200 border-solid">
                  خلاصه ای از سفره عقد{" "}
                </h3>
                <p>
                  سفره عقد، همون بخش قشنگ و خاص مراسمه که همه چیزش یه معنی داره؛
                  از آینه‌ای که عشق رو توش می‌بینی تا شمع‌هایی که به زندگی جدیدت
                  نور می‌دن. چه ساده بچینیش، چه لاکچری، مهم اینه که این سفره
                  نماد یه شروع تازه‌ست. هر چیز که روی سفره می‌ذاری، مثل گل‌ها،
                  شیرینی‌ها و میوه‌ها، یه جورایی عشق و خوشبختی رو بهت یادآوری
                  می‌کنه. خلاصه، سفره عقد همون چیزیه که مراسمتو خاص‌تر و فراموش
                  نشدنی تر می‌کنه و به همه نشون می‌ده که یه راه جدید و پر از عشق
                  رو شروع کردی!
                </p>
                <span>
                  <Link href="/">
                    <span className="text-xl h2-blog-header hover:text-blue-500">
                      شاتو دو ورسای
                    </span>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;
