import { Metadata } from "next";
import MainPage from "../../components/route/main-page";

export const metadata: Metadata = {
  title: "شاتو دو ورسای: بروزترین و لاکچری‌ترین باغ تالار در تهران",
  description:
    "شاتو دو ورسای | لاکچری‌ترین باغ تالار تهران | ظرفیت: 1300 نفر | دسترسی بیست دقیقه‌ای از تهران | استیج رقص روی آب |",
};

const MainContainer = () => {
  return (
    <div>
      <MainPage />
    </div>
  );
};
export default MainContainer;
