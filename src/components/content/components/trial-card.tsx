import Image from "next/image";
import React from "react";
import trial from "@/assets/images/Trial.png";
import image_18 from "@/assets/images/image_18.png";
import imageData from "@/assets/images/imageData.png";
import Rectangle from "@/assets/images/Rectangle.png";
import Vector_up from "@/assets/icon/Vector_up.png";
const TrialCard = () => {
  return (
    <div className="bg-[#FFFFFF] rounded-3xl overflow-hidden relative">
      <Image width={366} height={650} src={image_18} alt="image_18" />
      <Image
        className="absolute top-[30px] left-[20px]"
        width={425}
        height={262}
        src={imageData}
        alt="imageData"
      />
      <Image
        className="absolute bottom-[130px] left-[20px]"
        width={136}
        height={136}
        src={Rectangle}
        alt="Rectangle"
      />
      <Image
        className="absolute bottom-[155px] left-[50px]"
        width={270}
        height={87}
        src={trial}
        alt="Rectangle"
      />
      <button className="flex items-center absolute bottom-[30px] left-[16px] border border-[#FFFFFF] cursor-pointer hover:bg-[#f0efef] w-[280px] h-[40px] text-[#FFFFFF] rounded-3xl">
        <span className="text-white mr-2 ml-4">Trải nghiệm ngay</span>
        <Image src={Vector_up} alt="Vector_up" />
      </button>
    </div>
  );
};

export default TrialCard;
