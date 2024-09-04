import TopAttraction1Img from "../../../../assets/images/top_attraction_g_3_1.png";
import TopAttraction2Img from "../../../../assets/images/top_attraction_g_3_2.png";
import TopAttraction3Img from "../../../../assets/images/top_attraction_g_3_3.png";
import TopAttraction4Img from "../../../../assets/images/top_attraction_g_3_4.png";
import TopAttraction5Img from "../../../../assets/images/top_attraction_g_3_5.png";
import TopAttraction6Img from "../../../../assets/images/top_attraction_g_3_6.png";
import TopAttraction7Img from "../../../../assets/images/top_attraction7.png";
import TopAttraction8Img from "../../../../assets/images/top_attraction_g_6.png";

export default function Gallery_() {
  return (
    <div className="w-full flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-8 lg:gap-y-10 xl:gap-y-12 2xl:gap-y-[32px]">
      <div className="flex w-full px-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-[32px]">
        <div className="flex flex-col w-full gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-[32px]">
          <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-[32px] w-full">
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-[50%]">
              <img src={TopAttraction1Img} className="w-full h-auto" alt="" />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-[50%]">
              <img src={TopAttraction2Img} className="w-full h-auto" alt="" />
            </div>
          </div>
          <div className="w-full">
            <img src={TopAttraction3Img} className="w-full h-auto" alt="" />
          </div>
        </div>
        <div className="flex flex-col w-full gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-[32px]">
          <div className="w-full">
            <img src={TopAttraction4Img} className="w-full h-auto" alt="" />
          </div>
          <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-[32px] w-full">
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-[50%]">
              <img src={TopAttraction5Img} className="w-full h-auto" alt="" />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-[50%]">
              <img src={TopAttraction6Img} className="w-full h-auto" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full px-2 s gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-[32px]">
        <div className="w-full sm:w-5/6 md:w-5/6 lg:w-5/6 xl:w-5/6 2xl:w-[76.4%]">
          <img src={TopAttraction7Img} className="w-full h-auto" alt="" />
        </div>
        <div className="w-full sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 2xl:w-[23.6%]">
          <img src={TopAttraction8Img} className="w-full h-auto" alt="" />
        </div>
      </div>
    </div>
  );
}
