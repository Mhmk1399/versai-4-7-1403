"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  useEffect(() => {
    document.title = "نکات مهم برای انتخاب موزیک عروسی";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "در این مقاله، نکات کلیدی برای انتخاب بهترین موزیک عروسی را به شما ارائه می‌دهیم تا در کنار آهنگ‌های دلنشین، لحظاتی بی‌نظیر را در کنار هم تجربه کنید."
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
                src="/assets/images/musicfirst.webp"
                width={4000}
                height={4000}
                alt="نکات مهم برای انتخاب موزیک عروسی"
                className="rounded-lg shadow-lg w-full h-full"
              />
            </div>
            <div className="mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg text-center">
              <h1
                className="text-2xl font-bold mx-auto h1-blog-header"
                id="contetTitle"
              >
                آهنگ عروسی را چطور انتخاب کنیم؟ نکاتی برای یک شب رویایی{" "}
              </h1>
              <p id="contentDiscription" className="text-regular mx-auto mt-2">
                <span className="h2-blog-header font-bold mb-3">
                  موزیک عروسی باید حال و هوای شادی و عشق را در کنار هم فراهم
                  کند. در این راهنما، روش‌های انتخاب موزیک‌هایی که شب شما را
                  به‌یادماندنی می‌کنند، ارائه می‌دهیم.
                </span>
                <br />
              </p>

              <Link href="/menue">
                <button className="bg-gradient-to-l mb-6 from-green to-black text-white hover-btn py-2 px-8 mx-auto rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 mt-8 text-xl">
                  رزرو سالن عقد شاتو دو ورسای
                </button>
              </Link>
              <div className="mx-auto width-auto my-2 px-1.5 py-1.5 bg-white  rounded-lg text-center">
                <h2 className="text-1xl font-bold mx-auto h2-blog-header ">
                  9 نکته طلایی برای انتخاب بهترین موزیک عروسی{" "}
                </h2>
                <ol
                  id="contentDiscription"
                  className="text-regular mx-auto text-gray-700 mt-5 "
                >
                  <span className="font-extrabold h-14 bg-gradient-to-r from-amber-500 px-3 py-1  to-Cyan-950 rounded-full">
                    چگونه موزیک عروسی را انتخاب کنیم?
                  </span>

                  <li className="text-regular  mt-3 ">
                    <span className="font-bold mb-3 text-lg ml-2">
                      ۱. انتخاب سبک موزیک مناسب
                    </span>
                    <br />
                    <span>
                      قبل از شروع به جستجوی تالار، بودجه خود را مشخص کنید. تعیین
                      هزینه‌های مربوط به اجاره تالار، دکوراسیون، نورپردازی و
                      خدمات دیگر کمک می‌کند تا از ابتدا در مسیر درستی حرکت کنید.
                    </span>
                  </li>
                  <div className="mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg">
                    <Image
                      src="/assets/images/The-live-music-band-of-the-ladies-of-the-luxury-hall-of-Chateau-de-Versailles.webp"
                      width={2000}
                      height={2000}
                      alt="انتخاب سبک موزیک مناسب"
                      className="rounded-lg shadow-lg lg:max-h-[900px] mx-auto"
                    />
                  </div>

                  <li className="text-regular  mb-3 mt-4">
                    <span className="font-bold text-lg ml-2 ">
                      ۲. تناسب موزیک با رقص‌ها
                    </span>
                    <br />
                    <span>
                      موزیک انتخابی شما باید با نوع رقص‌های مختلف همخوانی داشته
                      باشد. برای رقص‌های دو نفره و تانگو، آهنگ "حس از خدا رسیدن"
                      از اندی گزینه‌ای عالی است. همچنین، برای رقص‌های دسته جمعی،
                      آهنگ‌های شاد از ابی مانند "شاد شدم" می‌توانند مهمانان را
                      به رقص دعوت کنند.
                    </span>
                  </li>
                  <br />
                  <br />
                  <span>
                    <strong>ابی - "سلامتیت"</strong>
                  </span>
                  <div className="flex-col justify-items-center my-3">
                    <iframe
                      width="full"
                      height="full"
                      src="https://www.youtube.com/embed/R6m5uSh5YaM?si=-Tm1kjVRMdw_glp7"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="rounded-lg shadow-lg w-[300px] md:w-[600px] lg:w-[1000px] h-[200px] md:h-[200px] lg:h-[300px]"
                    ></iframe>
                    <br />

                    <br />
                    <span>
                      <strong>عارف - "کی بهتر از تو"</strong>
                    </span>
                    <br />
                    <br />
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/V3eOswjnAZA?si=XWun6uLHAt73ruEM"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="rounded-lg shadow-lg w-[300px] md:w-[600px] lg:w-[1000px] h-[200px] md:h-[200px] lg:h-[300px]"
                    ></iframe>
                  </div>

                  <li className="text-regular  mb-3">
                    <span className="font-bold text-lg ml-2">
                      ۳. انتخاب بین موزیک زنده و دی‌جی
                    </span>
                    <br />
                    <span>
                      با توجه به بودجه شما، می‌توانید برای اجرای موزیک از یک
                      گروه موسیقی زنده یا دی‌جی استفاده کنید. اگر بودجه‌تان
                      محدود است، دی‌جی می‌تواند گزینه مناسب‌تری باشد. اما اگر به
                      دنبال فضایی شاد و خاص هستید، گروه‌های موسیقی زنده انتخاب
                      خوبی خواهند بود.
                    </span>
                  </li>
                  <div className="mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg">
                    <Image
                      src="/assets/images/Music-group-of-the-most-luxurious-garden-of-Tehran-Chateau-de-Versailles-hall (5).webp"
                      width={4000}
                      height={4000}
                      alt="انتخاب بین موزیک زنده و دی‌جی"
                      className="rounded-lg shadow-lg lg:max-h-[900px] mx-auto"
                    />
                  </div>
                  <li className="text-regular  mb-3">
                    <span className="font-bold text-lg ml-2">
                      ۴. توجه به هزینه‌ها
                    </span>
                    <br />
                    <span>
                      برای انتخاب گروه موسیقی یا دی‌جی، حتماً هزینه‌ها را مد نظر
                      داشته باشید. گروه‌های مختلف با توجه به تجربه و نوع
                      موسیقی‌ای که ارائه می‌دهند، هزینه‌های متفاوتی دارند. برای
                      یک مراسم با بودجه متوسط، می‌توانید به گروه‌های محلی و کمتر
                      شناخته شده نگاه کنید که کیفیت خوبی دارند و هزینه کمتری نیز
                      دریافت می‌کنند.
                    </span>
                  </li>
                  <div className="mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg">
                    <Image
                      src="/assets/images/Music-group-of-the-most-luxurious-garden-of-Tehran-Chateau-de-Versailles-hall (3).webp"
                      width={4000}
                      height={4000}
                      alt="توجه به هزینه‌ها عروسی و موزیک"
                      className="rounded-lg shadow-lg lg:max-h-[900px] mx-auto"
                    />
                  </div>

                  <li className="text-regular  mb-3">
                    <span className="font-bold ml-2 text-xl">
                      ۵. آزمایش و تست موزیک‌ها
                    </span>
                    <br />
                    <span>
                      قبل از روز عروسی، حتماً موزیک‌ها را آزمایش کنید. این کار
                      به شما کمک می‌کند تا مطمئن شوید که همه چیز به خوبی اجرا
                      می‌شود و موزیک‌ها با هم هماهنگی دارند.
                    </span>

                    <Link href="/menue">
                      <button className="bg-gradient-to-l from-green to-black text-white hover-btn py-2 px-8 mx-auto rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 mt-8 mb-2 text-xl">
                        مشاهده منو مجموعه شاتو دو ورسای
                      </button>
                    </Link>
                  </li>

                  <li className="text-regular  mb-3">
                    <span className="font-bold text-lg ml-2">
                      ۶. توجه به سلیقه مهمانان
                    </span>
                    <br />
                    <span>
                      مهمانان شما نیز در انتخاب موزیک‌ها تأثیرگذار هستند. سعی
                      کنید موزیک‌هایی انتخاب کنید که بتوانند نظر اکثریت را جلب
                      کنند. از مهمانان خود بخواهید که در مورد موزیک‌های مورد
                      علاقه‌شان نظراتی ارائه دهند.
                    </span>
                  </li>

                  <li className="text-regular  mb-3">
                    <span className="font-bold text-lg ml-2">
                      ۷. تهیه لیست پخش موزیک
                    </span>
                    <br />
                    <span>
                      پیش از روز عروسی، لیست پخش موزیک‌هایی که قصد دارید پخش
                      کنید را آماده کنید. این لیست باید شامل موزیک‌های مختلف
                      برای هر بخش از مراسم باشد، از جمله رقص‌های عروس و داماد،
                      رقص گروهی و موزیک‌های پذیرایی.
                    </span>
                  </li>
                  <div className="mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg">
                    <Image
                      src="/assets/images/Piano-player-in-the-garden-of-the-luxury-hall-of-Chateau-de-Versailles.webp"
                      width={4000}
                      height={4000}
                      alt="تهیه لیست پخش موزیک"
                      className="rounded-lg shadow-lg lg:max-h-[900px] mx-auto"
                    />
                  </div>

                  <li className="text-regular  mb-3">
                    <span className="font-bold text-lg ml-2">
                      ۸. محل برگزاری موزیک
                    </span>
                    <br />
                    <span>
                      بسته به نوع مراسم و فضایی که انتخاب کرده‌اید، موزیک شما
                      می‌تواند در داخل تالار یا حیاط برگزار شود. اگر مراسم در
                      فضای باز باشد، امکان نواختن موزیک زنده توسط یک گروه موسیقی
                      همیشه می‌تواند انتخاب خوبی باشد.
                    </span>
                  </li>
                  <div className="mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg">
                    <Image
                      src="/assets/images/The-wedding-night-of-the-most-luxurious-garden-of-the-Tehran-hall-of-the-Chateau-de-Versailles-complex.webp"
                      width={4000}
                      height={4000}
                      alt="محل برگزاری موزیک عروسی و موزیک"
                      className="rounded-lg shadow-lg w-full h-full"
                    />
                  </div>

                  <li className="text-regular  mb-3">
                    <span className="font-bold text-lg ml-2">
                      ۹. لذت بردن از موزیک‌ها
                    </span>
                    <br />
                    <span>
                      نکته آخر این است که از موزیک‌های انتخابی خود لذت ببرید.
                      این روز خاص باید پر از شادی و نشاط باشد، پس به موزیک‌ها
                      گوش دهید و از لحظات خود بهره‌برداری کنید.
                    </span>
                  </li>
                  <div className="mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg">
                    <Image
                      src="/assets/images/S__00671.webp"
                      width={4000}
                      height={4000}
                      alt="لذت بردن از موزیک‌ها"
                      className="rounded-lg shadow-lg w-full h-full"
                    />
                  </div>
                  <li className="text-regular  mb-3">
                    <span className="font-bold text-lg ml-2"></span>
                    <br />
                    <span>
                      برای مشاوره و راهنمایی در انتخاب بهترین موزیک‌ها و گروه
                      موسیقی برای عروسی خود، با ما تماس بگیرید تا به شما کمک
                      کنیم روزی به یاد ماندنی بسازید!
                    </span>
                  </li>
                </ol>

                <Link href="https://tour.panoee.net/Versay/65df91a47a73f2e85a4da72b">
                  <button className="bg-gradient-to-l from-green to-black text-white hover-btn py-2 px-8 mx-auto rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 mt-8 mb-2 text-xl">
                    میتوانید برای دیدن فضای سه بعدی مجموعه کلیک کنید.
                  </button>
                </Link>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;
