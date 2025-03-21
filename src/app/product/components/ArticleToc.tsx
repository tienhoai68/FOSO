"use client";
import { useState } from "react";

export default function ArticleToc() {
  const [showToc, setShowToc] = useState(true);

  return (
    <div className="  p-4 w-full md:w-96">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Nội Dung Bài Viết</h2>
        <button onClick={() => setShowToc(!showToc)}>
          <svg
            className={`w-5 h-5 transition-transform duration-300 ${
              showToc ? "transform rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {showToc && (
        <ul className="">
          <li className="mb-2 text-[#15AA7A] font-semibold">1. Quy trình 5S là gì?</li>
          <li className="mb-2">2. Lợi ích quy trình 5S đem lại</li>
          <li className="mb-2">
            3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?
            <ul className=" ml-4">
              <li className="mb-1">3.1 Cải thiện rõ nét môi trường làm việc</li>
              <li className="mb-1">3.2 Tiết kiệm thời gian đáng kể</li>
              <li className="mb-1">3.3 Tăng năng suất làm việc</li>
              <li className="mb-1">3.4 Tiết kiệm chi phí</li>
              <li className="mb-1">3.5 Tăng chất lượng sản phẩm</li>
            </ul>
          </li>
          <li className="mb-2">
            4. Quy trình 5S gồm các bước:
            <ul className=" ml-4">
              <li className="mb-1">4.1 Seiri (Ngăn nắp)</li>
              <li className="mb-1">4.2 Seiton (Sắp xếp)</li>
              <li className="mb-1">4.3 Seiso (Vệ sinh)</li>
              <li className="mb-1">4.4 Seiketsu (Tiêu chuẩn hóa)</li>
              <li className="mb-1">4.5 Shitsuke (Kỷ luật)</li>
            </ul>
          </li>
          <li className="mb-2">
            5. Quy trình được thực hiện như sau:
            <ul className=" ml-4">
              <li className="mb-1">5.1 Giai đoạn chuẩn bị</li>
              <li className="mb-1">5.2 Triển khai rộng rãi</li>
              <li className="mb-1">
                5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp
              </li>
              <li className="mb-1">5.4 Sàng lọc, sắp xếp và đánh giá</li>
              <li className="mb-1">5.5 Đánh giá</li>
            </ul>
          </li>
          <li className="mb-2">6. Quy trình 5S có giống với Kaizen?</li>
          <li className="mb-2">7. Đối tượng nào nên áp dụng 5S?</li>
          <li className="mb-2">
            8. Các yếu tố tạo nên thành công cho quy trình 5S
          </li>
        </ul>
      )}
    </div>
  );
}
