"use client";
import React from "react";
import Image from "next/image";
import logo from "@/assets/icon/logo.png";
import star from "@/assets/icon/star.png";
import Vector_red from "@/assets/icon/Vector_red.png";
import Frame_37 from "@/assets/icon/Frame_37.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";


const Header = () => {
  return (
    <div className="w-[1280px] h-[79px] rounded-[40px] justify-around items-center flex bg-[#FFFFFF] mx-auto mt-[20px] py-[12px] px-[36px]">
      <div className="w-[134px] h-[55px] cursor-pointer">
        <Link href="/" passHref>
          <Image src={logo} alt="logo" />
        </Link>
      </div>
      <div className="justify-around items-center flex gap-2">
        <span className="font-semibold text-[14px] text-[#25272A]">
          Về Chúng tôi
        </span>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-semibold text-[14px] text-[#25272A] bg-[#fff]">
                Giải pháp
              </NavigationMenuTrigger>
              <NavigationMenuContent>Test</NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-semibold text-[14px] text-[#25272A] bg-[#fff]">
                Tài nguyên
              </NavigationMenuTrigger>
              <NavigationMenuContent>Test2</NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className="font-semibold text-[14px] text-[#25272A] bg-[#fff]">
                  Liên hệ
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="w-[94px] h-[40px] rounded-[40px] font-semibold text-[14px] text-[#25272A] bg-[#d4d3d3] px-[12px] py-[8px] flex items-center justify-center gap-2 relative">
                <span className="relative flex items-center justify-center">
                  <Image
                    className="w-[24px] h-[24px]"
                    src={Vector_red}
                    alt="Vector_red"
                  />
                  <Image
                    className="absolute h-[10px] w-[10px] "
                    src={star}
                    alt="Vector_red"
                  />
                </span>
                VI
              </NavigationMenuTrigger>

              <NavigationMenuContent>Test</NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="" legacyBehavior passHref>
                <NavigationMenuLink className="font-semibold w-[210px] h-[38px] rounded-[40px] text-[14px] text-[#25272A] bg-[#1AD598] hover:bg-[#1AD598]/80 px-[12px] py-[8px]">
                  <div className=" flex items-center  justify-center gap-2">
                    <span>Trở Thành Khách Hàng</span>
                    <Image
                      className="h-[22px] w-[22px]"
                      src={Frame_37}
                      alt="Vector_red"
                    />
                  </div>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {/* <ModeToggle /> */}
    </div>
  );
};

export default Header;
