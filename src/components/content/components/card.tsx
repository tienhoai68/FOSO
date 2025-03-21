import React from "react";
import image_card from "@/assets/images/image_card.png";
import Image from "next/image";
const items = Array(6).fill({
  title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
  date: "17/11/2022",
  readTime: "10 phút đọc",
});
const Card = () => {
  return (
    <>
      {items.map((item, index) => (
        <div key={index} className="w-80 rounded-lg overflow-hidden shadow-md">
          <div className="relative">
            <Image className="w-full block" src={image_card} alt="image_card" />
          </div>
          <div className="p-5">
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <div className="flex items-center mb-4">
              <span role="img" aria-label="calendar" className="mr-1">
                📅
              </span>
              <span>{item.date}</span>
              <span role="img" aria-label="clock" className="ml-2 mr-1">
                🕒
              </span>
              <span>{item.readTime}</span>
            </div>
            <div className="bg-gray-100 p-3 rounded-md text-center cursor-pointer">
              Khám phá thêm →
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
