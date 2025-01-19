"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogSchema } from "../../../components/schema/blogSchema";
import CommentBox from "../../../components/commentBox";

const Page = () => {
  const blogId = "Decorations-for-wedding-ceremonies";
  const blogData = {
    title: "تزئینات و دکوراسیون برای برگزاری مراسم عروسی",
    url: "/Decorations-for-wedding-ceremonies",
    images: ["/assets/images/photo_2024-11-16_14-00-54.webp"],
    sections: [
      {
        heading: "جادوی تزئینات: مراسم عروسی خود را رویایی کنید!",
        content:
          "برگزاری مراسم عروسی یکی از خاطره‌انگیزترین لحظات زندگی است، و ما اینجا هستیم تا با دکوراسیون و تزئینات خاص، جشن شما را به یک رویداد فراموش‌نشدنی تبدیل کنیم. از طراحی میزها و گل‌آرایی‌های لوکس گرفته تا نورپردازی و جزئیات جذاب، همه چیز با دقت و سلیقه‌ای بی‌نظیر انجام می‌شود.",
        lists: [
          "انتخاب تم و رنگ‌ها",
          "دکوراسیون میزها و صندلی‌ها",
          "استفاده از گل‌ها",
          "نورپردازی",
          "نکات کلی برای انتخاب دکوراسیون",
        ],
      },
      {
        heading: "روشنایی عشق: دکوراسیون حرفه‌ای برای عروسی شما",
        content:
          "انتخاب تم مناسب برای مراسم عروسی یکی از اولین و مهم‌ترین تصمیم‌هاست. تم شما باید با شخصیت شما و همسرتان هماهنگی داشته باشد. از رنگ‌های کلاسیک مانند سفید و طلا گرفته تا رنگ‌های شاد و پرانرژی، انتخاب‌های زیادی دارید.",
        lists: [
          "بررسی فضای موجود",
          "هماهنگی با تم کلی",
          "استفاده از جزئیات شخصی",
        ],
      },
    ],
  };

  useEffect(() => {
    document.title = "تزئینات و دکوراسیون برای برگزاری مراسم عروسی";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "برگزاری مراسم عروسی یکی از خاطره‌انگیزترین لحظات زندگی است، و ما اینجا هستیم تا با دکوراسیون و تزئینات خاص، جشن شما را به یک رویداد فراموش‌نشدنی تبدیل کنیم. "
      );
    }
  }, []);
  return (
    <>
      <BlogSchema blogData={blogData} />
      <div className="  grid mx-auto grid-cols-1 h-auto p-4 " dir="rtl">
        <div className="px-4 mx-auto py-2 rounded-lg my-2 width-full grid grid-cols-1 gap-4">
          <div className="col-span-2 mx-auto width-auto my-2 max-w-5xl  rounded-lg">
            {" "}
            <div className="mx-auto width-auto my-2 px-1.5 py-1.5   rounded-lg">
              <Image
                src="/assets/images/photo_2024-11-16_14-00-54.webp"
                width={4000}
                height={4000}
                alt="تزئینات و دکوراسیون برای برگزاری مراسم عروسی"
                className="rounded-lg shadow-lg w-full h-full"
              />
            </div>
            <div className="mx-auto width-auto my-2 px-1.5 py-1.5   rounded-lg text-center">
              <h1
                className="text-2xl font-bold mx-auto h1-blog-header"
                id="contetTitle"
              >
                جادوی تزئینات: مراسم عروسی خود را رویایی کنید!{" "}
              </h1>
              <p id="contentDiscription" className="text-regular mx-auto mt-2">
                <span className="text-black font-bold mb-3">
                  برگزاری مراسم عروسی یکی از خاطره‌انگیزترین لحظات زندگی است، و
                  ما اینجا هستیم تا با دکوراسیون و تزئینات خاص، جشن شما را به یک
                  رویداد فراموش‌نشدنی تبدیل کنیم. از طراحی میزها و گل‌آرایی‌های
                  لوکس گرفته تا نورپردازی و جزئیات جذاب، همه چیز با دقت و
                  سلیقه‌ای بی‌نظیر انجام می‌شود.
                </span>
                <br />
              </p>

              <Link href="/menue">
                <button className=" mb-6 bg-green  text-white hover-btn py-2 px-8 mx-auto rounded-md hover:shadow-2xl transition-transform transform hover:scale-105 mt-8 text-xl">
                  رزرو سالن عقد شاتو دو ورسای
                </button>
              </Link>
              <div className="mx-auto width-auto my-2 px-1.5 py-1.5    rounded-lg text-center">
                <h2 className="text-1xl font-bold mx-auto text-black ">
                  تزئینات و دکوراسیون برای برگزاری مراسم عروسی
                </h2>
                <ol
                  id="contentDiscription"
                  className="text-regular mx-auto text-gray-700 mt-5 "
                >
                  <span className="font-extrabold h-14  px-3 py-1  rounded-full">
                    روشنایی عشق: دکوراسیون حرفه‌ای برای عروسی شما{" "}
                  </span>

                  <li className="text-regular  mt-3 ">
                    <span className="font-bold mb-3 text-lg ml-2">
                      1. انتخاب تم و رنگ‌ها
                    </span>
                    <br />
                    <span>
                      انتخاب تم مناسب برای مراسم عروسی یکی از اولین و مهم‌ترین
                      تصمیم‌هاست. تم شما باید با شخصیت شما و همسرتان هماهنگی
                      داشته باشد. از رنگ‌های کلاسیک مانند سفید و طلا گرفته تا
                      رنگ‌های شاد و پرانرژی، انتخاب‌های زیادی دارید. با انتخاب
                      رنگ‌های متناسب، می‌توانید زیبایی و هماهنگی را در دکوراسیون
                      باغ تالار خود به وجود آورید. همچنین، با ایجاد تم خاصی که
                      با داستان عاشقانه شما هماهنگ باشد، می‌توانید حس و حال
                      مراسم را به شکل ویژه‌ای رقم بزنید.
                    </span>
                  </li>
                  <div className="mx-auto width-auto my-2 px-1.5 py-1.5   rounded-lg">
                    <Image
                      src="/assets/images/photo_2024-11-16_14-04-15.webp"
                      width={2000}
                      height={2000}
                      alt="انتخاب تم و رنگ‌ها"
                      className="rounded-lg shadow-lg lg:max-h-[900px] mx-auto"
                    />
                  </div>

                  <li className="text-regular  mb-3 mt-4">
                    <span className="font-bold text-lg ml-2 ">
                      2. دکوراسیون میزها و صندلی‌ها
                    </span>
                    <br />
                    <span>
                      میزها و صندلی‌ها نقش مهمی در فضای مراسم دارند. می‌توانید
                      با استفاده از رومیزی‌های زیبا، گل‌آرایی و نورپردازی‌های
                      مناسب، میزها را تزیین کنید. صندلی‌ها نیز با باندهایی از
                      توری یا روبان‌های رنگی می‌توانند جلوه‌ای خاص پیدا کنند.
                      همچنین، با افزودن جزئیات کوچکی مانند کارت‌های نام مهمان‌ها
                      یا تزئینات کوچکی روی میز، می‌توانید فضای زیباتری خلق کنید.
                    </span>
                  </li>
                  <div className="mx-auto width-auto my-2 px-1.5 py-1.5   rounded-lg">
                    <Image
                      src="/assets/images/photo_2024-11-16_14-06-27.webp"
                      width={2000}
                      height={2000}
                      alt="دکوراسیون میزها و صندلی‌ها"
                      className="rounded-lg shadow-lg lg:max-h-[900px] mx-auto"
                    />
                  </div>

                  <li className="text-regular  mb-3">
                    <span className="font-bold text-lg ml-2">
                      3. استفاده از گل‌ها
                    </span>
                    <br />
                    <span>
                      گل‌ها یکی از مهم‌ترین عناصر دکوراسیون در مراسم عروسی
                      هستند. با انتخاب گل‌های تازه و زیبا، می‌توانید فضای مراسم
                      را دلپذیرتر کنید. گل‌ها را می‌توانید در آرایش دسته گل
                      عروس، تزئین میزها و حتی در دکوراسیون دیوارها استفاده کنید.
                      با ترکیب گل‌های مختلف و استفاده از رنگ‌های متناسب،
                      می‌توانید جلوه‌ای خاص به مراسم خود ببخشید.
                    </span>
                  </li>
                  <div className="mx-auto width-auto my-2 px-1.5 py-1.5   rounded-lg">
                    <Image
                      src="/assets/images/photo_2024-11-16_14-12-21.webp"
                      width={4000}
                      height={4000}
                      alt="استفاده از گل‌ها"
                      className="rounded-lg shadow-lg lg:max-h-[900px] mx-auto"
                    />
                  </div>
                  <li className="text-regular  mb-3">
                    <span className="font-bold text-lg ml-2">4. نورپردازی</span>
                    <br />
                    <span>
                      نورپردازی نقش مهمی در ایجاد جو و احساس مراسم دارد. استفاده
                      از چراغ‌های ریسه‌ای، شمع‌ها و نورهای رنگی می‌تواند فضای
                      رمانتیک و جذابی ایجاد کند. با نورپردازی مناسب، می‌توانید
                      نقاط قوت دکوراسیون خود را برجسته کنید و فضای تالار را به
                      شکلی بی‌نظیر تبدیل کنید.
                    </span>
                  </li>
                  <div className="mx-auto width-auto my-2 px-1.5 py-1.5   rounded-lg">
                    <Image
                      src="/assets/images/8.webp"
                      width={4000}
                      height={4000}
                      alt="نورپردازی"
                      className="rounded-lg shadow-lg lg:max-h-[900px] mx-auto"
                    />
                  </div>

                  <li className="text-regular  mb-3">
                    <span className="font-bold ml-2 text-xl">
                      5. نکات کلی برای انتخاب دکوراسیون
                    </span>
                    <br />
                    <span className="ml-1">
                      <strong>بررسی فضای موجود:</strong>
                    </span>
                    <span>
                      قبل از انتخاب دکوراسیون، فضای باغ تالار را بررسی کنید و بر
                      اساس اندازه و شکل آن طراحی کنید.
                    </span>
                    <br />
                    <span className="ml-1">
                      <strong>هماهنگی با تم کلی: </strong>
                    </span>
                    <span>
                      تمامی جزئیات دکوراسیون باید با تم کلی مراسم هماهنگ باشد.
                    </span>
                    <br />
                    <span className="ml-1">
                      <strong>استفاده از جزئیات شخصی: </strong>
                    </span>
                    <span>
                      افزودن عناصر شخصی مانند عکس‌های شما و همسرتان یا
                      یادگاری‌های خاص می‌تواند فضای مراسم را ویژه‌تر کند.
                    </span>
                    <br />

                    <Link href="/menue">
                      <button className=" mb-6 bg-green  text-white hover-btn py-2 px-8 mx-auto rounded-md hover:shadow-2xl transition-transform transform hover:scale-105 mt-8 text-xl">
                        مشاهده منو مجموعه شاتو دو ورسای
                      </button>
                    </Link>
                  </li>
                </ol>

                <span>
                  برای تجربه‌ای بی‌نظیر و به یادماندنی، باغ تالار ما بهترین
                  انتخاب شماست. منتظریم که با ما همراه شوید و مراسم عروسی شما را
                  به بهترین شکل برگزار کنیم! برای رزرو و اطلاعات بیشتر، همین
                  حالا با ما تماس بگیرید و لحظاتی فراموش‌نشدنی را برای خود رقم
                  بزنید.
                </span>
                <br />

                <Link href="https://tour.panoee.net/Versay/65df91a47a73f2e85a4da72b">
                  <button className=" mb-6 bg-green  text-white hover-btn py-2 px-8 mx-auto rounded-md hover:shadow-2xl transition-transform transform hover:scale-105 mt-8 text-xl">
                    میتوانید برای دیدن فضای سه بعدی مجموعه کلیک کنید.
                  </button>
                </Link>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <CommentBox blogId={blogId} />
    </>
  );
};
export default Page;
