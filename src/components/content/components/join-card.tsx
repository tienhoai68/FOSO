import React from "react";
import Image from "next/image";
import image_18 from "@/assets/images/image_18.png";
import Group1 from "@/assets/images/Group1.png";
import Vector_up from "@/assets/icon/Vector_up.png";
const JoinCard = () => {
  return (
    <div className="bg-[#FFFFFF] rounded-3xl overflow-hidden relative">
      <Image width={366} height={650} src={image_18} alt="image_18" />
      <Image
        className="absolute top-[30px] left-[0px]"
        width={425}
        height={262}
        src={Group1}
        alt="Group1"
      />
      <div className="font-medium absolute bottom-[110px] left-[20px] text-[18px] text-[#fff]">
        Gia nhập cộng đồng FMRP Việt – Kết nối, chia sẻ, cùng phát triển!
      </div>
      <button className="flex items-center absolute bottom-[40px] left-[16px] border border-[#FFFFFF] cursor-pointer hover:bg-[#f0efef] w-[280px] h-[40px] text-[#FFFFFF] rounded-3xl">
        <span className="text-white mr-2 ml-4">Trải nghiệm ngay</span>
        <Image src={Vector_up} alt="Vector_up" />
      </button>
    </div>
  );
};

export default JoinCard;
