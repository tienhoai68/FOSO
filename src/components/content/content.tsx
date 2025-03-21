import Image from "next/image";
import React from "react";
import res from "@/assets/images/res.png";
import Frame_1 from "@/assets/icon/Frame_1.png";
import Group from "@/assets/images/Group.png";
import Card from "./components/card";
import { Input } from "../ui/input";
import CategoryList from "./components/categoryList";
import TrialCard from "./components/trial-card";
import JoinCard from "./components/join-card";
import Paginations from "../paginations/paginations";
const Content = () => {
  return (
    <>
      <div className="grid grid-cols-3 w-[1042px] h-[100vh] justify-center gap-6 mx-auto pt-[96px]">
        <div className="col-span-2">
          <h1 className="font-bold text-[28px] mb-1">Tất cả bài viết</h1>
          <div className="relative rounded-2xl bg-[#FFFFFF] overflow-hidden">
            <Image src={res} alt="res" />
            <Image
              width={300}
              height={200}
              className="absolute top-[25px] right-[10px]"
              src={Group}
              alt="Group"
            />
            <div className="absolute top-[20px] left-[20px] font-semibold text-[24px] text-[#FFFFFF] w-[240px] h-[208px]">
              Gia nhập cộng đồng FMRP – Kết nối, chia sẻ, cùng phát triển!
            </div>
            <button className="absolute bottom-[30px] left-[16px] border border-[#FFFFFF] cursor-pointer hover:bg-[#f0efef] w-[180px] h-[40px] text-[#FFFFFF] rounded-3xl">
              Tham gia ngay
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-12">
            <Card />
          </div>
        </div>
        <div className="col-span-1">
          <h1 className="font-bold text-[28px] mb-1">Tìm kiếm</h1>
          <div className="relative">
            <Input placeholder="Tìm kiếm bài viết" />
            <Image
              className="absolute cursor-pointer top-[5px] right-[10px] w-[25px] h-[25px]"
              src={Frame_1}
              alt="res"
            />
          </div>
          <CategoryList />
          <div className="pt-8">
            <TrialCard />
          </div>
          <div className="pt-8">
            <JoinCard />
          </div>
        </div>
        <footer className="py-6 text-center w-full col-span-3">
          <Paginations />
        </footer>
      </div>
    </>
  );
};

export default Content;
