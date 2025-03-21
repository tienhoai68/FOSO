import Image from "next/image";
import React from "react";
import Saly from "@/assets/images/Saly-42.png";
import Frame from "@/assets/images/Frame_161.png";
import Blog from "@/assets/images/Blog.png";
const Banner = () => {
  return (
    <div className="flex gap-4 justify-between items-center pt-[24px]">
      <div className="w-[282px] h-[268px]">
        <Image src={Saly} alt="logo" />
      </div>
      <div className="flex flex-col gap-4 items-center justify-center">
        <h6 className="font-normal  text-[14px] text-[#050505]">
          Trang chủ{" > "}Tài nguyên
          <span className="font-bold">{" > "}Blog</span>
        </h6>
        <div className="w-[1280px] h-[200px] flex flex-col items-center">
          <Image src={Blog} alt="logo" />
          <div className="font-medium text-[18px] text-[#33404A] text-center">
            Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
          </div>
        </div>
      </div>
      <div className="w-[320px] h-[251px]">
        <Image src={Frame} alt="Frame" />
      </div>
    </div>
  );
};

export default Banner;
