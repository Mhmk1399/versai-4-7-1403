"use client";
import { useState, FormEvent } from "react";
import { Calendar, utils } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import gold from "../../../public/assets/images/gold.jpg.jpg";
import silver from "../../../public/assets/images/silver.jpg";
import vip from "../../../public/assets/images/vip.jpg";
import bronze from "../../../public/assets/images/bronz.jpg";
import goldDish from "../../../public/assets/images/golddish.jpg";
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !name ||
      !phoneNumber ||
      !gustes ||
      !weddingdate ||
      !reserveddate ||
      !menue
    ) {
      setMessage("Please fill in all fields");
      return;
    }

    const weddingDateObject = new Date(
      weddingdate!.year,
      weddingdate!.month - 1,
      weddingdate!.day
    );
    const reservedDateObject = new Date(
      reserveddate!.year,
      reserveddate!.month - 1,
      reserveddate!.day
    );

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phoneNumber", phoneNumber);
    formData.append("gustes", gustes);
    formData.append("weddingDate", weddingDateObject.toISOString());
    formData.append("reservedDate", reservedDateObject.toISOString());
    formData.append("menue", menue);

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
  const handleImageClick = (src: string) => {
    window.open(src, "_blank");
  };
  const handleClick = (address: string) => {
    window.location.href = address;
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 p-8">
      <div className="bg-white rounded-lg shadow-lg p-4 flex justify-around items-center flex-wrap gap-4 mx-auto mb-4 text-center text-green">
        <h1 className="text-2xl font-bold  text-green text-center mx-auto ">
          غذا ها و خدمات شاتو دو ورسای
        </h1>
        <p>
          ما در ورسای سعی کردیم با ارائه کردن هفت پکیج مختلف از غذا ها و میان
          وعده های متفاوت حداکثر رضایت شما را به دست بیاوریم تمام منو ها قابل
          تغییر می باشند لطفا برای دریافت قیمت ها و اطلاع از خدمات دیگر با تکمیل
          فرم زیر اقدام فرمایید{" "}
        </p>
      </div>
      {/* Shrinkable Container for Menu Photos */}
      <div className="w-full max-w-4xl mb-8">
        <div className="bg-white rounded-lg shadow-lg p-4 flex justify-around items-center flex-wrap gap-4">
          <div
            className="rounded-lg shadow-md transition-transform hover:scale-105 cursor-pointer flex flex-col justify-center"
            style={{
              backgroundImage: `url(${vip.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "300px",
              height: "300px",
            }}
            onClick={() => handleImageClick("/vip-self")}
          >
            <div className="text-4xl text-center text-violet-800 bg-transparent w-fit mx-auto rounded-full px-2 py-1 bg-opacity-85 ">
              vip سلف
            </div>
          </div>
          <div
            className="rounded-lg shadow-md transition-transform hover:scale-105 cursor-pointer flex flex-col justify-center"
            style={{
              backgroundImage: `url(${gold.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "300px",
              height: "300px",
            }}
            onClick={() => handleImageClick("/gold-self")}
          >
            <div className="text-4xl text-center text-yellow-600  bg-transparent w-fit mx-auto rounded-full px-2 py-1 bg-opacity-85">
              سلف طلایی
            </div>
          </div>

          <div
            className="rounded-lg shadow-md transition-transform hover:scale-105 cursor-pointer flex flex-col justify-center"
            style={{
              backgroundImage: `url(${silver.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "300px",
              height: "300px",
            }}
            onClick={() => handleImageClick("/silver-self")}
          >
            <div className="text-4xl text-center text-gray-500 mt- bg-transparent w-fit mx-auto rounded-full px-2 py-1 bg-opacity-85 ">
              سلف نقره ای
            </div>
          </div>

          <div
            className="rounded-lg shadow-md transition-transform hover:scale-105 cursor-pointer flex flex-col justify-center"
            style={{
              backgroundImage: `url(${bronze.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "300px",
              height: "300px",
            }}
            onClick={() => handleImageClick("/base-self")}
          >
            <div className="text-4xl text-center text-amber-700 bg-transparent w-fit mx-auto rounded-full px-2 py-1 bg-opacity-85 ">
              سلف پایه
            </div>
          </div>
          <div
            className="rounded-lg shadow-md transition-transform hover:scale-105 cursor-pointer flex flex-col justify-center"
            style={{
              backgroundImage: `url(${goldDish.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "300px",
              height: "300px",
            }}
            onClick={() => handleImageClick("/vip-dishserve")}
          >
            <div className="text-2xl text-center text-yellow-500 mt-6 bg-transparent w-fit mx-auto rounded-full px-2 py-1 bg-opacity-85 ">
              vip دیس پرس
            </div>
          </div>
          <div
            className="rounded-lg shadow-md transition-transform hover:scale-105 cursor-pointer flex flex-col justify-center"
            style={{
              backgroundImage: `url(${goldDish.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "300px",
              height: "300px",
            }}
            onClick={() => handleImageClick("/gold-dishserve")}
          >
            <div className="text-2xl text-center text-yellow-500 mt-6 bg-transparent w-fit mx-auto rounded-full px-2 py-1 bg-opacity-85 ">
              دیس پرس طلایی
            </div>
          </div>
          <div
            className="rounded-lg shadow-md transition-transform hover:scale-105 cursor-pointer flex flex-col justify-center"
            style={{
              backgroundImage: `url(${goldDish.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "300px",
              height: "300px",
            }}
            onClick={() => handleImageClick("/silver-dishserve")}
          >
            <div className="text-2xl text-center text-yellow-500 mt-6 bg-transparent w-fit mx-auto rounded-full px-2 py-1 bg-opacity-85 ">
              دیس پرس نقره ای
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green rounded-lg shadow-md p-4 flex justify-around items-center flex-wrap shadow-gold gap-4 mx-auto mb-8 text-center text-green">
        <h1 className="text-2xl font-bold text-gold text-center mx-auto ">
          your satisfaction guaranteed
        </h1>
      </div>

      <div className="w-auto sm:w-full max-w-3xl bg-white rounded-lg shadow-lg px-8 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 text-center my-6">
          درخواست قیمت و رزرو زمان بازدید
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="mt-8">
            <label className="block text-xl font-bold text-gray-700 mb-4">
              نام و نام خانوادگی
            </label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              className="mt-1 block w-full rounded-md border-black shadow-lg focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 text-end px-2"
              placeholder="نام خود را وارد کنید"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-xl font-bold text-gray-700 mb-4">
              شماره تماس
            </label>
            <input
              type="text"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              className="mt-1 block w-full rounded-md border-black shadow-lg focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 text-end px-2"
              placeholder="شماره تماس خود را وارد کنید"
            />
          </div>

          {/* Guests */}
          <div>
            <label className="block text-xl font-bold text-gray-700 mb-4">
              تعداد مهمان‌ها
            </label>
            <input
              type="number"
              value={gustes}
              onChange={handleGustesChange}
              className="mt-1 block w-full rounded-md border-black shadow-lg focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 text-end px-2"
              placeholder="تعداد مهمان‌ها را وارد کنید"
            />
          </div>

          {/* Wedding Date */}
          <div className="flex flex-col justify-center items-center">
            <label className="block text-xl font-bold text-gray-700 mb-4">
              تاریخ عروسی
            </label>
            <Calendar
              value={weddingdate}
              onChange={handleWeddingdateChange}
              shouldHighlightWeekends
              locale="fa"
              calendarClassName="custom-calendar w-full"
              colorPrimary="#9c27b0"
              colorPrimaryLight="#f3e5f5"
            />
          </div>

          {/* Reserved Date */}
          <div className="flex flex-col justify-center items-center">
            <label className="block text-xl font-bold text-gray-700 mb-4">
              تاریخ رزرو بازدید
            </label>
            <Calendar
              value={reserveddate}
              onChange={handleReserveddateChange}
              shouldHighlightWeekends
              locale="fa"
              calendarClassName="custom-calendar w-full"
              colorPrimary="#673ab7"
              colorPrimaryLight="#ede7f6"
            />
          </div>

          {/* Menu Selection */}
          <div dir="rtl">
            <label className="block text-xl font-bold text-gray-700 mb-4">
              منو
            </label>
            <select
              value={menue}
              onChange={handleMenueChange}
              className="mt-1 block w-full rounded-md border-black shadow-lg focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 text-end px-2"
            >
              <option value="" disabled className="text-end">
                انتخاب منو
              </option>
              <option value="دیس پرس سیلور" className="text-end">
                دیس پرس سیلور
              </option>
              <option value="دیس پرس گلد" className="text-end">
                دیس پرس گلد
              </option>
              <option value="دیس پرس VIP" className="text-end">
                دیس پرس VIP
              </option>
              <option value="سلف سیلور" className="text-end">
                سلف سیلور
              </option>
              <option value="سلف گلد" className="text-end">
                سلف گلد
              </option>
              <option value="سلف VIP" className="text-end">
                سلف VIP
              </option>
            </select>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-green mb-3 text-white py-3 rounded-md text-lg font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              ارسال فرم
            </button>
          </div>

          {/* Message */}
          {message && (
            <p className="text-center mt-4 text-sm font-medium text-green pb-3">
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Page;
