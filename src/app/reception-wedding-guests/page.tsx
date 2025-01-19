"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogSchema } from "../../../components/schema/blogSchema";
import CommentBox from "../../../components/commentBox";

const Page = () => {
  const blogId = "reception-wedding-guests";
  const blogData = {
    title: "چگونه از مهمانان خود در مراسم عروسی پذیرایی کنیم؟",
    url: "/reception-wedding-guests",
    images: ["/assets/images/6.webp"],
    sections: [
      {
        heading: "با این نکات، پذیرایی مراسم عروسی خود را به یادماندنی کنید!",
        content:
          "با پذیرایی شایسته از مهمانان عروسی، لحظاتی خاطره‌انگیز بسازید! از منوی جذاب و نوشیدنی‌های خاص تا تزئینات چشم‌نواز و برنامه‌ریزی دقیق، همه چیز برای خلق یک جشن فراموش‌نشدنی مهیاست.",
        lists: [
          "انتخاب منوی غذایی متناسب با سلیقه مهمانان",
          "نوشیدنی‌ها: از آبمیوه‌ها تا نوشیدنی‌های گرم",
          "میان‌وعده‌های خوشمزه و متنوع",
          "توجه به نیازهای خاص مهمانان",
          "نحوه سرو غذا و نوشیدنی",
        ],
      },
    ],
  };

  useEffect(() => {
    document.title = "چگونه از مهمانان خود در مراسم عروسی پذیرایی کنیم؟";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "در این مقاله نکات و ایده‌های جذابی برای پذیرایی از مهمانان در مراسم عروسی ارائه می‌دهیم. از انتخاب منوی مناسب و نوشیدنی‌های خاص تا تزئینات چشم‌نواز و برنامه‌ریزی دقیق،"
      );
    }
  }, []);
  return (
    <>
      <BlogSchema blogData={blogData} />
      <div className="  grid mx-auto grid-cols-1 h-auto p-4 " dir="rtl">
        <div className="px-4 mx-auto py-2   rounded-lg my-2 width-full grid grid-cols-1 gap-4">
          <div className="col-span-2 mx-auto width-auto my-2 max-w-5xl  rounded-lg">
            {" "}
            <div className="mx-auto width-auto my-2 px-1.5 py-1.5   rounded-lg">
              <Image
                src="/assets/images/6.webp"
                width={4000}
                height={4000}
                alt="پذیرایی از مهمانان عروسی"
                className="rounded-lg shadow-lg w-full h-full"
              />
            </div>
            <div className="mx-auto width-auto my-2 px-1.5 py-1.5   rounded-lg text-center">
              <h1
                className="text-2xl font-bold mx-auto h1-blog-header"
                id="contetTitle"
              >
                با این نکات، پذیرایی مراسم عروسی خود را به یادماندنی کنید!
              </h1>
              <p id="contentDiscription" className="text-regular mx-auto mt-2">
                <span className="text-black font-bold mb-3">
                  با پذیرایی شایسته از مهمانان عروسی، لحظاتی خاطره‌انگیز بسازید!
                  از منوی جذاب و نوشیدنی‌های خاص تا تزئینات چشم‌نواز و
                  برنامه‌ریزی دقیق، همه چیز برای خلق یک جشن فراموش‌نشدنی مهیاست.
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
                  از غذا تا فضا: همه‌چیز درباره پذیرایی در عروسی
                </h2>
                <ol
                  id="contentDiscription"
                  className="text-regular mx-auto text-gray-700 mt-5 "
                >
                  <span className="font-extrabold h-14  px-3 py-1  rounded-full">
                    ایده‌هایی برای پذیرایی لوکس و جذاب در عروسی
                  </span>

                  <li className="text-regular  mt-3 ">
                    <span className="font-bold mb-3 text-lg ml-2">
                      ۱. انتخاب منوی غذایی متناسب با سلیقه مهمانان
                    </span>
                    <br />
                    <span>
                      در هنگام انتخاب منوی غذایی، باید به سلیقه‌ها و نیازهای
                      مختلف مهمانان توجه کنید. سعی کنید تنوعی از غذاهای گیاهی و
                      گوشتی را ارائه دهید تا همه مهمانان بتوانند چیزی مطابق با
                      سلیقه خود پیدا کنند. همچنین، استفاده از غذاهای محلی و سنتی
                      می‌تواند تجربه خاصی را برای مهمانان ایجاد کند.
                    </span>
                  </li>
                  <div className="mx-auto width-auto my-2 px-1.5 py-1.5   rounded-lg">
                    <Image
                      src="/assets/images/S__00844.webp"
                      width={2000}
                      height={2000}
                      alt="انتخاب منوی غذایی متناسب با سلیقه مهمانان|"
                      className="rounded-lg shadow-lg lg:max-h-[900px] mx-auto"
                    />
                  </div>

                  <li className="text-regular  mb-3 mt-4">
                    <span className="font-bold text-lg ml-2 ">
                      ۲. نوشیدنی‌ها: از آبمیوه‌ها تا نوشیدنی‌های گرم
                    </span>
                    <br />
                    <span>
                      نوشیدنی‌ها نقش مهمی در پذیرایی از مهمانان دارند. از انواع
                      آبمیوه‌های تازه و نوشیدنی‌های غیرالکلی گرفته تا چای و
                      قهوه، همه این‌ها می‌توانند به شادی و سرگرمی مهمانان کمک
                      کنند. در نظر داشته باشید که نوشیدنی‌ها باید با توجه به فصل
                      انتخاب شوند. مثلاً در تابستان نوشیدنی‌های خنک و در زمستان
                      نوشیدنی‌های گرم را اضافه کنید.
                    </span>
                  </li>
                  <div className="mx-auto width-auto my-2 px-1.5 py-1.5   rounded-lg">
                    <Image
                      src="/assets/images/photo_2024-11-18_17-21-27.webp"
                      width={2000}
                      height={2000}
                      alt="نوشیدنی‌ها: از آبمیوه‌ها تا نوشیدنی‌های گرم"
                      className="rounded-lg shadow-lg lg:max-h-[800px] h-[500px] lg:max-w-[900px] mx-auto"
                    />
                  </div>

                  <li className="text-regular  mb-3">
                    <span className="font-bold text-lg ml-2">
                      ۳. میان‌وعده‌های خوشمزه و متنوع
                    </span>
                    <br />
                    <span>
                      میان‌وعده‌ها می‌توانند به ویژه در حین برگزاری مراسم و
                      انتظار برای سرو شام، نقش مهمی را ایفا کنند. از خوراکی‌های
                      ساده و خوشمزه مانند میوه‌های تازه، نان و پنیر، تا اسنک‌های
                      خاص مانند برگرهای کوچک و پیش‌غذاهای فینگر فود، گزینه‌های
                      زیادی برای پذیرایی از مهمانان وجود دارد. مهم است که
                      میان‌وعده‌ها به راحتی قابل مصرف باشند و به مهمانان این
                      امکان را بدهند که در هر زمانی از آن‌ها لذت ببرند.
                    </span>
                  </li>
                  <div className="mx-auto width-auto my-2 px-1.5 py-1.5   rounded-lg">
                    <Image
                      src="/assets/images/food12.jpg"
                      width={4000}
                      height={4000}
                      alt="استفاده از گل‌ها"
                      className="rounded-lg shadow-lg lg:max-h-[900px] mx-auto"
                    />
                  </div>
                  <li className="text-regular  mb-3">
                    <span className="font-bold text-lg ml-2">
                      ۴. توجه به نیازهای خاص مهمانان
                    </span>
                    <br />
                    <span>
                      فراموش نکنید که برخی از مهمانان ممکن است نیازهای خاصی
                      داشته باشند، مانند افراد با آلرژی غذایی یا رژیم‌های خاص.
                      از قبل از مهمانان خود بپرسید که آیا محدودیت‌های غذایی
                      دارند و در انتخاب منو به این موارد توجه کنید. با این کار
                      می‌توانید تجربه‌ای دلپذیر و بدون نگرانی برای همه مهمانان
                      فراهم کنید.
                    </span>
                  </li>
                  <div className="mx-auto width-auto my-2 px-1.5 py-1.5   rounded-lg">
                    <Image
                      src="/assets/images/food-normal-services.webp"
                      width={4000}
                      height={4000}
                      alt="نورپردازی"
                      className="rounded-lg shadow-lg lg:max-h-[900px] mx-auto"
                    />
                  </div>

                  <li className="text-regular  mb-3">
                    <span className="font-bold ml-2 text-xl">
                      ۵. نحوه سرو غذا و نوشیدنی
                    </span>
                    <span>
                      نحوه سرو غذا و نوشیدنی نیز بسیار مهم است. می‌توانید از
                      خدمات کیترینگ حرفه‌ای برای سرو غذا استفاده کنید یا برای
                      ایجاد فضایی دوستانه‌تر، از نوع بوفه‌ای برای سرو غذا بهره
                      بگیرید. در هر صورت، توجه به نحوه چیدمان میزها و فضای
                      پذیرایی می‌تواند به زیبایی و راحتی مهمانان کمک کند.
                    </span>
                    <Link href="/menue">
                      <button className=" mb-6 bg-green  text-white hover-btn py-2 px-8 mx-auto rounded-md hover:shadow-2xl transition-transform transform hover:scale-105 mt-8 text-xl">
                        مشاهده منو مجموعه شاتو دو ورسای
                      </button>
                    </Link>
                  </li>
                </ol>

                <span>
                  به یاد داشته باشید که پذیرایی از مهمانان یکی از کلیدی‌ترین
                  بخش‌های برگزاری مراسم عروسی است. با انتخاب مناسب غذا، نوشیدنی
                  و میان‌وعده‌ها، می‌توانید خاطره‌ای خوش برای مهمانان خود
                  بسازید. برای کسب اطلاعات بیشتر و رزرو خدمات ما، با ما تماس
                  بگیرید و جشن عروسی خود را به بهترین شکل ممکن برگزار کنید!
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
