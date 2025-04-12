import { Metadata } from "next";
import MenuPage from "../../../components/route/menu-page";

export const metadata: Metadata = {
  title: "منوی غذایی و پکیج های پذیرایی شاتو دو ورسای",
  description:
    "شاتو دو ورسای با منوی غذایی متنوع و پکیج های پذیرایی بی نظیر، تجربه ای فراموش نشدنی را برای مهمانان شما رقم می زند.",
};

const MenuContainer = () => {
  return (
    <>
      <div>
        <MenuPage />
      </div>
    </>
  );
};

export default MenuContainer;
